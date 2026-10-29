// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/uipause.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { applyDecoratedDescriptor as __rea_outer_e } from "./rollupPluginModLoBabelHelpers";
import { initializerDefineProperty as __rea_outer_n } from "./rollupPluginModLoBabelHelpers";
import { cclegacy as __rea_outer_i } from "cc";
import { Button as __rea_outer_o } from "cc";
import { _decorator as __rea_outer_s } from "cc";
import { resources as __rea_outer_u } from "cc";
import { SpriteAtlas as __rea_outer_a } from "cc";
import { Sprite as __rea_outer_r } from "cc";
import { GameDefine as __rea_outer_c } from "./game-define";
import { AudioManager as __rea_outer_l } from "./audio-manager";
import { DataManager as __rea_outer_h } from "./data-manager";
import { GameManager as __rea_outer_g } from "./game-manager";
import { GameState as __rea_outer_d } from "./game-manager";
import { GameController as __rea_outer__ } from "./GameController";
import "./index2";
import { UIManager as __rea_outer_p } from "./ui-manager";
import { UIBase as __rea_outer_B } from "./ui-base";
import { TAHelper as __rea_outer_b } from "./ta-helper";
let __recovered_export_0;
var f, C, y, I, m, L, A, v, k, S, T, w, P, M, V, E, N, D;
__rea_outer_i._RF.push({}, "b8e4dkjX2xOCpsyfRwOj1pC", "uipause", void 0);
const {
    ccclass: U,
    property: K
  } = __rea_outer_s,
  R = {
    on: "settings_music",
    off: "settings_music_1"
  },
  z = {
    on: "settings_sound",
    off: "settings_sound_1"
  },
  G = {
    on: "settings_vibration",
    off: "settings_vibration_1"
  };
