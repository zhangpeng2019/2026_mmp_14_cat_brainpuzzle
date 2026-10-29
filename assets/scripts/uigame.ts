// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/uigame.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { applyDecoratedDescriptor as __rea_outer_e } from "./rollupPluginModLoBabelHelpers";
import { initializerDefineProperty as __rea_outer_i } from "./rollupPluginModLoBabelHelpers";
import { cclegacy as __rea_outer_s } from "cc";
import { Button as __rea_outer_n } from "cc";
import { Label as __rea_outer_r } from "cc";
import { ProgressBar as __rea_outer_o } from "cc";
import { Node as __rea_outer_a } from "cc";
import { _decorator as __rea_outer_l } from "cc";
import { sys as __rea_outer_u } from "cc";
import { view as __rea_outer_h } from "cc";
import { Widget as __rea_outer_c } from "cc";
import { GameController as __rea_outer_d } from "./GameController";
import { AdsController as __rea_outer__ } from "./ads-controller";
import { DataManager as __rea_outer_g } from "./data-manager";
import { GameDefine as __rea_outer_m } from "./game-define";
import { getAdLoad as __rea_outer_p } from "./funjoy-max";
import { parseRewardOrNativeReadyFromAdLoadDetail as __rea_outer_T } from "./funjoy-max";
import { AD_TYPE_REWARDED as __rea_outer_f } from "./funjoy-max";
import "./index2";
import { UIManager as __rea_outer_b } from "./ui-manager";
import { UIBase as __rea_outer_y } from "./ui-base";
import { UIPause as __rea_outer_B } from "./uipause";
import { StarRating as __rea_outer_H } from "./star-rating";
import { HINT_TYPE_RULE as __rea_outer_v } from "./level-config";
import { TAHelper as __rea_outer_C } from "./ta-helper";
let __recovered_export_0;
var P, I, A, R, N, k, L, S, V, w, G, E, M, D, z, U, W, x, F, O, K, Y, X, j, $, q, J;
__rea_outer_s._RF.push({}, "b8b35od9FNI97ZqDtxAJwtv", "uigame", void 0);
const {
    ccclass: Z,
    property: Q
  } = __rea_outer_l,
  tt = __rea_outer_m.PROP_TYPES.Hint;
