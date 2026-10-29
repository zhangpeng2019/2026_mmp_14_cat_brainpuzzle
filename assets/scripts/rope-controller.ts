// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/rope-controller.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { applyDecoratedDescriptor as __rea_outer_t } from "./rollupPluginModLoBabelHelpers";
import { initializerDefineProperty as __rea_outer_n } from "./rollupPluginModLoBabelHelpers";
import { cclegacy as __rea_outer_o } from "cc";
import { Prefab as __rea_outer_r } from "cc";
import { Node as __rea_outer_i } from "cc";
import { _decorator as __rea_outer_s } from "cc";
import { Component as __rea_outer_a } from "cc";
import { assetManager as __rea_outer_l } from "cc";
import { Vec2 as __rea_outer_c } from "cc";
import { instantiate as __rea_outer_h } from "cc";
import { RigidBody2D as __rea_outer_d } from "cc";
import { ERigidBody2DType as __rea_outer_g } from "cc";
import { Vec3 as __rea_outer_p } from "cc";
import { PhysicsSystem2D as __rea_outer_u } from "cc";
import { calculateRopeLayout as __rea_outer_m } from "./rope-layout";
import { RopeItem as __rea_outer_y } from "./rope-item";
let __recovered_export_0;
var f, S, b, P, L, R, v, w, B, A, C, I, _, E, x, G, z, D, N;
__rea_outer_o._RF.push({}, "3b0a45sHZ9AU6jCf06bPVoS", "rope-controller", void 0);
const {
    ccclass: O,
    property: T
  } = __rea_outer_s,
  V = 180 / Math.PI;
