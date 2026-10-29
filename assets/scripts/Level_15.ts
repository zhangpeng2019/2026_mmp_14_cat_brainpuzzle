// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_15.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { applyDecoratedDescriptor as __rea_outer_t } from "./rollupPluginModLoBabelHelpers";
import { initializerDefineProperty as __rea_outer_i } from "./rollupPluginModLoBabelHelpers";
import { cclegacy as __rea_outer_n } from "cc";
import { Node as __rea_outer_l } from "cc";
import { Label as __rea_outer_o } from "cc";
import { ScrollView as __rea_outer_s } from "cc";
import { _decorator as __rea_outer_c } from "cc";
import { Vec2 as __rea_outer_r } from "cc";
import { Sprite as __rea_outer_h } from "cc";
import { Layout as __rea_outer_a } from "cc";
import { Tween as __rea_outer_u } from "cc";
import { tween as __rea_outer_d } from "cc";
import { Color as __rea_outer_p } from "cc";
import { Vec3 as __rea_outer_C } from "cc";
import { UITransform as __rea_outer_m } from "cc";
import { instantiate as __rea_outer_N } from "cc";
import { BlockInputEvents as __rea_outer_v } from "cc";
import { default as __rea_outer_g } from "./LevelBase";
import { default as __rea_outer_y } from "./AudioManager";
import { I18nController as __rea_outer_T } from "./i18n-controller";
import { UIManager as __rea_outer_b } from "./ui-manager";
import { UIHint as __rea_outer_S } from "./uihint";
import { stopAllTweens as __rea_outer_f } from "./CocosCompat";
import { stopSpritesTweens as __rea_outer_I } from "./CocosCompat";
import { computeContentHorizontalScrollBounds as __rea_outer_k } from "./content-horizontal-scroll";
import { applyContentHorizontalScroll as __rea_outer_L } from "./content-horizontal-scroll";
import { snapBackContentHorizontalScroll as __rea_outer__ } from "./content-horizontal-scroll";
import { GameController as __rea_outer_P } from "./GameController";
let __recovered_export_0, __recovered_export_1;
var w, B, V, A, R, x, E, O, H, D, U, z, F, M, W, G, K, X, $;
__rea_outer_n._RF.push({}, "dd0c62xcSZLmoiUfDJOfxkT", "Level_15", void 0);
const {
    ccclass: j,
    property: J
  } = __rea_outer_c,
  Q = ["showpic", "Lich_clothes"];
