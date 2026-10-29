// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_29.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { applyDecoratedDescriptor as __rea_outer_t } from "./rollupPluginModLoBabelHelpers";
import { initializerDefineProperty as __rea_outer_i } from "./rollupPluginModLoBabelHelpers";
import { cclegacy as __rea_outer_s } from "cc";
import { Node as __rea_outer_o } from "cc";
import { Label as __rea_outer_n } from "cc";
import { _decorator as __rea_outer_a } from "cc";
import { Vec3 as __rea_outer_r } from "cc";
import { Tween as __rea_outer_h } from "cc";
import { tween as __rea_outer_l } from "cc";
import { UITransform as __rea_outer_d } from "cc";
import { Vec2 as __rea_outer_c } from "cc";
import { UIOpacity as __rea_outer_g } from "cc";
import { BlockInputEvents as __rea_outer_p } from "cc";
import { default as __rea_outer_u } from "./LevelBase";
import { default as __rea_outer_N } from "./clue-hit-tester";
import { default as __rea_outer_m } from "./AudioManager";
import { I18nController as __rea_outer_f } from "./i18n-controller";
import { UIManager as __rea_outer_v } from "./ui-manager";
import { UILayer as __rea_outer_P } from "./ui-layer";
import { UIHint as __rea_outer_D } from "./uihint";
import { UIFail as __rea_outer_b } from "./uifail";
import { GameController as __rea_outer_k } from "./GameController";
import { setNodeOpacity as __rea_outer_y } from "./CocosCompat";
import { stopAllTweens as __rea_outer_A } from "./CocosCompat";
let __recovered_export_0;
var S, T, _, w, C, I, L, G, V, O, H;
__rea_outer_s._RF.push({}, "5660a4oDzROXq6a6Cm/clBT", "Level_29", void 0);
const {
    ccclass: M,
    property: R
  } = __rea_outer_a,
  x = "29_1",
  B = "29_2",
  K = "29_4",
  E = "29_5",
  W = .12,
  F = -280,
  z = 290,
  U = 291,
  X = 292,
  $ = 293,
  q = ["level29_hint1", "level29_hint2", "level29_hint3", "level29_hint4", "level29_hint5", "level29_hint6", "level29_hint7"],
  Q = ["girlsnode/Mask/girl1", "girlsnode/Mask/girl2", "girlsnode/Mask/girl3"];
