// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/List.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { applyDecoratedDescriptor as __rea_outer_e } from "./rollupPluginModLoBabelHelpers";
import { initializerDefineProperty as __rea_outer_i } from "./rollupPluginModLoBabelHelpers";
import { cclegacy as __rea_outer_s } from "cc";
import { Enum as __rea_outer_n } from "cc";
import { Node as __rea_outer_h } from "cc";
import { Prefab as __rea_outer_o } from "cc";
import { EventHandler as __rea_outer_l } from "cc";
import { CCInteger as __rea_outer_r } from "cc";
import { _decorator as __rea_outer_a } from "cc";
import { Component as __rea_outer_c } from "cc";
import { NodePool as __rea_outer_m } from "cc";
import { Size as __rea_outer__ } from "cc";
import { Vec3 as __rea_outer_d } from "cc";
import { ScrollView as __rea_outer_p } from "cc";
import { Layout as __rea_outer_u } from "cc";
import { instantiate as __rea_outer_f } from "cc";
import { isValid as __rea_outer_g } from "cc";
import { Vec2 as __rea_outer_y } from "cc";
import { default as __rea_outer_L } from "./ListItem";
import { getUITransform as __rea_outer_S } from "./CocosCompat";
let __recovered_export_0, __recovered_export_1, __recovered_export_2, __recovered_export_3;
var w, I, N, z, b, G, E, M, V, T, v, R, A, O, C, $, B, x, D, P;
__rea_outer_s._RF.push({}, "db715oBXw1HzKf3UnuDe7+G", "List", void 0);
const {
  ccclass: F,
  property: H
} = __rea_outer_a;
let X = __recovered_export_0 = function (t) {
    return t[t.NODE = 1] = "NODE", t[t.PREFAB = 2] = "PREFAB", t;
  }({}),
  Y = __recovered_export_1 = function (t) {
    return t[t.NORMAL = 1] = "NORMAL", t[t.ADHERING = 2] = "ADHERING", t;
  }({}),
  U = __recovered_export_2 = function (t) {
    return t[t.NONE = 0] = "NONE", t[t.SINGLE = 1] = "SINGLE", t[t.MULT = 2] = "MULT", t;
  }({});
