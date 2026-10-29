// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_30.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { applyDecoratedDescriptor as __rea_outer_t } from "./rollupPluginModLoBabelHelpers";
import { initializerDefineProperty as __rea_outer_i } from "./rollupPluginModLoBabelHelpers";
import { cclegacy as __rea_outer_s } from "cc";
import { Node as __rea_outer_o } from "cc";
import { Label as __rea_outer_a } from "cc";
import { _decorator as __rea_outer_n } from "cc";
import { Vec3 as __rea_outer_h } from "cc";
import { Tween as __rea_outer_d } from "cc";
import { UITransform as __rea_outer_l } from "cc";
import { tween as __rea_outer_r } from "cc";
import { UIOpacity as __rea_outer_c } from "cc";
import { BlockInputEvents as __rea_outer_g } from "cc";
import { Vec2 as __rea_outer_p } from "cc";
import { default as __rea_outer_m } from "./LevelBase";
import { default as __rea_outer_N } from "./clue-hit-tester";
import { default as __rea_outer_u } from "./AudioManager";
import { I18nController as __rea_outer_v } from "./i18n-controller";
import { UIManager as __rea_outer_f } from "./ui-manager";
import { UILayer as __rea_outer_P } from "./ui-layer";
import { UIHint as __rea_outer_b } from "./uihint";
import { UIFail as __rea_outer_A } from "./uifail";
import { GameController as __rea_outer_k } from "./GameController";
import { setNodeOpacity as __rea_outer_S } from "./CocosCompat";
import { stopAllTweens as __rea_outer__ } from "./CocosCompat";
import { default as __rea_outer_y } from "./ActionSystem";
let __recovered_export_0;
var G, w, D, T, C, I, L, V, O, B, F;
__rea_outer_s._RF.push({}, "17b67R5X2hAEKUvMswbbjEW", "Level_30", void 0);
const {
    ccclass: E,
    property: x
  } = __rea_outer_n,
  z = "30_1",
  M = "30_2",
  R = "30_11",
  H = "level30_1",
  U = .12,
  $ = .05,
  W = 301,
  K = ["mans/man", "mans/man_1", "mans/man_2", "girl", "girl_1", "girl_2"],
  q = ["level30_hint1", "level30_hint2", "level30_hint3", "level30_hint4", "level30_hint5", "level30_hint6", "level30_hint7", "level30_hint8", "level30_hint9"],
  j = new Map([[1, "30_3"], [2, "30_4"], [3, "30_5"], [4, "30_6"], [5, "30_7"], [6, "30_8"], [8, "30_10"]]);
