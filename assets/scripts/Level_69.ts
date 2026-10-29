// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_69.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { Vec3 as __rea_outer_i } from "cc";
import { Node as __rea_outer_s } from "cc";
import { tween as __rea_outer_h } from "cc";
import { UITransform as __rea_outer_n } from "cc";
import { Label as __rea_outer_o } from "cc";
import { _decorator as __rea_outer_a } from "cc";
import { default as __rea_outer_l } from "./LevelBase";
import { default as __rea_outer_r } from "./AudioManager";
import { I18nController as __rea_outer_d } from "./i18n-controller";
import { UIManager as __rea_outer_c } from "./ui-manager";
import { UILayer as __rea_outer_p } from "./ui-layer";
import { UIHint as __rea_outer_g } from "./uihint";
import { UIFail as __rea_outer_u } from "./uifail";
import { GameController as __rea_outer_m } from "./GameController";
import { setNodeOpacity as __rea_outer_b } from "./CocosCompat";
import { stopAllTweens as __rea_outer_v } from "./CocosCompat";
import { default as __rea_outer_y } from "./ActionSystem";
import { default as __rea_outer_w } from "./clue-hit-tester";
let __recovered_export_0;
var S;
__rea_outer_t._RF.push({}, "b68140lICtP/aCUeiV3yd77", "Level_69", void 0);
const {
    ccclass: T
  } = __rea_outer_a,
  N = 14,
  C = new __rea_outer_i(-192, 16, 0),
  f = new __rea_outer_i(194, 8, 0),
  I = ["bg", "window1", "door", "mother", "angry", "father", "dog", "bed", "cat_bed", "cat", "seesaw1", "seesaw2", "babys", "clicks"],
  A = ["bg_1", "window2", "mother1", "baby11", "mother_hand", "baby12", "father_baby", "dog1", "dog1_hand", "cat1", "baby1", "baby6", "baby2", "baby3", "bg_bathroom", "bg_toilet", "bg_toilet1", "bg_toilet2", "bg_toilet3", "baby7", "bg_window", "bg_window_1", "bg_window_2", "bg_vampire", "baby10", "television1", "button", "television2", "baby8", "baby9", "drags", "swips", "prompt_box"];
