// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/tiktok-platform-provider.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_o } from "cc";
import { game as __rea_outer_e } from "cc";
import { default as __rea_outer_i } from "./SDK_config";
import { RuntimePlatform as __rea_outer_n } from "./runtime-platform";
let __recovered_export_0;
__rea_outer_o._RF.push({}, "f1b223KQSdJw7weENk2qQyT", "tiktok-platform-provider", void 0);
__recovered_export_0 = class {
  constructor() {
    this.platform = __rea_outer_n.TIKTOK, this.host = function () {
      var t;
      const o = globalThis;
      return (null == (t = o.TTMinis) ? void 0 : t.game) ?? o.tt ?? null;
    }(), this.rewardedVideoAd = null, this.interstitialAd = null, this.lastVideoTime = 0, this.lastInterstitialTime = Date.now(), this.interstitialCooldownSeconds = 30;
  }
  onInit(t) {
    var o, e;
    if (console.log("[TikTokPlatformProvider] onInit"), null != (o = this.host) && o.getSystemInfoSync) {
      const t = this.host.getSystemInfoSync();
      t && "undefined" != typeof window && (window.windowHeight = t.windowHeight, window.windowWidth = t.windowWidth);
    }
    null == (e = this.host) || null == e.setKeepScreenOn || e.setKeepScreenOn({
      keepScreenOn: !0
    }), null == t || t();
  }
  showVideo(t, o) {
    var n;
    const s = __rea_outer_i.GameIdConfig.ttMinisID.rewardedVideoAdId;
    if (!this.host || !s || !this.host.createRewardedVideoAd) return console.warn("[TikTokPlatformProvider] rewarded ad unavailable, grant in dev"), void (null == t || t());
    null != (n = this.rewardedVideoAd) && n.destroy && (this.rewardedVideoAd.destroy(), this.rewardedVideoAd = null), this.rewardedVideoAd = this.host.createRewardedVideoAd({
      adUnitId: s
    });
    const l = this.rewardedVideoAd,
      r = () => {
        null == l.offClose || l.offClose(a), null == l.offError || l.offError(r), __rea_outer_e.resume(), null == o || o(), this.showToast("The video is being pulled, please try again later.");
      },
      a = i => {
        __rea_outer_e.resume(), null != i && i.isEnded ? null == t || t() : null == o || o(), null == l.offClose || l.offClose(a), null == l.offError || l.offError(r), null == l.destroy || l.destroy(), this.rewardedVideoAd = null;
      };
    null == l.onError || l.onError(r), null == l.onClose || l.onClose(a), (() => {
      this.lastVideoTime = Date.now(), __rea_outer_e.pause(), null == l.show || l.show().catch(t => {
        console.warn("[TikTokPlatformProvider] rewarded show fail", t), null == l.load || l.load().then(() => null == l.show ? void 0 : l.show()).catch(t => {
          console.warn("[TikTokPlatformProvider] rewarded load+show fail", t), __rea_outer_e.resume(), null == o || o(), this.showToast("The video is being pulled, please try again later.");
        });
      });
    })();
  }
  showInsertAd() {
    var t;
    const o = __rea_outer_i.GameIdConfig.ttMinisID.InsertAdId;
    if (!this.host || !o || !this.host.createInterstitialAd) return void console.log("[TikTokPlatformProvider] showInsertAd skip, no interstitial API");
    const e = Math.floor((Date.now() - this.lastInterstitialTime) / 1e3),
      n = Math.floor((Date.now() - this.lastVideoTime) / 1e3);
    if (e < this.interstitialCooldownSeconds || n < this.interstitialCooldownSeconds) return;
    null != (t = this.interstitialAd) && t.destroy && (this.interstitialAd.destroy(), this.interstitialAd = null), this.interstitialAd = this.host.createInterstitialAd({
      adUnitId: o
    });
    const s = () => {
      var t;
      null == (t = this.interstitialAd) || null == t.show || t.show().catch(t => {
        console.warn("[TikTokPlatformProvider] interstitial show fail", t);
      }), this.lastInterstitialTime = Date.now();
    };
    this.interstitialAd.load ? this.interstitialAd.load().then(s).catch(t => {
      console.warn("[TikTokPlatformProvider] interstitial load fail", t);
    }) : s();
  }
  share(t) {
    null == t || t();
  }
  showToast(t) {
    var o;
    null == (o = this.host) || null == o.showToast || o.showToast({
      title: t,
      icon: "none"
    });
  }
  saveDataToCache(t, o) {
    var e;
    null == (e = this.host) || null == e.setStorageSync || e.setStorageSync(t, o);
  }
  readDataFromCache(t) {
    var o;
    return (null == (o = this.host) || null == o.getStorageSync ? void 0 : o.getStorageSync(t)) ?? null;
  }
}, __rea_outer_o._RF.pop();
export { __recovered_export_0 as TikTokPlatformProvider };