__recovered_export_0 = (G = E("Level_30"), w = x(__rea_outer_o), D = x(__rea_outer_o), T = x(__rea_outer_a), C = x(__rea_outer_o), G((V = __rea_outer_t((L = class extends __rea_outer_m {
  constructor(...e) {
    super(...e), __rea_outer_i(this, "gameNode", V, this), __rea_outer_i(this, "bubbleNode", O, this), __rea_outer_i(this, "tipLabel", B, this), __rea_outer_i(this, "backBgNode", F, this), this.phase = 0, this.winstate = !1, this.isInteractionLocked = !1, this.completedSteps = new Set(), this.unlockedLocks = new Set(), this.activeDragState = null, this.voiceToken = 0, this.nodeCache = new Map(), this.originPositions = new Map(), this.isFishFed = !1, this.isBadgeConsumed = !1, this.isLabelConsumed = !1, this.fish1RestPosition = new __rea_outer_h(), this.onTouchStart = e => {
      if (1 !== this.phase || this.isInteractionLocked || this.activeDragState) return;
      const t = this.getTouchWorldPoint(e),
        i = this.hitTestDraggable(t);
      i && (this.beginDrag(i.node, i.kind, e), e.propagationStopped = !0);
    }, this.onTouchMove = e => {
      const t = this.activeDragState;
      t && (this.setDragNodePositionFromTouch(e, t.dragNode, t.dragParent, t.touchOffset, "massage_gun" === t.dragKind ? 75 : 0, "massage_gun" === t.dragKind ? -30 : 0), "fish" === t.dragKind && this.syncFishFollowerToNode(t.dragNode, !1));
    }, this.onTouchEnd = e => {
      const t = this.activeDragState;
      t && (this.activeDragState = null, this.handleDragDrop(t, this.getTouchWorldPoint(e)));
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.allItemNum = 9, this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.enterPhase0();
  }
  onDestroy() {
    var e;
    this.unscheduleAllCallbacks(), null != (e = this.node) && e.isValid && this.unregisterInteractionHandlers(), this.stopBreathAnimations(), __rea_outer_d.stopAllByTag(300), __rea_outer_d.stopAllByTag(W), __rea_outer_d.stopAllByTag(302), __rea_outer_d.stopAllByTag(303), __rea_outer_d.stopAllByTag(304), __rea_outer_d.stopAllByTag(305), __rea_outer_u.stopVoice(), this.activeDragState = null, this.nodeCache.clear();
  }
  handleTimeExpired() {
    return !!(this.phase >= 2 || this.winstate);
  }
  showHint() {
    if (1 !== this.phase) return;
    const e = this.resolveHintKey();
    if (!e) return;
    const t = __rea_outer_v.getInstance().getKey(e);
    __rea_outer_f.getInstance().showView(__rea_outer_b, void 0, {
      body: t
    });
  }
  getGameProgressSnapshot() {
    const e = this.completedSteps.size;
    return {
      progress: e / 9,
      label: `${e}/9`
    };
  }
  markAllTasksCompleted() {
    for (let e = 1; e <= 9; e += 1) this.completedSteps.add(e);
    for (let e = 1; e <= 8; e += 1) this.unlockedLocks.add(e);
    this.hasInstallNum = 9;
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.isInteractionLocked = !1, this.activeDragState = null, this.voiceToken = 0, this.completedSteps.clear(), this.unlockedLocks.clear(), this.hasInstallNum = 0, this.isFishFed = !1, this.isBadgeConsumed = !1, this.isLabelConsumed = !1, this.nodeCache.clear(), this.originPositions.clear(), __rea_outer_u.stopVoice();
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_u.playMusic("bgm5", !0, .5), this.cacheOriginPositions(), this.applyInitialVisibility(), this.startBreathAnimations(), this.setInputBlocked(!0), this.showDialogue(z), this.playVoiceEffect(z, () => {
      this.isValid && (this.showDialogue(M), this.playVoiceEffect(M, () => {
        this.isValid && (this.hideBubble(), this.playBlackScreen(.25, () => {
          this.applyPhase1Visibility(), this.moveManToPlayPosition();
        }, () => {
          this.isValid && (this.setInputBlocked(!1), this.enterPhase1());
        }));
      }));
    });
  }
  enterPhase1() {
    this.phase = 1, this.registerInteractionHandlers(), __rea_outer_k.getInstance().refreshGameProgress();
  }
  enterPhase2Success() {
    this.phase >= 2 || (this.phase = 2, this.winstate = !0, this.isInteractionLocked = !0, this.unregisterInteractionHandlers(), __rea_outer_k.getInstance().pauseTimer(), this.playBlackScreen(.25, () => {
      this.applyRescueVisibility();
    }, () => {
      this.isValid && this.playBlackScreen(.5, () => {
        this.setNodeActive(this.getGameNodePath("girl_2"), !1), this.setNodeActive(this.getGameNodePath("girl_1"), !0), this.setNodeActive(this.getGameNodePath("mans/man_1"), !0), this.setNodeActive(this.getGameNodePath("mans/man_2"), !1), this.setNodeActive(this.getGameNodePath("mans/man"), !1);
      }, () => {
        this.isValid && (this.showDialogue(R), this.playVoiceEffect(R, () => {
          this.isValid && (this.hideBubble(), this.scheduleOnce(() => {
            this.isValid && this.showLevelSuccess(.3);
          }, 1));
        }));
      });
    }));
  }
  beginGirlShockFail() {
    if (this.phase >= 2) return;
    this.phase = 2, this.winstate = !1, this.isInteractionLocked = !0, this.unregisterInteractionHandlers(), this.resetActiveDrag(), __rea_outer_k.getInstance().pauseTimer();
    const e = this.getGameNodePath("wire");
    this.setNodeActive(e, !1), this.moveFailNodeToPoint("failureNodePt1"), this.setNodeActive(this.getGameNodePath("failnode"), !0), this.playShockShake(), __rea_outer_u.playEffect_1("level30_8"), this.scheduleOnce(() => {
      this.isValid && (this.setNodeActive(this.getGameNodePath("failnode"), !1), __rea_outer_f.getInstance().showView(__rea_outer_A, __rea_outer_P.WIN_ANIMATION));
    }, 1);
  }
  beginTimeoutFail() {
    this.phase >= 2 || (this.phase = 2, this.winstate = !1, this.isInteractionLocked = !0, this.unregisterInteractionHandlers(), this.resetActiveDrag(), __rea_outer_k.getInstance().pauseTimer(), __rea_outer_f.getInstance().showView(__rea_outer_A, __rea_outer_P.WIN_ANIMATION));
  }
  startBreathAnimations() {
    for (let e = 0; e < K.length; e += 1) this.startBreathOnNode(this.getGameNodePath(K[e]), 310 + e);
  }
  startBreathOnNode(e, t) {
    if (null == e || !e.isValid) return;
    __rea_outer_d.stopAllByTag(t);
    const i = e.scale.y;
    __rea_outer_y.RoseBreath_tag(e, i, .02, .7, 0, t);
  }
  stopBreathAnimations() {
    for (let e = 0; e < K.length; e += 1) __rea_outer_d.stopAllByTag(310 + e);
  }
  applyInitialVisibility() {
    this.setNodeActive(this.getGameNodePath("bg"), !0), this.setNodeActive(this.getGameNodePath("girl"), !0), this.setNodeActive(this.getGameNodePath("girl_1"), !1), this.setNodeActive(this.getGameNodePath("girl_2"), !1), this.setNodeActive(this.getGameNodePath("water_dungeon"), !1), this.setNodeActive(this.getGameNodePath("water_dungeon_1"), !1), this.setNodeActive(this.getGameNodePath("mans/man"), !0), this.setNodeActive(this.getGameNodePath("mans/man_2"), !1), this.setNodeActive(this.getGameNodePath("mans/man_1"), !1), this.setNodeActive(this.getGameNodePath("mans/shadow"), !0), this.setNodeActive(this.getGameNodePath("broom"), !1), this.setNodeActive(this.getGameNodePath("hammer"), !1), this.setNodeActive(this.getGameNodePath("fish"), !1), this.setNodeActive(this.getGameNodePath("fish_1"), !1), this.setNodeActive(this.getGameNodePath("fish_2"), !1), this.setNodeActive(this.getGameNodePath("wire"), !1), this.setNodeActive(this.getGameNodePath("massage_gun"), !1), this.setNodeActive(this.getGameNodePath("flamethrower"), !1), this.setNodeActive(this.getGameNodePath("flamethrower/fire"), !1), this.setNodeActive(this.getGameNodePath("badge_1"), !1), this.setNodeActive(this.getGameNodePath("failnode"), !1), this.setNodeActive(this.backBgNode, !1), this.setNodeActive(this.node.getChildByPath("UIPanel/demo"), !1), this.hideBubble();
    for (let e = 1; e <= 8; e += 1) this.setNodeActive(this.getGameNodePath(`lock${e}`), !1), this.setNodeActive(this.getGameNodePath(`lock${e}_1`), !1), this.setNodeActive(this.getGameNodePath(`lock${e}_2`), !1);
    this.setNodeActive(this.getGameNodePath("lock1label"), !1), this.setLockLabelValue(100);
  }
  applyPhase1Visibility() {
    this.setNodeActive(this.getGameNodePath("girl"), !1), this.setNodeActive(this.getGameNodePath("girl_2"), !0), this.setNodeActive(this.getGameNodePath("water_dungeon"), !0), this.setNodeActive(this.getGameNodePath("water_dungeon_1"), !0), this.setNodeActive(this.getGameNodePath("wire"), !0), this.setNodeActive(this.getGameNodePath("massage_gun"), !0), this.setNodeActive(this.getGameNodePath("flamethrower"), !0), this.setNodeActive(this.getGameNodePath("flamethrower/fire"), !1), this.setNodeActive(this.getGameNodePath("broom"), !0), this.setNodeActive(this.getGameNodePath("hammer"), !0), this.setNodeActive(this.getGameNodePath("fish"), !0), this.setNodeActive(this.getGameNodePath("fish_2"), !0);
    for (let e = 1; e <= 8; e += 1) this.setNodeActive(this.getGameNodePath(`lock${e}`), !0), this.setNodeActive(this.getGameNodePath(`lock${e}_1`), !1), this.setNodeActive(this.getGameNodePath(`lock${e}_2`), !0), this.resetLockOpacity(e);
    this.setNodeActive(this.getGameNodePath("lock1label"), !0), this.setLockLabelValue(100);
  }
  applyRescueVisibility() {
    this.setNodeActive(this.getGameNodePath("flamethrower"), !1), this.setNodeActive(this.getGameNodePath("flamethrower/fire"), !1), this.setNodeActive(this.getGameNodePath("water_dungeon"), !1), this.setNodeActive(this.getGameNodePath("water_dungeon_1"), !1), this.setNodeActive(this.getGameNodePath("girl_2"), !1), this.setNodeActive(this.getGameNodePath("girl_1"), !0), this.setNodeActive(this.getGameNodePath("lock1label"), !1);
    for (let e = 1; e <= 8; e += 1) this.setNodeActive(this.getGameNodePath(`lock${e}`), !1), this.setNodeActive(this.getGameNodePath(`lock${e}_1`), !1), this.setNodeActive(this.getGameNodePath(`lock${e}_2`), !1);
  }
  moveManToPlayPosition() {
    const e = this.getGameNodePath("mans/man"),
      t = this.getGameNodePath("mans/manpt"),
      i = this.getGameNodePath("mans/shadow");
    null != e && e.isValid && null != t && t.isValid && e.setPosition(t.position.clone()), null != i && i.isValid && null != t && t.isValid && i.setPosition(t.position.x, i.position.y, i.position.z);
  }
  cacheOriginPositions() {
    const e = ["broom", "hammer", "wire", "massage_gun", "fish", "fish_1", "fish_2", "flamethrower", "badge_1", "mans/man/badge", "mans/man/label", "mans/man_2/badge", "mans/man_2/label", "mans/man_2/shoes"];
    for (let t = 0; t < e.length; t += 1) {
      const i = e[t],
        s = this.getGameNodePath(i);
      null != s && s.isValid && this.originPositions.set(i, s.position.clone());
    }
    const t = this.getGameNodePath("fish_1");
    null != t && t.isValid && (this.fish1RestPosition = t.position.clone());
  }
  registerInteractionHandlers() {
    this.node.on(__rea_outer_o.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(__rea_outer_o.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(__rea_outer_o.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(__rea_outer_o.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
  }
  unregisterInteractionHandlers() {
    this.node.off(__rea_outer_o.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(__rea_outer_o.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(__rea_outer_o.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(__rea_outer_o.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
  }
  hitTestDraggable(e) {
    const t = [];
    if (this.pushDragCandidate(t, "broom", "broom", !this.isStepCompleted(1)), this.pushDragCandidate(t, "hammer", "hammer", !this.isStepCompleted(2)), this.pushWireDragCandidate(t), this.pushDragCandidate(t, "massage_gun", "massage_gun", !this.isStepCompleted(6)), this.pushDragCandidate(t, "fish", "fish", !this.isFishFed), this.pushDragCandidate(t, "fish_1", "fish_1", this.isFishFed && !this.isStepCompleted(7)), this.pushDragCandidate(t, "flamethrower", "flamethrower", !this.isStepCompleted(9)), !this.isBadgeConsumed) {
      const e = this.isStepCompleted(3) ? "mans/man_2/badge" : "mans/man/badge";
      this.pushDragCandidate(t, e, "badge", !0);
    }
    if (!this.isLabelConsumed) {
      const e = this.isStepCompleted(3) ? "mans/man_2/label" : "mans/man/label";
      this.pushDragCandidate(t, e, "label", !0);
    }
    this.isStepCompleted(3) && !this.isStepCompleted(8) && this.pushDragCandidate(t, "mans/man_2/shoes", "shoes", !0), t.sort((e, t) => this.getNodeRenderOrder(t.node) - this.getNodeRenderOrder(e.node));
    for (let i = 0; i < t.length; i += 1) {
      const s = t[i],
        o = "wire" === s.kind ? this.getWireContactNode(s.node) : s.node;
      if (this.isPointInsideNode(o, e)) return s;
    }
    return null;
  }
  pushDragCandidate(e, t, i, s) {
    if (!s) return;
    const o = this.getGameNodePath(t);
    null != o && o.active && e.push({
      node: o,
      kind: i
    });
  }
  pushWireDragCandidate(e) {
    if (this.isStepCompleted(3)) return;
    const t = this.getGameNodePath("wire");
    null != t && t.active && e.push({
      node: t,
      kind: "wire"
    });
  }
  getWireContactNode(e) {
    const t = e.getChildByName("wiretouch") ?? this.getGameNodePath("wire/wiretouch");
    return null != t && t.isValid ? t : e;
  }
  beginDrag(e, t, i) {
    let s = e,
      o = null,
      a = null;
    "badge" === t && (o = this.getGameNodePath("badge_1"), a = e, s = this.prepareIntermediateDrag(e, o));
    const n = s.parent,
      h = s.position.clone(),
      d = s.getSiblingIndex(),
      r = s.worldPosition.clone(),
      c = this.gameNode ?? n;
    s.setParent(c);
    const g = c.getComponent(__rea_outer_l);
    g && s.setPosition(g.convertToNodeSpaceAR(r)), s.setSiblingIndex(c.children.length - 1);
    const p = this.calculateTouchOffset(i, s, c);
    this.setDragNodePositionFromTouch(i, s, c, p, "massage_gun" === t ? 75 : 0, "massage_gun" === t ? -30 : 0), "fish" === t && this.syncFishFollowerToNode(s, !1), this.activeDragState = {
      dragNode: s,
      dragKind: t,
      dragParent: c,
      touchOffset: p,
      originParent: n,
      originPosition: h,
      originSiblingIndex: d,
      sourceNode: a,
      intermediateNode: o
    };
  }
  prepareIntermediateDrag(e, t) {
    if (null == t || !t.isValid) return e;
    const i = e.worldPosition.clone(),
      s = t.parent,
      o = null == s ? void 0 : s.getComponent(__rea_outer_l);
    return o && t.setPosition(o.convertToNodeSpaceAR(i)), this.setNodeActive(e, !1), this.setNodeActive(t, !0), t;
  }
  resetActiveDrag() {
    this.activeDragState && (this.restoreDragNode(this.activeDragState), this.activeDragState = null);
  }
  restoreDragNode(e) {
    var t;
    if ("badge" === e.dragKind) return null != (t = e.intermediateNode) && t.isValid && (e.intermediateNode.setParent(e.originParent), e.intermediateNode.setSiblingIndex(e.originSiblingIndex), e.intermediateNode.setPosition(e.originPosition), this.setNodeActive(e.intermediateNode, !1)), void this.setNodeActive(e.sourceNode, !0);
    const i = e.dragNode;
    i.isValid && (i.setParent(e.originParent), i.setSiblingIndex(e.originSiblingIndex), i.setPosition(e.originPosition), "fish" === e.dragKind && this.resetFishFollower());
  }
  finalizeDirectDrag(e, t) {
    const i = e.dragNode;
    i.isValid && (i.setParent(e.originParent), i.setSiblingIndex(e.originSiblingIndex), i.setPosition(e.originPosition), this.setNodeActive(i, t));
  }
  finalizeIntermediateDrag(e, t) {
    var i;
    null != (i = e.intermediateNode) && i.isValid && (e.intermediateNode.setParent(e.originParent), e.intermediateNode.setSiblingIndex(e.originSiblingIndex), e.intermediateNode.setPosition(e.originPosition), this.setNodeActive(e.intermediateNode, !1)), this.setNodeActive(e.sourceNode, t);
  }
  handleDragDrop(e, t) {
    if (this.isInteractionLocked || 1 !== this.phase) this.restoreDragNode(e);else switch (e.dragKind) {
      case "broom":
        return void this.handleBroomDrop(e, t);
      case "hammer":
        return void this.handleHammerDrop(e, t);
      case "wire":
        return void this.handleWireDrop(e, t);
      case "badge":
        return void this.handleBadgeDrop(e, t);
      case "label":
        return void this.handleLabelDrop(e, t);
      case "massage_gun":
        return void this.handleMassageGunDrop(e, t);
      case "fish":
        return void this.handleFishDrop(e, t);
      case "fish_1":
        return void this.handleFish1BoneDrop(e, t);
      case "shoes":
        return void this.handleShoesDrop(e, t);
      case "flamethrower":
        return void this.handleFlamethrowerDrop(e, t);
      default:
        this.restoreDragNode(e);
    }
  }
  handleBroomDrop(e, t) {
    const i = this.getGameNodePath("lock7");
    if (!this.isStepCompleted(1) && i && this.isDropOverlapping(e.dragNode, i, t)) {
      this.isInteractionLocked = !0, this.placeDragOnTarget(e, i);
      const t = e.dragNode.position;
      return e.dragNode.setPosition(t.x, t.y + 300, t.z), void this.playSweepAnimation(e.dragNode, () => {
        this.isValid && (__rea_outer_u.playEffect_1(H), this.setNodeActive(e.dragNode, !1), this.unlockLock(7, () => {
          this.completeStep(1), this.isInteractionLocked = !1;
        }));
      });
    }
    this.restoreDragNode(e);
  }
  handleHammerDrop(e, t) {
    const i = this.getGameNodePath("lock4");
    if (!this.isStepCompleted(2) && i && this.isDropOverlapping(e.dragNode, i, t)) {
      this.isInteractionLocked = !0, this.placeDragOnTarget(e, i);
      const t = e.dragNode.position;
      return e.dragNode.setPosition(t.x + 80, t.y, t.z), void this.playSmashAnimation(e.dragNode, () => {
        this.isValid && (__rea_outer_u.playEffect_1("level30_2"), this.setNodeActive(e.dragNode, !1), this.unlockLock(4, () => {
          this.completeStep(2), this.isInteractionLocked = !1;
        }));
      });
    }
    this.restoreDragNode(e);
  }
  handleWireDrop(e, t) {
    const i = this.getWireContactNode(e.dragNode),
      s = this.getGameNodePath("girlwiretouch"),
      o = this.getGameNodePath("girl_2");
    if (null != o && o.active && s && this.isDropOverlapping(i, s, t)) return this.setNodeActive(e.dragNode, !1), void this.beginGirlShockFail();
    const a = this.getGameNodePath("mans/man"),
      n = this.getGameNodePath("mans/manwiretouch");
    if (!this.isStepCompleted(3) && null != a && a.active && n && this.isDropOverlapping(i, n, t)) return this.isInteractionLocked = !0, void this.beginManShockSequence(e.dragNode);
    this.restoreDragNode(e);
  }
  handleBadgeDrop(e, t) {
    const i = this.getGameNodePath("lock8");
    if (!this.isStepCompleted(4) && i && this.isDropOverlapping(e.dragNode, i, t)) return this.isInteractionLocked = !0, this.placeDragOnTarget(e, i), void this.playStickAnimation(e.dragNode, () => {
      this.isValid && (__rea_outer_u.playEffect_1("level30_3"), this.finalizeIntermediateDrag(e, !1), this.isBadgeConsumed = !0, this.setNodeActive(this.getGameNodePath("mans/man/badge"), !1), this.setNodeActive(this.getGameNodePath("mans/man_2/badge"), !1), this.unlockLock(8, () => {
        this.completeStep(4), this.isInteractionLocked = !1;
      }));
    });
    this.restoreDragNode(e);
  }
  handleLabelDrop(e, t) {
    const i = this.getGameNodePath("lock2");
    if (!this.isStepCompleted(5) && i && this.isDropOverlapping(e.dragNode, i, t)) return this.isInteractionLocked = !0, this.placeDragOnTarget(e, i), void this.playStickAnimation(e.dragNode, () => {
      this.isValid && (__rea_outer_u.playEffect_1(H), this.finalizeDirectDrag(e, !1), this.isLabelConsumed = !0, this.setNodeActive(this.getGameNodePath("mans/man/label"), !1), this.setNodeActive(this.getGameNodePath("mans/man_2/label"), !1), this.unlockLock(2, () => {
        this.completeStep(5), this.isInteractionLocked = !1;
      }));
    });
    this.restoreDragNode(e);
  }
  handleMassageGunDrop(e, t) {
    const i = this.getGameNodePath("lock1");
    if (!this.isStepCompleted(6) && i && this.isDropOverlapping(e.dragNode, i, t)) return this.isInteractionLocked = !0, this.placeDragNearLabel(e), void this.playMassageSequence(e.dragNode, () => {
      this.isValid && (this.setNodeActive(e.dragNode, !1), this.unlockLock(1, () => {
        this.setNodeActive(this.getGameNodePath("lock1label"), !1), this.completeStep(6), this.isInteractionLocked = !1;
      }));
    });
    this.restoreDragNode(e);
  }
  handleFishDrop(e, t) {
    const i = this.getCurrentGuardNode();
    if (!this.isFishFed && i && this.isDropOverlapping(e.dragNode, i, t)) return this.isInteractionLocked = !0, this.finalizeDirectDrag(e, !1), this.resetFishFollower(), void this.playFeedFishSequence(() => {
      this.isValid && (this.isFishFed = !0, this.showDialogue("30_9"), this.playVoiceEffect("30_9", () => {
        this.isValid && (this.hideBubble(), this.isInteractionLocked = !1);
      }));
    });
    this.restoreDragNode(e);
  }
  handleFish1BoneDrop(e, t) {
    const i = this.getGameNodePath("lock5");
    if (this.isFishFed && !this.isStepCompleted(7) && i && this.isDropOverlapping(e.dragNode, i, t)) return this.isInteractionLocked = !0, this.placeDragOnTarget(e, i), void this.playStickAnimation(e.dragNode, () => {
      this.isValid && (__rea_outer_u.playEffect_1(H), this.setNodeActive(e.dragNode, !1), this.unlockLock(5, () => {
        this.completeStep(7), this.isInteractionLocked = !1;
      }));
    });
    this.restoreDragNode(e);
  }
  handleShoesDrop(e, t) {
    const i = this.getGameNodePath("lock3");
    if (this.isStepCompleted(3) && !this.isStepCompleted(8) && i && this.isDropOverlapping(e.dragNode, i, t)) return this.isInteractionLocked = !0, this.placeDragOnTarget(e, i), void this.playStickAnimation(e.dragNode, () => {
      this.isValid && (__rea_outer_u.playEffect_1(H), this.finalizeDirectDrag(e, !1), this.unlockLock(3, () => {
        this.completeStep(8), this.isInteractionLocked = !1;
      }));
    });
    this.restoreDragNode(e);
  }
  handleFlamethrowerDrop(e, t) {
    const i = this.getGameNodePath("flamethrowertouch");
    if (this.unlockedLocks.size >= 8 && !this.isStepCompleted(9) && i && this.isDropOverlapping(e.dragNode, i, t)) return this.isInteractionLocked = !0, this.playFlamethrowerFirePulse(), __rea_outer_u.playEffect_1("level30_6"), void this.scheduleOnce(() => {
      this.isValid && (this.stopFlamethrowerFirePulse(), this.setNodeActive(this.getGameNodePath("water_dungeon"), !1), this.setNodeActive(this.getGameNodePath("water_dungeon_1"), !1), this.setNodeActive(this.getGameNodePath("girl_2"), !1), this.setNodeActive(this.getGameNodePath("girl_1"), !0), this.completedSteps.add(9), this.hasInstallNum = this.completedSteps.size, __rea_outer_k.getInstance().refreshGameProgress(), this.enterPhase2Success());
    }, 1);
    this.restoreDragNode(e);
  }
  playFlamethrowerFirePulse() {
    const e = this.getGameNodePath("flamethrower/fire");
    null != e && e.isValid && (this.safeStopNodeTweens(e), e.setScale(1, .9, 1), this.setNodeActive(e, !0), __rea_outer_r(e).tag(305).to(.12, {
      scale: new __rea_outer_h(1.1, 1.05, 1)
    }).to(.12, {
      scale: new __rea_outer_h(1, .9, 1)
    }).union().repeatForever().start());
  }
  stopFlamethrowerFirePulse() {
    const e = this.getGameNodePath("flamethrower/fire");
    __rea_outer_d.stopAllByTag(305), null != e && e.isValid && (this.safeStopNodeTweens(e), e.setScale(1, 1, 1), this.setNodeActive(e, !1));
  }
  beginManShockSequence(e) {
    this.moveFailNodeToPoint("failureNodePt2"), this.setNodeActive(this.getGameNodePath("failnode"), !0), this.playShockShake(), __rea_outer_u.playEffect_1("level30_7"), this.scheduleOnce(() => {
      this.isValid && (this.setNodeActive(this.getGameNodePath("failnode"), !1), this.setNodeActive(e, !1), this.setNodeActive(this.getGameNodePath("mans/man"), !1), this.setNodeActive(this.getGameNodePath("mans/man_2"), !0), this.isBadgeConsumed && this.setNodeActive(this.getGameNodePath("mans/man_2/badge"), !1), this.isLabelConsumed && this.setNodeActive(this.getGameNodePath("mans/man_2/label"), !1), this.unlockLock(6, () => {
        this.completeStep(3), this.isInteractionLocked = !1;
      }));
    }, 1);
  }
  playFeedFishSequence(e) {
    var t;
    const i = this.getGameNodePath("fish_1"),
      s = this.getCurrentGuardNode();
    if (null == i || !i.isValid || null == s || !s.isValid) return void e();
    __rea_outer_u.playEffect_1("level30_5");
    const o = new __rea_outer_h(s.worldPosition.x, s.worldPosition.y + 80, 0),
      a = null == (t = i.parent) ? void 0 : t.getComponent(__rea_outer_l);
    a && i.setPosition(a.convertToNodeSpaceAR(o)), i.setScale(.2, .2, 1), this.setNodeActive(i, !0), this.safeStopNodeTweens(i), __rea_outer_r(i).tag(303).parallel(__rea_outer_r().to(.4, {
      position: this.fish1RestPosition.clone()
    }), __rea_outer_r().to(.4, {
      scale: new __rea_outer_h(1, 1, 1)
    })).call(() => {
      this.isValid && e();
    }).start();
  }
  syncFishFollowerToNode(e, t) {
    var i;
    const s = this.getGameNodePath("fish_1");
    if (null == s || !s.isValid || !e.isValid) return;
    const o = null == (i = s.parent) ? void 0 : i.getComponent(__rea_outer_l);
    o && s.setPosition(o.convertToNodeSpaceAR(e.worldPosition)), this.setNodeActive(s, t);
  }
  resetFishFollower() {
    const e = this.getGameNodePath("fish_1");
    null != e && e.isValid && (e.setPosition(this.fish1RestPosition.clone()), e.setScale(1, 1, 1), this.setNodeActive(e, !1));
  }
  playMassageSequence(e, t) {
    __rea_outer_u.playEffect_1(H);
    const i = e.position.clone();
    this.safeStopNodeTweens(e);
    __rea_outer_r(e).tag(304).to(.05, {
      position: new __rea_outer_h(i.x + 6, i.y, i.z)
    }).to(.05, {
      position: i
    }).union().repeatForever().start();
    let s = 0;
    const o = () => {
      s += 1;
      const a = Math.max(0, Math.round(100 * (1 - s / 20)));
      this.setLockLabelValue(a), s >= 20 && (this.unschedule(o), this.safeStopNodeTweens(e), e.setPosition(i), t());
    };
    this.schedule(o, .06);
  }
  unlockLock(e, t) {
    if (this.unlockedLocks.has(e)) return void t();
    this.unlockedLocks.add(e);
    const i = this.getGameNodePath(`lock${e}`),
      s = this.getGameNodePath(`lock${e}_1`),
      o = this.getGameNodePath(`lock${e}_2`);
    this.setNodeActive(i, !1), this.setNodeActive(s, !0), this.setNodeActive(o, !0), this.setNodeOpacitySafe(s, 255), this.setNodeOpacitySafe(o, 255);
    let a = 0;
    const n = () => {
      a -= 1, a <= 0 && (this.setNodeActive(s, !1), this.setNodeActive(o, !1), t());
    };
    a = 2, this.fadeOutNode(s, n), this.fadeOutNode(o, n);
  }
  completeStep(e) {
    if (this.completedSteps.has(e)) return;
    if (this.TryQuickWin()) return;
    this.completedSteps.add(e), this.hasInstallNum = this.completedSteps.size, __rea_outer_k.getInstance().refreshGameProgress();
    const t = j.get(e);
    t && (this.showDialogue(t), this.playVoiceEffect(t, () => {
      this.isValid && this.hideBubble();
    }));
  }
  isStepCompleted(e) {
    return this.completedSteps.has(e);
  }
  getCurrentGuardNode() {
    return this.isStepCompleted(3) ? this.getGameNodePath("mans/man_2") : this.getGameNodePath("mans/man");
  }
  placeDragOnTarget(e, t) {
    const i = e.dragParent.getComponent(__rea_outer_l);
    i && e.dragNode.setPosition(i.convertToNodeSpaceAR(t.worldPosition));
  }
  placeDragNearLabel(e) {
    const t = this.getGameNodePath("lock1label") ?? this.getGameNodePath("lock1");
    if (!t) return;
    this.placeDragOnTarget(e, t);
    const i = e.dragNode.position;
    e.dragNode.setPosition(i.x + 75, i.y + -30, i.z);
  }
  moveFailNodeToPoint(e) {
    const t = this.getGameNodePath("failnode"),
      i = this.getGameNodePath(e);
    if (null == t || !t.isValid || null == i || !i.isValid) return;
    const s = t.parent,
      o = null == s ? void 0 : s.getComponent(__rea_outer_l);
    o ? t.setPosition(o.convertToNodeSpaceAR(i.worldPosition)) : t.setWorldPosition(i.worldPosition);
  }
  playShockShake() {
    this.shakeNode(this.getGameNodePath("failnode/failure")), this.shakeNode(this.getGameNodePath("failnode/failure_1"));
  }
  shakeNode(e) {
    if (null == e || !e.isValid) return;
    const t = e.position.clone();
    this.safeStopNodeTweens(e), __rea_outer_r(e).tag(302).to($, {
      position: new __rea_outer_h(t.x + 10, t.y, t.z)
    }).to($, {
      position: new __rea_outer_h(t.x - 10, t.y, t.z)
    }).union().repeat(Math.max(1, Math.floor(10))).call(() => {
      e.isValid && e.setPosition(t);
    }).start();
  }
  playSweepAnimation(e, t) {
    const i = e.position.clone();
    this.safeStopNodeTweens(e), __rea_outer_r(e).tag(W).to(U, {
      position: new __rea_outer_h(i.x - 24, i.y, i.z)
    }).to(U, {
      position: new __rea_outer_h(i.x + 24, i.y, i.z)
    }).to(U, {
      position: new __rea_outer_h(i.x - 24, i.y, i.z)
    }).to(U, {
      position: i
    }).call(t).start();
  }
  playSmashAnimation(e, t) {
    const i = e.position.clone();
    this.safeStopNodeTweens(e), __rea_outer_r(e).tag(W).to(.15, {
      position: new __rea_outer_h(i.x, i.y + 40, i.z)
    }).to(.15, {
      position: i
    }).call(t).start();
  }
  playStickAnimation(e, t) {
    const i = e.position.clone();
    this.safeStopNodeTweens(e), __rea_outer_r(e).tag(W).to(.08, {
      position: new __rea_outer_h(i.x, i.y - 10, i.z)
    }).to(.08, i).call(t).start();
  }
  fadeOutNode(e, t) {
    if (null == e || !e.isValid) return void t();
    const i = e.getComponent(__rea_outer_c) ?? e.addComponent(__rea_outer_c);
    i.opacity = 255, this.safeStopNodeTweens(e), __rea_outer_r(i).tag(300).to(.45, {
      opacity: 0
    }).call(t).start();
  }
  resetLockOpacity(e) {
    this.setNodeOpacitySafe(this.getGameNodePath(`lock${e}`), 255), this.setNodeOpacitySafe(this.getGameNodePath(`lock${e}_1`), 255), this.setNodeOpacitySafe(this.getGameNodePath(`lock${e}_2`), 255);
  }
  setLockLabelValue(e) {
    const t = this.getGameNodePath("lock1label"),
      i = null == t ? void 0 : t.getComponent(__rea_outer_a);
    i && (i.string = `${e}`);
  }
  playBlackScreen(e, t, i) {
    const s = this.backBgNode;
    if (null == s || !s.isValid) return t(), void i();
    s.active = !0, __rea_outer_S(s, 255);
    const o = s.getComponent(__rea_outer_g);
    o && (o.enabled = !0), t(), this.scheduleOnce(() => {
      this.isValid && (__rea_outer_S(s, 0), s.active = !1, o && (o.enabled = !1), i());
    }, e);
  }
  showDialogue(e) {
    var t;
    const i = __rea_outer_v.getInstance();
    this.tipLabel && (this.tipLabel.string = i.getKey(e), this.setNodeActive(this.tipLabel.node, !0)), this.setNodeActive((null == (t = this.bubbleNode) ? void 0 : t.getChildByName("dialog_box")) ?? null, !0), this.setNodeActive(this.bubbleNode, !0);
  }
  hideBubble() {
    var e;
    this.setNodeActive(this.bubbleNode, !1), this.setNodeActive((null == (e = this.tipLabel) ? void 0 : e.node) ?? null, !1);
  }
  playVoiceEffect(e, t) {
    this.voiceToken += 1;
    const i = this.voiceToken;
    let s = !1;
    const o = () => {
        !s && this.isValid && i === this.voiceToken && (s = !0, this.unschedule(a), null == t || t());
      },
      a = () => {
        o();
      };
    t && this.scheduleOnce(a, 4), __rea_outer_u.stopVoice(), __rea_outer_u.playEffect_1(e, t ? o : void 0);
  }
  resolveHintKey() {
    for (let e = 1; e <= 9; e += 1) if (!this.isStepCompleted(e) && (8 !== e || this.isStepCompleted(3))) {
      if (7 === e && !this.isFishFed) return q[6] ?? null;
      if (!(9 === e && this.unlockedLocks.size < 8)) return q[e - 1] ?? null;
    }
    return null;
  }
  resolveReferences() {
    var e;
    (this.gameNode = this.gameNode ?? this.node.getChildByPath("UIPanel/gameNode"), this.bubbleNode = this.bubbleNode ?? this.node.getChildByPath("UIPanel/bubble"), this.backBgNode = this.backBgNode ?? this.node.getChildByPath("UIPanel/backBG"), this.tipLabel) || (this.tipLabel = (null == (e = this.bubbleNode) || null == (e = e.getChildByPath("dialog_box/Label")) ? void 0 : e.getComponent(__rea_outer_a)) ?? null);
    this.gameNode || console.warn("[Level_30] 缺少 gameNode 节点");
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
  setInputBlocked(e) {
    const t = this.backBgNode;
    if (null == t || !t.isValid) return;
    t.active = e, e && __rea_outer_S(t, 0);
    const i = t.getComponent(__rea_outer_g);
    i && (i.enabled = e);
  }
  setNodeActive(e, t) {
    null != e && e.isValid && (e.active = t);
  }
  setNodeOpacitySafe(e, t) {
    null != e && e.isValid && __rea_outer_S(e, t);
  }
  safeStopNodeTweens(e) {
    null != e && e.isValid && __rea_outer__(e);
  }
  getNodeRenderOrder(e) {
    let t = 0,
      i = 1,
      s = e;
    for (; s;) t += s.getSiblingIndex() * i, i *= 128, s = s.parent;
    return t;
  }
  isPointInsideNode(e, t) {
    const i = null == e ? void 0 : e.getComponent(__rea_outer_l);
    return !!i && i.getBoundingBoxToWorld().contains(t);
  }
  isDropOverlapping(e, t, i) {
    return __rea_outer_N.isDragNearTarget(e, t);
  }
  getTouchWorldPoint(e) {
    const t = e.getUILocation();
    return new __rea_outer_p(t.x, t.y);
  }
  getTouchLocalPosition(e, t) {
    const i = e.getUILocation(),
      s = t.getComponent(__rea_outer_l);
    return s ? s.convertToNodeSpaceAR(new __rea_outer_h(i.x, i.y, 0)) : __rea_outer_h.ZERO.clone();
  }
  calculateTouchOffset(e, t, i) {
    const s = this.getTouchLocalPosition(e, i);
    return new __rea_outer_h(t.position.x - s.x, t.position.y - s.y, 0);
  }
  setDragNodePositionFromTouch(e, t, i, s, o = 0, a = 0) {
    const n = this.getTouchLocalPosition(e, i);
    t.setPosition(n.x + s.x + o, n.y + s.y + a, t.position.z);
  }
}).prototype, "gameNode", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), O = __rea_outer_t(L.prototype, "bubbleNode", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), B = __rea_outer_t(L.prototype, "tipLabel", [T], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), F = __rea_outer_t(L.prototype, "backBgNode", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), I = L)) || I);
__rea_outer_s._RF.pop();
export { __recovered_export_0 as default };
