// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_28.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { applyDecoratedDescriptor as __rea_outer_e } from "./rollupPluginModLoBabelHelpers";
import { initializerDefineProperty as __rea_outer_i } from "./rollupPluginModLoBabelHelpers";
import { cclegacy as __rea_outer_s } from "cc";
import { Node as __rea_outer_o } from "cc";
import { Label as __rea_outer_a } from "cc";
import { _decorator as __rea_outer_h } from "cc";
import { Tween as __rea_outer_r } from "cc";
import { UITransform as __rea_outer_l } from "cc";
import { tween as __rea_outer_n } from "cc";
import { BlockInputEvents as __rea_outer_d } from "cc";
import { Vec2 as __rea_outer_g } from "cc";
import { Vec3 as __rea_outer_c } from "cc";
import { default as __rea_outer_p } from "./LevelBase";
import { default as __rea_outer__ } from "./clue-hit-tester";
import { default as __rea_outer_u } from "./AudioManager";
import { I18nController as __rea_outer_N } from "./i18n-controller";
import { UIManager as __rea_outer_f } from "./ui-manager";
import { UILayer as __rea_outer_b } from "./ui-layer";
import { UIHint as __rea_outer_m } from "./uihint";
import { UIFail as __rea_outer_v } from "./uifail";
import { GameController as __rea_outer_y } from "./GameController";
import { stopAllTweens as __rea_outer_P } from "./CocosCompat";
import { setNodeOpacity as __rea_outer_S } from "./CocosCompat";
import { getUIOpacity as __rea_outer_A } from "./CocosCompat";
import { default as __rea_outer_T } from "./ActionSystem";
let __recovered_export_0;
var G, I, D, w, C, k, B, L, V, O, H, E, x;
__rea_outer_s._RF.push({}, "8b1c9iXYoVG+J5ViTlnjKZj", "Level_28", void 0);
const {
    ccclass: R,
    property: U
  } = __rea_outer_h,
  z = "28_0",
  M = 12,
  K = Math.round(153),
  F = ["level28_hint1", "level28_hint2", "level28_hint3", "level28_hint4", "level28_hint5", "level28_hint6", "level28_hint7", "level28_hint8", "level28_hint9", "level28_hint10", "level28_hint11", "level28_hint12"],
  W = new Map([[3, 2], [6, 5], [9, 6], [11, 4]]);
