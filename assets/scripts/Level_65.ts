// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_65.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { Vec3 as __rea_outer_i } from "cc";
import { tween as __rea_outer_s } from "cc";
import { Node as __rea_outer_n } from "cc";
import { UITransform as __rea_outer_o } from "cc";
import { Vec2 as __rea_outer_h } from "cc";
import { Label as __rea_outer_a } from "cc";
import { _decorator as __rea_outer_d } from "cc";
import { default as __rea_outer_r } from "./LevelBase";
import { default as __rea_outer_l } from "./clue-hit-tester";
import { default as __rea_outer_c } from "./AudioManager";
import { I18nController as __rea_outer_u } from "./i18n-controller";
import { UIManager as __rea_outer_g } from "./ui-manager";
import { UILayer as __rea_outer_p } from "./ui-layer";
import { UIHint as __rea_outer_N } from "./uihint";
import { UIFail as __rea_outer_m } from "./uifail";
import { GameController as __rea_outer_v } from "./GameController";
import { setNodeOpacity as __rea_outer_f } from "./CocosCompat";
import { stopAllTweens as __rea_outer_S } from "./CocosCompat";
let __recovered_export_0;
var _;
__rea_outer_t._RF.push({}, "b65c04RZaFNGJ5KEfZeAABl", "Level_65", void 0);
const {
    ccclass: T
  } = __rea_outer_d,
  y = "level65_2",
  b = 10,
  I = new __rea_outer_i(-96.5, 179.5, 0),
  w = new __rea_outer_i(55.5, -380, 0),
  k = new __rea_outer_i(-183.138, 566.61, 0),
  D = new __rea_outer_i(-163.757, 525.91, 0),
  C = new __rea_outer_i(12.61, -12.882, 0),
  P = new __rea_outer_i(41.681, -140.796, 0),
  A = new __rea_outer_i(-194.5, -413, 0),
  V = ["level65_hint1", "level65_hint2", "level65_hint3", "level65_hint4", "level65_hint5", "level65_hint6", "level65_hint7", "level65_hint8", "level65_hint9", "level65_hint10"],
  E = [{
    id: 1,
    kind: "direct",
    sourceName: "walking_stick",
    heldName: null,
    rungName: "walking_stick_1",
    voiceKey: "65_2",
    hotspotPath: "clicks/touchwalking_stick"
  }, {
    id: 2,
    kind: "direct",
    sourceName: "light",
    heldName: null,
    rungName: "light_1",
    voiceKey: "65_3"
  }, {
    id: 3,
    kind: "direct",
    sourceName: "speed_bump",
    heldName: null,
    rungName: "speed_bump_1",
    voiceKey: "65_4"
  }, {
    id: 4,
    kind: "direct",
    sourceName: "fire_hydrant",
    heldName: null,
    rungName: "fire_hydrant_1",
    voiceKey: "65_5"
  }, {
    id: 5,
    kind: "direct",
    sourceName: "baguette",
    heldName: null,
    rungName: "baguette_1",
    voiceKey: "65_6"
  }, {
    id: 6,
    kind: "direct",
    sourceName: "bone",
    heldName: null,
    rungName: "bone_1",
    voiceKey: "65_7"
  }, {
    id: 7,
    kind: "direct",
    sourceName: "fried_chicken",
    heldName: null,
    rungName: "fried_chicken_1",
    voiceKey: "65_8"
  }, {
    id: 8,
    kind: "dog",
    sourceName: "dog",
    heldName: null,
    rungName: "dog_1",
    voiceKey: "65_9"
  }, {
    id: 9,
    kind: "morph",
    sourceName: "brand",
    heldName: "brand_1",
    rungName: "brand_2",
    voiceKey: "65_10"
  }, {
    id: 10,
    kind: "direct",
    sourceName: "water_pipe",
    heldName: null,
    rungName: "water_pipe_1",
    voiceKey: "65_11"
  }],
  O = ["character_hand", "brand_1", "walking_stick_1", "light_1", "speed_bump_1", "fire_hydrant_1", "baguette_1", "bone_1", "fried_chicken_1", "dog_1", "brand_2", "water_pipe_1", "man_end", "qi"],
  x = ["bg", "speed_bump", "character", "character_hand_1", "fried_chicken", "brand", "water_pipe", "intestine", "intestine_1", "intestine_2", "walking_stick", "dog", "bone", "Black_people", "fire_hydrant", "baguette", "light", "man"];
