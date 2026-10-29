// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/PlatformService.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_e } from "cc";
import { default as __rea_outer_r } from "./AnalyticsTracker";
import { default as __rea_outer_i } from "./TikTokMinisSdk";
import { DataManager as __rea_outer_a } from "./data-manager";
import { NativePlatformProvider as __rea_outer_n } from "./native-platform-provider";
import { TikTokPlatformProvider as __rea_outer_o } from "./tiktok-platform-provider";
import { WebPlatformProvider as __rea_outer_s } from "./web-platform-provider";
import { detectRuntimePlatform as __rea_outer_l } from "./runtime-platform";
import { RuntimePlatform as __rea_outer_c } from "./runtime-platform";
let __recovered_export_0, __recovered_export_1;
__rea_outer_e._RF.push({}, "57cc5/wkStJFLhVzfZPN32F", "PlatformService", void 0);
class d {
  constructor() {
    this._provider = null, this._hasInitialized = !1, this.Timer = 0;
  }
  static getInstance() {
    return d._instance || (d._instance = new d()), d._instance;
  }
  getProvider() {
    return this._provider;
  }
  getRuntimePlatform() {
    var t;
    return (null == (t = this._provider) ? void 0 : t.platform) ?? __rea_outer_l();
  }
  initialize(t) {
    if (this.Timer = Date.now(), this._hasInitialized) return void (null == t || t());
    this._hasInitialized = !0;
    const e = __rea_outer_l();
    switch (console.log("[PlatformService] runtime =", e), e) {
      case __rea_outer_c.TIKTOK:
        this._provider = new __rea_outer_o();
        break;
      case __rea_outer_c.ANDROID:
        this._provider = new __rea_outer_n(__rea_outer_c.ANDROID);
        break;
      case __rea_outer_c.IOS:
        this._provider = new __rea_outer_n(__rea_outer_c.IOS);
        break;
      default:
        this._provider = new __rea_outer_s();
    }
    this._provider.onInit(() => {
      __rea_outer_i.getInstance().executeBootstrap(), __rea_outer_r.getInstance().bindLifecycleEvents(), null == t || t();
    });
  }
  showVideo(t, e) {
    var r;
    __rea_outer_a.getInstance().isSkipAd() ? null == t || t() : null == (r = this._provider) || r.showVideo(t, e);
  }
  showInsertAd(t) {
    __rea_outer_a.getInstance().isSkipAd() || this._provider && (1 === t && Date.now() - this.Timer < 3e5 || this._provider.showInsertAd());
  }
  share(t) {
    var e;
    null == (e = this._provider) || e.share(t);
  }
  showToast(t) {
    var e;
    null == (e = this._provider) || e.showToast(t);
  }
  saveDataToCache(t, e) {
    var r;
    null == (r = this._provider) || r.saveDataToCache(t, e);
  }
  readDataFromCache(t) {
    var e;
    return (null == (e = this._provider) ? void 0 : e.readDataFromCache(t)) ?? null;
  }
}
(__recovered_export_0 = d, __recovered_export_1 = d), d._instance = null, __rea_outer_e._RF.pop();
export { __recovered_export_0 as PlatformService, __recovered_export_1 as default };
