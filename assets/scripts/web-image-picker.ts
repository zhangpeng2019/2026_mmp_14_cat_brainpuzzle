// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/web-image-picker.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { assetManager as __rea_outer_n } from "cc";
import { Texture2D as __rea_outer_i } from "cc";
let __recovered_export_0;
__recovered_export_0 = async function () {
  const e = await new Promise(e => {
    if ("undefined" == typeof document || "undefined" == typeof window || "undefined" == typeof File || "undefined" == typeof URL) return void e(null);
    const t = document.createElement("input");
    t.style.position = "fixed", t.style.left = "-9999px", t.style.width = "1px", t.style.height = "1px", t.style.opacity = "0";
    let n = !1;
    const i = () => {
        window.setTimeout(() => {
          var e;
          r((null == (e = t.files) ? void 0 : e[0]) ?? null);
        }, 300);
      },
      r = r => {
        n || (n = !0, t.onchange = null, window.removeEventListener("focus", i), t.remove(), e(r));
      };
    t.type = "file", t.accept = "image/*", t.onchange = () => {
      var e;
      r((null == (e = t.files) ? void 0 : e[0]) ?? null);
    }, document.body.appendChild(t), window.addEventListener("focus", i, {
      once: !0
    }), t.click();
  });
  if (!e) return null;
  const t = function (e, t = "") {
    const n = t.toLowerCase();
    if ("image/png" === n) return ".png";
    if ("image/jpeg" === n || "image/jpg" === n) return ".jpg";
    if ("image/webp" === n) return ".webp";
    const i = e.toLowerCase();
    if (i.endsWith(".png")) return ".png";
    if (i.endsWith(".jpg") || i.endsWith(".jpeg")) return ".jpg";
    if (i.endsWith(".webp")) return ".webp";
    return null;
  }(e.name, e.type);
  if (!t) throw new Error(`[WebImagePicker] Unsupported file type: ${e.type || e.name}`);
  const r = URL.createObjectURL(e);
  try {
    const o = function (e) {
      const t = new __rea_outer_i();
      return t.image = e, t;
    }(await function (e, t) {
      return new Promise((i, r) => {
        __rea_outer_n.loadRemote(e, {
          ext: t
        }, (e, t) => {
          e ? r(e) : t ? i(t) : r(new Error("[WebImagePicker] Empty image asset"));
        });
      });
    }(r, t));
    if (o.width <= 0 || o.height <= 0) throw new Error("[WebImagePicker] Invalid texture size");
    return {
      texture: o,
      fileName: e.name
    };
  } finally {
    URL.revokeObjectURL(r);
  }
}, __rea_outer_t._RF.push({}, "f68d87JcTNAlbmqWt9NNaDq", "web-image-picker", void 0), __rea_outer_t._RF.pop();
export { __recovered_export_0 as pickWebImageAsTexture };
