// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/ListItem.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { applyDecoratedDescriptor as __rea_outer_t } from "./rollupPluginModLoBabelHelpers";
import { initializerDefineProperty as __rea_outer_i } from "./rollupPluginModLoBabelHelpers";
import { cclegacy as __rea_outer_s } from "cc";
import { Sprite as __rea_outer_l } from "cc";
import { Node as __rea_outer_n } from "cc";
import { Enum as __rea_outer_r } from "cc";
import { SpriteFrame as __rea_outer_c } from "cc";
import { _decorator as __rea_outer_o } from "cc";
import { Component as __rea_outer_u } from "cc";
import { Button as __rea_outer_a } from "cc";
import { EventHandler as __rea_outer_d } from "cc";
let __recovered_export_0, __recovered_export_1;
var h, p, f, m, g, b, F, I, S, _, y, C, v;
__rea_outer_s._RF.push({}, "8634caJ4QpEr5/QDwLI/Nau", "ListItem", void 0);
const {
  ccclass: E,
  property: L
} = __rea_outer_o;
let N = __recovered_export_0 = function (e) {
  return e[e.NONE = 0] = "NONE", e[e.TOGGLE = 1] = "TOGGLE", e[e.SWITCH = 2] = "SWITCH", e;
}({});
__recovered_export_1 = (h = E("ListItem"), p = L(__rea_outer_l), f = L(__rea_outer_n), m = L({
  type: __rea_outer_r(N)
}), g = L({
  type: __rea_outer_n,
  visible() {
    return this.selectMode !== N.NONE;
  }
}), b = L({
  type: __rea_outer_c,
  visible() {
    return this.selectMode === N.SWITCH;
  }
}), h((S = __rea_outer_t((I = class extends __rea_outer_u {
  constructor(...e) {
    super(...e), __rea_outer_i(this, "icon", S, this), __rea_outer_i(this, "title", _, this), __rea_outer_i(this, "selectMode", y, this), __rea_outer_i(this, "selectedFlag", C, this), __rea_outer_i(this, "selectedSpriteFrame", v, this), this.listId = -1, this.list = null, this._selected = !1, this._unselectedSpriteFrame = null, this._button = null, this._eventRegistered = !1;
  }
  onLoad() {
    if (this.selectMode === N.SWITCH && this.selectedFlag) {
      const e = this.selectedFlag.getComponent(__rea_outer_l);
      this._unselectedSpriteFrame = e ? e.spriteFrame : null;
    }
  }
  get selected() {
    return this._selected;
  }
  set selected(e) {
    if (this._selected = e, this.selectedFlag) if (this.selectMode !== N.TOGGLE) {
      if (this.selectMode === N.SWITCH) {
        const t = this.selectedFlag.getComponent(__rea_outer_l);
        t && (t.spriteFrame = e ? this.selectedSpriteFrame : this._unselectedSpriteFrame);
      }
    } else this.selectedFlag.active = e;
  }
  bindList(e, t) {
    this.list = e, this.listId = t, this.registerClickIfNeeded();
  }
  registerClickIfNeeded() {
    if (this._eventRegistered || !this.list || !this.list.selectionEnabled) return;
    if (this._button = this.getComponent(__rea_outer_a), !this._button) return;
    const e = new __rea_outer_d();
    e.target = this.node, e.component = "ListItem", e.handler = "onClickSelect", this._button.clickEvents.unshift(e), this._eventRegistered = !0;
  }
  onClickSelect() {
    this.list && (this.list.selectedId = this.listId);
  }
}).prototype, "icon", [p], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), _ = __rea_outer_t(I.prototype, "title", [f], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), y = __rea_outer_t(I.prototype, "selectMode", [m], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return N.NONE;
  }
}), C = __rea_outer_t(I.prototype, "selectedFlag", [g], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), v = __rea_outer_t(I.prototype, "selectedSpriteFrame", [b], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), F = I)) || F);
__rea_outer_s._RF.pop();
export { __recovered_export_0 as ListItemSelectMode, __recovered_export_1 as default };
