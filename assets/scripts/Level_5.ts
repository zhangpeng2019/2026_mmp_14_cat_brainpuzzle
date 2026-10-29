// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_5.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { applyDecoratedDescriptor as __rea_outer_t } from "./rollupPluginModLoBabelHelpers";
import { initializerDefineProperty as __rea_outer_i } from "./rollupPluginModLoBabelHelpers";
import { cclegacy as __rea_outer_s } from "cc";
import { Label as __rea_outer_n } from "cc";
import { Sprite as __rea_outer_o } from "cc";
import { Node as __rea_outer_l } from "cc";
import { SpriteFrame as __rea_outer_a } from "cc";
import { Button as __rea_outer_r } from "cc";
import { _decorator as __rea_outer_h } from "cc";
import { tween as __rea_outer_c } from "cc";
import { UIOpacity as __rea_outer_u } from "cc";
import { Tween as __rea_outer_d } from "cc";
import { Vec3 as __rea_outer_p } from "cc";
import { default as __rea_outer_m } from "./LevelBase";
import { default as __rea_outer_b } from "./AudioManager";
import { I18nController as __rea_outer_f } from "./i18n-controller";
import { UIManager as __rea_outer_g } from "./ui-manager";
import { UIHint as __rea_outer__ } from "./uihint";
import { UIFail as __rea_outer_y } from "./uifail";
import { UILayer as __rea_outer_N } from "./ui-layer";
import { getUIOpacity as __rea_outer_S } from "./CocosCompat";
import { isSpriteRenderable as __rea_outer_v } from "./CocosCompat";
import { stopAllTweens as __rea_outer_B } from "./CocosCompat";
import { stopSpritesTweens as __rea_outer_w } from "./CocosCompat";
import { GameController as __rea_outer_I } from "./GameController";
import { default as __rea_outer_C } from "./ActionSystem";
let __recovered_export_0;
var R, k, F, A, L, V, E, x, T, z, j, P, M, O, K, D, H, U, W, G, $, q, Q, Y, J, X, Z, ee, te, ie, se, ne, oe, le, ae, re, he, ce, ue, de, pe, me, be, fe, ge, _e, ye, Ne, Se, ve, Be, we, Ie, Ce, Re, ke, Fe, Ae, Le;
__rea_outer_s._RF.push({}, "04718HHwYdMHbgPEBOgOlA/", "Level_5", void 0);
const {
    ccclass: Ve,
    property: Ee
  } = __rea_outer_h,
  xe = ["hair", "hat", "tops", "pants", "package", "earring", "shoe", "cosmetics"];
