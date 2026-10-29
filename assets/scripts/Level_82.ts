// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_82.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_e } from "cc";
import { Vec2 as __rea_outer_i } from "cc";
import { instantiate as __rea_outer_s } from "cc";
import { UITransform as __rea_outer_o } from "cc";
import { Sprite as __rea_outer_n } from "cc";
import { Layout as __rea_outer_l } from "cc";
import { Node as __rea_outer_h } from "cc";
import { Vec3 as __rea_outer_a } from "cc";
import { tween as __rea_outer_r } from "cc";
import { assetManager as __rea_outer_d } from "cc";
import { SpriteFrame as __rea_outer_c } from "cc";
import { BlockInputEvents as __rea_outer_u } from "cc";
import { Label as __rea_outer_p } from "cc";
import { ScrollView as __rea_outer_g } from "cc";
import { _decorator as __rea_outer_m } from "cc";
import { default as __rea_outer_N } from "./LevelBase";
import { default as __rea_outer_f } from "./AudioManager";
import { I18nController as __rea_outer_v } from "./i18n-controller";
import { UIManager as __rea_outer_S } from "./ui-manager";
import { UILayer as __rea_outer_y } from "./ui-layer";
import { UIHint as __rea_outer_T } from "./uihint";
import { UIFail as __rea_outer_I } from "./uifail";
import { UITimeup as __rea_outer_k } from "./uitimeup";
import { GameController as __rea_outer_C } from "./GameController";
import { stopAllTweens as __rea_outer_w } from "./CocosCompat";
import { setNodeOpacity as __rea_outer_b } from "./CocosCompat";
import { getUIOpacity as __rea_outer_P } from "./CocosCompat";
import { computeContentHorizontalScrollBounds as __rea_outer_V } from "./content-horizontal-scroll";
import { applyContentHorizontalScroll as __rea_outer_B } from "./content-horizontal-scroll";
import { snapBackContentHorizontalScroll as __rea_outer_L } from "./content-horizontal-scroll";
let __recovered_export_0;
var A;
__rea_outer_e._RF.push({}, "54abbKPnQdDhLFw/KTa72BY", "Level_82", void 0);
const {
    ccclass: F
  } = __rea_outer_m,
  E = "Level_82",
  M = "82_1",
  H = "level82_1",
  U = "level82_2",
  _ = "level82_3",
  O = 176,
  x = 1.2,
  R = [2, 6, 5, 7, 3, 1, 8, 9, 4],
  z = 0,
  D = 1,
  K = 2,
  W = 3;
