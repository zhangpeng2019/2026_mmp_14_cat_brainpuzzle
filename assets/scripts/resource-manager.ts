// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/resource-manager.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_l } from "cc";
import { assetManager as __rea_outer_n } from "cc";
import { sp as __rea_outer_t } from "cc";
import { Prefab as __rea_outer_r } from "cc";
import { DataManager as __rea_outer_a } from "./data-manager";
import { FileManager as __rea_outer_o } from "./file-manager";
import { UserGroupType as __rea_outer_s } from "./user-data";
import { RuntimePlatform as __rea_outer_u } from "./game-storage";
import { detectRuntimePlatform as __rea_outer_d } from "./game-storage";
import { ResourceLoader } from "./framework/ResourceLoader";
let __recovered_export_0, __recovered_export_1;
__rea_outer_l._RF.push({}, "25e2cWjDp9CeasVVPu6DnQT", "resource-manager", void 0);
const c = __recovered_export_0 = [1, 6];
class i {
  constructor() {
    this._loadedBundles = new Set(), this._bundleConfigs = [];
  }
  static getInstance() {
    return i._instance || (i._instance = new i()), i._instance;
  }
  initialize(e) {
    this._bundleConfigs = e, this._loadedBundles.clear();
  }
  isBundleLoaded(e) {
    return this._loadedBundles.has(e);
  }
  async loadBundle(e, l, t, r) {
    if (this._loadedBundles.has(e)) {
      const l = __rea_outer_n.getBundle(e);
      return null == t || t(), l;
    }
    try {
      const l = await new Promise((l, t) => {
        __rea_outer_n.loadBundle(e, (e, n) => {
          e ? t(e) : l(n);
        });
      });
      return this._loadedBundles.add(e), null == t || t(), l;
    } catch (l) {
      return console.error(`Failed to load bundle: ${e}`, l), null == r || r(l), null;
    }
  }
  async loadResource(e, l, t) {
    if (e === "resources") return ResourceLoader.load(l, t);
    const r = __rea_outer_n.getBundle(e);
    if (!r) return console.error(`Bundle not found: ${e}`), null;
    try {
      return await new Promise((e, n) => {
        r.load([l], t, (l, t) => {
          if (l) return void n(l);
          const r = Array.isArray(t) ? t[0] : t;
          e(r);
        });
      });
    } catch (n) {
      return console.error(`Failed to load resource: ${e}/${l}`, n), null;
    }
  }
  releaseBundle(e) {
    const l = __rea_outer_n.getBundle(e);
    l && (l.releaseAll(), __rea_outer_n.removeBundle(l), this._loadedBundles.delete(e));
  }
  releaseResource(e) {
    e && __rea_outer_n.releaseAsset(e);
  }
  async preloadBundles(e, l) {
    const n = e.filter(e => !this._loadedBundles.has(e));
    if (0 === n.length) return;
    const t = n.length;
    let r = 0;
    for (const e of n) await this.loadBundle(e), r++, null == l || l(r / t);
  }
  getLoadedBundles() {
    return Array.from(this._loadedBundles);
  }
  getLevelBundleName(e) {
    return String(e);
  }
  getRemoteLevelBundleUrl(e) {
    return `${"https://res.funjoyisland.com/brainx/v3/remote/".replace(/\/+$/, "")}/${e}`;
  }
  getRemoteBundleUrl(e) {
    const l = this.getLevelBundleName(e);
    return this.getRemoteLevelBundleUrl(l);
  }
  getThumbBundleName(e) {
    return `thumb${e}`;
  }
  getRemoteThumbBundleUrl(e) {
    return this.getRemoteLevelBundleUrl(this.getThumbBundleName(e));
  }
  async loadThumbBundle(e, l, t) {
    const r = this.getThumbBundleName(e);
    if (this._loadedBundles.has(r)) {
      const e = __rea_outer_n.getBundle(r);
      if (e) return null == l || l(), e;
      this._loadedBundles.delete(r);
    }
    try {
      if (this.shouldLoadThumbBundleLocally()) {
        const e = await new Promise((e, l) => {
          __rea_outer_n.loadBundle(r, (n, t) => {
            n ? l(n) : e(t);
          });
        });
        return this._loadedBundles.add(r), null == l || l(), e;
      }
      const t = this.getRemoteThumbBundleUrl(e);
      console.log(`[ResourceManager] Loading remote thumb bundle: ${t}`);
      const a = await new Promise((e, l) => {
        __rea_outer_n.loadBundle(t, {
          cacheEnabled: !0
        }, (n, t) => {
          n ? l(n) : e(t);
        });
      });
      return this._loadedBundles.add(r), null == l || l(), a;
    } catch (l) {
      return console.error(`[ResourceManager] Failed to load thumb bundle: thumb${e}`, l), null == t || t(l), null;
    }
  }
  preloadAlbumThumbBundles() {
    __rea_outer_a.detectPlatform() !== __rea_outer_u.WEB && this.preloadAlbumThumbBundlesAsync().catch(e => {
      console.warn("[ResourceManager] preloadAlbumThumbBundles failed:", e);
    });
  }
  async preloadAlbumThumbBundlesAsync() {
    await Promise.all(c.map(e => this.loadThumbBundle(e)));
  }
  isLevelBundleLoaded(e) {
    const l = this.getLevelBundleName(e);
    return this._loadedBundles.has(l);
  }
  shouldBypassLocalLevelThreshold() {
    return this.shouldUseBrowserLocalResources();
  }
  shouldLoadThumbBundleLocally() {
    return this.shouldUseBrowserLocalResources();
  }
  shouldUseBrowserLocalResources() {
    return true;
  }
  async loadLevelBundle(e, l, t, r) {
    var o;
    const u = this.getLevelBundleName(e);
    if (this._loadedBundles.has(u)) {
      const e = __rea_outer_n.getBundle(u);
      return null == t || t(), e;
    }
    (null == (o = __rea_outer_a.getInstance().getUserData()) ? void 0 : o.grouptype) ?? __rea_outer_s.Natural;
    try {
      const l = this.getRemoteBundleUrl(e);
      console.log(`[ResourceManager] Loading remote bundle: ${l}`);
      const r = await new Promise((e, t) => {
        __rea_outer_n.loadBundle(l, {
          cacheEnabled: !0
        }, (l, n) => {
          l ? t(l) : e(n);
        });
      });
      return this._loadedBundles.add(u), null == t || t(), r;
    } catch (l) {
      return console.error(`[ResourceManager] Failed to load level bundle: ${e}`, l), null == r || r(l), null;
    }
  }
  preloadNextLevelBundles(e, l = 10) {}
  preloadDailyBundlesForCalendarMonth(e, l) {
    var n;
    if (__rea_outer_a.detectPlatform() === __rea_outer_u.WEB) return;
    const t = (null == (n = __rea_outer_a.getInstance().getUserData()) ? void 0 : n.grouptype) ?? __rea_outer_s.Natural,
      r = __rea_outer_o.getInstance().collectDailyPictureIdsForCalendarMonth(e, l, t).filter(e => !this.isLevelBundleLoaded(e));
    0 !== r.length && this.preloadLevelBundlesAsync(r).catch(e => {
      console.warn("[ResourceManager] preloadDailyBundlesForCalendarMonth failed:", e);
    });
  }
  async preloadLevelBundlesAsync(e) {
    for (const l of e) await this.loadLevelBundle(l);
  }
  async loadSkeletonData(e, l) {
    const r = __rea_outer_n.getBundle(e);
    if (!r) return console.error(`[ResourceManager] Bundle not found: ${e}`), null;
    try {
      return await new Promise((n, a) => {
        r.load(l, __rea_outer_t.SkeletonData, (t, r) => {
          if (t) return console.error(`[ResourceManager] Failed to load SkeletonData: ${e}/${l}`, t), void n(null);
          n(r);
        });
      });
    } catch (n) {
      return console.error(`[ResourceManager] Failed to load SkeletonData: ${e}/${l}`, n), null;
    }
  }
  async loadPrefab(e, l) {
    if (e === "resources") return ResourceLoader.load(l, __rea_outer_r);
    const t = __rea_outer_n.getBundle(e);
    if (!t) return console.error(`Bundle not found: ${e}`), null;
    try {
      return await new Promise((e, n) => {
        t.load([l], __rea_outer_r, (l, t) => {
          if (l) return void n(l);
          const r = Array.isArray(t) ? t[0] : t;
          e(r);
        });
      });
    } catch (n) {
      return console.error(`Failed to load prefab: ${e}/${l}`, n), null;
    }
  }
}
__recovered_export_1 = i, i._instance = null, __rea_outer_l._RF.pop();
export { __recovered_export_0 as ALBUM_BUILTIN_THUMB_PRELOAD_INDICES, __recovered_export_1 as ResourceManager };
