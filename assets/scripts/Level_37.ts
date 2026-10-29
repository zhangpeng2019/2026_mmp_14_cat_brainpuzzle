// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_37.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { Vec2 as __rea_outer_i } from "cc";
import { instantiate as __rea_outer_o } from "cc";
import { Sprite as __rea_outer_s } from "cc";
import { Node as __rea_outer_n } from "cc";
import { tween as __rea_outer_l } from "cc";
import { Vec3 as __rea_outer_h } from "cc";
import { UITransform as __rea_outer_r } from "cc";
import { assetManager as __rea_outer_d } from "cc";
import { SpriteFrame as __rea_outer_c } from "cc";
import { Button as __rea_outer_a } from "cc";
import { BlockInputEvents as __rea_outer_u } from "cc";
import { Label as __rea_outer_N } from "cc";
import { ScrollView as __rea_outer_g } from "cc";
import { Layout as __rea_outer_m } from "cc";
import { _decorator as __rea_outer_v } from "cc";
import { default as __rea_outer_p } from "./LevelBase";
import { default as __rea_outer_f } from "./clue-hit-tester";
import { default as __rea_outer_I } from "./AudioManager";
import { I18nController as __rea_outer_C } from "./i18n-controller";
import { UIManager as __rea_outer_S } from "./ui-manager";
import { UILayer as __rea_outer_w } from "./ui-layer";
import { UIHint as __rea_outer_y } from "./uihint";
import { UIFail as __rea_outer_T } from "./uifail";
import { GameController as __rea_outer_B } from "./GameController";
import { stopAllTweens as __rea_outer_L } from "./CocosCompat";
import { computeContentHorizontalScrollBounds as __rea_outer_V } from "./content-horizontal-scroll";
import { applyContentHorizontalScroll as __rea_outer_P } from "./content-horizontal-scroll";
import { snapBackContentHorizontalScroll as __rea_outer_b } from "./content-horizontal-scroll";
let __recovered_export_0;
var k;
__rea_outer_t._RF.push({}, "a37c9G0ji1PYJocW30+DyRo", "Level_37", void 0);
const {
    ccclass: A
  } = __rea_outer_v,
  _ = "Level_37",
  F = 10,
  R = ["level37_hint1", "level37_hint2", "level37_hint3", "level37_hint4", "level37_hint5", "level37_hint6", "level37_hint7", "level37_hint8", "level37_hint9", "level37_hint10"],
  E = ["1_2", "2_2", "3_2", "4_2", "5_3", "6_3", "7_3", "8_2", "9_2", "10_2"];
