// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/uirateus.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { applyDecoratedDescriptor as __rea_outer_e } from "./rollupPluginModLoBabelHelpers";
import { initializerDefineProperty as __rea_outer_i } from "./rollupPluginModLoBabelHelpers";
import { cclegacy as __rea_outer_n } from "cc";
import { Button as __rea_outer_s } from "cc";
import { _decorator as __rea_outer_o } from "cc";
import { sys as __rea_outer_r } from "cc";
import { StarRating as __rea_outer_a } from "./star-rating";
import { isAndroidNative as __rea_outer_l } from "./funjoy-bridge";
import { requestInAppReview as __rea_outer_h } from "./funjoy-utils";
import "./index2";
import { UIManager as __rea_outer_u } from "./ui-manager";
import { UIBase as __rea_outer_c } from "./ui-base";
import { TAHelper as __rea_outer_p } from "./ta-helper";
let __recovered_export_0;
var d, g, C, _, B, m, S;
__rea_outer_n._RF.push({}, "43d54EqBAhKmo+cd+emDL9R", "uirateus", void 0);
const {
    ccclass: f,
    property: y
  } = __rea_outer_o,
  v = "com.brain.puzzle.saga.iqtest.games";
function b() {
  const t = `market://details?id=${v}`,
    e = `https://play.google.com/store/apps/details?id=${v}`,
    i = __rea_outer_r.isNative && __rea_outer_r.platform === __rea_outer_r.Platform.ANDROID;
  __rea_outer_r.openURL(i ? t : e);
}
__recovered_export_0 = (d = f("UIRateus"), g = y(__rea_outer_s), C = y(__rea_outer_s), d((m = __rea_outer_e((B = class t extends __rea_outer_c {
  constructor(...t) {
    super(...t), __rea_outer_i(this, "Button_close", m, this), __rea_outer_i(this, "ButtonContinue", S, this), this._starButtons = [], this._starClickHandlers = [], this._highlightedStarCount = 5, this._litStarFrame = null, this._emptyStarFrame = null;
  }
  onLoad() {
    this.preparePopupStructure(), super.onLoad(), this.resolveReferences(), this._highlightedStarCount = 5;
  }
  show() {
    this._highlightedStarCount = 5, super.show(), this.scheduleOnce(() => {
      this.node.active && this.doPopAppear();
    }, 0);
  }
  refreshView() {
    this.refreshStarSprites();
  }
  registerCallbacks() {
    this.Button_close && this.Button_close.node.on(__rea_outer_s.EventType.CLICK, this.onCloseClick, this), this.ButtonContinue && this.ButtonContinue.node.on(__rea_outer_s.EventType.CLICK, this.onContinueClick, this), this.registerStarCallbacks();
  }
  unregisterCallbacks() {
    this.Button_close && this.Button_close.node.off(__rea_outer_s.EventType.CLICK, this.onCloseClick, this), this.ButtonContinue && this.ButtonContinue.node.off(__rea_outer_s.EventType.CLICK, this.onContinueClick, this), this.unregisterStarCallbacks();
  }
  registerStarCallbacks() {
    this.unregisterStarCallbacks();
    for (let t = 0; t < this._starButtons.length; t += 1) {
      const e = t + 1,
        i = () => {
          this.applyHighlightedStarCount(e);
        };
      this._starClickHandlers.push(i), this._starButtons[t].node.on(__rea_outer_s.EventType.CLICK, i, this);
    }
  }
  unregisterStarCallbacks() {
    for (let t = 0; t < this._starButtons.length; t += 1) {
      const e = this._starClickHandlers[t];
      e && this._starButtons[t].node.off(__rea_outer_s.EventType.CLICK, e, this);
    }
    this._starClickHandlers.length = 0;
  }
  onCloseClick() {
    this.closeView();
  }
  onContinueClick() {
    __rea_outer_p.getInstance().trackRateUs(this._highlightedStarCount), this._highlightedStarCount >= 4 && this.openGooglePlayRating(), this.closeView();
  }
  applyHighlightedStarCount(t) {
    if (this._highlightedStarCount = t, !this._litStarFrame || !this._emptyStarFrame) return;
    const e = this._starButtons.map(t => t.node);
    __rea_outer_a.applySprites(e, t, this._litStarFrame, this._emptyStarFrame);
  }
  async refreshStarSprites() {
    const t = await __rea_outer_a.loadAtlas("imgs/evaluate");
    if (!t || !this.isValid) return;
    const e = t.getSpriteFrame(__rea_outer_a.SETTLEMENT_STAR_SPRITE),
      i = t.getSpriteFrame(__rea_outer_a.SETTLEMENT_STAR_EMPTY_SPRITE);
    e && i && (this._litStarFrame = e, this._emptyStarFrame = i, this.applyHighlightedStarCount(this._highlightedStarCount));
  }
  openGooglePlayRating() {
    __rea_outer_l() ? __rea_outer_h(t => {
      t || b();
    }) : b();
  }
  closeView() {
    this.hideWithPopDisappear(() => {
      __rea_outer_u.getInstance().hideView(t);
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
      const t = this.node.getChildByName("closeBtn");
      this.Button_close = (null == t ? void 0 : t.getComponent(__rea_outer_s)) ?? null;
    }
    if (!this.ButtonContinue) {
      const t = this.findContinueButtonNode();
      this.ButtonContinue = (null == t ? void 0 : t.getComponent(__rea_outer_s)) ?? null;
    }
    this.resolveStarButtons();
  }
  findContinueButtonNode() {
    return this.node.getChildByName("ButtonContinue") ?? this.node.getChildByName("Button_Continue") ?? this.node.getChildByName("Button");
  }
  resolveStarButtons() {
    this._starButtons.length = 0;
    const t = this.node.getChildByName("n_root") ?? this.node.getChildByName("general_pop_up_bg"),
      e = (null == t ? void 0 : t.getChildByName("starts")) ?? null;
    if (e) for (let t = 1; t <= 5; t += 1) {
      const i = e.getChildByName(`settlement_star${t}`);
      i && this._starButtons.push(this.ensureStarButton(i));
    }
  }
  ensureStarButton(t) {
    const e = t.getComponent(__rea_outer_s) ?? t.addComponent(__rea_outer_s);
    return e.transition = __rea_outer_s.Transition.NONE, e;
  }
}).prototype, "Button_close", [g], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), S = __rea_outer_e(B.prototype, "ButtonContinue", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), _ = B)) || _);
__rea_outer_n._RF.pop();
export { __recovered_export_0 as UIRateus };
