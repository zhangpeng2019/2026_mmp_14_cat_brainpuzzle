// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/base-ads-provider.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { EventTarget as __rea_outer_r } from "cc";
import { AdEvent as __rea_outer_i } from "./ad-event";
let __recovered_export_0;
__rea_outer_t._RF.push({}, "3d69a2gqUJIr7ZLkueRdUyC", "base-ads-provider", void 0);
__recovered_export_0 = class {
  constructor(e) {
    this.providerName = void 0, this.eventTarget = new __rea_outer_r(), this.providerName = e;
  }
  loadBanner(e) {}
  getEventTarget() {
    return this.eventTarget;
  }
  destroy() {}
  emitInitOk(e) {
    this.eventTarget.emit(__rea_outer_i.INIT_OK, e);
  }
  emitInterstitialLoadSuccess(e) {
    this.eventTarget.emit(__rea_outer_i.INTERSTITIAL_LOAD_SUCCESS, e);
  }
  emitInterstitialLoadFailed(e) {
    this.eventTarget.emit(__rea_outer_i.INTERSTITIAL_LOAD_FAILED, e);
  }
  emitInterstitialStart(e) {
    this.eventTarget.emit(__rea_outer_i.INTERSTITIAL_START, e);
  }
  emitInterstitialClosed(e) {
    this.eventTarget.emit(__rea_outer_i.INTERSTITIAL_CLOSED, e);
  }
  emitInterstitialPlayError(e) {
    this.eventTarget.emit(__rea_outer_i.INTERSTITIAL_PLAY_ERROR, e);
  }
  emitRewardLoadSuccess(e) {
    this.eventTarget.emit(__rea_outer_i.REWARD_LOAD_SUCCESS, e);
  }
  emitRewardLoadFailed(e) {
    this.eventTarget.emit(__rea_outer_i.REWARD_LOAD_FAILED, e);
  }
  emitRewardStart(e) {
    this.eventTarget.emit(__rea_outer_i.REWARD_START, e);
  }
  emitRewardCompleted(e) {
    this.eventTarget.emit(__rea_outer_i.REWARD_COMPLETED, e);
  }
  emitRewardClosed(e) {
    this.eventTarget.emit(__rea_outer_i.REWARD_CLOSED, e);
  }
  emitRewardPlayError(e) {
    this.eventTarget.emit(__rea_outer_i.REWARD_PLAY_ERROR, e);
  }
  emitBannerLoadSuccess(e) {
    this.eventTarget.emit(__rea_outer_i.BANNER_LOAD_SUCCESS, e);
  }
  emitBannerLoadFailed(e) {
    this.eventTarget.emit(__rea_outer_i.BANNER_LOAD_FAILED, e);
  }
  executeSafely(e, t) {
    if (e) try {
      e();
    } catch (e) {
      this.logError(`Error in callback: ${t}`, e);
    }
  }
  logInfo(e, t) {
    void 0 !== t ? console.log(`[${this.providerName}] ${e}`, t) : console.log(`[${this.providerName}] ${e}`);
  }
  logWarn(e, t) {
    void 0 !== t ? console.warn(`[${this.providerName}] ${e}`, t) : console.warn(`[${this.providerName}] ${e}`);
  }
  logError(e, t) {
    void 0 !== t ? console.error(`[${this.providerName}] ${e}`, t) : console.error(`[${this.providerName}] ${e}`);
  }
}, __rea_outer_t._RF.pop();
export { __recovered_export_0 as BaseAdsProvider };
