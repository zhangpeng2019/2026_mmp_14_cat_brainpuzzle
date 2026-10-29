// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_88.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_i } from "cc";
import { Vec3 as __rea_outer_t } from "cc";
import { tween as __rea_outer_s } from "cc";
import { UITransform as __rea_outer_o } from "cc";
import { Node as __rea_outer_h } from "cc";
import { Mask as __rea_outer_r } from "cc";
import { Rect as __rea_outer_n } from "cc";
import { Label as __rea_outer_a } from "cc";
import { _decorator as __rea_outer_l } from "cc";
import { default as __rea_outer_g } from "./LevelBase";
import { default as __rea_outer_d } from "./clue-hit-tester";
import { default as __rea_outer_c } from "./AudioManager";
import { I18nController as __rea_outer_p } from "./i18n-controller";
import { UIManager as __rea_outer_u } from "./ui-manager";
import { UIHint as __rea_outer__ } from "./uihint";
import { GameController as __rea_outer_N } from "./GameController";
import { setNodeOpacity as __rea_outer_m } from "./CocosCompat";
import { stopAllTweens as __rea_outer_f } from "./CocosCompat";
let __recovered_export_0;
var v;
__rea_outer_i._RF.push({}, "73b81A/STNMBrRGjvBUlQw+", "Level_88", void 0);
const {
    ccclass: S
  } = __rea_outer_l,
  w = 12,
  T = .5,
  y = .15,
  H = 11,
  P = new Set(["bg", "bag", "skipping_rope", "cosmetics", "door", "girl4_1", "girl3_1", "girl2", "girl2_razor", "girl6", "girl6_sock", "hairband"]),
  b = new Set(["girl1_fat", "girl1_fat_leg_hair", "girl1_head_2", "girl1_hair1", "girl1_glasses"]),
  k = ["stench_1", "stench_1_1", "stench_1_2"],
  I = ["stench_2", "stench_2_1", "stench_2_2"],
  O = [...k, ...I],
  V = ["girl1_head_hair", "girl1_head_hair1", "girl1_head_1_hair", "girl1_head_1_hair1"],
  C = ["fight_cosmetics_1", "fight_glove_1", "fight_glove_2"],
  L = ["razor", "curling_iron", "girl1_glasses"],
  x = ["girl1_end", "girl2_end", "girl3_end", "girl4_end", "girl5_end", "girl6_end"],
  B = ["girl2", "girl2_razor", "girl3", "girl3_1", "girl4", "girl4_1", "girl5", "girl5_1", "girl5_2", "girl5_3", "girl5_vest", "girl6", "girl6_sock"],
  E = ["skipping_rope", "cosmetics", "cosmetics_1", "glove", "glove_1", "razor", "vest", "perfume", "perfume_1", "curling_iron", "hairband", "fight", "fight_1", "fight_2", "fight_glove_1", "fight_glove_2", "fight_cosmetics", "fight_cosmetics_1", ...O],
  F = [{
    step: 1,
    source: "skipping_rope",
    follower: "skipping_rope"
  }, {
    step: 2,
    source: "cosmetics",
    follower: "cosmetics_1"
  }, {
    step: 4,
    source: "glove",
    follower: "glove_1"
  }, {
    step: 5,
    source: "girl2_razor",
    follower: "razor"
  }, {
    step: 6,
    source: "girl3_1",
    follower: "curling_iron"
  }, {
    step: 7,
    source: "girl4_1",
    follower: "perfume"
  }, {
    step: 9,
    source: "girl5_vest",
    follower: "vest"
  }, {
    step: 10,
    source: "girl6_sock",
    follower: "girl6_sock"
  }, {
    step: 12,
    source: "hairband",
    follower: "hairband"
  }];
