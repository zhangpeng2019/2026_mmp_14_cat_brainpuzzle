// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/uihint.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { applyDecoratedDescriptor as __rea_outer_e } from "./rollupPluginModLoBabelHelpers";
import { initializerDefineProperty as __rea_outer_i } from "./rollupPluginModLoBabelHelpers";
import { cclegacy as __rea_outer_n } from "cc";
import { Button as __rea_outer_o } from "cc";
import { Label as __rea_outer_s } from "cc";
import { Sprite as __rea_outer_l } from "cc";
import { _decorator as __rea_outer_r } from "cc";
import { GameController as __rea_outer_a } from "./GameController";
import { UIManager as __rea_outer_h } from "./ui-manager";
import { UIBase as __rea_outer_u } from "./ui-base";
let __recovered_export_0;
var p, c, d, g, B, b, y, _, C, f, m;
__rea_outer_n._RF.push({}, "d4e8aKRfDtPHppii1w9fp8B", "uihint", void 0);
const {
  ccclass: v,
  property: L
} = __rea_outer_r;
__recovered_export_0 = (p = v("UIHint"), c = L(__rea_outer_o), d = L(__rea_outer_o), g = L(__rea_outer_s), B = L(__rea_outer_l), p((_ = __rea_outer_e((y = class t extends __rea_outer_u {
  constructor(...t) {
    super(...t), __rea_outer_i(this, "Button_close", _, this), __rea_outer_i(this, "Button_bg", C, this), __rea_outer_i(this, "Label_Body", f, this), __rea_outer_i(this, "HintSprite", m, this);
  }
  onLoad() {
    this.preparePopupStructure(), super.onLoad(), this.resolveReferences();
  }
  show() {
    super.show(), __rea_outer_a.getInstance().pauseTimer(), this.scheduleOnce(() => {
      this.node.active && this.doPopAppear();
    }, 0);
  }
  onShowWithParam(t) {
    this.refreshHint(t);
  }
  refreshHint(t) {
    const e = "string" == typeof t ? t : t.body ?? "",
      i = "string" == typeof t ? null : t.spriteFrame ?? null;
    this.applyBodyText(e), this.applyHintSprite(i);
  }
  refreshBody(t) {
    this.refreshHint(t);
  }
  registerCallbacks() {
    this.Button_close && this.Button_close.node.on(__rea_outer_o.EventType.CLICK, this.onCloseClick, this), this.Button_bg && this.Button_bg.node.on(__rea_outer_o.EventType.CLICK, this.onCloseClick, this);
  }
  unregisterCallbacks() {
    this.Button_close && this.Button_close.node.off(__rea_outer_o.EventType.CLICK, this.onCloseClick, this), this.Button_bg && this.Button_bg.node.off(__rea_outer_o.EventType.CLICK, this.onCloseClick, this);
  }
  applyBodyText(t) {
    if (!this.Label_Body) return;
    const e = t.trim().length > 0;
    this.Label_Body.string = e ? t : "", this.Label_Body.node.active = e;
  }
  applyHintSprite(t) {
    this.HintSprite && (this.HintSprite.spriteFrame = t, this.HintSprite.node.active = null !== t);
  }
  onCloseClick() {
    this.hideWithPopDisappear(() => {
      __rea_outer_a.getInstance().resumeTimer(), __rea_outer_h.getInstance().hideView(t);
    });
  }
  preparePopupStructure() {
    const t = this.node.getChildByName("bg");
    t && (t.name = "eventblock");
    const e = this.node.getChildByName("general_pop_up_bg");
    e && (e.name = "n_root");
  }
  resolveReferences() {
    if (!this.Button_close) {
      const t = this.node.getChildByName("closeBtn") ?? this.node.getChildByName("Button_close");
      this.Button_close = (null == t ? void 0 : t.getComponent(__rea_outer_o)) ?? null;
    }
    if (!this.Label_Body) {
      const t = this.node.getChildByName("Label_Body");
      if (this.Label_Body = (null == t ? void 0 : t.getComponent(__rea_outer_s)) ?? null, !this.Label_Body) {
        const t = this.node.getChildByName("n_root"),
          e = null == t ? void 0 : t.getChildByName("Label_Body");
        this.Label_Body = (null == e ? void 0 : e.getComponent(__rea_outer_s)) ?? null;
      }
    }
    if (!this.HintSprite) {
      const t = this.node.getChildByName("n_root") ?? this.node.getChildByName("general_pop_up_bg"),
        e = null == t ? void 0 : t.getChildByName("HintSprite");
      this.HintSprite = (null == e ? void 0 : e.getComponent(__rea_outer_l)) ?? null;
    }
    if (!this.Button_bg) {
      const t = this.node.getChildByName("eventblock") ?? this.node.getChildByName("bg");
      t && (this.Button_bg = t.getComponent(__rea_outer_o), this.Button_bg || (this.Button_bg = t.addComponent(__rea_outer_o), this.Button_bg.transition = __rea_outer_o.Transition.NONE));
    }
  }
}).prototype, "Button_close", [c], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), C = __rea_outer_e(y.prototype, "Button_bg", [d], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), f = __rea_outer_e(y.prototype, "Label_Body", [g], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), m = __rea_outer_e(y.prototype, "HintSprite", [B], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), b = y)) || b);
__rea_outer_n._RF.pop();
export { __recovered_export_0 as UIHint };
