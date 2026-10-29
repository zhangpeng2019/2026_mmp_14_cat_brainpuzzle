// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_41.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { Vec3 as __rea_outer_i } from "cc";
import { Node as __rea_outer_s } from "cc";
import { UITransform as __rea_outer_o } from "cc";
import { tween as __rea_outer_h } from "cc";
import { Vec2 as __rea_outer_l } from "cc";
import { Label as __rea_outer_n } from "cc";
import { _decorator as __rea_outer_a } from "cc";
import { default as __rea_outer_d } from "./LevelBase";
import { default as __rea_outer_c } from "./clue-hit-tester";
import { default as __rea_outer_r } from "./AudioManager";
import { I18nController as __rea_outer_u } from "./i18n-controller";
import { UIManager as __rea_outer_N } from "./ui-manager";
import { UILayer as __rea_outer_p } from "./ui-layer";
import { UIHint as __rea_outer_g } from "./uihint";
import { UIFail as __rea_outer_b } from "./uifail";
import { GameController as __rea_outer_v } from "./GameController";
import { stopAllTweens as __rea_outer_y } from "./CocosCompat";
import { default as __rea_outer_m } from "./ActionSystem";
import { default as __rea_outer_A } from "./clue-gesture-detector";
import { SwipeDirection as __rea_outer_P } from "./clue-level-types";
let __recovered_export_0;
var f;
__rea_outer_t._RF.push({}, "c70e4sJywZO47dpGWI0c+j5", "Level_41", void 0);
const {
    ccclass: S
  } = __rea_outer_a,
  C = "level41_1",
  I = new __rea_outer_i(-5.384, -136.384, 0),
  T = {
    "41_1": "太冷了，我该怎么办",
    "41_2": "盖个被子好多了",
    "41_3": "胃里暖暖的",
    "41_4": "忘记生壁炉了",
    "41_5": "怎么是制冷",
    "41_6": "泡个脚好舒服",
    "41_7": "浑身燥热",
    "41_8": "哦，我的女神",
    "41_9": "烤烤火舒服多了",
    "41_10": "你还好吗？",
    "41_11": "我现在好得很！"
  },
  k = ["level41_hint1", "level41_hint2", "level41_hint3", "level41_hint4", "level41_hint5", "level41_hint6", "level41_hint7", "level41_hint8"],
  _ = ["41_2", "41_3", "41_4", "41_5", "41_6", "41_7", "41_8", "41_9"];
