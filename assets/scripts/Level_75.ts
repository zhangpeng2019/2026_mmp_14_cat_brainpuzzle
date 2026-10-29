// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_75.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_e } from "cc";
import { Node as __rea_outer_i } from "cc";
import { Vec2 as __rea_outer_s } from "cc";
import { UITransform as __rea_outer_o } from "cc";
import { Rect as __rea_outer_n } from "cc";
import { Vec3 as __rea_outer_h } from "cc";
import { Label as __rea_outer_r } from "cc";
import { _decorator as __rea_outer_l } from "cc";
import { default as __rea_outer_a } from "./LevelBase";
import { default as __rea_outer_c } from "./clue-hit-tester";
import { default as __rea_outer_d } from "./AudioManager";
import { I18nController as __rea_outer_g } from "./i18n-controller";
import { UIManager as __rea_outer_p } from "./ui-manager";
import { UIHint as __rea_outer_u } from "./uihint";
import { GameController as __rea_outer_N } from "./GameController";
import { setNodeOpacity as __rea_outer_m } from "./CocosCompat";
import { stopAllTweens as __rea_outer_v } from "./CocosCompat";
let __recovered_export_0;
var f;
__rea_outer_e._RF.push({}, "74b141/JdZL3q1S5NJuTLYZ", "Level_75", void 0);
const {
    ccclass: y
  } = __rea_outer_l,
  k = ["fight_1", "fight_2", "fight_3"],
  _ = ["girl2", "girl1", "girl3", "girl4", "girl5", "girl7", "girl6_1", "wall_crack1"],
  S = ["bg_1", "bg", "wall_crack", "girl6", "bed", "hammer", "door", "girl5", "girl4", "girl3", "girl2", "时间"],
  I = ["bg1", "wall_crack1", "girl6_1", "girl6_2", "girl6_3", "girl7", "girl7_1", "door1", "girl5_1", "girl5_2", "girl4_1", "girl3_1", "girl1", "girl1_1", "girl2_1", "girl2_2", "fight", "fight_1", "fight_2", "fight_3", "prompt_box"],
  C = {
    1: "75_2",
    2: "75_3",
    3: "75_4",
    4: "75_5",
    5: "75_6",
    6: "75_7",
    7: "75_8",
    8: "75_9"
  },
  T = {
    girl5: 1,
    girl7: 2,
    girl4: 3,
    girl3: 4,
    girl2: 5,
    girl1: 6,
    girl6_1: 7,
    wall_crack1: 8
  };
