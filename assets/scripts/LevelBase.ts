// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/LevelBase.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_s } from "cc";
import { Component as __rea_outer_t } from "cc";
import { _decorator as __rea_outer_i } from "cc";
import { GAME_DEBUG as __rea_outer_o } from "./game-config";
import { GameController as __rea_outer_l } from "./GameController";
import { default as __rea_outer_n } from "./LevelManager";
import { UIManager as __rea_outer_a } from "./ui-manager";
import { UILayer as __rea_outer_h } from "./ui-layer";
import { UISuccess as __rea_outer_u } from "./uisuccess";
import { default as __rea_outer_r } from "./AudioManager";
let __recovered_export_0, __recovered_export_1, __recovered_export_2;
var c;
__rea_outer_s._RF.push({}, "174c4KfGoBP3J1souj2pcYt", "LevelBase", void 0);
const {
    ccclass: d
  } = __rea_outer_i,
  g = __recovered_export_0 = .5,
  m = __recovered_export_1 = 2.5;
__recovered_export_2 = d("LevelBase")(c = class extends __rea_outer_t {
  constructor(...e) {
    super(...e), this.isHasShowHint = !1, this.addOpacityVal = 10, this.allFaultGoods = 0, this.countFindGoodNum = 0, this.allFindOutGoodsArr = [], this.clickGoodIndex = 0, this.isCanMove = !0, this.currentStayIndex = 0, this.decVal_Y = 17, this.hideGeZiArr = [], this.selectTarget = 0, this.selectRole = 0, this.allQuestionNum = 0, this.hasJudgeNum = 0, this.getScoreArr = [], this.dragNode = null, this.dragNodeName = "", this.dragItemIndex = -1, this.allItemNum = 0, this.hasInstallNum = 0, this.triggerIndex = -1, this.comChangeNum = 0, this.hasShowArr = [], this.plotStep = 1, this.allTurnTimes = 6, this.aniIsPlaying = !1;
  }
  onLoad() {}
  onEnable() {
    this.isHasShowHint = !1, this.addOpacityVal = 10, this.allFaultGoods = 0, this.countFindGoodNum = 0, this.allFindOutGoodsArr.length = 0, this.clickGoodIndex = 0, this.isCanMove = !0, this.hideGeZiArr = [], this.selectTarget = 0, this.selectRole = 0, this.allQuestionNum = 0, this.hasJudgeNum = 0, this.getScoreArr = [], this.dragNode = null, this.dragNodeName = "", this.dragItemIndex = -1, this.hasInstallNum = 0, this.triggerIndex = -1, this.comChangeNum = 0, this.hasShowArr.length = 0, this.plotStep = 1, this.allTurnTimes = 0, this.aniIsPlaying = !1;
  }
  onDisable() {
    this.shouldSkipStopLevelAudio() || this.stopLevelPlaybackAudio();
  }
  onDestroy() {
    this.shouldSkipStopLevelAudio() || this.stopLevelPlaybackAudio();
  }
  stopLevelPlaybackAudio() {
    __rea_outer_r.stopLevelAudio();
  }
  shouldSkipStopLevelAudio() {
    const e = null == __rea_outer_n || null == __rea_outer_n.getInstance ? void 0 : __rea_outer_n.getInstance();
    if (!e) return !1;
    const s = e.m_Level_Src;
    return null != s && s !== this;
  }
  showHint() {}
  getGameProgressSnapshot() {
    return null;
  }
  isGameProgressVisible() {
    return !0;
  }
  TryQuickWin() {
    return !!__rea_outer_o.QuickWinDebug && (this.markAllTasksCompleted(), this.showLevelSuccess(), !0);
  }
  showLevelSuccess(e = g) {
    __rea_outer_l.getInstance().pauseTimer(), this.scheduleOnce(() => {
      this.isValid && __rea_outer_a.getInstance().showView(__rea_outer_u, __rea_outer_h.WIN_ANIMATION);
    }, e);
  }
  showLevelSuccessAfterDialogue(e = m) {
    __rea_outer_l.getInstance().pauseTimer(), this.scheduleOnce(() => {
      this.isValid && this.showLevelSuccess();
    }, e);
  }
  markAllTasksCompleted() {
    this.hasInstallNum = this.allItemNum, this.hasJudgeNum = this.allQuestionNum, this.countFindGoodNum = this.allFaultGoods;
  }
  handleTimeExpired() {
    return !1;
  }
  skipOpeningToPlay() {
    return !1;
  }
  stopOpeningDialogue() {
    __rea_outer_r.stopVoice(), __rea_outer_r.cancelPendingEffectCompletions();
  }
}) || c;
__rea_outer_s._RF.pop();
export { __recovered_export_0 as LEVEL_SUCCESS_POPUP_DELAY, __recovered_export_1 as LEVEL_OUTRO_DIALOGUE_HOLD_SECONDS, __recovered_export_2 as default };
