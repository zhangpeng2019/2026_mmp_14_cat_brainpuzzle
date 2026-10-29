// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/album-image-save.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { sys as __rea_outer_r } from "cc";
import { director as __rea_outer_l } from "cc";
import { RenderTexture as __rea_outer_a } from "cc";
import { Node as __rea_outer_n } from "cc";
import { Camera as __rea_outer_i } from "cc";
import { Color as __rea_outer_o } from "cc";
import { UITransform as __rea_outer_s } from "cc";
import { Sprite as __rea_outer_u } from "cc";
import { Director as __rea_outer_c } from "cc";
import { assetManager as __rea_outer_v } from "cc";
import { native as __rea_outer_d } from "cc";
import { encodeRgbaToPng as __rea_outer_m } from "./png-encode-rgba";
let __recovered_export_0, __recovered_export_1;
__rea_outer_t._RF.push({}, "bf8f1W3UDdJn6yy6vBnpimf", "album-image-save", void 0);
const f = 1 << 19,
  g = e => new Promise(t => {
    __rea_outer_l.once(e, () => {
      t();
    });
  }),
  y = () => {
    var e;
    const t = (null == (e = globalThis.jsb) ? void 0 : e.fileUtils) ?? null;
    return t || console.error("[AlbumSave] jsb.fileUtils not available"), t;
  },
  h = e => {
    const t = /\.([a-zA-Z0-9]+)(?:[?#].*)?$/.exec(e);
    return t ? `.${t[1].toLowerCase()}` : "";
  },
  p = (e, t, r) => {
    const l = (e => {
      const t = `${e.getWritablePath()}album_exports/`;
      return e.isDirectoryExist(t) || e.createDirectory(t), t;
    })(e);
    if (!l) return null;
    const a = h(t),
      n = a || r,
      i = a ? t.slice(0, -a.length) : t;
    return `${l}${(i || "image").replace(/[^a-zA-Z0-9._-]/g, "_")}${n}`;
  },
  b = e => {
    if ("string" != typeof e) return null;
    const t = e.trim();
    return t ? t.startsWith("http://") || t.startsWith("https://") ? null : t : null;
  },
  w = e => {
    if (null == e) return String(e);
    if ("string" == typeof e || "number" == typeof e || "boolean" == typeof e) return String(e);
    try {
      return JSON.stringify(e);
    } catch {
      var t;
      return `[${"object" == typeof e && e && "constructor" in e ? (null == (t = e.constructor) ? void 0 : t.name) ?? "Object" : typeof e}]`;
    }
  },
  S = e => {
    const t = __rea_outer_v.cacheManager;
    if (null == t || !t.getCache) return console.warn("[AlbumSave] assetManager.cacheManager.getCache not available"), null;
    try {
      const r = t.getCache(e);
      return r && r.trim() ? r : null;
    } catch (t) {
      return console.error(`[AlbumSave] cacheManager.getCache failed originUrl=${e}`, t), null;
    }
  },
  F = async e => {
    const t = (() => {
      const e = (null == __rea_outer_d ? void 0 : __rea_outer_d.fileUtils) ?? null;
      return e || console.warn("[AlbumSave] native.fileUtils not available"), e;
    })();
    if (!t) return null;
    if (t.getDataFromFile) try {
      const r = t.getDataFromFile(e);
      if (r) return new Uint8Array(r);
    } catch (t) {
      console.error(`[AlbumSave] getDataFromFile failed path=${e}`, t);
    }
    return t.readDataFile ? await new Promise(r => {
      null == t.readDataFile || t.readDataFile(e, (t, l) => {
        if (t || !l) return console.error(`[AlbumSave] readDataFile failed path=${e} err=${t ?? "unknown"}`), void r(null);
        r(new Uint8Array(l));
      });
    }) : (console.warn("[AlbumSave] no native binary file reader available"), null);
  },
  x = async (e, t, r) => {
    const v = __rea_outer_l.getScene();
    if (null == v || !v.isValid) return null;
    const d = new __rea_outer_a();
    d.reset({
      width: t,
      height: r
    });
    const m = new __rea_outer_n("__AlbumCapCam");
    m.layer = f;
    const y = m.addComponent(__rea_outer_i);
    y.clearFlags = __rea_outer_i.ClearFlag.SOLID_COLOR, y.clearColor = new __rea_outer_o(0, 0, 0, 0), y.projection = __rea_outer_i.ProjectionType.ORTHO, y.orthoHeight = Math.max(r / 2, 1), y.near = .1, y.far = 2e3, y.visibility = f, y.priority = 2147483647, y.targetTexture = d, v.addChild(m), m.setWorldPosition(0, 0, 800);
    const h = new __rea_outer_n("__AlbumCapSp");
    h.layer = f;
    h.addComponent(__rea_outer_s).setContentSize(t, r);
    const p = h.addComponent(__rea_outer_u);
    p.sizeMode = __rea_outer_u.SizeMode.CUSTOM, p.spriteFrame = e, v.addChild(h), h.setWorldPosition(0, 0, 0);
    try {
      return await (async () => {
        await g(__rea_outer_c.EVENT_AFTER_RENDER), await g(__rea_outer_c.EVENT_AFTER_RENDER);
      })(), v.isValid ? d.readPixels(0, 0, t, r) : null;
    } finally {
      m.destroy(), h.destroy(), d.destroy();
    }
  },
  $ = __recovered_export_0 = async (e, t) => {
    if (!__rea_outer_r.isNative || null == e || !e.isValid) return null;
    const l = y();
    if (!l) return null;
    const a = Math.max(1, Math.floor(e.rect.width)),
      n = Math.max(1, Math.floor(e.rect.height)),
      i = await x(e, a, n);
    if (!i || i.length < a * n * 4) return console.error("[AlbumSave] readPixels failed or size mismatch"), null;
    const o = ((e, t, r) => {
      const l = 4 * t,
        a = new Uint8Array(e.length);
      for (let t = 0; t < r; t++) {
        const n = (r - 1 - t) * l;
        a.set(e.subarray(n, n + l), t * l);
      }
      return a;
    })(i, a, n);
    let s;
    try {
      s = __rea_outer_m(a, n, o);
    } catch (e) {
      return console.error("[AlbumSave] PNG encode failed", e), null;
    }
    const u = p(l, t, ".png");
    return u ? l.writeDataToFile(s, u) ? (console.log(`[AlbumSave] local PNG written w=${a} h=${n} bytes=${s.length} path=${u}`), u) : (console.error("[AlbumSave] writeDataToFile failed", u), null) : null;
  };
__recovered_export_1 = async (e, t) => {
  var l;
  if (!__rea_outer_r.isNative) return null;
  const a = y();
  if (!a) return null;
  const n = (e => {
      var t;
      if (null == e || !e.isValid) return console.warn("[AlbumSave] resolveTextureSourceFile: texture invalid"), null;
      const r = e.image ?? null,
        l = [{
          key: "texture.nativeUrl",
          rawValue: e.nativeUrl
        }, {
          key: "texture.image.nativeUrl",
          rawValue: null == r ? void 0 : r.nativeUrl
        }, {
          key: "texture.image.url",
          rawValue: null == r ? void 0 : r.url
        }, {
          key: "texture.image.nativeAsset",
          rawValue: null == r ? void 0 : r.nativeAsset
        }],
        a = [`texture.name=${e.name || "<unnamed>"}`, `texture.nativeUrl=${w(e.nativeUrl)}`, `image.type=${(null == r || null == (t = r.constructor) ? void 0 : t.name) ?? "null"}`, `image.nativeUrl=${w(null == r ? void 0 : r.nativeUrl)}`, `image.url=${w(null == r ? void 0 : r.url)}`, `image.nativeAsset=${w(null == r ? void 0 : r.nativeAsset)}`];
      console.log(`[AlbumSave] resolveTextureSourceFile inspect ${a.join(" ")}`);
      const n = y();
      if (!n) return null;
      for (const e of l) {
        const t = b(e.rawValue);
        if (t) {
          const r = (null == n.isFileExist ? void 0 : n.isFileExist(t)) ?? !0;
          if (console.log(`[AlbumSave] resolveTextureSourceFile direct key=${e.key} path=${t} exists=${r}`), r) return t;
        }
        if ("string" != typeof (i = e.rawValue) || !i.startsWith("http://") && !i.startsWith("https://")) continue;
        const r = S(e.rawValue);
        if (!r) {
          console.log(`[AlbumSave] resolveTextureSourceFile cache miss key=${e.key} origin=${e.rawValue}`);
          continue;
        }
        const l = (null == n.isFileExist ? void 0 : n.isFileExist(r)) ?? !0;
        if (console.log(`[AlbumSave] resolveTextureSourceFile cache key=${e.key} origin=${e.rawValue} cachedPath=${r} exists=${l}`), l) return r;
      }
      var i;
      return console.warn("[AlbumSave] resolveTextureSourceFile: no readable source file path found"), null;
    })(e.texture),
    i = e.displayName ?? t;
  if (n) {
    const e = await (async (e, t, r) => {
      const l = h(t) || ".png",
        a = p(e, r, l);
      if (!a) return null;
      if (!(null == e.copyFile ? void 0 : e.copyFile(t, a))) {
        console.warn("[AlbumSave] copySourceImageToLocal: copyFile unavailable or failed, fallback to binary read/write");
        const r = await F(t);
        if (!r) return null;
        if (!e.writeDataToFile(r, a)) return console.error(`[AlbumSave] writeDataToFile failed while copying src=${t} dst=${a}`), null;
      }
      const n = a.slice(a.lastIndexOf("/") + 1);
      return console.log(`[AlbumSave] copied source image src=${t} dst=${a}`), {
        localPath: a,
        displayName: n
      };
    })(a, n, i);
    if (e) return e;
  }
  if (null == (l = e.spriteFrame) || !l.isValid) return console.error("[AlbumSave] saveTextureSourceToLocalImage: fallback spriteFrame missing"), null;
  const o = await $(e.spriteFrame, i);
  return o ? {
    localPath: o,
    displayName: o.slice(o.lastIndexOf("/") + 1)
  } : null;
};
__rea_outer_t._RF.pop();
export { __recovered_export_0 as saveSpriteFrameToLocalPng, __recovered_export_1 as saveTextureSourceToLocalImage };
