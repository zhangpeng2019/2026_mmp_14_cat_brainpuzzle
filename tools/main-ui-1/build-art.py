"""Deterministic MainUI1 sprite extraction, composition, packing and verification.

Adapted from game-ui-designer/scripts/build_pixel_consistent_ui.py.
Run: python tools/main-ui-1/build-art.py (requires Pillow and numpy).
Uses saved masters only; no network access or image generation.
"""
from __future__ import annotations
import json
from pathlib import Path
import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageFont, ImageOps

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / "deliverables/MainUI1"
TEXTURES = ROOT / "assets/resources/main-ui-1/textures"
SPEC = json.loads((OUT / "art-spec.json").read_text(encoding="utf-8-sig"))
SOURCE_IDS = [a["id"] for a in SPEC["assets"]]
ASSETS = SPEC["assets"] + SPEC.get("derived_assets", [])
ASSET_IDS = [a["id"] for a in ASSETS]
SIZES = {a["id"]: tuple(a["size"]) for a in ASSETS}
SLICE_IDS = {a["id"] for a in ASSETS if a.get("resize") == "horizontal-three-slice"}
GRID_COLUMNS, GRID_ROWS = SPEC["grid"]
SCREEN = tuple(SPEC["resolution"])

def relative(path: Path) -> str:
    return path.relative_to(ROOT).as_posix()

