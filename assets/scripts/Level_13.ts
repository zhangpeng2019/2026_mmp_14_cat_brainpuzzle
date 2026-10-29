// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_13.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { applyDecoratedDescriptor as __rea_outer_t } from "./rollupPluginModLoBabelHelpers";
import { initializerDefineProperty as __rea_outer_i } from "./rollupPluginModLoBabelHelpers";
import { cclegacy as __rea_outer_r } from "cc";
import { Sprite as __rea_outer_n } from "cc";
import { Node as __rea_outer_s } from "cc";
import { Enum as __rea_outer_l } from "cc";
import { Texture2D as __rea_outer_o } from "cc";
import { Label as __rea_outer_a } from "cc";
import { _decorator as __rea_outer_c } from "cc";
import { Tween as __rea_outer_h } from "cc";
import { tween as __rea_outer_p } from "cc";
import { Color as __rea_outer_u } from "cc";
import { UITransform as __rea_outer_d } from "cc";
import { Vec3 as __rea_outer_S } from "cc";
import { Vec2 as __rea_outer_T } from "cc";
import { BlockInputEvents as __rea_outer_g } from "cc";
import { default as __rea_outer_f } from "./LevelBase";
import { default as __rea_outer_y } from "./AudioManager";
import { I18nController as __rea_outer_b } from "./i18n-controller";
import { UIManager as __rea_outer_C } from "./ui-manager";
import { UIHint as __rea_outer_k } from "./uihint";
import { stopAllTweens as __rea_outer_v } from "./CocosCompat";
import { stopSpritesTweens as __rea_outer_m } from "./CocosCompat";
import { isSpriteRenderable as __rea_outer_P } from "./CocosCompat";
import { GameController as __rea_outer__ } from "./GameController";
import { default as __rea_outer_w } from "./ActionSystem";
let __recovered_export_0, __recovered_export_1;
var I, A, L, D, N, B, E, z, O, V, U, M, x, R, H, F, W, G, K, $, Q, j, J, q, X, Y, Z, ee, te, ie, re, ne, se, le, oe, ae, ce, he, pe, ue, de, Se, Te, ge, fe, ye, be, Ce, ke, ve, me, Pe, _e, we, Ie, Ae, Le, De, Ne, Be, Ee;
__rea_outer_r._RF.push({}, "44e14LTvl9BDJ2C5k9c8t93", "Level_13", void 0);
const {
    ccclass: ze,
    property: Oe
  } = __rea_outer_c,
  Ve = "13_2",
  Ue = 1.2;
