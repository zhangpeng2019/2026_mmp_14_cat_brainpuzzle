// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_35.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_e } from "cc";
import { Vec3 as __rea_outer_i } from "cc";
import { tween as __rea_outer_s } from "cc";
import { Node as __rea_outer_o } from "cc";
import { Button as __rea_outer_h } from "cc";
import { UITransform as __rea_outer_n } from "cc";
import { Sprite as __rea_outer_l } from "cc";
import { Label as __rea_outer_d } from "cc";
import { Vec2 as __rea_outer_a } from "cc";
import { _decorator as __rea_outer_r } from "cc";
import { default as __rea_outer_c } from "./LevelBase";
import { default as __rea_outer_u } from "./clue-hit-tester";
import { default as __rea_outer_g } from "./AudioManager";
import { I18nController as __rea_outer_N } from "./i18n-controller";
import { UIManager as __rea_outer_p } from "./ui-manager";
import { UILayer as __rea_outer_v } from "./ui-layer";
import { UIHint as __rea_outer_y } from "./uihint";
import { UIFail as __rea_outer_f } from "./uifail";
import { GameController as __rea_outer_m } from "./GameController";
import { stopAllTweens as __rea_outer_b } from "./CocosCompat";
import { default as __rea_outer_B } from "./ActionSystem";
let __recovered_export_0;
var S;
__rea_outer_e._RF.push({}, "dd017tLOxNKFYPZS5BoEcQA", "Level_35", void 0);
const {
    ccclass: A
  } = __rea_outer_r,
  w = ["level35_hint1", "level35_hint2", "level35_hint3", "level35_hint4", "level35_hint5", "level35_hint6", "level35_hint7"];
