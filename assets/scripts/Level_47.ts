// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_47.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_e } from "cc";
import { Vec3 as __rea_outer_i } from "cc";
import { Node as __rea_outer_s } from "cc";
import { tween as __rea_outer_h } from "cc";
import { UITransform as __rea_outer_o } from "cc";
import { Vec2 as __rea_outer_l } from "cc";
import { Label as __rea_outer_d } from "cc";
import { _decorator as __rea_outer_r } from "cc";
import { default as __rea_outer_a } from "./LevelBase";
import { default as __rea_outer_n } from "./clue-hit-tester";
import { default as __rea_outer_g } from "./AudioManager";
import { I18nController as __rea_outer_c } from "./i18n-controller";
import { UIManager as __rea_outer_N } from "./ui-manager";
import { UILayer as __rea_outer_u } from "./ui-layer";
import { UIHint as __rea_outer_p } from "./uihint";
import { UIFail as __rea_outer_v } from "./uifail";
import { GameController as __rea_outer_f } from "./GameController";
import { setNodeOpacity as __rea_outer_m } from "./CocosCompat";
import { getUIOpacity as __rea_outer_A } from "./CocosCompat";
import { stopAllTweens as __rea_outer_T } from "./CocosCompat";
let __recovered_export_0;
var S;
__rea_outer_e._RF.push({}, "9f3e7RTOLROX7gU2hcoYct7", "Level_47", void 0);
const {
    ccclass: w
  } = __rea_outer_r,
  b = 10,
  k = .15,
  P = .5,
  _ = -500,
  y = new __rea_outer_i(343, 185, 0),
  D = new __rea_outer_i(-313.5, 152, 0),
  C = new __rea_outer_i(241, -476.5, 0),
  R = new __rea_outer_i(239.5, -567, 0),
  L = new __rea_outer_i(239.5, -565.5, 0),
  I = new __rea_outer_i(17.5, -137, 0),
  G = new __rea_outer_i(447.5, -451, 0),
  B = new __rea_outer_i(196, -399, 0),
  x = new __rea_outer_i(252, -93, 0),
  O = new __rea_outer_i(-375, -113, 0),
  V = new __rea_outer_i(-372, -229.5, 0),
  F = new __rea_outer_i(-266.5, -222, 0),
  H = new __rea_outer_i(-381.5, -326.5, 0),
  W = new __rea_outer_i(-379.5, -324.5, 0),
  E = new __rea_outer_i(276.5, -252.5, 0),
  M = new __rea_outer_i(-426.5, 112, 0),
  K = 1,
  U = 13,
  Z = 14,
  q = 42,
  z = 43,
  $ = 53,
  X = 54,
  Q = 55,
  Y = 56,
  j = 59,
  J = ["level47_hint1", "level47_hint2", "level47_hint3", "level47_hint4", "level47_hint5", "level47_hint6", "level47_hint7", "level47_hint8", "level47_hint9", "level47_hint10"];
