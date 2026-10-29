// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_71.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { Label as __rea_outer_i } from "cc";
import { Node as __rea_outer_s } from "cc";
import { tween as __rea_outer_o } from "cc";
import { Vec3 as __rea_outer_h } from "cc";
import { UITransform as __rea_outer_n } from "cc";
import { Rect as __rea_outer_a } from "cc";
import { sys as __rea_outer_r } from "cc";
import { Sprite as __rea_outer_l } from "cc";
import { gfx as __rea_outer_c } from "cc";
import { _decorator as __rea_outer_d } from "cc";
import { default as __rea_outer_p } from "./LevelBase";
import { default as __rea_outer_u } from "./AudioManager";
import { I18nController as __rea_outer_m } from "./i18n-controller";
import { UIManager as __rea_outer_g } from "./ui-manager";
import { UILayer as __rea_outer_N } from "./ui-layer";
import { UIHint as __rea_outer_C } from "./uihint";
import { UIFail as __rea_outer_v } from "./uifail";
import { GameController as __rea_outer_f } from "./GameController";
import { setNodeOpacity as __rea_outer_k } from "./CocosCompat";
import { stopAllTweens as __rea_outer_A } from "./CocosCompat";
import { default as __rea_outer_S } from "./clue-hit-tester";
let __recovered_export_0;
var G;
__rea_outer_t._RF.push({}, "b8e4cF6bS9KkZxT4PcbSiwI", "Level_71", void 0);
const {
    ccclass: w
  } = __rea_outer_d,
  y = "level71_2",
  P = "level71_3",
  B = "level71_4",
  _ = "level71_5",
  b = "level71_7",
  D = "level71_8",
  T = "level71_9",
  I = "71_7",
  F = 12,
  O = .7,
  V = .5,
  L = [P, B, b, D, T],
  x = ["bg", "curtain", "man", "woman", "air", "air1", "air2", "perfume", "flytrap", "medicine", "cat", "blanket", "cat_bowl", "cat_food", "fly_1", "fly_2", "progress", "progress1", "profile_picture", "sleep1", "prompt_box"],
  E = ["drawer1", "insecticide", "drawer", "tape", "man1", "tape1", "man2", "man3", "mobile_phone", "mobile_phone_1", "mobile_phone1", "mobile_phone2", "woman_1", "woman_2", "woman_face", "woman_3", "woman2", "woman2_1", "perfume1", "perfume1_1", "cat2", "cat3", "cat1", "cat_bowl1", "curtain1", "light", "insecticide1", "insecticide2", "sound", "fart", "blanket1", "flytrap1", "bg_end", "sleep2", "sleep3", "drags", "swips"];
