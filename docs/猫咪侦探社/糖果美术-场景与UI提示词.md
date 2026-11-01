# 糖果卡通美术：场景与UI资源及实际提示词

## 本轮资源

依用户提供的3张参考，将背景和UI统一为圆润、柔和高光、奶油蓝紫粉橙配色的2.5D糖果卡通风格。全部使用内置 `image_gen.imagegen`，没有CLI、API密钥或Maker生成。图片已经从默认生成目录复制到工程，保留原始PNG和alpha；没有离线抠图、重绘或裁剪。生成后仅核对文件签名、实际尺寸、元数据与UUID，不把格式检查称为画面质量验收。最终在游戏中的视觉效果和Creator导入由主代理重建验证。

共享父目录 `candy.meta` 由主代理管理；本任务创建 `scenes.meta`、`ui.meta` 及15张PNG的纹理和SpriteFrame元数据，不改旧版归档或TypeScript。

| 路径（相对assets/resources/cat-detective/candy） | 实际尺寸 | 用途 |
| --- | --- | --- |
| ui/lobby.png | 887×1774 | 猫侦探主题竖屏入口、案卷页背景 |
| ui/panel-sheet.png | 1254×1254，2×2网格 | 蓝边、猫耳蓝边、珊瑚票券、紫边4面板 |
| ui/button-sheet.png | 1254×1254，4×4网格 | 8种按钮和8个图标 |
| scenes/office.png | 1122×1402 | 侦探办公室 |
| scenes/alley.png | 1122×1402 | 雨后小巷 |
| scenes/sunroom.png | 1122×1402 | 玻璃阳光房 |
| scenes/market.png | 1122×1402 | 小镇集市 |
| scenes/gallery.png | 1122×1402 | 奇妙画廊 |
| scenes/clocktower.png | 1122×1402 | 午夜钟楼 |
| scenes/balloon.png | 1122×1402 | 热气球 |
| scenes/harbor.png | 1122×1402 | 海边码头 |
| scenes/attic.png | 1122×1402 | 阁楼 |
| scenes/kitchen.png | 1122×1402 | 厨房 |
| scenes/train.png | 1122×1402 | 车站站台 |
| scenes/workshop.png | 1122×1402 | 修理工坊 |

12张场景为固定环境，不烘焙活动关键道具或文字；通过家具、建筑、地面与边缘装饰建立情境，同时给独立道具留出可叠放区域。每张场景都是一次独立生成请求。

## 图集使用

所有坐标均为PNG左上原点像素 `[x,y,width,height]`。不是把所有图等比压进方块：面板和按钮应将适当中心区作九宫格拉伸，图标保持原比例。

### panel-sheet（按左上、右上、左下、右下）

| 索引 | 内容 | 主体alpha范围（外扩3像素） |
| --- | --- | --- |
| 0 | 蓝边奶油面板 | [24,159,603,441] |
| 1 | 蓝色猫耳面板 | [643,144,595,454] |
| 2 | 珊瑚票券面板 | [26,659,595,402] |
| 3 | 紫色面板 | [640,656,594,405] |

### button-sheet（逐行从0开始）

| 索引 | 内容 | 主体alpha范围（外扩3像素） |
| --- | --- | --- |
| 0 | 蓝色长按钮 | [19,99,295,151] |
| 1 | 绿色长按钮 | [327,99,293,151] |
| 2 | 珊瑚长按钮 | [634,99,293,151] |
| 3 | 紫色长按钮 | [941,98,295,152] |
| 4 | 奶油长按钮 | [19,408,295,150] |
| 5 | 蓝色方按钮 | [352,356,242,231] |
| 6 | 紫色方按钮 | [660,356,243,231] |
| 7 | 珊瑚方按钮 | [969,356,245,232] |
| 8 | 返回箭头 | [39,676,251,212] |
| 9 | 暂停 | [368,672,214,220] |
| 10 | 重开 | [657,659,263,238] |
| 11 | 提示灯泡 | [962,632,258,279] |
| 12 | 调查笔记 | [25,941,289,262] |
| 13 | 时钟 | [354,940,240,268] |
| 14 | 星星 | [638,940,274,251] |
| 15 | 猫爪 | [962,944,255,258] |

以上范围是对alpha≥100的主体连通块进行格式分析，忽略面积小于单格0.8%的零散像素后计算；没有修改图片。实际网格为1254/4=313.5像素，因此不应假设整数384像素单格；引擎应使用给出的实际主体范围创建SpriteFrame。

