// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_23.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { applyDecoratedDescriptor as __rea_outer_t } from "./rollupPluginModLoBabelHelpers";
import { initializerDefineProperty as __rea_outer_i } from "./rollupPluginModLoBabelHelpers";
import { cclegacy as __rea_outer_n } from "cc";
import { Node as __rea_outer_s } from "cc";
import { Label as __rea_outer_l } from "cc";
import { ScrollView as __rea_outer_o } from "cc";
import { _decorator as __rea_outer_r } from "cc";
import { Vec2 as __rea_outer_a } from "cc";
import { Vec3 as __rea_outer_h } from "cc";
import { Sprite as __rea_outer_d } from "cc";
import { Layout as __rea_outer_c } from "cc";
import { UITransform as __rea_outer_u } from "cc";
import { tween as __rea_outer_p } from "cc";
import { instantiate as __rea_outer_m } from "cc";
import { Tween as __rea_outer_g } from "cc";
import { Color as __rea_outer_N } from "cc";
import { BlockInputEvents as __rea_outer_C } from "cc";
import { default as __rea_outer_v } from "./LevelBase";
import { default as __rea_outer_y } from "./AudioManager";
import { I18nController as __rea_outer_S } from "./i18n-controller";
import { UIManager as __rea_outer_T } from "./ui-manager";
import { UIHint as __rea_outer_b } from "./uihint";
import { stopAllTweens as __rea_outer_f } from "./CocosCompat";
import { stopSpritesTweens as __rea_outer_I } from "./CocosCompat";
import { computeContentHorizontalScrollBounds as __rea_outer_L } from "./content-horizontal-scroll";
import { applyContentHorizontalScroll as __rea_outer_w } from "./content-horizontal-scroll";
import { snapBackContentHorizontalScroll as __rea_outer_P } from "./content-horizontal-scroll";
import { GameController as __rea_outer_k } from "./GameController";
import { default as __rea_outer_V } from "./clue-gesture-detector";
import { SwipeDirection as __rea_outer__ } from "./clue-level-types";
let __recovered_export_0, __recovered_export_1;
var B, O, A, U, E, H, D, x, R, G, z, K, F, W, M, X, $, j, q, Q, J, Y, Z, ee, te, ie, ne, se, le, oe, re;
__rea_outer_n._RF.push({}, "a7c3ekfK0hNap4VjwwjsdR6", "Level_23", void 0);
const {
  ccclass: ae,
  property: he
} = __rea_outer_r;
var de = function (e) {
  return e[e.None = 0] = "None", e[e.ContentScroll = 1] = "ContentScroll", e[e.CircleTap = 2] = "CircleTap", e[e.EarthSwipe = 3] = "EarthSwipe", e[e.GlassesSwipe = 4] = "GlassesSwipe", e[e.LampDrag = 5] = "LampDrag", e;
}(de || {});
let ce = __recovered_export_0 = function (e) {
  return e[e.ClueType_1 = 1] = "ClueType_1", e[e.ClueType_2 = 2] = "ClueType_2", e[e.ClueType_3 = 3] = "ClueType_3", e[e.ClueType_4 = 4] = "ClueType_4", e[e.ClueType_5 = 5] = "ClueType_5", e[e.ClueType_6 = 6] = "ClueType_6", e[e.ClueType_7 = 7] = "ClueType_7", e[e.ClueType_8 = 8] = "ClueType_8", e[e.ClueType_9 = 9] = "ClueType_9", e[e.ClueType_10 = 10] = "ClueType_10", e;
}({});
const ue = new Set([ce.ClueType_8, ce.ClueType_9, ce.ClueType_10]),
  pe = ["level23_hint1", "level23_hint2", "level23_hint3", "level23_hint4", "level23_hint5", "level23_hint6", "level23_hint7", "level23_hint8", "level23_hint9", "level23_hint10"].map((e, t) => {
    const i = t + 1;
    return {
      clueType: i,
      circleNodeName: `circle${t + 1}`,
      clueImgNodeName: `${t + 1}`,
      hintKey: e,
      requiresUnlock: ue.has(i)
    };
  });