__recovered_export_0 = A("Level_35")(S = class extends __rea_outer_c {
  constructor(...t) {
    super(...t), this.phase = 0, this.winstate = !1, this.gameNode = null, this.backBgNode = null, this.bubbleNode = null, this.dialogBoxNode = null, this.dialogBoxLeftNode = null, this.dialogBoxRightNode = null, this.bubbleLabel = null, this.promptBoxNode = null, this.promptLabel = null, this.clickRootNode = null, this.buttonLeft = null, this.buttonRight = null, this.buttonLeftLabel = null, this.buttonRightLabel = null, this.leftSeat = this.createEmptySeat("left"), this.rightSeat = this.createEmptySeat("right"), this.girlNode = null, this.girl1Node = null, this.girl2Node = null, this.face1Node = null, this.faceFireNode = null, this.fightNode = null, this.endNode = null, this.endBoysRoot = null, this.endBoySlots = [], this.endBoyBodies = [], this.endBoyExpressions = [], this.magnifierNode = null, this.penNode = null, this.necklaceNode = null, this.necklace1Node = null, this.necklace2Node = null, this.doubtNode = null, this.assetsNode = null, this.assets1Node = null, this.cellPhoneNode = null, this.cellPhone1Node = null, this.woodenBoardNode = null, this.woodenBoardLeftNode = null, this.leftFrontNode = null, this.rightFrontNode = null, this.leftBoardLabel = null, this.rightBoardLabel = null, this.hand1Node = null, this.hand11Node = null, this.hand2Node = null, this.hand21Node = null, this.windowClosedNode = null, this.windowOpenNode = null, this.windowGirlNode = null, this.windowOutsideNode = null, this.heartNode = null, this.heart1Node = null, this.heart2Node = null, this.usedTestIds = new Set(), this.overlayHomes = new Map(), this.activeDragState = null, this.swipeGestureState = null, this.isInteractionLocked = !0, this.isWaitingForKick = !1, this.isTrueLoveOnLeft = !0, this.scumbagKickCount = 0, this.endBoyFilledCount = 0, this.voiceToken = 0, this.currentDialogueKey = "", this.girlOrigin = new __rea_outer_i(), this.girl1Origin = new __rea_outer_i(), this.girl2Origin = new __rea_outer_i(), this.face1Origin = new __rea_outer_i(), this.endOrigin = new __rea_outer_i(), this.fightOrigin = new __rea_outer_i(), this.cryFaceFrame = null, this.onTouchStart = t => {
      if (1 !== this.phase || this.isInteractionLocked || this.isWaitingForKick || this.activeDragState) return;
      const e = this.getTouchWorldPoint(t);
      this.tryBeginDragAtPoint(e, t) || (this.usedTestIds.has(5) || !this.isPointInsideNode(this.hand1Node, e) ? this.usedTestIds.has(6) || !this.isPointInsideNode(this.hand2Node, e) ? this.usedTestIds.has(7) || !this.isPointInsideNode(this.windowClosedNode, e) ? this.usedTestIds.has(1) || !this.isPointInsideBoy(this.leftSeat, e) && !this.isPointInsideBoy(this.rightSeat, e) || (this.swipeGestureState = {
        kind: "boyUp",
        startLocation: e.clone()
      }) : this.swipeGestureState = {
        kind: "windowLeft",
        startLocation: e.clone()
      } : this.swipeGestureState = {
        kind: "handRight",
        startLocation: e.clone()
      } : this.swipeGestureState = {
        kind: "handLeft",
        startLocation: e.clone()
      });
    }, this.onTouchMove = t => {
      if (!this.activeDragState || 1 !== this.phase || this.isInteractionLocked) return;
      const e = this.activeDragState;
      this.setDragNodePositionFromTouch(t, e.dragNode, e.dragParent, e.touchOffset);
    }, this.onTouchEnd = t => {
      if (1 !== this.phase) return this.activeDragState = null, void (this.swipeGestureState = null);
      if (this.activeDragState) return this.handleItemDrop(this.activeDragState, this.getTouchWorldPoint(t)), void (this.activeDragState = null);
      const e = this.swipeGestureState;
      if (this.swipeGestureState = null, !e || this.isInteractionLocked || this.isWaitingForKick) return;
      const i = this.getTouchWorldPoint(t),
        s = i.x - e.startLocation.x,
        o = i.y - e.startLocation.y;
      "boyUp" !== e.kind || !this.isUpSwipe(s, o) || this.usedTestIds.has(1) ? "handLeft" !== e.kind || !this.isLeftSwipe(s, o) || this.usedTestIds.has(5) ? "handRight" !== e.kind || !this.isRightSwipe(s, o) || this.usedTestIds.has(6) ? "windowLeft" === e.kind && this.isLeftSwipe(s, o) && !this.usedTestIds.has(7) && this.beginTest7() : this.beginTest6() : this.beginTest5() : this.beginTest1();
    }, this.onKickLeft = () => {
      this.onKickSeat(!0);
    }, this.onKickRight = () => {
      this.onKickSeat(!1);
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.allItemNum = 7, this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.applyInitialVisibility(), this.enterPhase0();
  }
  onDestroy() {
    this.cleanupRuntime(), super.onDestroy();
  }
  showHint() {
    if (1 !== this.phase) return;
    const t = [];
    for (let e = 1; e <= 7; e += 1) this.usedTestIds.has(e) || t.push(e);
    if (0 === t.length) return;
    const e = t[Math.floor(Math.random() * t.length)],
      i = w[e - 1],
      s = __rea_outer_N.getInstance().getKey(i);
    __rea_outer_p.getInstance().showView(__rea_outer_y, void 0, {
      body: s
    });
  }
  getGameProgressSnapshot() {
    const t = Math.min(this.hasInstallNum, 7);
    return {
      progress: t / 7,
      label: `${t}/7`
    };
  }
  handleTimeExpired() {
    return !!(this.phase >= 2 || this.winstate);
  }
  markAllTasksCompleted() {
    this.hasInstallNum = 7, this.scumbagKickCount = 7, this.phase = 2, this.winstate = !0, this.isInteractionLocked = !0;
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.isInteractionLocked = !0, this.isWaitingForKick = !1, this.hasInstallNum = 0, this.allItemNum = 7, this.scumbagKickCount = 0, this.endBoyFilledCount = 0, this.usedTestIds.clear(), this.activeDragState = null, this.swipeGestureState = null, this.voiceToken += 1, this.stopCurrentDialogueEffect(), this.hideBubble(), this.setNodeActive(this.promptBoxNode, !1);
  }
  applyInitialVisibility() {
    this.setNodeActive(this.gameNode, !0), this.setNodeActive(this.endBoysRoot, !1), this.endBoySlots.forEach(t => this.setNodeActive(t, !1)), this.setNodeActive(this.magnifierNode, !0), this.setNodeActive(this.penNode, !0), this.setNodeActive(this.necklaceNode, !0), this.setNodeActive(this.hand1Node, !0), this.setNodeActive(this.hand11Node, !1), this.setNodeActive(this.hand2Node, !0), this.setNodeActive(this.hand21Node, !1), this.setNodeActive(this.windowClosedNode, !0), this.setNodeActive(this.windowOpenNode, !1), this.setNodeActive(this.windowGirlNode, !1), this.setNodeActive(this.windowOutsideNode, !1), this.setNodeActive(this.girlNode, !0), this.resetNodeHome(this.girlNode, this.girlOrigin), this.setNodeActive(this.girl1Node, !1), this.resetNodeHome(this.girl1Node, this.girl1Origin), this.setNodeActive(this.girl2Node, !1), this.resetNodeHome(this.girl2Node, this.girl2Origin), this.resetNodeHome(this.face1Node, this.face1Origin), this.setNodeActive(this.face1Node, !1), this.stopFace1ScaleLoop(), this.setNodeActive(this.faceFireNode, !1), this.setNodeActive(this.fightNode, !1), this.resetNodeHome(this.fightNode, this.fightOrigin), this.setNodeActive(this.endNode, !1), this.resetNodeHome(this.endNode, this.endOrigin), this.setNodeActive(this.promptBoxNode, !1), this.hideReactionOverlays(), this.setNodeActive(this.heartNode, !1), this.setNodeActive(this.heart1Node, !1), this.setNodeActive(this.heart2Node, !1), this.hideSeatCharacters(this.leftSeat), this.hideSeatCharacters(this.rightSeat), this.setNodeActive(this.clickRootNode, !1), this.setNodeActive(this.backBgNode, !1), this.setNodeActive(this.node.getChildByPath("UIPanel/demo"), !1), this.setNodeActive(this.dialogBoxLeftNode, !1), this.setNodeActive(this.dialogBoxRightNode, !1), this.applyDriveAwayLabels();
  }
  enterPhase0() {
    this.phase = 0, this.isInteractionLocked = !0, __rea_outer_g.playMusic("bgm4", !0, .5), this.setNodeActive(this.backBgNode, !0), this.setNodeActive(this.girlNode, !0), this.playDialogue("35_1", () => {
      this.isValid && 0 === this.phase && (this.hideBubble(), this.playPrompt("35_2", () => {
        this.isValid && 0 === this.phase && (this.setNodeActive(this.promptBoxNode, !1), this.playGirlExitThenBoysEnter());
      }));
    });
  }
  playGirlExitThenBoysEnter() {
    const t = this.girlNode;
    null != t && t.isValid ? (this.stopTweenIfValid(t), __rea_outer_s(t).to(.5, {
      position: new __rea_outer_i(this.girlOrigin.x - 900, this.girlOrigin.y, this.girlOrigin.z)
    }).call(() => {
      this.isValid && (this.setNodeActive(t, !1), this.resetNodeHome(t, this.girlOrigin), this.playBoysEnterIntro());
    }).start()) : this.playBoysEnterIntro();
  }
  playBoysEnterIntro() {
    this.prepareSeatForEntrance(this.leftSeat), this.prepareSeatForEntrance(this.rightSeat);
    let t = 0;
    const e = () => {
      t += 1, t < 2 || this.playDialogue("35_3", () => {
        this.isValid && 0 === this.phase && (this.applySitPose(this.leftSeat), this.applySitPose(this.rightSeat), this.enterPhase1());
      });
    };
    this.moveStandBoyIn(this.leftSeat, e), this.moveStandBoyIn(this.rightSeat, e);
  }
  enterPhase1() {
    this.phase = 1, this.hideBubble(), this.setNodeActive(this.backBgNode, !1), this.randomizeIdentities(), this.registerHandlers(), this.registerButtonHandlers(), this.isWaitingForKick = !1, this.isInteractionLocked = !1, __rea_outer_m.getInstance().refreshGameProgress();
  }
  randomizeIdentities() {
    this.isTrueLoveOnLeft = Math.random() < .5;
  }
  registerHandlers() {
    this.node.on(__rea_outer_o.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(__rea_outer_o.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(__rea_outer_o.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(__rea_outer_o.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
  }
  unregisterHandlers() {
    var t;
    null != (t = this.node) && t.isValid && (this.node.off(__rea_outer_o.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(__rea_outer_o.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(__rea_outer_o.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(__rea_outer_o.EventType.TOUCH_CANCEL, this.onTouchEnd, this));
  }
  registerButtonHandlers() {
    var t, e;
    null == (t = this.buttonLeft) || t.node.on(__rea_outer_h.EventType.CLICK, this.onKickLeft, this), null == (e = this.buttonRight) || e.node.on(__rea_outer_h.EventType.CLICK, this.onKickRight, this);
  }
  unregisterButtonHandlers() {
    var t, e;
    null != (t = this.buttonLeft) && null != (t = t.node) && t.isValid && this.buttonLeft.node.off(__rea_outer_h.EventType.CLICK, this.onKickLeft, this), null != (e = this.buttonRight) && null != (e = e.node) && e.isValid && this.buttonRight.node.off(__rea_outer_h.EventType.CLICK, this.onKickRight, this);
  }
  tryBeginDragAtPoint(t, e) {
    return !this.usedTestIds.has(2) && this.isPointInsideNode(this.necklaceNode, t) ? (this.beginDrag(this.necklaceNode, "necklace", e), !0) : !this.usedTestIds.has(3) && this.isPointInsideNode(this.penNode, t) ? (this.beginDrag(this.penNode, "pen", e), !0) : !(this.usedTestIds.has(4) || !this.isPointInsideNode(this.magnifierNode, t)) && (this.beginDrag(this.magnifierNode, "magnifier", e), !0);
  }
  beginDrag(t, e, i) {
    if (null == t || !t.isValid) return;
    const s = t.parent;
    if (null == s || !s.isValid) return;
    const o = t.position.clone(),
      h = t.getSiblingIndex(),
      l = t.worldPosition.clone(),
      d = this.gameNode ?? s;
    t.setParent(d);
    const a = d.getComponent(__rea_outer_n);
    if (a) {
      const e = a.convertToNodeSpaceAR(l);
      t.setPosition(e);
    }
    t.setSiblingIndex(d.children.length - 1);
    const r = this.calculateTouchOffset(i, t, d);
    this.setDragNodePositionFromTouch(i, t, d, r), this.activeDragState = {
      kind: e,
      dragNode: t,
      dragParent: d,
      touchOffset: r,
      originParent: s,
      originPosition: o,
      originSiblingIndex: h
    };
  }
  handleItemDrop(t, e) {
    if (this.isInteractionLocked || this.isWaitingForKick) return void this.restoreDragNode(t);
    this.isDragNearBoy(t.dragNode, this.leftSeat) || this.isDragNearBoy(t.dragNode, this.rightSeat) ? (this.restoreDragNode(t), this.setNodeActive(t.dragNode, !1), "necklace" !== t.kind ? "pen" !== t.kind ? this.beginTest4() : this.beginTest3() : this.beginTest2()) : this.restoreDragNode(t);
  }
  restoreDragNode(t) {
    const e = t.dragNode;
    e.isValid && (e.setParent(t.originParent), e.setSiblingIndex(t.originSiblingIndex), e.setPosition(t.originPosition));
  }
  markTestUsedAndLock(t) {
    return !this.usedTestIds.has(t) && 1 === this.phase && !this.isWaitingForKick && (this.usedTestIds.add(t), this.isInteractionLocked = !0, this.setNodeActive(this.backBgNode, !0), __rea_outer_g.playEffect_1("level35_1"), !0);
  }
  beginTest1() {
    if (!this.markTestUsedAndLock(1)) return;
    const t = this.getTrueSeat(),
      e = this.getScumSeat();
    this.showArm(t, "right1"), this.showExpression(t, t.expression), this.showArm(e, "right11"), this.showExpression(e, e.expression1), this.playBoyVoicesThenKick("35_4", "35_5");
  }
  beginTest2() {
    if (!this.markTestUsedAndLock(2)) return;
    const t = this.getTrueSeat(),
      e = this.getScumSeat();
    this.placeOverlayOnSeat(this.necklace2Node, t, !1), this.showExpression(t, t.expression), this.placeOverlayOnSeat(this.necklace1Node, e, !0), this.showExpression(e, e.expression2), this.placeNearHead(this.doubtNode, e), this.playBoyVoicesThenKick("35_6", "35_7");
  }
  beginTest3() {
    this.markTestUsedAndLock(3) && (this.applyWritingPose(this.leftSeat), this.applyWritingPose(this.rightSeat), this.setNodeActive(this.woodenBoardLeftNode, !0), this.setNodeActive(this.woodenBoardNode, !0), this.playDialogue("35_8", () => {
      this.isValid && 1 === this.phase && (this.setNodeActive(this.woodenBoardLeftNode, !1), this.setNodeActive(this.woodenBoardNode, !1), this.applySitPoseKeepBody(this.leftSeat), this.applySitPoseKeepBody(this.rightSeat), this.showExpression(this.leftSeat, this.leftSeat.expression), this.showExpression(this.rightSeat, this.rightSeat.expression), this.showPromiseBoard(this.getTrueSeat(), "game50"), this.showPromiseBoard(this.getScumSeat(), "game51"), this.offerKickButtons());
    }));
  }
  beginTest4() {
    this.markTestUsedAndLock(4) && this.playDialogue("35_9", () => {
      this.isValid && 1 === this.phase && (this.placeOverlayOnSeat(this.cellPhone1Node, this.getTrueSeat(), !1), this.placeOverlayOnSeat(this.cellPhoneNode, this.getScumSeat(), !0), this.scheduleOnce(() => {
        this.isValid && 1 === this.phase && (this.setNodeActive(this.cellPhoneNode, !1), this.setNodeActive(this.cellPhone1Node, !1), this.offerKickButtons());
      }, 1));
    });
  }
  beginTest5() {
    this.markTestUsedAndLock(5) && (this.setNodeActive(this.hand1Node, !1), this.setNodeActive(this.hand11Node, !0), this.playDialogue("35_10", () => {
      if (!this.isValid || 1 !== this.phase) return;
      const t = this.getTrueSeat(),
        e = this.getScumSeat();
      this.setNodeActive(t.clothes, !1), this.setNodeActive(e.clothes, !1), this.showExpression(t, t.expression), this.setNodeActive(e.figure1, !0), this.showExpression(e, e.expression3), this.setNodeActive(this.hand11Node, !1), this.setNodeActive(this.hand1Node, !0), this.playBoyVoicesThenKick("35_11", "35_12");
    }));
  }
  beginTest6() {
    this.markTestUsedAndLock(6) && (this.setNodeActive(this.hand2Node, !1), this.setNodeActive(this.hand21Node, !0), this.playDialogue("35_13", () => {
      if (!this.isValid || 1 !== this.phase) return;
      const t = this.getTrueSeat(),
        e = this.getScumSeat();
      this.showArm(t, "right2"), this.showArm(e, "right2"), this.placeAssetsOnBoy(this.assetsNode, t), this.placeAssetsOnBoy(this.assets1Node, e), this.showExpression(t, t.expression), this.showExpression(e, e.expression3), this.playBoyVoicesThenKick("35_14", "35_15");
    }));
  }
  beginTest7() {
    this.markTestUsedAndLock(7) && (this.setNodeActive(this.windowClosedNode, !1), this.setNodeActive(this.windowOpenNode, !0), this.setNodeActive(this.windowGirlNode, !0), this.setNodeActive(this.windowOutsideNode, !1), this.showExpression(this.getScumSeat(), this.getScumSeat().expression5), this.playBoyVoicesThenKick(null, "35_16"));
  }
  playBoyVoicesThenKick(t, e) {
    const i = this.isTrueLoveOnLeft ? t : e,
      s = this.isTrueLoveOnLeft ? e : t;
    this.playVoiceSequence([{
      key: i,
      pointerSide: "left"
    }, {
      key: s,
      pointerSide: "right"
    }], () => {
      this.isValid && 1 === this.phase && this.offerKickButtons();
    });
  }
  offerKickButtons() {
    this.hideBubble(), this.setNodeActive(this.backBgNode, !1), this.setNodeActive(this.clickRootNode, !0), this.isWaitingForKick = !0, this.isInteractionLocked = !1, this.buttonLeft && (this.buttonLeft.interactable = !0), this.buttonRight && (this.buttonRight.interactable = !0);
  }
  hideKickButtons() {
    this.setNodeActive(this.clickRootNode, !1), this.buttonLeft && (this.buttonLeft.interactable = !1), this.buttonRight && (this.buttonRight.interactable = !1);
  }
  onKickSeat(t) {
    if (1 !== this.phase || !this.isWaitingForKick || this.isInteractionLocked) return;
    this.isWaitingForKick = !1, this.isInteractionLocked = !0, this.hideKickButtons(), this.setNodeActive(this.backBgNode, !0);
    t === this.isTrueLoveOnLeft ? this.beginKickTrueLove(t) : this.beginKickScumbag(t);
  }
  beginKickScumbag(t) {
    const e = t ? this.leftSeat : this.rightSeat;
    this.hideReactionOverlays(), this.applySitPose(this.leftSeat), this.applySitPose(this.rightSeat), this.playDialogue("35_17", () => {
      this.isValid && 1 === this.phase && this.playGirl1EnterThenFight(e);
    }, e.side);
  }
  playGirl1EnterThenFight(t) {
    this.setNodeActive(this.girl1Node, !0), this.setNodeActive(this.face1Node, !0), this.moveFromLeft(this.face1Node, this.face1Origin, () => {
      this.isValid && this.startFace1ScaleLoop();
    }), this.moveFromLeft(this.girl1Node, this.girl1Origin, () => {
      this.isValid && this.playDialogue("35_18", () => {
        this.isValid && (this.stopFace1ScaleLoop(), this.setNodeActive(this.girl1Node, !1), this.setNodeActive(this.face1Node, !1), this.resetNodeHome(this.girl1Node, this.girl1Origin), this.resetNodeHome(this.face1Node, this.face1Origin), this.hideSeatCharacters(t), this.playFightThenContinue(t));
      });
    });
  }
  playFightThenContinue(t) {
    this.placeFightAtSeat(t), this.setNodeActive(this.fightNode, !0), __rea_outer_g.playEffect_1("level35_2"), this.scheduleOnce(() => {
      this.isValid && (this.setNodeActive(this.fightNode, !1), this.resetNodeHome(this.fightNode, this.fightOrigin), this.scumbagKickCount += 1, this.hasInstallNum = this.scumbagKickCount, __rea_outer_m.getInstance().refreshGameProgress(), this.TryQuickWin() || (this.scumbagKickCount >= 7 ? this.enterPhase2Success() : (this.fillEndBoySlot(!1), this.refillVacantSeat(t))));
    }, .5);
  }
  beginKickTrueLove(t) {
    const e = t ? this.leftSeat : this.rightSeat;
    this.hideReactionOverlays(), this.applySitPose(e), this.showExpression(e, e.expression4), __rea_outer_g.playEffect_1("level35_3"), this.playDialogue("35_19", () => {
      this.isValid && (this.hideSeatCharacters(e), this.scumbagKickCount < 6 && this.fillEndBoySlot(!0), this.enterPhase2Fail());
    }, e.side);
  }
  fillEndBoySlot(t) {
    if (this.endBoyFilledCount >= 6) return;
    const e = this.endBoyFilledCount;
    this.setNodeActive(this.endBoysRoot, !0);
    const i = this.endBoySlots[e],
      s = this.endBoyBodies[e],
      o = this.endBoyExpressions[e];
    if (this.setNodeActive(i, !0), this.setNodeActive(s, !0), this.setNodeActive(o, !0), t && this.cryFaceFrame && null != o && o.isValid) {
      const t = o.getComponent(__rea_outer_l);
      t && (t.spriteFrame = this.cryFaceFrame);
    }
    this.endBoyFilledCount += 1;
  }
  refillVacantSeat(t) {
    this.prepareSeatForEntrance(t), this.moveStandBoyIn(t, () => {
      this.isValid && 1 === this.phase && (this.applySitPose(t), this.randomizeIdentities(), this.hideBubble(), this.setNodeActive(this.backBgNode, !1), this.isWaitingForKick = !1, this.isInteractionLocked = !1);
    });
  }
  enterPhase2Success() {
    this.phase = 2, this.winstate = !0, this.isInteractionLocked = !0, this.unregisterHandlers(), this.setNodeActive(this.backBgNode, !0), this.voiceToken += 1, this.stopCurrentDialogueEffect(), __rea_outer_m.getInstance().pauseTimer(), this.clearStageCharacters(), this.setNodeActive(this.endNode, !0), this.moveFromLeft(this.endNode, this.endOrigin, () => {
      this.isValid && this.playDialogue("35_20", () => {
        this.isValid && (this.hideBubble(), this.showLevelSuccess(0));
      });
    });
  }
  enterPhase2Fail() {
    this.phase = 2, this.winstate = !1, this.isInteractionLocked = !0, this.unregisterHandlers(), this.setNodeActive(this.backBgNode, !0), this.voiceToken += 1, this.stopCurrentDialogueEffect(), __rea_outer_m.getInstance().pauseTimer(), this.clearStageCharacters(), this.setNodeActive(this.girl2Node, !0), this.moveFromLeft(this.girl2Node, this.girl2Origin, () => {
      this.isValid && this.playDialogue("35_21", () => {
        this.isValid && (this.hideBubble(), __rea_outer_p.getInstance().showView(__rea_outer_f, __rea_outer_v.WIN_ANIMATION));
      });
    });
  }
  beginTimeoutFail() {
    this.phase = 2, this.winstate = !1, this.isInteractionLocked = !0, this.unregisterHandlers(), this.voiceToken += 1, this.stopCurrentDialogueEffect(), this.hideBubble(), this.hideKickButtons(), __rea_outer_m.getInstance().pauseTimer(), this.scheduleOnce(() => {
      this.isValid && __rea_outer_p.getInstance().showView(__rea_outer_f, __rea_outer_v.WIN_ANIMATION);
    }, .5);
  }
  clearStageCharacters() {
    this.hideSeatCharacters(this.leftSeat), this.hideSeatCharacters(this.rightSeat), this.setNodeActive(this.endBoysRoot, !1), this.hideReactionOverlays(), this.setNodeActive(this.girlNode, !1), this.setNodeActive(this.girl1Node, !1), this.stopFace1ScaleLoop(), this.setNodeActive(this.face1Node, !1), this.setNodeActive(this.fightNode, !1), this.hideKickButtons();
  }
  prepareSeatForEntrance(t) {
    var e;
    this.hideSeatCharacters(t), this.setNodeActive(t.sitRoot, !1), this.setNodeActive(t.standBoy, !0), null != (e = t.standBoy) && e.isValid && t.standBoy.setPosition(t.standOrigin.x - 900, t.standOrigin.y, t.standOrigin.z);
  }
  moveStandBoyIn(t, e) {
    const i = t.standBoy;
    null != i && i.isValid ? (this.stopTweenIfValid(i), __rea_outer_s(i).to(.5, {
      position: t.standOrigin.clone()
    }).call(() => {
      this.isValid && e();
    }).start()) : e();
  }
  hideSeatCharacters(t) {
    this.setNodeActive(t.standBoy, !1), this.setNodeActive(t.sitRoot, !1);
  }
  applySitPose(t) {
    this.setNodeActive(t.standBoy, !1), this.setNodeActive(t.sitRoot, !0), this.setNodeActive(t.head, !0), this.setNodeActive(t.head1, !1), this.setNodeActive(t.clothes, !0), this.setNodeActive(t.figure1, !1), this.hideAllExpressions(t), this.showArm(t, "default");
  }
  applySitPoseKeepBody(t) {
    this.setNodeActive(t.head, !0), this.setNodeActive(t.head1, !1), this.showArm(t, "default");
  }
  applyWritingPose(t) {
    this.setNodeActive(t.head, !1), this.setNodeActive(t.head1, !0), this.showArm(t, "left1");
  }
  hideAllExpressions(t) {
    this.setNodeActive(t.expression, !1), this.setNodeActive(t.expression1, !1), this.setNodeActive(t.expression2, !1), this.setNodeActive(t.expression3, !1), this.setNodeActive(t.expression4, !1), this.setNodeActive(t.expression5, !1);
  }
  showExpression(t, e) {
    this.hideAllExpressions(t), this.setNodeActive(e, !0);
  }
  showArm(t, e) {
    this.setNodeActive(t.armLeft, "left1" !== e), this.setNodeActive(t.armLeft1, "left1" === e), this.setNodeActive(t.armRight, "default" === e || "left1" === e), this.setNodeActive(t.armRight1, "right1" === e), this.setNodeActive(t.armRight11, "right11" === e), this.setNodeActive(t.armRight2, "right2" === e);
  }
  showPromiseBoard(t, e) {
    const i = "left" === t.side,
      s = i ? this.leftFrontNode : this.rightFrontNode,
      o = i ? this.leftBoardLabel : this.rightBoardLabel;
    this.setNodeActive(s, !0), o && (o.string = __rea_outer_N.getInstance().getKey(e));
  }
  hideReactionOverlays() {
    this.setNodeActive(this.necklace1Node, !1), this.setNodeActive(this.necklace2Node, !1), this.setNodeActive(this.doubtNode, !1), this.restoreOverlayHome(this.assetsNode), this.restoreOverlayHome(this.assets1Node), this.setNodeActive(this.assetsNode, !1), this.setNodeActive(this.assets1Node, !1), this.setNodeActive(this.cellPhoneNode, !1), this.setNodeActive(this.cellPhone1Node, !1), this.setNodeActive(this.woodenBoardLeftNode, !1), this.setNodeActive(this.woodenBoardNode, !1), this.setNodeActive(this.leftFrontNode, !1), this.setNodeActive(this.rightFrontNode, !1);
  }
  placeOverlayOnSeat(t, e, i) {
    if (null == t || !t.isValid) return;
    const s = this.overlayHomes.get(t);
    if (!s) return void this.setNodeActive(t, !0);
    const o = i ? this.leftSeat.origin : this.rightSeat.origin;
    t.setPosition(s.position.x + (e.origin.x - o.x), s.position.y + (e.origin.y - o.y), s.position.z), this.setNodeActive(t, !0);
  }
  placeAssetsOnBoy(t, e) {
    const i = e.sitRoot;
    null != t && t.isValid && null != i && i.isValid ? (t.setParent(i), t.setPosition(110, 80, t.position.z), t.setSiblingIndex(i.children.length - 1), this.setNodeActive(t, !0)) : this.setNodeActive(t, !0);
  }
  restoreOverlayHome(t) {
    var e;
    if (null == t || !t.isValid) return;
    const i = this.overlayHomes.get(t);
    null != i && null != (e = i.parent) && e.isValid && (t.setParent(i.parent), t.setSiblingIndex(i.siblingIndex), t.setPosition(i.position));
  }
  placeNearHead(t, e) {
    const i = e.head ?? e.sitRoot,
      s = null == t ? void 0 : t.parent;
    if (null == t || !t.isValid || null == i || !i.isValid || null == s || !s.isValid) return void this.setNodeActive(t, !0);
    const o = s.getComponent(__rea_outer_n);
    if (!o) return void this.setNodeActive(t, !0);
    const h = o.convertToNodeSpaceAR(i.worldPosition.clone());
    t.setPosition(h.x + 50, h.y + 100, h.z), this.setNodeActive(t, !0);
  }
  placeFightAtSeat(t) {
    const e = this.fightNode,
      i = t.root,
      s = null == e ? void 0 : e.parent;
    if (null == e || !e.isValid || null == i || !i.isValid || null == s || !s.isValid) return;
    const o = s.getComponent(__rea_outer_n);
    if (!o) return;
    const h = o.convertToNodeSpaceAR(i.worldPosition.clone());
    e.setPosition(h.x, h.y, h.z);
  }
  startFace1ScaleLoop() {
    const t = this.face1Node;
    null != t && t.isValid && (this.stopTweenIfValid(t), t.setScale(.9, .9, 1), __rea_outer_B.scaleRepeat_1(t, .2, .9, 1.1, 0));
  }
  stopFace1ScaleLoop() {
    const t = this.face1Node;
    null != t && t.isValid && (this.stopTweenIfValid(t), t.setScale(1, 1, 1));
  }
  moveFromLeft(t, e, i) {
    null != t && t.isValid ? (this.stopTweenIfValid(t), t.setPosition(e.x - 900, e.y, e.z), __rea_outer_s(t).to(.5, {
      position: e.clone()
    }).call(() => {
      this.isValid && i();
    }).start()) : i();
  }
  getTrueSeat() {
    return this.isTrueLoveOnLeft ? this.leftSeat : this.rightSeat;
  }
  getScumSeat() {
    return this.isTrueLoveOnLeft ? this.rightSeat : this.leftSeat;
  }
  isDragNearBoy(t, e) {
    return __rea_outer_u.isDragNearTarget(t, e.sitRoot) || __rea_outer_u.isDragNearTarget(t, e.standBoy) || __rea_outer_u.isDragNearTarget(t, e.root);
  }
  isPointInsideBoy(t, e) {
    return !!this.isPointInsideNode(t.sitRoot, e) || !!this.isPointInsideNode(t.standBoy, e) || this.isPointInsideNode(t.root, e);
  }
  playDialogue(t, e, i = "left") {
    this.playKeyedVoice(t, !0, e, i);
  }
  playPrompt(t, e) {
    this.hideBubble(), this.setNodeActive(this.promptBoxNode, !0), this.promptLabel && (this.promptLabel.string = __rea_outer_N.getInstance().getKey(t)), this.playKeyedVoice(t, !1, e, "left");
  }
  playVoiceSequence(t, e) {
    const i = t.filter(t => Boolean(t.key)),
      s = t => {
        if (t >= i.length) return void e();
        const o = i[t];
        this.playDialogue(o.key, () => {
          this.isValid && s(t + 1);
        }, o.pointerSide);
      };
    s(0);
  }
  playKeyedVoice(t, e, i, s) {
    this.voiceToken += 1;
    const o = this.voiceToken;
    e && this.showBubble(t, s);
    let h = !1;
    const n = () => {
        !h && this.isValid && o === this.voiceToken && (h = !0, this.unschedule(l), i());
      },
      l = () => {
        n();
      };
    this.scheduleOnce(l, 6), this.stopCurrentDialogueEffect(), this.currentDialogueKey = t, __rea_outer_g.playEffect_1(t, n);
  }
  stopCurrentDialogueEffect() {
    __rea_outer_g.stopVoice(), this.currentDialogueKey && (__rea_outer_g.stopOneEffect(this.currentDialogueKey), this.currentDialogueKey = "");
  }
  showBubble(t, e) {
    this.bubbleLabel && (this.bubbleLabel.string = __rea_outer_N.getInstance().getKey(t), this.setNodeActive(this.bubbleLabel.node, !0)), this.setNodeActive(this.bubbleNode, !0), this.setNodeActive(this.dialogBoxNode, !0), this.setNodeActive(this.dialogBoxLeftNode, "left" === e), this.setNodeActive(this.dialogBoxRightNode, "right" === e);
  }
  hideBubble() {
    this.setNodeActive(this.dialogBoxLeftNode, !1), this.setNodeActive(this.dialogBoxRightNode, !1), this.setNodeActive(this.bubbleNode, !1);
  }
  applyDriveAwayLabels() {
    const t = __rea_outer_N.getInstance().getKey("game52");
    this.buttonLeftLabel && (this.buttonLeftLabel.string = t), this.buttonRightLabel && (this.buttonRightLabel.string = t);
  }
  cleanupRuntime() {
    this.unscheduleAllCallbacks(), this.unregisterHandlers(), this.unregisterButtonHandlers(), this.voiceToken += 1, this.stopCurrentDialogueEffect(), this.activeDragState = null, this.swipeGestureState = null;
    [this.girlNode, this.girl1Node, this.girl2Node, this.face1Node, this.endNode, this.fightNode, this.leftSeat.standBoy, this.rightSeat.standBoy].forEach(t => this.stopTweenIfValid(t));
  }
  stopTweenIfValid(t) {
    null != t && t.isValid && __rea_outer_b(t);
  }
  createEmptySeat(t) {
    return {
      side: t,
      root: null,
      standBoy: null,
      sitRoot: null,
      head: null,
      head1: null,
      expression: null,
      expression1: null,
      expression2: null,
      expression3: null,
      expression4: null,
      expression5: null,
      armLeft: null,
      armLeft1: null,
      armRight: null,
      armRight1: null,
      armRight11: null,
      armRight2: null,
      figure1: null,
      clothes: null,
      origin: new __rea_outer_i(),
      standOrigin: new __rea_outer_i()
    };
  }
  resolveSeat(t, e) {
    const s = (null == t ? void 0 : t.getChildByName("boy_1")) ?? null,
      o = (null == t ? void 0 : t.getChildByName("boy")) ?? null,
      h = (null == t ? void 0 : t.position.clone()) ?? new __rea_outer_i(),
      n = (null == o ? void 0 : o.position.clone()) ?? new __rea_outer_i();
    return {
      side: e,
      root: t,
      standBoy: o,
      sitRoot: s,
      head: (null == s ? void 0 : s.getChildByName("boy_1_head")) ?? null,
      head1: (null == s ? void 0 : s.getChildByName("boy_1_head_1")) ?? null,
      expression: (null == s ? void 0 : s.getChildByName("boy_1_expression")) ?? null,
      expression1: (null == s ? void 0 : s.getChildByName("boy_1_expression_1")) ?? null,
      expression2: (null == s ? void 0 : s.getChildByName("boy_1_expression_2")) ?? null,
      expression3: (null == s ? void 0 : s.getChildByName("boy_1_expression_3")) ?? null,
      expression4: (null == s ? void 0 : s.getChildByName("boy_1_expression_4")) ?? null,
      expression5: (null == s ? void 0 : s.getChildByName("boy_1_expression_5")) ?? null,
      armLeft: (null == s ? void 0 : s.getChildByName("arm_left")) ?? null,
      armLeft1: (null == s ? void 0 : s.getChildByName("arm_left_1")) ?? null,
      armRight: (null == s ? void 0 : s.getChildByName("arm_right")) ?? null,
      armRight1: (null == s ? void 0 : s.getChildByName("arm_right_1")) ?? null,
      armRight11: (null == s ? void 0 : s.getChildByName("arm_right_1_1")) ?? null,
      armRight2: (null == s ? void 0 : s.getChildByName("arm_right_2")) ?? null,
      figure1: (null == s ? void 0 : s.getChildByName("figure_1")) ?? null,
      clothes: (null == s ? void 0 : s.getChildByName("clothes")) ?? null,
      origin: h,
      standOrigin: n
    };
  }
  resolveReferences() {
    var t, e, i, s, o, n, a, r, c, u, g, N, p, v, y, f, m;
    this.gameNode = this.node.getChildByPath("UIPanel/gameNode"), this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.bubbleNode = this.node.getChildByPath("UIPanel/bubble"), this.dialogBoxNode = (null == (t = this.bubbleNode) ? void 0 : t.getChildByName("dialog_box")) ?? null, this.dialogBoxLeftNode = (null == (e = this.bubbleNode) ? void 0 : e.getChildByName("dialog_box_left")) ?? null, this.dialogBoxRightNode = (null == (i = this.bubbleNode) ? void 0 : i.getChildByName("dialog_box_right")) ?? null, this.bubbleLabel = (null == (s = this.dialogBoxNode) || null == (s = s.getChildByName("Label")) ? void 0 : s.getComponent(__rea_outer_d)) ?? null, this.clickRootNode = this.node.getChildByPath("UIPanel/click_root");
    const b = (null == (o = this.clickRootNode) ? void 0 : o.getChildByName("ButtonLeft")) ?? null,
      B = (null == (n = this.clickRootNode) ? void 0 : n.getChildByName("ButtonRight")) ?? null;
    this.buttonLeft = (null == b ? void 0 : b.getComponent(__rea_outer_h)) ?? null, this.buttonRight = (null == B ? void 0 : B.getComponent(__rea_outer_h)) ?? null, this.buttonLeftLabel = (null == b || null == (a = b.getChildByName("Label")) ? void 0 : a.getComponent(__rea_outer_d)) ?? null, this.buttonRightLabel = (null == B || null == (r = B.getChildByName("Label")) ? void 0 : r.getComponent(__rea_outer_d)) ?? null;
    const S = this.gameNode;
    this.promptBoxNode = (null == S ? void 0 : S.getChildByName("prompt_box")) ?? null, this.promptLabel = (null == (c = this.promptBoxNode) || null == (c = c.getChildByName("Label")) ? void 0 : c.getComponent(__rea_outer_d)) ?? null;
    const A = (null == S ? void 0 : S.getChildByName("boys")) ?? null;
    this.leftSeat = this.resolveSeat((null == A ? void 0 : A.getChildByName("boynode1")) ?? null, "left"), this.rightSeat = this.resolveSeat((null == A ? void 0 : A.getChildByName("boynode2")) ?? null, "right");
    const w = (null == S ? void 0 : S.getChildByName("girlnode")) ?? null;
    this.girlNode = (null == w ? void 0 : w.getChildByName("girl")) ?? null, this.girl1Node = (null == w ? void 0 : w.getChildByName("girl_1")) ?? null, this.girl2Node = (null == w ? void 0 : w.getChildByName("girl_2")) ?? null, this.face1Node = (null == w ? void 0 : w.getChildByName("face_1")) ?? null, this.faceFireNode = (null == w ? void 0 : w.getChildByName("face_fire")) ?? null, this.fightNode = (null == S ? void 0 : S.getChildByName("fightnode")) ?? null, this.endNode = (null == S ? void 0 : S.getChildByName("end")) ?? null, this.endBoysRoot = (null == S ? void 0 : S.getChildByName("endboys")) ?? null, this.endBoySlots = [], this.endBoyBodies = [], this.endBoyExpressions = [];
    for (let t = 1; t <= 6; t += 1) {
      var L;
      const e = (null == (L = this.endBoysRoot) ? void 0 : L.getChildByName(`endboy${t}`)) ?? null,
        i = (null == e ? void 0 : e.getChildByName("enboy")) ?? null,
        s = (null == i ? void 0 : i.getChildByName("boy_expression")) ?? null;
      e && this.endBoySlots.push(e), i && this.endBoyBodies.push(i), s && this.endBoyExpressions.push(s);
    }
    this.magnifierNode = (null == S ? void 0 : S.getChildByName("magnifier")) ?? null, this.penNode = (null == S ? void 0 : S.getChildByName("pen")) ?? null, this.necklaceNode = (null == S ? void 0 : S.getChildByName("necklace")) ?? null, this.necklace1Node = (null == S ? void 0 : S.getChildByName("necklace_1")) ?? null, this.necklace2Node = (null == S ? void 0 : S.getChildByName("necklace_2")) ?? null, this.doubtNode = (null == S ? void 0 : S.getChildByName("doubt")) ?? null, this.assetsNode = (null == S ? void 0 : S.getChildByName("assets")) ?? null, this.assets1Node = (null == S ? void 0 : S.getChildByName("assets_1")) ?? null, this.cellPhoneNode = (null == S ? void 0 : S.getChildByName("cell_phone")) ?? null, this.cellPhone1Node = (null == S ? void 0 : S.getChildByName("cell_phone_1")) ?? null, this.woodenBoardNode = (null == (u = this.rightSeat.sitRoot) ? void 0 : u.getChildByName("wooden_board")) ?? null, this.woodenBoardLeftNode = (null == (g = this.leftSeat.sitRoot) ? void 0 : g.getChildByName("wooden_boardleft")) ?? null, this.leftFrontNode = (null == S ? void 0 : S.getChildByName("leftNodeFront")) ?? null, this.rightFrontNode = (null == S ? void 0 : S.getChildByName("RightNodeFront")) ?? null, this.leftBoardLabel = (null == (N = this.leftFrontNode) || null == (N = N.getChildByPath("wooden_board_1/Label")) ? void 0 : N.getComponent(__rea_outer_d)) ?? null, this.rightBoardLabel = (null == (p = this.rightFrontNode) || null == (p = p.getChildByPath("wooden_board_1/Label")) ? void 0 : p.getComponent(__rea_outer_d)) ?? null, this.hand1Node = (null == S ? void 0 : S.getChildByName("hand1")) ?? null, this.hand11Node = (null == S ? void 0 : S.getChildByName("hand1_1")) ?? null, this.hand2Node = (null == S ? void 0 : S.getChildByName("hand2")) ?? null, this.hand21Node = (null == S ? void 0 : S.getChildByName("hand2_1")) ?? null, this.windowClosedNode = (null == S ? void 0 : S.getChildByName("window_closed")) ?? null, this.windowOpenNode = (null == S ? void 0 : S.getChildByName("window_open")) ?? null, this.windowGirlNode = (null == S ? void 0 : S.getChildByName("window_girl")) ?? null, this.windowOutsideNode = (null == S ? void 0 : S.getChildByName("window_outside")) ?? null, this.heartNode = (null == S ? void 0 : S.getChildByName("heart")) ?? null, this.heart1Node = (null == S ? void 0 : S.getChildByName("heart_1")) ?? null, this.heart2Node = (null == S ? void 0 : S.getChildByName("heart_2")) ?? null, this.cacheOrigin(this.girlNode, t => {
      this.girlOrigin = t;
    }), this.cacheOrigin(this.girl1Node, t => {
      this.girl1Origin = t;
    }), this.cacheOrigin(this.face1Node, t => {
      this.face1Origin = t;
    }), this.cacheOrigin(this.girl2Node, t => {
      this.girl2Origin = t;
    }), this.cacheOrigin(this.endNode, t => {
      this.endOrigin = t;
    }), this.cacheOrigin(this.fightNode, t => {
      this.fightOrigin = t;
    }), this.rememberOverlayHome(this.necklace1Node), this.rememberOverlayHome(this.necklace2Node), this.rememberOverlayHome(this.doubtNode), this.rememberOverlayHome(this.assetsNode), this.rememberOverlayHome(this.assets1Node), this.rememberOverlayHome(this.cellPhoneNode), this.rememberOverlayHome(this.cellPhone1Node), this.cryFaceFrame = (null == (v = this.leftSeat.expression4) || null == (v = v.getComponent(__rea_outer_l)) ? void 0 : v.spriteFrame) ?? (null == (y = this.rightSeat.expression4) || null == (y = y.getComponent(__rea_outer_l)) ? void 0 : y.spriteFrame) ?? null, this.warnIfMissing("UIPanel/gameNode", this.gameNode), this.warnIfMissing("UIPanel/bubble/dialog_box", this.dialogBoxNode), this.warnIfMissing("UIPanel/bubble/dialog_box_left", this.dialogBoxLeftNode), this.warnIfMissing("UIPanel/bubble/dialog_box_right", this.dialogBoxRightNode), this.warnIfMissing("boys/boynode1", this.leftSeat.root), this.warnIfMissing("boys/boynode2", this.rightSeat.root), this.warnIfMissing("click_root/ButtonLeft", (null == (f = this.buttonLeft) ? void 0 : f.node) ?? null), this.warnIfMissing("click_root/ButtonRight", (null == (m = this.buttonRight) ? void 0 : m.node) ?? null), this.warnIfMissing("endboys", this.endBoysRoot), this.warnIfMissing("girlnode/girl", this.girlNode), this.warnIfMissing("prompt_box", this.promptBoxNode), this.warnIfMissing("boynode2/boy_1/wooden_board", this.woodenBoardNode), this.warnIfMissing("boynode1/boy_1/wooden_boardleft", this.woodenBoardLeftNode);
  }
  rememberOverlayHome(t) {
    var e;
    null != t && t.isValid && null != (e = t.parent) && e.isValid && this.overlayHomes.set(t, {
      parent: t.parent,
      position: t.position.clone(),
      siblingIndex: t.getSiblingIndex()
    });
  }
  cacheOrigin(t, e) {
    null != t && t.isValid && e(t.position.clone());
  }
  resetNodeHome(t, e) {
    null != t && t.isValid && t.setPosition(e);
  }
  warnIfMissing(t, e) {
    e || console.warn(`[Level_35] missing ${t}`);
  }
  isLeftSwipe(t, e) {
    return t <= -30 && Math.abs(t) >= 1.2 * Math.abs(e);
  }
  isRightSwipe(t, e) {
    return t >= 30 && Math.abs(t) >= 1.2 * Math.abs(e);
  }
  isUpSwipe(t, e) {
    return e >= 30 && Math.abs(e) >= 1.2 * Math.abs(t);
  }
  isPointInsideNode(t, e) {
    if (null == t || !t.isValid || !t.activeInHierarchy) return !1;
    const i = t.getComponent(__rea_outer_n);
    return !!i && i.getBoundingBoxToWorld().contains(e);
  }
  getTouchWorldPoint(t) {
    const e = t.getUILocation();
    return new __rea_outer_a(e.x, e.y);
  }
  getTouchLocalPosition(t, e) {
    const s = t.getUILocation(),
      o = e.getComponent(__rea_outer_n);
    return o ? o.convertToNodeSpaceAR(new __rea_outer_i(s.x, s.y, 0)) : __rea_outer_i.ZERO.clone();
  }
  calculateTouchOffset(t, e, s) {
    const o = this.getTouchLocalPosition(t, s);
    return new __rea_outer_i(e.position.x - o.x, e.position.y - o.y, 0);
  }
  setDragNodePositionFromTouch(t, e, i, s) {
    const o = this.getTouchLocalPosition(t, i);
    e.setPosition(o.x + s.x, o.y + s.y, e.position.z);
  }
  setNodeActive(t, e) {
    null != t && t.isValid && (t.active = e);
  }
}) || S;
__rea_outer_e._RF.pop();
export { __recovered_export_0 as default };
