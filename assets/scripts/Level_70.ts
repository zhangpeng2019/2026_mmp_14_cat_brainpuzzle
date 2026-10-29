// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_70.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { Vec3 as __rea_outer_i } from "cc";
import { Label as __rea_outer_s } from "cc";
import { Button as __rea_outer_o } from "cc";
import { Node as __rea_outer_n } from "cc";
import { UITransform as __rea_outer_h } from "cc";
import { Rect as __rea_outer_a } from "cc";
import { tween as __rea_outer_r } from "cc";
import { _decorator as __rea_outer_l } from "cc";
import { default as __rea_outer_d } from "./LevelBase";
import { default as __rea_outer_c } from "./AudioManager";
import { I18nController as __rea_outer_p } from "./i18n-controller";
import { UIManager as __rea_outer_u } from "./ui-manager";
import { UILayer as __rea_outer_g } from "./ui-layer";
import { UIHint as __rea_outer_m } from "./uihint";
import { UIFail as __rea_outer_N } from "./uifail";
import { GameController as __rea_outer_v } from "./GameController";
import { setNodeOpacity as __rea_outer_y } from "./CocosCompat";
import { stopAllTweens as __rea_outer_f } from "./CocosCompat";
import { default as __rea_outer_b } from "./clue-hit-tester";
let __recovered_export_0;
var C;
__rea_outer_t._RF.push({}, "c13313R09JBkKuwf9NV78Z/", "Level_70", void 0);
const {
    ccclass: T
  } = __rea_outer_l,
  S = 10,
  w = new __rea_outer_i(-391.5, -83, 0),
  A = new __rea_outer_i(-71, -37.5, 0),
  O = new __rea_outer_i(-315, 261, 0),
  P = new __rea_outer_i(5.5, 306.5, 0),
  I = new __rea_outer_i(-71.5, -40, 0),
  k = new __rea_outer_i(-320, 274, 0),
  G = new __rea_outer_i(0, 317, 0),
  D = new __rea_outer_i(226, 421, 0),
  B = ["bg", "bg_1", "door_toilet", "girl", "girl_head_1", "photo", "door1", "vacuum_cleaner", "sofa", "blanket", "table", "cat", "watermelon", "book", "rabbit", "boy", "air", "knife", "flowerpot", "钱堆", "prompt_box"],
  V = ["bg_bathroom", "toilet", "toilet1_1", "toilet1", "girl_head", "hole", "door2", "girl1", "girl2", "angry", "girl1_1", "vacuum_cleaner_1", "cat1", "watermelon1", "watermelon2", "book1", "rabbit1", "rabbit2", "rabbit3", "boy1", "boy2", "air1", "flowerpot1", "clicks", "drags", "swips"];