## 参考图角色

- 参考1（面板）：`C:/Users/Administrator/AppData/Local/Temp/codex-clipboard-331abf8a-044c-4d41-86e7-1375c0814efb.png`，只用于美术方向和4面板布局。
- 参考2（图标）：`C:/Users/Administrator/AppData/Local/Temp/codex-clipboard-a872dbb0-940f-4065-b62a-c1a2415d1360.png`，只用于圆润高光和2.5D材质。
- 参考3（背景）：`C:/Users/Administrator/AppData/Local/Temp/codex-clipboard-71c333d5-ed2c-4fb1-8b86-e3c75dd9ad14.png`，只用于竖屏构图、云朵和猫咪风格，主题转为侦探社。

## 实际完整提示词

下列英文为工具实际收到的生产提示词，保留原文便于复现。UI3图使用相应用户参考图，场景12图为自足描述的新图生成；背景不透明，图集请求真实透明背景。

### ui/panel-sheet.png

默认生成来源：`C:\Users\Administrator\.codex\generated_images\01a19590-8c90-7671-a6d0-6aaadf293cca\exec-7d8e610c-cf55-4636-8825-e2fe41b5dcce.png`

```text
Use case: ui-mockup. Asset: production sprite atlas for a cute cat puzzle mobile game. Create ONE transparent PNG atlas, 1536x1536 square, strict 2 by 2 equal cells (each 768x768), each panel fully contained within its own cell with 40px transparent gutter. Use the attached visual reference as the exact art direction: polished soft 2.5D candy mobile-game UI, thick rounded beveled rims, silky soft gradients, gentle white highlights, cream interiors, no dark ink outlines. TOP LEFT: rounded rectangular cream panel with glossy sky-blue rim and tiny coral tape accents; TOP RIGHT: rounded rectangular cream panel with blue rim and two integrated blue cat ears, small coral paw accent; BOTTOM LEFT: cream ticket panel with coral rim and two semicircular side notches, small mint bag accent; BOTTOM RIGHT: cream rounded panel with lavender rim, small blue musical-note and purple speaker accents. Every panel occupies a centered 688 by 600 area of its equal cell, same overall extent, flat front view, no perspective. Large clean blank cream interior in every panel for live text. No text, letters, numerals, watermark, external shadow spilling into other cells. Transparent background outside the four panels. Keep all four panels separate and aligned to this exact grid.
```

### ui/button-sheet.png

默认生成来源：`C:\Users\Administrator\.codex\generated_images\01a19590-8c90-7671-a6d0-6aaadf293cca\exec-a992526a-75bb-4b85-9fbf-ab8337c64ae1.png`

```text
Use case: ui-mockup. Asset: ONE production transparent PNG sprite atlas for a polished cute cat detective mobile game. Strict 4 columns by 4 rows of exactly equal cells, square 1536x1536 requested. All 16 sprites must be centered individually, generous transparent padding inside each cell, no overlaps and no text. Match the reference's rounded candy 2.5D game art: thick beveled edges, shiny but soft pastel gradients, clean highlights, no black outlines, no realism. Read row by row: ROW 1: blank blue wide rounded pill button; blank green wide rounded pill button; blank coral wide rounded pill button; blank lavender wide rounded pill button. ROW 2: blank cream wide rounded pill button; blue rounded square button; purple rounded square button; coral rounded square button. ROW 3: cream return arrow icon; cream pause two-bars icon; cream circular restart arrow; golden lightbulb hint icon. ROW 4: blue cat notebook icon; blue stopwatch icon; golden star icon; coral cat paw icon. Wide buttons may be width 85% of cell, height 35% of cell, square buttons 65% cell. Icons fully visible and self-contained. Flat front-facing view, consistent gentle upper-left light, icon silhouettes visibly recognizable. Genuine transparent background for every empty pixel, not white or black. No numbers, labels, letters, captions, watermark or decorative particles outside each sprite.
```

### ui/lobby.png

默认生成来源：`C:\Users\Administrator\.codex\generated_images\01a19590-8c90-7671-a6d0-6aaadf293cca\exec-100304cd-ca77-4a1d-8a21-a128c4d29d3c.png`

