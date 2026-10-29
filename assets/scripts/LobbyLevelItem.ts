// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/LobbyLevelItem.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { applyDecoratedDescriptor as __rea_outer_t } from "./rollupPluginModLoBabelHelpers";
import { initializerDefineProperty as __rea_outer_l } from "./rollupPluginModLoBabelHelpers";
import { cclegacy as __rea_outer_s } from "cc";
import { Color as __rea_outer_o } from "cc";
import { Node as __rea_outer_n } from "cc";
import { Label as __rea_outer_r } from "cc";
import { _decorator as __rea_outer_a } from "cc";
import { Component as __rea_outer_i } from "cc";
import { resources as __rea_outer_c } from "cc";
import { SpriteAtlas as __rea_outer_h } from "cc";
import { Tween as __rea_outer_d } from "cc";
import { UITransform as __rea_outer_v } from "cc";
import { Graphics as __rea_outer_g } from "cc";
import { Sprite as __rea_outer_u } from "cc";
import { tween as __rea_outer_p } from "cc";
import { Vec3 as __rea_outer_b } from "cc";
import { default as __rea_outer_f } from "./BaseData";
import { default as __rea_outer_y } from "./LevelManager";
import { TagType as __rea_outer_m } from "./level-config";
import { I18nController as __rea_outer_L } from "./i18n-controller";
import { DataManager as __rea_outer__ } from "./data-manager";
import { LevelUnlockType as __rea_outer_I } from "./data-manager";
import { GameManager as __rea_outer_S } from "./game-manager";
import { LobbyController as __rea_outer_T } from "./LobbyController";
import { TAHelper as __rea_outer_N } from "./ta-helper";
import { UIManager as __rea_outer_k } from "./ui-manager";
import { UIUnlockLevel as __rea_outer_A } from "./uiunlocklevel";
import { StarRating as __rea_outer_C } from "./star-rating";
let __recovered_export_0;
var w, F, B, M, P, z, D, U, O, E, G, R, H, V, x, X, $, K, j, q;
__rea_outer_s._RF.push({}, "283fe1Zs29PNa+g2hffKHPi", "LobbyLevelItem", void 0);
const {
    ccclass: W,
    property: Y
  } = __rea_outer_a,
  Z = 1.08,
  J = "stars",
  Q = "perfectBorder",
  ee = new __rea_outer_o(255, 198, 48, 255),
  te = {
    [__rea_outer_m.New]: "lobby_level_new",
    [__rea_outer_m.Hot]: "lobby_level_hot",
    [__rea_outer_m.Eerie]: "lobby_level_eerie",
    [__rea_outer_m.Completed]: "lobby_complete",
    [__rea_outer_m.Love]: "lobby_level_love"
  };
