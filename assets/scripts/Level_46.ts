// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_46.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { Vec3 as __rea_outer_i } from "cc";
import { Node as __rea_outer_s } from "cc";
import { tween as __rea_outer_o } from "cc";
import { UITransform as __rea_outer_h } from "cc";
import { Vec2 as __rea_outer_n } from "cc";
import { Label as __rea_outer_d } from "cc";
import { _decorator as __rea_outer_c } from "cc";
import { default as __rea_outer_a } from "./LevelBase";
import { default as __rea_outer_r } from "./clue-hit-tester";
import { default as __rea_outer_l } from "./AudioManager";
import { I18nController as __rea_outer_p } from "./i18n-controller";
import { UIManager as __rea_outer_N } from "./ui-manager";
import { UILayer as __rea_outer_u } from "./ui-layer";
import { UIHint as __rea_outer_g } from "./uihint";
import { UIFail as __rea_outer_v } from "./uifail";
import { GameController as __rea_outer_A } from "./GameController";
import { stopAllTweens as __rea_outer_m } from "./CocosCompat";
import { default as __rea_outer_w } from "./clue-gesture-detector";
import { SwipeDirection as __rea_outer_b } from "./clue-level-types";
let __recovered_export_0;
var S;
__rea_outer_t._RF.push({}, "b46a1wgfjFNWJ8SiORqEsBG", "Level_46", void 0);
const {
    ccclass: C
  } = __rea_outer_c,
  y = new __rea_outer_i(-800, 800, 0),
  f = new __rea_outer_i(233, -279, 0),
  k = new __rea_outer_i(351.5, 339, 0),
  I = new __rea_outer_i(330.5, 77, 0),
  T = new __rea_outer_i(-61, -252.5, 0),
  _ = new __rea_outer_i(-61, -820, 0),
  P = new __rea_outer_i(-78, 159, 0),
  B = new __rea_outer_i(-57.5, -552, 0),
  H = new __rea_outer_i(-185.5, -97, 0),
  V = new __rea_outer_i(-187, -372.5, 0),
  D = new __rea_outer_i(-135.5, 84.5, 0),
  G = new __rea_outer_i(341.5, 329, 0),
  O = new __rea_outer_i(-81.5, -113.5, 0),
  E = new __rea_outer_i(-46, -126.5, 0),
  x = 6,
  F = 7,
  K = 65,
  W = 66,
  L = 67,
  M = ["46_2", "46_3", "46_4", "46_5", "46_6", "46_7", "46_8"],
  R = ["46_10", "46_11", "46_12", "46_13", "46_14", "46_15", "46_16"],
  U = ["level46_hint1", "level46_hint2", "level46_hint3", "level46_hint4", "level46_hint5", "level46_hint6", "level46_hint7", "level46_hint8"];
