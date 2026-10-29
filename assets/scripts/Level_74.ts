// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_74.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { Node as __rea_outer_i } from "cc";
import { Vec2 as __rea_outer_s } from "cc";
import { Vec3 as __rea_outer_o } from "cc";
import { tween as __rea_outer_n } from "cc";
import { Tween as __rea_outer_a } from "cc";
import { UITransform as __rea_outer_h } from "cc";
import { Rect as __rea_outer_r } from "cc";
import { Label as __rea_outer_l } from "cc";
import { _decorator as __rea_outer_d } from "cc";
import { default as __rea_outer_c } from "./LevelBase";
import { default as __rea_outer_p } from "./clue-hit-tester";
import { default as __rea_outer_g } from "./AudioManager";
import { default as __rea_outer_u } from "./ActionSystem";
import { I18nController as __rea_outer_N } from "./i18n-controller";
import { UIManager as __rea_outer_m } from "./ui-manager";
import { UIHint as __rea_outer_w } from "./uihint";
import { GameController as __rea_outer_f } from "./GameController";
import { stopAllTweens as __rea_outer_k } from "./CocosCompat";
import { setNodeOpacity as __rea_outer_y } from "./CocosCompat";
let __recovered_export_0;
var v;
__rea_outer_t._RF.push({}, "67aecKOxIBIaauqJWmVNuKZ", "Level_74", void 0);
const {
    ccclass: _
  } = __rea_outer_d,
  A = 11,
  S = 7401,
  I = 7402,
  b = "眼睛",
  T = ["bg", "floor", "door", "wall", "painting", "window", "lamp1", "girl", "man", "stun_gun", "man_hand", "bed", "rabbit", "eyes_painting", "eyes_sofa", "eyes_bed", "eyes_window", "eyes_door"],
  B = ["floor1", "floor_peek", "shadow_floor_peek", "door_peek", "cabinet", "cabinet_peek", "wall1", "wall1_peek", "painting1", "shadow_painting", "window_peek", "shadow_window_peek", "lamp", "lamp_peek", "peek_run", "peek_run1", "sofa_peek", "shadow_sofa_peek", "girl1", "girl2", "girl_end", "man_1", "man_peek", "man_peek1", "man_peek2", "bed_peek", "rabbit1", "rabbit_peek", "shadow_rabbit_peek", "prompt_box"],
  M = {
    1: {
      hideNow: ["painting", "eyes_painting"],
      showNow: ["painting1"],
      voiceKey: "74_2",
      hideAfter: ["painting1"],
      shadowName: "shadow_painting"
    },
    2: {
      hideNow: ["eyes_sofa"],
      showNow: ["sofa_peek"],
      voiceKey: "74_3",
      hideAfter: ["sofa_peek"],
      shadowName: "shadow_sofa_peek"
    },
    3: {
      hideNow: ["window", "eyes_window"],
      showNow: ["window_peek"],
      voiceKey: "74_4",
      hideAfter: ["window_peek"],
      shadowName: "shadow_window_peek"
    },
    4: {
      hideNow: ["lamp1"],
      showNow: ["lamp", "lamp_peek"],
      voiceKey: "74_5",
      hideAfter: ["lamp_peek"],
      shadowName: null
    },
    5: {
      hideNow: ["rabbit"],
      showNow: ["rabbit_peek", "rabbit1"],
      voiceKey: "74_6",
      hideAfter: ["rabbit_peek"],
      shadowName: "shadow_rabbit_peek"
    },
    6: {
      hideNow: ["eyes_bed"],
      showNow: ["bed_peek"],
      voiceKey: "74_7",
      hideAfter: ["bed_peek"],
      shadowName: null
    },
    7: {
      hideNow: [],
      showNow: ["cabinet", "cabinet_peek"],
      voiceKey: "74_8",
      hideAfter: ["cabinet_peek"],
      shadowName: null
    },
    8: {
      hideNow: ["floor"],
      showNow: ["floor_peek", "floor1"],
      voiceKey: "74_9",
      hideAfter: ["floor_peek"],
      shadowName: "shadow_floor_peek"
    },
    9: {
      hideNow: ["wall"],
      showNow: ["wall1", "wall1_peek"],
      voiceKey: "74_10",
      hideAfter: ["wall1_peek"],
      shadowName: null
    },
    11: {
      hideNow: ["door", "eyes_door"],
      showNow: ["door_peek"],
      voiceKey: "74_12",
      hideAfter: ["door_peek"],
      shadowName: null
    }
  },
  P = ["electricity1", "electricity2", "electricity3"],
  x = ["girl1", "girl2"],
  E = [b, "girl", "stun_gun"],
  V = [{
    stepId: 1,
    nodeName: "painting",
    allowHidden: !1
  }, {
    stepId: 3,
    nodeName: "window",
    allowHidden: !1
  }, {
    stepId: 8,
    nodeName: "floor",
    allowHidden: !1
  }, {
    stepId: 11,
    nodeName: "door",
    allowHidden: !1
  }, {
    stepId: 6,
    nodeName: "bed",
    allowHidden: !1
  }, {
    stepId: 7,
    nodeName: "cabinet",
    allowHidden: !0
  }, {
    stepId: 2,
    nodeName: "sofa_peek",
    allowHidden: !0
  }];
