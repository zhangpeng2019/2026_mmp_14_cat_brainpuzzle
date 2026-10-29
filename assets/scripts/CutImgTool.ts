// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/CutImgTool.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { SpriteFrame as __rea_outer_e } from "cc";
import { rect as __rea_outer_r } from "cc";
import { cclegacy as __rea_outer_u } from "cc";
let __recovered_export_0;
__rea_outer_u._RF.push({}, "699cf7s6ypMgrnuxgShOEug", "CutImgTool", void 0);
__recovered_export_0 = class {
  constructor() {}
  static cutImg(t, u, o, i, a, c, g) {
    void 0 === g && (g = 0);
    for (var n = t.getTexture(), s = t.getOriginalSize(), h = 0, f = [], l = 0; l < u; l++) for (var p = 0; p < o; p++) if (l * o + p >= g) {
      if (p * i + i > s.width || l * a + a > s.height) return console.error("CutImgTool >> cut map is beyond the scope of large map, large map xMax,yMax:", s.width, s.height, "Cut-out range xMax,yMax:", p * i + i, l * a + a), f;
      var m = new __rea_outer_e(n, __rea_outer_r(0, 0, n.width, n.height));
      if (m.setRect(__rea_outer_r(p * i, l * a, i, a)), f.push(m), ++h >= c) return f;
    }
    return f;
  }
}, __rea_outer_u._RF.pop();
export { __recovered_export_0 as default };
