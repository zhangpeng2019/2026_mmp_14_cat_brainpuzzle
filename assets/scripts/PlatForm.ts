// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/PlatForm.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { PlatformService as __rea_outer_n } from "./PlatformService";
import { default as __rea_outer_a } from "./TikTokMinisSdk";
import { default as __rea_outer_o } from "./SDK_config";
import { default as __rea_outer_s } from "./AnalyticsTracker";
import { AnalyticsAdPlacement as __rea_outer_l } from "./AnalyticsEvents";
import { DataManager as __rea_outer_c } from "./data-manager";
let __recovered_export_0;
__rea_outer_t._RF.push({}, "94ee1mOo7xARpATBnbC6D7p", "PlatForm", void 0);
class i {
  static getInstance() {
    return i.m_Instance || (i.m_Instance = new i()), i.m_Instance;
  }
  LookAd_GetReward(e, t, i, r, d = __rea_outer_l.REWARD_LEVEL) {
    var u;
    if (__rea_outer_c.getInstance().isSkipAd()) return void (null == i || i());
    const I = (null == (u = __rea_outer_o.GameIdConfig.ttMinisID) ? void 0 : u.rewardedVideoAdId) ?? "";
    __rea_outer_s.getInstance().reportAdsShow(d, I, "rewarded"), __rea_outer_a.getInstance().getGame() && I ? __rea_outer_a.getInstance().executeShowRewardedVideo(I, () => null == i ? void 0 : i(), () => null == r ? void 0 : r(), {
      onMissing: () => {
        __rea_outer_n.getInstance().showVideo(() => null == i ? void 0 : i(), () => null == r ? void 0 : r());
      }
    }) : __rea_outer_n.getInstance().showVideo(() => null == i ? void 0 : i(), () => null == r ? void 0 : r());
  }
  ShowInterstitialAd(e = __rea_outer_l.INTERSTITIAL_RESULT_BACK) {
    var t;
    if (__rea_outer_c.getInstance().isSkipAd()) return;
    const i = (null == (t = __rea_outer_o.GameIdConfig.ttMinisID) ? void 0 : t.InsertAdId) ?? "";
    __rea_outer_s.getInstance().reportAdsShow(e, i, "interstitial"), __rea_outer_a.getInstance().getGame() && i ? __rea_outer_a.getInstance().executeShowInterstitial(i) : __rea_outer_n.getInstance().showInsertAd(2);
  }
  Share(e) {
    __rea_outer_n.getInstance().share(() => null == e ? void 0 : e());
  }
  AddDesktop(e) {
    i.getInstance().ReportAnalytics("click_event", {
      event_id: 20006
    });
    const t = __rea_outer_a.getInstance();
    t.isAvailable() && t.checkAddShortcutAvailable() ? t.executeAddShortcut({
      success: () => null == e ? void 0 : e(),
      fail: () => console.log("[PlatForm] addShortcut failed"),
      complete: () => {}
    }) : (console.log("[PlatForm] AddDesktop: non-TikTok or addShortcut unavailable, grant locally (dev)"), null == e || e());
  }
  GoSidebar(e) {
    const t = __rea_outer_a.getInstance();
    t.isAvailable() && t.canIUse("startEntranceMission") ? t.executeStartEntranceMission({
      success: () => null == e ? void 0 : e(),
      fail: () => console.log("[PlatForm] startEntranceMission failed"),
      complete: () => {}
    }) : (console.log("[PlatForm] GoSidebar: non-TikTok or API unavailable (dev stub)"), null == e || e());
  }
  Collection(e) {
    i.getInstance().ReportAnalytics("click_event", {
      event_id: 20004
    }), null == e || e();
  }
  Screen(e) {
    i.getInstance().ReportAnalytics("click_event", {
      event_id: 20002
    }), null == e || e();
  }
  ReportAnalytics(e, t) {
    __rea_outer_s.getInstance().reportLegacy(e, t);
  }
}
__recovered_export_0 = i, i.m_Instance = null, __rea_outer_t._RF.pop();
export { __recovered_export_0 as default };
