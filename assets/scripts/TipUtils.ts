// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/TipUtils.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { NodePool as __rea_outer_o } from "cc";
import { Prefab as __rea_outer_e } from "cc";
import { instantiate as __rea_outer_n } from "cc";
import { Color as __rea_outer_i } from "cc";
import { v3 as __rea_outer_s } from "cc";
import { Label as __rea_outer_l } from "cc";
import { tween as __rea_outer_a } from "cc";
import { cclegacy as __rea_outer_c } from "cc";
import { default as __rea_outer_r } from "./FJAssetManager";
import { getCanvasNode as __rea_outer_u } from "./CocosCompat";
import { setNodeOpacity as __rea_outer_p } from "./CocosCompat";
import { getUIOpacity as __rea_outer_d } from "./CocosCompat";
let __recovered_export_0;
__rea_outer_c._RF.push({}, "5985fYUwcxBKZ2sygdh2UA8", "TipUtils", void 0);
class f {
  static onInit() {
    var t = this;
    this.nodePool = new __rea_outer_o(), __rea_outer_r.load(__rea_outer_r.BundleName.PREFABS, "tips", __rea_outer_e, function () {}, function (o) {
      for (var e = 0; e < 15; e++) {
        var i = __rea_outer_n(o);
        t.nodePool.put(i);
      }
    });
  }
  static showTextTips(t, o, e, n, c, r, f, g) {
    var h = this,
      P = null;
    if (this.nodePool && this.nodePool.size() > 0) {
      P = this.nodePool.get();
      var v = o || __rea_outer_u(),
        y = e || 0,
        C = n || 450,
        U = c || 60,
        m = r || __rea_outer_i.BLUE,
        B = f || 1.4,
        N = g || __rea_outer_s(0, 40),
        T = P.getChildByName("label").getComponent(__rea_outer_l);
      T.string = t, T.fontSize = U, T.lineHeight = U + 10, T.color = m, P.setParent(v), P.position = __rea_outer_s(y, C), console.log("Processing Tips" + t), P.setScale(0, 0, 1), __rea_outer_p(P, 255);
      const b = __rea_outer_d(P);
      __rea_outer_a(P).to(.35, {
        scale: __rea_outer_s(1, 1, 1)
      }).parallel(__rea_outer_a(P).by(B, {
        position: N
      }), __rea_outer_a(b).to(B, {
        opacity: 0
      })).call(function () {
        h.nodePool.put(P);
      }).start();
    }
  }
}
__recovered_export_0 = f, f.nodePool = null, __rea_outer_c._RF.pop();
export { __recovered_export_0 as default };
