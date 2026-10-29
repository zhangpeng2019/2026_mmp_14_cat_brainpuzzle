// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_62.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { Vec3 as __rea_outer_i } from "cc";
import { Vec2 as __rea_outer_s } from "cc";
import { Node as __rea_outer_o } from "cc";
import { tween as __rea_outer_h } from "cc";
import { UITransform as __rea_outer_n } from "cc";
import { Label as __rea_outer_a } from "cc";
import { _decorator as __rea_outer_d } from "cc";
import { default as __rea_outer_r } from "./LevelBase";
import { default as __rea_outer_l } from "./AudioManager";
import { I18nController as __rea_outer_c } from "./i18n-controller";
import { UIManager as __rea_outer_u } from "./ui-manager";
import { UILayer as __rea_outer_N } from "./ui-layer";
import { UIHint as __rea_outer_p } from "./uihint";
import { UIFail as __rea_outer_g } from "./uifail";
import { GameController as __rea_outer_b } from "./GameController";
import { stopAllTweens as __rea_outer_v } from "./CocosCompat";
import { default as __rea_outer_m } from "./clue-hit-tester";
let __recovered_export_0;
var y;
__rea_outer_t._RF.push({}, "6a2c04RYqFLjZw+EfYuAABi", "Level_62", void 0);
const {
    ccclass: f
  } = __rea_outer_d,
  S = new __rea_outer_i(800, -900, 0),
  w = new __rea_outer_i(103.5, -75.5, 0),
  T = new __rea_outer_s(-96, 330.5),
  C = new __rea_outer_s(-95.5, 330.5),
  A = new Set(["bg", "shark", "shuihua2", "clicks", "drags", "swips"]),
  P = ["62_2", "62_3", "62_4", "62_5", "62_6", "62_7", "62_8", "62_9"],
  I = ["level62_hint1", "level62_hint2", "level62_hint3", "level62_hint4", "level62_hint5", "level62_hint6", "level62_hint7", "level62_hint8"];
