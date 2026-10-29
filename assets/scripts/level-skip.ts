// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/level-skip.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_i } from "cc";
import { _decorator as __rea_outer_e } from "cc";
import { Component as __rea_outer_s } from "cc";
import { Button as __rea_outer_n } from "cc";
import { game as __rea_outer_l } from "cc";
import { default as __rea_outer_o } from "./LevelManager";
import { default as __rea_outer_a } from "./AudioManager";
let __recovered_export_0;
var u, c;
__rea_outer_i._RF.push({}, "a7c4ekbL1hNaps+HY8MWm5C", "level-skip", void 0);
const {
  ccclass: r
} = __rea_outer_e;
__recovered_export_0 = r("LevelSkip")(((c = class t extends __rea_outer_s {
  constructor(...t) {
    super(...t), this._skipButton = null, this._hasRequestedFast = !1, this._isDismissing = !1;
  }
  onLoad() {
    t.ensureDtHook(), this.bindSkipButton();
  }
  onDestroy() {
    this.unbindSkipButton(), t.setTimeScale(1);
  }
  update() {
    this._isDismissing || this.shouldDismissOverlay() && this.dismissOverlay();
  }
  static resetTimeScale() {
    t.setTimeScale(1);
  }
  bindSkipButton() {
    var t;
    const i = (null == (t = this.node.getChildByName("UIPanel")) ? void 0 : t.getChildByName("ButtonSkip")) ?? null;
    this._skipButton = (null == i ? void 0 : i.getComponent(__rea_outer_n)) ?? null, this._skipButton ? this._skipButton.node.on(__rea_outer_n.EventType.CLICK, this.onSkipClick, this) : console.warn("[LevelSkip] ButtonSkip not found");
  }
  unbindSkipButton() {
    var t;
    null != (t = this._skipButton) && null != (t = t.node) && t.isValid ? (this._skipButton.node.off(__rea_outer_n.EventType.CLICK, this.onSkipClick, this), this._skipButton = null) : this._skipButton = null;
  }
  onSkipClick() {
    if (this._hasRequestedFast || this._isDismissing) return;
    const i = __rea_outer_o.getInstance().m_Level_Src;
    null != i && i.isValid && i.skipOpeningToPlay() || (this._hasRequestedFast = !0, t.setTimeScale(2));
  }
  shouldDismissOverlay() {
    const t = __rea_outer_o.getInstance(),
      i = t.m_Level_Node;
    if (null == i || !i.isValid) return !0;
    const e = t.m_Level_Src;
    return null == e || !e.isValid || "number" != typeof e.phase || e.phase >= 1;
  }
  dismissOverlay() {
    var i;
    this._isDismissing = !0, t.setTimeScale(1), null != (i = this.node) && i.isValid && this.node.destroy();
  }
  static ensureDtHook() {
    if (t._isDtHooked) return;
    const i = __rea_outer_l;
    t._originalCalculateDt = i._calculateDT.bind(__rea_outer_l), i._calculateDT = i => {
      const e = t._originalCalculateDt(i);
      return 1 === t._timeScale ? e : e * t._timeScale;
    }, t._isDtHooked = !0;
  }
  static setTimeScale(i) {
    t._timeScale = i, __rea_outer_a.setVoicePlaybackRate(i);
  }
})._isDtHooked = !1, c._originalCalculateDt = null, c._timeScale = 1, u = c)) || u;
__rea_outer_i._RF.pop();
export { __recovered_export_0 as LevelSkip };
