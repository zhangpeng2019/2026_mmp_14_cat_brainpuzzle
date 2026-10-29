// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_81.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_e } from "cc";
import { Vec2 as __rea_outer_i } from "cc";
import { instantiate as __rea_outer_s } from "cc";
import { UITransform as __rea_outer_n } from "cc";
import { Sprite as __rea_outer_o } from "cc";
import { Node as __rea_outer_l } from "cc";
import { tween as __rea_outer_h } from "cc";
import { Vec3 as __rea_outer_a } from "cc";
import { ScrollView as __rea_outer_r } from "cc";
import { BlockInputEvents as __rea_outer_d } from "cc";
import { assetManager as __rea_outer_c } from "cc";
import { SpriteFrame as __rea_outer_u } from "cc";
import { Label as __rea_outer_p } from "cc";
import { Layout as __rea_outer_g } from "cc";
import { _decorator as __rea_outer_m } from "cc";
import { default as __rea_outer_N } from "./LevelBase";
import { default as __rea_outer_f } from "./AudioManager";
import { I18nController as __rea_outer_v } from "./i18n-controller";
import { UIManager as __rea_outer_I } from "./ui-manager";
import { UIHint as __rea_outer_w } from "./uihint";
import { UIFail as __rea_outer_y } from "./uifail";
import { UILayer as __rea_outer_B } from "./ui-layer";
import { UITimeup as __rea_outer_S } from "./uitimeup";
import { GameController as __rea_outer_C } from "./GameController";
import { stopAllTweens as __rea_outer_b } from "./CocosCompat";
import { setNodeOpacity as __rea_outer_k } from "./CocosCompat";
import { getUIOpacity as __rea_outer_T } from "./CocosCompat";
import { computeContentHorizontalScrollBounds as __rea_outer_L } from "./content-horizontal-scroll";
import { applyContentHorizontalScroll as __rea_outer_V } from "./content-horizontal-scroll";
import { snapBackContentHorizontalScroll as __rea_outer_P } from "./content-horizontal-scroll";
let __recovered_export_0;
var F;
__rea_outer_e._RF.push({}, "16c7ebydd5JO4vfqdX01Let", "Level_81", void 0);
const {
    ccclass: H
  } = __rea_outer_m,
  _ = "Level_81",
  E = "81_1",
  A = "level81_1",
  x = "level81_3",
  U = 176,
  M = "showpic";