__recovered_export_0 = S("Level_88")(v = class extends __rea_outer_g {
  constructor(...e) {
    super(...e), this.phase = 0, this.winstate = !1, this.stageNode = null, this.backBgNode = null, this.promptBoxNode = null, this.promptLabel = null, this.nodeByName = new Map(), this.originByNode = new Map(), this.siblingByNode = new Map(), this.completedSteps = new Set(), this.draggedNode = null, this.dragStep = 0, this.dragOffset = new __rea_outer_t(), this.pressedName = "", this.swipeStart = null, this.voiceToken = 0, this.stepToken = 0, this.activePerformanceStep = 0, this.isInputLocked = !1, this.isHeldForTimeUp = !1, this.isLegHairShaved = !1, this.isStenchRunning = !1, this.stenchShowsFirst = !0, this.legHairMask = null, this.legHairClipTarget = null, this.legHairOriginParent = null, this.legHairOriginPos = null, this.legHairOriginSibling = 0, this.legHairOriginWidth = 0, this.legHairOriginHeight = 0;
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.prepareBackBg(), this.allItemNum = w, this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.enterPhase0();
  }
  update() {
    this.releaseTimeUpHold();
  }
  onDestroy() {
    this.cleanupRuntime(!this.shouldSkipStopLevelAudio()), super.onDestroy();
  }
  handleTimeExpired() {
    return 1 !== this.phase || (this.isHeldForTimeUp = !0, this.abortPerformance(), this.clearDrag(!0), this.setInputLocked(!1), !1);
  }
  showHint() {
    if (!this.canAcceptInput()) return;
    const e = this.getHintStep();
    if (null === e) return;
    const i = __rea_outer_p.getInstance().getKey(`level88_hint${e}`);
    __rea_outer_u.getInstance().showView(__rea_outer__, void 0, {
      body: i
    });
  }
  getGameProgressSnapshot() {
    const e = Math.min(this.hasInstallNum, w);
    return {
      progress: e / w,
      label: `${e}/12`
    };
  }
  markAllTasksCompleted() {
    this.hasInstallNum = w;
    for (let e = 1; e <= w; e += 1) this.completedSteps.add(e);
    this.phase = 2, this.winstate = !0, this.isInputLocked = !0, this.stepToken += 1, this.activePerformanceStep = 0, this.isStenchRunning = !1;
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.completedSteps.clear(), this.draggedNode = null, this.dragStep = 0, this.pressedName = "", this.swipeStart = null, this.voiceToken += 1, this.stepToken += 1, this.activePerformanceStep = 0, this.isInputLocked = !1, this.isHeldForTimeUp = !1, this.isLegHairShaved = !1, this.isStenchRunning = !1, this.stenchShowsFirst = !0, this.hasInstallNum = 0, this.allItemNum = w, this.unscheduleAllCallbacks(), __rea_outer_c.stopVoice(), this.releaseLegHairClip(!1), this.restoreOrigins();
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_c.playMusic("bgm4", !0, .5), __rea_outer_N.getInstance().pauseTimer(), this.applyOpeningVisibility(), this.registerInputHandlers(), this.setInputLocked(!0), this.startStench(), __rea_outer_N.getInstance().refreshGameProgress(), this.playDialogue("88_1", () => {
      this.isValid && 0 === this.phase && this.playDialogue("88_2", () => {
        this.isValid && 0 === this.phase && this.enterPhase1();
      });
    });
  }
  skipOpeningToPlay() {
    return 0 === this.phase && (this.voiceToken += 1, this.stopOpeningDialogue(), this.enterPhase1(), !0);
  }
  enterPhase1() {
    this.isValid && 0 === this.phase && (this.phase = 1, this.hidePrompt(), this.setInputLocked(!1), __rea_outer_N.getInstance().resumeTimer(), __rea_outer_N.getInstance().refreshGameProgress());
  }
  enterSuccess() {
    2 !== this.phase && (this.phase = 2, this.winstate = !0, this.stepToken += 1, this.activePerformanceStep = 0, this.isHeldForTimeUp = !1, this.isStenchRunning = !1, this.clearDrag(!0), this.stopBobs(), __rea_outer_N.getInstance().pauseTimer(), this.setInputLocked(!0), this.hideSettlementPeople(), this.hideNames(E), this.keepOpenedScenery(), this.showNames(x), this.playDialogue("88_3", () => {
      this.scheduleOnce(() => {
        this.isValid && this.winstate && this.showLevelSuccess(0);
      }, 1);
    }));
  }
  acceptStep(e) {
    if (!this.canAcceptInput() || !this.isStepAvailable(e)) return void this.cancelDragVisual(e);
    __rea_outer_c.playEffect_1("level88_1"), 7 === e && __rea_outer_c.playEffect_1("level88_2"), this.applyStepStart(e);
    const i = this.performanceSeconds(e);
    if (i <= 0) return void this.markStepDone(e);
    this.activePerformanceStep = e, this.setInputLocked(!0);
    const t = this.stepToken;
    this.startPerformanceMotion(e, t), this.endsWithSlide(e) || this.scheduleOnce(() => {
      this.isPerformanceLive(t) && this.finishPerformance(e);
    }, i);
  }
  finishPerformance(e) {
    this.activePerformanceStep === e && 1 === this.phase && (this.activePerformanceStep = 0, this.stopBobs(), this.applyStepEnd(e), 1 === this.phase && (this.setInputLocked(!1), this.markStepDone(e)));
  }
  abortPerformance() {
    const e = this.activePerformanceStep;
    0 !== e && (this.stepToken += 1, this.activePerformanceStep = 0, this.stopBobs(), this.stopSlides(), this.revertStep(e));
  }
  markStepDone(e) {
    this.completedSteps.has(e) || 1 !== this.phase || (this.completedSteps.add(e), this.hasInstallNum += 1, __rea_outer_N.getInstance().refreshGameProgress(), this.completedSteps.size >= w && this.enterSuccess());
  }
  applyStepStart(e) {
    if (1 !== e) {
      if (2 !== e) {
        if (3 === e) return this.hideNode(this.getNode("bag")), this.showNode(this.getNode("bag_1")), void this.showNode(this.getNode("glove"));
        if (4 !== e) return 7 === e ? (this.parkNode("perfume"), void this.showNode(this.getNode("perfume_1"))) : 8 === e ? (this.hideNode(this.getNode("door")), void this.showNames(["door_1", "girl5", "girl5_vest", "girl5_1", "girl5_2", "girl5_3"])) : 9 === e ? (this.hideNames(["vest", "girl5_vest", "girl1_thin_coat"]), void this.showNode(this.getNode("girl1_vest"))) : 10 === e ? (this.hideNode(this.getNode("girl6_sock")), void this.showNode(this.getNode("girl1_sock"))) : void (12 === e && (this.hideNode(this.getNode("hairband")), this.showNode(this.getNode("girl1_hairband"))));
        this.applyGlovesStart();
      } else this.applyMakeupStart();
    } else this.applyRopeStart();
  }
  applyStepEnd(e) {
    return 2 === e ? (this.hideNames(["fight", "fight_cosmetics", "fight_cosmetics_1", "fight_1", "fight_2"]), void this.showNode(this.getNode("girl1_head_1"))) : 4 !== e ? 5 === e ? (this.isLegHairShaved = !0, this.releaseLegHairClip(!0), void this.hideNames(["razor", "girl1_fat_leg_hair", "girl1_thin_leg_hair"])) : 6 === e ? (this.hideNames(["curling_iron", "girl1_hair", "girl1_hair1"]), void this.showCurlHair()) : 7 === e ? (this.isStenchRunning = !1, void this.hideNames(["perfume", "perfume_1", ...O])) : void (e === H && this.hideNode(this.getNode("girl1_glasses"))) : void this.applyGlovesEnd();
  }
  revertStep(e) {
    return 2 === e ? (this.hideNames(["fight", "fight_cosmetics", "fight_cosmetics_1", "fight_1", "fight_2"]), this.showNode(this.getNode("girl1_head_2")), this.hideNode(this.getNode("cosmetics_1")), this.parkNode("cosmetics"), void this.showNode(this.getNode("cosmetics"))) : 4 === e ? (this.hideNames(["fight", "fight_glove_1", "fight_glove_2", "fight_1", "fight_2", "glove_1"]), this.showNode(this.getNode("girl1_head_1")), this.parkNode("glove"), void this.showNode(this.getNode("glove"))) : 5 === e ? (this.releaseLegHairClip(!1), this.hideNode(this.getNode("razor")), void this.showNode(this.getNode("girl2_razor"))) : 6 === e ? (this.hideNames(["girl3", "curling_iron"]), this.parkNode("curling_iron"), void this.showNode(this.getNode("girl3_1"))) : 7 === e ? (this.hideNames(["girl4", "perfume", "perfume_1"]), this.parkNode("perfume"), void this.showNode(this.getNode("girl4_1"))) : void (e === H && (this.parkNode("girl1_glasses"), this.showNode(this.getNode("girl1_glasses"))));
  }
  applyRopeStart() {
    this.hideNames(["skipping_rope", "girl1_fat"]), this.showNames(["girl1_thin", "girl1_thin_coat"]), this.hideNode(this.getNode("girl1_fat_leg_hair")), this.isLegHairShaved ? this.hideNode(this.getNode("girl1_thin_leg_hair")) : this.showNode(this.getNode("girl1_thin_leg_hair"));
  }
  applyMakeupStart() {
    this.hideNames(["cosmetics_1", "girl1_head_2"]), this.showNames(["fight", "fight_cosmetics", "fight_cosmetics_1"]);
  }
  applyGlovesStart() {
    this.hideNames(["glove", "glove_1", "girl1_head_1"]), this.showNames(["fight", "fight_glove_1", "fight_glove_2"]);
  }
  applyGlovesEnd() {
    this.hideNames(["fight", "fight_glove_1", "fight_glove_2", "fight_1", "fight_2"]), this.showNode(this.getNode("girl1_head")), this.completedSteps.has(6) || (this.hideNode(this.getNode("girl1_hair1")), this.showNode(this.getNode("girl1_hair")));
  }
  showCurlHair() {
    V.forEach(e => this.hideNode(this.getNode(e))), this.showNode(this.getNode(this.curlHairName()));
  }
  startPerformanceMotion(e, i) {
    return 2 === e ? (this.startBob("fight_cosmetics_1"), void this.startFightFrames(i)) : 4 === e ? (this.startBob("fight_glove_1"), this.startBob("fight_glove_2"), void this.startFightFrames(i)) : void (5 !== e ? 6 !== e ? e === H && this.slideGlasses(i) : this.slideCurlingIron(i) : this.slideRazor(i));
  }
  startBob(e) {
    const i = this.getNode(e);
    if (null == i || !i.isValid) return;
    const o = this.originOf(i);
    i.setPosition(o);
    const h = new __rea_outer_t(o.x, o.y + 20, o.z),
      r = new __rea_outer_t(o.x, o.y - 20, o.z);
    __rea_outer_s(i).to(y, {
      position: h
    }, {
      easing: "linear"
    }).to(y, {
      position: r
    }, {
      easing: "linear"
    }).union().repeatForever().start();
  }
  startFightFrames(e) {
    this.applyFightFrame(!0), this.queueFightFrame(e, !1);
  }
  queueFightFrame(e, i) {
    this.scheduleOnce(() => {
      this.isPerformanceLive(e) && (this.applyFightFrame(i), this.queueFightFrame(e, !i));
    }, y);
  }
  applyFightFrame(e) {
    this.setNodeActive(this.getNode("fight_1"), e), this.setNodeActive(this.getNode("fight_2"), !e);
  }
  slideRazor(e) {
    const i = this.getNode("razor"),
      t = this.getNode("girl1_fat_leg_hair");
    if (null == i || !i.isValid || null == t || !t.isValid) return void this.finishPerformance(5);
    const o = this.currentLegHair();
    o && this.beginLegHairClip(o);
    const h = this.stagePointOnEdge(t, !0),
      r = this.stagePointOnEdge(t, !1);
    i.setPosition(h), __rea_outer_s(i).to(T, {
      position: r
    }, {
      easing: "linear",
      onUpdate: () => this.applyLegHairClip(this.slideRatio(i, h.y, r.y))
    }).call(() => {
      this.isPerformanceLive(e) && this.finishPerformance(5);
    }).start();
  }
  slideCurlingIron(e) {
    const i = this.getNode("curling_iron"),
      t = this.getNode(this.straightHairName());
    if (null == i || !i.isValid || null == t || !t.isValid) return void this.finishPerformance(6);
    const o = this.stagePointOnEdge(t, !0),
      h = this.stagePointOnEdge(t, !1);
    i.setPosition(o), __rea_outer_s(i).to(T, {
      position: h
    }, {
      easing: "linear"
    }).call(() => {
      this.isPerformanceLive(e) && this.finishPerformance(6);
    }).start();
  }
  slideGlasses(e) {
    const i = this.getNode("girl1_glasses");
    if (null == i || !i.isValid) return void this.finishPerformance(H);
    const o = new __rea_outer_t(i.position.x, i.position.y - this.currentHeadHeight(), i.position.z);
    __rea_outer_s(i).to(T, {
      position: o
    }, {
      easing: "linear"
    }).call(() => {
      i.isValid && (i.active = !1), this.isPerformanceLive(e) && this.finishPerformance(H);
    }).start();
  }
  beginLegHairClip(e) {
    const i = e.getComponent(__rea_outer_o),
      t = e.parent;
    if (!i || null == t || !t.isValid) return;
    this.releaseLegHairClip(!1), this.legHairClipTarget = e, this.legHairOriginParent = t, this.legHairOriginPos = e.position.clone(), this.legHairOriginSibling = e.getSiblingIndex(), this.legHairOriginWidth = i.contentSize.width, this.legHairOriginHeight = i.contentSize.height;
    const s = new __rea_outer_h("leg_hair_mask");
    s.layer = e.layer, t.addChild(s), s.setSiblingIndex(this.legHairOriginSibling);
    const n = s.addComponent(__rea_outer_o);
    n.setAnchorPoint(.5, .5), n.setContentSize(this.legHairOriginWidth, this.legHairOriginHeight), s.setPosition(this.legHairOriginPos), s.addComponent(__rea_outer_r), e.setParent(s), e.setPosition(0, 0, 0), this.legHairMask = s;
  }
  applyLegHairClip(e) {
    const i = this.legHairMask,
      t = this.legHairClipTarget,
      s = this.legHairOriginPos,
      h = (null == i ? void 0 : i.getComponent(__rea_outer_o)) ?? null;
    if (!(null != i && i.isValid && null != t && t.isValid && s && h)) return;
    const r = Math.max(0, 1 - e),
      n = this.legHairOriginHeight * r,
      a = s.y - this.legHairOriginHeight / 2 + n / 2;
    h.setContentSize(this.legHairOriginWidth, Math.max(n, 0)), i.setPosition(s.x, a, s.z), t.setPosition(0, s.y - a, 0);
  }
  releaseLegHairClip(e) {
    const i = this.legHairClipTarget,
      t = this.legHairOriginParent,
      s = this.legHairOriginPos;
    if (null != i && i.isValid && null != t && t.isValid && s) {
      i.setParent(t);
      const o = Math.max(0, t.children.length - 1);
      i.setSiblingIndex(Math.min(this.legHairOriginSibling, o)), i.setPosition(s), i.active = !e;
    }
    const o = this.legHairMask;
    this.legHairMask = null, this.legHairClipTarget = null, this.legHairOriginParent = null, this.legHairOriginPos = null, null != o && o.isValid && o.destroy();
  }
  startStench() {
    this.isStenchRunning = !0, this.stenchShowsFirst = !0, this.applyStenchFrame(), this.queueStench();
  }
  queueStench() {
    this.scheduleOnce(() => {
      this.isValid && this.isStenchRunning && (this.stenchShowsFirst = !this.stenchShowsFirst, this.applyStenchFrame(), this.queueStench());
    }, y);
  }
  applyStenchFrame() {
    k.forEach(e => this.setNodeActive(this.getNode(e), this.stenchShowsFirst)), I.forEach(e => this.setNodeActive(this.getNode(e), !this.stenchShowsFirst));
  }
  registerInputHandlers() {
    this.node.off(__rea_outer_h.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(__rea_outer_h.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(__rea_outer_h.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(__rea_outer_h.EventType.TOUCH_CANCEL, this.onTouchCancel, this), this.node.on(__rea_outer_h.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(__rea_outer_h.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(__rea_outer_h.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(__rea_outer_h.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
  }
  unregisterInputHandlers() {
    var e;
    null != (e = this.node) && e.isValid && (this.node.off(__rea_outer_h.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(__rea_outer_h.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(__rea_outer_h.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(__rea_outer_h.EventType.TOUCH_CANCEL, this.onTouchCancel, this));
  }
  onTouchStart(e) {
    if (!this.canAcceptInput() || this.draggedNode) return;
    const i = e.getUILocation(),
      t = this.findDragKind(i);
    t ? this.beginDrag(t, i) : this.isStepAvailable(3) && this.containsPoint(this.getNode("bag"), i) ? this.pressedName = "bag" : this.isStepAvailable(8) && this.containsPoint(this.getNode("door"), i) ? this.pressedName = "door" : this.isStepAvailable(H) && this.containsPoint(this.getNode("touch-3"), i) && (this.swipeStart = i.clone());
  }
  onTouchMove(e) {
    var i;
    null != (i = this.draggedNode) && i.isValid && this.canAcceptInput() && this.moveDraggedTo(e.getUILocation());
  }
  onTouchEnd(e) {
    var i;
    const t = e.getUILocation();
    if (null != (i = this.draggedNode) && i.isValid) return void this.finishDrag(t);
    const s = this.pressedName,
      o = this.swipeStart;
    this.pressedName = "", this.swipeStart = null, this.canAcceptInput() && ("bag" === s && this.containsPoint(this.getNode("bag"), t) ? this.acceptStep(3) : "door" === s && this.containsPoint(this.getNode("door"), t) ? this.acceptStep(8) : o && this.isSwipeDown(o, t) && this.acceptStep(H));
  }
  onTouchCancel() {
    this.pressedName = "", this.swipeStart = null, this.clearDrag(!0);
  }
  beginDrag(e, i) {
    this.prepareDragVisual(e);
    const s = this.getNode(e.follower);
    if (null == s || !s.isValid) return;
    const o = this.toParentLocal(s, i);
    e.source === e.follower ? this.dragOffset = new __rea_outer_t(o.x - s.position.x, o.y - s.position.y, 0) : (this.dragOffset = new __rea_outer_t(), s.setPosition(o.x, o.y, s.position.z)), this.draggedNode = s, this.dragStep = e.step, this.placeBelowPrompt(s);
  }
  prepareDragVisual(e) {
    6 === e.step ? (this.hideNode(this.getNode("girl3_1")), this.showNode(this.getNode("girl3"))) : 7 === e.step ? (this.hideNode(this.getNode("girl4_1")), this.showNode(this.getNode("girl4"))) : e.source !== e.follower && this.hideNode(this.getNode(e.source)), e.source !== e.follower && this.showNode(this.getNode(e.follower));
  }
  finishDrag(e) {
    const i = this.draggedNode,
      t = this.dragStep;
    if (this.draggedNode = null, this.dragStep = 0, null == i || !i.isValid) return;
    this.moveDraggedTo(e);
    this.canAcceptInput() && this.isStepAvailable(t) && this.isDragHit(t, i) ? this.acceptStep(t) : this.cancelDragVisual(t);
  }
  cancelDragVisual(e) {
    const i = this.dragKindFor(e),
      t = i ? this.getNode(i.follower) : null;
    return null != t && t.isValid && this.returnHome(t), 6 === e ? (this.hideNames(["girl3", "curling_iron"]), void this.showNode(this.getNode("girl3_1"))) : 7 === e ? (this.hideNames(["girl4", "perfume"]), void this.showNode(this.getNode("girl4_1"))) : void (i && i.source !== i.follower && (this.hideNode(t), this.showNode(this.getNode(i.source))));
  }
  findDragKind(e) {
    let i = null,
      t = -1;
    return F.forEach(s => {
      if (!this.isStepAvailable(s.step)) return;
      const o = this.dragPressNode(s);
      if (!o || !this.containsPoint(o, e)) return;
      const h = this.dragPressOrder(s, o);
      h < t || (t = h, i = s);
    }), i;
  }
  dragPressNode(e) {
    return 5 === e.step ? this.getNode("touch-girl2_razor") : 6 === e.step ? this.getNode("touch-curling_iron") : this.getNode(e.source);
  }
  dragPressOrder(e, i) {
    return 5 === e.step || 6 === e.step ? 1e5 + i.getSiblingIndex() : i.getSiblingIndex();
  }
  moveDraggedTo(e) {
    const i = this.draggedNode;
    if (null == i || !i.isValid) return;
    const t = this.toParentLocal(i, e);
    i.setPosition(t.x - this.dragOffset.x, t.y - this.dragOffset.y, i.position.z);
  }
  clearDrag(e) {
    const i = this.dragStep,
      t = this.draggedNode;
    this.draggedNode = null, this.dragStep = 0, this.pressedName = "", this.swipeStart = null, e && null != t && t.isValid && this.cancelDragVisual(i);
  }
  isDragHit(e, i) {
    if (5 === e) return this.isNearTarget(i, this.getNode("girl1_fat_leg_hair"), !0);
    if (6 === e) return this.isNearTarget(i, this.getNode(this.straightHairName()), !1);
    if (7 === e || 12 === e) return this.isOnGirl(i);
    const t = this.targetName(e);
    return "" !== t && this.isNearTarget(i, this.getNode(t), !1);
  }
  targetName(e) {
    return 1 === e ? "girl1_fat" : 2 === e ? "girl1_head_2" : 4 === e ? "girl1_head_1" : 9 === e ? "girl1_thin_coat" : 10 === e ? "girl1_thin" : "";
  }
  isOnGirl(e) {
    const i = this.getNode("girls");
    return !(null == i || !i.isValid) && i.children.some(i => i.name.startsWith("girl1_") && this.isNearTarget(e, i, !1));
  }
  isSwipeDown(e, i) {
    const t = i.x - e.x,
      s = i.y - e.y;
    return -s >= 30 && Math.abs(s) >= 1.2 * Math.abs(t);
  }
  canAcceptInput() {
    return this.isValid && 1 === this.phase && !this.isInputLocked && !this.isHeldForTimeUp && !this.winstate;
  }
  isStepAvailable(e) {
    return !(this.completedSteps.has(e) || e < 1 || e > w) && (4 === e ? this.completedSteps.has(2) && this.completedSteps.has(3) : 8 === e || 10 === e ? this.completedSteps.has(1) : 9 === e ? this.completedSteps.has(1) && this.completedSteps.has(8) : 12 !== e || this.completedSteps.has(6));
  }
  isPerformanceLive(e) {
    return this.isValid && e === this.stepToken && 1 === this.phase && 0 !== this.activePerformanceStep;
  }
  getHintStep() {
    for (let e = 1; e <= w; e += 1) if (this.isStepAvailable(e)) return e;
    return null;
  }
  performanceSeconds(e) {
    return 2 === e || 4 === e || 7 === e ? .7 : 5 === e || 6 === e || e === H ? T : 0;
  }
  endsWithSlide(e) {
    return 5 === e || 6 === e || e === H;
  }
  straightHairName() {
    return this.completedSteps.has(4) ? "girl1_hair" : "girl1_hair1";
  }
  curlHairName() {
    const e = this.completedSteps.has(1),
      i = this.completedSteps.has(4);
    return e && i ? "girl1_head_hair" : i ? "girl1_head_hair1" : e ? "girl1_head_1_hair" : "girl1_head_1_hair1";
  }
  currentLegHair() {
    if (this.isLegHairShaved) return null;
    const e = this.completedSteps.has(1) ? "girl1_thin_leg_hair" : "girl1_fat_leg_hair",
      i = this.getNode(e);
    return null != i && i.isValid && i.active ? i : null;
  }
  currentHeadHeight() {
    var e;
    const i = this.currentHead(),
      t = (null == i || null == (e = i.getComponent(__rea_outer_o)) ? void 0 : e.contentSize.height) ?? 0;
    return t > 0 ? t : 123;
  }
  currentHead() {
    return this.completedSteps.has(4) ? this.getNode("girl1_head") : this.completedSteps.has(2) ? this.getNode("girl1_head_1") : this.getNode("girl1_head_2");
  }
  slideRatio(e, i, t) {
    const s = i - t;
    return e.isValid && 0 !== s ? Math.min(1, Math.max(0, (i - e.position.y) / s)) : 1;
  }
  stagePointOnEdge(e, i) {
    var s, h, r;
    const n = e.getComponent(__rea_outer_o),
      a = (null == n ? void 0 : n.contentSize.height) ?? 0,
      l = new __rea_outer_t(e.position.x, e.position.y + (i ? a / 2 : -a / 2), e.position.z),
      g = (null == (s = e.parent) ? void 0 : s.getComponent(__rea_outer_o)) ?? null,
      d = (null == (h = this.stageNode) ? void 0 : h.getComponent(__rea_outer_o)) ?? null;
    if (!g || !d || null == (r = e.parent) || !r.isValid) return l;
    const c = g.convertToWorldSpaceAR(l);
    return d.convertToNodeSpaceAR(c);
  }
  releaseTimeUpHold() {
    this.isHeldForTimeUp && 1 === this.phase && (__rea_outer_N.getInstance().getRemainingTime() <= 0 || (this.isHeldForTimeUp = !1));
  }
  hideSettlementPeople() {
    var e;
    null == (e = this.getNode("girls")) || e.children.forEach(e => {
      null != e && e.isValid && (e.active = !1);
    }), this.hideNames(B);
  }
  keepOpenedScenery() {
    this.hideNode(this.getNode("door")), this.hideNode(this.getNode("bag")), this.completedSteps.has(8) && this.showNode(this.getNode("door_1")), this.completedSteps.has(3) && this.showNode(this.getNode("bag_1"));
  }
  playDialogue(e, i) {
    this.voiceToken += 1;
    const t = this.voiceToken;
    this.showPrompt(e), __rea_outer_c.stopVoice(), __rea_outer_c.playVoice(e), this.scheduleOnce(() => {
      this.isValid && t === this.voiceToken && (this.hidePrompt(), null == i || i());
    }, this.resolveDialogueHoldSeconds(e));
  }
  resolveDialogueHoldSeconds(e) {
    var i;
    const t = (null == (i = __rea_outer_c.audioMap.get(e)) ? void 0 : i.getDuration()) ?? 0;
    return t > .05 ? t : 2.5;
  }
  showPrompt(e) {
    this.promptLabel && (this.promptLabel.string = this.resolveI18nText(e)), this.showNode(this.promptBoxNode), this.bringToFront(this.promptBoxNode);
  }
  hidePrompt() {
    this.hideNode(this.promptBoxNode);
  }
  resolveI18nText(e) {
    const i = __rea_outer_p.getInstance().getKey(e);
    return i && i !== e ? i : e;
  }
  setInputLocked(e) {
    this.isInputLocked = e;
    const i = this.backBgNode;
    null != i && i.isValid && (this.stopTweenIfValid(i), __rea_outer_m(i, 0), i.active = e);
  }
  prepareBackBg() {
    const e = this.backBgNode;
    null != e && e.isValid && (__rea_outer_m(e, 0), e.active = !1);
  }
  containsPoint(e, i) {
    if (null == e || !e.isValid || !e.activeInHierarchy) return !1;
    const t = e.getComponent(__rea_outer_o);
    return !!t && t.getBoundingBoxToWorld().contains(i);
  }
  isNearTarget(e, i, t) {
    if (!e.isValid || null == i || !i.isValid) return !1;
    const s = this.boundsOf(e, !1),
      o = this.boundsOf(i, t);
    return !(!s || !o) && __rea_outer_d.isRectWithinDragDistance(new __rea_outer_n(s.x, s.y, s.width, s.height), new __rea_outer_n(o.x, o.y, o.width, o.height));
  }
  boundsOf(e, i) {
    var t, s;
    const h = e.getComponent(__rea_outer_o);
    if (!h) return null;
    if (e.activeInHierarchy) {
      const e = h.getBoundingBoxToWorld();
      return {
        x: e.x,
        y: e.y,
        width: e.width,
        height: e.height
      };
    }
    if (!i) return null;
    const r = (null == (t = e.parent) ? void 0 : t.getComponent(__rea_outer_o)) ?? null;
    if (!r || null == (s = e.parent) || !s.isValid) return null;
    const n = r.convertToWorldSpaceAR(e.position),
      a = e.parent.worldScale,
      l = h.contentSize.width * Math.abs(a.x),
      g = h.contentSize.height * Math.abs(a.y),
      d = h.anchorPoint;
    return {
      x: n.x - l * d.x,
      y: n.y - g * d.y,
      width: l,
      height: g
    };
  }
  toParentLocal(e, i) {
    var s;
    const h = null == (s = e.parent) ? void 0 : s.getComponent(__rea_outer_o);
    return h ? h.convertToNodeSpaceAR(new __rea_outer_t(i.x, i.y, 0)) : new __rea_outer_t(i.x, i.y, 0);
  }
  originOf(e) {
    var i;
    return (null == (i = this.originByNode.get(e)) ? void 0 : i.clone()) ?? e.position.clone();
  }
  returnHome(e) {
    if (null == e || !e.isValid) return;
    this.stopTweenIfValid(e), e.setPosition(this.originOf(e));
    const i = this.siblingByNode.get(e);
    void 0 !== i && e.parent && e.setSiblingIndex(Math.min(i, Math.max(0, e.parent.children.length - 1)));
  }
  parkNode(e) {
    this.returnHome(this.getNode(e));
  }
  restoreOrigins() {
    this.originByNode.forEach((e, i) => {
      i.isValid && (this.stopTweenIfValid(i), i.setPosition(e));
    });
  }
  stopBobs() {
    C.forEach(e => this.parkNode(e));
  }
  stopSlides() {
    L.forEach(e => this.stopTweenIfValid(this.getNode(e)));
  }
  showNode(e) {
    this.setNodeActive(e, !0);
  }
  hideNode(e) {
    this.setNodeActive(e, !1);
  }
  showNames(e) {
    e.forEach(e => this.showNode(this.getNode(e)));
  }
  hideNames(e) {
    e.forEach(e => this.hideNode(this.getNode(e)));
  }
  setNodeActive(e, i) {
    null != e && e.isValid && (e.active = i);
  }
  bringToFront(e) {
    null != e && e.isValid && e.parent && e.setSiblingIndex(e.parent.children.length - 1);
  }
  placeBelowPrompt(e) {
    const i = this.promptBoxNode;
    e.isValid && null != i && i.isValid && e.parent === i.parent && e.setSiblingIndex(i.getSiblingIndex());
  }
  stopTweenIfValid(e) {
    null != e && e.isValid && __rea_outer_f(e);
  }
  getNode(e) {
    return this.nodeByName.get(e) ?? null;
  }
  dragKindFor(e) {
    return F.find(i => i.step === e) ?? null;
  }
  resolveReferences() {
    var e, i, t, s;
    const o = this.node.getChildByPath("UIPanel/gameNode");
    this.stageNode = o, this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.nodeByName.clear(), this.originByNode.clear(), this.siblingByNode.clear(), null == o || o.children.forEach(e => this.indexNode(e)), null == (e = this.getNode("clicks")) || e.children.forEach(e => this.indexNode(e)), null == (i = this.getNode("girls")) || i.children.forEach(e => this.indexNode(e)), null == (t = this.getNode("end")) || t.children.forEach(e => this.indexNode(e)), this.promptBoxNode = this.getNode("prompt_box"), this.promptLabel = (null == (s = this.promptBoxNode) || null == (s = s.getChildByName("Label")) ? void 0 : s.getComponent(__rea_outer_a)) ?? null, this.warnIfMissing();
  }
  applyOpeningVisibility() {
    var e, i, t;
    null == (e = this.stageNode) || e.children.forEach(e => {
      "prompt_box" !== e.name ? "girls" !== e.name && "end" !== e.name && "clicks" !== e.name ? e.name.startsWith("stench_") ? e.active = !1 : e.active = P.has(e.name) : e.active = !0 : e.active = !1;
    }), null == (i = this.getNode("girls")) || i.children.forEach(e => {
      e.active = b.has(e.name);
    }), null == (t = this.getNode("end")) || t.children.forEach(e => {
      e.active = !1;
    }), this.hideNode(this.getNode("touch")), this.showNode(this.getNode("touch-girl2_razor")), this.showNode(this.getNode("touch-curling_iron")), this.showNode(this.getNode("touch-3")), this.hideNode(this.node.getChildByPath("UIPanel/click_root")), this.hideNode(this.node.getChildByPath("UIPanel/demo"));
  }
  indexNode(e) {
    this.originByNode.set(e, e.position.clone()), this.siblingByNode.set(e, e.getSiblingIndex()), this.nodeByName.has(e.name) || this.nodeByName.set(e.name, e);
  }
  warnIfMissing() {
    this.stageNode || console.warn("[Level_88] missing UIPanel/gameNode"), this.backBgNode || console.warn("[Level_88] missing UIPanel/backBG"), this.promptLabel || console.warn("[Level_88] missing prompt_box/Label");
    ["bg", "bag", "bag_1", "glove", "glove_1", "skipping_rope", "cosmetics", "cosmetics_1", "door", "door_1", "girl2", "girl2_razor", "girl3", "girl3_1", "girl4", "girl4_1", "girl5", "girl5_1", "girl5_2", "girl5_3", "girl5_vest", "girl6", "girl6_sock", "hairband", "vest", "razor", "perfume", "perfume_1", "curling_iron", "fight", "fight_1", "fight_2", "fight_glove_1", "fight_glove_2", "fight_cosmetics", "fight_cosmetics_1", "girl1_fat", "girl1_thin", "girl1_thin_coat", "girl1_fat_leg_hair", "girl1_thin_leg_hair", "girl1_head", "girl1_head_1", "girl1_head_2", "girl1_hair", "girl1_hair1", "girl1_glasses", "girl1_sock", "girl1_vest", "girl1_hairband", "touch-girl2_razor", "touch-curling_iron", "touch-3", ...V, ...O, ...x].forEach(e => {
      this.getNode(e) || console.warn(`[Level_88] missing ${e}`);
    });
  }
  cleanupRuntime(e) {
    this.unscheduleAllCallbacks(), this.unregisterInputHandlers(), this.voiceToken += 1, this.stepToken += 1, this.activePerformanceStep = 0, this.draggedNode = null, this.dragStep = 0, this.pressedName = "", this.swipeStart = null, this.isStenchRunning = !1, this.releaseLegHairClip(!1), e && __rea_outer_c.stopVoice(), this.originByNode.forEach((e, i) => {
      this.stopTweenIfValid(i);
    }), this.stopTweenIfValid(this.backBgNode);
  }
}) || v;
__rea_outer_i._RF.pop();
export { __recovered_export_0 as default };