__recovered_export_0 = (P = Z("UIGame"), I = Q(__rea_outer_n), A = Q(__rea_outer_n), R = Q(__rea_outer_n), N = Q(__rea_outer_r), k = Q(__rea_outer_r), L = Q(__rea_outer_r), S = Q(__rea_outer_o), V = Q(__rea_outer_o), w = Q(__rea_outer_a), G = Q(__rea_outer_a), E = Q(__rea_outer_a), M = Q(__rea_outer_a), P((U = __rea_outer_e((z = class extends __rea_outer_y {
  constructor(...t) {
    super(...t), __rea_outer_i(this, "Button_back", U, this), __rea_outer_i(this, "Button_Hint", W, this), __rea_outer_i(this, "Button_Reset", x, this), __rea_outer_i(this, "ProgressLabel_Time", F, this), __rea_outer_i(this, "ProgressLabel", O, this), __rea_outer_i(this, "Label_Title", K, this), __rea_outer_i(this, "ProgressBar_Game", Y, this), __rea_outer_i(this, "ProgressBar_Time", X, this), __rea_outer_i(this, "Node_HintAd", j, this), __rea_outer_i(this, "Node_LevelGame", $, this), __rea_outer_i(this, "Node_Top", q, this), __rea_outer_i(this, "Node_Bottom", J, this), this._isWatchingHintAd = !1, this._isTutorialRun = !1, this._isTutorialGuiding = !1, this._hintType = 0, this._nodeTimeInfinity = null, this._nodeTimeBar = null, this._defaultHintVisible = !0, this._starNodes = [], this._starApplyToken = 0;
  }
  onLoad() {
    super.onLoad(), this.resolveResetButton(), this.hideTimeInfinityByDefault(), this.applyTopSafeArea();
  }
  applyHudSnapshot(t) {
    this.cacheTimeBarNodes(), this._isTutorialRun = t.isTutorialRun, this._isTutorialGuiding = t.isTutorialGuiding, this._hintType = t.hintType, this._defaultHintVisible = t.isHintVisible, this.Label_Title && (this.Label_Title.string = t.title), this.setGameProgress(t.gameProgress, t.gameProgressLabel), this.setTimeProgress(t.timeProgress, t.timeProgressLabel), this.setStarCount(t.starCount), this.applyTimeBarMode(t.isTimeVisible), this.applyChromeVisibility(), this.refreshHintAdVisibility();
  }
  applyTutorialChrome(t) {
    this._isTutorialRun = t.isTutorialRun, this._isTutorialGuiding = t.isTutorialGuiding, this.applyChromeVisibility(), this.refreshHintAdVisibility();
  }
  setGameProgress(t, e) {
    const i = Math.min(1, Math.max(0, t));
    this.ProgressBar_Game && (this.ProgressBar_Game.progress = i), this.ProgressLabel && (this.ProgressLabel.string = e ?? `${Math.floor(100 * i)}%`);
  }
  setTimeProgress(t, e) {
    if (this._isTutorialRun) return;
    const i = Math.min(1, Math.max(0, t));
    this.ProgressBar_Time && (this.ProgressBar_Time.progress = i), this.ProgressLabel_Time && void 0 !== e && (this.ProgressLabel_Time.string = e);
  }
  setStarCount(t) {
    const e = Math.max(0, Math.min(__rea_outer_H.COUNT_MAX, Math.floor(t)));
    this._starApplyToken += 1;
    const i = this._starApplyToken;
    this.applyStarCount(e, i);
  }
  async applyStarCount(t, e) {
    const i = await __rea_outer_H.loadAtlas(__rea_outer_H.GAME_ATLAS_PATH);
    if (!i || !this.isValid || e !== this._starApplyToken) return;
    const s = i.getSpriteFrame(__rea_outer_H.GAME_STAR_SPRITE),
      n = i.getSpriteFrame(__rea_outer_H.GAME_STAR_EMPTY_SPRITE);
    s && n && __rea_outer_H.applySprites(this.resolveStarNodes(), t, s, n);
  }
  resolveStarNodes() {
    var t;
    if (this._starNodes.length === __rea_outer_H.COUNT_MAX && this._starNodes.every(t => t.isValid)) return this._starNodes;
    const e = (null == (t = this.ProgressBar_Time) ? void 0 : t.node.getChildByName("starts")) ?? null;
    if (!e) return this._starNodes = [], this._starNodes;
    const i = [];
    for (let t = 1; t <= __rea_outer_H.COUNT_MAX; t += 1) {
      const s = e.getChildByName(`game_star${t}`);
      s && i.push(s);
    }
    return this._starNodes = i, this._starNodes;
  }
  registerCallbacks() {
    this.Button_back && this.Button_back.node.on(__rea_outer_n.EventType.CLICK, this.onBackClick, this), this.Button_Hint && this.Button_Hint.node.on(__rea_outer_n.EventType.CLICK, this.onHintClick, this), this.Button_Reset && this.Button_Reset.node.on(__rea_outer_n.EventType.CLICK, this.onResetClick, this);
  }
  unregisterCallbacks() {
    this.Button_back && this.Button_back.node.off(__rea_outer_n.EventType.CLICK, this.onBackClick, this), this.Button_Hint && this.Button_Hint.node.off(__rea_outer_n.EventType.CLICK, this.onHintClick, this), this.Button_Reset && this.Button_Reset.node.off(__rea_outer_n.EventType.CLICK, this.onResetClick, this);
  }
  onBackClick() {
    var t;
    const e = __rea_outer_b.getInstance().getView(__rea_outer_B);
    null != e && null != (t = e.node) && t.active || __rea_outer_b.getInstance().showView(__rea_outer_B);
  }
  onResetClick() {
    __rea_outer_d.getInstance().resetCurrentLevel();
  }
  resolveResetButton() {
    var t;
    if (this.Button_Reset) return;
    const e = (null == (t = this.Node_Bottom) ? void 0 : t.getChildByName("Button_Reset")) ?? null;
    this.Button_Reset = (null == e ? void 0 : e.getComponent(__rea_outer_n)) ?? null;
  }
  onHintClick() {
    if (this._isTutorialRun || this.isRuleHint()) return void __rea_outer_d.getInstance().showHint();
    const t = __rea_outer_g.getInstance();
    t.getHintCount() > 0 ? t.consumeHint() && (this.trackHintPropUse(), __rea_outer_d.getInstance().recordHintConsumed(), this.refreshHintAdVisibility(), __rea_outer_d.getInstance().showHint()) : this.OnClickAd();
  }
  OnClickAd() {
    if (this._isWatchingHintAd) return;
    const t = __rea_outer_m.ADS.FREE_HINT,
      e = __rea_outer__.getInstance();
    __rea_outer_p(__rea_outer_f, i => {
      __rea_outer_C.getInstance().trackAdsClickWithDetail(t, i);
      __rea_outer_T(i) || e.isRewardedVideoReady(t) || e.isNativeAdReady(t) ? (this._isWatchingHintAd = !0, __rea_outer_d.getInstance().pauseTimer(), e.showRewardedVideo(t, () => {
        this._isWatchingHintAd = !1;
        const t = __rea_outer_g.getInstance();
        if (t.grantHint(1), this.trackHintPropGet(1), t.consumeHint()) return this.trackHintPropUse(), __rea_outer_d.getInstance().recordHintConsumed(), this.refreshHintAdVisibility(), void __rea_outer_d.getInstance().showHint();
        __rea_outer_d.getInstance().resumeTimer();
      }, () => {
        this._isWatchingHintAd = !1, __rea_outer_d.getInstance().resumeTimer();
      })) : e.showRewardedVideoNotReadyTip();
    });
  }
  trackHintPropGet(t) {
    const e = __rea_outer_g.getInstance().getSelectedLevelId(),
      i = __rea_outer_g.getInstance().getHintCount();
    __rea_outer_C.getInstance().trackPropsGet(e, tt, t, i);
  }
  trackHintPropUse() {
    const t = __rea_outer_g.getInstance().getSelectedLevelId(),
      e = __rea_outer_g.getInstance().getHintCount();
    __rea_outer_C.getInstance().trackPropsUse(t, tt, 1, e);
  }
  refreshHintAdVisibility() {
    if (!this.Node_HintAd) return;
    if (this._isTutorialRun || this.isRuleHint()) return void (this.Node_HintAd.active = !1);
    const t = !(__rea_outer_g.getInstance().getHintCount() > 0);
    this.Node_HintAd.active = t, t && __rea_outer_C.getInstance().trackAdsShow(__rea_outer_m.ADS.FREE_HINT);
  }
  isRuleHint() {
    return this._hintType === __rea_outer_v;
  }
  applyChromeVisibility() {
    const t = !this._isTutorialGuiding,
      e = !this._isTutorialGuiding && this._defaultHintVisible;
    this.Button_back && (this.Button_back.node.active = t), this.Button_Hint && (this.Button_Hint.node.active = e), this.Button_Reset && (this.Button_Reset.node.active = t);
  }
  applyTimeBarMode(t) {
    var e, i;
    this.cacheTimeBarNodes(), this.ProgressBar_Time && (this.ProgressBar_Time.node.active = t);
    const s = t && this._isTutorialRun;
    if (null != (e = this._nodeTimeInfinity) && e.isValid && (this._nodeTimeInfinity.active = s), t) {
      var n;
      if (this._isTutorialRun) return this.ProgressBar_Time && (this.ProgressBar_Time.progress = 1), this.ProgressLabel_Time && (this.ProgressLabel_Time.node.active = !1), void (null != (n = this._nodeTimeBar) && n.isValid && (this._nodeTimeBar.active = !1));
      this.ProgressLabel_Time && (this.ProgressLabel_Time.node.active = !0), null != (i = this._nodeTimeBar) && i.isValid && (this._nodeTimeBar.active = !0);
    }
  }
  cacheTimeBarNodes() {
    var t, e, i;
    const s = (null == (t = this.ProgressBar_Time) ? void 0 : t.node) ?? null;
    null != s && s.isValid && (null != (e = this._nodeTimeInfinity) && e.isValid || (this._nodeTimeInfinity = s.getChildByName("game_progress_4")), null != (i = this._nodeTimeBar) && i.isValid || (this._nodeTimeBar = s.getChildByName("Bar")));
  }
  applyTopSafeArea() {
    const t = this.getSafeAreaTopInset();
    t <= 0 || (this.addWidgetTop(this.Node_Top, t), this.addWidgetTop(this.Node_LevelGame, t));
  }
  getSafeAreaTopInset() {
    if ("function" != typeof __rea_outer_u.getSafeAreaRect) return 0;
    const t = __rea_outer_h.getVisibleSize(),
      e = __rea_outer_u.getSafeAreaRect();
    return Math.max(0, t.height - e.y - e.height);
  }
  addWidgetTop(t, e) {
    if (null == t || !t.isValid) return;
    const i = t.getComponent(__rea_outer_c);
    i && (i.top += e, i.updateAlignment());
  }
  hideTimeInfinityByDefault() {
    var t;
    this.cacheTimeBarNodes(), null != (t = this._nodeTimeInfinity) && t.isValid && (this._nodeTimeInfinity.active = !1);
  }
}).prototype, "Button_back", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), W = __rea_outer_e(z.prototype, "Button_Hint", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), x = __rea_outer_e(z.prototype, "Button_Reset", [R], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), F = __rea_outer_e(z.prototype, "ProgressLabel_Time", [N], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), O = __rea_outer_e(z.prototype, "ProgressLabel", [k], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), K = __rea_outer_e(z.prototype, "Label_Title", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Y = __rea_outer_e(z.prototype, "ProgressBar_Game", [S], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), X = __rea_outer_e(z.prototype, "ProgressBar_Time", [V], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), j = __rea_outer_e(z.prototype, "Node_HintAd", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), $ = __rea_outer_e(z.prototype, "Node_LevelGame", [G], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), q = __rea_outer_e(z.prototype, "Node_Top", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), J = __rea_outer_e(z.prototype, "Node_Bottom", [M], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), D = z)) || D);
__rea_outer_s._RF.pop();
export { __recovered_export_0 as UIGame };
