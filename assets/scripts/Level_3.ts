// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_3.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { applyDecoratedDescriptor as __rea_outer_t } from "./rollupPluginModLoBabelHelpers";
import { initializerDefineProperty as __rea_outer_i } from "./rollupPluginModLoBabelHelpers";
import { cclegacy as __rea_outer_s } from "cc";
import { Node as __rea_outer_n } from "cc";
import { Sprite as __rea_outer_o } from "cc";
import { _decorator as __rea_outer_r } from "cc";
import { tween as __rea_outer_h } from "cc";
import { Tween as __rea_outer_a } from "cc";
import { UITransform as __rea_outer_l } from "cc";
import { Color as __rea_outer_c } from "cc";
import { Vec2 as __rea_outer_d } from "cc";
import { default as __rea_outer_u } from "./LevelBase";
import { default as __rea_outer_p } from "./AudioManager";
import { I18nController as __rea_outer_S } from "./i18n-controller";
import { UIManager as __rea_outer_T } from "./ui-manager";
import { UIHint as __rea_outer_v } from "./uihint";
import { stopAllTweens as __rea_outer_g } from "./CocosCompat";
import { setNodeOpacity as __rea_outer_f } from "./CocosCompat";
import { getNodeOpacity as __rea_outer_w } from "./CocosCompat";
import { isSpriteRenderable as __rea_outer_I } from "./CocosCompat";
import { stopSpritesTweens as __rea_outer_y } from "./CocosCompat";
import { GameController as __rea_outer_b } from "./GameController";
import { default as __rea_outer_m } from "./ActionSystem";
import { legacyTouchDelta } from "./features/brainpuzzle/BrainPuzzleRuntime";
let __recovered_export_0;
var _, k, A, x, E, C, L, D, P, N, O, R, H, U, M, G, V;
__rea_outer_s._RF.push({}, "627d3NCWMhMyLleicDM9FGR", "Level_3", void 0);
const {
    ccclass: B,
    property: K
  } = __rea_outer_r,
  W = {
    0: 9,
    1: 2,
    2: 1
  },
  z = {
    0: 0,
    1: 2
  },
  F = [0, 2],
  X = [1, 2, 9];