__recovered_export_0 = f("Level_62")(y = class extends __rea_outer_r {
  constructor(...e) {
    super(...e), this.phase = 0, this.winstate = !1, this.gameNode = null, this.backBgNode = null, this.demoNode = null, this.clickRootNode = null, this.bubbleNode = null, this.dialogLabel = null, this.bgNode = null, this.sharkNode = null, this.shipNode = null, this.sweetPotatoNode = null, this.mermaidNode = null, this.qiqiuNode = null, this.wealthyMerchantNode = null, this.necklaceNode = null, this.fartNode = null, this.beautyHairNode = null, this.beautyNode = null, this.beauty1Node = null, this.suitMaleNode = null, this.documentBoxNode = null, this.boyNode = null, this.boyVestNode = null, this.boySweaterNode = null, this.boyScarfNode = null, this.boyCoatNode = null, this.boyCoat1Node = null, this.boxNode = null, this.babyNode = null, this.diaperNode = null, this.shuihua2Node = null, this.scissorsNode = null, this.scissorsHead1Node = null, this.scissorsHead2Node = null, this.scissorsBalloon1Node = null, this.scissorsBalloon2Node = null, this.rippleNode = null, this.birdNode = null, this.bird1Node = null, this.clicksNode = null, this.touchShipNode = null, this.touchScissorsNode = null, this.dragsNode = null, this.swipsNode = null, this.voiceToken = 0, this.performanceToken = 0, this.rippleToken = 0, this.lastMermaidTapAt = 0, this.hasThrownPotatoOverboard = !1, this.activeDrag = null, this.pointerSession = null, this.completedSteps = new Set(), this.thrownClothes = new Set(), this.nodeOrigins = new Map(), this.onTouchStart = e => {
      if (!this.canAcceptTouch()) return;
      const t = __rea_outer_m.getTouchPoint(e),
        i = this.resolveDragKind(t);
      return i ? (this.beginDrag(i, e), void (e.propagationStopped = !0)) : this.canClickMermaid() && __rea_outer_m.isPointInside(this.mermaidNode, t) ? (this.pointerSession = {
        kind: "mermaid",
        startPoint: t.clone()
      }, void (e.propagationStopped = !0)) : void (__rea_outer_m.isPointInside(this.birdNode, t) && (this.pointerSession = {
        kind: "bird",
        startPoint: t.clone()
      }, e.propagationStopped = !0));
    }, this.onTouchMove = e => {
      this.activeDrag && this.canAcceptTouch() && (this.setDragNodePositionFromTouch(e, this.activeDrag.node, this.gameNode, this.activeDrag.touchOffset), e.propagationStopped = !0);
    }, this.onTouchEnd = e => {
      if (1 !== this.phase || this.winstate) return this.cancelDrag(), void (this.pointerSession = null);
      if (this.activeDrag) return this.handleDrop(this.activeDrag), this.activeDrag = null, void (e.propagationStopped = !0);
      const t = this.pointerSession;
      if (this.pointerSession = null, !t || !this.canAcceptTouch()) return;
      const i = __rea_outer_m.getTouchPoint(e);
      __rea_outer_s.distance(t.startPoint, i) >= 20 || ("mermaid" === t.kind ? this.handleMermaidTap() : this.beginBirdFail(), e.propagationStopped = !0);
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
    const t = __rea_outer_c.getInstance().getKey(e);
    __rea_outer_u.getInstance().showView(__rea_outer_p, void 0, {
      body: t
    });
  }
  getGameProgressSnapshot() {
    const e = Math.min(this.hasInstallNum, 8);
    return {
      progress: e / 8,
      label: `${e}/8`
    };
  }
  markAllTasksCompleted() {
    for (let e = 1; e <= 8; e += 1) this.completedSteps.add(e);
    this.thrownClothes.add("coat"), this.thrownClothes.add("scarf"), this.thrownClothes.add("sweater"), this.thrownClothes.add("vest"), this.hasInstallNum = 8;
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.voiceToken = 0, this.performanceToken = 0, this.rippleToken = 0, this.lastMermaidTapAt = 0, this.hasThrownPotatoOverboard = !1, this.activeDrag = null, this.pointerSession = null, this.completedSteps.clear(), this.thrownClothes.clear(), this.hasInstallNum = 0, __rea_outer_l.stopVoice();
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_l.playMusic("bgm3", !0, .5), this.applyInitialVisibility(), this.raiseBeautyHair(), this.setInputBlocked(!0), __rea_outer_b.getInstance().refreshGameProgress(), this.playDialogue("62_1", !0, () => {
      this.isValid && 0 === this.phase && this.enterPhase1();
    });
  }
  skipOpeningToPlay() {
    return 0 === this.phase && (this.voiceToken += 1, this.stopOpeningDialogue(), this.enterPhase1(), !0);
  }
  enterPhase1() {
    0 === this.phase && (this.phase = 1, this.hideBubble(), this.setInputBlocked(!1), this.registerInteractionHandlers(), __rea_outer_b.getInstance().refreshGameProgress());
  }
  enterPhase2Success() {
    this.phase >= 2 || this.winstate || (this.phase = 2, this.winstate = !0, this.cancelDrag(), this.unregisterInteractionHandlers(), this.setInputBlocked(!0), __rea_outer_b.getInstance().pauseTimer(), this.playDialogue("62_10", !0, () => {
      var e;
      this.isValid && this.winstate && this.moveShipFollowers(1200 - ((null == (e = this.shipNode) ? void 0 : e.position.x) ?? 0), 0, 1, () => {
        this.showLevelSuccess(1);
      });
    }));
  }
  beginTimeoutFail() {
    this.phase = 2, this.winstate = !1, this.cleanupRuntime(), __rea_outer_b.getInstance().pauseTimer(), __rea_outer_u.getInstance().showView(__rea_outer_g, __rea_outer_N.WIN_ANIMATION);
  }
  applyInitialVisibility() {
    this.restoreAllOrigins(), this.setNodeActive(this.bgNode, !0), this.setNodeActive(this.sharkNode, !0), this.setNodeActive(this.shipNode, !0), this.setNodeActive(this.sweetPotatoNode, !0), this.setNodeActive(this.mermaidNode, !0), this.setNodeActive(this.qiqiuNode, !0), this.setNodeActive(this.wealthyMerchantNode, !0), this.setNodeActive(this.necklaceNode, !0), this.setNodeActive(this.fartNode, !1), this.setNodeActive(this.beautyHairNode, !0), this.setNodeActive(this.beautyNode, !0), this.setNodeActive(this.beauty1Node, !0), this.setNodeActive(this.suitMaleNode, !0), this.setNodeActive(this.documentBoxNode, !0), this.setNodeActive(this.boyNode, !0), this.setNodeActive(this.boyVestNode, !0), this.setNodeActive(this.boySweaterNode, !0), this.setNodeActive(this.boyScarfNode, !0), this.setNodeActive(this.boyCoatNode, !0), this.setNodeActive(this.boyCoat1Node, !1), this.setNodeActive(this.boxNode, !0), this.setNodeActive(this.babyNode, !0), this.setNodeActive(this.diaperNode, !0), this.setNodeActive(this.shuihua2Node, !1), this.setNodeActive(this.scissorsNode, !0), this.setNodeActive(this.scissorsHead1Node, !1), this.setNodeActive(this.scissorsHead2Node, !1), this.setNodeActive(this.scissorsBalloon1Node, !1), this.setNodeActive(this.scissorsBalloon2Node, !1), this.setNodeActive(this.rippleNode, !1), this.setNodeActive(this.birdNode, !0), this.setNodeActive(this.bird1Node, !1), this.setNodeActive(this.clicksNode, !0), this.setNodeActive(this.touchShipNode, !0), this.setNodeActive(this.touchScissorsNode, !0), this.setNodeActive(this.dragsNode, !1), this.setNodeActive(this.swipsNode, !1), this.setNodeActive(this.demoNode, !1), this.setNodeActive(this.clickRootNode, !1), this.setNodeActive(this.bubbleNode, !1);
  }
  raiseBeautyHair() {
    const e = this.beautyHairNode,
      t = this.beauty1Node;
    null != e && e.isValid && null != t && t.isValid && e.parent && e.setSiblingIndex(t.getSiblingIndex() + 1);
  }
  registerInteractionHandlers() {
    this.node.on(__rea_outer_o.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(__rea_outer_o.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(__rea_outer_o.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(__rea_outer_o.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
  }
  unregisterInteractionHandlers() {
    var e;
    null != (e = this.node) && e.isValid && (this.node.off(__rea_outer_o.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(__rea_outer_o.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(__rea_outer_o.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(__rea_outer_o.EventType.TOUCH_CANCEL, this.onTouchEnd, this));
  }
  canAcceptTouch() {
    var e;
    return 1 === this.phase && !this.winstate && !0 !== (null == (e = this.backBgNode) ? void 0 : e.active);
  }
  resolveDragKind(e) {
    var t, i;
    const s = [];
    return this.pushHit(s, "box", this.boxNode, this.canStartStep(1)), this.pushHit(s, "documentBox", this.documentBoxNode, this.canStartStep(2)), this.pushHit(s, "necklace", this.necklaceNode, this.canStartStep(3)), this.pushHit(s, "coat", this.boyCoatNode, this.canThrowClothes("coat")), this.pushHit(s, "scarf", this.boyScarfNode, this.canThrowClothes("scarf")), this.pushHit(s, "sweater", this.boySweaterNode, this.canThrowClothes("sweater")), this.pushHit(s, "vest", this.boyVestNode, this.canThrowClothes("vest")), this.pushHit(s, "scissors", this.getScissorsHitNode(), Boolean(null == (t = this.scissorsNode) ? void 0 : t.active)), this.pushHit(s, "sweetPotato", this.sweetPotatoNode, this.canStartStep(6) && Boolean(null == (i = this.sweetPotatoNode) ? void 0 : i.active)), this.pushHit(s, "diaper", this.diaperNode, this.canStartStep(8)), __rea_outer_m.pickTopmost(s, e);
  }
  canStartStep(e) {
    return !this.completedSteps.has(e);
  }
  canThrowClothes(e) {
    return this.canStartStep(4) && !this.thrownClothes.has(e);
  }
  getScissorsHitNode() {
    var e;
    return null != (e = this.touchScissorsNode) && e.isValid && this.touchScissorsNode.activeInHierarchy ? this.touchScissorsNode : this.scissorsNode;
  }
  canClickMermaid() {
    var e;
    return this.canStartStep(7) && Boolean(null == (e = this.mermaidNode) ? void 0 : e.active);
  }
  pushHit(e, t, i, s) {
    s && null != i && i.active && e.push({
      value: t,
      node: i
    });
  }
  beginDrag(e, t) {
    var i;
    if (null == (i = this.gameNode) || !i.isValid) return;
    if ("coat" === e) return void this.beginCoatDrag(t);
    const s = this.getDragSourceNode(e);
    null != s && s.isValid && this.captureDrag(e, s, t);
  }
  beginCoatDrag(e) {
    var t;
    const i = this.boyCoatNode,
      s = this.boyCoat1Node;
    null != i && i.isValid && null != s && s.isValid && null != (t = this.gameNode) && t.isValid && (s.setPosition(i.position.clone()), this.setNodeActive(i, !1), this.setNodeActive(s, !0), this.captureDrag("coat", s, e));
  }
  captureDrag(e, t, i) {
    var s, o;
    if (null == (s = this.gameNode) || !s.isValid) return;
    const h = (null == (o = this.nodeOrigins.get(t)) ? void 0 : o.clone()) ?? t.position.clone(),
      n = t.getSiblingIndex();
    this.bringNodeToFront(t);
    const a = this.calculateTouchOffset(i, t, this.gameNode);
    this.setDragNodePositionFromTouch(i, t, this.gameNode, a), this.activeDrag = {
      kind: e,
      node: t,
      originPosition: h,
      originSiblingIndex: n,
      touchOffset: a
    };
  }
  getDragSourceNode(e) {
    switch (e) {
      case "box":
        return this.boxNode;
      case "documentBox":
        return this.documentBoxNode;
      case "necklace":
        return this.necklaceNode;
      case "coat":
        return this.boyCoat1Node;
      case "scarf":
        return this.boyScarfNode;
      case "sweater":
        return this.boySweaterNode;
      case "vest":
        return this.boyVestNode;
      case "scissors":
        return this.scissorsNode;
      case "sweetPotato":
        return this.sweetPotatoNode;
      case "diaper":
        return this.diaperNode;
      default:
        return null;
    }
  }
  handleDrop(e) {
    this.canAcceptTouch() ? "scissors" !== e.kind ? "sweetPotato" !== e.kind ? this.isOutsideShip(e.node) ? this.beginOverboardThrow(e) : this.restoreDrag(e) : this.handlePotatoDrop(e) : this.handleScissorsDrop(e) : this.restoreDrag(e);
  }
  handleScissorsDrop(e) {
    return this.canStartStep(5) && this.isNodeCenterInside(e.node, this.beautyHairNode) ? (this.restoreDrag(e), void this.beginHaircut()) : this.isNodeCenterInside(e.node, this.qiqiuNode) ? (this.restoreDrag(e), void this.beginBalloonFail()) : void this.restoreDrag(e);
  }
  handlePotatoDrop(e) {
    if (this.canStartStep(6) && this.isNodeCenterInside(e.node, this.beautyNode)) return this.restoreDrag(e), void this.beginFeedPotato();
    this.isOutsideShip(e.node) ? this.beginPotatoOverboardThrow(e) : this.restoreDrag(e);
  }
  beginOverboardThrow(e) {
    const t = this.beginPerformance();
    this.playThrowSound(), this.playFallDown(e.node, () => {
      this.isPerformanceCurrent(t) && (this.setNodeActive(e.node, !1), this.showRippleAt(e.node.position), this.finishOverboardThrow(e.kind, t));
    });
  }
  finishOverboardThrow(e, t) {
    "box" !== e ? "documentBox" !== e ? "necklace" !== e ? "diaper" !== e ? "coat" !== e && "scarf" !== e && "sweater" !== e && "vest" !== e || this.finishClothesThrow(e, t) : this.completeStepWithVoice(8, t) : this.completeStepWithVoice(3, t) : this.completeStepWithVoice(2, t) : this.completeStepWithVoice(1, t);
  }
  finishClothesThrow(e, t) {
    this.thrownClothes.add(e), this.thrownClothes.size < 4 ? this.endPerformance(t) : this.completeStepWithVoice(4, t);
  }
  completeStepWithVoice(e, t) {
    const i = P[e - 1],
      s = this.completeStep(e);
    if (i && this.playDialogue(i, !0, () => {
      this.isValid && s && this.enterPhase2Success();
    }), s) return __rea_outer_b.getInstance().pauseTimer(), this.setInputBlocked(!0), void (i || this.enterPhase2Success());
    this.endPerformance(t);
  }
  beginHaircut() {
    const e = this.beginPerformance();
    this.playThrowSound(), this.restoreOrigin(this.scissorsNode), this.setNodeActive(this.scissorsNode, !1), this.placeHeadScissorsOnHair(), this.playHaircutSlices(e, () => {
      this.isPerformanceCurrent(e) && (this.setNodeActive(this.beautyHairNode, !1), this.setNodeActive(this.scissorsHead1Node, !1), this.setNodeActive(this.scissorsHead2Node, !1), this.restoreOrigin(this.scissorsHead1Node), this.restoreOrigin(this.scissorsHead2Node), this.restoreOrigin(this.scissorsNode), this.setNodeActive(this.scissorsNode, !0), this.completeStepWithVoice(5, e));
    });
  }
  placeHeadScissorsOnHair() {
    var e;
    const t = null == (e = this.beautyHairNode) ? void 0 : e.position;
    var i, s;
    t && (null == (i = this.scissorsHead1Node) || i.setPosition(t.clone()), null == (s = this.scissorsHead2Node) || s.setPosition(t.clone()));
    this.bringNodeToFront(this.scissorsHead1Node), this.bringNodeToFront(this.scissorsHead2Node);
  }
  playHaircutSlices(e, t) {
    const i = .7 / 3;
    this.setNodeActive(this.scissorsHead1Node, !0), this.setNodeActive(this.scissorsHead2Node, !1), this.scheduleOnceIfValid(() => {
      this.isPerformanceCurrent(e) && (this.setNodeActive(this.scissorsHead1Node, !1), this.setNodeActive(this.scissorsHead2Node, !0));
    }, i), this.scheduleOnceIfValid(() => {
      this.isPerformanceCurrent(e) && (this.setNodeActive(this.scissorsHead1Node, !0), this.setNodeActive(this.scissorsHead2Node, !1));
    }, 2 * i), this.scheduleOnceIfValid(() => {
      this.isPerformanceCurrent(e) && t();
    }, .7);
  }
  beginFeedPotato() {
    const e = this.beginPerformance();
    this.playThrowSound(), this.setNodeActive(this.sweetPotatoNode, !1), this.setNodeActive(this.beauty1Node, !1), this.setNodeActive(this.fartNode, !0), this.scheduleOnceIfValid(() => {
      this.isPerformanceCurrent(e) && (this.setNodeActive(this.fartNode, !1), this.completeStepWithVoice(6, e));
    }, .43);
  }
  handleMermaidTap() {
    const e = Date.now();
    e - this.lastMermaidTapAt > 200 ? this.lastMermaidTapAt = e : (this.lastMermaidTapAt = 0, this.beginMermaidLeave());
  }
  beginMermaidLeave() {
    const e = this.mermaidNode;
    if (null == e || !e.isValid) return;
    const t = this.beginPerformance();
    this.playThrowSound(), this.playDialogue("62_8", !0, () => {
      this.isPerformanceCurrent(t) && e.isValid && this.moveNodeTo(e, S, .5, () => {
        if (!this.isPerformanceCurrent(t) || !e.isValid) return;
        this.setNodeActive(e, !1), this.showRippleAt(e.position);
        this.completeStep(7) ? this.enterPhase2Success() : this.endPerformance(t);
      });
    });
  }
  beginBirdFail() {
    const e = this.birdNode,
      t = this.bird1Node;
    if (null == e || !e.isValid || null == t || !t.isValid) return;
    this.beginFailSequence();
    const i = e.position.y - this.getNodeHalfHeight(e) - this.getNodeHalfHeight(t);
    t.setPosition(e.position.x, i, t.position.z), this.setNodeActive(t, !0), this.bringNodeToFront(t), this.playDialogue("62_11", !0), this.moveNodeTo(t, w, .5, () => {
      this.canContinueFail() && this.playSinkFail();
    });
  }
  beginBalloonFail() {
    const e = this.qiqiuNode;
    if (null == e || !e.isValid) return;
    this.beginFailSequence(), this.playDialogue("62_12", !0);
    const t = new __rea_outer_i(e.position.x, 1100, e.position.z);
    this.moveNodeTo(e, t, 1, () => {
      this.canContinueFail() && e.isValid && (this.setNodeActive(e, !1), this.playSinkFail());
    });
  }
  beginPotatoOverboardThrow(e) {
    this.hasThrownPotatoOverboard = !0;
    const t = this.beginPerformance();
    this.playThrowSound(), this.playFallDown(e.node, () => {
      this.isPerformanceCurrent(t) && e.node.isValid && (this.setNodeActive(e.node, !1), this.showRippleAt(e.node.position), this.playDialogue("62_13", !0), this.endPerformance(t));
    });
  }
  beginFailSequence() {
    this.phase = 2, this.winstate = !1, this.cancelDrag(), this.unregisterInteractionHandlers(), this.setInputBlocked(!0), __rea_outer_b.getInstance().pauseTimer();
  }
  playSinkFail() {
    var e;
    const t = this.shipNode,
      s = null != t && t.isValid ? t.position.clone() : (null == (e = this.shuihua2Node) ? void 0 : e.position.clone()) ?? __rea_outer_i.ZERO,
      o = null != t && t.isValid ? -1200 - t.position.y : 0;
    this.moveShipFollowers(0, o, .2, () => {
      this.canContinueFail() && (this.hideFollowers(), this.showFailAfterSplash(s));
    });
  }
  showFailAfterSplash(e) {
    const t = this.shuihua2Node;
    null != t && t.isValid && (t.setPosition(e.x, e.y, t.position.z), this.bringNodeToFront(t)), this.setNodeActive(t, !0), __rea_outer_l.playEffect_1("level62_2"), this.scheduleOnceIfValid(() => {
      this.canContinueFail() && (this.setNodeActive(this.shuihua2Node, !1), this.showSystemFail());
    }, .5);
  }
  showSystemFail() {
    __rea_outer_u.getInstance().showView(__rea_outer_g, __rea_outer_N.WIN_ANIMATION);
  }
  canContinueFail() {
    return this.isValid && !this.winstate && 2 === this.phase;
  }
  completeStep(e) {
    return this.completedSteps.has(e) || (this.completedSteps.add(e), this.hasInstallNum = this.completedSteps.size, __rea_outer_b.getInstance().refreshGameProgress()), this.completedSteps.size >= 8;
  }
  playThrowSound() {
    __rea_outer_l.playEffect_1("level62_1");
  }
  playDialogue(e, t, i) {
    this.voiceToken += 1;
    const s = this.voiceToken;
    this.showBubble(e), __rea_outer_l.stopVoice(), __rea_outer_l.playVoice(e);
    let o = !1;
    const h = () => {
        !o && this.isValid && s === this.voiceToken && (o = !0, this.unschedule(n), t && this.hideBubble(), null == i || i());
      },
      n = () => {
        h();
      },
      a = this.resolveDialogueHoldSeconds(e);
    this.scheduleOnce(h, a), this.scheduleOnce(n, Math.max(8, a + .5));
  }
  resolveDialogueHoldSeconds(e) {
    var t;
    const i = (null == (t = __rea_outer_l.audioMap.get(e)) ? void 0 : t.getDuration()) ?? 0;
    return i > .1 ? i : 2.5;
  }
  showBubble(e) {
    this.dialogLabel && (this.dialogLabel.string = this.resolveI18nText(e)), this.setNodeActive(this.bubbleNode, !0);
  }
  hideBubble() {
    this.setNodeActive(this.bubbleNode, !1);
  }
  resolveI18nText(e) {
    const t = __rea_outer_c.getInstance().getKey(e);
    return t && t !== e ? t : e;
  }
  resolveHintKey() {
    if (this.hasThrownPotatoOverboard) return "level62_hint9";
    for (let e = 1; e <= 8; e += 1) if (!this.completedSteps.has(e)) return I[e - 1];
    return null;
  }
  beginPerformance() {
    return this.performanceToken += 1, this.setInputBlocked(!0), this.performanceToken;
  }
  isPerformanceCurrent(e) {
    return this.isValid && 1 === this.phase && e === this.performanceToken && !this.winstate;
  }
  endPerformance(e) {
    e === this.performanceToken && this.isValid && (1 !== this.phase || this.winstate || this.setInputBlocked(!1));
  }
  playFallDown(e, t) {
    this.stopTweenIfValid(e);
    const s = e.position.clone(),
      o = s.y > -470 ? -470 : s.y - 120;
    this.moveNodeTo(e, new __rea_outer_i(s.x, o, s.z), .2, t);
  }
  showRippleAt(e) {
    const t = this.rippleNode;
    if (null == t || !t.isValid) return;
    this.rippleToken += 1;
    const i = this.rippleToken;
    t.setPosition(e.x, e.y, t.position.z), this.setNodeActive(t, !0), this.scheduleOnceIfValid(() => {
      i === this.rippleToken && this.setNodeActive(t, !1);
    }, .7);
  }
  moveShipFollowers(e, t, s, o) {
    this.collectFollowers().forEach(o => {
      const h = new __rea_outer_i(o.position.x + e, o.position.y + t, o.position.z);
      this.moveNodeTo(o, h, s);
    }), this.scheduleOnceIfValid(o, s);
  }
  collectFollowers() {
    var e;
    return ((null == (e = this.gameNode) ? void 0 : e.children) ?? []).filter(e => e.isValid && e.active && !A.has(e.name));
  }
  hideFollowers() {
    this.collectFollowers().forEach(e => {
      this.setNodeActive(e, !1);
    });
  }
  moveNodeTo(e, t, i, s) {
    null != e && e.isValid ? (this.stopTweenIfValid(e), __rea_outer_h(e).to(i, {
      position: t.clone()
    }).call(() => null == s ? void 0 : s()).start()) : null == s || s();
  }
  restoreDrag(e) {
    var t;
    null != (t = e.node) && t.isValid && (this.stopTweenIfValid(e.node), e.node.setPosition(e.originPosition), e.node.parent && e.node.setSiblingIndex(e.originSiblingIndex), "coat" === e.kind && (this.setNodeActive(this.boyCoat1Node, !1), this.setNodeActive(this.boyCoatNode, !0), this.restoreOrigin(this.boyCoatNode)));
  }
  cancelDrag() {
    this.activeDrag && (this.restoreDrag(this.activeDrag), this.activeDrag = null);
  }
  isOutsideShip(e) {
    return !this.isNodeCenterInside(e, this.touchShipNode);
  }
  isNodeCenterInside(e, t) {
    return __rea_outer_m.isDragNearTarget(e, t);
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
  getNodeHalfHeight(e) {
    const t = e.getComponent(__rea_outer_n);
    return t ? .5 * t.height : 0;
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
  bringNodeToFront(e) {
    null != e && e.isValid && e.parent && e.setSiblingIndex(e.parent.children.length - 1);
  }
  setInputBlocked(e) {
    this.setNodeActive(this.backBgNode, e);
  }
  scheduleOnceIfValid(e, t) {
    this.scheduleOnce(() => {
      this.isValid && e();
    }, t);
  }
  cleanupRuntime(e = !0) {
    this.unscheduleAllCallbacks(), this.unregisterInteractionHandlers(), this.voiceToken += 1, this.performanceToken += 1, this.rippleToken += 1, this.pointerSession = null, this.cancelDrag(), e && __rea_outer_l.stopVoice(), this.stopAllGameplayTweens();
  }
  stopAllGameplayTweens() {
    var e;
    ((null == (e = this.gameNode) ? void 0 : e.children) ?? []).forEach(e => {
      this.stopTweenIfValid(e);
    });
  }
  stopTweenIfValid(e) {
    null != e && e.isValid && __rea_outer_v(e);
  }
  setNodeActive(e, t) {
    null != e && e.isValid && (e.active = t);
  }
  getGameChild(e) {
    var t;
    return (null == (t = this.gameNode) ? void 0 : t.getChildByName(e)) ?? null;
  }
  findChildNear(e, t) {
    var i;
    const s = (null == (i = this.gameNode) ? void 0 : i.children) ?? [];
    let o = null,
      h = Number.POSITIVE_INFINITY;
    return s.forEach(i => {
      if (i.name !== e) return;
      const s = Math.hypot(i.position.x - t.x, i.position.y - t.y);
      s < h && (h = s, o = i);
    }), o;
  }
  resolveReferences() {
    var e;
    this.gameNode = this.node.getChildByPath("UIPanel/gameNode"), this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.demoNode = this.node.getChildByPath("UIPanel/demo"), this.clickRootNode = this.node.getChildByPath("UIPanel/click_root"), this.bubbleNode = this.node.getChildByPath("UIPanel/bubble"), this.dialogLabel = (null == (e = this.node.getChildByPath("UIPanel/bubble/dialog_box/Label")) ? void 0 : e.getComponent(__rea_outer_a)) ?? null, this.bgNode = this.getGameChild("bg"), this.sharkNode = this.getGameChild("shark"), this.shipNode = this.getGameChild("ship"), this.sweetPotatoNode = this.getGameChild("sweet_potato"), this.mermaidNode = this.getGameChild("mermaid"), this.qiqiuNode = this.getGameChild("qiqiu"), this.wealthyMerchantNode = this.getGameChild("wealthy_merchant"), this.necklaceNode = this.getGameChild("necklace"), this.fartNode = this.getGameChild("fart"), this.beautyHairNode = this.getGameChild("beauty_hair"), this.beautyNode = this.getGameChild("beauty"), this.beauty1Node = this.getGameChild("beauty_1"), this.suitMaleNode = this.getGameChild("suit_male"), this.documentBoxNode = this.getGameChild("document_box"), this.boyNode = this.getGameChild("boy"), this.boyVestNode = this.getGameChild("boy_vest"), this.boySweaterNode = this.getGameChild("boy_sweater"), this.boyScarfNode = this.getGameChild("boy_scarf"), this.boyCoatNode = this.getGameChild("boy_coat"), this.boyCoat1Node = this.getGameChild("boy_coat_1"), this.boxNode = this.getGameChild("box"), this.babyNode = this.getGameChild("baby"), this.diaperNode = this.getGameChild("diaper"), this.shuihua2Node = this.getGameChild("shuihua2"), this.scissorsNode = this.getGameChild("scissors"), this.scissorsHead1Node = this.findChildNear("scissors_1", T), this.scissorsHead2Node = this.findChildNear("scissors_2", C), this.scissorsBalloon1Node = this.findChildNear("scissors_1", new __rea_outer_s(221, 192.5)), this.scissorsBalloon2Node = this.findChildNear("scissors_2", new __rea_outer_s(221.5, 192.5)), this.rippleNode = this.getGameChild("ripple"), this.birdNode = this.getGameChild("bird"), this.bird1Node = this.getGameChild("bird_1"), this.clicksNode = this.getGameChild("clicks"), this.touchShipNode = this.node.getChildByPath("UIPanel/gameNode/clicks/touchship"), this.touchScissorsNode = this.node.getChildByPath("UIPanel/gameNode/clicks/touchscissors"), this.dragsNode = this.getGameChild("drags"), this.swipsNode = this.getGameChild("swips"), this.nodeOrigins.clear(), [this.sweetPotatoNode, this.mermaidNode, this.qiqiuNode, this.necklaceNode, this.documentBoxNode, this.boyVestNode, this.boySweaterNode, this.boyScarfNode, this.boyCoatNode, this.boyCoat1Node, this.boxNode, this.diaperNode, this.scissorsNode, this.scissorsHead1Node, this.scissorsHead2Node, this.rippleNode, this.bird1Node, this.shipNode, this.shuihua2Node, this.fartNode].forEach(e => {
      this.cacheOrigin(e);
    }), this.logMissingNodes();
  }
  logMissingNodes() {
    var e;
    const t = [],
      i = (e, i) => {
        e || t.push(i);
      };
    i(this.gameNode, "UIPanel/gameNode"), i(this.backBgNode, "UIPanel/backBG"), i(this.bubbleNode, "UIPanel/bubble"), i((null == (e = this.dialogLabel) ? void 0 : e.node) ?? null, "UIPanel/bubble/dialog_box/Label"), i(this.shipNode, "ship"), i(this.touchShipNode, "clicks/touchship"), i(this.touchScissorsNode, "clicks/touchscissors"), i(this.boxNode, "box"), i(this.documentBoxNode, "document_box"), i(this.necklaceNode, "necklace"), i(this.boyCoatNode, "boy_coat"), i(this.boyCoat1Node, "boy_coat_1"), i(this.scissorsNode, "scissors"), i(this.scissorsHead1Node, "scissors_1(head)"), i(this.scissorsHead2Node, "scissors_2(head)"), i(this.beautyHairNode, "beauty_hair"), i(this.beautyNode, "beauty"), i(this.sweetPotatoNode, "sweet_potato"), i(this.mermaidNode, "mermaid"), i(this.diaperNode, "diaper"), i(this.birdNode, "bird"), i(this.qiqiuNode, "qiqiu"), t.length > 0 && console.warn("[Level_62] prefab 待办清单:", t.join(", "));
  }
}) || y;
__rea_outer_t._RF.pop();
export { __recovered_export_0 as default };