__recovered_export_0 = (f = O("RopeController"), S = T({
  type: __rea_outer_r,
  tooltip: "RopeItem prefab. Empty loads RopeItem from the level bundle."
}), b = T({
  type: __rea_outer_i,
  tooltip: "Rope start in world space."
}), P = T({
  type: __rea_outer_i,
  tooltip: "Rope end in world space."
}), L = T({
  tooltip: "0 uses the prefab visual width (23)."
}), R = T({
  tooltip: "Generate in start() after the prefab is ready."
}), v = T({
  tooltip: "Connect the first segment to the start body."
}), w = T({
  tooltip: "Connect the last segment to the end body."
}), B = T({
  tooltip: "Gravity scale written to every dynamic segment."
}), f((I = __rea_outer_t((C = class extends __rea_outer_a {
  constructor(...e) {
    super(...e), __rea_outer_n(this, "ropeItemPrefab", I, this), __rea_outer_n(this, "startPoint", _, this), __rea_outer_n(this, "endPoint", E, this), __rea_outer_n(this, "segmentLength", x, this), __rea_outer_n(this, "generateOnLoad", G, this), __rea_outer_n(this, "isStartPinned", z, this), __rea_outer_n(this, "isEndPinned", D, this), __rea_outer_n(this, "gravityScale", N, this), this._segments = [], this._tempAnchors = [];
  }
  start() {
    this.setup();
  }
  onDestroy() {
    this.cleanup();
  }
  generateRope() {
    const e = this.resolveWorldPoints();
    return e ? this.executeGenerate(e) : (console.error("RopeController: startPoint and endPoint are required"), []);
  }
  generateRopeBetween(e, t) {
    return this.executeGenerate({
      start: e,
      end: t
    });
  }
  clearRope() {
    this._segments.forEach(e => this.destroySegment(e)), this._segments.length = 0, this._tempAnchors.forEach(e => this.destroyNode(e)), this._tempAnchors.length = 0;
  }
  getSegments() {
    return this._segments;
  }
  setup() {
    this.ropeItemPrefab ? this.tryGenerateOnLoad() : this.loadPrefabThenGenerate();
  }
  cleanup() {
    this.clearRope();
  }
  tryGenerateOnLoad() {
    this.generateOnLoad && this.generateRope();
  }
  loadPrefabThenGenerate() {
    const e = this.resolveLevelBundleName(),
      t = e ? __rea_outer_l.getBundle(e) : null;
    t ? t.load("RopeItem", __rea_outer_r, (e, t) => {
      !e && t && this.isValid ? (this.ropeItemPrefab = t, this.tryGenerateOnLoad()) : console.error("RopeController: failed to load RopeItem prefab", e);
    }) : console.error("RopeController: level bundle is not loaded for RopeItem");
  }
  resolveLevelBundleName() {
    let e = this.node;
    for (; e;) {
      if (/^Level_\d+$/.test(e.name)) return e.name;
      e = e.parent;
    }
    return null;
  }
  resolveWorldPoints() {
    return this.startPoint && this.endPoint ? {
      start: this.startPoint.worldPosition.clone(),
      end: this.endPoint.worldPosition.clone()
    } : null;
  }
  executeGenerate(e) {
    if (this.clearRope(), this.ensurePhysicsSystem(), !this.ropeItemPrefab) return console.error("RopeController: ropeItemPrefab is missing"), [];
    const t = this.instantiateSegment();
    if (!t) return [];
    const n = this.resolveSegmentLength(t),
      o = __rea_outer_m({
        start: new __rea_outer_c(e.start.x, e.start.y),
        end: new __rea_outer_c(e.end.x, e.end.y),
        segmentLength: n
      });
    return o.segmentCount <= 0 ? (this.destroySegment(t), []) : this.buildSegments(t, e, o);
  }
  resolveSegmentLength(e) {
    return this.segmentLength > 0 ? this.segmentLength : e.getSegmentLength();
  }
  buildSegments(e, t, n) {
    const o = this.instantiateRemainingSegments(e, n);
    return this.placeAllSegments(o, t, n), this.connectGeneratedSegments(o, t), this._segments.push(...o), this._segments;
  }
  instantiateRemainingSegments(e, t) {
    const n = [e];
    for (let e = 1; e < t.segmentCount; e += 1) {
      const e = this.instantiateSegment();
      e && n.push(e);
    }
    return 1 !== t.segmentScale && n.forEach(e => e.applyLengthScale(t.segmentScale)), n;
  }
  instantiateSegment() {
    if (!this.ropeItemPrefab) return null;
    const e = __rea_outer_h(this.ropeItemPrefab);
    this.node.addChild(e);
    const t = e.getComponent(__rea_outer_y) ?? e.addComponent(__rea_outer_y);
    return t.ensurePhysics(), t.getRigidBody().gravityScale = this.gravityScale, t;
  }
  placeAllSegments(e, t, n) {
    const o = n.angleRadians * V;
    let r = 0;
    e.forEach(e => {
      const i = e.getSegmentLength();
      this.placeSegment({
        item: e,
        start: t.start,
        direction: n.direction,
        prefixLength: r,
        length: i,
        angleDegrees: o
      }), r += i;
    });
  }
  placeSegment(e) {
    const t = e.prefixLength + e.length / 2,
      n = e.start.x + e.direction.x * t,
      o = e.start.y + e.direction.y * t;
    e.item.node.setWorldPosition(n, o, e.start.z), e.item.node.setWorldRotationFromEuler(0, 0, e.angleDegrees);
  }
  connectGeneratedSegments(e, t) {
    this.isStartPinned && this.pinFirstSegment(e[0], t.start);
    for (let t = 1; t < e.length; t += 1) this.connectAdjacentSegments(e[t], e[t - 1]);
    this.isEndPinned && this.pinLastSegment(e[e.length - 1], t.end);
  }
  pinFirstSegment(e, t) {
    const n = this.resolveStartBody(t);
    e.connectToBody({
      connectedBody: n,
      localAnchor: new __rea_outer_c(-e.getSegmentLength() / 2, 0),
      connectedAnchor: this.toBodyLocal(n.node, t)
    });
  }
  connectAdjacentSegments(e, t) {
    e.connectToBody({
      connectedBody: t.getRigidBody(),
      localAnchor: new __rea_outer_c(-e.getSegmentLength() / 2, 0),
      connectedAnchor: new __rea_outer_c(t.getSegmentLength() / 2, 0)
    });
  }
  pinLastSegment(e, t) {
    const n = this.resolveEndBody(t);
    e.pinEndTo({
      connectedBody: n,
      localAnchor: new __rea_outer_c(e.getSegmentLength() / 2, 0),
      connectedAnchor: this.toBodyLocal(n.node, t)
    });
  }
  resolveStartBody(e) {
    return this.startPoint ? this.ensureAnchorBody(this.startPoint) : this.ensureAnchorBody(this.createAnchorNode("RopeStartAnchor", e));
  }
  resolveEndBody(e) {
    return this.endPoint ? this.ensureAnchorBody(this.endPoint) : this.ensureAnchorBody(this.createAnchorNode("RopeEndAnchor", e));
  }
  ensureAnchorBody(e) {
    let t = e.getComponent(__rea_outer_d);
    return t || (t = e.addComponent(__rea_outer_d), t.type = __rea_outer_g.Static, t.gravityScale = 0, t.allowSleep = !0, t.awakeOnLoad = !0, t);
  }
  createAnchorNode(e, t) {
    const n = new __rea_outer_i(e);
    return this.node.addChild(n), n.setWorldPosition(t), this._tempAnchors.push(n), n;
  }
  toBodyLocal(e, t) {
    const n = new __rea_outer_p();
    return e.inverseTransformPoint(n, t), new __rea_outer_c(n.x, n.y);
  }
  ensurePhysicsSystem() {
    __rea_outer_u.instance.enable = !0;
  }
  destroySegment(e) {
    var t;
    null != (t = e.node) && t.isValid && e.node.destroy();
  }
  destroyNode(e) {
    e.isValid && e.destroy();
  }
}).prototype, "ropeItemPrefab", [S], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), _ = __rea_outer_t(C.prototype, "startPoint", [b], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), E = __rea_outer_t(C.prototype, "endPoint", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), x = __rea_outer_t(C.prototype, "segmentLength", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), G = __rea_outer_t(C.prototype, "generateOnLoad", [R], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !0;
  }
}), z = __rea_outer_t(C.prototype, "isStartPinned", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !0;
  }
}), D = __rea_outer_t(C.prototype, "isEndPinned", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), N = __rea_outer_t(C.prototype, "gravityScale", [B], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 1;
  }
}), A = C)) || A);
__rea_outer_o._RF.pop();
export { __recovered_export_0 as RopeController };