```text
Use case: illustration-story. Asset: tall portrait mobile game home background, requested 1024x2048, same polished candy 2.5D visual language as the supplied cat game reference: soft rounded forms, lavender and cream clouds, sky-blue highlights, coral ribbons, buttery yellows, smooth soft gradients, gentle specular highlights, adorable orange-and-white chubby cats, no dark outlines. Theme: a cozy CAT DETECTIVE AGENCY, not a sport game. In the upper quarter two happy cat detectives, one wearing a small sky-blue detective cap and carrying a magnifying glass, the other wearing a coral scarf holding a tiny cream envelope, welcome the player from behind soft puffy clouds, with a quaint rounded blue detective cottage and pastel village rooftops behind them. Cats have large round brown eyes, rosy cheeks, tiny pink nose, glossy toy-like fur shading, friendly faces. Delicate stars and coral confetti near the top corners. The middle 55 percent must be smooth pale cream-to-lavender gradient space for live game UI, not filled with scene props. Bottom quarter soft lavender clouds curl in from corners, leaving the center softly illuminated. Fully painted background edge-to-edge, no external frame. No text, no words, no numbers, no UI panels, no buttons, no watermark. This is finished production game illustration, not a wireframe, not photorealistic, not watercolor, no gritty texture.
```

### scenes/office.png（侦探办公室）

默认生成来源：`C:\Users\Administrator\.codex\generated_images\01a19590-8c90-7671-a6d0-6aaadf293cca\exec-87312981-c6d5-491d-a370-373b64c4b575.png`

```text
Use case: stylized-concept. Production background illustration for a cute cat detective puzzle mobile game. Portrait board composition, requested 1024x1280, straight-on room view with a slight high camera so furniture surfaces are visible. Finished polished 2.5D candy-cartoon art, chunky rounded shapes, puffy soft bevels, smooth pastel gradients, clean glossy highlights, soft ambient light, cream and sky-blue and lavender and coral accents, charming toy-like scale; match the visual language of cute orange-and-white cat mobile game UI, absolutely no black outlines, watercolor grain, photorealism, gritty detail, wireframe or code-like shapes. Rich recognizable environment and lots of small scenic decoration at the back and side edges. Reserve roughly the central 60 percent as clear usable surfaces/floor for independent gameplay props: do NOT leave a featureless blank room, but avoid baking any key movable puzzle item, keys, loose letters, cats, people, UI or readable text into it. The background itself should tell the location. No text, letters, numerals, captions, buttons, HUD, logos, watermarks or external borders. Paint edge-to-edge. Scene/backdrop: A cozy sunny cat detective office. Curved blue wooden window with soft coral drapes at the back, rounded cream desk and side drawers, lavender bookcase filled with colorful blank-spine books on the left, noticeboard with simple non-readable pinned shapes at upper right, round cushioned stool, mint potted plant, warm cream wood floor. A generous desk surface and lower floor are available for interactive props. Small paw-shaped carved motifs on furniture, a friendly lived-in room.
```

### scenes/alley.png（雨后小巷）

默认生成来源：`C:\Users\Administrator\.codex\generated_images\01a19590-8c90-7671-a6d0-6aaadf293cca\exec-a55b0018-5524-4486-9dd3-873816a818a0.png`

```text
Use case: stylized-concept. Production background illustration for a cute cat detective puzzle mobile game. Portrait board composition, requested 1024x1280, straight-on room view with a slight high camera so furniture surfaces are visible. Finished polished 2.5D candy-cartoon art, chunky rounded shapes, puffy soft bevels, smooth pastel gradients, clean glossy highlights, soft ambient light, cream and sky-blue and lavender and coral accents, charming toy-like scale; match the visual language of cute orange-and-white cat mobile game UI, absolutely no black outlines, watercolor grain, photorealism, gritty detail, wireframe or code-like shapes. Rich recognizable environment and lots of small scenic decoration at the back and side edges. Reserve roughly the central 60 percent as clear usable surfaces/floor for independent gameplay props: do NOT leave a featureless blank room, but avoid baking any key movable puzzle item, keys, loose letters, cats, people, UI or readable text into it. The background itself should tell the location. No text, letters, numerals, captions, buttons, HUD, logos, watermarks or external borders. Paint edge-to-edge. Scene/backdrop: A quaint pastel village alley after rain. Rounded lavender and cream townhouse facades, a blue storage-room door to the right, low brick wall to the left, mint rain gutter along the edge, warm wall lantern, little flowerpots and a short wooden bench at the sides, gently shining pale stone paving with tiny puddles toward the edges. The central path and door approach are unobstructed, fully detailed but easy to read.
```

