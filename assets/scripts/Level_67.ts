// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_67.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { Node as __rea_outer_i } from "cc";
import { Vec3 as __rea_outer_s } from "cc";
import { tween as __rea_outer_h } from "cc";
import { UITransform as __rea_outer_o } from "cc";
import { Rect as __rea_outer_a } from "cc";
import { Label as __rea_outer_n } from "cc";
import { _decorator as __rea_outer_r } from "cc";
import { default as __rea_outer_l } from "./LevelBase";
import { default as __rea_outer_d } from "./AudioManager";
import { I18nController as __rea_outer_c } from "./i18n-controller";
import { UIManager as __rea_outer_p } from "./ui-manager";
import { UILayer as __rea_outer_g } from "./ui-layer";
import { UIHint as __rea_outer_u } from "./uihint";
import { UIFail as __rea_outer_m } from "./uifail";
import { GameController as __rea_outer_N } from "./GameController";
import { getUIOpacity as __rea_outer_b } from "./CocosCompat";
import { setNodeOpacity as __rea_outer_v } from "./CocosCompat";
import { stopAllTweens as __rea_outer_f } from "./CocosCompat";
import { default as __rea_outer_C } from "./clue-hit-tester";
let __recovered_export_0;
var _;
__rea_outer_t._RF.push({}, "4caccN2w35NebUTQRq4oe43", "Level_67", void 0);
const {
    ccclass: G
  } = __rea_outer_r,
  A = "level67_2",
  T = ["bg", "bg_1", "tiger", "girl", "pen", "photo1", "prompt_box"],
  w = ["tiger_1", "bg_2", "bg_3", "bg_4", "bg_5", "wolf", "wolf_1", "wolf_2", "lion", "lion_1", "lion_2", "lion_3", "mao", "bird", "bird_1", "ostrich", "ostrich1", "ostrich2", "ostrich3", "angry", "panda", "panda1", "panda3", "panda4", "polar_bear_head", "polar_bear_head1", "pen_1", "photo2", "photo3", "photo4", "photo5", "cat", "cat_food", "scissors", "scissors_1", "scissors_2", "ball_1", "end", "end1"];
