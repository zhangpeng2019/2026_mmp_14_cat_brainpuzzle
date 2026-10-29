// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_22.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_e } from "cc";
import { Vec3 as __rea_outer_i } from "cc";
import { Node as __rea_outer_s } from "cc";
import { UITransform as __rea_outer_o } from "cc";
import { tween as __rea_outer_h } from "cc";
import { Label as __rea_outer_n } from "cc";
import { Vec2 as __rea_outer_l } from "cc";
import { _decorator as __rea_outer_a } from "cc";
import { default as __rea_outer_d } from "./LevelBase";
import { default as __rea_outer_r } from "./clue-hit-tester";
import { default as __rea_outer_c } from "./AudioManager";
import { I18nController as __rea_outer_u } from "./i18n-controller";
import { UIManager as __rea_outer_g } from "./ui-manager";
import { UILayer as __rea_outer_N } from "./ui-layer";
import { UIHint as __rea_outer_p } from "./uihint";
import { UIFail as __rea_outer_v } from "./uifail";
import { GameController as __rea_outer_m } from "./GameController";
import { stopAllTweens as __rea_outer_b } from "./CocosCompat";
let __recovered_export_0;
var y;
__rea_outer_e._RF.push({}, "b9145lt4klDP4XeWP+KOMWo", "Level_22", void 0);
const {
    ccclass: A
  } = __rea_outer_a,
  f = 10,
  k = ["level22_hint1", "level22_hint2", "level22_hint3", "level22_hint4", "level22_hint5", "level22_hint6", "level22_hint7", "level22_hint8", "level22_hint9", "level22_hint10"],
  S = ["22_2", "22_3", "22_4", "22_5", "22_6", "22_7", "22_8", "22_9", "22_10"],
  B = [{
    id: 1,
    kind: "drag",
    itemNodeName: "small_dumbbell",
    zoneNodeName: "small_dumbbell_touch",
    playMountSound: !0
  }, {
    id: 2,
    kind: "drag",
    itemNodeName: "tire",
    zoneNodeName: "tire_touch",
    playMountSound: !0
  }, {
    id: 3,
    kind: "drag",
    itemNodeName: "load_bearing",
    zoneNodeName: "load_bearing_touch",
    playMountSound: !0
  }, {
    id: 4,
    kind: "drag",
    itemNodeName: "pole",
    zoneNodeName: "pole_touch",
    playMountSound: !0
  }, {
    id: 5,
    kind: "drag",
    itemNodeName: "dog",
    zoneNodeName: "dog_touch",
    playMountSound: !0
  }, {
    id: 6,
    kind: "drag",
    itemNodeName: "hammer",
    zoneNodeName: "hammer_touch",
    playMountSound: !1
  }, {
    id: 7,
    kind: "drag",
    itemNodeName: "brick",
    zoneNodeName: "brick_touch",
    playMountSound: !0
  }, {
    id: 8,
    kind: "drag",
    itemNodeName: "bucket_1",
    zoneNodeName: "bucket_1_touch",
    playMountSound: !0
  }, {
    id: 9,
    kind: "swipeLeft",
    itemNodeName: null,
    zoneNodeName: "window_touch",
    playMountSound: !1
  }, {
    id: 10,
    kind: "drag",
    itemNodeName: "hula_hoop",
    zoneNodeName: "hula_hoop_touch",
    playMountSound: !0
  }];
