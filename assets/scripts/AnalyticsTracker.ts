// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/AnalyticsTracker.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { game as __rea_outer_t } from "cc";
import { cclegacy as __rea_outer_n } from "cc";
import { default as __rea_outer_i } from "./TikTokMinisSdk";
import { AnalyticsEvents as __rea_outer_r } from "./AnalyticsEvents";
import { default as __rea_outer_o } from "./SDK_config";
let __recovered_export_0;
__rea_outer_n._RF.push({}, "a3329H5ek1OuryxHYzi3atE", "AnalyticsTracker", void 0);
class s {
  constructor() {
    this._loadingCompleteReported = !1, this._lifecycleBound = !1;
  }
  static getInstance() {
    return this._instance || (this._instance = new s()), this._instance;
  }
  report(e, t) {
    void 0 === t && (t = {}), __rea_outer_i.getInstance().reportGameEvent(e, t);
  }
  reportLegacy(e, t) {
    void 0 === t && (t = {}), this.report(e || "analytics_event", t);
  }
  reportLoadingComplete() {
    this._loadingCompleteReported || (this._loadingCompleteReported = !0, this.report(__rea_outer_r.LOADING_COMPLETE, {
      complete_time: Date.now()
    }));
  }
  reportCompleteSection(e, t) {
    void 0 === t && (t = {});
    var n = parseInt(String(e), 10) || 0;
    this.report(__rea_outer_r.COMPLETE_SECTION, {
      section_type: t.section_type || 0,
      main_section_no: n,
      section_value: t.section_value || 0,
      section_name: t.section_name || "",
      section_id: n,
      section_sum: t.section_sum || 0
    });
  }
  reportGainCredits(e, t, n) {
    void 0 === e && (e = 1), void 0 === t && (t = 1), void 0 === n && (n = 0), this.report(__rea_outer_r.GAIN_CREDITS, {
      value: e,
      token_type: t,
      token_id: n
    });
  }
  reportUserLeave() {
    this.report(__rea_outer_r.USER_LEAVE, {});
  }
  reportUserStartLevel(e) {
    this.report(__rea_outer_r.USER_STARTLEVEL, {
      level_id: parseInt(String(e), 10) || 0,
      level_name: "Level_" + e,
      start_time: Date.now()
    });
  }
  reportUserEndLevel(e, t) {
    this.report(__rea_outer_r.USER_ENDLEVEL, {
      level_id: parseInt(String(e), 10) || 0,
      level_name: "Level_" + e,
      status: t || "unknown",
      end_time: Date.now()
    });
  }
  reportAdsShow(e, t, n) {
    this.report(__rea_outer_r.ADS_SHOW, {
      placement: e || "",
      adUnitId: t || "",
      adtype: n || "unknown"
    });
  }
  getRewardedAdUnitId() {
    var e;
    return (null == (e = __rea_outer_o.GameIdConfig.ttMinisID) ? void 0 : e.rewardedVideoAdId) || "";
  }
  getInterstitialAdUnitId() {
    var e;
    return (null == (e = __rea_outer_o.GameIdConfig.ttMinisID) ? void 0 : e.InsertAdId) || "";
  }
  bindLifecycleEvents() {
    if (!this._lifecycleBound) {
      this._lifecycleBound = !0;
      var e = this;
      __rea_outer_t.on(__rea_outer_t.EVENT_HIDE, function () {
        console.log("[AnalyticsTracker] game hide → user_leave"), e.reportUserLeave();
      });
    }
  }
}
__recovered_export_0 = s, s._instance = null, __rea_outer_n._RF.pop();
export { __recovered_export_0 as default };