__recovered_export_0 = (_ = B("Level_3"), k = K(__rea_outer_n), A = K(__rea_outer_o), x = K(__rea_outer_o), E = K(__rea_outer_o), C = K(__rea_outer_o), L = K(__rea_outer_o), D = K(__rea_outer_o), _((O = __rea_outer_t((N = class extends __rea_outer_u {
  constructor(...e) {
    super(...e), __rea_outer_i(this, "bubbleNode1", O, this), __rea_outer_i(this, "targetSprites", R, this), __rea_outer_i(this, "touchAreaSprites", H, this), __rea_outer_i(this, "specialSprites", U, this), __rea_outer_i(this, "showSpecialSprites", M, this), __rea_outer_i(this, "animationSprites", G, this), __rea_outer_i(this, "swipeToRightSprites", V, this), this.phase = 0, this.winstate = !1, this.doneItems = [], this.hint_arr = ["level3_hint1", "level3_hint2", "level3_hint3", "level3_hint4", "level3_hint5", "level3_hint6", "level3_hint7", "level3_hint8", "level3_hint9", "level3_hint10"], this.config_arr = [{
      ID: 0,
      soundkey: "3_2",
      showtype: 1,
      textStrKey: "3_2"
    }, {
      ID: 1,
      soundkey: "3_3",
      showtype: 2,
      textStrKey: "3_3"
    }, {
      ID: 2,
      soundkey: "3_4",
      showtype: 1,
      textStrKey: "3_4"
    }, {
      ID: 3,
      soundkey: "3_5",
      showtype: 1,
      textStrKey: "3_5"
    }, {
      ID: 4,
      soundkey: "3_6",
      showtype: 1,
      textStrKey: "3_6"
    }, {
      ID: 5,
      soundkey: "3_7",
      showtype: 1,
      textStrKey: "3_7"
    }, {
      ID: 6,
      soundkey: "3_8",
      showtype: 1,
      textStrKey: "3_8"
    }, {
      ID: 7,
      soundkey: "3_9",
      showtype: 1,
      textStrKey: "3_9"
    }, {
      ID: 8,
      soundkey: "3_10",
      showtype: 1,
      textStrKey: "3_10"
    }, {
      ID: 9,
      soundkey: "3_11",
      showtype: 1,
      textStrKey: "3_11"
    }], this.isInteractionLocked = !1, this.unlockedTouchIndices = new Set(), this.disabledSpecialIndices = new Set(), this.activeSwipeState = null, this.isSwipeGestureActive = !1, this.touchStartTarget = {
      kind: "none"
    }, this.shouldSuppressLevelTouchEnd = !1, this.onLevelTouchStart = e => {
      1 !== this.phase || this.isInteractionLocked || this.isSwipeGestureActive || this.activeSwipeState || (this.shouldSuppressLevelTouchEnd = !1, this.touchStartTarget = this.resolveTouchStartTarget(this.getTouchWorldPoint(e)));
    }, this.onLevelTouchCancel = () => {
      this.touchStartTarget = {
        kind: "none"
      }, this.shouldSuppressLevelTouchEnd = !1;
    }, this.onLevelTouchEnd = e => {
      if (1 !== this.phase || this.isInteractionLocked || this.isSwipeGestureActive || this.activeSwipeState) return void (this.touchStartTarget = {
        kind: "none"
      });
      if (this.shouldSuppressLevelTouchEnd) return this.shouldSuppressLevelTouchEnd = !1, void (this.touchStartTarget = {
        kind: "none"
      });
      const t = this.getTouchWorldPoint(e),
        i = this.findSpecialSpriteIndexAtPoint(t);
      if ("special" === this.touchStartTarget.kind) return i !== this.touchStartTarget.index ? void (this.touchStartTarget = {
        kind: "none"
      }) : (this.touchStartTarget = {
        kind: "none"
      }, void this.handleSpecialSpriteClick(i));
      const s = this.findTouchAreaIndexAtPoint(t);
      if ("touch" !== this.touchStartTarget.kind) this.touchStartTarget = {
        kind: "none"
      };else {
        if (s !== this.touchStartTarget.index) return void (this.touchStartTarget = {
          kind: "none"
        });
        if (this.touchStartTarget = {
          kind: "none"
        }, s < 0 || !this.isTouchIndexClickable(s)) return;
        if (this.isTargetIndexDone(s)) return;
        this.completeTargetIndex(s);
      }
    }, this.onSwipeTouchStart = e => {
      var t;
      if (1 !== this.phase || this.isInteractionLocked || this.activeSwipeState) return;
      const i = this.resolveSwipeIndexFromNode(e.target);
      if (i < 0) return;
      const s = z[i];
      if (void 0 === s || this.disabledSpecialIndices.has(s)) return;
      const n = W[s];
      if (void 0 === n || this.isTargetIndexDone(n)) return;
      const o = this.swipeToRightSprites[i];
      null != o && null != (t = o.node) && t.isValid && (__rea_outer_g(o.node), this.activeSwipeState = {
        swipeIndex: i,
        specialIndex: s,
        sprite: o,
        originPosition: o.node.position.clone(),
        startLocation: this.getTouchWorldPoint(e),
        accumulatedDeltaX: 0
      }, this.isSwipeGestureActive = !0, this.touchStartTarget = {
        kind: "none"
      }, e.propagationStopped = !0);
    }, this.onSwipeTouchMove = e => {
      var t;
      if (!this.activeSwipeState || 1 !== this.phase) return;
      const i = this.activeSwipeState,
        {
          sprite: s,
          originPosition: n
        } = i;
      if (null == s || null == (t = s.node) || !t.isValid) return void this.resetSwipeState();
      const o = legacyTouchDelta(e);
      i.accumulatedDeltaX = Math.max(0, i.accumulatedDeltaX + o.x), s.node.setPosition(n.x + i.accumulatedDeltaX, n.y, n.z);
    }, this.onSwipeTouchEnd = e => {
      var t;
      if (!this.activeSwipeState || 1 !== this.phase) return this.isSwipeGestureActive = !1, void this.resetSwipeState();
      e.propagationStopped = !0;
      const i = this.activeSwipeState;
      this.activeSwipeState = null, this.isSwipeGestureActive = !1, this.shouldSuppressLevelTouchEnd = !0;
      const {
        sprite: s,
        specialIndex: n,
        originPosition: o,
        startLocation: r
      } = i;
      if (null == s || null == (t = s.node) || !t.isValid) return;
      const a = this.getTouchWorldPoint(e);
      if (this.isSwipeToRight(r, a, s)) {
        s.node.setPosition(o);
        const e = W[n];
        void 0 === e || this.isTargetIndexDone(e) || this.applySpecialUnlock(n, e);
      } else __rea_outer_g(s.node), __rea_outer_h(s.node).to(.15, {
        position: o
      }, {
        easing: "sineOut"
      }).start();
    };
  }
  onLoad() {
    super.onLoad(), this.allItemNum = this.getEffectiveTotalCount(), this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.enterPhase0();
  }
  onDestroy() {
    this.unscheduleAllCallbacks(), this.unregisterInteractionHandlers(), this.stopDecorationAnimations(), this.stopAllLevelSpriteTweens();
  }
  showHint() {
    if (1 !== this.phase) return;
    const e = this.resolveNextHintKey();
    if (!e) return;
    const t = __rea_outer_S.getInstance().getKey(e);
    __rea_outer_T.getInstance().showView(__rea_outer_v, void 0, {
      body: t
    });
  }
  getGameProgressSnapshot() {
    const e = this.getEffectiveTotalCount(),
      t = this.doneItems.length;
    return {
      progress: e > 0 ? t / e : 0,
      label: `${t}/${e}`
    };
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.doneItems = [], this.unlockedTouchIndices.clear(), this.disabledSpecialIndices.clear(), this.resetSwipeState(), this.touchStartTarget = {
      kind: "none"
    }, this.shouldSuppressLevelTouchEnd = !1, this.isInteractionLocked = !1, this.hasInstallNum = 0, this.setNodeActive(this.bubbleNode1, !1), this.prepareSpritesForPhase0();
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_p.playMusic("bgm4", !0, .5), this.startDecorationAnimations(), this.setNodeActive(this.bubbleNode1, !0), this.bubbleNode1 && __rea_outer_f(this.bubbleNode1, 255), __rea_outer_p.playEffect_1("3_0"), this.scheduleOnce(() => {
      this.hideBubbleWithFade();
    }, 1);
  }
  hideBubbleWithFade() {
    var e;
    if (null == (e = this.bubbleNode1) || !e.isValid) return void this.enterPhase1();
    const t = __rea_outer_w(this.bubbleNode1);
    __rea_outer_m.fadeOut(this.bubbleNode1, .2, t, 0, 0, () => {
      this.isValid && (this.setNodeActive(this.bubbleNode1, !1), this.enterPhase1());
    });
  }
  enterPhase1() {
    this.phase = 1, this.registerInteractionHandlers(), __rea_outer_b.getInstance().refreshGameProgress();
  }
  enterPhase2() {
    this.phase >= 2 || (this.phase = 2, this.winstate = !0, this.unregisterInteractionHandlers(), this.stopDecorationAnimations(), this.showLevelSuccess());
  }
  prepareSpritesForPhase0() {
    this.targetSprites.forEach(e => {
      __rea_outer_I(e) && (e.node.active = !0, this.setSpriteAlpha(e, 0));
    }), this.showSpecialSprites.forEach((e, t) => {
      null != e && e.node && (e.node.active = !(t <= 1) && __rea_outer_I(e));
    });
  }
  stopAllLevelSpriteTweens() {
    var e;
    null != (e = this.bubbleNode1) && e.isValid && __rea_outer_g(this.bubbleNode1), __rea_outer_y(this.targetSprites), __rea_outer_y(this.touchAreaSprites), __rea_outer_y(this.specialSprites), __rea_outer_y(this.showSpecialSprites), __rea_outer_y(this.animationSprites);
  }
  startDecorationAnimations() {
    this.animationSprites.forEach((e, t) => {
      const i = null == e ? void 0 : e.node;
      null != i && i.isValid && __rea_outer_m.RoseBreath_tag(i, 1, .02, .7, 0, 300 + t);
    });
  }
  stopDecorationAnimations() {
    this.animationSprites.forEach((e, t) => {
      const i = null == e ? void 0 : e.node;
      null != i && i.isValid && (__rea_outer_g(i), __rea_outer_a.stopAllByTag(300 + t));
    });
  }
  registerInteractionHandlers() {
    this.node.on(__rea_outer_n.EventType.TOUCH_START, this.onLevelTouchStart, this), this.node.on(__rea_outer_n.EventType.TOUCH_END, this.onLevelTouchEnd, this), this.node.on(__rea_outer_n.EventType.TOUCH_CANCEL, this.onLevelTouchCancel, this), this.node.on(__rea_outer_n.EventType.TOUCH_MOVE, this.onSwipeTouchMove, this), this.swipeToRightSprites.forEach(e => {
      const t = null == e ? void 0 : e.node;
      t && (t.on(__rea_outer_n.EventType.TOUCH_START, this.onSwipeTouchStart, this), t.on(__rea_outer_n.EventType.TOUCH_END, this.onSwipeTouchEnd, this), t.on(__rea_outer_n.EventType.TOUCH_CANCEL, this.onSwipeTouchEnd, this));
    });
  }
  unregisterInteractionHandlers() {
    this.node.off(__rea_outer_n.EventType.TOUCH_START, this.onLevelTouchStart, this), this.node.off(__rea_outer_n.EventType.TOUCH_END, this.onLevelTouchEnd, this), this.node.off(__rea_outer_n.EventType.TOUCH_CANCEL, this.onLevelTouchCancel, this), this.node.off(__rea_outer_n.EventType.TOUCH_MOVE, this.onSwipeTouchMove, this), this.swipeToRightSprites.forEach(e => {
      const t = null == e ? void 0 : e.node;
      t && (t.off(__rea_outer_n.EventType.TOUCH_START, this.onSwipeTouchStart, this), t.off(__rea_outer_n.EventType.TOUCH_END, this.onSwipeTouchEnd, this), t.off(__rea_outer_n.EventType.TOUCH_CANCEL, this.onSwipeTouchEnd, this));
    }), this.resetSwipeState(), this.isSwipeGestureActive = !1, this.touchStartTarget = {
      kind: "none"
    }, this.shouldSuppressLevelTouchEnd = !1;
  }
  handleSpecialSpriteClick(e) {
    if (F.indexOf(e) >= 0) return;
    if (this.disabledSpecialIndices.has(e)) return;
    const t = W[e];
    void 0 === t || this.isTargetIndexDone(t) || this.applySpecialUnlock(e, t);
  }
  resolveSwipeIndexFromNode(e) {
    return e ? this.swipeToRightSprites.findIndex(t => (null == t ? void 0 : t.node) === e) : -1;
  }
  isSwipeToRight(e, t, i) {
    const s = t.x - e.x,
      n = t.y - e.y;
    return !(s < this.getSwipeUnlockThreshold(i)) && Math.abs(s) >= 1.2 * Math.abs(n);
  }
  getSwipeUnlockThreshold(e) {
    const t = e.node.getComponent(__rea_outer_l);
    return t ? Math.max(50, .3 * t.width) : 50;
  }
  resetSwipeState() {
    var e;
    if (!this.activeSwipeState) return void (this.isSwipeGestureActive = !1);
    const {
      sprite: t,
      originPosition: i
    } = this.activeSwipeState;
    null != t && null != (e = t.node) && e.isValid && (__rea_outer_g(t.node), t.node.setPosition(i)), this.activeSwipeState = null, this.isSwipeGestureActive = !1;
  }
  applySpecialUnlock(e, t) {
    const i = this.showSpecialSprites[e];
    null != i && i.node && (i.node.active = 2 !== e), this.unlockedTouchIndices.add(t), this.disabledSpecialIndices.add(e);
  }
  completeTargetIndex(e) {
    const t = this.targetSprites[e];
    if (!__rea_outer_I(t)) return;
    this.isInteractionLocked = !0, t.node.active = !0, __rea_outer_a.stopAllByTarget(t), __rea_outer_g(t.node), this.setSpriteAlpha(t, 0);
    const i = t.color;
    __rea_outer_h(t).to(.2, {
      color: new __rea_outer_c(i.r, i.g, i.b, 255)
    }).call(() => {
      __rea_outer_I(t) ? (this.doneItems.push(t), this.hasInstallNum = this.doneItems.length, __rea_outer_p.playEffect_1("level3_1"), this.isInteractionLocked = !1, __rea_outer_b.getInstance().refreshGameProgress(), this.TryQuickWin() || this.checkPhase1Complete()) : this.isInteractionLocked = !1;
    }).start();
  }
  resolveTouchStartTarget(e) {
    const t = this.findSpecialSpriteIndexAtPoint(e);
    if (t >= 0) return {
      kind: "special",
      index: t
    };
    const i = this.findTouchAreaIndexAtPoint(e);
    return i >= 0 ? {
      kind: "touch",
      index: i
    } : {
      kind: "none"
    };
  }
  findTouchAreaIndexAtPoint(e) {
    const t = this.getTouchIndicesByRenderOrderDesc();
    for (const s of t) {
      var i;
      const t = this.touchAreaSprites[s];
      if (null != t && null != (i = t.node) && i.active && this.isPointInsideSprite(t, e)) return s;
    }
    return -1;
  }
  findSpecialSpriteIndexAtPoint(e) {
    const t = this.getSpecialIndicesByRenderOrderDesc();
    for (const s of t) {
      var i;
      if (F.indexOf(s) >= 0) continue;
      if (this.disabledSpecialIndices.has(s)) continue;
      const t = this.specialSprites[s];
      if (null == t || null == (i = t.node) || !i.active || !this.isPointInsideSprite(t, e)) continue;
      const n = W[s];
      if (void 0 !== n && !this.isTargetIndexDone(n)) return s;
    }
    return -1;
  }
  isPointInsideSprite(e, t) {
    const i = e.node.getComponent(__rea_outer_l);
    return !!i && i.getBoundingBoxToWorld().contains(t);
  }
  getTouchWorldPoint(e) {
    const t = e.getUILocation();
    return new __rea_outer_d(t.x, t.y);
  }
  getTouchIndicesByRenderOrderDesc() {
    const e = this.touchAreaSprites.map((e, t) => t);
    return e.sort((e, t) => {
      const i = this.getSpriteRenderOrder(this.touchAreaSprites[e]);
      return this.getSpriteRenderOrder(this.touchAreaSprites[t]) - i;
    }), e;
  }
  getSpecialIndicesByRenderOrderDesc() {
    const e = this.specialSprites.map((e, t) => t);
    return e.sort((e, t) => {
      const i = this.getSpriteRenderOrder(this.specialSprites[e]);
      return this.getSpriteRenderOrder(this.specialSprites[t]) - i;
    }), e;
  }
  getSpriteRenderOrder(e) {
    var t;
    if (null == e || null == (t = e.node) || !t.isValid) return -1;
    let i = 0,
      s = 1,
      n = e.node;
    for (; n;) i += n.getSiblingIndex() * s, s *= 128, n = n.parent;
    return i;
  }
  isTouchIndexClickable(e) {
    return X.indexOf(e) < 0 || this.unlockedTouchIndices.has(e);
  }
  isTargetIndexDone(e) {
    const t = this.targetSprites[e];
    return !t || this.doneItems.indexOf(t) >= 0;
  }
  setSpriteAlpha(e, t) {
    const i = e.color;
    e.color = new __rea_outer_c(i.r, i.g, i.b, t);
  }
  checkPhase1Complete() {
    this.doneItems.length < this.targetSprites.length || this.enterPhase2();
  }
  markAllTasksCompleted() {
    super.markAllTasksCompleted(), this.phase = 2, this.winstate = !0, this.isInteractionLocked = !0, this.unregisterInteractionHandlers(), this.stopDecorationAnimations();
  }
  getEffectiveTotalCount() {
    return this.targetSprites.length;
  }
  resolveNextHintKey() {
    for (let e = 0; e < this.targetSprites.length; e += 1) if (!this.isTargetIndexDone(e)) return this.hint_arr[e] ?? null;
    return null;
  }
  setNodeActive(e, t) {
    e && (e.active = t);
  }
}).prototype, "bubbleNode1", [k], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), R = __rea_outer_t(N.prototype, "targetSprites", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), H = __rea_outer_t(N.prototype, "touchAreaSprites", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), U = __rea_outer_t(N.prototype, "specialSprites", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), M = __rea_outer_t(N.prototype, "showSpecialSprites", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), G = __rea_outer_t(N.prototype, "animationSprites", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), V = __rea_outer_t(N.prototype, "swipeToRightSprites", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), P = N)) || P);
__rea_outer_s._RF.pop();
export { __recovered_export_0 as default };
