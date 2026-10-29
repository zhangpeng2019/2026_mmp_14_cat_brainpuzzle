// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/rope-layout.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { Vec2 as __rea_outer_n } from "cc";
let __recovered_export_0;
__recovered_export_0 = function (e) {
  const t = e.end.x - e.start.x,
    a = e.end.y - e.start.y,
    c = Math.hypot(t, a);
  if (e.segmentLength <= 0 || c <= 0) return {
    direction: new __rea_outer_n(1, 0),
    distance: 0,
    angleRadians: 0,
    segmentCount: 0,
    segmentScale: 1
  };
  const s = function (e, t) {
    const n = Math.max(1, Math.round(e / t));
    return {
      segmentCount: n,
      segmentScale: e / (n * t)
    };
  }(c, e.segmentLength);
  return {
    direction: new __rea_outer_n(t / c, a / c),
    distance: c,
    angleRadians: Math.atan2(a, t),
    segmentCount: s.segmentCount,
    segmentScale: s.segmentScale
  };
}, __rea_outer_t._RF.push({}, "1f8e2xKm31OMYagXSx/Gz6Q", "rope-layout", void 0), __rea_outer_t._RF.pop();
export { __recovered_export_0 as calculateRopeLayout };
