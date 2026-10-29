// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/funjoy-ta.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { sendToNative as __rea_outer_e } from "./funjoy-bridge";
let __recovered_export_0, __recovered_export_1, __recovered_export_2, __recovered_export_3, __recovered_export_4, __recovered_export_5, __recovered_export_6, __recovered_export_7, __recovered_export_8;
(__recovered_export_0 = function () {
  __rea_outer_e("FunJoyTA.init", "{}");
}, __recovered_export_1 = function (n) {
  __rea_outer_e("FunJoyTA.setLogDebug", JSON.stringify({
    isDebug: n
  }));
}, __recovered_export_2 = function (n) {
  __rea_outer_e("FunJoyTA.setSuperProperties", JSON.stringify(n));
}, __recovered_export_3 = function (n) {
  __rea_outer_e("FunJoyTA.track", JSON.stringify({
    eventName: n
  }));
}, __recovered_export_4 = function (n, t) {
  __rea_outer_e("FunJoyTA.track", JSON.stringify({
    eventName: n,
    params: t
  }));
}, __recovered_export_5 = function (n) {
  __rea_outer_e("FunJoyTA.userAdd", JSON.stringify(n));
}, __recovered_export_6 = function (n) {
  __rea_outer_e("FunJoyTA.userSet", JSON.stringify(n));
}, __recovered_export_7 = function (n) {
  __rea_outer_e("FunJoyTA.userSetOnce", JSON.stringify(n));
}, __recovered_export_8 = function (n) {
  __rea_outer_e("FunJoyTA.userUnSet", JSON.stringify({
    key: n
  }));
}), __rea_outer_t._RF.push({}, "930eban8QhF06ZYhgF/BzcO", "funjoy-ta", void 0);
__rea_outer_t._RF.pop();
export { __recovered_export_0 as init, __recovered_export_1 as setLogDebug, __recovered_export_2 as setSuperProperties, __recovered_export_3 as track, __recovered_export_4 as trackWithParams, __recovered_export_5 as userAdd, __recovered_export_6 as userSet, __recovered_export_7 as userSetOnce, __recovered_export_8 as userUnSet };
