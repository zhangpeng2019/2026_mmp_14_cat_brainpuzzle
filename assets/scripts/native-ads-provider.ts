// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/native-ads-provider.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_i } from "cc";
import { BaseAdsProvider as __rea_outer_t } from "./base-ads-provider";
import { retryBanner as __rea_outer_n } from "./funjoy-max";
import { fetchAndSetCountryCode as __rea_outer_s } from "./funjoy-max";
import { setCurrentLevelId as __rea_outer_a } from "./funjoy-max";
import { showInterstitialAd as __rea_outer_d } from "./funjoy-max";
import { showRewardAd as __rea_outer_o } from "./funjoy-max";
import { playNativeAd as __rea_outer_r } from "./funjoy-max";
import { loadBanner as __rea_outer_l } from "./funjoy-max";
import { showBanner as __rea_outer_h } from "./funjoy-max";
import { hideBanner as __rea_outer_I } from "./funjoy-max";
import { addAdStateDelegate as __rea_outer_A } from "./funjoy-lib";
import { removeAdStateDelegate as __rea_outer_c } from "./funjoy-lib";
import { printAdEventDataInfo as __rea_outer_w } from "./funjoy-types";
import { isAndroidNative as __rea_outer_v } from "./funjoy-bridge";
import { GameDefine as __rea_outer_u } from "./game-define";
import { DataManager as __rea_outer_F } from "./data-manager";
let __recovered_export_0;
__rea_outer_i._RF.push({}, "b4c7bNLm2NJZomxu7um8fzz", "native-ads-provider", void 0);
const g = 1,
  f = 2,
  m = 4,
  R = 6,
  p = 11,
  S = 12,
  y = 14,
  T = 15,
  D = 17,
  N = 21,
  k = 22,
  C = 100,
  E = 31,
  b = 32,
  _ = 33,
  P = 34,
  x = 35,
  $ = 36,
  G = 37;
