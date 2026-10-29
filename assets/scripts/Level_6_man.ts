// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_6_man.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { applyDecoratedDescriptor as __rea_outer_e } from "./rollupPluginModLoBabelHelpers";
import { initializerDefineProperty as __rea_outer_i } from "./rollupPluginModLoBabelHelpers";
import { cclegacy as __rea_outer_s } from "cc";
import { Node as __rea_outer_r } from "cc";
import { Sprite as __rea_outer_o } from "cc";
import { _decorator as __rea_outer_l } from "cc";
import { Component as __rea_outer_n } from "cc";
import { Vec3 as __rea_outer_a } from "cc";
import { tween as __rea_outer_h } from "cc";
import { stopAllTweens as __rea_outer_p } from "./CocosCompat";
import { isSpriteRenderable as __rea_outer_u } from "./CocosCompat";
let __recovered_export_0, __recovered_export_1, __recovered_export_2;
var c, _, d, A, N, f, b, v, y, g, m, S, H, L, O, V, w, E, k, z, B, T, P, D, G, C, R, M, F, I, K, W, x, Y, q, j, U, Z, J, Q, X, $, tt;
__rea_outer_s._RF.push({}, "b11e7Lx6LZL3ISLBBUtuFfl", "Level_6_man", void 0);
const {
  ccclass: et,
  property: it
} = __rea_outer_l;
let st = __recovered_export_0 = function (t) {
    return t[t.NORMAL = 0] = "NORMAL", t[t.BLOOD = 1] = "BLOOD", t[t.COLOR_BLIND = 2] = "COLOR_BLIND", t[t.SOCKS = 3] = "SOCKS", t[t.HEIGHT = 4] = "HEIGHT", t[t.WEAKNESS = 5] = "WEAKNESS", t[t.LEFT_HANDED = 6] = "LEFT_HANDED", t[t.MONEY_LOVER = 7] = "MONEY_LOVER", t[t.GLOVE = 8] = "GLOVE", t;
  }({}),
  rt = __recovered_export_1 = function (t) {
    return t[t.HAS = 0] = "HAS", t[t.NOT_HAS = 1] = "NOT_HAS", t;
  }({});
