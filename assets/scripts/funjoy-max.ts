// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/funjoy-max.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_e } from "cc";
import { sendToNative as __rea_outer_t } from "./funjoy-bridge";
import { isAndroidNative as __rea_outer_o } from "./funjoy-bridge";
import { sendToNativeWithCallback as __rea_outer_i } from "./funjoy-bridge";
import { GameDefine as __rea_outer_a } from "./game-define";
import { DataManager as __rea_outer_r } from "./data-manager";
import { logLoading as __rea_outer_u } from "./funjoy-utils";
let __recovered_export_0, __recovered_export_1, __recovered_export_2, __recovered_export_3, __recovered_export_4, __recovered_export_5, __recovered_export_6, __recovered_export_7, __recovered_export_8, __recovered_export_9, __recovered_export_10, __recovered_export_11, __recovered_export_12, __recovered_export_13, __recovered_export_14, __recovered_export_15, __recovered_export_16, __recovered_export_17, __recovered_export_18, __recovered_export_19, __recovered_export_20, __recovered_export_21, __recovered_export_22, __recovered_export_23, __recovered_export_24, __recovered_export_25, __recovered_export_26, __recovered_export_27, __recovered_export_28;
(__recovered_export_0 = function (n, e) {
  __rea_outer_t("FunJoyMax.DealPurchase", JSON.stringify({
    revenue: n,
    productId: e
  }));
}, __recovered_export_1 = function () {
  y(n => {
    __rea_outer_r.getInstance().setMaxCountryCode(n ?? "");
  });
}, __recovered_export_2 = function (n, e) {
  if (__rea_outer_r.getInstance().isSkipAd()) return void e("skip:1");
  if (!__rea_outer_o()) return void e("");
  __rea_outer_i("FunJoyMax.GetAd_Load", {
    adType: n
  }, e);
}, __recovered_export_3 = y, __recovered_export_4 = c, __recovered_export_5 = function () {
  __rea_outer_t("FunJoyMax.init", "{}");
}, __recovered_export_6 = function (n) {
  __rea_outer_t("FunJoyMax.init", JSON.stringify(n));
}, __recovered_export_7 = function (n = "") {
  return !1;
}, __recovered_export_8 = function () {
  return !1;
}, __recovered_export_9 = function () {
  __rea_outer_t("FunJoyMax.loadBanner", "{}");
}, __recovered_export_10 = function (n) {
  return l(n);
}, __recovered_export_11 = function (n) {
  return l(n);
}, __recovered_export_12 = f, __recovered_export_13 = function () {
  __rea_outer_t("FunJoyMax.preloadInterstialAd", "{}");
}, __recovered_export_14 = function () {
  __rea_outer_t("FunJoyMax.preloadNativeAd", "{}");
}, __recovered_export_15 = function () {
  __rea_outer_t("FunJoyMax.preloadRewardedAd", "{}");
}, __recovered_export_16 = function () {
  if (!__rea_outer_a.ADS_CONFIG.Banner_Enabled || __rea_outer_r.getInstance().isSkipAd()) return void c();
  d ? s() : c();
}, __recovered_export_17 = function (n) {
  __rea_outer_t("FunJoyMax.setCurrentLevelId", JSON.stringify({
    levelId: n
  }));
}, __recovered_export_18 = function (n) {
  __rea_outer_t("FunJoyMax.setDebug", JSON.stringify({
    isDebug: n
  }));
}, __recovered_export_19 = function (n) {
  __rea_outer_t("FunJoyMax.setNativeFullScreen", JSON.stringify({
    enable: n
  }));
}, __recovered_export_20 = s, __recovered_export_21 = function () {
  __rea_outer_t("FunJoyMax.showDebugger", "{}");
}, __recovered_export_22 = function (n = "") {
  __rea_outer_t("FunJoyMax.showInterstialAd", JSON.stringify({
    placement: n
  }));
}, __recovered_export_23 = function (n) {
  f(n);
}, __recovered_export_24 = function (n = "") {
  __rea_outer_t("FunJoyMax.showRewardAd", JSON.stringify({
    placement: n
  }));
}, __recovered_export_25 = function () {
  if (!__rea_outer_o()) return;
  __rea_outer_t("FunJoyMax.startNativeAdPreload", "{}");
}, __recovered_export_26 = function (n = 3e3) {
  const e = __rea_outer_r.getInstance().getMaxCountryCode().trim();
  if (__rea_outer_u(`waitCountry cached=${e || "empty"} native=${__rea_outer_o()}`), e.length > 0 || !__rea_outer_o()) return Promise.resolve(e);
  return new Promise(e => {
    let t = !1;
    const o = Date.now(),
      i = (n, i) => {
        t || (t = !0, __rea_outer_u(`waitCountry done reason=${i} code=${n || "empty"} elapsed=${Date.now() - o}`), e(n));
      };
    setTimeout(() => {
      i(__rea_outer_r.getInstance().getMaxCountryCode(), "timeout");
    }, n);
    const a = () => {
      t || y(e => {
        if (t) return;
        const d = (e ?? "").trim();
        if (__rea_outer_u(`waitCountry poll result=${d || "empty"} elapsed=${Date.now() - o}`), d.length > 0) return __rea_outer_r.getInstance().setMaxCountryCode(d), void i(d, "native");
        Date.now() - o >= n ? i(__rea_outer_r.getInstance().getMaxCountryCode(), "timeout-poll") : setTimeout(a, 200);
      });
    };
    a();
  });
}), __rea_outer_e._RF.push({}, "50c8b9OuYVMebJPZ5H6Cq2E", "funjoy-max", void 0);
__recovered_export_27 = 1, __recovered_export_28 = 2;
let d = !1;
function s() {
  d = !0, __rea_outer_t("FunJoyMax.showBanner", "{}");
}
function c() {
  d = !1, __rea_outer_t("FunJoyMax.hideBanner", "{}");
}
function f(n) {
  const e = void 0 !== n && n.length > 0 ? JSON.stringify({
    adUnitId: n
  }) : "{}";
  __rea_outer_t("FunJoyMax.playNativeAd", e);
}
function l(n) {
  const e = (n ?? "").trim();
  if (!e) return !1;
  const t = e.split("|"),
    o = t[0],
    i = o.indexOf(":");
  if (i < 0) return !1;
  const a = parseFloat(o.slice(i + 1)),
    r = !Number.isNaN(a) && a > 0,
    u = t.length > 1;
  return r || u;
}
function y(n) {
  __rea_outer_o() ? __rea_outer_i("FunJoyMax.GetCountryCode", {}, n) : n("");
}
__rea_outer_e._RF.pop();
export { __recovered_export_0 as dealPurchase, __recovered_export_1 as fetchAndSetCountryCode, __recovered_export_2 as getAdLoad, __recovered_export_3 as getCountryCode, __recovered_export_4 as hideBanner, __recovered_export_5 as init, __recovered_export_6 as initWithConfig, __recovered_export_7 as isInterstitialReady, __recovered_export_8 as isRewardAdReady, __recovered_export_9 as loadBanner, __recovered_export_10 as parseInterstitialOrNativeReadyFromAdLoadDetail, __recovered_export_11 as parseRewardOrNativeReadyFromAdLoadDetail, __recovered_export_12 as playNativeAd, __recovered_export_13 as preloadInterstitialAd, __recovered_export_14 as preloadNativeAd, __recovered_export_15 as preloadRewardedAd, __recovered_export_16 as retryBanner, __recovered_export_17 as setCurrentLevelId, __recovered_export_18 as setDebug, __recovered_export_19 as setNativeFullScreen, __recovered_export_20 as showBanner, __recovered_export_21 as showDebugger, __recovered_export_22 as showInterstitialAd, __recovered_export_23 as showNativeAd, __recovered_export_24 as showRewardAd, __recovered_export_25 as startNativeAdPreload, __recovered_export_26 as waitForMaxCountryCode, __recovered_export_27 as AD_TYPE_INTERSTITIAL, __recovered_export_28 as AD_TYPE_REWARDED };
