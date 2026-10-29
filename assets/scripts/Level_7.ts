// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_7.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { applyDecoratedDescriptor as __rea_outer_t } from "./rollupPluginModLoBabelHelpers";
import { initializerDefineProperty as __rea_outer_i } from "./rollupPluginModLoBabelHelpers";
import { cclegacy as __rea_outer_s } from "cc";
import { Sprite as __rea_outer_o } from "cc";
import { Enum as __rea_outer_n } from "cc";
import { Texture2D as __rea_outer_r } from "cc";
import { Node as __rea_outer_l } from "cc";
import { Label as __rea_outer_a } from "cc";
import { Button as __rea_outer_h } from "cc";
import { _decorator as __rea_outer_c } from "cc";
import { tween as __rea_outer_u } from "cc";
import { Vec3 as __rea_outer_d } from "cc";
import { Tween as __rea_outer_p } from "cc";
import { UITransform as __rea_outer_b } from "cc";
import { SpriteFrame as __rea_outer_f } from "cc";
import { rect as __rea_outer_g } from "cc";
import { Vec2 as __rea_outer_v } from "cc";
import { default as __rea_outer_N } from "./LevelBase";
import { default as __rea_outer_m } from "./AudioManager";
import { I18nController as __rea_outer_y } from "./i18n-controller";
import { UIManager as __rea_outer__ } from "./ui-manager";
import { UIHint as __rea_outer_C } from "./uihint";
import { UIFail as __rea_outer_T } from "./uifail";
import { UILayer as __rea_outer_S } from "./ui-layer";
import { setNodeOpacity as __rea_outer_I } from "./CocosCompat";
import { stopAllTweens as __rea_outer_R } from "./CocosCompat";
import { stopSpritesTweens as __rea_outer_w } from "./CocosCompat";
import { isSpriteRenderable as __rea_outer_k } from "./CocosCompat";
import { GameController as __rea_outer_A } from "./GameController";
import { default as __rea_outer_L } from "./ActionSystem";
let __recovered_export_0, __recovered_export_1;
var P, B, x, F, V, H, E, O, z, D, M, G, U, W, K, X, q, $, j, Q, J, Y, Z, ee, te, ie, se, oe, ne, re, le, ae, he, ce, ue, de, pe, be, fe, ge, ve, Ne, me, ye, _e, Ce, Te, Se, Ie, Re, we, ke, Ae, Le, Pe, Be, xe, Fe, Ve, He, Ee, Oe, ze, De, Me, Ge, Ue, We, Ke, Xe, qe;
__rea_outer_s._RF.push({}, "8310aUe64BBe7k2tpB3qRa6", "Level_7", void 0);
const {
    ccclass: $e,
    property: je
  } = __rea_outer_c,
  Qe = 10,
  Je = 1.2,
  Ye = 255;
let Ze = __recovered_export_0 = function (e) {
  return e[e.ClueType_1 = 0] = "ClueType_1", e[e.ClueType_2 = 1] = "ClueType_2", e[e.ClueType_3 = 2] = "ClueType_3", e;
}({});
var et = function (e) {
  return e[e.Up = 0] = "Up", e[e.Down = 1] = "Down", e[e.Left = 2] = "Left", e[e.Right = 3] = "Right", e[e.LeftRight = 4] = "LeftRight", e;
}(et || {});
let tt = (P = $e("Level7_SwipeItemPair"), B = je(__rea_outer_o), x = je({
    type: __rea_outer_n(et),
    tooltip: "滑动方向（上/下/左/右/左右来回）"
  }), F = je({
    type: __rea_outer_n(Ze),
    tooltip: "线索类型"
  }), P((E = __rea_outer_t((H = class {
    constructor() {
      __rea_outer_i(this, "ID", E, this), __rea_outer_i(this, "swipeSprite", O, this), __rea_outer_i(this, "swipeType", z, this), __rea_outer_i(this, "clueType", D, this);
    }
  }).prototype, "ID", [je], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: function () {
      return 0;
    }
  }), O = __rea_outer_t(H.prototype, "swipeSprite", [B], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: function () {
      return null;
    }
  }), z = __rea_outer_t(H.prototype, "swipeType", [x], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: function () {
      return et.Up;
    }
  }), D = __rea_outer_t(H.prototype, "clueType", [F], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: function () {
      return Ze.ClueType_1;
    }
  }), V = H)) || V),
  it = (M = $e("Level7_ClickItemPair"), G = je(__rea_outer_o), U = je(__rea_outer_r), W = je(__rea_outer_o), K = je({
    type: __rea_outer_n(Ze),
    tooltip: "线索类型"
  }), M(($ = __rea_outer_t((q = class {
    constructor() {
      __rea_outer_i(this, "ID", $, this), __rea_outer_i(this, "clickSprite", j, this), __rea_outer_i(this, "targetTexture", Q, this), __rea_outer_i(this, "targetSprite", J, this), __rea_outer_i(this, "clueType", Y, this);
    }
  }).prototype, "ID", [je], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: function () {
      return 0;
    }
  }), j = __rea_outer_t(q.prototype, "clickSprite", [G], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: function () {
      return null;
    }
  }), Q = __rea_outer_t(q.prototype, "targetTexture", [U], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: function () {
      return null;
    }
  }), J = __rea_outer_t(q.prototype, "targetSprite", [W], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: function () {
      return null;
    }
  }), Y = __rea_outer_t(q.prototype, "clueType", [K], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: function () {
      return Ze.ClueType_1;
    }
  }), X = q)) || X);