__recovered_export_0 = (S = M("Level_29"), T = R(__rea_outer_o), _ = R(__rea_outer_o), w = R(__rea_outer_n), C = R(__rea_outer_o), S((G = __rea_outer_t((L = class extends __rea_outer_u {
  constructor(...e) {
    super(...e), __rea_outer_i(this, "gameNode", G, this), __rea_outer_i(this, "bubbleNode", V, this), __rea_outer_i(this, "tipLabel", O, this), __rea_outer_i(this, "backBgNode", H, this), this.phase = 0, this.winstate = !1, this.isInteractionLocked = !1, this.completedSteps = new Set(), this.girlSlots = [], this.activeDragState = null, this.swipeTrackState = null, this.voiceToken = 0, this.nodeCache = new Map(), this.isHammerPrepared = !1, this.isMouseSpawned = !1, this.isTableOpened = !1, this.isKnifeEnlarged = !1, this.isKnifeDestroyed = !1, this.isDangerActive = !1, this.isPatrolRunning = !1, this.isPatrolLooking = !1, this.patrolDirection = 1, this.nextLookRemaining = 8, this.patrolPositionX = F, this.activePatrolMan = "man_2", this.girl_1OriginPosition = new __rea_outer_r(), this.knife1PinnedWorldPosition = null, this.knife1Node = null, this.originPositions = new Map(), this.onTouchStart = e => {
      if (1 !== this.phase || this.isInteractionLocked) return;
      const t = this.getTouchWorldPoint(e);
      if (this.tryBeginTableSwipe(t)) return void (e.propagationStopped = !0);
      if (this.tryHandleMouseHoleClick(t)) return void (e.propagationStopped = !0);
      const i = this.hitTestDraggable(t);
      i && (this.beginDrag(i.node, i.kind, e), e.propagationStopped = !0);
    }, this.onTouchMove = e => {
      if (this.activeDragState && 1 === this.phase && !this.isInteractionLocked) {
        const t = this.activeDragState;
        return this.setDragNodePositionFromTouch(e, t.dragNode, t.dragParent, t.touchOffset), "magnifier" === t.dragKind && this.anchorKnife1ToPinnedWorld(), void (e.propagationStopped = !0);
      }
      this.swipeTrackState && (e.propagationStopped = !0);
    }, this.onTouchEnd = e => {
      if (this.swipeTrackState) {
        const t = this.swipeTrackState;
        this.swipeTrackState = null;
        const i = this.getTouchWorldPoint(e);
        return this.resolveTableSwipe(t, i), void (e.propagationStopped = !0);
      }
      if (!this.activeDragState || 1 !== this.phase || this.isInteractionLocked) return void this.resetActiveDrag();
      const t = this.activeDragState;
      this.activeDragState = null;
      const i = this.getTouchWorldPoint(e);
      this.handleDragDrop(t, i), e.propagationStopped = !0;
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.allItemNum = 7, this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.enterPhase0();
  }
  onDestroy() {
    var e;
    this.unscheduleAllCallbacks(), null != (e = this.node) && e.isValid && this.unregisterInteractionHandlers(), __rea_outer_h.stopAllByTag(z), __rea_outer_h.stopAllByTag(U), __rea_outer_h.stopAllByTag(X), __rea_outer_h.stopAllByTag($), __rea_outer_h.stopAllByTag(294), this.stopPatrolTweensFromCache(), this.stopDangerBlinkFromCache(), __rea_outer_m.stopVoice(), this.activeDragState = null, this.swipeTrackState = null, this.nodeCache.clear(), this.girlSlots.length = 0;
  }
  handleTimeExpired() {
    return !!(this.phase >= 2 || this.winstate);
  }
  showHint() {
    if (1 !== this.phase) return;
    const e = this.resolveHintKey();
    if (!e) return;
    const t = __rea_outer_f.getInstance().getKey(e);
    __rea_outer_v.getInstance().showView(__rea_outer_D, void 0, {
      body: t
    });
  }
  getGameProgressSnapshot() {
    const e = this.completedSteps.size;
    return {
      progress: e / 7,
      label: `${e}/7`
    };
  }
  markAllTasksCompleted() {
    for (let e = 1; e <= 7; e += 1) this.completedSteps.add(e);
    this.hasInstallNum = 7;
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.isInteractionLocked = !1, this.activeDragState = null, this.swipeTrackState = null, this.voiceToken = 0, this.completedSteps.clear(), this.hasInstallNum = 0, this.nodeCache.clear(), this.girlSlots.length = 0, this.isHammerPrepared = !1, this.isMouseSpawned = !1, this.isTableOpened = !1, this.isKnifeEnlarged = !1, this.isKnifeDestroyed = !1, this.isDangerActive = !1, this.isPatrolRunning = !1, this.isPatrolLooking = !1, this.patrolDirection = 1, this.nextLookRemaining = this.randomLookInterval(), this.patrolPositionX = F, this.activePatrolMan = "man_2", this.knife1PinnedWorldPosition = null, this.knife1Node = null, this.originPositions.clear(), __rea_outer_m.stopVoice();
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_m.playMusic("bgm5", !0, .5), this.cacheOriginPositions(), this.buildGirlSlots(), this.applyInitialVisibility(), this.setInputBlocked(!0), this.setNodeActive(this.getGameNodePath("man"), !0), this.showDialogue(x), this.playVoiceEffect(x, () => {
      this.isValid && (this.hideBubble(), this.scheduleOnce(() => {
        this.isValid && (this.setNodeActive(this.getGameNodePath("man"), !1), this.playGirlIntroDrop(() => {
          this.isValid && (this.setInputBlocked(!1), this.enterPhase1());
        }));
      }, .5));
    });
  }
  enterPhase1() {
    this.phase = 1, this.registerInteractionHandlers(), this.startPatrolLoop(), __rea_outer_k.getInstance().refreshGameProgress();
  }
  enterPhase2Success() {
    this.phase >= 2 || (this.phase = 2, this.winstate = !0, this.isInteractionLocked = !0, this.unregisterInteractionHandlers(), this.stopPatrolLoop(), __rea_outer_k.getInstance().pauseTimer(), this.setNodeActive(this.getGameNodePath("mansxunluo"), !1), this.setNodeActive(this.getGameNodePath("man_1"), !0), this.showDialogue(K), this.playVoiceEffect(K, () => {
      this.isValid && (this.hideBubble(), this.showLevelSuccess(.3));
    }));
  }
  beginDangerFail() {
    this.phase >= 2 || (this.phase = 2, this.winstate = !1, this.isInteractionLocked = !0, this.isDangerActive = !1, this.unregisterInteractionHandlers(), this.stopPatrolLoop(), this.stopDangerBlink(), this.resetActiveDrag(), __rea_outer_k.getInstance().pauseTimer(), this.playOperationSound(), __rea_outer_m.playEffect_1("level29_2"), this.setNodeActive(this.getGameNodePath("mansxunluo"), !1), this.setNodeActive(this.getGameNodePath("danger"), !1), this.setNodeActive(this.getGameNodePath("man"), !0), this.showDialogue(E), this.playVoiceEffect(E, () => {
      this.isValid && (this.hideBubble(), this.scheduleOnce(() => {
        this.isValid && (this.setNodeActive(this.backBgNode, !0), __rea_outer_y(this.backBgNode, 255), this.setNodeActive(this.getGameNodePath("failnode"), !0), __rea_outer_m.playEffect_1("level29_3"), this.scheduleOnce(() => {
          this.isValid && __rea_outer_v.getInstance().showView(__rea_outer_b, __rea_outer_P.WIN_ANIMATION);
        }, 1.2));
      }, .5));
    }));
  }
  beginTimeoutFail() {
    this.phase >= 2 || (this.phase = 2, this.winstate = !1, this.isInteractionLocked = !0, this.unregisterInteractionHandlers(), this.stopPatrolLoop(), this.stopDangerBlink(), this.voiceToken += 1, __rea_outer_m.stopVoice(), this.hideBubble(), __rea_outer_k.getInstance().pauseTimer(), __rea_outer_v.getInstance().showView(__rea_outer_b, __rea_outer_P.WIN_ANIMATION));
  }
  applyInitialVisibility() {
    var e;
    ["bg", "bg1", "saw", "glass", "pot", "pot_1", "hammer", "hammer_stone", "fire", "fish_tank", "fish_1", "table"].forEach(e => {
      this.setNodeActive(this.getGameNodePath(e), !0);
    }), ["mansxunluo", "man_1", "failnode", "danger", "hammer_1", "hammer_stone_1", "fire1", "fire2", "fire3", "fish_2", "mouse", "mouse_1", "mouse_2", "knife_2", "knife_3", "girl_1", "table_1", "table_2", "magnifier", "man"].forEach(e => {
      this.setNodeActive(this.getGameNodePath(e), !1);
    }), this.ensureFishDrawOrder(), this.girlSlots.forEach(e => {
      this.setNodeActive(e.slotNode, !1), this.setNodeActive(e.ropeNode, !0), this.setNodeActive(e.girlNode, !0), e.isHanging = !1;
    }), this.setNodeActive(this.node.getChildByPath("UIPanel/demo"), !1), this.setNodeActive(this.backBgNode, !1), this.setNodeActive(this.bubbleNode, !1), this.setNodeActive((null == (e = this.bubbleNode) ? void 0 : e.getChildByName("dialog_box_1")) ?? null, !1);
  }
  ensureFishDrawOrder() {
    const e = this.getGameNodePath("fish_tank"),
      t = this.getGameNodePath("fish_1"),
      i = this.getGameNodePath("fish_2");
    if (null == e || !e.isValid) return;
    const s = e.getSiblingIndex();
    null != t && t.isValid && t.setSiblingIndex(s + 1), null != i && i.isValid && i.setSiblingIndex(s + 2);
  }
  cacheOriginPositions() {
    ["saw", "glass", "pot_1", "hammer", "hammer_1", "fire", "mouse", "magnifier", "knife_2", "fish_1", "fish_2", "girl_1"].forEach(e => {
      const t = this.getGameNodePath(e);
      null != t && t.isValid && this.originPositions.set(e, t.position.clone());
    });
    const e = this.getGameNodePath("girl_1");
    null != e && e.isValid && (this.girl_1OriginPosition = e.position.clone());
  }
  buildGirlSlots() {
    this.girlSlots.length = 0, Q.forEach((e, t) => {
      const i = this.getGameNodePath(e),
        s = this.getGameNodePath(`${e}/rope`),
        o = this.getGameNodePath(`${e}/girl`);
      null != i && i.isValid && null != s && s.isValid && null != o && o.isValid ? this.girlSlots.push({
        slotIndex: t,
        slotNode: i,
        ropeNode: s,
        girlNode: o,
        restPosition: i.position.clone(),
        isHanging: !1
      }) : console.warn(`[Level_29] 女孩槽位缺失: ${e}`);
    });
  }
  playGirlIntroDrop(e) {
    if (0 === this.girlSlots.length) return void e();
    let t = this.girlSlots.length;
    this.girlSlots.forEach(i => {
      i.slotNode.setPosition(i.restPosition.x, i.restPosition.y + 900, i.restPosition.z), this.setNodeActive(i.slotNode, !0), this.setNodeActive(i.ropeNode, !0), this.setNodeActive(i.girlNode, !0), __rea_outer_A(i.slotNode), __rea_outer_l(i.slotNode).tag($).to(.55, {
        position: i.restPosition.clone()
      }, {
        easing: "quadOut"
      }).call(() => {
        i.isHanging = !0, t -= 1, t <= 0 && e();
      }).start();
    });
  }
  registerInteractionHandlers() {
    this.node.on(__rea_outer_o.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(__rea_outer_o.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(__rea_outer_o.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(__rea_outer_o.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
  }
  unregisterInteractionHandlers() {
    this.node.off(__rea_outer_o.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(__rea_outer_o.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(__rea_outer_o.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(__rea_outer_o.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
  }
  tryBeginTableSwipe(e) {
    if (this.isTableOpened) return !1;
    const t = this.getGameNodePath("table");
    return !(null == t || !t.active || !this.isPointInsideNode(t, e)) && (this.swipeTrackState = {
      startLocation: e.clone()
    }, !0);
  }
  resolveTableSwipe(e, t) {
    const i = t.x - e.startLocation.x,
      s = t.y - e.startLocation.y;
    "down" === this.resolveSwipeDirection(i, s) && (this.isDangerActive ? this.beginDangerFail() : this.openTable());
  }
  openTable() {
    this.isTableOpened || (this.isTableOpened = !0, this.playOperationSound(), this.setNodeActive(this.getGameNodePath("table_1"), !0), this.setNodeActive(this.getGameNodePath("table_2"), !0), this.setNodeActive(this.getGameNodePath("knife_2"), !1), this.setNodeActive(this.getGameNodePath("knife_3"), !1), this.setNodeActive(this.getGameNodePath("magnifier"), !0), this.setNodeActive(this.getGameNodePath("magnifier/Mask/knife_1"), !0), this.captureKnife1PinnedWorldPosition(), this.anchorKnife1ToPinnedWorld());
  }
  tryHandleMouseHoleClick(e) {
    if (this.isMouseSpawned || this.isStepCompleted(6)) return !1;
    const t = this.getGameNodePath("clicks/touch6");
    return !(null == t || !t.isValid) && !!this.isPointInsideNode(t, e) && (this.isDangerActive ? (this.beginDangerFail(), !0) : (this.spawnMouse(), !0));
  }
  spawnMouse() {
    this.isMouseSpawned = !0, this.playOperationSound();
    const e = this.getGameNodePath("mouse");
    this.restoreNodeToOrigin(e, "mouse"), this.setNodeActive(e, !0);
  }
  hitTestDraggable(e) {
    const t = [];
    this.pushDragCandidate(t, "saw", "saw", !this.isStepCompleted(1)), this.pushDragCandidate(t, "glass", "glass", !this.isStepCompleted(2)), this.pushDragCandidate(t, "pot_1", "pot_1", !this.isStepCompleted(3)), this.pushDragCandidate(t, "hammer", "hammer", !this.isHammerPrepared && !this.isStepCompleted(4)), this.pushDragCandidate(t, "hammer_1", "hammer_1", this.isHammerPrepared && !this.isStepCompleted(4)), this.pushDragCandidate(t, "fire", "fire", !this.isStepCompleted(5)), this.pushDragCandidate(t, "mouse", "mouse", this.isMouseSpawned && !this.isStepCompleted(6)), this.pushDragCandidate(t, "magnifier", "magnifier", this.isTableOpened && !this.isKnifeEnlarged && !this.isKnifeDestroyed), this.pushDragCandidate(t, "knife_2", "knife_2", this.isKnifeEnlarged && !this.isKnifeDestroyed && !this.isStepCompleted(7)), t.sort((e, t) => this.getNodeRenderOrder(t.node) - this.getNodeRenderOrder(e.node));
    for (let i = 0; i < t.length; i += 1) {
      const s = t[i];
      if (s.node.activeInHierarchy && this.isPointInsideNode(s.node, e)) return {
        node: s.node,
        kind: s.kind
      };
    }
    return null;
  }
  pushDragCandidate(e, t, i, s) {
    if (!s) return;
    const o = this.getGameNodePath(t);
    null != o && o.active && e.push({
      node: o,
      kind: i,
      path: t
    });
  }
  beginDrag(e, t, i) {
    const s = e.parent,
      o = e.position.clone(),
      n = e.getSiblingIndex(),
      a = e.worldPosition.clone(),
      r = this.gameNode ?? s;
    "magnifier" === t && (this.captureKnife1PinnedWorldPosition(), this.anchorKnife1ToPinnedWorld()), e.setParent(r);
    const h = r.getComponent(__rea_outer_d);
    h && e.setPosition(h.convertToNodeSpaceAR(a)), e.setSiblingIndex(r.children.length - 1);
    const l = this.calculateTouchOffset(i, e, r);
    this.setDragNodePositionFromTouch(i, e, r, l), "magnifier" === t && this.anchorKnife1ToPinnedWorld(), this.activeDragState = {
      dragNode: e,
      dragKind: t,
      dragParent: r,
      touchOffset: l,
      originParent: s,
      originPosition: o,
      originWorldPosition: a,
      originSiblingIndex: n
    };
  }
  resetActiveDrag() {
    this.activeDragState && (this.restoreDragNode(this.activeDragState), this.activeDragState = null);
  }
  restoreDragNode(e) {
    const t = e.dragNode;
    t.isValid && (t.setParent(e.originParent), t.setSiblingIndex(e.originSiblingIndex), t.setPosition(e.originPosition)), "magnifier" !== e.dragKind && "knife_1" !== e.dragKind || (this.nodeCache.delete("magnifier/Mask/knife_1"), this.ensureKnife1UnderMask(), this.anchorKnife1ToPinnedWorld());
  }
  finalizeDragHide(e) {
    this.restoreDragNode(e), this.setNodeActive(e.dragNode, !1);
  }
  handleDragDrop(e, t) {
    switch (e.dragKind) {
      case "saw":
        return void this.handleRopeToolDrop(e, t, 1, (e, t) => this.playSawCut(e, t));
      case "glass":
        return void this.handleRopeToolDrop(e, t, 2, (e, t) => this.playGlassCut(e, t));
      case "pot_1":
        return void this.handleRopeToolDrop(e, t, 3, (e, t) => this.playFishCut(e, t));
      case "hammer":
        return void this.handleHammerPrepareDrop(e, t);
      case "hammer_1":
        return void this.handleRopeToolDrop(e, t, 4, (e, t) => this.playHammerCut(e, t));
      case "fire":
        return void this.handleRopeToolDrop(e, t, 5, (e, t) => this.playFireCut(e, t));
      case "mouse":
        return void this.handleRopeToolDrop(e, t, 6, (e, t) => this.playMouseCut(e, t));
      case "magnifier":
        return void this.handleMagnifierDrop(e, t);
      case "knife_1":
        return void this.handleKnife1Drop(e, t);
      case "knife_2":
        return void this.handleKnife2Drop(e, t);
      default:
        this.restoreDragNode(e);
    }
  }
  handleRopeToolDrop(e, t, i, s) {
    if (this.isStepCompleted(i)) return void this.restoreDragNode(e);
    const o = this.findHangingSlotAt(t, e.dragNode);
    if (o) return this.isDangerActive ? (this.restoreDragNode(e), void this.beginDangerFail()) : void s(o, e);
    this.restoreDragNode(e);
  }
  handleHammerPrepareDrop(e, t) {
    const i = this.getGameNodePath("hammer_stone");
    if (null != i && i.active && this.isDropOverlapping(e.dragNode, i, t)) {
      if (this.isDangerActive) return this.restoreDragNode(e), void this.beginDangerFail();
      this.finalizeDragHide(e), this.playHammerPrepare();
    } else this.restoreDragNode(e);
  }
  handleMagnifierDrop(e, t) {
    this.anchorKnife1ToPinnedWorld();
    const i = this.getGameNodePath("magnifier/Mask"),
      s = this.resolveKnife1Node(),
      o = null != s && s.isValid ? new __rea_outer_c(s.worldPosition.x, s.worldPosition.y) : null;
    if (Boolean(null == i ? void 0 : i.active) && Boolean(null == s ? void 0 : s.active) && null !== o && this.isPointInsideNode(i, o)) {
      if (this.isDangerActive) return this.restoreDragNode(e), void this.beginDangerFail();
      this.restoreDragNode(e), this.getProgressCount() < 6 ? this.showTemporaryTip("game49") : this.enlargeKnife();
    } else this.restoreDragNode(e);
  }
  handleKnife1Drop(e, t) {
    const i = this.findHangingSlotAt(t, e.dragNode);
    if (i) {
      if (this.isDangerActive) return this.restoreDragNode(e), void this.beginDangerFail();
      this.finalizeDragHide(e), this.isKnifeDestroyed = !0, this.knife1PinnedWorldPosition = null, this.setNodeActive(this.resolveKnife1Node(), !1), this.cutSingleRopeWithoutProgress(i);
    } else this.restoreDragNode(e);
  }
  handleKnife2Drop(e, t) {
    if (this.isStepCompleted(7)) return void this.restoreDragNode(e);
    if (this.findHangingSlotAt(t, e.dragNode)) return this.isDangerActive ? (this.restoreDragNode(e), void this.beginDangerFail()) : void this.playKnife2Cut(e);
    this.restoreDragNode(e);
  }
  enlargeKnife() {
    if (this.isKnifeEnlarged || this.isKnifeDestroyed) return;
    this.isKnifeEnlarged = !0, this.playOperationSound(), this.setNodeActive(this.getGameNodePath("magnifier"), !1);
    const e = this.resolveKnife1Node();
    this.setNodeActive(e, !1), this.knife1PinnedWorldPosition = null;
    const t = this.getGameNodePath("knife_2");
    this.restoreNodeToOrigin(t, "knife_2"), this.setNodeActive(t, !0);
  }
  resolveKnife1Node() {
    var e;
    if (null != (e = this.knife1Node) && e.isValid) return this.knife1Node;
    const t = this.getGameNodePath("magnifier/Mask/knife_1");
    return null != t && t.isValid && (this.knife1Node = t), t;
  }
  captureKnife1PinnedWorldPosition() {
    const e = this.resolveKnife1Node();
    null != e && e.isValid && (this.knife1Node = e, this.knife1PinnedWorldPosition || (this.knife1PinnedWorldPosition = e.worldPosition.clone()));
  }
  anchorKnife1ToPinnedWorld() {
    const e = this.knife1PinnedWorldPosition,
      t = this.resolveKnife1Node();
    e && null != t && t.isValid && !this.isKnifeEnlarged && !this.isKnifeDestroyed && (this.ensureKnife1UnderMask(), t.setWorldPosition(e));
  }
  ensureKnife1UnderMask() {
    const e = this.resolveKnife1Node(),
      t = this.getGameNodePath("magnifier/Mask");
    if (null == e || !e.isValid || null == t || !t.isValid) return;
    if (e.parent === t) return;
    const i = e.worldPosition.clone();
    e.setParent(t), e.setWorldPosition(i), this.nodeCache.delete("magnifier/Mask/knife_1");
  }
  playHammerPrepare() {
    this.isInteractionLocked = !0, this.playOperationSound();
    const e = this.getGameNodePath("hammer_stone_1");
    if (this.setNodeActive(e, !0), null != e && e.isValid) {
      __rea_outer_y(e, 255);
      const t = e.getComponent(__rea_outer_g) ?? e.addComponent(__rea_outer_g);
      return __rea_outer_A(e), void __rea_outer_l(t).tag(294).delay(.25).to(.45, {
        opacity: 0
      }).call(() => {
        if (!this.isValid) return;
        this.setNodeActive(e, !1), this.setNodeActive(this.getGameNodePath("hammer"), !1), this.setNodeActive(this.getGameNodePath("hammer_stone"), !1);
        const t = this.getGameNodePath("hammer_1");
        this.restoreNodeToOrigin(t, "hammer_1"), this.setNodeActive(t, !0), this.isHammerPrepared = !0, this.isInteractionLocked = !1;
      }).start();
    }
    this.setNodeActive(this.getGameNodePath("hammer"), !1), this.setNodeActive(this.getGameNodePath("hammer_stone"), !1), this.setNodeActive(this.getGameNodePath("hammer_1"), !0), this.isHammerPrepared = !0, this.isInteractionLocked = !1;
  }
  playSawCut(e, t) {
    this.isInteractionLocked = !0, this.moveNodeNearRope(t.dragNode, e), this.playHorizontalShake(t.dragNode, 2, () => {
      this.finalizeDragHide(t), this.setNodeActive(e.ropeNode, !1), this.completeRescueStep(1, e, B);
    });
  }
  playGlassCut(e, t) {
    this.isInteractionLocked = !0, this.moveNodeNearRope(t.dragNode, e), this.playHorizontalShake(t.dragNode, 2, () => {
      this.finalizeDragHide(t), this.setNodeActive(e.ropeNode, !1), this.completeRescueStep(2, e, B);
    });
  }
  playFishCut(e, t) {
    this.isInteractionLocked = !0, this.finalizeDragHide(t);
    const i = this.getGameNodePath("fish_1"),
      s = this.getGameNodePath("fish_2");
    this.moveNodeNearRope(i, e), this.moveNodeNearRope(s, e), null != i && i.isValid && null != s && s.isValid && s.setPosition(i.position.clone()), this.setNodeActive(i, !0), this.setNodeActive(s, !1), this.ensureFishDrawOrder(), this.playTogglePair(i, s, 3, .18, () => {
      this.setNodeActive(i, !1), this.setNodeActive(s, !1), this.restoreNodeToOrigin(i, "fish_1"), this.restoreNodeToOrigin(s, "fish_2"), this.setNodeActive(e.ropeNode, !1), this.completeRescueStep(3, e, B);
    });
  }
  playHammerCut(e, t) {
    this.isInteractionLocked = !0, this.moveNodeNearRope(t.dragNode, e);
    const i = t.dragNode.position.x;
    __rea_outer_A(t.dragNode), __rea_outer_l(t.dragNode).tag(X).to(.35, {
      position: new __rea_outer_r(i + 56, t.dragNode.position.y, 0)
    }).call(() => {
      this.finalizeDragHide(t), this.setNodeActive(e.ropeNode, !1), this.completeRescueStep(4, e, B);
    }).start();
  }
  playFireCut(e, t) {
    this.isInteractionLocked = !0, this.finalizeDragHide(t);
    const i = this.getGameNodePath("fire1"),
      s = this.getGameNodePath("fire2"),
      o = this.getGameNodePath("fire3");
    this.moveNodeNearRope(i, e), this.moveNodeNearRope(s, e), this.moveNodeNearRope(o, e), this.setNodeActive(i, !0), this.setNodeActive(s, !1), this.setNodeActive(o, !1);
    let n = 0;
    const a = [i, s, o],
      r = () => {
        this.isValid && (a.forEach((e, t) => {
          this.setNodeActive(e, t === n % a.length);
        }), n += 1, n >= 6 && (this.unschedule(r), this.setNodeActive(i, !1), this.setNodeActive(s, !1), this.setNodeActive(o, !1), this.setNodeActive(this.getGameNodePath("fire"), !1), this.setNodeActive(e.ropeNode, !1), this.completeRescueStep(5, e, B)));
      };
    this.schedule(r, 1 / 6);
  }
  playMouseCut(e, t) {
    this.isInteractionLocked = !0, this.finalizeDragHide(t);
    const i = this.getGameNodePath("mouse_1"),
      s = this.getGameNodePath("mouse_2");
    this.moveNodeNearRope(i, e), this.moveNodeNearRope(s, e), this.setNodeActive(i, !0), this.setNodeActive(s, !1), this.playTogglePair(i, s, 4, 1 / 4, () => {
      this.setNodeActive(i, !1), this.setNodeActive(s, !1), this.setNodeActive(this.getGameNodePath("mouse"), !1), this.setNodeActive(e.ropeNode, !1), this.completeRescueStep(6, e, B);
    });
  }
  playKnife2Cut(e) {
    this.isInteractionLocked = !0;
    const t = this.girlSlots.filter(e => e.isHanging),
      i = t.reduce((e, t) => e + t.restPosition.x, 0) / Math.max(1, t.length),
      s = t.length > 0 ? t[0].restPosition.y + 40 : e.dragNode.position.y;
    e.dragNode.setPosition(i - 120, s, 0), __rea_outer_A(e.dragNode), __rea_outer_l(e.dragNode).tag(X).to(.45, {
      position: new __rea_outer_r(i + 120, s, 0)
    }).call(() => {
      this.finalizeDragHide(e), this.playKnife3Flash(() => {
        t.forEach(e => {
          this.setNodeActive(e.ropeNode, !1);
        }), this.completeFinalRescue(t);
      });
    }).start();
  }
  playKnife3Flash(e) {
    const t = this.getGameNodePath("knife_3");
    if (null == t || !t.isValid) return void e();
    this.setNodeActive(t, !0), __rea_outer_y(t, 255);
    const i = t.getComponent(__rea_outer_g) ?? t.addComponent(__rea_outer_g);
    __rea_outer_A(t), __rea_outer_l(i).tag(X).to(.12, {
      opacity: 0
    }).to(.12, {
      opacity: 255
    }).to(.12, {
      opacity: 0
    }).call(() => {
      this.setNodeActive(t, !1), e();
    }).start();
  }
  findHangingSlotAt(e, t) {
    for (let i = 0; i < this.girlSlots.length; i += 1) {
      const s = this.girlSlots[i];
      if (s.isHanging && (this.isDropOverlapping(t, s.ropeNode, e) || this.isDropOverlapping(t, s.girlNode, e) || this.isDropOverlapping(t, s.slotNode, e))) return s;
    }
    return null;
  }
  cutSingleRopeWithoutProgress(e) {
    this.isInteractionLocked = !0, this.setNodeActive(e.ropeNode, !1), this.playOperationSound();
    const t = this.getProgressCount() < 6;
    this.playGirlLanding(e, B, t, () => {
      this.isInteractionLocked = !1;
    });
  }
  completeRescueStep(e, t, i) {
    this.isStepCompleted(e) ? this.isInteractionLocked = !1 : this.TryQuickWin() || (this.playOperationSound(), this.completedSteps.add(e), this.hasInstallNum = this.completedSteps.size, __rea_outer_k.getInstance().refreshGameProgress(), this.playGirlLanding(t, i, !0, () => {
      this.isInteractionLocked = !1;
    }));
  }
  completeFinalRescue(e) {
    if (this.TryQuickWin()) return;
    this.playOperationSound(), this.completedSteps.add(7), this.hasInstallNum = this.completedSteps.size, __rea_outer_k.getInstance().refreshGameProgress();
    const t = [...e].sort((e, t) => e.slotIndex - t.slotIndex),
      i = t.findIndex(e => 1 === e.slotIndex),
      s = i >= 0 ? [t[i], ...t.filter((e, t) => t !== i)] : t,
      o = e => {
        if (!this.isValid) return;
        if (e >= s.length) return void this.enterPhase2Success();
        const t = s[e],
          i = 1 === t.slotIndex ? "29_3" : "";
        this.playGirlLanding(t, i, !1, () => {
          o(e + 1);
        });
      };
    o(0);
  }
  playGirlLanding(e, t, i, s) {
    e.isHanging = !1, this.setNodeActive(e.girlNode, !1), this.setNodeActive(e.ropeNode, !1);
    const o = this.getGameNodePath("girl_1");
    if (null == o || !o.isValid) return this.maybeRefillSlot(e, i), void s();
    const n = new __rea_outer_r(e.restPosition.x, -164.9, 0);
    __rea_outer_A(o), o.setPosition(n), this.setNodeActive(o, !0);
    const a = () => {
      this.isValid && (this.hideBubble(), __rea_outer_l(o).tag($).to(.45, {
        position: new __rea_outer_r(-900, n.y, 0)
      }, {
        easing: "quadIn"
      }).call(() => {
        this.setNodeActive(o, !1), o.setPosition(this.girl_1OriginPosition), this.maybeRefillSlot(e, i), s();
      }).start());
    };
    if (t) return this.showDialogue(t), void this.playVoiceEffect(t, a);
    this.scheduleOnce(a, .2);
  }
  maybeRefillSlot(e, t) {
    t && this.getProgressCount() <= 6 ? (e.slotNode.setPosition(e.restPosition.x, e.restPosition.y + 900, e.restPosition.z), this.setNodeActive(e.slotNode, !0), this.setNodeActive(e.ropeNode, !0), this.setNodeActive(e.girlNode, !0), __rea_outer_A(e.slotNode), __rea_outer_l(e.slotNode).tag($).to(.55, {
      position: e.restPosition.clone()
    }, {
      easing: "quadOut"
    }).call(() => {
      e.isHanging = !0;
    }).start()) : this.setNodeActive(e.slotNode, !1);
  }
  getProgressCount() {
    return this.completedSteps.size;
  }
  isStepCompleted(e) {
    return this.completedSteps.has(e);
  }
  startPatrolLoop() {
    const e = this.getGameNodePath("mansxunluo");
    null != e && e.isValid && (this.isPatrolRunning = !0, this.isPatrolLooking = !1, this.isDangerActive = !1, this.patrolDirection = 1, this.patrolPositionX = F, this.nextLookRemaining = this.randomLookInterval(), this.setNodeActive(e, !0), this.showPatrolSprite("man_2"), this.continuePatrolWalk());
  }
  stopPatrolLoop() {
    this.isPatrolRunning = !1, this.isPatrolLooking = !1, this.isDangerActive = !1, this.stopPatrolTweens(), this.stopDangerBlink(), this.setNodeActive(this.getGameNodePath("danger"), !1);
  }
  continuePatrolWalk() {
    if (!this.isValid || !this.isPatrolRunning || 1 !== this.phase) return;
    const e = this.patrolDirection > 0 ? "man_2" : "man_3";
    this.showPatrolSprite(e);
    const t = this.getActivePatrolManNode();
    if (null == t || !t.isValid) return;
    const i = this.patrolDirection > 0 ? 280 : F,
      s = Math.abs(i - t.position.x),
      o = Math.max(.2, s / 120);
    this.stopPatrolTweens(), __rea_outer_l(t).tag(z).to(o, {
      position: new __rea_outer_r(i, t.position.y, 0)
    }).call(() => {
      this.isValid && this.isPatrolRunning && (this.patrolPositionX = i, this.patrolDirection = this.patrolDirection > 0 ? -1 : 1, this.nextLookRemaining -= o, this.nextLookRemaining <= 0 ? this.beginPatrolLook() : this.continuePatrolWalk());
    }).start();
  }
  beginPatrolLook() {
    if (!this.isValid || !this.isPatrolRunning || 1 !== this.phase) return;
    this.isPatrolLooking = !0;
    const e = this.getActivePatrolManNode();
    if (null == e || !e.isValid) return;
    const t = Math.abs(0 - e.position.x),
      i = Math.max(.15, t / 120);
    this.stopPatrolTweens(), __rea_outer_l(e).tag(z).to(i, {
      position: new __rea_outer_r(0, e.position.y, 0)
    }).call(() => {
      this.isValid && this.isPatrolRunning && (this.patrolPositionX = 0, this.showPatrolSprite("man_4"), this.enterDangerWindow());
    }).start();
  }
  enterDangerWindow() {
    this.isDangerActive = !0, this.setNodeActive(this.getGameNodePath("danger"), !0), this.startDangerBlink(), this.showDialogue("game48"), this.scheduleOnce(() => {
      this.isValid && 1 === this.phase && this.isPatrolRunning && this.exitDangerWindow();
    }, 2);
  }
  exitDangerWindow() {
    this.isDangerActive = !1, this.isPatrolLooking = !1, this.stopDangerBlink(), this.setNodeActive(this.getGameNodePath("danger"), !1), this.hideBubble(), this.nextLookRemaining = this.randomLookInterval(), this.continuePatrolWalk();
  }
  startDangerBlink() {
    const e = this.getGameNodePath("danger");
    if (null == e || !e.isValid) return;
    __rea_outer_y(e, 255);
    const t = e.getComponent(__rea_outer_g) ?? e.addComponent(__rea_outer_g);
    __rea_outer_A(e), __rea_outer_l(t).tag(U).to(.2, {
      opacity: 80
    }).to(.2, {
      opacity: 255
    }).union().repeatForever().start();
  }
  stopDangerBlink() {
    __rea_outer_h.stopAllByTag(U);
    const e = this.getGameNodePath("danger");
    null != e && e.isValid && (__rea_outer_A(e), __rea_outer_y(e, 255));
  }
  stopDangerBlinkFromCache() {
    __rea_outer_h.stopAllByTag(U);
    const e = this.nodeCache.get("danger") ?? null;
    null != e && e.isValid && __rea_outer_A(e);
  }
  stopPatrolTweens() {
    var e;
    if (__rea_outer_h.stopAllByTag(z), null == (e = this.gameNode) || !e.isValid) return;
    ["man_2", "man_3", "man_4"].forEach(e => {
      const t = this.getGameNodePath(this.getPatrolManPath(e));
      null != t && t.isValid && __rea_outer_A(t);
    });
  }
  stopPatrolTweensFromCache() {
    __rea_outer_h.stopAllByTag(z);
    ["man_2", "man_3", "man_4"].forEach(e => {
      const t = this.getPatrolManPath(e),
        i = this.nodeCache.get(t) ?? null;
      null != i && i.isValid && __rea_outer_A(i);
    });
  }
  getPatrolManPath(e) {
    return `mansxunluo/Mask/${e}`;
  }
  getActivePatrolManNode() {
    return this.getGameNodePath(this.getPatrolManPath(this.activePatrolMan));
  }
  showPatrolSprite(e) {
    const t = this.getActivePatrolManNode();
    null != t && t.isValid && (this.patrolPositionX = t.position.x), this.activePatrolMan = e;
    ["man_2", "man_3", "man_4"].forEach(t => {
      const i = this.getGameNodePath(this.getPatrolManPath(t)),
        s = t === e;
      this.setNodeActive(i, s), s && null != i && i.isValid && i.setPosition(this.patrolPositionX, i.position.y, i.position.z);
    });
  }
  randomLookInterval() {
    return 5 + 15 * Math.random();
  }
  moveNodeNearRope(e, t) {
    if (null == e || !e.isValid || !this.gameNode) return;
    const i = t.ropeNode.worldPosition.clone(),
      s = this.gameNode.getComponent(__rea_outer_d);
    s && (e.parent !== this.gameNode && e.setParent(this.gameNode), e.setPosition(s.convertToNodeSpaceAR(i)));
  }
  playHorizontalShake(e, t, i) {
    if (!e.isValid) return void i();
    const s = e.position.x,
      o = e.position.y;
    __rea_outer_A(e);
    let n = __rea_outer_l(e).tag(X);
    for (let e = 0; e < t; e += 1) n = n.to(W, {
      position: new __rea_outer_r(s - 28, o, 0)
    }).to(W, {
      position: new __rea_outer_r(s + 28, o, 0)
    });
    n.to(W, {
      position: new __rea_outer_r(s, o, 0)
    }).call(i).start();
  }
  playTogglePair(e, t, i, s, o) {
    let n = 0;
    const a = () => {
      if (!this.isValid) return;
      const s = n % 2 == 0;
      this.setNodeActive(e, s), this.setNodeActive(t, !s), n += 1, n >= 2 * i && (this.unschedule(a), o());
    };
    this.schedule(a, s);
  }
  showTemporaryTip(e) {
    this.showDialogue(e), this.scheduleOnce(() => {
      this.isValid && !this.isDangerActive && this.hideBubble();
    }, 1.5);
  }
  showDialogue(e) {
    var t;
    const i = __rea_outer_f.getInstance();
    this.tipLabel && (this.tipLabel.string = i.getKey(e), this.setNodeActive(this.tipLabel.node, !0)), this.setNodeActive((null == (t = this.bubbleNode) ? void 0 : t.getChildByName("dialog_box")) ?? null, !0), this.setNodeActive(this.bubbleNode, !0);
  }
  hideBubble() {
    var e;
    this.setNodeActive(this.bubbleNode, !1), this.setNodeActive((null == (e = this.tipLabel) ? void 0 : e.node) ?? null, !1);
  }
  playOperationSound() {
    __rea_outer_m.playEffect_1("level29_1");
  }
  playVoiceEffect(e, t) {
    this.voiceToken += 1;
    const i = this.voiceToken;
    let s = !1;
    const o = () => {
        !s && this.isValid && i === this.voiceToken && (s = !0, this.unschedule(n), null == t || t());
      },
      n = () => {
        o();
      };
    t && this.scheduleOnce(n, 4), __rea_outer_m.stopVoice(), __rea_outer_m.playEffect_1(e, t ? o : void 0);
  }
  resolveHintKey() {
    for (let e = 1; e <= 7; e += 1) if (!this.isStepCompleted(e)) {
      if (4 === e && !this.isHammerPrepared) return q[3] ?? null;
      if (6 === e && !this.isMouseSpawned) return q[5] ?? null;
      if (7 === e) {
        if (this.getProgressCount() < 6) continue;
        return q[6] ?? null;
      }
      return q[e - 1] ?? null;
    }
    return null;
  }
  resolveReferences() {
    var e;
    (this.gameNode = this.gameNode ?? this.node.getChildByPath("UIPanel/gameNode"), this.bubbleNode = this.bubbleNode ?? this.node.getChildByPath("UIPanel/bubble"), this.backBgNode = this.backBgNode ?? this.node.getChildByPath("UIPanel/backBG"), this.tipLabel) || (this.tipLabel = (null == (e = this.bubbleNode) || null == (e = e.getChildByPath("dialog_box/Label")) ? void 0 : e.getComponent(__rea_outer_n)) ?? null);
    this.gameNode || console.warn("[Level_29] 缺少 gameNode 节点"), this.getGameNodePath("clicks/touch6") || console.warn("[Level_29] 缺少 clicks/touch6（老鼠洞热区，prefab 待补）");
  }
  getGameNodePath(e) {
    var t;
    if (this.nodeCache.has(e)) {
      const t = this.nodeCache.get(e) ?? null;
      if (null != t && t.isValid) return t;
    }
    if (null == (t = this.gameNode) || !t.isValid) return null;
    const i = this.gameNode.getChildByPath(e) ?? null;
    return this.nodeCache.set(e, i), i;
  }
  restoreNodeToOrigin(e, t) {
    if (null == e || !e.isValid) return;
    const i = this.originPositions.get(t);
    i && e.setPosition(i);
  }
  setInputBlocked(e) {
    const t = this.backBgNode;
    if (null == t || !t.isValid) return;
    t.active = e, e && __rea_outer_y(t, 0);
    const i = t.getComponent(__rea_outer_p);
    i && (i.enabled = e);
  }
  setNodeActive(e, t) {
    null != e && e.isValid && (e.active = t);
  }
  safeStopNodeTweens(e) {
    null != e && e.isValid && __rea_outer_A(e);
  }
  getNodeRenderOrder(e) {
    let t = 0,
      i = 1,
      s = e;
    for (; s;) t += s.getSiblingIndex() * i, i *= 128, s = s.parent;
    return t;
  }
  isPointInsideNode(e, t) {
    const i = null == e ? void 0 : e.getComponent(__rea_outer_d);
    return !!i && i.getBoundingBoxToWorld().contains(t);
  }
  isDropOverlapping(e, t, i) {
    return __rea_outer_N.isDragNearTarget(e, t);
  }
  resolveSwipeDirection(e, t) {
    const i = Math.abs(e),
      s = Math.abs(t);
    return i < 10 && s < 10 ? null : i > 1.2 * s ? e < 0 ? "left" : "right" : s > 1.2 * i ? t < 0 ? "down" : "up" : null;
  }
  getTouchWorldPoint(e) {
    const t = e.getUILocation();
    return new __rea_outer_c(t.x, t.y);
  }
  getTouchLocalPosition(e, t) {
    const i = e.getUILocation(),
      s = t.getComponent(__rea_outer_d);
    return s ? s.convertToNodeSpaceAR(new __rea_outer_r(i.x, i.y, 0)) : __rea_outer_r.ZERO.clone();
  }
  calculateTouchOffset(e, t, i) {
    const s = this.getTouchLocalPosition(e, i);
    return new __rea_outer_r(t.position.x - s.x, t.position.y - s.y, 0);
  }
  setDragNodePositionFromTouch(e, t, i, s) {
    const o = this.getTouchLocalPosition(e, i);
    t.setPosition(o.x + s.x, o.y + s.y, t.position.z);
  }
}).prototype, "gameNode", [T], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), V = __rea_outer_t(L.prototype, "bubbleNode", [_], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), O = __rea_outer_t(L.prototype, "tipLabel", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), H = __rea_outer_t(L.prototype, "backBgNode", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), I = L)) || I);
__rea_outer_s._RF.pop();
export { __recovered_export_0 as default };