__recovered_export_0 = _("Level_74")(v = class extends __rea_outer_c {
  constructor(...e) {
    super(...e), this.phase = 0, this.winstate = !1, this.gameNode = null, this.backBgNode = null, this.promptBoxNode = null, this.promptLabel = null, this.nodeByName = new Map(), this.nodeOrigins = new Map(), this.siblingOrigins = new Map(), this.completedSteps = new Set(), this.dragState = null, this.pointerStart = null, this.voiceToken = 0, this.performanceToken = 0, this.isInputBlocked = !1, this.isShowingManPeek1 = !0, this.electricityIndex = 0, this.girlMarkIndex = 0, this.onManAlternate = () => {
      this.isValid && (this.isShowingManPeek1 = !this.isShowingManPeek1, this.setNodeActive(this.getNode("man_peek1"), this.isShowingManPeek1), this.setNodeActive(this.getNode("man_peek2"), !this.isShowingManPeek1));
    }, this.onGirlMarkAlternate = () => {
      this.isValid && (this.girlMarkIndex = (this.girlMarkIndex + 1) % x.length, this.applyGirlMarkFrame());
    }, this.onElectricityAlternate = () => {
      this.isValid && !this.completedSteps.has(10) ? (this.electricityIndex = (this.electricityIndex + 1) % P.length, this.applyElectricityFrame()) : this.stopElectricityAlternate();
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.allItemNum = A, this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.enterPhase0();
  }
  onDestroy() {
    this.cleanupRuntime(!this.shouldSkipStopLevelAudio()), super.onDestroy();
  }
  handleTimeExpired() {
    return !1;
  }
  showHint() {
    if (1 !== this.phase || this.isInputBlocked) return;
    const e = this.getLowestUnfinishedStep();
    if (null === e) return;
    const t = __rea_outer_N.getInstance().getKey(`level74_hint${e}`);
    __rea_outer_m.getInstance().showView(__rea_outer_w, void 0, {
      body: t
    });
  }
  getGameProgressSnapshot() {
    const e = Math.min(this.hasInstallNum, A);
    return {
      progress: e / A,
      label: `${e}/11`
    };
  }
  markAllTasksCompleted() {
    this.hasInstallNum = A;
    for (let e = 1; e <= A; e += 1) this.completedSteps.add(e);
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.completedSteps.clear(), this.dragState = null, this.pointerStart = null, this.voiceToken = 0, this.performanceToken = 0, this.isInputBlocked = !1, this.isShowingManPeek1 = !0, this.electricityIndex = 0, this.girlMarkIndex = 0, this.hasInstallNum = 0, this.allItemNum = A, __rea_outer_g.stopVoice();
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_g.playMusic("bgm4", !0, .5), this.applyInitialVisibility(), this.startBreathAnimations(), this.startElectricityAlternate(), this.registerTouchHandlers(), this.setInputBlocked(!0), __rea_outer_f.getInstance().refreshGameProgress(), this.playDialogue("74_1", !0, () => {
      this.isValid && 0 === this.phase && this.enterPhase1();
    });
  }
  skipOpeningToPlay() {
    return 0 === this.phase && (this.voiceToken += 1, this.stopOpeningDialogue(), this.enterPhase1(), !0);
  }
  enterPhase1() {
    0 === this.phase && (this.phase = 1, this.hidePrompt(), this.setGirlMarks(!1), this.setInputBlocked(!1), __rea_outer_f.getInstance().refreshGameProgress());
  }
  enterPhase2() {
    this.phase >= 2 || this.winstate || (this.phase = 2, this.winstate = !0, this.performanceToken += 1, this.stopManAlternate(), this.stopBreath(this.getNode("girl"), S), this.setInputBlocked(!0), __rea_outer_f.getInstance().pauseTimer(), this.setNodeActive(this.getNode("girl"), !1), this.setNodeActive(this.getNode("girl_end"), !0), this.playDialogue("74_13", !0, () => {
      this.isValid && 2 === this.phase && this.scheduleOnce(() => {
        this.isValid && 2 === this.phase && this.showLevelSuccess(0);
      }, 1);
    }));
  }
  applyInitialVisibility() {
    this.restoreCachedNodes(), this.setNodeActive(this.gameNode, !0), this.setNodeActive(this.getNode(b), !0), T.forEach(e => {
      this.setNodeActive(this.getNode(e), !0);
    }), B.forEach(e => {
      this.setNodeActive(this.getNode(e), !1);
    }), this.setNodeActive(this.getNode("clicks"), !1), this.setNodeActive(this.getNode("drags"), !1), this.setNodeActive(this.getNode("swips"), !1), this.setNodeActive(this.node.getChildByPath("UIPanel/click_root"), !1), this.setNodeActive(this.node.getChildByPath("UIPanel/demo"), !1), this.setNodeActive(this.backBgNode, !1);
  }
  registerTouchHandlers() {
    this.node.on(__rea_outer_i.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(__rea_outer_i.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(__rea_outer_i.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(__rea_outer_i.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
  }
  unregisterTouchHandlers() {
    var e;
    null != (e = this.node) && e.isValid && (this.node.off(__rea_outer_i.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(__rea_outer_i.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(__rea_outer_i.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(__rea_outer_i.EventType.TOUCH_CANCEL, this.onTouchCancel, this));
  }
  onTouchStart(e) {
    if (!this.canAcceptInput() || this.dragState) return;
    const t = e.getUILocation();
    this.tryBeginDrag(t, e) ? this.pointerStart = null : this.pointerStart = new __rea_outer_s(t.x, t.y);
  }
  onTouchMove(e) {
    this.dragState && this.setDragPosition(e, this.dragState.node, this.dragState.touchOffset);
  }
  onTouchEnd(e) {
    if (this.dragState) return void this.finishDrag();
    if (!this.pointerStart || !this.canAcceptInput()) return void (this.pointerStart = null);
    const t = this.pointerStart;
    this.pointerStart = null, this.resolvePointer(t, e.getUILocation());
  }
  onTouchCancel() {
    if (this.dragState) {
      const e = this.dragState.node;
      this.dragState = null, this.restoreOrigin(e);
    }
    this.pointerStart = null;
  }
  tryBeginDrag(e, t) {
    if (this.completedSteps.has(10)) return !1;
    const i = this.getNode("stun_gun");
    return !!this.containsPoint(i, e, !1) && (this.bringToFront(i), this.dragState = {
      node: i,
      touchOffset: this.calculateTouchOffset(t, i)
    }, !0);
  }
  finishDrag() {
    const e = this.dragState;
    if (this.dragState = null, null == e || !e.node.isValid) return;
    this.isCenterInside(e.node, this.getNode("man")) && this.canAcceptInput() && !this.completedSteps.has(10) ? this.beginStep(10) : this.restoreOrigin(e.node);
  }
  resolvePointer(e, t) {
    if (__rea_outer_s.distance(e, t) >= 30) return void this.resolveSwipe(e, t);
    const i = this.pickClickStep(t);
    null !== i && this.isClickStartInside(i, e) && this.beginStep(i);
  }
  resolveSwipe(e, t) {
    this.isDownSwipe(e, t) && this.canSwipe("lamp1", 4, e) ? this.beginStep(4) : this.isRightSwipe(e, t) && this.canSwipe("rabbit", 5, e) ? this.beginStep(5) : this.isDownSwipe(e, t) && this.canSwipe("wall", 9, e) && this.beginStep(9);
  }
  canSwipe(e, t, i) {
    return !this.completedSteps.has(t) && this.containsPoint(this.getNode(e), i, !1);
  }
  isDownSwipe(e, t) {
    const i = t.x - e.x,
      s = t.y - e.y;
    return -s >= 30 && Math.abs(s) >= 1.2 * Math.abs(i);
  }
  isRightSwipe(e, t) {
    const i = t.x - e.x,
      s = t.y - e.y;
    return i >= 30 && Math.abs(i) >= 1.2 * Math.abs(s);
  }
  pickClickStep(e) {
    const t = this.isRabbitBlocking(e);
    for (let i = 0; i < V.length; i += 1) {
      const s = V[i];
      if (!this.completedSteps.has(s.stepId) && (!t || 6 !== s.stepId && 2 !== s.stepId) && this.containsPoint(this.getNode(s.nodeName), e, s.allowHidden)) return s.stepId;
    }
    return null;
  }
  isClickStartInside(e, t) {
    for (let i = 0; i < V.length; i += 1) {
      const s = V[i];
      if (s.stepId === e) return this.containsPoint(this.getNode(s.nodeName), t, s.allowHidden);
    }
    return !1;
  }
  isRabbitBlocking(e) {
    return !this.completedSteps.has(5) && this.containsPoint(this.getNode("rabbit"), e, !1);
  }
  beginStep(e) {
    if (!this.canAcceptInput() || this.completedSteps.has(e)) return;
    this.completedSteps.add(e), this.performanceToken += 1;
    const t = this.performanceToken;
    if (this.interruptGirlLine(), this.playActionSound(), this.setInputBlocked(!0), 10 === e) return void this.playGuardStep(t);
    const i = M[e];
    i ? this.playReveal(i, t) : this.setInputBlocked(!1);
  }
  playReveal(e, t) {
    this.setActiveNames(e.hideNow, !1), this.setActiveNames(e.showNow, !0), this.playDialogue(e.voiceKey, !1), this.wait(t, .7, () => {
      this.setActiveNames(e.hideAfter, !1), e.shadowName ? (this.setNodeActive(this.getNode(e.shadowName), !0), this.wait(t, .1, () => {
        this.setNodeActive(this.getNode(e.shadowName), !1), this.playEscape(t);
      })) : this.playEscape(t);
    });
  }
  playGuardStep(e) {
    this.stopElectricityAlternate(), this.stopBreath(this.getNode("man"), I), this.setActiveNames(["stun_gun", "man", "man_hand", "electricity1", "electricity2", "electricity3"], !1), this.setNodeActive(this.getNode("man_1"), !0), __rea_outer_g.playEffect_1("level74_3"), this.wait(e, .5, () => {
      this.setNodeActive(this.getNode("man_1"), !1), this.startManAlternate(), this.playDialogue("74_11", !1), this.wait(e, .7, () => {
        this.stopManAlternate(), this.setActiveNames(["man_peek", "man_peek1", "man_peek2"], !1), this.playEscape(e);
      });
    });
  }
  startManAlternate() {
    this.stopManAlternate(), this.isShowingManPeek1 = !0, this.setNodeActive(this.getNode("man_peek"), !0), this.setNodeActive(this.getNode("man_peek1"), !0), this.setNodeActive(this.getNode("man_peek2"), !1), this.schedule(this.onManAlternate, .2);
  }
  stopManAlternate() {
    this.unschedule(this.onManAlternate), this.setNodeActive(this.getNode("man_peek1"), !1), this.setNodeActive(this.getNode("man_peek2"), !1);
  }
  playEscape(e) {
    const t = this.getNode("peek_run"),
      i = this.getNode("peek_run1"),
      s = this.getNode("door");
    if (null == t || !t.isValid || null == i || !i.isValid || null == s || !s.isValid) return void this.finishEscape(e);
    const a = this.getOrigin(t),
      h = this.getOrigin(i),
      r = this.getOrigin(s),
      l = r.x - a.x,
      d = r.y - a.y;
    this.stopTweenIfValid(t), this.stopTweenIfValid(i), t.setPosition(a), i.setPosition(h), this.setNodeActive(t, !0), this.setNodeActive(i, !0), this.bringToFront(t), this.bringToFront(i), this.bringToFront(this.promptBoxNode), __rea_outer_g.playEffect_1("level74_2");
    const c = new __rea_outer_o(r.x, r.y, a.z),
      p = new __rea_outer_o(h.x + l, h.y + d, h.z);
    let u = !1;
    __rea_outer_n(t).to(.6, {
      position: c
    }).call(() => {
      !u && this.isPerformanceCurrent(e) && (u = !0, this.setNodeActive(t, !1), this.setNodeActive(i, !1), this.finishEscape(e));
    }).start(), __rea_outer_n(i).to(.6, {
      position: p
    }).start();
  }
  finishEscape(e) {
    this.isPerformanceCurrent(e) && (this.hasInstallNum = Math.min(A, this.hasInstallNum + 1), __rea_outer_f.getInstance().refreshGameProgress(), this.hasInstallNum >= A ? this.enterPhase2() : (this.setInputBlocked(!1), this.playDialogue("74_14", !0)));
  }
  canAcceptInput() {
    return this.isValid && 1 === this.phase && !this.isInputBlocked && !this.winstate;
  }
  isPerformanceCurrent(e) {
    return this.isValid && e === this.performanceToken && this.phase < 2;
  }
  wait(e, t, i) {
    this.scheduleOnce(() => {
      this.isPerformanceCurrent(e) && i();
    }, t);
  }
  interruptGirlLine() {
    this.voiceToken += 1, __rea_outer_g.stopVoice(), this.hidePrompt(), this.setGirlMarks(!1);
  }
  playActionSound() {
    __rea_outer_g.playEffect_1("level74_1");
  }
  playDialogue(e, t, i) {
    this.voiceToken += 1;
    const s = this.voiceToken;
    this.showPrompt(e), this.setGirlMarks(t), __rea_outer_g.stopVoice(), __rea_outer_g.playVoice(e);
    this.scheduleOnce(() => {
      this.isValid && s === this.voiceToken && (this.hidePrompt(), this.setGirlMarks(!1), null == i || i());
    }, this.resolveDialogueHoldSeconds(e));
  }
  resolveDialogueHoldSeconds(e) {
    var t;
    const i = (null == (t = __rea_outer_g.audioMap.get(e)) ? void 0 : t.getDuration()) ?? 0;
    return i > .05 ? i : 2.5;
  }
  showPrompt(e) {
    this.promptLabel && (this.promptLabel.string = this.resolveI18nText(e)), this.setNodeActive(this.promptBoxNode, !0), this.bringToFront(this.promptBoxNode);
  }
  hidePrompt() {
    this.setNodeActive(this.promptBoxNode, !1);
  }
  setGirlMarks(e) {
    if (!e) return this.stopGirlMarkAlternate(), void this.restoreGirlMarkParents();
    const t = this.phase >= 2 ? this.getNode("girl_end") : this.getNode("girl");
    this.attachGirlMarks(t), this.startGirlMarkAlternate();
  }
  startGirlMarkAlternate() {
    this.unschedule(this.onGirlMarkAlternate), this.girlMarkIndex = 0, this.applyGirlMarkFrame(), this.schedule(this.onGirlMarkAlternate, .15);
  }
  applyGirlMarkFrame() {
    x.forEach((e, t) => {
      this.setNodeActive(this.getNode(e), t === this.girlMarkIndex);
    });
  }
  stopGirlMarkAlternate() {
    this.unschedule(this.onGirlMarkAlternate), x.forEach(e => {
      this.setNodeActive(this.getNode(e), !1);
    });
  }
  attachGirlMarks(e) {
    null != e && e.isValid && x.forEach(t => {
      const i = this.getNode(t);
      if (null == i || !i.isValid) return;
      i.setParent(e);
      const s = this.nodeOrigins.get(i);
      s && i.setPosition(s);
    });
  }
  restoreGirlMarkParents() {
    this.attachGirlMarks(this.getNode("girl"));
  }
  startElectricityAlternate() {
    this.unschedule(this.onElectricityAlternate), this.electricityIndex = 0, this.applyElectricityFrame(), this.schedule(this.onElectricityAlternate, .2);
  }
  applyElectricityFrame() {
    P.forEach((e, t) => {
      this.setNodeActive(this.getNode(e), t === this.electricityIndex);
    });
  }
  stopElectricityAlternate() {
    this.unschedule(this.onElectricityAlternate), P.forEach(e => {
      this.setNodeActive(this.getNode(e), !1);
    });
  }
  startBreathAnimations() {
    this.startBreath(this.getNode("girl"), S), this.startBreath(this.getNode("man"), I);
  }
  startBreath(e, t) {
    null != e && e.isValid && (this.stopBreath(e, t), __rea_outer_u.RoseBreath_tag(e, 1, .02, .7, 0, t));
  }
  stopBreath(e, t) {
    __rea_outer_a.stopAllByTag(t), null != e && e.isValid && (__rea_outer_k(e), e.setScale(e.scale.x, 1, e.scale.z));
  }
  stopBreathAnimations() {
    this.stopBreath(this.getNode("girl"), S), this.stopBreath(this.getNode("man"), I);
  }
  resolveI18nText(e) {
    const t = __rea_outer_N.getInstance().getKey(e);
    return t && t !== e ? t : e;
  }
  setInputBlocked(e) {
    var t;
    this.isInputBlocked = e, this.setNodeActive(this.backBgNode, e), e && null != (t = this.backBgNode) && t.isValid && __rea_outer_y(this.backBgNode, 0);
  }
  getLowestUnfinishedStep() {
    for (let e = 1; e <= A; e += 1) if (!this.completedSteps.has(e)) return e;
    return null;
  }
  setActiveNames(e, t) {
    e.forEach(e => {
      this.setNodeActive(this.getNode(e), t);
    });
  }
  setNodeActive(e, t) {
    null != e && e.isValid && (e.active = t);
  }
  bringToFront(e) {
    null != e && e.isValid && e.parent && e.setSiblingIndex(e.parent.children.length - 1);
  }
  containsPoint(e, t, i) {
    return !(null == e || !e.isValid) && !(!i && !e.activeInHierarchy) && this.getNodeWorldBox(e).contains(t);
  }
  isCenterInside(e, t) {
    return !!(e.isValid && null != t && t.isValid && t.activeInHierarchy) && !(!e.getComponent(__rea_outer_h) || !t.getComponent(__rea_outer_h)) && __rea_outer_p.isRectWithinDragDistance(this.getNodeWorldBox(e), this.getNodeWorldBox(t));
  }
  getNodeWorldBox(e) {
    var t;
    const i = e.getComponent(__rea_outer_h);
    if (!i) return new __rea_outer_r();
    if (e.activeInHierarchy) return i.getBoundingBoxToWorld();
    const s = null != (t = this.gameNode) && t.isValid ? this.gameNode : this.findActiveSpaceNode(e),
      o = null == s ? void 0 : s.getComponent(__rea_outer_h);
    if (!o || !s) return new __rea_outer_r();
    const n = this.getLocalPositionIn(e, s),
      a = o.convertToWorldSpaceAR(n);
    return new __rea_outer_r(a.x - i.contentSize.width * i.anchorPoint.x, a.y - i.contentSize.height * i.anchorPoint.y, i.contentSize.width, i.contentSize.height);
  }
  findActiveSpaceNode(e) {
    let t = e.parent;
    for (; t;) {
      if (t.activeInHierarchy) return t;
      t = t.parent;
    }
    return null;
  }
  getLocalPositionIn(e, t) {
    const i = e.position.clone();
    let s = e.parent;
    for (; s && s !== t;) i.x += s.position.x, i.y += s.position.y, s = s.parent;
    return i;
  }
  calculateTouchOffset(e, t) {
    const i = t.parent;
    if (null == i || !i.isValid) return __rea_outer_o.ZERO.clone();
    const s = this.getTouchLocalPosition(e, i);
    return new __rea_outer_o(t.position.x - s.x, t.position.y - s.y, 0);
  }
  setDragPosition(e, t, i) {
    const s = t.parent;
    if (null == s || !s.isValid || !t.isValid) return;
    const o = this.getTouchLocalPosition(e, s);
    t.setPosition(o.x + i.x, o.y + i.y, t.position.z);
  }
  getTouchLocalPosition(e, t) {
    const i = e.getUILocation(),
      s = t.getComponent(__rea_outer_h);
    return s ? s.convertToNodeSpaceAR(new __rea_outer_o(i.x, i.y, 0)) : __rea_outer_o.ZERO.clone();
  }
  getOrigin(e) {
    var t;
    return (null == (t = this.nodeOrigins.get(e)) ? void 0 : t.clone()) ?? e.position.clone();
  }
  restoreOrigin(e) {
    if (null == e || !e.isValid) return;
    this.stopTweenIfValid(e);
    const t = this.nodeOrigins.get(e);
    t && e.setPosition(t);
    const i = this.siblingOrigins.get(e);
    void 0 !== i && e.parent && e.setSiblingIndex(i);
  }
  restoreCachedNodes() {
    this.nodeOrigins.forEach((e, t) => {
      t.isValid && (this.stopTweenIfValid(t), t.setPosition(e));
    }), this.siblingOrigins.forEach((e, t) => {
      t.isValid && t.parent && t.setSiblingIndex(e);
    });
  }
  cleanupRuntime(e) {
    this.unscheduleAllCallbacks(), this.unregisterTouchHandlers(), this.voiceToken += 1, this.performanceToken += 1, this.pointerStart = null, this.dragState = null, this.stopManAlternate(), this.stopElectricityAlternate(), this.stopGirlMarkAlternate(), this.stopBreathAnimations(), e && __rea_outer_g.stopVoice(), this.stopAllGameplayTweens();
  }
  stopAllGameplayTweens() {
    this.nodeByName.forEach(e => {
      this.stopTweenIfValid(e);
    }), this.stopTweenIfValid(this.backBgNode);
  }
  stopTweenIfValid(e) {
    null != e && e.isValid && __rea_outer_k(e);
  }
  getNode(e) {
    return this.nodeByName.get(e) ?? null;
  }
  cacheNode(e) {
    null != e && e.isValid && !this.nodeByName.has(e.name) && (this.nodeByName.set(e.name, e), this.nodeOrigins.set(e, e.position.clone()), this.siblingOrigins.set(e, e.getSiblingIndex()));
  }
  resolveReferences() {
    var e, t;
    this.gameNode = this.node.getChildByPath("UIPanel/gameNode"), this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.nodeByName.clear(), this.nodeOrigins.clear(), this.siblingOrigins.clear(), null == (e = this.gameNode) || e.children.forEach(e => {
      this.cacheNode(e), E.indexOf(e.name) < 0 || e.children.forEach(e => {
        this.cacheNode(e);
      });
    }), this.promptBoxNode = this.getNode("prompt_box"), this.promptLabel = (null == (t = this.promptBoxNode) || null == (t = t.getChildByName("Label")) ? void 0 : t.getComponent(__rea_outer_l)) ?? null, this.warnIfMissing();
  }
  warnIfMissing() {
    this.gameNode || console.warn("[Level_74] missing gameNode");
    [...T, ...B, ...P, b].forEach(e => {
      this.getNode(e) || console.warn(`[Level_74] missing ${e}`);
    }), this.promptLabel || console.warn("[Level_74] missing prompt_box/Label"), this.backBgNode || console.warn("[Level_74] missing backBG");
  }
}) || v;
__rea_outer_t._RF.pop();
export { __recovered_export_0 as default };
