// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/uisuccess.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { applyDecoratedDescriptor as __rea_outer_e } from "./rollupPluginModLoBabelHelpers";
import { initializerDefineProperty as __rea_outer_n } from "./rollupPluginModLoBabelHelpers";
import { cclegacy as __rea_outer_i } from "cc";
import { Button as __rea_outer_s } from "cc";
import { Sprite as __rea_outer_o } from "cc";
import { Label as __rea_outer_a } from "cc";
import { _decorator as __rea_outer_r } from "cc";
import { Tween as __rea_outer_l } from "cc";
import { Vec3 as __rea_outer_h } from "cc";
import { tween as __rea_outer_c } from "cc";
import { Node as __rea_outer_u } from "cc";
import { UITransform as __rea_outer_d } from "cc";
import { default as __rea_outer_p } from "./BaseData";
import { default as __rea_outer_S } from "./LevelManager";
import { I18nController as __rea_outer__ } from "./i18n-controller";
import { GameDefine as __rea_outer_m } from "./game-define";
import { AudioManager as __rea_outer_g } from "./audio-manager";
import { GameManager as __rea_outer_f } from "./game-manager";
import { DataManager as __rea_outer_v } from "./data-manager";
import { GameController as __rea_outer_I } from "./GameController";
import "./index2";
import { UIManager as __rea_outer_N } from "./ui-manager";
import { UIBase as __rea_outer_L } from "./ui-base";
import { StarRating as __rea_outer_y } from "./star-rating";
import { TAHelper as __rea_outer_B } from "./ta-helper";
let __recovered_export_0;
var T, C, P, A, b, E, x, H, k, R, O;
__rea_outer_i._RF.push({}, "c7f3aiSTV5LGpyPLm0aW48D", "uisuccess", void 0);
const {
  ccclass: V,
  property: w
} = __rea_outer_r;
__recovered_export_0 = (T = V("UISuccess"), C = w(__rea_outer_s), P = w(__rea_outer_s), A = w(__rea_outer_o), b = w(__rea_outer_a), T((H = __rea_outer_e((x = class t extends __rea_outer_L {
  constructor(...t) {
    super(...t), __rea_outer_n(this, "Button_Home", H, this), __rea_outer_n(this, "Button_Next", k, this), __rea_outer_n(this, "LevelSprite", R, this), __rea_outer_n(this, "LevelName", O, this), this._levelId = 0, this._homeButtonOriginalPosition = null, this._hasTrackedLevelVictory = !1, this._earnedStarCount = 0, this._hasCapturedStars = !1, this._isStarVisualReady = !1, this._isWaitingToPlayStars = !1, this._hasPlayedStarAppear = !1, this._settlementStarNodes = [], this._litStarFrame = null, this._starPrepareToken = 0;
  }
  onLoad() {
    this.preparePopupStructure(), super.onLoad(), this.resolveReferences(), this.disableLevelCardInteraction(), this.hideSettlementStars(), __rea_outer_y.loadAtlas(__rea_outer_y.GENERAL_ATLAS_PATH), __rea_outer_g.getInstance().preloadAudioClips([__rea_outer_m.SOUNDS.XING]);
  }
  onDisable() {
    this.resetStarAppearState(), super.onDisable();
  }
  show() {
    this._hasTrackedLevelVictory = !1, super.show(), __rea_outer_g.getInstance().playEffect(__rea_outer_m.SOUNDS.GAME_WIN), this.scheduleOnce(() => {
      this.node.active && this.doPopAppear(() => {
        this._isWaitingToPlayStars = !0, this.playStarAppearIfReady();
      });
    }, 0);
  }
  refreshView() {
    this._levelId = __rea_outer_v.getInstance().getSelectedLevelId(), this.trackLevelVictoryIfNeeded(), this.captureEarnedStars(), __rea_outer_v.getInstance().markLevelCompleted(this._levelId), __rea_outer_S.getInstance().boostPreloadForNextLevel(this._levelId), this.refreshLevelInfo(), this.refreshNextButtonState();
  }
  captureEarnedStars() {
    this._hasCapturedStars || (this._hasCapturedStars = !0, this._earnedStarCount = __rea_outer_I.getInstance().getEarnedStarCount(), __rea_outer_v.getInstance().recordLevelStars(this._levelId, this._earnedStarCount), this._starPrepareToken += 1, this.prepareSettlementStars(this._starPrepareToken));
  }
  async prepareSettlementStars(t) {
    const e = this.resolveSettlementStars();
    this.hideSettlementStars();
    const n = await __rea_outer_y.loadAtlas(__rea_outer_y.GENERAL_ATLAS_PATH);
    if (!n || !this.isValid || t !== this._starPrepareToken) return;
    const i = n.getSpriteFrame(__rea_outer_y.SETTLEMENT_STAR_SPRITE),
      s = n.getSpriteFrame(__rea_outer_y.SETTLEMENT_STAR_EMPTY_SPRITE);
    i && s && (this._litStarFrame = i, __rea_outer_y.applySprites(e, 0, i, s), this._isStarVisualReady = !0, this.playStarAppearIfReady());
  }
  playStarAppearIfReady() {
    if (!this._isStarVisualReady || !this._isWaitingToPlayStars || this._hasPlayedStarAppear) return;
    this._hasPlayedStarAppear = !0;
    const t = this.resolveSettlementStars(),
      e = .5 * __rea_outer_y.LIGHT_DURATION,
      n = __rea_outer_y.LIGHT_DURATION + __rea_outer_y.LIGHT_PAUSE;
    for (let i = 0; i < t.length; i += 1) {
      const s = t[i];
      __rea_outer_l.stopAllByTarget(s), s.setScale(__rea_outer_h.ONE), i >= this._earnedStarCount || this.playStarLight(s, i * n, e);
    }
  }
  playStarLight(t, e, n) {
    const i = new __rea_outer_h(__rea_outer_y.LIGHT_SCALE, __rea_outer_y.LIGHT_SCALE, 1);
    __rea_outer_c(t).delay(e).call(() => {
      this.applyLitSettlementStar(t), __rea_outer_g.getInstance().playEffect(__rea_outer_m.SOUNDS.XING);
    }).to(n, {
      scale: i
    }, {
      easing: "sineOut"
    }).to(n, {
      scale: __rea_outer_h.ONE
    }, {
      easing: "sineIn"
    }).start();
  }
  applyLitSettlementStar(t) {
    const e = t.getComponent(__rea_outer_o);
    this._litStarFrame && e && (e.spriteFrame = this._litStarFrame);
  }
  hideSettlementStars() {
    for (const t of this.resolveSettlementStars()) __rea_outer_l.stopAllByTarget(t), t.setScale(0, 0, 0);
  }
  resetStarAppearState() {
    this._hasCapturedStars = !1, this._isStarVisualReady = !1, this._isWaitingToPlayStars = !1, this._hasPlayedStarAppear = !1, this._litStarFrame = null, this.hideSettlementStars();
  }
  resolveSettlementStars() {
    if (this._settlementStarNodes.length === __rea_outer_y.COUNT_MAX && this._settlementStarNodes.every(t => t.isValid)) return this._settlementStarNodes;
    const t = this.findNodeByName(this.node, "settlement_title"),
      e = (null == t ? void 0 : t.getChildByName("stars")) ?? null;
    if (!e) return this._settlementStarNodes = [], this._settlementStarNodes;
    const n = [];
    for (let t = 1; t <= __rea_outer_y.COUNT_MAX; t += 1) {
      const i = e.getChildByName(`start${t}`);
      i && n.push(i);
    }
    return this._settlementStarNodes = n, this._settlementStarNodes;
  }
  trackLevelVictoryIfNeeded() {
    if (this._hasTrackedLevelVictory) return;
    this._hasTrackedLevelVictory = !0;
    const t = __rea_outer_I.getInstance().getLevelSessionStats();
    __rea_outer_B.getInstance().trackLevelVictory(this._levelId, t.hintUsed, t.duration);
  }
  registerCallbacks() {
    this.Button_Home && this.Button_Home.node.on(__rea_outer_s.EventType.CLICK, this.onHomeClick, this), this.Button_Next && this.Button_Next.node.on(__rea_outer_s.EventType.CLICK, this.onNextClick, this);
  }
  unregisterCallbacks() {
    this.Button_Home && this.Button_Home.node.off(__rea_outer_s.EventType.CLICK, this.onHomeClick, this), this.Button_Next && this.Button_Next.node.off(__rea_outer_s.EventType.CLICK, this.onNextClick, this);
  }
  onHomeClick() {
    __rea_outer_B.getInstance().trackLevelVictoryBtn(this._levelId, "Lobby"), this.showInterstitialThen(() => {
      this.hideWithPopDisappear(() => {
        __rea_outer_N.getInstance().hideView(t), __rea_outer_f.getInstance().enterLobby();
      });
    }, __rea_outer_m.ADS.GAMEOVER_INTER);
  }
  onNextClick() {
    __rea_outer_B.getInstance().trackLevelVictoryBtn(this._levelId, "Next");
    const e = this.getNextLevelId(this._levelId);
    this.showInterstitialThen(() => {
      this.hideWithPopDisappear(() => {
        __rea_outer_N.getInstance().hideView(t), __rea_outer_v.getInstance().SetSelectedLevelId(e), __rea_outer_f.getInstance().enterGameModeForSelectedLevel("Next");
      });
    }, __rea_outer_m.ADS.GAMEOVER_NEXT_INTER);
  }
  async refreshLevelInfo() {
    const t = __rea_outer_p.GetLevelIndex(this._levelId);
    if (void 0 === t) return;
    const e = __rea_outer_p.LevelDataS[t];
    this.LevelName && (this.LevelName.string = __rea_outer__.getInstance().getKey(e.winstrkey));
    const n = __rea_outer_S.getInstance().getLevelSpr(this._levelId);
    if (n) return void this.applyLevelSprite(n);
    if (!(await __rea_outer_S.getInstance().loadBundleLevelSpr(this._levelId)) || this._levelId !== __rea_outer_v.getInstance().getSelectedLevelId()) return;
    const i = __rea_outer_S.getInstance().getLevelSpr(this._levelId);
    i && this.applyLevelSprite(i);
  }
  applyLevelSprite(t) {
    this.LevelSprite && (this.LevelSprite.spriteFrame = t);
  }
  refreshNextButtonState() {
    const t = __rea_outer_p.allLevelId.length > 0;
    this.Button_Next && (this.Button_Next.node.active = t, this.Button_Next.interactable = t), this.refreshHomeButtonPosition(t);
  }
  refreshHomeButtonPosition(t) {
    this.Button_Home && this._homeButtonOriginalPosition && (t ? this.Button_Home.node.setPosition(this._homeButtonOriginalPosition) : this.Button_Home.node.setPosition(0, this._homeButtonOriginalPosition.y, this._homeButtonOriginalPosition.z));
  }
  getNextLevelId(t) {
    const e = __rea_outer_p.allLevelId;
    if (0 === e.length) return t;
    const n = e.indexOf(t);
    return -1 === n || n >= e.length - 1 ? e[0] : e[n + 1];
  }
  preparePopupStructure() {
    const t = this.node.getChildByName("bg");
    t && (t.name = "eventblock");
    const e = this.node.getChildByName("general_pop_up_bg");
    e ? e.name = "n_root" : this.node.getChildByName("n_root") || this.ensurePopupRootNode();
  }
  ensurePopupRootNode() {
    const t = new __rea_outer_u("n_root");
    let e = 0;
    const n = this.node.getChildByName("eventblock");
    n && (e = n.getSiblingIndex() + 1), t.setParent(this.node), t.setSiblingIndex(e), t.getComponent(__rea_outer_d) || t.addComponent(__rea_outer_d);
    const i = [];
    for (const e of this.node.children) e !== t && "eventblock" !== e.name && i.push(e);
    for (const e of i) e.setParent(t);
  }
  resolveReferences() {
    if (this.Button_Home || (this.Button_Home = this.findButton("Button_Home") ?? this.findButton("Button_HOme")), this.Button_Next || (this.Button_Next = this.findButton("Button_Next") ?? this.findButton("Button_Continue")), !this.LevelSprite) {
      const t = this.findNodeByName(this.node, "levelFrame");
      this.LevelSprite = (null == t ? void 0 : t.getComponent(__rea_outer_o)) ?? null;
    }
    if (!this.LevelName) {
      const t = this.findNodeByName(this.node, "levelNameLabel");
      this.LevelName = (null == t ? void 0 : t.getComponent(__rea_outer_a)) ?? null;
    }
    this.cacheHomeButtonPosition();
  }
  cacheHomeButtonPosition() {
    if (!this.Button_Home || this._homeButtonOriginalPosition) return;
    const t = this.Button_Home.node.position;
    this._homeButtonOriginalPosition = new __rea_outer_h(t.x, t.y, t.z);
  }
  disableLevelCardInteraction() {
    const t = this.findNodeByName(this.node, "LobbyLevelItem"),
      e = null == t ? void 0 : t.getComponent(__rea_outer_s);
    e && (e.interactable = !1);
  }
  findButton(t) {
    const e = this.findNodeByName(this.node, t);
    return (null == e ? void 0 : e.getComponent(__rea_outer_s)) ?? null;
  }
  findNodeByName(t, e) {
    if (t.name === e) return t;
    for (const n of t.children) {
      const t = this.findNodeByName(n, e);
      if (t) return t;
    }
    return null;
  }
  showInterstitialThen(t, e) {
    __rea_outer_B.getInstance().executeInterstitialTrackAndShow(e, this._levelId, t);
  }
}).prototype, "Button_Home", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), k = __rea_outer_e(x.prototype, "Button_Next", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), R = __rea_outer_e(x.prototype, "LevelSprite", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), O = __rea_outer_e(x.prototype, "LevelName", [b], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), E = x)) || E);
__rea_outer_i._RF.pop();
export { __recovered_export_0 as UISuccess };
