// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/math-utils.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_a } from "cc";
let __recovered_export_0;
__rea_outer_a._RF.push({}, "50b11OmthBHoI0AfMmIbQAX", "math-utils", void 0);
__recovered_export_0 = class {
  static clamp(t, a, r) {
    return Math.max(a, Math.min(r, t));
  }
  static lerp(t, a, r) {
    return t + (a - t) * r;
  }
  static distance2D(t, a) {
    const r = a.x - t.x,
      n = a.y - t.y;
    return Math.sqrt(r * r + n * n);
  }
  static distance3D(t, a) {
    const r = a.x - t.x,
      n = a.y - t.y,
      s = a.z - t.z;
    return Math.sqrt(r * r + n * n + s * s);
  }
  static isPointInCircle(t, a, r) {
    return this.distance2D(t, a) <= r;
  }
  static isPointInRect(t, a, r, n, s) {
    return t.x >= a && t.x <= a + n && t.y >= r && t.y <= r + s;
  }
  static randomInt(t, a) {
    return Math.floor(Math.random() * (a - t + 1)) + t;
  }
  static randomFloat(t, a) {
    return Math.random() * (a - t) + t;
  }
  static degToRad(t) {
    return t * Math.PI / 180;
  }
  static radToDeg(t) {
    return 180 * t / Math.PI;
  }
}, __rea_outer_a._RF.pop();
export { __recovered_export_0 as MathUtils };
