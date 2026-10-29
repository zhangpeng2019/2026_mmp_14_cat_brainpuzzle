// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/funjoy-utils.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_e } from "cc";
import { sys as __rea_outer_n } from "cc";
import { isAndroidNative as __rea_outer_t } from "./funjoy-bridge";
import { sendToNative as __rea_outer_r } from "./funjoy-bridge";
import { sendToNativeWithCallback as __rea_outer_o } from "./funjoy-bridge";
let __recovered_export_0, __recovered_export_1, __recovered_export_2, __recovered_export_3, __recovered_export_4, __recovered_export_5, __recovered_export_6, __recovered_export_7;
(__recovered_export_0 = function (i) {
  if (!__rea_outer_n.isNative) return void i(!0);
  if (!__rea_outer_t()) return void i(!1);
  __rea_outer_o("FunJoyUtils.canGameDebug", {}, i);
}, __recovered_export_1 = function (i) {
  if (!__rea_outer_t()) return void i(!1);
  __rea_outer_o("FunJoyUtils.canPrintLog", {}, i);
}, __recovered_export_2 = function (i) {
  if (!__rea_outer_t()) return void i("");
  __rea_outer_o("FunJoyUtils.getAppVersion", {}, i);
}, __recovered_export_3 = function (i) {
  if (console.log(`[FunJoyLoading] ${i}`), !__rea_outer_t()) return;
  __rea_outer_r("FunJoyUtils.logLoading", JSON.stringify({
    message: i
  }));
}, __recovered_export_4 = function () {
  if (!__rea_outer_t()) return;
  __rea_outer_r("FunJoyUtils.markScriptBridgeReady", "{}");
}, __recovered_export_5 = function () {
  if (!__rea_outer_t()) return;
  __rea_outer_r("FunJoyUtils.markScriptBridgeSuspended", "{}");
}, __recovered_export_6 = function (i) {
  if (!__rea_outer_t()) return void i(!1);
  __rea_outer_o("FunJoyUtils.requestInAppReview", {}, i);
}, __recovered_export_7 = function (i, e) {
  if (!__rea_outer_t()) return Promise.resolve(!1);
  return new Promise(n => {
    __rea_outer_o("FunJoyUtils.saveImageToGallery", {
      filePath: i,
      displayName: e
    }, n);
  });
}), __rea_outer_e._RF.push({}, "55865AKtDJAuKH/ekVD/0zL", "funjoy-utils", void 0);
__rea_outer_e._RF.pop();
export { __recovered_export_0 as canGameDebug, __recovered_export_1 as canPrintLog, __recovered_export_2 as getAppVersion, __recovered_export_3 as logLoading, __recovered_export_4 as markScriptBridgeReady, __recovered_export_5 as markScriptBridgeSuspended, __recovered_export_6 as requestInAppReview, __recovered_export_7 as saveImageToGallery };
