// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_42.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { Vec3 as __rea_outer_i } from "cc";
import { Node as __rea_outer_s } from "cc";
import { tween as __rea_outer_o } from "cc";
import { UITransform as __rea_outer_h } from "cc";
import { Vec2 as __rea_outer_n } from "cc";
import { Label as __rea_outer_a } from "cc";
import { _decorator as __rea_outer_d } from "cc";
import { default as __rea_outer_l } from "./LevelBase";
import { default as __rea_outer_r } from "./clue-hit-tester";
import { default as __rea_outer_c } from "./AudioManager";
import { I18nController as __rea_outer_u } from "./i18n-controller";
import { UIManager as __rea_outer_N } from "./ui-manager";
import { UILayer as __rea_outer_g } from "./ui-layer";
import { UIHint as __rea_outer_p } from "./uihint";
import { UIFail as __rea_outer_f } from "./uifail";
import { GameController as __rea_outer_v } from "./GameController";
import { stopAllTweens as __rea_outer_b } from "./CocosCompat";
import { setNodeOpacity as __rea_outer_A } from "./CocosCompat";
import { getUIOpacity as __rea_outer_S } from "./CocosCompat";
import { default as __rea_outer_T } from "./clue-gesture-detector";
import { SwipeDirection as __rea_outer_C } from "./clue-level-types";
let __recovered_export_0;
var P;
__rea_outer_t._RF.push({}, "07675PAPm9MmYuvBGaQ0Ep7", "Level_42", void 0);
const {
    ccclass: m
  } = __rea_outer_d,
  y = {
    "42_1": "太热了，太阳快下山吧",
    "42_2": "终于挡住太阳了",
    "42_3": "这是救命水啊",
    "42_4": "板子挡光还挺管用",
    "42_5": "有风了，好舒服",
    "42_6": "凑合用它挡挡吧",
    "42_7": "还好有片树叶",
    "42_8": "这里还能躲一躲",
    "42_9": "终于凉快点了",
    "42_10": "可算是熬过来了"
  },
  I = ["level42_hint1", "level42_hint2", "level42_hint3", "level42_hint4", "level42_hint5", "level42_hint6", "level42_hint7", "level42_hint8"],
  _ = ["42_2", "42_3", "42_4", "42_5", "42_6", "42_7", "42_8", "42_9"];
