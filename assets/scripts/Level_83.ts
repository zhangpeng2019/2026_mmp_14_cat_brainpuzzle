// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_83.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { Vec2 as __rea_outer_i } from "cc";
import { Vec3 as __rea_outer_s } from "cc";
import { tween as __rea_outer_h } from "cc";
import { Label as __rea_outer_o } from "cc";
import { Tween as __rea_outer_n } from "cc";
import { Node as __rea_outer_d } from "cc";
import { Button as __rea_outer_r } from "cc";
import { UITransform as __rea_outer_a } from "cc";
import { _decorator as __rea_outer_l } from "cc";
import { default as __rea_outer_c } from "./LevelBase";
import { default as __rea_outer_u } from "./AudioManager";
import { I18nController as __rea_outer_N } from "./i18n-controller";
import { UIManager as __rea_outer_p } from "./ui-manager";
import { UILayer as __rea_outer_g } from "./ui-layer";
import { UIHint as __rea_outer_m } from "./uihint";
import { UIFail as __rea_outer_v } from "./uifail";
import { GameController as __rea_outer_y } from "./GameController";
import { stopAllTweens as __rea_outer_b } from "./CocosCompat";
import { getUIOpacity as __rea_outer_f } from "./CocosCompat";
import { setNodeOpacity as __rea_outer_C } from "./CocosCompat";
let __recovered_export_0;
var A;
__rea_outer_t._RF.push({}, "85f5chV1ZVJN6fzyWfyJutd", "Level_83", void 0);
const {
    ccclass: w
  } = __rea_outer_l,
  S = "83_5",
  I = "level83_1",
  B = "level83_4",
  T = .45;