__recovered_export_2 = (c = et("Level_6_man"), _ = it(__rea_outer_r), d = it(__rea_outer_r), A = it(__rea_outer_r), N = it(__rea_outer_r), f = it(__rea_outer_r), b = it(__rea_outer_r), v = it(__rea_outer_o), y = it(__rea_outer_r), g = it(__rea_outer_r), m = it(__rea_outer_r), S = it(__rea_outer_r), H = it(__rea_outer_r), L = it(__rea_outer_r), O = it(__rea_outer_r), V = it(__rea_outer_r), w = it(__rea_outer_r), E = it(__rea_outer_o), k = it(__rea_outer_r), z = it(__rea_outer_r), B = it(__rea_outer_r), c((D = __rea_outer_e((P = class extends __rea_outer_n {
  constructor(...t) {
    super(...t), __rea_outer_i(this, "man_blood", D, this), __rea_outer_i(this, "tops", G, this), __rea_outer_i(this, "foot_socks_2", C, this), __rea_outer_i(this, "foot_socks_1", R, this), __rea_outer_i(this, "foot_shoe", M, this), __rea_outer_i(this, "hand_gripper", F, this), __rea_outer_i(this, "hand_gripper_sprite", I, this), __rea_outer_i(this, "left", K, this), __rea_outer_i(this, "right", W, this), __rea_outer_i(this, "glove", x, this), __rea_outer_i(this, "pistol_left", Y, this), __rea_outer_i(this, "color_red", q, this), __rea_outer_i(this, "color_green", j, this), __rea_outer_i(this, "man_left", U, this), __rea_outer_i(this, "pistol_right", Z, this), __rea_outer_i(this, "man_right", J, this), __rea_outer_i(this, "money_sprite", Q, this), __rea_outer_i(this, "ruler_node", X, this), __rea_outer_i(this, "ruler_2_Node", $, this), __rea_outer_i(this, "ruler_3_Node", tt, this), this.stateType = st.NORMAL, this.traitPresence = rt.NOT_HAS;
  }
  getStateType() {
    return this.stateType;
  }
  getTraitPresence() {
    return this.traitPresence;
  }
  isNormalState() {
    return this.stateType === st.NORMAL;
  }
  setNormalState(t = !1) {
    this.stateType = st.NORMAL, this.traitPresence = rt.NOT_HAS, this.stopHandGripperBreathAnimation(), t ? this.applyPhase0Visual() : this.applyNormalVisual();
  }
  setClueState(t, e) {
    this.stopHandGripperBreathAnimation(), this.stateType = t, this.traitPresence = e, this.applyClueVisual();
  }
  onDestroy() {
    this.stopHandGripperBreathAnimation();
  }
  applyClueVisual() {
    switch (this.applyNormalVisual(), this.stateType) {
      case st.BLOOD:
        this.applyBloodVisual();
        break;
      case st.COLOR_BLIND:
        this.applyColorBlindVisual();
        break;
      case st.SOCKS:
        this.applySocksVisual();
        break;
      case st.HEIGHT:
        this.applyHeightVisual();
        break;
      case st.WEAKNESS:
        this.applyWeaknessVisual();
        break;
      case st.LEFT_HANDED:
        this.applyLeftHandedVisual();
        break;
      case st.MONEY_LOVER:
        this.applyMoneyLoverVisual();
        break;
      case st.GLOVE:
        this.applyGloveVisual();
        break;
      default:
        this.applyNormalVisual();
    }
  }
  applyNormalVisual() {
    this.stopHandGripperBreathAnimation(), this.setNodeActive(this.man_blood, !1), this.setNodeActive(this.foot_socks_1, !1), this.setNodeActive(this.foot_socks_2, !1), this.setNodeActive(this.foot_shoe, !0), this.setNodeActive(this.hand_gripper, !1), this.setSpriteActive(this.hand_gripper_sprite, !1), this.setNodeActive(this.glove, !1), this.setNodeActive(this.color_red, !1), this.setNodeActive(this.color_green, !1), this.setSpriteActive(this.money_sprite, !1), this.setNodeActive(this.ruler_node, !1), this.setNodeActive(this.ruler_2_Node, !1), this.setNodeActive(this.ruler_3_Node, !1), this.setNodeActive(this.tops, !0), this.setNodeActive(this.left, !0), this.setNodeActive(this.right, !0), this.setNodeActive(this.man_left, !0), this.setNodeActive(this.man_right, !0), this.setNodeActive(this.pistol_left, !1), this.setNodeActive(this.pistol_right, !1);
  }
  applyPhase0Visual() {
    this.applyNormalVisual();
  }
  applyBloodVisual() {
    this.setNodeActive(this.tops, !1), this.traitPresence === rt.HAS ? this.setNodeActive(this.man_blood, !0) : this.setNodeActive(this.man_blood, !1);
  }
  applyColorBlindVisual() {
    this.setNodeActive(this.man_left, !1), this.traitPresence === rt.HAS ? (this.setNodeActive(this.color_green, !0), this.setNodeActive(this.color_red, !1)) : (this.setNodeActive(this.color_green, !1), this.setNodeActive(this.color_red, !0));
  }
  applySocksVisual() {
    this.setNodeActive(this.foot_shoe, !1), this.traitPresence === rt.HAS ? (this.setNodeActive(this.foot_socks_1, !1), this.setNodeActive(this.foot_socks_2, !0)) : (this.setNodeActive(this.foot_socks_1, !0), this.setNodeActive(this.foot_socks_2, !1));
  }
  applyHeightVisual() {
    this.setNodeActive(this.ruler_node, !0), this.traitPresence === rt.HAS ? (this.setNodeActive(this.ruler_2_Node, !0), this.setNodeActive(this.ruler_3_Node, !1)) : (this.setNodeActive(this.ruler_2_Node, !1), this.setNodeActive(this.ruler_3_Node, !0));
  }
  applyWeaknessVisual() {
    this.traitPresence === rt.HAS && (this.setNodeActive(this.left, !1), this.setNodeActive(this.right, !1), this.setNodeActive(this.hand_gripper, !0), this.setSpriteActive(this.hand_gripper_sprite, !0), this.playHandGripperBreathAnimation());
  }
  applyLeftHandedVisual() {
    if (this.traitPresence === rt.HAS) return this.setNodeActive(this.man_left, !1), void this.setNodeActive(this.pistol_left, !0);
    this.setNodeActive(this.man_right, !1), this.setNodeActive(this.pistol_right, !0);
  }
  applyMoneyLoverVisual() {
    this.setSpriteActive(this.money_sprite, this.traitPresence === rt.HAS);
  }
  applyGloveVisual() {
    this.setNodeActive(this.glove, this.traitPresence === rt.HAS);
  }
  playHandGripperBreathAnimation() {
    var t;
    const e = null == (t = this.hand_gripper_sprite) ? void 0 : t.node;
    if (null == e || !e.isValid) return;
    this.stopHandGripperBreathAnimation(), e.setScale(1, 1, 1);
    const i = new __rea_outer_a(1.1, 1.1, 1),
      s = new __rea_outer_a(1, 1, 1);
    __rea_outer_h(e).repeatForever(__rea_outer_h().to(.5, {
      scale: i
    }, {
      easing: "quadOut"
    }).to(.5, {
      scale: s
    }, {
      easing: "quadOut"
    })).start();
  }
  stopHandGripperBreathAnimation() {
    var t;
    const e = null == (t = this.hand_gripper_sprite) ? void 0 : t.node;
    null != e && e.isValid && (__rea_outer_p(e), e.setScale(1, 1, 1));
  }
  setNodeActive(t, e) {
    t && (t.active = e);
  }
  setSpriteActive(t, e) {
    null != t && t.node && (!e || __rea_outer_u(t) ? t.node.active = e : t.node.active = !1);
  }
}).prototype, "man_blood", [_], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), G = __rea_outer_e(P.prototype, "tops", [d], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), C = __rea_outer_e(P.prototype, "foot_socks_2", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), R = __rea_outer_e(P.prototype, "foot_socks_1", [N], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), M = __rea_outer_e(P.prototype, "foot_shoe", [f], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), F = __rea_outer_e(P.prototype, "hand_gripper", [b], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), I = __rea_outer_e(P.prototype, "hand_gripper_sprite", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), K = __rea_outer_e(P.prototype, "left", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), W = __rea_outer_e(P.prototype, "right", [g], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), x = __rea_outer_e(P.prototype, "glove", [m], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Y = __rea_outer_e(P.prototype, "pistol_left", [S], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), q = __rea_outer_e(P.prototype, "color_red", [H], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), j = __rea_outer_e(P.prototype, "color_green", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), U = __rea_outer_e(P.prototype, "man_left", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Z = __rea_outer_e(P.prototype, "pistol_right", [V], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), J = __rea_outer_e(P.prototype, "man_right", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Q = __rea_outer_e(P.prototype, "money_sprite", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), X = __rea_outer_e(P.prototype, "ruler_node", [k], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), $ = __rea_outer_e(P.prototype, "ruler_2_Node", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), tt = __rea_outer_e(P.prototype, "ruler_3_Node", [B], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), T = P)) || T);
__rea_outer_s._RF.pop();
export { __recovered_export_0 as ManClueStateType, __recovered_export_1 as ManTraitPresence, __recovered_export_2 as default };