### scenes/sunroom.png（玻璃阳光房）

默认生成来源：`C:\Users\Administrator\.codex\generated_images\01a19590-8c90-7671-a6d0-6aaadf293cca\exec-baee2ec3-9253-4cff-9a9d-652e4c155a03.png`

```text
Use case: stylized-concept. Production background illustration for a cute cat detective puzzle mobile game. Portrait board composition, requested 1024x1280, straight-on room view with a slight high camera so furniture surfaces are visible. Finished polished 2.5D candy-cartoon art, chunky rounded shapes, puffy soft bevels, smooth pastel gradients, clean glossy highlights, soft ambient light, cream and sky-blue and lavender and coral accents, charming toy-like scale; match the visual language of cute orange-and-white cat mobile game UI, absolutely no black outlines, watercolor grain, photorealism, gritty detail, wireframe or code-like shapes. Rich recognizable environment and lots of small scenic decoration at the back and side edges. Reserve roughly the central 60 percent as clear usable surfaces/floor for independent gameplay props: do NOT leave a featureless blank room, but avoid baking any key movable puzzle item, keys, loose letters, cats, people, UI or readable text into it. The background itself should tell the location. No text, letters, numerals, captions, buttons, HUD, logos, watermarks or external borders. Paint edge-to-edge. Scene/backdrop: A cheerful glass sunroom attached to a cat cottage. Broad arched pale-blue window frames, warm sun streaming in, shelves with lush rounded green plants and pastel pots at both sides, a curved low gardening table along the rear wall, a coral striped awning folded near the upper edge, cream-and-lavender tile floor with gentle sun patches. Central tabletop and floor remain spacious for objects; no loose tools or animals.
```

### scenes/market.png（小镇集市）

默认生成来源：`C:\Users\Administrator\.codex\generated_images\01a19590-8c90-7671-a6d0-6aaadf293cca\exec-3ed1388d-2b21-4e28-a14a-0605445ec5a8.png`

```text
Use case: stylized-concept. Production background illustration for a cute cat detective puzzle mobile game. Portrait board composition, requested 1024x1280, straight-on room view with a slight high camera so furniture surfaces are visible. Finished polished 2.5D candy-cartoon art, chunky rounded shapes, puffy soft bevels, smooth pastel gradients, clean glossy highlights, soft ambient light, cream and sky-blue and lavender and coral accents, charming toy-like scale; match the visual language of cute orange-and-white cat mobile game UI, absolutely no black outlines, watercolor grain, photorealism, gritty detail, wireframe or code-like shapes. Rich recognizable environment and lots of small scenic decoration at the back and side edges. Reserve roughly the central 60 percent as clear usable surfaces/floor for independent gameplay props: do NOT leave a featureless blank room, but avoid baking any key movable puzzle item, keys, loose letters, cats, people, UI or readable text into it. The background itself should tell the location. No text, letters, numerals, captions, buttons, HUD, logos, watermarks or external borders. Paint edge-to-edge. Scene/backdrop: A friendly pastel village market stall square. Rounded cream counter at the back under a coral-and-cream scalloped awning, lavender shelves and closed storage bins, mint produce crates and colorful flower pots around the sides, small blank hanging oval sign with no writing, curved shop windows. Pale blue and peach cobblestone forecourt with a clean central working area. Plenty of charming architectural details but no loose product items to act as puzzle clues.
```

### scenes/gallery.png（奇妙画廊）

默认生成来源：`C:\Users\Administrator\.codex\generated_images\01a19590-8c90-7671-a6d0-6aaadf293cca\exec-9f6cf2bf-150b-4d2c-a4b9-59f7e6a58e45.png`

