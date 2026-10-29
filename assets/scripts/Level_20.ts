// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_20.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { Vec3 as __rea_outer_i } from "cc";
import { tween as __rea_outer_s } from "cc";
import { Node as __rea_outer_o } from "cc";
import { UITransform as __rea_outer_n } from "cc";
import { Vec2 as __rea_outer_h } from "cc";
import { Label as __rea_outer_l } from "cc";
import { _decorator as __rea_outer_a } from "cc";
import { default as __rea_outer_r } from "./LevelBase";
import { default as __rea_outer_d } from "./clue-hit-tester";
import { default as __rea_outer_c } from "./AudioManager";
import { I18nController as __rea_outer_u } from "./i18n-controller";
import { UIManager as __rea_outer_N } from "./ui-manager";
import { UILayer as __rea_outer_g } from "./ui-layer";
import { UIHint as __rea_outer_m } from "./uihint";
import { UIFail as __rea_outer_p } from "./uifail";
import { GameController as __rea_outer_v } from "./GameController";
import { stopAllTweens as __rea_outer_y } from "./CocosCompat";
let __recovered_export_0;
var _;
__rea_outer_t._RF.push({}, "f20a2AAIABAIKAgAAAAAAAg", "Level_20", void 0);
const {
    ccclass: b
  } = __rea_outer_a,
  f = 10,
  A = .5,
  S = ["level20_hint1", "level20_hint2", "level20_hint3", "level20_hint4", "level20_hint5", "level20_hint6", "level20_hint7", "level20_hint8", "level20_hint9", "level20_hint10"],
  V = [{
    step: 1,
    itemKey: "1",
    correctSide: "left",
    correctVoice: "20_4",
    wrongVoice: "20_14",
    prerequisites: [],
    wrongSideVoice: null,
    prereqFailVoice: null
  }, {
    step: 2,
    itemKey: "2",
    correctSide: "right",
    correctVoice: "20_5",
    wrongVoice: "20_15",
    prerequisites: [],
    wrongSideVoice: null,
    prereqFailVoice: null
  }, {
    step: 3,
    itemKey: "3",
    correctSide: "left",
    correctVoice: "20_6",
    wrongVoice: "20_16",
    prerequisites: [],
    wrongSideVoice: null,
    prereqFailVoice: null
  }, {
    step: 4,
    itemKey: "4",
    correctSide: "right",
    correctVoice: "20_7",
    wrongVoice: "20_17",
    prerequisites: [],
    wrongSideVoice: null,
    prereqFailVoice: null
  }, {
    step: 5,
    itemKey: "5",
    correctSide: "left",
    correctVoice: "20_8",
    wrongVoice: "20_18",
    prerequisites: [],
    wrongSideVoice: null,
    prereqFailVoice: null
  }, {
    step: 6,
    itemKey: "6",
    correctSide: "right",
    correctVoice: "20_9",
    wrongVoice: "20_19",
    prerequisites: [],
    wrongSideVoice: null,
    prereqFailVoice: null
  }, {
    step: 7,
    itemKey: "7",
    correctSide: "right",
    correctVoice: "20_10",
    wrongVoice: "20_20",
    prerequisites: [],
    wrongSideVoice: null,
    prereqFailVoice: null
  }, {
    step: 8,
    itemKey: "mobile_phone",
    correctSide: "right",
    correctVoice: "20_11",
    wrongVoice: null,
    prerequisites: [],
    wrongSideVoice: null,
    prereqFailVoice: null
  }, {
    step: 9,
    itemKey: "9",
    correctSide: "right",
    correctVoice: "20_12",
    wrongVoice: "20_21",
    prerequisites: [2, 4, 6, 7, 8],
    wrongSideVoice: "20_21",
    prereqFailVoice: "20_23"
  }, {
    step: 10,
    itemKey: "10",
    correctSide: "left",
    correctVoice: "20_13",
    wrongVoice: "20_22",
    prerequisites: [1, 3, 5],
    wrongSideVoice: "20_22",
    prereqFailVoice: "20_23"
  }];
