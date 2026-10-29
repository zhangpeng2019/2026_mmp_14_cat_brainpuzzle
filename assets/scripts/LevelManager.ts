// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/LevelManager.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { resources as __rea_outer_l } from "cc";
import { SpriteAtlas as __rea_outer_t } from "cc";
import { js as __rea_outer_n } from "cc";
import { Node as __rea_outer_a } from "cc";
import { settings as __rea_outer_o } from "cc";
import { Settings as __rea_outer_s } from "cc";
import { cclegacy as __rea_outer_r } from "cc";
import { default as __rea_outer_i } from "./BaseData";
import { default as __rea_outer_v } from "./LevelBase";
import { default as __rea_outer_d } from "./LevelDataBase";
import { I18nController as __rea_outer_c } from "./i18n-controller";
import { DataManager as __rea_outer_L } from "./data-manager";
import { default as __rea_outer_u } from "./GameUtils2";
import { default as __rea_outer__ } from "./PlatForm";
import { default as __rea_outer_h } from "./AnalyticsTracker";
import { LevelResBundleManager as __rea_outer_g } from "./level-res-manager";
import { GameDefine as __rea_outer_m } from "./game-define";
import { PhysicsSystem2D as LevelPhysics } from "cc";
let __recovered_export_0;
__rea_outer_r._RF.push({}, "cded3kQW7hEQYorhonlVmZc", "LevelManager", void 0);
class I {
  constructor() {
    this.levelSprMap = new Map(), this.m_Level_Node = null, this.m_Level_Data = null, this.m_Level_Src = null, this.m_AllModePageIndex = [], this.levelSprArr = [], this.m_LevelMaxNum = 6, this.Lv_AD_Map = new Map(), this._levelIconAtlases = [], this._levelIconAtlasLoading = null, this._loadedLevelId = null;
  }
  static getInstance() {
    return null == I.m_Instance && (I.m_Instance = new I()), I.m_Instance;
  }
  ModeLevelData_Init(e) {}
  loadLevelIconAtlas() {
    const e = __rea_outer_m.LEVEL_ICON_ATLASES;
    return 0 === e.length ? (console.error("[LevelManager] LEVEL_ICON_ATLASES is empty"), Promise.resolve(!1)) : this._levelIconAtlases.length === e.length ? Promise.resolve(!0) : (this._levelIconAtlasLoading || (this._levelIconAtlasLoading = Promise.all(e.map(e => this.loadSingleLevelIconAtlas(e))).then(l => {
      this._levelIconAtlasLoading = null;
      const t = [];
      for (let n = 0; n < l.length; n++) {
        const a = l[n];
        if (!a) return console.error(`[LevelManager] Failed to load level icon atlas: ${e[n]}`), this._levelIconAtlases = [], !1;
        t.push(a);
      }
      return this._levelIconAtlases = t, !0;
    })), this._levelIconAtlasLoading);
  }
  loadSingleLevelIconAtlas(e) {
    return new Promise(n => {
      __rea_outer_l.load(e, __rea_outer_t, (l, t) => {
        if (l || !t) return console.error(`[LevelManager] Failed to load level icon atlas: ${e}`, l), void n(null);
        n(t);
      });
    });
  }
  getSpriteFrameFromIconAtlases(e) {
    for (const l of this._levelIconAtlases) {
      const t = l.getSpriteFrame(e);
      if (t) return t;
    }
    return null;
  }
  async loadBundleLevelSpr(e) {
    if (this.levelSprMap.has(e)) return !0;
    if (!(await this.loadLevelIconAtlas())) return !1;
    const l = this.getSpriteFrameFromIconAtlases(`icon_${e}`);
    return l ? (this.levelSprMap.set(e, l), !0) : (-1 === this.levelSprArr.indexOf(e) && this.levelSprArr.push(e), console.warn(`Level icon not found in atlas: icon_${e}`), !1);
  }
  getLevelSpr(e) {
    return this.levelSprMap.has(e) ? this.levelSprMap.get(e) ?? null : null;
  }
  async loadComingSoonLevelIcon(e) {
    if (!(await this.loadLevelIconAtlas())) return null;
    const l = e % 3 == 0 ? 3 : e % 3;
    return this.getSpriteFrameFromIconAtlases(`icon_default_${l}`);
  }
  async loadAloneLevel(e, l) {
    const t = __rea_outer_u.SelectLevelKey,
      n = __rea_outer_i.GetLevelIndex(t);
    if (void 0 === n) return console.error("[LevelManager] Invalid SelectLevelKey:", t), __rea_outer_g.getInstance().setLastLoadError(`Invalid SelectLevelKey: ${t}`), !1;
    null !== this._loadedLevelId && this._loadedLevelId !== t && (this.hideLevel(), this._loadedLevelId = null);
    const a = __rea_outer_i.LevelDataS[n];
    console.log("[LevelManager] Loading level", t, a.lvPre);
    const o = __rea_outer_g.getInstance();
    o.setPreloadPaused(!0);
    try {
      const n = await o.loadLevelPrefab(a, e);
      return !!n && (this.hideLevel(), this.m_Level_Node = n, this._loadedLevelId = t, this.resetLevelSessionData(t), o.setPreloadConcurrency(1), this.preloadNextLevelBundle(t), null == l || l(), !0);
    } finally {
      o.setPreloadPaused(!1);
    }
  }
  resetLevelSessionData(e) {
    this.Lv_AD_Map.set(e, {
      item_unlock: [],
      role_unlock: []
    });
  }
  showLevelOnGameLayer() {
    const e = this.getSelectedLevelConfig();
    e ? this.showLevel(e.lvPre) : console.error("[LevelManager] showLevelOnGameLayer: no level config");
  }
  showLevelOnNode(e) {
    const l = this.getSelectedLevelConfig();
    l ? this.showLevel(l.lvPre, e) : console.error("[LevelManager] showLevelOnNode: no level config");
  }
  showLevel(e, l) {
    console.log("[LevelManager] showLevel", e), __rea_outer__.getInstance().ReportAnalytics("play_level", {
      level_name: e,
      statu: "Enter"
    });
    const t = String(e).replace("Level_", "");
    __rea_outer_h.getInstance().reportUserStartLevel(t), this.m_Level_Node ? (l ? __rea_outer_g.getInstance().attachLevelToParent(this.m_Level_Node, l) : __rea_outer_g.getInstance().attachLevelToGameLayer(this.m_Level_Node), this.getLevelData(this.m_Level_Node)) : console.warn("[LevelManager] showLevel: node is null");
  }
  hideLevel() {
    // Stop simulation before removing the last rope/body from the shared world.
    this.m_Level_Node && (LevelPhysics.instance.enable = false, this.m_Level_Node.destroy(), this.m_Level_Node = null, this.m_Level_Data = null, this.m_Level_Src = null);
  }
  releaseCurrentLevelBundle() {
    null !== this._loadedLevelId && (this.releaseLevelBundleById(this._loadedLevelId), this._loadedLevelId = null);
  }
  retireCurrentLevelToCache() {
    null !== this._loadedLevelId && (__rea_outer_g.getInstance().markActiveBundleEvictable(), this._loadedLevelId = null);
  }
  releaseLevelBundleById(e) {
    if (I.BUILTIN_STARTUP_LEVEL_IDS.indexOf(e) >= 0) return;
    const l = __rea_outer_i.GetLevelIndex(e);
    if (void 0 === l) return;
    const t = __rea_outer_i.LevelDataS[l];
    __rea_outer_g.getInstance().releaseLevelBundle(t.res_Bundle, t.lvPre);
  }
  getLevelData(e) {
    var l;
    let t = e.getChildByName("level_node_data");
    if (t || (t = e.getChildByName("LevelDataBase")), this.m_Level_Data = (null == (l = t) ? void 0 : l.getComponent(__rea_outer_d)) ?? null, !this.m_Level_Data) {
      const l = this.getSelectedLevelConfig();
      l ? (this.m_Level_Data = this.ensureLevelDataNode(e, l), console.log("[LevelManager] Created level_node_data from config for", e.name)) : console.warn("[LevelManager] No level_node_data on", e.name);
    }
    this.m_Level_Src = e.getComponent(__rea_outer_v), this.m_Level_Src || (this.m_Level_Src = this.tryAttachBuiltinLevelScript(e)), this.m_Level_Src || console.warn("[LevelManager] No LevelBase script on", e.name);
  }
  tryAttachBuiltinLevelScript(e) {
    const l = ["Level_9", "Level_10", "Level_11", "Level_15", "Level_18", "Level_19", "Level_20", "Level_23", "Level_25", "Level_32"];
    for (const t of l) {
      if (e.name !== t) continue;
      const l = __rea_outer_n.getClassByName(t);
      if (l) return e.getComponent(l) ?? e.addComponent(l);
    }
    return null;
  }
  getSelectedLevelConfig() {
    const e = __rea_outer_i.GetLevelIndex(__rea_outer_u.SelectLevelKey);
    return void 0 === e ? null : __rea_outer_i.LevelDataS[e];
  }
  ensureLevelDataNode(e, l) {
    let t = e.getChildByName("level_node_data");
    t || (t = new __rea_outer_a("level_node_data"), t.setParent(e));
    let n = t.getComponent(__rea_outer_d);
    return n || (n = t.addComponent(__rea_outer_d)), n.level_id = l.levelId, n.level_name = __rea_outer_c.getInstance().getKey(l.lv_namekey), n.level_title = __rea_outer_c.getInstance().getKey(l.levelinfokey), n.resultDec = __rea_outer_c.getInstance().getKey(l.winstrkey), n;
  }
  showHint() {
    var e;
    null == (e = this.m_Level_Src) || e.showHint();
  }
  preloadNearbyLevelBundles() {
    const e = __rea_outer_L.getInstance().getSelectedLevelId();
    this.preloadNextLevelBundle(e);
  }
  preloadVisibleLevelBundles() {
    this.preloadNearbyLevelBundles();
  }
  preloadNextLevelBundle(e) {
    const l = __rea_outer_i.allLevelId;
    let t = l.indexOf(e);
    t < 0 && (t = 0);
    const n = l.slice(t + 1, t + 1 + 2);
    n.forEach(e => {
      this.enqueueLevelBundleDownload(e);
    }), n.length > 0 && console.log("[LevelManager] Next-level preload:", n.join(", "));
  }
  restoreBackgroundPreloadPolicy() {
    __rea_outer_g.getInstance().restoreDefaultPreloadConcurrency();
  }
  boostPreloadForNextLevel(e) {
    __rea_outer_g.getInstance().restoreDefaultPreloadConcurrency(), this.preloadNextLevelBundle(e);
  }
  buildPreloadTarget(e) {
    const l = __rea_outer_i.GetLevelIndex(e);
    if (void 0 === l) return null;
    const t = __rea_outer_i.LevelDataS[l];
    return t.res_Bundle ? {
      bundleName: t.res_Bundle,
      prefabPath: t.lvPre
    } : null;
  }
  enqueueLevelBundleDownload(e) {
    const l = this.buildPreloadTarget(e);
    l && __rea_outer_g.getInstance().preloadLevels([l]);
  }
  isLevelResourceWarm(e) {
    const l = this.buildPreloadTarget(e);
    return !!l && __rea_outer_g.getInstance().isLevelWarm(l.bundleName);
  }
  needsLevelResourceDownload(e) {
    const l = this.buildPreloadTarget(e);
    return !!l && !this.isLevelResourceWarm(e) && this.isRemoteLevelBundle(l.bundleName);
  }
  isRemoteLevelBundle(e) {
    const l = __rea_outer_o.querySettings(__rea_outer_s.Category.ASSETS, "remoteBundles");
    return !(!Array.isArray(l) || 0 === l.length) && l.indexOf(e) >= 0;
  }
  async preloadBuiltinStartupLevels() {
    const e = I.BUILTIN_STARTUP_LEVEL_IDS.map(e => this.buildPreloadTarget(e)).filter(e => null != e);
    await __rea_outer_g.getInstance().preloadBuiltinLevels(e);
  }
}
__recovered_export_0 = I, I.m_Instance = null, I.BUILTIN_STARTUP_LEVEL_IDS = [2], __rea_outer_r._RF.pop();
export { __recovered_export_0 as default };
