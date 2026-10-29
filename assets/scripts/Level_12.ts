// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_12.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { applyDecoratedDescriptor as __rea_outer_t } from "./rollupPluginModLoBabelHelpers";
import { initializerDefineProperty as __rea_outer_i } from "./rollupPluginModLoBabelHelpers";
import { cclegacy as __rea_outer_o } from "cc";
import { Sprite as __rea_outer_n } from "cc";
import { Node as __rea_outer_s } from "cc";
import { Enum as __rea_outer_l } from "cc";
import { Label as __rea_outer_r } from "cc";
import { ScrollView as __rea_outer_a } from "cc";
import { _decorator as __rea_outer_h } from "cc";
import { Vec3 as __rea_outer_c } from "cc";
import { Vec2 as __rea_outer_u } from "cc";
import { BlockInputEvents as __rea_outer_d } from "cc";
import { tween as __rea_outer_p } from "cc";
import { Tween as __rea_outer_g } from "cc";
import { UITransform as __rea_outer_v } from "cc";
import { view as __rea_outer_T } from "cc";
import { default as __rea_outer_y } from "./LevelBase";
import { default as __rea_outer_S } from "./clue-hit-tester";
import { default as __rea_outer_C } from "./AudioManager";
import { I18nController as __rea_outer_b } from "./i18n-controller";
import { UIManager as __rea_outer_f } from "./ui-manager";
import { UIHint as __rea_outer_N } from "./uihint";
import { stopAllTweens as __rea_outer_m } from "./CocosCompat";
import { stopSpritesTweens as __rea_outer__ } from "./CocosCompat";
import { isSpriteRenderable as __rea_outer_L } from "./CocosCompat";
import { computeContentHorizontalScrollBounds as __rea_outer_P } from "./content-horizontal-scroll";
import { applyContentHorizontalScroll as __rea_outer_D } from "./content-horizontal-scroll";
import { snapBackContentHorizontalScroll as __rea_outer_I } from "./content-horizontal-scroll";
import { GameController as __rea_outer_w } from "./GameController";
import { default as __rea_outer_A } from "./ActionSystem";
let __recovered_export_0, __recovered_export_1;
var k, V, x, M, z, B, E, O, R, W, H, F, U, X, G, K, Z, $, j, Q, q, J, Y, ee, te, ie, oe, ne, se, le, re, ae, he, ce, ue, de, pe, ge, ve, Te, ye, Se, Ce, be, fe, Ne, me, _e, Le, Pe, De, Ie, we, Ae, ke, Ve, xe;
__rea_outer_o._RF.push({}, "4f450xBsBdPwKk2OcCDoXxb", "Level_12", void 0);
const {
    ccclass: Me,
    property: ze
  } = __rea_outer_h,
  Be = "12_1",
  Ee = "12_2",
  Oe = .25;