```text
Use case: stylized-concept. Production background illustration for a cute cat detective puzzle mobile game. Portrait board composition, requested 1024x1280, straight-on room view with a slight high camera so furniture surfaces are visible. Finished polished 2.5D candy-cartoon art, chunky rounded shapes, puffy soft bevels, smooth pastel gradients, clean glossy highlights, soft ambient light, cream and sky-blue and lavender and coral accents, charming toy-like scale; match the visual language of cute orange-and-white cat mobile game UI, absolutely no black outlines, watercolor grain, photorealism, gritty detail, wireframe or code-like shapes. Rich recognizable environment and lots of small scenic decoration at the back and side edges. Reserve roughly the central 60 percent as clear usable surfaces/floor for independent gameplay props: do NOT leave a featureless blank room, but avoid baking any key movable puzzle item, keys, loose letters, cats, people, UI or readable text into it. The background itself should tell the location. No text, letters, numerals, captions, buttons, HUD, logos, watermarks or external borders. Paint edge-to-edge. Scene/backdrop: A whimsical small art gallery in a candy-colored cat village. Thick rounded lavender wall moldings, several framed simple abstract pastel landscapes hung high and at side edges, empty central wall section with subtle wall panels, a rounded cream display plinth to the left edge, a mint velvet bench and plant to the right edge, polished pale peach parquet floor. Integrated soft ceiling spotlights, welcoming and richly furnished. Leave central wall and floor usable for foreground art and props.
```

### scenes/clocktower.png（午夜钟楼）

默认生成来源：`C:\Users\Administrator\.codex\generated_images\01a19590-8c90-7671-a6d0-6aaadf293cca\exec-99a82c57-0e44-40da-a681-20a583db2536.png`

```text
Use case: stylized-concept. Production background illustration for a cute cat detective puzzle mobile game. Portrait board composition, requested 1024x1280, straight-on room view with a slight high camera so furniture surfaces are visible. Finished polished 2.5D candy-cartoon art, chunky rounded shapes, puffy soft bevels, smooth pastel gradients, clean glossy highlights, soft ambient light, cream and sky-blue and lavender and coral accents, charming toy-like scale; match the visual language of cute orange-and-white cat mobile game UI, absolutely no black outlines, watercolor grain, photorealism, gritty detail, wireframe or code-like shapes. Rich recognizable environment and lots of small scenic decoration at the back and side edges. Reserve roughly the central 60 percent as clear usable surfaces/floor for independent gameplay props: do NOT leave a featureless blank room, but avoid baking any key movable puzzle item, keys, loose letters, cats, people, UI or readable text into it. The background itself should tell the location. No text, letters, numerals, captions, buttons, HUD, logos, watermarks or external borders. Paint edge-to-edge. Scene/backdrop: Inside a cozy magical old village clock tower, cheerful not scary. Huge rounded pale-blue clock housing high on the back wall with a blank circular dial surface, thick lavender beams, large decorative golden gear silhouettes fixed at top corners, a blue stair curling along the left wall, warm peach lanterns, a small mint cabinet at the right edge. Cream wooden landing floor, soft moonlight through round windows. The center and lower landing are open for repair props, no dangling interactive rope or loose gears.
```

### scenes/balloon.png（热气球）

默认生成来源：`C:\Users\Administrator\.codex\generated_images\01a19590-8c90-7671-a6d0-6aaadf293cca\exec-d60519a6-3e6d-47d6-9a63-a2cfa4a52cbb.png`

```text
Use case: stylized-concept. Production background illustration for a cute cat detective puzzle mobile game. Portrait board composition, requested 1024x1280, straight-on room view with a slight high camera so furniture surfaces are visible. Finished polished 2.5D candy-cartoon art, chunky rounded shapes, puffy soft bevels, smooth pastel gradients, clean glossy highlights, soft ambient light, cream and sky-blue and lavender and coral accents, charming toy-like scale; match the visual language of cute orange-and-white cat mobile game UI, absolutely no black outlines, watercolor grain, photorealism, gritty detail, wireframe or code-like shapes. Rich recognizable environment and lots of small scenic decoration at the back and side edges. Reserve roughly the central 60 percent as clear usable surfaces/floor for independent gameplay props: do NOT leave a featureless blank room, but avoid baking any key movable puzzle item, keys, loose letters, cats, people, UI or readable text into it. The background itself should tell the location. No text, letters, numerals, captions, buttons, HUD, logos, watermarks or external borders. Paint edge-to-edge. Scene/backdrop: Inside and around a large cute hot-air-balloon basket floating above a pastel village. Coral and sky-blue striped balloon canopy visible above, rounded wicker basket rail curves around lower and side edges, puffy lavender clouds, tiny distant pastel rooftops far below, golden morning sky. A broad cream padded interior basket floor in the center for interactive ballast and rescue items. Fixed tied ropes run only along side edges. No passengers, no loose ballast, no movable puzzle props.
```

