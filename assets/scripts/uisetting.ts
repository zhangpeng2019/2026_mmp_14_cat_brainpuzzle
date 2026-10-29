// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/uisetting.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { applyDecoratedDescriptor as __rea_outer_e } from "./rollupPluginModLoBabelHelpers";
import { initializerDefineProperty as __rea_outer_n } from "./rollupPluginModLoBabelHelpers";
import { cclegacy as __rea_outer_i } from "cc";
import { Button as __rea_outer_s } from "cc";
import { Label as __rea_outer_o } from "cc";
import { _decorator as __rea_outer_u } from "cc";
import { resources as __rea_outer_a } from "cc";
import { SpriteAtlas as __rea_outer_r } from "cc";
import { Sprite as __rea_outer_l } from "cc";
import { GameDefine as __rea_outer_h } from "./game-define";
import { AudioManager as __rea_outer_c } from "./audio-manager";
import { DataManager as __rea_outer_g } from "./data-manager";
import { I18nController as __rea_outer__ } from "./i18n-controller";
import { SETTING_LANGUAGE_OPTIONS as __rea_outer_B } from "./i18n-controller";
import { UIManager as __rea_outer_d } from "./ui-manager";
import { UILayer as __rea_outer_f } from "./ui-layer";
import { UIBase as __rea_outer_p } from "./ui-base";
import { canGameDebug as __rea_outer_b } from "./funjoy-utils";
import { getAppVersion as __rea_outer_C } from "./funjoy-utils";
import { default as __rea_outer_y } from "./Test";
let __recovered_export_0;
var L, m, I, T, v, S, V, A, k, D, N, U, w, E, M, P, K, z, F, G, O, R, $, x;
__rea_outer_i._RF.push({}, "a7f3cgSTltNmo8hbAueLUpx", "uisetting", void 0);
const {
    ccclass: j,
    property: H
  } = __rea_outer_u,
  W = "settings_button_select",
  q = {
    on: "settings_music",
    off: "settings_music_1"
  },
  J = {
    on: "settings_sound",
    off: "settings_sound_1"
  },
  Q = {
    on: "settings_vibration",
    off: "settings_vibration_1"
  };
