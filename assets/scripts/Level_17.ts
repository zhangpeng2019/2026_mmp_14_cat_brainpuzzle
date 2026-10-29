// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_17.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { applyDecoratedDescriptor as __rea_outer_t } from "./rollupPluginModLoBabelHelpers";
import { initializerDefineProperty as __rea_outer_i } from "./rollupPluginModLoBabelHelpers";
import { cclegacy as __rea_outer_r } from "cc";
import { Sprite as __rea_outer_s } from "cc";
import { Node as __rea_outer_l } from "cc";
import { Enum as __rea_outer_n } from "cc";
import { Texture2D as __rea_outer_o } from "cc";
import { Label as __rea_outer_a } from "cc";
import { _decorator as __rea_outer_h } from "cc";
import { UITransform as __rea_outer_u } from "cc";
import { Tween as __rea_outer_c } from "cc";
import { tween as __rea_outer_p } from "cc";
import { Vec3 as __rea_outer_d } from "cc";
import { Vec2 as __rea_outer_g } from "cc";
import { default as __rea_outer_y } from "./LevelBase";
import { default as __rea_outer_S } from "./clue-hit-tester";
import { default as __rea_outer__ } from "./AudioManager";
import { I18nController as __rea_outer_b } from "./i18n-controller";
import { UIManager as __rea_outer_v } from "./ui-manager";
import { UILayer as __rea_outer_f } from "./ui-layer";
import { UIFail as __rea_outer_T } from "./uifail";
import { UIHint as __rea_outer_m } from "./uihint";
import { stopAllTweens as __rea_outer_C } from "./CocosCompat";
import { stopSpritesTweens as __rea_outer_N } from "./CocosCompat";
import { isSpriteRenderable as __rea_outer_k } from "./CocosCompat";
import { GameController as __rea_outer_I } from "./GameController";
let __recovered_export_0, __recovered_export_1;
var A, w, D, P, L, V, z, x, F, E, B, O, R, G, M, W, H, U, K, Z, $, X, j, q, Q, Y, J, ee, te, ie, re, se, le, ne, oe, ae, he, ue, ce, pe, de, ge, ye, Se, _e, be, ve, fe, Te, me, Ce, Ne, ke, Ie, Ae, we, De, Pe, Le, Ve, ze, xe, Fe, Ee, Be, Oe, Re, Ge, Me, We, He, Ue, Ke, Ze, $e, Xe, je, qe, Qe, Ye, Je, et, tt, it, rt, st, lt, nt, ot, at, ht;
__rea_outer_r._RF.push({}, "fc7c3KYPuxDwacgS0qWECdE", "Level_17", void 0);
const {
    ccclass: ut,
    property: ct
  } = __rea_outer_h,
  pt = ["17_2", "17_3", "17_4", "17_5", "17_6", "17_7", "17_8", "17_9"],
  dt = 1080,
  gt = [1, 1 / 256, 1 / 1024, 1 / 2048],
  yt = 3420;
let St = __recovered_export_0 = function (e) {
  return e[e.ClueType_1 = 0] = "ClueType_1", e[e.ClueType_2 = 1] = "ClueType_2", e[e.ClueType_3 = 2] = "ClueType_3", e[e.ClueType_4 = 3] = "ClueType_4", e[e.ClueType_5 = 4] = "ClueType_5", e[e.ClueType_6 = 5] = "ClueType_6", e[e.ClueType_7 = 6] = "ClueType_7", e[e.ClueType_8 = 7] = "ClueType_8", e;
}({});
const _t = {
    [St.ClueType_2]: "level17_2",
    [St.ClueType_3]: "level17_3",
    [St.ClueType_5]: "level17_4",
    [St.ClueType_6]: "level17_5",
    [St.ClueType_8]: "level17_6"
  },
  bt = [St.ClueType_4, St.ClueType_5, St.ClueType_8],
  vt = [St.ClueType_4],
  ft = [St.ClueType_5, St.ClueType_8];
let Tt = (A = ut("Level17_DragItemPair"), w = ct(__rea_outer_s), D = ct(__rea_outer_s), P = ct(__rea_outer_l), L = ct({
    type: __rea_outer_n(St),
    tooltip: "线索类型"
  }), A((x = __rea_outer_t((z = class {
    constructor() {
      __rea_outer_i(this, "ID", x, this), __rea_outer_i(this, "dragSprite", F, this), __rea_outer_i(this, "dragMoveSprite", E, this), __rea_outer_i(this, "triggerNode", B, this), __rea_outer_i(this, "clueType", O, this);
    }
  }).prototype, "ID", [ct], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: function () {
      return 0;
    }
  }), F = __rea_outer_t(z.prototype, "dragSprite", [w], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: function () {
      return null;
    }
  }), E = __rea_outer_t(z.prototype, "dragMoveSprite", [D], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: function () {
      return null;
    }
  }), B = __rea_outer_t(z.prototype, "triggerNode", [P], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: function () {
      return null;
    }
  }), O = __rea_outer_t(z.prototype, "clueType", [L], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: function () {
      return St.ClueType_1;
    }
  }), V = z)) || V),
  mt = (R = ut("Level17_ClickItemPair"), G = ct(__rea_outer_s), M = ct(__rea_outer_o), W = ct(__rea_outer_s), H = ct({
    type: __rea_outer_n(St),
    tooltip: "线索类型"
  }), R((Z = __rea_outer_t((K = class {
    constructor() {
      __rea_outer_i(this, "ID", Z, this), __rea_outer_i(this, "clickSprite", $, this), __rea_outer_i(this, "targetTexture", X, this), __rea_outer_i(this, "targetSprite", j, this), __rea_outer_i(this, "clueType", q, this);
    }
  }).prototype, "ID", [ct], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: function () {
      return 0;
    }
  }), $ = __rea_outer_t(K.prototype, "clickSprite", [G], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: function () {
      return null;
    }
  }), X = __rea_outer_t(K.prototype, "targetTexture", [M], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: function () {
      return null;
    }
  }), j = __rea_outer_t(K.prototype, "targetSprite", [W], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: function () {
      return null;
    }
  }), q = __rea_outer_t(K.prototype, "clueType", [H], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: function () {
      return St.ClueType_1;
    }
  }), U = K)) || U);