### scenes/harbor.png（海边码头）

默认生成来源：`C:\Users\Administrator\.codex\generated_images\01a19590-8c90-7671-a6d0-6aaadf293cca\exec-e0ec5e62-c012-4f6c-9450-8400d2b761d0.png`

```text
Use case: stylized-concept. Production background illustration for a cute cat detective puzzle mobile game. Portrait board composition, requested 1024x1280, straight-on room view with a slight high camera so furniture surfaces are visible. Finished polished 2.5D candy-cartoon art, chunky rounded shapes, puffy soft bevels, smooth pastel gradients, clean glossy highlights, soft ambient light, cream and sky-blue and lavender and coral accents, charming toy-like scale; match the visual language of cute orange-and-white cat mobile game UI, absolutely no black outlines, watercolor grain, photorealism, gritty detail, wireframe or code-like shapes. Rich recognizable environment and lots of small scenic decoration at the back and side edges. Reserve roughly the central 60 percent as clear usable surfaces/floor for independent gameplay props: do NOT leave a featureless blank room, but avoid baking any key movable puzzle item, keys, loose letters, cats, people, UI or readable text into it. The background itself should tell the location. No text, letters, numerals, captions, buttons, HUD, logos, watermarks or external borders. Paint edge-to-edge. Scene/backdrop: A peaceful candy-colored seaside harbor. Rounded pale-blue dock railings, cream wooden pier boards in the foreground, coral-roofed boat shed on the left edge, lavender lighthouse silhouette across mint-blue water in the back, fixed mooring posts and coiled decorative ropes only at distant sides, puffy clouds and gull-shaped tiny decorative marks far away. A generous central pier working space for boat repair and delivery props. No boats occupying the central interactive space, no loose puzzle objects.
```

### scenes/attic.png（阁楼）

默认生成来源：`C:\Users\Administrator\.codex\generated_images\01a19590-8c90-7671-a6d0-6aaadf293cca\exec-339c8c85-3b49-4173-9526-9b33ed3aae16.png`

```text
Use case: stylized-concept. Production background illustration for a cute cat detective puzzle mobile game. Portrait board composition, requested 1024x1280, straight-on room view with a slight high camera so furniture surfaces are visible. Finished polished 2.5D candy-cartoon art, chunky rounded shapes, puffy soft bevels, smooth pastel gradients, clean glossy highlights, soft ambient light, cream and sky-blue and lavender and coral accents, charming toy-like scale; match the visual language of cute orange-and-white cat mobile game UI, absolutely no black outlines, watercolor grain, photorealism, gritty detail, wireframe or code-like shapes. Rich recognizable environment and lots of small scenic decoration at the back and side edges. Reserve roughly the central 60 percent as clear usable surfaces/floor for independent gameplay props: do NOT leave a featureless blank room, but avoid baking any key movable puzzle item, keys, loose letters, cats, people, UI or readable text into it. The background itself should tell the location. No text, letters, numerals, captions, buttons, HUD, logos, watermarks or external borders. Paint edge-to-edge. Scene/backdrop: A cozy pastel cottage attic with sloping lavender roof beams, a round blue window at the back letting in warm sunbeams, built-in cream shelves full of colorful closed boxes and old blank-spine books at the edges, coral upholstered trunk in a rear corner, a tiny toy rocking horse at the extreme left side, mint quilt folded on a side ledge. Pale peach wooden floor, dust motes only as subtle glow. Rich and snug, central attic floor free for investigation props, no loose key or letters.
```

### scenes/kitchen.png（厨房）

默认生成来源：`C:\Users\Administrator\.codex\generated_images\01a19590-8c90-7671-a6d0-6aaadf293cca\exec-56c0b4b9-4ffc-4461-8caa-f800a2383c45.png`

