// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_10.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { applyDecoratedDescriptor as __rea_outer_t } from "./rollupPluginModLoBabelHelpers";
import { initializerDefineProperty as __rea_outer_i } from "./rollupPluginModLoBabelHelpers";
import { cclegacy as __rea_outer_s } from "cc";
import { Node as __rea_outer_o } from "cc";
import { Label as __rea_outer_n } from "cc";
import { _decorator as __rea_outer_r } from "cc";
import { Tween as __rea_outer_a } from "cc";
import { Vec3 as __rea_outer_l } from "cc";
import { tween as __rea_outer_h } from "cc";
import { UITransform as __rea_outer_d } from "cc";
import { BlockInputEvents as __rea_outer_u } from "cc";
import { Vec2 as __rea_outer_c } from "cc";
import { default as __rea_outer_g } from "./LevelBase";
import { default as __rea_outer_p } from "./clue-hit-tester";
import { default as __rea_outer_N } from "./AudioManager";
import { I18nController as __rea_outer_m } from "./i18n-controller";
import { UIManager as __rea_outer_y } from "./ui-manager";
import { UILayer as __rea_outer_b } from "./ui-layer";
import { UIHint as __rea_outer_T } from "./uihint";
import { UIFail as __rea_outer_v } from "./uifail";
import { GameController as __rea_outer_f } from "./GameController";
import { default as __rea_outer__ } from "./ActionSystem";
let __recovered_export_0, __recovered_export_1;
var S, B, C, I, A, P, k, x, L, D, w, V, E, O, H, z, U, W, K, R, M, F, G, q, $, j, X, Y, Z, J, Q, ee, te, ie, se, oe, ne;
__rea_outer_s._RF.push({}, "5f428oO985OAIRYnkUmu9FX", "Level_10", void 0);
const {
    ccclass: re,
    property: ae
  } = __rea_outer_r,
  le = 300;