__recovered_export_0 = A("Level_22")(y = class extends __rea_outer_d {
  constructor(...t) {
    super(...t), this.phase = 0, this.winstate = !1, this.gameNode = null, this.backBgNode = null, this.bubbleNode = null, this.tipLabel = null, this.dialogBoxNode = null, this.bgLightNode = null, this.personNode = null, this.bodyNode = null, this.ipNode = null, this.ip1Node = null, this.dragsRoot = null, this.swipsRoot = null, this.armLeft1 = null, this.armLeft2 = null, this.armRight1 = null, this.armRight2 = null, this.leg1 = null, this.leg2 = null, this.loadBearing1 = null, this.loadBearing2 = null, this.pole1 = null, this.smallDumbbell = null, this.smallDumbbell1 = null, this.tire = null, this.tire1 = null, this.loadBearing = null, this.pole = null, this.dog = null, this.dog1 = null, this.hammer = null, this.brick = null, this.brick1 = null, this.brick2 = null, this.bucket1 = null, this.bucket2 = null, this.windowNode = null, this.window1 = null, this.hulaHoop = null, this.hulaHoop1 = null, this.hulaHoop2 = null, this.heart = null, this.fire = null, this.star1 = null, this.star2 = null, this.windowTouch = null, this.zoneNodes = new Map(), this.itemNodes = new Map(), this.doneStepIds = new Set(), this.isInteractionLocked = !0, this.voiceToken = 0, this.activeDragState = null, this.swipeGestureState = null, this.runPoseFrame = 0, this.runIntervalSeconds = .1, this.hasWeightedLegs = !1, this.hasPoleOnShoulder = !1, this.isDogFloating = !1, this.isDogSprint = !1, this.dogBasePosition = new __rea_outer_i(), this.bgLightBasePosition = new __rea_outer_i(), this.hulaFrame = 0, this.starFrame = 0, this.brick1BasePosition = new __rea_outer_i(), this.brickConsumed = !1, this.onTouchStart = t => {
      if (1 !== this.phase || this.isInteractionLocked || this.activeDragState) return;
      const e = this.getTouchWorldPoint(t),
        i = this.findUnusedDragStepAtPoint(e);
      i ? this.beginDragForStep(i, t) : !this.doneStepIds.has(9) && this.isPointInsideNode(this.windowTouch, e) && (this.swipeGestureState = {
        startLocation: e.clone()
      });
    }, this.onTouchMove = t => {
      if (this.activeDragState && 1 === this.phase && !this.isInteractionLocked) {
        const e = this.activeDragState;
        this.setDragNodePositionFromTouch(t, e.dragNode, e.dragParent, e.touchOffset);
      }
    }, this.onTouchEnd = t => {
      if (1 !== this.phase) return this.activeDragState = null, void (this.swipeGestureState = null);
      if (this.activeDragState) return this.handleItemDrop(this.activeDragState, this.getTouchWorldPoint(t)), void (this.activeDragState = null);
      const e = this.swipeGestureState;
      if (this.swipeGestureState = null, !e || this.isInteractionLocked || this.doneStepIds.has(9)) return;
      const i = this.getTouchWorldPoint(t),
        s = i.x - e.startLocation.x,
        o = i.y - e.startLocation.y;
      this.isLeftSwipe(s, o) && this.doneStepIds.has(5) && this.executeStep(9);
    }, this.onRunPoseTick = () => {
      !this.isValid || this.phase >= 2 || (this.runPoseFrame = 0 === this.runPoseFrame ? 1 : 0, this.applyRunPoseFrame());
    }, this.onHulaTick = () => {
      !this.isValid || this.phase >= 2 || (this.hulaFrame = 0 === this.hulaFrame ? 1 : 0, this.setNodeActive(this.hulaHoop1, 0 === this.hulaFrame), this.setNodeActive(this.hulaHoop2, 1 === this.hulaFrame));
    }, this.onFireBlinkTick = () => {
      var t;
      !this.isValid || this.phase >= 2 || null == (t = this.fire) || !t.isValid || (this.fire.active = !this.fire.active);
    }, this.onStarTick = () => {
      this.isValid && (this.starFrame = 0 === this.starFrame ? 1 : 0, this.setNodeActive(this.star1, 0 === this.starFrame), this.setNodeActive(this.star2, 1 === this.starFrame));
    }, this.onBubbleHide = () => {
      this.isValid && this.hideBubble();
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.allItemNum = f, this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.applyInitialVisibility(), this.enterPhase0();
  }
  onDestroy() {
    this.unscheduleAllCallbacks(), this.unregisterHandlers(), this.stopRunLoop(), this.stopDogFloat(), this.stopBgLightMove(), this.stopHulaAlternate(), this.stopFireBlink(), this.stopStarAlternate(), __rea_outer_c.stopLevelAudio(), this.stopTrackedTweens(), this.activeDragState = null, this.swipeGestureState = null;
  }
  handleTimeExpired() {
    return !!(this.phase >= 2 || this.winstate);
  }
  showHint() {
    if (1 !== this.phase) return;
    const t = this.resolveNextHintKey();
    if (!t) return;
    const e = __rea_outer_u.getInstance().getKey(t);
    __rea_outer_g.getInstance().showView(__rea_outer_p, void 0, {
      body: e
    });
  }
  getGameProgressSnapshot() {
    const t = this.hasInstallNum;
    return {
      progress: t / f,
      label: `${t}/10`
    };
  }
  markAllTasksCompleted() {
    B.forEach(t => {
      this.doneStepIds.add(t.id);
    }), this.hasInstallNum = f, this.phase = 2, this.winstate = !0, this.isInteractionLocked = !0, this.unregisterHandlers();
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.isInteractionLocked = !0, this.hasInstallNum = 0, this.allItemNum = f, this.doneStepIds.clear(), this.activeDragState = null, this.swipeGestureState = null, this.voiceToken += 1, this.runPoseFrame = 0, this.runIntervalSeconds = .1, this.hasWeightedLegs = !1, this.hasPoleOnShoulder = !1, this.isDogFloating = !1, this.isDogSprint = !1, this.hulaFrame = 0, this.starFrame = 0, this.brickConsumed = !1, this.hideBubble();
  }
  applyInitialVisibility() {
    this.setNodeActive(this.gameNode, !0), this.setNodeActive(this.personNode, !0), this.setNodeActive(this.bodyNode, !0), this.setNodeActive(this.bgLightNode, !0), this.setNodeActive(this.ipNode, !1), this.setNodeActive(this.ip1Node, !1), this.setNodeActive(this.smallDumbbell, !0), this.setNodeActive(this.smallDumbbell1, !1), this.setNodeActive(this.tire, !0), this.setNodeActive(this.tire1, !1), this.setNodeActive(this.loadBearing, !0), this.setNodeActive(this.loadBearing1, !1), this.setNodeActive(this.loadBearing2, !1), this.setNodeActive(this.pole, !0), this.setNodeActive(this.pole1, !1), this.setNodeActive(this.dog, !0), this.setNodeActive(this.dog1, !1), this.setNodeActive(this.hammer, !0), this.setNodeActive(this.brick, !1), this.setNodeActive(this.brick1, !1), this.setNodeActive(this.brick2, !1), this.setNodeActive(this.bucket1, !0), this.setNodeActive(this.bucket2, !1), this.setNodeActive(this.windowNode, !0), this.setNodeActive(this.window1, !1), this.setNodeActive(this.hulaHoop, !0), this.setNodeActive(this.hulaHoop1, !1), this.setNodeActive(this.hulaHoop2, !1), this.setNodeActive(this.heart, !1), this.setNodeActive(this.fire, !1), this.setNodeActive(this.star1, !1), this.setNodeActive(this.star2, !1), this.setNodeActive(this.armLeft1, !1), this.setNodeActive(this.armLeft2, !0), this.setNodeActive(this.armRight1, !1), this.setNodeActive(this.armRight2, !0), this.setNodeActive(this.leg1, !0), this.setNodeActive(this.leg2, !1);
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_c.playMusic("bgm4", !0, .5), this.setNodeActive(this.backBgNode, !0), this.setNodeActive(this.ipNode, !1), this.setNodeActive(this.ip1Node, !1), this.setNodeActive(this.heart, !1), this.setNodeActive(this.fire, !1), this.startRunLoop(), this.startBgLightMove(), this.playVoiceEffect("22_1", () => {
      this.isValid && 0 === this.phase && this.enterPhase1();
    });
  }
  skipOpeningToPlay() {
    return 0 === this.phase && (this.voiceToken += 1, this.stopOpeningDialogue(), this.enterPhase1(), !0);
  }
  enterPhase1() {
    0 === this.phase && (this.phase = 1, this.setNodeActive(this.backBgNode, !1), this.setNodeActive(this.ipNode, !1), this.setNodeActive(this.ip1Node, !1), this.setNodeActive(this.heart, !1), this.setNodeActive(this.fire, !1), this.registerHandlers(), this.isInteractionLocked = !1, __rea_outer_m.getInstance().refreshGameProgress());
  }
  registerHandlers() {
    this.node.on(__rea_outer_s.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(__rea_outer_s.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(__rea_outer_s.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(__rea_outer_s.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
  }
  unregisterHandlers() {
    var t;
    null != (t = this.node) && t.isValid && (this.node.off(__rea_outer_s.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(__rea_outer_s.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(__rea_outer_s.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(__rea_outer_s.EventType.TOUCH_CANCEL, this.onTouchEnd, this));
  }
  findUnusedDragStepAtPoint(t) {
    for (let e = B.length - 1; e >= 0; e -= 1) {
      const i = B[e];
      if ("drag" !== i.kind || this.doneStepIds.has(i.id)) continue;
      if (7 === i.id && (this.brickConsumed || !this.doneStepIds.has(6))) continue;
      const s = this.itemNodes.get(i.id);
      if (this.isPointInsideNode(s, t)) return i;
    }
    return null;
  }
  beginDragForStep(t, e) {
    if (7 === t.id) return void this.beginBrickProxyDrag(e);
    const i = this.itemNodes.get(t.id);
    null != i && i.isValid && this.beginDrag(i, t.id, e, !1);
  }
  beginBrickProxyDrag(t) {
    const e = this.brick1,
      i = this.brick;
    if (null == e || !e.isValid || null == i || !i.isValid) return;
    const s = e.parent;
    if (null == s || !s.isValid) return;
    const h = e.position.clone(),
      n = e.getSiblingIndex(),
      l = i.worldPosition.clone(),
      a = this.gameNode ?? s;
    e.active = !0, e.setParent(a);
    const d = a.getComponent(__rea_outer_o);
    if (d) {
      const t = d.convertToNodeSpaceAR(l);
      e.setPosition(t);
    }
    e.setSiblingIndex(a.children.length - 1);
    const r = this.calculateTouchOffset(t, e, a);
    this.setDragNodePositionFromTouch(t, e, a, r), this.activeDragState = {
      stepId: 7,
      dragNode: e,
      dragParent: a,
      touchOffset: r,
      originParent: s,
      originPosition: h,
      originSiblingIndex: n,
      isBrickProxy: !0
    };
  }
  beginDrag(t, e, i, s) {
    const h = t.parent;
    if (null == h || !h.isValid) return;
    const n = t.position.clone(),
      l = t.getSiblingIndex(),
      a = t.worldPosition.clone(),
      d = this.gameNode ?? h;
    t.setParent(d);
    const r = d.getComponent(__rea_outer_o);
    if (r) {
      const e = r.convertToNodeSpaceAR(a);
      t.setPosition(e);
    }
    t.setSiblingIndex(d.children.length - 1);
    const c = this.calculateTouchOffset(i, t, d);
    this.setDragNodePositionFromTouch(i, t, d, c), this.activeDragState = {
      stepId: e,
      dragNode: t,
      dragParent: d,
      touchOffset: c,
      originParent: h,
      originPosition: n,
      originSiblingIndex: l,
      isBrickProxy: s
    };
  }
  handleItemDrop(t, e) {
    if (this.isInteractionLocked || this.doneStepIds.has(t.stepId)) return void this.restoreDragNode(t);
    const i = this.zoneNodes.get(t.stepId);
    if (__rea_outer_r.isDragNearTarget(t.dragNode, i ?? null)) {
      if (8 !== t.stepId || this.hasPoleOnShoulder) {
        if (7 !== t.stepId || this.hasPoleOnShoulder) {
          if (6 !== t.stepId) {
            if (t.isBrickProxy) return this.setNodeActive(t.dragNode, !1), void this.executeStep(7);
            this.restoreDragNode(t), this.executeStep(t.stepId);
          } else this.executeStep(6);
        } else this.beginBrickFailSequence(t);
      } else this.restoreDragNode(t);
    } else this.restoreDragNode(t);
  }
  restoreDragNode(t) {
    const e = t.dragNode;
    if (e.isValid) {
      if (t.isBrickProxy) return e.setParent(t.originParent), e.setSiblingIndex(t.originSiblingIndex), e.setPosition(t.originPosition), void (e.active = !1);
      e.setParent(t.originParent), e.setSiblingIndex(t.originSiblingIndex), e.setPosition(t.originPosition);
    }
  }
  executeStep(t) {
    if (this.doneStepIds.has(t) || this.isInteractionLocked || 1 !== this.phase) return;
    const e = B.find(e => e.id === t);
    e && (6 !== t ? 9 !== t ? (this.applyStepVisual(t), this.completeStepProgress(e)) : this.playWindowSequenceThenComplete(e) : this.playHammerSmashThenComplete(e));
  }
  playHammerSmashThenComplete(t) {
    const e = this.hammer;
    if (null == e || !e.isValid) return this.applyStepVisual(6), void this.completeStepProgress(t);
    this.isInteractionLocked = !0;
    const s = e.position.clone();
    __rea_outer_c.playEffect_1("level22_5"), __rea_outer_b(e), __rea_outer_h(e).to(.35, {
      position: new __rea_outer_i(s.x, s.y + -120, s.z)
    }).call(() => {
      this.isValid && (this.setNodeActive(e, !1), e.setPosition(s), this.applyStepVisual(6), this.isInteractionLocked = !1, this.completeStepProgress(t));
    }).start();
  }
  playWindowSequenceThenComplete(t) {
    this.isInteractionLocked = !0, this.setNodeActive(this.windowNode, !1), this.setNodeActive(this.window1, !0), this.scheduleOnce(() => {
      this.isValid && 1 === this.phase && this.playHeartToDog(() => {
        this.isValid && (this.isInteractionLocked = !1, this.completeStepProgress(t));
      });
    }, .5);
  }
  playHeartToDog(t) {
    const e = this.heart,
      s = this.dog1;
    if (null == e || !e.isValid || null == s || !s.isValid) return void t();
    const n = e.parent,
      l = e.position.clone(),
      a = s.worldPosition.clone(),
      d = null == n ? void 0 : n.getComponent(__rea_outer_o),
      r = d ? d.convertToNodeSpaceAR(a) : l.clone();
    e.setPosition(l), e.setScale(.2, .2, 1), e.active = !0, __rea_outer_c.playEffect_1("level22_3"), __rea_outer_b(e), __rea_outer_h(e).to(.6, {
      position: r,
      scale: new __rea_outer_i(1, 1, 1)
    }).call(() => {
      this.isValid && (this.setNodeActive(e, !1), this.startFireBlink(), this.isDogSprint = !0, this.restartDogFloat(), __rea_outer_c.playEffect_1("level22_4"), t());
    }).start();
  }
  applyStepVisual(t) {
    var e;
    switch (t) {
      case 1:
        this.setNodeActive(this.smallDumbbell, !1), this.setNodeActive(this.smallDumbbell1, !0);
        break;
      case 2:
        this.setNodeActive(this.tire, !1), this.setNodeActive(this.tire1, !0);
        break;
      case 3:
        this.setNodeActive(this.loadBearing, !1), this.hasWeightedLegs = !0, this.setNodeActive(this.leg1, !1), this.setNodeActive(this.leg2, !1), this.applyRunPoseFrame();
        break;
      case 4:
        this.setNodeActive(this.pole, !1), this.setNodeActive(this.armLeft1, !1), this.setNodeActive(this.armLeft2, !1), this.setNodeActive(this.armRight1, !1), this.setNodeActive(this.armRight2, !1), this.setNodeActive(this.pole1, !0), this.hasPoleOnShoulder = !0;
        break;
      case 5:
        this.setNodeActive(this.dog, !1), this.setNodeActive(this.dog1, !0), this.setNodeActive(this.fire, !1), null != (e = this.dog1) && e.isValid && (this.dogBasePosition = this.dog1.position.clone()), this.isDogFloating = !0, this.restartDogFloat(), __rea_outer_c.playEffect_1("level22_2");
        break;
      case 6:
        this.setNodeActive(this.hammer, !1), this.setNodeActive(this.brick, !0);
        break;
      case 7:
        this.setNodeActive(this.brick1, !1), this.setNodeActive(this.brick2, !0), this.brickConsumed = !0;
        break;
      case 8:
        this.setNodeActive(this.bucket1, !1), this.setNodeActive(this.bucket2, !0);
        break;
      case 10:
        this.setNodeActive(this.hulaHoop, !1), this.setNodeActive(this.hulaHoop1, !0), this.setNodeActive(this.hulaHoop2, !1), this.hulaFrame = 0, this.startHulaAlternate();
    }
  }
  completeStepProgress(t) {
    if (this.doneStepIds.has(t.id)) return;
    t.playMountSound && __rea_outer_c.playEffect_1("level22_1"), this.doneStepIds.add(t.id), this.hasInstallNum = this.doneStepIds.size;
    const e = this.resolveProgressVoiceKey(this.hasInstallNum);
    e && this.playVoiceEffect(e, () => {}), this.updateRunIntervalByProgress(), __rea_outer_m.getInstance().refreshGameProgress(), this.TryQuickWin() || this.doneStepIds.size >= f && (this.isInteractionLocked = !0, this.scheduleOnce(() => {
      this.isValid && this.enterPhase2Success();
    }, 1.5));
  }
  resolveProgressVoiceKey(t) {
    return t < 1 || t > S.length ? null : S[t - 1] ?? null;
  }
  updateRunIntervalByProgress() {
    const t = this.doneStepIds.size;
    let e = .1;
    t >= 9 ? e = .8 : t >= 8 ? e = .5 : t >= 5 ? e = .3 : t >= 3 && (e = .2), Math.abs(e - this.runIntervalSeconds) < .001 || (this.runIntervalSeconds = e, this.startRunLoop(), this.startBgLightMove());
  }
  startRunLoop() {
    this.stopRunLoop(), this.applyRunPoseFrame(), this.schedule(this.onRunPoseTick, this.runIntervalSeconds);
  }
  stopRunLoop() {
    this.unschedule(this.onRunPoseTick);
  }
  applyRunPoseFrame() {
    const t = 0 === this.runPoseFrame;
    if (this.hasPoleOnShoulder || (this.setNodeActive(this.armLeft1, !t), this.setNodeActive(this.armLeft2, t), this.setNodeActive(this.armRight1, !t), this.setNodeActive(this.armRight2, t)), this.hasWeightedLegs) return this.setNodeActive(this.loadBearing1, t), this.setNodeActive(this.loadBearing2, !t), this.setNodeActive(this.leg1, !1), void this.setNodeActive(this.leg2, !1);
    this.setNodeActive(this.leg1, t), this.setNodeActive(this.leg2, !t), this.setNodeActive(this.loadBearing1, !1), this.setNodeActive(this.loadBearing2, !1);
  }
  startBgLightMove() {
    const t = this.bgLightNode;
    if (null == t || !t.isValid) return;
    this.stopBgLightMove();
    const e = this.bgLightBasePosition.clone(),
      s = Math.max(this.runIntervalSeconds, .05);
    t.setPosition(e), __rea_outer_h(t).to(s, {
      position: new __rea_outer_i(e.x + 40, e.y, e.z)
    }).to(s, {
      position: e.clone()
    }).union().repeatForever().start();
  }
  stopBgLightMove() {
    var t;
    null != (t = this.bgLightNode) && t.isValid && (__rea_outer_b(this.bgLightNode), this.bgLightNode.setPosition(this.bgLightBasePosition));
  }
  restartDogFloat() {
    this.stopDogFloat();
    const t = this.dog1;
    if (null == t || !t.isValid || !this.isDogFloating) return;
    const e = this.dogBasePosition,
      s = this.isDogSprint ? .2 : .4;
    t.setPosition(e), __rea_outer_h(t).to(s, {
      position: new __rea_outer_i(e.x, e.y + 12, e.z)
    }).to(s, {
      position: e.clone()
    }).union().repeatForever().start();
  }
  stopDogFloat() {
    var t;
    null != (t = this.dog1) && t.isValid && (__rea_outer_b(this.dog1), this.isDogFloating && this.dog1.setPosition(this.dogBasePosition));
  }
  startHulaAlternate() {
    this.stopHulaAlternate(), this.schedule(this.onHulaTick, .5);
  }
  stopHulaAlternate() {
    this.unschedule(this.onHulaTick);
  }
  startFireBlink() {
    this.stopFireBlink(), this.setNodeActive(this.fire, !0), this.schedule(this.onFireBlinkTick, .2);
  }
  stopFireBlink() {
    this.unschedule(this.onFireBlinkTick), this.setNodeActive(this.fire, !1);
  }
  startStarAlternate() {
    this.stopStarAlternate(), this.starFrame = 0, this.setNodeActive(this.star1, !0), this.setNodeActive(this.star2, !1), this.schedule(this.onStarTick, .3);
  }
  stopStarAlternate() {
    this.unschedule(this.onStarTick);
  }
  enterPhase2Success() {
    this.phase = 2, this.isInteractionLocked = !0, this.unregisterHandlers(), this.stopRunLoop(), this.stopBgLightMove(), this.stopDogFloat(), this.stopHulaAlternate(), this.stopFireBlink(), this.applySuccessSettlementVisual(), __rea_outer_c.playEffect_1("level22_6"), this.playVoiceEffect("22_11", () => {
      this.isValid && (this.winstate = !0, this.showLevelSuccess(1.5));
    });
  }
  applySuccessSettlementVisual() {
    this.setNodeActive(this.bgLightNode, !1), this.setNodeActive(this.ip1Node, !1), this.setNodeActive(this.ipNode, !0), this.setNodeActive(this.gameNode, !0);
    const t = this.gameNode;
    null != t && t.isValid && t.children.forEach(t => {
      if (null == t || !t.isValid) return;
      const e = t.name;
      t.active = "window_1" === e || "bucket" === e;
    });
  }
  beginBrickFailSequence(t) {
    this.phase = 2, this.isInteractionLocked = !0, this.unregisterHandlers(), this.stopRunLoop(), this.stopBgLightMove(), this.stopDogFloat(), this.stopHulaAlternate(), this.stopFireBlink(), __rea_outer_m.getInstance().pauseTimer(), this.applyBrickFailSettlementVisual(t), this.startStarAlternate(), this.playVoiceEffect("22_12", () => {
      this.isValid && this.scheduleOnce(() => {
        this.isValid && __rea_outer_g.getInstance().showView(__rea_outer_v, __rea_outer_N.WIN_ANIMATION);
      }, 1.5);
    });
  }
  applyBrickFailSettlementVisual(t) {
    var e;
    this.setNodeActive(this.bgLightNode, !1), this.setNodeActive(this.ipNode, !1), this.setNodeActive(this.gameNode, !0);
    const i = !0 === (null == (e = this.window1) ? void 0 : e.activeInHierarchy) || this.doneStepIds.has(9),
      s = !i,
      o = !this.doneStepIds.has(8),
      h = this.gameNode;
    null != h && h.isValid && h.children.forEach(t => {
      if (null == t || !t.isValid) return;
      const e = t.name;
      t.active = "ip_1" === e || "brick_1" === e || "star1" === e || "star2" === e || "bucket" === e || "bucket_1" === e && o || "window_1" === e && i || "window" === e && s;
    }), this.setNodeActive(this.ip1Node, !0), this.placeBrickOnFailPose(t), this.setNodeActive(this.star1, !0), this.setNodeActive(this.star2, !1);
  }
  placeBrickOnFailPose(t) {
    const e = this.brick1 ?? t.dragNode,
      i = this.gameNode,
      s = this.ip1Node;
    null != e && e.isValid && null != i && i.isValid && (__rea_outer_b(e), e.parent !== i && e.setParent(i), e.setPosition(this.resolveBrickFailPosition(s)), e.setSiblingIndex(i.children.length - 1), e.active = !0);
  }
  resolveBrickFailPosition(t) {
    if (null == t || !t.isValid) return this.brick1BasePosition.clone();
    const e = this.brick1BasePosition,
      s = e.x - t.position.x,
      o = e.y - t.position.y;
    return s * s + o * o <= 16e4 ? e.clone() : new __rea_outer_i(t.position.x, t.position.y + 120, 0);
  }
  beginTimeoutFailSequence() {
    this.phase = 2, this.isInteractionLocked = !0, this.unregisterHandlers(), this.voiceToken += 1, __rea_outer_c.stopVoice(), this.hideBubble(), __rea_outer_m.getInstance().pauseTimer(), this.scheduleOnce(() => {
      this.isValid && __rea_outer_g.getInstance().showView(__rea_outer_v, __rea_outer_N.WIN_ANIMATION);
    }, 1.5);
  }
  resolveNextHintKey() {
    for (let t = 0; t < B.length; t += 1) {
      const e = B[t];
      if (!this.doneStepIds.has(e.id)) return k[e.id - 1] ?? null;
    }
    return null;
  }
  playVoiceEffect(t, e) {
    this.voiceToken += 1;
    const i = this.voiceToken;
    this.showVoiceBubble(t);
    let s = !1;
    const o = () => {
        !s && this.isValid && i === this.voiceToken && (s = !0, this.unschedule(h), e());
      },
      h = () => {
        o();
      };
    this.scheduleOnce(h, 2.5), __rea_outer_c.stopVoice(), __rea_outer_c.playEffect_1(t, o);
  }
  showVoiceBubble(t) {
    const e = __rea_outer_u.getInstance();
    this.tipLabel && (this.tipLabel.string = e.getKey(t), this.setNodeActive(this.tipLabel.node, !0)), this.setNodeActive(this.dialogBoxNode, !0), this.setNodeActive(this.bubbleNode, !0), this.unschedule(this.onBubbleHide), this.scheduleOnce(this.onBubbleHide, 2.5);
  }
  hideBubble() {
    var t;
    this.setNodeActive(this.bubbleNode, !1), this.setNodeActive(this.dialogBoxNode, !1), this.setNodeActive((null == (t = this.tipLabel) ? void 0 : t.node) ?? null, !1);
  }
  isLeftSwipe(t, e) {
    return t <= -30 && Math.abs(t) >= 1.2 * Math.abs(e);
  }
  resolveReferences() {
    var t, e, i, s, o, h, l, a;
    this.gameNode = this.node.getChildByPath("UIPanel/gameNode"), this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.bubbleNode = this.node.getChildByPath("UIPanel/bubble"), this.bgLightNode = this.node.getChildByPath("UIPanel/bg_light"), this.ipNode = this.node.getChildByPath("UIPanel/ip"), this.dialogBoxNode = (null == (t = this.bubbleNode) ? void 0 : t.getChildByName("dialog_box")) ?? null, this.tipLabel = (null == (e = this.bubbleNode) || null == (e = e.getChildByPath("dialog_box/Label")) ? void 0 : e.getComponent(__rea_outer_n)) ?? null;
    const d = this.gameNode;
    this.ip1Node = (null == d ? void 0 : d.getChildByName("ip_1")) ?? this.node.getChildByPath("UIPanel/ip_1"), this.dragsRoot = (null == d ? void 0 : d.getChildByName("drags")) ?? null, this.swipsRoot = (null == d ? void 0 : d.getChildByName("swips")) ?? null, this.personNode = (null == d ? void 0 : d.getChildByName("person")) ?? null, this.bodyNode = (null == (i = this.personNode) ? void 0 : i.getChildByName("body")) ?? null;
    const r = this.bodyNode;
    this.armLeft1 = (null == r ? void 0 : r.getChildByName("arm_left_1")) ?? null, this.armLeft2 = (null == r ? void 0 : r.getChildByName("arm_left_2")) ?? null, this.armRight1 = (null == r ? void 0 : r.getChildByName("arm_right_1")) ?? null, this.armRight2 = (null == r ? void 0 : r.getChildByName("arm_right_2")) ?? null, this.leg1 = (null == r ? void 0 : r.getChildByName("leg_1")) ?? null, this.leg2 = (null == r ? void 0 : r.getChildByName("leg_2")) ?? null, this.loadBearing1 = (null == r ? void 0 : r.getChildByName("load_bearing_1")) ?? null, this.loadBearing2 = (null == r ? void 0 : r.getChildByName("load_bearing_2")) ?? null, this.pole1 = (null == r ? void 0 : r.getChildByName("pole_1")) ?? null, this.smallDumbbell = (null == d ? void 0 : d.getChildByName("small_dumbbell")) ?? null, this.smallDumbbell1 = (null == d ? void 0 : d.getChildByName("small_dumbbell_1")) ?? null, this.tire = (null == d ? void 0 : d.getChildByName("tire")) ?? null, this.tire1 = (null == d ? void 0 : d.getChildByName("tire_1")) ?? null, this.loadBearing = (null == d ? void 0 : d.getChildByName("load_bearing")) ?? null, this.pole = (null == d ? void 0 : d.getChildByName("pole")) ?? null, this.dog = (null == d ? void 0 : d.getChildByName("dog")) ?? null, this.dog1 = (null == d ? void 0 : d.getChildByName("dog_1")) ?? null, this.hammer = (null == d ? void 0 : d.getChildByName("hammer")) ?? null, this.brick = (null == d ? void 0 : d.getChildByName("brick")) ?? null, this.brick1 = (null == d ? void 0 : d.getChildByName("brick_1")) ?? null, this.brick2 = (null == d ? void 0 : d.getChildByName("brick_2")) ?? null, this.bucket1 = (null == d ? void 0 : d.getChildByName("bucket_1")) ?? null, this.bucket2 = (null == d ? void 0 : d.getChildByName("bucket_2")) ?? null, this.windowNode = (null == d ? void 0 : d.getChildByName("window")) ?? null, this.window1 = (null == d ? void 0 : d.getChildByName("window_1")) ?? null, this.hulaHoop = (null == d ? void 0 : d.getChildByName("hula_hoop")) ?? null, this.hulaHoop1 = (null == d ? void 0 : d.getChildByName("hula_hoop_1")) ?? null, this.hulaHoop2 = (null == d ? void 0 : d.getChildByName("hula_hoop_2")) ?? null, this.heart = (null == d ? void 0 : d.getChildByName("heart")) ?? null, this.fire = (null == (s = this.dog1) ? void 0 : s.getChildByName("fire")) ?? (null == d ? void 0 : d.getChildByName("fire")) ?? null, this.star1 = (null == d ? void 0 : d.getChildByName("star1")) ?? null, this.star2 = (null == d ? void 0 : d.getChildByName("star2")) ?? null, null != (o = this.brick1) && o.isValid && (this.brick1BasePosition = this.brick1.position.clone()), this.windowTouch = (null == (h = this.swipsRoot) ? void 0 : h.getChildByName("window_touch")) ?? (null == (l = this.swipsRoot) ? void 0 : l.getChildByName("window _touch")) ?? null, null != (a = this.bgLightNode) && a.isValid && (this.bgLightBasePosition = this.bgLightNode.position.clone()), this.itemNodes.clear(), this.zoneNodes.clear(), B.forEach(t => {
      if (t.itemNodeName && d) {
        const e = d.getChildByName(t.itemNodeName);
        e ? this.itemNodes.set(t.id, e) : console.warn(`[Level_22] missing item node ${t.itemNodeName}`);
      }
      if ("drag" === t.kind) {
        var e;
        const i = (null == (e = this.dragsRoot) ? void 0 : e.getChildByName(t.zoneNodeName)) ?? null;
        i ? this.zoneNodes.set(t.id, i) : console.warn(`[Level_22] missing drag zone ${t.zoneNodeName}`);
      } else this.windowTouch && this.zoneNodes.set(t.id, this.windowTouch);
    }), this.gameNode || console.warn("[Level_22] missing UIPanel/gameNode"), this.windowTouch || console.warn("[Level_22] missing swips/window_touch (or window _touch)");
  }
  stopTrackedTweens() {
    [this.bgLightNode, this.dog1, this.hammer, this.heart, this.brick1, this.hulaHoop1, this.hulaHoop2].forEach(t => {
      null != t && t.isValid && __rea_outer_b(t);
    });
  }
  isPointInsideNode(t, e) {
    if (null == t || !t.isValid || !t.activeInHierarchy) return !1;
    const i = t.getComponent(__rea_outer_o);
    return !!i && i.getBoundingBoxToWorld().contains(e);
  }
  getTouchWorldPoint(t) {
    const e = t.getUILocation();
    return new __rea_outer_l(e.x, e.y);
  }
  getTouchLocalPosition(t, e) {
    const s = t.getUILocation(),
      h = e.getComponent(__rea_outer_o);
    return h ? h.convertToNodeSpaceAR(new __rea_outer_i(s.x, s.y, 0)) : __rea_outer_i.ZERO.clone();
  }
  calculateTouchOffset(t, e, s) {
    const o = this.getTouchLocalPosition(t, s);
    return new __rea_outer_i(e.position.x - o.x, e.position.y - o.y, 0);
  }
  setDragNodePositionFromTouch(t, e, i, s) {
    const o = this.getTouchLocalPosition(t, i);
    e.setPosition(o.x + s.x, o.y + s.y, e.position.z);
  }
  setNodeActive(t, e) {
    null != t && t.isValid && (t.active = e);
  }
}) || y;
__rea_outer_e._RF.pop();
export { __recovered_export_0 as default };
