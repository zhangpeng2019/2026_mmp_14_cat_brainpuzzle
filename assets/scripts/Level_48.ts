// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_48.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { Vec3 as __rea_outer_o } from "cc";
import { Vec2 as __rea_outer_i } from "cc";
import { instantiate as __rea_outer_s } from "cc";
import { UITransform as __rea_outer_n } from "cc";
import { Sprite as __rea_outer_l } from "cc";
import { Layout as __rea_outer_h } from "cc";
import { Node as __rea_outer_d } from "cc";
import { tween as __rea_outer_r } from "cc";
import { assetManager as __rea_outer_a } from "cc";
import { SpriteFrame as __rea_outer_c } from "cc";
import { BlockInputEvents as __rea_outer_N } from "cc";
import { Tween as __rea_outer_u } from "cc";
import { Color as __rea_outer_g } from "cc";
import { Label as __rea_outer_v } from "cc";
import { ScrollView as __rea_outer_p } from "cc";
import { _decorator as __rea_outer_m } from "cc";
import { default as __rea_outer_b } from "./LevelBase";
import { default as __rea_outer_A } from "./clue-hit-tester";
import { default as __rea_outer_f } from "./AudioManager";
import { I18nController as __rea_outer_y } from "./i18n-controller";
import { UIManager as __rea_outer_I } from "./ui-manager";
import { UILayer as __rea_outer_C } from "./ui-layer";
import { UIHint as __rea_outer_w } from "./uihint";
import { UIFail as __rea_outer_S } from "./uifail";
import { GameController as __rea_outer_B } from "./GameController";
import { stopAllTweens as __rea_outer_T } from "./CocosCompat";
import { getUIOpacity as __rea_outer_k } from "./CocosCompat";
import { setNodeOpacity as __rea_outer_F } from "./CocosCompat";
import { computeContentHorizontalScrollBounds as __rea_outer_H } from "./content-horizontal-scroll";
import { applyContentHorizontalScroll as __rea_outer_P } from "./content-horizontal-scroll";
import { snapBackContentHorizontalScroll as __rea_outer_L } from "./content-horizontal-scroll";
let __recovered_export_0;
var _;
__rea_outer_t._RF.push({}, "a8c311HbitPkJwaXU6LJ/DG", "Level_48", void 0);
const {
    ccclass: V
  } = __rea_outer_m,
  M = "Level_48",
  E = "level48_2",
  x = "level48_3",
  D = "level48_4",
  R = "level48_5",
  O = 180,
  W = 11,
  U = .5,
  Z = .5,
  K = 9,
  z = 15,
  Q = 16,
  G = 17,
  X = 18,
  $ = 38,
  j = 42,
  J = 43,
  q = 45,
  Y = 48,
  ee = 49,
  te = 50,
  oe = {
    boy: new __rea_outer_o(-15.5, -5, 0),
    boyArm1: new __rea_outer_o(113.5, 113, 0),
    boyArm2: new __rea_outer_o(220, 210, 0),
    torchFx: new __rea_outer_o(-217.5, -47.5, 0),
    blowBody: new __rea_outer_o(-15, 8.5, 0),
    blowWind: new __rea_outer_o(-264, 75, 0),
    tongsHold: new __rea_outer_o(-150.5, 451.5, 0),
    spark: new __rea_outer_o(-45.5, -202.5, 0),
    barFlat: new __rea_outer_o(-46.5, -239.5, 0),
    barLong: new __rea_outer_o(-46, -241, 0),
    grindStart: new __rea_outer_o(-299, -179, 0),
    grindEnd: new __rea_outer_o(-61, -179, 0),
    grindSparkStart: new __rea_outer_o(-299, -207, 0),
    grindSparkEnd: new __rea_outer_o(-61, -207, 0),
    bladeAnvil: new __rea_outer_o(-45.5, -241.5, 0),
    bladeAnvilHot: new __rea_outer_o(-49.5, -237.5, 0),
    bladeForgeHot: new __rea_outer_o(-296.5, 324.5, 0),
    ironAnvilHot: new __rea_outer_o(-46.5, -218.5, 0),
    handle: new __rea_outer_o(107.5, -246.5, 0),
    finishedSword: new __rea_outer_o(310.5, 386.5, 0),
    tongsAnvilRest: new __rea_outer_o(145.5, -121.5, 0)
  },
  ie = ["level48_hint1", "level48_hint2", "level48_hint3", "level48_hint4", "level48_hint5", "level48_hint6", "level48_hint7", "level48_hint8", "level48_hint9", "level48_hint10", "level48_hint11"];