__recovered_export_1 = (B = ae("Level_23"), O = he(__rea_outer_s), A = he(__rea_outer_s), U = he(__rea_outer_l), E = he(__rea_outer_s), H = he(__rea_outer_s), D = he(__rea_outer_s), x = he(__rea_outer_s), R = he(__rea_outer_o), G = he(__rea_outer_s), z = he(__rea_outer_s), K = he(__rea_outer_s), F = he(__rea_outer_s), W = he(__rea_outer_s), M = he(__rea_outer_s), B((j = __rea_outer_t(($ = class extends __rea_outer_v {
  constructor(...e) {
    super(...e), __rea_outer_i(this, "gameNode", j, this), __rea_outer_i(this, "bubbleNode", q, this), __rea_outer_i(this, "tipLabel", Q, this), __rea_outer_i(this, "backBgNode", J, this), __rea_outer_i(this, "collectNode", Y, this), __rea_outer_i(this, "contentNode", Z, this), __rea_outer_i(this, "demoTemplateNode", ee, this), __rea_outer_i(this, "scrollView", te, this), __rea_outer_i(this, "earthNode", ie, this), __rea_outer_i(this, "glassesNode", ne, this), __rea_outer_i(this, "lampNode", se, this), __rea_outer_i(this, "lamp1Node", le, this), __rea_outer_i(this, "handprintNode", oe, this), __rea_outer_i(this, "bg1Node", re, this), this.phase = 0, this.winstate = !1, this.doneItems = [], this.totalitems = [], this.clueRuntimes = [], this.activeCircleClueType = null, this.touchSessionKind = de.None, this.isInteractionLocked = !1, this.contentLayout = null, this.contentScrollBounds = {
      minX: 0,
      maxX: 0
    }, this.touchStartPoint = new __rea_outer_a(), this.scrollStartContentX = 0, this.isTouchStartedInList = !1, this.isContentScrolling = !1, this.earthOriginPosition = new __rea_outer_h(), this.lampOriginPosition = new __rea_outer_h(), this.lampOriginParent = null, this.lampOriginSiblingIndex = 0, this.lamp1OriginPosition = new __rea_outer_h(), this.lamp1OriginParent = null, this.lamp1OriginSiblingIndex = 0, this.lamp1Sprite = null, this.handprintSprite = null, this.isEarthUnlocked = !1, this.isGlassesUnlocked = !1, this.isHandprintUnlocked = !1, this.isLampDragging = !1, this.onLevelTouchStart = e => {
      var t, i, n;
      if (1 !== this.phase || this.isInteractionLocked) return;
      null != (t = this.contentNode) && t.isValid && __rea_outer_f(this.contentNode);
      const s = this.getTouchWorldPoint(e);
      if (this.touchStartPoint = s, this.scrollStartContentX = (null == (i = this.contentNode) ? void 0 : i.position.x) ?? 0, this.isTouchStartedInList = this.isPointInsideNode(null == (n = this.contentNode) ? void 0 : n.parent, s), this.isContentScrolling = !1, this.activeCircleClueType = null, this.isLampDragging = !1, this.isTouchStartedInList) return void (this.touchSessionKind = de.ContentScroll);
      if (!this.isHandprintUnlocked && this.isPointInsideNode(this.lampNode, s)) return this.touchSessionKind = de.LampDrag, void this.beginLampDrag(s);
      if (!this.isEarthUnlocked && this.isPointInsideNode(this.earthNode, s)) return void (this.touchSessionKind = de.EarthSwipe);
      if (!this.isGlassesUnlocked && this.isPointInsideNode(this.glassesNode, s)) return void (this.touchSessionKind = de.GlassesSwipe);
      const l = this.findConfirmableRuntimeAtPoint(s);
      this.activeCircleClueType = (null == l ? void 0 : l.definition.clueType) ?? null, this.touchSessionKind = l ? de.CircleTap : de.None;
    }, this.onLevelTouchMove = e => {
      if (1 !== this.phase || this.isInteractionLocked) return;
      const t = this.getTouchWorldPoint(e);
      if (this.touchSessionKind === de.LampDrag) return this.moveLampToPoint(t), void this.tryUnlockHandprintByLampGlow();
      if (this.touchSessionKind !== de.ContentScroll || !this.isTouchStartedInList) return;
      const i = t.x - this.touchStartPoint.x,
        n = t.y - this.touchStartPoint.y;
      if (!this.isContentScrolling) {
        const e = Math.abs(i),
          t = Math.abs(n);
        if (e <= 12 || e <= t) return;
        this.isContentScrolling = !0, this.activeCircleClueType = null;
      }
      this.applyContentScroll(this.scrollStartContentX + i);
    }, this.onLevelTouchEnd = e => {
      const t = this.touchSessionKind,
        i = this.isContentScrolling,
        n = this.activeCircleClueType,
        s = this.touchStartPoint.clone(),
        l = this.getTouchWorldPoint(e);
      if (this.resetContentScrollSession(), this.activeCircleClueType = null, this.touchSessionKind = de.None, t === de.LampDrag) return void this.finishLampDrag();
      if (i) return void this.snapBackContentScroll();
      if (1 !== this.phase || this.isInteractionLocked) return;
      if (t === de.EarthSwipe) return void this.tryUnlockEarth(s, l);
      if (t === de.GlassesSwipe) return void this.tryUnlockGlasses(s, l);
      if (t !== de.CircleTap || null === n) return;
      const o = this.findRuntimeByClueType(n);
      o && !this.isClueDone(n) && o.isUnlocked && this.isConfirmPointValid(o, l) && this.completeClue(o, l);
    }, this.onLevelTouchCancel = () => {
      const e = this.touchSessionKind,
        t = this.isContentScrolling;
      if (this.resetContentScrollSession(), this.activeCircleClueType = null, this.touchSessionKind = de.None, e === de.LampDrag) return this.restoreLampNode(), void (this.isLampDragging = !1);
      t && this.snapBackContentScroll();
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.buildClueRuntimes(), this.cacheSpecialNodeOrigins(), this.allItemNum = 10, this.hasInstallNum = 0, this.totalitems = pe.map(e => e.clueType);
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
    const t = __rea_outer_S.getInstance().getKey(e);
    __rea_outer_T.getInstance().showView(__rea_outer_b, void 0, {
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
    this.phase = 0, this.winstate = !1, this.doneItems = [], this.hasInstallNum = 0, this.isInteractionLocked = !1, this.activeCircleClueType = null, this.touchSessionKind = de.None, this.isEarthUnlocked = !1, this.isGlassesUnlocked = !1, this.isHandprintUnlocked = !1, this.isLampDragging = !1, this.hideBubble(), this.prepareSceneForPhase0();
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_y.playMusic("bgm5", !0, .5), this.setInputBlocked(!0), this.scheduleOnceIfValid(() => {
      0 === this.phase && (this.playDialogueLine("23_0", "23_0"), this.scheduleOnceIfValid(() => {
        0 === this.phase && (this.hideBubble(), this.setInputBlocked(!1), this.enterPhase1());
      }, 1.5));
    }, .5);
  }
  skipOpeningToPlay() {
    return 0 === this.phase && (this.stopOpeningDialogue(), this.hideBubble(), this.setInputBlocked(!1), this.enterPhase1(), !0);
  }
  enterPhase1() {
    0 === this.phase && (this.phase = 1, this.setNodeActive(this.collectNode, !0), this.setNodeActive(this.demoTemplateNode, !1), this.registerInteractionHandlers(), __rea_outer_k.getInstance().refreshGameProgress());
  }
  enterPhase2Success() {
    this.phase >= 2 || (this.phase = 2, this.winstate = !0, this.isInteractionLocked = !0, this.unregisterInteractionHandlers(), __rea_outer_k.getInstance().pauseTimer(), __rea_outer_y.playEffect_1("level23_2"), this.scheduleOnceIfValid(() => {
      this.setNodeActive(this.collectNode, !1), this.setNodeActive(this.bg1Node, !0), this.scheduleOnceIfValid(() => {
        this.playDialogueLine("23_1", "23_1"), this.scheduleOnceIfValid(() => {
          this.hideBubble(), this.showLevelSuccess(0);
        }, 2);
      }, .5);
    }, .5));
  }
  prepareSceneForPhase0() {
    this.clueRuntimes.forEach(e => {
      e.isUnlocked = !e.definition.requiresUnlock, this.setNodeActive(e.circleNode, !0), this.setSpriteAlpha(e.circleSprite, 0), this.restoreClueImgNode(e), this.setNodeActive(e.clueImgNode, !1);
    }), this.setNodeActive(this.bubbleNode, !1), this.setNodeActive(this.collectNode, !1), this.setNodeActive(this.demoTemplateNode, !1), this.setNodeActive(this.bg1Node, !1), this.setNodeActive(this.earthNode, !0), this.setNodeActive(this.glassesNode, !0), this.setNodeActive(this.lampNode, !0), this.restoreEarthNode(), this.restoreLampNode(), this.prepareHandprintHidden(), this.clearCollectedItems(), this.updateContentLayout();
  }
  buildClueRuntimes() {
    var e, t;
    this.clueRuntimes.length = 0;
    const i = (null == (e = this.gameNode) ? void 0 : e.getChildByName("circles")) ?? null,
      n = (null == (t = this.gameNode) ? void 0 : t.getChildByName("clueimgs")) ?? null;
    null != i && i.isValid && null != n && n.isValid ? pe.forEach(e => {
      const t = i.getChildByName(e.circleNodeName),
        s = n.getChildByName(e.clueImgNodeName),
        l = (null == t ? void 0 : t.getComponent(__rea_outer_d)) ?? null,
        o = (null == s ? void 0 : s.getComponent(__rea_outer_d)) ?? null;
      null != t && t.isValid && null != s && s.isValid && l && o ? this.clueRuntimes.push({
        definition: e,
        circleNode: t,
        circleSprite: l,
        clueImgNode: s,
        clueImgSprite: o,
        clueImgOriginParent: s.parent,
        clueImgOriginPosition: s.position.clone(),
        clueImgOriginSiblingIndex: s.getSiblingIndex(),
        isUnlocked: !e.requiresUnlock
      }) : console.warn(`[Level_23] 线索节点缺失: ${e.circleNodeName} / ${e.clueImgNodeName}`);
    }) : console.warn("[Level_23] 缺少 circles 或 clueimgs 容器");
  }
  resolveReferences() {
    var e, t, i, n, s, r, a, h, u, p, m, g, N, C, v;
    (this.gameNode = this.gameNode ?? this.node.getChildByPath("UIPanel/gameNode"), this.bubbleNode = this.bubbleNode ?? (null == (e = this.gameNode) ? void 0 : e.getChildByName("bubble")) ?? null, this.backBgNode = this.backBgNode ?? this.node.getChildByPath("UIPanel/backBG") ?? null, this.collectNode = this.collectNode ?? (null == (t = this.gameNode) ? void 0 : t.getChildByName("collectnode")) ?? null, this.contentNode = this.contentNode ?? (null == (i = this.gameNode) ? void 0 : i.getChildByPath("collectnode/ScrollView/view/content")) ?? null, this.demoTemplateNode = this.demoTemplateNode ?? (null == (n = this.contentNode) ? void 0 : n.getChildByName("demo")) ?? null, this.scrollView = this.scrollView ?? (null == (s = this.gameNode) || null == (s = s.getChildByPath("collectnode/ScrollView")) ? void 0 : s.getComponent(__rea_outer_o)) ?? null, this.contentLayout = (null == (r = this.contentNode) ? void 0 : r.getComponent(__rea_outer_c)) ?? null, this.earthNode = this.earthNode ?? (null == (a = this.gameNode) ? void 0 : a.getChildByName("earth")) ?? null, this.glassesNode = this.glassesNode ?? (null == (h = this.gameNode) ? void 0 : h.getChildByName("glasses")) ?? null, this.lampNode = this.lampNode ?? (null == (u = this.gameNode) ? void 0 : u.getChildByName("lamp")) ?? null, this.lamp1Node = this.lamp1Node ?? (null == (p = this.gameNode) ? void 0 : p.getChildByName("lamp1")) ?? null, this.lamp1Sprite = (null == (m = this.lamp1Node) ? void 0 : m.getComponent(__rea_outer_d)) ?? null, this.handprintNode = this.handprintNode ?? (null == (g = this.gameNode) ? void 0 : g.getChildByName("handprint")) ?? null, this.handprintSprite = (null == (N = this.handprintNode) ? void 0 : N.getComponent(__rea_outer_d)) ?? null, this.bg1Node = this.bg1Node ?? (null == (C = this.gameNode) ? void 0 : C.getChildByName("bg_1")) ?? null, this.tipLabel) || (this.tipLabel = (null == (v = this.bubbleNode) || null == (v = v.getChildByPath("dialog_box/Label")) ? void 0 : v.getComponent(__rea_outer_l)) ?? null);
    this.gameNode || console.warn("[Level_23] 缺少 UIPanel/gameNode"), this.contentNode && this.demoTemplateNode || console.warn("[Level_23] 缺少收集栏 content/demo 节点");
  }
  cacheSpecialNodeOrigins() {
    var e, t, i;
    null != (e = this.earthNode) && e.isValid && (this.earthOriginPosition = this.earthNode.position.clone()), null != (t = this.lampNode) && t.isValid && (this.lampOriginParent = this.lampNode.parent, this.lampOriginPosition = this.lampNode.position.clone(), this.lampOriginSiblingIndex = this.lampNode.getSiblingIndex()), null != (i = this.lamp1Node) && i.isValid && (this.lamp1OriginParent = this.lamp1Node.parent, this.lamp1OriginPosition = this.lamp1Node.position.clone(), this.lamp1OriginSiblingIndex = this.lamp1Node.getSiblingIndex());
  }
  registerInteractionHandlers() {
    this.disableScrollViewComponent(), this.computeScrollBounds(), this.node.on(__rea_outer_s.EventType.TOUCH_START, this.onLevelTouchStart, this), this.node.on(__rea_outer_s.EventType.TOUCH_MOVE, this.onLevelTouchMove, this), this.node.on(__rea_outer_s.EventType.TOUCH_END, this.onLevelTouchEnd, this), this.node.on(__rea_outer_s.EventType.TOUCH_CANCEL, this.onLevelTouchCancel, this);
  }
  unregisterInteractionHandlers() {
    var e;
    null != (e = this.node) && e.isValid && (this.node.off(__rea_outer_s.EventType.TOUCH_START, this.onLevelTouchStart, this), this.node.off(__rea_outer_s.EventType.TOUCH_MOVE, this.onLevelTouchMove, this), this.node.off(__rea_outer_s.EventType.TOUCH_END, this.onLevelTouchEnd, this), this.node.off(__rea_outer_s.EventType.TOUCH_CANCEL, this.onLevelTouchCancel, this), this.resetContentScrollSession(), this.activeCircleClueType = null, this.touchSessionKind = de.None, this.isLampDragging = !1);
  }
  tryUnlockEarth(e, t) {
    this.isEarthUnlocked || this.isClueDone(ce.ClueType_8) || __rea_outer_V.isSwipeMatching(e, t, __rea_outer__.Right) && (this.isEarthUnlocked = !0, this.unlockClueRuntime(ce.ClueType_8), this.slideEarthToRight());
  }
  tryUnlockGlasses(e, t) {
    this.isGlassesUnlocked || this.isClueDone(ce.ClueType_9) || __rea_outer_V.isSwipeMatching(e, t, __rea_outer__.Up) && (this.isGlassesUnlocked = !0, this.unlockClueRuntime(ce.ClueType_9), this.setNodeActive(this.glassesNode, !1));
  }
  beginLampDrag(e) {
    const t = this.lampNode;
    null != t && t.isValid && (this.isLampDragging = !0, __rea_outer_f(t), this.showLampGlow(), this.elevateNodeToTopLayer(t), this.moveLampToPoint(e), this.tryUnlockHandprintByLampGlow());
  }
  moveLampToPoint(e) {
    var t;
    const i = this.lampNode;
    if (null == i || !i.isValid || !this.isLampDragging) return;
    const n = new __rea_outer_h(e.x, e.y, 0);
    i.setWorldPosition(n), null != (t = this.lamp1Node) && t.isValid && this.lamp1Node.active && this.lamp1Node.setWorldPosition(n);
  }
  finishLampDrag() {
    this.isLampDragging = !1, this.tryUnlockHandprintByLampGlow(), this.restoreLampNode();
  }
  tryUnlockHandprintByLampGlow() {
    this.isHandprintUnlocked || this.isClueDone(ce.ClueType_10) || this.isLampGlowNearHandprint() && this.unlockHandprint();
  }
  isLampGlowNearHandprint() {
    const e = this.getNodeWorldCenter(this.lamp1Node),
      t = this.getNodeWorldCenter(this.handprintNode);
    return !(!e || !t) && __rea_outer_a.distance(e, t) < 200;
  }
  getNodeWorldCenter(e) {
    const t = null == e ? void 0 : e.getComponent(__rea_outer_u);
    if (!t || null == e || !e.isValid) return null;
    const i = t.contentSize,
      n = t.anchorPoint,
      s = new __rea_outer_h((.5 - n.x) * i.width, (.5 - n.y) * i.height, 0),
      l = t.convertToWorldSpaceAR(s);
    return new __rea_outer_a(l.x, l.y);
  }
  unlockHandprint() {
    this.isHandprintUnlocked || (this.isHandprintUnlocked = !0, this.unlockClueRuntime(ce.ClueType_10), this.fadeInHandprint());
  }
  fadeInHandprint() {
    const e = this.handprintNode,
      t = this.handprintSprite;
    null != e && e.isValid && t && (e.active = !0, this.setSpriteAlpha(t, 0), this.fadeSpriteToAlpha(t, e, .5, 255));
  }
  slideEarthToRight() {
    const e = this.earthNode;
    if (null == e || !e.isValid) return;
    __rea_outer_f(e);
    const t = new __rea_outer_h(this.earthOriginPosition.x + 220, this.earthOriginPosition.y, this.earthOriginPosition.z);
    __rea_outer_p(e).to(.35, {
      position: t
    }, {
      easing: "sineOut"
    }).start();
  }
  completeClue(e, t) {
    this.isInteractionLocked || this.isClueDone(e.definition.clueType) || e.isUnlocked && (this.isInteractionLocked = !0, this.fadeInCircle(e, () => {
      this.isValid && this.playClueFlyAnimation(e, t, () => {
        this.isValid && (this.addCollectedItem(e), __rea_outer_y.playEffect_1("level23_1"), this.markClueDone(e.definition.clueType), this.isInteractionLocked = !1, this.TryQuickWin() || this.checkPhase1Complete());
      });
    }));
  }
  fadeInCircle(e, t) {
    this.fadeSpriteToAlpha(e.circleSprite, e.circleNode, .35, 255, t);
  }
  playClueFlyAnimation(e, t, i) {
    const n = e.clueImgNode,
      s = this.contentNode;
    if (null == n || !n.isValid || null == s || !s.isValid) return void i();
    this.restoreClueImgNode(e), n.active = !0, this.elevateNodeToTopLayer(n), n.setWorldPosition(new __rea_outer_h(t.x, t.y, 0));
    const l = this.resolveFlyTargetWorldPosition(s),
      o = n.parent,
      r = null == o ? void 0 : o.getComponent(__rea_outer_u);
    if (null == o || !o.isValid || !r) return n.active = !1, void i();
    const a = r.convertToNodeSpaceAR(l);
    __rea_outer_f(n), __rea_outer_p(n).to(.65, {
      position: a
    }, {
      easing: "sineInOut"
    }).call(() => {
      this.isValid && (this.restoreClueImgNode(e), i());
    }).start();
  }
  addCollectedItem(e) {
    const t = this.contentNode,
      i = this.demoTemplateNode;
    if (null == t || !t.isValid || null == i || !i.isValid) return;
    const n = __rea_outer_m(i);
    n.active = !0, n.setParent(t), n.setSiblingIndex(0), this.applyShowpicSprite(n, e.clueImgSprite), this.updateContentLayout(), this.computeScrollBounds(), this.scrollCollectionToStart();
  }
  applyShowpicSprite(e, t) {
    const i = e.getChildByName("showpic"),
      n = (null == i ? void 0 : i.getComponent(__rea_outer_d)) ?? null;
    n && t.spriteFrame && (n.spriteFrame = t.spriteFrame);
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
  disableScrollViewComponent() {
    var e;
    null != (e = this.scrollView) && e.isValid && (this.scrollView.enabled = !1);
  }
  computeScrollBounds() {
    const e = this.contentNode,
      t = null == e ? void 0 : e.parent;
    if (null == e || !e.isValid || null == t || !t.isValid) return;
    const i = __rea_outer_L(e, t, {
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
    null != i && i.isValid && __rea_outer_w(i, e, this.contentScrollBounds, t, .2);
  }
  snapBackContentScroll() {
    const e = this.contentNode;
    null != e && e.isValid && __rea_outer_P(e, this.contentScrollBounds, .3);
  }
  resetContentScrollSession() {
    this.isTouchStartedInList = !1, this.isContentScrolling = !1;
  }
  scrollCollectionToStart() {
    this.computeScrollBounds(), this.applyContentScroll(this.contentScrollBounds.maxX, !1);
  }
  resolveFlyTargetWorldPosition(e) {
    const t = e.getComponent(__rea_outer_u);
    if (!t) return e.worldPosition.clone();
    const i = t.anchorPoint,
      n = t.contentSize,
      s = -n.width * i.x + 80,
      l = -n.height * i.y + .5 * n.height;
    return t.convertToWorldSpaceAR(new __rea_outer_h(s, l, 0));
  }
  elevateNodeToTopLayer(e) {
    const t = this.node,
      i = e.worldPosition.clone();
    e.setParent(t), e.setWorldPosition(i), e.setSiblingIndex(t.children.length - 1);
  }
  restoreClueImgNode(e) {
    const t = e.clueImgNode;
    null != t && t.isValid && (__rea_outer_f(t), t.setParent(e.clueImgOriginParent), t.setPosition(e.clueImgOriginPosition), t.setSiblingIndex(e.clueImgOriginSiblingIndex), t.active = !1);
  }
  restoreEarthNode() {
    const e = this.earthNode;
    null != e && e.isValid && (__rea_outer_f(e), e.setPosition(this.earthOriginPosition), e.active = !0);
  }
  restoreLampNode() {
    var e;
    this.hideLampGlow();
    const t = this.lampNode;
    null != t && t.isValid && (__rea_outer_f(t), null != (e = this.lampOriginParent) && e.isValid && (t.setParent(this.lampOriginParent), t.setSiblingIndex(this.lampOriginSiblingIndex)), t.setPosition(this.lampOriginPosition), t.active = !0);
  }
  showLampGlow() {
    const e = this.lamp1Node;
    null != e && e.isValid && (e.active = !0, this.elevateNodeToTopLayer(e), this.startLampGlowFlicker());
  }
  hideLampGlow() {
    var e;
    const t = this.lamp1Node;
    this.stopLampGlowFlicker(), null != t && t.isValid && (null != (e = this.lamp1OriginParent) && e.isValid && (t.setParent(this.lamp1OriginParent), t.setSiblingIndex(this.lamp1OriginSiblingIndex)), t.setPosition(this.lamp1OriginPosition), t.active = !1);
  }
  startLampGlowFlicker() {
    var e;
    const t = this.lamp1Sprite;
    if (!t || null == (e = this.lamp1Node) || !e.isValid) return;
    __rea_outer_g.stopAllByTarget(t), this.setSpriteAlpha(t, 255);
    const i = t.color;
    __rea_outer_p(t).to(.4, {
      color: new __rea_outer_N(i.r, i.g, i.b, 180)
    }, {
      easing: "sineInOut"
    }).to(.4, {
      color: new __rea_outer_N(i.r, i.g, i.b, 255)
    }, {
      easing: "sineInOut"
    }).union().repeatForever().start();
  }
  stopLampGlowFlicker() {
    var e;
    this.lamp1Sprite && __rea_outer_g.stopAllByTarget(this.lamp1Sprite), null != (e = this.lamp1Node) && e.isValid && __rea_outer_f(this.lamp1Node);
  }
  prepareHandprintHidden() {
    const e = this.handprintNode;
    null != e && e.isValid && (e.active = !0, this.handprintSprite && (__rea_outer_g.stopAllByTarget(this.handprintSprite), this.setSpriteAlpha(this.handprintSprite, 0)));
  }
  findConfirmableRuntimeAtPoint(e) {
    const t = [...this.clueRuntimes].sort((e, t) => this.getNodeRenderOrder(t.circleNode) - this.getNodeRenderOrder(e.circleNode));
    for (const i of t) if (!this.isClueDone(i.definition.clueType) && i.isUnlocked && this.isConfirmPointValid(i, e)) return i;
    return null;
  }
  isConfirmPointValid(e, t) {
    return !!this.isPointInsideNode(e.circleNode, t) || e.definition.clueType === ce.ClueType_10 && this.isPointInsideNode(this.handprintNode, t);
  }
  findRuntimeByClueType(e) {
    return this.clueRuntimes.find(t => t.definition.clueType === e) ?? null;
  }
  checkPhase1Complete() {
    this.doneItems.length < 10 || (this.isInteractionLocked = !0, this.unregisterInteractionHandlers(), this.scheduleOnceIfValid(() => {
      this.enterPhase2Success();
    }, 1));
  }
  isClueDone(e) {
    return this.doneItems.includes(e);
  }
  markClueDone(e) {
    this.isClueDone(e) || (this.doneItems.push(e), this.hasInstallNum = this.doneItems.length, __rea_outer_k.getInstance().refreshGameProgress());
  }
  resolveNextHintKey() {
    for (const e of pe) if (!this.isClueDone(e.clueType)) return e.hintKey;
    return null;
  }
  playDialogueLine(e, t) {
    const i = __rea_outer_S.getInstance();
    this.tipLabel && (this.tipLabel.string = i.getKey(e), this.setNodeActive(this.tipLabel.node, !0)), this.setNodeActive(this.bubbleNode, !0), __rea_outer_y.playEffect_1(t);
  }
  hideBubble() {
    var e;
    this.setNodeActive(this.bubbleNode, !1), this.setNodeActive((null == (e = this.tipLabel) ? void 0 : e.node) ?? null, !1);
  }
  setInputBlocked(e) {
    const t = this.backBgNode;
    if (null == t || !t.isValid) return;
    t.active = e;
    const i = t.getComponent(__rea_outer_C);
    i && (i.enabled = e);
  }
  stopAllLevelTweens() {
    [this.bubbleNode, this.earthNode, this.lampNode, this.lamp1Node, this.handprintNode, this.contentNode].forEach(e => {
      null != e && e.isValid && __rea_outer_f(e);
    }), this.lamp1Sprite && __rea_outer_g.stopAllByTarget(this.lamp1Sprite), this.handprintSprite && __rea_outer_g.stopAllByTarget(this.handprintSprite), this.clueRuntimes.forEach(e => {
      var t, i;
      __rea_outer_I([e.circleSprite, e.clueImgSprite]), null != (t = e.circleNode) && t.isValid && __rea_outer_f(e.circleNode), null != (i = e.clueImgNode) && i.isValid && __rea_outer_f(e.clueImgNode);
    });
  }
  setNodeActive(e, t) {
    null != e && e.isValid && (e.active = t);
  }
  setSpriteAlpha(e, t) {
    const i = e.color;
    e.color = new __rea_outer_N(i.r, i.g, i.b, t);
  }
  fadeSpriteToAlpha(e, t, i, n, s) {
    __rea_outer_g.stopAllByTarget(e), __rea_outer_f(t);
    const l = e.color,
      o = __rea_outer_p(e).to(i, {
        color: new __rea_outer_N(l.r, l.g, l.b, n)
      });
    s && o.call(() => {
      this.isValid && s();
    }), o.start();
  }
  unlockClueRuntime(e) {
    const t = this.findRuntimeByClueType(e);
    t && (t.isUnlocked = !0);
  }
  scheduleOnceIfValid(e, t) {
    this.scheduleOnce(() => {
      this.isValid && e();
    }, t);
  }
  isPointInsideNode(e, t) {
    const i = null == e ? void 0 : e.getComponent(__rea_outer_u);
    return !(!i || null == e || !e.isValid) && i.getBoundingBoxToWorld().contains(t);
  }
  getTouchWorldPoint(e) {
    const t = e.getUILocation();
    return new __rea_outer_a(t.x, t.y);
  }
  getNodeRenderOrder(e) {
    let t = 0,
      i = 1,
      n = e;
    for (; n;) t += n.getSiblingIndex() * i, i *= 128, n = n.parent;
    return t;
  }
}).prototype, "gameNode", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), q = __rea_outer_t($.prototype, "bubbleNode", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Q = __rea_outer_t($.prototype, "tipLabel", [U], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), J = __rea_outer_t($.prototype, "backBgNode", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Y = __rea_outer_t($.prototype, "collectNode", [H], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Z = __rea_outer_t($.prototype, "contentNode", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ee = __rea_outer_t($.prototype, "demoTemplateNode", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), te = __rea_outer_t($.prototype, "scrollView", [R], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ie = __rea_outer_t($.prototype, "earthNode", [G], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ne = __rea_outer_t($.prototype, "glassesNode", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), se = __rea_outer_t($.prototype, "lampNode", [K], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), le = __rea_outer_t($.prototype, "lamp1Node", [F], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), oe = __rea_outer_t($.prototype, "handprintNode", [W], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), re = __rea_outer_t($.prototype, "bg1Node", [M], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), X = $)) || X);
__rea_outer_n._RF.pop();
export { __recovered_export_0 as ClueType, __recovered_export_1 as default };
