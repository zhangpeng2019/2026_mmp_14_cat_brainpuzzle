// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_9.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { applyDecoratedDescriptor as __rea_outer_t } from "./rollupPluginModLoBabelHelpers";
import { initializerDefineProperty as __rea_outer_i } from "./rollupPluginModLoBabelHelpers";
import { cclegacy as __rea_outer_s } from "cc";
import { Node as __rea_outer_o } from "cc";
import { Button as __rea_outer_n } from "cc";
import { Label as __rea_outer_h } from "cc";
import { _decorator as __rea_outer_l } from "cc";
import { Tween as __rea_outer_a } from "cc";
import { tween as __rea_outer_c } from "cc";
import { Vec3 as __rea_outer_d } from "cc";
import { BlockInputEvents as __rea_outer_r } from "cc";
import { UITransform as __rea_outer_p } from "cc";
import { Vec2 as __rea_outer_g } from "cc";
import { default as __rea_outer_u } from "./LevelBase";
import { default as __rea_outer_N } from "./clue-hit-tester";
import { default as __rea_outer_m } from "./AudioManager";
import { I18nController as __rea_outer_S } from "./i18n-controller";
import { UIManager as __rea_outer_v } from "./ui-manager";
import { UILayer as __rea_outer_f } from "./ui-layer";
import { UIHint as __rea_outer_A } from "./uihint";
import { UIFail as __rea_outer_y } from "./uifail";
import { GameController as __rea_outer_b } from "./GameController";
import { stopAllTweens as __rea_outer_C } from "./CocosCompat";
import { setNodeOpacity as __rea_outer__ } from "./CocosCompat";
let __recovered_export_0;
var B, T, P, k, I, D, w, V, O, x, L, E, H, F, z, W, K, R, M, J, U;
__rea_outer_s._RF.push({}, "a8c3fHim01KfI5vHSs8TV5v", "Level_9", void 0);
const {
    ccclass: Z,
    property: G
  } = __rea_outer_l,
  Q = .9,
  q = .28,
  j = .08,
  $ = 403,
  X = 404,
  Y = 410,
  ee = ["level9_hint1", "level9_hint2", "level9_hint3", "level9_hint4", "level9_hint5", "level9_hint6", "level9_hint7", "level9_hint8"];