__recovered_export_0 = (f = U("UIPause"), C = K(__rea_outer_o), y = K(__rea_outer_o), I = K(__rea_outer_o), m = K(__rea_outer_o), L = K(__rea_outer_o), A = K(__rea_outer_o), v = K(__rea_outer_o), f(((D = class t extends __rea_outer_B {
  constructor(...t) {
    super(...t), __rea_outer_n(this, "Button_close", T, this), __rea_outer_n(this, "Button_bg", w, this), __rea_outer_n(this, "Button_Audio", P, this), __rea_outer_n(this, "Button_Music", M, this), __rea_outer_n(this, "Button_Vibrate", V, this), __rea_outer_n(this, "Button_Continue", E, this), __rea_outer_n(this, "Button_Lobby", N, this), this._isActionLocked = !1;
  }
  onLoad() {
    this.preparePopupStructure(), super.onLoad(), this.resolveReferences();
  }
  show() {
    this.resetActionLock(), this.canShowPause() ? (super.show(), __rea_outer__.getInstance().pauseTimer(), this.unscheduleAllCallbacks(), this.scheduleOnce(() => {
      this.playAppearIfStillInGame();
    }, 0)) : __rea_outer_p.getInstance().hideView(t);
  }
  hide() {
    this.unscheduleAllCallbacks(), super.hide();
  }
  refreshView() {
    this.refreshSettingButtons();
  }
  registerCallbacks() {
    this.Button_close && this.Button_close.node.on(__rea_outer_o.EventType.CLICK, this.onCloseClick, this), this.Button_bg && this.Button_bg.node.on(__rea_outer_o.EventType.CLICK, this.onCloseClick, this), this.Button_Continue && this.Button_Continue.node.on(__rea_outer_o.EventType.CLICK, this.onContinueClick, this), this.Button_Music && this.Button_Music.node.on(__rea_outer_o.EventType.CLICK, this.onMusicClick, this), this.Button_Audio && this.Button_Audio.node.on(__rea_outer_o.EventType.CLICK, this.onAudioClick, this), this.Button_Vibrate && this.Button_Vibrate.node.on(__rea_outer_o.EventType.CLICK, this.onVibrateClick, this), this.Button_Lobby && this.Button_Lobby.node.on(__rea_outer_o.EventType.CLICK, this.onLobbyClick, this);
  }
  unregisterCallbacks() {
    this.Button_close && this.Button_close.node.off(__rea_outer_o.EventType.CLICK, this.onCloseClick, this), this.Button_bg && this.Button_bg.node.off(__rea_outer_o.EventType.CLICK, this.onCloseClick, this), this.Button_Continue && this.Button_Continue.node.off(__rea_outer_o.EventType.CLICK, this.onContinueClick, this), this.Button_Music && this.Button_Music.node.off(__rea_outer_o.EventType.CLICK, this.onMusicClick, this), this.Button_Audio && this.Button_Audio.node.off(__rea_outer_o.EventType.CLICK, this.onAudioClick, this), this.Button_Vibrate && this.Button_Vibrate.node.off(__rea_outer_o.EventType.CLICK, this.onVibrateClick, this), this.Button_Lobby && this.Button_Lobby.node.off(__rea_outer_o.EventType.CLICK, this.onLobbyClick, this);
  }
  onCloseClick() {
    this.tryLockAction() && this.closePause(() => {
      __rea_outer__.getInstance().resumeTimer(), __rea_outer_p.getInstance().hideView(t);
    });
  }
  onContinueClick() {
    if (!this.tryLockAction()) return;
    const e = __rea_outer_h.getInstance().getSelectedLevelId();
    __rea_outer_b.getInstance().trackLevelPauseBtn(e, "Continue"), this.showInterstitialThen(() => {
      this.closePause(() => {
        __rea_outer__.getInstance().resumeTimer(), __rea_outer_p.getInstance().hideView(t);
      });
    }, __rea_outer_c.ADS.PAUSE_CONTINUE);
  }
  onLobbyClick() {
    if (!this.tryLockAction()) return;
    const e = __rea_outer_h.getInstance().getSelectedLevelId();
    __rea_outer_b.getInstance().trackLevelPauseBtn(e, "Lobby");
    const n = __rea_outer__.getInstance().getLevelProgressSteps(),
      i = __rea_outer__.getInstance().getLevelSessionStats().duration;
    __rea_outer_b.getInstance().trackLevelQuit(e, "BackHome", n.totalSteps, n.stepType, i), this.showInterstitialThen(() => {
      this.closePause(() => {
        __rea_outer_p.getInstance().hideView(t), __rea_outer_g.getInstance().enterLobby();
      });
    }, __rea_outer_c.ADS.PAUSE_HOME);
  }
  onMusicClick() {
    const t = __rea_outer_h.getInstance().getUserData();
    if (!t) return;
    const e = !t.musicon;
    __rea_outer_h.getInstance().updateUserData({
      musicon: e
    }), __rea_outer_l.getInstance().syncSettingsFromUserData(), this.applyToggleSprite(this.Button_Music, R, e);
  }
  onAudioClick() {
    const t = __rea_outer_h.getInstance().getUserData();
    if (!t) return;
    const e = !t.effecton;
    __rea_outer_h.getInstance().updateUserData({
      effecton: e
    }), __rea_outer_l.getInstance().syncSettingsFromUserData(), this.applyToggleSprite(this.Button_Audio, z, e);
  }
  onVibrateClick() {
    const t = __rea_outer_h.getInstance().getUserData();
    if (!t) return;
    const e = !t.vibrationon;
    __rea_outer_h.getInstance().updateUserData({
      vibrationon: e
    }), this.applyToggleSprite(this.Button_Vibrate, G, e);
  }
  canShowPause() {
    return __rea_outer_g.getInstance().getCurrentState() === __rea_outer_d.GAME_MODE;
  }
  playAppearIfStillInGame() {
    this.node.active && (this.canShowPause() ? this.doPopAppear() : __rea_outer_p.getInstance().hideView(t));
  }
  tryLockAction() {
    return !this._isActionLocked && (this._isActionLocked = !0, this.unscheduleAllCallbacks(), this.setNavigationButtonsInteractable(!1), __rea_outer_p.getInstance().cancelPendingShow(t), !0);
  }
  resetActionLock() {
    this._isActionLocked = !1, this.setNavigationButtonsInteractable(!0);
  }
  setNavigationButtonsInteractable(t) {
    const e = [this.Button_close, this.Button_bg, this.Button_Continue, this.Button_Lobby];
    for (const n of e) n && (n.interactable = t);
  }
  closePause(t) {
    this.hideWithPopDisappear(() => {
      t();
    });
  }
  async refreshSettingButtons() {
    const t = __rea_outer_h.getInstance().getUserData();
    t && (await Promise.all([this.applyToggleSprite(this.Button_Music, R, t.musicon), this.applyToggleSprite(this.Button_Audio, z, t.effecton), this.applyToggleSprite(this.Button_Vibrate, G, t.vibrationon)]));
  }
  static loadSettingsAtlas() {
    return t._settingsAtlas ? Promise.resolve(!0) : (t._settingsAtlasLoading || (t._settingsAtlasLoading = new Promise(e => {
      __rea_outer_u.load("imgs/settings", __rea_outer_a, (n, i) => {
        if (t._settingsAtlasLoading = null, n || !i) return console.error(`[UIPause] Failed to load settings atlas: ${n}`), void e(!1);
        t._settingsAtlas = i, e(!0);
      });
    })), t._settingsAtlasLoading);
  }
  async applyToggleSprite(e, n, i) {
    if (!e) return;
    if (!(await t.loadSettingsAtlas()) || !t._settingsAtlas || !e.node.isValid) return;
    const o = i ? n.on : n.off,
      s = t._settingsAtlas.getSpriteFrame(o);
    if (!s) return void console.warn(`[UIPause] Sprite not found: ${o}`);
    const u = e.getComponent(__rea_outer_r);
    u && (u.spriteFrame = s);
  }
  preparePopupStructure() {
    const t = this.node.getChildByName("bg");
    t && (t.name = "eventblock");
    const e = this.node.getChildByName("general_pop_up_bg");
    e && (e.name = "n_root");
  }
  resolveReferences() {
    if (!this.Button_close) {
      const t = this.node.getChildByName("closeBtn") ?? this.node.getChildByName("Button_close");
      this.Button_close = (null == t ? void 0 : t.getComponent(__rea_outer_o)) ?? null;
    }
    if (!this.Button_bg) {
      const t = this.node.getChildByName("eventblock") ?? this.node.getChildByName("bg");
      t && (this.Button_bg = t.getComponent(__rea_outer_o), this.Button_bg || (this.Button_bg = t.addComponent(__rea_outer_o), this.Button_bg.transition = __rea_outer_o.Transition.NONE));
    }
    this.Button_Audio || (this.Button_Audio = this.findButton("Button_Audio")), this.Button_Music || (this.Button_Music = this.findButton("Button_Music")), this.Button_Vibrate || (this.Button_Vibrate = this.findButton("Button_Vibrate") ?? this.findButton("Button_Viba")), this.Button_Continue || (this.Button_Continue = this.findButton("Button_Continue")), this.Button_Lobby || (this.Button_Lobby = this.findButton("Button_Lobby")), this.hideRetryButtonIfPresent();
  }
  hideRetryButtonIfPresent() {
    const t = this.findButton("Button_Retry") ?? this.findButton("Button_Replay") ?? this.findButton("Button_Reset");
    t && (t.node.active = !1);
  }
  showInterstitialThen(t, e) {
    const n = __rea_outer_h.getInstance().getSelectedLevelId();
    __rea_outer_b.getInstance().executeInterstitialTrackAndShow(e, n, t);
  }
  findButton(t) {
    const e = this.findNodeByName(this.node, t);
    return (null == e ? void 0 : e.getComponent(__rea_outer_o)) ?? null;
  }
  findNodeByName(t, e) {
    if (t.name === e) return t;
    for (const n of t.children) {
      const t = this.findNodeByName(n, e);
      if (t) return t;
    }
    return null;
  }
})._settingsAtlas = null, D._settingsAtlasLoading = null, T = __rea_outer_e((S = D).prototype, "Button_close", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), w = __rea_outer_e(S.prototype, "Button_bg", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), P = __rea_outer_e(S.prototype, "Button_Audio", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), M = __rea_outer_e(S.prototype, "Button_Music", [m], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), V = __rea_outer_e(S.prototype, "Button_Vibrate", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), E = __rea_outer_e(S.prototype, "Button_Continue", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), N = __rea_outer_e(S.prototype, "Button_Lobby", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), k = S)) || k);
__rea_outer_i._RF.pop();
export { __recovered_export_0 as UIPause };
