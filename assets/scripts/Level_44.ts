// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_44.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { Vec3 as __rea_outer_i } from "cc";
import { UITransform as __rea_outer_s } from "cc";
import { Node as __rea_outer_o } from "cc";
import { tween as __rea_outer_h } from "cc";
import { Vec2 as __rea_outer_n } from "cc";
import { Label as __rea_outer_d } from "cc";
import { _decorator as __rea_outer_l } from "cc";
import { default as __rea_outer_r } from "./LevelBase";
import { default as __rea_outer_a } from "./clue-hit-tester";
import { default as __rea_outer_c } from "./AudioManager";
import { I18nController as __rea_outer_u } from "./i18n-controller";
import { UIManager as __rea_outer_g } from "./ui-manager";
import { UILayer as __rea_outer_N } from "./ui-layer";
import { UIHint as __rea_outer_p } from "./uihint";
import { UIFail as __rea_outer_m } from "./uifail";
import { GameController as __rea_outer_v } from "./GameController";
import { stopAllTweens as __rea_outer_b } from "./CocosCompat";
let __recovered_export_0;
var S;
__rea_outer_t._RF.push({}, "b14e4SgfJFNL6jjRMDeRPAB", "Level_44", void 0);
const {
    ccclass: k
  } = __rea_outer_l,
  f = 10,
  y = new __rea_outer_i(193.892, 451.464, 0),
  A = new __rea_outer_i(42.554, -367.946, 0),
  I = new __rea_outer_i(141.26, 100.5, 0),
  D = new __rea_outer_i(13.343, -616.834, 0),
  P = ["level44_hint1", "level44_hint2", "level44_hint3", "level44_hint4", "level44_hint5", "level44_hint6", "level44_hint7", "level44_hint8", "level44_hint9", "level44_hint10"],
  _ = [{
    step: 1,
    sourceName: "baseball_bat",
    rungName: "baseball_bat_1",
    kind: "item"
  }, {
    step: 2,
    sourceName: "phone_holder",
    rungName: "phone_holder_1",
    kind: "item"
  }, {
    step: 3,
    sourceName: "doll",
    rungName: "doll_1",
    kind: "item"
  }, {
    step: 4,
    sourceName: "cloud",
    rungName: "cloud_1",
    kind: "item"
  }, {
    step: 5,
    sourceName: "iron_chain",
    rungName: "iron_chain_1",
    kind: "item"
  }, {
    step: 6,
    sourceName: "wisteria",
    rungName: "wisteria_1",
    kind: "item"
  }, {
    step: 8,
    sourceName: "orbit",
    rungName: "orbit_1",
    kind: "item"
  }],
  C = ["baseball_bat_1", "phone_holder_1", "doll_1", "cloud_1", "iron_chain_1", "wisteria_1", "stick_1", "orbit_1", "headphones_1", "box_1_1"],
  T = ["hammer_1", "bucket_1"];