__recovered_export_0 = (G = R("Level_28"), I = U(__rea_outer_o), D = U(__rea_outer_o), w = U(__rea_outer_a), C = U(__rea_outer_o), k = U(__rea_outer_o), G((V = __rea_outer_e((L = class extends __rea_outer_p {
  constructor(...t) {
    super(...t), __rea_outer_i(this, "gameNode", V, this), __rea_outer_i(this, "bubbleNode", O, this), __rea_outer_i(this, "tipLabel", H, this), __rea_outer_i(this, "backBgNode", E, this), __rea_outer_i(this, "photoNode", x, this), this.phase = 0, this.winstate = !1, this.isInteractionLocked = !1, this.completedSteps = new Set(), this.activeDragState = null, this.swipeTrackState = null, this.voiceToken = 0, this.nodeCache = new Map(), this.onTouchStart = t => {
      if (1 !== this.phase || this.isInteractionLocked) return;
      const e = this.getTouchWorldPoint(t);
      if (this.tryBeginSwipe(e)) return void (t.propagationStopped = !0);
      if (this.tryHandleClick(e)) return void (t.propagationStopped = !0);
      const i = this.hitTestDraggable(e);
      i && (this.beginDrag(i.node, i.kind, t), t.propagationStopped = !0);
    }, this.onTouchMove = t => {
      if (this.activeDragState && 1 === this.phase && !this.isInteractionLocked) {
        const e = this.activeDragState;
        return this.setDragNodePositionFromTouch(t, e.dragNode, e.dragParent, e.touchOffset), void (t.propagationStopped = !0);
      }
      this.swipeTrackState && (t.propagationStopped = !0);
    }, this.onTouchEnd = t => {
      if (this.swipeTrackState) {
        const e = this.swipeTrackState;
        this.swipeTrackState = null;
        const i = this.getTouchWorldPoint(t);
        return this.resolveSwipe(e, i), void (t.propagationStopped = !0);
      }
      if (!this.activeDragState || 1 !== this.phase || this.isInteractionLocked) return void this.resetActiveDrag();
      const e = this.activeDragState;
      this.activeDragState = null;
      const i = this.getTouchWorldPoint(t);
      this.handleDragDrop(e, i), t.propagationStopped = !0;
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.allItemNum = M, this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.enterPhase0();
  }
  onDestroy() {
    var t, e;
    this.unscheduleAllCallbacks(), null != (t = this.node) && t.isValid && this.unregisterInteractionHandlers(), this.stopBreathAnimations(), __rea_outer_r.stopAllByTag(280), null != (e = this.photoNode) && e.isValid && __rea_outer_P(this.photoNode), __rea_outer_u.stopVoice(), this.activeDragState = null, this.swipeTrackState = null, this.nodeCache.clear();
  }
  handleTimeExpired() {
    return !!(this.phase >= 2 || this.winstate);
  }
  showHint() {
    if (1 !== this.phase) return;
    const t = this.resolveHintKey();
    if (!t) return;
    const e = __rea_outer_N.getInstance().getKey(t);
    __rea_outer_f.getInstance().showView(__rea_outer_m, void 0, {
      body: e
    });
  }
  getGameProgressSnapshot() {
    const t = this.completedSteps.size;
    return {
      progress: t / M,
      label: `${t}/12`
    };
  }
  markAllTasksCompleted() {
    for (let t = 1; t <= M; t += 1) this.completedSteps.add(t);
    this.hasInstallNum = M;
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.isInteractionLocked = !1, this.activeDragState = null, this.swipeTrackState = null, this.voiceToken = 0, this.completedSteps.clear(), this.hasInstallNum = 0, this.nodeCache.clear(), __rea_outer_u.stopVoice();
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_u.playMusic("bgm4", !0, .5), this.applyInitialVisibility(), this.startBreathAnimations(), this.setInputBlocked(!0), this.playIntroLine(() => {
      this.isValid && 0 === this.phase && (this.hideBubble(), this.setInputBlocked(!1), this.enterPhase1());
    });
  }
  skipOpeningToPlay() {
    return 0 === this.phase && (this.voiceToken += 1, this.stopOpeningDialogue(), this.hideBubble(), this.setInputBlocked(!1), this.enterPhase1(), !0);
  }
  enterPhase1() {
    0 === this.phase && (this.phase = 1, this.registerInteractionHandlers(), __rea_outer_y.getInstance().refreshGameProgress());
  }
  enterPhase2Success() {
    this.phase >= 2 || (this.phase = 2, this.winstate = !0, this.unregisterInteractionHandlers(), __rea_outer_y.getInstance().pauseTimer(), this.scheduleOnce(() => {
      this.isValid && this.winstate && this.playPhotoEffect(() => {
        this.isValid && this.showLevelSuccess(1.5);
      });
    }, 1.5));
  }
  beginFailSequence() {
    this.phase >= 2 || (this.phase = 2, this.winstate = !1, this.unregisterInteractionHandlers(), __rea_outer_y.getInstance().pauseTimer(), __rea_outer_f.getInstance().showView(__rea_outer_v, __rea_outer_b.WIN_ANIMATION));
  }
  applyInitialVisibility() {
    var t, e;
    ["bg", "leftgirl/left_girl", "leftgirl/left_girl/left_head_1", "leftgirl/left_girl/left_left_arm", "leftgirl/left_girl/cake", "left_tops_1", "hand_in_hand", "hair_tie", "boy/boy", "boy/boy/boy_head", "boy/boy/boy_pants", "boy/boy/boy_right_arm_1", "rightgirl/right_girl", "rightgirl/right_girl/right_hair", "rightgirl/right_girl/right_left_arm", "rightgirl/right_girl/right_right_arm", "rightgirl/right_girl/right_pants"].forEach(t => {
      this.setNodeActive(this.getGameNodePath(t), !0);
    }), ["leftgirl/left_girl/left_head", "leftgirl/left_girl/left_tops", "leftgirl/left_girl/left_left_arm_1", "leftgirl/left_girl/left_right_arm1", "leftgirl/left_girl/left_right_arm1_1", "leftgirl/left_girl/left_right_arm", "leftgirl/left_girl/left_right_arm_1", "hand_in_hand_1", "hair_tie_1", "boy/boy/boy_head_1", "boy/boy/boy_head_2", "boy/boy/boy_left_arm", "boy/boy/boy_pants1", "boy/boy/boy_pants_1", "boy/boy/boy_right_arm_2", "boy/boy/boy_right_arm", "rightgirl/right_girl/right_hair_1", "rightgirl/right_girl/right_pants_1", "rightgirl/right_girl/right_right_arm_1", "photo"].forEach(t => {
      this.setNodeActive(this.getGameNodePath(t), !1);
    }), this.setNodeActive(this.photoNode, !1), null != (t = this.photoNode) && t.isValid && __rea_outer_S(this.photoNode, 0), this.setNodeActive(this.node.getChildByPath("UIPanel/demo"), !1), this.setNodeActive(this.backBgNode, !1), this.setNodeActive(this.bubbleNode, !1), this.setNodeActive((null == (e = this.bubbleNode) ? void 0 : e.getChildByName("dialog_box_1")) ?? null, !1);
  }
  startBreathAnimations() {
    this.startBreathOnNode(this.getGameNodePath("leftgirl/left_girl"), 281), this.startBreathOnNode(this.getGameNodePath("boy/boy"), 282), this.startBreathOnNode(this.getGameNodePath("rightgirl/right_girl"), 283);
  }
  startBreathOnNode(t, e) {
    if (null == t || !t.isValid) return;
    __rea_outer_r.stopAllByTag(e);
    const i = t.scale.y;
    __rea_outer_T.RoseBreath_tag(t, i, .02, 1, 0, e);
  }
  stopBreathAnimations() {
    __rea_outer_r.stopAllByTag(281), __rea_outer_r.stopAllByTag(282), __rea_outer_r.stopAllByTag(283);
  }
  playIntroLine(t) {
    this.showDialogue(z), this.playVoiceEffect(z, t);
  }
  showDialogue(t) {
    var e;
    const i = __rea_outer_N.getInstance();
    this.tipLabel && (this.tipLabel.string = i.getKey(t), this.setNodeActive(this.tipLabel.node, !0)), this.setNodeActive((null == (e = this.bubbleNode) ? void 0 : e.getChildByName("dialog_box")) ?? null, !0), this.setNodeActive(this.bubbleNode, !0);
  }
  hideBubble() {
    var t;
    this.setNodeActive(this.bubbleNode, !1), this.setNodeActive((null == (t = this.tipLabel) ? void 0 : t.node) ?? null, !1);
  }
  playVoiceEffect(t, e) {
    this.voiceToken += 1;
    const i = this.voiceToken;
    let s = !1;
    const o = () => {
        !s && this.isValid && i === this.voiceToken && (s = !0, this.unschedule(a), null == e || e());
      },
      a = () => {
        o();
      };
    e && this.scheduleOnce(a, 4), __rea_outer_u.stopVoice(), __rea_outer_u.playEffect_1(t, e ? o : void 0);
  }
  registerInteractionHandlers() {
    this.node.on(__rea_outer_o.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(__rea_outer_o.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(__rea_outer_o.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(__rea_outer_o.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
  }
  unregisterInteractionHandlers() {
    this.node.off(__rea_outer_o.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(__rea_outer_o.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(__rea_outer_o.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(__rea_outer_o.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
  }
  tryBeginSwipe(t) {
    const e = this.collectSwipeCandidates();
    e.sort((t, e) => this.getNodeRenderOrder(e.targetNode) - this.getNodeRenderOrder(t.targetNode));
    for (let i = 0; i < e.length; i += 1) {
      const s = e[i];
      if (s.targetNode.active && this.isPointInsideNode(s.targetNode, t)) return this.swipeTrackState = {
        startLocation: t.clone(),
        candidate: s
      }, !0;
    }
    return !1;
  }
  collectSwipeCandidates() {
    const t = [];
    return this.isStepAvailable(1) && this.pushSwipeCandidate(t, 1, "left", "leftgirl/left_girl/left_head_1"), this.isStepAvailable(2) && this.pushSwipeCandidate(t, 2, "right", "boy/boy/boy_head"), this.isStepAvailable(3) && (this.pushSwipeCandidate(t, 3, "up", "boy/boy/boy_head_1"), this.pushSwipeCandidate(t, 3, "up", "boy/boy/boy_head_2")), this.isStepAvailable(6) && this.pushSwipeCandidate(t, 6, "down", "boy/boy/boy_right_arm_1"), this.isStepAvailable(8) && this.pushSwipeCandidate(t, 8, "down", "rightgirl/right_girl/right_right_arm"), this.isStepAvailable(9) && (this.pushSwipeCandidate(t, 9, "left", "boy/boy/boy_right_arm_1"), this.pushSwipeCandidate(t, 9, "left", "boy/boy/boy_right_arm_2")), this.isStepAvailable(11) && this.pushSwipeCandidate(t, 11, "left", "swips/swip11"), t;
  }
  pushSwipeCandidate(t, e, i, s) {
    const o = this.getGameNodePath(s);
    null != o && o.isValid && t.push({
      stepNumber: e,
      direction: i,
      targetNode: o
    });
  }
  resolveSwipe(t, e) {
    const i = e.x - t.startLocation.x,
      s = e.y - t.startLocation.y,
      o = this.resolveSwipeDirection(i, s);
    o && o === t.candidate.direction && this.isStepAvailable(t.candidate.stepNumber) && this.executeSwipeStep(t.candidate.stepNumber);
  }
  resolveSwipeDirection(t, e) {
    const i = Math.abs(t),
      s = Math.abs(e);
    return i < 10 && s < 10 ? null : i > 1.2 * s ? t < 0 ? "left" : "right" : s > 1.2 * i ? e < 0 ? "down" : "up" : null;
  }
  executeSwipeStep(t) {
    switch (t) {
      case 1:
        this.setNodeActive(this.getGameNodePath("leftgirl/left_girl/left_head_1"), !1), this.setNodeActive(this.getGameNodePath("leftgirl/left_girl/left_head"), !0), this.completeStep(1);
        break;
      case 2:
        this.setNodeActive(this.getGameNodePath("boy/boy/boy_head"), !1), this.setNodeActive(this.getGameNodePath("boy/boy/boy_head_1"), !0), this.setNodeActive(this.getGameNodePath("boy/boy/boy_head_2"), !0), this.completeStep(2);
        break;
      case 3:
        this.setNodeActive(this.getGameNodePath("boy/boy/boy_head_2"), !1), this.completeStep(3);
        break;
      case 6:
        this.setNodeActive(this.getGameNodePath("boy/boy/boy_right_arm_2"), !0), this.completeStep(6);
        break;
      case 8:
        this.setNodeActive(this.getGameNodePath("rightgirl/right_girl/right_right_arm"), !1), this.setNodeActive(this.getGameNodePath("rightgirl/right_girl/right_right_arm_1"), !0), this.completeStep(8);
        break;
      case 9:
        this.setNodeActive(this.getGameNodePath("boy/boy/boy_right_arm_1"), !1), this.setNodeActive(this.getGameNodePath("boy/boy/boy_right_arm_2"), !1), this.setNodeActive(this.getGameNodePath("boy/boy/boy_right_arm"), !0), this.completeStep(9);
        break;
      case 11:
        this.applyStep11Result(), this.completeStep(11);
    }
  }
  tryHandleClick(t) {
    if (!this.isStepAvailable(4)) return !1;
    const e = [this.getGameNodePath("hand_in_hand"), this.getGameNodePath("hand_in_hand_1")];
    for (let i = 0; i < e.length; i += 1) {
      const s = e[i];
      if (null != s && s.active && this.isPointInsideNode(s, t)) return this.applyStep4Result(), this.completeStep(4), !0;
    }
    return !1;
  }
  applyStep4Result() {
    if (this.setNodeActive(this.getGameNodePath("hand_in_hand"), !1), this.setNodeActive(this.getGameNodePath("hand_in_hand_1"), !1), this.setNodeActive(this.getGameNodePath("boy/boy/boy_left_arm"), !0), this.isStepCompleted(12)) return this.setNodeActive(this.getGameNodePath("leftgirl/left_girl/left_right_arm1"), !1), void this.setNodeActive(this.getGameNodePath("leftgirl/left_girl/left_right_arm1_1"), !0);
    this.setNodeActive(this.getGameNodePath("leftgirl/left_girl/left_right_arm1_1"), !1), this.setNodeActive(this.getGameNodePath("leftgirl/left_girl/left_right_arm1"), !0);
  }
  applyStep11Result() {
    if (this.setNodeActive(this.getGameNodePath("leftgirl/left_girl/left_right_arm1"), !1), this.setNodeActive(this.getGameNodePath("leftgirl/left_girl/left_right_arm1_1"), !1), this.isStepCompleted(12)) return this.setNodeActive(this.getGameNodePath("leftgirl/left_girl/left_right_arm"), !1), void this.setNodeActive(this.getGameNodePath("leftgirl/left_girl/left_right_arm_1"), !0);
    this.setNodeActive(this.getGameNodePath("leftgirl/left_girl/left_right_arm_1"), !1), this.setNodeActive(this.getGameNodePath("leftgirl/left_girl/left_right_arm"), !0);
  }
  applyStep12Result() {
    if (this.setNodeActive(this.getGameNodePath("left_tops_1"), !1), this.setNodeActive(this.getGameNodePath("leftgirl/left_girl/left_tops"), !0), this.setNodeActive(this.getGameNodePath("leftgirl/left_girl/left_left_arm"), !1), this.setNodeActive(this.getGameNodePath("leftgirl/left_girl/left_left_arm_1"), !0), this.isStepCompleted(4)) {
      this.setNodeActive(this.getGameNodePath("hand_in_hand"), !1), this.setNodeActive(this.getGameNodePath("hand_in_hand_1"), !1);
      const t = this.getGameNodePath("leftgirl/left_girl/left_right_arm1");
      null != t && t.active && (this.setNodeActive(t, !1), this.setNodeActive(this.getGameNodePath("leftgirl/left_girl/left_right_arm1_1"), !0));
    } else this.setNodeActive(this.getGameNodePath("hand_in_hand"), !1), this.setNodeActive(this.getGameNodePath("hand_in_hand_1"), !0);
    if (this.isStepCompleted(11)) {
      const t = this.getGameNodePath("leftgirl/left_girl/left_right_arm");
      null != t && t.active && (this.setNodeActive(t, !1), this.setNodeActive(this.getGameNodePath("leftgirl/left_girl/left_right_arm_1"), !0));
    }
  }
  hitTestDraggable(t) {
    const e = [];
    if (this.isStepAvailable(5)) {
      const t = this.getGameNodePath("hair_tie");
      null != t && t.active && e.push({
        node: t,
        kind: "hair_tie"
      });
    }
    if (this.isStepAvailable(7)) {
      const t = this.getGameNodePath("boy/boy/boy_pants");
      null != t && t.active && e.push({
        node: t,
        kind: "boy_pants"
      });
    }
    if (this.isStepAvailable(10)) {
      const t = this.getGameNodePath("leftgirl/left_girl/cake");
      null != t && t.active && e.push({
        node: t,
        kind: "cake"
      });
    }
    if (this.isStepAvailable(12)) {
      const t = this.getGameNodePath("left_tops_1");
      null != t && t.active && e.push({
        node: t,
        kind: "left_tops"
      });
    }
    e.sort((t, e) => this.getNodeRenderOrder(e.node) - this.getNodeRenderOrder(t.node));
    for (let i = 0; i < e.length; i += 1) {
      const s = e[i];
      if (this.isPointInsideNode(s.node, t)) return s;
    }
    return null;
  }
  beginDrag(t, e, i) {
    let s = t,
      o = null,
      a = null;
    "hair_tie" === e ? (o = this.getGameNodePath("hair_tie_1"), a = t, s = this.prepareIntermediateDrag(t, o)) : "boy_pants" === e && (o = this.getGameNodePath("boy/boy/boy_pants1"), a = t, s = this.prepareIntermediateDrag(t, o));
    const h = s.parent,
      r = s.position.clone(),
      n = s.getSiblingIndex(),
      d = s.worldPosition.clone(),
      g = this.gameNode ?? h;
    s.setParent(g);
    const c = g.getComponent(__rea_outer_l);
    c && s.setPosition(c.convertToNodeSpaceAR(d)), s.setSiblingIndex(g.children.length - 1);
    const p = this.calculateTouchOffset(i, s, g);
    this.setDragNodePositionFromTouch(i, s, g, p), this.activeDragState = {
      dragNode: s,
      dragKind: e,
      dragParent: g,
      touchOffset: p,
      originParent: h,
      originPosition: r,
      originSiblingIndex: n,
      sourceNode: a,
      intermediateNode: o
    };
  }
  prepareIntermediateDrag(t, e) {
    if (null == e || !e.isValid) return t;
    const i = t.worldPosition.clone(),
      s = e.parent,
      o = null == s ? void 0 : s.getComponent(__rea_outer_l);
    return o && e.setPosition(o.convertToNodeSpaceAR(i)), this.setNodeActive(t, !1), this.setNodeActive(e, !0), e;
  }
  resetActiveDrag() {
    this.activeDragState && (this.restoreDragNode(this.activeDragState), this.activeDragState = null);
  }
  restoreDragNode(t) {
    var e;
    if ("hair_tie" === t.dragKind || "boy_pants" === t.dragKind) return null != (e = t.intermediateNode) && e.isValid && (t.intermediateNode.setParent(t.originParent), t.intermediateNode.setSiblingIndex(t.originSiblingIndex), t.intermediateNode.setPosition(t.originPosition), this.setNodeActive(t.intermediateNode, !1)), void this.setNodeActive(t.sourceNode, !0);
    const i = t.dragNode;
    i.isValid && (i.setParent(t.originParent), i.setSiblingIndex(t.originSiblingIndex), i.setPosition(t.originPosition));
  }
  handleDragDrop(t, e) {
    if ("hair_tie" === t.dragKind && this.isStepAvailable(5)) return this.isHairTieDropHit(e, t.dragNode) ? (this.finalizeIntermediateDrag(t, !1), this.setNodeActive(this.getGameNodePath("rightgirl/right_girl/right_hair"), !1), this.setNodeActive(this.getGameNodePath("rightgirl/right_girl/right_hair_1"), !0), void this.completeStep(5)) : void this.restoreDragNode(t);
    if ("boy_pants" === t.dragKind && this.isStepAvailable(7)) return this.isBoyPantsDropHit(e, t.dragNode) ? (this.finalizeIntermediateDrag(t, !1), this.setNodeActive(this.getGameNodePath("rightgirl/right_girl/right_pants"), !1), this.setNodeActive(this.getGameNodePath("rightgirl/right_girl/right_pants_1"), !0), this.setNodeActive(this.getGameNodePath("boy/boy/boy_pants_1"), !0), void this.completeStep(7)) : void this.restoreDragNode(t);
    if ("cake" === t.dragKind && this.isStepAvailable(10)) return this.isCakeDropHit(e, t.dragNode) ? (this.finalizeDirectDrag(t, !1), void this.completeStep(10)) : void this.restoreDragNode(t);
    if ("left_tops" === t.dragKind && this.isStepAvailable(12)) {
      const i = this.getGameNodePath("leftgirl/left_girl");
      return i && this.isDropOverlapping(t.dragNode, i, e) ? (this.finalizeDirectDrag(t, !1), this.applyStep12Result(), void this.completeStep(12)) : void this.restoreDragNode(t);
    }
    this.restoreDragNode(t);
  }
  finalizeIntermediateDrag(t, e) {
    var i;
    null != (i = t.intermediateNode) && i.isValid && (t.intermediateNode.setParent(t.originParent), t.intermediateNode.setSiblingIndex(t.originSiblingIndex), t.intermediateNode.setPosition(t.originPosition), this.setNodeActive(t.intermediateNode, !1)), this.setNodeActive(t.sourceNode, e);
  }
  finalizeDirectDrag(t, e) {
    const i = t.dragNode;
    i.isValid && (i.setParent(t.originParent), i.setSiblingIndex(t.originSiblingIndex), i.setPosition(t.originPosition), this.setNodeActive(i, e));
  }
  isHairTieDropHit(t, e) {
    const i = [this.getGameNodePath("rightgirl/right_girl/right_hair"), this.getGameNodePath("rightgirl/right_girl/right_hair_1"), this.getGameNodePath("rightgirl/right_girl")];
    return this.isAnyDropHit(i, e, t);
  }
  isBoyPantsDropHit(t, e) {
    const i = [this.getGameNodePath("rightgirl/right_girl/right_pants"), this.getGameNodePath("rightgirl/right_girl/right_pants_1"), this.getGameNodePath("rightgirl/right_girl")];
    return this.isAnyDropHit(i, e, t);
  }
  isCakeDropHit(t, e) {
    const i = [this.getGameNodePath("leftgirl/left_girl/left_head"), this.getGameNodePath("leftgirl/left_girl/left_head_1")];
    return this.isAnyDropHit(i, e, t);
  }
  isAnyDropHit(t, e, i) {
    for (let s = 0; s < t.length; s += 1) {
      const o = t[s];
      if (null != o && o.active && this.isDropOverlapping(e, o, i)) return !0;
    }
    return !1;
  }
  isDropOverlapping(t, e, i) {
    return __rea_outer__.isDragNearTarget(t, e);
  }
  completeStep(t) {
    if (!this.isStepAvailable(t)) return;
    if (this.TryQuickWin()) return;
    this.completedSteps.add(t), this.hasInstallNum = this.completedSteps.size, __rea_outer_u.playEffect_1("level28_1");
    const e = `28_${t}`;
    this.voiceToken += 1, this.showDialogue(e), __rea_outer_u.playVoice(e), __rea_outer_y.getInstance().refreshGameProgress(), this.completedSteps.size >= M && this.enterPhase2Success();
  }
  isStepCompleted(t) {
    return this.completedSteps.has(t);
  }
  isStepAvailable(t) {
    if (t < 1 || t > M) return !1;
    if (this.isStepCompleted(t)) return !1;
    const e = W.get(t);
    return !(void 0 !== e && !this.isStepCompleted(e));
  }
  playPhotoEffect(t) {
    const e = this.photoNode;
    if (null == e || !e.isValid) return void t();
    __rea_outer_u.playEffect_1("level28_2"), __rea_outer_P(e), this.setNodeActive(e, !0);
    const i = __rea_outer_A(e);
    i.opacity = K, __rea_outer_n(i).tag(280).delay(.15).to(.15, {
      opacity: 0
    }).call(() => {
      this.isValid && (this.setNodeActive(e, !1), __rea_outer_S(e, 0), t());
    }).start();
  }
  resolveHintKey() {
    for (let t = 1; t <= M; t += 1) if (this.isStepAvailable(t)) return F[t - 1] ?? null;
    return null;
  }
  resolveReferences() {
    var t, e;
    (this.gameNode = this.gameNode ?? this.node.getChildByPath("UIPanel/gameNode"), this.bubbleNode = this.bubbleNode ?? this.node.getChildByPath("UIPanel/bubble"), this.backBgNode = this.backBgNode ?? this.node.getChildByPath("UIPanel/backBG"), this.photoNode = this.photoNode ?? (null == (t = this.gameNode) ? void 0 : t.getChildByName("photo")) ?? null, this.tipLabel) || (this.tipLabel = (null == (e = this.bubbleNode) || null == (e = e.getChildByPath("dialog_box/Label")) ? void 0 : e.getComponent(__rea_outer_a)) ?? null);
    this.gameNode || console.warn("[Level_28] 缺少 gameNode 节点"), this.bubbleNode || console.warn("[Level_28] 缺少 bubble 节点");
  }
  getGameNodePath(t) {
    var e;
    if (this.nodeCache.has(t)) {
      const e = this.nodeCache.get(t) ?? null;
      if (null != e && e.isValid) return e;
    }
    const i = (null == (e = this.gameNode) ? void 0 : e.getChildByPath(t)) ?? null;
    return this.nodeCache.set(t, i), i;
  }
  setInputBlocked(t) {
    const e = this.backBgNode;
    if (null == e || !e.isValid) return;
    e.active = t, t && __rea_outer_S(e, 0);
    const i = e.getComponent(__rea_outer_d);
    i && (i.enabled = t);
  }
  setNodeActive(t, e) {
    null != t && t.isValid && (t.active = e);
  }
  getNodeRenderOrder(t) {
    let e = 0,
      i = 1,
      s = t;
    for (; s;) e += s.getSiblingIndex() * i, i *= 128, s = s.parent;
    return e;
  }
  isPointInsideNode(t, e) {
    const i = null == t ? void 0 : t.getComponent(__rea_outer_l);
    return !!i && i.getBoundingBoxToWorld().contains(e);
  }
  getTouchWorldPoint(t) {
    const e = t.getUILocation();
    return new __rea_outer_g(e.x, e.y);
  }
  getTouchLocalPosition(t, e) {
    const i = t.getUILocation(),
      s = e.getComponent(__rea_outer_l);
    return s ? s.convertToNodeSpaceAR(new __rea_outer_c(i.x, i.y, 0)) : __rea_outer_c.ZERO.clone();
  }
  calculateTouchOffset(t, e, i) {
    const s = this.getTouchLocalPosition(t, i);
    return new __rea_outer_c(e.position.x - s.x, e.position.y - s.y, 0);
  }
  setDragNodePositionFromTouch(t, e, i, s) {
    const o = this.getTouchLocalPosition(t, i);
    e.setPosition(o.x + s.x, o.y + s.y, e.position.z);
  }
}).prototype, "gameNode", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), O = __rea_outer_e(L.prototype, "bubbleNode", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), H = __rea_outer_e(L.prototype, "tipLabel", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), E = __rea_outer_e(L.prototype, "backBgNode", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), x = __rea_outer_e(L.prototype, "photoNode", [k], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), B = L)) || B);
__rea_outer_s._RF.pop();
export { __recovered_export_0 as default };
