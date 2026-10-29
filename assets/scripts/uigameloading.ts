// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/uigameloading.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { applyDecoratedDescriptor as __rea_outer_e } from "./rollupPluginModLoBabelHelpers";
import { initializerDefineProperty as __rea_outer_t } from "./rollupPluginModLoBabelHelpers";
import { cclegacy as __rea_outer_o } from "cc";
import { ProgressBar as __rea_outer_s } from "cc";
import { Label as __rea_outer_n } from "cc";
import { Sprite as __rea_outer_l } from "cc";
import { _decorator as __rea_outer_a } from "cc";
import { UITransform as __rea_outer_r } from "cc";
import { tween as __rea_outer_p } from "cc";
import { Vec3 as __rea_outer_c } from "cc";
import { UIBase as __rea_outer_h } from "./ui-base";
let __recovered_export_0;
var u, g, L, d, b, v, m, f, _, y, w, A, P;
__rea_outer_o._RF.push({}, "a7c4eKRa49NOp4VLw2MR7Gm", "uigameloading", void 0);
const {
    ccclass: C,
    property: z
  } = __rea_outer_a,
  M = "Loading ...";
__recovered_export_0 = (u = C("UIGameLoading"), g = z(__rea_outer_s), L = z(__rea_outer_n), d = z(__rea_outer_l), b = z(__rea_outer_l), v = z(__rea_outer_l), u((_ = __rea_outer_e((f = class extends __rea_outer_h {
  constructor(...i) {
    super(...i), __rea_outer_t(this, "LevelLoadProgress", _, this), __rea_outer_t(this, "LevelLoadProgressLabel", y, this), __rea_outer_t(this, "Magnifier", w, this), __rea_outer_t(this, "circle_small", A, this), __rea_outer_t(this, "circle_big", P, this), this._loopTween = null, this._isLoopAnimating = !1, this._isDownloading = !1, this._loadingStatusLabel = null;
  }
  show() {
    super.show(), this.startLoopAnimation();
  }
  hide() {
    this.stopLoopAnimation(), super.hide();
  }
  onDisable() {
    this.stopLoopAnimation(), super.onDisable();
  }
  setLevelLoadProgress(i, e = !1) {
    const t = Math.min(1, Math.max(0, i));
    this._isDownloading = e, this.LevelLoadProgress && (this.LevelLoadProgress.progress = t), this.applyProgressLabels(t);
  }
  applyProgressLabels(i) {
    const e = this.resolveLoadingStatusLabel();
    if (this._isDownloading) {
      if (this.LevelLoadProgressLabel) {
        const e = Math.floor(100 * i);
        this.LevelLoadProgressLabel.string = i >= 1 ? M : `DownLoad ${e}%`, this.ensureDownloadLabelWidth();
      }
      e && (e.node.active = !0, e.string = M);
    } else this.LevelLoadProgressLabel && (this.LevelLoadProgressLabel.string = M), e && (e.node.active = !1);
  }
  resolveLoadingStatusLabel() {
    var i, e, t;
    if (null != (i = this._loadingStatusLabel) && i.isValid) return this._loadingStatusLabel;
    const o = null == (e = this.LevelLoadProgress) ? void 0 : e.node,
      s = null == o || null == (t = o.parent) ? void 0 : t.getChildByName("ProgressLabel-001");
    return this._loadingStatusLabel = (null == s ? void 0 : s.getComponent(__rea_outer_n)) ?? null, this._loadingStatusLabel;
  }
  ensureDownloadLabelWidth() {
    var i;
    const e = null == (i = this.LevelLoadProgressLabel) ? void 0 : i.node.getComponent(__rea_outer_r);
    e && e.contentSize.width < 240 && e.setContentSize(240, e.contentSize.height);
  }
  startLoopAnimation() {
    var i;
    if (this.stopLoopAnimation(), null == (i = this.Magnifier) || !i.node) return;
    const e = this.Magnifier.node,
      t = e.position;
    e.setPosition(t.x, 316, t.z), this._isLoopAnimating = !0, this.applyCirclesAtTop(), this.playLoopCycle(e);
  }
  stopLoopAnimation() {
    var i;
    if (this._isLoopAnimating = !1, this._loopTween && (this._loopTween.stop(), this._loopTween = null), null != (i = this.Magnifier) && i.node) {
      const i = this.Magnifier.node.position;
      this.Magnifier.node.setPosition(i.x, 316, i.z);
    }
    this.applyCirclesAtTop();
  }
  playLoopCycle(i) {
    if (!this._isLoopAnimating || !i.isValid) return;
    const e = i.position.x,
      t = i.position.z;
    this.applyCirclesAtTop(), this._loopTween = __rea_outer_p(i).to(.25, {
      position: new __rea_outer_c(e, 220, t)
    }, {
      easing: "quadIn"
    }).call(() => {
      this.applyCirclesAtBottom();
    }).to(.25, {
      position: new __rea_outer_c(e, 316, t)
    }, {
      easing: "quadOut"
    }).call(() => {
      this.applyCirclesAtTop(), this.playLoopCycle(i);
    }).start();
  }
  applyCirclesAtTop() {
    this.setCircleActive(this.circle_big, !0), this.setCircleActive(this.circle_small, !1);
  }
  applyCirclesAtBottom() {
    this.setCircleActive(this.circle_small, !0), this.setCircleActive(this.circle_big, !1);
  }
  setCircleActive(i, e) {
    null != i && i.node && (i.node.active = e);
  }
}).prototype, "LevelLoadProgress", [g], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), y = __rea_outer_e(f.prototype, "LevelLoadProgressLabel", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), w = __rea_outer_e(f.prototype, "Magnifier", [d], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), A = __rea_outer_e(f.prototype, "circle_small", [b], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), P = __rea_outer_e(f.prototype, "circle_big", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), m = f)) || m);
__rea_outer_o._RF.pop();
export { __recovered_export_0 as UIGameLoading };
