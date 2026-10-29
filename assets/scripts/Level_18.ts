// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_18.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { applyDecoratedDescriptor as __rea_outer_t } from "./rollupPluginModLoBabelHelpers";
import { initializerDefineProperty as __rea_outer_i } from "./rollupPluginModLoBabelHelpers";
import { cclegacy as __rea_outer_o } from "cc";
import { Node as __rea_outer_s } from "cc";
import { Label as __rea_outer_n } from "cc";
import { ScrollView as __rea_outer_l } from "cc";
import { SpriteFrame as __rea_outer_h } from "cc";
import { _decorator as __rea_outer_a } from "cc";
import { Vec2 as __rea_outer_r } from "cc";
import { Vec3 as __rea_outer_d } from "cc";
import { Layout as __rea_outer_c } from "cc";
import { ProgressBar as __rea_outer_u } from "cc";
import { Button as __rea_outer_p } from "cc";
import { assetManager as __rea_outer_N } from "cc";
import { UITransform as __rea_outer_g } from "cc";
import { tween as __rea_outer_m } from "cc";
import { instantiate as __rea_outer_v } from "cc";
import { Sprite as __rea_outer_C } from "cc";
import { Tween as __rea_outer_y } from "cc";
import { UIOpacity as __rea_outer_B } from "cc";
import { BlockInputEvents as __rea_outer_S } from "cc";
import { default as __rea_outer_b } from "./LevelBase";
import { default as __rea_outer_f } from "./AudioManager";
import { I18nController as __rea_outer_T } from "./i18n-controller";
import { UIManager as __rea_outer_k } from "./ui-manager";
import { UILayer as __rea_outer_I } from "./ui-layer";
import { UIHint as __rea_outer_R } from "./uihint";
import { UIFail as __rea_outer_P } from "./uifail";
import { stopAllTweens as __rea_outer_w } from "./CocosCompat";
import { computeContentHorizontalScrollBounds as __rea_outer_V } from "./content-horizontal-scroll";
import { applyContentHorizontalScroll as __rea_outer_L } from "./content-horizontal-scroll";
import { snapBackContentHorizontalScroll as __rea_outer__ } from "./content-horizontal-scroll";
import { GameController as __rea_outer_A } from "./GameController";
import { default as __rea_outer_x } from "./clue-gesture-detector";
import { SwipeDirection as __rea_outer_E } from "./clue-level-types";
import { default as __rea_outer_U } from "./ActionSystem";
let __recovered_export_0;
var M, O, F, H, K, D, q, z, X, W, G, $, Y, j, Q, J, Z, ee, te, ie, oe;
__rea_outer_o._RF.push({}, "f18a1gAGABAGKAYAAAAAAAY", "Level_18", void 0);
const {
    ccclass: se,
    property: ne
  } = __rea_outer_a,
  le = "Level_18",
  he = 10;
