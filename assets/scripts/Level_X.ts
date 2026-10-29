// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_X.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { applyDecoratedDescriptor as __rea_outer_t } from "./rollupPluginModLoBabelHelpers";
import { initializerDefineProperty as __rea_outer_i } from "./rollupPluginModLoBabelHelpers";
import { cclegacy as __rea_outer_r } from "cc";
import { Sprite as __rea_outer_n } from "cc";
import { Node as __rea_outer_s } from "cc";
import { Enum as __rea_outer_l } from "cc";
import { Texture2D as __rea_outer_a } from "cc";
import { Label as __rea_outer_o } from "cc";
import { _decorator as __rea_outer_u } from "cc";
import { default as __rea_outer_p } from "./LevelBase";
import { default as __rea_outer_h } from "./AudioManager";
import { GameController as __rea_outer_c } from "./GameController";
let __recovered_export_0, __recovered_export_1;
var b, y, f, g, d, _, m, I, w, T, v, C, S, D, P, z, L, k, N, x, A, E, H, X, F, G, K, M, R, O, B, U, V, j, q, Y, $, J, Q, W, Z, ee, te, ie, re, ne, se, le, ae;
__rea_outer_r._RF.push({}, "ff6e2/EliNMfYyh81X+Fxzq", "Level_X", void 0);
const {
  ccclass: oe,
  property: ue
} = __rea_outer_u;
let pe = __recovered_export_0 = function (e) {
    return e[e.ClueType_1 = 0] = "ClueType_1", e[e.ClueType_2 = 1] = "ClueType_2", e[e.ClueType_3 = 2] = "ClueType_3", e[e.ClueType_4 = 3] = "ClueType_4", e[e.ClueType_5 = 4] = "ClueType_5", e[e.ClueType_6 = 5] = "ClueType_6", e[e.ClueType_7 = 6] = "ClueType_7", e[e.ClueType_8 = 7] = "ClueType_8", e;
  }({}),
  he = (b = oe("LevelX_DragItemPair"), y = ue(__rea_outer_n), f = ue(__rea_outer_n), g = ue(__rea_outer_s), d = ue({
    type: __rea_outer_l(pe),
    tooltip: "线索类型"
  }), b((I = __rea_outer_t((m = class {
    constructor() {
      __rea_outer_i(this, "ID", I, this), __rea_outer_i(this, "dragSprite", w, this), __rea_outer_i(this, "dragMoveSprite", T, this), __rea_outer_i(this, "triggerNode", v, this), __rea_outer_i(this, "clueType", C, this);
    }
  }).prototype, "ID", [ue], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: function () {
      return 0;
    }
  }), w = __rea_outer_t(m.prototype, "dragSprite", [y], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: function () {
      return null;
    }
  }), T = __rea_outer_t(m.prototype, "dragMoveSprite", [f], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: function () {
      return null;
    }
  }), v = __rea_outer_t(m.prototype, "triggerNode", [g], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: function () {
      return null;
    }
  }), C = __rea_outer_t(m.prototype, "clueType", [d], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: function () {
      return pe.ClueType_1;
    }
  }), _ = m)) || _);
