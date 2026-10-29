// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_79.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_i } from "cc";
import { Vec3 as __rea_outer_e } from "cc";
import { tween as __rea_outer_s } from "cc";
import { Node as __rea_outer_o } from "cc";
import { Vec2 as __rea_outer_h } from "cc";
import { Sprite as __rea_outer_n } from "cc";
import { Color as __rea_outer_a } from "cc";
import { UITransform as __rea_outer_l } from "cc";
import { Label as __rea_outer_d } from "cc";
import { _decorator as __rea_outer_r } from "cc";
import { default as __rea_outer_c } from "./LevelBase";
import { default as __rea_outer_p } from "./AudioManager";
import { I18nController as __rea_outer_u } from "./i18n-controller";
import { UIManager as __rea_outer_g } from "./ui-manager";
import { UILayer as __rea_outer_m } from "./ui-layer";
import { UIHint as __rea_outer_N } from "./uihint";
import { UIFail as __rea_outer_y } from "./uifail";
import { GameController as __rea_outer_f } from "./GameController";
import { getUIOpacity as __rea_outer_b } from "./CocosCompat";
import { setNodeOpacity as __rea_outer__ } from "./CocosCompat";
import { stopAllTweens as __rea_outer_w } from "./CocosCompat";
let __recovered_export_0;
var S;
__rea_outer_i._RF.push({}, "a99cbpmQRxN96JSc9tq7Vif", "Level_79", void 0);
const {
    ccclass: v
  } = __rea_outer_r,
  H = "level79_2",
  T = "level79_3",
  k = 11,
  I = new Set(["toadstool_head1", "toadstool_head2", "hula_hoop_1", "hula_hoop_2", "man_angry"]),
  V = ["zombie_body", "zombie_body_1", "zombie_body1", "zombie_body1_1", "zombie_body2", "zombie_body2_suit"],
  C = ["toadstool_body", "toadstool_body_thin", "toadstool_body1", "toadstool_body1_skirt"],
  B = ["hair", "facial_mask", "meat", "lemon", "hula_hoop", "abs", "suit", "skirt"];
