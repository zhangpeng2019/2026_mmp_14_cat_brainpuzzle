// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/i18n-item.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { applyDecoratedDescriptor as __rea_outer_t } from "./rollupPluginModLoBabelHelpers";
import { initializerDefineProperty as __rea_outer_n } from "./rollupPluginModLoBabelHelpers";
import { cclegacy as __rea_outer_i } from "cc";
import { _decorator as __rea_outer_a } from "cc";
import { Component as __rea_outer_s } from "cc";
import { Label as __rea_outer_o } from "cc";
import { I18nController as __rea_outer_l } from "./i18n-controller";
let __recovered_export_0;
var r, c, p, h, g, y;
__rea_outer_i._RF.push({}, "e1fc3ApcYBFuKqQOGkF9d8b", "i18n-item", void 0);
const {
  ccclass: u,
  property: d,
  executeInEditMode: L
} = __rea_outer_a;
__recovered_export_0 = (r = u("I18nItem"), c = L(!0), p = d({
  tooltip: "I18n config key"
}), r(h = c((y = __rea_outer_t((g = class extends __rea_outer_s {
  constructor(...e) {
    super(...e), __rea_outer_n(this, "key", y, this), this._label = null, this._lastKey = "", this._isApplying = !1;
  }
  onLoad() {
    this.applyLocalizedText();
  }
  start() {
    this.applyLocalizedText();
  }
  onEnable() {
    __rea_outer_l.getInstance().onLanguageChanged(this.onLanguageChanged, this), this.applyLocalizedText();
  }
  onDisable() {
    __rea_outer_l.getInstance().offLanguageChanged(this.onLanguageChanged, this);
  }
  update() {}
  refresh() {
    this.applyLocalizedText();
  }
  onLanguageChanged() {
    this.applyLocalizedTextSync();
  }
  async applyLocalizedText() {
    if (!this._isApplying) {
      this._isApplying = !0;
      try {
        await __rea_outer_l.getInstance().initialize(), this.applyLocalizedTextSync();
      } finally {
        this._isApplying = !1;
      }
    }
  }
  applyLocalizedTextSync() {
    const e = this.resolveLabel();
    if (!e) return void console.error(`[I18nItem] Label not found on node: ${this.node.name}`);
    if (!this.key) return void (e.string = "");
    const t = __rea_outer_l.getInstance();
    t.isReady() ? e.string = t.getKey(this.key) : e.string = this.key;
  }
  resolveLabel() {
    return null === this._label && (this._label = this.getComponent(__rea_outer_o)), this._label;
  }
}).prototype, "key", [p], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return "";
  }
}), h = g)) || h) || h);
__rea_outer_i._RF.pop();
export { __recovered_export_0 as I18nItem };