__recovered_export_0 = S("Level_41")(f = class extends __rea_outer_d {
  constructor(...e) {
    super(...e), this.phase = 0, this.winstate = !1, this.gameNode = null, this.backBgNode = null, this.bubbleNode = null, this.bubbleLabel = null, this.demoNode = null, this.clickRootNode = null, this.closetCloseNode = null, this.closetNode = null, this.closetOpenNode = null, this.closetQuiltNode = null, this.fireplaceNode = null, this.fireNodes = [], this.boyNode = null, this.boyShiver1Node = null, this.boyShiver2Node = null, this.boy1Node = null, this.boyQuiltNode = null, this.boyCupNode = null, this.boyBucketNode = null, this.boyMobilePhoneNode = null, this.boyPhotoNode = null, this.boyFireplaceNode = null, this.boyEndNode = null, this.boyPhoto1Node = null, this.cupNode = null, this.cupHeatNodes = [], this.bucketStartNode = null, this.bucketDropNode = null, this.lighterNode = null, this.photoNode = null, this.mobilePhoneNode = null, this.mobilePhone1Node = null, this.acColdNode = null, this.acCold1Node = null, this.acWarmNode = null, this.acWarm1Node = null, this.ac1Node = null, this.ac2Node = null, this.girlNode = null, this.isInteractionLocked = !1, this.isClosetOpen = !1, this.isBoyDraggable = !1, this.isAcPanelOpen = !1, this.isAcCompleted = !1, this.hasAcPanelGestureStarted = !1, this.voiceToken = 0, this.poseToken = 0, this.currentDialogueKey = "", this.cupHeatIndex = 0, this.fireIndex = 0, this.acSwipeStart = null, this.activeDragState = null, this.completedSteps = new Set(), this.onTouchStart = e => {
      if (1 !== this.phase || this.winstate) return;
      const t = this.getTouchWorldPoint(e);
      if (this.isAcPanelOpen || this.isInteractionLocked) return;
      if (this.tryHandleClick(t)) return void (e.propagationStopped = !0);
      const i = this.hitTestDraggable(t);
      i && (this.beginDrag(i.node, i.kind, e), e.propagationStopped = !0);
    }, this.onTouchMove = e => {
      if (this.activeDragState && 1 === this.phase && !this.isInteractionLocked) {
        const t = this.activeDragState;
        this.setDragNodePositionFromTouch(e, t.dragNode, t.dragParent, t.touchOffset), e.propagationStopped = !0;
      }
    }, this.onTouchEnd = e => {
      if (1 !== this.phase || this.winstate) return void this.resetActiveDrag();
      if (this.isAcPanelOpen || !this.activeDragState || this.isInteractionLocked) return void this.resetActiveDrag();
      const t = this.activeDragState;
      this.activeDragState = null, this.handleDragDrop(t), e.propagationStopped = !0;
    }, this.onAcPanelTouchStart = e => {
      if (!this.isAcPanelOpen) return;
      this.hasAcPanelGestureStarted = !0;
      const t = this.getTouchWorldPoint(e);
      this.acSwipeStart = this.isPointInsideNode(this.ac1Node, t) ? t : null;
    }, this.onAcPanelTouchEnd = e => {
      this.isAcPanelOpen && this.hasAcPanelGestureStarted && (this.handleAcPanelTouchEnd(e), e.propagationStopped = !0);
    }, this.tickCupHeat = () => {
      var e;
      this.isValid && null != (e = this.cupNode) && e.active && 0 !== this.cupHeatNodes.length && (this.showFrame(this.cupHeatNodes, this.cupHeatIndex), this.cupHeatIndex = (this.cupHeatIndex + 1) % this.cupHeatNodes.length);
    }, this.tickFire = () => {
      this.isValid && 0 !== this.fireNodes.length && (this.showFrame(this.fireNodes, this.fireIndex), this.fireIndex = (this.fireIndex + 1) % this.fireNodes.length);
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
    __rea_outer_N.getInstance().showView(__rea_outer_g, void 0, {
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
    this.phase = 0, this.winstate = !1, this.isInteractionLocked = !1, this.isClosetOpen = !1, this.isBoyDraggable = !1, this.isAcPanelOpen = !1, this.isAcCompleted = !1, this.hasAcPanelGestureStarted = !1, this.voiceToken = 0, this.poseToken = 0, this.currentDialogueKey = "", this.cupHeatIndex = 0, this.fireIndex = 0, this.acSwipeStart = null, this.activeDragState = null, this.completedSteps.clear(), this.hasInstallNum = 0, __rea_outer_r.stopVoice();
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_r.playMusic("bgm4", !0, .5), this.applyInitialVisibility(), this.startShiver(), this.startCupHeatLoop(), this.setInputBlocked(!0), __rea_outer_v.getInstance().refreshGameProgress(), this.playDialogue("41_1", () => {
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
    this.phase >= 2 || (this.phase = 2, this.winstate = !0, this.isInteractionLocked = !0, this.unregisterInteractionHandlers(), this.resetActiveDrag(), this.closeAcPanelNodes(), this.hideShiverNodes(), this.setInputBlocked(!0), __rea_outer_v.getInstance().pauseTimer(), this.moveGirlIn(() => {
      this.isValid && 2 === this.phase && this.playDialogue("41_10", () => {
        this.isValid && 2 === this.phase && (this.showBoyEndPose(), this.playDialogue("41_11", () => {
          this.isValid && 2 === this.phase && this.showLevelSuccess(.5);
        }));
      });
    }));
  }
  beginTimeoutFail() {
    this.phase = 2, this.winstate = !1, this.isInteractionLocked = !0, this.cleanupRuntime(), __rea_outer_v.getInstance().pauseTimer(), __rea_outer_N.getInstance().showView(__rea_outer_b, __rea_outer_p.WIN_ANIMATION);
  }
  applyInitialVisibility() {
    var e;
    this.setNodeActive(this.clickRootNode, !1), this.setNodeActive(this.demoNode, !1), this.setNodeActive(this.closetCloseNode, !0), this.setNodeActive(this.closetNode, !1), this.setNodeActive(this.closetOpenNode, !1), this.setNodeActive(this.closetQuiltNode, !1), this.setNodeActive(this.fireplaceNode, !0), this.setFireFramesVisible(-1), this.showBoyShivering(), this.setNodeActive(this.boy1Node, !1), this.setNodeActive(this.boyQuiltNode, !1), this.setNodeActive(this.boyCupNode, !1), this.setNodeActive(this.boyBucketNode, !1), this.setNodeActive(this.boyMobilePhoneNode, !1), this.setNodeActive(this.boyPhotoNode, !1), this.setNodeActive(this.boyFireplaceNode, !1), this.setNodeActive(this.boyEndNode, !1), this.setNodeActive(this.boyPhoto1Node, !1), this.setNodeActive(this.cupNode, !0), this.setNodeActive(this.bucketStartNode, !0), this.setNodeActive(this.bucketDropNode, !1), this.setNodeActive(this.lighterNode, !0), this.setNodeActive(this.photoNode, !0), this.setNodeActive(this.mobilePhoneNode, !0), this.setNodeActive(this.mobilePhone1Node, !1), this.setNodeActive(this.acColdNode, !0), this.setNodeActive(this.acCold1Node, !0), this.setNodeActive(this.acWarmNode, !1), this.setNodeActive(this.acWarm1Node, !1), this.setNodeActive(this.ac1Node, !1), this.setNodeActive(this.ac2Node, !1), this.setNodeActive(this.girlNode, !1), this.setNodeActive(this.bubbleNode, !1), null != (e = this.boyNode) && e.isValid && this.boyNode.setPosition(I);
  }
  registerInteractionHandlers() {
    this.node.on(__rea_outer_s.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(__rea_outer_s.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(__rea_outer_s.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(__rea_outer_s.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
  }
  unregisterInteractionHandlers() {
    var e;
    null != (e = this.node) && e.isValid && (this.node.off(__rea_outer_s.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(__rea_outer_s.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(__rea_outer_s.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(__rea_outer_s.EventType.TOUCH_CANCEL, this.onTouchEnd, this));
  }
  tryHandleClick(e) {
    return this.isPointInsideNode(this.mobilePhoneNode, e) && this.isStepAvailable(6) ? (this.handleMobilePhoneClick(), !0) : this.isPointInsideNode(this.closetCloseNode, e) && !this.isClosetOpen ? (this.openCloset(), !0) : !(this.isAcCompleted || !this.isStepAvailable(4) || !this.isPointInsideNode(this.acColdNode, e) && !this.isPointInsideNode(this.acCold1Node, e)) && (this.openAcPanel(), !0);
  }
  hitTestDraggable(e) {
    const t = [{
      node: this.photoNode,
      kind: "photo",
      available: this.isStepAvailable(7)
    }, {
      node: this.lighterNode,
      kind: "lighter",
      available: this.isStepAvailable(3)
    }, {
      node: this.cupNode,
      kind: "cup",
      available: this.isStepAvailable(2)
    }, {
      node: this.bucketStartNode,
      kind: "bucket",
      available: this.isStepAvailable(5)
    }, {
      node: this.closetQuiltNode,
      kind: "quilt",
      available: this.isClosetOpen && this.isStepAvailable(1)
    }, {
      node: this.boyNode,
      kind: "boy",
      available: this.isBoyDraggable && this.isStepAvailable(8)
    }];
    for (let s = 0; s < t.length; s += 1) {
      var i;
      const o = t[s];
      if (o.available && null != (i = o.node) && i.active && this.isPointInsideNode(o.node, e)) return {
        node: o.node,
        kind: o.kind
      };
    }
    return null;
  }
  beginDrag(e, t, i) {
    const s = e.parent;
    if (null == s || !s.isValid) return;
    const h = e.position.clone(),
      l = e.getSiblingIndex(),
      n = e.worldPosition.clone(),
      a = this.gameNode ?? s;
    e.setParent(a);
    const d = a.getComponent(__rea_outer_o);
    d && e.setPosition(d.convertToNodeSpaceAR(n)), e.setSiblingIndex(a.children.length - 1);
    const c = this.calculateTouchOffset(i, e, a);
    this.setDragNodePositionFromTouch(i, e, a, c), this.activeDragState = {
      dragNode: e,
      dragKind: t,
      dragParent: a,
      touchOffset: c,
      originParent: s,
      originPosition: h,
      originSiblingIndex: l
    };
  }
  handleDragDrop(e) {
    this.isDragOnDropTarget(e) ? this.executeDragSuccess(e) : this.restoreDragNode(e);
  }
  isDragOnDropTarget(e) {
    if ("bucket" === e.dragKind) return this.isNodeNearTarget(e.dragNode, this.bucketDropNode, 0);
    const t = this.getDropTarget(e.dragKind);
    return this.isNodeCenterInside(e.dragNode, t);
  }
  getDropTarget(e) {
    return "lighter" === e || "boy" === e ? this.fireplaceNode : "bucket" === e ? this.bucketDropNode : this.boyNode;
  }
  executeDragSuccess(e) {
    switch (e.dragKind) {
      case "quilt":
        return void this.completeSimpleWarming(1, e.dragNode, this.boyQuiltNode);
      case "cup":
        return this.stopCupHeatLoop(), void this.completeSimpleWarming(2, e.dragNode, this.boyCupNode);
      case "lighter":
        return void this.completeFireplaceLighting(e.dragNode);
      case "bucket":
        return void this.completeBucketWarming(e.dragNode);
      case "photo":
        return void this.completeSimpleWarming(7, e.dragNode, this.boyPhotoNode);
      case "boy":
        return void this.completeFireplaceWarming(e);
      default:
        this.restoreDragNode(e);
    }
  }
  openCloset() {
    this.isClosetOpen = !0, __rea_outer_r.playEffect_1(C), this.setNodeActive(this.closetCloseNode, !1), this.setNodeActive(this.closetNode, !0), this.setNodeActive(this.closetOpenNode, !0), this.setNodeActive(this.closetQuiltNode, !0);
  }
  completeSimpleWarming(e, t, i) {
    this.lockInteraction(), __rea_outer_r.playEffect_1(C), this.setNodeActive(t, !1), this.showWarmingPose(i), this.playWarmingVoice(_[e - 1]), this.markStepDone(e), this.schedulePoseRestore();
  }
  completeBucketWarming(e) {
    this.lockInteraction(), __rea_outer_r.playEffect_1(C), this.setNodeActive(e, !1), this.scheduleOnceIfValid(() => {
      1 === this.phase && (this.setNodeActive(this.bucketDropNode, !1), this.showWarmingPose(this.boyBucketNode), this.playWarmingVoice(_[4]), this.markStepDone(5), this.schedulePoseRestore());
    }, 0);
  }
  completeFireplaceLighting(e) {
    this.lockInteraction(), __rea_outer_r.playEffect_1(C), this.setNodeActive(e, !1), this.startFireLoop(), this.scheduleOnceIfValid(() => {
      1 === this.phase && (this.showWarmingPose(this.boy1Node), this.playWarmingVoice(_[2]), this.markStepDone(3), this.schedulePoseRestore(() => {
        this.isBoyDraggable = !0;
      }));
    }, .5);
  }
  completeFireplaceWarming(e) {
    this.restoreDragNode(e), this.lockInteraction(), __rea_outer_r.playEffect_1(C), this.showWarmingPose(this.boyFireplaceNode), this.playWarmingVoice(_[7]), this.markStepDone(8), this.schedulePoseRestore();
  }
  openAcPanel() {
    var e;
    this.isAcPanelOpen = !0, this.isInteractionLocked = !0, this.acSwipeStart = null, this.hasAcPanelGestureStarted = !1, __rea_outer_r.playEffect_1(C), this.setInputBlocked(!0), this.setNodeActive(this.ac1Node, !0), this.setNodeActive(this.ac2Node, !0), null != (e = this.ac2Node) && e.isValid && (this.ac2Node.angle = -90), this.registerAcPanelHandlers();
  }
  handleAcPanelTouchEnd(e) {
    if (!this.isAcPanelOpen) return;
    this.hasAcPanelGestureStarted = !1;
    const t = this.getTouchWorldPoint(e);
    if (this.acSwipeStart) {
      const e = this.acSwipeStart;
      return this.acSwipeStart = null, void (__rea_outer_A.isSwipeMatching(e, t, __rea_outer_P.Left) && this.executeAcHeat());
    }
    this.cancelAcPanel();
  }
  cancelAcPanel() {
    this.closeAcPanelNodes(), this.isInteractionLocked = !1, this.setInputBlocked(!1);
  }
  executeAcHeat() {
    this.unregisterAcPanelHandlers(), this.isAcPanelOpen = !1, this.acSwipeStart = null, this.hasAcPanelGestureStarted = !1, this.isAcCompleted = !0, __rea_outer_r.playEffect_1("level41_2");
    const e = this.ac2Node;
    null != e && e.isValid && (__rea_outer_y(e), __rea_outer_h(e).to(.25, {
      angle: 0
    }).start()), this.scheduleOnceIfValid(() => {
      1 === this.phase && (this.setNodeActive(this.ac1Node, !1), this.setNodeActive(this.ac2Node, !1), this.setNodeActive(this.acColdNode, !1), this.setNodeActive(this.acCold1Node, !1), this.setNodeActive(this.acWarmNode, !0), this.setNodeActive(this.acWarm1Node, !0), this.scheduleOnceIfValid(() => {
        1 === this.phase && (this.showWarmingPose(this.boy1Node), this.playWarmingVoice(_[3]), this.markStepDone(4), this.schedulePoseRestore());
      }, .5));
    }, .5);
  }
  handleMobilePhoneClick() {
    this.lockInteraction(), __rea_outer_r.playEffect_1(C), this.setNodeActive(this.mobilePhoneNode, !1), this.setNodeActive(this.mobilePhone1Node, !0), this.scheduleOnceIfValid(() => {
      1 === this.phase && (this.setNodeActive(this.mobilePhone1Node, !1), this.showWarmingPose(this.boyMobilePhoneNode), this.playWarmingVoice(_[5]), this.markStepDone(6), this.schedulePoseRestore());
    }, .5);
  }
  showWarmingPose(e) {
    this.hideAllBoyAppearances(), this.setNodeActive(e, !0);
  }
  showBoyShivering() {
    var e;
    this.hideAllBoyAppearances(), null != (e = this.boyNode) && e.isValid && this.boyNode.setPosition(I), this.setNodeActive(this.boyNode, !0), this.setNodeActive(this.boyShiver1Node, !0), this.setNodeActive(this.boyShiver2Node, !0), this.startShiver();
  }
  showBoyIdle() {
    var e;
    this.hideAllBoyAppearances(), null != (e = this.boyNode) && e.isValid && this.boyNode.setPosition(I), this.setNodeActive(this.boyNode, !0), this.hideShiverNodes();
  }
  hideAllBoyAppearances() {
    this.stopShiver(), this.setNodeActive(this.boyNode, !1), this.setNodeActive(this.boy1Node, !1), this.setNodeActive(this.boyQuiltNode, !1), this.setNodeActive(this.boyCupNode, !1), this.setNodeActive(this.boyBucketNode, !1), this.setNodeActive(this.boyMobilePhoneNode, !1), this.setNodeActive(this.boyPhotoNode, !1), this.setNodeActive(this.boyFireplaceNode, !1), this.setNodeActive(this.boyEndNode, !1), this.setNodeActive(this.boyPhoto1Node, !1);
  }
  schedulePoseRestore(e) {
    this.poseToken += 1;
    const t = this.poseToken;
    this.scheduleOnceIfValid(() => {
      if (t === this.poseToken && 1 === this.phase) {
        if (this.completedSteps.size >= 8) return this.showBoyIdle(), null == e || e(), void this.enterPhase2Success();
        this.showBoyShivering(), null == e || e(), this.isInteractionLocked = !1, this.setInputBlocked(!1);
      }
    }, 1.5);
  }
  markStepDone(e) {
    this.completedSteps.has(e) || (this.completedSteps.add(e), this.hasInstallNum = this.completedSteps.size, __rea_outer_v.getInstance().refreshGameProgress());
  }
  isStepAvailable(e) {
    return !this.completedSteps.has(e);
  }
  showBoyEndPose() {
    this.hideAllBoyAppearances(), this.setNodeActive(this.boyEndNode, !0), this.setNodeActive(this.boyPhoto1Node, !0), this.playBoyPhotoPulse();
  }
  playBoyPhotoPulse() {
    const e = this.boyPhoto1Node;
    null != e && e.isValid && (__rea_outer_y(e), e.setScale(1, 1, 1), __rea_outer_h(e).sequence(__rea_outer_h().to(.15, {
      scale: new __rea_outer_i(1.2, 1.2, 1)
    }), __rea_outer_h().to(.15, {
      scale: new __rea_outer_i(1, 1, 1)
    })).repeat(10).start());
  }
  moveGirlIn(e) {
    var t;
    const i = this.girlNode;
    if (null == i || !i.isValid) return void e();
    const s = i.position.clone(),
      l = 540 + ((null == (t = i.getComponent(__rea_outer_o)) ? void 0 : t.width) ?? 232) / 2 + 40;
    i.setPosition(l, s.y, s.z), this.setNodeActive(i, !0), __rea_outer_y(i), __rea_outer_h(i).to(.4, {
      position: s
    }).call(() => {
      this.isValid && e();
    }).start();
  }
  startShiver() {
    this.playShiverOnNode(this.boyShiver1Node), this.playShiverOnNode(this.boyShiver2Node);
  }
  stopShiver() {
    var e, t;
    this.stopTweenIfValid(this.boyShiver1Node), this.stopTweenIfValid(this.boyShiver2Node), null != (e = this.boyShiver1Node) && e.isValid && (this.boyShiver1Node.angle = 0), null != (t = this.boyShiver2Node) && t.isValid && (this.boyShiver2Node.angle = 0);
  }
  hideShiverNodes() {
    this.stopShiver(), this.setNodeActive(this.boyShiver1Node, !1), this.setNodeActive(this.boyShiver2Node, !1);
  }
  playShiverOnNode(e) {
    null != e && e.isValid && (__rea_outer_y(e), e.angle = 0, __rea_outer_m.shakeRepeat(e, .08, 4, .02));
  }
  startCupHeatLoop() {
    this.cupHeatIndex = 0, this.tickCupHeat(), this.schedule(this.tickCupHeat, .2);
  }
  stopCupHeatLoop() {
    this.unschedule(this.tickCupHeat);
  }
  startFireLoop() {
    this.fireIndex = 0, this.tickFire(), this.schedule(this.tickFire, .1);
  }
  showFrame(e, t) {
    for (let i = 0; i < e.length; i += 1) this.setNodeActive(e[i], i === t);
  }
  setFireFramesVisible(e) {
    for (let t = 0; t < this.fireNodes.length; t += 1) this.setNodeActive(this.fireNodes[t], t === e);
  }
  registerAcPanelHandlers() {
    var e;
    null != (e = this.node) && e.isValid && (this.node.on(__rea_outer_s.EventType.TOUCH_START, this.onAcPanelTouchStart, this, !0), this.node.on(__rea_outer_s.EventType.TOUCH_END, this.onAcPanelTouchEnd, this, !0), this.node.on(__rea_outer_s.EventType.TOUCH_CANCEL, this.onAcPanelTouchEnd, this, !0));
  }
  unregisterAcPanelHandlers() {
    var e;
    null != (e = this.node) && e.isValid && (this.node.off(__rea_outer_s.EventType.TOUCH_START, this.onAcPanelTouchStart, this, !0), this.node.off(__rea_outer_s.EventType.TOUCH_END, this.onAcPanelTouchEnd, this, !0), this.node.off(__rea_outer_s.EventType.TOUCH_CANCEL, this.onAcPanelTouchEnd, this, !0));
  }
  closeAcPanelNodes() {
    this.unregisterAcPanelHandlers(), this.isAcPanelOpen = !1, this.acSwipeStart = null, this.hasAcPanelGestureStarted = !1, this.setNodeActive(this.ac1Node, !1), this.setNodeActive(this.ac2Node, !1);
  }
  lockInteraction() {
    this.isInteractionLocked = !0, this.setInputBlocked(!0);
  }
  playWarmingVoice(e) {
    this.voiceToken += 1, this.stopCurrentDialogueEffect(), this.showBubble(e), __rea_outer_r.playVoice(e);
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
    this.scheduleOnce(h, 8), this.stopCurrentDialogueEffect(), this.currentDialogueKey = e, __rea_outer_r.playEffect_1(e, o);
  }
  stopCurrentDialogueEffect() {
    __rea_outer_r.stopVoice(), this.currentDialogueKey && (__rea_outer_r.stopOneEffect(this.currentDialogueKey), this.currentDialogueKey = "");
  }
  showBubble(e) {
    this.unschedule(this.hideBubble), this.bubbleLabel && (this.bubbleLabel.string = this.resolveI18nText(e, T[e] ?? e), this.setNodeActive(this.bubbleLabel.node, !0)), this.setNodeActive(this.bubbleNode, !0), this.scheduleOnce(this.hideBubble, 3);
  }
  resolveI18nText(e, t) {
    const i = __rea_outer_u.getInstance().getKey(e);
    return i && i !== e ? i : t;
  }
  resolveHintKey() {
    for (let e = 1; e <= 8; e += 1) if (!this.completedSteps.has(e)) return k[e - 1];
    return null;
  }
  resetActiveDrag() {
    this.activeDragState && (this.restoreDragNode(this.activeDragState), this.activeDragState = null);
  }
  restoreDragNode(e) {
    const t = e.dragNode;
    "bucket" === e.dragKind && this.setNodeActive(this.bucketDropNode, !1), t.isValid && (t.setParent(e.originParent), t.setSiblingIndex(e.originSiblingIndex), t.setPosition(e.originPosition));
  }
  isNodeNearTarget(e, t, i) {
    return __rea_outer_c.isDragNearTarget(e, t);
  }
  cleanupRuntime() {
    this.unscheduleAllCallbacks(), this.unregisterInteractionHandlers(), this.voiceToken += 1, this.poseToken += 1, this.stopCurrentDialogueEffect(), this.resetActiveDrag(), this.closeAcPanelNodes(), this.stopTweenIfValid(this.boyShiver1Node), this.stopTweenIfValid(this.boyShiver2Node), this.stopTweenIfValid(this.ac2Node), this.stopTweenIfValid(this.girlNode), this.stopTweenIfValid(this.boyPhoto1Node);
  }
  stopTweenIfValid(e) {
    null != e && e.isValid && __rea_outer_y(e);
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
    const i = e.getComponent(__rea_outer_o);
    return !!i && i.getBoundingBoxToWorld().contains(t);
  }
  isNodeCenterInside(e, t, i = !0) {
    return __rea_outer_c.isDragNearTarget(e, t, void 0, i);
  }
  getTouchWorldPoint(e) {
    const t = e.getUILocation();
    return new __rea_outer_l(t.x, t.y);
  }
  getTouchLocalPosition(e, t) {
    const s = e.getUILocation(),
      h = t.getComponent(__rea_outer_o);
    return h ? h.convertToNodeSpaceAR(new __rea_outer_i(s.x, s.y, 0)) : __rea_outer_i.ZERO.clone();
  }
  calculateTouchOffset(e, t, s) {
    const o = this.getTouchLocalPosition(e, s);
    return new __rea_outer_i(t.position.x - o.x, t.position.y - o.y, 0);
  }
  setDragNodePositionFromTouch(e, t, i, s) {
    const o = this.getTouchLocalPosition(e, i);
    t.setPosition(o.x + s.x, o.y + s.y, t.position.z);
  }
  setNodeActive(e, t) {
    null != e && e.isValid && (e.active = t);
  }
  getGameChild(e) {
    var t;
    return (null == (t = this.gameNode) ? void 0 : t.getChildByName(e)) ?? null;
  }
  resolveReferences() {
    var e, t, i, s, o, h, l, a, d, c;
    this.gameNode = this.node.getChildByPath("UIPanel/gameNode"), this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.bubbleNode = this.node.getChildByPath("UIPanel/bubble"), this.demoNode = this.node.getChildByPath("UIPanel/demo"), this.clickRootNode = this.node.getChildByPath("UIPanel/click_root"), this.bubbleLabel = (null == (e = this.bubbleNode) || null == (e = e.getChildByPath("dialog_box/Label")) ? void 0 : e.getComponent(__rea_outer_n)) ?? null, this.closetCloseNode = this.getGameChild("closet_close"), this.closetNode = this.getGameChild("closet"), this.closetOpenNode = this.getGameChild("closet_open"), this.closetQuiltNode = (null == (t = this.closetNode) ? void 0 : t.getChildByName("closet_quilt")) ?? null, this.fireplaceNode = this.getGameChild("fireplace"), this.fireNodes = [(null == (i = this.fireplaceNode) ? void 0 : i.getChildByName("fireplace_fire_1")) ?? null, (null == (s = this.fireplaceNode) ? void 0 : s.getChildByName("fireplace_fire_2")) ?? null, (null == (o = this.fireplaceNode) ? void 0 : o.getChildByName("fireplace_fire_3")) ?? null].filter(e => null !== e), this.boyNode = this.getGameChild("boy"), this.boyShiver1Node = (null == (h = this.boyNode) ? void 0 : h.getChildByName("boy_shiver_1")) ?? null, this.boyShiver2Node = (null == (l = this.boyNode) ? void 0 : l.getChildByName("boy_shiver_2")) ?? null, this.boy1Node = this.getGameChild("boy_1"), this.boyQuiltNode = this.getGameChild("boy_quilt"), this.boyCupNode = this.getGameChild("boy_cup"), this.boyBucketNode = this.getGameChild("boy_bucket"), this.boyMobilePhoneNode = this.getGameChild("boy_mobile_phone"), this.boyPhotoNode = this.getGameChild("boy_photo"), this.boyFireplaceNode = this.getGameChild("boy_fireplace"), this.boyEndNode = this.getGameChild("boy_end"), this.boyPhoto1Node = this.getGameChild("boy_photo_1"), this.cupNode = this.getGameChild("cup"), this.cupHeatNodes = [(null == (a = this.cupNode) ? void 0 : a.getChildByName("cup_heat_1")) ?? null, (null == (d = this.cupNode) ? void 0 : d.getChildByName("cup_heat_2")) ?? null, (null == (c = this.cupNode) ? void 0 : c.getChildByName("cup_heat_3")) ?? null].filter(e => null !== e), this.bucketStartNode = this.getGameChild("bucket-001"), this.bucketDropNode = this.getGameChild("bucket"), this.lighterNode = this.getGameChild("fireplace_lighter"), this.photoNode = this.getGameChild("photo"), this.mobilePhoneNode = this.getGameChild("mobile_phone"), this.mobilePhone1Node = this.getGameChild("mobile_phone_1"), this.acColdNode = this.getGameChild("ac_cold"), this.acCold1Node = this.getGameChild("ac_cold_1"), this.acWarmNode = this.getGameChild("ac_warm"), this.acWarm1Node = this.getGameChild("ac_warm_1"), this.ac1Node = this.node.getChildByPath("UIPanel/gameNode/ac_1"), this.ac2Node = this.node.getChildByPath("UIPanel/gameNode/ac_2"), this.girlNode = this.getGameChild("girl"), this.logMissingNodes();
  }
  logMissingNodes() {
    const e = [],
      t = (t, i) => {
        t || e.push(i);
      };
    t(this.gameNode, "UIPanel/gameNode"), t(this.backBgNode, "UIPanel/backBG"), t(this.bubbleNode, "UIPanel/bubble"), t(this.closetCloseNode, "closet_close"), t(this.closetQuiltNode, "closet/closet_quilt"), t(this.fireplaceNode, "fireplace"), t(this.boyNode, "boy"), t(this.cupNode, "cup"), t(this.bucketStartNode, "bucket-001"), t(this.bucketDropNode, "bucket"), t(this.ac1Node, "UIPanel/gameNode/ac_1"), t(this.ac2Node, "UIPanel/gameNode/ac_2"), t(this.girlNode, "girl"), e.length > 0 && console.warn("[Level_41] prefab 待办清单:", e.join(", "));
  }
}) || f;
__rea_outer_t._RF.pop();
export { __recovered_export_0 as default };