__recovered_export_0 = T("Level_69")(S = class extends __rea_outer_l {
  constructor(...e) {
    super(...e), this.phase = 0, this.winstate = !1, this.gameNode = null, this.backBgNode = null, this.promptBoxNode = null, this.promptLabel = null, this.babysNode = null, this.touchTvNode = null, this.hangerL = null, this.hangerR = null, this.baby5L = null, this.baby5R = null, this.baby4Bed = null, this.baby4Dog = null, this.seesaw2 = null, this.babyStack = [], this.toiletFrames = [null, null, null], this.nodeByName = new Map(), this.nodeOrigins = new Map(), this.siblingOrigins = new Map(), this.homeParents = new Map(), this.completedSteps = new Set(), this.isWindowOpen = !1, this.isHangerLeftOccupied = !1, this.isHangerRightOccupied = !1, this.isTvOpened = !1, this.isTvSwitched = !1, this.isDoorOpen = !1, this.isWindowSwiped = !1, this.toiletFrame = 0, this.activeDrag = null, this.pointerSession = null, this.voiceToken = 0, this.onTouchStart = e => {
      if (!this.canAcceptGameplayTouch()) return;
      const t = __rea_outer_w.getTouchPoint(e);
      if (this.isPointOnBabyPile(t)) return this.beginBabyDrag(e), void (e.propagationStopped = !0);
      const i = this.resolvePointerKind(t);
      i && (this.pointerSession = {
        kind: i,
        startPoint: t.clone()
      }, e.propagationStopped = !0);
    }, this.onTouchMove = e => {
      this.activeDrag && this.canAcceptGameplayTouch() && (this.setDragNodePositionFromTouch(e, this.activeDrag.dragNode, this.activeDrag.touchOffset), e.propagationStopped = !0);
    }, this.onTouchEnd = e => {
      if (1 !== this.phase || this.winstate) return this.cancelDrag(), void (this.pointerSession = null);
      if (this.activeDrag) return this.handleBabyDrop(this.activeDrag), this.activeDrag = null, void (e.propagationStopped = !0);
      const t = this.pointerSession;
      if (this.pointerSession = null, !t || !this.canAcceptGameplayTouch()) return;
      const i = __rea_outer_w.getTouchPoint(e);
      if ("swipeWindow" === t.kind) return this.handleWindowSwipe(t.startPoint, i), void (e.propagationStopped = !0);
      this.handlePointerTap(t.kind), e.propagationStopped = !0;
    }, this.onToiletTick = () => {
      this.toiletFrame = (this.toiletFrame + 1) % this.toiletFrames.length, this.applyToiletFrame();
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.allItemNum = N, this.hasInstallNum = 0;
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
    const e = this.getLowestUnfinishedStep();
    if (null === e) return;
    const t = __rea_outer_d.getInstance().getKey(`level69_hint${e}`);
    __rea_outer_c.getInstance().showView(__rea_outer_g, void 0, {
      body: t
    });
  }
  getGameProgressSnapshot() {
    const e = Math.min(this.hasInstallNum, N);
    return {
      progress: e / N,
      label: `${e}/14`
    };
  }
  markAllTasksCompleted() {
    this.hasInstallNum = N;
    for (let e = 1; e <= N; e += 1) this.completedSteps.add(e);
    this.isWindowOpen = !0, this.isHangerLeftOccupied = !0, this.isHangerRightOccupied = !0, this.isTvOpened = !0, this.isTvSwitched = !0, this.isDoorOpen = !0, this.isWindowSwiped = !0;
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.completedSteps.clear(), this.isWindowOpen = !1, this.isHangerLeftOccupied = !1, this.isHangerRightOccupied = !1, this.isTvOpened = !1, this.isTvSwitched = !1, this.isDoorOpen = !1, this.isWindowSwiped = !1, this.toiletFrame = 0, this.activeDrag = null, this.pointerSession = null, this.voiceToken = 0, this.hasInstallNum = 0, this.allItemNum = N, __rea_outer_r.stopVoice();
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_r.playMusic("bgm4", !0, .5), this.applyInitialVisibility(), this.setInputBlocked(!0), __rea_outer_m.getInstance().refreshGameProgress(), this.playDialogue("69_1", !0, () => {
      this.isValid && 0 === this.phase && this.enterPhase1();
    });
  }
  skipOpeningToPlay() {
    return 0 === this.phase && (this.voiceToken += 1, this.stopOpeningDialogue(), this.enterPhase1(), !0);
  }
  enterPhase1() {
    0 === this.phase && (this.phase = 1, this.hidePrompt(), this.setInputBlocked(!1), this.registerInteractionHandlers(), __rea_outer_m.getInstance().refreshGameProgress());
  }
  enterPhase2Success() {
    this.phase >= 2 || this.winstate || (this.phase = 2, this.winstate = !0, this.activeDrag = null, this.hideBabyPile(), this.unregisterInteractionHandlers(), this.stopToiletLoop(), this.stopSeesawSwing(), this.setInputBlocked(!0), __rea_outer_m.getInstance().pauseTimer(), this.scheduleOnceIfValid(() => {
      this.isValid && this.showLevelSuccess(0);
    }, 1));
  }
  beginTimeoutFail() {
    this.phase = 2, this.winstate = !1, this.cleanupRuntime(!0), __rea_outer_m.getInstance().pauseTimer(), __rea_outer_c.getInstance().showView(__rea_outer_u, __rea_outer_p.WIN_ANIMATION);
  }
  beginTelevisionFail(e) {
    this.phase = 2, this.winstate = !1, this.activeDrag = null, this.unregisterInteractionHandlers(), this.stopToiletLoop(), this.stopSeesawSwing(), this.setInputBlocked(!0), __rea_outer_m.getInstance().pauseTimer(), this.setNodeActive(e, !1), this.restoreHome(e), this.showSleepingBaby(this.getGameChild("baby8")), __rea_outer_r.playEffect_1("level69_2"), this.playDialogue("69_10", !0, () => {
      this.isValid && __rea_outer_c.getInstance().showView(__rea_outer_u, __rea_outer_p.WIN_ANIMATION);
    });
  }
  applyInitialVisibility() {
    var e;
    this.restoreCachedNodes(), this.setNodeActive(this.gameNode, !0), I.forEach(e => {
      this.setNodeActive(this.getGameChild(e), !0);
    }), A.forEach(e => {
      this.setNodeActive(this.getGameChild(e), !1);
    }), this.setNodeActive(this.hangerL, !1), this.setNodeActive(this.hangerR, !1), this.setNodeActive(this.baby5L, !1), this.setNodeActive(this.baby5R, !1), this.setNodeActive(this.baby4Bed, !1), this.setNodeActive(this.baby4Dog, !1), this.babyStack.forEach(e => {
      this.restoreHome(e), this.showSleepingBaby(e);
    }), this.setNodeActive(this.touchTvNode, !0), null != (e = this.touchTvNode) && e.isValid && __rea_outer_b(this.touchTvNode, 0), this.setNodeActive(this.node.getChildByPath("UIPanel/click_root"), !1), this.setNodeActive(this.node.getChildByPath("UIPanel/demo"), !1), this.resetBackBgOpacity();
  }
  registerInteractionHandlers() {
    this.node.on(__rea_outer_s.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(__rea_outer_s.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(__rea_outer_s.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(__rea_outer_s.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
  }
  unregisterInteractionHandlers() {
    var e;
    null != (e = this.node) && e.isValid && (this.node.off(__rea_outer_s.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(__rea_outer_s.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(__rea_outer_s.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(__rea_outer_s.EventType.TOUCH_CANCEL, this.onTouchEnd, this));
  }
  canAcceptGameplayTouch() {
    var e;
    return 1 === this.phase && !this.winstate && !0 !== (null == (e = this.backBgNode) ? void 0 : e.active);
  }
  isPointOnBabyPile(e) {
    return this.babyStack.some(t => __rea_outer_w.isPointInside(t, e));
  }
  getTopmostActiveBaby() {
    for (let e = this.babyStack.length - 1; e >= 0; e -= 1) {
      const t = this.babyStack[e];
      if (null != t && t.isValid && t.active) return t;
    }
    return null;
  }
  beginBabyDrag(e) {
    const t = this.getTopmostActiveBaby();
    if (null == t || !t.isValid) return;
    this.bringNodeToFront(t);
    const i = this.calculateTouchOffset(e, t);
    this.setDragNodePositionFromTouch(e, t, i), this.activeDrag = {
      dragNode: t,
      touchOffset: i
    };
  }
  handleBabyDrop(e) {
    if (!this.canAcceptGameplayTouch()) return void this.restoreDrag(e);
    const t = this.resolveDropKind(e.dragNode);
    t ? "failTv" !== t ? (this.playActionSound(), this.setNodeActive(e.dragNode, !1), this.restoreHome(e.dragNode), this.activeDrag = null, this.applyDrop(t)) : this.beginTelevisionFail(e.dragNode) : this.restoreDrag(e);
  }
  resolveDropKind(e) {
    const t = [{
      kind: "step1",
      hit: this.canComplete(1) && this.isCenterInside(this.getGameChild("mother"), e)
    }, {
      kind: "step2",
      hit: this.canComplete(2) && this.isCenterInside(this.getGameChild("mother1"), e)
    }, {
      kind: "hangerL",
      hit: this.canDropOnHanger(!0) && this.isCenterInside(this.hangerL, e)
    }, {
      kind: "hangerR",
      hit: this.canDropOnHanger(!1) && this.isCenterInside(this.hangerR, e)
    }, {
      kind: "step5",
      hit: this.canComplete(5) && this.isCenterInside(this.getGameChild("television2"), e)
    }, {
      kind: "failTv",
      hit: this.canFailOnTelevision() && this.isCenterInside(this.getGameChild("television1"), e)
    }, {
      kind: "step6",
      hit: this.canComplete(6) && this.isCenterInsideAny(this.getToiletDropZones(), e)
    }, {
      kind: "step7",
      hit: this.canComplete(7) && this.isCenterInside(this.getGameChild("bg_vampire"), e)
    }, {
      kind: "step8",
      hit: this.canComplete(8) && this.isCenterInside(this.getGameChild("dog"), e)
    }, {
      kind: "step9",
      hit: this.canComplete(9) && this.isCenterInside(this.getGameChild("father"), e)
    }, {
      kind: "step10",
      hit: this.canComplete(10) && this.isCenterInside(this.getGameChild("bed"), e)
    }, {
      kind: "step11",
      hit: this.canComplete(11) && this.isCenterInside(this.getGameChild("cat_bed"), e)
    }, {
      kind: "step12",
      hit: this.canComplete(12) && this.isCenterInside(this.getGameChild("cat1"), e)
    }, {
      kind: "step13",
      hit: this.canComplete(13) && this.isCenterInsideAny([this.getGameChild("seesaw1"), this.seesaw2], e)
    }, {
      kind: "step14",
      hit: this.canComplete(14) && this.isCenterInsideAny([this.getGameChild("seesaw1"), this.seesaw2], e)
    }].find(e => e.hit);
    return (null == t ? void 0 : t.kind) ?? null;
  }
  applyDrop(e) {
    switch (e) {
      case "step1":
        return void this.applyStep1();
      case "step2":
        return void this.applyStep2();
      case "hangerL":
        return void this.applyHanger(!0);
      case "hangerR":
        return void this.applyHanger(!1);
      case "step5":
        return void this.applyStep5();
      case "step6":
        return void this.applyStep6();
      case "step7":
        return void this.applyStep7();
      case "step8":
        return void this.applyStep8();
      case "step9":
        return void this.applyStep9();
      case "step10":
        return void this.applyStep10();
      case "step11":
        return void this.applyStep11();
      case "step12":
        return void this.applyStep12();
      case "step13":
        return void this.applyStep13();
      case "step14":
        return void this.applyStep14();
      default:
        return;
    }
  }
  canComplete(e) {
    if (this.completedSteps.has(e)) return !1;
    switch (e) {
      case 2:
        return this.completedSteps.has(1);
      case 4:
        return this.completedSteps.has(3);
      case 5:
        return this.isTvSwitched;
      case 6:
        return this.isDoorOpen;
      case 7:
        return this.completedSteps.has(6) && this.isWindowSwiped;
      case 12:
        return this.completedSteps.has(11);
      case 14:
        return this.completedSteps.has(13);
      default:
        return !0;
    }
  }
  canDropOnHanger(e) {
    return !!this.isWindowOpen && (!e || !this.isHangerLeftOccupied) && !(!e && this.isHangerRightOccupied) && (!this.completedSteps.has(3) || !this.completedSteps.has(4));
  }
  canFailOnTelevision() {
    return this.isTvOpened && !this.isTvSwitched && !this.completedSteps.has(5);
  }
  applyStep1() {
    this.setNodeActive(this.getGameChild("mother"), !1), this.setNodeActive(this.getGameChild("angry"), !1), this.setNodeActive(this.getGameChild("mother1"), !0), this.showSleepingBaby(this.getGameChild("baby11")), this.setNodeActive(this.getGameChild("mother_hand"), !0), this.playDialogue("69_2", !0), this.completeStep(1);
  }
  applyStep2() {
    this.showSleepingBaby(this.getGameChild("baby12")), this.playDialogue("69_3", !0), this.completeStep(2);
  }
  applyHanger(e) {
    e ? (this.isHangerLeftOccupied = !0, this.showSleepingBaby(this.baby5L)) : (this.isHangerRightOccupied = !0, this.showSleepingBaby(this.baby5R)), this.completeStep(this.completedSteps.has(3) ? 4 : 3);
  }
  applyStep5() {
    this.showSleepingBaby(this.getGameChild("baby9")), this.playDialogue("69_4", !0), this.completeStep(5);
  }
  applyStep6() {
    this.showSleepingBaby(this.getGameChild("baby7")), this.completeStep(6);
  }
  applyStep7() {
    this.showSleepingBaby(this.getGameChild("baby10")), this.playDialogue("69_5", !0), this.completeStep(7);
  }
  applyStep8() {
    this.setNodeActive(this.getGameChild("dog"), !1), this.setNodeActive(this.getGameChild("dog1"), !0), this.showSleepingBaby(this.baby4Dog), this.setNodeActive(this.getGameChild("dog1_hand"), !0), this.playDialogue("69_6", !0), this.completeStep(8);
  }
  applyStep9() {
    this.setNodeActive(this.getGameChild("father"), !1), this.setNodeActive(this.getGameChild("father_baby"), !0), this.playDialogue("69_7", !0), this.completeStep(9);
  }
  applyStep10() {
    this.showSleepingBaby(this.baby4Bed), this.completeStep(10);
  }
  applyStep11() {
    this.setNodeActive(this.getGameChild("cat"), !1), this.showSleepingBaby(this.getGameChild("baby1")), this.setNodeActive(this.getGameChild("cat1"), !0), this.playDialogue("69_8", !0), this.completeStep(11);
  }
  applyStep12() {
    this.setNodeActive(this.getGameChild("cat1"), !1), this.showSleepingBaby(this.getGameChild("baby6")), this.playDialogue("69_9", !0), this.completeStep(12);
  }
  applyStep13() {
    var e;
    this.attachToSeesaw(this.getGameChild("baby2"), C), null != (e = this.seesaw2) && e.isValid && (this.seesaw2.angle = -5), this.completeStep(13);
  }
  applyStep14() {
    this.attachToSeesaw(this.getGameChild("baby3"), f), this.startSeesawSwing(), this.completeStep(14);
  }
  resolvePointerKind(e) {
    return this.canOpenWindow() && __rea_outer_w.isPointInside(this.getGameChild("window1"), e) ? "window" : this.canOpenDoor() && __rea_outer_w.isPointInside(this.getGameChild("door"), e) ? "door" : this.canOpenTelevision() && __rea_outer_w.isPointInside(this.touchTvNode, e) ? "tv" : this.canSwitchTelevision() && __rea_outer_w.isPointInside(this.getGameChild("button"), e) ? "button" : this.canSwipeWindow() && __rea_outer_w.isPointInside(this.getGameChild("bg_window"), e) ? "swipeWindow" : null;
  }
  handlePointerTap(e) {
    switch (e) {
      case "window":
        return void this.openWindow();
      case "door":
        return void this.openDoor();
      case "tv":
        return void this.openTelevision();
      case "button":
        return void this.switchTelevision();
      default:
        return;
    }
  }
  canOpenWindow() {
    return !this.isWindowOpen;
  }
  canOpenDoor() {
    return !this.isDoorOpen;
  }
  canOpenTelevision() {
    return !this.isTvOpened;
  }
  canSwitchTelevision() {
    return this.isTvOpened && !this.isTvSwitched;
  }
  canSwipeWindow() {
    return this.completedSteps.has(6) && !this.isWindowSwiped;
  }
  openWindow() {
    this.canOpenWindow() && (this.playActionSound(), this.isWindowOpen = !0, this.setNodeActive(this.getGameChild("window1"), !1), this.setNodeActive(this.getGameChild("window2"), !0), this.setNodeActive(this.getGameChild("bg_1"), !0), this.setNodeActive(this.hangerL, !0), this.setNodeActive(this.hangerR, !0), this.raiseAbove(this.getGameChild("bg"), [this.getGameChild("bg_1")]));
  }
  openDoor() {
    this.canOpenDoor() && (this.playActionSound(), this.isDoorOpen = !0, this.setNodeActive(this.getGameChild("door"), !1), this.setNodeActive(this.getGameChild("bg_bathroom"), !0), this.setNodeActive(this.getGameChild("bg_toilet"), !0), this.setNodeActive(this.getGameChild("bg_window"), !0), this.startToiletLoop());
  }
  openTelevision() {
    this.canOpenTelevision() && (this.playActionSound(), this.isTvOpened = !0, this.setNodeActive(this.getGameChild("television1"), !0), this.setNodeActive(this.getGameChild("button"), !0));
  }
  switchTelevision() {
    this.canSwitchTelevision() && (this.playActionSound(), this.isTvSwitched = !0, this.setNodeActive(this.getGameChild("television1"), !1), this.setNodeActive(this.getGameChild("button"), !1), this.setNodeActive(this.getGameChild("television2"), !0));
  }
  handleWindowSwipe(e, t) {
    if (!this.canSwipeWindow()) return;
    const i = t.x - e.x,
      s = t.y - e.y;
    if (!(s >= 30 && Math.abs(s) >= 1.2 * Math.abs(i))) return;
    this.playActionSound(), this.isWindowSwiped = !0;
    const h = this.getGameChild("bg_window"),
      n = this.getGameChild("bg_vampire"),
      o = this.getGameChild("baby10"),
      a = this.getGameChild("bg_window_1"),
      l = this.getGameChild("bg_window_2");
    this.setNodeActive(n, !0), this.setNodeActive(a, !0), this.setNodeActive(l, !0), this.raiseAbove(h ?? this.getGameChild("bg_bathroom"), [n, o, a, l]), this.setNodeActive(h, !1);
  }
  startToiletLoop() {
    this.toiletFrame = 0, this.applyToiletFrame(), this.schedule(this.onToiletTick, .2);
  }
  stopToiletLoop() {
    this.unschedule(this.onToiletTick);
  }
  applyToiletFrame() {
    this.toiletFrames.forEach((e, t) => {
      this.setNodeActive(e, t === this.toiletFrame);
    });
  }
  getToiletDropZones() {
    return [this.getGameChild("bg_toilet"), this.toiletFrames[0], this.toiletFrames[1], this.toiletFrames[2]];
  }
  attachToSeesaw(e, t) {
    var i;
    if (null == e || !e.isValid || null == (i = this.seesaw2) || !i.isValid) return;
    const s = this.seesaw2.angle;
    this.seesaw2.angle = 0, e.setParent(this.seesaw2), e.setPosition(t.clone()), this.showSleepingBaby(e), this.seesaw2.angle = s;
  }
  hideBabyPile() {
    this.babyStack.forEach(e => {
      this.stopTweenIfValid(e), this.setNodeActive(e, !1);
    });
  }
  showSleepingBaby(e) {
    null != e && e.isValid && (this.stopTweenIfValid(e), this.setNodeActive(e, !0), __rea_outer_y.scaleRepeat_1(e, 1.2, 1, 1.08, .2));
  }
  startSeesawSwing() {
    var e;
    null != (e = this.seesaw2) && e.isValid && (this.stopSeesawSwing(), this.seesaw2.angle = -5, __rea_outer_h(this.seesaw2).to(1, {
      angle: 5
    }).to(1, {
      angle: -5
    }).union().repeatForever().start());
  }
  stopSeesawSwing() {
    this.stopTweenIfValid(this.seesaw2);
  }
  completeStep(e) {
    this.completedSteps.has(e) || (this.completedSteps.add(e), this.hasInstallNum = this.completedSteps.size, __rea_outer_m.getInstance().refreshGameProgress(), this.hasInstallNum >= N && this.enterPhase2Success());
  }
  getLowestUnfinishedStep() {
    for (let e = 1; e <= N; e += 1) if (!this.completedSteps.has(e)) return e;
    return null;
  }
  playActionSound() {
    __rea_outer_r.playEffect_1("level69_1");
  }
  playDialogue(e, t, i) {
    this.voiceToken += 1;
    const s = this.voiceToken;
    this.showPrompt(e), __rea_outer_r.stopVoice(), __rea_outer_r.playVoice(e);
    let h = !1;
    const n = () => {
        !h && this.isValid && s === this.voiceToken && (h = !0, this.unschedule(o), t && this.hidePrompt(), null == i || i());
      },
      o = () => {
        n();
      },
      a = this.resolveDialogueHoldSeconds(e);
    this.scheduleOnce(n, a), this.scheduleOnce(o, Math.max(8, a + .5));
  }
  resolveDialogueHoldSeconds(e) {
    var t;
    const i = (null == (t = __rea_outer_r.audioMap.get(e)) ? void 0 : t.getDuration()) ?? 0;
    return i > .1 ? i : 2.5;
  }
  showPrompt(e) {
    this.promptLabel && (this.promptLabel.string = this.resolveI18nText(e)), this.setNodeActive(this.promptBoxNode, !0), this.bringNodeToFront(this.promptBoxNode);
  }
  hidePrompt() {
    this.setNodeActive(this.promptBoxNode, !1);
  }
  resolveI18nText(e) {
    const t = __rea_outer_d.getInstance().getKey(e);
    return t && t !== e ? t : e;
  }
  isCenterInside(e, t) {
    return __rea_outer_w.isDragNearTarget(t, e);
  }
  isCenterInsideAny(e, t) {
    return e.some(e => this.isCenterInside(e, t));
  }
  restoreDrag(e) {
    this.restoreHome(e.dragNode), this.showSleepingBaby(e.dragNode);
  }
  cancelDrag() {
    this.activeDrag && (this.restoreDrag(this.activeDrag), this.activeDrag = null);
  }
  raiseAbove(e, t) {
    if (null != e && e.isValid) for (let i = t.length - 1; i >= 0; i -= 1) {
      const s = t[i];
      null != s && s.isValid && s.parent === e.parent && s.setSiblingIndex(e.getSiblingIndex() + 1);
    }
  }
  calculateTouchOffset(e, t) {
    const s = t.parent;
    if (null == s || !s.isValid) return __rea_outer_i.ZERO.clone();
    const h = this.getTouchLocalPosition(e, s);
    return new __rea_outer_i(t.position.x - h.x, t.position.y - h.y, 0);
  }
  setDragNodePositionFromTouch(e, t, i) {
    const s = t.parent;
    if (null == s || !s.isValid) return;
    const h = this.getTouchLocalPosition(e, s);
    t.setPosition(h.x + i.x, h.y + i.y, t.position.z);
  }
  getTouchLocalPosition(e, t) {
    const s = e.getUILocation(),
      h = t.getComponent(__rea_outer_n);
    return h ? h.convertToNodeSpaceAR(new __rea_outer_i(s.x, s.y, 0)) : __rea_outer_i.ZERO.clone();
  }
  restoreCachedNodes() {
    var e;
    this.homeParents.forEach((e, t) => {
      t.isValid && e.isValid && t.parent !== e && t.setParent(e);
    }), this.nodeOrigins.forEach((e, t) => {
      t.isValid && (this.stopTweenIfValid(t), t.setPosition(e), t.setScale(1, 1, 1));
    }), this.siblingOrigins.forEach((e, t) => {
      t.isValid && t.parent && t.setSiblingIndex(e);
    }), null != (e = this.seesaw2) && e.isValid && (this.seesaw2.angle = 0);
  }
  restoreHome(e) {
    if (null == e || !e.isValid) return;
    this.stopTweenIfValid(e);
    const t = this.homeParents.get(e);
    null != t && t.isValid && e.parent !== t && e.setParent(t);
    const i = this.nodeOrigins.get(e);
    i && e.setPosition(i), this.restoreSibling(e);
  }
  restoreSibling(e) {
    if (null == e || !e.isValid || !e.parent) return;
    const t = this.siblingOrigins.get(e);
    void 0 !== t && e.setSiblingIndex(t);
  }
  bringNodeToFront(e) {
    null != e && e.isValid && e.parent && e.setSiblingIndex(e.parent.children.length - 1);
  }
  setInputBlocked(e) {
    this.setNodeActive(this.backBgNode, e), e && this.resetBackBgOpacity();
  }
  resetBackBgOpacity() {
    var e;
    null != (e = this.backBgNode) && e.isValid && __rea_outer_b(this.backBgNode, 0);
  }
  scheduleOnceIfValid(e, t) {
    this.scheduleOnce(() => {
      this.isValid && e();
    }, t);
  }
  cleanupRuntime(e) {
    this.unscheduleAllCallbacks(), this.unregisterInteractionHandlers(), this.voiceToken += 1, this.pointerSession = null, this.cancelDrag(), this.stopToiletLoop(), this.stopSeesawSwing(), e && __rea_outer_r.stopVoice(), this.stopAllGameplayTweens();
  }
  stopAllGameplayTweens() {
    this.nodeOrigins.forEach((e, t) => {
      this.stopTweenIfValid(t);
    }), this.babyStack.forEach(e => {
      this.stopTweenIfValid(e);
    }), this.stopTweenIfValid(this.seesaw2), this.stopTweenIfValid(this.backBgNode);
  }
  stopTweenIfValid(e) {
    null != e && e.isValid && __rea_outer_v(e);
  }
  setNodeActive(e, t) {
    null != e && e.isValid && (e.active = t);
  }
  getGameChild(e) {
    var t;
    return this.nodeByName.get(e) ?? (null == (t = this.gameNode) ? void 0 : t.getChildByName(e)) ?? null;
  }
  cacheNode(e) {
    null != e && e.isValid && (this.nodeByName.has(e.name) || this.nodeByName.set(e.name, e), this.cacheTransform(e));
  }
  cacheTransform(e) {
    null != e && e.isValid && (this.nodeOrigins.set(e, e.position.clone()), this.siblingOrigins.set(e, e.getSiblingIndex()), e.parent && this.homeParents.set(e, e.parent));
  }
  resolveSibling(e, t) {
    var i;
    const s = (null == (i = this.gameNode) ? void 0 : i.children[e]) ?? null;
    return s ? (s.name !== t && console.warn(`[Level_69] sibling ${e} expected ${t}, got ${s.name}`), this.cacheTransform(s), s) : (console.warn(`[Level_69] missing sibling ${e} (${t})`), null);
  }
  resolveBabyStack() {
    var e;
    this.babyStack.length = 0;
    ((null == (e = this.babysNode) ? void 0 : e.children) ?? []).forEach(e => {
      this.cacheTransform(e), this.babyStack.push(e);
    }), 14 !== this.babyStack.length && console.warn(`[Level_69] babys expected 14 children, got ${this.babyStack.length}`);
  }
  resolveReferences() {
    var e, t;
    this.gameNode = this.node.getChildByPath("UIPanel/gameNode"), this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.nodeByName.clear(), this.nodeOrigins.clear(), this.siblingOrigins.clear(), this.homeParents.clear(), null == (e = this.gameNode) || e.children.forEach(e => {
      this.cacheNode(e);
    }), this.babysNode = this.getGameChild("babys"), this.resolveBabyStack(), this.hangerR = this.resolveSibling(43, "clothes_hanger"), this.hangerL = this.resolveSibling(44, "clothes_hanger"), this.baby5L = this.resolveSibling(45, "baby5"), this.baby5R = this.resolveSibling(46, "baby5"), this.baby4Bed = this.resolveSibling(28, "baby4"), this.baby4Dog = this.resolveSibling(31, "baby4"), this.seesaw2 = this.getGameChild("seesaw2"), this.toiletFrames[0] = this.getGameChild("bg_toilet1"), this.toiletFrames[1] = this.getGameChild("bg_toilet2"), this.toiletFrames[2] = this.getGameChild("bg_toilet3"), this.touchTvNode = this.node.getChildByPath("UIPanel/gameNode/clicks/touchtv"), this.cacheTransform(this.touchTvNode), this.promptBoxNode = this.getGameChild("prompt_box"), this.promptLabel = (null == (t = this.promptBoxNode) || null == (t = t.getChildByName("Label")) ? void 0 : t.getComponent(__rea_outer_o)) ?? null, this.warnIfMissing();
  }
  warnIfMissing() {
    const e = [...I, ...A];
    this.gameNode || console.warn("[Level_69] missing gameNode"), e.forEach(e => {
      this.getGameChild(e) || console.warn(`[Level_69] missing ${e}`);
    }), this.touchTvNode || console.warn("[Level_69] missing clicks/touchtv"), this.promptLabel || console.warn("[Level_69] missing prompt_box/Label"), this.backBgNode || console.warn("[Level_69] missing backBG"), this.hangerL && this.hangerR || console.warn("[Level_69] missing clothes_hanger pair");
  }
}) || S;
__rea_outer_t._RF.pop();
export { __recovered_export_0 as default };
