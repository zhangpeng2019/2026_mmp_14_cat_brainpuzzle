// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/ui-level-grid.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { applyDecoratedDescriptor as __rea_outer_e } from "./rollupPluginModLoBabelHelpers";
import { initializerDefineProperty as __rea_outer_i } from "./rollupPluginModLoBabelHelpers";
import { cclegacy as __rea_outer_s } from "cc";
import { Node as __rea_outer_o } from "cc";
import { Prefab as __rea_outer_r } from "cc";
import { Button as __rea_outer_n } from "cc";
import { Label as __rea_outer_a } from "cc";
import { SpriteFrame as __rea_outer_h } from "cc";
import { _decorator as __rea_outer_l } from "cc";
import { Component as __rea_outer_g } from "cc";
import { Vec3 as __rea_outer_u } from "cc";
import { Tween as __rea_outer_p } from "cc";
import { UITransform as __rea_outer_c } from "cc";
import { Widget as __rea_outer_d } from "cc";
import { view as __rea_outer_P } from "cc";
import { instantiate as __rea_outer__ } from "cc";
import { Sprite as __rea_outer_b } from "cc";
import { resources as __rea_outer_m } from "cc";
import { SpriteAtlas as __rea_outer_f } from "cc";
import { tween as __rea_outer_v } from "cc";
import { default as __rea_outer_S } from "./LevelManager";
import { GameDefine as __rea_outer_C } from "./game-define";
import { AudioManager as __rea_outer_y } from "./audio-manager";
import { DataManager as __rea_outer_L } from "./data-manager";
import { default as __rea_outer_T } from "./LobbyLevelItem";
let __recovered_export_0;
var I, B, R, A, x, D, w, N, E, H, V, z, k, M, G, F, U, O, W, X, Y, K, j;
__rea_outer_s._RF.push({}, "a1c8eTyexlNPpxWLo8KG013", "ui-level-grid", void 0);
const {
    ccclass: $,
    property: Z
  } = __rea_outer_l,
  q = __rea_outer_L.LOBBY_LEVELS_PER_PAGE;
