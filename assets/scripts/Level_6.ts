// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_6.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { applyDecoratedDescriptor as __rea_outer_t } from "./rollupPluginModLoBabelHelpers";
import { initializerDefineProperty as __rea_outer_i } from "./rollupPluginModLoBabelHelpers";
import { cclegacy as __rea_outer_s } from "cc";
import { Color as __rea_outer_r } from "cc";
import { Sprite as __rea_outer_o } from "cc";
import { Enum as __rea_outer_n } from "cc";
import { Node as __rea_outer_a } from "cc";
import { Label as __rea_outer_l } from "cc";
import { Prefab as __rea_outer_p } from "cc";
import { _decorator as __rea_outer_h } from "cc";
import { Vec3 as __rea_outer_c } from "cc";
import { instantiate as __rea_outer_d } from "cc";
import { Tween as __rea_outer_u } from "cc";
import { tween as __rea_outer_S } from "cc";
import { UITransform as __rea_outer_g } from "cc";
import { Vec2 as __rea_outer_v } from "cc";
import { default as __rea_outer_y } from "./LevelBase";
import { default as __rea_outer_T } from "./AudioManager";
import { I18nController as __rea_outer_I } from "./i18n-controller";
import { UIManager as __rea_outer_f } from "./ui-manager";
import { UIHint as __rea_outer_m } from "./uihint";
import { stopAllTweens as __rea_outer_D } from "./CocosCompat";
import { isSpriteRenderable as __rea_outer_P } from "./CocosCompat";
import { stopSpritesTweens as __rea_outer__ } from "./CocosCompat";
import { setNodeOpacity as __rea_outer_O } from "./CocosCompat";
import { getUITransform as __rea_outer_L } from "./CocosCompat";
import { GameController as __rea_outer_b } from "./GameController";
import { default as __rea_outer_N } from "./ActionSystem";
import { default as __rea_outer_C } from "./Level_6_man";
import { ManTraitPresence as __rea_outer_E } from "./Level_6_man";
import { ManClueStateType as __rea_outer_A } from "./Level_6_man";
let __recovered_export_0, __recovered_export_1;
var M, w, x, V, H, k, R, F, B, $, K, G, z, W, U, Y, X, j, J, Q, Z, q, ee, te, ie, se, re, oe, ne, ae, le, pe, he, ce, de, ue, Se, ge, ve, ye, Te, Ie, fe, me, De, Pe, _e, Oe;
__rea_outer_s._RF.push({}, "4c7d95y3PNGaKvKNaUv6cd2", "Level_6", void 0);
const {
    ccclass: Le,
    property: be
  } = __rea_outer_h,
  Ne = new __rea_outer_r(255, 255, 255, 255),
  Ce = "6_10";
