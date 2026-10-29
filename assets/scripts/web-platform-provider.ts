// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/web-platform-provider.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_e } from "cc";
import { RuntimePlatform as __rea_outer_r } from "./runtime-platform";
import { GameStorage } from "./game-storage";
let __recovered_export_0;
__rea_outer_e._RF.push({}, "a2c45THhUlHT7Oc0OymMFpQ", "web-platform-provider", void 0);
__recovered_export_0 = class {
  constructor() {
    this.platform = __rea_outer_r.WEB;
  }
  onInit(o) {
    console.log("[WebPlatformProvider] initialized"), null == o || o();
  }
  showVideo(o) {
    console.log("[WebPlatformProvider] showVideo stub — grant reward"), null == o || o();
  }
  showInsertAd() {
    console.log("[WebPlatformProvider] showInsertAd stub");
  }
  share(o) {
    null == o || o();
  }
  showToast(o) {
    console.log("[WebPlatformProvider]", o);
  }
  saveDataToCache(o, e) {
    try {
      GameStorage.getInstance().setStorageSync(o, e);
    } catch (o) {
      console.warn("[WebPlatformProvider] saveDataToCache failed", o);
    }
  }
  readDataFromCache(o) {
    try {
      return GameStorage.getInstance().getStorageSync(o);
    } catch {
      return null;
    }
  }
}, __rea_outer_e._RF.pop();
export { __recovered_export_0 as WebPlatformProvider };
