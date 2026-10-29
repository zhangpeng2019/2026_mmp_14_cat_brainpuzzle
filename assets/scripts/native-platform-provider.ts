// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/native-platform-provider.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { WebPlatformProvider as __rea_outer_r } from "./web-platform-provider";
let __recovered_export_0;
__rea_outer_t._RF.push({}, "e0d03Yc5i5HG7QmhcNyyNgI", "native-platform-provider", void 0);
__recovered_export_0 = class extends __rea_outer_r {
  constructor(o) {
    super(), this.platform = void 0, this.platform = o;
  }
  onInit(o) {
    console.log(`[NativePlatformProvider] initialized (${this.platform})`), null == o || o();
  }
  showVideo(o, t) {
    console.log(`[NativePlatformProvider] showVideo (${this.platform}) — wire native SDK here`), null == o || o();
  }
  showInsertAd() {
    console.log(`[NativePlatformProvider] showInsertAd (${this.platform})`);
  }
}, __rea_outer_t._RF.pop();
export { __recovered_export_0 as NativePlatformProvider };