let Ee = __recovered_export_0 = function (e) {
  return e[e.BLOOD = 0] = "BLOOD", e[e.COLOR_BLIND = 1] = "COLOR_BLIND", e[e.SOCKS = 2] = "SOCKS", e[e.HEIGHT = 3] = "HEIGHT", e[e.WEAKNESS = 4] = "WEAKNESS", e[e.LEFT_HANDED = 5] = "LEFT_HANDED", e[e.MONEY_LOVER = 6] = "MONEY_LOVER", e[e.GLOVE = 7] = "GLOVE", e;
}({});
const Ae = {
  [Ee.BLOOD]: 2,
  [Ee.COLOR_BLIND]: 1,
  [Ee.SOCKS]: 2,
  [Ee.HEIGHT]: 2,
  [Ee.WEAKNESS]: 1,
  [Ee.LEFT_HANDED]: 1,
  [Ee.MONEY_LOVER]: 2,
  [Ee.GLOVE]: 1
};
let Me = (M = Le("Level6_DragItemPair"), w = be(__rea_outer_o), x = be(__rea_outer_o), V = be({
  type: __rea_outer_n(Ee),
  tooltip: "侦查的方向类型（血迹/色盲/袜子/身高/力气/左撇子/爱钱/手套）"
}), M((R = __rea_outer_t((k = class {
  constructor() {
    __rea_outer_i(this, "ID", R, this), __rea_outer_i(this, "dragSprite", F, this), __rea_outer_i(this, "dragMoveSprite", B, this), __rea_outer_i(this, "spyType", $, this), __rea_outer_i(this, "depentIndex", K, this);
  }
}).prototype, "ID", [be], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), F = __rea_outer_t(k.prototype, "dragSprite", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), B = __rea_outer_t(k.prototype, "dragMoveSprite", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), $ = __rea_outer_t(k.prototype, "spyType", [V], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return Ee.BLOOD;
  }
}), K = __rea_outer_t(k.prototype, "depentIndex", [be], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return -1;
  }
}), H = k)) || H);
__recovered_export_1 = (G = Le("Level_6"), z = be(__rea_outer_a), W = be(__rea_outer_l), U = be({
  type: [__rea_outer_o]
}), Y = be({
  type: [__rea_outer_C]
}), X = be(__rea_outer_p), j = be(__rea_outer_a), J = be({
  type: [Me]
}), Q = be(__rea_outer_a), Z = be(__rea_outer_o), q = be(__rea_outer_o), ee = be(__rea_outer_o), te = be(__rea_outer_o), ie = be(__rea_outer_o), se = be(__rea_outer_o), re = be(__rea_outer_a), oe = be(__rea_outer_a), ne = be(__rea_outer_a), G((pe = __rea_outer_t((le = class extends __rea_outer_y {
  constructor(...e) {
    super(...e), __rea_outer_i(this, "bubbleNode1", pe, this), __rea_outer_i(this, "TipLabel", he, this), __rea_outer_i(this, "animationSprites", ce, this), __rea_outer_i(this, "level_6_mans", de, this), __rea_outer_i(this, "level6ManPrefab", ue, this), __rea_outer_i(this, "mansContainer", Se, this), __rea_outer_i(this, "DragItemPair_arr", ge, this), __rea_outer_i(this, "dragArea", ve, this), __rea_outer_i(this, "dragCorpseSprite", ye, this), __rea_outer_i(this, "corpseTouch", Te, this), __rea_outer_i(this, "ruler_sprite", Ie, this), __rea_outer_i(this, "hand_gripper_sprite", fe, this), __rea_outer_i(this, "money_sprite", me, this), __rea_outer_i(this, "money_Touch", De, this), __rea_outer_i(this, "blockNode", Pe, this), __rea_outer_i(this, "SceneNode0", _e, this), __rea_outer_i(this, "SceneNode2", Oe, this), this.phase = 0, this.winstate = !1, this.unlockIndexs = [-1], this.totalitems = [], this.doneItems = [], this.leaveItemIndexs = [], this.willLeaveItemIndexs = [], this.hint_arr = ["level6_hint1", "level6_hint2", "level6_hint3", "level6_hint4", "level6_hint5", "level6_hint6", "level6_hint7", "level6_hint8"], this.config_arr = [{
      ID: 0,
      soundkey: "6_2",
      showtype: 1,
      textStrKey: "6_2",
      delayTime: 1.5
    }, {
      ID: 1,
      soundkey: "6_3",
      showtype: 2,
      textStrKey: "6_3",
      delayTime: 1.5
    }, {
      ID: 2,
      soundkey: "6_4",
      showtype: 1,
      textStrKey: "6_4",
      delayTime: 1.5
    }, {
      ID: 3,
      soundkey: "6_5",
      showtype: 1,
      textStrKey: "6_5",
      delayTime: 1.5
    }, {
      ID: 4,
      soundkey: "6_6",
      showtype: 1,
      textStrKey: "6_6",
      delayTime: 1.5
    }, {
      ID: 5,
      soundkey: "6_7",
      showtype: 1,
      textStrKey: "6_7",
      delayTime: 1.5
    }, {
      ID: 6,
      soundkey: "6_8",
      showtype: 1,
      textStrKey: "6_8",
      delayTime: 1.5
    }, {
      ID: 7,
      soundkey: "6_9",
      showtype: 1,
      textStrKey: "6_9",
      delayTime: 1.5
    }, {
      ID: 8,
      soundkey: "6_10",
      showtype: 1,
      textStrKey: "6_10",
      delayTime: 1.5
    }, {
      ID: 9,
      soundkey: "6_11",
      showtype: 1,
      textStrKey: "6_11",
      delayTime: 1.5
    }], this.isInteractionLocked = !1, this.activeInteractionState = null, this.activeCorpseInteractionState = null, this.rulerSpriteOriginPosition = new __rea_outer_c(), this.corpseSpriteOriginPosition = new __rea_outer_c(), this.onCorpseTouchStart = e => {
      var t, i;
      if (1 !== this.phase || this.isInteractionLocked || this.activeInteractionState || this.isCorpseSwipeCompleted()) return;
      const s = null == (t = this.corpseTouch) ? void 0 : t.node;
      if (null == s || !s.isValid || !s.active) return;
      const r = null == (i = this.dragCorpseSprite) ? void 0 : i.node;
      if (null == r || !r.isValid) return;
      const o = r.parent;
      if (null == o || !o.isValid) return;
      const n = this.getTouchLocalPosition(e, o);
      this.activeCorpseInteractionState = {
        originPosition: r.position.clone(),
        startLocalX: n.x,
        dragParent: o
      };
    }, this.onDragTouchStart = e => {
      var t;
      const i = e.target,
        s = this.getTouchWorldPoint(e);
      if (console.log(`[Level_6] onDragTouchStart target=${(null == i ? void 0 : i.name) ?? "null"} phase=${this.phase} locked=${this.isInteractionLocked} hasActiveState=${!!this.activeInteractionState} touch=(${s.x.toFixed(1)},${s.y.toFixed(1)})`), 1 !== this.phase || this.isInteractionLocked || this.activeInteractionState || this.activeCorpseInteractionState) return void console.log("[Level_6] onDragTouchStart blocked by phase/lock/activeState");
      const r = this.resolveDragItemPairFromNode(i);
      if (!r) return void console.log(`[Level_6] onDragTouchStart no DragItemPair for target=${(null == i ? void 0 : i.name) ?? "null"}`);
      var o;
      if (this.logDragPairState("touchStart-resolved", r), !this.canTriggerDragItemPair(r)) return void console.log(`[Level_6] onDragTouchStart cannot trigger pairID=${r.ID} spyType=${r.spyType} done=${this.isSpyTypeDone(r.spyType)} depentIndex=${r.depentIndex} unlockIndexs=${JSON.stringify(this.unlockIndexs)} dragSpriteActive=${(null == (o = r.dragSprite) || null == (o = o.node) ? void 0 : o.active) ?? !1}`);
      if (this.isSwipeSpyType(r.spyType)) {
        const e = r.dragSprite,
          t = e.node;
        return console.log(`[Level_6] onDragTouchStart swipe spyType=${r.spyType}`), void (this.activeInteractionState = {
          pair: r,
          spyType: r.spyType,
          activeSprite: e,
          dragParent: t.parent,
          originParent: t.parent,
          originPosition: t.position.clone(),
          originSiblingIndex: t.getSiblingIndex(),
          startLocation: s,
          touchOffset: __rea_outer_c.ZERO.clone()
        });
      }
      const n = this.resolveActiveDragSprite(r);
      var a;
      if (null == n || null == (t = n.node) || !t.isValid) return void console.log(`[Level_6] onDragTouchStart activeSprite invalid pairID=${r.ID} spyType=${r.spyType} dragMoveSprite=${(null == (a = r.dragMoveSprite) || null == (a = a.node) ? void 0 : a.name) ?? "null"}`);
      const l = n.node,
        p = l.parent;
      if (this.isDifferentDragNodes(r)) {
        var h, d;
        const e = r.dragSprite.node.worldPosition.clone();
        console.log(`[Level_6] onDragTouchStart drag swap pairID=${r.ID} spyType=${r.spyType} hideVisual=${(null == (h = r.dragSprite) || null == (h = h.node) ? void 0 : h.name) ?? "null"} show=${(null == (d = r.dragMoveSprite) || null == (d = d.node) ? void 0 : d.name) ?? "null"} worldPos=(${e.x.toFixed(1)},${e.y.toFixed(1)},${e.z.toFixed(1)})`), this.setSpriteNodeActive(r.dragMoveSprite, !0), l.setWorldPosition(e), this.elevateDragNode(l), this.hideDragSpriteVisual(r.dragSprite), this.logDragPairState("touchStart-afterSwap", r);
      }
      const u = this.calculateTouchOffset(e, l, p);
      this.setDragNodePositionFromTouch(e, l, p, u), console.log(`[Level_6] onDragTouchStart drag begin pairID=${r.ID} spyType=${r.spyType} activeNode=${l.name} localPos=(${l.position.x.toFixed(1)},${l.position.y.toFixed(1)}) touchOffset=(${u.x.toFixed(1)},${u.y.toFixed(1)})`), this.activeInteractionState = {
        pair: r,
        spyType: r.spyType,
        activeSprite: n,
        dragParent: p,
        originParent: p,
        originPosition: l.position.clone(),
        originSiblingIndex: l.getSiblingIndex(),
        startLocation: s,
        touchOffset: u
      };
    }, this.onDragTouchMove = e => {
      if (this.activeCorpseInteractionState) return void this.updateCorpseSpritePosition(e);
      if (!this.activeInteractionState || 1 !== this.phase) return;
      const t = this.activeInteractionState;
      this.isSwipeSpyType(t.spyType) || this.setDragNodePositionFromTouch(e, t.activeSprite.node, t.dragParent, t.touchOffset);
    }, this.onDragTouchEnd = e => {
      const t = e.type;
      if (this.activeCorpseInteractionState) return void this.finishCorpseInteraction(e);
      if (!this.activeInteractionState || 1 !== this.phase) return console.log(`[Level_6] onDragTouchEnd ignored type=${t} noActiveState phase=${this.phase}`), void this.resetActiveInteractionState();
      const i = this.activeInteractionState;
      this.activeInteractionState = null;
      const s = this.getTouchWorldPoint(e),
        r = this.isPointInsideDragArea(s),
        o = this.isDragInteractionSuccess(i, s, r);
      console.log(`[Level_6] onDragTouchEnd type=${t} pairID=${i.pair.ID} spyType=${i.spyType} success=${o} inArea=${r} release=(${s.x.toFixed(1)},${s.y.toFixed(1)})`), o ? this.completeDragItemPair(i.pair, i) : this.handleDragReleaseVisual(i.pair, i);
    };
  }
  onLoad() {
    super.onLoad(), this.spawnLevel6MansFromMarkers(), this.initializeTotalItems(), this.allItemNum = this.totalitems.length, this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.enterPhase0();
  }
  onDestroy() {
    this.resetActiveInteractionState(), this.resetCorpseInteractionState(), this.stopDecorationAnimations(), this.stopAllLevelSpriteTweens(), this.unscheduleAllCallbacks(), this.unregisterInteractionHandlers(), this.restoreAllDragItemPairs(), __rea_outer_T.stopVoice();
  }
  showHint() {
    if (1 !== this.phase) return;
    const e = this.resolveNextHintKey();
    if (!e) return;
    const t = __rea_outer_I.getInstance().getKey(e);
    __rea_outer_f.getInstance().showView(__rea_outer_m, void 0, {
      body: t
    });
  }
  getGameProgressSnapshot() {
    const e = this.totalitems.length,
      t = this.doneItems.length;
    return {
      progress: e > 0 ? t / e : 0,
      label: `${t}/${e}`
    };
  }
  resetLevelState() {
    var e;
    this.phase = 0, this.winstate = !1, this.unlockIndexs = [-1], this.totalitems = [], this.doneItems = [], this.leaveItemIndexs = [], this.willLeaveItemIndexs = [], this.isInteractionLocked = !1, this.activeInteractionState = null, this.activeCorpseInteractionState = null, this.hasInstallNum = 0, this.setNodeActive(this.bubbleNode1, !1), this.setNodeActive(this.SceneNode2, !1), this.setNodeActive(this.SceneNode0, !0), this.setNodeActive((null == (e = this.TipLabel) ? void 0 : e.node) ?? null, !1), __rea_outer_T.stopVoice(), this.hideBlockNode(), this.recordRulerSpriteOriginPosition(), this.recordCorpseSpriteOriginPosition(), this.restoreAllDragItemPairs(), this.prepareSpritesForPhase0(), this.initializeTotalItems();
  }
  recordRulerSpriteOriginPosition() {
    var e;
    const t = null == (e = this.ruler_sprite) ? void 0 : e.node;
    null != t && t.isValid && (this.rulerSpriteOriginPosition = t.position.clone());
  }
  recordCorpseSpriteOriginPosition() {
    var e;
    const t = null == (e = this.dragCorpseSprite) ? void 0 : e.node;
    null != t && t.isValid && (this.corpseSpriteOriginPosition = t.position.clone());
  }
  initializeTotalItems() {
    this.totalitems = [Ee.BLOOD, Ee.COLOR_BLIND, Ee.SOCKS, Ee.HEIGHT, Ee.WEAKNESS, Ee.LEFT_HANDED, Ee.MONEY_LOVER, Ee.GLOVE];
  }
  spawnLevel6MansFromMarkers() {
    if (this.level_6_mans.length > 0) return;
    const e = this.mansContainer;
    if (!this.level6ManPrefab || null == e || !e.isValid) return void console.error("[Level_6] level6ManPrefab or mansContainer is not configured.");
    const t = e.children.slice();
    if (0 === t.length) return void console.error("[Level_6] No position markers under mans.");
    const i = [];
    t.forEach(t => {
      if (!t.isValid) return;
      const s = t.position.clone(),
        r = t.name,
        o = __rea_outer_d(this.level6ManPrefab);
      o.name = r, e.addChild(o), o.setPosition(s);
      const n = o.getComponent(__rea_outer_C);
      n ? (i.push(n), t.destroy()) : console.error(`[Level_6] Missing Level_6_man on spawned node ${r}.`);
    }), this.level_6_mans = i;
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_T.playMusic("bgm5", !0, .15), this.startDecorationAnimations(), this.prepareMansForPhase0(), this.showBlockNode(), this.scheduleOnce(() => {
      this.isValid && 0 === this.phase && (this.playBubbleLine("6_1", "6_1"), this.scheduleOnce(() => {
        this.isValid && 0 === this.phase && this.enterPhase1();
      }, 2.6));
    }, 1);
  }
  prepareMansForPhase0() {
    this.level_6_mans.forEach(e => {
      null != e && e.isValid && e.setNormalState(!0);
    });
  }
  skipOpeningToPlay() {
    return 0 === this.phase && (this.stopOpeningDialogue(), this.enterPhase1(), !0);
  }
  enterPhase1() {
    0 === this.phase && (this.phase = 1, this.hideBubble(), this.hideBlockNode(), this.level_6_mans.forEach(e => {
      null != e && e.isValid && e.setNormalState();
    }), this.prepareSpritesForPhase1(), this.registerInteractionHandlers(), __rea_outer_b.getInstance().refreshGameProgress());
  }
  prepareSpritesForPhase1() {
    this.DragItemPair_arr.forEach(e => {
      this.isSpyTypeDone(e.spyType) ? e.spyType === Ee.HEIGHT && this.prepareHeightSpritesForCompleted(e) : e.spyType !== Ee.MONEY_LOVER ? e.spyType !== Ee.HEIGHT ? (this.setSpriteActive(e.dragSprite, !0), this.shouldHideDragMoveSpriteInPhase0(e) && this.setSpriteActive(e.dragMoveSprite, !1)) : this.prepareHeightSpritesForPhase1(e) : this.prepareMoneyLoverSpritesForPhase1(e);
    }), this.prepareSharedSwipeSpritesForPhase1(), this.prepareCorpseSpritesForPhase1();
  }
  enterPhase2() {
    this.phase >= 2 || (this.phase = 2, this.winstate = !0, this.unregisterInteractionHandlers(), this.stopDecorationAnimations(), this.setNodeActive(this.bubbleNode1, !1), this.setNodeActive(this.SceneNode0, !1), this.setNodeActive(this.SceneNode2, !0), this.hasInstallNum = this.totalitems.length, __rea_outer_b.getInstance().refreshGameProgress(), __rea_outer_b.getInstance().pauseTimer(), this.scheduleOnce(() => {
      this.isValid && this.showLevelSuccess();
    }, 2));
  }
  prepareSpritesForPhase0() {
    this.setSpriteActive(this.ruler_sprite, !1), this.DragItemPair_arr.forEach(e => {
      e.spyType !== Ee.MONEY_LOVER ? e.spyType !== Ee.HEIGHT ? (this.setSpriteActive(e.dragSprite, !0), this.shouldHideDragMoveSpriteInPhase0(e) && this.setSpriteActive(e.dragMoveSprite, !1)) : this.prepareHeightSpritesForPhase0(e) : this.prepareMoneyLoverSpritesForPhase0(e);
    }), this.prepareSharedSwipeSpritesForPhase0(), this.prepareCorpseSpritesForPhase0();
  }
  prepareSharedSwipeSpritesForPhase0() {
    this.ensureSharedSwipeDragSpriteVisible();
  }
  prepareSharedSwipeSpritesForPhase1() {
    this.ensureSharedSwipeDragSpriteVisible();
  }
  getSharedSwipeDragSprite() {
    const e = this.DragItemPair_arr.find(e => e.spyType === Ee.BLOOD);
    return (null == e ? void 0 : e.dragSprite) ?? null;
  }
  ensureSharedSwipeDragSpriteVisible() {
    var e;
    const t = this.getSharedSwipeDragSprite();
    null != t && null != (e = t.node) && e.isValid && (__rea_outer_D(t.node), this.showDragSpriteVisual(t), this.setSpriteActive(t, !0));
  }
  prepareCorpseSpritesForPhase0() {
    this.setCorpseSpritePosition(this.corpseSpriteOriginPosition), this.setSpriteActive(this.dragCorpseSprite, !0), this.setSpriteActive(this.corpseTouch, !1);
  }
  prepareCorpseSpritesForPhase1() {
    if (this.setSpriteActive(this.dragCorpseSprite, !0), this.isCorpseSwipeCompleted()) return this.setCorpseSpritePosition(this.getCorpseCompletedPosition()), void this.setSpriteActive(this.corpseTouch, !1);
    this.setCorpseSpritePosition(this.corpseSpriteOriginPosition), this.setSpriteActive(this.corpseTouch, !0);
  }
  getCorpseCompletedPosition() {
    const e = this.corpseSpriteOriginPosition.clone();
    return e.x += 80, e;
  }
  setCorpseSpritePosition(e) {
    var t;
    const i = null == (t = this.dragCorpseSprite) ? void 0 : t.node;
    null != i && i.isValid && (__rea_outer_D(i), i.setPosition(e));
  }
  isCorpseSwipeCompleted() {
    return this.unlockIndexs.indexOf(1) >= 0;
  }
  prepareHeightSpritesForPhase0(e) {
    this.setSpriteActive(this.ruler_sprite, !1), this.showDragSpriteVisual(e.dragSprite), this.setSpriteActive(e.dragMoveSprite, !1);
  }
  prepareHeightSpritesForPhase1(e) {
    this.setSpriteActive(this.ruler_sprite, !1), this.showDragSpriteVisual(e.dragSprite), this.setSpriteActive(e.dragMoveSprite, !1);
  }
  prepareHeightSpritesForCompleted(e) {
    this.hideDragSpriteCompletely(e.dragSprite), this.setSpriteActive(e.dragMoveSprite, !1), this.showRulerSpriteAtOrigin();
  }
  prepareMoneyLoverSpritesForPhase0(e) {
    this.setSpriteActive(e.dragSprite, !1), this.setSpriteActive(e.dragMoveSprite, !1);
  }
  prepareMoneyLoverSpritesForPhase1(e) {
    this.showDragSpriteVisual(e.dragSprite), this.setSpriteNodeActive(e.dragMoveSprite, !1), this.logDragPairState("prepareMoneyLoverPhase1", e);
  }
  logDragPairState(e, t) {
    var i, s;
    null == (i = t.dragSprite) || i.node, null == (s = t.dragMoveSprite) || s.node;
  }
  shouldHideDragMoveSpriteInPhase0(e) {
    return this.isDifferentDragNodes(e);
  }
  restoreAllDragItemPairs() {
    var e;
    this.DragItemPair_arr.forEach(e => {
      const t = e.dragMoveSprite ?? e.dragSprite,
        i = null == t ? void 0 : t.node;
      null != i && i.isValid && __rea_outer_D(i), e.spyType !== Ee.MONEY_LOVER ? e.spyType !== Ee.HEIGHT ? (this.setSpriteActive(e.dragSprite, !0), this.shouldHideDragMoveSpriteInPhase0(e) && this.setSpriteActive(e.dragMoveSprite, !1)) : this.prepareHeightSpritesForPhase0(e) : this.prepareMoneyLoverSpritesForPhase0(e);
    }), null != (e = this.ruler_sprite) && null != (e = e.node) && e.isValid && (__rea_outer_D(this.ruler_sprite.node), this.ruler_sprite.node.setPosition(this.rulerSpriteOriginPosition), this.setSpriteActive(this.ruler_sprite, !1));
  }
  startDecorationAnimations() {
    this.animationSprites.forEach((e, t) => {
      if (!__rea_outer_P(e)) return;
      const i = e.node;
      null != i && i.isValid && (__rea_outer_D(i), i.setScale(1, 1, 1), __rea_outer_N.RoseBreath_tag(i, 1, .02, .7, 0, 300 + t));
    });
  }
  stopDecorationAnimations() {
    this.animationSprites.forEach((e, t) => {
      const i = null == e ? void 0 : e.node;
      null != i && i.isValid && (__rea_outer_D(i), __rea_outer_u.stopAllByTag(300 + t), i.setScale(1, 1, 1));
    });
  }
  stopAllLevelSpriteTweens() {
    __rea_outer__(this.animationSprites), __rea_outer__([this.dragCorpseSprite, this.corpseTouch]), this.DragItemPair_arr.forEach(e => {
      __rea_outer__([e.dragSprite, e.dragMoveSprite]);
    });
  }
  registerInteractionHandlers() {
    var e;
    this.DragItemPair_arr.forEach(e => {
      var t;
      const i = null == (t = e.dragSprite) ? void 0 : t.node;
      i ? (console.log(`[Level_6] registerHandlers pairID=${e.ID} spyType=${e.spyType} touchNode=${i.name} active=${i.active}`), i.on(__rea_outer_a.EventType.TOUCH_START, this.onDragTouchStart, this)) : console.log(`[Level_6] registerHandlers skip pairID=${e.ID} spyType=${e.spyType}: no dragSprite`);
    });
    const t = null == (e = this.corpseTouch) ? void 0 : e.node;
    t && t.on(__rea_outer_a.EventType.TOUCH_START, this.onCorpseTouchStart, this), this.node.on(__rea_outer_a.EventType.TOUCH_MOVE, this.onDragTouchMove, this), this.node.on(__rea_outer_a.EventType.TOUCH_END, this.onDragTouchEnd, this), this.node.on(__rea_outer_a.EventType.TOUCH_CANCEL, this.onDragTouchEnd, this);
  }
  unregisterInteractionHandlers() {
    var e;
    this.DragItemPair_arr.forEach(e => {
      var t;
      const i = null == (t = e.dragSprite) ? void 0 : t.node;
      i && i.off(__rea_outer_a.EventType.TOUCH_START, this.onDragTouchStart, this);
    });
    const t = null == (e = this.corpseTouch) ? void 0 : e.node;
    t && t.off(__rea_outer_a.EventType.TOUCH_START, this.onCorpseTouchStart, this), this.node.off(__rea_outer_a.EventType.TOUCH_MOVE, this.onDragTouchMove, this), this.node.off(__rea_outer_a.EventType.TOUCH_END, this.onDragTouchEnd, this), this.node.off(__rea_outer_a.EventType.TOUCH_CANCEL, this.onDragTouchEnd, this), this.resetActiveInteractionState(), this.resetCorpseInteractionState();
  }
  completeDragItemPair(e, t) {
    this.isSpyTypeDone(e.spyType) ? this.handleDragReleaseVisual(e, t ?? null, void 0, !0) : (this.isInteractionLocked = !0, this.showBlockNode(), this.handleDragReleaseVisual(e, t ?? null, () => {
      if (!this.isValid) return;
      this.applySpyTypeEffect(e.spyType), this.markSpyTypeDone(e.spyType), this.unlockIndexs.indexOf(e.ID) < 0 && this.unlockIndexs.push(e.ID);
      const t = this.findConfigByIndex(e.ID);
      t ? (this.playBubbleLine(t.textStrKey, t.soundkey), this.scheduleOnce(() => {
        this.hideBubble();
      }, t.delayTime + 2), this.scheduleOnce(() => {
        [...this.willLeaveItemIndexs].forEach(e => {
          this.playManLeaveAnimation(e);
        }), e.spyType === Ee.HEIGHT && this.setSpriteActive(this.ruler_sprite, !1), __rea_outer_T.playEffect_1("level6_1"), this.scheduleOnce(() => {
          this.isValid && this.resetRemainingMansToNormalState();
        }, 1.5), this.finishRoundInteraction(1.5);
      }, t.delayTime + 2 + 2)) : this.finishRoundInteraction(2.5);
    }, !0));
  }
  playManLeaveAnimation(e) {
    const t = e.node;
    if (null == t || !t.isValid) return;
    const i = this.level_6_mans.indexOf(e);
    __rea_outer_D(t), e.setNormalState(), __rea_outer_S(t).by(1.5, {
      position: new __rea_outer_c(1e3, 0, 0)
    }).call(() => {
      if (!t.isValid) return;
      e.setNormalState(), t.active = !1, i >= 0 && this.leaveItemIndexs.indexOf(i) < 0 && this.leaveItemIndexs.push(i);
      const s = this.willLeaveItemIndexs.indexOf(e);
      s >= 0 && this.willLeaveItemIndexs.splice(s, 1);
    }).start();
  }
  resetRemainingMansToNormalState() {
    this.level_6_mans.forEach((e, t) => {
      var i;
      null != e && e.isValid && null != (i = e.node) && i.isValid && e.node.active && (this.leaveItemIndexs.indexOf(t) >= 0 || this.willLeaveItemIndexs.indexOf(e) >= 0 || e.setNormalState());
    });
  }
  finishRoundInteraction(e) {
    this.scheduleOnce(() => {
      this.isValid && (this.hideBubble(), this.hideBlockNode(), this.isInteractionLocked = !1, this.TryQuickWin() || this.checkPhase1Complete());
    }, e);
  }
  checkPhase1Complete() {
    this.doneItems.length < this.totalitems.length || (this.isInteractionLocked = !0, this.showBlockNode(), this.playBubbleLine(Ce, Ce), this.scheduleOnce(() => {
      this.isValid && (this.hideBubble(), this.enterPhase2());
    }, 2.5));
  }
  applySpyTypeEffect(e) {
    switch (e) {
      case Ee.BLOOD:
        this.onSpyTypeBlood();
        break;
      case Ee.COLOR_BLIND:
        this.onSpyTypeColorBlind();
        break;
      case Ee.SOCKS:
        this.onSpyTypeSocks();
        break;
      case Ee.HEIGHT:
        this.onSpyTypeHeight();
        break;
      case Ee.WEAKNESS:
        this.onSpyTypeWeakness();
        break;
      case Ee.LEFT_HANDED:
        this.onSpyTypeLeftHanded();
        break;
      case Ee.MONEY_LOVER:
        this.onSpyTypeMoneyLover();
        break;
      case Ee.GLOVE:
        this.onSpyTypeGlove();
    }
  }
  onSpyTypeBlood() {
    this.applySpyTypeClueToMans(Ee.BLOOD);
  }
  applySpyTypeClueToMans(e) {
    const t = this.toManClueStateType(e),
      i = Ae[e],
      s = this.getAvailableManIndexes(),
      r = this.pickRandomManIndexes(s, i);
    if (r.length < i) return;
    const o = new Set(r),
      n = this.getLeavingManTraitPresence(e),
      a = n === __rea_outer_E.HAS ? __rea_outer_E.NOT_HAS : __rea_outer_E.HAS;
    r.forEach(e => {
      const i = this.level_6_mans[e];
      i && (this.willLeaveItemIndexs.indexOf(i) < 0 && this.willLeaveItemIndexs.push(i), i.setClueState(t, n));
    }), s.forEach(e => {
      if (o.has(e)) return;
      const i = this.level_6_mans[e];
      i && i.setClueState(t, a);
    });
  }
  getLeavingManTraitPresence(e) {
    return e === Ee.MONEY_LOVER ? __rea_outer_E.HAS : __rea_outer_E.NOT_HAS;
  }
  toManClueStateType(e) {
    switch (e) {
      case Ee.BLOOD:
        return __rea_outer_A.BLOOD;
      case Ee.COLOR_BLIND:
        return __rea_outer_A.COLOR_BLIND;
      case Ee.SOCKS:
        return __rea_outer_A.SOCKS;
      case Ee.HEIGHT:
        return __rea_outer_A.HEIGHT;
      case Ee.WEAKNESS:
        return __rea_outer_A.WEAKNESS;
      case Ee.LEFT_HANDED:
        return __rea_outer_A.LEFT_HANDED;
      case Ee.MONEY_LOVER:
        return __rea_outer_A.MONEY_LOVER;
      case Ee.GLOVE:
        return __rea_outer_A.GLOVE;
      default:
        return __rea_outer_A.NORMAL;
    }
  }
  getAvailableManIndexes() {
    const e = [];
    for (let t = 0; t < this.level_6_mans.length; t += 1) this.leaveItemIndexs.indexOf(t) < 0 && e.push(t);
    return e;
  }
  pickRandomManIndexes(e, t) {
    if (e.length < t) return [];
    const i = [...e],
      s = [];
    for (let e = 0; e < t; e += 1) {
      const e = Math.floor(Math.random() * i.length);
      s.push(i[e]), i.splice(e, 1);
    }
    return s;
  }
  onSpyTypeColorBlind() {
    this.applySpyTypeClueToMans(Ee.COLOR_BLIND);
  }
  onSpyTypeSocks() {
    this.applySpyTypeClueToMans(Ee.SOCKS);
  }
  onSpyTypeHeight() {
    this.applySpyTypeClueToMans(Ee.HEIGHT);
  }
  onSpyTypeWeakness() {
    this.applySpyTypeClueToMans(Ee.WEAKNESS);
  }
  onSpyTypeLeftHanded() {
    this.applySpyTypeClueToMans(Ee.LEFT_HANDED);
  }
  onSpyTypeMoneyLover() {
    this.applySpyTypeClueToMans(Ee.MONEY_LOVER);
  }
  onSpyTypeGlove() {
    this.applySpyTypeClueToMans(Ee.GLOVE);
  }
  canTriggerDragItemPair(e) {
    var t;
    return !this.isSpyTypeDone(e.spyType) && !(this.unlockIndexs.indexOf(e.depentIndex) < 0) && !(null == (t = e.dragSprite) || null == (t = t.node) || !t.active);
  }
  isSpyTypeDone(e) {
    return this.doneItems.indexOf(e) >= 0;
  }
  markSpyTypeDone(e) {
    this.isSpyTypeDone(e) || (this.doneItems.push(e), this.hasInstallNum = this.doneItems.length, __rea_outer_b.getInstance().refreshGameProgress());
  }
  resolveNextHintKey() {
    for (let e = 0; e < this.totalitems.length; e += 1) {
      const t = this.totalitems[e];
      if (this.isSpyTypeDone(t)) continue;
      const i = this.DragItemPair_arr.find(e => e.spyType === t);
      if (i) return this.hint_arr[i.ID] ?? null;
    }
    return null;
  }
  resolveDragItemPairFromNode(e) {
    let t = e;
    for (; t;) {
      const e = this.DragItemPair_arr.filter(e => {
        var i;
        return (null == (i = e.dragSprite) ? void 0 : i.node) === t;
      });
      if (e.length > 0) {
        return e.find(e => this.canTriggerDragItemPair(e)) ?? e[0];
      }
      t = t.parent;
    }
  }
  resolveActiveDragSprite(e) {
    return this.isDifferentDragNodes(e) ? e.dragMoveSprite : e.dragSprite;
  }
  isSwipeSpyType(e) {
    return e === Ee.BLOOD || e === Ee.SOCKS;
  }
  isDragInteractionSuccess(e, t, i) {
    if (!i) return !1;
    const s = t.y - e.startLocation.y;
    return e.spyType === Ee.BLOOD ? s >= 10 : e.spyType !== Ee.SOCKS || s <= -10;
  }
  shouldHideDragMoveSpriteOnRelease(e) {
    return e === Ee.COLOR_BLIND || e === Ee.WEAKNESS || e === Ee.LEFT_HANDED || e === Ee.MONEY_LOVER || e === Ee.GLOVE;
  }
  handleDragReleaseVisual(e, t, i, s = !1) {
    if (e.spyType !== Ee.HEIGHT) {
      if (this.isSwipeSpyType(e.spyType)) return this.ensureSharedSwipeDragSpriteVisible(), void (null == i || i());
      if (this.shouldHideDragMoveSpriteOnRelease(e.spyType)) return t && this.resetDragNodeTransform(t), this.hideDragMoveSpriteOnRelease(e, s), void (null == i || i());
      t && this.resetDragNodeTransform(t), this.restoreDragItemPairVisual(e), null == i || i();
    } else this.flyDragMoveSpriteToRulerOrigin(e, t, i, s);
  }
  hideDragMoveSpriteOnRelease(e, t = !1) {
    var i;
    const s = null == (i = e.dragMoveSprite) ? void 0 : i.node;
    null != s && s.isValid && __rea_outer_D(s), this.setSpriteNodeActive(e.dragMoveSprite, !1), t ? this.setSpriteActive(e.dragSprite, !1) : e.spyType !== Ee.HEIGHT || 1 !== this.phase ? e.spyType !== Ee.MONEY_LOVER || 1 !== this.phase ? this.showDragSpriteVisual(e.dragSprite) : this.prepareMoneyLoverSpritesForPhase1(e) : this.prepareHeightSpritesForPhase1(e);
  }
  flyDragMoveSpriteToRulerOrigin(e, t, i, s = !1) {
    var r, o;
    const n = null == (r = e.dragMoveSprite) ? void 0 : r.node;
    if (null == n || !n.isValid || null == (o = this.ruler_sprite) || null == (o = o.node) || !o.isValid) return s ? this.finalizeHeightCompletedRelease(e) : (t && this.resetDragNodeTransform(t), this.hideDragMoveSpriteOnRelease(e)), void (null == i || i());
    const a = this.resolveRulerSnapLocalPosition(n);
    __rea_outer_D(n), __rea_outer_S(n).to(.3, {
      position: a
    }).call(() => {
      this.isValid && (s ? this.finalizeHeightCompletedRelease(e) : (t && this.resetDragNodeTransform(t), this.hideDragMoveSpriteOnRelease(e)), null == i || i());
    }).start();
  }
  finalizeHeightCompletedRelease(e) {
    var t;
    const i = null == (t = e.dragMoveSprite) ? void 0 : t.node;
    if (null != i && i.isValid) {
      const e = this.resolveRulerSnapLocalPosition(i);
      __rea_outer_D(i), i.setPosition(e);
    }
    this.hideDragSpriteCompletely(e.dragSprite), this.setSpriteActive(e.dragMoveSprite, !1), this.showRulerSpriteAtOrigin();
  }
  showRulerSpriteAtOrigin() {
    var e;
    const t = null == (e = this.ruler_sprite) ? void 0 : e.node;
    null != t && t.isValid && (__rea_outer_D(t), t.setPosition(this.rulerSpriteOriginPosition), this.setSpriteActive(this.ruler_sprite, !0), __rea_outer_O(t, 255));
  }
  hideDragSpriteCompletely(e) {
    var t;
    null != e && null != (t = e.node) && t.isValid && (__rea_outer_D(e.node), __rea_outer_O(e.node, 0), e.node.active = !1);
  }
  resolveRulerSnapLocalPosition(e) {
    const t = this.ruler_sprite.node,
      i = e.parent,
      s = t.parent;
    if (null != i && i.isValid && i === s) return this.rulerSpriteOriginPosition.clone();
    const r = null == s ? void 0 : s.getComponent(__rea_outer_g),
      o = null == i ? void 0 : i.getComponent(__rea_outer_g);
    if (!r || !o) return e.position.clone();
    const n = r.convertToWorldSpaceAR(this.rulerSpriteOriginPosition);
    return o.convertToNodeSpaceAR(n);
  }
  resetDragNodeTransform(e) {
    var t;
    const i = e.activeSprite.node;
    null != i && i.isValid && null != (t = e.originParent) && t.isValid && (i.setParent(e.originParent), i.setPosition(e.originPosition), i.setSiblingIndex(e.originSiblingIndex));
  }
  isDifferentDragNodes(e) {
    return !(!e.dragSprite || !e.dragMoveSprite) && e.dragSprite.node !== e.dragMoveSprite.node;
  }
  restoreDragItemPairVisual(e) {
    e.spyType !== Ee.MONEY_LOVER ? e.spyType !== Ee.HEIGHT ? this.isDifferentDragNodes(e) && (this.showDragSpriteVisual(e.dragSprite), this.setSpriteActive(e.dragMoveSprite, !1)) : this.prepareHeightSpritesForPhase1(e) : 1 === this.phase ? this.prepareMoneyLoverSpritesForPhase1(e) : this.prepareMoneyLoverSpritesForPhase0(e);
  }
  hideDragSpriteVisual(e) {
    const t = null == e ? void 0 : e.node;
    t && (this.setSpriteNodeActive(e, !0), __rea_outer_O(t, 0));
  }
  showDragSpriteVisual(e) {
    const t = null == e ? void 0 : e.node;
    t && (this.setSpriteNodeActive(e, !0), __rea_outer_O(t, 255));
  }
  elevateDragNode(e) {
    const t = e.parent;
    null != t && t.isValid && e.setSiblingIndex(t.children.length - 1);
  }
  updateCorpseSpritePosition(e) {
    var t;
    const i = this.activeCorpseInteractionState;
    if (!i) return;
    const s = null == (t = this.dragCorpseSprite) ? void 0 : t.node;
    if (null == s || !s.isValid) return;
    const r = this.getTouchLocalPosition(e, i.dragParent).x - i.startLocalX;
    if (r < 10) return void s.setPosition(i.originPosition);
    const o = Math.min(r, 80);
    s.setPosition(i.originPosition.x + o, i.originPosition.y, i.originPosition.z);
  }
  finishCorpseInteraction(e) {
    var t;
    const i = this.activeCorpseInteractionState;
    if (!i) return;
    this.activeCorpseInteractionState = null;
    const s = null == (t = this.dragCorpseSprite) ? void 0 : t.node;
    if (null == s || !s.isValid) return;
    this.getTouchLocalPosition(e, i.dragParent).x - i.startLocalX < 10 ? s.setPosition(i.originPosition) : (this.setCorpseSpritePosition(this.getCorpseCompletedPosition()), this.completeCorpseSwipe());
  }
  completeCorpseSwipe() {
    this.isCorpseSwipeCompleted() || (this.unlockIndexs.indexOf(1) < 0 && this.unlockIndexs.push(1), this.setSpriteActive(this.corpseTouch, !1));
  }
  resetCorpseInteractionState() {
    var e;
    if (!this.activeCorpseInteractionState) return;
    const t = this.activeCorpseInteractionState;
    this.activeCorpseInteractionState = null;
    const i = null == (e = this.dragCorpseSprite) ? void 0 : e.node;
    null != i && i.isValid && (__rea_outer_D(i), i.setPosition(t.originPosition));
  }
  resetActiveInteractionState() {
    if (!this.activeInteractionState) return;
    const e = this.activeInteractionState;
    this.activeInteractionState = null;
    const t = e.activeSprite.node;
    null != t && t.isValid && __rea_outer_D(t), this.handleDragReleaseVisual(e.pair, e);
  }
  isPointInsideDragArea(e) {
    var t;
    if (null == (t = this.dragArea) || !t.isValid) return !1;
    const i = this.dragArea.getComponent(__rea_outer_g);
    return !!i && i.getBoundingBoxToWorld().contains(e);
  }
  getTouchLocalPosition(e, t) {
    const i = e.getUILocation();
    return __rea_outer_L(t).convertToNodeSpaceAR(new __rea_outer_c(i.x, i.y, 0));
  }
  calculateTouchOffset(e, t, i) {
    const s = this.getTouchLocalPosition(e, i),
      r = t.position;
    return new __rea_outer_c(r.x - s.x, r.y - s.y, 0);
  }
  setDragNodePositionFromTouch(e, t, i, s) {
    const r = this.getTouchLocalPosition(e, i);
    t.setPosition(r.x + s.x, r.y + s.y, t.position.z);
  }
  getTouchWorldPoint(e) {
    const t = e.getUILocation();
    return new __rea_outer_v(t.x, t.y);
  }
  playBubbleLine(e, t) {
    var i;
    const s = __rea_outer_I.getInstance();
    this.TipLabel && (this.TipLabel.string = s.getKey(e)), this.setNodeActive(this.bubbleNode1, !0), this.setNodeActive((null == (i = this.TipLabel) ? void 0 : i.node) ?? null, !0), __rea_outer_T.playVoice(t);
  }
  hideBubble() {
    var e;
    this.setNodeActive(this.bubbleNode1, !1), this.setNodeActive((null == (e = this.TipLabel) ? void 0 : e.node) ?? null, !1);
  }
  showBlockNode() {
    if (!this.blockNode) return;
    const e = this.blockNode.getComponent(__rea_outer_o);
    e && !__rea_outer_P(e) || (e && (e.color = Ne), __rea_outer_O(this.blockNode, 0), this.blockNode.active = !0);
  }
  hideBlockNode() {
    this.setNodeActive(this.blockNode, !1);
  }
  markAllTasksCompleted() {
    super.markAllTasksCompleted(), this.phase = 2, this.winstate = !0, this.isInteractionLocked = !0, this.doneItems = [...this.totalitems], this.unregisterInteractionHandlers(), this.stopDecorationAnimations(), this.setNodeActive(this.bubbleNode1, !1), this.setNodeActive(this.SceneNode0, !1), this.setNodeActive(this.SceneNode2, !0);
  }
  findConfigByIndex(e) {
    return this.config_arr.find(t => t.ID === e);
  }
  setSpriteActive(e, t) {
    null != e && e.node && (!t || __rea_outer_P(e) ? e.node.active = t : e.node.active = !1);
  }
  setSpriteNodeActive(e, t) {
    null != e && e.node && (e.node.active = t);
  }
  setNodeActive(e, t) {
    e && (e.active = t);
  }
}).prototype, "bubbleNode1", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), he = __rea_outer_t(le.prototype, "TipLabel", [W], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ce = __rea_outer_t(le.prototype, "animationSprites", [U], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), de = __rea_outer_t(le.prototype, "level_6_mans", [Y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), ue = __rea_outer_t(le.prototype, "level6ManPrefab", [X], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Se = __rea_outer_t(le.prototype, "mansContainer", [j], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ge = __rea_outer_t(le.prototype, "DragItemPair_arr", [J], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), ve = __rea_outer_t(le.prototype, "dragArea", [Q], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ye = __rea_outer_t(le.prototype, "dragCorpseSprite", [Z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Te = __rea_outer_t(le.prototype, "corpseTouch", [q], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Ie = __rea_outer_t(le.prototype, "ruler_sprite", [ee], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), fe = __rea_outer_t(le.prototype, "hand_gripper_sprite", [te], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), me = __rea_outer_t(le.prototype, "money_sprite", [ie], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), De = __rea_outer_t(le.prototype, "money_Touch", [se], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Pe = __rea_outer_t(le.prototype, "blockNode", [re], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), _e = __rea_outer_t(le.prototype, "SceneNode0", [oe], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Oe = __rea_outer_t(le.prototype, "SceneNode2", [ne], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ae = le)) || ae);
__rea_outer_s._RF.pop();
export { __recovered_export_0 as SpyType, __recovered_export_1 as default };
