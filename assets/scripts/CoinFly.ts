// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/CoinFly.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { applyDecoratedDescriptor as __rea_outer_t } from "./rollupPluginModLoBabelHelpers";
import { initializerDefineProperty as __rea_outer_i } from "./rollupPluginModLoBabelHelpers";
import { cclegacy as __rea_outer_n } from "cc";
import { Node as __rea_outer_e } from "cc";
import { Prefab as __rea_outer_r } from "cc";
import { _decorator as __rea_outer_s } from "cc";
import { Component as __rea_outer_a } from "cc";
import { NodePool as __rea_outer_l } from "cc";
import { instantiate as __rea_outer_c } from "cc";
import { Vec3 as __rea_outer_d } from "cc";
import { tween as __rea_outer_u } from "cc";
import { v3 as __rea_outer_h } from "cc";
import { default as __rea_outer_p } from "./AudioManager";
let __recovered_export_0;
var f, P, y, g, m, v, C, b, M;
__rea_outer_n._RF.push({}, "ce2d495pZ9MgqlgCvYpYhGz", "CoinFly", void 0);
const {
  ccclass: N,
  property: F
} = __rea_outer_s;
__recovered_export_0 = (f = N("CoinFly"), P = F(__rea_outer_e), y = F(__rea_outer_e), g = F(__rea_outer_r), f((C = __rea_outer_t((v = class extends __rea_outer_a {
  constructor(...o) {
    super(...o), __rea_outer_i(this, "startNode", C, this), __rea_outer_i(this, "endNode", b, this), __rea_outer_i(this, "coin", M, this), this.coinPool = null;
  }
  onLoad() {
    this.coinPool = new __rea_outer_l(), this.initCoinPool(20);
  }
  start() {}
  initCoinPool(o) {
    for (var t = 0; t < o; t++) {
      var i = __rea_outer_c(this.coin);
      this.coinPool.put(i);
    }
  }
  playAnim() {
    console.log("Start flying gold coins");
    var o = 15 * Math.random() + 10,
      t = this.startNode.getPosition(),
      i = this.endNode.getPosition();
    this.playCoinFlyAnim(o, t, i);
  }
  playCoinFlyAnim(o, t, i, n = 130) {
    var e = this,
      r = this.coinPool.size(),
      s = r > o ? 0 : o - r;
    this.initCoinPool(s);
    var a = this.getCirclePoints(n, t, o).map(function (o) {
      var n = e.coinPool.get();
      return n.setPosition(t), e.node.addChild(n), {
        node: n,
        stPos: t,
        mdPos: o,
        edPos: i,
        dis: __rea_outer_d.distance(o, i)
      };
    });
    (a = a.sort(function (o, t) {
      return o.dis - t.dis > 0 ? 1 : o.dis - t.dis < 0 ? -1 : 0;
    })).forEach(function (o, t) {
      __rea_outer_u(o.node).to(.3, {
        position: __rea_outer_h(o.mdPos.x, o.mdPos.y, 0)
      }).delay(.01 * t).to(.8, {
        position: __rea_outer_h(o.edPos.x, o.edPos.y, 0)
      }).call(function () {
        console.log("Finished flying." + t), __rea_outer_p.playEffect(__rea_outer_p.audioName.COINGOLD), e.coinPool.put(o.node);
      }).start();
    });
  }
  getCirclePoints(o, t, i, n = 60) {
    for (var e = [], r = Math.PI / 180 * Math.round(360 / i), s = 0; s < i; s++) {
      var a = t.x + o * Math.sin(r * s),
        l = t.y + o * Math.cos(r * s);
      e.unshift(__rea_outer_h(a + Math.random() * n, l + Math.random() * n, 0));
    }
    return e;
  }
}).prototype, "startNode", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), b = __rea_outer_t(v.prototype, "endNode", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), M = __rea_outer_t(v.prototype, "coin", [g], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), m = v)) || m);
__rea_outer_n._RF.pop();
export { __recovered_export_0 as default };