let he = __recovered_export_0 = function (e) {
  return e[e.ClueType_1 = 1] = "ClueType_1", e[e.ClueType_2 = 2] = "ClueType_2", e[e.ClueType_3 = 3] = "ClueType_3", e[e.ClueType_4 = 4] = "ClueType_4", e[e.ClueType_5 = 5] = "ClueType_5", e[e.ClueType_6 = 6] = "ClueType_6", e[e.ClueType_7 = 7] = "ClueType_7", e[e.ClueType_8 = 8] = "ClueType_8", e[e.ClueType_9 = 9] = "ClueType_9", e[e.ClueType_10 = 10] = "ClueType_10", e;
}({});
const de = [{
  clueType: he.ClueType_1,
  sourceNodeName: "brick",
  ladderNodeName: "brick_1",
  hintKey: "level10_hint1"
}, {
  clueType: he.ClueType_2,
  sourceNodeName: "branch",
  ladderNodeName: "branch_1",
  hintKey: "level10_hint2"
}, {
  clueType: he.ClueType_3,
  sourceNodeName: "box_1",
  ladderNodeName: "box_1_1",
  hintKey: "level10_hint3"
}, {
  clueType: he.ClueType_4,
  sourceNodeName: "tire",
  ladderNodeName: "tire_1",
  hintKey: "level10_hint4"
}, {
  clueType: he.ClueType_5,
  sourceNodeName: "haystack",
  ladderNodeName: "haystack_1",
  hintKey: "level10_hint5"
}, {
  clueType: he.ClueType_6,
  sourceNodeName: "plank",
  ladderNodeName: "plank_1",
  hintKey: "level10_hint6"
}, {
  clueType: he.ClueType_7,
  sourceNodeName: "faucet",
  ladderNodeName: "faucet_1",
  hintKey: "level10_hint7"
}, {
  clueType: he.ClueType_8,
  sourceNodeName: "bucket",
  ladderNodeName: "bucket_1",
  hintKey: "level10_hint8"
}, {
  clueType: he.ClueType_9,
  sourceNodeName: "stone",
  ladderNodeName: "stone_1",
  hintKey: "level10_hint9"
}, {
  clueType: he.ClueType_10,
  sourceNodeName: "warning_sign",
  ladderNodeName: "warning_sign_1",
  hintKey: "level10_hint10"
}];
__recovered_export_1 = (S = re("Level_10"), B = ae(__rea_outer_o), C = ae(__rea_outer_o), I = ae(__rea_outer_o), A = ae(__rea_outer_o), P = ae(__rea_outer_o), k = ae(__rea_outer_o), x = ae(__rea_outer_n), L = ae(__rea_outer_o), D = ae(__rea_outer_o), w = ae(__rea_outer_o), V = ae(__rea_outer_o), E = ae(__rea_outer_o), O = ae(__rea_outer_o), H = ae(__rea_outer_o), z = ae(__rea_outer_o), U = ae(__rea_outer_o), W = ae(__rea_outer_o), S((M = __rea_outer_t((R = class extends __rea_outer_g {
  constructor(...e) {
    super(...e), __rea_outer_i(this, "gameNode", M, this), __rea_outer_i(this, "laddersNode", F, this), __rea_outer_i(this, "peopleNode", G, this), __rea_outer_i(this, "tigerNode", q, this), __rea_outer_i(this, "tigerTouchNode", $, this), __rea_outer_i(this, "bubbleNode", j, this), __rea_outer_i(this, "tipLabel", X, this), __rea_outer_i(this, "backBgNode", Y, this), __rea_outer_i(this, "boxNode", Z, this), __rea_outer_i(this, "boxBrokenNode", J, this), __rea_outer_i(this, "hammerNode", Q, this), __rea_outer_i(this, "pawPrintNode", ee, this), __rea_outer_i(this, "star1Node", te, this), __rea_outer_i(this, "star2Node", ie, this), __rea_outer_i(this, "triggerLadderNode", se, this), __rea_outer_i(this, "legNode", oe, this), __rea_outer_i(this, "leg3Node", ne, this), this.phase = 0, this.winstate = !1, this.doneItems = [], this.totalitems = [], this.ladderStepTargetPositions = [], this.ladderVisualNodes = new Map(), this.sourceNodes = new Map(), this.activeDragState = null, this.isInteractionLocked = !1, this.isBoxBroken = !1, this.hasPlayedTimeWarning = !1, this.isStunStar1Visible = !0, this.onTouchStart = e => {
      var t;
      if (1 !== this.phase || this.isInteractionLocked) return;
      const i = this.getTouchWorldPoint(e);
      if (null != (t = this.hammerNode) && t.active && this.isPointInsideNode(this.hammerNode, i)) return this.beginDrag(this.hammerNode, "hammer", e), void (e.propagationStopped = !0);
      const s = this.hitTestDraggableItem(i);
      s && (this.beginDrag(s, "item", e), e.propagationStopped = !0);
    }, this.onTouchMove = e => {
      if (!this.activeDragState || 1 !== this.phase) return;
      const t = this.activeDragState;
      this.setDragNodePositionFromTouch(e, t.dragNode, t.dragParent, t.touchOffset), e.propagationStopped = !0;
    }, this.onTouchEnd = e => {
      if (!this.activeDragState || 1 !== this.phase || this.isInteractionLocked) return void this.resetActiveDrag();
      const t = this.activeDragState;
      this.activeDragState = null;
      const i = this.getTouchWorldPoint(e);
      if ("hammer" === t.dragKind) return this.handleHammerDrop(t, i), void (e.propagationStopped = !0);
      this.handleItemDrop(t, i), e.propagationStopped = !0;
    }, this.onStunStarToggle = () => {
      this.isStunStar1Visible = !this.isStunStar1Visible, this.setNodeActive(this.star1Node, this.isStunStar1Visible), this.setNodeActive(this.star2Node, !this.isStunStar1Visible);
    }, this.checkTimeWarning = () => {
      if (1 !== this.phase || this.hasPlayedTimeWarning) return;
      const e = __rea_outer_f.getInstance().getRemainingTime();
      e > 0 && e <= 30 && (this.hasPlayedTimeWarning = !0, __rea_outer_N.playEffect_1("level10_3"));
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.allItemNum = 10, this.hasInstallNum = 0, this.totalitems = de.map(e => e.clueType);
  }
  start() {
    this.resetLevelState(), this.enterPhase0();
  }
  onDestroy() {
    var e;
    this.unscheduleAllCallbacks(), null != (e = this.node) && e.isValid && this.unregisterInteractionHandlers(), this.stopBreathAnimations(), this.stopTigerStunAnimation(), this.stopLegWalkAnimation(), __rea_outer_a.stopAllByTag(302), this.activeDragState = null;
  }
  handleTimeExpired() {
    return !!(this.phase >= 2 || this.winstate);
  }
  showHint() {
    if (1 !== this.phase) return;
    const e = this.resolveNextHintKey();
    if (!e) return;
    const t = __rea_outer_m.getInstance().getKey(e);
    __rea_outer_y.getInstance().showView(__rea_outer_T, void 0, {
      body: t
    });
  }
  getGameProgressSnapshot() {
    const e = this.doneItems.length;
    return {
      progress: e / 10,
      label: `${e}/10`
    };
  }
  markAllTasksCompleted() {
    this.doneItems = [...this.totalitems], this.hasInstallNum = 10;
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.doneItems = [], this.activeDragState = null, this.isInteractionLocked = !1, this.isBoxBroken = !1, this.hasPlayedTimeWarning = !1, this.hasInstallNum = 0, this.ladderStepTargetPositions.length = 0, this.ladderVisualNodes.clear(), this.sourceNodes.clear();
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_N.playMusic("bgm3", !0, .5), this.applyInitialVisibility(), this.cacheLadderLayout(), this.startBreathAnimations(), this.setInputBlocked(!0), this.scheduleOnce(() => {
      this.isValid && 0 === this.phase && (this.playIntroLine(), this.scheduleOnce(() => {
        this.isValid && 0 === this.phase && (this.hideBubble(), this.setInputBlocked(!1), this.enterPhase1());
      }, 2.5));
    }, .25);
  }
  skipOpeningToPlay() {
    return 0 === this.phase && (this.stopOpeningDialogue(), this.hideBubble(), this.setInputBlocked(!1), this.enterPhase1(), !0);
  }
  enterPhase1() {
    0 === this.phase && (this.phase = 1, this.registerInteractionHandlers(), this.schedule(this.checkTimeWarning, 1), __rea_outer_f.getInstance().refreshGameProgress());
  }
  enterPhase2Success() {
    this.phase >= 2 || (this.phase = 2, this.winstate = !0, this.unregisterInteractionHandlers(), this.unschedule(this.checkTimeWarning), this.stopBreathAnimations(), __rea_outer_f.getInstance().pauseTimer(), this.showLevelSuccess(.5));
  }
  beginFailSequence() {
    this.phase >= 2 || (this.phase = 2, this.winstate = !1, this.unregisterInteractionHandlers(), this.unschedule(this.checkTimeWarning), this.stopBreathAnimations(), __rea_outer_f.getInstance().pauseTimer(), this.playFailAnimation(() => {
      this.isValid && __rea_outer_y.getInstance().showView(__rea_outer_v, __rea_outer_b.WIN_ANIMATION);
    }));
  }
  applyInitialVisibility() {
    var e, t;
    ["brick", "branch", "box", "hammer", "tire", "haystack", "plank", "faucet", "bucket", "stone", "warning_sign"].forEach(e => {
      this.setNodeActive(this.getSourceNode(e), !0);
    }), this.setNodeActive(this.boxBrokenNode, !1), this.setNodeActive(null == (e = this.peopleNode) ? void 0 : e.parent, !0), this.setNodeActive(this.peopleNode, !0), this.setNodeActive(this.tigerNode, !0), this.setNodeActive(this.pawPrintNode, !1), this.setNodeActive(this.star1Node, !1), this.setNodeActive(this.star2Node, !1), this.setNodeActive(this.bubbleNode, !1), this.applyIdleLegVisibility(), null == (t = this.laddersNode) || t.children.forEach(e => {
      e.active = !1;
    });
  }
  cacheLadderLayout() {
    var e;
    if (null == (e = this.laddersNode) || !e.isValid) return;
    this.ladderStepTargetPositions.length = 0, this.ladderVisualNodes.clear();
    [...this.laddersNode.children].sort((e, t) => e.position.y - t.position.y).forEach(e => {
      this.ladderStepTargetPositions.push(e.position.clone()), this.ladderVisualNodes.set(e.name, e);
    }), de.forEach(e => {
      const t = this.getSourceNode(e.sourceNodeName);
      t && this.sourceNodes.set(e.sourceNodeName, t);
    });
  }
  startBreathAnimations() {
    var e, t;
    if (null != (e = this.peopleNode) && e.isValid) {
      const e = this.peopleNode.scale.y;
      __rea_outer__.RoseBreath_tag(this.peopleNode, e, .02, 1, 0, le);
    }
    if (null != (t = this.tigerNode) && t.isValid) {
      const e = this.tigerNode.scale.y;
      __rea_outer__.RoseBreath_tag(this.tigerNode, e, .1, .55, 0, 301);
    }
  }
  stopBreathAnimations() {
    __rea_outer_a.stopAllByTag(le), __rea_outer_a.stopAllByTag(301);
  }
  playIntroLine() {
    const e = __rea_outer_m.getInstance();
    this.tipLabel && (this.tipLabel.string = e.getKey("10_1"), this.setNodeActive(this.tipLabel.node, !0)), this.setNodeActive(this.bubbleNode, !0), __rea_outer_N.playEffect_1("10_1");
  }
  hideBubble() {
    var e;
    this.setNodeActive(this.bubbleNode, !1), this.setNodeActive((null == (e = this.tipLabel) ? void 0 : e.node) ?? null, !1);
  }
  registerInteractionHandlers() {
    this.node.on(__rea_outer_o.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(__rea_outer_o.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(__rea_outer_o.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(__rea_outer_o.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
  }
  unregisterInteractionHandlers() {
    this.node.off(__rea_outer_o.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(__rea_outer_o.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(__rea_outer_o.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(__rea_outer_o.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
  }
  handleHammerDrop(e, t) {
    if (this.isDragOnTiger(e.dragNode)) return void this.handleTigerHit(e);
    const i = this.boxNode;
    if (!this.isBoxBroken && __rea_outer_p.isDragNearTarget(e.dragNode, i)) return this.setNodeActive(this.hammerNode, !1), this.setNodeActive(i, !1), this.setNodeActive(this.boxBrokenNode, !0), this.isBoxBroken = !0, void this.restoreDragNode(e);
    this.restoreDragNode(e);
  }
  handleItemDrop(e, t) {
    if (this.isDragOnTiger(e.dragNode)) return void this.handleTigerHit(e);
    if (!__rea_outer_p.isDragNearTarget(e.dragNode, this.triggerLadderNode)) return void this.restoreDragNode(e);
    const i = this.findItemDefinitionBySourceNode(e.dragNode);
    if (!i || this.isClueDone(i.clueType)) return void this.restoreDragNode(e);
    if (i.clueType === he.ClueType_3 && !this.isBoxBroken) return void this.restoreDragNode(e);
    this.isInteractionLocked = !0, this.setNodeActive(e.dragNode, !1);
    const s = this.doneItems.length + 1;
    this.placeLadderStep(i.ladderNodeName, s), this.raisePeople(s), __rea_outer_N.playEffect_1("level10_1"), this.doneItems.push(i.clueType), this.hasInstallNum = this.doneItems.length, __rea_outer_f.getInstance().refreshGameProgress(), this.isInteractionLocked = !1, this.doneItems.length >= 10 && this.enterPhase2Success();
  }
  placeLadderStep(e, t) {
    var i;
    const s = this.ladderVisualNodes.get(e) ?? (null == (i = this.laddersNode) ? void 0 : i.getChildByName(e)) ?? null;
    if (null == s || !s.isValid) return;
    const o = t - 1,
      n = this.ladderStepTargetPositions[o];
    n && (s.active = !0, s.setPosition(n));
  }
  raisePeople(e) {
    var t;
    if (null == (t = this.peopleNode) || !t.isValid) return;
    const i = e - 1;
    if (i < 0 || i >= this.ladderStepTargetPositions.length) return;
    const s = this.getPeopleStepDelta(i),
      o = this.peopleNode.position,
      n = new __rea_outer_l(o.x + s.x, o.y + s.y, o.z);
    __rea_outer_a.stopAllByTag(302), this.startLegWalkAnimation(), __rea_outer_h(this.peopleNode).tag(302).to(.2, {
      position: n
    }).call(() => {
      this.isValid && this.stopLegWalkAnimation();
    }).start();
  }
  applyIdleLegVisibility() {
    this.setNodeActive(this.legNode, !0), this.setNodeActive(this.leg3Node, !1);
  }
  startLegWalkAnimation() {
    this.setNodeActive(this.legNode, !1), this.setNodeActive(this.leg3Node, !0);
  }
  stopLegWalkAnimation() {
    this.applyIdleLegVisibility();
  }
  getPeopleStepDelta(e) {
    if (0 === e) {
      const e = this.ladderStepTargetPositions[0],
        t = this.ladderStepTargetPositions[1] ?? e;
      return new __rea_outer_l(t.x - e.x, t.y - e.y, 0);
    }
    const t = this.ladderStepTargetPositions[e],
      i = this.ladderStepTargetPositions[e - 1];
    return new __rea_outer_l(t.x - i.x, t.y - i.y, 0);
  }
  handleTigerHit(e) {
    this.phase >= 2 || this.isInteractionLocked ? this.restoreDragNode(e) : (this.isInteractionLocked = !0, this.restoreDragNode(e), __rea_outer_N.playEffect_1("level10_2"), this.stopBreathAnimations(), this.playTigerStunAnimation(() => {
      this.isValid && this.beginFailSequence();
    }));
  }
  playTigerStunAnimation(e) {
    this.stopTigerStunAnimation(), this.isStunStar1Visible = !0, this.setNodeActive(this.star1Node, !0), this.setNodeActive(this.star2Node, !1), this.schedule(this.onStunStarToggle, .15), this.scheduleOnce(() => {
      this.isValid && (this.stopTigerStunAnimation(), e());
    }, .5);
  }
  stopTigerStunAnimation() {
    this.unschedule(this.onStunStarToggle), this.setNodeActive(this.star1Node, !1), this.setNodeActive(this.star2Node, !1);
  }
  isDragOnTiger(e) {
    var t;
    return !0 === (null == (t = this.tigerTouchNode) ? void 0 : t.active) && __rea_outer_p.isDragNearTarget(e, this.tigerTouchNode);
  }
  playFailAnimation(e) {
    __rea_outer_N.playEffect_1("level10_4"), this.setNodeActive(this.pawPrintNode, !0), this.setNodeActive(this.star1Node, !0), this.setNodeActive(this.star2Node, !0), this.scheduleOnce(() => {
      this.isValid && e();
    }, 1.5);
  }
  beginDrag(e, t, i) {
    const s = e.parent,
      o = e.position.clone(),
      n = e.getSiblingIndex(),
      r = this.gameNode ?? s,
      a = e.worldPosition.clone();
    e.setParent(r);
    const l = r.getComponent(__rea_outer_d);
    if (l) {
      const t = l.convertToNodeSpaceAR(a);
      e.setPosition(t);
    }
    e.setSiblingIndex(r.children.length - 1);
    const h = this.calculateTouchOffset(i, e, r);
    this.setDragNodePositionFromTouch(i, e, r, h), this.activeDragState = {
      dragNode: e,
      dragKind: t,
      dragParent: r,
      touchOffset: h,
      originParent: s,
      originPosition: o,
      originSiblingIndex: n
    };
  }
  resetActiveDrag() {
    this.activeDragState && (this.restoreDragNode(this.activeDragState), this.activeDragState = null);
  }
  restoreDragNode(e) {
    const t = e.dragNode;
    t.isValid && (t.setParent(e.originParent), t.setSiblingIndex(e.originSiblingIndex), t.setPosition(e.originPosition));
  }
  hitTestDraggableItem(e) {
    const t = [];
    de.forEach(e => {
      if (this.isClueDone(e.clueType)) return;
      if (e.clueType === he.ClueType_3 && !this.isBoxBroken) return;
      const i = this.getSourceNode(e.sourceNodeName);
      null != i && i.active && t.push(i);
    }), t.sort((e, t) => this.getNodeRenderOrder(t) - this.getNodeRenderOrder(e));
    for (let i = 0; i < t.length; i += 1) {
      const s = t[i];
      if (this.isPointInsideNode(s, e)) return s;
    }
    return null;
  }
  getNodeRenderOrder(e) {
    let t = 0,
      i = 1,
      s = e;
    for (; s;) t += s.getSiblingIndex() * i, i *= 128, s = s.parent;
    return t;
  }
  findItemDefinitionBySourceNode(e) {
    return de.find(t => this.getSourceNode(t.sourceNodeName) === e) ?? null;
  }
  isClueDone(e) {
    return this.doneItems.indexOf(e) >= 0;
  }
  resolveNextHintKey() {
    var e;
    if (!this.isBoxBroken && null != (e = this.boxNode) && e.active) return "level10_hint3";
    for (const e of de) if (!this.isClueDone(e.clueType)) return e.clueType !== he.ClueType_3 || this.isBoxBroken, e.hintKey;
    return null;
  }
  getSourceNode(e) {
    var t;
    if ("box_1" === e) return this.boxBrokenNode;
    if ("box" === e) return this.boxNode;
    if ("hammer" === e) return this.hammerNode;
    const i = this.sourceNodes.get(e);
    return null != i && i.isValid ? i : (null == (t = this.gameNode) ? void 0 : t.getChildByName(e)) ?? null;
  }
  resolveReferences() {
    var e, t, i, s, o, r, a, l, h, d, u, c, g, p, N;
    this.gameNode = this.gameNode ?? this.node.getChildByPath("UIPanel/gameNode"), this.laddersNode = this.laddersNode ?? (null == (e = this.gameNode) ? void 0 : e.getChildByName("ladders")) ?? null, this.peopleNode = this.peopleNode ?? (null == (t = this.gameNode) ? void 0 : t.getChildByPath("people/body")) ?? null, this.legNode = this.legNode ?? (null == (i = this.peopleNode) ? void 0 : i.getChildByName("leg")) ?? null, this.leg3Node = this.leg3Node ?? (null == (s = this.peopleNode) ? void 0 : s.getChildByName("leg_3")) ?? null, this.tigerNode = this.tigerNode ?? (null == (o = this.gameNode) ? void 0 : o.getChildByName("tiger")) ?? null, this.tigerTouchNode = this.tigerTouchNode ?? (null == (r = this.tigerNode) ? void 0 : r.getChildByName("tigertouch")) ?? null, this.bubbleNode = this.bubbleNode ?? (null == (a = this.gameNode) ? void 0 : a.getChildByName("bubble")) ?? null, this.boxNode = this.boxNode ?? (null == (l = this.gameNode) ? void 0 : l.getChildByName("box")) ?? null;
    const m = (null == (h = this.gameNode) ? void 0 : h.getChildByName("box_1")) ?? null;
    var y, b;
    this.boxBrokenNode && "box_1" === this.boxBrokenNode.name || (null != (y = this.boxBrokenNode) && y.name && "box_1" !== this.boxBrokenNode.name && console.warn(`[Level_10] boxBrokenNode 绑定错误（${this.boxBrokenNode.name}），已改为 box_1`), this.boxBrokenNode = m);
    (this.hammerNode = this.hammerNode ?? (null == (d = this.gameNode) ? void 0 : d.getChildByName("hammer")) ?? null, this.pawPrintNode = this.pawPrintNode ?? (null == (u = this.gameNode) ? void 0 : u.getChildByName("paw_print")) ?? null, this.star1Node = this.star1Node ?? (null == (c = this.tigerNode) ? void 0 : c.getChildByName("star1")) ?? null, this.star2Node = this.star2Node ?? (null == (g = this.tigerNode) ? void 0 : g.getChildByName("star2")) ?? null, this.backBgNode = this.backBgNode ?? this.node.getChildByPath("UIPanel/backBG") ?? null, this.triggerLadderNode = this.triggerLadderNode ?? (null == (p = this.gameNode) ? void 0 : p.getChildByPath("clicks/triggerladder")) ?? (null == (N = this.gameNode) ? void 0 : N.getChildByPath("clicks/general_bg")) ?? null, this.triggerLadderNode || console.warn("[Level_10] 缺少拖放热区 clicks/triggerladder"), this.tipLabel) || (this.tipLabel = (null == (b = this.bubbleNode) || null == (b = b.getChildByPath("dialog_box/Label")) ? void 0 : b.getComponent(__rea_outer_n)) ?? null);
  }
  setInputBlocked(e) {
    const t = this.backBgNode;
    if (null == t || !t.isValid) return;
    t.active = e;
    const i = t.getComponent(__rea_outer_u);
    i && (i.enabled = e);
  }
  setNodeActive(e, t) {
    null != e && e.isValid && (e.active = t);
  }
  isPointInsideNode(e, t) {
    const i = null == e ? void 0 : e.getComponent(__rea_outer_d);
    return !!i && i.getBoundingBoxToWorld().contains(t);
  }
  getTouchWorldPoint(e) {
    const t = e.getUILocation();
    return new __rea_outer_c(t.x, t.y);
  }
  getTouchLocalPosition(e, t) {
    const i = e.getUILocation(),
      s = t.getComponent(__rea_outer_d);
    return s ? s.convertToNodeSpaceAR(new __rea_outer_l(i.x, i.y, 0)) : __rea_outer_l.ZERO.clone();
  }
  calculateTouchOffset(e, t, i) {
    const s = this.getTouchLocalPosition(e, i);
    return new __rea_outer_l(t.position.x - s.x, t.position.y - s.y, 0);
  }
  setDragNodePositionFromTouch(e, t, i, s) {
    const o = this.getTouchLocalPosition(e, i);
    t.setPosition(o.x + s.x, o.y + s.y, t.position.z);
  }
}).prototype, "gameNode", [B], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), F = __rea_outer_t(R.prototype, "laddersNode", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), G = __rea_outer_t(R.prototype, "peopleNode", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), q = __rea_outer_t(R.prototype, "tigerNode", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), $ = __rea_outer_t(R.prototype, "tigerTouchNode", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), j = __rea_outer_t(R.prototype, "bubbleNode", [k], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), X = __rea_outer_t(R.prototype, "tipLabel", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Y = __rea_outer_t(R.prototype, "backBgNode", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Z = __rea_outer_t(R.prototype, "boxNode", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), J = __rea_outer_t(R.prototype, "boxBrokenNode", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Q = __rea_outer_t(R.prototype, "hammerNode", [V], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ee = __rea_outer_t(R.prototype, "pawPrintNode", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), te = __rea_outer_t(R.prototype, "star1Node", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ie = __rea_outer_t(R.prototype, "star2Node", [H], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), se = __rea_outer_t(R.prototype, "triggerLadderNode", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), oe = __rea_outer_t(R.prototype, "legNode", [U], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ne = __rea_outer_t(R.prototype, "leg3Node", [W], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), K = R)) || K);
__rea_outer_s._RF.pop();
export { __recovered_export_0 as ClueType, __recovered_export_1 as default };
