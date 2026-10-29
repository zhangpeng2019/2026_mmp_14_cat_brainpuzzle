// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/runtime-platform.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_e } from "cc";
import { sys as __rea_outer_n } from "cc";
let __recovered_export_0, __recovered_export_1;
__recovered_export_0 = function () {
  const t = globalThis;
  if (void 0 !== t.tt) return r.TIKTOK;
  if (void 0 !== t.jsb) return "iOS" === __rea_outer_n.os || "OSX" === __rea_outer_n.os ? r.IOS : r.ANDROID;
  return r.WEB;
}, __rea_outer_e._RF.push({}, "7fcf310lWpB9oDWvhwdHECw", "runtime-platform", void 0);
let r = __recovered_export_1 = function (t) {
  return t.WEB = "web", t.TIKTOK = "tiktok", t.ANDROID = "android", t.IOS = "ios", t;
}({});
__rea_outer_e._RF.pop();
export { __recovered_export_0 as detectRuntimePlatform, __recovered_export_1 as RuntimePlatform };
