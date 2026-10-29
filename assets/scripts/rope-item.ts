// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/rope-item.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_e } from "cc";
import { Component as __rea_outer_i } from "cc";
import { HingeJoint2D as __rea_outer_n } from "cc";
import { UITransform as __rea_outer_s } from "cc";
import { RigidBody2D as __rea_outer_o } from "cc";
import { ERigidBody2DType as __rea_outer_h } from "cc";
import { BoxCollider2D as __rea_outer_l } from "cc";
import { Vec2 as __rea_outer_a } from "cc";
import { Size as __rea_outer_r } from "cc";
import { _decorator as __rea_outer_d } from "cc";
let __recovered_export_0;
var c;
__rea_outer_e._RF.push({}, "2a9f31bDI5PQpexbj2KLE8B", "rope-item", void 0);
const {
    ccclass: g
  } = __rea_outer_d,
  _ = "ropeitem";
__recovered_export_0 = g("RopeItem")(c = class extends __rea_outer_i {
  constructor(...t) {
    super(...t), this._rigidBody = null, this._collider = null, this._startJoint = null, this._endJoint = null, this._baseLength = 23, this._thickness = 19, this._length = 23, this._isInitialized = !1;
  }
  onLoad() {
    this.initialize();
  }
  ensurePhysics() {
    this.initialize();
  }
  getRigidBody() {
    return this.initialize(), this._rigidBody;
  }
  getSegmentLength() {
    return this._length;
  }
  applyLengthScale(t) {
    this.initialize();
    const e = Math.max(t, .01);
    this._length = this._baseLength * e, this.applyVisualScale(), this.resizeRootTransform(), this.resizeCollider();
  }
  connectToBody(t) {
    this.initialize(), this._startJoint = this._startJoint ?? this.node.addComponent(__rea_outer_n), this.writeJoint(this._startJoint, t);
  }
  pinEndTo(t) {
    this.initialize(), this._endJoint || (this._endJoint = this.node.addComponent(__rea_outer_n)), this.writeJoint(this._endJoint, t);
  }
  initialize() {
    this._isInitialized || (this.cacheVisualSize(), this._length = this._baseLength, this.resizeRootTransform(), this._rigidBody = this.ensureRigidBody(), this._collider = this.ensureCollider(), this._startJoint = this.cachePrefabJoint(), this.resizeCollider(), this.applyVisualScale(), this._isInitialized = !0);
  }
  cacheVisualSize() {
    const t = this.resolveVisualNode().getComponent(__rea_outer_s);
    this._baseLength = t && t.contentSize.width > 0 ? t.contentSize.width : 23, this._thickness = t && t.contentSize.height > 0 ? t.contentSize.height : 19;
  }
  resolveVisualNode() {
    return this.node.getChildByName(_) ?? this.node;
  }
  applyVisualScale() {
    const t = this.node.getChildByName(_);
    if (!t || this._baseLength <= 0) return;
    const e = (this._length + 16) / this._baseLength;
    t.setScale(e, t.scale.y, t.scale.z);
  }
  resizeRootTransform() {
    let t = this.node.getComponent(__rea_outer_s);
    t || (t = this.node.addComponent(__rea_outer_s)), t.setContentSize(this._length, this._thickness);
  }
  ensureRigidBody() {
    let t = this.node.getComponent(__rea_outer_o);
    return t || (t = this.node.addComponent(__rea_outer_o)), t.type = __rea_outer_h.Dynamic, t.gravityScale = 1, t.fixedRotation = !1, t.allowSleep = !0, t.awakeOnLoad = !0, t.linearDamping = 1, t.angularDamping = .8, t.bullet = !1, t;
  }
  ensureCollider() {
    let t = this.node.getComponent(__rea_outer_l);
    return t || (t = this.node.addComponent(__rea_outer_l)), t.offset = new __rea_outer_a(0, 0), t.friction = .2, t.restitution = 0, t;
  }
  cachePrefabJoint() {
    const t = this.node.getComponent(__rea_outer_n);
    return t ? (t.enabled = !1, t.collideConnected = !1, t) : null;
  }
  resizeCollider() {
    this._collider && (this._collider.size = new __rea_outer_r(this._length, this._thickness), this._collider.apply());
  }
  writeJoint(t, e) {
    t.connectedBody = e.connectedBody, t.anchor = e.localAnchor, t.connectedAnchor = e.connectedAnchor, t.collideConnected = !1, t.enabled = !0, t.apply();
  }
}) || c;
__rea_outer_e._RF.pop();
export { __recovered_export_0 as RopeItem };
