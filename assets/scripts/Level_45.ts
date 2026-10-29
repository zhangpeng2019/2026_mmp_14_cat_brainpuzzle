// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_45.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { Node as __rea_outer_i } from "cc";
import { Vec3 as __rea_outer_s } from "cc";
import { tween as __rea_outer_o } from "cc";
import { UITransform as __rea_outer_h } from "cc";
import { Vec2 as __rea_outer_l } from "cc";
import { Label as __rea_outer_d } from "cc";
import { _decorator as __rea_outer_n } from "cc";
import { default as __rea_outer_a } from "./LevelBase";
import { default as __rea_outer_r } from "./clue-hit-tester";
import { default as __rea_outer_c } from "./AudioManager";
import { I18nController as __rea_outer_N } from "./i18n-controller";
import { UIManager as __rea_outer_g } from "./ui-manager";
import { UILayer as __rea_outer_u } from "./ui-layer";
import { UIHint as __rea_outer_p } from "./uihint";
import { UIFail as __rea_outer_v } from "./uifail";
import { GameController as __rea_outer_k } from "./GameController";
import { setNodeOpacity as __rea_outer_m } from "./CocosCompat";
import { getUIOpacity as __rea_outer_S } from "./CocosCompat";
import { stopAllTweens as __rea_outer_A } from "./CocosCompat";
let __recovered_export_0;
var b;
__rea_outer_t._RF.push({}, "c45b0oRfSJOM59EVaZrd8iQ", "Level_45", void 0);
const {
    ccclass: f
  } = __rea_outer_n,
  P = 10,
  T = ["45_2", "45_3", "45_4", "45_5", "45_6", "45_7", "45_8", "45_9", "45_10", "45_11"],
  C = ["level45_hint1", "level45_hint2", "level45_hint3", "level45_hint4", "level45_hint5", "level45_hint6", "level45_hint7", "level45_hint8", "level45_hint9", "level45_hint10"],
  I = 5,
  D = 10,
  w = 18,
  _ = 19,
  y = 20,
  O = 21,
  B = 36,
  V = 38,
  x = 39,
  G = 43;