__recovered_export_0 = k("Level_44")(S = class extends __rea_outer_r {
  constructor(...e) {
    super(...e), this.phase = 0, this.winstate = !1, this.gameNode = null, this.backBgNode = null, this.bubbleNode = null, this.bubbleLabel = null, this.dialogBox1Node = null, this.demoNode = null, this.clickRootNode = null, this.feetTouchNode = null, this.girlNode = null, this.girlUpperBodyNode = null, this.girlLegNodes = [], this.shiverNode = null, this.shiver1Node = null, this.shiver2Node = null, this.shiver3Node = null, this.girlFailureNode = null, this.headphones1Node = null, this.headphonesTouchNode = null, this.headphonesNode = null, this.headphones1NodeRung = null, this.zombieNode = null, this.zombie1Node = null, this.bucketANode = null, this.bucketBNode = null, this.bucket1Node = null, this.sleepNode = null, this.hammerNode = null, this.hammer1Node = null, this.boxNode = null, this.box1Node = null, this.box11Node = null, this.stickNode = null, this.stick1Node = null, this.endNode = null, this.maskNode = null, this.failure1Node = null, this.zombieEndNode = null, this.sourceNodes = new Map(), this.rungNodes = new Map(), this.isInteractionLocked = !1, this.hasBoxOpened = !1, this.hasHammerAsRung = !1, this.hasZombieWoken = !1, this.isDescending = !1, this.descentCount = 0, this.placedSlotCount = 0, this.legFrameIndex = 0, this.shiverFrameIndex = 0, this.voiceToken = 0, this.currentDialogueKey = "", this.activeDragState = null, this.shiverPair = null, this.descentQueue = [], this.completedSteps = new Set(), this.rungSlotPositions = [], this.rungOriginPositions = new Map(), this.hammerOrigin = new __rea_outer_i(116, -408, 0), this.headphonesOrigin = new __rea_outer_i(162.5, 552.5, 0), this.sleepOriginScale = new __rea_outer_i(1, 1, 1), this.onTouchStart = e => {
      if (1 !== this.phase || this.winstate || this.isInteractionLocked) return;
      const t = this.hitTestPointer(this.getTouchWorldPoint(e));
      t && (this.beginDrag(t, e), e.propagationStopped = !0);
    }, this.onTouchMove = e => {
      if (!this.activeDragState || 1 !== this.phase || this.isInteractionLocked) return;
      const t = this.activeDragState;
      this.setDragNodePositionFromTouch(e, t.dragNode, t.dragParent, t.touchOffset), e.propagationStopped = !0;
    }, this.onTouchEnd = e => {
      if (1 !== this.phase || this.winstate || this.isInteractionLocked) return void this.resetActiveDrag();
      if (!this.activeDragState) return;
      const t = this.activeDragState;
      this.activeDragState = null, this.handleDragDrop(t), e.propagationStopped = !0;
    }, this.tickLegFrame = () => {
      this.isValid && this.isDescending && 0 !== this.girlLegNodes.length && (this.legFrameIndex = (this.legFrameIndex + 1) % this.girlLegNodes.length, this.showLegFrame(this.legFrameIndex));
    }, this.tickShiver = () => {
      this.isValid && this.shiverPair && (this.shiverFrameIndex = 1 - this.shiverFrameIndex, this.setNodeActive(this.shiverPair[0], 0 === this.shiverFrameIndex), this.setNodeActive(this.shiverPair[1], 1 === this.shiverFrameIndex));
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.allItemNum = f, this.hasInstallNum = 0;
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
    const t = __rea_outer_u.getInstance().getKey(e);
    __rea_outer_g.getInstance().showView(__rea_outer_p, void 0, {
      body: t
    });
  }
  getGameProgressSnapshot() {
    const e = this.hasInstallNum;
    return {
      progress: e / f,
      label: `${e}/10`
    };
  }
  markAllTasksCompleted() {
    for (let e = 1; e <= f; e += 1) this.completedSteps.add(e);
    this.hasInstallNum = f;
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.isInteractionLocked = !1, this.hasBoxOpened = !1, this.hasHammerAsRung = !1, this.hasZombieWoken = !1, this.isDescending = !1, this.descentCount = 0, this.placedSlotCount = 0, this.legFrameIndex = 0, this.shiverFrameIndex = 0, this.voiceToken = 0, this.currentDialogueKey = "", this.activeDragState = null, this.shiverPair = null, this.descentQueue.length = 0, this.completedSteps.clear(), this.hasInstallNum = 0, __rea_outer_c.stopVoice();
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_c.playMusic("bgm2", !0, .5), this.applyInitialVisibility(), this.startShiverSwap(this.shiverNode, this.shiver1Node), this.startSleepScale(), this.setInputBlocked(!0), __rea_outer_v.getInstance().refreshGameProgress(), this.scheduleOnce(() => {
      this.isValid && 0 === this.phase && this.playDialogue("44_1", "这是哪里，我的想办法下去", () => {
        this.isValid && 0 === this.phase && (this.setNodeActive(this.bubbleNode, !1), this.setInputBlocked(!1), this.enterPhase1());
      });
    }, .25);
  }
  skipOpeningToPlay() {
    return 0 === this.phase && (this.voiceToken += 1, this.stopOpeningDialogue(), this.setNodeActive(this.bubbleNode, !1), this.setInputBlocked(!1), this.enterPhase1(), !0);
  }
  enterPhase1() {
    0 === this.phase && (this.phase = 1, this.switchToClimbingGirl(), this.registerInteractionHandlers(), __rea_outer_v.getInstance().refreshGameProgress());
  }
  enterPhase2Success() {
    var e;
    this.phase >= 2 || (this.phase = 2, this.winstate = !0, this.isInteractionLocked = !0, this.unregisterInteractionHandlers(), this.resetActiveDrag(), this.stopShiverSwap(), this.stopLegCycle(), this.setInputBlocked(!0), __rea_outer_v.getInstance().pauseTimer(), null != (e = this.girlUpperBodyNode) && e.isValid && this.girlUpperBodyNode.setPosition(A), this.bringNodeToFront(this.endNode), this.setNodeActive(this.endNode, !0), this.showLevelSuccess(1));
  }
  enterPhase2BucketFail() {
    this.phase >= 2 || (this.beginFailCommon(), this.setNodeActive(this.girlUpperBodyNode, !1), this.setNodeActive(this.girlFailureNode, !0), __rea_outer_c.playEffect_1("level44_2"), this.scheduleOnceIfValid(() => {
      this.playFailMaskSequence();
    }, .5));
  }
  enterPhase2HammerFail() {
    this.phase >= 2 || (this.setNodeActive(this.hammerNode, !1), this.beginFailCommon(), this.scheduleOnceIfValid(() => {
      this.playFailMaskSequence();
    }, .5));
  }
  beginFailCommon() {
    this.phase = 2, this.winstate = !1, this.isInteractionLocked = !0, this.descentQueue.length = 0, this.isDescending = !1, this.unregisterInteractionHandlers(), this.resetActiveDrag(), this.stopShiverSwap(), this.stopLegCycle(), this.stopSleepScale(), this.stopTweenIfValid(this.girlUpperBodyNode), this.setInputBlocked(!0), __rea_outer_v.getInstance().pauseTimer();
  }
  beginTimeoutFail() {
    this.phase = 2, this.winstate = !1, this.isInteractionLocked = !0, this.cleanupRuntime(), __rea_outer_v.getInstance().pauseTimer(), __rea_outer_g.getInstance().showView(__rea_outer_m, __rea_outer_N.WIN_ANIMATION);
  }
  playFailMaskSequence() {
    this.isValid && 2 === this.phase && (this.setNodeActive(this.failure1Node, !1), this.presentZombieEndPortrait(), this.scheduleOnceIfValid(() => {
      this.bringNodeToFront(this.maskNode), this.setNodeActive(this.maskNode, !0), this.setNodeActive(this.failure1Node, !0), __rea_outer_c.playEffect_1("level44_4"), this.scheduleOnceIfValid(() => {
        __rea_outer_g.getInstance().showView(__rea_outer_m, __rea_outer_N.WIN_ANIMATION);
      }, 1);
    }, .5));
  }
  presentZombieEndPortrait() {
    const e = this.zombieEndNode,
      t = this.gameNode ?? this.node;
    if (null == e || !e.isValid || null == t || !t.isValid) return;
    const i = e.worldPosition.clone();
    e.setParent(t);
    const o = t.getComponent(__rea_outer_s);
    o && e.setPosition(o.convertToNodeSpaceAR(i)), e.setSiblingIndex(t.children.length - 1), this.setNodeActive(e, !0), __rea_outer_c.playEffect_1("level44_3");
  }
  switchToClimbingGirl() {
    var e;
    this.stopShiverSwap(), this.setNodeActive(this.girlNode, !1), this.setNodeActive(this.shiverNode, !1), this.setNodeActive(this.shiver1Node, !1), null != (e = this.girlUpperBodyNode) && e.isValid && this.girlUpperBodyNode.setPosition(y), this.setNodeActive(this.girlUpperBodyNode, !0), this.setNodeActive(this.headphones1Node, !0), this.showLegFrame(0), this.startShiverSwap(this.shiver2Node, this.shiver3Node);
  }
  applyInitialVisibility() {
    this.setNodeActive(this.demoNode, !1), this.setNodeActive(this.clickRootNode, !1), this.setNodeActive(this.dialogBox1Node, !1), this.setNodeActive(this.endNode, !1), this.setNodeActive(this.maskNode, !1), this.setNodeActive(this.girlFailureNode, !1), this.setNodeActive(this.girlUpperBodyNode, !1), this.setNodeActive(this.headphonesNode, !1), this.setNodeActive(this.box1Node, !1), this.setNodeActive(this.stickNode, !1), this.setNodeActive(this.zombie1Node, !1), this.setNodeActive(this.bucketBNode, !1), this.restoreRungOrigins(), this.setNodeActive(this.hammer1Node, !1), this.setNodeActive(this.bucket1Node, !1), this.setNodeActive(this.box11Node, !1), this.setNodeActive(this.stick1Node, !1), this.setNodeActive(this.headphones1NodeRung, !1), this.sourceNodes.forEach(e => {
      this.setNodeActive(e, !0);
    }), this.rungNodes.forEach(e => {
      this.setNodeActive(e, !1);
    }), this.setNodeActive(this.girlNode, !0), this.setNodeActive(this.shiverNode, !0), this.setNodeActive(this.shiver1Node, !1), this.setNodeActive(this.zombieNode, !0), this.setNodeActive(this.bucketANode, !0), this.setNodeActive(this.sleepNode, !0), this.setNodeActive(this.hammerNode, !0), this.setNodeActive(this.boxNode, !0), this.setNodeActive(this.feetTouchNode, !0), this.restoreHammerOrigin(), this.restoreHeadphonesOrigin(), this.restoreSleepScale(), this.setNodeActive(this.bubbleNode, !1);
  }
  registerInteractionHandlers() {
    this.node.on(__rea_outer_o.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(__rea_outer_o.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(__rea_outer_o.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(__rea_outer_o.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
  }
  unregisterInteractionHandlers() {
    var e;
    null != (e = this.node) && e.isValid && (this.node.off(__rea_outer_o.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(__rea_outer_o.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(__rea_outer_o.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(__rea_outer_o.EventType.TOUCH_CANCEL, this.onTouchEnd, this));
  }
  hitTestPointer(e) {
    const t = [];
    return this.pushHeadphonesHit(t, e), this.pushItemHits(t, e), this.pushDragHit(t, this.hammerNode, this.hammerNode, "hammer", e, this.canDragHammer()), this.pushDragHit(t, this.stickNode, this.stickNode, "stick", e, this.hasBoxOpened && !this.completedSteps.has(7)), this.pushDragHit(t, this.box1Node, this.box1Node, "boxDebris", e, this.hasBoxOpened && !this.completedSteps.has(10)), this.pushActiveBucketHit(t, e), 0 === t.length ? null : (t.sort((e, t) => e.area - t.area), t[0]);
  }
  pushItemHits(e, t) {
    for (const i of _) {
      const s = this.sourceNodes.get(i.step) ?? null;
      this.pushDragHit(e, s, s, i.kind, t, !this.completedSteps.has(i.step));
    }
  }
  pushHeadphonesHit(e, t) {
    this.completedSteps.has(9) || this.pushDragHit(e, this.headphonesNode, this.headphones1Node, "headphones", t, !0, this.headphonesTouchNode);
  }
  pushActiveBucketHit(e, t) {
    const i = this.getActiveBucket();
    this.pushDragHit(e, i, i, "bucket", t, null !== i);
  }
  pushDragHit(e, t, i, s, o, h, n = i) {
    h && t && i && this.isPointInsideNode(n, o) && e.push({
      dragNode: t,
      sourceNode: i,
      kind: s,
      area: this.getNodeArea(n ?? i)
    });
  }
  beginDrag(e, t) {
    "headphones" !== e.kind ? this.beginNodeDrag(e.dragNode, e.sourceNode, e.kind, t) : this.beginHeadphonesDrag(t);
  }
  beginHeadphonesDrag(e) {
    const t = this.headphonesNode,
      i = this.headphones1Node,
      s = this.gameNode;
    if (null == t || !t.isValid || null == i || !i.isValid || null == s || !s.isValid) return;
    const o = i.worldPosition.clone();
    this.setNodeActive(i, !1), this.setNodeActive(t, !0), t.setParent(s), this.placeNodeAtWorld(t, s, o), t.setSiblingIndex(s.children.length - 1);
    const h = this.calculateTouchOffset(e, t, s);
    this.setDragNodePositionFromTouch(e, t, s, h), this.activeDragState = {
      dragNode: t,
      dragKind: "headphones",
      sourceNode: i,
      dragParent: s,
      touchOffset: h,
      originParent: s,
      originPosition: this.headphonesOrigin.clone(),
      originWorldPosition: o,
      originSiblingIndex: t.getSiblingIndex()
    };
  }
  beginNodeDrag(e, t, i, s) {
    const o = e.parent;
    if (null == o || !o.isValid) return;
    const h = e.position.clone(),
      n = e.worldPosition.clone(),
      d = e.getSiblingIndex(),
      l = this.gameNode ?? o;
    e.setParent(l), this.placeNodeAtWorld(e, l, n), e.setSiblingIndex(l.children.length - 1);
    const r = this.calculateTouchOffset(s, e, l);
    this.setDragNodePositionFromTouch(s, e, l, r), this.activeDragState = {
      dragNode: e,
      dragKind: i,
      sourceNode: t,
      dragParent: l,
      touchOffset: r,
      originParent: o,
      originPosition: h,
      originWorldPosition: n,
      originSiblingIndex: d
    };
  }
  handleDragDrop(e) {
    __rea_outer_i.distance(e.dragNode.worldPosition, e.originWorldPosition) < 60 ? this.restoreDragOrHeadphones(e) : "hammer" !== e.dragKind ? "headphones" !== e.dragKind ? "bucket" !== e.dragKind ? "stick" !== e.dragKind ? "boxDebris" !== e.dragKind ? this.handleConfiguredItemDrop(e) : this.handleBoxDebrisDrop(e) : this.handleSimpleLadderDrop(e, 7, this.stickNode, this.stick1Node, !0) : this.handleBucketDrop(e) : this.handleHeadphonesDrop(e) : this.handleHammerDrop(e);
  }
  handleConfiguredItemDrop(e) {
    const t = _.find(t => this.sourceNodes.get(t.step) === e.sourceNode);
    t ? this.handleSimpleLadderDrop(e, t.step, this.sourceNodes.get(t.step) ?? null, this.rungNodes.get(t.step) ?? null, !0) : this.restoreDragNode(e);
  }
  handleSimpleLadderDrop(e, t, i, s, o) {
    this.isNodeCenterInside(e.dragNode, this.feetTouchNode) && !this.completedSteps.has(t) ? (this.restoreDragNode(e), this.placeLadderRung(i, s, t, o, !1)) : this.restoreDragNode(e);
  }
  handleBoxDebrisDrop(e) {
    this.completedSteps.has(7) && this.isNodeCenterInside(e.dragNode, this.feetTouchNode) ? this.handleSimpleLadderDrop(e, 10, this.box1Node, this.box11Node, !0) : this.restoreDragNode(e);
  }
  handleHeadphonesDrop(e) {
    const t = this.isNodeCenterInside(e.dragNode, this.feetTouchNode);
    this.restoreHeadphonesOrigin(), this.setNodeActive(this.headphonesNode, !1), t ? (this.setNodeActive(this.headphones1Node, !1), this.placeLadderRung(null, this.headphones1NodeRung, 9, !0, !1)) : this.setNodeActive(this.headphones1Node, !0);
  }
  handleBucketDrop(e) {
    this.isNodeCenterInside(e.dragNode, this.feetTouchNode) ? (this.restoreDragNode(e), this.setNodeActive(this.bucketANode, !1), this.setNodeActive(this.bucketBNode, !1), this.placeLadderRung(null, this.bucket1Node, 0, !1, !0)) : this.restoreDragNode(e);
  }
  handleHammerDrop(e) {
    var t;
    return this.isNodeCenterInside(e.dragNode, this.getActiveZombie()) ? (this.restoreDragNode(e), void this.enterPhase2HammerFail()) : null != (t = this.boxNode) && t.activeInHierarchy && this.isNodeCenterInside(e.dragNode, this.boxNode) ? (this.restoreDragNode(e), void this.openBoxWithHammer()) : this.isNodeCenterInside(e.dragNode, this.feetTouchNode) ? (this.restoreDragNode(e), void this.placeHammerAsRung()) : void this.restoreDragNode(e);
  }
  openBoxWithHammer() {
    this.hasBoxOpened = !0, this.setNodeActive(this.hammerNode, !1), this.setNodeActive(this.boxNode, !1), this.setNodeActive(this.box1Node, !0), this.setNodeActive(this.stickNode, !0), this.playPlaceSound();
  }
  placeHammerAsRung() {
    this.hasHammerAsRung = !0, this.setNodeActive(this.hammerNode, !1), this.placeLadderRung(null, this.hammer1Node, 0, !0, !1);
  }
  placeLadderRung(e, t, i, s, o) {
    this.setNodeActive(e, !1);
    const h = this.placedSlotCount;
    this.assignRungToSlot(t, h), this.placedSlotCount += 1, this.setNodeActive(t, !0), this.playPlaceSound(), s && (i > 0 && this.completedSteps.add(i), this.refreshProgressCount(), __rea_outer_v.getInstance().refreshGameProgress()), this.enqueueDescent(h, o);
  }
  assignRungToSlot(e, t) {
    if (null == e || !e.isValid) return;
    const i = this.rungSlotPositions[t];
    i && e.setPosition(i);
  }
  enqueueDescent(e, t) {
    this.descentCount += 1, this.descentQueue.push({
      delta: this.getGirlStepDelta(e),
      isBucketTrap: t
    }), this.isDescending || this.playNextDescent();
  }
  playNextDescent() {
    const e = this.descentQueue.shift();
    if (!e) return this.isDescending = !1, this.stopLegCycle(), void this.tryEnterSuccess();
    this.isDescending = !0, this.startLegCycle();
    const t = this.girlUpperBodyNode,
      s = (null == t ? void 0 : t.position) ?? y,
      o = new __rea_outer_i(s.x + e.delta.x, s.y + e.delta.y, s.z);
    this.tweenGirlTo(o, () => {
      if (this.isValid) {
        if (this.onDescentFinished(e), 1 !== this.phase) return this.isDescending = !1, this.descentQueue.length = 0, void this.stopLegCycle();
        this.playNextDescent();
      }
    });
  }
  onDescentFinished(e) {
    this.hasZombieWoken || this.wakeZombie(), e.isBucketTrap && this.enterPhase2BucketFail();
  }
  tryEnterSuccess() {
    1 === this.phase && this.completedSteps.size >= f && this.enterPhase2Success();
  }
  getGirlStepDelta(e) {
    if (e < 0 || this.rungSlotPositions.length < 2) return new __rea_outer_i();
    if (0 === e) {
      const e = this.rungSlotPositions[0],
        t = this.rungSlotPositions[1] ?? e;
      return new __rea_outer_i(t.x - e.x, t.y - e.y, 0);
    }
    const t = this.rungSlotPositions[e],
      s = this.rungSlotPositions[e - 1];
    return t && s ? new __rea_outer_i(t.x - s.x, t.y - s.y, 0) : new __rea_outer_i();
  }
  tweenGirlTo(e, t) {
    const i = this.girlUpperBodyNode;
    null != i && i.isValid ? (this.stopTweenIfValid(i), __rea_outer_h(i).to(.5, {
      position: e
    }).call(t).start()) : t();
  }
  wakeZombie() {
    var e, t;
    this.hasZombieWoken = !0, (null == (e = this.activeDragState) ? void 0 : e.sourceNode) === this.bucketANode && this.resetActiveDrag(), this.setNodeActive(this.zombieNode, !1), this.setNodeActive(this.bucketANode, !1), this.stopSleepScale(), this.setNodeActive(this.sleepNode, !1), this.setNodeActive(this.zombie1Node, !0), this.setNodeActive(this.bucketBNode, !(null != (t = this.bucket1Node) && t.active));
  }
  canDragHammer() {
    var e;
    return !this.hasBoxOpened && !this.hasHammerAsRung && !(null == (e = this.hammerNode) || !e.active);
  }
  getActiveBucket() {
    var e, t;
    return null != (e = this.bucketANode) && e.activeInHierarchy ? this.bucketANode : null != (t = this.bucketBNode) && t.activeInHierarchy ? this.bucketBNode : null;
  }
  getActiveZombie() {
    var e, t;
    return null != (e = this.zombie1Node) && e.activeInHierarchy ? this.zombie1Node : null != (t = this.zombieNode) && t.activeInHierarchy ? this.zombieNode : null;
  }
  refreshProgressCount() {
    this.hasInstallNum = this.completedSteps.size + (this.hasHammerAsRung ? 1 : 0);
  }
  startLegCycle() {
    this.stopLegCycle(), this.schedule(this.tickLegFrame, .15);
  }
  stopLegCycle() {
    this.unschedule(this.tickLegFrame);
  }
  showLegFrame(e) {
    for (let t = 0; t < this.girlLegNodes.length; t += 1) this.setNodeActive(this.girlLegNodes[t], t === e);
  }
  startShiverSwap(e, t) {
    this.stopShiverSwap(), this.shiverPair = [e, t], this.shiverFrameIndex = 0, this.setNodeActive(e, !0), this.setNodeActive(t, !1), this.schedule(this.tickShiver, .15);
  }
  stopShiverSwap() {
    this.unschedule(this.tickShiver), this.shiverPair = null;
  }
  startSleepScale() {
    const e = this.sleepNode;
    if (null == e || !e.isValid) return;
    this.stopSleepScale(), this.sleepOriginScale.set(e.scale);
    const t = new __rea_outer_i(1.2 * this.sleepOriginScale.x, 1.2 * this.sleepOriginScale.y, this.sleepOriginScale.z);
    __rea_outer_h(e).to(.5, {
      scale: t
    }).to(.5, {
      scale: this.sleepOriginScale.clone()
    }).union().repeatForever().start();
  }
  stopSleepScale() {
    this.stopTweenIfValid(this.sleepNode), this.restoreSleepScale();
  }
  restoreSleepScale() {
    var e;
    null != (e = this.sleepNode) && e.isValid && this.sleepNode.setScale(this.sleepOriginScale);
  }
  playPlaceSound() {
    __rea_outer_c.playEffect_1("level44_1");
  }
  playDialogue(e, t, i) {
    this.voiceToken += 1;
    const s = this.voiceToken;
    this.showBubble(e, t);
    let o = !1;
    const h = () => {
        !o && this.isValid && s === this.voiceToken && (o = !0, this.currentDialogueKey = "", this.unschedule(n), i());
      },
      n = () => {
        h();
      };
    this.stopCurrentDialogueEffect(), this.currentDialogueKey = e, __rea_outer_c.playVoice(e);
    const d = this.resolveDialogueHoldSeconds(e);
    this.scheduleOnce(h, d), this.scheduleOnce(n, Math.max(8, d + .5));
  }
  resolveDialogueHoldSeconds(e) {
    var t;
    const i = (null == (t = __rea_outer_c.audioMap.get(e)) ? void 0 : t.getDuration()) ?? 0;
    return i > .1 ? i : 2.5;
  }
  stopCurrentDialogueEffect() {
    __rea_outer_c.stopVoice(), this.currentDialogueKey && (__rea_outer_c.stopOneEffect(this.currentDialogueKey), this.currentDialogueKey = "");
  }
  showBubble(e, t) {
    this.bubbleLabel && (this.bubbleLabel.string = this.resolveI18nText(e, t), this.setNodeActive(this.bubbleLabel.node, !0)), this.setNodeActive(this.bubbleNode, !0);
  }
  resolveI18nText(e, t) {
    const i = __rea_outer_u.getInstance().getKey(e);
    return i && i !== e ? i : t;
  }
  resolveHintKey() {
    for (let e = 1; e <= f; e += 1) if (!this.completedSteps.has(e)) return P[e - 1];
    return null;
  }
  resetActiveDrag() {
    if (!this.activeDragState) return;
    const e = this.activeDragState;
    if (this.activeDragState = null, "headphones" === e.dragKind) return this.restoreHeadphonesOrigin(), this.setNodeActive(this.headphonesNode, !1), void (this.completedSteps.has(9) || this.setNodeActive(this.headphones1Node, !0));
    this.restoreDragNode(e);
  }
  restoreDragOrHeadphones(e) {
    if ("headphones" === e.dragKind) return this.restoreHeadphonesOrigin(), this.setNodeActive(this.headphonesNode, !1), void this.setNodeActive(this.headphones1Node, !0);
    this.restoreDragNode(e);
  }
  restoreDragNode(e) {
    const t = e.dragNode;
    t.isValid && (t.setParent(e.originParent), t.setSiblingIndex(e.originSiblingIndex), t.setPosition(e.originPosition));
  }
  restoreHammerOrigin() {
    var e;
    null != (e = this.hammerNode) && e.isValid && this.hammerNode.setPosition(this.hammerOrigin);
  }
  restoreHeadphonesOrigin() {
    var e, t;
    null != (e = this.headphonesNode) && e.isValid && null != (t = this.gameNode) && t.isValid && (this.headphonesNode.setParent(this.gameNode), this.headphonesNode.setPosition(this.headphonesOrigin));
  }
  cleanupRuntime(e = !0) {
    this.unscheduleAllCallbacks(), this.unregisterInteractionHandlers(), this.voiceToken += 1, e ? this.stopCurrentDialogueEffect() : this.currentDialogueKey = "", this.resetActiveDrag(), this.stopShiverSwap(), this.stopLegCycle(), this.stopSleepScale(), this.stopTweenIfValid(this.girlUpperBodyNode), this.descentQueue.length = 0, this.isDescending = !1;
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
  bringNodeToFront(e) {
    null != e && e.isValid && e.parent && e.setSiblingIndex(e.parent.children.length - 1);
  }
  isPointInsideNode(e, t) {
    if (null == e || !e.isValid || !e.activeInHierarchy) return !1;
    const i = e.getComponent(__rea_outer_s);
    return !!i && i.getBoundingBoxToWorld().contains(t);
  }
  isNodeCenterInside(e, t) {
    return __rea_outer_a.isDragNearTarget(e, t);
  }
  getNodeArea(e) {
    const t = e.getComponent(__rea_outer_s);
    return t ? Math.max(1, t.width * t.height) : Number.MAX_SAFE_INTEGER;
  }
  getTouchWorldPoint(e) {
    const t = e.getUILocation();
    return new __rea_outer_n(t.x, t.y);
  }
  getTouchLocalPosition(e, t) {
    const o = e.getUILocation(),
      h = t.getComponent(__rea_outer_s);
    return h ? h.convertToNodeSpaceAR(new __rea_outer_i(o.x, o.y, 0)) : __rea_outer_i.ZERO.clone();
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
    const o = t.getComponent(__rea_outer_s);
    o && e.setPosition(o.convertToNodeSpaceAR(i));
  }
  setNodeActive(e, t) {
    null != e && e.isValid && (e.active = t);
  }
  getGameChild(e) {
    var t;
    return (null == (t = this.gameNode) ? void 0 : t.getChildByName(e)) ?? null;
  }
  copyNodePosition(e, t) {
    null != e && e.isValid && t.set(e.position);
  }
  resolveReferences() {
    var e, t, i, s, o, h, n, l, r, a, c, u;
    this.gameNode = this.node.getChildByPath("UIPanel/gameNode"), this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.bubbleNode = this.node.getChildByPath("UIPanel/bubble"), this.demoNode = this.node.getChildByPath("UIPanel/demo"), this.clickRootNode = this.node.getChildByPath("UIPanel/click_root"), this.dialogBox1Node = (null == (e = this.bubbleNode) ? void 0 : e.getChildByName("dialog_box_1")) ?? null, this.bubbleLabel = (null == (t = this.bubbleNode) || null == (t = t.getChildByPath("dialog_box/Label")) ? void 0 : t.getComponent(__rea_outer_d)) ?? null, this.feetTouchNode = this.node.getChildByPath("UIPanel/gameNode/clicks/touch"), this.girlNode = this.getGameChild("girl"), this.girlUpperBodyNode = this.getGameChild("girl_upper_body"), this.girlLegNodes = [(null == (i = this.girlUpperBodyNode) ? void 0 : i.getChildByName("girl_leg_1")) ?? null, (null == (s = this.girlUpperBodyNode) ? void 0 : s.getChildByName("girl_leg_2")) ?? null, (null == (o = this.girlUpperBodyNode) ? void 0 : o.getChildByName("girl_leg_3")) ?? null].filter(e => null !== e), this.shiverNode = this.getGameChild("shiver"), this.shiver1Node = this.getGameChild("shiver_1"), this.shiver2Node = (null == (h = this.girlUpperBodyNode) ? void 0 : h.getChildByName("shiver_2")) ?? null, this.shiver3Node = (null == (n = this.girlUpperBodyNode) ? void 0 : n.getChildByName("shiver_3")) ?? null, this.girlFailureNode = this.getGameChild("girl_failure"), this.headphones1Node = (null == (l = this.girlUpperBodyNode) ? void 0 : l.getChildByName("headphones1")) ?? null, this.headphonesTouchNode = (null == (r = this.headphones1Node) ? void 0 : r.getChildByName("touch")) ?? null, this.headphonesNode = this.getGameChild("headphones"), this.headphones1NodeRung = this.getGameChild("headphones_1"), this.zombieNode = this.getGameChild("zombie"), this.zombie1Node = this.getGameChild("zombie_1"), this.bucketANode = this.getGameChild("bucketA"), this.bucketBNode = this.getGameChild("bucketB"), this.bucket1Node = this.getGameChild("bucket_1"), this.sleepNode = this.getGameChild("sleep"), this.hammerNode = this.getGameChild("hammer"), this.hammer1Node = this.getGameChild("hammer_1"), this.boxNode = this.getGameChild("box"), this.box1Node = this.getGameChild("box_1"), this.box11Node = this.getGameChild("box_1_1"), this.stickNode = this.getGameChild("stick"), this.stick1Node = this.getGameChild("stick_1"), this.endNode = this.getGameChild("end"), this.maskNode = this.getGameChild("mask"), this.failure1Node = (null == (a = this.maskNode) ? void 0 : a.getChildByName("failure_1")) ?? null, this.zombieEndNode = (null == (c = this.maskNode) ? void 0 : c.getChildByName("zombie_end")) ?? null, this.sourceNodes.clear(), this.rungNodes.clear();
    for (const e of _) {
      const t = this.getGameChild(e.sourceName),
        i = this.getGameChild(e.rungName);
      t && this.sourceNodes.set(e.step, t), i && this.rungNodes.set(e.step, i);
    }
    this.copyNodePosition(this.hammerNode, this.hammerOrigin), this.copyNodePosition(this.headphonesNode, this.headphonesOrigin), null != (u = this.sleepNode) && u.isValid && this.sleepOriginScale.set(this.sleepNode.scale), this.cacheRungLayout(), this.logMissingNodes();
  }
  cacheRungLayout() {
    this.rungOriginPositions.clear(), this.cacheRungOrigin(C), this.cacheRungOrigin(T), this.buildEvenRungSlots();
  }
  cacheRungOrigin(e) {
    for (const t of e) {
      const e = this.getGameChild(t);
      null != e && e.isValid && this.rungOriginPositions.set(t, e.position.clone());
    }
  }
  buildEvenRungSlots() {
    this.rungSlotPositions.length = 0;
    for (let e = 0; e < 10; e += 1) {
      const t = e / 9;
      this.rungSlotPositions.push(new __rea_outer_i(I.x + (D.x - I.x) * t, I.y + (D.y - I.y) * t, 0));
    }
  }
  restoreRungOrigins() {
    this.rungOriginPositions.forEach((e, t) => {
      const i = this.getGameChild(t);
      null != i && i.isValid && i.setPosition(e);
    });
  }
  logMissingNodes() {
    const e = [],
      t = (t, i) => {
        t || e.push(i);
      };
    t(this.gameNode, "UIPanel/gameNode"), t(this.backBgNode, "UIPanel/backBG"), t(this.bubbleNode, "UIPanel/bubble"), t(this.feetTouchNode, "UIPanel/gameNode/clicks/touch"), t(this.girlNode, "girl"), t(this.girlUpperBodyNode, "girl_upper_body"), t(this.headphones1Node, "girl_upper_body/headphones1"), t(this.headphonesTouchNode, "girl_upper_body/headphones1/touch"), t(this.headphonesNode, "headphones"), t(this.zombieNode, "zombie"), t(this.zombie1Node, "zombie_1"), t(this.bucketANode, "bucketA"), t(this.bucketBNode, "bucketB"), t(this.hammerNode, "hammer"), t(this.boxNode, "box"), t(this.stickNode, "stick"), t(this.box1Node, "box_1"), t(this.endNode, "end"), t(this.maskNode, "mask"), t(this.failure1Node, "mask/failure_1"), t(this.zombieEndNode, "mask/zombie_end");
    for (const e of _) t(this.sourceNodes.get(e.step) ?? null, e.sourceName), t(this.rungNodes.get(e.step) ?? null, e.rungName);
    this.girlLegNodes.length < 3 && e.push("girl_upper_body/girl_leg_1/2/3"), e.length > 0 && console.warn("[Level_44] prefab 待办清单:", e.join(", "));
  }
}) || S;
__rea_outer_t._RF.pop();
export { __recovered_export_0 as default };