__recovered_export_0 = m("Level_42")(P = class extends __rea_outer_l {
  constructor(...e) {
    super(...e), this.phase = 0, this.winstate = !1, this.gameNode = null, this.artRoot = null, this.backBgNode = null, this.bubbleNode = null, this.bubbleLabel = null, this.demoNode = null, this.clickRootNode = null, this.dialogBox1Node = null, this.bgNode = null, this.bg1Node = null, this.bg2Node = null, this.carNode = null, this.car1Node = null, this.surfboardNode = null, this.surfboard1Node = null, this.surfboard2Node = null, this.surfboard3Node = null, this.billboardNode = null, this.billboard1Node = null, this.billboard2Node = null, this.treeNode = null, this.tree1Node = null, this.tree2Node = null, this.tableNode = null, this.fanNode = null, this.fan1Node = null, this.fan2Node = null, this.fanButtonNode = null, this.fanButton1Node = null, this.chairNode = null, this.chairScarfNode = null, this.chairScarf1Node = null, this.girlScarf1Node = null, this.girlScarf11Node = null, this.girlScarf2Node = null, this.girlScarf21Node = null, this.sunNode = null, this.sun1Node = null, this.sun2Node = null, this.cloudNode = null, this.girlNode = null, this.girl1Node = null, this.girlCar1Node = null, this.girlTreeNode = null, this.moneyNode = null, this.money1Node = null, this.sweatNodes = [], this.isInteractionLocked = !1, this.isFanPanelOpen = !1, this.isFanCompleted = !1, this.hasPaidMoney = !1, this.hasFanPanelGestureStarted = !1, this.voiceToken = 0, this.poseToken = 0, this.currentDialogueKey = "", this.sweatIndex = 0, this.fanSwipeStart = null, this.activeDragState = null, this.girlOrigin = new __rea_outer_i(-16.5, -317, 0), this.sunLocalPos = new __rea_outer_i(390.5, 532.5, 0), this.tree1RestPos = new __rea_outer_i(-27, -4.5, 0), this.completedSteps = new Set(), this.onTouchStart = e => {
      if (1 !== this.phase || this.winstate) return;
      if (this.isFanPanelOpen || this.isInteractionLocked) return;
      const t = this.getTouchWorldPoint(e),
        i = this.hitTestPointer(t);
      if (i) {
        if ("click" === i.action.type) return this.openFanPanel(), void (e.propagationStopped = !0);
        this.beginDrag(i.node, i.action.kind, e), e.propagationStopped = !0;
      }
    }, this.onTouchMove = e => {
      if (this.activeDragState && 1 === this.phase && !this.isInteractionLocked) {
        const t = this.activeDragState;
        this.setDragNodePositionFromTouch(e, t.dragNode, t.dragParent, t.touchOffset), e.propagationStopped = !0;
      }
    }, this.onTouchEnd = e => {
      if (1 !== this.phase || this.winstate) return void this.resetActiveDrag();
      if (this.isFanPanelOpen || !this.activeDragState || this.isInteractionLocked) return void this.resetActiveDrag();
      const t = this.activeDragState;
      this.activeDragState = null, this.handleDragDrop(t), e.propagationStopped = !0;
    }, this.onFanPanelTouchStart = e => {
      if (!this.isFanPanelOpen) return;
      this.hasFanPanelGestureStarted = !0;
      const t = this.getTouchWorldPoint(e);
      this.fanSwipeStart = this.isPointInsideNode(this.fanButtonNode, t) ? t : null;
    }, this.onFanPanelTouchEnd = e => {
      this.isFanPanelOpen && this.hasFanPanelGestureStarted && (this.handleFanPanelTouchEnd(e), e.propagationStopped = !0);
    }, this.tickSweat = () => {
      this.isValid && 0 !== this.sweatNodes.length && (this.showFrame(this.sweatNodes, this.sweatIndex), this.sweatIndex = (this.sweatIndex + 1) % this.sweatNodes.length);
    }, this.hideBubble = () => {
      this.isValid && this.setNodeActive(this.bubbleNode, !1);
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.allItemNum = 8, this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.enterPhase0();
  }
  onDestroy() {
    this.cleanupRuntime(), super.onDestroy();
  }
  handleTimeExpired() {
    return !!(this.phase >= 2 || this.winstate);
  }
  showHint() {
    if (1 !== this.phase) return;
    const e = this.resolveHintKey();
    if (!e) return;
    const t = __rea_outer_u.getInstance().getKey(e);
    __rea_outer_N.getInstance().showView(__rea_outer_p, void 0, {
      body: t
    });
  }
  getGameProgressSnapshot() {
    const e = this.completedSteps.size;
    return {
      progress: e / 8,
      label: `${e}/8`
    };
  }
  markAllTasksCompleted() {
    for (let e = 1; e <= 8; e += 1) this.completedSteps.add(e);
    this.hasInstallNum = 8;
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.isInteractionLocked = !1, this.isFanPanelOpen = !1, this.isFanCompleted = !1, this.hasPaidMoney = !1, this.hasFanPanelGestureStarted = !1, this.voiceToken = 0, this.poseToken = 0, this.currentDialogueKey = "", this.sweatIndex = 0, this.fanSwipeStart = null, this.activeDragState = null, this.completedSteps.clear(), this.hasInstallNum = 0, __rea_outer_c.stopVoice();
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_c.playMusic("bgm4", !0, .5), this.applyInitialVisibility(), this.startSweatLoop(), this.setInputBlocked(!0), __rea_outer_v.getInstance().refreshGameProgress(), this.playDialogue("42_1", () => {
      this.isValid && 0 === this.phase && (this.setInputBlocked(!1), this.enterPhase1());
    });
  }
  skipOpeningToPlay() {
    return 0 === this.phase && (this.voiceToken += 1, this.stopOpeningDialogue(), this.setInputBlocked(!1), this.enterPhase1(), !0);
  }
  enterPhase1() {
    0 === this.phase && (this.phase = 1, this.registerInteractionHandlers(), __rea_outer_v.getInstance().refreshGameProgress());
  }
  enterPhase2Success() {
    this.phase >= 2 || (this.phase = 2, this.winstate = !0, this.isInteractionLocked = !0, this.unregisterInteractionHandlers(), this.resetActiveDrag(), this.closeFanPanelNodes(), this.stopSweatLoop(), this.setInputBlocked(!0), __rea_outer_v.getInstance().pauseTimer(), this.playSunsetThenOutro());
  }
  beginTimeoutFail() {
    this.phase = 2, this.winstate = !1, this.isInteractionLocked = !0, this.cleanupRuntime(), __rea_outer_v.getInstance().pauseTimer(), __rea_outer_N.getInstance().showView(__rea_outer_f, __rea_outer_g.WIN_ANIMATION);
  }
  playSunsetThenOutro() {
    this.moveNodeOffscreenRight(this.sunNode), this.moveNodeOffscreenRight(this.sun1Node), this.moveNodeOffscreenRight(this.sun2Node), this.fadeInNode(this.bg1Node, .5), this.scheduleOnceIfValid(() => {
      2 === this.phase && (this.hideSunNodes(), this.setNodeActive(this.girlNode, !1), this.setNodeActive(this.girlCar1Node, !1), this.setNodeActive(this.girlTreeNode, !1), this.setNodeActive(this.girl1Node, !0), this.playDialogue("42_10", () => {
        this.isValid && 2 === this.phase && (this.setNodeActive(this.bubbleNode, !1), this.setNodeActive(this.bg2Node, !0), this.showLevelSuccess(1));
      }));
    }, .5);
  }
  applyInitialVisibility() {
    this.setNodeActive(this.clickRootNode, !1), this.setNodeActive(this.demoNode, !1), this.setNodeActive(this.dialogBox1Node, !1), this.setNodeActive(this.bgNode, !0), this.setNodeActive(this.bg1Node, !1), this.setNodeActive(this.bg2Node, !1), this.resetNodeOpacity(this.bg1Node), this.resetNodeOpacity(this.bg2Node), this.setNodeActive(this.carNode, !0), this.setNodeActive(this.car1Node, !1), this.setNodeActive(this.surfboardNode, !0), this.setNodeActive(this.surfboard1Node, !1), this.setNodeActive(this.surfboard2Node, !1), this.setNodeActive(this.surfboard3Node, !1), this.setNodeActive(this.billboardNode, !0), this.setNodeActive(this.billboard1Node, !1), this.setNodeActive(this.billboard2Node, !1), this.setNodeActive(this.treeNode, !0), this.setNodeActive(this.tree1Node, !1), this.setNodeActive(this.tree2Node, !1), this.setNodeActive(this.tableNode, !0), this.setNodeActive(this.fanNode, !0), this.setNodeActive(this.fan1Node, !1), this.setNodeActive(this.fan2Node, !1), this.setNodeActive(this.fanButtonNode, !1), this.setNodeActive(this.fanButton1Node, !1), this.setNodeActive(this.chairNode, !0), this.setNodeActive(this.chairScarfNode, !0), this.setNodeActive(this.chairScarf1Node, !1), this.setNodeActive(this.girlScarf1Node, !1), this.setNodeActive(this.girlScarf11Node, !1), this.setNodeActive(this.girlScarf2Node, !1), this.setNodeActive(this.girlScarf21Node, !1), this.setNodeActive(this.sunNode, !0), this.setNodeActive(this.sun1Node, !0), this.setNodeActive(this.sun2Node, !0), this.setNodeActive(this.cloudNode, !0), this.setNodeActive(this.girl1Node, !1), this.setNodeActive(this.girlCar1Node, !1), this.setNodeActive(this.girlTreeNode, !1), this.setNodeActive(this.moneyNode, !0), this.setNodeActive(this.money1Node, !1), this.setNodeActive(this.bubbleNode, !1), this.showGirlHot(!1);
  }
  registerInteractionHandlers() {
    this.node.on(__rea_outer_s.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(__rea_outer_s.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(__rea_outer_s.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(__rea_outer_s.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
  }
  unregisterInteractionHandlers() {
    var e;
    null != (e = this.node) && e.isValid && (this.node.off(__rea_outer_s.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(__rea_outer_s.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(__rea_outer_s.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(__rea_outer_s.EventType.TOUCH_CANCEL, this.onTouchEnd, this));
  }
  hitTestPointer(e) {
    const t = [];
    return this.pushClickHit(t, this.fanNode, e, !this.isFanCompleted && this.isStepAvailable(4)), this.pushDragHit(t, this.moneyNode, "money", e, !this.hasPaidMoney && this.isStepAvailable(2)), this.pushDragHit(t, this.car1Node, "coconut", e, this.hasPaidMoney && this.isStepAvailable(2)), this.pushDragHit(t, this.chairScarfNode, "scarf", e, this.isStepAvailable(1)), this.pushDragHit(t, this.surfboardNode, "surfboard", e, this.isStepAvailable(3)), this.pushDragHit(t, this.billboardNode, "billboard", e, this.isStepAvailable(5)), this.pushDragHit(t, this.cloudNode, "cloud", e, this.isStepAvailable(8)), this.pushDragHit(t, this.girlNode, "girl", e, this.isStepAvailable(7)), this.pushDragHit(t, this.treeNode, "leaf", e, this.isStepAvailable(6)), 0 === t.length ? null : (t.sort((e, t) => e.area - t.area), t[0]);
  }
  pushClickHit(e, t, i, s) {
    s && this.isPointInsideNode(t, i) && t && e.push({
      node: t,
      area: this.getNodeArea(t),
      action: {
        type: "click"
      }
    });
  }
  pushDragHit(e, t, i, s, o) {
    o && null != t && t.active && this.isPointInsideNode(t, s) && e.push({
      node: t,
      area: this.getNodeArea(t),
      action: {
        type: "drag",
        kind: i
      }
    });
  }
  beginDrag(e, t, i) {
    "girl" === t && this.stopSweatLoop(), this.isCloneDrag(t) ? this.beginCloneDrag(e, t, i) : this.beginSelfDrag(e, t, i);
  }
  beginCloneDrag(e, t, i) {
    const s = this.getCloneNode(t);
    if (null == s || !s.isValid) return;
    const o = "leaf" !== t;
    o && this.setNodeActive(e, !1);
    const h = s.parent;
    if (null == h || !h.isValid) return;
    const n = s.position.clone(),
      a = s.getSiblingIndex();
    this.setNodeActive(s, !0);
    const d = this.artRoot ?? h;
    s.setParent(d), "leaf" === t ? this.placeNodeAtTouch(s, d, i) : this.placeNodeAtWorld(s, d, e.worldPosition), s.setSiblingIndex(d.children.length - 1);
    const l = this.calculateTouchOffset(i, s, d);
    this.setDragNodePositionFromTouch(i, s, d, l), this.activeDragState = {
      dragNode: s,
      dragKind: t,
      dragParent: d,
      touchOffset: l,
      originParent: h,
      originPosition: n,
      originSiblingIndex: a,
      isClone: !0,
      sourceNode: e,
      hideSourceOnDrag: o
    };
  }
  beginSelfDrag(e, t, i) {
    const s = e.parent;
    if (null == s || !s.isValid) return;
    const o = e.position.clone(),
      h = e.getSiblingIndex(),
      n = e.worldPosition.clone(),
      a = this.artRoot ?? s;
    e.setParent(a), this.placeNodeAtWorld(e, a, n), e.setSiblingIndex(a.children.length - 1);
    const d = this.calculateTouchOffset(i, e, a);
    this.setDragNodePositionFromTouch(i, e, a, d), this.activeDragState = {
      dragNode: e,
      dragKind: t,
      dragParent: a,
      touchOffset: d,
      originParent: s,
      originPosition: o,
      originSiblingIndex: h,
      isClone: !1,
      sourceNode: null,
      hideSourceOnDrag: !1
    };
  }
  handleDragDrop(e) {
    this.isDragOnDropTarget(e) ? this.executeDragSuccess(e) : this.restoreDragNode(e);
  }
  isDragOnDropTarget(e) {
    return this.isNodeCenterInside(e.dragNode, this.getDropTarget(e.dragKind));
  }
  getDropTarget(e) {
    return "money" === e ? this.carNode : "girl" === e ? this.treeNode : "cloud" === e ? this.sunNode : this.girlNode;
  }
  executeDragSuccess(e) {
    switch ("coconut" !== e.dragKind && this.playActionSound(), e.dragKind) {
      case "scarf":
        return this.hideCloneKeepSourceHidden(e), void this.completeBurnStep(1, this.girlScarf1Node, this.girlScarf11Node);
      case "money":
        return void this.completeMoneyPurchase(e);
      case "coconut":
        return this.setNodeActive(e.dragNode, !1), void this.completeDrinkStep();
      case "surfboard":
        return this.hideCloneKeepSourceHidden(e), void this.completeBurnStep(3, this.surfboard2Node, this.surfboard3Node);
      case "billboard":
        return this.setNodeActive(e.dragNode, !1), void this.completeBurnStep(5, this.billboard1Node, this.billboard2Node);
      case "leaf":
        return this.snapCloneToRest(e, this.tree1RestPos), void this.completeBurnStep(6, this.tree1Node, this.tree2Node);
      case "girl":
        return this.restoreNodeTransform(e.dragNode, e), void this.completeTreeShadeStep();
      case "cloud":
        return this.snapCloudToSun(e), void this.completeCloudStep();
      default:
        this.restoreDragNode(e);
    }
  }
  completeMoneyPurchase(e) {
    this.hideCloneKeepSourceHidden(e), this.hasPaidMoney = !0, this.setNodeActive(this.car1Node, !0);
  }
  completeBurnStep(e, t, i) {
    this.lockInteraction(), this.setNodeActive(t, !0), this.resetNodeOpacity(i), this.setNodeActive(i, !1), this.showCoolPose(this.girl1Node), this.playCoolingVoice(_[e - 1]), this.markStepDone(e), this.scheduleBurnThenRestore(t, i);
  }
  completeDrinkStep() {
    this.lockInteraction(), this.showCoolPose(this.girlCar1Node), __rea_outer_c.playEffect_1("level42_2"), this.markStepDone(2), this.scheduleOnceIfValid(() => {
      1 === this.phase && this.playCoolingVoice(_[1]);
    }, .5), this.scheduleSimpleRestore();
  }
  completeTreeShadeStep() {
    this.lockInteraction(), this.showCoolPose(this.girlTreeNode), this.playCoolingVoice(_[6]), this.markStepDone(7), this.scheduleSimpleRestore();
  }
  completeCloudStep() {
    this.lockInteraction(), this.setNodeActive(this.sun2Node, !1), this.showCoolPose(this.girl1Node), this.playCoolingVoice(_[7]), this.markStepDone(8), this.poseToken += 1;
    const e = this.poseToken;
    this.scheduleOnceIfValid(() => {
      e === this.poseToken && 1 === this.phase && this.fadeOutNode(this.cloudNode, .5, () => {
        e === this.poseToken && 1 === this.phase && (this.setNodeActive(this.cloudNode, !1), this.resetNodeOpacity(this.cloudNode), this.setNodeActive(this.sun2Node, !0), this.finishCoolingRestore());
      });
    }, 1.5);
  }
  openFanPanel() {
    var e;
    this.isFanPanelOpen = !0, this.isInteractionLocked = !0, this.fanSwipeStart = null, this.hasFanPanelGestureStarted = !1, this.playActionSound(), this.setInputBlocked(!0), this.setNodeActive(this.fanButtonNode, !0), this.setNodeActive(this.fanButton1Node, !0), null != (e = this.fanButton1Node) && e.isValid && (this.fanButton1Node.angle = 0), this.registerFanPanelHandlers();
  }
  handleFanPanelTouchEnd(e) {
    if (!this.isFanPanelOpen) return;
    this.hasFanPanelGestureStarted = !1;
    const t = this.getTouchWorldPoint(e);
    if (this.fanSwipeStart) {
      const e = this.fanSwipeStart;
      return this.fanSwipeStart = null, void (__rea_outer_T.isSwipeMatching(e, t, __rea_outer_C.Left) && this.executeFanStrongWind());
    }
    this.cancelFanPanel();
  }
  cancelFanPanel() {
    this.closeFanPanelNodes(), this.isInteractionLocked = !1, this.setInputBlocked(!1);
  }
  executeFanStrongWind() {
    this.unregisterFanPanelHandlers(), this.isFanPanelOpen = !1, this.fanSwipeStart = null, this.hasFanPanelGestureStarted = !1, this.isFanCompleted = !0;
    const e = this.fanButton1Node;
    null != e && e.isValid && (__rea_outer_b(e), __rea_outer_o(e).to(.25, {
      angle: 90
    }).start()), this.scheduleOnceIfValid(() => {
      1 === this.phase && (this.setNodeActive(this.fanButtonNode, !1), this.setNodeActive(this.fanButton1Node, !1), this.setNodeActive(this.fanNode, !1), this.setNodeActive(this.fan1Node, !0), this.setNodeActive(this.fan2Node, !0), __rea_outer_c.playEffect_1("level42_3"), this.showCoolPose(this.girl1Node), this.playCoolingVoice(_[3]), this.markStepDone(4), this.scheduleSimpleRestore(() => {
        this.setNodeActive(this.fan1Node, !1), this.setNodeActive(this.fan2Node, !1), this.setNodeActive(this.fanNode, !0);
      }, 2));
    }, .5);
  }
  showCoolPose(e) {
    this.stopSweatLoop(), this.setNodeActive(this.girlNode, !1), this.setNodeActive(this.girl1Node, !1), this.setNodeActive(this.girlCar1Node, !1), this.setNodeActive(this.girlTreeNode, !1), this.setNodeActive(e, !0);
  }
  showGirlHot(e = !0) {
    var t;
    this.setNodeActive(this.girl1Node, !1), this.setNodeActive(this.girlCar1Node, !1), this.setNodeActive(this.girlTreeNode, !1), null != (t = this.girlNode) && t.isValid && this.girlNode.setPosition(this.girlOrigin), this.setNodeActive(this.girlNode, !0), e && this.startSweatLoop();
  }
  scheduleBurnThenRestore(e, t) {
    this.poseToken += 1;
    const i = this.poseToken;
    this.scheduleOnceIfValid(() => {
      i === this.poseToken && 1 === this.phase && this.fadeInNode(t, .5, () => {
        i === this.poseToken && 1 === this.phase && (this.setNodeActive(e, !1), this.setNodeActive(t, !1), this.resetNodeOpacity(t), this.finishCoolingRestore());
      });
    }, 1.5);
  }
  scheduleSimpleRestore(e, t = 1.5) {
    this.poseToken += 1;
    const i = this.poseToken;
    this.scheduleOnceIfValid(() => {
      i === this.poseToken && 1 === this.phase && (null == e || e(), this.finishCoolingRestore());
    }, t);
  }
  finishCoolingRestore() {
    this.showGirlHot(!0), this.completedSteps.size >= 8 ? this.enterPhase2Success() : (this.isInteractionLocked = !1, this.setInputBlocked(!1));
  }
  markStepDone(e) {
    this.completedSteps.has(e) || (this.completedSteps.add(e), this.hasInstallNum = this.completedSteps.size, __rea_outer_v.getInstance().refreshGameProgress());
  }
  isStepAvailable(e) {
    return !this.completedSteps.has(e);
  }
  startSweatLoop() {
    this.unschedule(this.tickSweat), this.sweatIndex = 0, this.tickSweat(), this.schedule(this.tickSweat, .5);
  }
  stopSweatLoop() {
    this.unschedule(this.tickSweat);
    for (let e = 0; e < this.sweatNodes.length; e += 1) this.setNodeActive(this.sweatNodes[e], !1);
  }
  showFrame(e, t) {
    for (let i = 0; i < e.length; i += 1) this.setNodeActive(e[i], i === t);
  }
  registerFanPanelHandlers() {
    var e;
    null != (e = this.node) && e.isValid && (this.node.on(__rea_outer_s.EventType.TOUCH_START, this.onFanPanelTouchStart, this, !0), this.node.on(__rea_outer_s.EventType.TOUCH_END, this.onFanPanelTouchEnd, this, !0), this.node.on(__rea_outer_s.EventType.TOUCH_CANCEL, this.onFanPanelTouchEnd, this, !0));
  }
  unregisterFanPanelHandlers() {
    var e;
    null != (e = this.node) && e.isValid && (this.node.off(__rea_outer_s.EventType.TOUCH_START, this.onFanPanelTouchStart, this, !0), this.node.off(__rea_outer_s.EventType.TOUCH_END, this.onFanPanelTouchEnd, this, !0), this.node.off(__rea_outer_s.EventType.TOUCH_CANCEL, this.onFanPanelTouchEnd, this, !0));
  }
  closeFanPanelNodes() {
    this.unregisterFanPanelHandlers(), this.isFanPanelOpen = !1, this.fanSwipeStart = null, this.hasFanPanelGestureStarted = !1, this.setNodeActive(this.fanButtonNode, !1), this.setNodeActive(this.fanButton1Node, !1);
  }
  lockInteraction() {
    this.isInteractionLocked = !0, this.setInputBlocked(!0);
  }
  playActionSound() {
    __rea_outer_c.playEffect_1("level42_1");
  }
  playCoolingVoice(e) {
    this.voiceToken += 1, this.stopCurrentDialogueEffect(), this.showBubble(e), __rea_outer_c.playVoice(e);
  }
  playDialogue(e, t) {
    this.voiceToken += 1;
    const i = this.voiceToken;
    this.showBubble(e);
    let s = !1;
    const o = () => {
        !s && this.isValid && i === this.voiceToken && (s = !0, this.unschedule(h), t());
      },
      h = () => {
        o();
      };
    this.scheduleOnce(h, 8), this.stopCurrentDialogueEffect(), this.currentDialogueKey = e, __rea_outer_c.playEffect_1(e, o);
  }
  stopCurrentDialogueEffect() {
    __rea_outer_c.stopVoice(), this.currentDialogueKey && (__rea_outer_c.stopOneEffect(this.currentDialogueKey), this.currentDialogueKey = "");
  }
  showBubble(e) {
    this.unschedule(this.hideBubble), this.bubbleLabel && (this.bubbleLabel.string = this.resolveI18nText(e, y[e] ?? e), this.setNodeActive(this.bubbleLabel.node, !0)), this.setNodeActive(this.bubbleNode, !0), this.scheduleOnce(this.hideBubble, 3);
  }
  resolveI18nText(e, t) {
    const i = __rea_outer_u.getInstance().getKey(e);
    return i && i !== e ? i : t;
  }
  resolveHintKey() {
    for (let e = 1; e <= 8; e += 1) if (!this.completedSteps.has(e)) return I[e - 1];
    return null;
  }
  resetActiveDrag() {
    this.activeDragState && (this.restoreDragNode(this.activeDragState), this.activeDragState = null);
  }
  restoreDragNode(e) {
    const t = e.dragNode;
    if (e.isClone) return this.setNodeActive(t, !1), this.restoreNodeTransform(t, e), void (e.hideSourceOnDrag && this.setNodeActive(e.sourceNode, !0));
    this.restoreNodeTransform(t, e), "girl" === e.dragKind && this.startSweatLoop();
  }
  restoreNodeTransform(e, t) {
    e.isValid && (e.setParent(t.originParent), e.setSiblingIndex(t.originSiblingIndex), e.setPosition(t.originPosition));
  }
  hideCloneKeepSourceHidden(e) {
    this.setNodeActive(e.dragNode, !1), this.restoreNodeTransform(e.dragNode, e);
  }
  snapCloneToRest(e, t) {
    const i = e.dragNode;
    this.restoreNodeTransform(i, e), i.isValid && (i.setPosition(t), this.setNodeActive(i, !0));
  }
  snapCloudToSun(e) {
    const t = e.dragNode;
    this.restoreNodeTransform(t, e), t.isValid && t.setPosition(this.sunLocalPos);
  }
  hideSunNodes() {
    this.setNodeActive(this.sunNode, !1), this.setNodeActive(this.sun1Node, !1), this.setNodeActive(this.sun2Node, !1);
  }
  moveNodeOffscreenRight(e) {
    var t;
    if (null == e || !e.isValid) return;
    const s = 540 + ((null == (t = e.getComponent(__rea_outer_h)) ? void 0 : t.width) ?? 0) / 2 + 40;
    __rea_outer_b(e), __rea_outer_o(e).to(.5, {
      position: new __rea_outer_i(s, e.position.y, e.position.z)
    }).start();
  }
  fadeInNode(e, t, i) {
    if (null == e || !e.isValid) return void (null == i || i());
    __rea_outer_b(e), __rea_outer_A(e, 0), this.setNodeActive(e, !0);
    const s = __rea_outer_S(e);
    __rea_outer_o(s).to(t, {
      opacity: 255
    }).call(() => {
      this.isValid && (null == i || i());
    }).start();
  }
  fadeOutNode(e, t, i) {
    if (null == e || !e.isValid) return void i();
    __rea_outer_b(e), __rea_outer_A(e, 255);
    const s = __rea_outer_S(e);
    __rea_outer_o(s).to(t, {
      opacity: 0
    }).call(() => {
      this.isValid && i();
    }).start();
  }
  resetNodeOpacity(e) {
    null != e && e.isValid && __rea_outer_A(e, 255);
  }
  cleanupRuntime() {
    this.unscheduleAllCallbacks(), this.unregisterInteractionHandlers(), this.voiceToken += 1, this.poseToken += 1, this.stopCurrentDialogueEffect(), this.resetActiveDrag(), this.closeFanPanelNodes(), this.stopSweatLoop(), this.stopTweenIfValid(this.fanButton1Node), this.stopTweenIfValid(this.sunNode), this.stopTweenIfValid(this.sun1Node), this.stopTweenIfValid(this.sun2Node), this.stopTweenIfValid(this.bg1Node), this.stopTweenIfValid(this.cloudNode), this.stopTweenIfValid(this.girlScarf11Node), this.stopTweenIfValid(this.surfboard3Node), this.stopTweenIfValid(this.billboard2Node), this.stopTweenIfValid(this.tree2Node);
  }
  stopTweenIfValid(e) {
    null != e && e.isValid && __rea_outer_b(e);
  }
  setInputBlocked(e) {
    this.setNodeActive(this.backBgNode, e);
  }
  scheduleOnceIfValid(e, t) {
    this.scheduleOnce(() => {
      this.isValid && e();
    }, t);
  }
  isPointInsideNode(e, t) {
    if (null == e || !e.isValid || !e.activeInHierarchy) return !1;
    const i = e.getComponent(__rea_outer_h);
    return !!i && i.getBoundingBoxToWorld().contains(t);
  }
  isNodeCenterInside(e, t) {
    return __rea_outer_r.isDragNearTarget(e, t);
  }
  getNodeArea(e) {
    const t = e.getComponent(__rea_outer_h);
    return t ? Math.max(1, t.width * t.height) : Number.MAX_SAFE_INTEGER;
  }
  getTouchWorldPoint(e) {
    const t = e.getUILocation();
    return new __rea_outer_n(t.x, t.y);
  }
  getTouchLocalPosition(e, t) {
    const s = e.getUILocation(),
      o = t.getComponent(__rea_outer_h);
    return o ? o.convertToNodeSpaceAR(new __rea_outer_i(s.x, s.y, 0)) : __rea_outer_i.ZERO.clone();
  }
  calculateTouchOffset(e, t, s) {
    const o = this.getTouchLocalPosition(e, s);
    return new __rea_outer_i(t.position.x - o.x, t.position.y - o.y, 0);
  }
  setDragNodePositionFromTouch(e, t, i, s) {
    const o = this.getTouchLocalPosition(e, i);
    t.setPosition(o.x + s.x, o.y + s.y, t.position.z);
  }
  placeNodeAtWorld(e, t, i) {
    const s = t.getComponent(__rea_outer_h);
    s && e.setPosition(s.convertToNodeSpaceAR(i));
  }
  placeNodeAtTouch(e, t, i) {
    e.setPosition(this.getTouchLocalPosition(i, t));
  }
  setNodeActive(e, t) {
    null != e && e.isValid && (e.active = t);
  }
  isCloneDrag(e) {
    return "scarf" === e || "money" === e || "surfboard" === e || "leaf" === e;
  }
  getCloneNode(e) {
    return "scarf" === e ? this.chairScarf1Node : "money" === e ? this.money1Node : "surfboard" === e ? this.surfboard1Node : "leaf" === e ? this.tree1Node : null;
  }
  getArtChild(e) {
    var t;
    return (null == (t = this.artRoot) ? void 0 : t.getChildByName(e)) ?? null;
  }
  copyNodePosition(e, t) {
    null != e && e.isValid && t.set(e.position);
  }
  resolveReferences() {
    var e, t;
    this.gameNode = this.node.getChildByPath("UIPanel/gameNode"), this.artRoot = this.node.getChildByPath("UIPanel/gameNode/42"), this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.bubbleNode = this.node.getChildByPath("UIPanel/bubble"), this.demoNode = this.node.getChildByPath("UIPanel/demo"), this.clickRootNode = this.node.getChildByPath("UIPanel/click_root"), this.dialogBox1Node = (null == (e = this.bubbleNode) ? void 0 : e.getChildByName("dialog_box_1")) ?? null, this.bubbleLabel = (null == (t = this.bubbleNode) || null == (t = t.getChildByPath("dialog_box/Label")) ? void 0 : t.getComponent(__rea_outer_a)) ?? null, this.bgNode = this.getArtChild("bg"), this.bg1Node = this.getArtChild("bg_1"), this.bg2Node = this.getArtChild("bg_2"), this.carNode = this.getArtChild("car"), this.car1Node = this.getArtChild("car_1"), this.surfboardNode = this.getArtChild("surfboard"), this.surfboard1Node = this.getArtChild("surfboard_1"), this.surfboard2Node = this.getArtChild("surfboard_2"), this.surfboard3Node = this.getArtChild("surfboard_3"), this.billboardNode = this.getArtChild("billboard"), this.billboard1Node = this.getArtChild("billboard_1"), this.billboard2Node = this.getArtChild("billboard_2"), this.treeNode = this.getArtChild("tree"), this.tree1Node = this.getArtChild("tree_1"), this.tree2Node = this.getArtChild("tree_2"), this.tableNode = this.getArtChild("table"), this.fanNode = this.getArtChild("fan"), this.fan1Node = this.getArtChild("fan_1"), this.fan2Node = this.getArtChild("fan_2"), this.fanButtonNode = this.getArtChild("fan_button"), this.fanButton1Node = this.getArtChild("fan_button_1"), this.chairNode = this.getArtChild("chair"), this.chairScarfNode = this.getArtChild("chair_scarf"), this.chairScarf1Node = this.getArtChild("chair_scarf_1"), this.girlScarf1Node = this.getArtChild("girl_scarf_1"), this.girlScarf11Node = this.getArtChild("girl_scarf_1_1"), this.girlScarf2Node = this.getArtChild("girl_scarf_2"), this.girlScarf21Node = this.getArtChild("girl_scarf_2_1"), this.sunNode = this.getArtChild("sun"), this.sun1Node = this.getArtChild("sun1"), this.sun2Node = this.getArtChild("sun2"), this.cloudNode = this.getArtChild("cloud"), this.girlNode = this.getArtChild("girl"), this.girl1Node = this.getArtChild("girl_1"), this.girlCar1Node = this.getArtChild("girl_car_1"), this.girlTreeNode = this.getArtChild("girl_tree"), this.moneyNode = this.getArtChild("money"), this.money1Node = this.getArtChild("money_1"), this.sweatNodes = [this.getArtChild("girl_qi"), this.getArtChild("girl_qi1")].filter(e => null !== e), this.copyNodePosition(this.girlNode, this.girlOrigin), this.copyNodePosition(this.sunNode, this.sunLocalPos), this.copyNodePosition(this.tree1Node, this.tree1RestPos), this.logMissingNodes();
  }
  logMissingNodes() {
    const e = [],
      t = (t, i) => {
        t || e.push(i);
      };
    t(this.gameNode, "UIPanel/gameNode"), t(this.artRoot, "UIPanel/gameNode/42"), t(this.backBgNode, "UIPanel/backBG"), t(this.bubbleNode, "UIPanel/bubble"), t(this.girlNode, "42/girl"), t(this.fanNode, "42/fan"), t(this.fanButtonNode, "42/fan_button"), t(this.chairScarfNode, "42/chair_scarf"), t(this.moneyNode, "42/money"), t(this.carNode, "42/car"), t(this.treeNode, "42/tree"), t(this.sunNode, "42/sun"), t(this.cloudNode, "42/cloud"), e.length > 0 && console.warn("[Level_42] prefab 待办清单:", e.join(", "));
  }
}) || P;
__rea_outer_t._RF.pop();
export { __recovered_export_0 as default };