let Re = __recovered_export_0 = function (e) {
  return e[e.ClueType_1 = 1] = "ClueType_1", e[e.ClueType_2 = 2] = "ClueType_2", e[e.ClueType_3 = 3] = "ClueType_3", e[e.ClueType_4 = 4] = "ClueType_4", e[e.ClueType_5 = 5] = "ClueType_5", e[e.ClueType_6 = 6] = "ClueType_6", e[e.ClueType_7 = 7] = "ClueType_7", e[e.ClueType_8 = 8] = "ClueType_8", e[e.ClueType_9 = 9] = "ClueType_9", e[e.ClueType_10 = 10] = "ClueType_10", e[e.ClueType_11 = 11] = "ClueType_11", e[e.ClueType_12 = 12] = "ClueType_12", e[e.ClueType_13 = 13] = "ClueType_13", e[e.ClueType_14 = 14] = "ClueType_14", e[e.ClueType_15 = 15] = "ClueType_15", e[e.ClueType_16 = 16] = "ClueType_16", e;
}({});
Re.ClueType_14;
const We = [];
var He = function (e) {
  return e[e.RoleType_1 = 1] = "RoleType_1", e[e.RoleType_2 = 2] = "RoleType_2", e[e.RoleType_3 = 3] = "RoleType_3", e;
}(He || {});
let Fe = (k = Me("Level_12_DragItemPair"), V = ze(__rea_outer_n), x = ze(__rea_outer_n), M = ze(__rea_outer_s), z = ze({
  type: __rea_outer_l(Re),
  tooltip: "线索类型"
}), B = ze({
  type: __rea_outer_l(He),
  tooltip: "角色类型"
}), k((R = __rea_outer_t((O = class {
  constructor() {
    __rea_outer_i(this, "ID", R, this), __rea_outer_i(this, "dragSprite", W, this), __rea_outer_i(this, "dragMoveSprite", H, this), __rea_outer_i(this, "triggerNode", F, this), __rea_outer_i(this, "clueType", U, this), __rea_outer_i(this, "roleType", X, this);
  }
}).prototype, "ID", [ze], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), W = __rea_outer_t(O.prototype, "dragSprite", [V], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), H = __rea_outer_t(O.prototype, "dragMoveSprite", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), F = __rea_outer_t(O.prototype, "triggerNode", [M], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), U = __rea_outer_t(O.prototype, "clueType", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return Re.ClueType_1;
  }
}), X = __rea_outer_t(O.prototype, "roleType", [B], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return He.RoleType_1;
  }
}), E = O)) || E);
__recovered_export_1 = (G = Me("Level_12"), K = ze(__rea_outer_s), Z = ze(__rea_outer_r), $ = ze(__rea_outer_r), j = ze({
  type: [Fe]
}), Q = ze({
  type: [Fe]
}), q = ze({
  type: [Fe]
}), J = ze(__rea_outer_s), Y = ze(__rea_outer_s), ee = ze(__rea_outer_s), te = ze(__rea_outer_s), ie = ze(__rea_outer_s), oe = ze(__rea_outer_s), ne = ze(__rea_outer_s), se = ze(__rea_outer_a), le = ze(__rea_outer_s), re = ze(__rea_outer_s), ae = ze(__rea_outer_s), he = ze(__rea_outer_n), ce = ze(__rea_outer_n), ue = ze(__rea_outer_n), G((ge = __rea_outer_t((pe = class extends __rea_outer_y {
  constructor(...e) {
    super(...e), __rea_outer_i(this, "bubbleNode1", ge, this), __rea_outer_i(this, "bubleLabel", ve, this), __rea_outer_i(this, "TipLabel", Te, this), __rea_outer_i(this, "clickItemPair_arr", ye, this), __rea_outer_i(this, "DragItemPair_arr", Se, this), __rea_outer_i(this, "SwipeItemPair_arr", Ce, this), __rea_outer_i(this, "bgNode1", be, this), __rea_outer_i(this, "bgNode2", fe, this), __rea_outer_i(this, "namesNode", Ne, this), __rea_outer_i(this, "witchnode", me, this), __rea_outer_i(this, "vampireNode", _e, this), __rea_outer_i(this, "lich_cloakNode", Le, this), __rea_outer_i(this, "lich_cloakTargetNode", Pe, this), __rea_outer_i(this, "scrollView", De, this), __rea_outer_i(this, "contentNode", Ie, this), __rea_outer_i(this, "Lich5_node", we, this), __rea_outer_i(this, "click_rootNode", Ae, this), __rea_outer_i(this, "BlockSprite", ke, this), __rea_outer_i(this, "curtain_1Sprite", Ve, this), __rea_outer_i(this, "animationSprites", xe, this), this.phase = 0, this.winstate = !1, this.lockIndexs = [], this.totalitems = [], this.doneItems = [], this.hint_arr = ["level12_hint1", "level12_hint2", "level12_hint3", "level12_hint4", "level12_hint5", "level12_hint6", "level12_hint7", "level12_hint8", "level12_hint9", "level12_hint10", "level12_hint11", "level12_hint12", "level12_hint13", "level12_hint14", "level12_hint15"], this.isInteractionLocked = !1, this.isWrongTipPlaying = !1, this.activeDragState = null, this.cluetypeposDic = new Map(), this.contentSlotLayout = null, this.namesNodeTargetPos = new __rea_outer_c(), this.tipLabelRestPosition = new __rea_outer_c(), this.touchMode = "none", this.touchStartPoint = new __rea_outer_u(), this.candidateDragPair = null, this.scrollStartContentX = 0, this.contentScrollBounds = {
      minX: 0,
      maxX: 0
    }, this.isTouchStartedInList = !1, this.onLevelTouchStart = e => {
      var t, i, o;
      if (1 !== this.phase || this.isInteractionLocked || this.activeDragState) return;
      null != (t = this.contentNode) && t.isValid && __rea_outer_m(this.contentNode);
      const n = this.getTouchWorldPoint(e);
      this.touchStartPoint = n, this.scrollStartContentX = (null == (i = this.contentNode) ? void 0 : i.position.x) ?? 0, this.candidateDragPair = this.hitTestDragPair(n), this.isTouchStartedInList = this.isPointInsideNode(null == (o = this.contentNode) ? void 0 : o.parent, n), this.touchMode = "pending";
    }, this.onLevelTouchMove = e => {
      if (1 !== this.phase || this.isInteractionLocked || "none" === this.touchMode) return;
      const t = this.getTouchWorldPoint(e);
      if ("pending" !== this.touchMode || this.resolveTouchMode(t, e)) if ("scroll" !== this.touchMode) {
        if ("drag" === this.touchMode && this.activeDragState) {
          const t = this.activeDragState;
          this.handleSpecialDragMove(t), this.setDragNodePositionFromTouch(e, t.activeSprite.node, t.dragParent, t.touchOffset);
        }
      } else {
        const e = t.x - this.touchStartPoint.x;
        this.applyContentScroll(this.scrollStartContentX + e);
      }
    }, this.onLevelTouchEnd = e => {
      const t = this.touchMode;
      this.touchMode = "none", this.candidateDragPair = null, "drag" === t && this.activeDragState ? this.finishDragInteraction(e) : "scroll" === t && this.snapBackContentScroll();
    }, this.onLevelTouchCancel = () => {
      const e = this.touchMode;
      this.resetTouchSession(), this.resetDragState(!0), "scroll" === e && this.snapBackContentScroll();
    };
  }
  onLoad() {
    super.onLoad(), this.initializeTotalItems(), this.allItemNum = 15, this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.enterPhase0();
  }
  onDestroy() {
    this.unscheduleAllCallbacks(), this.unregisterInteractionHandlers(), this.stopDecorationAnimations(), this.stopAllLevelSpriteTweens(), this.activeDragState = null;
  }
  showHint() {
    if (1 !== this.phase) return;
    const e = this.resolveNextHintKey();
    if (!e) return;
    const t = __rea_outer_b.getInstance().getKey(e);
    __rea_outer_f.getInstance().showView(__rea_outer_N, void 0, {
      body: t
    });
  }
  getGameProgressSnapshot() {
    const e = this.doneItems.length;
    return {
      progress: e / 15,
      label: `${e}/15`
    };
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.doneItems = [], this.isInteractionLocked = !1, this.isWrongTipPlaying = !1, this.hasInstallNum = 0, this.activeDragState = null, this.resetTouchSession(), this.cluetypeposDic.clear(), this.contentSlotLayout = null, this.initializeLockIndexs(), this.initializeTotalItems(), this.recordClueTypePosDic(), this.recordContentSlotLayout(), this.prepareSpritesForPhase0();
  }
  initializeLockIndexs() {
    this.lockIndexs = [...We];
  }
  initializeTotalItems() {
    const e = new Set();
    this.DragItemPair_arr.forEach(t => {
      e.add(this.normalizeClueType(t.clueType));
    }), this.totalitems = Array.from(e);
  }
  recordClueTypePosDic() {
    this.cluetypeposDic.clear(), this.DragItemPair_arr.forEach(e => {
      var t;
      const i = null == (t = e.dragMoveSprite) ? void 0 : t.node,
        o = null == i ? void 0 : i.parent;
      null != i && i.isValid && null != o && o.isValid && this.cluetypeposDic.set(e.clueType, {
        parent: o,
        localPosition: i.position.clone(),
        siblingIndex: i.getSiblingIndex()
      });
    });
  }
  recordContentSlotLayout() {
    const e = this.contentNode,
      t = this.Lich5_node;
    if (null == e || !e.isValid) return void (this.contentSlotLayout = null);
    const i = e.children.filter(e => e.isValid && e !== t).slice().sort((e, t) => e.position.x - t.position.x);
    if (0 === i.length) return void (this.contentSlotLayout = null);
    const o = i[0].position.x,
      n = i.length > 1 ? i[1].position.x - i[0].position.x : 196;
    this.contentSlotLayout = {
      startX: o,
      spacing: n,
      y: i[0].position.y
    };
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_C.playMusic("bgm4", !0, .5), this.setNodeActive(this.bgNode1, !0), this.setNodeActive(this.bgNode2, !1), this.setNodeActive(this.namesNode, !1), this.setNodeActive(this.click_rootNode, !1), this.hideBubble(), this.setNodeActive(this.lich_cloakNode, !1), this.setNodeActive(this.lich_cloakTargetNode, !1), this.setNodeActive(this.contentNode, !1), this.setBlockSpriteBlocking(!0), this.shuffleContentNodes(), this.playNamesNodeIntroAnimation(), this.playBubbleLine(Be, Be), this.scheduleOnce(() => {
      this.isValid && this.hideBubble();
    }, 2), this.startDecorationAnimations(), __rea_outer_C.playEffect_1(Be), this.scheduleOnce(() => {
      this.isValid && this.finishPhase0Intro();
    }, 2.5), this.scheduleOnce(() => {
      this.isValid && this.showContentNode();
    }, 1);
  }
  finishPhase0Intro() {
    this.setBlockSpriteBlocking(!1), this.enterPhase1();
  }
  setBlockSpriteBlocking(e) {
    var t;
    const i = null == (t = this.BlockSprite) ? void 0 : t.node;
    if (!i) return;
    i.active = e;
    const o = i.getComponent(__rea_outer_d);
    o && (o.enabled = e);
  }
  showContentNode() {
    var e;
    this.setNodeActive(this.click_rootNode, !0), this.setNodeActive(this.contentNode, !0), null != (e = this.scrollView) && null != (e = e.node) && e.isValid && (this.scrollView.node.active = !0), this.disableScrollViewComponent(), this.computeScrollBounds();
  }
  disableScrollViewComponent() {
    var e;
    null != (e = this.scrollView) && e.isValid && (this.scrollView.enabled = !1);
  }
  computeScrollBounds() {
    const e = this.contentNode,
      t = null == e ? void 0 : e.parent;
    if (null == e || !e.isValid || null == t || !t.isValid) return;
    const i = __rea_outer_P(e, t, {
      excludedNodes: this.resolveContentScrollExcludedNodes()
    });
    i && (this.contentScrollBounds = i, this.applyContentScroll(e.position.x, !1), this.snapBackContentScroll());
  }
  scrollContentToStart() {
    this.computeScrollBounds(), this.applyContentScroll(this.contentScrollBounds.maxX, !1);
  }
  resolveContentScrollExcludedNodes() {
    const e = new Set(),
      t = this.Lich5_node;
    return null != t && t.isValid && !t.active && e.add(t), e;
  }
  enterPhase1() {
    this.phase = 1, this.setNodeActive(this.namesNode, !0), this.registerInteractionHandlers(), __rea_outer_w.getInstance().refreshGameProgress();
  }
  enterPhase2() {
    this.phase >= 2 || (this.phase = 2, this.winstate = !0, this.unregisterInteractionHandlers(), this.stopDecorationAnimations(), __rea_outer_w.getInstance().pauseTimer(), this.scheduleOnce(() => {
      this.isValid && this.finishPhase2Presentation();
    }, 2));
  }
  finishPhase2Presentation() {
    this.playBubbleLine(Ee, Ee), this.setNodeActive(this.bgNode1, !1), this.setNodeActive(this.bgNode2, !0), this.setNodeActive(this.click_rootNode, !1), this.setBlockSpriteBlocking(!0), this.scheduleOnce(() => {
      this.isValid && this.hideBubble();
    }, 2), this.showLevelSuccess(3);
  }
  prepareSpritesForPhase0() {
    this.cacheTipLabelRestPosition(), this.setNodeActive(this.Lich5_node, !1), this.hideLich5CloakChild(), this.DragItemPair_arr.forEach(e => {
      this.setSpriteNodeActive(e.dragMoveSprite, !1), this.setSpriteNodeActive(e.dragSprite, !0);
    });
  }
  playNamesNodeIntroAnimation() {
    const e = this.namesNode;
    if (null == e || !e.isValid) return;
    this.setNodeActive(e, !0), this.namesNodeTargetPos = e.position.clone();
    const t = new __rea_outer_c(this.namesNodeTargetPos.x, this.namesNodeTargetPos.y + 200, this.namesNodeTargetPos.z);
    e.setPosition(t), __rea_outer_m(e), __rea_outer_p(e).to(.5, {
      position: this.namesNodeTargetPos
    }, {
      easing: "backIn"
    }).start();
  }
  shuffleContentNodes() {
    const e = this.contentNode,
      t = this.Lich5_node;
    if (null == e || !e.isValid) return;
    const i = e.children.filter(e => e !== t);
    for (let e = i.length - 1; e > 0; e -= 1) {
      const t = Math.floor(Math.random() * (e + 1)),
        o = i[e].getSiblingIndex(),
        n = i[t].getSiblingIndex();
      i[e].setSiblingIndex(n), i[t].setSiblingIndex(o);
    }
    null != t && t.isValid && (t.setSiblingIndex(e.children.length - 1), t.active = !1);
  }
  startDecorationAnimations() {
    this.animationSprites.forEach((e, t) => {
      const i = null == e ? void 0 : e.node;
      null != i && i.isValid && __rea_outer_A.RoseBreath_tag(i, 1, .02, .7, 0, 300 + t);
    });
  }
  stopDecorationAnimations() {
    this.animationSprites.forEach((e, t) => {
      const i = null == e ? void 0 : e.node;
      null != i && i.isValid && (__rea_outer_m(i), __rea_outer_g.stopAllByTag(300 + t));
    });
  }
  stopAllLevelSpriteTweens() {
    var e, t;
    __rea_outer__(this.animationSprites), this.DragItemPair_arr.forEach(e => {
      __rea_outer__([e.dragSprite, e.dragMoveSprite]);
    }), null != (e = this.namesNode) && e.isValid && __rea_outer_m(this.namesNode), null != (t = this.lich_cloakNode) && t.isValid && __rea_outer_m(this.lich_cloakNode), this.stopWrongDropTipAnimation();
  }
  registerInteractionHandlers() {
    this.disableScrollViewComponent(), this.node.on(__rea_outer_s.EventType.TOUCH_START, this.onLevelTouchStart, this), this.node.on(__rea_outer_s.EventType.TOUCH_MOVE, this.onLevelTouchMove, this), this.node.on(__rea_outer_s.EventType.TOUCH_END, this.onLevelTouchEnd, this), this.node.on(__rea_outer_s.EventType.TOUCH_CANCEL, this.onLevelTouchCancel, this);
  }
  unregisterInteractionHandlers() {
    var e;
    null != (e = this.node) && e.isValid && (this.node.off(__rea_outer_s.EventType.TOUCH_START, this.onLevelTouchStart, this), this.node.off(__rea_outer_s.EventType.TOUCH_MOVE, this.onLevelTouchMove, this), this.node.off(__rea_outer_s.EventType.TOUCH_END, this.onLevelTouchEnd, this), this.node.off(__rea_outer_s.EventType.TOUCH_CANCEL, this.onLevelTouchCancel, this), this.resetTouchSession(), this.resetDragState(!0));
  }
  resolveTouchMode(e, t) {
    const i = e.x - this.touchStartPoint.x,
      o = e.y - this.touchStartPoint.y,
      n = Math.abs(i),
      s = Math.abs(o),
      l = n > 12 || s > 12;
    return this.candidateDragPair && l && this.shouldStartDrag(n, s) ? (this.touchMode = "drag", this.beginDragInteraction(this.candidateDragPair, t), !0) : !!(this.isTouchStartedInList && n > 12) && (this.touchMode = "scroll", !0);
  }
  shouldStartDrag(e, t) {
    return !this.isTouchStartedInList || t >= e;
  }
  resetTouchSession() {
    this.touchMode = "none", this.candidateDragPair = null, this.isTouchStartedInList = !1;
  }
  applyContentScroll(e, t = !0) {
    const i = this.contentNode;
    null != i && i.isValid && __rea_outer_D(i, e, this.contentScrollBounds, t, .2);
  }
  snapBackContentScroll() {
    const e = this.contentNode;
    null != e && e.isValid && __rea_outer_I(e, this.contentScrollBounds, .3);
  }
  hitTestDragPair(e) {
    for (const t of this.DragItemPair_arr) {
      const i = t.dragSprite,
        o = null == i ? void 0 : i.node;
      if (null != o && o.activeInHierarchy && this.isPointInsideSprite(i, e) && this.canInteractClueType(t.clueType)) return t;
    }
    return null;
  }
  beginDragInteraction(e, t) {
    var i, o;
    const n = e.dragSprite,
      s = e.dragMoveSprite;
    if (null == n || null == (i = n.node) || !i.isValid || null == s || null == (o = s.node) || !o.isValid) return;
    const l = s.node,
      r = this.cluetypeposDic.get(e.clueType),
      a = (null == r ? void 0 : r.parent) ?? l.parent;
    if (null == a || !a.isValid) return;
    const h = (null == r ? void 0 : r.localPosition) ?? l.position.clone(),
      c = (null == r ? void 0 : r.siblingIndex) ?? l.getSiblingIndex(),
      u = n.node.worldPosition.clone();
    this.isDualVisibleDragClue(e.clueType) ? (this.setSpriteNodeActive(n, !0), this.setSpriteNodeActive(s, !0)) : (this.setSpriteNodeActive(n, !1), this.setSpriteNodeActive(s, !0)), e.clueType === Re.ClueType_14 && this.showLichCloakPreview(), l.setWorldPosition(u);
    const d = this.elevateDragMoveSpriteToTop(l),
      p = this.calculateTouchOffset(t, l, d);
    this.setDragNodePositionFromTouch(t, l, d, p), this.activeDragState = {
      pair: e,
      activeSprite: s,
      dragParent: d,
      originParent: a,
      originPosition: h,
      originSiblingIndex: c,
      touchOffset: p,
      dragSlotNode: n.node.parent
    };
  }
  finishDragInteraction(e) {
    const t = this.activeDragState;
    if (!t) return;
    const i = this.getTouchWorldPoint(e);
    if (this.isDragReleaseInValidArea(t.pair, i)) return this.activeDragState = null, void this.handleDragComplete(t.pair);
    this.playWrongDropFeedback(), this.resetDragState(!0);
  }
  resetDragState(e) {
    if (!this.activeDragState) return;
    const t = this.activeDragState,
      i = t.pair;
    if (e) {
      const e = t.activeSprite.node;
      null != e && e.isValid && (__rea_outer_m(e), this.restoreDragMoveNodeToRecord(i, e, t)), this.setSpriteNodeActive(i.dragMoveSprite, !1), this.setSpriteNodeActive(i.dragSprite, !0), i.clueType === Re.ClueType_14 && this.hideLichCloakPreview();
    }
    this.activeDragState = null;
  }
  handleSpecialDragMove(e) {
    e.pair.clueType !== Re.ClueType_14 ? this.isDualVisibleDragClue(e.pair.clueType) && (this.setSpriteNodeActive(e.pair.dragSprite, !0), this.setSpriteNodeActive(e.pair.dragMoveSprite, !0)) : this.showLichCloakPreview();
  }
  isDualVisibleDragClue(e) {
    return e === Re.ClueType_12 || e === Re.ClueType_16 || e === Re.ClueType_13;
  }
  handleDragComplete(e) {
    const t = e.clueType;
    t === Re.ClueType_13 ? this.executeClueType13Complete(e) : t === Re.ClueType_12 || t === Re.ClueType_16 ? (this.swapWitchAndVampireNodes(), this.removeLinkedSwapDragSlots()) : t === Re.ClueType_14 ? this.executeClueType14Complete(e) : (this.removeDragSlotNode(e), this.flyDragMoveSpriteToClueOrigin(e)), this.markClueTypeDone(t), t === Re.ClueType_1 && this.unlockClueType(Re.ClueType_4), this.TryQuickWin() || this.checkPhase1Complete();
  }
  executeClueType14Complete(e) {
    this.hideLichCloakPreview(), this.setNodeActive(this.lich_cloakTargetNode, !0), this.removeDragSlotNode(e), this.flyDragMoveSpriteToClueOrigin(e);
  }
  showLichCloakPreview() {
    const e = this.lich_cloakNode;
    null != e && e.isValid && (e.setScale(1, 1, 1), this.setNodeActive(e, !0));
  }
  hideLichCloakPreview() {
    this.setNodeActive(this.lich_cloakNode, !1);
  }
  executeClueType13Complete(e) {
    this.setNodeActive(e.triggerNode, !1), this.setSpriteNodeActive(this.curtain_1Sprite, !1), this.setSpriteNodeActive(e.dragSprite, !1), this.setSpriteNodeActive(e.dragMoveSprite, !1), this.unlockLichClueTypes(), this.insertLich5AtFirstSlot(() => {
      this.isValid && this.flyCloakToLich5Node();
    });
  }
  insertLich5AtFirstSlot(e) {
    const t = this.contentNode,
      i = this.contentSlotLayout,
      o = this.Lich5_node;
    if (null == t || !t.isValid || !i || null == o || !o.isValid) return this.setNodeActive(o, !0), this.hideLich5CloakChild(), this.scrollContentToStart(), void (null == e || e());
    const n = t.children.filter(e => e.isValid && e !== o).slice().sort((e, t) => e.position.x - t.position.x);
    this.setNodeActive(o, !0), this.hideLich5CloakChild(), o.setSiblingIndex(0);
    let s = 0;
    const l = () => {
        s -= 1, s <= 0 && (this.scrollContentToStart(), null == e || e());
      },
      r = (e, t) => {
        __rea_outer_m(e);
        const i = e.position;
        Math.abs(i.x - t.x) < .5 && Math.abs(i.y - t.y) < .5 ? e.setPosition(t) : (s += 1, __rea_outer_p(e).to(Oe, {
          position: t
        }, {
          easing: "sineOut"
        }).call(l).start());
      },
      a = new __rea_outer_c(i.startX, i.y, o.position.z);
    r(o, a), n.forEach((e, t) => {
      const o = i.startX + (t + 1) * i.spacing,
        n = new __rea_outer_c(o, i.y, e.position.z);
      r(e, n);
    }), 0 === s && (this.scrollContentToStart(), null == e || e());
  }
  flyCloakToLich5Node() {
    var e;
    const t = this.lich_cloakNode,
      i = this.Lich5_node;
    if (null == t || !t.isValid) return;
    this.setNodeActive(t, !0), t.setScale(1, 1, 1), this.elevateNodeToTopLayer(t);
    const o = t.parent;
    if (null == o || !o.isValid) return;
    t.setPosition(this.getScreenCenterLocalPosition(o));
    const n = null != i && i.isValid ? i.worldPosition.clone() : (null == (e = this.contentNode) ? void 0 : e.worldPosition.clone()) ?? __rea_outer_c.ZERO,
      s = o.getComponent(__rea_outer_v),
      l = s ? s.convertToNodeSpaceAR(n) : n.clone();
    __rea_outer_m(t), __rea_outer_p(t).parallel(__rea_outer_p().to(1, {
      position: l
    }), __rea_outer_p().to(1, {
      scale: new __rea_outer_c(0, 0, 1)
    })).call(() => {
      this.isValid && (this.setNodeActive(t, !1), this.showLich5CloakChild());
    }).start();
  }
  resolveLich5CloakNode() {
    const e = this.Lich5_node;
    return null != e && e.isValid ? e.getChildByName("lich_cloak") : null;
  }
  hideLich5CloakChild() {
    this.setNodeActive(this.resolveLich5CloakNode(), !1);
  }
  showLich5CloakChild() {
    this.setNodeActive(this.resolveLich5CloakNode(), !0);
  }
  elevateNodeToTopLayer(e) {
    const t = this.resolveDragTopLayer(),
      i = e.worldPosition.clone();
    e.setParent(t), e.setWorldPosition(i), e.setSiblingIndex(t.children.length - 1);
  }
  getScreenCenterLocalPosition(e) {
    const t = e.getComponent(__rea_outer_v);
    if (!t) return __rea_outer_c.ZERO.clone();
    const i = __rea_outer_T.getVisibleSize(),
      o = new __rea_outer_c(.5 * i.width, .5 * i.height, 0);
    return t.convertToNodeSpaceAR(o);
  }
  removeDragSlotNode(e) {
    var t;
    const i = null == (t = e.dragSprite) ? void 0 : t.node,
      o = (null == i ? void 0 : i.parent) ?? null;
    if (null == o || !o.isValid || o === this.contentNode) return;
    const n = o.parent === this.contentNode;
    o.removeFromParent(), o.destroy(), n && this.compactContentNodeChildren();
  }
  compactContentNodeChildren() {
    const e = this.contentNode,
      t = this.contentSlotLayout,
      i = this.Lich5_node;
    if (null == e || !e.isValid || !t) return;
    const o = e.children.filter(e => e.isValid && e !== i).slice().sort((e, t) => e.position.x - t.position.x),
      n = (null == i ? void 0 : i.isValid) && i.active;
    if (n) {
      i.setSiblingIndex(0);
      const e = new __rea_outer_c(t.startX, t.y, i.position.z);
      __rea_outer_m(i), Math.abs(i.position.x - t.startX) < .5 ? i.setPosition(e) : __rea_outer_p(i).to(Oe, {
        position: e
      }, {
        easing: "sineOut"
      }).start();
    }
    o.forEach((e, i) => {
      const o = n ? i + 1 : i,
        s = t.startX + o * t.spacing,
        l = e.position,
        r = new __rea_outer_c(s, t.y, l.z);
      __rea_outer_m(e), Math.abs(l.x - s) < .5 ? e.setPosition(r) : __rea_outer_p(e).to(Oe, {
        position: r
      }, {
        easing: "sineOut"
      }).start();
    }), this.scheduleOnce(() => {
      this.isValid && this.computeScrollBounds();
    }, Oe);
  }
  removeLinkedSwapDragSlots() {
    this.DragItemPair_arr.forEach(e => {
      e.clueType !== Re.ClueType_12 && e.clueType !== Re.ClueType_16 || (this.restoreDragMoveNodeToRecord(e), this.setSpriteNodeActive(e.dragSprite, !1), this.setSpriteNodeActive(e.dragMoveSprite, !1));
    });
  }
  elevateDragMoveSpriteToTop(e) {
    const t = this.resolveDragTopLayer(),
      i = e.worldPosition.clone();
    return e.setParent(t), e.setWorldPosition(i), e.setSiblingIndex(t.children.length - 1), t;
  }
  resolveDragTopLayer() {
    return this.node;
  }
  restoreDragMoveNodeToRecord(e, t, i) {
    var o;
    const n = t ?? (null == (o = e.dragMoveSprite) ? void 0 : o.node);
    if (null == n || !n.isValid) return;
    const s = this.cluetypeposDic.get(e.clueType),
      l = (null == s ? void 0 : s.parent) ?? (null == i ? void 0 : i.originParent);
    if (null == l || !l.isValid) return;
    const r = (null == s ? void 0 : s.localPosition) ?? (null == i ? void 0 : i.originPosition) ?? n.position.clone(),
      a = (null == s ? void 0 : s.siblingIndex) ?? (null == i ? void 0 : i.originSiblingIndex) ?? 0;
    n.setParent(l), n.setPosition(r);
    const h = Math.min(a, Math.max(l.children.length - 1, 0));
    n.setSiblingIndex(h);
  }
  flyDragMoveSpriteToClueOrigin(e, t) {
    var i;
    const o = e.dragMoveSprite,
      n = null == o ? void 0 : o.node,
      s = this.cluetypeposDic.get(e.clueType);
    if (null == n || !n.isValid || null == s || null == (i = s.parent) || !i.isValid) return this.setSpriteNodeActive(o, !1), void (null == t || t());
    const l = s.parent.getComponent(__rea_outer_v),
      r = l ? l.convertToWorldSpaceAR(s.localPosition) : s.parent.worldPosition.clone(),
      a = n.parent;
    if (null == a || !a.isValid) return this.restoreDragMoveNodeToRecord(e, n), this.setSpriteNodeActive(o, !1), void (null == t || t());
    const h = a.getComponent(__rea_outer_v),
      c = h ? h.convertToNodeSpaceAR(r) : r.clone();
    __rea_outer_m(n), __rea_outer_p(n).to(.35, {
      position: c
    }, {
      easing: "sineOut"
    }).call(() => {
      this.isValid && n.isValid && (this.restoreDragMoveNodeToRecord(e, n), this.setSpriteNodeActive(o, !0), null == t || t());
    }).start();
  }
  swapWitchAndVampireNodes() {
    const e = this.witchnode,
      t = this.vampireNode;
    if (null == e || !e.isValid || null == t || !t.isValid) return;
    const i = t.position.clone(),
      o = e.position.clone();
    __rea_outer_m(e), __rea_outer_m(t), __rea_outer_p(e).to(.25, {
      position: i
    }, {
      easing: "sineOut"
    }).start(), __rea_outer_p(t).to(.25, {
      position: o
    }, {
      easing: "sineOut"
    }).start();
  }
  checkPhase1Complete() {
    this.doneItems.length < 15 || (this.isInteractionLocked = !0, this.enterPhase2());
  }
  canInteractClueType(e) {
    const t = this.normalizeClueType(e);
    return !this.isClueTypeDone(t) && !this.isClueTypeLocked(e);
  }
  isClueTypeDone(e) {
    return this.doneItems.indexOf(this.normalizeClueType(e)) >= 0;
  }
  isClueTypeLocked(e) {
    return this.getAllLockIndexs().indexOf(e) >= 0;
  }
  getAllLockIndexs() {
    return [...this.lockIndexs];
  }
  unlockClueType(e) {
    this.removeClueTypeFromLockArray(this.lockIndexs, e);
  }
  unlockLichClueTypes() {
    We.forEach(e => {
      this.removeClueTypeFromLockArray(this.lockIndexs, e);
    });
  }
  removeClueTypeFromLockArray(e, t) {
    const i = e.indexOf(t);
    i >= 0 && e.splice(i, 1);
  }
  markClueTypeDone(e) {
    const t = this.normalizeClueType(e);
    this.isClueTypeDone(t) || (this.doneItems.push(t), this.hasInstallNum = this.doneItems.length, __rea_outer_w.getInstance().refreshGameProgress(), __rea_outer_C.playEffect_1("level12_1"));
  }
  normalizeClueType(e) {
    return e === Re.ClueType_16 ? Re.ClueType_12 : e;
  }
  isDragReleaseInValidArea(e, t) {
    var i, o;
    if (e.clueType === Re.ClueType_12 || e.clueType === Re.ClueType_16) return !0;
    const n = (null == (i = e.dragMoveSprite) ? void 0 : i.node) ?? (null == (o = e.dragSprite) ? void 0 : o.node) ?? null;
    return __rea_outer_S.isDragNearTarget(n, e.triggerNode);
  }
  resolveTipLabelReference() {
    if (this.TipLabel) return;
    const e = this.bubbleNode1;
    null != e && e.isValid && (this.TipLabel = e.getComponentInChildren(__rea_outer_r));
  }
  playBubbleLine(e, t) {
    this.resolveTipLabelReference();
    const i = __rea_outer_b.getInstance(),
      o = this.bubleLabel;
    o && (o.string = i.getKey(e), this.setNodeActive(o.node, !0)), this.setNodeActive(this.bubbleNode1, !0), __rea_outer_C.playEffect_1(t);
  }
  hideBubble() {
    var e;
    this.setNodeActive(this.bubbleNode1, !1), this.setNodeActive((null == (e = this.TipLabel) ? void 0 : e.node) ?? null, !1);
  }
  cacheTipLabelRestPosition() {
    var e;
    const t = null == (e = this.TipLabel) ? void 0 : e.node;
    null != t && t.isValid && (this.tipLabelRestPosition = t.position.clone());
  }
  playWrongDropFeedback() {
    __rea_outer_C.playEffect_1("level12_2"), __rea_outer_w.getInstance().penaltyTime(10), this.playWrongDropTipAnimation();
  }
  playWrongDropTipAnimation() {
    var e;
    const t = null == (e = this.TipLabel) ? void 0 : e.node;
    if (null == t || !t.isValid) return;
    this.stopWrongDropTipAnimation(), this.isWrongTipPlaying = !0;
    const i = __rea_outer_c.ZERO.clone(),
      o = new __rea_outer_c(0, 300, 0);
    t.setPosition(i), this.setNodeActive(t, !0), __rea_outer_p(t).tag(1200).to(1.5, {
      position: o
    }).call(() => {
      this.isValid && (t.setPosition(this.tipLabelRestPosition), this.setNodeActive(t, !1), this.isWrongTipPlaying = !1);
    }).start();
  }
  stopWrongDropTipAnimation() {
    var e;
    const t = null == (e = this.TipLabel) ? void 0 : e.node;
    null != t && t.isValid && (__rea_outer_m(t), __rea_outer_g.stopAllByTag(1200), t.setPosition(this.tipLabelRestPosition)), this.isWrongTipPlaying = !1, this.setNodeActive(t ?? null, !1);
  }
  resolveNextHintKey() {
    for (const e of this.totalitems) {
      if (this.isClueTypeDone(e)) continue;
      const t = e;
      return this.hint_arr[t - 1] ?? `level12_hint${t}`;
    }
    return null;
  }
  isPointInsideNode(e, t) {
    const i = null == e ? void 0 : e.getComponent(__rea_outer_v);
    return !!i && i.getBoundingBoxToWorld().contains(t);
  }
  isPointInsideSprite(e, t) {
    var i;
    const o = null == e || null == (i = e.node) ? void 0 : i.getComponent(__rea_outer_v);
    return !!o && o.getBoundingBoxToWorld().contains(t);
  }
  getTouchWorldPoint(e) {
    const t = e.getUILocation();
    return new __rea_outer_u(t.x, t.y);
  }
  calculateTouchOffset(e, t, i) {
    const o = this.getTouchLocalPosition(e, i);
    return new __rea_outer_c(t.position.x - o.x, t.position.y - o.y, 0);
  }
  getTouchLocalPosition(e, t) {
    const i = e.getUILocation(),
      o = t.getComponent(__rea_outer_v);
    return o ? o.convertToNodeSpaceAR(new __rea_outer_c(i.x, i.y, 0)) : __rea_outer_c.ZERO.clone();
  }
  setDragNodePositionFromTouch(e, t, i, o) {
    const n = this.getTouchLocalPosition(e, i);
    t.setPosition(n.x + o.x, n.y + o.y, t.position.z);
  }
  setSpriteNodeActive(e, t) {
    null != e && e.node && (!t || __rea_outer_L(e) ? e.node.active = t : e.node.active = !1);
  }
  markAllTasksCompleted() {
    super.markAllTasksCompleted(), this.phase = 2, this.winstate = !0, this.isInteractionLocked = !0, this.doneItems = [...this.totalitems], this.hasInstallNum = this.doneItems.length, this.unregisterInteractionHandlers(), this.stopDecorationAnimations(), this.setNodeActive(this.bgNode1, !1), this.setNodeActive(this.bgNode2, !0);
  }
  setNodeActive(e, t) {
    e && (e.active = t);
  }
}).prototype, "bubbleNode1", [K], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ve = __rea_outer_t(pe.prototype, "bubleLabel", [Z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Te = __rea_outer_t(pe.prototype, "TipLabel", [$], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ye = __rea_outer_t(pe.prototype, "clickItemPair_arr", [j], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), Se = __rea_outer_t(pe.prototype, "DragItemPair_arr", [Q], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), Ce = __rea_outer_t(pe.prototype, "SwipeItemPair_arr", [q], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), be = __rea_outer_t(pe.prototype, "bgNode1", [J], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), fe = __rea_outer_t(pe.prototype, "bgNode2", [Y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Ne = __rea_outer_t(pe.prototype, "namesNode", [ee], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), me = __rea_outer_t(pe.prototype, "witchnode", [te], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), _e = __rea_outer_t(pe.prototype, "vampireNode", [ie], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Le = __rea_outer_t(pe.prototype, "lich_cloakNode", [oe], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Pe = __rea_outer_t(pe.prototype, "lich_cloakTargetNode", [ne], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), De = __rea_outer_t(pe.prototype, "scrollView", [se], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Ie = __rea_outer_t(pe.prototype, "contentNode", [le], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), we = __rea_outer_t(pe.prototype, "Lich5_node", [re], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Ae = __rea_outer_t(pe.prototype, "click_rootNode", [ae], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ke = __rea_outer_t(pe.prototype, "BlockSprite", [he], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Ve = __rea_outer_t(pe.prototype, "curtain_1Sprite", [ce], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), xe = __rea_outer_t(pe.prototype, "animationSprites", [ue], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), de = pe)) || de);
__rea_outer_o._RF.pop();
export { __recovered_export_0 as ClueType, __recovered_export_1 as default };
