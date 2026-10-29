// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/content-horizontal-scroll.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { UITransform as __rea_outer_o } from "cc";
import { tween as __rea_outer_i } from "cc";
import { Vec3 as __rea_outer_e } from "cc";
import { stopAllTweens as __rea_outer_r } from "./CocosCompat";
let __recovered_export_0, __recovered_export_1, __recovered_export_2, __recovered_export_3, __recovered_export_4;
(__recovered_export_0 = function (n, t, o, i = !0, e = .2) {
  if (!n.isValid) return;
  const r = s(t, o, i, e),
    c = n.position;
  n.setPosition(r, c.y, c.z);
}, __recovered_export_1 = function (n, t, i = {}) {
  const e = n.getComponent(__rea_outer_o),
    r = t.getComponent(__rea_outer_o);
  if (!e || !r) return null;
  const s = r.width,
    a = r.anchorX,
    l = -a * s,
    u = (1 - a) * s,
    m = e.anchorX,
    f = e.width,
    d = c(n, i),
    h = (null == d ? void 0 : d.minEdge) ?? -m * f,
    X = (null == d ? void 0 : d.maxEdge) ?? (1 - m) * f,
    p = l - h;
  if (X - h <= s) return {
    minX: p,
    maxX: p
  };
  return {
    minX: u - X,
    maxX: p
  };
}, __recovered_export_2 = c, __recovered_export_3 = s, __recovered_export_4 = function (n, t, o = .3) {
  if (!n.isValid) return;
  const c = n.position.x,
    s = Math.min(t.maxX, Math.max(t.minX, c)),
    a = n.position;
  if (__rea_outer_r(n), Math.abs(s - c) < .5) return void n.setPosition(s, a.y, a.z);
  __rea_outer_i(n).to(o, {
    position: new __rea_outer_e(s, a.y, a.z)
  }, {
    easing: "sineOut"
  }).start();
}), __rea_outer_t._RF.push({}, "fe3e4QOLK5Ld5x/4R2gfDOK", "content-horizontal-scroll", void 0);
function c(n, t = {}) {
  const i = t.excludedNodes,
    e = t.includeInactive ?? !1;
  let r = Number.POSITIVE_INFINITY,
    c = Number.NEGATIVE_INFINITY,
    s = !1;
  return n.children.forEach(n => {
    if (!n.isValid) return;
    if (!e && !n.active) return;
    if (null != i && i.has(n)) return;
    const t = n.getComponent(__rea_outer_o);
    if (!t) return;
    const a = n.position.x - t.anchorX * t.width,
      l = n.position.x + (1 - t.anchorX) * t.width;
    r = Math.min(r, a), c = Math.max(c, l), s = !0;
  }), s ? {
    minEdge: r,
    maxEdge: c
  } : null;
}
function s(n, t, o, i = .2) {
  if (n > t.maxX) {
    const e = n - t.maxX;
    return o ? t.maxX + e * i : t.maxX;
  }
  if (n < t.minX) {
    const e = n - t.minX;
    return o ? t.minX + e * i : t.minX;
  }
  return n;
}
__rea_outer_t._RF.pop();
export { __recovered_export_0 as applyContentHorizontalScroll, __recovered_export_1 as computeContentHorizontalScrollBounds, __recovered_export_2 as measureChildrenHorizontalExtents, __recovered_export_3 as resolveContentScrollX, __recovered_export_4 as snapBackContentHorizontalScroll };
