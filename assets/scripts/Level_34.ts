// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_34.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { Vec2 as __rea_outer_i } from "cc";
import { instantiate as __rea_outer_s } from "cc";
import { UITransform as __rea_outer_l } from "cc";
import { Sprite as __rea_outer_o } from "cc";
import { Layout as __rea_outer_n } from "cc";
import { Node as __rea_outer_a } from "cc";
import { Vec3 as __rea_outer_h } from "cc";
import { tween as __rea_outer_r } from "cc";
import { assetManager as __rea_outer_d } from "cc";
import { SpriteFrame as __rea_outer_c } from "cc";
import { BlockInputEvents as __rea_outer_u } from "cc";
import { Color as __rea_outer_p } from "cc";
import { Label as __rea_outer__ } from "cc";
import { ScrollView as __rea_outer_g } from "cc";
import { _decorator as __rea_outer_N } from "cc";
import { default as __rea_outer_m } from "./LevelBase";
import { default as __rea_outer_v } from "./clue-hit-tester";
import { default as __rea_outer_y } from "./AudioManager";
import { I18nController as __rea_outer_C } from "./i18n-controller";
import { UIManager as __rea_outer_f } from "./ui-manager";
import { UILayer as __rea_outer_S } from "./ui-layer";
import { UIHint as __rea_outer_w } from "./uihint";
import { UIFail as __rea_outer_I } from "./uifail";
import { GameController as __rea_outer_B } from "./GameController";
import { stopAllTweens as __rea_outer_k } from "./CocosCompat";
import { setNodeOpacity as __rea_outer_T } from "./CocosCompat";
import { computeContentHorizontalScrollBounds as __rea_outer_x } from "./content-horizontal-scroll";
import { applyContentHorizontalScroll as __rea_outer_b } from "./content-horizontal-scroll";
import { snapBackContentHorizontalScroll as __rea_outer_F } from "./content-horizontal-scroll";
import { default as __rea_outer_P } from "./clue-gesture-detector";
import { SwipeDirection as __rea_outer_A } from "./clue-level-types";
let __recovered_export_0;
var L;
__rea_outer_t._RF.push({}, "b91e4x6PVJI8J5rGnyNLl8E", "Level_34", void 0);
const {
    ccclass: V
  } = __rea_outer_N,
  O = "Level_34",
  E = "level34_2",
  M = "level34_6",
  R = 180,
  H = 12,
  z = .5,
  W = ["level34_hint1", "level34_hint2", "level34_hint3", "level34_hint4", "level34_hint5", "level34_hint6", "level34_hint7", "level34_hint8", "level34_hint9", "level34_hint10", "level34_hint11", "level34_hint12"];
var K = function (e) {
    return e[e.None = 0] = "None", e[e.Collection = 1] = "Collection", e[e.Swipe = 2] = "Swipe", e;
  }(K || {}),
  U = function (e) {
    return e[e.Start = 0] = "Start", e[e.Closed = 1] = "Closed", e[e.Open1 = 2] = "Open1", e[e.Open2 = 3] = "Open2", e[e.Open3 = 4] = "Open3", e[e.Open4 = 5] = "Open4", e[e.Open5 = 6] = "Open5", e[e.Open6 = 7] = "Open6", e[e.Open7 = 8] = "Open7", e[e.Open8 = 9] = "Open8", e[e.Back1 = 10] = "Back1", e[e.Back2 = 11] = "Back2", e[e.Back3 = 12] = "Back3", e[e.Success = 13] = "Success", e[e.Fail = 14] = "Fail", e;
  }(U || {});
const D = [{
    step: 1,
    toolId: 2,
    removesTool: !1
  }, {
    step: 2,
    toolId: 1,
    removesTool: !1
  }, {
    step: 3,
    toolId: 4,
    removesTool: !0
  }, {
    step: 4,
    toolId: 5,
    removesTool: !1
  }, {
    step: 5,
    toolId: 3,
    removesTool: !0
  }, {
    step: 6,
    toolId: 5,
    removesTool: !0
  }, {
    step: 7,
    toolId: 6,
    removesTool: !0
  }, {
    step: 8,
    toolId: 1,
    removesTool: !0
  }, {
    step: 9,
    toolId: 0,
    removesTool: !1
  }, {
    step: 10,
    toolId: 7,
    removesTool: !0
  }, {
    step: 11,
    toolId: 2,
    removesTool: !0
  }, {
    step: 12,
    toolId: 8,
    removesTool: !0
  }],
  G = ["boy", "nested_girl", "girl_1", "girl_2", "girl_1_happy", "girl_1_happy_1", "girl_happy", "girl_happy_1", "clam_shell_start", "clam_shell_end_1", "clam_shell_close", "clam_shell_close_1", "clam_shell_positive", "clam_shell_positive_1", "clam_shell_positive_2", "clam_shell_positive_3", "clam_shell_back", "clam_shell_back_1", "little_pearl_1", "little_pearl_2", "little_pearl_3", "pearl_1", "pearl_1_1", "pearl_2", "pearl_2_1", "pearl_3", "pearl_3_1", "pearl_4", "pearl_4_1", "pearl_5", "pearl_5_1", "pearl_5_2", "moss", "moss_1", "moss_2", "barnacle", "barnacle_1", "face_fire", "face_1", "leg1_1", "leg1_2", "leg2_1", "leg2_2", "star"],
  q = {
    [U.Start]: ["clam_shell_start", "nested_girl", "boy"],
    [U.Closed]: ["clam_shell_close_1", "clam_shell_close", "girl_1"],
    [U.Open1]: ["clam_shell_positive", "clam_shell_positive_3", "girl_1"],
    [U.Open2]: ["clam_shell_positive", "clam_shell_positive_2", "little_pearl_1", "little_pearl_2", "little_pearl_3", "pearl_1_1", "pearl_2_1", "pearl_3_1", "pearl_4_1", "pearl_5_1", "girl_1"],
    [U.Open3]: ["clam_shell_positive", "clam_shell_positive_2", "pearl_1_1", "pearl_2_1", "pearl_3_1", "pearl_4_1", "pearl_5_1", "girl_1"],
    [U.Open4]: ["clam_shell_positive", "clam_shell_positive_2", "pearl_5_1", "girl_1"],
    [U.Open5]: ["clam_shell_positive", "clam_shell_positive_2", "pearl_5_1", "pearl_5_2", "girl_1"],
    [U.Open6]: ["clam_shell_positive", "clam_shell_positive_2", "girl_1"],
    [U.Open7]: ["clam_shell_positive", "clam_shell_positive_1", "girl_1"],
    [U.Open8]: ["clam_shell_positive", "girl_1"],
    [U.Back1]: ["clam_shell_back_1", "moss", "moss_1", "moss_2", "barnacle", "barnacle_1", "girl_2"],
    [U.Back2]: ["clam_shell_back_1", "barnacle", "barnacle_1", "girl_2"],
    [U.Back3]: ["clam_shell_back_1", "girl_2"],
    [U.Success]: ["clam_shell_end_1", "nested_girl", "girl_happy", "boy"],
    [U.Fail]: ["clam_shell_start", "nested_girl", "girl_happy_1", "face_fire", "face_1"]
  },
  $ = new Set(["girl", "girl_happy_1", "face_fire", "face_1", "clam_shell_start", "leg1_1", "leg1_2", "leg2_1", "leg2_2"]),
  Z = new Set(["girl", "girl_happy", "clam_shell_end_1"]);
