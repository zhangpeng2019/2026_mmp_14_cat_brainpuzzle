// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_58.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { Vec3 as __rea_outer_i } from "cc";
import { Vec2 as __rea_outer_s } from "cc";
import { instantiate as __rea_outer_o } from "cc";
import { Node as __rea_outer_h } from "cc";
import { UITransform as __rea_outer_n } from "cc";
import { tween as __rea_outer_d } from "cc";
import { Label as __rea_outer_l } from "cc";
import { _decorator as __rea_outer_r } from "cc";
import { default as __rea_outer_a } from "./LevelBase";
import { default as __rea_outer_c } from "./AudioManager";
import { I18nController as __rea_outer_N } from "./i18n-controller";
import { UIManager as __rea_outer_u } from "./ui-manager";
import { UILayer as __rea_outer_g } from "./ui-layer";
import { UIHint as __rea_outer_p } from "./uihint";
import { UIFail as __rea_outer_m } from "./uifail";
import { GameController as __rea_outer_v } from "./GameController";
import { stopAllTweens as __rea_outer_y } from "./CocosCompat";
import { default as __rea_outer_f } from "./ActionSystem";
import { default as __rea_outer_A } from "./clue-gesture-detector";
import { default as __rea_outer_S } from "./clue-hit-tester";
import { SwipeDirection as __rea_outer_C } from "./clue-level-types";
let __recovered_export_0;
var B;
__rea_outer_t._RF.push({}, "c58a08SS35NkYw6fhtY8AAB", "Level_58", void 0);
const {
    ccclass: b
  } = __rea_outer_r,
  P = "level58_2",
  k = "level58_7",
  T = 10,
  I = 317.583,
  w = 165.987,
  F = .7,
  E = new __rea_outer_i(61, 206, 0),
  D = ["level58_hint9", "level58_hint2", "level58_hint7", "level58_hint5", "level58_hint4", "level58_hint6", "level58_hint8", "level58_hint3", "level58_hint1", "level58_hint10"],
  x = ["58_10", "58_3", "58_8", "58_6", "58_5", "58_7", "58_9", "58_4", "58_2", "58_11"],
  V = 2,
  H = 3,
  _ = 4,
  O = 5,
  G = 6,
  L = 7,
  z = 8,
  R = 9,
  U = 10,
  M = 11,
  q = 12,
  K = 13,
  W = 14,
  Q = 15,
  Y = 16,
  j = 17,
  Z = 19,
  $ = 20,
  J = 21,
  X = 22,
  ee = 23,
  te = 24,
  ie = 25,
  se = 26,
  oe = 27,
  he = 28,
  ne = 29,
  de = 30,
  le = 31,
  re = 32,
  ae = 33,
  ce = 34,
  Ne = 35,
  ue = 36,
  ge = 37,
  pe = 38,
  me = 39,
  ve = 40,
  ye = 41,
  fe = 42,
  Ae = 43,
  Se = 44,
  Ce = 45,
  Be = 46,
  be = 47,
  Pe = 48,
  ke = 49,
  Te = 50,
  Ie = 51,
  we = 52,
  Fe = 53,
  Ee = 54,
  De = 55,
  xe = 56,
  Ve = 57,
  He = 58,
  _e = 59,
  Oe = 60,
  Ge = 61,
  Le = 62,
  ze = 63,
  Re = 64,
  Ue = 65,
  Me = 66,
  qe = 67,
  Ke = 68,
  We = 69,
  Qe = 70,
  Ye = 71,
  je = 72,
  Ze = 73,
  $e = 74,
  Je = 75,
  Xe = 76,
  et = 77,
  tt = 78;
