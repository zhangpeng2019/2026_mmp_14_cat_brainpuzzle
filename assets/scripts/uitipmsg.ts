// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/uitipmsg.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { applyDecoratedDescriptor as __rea_outer_s } from "./rollupPluginModLoBabelHelpers";
import { initializerDefineProperty as __rea_outer_i } from "./rollupPluginModLoBabelHelpers";
import { cclegacy as __rea_outer_t } from "cc";
import { Label as __rea_outer_n } from "cc";
import { _decorator as __rea_outer_a } from "cc";
import { tween as __rea_outer_o } from "cc";
import { setNodeOpacity as __rea_outer_l } from "./CocosCompat";
import { stopAllTweens as __rea_outer_r } from "./CocosCompat";
import { getUIOpacity as __rea_outer_h } from "./CocosCompat";
import { UIBase as __rea_outer_u } from "./ui-base";
import { UILayer as __rea_outer_c } from "./ui-layer";
import { UIManager as __rea_outer_d } from "./ui-manager";
let __recovered_export_0;
var g, p, b, y, m;
__rea_outer_t._RF.push({}, "e08e2geMe9BhYB4yCISabMh", "uitipmsg", void 0);
const {
  ccclass: F,
  property: f
} = __rea_outer_a;
__recovered_export_0 = (g = F("UITipMsg"), p = f(__rea_outer_n), g((m = __rea_outer_s((y = class e extends __rea_outer_u {
  constructor(...e) {
    super(...e), __rea_outer_i(this, "messageLabel", m, this), this._isFinishingFade = !1;
  }
  static show(s) {
    __rea_outer_d.getInstance().showView(e, __rea_outer_c.TOP, s);
  }
  show() {
    super.show(), this.mountOnTopLayer(), __rea_outer_l(this.node, 255);
  }
  onShowWithParam(e) {
    super.onShowWithParam(e);
    const s = "string" == typeof e ? e : "";
    this.applyMessage(s), this.playVisibleThenFade();
  }
  onDisable() {
    this.unschedule(this.beginFadeOut), this._isFinishingFade || __rea_outer_r(this.node), super.onDisable();
  }
  applyMessage(e) {
    const s = this.resolveMessageLabel();
    s && (s.string = e);
  }
  resolveMessageLabel() {
    var e;
    if (null != (e = this.messageLabel) && e.isValid) return this.messageLabel;
    const s = this.node.getChildByName("general_prompt_box"),
      i = (null == s ? void 0 : s.getChildByName("Msgbody")) ?? null;
    return this.messageLabel = (null == i ? void 0 : i.getComponent(__rea_outer_n)) ?? null, this.messageLabel;
  }
  mountOnTopLayer() {
    const e = __rea_outer_d.getInstance().getLayerRoot(__rea_outer_c.TOP);
    null != e && e.isValid && (this.node.parent !== e && this.node.setParent(e), this.node.setSiblingIndex(e.children.length - 1));
  }
  playVisibleThenFade() {
    this.unschedule(this.beginFadeOut), __rea_outer_r(this.node), __rea_outer_l(this.node, 255), this.scheduleOnce(this.beginFadeOut, 1);
  }
  beginFadeOut() {
    var e;
    if (null == (e = this.node) || !e.isValid) return;
    const s = __rea_outer_h(this.node);
    __rea_outer_o(s).to(1, {
      opacity: 0
    }).call(() => {
      this.hideAfterFade();
    }).start();
  }
  hideAfterFade() {
    var s;
    null != (s = this.node) && s.isValid && this.node.active && (this._isFinishingFade = !0, __rea_outer_d.getInstance().hideView(e), this._isFinishingFade = !1);
  }
}).prototype, "messageLabel", [p], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), b = y)) || b);
__rea_outer_t._RF.pop();
export { __recovered_export_0 as UITipMsg };