__recovered_export_0 = C("Level_46")(S = class extends __rea_outer_a {
  constructor(...e) {
    super(...e), this.phase = 0, this.winstate = !1, this.gameNode = null, this.backBgNode = null, this.bubbleNode = null, this.clickRootNode = null, this.demoNode = null, this.maskNode = null, this.promptBoxNode = null, this.promptLabel = null, this.bgNode = null, this.windowNode = null, this.windowCloseNode = null, this.windowOpenNode = null, this.acColdNode = null, this.acCold1Node = null, this.acColdWarmTouchNode = null, this.acWarmNode = null, this.acWarm1Node = null, this.ac1Node = null, this.ac2Node = null, this.buttonNode = null, this.woolNode = null, this.woolBgNode = null, this.hairTieNode = null, this.scissorsNode = null, this.scissors1Node = null, this.scissors2Node = null, this.frameNode = null, this.framePictureNodes = [], this.photoHangingNode = null, this.photoFallenNode = null, this.boyNode = null, this.boyHair1Node = null, this.boyHair2Node = null, this.boyExpressionNode = null, this.angerNode = null, this.boy1Node = null, this.boyEndNode = null, this.boyAngerNode = null, this.boyAnger1Node = null, this.boyBindNode = null, this.waterRightNode = null, this.waterLeftNode = null, this.waterCenterNode = null, this.water1Node = null, this.water2Node = null, this.water3Node = null, this.npc11Node = null, this.npc1Node = null, this.npc1ExpressionNode = null, this.npc1BalloonNode = null, this.npc2Node = null, this.npc2ExpressionNode = null, this.npc31Node = null, this.npc3Node = null, this.npc3ExpressionNode = null, this.npc4Node = null, this.npc4BeardNode = null, this.npc4HairNode = null, this.npc4Beard1Node = null, this.npc5Clothes1Node = null, this.npc5ClothesNode = null, this.npc51Node = null, this.npc5ShockedNode = null, this.npc5Node = null, this.npc6Node = null, this.npc6ExpressionNode = null, this.npc6HairNode = null, this.npc6Hair1Node = null, this.npc71Node = null, this.npc7Node = null, this.npc72Node = null, this.npcQueue = [], this.queueIndex = 0, this.currentNpcId = 0, this.npcSubstep = 0, this.completedNpcs = new Set(), this.hasCompletedFake = !1, this.hasWashedHair = !1, this.bossState = "locked", this.isAcPanelOpen = !1, this.hasWindowOpened = !1, this.wasKickingWhenBossStarted = !1, this.didNpcCompleteDuringBoss = !1, this.acSwipeStart = null, this.voiceToken = 0, this.actionToken = 0, this.currentVoiceKey = "", this.pendingClickKind = null, this.activeDragState = null, this.swipeGestureState = null, this.nodeHomes = new Map(), this.npcStepOrigins = new Map(), this.onTouchStart = e => {
      if (1 !== this.phase || this.winstate) return;
      const t = this.getTouchWorldPoint(e);
      if (this.isAcPanelOpen) return this.acSwipeStart = this.isPointInsideNode(this.ac1Node, t) ? t : null, void (e.propagationStopped = !0);
      const i = this.hitTestPointer(t);
      if (i) {
        if ("click" === i.kind) return this.pendingClickKind = i.clickKind, void (e.propagationStopped = !0);
        if ("swipe" === i.kind) return this.swipeGestureState = {
          startLocation: t.clone()
        }, void (e.propagationStopped = !0);
        this.beginDrag(i.dragKind, e), e.propagationStopped = !0;
      }
    }, this.onTouchMove = e => {
      if (this.pendingClickKind || this.swipeGestureState || this.isAcPanelOpen) return void (e.propagationStopped = !0);
      if (!this.activeDragState || 1 !== this.phase) return;
      const t = this.activeDragState;
      this.setDragNodePositionFromTouch(e, t.dragNode, t.dragParent, t.touchOffset), e.propagationStopped = !0;
    }, this.onTouchEnd = e => {
      if (1 !== this.phase || this.winstate) return this.resetActiveDrag(), this.pendingClickKind = null, this.swipeGestureState = null, void (this.acSwipeStart = null);
      if (this.isAcPanelOpen) return this.handleAcPanelTouchEnd(e), void (e.propagationStopped = !0);
      if (this.pendingClickKind) {
        const t = this.pendingClickKind;
        return this.pendingClickKind = null, this.handleClick(t), void (e.propagationStopped = !0);
      }
      if (this.swipeGestureState) {
        const t = this.swipeGestureState;
        return this.swipeGestureState = null, this.handleSwipeEnd(t, this.getTouchWorldPoint(e)), void (e.propagationStopped = !0);
      }
      if (!this.activeDragState) return;
      const t = this.activeDragState;
      this.activeDragState = null, this.handleDragDrop(t, e), e.propagationStopped = !0;
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.allItemNum = 8, this.hasInstallNum = 0;
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
    const t = __rea_outer_p.getInstance().getKey(e);
    __rea_outer_N.getInstance().showView(__rea_outer_g, void 0, {
      body: t
    });
  }
  getGameProgressSnapshot() {
    const e = this.hasInstallNum;
    return {
      progress: e / 8,
      label: `${e}/8`
    };
  }
  markAllTasksCompleted() {
    for (let e = 1; e <= 7; e += 1) this.completedNpcs.add(e);
    this.hasCompletedFake = !0, this.hasWashedHair = !0, this.bossState = "done", this.hasInstallNum = 8;
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.npcQueue.length = 0, this.queueIndex = 0, this.currentNpcId = 0, this.npcSubstep = 0, this.completedNpcs.clear(), this.hasCompletedFake = !1, this.hasWashedHair = !1, this.bossState = "locked", this.isAcPanelOpen = !1, this.hasWindowOpened = !1, this.wasKickingWhenBossStarted = !1, this.didNpcCompleteDuringBoss = !1, this.acSwipeStart = null, this.voiceToken = 0, this.actionToken = 0, this.currentVoiceKey = "", this.pendingClickKind = null, this.activeDragState = null, this.swipeGestureState = null, this.hasInstallNum = 0, __rea_outer_l.stopVoice();
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_l.playMusic("bgm4", !0, .5), this.applyInitialVisibility(), this.setInputBlocked(!0), __rea_outer_A.getInstance().refreshGameProgress(), this.playPromptVoice("46_1", () => {
      this.isValid && 0 === this.phase && (this.hidePrompt(), this.setInputBlocked(!1), this.enterPhase1());
    });
  }
  skipOpeningToPlay() {
    return 0 === this.phase && (this.voiceToken += 1, this.stopOpeningDialogue(), this.hidePrompt(), this.setInputBlocked(!1), this.enterPhase1(), !0);
  }
  enterPhase1() {
    0 === this.phase && (this.phase = 1, this.buildNpcQueue(), this.registerInteractionHandlers(), __rea_outer_A.getInstance().refreshGameProgress(), this.spawnCurrentNpc());
  }
  enterPhase2Success() {
    this.phase >= 2 || (this.phase = 2, this.winstate = !0, this.actionToken += 1, this.closeAcPanelNodes(), this.unregisterInteractionHandlers(), this.resetActiveDrag(), this.setInputBlocked(!0), __rea_outer_A.getInstance().pauseTimer(), this.hideClueFrame(), this.playPromptVoice("46_19"), this.showLevelSuccess(1));
  }
  enterPhase2FakeFail() {
    var e;
    if (this.phase >= 2) return;
    this.phase = 2, this.winstate = !1, this.actionToken += 1, this.closeAcPanelNodes(), this.unregisterInteractionHandlers(), this.resetActiveDrag(), this.setInputBlocked(!0), __rea_outer_A.getInstance().pauseTimer(), this.hideClueFrame(), this.stopTweenIfValid(this.npc72Node), this.setNodeActive(this.npc72Node, !1);
    const t = () => {
      var e;
      this.hideDoorBoy(), this.setNodeActive(this.boyEndNode, !0), null != (e = this.boyEndNode) && e.isValid && this.boyEndNode.setPosition(E), this.playPromptVoice("46_18", () => {
        this.isValid && 2 === this.phase && __rea_outer_N.getInstance().showView(__rea_outer_v, __rea_outer_u.WIN_ANIMATION);
      }), __rea_outer_l.playEffect_1("level46_3");
    };
    if (Boolean(null == (e = this.photoHangingNode) ? void 0 : e.active)) return this.setNodeActive(this.boyBindNode, !0), void this.playPhotoFall(() => {
      this.isValid && 2 === this.phase && t();
    });
    this.setNodeActive(this.boyBindNode, !0), t();
  }
  beginTimeoutFail() {
    this.phase = 2, this.winstate = !1, this.actionToken += 1, this.cleanupRuntime(), this.hideClueFrame(), __rea_outer_A.getInstance().pauseTimer(), __rea_outer_N.getInstance().showView(__rea_outer_v, __rea_outer_u.WIN_ANIMATION);
  }
  applyInitialVisibility() {
    this.setNodeActive(this.demoNode, !1), this.setNodeActive(this.clickRootNode, !1), this.setNodeActive(this.maskNode, !1), this.setNodeActive(this.bubbleNode, !1), this.setNodeActive(this.bgNode, !0), this.setNodeActive(this.windowNode, !0), this.setNodeActive(this.windowCloseNode, !0), this.setNodeActive(this.windowOpenNode, !1), this.setNodeActive(this.acColdNode, !0), this.setNodeActive(this.acCold1Node, !0), this.setNodeActive(this.acColdWarmTouchNode, !0), this.setNodeActive(this.acWarmNode, !1), this.setNodeActive(this.acWarm1Node, !1), this.setNodeActive(this.ac1Node, !1), this.setNodeActive(this.ac2Node, !1), this.setNodeActive(this.buttonNode, !0), this.setNodeActive(this.woolBgNode, !0), this.setNodeActive(this.woolNode, !0), this.setNodeActive(this.hairTieNode, !0), this.setNodeActive(this.scissorsNode, !0), this.setNodeActive(this.scissors1Node, !1), this.setNodeActive(this.scissors2Node, !1), this.resetNodePose(this.scissorsNode, f), this.setNodeActive(this.frameNode, !1), this.hideAllFramePictures(), this.resetNodePose(this.photoHangingNode, k), this.setNodeActive(this.photoHangingNode, !0), this.setNodeActive(this.photoFallenNode, !1), this.setNodeActive(this.boyBindNode, !1), this.setNodeActive(this.boyNode, !0), this.setNodeActive(this.boyHair1Node, !0), this.setNodeActive(this.boyHair2Node, !1), this.setNodeActive(this.boyExpressionNode, !1), this.setNodeActive(this.angerNode, !1), this.setNodeActive(this.boy1Node, !1), this.setNodeActive(this.boyEndNode, !1), this.setNodeActive(this.boyAngerNode, !1), this.setNodeActive(this.boyAnger1Node, !1), this.setNodeActive(this.waterRightNode, !1), this.setNodeActive(this.waterLeftNode, !1), this.setNodeActive(this.waterCenterNode, !1), this.setNodeActive(this.water1Node, !1), this.setNodeActive(this.water2Node, !1), this.setNodeActive(this.water3Node, !1), this.hideAllNpcVisuals(), this.restoreHomes();
  }
  buildNpcQueue() {
    const e = [1, 3, 4, 5, 6, 7];
    this.shuffleNumbers(e), this.npcQueue.length = 0, this.npcQueue.push(2, ...e), this.queueIndex = 0;
  }
  shuffleNumbers(e) {
    for (let t = e.length - 1; t > 0; t -= 1) {
      const i = Math.floor(Math.random() * (t + 1)),
        s = e[t];
      e[t] = e[i], e[i] = s;
    }
  }
  spawnCurrentNpc() {
    this.queueIndex >= this.npcQueue.length || (this.currentNpcId = this.npcQueue[this.queueIndex], this.npcSubstep = 0, this.wasKickingWhenBossStarted = !1, this.hideAllNpcVisuals(), this.showNpcDisguise(this.currentNpcId), this.showClueFrame(this.currentNpcId), this.playPromptVoice(M[this.currentNpcId - 1]));
  }
  showNpcDisguise(e) {
    if (1 !== e) {
      if (2 === e) return this.setNodeActive(this.npc2Node, !0), void this.setNodeActive(this.npc2ExpressionNode, !0);
      if (3 !== e) {
        if (4 === e) return this.setNodeActive(this.npc4Node, !0), void this.setNodeActive(this.npc4BeardNode, !0);
        if (5 !== e) return 6 === e ? (this.setNodeActive(this.npc6Node, !0), void this.setNodeActive(this.npc6HairNode, !0)) : void this.setNodeActive(this.npc7Node, !0);
        this.setNodeActive(this.npc5Node, !0);
      } else this.setNodeActive(this.npc3Node, !0);
    } else this.setNodeActive(this.npc1Node, !0);
  }
  hideAllNpcVisuals() {
    [this.npc1Node, this.npc11Node, this.npc1ExpressionNode, this.npc1BalloonNode, this.npc2Node, this.npc2ExpressionNode, this.npc3Node, this.npc31Node, this.npc3ExpressionNode, this.npc4Node, this.npc4BeardNode, this.npc4HairNode, this.npc4Beard1Node, this.npc5Node, this.npc51Node, this.npc5ShockedNode, this.npc5ClothesNode, this.npc5Clothes1Node, this.npc6Node, this.npc6ExpressionNode, this.npc6HairNode, this.npc6Hair1Node, this.npc7Node, this.npc71Node, this.npc72Node].forEach(e => this.setNodeActive(e, !1));
  }
  hideAllFramePictures() {
    this.framePictureNodes.forEach(e => this.setNodeActive(e, !1));
  }
  showClueFrame(e) {
    this.hideAllFramePictures(), this.setNodeActive(this.frameNode, !0), e < 1 || e > 7 || this.setNodeActive(this.framePictureNodes[e - 1], !0);
  }
  hideClueFrame() {
    this.setNodeActive(this.frameNode, !1), this.hideAllFramePictures();
  }
  registerInteractionHandlers() {
    this.node.on(__rea_outer_s.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(__rea_outer_s.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(__rea_outer_s.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(__rea_outer_s.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
  }
  unregisterInteractionHandlers() {
    var e;
    null != (e = this.node) && e.isValid && (this.node.off(__rea_outer_s.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(__rea_outer_s.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(__rea_outer_s.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(__rea_outer_s.EventType.TOUCH_CANCEL, this.onTouchEnd, this));
  }
  hitTestPointer(e) {
    const t = [],
      i = this.isHardBossLock();
    this.hasCompletedFake || "ready" !== this.bossState || this.pushClickHit(t, "photo", this.photoHangingNode, e, !0), i || (this.pushClickHit(t, "button", this.buttonNode, e, 2 === this.currentNpcId && 0 === this.npcSubstep), this.pushClickHit(t, "ac", this.acColdWarmTouchNode, e, 5 === this.currentNpcId && 0 === this.npcSubstep && !this.isAcPanelOpen), this.pushClickHit(t, "window", this.windowCloseNode, e, 7 === this.currentNpcId && !this.hasWindowOpened), 1 === this.currentNpcId && 0 === this.npcSubstep && this.isPointInsideNode(this.npc1Node, e) && t.push({
      kind: "swipe",
      area: this.getNodeArea(this.npc1Node)
    }), this.pushDragHit(t, "hairTie", this.hairTieNode, e, 6 === this.currentNpcId && 0 === this.npcSubstep), this.pushDragHit(t, "wool", this.woolNode, e, 7 === this.currentNpcId && this.hasWindowOpened && 1 === this.npcSubstep), this.pushDragHit(t, "beard", this.npc4Beard1Node, e, 4 === this.currentNpcId && 1 === this.npcSubstep));
    const s = this.canDragScissors();
    return this.pushDragHit(t, "scissors", this.scissorsNode, e, s), 0 === t.length ? null : (t.sort((e, t) => e.area - t.area), t[0]);
  }
  canDragScissors() {
    var e;
    return !(null == (e = this.scissorsNode) || !e.active) && ("waitingCut" === this.bossState || !this.isHardBossLock() && (3 === this.currentNpcId && 0 === this.npcSubstep || 4 === this.currentNpcId && 0 === this.npcSubstep));
  }
  handleClick(e) {
    "photo" !== e ? this.isHardBossLock() || ("button" !== e ? "ac" !== e ? "window" === e && this.openWindow() : this.openAcPanel() : this.beginNpc2Water()) : this.beginBossPhoto();
  }
  handleSwipeEnd(e, t) {
    if (this.isHardBossLock() || 1 !== this.currentNpcId || 0 !== this.npcSubstep) return;
    const i = t.x - e.startLocation.x,
      s = t.y - e.startLocation.y;
    s <= -30 && Math.abs(s) >= 1.2 * Math.abs(i) && this.beginNpc1Reveal();
  }
  beginDrag(e, t) {
    const i = this.getDragSource(e);
    if (null == i || !i.isValid) return;
    const s = i.parent;
    if (null == s || !s.isValid) return;
    const o = i.position.clone(),
      h = i.getSiblingIndex(),
      n = this.gameNode ?? s,
      d = i.worldPosition.clone();
    i.setParent(n), this.placeNodeAtWorld(i, n, d), i.setSiblingIndex(n.children.length - 1);
    const c = this.calculateTouchOffset(t, i, n);
    this.setDragNodePositionFromTouch(t, i, n, c), this.activeDragState = {
      dragKind: e,
      dragNode: i,
      dragParent: n,
      touchOffset: c,
      originParent: s,
      originPosition: o,
      originSiblingIndex: h
    };
  }
  handleDragDrop(e, t) {
    const i = this.getTouchWorldPoint(t);
    "scissors" !== e.dragKind ? this.isHardBossLock() ? this.restoreDragNode(e) : "hairTie" !== e.dragKind ? "wool" !== e.dragKind ? this.handleBeardDrop(e) : this.handleWoolDrop(e) : this.handleHairTieDrop(e) : this.handleScissorsDrop(e, i);
  }
  handleScissorsDrop(e, t) {
    const i = e.dragNode.worldPosition.clone();
    return "waitingCut" === this.bossState && this.isDroppedOnZone(e.dragNode, this.boyBindNode, t) ? (this.restoreDragNode(e), void this.beginBossCut(i)) : this.isHardBossLock() ? void this.restoreDragNode(e) : 3 === this.currentNpcId && 0 === this.npcSubstep && this.isDroppedOnZone(e.dragNode, this.npc3Node, t) ? (this.restoreDragNode(e), void this.beginNpc3Cut(i)) : 4 === this.currentNpcId && 0 === this.npcSubstep && this.isDroppedOnZone(e.dragNode, this.npc4Node, t) ? (this.restoreDragNode(e), void this.beginNpc4CutBeard(i)) : void this.restoreDragNode(e);
  }
  handleHairTieDrop(e) {
    6 === this.currentNpcId && 0 === this.npcSubstep && this.isNodeCenterInside(e.dragNode, this.npc6Node) ? (this.restoreDragNode(e), this.setNodeActive(this.hairTieNode, !1), this.playOperateSound(), this.setNodeActive(this.npc6HairNode, !1), this.setNodeActive(this.npc6Hair1Node, !0), this.setNodeActive(this.npc6ExpressionNode, !0), this.npcSubstep = 2, this.startKickChain([this.npc6Node, this.npc6Hair1Node, this.npc6ExpressionNode], 6)) : this.restoreDragNode(e);
  }
  handleWoolDrop(e) {
    7 === this.currentNpcId && 1 === this.npcSubstep && this.isNodeCenterInside(e.dragNode, this.windowOpenNode) ? (this.restoreDragNode(e), this.setNodeActive(this.woolNode, !1), this.playOperateSound(), this.beginNpc7Jump()) : this.restoreDragNode(e);
  }
  handleBeardDrop(e) {
    4 === this.currentNpcId && 1 === this.npcSubstep && this.isNodeCenterInside(e.dragNode, this.npc4Node) ? (this.restoreDragNode(e), this.setNodeActive(this.npc4Beard1Node, !1), this.playOperateSound(), this.setNodeActive(this.npc4HairNode, !0), this.npcSubstep = 2, this.startKickChain([this.npc4Node, this.npc4HairNode], 4)) : this.restoreDragNode(e);
  }
  beginNpc1Reveal() {
    this.npcSubstep = 1, this.playOperateSound();
    const e = this.npc1BalloonNode;
    null != e && e.isValid && (e.setPosition(T), this.setNodeActive(e, !0), this.tweenMove(e, _, .45, () => {
      this.setNodeActive(e, !1);
    })), this.setNodeActive(this.npc1Node, !1), this.setNodeActive(this.npc11Node, !0), this.setNodeActive(this.npc1ExpressionNode, !0), this.startKickChain([this.npc11Node, this.npc1ExpressionNode], 1);
  }
  beginNpc2Water() {
    if (2 !== this.currentNpcId || 0 !== this.npcSubstep) return;
    this.npcSubstep = 1, this.playOperateSound();
    const e = this.nextActionToken();
    this.setNodeActive(this.waterRightNode, !0), this.setNodeActive(this.waterLeftNode, !0), this.setNodeActive(this.waterCenterNode, !0), this.scheduleOnceIfValid(() => {
      this.isActionToken(e) && 1 === this.phase && (this.setNodeActive(this.water1Node, !0), this.scheduleOnceIfValid(() => {
        this.isActionToken(e) && 1 === this.phase && (this.setNodeActive(this.waterRightNode, !1), this.setNodeActive(this.waterLeftNode, !1), this.setNodeActive(this.waterCenterNode, !1), this.setNodeActive(this.water1Node, !1), this.setNodeActive(this.npc2ExpressionNode, !1), this.setNodeActive(this.boyHair1Node, !1), this.setNodeActive(this.boyHair2Node, !0), this.hasWashedHair = !0, this.setNodeActive(this.water2Node, !0), this.setNodeActive(this.water3Node, !0), this.startKickChain([this.npc2Node], 2));
      }, .5));
    }, .5);
  }
  beginNpc3Cut(e) {
    3 === this.currentNpcId && 0 === this.npcSubstep && (this.npcSubstep = 1, this.playOperateSound(), this.setNodeActive(this.npc3ExpressionNode, !0), this.playScissorsSwap(e, () => {
      1 === this.phase && (this.setNodeActive(this.npc3Node, !1), this.setNodeActive(this.npc3ExpressionNode, !1), this.setNodeActive(this.npc31Node, !0), this.startKickChain([this.npc31Node], 3));
    }));
  }
  beginNpc4CutBeard(e) {
    4 === this.currentNpcId && 0 === this.npcSubstep && (this.npcSubstep = 1, this.playOperateSound(), this.playScissorsSwap(e, () => {
      if (1 !== this.phase) return;
      this.setNodeActive(this.npc4BeardNode, !1);
      const e = this.npc4Beard1Node;
      null != e && e.isValid && (e.setPosition(P), this.setNodeActive(e, !0), this.tweenMove(e, B, .5));
    }));
  }
  openAcPanel() {
    var e;
    5 !== this.currentNpcId || 0 !== this.npcSubstep || this.isAcPanelOpen || (this.isAcPanelOpen = !0, this.acSwipeStart = null, this.setInputBlocked(!1), this.setNodeActive(this.ac1Node, !0), this.setNodeActive(this.ac2Node, !0), this.bringNodeToFront(this.ac1Node), this.bringNodeToFront(this.ac2Node), null != (e = this.ac2Node) && e.isValid && (this.ac2Node.angle = -90));
  }
  handleAcPanelTouchEnd(e) {
    if (!this.isAcPanelOpen) return;
    const t = this.getTouchWorldPoint(e),
      i = this.acSwipeStart;
    this.acSwipeStart = null, i ? __rea_outer_w.isSwipeMatching(i, t, __rea_outer_b.Left) && this.executeAcHeat() : this.cancelAcPanel();
  }
  cancelAcPanel() {
    this.closeAcPanelNodes(), this.setInputBlocked(!1);
  }
  closeAcPanelNodes() {
    this.isAcPanelOpen = !1, this.acSwipeStart = null, this.setNodeActive(this.ac1Node, !1), this.setNodeActive(this.ac2Node, !1);
  }
  executeAcHeat() {
    this.isAcPanelOpen = !1, this.acSwipeStart = null, this.playOperateSound();
    const e = this.ac2Node;
    null != e && e.isValid && (this.stopTweenIfValid(e), __rea_outer_o(e).to(.25, {
      angle: 0
    }).start());
    const t = this.nextActionToken();
    this.scheduleOnceIfValid(() => {
      if (!this.isActionToken(t) || 1 !== this.phase) return;
      this.setNodeActive(this.ac1Node, !1), this.setNodeActive(this.ac2Node, !1), this.setNodeActive(this.backBgNode, !1), this.setNodeActive(this.acColdNode, !1), this.setNodeActive(this.acCold1Node, !1), this.setNodeActive(this.acWarmNode, !0), this.setNodeActive(this.acWarm1Node, !0), this.setNodeActive(this.npc5Node, !1), this.setNodeActive(this.npc51Node, !0), this.setNodeActive(this.npc5ShockedNode, !0);
      const e = this.npc5ClothesNode;
      if (null != e && e.isValid) return e.setPosition(H), this.setNodeActive(e, !0), void this.tweenMove(e, V, .4, () => {
        this.setNodeActive(e, !1), this.setNodeActive(this.npc5Clothes1Node, !0), this.npcSubstep = 2, this.startKickChain([this.npc51Node, this.npc5ShockedNode, this.npc5Clothes1Node], 5);
      });
      this.npcSubstep = 2, this.startKickChain([this.npc51Node, this.npc5ShockedNode], 5);
    }, .5);
  }
  openWindow() {
    7 !== this.currentNpcId || this.hasWindowOpened || (this.hasWindowOpened = !0, this.npcSubstep = 1, this.playOperateSound(), this.setNodeActive(this.windowCloseNode, !1), this.setNodeActive(this.windowOpenNode, !0));
  }
  beginNpc7Jump() {
    this.npcSubstep = 2, this.setNodeActive(this.npc7Node, !1), this.setNodeActive(this.npc71Node, !0);
    const e = this.nextActionToken();
    this.scheduleRevealThenAnger(e, () => {
      this.showAngerFace(!1), this.setNodeActive(this.npc71Node, !1), this.playNpc7Shrink(e);
    });
  }
  playNpc7Shrink(e) {
    const t = this.npc72Node;
    if (null == t || !t.isValid) return;
    t.setPosition(D), t.setScale(1, 1, 1), this.setNodeActive(t, !0);
    const s = new __rea_outer_i(D.x, D.y + 50, D.z);
    this.tweenMoveAndScale(t, s, .8, .25, () => {
      this.isActionToken(e) && 1 === this.phase && (this.setNodeActive(t, !1), t.setScale(1, 1, 1), this.restoreHome(t), this.playKickSound(), this.continueAfterEndVoice(R[6], e, () => {
        this.completeNpc(7);
      }));
    });
  }
  beginBossPhoto() {
    "ready" !== this.bossState || this.hasCompletedFake || (this.bossState = "photoFalling", this.playOperateSound(), this.playPhotoFall(() => {
      1 === this.phase && "photoFalling" === this.bossState && (this.showBoyBind(), this.bossState = "waitingCut");
    }));
  }
  playPhotoFall(e) {
    const t = this.photoHangingNode;
    if (null == t || !t.isValid) return this.setNodeActive(this.photoFallenNode, !0), void e();
    this.stopTweenIfValid(t), __rea_outer_o(t).to(.5, {
      position: I,
      angle: -45
    }).call(() => {
      this.isValid && (this.setNodeActive(t, !1), this.resetNodePose(t, k), this.setNodeActive(this.photoFallenNode, !0), e());
    }).start();
  }
  beginBossCut(e) {
    "waitingCut" === this.bossState && (this.bossState = "cutting", this.playOperateSound(), this.playScissorsSwap(e, () => {
      1 === this.phase && this.continueBossAfterCut();
    }));
  }
  continueBossAfterCut() {
    this.setNodeActive(this.boyBindNode, !1);
    const e = this.shouldStepBackCurrentNpc();
    if (this.wasKickingWhenBossStarted = this.npcSubstep >= 2 && 7 !== this.currentNpcId, e) return this.bossState = "steppingNpc", void this.stepBackCurrentNpc(() => this.playBossReveal());
    this.playBossReveal();
  }
  shouldStepBackCurrentNpc() {
    return !(this.currentNpcId <= 0 || this.completedNpcs.has(this.currentNpcId)) && !this.didNpcCompleteDuringBoss && this.getActiveNpcNodes().length > 0;
  }
  playBossReveal() {
    var e;
    this.bossState = "twinsTalk", this.hideDoorBoy(), this.setNodeActive(this.boy1Node, !0), null != (e = this.boy1Node) && e.isValid && this.boy1Node.setPosition(O), this.setNodeActive(this.boyNode, !0), this.setNodeActive(this.boyHair1Node, !0), this.setNodeActive(this.boyHair2Node, !1), this.showAngerFace(!0), this.playPromptVoice("46_9", () => {
      1 === this.phase && "twinsTalk" === this.bossState && this.kickFakeGroom();
    });
  }
  kickFakeGroom() {
    this.bossState = "kickingFake", this.showAngerFace(!1), this.setNodeActive(this.boyNode, !1), this.setNodeActive(this.boyHair1Node, !1), this.setNodeActive(this.boyAngerNode, !0), this.playKickSound();
    const e = this.nextActionToken();
    this.continueAfterEndVoice("46_17", e, () => {
      this.finishBossKick();
    }), this.flyNodeOff(this.boy1Node);
  }
  finishBossKick() {
    this.hasCompletedFake = !0, this.bossState = "returningNpc", this.addProgress(), this.setNodeActive(this.boyAngerNode, !1), this.setNodeActive(this.boy1Node, !1), this.setNodeActive(this.boyBindNode, !1), this.setNodeActive(this.photoFallenNode, !1), this.setNodeActive(this.boyNode, !0), this.setNodeActive(this.boyHair1Node, !0), this.setNodeActive(this.boyHair2Node, !1), this.returnSteppedNpc(() => {
      if (this.bossState = "done", this.didNpcCompleteDuringBoss) return this.didNpcCompleteDuringBoss = !1, void this.advanceQueueAfterNpc();
      this.wasKickingWhenBossStarted && this.currentNpcId > 0 && this.currentNpcId <= 6 && (this.wasKickingWhenBossStarted = !1, this.startKickChain(this.getActiveNpcNodes(), this.currentNpcId));
    });
  }
  startKickChain(e, t) {
    this.npcSubstep = 2;
    const i = this.nextActionToken();
    this.scheduleRevealThenAnger(i, () => {
      this.isHardBossLock() && "returningNpc" !== this.bossState ? this.wasKickingWhenBossStarted = !0 : (this.showAngerFace(!1), this.setNodeActive(this.boyNode, !1), this.setNodeActive(this.boyHair1Node, !1), this.setNodeActive(this.boyHair2Node, !1), this.setNodeActive(this.getKickPoseNode(), !0), this.playKickSound(), this.flyNodesOff(e, () => {
        this.isActionToken(i) && 1 === this.phase && (this.setNodeActive(this.boyAngerNode, !1), this.setNodeActive(this.boyAnger1Node, !1), this.showDoorBoyIdle());
      }), this.continueAfterEndVoice(R[t - 1], i, () => {
        this.completeNpc(t);
      }));
    });
  }
  scheduleRevealThenAnger(e, t) {
    this.scheduleOnceIfValid(() => {
      this.isActionToken(e) && 1 === this.phase && (this.isHardBossLock() && "returningNpc" !== this.bossState ? this.wasKickingWhenBossStarted = !0 : (this.showAngerFace(!0), this.scheduleOnceIfValid(() => {
        this.isActionToken(e) && 1 === this.phase && t();
      }, .5)));
    }, .5);
  }
  completeNpc(e) {
    if (!this.completedNpcs.has(e)) {
      if (this.completedNpcs.add(e), this.addProgress(), this.hideClueFrame(), 2 === e && "locked" === this.bossState && (this.bossState = "ready"), this.isHardBossLock()) return this.didNpcCompleteDuringBoss = !0, void (this.currentNpcId = 0);
      this.advanceQueueAfterNpc();
    }
  }
  advanceQueueAfterNpc() {
    if (this.currentNpcId = 0, this.completedNpcs.size >= 7) return this.hasCompletedFake ? void this.enterPhase2Success() : void this.enterPhase2FakeFail();
    this.queueIndex += 1, this.spawnCurrentNpc();
  }
  addProgress() {
    this.hasInstallNum = Math.min(8, this.completedNpcs.size + (this.hasCompletedFake ? 1 : 0)), __rea_outer_A.getInstance().refreshGameProgress();
  }
  showDoorBoyIdle() {
    this.setNodeActive(this.boyNode, !0);
    const e = this.hasCompletedFake || !this.hasWashedHair;
    this.setNodeActive(this.boyHair1Node, e), this.setNodeActive(this.boyHair2Node, !e);
  }
  showBoyBind() {
    var e;
    null != (e = this.boyBindNode) && e.isValid && this.boyBindNode.setPosition(G), this.setNodeActive(this.boyBindNode, !0);
  }
  hideDoorBoy() {
    this.setNodeActive(this.boyNode, !1), this.setNodeActive(this.boyHair1Node, !1), this.setNodeActive(this.boyHair2Node, !1), this.setNodeActive(this.boyAngerNode, !1), this.setNodeActive(this.boyAnger1Node, !1), this.showAngerFace(!1);
  }
  getKickPoseNode() {
    return this.hasCompletedFake || !this.hasWashedHair ? this.boyAngerNode : this.boyAnger1Node;
  }
  showAngerFace(e) {
    this.setNodeActive(this.angerNode, e), this.setNodeActive(this.boyExpressionNode, e);
  }
  playScissorsSwap(e, t) {
    this.setNodeActive(this.scissorsNode, !1);
    const i = this.scissors1Node,
      s = this.scissors2Node;
    this.placeSwapScissors(i, e), this.placeSwapScissors(s, e);
    let o = 0;
    const h = this.nextActionToken(),
      n = () => {
        if (!this.isActionToken(h) || 1 !== this.phase) return;
        const e = o % 2 == 0;
        this.setNodeActive(i, e), this.setNodeActive(s, !e), o += 1;
      };
    n(), this.schedule(n, .1), this.scheduleOnceIfValid(() => {
      this.unschedule(n), this.isActionToken(h) && (this.hideSwapScissors(i), this.hideSwapScissors(s), this.resetNodePose(this.scissorsNode, f), this.setNodeActive(this.scissorsNode, !0), t());
    }, .5);
  }
  placeSwapScissors(e, t) {
    null != e && e.isValid && e.parent && (e.setScale(-1, 1, 1), this.placeNodeAtWorld(e, e.parent, t), this.bringNodeToFront(e));
  }
  hideSwapScissors(e) {
    this.setNodeActive(e, !1), null != e && e.isValid && (e.setScale(-1, 1, 1), this.restoreHome(e));
  }
  stepBackCurrentNpc(e) {
    const t = this.getActiveNpcNodes();
    if (this.npcStepOrigins.clear(), 0 === t.length) return void e();
    let s = t.length;
    t.forEach(t => {
      this.npcStepOrigins.set(t, t.position.clone());
      const o = new __rea_outer_i(t.position.x - 280, t.position.y, t.position.z);
      this.tweenMove(t, o, .35, () => {
        this.setNodeActive(t, !1), s -= 1, s <= 0 && e();
      });
    });
  }
  returnSteppedNpc(e) {
    if (0 === this.npcStepOrigins.size) return void e();
    let t = this.npcStepOrigins.size;
    this.npcStepOrigins.forEach((i, s) => {
      if (!s.isValid) return t -= 1, void (t <= 0 && e());
      this.setNodeActive(s, !0), this.tweenMove(s, i, .35, () => {
        t -= 1, t <= 0 && (this.npcStepOrigins.clear(), e());
      });
    });
  }
  getActiveNpcNodes() {
    return this.getNpcFamily(this.currentNpcId).filter(e => Boolean((null == e ? void 0 : e.isValid) && e.active));
  }
  getNpcFamily(e) {
    return 1 === e ? [this.npc1Node, this.npc11Node, this.npc1ExpressionNode, this.npc1BalloonNode] : 2 === e ? [this.npc2Node, this.npc2ExpressionNode] : 3 === e ? [this.npc3Node, this.npc31Node, this.npc3ExpressionNode] : 4 === e ? [this.npc4Node, this.npc4BeardNode, this.npc4HairNode, this.npc4Beard1Node] : 5 === e ? [this.npc5Node, this.npc51Node, this.npc5ShockedNode, this.npc5ClothesNode, this.npc5Clothes1Node] : 6 === e ? [this.npc6Node, this.npc6HairNode, this.npc6Hair1Node, this.npc6ExpressionNode] : 7 === e ? [this.npc7Node, this.npc71Node, this.npc72Node] : [];
  }
  flyNodesOff(e, t) {
    const i = e.filter(e => Boolean((null == e ? void 0 : e.isValid) && e.active));
    if (0 === i.length) return void t();
    let s = i.length;
    i.forEach(e => {
      this.flyNodeOff(e, () => {
        s -= 1, s <= 0 && t();
      });
    });
  }
  flyNodeOff(e, t) {
    if (null == e || !e.isValid) return void (null == t || t());
    const s = new __rea_outer_i(e.position.x + y.x, e.position.y + y.y, e.position.z);
    this.tweenMove(e, s, .5, () => {
      this.setNodeActive(e, !1), this.restoreHome(e), null == t || t();
    });
  }
  tweenMove(e, t, i, s) {
    this.stopTweenIfValid(e), __rea_outer_o(e).to(i, {
      position: t
    }).call(() => {
      this.isValid && (null == s || s());
    }).start();
  }
  tweenMoveAndScale(e, t, s, h, n) {
    this.stopTweenIfValid(e), __rea_outer_o(e).to(h, {
      position: t,
      scale: new __rea_outer_i(s, s, 1)
    }).call(() => {
      this.isValid && (null == n || n());
    }).start();
  }
  isBossSequenceActive() {
    return "locked" !== this.bossState && "ready" !== this.bossState && "done" !== this.bossState;
  }
  isHardBossLock() {
    return this.isBossSequenceActive() && "waitingCut" !== this.bossState;
  }
  resolveHintKey() {
    return this.currentNpcId >= 1 && this.currentNpcId <= 7 && !this.completedNpcs.has(this.currentNpcId) ? U[this.currentNpcId - 1] : "ready" !== this.bossState && "waitingCut" !== this.bossState || this.hasCompletedFake ? null : U[7];
  }
  playOperateSound() {
    __rea_outer_l.playEffect_1("level46_1");
  }
  playKickSound() {
    __rea_outer_l.playEffect_1("level46_2");
  }
  continueAfterEndVoice(e, t, i) {
    this.playPromptVoice(e, () => {
      this.scheduleOnceIfValid(() => {
        this.isActionToken(t) && 1 === this.phase && i();
      }, 1);
    });
  }
  playPromptVoice(e, t) {
    this.voiceToken += 1;
    const i = this.voiceToken;
    if (this.promptLabel && (this.promptLabel.string = __rea_outer_p.getInstance().getKey(e)), this.setNodeActive(this.promptBoxNode, !0), this.stopCurrentVoice(), this.currentVoiceKey = e, this.scheduleOnceIfValid(() => {
      i === this.voiceToken && this.hidePrompt();
    }, 4), __rea_outer_l.playVoice(e), !t) return;
    let s = !1;
    const o = () => {
        !s && this.isValid && i === this.voiceToken && (s = !0, this.unschedule(h), t());
      },
      h = () => {
        o();
      },
      n = this.resolveDialogueHoldSeconds(e);
    this.scheduleOnce(o, n), this.scheduleOnce(h, Math.max(8, n + .5));
  }
  resolveDialogueHoldSeconds(e) {
    var t;
    const i = (null == (t = __rea_outer_l.audioMap.get(e)) ? void 0 : t.getDuration()) ?? 0;
    return i > .1 ? i : 2.5;
  }
  stopCurrentVoice() {
    __rea_outer_l.stopVoice(), this.currentVoiceKey && (__rea_outer_l.stopOneEffect(this.currentVoiceKey), this.currentVoiceKey = "");
  }
  hidePrompt() {
    this.setNodeActive(this.promptBoxNode, !1);
  }
  setInputBlocked(e) {
    this.setNodeActive(this.backBgNode, e);
  }
  getDragSource(e) {
    return "scissors" === e ? this.scissorsNode : "hairTie" === e ? this.hairTieNode : "wool" === e ? this.woolNode : this.npc4Beard1Node;
  }
  restoreDragNode(e) {
    const t = e.dragNode;
    t.isValid && (t.setParent(e.originParent), t.setSiblingIndex(e.originSiblingIndex), t.setPosition(e.originPosition));
  }
  resetActiveDrag() {
    this.activeDragState && (this.restoreDragNode(this.activeDragState), this.activeDragState = null);
  }
  nextActionToken() {
    return this.actionToken += 1, this.actionToken;
  }
  isActionToken(e) {
    return e === this.actionToken && this.isValid;
  }
  scheduleOnceIfValid(e, t) {
    this.scheduleOnce(() => {
      this.isValid && e();
    }, t);
  }
  cleanupRuntime(e = !0) {
    this.unscheduleAllCallbacks(), this.unregisterInteractionHandlers(), this.actionToken += 1, this.voiceToken += 1, e ? this.stopCurrentVoice() : this.currentVoiceKey = "", this.resetActiveDrag(), this.stopAllTrackedTweens();
  }
  stopAllTrackedTweens() {
    [this.photoHangingNode, this.scissorsNode, this.scissors1Node, this.scissors2Node, this.npc1BalloonNode, this.npc4Beard1Node, this.npc5ClothesNode, this.npc72Node, this.boy1Node, this.ac2Node, this.npc1Node, this.npc11Node, this.npc2Node, this.npc3Node, this.npc31Node, this.npc4Node, this.npc5Node, this.npc51Node, this.npc6Node, this.npc7Node, this.npc71Node].forEach(e => this.stopTweenIfValid(e));
  }
  stopTweenIfValid(e) {
    null != e && e.isValid && __rea_outer_m(e);
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
  setNodeActive(e, t) {
    null != e && e.isValid && (e.active = t);
  }
  bringNodeToFront(e) {
    null != e && e.isValid && e.parent && e.setSiblingIndex(e.parent.children.length - 1);
  }
  resetNodePose(e, t) {
    null != e && e.isValid && (this.stopTweenIfValid(e), e.setPosition(t), e.angle = 0);
  }
  rememberHome(e) {
    null != e && e.isValid && this.nodeHomes.set(e, {
      position: e.position.clone()
    });
  }
  restoreHome(e) {
    const t = this.nodeHomes.get(e);
    t && (e.setPosition(t.position), e.angle = 0);
  }
  restoreHomes() {
    this.nodeHomes.forEach((e, t) => {
      t.isValid && (this.stopTweenIfValid(t), t.setPosition(e.position), t.angle = 0);
    }), this.resetNodePose(this.scissorsNode, f), this.resetNodePose(this.photoHangingNode, k);
  }
  getGameChild(e) {
    var t;
    return (null == (t = this.gameNode) ? void 0 : t.getChildByName(e)) ?? null;
  }
  getGameChildAt(e, t) {
    var i;
    const s = (null == (i = this.gameNode) ? void 0 : i.children[e]) ?? null;
    return s ? (s.name !== t && console.warn(`[Level_46] sibling ${e} expected ${t}, got ${s.name}`), s) : null;
  }
  warnIfMissing(e, t) {
    t || console.warn(`[Level_46] prefab 待办: missing ${e}`);
  }
  resolveReferences() {
    var e, t;
    this.gameNode = this.node.getChildByPath("UIPanel/gameNode"), this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.bubbleNode = this.node.getChildByPath("UIPanel/bubble"), this.clickRootNode = this.node.getChildByPath("UIPanel/click_root"), this.demoNode = this.node.getChildByPath("UIPanel/demo"), this.promptBoxNode = (null == (e = this.gameNode) ? void 0 : e.getChildByName("prompt_box")) ?? null, this.promptLabel = (null == (t = this.promptBoxNode) || null == (t = t.getChildByName("Label")) ? void 0 : t.getComponent(__rea_outer_d)) ?? null, this.bgNode = this.getGameChild("bg"), this.windowNode = this.getGameChild("window"), this.windowCloseNode = this.getGameChild("window_close"), this.windowOpenNode = this.getGameChild("window_open"), this.acColdNode = this.getGameChild("ac_cold"), this.acCold1Node = this.getGameChild("ac_cold_1"), this.acColdWarmTouchNode = this.node.getChildByPath("UIPanel/gameNode/clicks/ac_coldwarmtouch"), this.acWarmNode = this.getGameChild("ac_warm"), this.acWarm1Node = this.getGameChild("ac_warm_1"), this.ac1Node = this.node.getChildByPath("UIPanel/gameNode/ac_1"), this.ac2Node = this.getGameChild("ac_2"), this.buttonNode = this.getGameChild("button"), this.woolNode = this.getGameChild("wool"), this.woolBgNode = this.getGameChild("wool_bg"), this.hairTieNode = this.getGameChild("hair_tie"), this.scissorsNode = this.getGameChild("scissors"), this.scissors1Node = this.getGameChild("scissors_1"), this.scissors2Node = this.getGameChild("scissors_2"), this.frameNode = this.getGameChild("frame"), this.framePictureNodes.length = 0;
    for (let e = 1; e <= 7; e += 1) this.framePictureNodes.push(this.getGameChild(String(e)));
    this.photoFallenNode = this.getGameChildAt(x, "photo"), this.photoHangingNode = this.getGameChildAt(F, "photo"), this.boyNode = this.getGameChild("boy"), this.boyHair1Node = this.getGameChild("boy_hair_1"), this.boyHair2Node = this.getGameChild("boy_hair_2"), this.boyExpressionNode = this.getGameChild("boy_expression"), this.angerNode = this.getGameChild("anger"), this.boy1Node = this.getGameChild("boy_1"), this.boyEndNode = this.getGameChild("boy_end"), this.boyAngerNode = this.getGameChild("boy_anger"), this.boyAnger1Node = this.getGameChild("boy_anger_1"), this.boyBindNode = this.getGameChild("boy_bind"), this.waterRightNode = this.getGameChildAt(K, "water"), this.waterLeftNode = this.getGameChildAt(W, "water"), this.waterCenterNode = this.getGameChildAt(L, "water"), this.water1Node = this.getGameChild("water_1"), this.water2Node = this.getGameChild("water_2"), this.water3Node = this.getGameChild("water_3"), this.npc11Node = this.getGameChild("npc_1_1"), this.npc1Node = this.getGameChild("npc_1"), this.npc1ExpressionNode = this.getGameChild("npc_1_expression"), this.npc1BalloonNode = this.getGameChild("npc_1_balloon"), this.npc2Node = this.getGameChild("npc_2"), this.npc2ExpressionNode = this.getGameChild("npc_2_expression"), this.npc31Node = this.getGameChild("npc_3_1"), this.npc3Node = this.getGameChild("npc_3"), this.npc3ExpressionNode = this.getGameChild("npc_3_expression"), this.npc4Node = this.getGameChild("npc_4"), this.npc4BeardNode = this.getGameChild("npc_4_beard"), this.npc4HairNode = this.getGameChild("npc_4_hair"), this.npc4Beard1Node = this.getGameChild("npc_4_beard_1"), this.npc5Clothes1Node = this.getGameChild("npc_5_clothes_1"), this.npc5ClothesNode = this.getGameChild("npc_5_clothes"), this.npc51Node = this.getGameChild("npc_5_1"), this.npc5ShockedNode = this.getGameChild("npc_5_shocked"), this.npc5Node = this.getGameChild("npc_5"), this.npc6Node = this.getGameChild("npc_6"), this.npc6ExpressionNode = this.getGameChild("npc_6_expression"), this.npc6HairNode = this.getGameChild("npc_6_hair"), this.npc6Hair1Node = this.getGameChild("npc_6_hair_1"), this.npc71Node = this.getGameChild("npc_7_1"), this.npc7Node = this.getGameChild("npc_7"), this.npc72Node = this.getGameChild("npc_7_2"), this.maskNode = this.getGameChild("mask"), [this.scissorsNode, this.scissors1Node, this.scissors2Node, this.hairTieNode, this.woolNode, this.photoHangingNode, this.npc1BalloonNode, this.npc4Beard1Node, this.npc5ClothesNode, this.npc72Node, this.boy1Node, this.npc1Node, this.npc11Node, this.npc2Node, this.npc3Node, this.npc31Node, this.npc4Node, this.npc5Node, this.npc51Node, this.npc6Node, this.npc7Node, this.npc71Node].forEach(e => this.rememberHome(e)), this.warnIfMissing("UIPanel/gameNode", this.gameNode), this.warnIfMissing("prompt_box", this.promptBoxNode), this.warnIfMissing("photo hanging", this.photoHangingNode), this.warnIfMissing("clicks/ac_coldwarmtouch", this.acColdWarmTouchNode), this.warnIfMissing("UIPanel/gameNode/ac_1", this.ac1Node), this.warnIfMissing("boy", this.boyNode), this.warnIfMissing("npc_1", this.npc1Node);
  }
}) || S;
__rea_outer_t._RF.pop();
export { __recovered_export_0 as default };