__recovered_export_0 = (R = Ve("Level_5"), k = Ee(__rea_outer_n), F = Ee(__rea_outer_o), A = Ee(__rea_outer_l), L = Ee(__rea_outer_l), V = Ee(__rea_outer_l), E = Ee(__rea_outer_l), x = Ee(__rea_outer_l), T = Ee(__rea_outer_l), z = Ee(__rea_outer_n), j = Ee(__rea_outer_l), P = Ee(__rea_outer_l), M = Ee(__rea_outer_a), O = Ee(__rea_outer_a), K = Ee(__rea_outer_l), D = Ee(__rea_outer_n), H = Ee(__rea_outer_o), U = Ee(__rea_outer_o), W = Ee(__rea_outer_r), G = Ee(__rea_outer_r), $ = Ee(__rea_outer_l), q = Ee(__rea_outer_l), Q = Ee(__rea_outer_l), Y = Ee(__rea_outer_o), J = Ee(__rea_outer_o), X = Ee(__rea_outer_a), Z = Ee(__rea_outer_a), ee = Ee(__rea_outer_o), te = Ee(__rea_outer_a), R((ne = __rea_outer_t((se = class extends __rea_outer_m {
  constructor(...e) {
    super(...e), __rea_outer_i(this, "debugLabel", ne, this), __rea_outer_i(this, "blackSprite", oe, this), __rea_outer_i(this, "SceneNode_1", le, this), __rea_outer_i(this, "SceneNode_2", ae, this), __rea_outer_i(this, "leftItemNode", re, this), __rea_outer_i(this, "rightItemNode", he, this), __rea_outer_i(this, "bubbleLeft", ce, this), __rea_outer_i(this, "bubbleRight", ue, this), __rea_outer_i(this, "TipLabel", de, this), __rea_outer_i(this, "leftitems", pe, this), __rea_outer_i(this, "rightitems", me, this), __rea_outer_i(this, "leftSpriteFrame", be, this), __rea_outer_i(this, "rightSpriteFrame", fe, this), __rea_outer_i(this, "dialog_box", ge, this), __rea_outer_i(this, "dialog_box_label", _e, this), __rea_outer_i(this, "faceSprite_end", ye, this), __rea_outer_i(this, "boyfaceSprite_end", Ne, this), __rea_outer_i(this, "Button_Left", Se, this), __rea_outer_i(this, "Button_Right", ve, this), __rea_outer_i(this, "Select_Left", Be, this), __rea_outer_i(this, "Select_Right", we, this), __rea_outer_i(this, "click_rootNode", Ie, this), __rea_outer_i(this, "replace_items", Ce, this), __rea_outer_i(this, "replaceend_items", Re, this), __rea_outer_i(this, "girlface_items", ke, this), __rea_outer_i(this, "boyface_items", Fe, this), __rea_outer_i(this, "alwaysshow_items", Ae, this), __rea_outer_i(this, "girlface_SpriteFrames", Le, this), this.phase = 0, this.roundindex = 0, this.winstate = !1, this.player_arr = [], this.win_arr = [0, 1, 0, 1, 1, 0, 0, 0], this.hint_arr = ["level5_hint1", "level5_hint2", "level5_hint3", "level5_hint4", "level5_hint5", "level5_hint6", "level5_hint7", "level5_hint8"], this.sounds_select = "5_2", this.sounds_left = "5_6", this.sounds_right = "5_5", this.config_arr = [{
      ID: 0,
      soundkey: "5_1",
      soundType: 1,
      textStrKey: "5_1"
    }, {
      ID: 2,
      soundkey: "5_3",
      soundType: 1,
      textStrKey: "5_3"
    }, {
      ID: 3,
      soundkey: "5_4",
      soundType: 1,
      textStrKey: "5_4"
    }], this.isSelecting = !1, this.isTransitioning = !1, this.hasRoundChosen = !1, this.maleEmoji2Node = null, this.maleEmoji3Node = null, this.hideFaceFeedback = () => {
      if (!this.isValid) return;
      const e = this.replace_items[7];
      e && (e.node.active = !1), this.stopFaceFeedbackAnimation();
    };
  }
  onLoad() {
    super.onLoad(), this.debugLabel && (this.debugLabel.string = "Level 5"), this.resolveNodeReferences(), this.resolveButtonReferences(), this.allItemNum = 8, this.hasInstallNum = 0, this.registerButtonCallbacks(), console.log("[Level_5] loaded");
  }
  start() {
    this.resetLevelState(), this.enterPhase0();
  }
  onDestroy() {
    this.stopBlackTransition(), this.stopFaceFeedbackAnimation(), this.stopDecorationAnimations(), this.stopMaleEmojiAnimations(), this.stopAllLevelSpriteTweens(), this.unschedule(this.hideFaceFeedback), this.unscheduleAllCallbacks(), this.unregisterButtonCallbacks();
  }
  showHint() {
    if (this.roundindex >= 8) return;
    const e = this.hint_arr[this.roundindex],
      t = __rea_outer_f.getInstance().getKey(e);
    __rea_outer_g.getInstance().showView(__rea_outer__, void 0, {
      body: t
    });
  }
  getGameProgressSnapshot() {
    const e = this.win_arr.length,
      t = Math.min(this.roundindex, e);
    return {
      progress: e > 0 ? t / e : 0,
      label: `${t}/${e}`
    };
  }
  resetLevelState() {
    this.phase = 0, this.roundindex = 0, this.winstate = !1, this.player_arr = [], this.isSelecting = !1, this.isTransitioning = !1, this.hasRoundChosen = !1, this.hasInstallNum = 0;
  }
  enterPhase0() {
    var e, t, i, s;
    this.phase = 0, __rea_outer_b.playMusic("bgm4", !0, .5), __rea_outer_C.RoseBreath_tag((null == (e = this.SceneNode_1.getChildByName("bg")) ? void 0 : e.getChildByName("IP")) ?? null, 1, .02, .7, 0, 5), __rea_outer_C.RoseBreath_tag((null == (t = this.SceneNode_2.getChildByName("girlnode")) ? void 0 : t.getChildByName("IP")) ?? null, 1, .02, .7, 0, 5), this.setNodeActive((null == (i = this.blackSprite) ? void 0 : i.node) ?? null, !1), this.setNodeActive(this.SceneNode_2, !1), this.setNodeActive(this.click_rootNode, !1), this.setNodeActive(this.SceneNode_1, !0), this.setSelectionContainersVisible(!1), this.setNodeActive(this.bubbleRight, !1), this.setNodeActive((null == (s = this.TipLabel) ? void 0 : s.node) ?? null, !0), this.setPhase0ReplaceItemsVisible(), this.setAlwaysShowItemsVisible(!0), this.setSelectVisible(!1, !1), this.setButtonsInteractable(!1), this.setMaleEmojiNodesVisible(!1), __rea_outer_b.playEffect_1("5_1"), this.scheduleOnce(() => {
      this.isValid && this.playBlackTransition(() => {
        this.isValid && this.enterPhase1();
      });
    }, 4);
  }
  enterPhase1() {
    var e;
    this.phase = 1, this.hideFaceFeedback(), this.setNodeActive((null == (e = this.TipLabel) ? void 0 : e.node) ?? null, !1), this.setNodeActive(this.bubbleRight, !0), this.setSelectionContainersVisible(!0), this.setNodeActive(this.click_rootNode, !0), this.updateChosenReplaceItemsVisibility(), this.setupRoundInteraction();
  }
  setupRoundInteraction() {
    this.roundindex >= 8 || (this.isSelecting = !1, this.hasRoundChosen = !1, this.updateRoundItemsVisibility(), this.setSelectVisible(!1, !1), __rea_outer_b.playEffect_1(this.sounds_select), this.setButtonsInteractable(!1), this.scheduleOnce(() => {
      this.isValid && this.setButtonsInteractable(!0);
    }, 2), __rea_outer_I.getInstance().refreshGameProgress());
  }
  updateRoundItemsVisibility() {
    this.leftitems.forEach((e, t) => {
      e && (e.active = t === this.roundindex);
    }), this.rightitems.forEach((e, t) => {
      e && (e.active = t === this.roundindex);
    }), this.updateChosenReplaceItemsVisibility(), this.setAlwaysShowItemsVisible(!0);
  }
  updateChosenReplaceItemsVisibility() {
    this.replace_items.forEach((e, t) => {
      e && 7 !== t && (e.node.active = t < this.roundindex);
    }), this.replaceend_items.forEach((e, t) => {
      e && (e.node.active = t < this.roundindex);
    });
  }
  applyReplaceItemAtIndex(e, t) {
    if (!t) return;
    const i = this.replace_items[e];
    i && (i.spriteFrame = t, i.node.active = !0);
    const s = this.replaceend_items[e];
    s && (s.spriteFrame = t, s.node.active = !0);
  }
  onLeftButtonClick() {
    this.canSelectInCurrentRound() && (this.lockRoundSelection(), this.applySelection(1));
  }
  onRightButtonClick() {
    this.canSelectInCurrentRound() && (this.lockRoundSelection(), this.applySelection(0));
  }
  canSelectInCurrentRound() {
    return 1 === this.phase && !this.isSelecting && !this.hasRoundChosen && !this.isTransitioning && this.roundindex < 8;
  }
  lockRoundSelection() {
    this.isSelecting = !0, this.hasRoundChosen = !0, this.setButtonsInteractable(!1);
  }
  applySelection(e) {
    const t = this.roundindex,
      i = 1 === e;
    this.setSelectVisible(i, !i), __rea_outer_b.playEffect_1(i ? this.sounds_left : this.sounds_right), this.player_arr[t] = e;
    const s = i ? this.leftSpriteFrame[t] : this.rightSpriteFrame[t];
    this.applyReplaceItemAtIndex(t, s), 1 === this.phase && t <= 6 && this.playRoundMatchFeedback(t), this.roundindex += 1, __rea_outer_I.getInstance().refreshGameProgress(), this.TryQuickWin() || (this.roundindex >= 8 ? this.scheduleOnce(() => {
      this.isValid && this.playBlackTransition(() => {
        this.isValid && this.enterPhase2();
      });
    }, 2) : this.scheduleOnce(() => {
      this.isValid && this.setupRoundInteraction();
    }, 2));
  }
  playRoundMatchFeedback(e) {
    const t = this.replace_items[7];
    if (!t) return;
    const i = this.player_arr[e] === this.win_arr[e] ? this.girlface_SpriteFrames[0] : this.girlface_SpriteFrames[1];
    i && (this.unschedule(this.hideFaceFeedback), this.stopFaceFeedbackAnimation(), t.spriteFrame = i, t.node.active = !0, this.playFaceFeedbackAnimation(t.node), this.scheduleOnce(this.hideFaceFeedback, 1));
  }
  playFaceFeedbackAnimation(e) {
    this.stopFaceFeedbackAnimation();
    const t = __rea_outer_S(e);
    t.opacity = 0, __rea_outer_c(t).to(.2, {
      opacity: 255
    }).start();
  }
  stopFaceFeedbackAnimation() {
    var e;
    const t = null == (e = this.replace_items[7]) ? void 0 : e.node;
    if (null == t || !t.isValid) return;
    const i = t.getComponent(__rea_outer_u);
    i && (__rea_outer_d.stopAllByTarget(i), i.opacity = 255);
  }
  enterPhase2() {
    this.hideFaceFeedback(), this.phase = 2, this.winstate = this.checkWinState(), this.setNodeActive(this.SceneNode_1, !1), this.setNodeActive(this.click_rootNode, !1), this.setNodeActive(this.dialog_box, !1), this.setNodeActive(this.SceneNode_2, !0), this.scheduleOnce(() => {
      this.isValid && this.showEndDialog();
    }, 1), this.scheduleOnce(() => {
      this.isValid && this.showEndFace();
    }, 3), this.scheduleOnce(() => {
      this.isValid && this.showResultUi();
    }, 5);
  }
  markAllTasksCompleted() {
    super.markAllTasksCompleted(), this.phase = 2, this.winstate = !0, this.roundindex = 8, this.isSelecting = !0, this.hasRoundChosen = !0, this.isTransitioning = !1, this.setButtonsInteractable(!1);
  }
  checkWinState() {
    if (this.player_arr.length < 8) return !1;
    for (let e = 0; e < 8; e += 1) if (this.player_arr[e] !== this.win_arr[e]) return !1;
    return !0;
  }
  showEndDialog() {
    this.setNodeActive(this.dialog_box, !0);
    const e = __rea_outer_f.getInstance();
    if (this.winstate) {
      const t = this.config_arr[1];
      return this.dialog_box_label && (this.dialog_box_label.string = e.getKey(t.textStrKey)), __rea_outer_b.playEffect_1(t.soundkey), this.setSpriteFrame(this.boyfaceSprite_end, this.boyface_items[0]), void this.showMaleEmojiWithHeartbeat();
    }
    const t = this.config_arr[2];
    this.dialog_box_label && (this.dialog_box_label.string = e.getKey(t.textStrKey)), __rea_outer_b.playEffect_1(t.soundkey), this.setSpriteFrame(this.boyfaceSprite_end, this.boyface_items[1]);
  }
  showEndFace() {
    if (this.winstate) return void this.setSpriteFrame(this.faceSprite_end, this.girlface_items[0]);
    const e = 0 === this.player_arr[7] ? 1 : 2;
    this.setSpriteFrame(this.faceSprite_end, this.girlface_items[e]);
  }
  showResultUi() {
    this.winstate ? this.showLevelSuccess() : __rea_outer_g.getInstance().showView(__rea_outer_y, __rea_outer_N.WIN_ANIMATION);
  }
  playBlackTransition(e) {
    if (!this.blackSprite) return void e();
    this.isTransitioning = !0, this.stopBlackTransition();
    const t = this.blackSprite.node;
    t.active = !0;
    const i = __rea_outer_S(t);
    i.opacity = 150, __rea_outer_c(i).to(.3, {
      opacity: 255
    }).delay(.2).to(.3, {
      opacity: 0
    }).call(() => {
      this.isValid && t.isValid && (t.active = !1, this.isTransitioning = !1, e());
    }).start();
  }
  stopBlackTransition() {
    var e;
    const t = null == (e = this.blackSprite) ? void 0 : e.node;
    if (null == t || !t.isValid) return;
    __rea_outer_d.stopAllByTarget(t);
    const i = t.getComponent(__rea_outer_u);
    i && __rea_outer_d.stopAllByTarget(i);
  }
  setPhase0ReplaceItemsVisible() {
    this.replace_items.forEach((e, t) => {
      null != e && e.node && (e.node.active = 2 === t && __rea_outer_v(e));
    }), this.replaceend_items.forEach((e, t) => {
      null != e && e.node && (e.node.active = 2 === t && __rea_outer_v(e));
    });
  }
  setMaleEmojiNodesVisible(e) {
    this.setNodeActive(this.maleEmoji2Node, e), this.setNodeActive(this.maleEmoji3Node, e);
  }
  showMaleEmojiWithHeartbeat() {
    this.stopMaleEmojiAnimations(), this.setMaleEmojiNodesVisible(!0), [this.maleEmoji2Node, this.maleEmoji3Node].forEach(e => {
      if (null == e || !e.isValid) return;
      const t = e.scale.clone(),
        i = new __rea_outer_p(1.5 * t.x, 1.5 * t.y, t.z);
      __rea_outer_c(e).tag(6).sequence(__rea_outer_c().to(.35, {
        scale: i
      }), __rea_outer_c().to(.35, {
        scale: t
      }), __rea_outer_c().delay(0)).repeatForever().start();
    });
  }
  stopMaleEmojiAnimations() {
    __rea_outer_d.stopAllByTag(6), [this.maleEmoji2Node, this.maleEmoji3Node].forEach(e => {
      null != e && e.isValid && __rea_outer_B(e);
    });
  }
  stopDecorationAnimations() {
    var e, t;
    if (__rea_outer_d.stopAllByTag(5), null != (e = this.SceneNode_1) && e.isValid) {
      const e = this.SceneNode_1.getChildByName("bg"),
        t = null != e && e.isValid ? e.getChildByName("IP") : null;
      null != t && t.isValid && __rea_outer_B(t);
    }
    if (null != (t = this.SceneNode_2) && t.isValid) {
      const e = this.SceneNode_2.getChildByName("girlnode"),
        t = null != e && e.isValid ? e.getChildByName("IP") : null;
      null != t && t.isValid && __rea_outer_B(t);
    }
  }
  stopAllLevelSpriteTweens() {
    __rea_outer_w(this.replace_items), __rea_outer_w(this.replaceend_items), __rea_outer_w(this.alwaysshow_items), __rea_outer_w([this.blackSprite, this.faceSprite_end, this.boyfaceSprite_end]);
  }
  resolveButtonReferences() {
    if (this.Button_Left && this.Button_Right && this.Button_Left.node.position.x > this.Button_Right.node.position.x) {
      const e = this.Button_Left;
      this.Button_Left = this.Button_Right, this.Button_Right = e;
    }
  }
  resolveNodeReferences() {
    if (!this.leftItemNode && this.leftitems.length > 0 && this.leftitems[0] && (this.leftItemNode = this.leftitems[0].parent), !this.rightItemNode && this.rightitems.length > 0 && this.rightitems[0] && (this.rightItemNode = this.rightitems[0].parent), 0 === this.replace_items.length && this.SceneNode_1 && (this.replace_items = this.collectClothingSprites(this.SceneNode_1, !1)), 0 === this.replaceend_items.length && this.SceneNode_2 && (this.replaceend_items = this.collectClothingSprites(this.SceneNode_2, !0)), 0 === this.alwaysshow_items.length && this.SceneNode_1) {
      const e = this.findNodeByName(this.SceneNode_1, "IP"),
        t = (null == e ? void 0 : e.getComponent(__rea_outer_o)) ?? null;
      t && (this.alwaysshow_items = [t]);
    }
    if (this.SceneNode_2) {
      const e = this.SceneNode_2.getChildByName("boynode");
      e && (this.maleEmoji2Node || (this.maleEmoji2Node = e.getChildByName("male_emoji_2")), this.maleEmoji3Node || (this.maleEmoji3Node = e.getChildByName("male_emoji_3")));
    }
  }
  collectClothingSprites(e, t) {
    const i = [];
    return xe.forEach(s => {
      const n = this.findClothingPartNode(e, s, t),
        l = (null == n ? void 0 : n.getComponent(__rea_outer_o)) ?? null;
      l && i.push(l);
    }), i;
  }
  findClothingPartNode(e, t, i) {
    if (i) {
      const i = this.findNodeByName(e, "girlnode") ?? e;
      return i.getChildByName(t) ?? i.getChildByName(`${t}_1`) ?? this.findNodeByName(i, t);
    }
    const s = this.findNodeByName(e, "bg") ?? e;
    return s.getChildByName(t) ?? this.findNodeByName(s, t);
  }
  findNodeByName(e, t) {
    if (e.name === t) return e;
    for (const i of e.children) {
      const e = this.findNodeByName(i, t);
      if (e) return e;
    }
    return null;
  }
  getLeftItemsContainer() {
    var e;
    return this.leftItemNode ?? (null == (e = this.leftitems[0]) ? void 0 : e.parent) ?? null;
  }
  getRightItemsContainer() {
    var e;
    return this.rightItemNode ?? (null == (e = this.rightitems[0]) ? void 0 : e.parent) ?? null;
  }
  setSelectionContainersVisible(e) {
    this.setNodeActive(this.getLeftItemsContainer(), e), this.setNodeActive(this.getRightItemsContainer(), e);
  }
  setAlwaysShowItemsVisible(e) {
    this.alwaysshow_items.forEach(t => {
      t && (t.node.active = e);
    });
  }
  setSelectVisible(e, t) {
    this.Select_Left && (this.Select_Left.active = e), this.Select_Right && (this.Select_Right.active = t);
  }
  setButtonsInteractable(e) {
    this.Button_Left && (this.Button_Left.interactable = e), this.Button_Right && (this.Button_Right.interactable = e);
  }
  setNodeActive(e, t) {
    e && (e.active = t);
  }
  setSpriteFrame(e, t) {
    null != e && e.isValid && null != t && t.isValid && (e.spriteFrame = t);
  }
  registerButtonCallbacks() {
    this.Button_Left && this.Button_Left.node.on(__rea_outer_r.EventType.CLICK, this.onLeftButtonClick, this), this.Button_Right && this.Button_Right.node.on(__rea_outer_r.EventType.CLICK, this.onRightButtonClick, this);
  }
  unregisterButtonCallbacks() {
    var e, t;
    null != (e = this.Button_Left) && null != (e = e.node) && e.isValid && this.Button_Left.node.off(__rea_outer_r.EventType.CLICK, this.onLeftButtonClick, this), null != (t = this.Button_Right) && null != (t = t.node) && t.isValid && this.Button_Right.node.off(__rea_outer_r.EventType.CLICK, this.onRightButtonClick, this);
  }
}).prototype, "debugLabel", [k], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), oe = __rea_outer_t(se.prototype, "blackSprite", [F], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), le = __rea_outer_t(se.prototype, "SceneNode_1", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ae = __rea_outer_t(se.prototype, "SceneNode_2", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), re = __rea_outer_t(se.prototype, "leftItemNode", [V], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), he = __rea_outer_t(se.prototype, "rightItemNode", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ce = __rea_outer_t(se.prototype, "bubbleLeft", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ue = __rea_outer_t(se.prototype, "bubbleRight", [T], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), de = __rea_outer_t(se.prototype, "TipLabel", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), pe = __rea_outer_t(se.prototype, "leftitems", [j], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), me = __rea_outer_t(se.prototype, "rightitems", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), be = __rea_outer_t(se.prototype, "leftSpriteFrame", [M], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), fe = __rea_outer_t(se.prototype, "rightSpriteFrame", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), ge = __rea_outer_t(se.prototype, "dialog_box", [K], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), _e = __rea_outer_t(se.prototype, "dialog_box_label", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ye = __rea_outer_t(se.prototype, "faceSprite_end", [H], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Ne = __rea_outer_t(se.prototype, "boyfaceSprite_end", [U], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Se = __rea_outer_t(se.prototype, "Button_Left", [W], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ve = __rea_outer_t(se.prototype, "Button_Right", [G], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Be = __rea_outer_t(se.prototype, "Select_Left", [$], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), we = __rea_outer_t(se.prototype, "Select_Right", [q], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Ie = __rea_outer_t(se.prototype, "click_rootNode", [Q], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Ce = __rea_outer_t(se.prototype, "replace_items", [Y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), Re = __rea_outer_t(se.prototype, "replaceend_items", [J], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), ke = __rea_outer_t(se.prototype, "girlface_items", [X], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), Fe = __rea_outer_t(se.prototype, "boyface_items", [Z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), Ae = __rea_outer_t(se.prototype, "alwaysshow_items", [ee], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), Le = __rea_outer_t(se.prototype, "girlface_SpriteFrames", [te], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), ie = se)) || ie);
__rea_outer_s._RF.pop();
export { __recovered_export_0 as default };