__recovered_export_0 = T("Level_65")(_ = class extends __rea_outer_r {
  constructor(...e) {
    super(...e), this.phase = 0, this.winstate = !1, this.gameNode = null, this.backBgNode = null, this.promptBoxNode = null, this.promptLabel = null, this.feetTouchNode = null, this.manNode = null, this.man1Node = null, this.man2Node = null, this.man3Node = null, this.manEndNode = null, this.shiverNode = null, this.shiver1Node = null, this.qiNode = null, this.dogNode = null, this.intestineNode = null, this.intestineTouchNode = null, this.walkingStickTouchNode = null, this.brandNode = null, this.brand1Node = null, this.characterHandNode = null, this.characterHand1Node = null, this.nodeByName = new Map(), this.nodeOrigins = new Map(), this.siblingOrigins = new Map(), this.homeParents = new Map(), this.completedSteps = new Set(), this.flyingStepIds = new Set(), this.rungSlotPositions = [], this.manStepPositions = [], this.descentQueue = [], this.activeDragState = null, this.hasCalmedDog = !1, this.isDogShaking = !1, this.isDescending = !1, this.descentCount = 0, this.placedSlotCount = 0, this.shiverFrameIndex = 0, this.voiceToken = 0, this.onTouchStart = e => {
      if (!this.canAcceptTouch()) return;
      const t = this.hitTestPointer(this.getTouchWorldPoint(e));
      t && (this.beginDrag(t, e), e.propagationStopped = !0);
    }, this.onTouchMove = e => {
      if (!this.activeDragState || !this.canAcceptTouch()) return;
      const t = this.activeDragState;
      this.setDragNodePositionFromTouch(e, t.dragNode, t.touchOffset), this.tryMorphBrand(t, e), e.propagationStopped = !0;
    }, this.onTouchEnd = e => {
      if (1 !== this.phase) return void (this.activeDragState = null);
      if (!this.activeDragState) return;
      const t = this.activeDragState;
      this.activeDragState = null, this.handleItemDrop(t), e.propagationStopped = !0;
    }, this.restoreStandingLegsDuringDescent = () => {
      this.isValid && this.showStandingLegs();
    }, this.tickShiver = () => {
      !this.isValid || this.phase >= 2 || (this.shiverFrameIndex = 1 - this.shiverFrameIndex, this.setNodeActive(this.shiverNode, 0 === this.shiverFrameIndex), this.setNodeActive(this.shiver1Node, 1 === this.shiverFrameIndex));
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.allItemNum = b, this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.enterPhase0();
  }
  onDestroy() {
    this.cleanupRuntime(!this.shouldSkipStopLevelAudio()), super.onDestroy();
  }
  handleTimeExpired() {
    return !!(this.phase >= 2 || this.winstate);
  }
  showHint() {
    if (1 !== this.phase) return;
    const e = this.resolveHintKey();
    if (!e) return;
    const t = __rea_outer_u.getInstance().getKey(e);
    __rea_outer_g.getInstance().showView(__rea_outer_N, void 0, {
      body: t
    });
  }
  getGameProgressSnapshot() {
    const e = this.hasInstallNum;
    return {
      progress: e / b,
      label: `${e}/10`
    };
  }
  markAllTasksCompleted() {
    for (let e = 1; e <= b; e += 1) this.completedSteps.add(e);
    this.hasInstallNum = b, this.hasCalmedDog = !0;
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.activeDragState = null, this.hasCalmedDog = !1, this.isDogShaking = !1, this.isDescending = !1, this.descentCount = 0, this.placedSlotCount = 0, this.shiverFrameIndex = 0, this.voiceToken = 0, this.completedSteps.clear(), this.flyingStepIds.clear(), this.descentQueue.length = 0, this.hasInstallNum = 0, this.allItemNum = b, __rea_outer_c.stopVoice(), __rea_outer_c.stopOneEffect(y);
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_c.playMusic("bgm2", !0, .5), this.buildRungSlots(), this.buildManSteps(), this.applyInitialVisibility(), this.startShiverSwap(), this.setInputBlocked(!0), __rea_outer_v.getInstance().refreshGameProgress(), this.playDialogue("65_1", !0, () => {
      this.isValid && 0 === this.phase && this.enterPhase1();
    });
  }
  skipOpeningToPlay() {
    return 0 === this.phase && (this.voiceToken += 1, this.stopOpeningDialogue(), this.enterPhase1(), !0);
  }
  enterPhase1() {
    0 === this.phase && (this.phase = 1, this.hidePrompt(), this.setInputBlocked(!1), this.registerInteractionHandlers(), __rea_outer_v.getInstance().refreshGameProgress());
  }
  enterPhase2Success() {
    this.phase >= 2 || this.winstate || (this.phase = 2, this.winstate = !0, this.activeDragState = null, this.unregisterInteractionHandlers(), this.setInputBlocked(!0), this.stopDogShake(), __rea_outer_v.getInstance().pauseTimer(), this.beginGroundDescent());
  }
  beginTimeoutFail() {
    this.phase = 2, this.winstate = !1, this.cleanupRuntime(!0), __rea_outer_v.getInstance().pauseTimer(), __rea_outer_g.getInstance().showView(__rea_outer_m, __rea_outer_p.WIN_ANIMATION);
  }
  beginGroundDescent() {
    this.tweenManTo(P, () => {
      this.isValid && 2 === this.phase && (this.showStandingLegs(), this.presentLanding());
    });
  }
  presentLanding() {
    var e;
    this.stopShiverSwap(), this.setNodeActive(this.manNode, !1), this.setNodeActive(this.shiverNode, !1), this.setNodeActive(this.shiver1Node, !1), null != (e = this.manEndNode) && e.isValid && (this.manEndNode.setPosition(P), this.setNodeActive(this.manEndNode, !0), this.bringNodeToFront(this.manEndNode), this.stopTweenIfValid(this.manEndNode), __rea_outer_s(this.manEndNode).to(.45, {
      position: A
    }).start()), this.restoreOrigin(this.qiNode), this.setNodeActive(this.qiNode, !0), this.bringNodeToFront(this.qiNode), this.playDialogue("65_12", !0, () => {
      this.isValid && 2 === this.phase && this.showLevelSuccess(0);
    });
  }
  applyInitialVisibility() {
    var e;
    this.restoreCachedNodes(), this.setNodeActive(this.gameNode, !0), x.forEach(e => {
      this.setNodeActive(this.getGameChild(e), !0);
    }), O.forEach(e => {
      this.setNodeActive(this.getGameChild(e), !1);
    }), this.setNodeActive(this.manNode, !0), this.showStandingLegs(), null != (e = this.manNode) && e.isValid && this.manNode.setPosition(k), this.prepareLadderTouch(), this.setNodeActive(this.getGameChild("drags"), !1), this.setNodeActive(this.getGameChild("swips"), !1), this.setNodeActive(this.node.getChildByPath("UIPanel/click_root"), !1), this.setNodeActive(this.node.getChildByPath("UIPanel/demo"), !1), this.setNodeActive(this.node.getChildByPath("UIPanel/bubble"), !1);
  }
  prepareLadderTouch() {
    this.prepareDragHotspot(this.feetTouchNode), this.prepareDragHotspot(this.intestineTouchNode), this.prepareDragHotspot(this.walkingStickTouchNode);
  }
  prepareDragHotspot(e) {
    null != e && e.isValid && (e.active = !0, __rea_outer_f(e, 0));
  }
  buildRungSlots() {
    this.rungSlotPositions.length = 0;
    for (let e = 0; e < 10; e += 1) {
      const t = e / 9;
      this.rungSlotPositions.push(new __rea_outer_i(I.x + (w.x - I.x) * t, I.y + (w.y - I.y) * t, 0));
    }
  }
  buildManSteps() {
    this.manStepPositions.length = 0, this.manStepPositions.push(k.clone());
    for (let e = 1; e <= b; e += 1) {
      const t = (e - 1) / 9;
      this.manStepPositions.push(new __rea_outer_i(D.x + (C.x - D.x) * t, D.y + (C.y - D.y) * t, 0));
    }
  }
  registerInteractionHandlers() {
    this.node.on(__rea_outer_n.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(__rea_outer_n.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(__rea_outer_n.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(__rea_outer_n.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
  }
  unregisterInteractionHandlers() {
    var e;
    null != (e = this.node) && e.isValid && (this.node.off(__rea_outer_n.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(__rea_outer_n.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(__rea_outer_n.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(__rea_outer_n.EventType.TOUCH_CANCEL, this.onTouchEnd, this));
  }
  canAcceptTouch() {
    var e;
    return 1 === this.phase && !this.winstate && !0 !== (null == (e = this.backBgNode) ? void 0 : e.active);
  }
  hitTestPointer(e) {
    const t = [];
    return this.pushIntestineHit(t, e), E.forEach(i => {
      var s;
      if (!this.canStartStep(i.id)) return;
      const n = this.getGameChild(i.sourceName),
        o = i.hotspotPath ? (null == (s = this.gameNode) ? void 0 : s.getChildByPath(i.hotspotPath)) ?? null : n;
      this.pushDragHit(t, i.id, i, i.kind, n, n, e, o);
    }), 0 === t.length ? null : (t.sort((e, t) => e.area - t.area), t[0]);
  }
  pushIntestineHit(e, t) {
    const i = this.intestineNode;
    null != i && i.activeInHierarchy && !this.hasCalmedDog && this.pushDragHit(e, "intestine", null, "intestine", i, i, t, this.intestineTouchNode);
  }
  pushDragHit(e, t, i, s, n, o, h, a = o) {
    null != n && n.isValid && null != o && o.isValid && this.isPointInsideNode(a, h) && e.push({
      stepId: t,
      definition: i,
      kind: s,
      dragNode: n,
      sourceNode: o,
      area: this.getNodeArea(a ?? o)
    });
  }
  canStartStep(e) {
    return !this.completedSteps.has(e) && !this.flyingStepIds.has(e) && (8 !== e || this.hasCalmedDog);
  }
  beginDrag(e, t) {
    var i;
    const s = e.sourceNode;
    if (null == s || !s.isValid || null == (i = this.gameNode) || !i.isValid) return;
    this.bringNodeToFront(s);
    const n = this.calculateTouchOffset(t, s);
    this.setDragNodePositionFromTouch(t, s, n), this.activeDragState = {
      stepId: e.stepId,
      definition: e.definition,
      kind: e.kind,
      dragNode: s,
      sourceNode: s,
      touchOffset: n,
      originWorldPosition: s.worldPosition.clone(),
      hasMorphed: !1
    };
  }
  tryMorphBrand(e, t) {
    var s;
    if ("morph" !== e.kind || e.hasMorphed || null == (s = this.brand1Node) || !s.isValid) return;
    if (__rea_outer_i.distance(e.dragNode.worldPosition, e.originWorldPosition) < 20) return;
    const n = e.dragNode.worldPosition.clone();
    this.setNodeActive(this.brandNode, !1), this.restoreOrigin(this.brandNode), this.placeNodeAtWorld(this.brand1Node, n), this.setNodeActive(this.brand1Node, !0), this.bringNodeToFront(this.brand1Node), e.dragNode = this.brand1Node, e.hasMorphed = !0, e.touchOffset = this.calculateTouchOffset(t, this.brand1Node), this.setDragNodePositionFromTouch(t, this.brand1Node, e.touchOffset);
  }
  handleItemDrop(e) {
    if (!this.canAcceptTouch()) return void this.restoreDrag(e);
    if ("intestine" === e.kind) return void this.handleIntestineDrop(e);
    const t = e.definition;
    !t || this.completedSteps.has(t.id) || this.flyingStepIds.has(t.id) ? this.restoreDrag(e) : this.isNodeCenterInside(e.dragNode, this.feetTouchNode) ? this.beginFlyIn(e, t) : this.restoreDrag(e);
  }
  handleIntestineDrop(e) {
    this.completedSteps.has(6) && this.isNodeCenterInside(e.dragNode, this.dogNode) ? (this.setNodeActive(e.dragNode, !1), this.restoreOrigin(e.dragNode), this.restoreSibling(e.dragNode), this.hasCalmedDog = !0, this.stopDogShake(), __rea_outer_c.playEffect_1("level65_3")) : this.restoreDrag(e);
  }
  restoreDrag(e) {
    if ("morph" === e.kind) return this.setNodeActive(this.brand1Node, !1), this.restoreOrigin(this.brand1Node), this.restoreSibling(this.brand1Node), this.restoreOrigin(this.brandNode), this.restoreSibling(this.brandNode), void this.setNodeActive(this.brandNode, !0);
    this.restoreOrigin(e.sourceNode), this.restoreSibling(e.sourceNode), this.setNodeActive(e.sourceNode, !0), e.dragNode !== e.sourceNode && (this.setNodeActive(e.dragNode, !1), this.restoreOrigin(e.dragNode), this.restoreSibling(e.dragNode));
  }
  beginFlyIn(e, t) {
    const i = this.getGameChild(t.rungName),
      n = this.rungSlotPositions[this.placedSlotCount];
    if (null == i || !i.isValid || !n) return void this.restoreDrag(e);
    this.placedSlotCount += 1, this.flyingStepIds.add(t.id), __rea_outer_c.playEffect_1("level65_1");
    const o = e.dragNode;
    this.bringNodeToFront(o), this.stopTweenIfValid(o), __rea_outer_s(o).to(.25, {
      position: n.clone()
    }).call(() => {
      this.isValid && 1 === this.phase && this.finishFlyIn(t, o, i, n);
    }).start();
  }
  finishFlyIn(e, t, i, s) {
    this.flyingStepIds.delete(e.id), this.setNodeActive(t, !1), this.restoreOrigin(t), this.restoreSibling(t);
    const n = this.getGameChild(e.sourceName);
    n && n !== t && (this.setNodeActive(n, !1), this.restoreOrigin(n), this.restoreSibling(n)), i.setPosition(s), this.setNodeActive(i, !0), this.completeStep(e.id), this.playDialogue(e.voiceKey, !0), this.enqueueDescent(), this.applyStepExtras(e.id);
  }
  applyStepExtras(e) {
    6 !== e ? 7 === e && (this.setNodeActive(this.characterHand1Node, !1), this.setNodeActive(this.characterHandNode, !0)) : this.startDogShake();
  }
  completeStep(e) {
    this.completedSteps.has(e) || (this.completedSteps.add(e), this.hasInstallNum = this.completedSteps.size, __rea_outer_v.getInstance().refreshGameProgress());
  }
  enqueueDescent() {
    this.descentCount += 1;
    const e = this.manStepPositions[this.descentCount];
    e && (this.descentQueue.push(e.clone()), this.isDescending || this.playNextDescent());
  }
  playNextDescent() {
    const e = this.descentQueue.shift();
    if (!e) return this.isDescending = !1, void this.tryEnterPhase2();
    this.isDescending = !0, this.tweenManTo(e, () => {
      if (this.isValid) {
        if (1 !== this.phase) return this.isDescending = !1, void (this.descentQueue.length = 0);
        this.showStandingLegs(), this.playNextDescent();
      }
    });
  }
  tryEnterPhase2() {
    1 === this.phase && this.completedSteps.size >= b && !this.isDescending && this.enterPhase2Success();
  }
  tweenManTo(e, t) {
    const i = this.manNode;
    null != i && i.isValid ? (this.showSteppingLegs(), this.unschedule(this.restoreStandingLegsDuringDescent), this.scheduleOnce(this.restoreStandingLegsDuringDescent, .18), this.stopTweenIfValid(i), __rea_outer_s(i).to(.45, {
      position: e
    }).call(t).start()) : t();
  }
  showSteppingLegs() {
    this.setNodeActive(this.man1Node, !1), this.setNodeActive(this.man2Node, !0), this.setNodeActive(this.man3Node, !1);
  }
  showStandingLegs() {
    this.setNodeActive(this.man1Node, !0), this.setNodeActive(this.man2Node, !1), this.setNodeActive(this.man3Node, !0);
  }
  startDogShake() {
    const e = this.dogNode;
    if (this.isDogShaking || null == e || !e.isValid) return;
    this.isDogShaking = !0;
    const t = this.nodeOrigins.get(e) ?? e.position.clone();
    this.stopTweenIfValid(e), __rea_outer_s(e).to(.08, {
      position: new __rea_outer_i(t.x + 10, t.y, t.z)
    }).to(.08, {
      position: new __rea_outer_i(t.x - 10, t.y, t.z)
    }).union().repeatForever().start(), __rea_outer_c.playEffect_1(y, void 0, !0);
  }
  stopDogShake() {
    this.isDogShaking = !1, __rea_outer_c.stopOneEffect(y);
    const e = this.dogNode;
    null != e && e.isValid && (this.stopTweenIfValid(e), this.restoreOrigin(e));
  }
  startShiverSwap() {
    this.stopShiverSwap(), this.shiverFrameIndex = 0, this.setNodeActive(this.shiverNode, !0), this.setNodeActive(this.shiver1Node, !1), this.schedule(this.tickShiver, .15);
  }
  stopShiverSwap() {
    this.unschedule(this.tickShiver);
  }
  playDialogue(e, t, i) {
    this.voiceToken += 1;
    const s = this.voiceToken;
    this.showPrompt(e), __rea_outer_c.stopVoice(), __rea_outer_c.playVoice(e);
    let n = !1;
    const o = () => {
        !n && this.isValid && s === this.voiceToken && (n = !0, this.unschedule(h), t && this.hidePrompt(), null == i || i());
      },
      h = () => {
        o();
      },
      a = this.resolveDialogueHoldSeconds(e);
    this.scheduleOnce(o, a), this.scheduleOnce(h, Math.max(8, a + .5));
  }
  resolveDialogueHoldSeconds(e) {
    var t;
    const i = (null == (t = __rea_outer_c.audioMap.get(e)) ? void 0 : t.getDuration()) ?? 0;
    return i > .1 ? i : 2.5;
  }
  showPrompt(e) {
    this.promptLabel && (this.promptLabel.string = this.resolveI18nText(e)), this.setNodeActive(this.promptBoxNode, !0);
  }
  hidePrompt() {
    this.setNodeActive(this.promptBoxNode, !1);
  }
  resolveI18nText(e) {
    const t = __rea_outer_u.getInstance().getKey(e);
    return t && t !== e ? t : e;
  }
  resolveHintKey() {
    for (let e = 1; e <= b; e += 1) if (!this.completedSteps.has(e)) return V[e - 1];
    return null;
  }
  cleanupRuntime(e) {
    this.unscheduleAllCallbacks(), this.unregisterInteractionHandlers(), this.voiceToken += 1, this.activeDragState = null, this.stopDogShake(), this.stopShiverSwap(), e && __rea_outer_c.stopVoice(), this.stopAllGameplayTweens(), this.descentQueue.length = 0, this.isDescending = !1;
  }
  stopAllGameplayTweens() {
    this.nodeByName.forEach(e => {
      this.stopTweenIfValid(e);
    }), this.stopTweenIfValid(this.manNode), this.stopTweenIfValid(this.manEndNode), this.stopTweenIfValid(this.dogNode);
  }
  stopTweenIfValid(e) {
    null != e && e.isValid && __rea_outer_S(e);
  }
  setInputBlocked(e) {
    this.setNodeActive(this.backBgNode, e);
  }
  bringNodeToFront(e) {
    null != e && e.isValid && e.parent && e.setSiblingIndex(e.parent.children.length - 1);
  }
  placeNodeAtWorld(e, t) {
    const i = this.gameNode ?? e.parent;
    if (null == i || !i.isValid) return;
    const s = i.getComponent(__rea_outer_o);
    s && e.setPosition(s.convertToNodeSpaceAR(t));
  }
  isNodeCenterInside(e, t) {
    return __rea_outer_l.isDragNearTarget(e, t);
  }
  isPointInsideNode(e, t) {
    if (null == e || !e.isValid || !e.activeInHierarchy) return !1;
    const i = e.getComponent(__rea_outer_o);
    return !!i && i.getBoundingBoxToWorld().contains(t);
  }
  getNodeArea(e) {
    const t = null == e ? void 0 : e.getComponent(__rea_outer_o);
    return t ? Math.max(1, t.width * t.height) : Number.MAX_SAFE_INTEGER;
  }
  getTouchWorldPoint(e) {
    const t = e.getUILocation();
    return new __rea_outer_h(t.x, t.y);
  }
  getTouchLocalPosition(e, t) {
    const s = e.getUILocation(),
      n = t.getComponent(__rea_outer_o);
    return n ? n.convertToNodeSpaceAR(new __rea_outer_i(s.x, s.y, 0)) : __rea_outer_i.ZERO.clone();
  }
  calculateTouchOffset(e, t) {
    const s = this.gameNode ?? t.parent;
    if (null == s || !s.isValid) return __rea_outer_i.ZERO.clone();
    const n = this.getTouchLocalPosition(e, s);
    return new __rea_outer_i(t.position.x - n.x, t.position.y - n.y, 0);
  }
  setDragNodePositionFromTouch(e, t, i) {
    const s = this.gameNode ?? t.parent;
    if (null == s || !s.isValid) return;
    const n = this.getTouchLocalPosition(e, s);
    t.setPosition(n.x + i.x, n.y + i.y, t.position.z);
  }
  restoreCachedNodes() {
    this.homeParents.forEach((e, t) => {
      t.isValid && e.isValid && t.parent !== e && t.setParent(e);
    }), this.nodeOrigins.forEach((e, t) => {
      t.isValid && (this.stopTweenIfValid(t), t.setPosition(e));
    }), this.siblingOrigins.forEach((e, t) => {
      t.isValid && t.parent && t.setSiblingIndex(e);
    });
  }
  restoreOrigin(e) {
    if (null == e || !e.isValid) return;
    const t = this.nodeOrigins.get(e);
    t && e.setPosition(t);
  }
  restoreSibling(e) {
    if (null == e || !e.isValid || !e.parent) return;
    const t = this.siblingOrigins.get(e);
    void 0 !== t && e.setSiblingIndex(t);
  }
  setNodeActive(e, t) {
    null != e && e.isValid && (e.active = t);
  }
  getGameChild(e) {
    var t, i;
    return this.nodeByName.get(e) ?? (null == (t = this.gameNode) ? void 0 : t.getChildByName(e)) ?? (null == (i = this.manNode) ? void 0 : i.getChildByName(e)) ?? null;
  }
  cacheNode(e) {
    null != e && e.isValid && (this.nodeByName.set(e.name, e), this.nodeOrigins.set(e, e.position.clone()), this.siblingOrigins.set(e, e.getSiblingIndex()), e.parent && this.homeParents.set(e, e.parent));
  }
  resolveReferences() {
    var e, t, i, s, n, o, h, d, r, l, c;
    this.gameNode = this.node.getChildByPath("UIPanel/gameNode"), this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.nodeByName.clear(), this.nodeOrigins.clear(), this.siblingOrigins.clear(), this.homeParents.clear(), null == (e = this.gameNode) || e.children.forEach(e => {
      this.cacheNode(e);
    }), this.promptBoxNode = this.getGameChild("prompt_box"), this.promptLabel = (null == (t = this.promptBoxNode) || null == (t = t.getChildByName("Label")) ? void 0 : t.getComponent(__rea_outer_a)) ?? null, this.feetTouchNode = (null == (i = this.gameNode) ? void 0 : i.getChildByPath("clicks/touchiman")) ?? null, this.intestineTouchNode = (null == (s = this.gameNode) ? void 0 : s.getChildByPath("clicks/touchintestine")) ?? null, this.walkingStickTouchNode = (null == (n = this.gameNode) ? void 0 : n.getChildByPath("clicks/touchwalking_stick")) ?? null, this.manNode = this.getGameChild("man"), null == (o = this.manNode) || o.children.forEach(e => {
      this.cacheNode(e);
    }), this.man1Node = (null == (h = this.manNode) ? void 0 : h.getChildByName("man_1")) ?? null, this.man2Node = (null == (d = this.manNode) ? void 0 : d.getChildByName("man_2")) ?? null, this.man3Node = (null == (r = this.manNode) ? void 0 : r.getChildByName("man_3")) ?? null, this.shiverNode = (null == (l = this.manNode) ? void 0 : l.getChildByName("shiver")) ?? null, this.shiver1Node = (null == (c = this.manNode) ? void 0 : c.getChildByName("shiver_1")) ?? null, this.manEndNode = this.getGameChild("man_end"), this.qiNode = this.getGameChild("qi"), this.dogNode = this.getGameChild("dog"), this.intestineNode = this.getGameChild("intestine"), this.brandNode = this.getGameChild("brand"), this.brand1Node = this.getGameChild("brand_1"), this.characterHandNode = this.getGameChild("character_hand"), this.characterHand1Node = this.getGameChild("character_hand_1"), this.warnIfMissing();
  }
  warnIfMissing() {
    [["gameNode", this.gameNode], ["clicks/touchiman", this.feetTouchNode], ["clicks/touchintestine", this.intestineTouchNode], ["clicks/touchwalking_stick", this.walkingStickTouchNode], ["prompt_box", this.promptBoxNode], ["man", this.manNode], ["man/man_1", this.man1Node], ["man/man_2", this.man2Node], ["man/man_3", this.man3Node], ["man/shiver", this.shiverNode], ["man/shiver_1", this.shiver1Node], ["dog", this.dogNode], ["intestine", this.intestineNode], ["brand", this.brandNode]].forEach(([e, t]) => {
      t || console.warn(`[Level_65] missing ${e}`);
    });
  }
}) || _;
__rea_outer_t._RF.pop();
export { __recovered_export_0 as default };
