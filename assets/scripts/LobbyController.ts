// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/LobbyController.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { _decorator as __rea_outer_n } from "cc";
import { Component as __rea_outer_o } from "cc";
import { UILobby as __rea_outer_s } from "./uilobby";
import { UIRateus as __rea_outer_a } from "./uirateus";
import { UIUnlockLevel as __rea_outer_i } from "./uiunlocklevel";
import { AudioManager as __rea_outer_c } from "./audio-manager";
import { DataManager as __rea_outer_u } from "./data-manager";
import { GameManager as __rea_outer_r } from "./game-manager";
import { default as __rea_outer_l } from "./LevelManager";
import { UIManager as __rea_outer_b } from "./ui-manager";
import { GameDefine as __rea_outer_d } from "./game-define";
import { stopCoreMusic as __rea_outer_g } from "./music-bridge";
let __recovered_export_0;
var h, L;
__rea_outer_t._RF.push({}, "2bb46iO4dlHGpzRI0TJLAua", "LobbyController", void 0);
const {
  ccclass: y
} = __rea_outer_n;
__recovered_export_0 = y("LobbyController")(((L = class e extends __rea_outer_o {
  constructor(...e) {
    super(...e), this._uiLobby = null;
  }
  static getInstance() {
    return e._instance;
  }
  onLoad() {
    e._instance = this, this._uiLobby = this.node.getComponent(__rea_outer_s);
  }
  onDestroy() {
    e._instance === this && (e._instance = null);
  }
  bindView(e) {
    this._uiLobby = e;
  }
  onEnter(e) {
    e ? this._uiLobby = e : this._uiLobby || (this._uiLobby = this.node.getComponent(__rea_outer_s)), this.updateView(), __rea_outer_g(), __rea_outer_c.getInstance().playMusic(__rea_outer_d.SOUNDS.BGM1), this.tryShowRateUs();
  }
  onLeave() {
    __rea_outer_c.getInstance().stopMusic();
  }
  tryShowRateUs() {
    const e = __rea_outer_u.getInstance(),
      t = e.getUserData();
    t && !t.hasShownRateUs && (t.doneLevelid.length < 4 || (e.updateUserData({
      hasShownRateUs: !0
    }), __rea_outer_b.getInstance().showView(__rea_outer_a)));
  }
  updateView() {
    var e;
    null == (e = this._uiLobby) || e.refresh();
  }
  onAdUnlockChanged() {
    this.updateView();
  }
  enterLevelFromLobby(e) {
    const t = __rea_outer_u.getInstance();
    t.setLobbyLevelPageForLevel(e), t.SetSelectedLevelId(e), __rea_outer_l.getInstance().enqueueLevelBundleDownload(e), t.isLevelUnlocked(e) ? __rea_outer_r.getInstance().enterGameModeForSelectedLevel("Home") : __rea_outer_b.getInstance().showView(__rea_outer_i, void 0, {
      levelId: e
    });
  }
})._instance = null, h = L)) || h;
__rea_outer_t._RF.pop();
export { __recovered_export_0 as LobbyController };