__recovered_export_1 = (Z = $e("Level_7"), ee = je(__rea_outer_l), te = je(__rea_outer_a), ie = je(__rea_outer_l), se = je({
  type: [__rea_outer_l]
}), oe = je({
  type: [__rea_outer_o]
}), ne = je({
  type: [it]
}), re = je({
  type: [it]
}), le = je({
  type: [it]
}), ae = je({
  type: [it]
}), he = je({
  type: [it]
}), ce = je({
  type: [it]
}), ue = je({
  type: [tt]
}), de = je({
  type: [tt]
}), pe = je({
  type: [tt]
}), be = je(__rea_outer_l), fe = je(__rea_outer_h), ge = je(__rea_outer_h), ve = je(__rea_outer_l), Ne = je({
  type: [__rea_outer_o]
}), me = je({
  type: [__rea_outer_o]
}), ye = je(__rea_outer_l), _e = je(__rea_outer_l), Ce = je(__rea_outer_o), Z((Ie = __rea_outer_t((Se = class extends __rea_outer_N {
  constructor(...e) {
    super(...e), __rea_outer_i(this, "bubbleNode1", Ie, this), __rea_outer_i(this, "TipLabel", Re, this), __rea_outer_i(this, "rolesBaseNode", we, this), __rea_outer_i(this, "roleNodes", ke, this), __rea_outer_i(this, "roleSprites", Ae, this), __rea_outer_i(this, "clickItemPair_arr_1", Le, this), __rea_outer_i(this, "clickItemPair_arr_2", Pe, this), __rea_outer_i(this, "clickItemPair_arr_3", Be, this), __rea_outer_i(this, "clickItemPair_arr_4", xe, this), __rea_outer_i(this, "clickItemPair_arr_5", Fe, this), __rea_outer_i(this, "clickItemPair_arr_6", Ve, this), __rea_outer_i(this, "swipeItemPair_arr_3", He, this), __rea_outer_i(this, "swipeItemPair_arr_5", Ee, this), __rea_outer_i(this, "swipeItemPair_arr_6", Oe, this), __rea_outer_i(this, "ButtonNodes", ze, this), __rea_outer_i(this, "HideButton", De, this), __rea_outer_i(this, "GoOutButton", Me, this), __rea_outer_i(this, "CollectNodes", Ge, this), __rea_outer_i(this, "CollectSprites", Ue, this), __rea_outer_i(this, "animationSprites", We, this), __rea_outer_i(this, "failNode", Ke, this), __rea_outer_i(this, "blockNode", Xe, this), __rea_outer_i(this, "blockSprite", qe, this), this.phase = 0, this.winstate = !1, this.totalround = 6, this.currentround = 0, this.lockIndexs_1 = [], this.lockIndexs_2 = [], this.lockIndexs_3 = [], this.lockIndexs_4 = [], this.lockIndexs_5 = [], this.lockIndexs_6 = [], this.totalitems = [], this.doneItems = [], this.hint_arr = ["level7_hint1", "level7_hint2", "level7_hint3", "level7_hint4", "level7_hint5", "level7_hint6"], this.isInteractionLocked = !1, this.isRoundTransitioning = !1, this.activeSimpleSwipe = null, this.activeLeftRightSwipe = null, this.isSwipeTouchActive = !1, this.womanHeadNode = null, this.manHeadNode = null, this.clawMarkNode = null, this.gameNode = null, this.bg1Node = null, this.bubble2Node = null, this.TipLabel2 = null, this.onHideButtonClick = () => {
      this.handleRoundChoice(!0);
    }, this.onGoOutButtonClick = () => {
      this.handleRoundChoice(!1);
    }, this.onLevelTouchStart = e => {
      if (1 !== this.phase || this.isInteractionLocked || this.isRoundTransitioning) return;
      if (this.doneItems.length >= 3) return;
      const t = this.getTouchWorldPoint(e),
        i = this.findSwipePairAtPoint(t);
      if (i) {
        if (i.swipeType === et.LeftRight) return this.isSwipeTouchActive = !0, this.activeLeftRightSwipe = {
          pair: i,
          legStartX: t.x,
          direction: 0,
          roundTripCount: 0
        }, void this.beginLeftRightWipe(i);
        this.isSwipeTouchActive = !0, this.activeSimpleSwipe = {
          pair: i,
          startLocation: t.clone()
        };
      }
    }, this.onLevelTouchMove = e => {
      1 !== this.phase || this.isInteractionLocked || this.isRoundTransitioning || this.activeLeftRightSwipe && this.updateLeftRightSwipe(e);
    }, this.onLevelTouchEnd = e => {
      if (1 !== this.phase || this.isInteractionLocked || this.isRoundTransitioning) return void this.resetTouchSession();
      if (this.isSwipeTouchActive) {
        if (this.isSwipeTouchActive = !1, this.activeSimpleSwipe) {
          const t = this.activeSimpleSwipe,
            i = this.getTouchWorldPoint(e);
          this.isSwipeMatchingType(t.startLocation, i, t.pair.swipeType) && this.applySwipeUnlock(t.pair);
        }
        return void this.resetTouchSession();
      }
      if (this.doneItems.length >= 3) return;
      const t = this.getTouchWorldPoint(e),
        i = this.findClickPairAtPoint(t);
      i && this.handleClickPair(i, t);
    }, this.onLevelTouchCancel = () => {
      this.resetTouchSession();
    };
  }
  onLoad() {
    super.onLoad(), this.resolveGameNodes(), this.resolveTipLabelReference(), this.resolveTipLabel2Reference(), this.resolveRoleSpriteReferences(), this.resolveResultHeadNodes(), this.allItemNum = this.totalround, this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.enterPhase0();
  }
  onDestroy() {
    this.unscheduleAllCallbacks(), this.unregisterInteractionHandlers(), this.unregisterButtonHandlers(), this.stopDecorationAnimations(), this.stopAllLevelTweens();
  }
  showHint() {
    if (1 !== this.phase || this.currentround >= this.hint_arr.length) return;
    const e = this.hint_arr[this.currentround],
      t = __rea_outer_y.getInstance().getKey(e);
    __rea_outer__.getInstance().showView(__rea_outer_C, void 0, {
      body: t
    });
  }
  getGameProgressSnapshot() {
    const e = this.totalround,
      t = Math.min(this.currentround, e);
    return {
      progress: e > 0 ? t / e : 0,
      label: `${t}/${e}`
    };
  }
  isGameProgressVisible() {
    return !1;
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.currentround = 0, this.totalitems = [], this.doneItems = [], this.isInteractionLocked = !1, this.isRoundTransitioning = !1, this.activeSimpleSwipe = null, this.activeLeftRightSwipe = null, this.hasInstallNum = 0, this.initializeLockIndexs(), this.hideBubble(), this.setNodeActive(this.rolesBaseNode, !1), this.setNodeActive(this.ButtonNodes, !1), this.setNodeActive(this.CollectNodes, !1), this.setNodeActive(this.blockNode, !1), this.setNodeActive(this.failNode, !1), this.prepareFailNodeForDialogue(), this.prepareSpritesForPhase0();
  }
  initializeLockIndexs() {
    this.lockIndexs_1 = [], this.lockIndexs_2 = [], this.lockIndexs_3 = [Ze.ClueType_1, Ze.ClueType_3], this.lockIndexs_4 = [], this.lockIndexs_5 = [Ze.ClueType_1, Ze.ClueType_2], this.lockIndexs_6 = [Ze.ClueType_2];
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_m.playMusic("bgm3", !0, .5), this.startDecorationAnimations(), this.scheduleOnce(() => {
      this.isValid && 0 === this.phase && (this.playBubbleLine("7_1", "7_1"), this.scheduleOnce(() => {
        this.isValid && 0 === this.phase && (this.hideBubble(), this.scheduleOnce(() => {
          this.isValid && 0 === this.phase && this.enterPhase1();
        }, .5));
      }, 7));
    }, .5);
  }
  skipOpeningToPlay() {
    return 0 === this.phase && (this.stopOpeningDialogue(), this.hideBubble(), this.enterPhase1(), !0);
  }
  enterPhase1() {
    0 === this.phase && (this.phase = 1, this.currentround = 0, this.setNodeActive(this.rolesBaseNode, !0), this.setNodeActive(this.CollectNodes, !0), this.setNodeActive(this.ButtonNodes, !1), this.prepareGlobalRoundHiddens(), this.registerInteractionHandlers(), this.registerButtonHandlers(), this.startRound(this.currentround), __rea_outer_A.getInstance().refreshGameProgress());
  }
  beginResultPhase() {
    this.phase >= 2 || (this.phase = 2, this.unregisterInteractionHandlers(), this.unregisterButtonHandlers(), this.stopDecorationAnimations(), this.setNodeActive(this.ButtonNodes, !1));
  }
  enterPhase2() {
    this.beginResultPhase(), this.winstate && (__rea_outer_A.getInstance().pauseTimer(), this.resolveGameNodes(), this.resolveTipLabel2Reference(), this.setNodeActive(this.bg1Node, !1), this.setNodeActive(this.bubble2Node, !0), this.TipLabel2 && (this.TipLabel2.string = __rea_outer_y.getInstance().getKey("7_2"), this.setNodeActive(this.TipLabel2.node, !0)), __rea_outer_m.playEffect_1("7_2"), this.scheduleOnce(() => {
      this.isValid && this.showLevelSuccess();
    }, 2));
  }
  prepareSpritesForPhase0() {
    this.resolveGameNodes(), this.setNodeActive(this.bubbleNode1, !0), this.setNodeActive(this.bubble2Node, !1), this.setNodeActive(this.failNode, !1);
    const e = this.resolveBlockSprite();
    this.setSpriteNodeActive(e, !1), this.roleNodes.forEach(e => {
      this.setNodeActive(e, !1);
    });
  }
  prepareGlobalRoundHiddens() {
    this.setChildActive(this.roleNodes[5], "frame_17", !1), this.setChildActive(this.roleNodes[5], "frame_16", !1), this.setChildActive(this.roleNodes[4], "rolebad/role5_1_1", !1), this.setChildActive(this.roleNodes[4], "role5_1_2", !1), this.setChildActive(this.roleNodes[2], "role3_1_1", !1), this.setChildActive(this.roleNodes[2], "role3_1_2", !1), this.roleSprites.forEach(e => {
      this.setSpriteNodeActive(e, !1);
    });
  }
  hideRoundRevealChildren() {
    this.setChildActive(this.roleNodes[2], "role3_1_1", !1), this.setChildActive(this.roleNodes[4], "rolebad/role5_1_1", !1), this.setChildActive(this.roleNodes[4], "role5_1_2", !1), this.setChildActive(this.roleNodes[5], "frame_17", !1), this.setChildActive(this.roleNodes[5], "frame_18", !1);
  }
  startRound(e) {
    if (this.currentround = e, this.totalitems = [], this.doneItems = [], this.isRoundTransitioning = !1, this.isInteractionLocked = !1, this.activeSimpleSwipe = null, this.activeLeftRightSwipe = null, this.setNodeActive(this.ButtonNodes, !1), this.setNodeActive(this.CollectNodes, !0), this.clearCollectSprites(), this.roleNodes.forEach((t, i) => {
      this.setNodeActive(t, i === e);
    }), this.hideRoundRevealChildren(), 4 === e) {
      var t;
      this.setChildActive(this.roleNodes[4], "rolebad/role5_1_1", !0);
      const e = null == (t = this.roleNodes[4]) ? void 0 : t.getChildByPath("rolebad/role5_1_1");
      e && __rea_outer_I(e, Ye);
    }
    const i = this.getCurrentRoleNode();
    i && this.setChildActive(i, "role1", !1), this.playRoundBlockFlash(), this.playRoleIntroAnimation(), __rea_outer_A.getInstance().refreshGameProgress();
  }
  playRoundBlockFlash() {
    this.setNodeActive(this.blockNode, !0), this.scheduleOnce(() => {
      this.isValid && this.setNodeActive(this.blockNode, !1);
    }, 1);
  }
  playRoleIntroAnimation() {
    const e = this.getCurrentRoleNode();
    if (!e) return;
    __rea_outer_m.playEffect_1("level7_3");
    const t = e.getChildByName("roleok"),
      i = e.getChildByName("rolebad");
    if (!t || !i) return;
    const s = i.position.y,
      o = i.position.z,
      n = t.position.y,
      r = t.position.z;
    t.active = !0, i.active = !0, t.setPosition(-600, n, r), i.setPosition(-600, s, o), __rea_outer_R(i), __rea_outer_R(t), __rea_outer_u(i).to(.6, {
      position: new __rea_outer_d(0, s, o)
    }).call(() => {
      this.isValid && __rea_outer_u(t).to(.6, {
        position: new __rea_outer_d(0, n, r)
      }).call(() => {
        this.isValid && (t.active = !1);
      }).start();
    }).start();
  }
  playRoleExitAnimation(e) {
    const t = this.getCurrentRoleNode();
    if (!t) return void e();
    const i = t.getChildByName("roleok"),
      s = t.getChildByName("rolebad");
    if (!i || !s) return void e();
    const o = s.position.y,
      n = s.position.z,
      r = i.position.y,
      l = i.position.z;
    i.active = !0, s.active = !0, s.setPosition(0, o, n), i.setPosition(0, r, l), __rea_outer_R(s), __rea_outer_R(i), __rea_outer_u(s).to(.6, {
      position: new __rea_outer_d(600, o, n)
    }).call(() => {
      this.isValid && __rea_outer_u(i).to(.6, {
        position: new __rea_outer_d(600, r, l)
      }).call(() => {
        this.isValid && (i.active = !1, s.active = !1, e());
      }).start();
    }).start();
  }
  startDecorationAnimations() {
    this.animationSprites.forEach((e, t) => {
      const i = null == e ? void 0 : e.node;
      null != i && i.isValid && __rea_outer_L.RoseBreath_tag(i, 1, .02, .7, 0, 300 + t);
    });
  }
  stopDecorationAnimations() {
    this.animationSprites.forEach((e, t) => {
      const i = null == e ? void 0 : e.node;
      null != i && i.isValid && (__rea_outer_R(i), __rea_outer_p.stopAllByTag(300 + t));
    });
  }
  stopAllLevelTweens() {
    var e, t;
    null != (e = this.bubbleNode1) && e.isValid && __rea_outer_R(this.bubbleNode1), null != (t = this.blockNode) && t.isValid && __rea_outer_R(this.blockNode), __rea_outer_w(this.animationSprites), __rea_outer_w(this.CollectSprites), __rea_outer_w(this.roleSprites), this.getAllClickPairs().forEach(e => {
      __rea_outer_w([e.clickSprite, e.targetSprite]);
    }), this.getAllSwipePairs().forEach(e => {
      __rea_outer_w([e.swipeSprite]);
    });
  }
  registerInteractionHandlers() {
    this.node.on(__rea_outer_l.EventType.TOUCH_START, this.onLevelTouchStart, this), this.node.on(__rea_outer_l.EventType.TOUCH_MOVE, this.onLevelTouchMove, this), this.node.on(__rea_outer_l.EventType.TOUCH_END, this.onLevelTouchEnd, this), this.node.on(__rea_outer_l.EventType.TOUCH_CANCEL, this.onLevelTouchCancel, this);
  }
  unregisterInteractionHandlers() {
    var e;
    null != (e = this.node) && e.isValid && (this.node.off(__rea_outer_l.EventType.TOUCH_START, this.onLevelTouchStart, this), this.node.off(__rea_outer_l.EventType.TOUCH_MOVE, this.onLevelTouchMove, this), this.node.off(__rea_outer_l.EventType.TOUCH_END, this.onLevelTouchEnd, this), this.node.off(__rea_outer_l.EventType.TOUCH_CANCEL, this.onLevelTouchCancel, this)), this.activeSimpleSwipe = null, this.activeLeftRightSwipe = null;
  }
  registerButtonHandlers() {
    var e, t;
    null != (e = this.HideButton) && null != (e = e.node) && e.isValid && this.HideButton.node.on(__rea_outer_h.EventType.CLICK, this.onHideButtonClick, this), null != (t = this.GoOutButton) && null != (t = t.node) && t.isValid && this.GoOutButton.node.on(__rea_outer_h.EventType.CLICK, this.onGoOutButtonClick, this);
  }
  unregisterButtonHandlers() {
    var e, t;
    null != (e = this.HideButton) && null != (e = e.node) && e.isValid && this.HideButton.node.off(__rea_outer_h.EventType.CLICK, this.onHideButtonClick, this), null != (t = this.GoOutButton) && null != (t = t.node) && t.isValid && this.GoOutButton.node.off(__rea_outer_h.EventType.CLICK, this.onGoOutButtonClick, this);
  }
  resetTouchSession() {
    this.resetLeftRightWipeIfNeeded(), this.activeSimpleSwipe = null, this.activeLeftRightSwipe = null, this.isSwipeTouchActive = !1;
  }
  updateLeftRightSwipe(e) {
    const t = this.activeLeftRightSwipe;
    if (!t) return;
    const i = this.getTouchWorldPoint(e).x;
    if (0 === t.direction) {
      const e = i - t.legStartX;
      return void (e >= Qe ? (t.direction = 1, t.legStartX = i) : e <= -10 && (t.direction = -1, t.legStartX = i));
    }
    if (1 === t.direction) {
      if (t.legStartX - i < Qe) return;
      t.roundTripCount += 1, t.direction = -1, t.legStartX = i;
    } else {
      if (i - t.legStartX < Qe) return;
      t.roundTripCount += 1, t.direction = 1, t.legStartX = i;
    }
    if (this.updateLeftRightWipeOpacity(t), t.roundTripCount < 1) return;
    const s = t.pair;
    this.activeLeftRightSwipe = null, this.applySwipeUnlock(s);
  }
  beginLeftRightWipe(e) {
    const t = this.getLeftRightWipeNode(e);
    t && (this.activateNodeIfRenderable(t), __rea_outer_I(t, Ye));
  }
  updateLeftRightWipeOpacity(e) {
    const t = this.getLeftRightWipeNode(e.pair);
    if (!t) return;
    const i = Math.min(e.roundTripCount / 1, 1);
    __rea_outer_I(t, Math.round((1 - i) * Ye));
  }
  resetLeftRightWipeIfNeeded() {
    const e = this.activeLeftRightSwipe;
    if (e && this.isClueTypeLocked(e.pair.clueType)) {
      const t = this.getLeftRightWipeNode(e.pair);
      t && (this.activateNodeIfRenderable(t), __rea_outer_I(t, Ye));
    }
  }
  getLeftRightWipeNode(e) {
    if (4 !== this.currentround || 0 !== e.ID) return null;
    const t = this.getCurrentRoleNode();
    return t ? t.getChildByPath("rolebad/role5_1_1") : null;
  }
  handleClickPair(e, t) {
    if (this.isClueTypeDone(e.clueType)) return;
    if (this.isClueTypeLocked(e.clueType)) return;
    this.doneItems.push(e.clueType);
    const i = this.doneItems.length - 1;
    __rea_outer_m.playEffect_1("level7_1"), this.animateCollectItem(e, t, i), this.doneItems.length < 3 || (this.isInteractionLocked = !0, this.scheduleOnce(() => {
      this.isValid && (this.setNodeActive(this.ButtonNodes, !0), this.setNodeActive(this.CollectNodes, !1), this.isInteractionLocked = !1);
    }, 1.2));
  }
  animateCollectItem(e, t, i) {
    var s, o;
    const n = this.CollectSprites[i];
    if (null == n || null == (s = n.node) || !s.isValid || !e.targetTexture) return;
    this.applyTextureToSprite(n, e.targetTexture);
    const r = null == (o = n.node.parent) ? void 0 : o.getComponent(__rea_outer_b);
    if (!r) return;
    const l = r.convertToNodeSpaceAR(new __rea_outer_d(t.x, t.y, 0));
    n.node.active = !0, n.node.setPosition(l), __rea_outer_R(n.node), __rea_outer_u(n.node).to(.2, {
      position: new __rea_outer_d(0, 0, 0)
    }).start();
  }
  applySwipeUnlock(e) {
    this.removeClueTypeFromCurrentLocks(e.clueType), this.setSpriteNodeActive(e.swipeSprite, !1);
    const t = this.getCurrentRoleNode();
    if (t) if (2 !== this.currentround) {
      if (4 !== this.currentround) 5 === this.currentround && this.playFrameFallAnimation(t);else {
        if (0 === e.ID) return void this.setChildActive(t, "rolebad/role5_1_1", !1);
        const i = t.getChildByName("role5_1_2");
        i && (this.activateNodeIfRenderable(i), __rea_outer_I(i, Ye));
      }
    } else {
      const i = 0 === e.ID ? "role3_1_2" : "role3_1_1";
      this.setChildActive(t, i, !0);
    }
  }
  playFrameFallAnimation(e) {
    const t = e.getChildByName("frame_17"),
      i = e.getChildByName("frame_18");
    if (!t || !i) return;
    this.activateNodeIfRenderable(t), i.active = !1;
    const s = i.position.clone();
    __rea_outer_R(t), __rea_outer_u(t).to(.5, {
      position: s
    }).call(() => {
      this.isValid && (t.active = !1, this.activateNodeIfRenderable(i));
    }).start();
  }
  handleRoundChoice(e) {
    if (this.isRoundTransitioning || this.doneItems.length < 3) return;
    this.isRoundTransitioning = !0, this.isInteractionLocked = !0, this.setNodeActive(this.ButtonNodes, !1);
    (this.currentround < 5 ? e : !e) ? (__rea_outer_m.playEffect_1("level7_1"), this.currentround < 5 ? this.playRoundSuccessAnimation() : this.playFinalRoundSuccessAnimation()) : this.playRoundFailAnimation();
  }
  playRoundSuccessAnimation() {
    this.setChildActive(this.roleNodes[2], "role3_1_1", !1), this.setChildActive(this.roleNodes[4], "rolebad/role5_1_1", !1), this.setChildActive(this.roleNodes[4], "role5_1_2", !1);
    const e = this.getCurrentRoleNode();
    if (!e) return void this.advanceToNextRound();
    const t = e.getChildByName("roleok"),
      i = e.getChildByName("rolebad");
    t && i ? this.playRoleExitAnimation(() => {
      this.isValid && this.advanceToNextRound();
    }) : this.advanceToNextRound();
  }
  playFinalRoundSuccessAnimation() {
    var e;
    const t = this.getCurrentRoleNode();
    if (t) {
      const e = t.getChildByName("roleok"),
        i = t.getChildByName("rolebad");
      e && (e.active = !1), i && (i.active = !1);
    }
    const i = this.getRoleSpriteForRound(5);
    null != i && null != (e = i.node) && e.isValid && this.activateNodeIfRenderable(i.node), this.winstate = !0, this.hideBubble(), this.enterPhase2();
  }
  playRoundFailAnimation() {
    this.winstate = !1, this.beginResultPhase(), this.currentround < 5 ? this.playEarlyRoundFailAnimation() : this.playFinalRoundFailAnimation();
  }
  playEarlyRoundFailAnimation() {
    var e;
    const t = this.getCurrentRoleNode();
    if (t) {
      const e = t.getChildByName("roleok"),
        i = t.getChildByName("rolebad");
      e && (e.active = !1), i && (i.active = !1);
    }
    const i = this.getRoundFailSoundKey(this.currentround),
      s = () => {
        this.isValid && this.playFailResultSequence(i);
      },
      o = this.getRoleSpriteForRound(this.currentround);
    if (null == o || null == (e = o.node) || !e.isValid) return void s();
    const n = o.node,
      r = n.position.y;
    this.activateNodeIfRenderable(n), __rea_outer_R(n), __rea_outer_u(n).to(.2, {
      position: new __rea_outer_d(n.position.x, r - 250, n.position.z)
    }).call(s).start();
  }
  playFailResultSequence(e) {
    this.showFailBubbleWithVoice(e), this.scheduleOnce(() => {
      this.isValid && (this.showFailNodeResult(), this.scheduleOnce(() => {
        this.isValid && __rea_outer__.getInstance().showView(__rea_outer_T, __rea_outer_S.WIN_ANIMATION);
      }, .7));
    }, 1);
  }
  showFailBubbleWithVoice(e) {
    this.resolveGameNodes(), this.resolveTipLabel2Reference();
    const t = __rea_outer_y.getInstance();
    this.TipLabel2 && (this.TipLabel2.string = t.getKey(e), this.setNodeActive(this.TipLabel2.node, !0)), this.setNodeActive(this.bubble2Node, !0), __rea_outer_m.playEffect_1(e);
  }
  showFailNodeResult() {
    this.resolveResultHeadNodes(), this.setNodeActive(this.failNode, !0), this.setNodeActive(this.clawMarkNode, !1), this.activateNodeIfRenderable(this.womanHeadNode), this.setNodeActive(this.manHeadNode, !1), this.scheduleOnce(() => {
      this.isValid && (this.activateNodeIfRenderable(this.clawMarkNode), __rea_outer_m.playEffect_1("level7_4"));
    }, .2);
  }
  playFinalRoundFailAnimation() {
    const e = this.getRoundFailSoundKey(this.currentround),
      t = () => {
        this.isValid && this.playFailResultSequence(e);
      },
      i = this.getCurrentRoleNode();
    if (!i) return void t();
    const s = i.getChildByName("roleok"),
      o = i.getChildByName("rolebad");
    s && o ? this.playRoleExitAnimation(t) : t();
  }
  advanceToNextRound() {
    this.TryQuickWin() || (this.currentround += 1, this.startRound(this.currentround));
  }
  isClueTypeDone(e) {
    return this.doneItems.indexOf(e) >= 0;
  }
  isClueTypeLocked(e) {
    return this.getLockIndexsForRound(this.currentround).indexOf(e) >= 0;
  }
  removeClueTypeFromCurrentLocks(e) {
    const t = this.getLockIndexsForRound(this.currentround),
      i = t.indexOf(e);
    i >= 0 && t.splice(i, 1);
  }
  findClickPairAtPoint(e) {
    const t = [...this.getClickPairsForRound(this.currentround)].sort((e, t) => this.getSpriteRenderOrder(t.clickSprite) - this.getSpriteRenderOrder(e.clickSprite));
    for (const s of t) {
      var i;
      const t = s.clickSprite;
      if (null != t && null != (i = t.node) && i.active && this.isPointInsideSprite(t, e)) return s;
    }
    return null;
  }
  findSwipePairAtPoint(e) {
    const t = [...this.getSwipePairsForRound(this.currentround)].sort((e, t) => this.getSpriteRenderOrder(t.swipeSprite) - this.getSpriteRenderOrder(e.swipeSprite));
    for (const s of t) {
      var i;
      const t = s.swipeSprite;
      if (null != t && null != (i = t.node) && i.active && this.isPointInsideSprite(t, e)) return s;
    }
    return null;
  }
  isSwipeMatchingType(e, t, i) {
    const s = t.x - e.x,
      o = t.y - e.y;
    switch (i) {
      case et.Up:
        return o >= Qe && Math.abs(o) >= Math.abs(s) * Je;
      case et.Down:
        return o <= -10 && Math.abs(o) >= Math.abs(s) * Je;
      case et.Left:
        return s <= -10 && Math.abs(s) >= Math.abs(o) * Je;
      case et.Right:
        return s >= Qe && Math.abs(s) >= Math.abs(o) * Je;
      default:
        return !1;
    }
  }
  getClickPairsForRound(e) {
    return [this.clickItemPair_arr_1, this.clickItemPair_arr_2, this.clickItemPair_arr_3, this.clickItemPair_arr_4, this.clickItemPair_arr_5, this.clickItemPair_arr_6][e] ?? [];
  }
  getSwipePairsForRound(e) {
    return 2 === e ? this.swipeItemPair_arr_3 : 4 === e ? this.swipeItemPair_arr_5 : 5 === e ? this.swipeItemPair_arr_6 : [];
  }
  getLockIndexsForRound(e) {
    return [this.lockIndexs_1, this.lockIndexs_2, this.lockIndexs_3, this.lockIndexs_4, this.lockIndexs_5, this.lockIndexs_6][e] ?? [];
  }
  getAllClickPairs() {
    return [...this.clickItemPair_arr_1, ...this.clickItemPair_arr_2, ...this.clickItemPair_arr_3, ...this.clickItemPair_arr_4, ...this.clickItemPair_arr_5, ...this.clickItemPair_arr_6];
  }
  getAllSwipePairs() {
    return [...this.swipeItemPair_arr_3, ...this.swipeItemPair_arr_5, ...this.swipeItemPair_arr_6];
  }
  getCurrentRoleNode() {
    return this.roleNodes[this.currentround] ?? null;
  }
  clearCollectSprites() {
    this.CollectSprites.forEach(e => {
      e && (e.spriteFrame = null, this.setSpriteNodeActive(e, !1));
    });
  }
  applyTextureToSprite(e, t) {
    const i = new __rea_outer_f();
    i.texture = t, i.rect = __rea_outer_g(0, 0, t.width, t.height), e.spriteFrame = i;
  }
  resolveBlockSprite() {
    var e;
    return this.blockSprite ? this.blockSprite : null != (e = this.blockNode) && e.isValid ? this.blockNode.getComponent(__rea_outer_o) : null;
  }
  resolveTipLabelReference() {
    if (this.TipLabel) return;
    const e = this.bubbleNode1;
    null != e && e.isValid && (this.TipLabel = e.getComponentInChildren(__rea_outer_a));
  }
  resolveTipLabel2Reference() {
    if (this.TipLabel2) return;
    this.resolveGameNodes();
    const e = this.bubble2Node;
    null != e && e.isValid && (this.TipLabel2 = e.getComponentInChildren(__rea_outer_a));
  }
  resolveGameNodes() {
    var e, t;
    this.gameNode = this.gameNode ?? this.node.getChildByPath("UIPanel/gameNode"), this.bg1Node = this.bg1Node ?? (null == (e = this.gameNode) ? void 0 : e.getChildByName("bg_1")) ?? null, this.bubble2Node = this.bubble2Node ?? (null == (t = this.gameNode) ? void 0 : t.getChildByName("Bubble2")) ?? null;
  }
  resolveResultHeadNodes() {
    var e;
    null != (e = this.failNode) && e.isValid && (this.clawMarkNode = this.failNode.getChildByName("failure"), this.womanHeadNode = this.failNode.getChildByName("failure_1"), this.manHeadNode = this.failNode.getChildByName("failure_man"));
  }
  getRoundFailSoundKey(e) {
    return 1 === e ? "7_3" : "7_4";
  }
  prepareFailNodeForDialogue() {
    this.setNodeActive(this.clawMarkNode, !1), this.setNodeActive(this.womanHeadNode, !1), this.setNodeActive(this.manHeadNode, !1);
  }
  playResultVoice(e, t) {
    this.playBubbleLine(e, e, t);
  }
  resolveRoleSpriteReferences() {
    this.roleNodes.forEach((e, t) => {
      var i;
      if (null != (i = this.roleSprites[t]) && null != (i = i.node) && i.isValid) return;
      const s = e.getChildByName("role1"),
        n = (null == s ? void 0 : s.getComponent(__rea_outer_o)) ?? null;
      n && (this.roleSprites[t] = n);
    });
  }
  getRoleSpriteForRound(e) {
    var t;
    const i = this.roleSprites[e];
    if (null != i && null != (t = i.node) && t.isValid) return i;
    const s = this.roleNodes[e];
    if (null == s || !s.isValid) return null;
    const n = s.getChildByName("role1");
    return (null == n ? void 0 : n.getComponent(__rea_outer_o)) ?? null;
  }
  playBubbleLine(e, t = e, i) {
    this.resolveTipLabelReference();
    const s = __rea_outer_y.getInstance(),
      o = this.TipLabel;
    this.hideBubble(), o && (o.string = s.getKey(e), this.setNodeActive(o.node, !0)), this.setNodeActive(this.bubbleNode1, !0), __rea_outer_m.playEffect_1(t, i);
  }
  hideBubble() {
    var e;
    this.setNodeActive(this.bubbleNode1, !1), this.setNodeActive((null == (e = this.TipLabel) ? void 0 : e.node) ?? null, !1);
  }
  getSpriteRenderOrder(e) {
    var t;
    if (null == e || null == (t = e.node) || !t.isValid) return -1;
    let i = 0,
      s = 1,
      o = e.node;
    for (; o;) i += o.getSiblingIndex() * s, s *= 128, o = o.parent;
    return i;
  }
  isPointInsideSprite(e, t) {
    const i = e.node.getComponent(__rea_outer_b);
    return !!i && i.getBoundingBoxToWorld().contains(t);
  }
  getTouchWorldPoint(e) {
    const t = e.getUILocation();
    return new __rea_outer_v(t.x, t.y);
  }
  markAllTasksCompleted() {
    super.markAllTasksCompleted(), this.phase = 2, this.winstate = !0, this.currentround = this.totalround, this.isInteractionLocked = !0, this.isRoundTransitioning = !0, this.unregisterInteractionHandlers(), this.unregisterButtonHandlers(), this.stopDecorationAnimations(), this.hideBubble();
  }
  setSpriteNodeActive(e, t) {
    null != e && e.node && (!t || __rea_outer_k(e) ? e.node.active = t : e.node.active = !1);
  }
  setChildActive(e, t, i) {
    if (null == e || !e.isValid) return;
    const s = t.includes("/") ? e.getChildByPath(t) : e.getChildByName(t);
    s && (i ? this.activateNodeIfRenderable(s) : s.active = !1);
  }
  activateNodeIfRenderable(e) {
    if (null == e || !e.isValid) return;
    const t = e.getComponent(__rea_outer_o);
    !t || __rea_outer_k(t) ? e.active = !0 : e.active = !1;
  }
  setNodeActive(e, t) {
    e && (e.active = t);
  }
}).prototype, "bubbleNode1", [ee], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Re = __rea_outer_t(Se.prototype, "TipLabel", [te], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), we = __rea_outer_t(Se.prototype, "rolesBaseNode", [ie], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ke = __rea_outer_t(Se.prototype, "roleNodes", [se], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), Ae = __rea_outer_t(Se.prototype, "roleSprites", [oe], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), Le = __rea_outer_t(Se.prototype, "clickItemPair_arr_1", [ne], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), Pe = __rea_outer_t(Se.prototype, "clickItemPair_arr_2", [re], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), Be = __rea_outer_t(Se.prototype, "clickItemPair_arr_3", [le], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), xe = __rea_outer_t(Se.prototype, "clickItemPair_arr_4", [ae], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), Fe = __rea_outer_t(Se.prototype, "clickItemPair_arr_5", [he], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), Ve = __rea_outer_t(Se.prototype, "clickItemPair_arr_6", [ce], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), He = __rea_outer_t(Se.prototype, "swipeItemPair_arr_3", [ue], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), Ee = __rea_outer_t(Se.prototype, "swipeItemPair_arr_5", [de], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), Oe = __rea_outer_t(Se.prototype, "swipeItemPair_arr_6", [pe], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), ze = __rea_outer_t(Se.prototype, "ButtonNodes", [be], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), De = __rea_outer_t(Se.prototype, "HideButton", [fe], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Me = __rea_outer_t(Se.prototype, "GoOutButton", [ge], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Ge = __rea_outer_t(Se.prototype, "CollectNodes", [ve], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Ue = __rea_outer_t(Se.prototype, "CollectSprites", [Ne], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), We = __rea_outer_t(Se.prototype, "animationSprites", [me], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), Ke = __rea_outer_t(Se.prototype, "failNode", [ye], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Xe = __rea_outer_t(Se.prototype, "blockNode", [_e], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), qe = __rea_outer_t(Se.prototype, "blockSprite", [Ce], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Te = Se)) || Te);
__rea_outer_s._RF.pop();
export { __recovered_export_0 as ClueType, __recovered_export_1 as default };
