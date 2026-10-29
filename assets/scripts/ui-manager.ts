// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/ui-manager.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { UITransform as __rea_outer_n } from "cc";
import { Node as __rea_outer_i } from "cc";
import { Widget as __rea_outer_o } from "cc";
import { instantiate as __rea_outer_s } from "cc";
import { js as __rea_outer_a } from "cc";
import { ResourceManager as __rea_outer_r } from "./resource-manager";
import { GAME_CONFIG as __rea_outer_y } from "./game-config";
import { PrefabRegistry as __rea_outer_d } from "./prefab-registry";
import { UILayer as __rea_outer_l } from "./ui-layer";
import { UIBase as __rea_outer_c } from "./ui-base";
import { BrainPuzzleRuntime } from "./features/brainpuzzle/BrainPuzzleRuntime";
let __recovered_export_0: { getInstance(): { destroyAllViews(): void } };
__rea_outer_t._RF.push({}, "72508WCdzxKjIUyQKGip9sG", "ui-manager", void 0);
class h {
  constructor() {
    this._viewCacheByKey = new Map(), this._viewCacheByType = new Map(), this._layerNodes = new Map(), this._loadingByKey = new Map(), this._isShowRequestedByKey = new Map(), this._uiRoot = null;
  }
  static getInstance() {
    return h._instance || (h._instance = new h()), h._instance;
  }
  initialize(e) {
    this._uiRoot = e, this._layerNodes.clear(), this.createLayerNodes();
  }
  createLayerNodes() {
    if (BrainPuzzleRuntime.ui) {
      const layers = { 1: 'content', 10: 'content', 20: 'effect', 50: 'modal', 60: 'toast', 70: 'loading', 80: 'modal', 100: 'hud' };
      Object.entries(layers).forEach(([id, name]) => this._layerNodes.set(Number(id), BrainPuzzleRuntime.ui.layer(name)));
      return;
    }

    if (!this._uiRoot) return void console.error("[UIManager] UI root node is null");
    if (!this._uiRoot.getComponent(__rea_outer_n)) return void console.error("[UIManager] UI root node missing UITransform component");
    const e = [__rea_outer_l.LOBBY, __rea_outer_l.GAME, __rea_outer_l.WIN_ANIMATION, __rea_outer_l.POP, __rea_outer_l.TIP, __rea_outer_l.LOADING, __rea_outer_l.FULL_SCREEN, __rea_outer_l.TOP];
    e.forEach(e => {
      const t = `Layer_${__rea_outer_l[e]}`;
      let s = this._uiRoot.getChildByName(t);
      s || (s = new __rea_outer_i(t), s.setParent(this._uiRoot));
      let a = s.getComponent(__rea_outer_n);
      a || (a = s.addComponent(__rea_outer_n));
      let r = s.getComponent(__rea_outer_o);
      r || (r = s.addComponent(__rea_outer_o)), r && (r.isAlignTop = !0, r.isAlignBottom = !0, r.isAlignLeft = !0, r.isAlignRight = !0, r.top = 0, r.bottom = 0, r.left = 0, r.right = 0, r.updateAlignment()), a && a.setContentSize(__rea_outer_y.DESIGN.WIDTH, __rea_outer_y.DESIGN.HEIGHT), this._layerNodes.set(e, s);
    }), this.sortLayerNodesByPriority(e);
  }
  sortLayerNodesByPriority(e) {
    if (!this._uiRoot) return;
    const t = this._uiRoot.getChildByName("general_bg");
    null != t && t.isValid && t.setSiblingIndex(0);
    const n = [...e].sort((e, t) => e - t),
      i = null != t && t.isValid ? 1 : 0;
    n.forEach((e, t) => {
      const n = this._layerNodes.get(e);
      null != n && n.isValid && n.parent === this._uiRoot && n.setSiblingIndex(i + t);
    });
  }
  getLayerRoot(e) {
    const t = this._layerNodes.get(e);
    return t || (e === __rea_outer_l.ROOT ? this._uiRoot : (console.warn(`[UIManager] Layer ${__rea_outer_l[e]} not found, using GAME layer`), this._layerNodes.get(__rea_outer_l.GAME) || this._uiRoot));
  }
  async preloadView(e) {
    return this.showView(e, void 0, void 0, !1);
  }
  async showView(e, t, n, i = !0) {
    const o = __rea_outer_d.getInstance().tryGetKeyByType(e);
    return o ? await this.showViewByKey(o, t, n, i) : (console.error(`[UIManager] View type ${e.name} not registered. Please register in PrefabRegistry.`), null);
  }
  async showViewByKey(e, t, n, i = !0) {
    const o = __rea_outer_d.getInstance().tryGetViewInfo(e);
    if (!o) return console.error(`[UIManager] View config not found: ${e}`), null;
    this.setShowRequested(e, i);
    const s = void 0 !== t ? t : o.defaultLayer || __rea_outer_l.GAME,
      a = await this.resolveView(e, o, s);
    return a ? (this.applyRequestedVisibility(e, a, n), a) : null;
  }
  setShowRequested(e, t) {
    t ? this._isShowRequestedByKey.set(e, !0) : this._isShowRequestedByKey.get(e) || this._isShowRequestedByKey.set(e, !1);
  }
  async resolveView(e, t, n) {
    const i = this.getValidCachedView(e);
    return i ? (i.node.setParent(this.getLayerRoot(n)), i) : this.loadAndCacheView(e, t, n);
  }
  getValidCachedView(e) {
    const t = this._viewCacheByKey.get(e);
    return t && t.node && t.node.isValid ? t : (this._viewCacheByKey.has(e) && this._viewCacheByKey.delete(e), null);
  }
  async loadAndCacheView(e, t, n) {
    const i = this._loadingByKey.get(e);
    if (i) return i;
    const o = this.createLoadingPromise(e, t, n);
    this._loadingByKey.set(e, o);
    try {
      return await o;
    } finally {
      this._loadingByKey.get(e) === o && this._loadingByKey.delete(e);
    }
  }
  createLoadingPromise(e, t, n) {
    return this.loadAndInstantiateView(e, t, n).then(t => t ? (this._viewCacheByKey.set(e, t), this._viewCacheByType.set(t.constructor, t), t) : null);
  }
  applyRequestedVisibility(e, t, n) {
    t.node && t.node.isValid && this._isShowRequestedByKey.get(e) && this.activateView(t, n);
  }
  activateView(e, t) {
    const n = e.node.active;
    e.node.active = !0, e.node.parent && e.node.setSiblingIndex(e.node.parent.children.length - 1), n || e.show(), null != t && e.onShowWithParam(t);
  }
  async loadAndInstantiateView(e, t, n) {
    const i = __rea_outer_r.getInstance(),
      o = t.bundleName || "resources";
    if (!i.isBundleLoaded(o)) {
      console.log(`[UIManager] Bundle ${o} not loaded, loading now...`);
      if (!(await i.loadBundle(o))) return console.error(`[UIManager] Failed to load bundle: ${o}`), null;
      console.log(`[UIManager] Bundle ${o} loaded successfully`);
    }
    const y = await i.loadPrefab(o, t.prefabPath);
    if (!y) return console.error(`[UIManager] Failed to load prefab: ${o}/${t.prefabPath}`), null;
    const d = this.getLayerRoot(n),
      l = __rea_outer_s(y);
    l.active = !1, l.setParent(d);
    const h = __rea_outer_a.getClassByName(t.componentName);
    if (!h) return console.error(`[UIManager] Component class not found: ${t.componentName} (key=${e})`), l.destroy(), null;
    const u = l.getComponent(h);
    if (!u) return console.error(`[UIManager] Prefab missing component: ${t.componentName} (key=${e})`), l.destroy(), null;
    return u instanceof __rea_outer_c ? u : (console.error(`[UIManager] Component ${t.componentName} is not a UIBase instance`), l.destroy(), null);
  }
  hideView(e) {
    const t = __rea_outer_d.getInstance().tryGetKeyByType(e);
    t && this.hideViewByKey(t);
  }
  hideViewByKey(e) {
    this._isShowRequestedByKey.set(e, !1);
    const t = this._viewCacheByKey.get(e);
    t && t.node && t.node.isValid && t.hide();
  }
  cancelPendingShow(e) {
    const t = __rea_outer_d.getInstance().tryGetKeyByType(e);
    t && this._isShowRequestedByKey.set(t, !1);
  }
  getView(e) {
    const t = __rea_outer_d.getInstance().tryGetKeyByType(e);
    if (t) {
      const e = this._viewCacheByKey.get(t);
      if (e && e.node && e.node.isValid) return e;
    }
    const n = this._viewCacheByType.get(e);
    return n && n.node && n.node.isValid ? n : null;
  }
  getViewByKey(e) {
    const t = this._viewCacheByKey.get(e);
    return t && t.node && t.node.isValid ? t : null;
  }
  destroyView(e) {
    const t = __rea_outer_d.getInstance().tryGetKeyByType(e);
    if (t) this.destroyViewByKey(t);else {
      const t = this._viewCacheByType.get(e);
      t && (t.node && t.node.isValid && t.node.destroy(), this._viewCacheByType.delete(e));
    }
  }
  destroyViewByKey(e) {
    this._isShowRequestedByKey.delete(e);
    const t = this._viewCacheByKey.get(e);
    if (t) {
      t.node && t.node.isValid && t.node.destroy(), this._viewCacheByKey.delete(e);
      const n = t.constructor;
      this._viewCacheByType.delete(n);
    }
  }
  destroyAllViews() {
    this._viewCacheByKey.forEach((e, t) => {
      e && e.node && e.node.isValid && e.node.destroy();
    }), this._viewCacheByKey.clear(), this._viewCacheByType.clear(), this._loadingByKey.clear(), this._isShowRequestedByKey.clear();
  }
}
__recovered_export_0 = h, h._instance = null, __rea_outer_t._RF.pop();
export { __recovered_export_0 as UIManager };