__recovered_export_0 = (B = Z("Level_9"), T = G(__rea_outer_o), P = G(__rea_outer_o), k = G(__rea_outer_o), I = G(__rea_outer_o), D = G(__rea_outer_n), w = G(__rea_outer_n), V = G(__rea_outer_o), O = G(__rea_outer_o), x = G(__rea_outer_h), B((H = __rea_outer_t((E = class extends __rea_outer_u {
  constructor(...e) {
    super(...e), __rea_outer_i(this, "gameNode", H, this), __rea_outer_i(this, "scene1Node", F, this), __rea_outer_i(this, "scene2Node", z, this), __rea_outer_i(this, "clickRootNode", W, this), __rea_outer_i(this, "fleeButton", K, this), __rea_outer_i(this, "waitButton", R, this), __rea_outer_i(this, "backBgNode", M, this), __rea_outer_i(this, "bubbleNode", J, this), __rea_outer_i(this, "tipLabel", U, this), this.phase = 0, this.winstate = !1, this.completedSteps = new Set(), this.isScene2 = !1, this.isDoorClosed = !1, this.isTableSmashed = !1, this.isTableBlockingDoor = !1, this.isAlarmOpen = !1, this.isInteractionLocked = !1, this.isDecisionButtonConsumed = !1, this.activeDragState = null, this.swipeTrackState = null, this.npcOriginPositions = new Map(), this.npcOriginScales = new Map(), this.scene2NpcOriginPositions = new Map(), this.food1OriginPosition = null, this.scene2WindowOrigin = null, this.isFightAnimating = !1, this.onFleeButtonClick = () => {
      1 !== this.phase || this.isInteractionLocked || this.isDecisionButtonConsumed || (this.consumeDecisionButtons(), this.isTableBlockingDoor ? this.handleFleeAfterTableBlocked() : this.shouldButtonTriggerFail() && this.playScene1FailAnimation());
    }, this.onWaitButtonClick = () => {
      1 !== this.phase || this.isInteractionLocked || this.isDecisionButtonConsumed || (this.consumeDecisionButtons(), this.playScene1WaitFailAnimation());
    }, this.onTouchStart = e => {
      if (1 !== this.phase || this.isInteractionLocked) return;
      const t = this.getTouchWorldPoint(e);
      if (this.isAlarmOpen) {
        const i = this.getScene2Node("mobile_phone_1");
        return void (null != i && i.active && this.isPointInsideNode(i, t) && (this.swipeTrackState = {
          startLocation: t.clone()
        }, e.propagationStopped = !0));
      }
      if (!this.isScene2 && this.isStepCompleted(1) && !this.isStepCompleted(2) && !this.isDoorClosed) {
        const i = this.getScene1Node("door");
        if (null != i && i.active && this.isPointInsideNode(i, t)) return this.handleCloseDoor(), void (e.propagationStopped = !0);
      }
      if (this.isScene2 && this.isStepCompleted(7) && !this.isStepCompleted(8) && !this.isAlarmOpen) {
        const i = this.getScene2Node("mobile_phone");
        if (null != i && i.active && this.isPointInsideNode(i, t)) return this.handleOpenAlarm(), void (e.propagationStopped = !0);
      }
      const i = this.hitTestDraggable(t);
      i && (this.beginDrag(i, e), e.propagationStopped = !0);
    }, this.onTouchMove = e => {
      if (this.activeDragState && 1 === this.phase && !this.isInteractionLocked) {
        const t = this.activeDragState;
        return this.setDragNodePositionFromTouch(e, t.dragNode, t.dragParent, t.touchOffset), void (e.propagationStopped = !0);
      }
      this.swipeTrackState && this.isAlarmOpen && (e.propagationStopped = !0);
    }, this.onTouchEnd = e => {
      if (this.swipeTrackState && this.isAlarmOpen) {
        const t = this.swipeTrackState.startLocation;
        this.swipeTrackState = null;
        const i = this.getTouchWorldPoint(e),
          s = i.x - t.x,
          o = i.y - t.y;
        return s >= 10 && Math.abs(s) > 1.2 * Math.abs(o) && this.handleDismissAlarm(), void (e.propagationStopped = !0);
      }
      if (!this.activeDragState || 1 !== this.phase || this.isInteractionLocked) return void this.resetActiveDrag();
      const t = this.activeDragState;
      this.activeDragState = null;
      const i = this.getTouchWorldPoint(e);
      this.handleDragDrop(t, i), e.propagationStopped = !0;
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.allItemNum = 8, this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.enterPhase0();
  }
  onDestroy() {
    var e;
    this.unscheduleAllCallbacks(), null != (e = this.node) && e.isValid && (this.unregisterInteractionHandlers(), this.unregisterButtonHandlers()), __rea_outer_a.stopAllByTag(400), __rea_outer_a.stopAllByTag(401), __rea_outer_a.stopAllByTag(402), __rea_outer_a.stopAllByTag(407), __rea_outer_a.stopAllByTag($), __rea_outer_a.stopAllByTag(X), __rea_outer_a.stopAllByTag(405), __rea_outer_a.stopAllByTag(406), __rea_outer_a.stopAllByTag(408), __rea_outer_a.stopAllByTag(409), __rea_outer_a.stopAllByTag(Y), this.activeDragState = null, this.swipeTrackState = null;
  }
  showHint() {
    if (1 !== this.phase) return;
    const e = this.resolveHintKey();
    if (!e) return;
    const t = __rea_outer_S.getInstance().getKey(e);
    __rea_outer_v.getInstance().showView(__rea_outer_A, void 0, {
      body: t
    });
  }
  getGameProgressSnapshot() {
    const e = this.completedSteps.size;
    return {
      progress: e / 8,
      label: `${e}/8`
    };
  }
  markAllTasksCompleted() {
    for (let e = 1; e <= 8; e += 1) this.completedSteps.add(e);
    this.hasInstallNum = 8;
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.isScene2 = !1, this.isDoorClosed = !1, this.isTableSmashed = !1, this.isTableBlockingDoor = !1, this.isAlarmOpen = !1, this.isInteractionLocked = !1, this.isDecisionButtonConsumed = !1, this.setDecisionButtonsEnabled(!0, !0), this.activeDragState = null, this.swipeTrackState = null, this.npcOriginPositions.clear(), this.npcOriginScales.clear(), this.scene2NpcOriginPositions.clear(), this.food1OriginPosition = null, this.scene2WindowOrigin = null, this.completedSteps.clear(), this.hasInstallNum = 0;
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_m.playMusic("bgm3", !0, .5), __rea_outer_m.playEffect_1("level9_1"), this.applyInitialVisibility(), this.cacheNpcOriginPositions(), this.startZombieJumpAnimations(), this.scheduleOnce(() => {
      this.isValid && 0 === this.phase && (this.playIntroLine(), this.scheduleOnce(() => {
        this.isValid && 0 === this.phase && (this.hideBubble(), this.enterPhase1());
      }, 2.5));
    }, .25);
  }
  skipOpeningToPlay() {
    return 0 === this.phase && (this.stopOpeningDialogue(), this.hideBubble(), this.enterPhase1(), !0);
  }
  enterPhase1() {
    0 === this.phase && (this.phase = 1, this.registerInteractionHandlers(), this.registerButtonHandlers(), __rea_outer_b.getInstance().refreshGameProgress());
  }
  enterPhase2Success() {
    this.phase >= 2 || (this.phase = 2, this.winstate = !0, this.unregisterInteractionHandlers(), this.unregisterButtonHandlers(), this.stopAmbientAnimations(), this.hasInstallNum = 8, __rea_outer_b.getInstance().pauseTimer(), this.setNodeActive(this.getScene2Node("ip"), !1), this.setNodeActive(this.getScene2Node("ip_2"), !1), this.setNodeActive(this.getScene2Node("IP_1"), !0), this.scheduleOnce(() => {
      this.isValid && this.showLevelSuccess(.5);
    }, 2));
  }
  beginFailSequence() {
    this.phase >= 2 || (this.phase = 2, this.winstate = !1, this.unregisterInteractionHandlers(), this.unregisterButtonHandlers(), this.stopAmbientAnimations(), __rea_outer_m.stopEffect(__rea_outer_m.effectID), __rea_outer_b.getInstance().pauseTimer(), this.scheduleOnce(() => {
      this.isValid && __rea_outer_v.getInstance().showView(__rea_outer_y, __rea_outer_f.WIN_ANIMATION);
    }, 0));
  }
  applyInitialVisibility() {
    this.setNodeActive(this.scene1Node, !0), this.setNodeActive(this.scene2Node, !1), this.setNodeActive(this.clickRootNode, !1), this.setNodeActive(this.backBgNode, !1), this.setNodeActive(this.bubbleNode, !1);
    const e = this.scene1Node;
    e && (this.setNodeActive(e.getChildByName("table"), !0), this.setNodeActive(e.getChildByName("table_1"), !1), this.setNodeActive(e.getChildByName("table_2"), !1), this.setNodeActive(e.getChildByName("door"), !0), this.setNodeActive(e.getChildByName("door_1"), !1), this.setNodeActive(e.getChildByName("door_2"), !1), this.setNodeActive(e.getChildByName("audio"), !0), this.setNodeActive(e.getChildByName("hammer"), !0), this.setNodeActive(e.getChildByName("hammer_1"), !1), this.setNodeActive(e.getChildByName("IP_1"), !1), this.setNodeActive(e.getChildByName("IP_2"), !1), this.setNodeActive(e.getChildByName("ip"), !0), this.setNodeActive(e.getChildByName("paw_print"), !1), this.setNodeActive(e.getChildByName("backBG"), !1), this.setNodeActive(e.getChildByName("fight"), !1), this.setNodeActive(e.getChildByName("fight_1"), !1), this.setNodeActive(e.getChildByName("fight_2"), !1), this.setNodeActive(e.getChildByName("fight_3"), !1), ["npc_1", "npc_2", "npc_3"].forEach(t => {
      this.setNodeActive(e.getChildByName(t), !0);
    }));
    const t = this.scene2Node;
    t && (this.setNodeActive(t.getChildByName("ip"), !0), this.setNodeActive(t.getChildByName("ip_2"), !1), this.setNodeActive(t.getChildByName("food_1"), !0), this.setNodeActive(t.getChildByName("food_2"), !1), this.setNodeActive(t.getChildByName("door"), !0), this.setNodeActive(t.getChildByName("door_1"), !1), this.setNodeActive(t.getChildByName("hammer"), !0), this.setNodeActive(t.getChildByName("hammer_1"), !1), this.setNodeActive(t.getChildByName("newspaper"), !0), this.setNodeActive(t.getChildByName("mobile_phone"), !0), this.setNodeActive(t.getChildByName("mobile_phone_1"), !1), this.setNodeActive(t.getChildByName("IP_1"), !1), this.setNodeActive(t.getChildByName("npc"), !0), this.setNodeActive(t.getChildByName("npc_1"), !0), this.setNodeActive(t.getChildByName("npc_2"), !0));
  }
  cacheNpcOriginPositions() {
    const e = this.scene1Node;
    e && ["npc_1", "npc_2", "npc_3"].forEach(t => {
      const i = e.getChildByName(t);
      null != i && i.isValid && (this.npcOriginPositions.set(i, i.position.clone()), this.npcOriginScales.set(i, i.scale.clone()));
    });
  }
  playIntroLine() {
    const e = __rea_outer_S.getInstance();
    this.tipLabel && (this.tipLabel.string = e.getKey("9_1"), this.setNodeActive(this.tipLabel.node, !0)), this.setNodeActive(this.bubbleNode, !0), __rea_outer_m.playEffect_1("9_1");
  }
  hideBubble() {
    var e;
    this.setNodeActive(this.bubbleNode, !1), this.setNodeActive((null == (e = this.tipLabel) ? void 0 : e.node) ?? null, !1);
  }
  registerInteractionHandlers() {
    this.node.on(__rea_outer_o.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(__rea_outer_o.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(__rea_outer_o.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(__rea_outer_o.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
  }
  unregisterInteractionHandlers() {
    this.node.off(__rea_outer_o.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(__rea_outer_o.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(__rea_outer_o.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(__rea_outer_o.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
  }
  registerButtonHandlers() {
    var e, t;
    null == (e = this.fleeButton) || null == (e = e.node) || e.on(__rea_outer_n.EventType.CLICK, this.onFleeButtonClick, this), null == (t = this.waitButton) || null == (t = t.node) || t.on(__rea_outer_n.EventType.CLICK, this.onWaitButtonClick, this);
  }
  unregisterButtonHandlers() {
    var e, t;
    null == (e = this.fleeButton) || null == (e = e.node) || e.off(__rea_outer_n.EventType.CLICK, this.onFleeButtonClick, this), null == (t = this.waitButton) || null == (t = t.node) || t.off(__rea_outer_n.EventType.CLICK, this.onWaitButtonClick, this);
  }
  consumeDecisionButtons() {
    this.isDecisionButtonConsumed = !0, this.setDecisionButtonsEnabled(!1, !1), this.unregisterButtonHandlers();
  }
  shouldButtonTriggerFail() {
    return !this.isScene2 && this.isStepCompleted(1) && !this.isTableBlockingDoor;
  }
  handleCloseDoor() {
    !this.isStepCompleted(1) || this.isStepCompleted(2) || this.isDoorClosed || (__rea_outer_m.playEffect_1("level9_3"), this.setNodeActive(this.getScene1Node("door"), !1), this.setNodeActive(this.getScene1Node("door_1"), !0), this.isDoorClosed = !0);
  }
  handleDragDrop(e, t) {
    this.isScene2 ? this.handleScene2DragDrop(e, t) : this.handleScene1DragDrop(e, t);
  }
  handleScene1DragDrop(e, t) {
    const i = e.dragNode;
    if (!this.isStepCompleted(1)) {
      const e = this.getScene1Node("outdoortouch");
      if ("audio" === i.name && __rea_outer_N.isDragNearTarget(i, e)) return this.finalizeAudioAtOutdoor(i), void this.completeStep1();
    }
    if (this.isStepCompleted(1) && !this.isStepCompleted(2) && this.isDoorClosed && "hammer" === e.proxyKind) {
      const t = this.getScene1Node("table");
      return __rea_outer_N.isDragNearTarget(i, t) ? (this.finalizeHammerDragSuccess(e), void this.completeStep2Hammer()) : void this.flyProxyBackToSource(e);
    }
    if (this.isStepCompleted(2) && !this.isStepCompleted(3) && "table" === e.proxyKind) {
      const t = this.getScene1Node("door_2");
      if (__rea_outer_N.isDragNearTarget(i, t)) return this.finalizeTableDragSuccess(e), void this.completeStep3OnDoor();
      const s = this.getScene1Node("outdoortouch");
      return __rea_outer_N.isDragNearTarget(e.dragNode, s) ? void this.resetTableProxyInstant(e) : void this.flyProxyBackToSource(e);
    }
    this.restoreDragNode(e);
  }
  handleScene2DragDrop(e, t) {
    if (!this.isStepCompleted(4) && "hammer_scene2" === e.proxyKind) {
      const t = this.getScene2Node("npc_2");
      return __rea_outer_N.isDragNearTarget(e.dragNode, t) ? (this.finalizeHammerScene2DragSuccess(e), void this.completeStep4()) : void this.flyProxyBackToSource(e);
    }
    if (!this.isStepCompleted(5) && "food_1" === e.sourceNode.name && "none" === e.proxyKind) {
      const t = this.getScene2Node("ip");
      return __rea_outer_N.isDragNearTarget(e.dragNode, t) ? void this.completeStep5(e) : void this.restoreFood1Drag(e);
    }
    if (this.isStepCompleted(5) && !this.isStepCompleted(6) && "food_scene2" === e.proxyKind) {
      const t = this.getScene2Node("npc_1");
      return __rea_outer_N.isDragNearTarget(e.dragNode, t) ? (this.finalizeFoodScene2DragSuccess(e), void this.completeStep6()) : void this.flyProxyBackToSource(e);
    }
    if (!this.isStepCompleted(7) && "newspaper" === e.proxyKind) {
      const t = this.getScene2Node("door");
      return __rea_outer_N.isDragNearTarget(e.dragNode, t) ? (this.finalizeNewspaperDragSuccess(e), void this.completeStep7()) : void this.flyProxyBackToSource(e);
    }
    this.restoreDragNode(e);
  }
  completeStep1() {
    this.TryQuickWin() || (__rea_outer_m.playEffect_1("level9_2"), this.isInteractionLocked = !0, this.moveScene1ZombiesToDoor(() => {
      this.isValid && (this.setNodeActive(this.getScene1Node("door"), !0), this.setNodeActive(this.getScene1Node("door_1"), !1), this.setNodeActive(this.getScene1Node("door_2"), !1), this.placeAudioAfterDoor(), this.setNodeActive(this.clickRootNode, !0), this.setDecisionButtonsEnabled(!0, !0), this.isInteractionLocked = !1, this.markStepCompleted(1));
    }));
  }
  completeStep2Hammer() {
    this.TryQuickWin() || (__rea_outer_m.playEffect_1("level9_4"), this.setNodeActive(this.getScene1Node("table"), !1), this.setNodeActive(this.getScene1Node("table_1"), !0), this.setNodeActive(this.getScene1Node("door_1"), !1), this.setNodeActive(this.getScene1Node("door_2"), !0), this.setNodeActive(this.getScene1Node("hammer_1"), !1), this.setNodeActive(this.getScene1Node("hammer"), !1), this.isTableSmashed = !0, this.markStepCompleted(2));
  }
  completeStep3OnDoor() {
    this.TryQuickWin() || (this.isTableBlockingDoor = !0, this.setDecisionButtonsEnabled(!0, !0), this.markStepCompleted(3));
  }
  handleFleeAfterTableBlocked() {
    if (this.TryQuickWin()) return;
    this.isInteractionLocked = !0, this.unregisterButtonHandlers(), this.setDecisionButtonsEnabled(!1, !1), this.setNodeActive(this.clickRootNode, !1);
    const e = this.getScene1Node("ip"),
      t = () => {
        this.isValid && (this.applyFleeLandingVisual(), this.scheduleOnce(() => {
          this.isValid && this.transitionToScene2(0);
        }, 1.5));
      };
    if (null != e && e.isValid) {
      const i = e.position.y;
      __rea_outer_c(e).tag(405).to(.3, {
        position: new __rea_outer_d(e.position.x, i - 200, 0)
      }).call(() => {
        this.isValid && t();
      }).start();
    } else t();
  }
  applyFleeLandingVisual() {
    const e = this.getScene1Node("ip"),
      t = this.getScene1Node("IP_1"),
      i = this.getScene1Node("IP_2");
    if (this.setNodeActive(e, !1), this.setNodeActive(i, !1), null != t && t.isValid && null != i && i.isValid) {
      const e = t.position.clone();
      e.x = i.position.x, t.setPosition(e);
    }
    this.setNodeActive(t, !0);
  }
  completeStep4() {
    if (this.TryQuickWin()) return;
    __rea_outer_m.playEffect_1("level9_5"), this.setNodeActive(this.getScene2Node("hammer_1"), !1);
    const e = this.getScene2Node("npc_2");
    if (null != e && e.isValid) {
      const t = e.position.x + 600;
      __rea_outer_c(e).tag(X).to(.3, {
        position: new __rea_outer_d(t, e.position.y, 0)
      }).call(() => {
        this.setNodeActive(e, !1);
      }).start();
    }
    this.markStepCompleted(4);
  }
  completeStep5(e) {
    if (this.TryQuickWin()) return;
    const t = e.sourceNode,
      i = t.getChildByName("food");
    this.setNodeActive(i, !1), __rea_outer_m.playEffect_1("level9_6"), this.isInteractionLocked = !0, this.scheduleOnce(() => {
      if (this.isValid) {
        if (this.setNodeActive(this.getScene2Node("ip"), !1), this.setNodeActive(this.getScene2Node("ip_2"), !0), t.isValid) {
          const i = this.food1OriginPosition ?? e.originPosition;
          t.setPosition(i), this.setNodeActive(t, !0);
        }
        this.isInteractionLocked = !1, this.markStepCompleted(5);
      }
    }, 1);
  }
  completeStep6() {
    if (this.TryQuickWin()) return;
    this.setNodeActive(this.getScene2Node("food_1"), !1);
    const e = this.getScene2Node("food_2");
    null != e && e.isValid && (__rea_outer_C(e), e.setPosition(112, -385, 0), this.setNodeActive(e, !0)), this.stopScene2NpcJumpAnimation("npc_1"), this.markStepCompleted(6);
  }
  completeStep7() {
    this.TryQuickWin() || (this.stopDoorShake(), this.setNodeActive(this.getScene2Node("newspaper"), !1), this.setNodeActive(this.getScene2Node("door"), !1), this.setNodeActive(this.getScene2Node("door_1"), !0), this.stopScene2NpcJumpAnimation("npc"), this.markStepCompleted(7), this.startPhoneShake());
  }
  handleOpenAlarm() {
    !this.isStepCompleted(7) || this.isStepCompleted(8) || this.isAlarmOpen || (this.isAlarmOpen = !0, this.setNodeActive(this.getScene2Node("mobile_phone_1"), !0), this.stopPhoneShake(), this.startAlarmPanelShake(), __rea_outer_m.playEffect_1("level9_7", void 0, !0));
  }
  handleDismissAlarm() {
    this.isStepCompleted(7) && !this.isStepCompleted(8) && this.isAlarmOpen && (this.isAlarmOpen = !1, this.setNodeActive(this.getScene2Node("mobile_phone_1"), !1), this.stopPhoneShake(), __rea_outer_m.stopEffect(__rea_outer_m.effectID), this.markStepCompleted(8));
  }
  playScene1WaitFailAnimation() {
    if (this.phase >= 2 || this.isFightAnimating || this.isInteractionLocked) return;
    this.isInteractionLocked = !0, this.unregisterInteractionHandlers(), this.unregisterButtonHandlers(), this.setDecisionButtonsEnabled(!1, !1);
    const e = this.getScene1Node("ip"),
      t = () => {
        this.isValid && this.scheduleOnce(() => {
          this.isValid && this.playScene1FailAnimation();
        }, 1);
      };
    null != e && e.isValid ? this.playIpHorizontalShake(e, .5, t) : t();
  }
  playIpHorizontalShake(e, t, i) {
    __rea_outer_a.stopAllByTag(Y);
    const s = e.position.clone(),
      o = Math.max(1, Math.round(t / .24));
    let n = __rea_outer_c(e).tag(Y);
    for (let e = 0; e < o; e += 1) n = n.to(j, {
      position: new __rea_outer_d(s.x + 6, s.y, 0)
    }).to(j, {
      position: new __rea_outer_d(s.x - 6, s.y, 0)
    }).to(j, {
      position: s
    });
    n.call(() => {
      this.isValid && e.isValid && (e.setPosition(s), i());
    }).start();
  }
  playScene1FailAnimation() {
    if (this.phase >= 2 || this.isFightAnimating) return;
    this.isInteractionLocked = !0, this.isFightAnimating = !0, this.unregisterInteractionHandlers(), this.unregisterButtonHandlers(), this.stopZombieJumpAnimations(!1), __rea_outer_a.stopAllByTag(Y);
    const e = this.getScene1Node("ip"),
      t = () => {
        this.isValid && (this.setNodeActive(this.getScene1Node("door_1"), !1), this.setNodeActive(this.getScene1Node("door_2"), !1), this.setNodeActive(this.getScene1Node("door"), !0), this.restoreScene1ZombiesToOrigin(() => {
          this.isValid && (this.startZombieJumpAnimations(), this.playFightAnimation(() => {
            this.isValid && this.beginFailSequence();
          }));
        }));
      };
    if (null != e && e.isValid) {
      const i = e.position.y;
      __rea_outer_c(e).tag(405).to(.3, {
        position: new __rea_outer_d(e.position.x, i - 200, 0)
      }).call(() => {
        this.isValid && (this.applyIpFailLandingVisual(), t());
      }).start();
    } else this.applyIpFailLandingVisual(), t();
  }
  setDecisionButtonsEnabled(e, t) {
    this.fleeButton && (this.fleeButton.interactable = e), this.waitButton && (this.waitButton.interactable = t);
  }
  applyIpFailLandingVisual() {
    const e = this.getScene1Node("table"),
      t = this.getScene1Node("ip"),
      i = this.getScene1Node("IP_1"),
      s = this.getScene1Node("IP_2");
    if (this.setNodeActive(t, !1), null != e && e.active) return this.setNodeActive(i, !1), void this.setNodeActive(s, !0);
    if (null != i && i.isValid && null != s && s.isValid) {
      const e = i.position.clone();
      e.x = s.position.x, i.setPosition(e);
    }
    this.setNodeActive(s, !1), this.setNodeActive(i, !0);
  }
  restoreScene1ZombiesToOrigin(e) {
    const t = this.scene1Node;
    if (!t) return void e();
    const i = ["npc_1", "npc_2", "npc_3"].map(e => t.getChildByName(e)).filter(e => !0 === (null == e ? void 0 : e.isValid));
    if (0 === i.length) return void e();
    let s = 0;
    const o = () => {
      s += 1, s >= i.length && e();
    };
    i.forEach(e => {
      this.setNodeActive(e, !0);
      const t = this.npcOriginPositions.get(e) ?? e.position.clone(),
        i = this.npcOriginScales.get(e) ?? new __rea_outer_d(1, 1, 1);
      __rea_outer_c(e).tag(X).to(.5, {
        position: t,
        scale: i
      }).call(o).start();
    });
  }
  playFightAnimation(e) {
    __rea_outer_m.playEffect_1("level9_8");
    const t = this.getScene1Node("fight"),
      i = [this.getScene1Node("fight_1"), this.getScene1Node("fight_2"), this.getScene1Node("fight_3")].filter(e => !0 === (null == e ? void 0 : e.isValid)),
      s = () => {
        __rea_outer_a.stopAllByTag($), null != t && t.isValid && (__rea_outer_C(t), t.setScale(1, 1, 1), this.setNodeActive(t, !1)), i.forEach(e => {
          __rea_outer_C(e), e.setScale(1, 1, 1), this.setNodeActive(e, !1);
        });
      };
    null != t && t.isValid && (t.setScale(Q, Q, 1), this.setNodeActive(t, !0), __rea_outer_c(t).tag($).to(.15, {
      scale: new __rea_outer_d(1.2, 1.2, 1)
    }).to(.15, {
      scale: new __rea_outer_d(Q, Q, 1)
    }).union().repeatForever().start());
    const o = () => {
      if (i.forEach(e => {
        __rea_outer_C(e), e.setScale(1, 1, 1), this.setNodeActive(e, !1);
      }), Math.random() < .2) return;
      if (0 === i.length) return;
      const e = Math.floor(Math.random() * i.length),
        t = i[e],
        s = .85 + .25 * Math.random();
      this.setNodeActive(t, !0), t.setScale(s, s, 1), __rea_outer_c(t).tag($).to(.1, {
        scale: new __rea_outer_d(1.15 * s, 1.15 * s, 1)
      }).to(.1, {
        scale: new __rea_outer_d(.88 * s, .88 * s, 1)
      }).start();
    };
    o(), this.schedule(o, .12), this.scheduleOnce(() => {
      this.isValid && (this.unschedule(o), s(), e());
    }, 1.5);
  }
  transitionToScene2(e = 1) {
    this.stopZombieJumpAnimations(!1), this.hideScene1Zombies(), this.setNodeActive(this.clickRootNode, !1), this.scheduleOnce(() => {
      this.isValid && (this.setInputBlocked(!0), this.setNodeActive(this.scene1Node, !1), this.setNodeActive(this.scene2Node, !0), this.scheduleOnce(() => {
        this.isValid && (this.setInputBlocked(!1), this.isScene2 = !0, this.cacheScene2NpcOrigins(), this.cacheFood1Origin(), this.startScene2Intro(), __rea_outer_b.getInstance().refreshGameProgress());
      }, .5));
    }, e);
  }
  cacheScene2NpcOrigins() {
    const e = this.scene2Node;
    e && (this.scene2NpcOriginPositions.clear(), ["npc", "npc_1", "npc_2"].forEach(t => {
      const i = e.getChildByName(t);
      null != i && i.isValid && this.scene2NpcOriginPositions.set(i, i.position.clone());
    }));
  }
  cacheFood1Origin() {
    const e = this.getScene2Node("food_1");
    this.food1OriginPosition = null != e && e.isValid ? e.position.clone() : null;
  }
  startScene2Intro() {
    var e, t;
    this.isInteractionLocked = !0, this.setNodeActive(this.backBgNode, !0), null != (e = this.backBgNode) && e.isValid && __rea_outer__(this.backBgNode, 0);
    const i = null == (t = this.backBgNode) ? void 0 : t.getComponent(__rea_outer_r);
    i && (i.enabled = !0), __rea_outer_m.playEffect_1("9_2");
    const s = __rea_outer_S.getInstance();
    this.tipLabel && (this.tipLabel.string = s.getKey("9_2"), this.setNodeActive(this.tipLabel.node, !0)), this.setNodeActive(this.bubbleNode, !0), this.startWindowShake(), this.startScene2NpcJumpAnimations(), this.scheduleOnce(() => {
      this.isValid && (this.hideBubble(), this.setNodeActive(this.backBgNode, !1), i && (i.enabled = !1), this.isInteractionLocked = !1);
    }, 2);
  }
  startWindowShake() {
    const e = this.getScene2Node("window");
    if (null == e || !e.isValid) return;
    const t = e.position.clone();
    this.scene2WindowOrigin = t.clone();
    const i = () => {
      e.isValid && this.isScene2 && 1 === this.phase && __rea_outer_c(e).tag(408).to(j, {
        position: new __rea_outer_d(t.x - 4, t.y, 0)
      }).to(j, {
        position: new __rea_outer_d(t.x + 4, t.y, 0)
      }).to(j, {
        position: t
      }).call(i).start();
    };
    i();
  }
  stopWindowShake() {
    __rea_outer_a.stopAllByTag(408);
    const e = this.getScene2Node("window");
    null != e && e.isValid && (__rea_outer_C(e), this.scene2WindowOrigin && e.setPosition(this.scene2WindowOrigin));
  }
  startScene2NpcJumpAnimations() {
    const e = this.scene2Node;
    e && ["npc", "npc_1", "npc_2"].forEach((t, i) => {
      const s = e.getChildByName(t);
      if (null == s || !s.isValid) return;
      const o = this.scene2NpcOriginPositions.get(s) ?? s.position.clone(),
        n = .12 * i,
        h = new __rea_outer_d(o.x, o.y + 20, o.z),
        l = () => {
          s.isValid && this.isScene2 && this.shouldScene2NpcKeepJumping(t) && __rea_outer_c(s).tag(409).to(q, {
            position: h
          }).to(q, {
            position: o
          }).call(l).start();
        };
      this.scheduleOnce(() => {
        this.isValid && l();
      }, n);
    });
  }
  shouldScene2NpcKeepJumping(e) {
    return ("npc_1" !== e || !this.isStepCompleted(6)) && ("npc" !== e || !this.isStepCompleted(7));
  }
  stopScene2NpcJumpAnimation(e, t = !0) {
    const i = this.getScene2Node(e);
    if (null == i || !i.isValid) return;
    if (__rea_outer_C(i), !t) return;
    const s = this.scene2NpcOriginPositions.get(i);
    s && i.setPosition(s);
  }
  stopScene2NpcJumpAnimations(e = !1) {
    __rea_outer_a.stopAllByTag(409);
    this.scene2Node && ["npc", "npc_1", "npc_2"].forEach(t => {
      this.stopScene2NpcJumpAnimation(t, e);
    });
  }
  moveScene1ZombiesToDoor(e) {
    this.stopZombieJumpAnimations(!1);
    const t = this.getScene1Node("door_1"),
      i = this.scene1Node;
    if (!i || !t) return void e();
    const s = t.position.clone(),
      o = ["npc_1", "npc_2", "npc_3"].map(e => i.getChildByName(e)).filter(e => !0 === (null == e ? void 0 : e.isValid));
    if (0 === o.length) return void e();
    let n = 0;
    const h = () => {
      n += 1, n >= o.length && e();
    };
    o.forEach((e, t) => {
      const i = 30 * (t - 1);
      __rea_outer_c(e).tag(X).to(.5, {
        position: new __rea_outer_d(s.x + i, s.y, s.z),
        scale: new __rea_outer_d(.7, .7, 1)
      }).call(h).start();
    });
  }
  startZombieJumpAnimations() {
    const e = this.scene1Node;
    if (!e || this.isStepCompleted(1)) return;
    ["npc_1", "npc_2", "npc_3"].map(t => e.getChildByName(t)).filter(e => !0 === (null == e ? void 0 : e.isValid)).forEach((e, t) => {
      const i = this.npcOriginPositions.get(e) ?? e.position.clone(),
        s = .12 * t,
        o = new __rea_outer_d(i.x, i.y + 10, i.z),
        n = () => {
          e.isValid && !this.isStepCompleted(1) && __rea_outer_c(e).tag(400).to(q, {
            position: o
          }).to(q, {
            position: i
          }).call(n).start();
        };
      this.scheduleOnce(() => {
        this.isValid && n();
      }, s);
    });
  }
  stopZombieJumpAnimations(e = !0) {
    __rea_outer_a.stopAllByTag(400);
    const t = this.scene1Node;
    t && ["npc_1", "npc_2", "npc_3"].forEach(i => {
      const s = t.getChildByName(i);
      if (null == s || !s.isValid) return;
      if (__rea_outer_C(s), !e) return;
      const o = this.npcOriginPositions.get(s);
      o && s.setPosition(o);
      const n = this.npcOriginScales.get(s);
      n && s.setScale(n);
    });
  }
  hideScene1Zombies() {
    const e = this.scene1Node;
    e && ["npc_1", "npc_2", "npc_3"].forEach(t => {
      this.setNodeActive(e.getChildByName(t), !1);
    });
  }
  startDoorShake() {
    const e = this.getScene2Node("door");
    if (null == e || !e.isValid) return;
    const t = e.position.clone(),
      i = () => {
        e.isValid && !this.isStepCompleted(7) && __rea_outer_c(e).tag(401).to(j, {
          position: new __rea_outer_d(t.x + 6, t.y, 0)
        }).to(j, {
          position: new __rea_outer_d(t.x - 6, t.y, 0)
        }).to(j, {
          position: t
        }).call(i).start();
      };
    i();
  }
  stopDoorShake() {
    __rea_outer_a.stopAllByTag(401);
    const e = this.getScene2Node("door");
    null != e && e.isValid && __rea_outer_C(e);
  }
  startPhoneShake() {
    this.runShakeLoop(this.getScene2Node("mobile_phone"), 402, () => 1 === this.phase && this.isStepCompleted(7) && !this.isStepCompleted(8) && !this.isAlarmOpen);
  }
  startAlarmPanelShake() {
    this.runShakeLoop(this.getScene2Node("mobile_phone_1"), 407, () => 1 === this.phase && this.isAlarmOpen);
  }
  runShakeLoop(e, t, i) {
    if (null == e || !e.isValid) return;
    const s = e.position.clone(),
      o = () => {
        e.isValid && i() && __rea_outer_c(e).tag(t).to(j, {
          position: new __rea_outer_d(s.x + 6, s.y, 0)
        }).to(j, {
          position: new __rea_outer_d(s.x - 6, s.y, 0)
        }).to(j, {
          position: s
        }).call(o).start();
      };
    o();
  }
  stopPhoneShake() {
    __rea_outer_a.stopAllByTag(402), __rea_outer_a.stopAllByTag(407);
    [this.getScene2Node("mobile_phone"), this.getScene2Node("mobile_phone_1")].forEach(e => {
      null != e && e.isValid && __rea_outer_C(e);
    });
  }
  stopAmbientAnimations() {
    this.stopZombieJumpAnimations(), this.stopDoorShake(), this.stopWindowShake(), this.stopScene2NpcJumpAnimations(), this.stopPhoneShake();
  }
  hitTestDraggable(e) {
    const t = [];
    this.isScene2 ? (this.isStepCompleted(4) || this.pushIfActive(t, this.getScene2Node("hammer")), (!this.isStepCompleted(5) || this.isStepCompleted(5) && !this.isStepCompleted(6)) && this.pushIfActive(t, this.getScene2Node("food_1")), this.isStepCompleted(7) || this.pushIfActive(t, this.getScene2Node("newspaper"))) : (this.isStepCompleted(1) || this.pushIfActive(t, this.getScene1Node("audio")), this.isStepCompleted(1) && !this.isStepCompleted(2) && this.isDoorClosed && this.pushIfActive(t, this.getScene1Node("hammer")), this.isStepCompleted(2) && !this.isStepCompleted(3) && this.pushIfActive(t, this.getScene1Node("table_1"))), t.sort((e, t) => this.getNodeRenderOrder(t) - this.getNodeRenderOrder(e));
    for (let i = 0; i < t.length; i += 1) {
      const s = t[i];
      if (this.isPointInsideNode(s, e)) return s;
    }
    return null;
  }
  pushIfActive(e, t) {
    null != t && t.active && e.push(t);
  }
  beginDrag(e, t) {
    let i = e,
      s = "none";
    const o = e.parent,
      n = e.position.clone(),
      h = e.getSiblingIndex();
    if (this.isScene2 || !this.isStepCompleted(1) || this.isStepCompleted(2) || "hammer" !== e.name) {
      if (this.isScene2 || !this.isStepCompleted(2) || this.isStepCompleted(3) || "table_1" !== e.name) {
        if (this.isScene2 && !this.isStepCompleted(4) && "hammer" === e.name) {
          const t = this.getScene2Node("hammer_1");
          t && (t.setPosition(n), this.setNodeActive(e, !1), this.setNodeActive(t, !0), i = t, s = "hammer_scene2");
        } else if (this.isScene2 && this.isStepCompleted(5) && !this.isStepCompleted(6) && "food_1" === e.name) {
          const t = this.getScene2Node("food_2");
          t && (t.setPosition(n), this.setNodeActive(e, !1), this.setNodeActive(t, !0), i = t, s = "food_scene2");
        } else this.isScene2 && !this.isStepCompleted(7) && "newspaper" === e.name && (e.setSiblingIndex(o.children.length - 1), s = "newspaper");
      } else {
        const t = this.getScene1Node("table_2");
        t && (t.setPosition(n), this.setNodeActive(e, !1), this.setNodeActive(t, !0), i = t, s = "table");
      }
    } else {
      const t = this.getScene1Node("hammer_1");
      t && (t.setPosition(n), this.setNodeActive(e, !1), this.setNodeActive(t, !0), i = t, s = "hammer");
    }
    const l = "none" !== s || this.isScene2 ? o : this.gameNode ?? o;
    if ("none" === s && !this.isScene2) {
      const e = i.worldPosition.clone();
      i.setParent(l);
      const t = l.getComponent(__rea_outer_p);
      if (t) {
        const s = t.convertToNodeSpaceAR(e);
        i.setPosition(s);
      }
      i.setSiblingIndex(l.children.length - 1);
    }
    const a = this.calculateTouchOffset(t, i, l);
    this.setDragNodePositionFromTouch(t, i, l, a), this.activeDragState = {
      dragNode: i,
      sourceNode: e,
      dragParent: l,
      touchOffset: a,
      originParent: o,
      originPosition: n,
      originSiblingIndex: h,
      proxyKind: s
    };
  }
  resetActiveDrag() {
    this.activeDragState && (this.restoreDragNode(this.activeDragState), this.activeDragState = null);
  }
  restoreDragNode(e) {
    if ("hammer" === e.proxyKind || "table" === e.proxyKind || "hammer_scene2" === e.proxyKind || "food_scene2" === e.proxyKind || "newspaper" === e.proxyKind) return void this.cancelProxyDrag(e);
    const t = e.dragNode;
    t.isValid && (t.setParent(e.originParent), t.setSiblingIndex(e.originSiblingIndex), t.setPosition(e.originPosition));
  }
  cancelProxyDrag(e) {
    if ("table" === e.proxyKind) {
      const t = this.getScene1Node("outdoortouch");
      if (__rea_outer_N.isDragNearTarget(e.dragNode, t)) return void this.resetTableProxyInstant(e);
    }
    this.flyProxyBackToSource(e);
  }
  finalizeHammerScene2DragSuccess(e) {
    __rea_outer_C(e.dragNode), this.setNodeActive(e.dragNode, !1), this.setNodeActive(e.sourceNode, !1);
  }
  finalizeFoodScene2DragSuccess(e) {
    __rea_outer_C(e.dragNode), this.setNodeActive(e.sourceNode, !1);
  }
  finalizeNewspaperDragSuccess(e) {
    __rea_outer_C(e.dragNode), this.setNodeActive(e.dragNode, !1);
  }
  restoreFood1Drag(e) {
    const {
      sourceNode: t,
      originPosition: i
    } = e;
    t.isValid && (__rea_outer_C(t), t.setPosition(i), this.setNodeActive(t, !0));
  }
  finalizeHammerDragSuccess(e) {
    __rea_outer_C(e.dragNode), this.setNodeActive(e.dragNode, !1), this.setNodeActive(e.sourceNode, !1);
  }
  snapTable2ToDoor1Center() {
    const e = this.getScene1Node("table_2"),
      t = this.getScene1Node("door_1");
    if (null == e || !e.isValid || null == t || !t.isValid) return;
    const i = t.worldPosition.clone(),
      s = e.parent,
      o = null == s ? void 0 : s.getComponent(__rea_outer_p);
    o ? e.setPosition(o.convertToNodeSpaceAR(i)) : e.setPosition(t.position.clone());
  }
  finalizeTableDragSuccess(e) {
    __rea_outer_C(e.dragNode), this.setNodeActive(e.sourceNode, !1), this.setNodeActive(e.dragNode, !0), this.snapTable2ToDoor1Center();
  }
  resetTableProxyInstant(e) {
    const {
      dragNode: t,
      sourceNode: i,
      originPosition: s
    } = e;
    __rea_outer_C(t), t.isValid && this.setNodeActive(t, !1), i.isValid && (i.setPosition(s), this.setNodeActive(i, !0), this.setNodeActive(this.getScene1Node("table_2"), !1));
  }
  flyProxyBackToSource(e) {
    const {
      dragNode: t,
      sourceNode: i,
      originPosition: s,
      proxyKind: o,
      originSiblingIndex: n
    } = e;
    "none" !== o && t.isValid && i.isValid && (__rea_outer_C(t), "newspaper" !== o ? __rea_outer_c(t).tag(406).to(.35, {
      position: s.clone()
    }).call(() => {
      this.isValid && (this.setNodeActive(t, !1), i.isValid && (i.setPosition(s), this.setNodeActive(i, !0)), "hammer" === o && this.setNodeActive(this.getScene1Node("hammer_1"), !1), "table" === o && this.setNodeActive(this.getScene1Node("table_2"), !1), "hammer_scene2" === o && (this.setNodeActive(this.getScene2Node("hammer_1"), !1), this.setNodeActive(this.getScene2Node("hammer"), !0)), "food_scene2" === o && (this.setNodeActive(this.getScene2Node("food_2"), !1), this.setNodeActive(this.getScene2Node("food_1"), !0)));
    }).start() : __rea_outer_c(t).tag(406).to(.35, {
      position: s.clone()
    }).call(() => {
      this.isValid && i.isValid && (i.setPosition(s), i.setSiblingIndex(n));
    }).start());
  }
  finalizeAudioAtOutdoor(e) {
    const t = this.scene1Node,
      i = this.getScene1Node("outdoortouch");
    if (null == t || !t.isValid || !e.isValid || null == i || !i.isValid) return;
    const s = i.worldPosition.clone();
    e.setParent(t);
    const o = t.getComponent(__rea_outer_p);
    o && e.setPosition(o.convertToNodeSpaceAR(s)), this.placeAudioAfterDoor(e), this.setNodeActive(e, !0);
  }
  placeAudioAfterDoor(e) {
    const t = this.scene1Node,
      i = this.getScene1Node("door"),
      s = e ?? this.getScene1Node("audio");
    if (null == t || !t.isValid || null == i || !i.isValid || null == s || !s.isValid) return;
    s.parent !== t && s.setParent(t);
    const o = i.getSiblingIndex() + 1;
    s.setSiblingIndex(o);
  }
  isStepCompleted(e) {
    return this.completedSteps.has(e);
  }
  getSmallestIncompleteStep() {
    for (let e = 1; e <= 8; e += 1) if (!this.isStepCompleted(e)) return e;
    return null;
  }
  markStepCompleted(e) {
    this.isStepCompleted(e) || (this.completedSteps.add(e), this.hasInstallNum = this.completedSteps.size, __rea_outer_b.getInstance().refreshGameProgress(), this.tryEnterSuccessIfComplete());
  }
  tryEnterSuccessIfComplete() {
    this.completedSteps.size < 8 || this.phase >= 2 || this.enterPhase2Success();
  }
  resolveHintKey() {
    const e = this.getSmallestIncompleteStep();
    return null === e ? null : ee[e - 1] ?? null;
  }
  getScene1Node(e) {
    var t;
    return (null == (t = this.scene1Node) ? void 0 : t.getChildByName(e)) ?? null;
  }
  getScene2Node(e) {
    var t;
    return (null == (t = this.scene2Node) ? void 0 : t.getChildByName(e)) ?? null;
  }
  resolveReferences() {
    var e, t, i, s, o, l;
    (this.gameNode = this.gameNode ?? this.node.getChildByPath("UIPanel/gameNode"), this.scene1Node = this.scene1Node ?? (null == (e = this.gameNode) ? void 0 : e.getChildByName("scene1")) ?? null, this.scene2Node = this.scene2Node ?? (null == (t = this.gameNode) ? void 0 : t.getChildByName("scence2")) ?? null, this.clickRootNode = this.clickRootNode ?? this.node.getChildByPath("UIPanel/click_root") ?? null, this.backBgNode = this.backBgNode ?? this.node.getChildByPath("UIPanel/backBG") ?? null, this.bubbleNode = this.bubbleNode ?? (null == (i = this.gameNode) ? void 0 : i.getChildByName("bubble")) ?? null, this.fleeButton) || (this.fleeButton = (null == (s = this.clickRootNode) || null == (s = s.getChildByName("ButtonGO")) ? void 0 : s.getComponent(__rea_outer_n)) ?? null);
    this.waitButton || (this.waitButton = (null == (o = this.clickRootNode) || null == (o = o.getChildByName("ButtonWait")) ? void 0 : o.getComponent(__rea_outer_n)) ?? null);
    this.tipLabel || (this.tipLabel = (null == (l = this.bubbleNode) || null == (l = l.getChildByPath("dialog_box/Label")) ? void 0 : l.getComponent(__rea_outer_h)) ?? null);
    this.scene1Node || console.warn("[Level_9] 缺少 scene1 节点"), this.scene2Node || console.warn("[Level_9] 缺少 scence2 节点"), this.clickRootNode || console.warn("[Level_9] 缺少 click_root 节点");
  }
  setInputBlocked(e) {
    const t = this.backBgNode;
    if (null == t || !t.isValid) return;
    t.active = e;
    const i = t.getComponent(__rea_outer_r);
    i && (i.enabled = e);
  }
  setNodeActive(e, t) {
    null != e && e.isValid && (e.active = t);
  }
  getNodeRenderOrder(e) {
    let t = 0,
      i = 1,
      s = e;
    for (; s;) t += s.getSiblingIndex() * i, i *= 128, s = s.parent;
    return t;
  }
  isPointInsideNode(e, t) {
    const i = null == e ? void 0 : e.getComponent(__rea_outer_p);
    return !!i && i.getBoundingBoxToWorld().contains(t);
  }
  getTouchWorldPoint(e) {
    const t = e.getUILocation();
    return new __rea_outer_g(t.x, t.y);
  }
  getTouchLocalPosition(e, t) {
    const i = e.getUILocation(),
      s = t.getComponent(__rea_outer_p);
    return s ? s.convertToNodeSpaceAR(new __rea_outer_d(i.x, i.y, 0)) : __rea_outer_d.ZERO.clone();
  }
  calculateTouchOffset(e, t, i) {
    const s = this.getTouchLocalPosition(e, i);
    return new __rea_outer_d(t.position.x - s.x, t.position.y - s.y, 0);
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
}), F = __rea_outer_t(E.prototype, "scene1Node", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), z = __rea_outer_t(E.prototype, "scene2Node", [k], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), W = __rea_outer_t(E.prototype, "clickRootNode", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), K = __rea_outer_t(E.prototype, "fleeButton", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), R = __rea_outer_t(E.prototype, "waitButton", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), M = __rea_outer_t(E.prototype, "backBgNode", [V], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), J = __rea_outer_t(E.prototype, "bubbleNode", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), U = __rea_outer_t(E.prototype, "tipLabel", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), L = E)) || L);
__rea_outer_s._RF.pop();
export { __recovered_export_0 as default };
