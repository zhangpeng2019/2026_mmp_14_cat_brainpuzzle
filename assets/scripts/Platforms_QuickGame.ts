// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Platforms_QuickGame.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { PlatformService as __rea_outer_i } from "./PlatformService";
let __recovered_export_0;
__rea_outer_t._RF.push({}, "7360fnU175F9ZaEQoSZJrTK", "Platforms_QuickGame", void 0);
class a {
  constructor() {
    this.MvName = "", this.Timer = 0, this.levelFailNumArr = new Map(), this.service = __rea_outer_i.getInstance();
  }
  static getInstance() {
    return a.mInstance || (a.mInstance = new a()), a.mInstance;
  }
  onInit(e) {
    this.service.initialize(e ?? void 0), this.Timer = this.service.Timer;
  }
  showInsertAd(e) {
    this.service.showInsertAd(e);
  }
  showVideo(e, t) {
    this.service.showVideo(e, t);
  }
  ShareAppMessage(e) {
    this.service.share(e);
  }
  showToast(e) {
    this.service.showToast(e);
  }
  saveDataToCache(e, t) {
    this.service.saveDataToCache(e, t);
  }
  readDataFromCache(e) {
    return this.service.readDataFromCache(e);
  }
  showLetter() {}
  OPPOBannerNativeAd() {}
  OPPOHighONativeAd(e) {}
  OPPShortONativeAd() {}
  HidecustomAD() {}
  HidecustomBAD() {}
  share(e) {}
  showBanner(e) {}
  showVivoNativeAD(e) {}
  showVivoNativeBannerAD(e) {}
  showVivoNativeAD1(e) {}
  showVivoNativeAD2(e) {}
  showVivoNativeBannerAD1(e) {}
  hideVivoNativeBannerAD(e) {}
  hideBanner() {}
  exitgame(e) {}
  hideInsertNativeAd() {}
  createVideo(e) {}
  createNative(e, t) {}
  onNativeAdClick(e) {}
  hasShortcutInstalled(e) {}
  addDesktop(e) {}
  shareVideo(e, t) {}
  startRecordScreen() {}
  stopRecordScreen() {}
  sendMessage(e, t) {}
  ShowDanGzGg() {}
  DeleteDanGzGg() {}
  ShowLeftLinegrid() {}
  DeleteLeftLinegrid() {}
  ShowRightLinegrid() {}
  DeleteRightLinegrid() {}
  AutoGzGg() {}
  ShowGzGg() {}
  ShowRightGzGg() {}
  DeleteGzGg() {}
  DeleteRightGzGg() {}
  ShowDuoGzGg() {}
  DeleteDuoGzGg() {}
  ShowShareMenu(e) {
    null == e || e();
  }
  StartWxRecorder() {}
  StopWxRecorder() {}
  ShareWxRecorder() {}
}
__recovered_export_0 = a, a.mInstance = null, __rea_outer_t._RF.pop();
export { __recovered_export_0 as default };