__recovered_export_0 = function (e) {
  return e[e.ClueType_1 = 1] = "ClueType_1", e[e.ClueType_2 = 2] = "ClueType_2", e[e.ClueType_3 = 3] = "ClueType_3", e[e.ClueType_4 = 4] = "ClueType_4", e[e.ClueType_5 = 5] = "ClueType_5", e[e.ClueType_6 = 6] = "ClueType_6", e[e.ClueType_7 = 7] = "ClueType_7", e[e.ClueType_8 = 8] = "ClueType_8", e[e.ClueType_9 = 9] = "ClueType_9", e[e.ClueType_10 = 10] = "ClueType_10", e;
}({});
const Z = ["level15_hint1", "level15_hint2", "level15_hint3", "level15_hint4", "level15_hint5", "level15_hint6", "level15_hint7", "level15_hint8", "level15_hint9", "level15_hint10"].map((e, t) => ({
  clueType: t + 1,
  circleNodeName: `circle${t + 1}`,
  clickNodeName: `${t + 1}`,
  hintKey: e
}));
__recovered_export_1 = (w = j("Level_15"), B = J(__rea_outer_l), V = J(__rea_outer_l), A = J(__rea_outer_o), R = J(__rea_outer_l), x = J(__rea_outer_l), E = J(__rea_outer_l), O = J(__rea_outer_l), H = J(__rea_outer_s), w((z = __rea_outer_t((U = class extends __rea_outer_g {
  constructor(...e) {
    super(...e), __rea_outer_i(this, "gameNode", z, this), __rea_outer_i(this, "bubbleNode", F, this), __rea_outer_i(this, "tipLabel", M, this), __rea_outer_i(this, "backBgNode", W, this), __rea_outer_i(this, "clickRootNode", G, this), __rea_outer_i(this, "contentNode", K, this), __rea_outer_i(this, "demoTemplateNode", X, this), __rea_outer_i(this, "scrollView", $, this), this.phase = 0, this.winstate = !1, this.doneItems = [], this.totalitems = [], this.clueRuntimes = [], this.activeCircleClueType = null, this.isInteractionLocked = !1, this.contentLayout = null, this.contentScrollBounds = {
      minX: 0,
      maxX: 0
    }, this.touchStartPoint = new __rea_outer_r(), this.scrollStartContentX = 0, this.isTouchStartedInList = !1, this.isContentScrolling = !1, this.onLevelTouchStart = e => {
      var t, i, n;
      if (1 !== this.phase || this.isInteractionLocked) return;
      null != (t = this.contentNode) && t.isValid && __rea_outer_f(this.contentNode);
      const l = this.getTouchWorldPoint(e);
      this.touchStartPoint = l, this.scrollStartContentX = (null == (i = this.contentNode) ? void 0 : i.position.x) ?? 0, this.isTouchStartedInList = this.isPointInsideNode(null == (n = this.contentNode) ? void 0 : n.parent, l), this.isContentScrolling = !1;
      const o = this.findCircleRuntimeAtPoint(l);
      this.activeCircleClueType = (null == o ? void 0 : o.definition.clueType) ?? null;
    }, this.onLevelTouchMove = e => {
      if (1 !== this.phase || this.isInteractionLocked) return;
      if (!this.isTouchStartedInList) return;
      const t = this.getTouchWorldPoint(e),
        i = t.x - this.touchStartPoint.x,
        n = t.y - this.touchStartPoint.y;
      if (!this.isContentScrolling) {
        const e = Math.abs(i),
          t = Math.abs(n);
        if (e <= 12 || e <= t) return;
        this.isContentScrolling = !0, this.activeCircleClueType = null;
      }
      this.applyContentScroll(this.scrollStartContentX + i);
    }, this.onLevelTouchEnd = e => {
      const t = this.isContentScrolling;
      if (this.resetContentScrollSession(), t) return void this.snapBackContentScroll();
      if (1 !== this.phase || this.isInteractionLocked) return void (this.activeCircleClueType = null);
      const i = this.activeCircleClueType;
      if (this.activeCircleClueType = null, null === i) return;
      const n = this.findRuntimeByClueType(i);
      if (!n || this.isClueDone(i)) return;
      const l = this.getTouchWorldPoint(e);
      this.isPointInsideNode(n.circleNode, l) && this.completeClue(n, l);
    }, this.onLevelTouchCancel = () => {
      const e = this.isContentScrolling;
      this.resetContentScrollSession(), this.activeCircleClueType = null, e && this.snapBackContentScroll();
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.buildClueRuntimes(), this.allItemNum = 10, this.hasInstallNum = 0, this.totalitems = Z.map(e => e.clueType);
  }
  start() {
    this.resetLevelState(), this.enterPhase0();
  }
  onDestroy() {
    var e;
    this.unscheduleAllCallbacks(), null != (e = this.node) && e.isValid && this.unregisterInteractionHandlers(), this.stopAllLevelTweens(), this.activeCircleClueType = null;
  }
  showHint() {
    if (1 !== this.phase) return;
    const e = this.resolveNextHintKey();
    if (!e) return;
    const t = __rea_outer_T.getInstance().getKey(e);
    __rea_outer_b.getInstance().showView(__rea_outer_S, void 0, {
      body: t
    });
  }
  getGameProgressSnapshot() {
    const e = this.doneItems.length;
    return {
      progress: e / 10,
      label: `${e}/10`
    };
  }
  markAllTasksCompleted() {
    super.markAllTasksCompleted(), this.phase = 2, this.winstate = !0, this.doneItems = [...this.totalitems], this.hasInstallNum = 10, this.isInteractionLocked = !0, this.unregisterInteractionHandlers(), this.hideBubble();
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.doneItems = [], this.hasInstallNum = 0, this.isInteractionLocked = !1, this.activeCircleClueType = null, this.hideBubble(), this.prepareSceneForPhase0();
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_y.playMusic("bgm5", !0, .5), this.setInputBlocked(!0), this.scheduleOnce(() => {
      this.isValid && 0 === this.phase && (this.playIntroLine(), this.scheduleOnce(() => {
        this.isValid && 0 === this.phase && (this.hideBubble(), this.setInputBlocked(!1), this.enterPhase1());
      }, 2.5));
    }, .25);
  }
  skipOpeningToPlay() {
    return 0 === this.phase && (this.stopOpeningDialogue(), this.hideBubble(), this.setInputBlocked(!1), this.enterPhase1(), !0);
  }
  enterPhase1() {
    0 === this.phase && (this.phase = 1, this.enableCollectionScroll(), this.registerInteractionHandlers(), __rea_outer_P.getInstance().refreshGameProgress());
  }
  enterPhase2Success() {
    this.phase >= 2 || (this.phase = 2, this.winstate = !0, this.unregisterInteractionHandlers(), __rea_outer_P.getInstance().pauseTimer(), this.showLevelSuccess(2));
  }
  prepareSceneForPhase0() {
    this.clueRuntimes.forEach(e => {
      this.setNodeActive(e.circleNode, !0), this.setSpriteAlpha(e.circleSprite, 1), this.restoreClickIconNode(e), this.setNodeActive(e.clickNode, !1);
    }), this.setNodeActive(this.demoTemplateNode, !1), this.clearCollectedItems(), this.updateContentLayout(), this.setNodeActive(this.clickRootNode, !0);
  }
  buildClueRuntimes() {
    var e, t;
    this.clueRuntimes.length = 0;
    const i = (null == (e = this.gameNode) ? void 0 : e.getChildByName("circles")) ?? null,
      n = (null == (t = this.gameNode) ? void 0 : t.getChildByName("clicks")) ?? null;
    null != i && i.isValid && null != n && n.isValid ? Z.forEach(e => {
      const t = i.getChildByName(e.circleNodeName),
        l = n.getChildByName(e.clickNodeName),
        o = (null == t ? void 0 : t.getComponent(__rea_outer_h)) ?? null,
        s = (null == l ? void 0 : l.getComponent(__rea_outer_h)) ?? null;
      null != t && t.isValid && null != l && l.isValid && o && s ? this.clueRuntimes.push({
        definition: e,
        circleNode: t,
        circleSprite: o,
        clickNode: l,
        clickSprite: s,
        clickOriginParent: l.parent,
        clickOriginPosition: l.position.clone(),
        clickOriginSiblingIndex: l.getSiblingIndex()
      }) : console.warn(`[Level_15] 线索节点缺失: ${e.circleNodeName} / ${e.clickNodeName}`);
    }) : console.warn("[Level_15] 缺少 circles 或 clicks 容器");
  }
  resolveReferences() {
    var e, t, i, n, l, c, r;
    (this.gameNode = this.gameNode ?? this.node.getChildByPath("UIPanel/gameNode"), this.bubbleNode = this.bubbleNode ?? (null == (e = this.gameNode) ? void 0 : e.getChildByName("bubble")) ?? null, this.backBgNode = this.backBgNode ?? this.node.getChildByPath("UIPanel/backBG") ?? null, this.clickRootNode = this.clickRootNode ?? (null == (t = this.gameNode) ? void 0 : t.getChildByName("click_root")) ?? null, this.contentNode = this.contentNode ?? (null == (i = this.gameNode) ? void 0 : i.getChildByPath("click_root/bg/ScrollView/view/content")) ?? null, this.demoTemplateNode = this.demoTemplateNode ?? (null == (n = this.contentNode) ? void 0 : n.getChildByName("demo")) ?? null, this.scrollView = this.scrollView ?? (null == (l = this.gameNode) || null == (l = l.getChildByPath("click_root/bg/ScrollView")) ? void 0 : l.getComponent(__rea_outer_s)) ?? null, this.contentLayout = (null == (c = this.contentNode) ? void 0 : c.getComponent(__rea_outer_a)) ?? null, this.tipLabel) || (this.tipLabel = (null == (r = this.bubbleNode) || null == (r = r.getChildByPath("dialog_box/Label")) ? void 0 : r.getComponent(__rea_outer_o)) ?? null);
    this.gameNode || console.warn("[Level_15] 缺少 UIPanel/gameNode"), this.contentNode && this.demoTemplateNode || console.warn("[Level_15] 缺少收集栏 content/demo 节点");
  }
  registerInteractionHandlers() {
    this.disableScrollViewComponent(), this.computeScrollBounds(), this.node.on(__rea_outer_l.EventType.TOUCH_START, this.onLevelTouchStart, this), this.node.on(__rea_outer_l.EventType.TOUCH_MOVE, this.onLevelTouchMove, this), this.node.on(__rea_outer_l.EventType.TOUCH_END, this.onLevelTouchEnd, this), this.node.on(__rea_outer_l.EventType.TOUCH_CANCEL, this.onLevelTouchCancel, this);
  }
  unregisterInteractionHandlers() {
    var e;
    null != (e = this.node) && e.isValid && (this.node.off(__rea_outer_l.EventType.TOUCH_START, this.onLevelTouchStart, this), this.node.off(__rea_outer_l.EventType.TOUCH_MOVE, this.onLevelTouchMove, this), this.node.off(__rea_outer_l.EventType.TOUCH_END, this.onLevelTouchEnd, this), this.node.off(__rea_outer_l.EventType.TOUCH_CANCEL, this.onLevelTouchCancel, this), this.resetContentScrollSession(), this.activeCircleClueType = null);
  }
  completeClue(e, t) {
    this.isInteractionLocked || this.isClueDone(e.definition.clueType) || (this.isInteractionLocked = !0, this.fadeInCircle(e, () => {
      this.isValid && this.playClueFlyAnimation(e, t, () => {
        this.isValid && (this.addCollectedItem(e), __rea_outer_y.playEffect_1("level15_1"), this.markClueDone(e.definition.clueType), this.isInteractionLocked = !1, this.TryQuickWin() || this.checkPhase1Complete());
      });
    }));
  }
  fadeInCircle(e, t) {
    const i = e.circleSprite;
    __rea_outer_u.stopAllByTarget(i), __rea_outer_f(e.circleNode);
    const n = i.color;
    __rea_outer_d(i).to(.2, {
      color: new __rea_outer_p(n.r, n.g, n.b, 255)
    }).call(() => {
      this.isValid && t();
    }).start();
  }
  playClueFlyAnimation(e, t, i) {
    const n = e.clickNode,
      l = this.contentNode;
    if (null == n || !n.isValid || null == l || !l.isValid) return void i();
    this.restoreClickIconNode(e), n.active = !0, this.elevateNodeToTopLayer(n), n.setWorldPosition(new __rea_outer_C(t.x, t.y, 0));
    const o = this.resolveFlyTargetWorldPosition(l),
      s = n.parent,
      c = null == s ? void 0 : s.getComponent(__rea_outer_m);
    if (null == s || !s.isValid || !c) return n.active = !1, void i();
    const r = c.convertToNodeSpaceAR(o);
    __rea_outer_f(n), __rea_outer_d(n).to(.65, {
      position: r
    }, {
      easing: "sineInOut"
    }).call(() => {
      this.isValid && (this.restoreClickIconNode(e), i());
    }).start();
  }
  addCollectedItem(e) {
    const t = this.contentNode,
      i = this.demoTemplateNode;
    if (null == t || !t.isValid || null == i || !i.isValid) return;
    const n = __rea_outer_N(i);
    n.active = !0, n.setParent(t), n.setSiblingIndex(0), this.applyShowpicSprite(n, e.clickSprite), this.updateContentLayout(), this.computeScrollBounds(), this.scrollCollectionToStart();
  }
  applyShowpicSprite(e, t) {
    const i = this.resolveShowpicNode(e),
      n = (null == i ? void 0 : i.getComponent(__rea_outer_h)) ?? null;
    n && t.spriteFrame && (n.spriteFrame = t.spriteFrame);
  }
  resolveShowpicNode(e) {
    for (const t of Q) {
      const i = e.getChildByName(t);
      if (null != i && i.isValid) return i;
    }
    return null;
  }
  clearCollectedItems() {
    const e = this.contentNode,
      t = this.demoTemplateNode;
    if (null == e || !e.isValid || null == t || !t.isValid) return;
    [...e.children].forEach(e => {
      e !== t && (e.removeFromParent(), e.destroy());
    });
  }
  updateContentLayout() {
    var e;
    null == (e = this.contentLayout) || e.updateLayout();
  }
  enableCollectionScroll() {
    this.disableScrollViewComponent(), this.computeScrollBounds();
  }
  disableScrollViewComponent() {
    var e;
    null != (e = this.scrollView) && e.isValid && (this.scrollView.enabled = !1);
  }
  computeScrollBounds() {
    const e = this.contentNode,
      t = null == e ? void 0 : e.parent;
    if (null == e || !e.isValid || null == t || !t.isValid) return;
    const i = __rea_outer_k(e, t, {
      excludedNodes: this.resolveContentScrollExcludedNodes()
    });
    i && (this.contentScrollBounds = i, this.applyContentScroll(e.position.x, !1));
  }
  resolveContentScrollExcludedNodes() {
    var e;
    const t = new Set();
    return null != (e = this.demoTemplateNode) && e.isValid && t.add(this.demoTemplateNode), t;
  }
  applyContentScroll(e, t = !0) {
    const i = this.contentNode;
    null != i && i.isValid && __rea_outer_L(i, e, this.contentScrollBounds, t, .2);
  }
  snapBackContentScroll() {
    const e = this.contentNode;
    null != e && e.isValid && __rea_outer__(e, this.contentScrollBounds, .3);
  }
  resetContentScrollSession() {
    this.isTouchStartedInList = !1, this.isContentScrolling = !1;
  }
  scrollCollectionToStart() {
    this.computeScrollBounds(), this.applyContentScroll(this.contentScrollBounds.maxX, !1);
  }
  resolveFlyTargetWorldPosition(e) {
    const t = e.getComponent(__rea_outer_m);
    if (!t) return e.worldPosition.clone();
    const i = t.anchorPoint,
      n = t.contentSize,
      l = -n.width * i.x + 80,
      o = -n.height * i.y + .5 * n.height;
    return t.convertToWorldSpaceAR(new __rea_outer_C(l, o, 0));
  }
  elevateNodeToTopLayer(e) {
    const t = this.node,
      i = e.worldPosition.clone();
    e.setParent(t), e.setWorldPosition(i), e.setSiblingIndex(t.children.length - 1);
  }
  restoreClickIconNode(e) {
    const t = e.clickNode;
    null != t && t.isValid && (__rea_outer_f(t), t.setParent(e.clickOriginParent), t.setPosition(e.clickOriginPosition), t.setSiblingIndex(e.clickOriginSiblingIndex), t.active = !1);
  }
  findCircleRuntimeAtPoint(e) {
    const t = [...this.clueRuntimes].sort((e, t) => this.getNodeRenderOrder(t.circleNode) - this.getNodeRenderOrder(e.circleNode));
    for (const i of t) if (!this.isClueDone(i.definition.clueType) && this.isPointInsideNode(i.circleNode, e)) return i;
    return null;
  }
  findRuntimeByClueType(e) {
    return this.clueRuntimes.find(t => t.definition.clueType === e) ?? null;
  }
  checkPhase1Complete() {
    this.doneItems.length < 10 || this.enterPhase2Success();
  }
  isClueDone(e) {
    return this.doneItems.indexOf(e) >= 0;
  }
  markClueDone(e) {
    this.isClueDone(e) || (this.doneItems.push(e), this.hasInstallNum = this.doneItems.length, __rea_outer_P.getInstance().refreshGameProgress());
  }
  resolveNextHintKey() {
    for (const e of Z) if (!this.isClueDone(e.clueType)) return e.hintKey;
    return null;
  }
  playIntroLine() {
    const e = __rea_outer_T.getInstance();
    this.tipLabel && (this.tipLabel.string = e.getKey("15_0"), this.setNodeActive(this.tipLabel.node, !0)), this.setNodeActive(this.bubbleNode, !0), __rea_outer_y.playEffect_1("15_0");
  }
  hideBubble() {
    var e;
    this.setNodeActive(this.bubbleNode, !1), this.setNodeActive((null == (e = this.tipLabel) ? void 0 : e.node) ?? null, !1);
  }
  setInputBlocked(e) {
    const t = this.backBgNode;
    if (null == t || !t.isValid) return;
    t.active = e;
    const i = t.getComponent(__rea_outer_v);
    i && (i.enabled = e);
  }
  stopAllLevelTweens() {
    var e, t;
    null != (e = this.bubbleNode) && e.isValid && __rea_outer_f(this.bubbleNode), this.clueRuntimes.forEach(e => {
      var t, i;
      __rea_outer_I([e.circleSprite, e.clickSprite]), null != (t = e.circleNode) && t.isValid && __rea_outer_f(e.circleNode), null != (i = e.clickNode) && i.isValid && __rea_outer_f(e.clickNode);
    }), null != (t = this.contentNode) && t.isValid && __rea_outer_f(this.contentNode);
  }
  setNodeActive(e, t) {
    null != e && e.isValid && (e.active = t);
  }
  setSpriteAlpha(e, t) {
    const i = e.color;
    e.color = new __rea_outer_p(i.r, i.g, i.b, t);
  }
  isPointInsideNode(e, t) {
    const i = null == e ? void 0 : e.getComponent(__rea_outer_m);
    return !!i && i.getBoundingBoxToWorld().contains(t);
  }
  getTouchWorldPoint(e) {
    const t = e.getUILocation();
    return new __rea_outer_r(t.x, t.y);
  }
  getNodeRenderOrder(e) {
    let t = 0,
      i = 1,
      n = e;
    for (; n;) t += n.getSiblingIndex() * i, i *= 128, n = n.parent;
    return t;
  }
}).prototype, "gameNode", [B], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), F = __rea_outer_t(U.prototype, "bubbleNode", [V], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), M = __rea_outer_t(U.prototype, "tipLabel", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), W = __rea_outer_t(U.prototype, "backBgNode", [R], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), G = __rea_outer_t(U.prototype, "clickRootNode", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), K = __rea_outer_t(U.prototype, "contentNode", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), X = __rea_outer_t(U.prototype, "demoTemplateNode", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), $ = __rea_outer_t(U.prototype, "scrollView", [H], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), D = U)) || D);
__rea_outer_n._RF.pop();
export { __recovered_export_0 as ClueType, __recovered_export_1 as default };
