// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/ParticleUtils.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_o } from "cc";
import { Component as __rea_outer_n } from "cc";
import { NodePool as __rea_outer_s } from "cc";
import { Prefab as __rea_outer_e } from "cc";
import { instantiate as __rea_outer_a } from "cc";
import { Node as __rea_outer_i } from "cc";
import { ParticleSystem as __rea_outer_r } from "cc";
import { _decorator as __rea_outer_c } from "cc";
import { default as __rea_outer_u } from "./FJAssetManager";
import { setNodeZOrder as __rea_outer_l } from "./CocosCompat";
let __recovered_export_0;
var h;
__rea_outer_o._RF.push({}, "7a521g4BUpD+6B5U11tzsN8", "ParticleUtils", void 0);
const {
  ccclass: d
} = __rea_outer_c;
__recovered_export_0 = d("ParticleUtils")(h = class extends __rea_outer_n {
  constructor(...t) {
    super(...t), this.sakura1Pool = new __rea_outer_s(), this.sakura2Pool = new __rea_outer_s();
  }
  async onInit() {
    await new Promise(function (t) {
      __rea_outer_u.load(__rea_outer_u.BundleName.UI, "Sakura1", __rea_outer_e, function () {}, function (o) {
        for (var n = 0; n < 20; n++) {
          var s = __rea_outer_a(o);
          this.sakura1Pool.put(s);
        }
        t();
      }.bind(this));
    }.bind(this)), await new Promise(function (t) {
      __rea_outer_u.load(__rea_outer_u.BundleName.UI, "Sakura2", __rea_outer_e, function () {}, function (o) {
        for (var n = 0; n < 25; n++) {
          var s = __rea_outer_a(o);
          this.sakura2Pool.put(s);
        }
        t();
      }.bind(this));
    }.bind(this)), __rea_outer_l(this.node, 999), this.node.on(__rea_outer_i.EventType.TOUCH_START, this.onTouchStart, this);
  }
  onTouchStart(t) {
    var o = this.sakura1Pool.get(),
      n = this.sakura2Pool.get();
    o.setParent(this.node), n.setParent(this.node);
    const s = t.getLocation();
    o.setPosition(s.x, s.y, 0), n.setPosition(s.x, s.y, 0);
    const e = o.getComponent(__rea_outer_r);
    e.clear(), e.play();
    const a = n.getComponent(__rea_outer_r);
    a.clear(), a.play(), this.scheduleOnce(function () {
      this.sakura1Pool.put(o), this.sakura2Pool.put(n);
    }, 2);
  }
}) || h;
__rea_outer_o._RF.pop();
export { __recovered_export_0 as default };
