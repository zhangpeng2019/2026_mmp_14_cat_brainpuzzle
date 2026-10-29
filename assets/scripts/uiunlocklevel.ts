// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/uiunlocklevel.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { applyDecoratedDescriptor as __rea_outer_t } from "./rollupPluginModLoBabelHelpers";
import { initializerDefineProperty as __rea_outer_n } from "./rollupPluginModLoBabelHelpers";
import { cclegacy as __rea_outer_l } from "cc";
import { Button as __rea_outer_o } from "cc";
import { Sprite as __rea_outer_i } from "cc";
import { Label as __rea_outer_s } from "cc";
import { _decorator as __rea_outer_r } from "cc";
import { default as __rea_outer_c } from "./BaseData";
import { default as __rea_outer_a } from "./LevelManager";
import { LobbyController as __rea_outer_u } from "./LobbyController";
import { I18nController as __rea_outer_h } from "./i18n-controller";
import { AdsController as __rea_outer_d } from "./ads-controller";
import { DataManager as __rea_outer_p } from "./data-manager";
import { GameManager as __rea_outer_g } from "./game-manager";
import { GameDefine as __rea_outer_v } from "./game-define";
import "./index2";
import { UIManager as __rea_outer_L } from "./ui-manager";
import { UIBase as __rea_outer_f } from "./ui-base";
import { TAHelper as __rea_outer_k } from "./ta-helper";
let __recovered_export_0;
var b, C, _, U, A, m, B, y, I, S, w, T, N, D, R, K, E;
__rea_outer_l._RF.push({}, "d7cde2kqqVCsIgnde7GqJiL", "uiunlocklevel", void 0);
const {
  ccclass: P,
  property: W
} = __rea_outer_r;
__recovered_export_0 = (b = P("UIUnlockLevel"), C = W(__rea_outer_o), _ = W(__rea_outer_o), U = W(__rea_outer_o), A = W(__rea_outer_o), m = W(__rea_outer_i), B = W(__rea_outer_s), y = W(__rea_outer_s), b((w = __rea_outer_t((S = class e extends __rea_outer_f {
  constructor(...e) {
    super(...e), __rea_outer_n(this, "Button_close", w, this), __rea_outer_n(this, "Button_Unlock", T, this), __rea_outer_n(this, "Button_UnAlllock", N, this), __rea_outer_n(this, "Button_bg", D, this), __rea_outer_n(this, "LevelSprite", R, this), __rea_outer_n(this, "LevelName", K, this), __rea_outer_n(this, "UnlockAllTimesLabel", E, this), this._levelId = 0, this._isWatchingAd = !1;
  }
  onLoad() {
    this.preparePopupStructure(), super.onLoad(), this.resolveReferences();
  }
  show() {
    super.show(), this.scheduleOnce(() => {
      this.node.active && this.doPopAppear();
    }, 0);
  }
  onShowWithParam(e) {
    const t = "number" == typeof e ? e : e.levelId;
    this.refreshLevel(t);
  }
  refreshLevel(e) {
    this._levelId = e, __rea_outer_a.getInstance().enqueueLevelBundleDownload(e), this.refreshLevelName(e), this.refreshUnlockAllTimesLabel(), this.refreshLevelSprite(e);
  }
  registerCallbacks() {
    this.Button_close && this.Button_close.node.on(__rea_outer_o.EventType.CLICK, this.onCloseClick, this), this.Button_bg && this.Button_bg.node.on(__rea_outer_o.EventType.CLICK, this.onCloseClick, this), this.Button_Unlock && this.Button_Unlock.node.on(__rea_outer_o.EventType.CLICK, this.onUnlockClick, this), this.Button_UnAlllock && this.Button_UnAlllock.node.on(__rea_outer_o.EventType.CLICK, this.onUnlockAllClick, this);
  }
  unregisterCallbacks() {
    this.Button_close && this.Button_close.node.off(__rea_outer_o.EventType.CLICK, this.onCloseClick, this), this.Button_bg && this.Button_bg.node.off(__rea_outer_o.EventType.CLICK, this.onCloseClick, this), this.Button_Unlock && this.Button_Unlock.node.off(__rea_outer_o.EventType.CLICK, this.onUnlockClick, this), this.Button_UnAlllock && this.Button_UnAlllock.node.off(__rea_outer_o.EventType.CLICK, this.onUnlockAllClick, this);
  }
  onCloseClick() {
    this.closePopup();
  }
  onUnlockClick() {
    this._levelId <= 0 || this.watchRewardedThen(__rea_outer_v.ADS.REWARD_UNLOCK, () => {
      const e = this._levelId;
      __rea_outer_p.getInstance().unlockLevelByAdForToday(e), this.refreshLobbyAfterUnlock(), this.closePopup(() => {
        this.enterUnlockedLevel(e);
      });
    });
  }
  onUnlockAllClick() {
    const e = __rea_outer_p.getInstance(),
      t = e.getUserData();
    null != t && t.unlockAllLevels || e.getUnlockAllLevelAdsCount() >= e.getUnlockAllLevelAdsRequired() || this.watchRewardedThen(__rea_outer_v.ADS.REWARD_UNLOCKALL, () => {
      const t = e.incrementUnlockAllLevelAds();
      this.refreshUnlockAllTimesLabel(), t >= e.getUnlockAllLevelAdsRequired() && this.onUnlockSuccess();
    });
  }
  watchRewardedThen(e, t) {
    this._isWatchingAd || __rea_outer_d.getInstance().requestRewardedVideo(e, () => {
      this._isWatchingAd = !1, t();
    }, () => {
      this._isWatchingAd = !1;
    }, t => {
      __rea_outer_k.getInstance().trackAdsClickWithDetail(e, t);
    }, () => {
      this._isWatchingAd = !0;
    });
  }
  onUnlockSuccess() {
    this.refreshLobbyAfterUnlock(), this.closePopup();
  }
  refreshLobbyAfterUnlock() {
    const e = __rea_outer_u.getInstance();
    if (e) return void e.onAdUnlockChanged();
    const t = __rea_outer_L.getInstance().getViewByKey("UILobby");
    null == t || null == t.refresh || t.refresh();
  }
  closePopup(t) {
    this.hideWithPopDisappear(() => {
      __rea_outer_L.getInstance().hideView(e), null == t || t();
    });
  }
  enterUnlockedLevel(e) {
    const t = __rea_outer_u.getInstance();
    t ? t.enterLevelFromLobby(e) : (__rea_outer_p.getInstance().SetSelectedLevelId(e), __rea_outer_g.getInstance().enterGameModeForSelectedLevel("Home"));
  }
  refreshUnlockAllTimesLabel() {
    if (!this.UnlockAllTimesLabel) return;
    const e = __rea_outer_p.getInstance(),
      t = e.getUnlockAllLevelAdsCount(),
      n = e.getUnlockAllLevelAdsRequired();
    this.UnlockAllTimesLabel.string = `${t}/${n}`;
  }
  refreshLevelName(e) {
    if (!this.LevelName) return;
    const t = __rea_outer_c.GetLevelIndex(e);
    void 0 !== t && (this.LevelName.string = __rea_outer_h.getInstance().getKey(__rea_outer_c.LevelDataS[t].lv_namekey));
  }
  async refreshLevelSprite(e) {
    var t;
    if (!this.LevelSprite) return;
    const n = __rea_outer_a.getInstance().getLevelSpr(e);
    if (n) return void this.applyLevelSprite(n);
    if (!(await __rea_outer_a.getInstance().loadBundleLevelSpr(e)) || this._levelId !== e || null == (t = this.LevelSprite) || !t.isValid) return;
    const l = __rea_outer_a.getInstance().getLevelSpr(e);
    l && this.applyLevelSprite(l);
  }
  applyLevelSprite(e) {
    this.LevelSprite && (this.LevelSprite.spriteFrame = e);
  }
  preparePopupStructure() {
    const e = this.node.getChildByName("bg");
    e && (e.name = "eventblock");
    const t = this.node.getChildByName("general_pop_up_bg");
    t && (t.name = "n_root");
  }
  resolveReferences() {
    if (!this.Button_close) {
      const e = this.node.getChildByName("closeBtn") ?? this.node.getChildByName("Button_close");
      this.Button_close = (null == e ? void 0 : e.getComponent(__rea_outer_o)) ?? null;
    }
    if (!this.Button_bg) {
      const e = this.node.getChildByName("eventblock") ?? this.node.getChildByName("bg");
      e && (this.Button_bg = e.getComponent(__rea_outer_o), this.Button_bg || (this.Button_bg = e.addComponent(__rea_outer_o), this.Button_bg.transition = __rea_outer_o.Transition.NONE));
    }
  }
}).prototype, "Button_close", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), T = __rea_outer_t(S.prototype, "Button_Unlock", [_], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), N = __rea_outer_t(S.prototype, "Button_UnAlllock", [U], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), D = __rea_outer_t(S.prototype, "Button_bg", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), R = __rea_outer_t(S.prototype, "LevelSprite", [m], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), K = __rea_outer_t(S.prototype, "LevelName", [B], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), E = __rea_outer_t(S.prototype, "UnlockAllTimesLabel", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), I = S)) || I);
__rea_outer_l._RF.pop();
export { __recovered_export_0 as UIUnlockLevel };
