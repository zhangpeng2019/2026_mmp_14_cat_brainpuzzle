// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/funjoy-facebook.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_n } from "cc";
import { sendToNative as __rea_outer_o } from "./funjoy-bridge";
let __recovered_export_0, __recovered_export_1, __recovered_export_2, __recovered_export_3;
(__recovered_export_0 = function () {
  __rea_outer_o("FunJoyFacebook.init", "{}");
}, __recovered_export_1 = function (e, n) {
  void 0 !== n && Object.keys(n).length > 0 ? __rea_outer_o("FunJoyFacebook.logAppEvent", JSON.stringify({
    eventName: e,
    params: n
  })) : __rea_outer_o("FunJoyFacebook.logAppEvent", JSON.stringify({
    eventName: e
  }));
}, __recovered_export_2 = function (e, n, t) {
  __rea_outer_o("FunJoyFacebook.logLevelEnter", JSON.stringify({
    levelId: e,
    isFirstEnter: n,
    uniqueCount: t
  }));
}, __recovered_export_3 = function (e) {
  __rea_outer_o("FunJoyFacebook.setLogDebug", JSON.stringify({
    isDebug: e
  }));
}), __rea_outer_n._RF.push({}, "3ece8Yw8HhH4b1Ns4M3P6uf", "funjoy-facebook", void 0);
__rea_outer_n._RF.pop();
export { __recovered_export_0 as init, __recovered_export_1 as logAppEvent, __recovered_export_2 as logLevelEnter, __recovered_export_3 as setLogDebug };