__recovered_export_0 = class extends __rea_outer_t {
  constructor(e) {
    super("NativeAdsProvider"), this.runtimePlatform = void 0, this.interAdReady = !1, this.rewardAdReady = !1, this.shouldRewarded = !1, this.nativeAdReady = !1, this.lastInterstitialTime = 0, this.pendingAdFlow = null, this.handleAdState = void 0, this.runtimePlatform = e, this.lastInterstitialTime = Date.now(), this.handleAdState = this.onAdState.bind(this);
  }
  initialize() {
    __rea_outer_v() ? (__rea_outer_A(this.handleAdState), this.emitInitOk({
      adType: "banner",
      placement: "",
      providerName: this.providerName
    }), this.logInfo(`Initialized for platform: ${this.runtimePlatform}`)) : this.logInfo(`Skipping native ads init on non-Android native (platform: ${this.runtimePlatform})`);
  }
  onAdState(e) {
    var i, t;
    console.log("NativeAdsProvider", __rea_outer_w("NativeAdsProvider", e)), console.log("NativeAdsProvider onAdState InterIime: ", e.adState, Date.now(), this.lastInterstitialTime, Date.now() - this.lastInterstitialTime);
    switch (e.adState) {
      case C:
        __rea_outer_s();
        break;
      case g:
        this.interAdReady = !0;
        break;
      case f:
        this.interAdReady = !1;
        break;
      case m:
        (1 === e.AdType || void 0 === e.AdType) && (this.interAdReady = !1, this.lastInterstitialTime = Date.now(), this.logInfo(`onAdState Closed lastInterstitialTime updated to ${this.lastInterstitialTime}`), this.invokeInterstitialFinishFromFlow(), __rea_outer_F.getInstance().incrementAndGetInterstitialShowTimes(1)), __rea_outer_n();
        break;
      case R:
        this.interAdReady = !1, this.invokeInterstitialFinishFromFlow();
        break;
      case p:
        this.rewardAdReady = !0;
        break;
      case S:
        this.rewardAdReady = !1;
        break;
      case y:
      case P:
        this.shouldRewarded = !0;
        break;
      case T:
        this.resolveCompletionClosed("REWARD");
        break;
      case D:
        this.resolveCompletionPlayError("REWARD");
        break;
      case E:
        this.nativeAdReady = !0;
        break;
      case b:
        this.nativeAdReady = !1;
        break;
      case _:
        break;
      case x:
        if ("INTERSTITIAL" === (null == (i = this.pendingAdFlow) ? void 0 : i.kind)) {
          this.invokeInterstitialFinishFromNativeOverlay();
          break;
        }
        this.resolveCompletionClosed("NATIVE");
        break;
      case $:
        break;
      case G:
        if ("INTERSTITIAL" === (null == (t = this.pendingAdFlow) ? void 0 : t.kind)) {
          this.invokeInterstitialFinishFromNativePlayError();
          break;
        }
        this.resolveCompletionPlayError("NATIVE");
        break;
      case N:
        this.emitBannerLoadSuccess({
          adType: "banner",
          placement: "",
          providerName: this.providerName,
          isReady: !0
        });
        break;
      case k:
        this.emitBannerLoadFailed({
          adType: "banner",
          placement: "",
          providerName: this.providerName,
          error: null
        });
    }
  }
  invokeInterstitialFinishFromFlow() {
    const e = this.pendingAdFlow;
    "INTERSTITIAL" === (null == e ? void 0 : e.kind) && (this.pendingAdFlow = null, e.onFinish && this.executeSafely(e.onFinish, "showInterstitial callback"));
  }
  invokeInterstitialFinishFromNativeOverlay() {
    const e = this.pendingAdFlow;
    "INTERSTITIAL" === (null == e ? void 0 : e.kind) && (this.pendingAdFlow = null, this.lastInterstitialTime = Date.now(), this.logInfo(`invokeInterstitialFinishFromNativeOverlay lastInterstitialTime=${this.lastInterstitialTime}`), __rea_outer_F.getInstance().incrementAndGetInterstitialShowTimes(1), e.onFinish && this.executeSafely(e.onFinish, "showInterstitial callback"), __rea_outer_n());
  }
  invokeInterstitialFinishFromNativePlayError() {
    const e = this.pendingAdFlow;
    "INTERSTITIAL" === (null == e ? void 0 : e.kind) && (this.pendingAdFlow = null, this.logInfo("invokeInterstitialFinishFromNativePlayError"), this.executeSafely(e.onFinish, "showInterstitial native play error"), __rea_outer_n());
  }
  resolveCompletionClosed(e) {
    const i = this.pendingAdFlow;
    if (!i) return;
    if (!("REWARD" === i.kind && "NATIVE" === e) && i.kind !== e) return;
    const t = "REWARD" === i.kind ? "showRewardedVideo onSuccess" : "showNativeAd onSuccess",
      s = "REWARD" === i.kind ? "showRewardedVideo onFail" : "showNativeAd onFail";
    this.shouldRewarded && i.onSuccess ? this.executeSafely(i.onSuccess, t) : i.onFail && this.executeSafely(i.onFail, s), this.pendingAdFlow = null, this.shouldRewarded = !1, "REWARD" === e && (this.rewardAdReady = !1), this.lastInterstitialTime = Date.now(), this.logInfo(`onAdState ${"REWARD" === e ? "Reward_Closed" : "Native_Closed"} lastInterstitialTime updated to ${this.lastInterstitialTime}`), __rea_outer_n();
  }
  resolveCompletionPlayError(e) {
    const i = this.pendingAdFlow;
    if (!i) return;
    if (!("REWARD" === i.kind && "NATIVE" === e) && i.kind !== e) return;
    this.pendingAdFlow = null;
    const t = "REWARD" === i.kind ? "showRewardedVideo onFail" : "showNativeAd onFail";
    i.onFail && this.executeSafely(i.onFail, t), this.shouldRewarded = !1, "NATIVE" === e && (this.lastInterstitialTime = Date.now());
  }
  assignPendingAdFlow(e, i) {
    null !== this.pendingAdFlow && this.logWarn(`assignPendingAdFlow: overwriting pending flow (${i})`), this.pendingAdFlow = e;
  }
  isInterstitialInCD() {
    if (__rea_outer_u.ADS_CONFIG.Ads_InterCD_Ignore) return !1;
    const e = (Date.now() - this.lastInterstitialTime) / 1e3,
      i = e < __rea_outer_u.ADS_CONFIG.AD_CD;
    return this.logInfo(`isInterstitialInCD elapsed=${e.toFixed(1)}s cd=${__rea_outer_u.ADS_CONFIG.AD_CD}s => ${i}`), i;
  }
  getInterstitialCDInfo() {
    const e = __rea_outer_u.ADS_CONFIG.AD_CD,
      i = (Date.now() - this.lastInterstitialTime) / 1e3;
    return __rea_outer_u.ADS_CONFIG.Ads_InterCD_Ignore ? {
      isInCD: !1,
      cdGap: i,
      cdTime: e
    } : {
      isInCD: i < e,
      cdGap: i,
      cdTime: e
    };
  }
  hasPendingAdFlow() {
    return null !== this.pendingAdFlow;
  }
  isInterstitialReady(e = "") {
    if (!__rea_outer_v()) return !1;
    const i = this.isInterstitialInCD(),
      t = this.hasPendingAdFlow(),
      n = !this.interAdReady || i || t;
    return this.logInfo(`isInterstitialReady placement=${e} interAdReady=${this.interAdReady} inCD=${i} hasPending=${t} => ${!n}`), !n;
  }
  isRewardedVideoReady(e = "") {
    return !!__rea_outer_v() && this.rewardAdReady;
  }
  isNativeAdReady(e = "") {
    return !!__rea_outer_u.ADS_CONFIG.Ads_Enabled && !!__rea_outer_v() && this.nativeAdReady;
  }
  getInterstitialShowTimes() {
    var e;
    return (null == (e = __rea_outer_F.getInstance().getUserData()) ? void 0 : e.interstitialShowTimes) ?? 0;
  }
  showInterstitial(e = "", i) {
    var t;
    if (!__rea_outer_u.ADS_CONFIG.Ads_Enabled) return void this.executeSafely(i, "showInterstitial");
    if (!__rea_outer_v()) return void this.executeSafely(i, "showInterstitial");
    if (null !== this.pendingAdFlow) return this.logWarn("showInterstitial: another ad flow pending, skipping"), void this.executeSafely(i, "showInterstitial");
    const n = Date.now() - this.lastInterstitialTime;
    if (this.logInfo(`showInterstitial entry placement=${e} lastInterstitialTime=${this.lastInterstitialTime} elapsedMs=${n}`), this.isInterstitialInCD()) {
      const t = (Date.now() - this.lastInterstitialTime) / 1e3;
      return this.logInfo(`showInterstitial SKIP inCD placement=${e} elapsedSec=${t.toFixed(1)} cdSec=${__rea_outer_u.ADS_CONFIG.AD_CD}`), void this.executeSafely(i, "showInterstitial");
    }
    const s = (null == (t = __rea_outer_F.getInstance().getUserData()) ? void 0 : t.level) ?? 1;
    __rea_outer_a(s), this.assignPendingAdFlow({
      kind: "INTERSTITIAL",
      onFinish: i
    }, "INTERSTITIAL"), __rea_outer_d(e), this.logInfo(`showInterstitial SHOW placement=${e}`);
  }
  showRewardedVideo(e = "", i, t) {
    var n, s;
    if (!__rea_outer_u.ADS_CONFIG.Ads_Enabled) return void this.executeSafely(t, "showRewardedVideo onFail");
    if (!__rea_outer_v()) return void this.executeSafely(t, "showRewardedVideo onFail");
    if ("INTERSTITIAL" === (null == (n = this.pendingAdFlow) ? void 0 : n.kind)) return this.logWarn("showRewardedVideo: interstitial flow pending"), void this.executeSafely(t, "showRewardedVideo onFail");
    const d = (null == (s = __rea_outer_F.getInstance().getUserData()) ? void 0 : s.level) ?? 1;
    __rea_outer_a(d), this.assignPendingAdFlow({
      kind: "REWARD",
      onSuccess: i,
      onFail: t
    }, "rewarded"), this.shouldRewarded = !1, __rea_outer_o(e), this.logInfo(`Showing rewarded video: ${e}`);
  }
  showNativeAd(e = "", i, t) {
    var n, s;
    if (!__rea_outer_u.ADS_CONFIG.Ads_Enabled) return void this.executeSafely(t, "showNativeAd onFail");
    if (!__rea_outer_v()) return void this.executeSafely(t, "showNativeAd onFail");
    if (!this.nativeAdReady) return void this.executeSafely(t, "showNativeAd onFail");
    if ("INTERSTITIAL" === (null == (n = this.pendingAdFlow) ? void 0 : n.kind)) return this.logWarn("showNativeAd: interstitial flow pending"), void this.executeSafely(t, "showNativeAd onFail");
    const d = (null == (s = __rea_outer_F.getInstance().getUserData()) ? void 0 : s.level) ?? 1;
    __rea_outer_a(d), this.assignPendingAdFlow({
      kind: "NATIVE",
      onSuccess: i,
      onFail: t
    }, "native"), this.shouldRewarded = !1, __rea_outer_r(), this.logInfo("showNativeAd invoked");
  }
  loadBanner(e) {
    __rea_outer_u.ADS_CONFIG.Banner_Enabled && __rea_outer_v() && __rea_outer_l();
  }
  showBanner(e = "") {
    __rea_outer_u.ADS_CONFIG.Banner_Enabled && __rea_outer_v() && __rea_outer_h();
  }
  hideBanner() {
    __rea_outer_v() && __rea_outer_I();
  }
  destroy() {
    __rea_outer_c(this.handleAdState), this.pendingAdFlow = null, this.shouldRewarded = !1;
  }
}, __rea_outer_i._RF.pop();
export { __recovered_export_0 as NativeAdsProvider };