var se = function (e) {
  return e[e.None = 0] = "None", e[e.Collection = 1] = "Collection", e[e.Workpiece = 2] = "Workpiece", e;
}(se || {});
const ne = [{
  step: 1,
  toolId: 1,
  removesTool: !0
}, {
  step: 2,
  toolId: 2,
  removesTool: !0
}, {
  step: 3,
  toolId: 3,
  removesTool: !0
}, {
  step: 4,
  toolId: 4,
  removesTool: !1
}, {
  step: 5,
  toolId: 5,
  removesTool: !1
}, {
  step: 6,
  toolId: 5,
  removesTool: !0
}, {
  step: 7,
  toolId: 6,
  removesTool: !1
}, {
  step: 8,
  toolId: 4,
  removesTool: !0
}, {
  step: 9,
  toolId: 0,
  removesTool: !1
}, {
  step: 10,
  toolId: 6,
  removesTool: !0
}, {
  step: 11,
  toolId: 7,
  removesTool: !0
}];
__recovered_export_0 = V("Level_48")(_ = class extends __rea_outer_b {
  constructor(...e) {
    super(...e), this.phase = 0, this.winstate = !1, this.gameNode = null, this.clickRootNode = null, this.backBgNode = null, this.bubbleNode = null, this.dialogBoxNode = null, this.dialogPointerNode = null, this.tipLabel = null, this.contentNode = null, this.viewNode = null, this.collectionBarNode = null, this.demoTemplateNode = null, this.scrollView = null, this.contentLayout = null, this.forgeNode = null, this.bucketNode = null, this.bucketCoverNode = null, this.carbon1Node = null, this.carbon2Node = null, this.carbon3Node = null, this.tempering1Node = null, this.tempering2Node = null, this.tempering3Node = null, this.boyNode = null, this.boyArm1Node = null, this.boyArm2Node = null, this.torchFxNode = null, this.blowBodyNode = null, this.blowWindNode = null, this.ironForgeFlashNode = null, this.ironForgeHotNode = null, this.ironAnvilHotNode = null, this.tongsDropZoneNode = null, this.hammerDropZoneNode = null, this.grindDropZoneNode = null, this.tongsReheatDropZoneNode = null, this.tongsForgeFollowNode = null, this.tongsAnvilFollowNode = null, this.tongsHoldNode = null, this.hammerNode = null, this.sparkNode = null, this.barFlatNode = null, this.barLongNode = null, this.grindWheelNode = null, this.grindSparkNode = null, this.bladeAnvilShapeNode = null, this.bladeAnvilHotNode = null, this.bladeForgeHotNode = null, this.bladeQuenchedNode = null, this.bladeFinishedNode = null, this.handleNode = null, this.finishedSwordNode = null, this.heartBgNode = null, this.heartFullNodes = [], this.heartBrokenNodes = [], this.collectionItems = [], this.spriteFrameCache = new Map(), this.restPositions = new Map(), this.currentStep = 1, this.remainingLives = 3, this.isInteractionLocked = !1, this.voiceToken = 0, this.currentDialogueKey = "", this.contentScrollBounds = {
      minX: 0,
      maxX: 0
    }, this.touchSessionKind = se.None, this.touchStartPoint = new __rea_outer_i(), this.scrollStartContentX = 0, this.isContentScrolling = !1, this.hasLeftCollectionBar = !1, this.pendingCollectionItem = null, this.followerNode = null, this.liftedNode = null, this.liftedLayer = null, this.toolIcon1Node = null, this.toolIcon2Node = null, this.toolIcon3Node = null, this.temperingToggle = !1, this.onLevelTouchStart = e => {
      var t, o;
      if (1 !== this.phase || this.isInteractionLocked) return;
      null != (t = this.contentNode) && t.isValid && __rea_outer_T(this.contentNode);
      const i = this.getTouchWorldPoint(e);
      return this.touchStartPoint = i, this.scrollStartContentX = (null == (o = this.contentNode) ? void 0 : o.position.x) ?? 0, this.isContentScrolling = !1, this.hasLeftCollectionBar = !1, this.pendingCollectionItem = null, this.isPointInsideCollectionBar(i) ? (this.touchSessionKind = se.Collection, this.pendingCollectionItem = this.findCollectionItemAtPoint(i), void (this.pendingCollectionItem && this.beginFollower(this.pendingCollectionItem, i))) : 9 === this.currentStep && this.isPointInsideNode(this.bladeAnvilHotNode, i) ? (this.touchSessionKind = se.Workpiece, void this.beginWorkpieceDrag(i)) : void (this.touchSessionKind = se.None);
    }, this.onLevelTouchMove = e => {
      if (1 !== this.phase || this.isInteractionLocked) return;
      const t = this.getTouchWorldPoint(e);
      if (this.touchSessionKind !== se.Workpiece) {
        if (this.touchSessionKind === se.Collection) if (this.isPointInsideCollectionBar(t)) {
          if (this.hasLeftCollectionBar) this.updateFollowerPosition(t);else {
            if (this.tryBeginContentScroll(t), this.isContentScrolling) return this.returnFollowerToSlot(), void this.applyContentScroll(this.scrollStartContentX + (t.x - this.touchStartPoint.x));
            this.updateFollowerPosition(t);
          }
        } else this.markLeftCollectionBar(t);
      } else this.setNodeToTouch(this.bladeAnvilHotNode, t);
    }, this.onLevelTouchEnd = e => {
      const t = this.touchSessionKind,
        o = this.isContentScrolling,
        i = this.hasLeftCollectionBar,
        s = this.pendingCollectionItem,
        n = this.getTouchWorldPoint(e),
        l = this.isPointInsideCollectionBar(n);
      if (t === se.Workpiece ? this.setNodeToTouch(this.bladeAnvilHotNode, n) : t !== se.Collection || !i && l || (this.ensureCollectionFollower(n), this.updateFollowerPosition(n)), this.resetTouchSession(), 1 !== this.phase || this.isInteractionLocked) return;
      if (o && this.snapBackContentScroll(), t === se.Workpiece) return void this.handleWorkpieceDropped();
      if (t !== se.Collection || !s) return void this.returnFollowerToSlot();
      !i && l || !this.isImageNearTarget(this.followerNode, this.getCurrentDropTarget()) ? this.returnFollowerToSlot() : this.handleToolDropped(s);
    }, this.onLevelTouchCancel = () => {
      const e = this.isContentScrolling,
        t = this.touchSessionKind;
      this.resetTouchSession(), e && this.snapBackContentScroll(), t !== se.Workpiece ? this.returnFollowerToSlot() : this.restoreWorkpiece();
    }, this.onTemperingTick = () => {
      this.temperingToggle = !this.temperingToggle, this.setNodeActive(this.tempering2Node, this.temperingToggle), this.setNodeActive(this.tempering3Node, !this.temperingToggle);
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.allItemNum = W, this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.applyInitialVisibility(), this.enterPhase0();
  }
  onDestroy() {
    this.unscheduleAllCallbacks(), this.unregisterInteractionHandlers(), this.stopProcessEffects(), this.returnFollowerToSlot(), this.stopTrackedTweens(), super.onDestroy();
  }
  handleTimeExpired() {
    return this.phase >= 2;
  }
  showHint() {
    if (1 !== this.phase) return;
    const e = ie[this.currentStep - 1];
    if (!e) return;
    const t = __rea_outer_y.getInstance().getKey(e);
    __rea_outer_I.getInstance().showView(__rea_outer_w, void 0, {
      body: t
    });
  }
  getGameProgressSnapshot() {
    const e = this.hasInstallNum;
    return {
      progress: e / W,
      label: `${e}/11`
    };
  }
  markAllTasksCompleted() {
    this.hasInstallNum = W, this.currentStep = W, this.phase = 2, this.winstate = !0, this.isInteractionLocked = !0, this.unregisterInteractionHandlers();
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.isInteractionLocked = !1, this.hasInstallNum = 0, this.allItemNum = W, this.currentStep = 1, this.remainingLives = 3, this.voiceToken += 1, this.pendingCollectionItem = null, this.stopCurrentDialogueEffect(), this.returnFollowerToSlot(), this.clearCollectionItems(), this.stopTemperingLoop();
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_f.playMusic("bgm4", !0, .5), this.populateCollectionBar(), this.setNodeActive(this.clickRootNode, !1), this.hideHeartHud(), this.showIntroActors(), this.setInputBlocked(!0), this.playVoiceEffect("48_1", () => {
      this.hideBubble(), this.hideIntroActors(), this.setNodeActive(this.clickRootNode, !0), this.showHeartHud(), this.refreshCollectionLayout(), this.setInputBlocked(!1), this.enterPhase1();
    });
  }
  enterPhase1() {
    this.phase = 1, this.refreshCollectionLayout(), this.scheduleOnceIfValid(() => {
      this.refreshCollectionLayout();
    }, 0), this.registerInteractionHandlers(), __rea_outer_B.getInstance().refreshGameProgress();
  }
  enterPhase2Success() {
    this.phase >= 2 || (this.phase = 2, this.winstate = !0, this.lockSettlement(), this.setInputBlocked(!0), this.setBackBgMaskOpacity(0), this.fadeBackBgMask(200, Z, () => {
      this.applySuccessPresentation(), this.fadeBackBgMask(0, Z, () => {
        this.playVoiceEffect("48_2", () => {
          this.showLevelSuccess();
        });
      });
    }));
  }
  enterPhase2Fail() {
    this.phase >= 2 || (this.phase = 2, this.winstate = !1, this.lockSettlement(), this.setInputBlocked(!0), this.setBackBgMaskOpacity(0), this.fadeBackBgMask(200, Z, () => {
      this.applyFailPresentation(), this.fadeBackBgMask(0, Z, () => {
        this.playVoiceEffect("48_3", () => {
          __rea_outer_B.getInstance().pauseTimer(), __rea_outer_I.getInstance().showView(__rea_outer_S, __rea_outer_C.WIN_ANIMATION);
        });
      });
    }));
  }
  beginTimeoutFail() {
    this.unscheduleAllCallbacks(), this.stopProcessEffects(), this.stopTrackedTweens(), this.returnFollowerToSlot(), this.phase = 2, this.winstate = !1, this.isInteractionLocked = !0, this.unregisterInteractionHandlers(), this.setInputBlocked(!0), __rea_outer_B.getInstance().pauseTimer(), __rea_outer_I.getInstance().showView(__rea_outer_S, __rea_outer_C.WIN_ANIMATION);
  }
  lockSettlement() {
    this.isInteractionLocked = !0, this.unregisterInteractionHandlers(), this.setInputBlocked(!0), this.returnFollowerToSlot(), this.stopProcessEffects();
  }
  applyInitialVisibility() {
    var e, t;
    this.setNodeActive((null == (e = this.gameNode) ? void 0 : e.getChildByName("bg")) ?? null, !0), this.setNodeActive(this.forgeNode, !0), this.setNodeActive((null == (t = this.gameNode) ? void 0 : t.getChildByName("anvil")) ?? null, !0), this.setNodeActive(this.bucketNode, !0), this.setNodeActive(this.carbon1Node, !0), this.setNodeActive(this.carbon2Node, !1), this.setNodeActive(this.carbon3Node, !1), this.setNodeActive(this.tempering1Node, !1), this.setNodeActive(this.tempering2Node, !1), this.setNodeActive(this.tempering3Node, !1), this.setNodeActive(this.bucketCoverNode, !1), this.hideProcessSprites(), this.hideSceneTools(), this.hideHeartHud(), this.setNodeActive(this.clickRootNode, !1), this.setNodeActive(this.node.getChildByPath("UIPanel/demo"), !1), this.setNodeActive(this.demoTemplateNode, !1), this.setNodeActive(this.bubbleNode, !1), this.setNodeActive(this.tongsDropZoneNode, !0), this.setNodeActive(this.hammerDropZoneNode, !0), this.setNodeActive(this.grindDropZoneNode, !0), this.setNodeActive(this.tongsReheatDropZoneNode, !0), this.showIntroActors();
  }
  hideProcessSprites() {
    [this.torchFxNode, this.blowBodyNode, this.blowWindNode, this.ironForgeFlashNode, this.ironForgeHotNode, this.ironAnvilHotNode, this.getChildBySibling(G), this.tongsForgeFollowNode, this.tongsAnvilFollowNode, this.tongsHoldNode, this.hammerNode, this.sparkNode, this.barFlatNode, this.barLongNode, this.grindWheelNode, this.grindSparkNode, this.bladeAnvilShapeNode, this.bladeAnvilHotNode, this.bladeForgeHotNode, this.getChildBySibling(Y), this.bladeQuenchedNode, this.bladeFinishedNode, this.getChildBySibling(q), this.handleNode, this.finishedSwordNode, this.boyArm2Node].forEach(e => this.setNodeActive(e, !1));
  }
  hideSceneTools() {
    for (let t = 1; t <= 7; t += 1) {
      var e;
      this.setNodeActive((null == (e = this.gameNode) ? void 0 : e.getChildByName(`${t}`)) ?? null, !1);
    }
  }
  showIntroActors() {
    this.setNodePosition(this.boyNode, oe.boy), this.setNodePosition(this.boyArm1Node, oe.boyArm1), this.setNodeActive(this.boyNode, !0), this.setNodeActive(this.boyArm1Node, !0), this.setNodeActive(this.boyArm2Node, !1);
  }
  hideIntroActors() {
    this.setNodeActive(this.boyNode, !1), this.setNodeActive(this.boyArm1Node, !1), this.setNodeActive(this.boyArm2Node, !1);
  }
  applySuccessPresentation() {
    this.setNodeActive(this.clickRootNode, !1), this.setNodeActive(this.bladeFinishedNode, !1), this.setNodeActive(this.handleNode, !1), this.setNodeActive(this.boyNode, !0), this.setNodePosition(this.boyNode, oe.boy), this.setNodeActive(this.boyArm1Node, !1), this.setNodeActive(this.boyArm2Node, !0), this.setNodePosition(this.boyArm2Node, oe.boyArm2), this.setNodeActive(this.finishedSwordNode, !0), this.setNodePosition(this.finishedSwordNode, oe.finishedSword);
  }
  applyFailPresentation() {
    this.setNodeActive(this.clickRootNode, !1), this.setNodeActive(this.boyArm2Node, !1), this.setNodeActive(this.finishedSwordNode, !1), this.setNodeActive(this.boyNode, !0), this.setNodePosition(this.boyNode, oe.boy), this.setNodeActive(this.boyArm1Node, !0), this.setNodePosition(this.boyArm1Node, oe.boyArm1);
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
      o = this.demoTemplateNode;
    if (null == t || !t.isValid || null == o || !o.isValid) return null;
    const i = __rea_outer_s(o);
    i.name = `tool_${e}`, i.active = !0, i.setScale(1, 1, 1);
    const l = i.getComponent(__rea_outer_n);
    l && l.setContentSize(O, O), i.setParent(t);
    const h = {
      toolId: e,
      itemNode: i
    };
    return this.collectionItems.push(h), h;
  }
  applyShowpicFrame(e, t) {
    var o;
    const i = (null == (o = e.getChildByName("showpic")) ? void 0 : o.getComponent(__rea_outer_l)) ?? null;
    if (!i || !t) return;
    i.sizeMode = __rea_outer_l.SizeMode.CUSTOM, i.spriteFrame = t;
    const s = i.node.getComponent(__rea_outer_n);
    s && s.setContentSize(t.originalSize.width, t.originalSize.height);
  }
  clearCollectionItems() {
    this.collectionItems.forEach(e => {
      var t;
      null != (t = e.itemNode) && t.isValid && (e.itemNode.removeFromParent(), e.itemNode.destroy());
    }), this.collectionItems.length = 0;
  }
  removeCollectionItemByToolId(e) {
    var t;
    const o = this.collectionItems.find(t => t.toolId === e);
    if (!o) return;
    const i = this.collectionItems.indexOf(o);
    i >= 0 && this.collectionItems.splice(i, 1), null != (t = o.itemNode) && t.isValid && (o.itemNode.removeFromParent(), o.itemNode.destroy()), this.refreshCollectionLayout();
  }
  refreshCollectionLayout() {
    var e;
    this.applyFixedToolSlotSize(), null == (e = this.contentLayout) || e.updateLayout(), this.computeScrollBounds();
  }
  applyFixedToolSlotSize() {
    var e;
    const t = null == (e = this.contentNode) ? void 0 : e.getComponent(__rea_outer_n),
      o = this.contentLayout;
    if (this.collectionItems.forEach(e => {
      e.itemNode.setScale(1, 1, 1);
      const t = e.itemNode.getComponent(__rea_outer_n);
      t && t.setContentSize(O, O);
    }), o && (o.resizeMode = __rea_outer_h.ResizeMode.CONTAINER), !t) return;
    const i = this.collectionItems.length,
      s = (null == o ? void 0 : o.paddingLeft) ?? 20,
      l = (null == o ? void 0 : o.paddingRight) ?? 20,
      d = (null == o ? void 0 : o.spacingX) ?? 16,
      r = s + l + O * i + d * Math.max(0, i - 1);
    t.setContentSize(r, t.height);
  }
  registerInteractionHandlers() {
    this.disableScrollViewComponent(), this.computeScrollBounds(), this.node.on(__rea_outer_d.EventType.TOUCH_START, this.onLevelTouchStart, this), this.node.on(__rea_outer_d.EventType.TOUCH_MOVE, this.onLevelTouchMove, this), this.node.on(__rea_outer_d.EventType.TOUCH_END, this.onLevelTouchEnd, this), this.node.on(__rea_outer_d.EventType.TOUCH_CANCEL, this.onLevelTouchCancel, this);
  }
  unregisterInteractionHandlers() {
    var e;
    null != (e = this.node) && e.isValid && (this.node.off(__rea_outer_d.EventType.TOUCH_START, this.onLevelTouchStart, this), this.node.off(__rea_outer_d.EventType.TOUCH_MOVE, this.onLevelTouchMove, this), this.node.off(__rea_outer_d.EventType.TOUCH_END, this.onLevelTouchEnd, this), this.node.off(__rea_outer_d.EventType.TOUCH_CANCEL, this.onLevelTouchCancel, this), this.resetTouchSession());
  }
  tryBeginContentScroll(e) {
    if (this.isContentScrolling || this.hasLeftCollectionBar) return;
    if (!this.isPointInsideCollectionBar(e)) return;
    const t = e.x - this.touchStartPoint.x,
      o = e.y - this.touchStartPoint.y;
    Math.abs(t) <= 12 || Math.abs(t) <= Math.abs(o) || (this.isContentScrolling = !0);
  }
  markLeftCollectionBar(e) {
    this.isContentScrolling && this.snapBackContentScroll(), this.hasLeftCollectionBar = !0, this.isContentScrolling = !1, this.ensureCollectionFollower(e), this.updateFollowerPosition(e);
  }
  ensureCollectionFollower(e) {
    var t;
    if (null != (t = this.followerNode) && t.isValid) return;
    const o = this.pendingCollectionItem;
    o && this.beginFollower(o, e);
  }
  isPointInsideCollectionBar(e) {
    return this.isPointInsideNode(this.viewNode, e) || this.isPointInsideNode(this.collectionBarNode, e);
  }
  handleToolDropped(e) {
    this.pendingCollectionItem = null;
    const t = ne[this.currentStep - 1];
    t && 0 !== t.toolId && e.toolId === t.toolId ? (this.parkDragObject(), this.beginStepAction(t)) : this.playWrongTool();
  }
  handleWorkpieceDropped() {
    if (this.isImageNearTarget(this.bladeAnvilHotNode, this.bucketNode)) return this.restoreLiftedNodeKeepWorld(), void this.beginStepAction(ne[8]);
    this.restoreWorkpiece();
  }
  playWrongTool() {
    this.pendingCollectionItem = null, this.isInteractionLocked = !0, this.setInputBlocked(!0), __rea_outer_f.playEffect_1("level48_6"), this.breakCurrentHeart(), this.returnFollowerToSlot(), this.restoreWorkpiece(), this.scheduleOnceIfValid(() => {
      this.remainingLives <= 0 ? this.enterPhase2Fail() : (this.setInputBlocked(!1), this.isInteractionLocked = !1);
    }, .35);
  }
  beginStepAction(e) {
    this.isInteractionLocked = !0, this.setInputBlocked(!0), __rea_outer_f.playEffect_1("level48_1"), this.runStepAnimation(e.step, () => {
      e.removesTool && e.toolId > 0 ? this.removeCollectionItemByToolId(e.toolId) : e.toolId > 0 && this.showCollectionItem(e.toolId), this.completeCurrentStep();
    });
  }
  completeCurrentStep() {
    this.hasInstallNum = Math.min(W, this.hasInstallNum + 1), __rea_outer_B.getInstance().refreshGameProgress();
    const e = this.currentStep;
    e >= W ? this.enterPhase2Success() : (this.currentStep = e + 1, this.setInputBlocked(!1), this.isInteractionLocked = !1);
  }
  runStepAnimation(e, t) {
    switch (e) {
      case 1:
        return void this.playTorchAnimation(t);
      case 2:
        return void this.playBlowAnimation(t);
      case 3:
        return void this.playIronDropAnimation(t);
      case 4:
        return void this.playTongsToAnvilAnimation(t);
      case 5:
        return void this.playHammerAnimation(this.ironAnvilHotNode, this.barFlatNode, oe.barFlat, t);
      case 6:
        return void this.playHammerAnimation(this.barFlatNode, this.barLongNode, oe.barLong, t);
      case 7:
        return void this.playGrindAnimation(this.barLongNode, this.bladeAnvilShapeNode, t);
      case 8:
        return void this.playReheatAnimation(t);
      case 9:
        return void this.playQuenchAnimation(t);
      case 10:
        return void this.playGrindAnimation(this.bladeQuenchedNode, this.bladeFinishedNode, t);
      case 11:
        return void this.playHandleAnimation(t);
      default:
        t();
    }
  }
  playTorchAnimation(e) {
    this.setNodeActive(this.torchFxNode, !0), this.setNodePosition(this.torchFxNode, oe.torchFx), this.scheduleOnceIfValid(() => {
      this.setNodeActive(this.torchFxNode, !1), this.setNodeActive(this.carbon1Node, !1), this.setNodeActive(this.carbon2Node, !0), this.setNodeActive(this.tempering1Node, !0), e();
    }, U);
  }
  playBlowAnimation(e) {
    __rea_outer_f.playEffect_1(E), this.setNodeActive(this.blowBodyNode, !0), this.setNodeActive(this.blowWindNode, !0), this.setNodePosition(this.blowBodyNode, oe.blowBody), this.setNodePosition(this.blowWindNode, oe.blowWind), this.scheduleOnceIfValid(() => {
      this.setNodeActive(this.blowBodyNode, !1), this.setNodeActive(this.blowWindNode, !1), this.setNodeActive(this.carbon2Node, !1), this.setNodeActive(this.carbon3Node, !0), this.setNodeActive(this.tempering1Node, !1), this.startTemperingLoop(), e();
    }, U);
  }
  playIronDropAnimation(e) {
    this.setNodeActive(this.ironForgeFlashNode, !0), this.scheduleOnceIfValid(() => {
      this.setNodeActive(this.ironForgeFlashNode, !1), this.setNodeActive(this.ironForgeHotNode, !0), e();
    }, U);
  }
  playTongsToAnvilAnimation(e) {
    var t, i;
    this.setNodeActive(this.tongsForgeFollowNode, !1), this.setNodeActive(this.tongsHoldNode, !0), this.setNodePosition(this.tongsHoldNode, oe.tongsHold);
    const s = (null == (t = this.ironForgeHotNode) ? void 0 : t.position.clone()) ?? new __rea_outer_o(),
      n = (null == (i = this.tongsHoldNode) ? void 0 : i.position.clone()) ?? oe.tongsHold.clone(),
      l = new __rea_outer_o(oe.ironAnvilHot.x - s.x, oe.ironAnvilHot.y - s.y, 0),
      h = new __rea_outer_o(n.x + l.x, n.y + l.y, 0);
    this.moveNodeTo(this.ironForgeHotNode, oe.ironAnvilHot, U), this.moveNodeTo(this.tongsHoldNode, h, U, () => {
      this.setNodeActive(this.tongsHoldNode, !1), this.restoreNodeRest(this.tongsHoldNode), this.setNodeActive(this.ironForgeHotNode, !1), this.restoreNodeRest(this.ironForgeHotNode), this.setNodeActive(this.ironAnvilHotNode, !0), this.setNodePosition(this.ironAnvilHotNode, oe.ironAnvilHot), e();
    });
  }
  playHammerAnimation(e, t, o, i) {
    this.restoreNodeRest(this.hammerNode), this.setNodeActive(this.hammerNode, !0), this.setNodeAngle(this.hammerNode, -24), this.setNodeActive(this.sparkNode, !1), __rea_outer_f.playEffect_1(x, void 0, !0), this.runHammerSmash(0, () => {
      __rea_outer_f.stopOneEffect(x), this.setNodeActive(this.hammerNode, !1), this.setNodeActive(this.sparkNode, !1), this.restoreNodeRest(this.hammerNode), this.setNodeAngle(this.hammerNode, 0), this.setNodeActive(e, !1), this.setNodeActive(t, !0), this.setNodePosition(t, o), i();
    });
  }
  runHammerSmash(e, t) {
    if (!this.isValid) return;
    if (e >= 4) return void t();
    const o = this.hammerNode;
    null != o && o.isValid ? (__rea_outer_T(o), this.setNodeAngle(o, -24), __rea_outer_r(o).to(.12, {
      angle: 0
    }).call(() => {
      this.setNodeActive(this.sparkNode, !0), this.setNodePosition(this.sparkNode, oe.spark);
    }).delay(.3).call(() => {
      this.setNodeActive(this.sparkNode, !1), this.setNodeAngle(o, -24);
    }).delay(Math.max(0, .38 - .3)).call(() => {
      this.runHammerSmash(e + 1, t);
    }).start()) : t();
  }
  playGrindAnimation(e, t, o) {
    __rea_outer_f.playEffect_1(D, void 0, !0), this.setNodeActive(this.grindWheelNode, !0), this.setNodeActive(this.grindSparkNode, !0), this.setNodePosition(this.grindWheelNode, oe.grindStart), this.setNodePosition(this.grindSparkNode, oe.grindSparkStart), this.setNodeActive(e, !1), t === this.bladeFinishedNode ? (this.showFinishedBladeOnAnvil(), this.bringNodeToFront(this.grindWheelNode), this.bringNodeToFront(this.grindSparkNode)) : this.setNodeActive(t, !0), this.moveNodeTo(this.grindWheelNode, oe.grindEnd, 1), this.moveNodeTo(this.grindSparkNode, oe.grindSparkEnd, 1, () => {
      __rea_outer_f.stopOneEffect(D), this.setNodeActive(this.grindWheelNode, !1), this.setNodeActive(this.grindSparkNode, !1), this.restoreNodeRest(this.grindWheelNode), this.restoreNodeRest(this.grindSparkNode), o();
    });
  }
  playReheatAnimation(e) {
    var t, i;
    this.setNodeActive(this.tongsAnvilFollowNode, !1), this.setNodeActive(this.tongsHoldNode, !0), this.setNodePosition(this.tongsHoldNode, oe.tongsAnvilRest);
    const s = (null == (t = this.bladeAnvilShapeNode) ? void 0 : t.position.clone()) ?? oe.bladeAnvil.clone(),
      n = (null == (i = this.tongsHoldNode) ? void 0 : i.position.clone()) ?? oe.tongsAnvilRest.clone(),
      l = new __rea_outer_o(oe.bladeForgeHot.x - s.x, oe.bladeForgeHot.y - s.y, 0),
      h = new __rea_outer_o(n.x + l.x, n.y + l.y, 0);
    this.moveNodeTo(this.bladeAnvilShapeNode, oe.bladeForgeHot, U), this.moveNodeTo(this.tongsHoldNode, h, U, () => {
      this.setNodeActive(this.tongsHoldNode, !1), this.restoreNodeRest(this.tongsHoldNode), this.setNodeActive(this.bladeAnvilShapeNode, !1), this.restoreNodeRest(this.bladeAnvilShapeNode), this.setNodeActive(this.bladeForgeHotNode, !0), this.setNodePosition(this.bladeForgeHotNode, oe.bladeForgeHot), this.scheduleOnceIfValid(() => {
        this.setNodeActive(this.bladeForgeHotNode, !1), this.setNodeActive(this.bladeAnvilHotNode, !0), this.setNodePosition(this.bladeAnvilHotNode, oe.bladeAnvilHot), this.setNodeAngle(this.bladeAnvilHotNode, 0), e();
      }, U);
    });
  }
  playQuenchAnimation(e) {
    var t;
    __rea_outer_f.playEffect_1(R);
    const i = this.bladeAnvilHotNode,
      s = (null == (t = this.bucketNode) ? void 0 : t.position.clone()) ?? new __rea_outer_o(241.5, 38, 0);
    null != i && i.isValid ? (this.setNodeActive(this.bucketCoverNode, !0), __rea_outer_T(i), __rea_outer_r(i).to(U, {
      position: s,
      angle: 90
    }).call(() => {
      this.setNodeActive(i, !1), this.setNodeAngle(i, 0), this.restoreNodeRest(i), this.scheduleOnceIfValid(() => {
        this.playQuenchBladeRise(s, e);
      }, U);
    }).start()) : e();
  }
  playQuenchBladeRise(e, t) {
    const i = this.bladeQuenchedNode;
    if (null == i || !i.isValid) return void t();
    const s = this.restPositions.get(i) ?? oe.bladeAnvil.clone(),
      n = new __rea_outer_o(e.x, e.y + 180, 0);
    this.setNodeActive(i, !0), this.setNodePosition(i, e), this.setNodeAngle(i, 90), this.bringNodeToFront(i), this.moveNodeTo(i, n, U, () => {
      this.setNodeActive(this.bucketCoverNode, !1), __rea_outer_f.stopOneEffect(R), this.moveQuenchedToAnvil(i, s, t);
    });
  }
  moveQuenchedToAnvil(e, t, o) {
    __rea_outer_T(e), __rea_outer_r(e).to(U, {
      position: t.clone(),
      angle: 0
    }).call(() => {
      o();
    }).start();
  }
  showFinishedBladeOnAnvil() {
    const e = this.bladeFinishedNode;
    this.setNodeActive(e, !0), this.setNodePosition(e, oe.bladeAnvil), this.setNodeAngle(e, 0), this.bringNodeToFront(e);
  }
  bringNodeToFront(e) {
    var t;
    null != e && e.isValid && null != (t = e.parent) && t.isValid && e.setSiblingIndex(e.parent.children.length - 1);
  }
  playHandleAnimation(e) {
    this.setNodeActive(this.handleNode, !0), this.setNodePosition(this.handleNode, oe.handle), this.showFinishedBladeOnAnvil(), this.setNodeActive(this.boyNode, !0), this.setNodePosition(this.boyNode, oe.boy), this.setNodeActive(this.boyArm1Node, !1), this.setNodeActive(this.boyArm2Node, !0), this.setNodePosition(this.boyArm2Node, oe.boyArm2), e();
  }
  beginFollower(e, t) {
    this.returnFollowerToSlot();
    const o = this.getDragObjectNode(e.toolId);
    null != o && o.isValid && (this.followerNode = o, this.setNodeActive(o, !0), this.liftNodeToTop(o), this.setNodeToTouch(o, t));
  }
  updateFollowerPosition(e) {
    var t;
    null != (t = this.followerNode) && t.isValid && this.setNodeToTouch(this.followerNode, e);
  }
  parkDragObject() {
    const e = this.followerNode;
    this.restoreLiftedNode(), this.followerNode = null, null != e && e.isValid && (this.setNodeActive(e, !1), this.restoreNodeRest(e), this.setNodeAngle(e, 0));
  }
  returnFollowerToSlot() {
    this.parkDragObject();
  }
  findCollectionItemByToolId(e) {
    return this.collectionItems.find(t => t.toolId === e) ?? null;
  }
  showCollectionItem(e) {
    const t = this.findCollectionItemByToolId(e);
    this.setNodeActive((null == t ? void 0 : t.itemNode) ?? null, !0);
  }
  beginWorkpieceDrag(e) {
    const t = this.bladeAnvilHotNode;
    null != t && t.isValid && (this.setNodeActive(t, !0), this.liftNodeToTop(t), this.setNodeToTouch(t, e));
  }
  restoreWorkpiece() {
    this.restoreLiftedNode(), this.restoreNodeRest(this.bladeAnvilHotNode), this.setNodeAngle(this.bladeAnvilHotNode, 0), this.setNodeActive(this.bladeAnvilHotNode, 9 === this.currentStep);
  }
  getDragObjectNode(e) {
    return 1 === e ? this.toolIcon1Node : 2 === e ? this.toolIcon2Node : 3 === e ? this.toolIcon3Node : 4 === e ? 8 === this.currentStep ? this.tongsAnvilFollowNode : this.tongsForgeFollowNode : 5 === e ? this.hammerNode : 6 === e ? this.grindWheelNode : 7 === e ? this.handleNode : null;
  }
  getCurrentDropTarget() {
    switch (this.currentStep) {
      case 1:
      case 2:
      case 3:
        return this.forgeNode;
      case 4:
        return this.tongsDropZoneNode;
      case 5:
      case 6:
        return this.hammerDropZoneNode;
      case 7:
      case 11:
        return this.grindDropZoneNode;
      case 8:
        return this.tongsReheatDropZoneNode;
      case 9:
        return this.bucketNode;
      case 10:
        return this.bladeQuenchedNode;
      default:
        return null;
    }
  }
  isImageNearTarget(e, t) {
    return !(null == e || !e.activeInHierarchy) && __rea_outer_A.isDragNearTarget(e, t);
  }
  startTemperingLoop() {
    this.stopTemperingLoop(), this.temperingToggle = !1, this.schedule(this.onTemperingTick, .15), this.onTemperingTick();
  }
  stopTemperingLoop() {
    this.unschedule(this.onTemperingTick);
  }
  hideHeartHud() {
    this.setNodeActive(this.heartBgNode, !1), this.heartFullNodes.forEach(e => this.setNodeActive(e, !1)), this.heartBrokenNodes.forEach(e => this.setNodeActive(e, !1));
  }
  showHeartHud() {
    this.setNodeActive(this.heartBgNode, !0), this.remainingLives = 3;
    for (let e = 0; e < 3; e += 1) this.setNodeActive(this.heartFullNodes[e], !0), this.setNodeActive(this.heartBrokenNodes[e], !1);
  }
  breakCurrentHeart() {
    const e = this.remainingLives;
    e <= 0 || (this.setNodeActive(this.heartFullNodes[e - 1], !1), this.setNodeActive(this.heartBrokenNodes[e - 1], !0), this.remainingLives = Math.max(0, this.remainingLives - 1));
  }
  playVoiceEffect(e, t) {
    this.voiceToken += 1;
    const o = this.voiceToken;
    this.showVoiceBubble(e);
    let i = !1;
    const s = () => {
        !i && this.isValid && o === this.voiceToken && (i = !0, this.unschedule(n), t());
      },
      n = () => {
        s();
      };
    this.scheduleOnce(n, 8), this.stopCurrentDialogueEffect(), this.currentDialogueKey = e, __rea_outer_f.playEffect_1(e, s);
  }
  stopCurrentDialogueEffect() {
    this.shouldSkipStopLevelAudio() ? this.currentDialogueKey = "" : (__rea_outer_f.stopVoice(), this.currentDialogueKey && (__rea_outer_f.stopOneEffect(this.currentDialogueKey), this.currentDialogueKey = ""));
  }
  showVoiceBubble(e) {
    const t = __rea_outer_y.getInstance();
    this.tipLabel && (this.tipLabel.string = t.getKey(e), this.setNodeActive(this.tipLabel.node, !0)), this.setNodeActive(this.dialogBoxNode, !0), this.setNodeActive(this.dialogPointerNode, !0), this.setNodeActive(this.bubbleNode, !0);
  }
  hideBubble() {
    var e;
    this.setNodeActive(this.bubbleNode, !1), this.setNodeActive(this.dialogBoxNode, !1), this.setNodeActive(this.dialogPointerNode, !1), this.setNodeActive((null == (e = this.tipLabel) ? void 0 : e.node) ?? null, !1);
  }
  loadItemBoxFrame(e, t) {
    const o = this.spriteFrameCache.get(e);
    if (o) return void t(o);
    const i = __rea_outer_a.getBundle(M);
    if (!i) return console.warn("[Level_48] missing bundle Level_48"), void t(null);
    const s = `Texture/item_box/${e}/spriteFrame`;
    i.load(s, __rea_outer_c, (o, i) => {
      if (this.isValid) {
        if (o || !i) return console.warn(`[Level_48] failed to load ${s}`, o), void t(null);
        this.spriteFrameCache.set(e, i), t(i);
      }
    });
  }
  createShuffledToolIds() {
    const e = [];
    for (let t = 1; t <= 7; t += 1) e.push(t);
    for (let t = e.length - 1; t > 0; t -= 1) {
      const o = Math.floor(Math.random() * (t + 1)),
        i = e[t];
      e[t] = e[o], e[o] = i;
    }
    return e;
  }
  findCollectionItemAtPoint(e) {
    for (let t = this.collectionItems.length - 1; t >= 0; t -= 1) {
      const o = this.collectionItems[t];
      if (this.isPointInsideNode(o.itemNode, e)) return o;
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
      o = this.viewNode;
    if (null == t || !t.isValid || null == o || !o.isValid) return;
    const i = new Set();
    null != (e = this.demoTemplateNode) && e.isValid && i.add(this.demoTemplateNode);
    const s = __rea_outer_H(t, o, {
      excludedNodes: i
    });
    s && (this.contentScrollBounds = s, this.applyContentScroll(t.position.x, !1));
  }
  applyContentScroll(e, t = !0) {
    const o = this.contentNode;
    null != o && o.isValid && __rea_outer_P(o, e, this.contentScrollBounds, t, .2);
  }
  snapBackContentScroll() {
    const e = this.contentNode;
    null != e && e.isValid && __rea_outer_L(e, this.contentScrollBounds, .3);
  }
  resetTouchSession() {
    this.touchSessionKind = se.None, this.isContentScrolling = !1, this.hasLeftCollectionBar = !1;
  }
  setInputBlocked(e) {
    const t = this.backBgNode;
    if (null == t || !t.isValid) return;
    t.active = e;
    const o = t.getComponent(__rea_outer_N);
    o && (o.enabled = e), e || this.setBackBgMaskOpacity(0);
  }
  fadeBackBgMask(e, t, o) {
    const i = this.backBgNode;
    if (null == i || !i.isValid) return void o();
    const s = __rea_outer_k(i);
    __rea_outer_T(i), __rea_outer_u.stopAllByTarget(s), __rea_outer_r(s).to(t, {
      opacity: e
    }).call(() => {
      this.isValid && o();
    }).start();
  }
  setBackBgMaskOpacity(e) {
    const t = this.backBgNode;
    if (null == t || !t.isValid) return;
    const o = t.getComponent(__rea_outer_l);
    o && (o.color = new __rea_outer_g(0, 0, 0, 255)), __rea_outer_F(t, e);
  }
  stopProcessEffects() {
    __rea_outer_f.stopOneEffect(x), __rea_outer_f.stopOneEffect(D), __rea_outer_f.stopOneEffect(R), __rea_outer_f.stopOneEffect(E);
  }
  resolveReferences() {
    var e, t, o, i, s, n, l, d, r, a, c, N, u, g, m, b, A, f, y, I, C, w, S, B, T, k, F, H, P, L, _, V, M, E, x, D, R, O, W, U, Z, G, q, Y, oe, ie, se, ne;
    this.gameNode = this.node.getChildByPath("UIPanel/gameNode"), this.clickRootNode = this.node.getChildByPath("UIPanel/click_root"), this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.bubbleNode = this.node.getChildByPath("UIPanel/bubble"), this.dialogBoxNode = (null == (e = this.bubbleNode) ? void 0 : e.getChildByName("dialog_box")) ?? null, this.dialogPointerNode = (null == (t = this.bubbleNode) ? void 0 : t.getChildByName("dialog_box_1")) ?? null, this.tipLabel = (null == (o = this.bubbleNode) || null == (o = o.getChildByPath("dialog_box/Label")) ? void 0 : o.getComponent(__rea_outer_v)) ?? null, this.contentNode = (null == (i = this.clickRootNode) ? void 0 : i.getChildByPath("bg/ScrollView/view/content")) ?? null, this.viewNode = (null == (s = this.contentNode) ? void 0 : s.parent) ?? null, this.collectionBarNode = (null == (n = this.clickRootNode) ? void 0 : n.getChildByName("bg")) ?? null, this.demoTemplateNode = (null == (l = this.contentNode) ? void 0 : l.getChildByName("demo")) ?? null, this.scrollView = (null == (d = this.clickRootNode) || null == (d = d.getChildByPath("bg/ScrollView")) ? void 0 : d.getComponent(__rea_outer_p)) ?? null, this.contentLayout = (null == (r = this.contentNode) ? void 0 : r.getComponent(__rea_outer_h)) ?? null, this.forgeNode = (null == (a = this.gameNode) ? void 0 : a.getChildByName("forge")) ?? null, this.bucketNode = (null == (c = this.gameNode) ? void 0 : c.getChildByName("bucket")) ?? null, this.bucketCoverNode = (null == (N = this.gameNode) ? void 0 : N.getChildByName("bucket_1")) ?? null, this.carbon1Node = (null == (u = this.gameNode) ? void 0 : u.getChildByName("carbon1")) ?? null, this.carbon2Node = (null == (g = this.gameNode) ? void 0 : g.getChildByName("carbon2")) ?? null, this.carbon3Node = (null == (m = this.gameNode) ? void 0 : m.getChildByName("carbon3")) ?? null, this.tempering1Node = (null == (b = this.gameNode) ? void 0 : b.getChildByName("tempering1")) ?? null, this.tempering2Node = (null == (A = this.gameNode) ? void 0 : A.getChildByName("tempering2")) ?? null, this.tempering3Node = (null == (f = this.gameNode) ? void 0 : f.getChildByName("tempering3")) ?? null, this.boyNode = (null == (y = this.gameNode) ? void 0 : y.getChildByName("boy")) ?? null, this.boyArm1Node = (null == (I = this.gameNode) ? void 0 : I.getChildByName("boy_arm_1")) ?? null, this.boyArm2Node = (null == (C = this.gameNode) ? void 0 : C.getChildByName("boy_arm_2")) ?? null, this.torchFxNode = (null == (w = this.gameNode) ? void 0 : w.getChildByName("1_1")) ?? null, this.blowBodyNode = (null == (S = this.gameNode) ? void 0 : S.getChildByName("2_1")) ?? null, this.blowWindNode = (null == (B = this.gameNode) ? void 0 : B.getChildByName("2_2")) ?? null, this.toolIcon1Node = (null == (T = this.gameNode) ? void 0 : T.getChildByName("1")) ?? null, this.toolIcon2Node = (null == (k = this.gameNode) ? void 0 : k.getChildByName("2")) ?? null, this.toolIcon3Node = (null == (F = this.gameNode) ? void 0 : F.getChildByName("3")) ?? null, this.ironForgeFlashNode = this.getChildBySibling(z), this.ironForgeHotNode = this.getChildBySibling(Q), this.ironAnvilHotNode = this.getChildBySibling(X), this.tongsDropZoneNode = (null == (H = this.gameNode) ? void 0 : H.getChildByPath("clicks/4touch")) ?? null, this.hammerDropZoneNode = (null == (P = this.gameNode) ? void 0 : P.getChildByPath("clicks/5touch")) ?? null, this.grindDropZoneNode = (null == (L = this.gameNode) ? void 0 : L.getChildByPath("clicks/7touch")) ?? null, this.tongsReheatDropZoneNode = (null == (_ = this.gameNode) ? void 0 : _.getChildByPath("clicks/8touch")) ?? null, this.tongsForgeFollowNode = this.getChildBySibling($), this.tongsAnvilFollowNode = this.getChildBySibling(te), this.tongsHoldNode = (null == (V = this.gameNode) ? void 0 : V.getChildByName("4_2")) ?? null, this.hammerNode = (null == (M = this.gameNode) ? void 0 : M.getChildByName("5_1")) ?? null, this.sparkNode = (null == (E = this.gameNode) ? void 0 : E.getChildByName("5_2")) ?? null, this.barFlatNode = (null == (x = this.gameNode) ? void 0 : x.getChildByName("5_3")) ?? null, this.barLongNode = (null == (D = this.gameNode) ? void 0 : D.getChildByName("5_4")) ?? null, this.grindWheelNode = (null == (R = this.gameNode) ? void 0 : R.getChildByName("6_1")) ?? null, this.grindSparkNode = (null == (O = this.gameNode) ? void 0 : O.getChildByName("6_2")) ?? null, this.bladeAnvilShapeNode = this.getChildBySibling(j), this.bladeAnvilHotNode = this.getChildBySibling(J), this.bladeForgeHotNode = this.getChildBySibling(ee), this.bladeQuenchedNode = (null == (W = this.gameNode) ? void 0 : W.getChildByName("6_5")) ?? null, this.bladeFinishedNode = this.getChildBySibling(K), this.handleNode = (null == (U = this.gameNode) ? void 0 : U.getChildByName("7_1")) ?? null, this.finishedSwordNode = (null == (Z = this.gameNode) ? void 0 : Z.getChildByName("7_2")) ?? null, this.heartBgNode = (null == (G = this.gameNode) ? void 0 : G.getChildByName("heart_bg")) ?? null, this.heartFullNodes.length = 0, this.heartBrokenNodes.length = 0, this.heartFullNodes.push((null == (q = this.gameNode) ? void 0 : q.getChildByName("heart1")) ?? null), this.heartFullNodes.push((null == (Y = this.gameNode) ? void 0 : Y.getChildByName("heart2")) ?? null), this.heartFullNodes.push((null == (oe = this.gameNode) ? void 0 : oe.getChildByName("heart3")) ?? null), this.heartBrokenNodes.push((null == (ie = this.gameNode) ? void 0 : ie.getChildByName("heart1_1")) ?? null), this.heartBrokenNodes.push((null == (se = this.gameNode) ? void 0 : se.getChildByName("heart2_1")) ?? null), this.heartBrokenNodes.push((null == (ne = this.gameNode) ? void 0 : ne.getChildByName("heart3_1")) ?? null), this.cacheRestNodes(), this.warnMissingNodes();
  }
  cacheRestNodes() {
    [this.ironForgeHotNode, this.tongsHoldNode, this.tongsForgeFollowNode, this.tongsAnvilFollowNode, this.hammerNode, this.grindWheelNode, this.grindSparkNode, this.bladeAnvilShapeNode, this.bladeAnvilHotNode, this.bladeForgeHotNode, this.bladeQuenchedNode, this.handleNode, this.toolIcon1Node, this.toolIcon2Node, this.toolIcon3Node].forEach(e => {
      null != e && e.isValid && this.restPositions.set(e, e.position.clone());
    });
  }
  warnMissingNodes() {
    this.warnIfMissing("UIPanel/gameNode", this.gameNode), this.warnIfMissing("UIPanel/click_root", this.clickRootNode), this.warnIfMissing("content", this.contentNode), this.warnIfMissing("demo", this.demoTemplateNode), this.warnIfMissing("forge", this.forgeNode), this.warnIfMissing("bucket", this.bucketNode), this.warnIfMissing("3_2 forge", this.ironForgeHotNode), this.warnIfMissing("3_2 anvil", this.ironAnvilHotNode), this.warnIfMissing("clicks/4touch", this.tongsDropZoneNode), this.warnIfMissing("clicks/5touch", this.hammerDropZoneNode), this.warnIfMissing("clicks/7touch", this.grindDropZoneNode), this.warnIfMissing("clicks/8touch", this.tongsReheatDropZoneNode), this.warnIfMissing("4_1 forge", this.tongsForgeFollowNode), this.warnIfMissing("4_1 anvil", this.tongsAnvilFollowNode), this.warnIfMissing("6_3 anvil", this.bladeAnvilShapeNode), this.warnIfMissing("6_4 anvil", this.bladeAnvilHotNode), this.warnIfMissing("6_4 forge", this.bladeForgeHotNode), this.warnIfMissing("6_5", this.bladeQuenchedNode), this.warnIfMissing("bucket_1", this.bucketCoverNode), this.warnIfMissing("6_6 bucket", this.bladeFinishedNode), this.warnIfMissing("heart1", this.heartFullNodes[0]), this.warnIfMissing("tool 1", this.toolIcon1Node), this.warnIfMissing("tool 2", this.toolIcon2Node), this.warnIfMissing("tool 3", this.toolIcon3Node);
  }
  getChildBySibling(e) {
    var t;
    const o = null == (t = this.gameNode) ? void 0 : t.children;
    return !o || e < 0 || e >= o.length ? null : o[e];
  }
  stopTrackedTweens() {
    [this.contentNode, this.followerNode, this.liftedNode, this.ironForgeHotNode, this.tongsHoldNode, this.hammerNode, this.grindWheelNode, this.grindSparkNode, this.bladeAnvilShapeNode, this.bladeAnvilHotNode, this.bladeQuenchedNode, this.bladeFinishedNode, this.handleNode].forEach(e => {
      null != e && e.isValid && __rea_outer_T(e);
    });
  }
  moveNodeTo(e, t, o, i) {
    if (null == e || !e.isValid) return void (null == i || i());
    __rea_outer_T(e);
    const s = __rea_outer_r(e).to(o, {
      position: t.clone()
    });
    i && s.call(() => i()), s.start();
  }
  restoreNodeRest(e) {
    if (null == e || !e.isValid) return;
    const t = this.restPositions.get(e);
    t && e.setPosition(t);
  }
  setNodePosition(e, t) {
    null != e && e.isValid && e.setPosition(t);
  }
  setNodeAngle(e, t) {
    null != e && e.isValid && (e.angle = t);
  }
  setNodeToTouch(e, t) {
    if (null == e || !e.isValid) return;
    const i = e.parent,
      s = null == i ? void 0 : i.getComponent(__rea_outer_n),
      l = new __rea_outer_o(t.x, t.y, 0);
    null != i && i.isValid && s ? e.setPosition(s.convertToNodeSpaceAR(l)) : e.setWorldPosition(l);
  }
  liftNodeToTop(e) {
    if (this.liftedNode === e && e.parent === this.node) return void e.setSiblingIndex(this.node.children.length - 1);
    this.restoreLiftedNode();
    const t = e.parent;
    null != t && t.isValid && (this.liftedLayer = {
      parent: t,
      siblingIndex: e.getSiblingIndex()
    }, this.liftedNode = e, e.setParent(this.node), e.setSiblingIndex(this.node.children.length - 1));
  }
  restoreLiftedNode() {
    var e;
    const t = this.liftedNode,
      o = this.liftedLayer;
    if (this.liftedNode = null, this.liftedLayer = null, null == t || !t.isValid || null == o || null == (e = o.parent) || !e.isValid) return;
    t.setParent(o.parent);
    const i = Math.max(0, o.parent.children.length - 1);
    t.setSiblingIndex(Math.min(o.siblingIndex, i));
  }
  restoreLiftedNodeKeepWorld() {
    const e = this.liftedNode;
    if (null == e || !e.isValid) return void this.restoreLiftedNode();
    const t = e.worldPosition.clone(),
      o = e.angle;
    this.restoreLiftedNode();
    const i = e.parent,
      s = null == i ? void 0 : i.getComponent(__rea_outer_n);
    null != i && i.isValid && s && e.setPosition(s.convertToNodeSpaceAR(t)), e.angle = o;
  }
  scheduleOnceIfValid(e, t) {
    this.scheduleOnce(() => {
      this.isValid && e();
    }, t);
  }
  setNodeActive(e, t) {
    null != e && e.isValid && (e.active = t);
  }
  warnIfMissing(e, t) {
    t || console.warn(`[Level_48] missing ${e}`);
  }
  isPointInsideNode(e, t) {
    if (null == e || !e.isValid || !e.activeInHierarchy) return !1;
    const o = e.getComponent(__rea_outer_n);
    return !!o && o.getBoundingBoxToWorld().contains(t);
  }
  getTouchWorldPoint(e) {
    const t = e.getUILocation();
    return new __rea_outer_i(t.x, t.y);
  }
}) || _;
__rea_outer_t._RF.pop();
export { __recovered_export_0 as default };