__recovered_export_0 = b("Level_58")(B = class extends __rea_outer_a {
  constructor(...e) {
    super(...e), this.phase = 0, this.winstate = !1, this.gameNode = null, this.backBgNode = null, this.demoNode = null, this.clickRootNode = null, this.promptBoxNode = null, this.promptLabel = null, this.bg2Node = null, this.employeeTemplateNode = null, this.employeeStartNode = null, this.employeeEndNode = null, this.employee1Node = null, this.employeeClimbNode = null, this.skirt1Node = null, this.scissorsNode = null, this.clothesNode = null, this.mushroomNode = null, this.wrenchNode = null, this.skirtNode = null, this.hammerNode = null, this.photoNode = null, this.photo1Node = null, this.photo2Node = null, this.photo3Node = null, this.bookNode = null, this.book1Node = null, this.groundNode = null, this.ground1Node = null, this.ground2Node = null, this.hammer1Node = null, this.fanNode = null, this.fan2Node = null, this.maskNode = null, this.mask1Node = null, this.fanButtonNode = null, this.fanButton1Node = null, this.dogNode = null, this.girlNode = null, this.girl1Node = null, this.girl2Node = null, this.ventNode = null, this.vent1Node = null, this.repairmanLeftNode = null, this.repairmanRightNode = null, this.repairman2Node = null, this.repairman21Node = null, this.repairman3Node = null, this.repairman12Node = null, this.guardNode = null, this.guard1Node = null, this.guard2Node = null, this.guard3Node = null, this.guard4Node = null, this.guard5Node = null, this.guard6Node = null, this.guard7Node = null, this.guard21Node = null, this.guard22Node = null, this.guard41Node = null, this.guard61Node = null, this.heart1Node = null, this.heart2Node = null, this.dizzinessANode = null, this.dizzinessBNode = null, this.manVomitNode = null, this.fightBoxNode = null, this.fight1Node = null, this.fight1BoxANode = null, this.fight1BoxBNode = null, this.fight2BoxANode = null, this.fight2BoxBNode = null, this.fightHoleNode = null, this.fight1HoleNode = null, this.fight2HoleNode = null, this.scissors1PhotoNode = null, this.scissors2PhotoNode = null, this.scissors1BoxNode = null, this.scissors2BoxNode = null, this.scissors1DogNode = null, this.scissors2DogNode = null, this.money1HoldNode = null, this.money1UnusedNode = null, this.moneySceneNode = null, this.boxTouchNode = null, this.scissorsTouchNode = null, this.hammerTouchNode = null, this.dogTouchNode = null, this.slotPositions = [], this.nodeOrigins = new Map(), this.completedSteps = new Set(), this.visibleEmployees = [], this.queueIds = [], this.nextSpawnIndex = 0, this.activeDrag = null, this.pointerSession = null, this.voiceToken = 0, this.performanceToken = 0, this.isPhotoCut = !1, this.isBookOpen = !1, this.isFanPanelOpen = !1, this.isDogCut = !1, this.isFightFrameA = !0, this.activeFight = null, this.onTouchStart = e => {
      if (!this.canAcceptTouch()) return;
      const t = __rea_outer_S.getTouchPoint(e);
      if (this.isFanPanelOpen) return void (__rea_outer_S.isPointInside(this.fanButtonNode, t) && (this.pointerSession = {
        kind: "fanSwipe",
        startPoint: t.clone()
      }, e.propagationStopped = !0));
      const i = this.resolveDragKind(t);
      return i ? (this.beginDrag(i, e), void (e.propagationStopped = !0)) : this.canClickBook() && __rea_outer_S.isPointInside(this.bookNode, t) ? (this.pointerSession = {
        kind: "book",
        startPoint: t.clone()
      }, void (e.propagationStopped = !0)) : void (this.canClickFan() && __rea_outer_S.isPointInside(this.fanNode, t) && (this.pointerSession = {
        kind: "fan",
        startPoint: t.clone()
      }, e.propagationStopped = !0));
    }, this.onTouchMove = e => {
      this.activeDrag && this.canAcceptTouch() && (this.setDragNodePositionFromTouch(e, this.activeDrag.node, this.gameNode, this.activeDrag.touchOffset), e.propagationStopped = !0);
    }, this.onTouchEnd = e => {
      if (1 !== this.phase || this.winstate) return this.cancelDrag(), void (this.pointerSession = null);
      if (this.activeDrag) return this.handleDrop(this.activeDrag), this.activeDrag = null, void (e.propagationStopped = !0);
      const t = this.pointerSession;
      if (this.pointerSession = null, !t || !this.canAcceptTouch()) return;
      const i = __rea_outer_S.getTouchPoint(e);
      if ("fanSwipe" === t.kind) return __rea_outer_A.isSwipeMatching(t.startPoint, i, __rea_outer_C.Right) && this.completeFanSwipe(), void (e.propagationStopped = !0);
      __rea_outer_s.distance(t.startPoint, i) >= 20 || ("book" === t.kind ? this.openBook() : "fan" === t.kind && this.openFanPanel(), e.propagationStopped = !0);
    }, this.tickFight = () => {
      this.isFightFrameA = !this.isFightFrameA, this.applyFightFrame();
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.allItemNum = T, this.hasInstallNum = 0;
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
    __rea_outer_u.getInstance().showView(__rea_outer_p, void 0, {
      body: t
    });
  }
  getGameProgressSnapshot() {
    const e = this.hasInstallNum;
    return {
      progress: e / T,
      label: `${e}/10`
    };
  }
  markAllTasksCompleted() {
    for (let e = 1; e <= T; e += 1) this.completedSteps.add(e);
    this.hasInstallNum = T;
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.activeDrag = null, this.pointerSession = null, this.voiceToken = 0, this.performanceToken = 0, this.isPhotoCut = !1, this.isBookOpen = !1, this.isFanPanelOpen = !1, this.isDogCut = !1, this.isFightFrameA = !0, this.activeFight = null, this.completedSteps.clear(), this.hasInstallNum = 0, this.clearEmployees(), this.queueIds = [], this.nextSpawnIndex = 0, __rea_outer_c.stopVoice();
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_c.playMusic("bgm4", !0, .5), this.applyInitialVisibility(), this.spawnOpeningQueue(), this.setInputBlocked(!0), __rea_outer_v.getInstance().refreshGameProgress(), this.playDialogue("58_1", !0, () => {
      this.isValid && 0 === this.phase && this.enterPhase1();
    });
  }
  skipOpeningToPlay() {
    return 0 === this.phase && (this.voiceToken += 1, this.stopOpeningDialogue(), this.enterPhase1(), !0);
  }
  enterPhase1() {
    0 === this.phase && (this.phase = 1, this.hidePrompt(), this.setInputBlocked(!1), this.registerInteractionHandlers(), __rea_outer_v.getInstance().refreshGameProgress());
  }
  enterPhase2Success() {
    this.phase >= 2 || this.winstate || (this.phase = 2, this.winstate = !0, this.activeDrag = null, this.pointerSession = null, this.performanceToken += 1, this.unregisterInteractionHandlers(), this.stopFightAlternate(), this.setInputBlocked(!0), this.hideAllGuardVariants(), this.setNodeActive(this.guard4Node, !0), this.setNodeActive(this.guard41Node, !0), __rea_outer_v.getInstance().pauseTimer(), this.playDialogue("58_12", !0, () => {
      this.isValid && 2 === this.phase && this.showLevelSuccess(1);
    }));
  }
  beginTimeoutFail() {
    this.phase = 2, this.winstate = !1, this.cleanupRuntime(!0), __rea_outer_v.getInstance().pauseTimer(), __rea_outer_u.getInstance().showView(__rea_outer_m, __rea_outer_g.WIN_ANIMATION);
  }
  applyInitialVisibility() {
    this.restoreAllOrigins(), this.setNodeActive(this.getGameChild("bg"), !0), this.setNodeActive(this.getGameChild("bg_1"), !0), this.setNodeActive(this.bg2Node, !0), this.setNodeActive(this.repairmanLeftNode, !1), this.setNodeActive(this.repairmanRightNode, !0), this.setNodeActive(this.wrenchNode, !0), this.setNodeActive(this.girlNode, !0), this.setNodeActive(this.dogNode, !0), this.setNodeActive(this.mushroomNode, !0), this.setNodeActive(this.clothesNode, !0), this.setNodeActive(this.photoNode, !0), this.setNodeActive(this.skirtNode, !0), this.setNodeActive(this.scissorsNode, !0), this.setNodeActive(this.bookNode, !0), this.setNodeActive(this.groundNode, !0), this.setNodeActive(this.fanNode, !0), this.setNodeActive(this.ventNode, !0), this.setNodeActive(this.getGameChild("clicks"), !0), this.setNodeActive(this.boxTouchNode, !0), this.setNodeActive(this.scissorsTouchNode, !0), this.setNodeActive(this.hammerTouchNode, !0), this.setNodeActive(this.dogTouchNode, !0), this.showGuardIdle();
    [this.girl1Node, this.girl2Node, this.repairman2Node, this.repairman21Node, this.repairman3Node, this.repairmanLeftNode, this.repairman12Node, this.photo1Node, this.photo2Node, this.photo3Node, this.book1Node, this.hammerNode, this.hammer1Node, this.ground1Node, this.ground2Node, this.fan2Node, this.maskNode, this.mask1Node, this.fanButtonNode, this.fanButton1Node, this.employee1Node, this.employeeClimbNode, this.skirt1Node, this.vent1Node, this.moneySceneNode, this.money1HoldNode, this.money1UnusedNode, this.heart1Node, this.heart2Node, this.dizzinessANode, this.dizzinessBNode, this.manVomitNode, this.fightBoxNode, this.fight1Node, this.fight1BoxANode, this.fight1BoxBNode, this.fight2BoxANode, this.fight2BoxBNode, this.fightHoleNode, this.fight1HoleNode, this.fight2HoleNode, this.scissors1PhotoNode, this.scissors2PhotoNode, this.scissors1BoxNode, this.scissors2BoxNode, this.scissors1DogNode, this.scissors2DogNode, this.employeeStartNode, this.employeeTemplateNode, this.employeeEndNode].forEach(e => this.setNodeActive(e, !1)), this.setFanAngle(90), this.setNodeActive(this.promptBoxNode, !1), this.setNodeActive(this.getGameChild("drags"), !1), this.setNodeActive(this.getGameChild("swips"), !1), this.setNodeActive(this.demoNode, !1), this.setNodeActive(this.clickRootNode, !1);
  }
  spawnOpeningQueue() {
    this.clearEmployees(), this.queueIds = this.shuffleClueIds(), this.nextSpawnIndex = 0;
    const e = Math.min(3, this.queueIds.length);
    for (let t = 0; t < e; t += 1) this.spawnEmployee(this.queueIds[t], t), this.nextSpawnIndex += 1;
    this.restackEmployees();
  }
  shuffleClueIds() {
    const e = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let t = e.length - 1; t > 0; t -= 1) {
      const i = Math.floor(Math.random() * (t + 1)),
        s = e[t];
      e[t] = e[i], e[i] = s;
    }
    return e;
  }
  spawnEmployee(e, t) {
    var i, s;
    if (null == (i = this.employeeTemplateNode) || !i.isValid || null == (s = this.gameNode) || !s.isValid) return;
    const h = __rea_outer_o(this.employeeTemplateNode);
    this.gameNode.addChild(h), this.insertBeforeBg2(h), h.setPosition(this.getSlotPosition(t)), h.active = !0;
    const n = h.getChildByName("money"),
      d = h.getChildByName("photo_4");
    this.setNodeActive(n, 10 === e), this.setNodeActive(d, !1), this.visibleEmployees.push({
      clueId: e,
      node: h,
      moneyNode: n,
      photo4Node: d
    });
  }
  insertBeforeBg2(e) {
    var t;
    null != (t = this.bg2Node) && t.isValid && e.parent && e.setSiblingIndex(this.bg2Node.getSiblingIndex());
  }
  getSlotPosition(e) {
    const t = this.slotPositions[e];
    return t ? t.clone() : new __rea_outer_i();
  }
  getFrontEmployee() {
    return this.visibleEmployees[0] ?? null;
  }
  hideFrontEmployee() {
    const e = this.getFrontEmployee();
    this.setNodeActive((null == e ? void 0 : e.node) ?? null, !1);
  }
  advanceVisibleQueue(e) {
    var t;
    const i = this.visibleEmployees.shift();
    null != i && null != (t = i.node) && t.isValid && i.node.destroy(), this.visibleEmployees.forEach((e, t) => {
      this.moveNodeTo(e.node, this.getSlotPosition(t), .3);
    }), this.nextSpawnIndex < this.queueIds.length && (this.spawnEmployee(this.queueIds[this.nextSpawnIndex], this.visibleEmployees.length), this.nextSpawnIndex += 1), this.restackEmployees(), this.scheduleOnceIfValid(e, .3);
  }
  restackEmployees() {
    for (let e = this.visibleEmployees.length - 1; e >= 0; e -= 1) this.insertBeforeBg2(this.visibleEmployees[e].node);
  }
  clearEmployees() {
    this.visibleEmployees.forEach(e => {
      var t;
      null != (t = e.node) && t.isValid && e.node !== this.employeeTemplateNode && e.node.destroy();
    }), this.visibleEmployees.length = 0;
  }
  registerInteractionHandlers() {
    this.node.on(__rea_outer_h.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(__rea_outer_h.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(__rea_outer_h.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(__rea_outer_h.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
  }
  unregisterInteractionHandlers() {
    var e;
    null != (e = this.node) && e.isValid && (this.node.off(__rea_outer_h.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(__rea_outer_h.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(__rea_outer_h.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(__rea_outer_h.EventType.TOUCH_CANCEL, this.onTouchEnd, this));
  }
  canAcceptTouch() {
    var e;
    return 1 === this.phase && !this.winstate && !0 !== (null == (e = this.backBgNode) ? void 0 : e.active);
  }
  resolveDragKind(e) {
    var t, i;
    const s = [];
    this.pushHit(s, "scissors", this.getDragHitNode(this.scissorsNode, this.scissorsTouchNode), this.canDragScissors()), this.pushHit(s, "clothes", this.clothesNode, this.canStartStep(2)), this.pushHit(s, "mushroom", this.mushroomNode, this.canStartStep(5)), this.pushHit(s, "wrench", this.wrenchNode, this.canStartStep(8) && Boolean(null == (t = this.wrenchNode) ? void 0 : t.active)), this.pushHit(s, "skirt", this.skirtNode, this.canStartStep(9)), this.pushHit(s, "hammer", this.getDragHitNode(this.hammerNode, this.hammerTouchNode), this.canDragHammer()), this.pushHit(s, "photo3", this.photo3Node, this.isPhotoCut && this.canStartStep(1));
    const o = this.getFrontEmployee(),
      h = this.canStartStep(10) && 10 === (null == o ? void 0 : o.clueId) && Boolean(null == (i = o.moneyNode) ? void 0 : i.active);
    return this.pushHit(s, "money", (null == o ? void 0 : o.moneyNode) ?? null, h), __rea_outer_S.pickTopmost(s, e);
  }
  canDragScissors() {
    var e;
    return !(null == (e = this.scissorsNode) || !e.active) && (!this.isPhotoCut && this.canStartStep(1) || this.canStartStep(4) || !this.isDogCut && this.canStartStep(7));
  }
  canDragHammer() {
    var e;
    return this.isBookOpen && this.canStartStep(3) && Boolean(null == (e = this.hammerNode) ? void 0 : e.active);
  }
  getDragHitNode(e, t) {
    return null != t && t.isValid && t.activeInHierarchy ? t : e;
  }
  canClickBook() {
    var e;
    return !this.isBookOpen && this.canStartStep(3) && Boolean(null == (e = this.bookNode) ? void 0 : e.active);
  }
  canClickFan() {
    var e;
    return !this.isFanPanelOpen && this.canStartStep(6) && Boolean(null == (e = this.fanNode) ? void 0 : e.active);
  }
  canStartStep(e) {
    return !this.completedSteps.has(e);
  }
  pushHit(e, t, i, s) {
    s && null != i && i.active && e.push({
      value: t,
      node: i
    });
  }
  beginDrag(e, t) {
    var i, s;
    if (null == (i = this.gameNode) || !i.isValid) return;
    let o = this.getDragSourceNode(e),
      h = null;
    if ("money" === e) {
      var n, d;
      const e = this.getFrontEmployee();
      if (h = (null == e ? void 0 : e.moneyNode) ?? null, o = this.money1HoldNode, null == (n = o) || !n.isValid || null == (d = h) || !d.isValid) return;
      this.placeNodeAtWorld(o, h.worldPosition), this.setNodeActive(h, !1), this.setNodeActive(o, !0);
    }
    if (null == (s = o) || !s.isValid) return;
    const l = o.position.clone(),
      r = o.getSiblingIndex();
    this.bringNodeToFront(o);
    const a = this.calculateTouchOffset(t, o, this.gameNode);
    this.setDragNodePositionFromTouch(t, o, this.gameNode, a), this.activeDrag = {
      kind: e,
      node: o,
      originPosition: l,
      originSiblingIndex: r,
      touchOffset: a,
      moneySource: h
    };
  }
  getDragSourceNode(e) {
    switch (e) {
      case "scissors":
        return this.scissorsNode;
      case "clothes":
        return this.clothesNode;
      case "mushroom":
        return this.mushroomNode;
      case "wrench":
        return this.wrenchNode;
      case "skirt":
        return this.skirtNode;
      case "hammer":
        return this.hammerNode;
      case "photo3":
        return this.photo3Node;
      case "money":
        return this.money1HoldNode;
      default:
        return null;
    }
  }
  handleDrop(e) {
    var t, i;
    if (this.canAcceptTouch()) {
      if ("scissors" !== e.kind) return "clothes" === e.kind && this.isNodeCenterInside(e.node, this.repairmanRightNode) ? (this.restoreDrag(e), void this.beginClothesClue()) : "mushroom" === e.kind && this.isNodeCenterInside(e.node, this.guardNode) ? (this.restoreDrag(e), void this.beginMushroomClue()) : "wrench" === e.kind && this.isNodeCenterInside(e.node, this.ventNode) ? (this.restoreDrag(e), void this.beginVentClue()) : "skirt" === e.kind && this.isNodeCenterInside(e.node, (null == (t = this.getFrontEmployee()) ? void 0 : t.node) ?? null) ? (this.restoreDrag(e), void this.beginBoxClue()) : "hammer" === e.kind && this.isNodeCenterInside(e.node, this.groundNode) ? (this.restoreDrag(e), void this.beginHoleClue()) : "photo3" === e.kind && this.isNodeCenterInside(e.node, (null == (i = this.getFrontEmployee()) ? void 0 : i.node) ?? null) ? (this.restoreDrag(e), void this.beginBossSecondStage()) : "money" === e.kind && this.isNodeCenterInside(e.node, this.guardNode) ? (this.restoreDrag(e), void this.beginMoneyClue()) : void this.restoreDrag(e);
      this.handleScissorsDrop(e);
    } else this.restoreDrag(e);
  }
  handleScissorsDrop(e) {
    const t = !this.isPhotoCut && this.canStartStep(1) && this.isNodeCenterInside(e.node, this.photoNode),
      i = this.canStartStep(4) && this.isNodeCenterInside(e.node, this.boxTouchNode),
      s = !this.isDogCut && this.canStartStep(7) && this.isNodeCenterInside(e.node, this.dogTouchNode);
    this.restoreDrag(e), t ? this.beginBossFirstStage() : i ? this.beginBlackoutClue() : s && this.beginDogClue();
  }
  restoreDrag(e) {
    var t;
    null != (t = e.node) && t.isValid && (this.stopTweenIfValid(e.node), e.node.setPosition(e.originPosition), e.node.parent && e.node.setSiblingIndex(e.originSiblingIndex), "money" === e.kind && (this.setNodeActive(e.node, !1), this.setNodeActive(e.moneySource, !0)));
  }
  cancelDrag() {
    this.activeDrag && (this.restoreDrag(this.activeDrag), this.activeDrag = null);
  }
  beginPerformance() {
    return this.performanceToken += 1, this.setInputBlocked(!0), this.performanceToken;
  }
  isPerformanceCurrent(e) {
    return this.isValid && 1 === this.phase && e === this.performanceToken && !this.winstate;
  }
  playHitSound() {
    __rea_outer_c.playEffect_1("level58_1");
  }
  beginBossFirstStage() {
    var e;
    this.playHitSound();
    const t = this.beginPerformance();
    this.flashCutPair(this.scissors1PhotoNode, this.scissors2PhotoNode), this.setNodeActive(this.photoNode, !1), this.setNodeActive(this.photo1Node, !0), this.restoreOrigin(this.photo2Node), this.setNodeActive(this.photo2Node, !0);
    const s = (this.photo3Node ? this.nodeOrigins.get(this.photo3Node) : void 0) ?? (null == (e = this.photo3Node) ? void 0 : e.position.clone());
    this.moveNodeTo(this.photo2Node, s ?? new __rea_outer_i(), .5, () => {
      this.isPerformanceCurrent(t) && (this.setNodeActive(this.photo2Node, !1), this.restoreOrigin(this.photo3Node), this.setNodeActive(this.photo3Node, !0), this.isPhotoCut = !0, this.setInputBlocked(!1));
    });
  }
  beginBossSecondStage() {
    var e;
    if (!this.isPhotoCut || !this.canStartStep(1)) return;
    this.playHitSound();
    const t = this.beginPerformance();
    this.setNodeActive(this.photo3Node, !1), this.hideAllGuardVariants(), this.setNodeActive(this.guard1Node, !0), this.playDialogue(x[0], !0), this.playDoorEscape((null == (e = this.getFrontEmployee()) ? void 0 : e.photo4Node) ?? null, () => {
      this.isPerformanceCurrent(t) && (this.showGuardIdle(), this.completeClue(1, t));
    });
  }
  beginClothesClue() {
    if (!this.canStartStep(2)) return;
    this.playHitSound();
    const e = this.beginPerformance();
    this.setNodeActive(this.clothesNode, !1), this.setNodeActive(this.repairmanRightNode, !1), this.setNodeActive(this.wrenchNode, !1), this.setNodeActive(this.repairman2Node, !0), this.hideAllGuardVariants(), this.setNodeActive(this.guard2Node, !0), this.setNodeActive(this.heart1Node, !0), this.setNodeActive(this.heart2Node, !0), this.setNodeActive(this.guard21Node, !0), this.setNodeActive(this.guard22Node, !0), this.startEyePulse(), this.playDialogue(x[1], !0), this.playDoorEscape(null, () => {
      this.isPerformanceCurrent(e) && (this.stopEyePulse(), this.setNodeActive(this.repairman21Node, !0), this.setNodeActive(this.guard2Node, !1), this.setNodeActive(this.heart1Node, !1), this.setNodeActive(this.heart2Node, !1), this.setNodeActive(this.guard21Node, !1), this.setNodeActive(this.guard22Node, !1), this.setNodeActive(this.guard3Node, !0), this.setNodeActive(this.dizzinessANode, !0), this.setNodeActive(this.dizzinessBNode, !0), this.setNodeActive(this.manVomitNode, !0), __rea_outer_c.playEffect_1(k), this.scheduleOnceIfValid(() => {
        this.isPerformanceCurrent(e) && (this.setNodeActive(this.repairman21Node, !1), this.setNodeActive(this.repairman2Node, !1), this.setNodeActive(this.guard3Node, !1), this.setNodeActive(this.dizzinessANode, !1), this.setNodeActive(this.dizzinessBNode, !1), this.setNodeActive(this.manVomitNode, !1), this.setNodeActive(this.repairmanRightNode, !0), this.refreshWrench(), this.showGuardIdle(), this.completeClue(2, e));
      }, F));
    });
  }
  openBook() {
    this.canClickBook() && (this.isBookOpen = !0, this.setNodeActive(this.bookNode, !1), this.restoreOrigin(this.book1Node), this.restoreOrigin(this.hammerNode), this.setNodeActive(this.book1Node, !0), this.setNodeActive(this.hammerNode, !0));
  }
  beginHoleClue() {
    if (!this.isBookOpen || !this.canStartStep(3)) return;
    this.playHitSound(), __rea_outer_c.playEffect_1("level58_4");
    const e = this.beginPerformance();
    this.setNodeActive(this.hammerNode, !1), this.setNodeActive(this.groundNode, !1), this.setNodeActive(this.hammer1Node, !0), this.setNodeActive(this.ground1Node, !0), this.setNodeActive(this.ground2Node, !0), this.hideAllGuardVariants(), this.setNodeActive(this.guard4Node, !0), this.setNodeActive(this.guard41Node, !0), this.playDialogue(x[2], !0), this.playHoleEscape(() => {
      this.isPerformanceCurrent(e) && (this.showGuardIdle(), this.setNodeActive(this.repairmanRightNode, !1), this.setNodeActive(this.wrenchNode, !1), this.setNodeActive(this.repairman3Node, !0), this.startFightAlternate("hole"), this.scheduleOnceIfValid(() => {
        this.isPerformanceCurrent(e) && (this.stopFightAlternate(), this.setNodeActive(this.repairman3Node, !1), this.setNodeActive(this.ground1Node, !1), this.setNodeActive(this.ground2Node, !1), this.setNodeActive(this.hammer1Node, !1), this.setNodeActive(this.groundNode, !0), this.setNodeActive(this.repairmanRightNode, !0), this.refreshWrench(), this.completeClue(3, e));
      }, F));
    });
  }
  beginBlackoutClue() {
    if (!this.canStartStep(4)) return;
    this.playHitSound();
    const e = this.beginPerformance();
    this.flashCutPair(this.scissors1BoxNode, this.scissors2BoxNode), this.setNodeActive(this.mask1Node, !0), this.hideAllGuardVariants(), this.setNodeActive(this.guard4Node, !0), this.setNodeActive(this.guard41Node, !0);
    let t = !1,
      i = !1;
    const s = () => {
      this.isPerformanceCurrent(e) && t && i && (this.showGuardIdle(), this.completeClue(4, e));
    };
    this.playDialogue(x[3], !0, () => {
      this.isPerformanceCurrent(e) && (this.startFightAlternate("box"), this.scheduleOnceIfValid(() => {
        this.isPerformanceCurrent(e) && (this.stopFightAlternate(), i = !0, s());
      }, F));
    }), this.playDoorEscape(null, () => {
      this.isPerformanceCurrent(e) && (this.setNodeActive(this.mask1Node, !1), t = !0, s());
    });
  }
  beginMushroomClue() {
    if (!this.canStartStep(5)) return;
    this.playHitSound();
    const e = this.beginPerformance();
    this.setNodeActive(this.mushroomNode, !1), this.hideAllGuardVariants(), this.setNodeActive(this.guard3Node, !0), this.setNodeActive(this.dizzinessANode, !0), this.setNodeActive(this.dizzinessBNode, !0), this.setNodeActive(this.manVomitNode, !0), __rea_outer_c.playEffect_1(k), this.playDialogue(x[4], !0), this.playDoorEscape(null, () => {
      this.isPerformanceCurrent(e) && (this.setNodeActive(this.guard3Node, !1), this.setNodeActive(this.dizzinessANode, !1), this.setNodeActive(this.dizzinessBNode, !1), this.setNodeActive(this.manVomitNode, !1), this.showGuardIdle(), this.completeClue(5, e));
    });
  }
  openFanPanel() {
    this.canClickFan() && (this.isFanPanelOpen = !0, this.setFanAngle(90), this.setNodeActive(this.maskNode, !0), this.setNodeActive(this.fanButtonNode, !0), this.setNodeActive(this.fanButton1Node, !0));
  }
  completeFanSwipe() {
    if (!this.isFanPanelOpen || !this.canStartStep(6)) return;
    this.isFanPanelOpen = !1, this.setFanAngle(0);
    const e = this.beginPerformance();
    this.scheduleOnceIfValid(() => {
      this.isPerformanceCurrent(e) && (this.setNodeActive(this.maskNode, !1), this.setNodeActive(this.fanButtonNode, !1), this.setNodeActive(this.fanButton1Node, !1), this.setNodeActive(this.fan2Node, !0), __rea_outer_c.playEffect_1("level58_5"), this.hideAllGuardVariants(), this.setNodeActive(this.guard5Node, !0), this.playDialogue(x[5], !0), this.playDoorEscape(null, () => {
        this.isPerformanceCurrent(e) && (this.setNodeActive(this.guard5Node, !1), this.setNodeActive(this.fan2Node, !1), this.showGuardIdle(), this.completeClue(6, e));
      }));
    }, .5);
  }
  beginDogClue() {
    var e;
    this.playHitSound();
    const t = this.beginPerformance();
    this.isDogCut = !0, this.flashCutPair(this.scissors1DogNode, this.scissors2DogNode);
    const s = (null == (e = this.guardNode) ? void 0 : e.position.clone()) ?? new __rea_outer_i();
    this.moveNodeTo(this.dogNode, s, .5, () => {
      this.isPerformanceCurrent(t) && (this.setNodeActive(this.dogNode, !1), this.playDogEscapePerformance(t));
    });
  }
  playDogEscapePerformance(e) {
    this.setNodeActive(this.girlNode, !1), this.setNodeActive(this.girl1Node, !0), this.hideAllGuardVariants(), this.setNodeActive(this.guard6Node, !0), this.setNodeActive(this.guard61Node, !0), __rea_outer_c.playEffect_1("level58_3"), this.playDialogue(x[6], !0), this.playDoorEscape(null, () => {
      var t;
      if (!this.isPerformanceCurrent(e)) return;
      this.setNodeActive(this.girl1Node, !1), this.setNodeActive(this.guard6Node, !1), this.setNodeActive(this.guard61Node, !1), this.showGuardIdle(), this.restoreOrigin(this.girl2Node), this.setNodeActive(this.girl2Node, !0);
      const s = new __rea_outer_i(800, (null == (t = this.girl2Node) ? void 0 : t.position.y) ?? 0, 0);
      this.moveNodeTo(this.girl2Node, s, .8, () => {
        this.isPerformanceCurrent(e) && (this.setNodeActive(this.girl2Node, !1), this.completeClue(7, e));
      });
    });
  }
  beginVentClue() {
    if (!this.canStartStep(8)) return;
    this.playHitSound();
    const e = this.beginPerformance();
    this.setNodeActive(this.wrenchNode, !1), this.setNodeActive(this.ventNode, !1), this.setNodeActive(this.vent1Node, !0), this.hideAllGuardVariants(), this.setNodeActive(this.guard4Node, !0), this.setNodeActive(this.guard41Node, !0), this.playDialogue(x[7], !0);
    let t = !1,
      i = !1;
    const s = () => {
        this.stopFightAlternate(), this.setNodeActive(this.repairmanLeftNode, !1), this.setNodeActive(this.repairmanRightNode, !0);
      },
      o = () => {
        this.isPerformanceCurrent(e) && t && i && (this.setNodeActive(this.guard4Node, !1), this.setNodeActive(this.guard41Node, !1), this.showGuardIdle(), this.completeClue(8, e));
      };
    this.playClimbEscape(() => {
      this.isPerformanceCurrent(e) && (t = !0, this.scheduleOnceIfValid(() => {
        this.isPerformanceCurrent(e) && (this.setNodeActive(this.repairmanRightNode, !1), this.setNodeActive(this.repairmanLeftNode, !0), this.startFightAlternate("vent"), this.scheduleOnceIfValid(() => {
          this.isPerformanceCurrent(e) && (s(), i = !0, o());
        }, F));
      }, .2));
    });
  }
  beginBoxClue() {
    if (!this.canStartStep(9)) return;
    this.playHitSound();
    const e = this.beginPerformance();
    this.hideFrontEmployee(), this.setNodeActive(this.skirtNode, !1), this.restoreOrigin(this.skirt1Node), this.setNodeActive(this.skirt1Node, !0), this.playDialogue(x[8], !0), __rea_outer_c.playEffect_1(P);
    const t = new __rea_outer_i(I, w, 0);
    this.moveNodeTo(this.skirt1Node, t, 1, () => {
      this.isPerformanceCurrent(e) && (this.setNodeActive(this.skirt1Node, !1), this.completeClue(9, e));
    });
  }
  beginMoneyClue() {
    var e;
    if (!this.canStartStep(10) || 10 !== (null == (e = this.getFrontEmployee()) ? void 0 : e.clueId)) return;
    this.playHitSound(), __rea_outer_c.playEffect_1("level58_6");
    const t = this.beginPerformance();
    this.setNodeActive(this.money1HoldNode, !1), this.hideAllGuardVariants(), this.setNodeActive(this.guard7Node, !0), this.playDialogue(x[9], !0), this.playDoorEscape(null, () => {
      this.isPerformanceCurrent(t) && (this.setNodeActive(this.guard7Node, !1), this.showGuardIdle(), this.completeClue(10, t));
    });
  }
  playDoorEscape(e, t) {
    var s;
    this.hideFrontEmployee(), this.restoreOrigin(this.employee1Node), this.setNodeActive(this.employee1Node, !0), null != e && e.isValid && null != (s = this.employee1Node) && s.isValid && (e.setParent(this.employee1Node), e.setPosition(E), this.setNodeActive(e, !0)), __rea_outer_c.playEffect_1(P);
    const o = new __rea_outer_i(I, w, 0);
    this.moveNodeTo(this.employee1Node, o, 1, () => {
      this.setNodeActive(this.employee1Node, !1), this.setNodeActive(e, !1), t();
    });
  }
  playHoleEscape(e) {
    var t, s;
    const o = this.getFrontEmployee();
    if (null == o || null == (t = o.node) || !t.isValid) return void e();
    __rea_outer_c.playEffect_1(P);
    const h = (null == (s = this.ground1Node) ? void 0 : s.position.clone()) ?? new __rea_outer_i();
    this.moveNodeTo(o.node, h, .4, () => {
      const t = new __rea_outer_i(h.x, -800, 0);
      this.moveNodeTo(o.node, t, .4, () => {
        this.setNodeActive(o.node, !1), e();
      });
    });
  }
  playClimbEscape(e) {
    var t, s, o;
    this.hideFrontEmployee(), this.restoreOrigin(this.employeeClimbNode), this.setNodeActive(this.employeeClimbNode, !0), __rea_outer_c.playEffect_1(P);
    const h = (null == (t = this.employeeClimbNode) ? void 0 : t.position.clone()) ?? new __rea_outer_i(),
      n = (null == (s = this.ventNode) ? void 0 : s.position.clone()) ?? (null == (o = this.vent1Node) ? void 0 : o.position.clone()) ?? h,
      d = new __rea_outer_i(n.x - h.x, n.y - h.y, 0),
      l = Math.sqrt(d.x * d.x + d.y * d.y) || 1,
      r = new __rea_outer_i(h.x + d.x / l * 50, h.y + d.y / l * 50, 0);
    this.moveNodeTo(this.employeeClimbNode, r, .45, () => {
      this.setNodeActive(this.employeeClimbNode, !1), e();
    });
  }
  completeClue(e, t) {
    this.isPerformanceCurrent(t) && !this.completedSteps.has(e) && (this.completedSteps.add(e), this.hasInstallNum = this.completedSteps.size, __rea_outer_v.getInstance().refreshGameProgress(), this.advanceVisibleQueue(() => {
      this.isValid && (this.hasInstallNum >= T ? this.enterPhase2Success() : t === this.performanceToken && this.setInputBlocked(!1));
    }));
  }
  showGuardIdle() {
    this.hideAllGuardVariants(), this.setNodeActive(this.guardNode, !0);
  }
  hideAllGuardVariants() {
    [this.guardNode, this.guard1Node, this.guard2Node, this.guard3Node, this.guard4Node, this.guard5Node, this.guard6Node, this.guard7Node, this.guard21Node, this.guard22Node, this.guard41Node, this.guard61Node].forEach(e => this.setNodeActive(e, !1));
  }
  refreshWrench() {
    var e;
    const t = this.canStartStep(8) && Boolean(null == (e = this.repairmanRightNode) ? void 0 : e.active);
    this.setNodeActive(this.wrenchNode, t);
  }
  startEyePulse() {
    var e, t;
    null != (e = this.guard21Node) && e.isValid && __rea_outer_f.scaleRepeat(this.guard21Node, .2, .3, 0), null != (t = this.guard22Node) && t.isValid && __rea_outer_f.scaleRepeat(this.guard22Node, .2, .3, 0);
  }
  stopEyePulse() {
    this.stopTweenIfValid(this.guard21Node), this.stopTweenIfValid(this.guard22Node), this.resetScale(this.guard21Node), this.resetScale(this.guard22Node);
  }
  startFightAlternate(e) {
    this.stopFightAlternate(), this.activeFight = e, this.isFightFrameA = !0, this.applyFightFrame(), this.schedule(this.tickFight, .15);
  }
  applyFightFrame() {
    return "box" === this.activeFight ? (this.setNodeActive(this.fightBoxNode, !0), this.setNodeActive(this.fight1Node, !0), this.setNodeActive(this.fight1BoxANode, this.isFightFrameA), this.setNodeActive(this.fight1BoxBNode, this.isFightFrameA), this.setNodeActive(this.fight2BoxANode, !this.isFightFrameA), void this.setNodeActive(this.fight2BoxBNode, !this.isFightFrameA)) : "hole" === this.activeFight ? (this.setNodeActive(this.fightHoleNode, !0), this.setNodeActive(this.fight1HoleNode, this.isFightFrameA), void this.setNodeActive(this.fight2HoleNode, !this.isFightFrameA)) : void ("vent" === this.activeFight && (this.setNodeActive(this.fight1Node, !0), this.setNodeActive(this.fight1BoxANode, this.isFightFrameA), this.setNodeActive(this.fight1BoxBNode, this.isFightFrameA), this.setNodeActive(this.fight2BoxANode, !this.isFightFrameA), this.setNodeActive(this.fight2BoxBNode, !this.isFightFrameA)));
  }
  stopFightAlternate() {
    this.unschedule(this.tickFight), this.activeFight = null, this.setNodeActive(this.fightBoxNode, !1), this.setNodeActive(this.fight1Node, !1), this.setNodeActive(this.fight1BoxANode, !1), this.setNodeActive(this.fight1BoxBNode, !1), this.setNodeActive(this.fight2BoxANode, !1), this.setNodeActive(this.fight2BoxBNode, !1), this.setNodeActive(this.fightHoleNode, !1), this.setNodeActive(this.fight1HoleNode, !1), this.setNodeActive(this.fight2HoleNode, !1);
  }
  flashCutPair(e, t) {
    this.setNodeActive(e, !0), this.setNodeActive(t, !0), this.scheduleOnceIfValid(() => {
      this.setNodeActive(e, !1), this.setNodeActive(t, !1);
    }, .3);
  }
  setFanAngle(e) {
    var t;
    null != (t = this.fanButton1Node) && t.isValid && (this.fanButton1Node.angle = e);
  }
  playDialogue(e, t, i) {
    this.voiceToken += 1;
    const s = this.voiceToken;
    this.showPrompt(e), __rea_outer_c.stopVoice(), __rea_outer_c.playVoice(e);
    let o = !1;
    const h = () => {
        !o && this.isValid && s === this.voiceToken && (o = !0, this.unschedule(n), t && this.hidePrompt(), null == i || i());
      },
      n = () => {
        h();
      },
      d = this.resolveDialogueHoldSeconds(e);
    this.scheduleOnce(h, d), this.scheduleOnce(n, Math.max(8, d + .5));
  }
  resolveDialogueHoldSeconds(e) {
    var t;
    const i = (null == (t = __rea_outer_c.audioMap.get(e)) ? void 0 : t.getDuration()) ?? 0;
    return i > .1 ? i : 2.5;
  }
  showPrompt(e) {
    this.promptLabel && (this.promptLabel.string = this.resolveI18nText(e)), this.setNodeActive(this.promptBoxNode, !0);
  }
  hidePrompt() {
    this.setNodeActive(this.promptBoxNode, !1);
  }
  resolveI18nText(e) {
    const t = __rea_outer_N.getInstance().getKey(e);
    return t && t !== e ? t : e;
  }
  resolveHintKey() {
    for (let e = 1; e <= T; e += 1) if (!this.completedSteps.has(e)) return D[e - 1];
    return null;
  }
  cleanupRuntime(e = !0) {
    this.unscheduleAllCallbacks(), this.unregisterInteractionHandlers(), this.voiceToken += 1, this.performanceToken += 1, this.activeDrag = null, this.pointerSession = null, this.stopFightAlternate(), this.stopEyePulse(), this.clearEmployees(), e && __rea_outer_c.stopVoice(), this.stopAllGameplayTweens();
  }
  stopAllGameplayTweens() {
    [this.employee1Node, this.employeeClimbNode, this.skirt1Node, this.photo2Node, this.photo3Node, this.dogNode, this.girl2Node, this.scissorsNode, this.clothesNode, this.mushroomNode, this.wrenchNode, this.skirtNode, this.hammerNode, this.fanButton1Node, this.guard21Node, this.guard22Node].forEach(e => this.stopTweenIfValid(e)), this.visibleEmployees.forEach(e => this.stopTweenIfValid(e.node));
  }
  stopTweenIfValid(e) {
    null != e && e.isValid && __rea_outer_y(e);
  }
  resetScale(e) {
    null != e && e.isValid && e.setScale(1, 1, 1);
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
  isNodeCenterInside(e, t) {
    return __rea_outer_S.isDragNearTarget(e, t);
  }
  calculateTouchOffset(e, t, s) {
    const o = this.getTouchLocalPosition(e, s);
    return new __rea_outer_i(t.position.x - o.x, t.position.y - o.y, 0);
  }
  setDragNodePositionFromTouch(e, t, i, s) {
    if (null == i || !i.isValid) return;
    const o = this.getTouchLocalPosition(e, i);
    t.setPosition(o.x + s.x, o.y + s.y, t.position.z);
  }
  getTouchLocalPosition(e, t) {
    const s = e.getUILocation(),
      o = t.getComponent(__rea_outer_n);
    return o ? o.convertToNodeSpaceAR(new __rea_outer_i(s.x, s.y, 0)) : __rea_outer_i.ZERO.clone();
  }
  placeNodeAtWorld(e, t) {
    if (!e.parent) return;
    const s = e.parent.getComponent(__rea_outer_n);
    if (!s) return;
    const o = s.convertToNodeSpaceAR(new __rea_outer_i(t.x, t.y, t.z));
    e.setPosition(o);
  }
  moveNodeTo(e, t, i, s) {
    if (null == e || !e.isValid) return void (null == s || s());
    this.stopTweenIfValid(e);
    const o = __rea_outer_d(e).to(i, {
      position: t.clone()
    });
    s && o.call(() => s()), o.start();
  }
  restoreAllOrigins() {
    this.nodeOrigins.forEach((e, t) => {
      t.isValid && (this.stopTweenIfValid(t), t.setPosition(e));
    });
  }
  restoreOrigin(e) {
    if (null == e || !e.isValid) return;
    const t = this.nodeOrigins.get(e);
    t && (this.stopTweenIfValid(e), e.setPosition(t));
  }
  cacheOrigin(e) {
    null != e && e.isValid && this.nodeOrigins.set(e, e.position.clone());
  }
  setNodeActive(e, t) {
    null != e && e.isValid && (e.active = t);
  }
  getGameChild(e) {
    var t;
    return (null == (t = this.gameNode) ? void 0 : t.getChildByName(e)) ?? null;
  }
  getChildBySibling(e) {
    var t;
    const i = null == (t = this.gameNode) ? void 0 : t.children;
    return !i || e < 0 || e >= i.length ? null : i[e];
  }
  resolveReferences() {
    var e, t, s, o;
    this.gameNode = this.node.getChildByPath("UIPanel/gameNode"), this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.demoNode = this.node.getChildByPath("UIPanel/demo"), this.clickRootNode = this.node.getChildByPath("UIPanel/click_root"), this.boxTouchNode = this.node.getChildByPath("UIPanel/gameNode/clicks/touch1"), this.scissorsTouchNode = this.node.getChildByPath("UIPanel/gameNode/clicks/touchscissors"), this.hammerTouchNode = this.node.getChildByPath("UIPanel/gameNode/clicks/touchhammer"), this.dogTouchNode = this.node.getChildByPath("UIPanel/gameNode/clicks/touchdog"), this.promptBoxNode = this.getChildBySibling(et), this.promptLabel = (null == (e = this.promptBoxNode) || null == (e = e.getChildByName("Label")) ? void 0 : e.getComponent(__rea_outer_l)) ?? null, this.bg2Node = this.getChildBySibling(me), this.employeeTemplateNode = this.getChildBySibling(Ne), this.employeeStartNode = this.getChildBySibling(ge), this.employeeEndNode = this.getChildBySibling(pe), this.employee1Node = this.getChildBySibling(ce), this.employeeClimbNode = this.getChildBySibling(Je), this.skirt1Node = this.getChildBySibling(re), this.scissorsNode = this.getChildBySibling(ve), this.clothesNode = this.getChildBySibling(be), this.mushroomNode = this.getGameChild("mushroom"), this.wrenchNode = this.getChildBySibling(j), this.skirtNode = this.getChildBySibling(we), this.hammerNode = this.getChildBySibling(Ae), this.photoNode = this.getChildBySibling(Pe), this.photo1Node = this.getChildBySibling(ke), this.photo2Node = this.getChildBySibling(Te), this.photo3Node = this.getChildBySibling(Ie), this.bookNode = this.getChildBySibling(ye), this.book1Node = this.getChildBySibling(fe), this.groundNode = this.getChildBySibling(Be), this.ground1Node = this.getChildBySibling(Se), this.ground2Node = this.getChildBySibling(Ce), this.hammer1Node = this.getChildBySibling(Ge), this.fanNode = this.getChildBySibling(le), this.fan2Node = this.getChildBySibling(de), this.maskNode = this.getChildBySibling(We), this.mask1Node = this.getChildBySibling(tt), this.fanButtonNode = this.getChildBySibling(Qe), this.fanButton1Node = this.getChildBySibling(Ye), this.dogNode = this.getChildBySibling(Z), this.girlNode = this.getChildBySibling(H), this.girl1Node = this.getChildBySibling(_), this.girl2Node = this.getChildBySibling(O), this.ventNode = this.getChildBySibling(z), this.vent1Node = this.getChildBySibling(L), this.repairmanLeftNode = this.getChildBySibling(G), this.repairmanRightNode = this.getChildBySibling(W), this.repairman2Node = this.getChildBySibling(Q), this.repairman21Node = this.getChildBySibling(Y), this.repairman3Node = this.getChildBySibling(Le), this.repairman12Node = this.getChildBySibling(Xe), this.guardNode = this.getChildBySibling($), this.guard1Node = this.getChildBySibling(J), this.guard2Node = this.getChildBySibling(X), this.guard3Node = this.getChildBySibling(ee), this.guard4Node = this.getChildBySibling(te), this.guard5Node = this.getChildBySibling(ie), this.guard6Node = this.getChildBySibling(he), this.guard7Node = this.getChildBySibling(ne), this.guard21Node = this.getChildBySibling(se), this.guard22Node = this.getChildBySibling(oe), this.guard41Node = this.getChildBySibling(Ke), this.guard61Node = this.getChildBySibling($e), this.heart1Node = this.getChildBySibling(xe), this.heart2Node = this.getChildBySibling(Ve), this.dizzinessANode = this.getChildBySibling(He), this.dizzinessBNode = this.getChildBySibling(_e), this.manVomitNode = this.getChildBySibling(Oe), this.fightBoxNode = this.getChildBySibling(V), this.fight1Node = this.getChildBySibling(U), this.fight1BoxANode = this.getChildBySibling(R), this.fight1BoxBNode = this.getChildBySibling(M), this.fight2BoxANode = this.getChildBySibling(q), this.fight2BoxBNode = this.getChildBySibling(K), this.fightHoleNode = this.getChildBySibling(ze), this.fight1HoleNode = this.getChildBySibling(Re), this.fight2HoleNode = this.getChildBySibling(Ue), this.scissors1PhotoNode = this.getChildBySibling(Ee), this.scissors2PhotoNode = this.getChildBySibling(De), this.scissors1BoxNode = this.getChildBySibling(Me), this.scissors2BoxNode = this.getChildBySibling(qe), this.scissors1DogNode = this.getChildBySibling(je), this.scissors2DogNode = this.getChildBySibling(Ze), this.money1HoldNode = this.getChildBySibling(Fe), this.money1UnusedNode = this.getChildBySibling(ue), this.moneySceneNode = this.getChildBySibling(ae), this.slotPositions.length = 0, this.slotPositions.push((null == (t = this.employeeStartNode) ? void 0 : t.position.clone()) ?? new __rea_outer_i(-172, -262, 0), (null == (s = this.employeeTemplateNode) ? void 0 : s.position.clone()) ?? new __rea_outer_i(-307, -325, 0), (null == (o = this.employeeEndNode) ? void 0 : o.position.clone()) ?? new __rea_outer_i(-439, -393, 0)), this.nodeOrigins.clear(), [this.scissorsNode, this.clothesNode, this.mushroomNode, this.wrenchNode, this.skirtNode, this.hammerNode, this.photo2Node, this.photo3Node, this.employee1Node, this.employeeClimbNode, this.skirt1Node, this.dogNode, this.girl2Node, this.money1HoldNode].forEach(e => this.cacheOrigin(e)), this.logMissingNodes();
  }
  logMissingNodes() {
    var e;
    const t = [],
      i = (e, i) => {
        e || t.push(i);
      };
    i(this.gameNode, "UIPanel/gameNode"), i(this.backBgNode, "UIPanel/backBG"), i(this.promptBoxNode, "prompt_box"), i((null == (e = this.promptLabel) ? void 0 : e.node) ?? null, "prompt_box/Label"), i(this.employeeTemplateNode, "employee2"), i(this.employeeStartNode, "employeestart"), i(this.employeeEndNode, "employeeend"), i(this.boxTouchNode, "clicks/touch1"), i(this.scissorsTouchNode, "clicks/touchscissors"), i(this.hammerTouchNode, "clicks/touchhammer"), i(this.dogTouchNode, "clicks/touchdog"), i(this.guardNode, "security_guard"), i(this.scissorsNode, "scissors"), i(this.repairmanRightNode, "repairman_1_right"), t.length > 0 && console.warn("[Level_58] prefab 待办清单:", t.join(", "));
  }
}) || B;
__rea_outer_t._RF.pop();
export { __recovered_export_0 as default };