let Me = __recovered_export_0 = function (e) {
  return e[e.ClueType_1 = 0] = "ClueType_1", e[e.ClueType_2 = 1] = "ClueType_2", e[e.ClueType_3 = 2] = "ClueType_3", e[e.ClueType_4 = 3] = "ClueType_4", e[e.ClueType_5 = 4] = "ClueType_5", e[e.ClueType_6 = 5] = "ClueType_6", e[e.ClueType_7 = 6] = "ClueType_7", e[e.ClueType_8 = 7] = "ClueType_8", e;
}({});
const xe = [Me.ClueType_1, Me.ClueType_3, Me.ClueType_4, Me.ClueType_5, Me.ClueType_6, Me.ClueType_7, Me.ClueType_8];
var Re = function (e) {
  return e[e.Up = 0] = "Up", e[e.Down = 1] = "Down", e[e.Left = 2] = "Left", e[e.Right = 3] = "Right", e;
}(Re || {});
let He = (I = ze("Level_13_DragItemPair"), A = Oe(__rea_outer_n), L = Oe(__rea_outer_n), D = Oe(__rea_outer_s), N = Oe({
    type: __rea_outer_l(Me),
    tooltip: "线索类型"
  }), I((z = __rea_outer_t((E = class {
    constructor() {
      __rea_outer_i(this, "ID", z, this), __rea_outer_i(this, "dragSprite", O, this), __rea_outer_i(this, "dragMoveSprite", V, this), __rea_outer_i(this, "triggerNode", U, this), __rea_outer_i(this, "clueType", M, this);
    }
  }).prototype, "ID", [Oe], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: function () {
      return 0;
    }
  }), O = __rea_outer_t(E.prototype, "dragSprite", [A], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: function () {
      return null;
    }
  }), V = __rea_outer_t(E.prototype, "dragMoveSprite", [L], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: function () {
      return null;
    }
  }), U = __rea_outer_t(E.prototype, "triggerNode", [D], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: function () {
      return null;
    }
  }), M = __rea_outer_t(E.prototype, "clueType", [N], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: function () {
      return Me.ClueType_1;
    }
  }), B = E)) || B),
  Fe = (x = ze("Level_13_ClickItemPair"), R = Oe(__rea_outer_n), H = Oe(__rea_outer_o), F = Oe(__rea_outer_n), W = Oe({
    type: __rea_outer_l(Me),
    tooltip: "线索类型"
  }), x(($ = __rea_outer_t((K = class {
    constructor() {
      __rea_outer_i(this, "ID", $, this), __rea_outer_i(this, "clickSprite", Q, this), __rea_outer_i(this, "targetTexture", j, this), __rea_outer_i(this, "targetSprite", J, this), __rea_outer_i(this, "clueType", q, this);
    }
  }).prototype, "ID", [Oe], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: function () {
      return 0;
    }
  }), Q = __rea_outer_t(K.prototype, "clickSprite", [R], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: function () {
      return null;
    }
  }), j = __rea_outer_t(K.prototype, "targetTexture", [H], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: function () {
      return null;
    }
  }), J = __rea_outer_t(K.prototype, "targetSprite", [F], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: function () {
      return null;
    }
  }), q = __rea_outer_t(K.prototype, "clueType", [W], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: function () {
      return Me.ClueType_1;
    }
  }), G = K)) || G);
