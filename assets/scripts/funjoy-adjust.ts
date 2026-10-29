// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/funjoy-adjust.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_n } from "cc";
import { sendToNative as __rea_outer_e } from "./funjoy-bridge";
import { isAndroidNative as __rea_outer_u } from "./funjoy-bridge";
import { sendToNativeWithCallback as __rea_outer_i } from "./funjoy-bridge";
let __recovered_export_0, __recovered_export_1, __recovered_export_2, __recovered_export_3, __recovered_export_4, __recovered_export_5, __recovered_export_6, __recovered_export_7, __recovered_export_8, __recovered_export_9, __recovered_export_10;
(__recovered_export_0 = function () {
  __rea_outer_e("FunJoyAdjust.gdprForgetMe", "{}");
}, __recovered_export_1 = function (t) {
  if (!__rea_outer_u()) return void t("{}");
  __rea_outer_i("FunJoyAdjust.getAttributionJson", {}, n => {
    const e = "string" == typeof n ? n : JSON.stringify(n);
    t(e);
  });
}, __recovered_export_2 = function () {
  __rea_outer_e("FunJoyAdjust.init", "{}");
}, __recovered_export_3 = function () {
  __rea_outer_e("FunJoyAdjust.initFromConfig", "{}");
}, __recovered_export_4 = function (t) {
  __rea_outer_e("FunJoyAdjust.setDebug", JSON.stringify({
    isDebug: t
  }));
}, __recovered_export_5 = function (t) {
  __rea_outer_e("FunJoyAdjust.setEnabled", JSON.stringify({
    enabled: t
  }));
}, __recovered_export_6 = function (t) {
  __rea_outer_e("FunJoyAdjust.setLogLevel", JSON.stringify({
    logLevel: t
  }));
}, __recovered_export_7 = function (t, n, u) {
  __rea_outer_e("FunJoyAdjust.trackAdRevenue", JSON.stringify({
    source: t,
    revenue: n,
    currency: u
  }));
}, __recovered_export_8 = function (t) {
  __rea_outer_e("FunJoyAdjust.trackEvent", JSON.stringify({
    eventToken: t
  }));
}, __recovered_export_9 = function (t, n) {
  __rea_outer_e("FunJoyAdjust.trackEvent", JSON.stringify({
    eventToken: t,
    params: n
  }));
}, __recovered_export_10 = function (t, n, u, i) {
  __rea_outer_e("FunJoyAdjust.trackPurchase", JSON.stringify({
    revenue: t,
    currency: n,
    orderId: u,
    productId: i
  }));
}), __rea_outer_n._RF.push({}, "e0b16mhE7hCV4oM3Zqn3EUI", "funjoy-adjust", void 0);
__rea_outer_n._RF.pop();
export { __recovered_export_0 as gdprForgetMe, __recovered_export_1 as getAttributionJson, __recovered_export_2 as init, __recovered_export_3 as initFromConfig, __recovered_export_4 as setDebug, __recovered_export_5 as setEnabled, __recovered_export_6 as setLogLevel, __recovered_export_7 as trackAdRevenue, __recovered_export_8 as trackEvent, __recovered_export_9 as trackEventWithParams, __recovered_export_10 as trackPurchase };