__recovered_export_3 = (w = F("List"), I = H({
  type: __rea_outer_n(X)
}), N = H({
  type: __rea_outer_h,
  visible() {
    return this.templateType === X.NODE;
  }
}), z = H({
  type: __rea_outer_o,
  visible() {
    return this.templateType === X.PREFAB;
  }
}), b = H({
  type: __rea_outer_n(Y)
}), G = H({
  type: __rea_outer_n(U)
}), E = H({
  type: __rea_outer_l
}), M = H({
  type: __rea_outer_l,
  visible() {
    return this.selectMode !== U.NONE;
  }
}), V = H({
  type: __rea_outer_r,
  range: [0, 12, 1],
  slide: !0
}), w((R = __rea_outer_e((v = class extends __rea_outer_c {
  constructor(...t) {
    super(...t), __rea_outer_i(this, "templateType", R, this), __rea_outer_i(this, "tmpNode", A, this), __rea_outer_i(this, "tmpPrefab", O, this), __rea_outer_i(this, "virtual", C, this), __rea_outer_i(this, "slideMode", $, this), __rea_outer_i(this, "selectMode", B, this), __rea_outer_i(this, "renderEvent", x, this), __rea_outer_i(this, "selectedEvent", D, this), __rea_outer_i(this, "frameByFrameRenderNum", P, this), this._scrollView = null, this._content = null, this._contentTrans = null, this._layout = null, this._pool = new __rea_outer_m(), this._displayed = new Map(), this._pending = [], this._numItems = 0, this._inited = !1, this._sizeVertical = !0, this._colLineNum = 1, this._itemSize = new __rea_outer__(100, 100), this._topGap = 0, this._bottomGap = 0, this._leftGap = 0, this._rightGap = 0, this._columnGap = 0, this._lineGap = 0, this._itemAnchorX = .5, this._itemAnchorY = .5, this._selectedId = -1, this._multSelected = [], this._tempPos = new __rea_outer_d();
  }
  onLoad() {
    this.init();
  }
  onDestroy() {
    this._pool.clear();
  }
  onEnable() {
    this.registerScrollEvent();
  }
  onDisable() {
    this.unregisterScrollEvent();
  }
  get selectionEnabled() {
    return this.selectMode !== U.NONE;
  }
  get scrollView() {
    return this._scrollView;
  }
  get numItems() {
    return this._numItems;
  }
  set numItems(t) {
    const e = this.init();
    console.log(`[List] set numItems: value=${t}, init()=${e}`), t < 0 || !e ? console.warn(`[List] set numItems aborted: value=${t}, init()=${e} (need ScrollView + content)`) : (this._numItems = t, this.resizeContent(), this.recycleAll(), this.refresh());
  }
  init() {
    return !!this._inited || (this._scrollView = this.getComponent(__rea_outer_p), console.log(`[List] init: scrollView=${!!this._scrollView}, content=${!(!this._scrollView || !this._scrollView.content)}`), this._scrollView && this._scrollView.content ? (this._content = this._scrollView.content, this._contentTrans = __rea_outer_S(this._content), this._layout = this._content.getComponent(__rea_outer_u), this._layout && (this.readLayout(this._layout), this._layout.enabled = !1), this.measureTemplate(), this.computeColLineNum(), this._content.removeAllChildren(), this._inited = !0, console.log(`[List] init success: colLineNum=${this._colLineNum}, itemSize=${this._itemSize.width}x${this._itemSize.height}`), !0) : (console.error("[List] init failed: missing ScrollView component or ScrollView.content is not set on node", this.node.name), !1));
  }
  readLayout(t) {
    this._topGap = t.paddingTop, this._bottomGap = t.paddingBottom, this._leftGap = t.paddingLeft, this._rightGap = t.paddingRight, this._columnGap = t.spacingX, this._lineGap = t.spacingY, t.type !== __rea_outer_u.Type.HORIZONTAL ? t.type !== __rea_outer_u.Type.VERTICAL ? this._sizeVertical = t.startAxis === __rea_outer_u.AxisDirection.HORIZONTAL : this._sizeVertical = !0 : this._sizeVertical = !1;
  }
  measureTemplate() {
    const t = this.getTemplate();
    if (this._layout && this._layout.type === __rea_outer_u.Type.GRID) this._itemSize = this._layout.cellSize.clone();else if (t) {
      const e = __rea_outer_S(t);
      this._itemSize = e.contentSize.clone();
    }
    if (t) {
      const e = __rea_outer_S(t);
      this._itemAnchorX = e.anchorX, this._itemAnchorY = e.anchorY;
    }
  }
  getTemplate() {
    return this.templateType === X.PREFAB ? this.tmpPrefab ? __rea_outer_f(this.tmpPrefab) : null : this.tmpNode;
  }
  computeColLineNum() {
    if (this._layout && this._layout.type === __rea_outer_u.Type.GRID && this._contentTrans) {
      if (this._sizeVertical) {
        const t = this._contentTrans.width - this._leftGap - this._rightGap;
        this._colLineNum = Math.max(1, Math.floor((t + this._columnGap) / (this._itemSize.width + this._columnGap)));
      } else {
        const t = this._contentTrans.height - this._topGap - this._bottomGap;
        this._colLineNum = Math.max(1, Math.floor((t + this._lineGap) / (this._itemSize.height + this._lineGap)));
      }
    } else this._colLineNum = 1;
  }
  registerScrollEvent() {
    this.node.on("scrolling", this.refresh, this), this.node.on("scroll-ended", this.onScrollEnded, this);
  }
  unregisterScrollEvent() {
    this.node.off("scrolling", this.refresh, this), this.node.off("scroll-ended", this.onScrollEnded, this);
  }
  getLineCount() {
    return Math.ceil(this._numItems / this._colLineNum);
  }
  resizeContent() {
    if (!this._contentTrans) return;
    const t = this.getLineCount();
    if (this._sizeVertical) {
      const e = this._topGap + this._bottomGap + t * this._itemSize.height + Math.max(0, t - 1) * this._lineGap;
      this._contentTrans.height = Math.max(e, this._itemSize.height);
    } else {
      const e = this._leftGap + this._rightGap + t * this._itemSize.width + Math.max(0, t - 1) * this._columnGap;
      this._contentTrans.width = Math.max(e, this._itemSize.width);
    }
  }
  getScrolledDistance() {
    if (!this._scrollView) return 0;
    const t = this._scrollView.getScrollOffset(),
      e = this._sizeVertical ? t.y : t.x;
    return Math.max(0, Math.abs(e));
  }
  getViewLength() {
    const t = this._scrollView && this._scrollView.view ? this._scrollView.view : __rea_outer_S(this.node);
    return this._sizeVertical ? t.height : t.width;
  }
  calcVisibleRange() {
    if (!this.virtual) return {
      start: 0,
      end: this._numItems - 1
    };
    const t = this._sizeVertical ? this._itemSize.height + this._lineGap : this._itemSize.width + this._columnGap,
      e = this._sizeVertical ? this._topGap : this._leftGap,
      i = this.getScrolledDistance(),
      s = this.getViewLength(),
      n = Math.max(0, Math.floor((i - e) / t) - 1),
      h = Math.min(this.getLineCount() - 1, Math.floor((i + s - e) / t) + 1);
    return {
      start: n * this._colLineNum,
      end: Math.min(this._numItems - 1, (h + 1) * this._colLineNum - 1)
    };
  }
  refresh() {
    if (!this._inited || this._numItems <= 0) return console.warn(`[List] refresh skipped: inited=${this._inited}, numItems=${this._numItems}`), void this.recycleAll();
    const {
      start: t,
      end: e
    } = this.calcVisibleRange();
    console.log(`[List] refresh: visibleRange start=${t}, end=${e}, numItems=${this._numItems}`), this.recycleOutOfRange(t, e), this._pending.length = 0;
    for (let i = t; i <= e; i++) this._displayed.has(i) || this._pending.push(i);
    if (console.log(`[List] refresh: pending=${this._pending.length}, frameByFrameRenderNum=${this.frameByFrameRenderNum}`), this.frameByFrameRenderNum <= 0) for (; this._pending.length > 0;) this.createItem(this._pending.shift());
  }
  update() {
    if (this.frameByFrameRenderNum <= 0 || 0 === this._pending.length) return;
    const t = Math.min(this.frameByFrameRenderNum, this._pending.length);
    for (let e = 0; e < t; e++) this.createItem(this._pending.shift());
  }
  recycleOutOfRange(t, e) {
    const i = [];
    this._displayed.forEach((s, n) => {
      (n < t || n > e) && i.push(n);
    });
    for (const t of i) this.recycle(t);
  }
  recycleAll() {
    const t = [];
    this._displayed.forEach((e, i) => t.push(i));
    for (const e of t) this.recycle(e);
  }
  recycle(t) {
    const e = this._displayed.get(t);
    e && (this._displayed.delete(t), this._pool.put(e));
  }
  createItem(t) {
    if (this._displayed.has(t) || !this._content) return void console.warn(`[List] createItem skipped: id=${t}, displayed=${this._displayed.has(t)}, hasContent=${!!this._content}`);
    const e = this.borrowNode();
    e ? (console.log(`[List] createItem: id=${t}, node=${e.name}`), e.parent = this._content, this.placeItem(e, t), this._displayed.set(t, e), this.bindListItem(e, t), this.emitRender(e, t)) : console.error(`[List] createItem: borrowNode returned null (check tmpPrefab/tmpNode), id=${t}`);
  }
  borrowNode() {
    if (this._pool.size() > 0) {
      const t = this._pool.get();
      if (t && __rea_outer_g(t)) return t;
    }
    const t = this.getTemplate();
    return t ? __rea_outer_f(t) : null;
  }
  placeItem(t, e) {
    const i = Math.floor(e / this._colLineNum),
      s = e % this._colLineNum;
    if (!this._contentTrans) return;
    const n = this._contentTrans.width,
      h = this._contentTrans.height,
      o = -n * this._contentTrans.anchorX,
      l = h * (1 - this._contentTrans.anchorY);
    let r, a;
    if (this._sizeVertical) {
      const t = this._topGap + i * (this._itemSize.height + this._lineGap),
        e = this._leftGap + s * (this._itemSize.width + this._columnGap);
      a = l - t - this._itemSize.height * (1 - this._itemAnchorY), r = o + e + this._itemSize.width * this._itemAnchorX;
    } else {
      const t = this._leftGap + i * (this._itemSize.width + this._columnGap),
        e = this._topGap + s * (this._itemSize.height + this._lineGap);
      r = o + t + this._itemSize.width * this._itemAnchorX, a = l - e - this._itemSize.height * (1 - this._itemAnchorY);
    }
    this._tempPos.set(r, a, 0), t.setPosition(this._tempPos);
  }
  bindListItem(t, e) {
    const i = t.getComponent(__rea_outer_L);
    i && (i.bindList(this, e), this.selectMode === U.SINGLE ? i.selected = this._selectedId === e : this.selectMode === U.MULT && (i.selected = this._multSelected.indexOf(e) >= 0));
  }
  emitRender(t, e) {
    this.renderEvent && this.renderEvent.target && this.renderEvent.handler && __rea_outer_l.emitEvents([this.renderEvent], t, e);
  }
  onScrollEnded() {
    this.slideMode === Y.ADHERING && this.scrollTo(this.getNearestLineStartId(), .2);
  }
  getNearestLineStartId() {
    const t = this._sizeVertical ? this._itemSize.height + this._lineGap : this._itemSize.width + this._columnGap,
      e = this._sizeVertical ? this._topGap : this._leftGap,
      i = this.getScrolledDistance(),
      s = Math.round((i - e) / t);
    return Math.max(0, Math.min(this.getLineCount() - 1, s)) * this._colLineNum;
  }
  scrollTo(t, e = .2) {
    if (!this.init() || !this._scrollView || this._numItems <= 0) return;
    const i = Math.max(0, Math.min(this._numItems - 1, t)),
      s = Math.floor(i / this._colLineNum),
      n = this._sizeVertical ? this._itemSize.height + this._lineGap : this._itemSize.width + this._columnGap,
      h = (this._sizeVertical ? this._topGap : this._leftGap) + s * n,
      o = this._sizeVertical ? new __rea_outer_y(0, h) : new __rea_outer_y(h, 0);
    this._scrollView.scrollToOffset(o, e);
  }
  updateAll() {
    this._displayed.forEach((t, e) => this.emitRender(t, e));
  }
  updateItem(t) {
    const e = Array.isArray(t) ? t : [t];
    for (const t of e) {
      const e = this._displayed.get(t);
      e && this.emitRender(e, t);
    }
  }
  getItemByListId(t) {
    return this._displayed.get(t) ?? null;
  }
  get selectedId() {
    return this._selectedId;
  }
  set selectedId(t) {
    if (this.selectMode === U.NONE) return;
    const e = this._selectedId;
    this._selectedId = t, this.selectMode === U.SINGLE ? this.applySingleSelection(e, t) : this.applyMultiSelection(t), this.selectedEvent && this.selectedEvent.target && this.selectedEvent.handler && __rea_outer_l.emitEvents([this.selectedEvent], this.getItemByListId(t), t, e);
  }
  applySingleSelection(t, e) {
    if (t >= 0 && t !== e) {
      const e = this.getItemByListId(t),
        i = e ? e.getComponent(__rea_outer_L) : null;
      i && (i.selected = !1);
    }
    const i = this.getItemByListId(e),
      s = i ? i.getComponent(__rea_outer_L) : null;
    s && (s.selected = !0);
  }
  applyMultiSelection(t) {
    const e = this._multSelected.indexOf(t),
      i = e < 0;
    i ? this._multSelected.push(t) : this._multSelected.splice(e, 1);
    const s = this.getItemByListId(t),
      n = s ? s.getComponent(__rea_outer_L) : null;
    n && (n.selected = i);
  }
  get multSelected() {
    return this._multSelected;
  }
}).prototype, "templateType", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return X.PREFAB;
  }
}), A = __rea_outer_e(v.prototype, "tmpNode", [N], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), O = __rea_outer_e(v.prototype, "tmpPrefab", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), C = __rea_outer_e(v.prototype, "virtual", [H], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !0;
  }
}), $ = __rea_outer_e(v.prototype, "slideMode", [b], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return Y.NORMAL;
  }
}), B = __rea_outer_e(v.prototype, "selectMode", [G], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return U.NONE;
  }
}), x = __rea_outer_e(v.prototype, "renderEvent", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new __rea_outer_l();
  }
}), D = __rea_outer_e(v.prototype, "selectedEvent", [M], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new __rea_outer_l();
  }
}), P = __rea_outer_e(v.prototype, "frameByFrameRenderNum", [V], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), T = v)) || T);
__rea_outer_s._RF.pop();
export { __recovered_export_0 as ListTemplateType, __recovered_export_1 as ListSlideMode, __recovered_export_2 as ListSelectMode, __recovered_export_3 as default };
