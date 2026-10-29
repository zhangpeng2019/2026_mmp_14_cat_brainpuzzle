// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_8.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { applyDecoratedDescriptor as __rea_outer_e } from "./rollupPluginModLoBabelHelpers";
import { initializerDefineProperty as __rea_outer_i } from "./rollupPluginModLoBabelHelpers";
import { cclegacy as __rea_outer_r } from "cc";
import { Sprite as __rea_outer_n } from "cc";
import { Enum as __rea_outer_o } from "cc";
import { Node as __rea_outer_s } from "cc";
import { Label as __rea_outer_a } from "cc";
import { _decorator as __rea_outer_l } from "cc";
import { Vec3 as __rea_outer_h } from "cc";
import { Tween as __rea_outer_c } from "cc";
import { UITransform as __rea_outer_u } from "cc";
import { tween as __rea_outer_p } from "cc";
import { Color as __rea_outer_d } from "cc";
import { Vec2 as __rea_outer_S } from "cc";
import { default as __rea_outer_g } from "./LevelBase";
import { default as __rea_outer_T } from "./AudioManager";
import { I18nController as __rea_outer_v } from "./i18n-controller";
import { UIManager as __rea_outer_f } from "./ui-manager";
import { UIHint as __rea_outer_b } from "./uihint";
import { stopAllTweens as __rea_outer_m } from "./CocosCompat";
import { stopSpritesTweens as __rea_outer_I } from "./CocosCompat";
import { isSpriteRenderable as __rea_outer_A } from "./CocosCompat";
import { GameController as __rea_outer_y } from "./GameController";
import { default as __rea_outer_C } from "./ActionSystem";
let __recovered_export_0, __recovered_export_1;
var _, P, k, L, D, O, N, w, E, F, M, R, B, H, U, W, x, z, V, K, G, X, j, $, Q, Z, Y, q, J, tt, et, it, rt, nt, ot, st, at, lt, ht, ct, ut, pt, dt, St, gt, Tt, vt, ft, bt, mt, It;
__rea_outer_r._RF.push({}, "f7ba8iYmu5Oc52Kiheas9QC", "Level_8", void 0);
const {
    ccclass: At,
    property: yt
  } = __rea_outer_l,
  Ct = 255;
let _t = __recovered_export_0 = function (t) {
    return t[t.CLOCK_HAND = 0] = "CLOCK_HAND", t[t.CARPET_FOOTPRINT = 1] = "CARPET_FOOTPRINT", t[t.WALL_MIRROR = 2] = "WALL_MIRROR", t[t.WINDOW_SHADOW = 3] = "WINDOW_SHADOW", t[t.TABLE_COFFEE_CUP = 4] = "TABLE_COFFEE_CUP", t[t.BOOKSHELF_BOOK = 5] = "BOOKSHELF_BOOK", t[t.SOFA_BLOOD_STAIN = 6] = "SOFA_BLOOD_STAIN", t[t.FRUIT_PLATE_KNIFE = 7] = "FRUIT_PLATE_KNIFE", t[t.TV_CABINET_PHOTO = 8] = "TV_CABINET_PHOTO", t[t.WALL_CALENDAR = 9] = "WALL_CALENDAR", t;
  }({}),
  Pt = (_ = At("Level8_DragItemPair"), P = yt(__rea_outer_n), k = yt(__rea_outer_n), L = yt({
    type: __rea_outer_o(_t),
    tooltip: "线索类型"
  }), _((N = __rea_outer_e((O = class {
    constructor() {
      __rea_outer_i(this, "ID", N, this), __rea_outer_i(this, "dragSprite", w, this), __rea_outer_i(this, "dragMoveSprite", E, this), __rea_outer_i(this, "clueType", F, this), __rea_outer_i(this, "depentIndex", M, this);
    }
  }).prototype, "ID", [yt], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: function () {
      return 0;
    }
  }), w = __rea_outer_e(O.prototype, "dragSprite", [P], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: function () {
      return null;
    }
  }), E = __rea_outer_e(O.prototype, "dragMoveSprite", [k], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: function () {
      return null;
    }
  }), F = __rea_outer_e(O.prototype, "clueType", [L], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: function () {
      return _t.CLOCK_HAND;
    }
  }), M = __rea_outer_e(O.prototype, "depentIndex", [yt], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: function () {
      return -1;
    }
  }), D = O)) || D),
  kt = (R = At("Level8_ClickItemPair"), B = yt(__rea_outer_n), H = yt(__rea_outer_n), U = yt({
    type: __rea_outer_o(_t),
    tooltip: "线索类型"
  }), R((z = __rea_outer_e((x = class {
    constructor() {
      __rea_outer_i(this, "ID", z, this), __rea_outer_i(this, "clickSprite", V, this), __rea_outer_i(this, "targetSprite", K, this), __rea_outer_i(this, "depentIndex", G, this), __rea_outer_i(this, "clueType", X, this);
    }
  }).prototype, "ID", [yt], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: function () {
      return 0;
    }
  }), V = __rea_outer_e(x.prototype, "clickSprite", [B], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: function () {
      return null;
    }
  }), K = __rea_outer_e(x.prototype, "targetSprite", [H], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: function () {
      return null;
    }
  }), G = __rea_outer_e(x.prototype, "depentIndex", [yt], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: function () {
      return -1;
    }
  }), X = __rea_outer_e(x.prototype, "clueType", [U], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: function () {
      return _t.CLOCK_HAND;
    }
  }), W = x)) || W);