__recovered_export_1 = (X = ze("Level_13"), Y = Oe(__rea_outer_s), Z = Oe(__rea_outer_a), ee = Oe({
  type: [Fe]
}), te = Oe({
  type: [Fe]
}), ie = Oe({
  type: [He]
}), re = Oe({
  type: [He]
}), ne = Oe(__rea_outer_n), se = Oe(__rea_outer_n), le = Oe(__rea_outer_n), oe = Oe(__rea_outer_n), ae = Oe(__rea_outer_n), ce = Oe(__rea_outer_n), he = Oe(__rea_outer_n), pe = Oe(__rea_outer_n), ue = Oe(__rea_outer_n), de = Oe(__rea_outer_n), Se = Oe(__rea_outer_n), X((fe = __rea_outer_t((ge = class extends __rea_outer_f {
  constructor(...e) {
    super(...e), __rea_outer_i(this, "bubbleNode1", fe, this), __rea_outer_i(this, "TipLabel", ye, this), __rea_outer_i(this, "clickItemPair_arr", be, this), __rea_outer_i(this, "targetclickItemPair_arr", Ce, this), __rea_outer_i(this, "DragItemPair_arr", ke, this), __rea_outer_i(this, "SwipeItemPair_arr", ve, this), __rea_outer_i(this, "animationSprites", me, this), __rea_outer_i(this, "BlockSprite", Pe, this), __rea_outer_i(this, "ip_faceSprite", _e, this), __rea_outer_i(this, "door1Sprite", we, this), __rea_outer_i(this, "door2Sprite", Ie, this), __rea_outer_i(this, "curtainSprite1", Ae, this), __rea_outer_i(this, "curtainSprite2", Le, this), __rea_outer_i(this, "windowSprite", De, this), __rea_outer_i(this, "pipeSprite", Ne, this), __rea_outer_i(this, "tableSprite", Be, this), __rea_outer_i(this, "tableEndSprite", Ee, this), this.phase = 0, this.winstate = !1, this.lockIndexs = [], this.totalitems = [], this.doneItems = [], this.isInteractionLocked = !1, this.activeSwipeState = null, this.activeClickPair = null, this.onLevelTouchStart = e => {
      if (1 !== this.phase || this.isInteractionLocked) return;
      const t = this.getTouchWorldPoint(e),
        i = this.findSwipePairAtPoint(t);
      if (i) {
        const e = this.canProcessSwipePair(i),
          r = this.canStartElectricButtonDrag(i);
        return void ((e || r) && (this.activeSwipeState = {
          pair: i,
          startLocation: t.clone()
        }));
      }
      const r = this.findUnlockClickPairAtPoint(t);
      if (r) return void (this.activeClickPair = r);
      const n = this.findTargetClickPairAtPoint(t);
      n && (this.activeClickPair = n);
    }, this.onLevelTouchMove = e => {
      1 === this.phase && this.isInteractionLocked;
    }, this.onLevelTouchEnd = e => {
      if (1 !== this.phase || this.isInteractionLocked) this.resetTouchSession();else if (this.activeSwipeState) this.finishSwipeInteraction(e);else if (this.activeClickPair) {
        const t = this.activeClickPair;
        this.activeClickPair = null;
        const i = this.getTouchWorldPoint(e);
        this.dispatchClickPair(t, i);
      }
    }, this.onLevelTouchCancel = () => {
      this.resetTouchSession();
    };
  }
  onLoad() {
    super.onLoad(), this.resolveTipLabelReference(), this.resolveBlockSpriteReference(), this.initializeTotalItems(), this.allItemNum = this.totalitems.length, this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.enterPhase0();
  }
  onDestroy() {
    this.unscheduleAllCallbacks(), this.unregisterInteractionHandlers(), this.stopDecorationAnimations(), this.stopAllLevelTweens(), this.activeSwipeState = null, this.activeClickPair = null;
  }
  showHint() {
    if (1 !== this.phase) return;
    const e = this.resolveNextHintKey();
    if (!e) return;
    const t = __rea_outer_b.getInstance().getKey(e);
    __rea_outer_C.getInstance().showView(__rea_outer_k, void 0, {
      body: t
    });
  }
  getGameProgressSnapshot() {
    const e = this.totalitems.length,
      t = this.doneItems.length;
    return {
      progress: e > 0 ? t / e : 0,
      label: `${t}/${e}`
    };
  }
  markAllTasksCompleted() {
    super.markAllTasksCompleted(), this.phase = 2, this.winstate = !0, this.doneItems = [...this.totalitems], this.isInteractionLocked = !0, this.unregisterInteractionHandlers(), this.stopDecorationAnimations(), this.hideAllInteractionAreas(), this.hideBubble();
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.doneItems = [], this.lockIndexs = [...xe], this.isInteractionLocked = !1, this.activeSwipeState = null, this.activeClickPair = null, this.hasInstallNum = 0, this.initializeTotalItems(), this.hideBubble(), this.prepareSpritesForPhase0();
  }
  initializeTotalItems() {
    this.totalitems = [Me.ClueType_1, Me.ClueType_2, Me.ClueType_3, Me.ClueType_4, Me.ClueType_5, Me.ClueType_6, Me.ClueType_7, Me.ClueType_8];
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_y.playMusic("bgm5", !0, .5), this.setBlockSpriteBlocking(!0), this.startDecorationAnimations(), this.scheduleOnce(() => {
      this.isValid && 0 === this.phase && (this.playBubbleLine("13_1", "13_1"), this.scheduleOnce(() => {
        this.isValid && 0 === this.phase && (this.hideBubble(), this.setBlockSpriteBlocking(!1), this.enterPhase1());
      }, 2.5));
    }, .25);
  }
  skipOpeningToPlay() {
    return 0 === this.phase && (this.stopOpeningDialogue(), this.hideBubble(), this.setBlockSpriteBlocking(!1), this.enterPhase1(), !0);
  }
  enterPhase1() {
    0 === this.phase && (this.phase = 1, this.registerInteractionHandlers(), __rea_outer__.getInstance().refreshGameProgress());
  }
  enterPhase2() {
    this.phase >= 2 || (this.phase = 2, this.unregisterInteractionHandlers(), this.stopDecorationAnimations());
  }
  prepareSpritesForPhase0() {
    this.clickItemPair_arr.forEach(e => {
      e.clueType !== Me.ClueType_5 && this.setSpriteNodeActive(e.targetSprite, !1);
    }), this.targetclickItemPair_arr.forEach(e => {
      this.setSpriteNodeActive(e.clickSprite, !0), this.setSpriteAlpha(e.clickSprite, 1), this.configureTargetClickSpriteHitTest(e.clickSprite);
    }), this.setSpriteNodeActive(this.door1Sprite, !0), this.setSpriteNodeActive(this.door2Sprite, !1), this.setSpriteNodeActive(this.curtainSprite1, !0), this.setSpriteNodeActive(this.curtainSprite2, !1), this.setSpriteNodeActive(this.windowSprite, !1), this.setSpriteNodeActive(this.pipeSprite, !1), this.setSpriteNodeActive(this.tableSprite, !0), this.setSpriteNodeActive(this.ip_faceSprite, !0), this.SwipeItemPair_arr.forEach(e => {
      this.setSpriteNodeActive(e.dragSprite, !0), this.setSpriteNodeActive(e.dragMoveSprite, !1), this.configureTargetClickSpriteHitTest(e.dragSprite);
    }), this.DragItemPair_arr.forEach(e => {
      this.setSpriteNodeActive(e.dragMoveSprite, !1), this.setSpriteNodeActive(e.dragSprite, !0);
    });
  }
  startDecorationAnimations() {
    this.animationSprites.forEach((e, t) => {
      const i = null == e ? void 0 : e.node;
      null != i && i.isValid && __rea_outer_w.RoseBreath_tag(i, 1, .02, .7, 0, 300 + t);
    });
  }
  stopDecorationAnimations() {
    this.animationSprites.forEach((e, t) => {
      const i = null == e ? void 0 : e.node;
      null != i && i.isValid && (__rea_outer_v(i), __rea_outer_h.stopAllByTag(300 + t));
    });
  }
  stopAllLevelTweens() {
    var e;
    null != (e = this.bubbleNode1) && e.isValid && __rea_outer_v(this.bubbleNode1), __rea_outer_m([this.door1Sprite, this.door2Sprite, this.curtainSprite1, this.curtainSprite2, this.windowSprite, this.pipeSprite, this.tableSprite, this.ip_faceSprite, this.BlockSprite]), this.clickItemPair_arr.forEach(e => {
      __rea_outer_m([e.clickSprite, e.targetSprite]);
    }), this.targetclickItemPair_arr.forEach(e => {
      __rea_outer_m([e.clickSprite]);
    }), this.SwipeItemPair_arr.forEach(e => {
      __rea_outer_m([e.dragSprite, e.dragMoveSprite]);
    });
  }
  registerInteractionHandlers() {
    this.node.on(__rea_outer_s.EventType.TOUCH_START, this.onLevelTouchStart, this), this.node.on(__rea_outer_s.EventType.TOUCH_MOVE, this.onLevelTouchMove, this), this.node.on(__rea_outer_s.EventType.TOUCH_END, this.onLevelTouchEnd, this), this.node.on(__rea_outer_s.EventType.TOUCH_CANCEL, this.onLevelTouchCancel, this);
  }
  unregisterInteractionHandlers() {
    var e;
    null != (e = this.node) && e.isValid && (this.node.off(__rea_outer_s.EventType.TOUCH_START, this.onLevelTouchStart, this), this.node.off(__rea_outer_s.EventType.TOUCH_MOVE, this.onLevelTouchMove, this), this.node.off(__rea_outer_s.EventType.TOUCH_END, this.onLevelTouchEnd, this), this.node.off(__rea_outer_s.EventType.TOUCH_CANCEL, this.onLevelTouchCancel, this), this.resetTouchSession());
  }
  resetTouchSession() {
    this.activeSwipeState = null, this.activeClickPair = null;
  }
  dispatchClickPair(e, t) {
    const i = e.clickSprite;
    i && !this.isPointInsideClickSprite(i, t) || (this.isUnlockClickPair(e) ? this.handleUnlockClickPair(e) : this.isTargetClickPair(e) && this.handleTargetClickPair(e));
  }
  isUnlockClickPair(e) {
    return this.clickItemPair_arr.indexOf(e) >= 0;
  }
  isTargetClickPair(e) {
    return this.targetclickItemPair_arr.indexOf(e) >= 0;
  }
  handleUnlockClickPair(e) {
    var t;
    if (this.isClueTypeDone(e.clueType) || !this.isClueTypeLocked(e.clueType)) return;
    const i = e.targetSprite;
    null != i && null != (t = i.node) && t.isValid && (e.clueType === Me.ClueType_5 ? this.setSpriteNodeActive(i, !1) : this.setSpriteNodeActive(i, !0), this.unlockClueType(e.clueType), this.hideUnlockTouchArea(e.clueType));
  }
  handleTargetClickPair(e) {
    var t;
    const i = e.clueType;
    if (this.isClueTypeDone(i) || this.isClueTypeLocked(i)) return;
    const r = e.clickSprite;
    null != r && null != (t = r.node) && t.isValid && (this.isInteractionLocked = !0, this.playClickAnimation(r.node, () => {
      this.isValid && (r.node.active = !0, this.setSpriteAlpha(r, 0), this.scheduleOnce(() => {
        if (!this.isValid) return;
        __rea_outer_h.stopAllByTarget(r), __rea_outer_v(r.node);
        const e = r.color;
        __rea_outer_p(r).to(.1, {
          color: new __rea_outer_u(e.r, e.g, e.b, 255)
        }).call(() => {
          this.isValid && (this.markClueTypeDone(i), this.isInteractionLocked = !1, this.TryQuickWin() || this.checkPhase1Complete());
        }).start();
      }, .1));
    }));
  }
  finishSwipeInteraction(e) {
    const t = this.activeSwipeState;
    if (this.activeSwipeState = null, !t) return;
    const i = t.pair,
      r = this.getTouchWorldPoint(e);
    if (this.canProcessSwipePair(i)) {
      const e = this.resolveSwipeTypeForClue(i.clueType);
      if (this.isSwipeMatchingType(t.startLocation, r, e)) return void this.applySwipeAction(i);
    }
    this.canStartElectricButtonDrag(i) && this.isPointInsideNode(i.triggerNode, r) && this.handleElectricButtonDrag(i);
  }
  handleElectricButtonDrag(e) {
    this.canDragElectricButton() && (this.hideSwipePairDragSprite(e), this.unlockClueType(Me.ClueType_4), this.refreshProgress(), this.TryQuickWin() || this.checkPhase1Complete());
  }
  resolveSwipeTypeForClue(e) {
    return e === Me.ClueType_8 || e === Me.ClueType_6 || e === Me.ClueType_1 ? Re.Right : Re.Left;
  }
  applySwipeAction(e) {
    switch (e.clueType) {
      case Me.ClueType_1:
        this.unlockClueType(Me.ClueType_1), this.setSpriteNodeActive(this.windowSprite, !0);
        break;
      case Me.ClueType_6:
        this.unlockClueType(Me.ClueType_6), this.moveTableToEndPosition();
        break;
      case Me.ClueType_7:
        this.unlockClueType(Me.ClueType_7), this.setSpriteNodeActive(this.door1Sprite, !1), this.setSpriteNodeActive(this.door2Sprite, !0);
        break;
      case Me.ClueType_8:
        this.unlockClueType(Me.ClueType_8), this.setSpriteNodeActive(this.curtainSprite1, !1), this.setSpriteNodeActive(this.curtainSprite2, !0);
        break;
      default:
        return;
    }
    this.hideSwipePairDragSprite(e), this.refreshProgress();
  }
  hideSwipePairDragSprite(e) {
    this.setSpriteNodeActive(e.dragSprite, !1), this.setSpriteNodeActive(e.dragMoveSprite, !1);
  }
  moveTableToEndPosition() {
    var e, t;
    const i = null == (e = this.tableSprite) ? void 0 : e.node,
      r = null == (t = this.tableEndSprite) ? void 0 : t.node;
    if (null == i || !i.isValid || null == r || !r.isValid) return;
    const n = i.parent;
    if (null == n || !n.isValid) return;
    const s = n.getComponent(__rea_outer_d),
      l = s ? s.convertToNodeSpaceAR(r.worldPosition.clone()) : r.position.clone();
    __rea_outer_v(i), __rea_outer_p(i).to(.5, {
      position: l
    }).start();
  }
  checkPhase1Complete() {
    this.doneItems.length < this.totalitems.length || (this.isInteractionLocked = !0, this.unregisterInteractionHandlers(), this.hideAllInteractionAreas(), this.setSpriteNodeActive(this.ip_faceSprite, !1), this.scheduleOnce(() => {
      this.isValid && (this.winstate = !0, this.setBlockSpriteBlocking(!0), this.playBubbleLine(Ve, Ve), this.enterPhase2(), this.showLevelSuccessAfterDialogue(2.5));
    }, 1));
  }
  canProcessSwipePair(e) {
    return !this.isClueTypeDone(e.clueType) && !this.isSwipePairConsumed(e) && !!this.isClueTypeLocked(e.clueType);
  }
  canStartElectricButtonDrag(e) {
    var t;
    return e.clueType === Me.ClueType_1 && !(null == (t = e.triggerNode) || !t.isValid) && this.canDragElectricButton() && !this.isSwipePairConsumed(e);
  }
  isSwipePairConsumed(e) {
    var t;
    const i = e.dragSprite;
    return !(null == i || null == (t = i.node) || !t.isValid || i.node.active);
  }
  canDragElectricButton() {
    return this.isClueTypeLocked(Me.ClueType_4);
  }
  isClueTypeDone(e) {
    return this.doneItems.indexOf(e) >= 0;
  }
  isClueTypeLocked(e) {
    return this.lockIndexs.indexOf(e) >= 0;
  }
  unlockClueType(e) {
    const t = this.lockIndexs.indexOf(e);
    t >= 0 && this.lockIndexs.splice(t, 1);
  }
  markClueTypeDone(e) {
    this.isClueTypeDone(e) || (this.doneItems.push(e), this.hasInstallNum = this.doneItems.length, __rea_outer_y.playEffect_1("level13_1"), this.hideInteractionAreasForClueType(e), this.refreshProgress());
  }
  hideInteractionAreasForClueType(e) {
    this.hideUnlockTouchArea(e), this.hideSwipeDragArea(e);
  }
  hideUnlockTouchArea(e) {
    const t = this.clickItemPair_arr.find(t => t.clueType === e);
    null != t && t.clickSprite && this.setSpriteNodeActive(t.clickSprite, !1);
  }
  hideSwipeDragArea(e) {
    const t = this.SwipeItemPair_arr.find(t => t.clueType === e);
    t && this.hideSwipePairDragSprite(t);
    const i = this.DragItemPair_arr.find(t => t.clueType === e);
    i && this.hideSwipePairDragSprite(i);
  }
  hideAllInteractionAreas() {
    this.clickItemPair_arr.forEach(e => {
      this.hideUnlockTouchArea(e.clueType);
    }), this.SwipeItemPair_arr.forEach(e => {
      this.hideSwipePairDragSprite(e);
    }), this.DragItemPair_arr.forEach(e => {
      this.hideSwipePairDragSprite(e);
    });
  }
  refreshProgress() {
    __rea_outer__.getInstance().refreshGameProgress();
  }
  resolveNextHintKey() {
    for (const e of this.totalitems) if (!this.isClueTypeDone(e)) return `level13_hint${e + 1}`;
    return null;
  }
  findUnlockClickPairAtPoint(e) {
    const t = this.clickItemPair_arr.filter(e => this.isClueTypeLocked(e.clueType) && !this.isClueTypeDone(e.clueType));
    return this.findClickPairAtPoint(t, e);
  }
  findTargetClickPairAtPoint(e) {
    const t = [...this.targetclickItemPair_arr].sort((e, t) => this.getSpriteRenderOrder(t.clickSprite) - this.getSpriteRenderOrder(e.clickSprite));
    for (const r of t) {
      var i;
      if (this.isClueTypeDone(r.clueType) || this.isClueTypeLocked(r.clueType)) continue;
      const t = r.clickSprite;
      if (null != t && null != (i = t.node) && i.active && this.isPointInsideClickSprite(t, e)) return r;
    }
    return null;
  }
  findClickPairAtPoint(e, t) {
    const i = [...e].sort((e, t) => this.getSpriteRenderOrder(t.clickSprite) - this.getSpriteRenderOrder(e.clickSprite));
    for (const e of i) {
      var r;
      const i = e.clickSprite;
      if (null != i && null != (r = i.node) && r.active && this.isPointInsideClickSprite(i, t)) return e;
    }
    return null;
  }
  findSwipePairAtPoint(e) {
    const t = [...this.SwipeItemPair_arr].sort((e, t) => this.getSpriteRenderOrder(t.dragSprite) - this.getSpriteRenderOrder(e.dragSprite));
    for (const i of t) {
      const t = i.dragSprite;
      if (this.isPointInsideDragSprite(t, e)) return i;
    }
    return null;
  }
  playClickAnimation(e, t) {
    const i = e.scale.clone();
    __rea_outer_v(e), __rea_outer_p(e).to(.125, {
      scale: new __rea_outer_S(1.1 * i.x, 1.1 * i.y, i.z)
    }).to(.125, {
      scale: i
    }).call(() => {
      this.isValid && t();
    }).start();
  }
  isSwipeMatchingType(e, t, i) {
    const r = t.x - e.x,
      n = t.y - e.y;
    switch (i) {
      case Re.Up:
        return n >= 10 && Math.abs(n) >= Math.abs(r) * Ue;
      case Re.Down:
        return n <= -10 && Math.abs(n) >= Math.abs(r) * Ue;
      case Re.Left:
        return r <= -10 && Math.abs(r) >= Math.abs(n) * Ue;
      case Re.Right:
        return r >= 10 && Math.abs(r) >= Math.abs(n) * Ue;
      default:
        return !1;
    }
  }
  isPointInsideDragSprite(e, t) {
    var i;
    return !(null == e || null == (i = e.node) || !i.isValid || !e.node.active) && this.isPointInsideNode(e.node, t);
  }
  isPointInsideSprite(e, t) {
    const i = e.node.getComponent(__rea_outer_d);
    return !!i && i.getBoundingBoxToWorld().contains(t);
  }
  isPointInsideClickSprite(e, t) {
    var i;
    return !(null == e || null == (i = e.node) || !i.isValid) && this.isPointInsideNode(e.node, t);
  }
  configureTargetClickSpriteHitTest(e) {
    if (!e) return;
    const t = e;
    "number" == typeof t.alphaThreshold && (t.alphaThreshold = 0);
  }
  isPointInsideNode(e, t) {
    const i = e.getComponent(__rea_outer_d);
    return !!i && i.getBoundingBoxToWorld().contains(t);
  }
  getTouchWorldPoint(e) {
    const t = e.getUILocation();
    return new __rea_outer_T(t.x, t.y);
  }
  getSpriteRenderOrder(e) {
    var t;
    if (null == e || null == (t = e.node) || !t.isValid) return -1;
    let i = 0,
      r = 1,
      n = e.node;
    for (; n;) i += n.getSiblingIndex() * r, r *= 128, n = n.parent;
    return i;
  }
  resolveTipLabelReference() {
    if (this.TipLabel) return;
    const e = this.bubbleNode1;
    null != e && e.isValid && (this.TipLabel = e.getComponentInChildren(__rea_outer_a));
  }
  resolveBlockSpriteReference() {
    if (this.BlockSprite) return;
    const e = this.node.getChildByPath("UIPanel/backBG");
    null != e && e.isValid && (this.BlockSprite = e.getComponent(__rea_outer_n));
  }
  playBubbleLine(e, t) {
    this.resolveTipLabelReference();
    const i = __rea_outer_b.getInstance(),
      r = this.TipLabel;
    r && (r.string = i.getKey(e), this.setNodeActive(r.node, !0)), this.setNodeActive(this.bubbleNode1, !0), __rea_outer_y.playEffect_1(t);
  }
  hideBubble() {
    var e;
    this.setNodeActive(this.bubbleNode1, !1), this.setNodeActive((null == (e = this.TipLabel) ? void 0 : e.node) ?? null, !1);
  }
  setBlockSpriteBlocking(e) {
    var t;
    this.resolveBlockSpriteReference();
    const i = null == (t = this.BlockSprite) ? void 0 : t.node;
    if (!i) return;
    i.active = e;
    const r = i.getComponent(__rea_outer_g);
    r && (r.enabled = e);
  }
  setSpriteAlpha(e, t) {
    if (!e) return;
    const i = e.color;
    e.color = new __rea_outer_u(i.r, i.g, i.b, t);
  }
  setSpriteNodeActive(e, t) {
    null != e && e.node && (!t || __rea_outer_P(e) ? e.node.active = t : e.node.active = !1);
  }
  setNodeActive(e, t) {
    e && (e.active = t);
  }
}).prototype, "bubbleNode1", [Y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ye = __rea_outer_t(ge.prototype, "TipLabel", [Z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), be = __rea_outer_t(ge.prototype, "clickItemPair_arr", [ee], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), Ce = __rea_outer_t(ge.prototype, "targetclickItemPair_arr", [te], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), ke = __rea_outer_t(ge.prototype, "DragItemPair_arr", [ie], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), ve = __rea_outer_t(ge.prototype, "SwipeItemPair_arr", [re], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), me = __rea_outer_t(ge.prototype, "animationSprites", [ne], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), Pe = __rea_outer_t(ge.prototype, "BlockSprite", [se], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), _e = __rea_outer_t(ge.prototype, "ip_faceSprite", [le], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), we = __rea_outer_t(ge.prototype, "door1Sprite", [oe], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Ie = __rea_outer_t(ge.prototype, "door2Sprite", [ae], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Ae = __rea_outer_t(ge.prototype, "curtainSprite1", [ce], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Le = __rea_outer_t(ge.prototype, "curtainSprite2", [he], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), De = __rea_outer_t(ge.prototype, "windowSprite", [pe], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Ne = __rea_outer_t(ge.prototype, "pipeSprite", [ue], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Be = __rea_outer_t(ge.prototype, "tableSprite", [de], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Ee = __rea_outer_t(ge.prototype, "tableEndSprite", [Se], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Te = ge)) || Te);
__rea_outer_r._RF.pop();
export { __recovered_export_0 as ClueType, __recovered_export_1 as default };
