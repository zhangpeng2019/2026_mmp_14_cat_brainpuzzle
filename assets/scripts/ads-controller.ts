// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/ads-controller.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_i } from "cc";
import { GameDefine as __rea_outer_t } from "./game-define";
import { I18nController as __rea_outer_n } from "./i18n-controller";
import { DataManager as __rea_outer_r } from "./data-manager";
import { AdsProviderFactory as __rea_outer_s } from "./ads-provider-factory";
import { getAdLoad as __rea_outer_o } from "./funjoy-max";
import { parseRewardOrNativeReadyFromAdLoadDetail as __rea_outer_a } from "./funjoy-max";
import { AD_TYPE_REWARDED as __rea_outer_l } from "./funjoy-max";
import { UITipMsg as __rea_outer_d } from "./uitipmsg";
let __recovered_export_0;
__rea_outer_i._RF.push({}, "5d725E02i5GaJlEQcxUXa7A", "ads-controller", void 0);
class c {
  constructor() {
    this._platform = void 0, this._provider = null, this._isBannerRequested = !1, this._bannerPlacement = "";
  }
  static getInstance() {
    return c._instance || (c._instance = new c()), c._instance;
  }
  initialize() {
    var e, i;
    this._platform = __rea_outer_r.detectPlatform(), this._provider = __rea_outer_s.create(this._platform), null == (e = this._provider) || e.initialize(), console.log(`[AdsController] Initialized with platform: ${this._platform}, provider: ${(null == (i = this._provider) ? void 0 : i.providerName) ?? "none"}`);
  }
  shouldSkipAd() {
    return __rea_outer_r.getInstance().isSkipAd();
  }
  isBannerEnabled() {
    return __rea_outer_t.ADS_CONFIG.Banner_Enabled;
  }
  invokeCallback(e, i = "callback") {
    if (e) try {
      e();
    } catch (e) {
      console.error(`[AdsController] Error in ${i}:`, e);
    }
  }
  isInterstitialReady(e = "") {
    if (this.shouldSkipAd()) return !0;
    const i = this._provider;
    return !i || i.isInterstitialReady(e);
  }
  showBanner(e = "") {
    var i, t, n;
    return this._isBannerRequested = !0, this._bannerPlacement = e, this.isBannerEnabled() ? this.shouldSkipAd() ? (console.log("[AdsController] skipAd enabled, skipping banner"), void (null == (n = this._provider) || n.hideBanner())) : void (null == (i = this._provider) || i.showBanner(e)) : (console.log("[AdsController] banner disabled, skipping banner"), void (null == (t = this._provider) || t.hideBanner()));
  }
  hideBanner() {
    var e;
    this._isBannerRequested = !1, null == (e = this._provider) || e.hideBanner();
  }
  syncBannerVisibility() {
    var e, i;
    this.isBannerEnabled() && !this.shouldSkipAd() && this._isBannerRequested ? null == (e = this._provider) || e.showBanner(this._bannerPlacement) : null == (i = this._provider) || i.hideBanner();
  }
  isRewardedVideoReady(e = "") {
    if (this.shouldSkipAd()) return !0;
    const i = this._provider;
    return !i || i.isRewardedVideoReady(e);
  }
  isNativeAdReady(e = "") {
    if (this.shouldSkipAd()) return !0;
    const i = this._provider;
    return !(null == i || !i.isNativeAdReady) && i.isNativeAdReady(e);
  }
  isInterstitialInCD() {
    const e = this._provider;
    return null != e && e.isInterstitialInCD ? e.isInterstitialInCD() : this.getInterstitialCDInfo().isInCD;
  }
  getInterstitialShowTimes() {
    const e = this._provider;
    return null != e && e.getInterstitialShowTimes ? e.getInterstitialShowTimes() : 0;
  }
  getInterstitialCDInfo() {
    const e = this._provider;
    return null != e && e.getInterstitialCDInfo ? e.getInterstitialCDInfo() : {
      isInCD: !1,
      cdGap: 0,
      cdTime: 30
    };
  }
  requestRewardedVideo(e, i, t, n, r) {
    if (this.shouldSkipAd()) return console.log("[AdsController] skipAd enabled, skipping rewarded video request"), null == r || r(), void this.invokeCallback(i, "onSuccess callback");
    __rea_outer_o(__rea_outer_l, s => {
      null == n || n(s);
      __rea_outer_a(s) || this.isRewardedVideoReady(e) || this.isNativeAdReady(e) ? (null == r || r(), this.showRewardedVideo(e, i, t)) : this.showRewardedVideoNotReadyTip();
    });
  }
  showInterstitial(e = "", i) {
    if (this.shouldSkipAd()) return console.log("[AdsController] skipAd enabled, skipping interstitial"), void this.invokeCallback(i, "interstitial callback");
    const t = this._provider;
    if (t) t.showInterstitial(e, i);else if (i) try {
      i();
    } catch (e) {
      console.error("[AdsController] Error in interstitial callback:", e);
    }
  }
  showRewardedVideoNotReadyTip() {
    const e = __rea_outer_n.getInstance().getKey("game66");
    __rea_outer_d.show(e);
  }
  showRewardedVideo(e = "", i, t) {
    if (this.shouldSkipAd()) return console.log("[AdsController] skipAd enabled, skipping rewarded video"), void this.invokeCallback(i, "onSuccess callback");
    const n = this._provider;
    if (n) n.showRewardedVideo(e, i, t);else if (i) try {
      i();
    } catch (e) {
      console.error("[AdsController] Error in onSuccess callback:", e);
    }
  }
  showNativeAd(e = "", i, t) {
    if (this.shouldSkipAd()) return console.log("[AdsController] skipAd enabled, skipping native ad"), void this.invokeCallback(i, "showNativeAd onSuccess callback");
    const n = this._provider;
    if (null != n && n.showNativeAd) n.showNativeAd(e, i, t);else if (t) try {
      t();
    } catch (e) {
      console.error("[AdsController] Error in showNativeAd onFail callback:", e);
    }
  }
}
__recovered_export_0 = c, c._instance = null, __rea_outer_i._RF.pop();
export { __recovered_export_0 as AdsController };
