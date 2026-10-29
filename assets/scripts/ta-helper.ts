// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/ta-helper.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { log as __rea_outer_n } from "cc";
import { sys as __rea_outer_s } from "cc";
import { setLogDebug as __rea_outer_r } from "./funjoy-ta";
import { userSetOnce as __rea_outer_a } from "./funjoy-ta";
import { userSet as __rea_outer_i } from "./funjoy-ta";
import { trackWithParams as __rea_outer_o } from "./funjoy-ta";
import { setSuperProperties as __rea_outer_l } from "./funjoy-ta";
import { userUnSet as __rea_outer_c } from "./funjoy-ta";
import { userAdd as __rea_outer_d } from "./funjoy-ta";
import { getAdLoad as __rea_outer_u } from "./funjoy-max";
import { getAttributionJson as __rea_outer_g } from "./funjoy-adjust";
import { logLevelEnter as __rea_outer_v } from "./funjoy-facebook";
import { AdsTypes as __rea_outer_p } from "./funjoy-types";
import { TAEventKeys as __rea_outer_m } from "./ta-event-keys";
import { DataManager as __rea_outer_A } from "./data-manager";
import { GameMode as __rea_outer_y } from "./data-manager";
import { default as __rea_outer_k } from "./BaseData";
import { AdsController as __rea_outer_L } from "./ads-controller";
import { GameDefine as __rea_outer__ } from "./game-define";
import { UserGroupType as __rea_outer_h } from "./user-data";
import { getAppVersion as __rea_outer_I } from "./funjoy-utils";
let __recovered_export_0;
__rea_outer_t._RF.push({}, "375cbMHjvNG14OPk1pmf1nB", "ta-helper", void 0);
const S = "firstVersion";
class f {
  static coerceUserGroupTypeToAnalyticsNumber(e) {
    if (null == e) return 0;
    if (e === __rea_outer_h.Buy) return 1;
    if (e === __rea_outer_h.Natural) return 0;
    const t = "number" == typeof e ? e : Number(String(e).trim());
    return Number.isFinite(t) && t >= 1 ? 1 : 0;
  }
  constructor() {
    this._loginStartTime = 0, this._lastLoggedTapublicGroup = null;
  }
  static getInstance() {
    return f._instance || (f._instance = new f()), f._instance;
  }
  setLogDebug(e) {
    __rea_outer_r(e);
  }
  init() {
    return new Promise(e => {
      __rea_outer_I(t => {
        t && t.length > 0 && (__rea_outer__.Version = t);
        const n = __rea_outer_A.getInstance(),
          s = n.getString(S, __rea_outer__.Version);
        n.setString(S, s), __rea_outer_a({
          firstVersion: s
        }), __rea_outer_i({
          cversion: __rea_outer__.Version
        }), this.setSuperProperties(), __rea_outer_A.getInstance().setUserGroupTypeChangeAnalyticsHook((e, t) => {
          this.notifyUserGroupTypeChangedToAnalytics(e, t);
        }), __rea_outer_A.getInstance().setPlayerProgressAnalyticsHook(() => {
          this.notifyPlayerProgressChangedToAnalytics();
        }), this.applyPendingAdjustUserGroupIfAny(), this.syncUserGroupTypeFromAdjust(), e();
      });
    });
  }
  static onNativeAdjustAttributionMessage(e) {
    const t = f.getInstance();
    __rea_outer_A.getInstance().getUserData() ? t.applyAdjustUserGroupTypeFromAttributionJson(e) : f._pendingAdjustAttributionJson = e;
  }
  applyAdjustUserGroupTypeFromAttributionJson(e) {
    const t = __rea_outer_A.getInstance(),
      n = t.getUserData();
    if (!n) return;
    if (t.captureAdGroupNameFromAttributionJson(e), t.applyStoredAdGroupLevelOrder(), n.grouptype === __rea_outer_h.Buy) return;
    const s = n.grouptype;
    1 === this.parseAdjustMGroupType(e) && (n.grouptype = __rea_outer_h.Buy, __rea_outer_A.getInstance().saveUserData()), n.grouptype !== s && this.notifyUserGroupTypeChangedToAnalytics(s, n.grouptype);
  }
  notifyUserGroupTypeChangedToAnalytics(e, t) {
    if (e === t) return;
    const s = f.coerceUserGroupTypeToAnalyticsNumber(t);
    __rea_outer_n(`[TAHelper] grouptype TA sync previous=${String(e)} next=${String(t)} numeric=${s}`), __rea_outer_i({
      grouptype: s
    }), this.setSuperProperties();
  }
  notifyPlayerProgressChangedToAnalytics() {
    const e = __rea_outer_A.getInstance().getUserData();
    __rea_outer_n(`[TAHelper] player progress TA sync Levelid=${(null == e ? void 0 : e.Levelid) ?? 0} level=${(null == e ? void 0 : e.level) ?? 1} levelindex=${(null == e ? void 0 : e.levelindex) ?? 0}`);
    const t = (null == e ? void 0 : e.Levelid) ?? 1;
    __rea_outer_i({
      LevelWin: (null == e ? void 0 : e.level) ?? 1,
      Levelid: t,
      lvname: __rea_outer_k.getLevelName(t),
      levelindex: (null == e ? void 0 : e.levelindex) ?? 1
    }), this.setSuperProperties();
  }
  parseAdjustMGroupType(e) {
    try {
      const t = JSON.parse(e);
      if ("number" == typeof t.m_grouptype && Number.isFinite(t.m_grouptype)) return 1 === t.m_grouptype ? 1 : 0;
      if ("string" == typeof t.campaign) return f.computeMGroupTypeFromCampaign(t.campaign) ? 1 : 0;
    } catch {}
    return 0;
  }
  static computeMGroupTypeFromCampaign(e) {
    const t = e.toLowerCase();
    return t.indexOf("mintegral") >= 0 || t.indexOf("unity") >= 0;
  }
  applyPendingAdjustUserGroupIfAny() {
    if (null === f._pendingAdjustAttributionJson) return;
    const e = f._pendingAdjustAttributionJson;
    f._pendingAdjustAttributionJson = null, this.applyAdjustUserGroupTypeFromAttributionJson(e);
  }
  syncUserGroupTypeFromAdjust() {
    __rea_outer_g(e => {
      this.applyAdjustUserGroupTypeFromAttributionJson(e);
    });
  }
  getTAPublic() {
    const e = __rea_outer_A.getInstance(),
      t = e.getUserData(),
      r = e.getString(S, __rea_outer__.Version),
      a = null == t ? void 0 : t.grouptype,
      i = f.coerceUserGroupTypeToAnalyticsNumber(a);
    this._lastLoggedTapublicGroup !== i && (__rea_outer_n(`[TAHelper] TAPublic.group raw=${String(a)} numeric=${i} (coerced for TA)`), this._lastLoggedTapublicGroup = i);
    const o = (null == t ? void 0 : t.Levelid) ?? 1;
    return {
      IsNew: this.isNewPlayer(),
      Version: __rea_outer__.Version,
      LevelWin: (null == t ? void 0 : t.level) ?? 1,
      Levelid: o,
      lvname: __rea_outer_k.getLevelName(o),
      levelindex: e.getLevelOrderInAllLevels(o) ?? 0,
      firstVersion: r || __rea_outer__.Version,
      uid: (null == t ? void 0 : t.userId) ?? "",
      Max_country_code: e.getMaxCountryCode(),
      maxcountrycode: e.getMaxCountryCode(),
      lan: (null == t ? void 0 : t.lan) || __rea_outer_s.language,
      effects: (null == t ? void 0 : t.effecton) ?? !0,
      music: (null == t ? void 0 : t.musicon) ?? !0,
      vib: (null == t ? void 0 : t.vibrationon) ?? !0,
      group: i
    };
  }
  isNewPlayer() {
    const e = __rea_outer_A.getInstance().getUserData();
    return !e || 0 === e.totalGames;
  }
  commonTrack(e, t) {
    __rea_outer_o(e, t);
  }
  trackSkinClick(e, t) {
    const n = {
      ID: e,
      Lock: t
    };
    __rea_outer_o(__rea_outer_m.SkinClick, n);
  }
  trackAlbumClick(e) {
    __rea_outer_o(__rea_outer_m.AlbumClick, {
      AlbumId: e
    });
  }
  trackAlbumFull(e) {
    __rea_outer_o(__rea_outer_m.AlbumFull, {
      AlbumId: e
    });
  }
  trackDailyClickMonth(e, t) {
    __rea_outer_o(__rea_outer_m.ClickMonth, {
      Month: e,
      Button: t
    });
  }
  trackPlayDaily(e, t) {
    __rea_outer_o(__rea_outer_m.PlayDaily, {
      Month: e,
      Days: t
    });
  }
  trackDailyRewardView(e, t) {
    __rea_outer_o(__rea_outer_m.DailyReward, {
      Month: e,
      Days: t
    });
  }
  setSuperProperties() {
    const e = this.getTAPublic();
    __rea_outer_l(e);
  }
  userSetOnce(e) {
    __rea_outer_a(e);
  }
  userUnSet(e) {
    __rea_outer_c(e);
  }
  userSet(e) {
    __rea_outer_i(e);
  }
  userAdd(e) {
    __rea_outer_d(e);
  }
  trackAdEvent(e, t) {
    __rea_outer_o(e, t);
  }
  static resolveAdProgressFromDetail(e, t, n) {
    return (null != e ? String(e).trim() : "").length > 0 ? t : n;
  }
  trackAdsEmpty(e, t) {
    const n = __rea_outer_L.getInstance(),
      s = n.getInterstitialCDInfo(),
      r = {
        AdsType: e,
        ad_format: t,
        cdgap: s.cdGap,
        cdtm: s.cdTime
      };
    t === __rea_outer_p.reward ? (r.is_CD = !1, r.is_fill = n.isRewardedVideoReady(), r.is_lock = !1) : (r.is_CD = s.isInCD, r.is_fill = n.isInterstitialReady(), r.is_lock = !1), this.trackAdEvent(__rea_outer_m.Ads_Empty, r);
  }
  trackAdsInterStage(e, t, n, s) {
    __rea_outer_u(1, r => {
      const a = {
        AdsType: e,
        ad_format: "Interstitial",
        is_CD: t,
        is_fill: n,
        is_lock: s,
        Ad_Load: r || ""
      };
      this.trackAdEvent(__rea_outer_m.Ads_Inter_Stage, a);
    });
  }
  trackAdsShow(e) {
    const t = {
      adstype: e
    };
    this.trackAdEvent(__rea_outer_m.Ads_Show, t);
  }
  trackAdsClickWithDetail(e, t) {
    const n = null != t ? String(t).trim() : "",
      s = {
        adstype: e,
        ad_progress: f.resolveAdProgressFromDetail(n, "Load", "LoadNone"),
        ad_progress_detail: n
      };
    this.trackAdEvent(__rea_outer_m.Ads_Click, s);
  }
  trackAdsClick(e) {
    __rea_outer_u(2, t => {
      this.trackAdsClickWithDetail(e, t);
    });
  }
  trackAdsSuc(e) {
    this.trackAdEvent(__rea_outer_m.Ads_Suc, e);
  }
  trackAdsReward(e) {
    this.trackAdEvent(__rea_outer_m.Ads_Reward, e);
  }
  trackAdsInterstitialStageWithDetail(e, t, n) {
    const s = __rea_outer_L.getInstance().getInterstitialCDInfo(),
      r = __rea_outer_A.getInstance().incrementAndGetInterstitialShowTimes(),
      a = s.isInCD ? "CD_Low" : "CD_Enough",
      i = __rea_outer__.TT_SDK.ADS.INTERSTITIAL,
      o = null != n ? String(n).trim() : "",
      l = f.resolveAdProgressFromDetail(o, "Load", "LoadFail"),
      c = {
        AdsType: e,
        Level_ID: t,
        lvname: __rea_outer_k.getLevelName(t),
        Times: r,
        CD: Math.floor(s.cdGap),
        CD_Status: a,
        Ad_format: "INTER",
        Max_country_code: __rea_outer_A.getInstance().getMaxCountryCode(),
        ad_progress: l,
        ad_unit_id: i,
        ad_progress_detail: o
      };
    this.trackAdEvent(__rea_outer_m.Ads_Interstitial_Stage, c);
  }
  trackAdsInterstitialStage(e, t) {
    __rea_outer_u(1, n => {
      this.trackAdsInterstitialStageWithDetail(e, t, n);
    });
  }
  trackVictoryInterstitialStageWithDetail(e, t, n) {
    this.trackAdsInterstitialStageWithDetail(e, t, n);
  }
  trackVictoryInterstitialStage(e, t) {
    this.trackAdsInterstitialStage(e, t);
  }
  executeInterstitialTrackAndShow(e, t, n) {
    const s = __rea_outer_L.getInstance();
    __rea_outer_A.getInstance().isSkipAd() ? null == n || n() : __rea_outer_u(1, r => {
      this.trackAdsInterstitialStageWithDetail(e, t, r), s.showInterstitial(e, n);
    });
  }
  executeVictoryInterstitialTrackAndShow(e, t, n) {
    this.executeInterstitialTrackAndShow(e, t, n);
  }
  trackAdsInterstitialPre(e) {
    this.trackAdEvent(__rea_outer_m.Ads_Interstitial_Pre, e);
  }
  trackAdsInterstitial(e) {
    this.trackAdEvent(__rea_outer_m.Ads_Interstitial, e);
  }
  trackAdsNative(e) {
    this.trackAdEvent(__rea_outer_m.Ads_Native, e);
  }
  trackAdsNativeClick(e) {
    this.trackAdEvent(__rea_outer_m.Ads_Native_Click, e);
  }
  trackAdsLoad(e) {
    this.trackAdEvent(__rea_outer_m.Ads_Load, e);
  }
  trackAdsRequest(e) {
    this.trackAdEvent(__rea_outer_m.Ads_Request, e);
  }
  trackAdRevenuePostback(e) {
    this.trackAdEvent(__rea_outer_m.Ad_Revenue_Postback, e);
  }
  trackAdsShowFailed(e) {
    this.trackAdEvent(__rea_outer_m.Ads_Show_Failed, e);
  }
  buildAdRevenuePostbackParams(e) {
    var t;
    const n = (null == (t = __rea_outer_A.getInstance().getUserData()) ? void 0 : t.Levelid) ?? 1;
    return {
      Levelid: n,
      lvname: __rea_outer_k.getLevelName(n),
      ...e
    };
  }
  trackStartLogin() {
    this.setSuperProperties(), this._loginStartTime = Math.floor(Date.now() / 1e3);
    const e = __rea_outer_A.getInstance(),
      t = {
        firstBegin: this.isNewPlayer(),
        Isfirstlogin: e.getIsFirstLoginToday(),
        LoginDay: e.getLoginDay()
      };
    __rea_outer_o(__rea_outer_m.Start_Login, t);
  }
  trackGameLoading() {
    __rea_outer_o(__rea_outer_m.GameLoading, {});
  }
  trackGameStart(e, t = 0) {
    const n = __rea_outer_A.getInstance(),
      s = n.getUserData(),
      r = n.getGameMode() === __rea_outer_y.PK,
      a = n.getSelectedLevelId(),
      i = {
        mode: e,
        challge: r,
        level_id: a,
        lvname: __rea_outer_k.getLevelName(a),
        game_id: (null == s ? void 0 : s.userId) ?? "",
        load_clothes: t
      };
    __rea_outer_o(__rea_outer_m.GameStart, i);
  }
  trackGameStepClick(e, t, n, s = 0) {
    const r = __rea_outer_A.getInstance(),
      a = r.getUserData(),
      i = r.getSelectedLevelId(),
      l = {
        level_id: i,
        lvname: __rea_outer_k.getLevelName(i),
        game_id: (null == a ? void 0 : a.userId) ?? "",
        mode: e,
        type: t,
        step: n,
        clothing_type: s
      };
    __rea_outer_o(__rea_outer_m.Game_step_click, l);
  }
  trackBackLevel(e, t) {
    const n = {
      fromlv: e,
      tolv: t
    };
    __rea_outer_o(__rea_outer_m.BackLevel, n);
  }
  trackEnterLobby() {
    __rea_outer_o(__rea_outer_m.EnterLobby, {});
  }
  trackRateUs(e) {
    __rea_outer_o(__rea_outer_m.Rateus, {
      star: e
    });
  }
  trackClickEntry(e) {
    var t;
    const n = (null == (t = __rea_outer_A.getInstance().getUserData()) ? void 0 : t.level) ?? 1,
      s = {
        Levelid: String(n),
        lvname: __rea_outer_k.getLevelName(n),
        type: e
      };
    __rea_outer_o(__rea_outer_m.ClickEntry, s);
  }
  trackResourceDownload(e) {
    const t = {
      name: e
    };
    __rea_outer_o(__rea_outer_m.ResDown, t);
  }
  trackGameEnd(e, t = 0, n = 0, s = 0, r = "") {
    const a = __rea_outer_A.getInstance(),
      i = a.getUserData(),
      l = a.getSelectedLevelId(),
      c = {
        level_id: l,
        lvname: __rea_outer_k.getLevelName(l),
        game_id: (null == i ? void 0 : i.userId) ?? "",
        mode: e,
        levelwin: (null == i ? void 0 : i.level) ?? 1,
        result: t,
        score: n,
        npcscore: s,
        items: r || ""
      };
    __rea_outer_o(__rea_outer_m.GameEnd, c);
  }
  trackItemGet(e, t, n) {
    const s = {
      itemId: e,
      gettype: t,
      type: n
    };
    __rea_outer_o(__rea_outer_m.item_get, s);
  }
  trackCoinGet(e, t) {
    const n = {
      num: e,
      from: t
    };
    __rea_outer_o(__rea_outer_m.coin_get, n);
  }
  trackCoinSpend(e, t, n) {
    const s = {
      itemid: e,
      type: t,
      num: n
    };
    __rea_outer_o(__rea_outer_m.coin_spend, s);
  }
  trackWindows(e, t) {
    const n = {
      name: e,
      type: t
    };
    __rea_outer_o(__rea_outer_m.Windows, n);
  }
  trackLoading(e) {
    const t = {
      loading: e
    };
    __rea_outer_o(__rea_outer_m.Loading, t);
  }
  trackLevelStart(e, t, n) {
    const s = {
      Levelid: e,
      lvname: __rea_outer_k.getLevelName(e),
      levelindex: __rea_outer_A.getInstance().getLevelOrderInAllLevels(e) ?? 0,
      InType: t,
      Times: n
    };
    __rea_outer_o(__rea_outer_m.Level_Start, s);
    const r = 1 === n,
      a = __rea_outer_A.getInstance().getUniqueEnteredLevelCount();
    __rea_outer_v(e, r, a);
  }
  trackLevelLoad(e, t, n = "", s) {
    const r = {
      state: e,
      msg: n || "",
      Levelid: t,
      lvname: __rea_outer_k.getLevelName(t)
    };
    s && (r.is_warm = s.isWarm ? 1 : 0, r.cost_ms = Math.round(s.costMs)), __rea_outer_o(__rea_outer_m.Level_Load, r);
  }
  trackLevelFail(e) {
    const t = {
      Levelid: e,
      lvname: __rea_outer_k.getLevelName(e)
    };
    __rea_outer_o(__rea_outer_m.Level_Fail, t);
  }
  trackLevelFailBtn(e, t) {
    const n = {
      Levelid: e,
      lvname: __rea_outer_k.getLevelName(e),
      btn: t
    };
    __rea_outer_o(__rea_outer_m.Level_Fail_btn, n);
  }
  trackLevelQuit(e, t, n, s, r) {
    const a = {
      Levelid: e,
      lvname: __rea_outer_k.getLevelName(e),
      levelindex: __rea_outer_A.getInstance().getLevelOrderInAllLevels(e) ?? 0,
      QuitType: t,
      TotalSteps: n,
      StepType: s,
      Duration: r
    };
    __rea_outer_o(__rea_outer_m.Level_Quit, a);
  }
  trackLevelVictory(e, t, n) {
    const s = {
      Levelid: e,
      lvname: __rea_outer_k.getLevelName(e),
      Usehint: t,
      Duration: n
    };
    __rea_outer_o(__rea_outer_m.Level_Victory, s);
  }
  trackLevelVictoryBtn(e, t) {
    const n = {
      Levelid: e,
      lvname: __rea_outer_k.getLevelName(e),
      btn: t
    };
    __rea_outer_o(__rea_outer_m.Level_Victory_btn, n);
  }
  trackLevelPauseBtn(e, t) {
    const n = {
      Levelid: e,
      lvname: __rea_outer_k.getLevelName(e),
      btn: t
    };
    __rea_outer_o(__rea_outer_m.Level_Pause_btn, n);
  }
  trackGameReset(e, t, n, s, r) {
    const a = {
      Levelid: e,
      lvname: __rea_outer_k.getLevelName(e),
      levelindex: __rea_outer_A.getInstance().getLevelOrderInAllLevels(e) ?? 0,
      Duration: t,
      Usehint: n,
      TotalSteps: s,
      StepType: r
    };
    __rea_outer_o(__rea_outer_m.Game_Reset, a);
  }
  trackLevelComing(e) {
    const t = {
      levelId: e,
      lvname: __rea_outer_k.getLevelName(e)
    };
    __rea_outer_o(__rea_outer_m.Level_Coming, t);
  }
  trackPropsGet(e, t, n, s) {
    const r = {
      Levelid: e,
      lvname: __rea_outer_k.getLevelName(e),
      type: t,
      count: n,
      total: s
    };
    __rea_outer_o(__rea_outer_m.Props_Get, r);
  }
  trackPropsUse(e, t, n, s) {
    const r = {
      Levelid: e,
      lvname: __rea_outer_k.getLevelName(e),
      type: t,
      count: n,
      total: s
    };
    __rea_outer_o(__rea_outer_m.Props_Use, r);
  }
}
__recovered_export_0 = f, f._instance = null, f._pendingAdjustAttributionJson = null, __rea_outer_t._RF.pop();
export { __recovered_export_0 as TAHelper };