__recovered_export_0 = G("Level_67")(_ = class extends __rea_outer_l {
  constructor(...e) {
    super(...e), this.phase = 0, this.winstate = !1, this.gameNode = null, this.backBgNode = null, this.promptBoxNode = null, this.promptLabel = null, this.ballDragNode = null, this.ballFailNode = null, this.glassTouch5Node = null, this.nodeByName = new Map(), this.nodeOrigins = new Map(), this.siblingOrigins = new Map(), this.homeParents = new Map(), this.currentExhibit = 1, this.exhibitStep = 0, this.isExhibitReady = !1, this.hasShownBall1 = !1, this.activeDrag = null, this.pointerSession = null, this.swapFrameA = null, this.swapFrameB = null, this.voiceToken = 0, this.performanceToken = 0, this.onTouchStart = e => {
      if (!this.canAcceptTouch()) return;
      const t = __rea_outer_C.getTouchPoint(e),
        i = this.resolveDragKind(t);
      if (i) return this.beginDrag(i, e), void (e.propagationStopped = !0);
      this.canSwipeOstrich() && __rea_outer_C.isPointInside(this.getGameChild("ostrich"), t) && (this.pointerSession = {
        kind: "ostrich",
        startPoint: t.clone()
      }, e.propagationStopped = !0);
    }, this.onTouchMove = e => {
      this.activeDrag && this.canAcceptTouch() && (this.setDragNodePositionFromTouch(e, this.activeDrag.dragNode, this.activeDrag.touchOffset), this.tryMorphHeldSprite(this.activeDrag, e), e.propagationStopped = !0);
    }, this.onTouchEnd = e => {
      if (1 !== this.phase || this.winstate) return this.cancelDrag(), void (this.pointerSession = null);
      if (this.activeDrag) return this.handleDrop(this.activeDrag), this.activeDrag = null, void (e.propagationStopped = !0);
      const t = this.pointerSession;
      this.pointerSession = null, t && this.canAcceptTouch() && (this.handleOstrichSwipe(t.startPoint, __rea_outer_C.getTouchPoint(e)), e.propagationStopped = !0);
    }, this.onSwapTick = () => {
      var e;
      const t = !0 !== (null == (e = this.swapFrameA) ? void 0 : e.active);
      this.applySwapFrame(t);
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.allItemNum = 5, this.hasInstallNum = 0;
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
    const e = this.hasInstallNum + 1;
    if (e > 5) return;
    const t = __rea_outer_c.getInstance().getKey(`level67_hint${e}`);
    __rea_outer_p.getInstance().showView(__rea_outer_u, void 0, {
      body: t
    });
  }
  getGameProgressSnapshot() {
    const e = Math.min(this.hasInstallNum, 5);
    return {
      progress: e / 5,
      label: `${e}/5`
    };
  }
  markAllTasksCompleted() {
    this.hasInstallNum = 5, this.currentExhibit = 5, this.exhibitStep = 4, this.isExhibitReady = !0, this.hasShownBall1 = !0;
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.currentExhibit = 1, this.exhibitStep = 0, this.isExhibitReady = !1, this.hasShownBall1 = !1, this.activeDrag = null, this.pointerSession = null, this.voiceToken = 0, this.performanceToken = 0, this.hasInstallNum = 0, this.allItemNum = 5, __rea_outer_d.stopVoice();
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_d.playMusic("bgm4", !0, .5), this.applyInitialVisibility(), this.setInputBlocked(!0), __rea_outer_N.getInstance().refreshGameProgress(), this.playDialogue("67_1", !0, () => {
      this.isValid && 0 === this.phase && this.playDialogue("67_2", !0, () => {
        this.isValid && 0 === this.phase && this.enterPhase1();
      });
    });
  }
  skipOpeningToPlay() {
    return 0 === this.phase && (this.voiceToken += 1, this.stopOpeningDialogue(), this.enterPhase1(), !0);
  }
  enterPhase1() {
    0 === this.phase && (this.phase = 1, this.currentExhibit = 1, this.exhibitStep = 0, this.isExhibitReady = !0, this.hidePrompt(), this.setInputBlocked(!1), this.registerInteractionHandlers(), __rea_outer_N.getInstance().refreshGameProgress());
  }
  enterPhase2Success() {
    this.phase >= 2 || this.winstate || (this.phase = 2, this.winstate = !0, this.cancelDrag(), this.unregisterInteractionHandlers(), this.setInputBlocked(!0), __rea_outer_N.getInstance().pauseTimer(), this.playEndEnter(this.getGameChild("end1"), () => {
      this.playDialogue("67_7", !0, () => {
        this.scheduleOnceIfValid(() => {
          this.isValid && this.showLevelSuccess(0);
        }, 1);
      });
    }));
  }
  enterPhase2WolfFail() {
    this.phase >= 2 || (this.phase = 2, this.winstate = !1, this.cancelDrag(), this.unregisterInteractionHandlers(), this.setInputBlocked(!0), __rea_outer_N.getInstance().pauseTimer(), this.setNodeActive(this.ballDragNode, !1), this.setNodeActive(this.getGameChild("wolf"), !1), this.setNodeActive(this.getGameChild("wolf_2"), !0), this.restoreOrigin(this.ballFailNode), this.setNodeActive(this.ballFailNode, !0), this.playEndEnter(this.getGameChild("end"), () => {
      this.playDialogue("67_8", !0, () => {
        this.scheduleOnceIfValid(() => {
          this.isValid && __rea_outer_p.getInstance().showView(__rea_outer_m, __rea_outer_g.WIN_ANIMATION);
        }, 1);
      });
    }));
  }
  beginTimeoutFail() {
    this.phase = 2, this.winstate = !1, this.cleanupRuntime(!0), __rea_outer_N.getInstance().pauseTimer(), __rea_outer_p.getInstance().showView(__rea_outer_m, __rea_outer_g.WIN_ANIMATION);
  }
  applyInitialVisibility() {
    this.restoreCachedNodes(), this.setNodeActive(this.gameNode, !0), T.forEach(e => {
      this.setNodeActive(this.getGameChild(e), !0);
    }), w.forEach(e => {
      this.setNodeActive(this.getGameChild(e), !1);
    }), this.setNodeActive(this.ballDragNode, !1), this.setNodeActive(this.ballFailNode, !1), this.setNodeActive(this.node.getChildByPath("UIPanel/click_root"), !1), this.setNodeActive(this.node.getChildByPath("UIPanel/demo"), !1), this.setNodeActive(this.node.getChildByPath("UIPanel/bubble"), !1), this.prepareGlassHotspot(!1), this.setNodeActive(this.getGameChild("drags"), !1), this.setNodeActive(this.getGameChild("swips"), !1), this.resetBackBgOpacity();
  }
  registerInteractionHandlers() {
    this.node.on(__rea_outer_i.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(__rea_outer_i.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(__rea_outer_i.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(__rea_outer_i.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
  }
  unregisterInteractionHandlers() {
    var e;
    null != (e = this.node) && e.isValid && (this.node.off(__rea_outer_i.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(__rea_outer_i.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(__rea_outer_i.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(__rea_outer_i.EventType.TOUCH_CANCEL, this.onTouchEnd, this));
  }
  canAcceptTouch() {
    var e;
    return 1 === this.phase && !this.winstate && this.isExhibitReady && !0 !== (null == (e = this.backBgNode) ? void 0 : e.active);
  }
  resolveDragKind(e) {
    const t = [];
    return this.pushHit(t, "pen", this.getGameChild("pen"), this.canDragPen()), this.pushHit(t, "ball", this.ballDragNode, this.canDragGreenBall()), this.pushHit(t, "cat", this.getGameChild("cat"), this.isExhibitStep(3, 0)), this.pushHit(t, "scissors", this.getGameChild("scissors"), this.isExhibitStep(3, 1)), this.pushHit(t, "mao", this.getGameChild("mao"), this.isExhibitStep(3, 2)), this.pushHit(t, "catFood", this.getGameChild("cat_food"), this.isExhibitStep(3, 3)), this.pushHit(t, "bird", this.getGameChild("bird"), this.isExhibitStep(4, 1)), this.pushHit(t, "bird1", this.getGameChild("bird_1"), this.isExhibitStep(4, 2)), this.pushHit(t, "polarBear", this.getGameChild("polar_bear_head"), this.isExhibitStep(5, 0)), this.pushHit(t, "panda", this.getGameChild("panda"), this.isExhibitStep(5, 2)), this.pushHit(t, "ball1", this.getGameChild("ball_1"), this.isExhibitStep(5, 3)), __rea_outer_C.pickTopmost(t, e);
  }
  pushHit(e, t, i, s) {
    s && null != i && i.isValid && i.activeInHierarchy && e.push({
      value: t,
      node: i
    });
  }
  isExhibitStep(e, t) {
    return this.currentExhibit === e && this.exhibitStep === t && this.isExhibitReady;
  }
  canDragPen() {
    return this.isExhibitStep(1, 0) || this.isExhibitStep(5, 1);
  }
  canDragGreenBall() {
    return this.isExhibitStep(2, 0);
  }
  canSwipeOstrich() {
    return this.isExhibitStep(4, 0);
  }
  beginDrag(e, t) {
    var i;
    const s = this.getDragSourceNode(e);
    if (null == s || !s.isValid || null == (i = this.gameNode) || !i.isValid) return;
    this.bringNodeToFront(s);
    const h = this.calculateTouchOffset(t, s);
    this.setDragNodePositionFromTouch(t, s, h), this.activeDrag = {
      kind: e,
      dragNode: s,
      sourceNode: s,
      touchOffset: h,
      originWorldPosition: s.worldPosition.clone(),
      hasMorphed: !1
    };
  }
  getDragSourceNode(e) {
    switch (e) {
      case "pen":
        return this.getGameChild("pen");
      case "ball":
        return this.ballDragNode;
      case "cat":
        return this.getGameChild("cat");
      case "scissors":
        return this.getGameChild("scissors");
      case "mao":
        return this.getGameChild("mao");
      case "catFood":
        return this.getGameChild("cat_food");
      case "bird":
        return this.getGameChild("bird");
      case "bird1":
        return this.getGameChild("bird_1");
      case "polarBear":
        return this.getGameChild("polar_bear_head");
      case "panda":
        return this.getGameChild("panda");
      case "ball1":
        return this.getGameChild("ball_1");
      default:
        return null;
    }
  }
  getHeldNodeName(e) {
    return "pen" === e ? "pen_1" : "polarBear" === e ? "polar_bear_head1" : null;
  }
  tryMorphHeldSprite(e, t) {
    if (e.hasMorphed) return;
    const i = this.getHeldNodeName(e.kind);
    if (!i) return;
    if (__rea_outer_s.distance(e.dragNode.worldPosition, e.originWorldPosition) < 20) return;
    const h = this.getGameChild(i);
    if (null == h || !h.isValid) return;
    const o = e.dragNode.worldPosition.clone();
    this.setNodeActive(e.sourceNode, !1), this.restoreOrigin(e.sourceNode), this.placeNodeAtWorld(h, o), this.setNodeActive(h, !0), this.bringNodeToFront(h), e.dragNode = h, e.hasMorphed = !0, e.touchOffset = this.calculateTouchOffset(t, h), this.setDragNodePositionFromTouch(t, h, e.touchOffset);
  }
  handleDrop(e) {
    if (this.canAcceptTouch()) switch (e.kind) {
      case "pen":
        return void this.handlePenDrop(e);
      case "ball":
        return void this.handleGreenBallDrop(e);
      case "cat":
        return void this.handleSimpleDrop(e, this.getGameChild("lion"), !1, () => this.finishCatDrop());
      case "scissors":
        return void this.handleSimpleDrop(e, this.getGameChild("lion"), !0, () => this.finishScissorsDrop());
      case "mao":
        return void this.handleSimpleDrop(e, this.getGameChild("lion_1"), !0, () => this.finishMaoDrop());
      case "catFood":
        return void this.handleSimpleDrop(e, this.getGameChild("lion_1"), !0, () => this.finishCatFoodDrop());
      case "bird":
        return void this.handleSimpleDrop(e, this.getGameChild("ostrich1"), !0, () => this.finishBirdDrop());
      case "bird1":
        return void this.handleSimpleDrop(e, this.getGameChild("ostrich2"), !0, () => this.finishFeatherDrop());
      case "polarBear":
        return void this.handlePolarBearDrop(e);
      case "panda":
        return void this.handlePandaDrop(e);
      case "ball1":
        return void this.handleSimpleDrop(e, this.getGameChild("panda1"), !0, () => this.finishBasketballDrop());
      default:
        this.restoreDrag(e);
    } else this.restoreDrag(e);
  }
  handleSimpleDrop(e, t, i, s) {
    this.isNodeCenterInside(e.dragNode, t, i) ? (this.playActionSound(), this.setNodeActive(e.dragNode, !1), this.restoreHome(e.sourceNode), this.setNodeActive(e.sourceNode, !1), s()) : this.restoreDrag(e);
  }
  handlePenDrop(e) {
    if (1 === this.currentExhibit) return this.isNodeCenterInside(e.dragNode, this.getGameChild("tiger")) ? (this.playActionSound(), this.restorePenToPocket(), void this.finishTigerPaint()) : void this.restoreDrag(e);
    e.hasMorphed && this.isNodeCenterInside(e.dragNode, this.getGameChild("girl")) ? (this.playActionSound(), this.setNodeActive(this.getGameChild("pen_1"), !1), this.setNodeActive(this.getGameChild("pen"), !1), this.finishGirlPaint()) : this.restoreDrag(e);
  }
  handleGreenBallDrop(e) {
    if (this.isNodeCenterInside(e.dragNode, this.getGameChild("wolf"))) return this.playActionSound(), this.setNodeActive(e.sourceNode, !1), void this.enterPhase2WolfFail();
    this.isGreenBallOnGround(e.dragNode) ? (this.playActionSound(), this.setNodeActive(this.ballDragNode, !1), this.finishWolfSuccess()) : this.restoreDrag(e);
  }
  handlePandaDrop(e) {
    __rea_outer_s.distance(e.dragNode.worldPosition, e.originWorldPosition) < 20 || !this.isNodeCenterInside(e.dragNode, this.glassTouch5Node) ? this.restoreDrag(e) : (this.playActionSound(), this.setNodeActive(e.sourceNode, !1), this.restoreHome(e.sourceNode), this.finishPandaEnter());
  }
  handlePolarBearDrop(e) {
    e.hasMorphed && this.isNodeCenterInside(e.dragNode, this.getGameChild("girl")) ? (this.playActionSound(), this.setNodeActive(this.getGameChild("polar_bear_head"), !1), this.restoreOrigin(this.getGameChild("polar_bear_head1")), this.setNodeActive(this.getGameChild("polar_bear_head1"), !0), this.exhibitStep = 1) : this.restoreDrag(e);
  }
  handleOstrichSwipe(e, t) {
    const i = t.x - e.x,
      s = t.y - e.y;
    s >= 30 && Math.abs(s) >= 1.2 * Math.abs(i) && (this.playActionSound(), this.setNodeActive(this.getGameChild("ostrich"), !1), this.setNodeActive(this.getGameChild("ostrich1"), !0), this.exhibitStep = 1);
  }
  finishTigerPaint() {
    const e = this.beginPerformance();
    this.setNodeActive(this.getGameChild("tiger"), !1), this.setNodeActive(this.getGameChild("tiger_1"), !0), __rea_outer_d.playEffect_1(A), this.completeExhibitThenFade(e, 2);
  }
  finishWolfSuccess() {
    const e = this.beginPerformance();
    this.hasShownBall1 = !0, this.restoreOrigin(this.getGameChild("ball_1")), this.setNodeActive(this.getGameChild("ball_1"), !0), this.setNodeActive(this.getGameChild("wolf"), !1), this.setNodeActive(this.getGameChild("wolf_1"), !0);
    let t = !1;
    const i = () => {
      !t && this.isPerformanceCurrent(e) && (t = !0, this.playDialogue("67_3", !0, () => {
        this.isPerformanceCurrent(e) && this.completeExhibitThenFade(e, 3);
      }));
    };
    __rea_outer_d.playEffect_1("level67_4", i), this.wait(e, 1.5, i);
  }
  finishCatDrop() {
    this.setNodeActive(this.getGameChild("lion"), !0), __rea_outer_d.playEffect_1(A), this.exhibitStep = 1;
  }
  finishScissorsDrop() {
    const e = this.beginPerformance();
    this.startFrameSwap(this.getGameChild("scissors_1"), this.getGameChild("scissors_2")), this.wait(e, 1, () => {
      this.stopFrameSwap(!1), this.setNodeActive(this.getGameChild("lion"), !1), this.setNodeActive(this.getGameChild("lion_1"), !0), this.setNodeActive(this.getGameChild("mao"), !0), this.exhibitStep = 2, this.endPerformance(e);
    });
  }
  finishMaoDrop() {
    this.setNodeActive(this.getGameChild("lion_3"), !0), this.exhibitStep = 3;
  }
  finishCatFoodDrop() {
    const e = this.beginPerformance();
    this.setNodeActive(this.getGameChild("lion_1"), !1), this.setNodeActive(this.getGameChild("lion_3"), !1), this.setNodeActive(this.getGameChild("lion_2"), !0), this.completeExhibitThenFade(e, 4);
  }
  finishBirdDrop() {
    this.setNodeActive(this.getGameChild("ostrich1"), !1), this.setNodeActive(this.getGameChild("bird_1"), !0), this.setNodeActive(this.getGameChild("ostrich2"), !0), this.setNodeActive(this.getGameChild("ostrich3"), !0), this.setNodeActive(this.getGameChild("angry"), !0), __rea_outer_d.playEffect_1("level67_5"), this.exhibitStep = 2;
  }
  finishFeatherDrop() {
    const e = this.beginPerformance();
    this.setNodeActive(this.getGameChild("ostrich3"), !1), this.setNodeActive(this.getGameChild("bird_1"), !1), this.setNodeActive(this.getGameChild("angry"), !1), this.playDialogue("67_5", !0, () => {
      this.isPerformanceCurrent(e) && this.completeExhibitThenFade(e, 5);
    });
  }
  finishGirlPaint() {
    this.setNodeActive(this.getGameChild("girl"), !1), this.setNodeActive(this.getGameChild("polar_bear_head1"), !1), this.setNodeActive(this.getGameChild("panda"), !0), this.exhibitStep = 2;
  }
  finishPandaEnter() {
    this.restoreOrigin(this.getGameChild("panda1")), this.setNodeActive(this.getGameChild("panda1"), !0), this.exhibitStep = 3;
  }
  finishBasketballDrop() {
    const e = this.beginPerformance();
    this.setNodeActive(this.getGameChild("panda1"), !1), this.startFrameSwap(this.getGameChild("panda3"), this.getGameChild("panda4")), this.wait(e, 1, () => {
      this.stopFrameSwap(!0), this.completeExhibit(), this.enterPhase2Success();
    });
  }
  completeExhibitThenFade(e, t) {
    this.completeExhibit(), this.wait(e, 1, () => {
      this.fadeToExhibit(t, e);
    });
  }
  completeExhibit() {
    this.hasInstallNum >= this.currentExhibit || (this.hasInstallNum = this.currentExhibit, __rea_outer_N.getInstance().refreshGameProgress());
  }
  fadeToExhibit(e, t) {
    const i = this.backBgNode;
    if (null == i || !i.isValid) return void this.enterExhibit(e);
    this.setNodeActive(i, !0), this.stopTweenIfValid(i);
    const s = __rea_outer_b(i);
    s.opacity = 0, __rea_outer_h(s).to(1, {
      opacity: 255
    }).call(() => {
      this.isPerformanceCurrent(t) && (this.showExhibit(e), this.fadeInThenEnter(e, t, s));
    }).start();
  }
  fadeInThenEnter(e, t, i) {
    __rea_outer_h(i).to(1, {
      opacity: 0
    }).call(() => {
      this.isPerformanceCurrent(t) && this.enterExhibit(e);
    }).start();
  }
  enterExhibit(e) {
    return this.currentExhibit = e, this.exhibitStep = 0, this.showExhibit(e), 2 === e ? (this.isExhibitReady = !0, this.setInputBlocked(!1), void __rea_outer_d.playEffect_1("level67_3")) : 3 === e ? (this.isExhibitReady = !1, this.setInputBlocked(!0), void this.playDialogue("67_4", !0, () => {
      this.isValid && 1 === this.phase && 3 === this.currentExhibit && (this.isExhibitReady = !0, this.setInputBlocked(!1));
    })) : 5 === e ? (this.isExhibitReady = !1, this.setInputBlocked(!0), void this.playDialogue("67_6", !0, () => {
      this.isValid && 1 === this.phase && 5 === this.currentExhibit && (this.isExhibitReady = !0, this.setInputBlocked(!1));
    })) : (this.isExhibitReady = !0, void this.setInputBlocked(!1));
  }
  showExhibit(e) {
    [...w, "bg_1", "tiger", "photo1"].forEach(e => {
      "ball_1" === e && this.hasShownBall1 || this.setNodeActive(this.getGameChild(e), !1);
    }), this.setNodeActive(this.ballDragNode, !1), this.setNodeActive(this.ballFailNode, !1), this.setNodeActive(this.getGameChild("bg"), !0), this.setNodeActive(this.getGameChild("girl"), !0), this.setNodeActive(this.getGameChild("pen"), !0), this.setNodeActive(this.getGameChild(`bg_${e}`), !0), this.setNodeActive(this.getGameChild(`photo${e}`), !0), 1 === e ? this.setNodeActive(this.getGameChild("tiger"), !0) : 2 === e ? (this.setNodeActive(this.getGameChild("wolf"), !0), this.restoreOrigin(this.ballDragNode), this.setNodeActive(this.ballDragNode, !0)) : 3 === e ? (this.setNodeActive(this.getGameChild("cat"), !0), this.setNodeActive(this.getGameChild("cat_food"), !0), this.setNodeActive(this.getGameChild("scissors"), !0)) : 4 === e ? (this.setNodeActive(this.getGameChild("ostrich"), !0), this.setNodeActive(this.getGameChild("bird"), !0)) : this.setNodeActive(this.getGameChild("polar_bear_head"), !0), this.prepareGlassHotspot(5 === e), this.hasShownBall1 && this.setNodeActive(this.getGameChild("ball_1"), !0);
  }
  playEndEnter(e, t) {
    var i;
    if (null == e || !e.isValid) return void t();
    const s = (null == (i = this.nodeOrigins.get(e)) ? void 0 : i.clone()) ?? e.position.clone();
    e.setPosition(800, s.y, s.z), this.setNodeActive(e, !0), this.bringNodeToFront(e), this.bringNodeToFront(this.promptBoxNode), this.moveNodeTo(e, s, .5, t);
  }
  startFrameSwap(e, t) {
    this.stopFrameSwap(!1), this.swapFrameA = e, this.swapFrameB = t, this.applySwapFrame(!0), this.schedule(this.onSwapTick, .1);
  }
  stopFrameSwap(e) {
    this.unschedule(this.onSwapTick), e || (this.setNodeActive(this.swapFrameA, !1), this.setNodeActive(this.swapFrameB, !1)), this.swapFrameA = null, this.swapFrameB = null;
  }
  applySwapFrame(e) {
    this.setNodeActive(this.swapFrameA, e), this.setNodeActive(this.swapFrameB, !e);
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
  playActionSound() {
    __rea_outer_d.playEffect_1("level67_1");
  }
  playDialogue(e, t, i) {
    this.voiceToken += 1;
    const s = this.voiceToken;
    this.showPrompt(e), __rea_outer_d.stopVoice(), __rea_outer_d.playVoice(e);
    let h = !1;
    const o = () => {
        !h && this.isValid && s === this.voiceToken && (h = !0, this.unschedule(a), t && this.hidePrompt(), null == i || i());
      },
      a = () => {
        o();
      },
      n = this.resolveDialogueHoldSeconds(e);
    this.scheduleOnce(o, n), this.scheduleOnce(a, Math.max(8, n + .5));
  }
  resolveDialogueHoldSeconds(e) {
    var t;
    const i = (null == (t = __rea_outer_d.audioMap.get(e)) ? void 0 : t.getDuration()) ?? 0;
    return i > .1 ? i : 2.5;
  }
  showPrompt(e) {
    this.promptLabel && (this.promptLabel.string = this.resolveI18nText(e)), this.setNodeActive(this.promptBoxNode, !0), this.bringNodeToFront(this.promptBoxNode);
  }
  hidePrompt() {
    this.setNodeActive(this.promptBoxNode, !1);
  }
  resolveI18nText(e) {
    const t = __rea_outer_c.getInstance().getKey(e);
    return t && t !== e ? t : e;
  }
  restorePenToPocket() {
    this.setNodeActive(this.getGameChild("pen_1"), !1), this.restoreHome(this.getGameChild("pen_1")), this.restoreHome(this.getGameChild("pen")), this.setNodeActive(this.getGameChild("pen"), !0);
  }
  restoreDrag(e) {
    const t = this.getHeldNodeName(e.kind);
    if (t) return this.setNodeActive(this.getGameChild(t), !1), this.restoreHome(this.getGameChild(t)), this.restoreHome(e.sourceNode), void this.setNodeActive(e.sourceNode, !0);
    this.restoreHome(e.sourceNode), this.setNodeActive(e.sourceNode, !0);
  }
  cancelDrag() {
    this.activeDrag && (this.restoreDrag(this.activeDrag), this.activeDrag = null);
  }
  isGreenBallOnGround(e) {
    var t;
    if (null == e || !e.isValid || null == (t = this.gameNode) || !t.isValid) return !1;
    const i = this.gameNode.getComponent(__rea_outer_o);
    if (!i) return !1;
    return i.convertToNodeSpaceAR(e.worldPosition).y < this.getGroundMaxY();
  }
  getGroundMaxY() {
    const e = this.getGameChild("bg_2"),
      t = null == e ? void 0 : e.getComponent(__rea_outer_o);
    return null != e && e.isValid && t ? e.position.y - t.anchorY * t.height : -143;
  }
  isNodeCenterInside(e, t, i = !0) {
    if (null == e || !e.isValid || null == t || !t.isValid) return !1;
    if (i && !t.activeInHierarchy) return !1;
    const s = this.getLayoutWorldRect(e),
      h = this.getLayoutWorldRect(t);
    return !(!s || !h) && __rea_outer_C.isRectWithinDragDistance(s, h);
  }
  getLayoutWorldRect(e) {
    const t = e.getComponent(__rea_outer_o),
      i = e.parent,
      h = null == i ? void 0 : i.getComponent(__rea_outer_o);
    if (!t || null == i || !i.isValid || !h) return null;
    const n = t.width,
      r = t.height,
      l = e.position.x - t.anchorX * n,
      d = e.position.y - t.anchorY * r,
      c = h.convertToWorldSpaceAR(new __rea_outer_s(l, d, 0)),
      p = h.convertToWorldSpaceAR(new __rea_outer_s(l + n, d + r, 0));
    return new __rea_outer_a(Math.min(c.x, p.x), Math.min(c.y, p.y), Math.abs(p.x - c.x), Math.abs(p.y - c.y));
  }
  moveNodeTo(e, t, i, s) {
    null != e && e.isValid ? (this.stopTweenIfValid(e), __rea_outer_h(e).to(i, {
      position: t.clone()
    }).call(() => null == s ? void 0 : s()).start()) : null == s || s();
  }
  placeNodeAtWorld(e, t) {
    const i = this.gameNode ?? e.parent;
    if (null == i || !i.isValid) return;
    const s = i.getComponent(__rea_outer_o);
    s && e.setPosition(s.convertToNodeSpaceAR(t));
  }
  calculateTouchOffset(e, t) {
    const i = this.gameNode ?? t.parent;
    if (null == i || !i.isValid) return __rea_outer_s.ZERO.clone();
    const h = this.getTouchLocalPosition(e, i);
    return new __rea_outer_s(t.position.x - h.x, t.position.y - h.y, 0);
  }
  setDragNodePositionFromTouch(e, t, i) {
    const s = this.gameNode ?? t.parent;
    if (null == s || !s.isValid) return;
    const h = this.getTouchLocalPosition(e, s);
    t.setPosition(h.x + i.x, h.y + i.y, t.position.z);
  }
  getTouchLocalPosition(e, t) {
    const i = e.getUILocation(),
      h = t.getComponent(__rea_outer_o);
    return h ? h.convertToNodeSpaceAR(new __rea_outer_s(i.x, i.y, 0)) : __rea_outer_s.ZERO.clone();
  }
  restoreCachedNodes() {
    this.homeParents.forEach((e, t) => {
      t.isValid && e.isValid && t.parent !== e && t.setParent(e);
    }), this.nodeOrigins.forEach((e, t) => {
      t.isValid && (this.stopTweenIfValid(t), t.setPosition(e), t.angle = 0);
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
  prepareGlassHotspot(e) {
    var t;
    const i = this.getGameChild("clicks") ?? this.node.getChildByPath("UIPanel/gameNode/clicks");
    this.setNodeActive(i, e), null != (t = this.glassTouch5Node) && t.isValid && (this.glassTouch5Node.active = e, e && __rea_outer_v(this.glassTouch5Node, 0));
  }
  setInputBlocked(e) {
    this.setNodeActive(this.backBgNode, e), e && this.resetBackBgOpacity();
  }
  resetBackBgOpacity() {
    var e;
    null != (e = this.backBgNode) && e.isValid && __rea_outer_v(this.backBgNode, 0);
  }
  scheduleOnceIfValid(e, t) {
    this.scheduleOnce(() => {
      this.isValid && e();
    }, t);
  }
  cleanupRuntime(e) {
    this.unscheduleAllCallbacks(), this.unregisterInteractionHandlers(), this.voiceToken += 1, this.performanceToken += 1, this.pointerSession = null, this.cancelDrag(), this.stopFrameSwap(!1), e && __rea_outer_d.stopVoice(), this.stopAllGameplayTweens();
  }
  stopAllGameplayTweens() {
    this.nodeByName.forEach(e => {
      this.stopTweenIfValid(e);
    }), this.stopTweenIfValid(this.ballDragNode), this.stopTweenIfValid(this.ballFailNode), this.stopTweenIfValid(this.glassTouch5Node), this.stopTweenIfValid(this.backBgNode);
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
    null != e && e.isValid && ("ball" === e.name || this.nodeByName.has(e.name) || this.nodeByName.set(e.name, e), this.nodeOrigins.set(e, e.position.clone()), this.siblingOrigins.set(e, e.getSiblingIndex()), e.parent && this.homeParents.set(e, e.parent));
  }
  resolveBallNodes() {
    var e;
    const t = (null == (e = this.gameNode) ? void 0 : e.children) ?? [],
      i = t[7],
      s = t[8];
    this.ballDragNode = "ball" === (null == i ? void 0 : i.name) ? i : null, this.ballFailNode = "ball" === (null == s ? void 0 : s.name) ? s : null, this.ballDragNode && this.ballFailNode || t.forEach(e => {
      "ball" === e.name && (e.position.y < 100 ? this.ballDragNode = this.ballDragNode ?? e : this.ballFailNode = this.ballFailNode ?? e);
    });
  }
  resolveReferences() {
    var e, t;
    this.gameNode = this.node.getChildByPath("UIPanel/gameNode"), this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.nodeByName.clear(), this.nodeOrigins.clear(), this.siblingOrigins.clear(), this.homeParents.clear(), null == (e = this.gameNode) || e.children.forEach(e => {
      this.cacheNode(e);
    }), this.resolveBallNodes(), this.glassTouch5Node = this.node.getChildByPath("UIPanel/gameNode/clicks/touch5"), this.cacheNode(this.glassTouch5Node), this.promptBoxNode = this.getGameChild("prompt_box"), this.promptLabel = (null == (t = this.promptBoxNode) || null == (t = t.getChildByName("Label")) ? void 0 : t.getComponent(__rea_outer_n)) ?? null, this.warnIfMissing();
  }
  warnIfMissing() {
    this.gameNode || console.warn("[Level_67] missing gameNode"), ["bg", "bg_1", "tiger", "tiger_1", "bg_2", "wolf", "wolf_1", "wolf_2", "bg_3", "lion", "lion_1", "lion_2", "lion_3", "mao", "bg_4", "bird", "bird_1", "ostrich", "ostrich1", "ostrich2", "ostrich3", "angry", "bg_5", "panda", "panda1", "panda3", "panda4", "girl", "polar_bear_head", "polar_bear_head1", "pen", "pen_1", "photo1", "cat", "cat_food", "scissors", "ball_1", "end1", "end", "prompt_box"].forEach(e => {
      this.getGameChild(e) || console.warn(`[Level_67] missing ${e}`);
    }), this.ballDragNode || console.warn("[Level_67] missing ball sibling 7"), this.ballFailNode || console.warn("[Level_67] missing ball sibling 8"), this.glassTouch5Node || console.warn("[Level_67] missing clicks/touch5"), this.promptLabel || console.warn("[Level_67] missing prompt_box/Label"), this.backBgNode || console.warn("[Level_67] missing backBG");
  }
}) || _;
__rea_outer_t._RF.pop();
export { __recovered_export_0 as default };
