// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/clue-hit-tester.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { Vec2 as __rea_outer_e } from "cc";
import { UITransform as __rea_outer_n } from "cc";
import { cclegacy as __rea_outer_i } from "cc";
let __recovered_export_0, __recovered_export_1;
__rea_outer_i._RF.push({}, "79e19HAMsNLvIHJNnjYSzRw", "clue-hit-tester", void 0);
const r = __recovered_export_0 = 10;
class o {
  static getTouchPoint(t) {
    const n = t.getUILocation();
    return new __rea_outer_e(n.x, n.y);
  }
  static isPointInside(t, e) {
    if (null == t || !t.isValid || !t.activeInHierarchy) return !1;
    const i = t.getComponent(__rea_outer_n);
    return !!i && i.getBoundingBoxToWorld().contains(e);
  }
  static getRectGap(t, e) {
    const n = Math.max(0, t.x - (e.x + e.width), e.x - (t.x + t.width)),
      i = Math.max(0, t.y - (e.y + e.height), e.y - (t.y + t.height));
    return Math.hypot(n, i);
  }
  static isRectWithinDragDistance(t, e, n = r) {
    return o.getRectGap(t, e) <= n;
  }
  static isDragNearTarget(t, e, i = r, c = !0) {
    if (null == t || !t.isValid || null == e || !e.isValid) return !1;
    if (c && !e.activeInHierarchy) return !1;
    const s = t.getComponent(__rea_outer_n),
      a = e.getComponent(__rea_outer_n);
    return !(!s || !a) && o.isRectWithinDragDistance(s.getBoundingBoxToWorld(), a.getBoundingBoxToWorld(), i);
  }
  static getRenderOrder(t) {
    if (null == t || !t.isValid) return -1;
    let e = 0,
      n = 1,
      i = t;
    for (; i;) e += i.getSiblingIndex() * n, n *= 128, i = i.parent;
    return e;
  }
  static pickTopmost(t, e) {
    let n = null,
      i = -1;
    return t.forEach(t => {
      if (!o.isPointInside(t.node, e)) return;
      const r = o.getRenderOrder(t.node);
      r <= i || (i = r, n = t.value);
    }), n;
  }
}
__recovered_export_1 = o, __rea_outer_i._RF.pop();
export { __recovered_export_0 as DRAG_HIT_DISTANCE, __recovered_export_1 as default };