var ce = function (e) {
  return e[e.Up = 0] = "Up", e[e.Down = 1] = "Down", e[e.Left = 2] = "Left", e[e.Right = 3] = "Right", e;
}(ce || {});
S = oe("LevelX_SwipeItemPair"), D = ue(__rea_outer_n), P = ue({
  type: __rea_outer_l(ce),
  tooltip: "滑动方向（上/下/左/右）"
}), z = ue({
  type: __rea_outer_l(pe),
  tooltip: "线索类型"
}), S((N = __rea_outer_t((k = class {
  constructor() {
    __rea_outer_i(this, "ID", N, this), __rea_outer_i(this, "swipeSprite", x, this), __rea_outer_i(this, "swipeType", A, this), __rea_outer_i(this, "clueType", E, this);
  }
}).prototype, "ID", [ue], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), x = __rea_outer_t(k.prototype, "swipeSprite", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), A = __rea_outer_t(k.prototype, "swipeType", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return ce.Up;
  }
}), E = __rea_outer_t(k.prototype, "clueType", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return pe.ClueType_1;
  }
}), L = k));
let be = (H = oe("LevelX_ClickItemPair"), X = ue(__rea_outer_n), F = ue(__rea_outer_a), G = ue(__rea_outer_n), K = ue({
  type: __rea_outer_l(pe),
  tooltip: "线索类型"
}), H((O = __rea_outer_t((R = class {
  constructor() {
    __rea_outer_i(this, "ID", O, this), __rea_outer_i(this, "clickSprite", B, this), __rea_outer_i(this, "targetTexture", U, this), __rea_outer_i(this, "targetSprite", V, this), __rea_outer_i(this, "clueType", j, this);
  }
}).prototype, "ID", [ue], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), B = __rea_outer_t(R.prototype, "clickSprite", [X], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), U = __rea_outer_t(R.prototype, "targetTexture", [F], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), V = __rea_outer_t(R.prototype, "targetSprite", [G], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), j = __rea_outer_t(R.prototype, "clueType", [K], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return pe.ClueType_1;
  }
}), M = R)) || M);
__recovered_export_1 = (q = oe("Level_X"), Y = ue(__rea_outer_s), $ = ue(__rea_outer_o), J = ue({
  type: [be]
}), Q = ue({
  type: [he]
}), W = ue({
  type: [he]
}), Z = ue(__rea_outer_n), q((ie = __rea_outer_t((te = class extends __rea_outer_p {
  constructor(...e) {
    super(...e), __rea_outer_i(this, "bubbleNode1", ie, this), __rea_outer_i(this, "TipLabel", re, this), __rea_outer_i(this, "clickItemPair_arr", ne, this), __rea_outer_i(this, "DragItemPair_arr", se, this), __rea_outer_i(this, "SwipeItemPair_arr", le, this), __rea_outer_i(this, "animationSprites", ae, this), this.phase = 0, this.winstate = !1, this.lockIndexs_3 = [], this.lockIndexs_5 = [], this.lockIndexs_6 = [], this.totalitems = [], this.doneItems = [], this.hint_arr = ["level7_hint1", "level7_hint2", "level7_hint3", "level7_hint4", "level7_hint5", "level7_hint6"], this.config_arr = [{
      ID: 0,
      soundkey: "7_2",
      showtype: 1,
      textStrKey: "7_2"
    }, {
      ID: 1,
      soundkey: "7_3",
      showtype: 2,
      textStrKey: "7_3"
    }, {
      ID: 2,
      soundkey: "7_4",
      showtype: 1,
      textStrKey: "7_4"
    }, {
      ID: 3,
      soundkey: "7_5",
      showtype: 1,
      textStrKey: "7_5"
    }, {
      ID: 4,
      soundkey: "7_6",
      showtype: 1,
      textStrKey: "7_6"
    }], this.isInteractionLocked = !1;
  }
  onLoad() {
    super.onLoad(), this.allItemNum = this.getEffectiveTotalCount(), this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.enterPhase0();
  }
  onDestroy() {
    this.unscheduleAllCallbacks(), this.unregisterInteractionHandlers(), this.stopDecorationAnimations();
  }
  showHint() {}
  getGameProgressSnapshot() {
    const e = this.getEffectiveTotalCount();
    return {
      progress: e > 0 ? 0 / e : 0,
      label: `0/${e}`
    };
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.doneItems = [], this.isInteractionLocked = !1, this.hasInstallNum = 0, this.setNodeActive(this.bubbleNode1, !1), this.prepareSpritesForPhase0();
  }
  enterPhase0() {
    this.phase = 0, this.startDecorationAnimations(), __rea_outer_h.playEffect_1("8_1"), this.setNodeActive(this.bubbleNode1, !0), this.scheduleOnce(() => {
      this.isValid && 0 === this.phase && (this.setNodeActive(this.bubbleNode1, !1), this.enterPhase1());
    }, 2);
  }
  skipOpeningToPlay() {
    return 0 === this.phase && (this.stopOpeningDialogue(), this.setNodeActive(this.bubbleNode1, !1), this.enterPhase1(), !0);
  }
  enterPhase1() {
    0 === this.phase && (this.phase = 1, this.registerInteractionHandlers(), __rea_outer_c.getInstance().refreshGameProgress());
  }
  enterPhase2() {
    this.phase >= 2 || (this.phase = 2, this.winstate = !0, this.unregisterInteractionHandlers(), this.stopDecorationAnimations(), this.showLevelSuccess());
  }
  prepareSpritesForPhase0() {}
  startDecorationAnimations() {}
  stopDecorationAnimations() {}
  registerInteractionHandlers() {}
  unregisterInteractionHandlers() {}
  collectCompletionIndices(e) {
    return [];
  }
  completeDragIndices(e) {
    e.forEach(e => {
      this.applyItemComplete(e);
    }), this.hasInstallNum = 0, __rea_outer_c.getInstance().refreshGameProgress();
  }
  applyItemComplete(e) {}
  getSpriteRenderOrder(e) {
    var t;
    if (null == e || null == (t = e.node) || !t.isValid) return -1;
    let i = 0,
      r = 1,
      n = e.node;
    for (; n;) i += n.getSiblingIndex() * r, r *= 128, n = n.parent;
    return i;
  }
  checkPhase1Complete() {
    this.enterPhase2();
  }
  getEffectiveTotalCount() {
    return 0;
  }
  findConfigByIndex(e) {
    return this.config_arr.find(t => t.ID === e);
  }
  setNodeActive(e, t) {
    e && (e.active = t);
  }
}).prototype, "bubbleNode1", [Y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), re = __rea_outer_t(te.prototype, "TipLabel", [$], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ne = __rea_outer_t(te.prototype, "clickItemPair_arr", [J], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), se = __rea_outer_t(te.prototype, "DragItemPair_arr", [Q], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), le = __rea_outer_t(te.prototype, "SwipeItemPair_arr", [W], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), ae = __rea_outer_t(te.prototype, "animationSprites", [Z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), ee = te)) || ee);
__rea_outer_r._RF.pop();
export { __recovered_export_0 as ClueType, __recovered_export_1 as default };