__recovered_export_0 = (w = W("LobbyLevelItem"), F = Y(__rea_outer_n), B = Y(__rea_outer_n), M = Y(__rea_outer_n), P = Y(__rea_outer_r), z = Y(__rea_outer_n), D = Y(__rea_outer_n), U = Y(__rea_outer_n), O = Y(__rea_outer_n), w(((q = class e extends __rea_outer_i {
  constructor(...e) {
    super(...e), __rea_outer_l(this, "cardBg", R, this), __rea_outer_l(this, "levelFrame", H, this), __rea_outer_l(this, "levelIcon", V, this), __rea_outer_l(this, "levelNameLabel", x, this), __rea_outer_l(this, "lockOverlay", X, this), __rea_outer_l(this, "spTag", $, this), __rea_outer_l(this, "lockMaskNode", K, this), __rea_outer_l(this, "AdNode", j, this), this._levelId = 0, this._starNodes = [], this._starApplyToken = 0;
  }
  static loadLobbyAtlas() {
    return e._lobbyAtlas ? Promise.resolve(!0) : (e._lobbyAtlasLoading || (e._lobbyAtlasLoading = new Promise(t => {
      __rea_outer_c.load("imgs/lobby", __rea_outer_h, (l, s) => {
        if (e._lobbyAtlasLoading = null, l || !s) return console.error(`Failed to load lobby atlas: ${l}`), void t(!1);
        e._lobbyAtlas = s, t(!0);
      });
    })), e._lobbyAtlasLoading);
  }
  setData(e) {
    this._levelId = e, this.resetTapFeedback(), this.refreshLevelId(), this.refreshLockState(), this.refreshTags(), this.refreshStars(), this.refreshName(), this.refreshLevelFrame();
  }
  onEnable() {
    __rea_outer_L.getInstance().onLanguageChanged(this.refreshName, this);
  }
  onDisable() {
    __rea_outer_L.getInstance().offLanguageChanged(this.refreshName, this);
  }
  onDestroy() {
    __rea_outer_L.getInstance().offLanguageChanged(this.refreshName, this), __rea_outer_d.stopAllByTarget(this.node);
  }
  refreshLevelId() {}
  refreshStars() {
    const e = this.node.getChildByName(J),
      t = this.shouldShowStars();
    if (e && (e.active = t), !t) return void this.refreshPerfectBorder(!1);
    const l = __rea_outer__.getInstance().getLevelStars(this._levelId);
    this.refreshPerfectBorder(l >= __rea_outer_C.COUNT_MAX), this._starApplyToken += 1;
    const s = this._starApplyToken,
      o = this._levelId;
    this.applyLobbyStars(o, l, s);
  }
  shouldShowStars() {
    return !this.isComingSoonLevel() && __rea_outer__.getInstance().isLevelUnlocked(this._levelId);
  }
  async applyLobbyStars(e, t, l) {
    const s = await __rea_outer_C.loadAtlas(__rea_outer_C.GAME_ATLAS_PATH);
    if (!s || !this.isValid || l !== this._starApplyToken || this._levelId !== e) return;
    const o = s.getSpriteFrame(__rea_outer_C.GAME_STAR_SPRITE),
      n = s.getSpriteFrame(__rea_outer_C.GAME_STAR_EMPTY_SPRITE);
    o && n && __rea_outer_C.applySprites(this.resolveStarNodes(), t, o, n);
  }
  resolveStarNodes() {
    if (this._starNodes.length === __rea_outer_C.COUNT_MAX && this._starNodes.every(e => e.isValid)) return this._starNodes;
    const e = this.node.getChildByName(J);
    if (!e) return this._starNodes = [], this._starNodes;
    const t = [];
    for (let l = 1; l <= __rea_outer_C.COUNT_MAX; l += 1) {
      const s = e.getChildByName(`game_star${l}`);
      s && t.push(s);
    }
    return this._starNodes = t, this._starNodes;
  }
  refreshPerfectBorder(e) {
    const t = this.node.getChildByName("lobby_level_frame");
    if (!t) return;
    const l = this.ensurePerfectBorderNode(t);
    l && (l.active = e, e && this.drawPerfectBorder(l));
  }
  ensurePerfectBorderNode(e) {
    var t;
    let l = e.getChildByName(Q);
    if (null != (t = l) && t.isValid) return l;
    l = new __rea_outer_n(Q), l.layer = e.layer, l.setParent(e);
    const s = e.getComponent(__rea_outer_v),
      o = l.addComponent(__rea_outer_v);
    return s && o.setContentSize(s.contentSize), l.addComponent(__rea_outer_g), l;
  }
  drawPerfectBorder(e) {
    const t = e.getComponent(__rea_outer_g),
      l = e.getComponent(__rea_outer_v);
    if (!t || !l) return;
    const s = l.contentSize.width,
      o = l.contentSize.height;
    t.clear(), t.lineWidth = 10, t.strokeColor = ee, t.roundRect(.5 * -s, .5 * -o, s, o, 22), t.stroke();
  }
  refreshLockState() {
    if (this.isComingSoonLevel()) return this.lockOverlay && (this.lockOverlay.active = !1), this.lockMaskNode && (this.lockMaskNode.active = !1), void (this.AdNode && (this.AdNode.active = !1));
    const e = __rea_outer__.getInstance().getLevelUnlockType(this._levelId) === __rea_outer_I.Locked;
    this.lockOverlay && (this.lockOverlay.active = e), this.lockMaskNode && (this.lockMaskNode.active = e), this.AdNode && (this.AdNode.active = !1);
  }
  refreshTags() {
    const e = __rea_outer__.getInstance(),
      t = this.resolveTagType(e);
    if (t === __rea_outer_m.Normal) return void (this.spTag && (this.spTag.active = !1));
    const l = te[t];
    l ? (this.spTag && (this.spTag.active = !0), this.applyTagSprite(l)) : this.spTag && (this.spTag.active = !1);
  }
  resolveTagType(e) {
    if (e.isLevelCompleted(this._levelId)) return __rea_outer_m.Completed;
    const t = __rea_outer_f.GetLevelIndex(this._levelId);
    return void 0 === t ? __rea_outer_m.Normal : __rea_outer_f.LevelDataS[t].tagType;
  }
  async applyTagSprite(t) {
    var l;
    if (!(await e.loadLobbyAtlas()) || !e._lobbyAtlas || null == (l = this.spTag) || !l.isValid) return;
    const s = e._lobbyAtlas.getSpriteFrame(t);
    if (!s) return void console.warn(`Lobby tag sprite not found: ${t}`);
    const o = this.spTag.getComponent(__rea_outer_u);
    o && (o.spriteFrame = s);
  }
  refreshName() {
    if (!this.levelNameLabel) return;
    const e = __rea_outer_f.GetLevelIndex(this._levelId);
    void 0 !== e && (this.levelNameLabel.string = __rea_outer_L.getInstance().getKey(__rea_outer_f.LevelDataS[e].lv_namekey));
  }
  refreshLevelFrame() {
    if (this.isComingSoonLevel()) return void this.loadComingSoonFrame(this._levelId);
    const e = __rea_outer_y.getInstance().getLevelSpr(this._levelId);
    e ? this.applyLevelFrame(e) : this.loadLevelFrame(this._levelId);
  }
  async loadLevelFrame(e) {
    if (!(await __rea_outer_y.getInstance().loadBundleLevelSpr(e)) || this._levelId !== e) return;
    const t = __rea_outer_y.getInstance().getLevelSpr(e);
    t && this.applyLevelFrame(t);
  }
  async loadComingSoonFrame(e) {
    const t = await __rea_outer_y.getInstance().loadComingSoonLevelIcon(e);
    t && this._levelId === e && this.applyLevelFrame(t);
  }
  applyLevelFrame(e) {
    const t = this.levelFrame ?? this.levelIcon,
      l = null == t ? void 0 : t.getComponent(__rea_outer_u);
    l && (l.spriteFrame = e);
  }
  isComingSoonLevel() {
    const e = __rea_outer_f.GetLevelIndex(this._levelId);
    return void 0 !== e && __rea_outer_f.LevelDataS[e].tagType === __rea_outer_m.ComingSoon;
  }
  onSelectLevel() {
    if (this.isComingSoonLevel()) return void __rea_outer_N.getInstance().trackLevelComing(this._levelId);
    this.playTapFeedback(), __rea_outer_y.getInstance().enqueueLevelBundleDownload(this._levelId);
    const e = __rea_outer_T.getInstance();
    e ? e.enterLevelFromLobby(this._levelId) : (__rea_outer__.getInstance().SetSelectedLevelId(this._levelId), __rea_outer__.getInstance().isLevelUnlocked(this._levelId) ? __rea_outer_S.getInstance().enterGameModeForSelectedLevel("Home") : __rea_outer_k.getInstance().showView(__rea_outer_A, void 0, {
      levelId: this._levelId
    }));
  }
  playTapFeedback() {
    __rea_outer_d.stopAllByTarget(this.node), this.node.setScale(1, 1, 1), __rea_outer_p(this.node).to(.08, {
      scale: new __rea_outer_b(Z, Z, Z)
    }).to(.08, {
      scale: __rea_outer_b.ONE
    }).start();
  }
  resetTapFeedback() {
    __rea_outer_d.stopAllByTarget(this.node), this.node.setScale(1, 1, 1);
  }
})._lobbyAtlas = null, q._lobbyAtlasLoading = null, R = __rea_outer_t((G = q).prototype, "cardBg", [F], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), H = __rea_outer_t(G.prototype, "levelFrame", [B], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), V = __rea_outer_t(G.prototype, "levelIcon", [M], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), x = __rea_outer_t(G.prototype, "levelNameLabel", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), X = __rea_outer_t(G.prototype, "lockOverlay", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), $ = __rea_outer_t(G.prototype, "spTag", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), K = __rea_outer_t(G.prototype, "lockMaskNode", [U], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), j = __rea_outer_t(G.prototype, "AdNode", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), E = G)) || E);
__rea_outer_s._RF.pop();
export { __recovered_export_0 as default };