__recovered_export_1 = (Q = ut("Level_17"), Y = ct(__rea_outer_l), J = ct(__rea_outer_a), ee = ct(__rea_outer_l), te = ct(__rea_outer_l), ie = ct({
  type: [mt]
}), re = ct({
  type: [Tt]
}), se = ct({
  type: [Tt]
}), le = ct(__rea_outer_l), ne = ct(__rea_outer_s), oe = ct(__rea_outer_s), ae = ct(__rea_outer_s), he = ct(__rea_outer_s), ue = ct(__rea_outer_s), ce = ct(__rea_outer_s), pe = ct(__rea_outer_s), de = ct(__rea_outer_s), ge = ct(__rea_outer_s), ye = ct(__rea_outer_s), Se = ct(__rea_outer_s), _e = ct(__rea_outer_s), be = ct(__rea_outer_s), ve = ct(__rea_outer_s), fe = ct(__rea_outer_l), Te = ct(__rea_outer_l), me = ct(__rea_outer_l), Ce = ct(__rea_outer_l), Ne = ct(__rea_outer_l), ke = ct(__rea_outer_l), Ie = ct(__rea_outer_l), Ae = ct(__rea_outer_s), we = ct(__rea_outer_s), De = ct(__rea_outer_s), Q((Ve = __rea_outer_t((Le = class extends __rea_outer_y {
  constructor(...e) {
    super(...e), __rea_outer_i(this, "bubbleNode1", Ve, this), __rea_outer_i(this, "TipLabel", ze, this), __rea_outer_i(this, "boyLabelNode", xe, this), __rea_outer_i(this, "girlLabelNode", Fe, this), __rea_outer_i(this, "clickItemPair_ar", Ee, this), __rea_outer_i(this, "DragItemPair_arr", Be, this), __rea_outer_i(this, "SwipeItemPair_arr", Oe, this), __rea_outer_i(this, "sceneNode", Re, this), __rea_outer_i(this, "fireSprite_1", Ge, this), __rea_outer_i(this, "fireSprite_2", Me, this), __rea_outer_i(this, "whell_1_1", We, this), __rea_outer_i(this, "whell_1_2", He, this), __rea_outer_i(this, "whell_2_1", Ue, this), __rea_outer_i(this, "whell_2_2", Ke, this), __rea_outer_i(this, "umbrellaSprite_0", Ze, this), __rea_outer_i(this, "umbrellaSprite_1", $e, this), __rea_outer_i(this, "umbrellaSprite_2", Xe, this), __rea_outer_i(this, "dabianSprite", je, this), __rea_outer_i(this, "girl_legt_1", qe, this), __rea_outer_i(this, "girl_legt_2", Qe, this), __rea_outer_i(this, "girl_fire_1", Ye, this), __rea_outer_i(this, "girl_fire_2", Je, this), __rea_outer_i(this, "normaltireNode", et, this), __rea_outer_i(this, "endtireNode", tt, this), __rea_outer_i(this, "packageNode1", it, this), __rea_outer_i(this, "packageNode2", rt, this), __rea_outer_i(this, "girlNode", st, this), __rea_outer_i(this, "glueNode", lt, this), __rea_outer_i(this, "birdDabianNode", nt, this), __rea_outer_i(this, "animationSprites", ot, this), __rea_outer_i(this, "bgSprite", at, this), __rea_outer_i(this, "blockSprite", ht, this), this.phase = 0, this.winstate = !1, this.speedScale = 1, this.lockIndexs = [], this.totalitems = [], this.doneItems = [], this.hint_arr = ["level17_hint1", "level17_hint2", "level17_hint3", "level17_hint4", "level17_hint5", "level17_hint6", "level17_hint7", "level17_hint8"], this.config_arr = [{
      ID: 0,
      soundkey: "17_1",
      showtype: 1,
      textStrKey: "17_1"
    }, {
      ID: 1,
      soundkey: "17_2",
      showtype: 1,
      textStrKey: "17_2"
    }, {
      ID: 2,
      soundkey: "17_3",
      showtype: 2,
      textStrKey: "17_3"
    }, {
      ID: 3,
      soundkey: "17_4",
      showtype: 2,
      textStrKey: "17_4"
    }, {
      ID: 4,
      soundkey: "17_5",
      showtype: 1,
      textStrKey: "17_5"
    }, {
      ID: 5,
      soundkey: "17_6",
      showtype: 2,
      textStrKey: "17_6"
    }, {
      ID: 6,
      soundkey: "17_7",
      showtype: 1,
      textStrKey: "17_7"
    }, {
      ID: 7,
      soundkey: "17_8",
      showtype: 2,
      textStrKey: "17_8"
    }, {
      ID: 8,
      soundkey: "17_9",
      showtype: 2,
      textStrKey: "17_9"
    }, {
      ID: 9,
      soundkey: "17_10",
      showtype: 2,
      textStrKey: "17_10"
    }], this.isInteractionLocked = !1, this.isFireSpritePrimaryVisible = !0, this.isGirlFirePrimaryVisible = !0, this.activeDragState = null, this.activeClickPair = null, this.bgScrollStates = [], this.manNpcNode = null, this.girlNpcRootNode = null, this.toggleFireSprites = () => {
      !this.isValid || this.phase >= 2 || (this.isFireSpritePrimaryVisible = !this.isFireSpritePrimaryVisible, this.setSpriteNodeActive(this.fireSprite_1, this.isFireSpritePrimaryVisible), this.setSpriteNodeActive(this.fireSprite_2, !this.isFireSpritePrimaryVisible));
    }, this.toggleGirlFireSprites = () => {
      !this.isValid || this.phase >= 2 || (this.isGirlFirePrimaryVisible = !this.isGirlFirePrimaryVisible, this.setSpriteNodeActive(this.girl_fire_1, this.isGirlFirePrimaryVisible), this.setSpriteNodeActive(this.girl_fire_2, !this.isGirlFirePrimaryVisible));
    }, this.onLevelTouchStart = e => {
      if (1 !== this.phase || this.isInteractionLocked) return;
      const t = this.getTouchWorldPoint(e),
        i = this.findDragPairAtPoint(t);
      if (i && this.canInteractClueType(i.clueType)) return void this.beginDragInteraction(i, e);
      const r = this.findClickPairAtPoint(t);
      r && this.canInteractClueType(r.clueType) && (this.activeClickPair = r);
    }, this.onLevelTouchMove = e => {
      if (1 !== this.phase || this.isInteractionLocked || !this.activeDragState) return;
      const t = this.activeDragState;
      this.setDragNodePositionFromTouch(e, t.activeSprite.node, t.dragParent, t.touchOffset);
    }, this.onLevelTouchEnd = e => {
      if (1 !== this.phase || this.isInteractionLocked) this.resetTouchSession();else if (this.activeDragState) this.finishDragInteraction(e);else if (this.activeClickPair) {
        const t = this.activeClickPair;
        this.activeClickPair = null;
        const i = this.getTouchWorldPoint(e),
          r = t.clickSprite;
        r && this.isPointInsideSprite(r, i) && this.handleClickClue(t.clueType, t);
      } else ;
    }, this.onLevelTouchCancel = () => {
      this.resetTouchSession();
    }, this.onDialogueDisplayTimeout = () => {
      this.hideDialogueBubble();
    };
  }
  onLoad() {
    super.onLoad(), this.resolveTipLabelReference(), this.resolveNpcCharacterNodes(), this.initializeTotalItems(), this.allItemNum = this.totalitems.length, this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.enterPhase0();
  }
  onDestroy() {
    this.unscheduleAllCallbacks(), this.unregisterInteractionHandlers(), this.stopPhase0Animations(), this.stopAllLevelTweens(), this.cleanupLevelRenderState(), __rea_outer__.stopVoice(), this.activeDragState = null, this.activeClickPair = null;
  }
  update(e) {
    if (this.phase >= 2 || 0 === this.bgScrollStates.length) return;
    this.bgScrollStates.forEach((t, i) => {
      const r = t.sprite.node;
      if (null == r || !r.isValid) return;
      const s = this.getBgScrollSpeed(i),
        l = r.position.x - s * e;
      l + .5 * t.wrapWidth < -580 ? r.setPosition(t.originX + dt, r.position.y, r.position.z) : r.setPosition(l, r.position.y, r.position.z);
    });
  }
  showHint() {
    if (1 !== this.phase) return;
    const e = this.resolveNextHintKey();
    if (!e) return;
    const t = __rea_outer_b.getInstance().getKey(e);
    __rea_outer_v.getInstance().showView(__rea_outer_m, void 0, {
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
  handleTimeExpired() {
    return !!(this.phase >= 2 || this.winstate);
  }
  markAllTasksCompleted() {
    super.markAllTasksCompleted(), this.phase = 2, this.winstate = !0, this.doneItems = [...this.totalitems], this.speedScale = 0, this.isInteractionLocked = !0, this.unregisterInteractionHandlers(), this.stopPhase0Animations();
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.speedScale = 1, this.doneItems = [], this.lockIndexs = [...bt], this.isInteractionLocked = !1, this.isFireSpritePrimaryVisible = !0, this.isGirlFirePrimaryVisible = !0, this.activeDragState = null, this.activeClickPair = null, this.hasInstallNum = 0, this.initializeTotalItems(), this.initializeBgScrollStates(), this.hideDialogueBubble(), __rea_outer__.stopVoice(), this.prepareSpritesForPhase0();
  }
  initializeTotalItems() {
    this.totalitems = [St.ClueType_1, St.ClueType_2, St.ClueType_3, St.ClueType_4, St.ClueType_5, St.ClueType_6, St.ClueType_7, St.ClueType_8];
  }
  initializeBgScrollStates() {
    this.bgScrollStates = this.bgSprite.filter(e => {
      var t;
      return null == e || null == (t = e.node) ? void 0 : t.isValid;
    }).map(e => {
      const t = e.node.getComponent(__rea_outer_u);
      return {
        sprite: e,
        wrapWidth: (null == t ? void 0 : t.width) ?? dt,
        originX: e.node.position.x
      };
    });
  }
  enterPhase0() {
    var e;
    this.phase = 0, __rea_outer__.playMusic("bgm3", !0, .5), this.setNodeActive(this.sceneNode, !1), this.setNpcCharactersVisible(!0), this.setNodeActive((null == (e = this.blockSprite) ? void 0 : e.node) ?? null, !0), this.startPhase0Animations(), this.playDialogueLine("17_1"), this.scheduleOnce(() => {
      var e;
      this.isValid && 0 === this.phase && (this.setNodeActive((null == (e = this.blockSprite) ? void 0 : e.node) ?? null, !1), this.enterPhase1());
    }, 2.5);
  }
  skipOpeningToPlay() {
    var e;
    return 0 === this.phase && (this.stopOpeningDialogue(), this.hideDialogueBubble(), this.setNodeActive((null == (e = this.blockSprite) ? void 0 : e.node) ?? null, !1), this.enterPhase1(), !0);
  }
  enterPhase1() {
    0 === this.phase && (this.phase = 1, this.refreshLockedClueInteractables(), this.registerInteractionHandlers(), __rea_outer_I.getInstance().refreshGameProgress());
  }
  enterWinFinale() {
    this.phase >= 2 || (this.phase = 2, this.winstate = !0, this.speedScale = 0, this.isInteractionLocked = !0, this.unregisterInteractionHandlers(), this.stopPhase0Animations(), this.stopGirlFireBlink(), this.cleanupGameplaySprites(), this.setNpcCharactersVisible(!1), this.setNodeActive(this.sceneNode, !0), __rea_outer_I.getInstance().pauseTimer(), this.playDialogueLine("17_10"), this.unschedule(this.onDialogueDisplayTimeout), this.scheduleOnce(() => {
      this.isValid && (this.hideDialogueBubble(), this.showLevelSuccess(1.5));
    }, 2));
  }
  enterPhase2(e = !0) {
    this.phase >= 2 || (e ? this.enterWinFinale() : (this.phase = 2, this.winstate = !1, this.hideDialogueBubble(), this.cleanupLevelRenderState(), this.preparePhase2TireDisplay(), this.preparePhase2CharacterDisplay(), this.unregisterInteractionHandlers(), this.stopPhase0Animations(), this.stopGirlFireBlink(), __rea_outer_I.getInstance().pauseTimer(), this.scheduleOnce(() => {
      this.isValid && __rea_outer_v.getInstance().showView(__rea_outer_T, __rea_outer_f.WIN_ANIMATION);
    }, 2)));
  }
  preparePhase2TireDisplay() {
    const e = this.isClueTypeDone(St.ClueType_8);
    this.setNodeActive(this.normaltireNode, !e), this.setNodeActive(this.endtireNode, e), this.setSpriteNodeActive(this.whell_1_1, !e), this.setSpriteNodeActive(this.whell_1_2, !e), this.setSpriteNodeActive(this.whell_2_1, e), this.setSpriteNodeActive(this.whell_2_2, e);
  }
  preparePhase2CharacterDisplay() {
    const e = this.isClueTypeDone(St.ClueType_2);
    this.setSpriteNodeActive(this.girl_legt_1, !e), this.setSpriteNodeActive(this.girl_legt_2, e), this.setSpriteNodeActive(this.girl_fire_1, !1), this.setSpriteNodeActive(this.girl_fire_2, !1);
  }
  isPersistentGameplaySprite(e) {
    return !!e && (e === this.girl_legt_1 || e === this.girl_legt_2 || e === this.girl_fire_1 || e === this.girl_fire_2 || e === this.whell_1_1 || e === this.whell_1_2 || e === this.whell_2_1 || e === this.whell_2_2);
  }
  prepareSpritesForPhase0() {
    this.setNodeActive(this.endtireNode, !1), this.setNodeActive(this.normaltireNode, !0), this.setSpriteNodeActive(this.umbrellaSprite_0, !0), this.setUmbrellaTriggerZoneActive(!0), this.setSpriteNodeActive(this.umbrellaSprite_2, !1), this.setSpriteNodeActive(this.dabianSprite, !1), this.setNodeActive(this.birdDabianNode, !1), this.setNodeActive(this.glueNode, !1), this.setSpriteNodeActive(this.girl_legt_2, !1), this.setSpriteNodeActive(this.girl_legt_1, !0), this.setSpriteNodeActive(this.girl_fire_1, !1), this.setSpriteNodeActive(this.girl_fire_2, !1), this.setNodeActive(this.packageNode1, !0), this.setNodeActive(this.packageNode2, !1), this.DragItemPair_arr.forEach(e => {
      this.setSpriteNodeActive(e.dragMoveSprite, !1), this.setSpriteNodeActive(e.dragSprite, !0), e.clueType === St.ClueType_7 && this.setNodeActive(e.triggerNode, !1);
    }), this.clickItemPair_ar.forEach(e => {
      this.setSpriteNodeActive(e.targetSprite, !1), this.setSpriteNodeActive(e.clickSprite, !0);
    }), this.refreshLockedClueInteractables();
  }
  startPhase0Animations() {
    this.startFireBlink(), this.startWheelRotation();
  }
  stopPhase0Animations() {
    this.unschedule(this.toggleFireSprites), this.stopGirlFireBlink(), [this.whell_1_1, this.whell_1_2, this.whell_2_1, this.whell_2_2].forEach((e, t) => {
      var i;
      null != e && null != (i = e.node) && i.isValid && (__rea_outer_C(e.node), __rea_outer_c.stopAllByTag(yt + t));
    });
  }
  startFireBlink() {
    this.isFireSpritePrimaryVisible = !0, this.setSpriteNodeActive(this.fireSprite_1, !0), this.setSpriteNodeActive(this.fireSprite_2, !1), this.schedule(this.toggleFireSprites, .1);
  }
  startGirlFireBlink() {
    this.isGirlFirePrimaryVisible = !0, this.setSpriteNodeActive(this.girl_fire_1, !0), this.setSpriteNodeActive(this.girl_fire_2, !1), this.schedule(this.toggleGirlFireSprites, .1);
  }
  stopGirlFireBlink() {
    this.unschedule(this.toggleGirlFireSprites);
  }
  startWheelRotation() {
    const e = this.getWheelRotationDuration(),
      t = [this.whell_1_1, this.whell_1_2];
    this.isClueTypeDone(St.ClueType_8) && t.push(this.whell_2_1, this.whell_2_2), t.forEach((t, i) => {
      this.startSingleWheelRotation(t, i, e);
    });
  }
  startSingleWheelRotation(e, t, i) {
    const r = null == e ? void 0 : e.node;
    null != r && r.isValid && (__rea_outer_C(r), __rea_outer_c.stopAllByTag(yt + t), __rea_outer_p(r).tag(yt + t).by(i, {
      angle: -360
    }).union().repeatForever().start());
  }
  getWheelRotationDuration() {
    return .6 / Math.max(this.speedScale, .05);
  }
  getBgScrollSpeed(e) {
    return 2048 * (gt[e] ?? 0) * this.speedScale;
  }
  updateSpeedScale() {
    const e = this.totalitems.length,
      t = e > 0 ? this.doneItems.length / e : 0;
    this.speedScale = 1 - t, this.startWheelRotation(), __rea_outer_I.getInstance().refreshGameProgress();
  }
  registerInteractionHandlers() {
    this.node.on(__rea_outer_l.EventType.TOUCH_START, this.onLevelTouchStart, this), this.node.on(__rea_outer_l.EventType.TOUCH_MOVE, this.onLevelTouchMove, this), this.node.on(__rea_outer_l.EventType.TOUCH_END, this.onLevelTouchEnd, this), this.node.on(__rea_outer_l.EventType.TOUCH_CANCEL, this.onLevelTouchCancel, this);
  }
  unregisterInteractionHandlers() {
    var e;
    null != (e = this.node) && e.isValid && (this.node.off(__rea_outer_l.EventType.TOUCH_START, this.onLevelTouchStart, this), this.node.off(__rea_outer_l.EventType.TOUCH_MOVE, this.onLevelTouchMove, this), this.node.off(__rea_outer_l.EventType.TOUCH_END, this.onLevelTouchEnd, this), this.node.off(__rea_outer_l.EventType.TOUCH_CANCEL, this.onLevelTouchCancel, this), this.resetDragState(!1), this.activeClickPair = null);
  }
  resetTouchSession() {
    this.resetDragState(!0), this.activeClickPair = null;
  }
  beginDragInteraction(e, t) {
    var i, r;
    const s = e.dragSprite,
      l = e.dragMoveSprite;
    if (null == s || null == (i = s.node) || !i.isValid || null == l || null == (r = l.node) || !r.isValid) return;
    const n = l.node,
      o = n.parent;
    if (null == o || !o.isValid) return;
    const a = s.node.worldPosition.clone();
    this.setSpriteNodeActive(s, !1), this.setSpriteNodeActive(l, !0), e.clueType === St.ClueType_3 && this.setSpriteNodeActive(this.umbrellaSprite_0, !1), n.setWorldPosition(a);
    const h = this.calculateTouchOffset(t, n, o);
    this.setDragNodePositionFromTouch(t, n, o, h), this.activeDragState = {
      pair: e,
      activeSprite: l,
      dragParent: o,
      originPosition: n.position.clone(),
      touchOffset: h
    };
  }
  finishDragInteraction(e) {
    const t = this.activeDragState;
    if (!t) return;
    const i = this.getTouchWorldPoint(e);
    if (this.isDragReleaseInValidArea(t.pair, i)) return this.activeDragState = null, void this.handleDragClue(t.pair.clueType, t.pair);
    this.resetDragState(!0);
  }
  resetDragState(e) {
    if (!this.activeDragState) return;
    const t = this.activeDragState,
      i = t.pair;
    if (e) {
      const e = t.activeSprite.node;
      null != e && e.isValid && (__rea_outer_C(e), e.setPosition(t.originPosition)), this.setSpriteNodeActive(i.dragMoveSprite, !1), this.setSpriteNodeActive(i.dragSprite, !0), i.clueType === St.ClueType_3 && this.setSpriteNodeActive(this.umbrellaSprite_0, !0);
    }
    this.activeDragState = null;
  }
  handleClickClue(e, t) {
    if (this.canInteractClueType(e)) switch (e) {
      case St.ClueType_1:
        this.executeClueType1Click(t);
        break;
      case St.ClueType_2:
        this.executeClueType2Click();
        break;
      case St.ClueType_4:
        this.executeClueType4Click();
        break;
      case St.ClueType_6:
        this.executeClueType6Click(t);
    }
  }
  handleDragClue(e, t) {
    if (this.canInteractClueType(e)) switch (e) {
      case St.ClueType_3:
        this.executeClueType3Drag(t);
        break;
      case St.ClueType_5:
        this.executeClueType5Drag(t);
        break;
      case St.ClueType_7:
        this.executeClueType7Drag(t);
        break;
      case St.ClueType_8:
        this.executeClueType8Drag(t);
        break;
      default:
        this.restoreDragPairVisual(t);
    } else this.restoreDragPairVisual(t);
  }
  executeClueType1Click(e) {
    const t = e.clickSprite,
      i = e.targetSprite,
      r = null == t ? void 0 : t.node,
      s = null == i ? void 0 : i.node;
    null != r && r.isValid && null != s && s.isValid && (this.isInteractionLocked = !0, this.flyNodeToTargetNode(r, s, .4, () => {
      this.isValid && (this.setSpriteNodeActive(t, !1), this.setSpriteNodeActive(i, !0), this.stopFireBlink(), this.finalizeClue(St.ClueType_1));
    }));
  }
  executeClueType2Click() {
    this.setSpriteNodeActive(this.girl_legt_1, !1), this.setSpriteNodeActive(this.girl_legt_2, !0), this.startGirlFireBlink(), this.finalizeClue(St.ClueType_2);
  }
  executeClueType4Click() {
    this.setNodeActive(this.packageNode1, !1), this.setNodeActive(this.packageNode2, !0), this.unlockClueTypes(ft), this.finalizeClue(St.ClueType_4);
  }
  executeClueType6Click(e) {
    const t = e.clickSprite,
      i = e.targetSprite,
      r = null == t ? void 0 : t.node,
      s = null == i ? void 0 : i.node,
      l = this.birdDabianNode;
    null != r && r.isValid && null != s && s.isValid && null != l && l.isValid && (this.isInteractionLocked = !0, this.setSpriteNodeActive(i, !0), this.flyNodeToTargetNode(s, l, .4, () => {
      this.isValid && (this.setSpriteNodeActive(i, !1), this.setNodeActive(l, !0), this.isInteractionLocked = !1, this.finalizeClue(St.ClueType_6));
    }));
  }
  executeClueType3Drag(e) {
    this.setSpriteNodeActive(e.dragMoveSprite, !1), this.setSpriteNodeActive(e.dragSprite, !1), this.isInteractionLocked = !0, this.setUmbrellaTriggerZoneVisible(!0), this.scheduleOnce(() => {
      this.isValid && (this.setUmbrellaTriggerZoneActive(!1), this.setSpriteNodeActive(this.umbrellaSprite_2, !0), this.unlockClueTypes(vt), this.isInteractionLocked = !1, this.finalizeClue(St.ClueType_3));
    }, 1);
  }
  executeClueType5Drag(e) {
    this.setSpriteNodeActive(e.dragMoveSprite, !1), this.setSpriteNodeActive(e.dragSprite, !1), this.setNodeActive(this.glueNode, !0), this.finalizeClue(St.ClueType_5);
  }
  executeClueType7Drag(e) {
    this.setSpriteNodeActive(e.dragMoveSprite, !1), this.setSpriteNodeActive(e.dragSprite, !1), this.setNodeActive(e.triggerNode, !0), this.finalizeClue(St.ClueType_7);
  }
  executeClueType8Drag(e) {
    this.setSpriteNodeActive(e.dragMoveSprite, !1), this.setSpriteNodeActive(e.dragSprite, !1), this.setNodeActive(this.normaltireNode, !1), this.setNodeActive(this.endtireNode, !0), this.startWheelRotation(), this.finalizeClue(St.ClueType_8);
  }
  finalizeClue(e) {
    this.isInteractionLocked = !1, this.playClueItemEffect(e), this.playClueVoice(e), this.markClueTypeDone(e), this.updateSpeedScale(), this.TryQuickWin() || this.checkPhase1Complete();
  }
  playClueItemEffect(e) {
    const t = _t[e];
    t && __rea_outer__.playEffect_1(t);
  }
  stopFireBlink() {
    this.unschedule(this.toggleFireSprites), this.setSpriteNodeActive(this.fireSprite_1, !1), this.setSpriteNodeActive(this.fireSprite_2, !1);
  }
  isDragReleaseInValidArea(e, t) {
    var i, r;
    const s = (null == (i = e.dragMoveSprite) ? void 0 : i.node) ?? (null == (r = e.dragSprite) ? void 0 : r.node) ?? null;
    var l;
    return e.clueType === St.ClueType_3 ? __rea_outer_S.isDragNearTarget(s, (null == (l = this.umbrellaSprite_1) ? void 0 : l.node) ?? null) : __rea_outer_S.isDragNearTarget(s, e.triggerNode);
  }
  flyNodeToTargetNode(e, t, i, r) {
    const s = e.parent;
    if (null == s || !s.isValid) return void r();
    const l = t.worldPosition.clone(),
      n = s.getComponent(__rea_outer_u),
      o = n ? n.convertToNodeSpaceAR(l) : new __rea_outer_d(l.x, l.y, l.z);
    __rea_outer_C(e), __rea_outer_p(e).to(i, {
      position: o
    }).call(() => {
      this.isValid && r();
    }).start();
  }
  restoreDragPairVisual(e) {
    this.setSpriteNodeActive(e.dragMoveSprite, !1), this.setSpriteNodeActive(e.dragSprite, !0);
  }
  playClueVoice(e) {
    const t = pt[e];
    t && this.playDialogueLine(t);
  }
  resolveTipLabelReference() {
    if (this.TipLabel) return;
    const e = this.bubbleNode1;
    null != e && e.isValid && (this.TipLabel = e.getComponentInChildren(__rea_outer_a));
  }
  findConfigBySoundKey(e) {
    return this.config_arr.find(t => t.soundkey === e);
  }
  playDialogueLine(e) {
    const t = this.findConfigBySoundKey(e);
    if (!t) return void __rea_outer__.playVoice(e);
    this.resolveTipLabelReference(), this.unschedule(this.onDialogueDisplayTimeout);
    const i = __rea_outer_b.getInstance();
    this.TipLabel && (this.TipLabel.string = i.getKey(t.textStrKey), this.setNodeActive(this.TipLabel.node, !0)), this.setSpeakerLabelVisible(t.showtype), this.setNodeActive(this.bubbleNode1, !0), __rea_outer__.playVoice(t.soundkey), this.scheduleOnce(this.onDialogueDisplayTimeout, 1.5);
  }
  setSpeakerLabelVisible(e) {
    const t = 1 === e;
    this.setNodeActive(this.boyLabelNode, t), this.setNodeActive(this.girlLabelNode, !t);
  }
  hideDialogueBubble() {
    var e;
    this.unschedule(this.onDialogueDisplayTimeout), this.setNodeActive(this.bubbleNode1, !1), this.setNodeActive((null == (e = this.TipLabel) ? void 0 : e.node) ?? null, !1), this.setNodeActive(this.boyLabelNode, !1), this.setNodeActive(this.girlLabelNode, !1);
  }
  checkPhase1Complete() {
    this.doneItems.length < this.totalitems.length || (this.isInteractionLocked = !0, this.unregisterInteractionHandlers(), __rea_outer_I.getInstance().pauseTimer(), this.scheduleOnce(() => {
      this.isValid && this.enterWinFinale();
    }, 2));
  }
  canInteractClueType(e) {
    return !this.isClueTypeDone(e) && !this.isClueTypeLocked(e);
  }
  isClueTypeDone(e) {
    return this.doneItems.indexOf(e) >= 0;
  }
  isClueTypeLocked(e) {
    return this.lockIndexs.indexOf(e) >= 0;
  }
  unlockClueType(e) {
    const t = this.lockIndexs.indexOf(e);
    t >= 0 && this.lockIndexs.splice(t, 1);
  }
  unlockClueTypes(e) {
    e.forEach(e => {
      this.unlockClueType(e);
    }), this.refreshLockedClueInteractables();
  }
  refreshLockedClueInteractables() {
    this.clickItemPair_ar.forEach(e => {
      if (this.isClueTypeDone(e.clueType)) return;
      const t = this.canInteractClueType(e.clueType);
      this.setSpriteNodeActive(e.clickSprite, t);
    }), this.DragItemPair_arr.forEach(e => {
      if (this.isClueTypeDone(e.clueType)) return;
      const t = this.canInteractClueType(e.clueType);
      this.setSpriteNodeActive(e.dragSprite, t);
    });
  }
  markClueTypeDone(e) {
    this.isClueTypeDone(e) || (this.doneItems.push(e), this.hasInstallNum = this.doneItems.length);
  }
  resolveNextHintKey() {
    for (const e of this.totalitems) if (!this.isClueTypeDone(e)) return this.hint_arr[e] ?? `level17_hint${e + 1}`;
    return null;
  }
  findClickPairAtPoint(e) {
    const t = [...this.clickItemPair_ar].sort((e, t) => this.getSpriteRenderOrder(t.clickSprite) - this.getSpriteRenderOrder(e.clickSprite));
    for (const r of t) {
      var i;
      if (!this.canInteractClueType(r.clueType)) continue;
      const t = r.clickSprite;
      if (null != t && null != (i = t.node) && i.active && this.isPointInsideSprite(t, e)) return r;
    }
    return null;
  }
  findDragPairAtPoint(e) {
    const t = [...this.DragItemPair_arr].sort((e, t) => this.getSpriteRenderOrder(t.dragSprite) - this.getSpriteRenderOrder(e.dragSprite));
    for (const r of t) {
      var i;
      if (!this.canInteractClueType(r.clueType)) continue;
      const t = r.dragSprite;
      if (null != t && null != (i = t.node) && i.active && this.isPointInsideSprite(t, e)) return r;
    }
    return null;
  }
  getSpriteRenderOrder(e) {
    var t;
    if (null == e || null == (t = e.node) || !t.isValid) return -1;
    let i = 0,
      r = 1,
      s = e.node;
    for (; s;) i += s.getSiblingIndex() * r, r *= 128, s = s.parent;
    return i;
  }
  isPointInsideSprite(e, t) {
    return this.isPointInsideSpriteBounds(e, t);
  }
  isPointInsideSpriteBounds(e, t) {
    var i;
    if (null == e || null == (i = e.node) || !i.isValid) return !1;
    const r = e.node.getComponent(__rea_outer_u);
    return !!r && r.getBoundingBoxToWorld().contains(t);
  }
  isPointInsideNode(e, t) {
    const i = e.getComponent(__rea_outer_u);
    return !!i && i.getBoundingBoxToWorld().contains(t);
  }
  getTouchWorldPoint(e) {
    const t = e.getUILocation();
    return new __rea_outer_g(t.x, t.y);
  }
  getTouchLocalPosition(e, t) {
    const i = t.getComponent(__rea_outer_u),
      r = e.getUILocation();
    return i ? i.convertToNodeSpaceAR(new __rea_outer_d(r.x, r.y, 0)) : new __rea_outer_d(r.x, r.y, 0);
  }
  calculateTouchOffset(e, t, i) {
    const r = this.getTouchLocalPosition(e, i);
    return new __rea_outer_d(t.position.x - r.x, t.position.y - r.y, 0);
  }
  setDragNodePositionFromTouch(e, t, i, r) {
    const s = this.getTouchLocalPosition(e, i);
    t.setPosition(s.x + r.x, s.y + r.y, t.position.z);
  }
  stopAllLevelTweens() {
    __rea_outer_N(this.bgSprite), __rea_outer_N(this.animationSprites), __rea_outer_N([this.fireSprite_1, this.fireSprite_2, this.whell_1_1, this.whell_1_2, this.whell_2_1, this.whell_2_2, this.umbrellaSprite_0, this.umbrellaSprite_1, this.umbrellaSprite_2, this.dabianSprite, this.girl_legt_1, this.girl_legt_2, this.girl_fire_1, this.girl_fire_2, this.blockSprite]), this.clickItemPair_ar.forEach(e => {
      __rea_outer_N([e.clickSprite, e.targetSprite]);
    }), this.DragItemPair_arr.forEach(e => {
      __rea_outer_N([e.dragSprite, e.dragMoveSprite]);
    });
  }
  setUmbrellaTriggerZoneActive(e) {
    const t = this.umbrellaSprite_1,
      i = null == t ? void 0 : t.node;
    null != i && i.isValid && (i.active = e, t && (t.enabled = !1));
  }
  setUmbrellaTriggerZoneVisible(e) {
    const t = this.umbrellaSprite_1,
      i = null == t ? void 0 : t.node;
    null != i && i.isValid && (i.active = !0, t && (t.enabled = e));
  }
  setSpriteNodeActive(e, t) {
    null != e && e.node && (!t || __rea_outer_k(e) ? e.node.active = t : e.node.active = !1);
  }
  setNodeActive(e, t) {
    e && (e.active = t);
  }
  resolveNpcCharacterNodes() {
    var e;
    const t = (null == (e = this.sceneNode) ? void 0 : e.parent) ?? null,
      i = (null == t ? void 0 : t.getChildByName("npc")) ?? null;
    this.manNpcNode = (null == i ? void 0 : i.getChildByName("man")) ?? null, this.girlNpcRootNode = (null == i ? void 0 : i.getChildByName("girl")) ?? null;
  }
  setNpcCharactersVisible(e) {
    this.setNodeActive(this.manNpcNode, e), this.setNodeActive(this.girlNpcRootNode, e);
  }
  cleanupGameplaySprites() {
    this.deactivateSprite(this.fireSprite_1), this.deactivateSprite(this.fireSprite_2), this.deactivateSprite(this.umbrellaSprite_0), this.deactivateSprite(this.umbrellaSprite_1), this.deactivateSprite(this.umbrellaSprite_2), this.clickItemPair_ar.forEach(e => {
      this.isPersistentGameplaySprite(e.clickSprite) || this.deactivateSprite(e.clickSprite), this.isPersistentGameplaySprite(e.targetSprite) || this.deactivateSprite(e.targetSprite);
    }), this.DragItemPair_arr.forEach(e => {
      this.isPersistentGameplaySprite(e.dragSprite) || this.deactivateSprite(e.dragSprite), this.isPersistentGameplaySprite(e.dragMoveSprite) || this.deactivateSprite(e.dragMoveSprite);
    }), this.bgSprite.forEach(e => {
      this.deactivateSprite(e);
    });
  }
  cleanupLevelRenderState() {
    this.setNodeActive(this.sceneNode, !1), this.cleanupGameplaySprites();
  }
  deactivateSprite(e) {
    var t;
    null != e && e.isValid && (e.enabled = !1, e.spriteFrame = null, null != (t = e.node) && t.isValid && (e.node.active = !1));
  }
}).prototype, "bubbleNode1", [Y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ze = __rea_outer_t(Le.prototype, "TipLabel", [J], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), xe = __rea_outer_t(Le.prototype, "boyLabelNode", [ee], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Fe = __rea_outer_t(Le.prototype, "girlLabelNode", [te], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Ee = __rea_outer_t(Le.prototype, "clickItemPair_ar", [ie], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), Be = __rea_outer_t(Le.prototype, "DragItemPair_arr", [re], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), Oe = __rea_outer_t(Le.prototype, "SwipeItemPair_arr", [se], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), Re = __rea_outer_t(Le.prototype, "sceneNode", [le], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Ge = __rea_outer_t(Le.prototype, "fireSprite_1", [ne], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Me = __rea_outer_t(Le.prototype, "fireSprite_2", [oe], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), We = __rea_outer_t(Le.prototype, "whell_1_1", [ae], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), He = __rea_outer_t(Le.prototype, "whell_1_2", [he], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Ue = __rea_outer_t(Le.prototype, "whell_2_1", [ue], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Ke = __rea_outer_t(Le.prototype, "whell_2_2", [ce], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Ze = __rea_outer_t(Le.prototype, "umbrellaSprite_0", [pe], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), $e = __rea_outer_t(Le.prototype, "umbrellaSprite_1", [de], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Xe = __rea_outer_t(Le.prototype, "umbrellaSprite_2", [ge], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), je = __rea_outer_t(Le.prototype, "dabianSprite", [ye], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), qe = __rea_outer_t(Le.prototype, "girl_legt_1", [Se], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Qe = __rea_outer_t(Le.prototype, "girl_legt_2", [_e], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Ye = __rea_outer_t(Le.prototype, "girl_fire_1", [be], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Je = __rea_outer_t(Le.prototype, "girl_fire_2", [ve], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), et = __rea_outer_t(Le.prototype, "normaltireNode", [fe], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), tt = __rea_outer_t(Le.prototype, "endtireNode", [Te], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), it = __rea_outer_t(Le.prototype, "packageNode1", [me], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), rt = __rea_outer_t(Le.prototype, "packageNode2", [Ce], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), st = __rea_outer_t(Le.prototype, "girlNode", [Ne], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), lt = __rea_outer_t(Le.prototype, "glueNode", [ke], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), nt = __rea_outer_t(Le.prototype, "birdDabianNode", [Ie], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ot = __rea_outer_t(Le.prototype, "animationSprites", [Ae], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), at = __rea_outer_t(Le.prototype, "bgSprite", [we], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), ht = __rea_outer_t(Le.prototype, "blockSprite", [De], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Pe = Le)) || Pe);
__rea_outer_r._RF.pop();
export { __recovered_export_0 as ClueType, __recovered_export_1 as default };