__recovered_export_0 = T("Level_70")(C = class extends __rea_outer_d {
  constructor(...e) {
    super(...e), this.phase = 0, this.winstate = !1, this.gameNode = null, this.backBgNode = null, this.clickRootNode = null, this.buttonOpenNode = null, this.promptBoxNode = null, this.promptLabel = null, this.moneyPileNode = null, this.vacuumTouchNode = null, this.moneyNodes = [], this.nodeByName = new Map(), this.nodeOrigins = new Map(), this.siblingOrigins = new Map(), this.homeParents = new Map(), this.completedSteps = new Set(), this.isPhotoOpened = !1, this.isWatermelonCut = !1, this.isToiletOpened = !1, this.isToiletHasMoney = !1, this.isRabbitCut = !1, this.isBoyHasMoney = !1, this.activeDrag = null, this.pointerSession = null, this.voiceToken = 0, this.performanceToken = 0, this.onButtonOpenClick = () => {
      !this.isValid || this.phase >= 2 || this.winstate || this.beginDoorFail();
    }, this.onTouchStart = e => {
      if (!this.canAcceptGameplayTouch()) return;
      const t = __rea_outer_b.getTouchPoint(e);
      if (this.isPointOnOpenButton(t)) return;
      const i = this.resolveDragKind(t);
      if (i) return this.beginDrag(i, e), void (e.propagationStopped = !0);
      const s = this.resolvePointerKind(t);
      s && (this.pointerSession = {
        kind: s,
        startPoint: t.clone()
      }, e.propagationStopped = !0);
    }, this.onTouchMove = e => {
      this.activeDrag && this.canAcceptGameplayTouch() && (this.setDragNodePositionFromTouch(e, this.activeDrag.dragNode, this.activeDrag.touchOffset), e.propagationStopped = !0);
    }, this.onTouchEnd = e => {
      if (1 !== this.phase || this.winstate) return this.cancelDrag(), void (this.pointerSession = null);
      if (this.activeDrag) return this.handleDrop(this.activeDrag), this.activeDrag = null, void (e.propagationStopped = !0);
      const t = this.pointerSession;
      this.pointerSession = null, t && this.canAcceptGameplayTouch() && (this.handleSwipe(t.kind, t.startPoint, __rea_outer_b.getTouchPoint(e)), e.propagationStopped = !0);
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.allItemNum = S, this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.enterPhase0();
  }
  onDestroy() {
    this.cleanupRuntime(!this.shouldSkipStopLevelAudio()), super.onDestroy();
  }
  handleTimeExpired() {
    return this.phase >= 2;
  }
  showHint() {
    if (1 !== this.phase) return;
    const e = this.getLowestUnfinishedStep();
    if (null === e) return;
    const t = __rea_outer_p.getInstance().getKey(`level70_hint${e}`);
    __rea_outer_u.getInstance().showView(__rea_outer_m, void 0, {
      body: t
    });
  }
  getGameProgressSnapshot() {
    const e = Math.min(this.hasInstallNum, S);
    return {
      progress: e / S,
      label: `${e}/10`
    };
  }
  markAllTasksCompleted() {
    this.hasInstallNum = S;
    for (let e = 1; e <= S; e += 1) this.completedSteps.add(e);
    this.isPhotoOpened = !0, this.isWatermelonCut = !0, this.isToiletOpened = !0, this.isToiletHasMoney = !0, this.isRabbitCut = !0, this.isBoyHasMoney = !0;
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.completedSteps.clear(), this.isPhotoOpened = !1, this.isWatermelonCut = !1, this.isToiletOpened = !1, this.isToiletHasMoney = !1, this.isRabbitCut = !1, this.isBoyHasMoney = !1, this.activeDrag = null, this.pointerSession = null, this.voiceToken = 0, this.performanceToken = 0, this.hasInstallNum = 0, this.allItemNum = S, __rea_outer_c.stopVoice();
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_c.playMusic("bgm4", !0, .5), this.applyInitialVisibility(), this.applyOpenButtonLabel(), this.raiseClickRoot(), this.registerButtonOpen(), this.setInputBlocked(!0), __rea_outer_v.getInstance().refreshGameProgress(), this.playDialogue("70_1", !1, () => {
      this.isValid && 0 === this.phase && this.beginBoyIntro();
    });
  }
  beginBoyIntro() {
    this.setNodeActive(this.getGameChild("girl_head_1"), !1), this.restoreOrigin(this.getGameChild("girl_head")), this.setNodeActive(this.getGameChild("girl_head"), !0), this.startHeadShake(), this.playDialogue("70_2", !0, () => {
      this.isValid && 0 === this.phase && (this.stopHeadShake(), this.enterPhase1());
    });
  }
  enterPhase1() {
    this.phase = 1, this.hidePrompt(), this.setInputBlocked(!1), this.registerInteractionHandlers(), __rea_outer_v.getInstance().refreshGameProgress();
  }
  enterPhase2Success() {
    this.phase >= 2 || this.winstate || (this.phase = 2, this.winstate = !0, this.interruptGameplay(), this.setInputBlocked(!0), __rea_outer_v.getInstance().pauseTimer(), this.openRoomDoor(), this.hideDoorwayGirl(), this.playEnterPerformance(this.getGameChild("girl1"), this.getGameChild("girl1_1"), w, O, A, P, "70_4", !0));
  }
  beginDoorFail() {
    this.phase >= 2 || this.winstate || this.hasInstallNum >= S || (this.phase = 2, this.winstate = !1, this.playActionSound(), this.interruptGameplay(), this.setInputBlocked(!0), __rea_outer_v.getInstance().pauseTimer(), this.openRoomDoor(), this.hideDoorwayGirl(), this.playEnterPerformance(this.getGameChild("girl2"), this.getGameChild("angry"), w, k, I, G, "70_3", !1));
  }
  beginTimeoutFail() {
    this.phase = 2, this.winstate = !1, this.cleanupRuntime(!0), __rea_outer_v.getInstance().pauseTimer(), __rea_outer_u.getInstance().showView(__rea_outer_N, __rea_outer_g.WIN_ANIMATION);
  }
  playEnterPerformance(e, t, i, s, o, n, h, a) {
    this.placeAndShow(e, i), this.placeAndShow(t, s), this.moveNodeTo(e, o, 1), this.moveNodeTo(t, n, 1, () => {
      this.isValid && 2 === this.phase && this.playDialogue(h, !0, () => {
        this.isValid && 2 === this.phase && this.scheduleOnceIfValid(() => {
          this.isValid && 2 === this.phase && (a ? this.showLevelSuccess(0) : __rea_outer_u.getInstance().showView(__rea_outer_N, __rea_outer_g.WIN_ANIMATION));
        }, 1);
      });
    });
  }
  applyInitialVisibility() {
    this.restoreCachedNodes(), this.setNodeActive(this.gameNode, !0), B.forEach(e => {
      this.setNodeActive(this.getGameChild(e), !0);
    }), V.forEach(e => {
      this.setNodeActive(this.getGameChild(e), !1);
    }), this.moneyNodes.forEach(e => {
      this.restoreHome(e), this.setNodeActive(e, !0);
    }), this.setNodeActive(this.clickRootNode, !0), this.setNodeActive(this.buttonOpenNode, !0), this.setNodeActive(this.node.getChildByPath("UIPanel/bubble"), !1), this.setNodeActive(this.node.getChildByPath("UIPanel/demo"), !1), this.resetBackBgOpacity();
  }
  applyOpenButtonLabel() {
    var e;
    const t = null == (e = this.buttonOpenNode) || null == (e = e.getChildByName("Label")) ? void 0 : e.getComponent(__rea_outer_s);
    t && (t.string = this.resolveI18nText("game46"));
  }
  raiseClickRoot() {
    var e, t;
    const i = null == (e = this.clickRootNode) ? void 0 : e.parent;
    null != (t = this.clickRootNode) && t.isValid && null != i && i.isValid && this.clickRootNode.setSiblingIndex(i.children.length - 1);
  }
  registerButtonOpen() {
    var e;
    null != (e = this.buttonOpenNode) && e.isValid && (this.buttonOpenNode.off(__rea_outer_o.EventType.CLICK, this.onButtonOpenClick, this), this.buttonOpenNode.on(__rea_outer_o.EventType.CLICK, this.onButtonOpenClick, this));
  }
  unregisterButtonOpen() {
    var e;
    null != (e = this.buttonOpenNode) && e.isValid && this.buttonOpenNode.off(__rea_outer_o.EventType.CLICK, this.onButtonOpenClick, this);
  }
  registerInteractionHandlers() {
    this.node.on(__rea_outer_n.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(__rea_outer_n.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(__rea_outer_n.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(__rea_outer_n.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
  }
  unregisterInteractionHandlers() {
    var e;
    null != (e = this.node) && e.isValid && (this.node.off(__rea_outer_n.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(__rea_outer_n.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(__rea_outer_n.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(__rea_outer_n.EventType.TOUCH_CANCEL, this.onTouchEnd, this));
  }
  canAcceptGameplayTouch() {
    var e;
    return 1 === this.phase && !this.winstate && !0 !== (null == (e = this.backBgNode) ? void 0 : e.active);
  }
  resolveDragKind(e) {
    const t = [],
      i = this.getTopMoney();
    return this.pushHit(t, "money", i, !!i), this.pushHit(t, "vacuum", this.getGameChild("vacuum_cleaner"), this.canDragVacuum()), this.pushHit(t, "knife", this.getGameChild("knife"), this.canDragKnife()), this.pushHit(t, "blanket", this.getGameChild("blanket"), this.canDragBlanket()), __rea_outer_b.pickTopmost(t, e);
  }
  resolvePointerKind(e) {
    const t = [];
    return this.pushHit(t, "photo", this.getGameChild("photo"), this.canStartPhotoSwipe()), this.pushHit(t, "doorToilet", this.getGameChild("door_toilet"), this.canStartDoorSwipe()), this.pushHit(t, "toilet", this.getGameChild("toilet"), this.canStartToiletSwipe()), __rea_outer_b.pickTopmost(t, e);
  }
  pushHit(e, t, i, s) {
    s && null != i && i.isValid && i.activeInHierarchy && e.push({
      value: t,
      node: i
    });
  }
  canDragVacuum() {
    return !this.completedSteps.has(5) && !!this.getTopMoney();
  }
  canDragKnife() {
    var e;
    return !(!0 !== (null == (e = this.getGameChild("knife")) ? void 0 : e.active) || this.isWatermelonCut && this.isRabbitCut);
  }
  canDragBlanket() {
    var e;
    return !this.completedSteps.has(10) && !0 === (null == (e = this.getGameChild("blanket")) ? void 0 : e.active);
  }
  canStartPhotoSwipe() {
    var e;
    return !0 === (null == (e = this.getGameChild("photo")) ? void 0 : e.active);
  }
  canStartDoorSwipe() {
    var e;
    return !this.isToiletOpened && !0 === (null == (e = this.getGameChild("door_toilet")) ? void 0 : e.active);
  }
  canStartToiletSwipe() {
    return this.isToiletOpened && !this.completedSteps.has(8);
  }
  beginDrag(e, t) {
    const i = "money" === e ? this.getTopMoney() : this.getDragSourceNode(e);
    if (null == i || !i.isValid) return;
    this.bringNodeToFront(i);
    const s = this.calculateTouchOffset(t, i);
    this.activeDrag = {
      kind: e,
      dragNode: i,
      sourceNode: i,
      touchOffset: s
    }, this.setDragNodePositionFromTouch(t, i, s);
  }
  getDragSourceNode(e) {
    switch (e) {
      case "vacuum":
        return this.getGameChild("vacuum_cleaner");
      case "knife":
        return this.getGameChild("knife");
      case "blanket":
        return this.getGameChild("blanket");
      default:
        return this.getTopMoney();
    }
  }
  handleDrop(e) {
    this.canAcceptGameplayTouch() ? "money" !== e.kind ? "vacuum" !== e.kind ? "knife" !== e.kind ? this.handleBlanketDrop(e) : this.handleKnifeDrop(e) : this.handleVacuumDrop(e) : this.handleMoneyDrop(e) : this.restoreDrag(e);
  }
  handleMoneyDrop(e) {
    this.tryHideAt("air", 1, e, () => {
      this.swapPair("air", "air1");
    }) || this.tryHideAt("cat", 2, e, () => {
      this.swapPair("cat", "cat1");
    }) || this.tryHideAt("book", 3, e, () => {
      this.swapPair("book", "book1");
    }) || this.tryHideAt("flowerpot", 4, e, () => {
      this.swapPair("flowerpot", "flowerpot1");
    }) || this.tryPutMoneyInHole(e) || this.tryPutMoneyInWatermelon(e) || this.tryPutMoneyInToilet(e) || this.tryPutMoneyInRabbit(e) || this.tryPutMoneyOnBoy(e) || this.restoreDrag(e);
  }
  tryHideAt(e, t, i, s) {
    return !(this.completedSteps.has(t) || !this.isDroppedOn(i.dragNode, this.getGameChild(e))) && (this.playActionSound(), this.setNodeActive(i.sourceNode, !1), this.restoreHome(i.sourceNode), s(), this.completeStep(t), !0);
  }
  tryPutMoneyInHole(e) {
    if (this.completedSteps.has(6) || !this.isPhotoOpened) return !1;
    if (!this.isDroppedOnHole(e.dragNode)) return !1;
    if (this.playActionSound(), this.setNodeActive(e.sourceNode, !1), this.restoreHome(e.sourceNode), this.setNodeActive(this.getGameChild("hole"), !0), this.completeStep(6), this.phase >= 2) return !0;
    const t = this.beginPerformance();
    return this.wait(t, 1, () => {
      const e = this.getGameChild("photo");
      this.restoreOrigin(e), null != e && e.isValid && e.setPosition(D), this.setNodeActive(e, !0), this.endPerformance(t);
    }), !0;
  }
  tryPutMoneyInWatermelon(e) {
    return !(this.completedSteps.has(7) || !this.isWatermelonCut) && !!this.isDroppedOn(e.dragNode, this.getGameChild("watermelon1")) && (this.playActionSound(), this.setNodeActive(e.sourceNode, !1), this.restoreHome(e.sourceNode), this.setNodeActive(this.getGameChild("watermelon1"), !1), this.setNodeActive(this.getGameChild("watermelon2"), !0), this.completeStep(7), !0);
  }
  tryPutMoneyInToilet(e) {
    return !(this.completedSteps.has(8) || !this.isToiletOpened || this.isToiletHasMoney) && !!this.isDroppedOn(e.dragNode, this.getGameChild("toilet")) && (this.playActionSound(), this.setNodeActive(e.sourceNode, !1), this.restoreHome(e.sourceNode), this.setNodeActive(this.getGameChild("toilet1_1"), !0), this.isToiletHasMoney = !0, !0);
  }
  tryPutMoneyInRabbit(e) {
    if (this.completedSteps.has(9) || !this.isRabbitCut) return !1;
    if (!this.isDroppedOn(e.dragNode, this.getGameChild("rabbit"))) return !1;
    this.playActionSound(), this.setNodeActive(e.sourceNode, !1), this.restoreHome(e.sourceNode), this.setNodeActive(this.getGameChild("rabbit1"), !1), this.setNodeActive(this.getGameChild("rabbit2"), !0);
    const t = this.beginPerformance();
    return this.wait(t, 1, () => {
      this.setNodeActive(this.getGameChild("rabbit2"), !1), this.setNodeActive(this.getGameChild("rabbit"), !1), this.setNodeActive(this.getGameChild("rabbit3"), !0), this.completeStep(9), this.endPerformance(t);
    }), !0;
  }
  tryPutMoneyOnBoy(e) {
    return !this.completedSteps.has(10) && !this.isBoyHasMoney && !!this.isDroppedOn(e.dragNode, this.getGameChild("boy")) && (this.playActionSound(), this.setNodeActive(e.sourceNode, !1), this.restoreHome(e.sourceNode), this.setNodeActive(this.getGameChild("boy"), !1), this.setNodeActive(this.getGameChild("boy1"), !0), this.isBoyHasMoney = !0, !0);
  }
  handleVacuumDrop(e) {
    const t = this.getTopMoney();
    this.canDragVacuum() && this.isDroppedOn(e.dragNode, this.vacuumTouchNode, !0) && t ? (this.playActionSound(), this.setNodeActive(t, !1), this.restoreHome(t), this.setNodeActive(e.sourceNode, !1), this.restoreHome(e.sourceNode), this.setNodeActive(this.getGameChild("vacuum_cleaner_1"), !0), this.completeStep(5)) : this.restoreDrag(e);
  }
  handleKnifeDrop(e) {
    return !this.isWatermelonCut && this.isDroppedOn(e.dragNode, this.getGameChild("watermelon")) ? (this.playActionSound(), this.restoreDrag(e), this.setNodeActive(this.getGameChild("watermelon"), !1), this.setNodeActive(this.getGameChild("watermelon1"), !0), void (this.isWatermelonCut = !0)) : !this.isRabbitCut && this.isDroppedOn(e.dragNode, this.getGameChild("rabbit")) ? (this.playActionSound(), this.restoreDrag(e), this.setNodeActive(this.getGameChild("rabbit1"), !0), void (this.isRabbitCut = !0)) : void this.restoreDrag(e);
  }
  handleBlanketDrop(e) {
    this.isBoyHasMoney && !this.completedSteps.has(10) && this.isDroppedOn(e.dragNode, this.getGameChild("boy1")) ? (this.playActionSound(), this.setNodeActive(e.sourceNode, !1), this.restoreHome(e.sourceNode), this.setNodeActive(this.getGameChild("boy1"), !1), this.setNodeActive(this.getGameChild("boy2"), !0), this.completeStep(10)) : this.restoreDrag(e);
  }
  handleSwipe(e, t, i) {
    this.playActionSound(), "photo" !== e ? "doorToilet" !== e ? this.handleToiletLidSwipe(t, i) : this.handleDoorToiletSwipe(t, i) : this.handlePhotoSwipe(t, i);
  }
  handlePhotoSwipe(e, t) {
    if (this.completedSteps.has(6) || this.isPhotoOpened || !this.isSwipe(e, t, "up")) return;
    const s = this.getGameChild("photo");
    if (null == s || !s.isValid) return;
    const o = this.beginPerformance(),
      n = new __rea_outer_i(s.position.x, s.position.y + 180, s.position.z);
    this.moveNodeTo(s, n, .3, () => {
      this.isPerformanceCurrent(o) && (this.setNodeActive(s, !1), this.restoreOrigin(s), this.isPhotoOpened = !0, this.endPerformance(o));
    });
  }
  handleDoorToiletSwipe(e, t) {
    if (this.isToiletOpened || !this.isSwipe(e, t, "left")) return;
    const s = this.getGameChild("door_toilet");
    if (null == s || !s.isValid) return;
    const o = this.beginPerformance(),
      n = new __rea_outer_i(s.position.x + -189, s.position.y, s.position.z);
    this.moveNodeTo(s, n, .3, () => {
      this.isPerformanceCurrent(o) && (this.setNodeActive(s, !1), this.setNodeActive(this.getGameChild("bg_bathroom"), !0), this.setNodeActive(this.getGameChild("toilet"), !0), this.isToiletOpened = !0, this.endPerformance(o));
    });
  }
  handleToiletLidSwipe(e, t) {
    var i;
    this.isToiletHasMoney && !this.completedSteps.has(8) && this.isSwipe(e, t, "down") && null != (i = this.getGameChild("toilet")) && i.isValid && (this.setNodeActive(this.getGameChild("toilet"), !1), this.setNodeActive(this.getGameChild("toilet1_1"), !1), this.setNodeActive(this.getGameChild("toilet1"), !0), this.completeStep(8));
  }
  isSwipe(e, t, i) {
    const s = t.x - e.x,
      o = t.y - e.y;
    return "up" === i ? o >= 30 && Math.abs(o) >= 1.2 * Math.abs(s) : "down" === i ? -o >= 30 && Math.abs(o) >= 1.2 * Math.abs(s) : -s >= 30 && Math.abs(s) >= 1.2 * Math.abs(o);
  }
  getTopMoney() {
    let e = null;
    return this.moneyNodes.forEach(t => {
      t.isValid && t.active && (e ? (t.position.y > e.position.y + .001 || Math.abs(t.position.y - e.position.y) <= .001 && t.getSiblingIndex() > e.getSiblingIndex()) && (e = t) : e = t);
    }), e;
  }
  isDroppedOn(e, t, i = !1) {
    return !!(e.isValid && null != t && t.isValid && e.getComponent(__rea_outer_h) && t.getComponent(__rea_outer_h)) && !(!i && !t.activeInHierarchy) && __rea_outer_b.isRectWithinDragDistance(this.getNodeWorldBox(e), this.getNodeWorldBox(t));
  }
  isDroppedOnHole(e) {
    const t = this.getGameChild("hole");
    return this.isDroppedOn(e, t, !0);
  }
  getNodeWorldBox(e) {
    const t = e.getComponent(__rea_outer_h);
    if (!t) return new __rea_outer_a();
    const i = this.findActiveSpaceNode(e),
      s = null == i ? void 0 : i.getComponent(__rea_outer_h);
    if (!s || !i) return t.getBoundingBoxToWorld();
    const o = this.getLocalPositionIn(e, i),
      n = s.convertToWorldSpaceAR(o),
      r = t.contentSize.width,
      l = t.contentSize.height;
    return new __rea_outer_a(n.x - r * t.anchorPoint.x, n.y - l * t.anchorPoint.y, r, l);
  }
  findActiveSpaceNode(e) {
    let t = e.parent;
    for (; t;) {
      if (t.activeInHierarchy) return t;
      t = t.parent;
    }
    return null;
  }
  getLocalPositionIn(e, t) {
    const i = e.position.clone();
    let s = e.parent;
    for (; s && s !== t;) i.x += s.position.x, i.y += s.position.y, s = s.parent;
    return i;
  }
  isPointOnOpenButton(e) {
    return __rea_outer_b.isPointInside(this.buttonOpenNode, e);
  }
  completeStep(e) {
    this.completedSteps.has(e) || (this.completedSteps.add(e), this.hasInstallNum = this.completedSteps.size, __rea_outer_v.getInstance().refreshGameProgress(), this.hasInstallNum >= S && this.enterPhase2Success());
  }
  getLowestUnfinishedStep() {
    for (let e = 1; e <= S; e += 1) if (!this.completedSteps.has(e)) return e;
    return null;
  }
  swapPair(e, t) {
    this.setNodeActive(this.getGameChild(e), !1), this.setNodeActive(this.getGameChild(t), !0);
  }
  openRoomDoor() {
    this.setNodeActive(this.getGameChild("door1"), !1), this.setNodeActive(this.getGameChild("door2"), !0), this.setNodeActive(this.buttonOpenNode, !1);
  }
  hideDoorwayGirl() {
    this.stopHeadShake(), this.setNodeActive(this.getGameChild("girl"), !1), this.setNodeActive(this.getGameChild("girl_head"), !1), this.setNodeActive(this.getGameChild("girl_head_1"), !1);
  }
  startHeadShake() {
    const e = this.getGameChild("girl_head");
    null != e && e.isValid && (this.stopTweenIfValid(e), this.restoreOrigin(e), e.setScale(1, 1, 1), __rea_outer_r(e).to(.35, {
      scale: new __rea_outer_i(.8, 1, 1)
    }, {
      easing: "sineInOut"
    }).to(.35, {
      scale: new __rea_outer_i(1, 1, 1)
    }, {
      easing: "sineInOut"
    }).union().repeatForever().start());
  }
  stopHeadShake() {
    const e = this.getGameChild("girl_head");
    this.stopTweenIfValid(e), null != e && e.isValid && (this.restoreOrigin(e), e.setScale(1, 1, 1));
  }
  beginPerformance() {
    return this.performanceToken += 1, this.setInputBlocked(!0), this.performanceToken;
  }
  isPerformanceCurrent(e) {
    return this.isValid && 1 === this.phase && e === this.performanceToken && !this.winstate;
  }
  endPerformance(e) {
    e === this.performanceToken && this.isValid && 1 === this.phase && !this.winstate && this.setInputBlocked(!1);
  }
  wait(e, t, i) {
    this.scheduleOnceIfValid(() => {
      this.isPerformanceCurrent(e) && i();
    }, t);
  }
  interruptGameplay() {
    this.performanceToken += 1, this.voiceToken += 1, this.cancelDrag(), this.pointerSession = null, this.unregisterInteractionHandlers(), this.stopHeadShake(), this.stopAllGameplayTweens(), __rea_outer_c.stopVoice();
  }
  playActionSound() {
    __rea_outer_c.playEffect_1("level70_1");
  }
  playDialogue(e, t, i) {
    this.voiceToken += 1;
    const s = this.voiceToken;
    this.showPrompt(e), __rea_outer_c.stopVoice(), __rea_outer_c.playVoice(e);
    let o = !1;
    const n = () => {
        !o && this.isValid && s === this.voiceToken && (o = !0, this.unschedule(h), t && this.hidePrompt(), null == i || i());
      },
      h = () => {
        n();
      },
      a = this.resolveDialogueHoldSeconds(e);
    this.scheduleOnce(n, a), this.scheduleOnce(h, Math.max(8, a + .5));
  }
  resolveDialogueHoldSeconds(e) {
    var t;
    const i = (null == (t = __rea_outer_c.audioMap.get(e)) ? void 0 : t.getDuration()) ?? 0;
    return i > .1 ? i : 2.5;
  }
  showPrompt(e) {
    this.promptLabel && (this.promptLabel.string = this.resolveI18nText(e)), this.setNodeActive(this.promptBoxNode, !0), this.bringNodeToFront(this.promptBoxNode);
  }
  hidePrompt() {
    this.setNodeActive(this.promptBoxNode, !1);
  }
  resolveI18nText(e) {
    const t = __rea_outer_p.getInstance().getKey(e);
    return t && t !== e ? t : e;
  }
  restoreDrag(e) {
    this.restoreHome(e.sourceNode), this.setNodeActive(e.sourceNode, !0);
  }
  cancelDrag() {
    this.activeDrag && (this.restoreDrag(this.activeDrag), this.activeDrag = null);
  }
  placeAndShow(e, t) {
    null != e && e.isValid && (this.stopTweenIfValid(e), e.setPosition(t.clone()), this.setNodeActive(e, !0));
  }
  moveNodeTo(e, t, i, s) {
    null != e && e.isValid ? (this.stopTweenIfValid(e), __rea_outer_r(e).to(i, {
      position: t.clone()
    }).call(() => null == s ? void 0 : s()).start()) : null == s || s();
  }
  calculateTouchOffset(e, t) {
    const s = t.parent;
    if (null == s || !s.isValid) return __rea_outer_i.ZERO.clone();
    const o = this.getTouchLocalPosition(e, s);
    return new __rea_outer_i(t.position.x - o.x, t.position.y - o.y, 0);
  }
  setDragNodePositionFromTouch(e, t, i) {
    const s = t.parent;
    if (null == s || !s.isValid) return;
    const o = this.getTouchLocalPosition(e, s);
    t.setPosition(o.x + i.x, o.y + i.y, t.position.z);
  }
  getTouchLocalPosition(e, t) {
    const s = e.getUILocation(),
      o = t.getComponent(__rea_outer_h);
    return o ? o.convertToNodeSpaceAR(new __rea_outer_i(s.x, s.y, 0)) : __rea_outer_i.ZERO.clone();
  }
  restoreCachedNodes() {
    this.homeParents.forEach((e, t) => {
      t.isValid && e.isValid && t.parent !== e && t.setParent(e);
    }), this.nodeOrigins.forEach((e, t) => {
      t.isValid && (this.stopTweenIfValid(t), t.setPosition(e));
    }), this.siblingOrigins.forEach((e, t) => {
      t.isValid && t.parent && t.setSiblingIndex(e);
    });
  }
  restoreOrigin(e) {
    if (null == e || !e.isValid) return;
    const t = this.nodeOrigins.get(e);
    t && (this.stopTweenIfValid(e), e.setPosition(t));
  }
  restoreHome(e) {
    if (null == e || !e.isValid) return;
    this.stopTweenIfValid(e);
    const t = this.homeParents.get(e);
    null != t && t.isValid && e.parent !== t && e.setParent(t), this.restoreOrigin(e), this.restoreSibling(e);
  }
  restoreSibling(e) {
    if (null == e || !e.isValid || !e.parent) return;
    const t = this.siblingOrigins.get(e);
    void 0 !== t && e.setSiblingIndex(t);
  }
  bringNodeToFront(e) {
    null != e && e.isValid && e.parent && e.setSiblingIndex(e.parent.children.length - 1);
  }
  setInputBlocked(e) {
    this.setNodeActive(this.backBgNode, e), e && this.resetBackBgOpacity(), this.raiseClickRoot();
  }
  resetBackBgOpacity() {
    var e;
    null != (e = this.backBgNode) && e.isValid && __rea_outer_y(this.backBgNode, 0);
  }
  scheduleOnceIfValid(e, t) {
    this.scheduleOnce(() => {
      this.isValid && e();
    }, t);
  }
  cleanupRuntime(e) {
    this.unscheduleAllCallbacks(), this.unregisterInteractionHandlers(), this.unregisterButtonOpen(), this.voiceToken += 1, this.performanceToken += 1, this.pointerSession = null, this.cancelDrag(), this.stopHeadShake(), e && __rea_outer_c.stopVoice(), this.stopAllGameplayTweens();
  }
  stopAllGameplayTweens() {
    this.nodeByName.forEach(e => {
      this.stopTweenIfValid(e);
    }), this.moneyNodes.forEach(e => {
      this.stopTweenIfValid(e);
    }), this.stopTweenIfValid(this.backBgNode);
  }
  stopTweenIfValid(e) {
    null != e && e.isValid && __rea_outer_f(e);
  }
  setNodeActive(e, t) {
    null != e && e.isValid && (e.active = t);
  }
  getGameChild(e) {
    var t;
    return this.nodeByName.get(e) ?? (null == (t = this.gameNode) ? void 0 : t.getChildByName(e)) ?? null;
  }
  cacheNode(e) {
    null != e && e.isValid && ("money" === e.name || this.nodeByName.has(e.name) || this.nodeByName.set(e.name, e), this.nodeOrigins.set(e, e.position.clone()), this.siblingOrigins.set(e, e.getSiblingIndex()), e.parent && this.homeParents.set(e, e.parent));
  }
  resolveMoneyNodes() {
    var e;
    this.moneyNodes.length = 0;
    const t = (null == (e = this.moneyPileNode) ? void 0 : e.children) ?? [];
    for (let e = 0; e < t.length && this.moneyNodes.length < 10; e += 1) {
      const i = t[e];
      "money" === i.name && (this.moneyNodes.push(i), this.cacheNode(i));
    }
  }
  resolveReferences() {
    var e, t, i;
    this.gameNode = this.node.getChildByPath("UIPanel/gameNode"), this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.clickRootNode = this.node.getChildByPath("UIPanel/click_root"), this.buttonOpenNode = this.node.getChildByPath("UIPanel/click_root/ButtonOpen"), this.nodeByName.clear(), this.nodeOrigins.clear(), this.siblingOrigins.clear(), this.homeParents.clear(), null == (e = this.gameNode) || e.children.forEach(e => {
      this.cacheNode(e);
    }), this.moneyPileNode = this.getGameChild("钱堆"), this.vacuumTouchNode = (null == (t = this.gameNode) ? void 0 : t.getChildByPath("clicks/touch-vacuum_cleaner")) ?? null, this.resolveMoneyNodes(), this.promptBoxNode = this.getGameChild("prompt_box"), this.promptLabel = (null == (i = this.promptBoxNode) || null == (i = i.getChildByName("Label")) ? void 0 : i.getComponent(__rea_outer_s)) ?? null, this.warnIfMissing();
  }
  warnIfMissing() {
    this.gameNode || console.warn("[Level_70] missing gameNode");
    [...B, ...V].forEach(e => {
      this.getGameChild(e) || console.warn(`[Level_70] missing ${e}`);
    }), 10 !== this.moneyNodes.length && console.warn(`[Level_70] money count ${this.moneyNodes.length}, expected 10`), this.promptLabel || console.warn("[Level_70] missing prompt_box/Label"), this.backBgNode || console.warn("[Level_70] missing backBG"), this.buttonOpenNode || console.warn("[Level_70] missing click_root/ButtonOpen"), this.vacuumTouchNode || console.warn("[Level_70] missing clicks/touch-vacuum_cleaner");
  }
}) || C;
__rea_outer_t._RF.pop();
export { __recovered_export_0 as default };
