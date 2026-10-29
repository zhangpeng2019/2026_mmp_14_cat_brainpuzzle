// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/level-res-manager.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { assetManager as __rea_outer_a } from "cc";
import { instantiate as __rea_outer_n } from "cc";
import { Prefab as __rea_outer_r } from "cc";
import { UITransform as __rea_outer_l } from "cc";
import { Widget as __rea_outer_s } from "cc";
import { AudioClip as __rea_outer_o } from "cc";
import { PREVIEW as __rea_outer_i } from "./env";
import { GAME_CONFIG as __rea_outer_u } from "./game-config";
import { GameDefine as __rea_outer_d } from "./game-define";
import { UIManager as __rea_outer_h } from "./ui-manager";
import { UILayer as __rea_outer_c } from "./ui-layer";
import { ResourceManager as __rea_outer_m } from "./resource-manager";
import { detectRuntimePlatform as __rea_outer_f } from "./game-storage";
import { RuntimePlatform as __rea_outer__ } from "./game-storage";
import { ensureUITransform as __rea_outer_p } from "./CocosCompat";
import { ensureUITransformTree as __rea_outer_B } from "./CocosCompat";
import { default as __rea_outer_g } from "./AudioManager";
let __recovered_export_0;
__rea_outer_t._RF.push({}, "3af1a9WQ7ZFFoUKXCizqkq/", "level-res-manager", void 0);
class v {
  constructor() {
    this._bundleMap = new Map(), this._pinnedBundles = new Set(), this._lruOrder = [], this._activeBundleName = null, this._preloadQueue = [], this._preloadActiveCount = 0, this._warmedBundles = new Set(), this._inflightBundleLoads = new Map(), this._bundlePrefabPaths = new Map(), this._isPreloadPaused = !1, this._preloadConcurrencyLimit = 2, this._lastLoadError = "", this._bannerSafeAppliedPanels = new WeakSet();
  }
  static getInstance() {
    return v._instance || (v._instance = new v()), v._instance;
  }
  getLastLoadError() {
    return this._lastLoadError;
  }
  setLastLoadError(e) {
    this._lastLoadError = e;
  }
  setPreloadPaused(e) {
    this._isPreloadPaused = e, e || this.pumpPreloadQueue();
  }
  setPreloadConcurrency(e) {
    this._preloadConcurrencyLimit = Math.max(1, e), this.pumpPreloadQueue();
  }
  restoreDefaultPreloadConcurrency() {
    this.setPreloadConcurrency(2);
  }
  pinBundles(e) {
    e.forEach(e => {
      this._pinnedBundles.add(e);
    });
  }
  setActiveBundle(e) {
    this._activeBundleName = e, e && this.touchLru(e);
  }
  markActiveBundleEvictable() {
    this._activeBundleName && (this.touchLru(this._activeBundleName), this._activeBundleName = null, this.evictIfNeeded());
  }
  async loadLevelBundle(e, t) {
    const n = this._bundleMap.get(e) ?? __rea_outer_a.getBundle(e);
    if (n) return this.registerLoadedBundle(e, n), null == t || t(1), n;
    const r = this._inflightBundleLoads.get(e);
    if (r) {
      const e = await r;
      return null == t || t(1), e;
    }
    const l = this.loadBundleFromSource(e, t);
    this._inflightBundleLoads.set(e, l);
    try {
      return await l;
    } finally {
      this._inflightBundleLoads.delete(e);
    }
  }
  async loadBundleFromSource(e, t) {
    if (!this.shouldTryRemoteFallback()) return this.loadLocalBundle(e, t);
    const a = await this.loadLocalBundle(e, t);
    return a || this.loadRemoteBundle(e, t);
  }
  async loadLevelPrefab(e, t) {
    this._lastLoadError = "";
    const a = {
      bundle: 0,
      prefab: 0,
      sound: 0
    };
    let r = 0;
    const l = () => {
      const e = .1 * a.bundle + .75 * a.prefab + .15 * a.sound,
        n = Math.min(1, Math.max(r, e));
      r = n, null == t || t(n);
    };
    null == t || t(0), this.setActiveBundle(e.res_Bundle);
    const s = await this.loadLevelBundle(e.res_Bundle, e => {
      a.bundle = e, l();
    });
    if (!s) return this.setActiveBundle(null), this._lastLoadError || (this._lastLoadError = `Bundle not available: ${e.res_Bundle}`), console.error(`[LevelResBundleManager] ${this._lastLoadError}`), null;
    a.bundle = 1, e.Lv_Sound || (a.sound = 1);
    const o = e.lvPre;
    this._bundlePrefabPaths.set(e.res_Bundle, o);
    const i = this.loadPrefabWithRetry(s, o, e => {
        a.prefab = e, l();
      }),
      u = e.Lv_Sound ? this.loadLevelSounds(s, e => {
        a.sound = e, l();
      }) : Promise.resolve(),
      [d] = await Promise.all([i, u]);
    if (!d) return this.setActiveBundle(null), this._lastLoadError || (this._lastLoadError = `Prefab not found in ${e.res_Bundle}: ${o}`), console.error(`[LevelResBundleManager] ${this._lastLoadError}`), null;
    const h = __rea_outer_n(d);
    return null == t || t(1), h;
  }
  preloadLevels(e) {
    this.shouldSkipBackgroundPreload() || (e.forEach(e => {
      if (this._warmedBundles.has(e.bundleName)) return;
      this._preloadQueue.some(t => t.target.bundleName === e.bundleName) || this._preloadQueue.push({
        target: e,
        attempt: 0
      });
    }), this.pumpPreloadQueue());
  }
  isLevelWarm(e) {
    return this._warmedBundles.has(e);
  }
  async preloadBuiltinLevels(e) {
    this.pinBundles(e.map(e => e.bundleName)), await Promise.all(e.map(e => this.warmLevelAssets(e).catch(t => (console.warn(`[LevelResBundleManager] builtin warm failed: ${e.bundleName}`, t), !1))));
  }
  releaseLevelBundle(e, t) {
    const n = this._bundleMap.get(e) ?? __rea_outer_a.getBundle(e),
      l = t ?? this._bundlePrefabPaths.get(e);
    n && l && n.release(l, __rea_outer_r), this.removeFromLru(e), this._bundleMap.delete(e), this._warmedBundles.delete(e), this._bundlePrefabPaths.delete(e), this._activeBundleName === e && (this._activeBundleName = null), // Keep bundle manifests registered: other bundles and pending requests may reference them.
    // Only release the inactive level prefab above; never invalidate shared bundle configuration.
    void n;
  }
  attachLevelToGameLayer(e) {
    const t = __rea_outer_h.getInstance().getLayerRoot(__rea_outer_c.GAME);
    this.attachLevelToParent(e, t);
  }
  attachLevelToParent(e, t) {
    const a = t.getComponent(__rea_outer_l),
      n = (null == a ? void 0 : a.contentSize.width) ?? __rea_outer_u.DESIGN.WIDTH,
      r = (null == a ? void 0 : a.contentSize.height) ?? __rea_outer_u.DESIGN.HEIGHT;
    __rea_outer_p(t, n, r), __rea_outer_B(e, n, r), e.setParent(t), e.setPosition(0, 0, 0), e.setSiblingIndex(0), this.applyBannerSafeArea(e);
  }
  applyBannerSafeArea(e) {
    if (!__rea_outer_d.ADS_CONFIG.Banner_Enabled) return;
    const t = e.getChildByName("UIPanel");
    if (!t) return;
    if (this._bannerSafeAppliedPanels.has(t)) return;
    this._bannerSafeAppliedPanels.add(t);
    const a = __rea_outer_u.DESIGN.BANNER_SAFE_BOTTOM,
      n = t.getComponent(__rea_outer_s);
    if (n) return n.isAlignBottom = !0, n.bottom += a, void n.updateAlignment();
    const r = t.position;
    t.setPosition(r.x, r.y + a, r.z);
  }
  async warmLevelAssets(e) {
    const t = await this.loadLevelBundle(e.bundleName);
    if (!t) return !1;
    if (!(await this.preloadBundleAssets(t))) return !1;
    return !!(await this.preloadPrefabAssets(t, e.prefabPath)) && (this._bundleMap.has(e.bundleName) ? (this._bundlePrefabPaths.set(e.bundleName, e.prefabPath), this._warmedBundles.add(e.bundleName), console.log(`[LevelResBundleManager] warmed: ${e.bundleName}`), !0) : (console.warn(`[LevelResBundleManager] warm discarded, evicted mid-flight: ${e.bundleName}`), !1));
  }
  preloadPrefabAssets(e, t) {
    return new Promise(a => {
      e.preload(t, __rea_outer_r, e => {
        if (e) return this._lastLoadError = `Prefab preload failed: ${t}: ${e.message}`, void a(!1);
        a(!0);
      });
    });
  }
  preloadBundleAssets(e) {
    return new Promise(t => {
      e.preloadDir("", null, a => {
        if (a) return this._lastLoadError = `Bundle preload failed: ${e.name}: ${a.message}`, console.warn(`[LevelResBundleManager] ${this._lastLoadError}`), void t(!1);
        t(!0);
      });
    });
  }
  pumpPreloadQueue() {
    if (!this._isPreloadPaused) for (; this._preloadActiveCount < this._preloadConcurrencyLimit && this._preloadQueue.length > 0;) {
      const e = this._preloadQueue.shift();
      if (!e) break;
      this._warmedBundles.has(e.target.bundleName) || (this._preloadActiveCount += 1, this.runPreloadJob(e));
    }
  }
  async runPreloadJob(e) {
    const t = await this.warmLevelAssets(e.target).catch(t => (console.warn(`[LevelResBundleManager] preload threw: ${e.target.bundleName}`, t), !1));
    this._preloadActiveCount -= 1, t || this.requeuePreloadJob(e), this.pumpPreloadQueue();
  }
  requeuePreloadJob(e) {
    if (e.attempt >= 2) return void console.warn(`[LevelResBundleManager] preload gave up after ${e.attempt + 1} tries: ${e.target.bundleName}`);
    const t = 2e3 * Math.pow(2, e.attempt);
    console.warn(`[LevelResBundleManager] preload retry in ${t}ms: ${e.target.bundleName}`), setTimeout(() => {
      this._preloadQueue.push({
        target: e.target,
        attempt: e.attempt + 1
      }), this.pumpPreloadQueue();
    }, t);
  }
  registerLoadedBundle(e, t) {
    this._bundleMap.set(e, t), this.touchLru(e), this.evictIfNeeded();
  }
  touchLru(e) {
    this.removeFromLru(e), this._lruOrder.push(e);
  }
  removeFromLru(e) {
    const t = this._lruOrder.indexOf(e);
    t >= 0 && this._lruOrder.splice(t, 1);
  }
  evictIfNeeded() {
    for (; this.countEvictableResident() > 2;) {
      const e = this._lruOrder.find(e => this._bundleMap.has(e) && !this._pinnedBundles.has(e) && e !== this._activeBundleName);
      if (!e) break;
      console.log(`[LevelResBundleManager] LRU evict: ${e}`), this.releaseLevelBundle(e);
    }
  }
  countEvictableResident() {
    let e = 0;
    return this._bundleMap.forEach((t, a) => {
      this._pinnedBundles.has(a) || a === this._activeBundleName || (e += 1);
    }), e;
  }
  shouldTryRemoteFallback() {
    return false; // Every source level bundle ships locally on every target.
  }
  shouldSkipBackgroundPreload() {
    return __rea_outer_i;
  }
  loadLocalBundle(e, t) {
    return new Promise(n => {
      __rea_outer_a.loadBundle(e, {
        onFileProgress: (e, a) => {
          a > 0 && (null == t || t(e / a));
        }
      }, (a, r) => {
        if (a || !r) return this._lastLoadError = `Local bundle failed: ${e}${null != a && a.message ? `: ${a.message}` : ""}`, void n(null);
        this.registerLoadedBundle(e, r), null == t || t(1), n(r);
      });
    });
  }
  loadRemoteBundle(e, t) {
    const n = __rea_outer_m.getInstance().getRemoteLevelBundleUrl(e);
    return console.log(`[LevelResBundleManager] Loading remote bundle: ${n}`), new Promise(r => {
      __rea_outer_a.loadBundle(n, {
        cacheEnabled: !0,
        onFileProgress: (e, a) => {
          a > 0 && (null == t || t(e / a));
        }
      }, (a, n) => {
        if (a || !n) return this._lastLoadError = `Remote bundle failed: ${e}${null != a && a.message ? `: ${a.message}` : ""}`, console.error(`[LevelResBundleManager] ${this._lastLoadError}`, a), void r(null);
        this.registerLoadedBundle(e, n), null == t || t(1), r(n);
      });
    });
  }
  async loadPrefabWithRetry(e, t, a) {
    for (let n = 0; n <= 1; n++) {
      const n = await this.loadPrefabFromBundle(e, t, a);
      if (n) return n;
    }
    return null;
  }
  loadPrefabFromBundle(e, t, a) {
    return new Promise(n => {
      e.load(t, __rea_outer_r, (e, t) => {
        t > 0 && (null == a || a(e / t));
      }, (e, r) => {
        if (e || !r) return this._lastLoadError = `Prefab load failed: ${t}${null != e && e.message ? `: ${e.message}` : ""}`, console.error(`[LevelResBundleManager] ${this._lastLoadError}`, e), void n(null);
        null == a || a(1), n(r);
      });
    });
  }
  loadLevelSounds(e, t) {
    return new Promise(a => {
      e.loadDir("sound", __rea_outer_o, (e, a) => {
        a > 0 && (null == t || t(e / a));
      }, (e, n) => {
        if (e || null == n || !n.length) return null == t || t(1), void a();
        n.forEach(e => {
          __rea_outer_g.audioMap.set(e.name, e);
        }), null == t || t(1), a();
      });
    });
  }
}
__recovered_export_0 = v, v._instance = null, __rea_outer_t._RF.pop();
export { __recovered_export_0 as LevelResBundleManager };
