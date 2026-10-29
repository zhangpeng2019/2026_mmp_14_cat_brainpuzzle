// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/CocosCompat.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { director as __rea_outer_e } from "cc";
import { find as __rea_outer_o } from "cc";
import { Canvas as __rea_outer_i } from "cc";
import { UITransform as __rea_outer_r } from "cc";
import { UIOpacity as __rea_outer_s } from "cc";
import { Tween as __rea_outer_c } from "cc";
import { assetManager as __rea_outer_u } from "cc";
import { BrainPuzzleRuntime } from "./features/brainpuzzle/BrainPuzzleRuntime";
let __recovered_export_0: () => void;
let __recovered_export_1, __recovered_export_2, __recovered_export_3, __recovered_export_4, __recovered_export_5, __recovered_export_6, __recovered_export_7, __recovered_export_8, __recovered_export_9, __recovered_export_10, __recovered_export_11, __recovered_export_12, __recovered_export_13, __recovered_export_14, __recovered_export_15, __recovered_export_16, __recovered_export_17, __recovered_export_18, __recovered_export_19, __recovered_export_20, __recovered_export_21;
(__recovered_export_0 = function () {
  a = null;
}, __recovered_export_1 = l, __recovered_export_2 = function n(t, e = 100, o = 100) {
  l(t, e, o), t.children.forEach(t => n(t));
}, __recovered_export_3 = function () {
  if (BrainPuzzleRuntime.root?.isValid) return BrainPuzzleRuntime.root;
  if (a && a.isValid) return a;
  const n = __rea_outer_e.getScene();
  if (!n) throw new Error("CocosCompat.getCanvasNode: no active scene");
  const t = __rea_outer_o("Canvas", n) ?? n.getChildByName("Canvas");
  if (t) return a = t, t;
  const r = n.getComponentInChildren(__rea_outer_i);
  if (r) return a = r.node, r.node;
  return a = n, n;
}, __recovered_export_4 = function (n) {
  return d(n).anchorX;
}, __recovered_export_5 = function (n) {
  return d(n).anchorY;
}, __recovered_export_6 = function (n) {
  return d(n).height;
}, __recovered_export_7 = function (n) {
  return f(n).opacity;
}, __recovered_export_8 = function (n) {
  return d(n).contentSize.clone();
}, __recovered_export_9 = function (n) {
  return d(n).width;
}, __recovered_export_10 = f, __recovered_export_11 = d, __recovered_export_12 = function (n) {
  var t;
  if (null == n || !n.isValid || null == (t = n.node) || !t.isValid) return !1;
  const e = n.spriteFrame;
  if (null == e || !e.isValid) return !1;
  return null != e.texture;
}, __recovered_export_13 = function (n) {
  n && __rea_outer_u.releaseAsset(n);
}, __recovered_export_14 = function (n, t) {
  d(n).height = t;
}, __recovered_export_15 = function (n, t) {
  f(n).opacity = t;
}, __recovered_export_16 = function (n, t, e) {
  const o = n.position;
  n.setPosition(t, e, o.z);
}, __recovered_export_17 = function (n, t) {
  d(n).width = t;
}, __recovered_export_18 = function (n, t) {
  d(n).priority = t;
  const e = n.parent;
  if (e) {
    const n = e.children.slice();
    n.sort((n, t) => {
      var e, o;
      return ((null == (e = n.getComponent(__rea_outer_r)) ? void 0 : e.priority) ?? 0) - ((null == (o = t.getComponent(__rea_outer_r)) ? void 0 : o.priority) ?? 0);
    }), n.forEach((n, t) => {
      n.setSiblingIndex(t);
    });
  }
}, __recovered_export_19 = p, __recovered_export_20 = g, __recovered_export_21 = function (n) {
  n.forEach(n => {
    g(n);
  });
}), __rea_outer_t._RF.push({}, "3d1c4ViGAlO9pz4qh7ZVHjm", "CocosCompat", void 0);
let a = null;
function l(n, t = 100, e = 100) {
  let o = n.getComponent(__rea_outer_r);
  if (o) return o;
  o = n.addComponent(__rea_outer_r);
  const i = n,
    s = i._contentSize,
    c = i._anchorPoint;
  return s ? o.setContentSize(s.width, s.height) : o.setContentSize(t, e), c && o.setAnchorPoint(c.x, c.y), o;
}
function d(n) {
  const t = n.getComponent(__rea_outer_r);
  return t || l(n);
}
function f(n) {
  let t = n.getComponent(__rea_outer_s);
  return t || (t = n.addComponent(__rea_outer_s)), t;
}
function p(n) {
  if (null == n || !n.isValid) return;
  __rea_outer_c.stopAllByTarget(n);
  const t = n.getComponent(__rea_outer_s);
  t && __rea_outer_c.stopAllByTarget(t);
}
function g(n) {
  var t;
  null != n && n.isValid && null != (t = n.node) && t.isValid && (__rea_outer_c.stopAllByTarget(n), p(n.node));
}
__rea_outer_t._RF.pop();
export { __recovered_export_0 as clearCanvasNodeCache, __recovered_export_1 as ensureUITransform, __recovered_export_2 as ensureUITransformTree, __recovered_export_3 as getCanvasNode, __recovered_export_4 as getNodeAnchorX, __recovered_export_5 as getNodeAnchorY, __recovered_export_6 as getNodeHeight, __recovered_export_7 as getNodeOpacity, __recovered_export_8 as getNodeSize, __recovered_export_9 as getNodeWidth, __recovered_export_10 as getUIOpacity, __recovered_export_11 as getUITransform, __recovered_export_12 as isSpriteRenderable, __recovered_export_13 as releaseAsset, __recovered_export_14 as setNodeHeight, __recovered_export_15 as setNodeOpacity, __recovered_export_16 as setNodePositionXY, __recovered_export_17 as setNodeWidth, __recovered_export_18 as setNodeZOrder, __recovered_export_19 as stopAllTweens, __recovered_export_20 as stopSpriteTweens, __recovered_export_21 as stopSpritesTweens };
