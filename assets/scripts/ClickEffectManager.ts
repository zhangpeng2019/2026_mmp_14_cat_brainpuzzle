// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/ClickEffectManager.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { applyDecoratedDescriptor as __rea_outer_t } from "./rollupPluginModLoBabelHelpers";
import { initializerDefineProperty as __rea_outer_o } from "./rollupPluginModLoBabelHelpers";
import { cclegacy as __rea_outer_i } from "cc";
import { Prefab as __rea_outer_c } from "cc";
import { _decorator as __rea_outer_n } from "cc";
import { Component as __rea_outer_r } from "cc";
import { NodePool as __rea_outer_s } from "cc";
import { Node as __rea_outer_l } from "cc";
import { instantiate as __rea_outer_f } from "cc";
import { Vec3 as __rea_outer_a } from "cc";
import { sp as __rea_outer_d } from "cc";
import { getUITransform as __rea_outer_u } from "./CocosCompat";
let __recovered_export_0;
var p, h, P, k, E;
__rea_outer_i._RF.push({}, "fb42ebNL/lNPLoA2/YzrkLK", "ClickEffectManager", void 0);
const {
  ccclass: _,
  property: C
} = __rea_outer_n;
__recovered_export_0 = (p = _("ClickEffectManager"), h = C(__rea_outer_c), p((E = __rea_outer_t((k = class extends __rea_outer_r {
  constructor(...e) {
    super(...e), __rea_outer_o(this, "ClickEffect_Prefab", E, this), this._clickEffectNodePool = new __rea_outer_s();
  }
  onEnable() {
    this._clickEffectNodePool.size() < 10 && (this._clickEffectNodePool.clear(), this.createClickEffectNodePool()), this.node.on(__rea_outer_l.EventType.TOUCH_START, this.onDown, this), this.node.setSiblingIndex(10);
  }
  onDisable() {
    this.node.off(__rea_outer_l.EventType.TOUCH_START, this.onDown, this);
  }
  createClickEffectNodePool() {
    if (this.ClickEffect_Prefab) for (let e = 0; e < 10; e++) {
      const e = __rea_outer_f(this.ClickEffect_Prefab);
      this._clickEffectNodePool.put(e);
    }
  }
  onDown(e) {
    var t;
    const o = this._clickEffectNodePool.get();
    if (!o) return;
    o.setParent(this.node);
    const i = e.getUILocation(),
      c = __rea_outer_u(this.node).convertToNodeSpaceAR(new __rea_outer_a(i.x, i.y, 0));
    o.setPosition(c);
    const n = null == (t = o.children[0]) ? void 0 : t.getComponent(__rea_outer_d.Skeleton);
    if (!n) return o.removeFromParent(), void this._clickEffectNodePool.put(o);
    n.setAnimation(0, "animation", !1), n.setCompleteListener(() => {
      o.removeFromParent(), this._clickEffectNodePool.put(o);
    });
  }
}).prototype, "ClickEffect_Prefab", [h], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), P = k)) || P);
__rea_outer_i._RF.pop();
export { __recovered_export_0 as default };
