// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/atob-polyfill.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_e } from "cc";
let __recovered_export_0;
function t(o) {
  try {
    const e = globalThis.__originalAtob;
    if (!e) throw new Error("Original atob not found");
    const t = e(o);
    if ("undefined" != typeof TextDecoder) {
      const o = new Uint8Array(t.length);
      for (let e = 0; e < t.length; e++) o[e] = t.charCodeAt(e);
      return new TextDecoder("utf-8").decode(o);
    }
    return decodeURIComponent(escape(t));
  } catch (e) {
    try {
      if ("undefined" != typeof Buffer) return Buffer.from(o, "base64").toString("utf8");
      console.warn("[atobPolyfill] Using manual base64 decoding fallback");
      const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      let t = "",
        n = 0;
      for (o = o.replace(/[^A-Za-z0-9\+\/\=]/g, ""); n < o.length;) {
        const r = e.indexOf(o.charAt(n++)),
          a = e.indexOf(o.charAt(n++)),
          l = e.indexOf(o.charAt(n++)),
          i = e.indexOf(o.charAt(n++)),
          c = r << 2 | a >> 4,
          f = (15 & a) << 4 | l >> 2,
          d = (3 & l) << 6 | i;
        t += String.fromCharCode(c), 64 !== l && (t += String.fromCharCode(f)), 64 !== i && (t += String.fromCharCode(d));
      }
      return decodeURIComponent(escape(t));
    } catch (o) {
      return console.error("[atobPolyfill] Failed to decode:", o), "";
    }
  }
}
function n(o) {
  try {
    if ("undefined" != typeof TextEncoder) {
      const e = new TextEncoder().encode(o);
      let t = "";
      for (let o = 0; o < e.length; o++) t += String.fromCharCode(e[o]);
      return (globalThis.__originalBtoa || btoa)(t);
    }
    return (globalThis.__originalBtoa || btoa)(encodeURIComponent(o).replace(/%([0-9A-F]{2})/g, (o, e) => String.fromCharCode(parseInt(e, 16))));
  } catch (e) {
    try {
      if ("undefined" != typeof Buffer) return Buffer.from(o, "utf8").toString("base64");
      return (globalThis.__originalBtoa || btoa)(encodeURIComponent(o).replace(/%([0-9A-F]{2})/g, (o, e) => String.fromCharCode(parseInt(e, 16))));
    } catch (o) {
      return console.error("[btoaPolyfill] Failed to encode:", o), "";
    }
  }
}
__recovered_export_0 = function () {
  if ("undefined" != typeof globalThis) {
    const o = globalThis;
    "function" == typeof o.atob ? (o.__originalAtob = o.atob, o.__originalBtoa = o.btoa, o.atob = function (e) {
      try {
        return o.__originalAtob(e);
      } catch (o) {
        var n;
        if (o && ("InvalidCharacterError" === o.name || null != (n = o.message) && n.includes("atob"))) return console.warn("[atobPolyfill] Original atob failed with Unicode characters, using safe version"), t(e);
        try {
          return t(e);
        } catch (e) {
          throw console.error("[atobPolyfill] Polyfill also failed:", e), o;
        }
      }
    }, o.btoa = function (e) {
      try {
        return o.__originalBtoa(e);
      } catch (o) {
        return console.warn("[btoaPolyfill] Original btoa failed, using Unicode-safe version"), n(e);
      }
    }, console.log("[atobPolyfill] Unicode-safe atob/btoa polyfills installed")) : (o.atob = t, o.btoa = n, console.log("[atobPolyfill] atob/btoa polyfills installed (original not found)"));
  }
}, __rea_outer_e._RF.push({}, "e3a0cBLXbZKAIFCnrvQZrzG", "atob-polyfill", void 0), __rea_outer_e._RF.pop();
export { __recovered_export_0 as installAtobPolyfill };