```text
Use case: stylized-concept. Production background illustration for a cute cat detective puzzle mobile game. Portrait board composition, requested 1024x1280, straight-on room view with a slight high camera so furniture surfaces are visible. Finished polished 2.5D candy-cartoon art, chunky rounded shapes, puffy soft bevels, smooth pastel gradients, clean glossy highlights, soft ambient light, cream and sky-blue and lavender and coral accents, charming toy-like scale; match the visual language of cute orange-and-white cat mobile game UI, absolutely no black outlines, watercolor grain, photorealism, gritty detail, wireframe or code-like shapes. Rich recognizable environment and lots of small scenic decoration at the back and side edges. Reserve roughly the central 60 percent as clear usable surfaces/floor for independent gameplay props: do NOT leave a featureless blank room, but avoid baking any key movable puzzle item, keys, loose letters, cats, people, UI or readable text into it. The background itself should tell the location. No text, letters, numerals, captions, buttons, HUD, logos, watermarks or external borders. Paint edge-to-edge. Scene/backdrop: A sunny candy-cartoon cottage kitchen. Rounded cream-and-mint lower cupboards, a thick pale-blue countertop curving across the back wall, coral curtains framing a sunny small window, lavender tiled backsplash, cute cream oven at one side, pastel hanging pots along the top edge, a small rounded dining side-table at the right edge, warm peach floor tiles. Rich household details, a broad central countertop and foreground floor for puzzle items. No people, cats, loose food, utensils or readable labels.
```

### scenes/train.png（车站站台）

默认生成来源：`C:\Users\Administrator\.codex\generated_images\01a19590-8c90-7671-a6d0-6aaadf293cca\exec-d8359f86-6ce3-42e2-9a16-1814735e88f8.png`

```text
Use case: stylized-concept. Production background illustration for a cute cat detective puzzle mobile game. Portrait board composition, requested 1024x1280, straight-on room view with a slight high camera so furniture surfaces are visible. Finished polished 2.5D candy-cartoon art, chunky rounded shapes, puffy soft bevels, smooth pastel gradients, clean glossy highlights, soft ambient light, cream and sky-blue and lavender and coral accents, charming toy-like scale; match the visual language of cute orange-and-white cat mobile game UI, absolutely no black outlines, watercolor grain, photorealism, gritty detail, wireframe or code-like shapes. Rich recognizable environment and lots of small scenic decoration at the back and side edges. Reserve roughly the central 60 percent as clear usable surfaces/floor for independent gameplay props: do NOT leave a featureless blank room, but avoid baking any key movable puzzle item, keys, loose letters, cats, people, UI or readable text into it. The background itself should tell the location. No text, letters, numerals, captions, buttons, HUD, logos, watermarks or external borders. Paint edge-to-edge. Scene/backdrop: A charming small pastel train station platform with a rounded blue-and-lavender train visible along the rear edge, cream station arch and coral roof at the left side, a mint bench and closed parcel cabinet at the right edge, large blank round station-clock housing high above, cream-and-peach paving and safety stripe toward the background only. Puffy clouds through arched windows. Broad central platform for ticket, parcel and route puzzles. No passengers, loose tickets, readable signs or UI.
```

### scenes/workshop.png（修理工坊）

默认生成来源：`C:\Users\Administrator\.codex\generated_images\01a19590-8c90-7671-a6d0-6aaadf293cca\exec-b0b4d805-b810-4bce-ba7f-c69c58a1d1a9.png`

```text
Use case: stylized-concept. Production background illustration for a cute cat detective puzzle mobile game. Portrait board composition, requested 1024x1280, straight-on room view with a slight high camera so furniture surfaces are visible. Finished polished 2.5D candy-cartoon art, chunky rounded shapes, puffy soft bevels, smooth pastel gradients, clean glossy highlights, soft ambient light, cream and sky-blue and lavender and coral accents, charming toy-like scale; match the visual language of cute orange-and-white cat mobile game UI, absolutely no black outlines, watercolor grain, photorealism, gritty detail, wireframe or code-like shapes. Rich recognizable environment and lots of small scenic decoration at the back and side edges. Reserve roughly the central 60 percent as clear usable surfaces/floor for independent gameplay props: do NOT leave a featureless blank room, but avoid baking any key movable puzzle item, keys, loose letters, cats, people, UI or readable text into it. The background itself should tell the location. No text, letters, numerals, captions, buttons, HUD, logos, watermarks or external borders. Paint edge-to-edge. Scene/backdrop: A welcoming toy-like repair workshop for a cat detective village. Thick rounded blue workbench along the back, lavender pegboard with FIXED decorative tool silhouettes high on the wall, cream cupboards, mint machine housing at the left edge, coral drawer stack at the right edge, warm overhead task lamps, smooth pale peach floor. Side shelves hold closed jars and blank storage boxes. Broad clear workbench surface and lower working area for movable repair props. No readable labels, no loose tools in the central area.
```