var M = function (e) {
  return e[e.None = 0] = "None", e[e.Collection = 1] = "Collection", e[e.Arrow = 2] = "Arrow", e;
}(M || {});
__recovered_export_0 = A("Level_37")(k = class extends __rea_outer_p {
  constructor(...e) {
    super(...e), this.phase = 0, this.winstate = !1, this.gameNode = null, this.gameMaskNode = null, this.touchTriggerNode = null, this.clickRootNode = null, this.backBgNode = null, this.bubbleNode = null, this.dialogBoxNode = null, this.tipLabel = null, this.contentNode = null, this.viewNode = null, this.demoTemplateNode = null, this.scrollView = null, this.contentLayout = null, this.arrowRightNode = null, this.arrowLeftNode = null, this.leftoverDemoNode = null, this.end1Node = null, this.end2Node = null, this.endRightNode = null, this.heartFullNodes = [], this.heartBrokenNodes = [], this.sceneRuntimes = [], this.collectionItems = [], this.completedSceneIds = new Set(), this.currentSceneId = 1, this.remainingLives = 3, this.isInteractionLocked = !1, this.voiceToken = 0, this.contentScrollBounds = {
      minX: 0,
      maxX: 0
    }, this.touchSessionKind = M.None, this.touchStartPoint = new __rea_outer_i(), this.scrollStartContentX = 0, this.isContentScrolling = !1, this.arrowDelta = 0, this.pendingCollectionItem = null, this.followerNode = null, this.hasJudgedCurrentDrag = !1, this.hasLeftCollectionBar = !1, this.playingSceneVoiceKey = "", this.onLevelTouchStart = e => {
      var t, i;
      if (1 !== this.phase || this.isInteractionLocked) return;
      null != (t = this.contentNode) && t.isValid && __rea_outer_L(this.contentNode);
      const o = this.getTouchWorldPoint(e);
      this.touchStartPoint = o, this.scrollStartContentX = (null == (i = this.contentNode) ? void 0 : i.position.x) ?? 0, this.isContentScrolling = !1, this.hasJudgedCurrentDrag = !1, this.hasLeftCollectionBar = !1, this.pendingCollectionItem = null, this.arrowDelta = this.resolveArrowDeltaAtPoint(o), 0 === this.arrowDelta ? this.isPointInsideNode(this.viewNode, o) ? (this.touchSessionKind = M.Collection, this.pendingCollectionItem = this.findCollectionItemAtPoint(o), this.pendingCollectionItem && this.beginFollower(this.pendingCollectionItem, o)) : this.touchSessionKind = M.None : this.touchSessionKind = M.Arrow;
    }, this.onLevelTouchMove = e => {
      var t;
      if (1 !== this.phase || this.isInteractionLocked || this.hasJudgedCurrentDrag) return;
      if (this.touchSessionKind === M.Arrow) return;
      if (this.touchSessionKind !== M.Collection) return;
      const i = this.getTouchWorldPoint(e);
      this.updateFollowerPosition(i), null == (t = this.followerNode) || !t.isValid || this.isPointInsideNode(this.viewNode, i) ? this.hasLeftCollectionBar || (this.tryBeginContentScroll(i), this.isContentScrolling && (this.hideFollower(), this.applyContentScroll(this.scrollStartContentX + (i.x - this.touchStartPoint.x)))) : this.hasLeftCollectionBar = !0;
    }, this.onLevelTouchEnd = e => {
      const t = this.touchSessionKind,
        i = this.isContentScrolling,
        o = this.arrowDelta,
        s = this.touchStartPoint.clone(),
        n = this.getTouchWorldPoint(e);
      if (this.resetTouchSession(), !this.hasJudgedCurrentDrag) {
        if (t !== M.Arrow) return i ? (this.snapBackContentScroll(), void this.hideFollower()) : void (t === M.Collection && (this.updateFollowerPosition(n), this.tryJudgeDropOnRelease()));
        this.tryHandleArrowClick(s, n, o);
      }
    }, this.onLevelTouchCancel = () => {
      const e = this.isContentScrolling;
      this.resetTouchSession(), this.hasJudgedCurrentDrag || (e && this.snapBackContentScroll(), this.returnFollowerToSlot());
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.buildSceneRuntimes(), this.allItemNum = F, this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.applyInitialVisibility(), this.enterPhase0();
  }
  onDestroy() {
    this.unscheduleAllCallbacks(), this.unregisterInteractionHandlers(), this.stopSceneVoice(), this.destroyFollower(), this.stopTrackedTweens(), super.onDestroy();
  }
  handleTimeExpired() {
    return this.phase >= 2;
  }
  showHint() {
    if (1 !== this.phase) return;
    const e = this.resolveHintKey();
    if (!e) return;
    const t = __rea_outer_C.getInstance().getKey(e);
    __rea_outer_S.getInstance().showView(__rea_outer_y, void 0, {
      body: t
    });
  }
  getGameProgressSnapshot() {
    const e = this.hasInstallNum;
    return {
      progress: e / F,
      label: `${e}/10`
    };
  }
  markAllTasksCompleted() {
    for (let t = 1; t <= F; t += 1) {
      var e;
      this.completedSceneIds.add(t), this.setNodeActive(null == (e = this.findSceneRuntime(t)) ? void 0 : e.victimNode, !0);
    }
    this.hasInstallNum = F, this.phase = 2, this.winstate = !0, this.isInteractionLocked = !0, this.unregisterInteractionHandlers();
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.isInteractionLocked = !1, this.hasInstallNum = 0, this.allItemNum = F, this.currentSceneId = 1, this.remainingLives = 3, this.completedSceneIds.clear(), this.voiceToken += 1, this.hasJudgedCurrentDrag = !1, this.hasLeftCollectionBar = !1, this.pendingCollectionItem = null, this.stopSceneVoice(), this.destroyFollower(), this.clearCollectionItems();
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_I.playMusic("bgm5", !0, .5), this.setInputBlocked(!1), this.showScene(1, !0), this.populateCollectionBar(), this.enterPhase1();
  }
  enterPhase1() {
    this.phase = 1, this.registerInteractionHandlers(), __rea_outer_B.getInstance().refreshGameProgress();
  }
  enterPhase2Success() {
    this.phase >= 2 || (this.phase = 2, this.winstate = !0, this.isInteractionLocked = !0, this.unregisterInteractionHandlers(), this.setInputBlocked(!0), __rea_outer_B.getInstance().pauseTimer(), this.scheduleOnceIfValid(() => {
      this.showLevelSuccess(0);
    }, 1.5));
  }
  enterPhase2Fail() {
    this.phase >= 2 || (this.phase = 2, this.winstate = !1, this.isInteractionLocked = !0, this.unregisterInteractionHandlers(), this.setInputBlocked(!0), __rea_outer_B.getInstance().pauseTimer(), __rea_outer_S.getInstance().showView(__rea_outer_T, __rea_outer_w.WIN_ANIMATION));
  }
  beginTimeoutFail() {
    this.unscheduleAllCallbacks(), this.stopTrackedTweens(), this.destroyFollower(), this.setNodeActive(this.end1Node, !1), this.setNodeActive(this.end2Node, !1), this.enterPhase2Fail();
  }
  applyInitialVisibility() {
    this.sceneRuntimes.forEach(e => {
      this.setNodeActive(e.rootNode, 1 === e.sceneId), this.setNodeActive(e.victimNode, !1);
    }), this.setNodeActive(this.end1Node, !1), this.setNodeActive(this.end2Node, !1), this.setNodeActive(this.endRightNode, !1), this.setNodeActive(this.backBgNode, !1), this.setNodeActive(this.demoTemplateNode, !1), this.setNodeActive(this.leftoverDemoNode, !1), this.resetHearts(), this.resetEndBadgeTransforms();
  }
  showScene(e, t) {
    this.currentSceneId = e, this.setNodeActive(this.endRightNode, !1), this.sceneRuntimes.forEach(t => {
      this.setNodeActive(t.rootNode, t.sceneId === e);
    });
    const i = this.completedSceneIds.has(e);
    this.setNodeActive(this.endRightNode, i), t && this.playSceneVoice(e);
  }
  switchSceneByDelta(e) {
    if (1 !== this.phase || this.isInteractionLocked) return;
    const t = this.wrapSceneId(this.currentSceneId + e);
    this.showScene(t, !0);
  }
  switchToNextIncompleteScene() {
    const e = this.resolveNextIncompleteSceneId(this.currentSceneId);
    null !== e ? this.showScene(e, !0) : this.enterPhase2Success();
  }
  resolveNextIncompleteSceneId(e) {
    for (let t = 1; t <= F; t += 1) {
      const i = this.wrapSceneId(e + t);
      if (!this.completedSceneIds.has(i)) return i;
    }
    return null;
  }
  wrapSceneId(e) {
    return (e - 1 + F) % F + 1;
  }
  populateCollectionBar() {
    this.clearCollectionItems();
    this.createShuffledSceneIds().forEach(e => {
      const t = this.createCollectionItem(e, null);
      t && this.loadFrameSprite(e, e => {
        this.applyShowpicFrame(t.itemNode, e);
      });
    }), this.refreshCollectionLayout();
  }
  createCollectionItem(e, t) {
    const i = this.contentNode,
      s = this.demoTemplateNode;
    if (null == i || !i.isValid || null == s || !s.isValid) return null;
    const n = __rea_outer_o(s);
    n.name = `frame_${e}`, n.active = !0, n.setParent(i), this.applyShowpicFrame(n, t);
    const l = {
      sceneId: e,
      itemNode: n
    };
    return this.collectionItems.push(l), l;
  }
  applyShowpicFrame(e, t) {
    var i;
    const o = (null == (i = e.getChildByName("showpic")) ? void 0 : i.getComponent(__rea_outer_s)) ?? null;
    o && t && (o.spriteFrame = t);
  }
  clearCollectionItems() {
    this.collectionItems.forEach(e => {
      var t;
      null != (t = e.itemNode) && t.isValid && (e.itemNode.removeFromParent(), e.itemNode.destroy());
    }), this.collectionItems.length = 0;
  }
  removeCollectionItem(e) {
    var t;
    const i = this.collectionItems.indexOf(e);
    i >= 0 && this.collectionItems.splice(i, 1), null != (t = e.itemNode) && t.isValid && (e.itemNode.removeFromParent(), e.itemNode.destroy()), this.refreshCollectionLayout();
  }
  refreshCollectionLayout() {
    var e;
    null == (e = this.contentLayout) || e.updateLayout(), this.computeScrollBounds();
  }
  registerInteractionHandlers() {
    this.disableScrollViewComponent(), this.disableNativeButtonComponents(), this.computeScrollBounds(), this.node.on(__rea_outer_n.EventType.TOUCH_START, this.onLevelTouchStart, this), this.node.on(__rea_outer_n.EventType.TOUCH_MOVE, this.onLevelTouchMove, this), this.node.on(__rea_outer_n.EventType.TOUCH_END, this.onLevelTouchEnd, this), this.node.on(__rea_outer_n.EventType.TOUCH_CANCEL, this.onLevelTouchCancel, this);
  }
  unregisterInteractionHandlers() {
    var e;
    null != (e = this.node) && e.isValid && (this.node.off(__rea_outer_n.EventType.TOUCH_START, this.onLevelTouchStart, this), this.node.off(__rea_outer_n.EventType.TOUCH_MOVE, this.onLevelTouchMove, this), this.node.off(__rea_outer_n.EventType.TOUCH_END, this.onLevelTouchEnd, this), this.node.off(__rea_outer_n.EventType.TOUCH_CANCEL, this.onLevelTouchCancel, this), this.resetTouchSession());
  }
  tryHandleArrowClick(e, t, o) {
    if (0 === o || this.isInteractionLocked) return;
    __rea_outer_i.distance(e, t) > 24 || this.switchSceneByDelta(o);
  }
  tryBeginContentScroll(e) {
    if (this.isContentScrolling || this.hasJudgedCurrentDrag) return;
    const t = e.x - this.touchStartPoint.x,
      i = e.y - this.touchStartPoint.y;
    Math.abs(t) <= 12 || Math.abs(t) <= Math.abs(i) || this.isPointInsideNode(this.viewNode, e) && (this.isContentScrolling = !0);
  }
  tryJudgeDropOnRelease() {
    const e = this.pendingCollectionItem;
    e && !this.hasJudgedCurrentDrag && !this.completedSceneIds.has(this.currentSceneId) && this.isFollowerInsideTouchTrigger() ? (this.hasJudgedCurrentDrag = !0, this.setInputBlocked(!0), this.isInteractionLocked = !0, e.sceneId !== this.currentSceneId ? this.playWrongMatch(e) : this.playCorrectMatch(e)) : this.returnFollowerToSlot();
  }
  isFollowerInsideTouchTrigger() {
    return __rea_outer_f.isDragNearTarget(this.followerNode, this.touchTriggerNode);
  }
  playCorrectMatch(e) {
    const t = this.findSceneRuntime(this.currentSceneId),
      i = this.followerNode;
    if (!t || null == i || !i.isValid) return void this.finishCorrectMatch(e, t);
    const o = this.resolveVictimWorldPosition(t);
    this.tweenNodeToWorld(i, o, .45, 1, () => {
      this.setNodeActive(t.victimNode, !0), this.destroyFollower(), this.playEnd2ThenFinish(e);
    });
  }
  playEnd2ThenFinish(e) {
    const t = this.end2Node;
    null != t && t.isValid ? (__rea_outer_I.playEffect_1("level37_1"), this.resetEnd2ToCenter(), this.setNodeActive(t, !0), this.scheduleOnceIfValid(() => {
      const i = this.resolveEndRightLocalPosition(t);
      __rea_outer_L(t), __rea_outer_l(t).to(.35, {
        position: i,
        scale: new __rea_outer_h(.45, .45, 1)
      }, {
        easing: "sineInOut"
      }).call(() => {
        this.setNodeActive(t, !1), this.resetEndBadgeTransforms(), this.finishCorrectMatch(e, this.findSceneRuntime(this.currentSceneId));
      }).start();
    }, .5)) : this.finishCorrectMatch(e, this.findSceneRuntime(this.currentSceneId));
  }
  resolveEndRightLocalPosition(e) {
    var t, i;
    const o = null == (t = e.parent) ? void 0 : t.getComponent(__rea_outer_r);
    return null != (i = this.endRightNode) && i.isValid && o ? o.convertToNodeSpaceAR(this.endRightNode.worldPosition.clone()) : e.position.clone();
  }
  finishCorrectMatch(e, t) {
    if (t && this.setNodeActive(t.victimNode, !0), this.completedSceneIds.add(e.sceneId), this.hasInstallNum = this.completedSceneIds.size, __rea_outer_B.getInstance().refreshGameProgress(), this.setNodeActive(this.endRightNode, !0), this.removeCollectionItem(e), this.pendingCollectionItem = null, this.setInputBlocked(!1), this.isInteractionLocked = !1, this.completedSceneIds.size >= F) return this.isInteractionLocked = !0, this.setInputBlocked(!0), void this.enterPhase2Success();
    this.switchToNextIncompleteScene();
  }
  playWrongMatch(e) {
    const t = this.end1Node,
      i = this.resolveCurrentHeartNode();
    __rea_outer_I.playEffect_1("level37_2"), null != t && t.isValid ? (this.resetEnd1ToCenter(), this.setNodeActive(t, !0), __rea_outer_L(t), __rea_outer_l(t).to(.25, {
      scale: new __rea_outer_h(1, 1, 1)
    }, {
      easing: "backOut"
    }).delay(.25).call(() => {
      this.flyEnd1ToHeart(t, i);
    }).start()) : this.finishWrongMatch();
  }
  flyEnd1ToHeart(e, t) {
    const i = e.parent,
      o = null == i ? void 0 : i.getComponent(__rea_outer_r),
      s = (null == t ? void 0 : t.worldPosition.clone()) ?? e.worldPosition.clone(),
      n = o ? o.convertToNodeSpaceAR(s) : e.position.clone();
    __rea_outer_L(e), __rea_outer_l(e).to(.25, {
      position: n,
      scale: new __rea_outer_h(.1, .1, 1)
    }, {
      easing: "sineIn"
    }).call(() => {
      this.breakCurrentHeart(), this.setNodeActive(e, !1), this.resetEndBadgeTransforms(), this.flyFollowerBackThenSettleWrong();
    }).start();
  }
  flyFollowerBackThenSettleWrong() {
    var e;
    const t = this.followerNode,
      i = (null == (e = this.pendingCollectionItem) ? void 0 : e.itemNode) ?? null;
    if (null == t || !t.isValid || null == i || !i.isValid) return void this.finishWrongMatch();
    const o = this.resolveFlyBackEndScale(t, i);
    this.tweenNodeToWorld(t, i.worldPosition.clone(), .35, o, () => {
      this.destroyFollower(), this.finishWrongMatch();
    });
  }
  finishWrongMatch() {
    this.destroyFollower(), this.pendingCollectionItem = null, this.remainingLives <= 0 ? this.enterPhase2Fail() : (this.setInputBlocked(!1), this.isInteractionLocked = !1);
  }
  beginFollower(e, t) {
    var i, s;
    this.destroyFollower();
    const n = (null == (i = this.findSceneRuntime(e.sceneId)) ? void 0 : i.victimNode) ?? null;
    if (null == n || !n.isValid) return;
    const l = __rea_outer_o(n);
    l.name = `follower_${e.sceneId}`, l.active = !0;
    const r = (null == (s = this.gameNode) ? void 0 : s.parent) ?? this.node;
    l.setParent(r), l.setSiblingIndex(r.children.length - 1), l.setWorldPosition(new __rea_outer_h(t.x, t.y, 0)), l.setScale(1, 1, 1), this.followerNode = l;
  }
  updateFollowerPosition(e) {
    const t = this.followerNode;
    null != t && t.isValid && t.setWorldPosition(new __rea_outer_h(e.x, e.y, 0));
  }
  hideFollower() {
    this.destroyFollower(), this.isContentScrolling && (this.pendingCollectionItem = null);
  }
  returnFollowerToSlot() {
    var e;
    const t = this.followerNode,
      i = (null == (e = this.pendingCollectionItem) ? void 0 : e.itemNode) ?? null;
    if (null == t || !t.isValid) return void (this.pendingCollectionItem = null);
    if (null == i || !i.isValid) return this.destroyFollower(), void (this.pendingCollectionItem = null);
    const o = this.resolveFlyBackEndScale(t, i);
    this.tweenNodeToWorld(t, i.worldPosition.clone(), .35, o, () => {
      this.destroyFollower(), this.pendingCollectionItem = null;
    });
  }
  destroyFollower() {
    const e = this.followerNode;
    this.followerNode = null, null != e && e.isValid && (__rea_outer_L(e), e.removeFromParent(), e.destroy());
  }
  tweenNodeToWorld(e, t, i, o, s) {
    const n = e.parent,
      d = null == n ? void 0 : n.getComponent(__rea_outer_r);
    if (null == n || !n.isValid || !d) return void s();
    const c = d.convertToNodeSpaceAR(t);
    __rea_outer_L(e), __rea_outer_l(e).to(i, {
      position: c,
      scale: new __rea_outer_h(o, o, 1)
    }, {
      easing: "sineInOut"
    }).call(() => {
      this.isValid && s();
    }).start();
  }
  resolveVictimWorldPosition(e) {
    const t = e.victimNode.parent ?? e.rootNode,
      i = null == t ? void 0 : t.getComponent(__rea_outer_r);
    return null != t && t.isValid && i ? i.convertToWorldSpaceAR(e.victimLocalPosition) : e.rootNode.worldPosition.clone();
  }
  resolveFlyBackEndScale(e, t) {
    var i, o;
    const s = (null == (i = e.getComponent(__rea_outer_r)) ? void 0 : i.width) ?? 1,
      n = (null == (o = t.getComponent(__rea_outer_r)) ? void 0 : o.width) ?? 180;
    return s <= 1 ? .2 : Math.max(.08, Math.min(.45, n / s));
  }
  resolveCurrentHeartNode() {
    const e = this.remainingLives;
    return this.heartFullNodes[e - 1] ?? null;
  }
  breakCurrentHeart() {
    const e = this.remainingLives;
    e <= 0 || (this.setNodeActive(this.heartFullNodes[e - 1], !1), this.setNodeActive(this.heartBrokenNodes[e - 1], !0), this.remainingLives = Math.max(0, this.remainingLives - 1));
  }
  resetHearts() {
    this.remainingLives = 3;
    for (let e = 0; e < 3; e += 1) this.setNodeActive(this.heartFullNodes[e], !0), this.setNodeActive(this.heartBrokenNodes[e], !1);
  }
  resetEnd2ToCenter() {
    const e = this.end2Node;
    null != e && e.isValid && (__rea_outer_L(e), e.setPosition(0, 0, 0), e.setScale(1, 1, 1));
  }
  resetEnd1ToCenter() {
    const e = this.end1Node;
    null != e && e.isValid && (__rea_outer_L(e), e.setPosition(0, 0, 0), e.setScale(.1, .1, 1));
  }
  resetEndBadgeTransforms() {
    var e, t;
    null != (e = this.end1Node) && e.isValid && (this.end1Node.setPosition(0, 0, 0), this.end1Node.setScale(1, 1, 1)), null != (t = this.end2Node) && t.isValid && (this.end2Node.setPosition(0, 0, 0), this.end2Node.setScale(1, 1, 1));
  }
  stopSceneVoice() {
    this.playingSceneVoiceKey && __rea_outer_I.stopOneEffect(this.playingSceneVoiceKey), __rea_outer_I.stopVoice(), this.playingSceneVoiceKey = "";
  }
  playSceneVoice(e) {
    const t = `37_${e}`;
    this.voiceToken += 1;
    const i = this.voiceToken;
    this.showVoiceBubble(t), this.stopSceneVoice(), this.playingSceneVoiceKey = t, __rea_outer_I.playEffect_1(t, () => {
      this.isValid && i === this.voiceToken && this.scheduleOnceIfValid(() => {
        i === this.voiceToken && this.hideVoiceBubble();
      }, 1);
    });
  }
  showVoiceBubble(e) {
    const t = __rea_outer_C.getInstance();
    this.tipLabel && (this.tipLabel.string = t.getKey(e), this.setNodeActive(this.tipLabel.node, !0)), this.setNodeActive(this.dialogBoxNode, !0), this.setNodeActive(this.bubbleNode, !0);
  }
  hideVoiceBubble() {
    var e;
    this.setNodeActive(this.bubbleNode, !1), this.setNodeActive(this.dialogBoxNode, !1), this.setNodeActive((null == (e = this.tipLabel) ? void 0 : e.node) ?? null, !1);
  }
  resolveHintKey() {
    const e = this.currentSceneId;
    if (!this.completedSceneIds.has(e)) return R[e - 1] ?? null;
    const t = this.resolveNextIncompleteSceneId(e);
    return null === t ? null : R[t - 1] ?? null;
  }
  loadFrameSprite(e, t) {
    const i = __rea_outer_d.getBundle(_);
    if (!i) return console.warn("[Level_37] missing bundle Level_37"), void t(null);
    const o = `Texture/frame/${e}/spriteFrame`;
    i.load(o, __rea_outer_c, (e, i) => {
      if (this.isValid) return e || !i ? (console.warn(`[Level_37] failed to load ${o}`, e), void t(null)) : void t(i);
    });
  }
  createShuffledSceneIds() {
    const e = [];
    for (let t = 1; t <= F; t += 1) e.push(t);
    for (let t = e.length - 1; t > 0; t -= 1) {
      const i = Math.floor(Math.random() * (t + 1)),
        o = e[t];
      e[t] = e[i], e[i] = o;
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
  resolveArrowDeltaAtPoint(e) {
    return this.isPointInsideNode(this.arrowRightNode, e) ? 1 : this.isPointInsideNode(this.arrowLeftNode, e) ? -1 : 0;
  }
  findSceneRuntime(e) {
    return this.sceneRuntimes.find(t => t.sceneId === e) ?? null;
  }
  disableScrollViewComponent() {
    var e;
    null != (e = this.scrollView) && e.isValid && (this.scrollView.enabled = !1);
  }
  disableNativeButtonComponents() {
    this.setButtonEnabled(this.arrowRightNode, !1), this.setButtonEnabled(this.arrowLeftNode, !1);
  }
  setButtonEnabled(e, t) {
    const i = null == e ? void 0 : e.getComponent(__rea_outer_a);
    i && (i.enabled = t);
  }
  computeScrollBounds() {
    var e;
    const t = this.contentNode,
      i = this.viewNode;
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
    null != i && i.isValid && __rea_outer_P(i, e, this.contentScrollBounds, t, .2);
  }
  snapBackContentScroll() {
    const e = this.contentNode;
    null != e && e.isValid && __rea_outer_b(e, this.contentScrollBounds, .3);
  }
  resetTouchSession() {
    this.touchSessionKind = M.None, this.isContentScrolling = !1, this.hasLeftCollectionBar = !1, this.arrowDelta = 0;
  }
  setInputBlocked(e) {
    const t = this.backBgNode;
    if (null == t || !t.isValid) return;
    t.active = e;
    const i = t.getComponent(__rea_outer_u);
    i && (i.enabled = e);
  }
  resolveReferences() {
    var e, t, i, o, s, n, l, h, r, d, c, a, u, v;
    this.gameNode = this.node.getChildByPath("UIPanel/gameNode"), this.gameMaskNode = (null == (e = this.gameNode) ? void 0 : e.getChildByName("GameMask")) ?? null, this.touchTriggerNode = (null == (t = this.gameMaskNode) ? void 0 : t.getChildByName("touchtrigger")) ?? null, this.clickRootNode = this.node.getChildByPath("UIPanel/click_root"), this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.bubbleNode = this.node.getChildByPath("UIPanel/bubble"), this.dialogBoxNode = (null == (i = this.bubbleNode) ? void 0 : i.getChildByName("dialog_box")) ?? null, this.tipLabel = (null == (o = this.bubbleNode) || null == (o = o.getChildByPath("dialog_box/Label")) ? void 0 : o.getComponent(__rea_outer_N)) ?? null, this.contentNode = (null == (s = this.clickRootNode) ? void 0 : s.getChildByPath("bg/ScrollView/view/content")) ?? null, this.viewNode = (null == (n = this.contentNode) ? void 0 : n.parent) ?? null, this.demoTemplateNode = (null == (l = this.contentNode) ? void 0 : l.getChildByName("demo")) ?? null, this.leftoverDemoNode = this.node.getChildByPath("UIPanel/demo"), this.scrollView = (null == (h = this.clickRootNode) || null == (h = h.getChildByPath("bg/ScrollView")) ? void 0 : h.getComponent(__rea_outer_g)) ?? null, this.contentLayout = (null == (r = this.contentNode) ? void 0 : r.getComponent(__rea_outer_m)) ?? null, this.arrowRightNode = (null == (d = this.clickRootNode) ? void 0 : d.getChildByPath("leftright/ButtonRight")) ?? null, this.arrowLeftNode = (null == (c = this.clickRootNode) ? void 0 : c.getChildByPath("leftright/ButtonLeft")) ?? null, this.end1Node = (null == (a = this.gameNode) ? void 0 : a.getChildByName("end_1")) ?? null, this.end2Node = (null == (u = this.gameNode) ? void 0 : u.getChildByName("end_2")) ?? null, this.endRightNode = (null == (v = this.clickRootNode) ? void 0 : v.getChildByName("endright")) ?? null, this.heartFullNodes.length = 0, this.heartBrokenNodes.length = 0;
    for (let e = 1; e <= 3; e += 1) {
      var p;
      const t = (null == (p = this.clickRootNode) ? void 0 : p.getChildByPath(`topnode/heart_bg/heart${e}`)) ?? null;
      this.heartFullNodes.push((null == t ? void 0 : t.getChildByName("heart")) ?? null), this.heartBrokenNodes.push((null == t ? void 0 : t.getChildByName("heart_1")) ?? null);
    }
    this.warnIfMissing("UIPanel/gameNode", this.gameNode), this.warnIfMissing("GameMask", this.gameMaskNode), this.warnIfMissing("touchtrigger", this.touchTriggerNode), this.warnIfMissing("content", this.contentNode), this.warnIfMissing("demo", this.demoTemplateNode), this.warnIfMissing("leftright/ButtonRight", this.arrowRightNode), this.warnIfMissing("leftright/ButtonLeft", this.arrowLeftNode), this.warnIfMissing("end_1", this.end1Node), this.warnIfMissing("end_2", this.end2Node), this.warnIfMissing("endright", this.endRightNode);
  }
  buildSceneRuntimes() {
    this.sceneRuntimes.length = 0;
    const e = this.gameMaskNode;
    if (null != e && e.isValid) for (let t = 1; t <= F; t += 1) {
      const i = e.getChildByName(`${t}`),
        o = (null == i ? void 0 : i.getChildByName(E[t - 1])) ?? null;
      null != i && i.isValid && null != o && o.isValid ? this.sceneRuntimes.push({
        sceneId: t,
        rootNode: i,
        victimNode: o,
        victimLocalPosition: o.position.clone()
      }) : console.warn(`[Level_37] missing scene ${t} or victim ${E[t - 1]}`);
    }
  }
  stopTrackedTweens() {
    [this.contentNode, this.followerNode, this.end1Node, this.end2Node, this.endRightNode].forEach(e => {
      null != e && e.isValid && __rea_outer_L(e);
    });
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
    t || console.warn(`[Level_37] missing ${e}`);
  }
  isPointInsideNode(e, t) {
    if (null == e || !e.isValid) return !1;
    const i = e.getComponent(__rea_outer_r);
    return !!i && i.getBoundingBoxToWorld().contains(t);
  }
  getTouchWorldPoint(e) {
    const t = e.getUILocation();
    return new __rea_outer_i(t.x, t.y);
  }
}) || k;
__rea_outer_t._RF.pop();
export { __recovered_export_0 as default };