__recovered_export_0 = f("Level_45")(b = class extends __rea_outer_a {
  constructor(...e) {
    super(...e), this.phase = 0, this.winstate = !1, this.gameNode = null, this.backBgNode = null, this.bubbleNode = null, this.bubbleLabel = null, this.dialogBox1Node = null, this.demoNode = null, this.clickRootNode = null, this.handTouchNode = null, this.chestTouchNode = null, this.treeTouchNode = null, this.airplaneNode = null, this.snakeNode = null, this.vineNode = null, this.unusedVine1Node = null, this.vine1BindNode = null, this.packageNode = null, this.packageOpenNode = null, this.drinkNode = null, this.drink1Node = null, this.drink2Node = null, this.shovelNode = null, this.unusedShovel1Node = null, this.shovel1FollowNode = null, this.shovel11Node = null, this.shovel12Node = null, this.mobilePhoneNode = null, this.mobilePhone1Node = null, this.mobilePhone2Node = null, this.mobilePhone3Node = null, this.girl1Node = null, this.girl1DrinkNode = null, this.girl1ShoelaceNode = null, this.girl1Shoelace1Node = null, this.girl1NecklaceNode = null, this.girl1Necklace1Node = null, this.girl1Necklace2Node = null, this.girl1RelaxedNode = null, this.girl1Relaxed1Node = null, this.unusedGirl1Relaxed1Node = null, this.girl2Node = null, this.girl2RelaxedNode = null, this.girl2BandageNode = null, this.girl2Bandage1Node = null, this.girl2ChestNode = null, this.girl2BallLeftNode = null, this.girl2BallRightNode = null, this.girl2Ball1LeftNode = null, this.girl2Ball1RightNode = null, this.girl2CloudNode = null, this.cloudNode = null, this.canvasNode = null, this.canvas1Node = null, this.maskNode = null, this.failureNode = null, this.snake1Node = null, this.isInteractionLocked = !1, this.isPhoneOverlayActive = !1, this.isPhoneSending = !1, this.hasPackageOpened = !1, this.shovelSwapIndex = 0, this.voiceToken = 0, this.relaxToken = 0, this.relax1Token = 0, this.currentDialogueKey = "", this.pendingClickKind = null, this.activeDragState = null, this.swipeGestureState = null, this.completedSteps = new Set(), this.followOrigins = new Map(), this.onTouchStart = e => {
      if (1 !== this.phase || this.winstate || this.isInteractionLocked || this.isPhoneSending) return;
      const t = this.getTouchWorldPoint(e);
      if (this.isPhoneOverlayActive) return this.isPointInsideNode(this.mobilePhone2Node, t) && (this.pendingClickKind = "phone2"), void (e.propagationStopped = !0);
      const i = this.hitTestPointer(t);
      if (i) {
        if ("click" === i.kind) return this.pendingClickKind = i.clickKind, void (e.propagationStopped = !0);
        if ("swipe" === i.kind) return this.swipeGestureState = {
          startLocation: t.clone()
        }, void (e.propagationStopped = !0);
        this.beginDrag(i.dragKind, e), e.propagationStopped = !0;
      }
    }, this.onTouchMove = e => {
      if (this.pendingClickKind || this.swipeGestureState) return void (e.propagationStopped = !0);
      if (!this.activeDragState || 1 !== this.phase || this.isInteractionLocked) return;
      const t = this.activeDragState;
      this.setDragNodePositionFromTouch(e, t.dragNode, t.dragParent, t.touchOffset), e.propagationStopped = !0;
    }, this.onTouchEnd = e => {
      if (1 !== this.phase || this.winstate) return this.resetActiveDrag(), this.pendingClickKind = null, void (this.swipeGestureState = null);
      if (this.pendingClickKind) {
        const t = this.pendingClickKind;
        return this.pendingClickKind = null, this.handleClick(t), void (e.propagationStopped = !0);
      }
      if (this.swipeGestureState) {
        const t = this.swipeGestureState;
        return this.swipeGestureState = null, this.isInteractionLocked || this.isPhoneOverlayActive || this.isPhoneSending || this.handleSwipeEnd(t, this.getTouchWorldPoint(e)), void (e.propagationStopped = !0);
      }
      if (!this.activeDragState) return;
      const t = this.activeDragState;
      this.activeDragState = null, this.handleDragDrop(t, e), e.propagationStopped = !0;
    }, this.tickShovelSwap = () => {
      this.isValid && 1 === this.phase && (this.shovelSwapIndex = 1 - this.shovelSwapIndex, this.setNodeActive(this.shovel11Node, 0 === this.shovelSwapIndex), this.setNodeActive(this.shovel12Node, 1 === this.shovelSwapIndex));
    }, this.hideBubble = () => {
      this.isValid && this.setNodeActive(this.bubbleNode, !1);
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.allItemNum = P, this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.enterPhase0();
  }
  onDestroy() {
    this.cleanupRuntime(!this.shouldSkipStopLevelAudio()), super.onDestroy();
  }
  handleTimeExpired() {
    return !!(this.phase >= 2 || this.winstate);
  }
  showHint() {
    if (1 !== this.phase) return;
    const e = this.resolveHintKey();
    if (!e) return;
    const t = __rea_outer_N.getInstance().getKey(e);
    __rea_outer_g.getInstance().showView(__rea_outer_p, void 0, {
      body: t
    });
  }
  getGameProgressSnapshot() {
    const e = this.hasInstallNum;
    return {
      progress: e / P,
      label: `${e}/10`
    };
  }
  markAllTasksCompleted() {
    for (let e = 1; e <= P; e += 1) this.completedSteps.add(e);
    this.hasInstallNum = P;
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.isInteractionLocked = !1, this.isPhoneOverlayActive = !1, this.isPhoneSending = !1, this.hasPackageOpened = !1, this.shovelSwapIndex = 0, this.voiceToken = 0, this.relaxToken = 0, this.relax1Token = 0, this.currentDialogueKey = "", this.pendingClickKind = null, this.activeDragState = null, this.swipeGestureState = null, this.completedSteps.clear(), this.hasInstallNum = 0, __rea_outer_c.stopVoice();
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_c.playMusic("bgm3", !0, .5), this.applyInitialVisibility(), this.setInputBlocked(!0), __rea_outer_k.getInstance().refreshGameProgress(), this.scheduleOnce(() => {
      this.isValid && 0 === this.phase && this.playDialogue("45_1", () => {
        this.isValid && 0 === this.phase && (this.setInputBlocked(!1), this.enterPhase1());
      });
    }, .25);
  }
  skipOpeningToPlay() {
    return 0 === this.phase && (this.voiceToken += 1, this.stopOpeningDialogue(), this.setInputBlocked(!1), this.enterPhase1(), !0);
  }
  enterPhase1() {
    0 === this.phase && (this.phase = 1, this.setNodeActive(this.snakeNode, !0), this.registerInteractionHandlers(), __rea_outer_k.getInstance().refreshGameProgress());
  }
  enterPhase2Success() {
    this.phase >= 2 || (this.phase = 2, this.winstate = !0, this.isInteractionLocked = !0, this.isPhoneOverlayActive = !1, this.isPhoneSending = !1, this.unregisterInteractionHandlers(), this.resetActiveDrag(), this.setInputBlocked(!0), __rea_outer_k.getInstance().pauseTimer(), this.scheduleOnceIfValid(() => {
      this.bringNodeToFront(this.airplaneNode), this.setNodeActive(this.airplaneNode, !0), __rea_outer_c.playEffect_1("level45_5"), this.playDialogue("45_12", () => {
        this.isValid && 2 === this.phase && this.showLevelSuccess(1);
      });
    }, .5));
  }
  enterPhase2SnakeFail() {
    this.phase >= 2 || (this.phase = 2, this.winstate = !1, this.isInteractionLocked = !0, this.unregisterInteractionHandlers(), this.resetActiveDrag(), this.setInputBlocked(!0), __rea_outer_k.getInstance().pauseTimer(), this.setNodeActive(this.snakeNode, !1), this.setNodeActive(this.failureNode, !1), this.setNodeActive(this.snake1Node, !0), this.bringNodeToFront(this.maskNode), this.setNodeActive(this.maskNode, !0), __rea_outer_c.playEffect_1("level45_3"), this.scheduleOnceIfValid(() => {
      2 === this.phase && (this.setNodeActive(this.failureNode, !0), __rea_outer_c.playEffect_1("level45_2"), this.playDialogue("45_13", () => {
        this.isValid && 2 === this.phase && this.scheduleOnceIfValid(() => {
          __rea_outer_g.getInstance().showView(__rea_outer_v, __rea_outer_u.WIN_ANIMATION);
        }, 1);
      }));
    }, .5));
  }
  beginTimeoutFail() {
    this.phase = 2, this.winstate = !1, this.isInteractionLocked = !0, this.cleanupRuntime(), __rea_outer_k.getInstance().pauseTimer(), __rea_outer_g.getInstance().showView(__rea_outer_v, __rea_outer_u.WIN_ANIMATION);
  }
  applyInitialVisibility() {
    this.setNodeActive(this.demoNode, !1), this.setNodeActive(this.clickRootNode, !1), this.setNodeActive(this.dialogBox1Node, !1), this.setNodeActive(this.airplaneNode, !1), this.setNodeActive(this.snakeNode, !1), this.setNodeActive(this.vineNode, !1), this.setNodeActive(this.unusedVine1Node, !1), this.setNodeActive(this.vine1BindNode, !1), this.setNodeActive(this.packageNode, !0), this.setNodeActive(this.packageOpenNode, !1), this.setNodeActive(this.drinkNode, !1), this.setNodeActive(this.drink1Node, !1), this.setNodeActive(this.drink2Node, !1), this.setNodeActive(this.shovelNode, !1), this.setNodeActive(this.unusedShovel1Node, !1), this.setNodeActive(this.shovel1FollowNode, !1), this.setNodeActive(this.shovel11Node, !1), this.setNodeActive(this.shovel12Node, !1), this.setNodeActive(this.mobilePhoneNode, !0), this.setNodeActive(this.mobilePhone1Node, !1), this.setNodeActive(this.mobilePhone2Node, !1), this.setNodeActive(this.mobilePhone3Node, !1), this.setNodeActive(this.girl1Node, !0), this.setNodeActive(this.girl1DrinkNode, !1), this.setNodeActive(this.girl1ShoelaceNode, !0), this.setNodeActive(this.girl1Shoelace1Node, !1), this.setNodeActive(this.girl1NecklaceNode, !0), this.setNodeActive(this.girl1Necklace1Node, !1), this.setNodeActive(this.girl1Necklace2Node, !1), this.setNodeActive(this.girl1RelaxedNode, !1), this.setNodeActive(this.girl1Relaxed1Node, !1), this.setNodeActive(this.unusedGirl1Relaxed1Node, !1), this.setNodeActive(this.girl2Node, !0), this.setNodeActive(this.girl2RelaxedNode, !1), this.setNodeActive(this.girl2BandageNode, !0), this.setNodeActive(this.girl2Bandage1Node, !1), this.setNodeActive(this.girl2ChestNode, !0), this.setNodeActive(this.girl2BallLeftNode, !1), this.setNodeActive(this.girl2BallRightNode, !1), this.setNodeActive(this.girl2Ball1LeftNode, !1), this.setNodeActive(this.girl2Ball1RightNode, !1), this.setNodeActive(this.girl2CloudNode, !1), this.setNodeActive(this.cloudNode, !0), this.setNodeActive(this.canvasNode, !0), this.setNodeActive(this.canvas1Node, !1), this.setNodeActive(this.maskNode, !1), this.setNodeActive(this.failureNode, !1), this.setNodeActive(this.snake1Node, !1), this.setNodeActive(this.handTouchNode, !0), this.setNodeActive(this.chestTouchNode, !0), this.setNodeActive(this.treeTouchNode, !0), this.setNodeActive(this.bubbleNode, !1), this.resetNodeOpacity(this.vine1BindNode), this.resetNodeOpacity(this.girl1Shoelace1Node), this.resetNodeOpacity(this.girl1Necklace2Node), this.resetNodeOpacity(this.girl2Bandage1Node), this.resetNodeOpacity(this.canvas1Node), this.resetNodeOpacity(this.girl2CloudNode), this.restoreFollowOrigins();
  }
  registerInteractionHandlers() {
    this.node.on(__rea_outer_i.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(__rea_outer_i.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(__rea_outer_i.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(__rea_outer_i.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
  }
  unregisterInteractionHandlers() {
    var e;
    null != (e = this.node) && e.isValid && (this.node.off(__rea_outer_i.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(__rea_outer_i.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(__rea_outer_i.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(__rea_outer_i.EventType.TOUCH_CANCEL, this.onTouchEnd, this));
  }
  hitTestPointer(e) {
    const t = [];
    return this.pushClickHit(t, "package", this.packageNode, e, !this.hasPackageOpened), this.pushClickHit(t, "phone", this.mobilePhoneNode, e, !this.completedSteps.has(1) && !this.isPhoneOverlayActive), this.pushDragHit(t, "drink", this.drinkNode, e, this.hasPackageOpened && !this.completedSteps.has(2)), this.pushDragHit(t, "shovel", this.shovelNode, e, this.hasPackageOpened && !this.completedSteps.has(3)), this.pushDragHit(t, "vine", this.vineNode, e, this.completedSteps.has(3) && !this.completedSteps.has(4)), this.pushDragHit(t, "shoelace", this.girl1ShoelaceNode, e, !this.completedSteps.has(5)), this.pushDragHit(t, "necklace", this.girl1NecklaceNode, e, !this.completedSteps.has(6)), this.pushDragHit(t, "cloud", this.cloudNode, e, !this.completedSteps.has(7)), this.pushDragHit(t, "bandage", this.girl2BandageNode, e, !this.completedSteps.has(8)), this.pushDragHit(t, "canvas", this.canvasNode, e, !this.completedSteps.has(10)), this.pushDragHit(t, "snake", this.snakeNode, e, !0), !this.completedSteps.has(9) && this.isPointInsideNode(this.chestTouchNode, e) && t.push({
      kind: "swipe",
      area: this.getNodeArea(this.chestTouchNode)
    }), 0 === t.length ? null : (t.sort((e, t) => e.area - t.area), t[0]);
  }
  pushClickHit(e, t, i, s, o) {
    o && this.isPointInsideNode(i, s) && e.push({
      kind: "click",
      clickKind: t,
      area: this.getNodeArea(i)
    });
  }
  pushDragHit(e, t, i, s, o) {
    o && this.isPointInsideNode(i, s) && e.push({
      kind: "drag",
      dragKind: t,
      area: this.getNodeArea(i)
    });
  }
  handleClick(e) {
    "package" !== e ? "phone" !== e ? this.sendPhoneRescue() : this.openPhone() : this.openPackage();
  }
  openPackage() {
    var e;
    !this.hasPackageOpened && null != (e = this.packageNode) && e.active && (this.hasPackageOpened = !0, this.setNodeActive(this.packageNode, !1), this.setNodeActive(this.packageOpenNode, !0), this.setNodeActive(this.drinkNode, !0), this.setNodeActive(this.shovelNode, !0));
  }
  openPhone() {
    this.completedSteps.has(1) || this.isPhoneOverlayActive || (this.isPhoneOverlayActive = !0, this.bringNodeToFront(this.mobilePhone1Node), this.bringNodeToFront(this.mobilePhone2Node), this.setNodeActive(this.mobilePhone1Node, !0), this.setNodeActive(this.mobilePhone2Node, !0));
  }
  sendPhoneRescue() {
    !this.isPhoneOverlayActive || this.isPhoneSending || this.completedSteps.has(1) || (this.isPhoneSending = !0, this.setNodeActive(this.mobilePhone2Node, !1), this.bringNodeToFront(this.mobilePhone3Node), this.setNodeActive(this.mobilePhone3Node, !0), this.playPlaceSound(), this.scheduleOnceIfValid(() => {
      this.setNodeActive(this.mobilePhone1Node, !1), this.setNodeActive(this.mobilePhone3Node, !1), this.isPhoneOverlayActive = !1, this.isPhoneSending = !1, this.playStepVoice(1), this.completeStep(1);
    }, .5));
  }
  beginDrag(e, t) {
    if ("drink" === e) return void this.beginFollowDrag(this.drinkNode, this.drink1Node, e, t);
    if ("shovel" === e) return void this.beginFollowDrag(this.shovelNode, this.shovel1FollowNode, e, t);
    if ("necklace" === e) return void this.beginFollowDrag(this.girl1NecklaceNode, this.girl1Necklace1Node, e, t);
    const i = this.getDragSource(e);
    i && this.beginNodeDrag(i, i, null, e, t);
  }
  beginFollowDrag(e, t, i, s) {
    if (null == e || !e.isValid || null == t || !t.isValid) return;
    const o = e.worldPosition.clone();
    this.setNodeActive(e, !1), this.setNodeActive(t, !0), this.beginNodeDrag(t, e, t, i, s, o);
  }
  beginNodeDrag(e, t, i, s, o, h = e.worldPosition.clone()) {
    const l = e.parent;
    if (null == l || !l.isValid) return;
    const d = e.position.clone(),
      n = e.getSiblingIndex(),
      a = this.gameNode ?? l;
    e.setParent(a), this.placeNodeAtWorld(e, a, h), e.setSiblingIndex(a.children.length - 1);
    const r = this.calculateTouchOffset(o, e, a);
    this.setDragNodePositionFromTouch(o, e, a, r), this.activeDragState = {
      dragKind: s,
      dragNode: e,
      sourceNode: t,
      followNode: i,
      dragParent: a,
      touchOffset: r,
      originParent: l,
      originPosition: d,
      originWorldPosition: h,
      originSiblingIndex: n
    };
  }
  handleDragDrop(e, t) {
    if (__rea_outer_s.distance(e.dragNode.worldPosition, e.originWorldPosition) < 60) return void this.restoreDrag(e);
    const i = this.getTouchWorldPoint(t);
    "snake" !== e.dragKind ? "drink" !== e.dragKind ? "shovel" !== e.dragKind ? "cloud" !== e.dragKind ? this.handleWristDrop(e, i) : this.handleCloudDrop(e) : this.handleShovelDrop(e, i) : this.handleDrinkDrop(e) : this.handleSnakeDrop(e, i);
  }
  handleSnakeDrop(e, t) {
    const i = this.isDroppedOnZone(e.dragNode, this.handTouchNode, t);
    this.restoreDrag(e), i && this.enterPhase2SnakeFail();
  }
  handleDrinkDrop(e) {
    this.isNodeCenterInside(e.dragNode, this.girl1Node) && !this.completedSteps.has(2) ? (this.consumeDrag(e), this.setNodeActive(this.girl1Node, !1), this.setNodeActive(this.girl1DrinkNode, !0), this.setNodeActive(this.drink2Node, !0), this.playPlaceSound(), __rea_outer_c.playEffect_1("level45_4"), this.playStepVoice(2), this.completeStep(2), this.scheduleOnceIfValid(() => {
      1 === this.phase && (this.setNodeActive(this.girl1DrinkNode, !1), this.setNodeActive(this.drink2Node, !1), this.setNodeActive(this.girl1Node, !0));
    }, 1.5)) : this.restoreDrag(e);
  }
  handleShovelDrop(e, t) {
    this.isDroppedOnZone(e.dragNode, this.treeTouchNode, t) && !this.completedSteps.has(3) ? this.playShovelDigThenVine(e) : this.restoreDrag(e);
  }
  playShovelDigThenVine(e) {
    this.isInteractionLocked = !0, this.setInputBlocked(!0);
    const t = e.dragNode.worldPosition.clone();
    this.setNodeActive(e.dragNode, !1), this.placeShovelDigFrames(t), this.shovelSwapIndex = 0, this.setNodeActive(this.shovel11Node, !0), this.setNodeActive(this.shovel12Node, !1), this.unschedule(this.tickShovelSwap), this.schedule(this.tickShovelSwap, .15), this.scheduleOnceIfValid(() => {
      this.unschedule(this.tickShovelSwap), this.setNodeActive(this.shovel11Node, !1), this.setNodeActive(this.shovel12Node, !1), this.restoreShovelDigFrames(), this.consumeDrag(e), this.setNodeActive(this.vineNode, !0), this.playPlaceSound(), this.playStepVoice(3), this.completeStep(3), this.isInteractionLocked = !1, this.setInputBlocked(!1);
    }, .5);
  }
  placeShovelDigFrames(e) {
    this.placeShovelDigFrame(this.shovel11Node, e), this.placeShovelDigFrame(this.shovel12Node, e);
  }
  placeShovelDigFrame(e, t) {
    var i;
    null != e && e.isValid && null != (i = e.parent) && i.isValid && (this.placeNodeAtWorld(e, e.parent, t), this.bringNodeToFront(e));
  }
  restoreShovelDigFrames() {
    this.restoreFollowOrigin(this.shovel11Node), this.restoreFollowOrigin(this.shovel12Node);
  }
  restoreFollowOrigin(e) {
    if (null == e || !e.isValid) return;
    const t = this.followOrigins.get(e);
    t && e.setPosition(t);
  }
  handleCloudDrop(e) {
    this.isNodeCenterInside(e.dragNode, this.girl2Node) && !this.completedSteps.has(7) ? (this.consumeDrag(e), this.showBindResult(this.girl2CloudNode), this.showRelaxedFaces(!1), this.playPlaceSound(), this.playStepVoice(7), this.completeStep(7)) : this.restoreDrag(e);
  }
  handleWristDrop(e, t) {
    this.isDroppedOnZone(e.dragNode, this.handTouchNode, t) ? "vine" !== e.dragKind ? "shoelace" !== e.dragKind ? "necklace" !== e.dragKind ? "bandage" !== e.dragKind ? this.completeWristStep(10, e, this.canvas1Node) : this.completeWristStep(8, e, this.girl2Bandage1Node) : this.completeWristStep(6, e, this.girl1Necklace2Node) : this.completeWristStep(5, e, this.girl1Shoelace1Node) : this.completeWristStep(4, e, this.vine1BindNode) : this.restoreDrag(e);
  }
  completeWristStep(e, t, i) {
    this.completedSteps.has(e) ? this.restoreDrag(t) : (this.consumeDrag(t), this.showBindResult(i), this.showRelaxedFaces(!1), this.playPlaceSound(), this.playStepVoice(e), this.completeStep(e));
  }
  handleSwipeEnd(e, t) {
    if (this.completedSteps.has(9)) return;
    const i = t.x - e.startLocation.x,
      s = t.y - e.startLocation.y;
    s <= -30 && Math.abs(s) >= 1.2 * Math.abs(i) && this.completeChestStep();
  }
  completeChestStep() {
    var e;
    this.setNodeActive(this.girl2ChestNode, !1);
    const t = (null == (e = this.girl2ChestNode) ? void 0 : e.position.y) ?? 6.5;
    this.launchChestPad(this.girl2BallLeftNode, t), this.launchChestPad(this.girl2BallRightNode, t), this.setNodeActive(this.girl2Ball1LeftNode, !0), this.setNodeActive(this.girl2Ball1RightNode, !0), this.showRelaxedFaces(!0), this.playPlaceSound(), this.playStepVoice(9), this.completeStep(9), this.scheduleOnceIfValid(() => {
      this.setNodeActive(this.girl2BallLeftNode, !1), this.setNodeActive(this.girl2BallRightNode, !1), this.setNodeActive(this.girl2Ball1LeftNode, !1), this.setNodeActive(this.girl2Ball1RightNode, !1);
    }, .5);
  }
  launchChestPad(e, t) {
    null != e && e.isValid && (this.stopTweenIfValid(e), e.setPosition(e.position.x, t, e.position.z), this.setNodeActive(e, !0), __rea_outer_o(e).to(.5, {
      position: new __rea_outer_s(e.position.x, -800, e.position.z)
    }).start());
  }
  showBindResult(e) {
    null != e && e.isValid && (this.stopTweenIfValid(e), this.resetNodeOpacity(e), this.setNodeActive(e, !0), this.scheduleOnceIfValid(() => {
      e.isValid && this.fadeOutNode(e, .5, () => {
        this.setNodeActive(e, !1), this.resetNodeOpacity(e);
      });
    }, 1.5));
  }
  showRelaxedFaces(e) {
    this.relaxToken += 1;
    const t = this.relaxToken;
    if (this.setNodeActive(this.girl1RelaxedNode, !0), this.setNodeActive(this.girl2RelaxedNode, !0), e) {
      this.relax1Token += 1;
      const e = this.relax1Token;
      this.setNodeActive(this.girl1Relaxed1Node, !0), this.scheduleOnceIfValid(() => {
        e === this.relax1Token && this.setNodeActive(this.girl1Relaxed1Node, !1);
      }, 1.5);
    }
    this.scheduleOnceIfValid(() => {
      t === this.relaxToken && (this.setNodeActive(this.girl1RelaxedNode, !1), this.setNodeActive(this.girl2RelaxedNode, !1));
    }, 1.5);
  }
  completeStep(e) {
    this.completedSteps.has(e) || (this.completedSteps.add(e), this.hasInstallNum = this.completedSteps.size, __rea_outer_k.getInstance().refreshGameProgress(), this.completedSteps.size >= P && this.enterPhase2Success());
  }
  playStepVoice(e) {
    const t = T[e - 1];
    t && this.playDialogue(t);
  }
  playPlaceSound() {
    __rea_outer_c.playEffect_1("level45_1");
  }
  playDialogue(e, t) {
    this.voiceToken += 1;
    const i = this.voiceToken;
    if (this.showBubble(e), this.stopCurrentDialogueEffect(), this.currentDialogueKey = e, __rea_outer_c.playVoice(e), !t) return;
    let s = !1;
    const o = () => {
        !s && this.isValid && i === this.voiceToken && (s = !0, this.unschedule(h), t());
      },
      h = () => {
        o();
      },
      l = this.resolveDialogueHoldSeconds(e);
    this.scheduleOnce(o, l), this.scheduleOnce(h, Math.max(8, l + .5));
  }
  resolveDialogueHoldSeconds(e) {
    var t;
    const i = (null == (t = __rea_outer_c.audioMap.get(e)) ? void 0 : t.getDuration()) ?? 0;
    return i > .1 ? i : 2.5;
  }
  stopCurrentDialogueEffect() {
    __rea_outer_c.stopVoice(), this.currentDialogueKey && (__rea_outer_c.stopOneEffect(this.currentDialogueKey), this.currentDialogueKey = "");
  }
  showBubble(e) {
    this.unschedule(this.hideBubble), this.bubbleLabel && (this.bubbleLabel.string = this.resolveI18nText(e), this.setNodeActive(this.bubbleLabel.node, !0)), this.setNodeActive(this.bubbleNode, !0), this.bringNodeToFront(this.bubbleNode), this.scheduleOnce(this.hideBubble, 3);
  }
  resolveI18nText(e) {
    const t = __rea_outer_N.getInstance().getKey(e);
    return t && t !== e ? t : e;
  }
  resolveHintKey() {
    for (let e = 1; e <= P; e += 1) if (!this.completedSteps.has(e)) return C[e - 1];
    return null;
  }
  fadeOutNode(e, t, i) {
    if (!e.isValid) return void i();
    this.stopTweenIfValid(e), __rea_outer_m(e, 255);
    const s = __rea_outer_S(e);
    __rea_outer_o(s).to(t, {
      opacity: 0
    }).call(() => {
      this.isValid && i();
    }).start();
  }
  resetNodeOpacity(e) {
    null != e && e.isValid && (this.stopTweenIfValid(e), __rea_outer_m(e, 255));
  }
  resetActiveDrag() {
    if (!this.activeDragState) return;
    const e = this.activeDragState;
    this.activeDragState = null, this.restoreDrag(e);
  }
  restoreDrag(e) {
    e.followNode ? this.restoreFollowNode(e) : this.restoreDragNode(e);
  }
  restoreFollowNode(e) {
    this.putFollowBack(e), this.completedSteps.has(this.getStepForDragKind(e.dragKind)) || this.setNodeActive(e.sourceNode, !0);
  }
  consumeDrag(e) {
    e.followNode ? this.putFollowBack(e) : this.restoreDragNode(e), this.setNodeActive(e.sourceNode, !1), this.setNodeActive(e.followNode, !1);
  }
  putFollowBack(e) {
    const t = e.followNode;
    if (null == t || !t.isValid) return;
    t.setParent(e.originParent), t.setSiblingIndex(e.originSiblingIndex);
    const i = this.followOrigins.get(t);
    t.setPosition(i ?? e.originPosition), this.setNodeActive(t, !1);
  }
  restoreDragNode(e) {
    const t = e.dragNode;
    t.isValid && (t.setParent(e.originParent), t.setSiblingIndex(e.originSiblingIndex), t.setPosition(e.originPosition));
  }
  getStepForDragKind(e) {
    return {
      drink: 2,
      shovel: 3,
      vine: 4,
      shoelace: 5,
      necklace: 6,
      cloud: 7,
      bandage: 8,
      snake: 0,
      canvas: 10
    }[e];
  }
  getDragSource(e) {
    return {
      drink: this.drinkNode,
      shovel: this.shovelNode,
      necklace: this.girl1NecklaceNode,
      vine: this.vineNode,
      shoelace: this.girl1ShoelaceNode,
      bandage: this.girl2BandageNode,
      canvas: this.canvasNode,
      cloud: this.cloudNode,
      snake: this.snakeNode
    }[e];
  }
  restoreFollowOrigins() {
    this.followOrigins.forEach((e, t) => {
      t.isValid && t.setPosition(e);
    });
  }
  cleanupRuntime(e = !0) {
    this.unscheduleAllCallbacks(), this.unregisterInteractionHandlers(), this.unschedule(this.tickShovelSwap), this.voiceToken += 1, this.relaxToken += 1, this.relax1Token += 1, e ? this.stopCurrentDialogueEffect() : this.currentDialogueKey = "", this.resetActiveDrag(), this.stopTweenIfValid(this.girl2BallLeftNode), this.stopTweenIfValid(this.girl2BallRightNode), this.stopTweenIfValid(this.vine1BindNode), this.stopTweenIfValid(this.girl1Shoelace1Node), this.stopTweenIfValid(this.girl1Necklace2Node), this.stopTweenIfValid(this.girl2Bandage1Node), this.stopTweenIfValid(this.canvas1Node), this.stopTweenIfValid(this.girl2CloudNode);
  }
  stopTweenIfValid(e) {
    null != e && e.isValid && __rea_outer_A(e);
  }
  setInputBlocked(e) {
    this.setNodeActive(this.backBgNode, e);
  }
  scheduleOnceIfValid(e, t) {
    this.scheduleOnce(() => {
      this.isValid && e();
    }, t);
  }
  bringNodeToFront(e) {
    null != e && e.isValid && e.parent && e.setSiblingIndex(e.parent.children.length - 1);
  }
  isPointInsideNode(e, t) {
    if (null == e || !e.isValid || !e.activeInHierarchy) return !1;
    const i = e.getComponent(__rea_outer_h);
    return !!i && i.getBoundingBoxToWorld().contains(t);
  }
  isNodeCenterInside(e, t) {
    return __rea_outer_r.isDragNearTarget(e, t);
  }
  isDroppedOnZone(e, t, i) {
    return __rea_outer_r.isDragNearTarget(e, t);
  }
  getNodeArea(e) {
    if (null == e || !e.isValid) return Number.MAX_SAFE_INTEGER;
    const t = e.getComponent(__rea_outer_h);
    return t ? Math.max(1, t.width * t.height) : Number.MAX_SAFE_INTEGER;
  }
  getTouchWorldPoint(e) {
    const t = e.getUILocation();
    return new __rea_outer_l(t.x, t.y);
  }
  getTouchLocalPosition(e, t) {
    const i = e.getUILocation(),
      o = t.getComponent(__rea_outer_h);
    return o ? o.convertToNodeSpaceAR(new __rea_outer_s(i.x, i.y, 0)) : __rea_outer_s.ZERO.clone();
  }
  calculateTouchOffset(e, t, i) {
    const o = this.getTouchLocalPosition(e, i);
    return new __rea_outer_s(t.position.x - o.x, t.position.y - o.y, 0);
  }
  setDragNodePositionFromTouch(e, t, i, s) {
    const o = this.getTouchLocalPosition(e, i);
    t.setPosition(o.x + s.x, o.y + s.y, t.position.z);
  }
  placeNodeAtWorld(e, t, i) {
    const s = t.getComponent(__rea_outer_h);
    s && e.setPosition(s.convertToNodeSpaceAR(i));
  }
  setNodeActive(e, t) {
    null != e && e.isValid && (e.active = t);
  }
  getGameChild(e) {
    var t;
    return (null == (t = this.gameNode) ? void 0 : t.getChildByName(e)) ?? null;
  }
  getGameChildAt(e, t) {
    var i;
    const s = (null == (i = this.gameNode) ? void 0 : i.children[e]) ?? null;
    return s ? (s.name !== t && console.warn(`[Level_45] sibling ${e} expected ${t}, got ${s.name}`), s) : null;
  }
  cacheFollowOrigin(e) {
    null != e && e.isValid && this.followOrigins.set(e, e.position.clone());
  }
  resolveReferences() {
    var e, t, i, s;
    this.gameNode = this.node.getChildByPath("UIPanel/gameNode"), this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.bubbleNode = this.node.getChildByPath("UIPanel/bubble"), this.demoNode = this.node.getChildByPath("UIPanel/demo"), this.clickRootNode = this.node.getChildByPath("UIPanel/click_root"), this.dialogBox1Node = (null == (e = this.bubbleNode) ? void 0 : e.getChildByName("dialog_box_1")) ?? null, this.bubbleLabel = (null == (t = this.bubbleNode) || null == (t = t.getChildByPath("dialog_box/Label")) ? void 0 : t.getComponent(__rea_outer_d)) ?? null, this.handTouchNode = this.node.getChildByPath("UIPanel/gameNode/clicks/handtouch"), this.chestTouchNode = this.node.getChildByPath("UIPanel/gameNode/clicks/chesttouch"), this.treeTouchNode = this.node.getChildByPath("UIPanel/gameNode/clicks/treetouch"), this.airplaneNode = this.getGameChild("airplane"), this.snakeNode = this.getGameChild("snake"), this.vineNode = this.getGameChild("vine"), this.unusedVine1Node = this.getGameChildAt(I, "vine_1"), this.vine1BindNode = this.getGameChildAt(x, "vine_1"), this.packageNode = this.getGameChild("package"), this.packageOpenNode = this.getGameChild("package_open"), this.drinkNode = this.getGameChild("drink"), this.drink1Node = this.getGameChild("drink_1"), this.drink2Node = this.getGameChild("drink_2"), this.shovelNode = this.getGameChild("shovel"), this.unusedShovel1Node = this.getGameChildAt(D, "shovel_1"), this.shovel1FollowNode = this.getGameChildAt(G, "shovel_1"), this.shovel11Node = this.getGameChild("shovel_1_1"), this.shovel12Node = this.getGameChild("shovel_1_2"), this.mobilePhoneNode = this.getGameChild("mobile_phone"), this.mobilePhone1Node = this.getGameChild("mobile_phone_1"), this.mobilePhone2Node = this.getGameChild("mobile_phone_2"), this.mobilePhone3Node = this.getGameChild("mobile_phone_3"), this.girl1Node = this.getGameChild("girl1"), this.girl1DrinkNode = this.getGameChild("girl_1_drink"), this.girl1ShoelaceNode = this.getGameChild("girl1_shoelace"), this.girl1Shoelace1Node = this.getGameChild("girl1_shoelace_1"), this.girl1NecklaceNode = this.getGameChild("girl1_necklace"), this.girl1Necklace1Node = this.getGameChild("girl1_necklace_1"), this.girl1Necklace2Node = this.getGameChild("girl1_necklace_2"), this.girl1RelaxedNode = this.getGameChild("girl1_relaxed"), this.girl1Relaxed1Node = this.getGameChildAt(B, "girl1_relaxed_1"), this.unusedGirl1Relaxed1Node = this.getGameChildAt(V, "girl1_relaxed_1"), this.girl2Node = this.getGameChild("girl2"), this.girl2RelaxedNode = this.getGameChild("girl2_relaxed"), this.girl2BandageNode = this.getGameChild("girl2_bandage"), this.girl2Bandage1Node = this.getGameChild("girl2_bandage_1"), this.girl2ChestNode = this.getGameChild("girl2_chest"), this.girl2BallRightNode = this.getGameChildAt(w, "girl2_ball"), this.girl2BallLeftNode = this.getGameChildAt(_, "girl2_ball"), this.girl2Ball1LeftNode = this.getGameChildAt(y, "girl2_ball_1"), this.girl2Ball1RightNode = this.getGameChildAt(O, "girl2_ball_1"), this.girl2CloudNode = this.getGameChild("girl2_cloud"), this.cloudNode = this.getGameChild("cloud"), this.canvasNode = this.getGameChild("canvas"), this.canvas1Node = this.getGameChild("canvas_1"), this.maskNode = this.getGameChild("mask"), this.failureNode = (null == (i = this.maskNode) ? void 0 : i.getChildByName("failure")) ?? null, this.snake1Node = (null == (s = this.maskNode) ? void 0 : s.getChildByName("snake_1")) ?? null, this.followOrigins.clear(), this.cacheFollowOrigin(this.drink1Node), this.cacheFollowOrigin(this.shovel1FollowNode), this.cacheFollowOrigin(this.shovel11Node), this.cacheFollowOrigin(this.shovel12Node), this.cacheFollowOrigin(this.girl1Necklace1Node), this.logMissingNodes();
  }
  logMissingNodes() {
    const e = [],
      t = (t, i) => {
        t || e.push(i);
      };
    t(this.gameNode, "UIPanel/gameNode"), t(this.backBgNode, "UIPanel/backBG"), t(this.bubbleNode, "UIPanel/bubble"), t(this.handTouchNode, "clicks/handtouch"), t(this.chestTouchNode, "clicks/chesttouch"), t(this.treeTouchNode, "clicks/treetouch"), t(this.airplaneNode, "airplane"), t(this.snakeNode, "snake"), t(this.vineNode, "vine"), t(this.vine1BindNode, "vine_1(bind)"), t(this.packageNode, "package"), t(this.drinkNode, "drink"), t(this.shovelNode, "shovel"), t(this.shovel1FollowNode, "shovel_1(follow)"), t(this.mobilePhoneNode, "mobile_phone"), t(this.girl1Node, "girl1"), t(this.girl2Node, "girl2"), t(this.girl2ChestNode, "girl2_chest"), t(this.cloudNode, "cloud"), t(this.canvasNode, "canvas"), t(this.maskNode, "mask"), t(this.failureNode, "mask/failure"), t(this.snake1Node, "mask/snake_1"), e.length > 0 && console.warn("[Level_45] prefab 待办清单:", e.join(", "));
  }
}) || b;
__rea_outer_t._RF.pop();
export { __recovered_export_0 as default };
