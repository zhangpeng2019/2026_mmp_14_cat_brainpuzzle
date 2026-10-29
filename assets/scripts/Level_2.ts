// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_2.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { applyDecoratedDescriptor as __rea_outer_t } from "./rollupPluginModLoBabelHelpers";
import { initializerDefineProperty as __rea_outer_i } from "./rollupPluginModLoBabelHelpers";
import { cclegacy as __rea_outer_o } from "cc";
import { Node as __rea_outer_s } from "cc";
import { Label as __rea_outer_n } from "cc";
import { Sprite as __rea_outer_r } from "cc";
import { _decorator as __rea_outer_h } from "cc";
import { Tween as __rea_outer_a } from "cc";
import { UITransform as __rea_outer_l } from "cc";
import { Vec3 as __rea_outer_d } from "cc";
import { default as __rea_outer_u } from "./LevelBase";
import { DRAG_HIT_DISTANCE as __rea_outer_c } from "./clue-hit-tester";
import { default as __rea_outer_p } from "./clue-hit-tester";
import { default as __rea_outer_g } from "./AudioManager";
import { I18nController as __rea_outer_y } from "./i18n-controller";
import { UIManager as __rea_outer_f } from "./ui-manager";
import { UIHint as __rea_outer_m } from "./uihint";
import { isSpriteRenderable as __rea_outer_v } from "./CocosCompat";
import { stopAllTweens as __rea_outer_D } from "./CocosCompat";
import { getUITransform as __rea_outer_b } from "./CocosCompat";
import { stopSpritesTweens as __rea_outer_S } from "./CocosCompat";
import { stopSpriteTweens as __rea_outer_I } from "./CocosCompat";
import { GameController as __rea_outer_N } from "./GameController";
import { default as __rea_outer_T } from "./ActionSystem";
let __recovered_export_0;
var w, M, x, _, C, B, L, E, P, O, A, k, H, $, V, K, R, F, U, G, z, W, j;
__rea_outer_o._RF.push({}, "52494/6jUhB2rE/O0hoHxll", "Level_2", void 0);
const {
  ccclass: Y,
  property: Q
} = __rea_outer_h;
__recovered_export_0 = (w = Y("Level_2"), M = Q(__rea_outer_s), x = Q(__rea_outer_n), _ = Q(__rea_outer_r), C = Q(__rea_outer_r), B = Q(__rea_outer_r), L = Q(__rea_outer_r), E = Q(__rea_outer_s), P = Q(__rea_outer_r), O = Q(__rea_outer_r), A = Q(__rea_outer_r), w(($ = __rea_outer_t((H = class extends __rea_outer_u {
  constructor(...e) {
    super(...e), __rea_outer_i(this, "bubbleNode1", $, this), __rea_outer_i(this, "TipLabel", V, this), __rea_outer_i(this, "dragSprites", K, this), __rea_outer_i(this, "showoldSprites", R, this), __rea_outer_i(this, "shownewSprites", F, this), __rea_outer_i(this, "showSpecialSprites", U, this), __rea_outer_i(this, "momeyNodes", G, this), __rea_outer_i(this, "animationSprites", z, this), __rea_outer_i(this, "Moneytouch", W, this), __rea_outer_i(this, "MoneySprite", j, this), this.phase = 0, this.winstate = !1, this.doneItems = [], this.dragedItems = [], this.hint_arr = ["level2_hint1", "level2_hint2", "level2_hint3", "level2_hint4", "level2_hint4", "level2_hint5", "level2_hint6", "level2_hint7", "level2_hint8", "level2_hint9", "level2_hint10"], this.config_arr = [{
      ID: 0,
      soundkey: "2_2",
      showtype: 1,
      textStrKey: "2_2"
    }, {
      ID: 1,
      soundkey: "2_3",
      showtype: 2,
      textStrKey: "2_3"
    }, {
      ID: 2,
      soundkey: "2_4",
      showtype: 1,
      textStrKey: "2_4"
    }, {
      ID: 3,
      soundkey: "2_5",
      showtype: 1,
      textStrKey: "2_5"
    }, {
      ID: 4,
      soundkey: "2_6",
      showtype: 1,
      textStrKey: "2_6"
    }, {
      ID: 5,
      soundkey: "2_6",
      showtype: 1,
      textStrKey: "2_6"
    }, {
      ID: 6,
      soundkey: "2_7",
      showtype: 1,
      textStrKey: "2_7"
    }, {
      ID: 7,
      soundkey: "2_8",
      showtype: 1,
      textStrKey: "2_8"
    }, {
      ID: 8,
      soundkey: "2_9",
      showtype: 1,
      textStrKey: "2_9"
    }, {
      ID: 9,
      soundkey: "2_10",
      showtype: 1,
      textStrKey: "2_10"
    }, {
      ID: 10,
      soundkey: "2_11",
      showtype: 1,
      textStrKey: "2_11"
    }], this.isDraggingMoney = !1, this.isInteractionLocked = !1, this.activeMoneyNode = null, this.moneyDragParent = null, this.visibleMoneyNodeIndex = 0, this.onMoneyTouchStart = e => {
      if (1 !== this.phase || this.isInteractionLocked || this.isDraggingMoney) return;
      const t = this.activeMoneyNode,
        i = this.moneyDragParent;
      t && i && (this.isDraggingMoney = !0, this.setMoneyNodePositionFromTouch(e, t, i), this.setNodeActive(t, !0));
    }, this.onMoneyTouchMove = e => {
      if (!this.isDraggingMoney || 1 !== this.phase) return;
      const t = this.activeMoneyNode,
        i = this.moneyDragParent;
      t && i && this.setMoneyNodePositionFromTouch(e, t, i);
    }, this.onMoneyTouchEnd = e => {
      if (!this.isDraggingMoney || 1 !== this.phase) return void this.resetMoneyDragState();
      const t = this.activeMoneyNode;
      if (!t) return void this.resetMoneyDragState();
      if (this.setMoneyNodePositionFromTouch(e, t, this.moneyDragParent), this.isDraggingMoney = !1, this.logMoneyDrop(e, t), this.hideMoneyDragNode(), this.isInteractionLocked) return;
      const i = this.findDropTargetIndex(t);
      this.logMoneyDropResult(i), i < 0 || (this.isInteractionLocked = !0, this.completeDragIndices(this.collectCompletionIndices(i)), this.isInteractionLocked = !1, this.TryQuickWin() || this.checkPhase1Complete());
    }, this.onDialogueDisplayTimeout = () => {
      this.hideDialogueBubble();
    };
  }
  onLoad() {
    super.onLoad(), this.resolveTipLabelReference(), this.allItemNum = this.getEffectiveTotalCount(), this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.enterPhase0();
  }
  onDestroy() {
    this.unscheduleAllCallbacks(), this.unregisterInteractionHandlers(), this.stopDecorationAnimations(), this.stopAllLevelSpriteTweens(), __rea_outer_g.stopVoice();
  }
  showHint() {
    if (1 !== this.phase) return;
    const e = this.resolveNextHintKey();
    if (!e) return;
    const t = __rea_outer_y.getInstance().getKey(e);
    __rea_outer_f.getInstance().showView(__rea_outer_m, void 0, {
      body: t
    });
  }
  getGameProgressSnapshot() {
    const e = this.getEffectiveTotalCount(),
      t = this.getEffectiveDoneCount();
    return {
      progress: e > 0 ? t / e : 0,
      label: `${t}/${e}`
    };
  }
  resetLevelState() {
    var e;
    this.phase = 0, this.winstate = !1, this.doneItems = [], this.dragedItems = [], this.isDraggingMoney = !1, this.isInteractionLocked = !1, this.hasInstallNum = 0, this.activeMoneyNode = this.resolveMoneyDragNode(), this.moneyDragParent = (null == (e = this.activeMoneyNode) ? void 0 : e.parent) ?? this.node, this.hideDialogueBubble(), __rea_outer_g.stopVoice(), this.hideMoneyDragNode(), this.refreshVisibleMoneyNodeByProgress(), this.prepareSpritesForPhase0();
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_g.playMusic("bgm4", !0, .5), this.refreshVisibleMoneyNodeByProgress(), this.startDecorationAnimations(), this.playDialogueLine("2_1"), this.scheduleOnce(() => {
      this.isValid && 0 === this.phase && (this.hideDialogueBubble(), this.enterPhase1());
    }, 2);
  }
  skipOpeningToPlay() {
    return 0 === this.phase && (this.stopOpeningDialogue(), this.hideDialogueBubble(), this.enterPhase1(), !0);
  }
  enterPhase1() {
    0 === this.phase && (this.phase = 1, this.refreshVisibleMoneyNodeByProgress(), this.registerInteractionHandlers(), __rea_outer_N.getInstance().refreshGameProgress());
  }
  enterPhase2() {
    this.phase >= 2 || (this.phase = 2, this.winstate = !0, this.hideDialogueBubble(), this.unregisterInteractionHandlers(), this.stopDecorationAnimations(), this.hideMoneyDragNode(), this.momeyNodes.forEach(e => this.setNodeActive(e, !1)), this.showLevelSuccess(1.5));
  }
  prepareSpritesForPhase0() {
    this.showoldSprites.forEach(e => {
      __rea_outer_v(e) && (e.node.active = !0);
    }), this.shownewSprites.forEach(e => {
      null != e && e.node && (e.node.active = !1);
    });
  }
  startDecorationAnimations() {
    this.animationSprites.forEach((e, t) => {
      const i = null == e ? void 0 : e.node;
      null != i && i.isValid && __rea_outer_T.RoseBreath_tag(i, 1, .02, .7, 0, 300 + t);
    });
  }
  stopDecorationAnimations() {
    this.animationSprites.forEach((e, t) => {
      const i = null == e ? void 0 : e.node;
      null != i && i.isValid && (__rea_outer_D(i), __rea_outer_a.stopAllByTag(300 + t));
    });
  }
  registerInteractionHandlers() {
    var e;
    const t = null == (e = this.Moneytouch) ? void 0 : e.node;
    t && t.on(__rea_outer_s.EventType.TOUCH_START, this.onMoneyTouchStart, this), this.node.on(__rea_outer_s.EventType.TOUCH_MOVE, this.onMoneyTouchMove, this), this.node.on(__rea_outer_s.EventType.TOUCH_END, this.onMoneyTouchEnd, this), this.node.on(__rea_outer_s.EventType.TOUCH_CANCEL, this.onMoneyTouchEnd, this);
  }
  unregisterInteractionHandlers() {
    var e;
    const t = null == (e = this.Moneytouch) ? void 0 : e.node;
    t && t.off(__rea_outer_s.EventType.TOUCH_START, this.onMoneyTouchStart, this), this.node.off(__rea_outer_s.EventType.TOUCH_MOVE, this.onMoneyTouchMove, this), this.node.off(__rea_outer_s.EventType.TOUCH_END, this.onMoneyTouchEnd, this), this.node.off(__rea_outer_s.EventType.TOUCH_CANCEL, this.onMoneyTouchEnd, this);
  }
  collectCompletionIndices(e) {
    const t = [],
      i = e => {
        e < 0 || e >= this.dragSprites.length || this.isDragIndexDone(e) || t.indexOf(e) < 0 && t.push(e);
      };
    return i(e), 3 !== e && 4 !== e || i(3 === e ? 4 : 3), t;
  }
  completeDragIndices(e) {
    e.forEach(e => {
      this.applyItemComplete(e);
    }), this.hasInstallNum = this.getEffectiveDoneCount(), __rea_outer_N.getInstance().refreshGameProgress(), this.refreshVisibleMoneyNodeByProgress();
  }
  applyItemComplete(e) {
    if (this.isDragIndexDone(e)) return;
    const t = this.dragSprites[e],
      i = this.showoldSprites[e],
      o = this.shownewSprites[e];
    if (!t || !__rea_outer_v(o)) return;
    __rea_outer_v(i) && i.node && (i.node.active = !1), o.node.active = !0, this.doneItems.push(t), this.dragedItems.push({
      dragSprite: t,
      showSprite: o
    });
    const s = this.findConfigByIndex(e);
    s && 4 !== e && this.playDialogueLine(s.soundkey);
  }
  findDropTargetIndex(e) {
    const t = this.getDragIndicesByRenderOrderDesc();
    let i = -1,
      o = Number.POSITIVE_INFINITY;
    for (const n of t) {
      var s;
      if (this.isDragIndexDone(n)) continue;
      if (10 === n && !this.isDragIndexDone(9)) continue;
      const t = this.dragSprites[n],
        r = this.dropHitNode(n);
      if (null == t || null == (s = t.node) || !s.active || null == r || !r.activeInHierarchy) continue;
      const h = this.gapToNode(e, r);
      h > __rea_outer_c || h >= o || (o = h, i = n);
    }
    return i;
  }
  logMoneyDrop(e, t) {
    var i;
    const o = e.getUILocation(),
      s = (null == (i = this.dragSprites[8]) ? void 0 : i.node) ?? null,
      n = this.dropHitNode(9),
      r = this.worldBoxOf(t),
      h = this.worldBoxOf(s),
      a = this.worldBoxOf(n);
    console.log(`[Level_2] 松手 touch=(${o.x.toFixed(0)},${o.y.toFixed(0)}) money=${this.formatBox(t, r)}`), console.log(`[Level_2] bed=${this.formatBox(s, h)} window=${this.formatBox(n, a)} money→bed=${this.formatGap(r, h)} money→window=${this.formatGap(r, a)} bed→window=${this.formatGap(h, a)} 阈值=${__rea_outer_c}`);
  }
  logMoneyDropResult(e) {
    var t, i;
    const o = e >= 0 ? (null == (t = this.dragSprites[e]) ? void 0 : t.node) ?? null : null,
      s = (null == (i = this.dragSprites[8]) ? void 0 : i.node) ?? null,
      n = this.dropHitNode(9),
      r = this.activeMoneyNode,
      h = this.worldBoxOf(r),
      a = __rea_outer_p.isDragNearTarget(r, s),
      l = __rea_outer_p.isDragNearTarget(r, n);
    console.log(`[Level_2] 判定 hit=${e} ${(null == o ? void 0 : o.name) ?? "none"} bed命中=${a} window命中=${l} moneyActive=${!0 === (null == r ? void 0 : r.activeInHierarchy)} 隐藏后 money→bed=${this.formatGap(h, this.worldBoxOf(s))} money→window=${this.formatGap(h, this.worldBoxOf(n))}`);
  }
  worldBoxOf(e) {
    if (null == e || !e.isValid) return null;
    const t = e.getComponent(__rea_outer_l);
    return t ? t.getBoundingBoxToWorld() : null;
  }
  formatBox(e, t) {
    if (null == e || !e.isValid || !t) return "missing";
    const i = t.x + .5 * t.width,
      o = t.y + .5 * t.height;
    return `${e.name} active=${e.activeInHierarchy} center=(${i.toFixed(0)},${o.toFixed(0)}) box=(${t.x.toFixed(0)},${t.y.toFixed(0)},${t.width.toFixed(0)}x${t.height.toFixed(0)})`;
  }
  formatGap(e, t) {
    return e && t ? __rea_outer_p.getRectGap(e, t).toFixed(0) : "n/a";
  }
  dropHitNode(e) {
    var t;
    return 9 === e || 10 === e ? this.resolveOutsideDropNode() : (null == (t = this.dragSprites[e]) ? void 0 : t.node) ?? null;
  }
  resolveOutsideDropNode() {
    var e, t;
    const i = (null == (e = this.node.getChildByName("UIPanel")) || null == (e = e.getChildByName("gameNode")) || null == (e = e.getChildByName("window")) ? void 0 : e.getChildByName("outside")) ?? (null == (t = this.dragSprites[10]) ? void 0 : t.node) ?? null;
    return null != i && i.isValid ? i : null;
  }
  gapToNode(e, t) {
    const i = this.worldBoxOf(e),
      o = this.worldBoxOf(t);
    return i && o ? __rea_outer_p.getRectGap(i, o) : Number.POSITIVE_INFINITY;
  }
  getDragIndicesByRenderOrderDesc() {
    const e = this.dragSprites.map((e, t) => t);
    return e.sort((e, t) => {
      const i = this.getSpriteRenderOrder(this.dragSprites[e]);
      return this.getSpriteRenderOrder(this.dragSprites[t]) - i;
    }), e;
  }
  getSpriteRenderOrder(e) {
    var t;
    if (null == e || null == (t = e.node) || !t.isValid) return -1;
    let i = 0,
      o = 1,
      s = e.node;
    for (; s;) i += s.getSiblingIndex() * o, o *= 128, s = s.parent;
    return i;
  }
  checkPhase1Complete() {
    this.getEffectiveDoneCount() < this.getEffectiveTotalCount() || this.enterPhase2();
  }
  markAllTasksCompleted() {
    super.markAllTasksCompleted(), this.phase = 2, this.winstate = !0, this.isInteractionLocked = !0, this.hideDialogueBubble(), this.unregisterInteractionHandlers(), this.stopDecorationAnimations(), this.hideMoneyDragNode(), this.momeyNodes.forEach(e => this.setNodeActive(e, !1));
  }
  getEffectiveTotalCount() {
    return Math.max(0, this.dragSprites.length - 1);
  }
  getEffectiveDoneCount() {
    let e = 0;
    for (let t = 0; t < this.dragSprites.length; t += 1) this.isDragIndexDone(t) && 4 !== t && (e += 1);
    return e;
  }
  resolveNextHintKey() {
    for (let e = 0; e < this.dragSprites.length; e += 1) if (!(4 === e && this.isDragIndexDone(3) || this.isDragIndexDone(e))) return this.hint_arr[e] ?? null;
    return null;
  }
  findConfigByIndex(e) {
    return this.config_arr.find(t => t.ID === e);
  }
  findConfigBySoundKey(e) {
    return this.config_arr.find(t => t.soundkey === e);
  }
  resolveTipLabelReference() {
    if (this.TipLabel) return;
    const e = this.bubbleNode1;
    null != e && e.isValid && (this.TipLabel = e.getComponentInChildren(__rea_outer_n));
  }
  playDialogueLine(e) {
    const t = this.findConfigBySoundKey(e) ?? this.findConfigByTextKey(e),
      i = (null == t ? void 0 : t.textStrKey) ?? e;
    this.resolveTipLabelReference(), this.unschedule(this.onDialogueDisplayTimeout);
    const o = __rea_outer_y.getInstance();
    this.TipLabel && (this.TipLabel.string = o.getKey(i), this.setNodeActive(this.TipLabel.node, !0)), this.setNodeActive(this.bubbleNode1, !0), __rea_outer_g.playVoice(e), this.scheduleOnce(this.onDialogueDisplayTimeout, 2);
  }
  findConfigByTextKey(e) {
    return this.config_arr.find(t => t.textStrKey === e);
  }
  hideDialogueBubble() {
    var e;
    this.unschedule(this.onDialogueDisplayTimeout), this.setNodeActive(this.bubbleNode1, !1), this.setNodeActive((null == (e = this.TipLabel) ? void 0 : e.node) ?? null, !1);
  }
  isDragIndexDone(e) {
    const t = this.dragSprites[e];
    return !t || this.dragedItems.some(e => e.dragSprite === t);
  }
  resolveMoneyDragNode() {
    var e;
    return null != (e = this.MoneySprite) && e.node ? this.MoneySprite.node : this.momeyNodes[0] ?? null;
  }
  refreshVisibleMoneyNodeByProgress() {
    if (0 === this.momeyNodes.length) return;
    const e = this.momeyNodes.length - this.getEffectiveDoneCount();
    this.updateVisibleMoneyNode(e);
  }
  updateVisibleMoneyNode(e) {
    if (0 === this.momeyNodes.length) return;
    const t = Math.max(0, Math.min(e, this.momeyNodes.length - 1));
    this.visibleMoneyNodeIndex = t, this.momeyNodes.forEach((e, i) => {
      this.setNodeActive(e, i === t);
    });
  }
  hideMoneyDragNode() {
    this.setNodeActive(this.activeMoneyNode, !1);
  }
  resetMoneyDragState() {
    this.isDraggingMoney = !1, this.hideMoneyDragNode();
  }
  setMoneyNodePositionFromTouch(e, t, i) {
    const o = e.getUILocation(),
      s = __rea_outer_b(i).convertToNodeSpaceAR(new __rea_outer_d(o.x, o.y, 0));
    if (t.setPosition(s), t.parent !== i) {
      const e = t.worldPosition.clone();
      t.setParent(i), t.setWorldPosition(e);
    }
  }
  stopAllLevelSpriteTweens() {
    __rea_outer_S(this.dragSprites), __rea_outer_S(this.showoldSprites), __rea_outer_S(this.shownewSprites), __rea_outer_S(this.showSpecialSprites), __rea_outer_S(this.animationSprites), __rea_outer_I(this.Moneytouch), __rea_outer_I(this.MoneySprite);
  }
  setNodeActive(e, t) {
    e && (e.active = t);
  }
}).prototype, "bubbleNode1", [M], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), V = __rea_outer_t(H.prototype, "TipLabel", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), K = __rea_outer_t(H.prototype, "dragSprites", [_], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), R = __rea_outer_t(H.prototype, "showoldSprites", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), F = __rea_outer_t(H.prototype, "shownewSprites", [B], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), U = __rea_outer_t(H.prototype, "showSpecialSprites", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), G = __rea_outer_t(H.prototype, "momeyNodes", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), z = __rea_outer_t(H.prototype, "animationSprites", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), W = __rea_outer_t(H.prototype, "Moneytouch", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), j = __rea_outer_t(H.prototype, "MoneySprite", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), k = H)) || k);
__rea_outer_o._RF.pop();
export { __recovered_export_0 as default };
