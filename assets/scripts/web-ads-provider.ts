// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/web-ads-provider.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_i } from "cc";
import { BaseAdsProvider as __rea_outer_r } from "./base-ads-provider";
let __recovered_export_0;
__rea_outer_i._RF.push({}, "f739cNmpl9Jg5cerBYrstYY", "web-ads-provider", void 0);
__recovered_export_0 = class extends __rea_outer_r {
  constructor(e) {
    super("WebAdsProvider"), this.runtimePlatform = void 0, this.runtimePlatform = e;
  }
  initialize() {
    this.logInfo(`Initialized fallback provider for platform: ${this.runtimePlatform}`), this.emitInitOk({
      adType: "banner",
      placement: "",
      providerName: this.providerName
    });
  }
  isInterstitialReady(e = "") {
    return !0;
  }
  isRewardedVideoReady(e = "") {
    return !0;
  }
  showInterstitial(e = "", i) {
    this.emitInterstitialStart({
      adType: "interstitial",
      placement: e,
      providerName: this.providerName
    }), this.emitInterstitialClosed({
      adType: "interstitial",
      placement: e,
      providerName: this.providerName,
      isEnded: !0
    }), this.executeSafely(i, "showInterstitial");
  }
  showRewardedVideo(e = "", i, r) {
    this.emitRewardStart({
      adType: "rewarded",
      placement: e,
      providerName: this.providerName
    }), this.emitRewardCompleted({
      adType: "rewarded",
      placement: e,
      providerName: this.providerName,
      isEnded: !0
    }), this.emitRewardClosed({
      adType: "rewarded",
      placement: e,
      providerName: this.providerName,
      isEnded: !0
    }), this.executeSafely(i, "showRewardedVideo");
  }
  showBanner(e = "") {
    this.logInfo("Ignoring banner show in fallback provider");
  }
  hideBanner() {
    this.logInfo("Ignoring banner hide in fallback provider");
  }
}, __rea_outer_i._RF.pop();
export { __recovered_export_0 as WebAdsProvider };