__recovered_export_0 = (I = $("UILevelGrid"), B = Z(__rea_outer_o), R = Z(__rea_outer_r), A = Z(__rea_outer_n), x = Z(__rea_outer_n), D = Z(__rea_outer_a), w = Z({
  type: __rea_outer_h,
  tooltip: "Pager arrow enabled sprite (hall_button)"
}), N = Z({
  type: __rea_outer_h,
  tooltip: "Pager arrow edge/disabled sprite (hall_button_1)"
}), E = Z({
  tooltip: "Cell width used for auto layout when items are instantiated"
}), H = Z({
  tooltip: "Cell height used for auto layout when items are instantiated"
}), I((k = __rea_outer_e((z = class extends __rea_outer_g {
  constructor(...t) {
    super(...t), __rea_outer_i(this, "gridRoot", k, this), __rea_outer_i(this, "levelItemPrefab", M, this), __rea_outer_i(this, "prevButton", G, this), __rea_outer_i(this, "nextButton", F, this), __rea_outer_i(this, "pageLabel", U, this), __rea_outer_i(this, "pagerButtonActiveSprite", O, this), __rea_outer_i(this, "pagerButtonEdgeSprite", W, this), __rea_outer_i(this, "cellWidth", X, this), __rea_outer_i(this, "cellHeight", Y, this), __rea_outer_i(this, "gapX", K, this), __rea_outer_i(this, "gapY", j, this), this._pageStrip = null, this._neighborPageRoot = null, this._currentItems = [], this._neighborItems = [], this._levelIds = [], this._currentPage = 0, this._totalPages = 1, this._isPaging = !1, this._touchStartX = 0, this._touchStartY = 0, this._touchStartTimeMs = 0, this._lastTouchDeltaX = 0, this._lastTouchDeltaY = 0, this._isTouchTracking = !1, this._dragAxisLocked = !1, this._isHorizontalDrag = !1, this._activeNeighborPage = -1, this._pageStripHomePos = new __rea_outer_u(), this._lobbyAtlas = null, this._lobbyAtlasLoadPromise = null, this._prefabLoadPromise = null, this._isSetupDone = !1;
  }
  onLoad() {
    this.resolveRuntimeReferences(), this.ensureCarouselStructure(), this.ensureLobbyAtlas();
  }
  onEnable() {
    this.registerButtonListeners(), this.registerSwipeListeners();
  }
  onDisable() {
    var t;
    this.unregisterButtonListeners(), this.unregisterSwipeListeners(), null != (t = this._pageStrip) && t.isValid && __rea_outer_p.stopAllByTarget(this._pageStrip);
  }
  async setup(t, e) {
    this._levelIds = t.slice(), this._totalPages = Math.max(1, Math.ceil(this._levelIds.length / q)), this._currentPage = this.resolveInitialPage(e), this.resolveRuntimeReferences(), await Promise.all([this.ensureLevelItemPrefab(), this.ensureLobbyAtlas()]), this.ensureCarouselStructure(), this.ensureCurrentItems(), this.hideNeighborPage(), this.resetPageStripPosition(), this.refreshCurrentPage(), this.updatePageChrome(), this.registerButtonListeners(), this.registerSwipeListeners(), this._isSetupDone = !0;
  }
  refresh() {
    this._isSetupDone && (this.hideNeighborPage(), this.resetPageStripPosition(), this.refreshCurrentPage());
  }
  isSetupDone() {
    return this._isSetupDone;
  }
  getCurrentPage() {
    return this._currentPage;
  }
  getTotalPages() {
    return this._totalPages;
  }
  resolveInitialPage(t) {
    const e = __rea_outer_L.getInstance().getLobbyLevelPage(this._totalPages);
    return Number.isFinite(e) && e >= 0 && e < this._totalPages ? e : this.resolvePageForLevel(t);
  }
  resolvePageForLevel(t) {
    const e = this._levelIds.indexOf(t);
    return e < 0 ? 0 : Math.min(Math.floor(e / q), this._totalPages - 1);
  }
  persistLobbyLevelPage() {
    __rea_outer_L.getInstance().setLobbyLevelPage(this._currentPage);
  }
  resolveRuntimeReferences() {
    this.resolveGridRootReference(), this.resolvePagerControls();
  }
  resolveGridRootReference() {
    var t;
    null != (t = this.gridRoot) && t.isValid || (this.gridRoot = this.node.getChildByName("gridRoot"));
  }
  resolvePagerControls() {
    var t, e, i;
    const s = this.getLobbyRoot();
    if (null != (t = this.prevButton) && t.isValid || (this.prevButton = this.findButton(s, ["bottomnode/hall_button_bg/btn_left", "LevelGridPanel/PageBar/btn_left"], "btn_left")), null != (e = this.nextButton) && e.isValid || (this.nextButton = this.findButton(s, ["bottomnode/hall_button_bg/btn_right", "LevelGridPanel/PageBar/btn_right"], "btn_right")), null == (i = this.pageLabel) || !i.isValid) {
      const t = this.findNodeByPaths(s, ["bottomnode/hall_button_bg/pageLabel", "LevelGridPanel/PageBar/pageLabel"], "pageLabel");
      this.pageLabel = (null == t ? void 0 : t.getComponent(__rea_outer_a)) ?? null;
    }
  }
  getLobbyRoot() {
    var t;
    return null != (t = this.node.parent) && t.isValid ? this.node.parent : this.node;
  }
  findButton(t, e, i) {
    const s = this.findNodeByPaths(t, e, i);
    return (null == s ? void 0 : s.getComponent(__rea_outer_n)) ?? null;
  }
  findNodeByPaths(t, e, i) {
    for (const i of e) {
      const e = this.findChildByPath(t, i);
      if (e) return e;
    }
    return this.findDescendantByName(t, i);
  }
  findChildByPath(t, e) {
    let i = t;
    const s = e.split("/");
    for (const t of s) {
      var o;
      if (null == (o = i) || !o.isValid) return null;
      i = i.getChildByName(t);
    }
    return i;
  }
  findDescendantByName(t, e) {
    if (t.name === e) return t;
    for (const i of t.children) {
      const t = this.findDescendantByName(i, e);
      if (t) return t;
    }
    return null;
  }
  registerButtonListeners() {
    var t, e, i, s;
    null == (t = this.prevButton) || t.node.off(__rea_outer_n.EventType.CLICK, this.onPrevClick, this), null == (e = this.nextButton) || e.node.off(__rea_outer_n.EventType.CLICK, this.onNextClick, this), null == (i = this.prevButton) || i.node.on(__rea_outer_n.EventType.CLICK, this.onPrevClick, this), null == (s = this.nextButton) || s.node.on(__rea_outer_n.EventType.CLICK, this.onNextClick, this);
  }
  unregisterButtonListeners() {
    var t, e;
    null == (t = this.prevButton) || t.node.off(__rea_outer_n.EventType.CLICK, this.onPrevClick, this), null == (e = this.nextButton) || e.node.off(__rea_outer_n.EventType.CLICK, this.onNextClick, this);
  }
  registerSwipeListeners() {
    const t = this.getSwipeNode();
    t && (t.off(__rea_outer_o.EventType.TOUCH_START, this.onTouchStart, this, !0), t.off(__rea_outer_o.EventType.TOUCH_MOVE, this.onTouchMove, this, !0), t.off(__rea_outer_o.EventType.TOUCH_END, this.onTouchEnd, this, !0), t.off(__rea_outer_o.EventType.TOUCH_CANCEL, this.onTouchCancel, this, !0), t.on(__rea_outer_o.EventType.TOUCH_START, this.onTouchStart, this, !0), t.on(__rea_outer_o.EventType.TOUCH_MOVE, this.onTouchMove, this, !0), t.on(__rea_outer_o.EventType.TOUCH_END, this.onTouchEnd, this, !0), t.on(__rea_outer_o.EventType.TOUCH_CANCEL, this.onTouchCancel, this, !0));
  }
  unregisterSwipeListeners() {
    const t = this.getSwipeNode();
    t && (t.off(__rea_outer_o.EventType.TOUCH_START, this.onTouchStart, this, !0), t.off(__rea_outer_o.EventType.TOUCH_MOVE, this.onTouchMove, this, !0), t.off(__rea_outer_o.EventType.TOUCH_END, this.onTouchEnd, this, !0), t.off(__rea_outer_o.EventType.TOUCH_CANCEL, this.onTouchCancel, this, !0));
  }
  getSwipeNode() {
    var t;
    return null != (t = this.node) && t.isValid ? this.node : null;
  }
  ensureCarouselStructure() {
    var t, e;
    null != (t = this.gridRoot) && t.isValid && (null != (e = this._pageStrip) && e.isValid || this.createPageStripStructure(), this.migrateWidgetFromGridRootToPageStrip(), this.alignPageRoots(), this.cachePageStripHomePosition());
  }
  createPageStripStructure() {
    const t = this.gridRoot;
    if (null == t || !t.isValid) return;
    const e = t.parent;
    if (!e) return;
    const i = t.getComponent(__rea_outer_c),
      s = t.getSiblingIndex(),
      r = t.position.clone();
    this._pageStrip = new __rea_outer_o("pageStrip"), this._pageStrip.layer = t.layer;
    const n = this._pageStrip.addComponent(__rea_outer_c);
    i && n.setContentSize(i.contentSize), this._pageStrip.parent = e, this._pageStrip.setSiblingIndex(s), this._pageStrip.setPosition(r), t.parent = this._pageStrip, t.setPosition(0, 0, 0), this._neighborPageRoot = new __rea_outer_o("neighborPageRoot"), this._neighborPageRoot.layer = t.layer, this._neighborPageRoot.parent = this._pageStrip, this._neighborPageRoot.active = !1, this._neighborPageRoot.setPosition(0, 0, 0);
    const a = this._neighborPageRoot.addComponent(__rea_outer_c);
    i && a.setContentSize(i.contentSize);
  }
  migrateWidgetFromGridRootToPageStrip() {
    var t, e;
    if (null == (t = this.gridRoot) || !t.isValid || null == (e = this._pageStrip) || !e.isValid) return;
    const i = this.gridRoot.getComponent(__rea_outer_d);
    if (!i) return;
    let s = this._pageStrip.getComponent(__rea_outer_d);
    s || (s = this._pageStrip.addComponent(__rea_outer_d)), this.copyWidgetSettings(i, s), s.updateAlignment(), i.destroy(), this.gridRoot.setPosition(0, 0, 0);
  }
  copyWidgetSettings(t, e) {
    e.alignMode = t.alignMode, e.alignFlags = t.alignFlags, e.left = t.left, e.right = t.right, e.top = t.top, e.bottom = t.bottom, e.horizontalCenter = t.horizontalCenter, e.verticalCenter = t.verticalCenter, e.isAbsoluteLeft = t.isAbsoluteLeft, e.isAbsoluteRight = t.isAbsoluteRight, e.isAbsoluteTop = t.isAbsoluteTop, e.isAbsoluteBottom = t.isAbsoluteBottom, e.isAbsoluteHorizontalCenter = t.isAbsoluteHorizontalCenter, e.isAbsoluteVerticalCenter = t.isAbsoluteVerticalCenter;
  }
  alignPageRoots() {
    var t, e;
    if (null == (t = this.gridRoot) || !t.isValid || null == (e = this._neighborPageRoot) || !e.isValid) return;
    const i = this.gridRoot.position,
      s = this._neighborPageRoot.position;
    this._neighborPageRoot.setPosition(s.x, i.y, i.z);
  }
  cachePageStripHomePosition() {
    var t;
    null != (t = this._pageStrip) && t.isValid && this._pageStripHomePos.set(this._pageStrip.position);
  }
  getPageWidth() {
    var t, e;
    const i = (null == (t = this._pageStrip) ? void 0 : t.getComponent(__rea_outer_c)) ?? (null == (e = this.gridRoot) ? void 0 : e.getComponent(__rea_outer_c)) ?? null;
    return i && i.width > 0 ? i.width : __rea_outer_P.getVisibleSize().width;
  }
  ensureCurrentItems() {
    var t;
    null != (t = this.gridRoot) && t.isValid && this._currentItems.length !== q && (this._currentItems = this.fillItemPool(this.gridRoot), this.syncCellSizeFromItems(this._currentItems), this.layoutItemsOnRoot(this.gridRoot, this._currentItems), this.ensureNeighborItems());
  }
  ensureNeighborItems() {
    var t;
    null != (t = this._neighborPageRoot) && t.isValid && this._neighborItems.length !== q && (this._neighborItems = this.fillItemPool(this._neighborPageRoot), this.layoutItemsOnRoot(this._neighborPageRoot, this._neighborItems));
  }
  fillItemPool(t) {
    const e = [],
      i = t.getComponentsInChildren(__rea_outer_T);
    for (const t of i) {
      if (e.length >= q) break;
      e.push(t);
    }
    for (; e.length < q;) {
      var s;
      if (null == (s = this.levelItemPrefab) || !s.isValid) {
        console.warn("[UILevelGrid] levelItemPrefab missing; cannot fill cell pool");
        break;
      }
      const i = __rea_outer__(this.levelItemPrefab);
      t.addChild(i);
      const o = i.getComponent(__rea_outer_T);
      if (!o) {
        console.error("[UILevelGrid] LobbyLevelItem component missing on prefab"), i.destroy();
        break;
      }
      e.push(o);
    }
    return e;
  }
  syncCellSizeFromItems(t) {
    var e;
    const i = (null == (e = t[0]) ? void 0 : e.node.getComponent(__rea_outer_c)) ?? null;
    i && (i.width > 0 && (this.cellWidth = i.width), i.height > 0 && (this.cellHeight = i.height));
  }
  layoutItemsOnRoot(t, e) {
    if (null == t || !t.isValid || 0 === e.length) return;
    const i = 2 * this.cellWidth + 1 * this.gapX,
      s = 3 * this.cellHeight + 2 * this.gapY;
    for (let t = 0; t < e.length; t++) {
      const o = t % 2,
        r = Math.floor(t / 2),
        n = -i / 2 + this.cellWidth / 2 + o * (this.cellWidth + this.gapX),
        a = s / 2 - this.cellHeight / 2 - r * (this.cellHeight + this.gapY);
      e[t].node.setPosition(n, a, 0);
    }
    const o = t.getComponent(__rea_outer_c);
    o && (o.width <= 0 || o.height <= 0) && o.setContentSize(i, s);
  }
  refreshCurrentPage() {
    this.ensureCarouselStructure(), this.ensureCurrentItems(), this.updatePageChrome();
    const t = this.collectLevelIdsForPage(this._currentPage);
    this.bindItems(this._currentItems, t), this.prefetchAdjacentPages();
  }
  collectLevelIdsForPage(t) {
    const e = t * q;
    return this._levelIds.slice(e, e + q);
  }
  bindItems(t, e) {
    for (let s = 0; s < t.length; s++) {
      var i;
      const o = t[s];
      if (null == o || null == (i = o.node) || !i.isValid) continue;
      const r = e[s];
      null != r ? (o.node.active = !0, o.setData(r)) : o.node.active = !1;
    }
  }
  prefetchAdjacentPages() {
    const t = [this._currentPage - 1, this._currentPage + 1],
      e = __rea_outer_S.getInstance();
    for (const i of t) {
      if (i < 0 || i >= this._totalPages) continue;
      const t = this.collectLevelIdsForPage(i);
      for (const i of t) e.loadBundleLevelSpr(i);
    }
  }
  updatePageChrome() {
    var t, e, i;
    null != (t = this.pageLabel) && t.isValid && (this.pageLabel.string = `${this._currentPage + 1}/${this._totalPages}`);
    const s = !this.canGoPrev(),
      o = !this.canGoNext();
    null != (e = this.prevButton) && e.isValid && (this.prevButton.interactable = !s && !this._isPaging, this.applyPagerButtonSprite(this.prevButton, s)), null != (i = this.nextButton) && i.isValid && (this.nextButton.interactable = !o && !this._isPaging, this.applyPagerButtonSprite(this.nextButton, o));
  }
  applyPagerButtonSprite(t, e) {
    var i;
    if (null == t || null == (i = t.node) || !i.isValid) return;
    const s = e ? this.pagerButtonEdgeSprite : this.pagerButtonActiveSprite;
    if (!s) return;
    const o = t.node.getComponent(__rea_outer_b);
    null != o && o.isValid && (o.spriteFrame = s);
  }
  async ensureLevelItemPrefab() {
    var t;
    return null != (t = this.levelItemPrefab) && t.isValid ? this.levelItemPrefab : (this._prefabLoadPromise || (this._prefabLoadPromise = new Promise(t => {
      __rea_outer_m.load("prefabs/LobbyLevelItem", __rea_outer_r, (e, i) => {
        if (this._prefabLoadPromise = null, e || !i) return console.warn("[UILevelGrid] Failed to load LobbyLevelItem prefab", e), void t(null);
        this.levelItemPrefab = i, t(i);
      });
    })), this._prefabLoadPromise);
  }
  async ensureLobbyAtlas() {
    var t;
    return null != (t = this._lobbyAtlas) && t.isValid ? this._lobbyAtlas : (this._lobbyAtlasLoadPromise || (this._lobbyAtlasLoadPromise = new Promise(t => {
      __rea_outer_m.load("imgs/lobby", __rea_outer_f, (e, i) => {
        if (this._lobbyAtlasLoadPromise = null, e || !i) return console.warn("[UILevelGrid] Failed to load lobby atlas", e), void t(null);
        this._lobbyAtlas = i, this.applyPagerButtonSpritesFromAtlas(i), t(i);
      });
    })), this._lobbyAtlasLoadPromise);
  }
  applyPagerButtonSpritesFromAtlas(t) {
    this.pagerButtonActiveSprite || (this.pagerButtonActiveSprite = this.getAtlasSpriteFrame(t, "hall_button")), this.pagerButtonEdgeSprite || (this.pagerButtonEdgeSprite = this.getAtlasSpriteFrame(t, "hall_button_1")), this.updatePageChrome();
  }
  getAtlasSpriteFrame(t, e) {
    return t.getSpriteFrame(`${e}.png`) ?? t.getSpriteFrame(e) ?? null;
  }
  canGoPrev() {
    return this._currentPage > 0;
  }
  canGoNext() {
    return this._currentPage < this._totalPages - 1;
  }
  onPrevClick() {
    this.canGoPrev() && !this._isPaging && (__rea_outer_y.getInstance().playEffect(__rea_outer_C.SOUNDS.CLICK), this.commitPageChange(this._currentPage - 1, "prev"));
  }
  onNextClick() {
    this.canGoNext() && !this._isPaging && (__rea_outer_y.getInstance().playEffect(__rea_outer_C.SOUNDS.CLICK), this.commitPageChange(this._currentPage + 1, "next"));
  }
  async commitPageChange(t, e, i = !1) {
    if (this._isPaging) return;
    if (t < 0 || t >= this._totalPages || t === this._currentPage) return void this.snapBackToCurrentPage();
    this._isPaging = !0, this.updatePageChrome();
    const s = this.getPageWidth();
    if (!i) {
      const i = "next" === e ? 1 : -1;
      this.prepareNeighborPage(t, i);
    }
    const o = "next" === e ? this._pageStripHomePos.x - s : this._pageStripHomePos.x + s;
    await this.animatePageStripTo(o), this._currentPage = t, this.persistLobbyLevelPage(), this.hideNeighborPage(), this.resetPageStripPosition();
    const r = this.collectLevelIdsForPage(this._currentPage);
    this.bindItems(this._currentItems, r), this.updatePageChrome(), this.prefetchAdjacentPages(), this._isPaging = !1, this.updatePageChrome();
  }
  prepareNeighborPage(t, e) {
    var i, s;
    if (null == (i = this._neighborPageRoot) || !i.isValid || t < 0 || t >= this._totalPages) return;
    if (this._activeNeighborPage === t && this._neighborPageRoot.active) return;
    this.ensureNeighborItems(), this._activeNeighborPage = t, this._neighborPageRoot.active = !0;
    const o = this.getPageWidth(),
      r = (null == (s = this.gridRoot) ? void 0 : s.position) ?? __rea_outer_u.ZERO;
    this._neighborPageRoot.setPosition(e * o, r.y, r.z);
    const n = this.collectLevelIdsForPage(t);
    this.bindItems(this._neighborItems, n);
  }
  hideNeighborPage() {
    var t;
    this._activeNeighborPage = -1, null != (t = this._neighborPageRoot) && t.isValid && (this._neighborPageRoot.active = !1);
  }
  applyPageStripDrag(t) {
    var e;
    null != (e = this._pageStrip) && e.isValid && this._pageStrip.setPosition(this._pageStripHomePos.x + t, this._pageStripHomePos.y, this._pageStripHomePos.z);
  }
  resetPageStripPosition() {
    var t;
    null != (t = this._pageStrip) && t.isValid && this._pageStrip.setPosition(this._pageStripHomePos);
  }
  clampDragDelta(t) {
    const e = this.getPageWidth();
    if (t < 0 && !this.canGoNext()) return Math.max(t, 0);
    if (t > 0 && !this.canGoPrev()) return Math.min(t, 0);
    return t < -e ? .35 * (t + e) - e : t > e ? e + .35 * (t - e) : t;
  }
  animatePageStripTo(t) {
    return new Promise(e => {
      var i;
      if (null == (i = this._pageStrip) || !i.isValid) return void e();
      __rea_outer_p.stopAllByTarget(this._pageStrip);
      const s = Math.abs(t - this._pageStrip.position.x),
        o = Math.max(1, this.getPageWidth()),
        r = Math.min(1, s / o),
        n = Math.max(.08, .2 * r),
        a = new __rea_outer_u(t, this._pageStripHomePos.y, this._pageStripHomePos.z);
      __rea_outer_v(this._pageStrip).to(n, {
        position: a
      }, {
        easing: "sineOut"
      }).call(() => e()).start();
    });
  }
  snapBackToCurrentPage() {
    return this.hideNeighborPage(), this.animatePageStripTo(this._pageStripHomePos.x);
  }
  onTouchStart(t) {
    if (this._isPaging) return;
    this._isTouchTracking = !0, this._dragAxisLocked = !1, this._isHorizontalDrag = !1, this._lastTouchDeltaX = 0, this._lastTouchDeltaY = 0, this.hideNeighborPage();
    const e = t.getUILocation();
    this._touchStartX = e.x, this._touchStartY = e.y, this._touchStartTimeMs = Date.now();
  }
  onTouchMove(t) {
    if (!this._isTouchTracking || this._isPaging) return;
    const e = t.getUILocation(),
      i = e.x - this._touchStartX,
      s = e.y - this._touchStartY;
    this._lastTouchDeltaX = i, this._lastTouchDeltaY = s, this.tryLockDragAxis(i, s) && this._isHorizontalDrag && (i < 0 && this.canGoNext() ? this.prepareNeighborPage(this._currentPage + 1, 1) : i > 0 && this.canGoPrev() ? this.prepareNeighborPage(this._currentPage - 1, -1) : this.hideNeighborPage(), this.applyPageStripDrag(this.clampDragDelta(i)), this.alignPageRoots(), t.propagationStopped = !0);
  }
  onTouchEnd(t) {
    if (!this._isTouchTracking) return;
    const e = t.getUILocation(),
      i = e.x - this._touchStartX,
      s = e.y - this._touchStartY;
    this._lastTouchDeltaX = i, this._lastTouchDeltaY = s, this.tryLockDragAxis(i, s), this._isTouchTracking = !1, this._isHorizontalDrag && this.applyPageStripDrag(this.clampDragDelta(i)), this.completeSwipe(i) ? t.propagationStopped = !0 : this.snapBackToCurrentPage();
  }
  completeSwipe(t) {
    return !(!this._isHorizontalDrag || !this.shouldCommitSwipe(t)) && (t < 0 && this.canGoNext() ? (this.prepareNeighborPage(this._currentPage + 1, 1), this.commitPageChange(this._currentPage + 1, "next", !0), !0) : t > 0 && this.canGoPrev() ? (this.prepareNeighborPage(this._currentPage - 1, -1), this.commitPageChange(this._currentPage - 1, "prev", !0), !0) : (this.snapBackToCurrentPage(), !0));
  }
  tryLockDragAxis(t, e) {
    if (this._dragAxisLocked) return this._isHorizontalDrag;
    const i = Math.abs(t),
      s = Math.abs(e);
    if (i >= 12 && i >= 1.1 * s) return this._dragAxisLocked = !0, this._isHorizontalDrag = !0, !0;
    return s >= 24 && s >= 1.1 * i && (this._dragAxisLocked = !0, this._isHorizontalDrag = !1, this._isTouchTracking = !1), !1;
  }
  shouldCommitSwipe(t) {
    const e = Math.abs(t);
    if (e >= 50) return !0;
    const i = Math.max(1, Date.now() - this._touchStartTimeMs);
    return e >= 18 && e / i >= .5;
  }
  onTouchCancel(t) {
    if (!this._isTouchTracking) return;
    const e = t.getUILocation(),
      i = e.x - this._touchStartX,
      s = e.y - this._touchStartY,
      o = Math.abs(i) >= Math.abs(this._lastTouchDeltaX),
      r = o ? i : this._lastTouchDeltaX,
      n = o ? s : this._lastTouchDeltaY;
    this.tryLockDragAxis(r, n);
    const a = this.completeSwipe(r);
    this._isTouchTracking = !1, this._dragAxisLocked = !1, this._isHorizontalDrag = !1, a ? t.propagationStopped = !0 : this.snapBackToCurrentPage();
  }
}).prototype, "gridRoot", [B], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), M = __rea_outer_e(z.prototype, "levelItemPrefab", [R], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), G = __rea_outer_e(z.prototype, "prevButton", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), F = __rea_outer_e(z.prototype, "nextButton", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), U = __rea_outer_e(z.prototype, "pageLabel", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), O = __rea_outer_e(z.prototype, "pagerButtonActiveSprite", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), W = __rea_outer_e(z.prototype, "pagerButtonEdgeSprite", [N], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), X = __rea_outer_e(z.prototype, "cellWidth", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 432;
  }
}), Y = __rea_outer_e(z.prototype, "cellHeight", [H], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 466;
  }
}), K = __rea_outer_e(z.prototype, "gapX", [Z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 40;
  }
}), j = __rea_outer_e(z.prototype, "gapY", [Z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 40;
  }
}), V = z)) || V);
__rea_outer_s._RF.pop();
export { __recovered_export_0 as UILevelGrid };