__recovered_export_1 = (j = At("Level_8"), $ = yt(__rea_outer_s), Q = yt(__rea_outer_a), Z = yt({
  type: [kt]
}), Y = yt({
  type: [Pt]
}), q = yt(__rea_outer_n), J = yt(__rea_outer_n), tt = yt(__rea_outer_n), et = yt(__rea_outer_n), it = yt(__rea_outer_n), rt = yt(__rea_outer_s), nt = yt(__rea_outer_s), ot = yt(__rea_outer_n), st = yt(__rea_outer_n), j((ht = __rea_outer_e((lt = class extends __rea_outer_g {
  constructor(...t) {
    super(...t), __rea_outer_i(this, "bubbleNode1", ht, this), __rea_outer_i(this, "TipLabel", ct, this), __rea_outer_i(this, "clickItemPair_arr", ut, this), __rea_outer_i(this, "DragItemPair_arr", pt, this), __rea_outer_i(this, "mirrorSprite", dt, this), __rea_outer_i(this, "manShadowSprite", St, this), __rea_outer_i(this, "fruitPosSprite", gt, this), __rea_outer_i(this, "carpetSprite", Tt, this), __rea_outer_i(this, "carpetSprite2", vt, this), __rea_outer_i(this, "Scene13Node", ft, this), __rea_outer_i(this, "circleobjects", bt, this), __rea_outer_i(this, "animationSprites", mt, this), __rea_outer_i(this, "blockSprite", It, this), this.phase = 0, this.winstate = !1, this.unlockIndexs = [], this.totalItems = [], this.doneItems = [], this.hint_arr = ["level8_hint1", "level8_hint2", "level8_hint3", "level8_hint4", "level8_hint5", "level8_hint6", "level8_hint7", "level8_hint8", "level8_hint9", "level8_hint10", "level8_hint11"], this.isInteractionLocked = !1, this.activeDragState = null, this.activeTouchMode = "none", this.mirrorSwipeState = null, this.isGestureTouchActive = !1, this.touchStartTarget = {
      kind: "none"
    }, this.onLevelTouchStart = t => {
      var e;
      if (1 !== this.phase || this.isInteractionLocked) return;
      if (null != (e = this.activeDragState) && e.isFollowingFinger) return;
      const i = this.getTouchWorldPoint(t),
        r = this.findDragPairAtPoint(i);
      if (r && this.canTriggerDragItemPair(r)) {
        var n;
        const t = r.dragSprite;
        if (null == t || null == (n = t.node) || !n.isValid) return;
        const e = t.node;
        __rea_outer_m(e);
        const o = this.resolveDragClueType(r);
        return this.activeTouchMode = "drag", this.isGestureTouchActive = !0, this.activeDragState = {
          pair: r,
          clueType: o,
          activeSprite: t,
          dragParent: e.parent,
          originPosition: e.position.clone(),
          startLocation: i,
          touchOffset: __rea_outer_h.ZERO.clone(),
          isFollowingFinger: !1
        }, void (this.touchStartTarget = {
          kind: "gesture"
        });
      }
      if (this.isMirrorAtPoint(i) && !this.isClueTypeUnlocked(_t.WALL_MIRROR)) return this.activeTouchMode = "mirror", this.isGestureTouchActive = !0, this.mirrorSwipeState = {
        legStartX: i.x,
        direction: 0,
        roundTripCount: 0
      }, this.setSpriteAlpha(this.mirrorSprite, Ct), void (this.touchStartTarget = {
        kind: "gesture"
      });
      this.activeTouchMode = "none", this.touchStartTarget = this.resolveClickTouchStartTarget(i);
    }, this.onLevelTouchMove = t => {
      if (1 !== this.phase || this.isInteractionLocked) return;
      if ("mirror" === this.activeTouchMode) return void this.updateMirrorSwipe(t);
      if (!this.activeDragState) return;
      const e = this.activeDragState;
      if (e.isFollowingFinger && e.clueType === _t.FRUIT_PLATE_KNIFE) return void this.setDragNodePositionFromTouch(t, e.activeSprite.node, e.dragParent, e.touchOffset);
      if (e.clueType !== _t.FRUIT_PLATE_KNIFE || e.isFollowingFinger) return;
      const i = this.getTouchWorldPoint(t);
      this.isSwipeToRight(e.startLocation, i) && this.beginFruitPlateFollow(e, t);
    }, this.onLevelTouchEnd = t => {
      if (1 !== this.phase || this.isInteractionLocked) return void this.resetTouchSession();
      if (this.isGestureTouchActive) return this.isGestureTouchActive = !1, this.activeDragState ? (this.handleDragTouchEnd(t), void (this.touchStartTarget = {
        kind: "none"
      })) : (("mirror" === this.activeTouchMode || this.mirrorSwipeState) && (this.resetMirrorSwipeState(), this.activeTouchMode = "none"), void (this.touchStartTarget = {
        kind: "none"
      }));
      if (this.activeDragState) return this.handleDragTouchEnd(t), void (this.touchStartTarget = {
        kind: "none"
      });
      if ("mirror" === this.activeTouchMode) return this.resetMirrorSwipeState(), this.activeTouchMode = "none", void (this.touchStartTarget = {
        kind: "none"
      });
      if ("none" !== this.activeTouchMode) return void (this.activeTouchMode = "none");
      const e = this.getTouchWorldPoint(t);
      if ("carpet" === this.touchStartTarget.kind) return this.isCarpetAtPoint(e) ? (this.touchStartTarget = {
        kind: "none"
      }, void this.handleCarpetClick()) : void (this.touchStartTarget = {
        kind: "none"
      });
      if ("click" === this.touchStartTarget.kind) {
        const t = this.findClickPairAtPoint(e);
        return t && t === this.touchStartTarget.pair ? (this.touchStartTarget = {
          kind: "none"
        }, void this.handleClickPair(t)) : void (this.touchStartTarget = {
          kind: "none"
        });
      }
      this.touchStartTarget = {
        kind: "none"
      };
    }, this.onLevelTouchCancel = () => {
      this.resetTouchSession();
    };
  }
  onLoad() {
    super.onLoad(), this.resolveTipLabelReference(), this.initializeTotalItems(), this.allItemNum = this.totalItems.length, this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.enterPhase0();
  }
  onDestroy() {
    this.unscheduleAllCallbacks(), this.unregisterInteractionHandlers(), this.stopDecorationAnimations(), this.stopAllLevelSpriteTweens(), this.resetDragState();
  }
  showHint() {
    if (1 !== this.phase) return;
    const t = this.resolveNextHintKey();
    if (!t) return;
    const e = __rea_outer_v.getInstance().getKey(t);
    __rea_outer_f.getInstance().showView(__rea_outer_b, void 0, {
      body: e
    });
  }
  getGameProgressSnapshot() {
    const t = this.totalItems.length,
      e = this.doneItems.length;
    return {
      progress: t > 0 ? e / t : 0,
      label: `${e}/${t}`
    };
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.doneItems = [], this.mirrorSwipeState = null, this.activeTouchMode = "none", this.isGestureTouchActive = !1, this.touchStartTarget = {
      kind: "none"
    }, this.isInteractionLocked = !1, this.hasInstallNum = 0, this.initializeUnlockIndexs(), this.initializeTotalItems(), this.resetDragState(), this.hideBubble(), this.setNodeActive(this.Scene13Node, !1), this.prepareSpritesForPhase0();
  }
  initializeTotalItems() {
    const t = this.clickItemPair_arr.map(t => t.clueType);
    this.totalItems = [...new Set(t)];
  }
  initializeUnlockIndexs() {
    this.unlockIndexs = [_t.CLOCK_HAND, _t.TABLE_COFFEE_CUP, _t.BOOKSHELF_BOOK, _t.SOFA_BLOOD_STAIN, _t.TV_CABINET_PHOTO, _t.WALL_CALENDAR];
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_T.playMusic("bgm5", !0, .5), this.setNodeActive(this.Scene13Node, !0), this.startDecorationAnimations(), this.scheduleOnce(() => {
      this.isValid && (this.playBubbleLine("8_1", "8_1"), this.scheduleOnce(() => {
        this.isValid && (this.hideBubble(), this.setNodeActive(this.Scene13Node, !1), this.enterPhase1(), this.playBlockFadeOut(1, () => {
          this.isValid;
        }));
      }, 3.5));
    }, 1);
  }
  enterPhase1() {
    this.phase = 1, this.registerInteractionHandlers(), __rea_outer_y.getInstance().refreshGameProgress();
  }
  enterPhase2() {
    this.phase >= 2 || (this.phase = 2, this.winstate = !0, __rea_outer_y.getInstance().pauseTimer(), this.unregisterInteractionHandlers(), this.stopDecorationAnimations(), this.hideBubble(), this.playBlockFadeOut(1, () => {
      this.isValid && (this.setNodeActive(this.Scene13Node, !0), this.scheduleOnce(() => {
        this.isValid && (this.playBubbleLine("8_2", "8_2"), this.showLevelSuccessAfterDialogue(2));
      }, 1));
    }));
  }
  prepareSpritesForPhase0() {
    var t;
    this.clickItemPair_arr.forEach(t => {
      this.setSpriteNodeActive(t.targetSprite, !1);
    }), this.setSpriteNodeActive(this.manShadowSprite, !1), this.setSpriteNodeActive(this.blockSprite, !1), this.prepareCarpetSprites(!0), this.DragItemPair_arr.forEach(t => {
      this.setSpriteNodeActive(t.dragMoveSprite, t.dragMoveSprite !== t.dragSprite), this.setSpriteNodeActive(t.dragSprite, !0);
    }), null != (t = this.blockSprite) && null != (t = t.node) && t.isValid && this.setSpriteAlpha(this.blockSprite, 255);
  }
  startDecorationAnimations() {
    this.animationSprites.forEach((t, e) => {
      const i = null == t ? void 0 : t.node;
      null != i && i.isValid && __rea_outer_C.RoseBreath_tag(i, 1, .02, .7, 0, 300 + e);
    });
  }
  stopDecorationAnimations() {
    this.animationSprites.forEach((t, e) => {
      const i = null == t ? void 0 : t.node;
      null != i && i.isValid && (__rea_outer_m(i), __rea_outer_c.stopAllByTag(300 + e));
    });
  }
  stopAllLevelSpriteTweens() {
    var t, e;
    null != (t = this.bubbleNode1) && t.isValid && __rea_outer_m(this.bubbleNode1), null != (e = this.blockSprite) && null != (e = e.node) && e.isValid && (__rea_outer_m(this.blockSprite.node), __rea_outer_c.stopAllByTarget(this.blockSprite)), __rea_outer_I(this.animationSprites), this.clickItemPair_arr.forEach(t => {
      __rea_outer_I([t.clickSprite, t.targetSprite]);
    }), this.DragItemPair_arr.forEach(t => {
      __rea_outer_I([t.dragSprite, t.dragMoveSprite]);
    }), __rea_outer_I([this.mirrorSprite, this.manShadowSprite, this.fruitPosSprite, this.carpetSprite, this.carpetSprite2]);
  }
  prepareCarpetSprites(t) {
    this.setSpriteNodeActive(this.carpetSprite, t), this.setSpriteNodeActive(this.carpetSprite2, !t);
  }
  registerInteractionHandlers() {
    this.node.on(__rea_outer_s.EventType.TOUCH_START, this.onLevelTouchStart, this), this.node.on(__rea_outer_s.EventType.TOUCH_MOVE, this.onLevelTouchMove, this), this.node.on(__rea_outer_s.EventType.TOUCH_END, this.onLevelTouchEnd, this), this.node.on(__rea_outer_s.EventType.TOUCH_CANCEL, this.onLevelTouchCancel, this);
  }
  unregisterInteractionHandlers() {
    this.node.off(__rea_outer_s.EventType.TOUCH_START, this.onLevelTouchStart, this), this.node.off(__rea_outer_s.EventType.TOUCH_MOVE, this.onLevelTouchMove, this), this.node.off(__rea_outer_s.EventType.TOUCH_END, this.onLevelTouchEnd, this), this.node.off(__rea_outer_s.EventType.TOUCH_CANCEL, this.onLevelTouchCancel, this), this.resetDragState(), this.resetMirrorSwipeState(), this.activeTouchMode = "none";
  }
  handleDragTouchEnd(t) {
    if (!this.activeDragState) return;
    const e = this.activeDragState;
    if (e.clueType === _t.FRUIT_PLATE_KNIFE && e.isFollowingFinger) return this.finishFruitPlateDrag(e), void (this.activeTouchMode = "none");
    const i = this.getTouchWorldPoint(t);
    e.clueType === _t.WINDOW_SHADOW && this.isSwipeToRight(e.startLocation, i) && this.applyWindowShadowUnlock(e.pair), this.resetDragState(), this.activeTouchMode = "none";
  }
  handleCarpetClick() {
    this.isClueTypeUnlocked(_t.CARPET_FOOTPRINT) || (this.unlockClueType(_t.CARPET_FOOTPRINT), this.setSpriteNodeActive(this.carpetSprite, !1), this.setSpriteNodeActive(this.carpetSprite2, !0));
  }
  applyWindowShadowUnlock(t) {
    this.unlockClueType(_t.WINDOW_SHADOW), this.setSpriteNodeActive(this.manShadowSprite, !0), this.setSpriteNodeActive(t.dragSprite, !1), this.setSpriteNodeActive(t.dragMoveSprite, !1);
  }
  updateMirrorSwipe(t) {
    var e;
    if (!this.mirrorSwipeState || null == (e = this.mirrorSprite) || null == (e = e.node) || !e.active || this.isClueTypeUnlocked(_t.WALL_MIRROR)) return;
    const i = this.getTouchWorldPoint(t).x,
      r = this.mirrorSwipeState;
    if (0 !== r.direction) {
      if (1 === r.direction) {
        if (r.legStartX - i < 10) return;
        r.roundTripCount += 1, r.direction = -1, r.legStartX = i, this.updateMirrorSpriteAlphaBySwipeCount(r.roundTripCount);
      } else {
        if (i - r.legStartX < 10) return;
        r.roundTripCount += 1, r.direction = 1, r.legStartX = i, this.updateMirrorSpriteAlphaBySwipeCount(r.roundTripCount);
      }
      r.roundTripCount < 3 || (this.resetMirrorSwipeState(), this.activeTouchMode = "none", this.hideMirrorSprite());
    } else {
      const t = i - r.legStartX;
      t >= 10 ? (r.direction = 1, r.legStartX = i) : t <= -10 && (r.direction = -1, r.legStartX = i);
    }
  }
  resetMirrorSwipeState() {
    this.mirrorSwipeState = null;
  }
  resetTouchSession() {
    this.resetDragState(), this.resetMirrorSwipeState(), this.activeTouchMode = "none", this.isGestureTouchActive = !1, this.touchStartTarget = {
      kind: "none"
    };
  }
  resolveClickTouchStartTarget(t) {
    if (this.isCarpetAtPoint(t)) return {
      kind: "carpet"
    };
    const e = this.findClickPairAtPoint(t);
    return e ? {
      kind: "click",
      pair: e
    } : {
      kind: "none"
    };
  }
  hideMirrorSprite() {
    var t;
    if (null == (t = this.mirrorSprite) || null == (t = t.node) || !t.isValid) return void this.unlockClueType(_t.WALL_MIRROR);
    const e = this.mirrorSprite.node;
    __rea_outer_m(e), __rea_outer_c.stopAllByTarget(this.mirrorSprite), this.setSpriteNodeActive(this.mirrorSprite, !1), this.unlockClueType(_t.WALL_MIRROR);
  }
  updateMirrorSpriteAlphaBySwipeCount(t) {
    if (!this.mirrorSprite) return;
    const e = Math.max(0, Ct - 85 * t);
    this.setSpriteAlpha(this.mirrorSprite, e);
  }
  beginFruitPlateFollow(t, e) {
    var i;
    const r = t.pair,
      n = r.dragMoveSprite;
    if (null == n || null == (i = n.node) || !i.isValid) return void this.resetDragState();
    const o = n.node,
      s = o.parent,
      a = r.dragSprite.node.worldPosition.clone();
    this.setSpriteNodeActive(n, !0), o.setWorldPosition(a);
    const l = this.calculateTouchOffset(e, o, s);
    this.setDragNodePositionFromTouch(e, o, s, l), this.activeDragState = {
      pair: t.pair,
      clueType: t.clueType,
      activeSprite: n,
      dragParent: s,
      originPosition: o.position.clone(),
      startLocation: t.startLocation,
      touchOffset: l,
      isFollowingFinger: !0
    };
  }
  finishFruitPlateDrag(t) {
    var e, i, r;
    const n = t.activeSprite,
      o = this.fruitPosSprite;
    if (null == n || null == (e = n.node) || !e.isValid || null == o || null == (i = o.node) || !i.isValid) return void this.resetDragState();
    this.isInteractionLocked = !0;
    const s = o.node.worldPosition.clone(),
      a = n.node,
      l = (null == (r = a.parent.getComponent(__rea_outer_u)) ? void 0 : r.convertToNodeSpaceAR(s)) ?? a.position.clone();
    __rea_outer_m(a), __rea_outer_p(a).to(.3, {
      position: l
    }).call(() => {
      this.isValid && (this.unlockClueType(_t.FRUIT_PLATE_KNIFE), this.isInteractionLocked = !1, this.activeDragState = null, this.activeTouchMode = "none");
    }).start();
  }
  handleClickPair(t) {
    this.isClueTypeDone(t.clueType) || this.isClueTypeUnlocked(t.clueType) && (t.depentIndex >= 0 && !this.isClueTypeUnlocked(t.depentIndex) || this.completeClickPair(t));
  }
  completeClickPair(t) {
    const e = t.targetSprite;
    if (!__rea_outer_A(e)) return;
    this.isInteractionLocked = !0, e.node.active = !0, __rea_outer_c.stopAllByTarget(e), __rea_outer_m(e.node), this.setSpriteAlpha(e, 0);
    const i = e.color;
    __rea_outer_p(e).to(.2, {
      color: new __rea_outer_d(i.r, i.g, i.b, Ct)
    }).call(() => {
      this.isValid && (this.markClueTypeDone(t.clueType), __rea_outer_T.playEffect_1("level8_1"), this.isInteractionLocked = !1, this.TryQuickWin() || this.checkPhase1Complete());
    }).start();
  }
  checkPhase1Complete() {
    this.doneItems.length < this.totalItems.length || this.enterPhase2();
  }
  canTriggerDragItemPair(t) {
    var e;
    const i = this.resolveDragClueType(t);
    if (this.isClueTypeDone(i)) return !1;
    if (t.depentIndex >= 0 && !this.isClueTypeUnlocked(t.depentIndex)) return !1;
    const r = t.dragSprite;
    return !(null == r || null == (e = r.node) || !e.active) && __rea_outer_A(r);
  }
  resolveDragClueType(t) {
    return 0 === t.ID ? _t.FRUIT_PLATE_KNIFE : 2 === t.ID ? _t.WINDOW_SHADOW : t.clueType;
  }
  findDragPairAtPoint(t) {
    const e = [...this.DragItemPair_arr].sort((t, e) => {
      const i = this.getSpriteRenderOrder(t.dragSprite);
      return this.getSpriteRenderOrder(e.dragSprite) - i;
    });
    for (const n of e) {
      var i, r;
      const e = n.dragSprite,
        o = n.dragMoveSprite;
      if (null != e && null != (i = e.node) && i.active && this.isPointInsideSprite(e, t)) return n;
      if (o && o !== e && null != (r = o.node) && r.active && this.isPointInsideSprite(o, t)) return n;
    }
    return null;
  }
  isMirrorAtPoint(t) {
    var e;
    const i = this.mirrorSprite;
    return !(null == i || null == (e = i.node) || !e.active) && this.isPointInsideSprite(i, t);
  }
  isCarpetAtPoint(t) {
    var e;
    const i = this.carpetSprite;
    return !(null == i || null == (e = i.node) || !e.active) && this.isPointInsideSprite(i, t);
  }
  isClueTypeDone(t) {
    return this.doneItems.indexOf(t) >= 0;
  }
  isClueTypeUnlocked(t) {
    return this.unlockIndexs.indexOf(t) >= 0;
  }
  unlockClueType(t) {
    this.isClueTypeUnlocked(t) || this.unlockIndexs.push(t);
  }
  markClueTypeDone(t) {
    this.isClueTypeDone(t) || (this.doneItems.push(t), this.hasInstallNum = this.doneItems.length, __rea_outer_y.getInstance().refreshGameProgress());
  }
  findClickPairAtPoint(t) {
    const e = [...this.clickItemPair_arr].sort((t, e) => {
      const i = this.getSpriteRenderOrder(t.clickSprite);
      return this.getSpriteRenderOrder(e.clickSprite) - i;
    });
    for (const r of e) {
      var i;
      const e = r.clickSprite;
      if (null != e && null != (i = e.node) && i.active && this.isPointInsideSprite(e, t)) return r;
    }
    return null;
  }
  resolveNextHintKey() {
    for (const t of this.totalItems) {
      if (this.isClueTypeDone(t)) continue;
      const e = t + 1;
      return this.hint_arr[e - 1] ?? `level8_hint${e}`;
    }
    return null;
  }
  resolveTipLabelReference() {
    if (this.TipLabel) return;
    const t = this.bubbleNode1;
    null != t && t.isValid && (this.TipLabel = t.getComponentInChildren(__rea_outer_a));
  }
  playBubbleLine(t, e) {
    this.resolveTipLabelReference();
    const i = __rea_outer_v.getInstance(),
      r = this.TipLabel;
    r && (r.string = i.getKey(t), this.setNodeActive(r.node, !0)), this.setNodeActive(this.bubbleNode1, !0), __rea_outer_T.playEffect_1(e);
  }
  hideBubble() {
    var t;
    this.setNodeActive(this.bubbleNode1, !1), this.setNodeActive((null == (t = this.TipLabel) ? void 0 : t.node) ?? null, !1);
  }
  playBlockFadeOut(t, e) {
    var i;
    if (null == (i = this.blockSprite) || null == (i = i.node) || !i.isValid) return void e();
    const r = this.blockSprite.node,
      n = this.collectSpritesFromNode(r);
    0 === n.length && n.push(this.blockSprite), n.forEach(t => {
      this.setSpriteAlpha(t, 255), t.node.active = !0;
    }), this.setSpriteNodeActive(this.blockSprite, !0);
    let o = 0;
    const s = () => {
      o += 1, o >= n.length && (n.forEach(t => {
        t.node.active = !1;
      }), this.setSpriteNodeActive(this.blockSprite, !1), e());
    };
    n.forEach(e => {
      __rea_outer_c.stopAllByTarget(e), __rea_outer_m(e.node);
      const i = e.color;
      __rea_outer_p(e).to(t, {
        color: new __rea_outer_d(i.r, i.g, i.b, 0)
      }).call(s).start();
    });
  }
  collectSpritesFromNode(t) {
    const e = [],
      i = [t];
    for (; i.length > 0;) {
      const t = i.pop(),
        r = t.getComponent(__rea_outer_n);
      r && e.push(r), t.children.forEach(t => {
        i.push(t);
      });
    }
    return e;
  }
  resetDragState() {
    var t;
    if (!this.activeDragState) return;
    const {
      activeSprite: e,
      originPosition: i
    } = this.activeDragState;
    null != e && null != (t = e.node) && t.isValid && !this.activeDragState.isFollowingFinger && (__rea_outer_m(e.node), e.node.setPosition(i)), this.activeDragState = null;
  }
  isSwipeToRight(t, e) {
    const i = e.x - t.x,
      r = e.y - t.y;
    return !(i < 10) && Math.abs(i) >= 1.2 * Math.abs(r);
  }
  isPointInsideSprite(t, e) {
    const i = t.node.getComponent(__rea_outer_u);
    return !!i && i.getBoundingBoxToWorld().contains(e);
  }
  getTouchWorldPoint(t) {
    const e = t.getUILocation();
    return new __rea_outer_S(e.x, e.y);
  }
  calculateTouchOffset(t, e, i) {
    const r = this.getTouchLocalPosition(t, i);
    return new __rea_outer_h(e.position.x - r.x, e.position.y - r.y, 0);
  }
  getTouchLocalPosition(t, e) {
    const i = t.getUILocation(),
      r = e.getComponent(__rea_outer_u);
    return r ? r.convertToNodeSpaceAR(new __rea_outer_h(i.x, i.y, 0)) : __rea_outer_h.ZERO.clone();
  }
  setDragNodePositionFromTouch(t, e, i, r) {
    const n = this.getTouchLocalPosition(t, i);
    e.setPosition(n.x + r.x, n.y + r.y, e.position.z);
  }
  getSpriteRenderOrder(t) {
    var e;
    if (null == t || null == (e = t.node) || !e.isValid) return -1;
    let i = 0,
      r = 1,
      n = t.node;
    for (; n;) i += n.getSiblingIndex() * r, r *= 128, n = n.parent;
    return i;
  }
  setSpriteAlpha(t, e) {
    const i = t.color;
    t.color = new __rea_outer_d(i.r, i.g, i.b, e);
  }
  setSpriteNodeActive(t, e) {
    null != t && t.node && (!e || __rea_outer_A(t) ? t.node.active = e : t.node.active = !1);
  }
  markAllTasksCompleted() {
    super.markAllTasksCompleted(), this.phase = 2, this.winstate = !0, this.isInteractionLocked = !0, this.doneItems = [...this.totalItems], this.unregisterInteractionHandlers(), this.stopDecorationAnimations(), this.hideBubble();
  }
  setNodeActive(t, e) {
    t && (t.active = e);
  }
}).prototype, "bubbleNode1", [$], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ct = __rea_outer_e(lt.prototype, "TipLabel", [Q], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ut = __rea_outer_e(lt.prototype, "clickItemPair_arr", [Z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), pt = __rea_outer_e(lt.prototype, "DragItemPair_arr", [Y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), dt = __rea_outer_e(lt.prototype, "mirrorSprite", [q], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), St = __rea_outer_e(lt.prototype, "manShadowSprite", [J], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), gt = __rea_outer_e(lt.prototype, "fruitPosSprite", [tt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Tt = __rea_outer_e(lt.prototype, "carpetSprite", [et], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), vt = __rea_outer_e(lt.prototype, "carpetSprite2", [it], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ft = __rea_outer_e(lt.prototype, "Scene13Node", [rt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), bt = __rea_outer_e(lt.prototype, "circleobjects", [nt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), mt = __rea_outer_e(lt.prototype, "animationSprites", [ot], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), It = __rea_outer_e(lt.prototype, "blockSprite", [st], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), at = lt)) || at);
__rea_outer_r._RF.pop();
export { __recovered_export_0 as ClueType, __recovered_export_1 as default };
