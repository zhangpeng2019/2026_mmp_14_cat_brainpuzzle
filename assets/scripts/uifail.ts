// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/uifail.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { applyDecoratedDescriptor as __rea_outer_t } from "./rollupPluginModLoBabelHelpers";
import { initializerDefineProperty as __rea_outer_n } from "./rollupPluginModLoBabelHelpers";
import { cclegacy as __rea_outer_i } from "cc";
import { Button as __rea_outer_o } from "cc";
import { Sprite as __rea_outer_s } from "cc";
import { Label as __rea_outer_l } from "cc";
import { _decorator as __rea_outer_a } from "cc";
import { Node as __rea_outer_r } from "cc";
import { UITransform as __rea_outer_h } from "cc";
import { Vec3 as __rea_outer_d } from "cc";
import { default as __rea_outer_u } from "./BaseData";
import { default as __rea_outer_c } from "./LevelManager";
import { I18nController as __rea_outer_p } from "./i18n-controller";
import { GameDefine as __rea_outer__ } from "./game-define";
import { AudioManager as __rea_outer_v } from "./audio-manager";
import { GameManager as __rea_outer_f } from "./game-manager";
import { DataManager as __rea_outer_g } from "./data-manager";
import { AdsController as __rea_outer_I } from "./ads-controller";
import { GameController as __rea_outer_B } from "./GameController";
import "./index2";
import { getAdLoad as __rea_outer_m } from "./funjoy-max";
import { parseRewardOrNativeReadyFromAdLoadDetail as __rea_outer_L } from "./funjoy-max";
import { AD_TYPE_REWARDED as __rea_outer_y } from "./funjoy-max";
import { UIManager as __rea_outer_N } from "./ui-manager";
import { UIBase as __rea_outer_A } from "./ui-base";
import { TAHelper as __rea_outer_C } from "./ta-helper";
let __recovered_export_0;
var S, R, b, k, x, w, D, P, T, E, H, F, W, M, O;
__rea_outer_i._RF.push({}, "148a1b+7zxIw6CrMTFvtgla", "uifail", void 0);
const {
  ccclass: G,
  property: V
} = __rea_outer_a;
__recovered_export_0 = (S = G("UIFail"), R = V(__rea_outer_o), b = V(__rea_outer_o), k = V(__rea_outer_o), x = V(__rea_outer_o), w = V(__rea_outer_s), D = V(__rea_outer_l), S((E = __rea_outer_t((T = class e extends __rea_outer_A {
  constructor(...e) {
    super(...e), __rea_outer_n(this, "Button_Home", E, this), __rea_outer_n(this, "Button_Next", H, this), __rea_outer_n(this, "Button_Replay", F, this), __rea_outer_n(this, "Button_Ad", W, this), __rea_outer_n(this, "LevelSprite", M, this), __rea_outer_n(this, "LevelName", O, this), this._levelId = 0, this._homeButtonOriginalPosition = null, this._isWatchingAd = !1, this._hasTrackedLevelFail = !1;
  }
  onLoad() {
    this.preparePopupStructure(), super.onLoad(), this.resolveReferences(), this.disableLevelCardInteraction();
  }
  show() {
    this._hasTrackedLevelFail = !1, super.show(), __rea_outer_v.getInstance().playEffect(__rea_outer__.SOUNDS.GAME_FAIL), this.scheduleOnce(() => {
      this.node.active && this.doPopAppear();
    }, 0);
  }
  refreshView() {
    this._levelId = __rea_outer_g.getInstance().getSelectedLevelId(), this.trackLevelFailIfNeeded(), __rea_outer_c.getInstance().boostPreloadForNextLevel(this._levelId), this.refreshLevelInfo(), this.refreshNextButtonState(), __rea_outer_C.getInstance().trackAdsShow(__rea_outer__.ADS.GAME_FAIL_ADDTIME), null !== this.getNextLevelId(this._levelId) && __rea_outer_C.getInstance().trackAdsShow(__rea_outer__.ADS.REWARD_SKIP);
  }
  trackLevelFailIfNeeded() {
    this._hasTrackedLevelFail || (this._hasTrackedLevelFail = !0, __rea_outer_C.getInstance().trackLevelFail(this._levelId));
  }
  registerCallbacks() {
    this.Button_Home && this.Button_Home.node.on(__rea_outer_o.EventType.CLICK, this.onHomeClick, this), this.Button_Next && this.Button_Next.node.on(__rea_outer_o.EventType.CLICK, this.onNextClick, this), this.Button_Replay && this.Button_Replay.node.on(__rea_outer_o.EventType.CLICK, this.onReplayClick, this), this.Button_Ad && this.Button_Ad.node.on(__rea_outer_o.EventType.CLICK, this.onAdClick, this);
  }
  unregisterCallbacks() {
    this.Button_Home && this.Button_Home.node.off(__rea_outer_o.EventType.CLICK, this.onHomeClick, this), this.Button_Next && this.Button_Next.node.off(__rea_outer_o.EventType.CLICK, this.onNextClick, this), this.Button_Replay && this.Button_Replay.node.off(__rea_outer_o.EventType.CLICK, this.onReplayClick, this), this.Button_Ad && this.Button_Ad.node.off(__rea_outer_o.EventType.CLICK, this.onAdClick, this);
  }
  onAdClick() {
    if (this._isWatchingAd) return;
    __rea_outer_C.getInstance().trackLevelFailBtn(this._levelId, "AD");
    const t = __rea_outer__.ADS.GAME_FAIL_ADDTIME,
      n = __rea_outer_I.getInstance();
    __rea_outer_m(__rea_outer_y, i => {
      __rea_outer_C.getInstance().trackAdsClickWithDetail(t, i);
      __rea_outer_L(i) || n.isRewardedVideoReady(t) || n.isNativeAdReady(t) ? (this._isWatchingAd = !0, n.showRewardedVideo(t, () => {
        this._isWatchingAd = !1, __rea_outer_B.getInstance().AddGameTime(__rea_outer__.GAME_TIMER.REWARD_BONUS_SECONDS), this.hideWithPopDisappear(() => {
          __rea_outer_N.getInstance().hideView(e);
        });
      }, () => {
        this._isWatchingAd = !1;
      })) : n.showRewardedVideoNotReadyTip();
    });
  }
  onHomeClick() {
    __rea_outer_C.getInstance().trackLevelFailBtn(this._levelId, "Lobby"), this.showInterstitialThen(() => {
      this.hideWithPopDisappear(() => {
        __rea_outer_N.getInstance().hideView(e), __rea_outer_f.getInstance().enterLobby();
      });
    }, __rea_outer__.ADS.FAILHOME_INTER);
  }
  onNextClick() {
    const e = this.getNextLevelId(this._levelId);
    if (null === e) return void this.onHomeClick();
    if (this._isWatchingAd) return;
    const t = __rea_outer__.ADS.REWARD_SKIP,
      n = __rea_outer_I.getInstance();
    __rea_outer_m(__rea_outer_y, i => {
      __rea_outer_C.getInstance().trackAdsClickWithDetail(t, i);
      __rea_outer_L(i) || n.isRewardedVideoReady(t) || n.isNativeAdReady(t) ? (this._isWatchingAd = !0, n.showRewardedVideo(t, () => {
        this._isWatchingAd = !1, this.enterNextLevelAfterSkip(e);
      }, () => {
        this._isWatchingAd = !1;
      })) : n.showRewardedVideoNotReadyTip();
    });
  }
  enterNextLevelAfterSkip(t) {
    this.hideWithPopDisappear(() => {
      __rea_outer_N.getInstance().hideView(e), __rea_outer_g.getInstance().SetSelectedLevelId(t), __rea_outer_f.getInstance().enterGameModeForSelectedLevel("Skip");
    });
  }
  onReplayClick() {
    __rea_outer_C.getInstance().trackLevelFailBtn(this._levelId, "Restart"), this.showInterstitialThen(() => {
      this.hideWithPopDisappear(() => {
        __rea_outer_N.getInstance().hideView(e), __rea_outer_g.getInstance().SetSelectedLevelId(this._levelId), __rea_outer_f.getInstance().enterGameModeForSelectedLevel("Retry");
      });
    }, __rea_outer__.ADS.RESETGAME_INTER);
  }
  async refreshLevelInfo() {
    const e = __rea_outer_u.GetLevelIndex(this._levelId);
    if (void 0 === e) return;
    const t = __rea_outer_u.LevelDataS[e];
    this.LevelName && (this.LevelName.string = __rea_outer_p.getInstance().getKey(t.lv_namekey));
    const n = __rea_outer_c.getInstance().getLevelSpr(this._levelId);
    if (n) return void this.applyLevelSprite(n);
    if (!(await __rea_outer_c.getInstance().loadBundleLevelSpr(this._levelId)) || this._levelId !== __rea_outer_g.getInstance().getSelectedLevelId()) return;
    const i = __rea_outer_c.getInstance().getLevelSpr(this._levelId);
    i && this.applyLevelSprite(i);
  }
  applyLevelSprite(e) {
    this.LevelSprite && (this.LevelSprite.spriteFrame = e);
  }
  refreshNextButtonState() {
    const e = null !== this.getNextLevelId(this._levelId);
    this.Button_Next && (this.Button_Next.node.active = e, this.Button_Next.interactable = e), this.refreshHomeButtonPosition(e);
  }
  refreshHomeButtonPosition(e) {
    this.Button_Home && this._homeButtonOriginalPosition && (e ? this.Button_Home.node.setPosition(this._homeButtonOriginalPosition) : this.Button_Home.node.setPosition(0, this._homeButtonOriginalPosition.y, this._homeButtonOriginalPosition.z));
  }
  getNextLevelId(e) {
    const t = __rea_outer_u.allLevelId,
      n = t.indexOf(e);
    return -1 === n || n >= t.length - 1 ? null : t[n + 1];
  }
  preparePopupStructure() {
    const e = this.node.getChildByName("bg");
    e && (e.name = "eventblock");
    const t = this.node.getChildByName("general_pop_up_bg");
    t ? t.name = "n_root" : this.node.getChildByName("n_root") || this.ensurePopupRootNode();
  }
  ensurePopupRootNode() {
    const e = new __rea_outer_r("n_root");
    let t = 0;
    const n = this.node.getChildByName("eventblock");
    n && (t = n.getSiblingIndex() + 1), e.setParent(this.node), e.setSiblingIndex(t), e.getComponent(__rea_outer_h) || e.addComponent(__rea_outer_h);
    const i = [];
    for (const t of this.node.children) t !== e && "eventblock" !== t.name && i.push(t);
    for (const t of i) t.setParent(e);
  }
  resolveReferences() {
    if (this.Button_Home || (this.Button_Home = this.findButton("Button_Home") ?? this.findButton("Button_HOme")), this.Button_Next || (this.Button_Next = this.findButton("Button_Next") ?? this.findButton("Button_Continue")), this.Button_Replay || (this.Button_Replay = this.findButton("Button_Replay") ?? this.findButton("Button_Again")), this.Button_Ad || (this.Button_Ad = this.findButton("Button_Ad") ?? this.findButton("Button_ObtainTime")), !this.LevelSprite) {
      const e = this.findNodeByName(this.node, "levelFrame");
      this.LevelSprite = (null == e ? void 0 : e.getComponent(__rea_outer_s)) ?? null;
    }
    if (!this.LevelName) {
      const e = this.findNodeByName(this.node, "levelNameLabel");
      this.LevelName = (null == e ? void 0 : e.getComponent(__rea_outer_l)) ?? null;
    }
    this.cacheHomeButtonPosition();
  }
  cacheHomeButtonPosition() {
    if (!this.Button_Home || this._homeButtonOriginalPosition) return;
    const e = this.Button_Home.node.position;
    this._homeButtonOriginalPosition = new __rea_outer_d(e.x, e.y, e.z);
  }
  disableLevelCardInteraction() {
    const e = this.findNodeByName(this.node, "LobbyLevelItem"),
      t = null == e ? void 0 : e.getComponent(__rea_outer_o);
    t && (t.interactable = !1);
  }
  findButton(e) {
    const t = this.findNodeByName(this.node, e);
    return (null == t ? void 0 : t.getComponent(__rea_outer_o)) ?? null;
  }
  findNodeByName(e, t) {
    if (e.name === t) return e;
    for (const n of e.children) {
      const e = this.findNodeByName(n, t);
      if (e) return e;
    }
    return null;
  }
  showInterstitialThen(e, t) {
    __rea_outer_C.getInstance().executeInterstitialTrackAndShow(t, this._levelId, e);
  }
}).prototype, "Button_Home", [R], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), H = __rea_outer_t(T.prototype, "Button_Next", [b], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), F = __rea_outer_t(T.prototype, "Button_Replay", [k], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), W = __rea_outer_t(T.prototype, "Button_Ad", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), M = __rea_outer_t(T.prototype, "LevelSprite", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), O = __rea_outer_t(T.prototype, "LevelName", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), P = T)) || P);
__rea_outer_i._RF.pop();
export { __recovered_export_0 as UIFail };
