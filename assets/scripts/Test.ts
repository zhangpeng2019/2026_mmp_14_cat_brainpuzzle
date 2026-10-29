// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Test.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { applyDecoratedDescriptor as __rea_outer_i } from "./rollupPluginModLoBabelHelpers";
import { initializerDefineProperty as __rea_outer_e } from "./rollupPluginModLoBabelHelpers";
import { cclegacy as __rea_outer_o } from "cc";
import { Toggle as __rea_outer_n } from "cc";
import { Button as __rea_outer_s } from "cc";
import { _decorator as __rea_outer_c } from "cc";
import { UIBase as __rea_outer_r } from "./ui-base";
import { GAME_DEBUG as __rea_outer_l } from "./game-config";
import { DataManager as __rea_outer_u } from "./data-manager";
import { AdsController as __rea_outer_a } from "./ads-controller";
let __recovered_export_0;
var h, g, p, d, T, k, f, C, b;
__rea_outer_o._RF.push({}, "e9855rjbaVASK8FqCSNLlab", "Test", void 0);
const {
  ccclass: y,
  property: B
} = __rea_outer_c;
__recovered_export_0 = (h = y("Test"), g = B(__rea_outer_n), p = B(__rea_outer_n), d = B(__rea_outer_s), h((f = __rea_outer_i((k = class extends __rea_outer_r {
  constructor(...t) {
    super(...t), __rea_outer_e(this, "QuickWinTog", f, this), __rea_outer_e(this, "SkipAdTog", C, this), __rea_outer_e(this, "closeButton", b, this);
  }
  onLoad() {
    super.onLoad(), this.resolveCloseButton();
  }
  registerCallbacks() {
    this.QuickWinTog && this.QuickWinTog.node.on(__rea_outer_n.EventType.TOGGLE, this.onQuickWinToggle, this), this.SkipAdTog && this.SkipAdTog.node.on(__rea_outer_n.EventType.TOGGLE, this.onSkipAdToggle, this), this.closeButton && this.closeButton.node.on(__rea_outer_s.EventType.CLICK, this.onCloseClick, this);
  }
  unregisterCallbacks() {
    this.QuickWinTog && this.QuickWinTog.node.off(__rea_outer_n.EventType.TOGGLE, this.onQuickWinToggle, this), this.SkipAdTog && this.SkipAdTog.node.off(__rea_outer_n.EventType.TOGGLE, this.onSkipAdToggle, this), this.closeButton && this.closeButton.node.off(__rea_outer_s.EventType.CLICK, this.onCloseClick, this);
  }
  refreshView() {
    this.QuickWinTog && (this.QuickWinTog.isChecked = __rea_outer_l.QuickWinDebug), this.SkipAdTog && (this.SkipAdTog.isChecked = __rea_outer_u.getInstance().isSkipAd());
  }
  onQuickWinToggle(t) {
    __rea_outer_l.QuickWinDebug = t.isChecked;
  }
  onSkipAdToggle(t) {
    __rea_outer_u.getInstance().setSkipAd(t.isChecked), __rea_outer_a.getInstance().syncBannerVisibility();
  }
  onCloseClick() {
    this.hideWithPopDisappear(() => {
      this.hide();
    });
  }
  resolveCloseButton() {
    if (this.closeButton) return;
    const t = this.node.getChildByName("general_close");
    if (!t) return;
    const i = t.getComponent(__rea_outer_s);
    if (i) return void (this.closeButton = i);
    const e = t.addComponent(__rea_outer_s);
    e.transition = __rea_outer_s.Transition.NONE, this.closeButton = e;
  }
}).prototype, "QuickWinTog", [g], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), C = __rea_outer_i(k.prototype, "SkipAdTog", [p], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), b = __rea_outer_i(k.prototype, "closeButton", [d], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), T = k)) || T);
__rea_outer_o._RF.pop();
export { __recovered_export_0 as default };