__recovered_export_0 = V("Level_34")(L = class extends __rea_outer_m {
  constructor(...e) {
    super(...e), this.phase = 0, this.winstate = !1, this.gameNode = null, this.girlNode = null, this.pearlsNode = null, this.clickRootNode = null, this.backBgNode = null, this.bubbleNode = null, this.dialogBoxNode = null, this.tipLabel = null, this.contentNode = null, this.viewNode = null, this.demoTemplateNode = null, this.scrollView = null, this.contentLayout = null, this.touchZone = null, this.fxRoot = null, this.heartFullNodes = [], this.heartBrokenNodes = [], this.stateNodes = new Map(), this.collectionItems = [], this.spriteFrameCache = new Map(), this.currentStep = 1, this.remainingLives = 3, this.isInteractionLocked = !1, this.voiceToken = 0, this.currentDialogueKey = "", this.contentScrollBounds = {
      minX: 0,
      maxX: 0
    }, this.touchSessionKind = K.None, this.touchStartPoint = new __rea_outer_i(), this.scrollStartContentX = 0, this.isContentScrolling = !1, this.pendingCollectionItem = null, this.followerNode = null, this.kickToggle = !1, this.onLevelTouchStart = e => {
      var t, i;
      if (1 !== this.phase || this.isInteractionLocked) return;
      null != (t = this.contentNode) && t.isValid && __rea_outer_k(this.contentNode);
      const s = this.getTouchWorldPoint(e);
      if (this.touchStartPoint = s, this.scrollStartContentX = (null == (i = this.contentNode) ? void 0 : i.position.x) ?? 0, this.isContentScrolling = !1, this.pendingCollectionItem = null, this.isPointInsideNode(this.viewNode, s)) return this.touchSessionKind = K.Collection, this.pendingCollectionItem = this.findCollectionItemAtPoint(s), void (this.pendingCollectionItem && this.beginFollower(this.pendingCollectionItem, s));
      9 === this.currentStep && this.isPointInsideNode(this.touchZone, s) ? this.touchSessionKind = K.Swipe : this.touchSessionKind = K.None;
    }, this.onLevelTouchMove = e => {
      if (1 !== this.phase || this.isInteractionLocked) return;
      if (this.touchSessionKind === K.Swipe) return;
      if (this.touchSessionKind !== K.Collection) return;
      const t = this.getTouchWorldPoint(e);
      this.updateFollowerPosition(t), this.tryBeginContentScroll(t), this.isContentScrolling && (this.destroyFollower(), this.applyContentScroll(this.scrollStartContentX + (t.x - this.touchStartPoint.x)));
    }, this.onLevelTouchEnd = e => {
      const t = this.touchSessionKind,
        i = this.isContentScrolling,
        s = this.touchStartPoint.clone(),
        l = this.getTouchWorldPoint(e),
        o = this.pendingCollectionItem;
      this.resetTouchSession(), 1 !== this.phase || this.isInteractionLocked || (t !== K.Swipe ? i ? this.snapBackContentScroll() : t === K.Collection && o && __rea_outer_v.isDragNearTarget(this.followerNode, this.touchZone) ? this.handleToolDropped(o) : this.returnFollowerToSlot() : this.tryHandleFlipSwipe(s, l));
    }, this.onLevelTouchCancel = () => {
      const e = this.isContentScrolling;
      this.resetTouchSession(), e && this.snapBackContentScroll(), this.returnFollowerToSlot();
    }, this.onKickTick = () => {
      this.kickToggle = !this.kickToggle, this.setNodeActive(this.stateNodes.get("leg1_1"), this.kickToggle), this.setNodeActive(this.stateNodes.get("leg1_2"), !this.kickToggle), this.setNodeActive(this.stateNodes.get("leg2_1"), this.kickToggle), this.setNodeActive(this.stateNodes.get("leg2_2"), !this.kickToggle);
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.allItemNum = H, this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.applyInitialVisibility(), this.enterPhase0();
  }
  onDestroy() {
    this.unscheduleAllCallbacks(), this.unregisterInteractionHandlers(), this.destroyFollower(), this.clearFxRoot(), this.stopTrackedTweens(), super.onDestroy();
  }
  handleTimeExpired() {
    return this.phase >= 2;
  }
  showHint() {
    if (1 !== this.phase) return;
    const e = W[this.currentStep - 1];
    if (!e) return;
    const t = __rea_outer_C.getInstance().getKey(e);
    __rea_outer_f.getInstance().showView(__rea_outer_w, void 0, {
      body: t
    });
  }
  getGameProgressSnapshot() {
    const e = this.hasInstallNum;
    return {
      progress: e / H,
      label: `${e}/12`
    };
  }
  markAllTasksCompleted() {
    this.hasInstallNum = H, this.currentStep = H, this.phase = 2, this.winstate = !0, this.isInteractionLocked = !0, this.unregisterInteractionHandlers();
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.isInteractionLocked = !1, this.hasInstallNum = 0, this.allItemNum = H, this.currentStep = 1, this.remainingLives = 3, this.voiceToken += 1, this.pendingCollectionItem = null, this.stopCurrentDialogueEffect(), this.destroyFollower(), this.clearCollectionItems(), this.clearFxRoot();
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_y.playMusic("bgm4", !0, .5), this.setInputBlocked(!0), this.setNodeActive(this.clickRootNode, !1), this.applyShellState(U.Start), this.populateCollectionBar(), this.playVoiceEffect("34_1", () => {
      this.hideBubble(), this.applyShellState(U.Closed), this.setNodeActive(this.clickRootNode, !0), this.refreshCollectionLayout(), this.setInputBlocked(!1), this.enterPhase1();
    });
  }
  enterPhase1() {
    this.phase = 1, this.refreshCollectionLayout(), this.scheduleOnceIfValid(() => {
      this.refreshCollectionLayout();
    }, 0), this.registerInteractionHandlers(), __rea_outer_B.getInstance().refreshGameProgress();
  }
  enterPhase2Success() {
    this.phase >= 2 || (this.phase = 2, this.winstate = !0, this.isInteractionLocked = !0, this.unregisterInteractionHandlers(), this.setInputBlocked(!0), this.destroyFollower(), this.showSuccessMask(), this.scheduleOnceIfValid(() => {
      this.applySuccessPresentation(), this.hideSuccessMask(), this.playVoiceEffect("34_2", () => {
        this.showLevelSuccess();
      });
    }, .5));
  }
  enterPhase2Fail() {
    this.phase >= 2 || (this.phase = 2, this.winstate = !1, this.isInteractionLocked = !0, this.unregisterInteractionHandlers(), this.setInputBlocked(!0), this.destroyFollower(), this.applyFailPresentation(), this.startKickLoop(), this.playVoiceEffect("34_3", () => {
      this.stopKickLoop(), __rea_outer_B.getInstance().pauseTimer(), __rea_outer_f.getInstance().showView(__rea_outer_I, __rea_outer_S.WIN_ANIMATION);
    }));
  }
  beginTimeoutFail() {
    this.unscheduleAllCallbacks(), this.stopTrackedTweens(), this.destroyFollower(), this.clearFxRoot(), this.phase = 2, this.winstate = !1, this.isInteractionLocked = !0, this.unregisterInteractionHandlers(), this.setInputBlocked(!0), __rea_outer_B.getInstance().pauseTimer(), __rea_outer_f.getInstance().showView(__rea_outer_I, __rea_outer_S.WIN_ANIMATION);
  }
  applyInitialVisibility() {
    var e, t, i, s;
    this.setNodeActive((null == (e = this.gameNode) ? void 0 : e.getChildByName("bg")) ?? null, !0), this.setNodeActive((null == (t = this.gameNode) ? void 0 : t.getChildByName("heart")) ?? null, !1), this.setNodeActive((null == (i = this.gameNode) ? void 0 : i.getChildByName("heart_1")) ?? null, !1), this.setNodeActive((null == (s = this.gameNode) ? void 0 : s.getChildByName("heart_bg")) ?? null, !1), this.setNodeActive(this.node.getChildByPath("UIPanel/demo"), !1), this.setNodeActive(this.demoTemplateNode, !1), this.setNodeActive(this.bubbleNode, !1), this.resetHearts(), this.applyShellState(U.Start);
  }
  applyFailPresentation() {
    this.setNodeActive(this.clickRootNode, !1), this.applyShellState(U.Fail), this.hideGirlChildrenExcept($);
  }
  applySuccessPresentation() {
    this.setNodeActive(this.clickRootNode, !1), this.applyShellState(U.Success), this.hideGirlChildrenExcept(Z);
  }
  hideGirlChildrenExcept(e) {
    var t;
    null != (t = this.girlNode) && t.isValid && this.girlNode.children.forEach(t => {
      e.has(t.name) || (t.active = !1);
    });
  }
  applyShellState(e) {
    G.forEach(e => {
      this.setNodeActive(this.stateNodes.get(e), !1);
    });
    const t = q[e];
    t.forEach(e => {
      this.setNodeActive(this.stateNodes.get(e), !0);
    }), this.syncPearlContainer(t);
  }
  syncPearlContainer(e) {
    const t = e.some(e => e.startsWith("pearl_"));
    this.setNodeActive(this.pearlsNode, t);
  }
  populateCollectionBar() {
    this.clearCollectionItems();
    this.createShuffledToolIds().forEach(e => {
      const t = this.createCollectionItem(e);
      t && this.loadItemBoxFrame(`${e}`, e => {
        this.applyShowpicFrame(t.itemNode, e);
      });
    }), this.refreshCollectionLayout();
  }
  createCollectionItem(e) {
    const t = this.contentNode,
      i = this.demoTemplateNode;
    if (null == t || !t.isValid || null == i || !i.isValid) return null;
    const o = __rea_outer_s(i);
    o.name = `tool_${e}`, o.active = !0, o.setScale(1, 1, 1);
    const n = o.getComponent(__rea_outer_l);
    n && n.setContentSize(R, R), o.setParent(t);
    const a = {
      toolId: e,
      itemNode: o
    };
    return this.collectionItems.push(a), a;
  }
  applyShowpicFrame(e, t) {
    var i;
    const s = (null == (i = e.getChildByName("showpic")) ? void 0 : i.getComponent(__rea_outer_o)) ?? null;
    if (!s || !t) return;
    s.sizeMode = __rea_outer_o.SizeMode.CUSTOM, s.spriteFrame = t;
    const n = s.node.getComponent(__rea_outer_l);
    n && n.setContentSize(t.originalSize.width, t.originalSize.height);
  }
  clearCollectionItems() {
    this.collectionItems.forEach(e => {
      var t;
      null != (t = e.itemNode) && t.isValid && (e.itemNode.removeFromParent(), e.itemNode.destroy());
    }), this.collectionItems.length = 0;
  }
  removeCollectionItemByToolId(e) {
    var t;
    const i = this.collectionItems.find(t => t.toolId === e);
    if (!i) return;
    const s = this.collectionItems.indexOf(i);
    s >= 0 && this.collectionItems.splice(s, 1), null != (t = i.itemNode) && t.isValid && (i.itemNode.removeFromParent(), i.itemNode.destroy()), this.refreshCollectionLayout();
  }
  refreshCollectionLayout() {
    var e;
    this.applyFixedToolSlotSize(), null == (e = this.contentLayout) || e.updateLayout(), this.computeScrollBounds();
  }
  applyFixedToolSlotSize() {
    var e;
    const t = null == (e = this.contentNode) ? void 0 : e.getComponent(__rea_outer_l),
      i = this.contentLayout;
    if (this.collectionItems.forEach(e => {
      e.itemNode.setScale(1, 1, 1);
      const t = e.itemNode.getComponent(__rea_outer_l);
      t && t.setContentSize(R, R);
    }), i && (i.resizeMode = __rea_outer_n.ResizeMode.CONTAINER), !t) return;
    const s = this.collectionItems.length,
      o = (null == i ? void 0 : i.paddingLeft) ?? 20,
      a = (null == i ? void 0 : i.paddingRight) ?? 20,
      h = (null == i ? void 0 : i.spacingX) ?? 16,
      r = o + a + R * s + h * Math.max(0, s - 1);
    t.setContentSize(r, t.height);
  }
  registerInteractionHandlers() {
    this.disableScrollViewComponent(), this.computeScrollBounds(), this.node.on(__rea_outer_a.EventType.TOUCH_START, this.onLevelTouchStart, this), this.node.on(__rea_outer_a.EventType.TOUCH_MOVE, this.onLevelTouchMove, this), this.node.on(__rea_outer_a.EventType.TOUCH_END, this.onLevelTouchEnd, this), this.node.on(__rea_outer_a.EventType.TOUCH_CANCEL, this.onLevelTouchCancel, this);
  }
  unregisterInteractionHandlers() {
    var e;
    null != (e = this.node) && e.isValid && (this.node.off(__rea_outer_a.EventType.TOUCH_START, this.onLevelTouchStart, this), this.node.off(__rea_outer_a.EventType.TOUCH_MOVE, this.onLevelTouchMove, this), this.node.off(__rea_outer_a.EventType.TOUCH_END, this.onLevelTouchEnd, this), this.node.off(__rea_outer_a.EventType.TOUCH_CANCEL, this.onLevelTouchCancel, this), this.resetTouchSession());
  }
  tryBeginContentScroll(e) {
    if (this.isContentScrolling) return;
    if (!this.isPointInsideNode(this.viewNode, e)) return;
    const t = e.x - this.touchStartPoint.x,
      i = e.y - this.touchStartPoint.y;
    Math.abs(t) <= 12 || Math.abs(t) <= Math.abs(i) || (this.isContentScrolling = !0);
  }
  tryHandleFlipSwipe(e, t) {
    if (9 !== this.currentStep) return;
    const i = __rea_outer_P.isSwipeMatching(e, t, __rea_outer_A.Up),
      s = __rea_outer_P.isSwipeMatching(e, t, __rea_outer_A.Down);
    (i || s) && this.completeCurrentStep();
  }
  handleToolDropped(e) {
    this.pendingCollectionItem = null;
    const t = D[this.currentStep - 1];
    t && 0 !== t.toolId && e.toolId === t.toolId ? (this.destroyFollower(), this.beginStepAction(t)) : this.playWrongTool(e);
  }
  playWrongTool(e) {
    this.pendingCollectionItem = null, this.isInteractionLocked = !0, this.setInputBlocked(!0), __rea_outer_y.playEffect_1("level34_1"), this.breakCurrentHeart(), this.returnFollowerToSlot(), this.scheduleOnceIfValid(() => {
      this.remainingLives <= 0 ? this.enterPhase2Fail() : (this.setInputBlocked(!1), this.isInteractionLocked = !1);
    }, .35);
  }
  beginStepAction(e) {
    this.isInteractionLocked = !0, this.setInputBlocked(!0), this.runStepAnimation(e.step, () => {
      e.removesTool && this.removeCollectionItemByToolId(e.toolId), this.completeCurrentStep();
    });
  }
  completeCurrentStep() {
    this.hasInstallNum = Math.min(H, this.hasInstallNum + 1), __rea_outer_B.getInstance().refreshGameProgress();
    const e = this.currentStep;
    this.applyStepResultState(e), e >= H ? this.enterPhase2Success() : (this.currentStep = e + 1, this.setInputBlocked(!1), this.isInteractionLocked = !1);
  }
  applyStepResultState(e) {
    const t = {
      1: U.Open1,
      2: U.Open2,
      3: U.Open3,
      4: U.Open4,
      5: U.Open5,
      6: U.Open6,
      7: U.Open7,
      8: U.Open8,
      9: U.Back1,
      10: U.Back2,
      11: U.Back3,
      12: U.Back3
    }[e];
    void 0 !== t && this.applyShellState(t), this.setNodeActive(this.stateNodes.get("star"), 8 === e || 12 === e);
  }
  runStepAnimation(e, t) {
    switch (e) {
      case 1:
        return void this.playPryAnimation(this.touchZone, t);
      case 2:
      case 8:
        return void this.playWaterAnimation(t);
      case 3:
        return void this.playSpoonAnimation(t);
      case 4:
        return void this.playHandPearlAnimation(["pearl_1_1", "pearl_2_1", "pearl_3_1", "pearl_4_1"], t);
      case 5:
        return void this.playKnifeAnimation(t);
      case 6:
        return void this.playBigPearlHandAnimation(t);
      case 7:
        return void this.playTweezersAnimation(t);
      case 10:
        return void this.playBrushAnimation(t);
      case 11:
        return void this.playBarnaclePryAnimation(t);
      case 12:
        return void this.playGrindAnimation(t);
      default:
        t();
    }
  }
  playPryAnimation(e, t) {
    __rea_outer_y.playEffect_1("level34_4");
    const i = this.getNodeWorldPosition(e),
      s = new __rea_outer_h(i.x + 100, i.y + -100, 0);
    this.spawnFxSprite("2_1", s, e => {
      __rea_outer_k(e), __rea_outer_r(e).to(.175, {
        angle: 18
      }).to(.175, {
        angle: -18
      }).to(.12, {
        angle: 0
      }).call(() => {
        this.destroyFxNode(e), t();
      }).start();
    });
  }
  playWaterAnimation(e) {
    __rea_outer_y.playEffect_1("level34_3");
    const t = this.getNodeWorldPosition(this.touchZone);
    this.spawnFxSprite("1_1", new __rea_outer_h(t.x - 160, t.y, 0), i => {
      this.spawnFxSprite("1_2", new __rea_outer_h(t.x + 160, t.y, 0), t => {
        this.toggleWaterSprites(i, t, 0, () => {
          this.destroyFxNode(i), this.destroyFxNode(t), e();
        });
      });
    });
  }
  toggleWaterSprites(e, t, i, s) {
    if (!this.isValid) return;
    if (i >= 5) return void s();
    const l = i % 2 == 0;
    this.setNodeActive(e, l), this.setNodeActive(t, !l), this.scheduleOnceIfValid(() => {
      this.toggleWaterSprites(e, t, i + 1, s);
    }, .1);
  }
  playSpoonAnimation(e) {
    this.runNameSequence(["little_pearl_1", "little_pearl_2", "little_pearl_3"], (e, t) => {
      this.scrapeLittlePearl(e, t);
    }, e);
  }
  scrapeLittlePearl(e, t) {
    const i = this.stateNodes.get(e) ?? null,
      s = this.getNodeWorldPosition(i),
      l = new __rea_outer_h(s.x + 30, s.y - 40 + 130, 0),
      o = new __rea_outer_h(s.x + 30, s.y + 130, 0);
    __rea_outer_y.playEffect_1(E), this.spawnFxSprite("4_1", l, e => {
      this.spawnFxSprite("4_2", l, s => {
        s.setParent(e), this.placeNodeAtParentBottomLeft(s, e, 90, 120), __rea_outer_r(e).to(z, {
          position: this.worldToFxLocal(o)
        }).call(() => {
          __rea_outer_y.stopOneEffect(E), this.setNodeActive(i, !1), this.destroyFxNode(e), t();
        }).start();
      });
    });
  }
  playHandPearlAnimation(e, t) {
    this.runNameSequence(e, (e, t) => {
      this.squeezePearlPair(e, e.replace("_1", ""), t);
    }, t);
  }
  squeezePearlPair(e, t, i) {
    const s = this.stateNodes.get(e) ?? null,
      l = this.stateNodes.get(t) ?? null;
    this.playHandSqueeze(this.getNodeWorldPosition(s), () => {
      this.setNodeActive(s, !1), this.setNodeActive(l, !0), this.dropNodeOffscreen(l, i);
    });
  }
  playKnifeAnimation(e) {
    const t = this.stateNodes.get("pearl_5_1") ?? null,
      i = this.stateNodes.get("pearl_5_2") ?? null,
      s = this.getNodeWorldPosition(t),
      l = s.x + 100,
      o = new __rea_outer_h(l, s.y + 70, 0);
    this.setNodeActive(i, !0), this.spawnFxSprite("3_1", o, t => {
      __rea_outer_r(t).to(z, {
        position: this.worldToFxLocal(new __rea_outer_h(l, s.y, 0))
      }).call(() => {
        this.destroyFxNode(t), e();
      }).start();
    });
  }
  playBigPearlHandAnimation(e) {
    const t = this.stateNodes.get("pearl_5_1") ?? null,
      i = this.stateNodes.get("pearl_5_2") ?? null,
      s = this.stateNodes.get("pearl_5") ?? null;
    this.playHandSqueeze(this.getNodeWorldPosition(t), () => {
      this.setNodeActive(t, !1), this.setNodeActive(i, !1), this.setNodeActive(s, !0), this.dropNodeOffscreen(s, e);
    });
  }
  playHandSqueeze(e, t) {
    const i = e.y + -30,
      s = new __rea_outer_h(e.x - 212, i, 0),
      l = new __rea_outer_h(e.x + 212, i, 0),
      o = this.worldToFxLocal(new __rea_outer_h(e.x - 132, i, 0)),
      n = this.worldToFxLocal(new __rea_outer_h(e.x + 132, i, 0));
    __rea_outer_y.playEffect_1(E), this.spawnFxSprite("5_1", s, e => {
      this.spawnFxSprite("5_2", l, i => {
        __rea_outer_r(e).to(z, {
          position: o
        }).start(), __rea_outer_r(i).to(z, {
          position: n
        }).call(() => {
          this.destroyFxNode(e), this.destroyFxNode(i), t();
        }).start();
      });
    });
  }
  playTweezersAnimation(e) {
    const t = this.touchZone,
      i = null == t ? void 0 : t.getComponent(__rea_outer_l),
      s = this.getNodeWorldPosition(t),
      o = .35 * ((null == i ? void 0 : i.width) ?? 400),
      n = .35 * ((null == i ? void 0 : i.height) ?? 400),
      a = [new __rea_outer_h(s.x - o, s.y + n, 0), new __rea_outer_h(s.x - o, s.y - n, 0), new __rea_outer_h(s.x + o, s.y + n, 0), new __rea_outer_h(s.x + o, s.y - n, 0)];
    this.spawnFxSprite("6_1", a[0], t => {
      this.showTweezersCorners(t, a, 0, () => {
        this.destroyFxNode(t), e();
      });
    });
  }
  showTweezersCorners(e, t, i, s) {
    this.isValid && e.isValid && (i >= t.length ? s() : (this.setFxWorldPosition(e, t[i]), this.setNodeActive(e, !0), this.scheduleOnceIfValid(() => {
      this.setNodeActive(e, !1), this.scheduleOnceIfValid(() => {
        this.showTweezersCorners(e, t, i + 1, s);
      }, .05);
    }, .2)));
  }
  playBrushAnimation(e) {
    this.runNameSequence(["moss", "moss_1", "moss_2"], (e, t) => {
      this.brushMoss(e, t);
    }, e);
  }
  brushMoss(e, t) {
    const i = this.stateNodes.get(e) ?? null,
      s = this.getNodeWorldPosition(i);
    __rea_outer_y.playEffect_1("level34_5"), this.spawnFxSprite("7_1", new __rea_outer_h(s.x, s.y + 30, 0), e => {
      __rea_outer_r(e).to(.2, {
        position: this.worldToFxLocal(new __rea_outer_h(s.x, s.y - 30, 0))
      }).to(.2, {
        position: this.worldToFxLocal(s)
      }).call(() => {
        this.setNodeActive(i, !1), this.destroyFxNode(e), t();
      }).start();
    });
  }
  playBarnaclePryAnimation(e) {
    this.runNameSequence(["barnacle", "barnacle_1"], (e, t) => {
      const i = this.stateNodes.get(e) ?? null;
      this.playPryAnimation(i, () => {
        this.setNodeActive(i, !1), t();
      });
    }, e);
  }
  playGrindAnimation(e) {
    const t = this.stateNodes.get("clam_shell_back_1") ?? null,
      i = this.stateNodes.get("clam_shell_back") ?? null,
      s = null == t ? void 0 : t.getComponent(__rea_outer_l),
      o = this.getNodeWorldPosition(t),
      n = .4 * ((null == s ? void 0 : s.width) ?? 400),
      a = .4 * ((null == s ? void 0 : s.height) ?? 400);
    __rea_outer_y.playEffect_1(M, void 0, !0), this.setNodeActive(i, !0), this.spawnFxSprite("8_1", new __rea_outer_h(o.x, o.y + a, 0), t => {
      __rea_outer_r(t).to(.45, {
        position: this.worldToFxLocal(new __rea_outer_h(o.x, o.y - a, 0))
      }).to(.01, {
        position: this.worldToFxLocal(new __rea_outer_h(o.x - n, o.y, 0))
      }).to(.45, {
        position: this.worldToFxLocal(new __rea_outer_h(o.x + n, o.y, 0))
      }).call(() => {
        __rea_outer_y.stopOneEffect(M), this.destroyFxNode(t), e();
      }).start();
    });
  }
  dropNodeOffscreen(e, t) {
    if (null == e || !e.isValid) return void t();
    const i = e.position.clone();
    __rea_outer_k(e), __rea_outer_r(e).to(.45, {
      position: new __rea_outer_h(i.x, i.y - 900, i.z)
    }).call(() => {
      this.setNodeActive(e, !1), e.setPosition(i), t();
    }).start();
  }
  runNameSequence(e, t, i) {
    const s = l => {
      this.isValid && (l >= e.length ? i() : t(e[l], () => s(l + 1)));
    };
    s(0);
  }
  beginFollower(e, t) {
    this.destroyFollower();
    const i = new __rea_outer_h(t.x, t.y, 0);
    this.loadItemBoxFrame(`${e.toolId}_1`, t => {
      if (!this.isValid || this.pendingCollectionItem !== e) return;
      const s = new __rea_outer_a(`tool_follower_${e.toolId}`),
        n = s.addComponent(__rea_outer_l),
        h = s.addComponent(__rea_outer_o);
      t && (h.sizeMode = __rea_outer_o.SizeMode.CUSTOM, h.spriteFrame = t, n.setContentSize(t.originalSize.width, t.originalSize.height)), s.setParent(this.node), s.setSiblingIndex(this.node.children.length - 1), this.followerNode = s, this.setFxWorldPosition(s, i);
    });
  }
  updateFollowerPosition(e) {
    const t = this.followerNode;
    null != t && t.isValid && this.setFxWorldPosition(t, new __rea_outer_h(e.x, e.y, 0));
  }
  returnFollowerToSlot() {
    this.destroyFollower();
  }
  destroyFollower() {
    const e = this.followerNode;
    this.followerNode = null, null != e && e.isValid && (__rea_outer_k(e), e.removeFromParent(), e.destroy());
  }
  spawnFxSprite(e, t, i) {
    this.loadItemBoxFrame(e, s => {
      if (!this.isValid) return;
      const n = new __rea_outer_a(`fx_${e}`),
        h = n.addComponent(__rea_outer_l),
        r = n.addComponent(__rea_outer_o);
      s && (r.spriteFrame = s, h.setContentSize(s.originalSize));
      const d = this.ensureFxRoot();
      n.setParent(d), this.setFxWorldPosition(n, t), i(n);
    });
  }
  ensureFxRoot() {
    var e;
    if (null != (e = this.fxRoot) && e.isValid) return this.fxRoot;
    const t = new __rea_outer_a("_fx");
    t.addComponent(__rea_outer_l);
    const i = this.gameNode ?? this.node;
    return t.setParent(i), t.setSiblingIndex(i.children.length - 1), this.fxRoot = t, t;
  }
  clearFxRoot() {
    const e = this.fxRoot;
    this.fxRoot = null, null != e && e.isValid && (e.children.forEach(e => {
      null != e && e.isValid && __rea_outer_k(e);
    }), __rea_outer_k(e), e.removeFromParent(), e.destroy());
  }
  destroyFxNode(e) {
    null != e && e.isValid && (__rea_outer_k(e), e.removeFromParent(), e.destroy());
  }
  setFxWorldPosition(e, t) {
    const i = e.parent,
      s = null == i ? void 0 : i.getComponent(__rea_outer_l);
    null != i && i.isValid && s ? e.setPosition(s.convertToNodeSpaceAR(t)) : e.setWorldPosition(t);
  }
  worldToFxLocal(e) {
    const t = this.ensureFxRoot().getComponent(__rea_outer_l);
    return t ? t.convertToNodeSpaceAR(e) : e.clone();
  }
  getNodeWorldPosition(e) {
    return null != e && e.isValid ? e.worldPosition.clone() : this.getNodeWorldPosition(this.touchZone);
  }
  startKickLoop() {
    this.kickToggle = !1, this.unschedule(this.onKickTick), this.schedule(this.onKickTick, .3), this.onKickTick();
  }
  stopKickLoop() {
    this.unschedule(this.onKickTick), this.setNodeActive(this.stateNodes.get("leg1_1"), !1), this.setNodeActive(this.stateNodes.get("leg1_2"), !1), this.setNodeActive(this.stateNodes.get("leg2_1"), !1), this.setNodeActive(this.stateNodes.get("leg2_2"), !1);
  }
  breakCurrentHeart() {
    const e = this.remainingLives;
    e <= 0 || (this.setNodeActive(this.heartFullNodes[e - 1], !1), this.setNodeActive(this.heartBrokenNodes[e - 1], !0), this.remainingLives = Math.max(0, this.remainingLives - 1));
  }
  resetHearts() {
    this.remainingLives = 3;
    for (let e = 0; e < 3; e += 1) this.setNodeActive(this.heartFullNodes[e], !0), this.setNodeActive(this.heartBrokenNodes[e], !1);
  }
  playVoiceEffect(e, t) {
    this.voiceToken += 1;
    const i = this.voiceToken;
    this.showVoiceBubble(e);
    let s = !1;
    const l = () => {
        !s && this.isValid && i === this.voiceToken && (s = !0, this.unschedule(o), t());
      },
      o = () => {
        l();
      };
    this.scheduleOnce(o, 2.5), this.stopCurrentDialogueEffect(), this.currentDialogueKey = e, __rea_outer_y.playEffect_1(e, l);
  }
  stopCurrentDialogueEffect() {
    this.shouldSkipStopLevelAudio() ? this.currentDialogueKey = "" : (__rea_outer_y.stopVoice(), this.currentDialogueKey && (__rea_outer_y.stopOneEffect(this.currentDialogueKey), this.currentDialogueKey = ""));
  }
  showVoiceBubble(e) {
    const t = __rea_outer_C.getInstance();
    this.tipLabel && (this.tipLabel.string = t.getKey(e), this.setNodeActive(this.tipLabel.node, !0)), this.setNodeActive(this.dialogBoxNode, !0), this.setNodeActive(this.bubbleNode, !0);
  }
  hideBubble() {
    var e;
    this.setNodeActive(this.bubbleNode, !1), this.setNodeActive(this.dialogBoxNode, !1), this.setNodeActive((null == (e = this.tipLabel) ? void 0 : e.node) ?? null, !1);
  }
  loadItemBoxFrame(e, t) {
    const i = this.spriteFrameCache.get(e);
    if (i) return void t(i);
    const s = __rea_outer_d.getBundle(O);
    if (!s) return console.warn("[Level_34] missing bundle Level_34"), void t(null);
    const l = `Texture/item_box/${e}/spriteFrame`;
    s.load(l, __rea_outer_c, (i, s) => {
      if (this.isValid) {
        if (i || !s) return console.warn(`[Level_34] failed to load ${l}`, i), void t(null);
        this.spriteFrameCache.set(e, s), t(s);
      }
    });
  }
  createShuffledToolIds() {
    const e = [];
    for (let t = 1; t <= 8; t += 1) e.push(t);
    for (let t = e.length - 1; t > 0; t -= 1) {
      const i = Math.floor(Math.random() * (t + 1)),
        s = e[t];
      e[t] = e[i], e[i] = s;
    }
    return e;
  }
  findCollectionItemAtPoint(e) {
    for (let t = this.collectionItems.length - 1; t >= 0; t -= 1) {
      const i = this.collectionItems[t];
      if (this.isPointInsideNode(i.itemNode, e)) return i;
    }
    return null;
  }
  disableScrollViewComponent() {
    var e;
    null != (e = this.scrollView) && e.isValid && (this.scrollView.enabled = !1);
  }
  computeScrollBounds() {
    var e;
    const t = this.contentNode,
      i = this.viewNode;
    if (null == t || !t.isValid || null == i || !i.isValid) return;
    const s = new Set();
    null != (e = this.demoTemplateNode) && e.isValid && s.add(this.demoTemplateNode);
    const l = __rea_outer_x(t, i, {
      excludedNodes: s
    });
    l && (this.contentScrollBounds = l, this.applyContentScroll(t.position.x, !1));
  }
  applyContentScroll(e, t = !0) {
    const i = this.contentNode;
    null != i && i.isValid && __rea_outer_b(i, e, this.contentScrollBounds, t, .2);
  }
  snapBackContentScroll() {
    const e = this.contentNode;
    null != e && e.isValid && __rea_outer_F(e, this.contentScrollBounds, .3);
  }
  resetTouchSession() {
    this.touchSessionKind = K.None, this.isContentScrolling = !1;
  }
  setInputBlocked(e) {
    const t = this.backBgNode;
    if (null == t || !t.isValid) return;
    t.active = e;
    const i = t.getComponent(__rea_outer_u);
    i && (i.enabled = e), e || this.setBackBgMaskOpacity(0);
  }
  showSuccessMask() {
    this.setInputBlocked(!0), this.setBackBgMaskOpacity(200);
  }
  hideSuccessMask() {
    this.setBackBgMaskOpacity(0);
  }
  setBackBgMaskOpacity(e) {
    const t = this.backBgNode;
    if (null == t || !t.isValid) return;
    const i = t.getComponent(__rea_outer_o);
    i && (i.color = new __rea_outer_p(0, 0, 0, 255)), __rea_outer_T(t, e);
  }
  resolveReferences() {
    var e, t, i, s, l, o, a, h, r, d, c, u, p, N, m, v, y, C, f, S, w, I, B, k, T, x, b, F, P, A, L, V, O, E, M, R, H, z, W, K, U, D, G, q, $, Z, X, J, Y, j, Q, ee;
    this.gameNode = this.node.getChildByPath("UIPanel/gameNode"), this.girlNode = (null == (e = this.gameNode) ? void 0 : e.getChildByName("girl")) ?? null, this.pearlsNode = (null == (t = this.gameNode) ? void 0 : t.getChildByName("pearls")) ?? null, this.clickRootNode = this.node.getChildByPath("UIPanel/click_root"), this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.bubbleNode = this.node.getChildByPath("UIPanel/bubble"), this.dialogBoxNode = (null == (i = this.bubbleNode) ? void 0 : i.getChildByName("dialog_box")) ?? null, this.tipLabel = (null == (s = this.bubbleNode) || null == (s = s.getChildByPath("dialog_box/Label")) ? void 0 : s.getComponent(__rea_outer__)) ?? null, this.contentNode = (null == (l = this.clickRootNode) ? void 0 : l.getChildByPath("bg/ScrollView/view/content")) ?? null, this.viewNode = (null == (o = this.contentNode) ? void 0 : o.parent) ?? null, this.demoTemplateNode = (null == (a = this.contentNode) ? void 0 : a.getChildByName("demo")) ?? null, this.scrollView = (null == (h = this.clickRootNode) || null == (h = h.getChildByPath("bg/ScrollView")) ? void 0 : h.getComponent(__rea_outer_g)) ?? null, this.contentLayout = (null == (r = this.contentNode) ? void 0 : r.getComponent(__rea_outer_n)) ?? null, this.touchZone = (null == (d = this.gameNode) ? void 0 : d.getChildByPath("clicks/touch")) ?? null, this.stateNodes.clear(), this.stateNodes.set("boy", (null == (c = this.gameNode) ? void 0 : c.getChildByName("boy")) ?? null), this.stateNodes.set("nested_girl", (null == (u = this.girlNode) ? void 0 : u.getChildByName("girl")) ?? null), this.stateNodes.set("girl_1", (null == (p = this.girlNode) ? void 0 : p.getChildByName("girl_1")) ?? null), this.stateNodes.set("girl_2", (null == (N = this.girlNode) ? void 0 : N.getChildByName("girl_2")) ?? null), this.stateNodes.set("girl_1_happy", (null == (m = this.girlNode) ? void 0 : m.getChildByName("girl_1_happy")) ?? null), this.stateNodes.set("girl_1_happy_1", (null == (v = this.girlNode) ? void 0 : v.getChildByName("girl_1_happy_1")) ?? null), this.stateNodes.set("girl_happy", (null == (y = this.girlNode) ? void 0 : y.getChildByName("girl_happy")) ?? null), this.stateNodes.set("girl_happy_1", (null == (C = this.girlNode) ? void 0 : C.getChildByName("girl_happy_1")) ?? null), this.stateNodes.set("clam_shell_start", (null == (f = this.girlNode) ? void 0 : f.getChildByName("clam_shell_start")) ?? null), this.stateNodes.set("clam_shell_end_1", (null == (S = this.girlNode) ? void 0 : S.getChildByName("clam_shell_end_1")) ?? null), this.stateNodes.set("clam_shell_close", (null == (w = this.girlNode) ? void 0 : w.getChildByName("clam_shell_close")) ?? null), this.stateNodes.set("clam_shell_close_1", (null == (I = this.girlNode) ? void 0 : I.getChildByName("clam_shell_close_1")) ?? null), this.stateNodes.set("clam_shell_positive", (null == (B = this.girlNode) ? void 0 : B.getChildByName("clam_shell_positive")) ?? null), this.stateNodes.set("clam_shell_positive_1", (null == (k = this.girlNode) ? void 0 : k.getChildByName("clam_shell_positive_1")) ?? null), this.stateNodes.set("clam_shell_positive_2", (null == (T = this.girlNode) ? void 0 : T.getChildByName("clam_shell_positive_2")) ?? null), this.stateNodes.set("clam_shell_positive_3", (null == (x = this.girlNode) ? void 0 : x.getChildByName("clam_shell_positive_3")) ?? null), this.stateNodes.set("clam_shell_back", (null == (b = this.girlNode) ? void 0 : b.getChildByName("clam_shell_back")) ?? null), this.stateNodes.set("clam_shell_back_1", (null == (F = this.girlNode) ? void 0 : F.getChildByName("clam_shell_back_1")) ?? null);
    const te = (null == (P = this.girlNode) ? void 0 : P.getChildByName("clam_shell_positive_2")) ?? null;
    this.stateNodes.set("little_pearl_1", (null == te ? void 0 : te.getChildByName("little_pearl_1")) ?? null), this.stateNodes.set("little_pearl_2", (null == te ? void 0 : te.getChildByName("little_pearl_2")) ?? null), this.stateNodes.set("little_pearl_3", (null == te ? void 0 : te.getChildByName("little_pearl_3")) ?? null), this.stateNodes.set("pearl_1", (null == (A = this.pearlsNode) ? void 0 : A.getChildByName("pearl_1")) ?? null), this.stateNodes.set("pearl_1_1", (null == (L = this.pearlsNode) ? void 0 : L.getChildByName("pearl_1_1")) ?? null), this.stateNodes.set("pearl_2", (null == (V = this.pearlsNode) ? void 0 : V.getChildByName("pearl_2")) ?? null), this.stateNodes.set("pearl_2_1", (null == (O = this.pearlsNode) ? void 0 : O.getChildByName("pearl_2_1")) ?? null), this.stateNodes.set("pearl_3", (null == (E = this.pearlsNode) ? void 0 : E.getChildByName("pearl_3")) ?? null), this.stateNodes.set("pearl_3_1", (null == (M = this.pearlsNode) ? void 0 : M.getChildByName("pearl_3_1")) ?? null), this.stateNodes.set("pearl_4", (null == (R = this.pearlsNode) ? void 0 : R.getChildByName("pearl_4")) ?? null), this.stateNodes.set("pearl_4_1", (null == (H = this.pearlsNode) ? void 0 : H.getChildByName("pearl_4_1")) ?? null), this.stateNodes.set("pearl_5", (null == (z = this.pearlsNode) ? void 0 : z.getChildByName("pearl_5")) ?? null), this.stateNodes.set("pearl_5_1", (null == (W = this.pearlsNode) ? void 0 : W.getChildByName("pearl_5_1")) ?? null), this.stateNodes.set("pearl_5_2", (null == (K = this.pearlsNode) ? void 0 : K.getChildByName("pearl_5_2")) ?? null), this.stateNodes.set("moss", (null == (U = this.gameNode) ? void 0 : U.getChildByName("moss")) ?? null), this.stateNodes.set("moss_1", (null == (D = this.gameNode) ? void 0 : D.getChildByName("moss_1")) ?? null), this.stateNodes.set("moss_2", (null == (G = this.gameNode) ? void 0 : G.getChildByName("moss_2")) ?? null), this.stateNodes.set("barnacle", (null == (q = this.gameNode) ? void 0 : q.getChildByName("barnacle")) ?? null), this.stateNodes.set("barnacle_1", (null == ($ = this.gameNode) ? void 0 : $.getChildByName("barnacle_1")) ?? null), this.stateNodes.set("face_fire", (null == (Z = this.girlNode) ? void 0 : Z.getChildByName("face_fire")) ?? null), this.stateNodes.set("face_1", (null == (X = this.girlNode) ? void 0 : X.getChildByName("face_1")) ?? null), this.stateNodes.set("leg1_1", (null == (J = this.girlNode) ? void 0 : J.getChildByName("leg1_1")) ?? null), this.stateNodes.set("leg1_2", (null == (Y = this.girlNode) ? void 0 : Y.getChildByName("leg1_2")) ?? null), this.stateNodes.set("leg2_1", (null == (j = this.girlNode) ? void 0 : j.getChildByName("leg2_1")) ?? null), this.stateNodes.set("leg2_2", (null == (Q = this.girlNode) ? void 0 : Q.getChildByName("leg2_2")) ?? null), this.stateNodes.set("star", (null == (ee = this.gameNode) ? void 0 : ee.getChildByName("star")) ?? null), this.heartFullNodes.length = 0, this.heartBrokenNodes.length = 0;
    for (let e = 1; e <= 3; e += 1) {
      var ie;
      const t = (null == (ie = this.clickRootNode) || null == (ie = ie.getChildByName("heart_bg")) ? void 0 : ie.getChildByName(`heart${e}`)) ?? null;
      this.heartFullNodes.push((null == t ? void 0 : t.getChildByName("heart")) ?? null), this.heartBrokenNodes.push((null == t ? void 0 : t.getChildByName("heart_1")) ?? null);
    }
    this.warnIfMissing("UIPanel/gameNode", this.gameNode), this.warnIfMissing("UIPanel/gameNode/clicks/touch", this.touchZone), this.warnIfMissing("UIPanel/click_root", this.clickRootNode), this.warnIfMissing("content", this.contentNode), this.warnIfMissing("demo", this.demoTemplateNode), this.warnIfMissing("girl", this.girlNode);
  }
  stopTrackedTweens() {
    var e;
    [this.contentNode, this.followerNode, this.fxRoot, this.stateNodes.get("pearl_1") ?? null, this.stateNodes.get("pearl_2") ?? null, this.stateNodes.get("pearl_3") ?? null, this.stateNodes.get("pearl_4") ?? null, this.stateNodes.get("pearl_5") ?? null].forEach(e => {
      null != e && e.isValid && __rea_outer_k(e);
    }), null == (e = this.fxRoot) || e.children.forEach(e => {
      null != e && e.isValid && __rea_outer_k(e);
    });
  }
  scheduleOnceIfValid(e, t) {
    this.scheduleOnce(() => {
      this.isValid && e();
    }, t);
  }
  placeNodeAtParentBottomLeft(e, t, i, s) {
    const o = t.getComponent(__rea_outer_l),
      n = (null == o ? void 0 : o.width) ?? 0,
      a = (null == o ? void 0 : o.height) ?? 0,
      h = (null == o ? void 0 : o.anchorX) ?? .5,
      r = (null == o ? void 0 : o.anchorY) ?? .5;
    e.setPosition(-h * n + i, -r * a + s, 0);
  }
  setNodeActive(e, t) {
    null != e && e.isValid && (e.active = t);
  }
  warnIfMissing(e, t) {
    t || console.warn(`[Level_34] missing ${e}`);
  }
  isPointInsideNode(e, t) {
    if (null == e || !e.isValid || !e.activeInHierarchy) return !1;
    const i = e.getComponent(__rea_outer_l);
    return !!i && i.getBoundingBoxToWorld().contains(t);
  }
  getTouchWorldPoint(e) {
    const t = e.getUILocation();
    return new __rea_outer_i(t.x, t.y);
  }
}) || L;
__rea_outer_t._RF.pop();
export { __recovered_export_0 as default };