__recovered_export_0 = w("Level_71")(G = class extends __rea_outer_p {
  constructor(...e) {
    super(...e), this.phase = 0, this.winstate = !1, this.gameNode = null, this.backBgNode = null, this.promptBoxNode = null, this.promptLabel = null, this.progressFillNode = null, this.touchFlyNode = null, this.touchCatNode = null, this.touchPerfumeDropNode = null, this.touchCatBowlNode = null, this.touchInsecticideNode = null, this.touchMedicineNode = null, this.touchTapeNode = null, this.touchPerfumePickNode = null, this.touchAirNode = null, this.socksA1 = null, this.socksA2 = null, this.socksB1 = null, this.socksB2 = null, this.socksC1 = null, this.socksC2 = null, this.socksD1 = null, this.socksD2 = null, this.nodeByName = new Map(), this.nodeOrigins = new Map(), this.siblingOrigins = new Map(), this.homeParents = new Map(), this.completedSteps = new Set(), this.alternates = new Map(), this.isPhoneZoomed = !1, this.isWakeBarRunning = !1, this.wakeElapsed = 0, this.activeDrag = null, this.pointerSession = null, this.voiceToken = 0, this.performanceToken = 0, this.onTouchStart = e => {
      if (!this.canAcceptGameplayTouch()) return;
      const t = __rea_outer_S.getTouchPoint(e),
        i = this.resolveDragKind(t);
      if (i) return this.beginDrag(i, e), void (e.propagationStopped = !0);
      const s = this.resolvePointerKind(t);
      s && (this.pointerSession = {
        kind: s,
        startPoint: t.clone()
      }, e.propagationStopped = !0);
    }, this.onTouchMove = e => {
      this.activeDrag && this.canAcceptGameplayTouch() && (this.setDragNodePositionFromTouch(e, this.activeDrag.dragNode, this.activeDrag.touchOffset), e.propagationStopped = !0);
    }, this.onTouchEnd = e => {
      if (1 !== this.phase || this.winstate) return this.cancelDrag(), void (this.pointerSession = null);
      if (this.activeDrag) return this.handleDrop(this.activeDrag), this.activeDrag = null, void (e.propagationStopped = !0);
      const t = this.pointerSession;
      this.pointerSession = null, t && this.canAcceptGameplayTouch() && (this.handlePointerEnd(t, __rea_outer_S.getTouchPoint(e)), e.propagationStopped = !0);
    }, this.onFartTick = () => {
      this.isValid && 1 === this.phase && !this.winstate && (this.setNodeActive(this.getGameChild("fart"), !0), __rea_outer_u.playEffect_1(y), this.scheduleOnceIfValid(() => {
        this.setNodeActive(this.getGameChild("fart"), !1);
      }, .25));
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.allItemNum = F, this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.enterPhase0();
  }
  update(e) {
    if (!this.isValid) return;
    if (this.tickAlternates(e), 1 !== this.phase || this.winstate || !this.isWakeBarRunning) return;
    this.wakeElapsed += e;
    const t = 1 - this.wakeElapsed / 20;
    this.setWakeBarScale(Math.max(0, t)), t <= 0 && this.beginWakeFail();
  }
  onDestroy() {
    this.cleanupRuntime(!this.shouldSkipStopLevelAudio()), super.onDestroy();
  }
  handleTimeExpired() {
    return this.phase >= 2;
  }
  showHint() {
    if (1 !== this.phase) return;
    const e = this.getLowestUnfinishedStep();
    if (null === e) return;
    const t = __rea_outer_m.getInstance().getKey(`level71_hint${e}`);
    __rea_outer_g.getInstance().showView(__rea_outer_C, void 0, {
      body: t
    });
  }
  getGameProgressSnapshot() {
    const e = Math.min(this.hasInstallNum, F);
    return {
      progress: e / F,
      label: `${e}/12`
    };
  }
  markAllTasksCompleted() {
    this.hasInstallNum = F;
    for (let e = 1; e <= F; e += 1) this.completedSteps.add(e);
    this.isPhoneZoomed = !0, this.isWakeBarRunning = !1;
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.completedSteps.clear(), this.alternates.clear(), this.isPhoneZoomed = !1, this.isWakeBarRunning = !1, this.wakeElapsed = 0, this.activeDrag = null, this.pointerSession = null, this.voiceToken = 0, this.performanceToken = 0, this.hasInstallNum = 0, this.allItemNum = F, __rea_outer_u.stopVoice(), this.stopLoopSounds();
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_u.playMusic("bgm4", !0, .5), this.applyInitialVisibility(), this.applyStopButtonLabel(), this.setWakeBarScale(1), this.startAlternate("sleep", this.getSleepNodes()), this.startFlyWander(this.getGameChild("fly_1"), 1), this.startFlyWander(this.getGameChild("fly_2"), -1), this.setInputBlocked(!0), __rea_outer_f.getInstance().refreshGameProgress(), this.playDialogue("71_1", !1, () => {
      this.isValid && 0 === this.phase && this.beginManIntro();
    });
  }
  beginManIntro() {
    this.setNodeActive(this.getGameChild("woman_face"), !0), this.playLoopSound(b), this.playDialogue("71_2", !0, () => {
      this.isValid && 0 === this.phase && this.scheduleOnceIfValid(() => {
        this.isValid && 0 === this.phase && this.enterPhase1();
      }, 1.5);
    });
  }
  enterPhase1() {
    this.phase = 1, this.hidePrompt(), this.setInputBlocked(!1), this.resetWakeBar(), this.registerInteractionHandlers(), __rea_outer_f.getInstance().refreshGameProgress();
  }
  enterPhase2Success() {
    this.phase >= 2 || this.winstate || (this.phase = 2, this.winstate = !0, this.interruptGameplay(), this.setInputBlocked(!0), __rea_outer_f.getInstance().pauseTimer(), this.stopWakeBar(), this.setNodeActive(this.getGameChild("woman"), !1), this.setNodeActive(this.getGameChild("woman_face"), !1), this.setNodeActive(this.getGameChild("woman_3"), !0), this.playDialogue("71_6", !0, () => {
      this.finishSettle(!0);
    }));
  }
  beginFlytrapFail() {
    this.phase >= 2 || this.winstate || (this.phase = 2, this.winstate = !1, this.activeDrag = null, this.interruptGameplay(), this.setInputBlocked(!0), __rea_outer_f.getInstance().pauseTimer(), this.stopWakeBar(), this.stopLoopSounds(), this.setNodeActive(this.getGameChild("woman"), !1), this.setNodeActive(this.getGameChild("woman_face"), !1), this.setNodeActive(this.getGameChild("woman_1"), !1), this.setNodeActive(this.getGameChild("woman_2"), !1), this.setNodeActive(this.getGameChild("flytrap"), !1), this.setNodeActive(this.getGameChild("woman2"), !0), this.setNodeActive(this.getGameChild("woman2_1"), !0), this.setNodeActive(this.getGameChild("flytrap1"), !0), __rea_outer_u.playEffect_1("level71_6"), this.scheduleOnceIfValid(() => {
      this.isValid && 2 === this.phase && (this.showEndBackground(), this.playDialogue(I, !0, () => {
        this.finishSettle(!1);
      }));
    }, O));
  }
  beginWakeFail() {
    this.phase >= 2 || this.winstate || (this.phase = 2, this.winstate = !1, this.interruptGameplay(), this.setInputBlocked(!0), __rea_outer_f.getInstance().pauseTimer(), this.stopWakeBar(), this.setWakeBarScale(0), this.stopLoopSounds(), this.showEndBackground(), this.playDialogue(I, !0, () => {
      this.finishSettle(!1);
    }));
  }
  beginTimeoutFail() {
    this.phase = 2, this.winstate = !1, this.cleanupRuntime(!0), __rea_outer_f.getInstance().pauseTimer(), __rea_outer_g.getInstance().showView(__rea_outer_v, __rea_outer_N.WIN_ANIMATION);
  }
  finishSettle(e) {
    this.scheduleOnceIfValid(() => {
      this.isValid && 2 === this.phase && (e ? this.showLevelSuccess(0) : __rea_outer_g.getInstance().showView(__rea_outer_v, __rea_outer_N.WIN_ANIMATION));
    }, 1);
  }
  applyInitialVisibility() {
    this.restoreCachedNodes(), this.setNodeActive(this.gameNode, !0), x.forEach(e => {
      this.setNodeActive(this.getGameChild(e), !0);
    }), E.forEach(e => {
      this.setNodeActive(this.getGameChild(e), !1);
    }), this.hideAllSocks(), this.setNodeActive(this.node.getChildByPath("UIPanel/gameNode/clicks"), !0), this.restoreClickHotspots(), this.setNodeActive(this.node.getChildByPath("UIPanel/click_root"), !1), this.resetBackBgOpacity();
  }
  applyStopButtonLabel() {
    var e;
    const t = null == (e = this.getGameChild("mobile_phone2")) || null == (e = e.getChildByName("Label")) ? void 0 : e.getComponent(__rea_outer_i);
    t && (t.string = this.resolveI18nText("game62"));
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
  resolveDragKind(e) {
    if (this.isCurrentStep(1) && this.isPointInNodeBox(this.touchMedicineNode, e, !0)) return "medicine";
    if (this.isCurrentStep(3) && this.isPointInNodeBox(this.touchInsecticideNode, e, !0)) return "insecticide";
    if (this.isCurrentStep(5) && this.isPointInNodeBox(this.touchTapeNode, e, !0)) return "tape";
    if (this.isCurrentStep(8) && this.isPointInNodeBox(this.touchCatNode, e, !0)) return "cat";
    if (this.isCurrentStep(9) && (this.isHotspotHit(this.touchAirNode, e) || this.isPointInNodeBox(this.getGameChild("air2"), e, !1))) return "air2";
    if (this.isCurrentStep(10) && (this.isHotspotHit(this.touchPerfumePickNode, e) || this.isPointInNodeBox(this.getGameChild("perfume"), e, !1))) return "perfume";
    const t = [];
    return this.pushHit(t, "flytrap", this.getGameChild("flytrap"), this.canDragFlytrap()), this.pushHit(t, "blanket", this.getGameChild("blanket"), this.isCurrentStep(6)), this.pushHit(t, "catFood", this.getGameChild("cat_food"), this.isCurrentStep(7)), __rea_outer_S.pickTopmost(t, e);
  }
  resolvePointerKind(e) {
    return this.isCurrentStep(2) && this.isPointInNodeBox(this.getGameChild("drawer1"), e, !0) ? "drawer1" : this.isCurrentStep(4) && this.isPointInNodeBox(this.getGameChild("drawer"), e, !0) ? "drawer" : this.canClickPhone() && this.isPointInNodeBox(this.getGameChild("mobile_phone"), e, !1) ? "phone" : this.canClickStop() && this.isPointInNodeBox(this.getGameChild("mobile_phone2"), e, !1) ? "stop" : this.isCurrentStep(12) && this.isPointInNodeBox(this.getGameChild("curtain1"), e, !1) ? "curtain" : null;
  }
  pushHit(e, t, i, s) {
    s && null != i && i.isValid && i.activeInHierarchy && e.push({
      value: t,
      node: i
    });
  }
  isCurrentStep(e) {
    return this.getLowestUnfinishedStep() === e;
  }
  canDragFlytrap() {
    var e;
    return !0 === (null == (e = this.getGameChild("flytrap")) ? void 0 : e.active);
  }
  canClickPhone() {
    return this.isCurrentStep(11) && !this.isPhoneZoomed;
  }
  canClickStop() {
    return this.isCurrentStep(11) && this.isPhoneZoomed;
  }
  beginDrag(e, t) {
    const i = this.getDragSourceNode(e);
    if (null == i || !i.isValid) return;
    "cat" === e && (this.stopAlternate("cat"), this.setNodeActive(this.getGameChild("cat3"), !1), this.setNodeActive(i, !0)), this.bringNodeToFront(i);
    const s = this.calculateTouchOffset(t, i);
    this.activeDrag = {
      kind: e,
      dragNode: i,
      sourceNode: i,
      touchOffset: s
    }, this.setDragNodePositionFromTouch(t, i, s);
  }
  getDragSourceNode(e) {
    switch (e) {
      case "medicine":
        return this.getGameChild("medicine");
      case "insecticide":
        return this.getGameChild("insecticide");
      case "tape":
        return this.getGameChild("tape");
      case "blanket":
        return this.getGameChild("blanket");
      case "catFood":
        return this.getGameChild("cat_food");
      case "cat":
        return this.getGameChild("cat2");
      case "air2":
        return this.getGameChild("air2");
      case "perfume":
        return this.getGameChild("perfume");
      default:
        return this.getGameChild("flytrap");
    }
  }
  handleDrop(e) {
    this.canAcceptGameplayTouch() ? "flytrap" !== e.kind ? this.dispatchItemDrop(e) ? this.playActionSound() : this.restoreFailedDrag(e) : this.handleFlytrapDrop(e) : this.restoreFailedDrag(e);
  }
  restoreFailedDrag(e) {
    if ("cat" === e.kind) return this.restoreHome(e.sourceNode), void this.startAlternate("cat", [this.getGameChild("cat2"), this.getGameChild("cat3")], 1);
    this.restoreDrag(e);
  }
  dispatchItemDrop(e) {
    switch (e.kind) {
      case "medicine":
        return this.handleMedicineDrop(e);
      case "insecticide":
        return this.handleInsecticideDrop(e);
      case "tape":
        return this.handleTapeDrop(e);
      case "blanket":
        return this.handleBlanketDrop(e);
      case "catFood":
        return this.handleCatFoodDrop(e);
      case "cat":
        return this.handleCatDrop(e);
      case "air2":
        return this.handleAir2Drop(e);
      case "perfume":
        return this.handlePerfumeDrop(e);
      default:
        return !1;
    }
  }
  handleMedicineDrop(e) {
    return !(!this.isCurrentStep(1) || !this.isDroppedOn(e.dragNode, this.getGameChild("man"))) && (this.setNodeActive(e.sourceNode, !1), this.restoreHome(e.sourceNode), this.setNodeActive(this.getGameChild("man"), !1), this.setNodeActive(this.getGameChild("man1"), !0), this.startAlternate("socksD", this.getSocksPair(this.socksD1, this.socksD2)), this.setNodeActive(this.getGameChild("mobile_phone"), !1), this.stopLoopSound(b), this.playLoopSound(B), this.completeKeyStep(1), !0);
  }
  handleInsecticideDrop(e) {
    const t = this.isDroppedOn(e.dragNode, this.touchFlyNode, !0);
    if (!this.isCurrentStep(3) || !t) return !1;
    this.setNodeActive(e.sourceNode, !1), this.restoreHome(e.sourceNode), this.setNodeActive(this.getGameChild("insecticide1"), !0), this.setNodeActive(this.getGameChild("insecticide2"), !0), __rea_outer_u.playEffect_1(_);
    const i = this.beginPerformance();
    return this.wait(i, O, () => {
      this.setNodeActive(this.getGameChild("fly_1"), !1), this.setNodeActive(this.getGameChild("fly_2"), !1), this.setNodeActive(this.getGameChild("insecticide1"), !1), this.setNodeActive(this.getGameChild("insecticide2"), !1), this.stopFlyWander(this.getGameChild("fly_1")), this.stopFlyWander(this.getGameChild("fly_2")), this.stopLoopSound(B), this.resetWakeBar(), this.wait(i, V, () => {
        this.setNodeActive(this.getGameChild("sound"), !0), this.playLoopSound(T), this.completeStep(3), this.endPerformance(i);
      });
    }), !0;
  }
  handleTapeDrop(e) {
    const t = this.isDroppedOn(e.dragNode, this.getGameChild("man1")) || this.isDroppedOn(e.dragNode, this.getGameChild("sound"));
    if (!this.isCurrentStep(5) || !t) return !1;
    this.setNodeActive(e.sourceNode, !1), this.restoreHome(e.sourceNode), this.setNodeActive(this.getGameChild("sound"), !1), this.setNodeActive(this.getGameChild("tape1"), !0), this.stopLoopSound(T);
    const i = this.beginPerformance();
    return this.wait(i, V, () => {
      this.setNodeActive(this.getGameChild("man1"), !1), this.setNodeActive(this.getGameChild("tape1"), !1), this.stopAlternate("socksD"), this.setNodeActive(this.socksD1, !1), this.setNodeActive(this.socksD2, !1), this.setNodeActive(this.getGameChild("man2"), !0), this.startFartLoop(), this.completeKeyStep(5), this.endPerformance(i);
    }), !0;
  }
  handleBlanketDrop(e) {
    return !(!this.isCurrentStep(6) || !this.isDroppedOn(e.dragNode, this.getGameChild("man2"))) && (this.setNodeActive(e.sourceNode, !1), this.restoreHome(e.sourceNode), this.stopFartLoop(), this.setNodeActive(this.getGameChild("blanket1"), !0), this.setNodeActive(this.getGameChild("cat"), !1), this.startAlternate("cat", [this.getGameChild("cat2"), this.getGameChild("cat3")], 1), this.completeKeyStep(6), this.scheduleCatLoop(), !0);
  }
  scheduleCatLoop() {
    this.scheduleOnceIfValid(() => {
      1 !== this.phase || this.winstate || this.completedSteps.has(8) || this.playLoopSound(P);
    }, 0);
  }
  handleCatFoodDrop(e) {
    return !(!this.isCurrentStep(7) || !this.isDroppedOn(e.dragNode, this.touchCatBowlNode, !0)) && (this.setNodeActive(e.sourceNode, !1), this.restoreHome(e.sourceNode), this.setNodeActive(this.getGameChild("cat_bowl"), !1), this.setNodeActive(this.getGameChild("cat_bowl1"), !0), this.completeStep(7), !0);
  }
  handleCatDrop(e) {
    if (!this.isCurrentStep(8) || !this.isDroppedOn(e.dragNode, this.touchCatBowlNode, !0)) return !1;
    this.setNodeActive(this.getGameChild("cat2"), !1), this.setNodeActive(this.getGameChild("cat3"), !1), this.restoreHome(e.sourceNode), this.setNodeActive(this.getGameChild("cat1"), !0), this.stopLoopSound(P);
    const t = this.beginPerformance();
    return this.wait(t, O, () => {
      this.setNodeActive(this.getGameChild("cat_bowl1"), !1), this.setNodeActive(this.getGameChild("cat1"), !1), this.restoreHome(this.getGameChild("cat")), this.setNodeActive(this.getGameChild("cat"), !0), this.wait(t, V, () => {
        this.setNodeActive(this.getGameChild("woman"), !0), this.setNodeActive(this.getGameChild("woman_face"), !0), this.startAlternate("woman", [this.getGameChild("woman_1"), this.getGameChild("woman_2")]), this.bringNodeToFront(this.getGameChild("woman_face")), this.completeKeyStep(8), this.endPerformance(t);
      });
    }), !0;
  }
  handleAir2Drop(e) {
    if (!this.isCurrentStep(9) || !this.isDroppedOn(e.dragNode, this.getGameChild("air"))) return !1;
    this.setNodeActive(e.sourceNode, !1), this.restoreHome(e.sourceNode), this.setNodeActive(this.getGameChild("air1"), !1), this.stopAlternate("woman"), this.setNodeActive(this.getGameChild("woman_1"), !1), this.setNodeActive(this.getGameChild("woman_2"), !1), this.setNodeActive(this.getGameChild("woman_face"), !0), this.bringNodeToFront(this.getGameChild("woman_face"));
    const t = this.beginPerformance();
    return this.wait(t, V, () => {
      this.setNodeActive(this.getGameChild("man2"), !1), this.setNodeActive(this.getGameChild("man3"), !0), this.setNodeActive(this.getGameChild("blanket1"), !0), this.showSocksCAndHideOthers(), this.resetWakeBar(), this.playDialogue("71_3", !0, () => {
        this.isPerformanceCurrent(t) && (this.completeStep(9), this.endPerformance(t));
      });
    }), !0;
  }
  handlePerfumeDrop(e) {
    const t = this.isDroppedOn(e.dragNode, this.touchPerfumeDropNode, !0);
    if (!this.isCurrentStep(10) || !t) return !1;
    this.setNodeActive(e.sourceNode, !1), this.restoreHome(e.sourceNode), this.setNodeActive(this.getGameChild("perfume1"), !0), this.setNodeActive(this.getGameChild("perfume1_1"), !0), __rea_outer_u.playEffect_1(_);
    const i = this.beginPerformance();
    return this.wait(i, O, () => {
      this.setNodeActive(this.getGameChild("perfume1"), !1), this.setNodeActive(this.getGameChild("perfume1_1"), !1), this.hideAllSocks(), this.wait(i, V, () => {
        this.setNodeActive(this.getGameChild("mobile_phone"), !0), this.setNodeActive(this.getGameChild("mobile_phone_1"), !0), this.startPhoneShake(this.getGameChild("mobile_phone")), this.playLoopSound(D), this.resetWakeBar(), this.playDialogue("71_4", !0, () => {
          this.isPerformanceCurrent(i) && (this.completeStep(10), this.endPerformance(i));
        });
      });
    }), !0;
  }
  handleFlytrapDrop(e) {
    if (this.isDroppedOn(e.dragNode, this.getGameChild("fly_1"), !0) || this.isDroppedOn(e.dragNode, this.getGameChild("fly_2"), !0) || this.isDroppedOn(e.dragNode, this.getGameChild("woman"), !0)) return this.playActionSound(), void this.beginFlytrapFail();
    this.restoreDrag(e);
  }
  handlePointerEnd(e, t) {
    this.playActionSound(), "curtain" !== e.kind ? this.handleClick(e.kind) : this.handleCurtainSwipe(e.startPoint, t);
  }
  handleClick(e) {
    return "drawer1" === e && this.isCurrentStep(2) ? (this.setNodeActive(this.getGameChild("drawer1"), !0), this.setNodeActive(this.getGameChild("insecticide"), !0), void this.completeStep(2)) : "drawer" === e && this.isCurrentStep(4) ? (this.setNodeActive(this.getGameChild("drawer"), !0), this.setNodeActive(this.getGameChild("tape"), !0), void this.completeStep(4)) : "phone" === e && this.canClickPhone() ? (this.isPhoneZoomed = !0, this.setNodeActive(this.getGameChild("mobile_phone1"), !0), this.setNodeActive(this.getGameChild("mobile_phone2"), !0), void this.startPhoneShake(this.getGameChild("mobile_phone1"))) : void ("stop" === e && this.canClickStop() && this.beginStopAlarm());
  }
  beginStopAlarm() {
    const e = this.beginPerformance();
    this.stopPhoneShake(this.getGameChild("mobile_phone")), this.stopPhoneShake(this.getGameChild("mobile_phone1")), this.setNodeActive(this.getGameChild("mobile_phone1"), !1), this.setNodeActive(this.getGameChild("mobile_phone2"), !1), this.setNodeActive(this.getGameChild("mobile_phone_1"), !1), this.stopLoopSound(D), this.wait(e, V, () => {
      this.setNodeActive(this.getGameChild("curtain"), !1), this.setNodeActive(this.getGameChild("curtain1"), !0), this.setNodeActive(this.getGameChild("light"), !0), this.resetWakeBar(), this.playDialogue("71_5", !0, () => {
        this.isPerformanceCurrent(e) && (this.completeStep(11), this.endPerformance(e));
      });
    });
  }
  handleCurtainSwipe(e, t) {
    this.isCurrentStep(12) && this.isSwipeDown(e, t) && (this.setNodeActive(this.getGameChild("curtain1"), !1), this.setNodeActive(this.getGameChild("light"), !1), this.setNodeActive(this.getGameChild("curtain"), !0), this.resetWakeBar(), this.stopWakeBar(), this.completeStep(12));
  }
  isSwipeDown(e, t) {
    const i = t.x - e.x,
      s = t.y - e.y;
    return -s >= 30 && Math.abs(s) >= 1.2 * Math.abs(i);
  }
  completeKeyStep(e) {
    this.resetWakeBar(), this.completeStep(e);
  }
  completeStep(e) {
    this.completedSteps.has(e) || (this.completedSteps.add(e), this.disableHotspotsForStep(e), this.hasInstallNum = this.completedSteps.size, __rea_outer_f.getInstance().refreshGameProgress(), this.hasInstallNum >= F && this.enterPhase2Success());
  }
  getLowestUnfinishedStep() {
    for (let e = 1; e <= F; e += 1) if (!this.completedSteps.has(e)) return e;
    return null;
  }
  resetWakeBar() {
    this.wakeElapsed = 0, this.setWakeBarScale(1), this.isWakeBarRunning = 1 === this.phase && !this.winstate;
  }
  stopWakeBar() {
    this.isWakeBarRunning = !1, this.stopAlternate("sleep"), this.setNodeActive(this.getGameChild("sleep1"), !1), this.setNodeActive(this.getGameChild("sleep2"), !1), this.setNodeActive(this.getGameChild("sleep3"), !1);
  }
  setWakeBarScale(e) {
    var t;
    if (null == (t = this.progressFillNode) || !t.isValid) return;
    const i = this.progressFillNode.scale;
    this.progressFillNode.setScale(e, i.y, i.z);
  }
  startAlternate(e, t, i = .5) {
    const s = t.filter(e => !(null == e || !e.isValid));
    if (0 === s.length) return;
    const o = {
      nodes: s,
      interval: i,
      index: 0,
      elapsed: 0
    };
    this.alternates.set(e, o), this.showAlternateFrame(o);
  }
  tickAlternates(e) {
    this.alternates.forEach(t => {
      t.elapsed += e, t.elapsed < t.interval || (t.elapsed = 0, t.index = (t.index + 1) % t.nodes.length, this.showAlternateFrame(t));
    });
  }
  showAlternateFrame(e) {
    e.nodes.forEach((t, i) => {
      this.setNodeActive(t, i === e.index);
    });
  }
  stopAlternate(e) {
    this.alternates.delete(e);
  }
  startFartLoop() {
    this.unschedule(this.onFartTick), this.onFartTick(), this.schedule(this.onFartTick, .5);
  }
  stopFartLoop() {
    this.unschedule(this.onFartTick), this.setNodeActive(this.getGameChild("fart"), !1), this.stopLoopSound(y);
  }
  startFlyWander(e, t) {
    if (null == e || !e.isValid) return;
    const i = this.nodeOrigins.get(e) ?? e.position.clone();
    this.stopTweenIfValid(e), e.setPosition(i), __rea_outer_o(e).to(.6, {
      position: new __rea_outer_h(i.x + 20 * t, i.y + 12, 0)
    }).to(.6, {
      position: new __rea_outer_h(i.x - 20 * t, i.y - 8, 0)
    }).to(.6, {
      position: i.clone()
    }).union().repeatForever().start();
  }
  stopFlyWander(e) {
    this.stopTweenIfValid(e), this.restoreOrigin(e);
  }
  startPhoneShake(e) {
    if (null == e || !e.isValid) return;
    const t = this.nodeOrigins.get(e) ?? e.position.clone();
    this.stopTweenIfValid(e), e.setPosition(t), __rea_outer_o(e).to(.05, {
      position: new __rea_outer_h(t.x + 5, t.y, 0)
    }).to(.05, {
      position: new __rea_outer_h(t.x - 5, t.y, 0)
    }).union().repeatForever().start();
  }
  stopPhoneShake(e) {
    this.stopTweenIfValid(e), this.restoreOrigin(e);
  }
  playLoopSound(e) {
    __rea_outer_u.stopOneEffect(e), __rea_outer_u.playEffect(e, void 0, !0);
  }
  stopLoopSound(e) {
    __rea_outer_u.stopOneEffect(e);
  }
  stopLoopSounds() {
    L.forEach(e => {
      this.stopLoopSound(e);
    });
  }
  beginPerformance() {
    return this.performanceToken += 1, this.setInputBlocked(!0), this.performanceToken;
  }
  isPerformanceCurrent(e) {
    return this.isValid && 1 === this.phase && e === this.performanceToken && !this.winstate;
  }
  endPerformance(e) {
    e === this.performanceToken && this.isValid && 1 === this.phase && !this.winstate && this.setInputBlocked(!1);
  }
  wait(e, t, i) {
    this.scheduleOnceIfValid(() => {
      this.isPerformanceCurrent(e) && i();
    }, t);
  }
  interruptGameplay() {
    this.performanceToken += 1, this.voiceToken += 1, this.cancelDrag(), this.pointerSession = null, this.unregisterInteractionHandlers(), this.stopFartLoop(), this.stopAlternate("cat"), this.stopAlternate("socksA"), this.stopAlternate("socksC"), this.stopAlternate("socksD"), this.stopAlternate("woman"), this.stopPhoneShake(this.getGameChild("mobile_phone")), this.stopPhoneShake(this.getGameChild("mobile_phone1")), this.stopAllGameplayTweens(), __rea_outer_u.stopVoice();
  }
  playActionSound() {
    __rea_outer_u.playEffect_1("level71_1");
  }
  playDialogue(e, t, i) {
    this.voiceToken += 1;
    const s = this.voiceToken;
    this.showPrompt(e), __rea_outer_u.stopVoice(), __rea_outer_u.playVoice(e);
    let o = !1;
    const h = () => {
        !o && this.isValid && s === this.voiceToken && (o = !0, this.unschedule(n), t && this.hidePrompt(), null == i || i());
      },
      n = () => {
        h();
      },
      a = this.resolveDialogueHoldSeconds(e);
    this.scheduleOnce(h, a), this.scheduleOnce(n, Math.max(8, a + .5));
  }
  resolveDialogueHoldSeconds(e) {
    var t;
    const i = (null == (t = __rea_outer_u.audioMap.get(e)) ? void 0 : t.getDuration()) ?? 0;
    return i > .1 ? i : 2.5;
  }
  showPrompt(e) {
    this.promptLabel && (this.promptLabel.string = this.resolveI18nText(e)), this.setNodeActive(this.promptBoxNode, !0), this.bringNodeToFront(this.promptBoxNode);
  }
  hidePrompt() {
    this.setNodeActive(this.promptBoxNode, !1);
  }
  resolveI18nText(e) {
    const t = __rea_outer_m.getInstance().getKey(e);
    return t && t !== e ? t : e;
  }
  restoreDrag(e) {
    this.restoreHome(e.sourceNode), this.setNodeActive(e.sourceNode, !0);
  }
  cancelDrag() {
    this.activeDrag && ("cat" === this.activeDrag.kind ? (this.restoreHome(this.activeDrag.sourceNode), this.startAlternate("cat", [this.getGameChild("cat2"), this.getGameChild("cat3")], 1)) : this.restoreDrag(this.activeDrag), this.activeDrag = null);
  }
  calculateTouchOffset(e, t) {
    const i = t.parent;
    if (null == i || !i.isValid) return __rea_outer_h.ZERO.clone();
    const s = this.getTouchLocalPosition(e, i);
    return new __rea_outer_h(t.position.x - s.x, t.position.y - s.y, 0);
  }
  setDragNodePositionFromTouch(e, t, i) {
    const s = t.parent;
    if (null == s || !s.isValid) return;
    const o = this.getTouchLocalPosition(e, s);
    t.setPosition(o.x + i.x, o.y + i.y, t.position.z);
  }
  getTouchLocalPosition(e, t) {
    const i = e.getUILocation(),
      s = t.getComponent(__rea_outer_n);
    return s ? s.convertToNodeSpaceAR(new __rea_outer_h(i.x, i.y, 0)) : __rea_outer_h.ZERO.clone();
  }
  isDroppedOn(e, t, i = !1) {
    return !!(e.isValid && null != t && t.isValid && e.getComponent(__rea_outer_n) && t.getComponent(__rea_outer_n)) && !(!i && !t.activeInHierarchy) && __rea_outer_S.isRectWithinDragDistance(this.getNodeWorldBox(e), this.getNodeWorldBox(t));
  }
  isPointInNodeBox(e, t, i) {
    return !(null == e || !e.isValid) && !(!i && !e.activeInHierarchy) && this.getNodeWorldBox(e).contains(t);
  }
  isHotspotHit(e, t) {
    return this.isPointInNodeBox(e, t, !0);
  }
  getNodeWorldBox(e) {
    var t;
    const i = e.getComponent(__rea_outer_n);
    if (!i) return new __rea_outer_a();
    if (e.activeInHierarchy) return i.getBoundingBoxToWorld();
    const s = null != (t = this.gameNode) && t.isValid ? this.gameNode : this.findActiveSpaceNode(e),
      o = null == s ? void 0 : s.getComponent(__rea_outer_n);
    if (!o || !s) return i.getBoundingBoxToWorld();
    const h = this.getLocalPositionIn(e, s),
      r = o.convertToWorldSpaceAR(h),
      l = i.contentSize.width,
      c = i.contentSize.height;
    return new __rea_outer_a(r.x - l * i.anchorPoint.x, r.y - c * i.anchorPoint.y, l, c);
  }
  findActiveSpaceNode(e) {
    let t = e.parent;
    for (; t;) {
      if (t.activeInHierarchy) return t;
      t = t.parent;
    }
    return null;
  }
  getLocalPositionIn(e, t) {
    const i = e.position.clone();
    let s = e.parent;
    for (; s && s !== t;) i.x += s.position.x, i.y += s.position.y, s = s.parent;
    return i;
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
    t && (this.stopTweenIfValid(e), e.setPosition(t));
  }
  restoreHome(e) {
    if (null == e || !e.isValid) return;
    this.stopTweenIfValid(e);
    const t = this.homeParents.get(e);
    null != t && t.isValid && e.parent !== t && e.setParent(t), this.restoreOrigin(e), this.restoreSibling(e);
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
    null != (e = this.backBgNode) && e.isValid && __rea_outer_k(this.backBgNode, 0);
  }
  showEndBackground() {
    this.setNodeActive(this.getGameChild("bg_end"), !0), this.bringNodeToFront(this.getGameChild("bg_end")), this.bringNodeToFront(this.promptBoxNode);
  }
  scheduleOnceIfValid(e, t) {
    this.scheduleOnce(() => {
      this.isValid && e();
    }, t);
  }
  cleanupRuntime(e) {
    this.unscheduleAllCallbacks(), this.unregisterInteractionHandlers(), this.alternates.clear(), this.voiceToken += 1, this.performanceToken += 1, this.pointerSession = null, this.isWakeBarRunning = !1, this.cancelDrag(), e && (__rea_outer_u.stopVoice(), this.stopLoopSounds()), this.stopAllGameplayTweens();
  }
  stopAllGameplayTweens() {
    this.nodeOrigins.forEach((e, t) => {
      this.stopTweenIfValid(t);
    }), this.stopTweenIfValid(this.backBgNode);
  }
  stopTweenIfValid(e) {
    null != e && e.isValid && __rea_outer_A(e);
  }
  setNodeActive(e, t) {
    null != e && e.isValid && (e.active = t);
  }
  getGameChild(e) {
    var t;
    return this.nodeByName.get(e) ?? (null == (t = this.gameNode) ? void 0 : t.getChildByName(e)) ?? null;
  }
  getSleepNodes() {
    return [this.getGameChild("sleep1"), this.getGameChild("sleep2"), this.getGameChild("sleep3")].filter(e => !!e);
  }
  getSocksPair(e, t) {
    return [e, t].filter(e => !!e);
  }
  hideSocksPair(e, t, i) {
    this.stopAlternate(i), this.setNodeActive(e, !1), this.setNodeActive(t, !1);
  }
  hideAllSocks() {
    this.hideSocksPair(this.socksA1, this.socksA2, "socksA"), this.hideSocksPair(this.socksB1, this.socksB2, "socksB"), this.hideSocksPair(this.socksC1, this.socksC2, "socksC"), this.hideSocksPair(this.socksD1, this.socksD2, "socksD");
  }
  getClickHotspots() {
    return [this.touchFlyNode, this.touchCatNode, this.touchPerfumeDropNode, this.touchCatBowlNode, this.touchInsecticideNode, this.touchMedicineNode, this.touchTapeNode, this.touchPerfumePickNode, this.touchAirNode];
  }
  restoreClickHotspots() {
    this.getClickHotspots().forEach(e => {
      this.setNodeActive(e, !0);
    });
  }
  disableHotspotsForStep(e) {
    switch (e) {
      case 1:
        return void this.setNodeActive(this.touchMedicineNode, !1);
      case 3:
        return this.setNodeActive(this.touchInsecticideNode, !1), void this.setNodeActive(this.touchFlyNode, !1);
      case 5:
        return void this.setNodeActive(this.touchTapeNode, !1);
      case 8:
        return void this.setNodeActive(this.touchCatNode, !1);
      case 9:
        return void this.setNodeActive(this.touchAirNode, !1);
      case 10:
        return this.setNodeActive(this.touchPerfumePickNode, !1), void this.setNodeActive(this.touchPerfumeDropNode, !1);
      default:
        return;
    }
  }
  showSocksCAndHideOthers() {
    this.hideSocksPair(this.socksA1, this.socksA2, "socksA"), this.hideSocksPair(this.socksB1, this.socksB2, "socksB"), this.hideSocksPair(this.socksD1, this.socksD2, "socksD"), this.startAlternate("socksC", this.getSocksPair(this.socksC1, this.socksC2));
  }
  cacheNode(e, t) {
    null != e && e.isValid && (t ? this.nodeByName.set(t, e) : this.nodeByName.has(e.name) || this.nodeByName.set(e.name, e), this.nodeOrigins.set(e, e.position.clone()), this.siblingOrigins.set(e, e.getSiblingIndex()), e.parent && this.homeParents.set(e, e.parent));
  }
  resolveSocksBySibling() {
    var e;
    const t = (null == (e = this.gameNode) ? void 0 : e.children) ?? [];
    this.socksA2 = t[49] ?? null, this.socksA1 = t[50] ?? null, this.socksB2 = t[51] ?? null, this.socksB1 = t[52] ?? null, this.socksC2 = t[53] ?? null, this.socksC1 = t[54] ?? null, this.socksD2 = t[55] ?? null, this.socksD1 = t[56] ?? null, [this.socksA1, this.socksA2, this.socksB1, this.socksB2, this.socksC1, this.socksC2, this.socksD1, this.socksD2].forEach(e => {
      this.cacheNode(e);
    });
  }
  resolveClicksBySibling() {
    var e;
    const t = (null == (e = this.node.getChildByPath("UIPanel/gameNode/clicks")) ? void 0 : e.children) ?? [];
    this.touchFlyNode = t[0] ?? null, this.touchCatNode = t[1] ?? null, this.touchPerfumeDropNode = t[2] ?? null, this.touchCatBowlNode = t[3] ?? null, this.touchInsecticideNode = t[4] ?? null, this.touchMedicineNode = t[5] ?? null, this.touchTapeNode = t[6] ?? null, this.touchPerfumePickNode = t[9] ?? null, this.touchAirNode = t[8] ?? null, this.getClickHotspots().forEach(e => {
      this.cacheNode(e);
    });
  }
  resolveReferences() {
    var e, t;
    this.gameNode = this.node.getChildByPath("UIPanel/gameNode"), this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.nodeByName.clear(), this.nodeOrigins.clear(), this.siblingOrigins.clear(), this.homeParents.clear(), null == (e = this.gameNode) || e.children.forEach(e => {
      "socks_1" !== e.name && e.name, this.cacheNode(e);
    }), this.resolveSocksBySibling(), this.resolveClicksBySibling(), this.promptBoxNode = this.getGameChild("prompt_box"), this.promptLabel = (null == (t = this.promptBoxNode) || null == (t = t.getChildByName("Label")) ? void 0 : t.getComponent(__rea_outer_i)) ?? null, this.progressFillNode = this.getGameChild("progress1"), this.correctNativePremultipliedSprites(), this.warnIfMissing();
  }
  correctNativePremultipliedSprites() {
    __rea_outer_r.isNative && (this.applyPremultipliedBlend(this.getGameChild("light")), this.applyPremultipliedBlend(this.getGameChild("air1")));
  }
  applyPremultipliedBlend(e) {
    const t = null == e ? void 0 : e.getComponent(__rea_outer_l);
    t && (t.spriteFrame && (t.spriteFrame.packable = !1), t.srcBlendFactor = __rea_outer_c.BlendFactor.ONE);
  }
  warnIfMissing() {
    this.gameNode || console.warn("[Level_71] missing gameNode");
    [...x, ...E].forEach(e => {
      this.getGameChild(e) || console.warn(`[Level_71] missing ${e}`);
    }), this.socksA1 && this.socksA2 && this.socksC1 && this.socksC2 && this.socksD1 && this.socksD2 || console.warn("[Level_71] missing socks sibling pair A, C or D"), this.promptLabel || console.warn("[Level_71] missing prompt_box/Label"), this.backBgNode || console.warn("[Level_71] missing backBG"), this.progressFillNode || console.warn("[Level_71] missing progress1"), this.getClickHotspots().some(e => !e) && console.warn("[Level_71] missing clicks hotspot sibling");
  }
}) || G;
__rea_outer_t._RF.pop();
export { __recovered_export_0 as default };