__recovered_export_0 = v("Level_79")(S = class extends __rea_outer_c {
  constructor(...t) {
    super(...t), this.phase = 0, this.winstate = !1, this.stageNode = null, this.backBgNode = null, this.promptBoxNode = null, this.promptLabel = null, this.nodeByName = new Map(), this.originByNode = new Map(), this.wrongSteps = new Set(), this.bgNode = null, this.bgRoomNode = null, this.clockNode = null, this.sunNode = null, this.zombieNode = null, this.zombieHead = null, this.zombieHead1 = null, this.zombieHair = null, this.zombieAcne = null, this.toadstoolHead = null, this.toadstoolAcne = null, this.toadstoolBelly = null, this.faceMask = null, this.allergyNode = null, this.allergyShortNode = null, this.endNode = null, this.fightNode = null, this.fightSymbols = [], this.fightOrder = [], this.fightCursor = 0, this.shortHead1 = null, this.shortHead2 = null, this.tallHead1 = null, this.tallHead2 = null, this.shortHoop1 = null, this.shortHoop2 = null, this.tallHoop1 = null, this.tallHoop2 = null, this.angryZombie = null, this.angryMushroom = null, this.toadstoolHeadKind = "none", this.zombieBodyName = "", this.mushroomBodyName = "", this.draggedNode = null, this.dragOffset = new __rea_outer_e(), this.dragStart = null, this.pointerStart = null, this.voiceToken = 0, this.actionToken = 0, this.isInputLocked = !1, this.isHeldForTimeUp = !1, this.isHoopRunning = !1, this.isSwipeDone = !1, this.isClockDone = !1, this.isSunDone = !1, this.isHairRevealStarted = !1, this.onFightTick = () => {
      this.isValid && 2 === this.phase && !this.winstate ? (this.fightCursor += 1, this.fightCursor >= this.fightOrder.length && (this.fightOrder = this.shuffleNodes(this.fightOrder), this.fightCursor = 0), this.showCurrentFightSymbol()) : this.unschedule(this.onFightTick);
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.prepareBackBg(), this.allItemNum = k, this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.enterPhase0();
  }
  update() {
    this.isHeldForTimeUp && 1 === this.phase && (__rea_outer_f.getInstance().getRemainingTime() <= 0 || (this.isHeldForTimeUp = !1));
  }
  onDestroy() {
    this.cleanupRuntime(!this.shouldSkipStopLevelAudio()), super.onDestroy();
  }
  handleTimeExpired() {
    return 1 !== this.phase || (this.isHeldForTimeUp = !0, this.cancelDrag(), !1);
  }
  showHint() {
    if (!this.canAcceptInput()) return;
    const t = this.resolveHintStepId();
    if (t < 1 || t > k) return;
    const i = __rea_outer_u.getInstance().getKey(`level79_hint${t}`);
    __rea_outer_g.getInstance().showView(__rea_outer_N, void 0, {
      body: i
    });
  }
  getGameProgressSnapshot() {
    const t = Math.min(this.hasInstallNum, k);
    return {
      progress: t / k,
      label: `${t}/11`
    };
  }
  markAllTasksCompleted() {
    this.hasInstallNum = k, this.phase = 2, this.winstate = !0, this.isInputLocked = !0;
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.wrongSteps.clear(), this.draggedNode = null, this.dragStart = null, this.pointerStart = null, this.voiceToken += 1, this.actionToken += 1, this.isInputLocked = !1, this.isHeldForTimeUp = !1, this.isHoopRunning = !1, this.isSwipeDone = !1, this.isClockDone = !1, this.isSunDone = !1, this.isHairRevealStarted = !1, this.fightCursor = 0, this.hasInstallNum = 0, this.allItemNum = k, this.toadstoolHeadKind = "none", this.zombieBodyName = "", this.mushroomBodyName = "", this.unscheduleAllCallbacks(), __rea_outer_p.stopVoice(), this.restoreOrigins();
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_p.playMusic("bgm4", !0, .5), __rea_outer_f.getInstance().pauseTimer(), this.applyOpeningVisibility(), this.registerInputHandlers(), this.setInputLocked(!0), __rea_outer_f.getInstance().refreshGameProgress(), this.scheduleOnce(() => {
      this.isValid && (this.hideNode(this.angryZombie), this.hideNode(this.angryMushroom));
    }, 2), this.playDialogue("79_1", () => {
      this.isValid && 0 === this.phase && this.playDialogue("79_2", () => {
        this.isValid && 0 === this.phase && this.playBlackTransition(() => this.enterRoom(), () => this.enterPhase1());
      });
    });
  }
  enterRoom() {
    this.hideNode(this.bgNode), this.showNode(this.bgRoomNode), this.showNode(this.clockNode), this.showNode(this.sunNode);
  }
  enterPhase1() {
    this.isValid && 0 === this.phase && (this.phase = 1, this.isInputLocked = !1, __rea_outer_f.getInstance().resumeTimer(), __rea_outer_f.getInstance().refreshGameProgress());
  }
  enterSuccess() {
    2 !== this.phase && (this.phase = 2, this.winstate = !0, this.isInputLocked = !0, this.isHeldForTimeUp = !1, this.actionToken += 1, this.isHoopRunning = !1, __rea_outer_f.getInstance().pauseTimer(), this.playBlackTransition(() => this.showOutdoorScene(), () => this.playSuccessVoices()));
  }
  enterFail() {
    2 !== this.phase && (this.phase = 2, this.winstate = !1, this.isInputLocked = !0, this.isHeldForTimeUp = !1, this.actionToken += 1, this.isHoopRunning = !1, __rea_outer_f.getInstance().pauseTimer(), this.playBlackTransition(() => this.showOutdoorScene(), () => this.playFailVoices()));
  }
  playSuccessVoices() {
    this.isValid && this.winstate && this.playDialogue("79_22", () => {
      this.isValid && this.winstate && (this.playDialogue("79_23"), this.scheduleOnce(() => this.showEndCard(), 1));
    });
  }
  playFailVoices() {
    this.isValid && !this.winstate && this.playDialogue("79_20", () => {
      this.isValid && !this.winstate && (this.playDialogue("79_21"), this.scheduleOnce(() => this.showFight(), 1));
    });
  }
  showEndCard() {
    this.isValid && this.winstate && (this.voiceToken += 1, this.hidePrompt(), this.showNode(this.endNode), this.bringToFront(this.endNode), this.scheduleOnce(() => {
      this.isValid && this.winstate && this.showLevelSuccess(0);
    }, 1));
  }
  showFight() {
    this.isValid && 2 === this.phase && !this.winstate && (this.hideCharacters(), this.hideNode(this.angryZombie), this.hideNode(this.angryMushroom), this.showNode(this.fightNode), this.fightSymbols.forEach(t => this.placeBelowPrompt(t)), this.startFightLoop(), __rea_outer_p.playEffect_1("level79_1"), this.scheduleOnce(() => {
      this.isValid && !this.winstate && __rea_outer_g.getInstance().showView(__rea_outer_y, __rea_outer_m.WIN_ANIMATION);
    }, 1));
  }
  showOutdoorScene() {
    this.showNode(this.bgNode), this.hideNode(this.bgRoomNode), this.hideNode(this.clockNode), this.hideNode(this.sunNode), this.hideNode(this.endNode), B.forEach(t => this.hideNode(this.getNode(t))), this.hideHoops(), this.hideFightVisuals();
  }
  applyOpeningVisibility() {
    var t;
    null == (t = this.stageNode) || t.children.forEach(t => {
      t.active = !1;
    }), this.showNode(this.bgNode), this.showNode(this.zombieNode), this.showMushroomBody("toadstool_body"), this.showToadstoolHead("origin"), this.showNode(this.angryZombie), this.showNode(this.angryMushroom), this.hideNode(this.node.getChildByPath("UIPanel/gameNode/clicks")), this.hideNode(this.node.getChildByPath("UIPanel/gameNode/drags")), this.hideNode(this.node.getChildByPath("UIPanel/gameNode/swips")), this.hideNode(this.node.getChildByPath("UIPanel/click_root")), this.hideNode(this.node.getChildByPath("UIPanel/demo")), this.hideNode(this.backBgNode);
  }
  completeSwipe() {
    this.actionToken += 1, this.isSwipeDone = !0, this.hideNode(this.zombieNode), this.showZombieBody("zombie_body"), this.showNode(this.zombieHead), __rea_outer_p.playEffect_1(H), this.playDialogue("79_3"), this.consumeStep(), this.revealHairIfOpeningDone();
  }
  completeClock() {
    this.actionToken += 1, this.isClockDone = !0, this.hideNode(this.clockNode), this.hideNode(this.zombieHead), this.showNode(this.zombieHead1), __rea_outer_p.playEffect_1(H), this.playDialogue("79_4"), this.consumeStep(), this.revealHairIfOpeningDone();
  }
  completeSun() {
    this.actionToken += 1, this.isSunDone = !0, this.hideNode(this.sunNode), this.showToadstoolHead("short1"), this.showNode(this.toadstoolAcne), __rea_outer_p.playEffect_1(H), this.playDialogue("79_5"), this.consumeStep(), this.revealHairIfOpeningDone();
  }
  revealHairIfOpeningDone() {
    this.areOpeningStepsDone() && !this.isHairRevealStarted && (this.isHairRevealStarted = !0, this.setInputLocked(!0), this.scheduleReveal("hair"));
  }
  areOpeningStepsDone() {
    return this.isSwipeDone && this.isClockDone && this.isSunDone;
  }
  resolveHintStepId() {
    return this.isSwipeDone ? this.isClockDone ? this.isSunDone ? this.hasInstallNum + 1 : 3 : 2 : 1;
  }
  applyHair(t, i) {
    this.beginChoice(), this.hideNode(i), t ? (this.showNode(this.zombieHair), __rea_outer_p.playEffect_1(H), this.playStepVoice("79_6", "facial_mask", !1)) : (this.wrongSteps.add(4), this.showToadstoolHead("short2"), __rea_outer_p.playEffect_1(T), this.playStepVoice("79_14", "facial_mask", !1)), this.consumeStep();
  }
  applyMask(t, i) {
    const e = this.beginChoice();
    if (this.hideNode(i), this.consumeStep(), !t) return this.wrongSteps.add(5), this.showNode(this.zombieAcne), __rea_outer_p.playEffect_1(T), void this.playStepVoice("79_15", "meat", !1);
    __rea_outer_p.playEffect_1(H), this.showNode(this.faceMask), this.scheduleOnce(() => {
      this.isStepLive(e) && (this.hideNode(this.faceMask), this.hideNode(this.toadstoolAcne), this.playStepVoice("79_7", "meat", !1));
    }, .7);
  }
  applyMeat(t, i) {
    if (this.beginChoice(), this.hideNode(i), this.consumeStep(), t) return this.showMushroomBody("toadstool_body1"), this.showNode(this.toadstoolBelly), this.raiseToadstoolHead(), this.raiseFaceExtras(), __rea_outer_p.playEffect_1(H), void this.playStepVoice("79_8", "lemon", !1);
    this.wrongSteps.add(6), this.showZombieBody("zombie_body1"), __rea_outer_p.playEffect_1(T), this.playStepVoice("79_16", "lemon", !1);
  }
  applyLemon(t, i) {
    if (this.beginChoice(), this.hideNode(i), this.consumeStep(), t) return this.applyLemonToZombie(), __rea_outer_p.playEffect_1(H), void this.playStepVoice("79_9", "hula_hoop", !1);
    this.wrongSteps.add(7), this.showNode(this.wrongSteps.has(6) ? this.allergyShortNode : this.allergyNode), __rea_outer_p.playEffect_1(T), this.playStepVoice("79_24", "hula_hoop", !1);
  }
  applyLemonToZombie() {
    "zombie_body" !== this.zombieBodyName ? "zombie_body1" === this.zombieBodyName && this.showZombieBody("zombie_body1_1") : this.showZombieBody("zombie_body_1");
  }
  applyHoop(t, i) {
    const e = this.beginChoice();
    if (this.hideNode(i), this.consumeStep(), !t) return this.wrongSteps.add(8), this.revertFatZombie(), __rea_outer_p.playEffect_1(T), void this.playStepVoice("79_17", "abs", !1);
    __rea_outer_p.playEffect_1(H);
    const s = this.wrongSteps.has(6);
    this.playHoopAlternation(s, () => {
      this.isStepLive(e) && (s ? this.showMushroomBody("toadstool_body_thin") : this.hideNode(this.toadstoolBelly), this.playStepVoice("79_10", "abs", !1));
    });
  }
  revertFatZombie() {
    "zombie_body1" !== this.zombieBodyName ? "zombie_body1_1" === this.zombieBodyName && this.showZombieBody("zombie_body_1") : this.showZombieBody("zombie_body");
  }
  applyAbs(t, i) {
    this.beginChoice(), this.consumeStep();
    const e = this.canWearThrough(8) && "zombie_body_1" === this.zombieBodyName;
    if ("left" === t && e) return this.hideNode(i), this.showZombieBody("zombie_body2"), __rea_outer_p.playEffect_1(H), void this.playStepVoice("79_11", "suit", !1);
    this.wrongSteps.add(9), __rea_outer_p.playEffect_1(T), this.slideOut(i, "left" === t ? "left" : "right"), this.playStepVoice("left" === t ? "79_18" : "79_25", "suit", !1);
  }
  applySuit(t, i) {
    this.beginChoice(), this.consumeStep();
    const e = this.canWearThrough(9) && "zombie_body2" === this.zombieBodyName;
    if ("left" === t && e) return this.hideNode(i), this.showZombieBody("zombie_body2_suit"), __rea_outer_p.playEffect_1(H), void this.playStepVoice("79_12", "skirt", !1);
    this.wrongSteps.add(10), __rea_outer_p.playEffect_1(T), this.slideOut(i, "left" === t ? "left" : "right"), this.playStepVoice("left" === t ? "79_19" : "79_25", "skirt", !1);
  }
  applySkirt(t, i) {
    this.beginChoice(), this.consumeStep();
    const e = this.isRangeClean(8) && "toadstool_body1" === this.mushroomBodyName;
    if ("right" === t && e) return this.hideNode(i), this.showMushroomBody("toadstool_body1_skirt"), __rea_outer_p.playEffect_1(H), void this.playStepVoice("79_13", null, !0);
    this.wrongSteps.add(11), __rea_outer_p.playEffect_1(T), this.slideOut(i, "left" === t ? "left" : "right"), this.playStepVoice("right" === t ? "79_26" : "79_18", null, !0);
  }
  beginChoice() {
    return this.actionToken += 1, this.setInputLocked(!0), this.actionToken;
  }
  playStepVoice(t, i, e) {
    e ? this.playDialogue(t, () => this.settleAfterFinalVoice()) : (this.playDialogue(t), i && this.scheduleReveal(i));
  }
  settleAfterFinalVoice() {
    this.isValid && 1 === this.phase && (0 !== this.wrongSteps.size ? this.scheduleOnce(() => {
      this.isValid && 1 === this.phase && this.enterFail();
    }, 1) : this.enterSuccess());
  }
  scheduleReveal(t) {
    const i = this.actionToken;
    this.scheduleOnce(() => {
      this.isStepLive(i) && this.revealItem(t, i);
    }, 1);
  }
  revealItem(t, i) {
    const o = this.getNode(t);
    null != o && o.isValid ? (this.stopTweenIfValid(o), o.setPosition(this.originOf(o)), o.setScale(0, 0, 1), o.angle = 0, o.active = !0, this.placeBelowPrompt(o), __rea_outer_s(o).to(.25, {
      scale: new __rea_outer_e(1, 1, 1)
    }).call(() => {
      this.isStepLive(i) && this.setInputLocked(!1);
    }).start()) : this.isStepLive(i) && this.setInputLocked(!1);
  }
  raiseToadstoolHead() {
    "short1" !== this.toadstoolHeadKind ? "short2" === this.toadstoolHeadKind && this.showToadstoolHead("tall2") : this.showToadstoolHead("tall1");
  }
  raiseFaceExtras() {
    var t, i;
    null != (t = this.toadstoolAcne) && t.isValid && this.toadstoolAcne.active && this.toadstoolAcne.setPosition(262, 284.5, 0), null != (i = this.faceMask) && i.isValid && this.faceMask.active && this.faceMask.setPosition(264, 302, 0);
  }
  playHoopAlternation(t, i) {
    const e = t ? this.shortHoop1 : this.tallHoop1,
      s = t ? this.shortHoop2 : this.tallHoop2,
      o = this.actionToken;
    this.hideHoops(), this.isHoopRunning = !0, this.showNode(e), this.hideNode(s);
    let h = !0;
    const n = () => {
      this.isStepLive(o) && this.isHoopRunning && (h = !h, this.setNodeActive(e, h), this.setNodeActive(s, !h), this.scheduleOnce(n, .15));
    };
    this.scheduleOnce(n, .15), this.scheduleOnce(() => {
      this.isStepLive(o) && this.isHoopRunning && (this.isHoopRunning = !1, this.hideHoops(), i());
    }, .7);
  }
  canWearThrough(t) {
    const i = this.collectErrors(t);
    return 0 === i.length || 1 === i.length && 8 === i[0] || 2 === i.length && 6 === i[0] && 8 === i[1];
  }
  isRangeClean(t) {
    return 0 === this.collectErrors(t).length;
  }
  collectErrors(t) {
    const i = [];
    return this.wrongSteps.forEach(e => {
      e <= t && i.push(e);
    }), i.sort((t, i) => t - i), i;
  }
  consumeStep() {
    this.hasInstallNum += 1, __rea_outer_f.getInstance().refreshGameProgress();
  }
  isStepLive(t) {
    return this.isValid && t === this.actionToken && 1 === this.phase;
  }
  registerInputHandlers() {
    this.node.off(__rea_outer_o.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(__rea_outer_o.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(__rea_outer_o.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(__rea_outer_o.EventType.TOUCH_CANCEL, this.onTouchCancel, this), this.node.on(__rea_outer_o.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(__rea_outer_o.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(__rea_outer_o.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(__rea_outer_o.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
  }
  unregisterInputHandlers() {
    var t;
    null != (t = this.node) && t.isValid && (this.node.off(__rea_outer_o.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(__rea_outer_o.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(__rea_outer_o.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(__rea_outer_o.EventType.TOUCH_CANCEL, this.onTouchCancel, this));
  }
  onTouchStart(t) {
    if (!this.canAcceptInput() || this.draggedNode) return;
    const i = t.getUILocation();
    if (!this.areOpeningStepsDone()) return void this.beginOpeningTouch(i);
    const e = this.getCurrentItem();
    e && this.containsPoint(e, i) && this.beginDrag(e, i);
  }
  beginOpeningTouch(t) {
    this.isSunDone || !this.containsPoint(this.sunNode, t) ? this.isSwipeDone && !this.isClockDone && this.containsPoint(this.clockNode, t) ? this.beginDrag(this.clockNode, t) : !this.isSwipeDone && this.containsPoint(this.zombieNode, t) && (this.pointerStart = t.clone()) : this.beginDrag(this.sunNode, t);
  }
  beginDrag(t, i) {
    const s = this.toParentLocal(t, i);
    this.dragOffset = new __rea_outer_e(s.x - t.position.x, s.y - t.position.y, 0), this.draggedNode = t, this.dragStart = i.clone(), this.pointerStart = null, this.placeBelowPrompt(t);
  }
  onTouchMove(t) {
    var i;
    null != (i = this.draggedNode) && i.isValid && this.canAcceptInput() && this.moveDraggedTo(t.getUILocation());
  }
  onTouchEnd(t) {
    var i;
    const e = t.getUILocation();
    if (null != (i = this.draggedNode) && i.isValid) {
      this.moveDraggedTo(e);
      const t = this.draggedNode,
        i = this.dragStart;
      return this.draggedNode = null, this.dragStart = null, i && this.hasDragged(i, e) ? void this.resolveDrop(this.readSide(t), t) : void this.returnHome(t);
    }
    const s = this.pointerStart;
    this.pointerStart = null, s && this.canAcceptInput() && !this.isSwipeDone && this.containsPoint(this.zombieNode, s) && this.isSwipeUp(s, e) && this.completeSwipe();
  }
  onTouchCancel() {
    this.pointerStart = null, this.cancelDrag();
  }
  resolveDrop(t, i) {
    this.canAcceptInput() ? i !== this.sunNode ? i !== this.clockNode ? "middle" !== t ? this.resolveChoice(this.hasInstallNum + 1, t, i) : this.returnHome(i) : this.resolveClockDrop(t, i) : this.resolveSunDrop(t, i) : this.returnHome(i);
  }
  resolveSunDrop(t, i) {
    "right" !== t || this.isSunDone ? this.returnHome(i) : this.completeSun();
  }
  resolveClockDrop(t, i) {
    "left" !== t || !this.isSwipeDone || this.isClockDone ? this.returnHome(i) : this.completeClock();
  }
  resolveChoice(t, i, e) {
    4 !== t ? 5 !== t ? 6 !== t ? 7 !== t ? 8 !== t ? 9 !== t ? 10 !== t ? 11 === t && this.applySkirt(i, e) : this.applySuit(i, e) : this.applyAbs(i, e) : this.applyHoop("right" === i, e) : this.applyLemon("left" === i, e) : this.applyMeat("right" === i, e) : this.applyMask("right" === i, e) : this.applyHair("left" === i, e);
  }
  getCurrentItem() {
    const t = B[this.hasInstallNum - 3];
    return t ? this.getNode(t) : null;
  }
  moveDraggedTo(t) {
    const i = this.draggedNode;
    if (null == i || !i.isValid) return;
    const e = this.toParentLocal(i, t);
    i.setPosition(e.x - this.dragOffset.x, e.y - this.dragOffset.y, i.position.z);
  }
  cancelDrag() {
    const t = this.draggedNode;
    this.draggedNode = null, this.dragStart = null, this.pointerStart = null, null != t && t.isValid && this.returnHome(t);
  }
  readSide(t) {
    return t.position.x < 0 ? "left" : t.position.x > 0 ? "right" : "middle";
  }
  hasDragged(t, i) {
    return __rea_outer_h.distance(t, i) >= 30;
  }
  isSwipeUp(t, i) {
    const e = i.x - t.x,
      s = i.y - t.y;
    return s >= 30 && Math.abs(s) >= 1.2 * Math.abs(e);
  }
  canAcceptInput() {
    return this.isValid && 1 === this.phase && !this.isInputLocked && !this.isHeldForTimeUp && !this.winstate;
  }
  slideOut(t, i) {
    if (!t.isValid) return;
    const o = "left" === i ? -512.5 : 512.5,
      h = new __rea_outer_e(t.position.x + o, t.position.y, t.position.z);
    this.stopTweenIfValid(t), t.angle = 0, __rea_outer_s(t).to(.25, {
      position: h
    }).call(() => {
      t.isValid && (t.active = !1);
    }).start();
  }
  returnHome(t) {
    t.isValid && (this.stopTweenIfValid(t), t.setPosition(this.originOf(t)), t.angle = 0, t.setScale(1, 1, 1), t.active = !0);
  }
  showZombieBody(t) {
    this.zombieBodyName = t, this.showOne(t, V);
  }
  showMushroomBody(t) {
    this.mushroomBodyName = t, this.showOne(t, C);
  }
  showOne(t, i) {
    i.forEach(i => {
      this.setNodeActive(this.getNode(i), i === t);
    });
  }
  showToadstoolHead(t) {
    this.toadstoolHeadKind = t, this.setNodeActive(this.toadstoolHead, "origin" === t), this.setNodeActive(this.shortHead1, "short1" === t), this.setNodeActive(this.shortHead2, "short2" === t), this.setNodeActive(this.tallHead1, "tall1" === t), this.setNodeActive(this.tallHead2, "tall2" === t);
  }
  hideHoops() {
    this.hideNode(this.shortHoop1), this.hideNode(this.shortHoop2), this.hideNode(this.tallHoop1), this.hideNode(this.tallHoop2);
  }
  hideFightVisuals() {
    this.unschedule(this.onFightTick), this.hideNode(this.fightNode), this.fightSymbols.forEach(t => this.hideNode(t));
  }
  startFightLoop() {
    this.unschedule(this.onFightTick), this.fightSymbols.forEach(t => this.hideNode(t)), this.fightOrder = this.shuffleNodes(this.fightSymbols.filter(t => t.isValid)), this.fightCursor = 0, this.showCurrentFightSymbol(), this.schedule(this.onFightTick, .15);
  }
  showCurrentFightSymbol() {
    this.fightSymbols.forEach(t => this.hideNode(t)), this.showNode(this.fightOrder[this.fightCursor] ?? null);
  }
  hideCharacters() {
    var t;
    null == (t = this.stageNode) || t.children.forEach(t => {
      this.isCharacterName(t.name) && (t.active = !1);
    });
  }
  isCharacterName(t) {
    return "zombie" === t || t.startsWith("zombie_") || t.startsWith("toadstool_");
  }
  shuffleNodes(t) {
    const i = t.slice();
    for (let t = i.length - 1; t > 0; t -= 1) {
      const e = Math.floor(Math.random() * (t + 1)),
        s = i[t];
      i[t] = i[e], i[e] = s;
    }
    return i;
  }
  playBlackTransition(t, i) {
    const e = this.backBgNode;
    if (null == e || !e.isValid) return t(), void i();
    this.stopTweenIfValid(e), e.active = !0, this.bringToFront(e);
    const o = __rea_outer_b(e);
    o.opacity = 0, __rea_outer_s(o).to(.35, {
      opacity: 255
    }).call(() => {
      this.isValid && e.isValid && t();
    }).delay(.2).to(.15, {
      opacity: 0
    }).call(() => {
      e.isValid && (o.opacity = 0, e.active = !1, this.isValid && i());
    }).start();
  }
  playDialogue(t, i) {
    this.voiceToken += 1;
    const e = this.voiceToken;
    this.showPrompt(t), __rea_outer_p.stopVoice(), __rea_outer_p.playVoice(t), this.scheduleOnce(() => {
      this.isValid && e === this.voiceToken && (this.hidePrompt(), null == i || i());
    }, this.resolveDialogueHoldSeconds(t));
  }
  resolveDialogueHoldSeconds(t) {
    var i;
    const e = (null == (i = __rea_outer_p.audioMap.get(t)) ? void 0 : i.getDuration()) ?? 0;
    return e > .05 ? e : 2.5;
  }
  showPrompt(t) {
    this.promptLabel && (this.promptLabel.string = this.resolveI18nText(t)), this.showNode(this.promptBoxNode), this.bringToFront(this.promptBoxNode);
  }
  hidePrompt() {
    this.hideNode(this.promptBoxNode);
  }
  resolveI18nText(t) {
    const i = __rea_outer_u.getInstance().getKey(t);
    return i && i !== t ? i : t;
  }
  setInputLocked(t) {
    this.isInputLocked = t;
    const i = this.backBgNode;
    if (null != i && i.isValid) {
      if (this.stopTweenIfValid(i), !t) return __rea_outer__(i, 0), void (i.active = !1);
      i.active = !0, __rea_outer__(i, 0), this.bringToFront(i);
    }
  }
  prepareBackBg() {
    const t = this.backBgNode;
    if (null == t || !t.isValid) return;
    const i = t.getComponent(__rea_outer_n);
    i && (i.color = new __rea_outer_a(0, 0, 0, 255)), __rea_outer__(t, 0), t.active = !1;
  }
  containsPoint(t, i) {
    if (null == t || !t.isValid || !t.activeInHierarchy) return !1;
    const e = t.getComponent(__rea_outer_l);
    return !!e && e.getBoundingBoxToWorld().contains(i);
  }
  toParentLocal(t, i) {
    var s;
    const o = null == (s = t.parent) ? void 0 : s.getComponent(__rea_outer_l);
    return o ? o.convertToNodeSpaceAR(new __rea_outer_e(i.x, i.y, 0)) : new __rea_outer_e(i.x, i.y, 0);
  }
  originOf(t) {
    var i;
    return (null == (i = this.originByNode.get(t)) ? void 0 : i.clone()) ?? t.position.clone();
  }
  restoreOrigins() {
    this.originByNode.forEach((t, i) => {
      i.isValid && (this.stopTweenIfValid(i), i.setPosition(t), i.angle = 0, i.setScale(1, 1, 1));
    });
  }
  showNode(t) {
    this.setNodeActive(t, !0);
  }
  hideNode(t) {
    this.setNodeActive(t, !1);
  }
  setNodeActive(t, i) {
    null != t && t.isValid && (t.active = i);
  }
  bringToFront(t) {
    null != t && t.isValid && t.parent && t.setSiblingIndex(t.parent.children.length - 1);
  }
  placeBelowPrompt(t) {
    const i = this.promptBoxNode;
    t.isValid && null != i && i.isValid && t.parent === i.parent && t.setSiblingIndex(i.getSiblingIndex());
  }
  stopTweenIfValid(t) {
    null != t && t.isValid && __rea_outer_w(t);
  }
  getNode(t) {
    return this.nodeByName.get(t) ?? null;
  }
  resolveReferences() {
    var t;
    const i = this.node.getChildByPath("UIPanel/gameNode/79");
    this.stageNode = i, this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.nodeByName.clear(), this.originByNode.clear(), i && (this.bindDuplicateNodes(i), i.children.forEach(t => {
      this.originByNode.set(t, t.position.clone()), I.has(t.name) || this.nodeByName.has(t.name) || this.nodeByName.set(t.name, t);
    })), this.bgNode = this.getNode("bg"), this.bgRoomNode = this.getNode("bg_1"), this.clockNode = this.getNode("clock"), this.sunNode = this.getNode("sun"), this.zombieNode = this.getNode("zombie"), this.zombieHead = this.getNode("zombie_head"), this.zombieHead1 = this.getNode("zombie_head1"), this.zombieHair = this.getNode("zombie_hair"), this.zombieAcne = this.getNode("zombie_acne"), this.toadstoolHead = this.getNode("toadstool_head"), this.toadstoolAcne = this.getNode("toadstool_acne"), this.toadstoolBelly = this.getNode("toadstool_belly"), this.faceMask = this.getNode("toadstool_facial_mask"), this.allergyNode = this.getNode("toadstool_allergy"), this.allergyShortNode = this.getNode("toadstool_allergy_1"), this.endNode = this.getNode("end"), this.fightNode = this.getNode("fight"), this.fightSymbols = ["fight_1", "fight_2", "fight_3"].map(t => this.getNode(t)).filter(t => null !== t), this.promptBoxNode = this.getNode("prompt_box"), this.promptLabel = (null == (t = this.promptBoxNode) || null == (t = t.getChildByName("Label")) ? void 0 : t.getComponent(__rea_outer_d)) ?? null, this.warnIfMissing();
  }
  bindDuplicateNodes(t) {
    const i = this.pickLowHigh(this.childrenNamed(t, "toadstool_head1")),
      e = this.pickLowHigh(this.childrenNamed(t, "toadstool_head2")),
      s = this.pickLowHigh(this.childrenNamed(t, "hula_hoop_1")),
      o = this.pickLowHigh(this.childrenNamed(t, "hula_hoop_2")),
      h = this.pickLowHigh(this.childrenNamed(t, "man_angry"));
    this.shortHead1 = i.low, this.tallHead1 = i.high, this.shortHead2 = e.low, this.tallHead2 = e.high, this.shortHoop1 = s.low, this.tallHoop1 = s.high, this.shortHoop2 = o.low, this.tallHoop2 = o.high, this.angryMushroom = h.low, this.angryZombie = h.high;
  }
  childrenNamed(t, i) {
    return t.children.filter(t => t.name === i);
  }
  pickLowHigh(t) {
    if (0 === t.length) return {
      low: null,
      high: null
    };
    const i = t.slice().sort((t, i) => t.position.y - i.position.y);
    return {
      low: i[0],
      high: i[i.length - 1]
    };
  }
  warnIfMissing() {
    this.stageNode || console.warn("[Level_79] missing UIPanel/gameNode/79"), this.backBgNode || console.warn("[Level_79] missing UIPanel/backBG"), this.promptLabel || console.warn("[Level_79] missing prompt_box/Label");
    ["bg", "bg_1", "clock", "sun", "zombie", "zombie_head", "zombie_head1", "zombie_hair", "zombie_acne", "toadstool_head", "toadstool_acne", "toadstool_belly", "toadstool_facial_mask", "toadstool_allergy", "toadstool_allergy_1", "end", "fight", "fight_1", "fight_2", "fight_3", ...V, ...C, ...B].forEach(t => {
      this.getNode(t) || console.warn(`[Level_79] missing ${t}`);
    }), this.shortHead1 && this.tallHead1 && this.shortHead2 && this.tallHead2 || console.warn("[Level_79] missing a short/tall toadstool head pair"), this.shortHoop1 && this.shortHoop2 && this.tallHoop1 && this.tallHoop2 || console.warn("[Level_79] missing a short/tall hula hoop pair"), this.angryZombie && this.angryMushroom || console.warn("[Level_79] missing man_angry");
  }
  cleanupRuntime(t) {
    this.unscheduleAllCallbacks(), this.unregisterInputHandlers(), this.voiceToken += 1, this.actionToken += 1, this.isHoopRunning = !1, this.draggedNode = null, this.dragStart = null, this.pointerStart = null, t && __rea_outer_p.stopVoice(), this.originByNode.forEach((t, i) => {
      this.stopTweenIfValid(i);
    }), this.stopTweenIfValid(this.backBgNode);
  }
}) || S;
__rea_outer_i._RF.pop();
export { __recovered_export_0 as default };