__recovered_export_0 = y("Level_75")(f = class extends __rea_outer_a {
  constructor(...t) {
    super(...t), this.phase = 0, this.winstate = !1, this.gameNode = null, this.backBgNode = null, this.promptBoxNode = null, this.promptLabel = null, this.hammerCarry = null, this.clocks = [], this.nodeByName = new Map(), this.completedSteps = new Set(), this.dragState = null, this.pointerStart = null, this.voiceToken = 0, this.phoneBubbleToken = 0, this.isInputBlocked = !1, this.isDoorOpen = !1, this.isBunkOpen = !1, this.isUnderBedOpen = !1, this.isWallOpen = !1, this.isFightPlaying = !1, this.fightFrameIndex = 0, this.onFightFrame = () => {
      this.isValid && this.isFightPlaying && (this.fightFrameIndex = (this.fightFrameIndex + 1) % k.length, this.applyFightFrame());
    }, this.onFightDustEnd = () => {
      this.isValid && this.stopFightDust();
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.allItemNum = 8, this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.enterPhase0();
  }
  onDestroy() {
    this.cleanupRuntime(!this.shouldSkipStopLevelAudio()), super.onDestroy();
  }
  handleTimeExpired() {
    return !1;
  }
  showHint() {
    if (1 !== this.phase || this.isInputBlocked) return;
    const t = this.getLowestUnfinishedStep();
    if (null === t) return;
    const e = __rea_outer_g.getInstance().getKey(`level75_hint${t}`);
    __rea_outer_p.getInstance().showView(__rea_outer_u, void 0, {
      body: e
    });
  }
  getGameProgressSnapshot() {
    const t = Math.min(this.hasInstallNum, 8);
    return {
      progress: t / 8,
      label: `${t}/8`
    };
  }
  markAllTasksCompleted() {
    this.hasInstallNum = 8;
    for (let t = 1; t <= 8; t += 1) this.completedSteps.add(t);
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.completedSteps.clear(), this.dragState = null, this.pointerStart = null, this.voiceToken += 1, this.phoneBubbleToken += 1, this.isInputBlocked = !1, this.isDoorOpen = !1, this.isBunkOpen = !1, this.isUnderBedOpen = !1, this.isWallOpen = !1, this.isFightPlaying = !1, this.fightFrameIndex = 0, this.hasInstallNum = 0, this.allItemNum = 8, this.unscheduleAllCallbacks(), __rea_outer_d.stopVoice(), this.stopFightDust(), this.restoreCarries();
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_d.playMusic("bgm4", !0, .5), __rea_outer_N.getInstance().pauseTimer(), this.applyInitialVisibility(), this.registerTouchHandlers(), this.setInputBlocked(!0), __rea_outer_N.getInstance().refreshGameProgress(), this.playDialogue("75_1", () => {
      this.isValid && 0 === this.phase && this.enterPhase1();
    });
  }
  skipOpeningToPlay() {
    return 0 === this.phase && (this.voiceToken += 1, this.stopOpeningDialogue(), this.enterPhase1(), !0);
  }
  enterPhase1() {
    0 === this.phase && (this.phase = 1, this.hidePrompt(), this.setInputBlocked(!1), __rea_outer_N.getInstance().resumeTimer(), __rea_outer_N.getInstance().refreshGameProgress());
  }
  enterPhase2() {
    this.phase >= 2 || this.winstate || (this.phase = 2, this.winstate = !0, this.setInputBlocked(!0), __rea_outer_N.getInstance().pauseTimer());
  }
  applyInitialVisibility() {
    this.setNodeActive(this.gameNode, !0), S.forEach(t => {
      this.setNodeActive(this.getNode(t), !0);
    }), I.forEach(t => {
      this.setNodeActive(this.getNode(t), !1);
    }), this.setNodeActive(this.getNode("drags"), !1), this.setNodeActive(this.getNode("swips"), !1), this.setNodeActive(this.node.getChildByPath("UIPanel/click_root"), !1), this.setNodeActive(this.node.getChildByPath("UIPanel/demo"), !1), this.setNodeActive(this.backBgNode, !1);
  }
  registerTouchHandlers() {
    this.node.on(__rea_outer_i.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(__rea_outer_i.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(__rea_outer_i.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(__rea_outer_i.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
  }
  unregisterTouchHandlers() {
    var t;
    null != (t = this.node) && t.isValid && (this.node.off(__rea_outer_i.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(__rea_outer_i.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(__rea_outer_i.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(__rea_outer_i.EventType.TOUCH_CANCEL, this.onTouchCancel, this));
  }
  onTouchStart(t) {
    if (!this.canAcceptInput() || this.dragState) return;
    const e = t.getUILocation();
    this.tryBeginDrag(e, t) ? this.pointerStart = null : this.pointerStart = new __rea_outer_s(e.x, e.y);
  }
  onTouchMove(t) {
    this.dragState && this.setDragPosition(t, this.dragState.carry.node, this.dragState.touchOffset);
  }
  onTouchEnd(t) {
    if (this.dragState) return void this.finishDrag();
    if (!this.pointerStart || !this.canAcceptInput()) return void (this.pointerStart = null);
    const e = this.pointerStart;
    this.pointerStart = null, this.resolvePointer(e, t.getUILocation());
  }
  onTouchCancel() {
    if (this.dragState) {
      const t = this.dragState.carry;
      this.dragState = null, this.returnCarry(t);
    }
    this.pointerStart = null;
  }
  tryBeginDrag(t, e) {
    if (this.canDragHammer(t)) return this.beginCarryDrag(this.hammerCarry, e), !0;
    const i = this.pickPressedClock(t);
    return !!i && (this.beginCarryDrag(i, e), !0);
  }
  canDragHammer(t) {
    const e = this.hammerCarry;
    return !(!e || this.isWallOpen || !e.node.activeInHierarchy) && this.containsPoint(e.node, t, !1);
  }
  beginCarryDrag(t, e) {
    null != t && t.node.isValid && (this.liftCarry(t), this.dragState = {
      carry: t,
      touchOffset: this.calculateTouchOffset(e, t.node)
    });
  }
  finishDrag() {
    const t = this.dragState;
    this.dragState = null, null != t && t.carry.node.isValid && (t.carry !== this.hammerCarry ? this.finishClockDrag(t.carry) : this.finishHammerDrag(t.carry));
  }
  finishHammerDrag(t) {
    this.isCenterInside(t.node, this.getNode("wall_crack")) && this.canAcceptInput() && !this.isWallOpen ? this.openWall() : this.returnCarry(t);
  }
  finishClockDrag(t) {
    const e = this.pickClockTarget(t.node),
      i = e ? T[e] : void 0;
    void 0 === i || !this.canAcceptInput() || this.completedSteps.has(i) ? this.returnCarry(t) : this.deliverClock(i, t.node);
  }
  resolvePointer(t, e) {
    __rea_outer_s.distance(t, e) >= 30 ? this.resolveSwipe(t, e) : this.tryClickDoor(t, e);
  }
  resolveSwipe(t, e) {
    this.isUpSwipe(t, e) && this.canSwipeBunk(t) ? this.openBunk() : this.isRightSwipe(t, e) && this.canSwipeUnderBed(t) && this.openUnderBed();
  }
  canSwipeBunk(t) {
    return !this.isBunkOpen && this.containsPoint(this.getNode("touch6"), t, !0);
  }
  canSwipeUnderBed(t) {
    return !this.isUnderBedOpen && this.containsPoint(this.getNode("touch7"), t, !0);
  }
  tryClickDoor(t, e) {
    if (this.isDoorOpen) return;
    const i = this.getNode("door");
    this.containsPoint(i, t, !1) && this.containsPoint(i, e, !1) && this.openDoor();
  }
  openDoor() {
    this.canAcceptInput() && !this.isDoorOpen && (this.isDoorOpen = !0, this.playActionSound(), this.setNodeActive(this.getNode("door"), !1), this.setNodeActive(this.getNode("door1"), !0), this.setNodeActive(this.getNode("girl7"), !0));
  }
  openBunk() {
    this.canAcceptInput() && !this.isBunkOpen && (this.isBunkOpen = !0, this.playActionSound(), this.setNodeActive(this.getNode("girl1"), !0));
  }
  openUnderBed() {
    this.canAcceptInput() && !this.isUnderBedOpen && (this.isUnderBedOpen = !0, this.playActionSound(), this.setNodeActive(this.getNode("girl6"), !1), this.setNodeActive(this.getNode("girl6_1"), !0), this.setNodeActive(this.getNode("girl6_2"), !0));
  }
  openWall() {
    var t;
    this.canAcceptInput() && !this.isWallOpen && (this.isWallOpen = !0, this.playActionSound(), this.setNodeActive((null == (t = this.hammerCarry) ? void 0 : t.node) ?? null, !1), this.setNodeActive(this.getNode("wall_crack"), !1), this.setNodeActive(this.getNode("wall_crack1"), !0), this.startFightDust());
  }
  deliverClock(t, e) {
    this.completedSteps.add(t), this.playActionSound(), this.setNodeActive(e, !1), this.applyClockVisual(t);
    const i = this.completedSteps.size >= 8;
    this.playDialogue(C[t] ?? "", () => {
      this.onStepDialogueFinished(i);
    }), this.hasInstallNum = this.completedSteps.size, __rea_outer_N.getInstance().refreshGameProgress(), i && this.enterPhase2();
  }
  applyClockVisual(t) {
    return 1 === t ? (this.setNodeActive(this.getNode("girl5"), !1), this.setNodeActive(this.getNode("girl5_1"), !0), void this.setNodeActive(this.getNode("girl5_2"), !0)) : 2 === t ? (this.setNodeActive(this.getNode("girl7"), !1), void this.setNodeActive(this.getNode("girl7_1"), !0)) : 3 === t ? (this.setNodeActive(this.getNode("girl4"), !1), void this.setNodeActive(this.getNode("girl4_1"), !0)) : 4 === t ? (this.setNodeActive(this.getNode("girl3"), !1), void this.setNodeActive(this.getNode("girl3_1"), !0)) : 5 !== t ? 6 === t ? (this.setNodeActive(this.getNode("girl1"), !1), void this.setNodeActive(this.getNode("girl1_1"), !0)) : 7 === t ? (this.setNodeActive(this.getNode("girl6_1"), !1), this.setNodeActive(this.getNode("girl6_2"), !1), void this.setNodeActive(this.getNode("girl6_3"), !0)) : void (8 === t && (this.setNodeActive(this.getNode("wall_crack1"), !1), this.setNodeActive(this.getNode("bg"), !1), this.setNodeActive(this.getNode("bg1"), !0))) : void this.showPhoneFuture();
  }
  showPhoneFuture() {
    this.setNodeActive(this.getNode("girl2"), !1), this.setNodeActive(this.getNode("girl2_1"), !0), this.setNodeActive(this.getNode("girl2_2"), !0), this.phoneBubbleToken += 1;
    const t = this.phoneBubbleToken;
    this.scheduleOnce(() => {
      this.isValid && t === this.phoneBubbleToken && this.setNodeActive(this.getNode("girl2_2"), !1);
    }, 1);
  }
  onStepDialogueFinished(t) {
    t && 2 === this.phase && this.isValid && this.scheduleOnce(() => {
      this.isValid && 2 === this.phase && this.showLevelSuccess(0);
    }, 1);
  }
  startFightDust() {
    this.stopFightDust(), this.isFightPlaying = !0, this.fightFrameIndex = 0, this.setNodeActive(this.getNode("fight"), !0), this.applyFightFrame(), this.schedule(this.onFightFrame, .15), this.scheduleOnce(this.onFightDustEnd, .5);
  }
  applyFightFrame() {
    k.forEach((t, e) => {
      this.setNodeActive(this.getNode(t), e === this.fightFrameIndex);
    });
  }
  stopFightDust() {
    this.unschedule(this.onFightFrame), this.unschedule(this.onFightDustEnd), this.isFightPlaying = !1, this.setNodeActive(this.getNode("fight"), !1), k.forEach(t => {
      this.setNodeActive(this.getNode(t), !1);
    });
  }
  pickPressedClock(t) {
    for (let e = this.clocks.length - 1; e >= 0; e -= 1) {
      const i = this.clocks[e];
      if (i.node.activeInHierarchy && this.containsPoint(i.node, t, !1)) return i;
    }
    return null;
  }
  pickClockTarget(t) {
    for (let e = 0; e < _.length; e += 1) {
      const i = _[e];
      if (this.isClockTargetOpen(i) && this.isCenterInside(t, this.getNode(i))) return i;
    }
    return null;
  }
  isClockTargetOpen(t) {
    const e = T[t];
    return void 0 !== e && !this.completedSteps.has(e) && ("girl7" === t ? this.isDoorOpen : "girl1" === t ? this.isBunkOpen : "girl6_1" === t ? this.isUnderBedOpen : "wall_crack1" !== t || this.isWallOpen);
  }
  canAcceptInput() {
    return this.isValid && 1 === this.phase && !this.isInputBlocked && !this.winstate;
  }
  playActionSound() {
    __rea_outer_d.playEffect_1("level75_1");
  }
  playDialogue(t, e) {
    this.voiceToken += 1;
    const i = this.voiceToken;
    this.showPrompt(t), __rea_outer_d.stopVoice(), __rea_outer_d.playVoice(t), this.scheduleOnce(() => {
      this.isValid && i === this.voiceToken && (this.hidePrompt(), null == e || e());
    }, this.resolveDialogueHoldSeconds(t));
  }
  resolveDialogueHoldSeconds(t) {
    var e;
    const i = (null == (e = __rea_outer_d.audioMap.get(t)) ? void 0 : e.getDuration()) ?? 0;
    return i > .05 ? i : 2.5;
  }
  showPrompt(t) {
    this.promptLabel && (this.promptLabel.string = this.resolveI18nText(t)), this.setNodeActive(this.promptBoxNode, !0), this.bringToFront(this.promptBoxNode);
  }
  hidePrompt() {
    this.setNodeActive(this.promptBoxNode, !1);
  }
  resolveI18nText(t) {
    const e = __rea_outer_g.getInstance().getKey(t);
    return e && e !== t ? e : t;
  }
  setInputBlocked(t) {
    var e;
    this.isInputBlocked = t, this.setNodeActive(this.backBgNode, t), t && null != (e = this.backBgNode) && e.isValid && __rea_outer_m(this.backBgNode, 0);
  }
  getLowestUnfinishedStep() {
    for (let t = 1; t <= 8; t += 1) if (!this.completedSteps.has(t)) return t;
    return null;
  }
  isUpSwipe(t, e) {
    const i = e.x - t.x,
      s = e.y - t.y;
    return s >= 30 && Math.abs(s) >= 1.2 * Math.abs(i);
  }
  isRightSwipe(t, e) {
    const i = e.x - t.x,
      s = e.y - t.y;
    return i >= 30 && Math.abs(i) >= 1.2 * Math.abs(s);
  }
  liftCarry(t) {
    var e, i;
    const s = t.node;
    if (!s.isValid || null == (e = this.gameNode) || !e.isValid) return;
    const o = s.worldPosition.clone();
    s.setParent(this.gameNode), s.setWorldPosition(o), null != (i = this.promptBoxNode) && i.isValid && this.promptBoxNode.parent === this.gameNode && s.setSiblingIndex(this.promptBoxNode.getSiblingIndex());
  }
  returnCarry(t) {
    null != t && t.node.isValid && t.homeParent.isValid && (this.stopTweenIfValid(t.node), t.node.setParent(t.homeParent), t.node.setPosition(t.origin), t.node.setSiblingIndex(Math.min(t.siblingIndex, t.homeParent.children.length - 1)));
  }
  restoreCarries() {
    var t;
    this.clocks.forEach(t => {
      this.returnCarry(t), this.setNodeActive(t.node, !0);
    }), this.returnCarry(this.hammerCarry), this.setNodeActive((null == (t = this.hammerCarry) ? void 0 : t.node) ?? null, !0);
  }
  containsPoint(t, e, i) {
    return !(null == t || !t.isValid) && !(!i && !t.activeInHierarchy) && this.getNodeWorldBox(t).contains(e);
  }
  isCenterInside(t, e) {
    return !!(t.isValid && null != e && e.isValid && e.activeInHierarchy) && !(!t.getComponent(__rea_outer_o) || !e.getComponent(__rea_outer_o)) && __rea_outer_c.isRectWithinDragDistance(this.getNodeWorldBox(t), this.getNodeWorldBox(e));
  }
  getNodeWorldBox(t) {
    var e;
    const i = t.getComponent(__rea_outer_o);
    if (!i) return new __rea_outer_n();
    if (t.activeInHierarchy) return i.getBoundingBoxToWorld();
    const s = null != (e = this.gameNode) && e.isValid ? this.gameNode : this.findActiveSpaceNode(t),
      h = null == s ? void 0 : s.getComponent(__rea_outer_o);
    if (!h || !s) return new __rea_outer_n();
    const r = this.getLocalPositionIn(t, s),
      l = h.convertToWorldSpaceAR(r);
    return new __rea_outer_n(l.x - i.contentSize.width * i.anchorPoint.x, l.y - i.contentSize.height * i.anchorPoint.y, i.contentSize.width, i.contentSize.height);
  }
  findActiveSpaceNode(t) {
    let e = t.parent;
    for (; e;) {
      if (e.activeInHierarchy) return e;
      e = e.parent;
    }
    return null;
  }
  getLocalPositionIn(t, e) {
    const i = t.position.clone();
    let s = t.parent;
    for (; s && s !== e;) i.x += s.position.x, i.y += s.position.y, s = s.parent;
    return i;
  }
  calculateTouchOffset(t, e) {
    const i = e.parent;
    if (null == i || !i.isValid) return __rea_outer_h.ZERO.clone();
    const s = this.getTouchLocalPosition(t, i);
    return new __rea_outer_h(e.position.x - s.x, e.position.y - s.y, 0);
  }
  setDragPosition(t, e, i) {
    const s = e.parent;
    if (null == s || !s.isValid || !e.isValid) return;
    const o = this.getTouchLocalPosition(t, s);
    e.setPosition(o.x + i.x, o.y + i.y, e.position.z);
  }
  getTouchLocalPosition(t, e) {
    const i = t.getUILocation(),
      s = e.getComponent(__rea_outer_o);
    return s ? s.convertToNodeSpaceAR(new __rea_outer_h(i.x, i.y, 0)) : __rea_outer_h.ZERO.clone();
  }
  bringToFront(t) {
    null != t && t.isValid && t.parent && t.setSiblingIndex(t.parent.children.length - 1);
  }
  setNodeActive(t, e) {
    null != t && t.isValid && (t.active = e);
  }
  stopTweenIfValid(t) {
    null != t && t.isValid && __rea_outer_v(t);
  }
  cleanupRuntime(t) {
    var e;
    this.unscheduleAllCallbacks(), this.unregisterTouchHandlers(), this.voiceToken += 1, this.phoneBubbleToken += 1, this.pointerStart = null, this.dragState = null, this.isFightPlaying = !1, t && __rea_outer_d.stopVoice(), this.nodeByName.forEach(t => {
      this.stopTweenIfValid(t);
    }), this.clocks.forEach(t => {
      this.stopTweenIfValid(t.node);
    }), this.stopTweenIfValid((null == (e = this.hammerCarry) ? void 0 : e.node) ?? null), this.stopTweenIfValid(this.backBgNode);
  }
  getNode(t) {
    return this.nodeByName.get(t) ?? null;
  }
  cacheNode(t) {
    null != t && t.isValid && "time" !== t.name && !this.nodeByName.has(t.name) && this.nodeByName.set(t.name, t);
  }
  createCarry(t) {
    return null != t && t.isValid && t.parent ? {
      node: t,
      homeParent: t.parent,
      origin: t.position.clone(),
      siblingIndex: t.getSiblingIndex()
    } : null;
  }
  resolveReferences() {
    var t, e;
    this.gameNode = this.node.getChildByPath("UIPanel/gameNode"), this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.nodeByName.clear(), this.clocks.length = 0, this.hammerCarry = null, null == (t = this.gameNode) || t.children.forEach(t => {
      this.cacheNode(t), "clicks" === t.name && t.children.forEach(t => {
        this.cacheNode(t);
      });
    }), this.collectCarries(), this.promptBoxNode = this.getNode("prompt_box"), this.promptLabel = (null == (e = this.promptBoxNode) || null == (e = e.getChildByName("Label")) ? void 0 : e.getComponent(__rea_outer_r)) ?? null, this.warnIfMissing();
  }
  collectCarries() {
    const t = this.getNode("时间");
    null == t || t.children.forEach(t => {
      if ("time" !== t.name && "time1" !== t.name) return;
      const e = this.createCarry(t);
      e && this.clocks.push(e);
    }), this.hammerCarry = this.createCarry(this.getNode("hammer"));
  }
  warnIfMissing() {
    this.gameNode || console.warn("[Level_75] missing gameNode");
    [...S, ...I].forEach(t => {
      this.getNode(t) || console.warn(`[Level_75] missing ${t}`);
    }), 8 !== this.clocks.length && console.warn(`[Level_75] expected 8 clocks, found ${this.clocks.length}`), this.hammerCarry || console.warn("[Level_75] missing hammer"), this.getNode("touch6") || console.warn("[Level_75] missing clicks/touch6"), this.getNode("touch7") || console.warn("[Level_75] missing clicks/touch7"), this.promptLabel || console.warn("[Level_75] missing prompt_box/Label"), this.backBgNode || console.warn("[Level_75] missing backBG");
  }
}) || f;
__rea_outer_e._RF.pop();
export { __recovered_export_0 as default };
