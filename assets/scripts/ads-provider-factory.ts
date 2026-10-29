// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/ads-provider-factory.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_r } from "cc";
import { sys as __rea_outer_t } from "cc";
import { RuntimePlatform as __rea_outer_s } from "./game-storage";
import { WebAdsProvider as __rea_outer_i } from "./web-ads-provider";
import { NativeAdsProvider as __rea_outer_n } from "./native-ads-provider";
import { TTAdsProvider as __rea_outer_a } from "./tt-ads-provider";
let __recovered_export_0;
__rea_outer_r._RF.push({}, "dd7bfxoxyBCP6Xc358kz9FY", "ads-provider-factory", void 0);
__recovered_export_0 = class {
  static create(e) {
    switch (e) {
      case __rea_outer_s.Android:
        return __rea_outer_t.isNative ? new __rea_outer_n(__rea_outer_s.Android) : new __rea_outer_i(e);
      case __rea_outer_s.iOS:
        return __rea_outer_t.isNative ? new __rea_outer_n(__rea_outer_s.iOS) : new __rea_outer_i(e);
      case __rea_outer_s.WEB:
        return new __rea_outer_i(e);
      case __rea_outer_s.TT:
        return new __rea_outer_a();
      default:
        return null;
    }
  }
}, __rea_outer_r._RF.pop();
export { __recovered_export_0 as AdsProviderFactory };