__recovered_export_0 = w("Level_47")(S = class extends __rea_outer_a {
  constructor(...t) {
    super(...t), this.phase = 0, this.winstate = !1, this.gameNode = null, this.backBgNode = null, this.bubbleNode = null, this.dialogBoxNode = null, this.bubbleLabel = null, this.dialogBoxLeftNode = null, this.dialogBoxRightNode = null, this.clickRootNode = null, this.demoNode = null, this.promptBoxNode = null, this.dragsNode = null, this.swipsNode = null, this.bg1Node = null, this.bg2Node = null, this.bg2DoorNode = null, this.bg2FloorNode = null, this.waterStain1Node = null, this.waterStain2Node = null, this.bulletinSwatterNode = null, this.indoorSwatterNode = null, this.flySwatter1Node = null, this.newspaperNode = null, this.girlLeftTrashNode = null, this.girlLeftTrash1Node = null, this.mopNode = null, this.girlLeftNode = null, this.girlLeftCoatNode = null, this.girlLeftCoat1Node = null, this.girlLeftShiverNode = null, this.girlLeftShiver1Node = null, this.floorTrash1Node = null, this.floorTrash2Node = null, this.trash3Node = null, this.canTrash1Node = null, this.canTrash2Node = null, this.trashCanNode = null, this.trashCan2Node = null, this.trashBagNode = null, this.trashBag1Node = null, this.toiletNode = null, this.toilet1Node = null, this.toiletTouchNode = null, this.toiletWater1Node = null, this.toiletWater2Node = null, this.toiletWater3Node = null, this.girlRightEndNode = null, this.girlRightSquatNode = null, this.girlRightSquat1Node = null, this.shitNode = null, this.holeNode = null, this.hole1Node = null, this.girlRightHandNode = null, this.girlRightHand1Node = null, this.girlRightNode = null, this.girlRightPackageNode = null, this.girlRightPackage1Node = null, this.girlRightPackage2Node = null, this.girlRightDragNode = null, this.girlRightDrag1Node = null, this.girlRightDrag2Node = null, this.girlRightDrag3Node = null, this.plungerNode = null, this.girlRight1Node = null, this.girlRight2Node = null, this.spiderNode = null, this.fly1Node = null, this.fly2Node = null, this.fly3Node = null, this.stenchLeft1Node = null, this.stenchLeft2Node = null, this.stenchToilet1Node = null, this.stenchToilet2Node = null, this.tissueBoxNode = null, this.tissueBox1Node = null, this.tissueBoxTouchNode = null, this.completedSteps = new Set(), this.thrownTrash = new Set(), this.killedFlies = new Set(), this.hasPackageOpened = !1, this.isPerformanceLocked = !1, this.isToiletWaterLooping = !1, this.isShiverLooping = !1, this.toiletWaterIndex = 0, this.shiverIndex = 0, this.voiceToken = 0, this.bubbleToken = 0, this.actionToken = 0, this.currentVoiceKey = "", this.pendingClickKind = null, this.activeDragState = null, this.onTouchStart = t => {
      if (!this.canAcceptInput()) return;
      const e = this.getTouchWorldPoint(t),
        i = this.hitTestPointer(e);
      if (i) {
        if ("click" === i.kind) return this.pendingClickKind = i.clickKind, void (t.propagationStopped = !0);
        this.beginDrag(i.dragKind, t), t.propagationStopped = !0;
      }
    }, this.onTouchMove = t => {
      if (this.pendingClickKind) return void (t.propagationStopped = !0);
      if (!this.activeDragState || !this.canAcceptInput()) return;
      const e = this.activeDragState;
      this.setDragNodePositionFromTouch(t, e.dragNode, e.dragParent, e.touchOffset), t.propagationStopped = !0;
    }, this.onTouchEnd = t => {
      if (1 !== this.phase || this.winstate) return this.resetActiveDrag(), void (this.pendingClickKind = null);
      if (this.pendingClickKind) {
        const e = this.pendingClickKind;
        return this.pendingClickKind = null, this.isPerformanceLocked || this.handleClick(e), void (t.propagationStopped = !0);
      }
      if (!this.activeDragState) return;
      const e = this.activeDragState;
      this.activeDragState = null, this.handleDragDrop(e, t), t.propagationStopped = !0;
    }, this.onToiletWaterTick = () => {
      this.isToiletWaterLooping && (this.toiletWaterIndex = (this.toiletWaterIndex + 1) % 3, this.applyToiletWaterFrame());
    }, this.onShiverTick = () => {
      this.isShiverLooping && (this.shiverIndex = 0 === this.shiverIndex ? 1 : 0, this.applyShiverFrame());
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.allItemNum = b, this.hasInstallNum = 0;
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
    const t = this.resolveHintKey();
    if (!t) return;
    const e = __rea_outer_c.getInstance().getKey(t);
    __rea_outer_N.getInstance().showView(__rea_outer_p, void 0, {
      body: e
    });
  }
  getGameProgressSnapshot() {
    const t = this.hasInstallNum;
    return {
      progress: t / b,
      label: `${t}/10`
    };
  }
  markAllTasksCompleted() {
    for (let t = 1; t <= b; t += 1) this.completedSteps.add(t);
    this.hasInstallNum = b;
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.completedSteps.clear(), this.thrownTrash.clear(), this.killedFlies.clear(), this.hasPackageOpened = !1, this.isPerformanceLocked = !1, this.isToiletWaterLooping = !1, this.isShiverLooping = !1, this.toiletWaterIndex = 0, this.shiverIndex = 0, this.voiceToken = 0, this.bubbleToken = 0, this.actionToken = 0, this.currentVoiceKey = "", this.pendingClickKind = null, this.activeDragState = null, this.hasInstallNum = 0, __rea_outer_g.stopVoice();
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_g.playMusic("bgm4", !0, .5), this.applyInitialVisibility(), this.startToiletWaterLoop(), this.setInputBlocked(!0), __rea_outer_f.getInstance().refreshGameProgress(), this.playDialogue("47_1", "left", () => {
      this.isValid && 0 === this.phase && this.scheduleOnceIfValid(() => {
        this.isValid && 0 === this.phase && this.playDialogue("47_2", "right", () => {
          this.isValid && 0 === this.phase && (this.setInputBlocked(!1), this.enterPhase1());
        });
      }, .25);
    });
  }
  skipOpeningToPlay() {
    return 0 === this.phase && (this.voiceToken += 1, this.stopOpeningDialogue(), this.setInputBlocked(!1), this.enterPhase1(), !0);
  }
  enterPhase1() {
    0 === this.phase && (this.phase = 1, this.registerInteractionHandlers(), __rea_outer_f.getInstance().refreshGameProgress());
  }
  enterPhase2Success() {
    var t;
    this.phase >= 2 || (this.phase = 2, this.winstate = !0, this.actionToken += 1, this.unregisterInteractionHandlers(), this.resetActiveDrag(), this.isToiletWaterLooping = !1, this.isShiverLooping = !1, this.setInputBlocked(!0), __rea_outer_f.getInstance().pauseTimer(), this.hideGirlRightPerformances(), this.hideGirlRightIdle(), null != (t = this.girlRightEndNode) && t.isValid && this.girlRightEndNode.setPosition(E), this.setNodeActive(this.girlRightEndNode, !0), this.playDialogue("47_13", "right", () => {
      this.isValid && 2 === this.phase && this.showLevelSuccess(1);
    }));
  }
  beginTimeoutFail() {
    this.phase = 2, this.winstate = !1, this.cleanupRuntime(), this.setInputBlocked(!0), __rea_outer_f.getInstance().pauseTimer(), this.scheduleOnce(() => {
      this.isValid && __rea_outer_N.getInstance().showView(__rea_outer_v, __rea_outer_u.WIN_ANIMATION);
    }, 1);
  }
  applyInitialVisibility() {
    var t;
    this.setNodeActive(this.demoNode, !1), this.setNodeActive(this.clickRootNode, !1), this.setNodeActive(this.promptBoxNode, !1), this.setNodeActive(this.dragsNode, !1), this.setNodeActive(this.swipsNode, !1), this.setNodeActive(this.bg1Node, !0), this.setNodeActive(this.bg2Node, !0), this.setNodeActive(this.bg2DoorNode, !0), this.setNodeActive(this.bg2FloorNode, !0), this.setNodeActive(this.waterStain1Node, !0), this.setNodeActive(this.waterStain2Node, !0), this.setNodeActive(this.bulletinSwatterNode, !0), this.resetNodePose(this.bulletinSwatterNode, M), this.setNodeActive(this.indoorSwatterNode, !1), this.setNodeActive(this.flySwatter1Node, !1), this.setNodeActive(this.newspaperNode, !0), this.resetNodePose(this.newspaperNode, D), this.setNodeActive(this.girlLeftTrashNode, !1), this.setNodeActive(this.girlLeftTrash1Node, !1), this.setNodeActive(this.mopNode, !0), this.resetNodePose(this.mopNode, x), this.setNodeActive(this.girlLeftNode, !0), this.resetNodePose(this.girlLeftNode, V), this.setNodeActive(this.girlLeftCoatNode, !0), this.resetNodePose(this.girlLeftCoatNode, O), this.setNodeActive(this.girlLeftCoat1Node, !1), this.setNodeActive(this.girlLeftShiverNode, !1), this.setNodeActive(this.girlLeftShiver1Node, !1), this.setNodeActive(this.floorTrash1Node, !0), this.setNodeActive(this.floorTrash2Node, !0), this.setNodeActive(this.trash3Node, !0), this.setNodeActive(this.canTrash1Node, !1), this.setNodeActive(this.canTrash2Node, !1), this.setNodeActive(this.trashCanNode, !0), this.setNodeActive(this.trashCan2Node, !1), this.setNodeActive(this.trashBagNode, !1), this.resetNodePose(this.trashBagNode, C), this.setNodeActive(this.trashBag1Node, !1), this.setNodeActive(this.toiletNode, !1), this.setNodeActive(this.toilet1Node, !0), this.setNodeActive(this.toiletTouchNode, !0), this.setNodeActive(this.girlRightEndNode, !1), this.setNodeActive(this.girlRightSquatNode, !1), this.setNodeActive(this.girlRightSquat1Node, !1), this.setNodeActive(this.shitNode, !0), this.resetNodePose(this.shitNode, B), this.setNodeActive(this.holeNode, !0), this.setNodeActive(this.hole1Node, !1), this.resetNodeOpacity(this.hole1Node), this.setNodeActive(this.girlRightNode, !0), this.setNodeActive(this.girlRightHandNode, !0), this.setNodeActive(this.girlRightHand1Node, !1), this.setNodeActive(this.girlRightPackageNode, !0), null != (t = this.girlRightPackageNode) && t.isValid && __rea_outer_m(this.girlRightPackageNode, 0), this.setNodeActive(this.girlRightPackage1Node, !1), this.setNodeActive(this.girlRightPackage2Node, !1), this.setNodeActive(this.girlRightDragNode, !1), this.setNodeActive(this.girlRightDrag1Node, !1), this.setNodeActive(this.girlRightDrag2Node, !1), this.setNodeActive(this.girlRightDrag3Node, !1), this.setNodeActive(this.plungerNode, !0), this.resetNodePose(this.plungerNode, G), this.setNodeActive(this.girlRight1Node, !1), this.setNodeActive(this.girlRight2Node, !1), this.setNodeActive(this.spiderNode, !0), this.setNodeActive(this.fly1Node, !0), this.setNodeActive(this.fly2Node, !0), this.setNodeActive(this.fly3Node, !0), this.setNodeActive(this.stenchLeft1Node, !0), this.setNodeActive(this.stenchLeft2Node, !0), this.setNodeActive(this.stenchToilet1Node, !0), this.setNodeActive(this.stenchToilet2Node, !0), this.setNodeActive(this.tissueBoxNode, !0), this.setNodeActive(this.tissueBox1Node, !1), this.setNodeActive(this.tissueBoxTouchNode, !0), this.setNodeActive(this.bubbleNode, !1), this.setNodeActive(this.dialogBoxLeftNode, !1), this.setNodeActive(this.dialogBoxRightNode, !1);
  }
  registerInteractionHandlers() {
    this.node.on(__rea_outer_s.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(__rea_outer_s.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(__rea_outer_s.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(__rea_outer_s.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
  }
  unregisterInteractionHandlers() {
    var t;
    null != (t = this.node) && t.isValid && (this.node.off(__rea_outer_s.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(__rea_outer_s.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(__rea_outer_s.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(__rea_outer_s.EventType.TOUCH_CANCEL, this.onTouchEnd, this));
  }
  canAcceptInput() {
    return 1 === this.phase && !this.winstate && !this.isPerformanceLocked;
  }
  hitTestPointer(t) {
    var e;
    const i = [];
    return this.pushClickHit(i, "backpack", this.girlRightPackageNode, t, !this.hasPackageOpened && !this.completedSteps.has(6)), this.pushDragHit(i, "spider", this.spiderNode, t, !this.completedSteps.has(1)), this.pushDragHit(i, "trash1", this.floorTrash1Node, t, this.canThrowTrash("trash1")), this.pushDragHit(i, "trash2", this.floorTrash2Node, t, this.canThrowTrash("trash2")), this.pushDragHit(i, "trash3", this.trash3Node, t, this.canThrowTrash("trash3")), this.pushDragHit(i, "trashBag", this.trashBagNode, t, this.completedSteps.has(2) && !this.completedSteps.has(3)), this.pushDragHit(i, "newspaper", this.newspaperNode, t, !this.completedSteps.has(4)), this.pushDragHit(i, "flySwatter", this.getFlySwatterSource(), t, !this.completedSteps.has(5)), this.pushDragHit(i, "perfume", this.girlRightPackage1Node, t, this.hasPackageOpened && !this.completedSteps.has(6)), this.pushDragHit(i, "plunger", this.plungerNode, t, !this.completedSteps.has(7)), this.pushDragHit(i, "shit", this.shitNode, t, this.completedSteps.has(7) && !this.completedSteps.has(8)), this.pushDragHit(i, "mop", this.mopNode, t, !this.completedSteps.has(9)), this.pushDragHit(i, "coat", this.girlLeftCoatNode, t, !this.completedSteps.has(10) && Boolean(null == (e = this.girlLeftCoatNode) ? void 0 : e.active)), 0 === i.length ? null : (i.sort((t, e) => t.area - e.area), i[0]);
  }
  canThrowTrash(t) {
    return !this.completedSteps.has(2) && !this.thrownTrash.has(t);
  }
  handleClick(t) {
    "backpack" !== t || this.hasPackageOpened || this.openBackpack();
  }
  openBackpack() {
    var t, e;
    this.hasPackageOpened = !0, this.playOperateSound(), null != (t = this.girlRightPackageNode) && t.isValid && __rea_outer_m(this.girlRightPackageNode, 255), this.setNodeActive(this.girlRightPackageNode, !0), this.setNodeActive(this.girlRightPackage1Node, !0), null != (e = this.girlRightPackage1Node) && e.isValid && this.girlRightPackage1Node.setPosition(I);
  }
  beginDrag(t, e) {
    if ("trashBag" === t) return void this.beginFollowDrag(this.trashBagNode, this.trashBag1Node, t, e);
    if ("coat" === t) return void this.beginFollowDrag(this.girlLeftCoatNode, this.girlLeftCoat1Node, t, e);
    if ("perfume" === t) return void this.beginFollowDrag(this.girlRightPackage1Node, this.girlRightPackage2Node, t, e);
    const i = this.getDragSource(t);
    null != i && i.isValid && this.beginNodeDrag(i, i, null, t, e);
  }
  beginFollowDrag(t, e, i, s) {
    if (null == t || !t.isValid || null == e || !e.isValid) return;
    const h = t.worldPosition.clone();
    this.setNodeActive(t, !1), this.setNodeActive(e, !0), this.beginNodeDrag(e, t, e, i, s, h);
  }
  beginNodeDrag(t, e, i, s, h, o = t.worldPosition.clone()) {
    const l = t.parent;
    if (null == l || !l.isValid) return;
    const d = t.position.clone(),
      r = t.getSiblingIndex(),
      a = this.gameNode ?? l;
    t.setParent(a), this.placeNodeAtWorld(t, a, o), t.setSiblingIndex(a.children.length - 1);
    const n = this.calculateTouchOffset(h, t, a);
    this.setDragNodePositionFromTouch(h, t, a, n), this.activeDragState = {
      dragKind: s,
      dragNode: t,
      sourceNode: e,
      followNode: i,
      dragParent: a,
      touchOffset: n,
      originParent: l,
      originPosition: d,
      originSiblingIndex: r
    };
  }
  handleDragDrop(t, e) {
    if (this.isPerformanceLocked) return void this.restoreDrag(t);
    const i = this.getTouchWorldPoint(e);
    "spider" !== t.dragKind ? "trash1" !== t.dragKind && "trash2" !== t.dragKind && "trash3" !== t.dragKind ? "trashBag" !== t.dragKind ? "newspaper" !== t.dragKind ? "flySwatter" !== t.dragKind ? "perfume" !== t.dragKind ? "plunger" !== t.dragKind ? "shit" !== t.dragKind ? "mop" !== t.dragKind ? this.handleCoatDrop(t, i) : this.handleMopDrop(t, i) : this.handleShitDrop(t, i) : this.handlePlungerDrop(t, i) : this.handlePerfumeDrop(t, i) : this.handleFlySwatterDrop(t, i) : this.handleNewspaperDrop(t, i) : this.handleTrashBagDrop(t, i) : this.handleTrashDrop(t, i) : this.handleSpiderDrop(t, i);
  }
  handleSpiderDrop(t, e) {
    if (!this.isDroppedOnZone(t.dragNode, this.holeNode, e) || this.completedSteps.has(1)) return void this.restoreDrag(t);
    this.playOperateSound(), this.restoreDragNode(t), this.beginPerformance();
    const i = this.actionToken;
    this.setNodeActive(this.hole1Node, !0), __rea_outer_m(this.hole1Node, 0), this.tweenMove(this.spiderNode, y, .5, i, () => {
      this.setNodeActive(this.spiderNode, !1), this.completeStep(1), this.playDialogue("47_3", "right"), this.endPerformance();
    }), this.tweenOpacity(this.hole1Node, 255, .5, i);
  }
  handleTrashDrop(t, e) {
    if (!this.isDroppedOnZone(t.dragNode, this.trashCanNode, e)) return void this.restoreDrag(t);
    this.playOperateSound(), this.playDialogue("47_4", "right"), this.thrownTrash.add(t.dragKind), this.beginPerformance();
    const i = this.actionToken,
      s = t.dragNode,
      h = this.getTrashFlyTarget(t.dragKind);
    this.tweenMove(s, h, .35, i, () => {
      this.setNodeActive(s, !1), "trash1" === t.dragKind ? this.setNodeActive(this.canTrash1Node, !0) : "trash2" === t.dragKind && this.setNodeActive(this.canTrash2Node, !0), this.thrownTrash.size >= 3 && this.finishTrashStep(), this.endPerformance();
    });
  }
  getTrashFlyTarget(t) {
    var e, i;
    return "trash1" === t && null != (e = this.canTrash1Node) && e.isValid ? this.canTrash1Node.position.clone() : "trash2" === t && null != (i = this.canTrash2Node) && i.isValid ? this.canTrash2Node.position.clone() : R.clone();
  }
  finishTrashStep() {
    var t;
    this.setNodeActive(this.floorTrash1Node, !1), this.setNodeActive(this.floorTrash2Node, !1), this.setNodeActive(this.trash3Node, !1), this.setNodeActive(this.canTrash1Node, !1), this.setNodeActive(this.canTrash2Node, !1), this.setNodeActive(this.trashCanNode, !1), this.setNodeActive(this.trashBagNode, !0), this.resetNodePose(this.trashBagNode, C), this.setNodeActive(this.trashCan2Node, !0), null != (t = this.trashCan2Node) && t.isValid && this.trashCan2Node.setPosition(L), this.completeStep(2);
  }
  handleTrashBagDrop(t, e) {
    if (!this.completedSteps.has(2) || this.completedSteps.has(3) || !this.isDroppedOnZone(t.dragNode, this.girlLeftNode, e)) return void this.restoreDrag(t);
    this.playOperateSound(), this.consumeDrag(t), this.beginPerformance();
    const i = this.actionToken;
    this.completeStep(3, !1), this.hideGirlLeftIdle();
    const s = this.completedSteps.has(10) ? this.girlLeftTrash1Node : this.girlLeftTrashNode;
    this.resetNodePose(s, F), this.setNodeActive(s, !0), this.playDialogue("47_5", "left", () => {
      this.isActionToken(i) && 1 === this.phase && this.walkTrashOff(s, i);
    });
  }
  walkTrashOff(t, e) {
    if (null == t || !t.isValid) return void this.returnGirlLeft(e);
    const s = t.position.clone(),
      h = new __rea_outer_i(s.x + _, s.y, s.z);
    this.tweenMove(t, h, P, e, () => {
      this.setNodeActive(t, !1), this.returnGirlLeft(e);
    });
  }
  returnGirlLeft(t) {
    const e = this.completedSteps.has(10);
    if (this.resetNodePose(this.girlLeftNode, new __rea_outer_i(V.x + _, V.y, 0)), this.setNodeActive(this.girlLeftNode, !0), e ? (this.resetNodePose(this.girlLeftShiverNode, new __rea_outer_i(H.x + _, H.y, 0)), this.resetNodePose(this.girlLeftShiver1Node, new __rea_outer_i(W.x + _, W.y, 0)), this.startShiverLoop()) : (this.resetNodePose(this.girlLeftCoatNode, new __rea_outer_i(O.x + _, O.y, 0)), this.setNodeActive(this.girlLeftCoatNode, !0)), this.tweenMove(this.girlLeftNode, V, P, t), e) return this.tweenMove(this.girlLeftShiverNode, H, P, t), void this.tweenMove(this.girlLeftShiver1Node, W, P, t, () => {
      this.endPerformance();
    });
    this.tweenMove(this.girlLeftCoatNode, O, P, t, () => {
      this.endPerformance();
    });
  }
  handleNewspaperDrop(t, e) {
    this.isDroppedOnZone(t.dragNode, this.tissueBoxTouchNode, e) && !this.completedSteps.has(4) ? (this.playOperateSound(), this.consumeDrag(t), this.setNodeActive(this.newspaperNode, !1), this.setNodeActive(this.tissueBoxNode, !1), this.setNodeActive(this.tissueBox1Node, !0), this.playDialogue("47_6", "right"), this.completeStep(4)) : this.restoreDrag(t);
  }
  handleFlySwatterDrop(t, e) {
    var s;
    const h = this.resolveHitFly(t.dragNode, e);
    if (null === h) return void this.restoreDrag(t);
    this.playOperateSound(), this.playDialogue("47_7", "right"), this.killedFlies.add(h), this.consumeDrag(t), this.setNodeActive(this.bulletinSwatterNode, !1);
    const o = this.getFlyNode(h),
      l = (null == o ? void 0 : o.position.clone()) ?? __rea_outer_i.ZERO.clone();
    this.setNodeActive(o, !1), null != (s = this.flySwatter1Node) && s.isValid && this.flySwatter1Node.setPosition(l), this.setNodeActive(this.flySwatter1Node, !0), this.beginPerformance();
    const d = this.actionToken;
    this.scheduleOnceIfValid(() => {
      this.isActionToken(d) && 1 === this.phase && this.autoSwatRemainingFlies(d);
    }, .15);
  }
  autoSwatRemainingFlies(t) {
    if (!this.isActionToken(t) || 1 !== this.phase) return;
    const e = this.findNextAliveFly();
    if (null === e) return void this.finishFlySwatterStep();
    const s = this.getFlyNode(e),
      h = (null == s ? void 0 : s.position.clone()) ?? __rea_outer_i.ZERO.clone();
    this.tweenMove(this.flySwatter1Node, h, .25, t, () => {
      this.isActionToken(t) && 1 === this.phase && (this.killedFlies.add(e), this.setNodeActive(s, !1), this.scheduleOnceIfValid(() => {
        this.autoSwatRemainingFlies(t);
      }, .15));
    });
  }
  finishFlySwatterStep() {
    this.setNodeActive(this.flySwatter1Node, !1), this.setNodeActive(this.indoorSwatterNode, !1), this.completeStep(5), this.endPerformance();
  }
  findNextAliveFly() {
    const t = [1, 2, 3];
    for (let e = 0; e < t.length; e += 1) if (!this.killedFlies.has(t[e])) return t[e];
    return null;
  }
  resolveHitFly(t, e) {
    const i = [{
      id: 1,
      node: this.fly1Node
    }, {
      id: 2,
      node: this.fly2Node
    }, {
      id: 3,
      node: this.fly3Node
    }];
    for (const s of i) if (!this.killedFlies.has(s.id) && this.isDroppedOnZone(t, s.node, e)) return s.id;
    return null;
  }
  getFlyNode(t) {
    return 1 === t ? this.fly1Node : 2 === t ? this.fly2Node : this.fly3Node;
  }
  getFlySwatterSource() {
    return 0 === this.killedFlies.size ? this.bulletinSwatterNode : this.indoorSwatterNode;
  }
  handlePerfumeDrop(t, e) {
    if (!this.hasPackageOpened || this.completedSteps.has(6) || !this.isDroppedOnAnyStench(t.dragNode, e)) return void this.restoreDrag(t);
    this.playOperateSound(), this.consumeDrag(t), this.setNodeActive(this.girlRightPackage2Node, !1), this.beginPerformance();
    const i = this.actionToken;
    this.setNodeActive(this.girlRightHandNode, !1), this.setNodeActive(this.girlRightHand1Node, !0), this.completeStep(6, !1), this.playDialogue("47_8", "right", () => {
      this.isActionToken(i) && 1 === this.phase && (this.setNodeActive(this.girlRightHand1Node, !1), this.setNodeActive(this.girlRightHandNode, !0), this.hideAllStench(), this.endPerformance());
    });
  }
  isDroppedOnAnyStench(t, e) {
    return this.isDroppedOnZone(t, this.stenchLeft1Node, e) || this.isDroppedOnZone(t, this.stenchLeft2Node, e) || this.isDroppedOnZone(t, this.stenchToilet1Node, e) || this.isDroppedOnZone(t, this.stenchToilet2Node, e);
  }
  hideAllStench() {
    this.setNodeActive(this.stenchLeft1Node, !1), this.setNodeActive(this.stenchLeft2Node, !1), this.setNodeActive(this.stenchToilet1Node, !1), this.setNodeActive(this.stenchToilet2Node, !1);
  }
  handlePlungerDrop(t, e) {
    if (!this.isDroppedOnZone(t.dragNode, this.toiletTouchNode, e) || this.completedSteps.has(7)) return void this.restoreDrag(t);
    this.playOperateSound(), this.consumeDrag(t), this.setNodeActive(this.plungerNode, !1), this.beginPerformance();
    const i = this.actionToken;
    this.isToiletWaterLooping = !1, this.setNodeActive(this.toiletWater1Node, !1), this.setNodeActive(this.toiletWater2Node, !1), this.setNodeActive(this.toiletWater3Node, !1), this.hideGirlRightIdle(), this.playDialogue("47_9", "right"), this.completeStep(7, !1), this.playFramePair(this.girlRight1Node, this.girlRight2Node, 1, i, () => {
      this.setNodeActive(this.girlRight1Node, !1), this.setNodeActive(this.girlRight2Node, !1), this.showGirlRightIdle(), this.endPerformance();
    });
  }
  handleShitDrop(t, e) {
    this.completedSteps.has(7) && !this.completedSteps.has(8) && this.isDroppedOnZone(t.dragNode, this.toiletTouchNode, e) ? (this.playOperateSound(), this.consumeDrag(t), this.setNodeActive(this.shitNode, !1), this.playDialogue("47_10", "right"), this.completeStep(8)) : this.restoreDrag(t);
  }
  handleMopDrop(t, e) {
    if (!this.isDroppedOnZone(t.dragNode, this.bg2FloorNode, e) || this.completedSteps.has(9)) return void this.restoreDrag(t);
    this.playOperateSound(), this.consumeDrag(t), this.setNodeActive(this.mopNode, !1), this.beginPerformance();
    const i = this.actionToken;
    this.hideGirlRightIdle(), this.playDialogue("47_11", "right"), this.completeStep(9, !1), this.playFramePair(this.girlRightDragNode, this.girlRightDrag1Node, 1, i, () => {
      this.setNodeActive(this.bg2FloorNode, !1), this.setNodeActive(this.waterStain1Node, !1), this.setNodeActive(this.waterStain2Node, !1), this.setNodeActive(this.girlRightDragNode, !1), this.setNodeActive(this.girlRightDrag1Node, !1), this.playFramePair(this.girlRightDrag2Node, this.girlRightDrag3Node, 1, i, () => {
        this.setNodeActive(this.girlRightDrag2Node, !1), this.setNodeActive(this.girlRightDrag3Node, !1), this.setNodeActive(this.bg2DoorNode, !1), this.showGirlRightIdle(), this.endPerformance();
      });
    });
  }
  handleCoatDrop(t, e) {
    var i;
    if (!this.isDroppedOnZone(t.dragNode, this.toiletTouchNode, e) || this.completedSteps.has(10)) return void this.restoreDrag(t);
    this.playOperateSound(), this.consumeDrag(t), this.setNodeActive(this.girlLeftCoat1Node, !1), this.setNodeActive(this.girlLeftCoatNode, !1), this.setNodeActive(this.toilet1Node, !1), this.setNodeActive(this.toiletNode, !0), this.beginPerformance();
    const s = this.actionToken;
    this.hideGirlRightIdle(), this.playDialogue("47_12", "right"), this.completeStep(10, !1), null != (i = this.girlLeftNode) && i.active && this.startShiverLoop(), this.playFramePair(this.girlRightSquatNode, this.girlRightSquat1Node, 1, s, () => {
      this.setNodeActive(this.girlRightSquatNode, !1), this.setNodeActive(this.girlRightSquat1Node, !1), this.showGirlRightIdle(), this.endPerformance();
    });
  }
  hideGirlLeftIdle() {
    this.isShiverLooping = !1, this.setNodeActive(this.girlLeftNode, !1), this.setNodeActive(this.girlLeftCoatNode, !1), this.setNodeActive(this.girlLeftShiverNode, !1), this.setNodeActive(this.girlLeftShiver1Node, !1);
  }
  hideGirlRightIdle() {
    this.setNodeActive(this.girlRightNode, !1), this.setNodeActive(this.girlRightHandNode, !1), this.setGirlRightPackageIdleVisible(!1);
  }
  showGirlRightIdle() {
    this.hideGirlRightPerformances(), this.setNodeActive(this.girlRightNode, !0), this.setNodeActive(this.girlRightHandNode, !0), this.setGirlRightPackageIdleVisible(!0);
  }
  setGirlRightPackageIdleVisible(t) {
    var e;
    if (!t) return this.setNodeActive(this.girlRightPackageNode, !1), this.setNodeActive(this.girlRightPackage1Node, !1), void this.setNodeActive(this.girlRightPackage2Node, !1);
    this.setNodeActive(this.girlRightPackageNode, !0), this.hasPackageOpened && null != (e = this.girlRightPackageNode) && e.isValid && __rea_outer_m(this.girlRightPackageNode, 255), this.setNodeActive(this.girlRightPackage1Node, this.hasPackageOpened && !this.completedSteps.has(6));
  }
  hideGirlRightPerformances() {
    this.setNodeActive(this.girlRight1Node, !1), this.setNodeActive(this.girlRight2Node, !1), this.setNodeActive(this.girlRightDragNode, !1), this.setNodeActive(this.girlRightDrag1Node, !1), this.setNodeActive(this.girlRightDrag2Node, !1), this.setNodeActive(this.girlRightDrag3Node, !1), this.setNodeActive(this.girlRightSquatNode, !1), this.setNodeActive(this.girlRightSquat1Node, !1), this.setNodeActive(this.girlRightHand1Node, !1);
  }
  completeStep(t, e = !0) {
    this.TryQuickWin() || this.completedSteps.has(t) || (this.completedSteps.add(t), this.hasInstallNum = this.completedSteps.size, __rea_outer_f.getInstance().refreshGameProgress(), e && this.tryEnterPhase2());
  }
  tryEnterPhase2() {
    this.completedSteps.size < b || this.isPerformanceLocked || this.phase >= 2 || this.enterPhase2Success();
  }
  beginPerformance() {
    this.actionToken += 1, this.isPerformanceLocked = !0, this.setInputBlocked(!0);
  }
  endPerformance() {
    this.isPerformanceLocked = !1, 1 === this.phase && this.setInputBlocked(!1), this.tryEnterPhase2();
  }
  startToiletWaterLoop() {
    this.isToiletWaterLooping = !0, this.toiletWaterIndex = 0, this.applyToiletWaterFrame(), this.unschedule(this.onToiletWaterTick), this.schedule(this.onToiletWaterTick, k);
  }
  applyToiletWaterFrame() {
    this.setNodeActive(this.toiletWater1Node, 0 === this.toiletWaterIndex), this.setNodeActive(this.toiletWater2Node, 1 === this.toiletWaterIndex), this.setNodeActive(this.toiletWater3Node, 2 === this.toiletWaterIndex);
  }
  startShiverLoop() {
    this.isShiverLooping = !0, this.shiverIndex = 0, this.applyShiverFrame(), this.unschedule(this.onShiverTick), this.schedule(this.onShiverTick, k);
  }
  applyShiverFrame() {
    this.setNodeActive(this.girlLeftShiverNode, 0 === this.shiverIndex), this.setNodeActive(this.girlLeftShiver1Node, 1 === this.shiverIndex);
  }
  playFramePair(t, e, i, s, h) {
    let o = !0;
    const l = () => {
      this.setNodeActive(t, o), this.setNodeActive(e, !o);
    };
    l();
    const d = () => {
      this.isActionToken(s) && (o = !o, l());
    };
    this.schedule(d, k), this.scheduleOnceIfValid(() => {
      this.unschedule(d), this.isActionToken(s) && h();
    }, i);
  }
  resolveHintKey() {
    for (let t = 1; t <= b; t += 1) if (!this.completedSteps.has(t) && (3 !== t || this.completedSteps.has(2)) && (8 !== t || this.completedSteps.has(7))) return J[t - 1];
    return null;
  }
  playOperateSound() {
    __rea_outer_g.playEffect_1("level47_1");
  }
  playDialogue(t, e, i) {
    this.voiceToken += 1;
    const s = this.voiceToken;
    if (this.showBubble(t, e), this.stopCurrentVoice(), this.currentVoiceKey = t, __rea_outer_g.playVoice(t), !i) return;
    let h = !1;
    const o = () => {
        !h && this.isValid && s === this.voiceToken && (h = !0, this.unschedule(l), i());
      },
      l = () => {
        o();
      },
      d = this.resolveDialogueHoldSeconds(t);
    this.scheduleOnce(o, d), this.scheduleOnce(l, Math.max(8, d + .5));
  }
  showBubble(t, e) {
    this.bubbleToken += 1;
    const i = this.bubbleToken;
    this.bubbleLabel && (this.bubbleLabel.string = __rea_outer_c.getInstance().getKey(t)), this.setNodeActive(this.bubbleNode, !0), this.setNodeActive(this.dialogBoxNode, !0), this.setNodeActive(this.dialogBoxLeftNode, "left" === e), this.setNodeActive(this.dialogBoxRightNode, "right" === e), this.scheduleOnceIfValid(() => {
      i === this.bubbleToken && this.setNodeActive(this.bubbleNode, !1);
    }, 3);
  }
  resolveDialogueHoldSeconds(t) {
    var e;
    const i = (null == (e = __rea_outer_g.audioMap.get(t)) ? void 0 : e.getDuration()) ?? 0;
    return i > .1 ? i : 2.5;
  }
  stopCurrentVoice() {
    __rea_outer_g.stopVoice(), this.currentVoiceKey && (__rea_outer_g.stopOneEffect(this.currentVoiceKey), this.currentVoiceKey = "");
  }
  setInputBlocked(t) {
    this.setNodeActive(this.backBgNode, t);
  }
  getDragSource(t) {
    return "spider" === t ? this.spiderNode : "trash1" === t ? this.floorTrash1Node : "trash2" === t ? this.floorTrash2Node : "trash3" === t ? this.trash3Node : "newspaper" === t ? this.newspaperNode : "flySwatter" === t ? this.getFlySwatterSource() : "plunger" === t ? this.plungerNode : "shit" === t ? this.shitNode : "mop" === t ? this.mopNode : null;
  }
  restoreDrag(t) {
    if (t.followNode) return this.putFollowBack(t), void this.setNodeActive(t.sourceNode, !0);
    this.restoreDragNode(t);
  }
  consumeDrag(t) {
    t.followNode ? this.putFollowBack(t) : this.restoreDragNode(t), this.setNodeActive(t.sourceNode, !1), this.setNodeActive(t.followNode, !1);
  }
  putFollowBack(t) {
    const e = t.followNode;
    null != e && e.isValid && (e.setParent(t.originParent), e.setSiblingIndex(t.originSiblingIndex), e.setPosition(t.originPosition), this.setNodeActive(e, !1));
  }
  restoreDragNode(t) {
    const e = t.dragNode;
    e.isValid && (e.setParent(t.originParent), e.setSiblingIndex(t.originSiblingIndex), e.setPosition(t.originPosition));
  }
  resetActiveDrag() {
    if (!this.activeDragState) return;
    const t = this.activeDragState;
    this.activeDragState = null, this.restoreDrag(t);
  }
  tweenMove(t, e, i, s, o) {
    null != t && t.isValid ? (this.stopTweenIfValid(t), __rea_outer_h(t).to(i, {
      position: e
    }).call(() => {
      this.isActionToken(s) && (null == o || o());
    }).start()) : null == o || o();
  }
  tweenOpacity(t, e, i, s) {
    if (null == t || !t.isValid) return;
    this.stopTweenIfValid(t);
    const o = __rea_outer_A(t);
    __rea_outer_h(o).to(i, {
      opacity: e
    }).call(() => {
      this.isActionToken(s);
    }).start();
  }
  isActionToken(t) {
    return t === this.actionToken && this.isValid;
  }
  scheduleOnceIfValid(t, e) {
    this.scheduleOnce(() => {
      this.isValid && t();
    }, e);
  }
  cleanupRuntime(t = !0) {
    this.unscheduleAllCallbacks(), this.unregisterInteractionHandlers(), this.actionToken += 1, this.voiceToken += 1, this.bubbleToken += 1, this.isToiletWaterLooping = !1, this.isShiverLooping = !1, this.isPerformanceLocked = !1, t ? this.stopCurrentVoice() : this.currentVoiceKey = "", this.resetActiveDrag(), this.stopAllTrackedTweens();
  }
  stopAllTrackedTweens() {
    [this.spiderNode, this.hole1Node, this.floorTrash1Node, this.floorTrash2Node, this.trash3Node, this.girlLeftNode, this.girlLeftCoatNode, this.girlLeftTrashNode, this.girlLeftTrash1Node, this.girlLeftShiverNode, this.girlLeftShiver1Node].forEach(t => this.stopTweenIfValid(t));
  }
  stopTweenIfValid(t) {
    null != t && t.isValid && __rea_outer_T(t);
  }
  pushClickHit(t, e, i, s, h) {
    h && this.isPointInsideNode(i, s) && t.push({
      kind: "click",
      clickKind: e,
      area: this.getNodeArea(i)
    });
  }
  pushDragHit(t, e, i, s, h) {
    h && this.isPointInsideNode(i, s) && t.push({
      kind: "drag",
      dragKind: e,
      area: this.getNodeArea(i)
    });
  }
  isPointInsideNode(t, e) {
    if (null == t || !t.isValid || !t.activeInHierarchy) return !1;
    const i = t.getComponent(__rea_outer_o);
    return !!i && i.getBoundingBoxToWorld().contains(e);
  }
  isNodeCenterInside(t, e) {
    return __rea_outer_n.isDragNearTarget(t, e);
  }
  isDroppedOnZone(t, e, i) {
    return __rea_outer_n.isDragNearTarget(t, e);
  }
  getNodeArea(t) {
    if (null == t || !t.isValid) return Number.MAX_SAFE_INTEGER;
    const e = t.getComponent(__rea_outer_o);
    return e ? Math.max(1, e.width * e.height) : Number.MAX_SAFE_INTEGER;
  }
  getTouchWorldPoint(t) {
    const e = t.getUILocation();
    return new __rea_outer_l(e.x, e.y);
  }
  getTouchLocalPosition(t, e) {
    const s = t.getUILocation(),
      h = e.getComponent(__rea_outer_o);
    return h ? h.convertToNodeSpaceAR(new __rea_outer_i(s.x, s.y, 0)) : __rea_outer_i.ZERO.clone();
  }
  calculateTouchOffset(t, e, s) {
    const h = this.getTouchLocalPosition(t, s);
    return new __rea_outer_i(e.position.x - h.x, e.position.y - h.y, 0);
  }
  setDragNodePositionFromTouch(t, e, i, s) {
    const h = this.getTouchLocalPosition(t, i);
    e.setPosition(h.x + s.x, h.y + s.y, e.position.z);
  }
  placeNodeAtWorld(t, e, i) {
    const s = e.getComponent(__rea_outer_o);
    s && t.setPosition(s.convertToNodeSpaceAR(i));
  }
  setNodeActive(t, e) {
    null != t && t.isValid && (t.active = e);
  }
  resetNodePose(t, e) {
    null != t && t.isValid && (this.stopTweenIfValid(t), t.setPosition(e), t.angle = 0);
  }
  resetNodeOpacity(t) {
    null != t && t.isValid && (this.stopTweenIfValid(t), __rea_outer_m(t, 255));
  }
  getGameChild(t) {
    var e;
    return (null == (e = this.gameNode) ? void 0 : e.getChildByName(t)) ?? null;
  }
  getGameChildAt(t, e) {
    var i;
    const s = (null == (i = this.gameNode) ? void 0 : i.children[t]) ?? null;
    return s ? (s.name !== e && console.warn(`[Level_47] sibling ${t} expected ${e}, got ${s.name}`), s) : null;
  }
  warnIfMissing(t, e) {
    e || console.warn(`[Level_47] prefab 待办: missing ${t}`);
  }
  resolveReferences() {
    var t, e, i, s, h, o, l;
    this.gameNode = this.node.getChildByPath("UIPanel/gameNode"), this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.bubbleNode = this.node.getChildByPath("UIPanel/bubble"), this.dialogBoxNode = (null == (t = this.bubbleNode) ? void 0 : t.getChildByName("dialog_box")) ?? null, this.bubbleLabel = (null == (e = this.dialogBoxNode) || null == (e = e.getChildByName("Label")) ? void 0 : e.getComponent(__rea_outer_d)) ?? null, this.dialogBoxLeftNode = (null == (i = this.bubbleNode) ? void 0 : i.getChildByName("dialog_box_left")) ?? null, this.dialogBoxRightNode = (null == (s = this.bubbleNode) ? void 0 : s.getChildByName("dialog_box_right")) ?? null, this.clickRootNode = this.node.getChildByPath("UIPanel/click_root"), this.demoNode = this.node.getChildByPath("UIPanel/demo"), this.promptBoxNode = (null == (h = this.gameNode) ? void 0 : h.getChildByName("prompt_box")) ?? null, this.dragsNode = (null == (o = this.gameNode) ? void 0 : o.getChildByName("drags")) ?? null, this.swipsNode = (null == (l = this.gameNode) ? void 0 : l.getChildByName("swips")) ?? null, this.bg1Node = this.getGameChild("bg_1"), this.bg2Node = this.getGameChild("bg_2"), this.bg2DoorNode = this.getGameChild("bg_2_door"), this.bg2FloorNode = this.getGameChild("bg_2_floor"), this.waterStain1Node = this.getGameChild("water_stain_1"), this.waterStain2Node = this.getGameChild("water_stain_2"), this.bulletinSwatterNode = this.getGameChildAt(K, "fly_swatter"), this.indoorSwatterNode = this.getGameChildAt(j, "fly_swatter"), this.flySwatter1Node = this.getGameChild("fly_swatter_1"), this.newspaperNode = this.getGameChild("newspaper"), this.girlLeftTrashNode = this.getGameChild("girl_left_trash"), this.girlLeftTrash1Node = this.getGameChild("girl_left_trash_1"), this.mopNode = this.getGameChild("mop"), this.girlLeftNode = this.getGameChild("girl_left"), this.girlLeftCoatNode = this.getGameChild("girl_left_coat"), this.girlLeftCoat1Node = this.getGameChild("girl_left_coat_1"), this.girlLeftShiverNode = this.getGameChild("girl_left_shiver"), this.girlLeftShiver1Node = this.getGameChild("girl_left_shiver_1"), this.floorTrash1Node = this.getGameChildAt(Z, "trash_1"), this.floorTrash2Node = this.getGameChildAt(U, "trash_2"), this.trash3Node = this.getGameChild("trash_3"), this.canTrash1Node = this.getGameChildAt(z, "trash_1"), this.canTrash2Node = this.getGameChildAt(q, "trash_2"), this.trashCanNode = this.getGameChild("trash_can"), this.trashCan2Node = this.getGameChild("trash_can_2"), this.trashBagNode = this.getGameChild("trash_bag"), this.trashBag1Node = this.getGameChild("trash_bag_1"), this.toiletNode = this.getGameChild("toilet"), this.toilet1Node = this.getGameChild("toilet_1"), this.toiletTouchNode = this.node.getChildByPath("UIPanel/gameNode/clicks/toilettouch"), this.tissueBoxTouchNode = this.node.getChildByPath("UIPanel/gameNode/clicks/tissue_box_touch"), this.toiletWater1Node = this.getGameChild("toilet_water_1"), this.toiletWater2Node = this.getGameChild("toilet_water_2"), this.toiletWater3Node = this.getGameChild("toilet_water_3"), this.girlRightEndNode = this.getGameChild("girl_right_end"), this.girlRightSquatNode = this.getGameChild("girl_right_squat"), this.girlRightSquat1Node = this.getGameChild("girl_right_squat_1"), this.shitNode = this.getGameChild("shit"), this.holeNode = this.getGameChild("hole"), this.hole1Node = this.getGameChild("hole_1"), this.girlRightHandNode = this.getGameChild("girl_right_hand"), this.girlRightHand1Node = this.getGameChild("girl_right_hand_1"), this.girlRightNode = this.getGameChild("girl_right"), this.girlRightPackageNode = this.getGameChild("girl_right_ackage"), this.girlRightPackage1Node = this.getGameChild("girl_right_ackage_1"), this.girlRightPackage2Node = this.getGameChild("girl_right_ackage_2"), this.girlRightDragNode = this.getGameChild("girl_right_drag"), this.girlRightDrag1Node = this.getGameChild("girl_right_drag_1"), this.girlRightDrag2Node = this.getGameChild("girl_right_drag_2"), this.girlRightDrag3Node = this.getGameChild("girl_right_drag_3"), this.plungerNode = this.getGameChild("plunger"), this.girlRight1Node = this.getGameChild("girl_right_1"), this.girlRight2Node = this.getGameChild("girl_right_2"), this.spiderNode = this.getGameChild("spider"), this.fly1Node = this.getGameChild("fly_1"), this.fly2Node = this.getGameChild("fly_2"), this.fly3Node = this.getGameChild("fly_3"), this.stenchLeft1Node = this.getGameChildAt(X, "stench_1"), this.stenchLeft2Node = this.getGameChildAt($, "stench_2"), this.stenchToilet1Node = this.getGameChildAt(Y, "stench_1"), this.stenchToilet2Node = this.getGameChildAt(Q, "stench_2"), this.tissueBoxNode = this.getGameChild("tissue_box"), this.tissueBox1Node = this.getGameChild("tissue_box_1"), this.warnMissingNodes();
  }
  warnMissingNodes() {
    var t;
    this.warnIfMissing("UIPanel/gameNode", this.gameNode), this.warnIfMissing("UIPanel/backBG", this.backBgNode), this.warnIfMissing("UIPanel/bubble/dialog_box/Label", (null == (t = this.bubbleLabel) ? void 0 : t.node) ?? null), this.warnIfMissing("UIPanel/bubble/dialog_box_left", this.dialogBoxLeftNode), this.warnIfMissing("UIPanel/bubble/dialog_box_right", this.dialogBoxRightNode), this.warnIfMissing("clicks/toilettouch", this.toiletTouchNode), this.warnIfMissing("clicks/tissue_box_touch", this.tissueBoxTouchNode), this.warnIfMissing("fly_swatter sibling 1", this.bulletinSwatterNode), this.warnIfMissing("fly_swatter sibling 59", this.indoorSwatterNode), this.warnIfMissing("girl_left", this.girlLeftNode), this.warnIfMissing("girl_right", this.girlRightNode), this.warnIfMissing("spider", this.spiderNode), this.warnIfMissing("trash_can", this.trashCanNode);
  }
}) || S;
__rea_outer_e._RF.pop();
export { __recovered_export_0 as default };