def export_sprite(asset_id: str, source: Image.Image) -> dict:
    """Scale art uniformly; extend only a control's plain horizontal center."""
    target_size = SIZES[asset_id]
    sliced = asset_id in SLICE_IDS
    scale = target_size[1] / source.height if sliced else min(
        target_size[0] / source.width, target_size[1] / source.height)
    resized_size = (max(1, round(source.width * scale)), max(1, round(source.height * scale)))
    resized = source.resize(resized_size, Image.Resampling.LANCZOS)
    data = np.array(resized)
    data[data[:, :, 3] == 0] = 0
    resized = Image.fromarray(data)
    target = Image.new("RGBA", target_size)
    details = {"uniform_scale": scale, "scaled_art_size": list(resized_size)}
    if sliced:
        # Half-height end caps contain the rounded ends and specular spots.
        # Copy both caps unchanged; only the broad, undecorated middle grows.
        cap = resized.height // 2
        if resized.width <= 2 * cap or target.width < resized.width:
            raise ValueError(f"{asset_id}: three-slice requires a wider target and a nonempty center")
        left = resized.crop((0, 0, cap, resized.height))
        right = resized.crop((resized.width - cap, 0, resized.width, resized.height))
        center = resized.crop((cap, 0, resized.width - cap, resized.height))
        target.paste(left, (0, 0))
        target.paste(center.resize((target.width - 2 * cap, target.height), Image.Resampling.LANCZOS), (cap, 0))
        target.paste(right, (target.width - cap, 0))
        cap_diff = differing_pixels(left, target.crop((0, 0, cap, target.height))) + differing_pixels(
            right, target.crop((target.width - cap, 0, target.width, target.height)))
        assert cap_diff == 0, f"{asset_id}: rounded ends must retain their uniformly scaled pixels"
        details.update({"slice_caps": [cap, cap], "cap_differing_pixels": cap_diff})
        offset = (0, 0)
    else:
        offset = ((target.width - resized.width) // 2, (target.height - resized.height) // 2)
        target.paste(resized, offset)
    output_path = TEXTURES / f"{asset_id}.png"
    target.save(output_path)
    return {
        "screen_size": list(target_size), "screen_file": relative(output_path), "pivot": [0.5, 0.5],
        "resize": "horizontal-three-slice" if sliced else "contain", **details,
        "padding_offset": list(offset), "visible_bounds": list(target.getbbox()),
    }

def remove_chroma(image: Image.Image) -> Image.Image:
    """Remove magenta; unmix key colors only in a narrow antialiased edge band."""
    rgb = np.asarray(image.convert("RGB")).astype(np.float32)
    r, g, b = rgb[:, :, 0], rgb[:, :, 1], rgb[:, :, 2]
    key = (r > 195) & (b > 190) & (g < 100) & (np.minimum(r, b) - g > 135)
    expanded = np.asarray(Image.fromarray(key.astype(np.uint8) * 255).filter(ImageFilter.MaxFilter(7))) > 0
    known = ~expanded
    foreground = rgb.copy()
    # Propagate nearby opaque art colors through the 3-pixel matte band.
    for _ in range(8):
        was_known = known.copy()
        for dy, dx in ((-1, 0), (1, 0), (0, -1), (0, 1), (-1, -1), (1, 1)):
            shifted_known = np.roll(was_known, (dy, dx), (0, 1))
            shifted_color = np.roll(foreground, (dy, dx), (0, 1))
            take = ~known & shifted_known
            foreground[take] = shifted_color[take]
            known[take] = True
    matte = np.ones(key.shape, dtype=np.float32)
    band = expanded & ~key
    key_color = np.array([251., 2., 250.], dtype=np.float32)
    direction = foreground - key_color
    denom = np.maximum(np.sum(direction * direction, axis=2), 1)
    estimated = np.sum((rgb - key_color) * direction, axis=2) / denom
    matte[band] = np.clip(estimated[band], 0, 1)
    matte[key] = 0
    recovered = (rgb - (1 - matte[:, :, None]) * key_color) / np.maximum(matte[:, :, None], .001)
    rgb[band] = recovered[band]
    rgb[matte == 0] = 0
    rgba = np.concatenate((np.clip(rgb, 0, 255), matte[:, :, None] * 255), axis=2)
    return Image.fromarray(np.rint(rgba).astype(np.uint8))

def crop_grid_assets(master: Image.Image) -> dict[str, dict]:
    """Full-master connected components; grid cells assign IDs, never crop art."""
    width, height = master.size
    alpha = master.getchannel("A")
    mask = np.asarray(alpha) > 48
    visited = np.zeros((height, width), dtype=bool)
    cells = {}
    for y in range(height):
        for x in range(width):
            if visited[y, x] or not mask[y, x]:
                continue
            stack = [(x, y)]
            visited[y, x] = True
            component = []
            while stack:
                cx, cy = stack.pop()
                component.append((cx, cy))
                for ny in range(max(0, cy - 1), min(height, cy + 2)):
                    for nx in range(max(0, cx - 1), min(width, cx + 2)):
                        if not visited[ny, nx] and mask[ny, nx]:
                            visited[ny, nx] = True
                            stack.append((nx, ny))
            if len(component) < 40:
                continue
            points = np.asarray(component)
            center = (points.min(axis=0) + points.max(axis=0)) / 2
            cell = (min(GRID_COLUMNS - 1, int(center[0] * GRID_COLUMNS / width)),
                    min(GRID_ROWS - 1, int(center[1] * GRID_ROWS / height)))
            cells.setdefault(cell, []).append(component)
    source_dir = OUT / "source/sprites"
    source_dir.mkdir(parents=True, exist_ok=True)
    records = {}
    for index, asset_id in enumerate(SOURCE_IDS):
        cell = (index % GRID_COLUMNS, index // GRID_COLUMNS)
        candidates = cells.get(cell, [])
        if not candidates:
            raise RuntimeError(f"No connected component found for {asset_id}")
        component = max(candidates, key=len)
        selected_arr = np.zeros((height, width), dtype=np.uint8)
        points = np.asarray(component)
        selected_arr[points[:, 1], points[:, 0]] = 255
        selected = Image.fromarray(selected_arr).filter(ImageFilter.MaxFilter(9))
        clean_alpha = Image.new("L", master.size, 0)
        clean_alpha.paste(alpha, mask=selected)
        bbox = clean_alpha.getbbox()
        assert bbox is not None
        pad = 6
        rect = (max(0, bbox[0] - pad), max(0, bbox[1] - pad),
                min(width, bbox[2] + pad), min(height, bbox[3] + pad))
        isolated = master.copy()
        isolated.putalpha(clean_alpha)
        source = isolated.crop(rect)
        data = np.array(source)
        data[data[:, :, 3] == 0] = 0
        source = Image.fromarray(data)
        source_path = source_dir / f"{asset_id}.png"
        source.save(source_path)
        records[asset_id] = {
            "grid_cell": list(cell), "source_rect": list(rect), "source_size": list(source.size),
            "source_file": relative(source_path), **export_sprite(asset_id, source),
        }
    for asset in SPEC.get("derived_assets", []):
        source_record = records[asset["source"]]
        source = Image.open(ROOT / source_record["source_file"]).convert("RGBA")
        records[asset["id"]] = {
            "derived_from": asset["source"],
            **{key: source_record[key] for key in ("source_rect", "source_size", "source_file")},
            **export_sprite(asset["id"], source),
        }
    return records

def load_font(size: int) -> ImageFont.FreeTypeFont:
    for name in ("msyhbd.ttc", "simhei.ttf"):
        path = Path("C:/Windows/Fonts") / name
        if path.exists():
            return ImageFont.truetype(str(path), size)
    raise RuntimeError("A Chinese preview font is required (Microsoft YaHei or SimHei).")

def centered_text(canvas, center, text, size, fill=(255, 255, 255, 255), stroke=0, outline=(31, 124, 195, 255)):
    draw = ImageDraw.Draw(canvas)
    font = load_font(size)
    box = draw.textbbox((0, 0), text, font=font, stroke_width=stroke)
    x = center[0] - (box[2] - box[0]) / 2 - box[0]
    y = center[1] - (box[3] - box[1]) / 2 - box[1]
    draw.text((x, y), text, font=font, fill=fill, stroke_width=stroke, stroke_fill=outline)

def differing_pixels(a: Image.Image, b: Image.Image) -> int:
    return int(np.count_nonzero(np.any(np.asarray(a) != np.asarray(b), axis=2)))

def compose_screen(sprites: dict[str, Image.Image]):
    canvas = Image.open(TEXTURES / "ocean-island.png").convert("RGBA")
    placements, checks = [], []
    def place(asset_id, center):
        sprite = sprites[asset_id]
        x, y = center[0] - sprite.width // 2, center[1] - sprite.height // 2
        rect = (x, y, x + sprite.width, y + sprite.height)
        before = canvas.crop(rect)
        canvas.alpha_composite(sprite, (x, y))
        after = canvas.crop(rect)
        expected = Image.alpha_composite(before, sprite)
        checks.append({"asset_id": asset_id, "rect": list(rect), "checked_pixels": sprite.width * sprite.height,
                       "differing_pixels": differing_pixels(after, expected)})
        placements.append({"asset_id": asset_id, "position": [x, y], "center": list(center),
                           "size": list(sprite.size), "scale": 1})
    centers = SPEC["layout"]["header"]["centers"]
    for (cx, cy), icon in zip(centers, ("coin", "token", "energy")):
        place("counter-pill", (cx, cy))
        place(icon, (cx - 69, cy))
        place("plus-gold", (cx + 67, cy))
    for center, icon in zip(SPEC["layout"]["events"]["centers"], ("event-gift", "event-island")):
        place(icon, tuple(center))
    place("element-tile", (479, 1040))
    place("button-play", tuple(SPEC["layout"]["play"]["center"]))
    for center, icon in zip(SPEC["layout"]["navigation"]["centers"], ("nav-menu", "nav-trophy", "nav-collection", "nav-shop", "nav-more")):
        place(icon, tuple(center))
    # Save and verify the exact sprite layer before separately rendered live text.
    canvas.save(OUT / "source/sprite-layer.png")
    for (cx, cy), value in zip(centers, ("0", "3万", "29/30")):
        centered_text(canvas, (cx + 3, cy), value, 24, fill=(44, 136, 208, 255))
    centered_text(canvas, (510, 107), "05:09后+1", 17, stroke=1)
    centered_text(canvas, (560, 270), "福利中心", 22, stroke=2)
    centered_text(canvas, (560, 410), "海岛礼包", 22, stroke=2)
    centered_text(canvas, (298, 1040), "第 4 关出现新元素：", 26, stroke=2)
    centered_text(canvas, (320, 1135), "第 1 关", 53, stroke=3, outline=(57, 137, 37, 255))
    for cx, label in ((190, "排行榜"), (320, "海岛图鉴"), (450, "道具屋")):
        centered_text(canvas, (cx, 1341), label, 22, stroke=2)
    canvas.save(OUT / "MainUI1.png")
    diff = sum(c["differing_pixels"] for c in checks)
    return placements, {
        "method": "Each before/after sprite placement patch compared with source PNG alpha composition at 1:1, before labels",
        "checked_pixels": sum(c["checked_pixels"] for c in checks), "differing_pixels": diff,
        "status": "pass" if diff == 0 else "fail", "entries": checks,
    }

def pack_sheet(sprites):
    # Compact shelves, no scaling/blending: preserves every source RGBA byte.
    width, gap = 1024, 24
    x, y, row_height = gap, gap, 0
    records = {}
    for asset_id, sprite in sprites.items():
        if x + sprite.width + gap > width:
            x, y, row_height = gap, y + row_height + gap, 0
        records[asset_id] = {"packed_rect": [x, y, x + sprite.width, y + sprite.height]}
        x += sprite.width + gap
        row_height = max(row_height, sprite.height)
    sheet = Image.new("RGBA", (width, y + row_height + gap))
    for asset_id, sprite in sprites.items():
        sheet.paste(sprite, tuple(records[asset_id]["packed_rect"][:2]))
    path = OUT / "MainUI1-sprites.png"
    sheet.save(path)
    saved = Image.open(path).convert("RGBA")
    checks = []
    for asset_id, sprite in sprites.items():
        rect = tuple(records[asset_id]["packed_rect"])
        checks.append({"asset_id": asset_id, "checked_pixels": sprite.width * sprite.height,
                       "differing_pixels": differing_pixels(sprite, saved.crop(rect))})
    diff = sum(c["differing_pixels"] for c in checks)
    return records, {
        "method": "RGBA comparison of every packed sprite crop against exact runtime texture PNG",
        "checked_pixels": sum(c["checked_pixels"] for c in checks), "differing_pixels": diff,
        "status": "pass" if diff == 0 else "fail", "entries": checks,
    }

def main():
    TEXTURES.mkdir(parents=True, exist_ok=True)
    master_path = OUT / "source/ui-master.png"
    master = remove_chroma(Image.open(master_path))
    master.save(OUT / "source/ui-master-alpha.png")
    records = crop_grid_assets(master)
    scene_path = OUT / "source/ocean-island-master.png"
    scene = Image.open(scene_path).convert("RGBA")
    ImageOps.fit(scene, SCREEN, method=Image.Resampling.LANCZOS).save(TEXTURES / "ocean-island.png")
    Image.new("RGBA", (2, 2), (255, 255, 255, 255)).save(TEXTURES / "shade.png")
    print(f"Runtime textures ready: {len(records)} controls + ocean-island + shade.", flush=True)
    sprites = {asset_id: Image.open(TEXTURES / f"{asset_id}.png").convert("RGBA") for asset_id in ASSET_IDS}
    placements, screen_check = compose_screen(sprites)
    packed, sheet_check = pack_sheet(sprites)
    for asset_id, record in records.items():
        record.update(packed[asset_id])
    manifest = {
        "feature": "MainUI1", "mode": "pixel-consistent", "screen_size": list(SCREEN),
        "master_source": relative(master_path), "scene_source": relative(scene_path),
        "scene_file": relative(TEXTURES / "ocean-island.png"),
        "scene_resize": {"method": "uniform-cover-center-crop", "source_size": list(scene.size),
                         "target_size": list(SCREEN)},
        "sprite_sheet": relative(OUT / "MainUI1-sprites.png"), "preview": relative(OUT / "MainUI1.png"),
        "text": "Separate live Cocos Label nodes; preview rendered with Microsoft YaHei Bold. Text is not baked into sprites.",
        "shade": {"file": relative(TEXTURES / "shade.png"), "size": [2, 2], "purpose": "Module-owned white tint texture for modal overlay"},
        "assets": records, "placements": placements,
        "verification": {"packed_sheet": sheet_check, "screen_composition": screen_check,
                         "proportions": {"method": "Uniform source scale with integer-pixel rounding; three-slice caps copied unchanged",
                                         "status": "pass", "sliced_assets": sorted(SLICE_IDS),
                                         "cap_differing_pixels": sum(r.get("cap_differing_pixels", 0) for r in records.values())},
                         "differing_pixels": sheet_check["differing_pixels"] + screen_check["differing_pixels"]},
    }
    (OUT / "manifest.json").write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    assert manifest["verification"]["differing_pixels"] == 0
    print(json.dumps({"sprite_count": len(sprites), "screen": relative(OUT / "MainUI1.png"),
                      "sheet": relative(OUT / "MainUI1-sprites.png"), "differing_pixels": 0}, ensure_ascii=False))

if __name__ == "__main__":
    main()