var ae = function (e) {
  return e[e.None = 0] = "None", e[e.Round1 = 1] = "Round1", e[e.Round2 = 2] = "Round2", e;
}(ae || {});
const re = [{
  id: 1,
  touchName: "touch1",
  voiceKey: "18_2",
  hintKey: "level18_hint1",
  itemBoxPath: "Texture/item_box/1",
  flySourceName: "report_1",
  requiresSwipeUnlock: !1
}, {
  id: 2,
  touchName: "touch2",
  voiceKey: "18_3",
  hintKey: "level18_hint2",
  itemBoxPath: "Texture/item_box/2",
  flySourceName: "photo",
  requiresSwipeUnlock: !1
}, {
  id: 3,
  touchName: "touch3",
  voiceKey: "18_4",
  hintKey: "level18_hint3",
  itemBoxPath: "Texture/item_box/3",
  flySourceName: null,
  requiresSwipeUnlock: !1
}, {
  id: 4,
  touchName: "touch4",
  voiceKey: "18_5",
  hintKey: "level18_hint4",
  itemBoxPath: "Texture/item_box/4",
  flySourceName: null,
  requiresSwipeUnlock: !1
}, {
  id: 5,
  touchName: "touch5",
  voiceKey: "18_6",
  hintKey: "level18_hint5",
  itemBoxPath: "Texture/item_box/5",
  flySourceName: "student_ID_1",
  requiresSwipeUnlock: !1
}, {
  id: 6,
  touchName: "touch6",
  voiceKey: "18_7",
  hintKey: "level18_hint6",
  itemBoxPath: "Texture/item_box/6",
  flySourceName: "package_2",
  requiresSwipeUnlock: !0
}, {
  id: 7,
  touchName: "touch7",
  voiceKey: "18_8",
  hintKey: "level18_hint7",
  itemBoxPath: "Texture/item_box/7",
  flySourceName: null,
  requiresSwipeUnlock: !1
}, {
  id: 8,
  touchName: "touch8",
  voiceKey: "18_9",
  hintKey: "level18_hint8",
  itemBoxPath: "Texture/item_box/8",
  flySourceName: null,
  requiresSwipeUnlock: !1
}, {
  id: 9,
  touchName: "touch9",
  voiceKey: "18_10",
  hintKey: "level18_hint9",
  itemBoxPath: "Texture/item_box/9",
  flySourceName: null,
  requiresSwipeUnlock: !1
}, {
  id: 10,
  touchName: "touch10",
  voiceKey: "18_11",
  hintKey: "level18_hint10",
  itemBoxPath: "Texture/item_box/10",
  flySourceName: "mobile_phone",
  requiresSwipeUnlock: !1
}];
__recovered_export_0 = (M = se("Level_18"), O = ne(__rea_outer_s), F = ne(__rea_outer_s), H = ne(__rea_outer_n), K = ne(__rea_outer_s), D = ne(__rea_outer_s), q = ne(__rea_outer_s), z = ne(__rea_outer_s), X = ne(__rea_outer_l), W = ne([__rea_outer_h]), M((Y = __rea_outer_t(($ = class extends __rea_outer_b {
  constructor(...e) {
    super(...e), __rea_outer_i(this, "gameNode", Y, this), __rea_outer_i(this, "bubbleNode", j, this), __rea_outer_i(this, "tipLabel", Q, this), __rea_outer_i(this, "backBgNode", J, this), __rea_outer_i(this, "clickRootNode", Z, this), __rea_outer_i(this, "contentNode", ee, this), __rea_outer_i(this, "demoTemplateNode", te, this), __rea_outer_i(this, "scrollView", ie, this), __rea_outer_i(this, "itemBoxFrames", oe, this), this.phase = 0, this.winstate = !1, this.roundState = ae.None, this.isInteractionLocked = !1, this.isRound2Settled = !1, this.packageUnlocked = !1, this.round2Elapsed = 0, this.contentLayout = null, this.contentScrollBounds = {
      minX: 0,
      maxX: 0
    }, this.touchStartPoint = new __rea_outer_r(), this.scrollStartContentX = 0, this.isTouchStartedInList = !1, this.isContentScrolling = !1, this.activeTouchRuntime = null, this.clueRuntimes = [], this.spawnedCircles = [], this.itemBoxFrameCache = new Map(), this.circlesRoot = null, this.circleTemplate = null, this.round1Node = null, this.progressBarNode = null, this.progressBar = null, this.progressIconNode = null, this.progressIconStartX = 0, this.progressIconEndX = 0, this.dangerNode = null, this.trainNode = null, this.trainTargetNode = null, this.trainOriginPos = new __rea_outer_d(), this.trainTargetPos = new __rea_outer_d(), this.isTrainMoving = !1, this.trainMoveElapsed = 0, this.ip1Node = null, this.ip2Node = null, this.failNode = null, this.bloodNode = null, this.blood1Node = null, this.rod1Node = null, this.rod2Node = null, this.touch11Node = null, this.packageNode = null, this.package1Node = null, this.buttonChange = null, this.buttonUnChange = null, this.clicksRoot = null, this.onRound2Tick = () => {
      this.isValid && !this.isRound2Settled && this.roundState === ae.Round2 && (this.round2Elapsed = Math.min(20, this.round2Elapsed + 1), this.updateRound2ProgressBar(this.round2Elapsed), this.round2Elapsed >= 20 && this.beginFailSequence(!1));
    }, this.onFailButtonClick = () => {
      this.isRound2Settled || this.roundState !== ae.Round2 || this.beginFailSequence(!0);
    }, this.onTouch11Click = e => {
      if (this.isRound2Settled || this.roundState !== ae.Round2 || this.isInteractionLocked) return;
      const t = this.getTouchWorldPoint(e);
      this.isPointInsideNode(this.touch11Node, t) && this.beginSuccessSequence();
    }, this.onLevelTouchStart = e => {
      var t, i, o;
      if (1 !== this.phase || this.roundState !== ae.Round1 || this.isInteractionLocked) return;
      null != (t = this.contentNode) && t.isValid && __rea_outer_w(this.contentNode);
      const s = this.getTouchWorldPoint(e);
      this.touchStartPoint = s, this.scrollStartContentX = (null == (i = this.contentNode) ? void 0 : i.position.x) ?? 0, this.isTouchStartedInList = this.isPointInsideNode(null == (o = this.contentNode) ? void 0 : o.parent, s), this.isContentScrolling = !1, this.activeTouchRuntime = this.findClueRuntimeAtPoint(s);
    }, this.onLevelTouchMove = e => {
      if (1 !== this.phase || this.roundState !== ae.Round1 || this.isInteractionLocked) return;
      if (!this.isTouchStartedInList) return;
      const t = this.getTouchWorldPoint(e),
        i = t.x - this.touchStartPoint.x,
        o = t.y - this.touchStartPoint.y;
      if (!this.isContentScrolling) {
        const e = Math.abs(i),
          t = Math.abs(o);
        if (e <= 12 || e <= t) return;
        this.isContentScrolling = !0, this.activeTouchRuntime = null;
      }
      this.applyContentScroll(this.scrollStartContentX + i);
    }, this.onLevelTouchEnd = e => {
      const t = this.isContentScrolling,
        i = this.activeTouchRuntime,
        o = this.touchStartPoint.clone();
      if (this.resetContentScrollSession(), this.activeTouchRuntime = null, t) return void this.snapBackContentScroll();
      if (1 !== this.phase || this.roundState !== ae.Round1 || this.isInteractionLocked) return;
      if (!i || i.isDone) return;
      const s = this.getTouchWorldPoint(e);
      (this.isPointInsideNode(i.touchNode, s) || this.isPointInsideNode(i.touchNode, o)) && (!i.definition.requiresSwipeUnlock || i.isUnlocked ? this.completeClue(i) : __rea_outer_x.isSwipeMatching(o, s, __rea_outer_E.Up) && this.unlockPackageClue(i));
    }, this.onLevelTouchCancel = () => {
      const e = this.isContentScrolling;
      this.resetContentScrollSession(), this.activeTouchRuntime = null, e && this.snapBackContentScroll();
    }, this.onRound1CompleteHoldEnd = () => {
      this.isValid && this.roundState === ae.Round1 && this.enterRound2Intro();
    }, this.onDangerBlinkTick = () => {
      var e;
      null != (e = this.dangerNode) && e.isValid && !this.isRound2Settled && (this.dangerNode.active = !this.dangerNode.active);
    }, this.onBloodBlinkTick = () => {
      this.toggleOpacityBlink(this.bloodNode), this.toggleOpacityBlink(this.blood1Node);
    }, this.onClueBubbleHide = () => {
      this.isValid && this.hideBubble();
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.buildClueRuntimes(), this.cacheProgressIconRange(), this.preloadItemBoxFrames(), this.allItemNum = he, this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.enterPhase0();
  }
  onDestroy() {
    this.unscheduleAllCallbacks(), this.unregisterInteractionHandlers(), this.unregisterRound2Buttons(), this.stopBreathAnimations(), this.stopTrainMotion(), this.stopAllLevelTweens(), this.clearSpawnedCircles(), __rea_outer_f.stopVoice();
  }
  update(e) {
    this.updateTrainMotion(e);
  }
  handleTimeExpired() {
    return !!(this.phase >= 2 || this.isRound2Settled);
  }
  showHint() {
    if (1 !== this.phase || this.roundState !== ae.Round1) return;
    const e = this.resolveNextHintKey();
    if (!e) return;
    const t = __rea_outer_T.getInstance().getKey(e);
    __rea_outer_k.getInstance().showView(__rea_outer_R, void 0, {
      body: t
    });
  }
  getGameProgressSnapshot() {
    const e = this.hasInstallNum;
    return {
      progress: e / he,
      label: `${e}/10`
    };
  }
  markAllTasksCompleted() {
    super.markAllTasksCompleted(), this.clueRuntimes.forEach(e => {
      e.isDone = !0, e.isUnlocked = !0;
    }), this.hasInstallNum = he, this.phase = 2, this.winstate = !0, this.isInteractionLocked = !0, this.isRound2Settled = !0, this.unregisterInteractionHandlers(), this.unregisterRound2Buttons();
  }
  resetLevelState() {
    this.unschedule(this.onRound1CompleteHoldEnd), this.phase = 0, this.winstate = !1, this.roundState = ae.None, this.isInteractionLocked = !1, this.isRound2Settled = !1, this.packageUnlocked = !1, this.round2Elapsed = 0, this.hasInstallNum = 0, this.clueRuntimes.forEach(e => {
      e.isDone = !1, e.isUnlocked = !e.definition.requiresSwipeUnlock;
    }), this.clearCollectedItems(), this.clearSpawnedCircles(), this.applyPhase0Visibility(), __rea_outer_f.stopVoice();
  }
  enterPhase0() {
    this.phase = 0, this.roundState = ae.None, __rea_outer_f.playMusic("bgm5", !0, .5), this.applyPhase0Visibility(), this.startBreathAnimations(), this.setInputBlocked(!0), this.playTipLine("18_1"), this.scheduleOnce(() => {
      this.isValid && (this.hideBubble(), this.setInputBlocked(!1), this.enterRound1());
    }, 2);
  }
  enterRound1() {
    this.phase = 1, this.roundState = ae.Round1, this.setNodeActive(this.backBgNode, !1), this.setNodeActive(this.round1Node, !0), this.setNodeActive(this.circlesRoot, !0), this.setNodeActive(this.circleTemplate, !1), this.setNodeActive(this.demoTemplateNode, !1), this.enableCollectionScroll(), this.registerInteractionHandlers(), __rea_outer_A.getInstance().refreshGameProgress();
  }
  enterRound2Intro() {
    this.unschedule(this.onRound1CompleteHoldEnd), this.roundState = ae.Round2, this.isInteractionLocked = !0, this.unregisterInteractionHandlers(), this.unschedule(this.onClueBubbleHide), this.setNodeActive(this.circlesRoot, !1), this.setNodeActive(this.round1Node, !1), this.playTipLine("18_12"), this.scheduleOnce(() => {
      this.isValid && (this.hideBubble(), this.beginRound2Gameplay());
    }, 1.5);
  }
  beginRound2Gameplay() {
    __rea_outer_f.playMusic("bgm3", !0, .5), __rea_outer_f.playEffect_1("level18_3"), __rea_outer_A.getInstance().pauseTimer(), this.round2Elapsed = 0, this.isInteractionLocked = !1, this.setNodeActive(this.clickRootNode, !0), this.setNodeActive(this.progressBarNode, !0), this.setNodeActive(this.touch11Node, !0), this.setNodeActive(this.dangerNode, !0), this.updateRound2ProgressBar(0), this.registerRound2Buttons(), this.startDangerBlink(), this.startTrainMotion(), this.schedule(this.onRound2Tick, 1);
  }
  applyPhase0Visibility() {
    this.setNodeActive(this.clickRootNode, !1), this.setNodeActive(this.round1Node, !1), this.setNodeActive(this.progressBarNode, !1), this.setNodeActive(this.dangerNode, !1), this.setNodeActive(this.touch11Node, !1), this.setNodeActive(this.rod1Node, !0), this.setNodeActive(this.rod2Node, !1), this.setNodeActive(this.failNode, !1), this.setNodeActive(this.packageNode, !0), this.setNodeActive(this.package1Node, !1), this.setNodeActive(this.demoTemplateNode, !1), this.clueRuntimes.forEach(e => {
      this.setNodeActive(e.flySourceNode, !1);
    }), this.setInputBlocked(!0), this.hideBubble();
  }
  resolveReferences() {
    var e, t, i, o, s, h, a, r, d, N, g, m, v, C, y, B, S, b, f, T, k, I, R, P, w, V, L, _;
    this.gameNode = this.gameNode ?? this.node.getChildByPath("UIPanel/gameNode"), this.bubbleNode = this.bubbleNode ?? this.node.getChildByPath("UIPanel/bubble"), this.backBgNode = this.backBgNode ?? this.node.getChildByPath("UIPanel/backBG"), this.clickRootNode = this.clickRootNode ?? this.node.getChildByPath("UIPanel/click_root"), this.tipLabel = this.tipLabel ?? (null == (e = this.bubbleNode) || null == (e = e.getChildByPath("dialog_box/Label")) ? void 0 : e.getComponent(__rea_outer_n)) ?? null, this.round1Node = (null == (t = this.gameNode) ? void 0 : t.getChildByName("round1")) ?? null, this.contentNode = this.contentNode ?? (null == (i = this.round1Node) ? void 0 : i.getChildByPath("bg/ScrollView/view/content")) ?? null, this.demoTemplateNode = this.demoTemplateNode ?? (null == (o = this.contentNode) ? void 0 : o.getChildByName("demo")) ?? null, this.scrollView = this.scrollView ?? (null == (s = this.round1Node) || null == (s = s.getChildByPath("bg/ScrollView")) ? void 0 : s.getComponent(__rea_outer_l)) ?? null, this.contentLayout = (null == (h = this.contentNode) ? void 0 : h.getComponent(__rea_outer_c)) ?? null, this.circlesRoot = (null == (a = this.gameNode) ? void 0 : a.getChildByName("circles")) ?? null, this.circleTemplate = (null == (r = this.gameNode) ? void 0 : r.getChildByName("circle")) ?? null, this.progressBarNode = (null == (d = this.gameNode) ? void 0 : d.getChildByName("ProgressBar")) ?? null, this.progressBar = (null == (N = this.progressBarNode) ? void 0 : N.getComponent(__rea_outer_u)) ?? null, this.progressIconNode = (null == (g = this.progressBarNode) ? void 0 : g.getChildByName("progress_icon")) ?? null, this.dangerNode = (null == (m = this.gameNode) ? void 0 : m.getChildByName("danger")) ?? null, this.trainNode = (null == (v = this.gameNode) ? void 0 : v.getChildByName("train")) ?? null, this.trainTargetNode = (null == (C = this.gameNode) ? void 0 : C.getChildByName("traintarget")) ?? null, this.ip1Node = (null == (y = this.gameNode) ? void 0 : y.getChildByName("IP1")) ?? null, this.ip2Node = (null == (B = this.gameNode) ? void 0 : B.getChildByName("ip2")) ?? null, this.failNode = (null == (S = this.gameNode) ? void 0 : S.getChildByName("failnode")) ?? null, this.bloodNode = (null == (b = this.failNode) ? void 0 : b.getChildByName("blood")) ?? null, this.blood1Node = (null == (f = this.failNode) ? void 0 : f.getChildByName("blood_1")) ?? null, this.rod1Node = (null == (T = this.gameNode) ? void 0 : T.getChildByName("rod_1")) ?? null, this.rod2Node = (null == (k = this.gameNode) ? void 0 : k.getChildByName("rod_2")) ?? null, this.packageNode = (null == (I = this.gameNode) ? void 0 : I.getChildByName("package")) ?? null, this.package1Node = (null == (R = this.gameNode) ? void 0 : R.getChildByName("package_1")) ?? null, this.clicksRoot = (null == (P = this.gameNode) ? void 0 : P.getChildByName("clicks")) ?? null, this.touch11Node = (null == (w = this.clicksRoot) ? void 0 : w.getChildByName("touch11")) ?? null, this.buttonChange = (null == (V = this.clickRootNode) || null == (V = V.getChildByName("ButtonChange")) ? void 0 : V.getComponent(__rea_outer_p)) ?? null, this.buttonUnChange = (null == (L = this.clickRootNode) || null == (L = L.getChildByName("Button-UnChange")) ? void 0 : L.getComponent(__rea_outer_p)) ?? null, null != (_ = this.trainNode) && _.isValid && (this.trainOriginPos = this.trainNode.position.clone()), this.gameNode || console.warn("[Level_18] missing UIPanel/gameNode"), this.contentNode && this.demoTemplateNode || console.warn("[Level_18] missing collection content/demo");
  }
  buildClueRuntimes() {
    this.clueRuntimes.length = 0;
    const e = this.clicksRoot;
    null != e && e.isValid ? re.forEach(t => {
      var i;
      const o = e.getChildByName(t.touchName);
      if (null == o || !o.isValid) return void console.warn(`[Level_18] missing hotspot ${t.touchName}`);
      const s = t.flySourceName ? (null == (i = this.gameNode) ? void 0 : i.getChildByName(t.flySourceName)) ?? null : null;
      this.clueRuntimes.push({
        definition: t,
        touchNode: o,
        flySourceNode: s,
        isDone: !1,
        isUnlocked: !t.requiresSwipeUnlock
      });
    }) : console.warn("[Level_18] missing clicks root");
  }
  cacheProgressIconRange() {
    var e, t;
    if (null == (e = this.progressIconNode) || !e.isValid) return;
    this.progressIconStartX = this.progressIconNode.position.x;
    const i = (null == (t = this.progressBar) ? void 0 : t.totalLength) ?? 430;
    this.progressIconEndX = this.progressIconStartX + i;
  }
  preloadItemBoxFrames() {
    this.itemBoxFrames.forEach((e, t) => {
      e && this.itemBoxFrameCache.set(t + 1, e);
    });
    const e = __rea_outer_N.getBundle(le);
    e && re.forEach(t => {
      if (this.itemBoxFrameCache.has(t.id)) return;
      const i = `${t.itemBoxPath}/spriteFrame`;
      e.load(i, __rea_outer_h, (e, o) => {
        !e && o ? this.itemBoxFrameCache.set(t.id, o) : console.warn(`[Level_18] failed to load ${i}`, e);
      });
    });
  }
  registerInteractionHandlers() {
    this.disableScrollViewComponent(), this.computeScrollBounds(), this.node.on(__rea_outer_s.EventType.TOUCH_START, this.onLevelTouchStart, this), this.node.on(__rea_outer_s.EventType.TOUCH_MOVE, this.onLevelTouchMove, this), this.node.on(__rea_outer_s.EventType.TOUCH_END, this.onLevelTouchEnd, this), this.node.on(__rea_outer_s.EventType.TOUCH_CANCEL, this.onLevelTouchCancel, this);
  }
  unregisterInteractionHandlers() {
    var e;
    null != (e = this.node) && e.isValid && (this.node.off(__rea_outer_s.EventType.TOUCH_START, this.onLevelTouchStart, this), this.node.off(__rea_outer_s.EventType.TOUCH_MOVE, this.onLevelTouchMove, this), this.node.off(__rea_outer_s.EventType.TOUCH_END, this.onLevelTouchEnd, this), this.node.off(__rea_outer_s.EventType.TOUCH_CANCEL, this.onLevelTouchCancel, this), this.resetContentScrollSession(), this.activeTouchRuntime = null);
  }
  registerRound2Buttons() {
    var e, t, i;
    null != (e = this.buttonChange) && null != (e = e.node) && e.isValid && this.buttonChange.node.on(__rea_outer_p.EventType.CLICK, this.onFailButtonClick, this), null != (t = this.buttonUnChange) && null != (t = t.node) && t.isValid && this.buttonUnChange.node.on(__rea_outer_p.EventType.CLICK, this.onFailButtonClick, this), null != (i = this.touch11Node) && i.isValid && this.touch11Node.on(__rea_outer_s.EventType.TOUCH_END, this.onTouch11Click, this);
  }
  unregisterRound2Buttons() {
    var e, t, i;
    null != (e = this.buttonChange) && null != (e = e.node) && e.isValid && this.buttonChange.node.off(__rea_outer_p.EventType.CLICK, this.onFailButtonClick, this), null != (t = this.buttonUnChange) && null != (t = t.node) && t.isValid && this.buttonUnChange.node.off(__rea_outer_p.EventType.CLICK, this.onFailButtonClick, this), null != (i = this.touch11Node) && i.isValid && this.touch11Node.off(__rea_outer_s.EventType.TOUCH_END, this.onTouch11Click, this);
  }
  unlockPackageClue(e) {
    e.isUnlocked || this.packageUnlocked || (this.packageUnlocked = !0, e.isUnlocked = !0, this.setNodeActive(this.packageNode, !1), this.setNodeActive(this.package1Node, !0));
  }
  completeClue(e) {
    var t;
    if (this.isInteractionLocked || e.isDone) return;
    if (e.definition.requiresSwipeUnlock && !e.isUnlocked) return;
    this.isInteractionLocked = !0, e.isDone = !0, this.spawnCircleAt(e.touchNode), this.showClueCompletionTip(e.definition.voiceKey);
    const i = () => {
      this.isValid && (this.addCollectedItem(e.definition.id), this.markClueProgress(), this.TryQuickWin() || (this.hasInstallNum >= he ? this.checkRound1Complete() : this.isInteractionLocked = !1));
    };
    null != (t = e.flySourceNode) && t.isValid ? this.playFlyCollect(e.flySourceNode, i) : i();
  }
  playFlyCollect(e, t) {
    const i = this.contentNode;
    if (null == i || !i.isValid) return void t();
    const o = e.parent,
      s = e.position.clone(),
      n = e.getSiblingIndex(),
      l = e.scale.clone();
    e.active = !0, this.elevateNodeToTopLayer(e), this.scheduleOnce(() => {
      var h;
      if (!this.isValid || !e.isValid) return void t();
      const a = this.resolveFlyTargetWorldPosition(i),
        r = null == (h = e.parent) ? void 0 : h.getComponent(__rea_outer_g);
      if (!r) return this.restoreFlySourceNode(e, o, s, n, l), void t();
      const c = r.convertToNodeSpaceAR(a);
      __rea_outer_w(e), __rea_outer_m(e).to(.35, {
        position: c,
        scale: new __rea_outer_d(.2, .2, 1)
      }, {
        easing: "sineInOut"
      }).call(() => {
        this.isValid && (this.restoreFlySourceNode(e, o, s, n, l), t());
      }).start();
    }, 1);
  }
  restoreFlySourceNode(e, t, i, o, s) {
    null != e && e.isValid && (__rea_outer_w(e), null != t && t.isValid && (e.setParent(t), e.setSiblingIndex(o)), e.setPosition(i), e.setScale(s), e.active = !1);
  }
  spawnCircleAt(e) {
    const t = this.circleTemplate,
      i = this.circlesRoot;
    if (null == t || !t.isValid || null == i || !i.isValid || null == e || !e.isValid) return;
    const o = __rea_outer_v(t);
    o.active = !0, o.setScale(0, 0, 1), o.setParent(i), o.setWorldPosition(e.worldPosition), this.spawnedCircles.push(o), __rea_outer_w(o), __rea_outer_m(o).to(.25, {
      scale: new __rea_outer_d(1, 1, 1)
    }, {
      easing: "backOut"
    }).start();
  }
  addCollectedItem(e) {
    const t = this.contentNode,
      i = this.demoTemplateNode;
    if (null == t || !t.isValid || null == i || !i.isValid) return;
    const o = __rea_outer_v(i);
    o.active = !0, o.setParent(t), o.setSiblingIndex(0), this.applyShowpicFrame(o, e), this.updateContentLayout(), this.computeScrollBounds(), this.scrollCollectionToStart();
  }
  applyShowpicFrame(e, t) {
    const i = e.getChildByName("showpic"),
      o = (null == i ? void 0 : i.getComponent(__rea_outer_C)) ?? null;
    if (!o) return;
    const s = this.itemBoxFrameCache.get(t);
    if (s) return void (o.spriteFrame = s);
    const n = re.find(e => e.id === t),
      l = __rea_outer_N.getBundle(le);
    if (!n || !l) return;
    const a = `${n.itemBoxPath}/spriteFrame`;
    l.load(a, __rea_outer_h, (e, i) => {
      !e && i && o.isValid && (this.itemBoxFrameCache.set(t, i), o.spriteFrame = i);
    });
  }
  markClueProgress() {
    this.hasInstallNum = this.clueRuntimes.filter(e => e.isDone).length, __rea_outer_A.getInstance().refreshGameProgress();
  }
  checkRound1Complete() {
    this.hasInstallNum < he || (this.isInteractionLocked = !0, this.unregisterInteractionHandlers(), this.unschedule(this.onRound1CompleteHoldEnd), this.scheduleOnce(this.onRound1CompleteHoldEnd, 2));
  }
  beginSuccessSequence() {
    this.isRound2Settled || (this.isRound2Settled = !0, this.winstate = !0, this.phase = 2, this.isInteractionLocked = !0, this.unschedule(this.onRound2Tick), this.unregisterRound2Buttons(), this.stopDangerBlink(), this.stopTrainMotion(), this.setNodeActive(this.rod2Node, !0), this.setNodeActive(this.rod1Node, !1), this.setNodeActive(this.touch11Node, !1), this.setNodeActive(this.clickRootNode, !1), this.setNodeActive(this.progressBarNode, !1), __rea_outer_f.playEffect_1("level18_5"), this.scheduleOnce(() => {
      this.isValid && (this.playTipLine("18_13"), this.scheduleOnce(() => {
        this.isValid && (this.hideBubble(), this.showLevelSuccess(0));
      }, 1.5));
    }, 1));
  }
  beginFailSequence(e) {
    this.isRound2Settled || (this.isRound2Settled = !0, this.winstate = !1, this.phase = 2, this.isInteractionLocked = !0, this.unschedule(this.onRound2Tick), this.unregisterRound2Buttons(), this.stopDangerBlink(), this.stopTrainMotion(), this.setNodeActive(this.clickRootNode, !1), this.setNodeActive(this.touch11Node, !1), this.setNodeActive(this.progressBarNode, !1), __rea_outer_A.getInstance().pauseTimer(), e && __rea_outer_f.playEffect_1("level18_2"), this.setNodeActive(this.failNode, !0), this.startBloodBlink(), __rea_outer_f.playEffect_1("level18_4"), this.scheduleOnce(() => {
      this.isValid && __rea_outer_k.getInstance().showView(__rea_outer_P, __rea_outer_I.WIN_ANIMATION);
    }, 1.5));
  }
  updateRound2ProgressBar(e) {
    var t;
    const i = Math.min(1, Math.max(0, e / 20));
    if (this.progressBar && (this.progressBar.progress = i), null != (t = this.progressIconNode) && t.isValid) {
      const e = this.progressIconStartX + (this.progressIconEndX - this.progressIconStartX) * i;
      this.progressIconNode.setPosition(e, this.progressIconNode.position.y, this.progressIconNode.position.z);
    }
  }
  startTrainMotion() {
    const e = this.trainNode,
      t = this.trainTargetNode;
    null != e && e.isValid && null != t && t.isValid && (__rea_outer_w(e), e.setPosition(this.trainOriginPos), e.angle = 0, this.trainTargetPos = t.position.clone(), this.trainMoveElapsed = 0, this.isTrainMoving = !0);
  }
  updateTrainMotion(e) {
    const t = this.trainNode;
    if (!this.isTrainMoving || null == t || !t.isValid || this.isRound2Settled) return;
    this.trainMoveElapsed += e;
    const i = Math.min(1, this.trainMoveElapsed / 20),
      o = this.trainOriginPos.x + (this.trainTargetPos.x - this.trainOriginPos.x) * i,
      s = this.trainOriginPos.y + (this.trainTargetPos.y - this.trainOriginPos.y) * i,
      n = Math.sin(this.trainMoveElapsed * Math.PI * 2 / .55),
      l = Math.sin(this.trainMoveElapsed * Math.PI * 2 / .18),
      h = 3.5 * n + .8 * l,
      a = 2.2 * n + .7 * l;
    t.setPosition(o, s + h, this.trainOriginPos.z), t.angle = a;
  }
  stopTrainMotion() {
    var e;
    this.isTrainMoving = !1, null != (e = this.trainNode) && e.isValid && (__rea_outer_w(this.trainNode), this.trainNode.angle = 0);
  }
  startBreathAnimations() {
    var e, t;
    this.stopBreathAnimations(), null != (e = this.ip1Node) && e.isValid && __rea_outer_U.RoseBreath_tag(this.ip1Node, this.ip1Node.scale.y, .02, .7, 0, 1801), null != (t = this.ip2Node) && t.isValid && __rea_outer_U.RoseBreath_tag(this.ip2Node, this.ip2Node.scale.y, .02, .7, 0, 1802);
  }
  stopBreathAnimations() {
    __rea_outer_y.stopAllByTag(1801), __rea_outer_y.stopAllByTag(1802);
  }
  startDangerBlink() {
    this.unschedule(this.onDangerBlinkTick), this.schedule(this.onDangerBlinkTick, .12);
  }
  stopDangerBlink() {
    this.unschedule(this.onDangerBlinkTick), this.setNodeActive(this.dangerNode, !1);
  }
  startBloodBlink() {
    this.ensureNodeOpacity(this.bloodNode), this.ensureNodeOpacity(this.blood1Node), this.unschedule(this.onBloodBlinkTick), this.schedule(this.onBloodBlinkTick, .45);
  }
  ensureNodeOpacity(e) {
    if (null == e || !e.isValid) return;
    let t = e.getComponent(__rea_outer_B);
    t || (t = e.addComponent(__rea_outer_B)), t.opacity = 255;
  }
  toggleOpacityBlink(e) {
    if (null == e || !e.isValid) return;
    const t = e.getComponent(__rea_outer_B);
    t && (t.opacity = t.opacity > 128 ? 60 : 255);
  }
  clearCollectedItems() {
    const e = this.contentNode,
      t = this.demoTemplateNode;
    if (null == e || !e.isValid || null == t || !t.isValid) return;
    [...e.children].forEach(e => {
      e !== t && (e.removeFromParent(), e.destroy());
    });
  }
  clearSpawnedCircles() {
    for (; this.spawnedCircles.length > 0;) {
      const e = this.spawnedCircles.pop();
      null != e && e.isValid && (__rea_outer_w(e), e.destroy());
    }
  }
  enableCollectionScroll() {
    this.disableScrollViewComponent(), this.computeScrollBounds();
  }
  disableScrollViewComponent() {
    var e;
    null != (e = this.scrollView) && e.isValid && (this.scrollView.enabled = !1);
  }
  computeScrollBounds() {
    var e;
    const t = this.contentNode,
      i = null == t ? void 0 : t.parent;
    if (null == t || !t.isValid || null == i || !i.isValid) return;
    const o = new Set();
    null != (e = this.demoTemplateNode) && e.isValid && o.add(this.demoTemplateNode);
    const s = __rea_outer_V(t, i, {
      excludedNodes: o
    });
    s && (this.contentScrollBounds = s, this.applyContentScroll(t.position.x, !1));
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
  updateContentLayout() {
    var e;
    null == (e = this.contentLayout) || e.updateLayout();
  }
  resolveFlyTargetWorldPosition(e) {
    const t = e.getComponent(__rea_outer_g);
    if (!t) return e.worldPosition.clone();
    const i = t.anchorPoint,
      o = t.contentSize,
      s = -o.width * i.x + 80,
      n = -o.height * i.y + .5 * o.height;
    return t.convertToWorldSpaceAR(new __rea_outer_d(s, n, 0));
  }
  elevateNodeToTopLayer(e) {
    const t = this.node,
      i = e.worldPosition.clone();
    e.setParent(t), e.setWorldPosition(i), e.setSiblingIndex(t.children.length - 1);
  }
  findClueRuntimeAtPoint(e) {
    const t = [...this.clueRuntimes].sort((e, t) => this.getNodeRenderOrder(t.touchNode) - this.getNodeRenderOrder(e.touchNode));
    for (const i of t) if (!i.isDone && this.isPointInsideNode(i.touchNode, e)) return i;
    return null;
  }
  resolveNextHintKey() {
    for (const e of this.clueRuntimes) if (!e.isDone) return e.definition.hintKey;
    return null;
  }
  playTipLine(e, t = !0) {
    const i = __rea_outer_T.getInstance();
    this.tipLabel && (this.tipLabel.string = i.getKey(e), this.setNodeActive(this.tipLabel.node, !0)), t && this.setNodeActive(this.bubbleNode, !0), __rea_outer_f.playVoice(e);
  }
  showClueCompletionTip(e) {
    this.unschedule(this.onClueBubbleHide), this.playTipLine(e, !0), this.scheduleOnce(this.onClueBubbleHide, 2);
  }
  hideBubble() {
    var e;
    this.setNodeActive(this.bubbleNode, !1), this.setNodeActive((null == (e = this.tipLabel) ? void 0 : e.node) ?? null, !1);
  }
  setInputBlocked(e) {
    const t = this.backBgNode;
    if (null == t || !t.isValid) return;
    t.active = e;
    const i = t.getComponent(__rea_outer_S);
    i && (i.enabled = e);
  }
  stopAllLevelTweens() {
    var e, t;
    null != (e = this.trainNode) && e.isValid && __rea_outer_w(this.trainNode), null != (t = this.contentNode) && t.isValid && __rea_outer_w(this.contentNode), this.spawnedCircles.forEach(e => {
      null != e && e.isValid && __rea_outer_w(e);
    }), this.clueRuntimes.forEach(e => {
      var t;
      null != (t = e.flySourceNode) && t.isValid && __rea_outer_w(e.flySourceNode);
    });
  }
  setNodeActive(e, t) {
    null != e && e.isValid && (e.active = t);
  }
  isPointInsideNode(e, t) {
    const i = null == e ? void 0 : e.getComponent(__rea_outer_g);
    return !!i && i.getBoundingBoxToWorld().contains(t);
  }
  getTouchWorldPoint(e) {
    const t = e.getUILocation();
    return new __rea_outer_r(t.x, t.y);
  }
  getNodeRenderOrder(e) {
    let t = 0,
      i = 1,
      o = e;
    for (; o;) t += o.getSiblingIndex() * i, i *= 128, o = o.parent;
    return t;
  }
}).prototype, "gameNode", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), j = __rea_outer_t($.prototype, "bubbleNode", [F], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Q = __rea_outer_t($.prototype, "tipLabel", [H], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), J = __rea_outer_t($.prototype, "backBgNode", [K], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Z = __rea_outer_t($.prototype, "clickRootNode", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ee = __rea_outer_t($.prototype, "contentNode", [q], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), te = __rea_outer_t($.prototype, "demoTemplateNode", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ie = __rea_outer_t($.prototype, "scrollView", [X], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), oe = __rea_outer_t($.prototype, "itemBoxFrames", [W], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), G = $)) || G);
__rea_outer_o._RF.pop();
export { __recovered_export_0 as default };
