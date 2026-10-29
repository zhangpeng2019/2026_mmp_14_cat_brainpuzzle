// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/GameController.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_i } from "cc";
import { resources as __rea_outer_s } from "cc";
import { Prefab as __rea_outer_t } from "cc";
import { instantiate as __rea_outer_n } from "cc";
import { game as __rea_outer_r } from "cc";
import { default as __rea_outer_a } from "./BaseData";
import { default as __rea_outer_o } from "./GameUtils2";
import { default as __rea_outer_l } from "./LevelManager";
import { UIGameLoading as __rea_outer_h } from "./uigameloading";
import { UITipMsg as __rea_outer_m } from "./uitipmsg";
import { I18nController as __rea_outer_u } from "./i18n-controller";
import { UIManager as __rea_outer_d } from "./ui-manager";
import { UILayer as __rea_outer_g } from "./ui-layer";
import { UITimeup as __rea_outer__ } from "./uitimeup";
import { DataManager as __rea_outer_c } from "./data-manager";
import { AdsController as __rea_outer_T } from "./ads-controller";
import { GameDefine as __rea_outer_p } from "./game-define";
import { StarRating as __rea_outer_S } from "./star-rating";
import { GameManager as __rea_outer_v } from "./game-manager";
import "./index2";
import { LevelSkip as __rea_outer_L } from "./level-skip";
import { TAHelper as __rea_outer_f } from "./ta-helper";
let __recovered_export_0: { getInstance(): { unbind(): void } };
__rea_outer_i._RF.push({}, "0043cbsdxxC/p3OtmT0xr+q", "GameController", void 0);
class G {
  constructor() {
    this._uiGame = null, this._remainingTime = 0, this._timeLimit = 0, this._isTimerRunning = !1, this._isTimerPaused = !1, this._isTimeUpShown = !1, this._isStarRatingVoid = !1, this._sessionPlaySeconds = 0, this._sessionHintUsed = 0, this._isSessionActive = !1, this._isSessionPaused = !1, this._isAppInBackground = !1, this._isTutorialGuiding = !1, this._isResettingLevel = !1, this._levelSkipNode = null, this.onTimerTick = () => {
      this._uiGame ? (this._remainingTime = Math.max(0, this._remainingTime - 1), this.refreshTimeHud(), this._remainingTime <= 0 && this.onTimeExpired()) : this.stopTimer();
    }, this.onAppHide = () => {
      this._isAppInBackground = !0;
    }, this.onAppShow = () => {
      this._isAppInBackground = !1;
    }, this.onSessionTick = () => {
      this.canAccumulateSessionTime() && (this._sessionPlaySeconds += 1);
    };
  }
  static getInstance() {
    return G._instance || (G._instance = new G()), G._instance;
  }
  bindView(e) {
    this.stopTimer(), this._uiGame = e;
  }
  updateView() {
    if (!this._uiGame) return;
    this._isStarRatingVoid = !1;
    const e = this.buildHudSnapshot();
    this._uiGame.applyHudSnapshot(e), this.beginLevelSession(), this.restartTimer(e.isTimeVisible, this._timeLimit);
  }
  recordHintConsumed() {
    this._isSessionActive && (this._sessionHintUsed += 1);
  }
  getLevelSessionStats() {
    return {
      duration: this._sessionPlaySeconds,
      hintUsed: this._sessionHintUsed
    };
  }
  getLevelProgressSteps() {
    const e = __rea_outer_l.getInstance().m_Level_Src;
    if (!e) return {
      totalSteps: 0,
      stepType: 0
    };
    const i = e.getGameProgressSnapshot();
    if (i) {
      const e = this.parseStepProgressLabel(i.label);
      if (e) return e;
    }
    return {
      totalSteps: e.allItemNum > 0 ? e.allItemNum : e.allQuestionNum,
      stepType: e.allItemNum > 0 ? e.hasInstallNum : e.hasJudgeNum
    };
  }
  refreshGameProgress() {
    if (!this._uiGame) return;
    const {
      progress: e,
      label: i
    } = this.readGameProgress();
    this._uiGame.setGameProgress(e, i);
  }
  showHint() {
    this._uiGame && __rea_outer_l.getInstance().showHint();
  }
  resetCurrentLevel() {
    if (this._isResettingLevel) return;
    this._isResettingLevel = !0, this.trackGameResetEvent(), this.pauseTimer();
    const e = __rea_outer_c.getInstance().getSelectedLevelId();
    __rea_outer_f.getInstance().executeInterstitialTrackAndShow(__rea_outer_p.ADS.RESET_INTER, e, () => {
      this.reloadCurrentLevelAfterReset();
    });
  }
  setTutorialGuiding(e) {
    if (this._isTutorialGuiding = e, !this._uiGame) return;
    const i = this.isActiveTutorialRun();
    this._uiGame.applyTutorialChrome({
      isTutorialRun: i,
      isTutorialGuiding: e
    });
  }
  isActiveTutorialRun() {
    return 14 === __rea_outer_c.getInstance().getSelectedLevelId() && __rea_outer_c.getInstance().isLevel14TutorialRun();
  }
  async showLevelLoadingState(e = !1) {
    const i = __rea_outer_d.getInstance(),
      s = i.getView(__rea_outer_h);
    if (null != s && s.node.active) return void s.setLevelLoadProgress(0, e);
    const t = await i.showView(__rea_outer_h);
    null == t || t.setLevelLoadProgress(0, e);
  }
  hideLevelLoadingState(e = !0) {
    __rea_outer_d.getInstance().hideView(__rea_outer_h), e && this.revealHud();
  }
  showLevelResourceDownloadFailedTip(e) {
    if (!e) return;
    const i = __rea_outer_u.getInstance().getKey("game65");
    __rea_outer_m.show(i);
  }
  revealHud() {
    var e;
    null == (e = this._uiGame) || e.show(), __rea_outer_T.getInstance().showBanner(__rea_outer_p.ADS.BANNER_COMMON);
  }
  mountLevelOnGameLayer() {
    __rea_outer_l.getInstance().showLevelOnGameLayer(), this.mountLevelSkipOverlay(), this.bringHudToFront();
  }
  bringHudToFront() {
    var e;
    null != (e = this._uiGame) && e.node.parent && this._uiGame.node.setSiblingIndex(this._uiGame.node.parent.children.length - 1);
  }
  mountLevelSkipOverlay() {
    this.destroyLevelSkipOverlay();
    const e = __rea_outer_l.getInstance().m_Level_Node,
      i = (null == e ? void 0 : e.parent) ?? null;
    if (!e || !i) return;
    const r = e;
    __rea_outer_s.load("prefabs/Level_Skip", __rea_outer_t, (e, s) => {
      if (e || !s) return void console.error("[GameController] Failed to load Level_Skip", e);
      if (__rea_outer_l.getInstance().m_Level_Node !== r || !r.isValid) return;
      const t = __rea_outer_n(s);
      t.setParent(i), t.setSiblingIndex(r.getSiblingIndex() + 1), t.addComponent(__rea_outer_L), this._levelSkipNode = t, this.bringHudToFront();
    });
  }
  destroyLevelSkipOverlay() {
    var e;
    null != (e = this._levelSkipNode) && e.isValid && this._levelSkipNode.destroy(), this._levelSkipNode = null, __rea_outer_L.resetTimeScale();
  }
  setLevelLoadProgress(e, i = !1) {
    var s;
    null == (s = __rea_outer_d.getInstance().getView(__rea_outer_h)) || s.setLevelLoadProgress(e, i);
  }
  unbind() {
    this.destroyLevelSkipOverlay(), __rea_outer_T.getInstance().hideBanner(), this.endLevelSession(), this.stopTimer(), this._uiGame = null, this._remainingTime = 0, this._timeLimit = 0, this._isTimerPaused = !1, this._isTimeUpShown = !1, this._isStarRatingVoid = !1, this._isTutorialGuiding = !1, this._isResettingLevel = !1;
  }
  pauseTimer() {
    var e;
    this.pauseLevelSession(), this._isTimerRunning && (null == (e = this._uiGame) || e.unschedule(this.onTimerTick), this._isTimerRunning = !1, this._isTimerPaused = !0);
  }
  resumeTimer() {
    this.resumeLevelSession(), !this._isTimerPaused || !this._uiGame || this._remainingTime <= 0 || this._timeLimit <= 0 ? this._isTimerPaused = !1 : (this._isTimerPaused = !1, this._isTimerRunning = !0, this._uiGame.schedule(this.onTimerTick, 1));
  }
  addBonusTime(e) {
    this.AddGameTime(e);
  }
  AddGameTime(e) {
    !this._uiGame || e <= 0 || ((this._isTimeUpShown || this._timeLimit > 0 && this._remainingTime <= 0) && (this._isStarRatingVoid = !0), this._remainingTime += e, this._timeLimit = Math.max(this._timeLimit, this._remainingTime), this._isTimeUpShown = !1, this._isTimerPaused = !1, this.refreshTimeHud(), this._isTimerRunning || (this._isTimerRunning = !0, this._uiGame.schedule(this.onTimerTick, 1)));
  }
  setRemainingTime(e) {
    !this._uiGame || e < 0 || (this._remainingTime = e, this._timeLimit = Math.max(e, 1), this._isTimeUpShown = !1, this.refreshTimeHud());
  }
  penaltyTime(e) {
    !this._uiGame || e <= 0 || (this._remainingTime = Math.max(0, this._remainingTime - e), this.refreshTimeHud(), this._remainingTime <= 0 && this.onTimeExpired());
  }
  buildHudSnapshot() {
    const e = this.getSelectedLevelConfig(),
      i = __rea_outer_l.getInstance().m_Level_Data,
      s = __rea_outer_u.getInstance().getKey((null == i ? void 0 : i.levelinfokey) ?? (null == e ? void 0 : e.levelinfokey) ?? ""),
      {
        progress: t,
        label: n
      } = this.readGameProgress(),
      r = this.isActiveTutorialRun();
    this._timeLimit = r ? 0 : (null == e ? void 0 : e.limitTime) ?? 0, this._remainingTime = this._timeLimit;
    const a = this._timeLimit > 0,
      o = a ? 1 : 0,
      h = a ? this.formatTime(this._remainingTime) : "",
      m = (null == e ? void 0 : e.hintType) ?? 0;
    return {
      title: s,
      gameProgress: t,
      gameProgressLabel: n,
      timeProgress: o,
      timeProgressLabel: h,
      isHintVisible: 0 !== m,
      hintType: m,
      isTimeVisible: a || r,
      isGameProgressVisible: this.isLevelGameProgressVisible(),
      isTutorialRun: r,
      isTutorialGuiding: this._isTutorialGuiding,
      starCount: this.getEarnedStarCount()
    };
  }
  isLevelGameProgressVisible() {
    const e = __rea_outer_l.getInstance().m_Level_Src;
    return !e || e.isGameProgressVisible();
  }
  readGameProgress() {
    const e = __rea_outer_l.getInstance().m_Level_Src;
    if (!e) return {
      progress: 0,
      label: "0%"
    };
    const i = e.getGameProgressSnapshot();
    if (null !== i) return i;
    const s = e.allItemNum > 0 ? e.allItemNum : e.allQuestionNum,
      t = e.allItemNum > 0 ? e.hasInstallNum : e.hasJudgeNum;
    if (s <= 0) return {
      progress: 0,
      label: "0%"
    };
    const n = Math.min(1, Math.max(0, t / s));
    return {
      progress: n,
      label: `${Math.floor(100 * n)}%`
    };
  }
  parseStepProgressLabel(e) {
    const i = /^(\d+)\/(\d+)$/.exec(e.trim());
    if (!i) return null;
    const s = parseInt(i[1], 10),
      t = parseInt(i[2], 10);
    return Number.isFinite(s) && Number.isFinite(t) ? {
      stepType: s,
      totalSteps: t
    } : null;
  }
  getSelectedLevelConfig() {
    const e = __rea_outer_a.GetLevelIndex(__rea_outer_o.SelectLevelKey);
    return void 0 === e ? null : __rea_outer_a.LevelDataS[e];
  }
  restartTimer(e, i) {
    this.stopTimer(), !e || i <= 0 || !this._uiGame || (this._remainingTime = i, this._timeLimit = i, this._isTimerPaused = !1, this._isTimeUpShown = !1, this._isTimerRunning = !0, this._uiGame.schedule(this.onTimerTick, 1));
  }
  stopTimer() {
    this._uiGame && this._isTimerRunning && this._uiGame.unschedule(this.onTimerTick), this._isTimerRunning = !1, this._isTimerPaused = !1;
  }
  onTimeExpired() {
    if (this._isTimeUpShown) return;
    const e = __rea_outer_l.getInstance().m_Level_Src;
    if (null != e && e.handleTimeExpired()) return this._isTimeUpShown = !0, void this.stopTimer();
    this._isTimeUpShown = !0, this.stopTimer(), __rea_outer_d.getInstance().showView(__rea_outer__, __rea_outer_g.POP);
  }
  getRemainingTime() {
    return this._remainingTime;
  }
  getEarnedStarCount() {
    return this._isStarRatingVoid ? 0 : this._timeLimit <= 0 ? __rea_outer_S.COUNT_MAX : __rea_outer_S.resolveCount(this._remainingTime);
  }
  refreshTimeHud() {
    if (!this._uiGame) return;
    const e = this._timeLimit > 0 ? this._remainingTime / this._timeLimit : 0;
    this._uiGame.setTimeProgress(e, this.formatTime(this._remainingTime)), this._uiGame.setStarCount(this.getEarnedStarCount());
  }
  trackGameResetEvent() {
    const e = __rea_outer_c.getInstance().getSelectedLevelId(),
      i = this.getLevelSessionStats(),
      s = this.getLevelProgressSteps();
    __rea_outer_f.getInstance().trackGameReset(e, i.duration, i.hintUsed, s.totalSteps, s.stepType);
  }
  reloadCurrentLevelAfterReset() {
    __rea_outer_v.getInstance().enterGameModeForSelectedLevel("Retry").finally(() => {
      this._isResettingLevel = !1;
    });
  }
  formatTime(e) {
    const i = e % 60;
    return `${Math.floor(e / 60)}:${i < 10 ? `0${i}` : `${i}`}`;
  }
  beginLevelSession() {
    this.resetLevelSessionCounters(), this._isSessionActive = !0, this._isSessionPaused = !1, this._isAppInBackground = !1, this.registerAppVisibilityHandlers(), this.scheduleSessionTick();
  }
  endLevelSession() {
    this._isSessionActive = !1, this._isSessionPaused = !1, this.unscheduleSessionTick(), this.unregisterAppVisibilityHandlers();
  }
  resetLevelSessionCounters() {
    this._sessionPlaySeconds = 0, this._sessionHintUsed = 0;
  }
  pauseLevelSession() {
    this._isSessionPaused = !0;
  }
  resumeLevelSession() {
    this._isSessionPaused = !1;
  }
  canAccumulateSessionTime() {
    return this._isSessionActive && !this._isSessionPaused && !this._isAppInBackground;
  }
  scheduleSessionTick() {
    var e;
    null == (e = this._uiGame) || e.schedule(this.onSessionTick, 1);
  }
  unscheduleSessionTick() {
    var e;
    null == (e = this._uiGame) || e.unschedule(this.onSessionTick);
  }
  registerAppVisibilityHandlers() {
    __rea_outer_r.on(__rea_outer_r.EVENT_HIDE, this.onAppHide), __rea_outer_r.on(__rea_outer_r.EVENT_SHOW, this.onAppShow);
  }
  unregisterAppVisibilityHandlers() {
    __rea_outer_r.off(__rea_outer_r.EVENT_HIDE, this.onAppHide), __rea_outer_r.off(__rea_outer_r.EVENT_SHOW, this.onAppShow);
  }
}
__recovered_export_0 = G, G._instance = null, __rea_outer_i._RF.pop();
export { __recovered_export_0 as GameController };