__recovered_export_0 = b("Level_20")(_ = class extends __rea_outer_r {
  constructor(...e) {
    super(...e), this.phase = 0, this.winstate = !1, this.gameNode = null, this.backBgNode = null, this.bubbleNode = null, this.dialogBoxLeftNode = null, this.dialogBoxRightNode = null, this.tipLabel = null, this.objectsRoot = null, this.mobilePhoneNode = null, this.manfakeNode = null, this.manfakeManNode = null, this.manfakeIp1Node = null, this.manrichNode = null, this.cloudyDayNode = null, this.thunderNode = null, this.soul1Node = null, this.soul2Node = null, this.stenchNode = null, this.stench1Node = null, this.generalEndNode = null, this.objectNodes = new Map(), this.stepCorrect = new Array(11).fill(!1), this.currentStep = 1, this.isInteractionLocked = !0, this.isPhoneUnlocked = !1, this.isManrichDraggable = !1, this.isStenchShowFirst = !0, this.voiceToken = 0, this.activeDragState = null, this.soul1Origin = new __rea_outer_i(), this.soul2Origin = new __rea_outer_i(), this.onTouchStart = e => {
      if (1 !== this.phase || this.isInteractionLocked || this.activeDragState) return;
      const t = this.getTouchWorldPoint(e);
      if (this.isManrichDraggable && this.isPointInsideNode(this.manrichNode, t)) return this.beginDrag(this.manrichNode, "manrich", e, null), void (e.propagationStopped = !0);
      const i = this.getItemNodeForStep(this.currentStep);
      if (null != i && i.isValid && i.active && 8 !== this.currentStep && this.isPointInsideNode(i, t)) return this.beginDrag(i, "item", e, this.currentStep), void (e.propagationStopped = !0);
      this.canDragPhone() && this.isPointInsideNode(this.mobilePhoneNode, t) && (this.beginDrag(this.mobilePhoneNode, "item", e, 8), e.propagationStopped = !0);
    }, this.onTouchMove = e => {
      if (!this.activeDragState || 1 !== this.phase || this.isInteractionLocked) return;
      const t = this.activeDragState;
      this.setDragNodePositionFromTouch(e, t.dragNode, t.dragParent, t.touchOffset), e.propagationStopped = !0;
    }, this.onTouchEnd = e => {
      if (!this.activeDragState || 1 !== this.phase) return;
      const t = this.activeDragState;
      this.activeDragState = null, e.propagationStopped = !0;
      const i = this.getTouchWorldPoint(e);
      "manrich" !== t.dragKind ? this.handleItemDrop(t, i) : this.handleManrichDrop(t, i);
    }, this.onStenchAlternateTick = () => {
      this.isValid && (this.setNodeActive(this.stenchNode, this.isStenchShowFirst), this.setNodeActive(this.stench1Node, !this.isStenchShowFirst), this.isStenchShowFirst = !this.isStenchShowFirst);
    }, this.onBubbleHide = () => {
      this.isValid && this.hideBubble();
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.allItemNum = f, this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.enterPhase0();
  }
  onDestroy() {
    this.unscheduleAllCallbacks(), this.unregisterHandlers(), this.stopStenchAlternate(), __rea_outer_c.stopVoice(), this.stopTrackedTweens(), this.activeDragState = null;
  }
  handleTimeExpired() {
    return !!(this.phase >= 2 || this.winstate);
  }
  showHint() {
    if (1 !== this.phase) return;
    const e = Math.min(Math.max(this.currentStep, 1), f) - 1,
      t = __rea_outer_u.getInstance().getKey(S[e]);
    __rea_outer_N.getInstance().showView(__rea_outer_m, void 0, {
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
    for (let e = 1; e <= f; e += 1) this.stepCorrect[e] = !0;
    this.hasInstallNum = f, this.currentStep = f, this.phase = 2, this.winstate = !0, this.isInteractionLocked = !0, this.unregisterHandlers();
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.currentStep = 1, this.isInteractionLocked = !0, this.isPhoneUnlocked = !1, this.isManrichDraggable = !1, this.hasInstallNum = 0, this.allItemNum = f, this.activeDragState = null, this.voiceToken += 1;
    for (let e = 1; e <= f; e += 1) this.stepCorrect[e] = !1;
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_c.playMusic("bgm4", !0, .5), this.applyOpeningVisibility(), this.setNodeActive(this.backBgNode, !1), this.scheduleOnce(() => {
      this.isValid && this.playOpeningSequence();
    }, 1);
  }
  playOpeningSequence() {
    this.setNodeActive(this.cloudyDayNode, !0), this.playThunderFlashes(0, () => {
      this.isValid && this.swapSouls(() => {
        this.isValid && this.playBlackoutTransition(() => {
          this.isValid && (this.applyGameplayVisibility(), this.playIntroVoices(() => {
            this.isValid && this.enterPhase1();
          }));
        });
      });
    });
  }
  playThunderFlashes(e, t) {
    e >= 3 ? t() : (this.setNodeActive(this.thunderNode, !0), __rea_outer_c.playEffect_1("level20_1"), 0 === e && (this.setNodeActive(this.soul1Node, !0), this.setNodeActive(this.soul2Node, !0)), this.scheduleOnce(() => {
      this.isValid && (this.setNodeActive(this.thunderNode, !1), this.scheduleOnce(() => {
        this.isValid && this.playThunderFlashes(e + 1, t);
      }, .12));
    }, .12));
  }
  swapSouls(e) {
    const t = this.soul1Node,
      i = this.soul2Node;
    if (null == t || !t.isValid || null == i || !i.isValid) return void e();
    const o = this.soul2Origin.clone(),
      n = this.soul1Origin.clone();
    __rea_outer_y(t), __rea_outer_y(i);
    let h = 0;
    const l = () => {
      h += 1, h >= 2 && e();
    };
    __rea_outer_s(t).to(A, {
      position: o
    }).call(l).start(), __rea_outer_s(i).to(A, {
      position: n
    }).call(l).start();
  }
  playBlackoutTransition(e) {
    this.setNodeActive(this.backBgNode, !0), this.scheduleOnce(() => {
      this.isValid && (this.setNodeActive(this.backBgNode, !1), e());
    }, .5);
  }
  playIntroVoices(e) {
    this.playVoiceEffect("20_1", () => {
      this.isValid && this.playVoiceEffect("20_2", () => {
        this.isValid && this.playVoiceEffect("20_3", e);
      });
    });
  }
  enterPhase1() {
    this.phase = 1, this.setNodeActive(this.backBgNode, !1), this.unlockPhoneForParallelPlay(), this.registerHandlers(), this.scheduleOnce(() => {
      this.isValid && 1 === this.phase && this.spawnCurrentStepItem(() => {
        this.isValid && (this.isInteractionLocked = !1, __rea_outer_v.getInstance().refreshGameProgress());
      });
    }, .5);
  }
  unlockPhoneForParallelPlay() {
    this.isPhoneUnlocked = !0, this.stepCorrect[8] || this.setNodeActive(this.mobilePhoneNode, !0);
  }
  canDragPhone() {
    var e;
    return this.isPhoneUnlocked && !this.stepCorrect[8] && !(null == (e = this.mobilePhoneNode) || !e.isValid) && this.mobilePhoneNode.active;
  }
  getNextMainStep(e) {
    return 7 === e ? 9 : e + 1;
  }
  applyOpeningVisibility() {
    var e, t, i;
    this.setNodeActive((null == (e = this.gameNode) ? void 0 : e.getChildByName("bg")) ?? null, !0), this.setNodeActive((null == (t = this.gameNode) ? void 0 : t.getChildByName("bg_1")) ?? null, !1), this.setNodeActive(this.manfakeIp1Node, !0), this.setNodeActive(this.manfakeManNode, !1), this.setNodeActive((null == (i = this.manrichNode) ? void 0 : i.getChildByName("IP2")) ?? null, !0), this.hideManfakeOverlays(), this.hideManrichBodyParts(!0), this.setNodeActive(this.cloudyDayNode, !1), this.setNodeActive(this.thunderNode, !1), this.setNodeActive(this.soul1Node, !1), this.setNodeActive(this.soul2Node, !1), this.setNodeActive(this.stenchNode, !1), this.setNodeActive(this.stench1Node, !1), this.hideAllObjectItems(), this.setNodeActive(this.mobilePhoneNode, !1), this.setNodeActive(this.generalEndNode, !1), this.hideBubble();
  }
  applyGameplayVisibility() {
    var e, t, i, s, o, n;
    this.setNodeActive(this.cloudyDayNode, !1), this.setNodeActive(this.thunderNode, !1), this.setNodeActive(this.soul1Node, !1), this.setNodeActive(this.soul2Node, !1), this.setNodeActive((null == (e = this.gameNode) ? void 0 : e.getChildByName("bg")) ?? null, !1), this.setNodeActive((null == (t = this.gameNode) ? void 0 : t.getChildByName("bg_1")) ?? null, !0), this.setNodeActive(this.manfakeIp1Node, !1), this.setNodeActive(this.manfakeManNode, !0), this.hideManfakeOverlays(), this.setNodeActive((null == (i = this.manrichNode) ? void 0 : i.getChildByName("IP2")) ?? null, !1), this.hideManrichBodyParts(!1), this.setNodeActive((null == (s = this.manrichNode) ? void 0 : s.getChildByName("man_body")) ?? null, !0), this.setNodeActive((null == (o = this.manrichNode) ? void 0 : o.getChildByName("man_head")) ?? null, !0), this.setNodeActive((null == (n = this.manrichNode) ? void 0 : n.getChildByName("man_body_arm")) ?? null, !0), this.startStenchAlternate(), this.hideAllObjectItems(), this.setNodeActive(this.mobilePhoneNode, !1);
  }
  hideManfakeOverlays() {
    ["man_beard", "man_fat", "man_hair", "man_clothes"].forEach(e => {
      var t;
      this.setNodeActive((null == (t = this.manfakeNode) ? void 0 : t.getChildByName(e)) ?? null, !1);
    });
  }
  hideManrichBodyParts(e) {
    var t;
    (["man_body", "man_head", "man_arm", "man_arm_1", "man_body_arm", "man_body_1", "man_body_1_arm", "man_body_arm_1", "man_body_1_arm_1", "man_head_1", "man_head_2", "man_body_2", "man", "anger"].forEach(e => {
      var t;
      this.setNodeActive((null == (t = this.manrichNode) ? void 0 : t.getChildByName(e)) ?? null, !1);
    }), e) || this.setNodeActive((null == (t = this.manrichNode) ? void 0 : t.getChildByName("IP2")) ?? null, !1);
  }
  hideAllObjectItems() {
    this.objectNodes.forEach(e => {
      this.setNodeActive(e, !1);
    });
  }
  getStepDefinition(e) {
    return V.find(t => t.step === e) ?? null;
  }
  getItemNodeForStep(e) {
    const t = this.getStepDefinition(e);
    return t ? "mobile_phone" === t.itemKey ? this.mobilePhoneNode : this.objectNodes.get(t.itemKey) ?? null : null;
  }
  spawnCurrentStepItem(e) {
    8 === this.currentStep && (this.currentStep = 9);
    const t = this.getItemNodeForStep(this.currentStep);
    null != t && t.isValid ? (this.setNodeActive(t, !0), t.setScale(.2, .2, 1), __rea_outer_y(t), __rea_outer_s(t).to(.3, {
      scale: new __rea_outer_i(1, 1, 1)
    }).call(() => {
      null == e || e();
    }).start()) : null == e || e();
  }
  registerHandlers() {
    this.node.on(__rea_outer_o.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(__rea_outer_o.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(__rea_outer_o.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(__rea_outer_o.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
  }
  unregisterHandlers() {
    this.node.off(__rea_outer_o.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(__rea_outer_o.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(__rea_outer_o.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(__rea_outer_o.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
  }
  handleItemDrop(e, t) {
    const i = e.step ?? this.currentStep,
      s = this.getStepDefinition(i);
    if (!s) return void this.restoreDragNode(e);
    const o = __rea_outer_d.isDragNearTarget(e.dragNode, this.manfakeNode),
      n = __rea_outer_d.isDragNearTarget(e.dragNode, this.manrichNode);
    if (!o && !n) return void this.restoreDragNode(e);
    const h = o ? "left" : "right";
    if (8 === s.step && "left" === h) return void this.restoreDragNode(e);
    this.isInteractionLocked = !0;
    const l = this.arePrerequisitesMet(s),
      a = h === s.correctSide;
    if (s.prerequisites.length > 0 && !l && a) this.resolveWrongDrop(e, s.prereqFailVoice ?? "20_23", !1, h);else if (a) this.resolveCorrectDrop(e, s, h);else {
      const t = s.wrongSideVoice ?? s.wrongVoice ?? null;
      this.resolveWrongDrop(e, t, !1, h);
    }
  }
  handleManrichDrop(e, t) {
    __rea_outer_d.isDragNearTarget(e.dragNode, this.manfakeNode) ? (this.isInteractionLocked = !0, this.isManrichDraggable = !1, this.swapManrichAndManfake(e, () => {
      this.isValid && this.beginSuccessSequence();
    })) : this.restoreDragNode(e);
  }
  swapManrichAndManfake(e, t) {
    const i = this.manfakeNode,
      o = e.dragNode;
    if (null == i || !i.isValid || !o.isValid) return void t();
    const h = e.originParent,
      l = o.worldPosition.clone();
    o.setParent(h);
    const a = h.getComponent(__rea_outer_n);
    a && o.setPosition(a.convertToNodeSpaceAR(l)), o.setSiblingIndex(e.originSiblingIndex);
    const r = e.originPosition.clone(),
      d = i.position.clone();
    __rea_outer_y(i), __rea_outer_y(o);
    let c = 0;
    const u = () => {
      c += 1, c >= 2 && t();
    };
    __rea_outer_s(o).to(A, {
      position: d
    }).call(u).start(), __rea_outer_s(i).to(A, {
      position: r
    }).call(u).start();
  }
  resolveCorrectDrop(e, t, i) {
    this.hideDragItem(e), __rea_outer_c.playEffect_1("level20_2"), this.applyCorrectVisual(t.step), this.stepCorrect[t.step] = !0, this.playVoiceEffect(t.correctVoice, () => {
      this.isValid && (8 !== t.step ? this.advanceAfterStepResolved() : this.completeParallelPhoneStep());
    }, i);
  }
  completeParallelPhoneStep() {
    this.hasInstallNum = Math.min(this.hasInstallNum + 1, f), __rea_outer_v.getInstance().refreshGameProgress(), 1 === this.phase && (this.isInteractionLocked = !1);
  }
  resolveWrongDrop(e, t, i, s) {
    const o = e.step ?? this.currentStep;
    this.stepCorrect[o] = i, __rea_outer_c.playEffect_1("level20_3"), this.throwDragItem(e, () => {
      this.isValid && (t ? this.playVoiceEffect(t, () => {
        this.isValid && this.advanceAfterStepResolved();
      }, s) : this.advanceAfterStepResolved());
    });
  }
  advanceAfterStepResolved() {
    this.hasInstallNum = Math.min(this.hasInstallNum + 1, f), __rea_outer_v.getInstance().refreshGameProgress(), this.currentStep >= f ? this.onAllStepsFinished() : (this.currentStep = this.getNextMainStep(this.currentStep), this.spawnCurrentStepItem(() => {
      this.isValid && (this.isInteractionLocked = !1);
    }));
  }
  onAllStepsFinished() {
    this.areAllStepsCorrect() ? this.playVoiceEffect("20_26", () => {
      this.isValid && (this.isManrichDraggable = !0, this.isInteractionLocked = !1);
    }, "right") : this.beginFailSequence(!0);
  }
  areAllStepsCorrect() {
    for (let e = 1; e <= f; e += 1) if (!this.stepCorrect[e]) return !1;
    return !0;
  }
  arePrerequisitesMet(e) {
    return e.prerequisites.every(e => this.stepCorrect[e]);
  }
  applyCorrectVisual(e) {
    var t, i, s, o, n, h, l, a, r, d, c, u, N, g, m;
    switch (e) {
      case 1:
        this.setNodeActive((null == (t = this.manfakeNode) ? void 0 : t.getChildByName("man_beard")) ?? null, !0);
        break;
      case 2:
        var p, v, y, _;
        if (this.setNodeActive((null == (i = this.manrichNode) ? void 0 : i.getChildByName("man_body")) ?? null, !1), this.setNodeActive((null == (s = this.manrichNode) ? void 0 : s.getChildByName("man_body_arm")) ?? null, !1), this.setNodeActive((null == (o = this.manrichNode) ? void 0 : o.getChildByName("man_body_1")) ?? null, !0), this.stepCorrect[8]) this.setNodeActive((null == (p = this.manrichNode) ? void 0 : p.getChildByName("man_body_arm_1")) ?? null, !1), this.setNodeActive((null == (v = this.manrichNode) ? void 0 : v.getChildByName("man_body_1_arm")) ?? null, !1), this.setNodeActive((null == (y = this.manrichNode) ? void 0 : y.getChildByName("man_body_1_arm_1")) ?? null, !0);else this.setNodeActive((null == (_ = this.manrichNode) ? void 0 : _.getChildByName("man_body_1_arm")) ?? null, !0);
        break;
      case 3:
        this.setNodeActive((null == (n = this.manfakeNode) ? void 0 : n.getChildByName("man_fat")) ?? null, !0);
        break;
      case 4:
        this.stopStenchAlternate();
        break;
      case 5:
        this.setNodeActive((null == (h = this.manfakeNode) ? void 0 : h.getChildByName("man_hair")) ?? null, !0);
        break;
      case 6:
        this.setNodeActive((null == (l = this.manrichNode) ? void 0 : l.getChildByName("man_head_1")) ?? null, !0);
        break;
      case 7:
        this.setNodeActive((null == (a = this.manrichNode) ? void 0 : a.getChildByName("man_head")) ?? null, !1), this.setNodeActive((null == (r = this.manrichNode) ? void 0 : r.getChildByName("man_head_1")) ?? null, !1), this.setNodeActive((null == (d = this.manrichNode) ? void 0 : d.getChildByName("man_head_2")) ?? null, !0);
        break;
      case 8:
        var b, f, A, S;
        if (this.stepCorrect[2]) this.setNodeActive((null == (b = this.manrichNode) ? void 0 : b.getChildByName("man_body_1_arm")) ?? null, !1), this.setNodeActive((null == (f = this.manrichNode) ? void 0 : f.getChildByName("man_body_1_arm_1")) ?? null, !0);else this.setNodeActive((null == (A = this.manrichNode) ? void 0 : A.getChildByName("man_body_arm")) ?? null, !1), this.setNodeActive((null == (S = this.manrichNode) ? void 0 : S.getChildByName("man_body_arm_1")) ?? null, !0);
        break;
      case 9:
        this.setNodeActive((null == (c = this.manrichNode) ? void 0 : c.getChildByName("man_body_1")) ?? null, !1), this.setNodeActive((null == (u = this.manrichNode) ? void 0 : u.getChildByName("man_body_1_arm_1")) ?? null, !1), this.setNodeActive((null == (N = this.manrichNode) ? void 0 : N.getChildByName("man_body_2")) ?? null, !0);
        break;
      case 10:
        this.setNodeActive((null == (g = this.manfakeNode) ? void 0 : g.getChildByName("man_fat")) ?? null, !1), this.setNodeActive((null == (m = this.manfakeNode) ? void 0 : m.getChildByName("man_clothes")) ?? null, !0);
    }
  }
  beginSuccessSequence() {
    this.beginResultPhase(!0), this.playVoiceEffect("20_24", () => {
      this.isValid && (this.showGeneralEnd(), this.showLevelSuccess(.5));
    }, "left");
  }
  beginFailSequence(e) {
    this.beginResultPhase(!1), e ? this.playVoiceEffect("20_25", () => {
      this.isValid && this.scheduleOnce(() => {
        this.isValid && __rea_outer_N.getInstance().showView(__rea_outer_p, __rea_outer_g.WIN_ANIMATION);
      }, .5);
    }, "right") : __rea_outer_N.getInstance().showView(__rea_outer_p, __rea_outer_g.WIN_ANIMATION);
  }
  beginResultPhase(e) {
    this.phase >= 2 || (this.phase = 2, this.winstate = e, this.isInteractionLocked = !0, this.isManrichDraggable = !1, this.unregisterHandlers(), this.resetActiveDrag(), __rea_outer_v.getInstance().pauseTimer());
  }
  showGeneralEnd() {
    this.setNodeActive(this.generalEndNode, !0);
  }
  beginDrag(e, t, i, s) {
    const o = e.parent;
    if (!o) return;
    const h = e.position.clone(),
      l = e.getSiblingIndex(),
      a = e.worldPosition.clone(),
      r = this.gameNode ?? o;
    e.setParent(r);
    const d = r.getComponent(__rea_outer_n);
    if (d) {
      const t = d.convertToNodeSpaceAR(a);
      e.setPosition(t);
    }
    e.setSiblingIndex(r.children.length - 1);
    const c = this.calculateTouchOffset(i, e, r);
    this.setDragNodePositionFromTouch(i, e, r, c), this.activeDragState = {
      dragNode: e,
      dragKind: t,
      step: s,
      dragParent: r,
      touchOffset: c,
      originParent: o,
      originPosition: h,
      originSiblingIndex: l
    };
  }
  resetActiveDrag() {
    this.activeDragState && (this.restoreDragNode(this.activeDragState), this.activeDragState = null);
  }
  restoreDragNode(e) {
    const t = e.dragNode;
    t.isValid && (t.setParent(e.originParent), t.setSiblingIndex(e.originSiblingIndex), t.setPosition(e.originPosition));
  }
  hideDragItem(e) {
    const t = e.dragNode;
    t.isValid && (this.restoreDragNode(e), this.setNodeActive(t, !1));
  }
  throwDragItem(e, t) {
    const o = e.dragNode;
    if (!o.isValid) return void t();
    const n = o.position.x + (Math.random() > .5 ? 900 : -900),
      h = o.position.y - 900;
    __rea_outer_y(o), __rea_outer_s(o).to(.35, {
      position: new __rea_outer_i(n, h, o.position.z)
    }).call(() => {
      o.isValid && (this.restoreDragNode(e), this.setNodeActive(o, !1)), t();
    }).start();
  }
  startStenchAlternate() {
    this.isStenchShowFirst = !0, this.setNodeActive(this.stenchNode, !0), this.setNodeActive(this.stench1Node, !1), this.unschedule(this.onStenchAlternateTick), this.schedule(this.onStenchAlternateTick, .5);
  }
  stopStenchAlternate() {
    this.unschedule(this.onStenchAlternateTick), this.setNodeActive(this.stenchNode, !1), this.setNodeActive(this.stench1Node, !1);
  }
  playVoiceEffect(e, t, i = "left") {
    this.voiceToken += 1;
    const s = this.voiceToken;
    this.showVoiceBubble(e, i);
    let o = !1;
    const n = () => {
        !o && this.isValid && s === this.voiceToken && (o = !0, this.unschedule(h), t());
      },
      h = () => {
        n();
      };
    this.scheduleOnce(h, 2.5), __rea_outer_c.stopVoice(), __rea_outer_c.playEffect_1(e, n);
  }
  showVoiceBubble(e, t = "left") {
    const i = __rea_outer_u.getInstance();
    this.tipLabel && (this.tipLabel.string = i.getKey(e), this.setNodeActive(this.tipLabel.node, !0)), this.setNodeActive(this.bubbleNode, !0);
    const s = "right" === t;
    this.setNodeActive(this.dialogBoxRightNode, s), this.setNodeActive(this.dialogBoxLeftNode, !s), this.unschedule(this.onBubbleHide), this.scheduleOnce(this.onBubbleHide, 2.5);
  }
  hideBubble() {
    var e;
    this.setNodeActive(this.bubbleNode, !1), this.setNodeActive(this.dialogBoxLeftNode, !1), this.setNodeActive(this.dialogBoxRightNode, !1), this.setNodeActive((null == (e = this.tipLabel) ? void 0 : e.node) ?? null, !1);
  }
  isPointInsideNode(e, t) {
    if (null == e || !e.isValid || !e.activeInHierarchy) return !1;
    const i = e.getComponent(__rea_outer_n);
    return !!i && i.getBoundingBoxToWorld().contains(t);
  }
  getTouchWorldPoint(e) {
    const t = e.getUILocation();
    return new __rea_outer_h(t.x, t.y);
  }
  getTouchLocalPosition(e, t) {
    const s = e.getUILocation(),
      o = t.getComponent(__rea_outer_n);
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
  resolveReferences() {
    var e, t, i, s, o, n, h, a;
    this.gameNode = this.node.getChildByPath("UIPanel/gameNode"), this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.bubbleNode = this.node.getChildByPath("UIPanel/bubble"), this.dialogBoxLeftNode = (null == (e = this.bubbleNode) ? void 0 : e.getChildByName("dialog_box_left")) ?? null, this.dialogBoxRightNode = (null == (t = this.bubbleNode) ? void 0 : t.getChildByName("dialog_box_right")) ?? null, this.tipLabel = (null == (i = this.bubbleNode) || null == (i = i.getChildByPath("dialog_box/Label")) ? void 0 : i.getComponent(__rea_outer_l)) ?? null, this.generalEndNode = this.node.getChildByPath("UIPanel/general_end") ?? this.node.getChildByPath("UIPanel/demo") ?? null;
    const r = this.gameNode;
    this.objectsRoot = (null == r ? void 0 : r.getChildByName("objcts")) ?? null, this.mobilePhoneNode = (null == r ? void 0 : r.getChildByName("mobile_phone")) ?? null, this.manfakeNode = (null == r ? void 0 : r.getChildByName("manfake")) ?? null, this.manfakeManNode = (null == (s = this.manfakeNode) ? void 0 : s.getChildByName("man")) ?? null, this.manfakeIp1Node = (null == (o = this.manfakeNode) ? void 0 : o.getChildByName("IP1")) ?? null, this.manrichNode = (null == r ? void 0 : r.getChildByName("manrich")) ?? null, this.cloudyDayNode = (null == r ? void 0 : r.getChildByName("cloudy_day")) ?? null, this.thunderNode = (null == r ? void 0 : r.getChildByName("thunder")) ?? null, this.soul1Node = (null == r ? void 0 : r.getChildByName("soul1")) ?? null, this.soul2Node = (null == r ? void 0 : r.getChildByName("soul2")) ?? null, this.stenchNode = (null == r ? void 0 : r.getChildByName("4_stench")) ?? null, this.stench1Node = (null == r ? void 0 : r.getChildByName("4_stench_1")) ?? null, this.objectNodes.clear(), null != (n = this.objectsRoot) && n.isValid && this.objectsRoot.children.forEach(e => {
      this.objectNodes.set(e.name, e);
    }), null != (h = this.soul1Node) && h.isValid && (this.soul1Origin = this.soul1Node.position.clone()), null != (a = this.soul2Node) && a.isValid && (this.soul2Origin = this.soul2Node.position.clone()), this.gameNode || console.warn("[Level_20] missing UIPanel/gameNode");
  }
  stopTrackedTweens() {
    [this.soul1Node, this.soul2Node, this.manrichNode, this.mobilePhoneNode, ...Array.from(this.objectNodes.values())].forEach(e => {
      null != e && e.isValid && __rea_outer_y(e);
    });
  }
  setNodeActive(e, t) {
    null != e && e.isValid && (e.active = t);
  }
}) || _;
__rea_outer_t._RF.pop();
export { __recovered_export_0 as default };