__recovered_export_0 = H("Level_81")(F = class extends __rea_outer_N {
  constructor(...t) {
    super(...t), this.phase = 0, this.winstate = !1, this.gameNode = null, this.clickRootNode = null, this.backBgNode = null, this.bubbleNode = null, this.tipLabel = null, this.contentNode = null, this.viewNode = null, this.barNode = null, this.demoNode = null, this.contentLayout = null, this.wrongNode = null, this.generalEndNode = null, this.heartBgNode = null, this.heartNodes = [null, null, null], this.outlineNodes = [], this.followNodes = [], this.resultNodes = [], this.followRest = new Map(), this.followSibling = new Map(), this.barItems = [], this.completedIds = new Set(), this.spriteFrameCache = new Map(), this.intactHeartFrame = null, this.brokenHeartFrame = null, this.contentScrollBounds = {
      minX: 0,
      maxX: 0
    }, this.touchKind = 0, this.touchStartPoint = new __rea_outer_i(), this.scrollStartContentX = 0, this.isContentScrolling = !1, this.hasLeftBar = !1, this.pendingItem = null, this.followNode = null, this.remainingLives = 3, this.voiceToken = 0, this.wrongToken = 0, this.presentationToken = 0, this.flyToken = 0, this.isFlying = !1, this.isInputLocked = !1, this.isHeldForTimeUp = !1, this.onTouchStart = t => {
      var e, i;
      if (!this.canPlay()) return;
      null != (e = this.contentNode) && e.isValid && __rea_outer_b(this.contentNode);
      const s = this.touchPoint(t);
      this.touchStartPoint = s, this.scrollStartContentX = (null == (i = this.contentNode) ? void 0 : i.position.x) ?? 0, this.isContentScrolling = !1, this.hasLeftBar = !1, this.pendingItem = null, this.followNode = null, this.isPointInsideBar(s) ? (this.touchKind = 1, this.pendingItem = this.findBarItem(s)) : this.touchKind = 0;
    }, this.onTouchMove = t => {
      if (!this.canPlay() || 1 !== this.touchKind) return;
      const e = this.touchPoint(t);
      this.isPointInsideBar(e) ? this.hasLeftBar ? this.moveFollow(e) : (this.tryBeginScroll(e), this.isContentScrolling && (this.restorePendingIcon(), this.applyContentScroll(this.scrollStartContentX + (e.x - this.touchStartPoint.x)))) : this.markLeftBar(e);
    }, this.onTouchEnd = t => {
      const e = this.touchKind,
        i = this.isContentScrolling,
        s = this.hasLeftBar,
        n = this.pendingItem,
        o = this.touchPoint(t),
        l = this.isPointInsideBar(o);
      if (!n || !s && l || this.placeFollowForDrop(n, o), this.touchKind = 0, this.isContentScrolling = !1, this.hasLeftBar = !1, !this.canPlay()) return void this.returnDrag();
      i && this.snapContentScroll();
      1 !== e || null === n || !s && l ? this.returnDrag() : this.judgeDrop(n, o);
    }, this.onTouchCancel = () => {
      const t = this.isContentScrolling;
      this.touchKind = 0, this.isContentScrolling = !1, this.hasLeftBar = !1, t && this.snapContentScroll(), this.returnDrag();
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.prepareBackBg(), this.allItemNum = 9, this.hasInstallNum = 0, this.registerInputHandlers();
  }
  start() {
    this.resetLevelState(), this.enterPhaseIntro();
  }
  update() {
    this.releaseTimeUpHold();
  }
  onDestroy() {
    this.cleanupRuntime(), __rea_outer_S.failDelaySeconds = 0, super.onDestroy();
  }
  handleTimeExpired() {
    return 1 !== this.phase || (this.isHeldForTimeUp = !0, this.returnDrag(), __rea_outer_S.failDelaySeconds = 1, !1);
  }
  showHint() {
    if (!this.canPlay()) return;
    const t = this.smallestPendingItemId();
    if (null === t) return;
    const e = __rea_outer_v.getInstance().getKey(`level81_hint${t}`);
    __rea_outer_I.getInstance().showView(__rea_outer_w, void 0, {
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
    this.hasInstallNum = 9, this.phase = 2, this.winstate = !0, this.isInputLocked = !0, this.presentationToken += 1, this.wrongToken += 1;
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.completedIds.clear(), this.remainingLives = 3, this.voiceToken += 1, this.wrongToken += 1, this.presentationToken += 1, this.flyToken += 1, this.isFlying = !1, this.isInputLocked = !1, this.isHeldForTimeUp = !1, this.hasInstallNum = 0, this.allItemNum = 9, this.returnDrag(), this.unscheduleAllCallbacks(), __rea_outer_f.stopVoice(), this.clearBarItems();
  }
  enterPhaseIntro() {
    this.phase = 0, __rea_outer_f.playMusic("bgm4", !0, .5), this.applyIntroVisibility(), this.buildBar(), this.loadHeartFrames(), __rea_outer_C.getInstance().pauseTimer(), this.setInputBlocked(!0), this.showIntroLine(), this.playIntro(() => {
      this.enterPhasePlay();
    });
  }
  enterPhasePlay() {
    this.isValid && 0 === this.phase && (this.phase = 1, this.setNodeActive(this.bubbleNode, !1), this.setInputBlocked(!1), this.setNodeActive(this.clickRootNode, !0), this.showHearts(), __rea_outer_C.getInstance().resumeTimer(), __rea_outer_C.getInstance().refreshGameProgress());
  }
  enterWin() {
    if (2 === this.phase) return;
    this.phase = 2, this.winstate = !0, this.isInputLocked = !0, this.presentationToken += 1;
    const t = this.presentationToken;
    __rea_outer_C.getInstance().pauseTimer(), this.setNodeActive(this.clickRootNode, !1), this.setInputBlocked(!0), this.returnDrag();
    const e = this.collectResultNodes();
    e.forEach((e, i) => {
      this.scheduleOnce(() => {
        this.scaleResultNode(e, t);
      }, .2 * i);
    });
    const i = 0 === e.length ? 0 : .2 * (e.length - 1) + .3;
    this.scheduleOnce(() => {
      this.showWinMark(t);
    }, i);
  }
  enterFail() {
    2 !== this.phase && (this.phase = 2, this.winstate = !1, this.isInputLocked = !0, __rea_outer_C.getInstance().pauseTimer(), this.setNodeActive(this.clickRootNode, !1), this.setInputBlocked(!0), this.scheduleOnce(() => {
      this.isValid && !this.winstate && __rea_outer_I.getInstance().showView(__rea_outer_y, __rea_outer_B.WIN_ANIMATION);
    }, 1));
  }
  applyIntroVisibility() {
    var t, e, i, s;
    this.setNodeActive((null == (t = this.gameNode) ? void 0 : t.getChildByName("bg")) ?? null, !0);
    for (let t = 1; t <= 9; t += 1) {
      var n;
      this.setNodeActive(this.outlineNodes[t - 1], !0), this.setNodeActive(this.resultNodes[t - 1], !1), this.setNodeActive(this.followNodes[t - 1], !1), this.setNodeActive((null == (n = this.gameNode) ? void 0 : n.getChildByName(`frame_${t}`)) ?? null, !1);
    }
    this.setNodeActive(this.wrongNode, !1), this.setNodeActive(this.generalEndNode, !1), this.hideHearts(), this.setNodeActive(this.clickRootNode, !1), this.setNodeActive(this.node.getChildByPath("UIPanel/demo"), !1), this.setNodeActive((null == (e = this.gameNode) ? void 0 : e.getChildByName("clicks")) ?? null, !1), this.setNodeActive((null == (i = this.gameNode) ? void 0 : i.getChildByName("drags")) ?? null, !1), this.setNodeActive((null == (s = this.gameNode) ? void 0 : s.getChildByName("swips")) ?? null, !1);
  }
  showIntroLine() {
    this.tipLabel && (this.tipLabel.string = __rea_outer_v.getInstance().getKey(E)), this.setNodeActive(this.bubbleNode, !0);
  }
  playIntro(t) {
    this.voiceToken += 1;
    const e = this.voiceToken;
    let i = !1;
    const s = () => {
      !i && this.isValid && e === this.voiceToken && (i = !0, t());
    };
    __rea_outer_f.stopVoice(), __rea_outer_f.playVoice(E, s), this.scheduleOnce(() => {
      this.clipDuration(E) > .05 || s();
    }, 2.5);
  }
  buildBar() {
    this.clearBarItems();
    const t = this.demoNode;
    null != t && t.isValid && (t.active = !1), this.createShuffledIds().forEach(t => {
      const e = this.createBarItem(t);
      e && this.loadSpriteFrame(`Texture/frame_${t}/spriteFrame`, t => {
        this.applyShowpic(e.itemNode, t);
      });
    }), this.refreshBarLayout(!0);
  }
  createBarItem(t) {
    const e = this.contentNode,
      i = this.demoNode;
    if (null == e || !e.isValid || null == i || !i.isValid) return null;
    const o = __rea_outer_s(i);
    o.name = `item_${t}`, o.active = !0, o.setScale(1, 1, 1), o.setParent(e);
    const l = o.getComponent(__rea_outer_n);
    l && l.setContentSize(U, U), __rea_outer_k(o, 255);
    const h = {
      itemId: t,
      itemNode: o
    };
    return this.barItems.push(h), h;
  }
  applyShowpic(t, e) {
    var i;
    if (!t.isValid || !e) return;
    const s = (null == (i = t.getChildByName(M)) ? void 0 : i.getComponent(__rea_outer_o)) ?? null;
    if (!s) return;
    s.sizeMode = __rea_outer_o.SizeMode.CUSTOM, s.spriteFrame = e;
    const l = s.node.getComponent(__rea_outer_n),
      h = e.originalSize.width,
      a = e.originalSize.height;
    l && h > 0 && a > 0 && l.setContentSize(h, a);
  }
  clearBarItems() {
    this.barItems.forEach(t => {
      var e;
      null != (e = t.itemNode) && e.isValid && (t.itemNode.removeFromParent(), t.itemNode.destroy());
    }), this.barItems.length = 0;
  }
  removeBarItem(t) {
    var e;
    const i = this.barItems.indexOf(t);
    i >= 0 && this.barItems.splice(i, 1), null != (e = t.itemNode) && e.isValid && (t.itemNode.removeFromParent(), t.itemNode.destroy()), this.refreshBarLayout(!1);
  }
  refreshBarLayout(t) {
    const e = this.contentNode,
      i = (null == e ? void 0 : e.getComponent(__rea_outer_n)) ?? null;
    if (null == e || !e.isValid || !i) return;
    const s = this.readBarMetrics(),
      o = this.measureBarWidth(s, this.barItems.length);
    this.applyBarContentWidth(e, i, o, t), this.placeBarItems(i, s, o), this.computeScrollBounds(), t && this.applyContentScroll(this.contentScrollBounds.maxX, !1);
  }
  readBarMetrics() {
    const t = this.contentLayout;
    return null != t && t.isValid && (t.enabled = !1), {
      paddingLeft: (null == t ? void 0 : t.paddingLeft) ?? 20,
      paddingRight: (null == t ? void 0 : t.paddingRight) ?? 20,
      spacingX: (null == t ? void 0 : t.spacingX) ?? 16
    };
  }
  measureBarWidth(t, e) {
    const i = Math.max(0, e - 1);
    return t.paddingLeft + t.paddingRight + U * e + t.spacingX * i;
  }
  applyBarContentWidth(t, e, i, s) {
    const n = e.width;
    if (e.setContentSize(i, e.height), s) return;
    const o = t.position.x + e.anchorX * (i - n);
    t.setPosition(o, t.position.y, t.position.z);
  }
  placeBarItems(t, e, i) {
    let s = -t.anchorX * i + e.paddingLeft;
    this.barItems.forEach(t => {
      const i = t.itemNode;
      if (null == i || !i.isValid) return;
      i.setScale(1, 1, 1);
      const o = i.getComponent(__rea_outer_n);
      o && o.setContentSize(U, U);
      const l = (null == o ? void 0 : o.anchorX) ?? .5,
        h = (null == o ? void 0 : o.width) ?? U;
      i.setPosition(s + l * h, i.position.y, i.position.z), s += h + e.spacingX;
    });
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
  registerInputHandlers() {
    this.disableScrollView(), this.node.on(__rea_outer_l.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(__rea_outer_l.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(__rea_outer_l.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(__rea_outer_l.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
  }
  unregisterInputHandlers() {
    var t;
    null != (t = this.node) && t.isValid && (this.node.off(__rea_outer_l.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(__rea_outer_l.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(__rea_outer_l.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(__rea_outer_l.EventType.TOUCH_CANCEL, this.onTouchCancel, this));
  }
  tryBeginScroll(t) {
    if (this.isContentScrolling || this.hasLeftBar || !this.isPointInsideBar(t)) return;
    const e = t.x - this.touchStartPoint.x,
      i = t.y - this.touchStartPoint.y;
    Math.abs(e) <= 12 || Math.abs(e) <= Math.abs(i) || (this.isContentScrolling = !0);
  }
  markLeftBar(t) {
    this.pendingItem && !this.hasLeftBar ? (this.isContentScrolling && this.snapContentScroll(), this.hasLeftBar = !0, this.isContentScrolling = !1, this.setItemShown(this.pendingItem, !1), this.showFollow(this.pendingItem, t)) : this.hasLeftBar && this.moveFollow(t);
  }
  placeFollowForDrop(t, e) {
    var i;
    if (null == (i = this.followNode) || !i.isValid) return this.setItemShown(t, !1), void this.showFollow(t, e);
    this.moveFollow(e);
  }
  showFollow(t, e) {
    const i = this.followNodes[t.itemId - 1];
    if (null == i || !i.isValid) return;
    i.active = !0, i.setScale(1, 1, 1), this.followSibling.has(i) || this.followSibling.set(i, i.getSiblingIndex());
    const s = i.parent;
    null != s && s.isValid && i.setSiblingIndex(s.children.length - 1), this.followNode = i, this.moveFollow(e);
  }
  moveFollow(t) {
    this.moveNodeToPoint(this.followNode, t);
  }
  judgeDrop(t, e) {
    const i = this.findNearestOutline(e);
    if (i) return i.itemId !== t.itemId ? (this.returnDrag(), void this.applyWrong(e)) : void this.flyFollowTo(t, i.outline);
    this.returnDrag();
  }
  findNearestOutline(t) {
    let e = null,
      s = 100;
    for (let n = 0; n < 9; n += 1) {
      const o = this.outlineNodes[n],
        l = this.outlineCenter(o);
      if (!o || !l) continue;
      const h = __rea_outer_i.distance(t, l);
      h > s || (s = h, e = {
        itemId: n + 1,
        outline: o
      });
    }
    return e;
  }
  outlineCenter(t) {
    if (null == t || !t.isValid || !t.activeInHierarchy) return null;
    const e = t.worldPosition;
    return new __rea_outer_i(e.x, e.y);
  }
  flyFollowTo(t, e) {
    const i = this.followNode,
      s = i ? this.localPointFor(i, e.worldPosition) : null;
    if (null == i || !i.isValid || !s) return void this.finishHit(t);
    this.flyToken += 1;
    const n = this.flyToken;
    this.isFlying = !0, this.isInputLocked = !0, __rea_outer_b(i), __rea_outer_h(i).to(.2, {
      position: s
    }, {
      easing: "sineOut"
    }).call(() => {
      this.completeFly(n, t);
    }).start();
  }
  completeFly(t, e) {
    this.isValid && t === this.flyToken && (this.isFlying = !1, 1 === this.phase && (this.isInputLocked = !1), this.finishHit(e));
  }
  localPointFor(t, e) {
    const i = t.parent,
      s = null == i ? void 0 : i.getComponent(__rea_outer_n);
    return null != i && i.isValid && s ? s.convertToNodeSpaceAR(new __rea_outer_a(e.x, e.y, e.z)) : null;
  }
  finishHit(t) {
    this.pendingItem = null, this.parkFollow(), this.removeBarItem(t), this.setNodeActive(this.outlineNodes[t.itemId - 1], !1);
    const e = this.resultNodes[t.itemId - 1];
    null != e && e.isValid && (__rea_outer_b(e), e.setScale(1, 1, 1), e.active = !0), this.completedIds.add(t.itemId), __rea_outer_f.stopOneEffect(A), __rea_outer_f.playEffect_1(A), this.hasInstallNum = Math.min(9, this.hasInstallNum + 1), __rea_outer_C.getInstance().refreshGameProgress(), this.TryQuickWin() || this.hasInstallNum >= 9 && 1 === this.phase && this.enterWin();
  }
  applyWrong(t) {
    this.wrongToken += 1;
    const e = this.wrongToken;
    this.isInputLocked = !0, this.setInputBlocked(!0), __rea_outer_f.stopOneEffect(A), __rea_outer_f.playEffect_1("level81_2"), this.breakNextHeart(), this.showWrong(t);
    const i = this.remainingLives <= 0;
    i && this.enterFail(), this.scheduleOnce(() => {
      this.releaseWrongLock(e, i);
    }, .7);
  }
  releaseWrongLock(t, e) {
    this.isValid && t === this.wrongToken && (e || 1 !== this.phase || (this.isInputLocked = !1, this.setInputBlocked(!1)), this.fadeWrong(t));
  }
  showWrong(t) {
    const e = this.wrongNode;
    if (null == e || !e.isValid) return;
    __rea_outer_b(e), e.active = !0, e.setScale(1, 1, 1), __rea_outer_k(e, 255), this.moveNodeToPoint(e, t);
    const i = e.parent;
    null != i && i.isValid && e.setSiblingIndex(i.children.length - 1);
  }
  fadeWrong(t) {
    const e = this.wrongNode;
    if (null == e || !e.isValid || !e.active) return;
    const i = __rea_outer_T(e);
    __rea_outer_b(e), __rea_outer_h(e).to(.3, {
      scale: new __rea_outer_a(0, 0, 1)
    }).call(() => {
      this.hideWrong(e, t);
    }).start(), __rea_outer_h(i).to(.3, {
      opacity: 0
    }).start();
  }
  hideWrong(t, e) {
    this.isValid && e === this.wrongToken && t.isValid && (__rea_outer_b(t), t.active = !1, t.setScale(1, 1, 1), __rea_outer_k(t, 255));
  }
  breakNextHeart() {
    this.remainingLives <= 0 || (this.remainingLives -= 1, this.refreshHeartSprites());
  }
  showHearts() {
    this.remainingLives = 3, this.setNodeActive(this.heartBgNode, !0), this.heartNodes.forEach(t => {
      this.setNodeActive(t, !0);
    }), this.refreshHeartSprites();
  }
  hideHearts() {
    this.setNodeActive(this.heartBgNode, !1), this.heartNodes.forEach(t => {
      this.setNodeActive(t, !1);
    });
  }
  refreshHeartSprites() {
    const t = [2, 1, 0],
      e = 3 - this.remainingLives;
    this.heartNodes.forEach((i, s) => {
      const n = null != i && i.isValid ? i.getComponent(__rea_outer_o) : null;
      if (!n) return;
      const l = t.indexOf(s),
        h = l >= 0 && l < e ? this.brokenHeartFrame : this.intactHeartFrame;
      h && (n.spriteFrame = h);
    });
  }
  loadHeartFrames() {
    this.loadSpriteFrame("Texture/heart/spriteFrame", t => {
      this.intactHeartFrame = t, this.refreshHeartSprites();
    }), this.loadSpriteFrame("Texture/heart_1/spriteFrame", t => {
      this.brokenHeartFrame = t, this.refreshHeartSprites();
    });
  }
  scaleResultNode(t, e) {
    this.isValid && e === this.presentationToken && t.isValid && (__rea_outer_b(t), __rea_outer_h(t).to(.3, {
      scale: new __rea_outer_a(1.2, 1.2, 1)
    }).start());
  }
  showWinMark(t) {
    this.isValid && t === this.presentationToken && (this.setNodeActive(this.generalEndNode, !0), this.playWinSound(t));
  }
  playWinSound(t) {
    let e = !1;
    const i = () => {
      !e && this.isValid && t === this.presentationToken && (e = !0, this.scheduleOnce(() => {
        this.isValid && t === this.presentationToken && this.showLevelSuccess(0);
      }, 1));
    };
    __rea_outer_f.stopOneEffect(A), __rea_outer_f.playEffect_1(x, i), this.scheduleOnce(() => {
      this.clipDuration(x) > .05 || i();
    }, 2.5);
  }
  collectResultNodes() {
    const t = [];
    return this.resultNodes.forEach(e => {
      null != e && e.isValid && e.active && t.push(e);
    }), t.sort((t, e) => t.position.x - e.position.x), t;
  }
  returnDrag() {
    this.flyToken += 1, this.isFlying && (this.isFlying = !1, 1 === this.phase && (this.isInputLocked = !1));
    const t = this.pendingItem;
    this.pendingItem = null, this.parkFollow(), t && this.setItemShown(t, !0);
  }
  parkFollow() {
    const t = this.followNode;
    if (this.followNode = null, null == t || !t.isValid) return;
    __rea_outer_b(t), t.active = !1, t.setScale(1, 1, 1);
    const e = this.followRest.get(t);
    e && t.setPosition(e);
    const i = this.followSibling.get(t),
      s = t.parent;
    void 0 !== i && null != s && s.isValid && t.setSiblingIndex(Math.min(i, Math.max(0, s.children.length - 1)));
  }
  restorePendingIcon() {
    this.pendingItem && this.setItemShown(this.pendingItem, !0), this.parkFollow();
  }
  setItemShown(t, e) {
    const i = t.itemNode;
    if (null == i || !i.isValid) return;
    __rea_outer_k(i, 255);
    const s = i.getChildByName(M);
    null != s && s.isValid && (s.active = e);
  }
  canPlay() {
    return this.isValid && 1 === this.phase && !this.isInputLocked && !this.isHeldForTimeUp && !this.winstate;
  }
  releaseTimeUpHold() {
    this.isHeldForTimeUp && 1 === this.phase && (__rea_outer_C.getInstance().getRemainingTime() <= 0 || (this.isHeldForTimeUp = !1));
  }
  smallestPendingItemId() {
    for (let t = 1; t <= 9; t += 1) if (!this.completedIds.has(t)) return t;
    return null;
  }
  findBarItem(t) {
    for (let e = this.barItems.length - 1; e >= 0; e -= 1) {
      const i = this.barItems[e];
      if (this.isPointInsideNode(i.itemNode, t)) return i;
    }
    return null;
  }
  isPointInsideBar(t) {
    return this.isPointInsideNode(this.viewNode, t) || this.isPointInsideNode(this.barNode, t);
  }
  disableScrollView() {
    var t;
    const e = (null == (t = this.clickRootNode) || null == (t = t.getChildByPath("bg/ScrollView")) ? void 0 : t.getComponent(__rea_outer_r)) ?? null;
    null != e && e.isValid && (e.enabled = !1);
  }
  computeScrollBounds() {
    var t;
    const e = this.contentNode,
      i = this.viewNode;
    if (null == e || !e.isValid || null == i || !i.isValid) return;
    const s = new Set();
    null != (t = this.demoNode) && t.isValid && s.add(this.demoNode);
    const n = __rea_outer_L(e, i, {
      excludedNodes: s
    });
    n && (this.contentScrollBounds = n, this.applyContentScroll(e.position.x, !1));
  }
  applyContentScroll(t, e) {
    const i = this.contentNode;
    null != i && i.isValid && __rea_outer_V(i, t, this.contentScrollBounds, e, .2);
  }
  snapContentScroll() {
    const t = this.contentNode;
    null != t && t.isValid && __rea_outer_P(t, this.contentScrollBounds, .3);
  }
  setInputBlocked(t) {
    this.isInputLocked = t;
    const e = this.backBgNode;
    if (null == e || !e.isValid) return;
    e.active = t;
    const i = e.getComponent(__rea_outer_d);
    i && (i.enabled = t), t || __rea_outer_k(e, 0);
  }
  prepareBackBg() {
    const t = this.backBgNode;
    null != t && t.isValid && (t.getComponent(__rea_outer_d) || t.addComponent(__rea_outer_d), __rea_outer_k(t, 0));
  }
  loadSpriteFrame(t, e) {
    const i = this.spriteFrameCache.get(t);
    if (i) return void e(i);
    const s = __rea_outer_c.getBundle(_);
    if (!s) return console.warn("[Level_81] missing bundle Level_81"), void e(null);
    s.load(t, __rea_outer_u, (i, s) => {
      if (this.isValid) {
        if (i || !s) return console.warn(`[Level_81] failed to load ${t}`, i), void e(null);
        this.spriteFrameCache.set(t, s), e(s);
      }
    });
  }
  clipDuration(t) {
    var e;
    return (null == (e = __rea_outer_f.audioMap.get(t)) ? void 0 : e.getDuration()) ?? 0;
  }
  resolveReferences() {
    var t, e, i, s, n, o, l, h, a, r, d, c;
    this.gameNode = this.node.getChildByPath("UIPanel/gameNode"), this.clickRootNode = this.node.getChildByPath("UIPanel/click_root"), this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.bubbleNode = this.node.getChildByPath("UIPanel/bubble"), this.tipLabel = (null == (t = this.bubbleNode) || null == (t = t.getChildByPath("dialog_box/Label")) ? void 0 : t.getComponent(__rea_outer_p)) ?? null, this.contentNode = (null == (e = this.clickRootNode) ? void 0 : e.getChildByPath("bg/ScrollView/view/content")) ?? null, this.viewNode = (null == (i = this.contentNode) ? void 0 : i.parent) ?? null, this.barNode = (null == (s = this.clickRootNode) ? void 0 : s.getChildByName("bg")) ?? null, this.demoNode = (null == (n = this.contentNode) ? void 0 : n.getChildByName("demo")) ?? null, this.contentLayout = (null == (o = this.contentNode) ? void 0 : o.getComponent(__rea_outer_g)) ?? null, this.wrongNode = (null == (l = this.gameNode) ? void 0 : l.getChildByName("wrong")) ?? null, this.generalEndNode = (null == (h = this.gameNode) ? void 0 : h.getChildByName("general_end")) ?? null, this.heartBgNode = (null == (a = this.gameNode) ? void 0 : a.getChildByName("heart_bg")) ?? null, this.heartNodes = [(null == (r = this.gameNode) ? void 0 : r.getChildByName("heart1")) ?? null, (null == (d = this.gameNode) ? void 0 : d.getChildByName("heart2")) ?? null, (null == (c = this.gameNode) ? void 0 : c.getChildByName("heart3")) ?? null], this.outlineNodes = [], this.followNodes = [], this.resultNodes = [], this.followRest.clear();
    for (let t = 1; t <= 9; t += 1) {
      var u, m, N;
      const e = (null == (u = this.gameNode) ? void 0 : u.getChildByName(`${t}`)) ?? null,
        i = (null == (m = this.gameNode) ? void 0 : m.getChildByName(`${t}_1`)) ?? null,
        s = (null == (N = this.gameNode) ? void 0 : N.getChildByName(`${t}_2`)) ?? null;
      this.outlineNodes.push(e), this.followNodes.push(i), this.resultNodes.push(s), null != i && i.isValid && this.followRest.set(i, i.position.clone());
    }
    this.warnIfMissing();
  }
  warnIfMissing() {
    var t;
    [["UIPanel/gameNode", this.gameNode], ["UIPanel/click_root", this.clickRootNode], ["UIPanel/backBG", this.backBgNode], ["UIPanel/bubble", this.bubbleNode], ["bubble/dialog_box/Label", (null == (t = this.tipLabel) ? void 0 : t.node) ?? null], ["content", this.contentNode], ["content/demo", this.demoNode], ["wrong", this.wrongNode], ["general_end", this.generalEndNode], ["heart_bg", this.heartBgNode], ["heart1", this.heartNodes[0]], ["heart2", this.heartNodes[1]], ["heart3", this.heartNodes[2]]].forEach(([t, e]) => {
      e || console.warn(`[Level_81] missing ${t}`);
    });
    for (let t = 1; t <= 9; t += 1) this.outlineNodes[t - 1] || console.warn(`[Level_81] missing ${t}`), this.followNodes[t - 1] || console.warn(`[Level_81] missing ${t}_1`), this.resultNodes[t - 1] || console.warn(`[Level_81] missing ${t}_2`);
  }
  moveNodeToPoint(t, e) {
    if (null == t || !t.isValid) return;
    const i = t.parent,
      s = null == i ? void 0 : i.getComponent(__rea_outer_n),
      o = new __rea_outer_a(e.x, e.y, 0);
    null != i && i.isValid && s ? t.setPosition(s.convertToNodeSpaceAR(o)) : t.setWorldPosition(o);
  }
  isPointInsideNode(t, e) {
    if (null == t || !t.isValid || !t.activeInHierarchy) return !1;
    const i = t.getComponent(__rea_outer_n);
    return !!i && i.getBoundingBoxToWorld().contains(e);
  }
  touchPoint(t) {
    const e = t.getUILocation();
    return new __rea_outer_i(e.x, e.y);
  }
  setNodeActive(t, e) {
    null != t && t.isValid && (t.active = e);
  }
  cleanupRuntime() {
    var t, e, i;
    this.unscheduleAllCallbacks(), this.unregisterInputHandlers(), this.voiceToken += 1, this.wrongToken += 1, this.presentationToken += 1, this.flyToken += 1, this.isFlying = !1, this.pendingItem = null, this.followNode = null, this.followNodes.forEach(t => {
      null != t && t.isValid && __rea_outer_b(t);
    }), this.resultNodes.forEach(t => {
      null != t && t.isValid && __rea_outer_b(t);
    }), null != (t = this.wrongNode) && t.isValid && __rea_outer_b(this.wrongNode), null != (e = this.contentNode) && e.isValid && __rea_outer_b(this.contentNode), null != (i = this.backBgNode) && i.isValid && __rea_outer_b(this.backBgNode);
  }
}) || F;
__rea_outer_e._RF.pop();
export { __recovered_export_0 as default };
