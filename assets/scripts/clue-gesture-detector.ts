// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/clue-gesture-detector.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_e } from "cc";
import { DEFAULT_SWIPE_MIN_DISTANCE as __rea_outer_r } from "./clue-level-types";
import { SwipeDirection as __rea_outer_i } from "./clue-level-types";
import { DEFAULT_SWIPE_DIRECTION_RATIO as __rea_outer_n } from "./clue-level-types";
import { DEFAULT_ROUND_TRIP_COUNT as __rea_outer_u } from "./clue-level-types";
import { ClueTriggerKind as __rea_outer_o } from "./clue-level-types";
let __recovered_export_0;
__rea_outer_e._RF.push({}, "fca798sMjZDrqs1aM1G2D91", "clue-gesture-detector", void 0);
__recovered_export_0 = class {
  static isSwipeMatching(t, e, u, o = __rea_outer_r) {
    const c = e.x - t.x,
      s = e.y - t.y,
      a = Math.abs(c),
      d = Math.abs(s);
    switch (u) {
      case __rea_outer_i.Up:
        return s >= o && d >= a * __rea_outer_n;
      case __rea_outer_i.Down:
        return s <= -o && d >= a * __rea_outer_n;
      case __rea_outer_i.Left:
        return c <= -o && a >= d * __rea_outer_n;
      case __rea_outer_i.Right:
        return c >= o && a >= d * __rea_outer_n;
      default:
        return !1;
    }
  }
  static createRoundTripState(t, e = __rea_outer_u, i = __rea_outer_r) {
    return {
      legStartX: t,
      direction: 0,
      roundTripCount: 0,
      requiredCount: e,
      minDistance: i
    };
  }
  static updateHorizontalRoundTrip(t, e) {
    if (0 === t.direction) {
      const r = e - t.legStartX;
      return r >= t.minDistance ? (t.direction = 1, t.legStartX = e) : r <= -t.minDistance && (t.direction = -1, t.legStartX = e), !1;
    }
    if (1 === t.direction) {
      if (t.legStartX - e < t.minDistance) return !1;
      t.roundTripCount += 1, t.direction = -1, t.legStartX = e;
    } else {
      if (e - t.legStartX < t.minDistance) return !1;
      t.roundTripCount += 1, t.direction = 1, t.legStartX = e;
    }
    return t.roundTripCount >= t.requiredCount;
  }
  static getRoundTripProgress(t) {
    return t.requiredCount <= 0 ? 1 : Math.min(t.roundTripCount / t.requiredCount, 1);
  }
  static resolveKind(t) {
    return (null == t ? void 0 : t.kind) ?? __rea_outer_o.Click;
  }
  static resolveMinDistance(t) {
    return (null == t ? void 0 : t.minDistance) ?? __rea_outer_r;
  }
  static resolveRoundTripCount(t) {
    return (null == t ? void 0 : t.roundTripCount) ?? __rea_outer_u;
  }
  static shouldReturnToOrigin(t) {
    return (null == t ? void 0 : t.returnToOrigin) ?? !0;
  }
  static shouldHideItemWhileDragging(t) {
    return (null == t ? void 0 : t.hideItemWhileDragging) ?? !0;
  }
}, __rea_outer_e._RF.pop();
export { __recovered_export_0 as default };