__recovered_export_0 = F("Level_82")(A = class extends __rea_outer_N {
  constructor(...t) {
    super(...t), this.phase = 0, this.winstate = !1, this.uiPanel = null, this.gameNode = null, this.clickRootNode = null, this.backBgNode = null, this.bubbleNode = null, this.tipLabel = null, this.contentNode = null, this.viewNode = null, this.toolbarBgNode = null, this.demoTemplateNode = null, this.scrollView = null, this.contentLayout = null, this.wrongNode = null, this.winMarkNode = null, this.heartBgNode = null, this.itemNodes = new Map(), this.flyerNodes = new Map(), this.originByNode = new Map(), this.toolSlots = [], this.foundIds = new Set(), this.settledIds = new Set(), this.busySlotIds = new Set(), this.heartNodes = [], this.spriteFrameCache = new Map(), this.heartFullFrame = null, this.heartBrokenFrame = null, this.brokenHeartCount = 0, this.pendingEliminations = 0, this.actionToken = 0, this.voiceToken = 0, this.presentationToken = 0, this.isInputLocked = !1, this.isAwaitingClear = !1, this.isHeldForTimeUp = !1, this.hasSeenTimeUpPopup = !1, this.hasParkedTimeUpAnims = !1, this.isHandlersBound = !1, this.contentScrollBounds = {
      minX: 0,
      maxX: 0
    }, this.touchSessionKind = z, this.touchStartPoint = new __rea_outer_i(), this.scrollStartContentX = 0, this.isContentScrolling = !1, this.isRemovalFlushQueued = !1, this.nodesToDestroy = [], this.onLevelTouchStart = t => {
      var e, i;
      if (!this.canAcceptInput()) return;
      null != (e = this.contentNode) && e.isValid && __rea_outer_w(this.contentNode);
      const s = this.getTouchWorldPoint(t);
      this.touchStartPoint = s, this.scrollStartContentX = (null == (i = this.contentNode) ? void 0 : i.position.x) ?? 0, this.isContentScrolling = !1, this.isPointInsideToolbar(s) ? this.touchSessionKind = D : this.isPointInsideHearts(s) ? this.touchSessionKind = W : this.isPointInsideNode(this.gameNode, s) ? this.touchSessionKind = K : this.touchSessionKind = z;
    }, this.onLevelTouchMove = t => {
      if (!this.canAcceptInput() || this.touchSessionKind !== D) return;
      const e = this.getTouchWorldPoint(t),
        i = e.x - this.touchStartPoint.x,
        s = e.y - this.touchStartPoint.y;
      this.isContentScrolling ? this.applyContentScroll(this.scrollStartContentX + i) : Math.abs(i) > 12 && Math.abs(i) > Math.abs(s) && (this.isContentScrolling = !0, this.applyContentScroll(this.scrollStartContentX + i));
    }, this.onLevelTouchEnd = t => {
      const e = this.touchSessionKind,
        s = this.isContentScrolling,
        o = this.touchStartPoint.clone(),
        n = this.getTouchWorldPoint(t);
      this.touchSessionKind = z, this.isContentScrolling = !1, e !== D ? this.canAcceptInput() && e === K && (__rea_outer_i.distance(o, n) > 12 || this.resolveSceneTap(o)) : s && this.snapBackContentScroll();
    }, this.onLevelTouchCancel = () => {
      const t = this.isContentScrolling && this.touchSessionKind === D;
      this.touchSessionKind = z, this.isContentScrolling = !1, t && this.snapBackContentScroll();
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.allItemNum = 9, this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.enterPhase0();
  }
  update() {
    this.releaseTimeUpHold(), this.parkAnimsAfterDeclinedTimeUp();
  }
  onDestroy() {
    this.cleanupRuntime(!this.shouldSkipStopLevelAudio()), super.onDestroy();
  }
  handleTimeExpired() {
    return 1 !== this.phase || this.foundIds.size >= 9 || (this.isHeldForTimeUp = !0, this.hasSeenTimeUpPopup = !1, this.hasParkedTimeUpAnims = !1, __rea_outer_k.failDelaySeconds = 1, !1);
  }
  showHint() {
    if (!this.canAcceptInput()) return;
    const t = this.getHintItemId();
    if (null === t) return;
    const e = __rea_outer_v.getInstance().getKey(`level82_hint${t}`);
    __rea_outer_S.getInstance().showView(__rea_outer_T, void 0, {
      body: e
    });
  }
  getGameProgressSnapshot() {
    const t = Math.min(this.hasInstallNum, 9);
    return {
      progress: t / 9,
      label: `${t}/9`
    };
  }
  markAllTasksCompleted() {
    this.hasInstallNum = 9, this.phase = 2, this.winstate = !0, this.isInputLocked = !0, this.isAwaitingClear = !1, this.presentationToken += 1, this.actionToken += 1;
    for (let t = 1; t <= 9; t += 1) this.foundIds.add(t);
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.foundIds.clear(), this.settledIds.clear(), this.busySlotIds.clear(), this.brokenHeartCount = 0, this.pendingEliminations = 0, this.actionToken += 1, this.voiceToken += 1, this.presentationToken += 1, this.isInputLocked = !1, this.isAwaitingClear = !1, this.isHeldForTimeUp = !1, this.hasSeenTimeUpPopup = !1, this.hasParkedTimeUpAnims = !1, this.touchSessionKind = z, this.isContentScrolling = !1, this.isRemovalFlushQueued = !1, this.nodesToDestroy.length = 0, this.hasInstallNum = 0, this.allItemNum = 9, this.unscheduleAllCallbacks(), __rea_outer_f.stopVoice(), __rea_outer_f.stopOneEffect(H), this.clearToolSlots(), this.restoreScenePoses();
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_f.playMusic("bgm4", !0, .5), __rea_outer_C.getInstance().pauseTimer(), this.applyOpeningVisibility(), this.disableScrollView(), this.populateToolbar(), this.loadHeartFrames(), this.bindInputHandlers(), this.setInputLocked(!0), __rea_outer_C.getInstance().refreshGameProgress(), this.showIntroLine();
  }
  showIntroLine() {
    this.setNodeActive(this.bubbleNode, !0), this.tipLabel && (this.tipLabel.string = __rea_outer_v.getInstance().getKey(M)), this.playVoiceLine(M, () => {
      this.isValid && 0 === this.phase && this.enterPhase1();
    });
  }
  skipOpeningToPlay() {
    return 0 === this.phase && (this.voiceToken += 1, this.stopOpeningDialogue(), this.enterPhase1(), !0);
  }
  enterPhase1() {
    this.isValid && 0 === this.phase && (this.phase = 1, this.setNodeActive(this.bubbleNode, !1), this.setInputLocked(!1), this.setNodeActive(this.clickRootNode, !0), this.showHearts(), this.refreshToolbarLayout(), __rea_outer_C.getInstance().resumeTimer(), __rea_outer_C.getInstance().refreshGameProgress());
  }
  applyOpeningVisibility() {
    var t, e, i, s;
    this.setNodeActive((null == (t = this.gameNode) ? void 0 : t.getChildByName("bg")) ?? null, !0), this.setNodeActive(this.node.getChildByPath("UIPanel/demo"), !1), this.setNodeActive(this.demoTemplateNode, !1), this.setNodeActive(this.wrongNode, !1), this.setNodeActive(this.winMarkNode, !1), this.setNodeActive(this.heartBgNode, !1), this.heartNodes.forEach(t => this.setNodeActive(t, !1)), this.setNodeActive(this.clickRootNode, !1), this.setNodeActive((null == (e = this.gameNode) ? void 0 : e.getChildByName("clicks")) ?? null, !1), this.setNodeActive((null == (i = this.gameNode) ? void 0 : i.getChildByName("drags")) ?? null, !1), this.setNodeActive((null == (s = this.gameNode) ? void 0 : s.getChildByName("swips")) ?? null, !1);
    for (let t = 1; t <= 9; t += 1) {
      var o;
      this.setNodeActive(this.itemNodes.get(t) ?? null, !0), this.setNodeActive(this.flyerNodes.get(t) ?? null, !1), this.setNodeActive((null == (o = this.gameNode) ? void 0 : o.getChildByName(`frame_${t}`)) ?? null, !1);
    }
  }
  restoreScenePoses() {
    this.itemNodes.forEach(t => {
      this.parkNode(t, !1);
    }), this.flyerNodes.forEach(t => {
      this.parkNode(t, !1);
    }), this.parkNode(this.wrongNode, !1), this.parkNode(this.winMarkNode, !1);
  }
  parkNode(t, e) {
    var i;
    if (null == t || !t.isValid) return;
    __rea_outer_w(t);
    const s = this.originByNode.get(t);
    s && t.parent !== this.gameNode && null != (i = this.gameNode) && i.isValid && t.setParent(this.gameNode), s && t.setPosition(s), t.setScale(1, 1, 1), __rea_outer_b(t, 255), t.active = e;
  }
  populateToolbar() {
    this.clearToolSlots(), this.setNodeActive(this.demoTemplateNode, !1);
    this.createShuffledIds().forEach(t => {
      const e = this.createToolSlot(t);
      e && this.loadSpriteFrame(`Texture/frame_${t}`, t => {
        this.applyShowpicFrame(e.itemNode, t);
      });
    }), this.refreshToolbarLayout();
  }
  createShuffledIds() {
    const t = [];
    for (let e = 1; e <= 9; e += 1) t.push(e);
    for (let e = t.length - 1; e > 0; e -= 1) {
      const i = Math.floor(Math.random() * (e + 1)),
        s = t[e];
      t[e] = t[i], t[i] = s;
    }
    return t;
  }
  createToolSlot(t) {
    const e = this.contentNode,
      i = this.demoTemplateNode;
    if (null == e || !e.isValid || null == i || !i.isValid) return null;
    const n = __rea_outer_s(i);
    n.name = `tool_${t}`, n.active = !0, n.setScale(1, 1, 1), __rea_outer_b(n, 255);
    const l = n.getComponent(__rea_outer_o);
    l && l.setContentSize(O, O), n.setParent(e);
    const h = {
      itemId: t,
      itemNode: n
    };
    return this.toolSlots.push(h), h;
  }
  applyShowpicFrame(t, e) {
    var i;
    if (null == t || !t.isValid || !e) return;
    const s = (null == (i = t.getChildByName("showpic")) ? void 0 : i.getComponent(__rea_outer_n)) ?? null;
    if (!s) return;
    s.sizeMode = __rea_outer_n.SizeMode.CUSTOM, s.spriteFrame = e;
    const l = s.node.getComponent(__rea_outer_o);
    l && l.setContentSize(e.originalSize.width, e.originalSize.height);
  }
  clearToolSlots() {
    this.toolSlots.forEach(t => {
      var e;
      null != (e = t.itemNode) && e.isValid && (__rea_outer_w(t.itemNode), t.itemNode.removeFromParent(), t.itemNode.destroy());
    }), this.toolSlots.length = 0, this.busySlotIds.clear();
  }
  refreshToolbarLayout() {
    const t = this.contentNode,
      e = this.contentLayout,
      i = (null == t ? void 0 : t.getComponent(__rea_outer_o)) ?? null;
    if (e && (e.resizeMode = __rea_outer_l.ResizeMode.NONE), this.toolSlots.forEach(e => {
      var i;
      if (null == (i = e.itemNode) || !i.isValid || e.itemNode.parent !== t) return;
      const s = e.itemNode.getComponent(__rea_outer_o);
      s && s.setContentSize(O, O), this.busySlotIds.has(e.itemId) || e.itemNode.setScale(1, 1, 1);
    }), i) {
      const t = this.toolSlots.length,
        s = (null == e ? void 0 : e.paddingLeft) ?? 20,
        o = (null == e ? void 0 : e.paddingRight) ?? 20,
        n = (null == e ? void 0 : e.spacingX) ?? 16,
        l = s + o + O * t + n * Math.max(0, t - 1);
      i.setContentSize(Math.max(l, 0), i.height);
    }
    null == e || e.updateLayout(), this.computeScrollBounds();
  }
  bindInputHandlers() {
    this.disableScrollView(), this.isHandlersBound || (this.isHandlersBound = !0, this.node.on(__rea_outer_h.EventType.TOUCH_START, this.onLevelTouchStart, this), this.node.on(__rea_outer_h.EventType.TOUCH_MOVE, this.onLevelTouchMove, this), this.node.on(__rea_outer_h.EventType.TOUCH_END, this.onLevelTouchEnd, this), this.node.on(__rea_outer_h.EventType.TOUCH_CANCEL, this.onLevelTouchCancel, this));
  }
  unbindInputHandlers() {
    var t;
    this.isHandlersBound && null != (t = this.node) && t.isValid ? (this.node.off(__rea_outer_h.EventType.TOUCH_START, this.onLevelTouchStart, this), this.node.off(__rea_outer_h.EventType.TOUCH_MOVE, this.onLevelTouchMove, this), this.node.off(__rea_outer_h.EventType.TOUCH_END, this.onLevelTouchEnd, this), this.node.off(__rea_outer_h.EventType.TOUCH_CANCEL, this.onLevelTouchCancel, this), this.isHandlersBound = !1) : this.isHandlersBound = !1;
  }
  resolveSceneTap(t) {
    for (let e = 9; e >= 1; e -= 1) if (!this.foundIds.has(e) && this.isPointInsideNode(this.itemNodes.get(e) ?? null, t)) return void this.onItemFound(e);
    this.onSceneMiss(t);
  }
  onItemFound(t) {
    !this.foundIds.has(t) && this.canAcceptInput() && (this.foundIds.add(t), this.hasInstallNum = this.foundIds.size, this.setNodeActive(this.itemNodes.get(t) ?? null, !1), this.playFoundSound(), __rea_outer_C.getInstance().refreshGameProgress(), this.foundIds.size >= 9 && (this.isAwaitingClear = !0, __rea_outer_C.getInstance().pauseTimer(), this.setInputLocked(!0)), this.beginElimination(t));
  }
  beginElimination(t) {
    var e, i;
    const s = this.actionToken;
    this.pendingEliminations += 1;
    const o = this.flyerNodes.get(t) ?? null,
      n = this.findToolSlot(t);
    if (null == n || null == (e = n.itemNode) || !e.isValid) return null != o && o.isValid && this.parkFlyer(o), void this.finishSlot(t, s);
    if (null == o || !o.isValid) return void this.playSlotExit(t, s);
    this.placeFlyerAtOrigin(o);
    const l = this.uiPanel,
      h = new __rea_outer_a();
    null != n && null != (i = n.itemNode) && i.isValid && n.itemNode.getWorldPosition(h);
    const d = new __rea_outer_a();
    if (o.getWorldPosition(d), null != l && l.isValid) {
      var c;
      o.setParent(l);
      const t = (null == (c = this.clickRootNode) ? void 0 : c.getSiblingIndex()) ?? l.children.length - 1;
      o.setSiblingIndex(Math.min(t + 1, l.children.length - 1)), o.setPosition(this.copyToLocal(l, d));
    }
    const u = null != l && l.isValid ? this.copyToLocal(l, h) : h;
    __rea_outer_r(o).to(.35, {
      position: u
    }).call(() => {
      this.isValid && s === this.actionToken && (this.parkFlyer(o), this.playSlotExit(t, s));
    }).start();
  }
  placeFlyerAtOrigin(t) {
    var e;
    null != (e = this.gameNode) && e.isValid && t.parent !== this.gameNode && t.setParent(this.gameNode);
    const i = this.originByNode.get(t);
    i && t.setPosition(i), t.setScale(1, 1, 1), __rea_outer_b(t, 255), t.active = !0;
  }
  playSlotExit(t, e) {
    var i;
    if (!this.isValid || e !== this.actionToken) return;
    const s = this.findToolSlot(t);
    if (null == s || null == (i = s.itemNode) || !i.isValid) return void this.finishSlot(t, e);
    const o = s.itemNode;
    this.busySlotIds.add(t), __rea_outer_w(o), o.setScale(1, 1, 1), __rea_outer_b(o, 255);
    const n = new __rea_outer_a(x, x, 1),
      l = new __rea_outer_a(0, 0, 1);
    __rea_outer_r(o).to(.2, {
      scale: n
    }).call(() => {
      o.isValid && e === this.actionToken && __rea_outer_r(__rea_outer_P(o)).to(.3, {
        opacity: 0
      }).start();
    }).to(.3, {
      scale: l
    }).call(() => {
      this.finishSlot(t, e);
    }).start();
  }
  finishSlot(t, e) {
    if (!this.isValid || e !== this.actionToken || this.settledIds.has(t)) return;
    this.settledIds.add(t), this.busySlotIds.delete(t);
    const i = this.toolSlots.findIndex(e => e.itemId === t),
      s = i >= 0 ? this.toolSlots[i].itemNode : null;
    i >= 0 && this.toolSlots.splice(i, 1), null != s && s.isValid && this.nodesToDestroy.push(s), this.pendingEliminations = Math.max(0, this.pendingEliminations - 1), this.queueSlotRemoval(e);
  }
  queueSlotRemoval(t) {
    this.isRemovalFlushQueued || (this.isRemovalFlushQueued = !0, this.scheduleOnce(() => {
      this.isRemovalFlushQueued = !1;
      this.nodesToDestroy.splice(0, this.nodesToDestroy.length).forEach(t => {
        t.isValid && (__rea_outer_w(t), t.removeFromParent(), t.destroy());
      }), this.isValid && t === this.actionToken && (this.refreshToolbarLayout(), this.tryBeginVictory());
    }, 0));
  }
  tryBeginVictory() {
    1 !== this.phase || !this.isAwaitingClear || this.pendingEliminations > 0 || this.enterPhase2Success();
  }
  onSceneMiss(t) {
    this.canAcceptInput() && (this.playWrongSound(), this.breakNextHeart(), this.playWrongMark(t), this.brokenHeartCount >= 3 && this.enterPhase2Fail());
  }
  playWrongMark(t) {
    const e = this.wrongNode,
      i = this.gameNode;
    if (null == e || !e.isValid || null == i || !i.isValid) return;
    __rea_outer_w(e);
    const s = this.copyToLocal(i, new __rea_outer_a(t.x, t.y, 0));
    e.setPosition(s), e.setScale(1, 1, 1), __rea_outer_b(e, 255), e.active = !0, e.setSiblingIndex(i.children.length - 1);
    const o = new __rea_outer_a(0, 0, 1);
    __rea_outer_r(e).delay(.7).call(() => {
      e.isValid && __rea_outer_r(__rea_outer_P(e)).to(.3, {
        opacity: 0
      }).start();
    }).to(.3, {
      scale: o
    }).call(() => {
      e.isValid && (e.active = !1);
    }).start();
  }
  showHearts() {
    this.setNodeActive(this.heartBgNode, !0), this.heartNodes.forEach(t => this.setNodeActive(t, !0)), this.applyHeartSprites();
  }
  loadHeartFrames() {
    this.loadSpriteFrame("Texture/heart", t => {
      this.heartFullFrame = t, this.applyHeartSprites();
    }), this.loadSpriteFrame("Texture/heart_1", t => {
      this.heartBrokenFrame = t, this.applyHeartSprites();
    });
  }
  applyHeartSprites() {
    this.heartNodes.forEach((t, e) => {
      const i = null != t && t.isValid ? t.getComponent(__rea_outer_n) : null;
      if (!i) return;
      const s = e < this.brokenHeartCount ? this.heartBrokenFrame : this.heartFullFrame;
      s && (i.spriteFrame = s);
    });
  }
  breakNextHeart() {
    this.brokenHeartCount >= 3 || (this.brokenHeartCount += 1, this.applyHeartSprites());
  }
  enterPhase2Success() {
    if (this.phase >= 2) return;
    this.phase = 2, this.winstate = !0, this.isAwaitingClear = !1, this.isInputLocked = !0, this.presentationToken += 1, this.actionToken += 1;
    const t = this.presentationToken;
    __rea_outer_C.getInstance().pauseTimer(), this.setInputLocked(!0), this.setNodeActive(this.clickRootNode, !1), this.prepareVictoryFlyers(), R.forEach((e, i) => {
      this.scheduleOnce(() => {
        this.isValid && t === this.presentationToken && this.scaleVictoryFlyer(e);
      }, .2 * i);
    });
    const e = .2 * (R.length - 1) + .3;
    this.scheduleOnce(() => {
      this.isValid && t === this.presentationToken && this.revealWinMark();
    }, e);
  }
  prepareVictoryFlyers() {
    R.forEach(t => {
      const e = this.flyerNodes.get(t) ?? null;
      null != e && e.isValid && this.placeFlyerAtOrigin(e);
    });
  }
  scaleVictoryFlyer(t) {
    const e = this.flyerNodes.get(t) ?? null;
    if (null == e || !e.isValid) return;
    e.active = !0, e.setScale(1, 1, 1);
    const i = new __rea_outer_a(x, x, 1);
    __rea_outer_r(e).to(.3, {
      scale: i
    }).start();
  }
  revealWinMark() {
    const t = this.winMarkNode,
      e = this.gameNode;
    if (null != t && t.isValid && null != e && e.isValid) {
      const i = this.originByNode.get(t);
      i && t.setPosition(i), t.setScale(1, 1, 1), __rea_outer_b(t, 255), t.active = !0, t.setSiblingIndex(e.children.length - 1);
    }
    this.playEffectClip(_, () => {
      this.isValid && this.winstate && this.showLevelSuccess(1);
    });
  }
  enterPhase2Fail() {
    this.phase >= 2 || (this.phase = 2, this.winstate = !1, this.isAwaitingClear = !1, this.presentationToken += 1, this.actionToken += 1, this.pendingEliminations = 0, this.busySlotIds.clear(), __rea_outer_C.getInstance().pauseTimer(), this.setInputLocked(!0), this.setNodeActive(this.clickRootNode, !1), this.parkInFlightFlyers(), this.toolSlots.forEach(t => __rea_outer_w(t.itemNode)), this.scheduleOnce(() => {
      this.isValid && !this.winstate && __rea_outer_S.getInstance().showView(__rea_outer_I, __rea_outer_y.WIN_ANIMATION);
    }, 1));
  }
  parkInFlightFlyers() {
    this.flyerNodes.forEach(t => {
      this.parkFlyer(t);
    });
  }
  parkFlyer(t) {
    var e;
    if (null == t || !t.isValid) return;
    __rea_outer_w(t), null != (e = this.gameNode) && e.isValid && t.setParent(this.gameNode);
    const i = this.originByNode.get(t);
    i && t.setPosition(i), t.setScale(1, 1, 1), __rea_outer_b(t, 255), t.active = !1;
  }
  releaseTimeUpHold() {
    this.isHeldForTimeUp && 1 === this.phase && (__rea_outer_C.getInstance().getRemainingTime() <= 0 || (this.isHeldForTimeUp = !1, this.hasSeenTimeUpPopup = !1, this.hasParkedTimeUpAnims = !1));
  }
  parkAnimsAfterDeclinedTimeUp() {
    var t;
    if (!this.isHeldForTimeUp || this.hasParkedTimeUpAnims || 1 !== this.phase) return;
    if (__rea_outer_C.getInstance().getRemainingTime() > 0) return;
    const e = __rea_outer_S.getInstance().getView(__rea_outer_k);
    null != e && null != (t = e.node) && t.active ? this.hasSeenTimeUpPopup = !0 : this.hasSeenTimeUpPopup && (this.hasParkedTimeUpAnims = !0, this.actionToken += 1, this.pendingEliminations = 0, this.busySlotIds.clear(), this.isAwaitingClear = !1, this.parkInFlightFlyers(), this.toolSlots.forEach(t => __rea_outer_w(t.itemNode)));
  }
  playFoundSound() {
    __rea_outer_f.stopOneEffect(H), __rea_outer_f.playEffect_1(H);
  }
  playWrongSound() {
    __rea_outer_f.stopOneEffect(H), __rea_outer_f.playEffect_1(U);
  }
  playVoiceLine(t, e) {
    this.voiceToken += 1;
    const i = this.voiceToken;
    let s = !1;
    const o = () => {
      !s && this.isValid && i === this.voiceToken && (s = !0, e());
    };
    __rea_outer_f.playVoice(t, o), this.scheduleOnce(() => {
      var e;
      ((null == (e = __rea_outer_f.audioMap.get(t)) ? void 0 : e.getDuration()) ?? 0) > .05 || o();
    }, 2.5);
  }
  playEffectClip(t, e) {
    __rea_outer_f.stopOneEffect(H);
    let i = !1;
    const s = () => {
      !i && this.isValid && this.winstate && (i = !0, e());
    };
    __rea_outer_f.playEffect_1(t, s), this.scheduleOnce(() => {
      var e;
      ((null == (e = __rea_outer_f.audioMap.get(t)) ? void 0 : e.getDuration()) ?? 0) > .05 || s();
    }, 2.5);
  }
  loadSpriteFrame(t, e) {
    const i = this.spriteFrameCache.get(t);
    if (i) return void e(i);
    const s = __rea_outer_d.getBundle(E);
    if (!s) return console.warn("[Level_82] missing bundle Level_82"), void e(null);
    s.load(`${t}/spriteFrame`, __rea_outer_c, (i, s) => {
      if (this.isValid) {
        if (i || !s) return console.warn(`[Level_82] failed to load ${t}`, i), void e(null);
        this.spriteFrameCache.set(t, s), e(s);
      }
    });
  }
  canAcceptInput() {
    return this.isValid && 1 === this.phase && !this.isInputLocked && !this.isHeldForTimeUp && !this.isAwaitingClear && this.foundIds.size < 9;
  }
  getHintItemId() {
    for (let t = 1; t <= 9; t += 1) if (!this.foundIds.has(t)) return t;
    return null;
  }
  findToolSlot(t) {
    return this.toolSlots.find(e => e.itemId === t) ?? null;
  }
  setInputLocked(t) {
    this.isInputLocked = t;
    const e = this.backBgNode;
    if (null == e || !e.isValid) return;
    e.active = t;
    const i = e.getComponent(__rea_outer_u);
    i && (i.enabled = t);
  }
  disableScrollView() {
    var t;
    null != (t = this.scrollView) && t.isValid && (this.scrollView.enabled = !1);
  }
  computeScrollBounds() {
    var t;
    const e = this.contentNode,
      i = this.viewNode;
    if (null == e || !e.isValid || null == i || !i.isValid) return;
    const s = new Set();
    null != (t = this.demoTemplateNode) && t.isValid && s.add(this.demoTemplateNode);
    const o = __rea_outer_V(e, i, {
      excludedNodes: s
    });
    o && (this.contentScrollBounds = o, this.applyContentScroll(e.position.x, !1));
  }
  applyContentScroll(t, e = !0) {
    const i = this.contentNode;
    null != i && i.isValid && __rea_outer_B(i, t, this.contentScrollBounds, e, .2);
  }
  snapBackContentScroll() {
    const t = this.contentNode;
    null != t && t.isValid && __rea_outer_L(t, this.contentScrollBounds, .3);
  }
  isPointInsideToolbar(t) {
    return this.isPointInsideNode(this.viewNode, t) || this.isPointInsideNode(this.toolbarBgNode, t);
  }
  isPointInsideHearts(t) {
    return !!this.isPointInsideNode(this.heartBgNode, t) || this.heartNodes.some(e => this.isPointInsideNode(e, t));
  }
  isPointInsideNode(t, e) {
    if (null == t || !t.isValid || !t.activeInHierarchy) return !1;
    const i = t.getComponent(__rea_outer_o);
    return !!i && i.getBoundingBoxToWorld().contains(e);
  }
  getTouchWorldPoint(t) {
    const e = t.getUILocation();
    return new __rea_outer_i(e.x, e.y);
  }
  copyToLocal(t, e) {
    const i = t.getComponent(__rea_outer_o);
    if (!i) return new __rea_outer_a(e.x, e.y, 0);
    const s = i.convertToNodeSpaceAR(e);
    return new __rea_outer_a(s.x, s.y, 0);
  }
  setNodeActive(t, e) {
    null != t && t.isValid && (t.active = e);
  }
  resolveReferences() {
    var t, e, i, s, o, n, h, a, r, d, c, u, m;
    this.uiPanel = this.node.getChildByPath("UIPanel"), this.gameNode = this.node.getChildByPath("UIPanel/gameNode"), this.clickRootNode = this.node.getChildByPath("UIPanel/click_root"), this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.bubbleNode = this.node.getChildByPath("UIPanel/bubble"), this.tipLabel = (null == (t = this.bubbleNode) || null == (t = t.getChildByPath("dialog_box/Label")) ? void 0 : t.getComponent(__rea_outer_p)) ?? null, this.contentNode = (null == (e = this.clickRootNode) ? void 0 : e.getChildByPath("bg/ScrollView/view/content")) ?? null, this.viewNode = (null == (i = this.contentNode) ? void 0 : i.parent) ?? null, this.toolbarBgNode = (null == (s = this.clickRootNode) ? void 0 : s.getChildByName("bg")) ?? null, this.demoTemplateNode = (null == (o = this.contentNode) ? void 0 : o.getChildByName("demo")) ?? null, this.scrollView = (null == (n = this.clickRootNode) || null == (n = n.getChildByPath("bg/ScrollView")) ? void 0 : n.getComponent(__rea_outer_g)) ?? null, this.contentLayout = (null == (h = this.contentNode) ? void 0 : h.getComponent(__rea_outer_l)) ?? null, this.wrongNode = (null == (a = this.gameNode) ? void 0 : a.getChildByName("wrong")) ?? null, this.winMarkNode = (null == (r = this.gameNode) ? void 0 : r.getChildByName("general_end")) ?? null, this.heartBgNode = (null == (d = this.gameNode) ? void 0 : d.getChildByName("heart_bg")) ?? null, this.heartNodes.length = 0, this.heartNodes.push((null == (c = this.gameNode) ? void 0 : c.getChildByName("heart3")) ?? null, (null == (u = this.gameNode) ? void 0 : u.getChildByName("heart2")) ?? null, (null == (m = this.gameNode) ? void 0 : m.getChildByName("heart1")) ?? null);
    for (let t = 1; t <= 9; t += 1) {
      var N, f;
      const e = (null == (N = this.gameNode) ? void 0 : N.getChildByName(`${t}`)) ?? null,
        i = (null == (f = this.gameNode) ? void 0 : f.getChildByName(`${t}_1`)) ?? null;
      e && (this.itemNodes.set(t, e), this.rememberOrigin(e)), i && (this.flyerNodes.set(t, i), this.rememberOrigin(i)), this.warnIfMissing(`${t}`, e), this.warnIfMissing(`${t}_1`, i);
    }
    this.rememberOrigin(this.wrongNode), this.rememberOrigin(this.winMarkNode), this.warnIfMissing("UIPanel/gameNode", this.gameNode), this.warnIfMissing("UIPanel/click_root", this.clickRootNode), this.warnIfMissing("UIPanel/backBG", this.backBgNode), this.warnIfMissing("content/demo", this.demoTemplateNode), this.warnIfMissing("wrong", this.wrongNode), this.warnIfMissing("general_end", this.winMarkNode), this.warnIfMissing("heart_bg", this.heartBgNode), this.warnIfMissing("heart3", this.heartNodes[0]), this.warnIfMissing("heart2", this.heartNodes[1]), this.warnIfMissing("heart1", this.heartNodes[2]);
  }
  rememberOrigin(t) {
    null != t && t.isValid && !this.originByNode.has(t) && this.originByNode.set(t, t.position.clone());
  }
  warnIfMissing(t, e) {
    e || console.warn(`[Level_82] missing ${t}`);
  }
  cleanupRuntime(t) {
    this.unscheduleAllCallbacks(), this.unbindInputHandlers(), this.voiceToken += 1, this.actionToken += 1, this.presentationToken += 1, this.pendingEliminations = 0, this.flyerNodes.forEach(t => __rea_outer_w(t)), this.toolSlots.forEach(t => __rea_outer_w(t.itemNode)), __rea_outer_w(this.wrongNode), __rea_outer_w(this.winMarkNode), __rea_outer_w(this.contentNode), t && (__rea_outer_f.stopVoice(), __rea_outer_f.stopOneEffect(H), __rea_outer_f.stopOneEffect(U), __rea_outer_f.stopOneEffect(_));
  }
}) || A;
__rea_outer_e._RF.pop();
export { __recovered_export_0 as default };