__recovered_export_0 = (L = j("UISetting"), m = H(__rea_outer_s), I = H(__rea_outer_s), T = H(__rea_outer_s), v = H(__rea_outer_s), S = H(__rea_outer_s), V = H(__rea_outer_s), A = H(__rea_outer_s), k = H(__rea_outer_s), D = H(__rea_outer_o), N = H(__rea_outer_o), L(((x = class t extends __rea_outer_p {
  constructor(...t) {
    super(...t), __rea_outer_n(this, "Button_close", E, this), __rea_outer_n(this, "Button_bg", M, this), __rea_outer_n(this, "Button_Audio", P, this), __rea_outer_n(this, "Button_Music", K, this), __rea_outer_n(this, "Button_Vibrate", z, this), __rea_outer_n(this, "Button_Privacy", F, this), __rea_outer_n(this, "Button_Contract", G, this), __rea_outer_n(this, "Button_Test", O, this), __rea_outer_n(this, "Label_Version", R, this), __rea_outer_n(this, "Label_ID", $, this), this._languageButtons = [];
  }
  onLoad() {
    this.preparePopupStructure(), super.onLoad(), this.resolveReferences();
  }
  show() {
    super.show(), this.updateTestButtonVisibility(), this.refreshUserInfoLabels(), this.scheduleOnce(() => {
      this.node.active && this.doPopAppear();
    }, 0);
  }
  updateTestButtonVisibility() {
    this.Button_Test && (this.Button_Test.node.active = !1, __rea_outer_b(t => {
      this.Button_Test && this.Button_Test.node.isValid && (this.Button_Test.node.active = t);
    }));
  }
  refreshUserInfoLabels() {
    const t = __rea_outer_g.getInstance().getUserData(),
      e = (null == t ? void 0 : t.userId) ?? "";
    this.Label_ID && (this.Label_ID.string = `ID:${e}`), __rea_outer_C(t => {
      if (!this.Label_Version || !this.Label_Version.node.isValid) return;
      const e = t && t.length > 0 ? t : __rea_outer_h.Version;
      this.Label_Version.string = `Res Ver:${e}`;
    });
  }
  refreshView() {
    this.refreshSettingButtons(), this.refreshLanguageButtons(), this.refreshUserInfoLabels();
  }
  registerCallbacks() {
    this.Button_close && this.Button_close.node.on(__rea_outer_s.EventType.CLICK, this.onCloseClick, this), this.Button_bg && this.Button_bg.node.on(__rea_outer_s.EventType.CLICK, this.onCloseClick, this), this.Button_Music && this.Button_Music.node.on(__rea_outer_s.EventType.CLICK, this.onMusicClick, this), this.Button_Audio && this.Button_Audio.node.on(__rea_outer_s.EventType.CLICK, this.onAudioClick, this), this.Button_Vibrate && this.Button_Vibrate.node.on(__rea_outer_s.EventType.CLICK, this.onVibrateClick, this), this.Button_Test && this.Button_Test.node.on(__rea_outer_s.EventType.CLICK, this.onTestClick, this), this.registerLanguageButtonCallbacks();
  }
  unregisterCallbacks() {
    this.Button_close && this.Button_close.node.off(__rea_outer_s.EventType.CLICK, this.onCloseClick, this), this.Button_bg && this.Button_bg.node.off(__rea_outer_s.EventType.CLICK, this.onCloseClick, this), this.Button_Music && this.Button_Music.node.off(__rea_outer_s.EventType.CLICK, this.onMusicClick, this), this.Button_Audio && this.Button_Audio.node.off(__rea_outer_s.EventType.CLICK, this.onAudioClick, this), this.Button_Vibrate && this.Button_Vibrate.node.off(__rea_outer_s.EventType.CLICK, this.onVibrateClick, this), this.Button_Test && this.Button_Test.node.off(__rea_outer_s.EventType.CLICK, this.onTestClick, this), this.unregisterLanguageButtonCallbacks();
  }
  onCloseClick() {
    this.hideWithPopDisappear(() => {
      __rea_outer_d.getInstance().hideView(t);
    });
  }
  onMusicClick() {
    const t = __rea_outer_g.getInstance().getUserData();
    if (!t) return;
    const e = !t.musicon;
    __rea_outer_g.getInstance().updateUserData({
      musicon: e
    }), __rea_outer_c.getInstance().syncSettingsFromUserData(), this.applyToggleSprite(this.Button_Music, q, e);
  }
  onAudioClick() {
    const t = __rea_outer_g.getInstance().getUserData();
    if (!t) return;
    const e = !t.effecton;
    __rea_outer_g.getInstance().updateUserData({
      effecton: e
    }), __rea_outer_c.getInstance().syncSettingsFromUserData(), this.applyToggleSprite(this.Button_Audio, J, e);
  }
  onVibrateClick() {
    const t = __rea_outer_g.getInstance().getUserData();
    if (!t) return;
    const e = !t.vibrationon;
    __rea_outer_g.getInstance().updateUserData({
      vibrationon: e
    }), this.applyToggleSprite(this.Button_Vibrate, Q, e);
  }
  onLanguageButtonClick(t) {
    const e = this.getLanguageForButton(t);
    if (!e) return;
    const n = __rea_outer_g.getInstance().getUserData();
    n && (n.lan !== e && __rea_outer_g.getInstance().updateUserData({
      lan: e
    }), this.refreshLanguageButtons());
  }
  getLanguageForButton(t) {
    const e = this.resolveClickedNode(t);
    for (const n of this._languageButtons) if (n.button === t || n.button.node === e) return n.language;
    return null;
  }
  resolveClickedNode(t) {
    if (t instanceof __rea_outer_s) return t.node;
    const e = t;
    return e.node ?? e.currentTarget ?? null;
  }
  registerLanguageButtonCallbacks() {
    for (const t of this._languageButtons) t.button.node.on(__rea_outer_s.EventType.CLICK, this.onLanguageButtonClick, this);
  }
  unregisterLanguageButtonCallbacks() {
    for (const t of this._languageButtons) t.button.node.off(__rea_outer_s.EventType.CLICK, this.onLanguageButtonClick, this);
  }
  onTestClick() {
    __rea_outer_b(t => {
      console.log("[UISetting] canGameDebug result:", t), t && __rea_outer_d.getInstance().showView(__rea_outer_y, __rea_outer_f.POP);
    });
  }
  async refreshSettingButtons() {
    const t = __rea_outer_g.getInstance().getUserData();
    t && (await Promise.all([this.applyToggleSprite(this.Button_Music, q, t.musicon), this.applyToggleSprite(this.Button_Audio, J, t.effecton), this.applyToggleSprite(this.Button_Vibrate, Q, t.vibrationon)]));
  }
  async refreshLanguageButtons() {
    const t = __rea_outer__.getInstance().getCurrentLanguage(),
      e = this._languageButtons.map(e => {
        const n = e.language === t ? W : "settings_button";
        return this.applyButtonSprite(e.button, n);
      });
    await Promise.all(e);
  }
  static loadSettingsAtlas() {
    return t._settingsAtlas ? Promise.resolve(!0) : (t._settingsAtlasLoading || (t._settingsAtlasLoading = new Promise(e => {
      __rea_outer_a.load("imgs/settings", __rea_outer_r, (n, i) => {
        if (t._settingsAtlasLoading = null, n || !i) return console.error(`[UISetting] Failed to load settings atlas: ${n}`), void e(!1);
        t._settingsAtlas = i, e(!0);
      });
    })), t._settingsAtlasLoading);
  }
  async applyToggleSprite(t, e, n) {
    await this.applyButtonSprite(t, n ? e.on : e.off);
  }
  async applyButtonSprite(e, n) {
    if (!e) return;
    if (!(await t.loadSettingsAtlas()) || !t._settingsAtlas || !e.node.isValid) return;
    const i = t._settingsAtlas.getSpriteFrame(n);
    if (!i) return void console.warn(`[UISetting] Sprite not found: ${n}`);
    const s = e.getComponent(__rea_outer_l);
    s && (s.spriteFrame = i), e.normalSprite = i, n === W && (e.hoverSprite = i, e.pressedSprite = i);
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
      this.Button_close = (null == t ? void 0 : t.getComponent(__rea_outer_s)) ?? null;
    }
    if (!this.Button_bg) {
      const t = this.node.getChildByName("eventblock") ?? this.node.getChildByName("bg");
      t && (this.Button_bg = t.getComponent(__rea_outer_s), this.Button_bg || (this.Button_bg = t.addComponent(__rea_outer_s), this.Button_bg.transition = __rea_outer_s.Transition.NONE));
    }
    if (this.Button_Audio || (this.Button_Audio = this.findButton("Button_Audio")), this.Button_Music || (this.Button_Music = this.findButton("Button_Music")), this.Button_Vibrate || (this.Button_Vibrate = this.findButton("Button_Vibrate") ?? this.findButton("Button_Viba")), this.Button_Privacy || (this.Button_Privacy = this.findButton("Button_Privacy")), this.Button_Contract || (this.Button_Contract = this.findButton("Button_Contract")), this.Button_Test || (this.Button_Test = this.findButton("Button_Test")), this.Button_Test && (this.Button_Test.node.active = !1), !this.Label_ID) {
      const t = this.findNodeByName(this.node, "Label_ID");
      this.Label_ID = (null == t ? void 0 : t.getComponent(__rea_outer_o)) ?? null;
    }
    if (!this.Label_Version) {
      const t = this.findNodeByName(this.node, "Label_Version");
      this.Label_Version = (null == t ? void 0 : t.getComponent(__rea_outer_o)) ?? null;
    }
    this.resolveLanguageButtons();
  }
  resolveLanguageButtons() {
    this._languageButtons.length = 0;
    for (let t = 0; t < __rea_outer_B.length; t++) {
      const e = this.findButton(`lanbtn${t + 1}`);
      e && (e.transition = __rea_outer_s.Transition.NONE, this._languageButtons.push({
        button: e,
        language: __rea_outer_B[t]
      }));
    }
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
})._settingsAtlas = null, x._settingsAtlasLoading = null, E = __rea_outer_e((w = x).prototype, "Button_close", [m], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), M = __rea_outer_e(w.prototype, "Button_bg", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), P = __rea_outer_e(w.prototype, "Button_Audio", [T], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), K = __rea_outer_e(w.prototype, "Button_Music", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), z = __rea_outer_e(w.prototype, "Button_Vibrate", [S], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), F = __rea_outer_e(w.prototype, "Button_Privacy", [V], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), G = __rea_outer_e(w.prototype, "Button_Contract", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), O = __rea_outer_e(w.prototype, "Button_Test", [k], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), R = __rea_outer_e(w.prototype, "Label_Version", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), $ = __rea_outer_e(w.prototype, "Label_ID", [N], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), U = w)) || U);
__rea_outer_i._RF.pop();
export { __recovered_export_0 as UISetting };
