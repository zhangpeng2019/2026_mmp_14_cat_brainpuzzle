// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/ui-loading.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { applyDecoratedDescriptor as __rea_outer_r } from "./rollupPluginModLoBabelHelpers";
import { initializerDefineProperty as __rea_outer_e } from "./rollupPluginModLoBabelHelpers";
import { cclegacy as __rea_outer_t } from "cc";
import { ProgressBar as __rea_outer_i } from "cc";
import { Label as __rea_outer_o } from "cc";
import { _decorator as __rea_outer_a } from "cc";
import { find as __rea_outer_n } from "cc";
import { UIBase as __rea_outer_g } from "./ui-base";
let __recovered_export_0;
var h, l, p, u, c, b, L, d, f;
__rea_outer_t._RF.push({}, "2d7afhYdt5EsIUokC8hor7i", "ui-loading", void 0);
const {
  ccclass: P,
  property: _
} = __rea_outer_a;
__recovered_export_0 = (h = P("UILoading"), l = _(__rea_outer_i), p = _(__rea_outer_o), u = _(__rea_outer_o), h((L = __rea_outer_r((b = class extends __rea_outer_g {
  constructor(...s) {
    super(...s), __rea_outer_e(this, "progressBar", L, this), __rea_outer_e(this, "progressLabel", d, this), __rea_outer_e(this, "tipsLabel", f, this), this._currentProgress = 0, this._targetProgress = 0, this._isAnimating = !1;
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.initializeProgress();
  }
  update(s) {
    this._isAnimating && this.animateProgress(s);
  }
  setProgress(s, r = !0) {
    this._targetProgress = Math.max(0, Math.min(1, s)), this._currentProgress = this._targetProgress, this._isAnimating = !1, this.updateDisplay();
  }
  setTips(s) {
    this.tipsLabel && (this.tipsLabel.string = s || "");
  }
  reset() {
    this._currentProgress = 0, this._targetProgress = 0, this._isAnimating = !1, this.tipsLabel && (this.tipsLabel.string = ""), this.updateDisplay();
  }
  resolveReferences() {
    if (this.progressBar || (this.progressBar = this.getComponentInChildren(__rea_outer_i)), !this.progressLabel) {
      const r = this.getComponentsInChildren(__rea_outer_o);
      for (const e of r) {
        var s;
        if ("ProgressBar" === (null == (s = e.node.parent) ? void 0 : s.name) || "Bar" === e.node.name) {
          this.progressLabel = e;
          break;
        }
      }
      !this.progressLabel && r.length > 0 && (this.progressLabel = r[r.length - 1]);
    }
    if (!this.tipsLabel) {
      const s = __rea_outer_n("Label", this.node) ?? __rea_outer_n("bottombg/Label", this.node);
      s && (this.tipsLabel = s.getComponent(__rea_outer_o));
    }
  }
  initializeProgress() {
    this.progressBar && (this.progressBar.progress = 0), this.progressLabel && (this.progressLabel.string = "0%"), this.tipsLabel && (this.tipsLabel.string = "Loading...");
  }
  animateProgress(s) {
    const r = this._targetProgress - this._currentProgress;
    Math.abs(r) < .01 ? (this._currentProgress = this._targetProgress, this._isAnimating = !1) : this._currentProgress += 2 * r * s, this.updateDisplay();
  }
  updateDisplay() {
    if (this.progressBar && (this.progressBar.progress = this._currentProgress), this.progressLabel) {
      const s = Math.floor(100 * this._currentProgress);
      this.progressLabel.string = `${s}%`;
    }
  }
}).prototype, "progressBar", [l], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), d = __rea_outer_r(b.prototype, "progressLabel", [p], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), f = __rea_outer_r(b.prototype, "tipsLabel", [u], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), c = b)) || c);
__rea_outer_t._RF.pop();
export { __recovered_export_0 as UILoading };