__recovered_export_0 = w("Level_83")(A = class extends __rea_outer_c {
  constructor(...e) {
    super(...e), this.winstate = !1, this.phase = 0, this.beat = "visitor", this.isSettled = !1, this.isInputLocked = !1, this.isTouchTracking = !1, this.gestureStartedInside = !1, this.buttonsVisible = !1, this.hasStartedClaw = !1, this.repairmanStaying = !1, this.butcherStaying = !1, this.womanRevealed = !1, this.girlRevealed = !1, this.grandmaRevealed = !1, this.butcherRevealed = !1, this.repairmanClueStep = 0, this.currentCharacterId = 0, this.visitorCursor = 0, this.voiceToken = 0, this.actionToken = 0, this.fightCursor = 0, this.visitorQueue = [], this.fightOrder = [], this.touchStart = new __rea_outer_i(), this.gameNode = null, this.bgNode = null, this.bg1Node = null, this.doorNode = null, this.doorwayNode = null, this.doorwayMurderer1Node = null, this.doorwayMurderer2Node = null, this.doorwaySceneNode = null, this.soundNode = null, this.promptNode = null, this.promptLabel = null, this.blackNode = null, this.failureNode = null, this.day2Node = null, this.dayLabelNode = null, this.backBgNode = null, this.openButtonNode = null, this.notOpenButtonNode = null, this.womanNode = null, this.womanBagNode = null, this.girlNode = null, this.girlDoorwayNode = null, this.repairmanNode = null, this.repairmanDoubtNode = null, this.repairmanBagNode = null, this.repairmanTouchNode = null, this.workBadgeNode = null, this.grandmaNode = null, this.grandma1Node = null, this.butcherNode = null, this.butcher1Node = null, this.butcherDoubtNode = null, this.murdererNode = null, this.repairmanOpenNode = null, this.repairmanEndNode = null, this.repairmanEnd1Node = null, this.butcherOpenNode = null, this.butcherEndNode = null, this.butcherEnd1Node = null, this.murdererOpenNode = null, this.murdererEndNode = null, this.fightNode = null, this.fight1Node = null, this.fight2Node = null, this.fight3Node = null, this.repairmanEndHome = new __rea_outer_s(), this.butcherEndHome = new __rea_outer_s(), this.isInputBound = !1, this.hasStarted = !1;
  }
  onLoad() {
    super.onLoad(), this.bindNodes(), this.allItemNum = 6;
  }
  start() {
    this.hasStarted = !0, this.bindInput(), this.beginOpening();
  }
  onEnable() {
    super.onEnable(), this.hasStarted && this.bindInput();
  }
  onDisable() {
    this.actionToken += 1, this.voiceToken += 1, __rea_outer_u.stopVoice(), this.stopFightLoop(), this.stopSoundPulse(), this.stopPoseTweens(), this.unbindInput(), super.onDisable();
  }
  onDestroy() {
    this.stopPoseTweens(), this.unbindInput(), super.onDestroy();
  }
  showHint() {
    if (1 !== this.phase || this.isInputLocked || this.isSettled || this.currentCharacterId < 1) return;
    const e = __rea_outer_N.getInstance().getKey(`level83_hint${this.currentCharacterId}`);
    __rea_outer_p.getInstance().showView(__rea_outer_m, void 0, {
      body: e
    });
  }
  getGameProgressSnapshot() {
    const e = Math.min(this.hasInstallNum, 6);
    return {
      progress: e / 6,
      label: `${e}/6`
    };
  }
  handleTimeExpired() {
    return 1 !== this.phase || this.isSettled;
  }
  markAllTasksCompleted() {
    this.hasInstallNum = 6, this.phase = 2, this.winstate = !0, this.isSettled = !0, this.setInputLocked(!0), this.hideButtons(), this.actionToken += 1, this.voiceToken += 1, __rea_outer_u.stopVoice(), this.stopFightLoop(), this.stopSoundPulse();
  }
  beginOpening() {
    this.phase = 0, this.beat = "visitor", this.winstate = !1, this.isSettled = !1, this.hasStartedClaw = !1, this.repairmanStaying = !1, this.butcherStaying = !1, this.currentCharacterId = 0, this.visitorCursor = 0, this.hasInstallNum = 0, this.allItemNum = 6, this.visitorQueue.length = 0, this.visitorQueue.push(1), this.shuffleIds([2, 3, 4]).forEach(e => {
      this.visitorQueue.push(e);
    }), this.visitorQueue.push(5), this.resetClueState(), this.applyClosedDoorScene(), this.hidePrompt(), this.hideButtons(), this.setInputLocked(!0), __rea_outer_u.playMusic("bgm2", !0, .5), __rea_outer_y.getInstance().pauseTimer(), __rea_outer_y.getInstance().refreshGameProgress(), this.playKnock(() => this.showOpeningMurderer(this.doorwayMurderer2Node, !1));
  }
  showOpeningMurderer(e, t) {
    this.isOpeningLive() && (this.showPeephole(e), this.setNodeActive(this.doorwaySceneNode, !0), t ? this.scheduleStep(.5, () => this.playOpeningLine()) : this.scheduleStep(1.5, () => this.showOpeningMurderer(this.doorwayMurderer1Node, !0)));
  }
  playOpeningLine() {
    this.isOpeningLive() && (this.showIndoor(!0), this.playLine("83_1", () => {
      this.isOpeningLive() && this.scheduleStep(1, () => {
        this.playKnock(() => this.enterPhase1());
      });
    }));
  }
  enterPhase1() {
    this.isOpeningLive() && (this.phase = 1, __rea_outer_y.getInstance().resumeTimer(), this.enterVisitor(1));
  }
  isOpeningLive() {
    return this.isValid && 0 === this.phase && !this.isSettled;
  }
  enterVisitor(e) {
    if (this.isSettled) return;
    this.beat = "visitor", this.currentCharacterId = e, this.resetClueState(), this.showPeephole(this.getVisitorNode(e)), this.hideButtons(), this.setInputLocked(!1), 2 === e && (this.showButtons(), this.showGirlDoorway());
    const t = this.getArrivalVoice(e);
    t && this.playLine(t);
  }
  enterNight() {
    this.isSettled || (this.beat = "night", this.currentCharacterId = 6, this.showPeephole(this.murdererNode), this.showButtons(), this.setInputLocked(!1), this.playLine("83_14"));
  }
  advanceVisitor() {
    this.isSettled || (this.visitorCursor += 1, this.visitorCursor >= this.visitorQueue.length ? this.enterNight() : this.enterVisitor(this.visitorQueue[this.visitorCursor]));
  }
  onOpenClicked() {
    this.canPressButtons() && (__rea_outer_u.playEffect_1(I), this.cancelPendingSteps(), this.interruptVoice(), "night" !== this.beat ? this.isRefuseCharacter(this.currentCharacterId) ? this.resolveBadOpen() : 3 !== this.currentCharacterId && 5 !== this.currentCharacterId || this.resolveCorrectEnter(this.currentCharacterId) : this.resolveRound6Open());
  }
  onNotOpenClicked() {
    this.canPressButtons() && (__rea_outer_u.playEffect_1(I), this.cancelPendingSteps(), this.interruptVoice(), "night" !== this.beat ? 3 !== this.currentCharacterId && 5 !== this.currentCharacterId ? this.isRefuseCharacter(this.currentCharacterId) && this.leaveToNext(!0) : this.leaveToNext(!1) : this.resolveRound6Refuse());
  }
  leaveToNext(e) {
    e && this.addProgress();
    const t = 2 === this.currentCharacterId && !this.girlRevealed;
    this.hideButtons(), this.setInputLocked(!0), this.showIndoor(!0), t ? (this.girlRevealed = !0, this.playLine(S, () => this.scheduleNextKnock())) : this.scheduleNextKnock();
  }
  scheduleNextKnock() {
    this.scheduleStep(1, () => {
      this.playKnock(() => this.advanceVisitor());
    });
  }
  resolveCorrectEnter(e) {
    const t = 3 === e ? this.repairmanOpenNode : this.butcherOpenNode,
      i = 3 === e ? "83_8" : "83_13";
    this.addProgress(), this.hideButtons(), this.setInputLocked(!0), this.showEnterPose(t), this.playLine(i, () => {
      this.setNodeActive(t, !1), 3 === e ? this.repairmanStaying = !0 : this.butcherStaying = !0, this.setNodeActive(this.doorNode, !0);
      const i = 3 === e ? this.repairmanEndNode : this.butcherEndNode;
      this.slideGuestOffLeft(i, () => this.scheduleNextKnock());
    });
  }
  resolveBadOpen() {
    this.commitOutcome(), this.showIndoorMurderer(), this.scaleMurdererThenFail();
  }
  resolveRound6Open() {
    this.commitOutcome();
    const e = Number(this.repairmanStaying) + Number(this.butcherStaying);
    e >= 2 ? this.playSuccessEnding() : 1 !== e ? (this.showIndoorMurderer(), this.scaleMurdererThenFail()) : this.playShortHelpEnding();
  }
  resolveRound6Refuse() {
    this.commitOutcome(), this.showIndoor(!0), this.playLine("83_15", () => {
      this.fadeDayTitle(() => {
        this.showIndoor(!0), this.playLine("83_16", () => {
          this.setNodeActive(this.doorNode, !1), this.scheduleStep(.5, () => {
            this.showMurdererOpen(1), this.playLine("83_17", () => this.scaleMurdererThenFail());
          });
        });
      });
    });
  }
  playSuccessEnding() {
    this.hasInstallNum = 6, __rea_outer_y.getInstance().refreshGameProgress(), this.showIndoorMurderer(), this.slideGuestsIn([this.repairmanEndNode, this.butcherEndNode]), this.playLine("83_18", () => {
      this.isValid && (this.setNodeActive(this.murdererOpenNode, !1), this.setNodeActive(this.repairmanEndNode, !1), this.setNodeActive(this.butcherEndNode, !1), this.startFightLoop(), __rea_outer_u.playEffect_1(B, void 0, !0), this.scheduleStep(1, () => {
        this.stopFightLoop(), __rea_outer_u.stopOneEffect(B), this.showStandingEnding(), this.phase = 2, this.winstate = !0, this.showLevelSuccess(1);
      }));
    });
  }
  playShortHelpEnding() {
    const e = this.repairmanStaying ? this.repairmanEndNode : this.butcherEndNode,
      t = this.repairmanStaying ? this.repairmanEnd1Node : this.butcherEnd1Node;
    this.showIndoorMurderer(), this.slideGuestsIn([e], () => {
      this.setNodeActive(this.murdererOpenNode, !1), this.setNodeActive(e, !1), this.startFightLoop(), __rea_outer_u.playEffect_1(B, void 0, !0), this.scheduleStep(1, () => {
        this.stopFightLoop(), __rea_outer_u.stopOneEffect(B), this.showMurdererOpen(1), this.setNodeActive(t, !0), this.placeGuestAboveDoor(t), this.scaleMurdererThenFail();
      });
    });
  }
  revealWoman() {
    this.womanRevealed || 1 !== this.currentCharacterId || (this.womanRevealed = !0, this.setNodeActive(this.womanBagNode, !0), this.playClueThenLine("83_3", () => this.showButtonsIfVisitor(1)));
  }
  revealGirl() {
    this.girlRevealed || 2 !== this.currentCharacterId || (this.girlRevealed = !0, this.showGirlDoorway(), this.playClueThenLine(S));
  }
  advanceRepairmanClue() {
    if (!(3 !== this.currentCharacterId || this.repairmanClueStep >= 2)) {
      if (0 === this.repairmanClueStep) return this.repairmanClueStep = 1, this.setNodeActive(this.repairmanBagNode, !0), void __rea_outer_u.playEffect_1(I);
      this.repairmanClueStep = 2, this.setNodeActive(this.workBadgeNode, !0), this.playClueThenLine("83_7", () => this.showButtonsIfVisitor(3));
    }
  }
  revealGrandma() {
    this.grandmaRevealed || 4 !== this.currentCharacterId || (this.grandmaRevealed = !0, this.setNodeActive(this.grandmaNode, !1), this.setNodeActive(this.grandma1Node, !0), this.playClueThenLine("83_10", () => this.showButtonsIfVisitor(4)));
  }
  revealButcher() {
    this.butcherRevealed || 5 !== this.currentCharacterId || (this.butcherRevealed = !0, this.setNodeActive(this.butcherNode, !1), this.setNodeActive(this.butcher1Node, !0), this.playClueThenLine("83_12", () => this.showButtonsIfVisitor(5)));
  }
  showButtonsIfVisitor(e) {
    this.isSettled || "visitor" !== this.beat || this.currentCharacterId !== e || this.showButtons();
  }
  showIndoorMurderer() {
    this.hideAllVisitors(), this.hideAllPoses(), this.hideFightLayers(), this.hideOpeningMurderers(), this.stopSoundPulse(), this.setNodeActive(this.day2Node, !1), this.setNodeActive(this.dayLabelNode, !1), this.setNodeActive(this.bg1Node, !1), this.setNodeActive(this.doorwayNode, !1), this.setNodeActive(this.doorwaySceneNode, !1), this.setNodeActive(this.doorNode, !1), this.setNodeActive(this.bgNode, !0), this.showMurdererOpen(1);
  }
  showMurdererOpen(e) {
    const t = this.murdererOpenNode;
    null != t && t.isValid && (__rea_outer_b(t), t.setScale(e, e, 1), t.active = !0);
  }
  scaleMurdererThenFail() {
    const e = this.murdererOpenNode;
    null != e && e.isValid && (__rea_outer_b(e), e.active = !0, e.setScale(1, 1, 1), __rea_outer_h(e).to(1, {
      scale: new __rea_outer_s(1.3, 1.3, 1)
    }).start()), this.scheduleStep(1, () => this.showClawAndFail());
  }
  showClawAndFail() {
    !this.hasStartedClaw && this.isValid && (this.hasStartedClaw = !0, this.stopFightLoop(), __rea_outer_u.stopOneEffect(B), this.stopSoundPulse(), this.hidePrompt(), this.setNodeOpacitySafe(this.blackNode, 255), this.setNodeActive(this.blackNode, !0), this.raiseNode(this.blackNode), this.setNodeActive(this.failureNode, !0), this.raiseNode(this.failureNode), __rea_outer_u.playEffect_1("level83_3"), this.scheduleStep(1, () => {
      this.phase = 2, this.winstate = !1, __rea_outer_y.getInstance().pauseTimer(), __rea_outer_p.getInstance().showView(__rea_outer_v, __rea_outer_g.WIN_ANIMATION);
    }));
  }
  fadeDayTitle(e) {
    this.applyDayTitle(), this.hidePrompt(), this.setNodeOpacitySafe(this.blackNode, 0), this.setNodeOpacitySafe(this.dayLabelNode, 0), this.setNodeActive(this.blackNode, !0), this.setNodeActive(this.dayLabelNode, !0), this.raiseNode(this.blackNode), this.raiseNode(this.dayLabelNode), this.fadeOpacity(this.blackNode, 255, T), this.fadeOpacity(this.dayLabelNode, 255, T), this.scheduleStep(1.25, () => {
      this.fadeOpacity(this.blackNode, 0, T), this.fadeOpacity(this.dayLabelNode, 0, T), this.scheduleStep(T, () => {
        this.setNodeActive(this.blackNode, !1), this.setNodeActive(this.dayLabelNode, !1), e();
      });
    });
  }
  applyDayTitle() {
    var e;
    const t = (null == (e = this.dayLabelNode) ? void 0 : e.getComponent(__rea_outer_o)) ?? null;
    t && (t.string = __rea_outer_N.getInstance().getKey("game69"));
  }
  showStandingEnding() {
    this.setNodeActive(this.repairmanEndNode, !0), this.setNodeActive(this.butcherEndNode, !0), this.setNodeActive(this.murdererEndNode, !0), this.placeGuestAtHome(this.repairmanEndNode, this.repairmanEndHome), this.placeGuestAtHome(this.butcherEndNode, this.butcherEndHome), this.placeGuestAboveDoor(this.repairmanEndNode), this.placeGuestAboveDoor(this.butcherEndNode), this.placeGuestAboveDoor(this.murdererEndNode);
  }
  slideGuestsIn(e, t) {
    const i = e.filter(e => !0 === (null == e ? void 0 : e.isValid));
    0 !== i.length ? (i.forEach(e => this.startGuestSlide(e)), t && this.scheduleStep(.6, t)) : null == t || t();
  }
  startGuestSlide(e) {
    const t = e === this.butcherEndNode ? this.butcherEndHome : this.repairmanEndHome;
    __rea_outer_b(e), e.setPosition(t.x + 1200, t.y, t.z), e.active = !0, this.placeGuestAboveDoor(e), __rea_outer_h(e).to(.6, {
      position: new __rea_outer_s(t.x, t.y, t.z)
    }).start();
  }
  slideGuestOffLeft(e, t) {
    if (null == e || !e.isValid) return void t();
    const i = e === this.butcherEndNode ? this.butcherEndHome : this.repairmanEndHome;
    __rea_outer_b(e), e.setPosition(i.x, i.y, i.z), e.active = !0, this.placeGuestAboveDoor(e), __rea_outer_h(e).to(.6, {
      position: new __rea_outer_s(i.x - 1200, i.y, i.z)
    }).call(() => {
      e.isValid && (e.active = !1), this.isValid && t();
    }).start();
  }
  showGirlDoorway() {
    this.setNodeActive(this.girlDoorwayNode, !0);
  }
  placeGuestAtHome(e, t) {
    null != e && e.isValid && (__rea_outer_b(e), e.setPosition(t.x, t.y, t.z));
  }
  fadeOpacity(e, t, i) {
    if (null == e || !e.isValid) return;
    const s = __rea_outer_f(e);
    __rea_outer_n.stopAllByTarget(s), __rea_outer_h(s).to(i, {
      opacity: t
    }).start();
  }
  setNodeOpacitySafe(e, t) {
    if (null == e || !e.isValid) return;
    const i = __rea_outer_f(e);
    __rea_outer_n.stopAllByTarget(i), i.opacity = t;
  }
  raiseNode(e) {
    const t = null == e ? void 0 : e.parent;
    null != e && e.isValid && t && e.setSiblingIndex(t.children.length - 1);
  }
  stopPoseTweens() {
    [this.murdererOpenNode, this.repairmanEndNode, this.butcherEndNode, this.blackNode, this.dayLabelNode, this.failureNode].forEach(e => {
      null != e && e.isValid && __rea_outer_b(e);
    });
  }
  commitOutcome() {
    this.isSettled = !0, this.hideButtons(), this.setInputLocked(!0), __rea_outer_y.getInstance().pauseTimer();
  }
  addProgress() {
    this.hasInstallNum += 1, __rea_outer_y.getInstance().refreshGameProgress();
  }
  applyClosedDoorScene() {
    this.hideUnusedLayers(), this.hideOpeningMurderers(), this.hideAllVisitors(), this.hideAllPoses(), this.hideFightLayers(), this.setNodeActive(this.bgNode, !0), this.setNodeActive(this.doorNode, !0), this.setNodeActive(this.bg1Node, !1), this.setNodeActive(this.doorwayNode, !1), this.setNodeActive(this.soundNode, !1), this.setNodeActive(this.blackNode, !1), this.setNodeActive(this.failureNode, !1), this.setNodeActive(this.day2Node, !1), this.setNodeActive(this.dayLabelNode, !1), this.setNodeActive(this.promptNode, !0);
  }
  showPeephole(e) {
    this.hideAllVisitors(), this.hideAllPoses(), this.hideFightLayers(), this.stopSoundPulse(), this.setNodeActive(this.day2Node, !1), this.setNodeActive(this.dayLabelNode, !1), this.setNodeActive(this.bgNode, !0), this.setNodeActive(this.doorNode, !1), this.setNodeActive(this.bg1Node, !0), this.setNodeActive(this.doorwayNode, !0), this.setNodeActive(this.doorwaySceneNode, !1), this.hideOpeningMurderers(), this.setNodeActive(e, !0);
  }
  showIndoor(e) {
    this.hideAllVisitors(), this.hideAllPoses(), this.stopSoundPulse(), this.setNodeActive(this.bg1Node, !1), this.setNodeActive(this.doorwayNode, !1), this.setNodeActive(this.doorwaySceneNode, !1), this.setNodeActive(this.bgNode, !0), this.setNodeActive(this.doorNode, e), this.hideOpeningMurderers(), this.refreshStayingGuests();
  }
  showEnterPose(e) {
    this.hideAllVisitors(), this.hideAllPoses(), this.hideOpeningMurderers(), this.stopSoundPulse(), this.setNodeActive(this.bg1Node, !1), this.setNodeActive(this.doorwayNode, !1), this.setNodeActive(this.doorwaySceneNode, !1), this.setNodeActive(this.doorNode, !1), this.setNodeActive(this.bgNode, !0), this.setNodeActive(e, !0), this.refreshStayingGuests();
  }
  refreshStayingGuests() {
    this.setNodeActive(this.repairmanEndNode, !1), this.setNodeActive(this.butcherEndNode, !1);
  }
  hideLeaveClues() {
    this.setNodeActive(this.womanBagNode, !1), this.setNodeActive(this.girlDoorwayNode, !1), this.setNodeActive(this.grandma1Node, !1);
  }
  hideAllVisitors() {
    this.setNodeActive(this.womanNode, !1), this.setNodeActive(this.womanBagNode, !1), this.setNodeActive(this.girlNode, !1), this.setNodeActive(this.girlDoorwayNode, !1), this.setNodeActive(this.repairmanNode, !1), this.setNodeActive(this.repairmanDoubtNode, !1), this.setNodeActive(this.repairmanBagNode, !1), this.setNodeActive(this.workBadgeNode, !1), this.setNodeActive(this.grandmaNode, !1), this.setNodeActive(this.grandma1Node, !1), this.setNodeActive(this.butcherNode, !1), this.setNodeActive(this.butcher1Node, !1), this.setNodeActive(this.butcherDoubtNode, !1), this.setNodeActive(this.murdererNode, !1);
  }
  hideAllPoses() {
    this.setNodeActive(this.repairmanOpenNode, !1), this.setNodeActive(this.repairmanEndNode, !1), this.setNodeActive(this.repairmanEnd1Node, !1), this.setNodeActive(this.butcherOpenNode, !1), this.setNodeActive(this.butcherEndNode, !1), this.setNodeActive(this.butcherEnd1Node, !1), this.setNodeActive(this.murdererOpenNode, !1), this.setNodeActive(this.murdererEndNode, !1);
  }
  hideFightLayers() {
    this.setNodeActive(this.fightNode, !1), this.setNodeActive(this.fight1Node, !1), this.setNodeActive(this.fight2Node, !1), this.setNodeActive(this.fight3Node, !1);
  }
  hideOpeningMurderers() {
    this.setNodeActive(this.doorwayMurderer1Node, !1), this.setNodeActive(this.doorwayMurderer2Node, !1);
  }
  hideUnusedLayers() {
    const e = this.gameNode;
    if (!e) return;
    ["doorway_bg", "doorway_scene"].forEach(t => {
      const i = e.getChildByName(t);
      i && (i.active = !1);
    });
    const t = this.node.getChildByPath("UIPanel/demo");
    t && (t.active = !1);
  }
  placeGuestAboveDoor(e) {
    const t = this.doorNode,
      i = this.promptNode;
    if (null == e || !e.isValid || null == t || !t.isValid || e.parent !== t.parent) return;
    const s = t.getSiblingIndex();
    if (e.getSiblingIndex() > s) return;
    let h = s + 1;
    null != i && i.isValid && i.parent === t.parent && h >= i.getSiblingIndex() && (h = Math.max(s, i.getSiblingIndex() - 1)), e.setSiblingIndex(h);
  }
  showButtons() {
    this.buttonsVisible = !0, this.setNodeActive(this.openButtonNode, !0), this.setNodeActive(this.notOpenButtonNode, !0);
  }
  hideButtons() {
    this.buttonsVisible = !1, this.setNodeActive(this.openButtonNode, !1), this.setNodeActive(this.notOpenButtonNode, !1);
  }
  setInputLocked(e) {
    this.isInputLocked = e;
    const t = this.backBgNode;
    if (null == t || !t.isValid) return;
    if (0 === this.phase) return void (t.active = !1);
    t.active = e, __rea_outer_C(t, 0);
    const i = t.parent;
    e && i && t.setSiblingIndex(i.children.length - 1);
  }
  playKnock(e) {
    const t = this.soundNode;
    null != t && t.isValid && (this.setNodeActive(t, !0), t.setScale(1, 1, 1), __rea_outer_b(t), __rea_outer_n.stopAllByTag(83), __rea_outer_h(t).tag(83).to(.12, {
      scale: new __rea_outer_s(1.2, 1.2, 1)
    }).to(.12, {
      scale: new __rea_outer_s(1, 1, 1)
    }).union().repeatForever().start()), __rea_outer_u.playEffect_1("level83_2"), this.scheduleStep(1, () => {
      this.stopSoundPulse(), e();
    });
  }
  stopSoundPulse() {
    const e = this.soundNode;
    null != e && e.isValid && (__rea_outer_n.stopAllByTag(83), __rea_outer_b(e), e.setScale(1, 1, 1), e.active = !1);
  }
  startFightLoop() {
    const e = [this.fight1Node, this.fight2Node, this.fight3Node].filter(e => null != e);
    this.fightOrder = this.shuffleNodes(e), this.fightCursor = 0, this.setNodeActive(this.fightNode, !0), this.showFightSymbol(), this.unschedule(this.onFightTick), this.schedule(this.onFightTick, .15);
  }
  onFightTick() {
    this.isValid && 0 !== this.fightOrder.length && (this.fightCursor += 1, this.fightCursor >= this.fightOrder.length && (this.fightOrder = this.shuffleNodes(this.fightOrder), this.fightCursor = 0), this.showFightSymbol());
  }
  showFightSymbol() {
    this.setNodeActive(this.fight1Node, !1), this.setNodeActive(this.fight2Node, !1), this.setNodeActive(this.fight3Node, !1), this.setNodeActive(this.fightOrder[this.fightCursor] ?? null, !0);
  }
  stopFightLoop() {
    this.unschedule(this.onFightTick), this.hideFightLayers();
  }
  playLine(e, t) {
    this.voiceToken += 1;
    const i = this.voiceToken;
    this.showPrompt(e), __rea_outer_u.stopVoice(), __rea_outer_u.playVoice(e), this.scheduleOnce(() => {
      this.isVoiceLive(i) && (null == t || t(), this.voiceToken === i && this.hidePrompt());
    }, this.resolveDialogueHoldSeconds(e));
  }
  playClueThenLine(e, t) {
    this.interruptVoice();
    const i = this.voiceToken;
    __rea_outer_u.playEffect_1(I, () => {
      this.isVoiceLive(i) && !this.isSettled && this.playLine(e, t);
    });
  }
  interruptVoice() {
    this.voiceToken += 1, __rea_outer_u.stopVoice();
  }
  showPrompt(e) {
    this.setNodeActive(this.promptNode, !0), this.promptLabel && (this.promptLabel.string = __rea_outer_N.getInstance().getKey(e), this.promptLabel.node.active = !0), this.raiseNode(this.promptNode);
  }
  hidePrompt() {
    this.setNodeActive(this.promptNode, !1);
  }
  resolveDialogueHoldSeconds(e) {
    var t;
    const i = (null == (t = __rea_outer_u.audioMap.get(e)) ? void 0 : t.getDuration()) ?? 0;
    return i > .05 ? i : 2.5;
  }
  scheduleStep(e, t) {
    const i = this.actionToken;
    this.scheduleOnce(() => {
      this.isValid && i === this.actionToken && t();
    }, e);
  }
  cancelPendingSteps() {
    this.actionToken += 1;
  }
  isVoiceLive(e) {
    return this.isValid && e === this.voiceToken;
  }
  canPressButtons() {
    return 1 === this.phase && !this.isInputLocked && !this.isSettled && this.buttonsVisible;
  }
  canAcceptGesture() {
    return 1 === this.phase && !this.isInputLocked && !this.isSettled && "visitor" === this.beat;
  }
  bindInput() {
    var e;
    !this.isInputBound && null != (e = this.node) && e.isValid && (this.node.on(__rea_outer_d.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(__rea_outer_d.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(__rea_outer_d.EventType.TOUCH_CANCEL, this.onTouchCancel, this), this.listenButton(this.openButtonNode, this.onOpenClicked), this.listenButton(this.notOpenButtonNode, this.onNotOpenClicked), this.isInputBound = !0);
  }
  unbindInput() {
    this.isInputBound && (this.unlistenNode(this.node, __rea_outer_d.EventType.TOUCH_START, this.onTouchStart), this.unlistenNode(this.node, __rea_outer_d.EventType.TOUCH_END, this.onTouchEnd), this.unlistenNode(this.node, __rea_outer_d.EventType.TOUCH_CANCEL, this.onTouchCancel), this.unlistenNode(this.openButtonNode, __rea_outer_r.EventType.CLICK, this.onOpenClicked), this.unlistenNode(this.notOpenButtonNode, __rea_outer_r.EventType.CLICK, this.onNotOpenClicked), this.isInputBound = !1);
  }
  listenButton(e, t) {
    null != e && e.isValid && e.on(__rea_outer_r.EventType.CLICK, t, this);
  }
  unlistenNode(e, t, i) {
    null != e && e.isValid && e.off(t, i, this);
  }
  onTouchStart(e) {
    if (this.isTouchTracking = !1, !this.canAcceptGesture()) return;
    const t = e.getUILocation();
    this.hitsActiveButton(t) || (this.isTouchTracking = !0, this.touchStart.set(t.x, t.y), this.gestureStartedInside = this.containsNode(this.getSwipeNode(), t, !1));
  }
  onTouchEnd(e) {
    if (!this.isTouchTracking) return;
    if (this.isTouchTracking = !1, !this.canAcceptGesture()) return;
    const t = e.getUILocation();
    if (this.hitsActiveButton(t)) return;
    const i = t.x - this.touchStart.x,
      s = t.y - this.touchStart.y,
      h = Math.hypot(i, s);
    h < 30 ? this.tryHotspotClick(t) : this.trySwipe(i, s, h);
  }
  onTouchCancel() {
    this.isTouchTracking = !1;
  }
  tryHotspotClick(e) {
    2 === this.currentCharacterId && !this.girlRevealed && this.containsNode(this.girlDoorwayNode, this.touchStart, !0) && this.containsNode(this.girlDoorwayNode, e, !0) ? this.revealGirl() : 3 === this.currentCharacterId && this.repairmanClueStep < 2 && this.containsNode(this.repairmanTouchNode, this.touchStart, !0) && this.containsNode(this.repairmanTouchNode, e, !0) && this.advanceRepairmanClue();
  }
  trySwipe(e, t, i) {
    if (!this.gestureStartedInside || i < 30) return;
    const s = Math.abs(e),
      h = Math.abs(t);
    t > 0 && h >= 1.2 * s ? 1 === this.currentCharacterId ? this.revealWoman() : 5 === this.currentCharacterId && this.revealButcher() : e > 0 && s >= 1.2 * h && 4 === this.currentCharacterId && this.revealGrandma();
  }
  hitsActiveButton(e) {
    return this.containsNode(this.openButtonNode, e, !1) || this.containsNode(this.notOpenButtonNode, e, !1);
  }
  containsNode(e, t, i) {
    return !(null == e || !e.isValid) && (e.activeInHierarchy ? (null == (s = e.getComponent(__rea_outer_a)) ? void 0 : s.getBoundingBoxToWorld().contains(t)) ?? !1 : !!i && this.containsInactiveNode(e, t));
    var s;
  }
  containsInactiveNode(e, t) {
    const i = e.getComponent(__rea_outer_a),
      s = e.parent,
      h = (null == s ? void 0 : s.getComponent(__rea_outer_a)) ?? null;
    if (!i || !s || !h) return !1;
    const o = h.convertToWorldSpaceAR(e.position),
      n = s.worldScale,
      d = i.contentSize.width * Math.abs(n.x) * Math.abs(e.scale.x),
      r = i.contentSize.height * Math.abs(n.y) * Math.abs(e.scale.y),
      l = o.x - i.anchorPoint.x * d,
      c = o.y - i.anchorPoint.y * r;
    return t.x >= l && t.x <= l + d && t.y >= c && t.y <= c + r;
  }
  getSwipeNode() {
    return 1 === this.currentCharacterId ? this.womanNode : 4 !== this.currentCharacterId || this.grandmaRevealed ? 5 !== this.currentCharacterId || this.butcherRevealed ? null : this.butcherNode : this.grandmaNode;
  }
  getVisitorNode(e) {
    switch (e) {
      case 1:
        return this.womanNode;
      case 2:
        return this.girlNode;
      case 3:
        return this.repairmanNode;
      case 4:
        return this.grandmaNode;
      case 5:
        return this.butcherNode;
      default:
        return null;
    }
  }
  getArrivalVoice(e) {
    switch (e) {
      case 1:
        return "83_2";
      case 2:
        return "83_4";
      case 3:
        return "83_6";
      case 4:
        return "83_9";
      case 5:
        return "83_11";
      default:
        return "";
    }
  }
  isRefuseCharacter(e) {
    return 1 === e || 2 === e || 4 === e;
  }
  resetClueState() {
    this.womanRevealed = !1, this.girlRevealed = !1, this.grandmaRevealed = !1, this.butcherRevealed = !1, this.repairmanClueStep = 0;
  }
  shuffleIds(e) {
    const t = e.slice();
    for (let e = t.length - 1; e > 0; e -= 1) {
      const i = Math.floor(Math.random() * (e + 1)),
        s = t[e];
      t[e] = t[i], t[i] = s;
    }
    return t;
  }
  shuffleNodes(e) {
    const t = e.slice();
    for (let e = t.length - 1; e > 0; e -= 1) {
      const i = Math.floor(Math.random() * (e + 1)),
        s = t[e];
      t[e] = t[i], t[i] = s;
    }
    return t;
  }
  bindNodes() {
    var e, t, i;
    const s = this.node.getChildByName("UIPanel");
    this.gameNode = (null == s ? void 0 : s.getChildByName("gameNode")) ?? null, this.backBgNode = (null == s ? void 0 : s.getChildByName("backBG")) ?? null;
    const h = (null == s ? void 0 : s.getChildByName("click_root")) ?? null;
    this.openButtonNode = (null == h ? void 0 : h.getChildByName("ButtonOpen")) ?? null, this.notOpenButtonNode = (null == h ? void 0 : h.getChildByName("Buttonnot_open")) ?? null;
    const n = this.gameNode;
    n ? (this.bgNode = n.getChildByName("bg"), this.bg1Node = n.getChildByName("bg_1"), this.doorNode = n.getChildByName("door"), this.doorwayNode = n.getChildByName("doorway"), this.doorwayMurderer1Node = n.getChildByName("doorway_murderer_1"), this.doorwayMurderer2Node = n.getChildByName("doorway_murderer_2"), this.doorwaySceneNode = n.getChildByName("doorway_scene"), null == (e = this.bgNode) || e.setScale(1, 1, 1), null == (t = this.bg1Node) || t.setScale(1, 1, 1), this.soundNode = n.getChildByName("sound"), this.promptNode = n.getChildByName("prompt_box"), this.promptLabel = (null == (i = this.promptNode) || null == (i = i.getChildByName("Label")) ? void 0 : i.getComponent(__rea_outer_o)) ?? null, this.blackNode = n.getChildByName("black"), this.failureNode = n.getChildByName("failure"), this.day2Node = n.getChildByName("Day 2"), this.dayLabelNode = n.getChildByName("Label-Day"), this.womanNode = n.getChildByName("woman"), this.womanBagNode = n.getChildByName("woman_bag"), this.girlNode = n.getChildByName("girl"), this.girlDoorwayNode = n.getChildByName("girl_doorway"), this.repairmanNode = n.getChildByName("repairman"), this.repairmanBagNode = n.getChildByName("repairman_bag"), this.repairmanTouchNode = n.getChildByPath("clicks/touch3"), this.workBadgeNode = n.getChildByName("work_badge"), this.grandmaNode = n.getChildByName("grandma"), this.grandma1Node = n.getChildByName("grandma_1"), this.butcherNode = n.getChildByName("butcher"), this.butcher1Node = n.getChildByName("butcher_1"), this.murdererNode = n.getChildByName("murderer"), this.repairmanOpenNode = n.getChildByName("repairman_open"), this.repairmanEndNode = n.getChildByName("repairman_end"), this.repairmanEnd1Node = n.getChildByName("repairman_end_1"), this.butcherOpenNode = n.getChildByName("butcher_open"), this.butcherEndNode = n.getChildByName("butcher_end"), this.butcherEnd1Node = n.getChildByName("butcher_end_1"), this.murdererOpenNode = n.getChildByName("murderer_open"), this.murdererEndNode = n.getChildByName("murderer_end"), this.fightNode = n.getChildByName("fight"), this.fight1Node = n.getChildByName("fight_1"), this.fight2Node = n.getChildByName("fight_2"), this.fight3Node = n.getChildByName("fight_3"), this.bindDoubtNodes(n), this.repairmanEndNode && this.repairmanEndHome.set(this.repairmanEndNode.position), this.butcherEndNode && this.butcherEndHome.set(this.butcherEndNode.position)) : console.error("[Level_83] UIPanel/gameNode is missing.");
  }
  bindDoubtNodes(e) {
    const t = e.children,
      i = t.findIndex(e => "repairman" === e.name),
      s = t.findIndex(e => "repairman_bag" === e.name),
      h = t.findIndex(e => "butcher_1" === e.name),
      o = t.findIndex(e => "murderer" === e.name);
    this.repairmanDoubtNode = null, this.butcherDoubtNode = null, t.forEach((e, t) => {
      "doubt" === e.name && (t > i && t < s && (this.repairmanDoubtNode = e), t > h && t < o && (this.butcherDoubtNode = e));
    });
  }
  setNodeActive(e, t) {
    null != e && e.isValid && (e.active = t);
  }
}) || A;
__rea_outer_t._RF.pop();
export { __recovered_export_0 as default };
