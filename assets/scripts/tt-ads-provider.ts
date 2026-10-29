// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/tt-ads-provider.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_o } from "cc";
import { GameDefine as __rea_outer_t } from "./game-define";
import { GameUtils as __rea_outer_r } from "./gameutils";
import { BaseAdsProvider as __rea_outer_d } from "./base-ads-provider";
let __recovered_export_0;
__rea_outer_o._RF.push({}, "bb74eLkI4JKGI2IsEr3bgOg", "tt-ads-provider", void 0);
__recovered_export_0 = class extends __rea_outer_d {
  constructor() {
    super("TTAdsProvider"), this._lastInterstitialShowTime = 0, this._showInterTimes = 0, this._rewardedAdPool = new Map();
  }
  initialize() {
    this.preloadAllRewardedAds(), this.logInfo("Initialized");
  }
  preloadAllRewardedAds() {
    const e = __rea_outer_t.TT_SDK.ADS.REWARDED_POOL;
    for (const o of e) this.preloadRewardedAd(o);
    this.logInfo(`Preloading ${e.length} rewarded video ads`);
  }
  preloadRewardedAd(e) {
    const o = globalThis.TTMinis;
    if (null != o && o.game && "function" == typeof o.game.createRewardedVideoAd) try {
      const t = o.game.createRewardedVideoAd({
        adUnitId: e
      });
      if (!t) return void this.logWarn(`createRewardedVideoAd returned null for ${e}`);
      const r = {
        adUnitId: e,
        adInstance: t
      };
      this._rewardedAdPool.set(e, r), this.logInfo(`Preloading rewarded ad: ${e}`);
    } catch (o) {
      this.logError(`Error preloading rewarded ad ${e}`, o);
    } else this.logWarn(`Cannot preload rewarded ad ${e}: SDK not available`);
  }
  reloadRewardedAd(e) {
    this.preloadRewardedAd(e);
  }
  findReadyRewardedAd() {
    for (const e of this._rewardedAdPool.values()) return e;
    return null;
  }
  isInterstitialInCD() {
    return (Date.now() - this._lastInterstitialShowTime) / 1e3 < 30;
  }
  isInterstitialReady(e = "") {
    return !this.isInterstitialInCD() && !(this._showInterTimes >= 8);
  }
  isRewardedVideoReady(e = "") {
    return this._rewardedAdPool.size > 0;
  }
  getInterstitialShowTimes() {
    return this._showInterTimes;
  }
  getInterstitialCDInfo() {
    const e = (Date.now() - this._lastInterstitialShowTime) / 1e3;
    return {
      isInCD: e < 30,
      cdGap: e,
      cdTime: 30
    };
  }
  showInterstitial(e = "", o) {
    let d = !1;
    const i = () => {
        o && !d && (d = !0, this.executeSafely(o, "showInterstitial callback"));
      },
      n = __rea_outer_t.TT_SDK.ADS.INTERSTITIAL,
      a = globalThis.TTMinis;
    if (null == a || !a.game || "function" != typeof a.game.createInterstitialAd) return this.logWarn("TTMinis.game.createInterstitialAd not available"), void i();
    try {
      const o = a.game.createInterstitialAd({
        adUnitId: n
      });
      if (!o) return this.logWarn("createInterstitialAd returned null/undefined"), void i();
      const d = () => {
          this.logInfo("Interstitial ad closed"), "function" == typeof o.offClose && o.offClose(d), "function" == typeof o.offError && o.offError(s), this._lastInterstitialShowTime = Date.now(), this._showInterTimes++, this.logInfo(`Interstitial ad CD time reset, cd time: 30s, show times: ${this._showInterTimes}`), i();
        },
        s = e => {
          this.logError("Interstitial ad error", e), "function" == typeof o.offClose && o.offClose(d), "function" == typeof o.offError && o.offError(s), i();
        };
      o.onClose(d), o.onError(s), "function" == typeof o.show ? (__rea_outer_r.reportEvent(__rea_outer_t.EVENTS.ADS_SHOW, {
        placement: e,
        adUnitId: n,
        adtype: "interstitial"
      }), o.show().then(() => {
        this.logInfo("Interstitial ad shown successfully");
      }).catch(e => {
        this.logError("Interstitial ad show failed", e), "function" == typeof o.offClose && o.offClose(d), "function" == typeof o.offError && o.offError(s), this._lastInterstitialShowTime = Date.now(), i();
      }), this.logInfo(`Showing interstitial ad: ${n}`)) : (this.logError("Interstitial ad instance does not have show method"), i());
    } catch (e) {
      this.logError("Error creating interstitial ad instance", e), i();
    }
  }
  showRewardedVideo(e = "", o, d) {
    const i = this.findReadyRewardedAd();
    if (i) this.logInfo(`Found ready rewarded ad in pool: ${i.adUnitId}`), __rea_outer_r.reportEvent(__rea_outer_t.EVENTS.ADS_SHOW, {
      placement: e,
      adUnitId: i.adUnitId,
      adtype: "rewarded"
    }), this.showRewardedAdFromPool(i, o, d);else {
      this.logWarn("No preloaded rewarded ad ready, creating on-the-fly");
      const e = __rea_outer_t.TT_SDK.ADS.REWARDED;
      this.showRewardedAdOnTheFly(e, o, d);
    }
  }
  showRewardedAdFromPool(e, o, t) {
    const {
        adInstance: r,
        adUnitId: d
      } = e,
      i = e => {
        this.logInfo(`Rewarded video ad closed (pool): ${d}`, e), "function" == typeof r.offClose && r.offClose(i), "function" == typeof r.offError && r.offError(n), this.reloadRewardedAd(d);
        e && !0 === e.isEnded ? (this.logInfo(`User watched rewarded video completely (pool): ${d}`), this.executeSafely(o, "showRewardedVideo onSuccess")) : (this.logInfo(`User did not watch rewarded video completely (pool): ${d}`), this.executeSafely(t, "showRewardedVideo onFail"));
      },
      n = e => {
        this.logError(`Rewarded video ad error (pool): ${d}`, e), "function" == typeof r.offClose && r.offClose(i), "function" == typeof r.offError && r.offError(n), this.reloadRewardedAd(d), this.executeSafely(t, "showRewardedVideo onFail");
      };
    r.onClose(i), r.onError(n), "function" == typeof r.show ? (r.show().catch(e => {
      this.logError(`Rewarded video ad show failed (pool): ${d}`, e), "function" == typeof r.offClose && r.offClose(i), "function" == typeof r.offError && r.offError(n), this.executeSafely(t, "showRewardedVideo onFail");
    }), this.logInfo(`Showing rewarded video ad (pool): ${d}`)) : (this.logError(`Rewarded ad instance has no show method: ${d}`), this.reloadRewardedAd(d), this.executeSafely(t, "showRewardedVideo onFail"));
  }
  showRewardedAdOnTheFly(e, o, t) {
    const r = globalThis.TTMinis;
    if (null == r || !r.game || "function" != typeof r.game.createRewardedVideoAd) return this.logWarn("TTMinis.game.createRewardedVideoAd not available"), void this.executeSafely(t, "showRewardedVideo onFail");
    try {
      const d = r.game.createRewardedVideoAd({
        adUnitId: e
      });
      if (!d) return this.logWarn("createRewardedVideoAd returned null/undefined (on-the-fly)"), void this.executeSafely(t, "showRewardedVideo onFail");
      const i = r => {
          this.logInfo(`Rewarded video ad closed (on-the-fly): ${e}`, r), "function" == typeof d.offClose && d.offClose(i), "function" == typeof d.offError && d.offError(n);
          r && !0 === r.isEnded ? (this.logInfo(`User watched rewarded video completely (on-the-fly): ${e}`), this.executeSafely(o, "showRewardedVideo onSuccess")) : (this.logInfo(`User did not watch rewarded video completely (on-the-fly): ${e}`), this.executeSafely(t, "showRewardedVideo onFail"));
        },
        n = o => {
          this.logError(`Rewarded video ad error (on-the-fly): ${e}`, o), "function" == typeof d.offClose && d.offClose(i), "function" == typeof d.offError && d.offError(n), this.executeSafely(t, "showRewardedVideo onFail");
        };
      d.onClose(i), d.onError(n), "function" == typeof d.show ? (d.show().catch(o => {
        this.logError(`Rewarded video ad show failed (on-the-fly): ${e}`, o), "function" == typeof d.offClose && d.offClose(i), "function" == typeof d.offError && d.offError(n), this.executeSafely(t, "showRewardedVideo onFail");
      }), this.logInfo(`Showing rewarded video ad (on-the-fly): ${e}`)) : (this.logError("Rewarded video ad instance does not have show method (on-the-fly)"), this.executeSafely(t, "showRewardedVideo onFail"));
    } catch (e) {
      this.logError("Error creating rewarded video ad on-the-fly", e), this.executeSafely(t, "showRewardedVideo onFail");
    }
  }
  showBanner(e = "") {
    this.logInfo("Ignoring banner show on TT platform");
  }
  hideBanner() {
    this.logInfo("Ignoring banner hide on TT platform");
  }
}, __rea_outer_o._RF.pop();
export { __recovered_export_0 as TTAdsProvider };
