// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_80.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { Vec3 as __rea_outer_i } from "cc";
import { tween as __rea_outer_s } from "cc";
import { UITransform as __rea_outer_h } from "cc";
import { Node as __rea_outer_o } from "cc";
import { Label as __rea_outer_a } from "cc";
import { _decorator as __rea_outer_n } from "cc";
import { default as __rea_outer_r } from "./LevelBase";
import { default as __rea_outer_l } from "./clue-hit-tester";
import { default as __rea_outer_d } from "./AudioManager";
import { I18nController as __rea_outer_u } from "./i18n-controller";
import { UIManager as __rea_outer_p } from "./ui-manager";
import { UILayer as __rea_outer_g } from "./ui-layer";
import { UIHint as __rea_outer_c } from "./uihint";
import { UIFail as __rea_outer_f } from "./uifail";
import { GameController as __rea_outer_N } from "./GameController";
import { setNodeOpacity as __rea_outer_m } from "./CocosCompat";
import { stopAllTweens as __rea_outer_b } from "./CocosCompat";
let __recovered_export_0;
var _;
__rea_outer_t._RF.push({}, "476e6iZrVBDIKoA9wBFs+bn", "Level_80", void 0);
const {
    ccclass: w
  } = __rea_outer_n,
  v = "80_12",
  T = 10,
  B = [3, 2, 1],
  y = new Set(["water", "water_switch_1", "smoke", "smoke1", "smoke2", "facial_mask", "spray", "shower_head_1", "man_1", "lamp_1", "lamp_2", "curtain_1", "girl_1", "girl_2", "girl_2_1", "waterweed_1", "pufferfish_1", "swimming_ring_1", "tissue_1", "spray_1", "spray_2", "facial_mask_1", "girl_breathe", "girl_breathe_1", "failure", "failure_1", "failure_2", "clicks", "drags", "swips"]),
  k = new Set([2, 3, 4, 9, 10]),
  S = [{
    step: 1,
    item: "key",
    target: "cabinet_door"
  }, {
    step: 2,
    item: "facial_mask",
    target: "man_2"
  }, {
    step: 3,
    item: "spray",
    target: "man_2"
  }, {
    step: 5,
    item: "tissue",
    target: "girl"
  }, {
    step: 6,
    item: "swimming_ring",
    target: "girl"
  }, {
    step: 7,
    item: "pufferfish",
    target: "girl"
  }, {
    step: 8,
    item: "waterweed",
    target: "girl"
  }];
__recovered_export_0 = w("Level_80")(_ = class extends __rea_outer_r {
  constructor(...e) {
    super(...e), this.phase = 0, this.winstate = !1, this.stageNode = null, this.backBgNode = null, this.promptBoxNode = null, this.promptLabel = null, this.nodeByName = new Map(), this.originByNode = new Map(), this.siblingByNode = new Map(), this.completedSteps = new Set(), this.draggedNode = null, this.dragStep = 0, this.dragOffset = new __rea_outer_i(), this.pressedName = "", this.swipeStart = null, this.voiceToken = 0, this.stepToken = 0, this.breathBubbleToken = 0, this.breathFailToken = 0, this.breathRemain = 20, this.isBreathFailQueued = !1, this.isInputLocked = !1, this.isHeldForTimeUp = !1, this.isPufferBubbleRunning = !1, this.pufferBubbleCursor = 0, this.onBreathFrame = () => {
      this.isStepLive(this.breathBubbleToken) && !this.winstate && (this.hideNode(this.getNode("girl_breathe")), this.showNode(this.getNode("girl_breathe_1")));
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.prepareBackBg(), this.allItemNum = T, this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.enterPhase0();
  }
  update(e) {
    this.releaseTimeUpHold(), 1 !== this.phase || this.isHeldForTimeUp || (this.breathRemain <= 0 ? this.queueBreathFail() : (this.breathRemain = Math.max(0, this.breathRemain - e), this.applyBreathWidth(), this.breathRemain <= 0 && this.queueBreathFail()));
  }
  onDestroy() {
    this.cleanupRuntime(!this.shouldSkipStopLevelAudio()), super.onDestroy();
  }
  handleTimeExpired() {
    return 1 !== this.phase || (this.isHeldForTimeUp = !0, this.clearDrag(!0), !1);
  }
  showHint() {
    if (!this.canAcceptInput()) return;
    const e = this.getHintStep();
    if (null === e) return;
    const t = __rea_outer_u.getInstance().getKey(`level80_hint${e}`);
    __rea_outer_p.getInstance().showView(__rea_outer_c, void 0, {
      body: t
    });
  }
  getGameProgressSnapshot() {
    const e = Math.min(this.hasInstallNum, T);
    return {
      progress: e / T,
      label: `${e}/10`
    };
  }
  markAllTasksCompleted() {
    this.hasInstallNum = T, this.phase = 2, this.winstate = !0, this.isInputLocked = !0, this.stepToken += 1, this.breathFailToken += 1;
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.completedSteps.clear(), this.draggedNode = null, this.dragStep = 0, this.pressedName = "", this.swipeStart = null, this.voiceToken += 1, this.stepToken += 1, this.breathFailToken += 1, this.breathRemain = 20, this.isBreathFailQueued = !1, this.isInputLocked = !1, this.isHeldForTimeUp = !1, this.isPufferBubbleRunning = !1, this.pufferBubbleCursor = 0, this.hasInstallNum = 0, this.allItemNum = T, this.unscheduleAllCallbacks(), __rea_outer_d.stopVoice(), this.restoreOrigins();
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_d.playMusic("bgm2", !0, .5), __rea_outer_N.getInstance().pauseTimer(), this.applyOpeningVisibility(), this.liftHudAboveLamp(), this.setupBreathBar(), this.startPufferBubbles(), this.registerInputHandlers(), this.setInputLocked(!0), __rea_outer_N.getInstance().refreshGameProgress(), this.playDialogue("80_1", () => {
      this.isValid && 0 === this.phase && this.enterPhase1();
    });
  }
  skipOpeningToPlay() {
    return 0 === this.phase && (this.voiceToken += 1, this.stopOpeningDialogue(), this.hidePrompt(), this.enterPhase1(), !0);
  }
  enterPhase1() {
    this.isValid && 0 === this.phase && (this.phase = 1, this.setInputLocked(!1), __rea_outer_N.getInstance().resumeTimer(), __rea_outer_N.getInstance().refreshGameProgress());
  }
  enterSuccess() {
    2 !== this.phase && (this.phase = 2, this.winstate = !0, this.stepToken += 1, this.breathFailToken += 1, this.isHeldForTimeUp = !1, this.clearDrag(!1), __rea_outer_N.getInstance().pauseTimer(), this.setInputLocked(!0), this.playDialogue("80_13", () => this.slideManOut()));
  }
  enterShowerFail() {
    2 !== this.phase && (this.beginFailPhase(), this.hideNode(this.getNode("shower_head")), this.showNode(this.getNode("shower_head_1")), this.revealMan(), this.playDialogue(v, () => this.showFailStrike()));
  }
  enterBreathFail() {
    2 !== this.phase && (this.beginFailPhase(), this.clearHoldVisuals(), this.hideNode(this.getNode("girl")), this.hideNode(this.getNode("guizhe2")), this.hideNode(this.getNode("girl_1")), this.hideBreathBubbles(), this.showNode(this.getNode("girl_2")), this.showNode(this.getNode("girl_2_1")), this.playDialogue("80_11", () => {
      this.isFailLive() && (this.revealMan(), this.playDialogue(v, () => this.showFailStrike()));
    }));
  }
  beginFailPhase() {
    this.phase = 2, this.winstate = !1, this.stepToken += 1, this.breathFailToken += 1, this.isHeldForTimeUp = !1, this.clearDrag(!1), __rea_outer_N.getInstance().pauseTimer(), this.setInputLocked(!0);
  }
  revealMan() {
    this.hideNode(this.getNode("man_2")), this.showNode(this.getNode("man_1")), this.showNode(this.getNode("failure"));
  }
  showFailStrike() {
    this.isFailLive() && (this.showNode(this.getNode("failure_1")), this.showNode(this.getNode("failure_2")), __rea_outer_d.playEffect_1("level80_4"), this.scheduleOnce(() => {
      this.isFailLive() && __rea_outer_p.getInstance().showView(__rea_outer_f, __rea_outer_g.WIN_ANIMATION);
    }, 1));
  }
  slideManOut() {
    if (!this.isValid || !this.winstate) return;
    const e = this.getNode("man_2");
    if (null == e || !e.isValid) return void this.showGirlAfterWin();
    this.stopTweenIfValid(e);
    const t = new __rea_outer_i(e.position.x + 616, e.position.y, e.position.z);
    __rea_outer_s(e).to(.5, {
      position: t
    }).call(() => {
      e.isValid && (e.active = !1), this.showGirlAfterWin();
    }).start();
  }
  showGirlAfterWin() {
    this.isValid && this.winstate && (this.hideNode(this.getNode("girl")), this.hideNode(this.getNode("guizhe2")), this.showNode(this.getNode("girl_1")), this.hideBreathBubbles(), this.scheduleOnce(() => {
      this.isValid && this.winstate && this.showLevelSuccess(0);
    }, 1));
  }
  completeStep(e) {
    if (!this.canAcceptInput() || !this.isStepAvailable(e)) return;
    if (this.completedSteps.add(e), this.hasInstallNum += 1, this.applyStepStart(e), __rea_outer_d.playEffect_1("level80_1"), this.playExtraSound(e), e >= 2 && (this.playDialogue(`80_${e}`), this.resetBreath()), __rea_outer_N.getInstance().refreshGameProgress(), 1 === e) return;
    this.setInputLocked(!0), k.has(e) && this.surfaceGirl();
    const t = this.stepToken;
    this.scheduleOnce(() => {
      this.isStepLive(t) && this.finishHold(e);
    }, 1);
  }
  finishHold(e) {
    this.applyStepEnd(e), this.hideBreathBubbles(), 1 === this.phase && (this.setInputLocked(!1), this.completedSteps.size >= T && this.enterSuccess());
  }
  applyStepStart(e) {
    return 1 === e ? (this.hideNodes(["cabinet_door", "key", "lock"]), void this.showNodes(["facial_mask", "spray"])) : 2 === e ? (this.hideNode(this.getNode("facial_mask")), void this.showNode(this.getNode("facial_mask_1"))) : 3 === e ? (this.hideNode(this.getNode("spray")), void this.showNodes(["spray_1", "spray_2"])) : 4 === e ? (this.hideNode(this.getNode("water_switch")), void this.showNodes(["water_switch_1", "water", "smoke", "smoke1", "smoke2"])) : 5 === e ? (this.hideNode(this.getNode("tissue")), void this.showNode(this.getNode("tissue_1"))) : 6 === e ? (this.hideNode(this.getNode("swimming_ring")), void this.showNode(this.getNode("swimming_ring_1"))) : 7 === e ? (this.stopPufferBubbles(), this.hideNode(this.getNode("pufferfish")), void this.showNode(this.getNode("pufferfish_1"))) : 8 === e ? (this.hideNodes(["waterweed", "waterweed_bubble1", "waterweed_bubble2", "waterweed_bubble3"]), void this.showNode(this.getNode("waterweed_1"))) : 9 === e ? (this.hideNode(this.getNode("lamp")), void this.showNodes(["lamp_1", "lamp_2"])) : void (10 === e && (this.hideNode(this.getNode("curtain")), this.showNode(this.getNode("curtain_1"))));
  }
  applyStepEnd(e) {
    if (k.has(e) && this.submergeGirl(), 2 !== e) {
      if (3 !== e) {
        if (4 !== e) {
          if (5 !== e) {
            if (6 !== e) {
              if (7 !== e) {
                if (8 !== e) return 9 === e ? (this.hideNodes(["lamp_1", "lamp_2"]), void this.showNode(this.getNode("lamp"))) : void (10 === e && this.hideNode(this.getNode("curtain_1")));
                this.hideNode(this.getNode("waterweed_1"));
              } else this.hideNode(this.getNode("pufferfish_1"));
            } else this.hideNode(this.getNode("swimming_ring_1"));
          } else this.hideNode(this.getNode("tissue_1"));
        } else this.hideNodes(["water", "smoke", "smoke1", "smoke2"]);
      } else this.hideNodes(["spray_1", "spray_2"]);
    } else this.hideNode(this.getNode("facial_mask_1"));
  }
  playExtraSound(e) {
    3 !== e ? 4 === e && __rea_outer_d.playEffect_1("level80_2") : __rea_outer_d.playEffect_1("level80_5");
  }
  surfaceGirl() {
    this.hideNode(this.getNode("girl")), this.hideNode(this.getNode("guizhe2")), this.showNode(this.getNode("girl_1")), this.showBreathBubbles();
  }
  submergeGirl() {
    this.hideNode(this.getNode("girl_1")), this.hideBreathBubbles(), this.showNode(this.getNode("girl")), this.showNode(this.getNode("guizhe2"));
  }
  showBreathBubbles() {
    this.placeJustAfter("bathtub_1", "girl_breathe"), this.placeJustAfter("bathtub_1", "girl_breathe_1"), this.showNode(this.getNode("girl_breathe")), this.hideNode(this.getNode("girl_breathe_1")), this.breathBubbleToken = this.stepToken, this.unschedule(this.onBreathFrame), this.scheduleOnce(this.onBreathFrame, .5);
  }
  hideBreathBubbles() {
    this.unschedule(this.onBreathFrame), this.breathBubbleToken += 1, this.hideNode(this.getNode("girl_breathe")), this.hideNode(this.getNode("girl_breathe_1"));
  }
  clearHoldVisuals() {
    this.hideNodes(["facial_mask_1", "spray_1", "spray_2", "water", "smoke", "smoke1", "smoke2", "tissue_1", "swimming_ring_1", "pufferfish_1", "waterweed_1", "lamp_1", "lamp_2", "curtain_1", "girl_1", "girl_breathe", "girl_breathe_1"]);
  }
  setupBreathBar() {
    const e = this.getNode("progress_bar_1"),
      t = (null == e ? void 0 : e.getComponent(__rea_outer_h)) ?? null;
    null != e && e.isValid && t && (t.setAnchorPoint(0, .5), e.setPosition(-259.5, 612.5, 0), this.breathRemain = 20, this.applyBreathWidth());
  }
  resetBreath() {
    this.breathFailToken += 1, this.isBreathFailQueued = !1, this.breathRemain = 20, this.applyBreathWidth();
  }
  applyBreathWidth() {
    var e;
    const t = (null == (e = this.getNode("progress_bar_1")) ? void 0 : e.getComponent(__rea_outer_h)) ?? null;
    if (!t) return;
    const i = Math.max(0, this.breathRemain) / 20;
    t.setContentSize(507 * i, 17);
  }
  queueBreathFail() {
    if (this.isBreathFailQueued || 1 !== this.phase) return;
    this.isBreathFailQueued = !0, this.breathRemain = 0, this.applyBreathWidth();
    const e = this.breathFailToken;
    this.scheduleOnce(() => {
      this.isBreathFailQueued = !1, this.isValid && e === this.breathFailToken && 1 === this.phase && this.enterBreathFail();
    }, 0);
  }
  releaseTimeUpHold() {
    this.isHeldForTimeUp && 1 === this.phase && (__rea_outer_N.getInstance().getRemainingTime() <= 0 || (this.isHeldForTimeUp = !1));
  }
  isStepAvailable(e) {
    return !this.completedSteps.has(e) && !!(2 !== e && 3 !== e || this.completedSteps.has(1)) && e >= 1 && e <= T;
  }
  isStepLive(e) {
    return this.isValid && e === this.stepToken && 1 === this.phase;
  }
  isFailLive() {
    return this.isValid && 2 === this.phase && !this.winstate;
  }
  getHintStep() {
    for (let e = 1; e <= T; e += 1) if (this.isStepAvailable(e)) return e;
    return null;
  }
  startPufferBubbles() {
    this.isPufferBubbleRunning = !0, this.pufferBubbleCursor = 0, this.showNextPufferBubble();
  }
  stopPufferBubbles() {
    this.isPufferBubbleRunning = !1;
  }
  showNextPufferBubble() {
    if (!this.isValid || !this.isPufferBubbleRunning) return;
    const e = this.getNode("pufferfish");
    if (null == e || !e.isValid || !e.active) return void (this.isPufferBubbleRunning = !1);
    const t = B[this.pufferBubbleCursor];
    B.forEach(e => {
      this.setNodeActive(this.getNode(`pufferfish_bubble${e}`), e === t);
    }), this.pufferBubbleCursor = (this.pufferBubbleCursor + 1) % B.length, this.scheduleOnce(() => this.showNextPufferBubble(), .15);
  }
  registerInputHandlers() {
    this.node.off(__rea_outer_o.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(__rea_outer_o.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(__rea_outer_o.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(__rea_outer_o.EventType.TOUCH_CANCEL, this.onTouchCancel, this), this.node.on(__rea_outer_o.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(__rea_outer_o.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(__rea_outer_o.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(__rea_outer_o.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
  }
  unregisterInputHandlers() {
    var e;
    null != (e = this.node) && e.isValid && (this.node.off(__rea_outer_o.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(__rea_outer_o.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(__rea_outer_o.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(__rea_outer_o.EventType.TOUCH_CANCEL, this.onTouchCancel, this));
  }
  onTouchStart(e) {
    if (!this.canAcceptInput() || this.draggedNode) return;
    const t = e.getUILocation(),
      i = this.findDragStep(t);
    i > 0 ? this.beginDrag(i, t) : this.isStepAvailable(4) && this.containsPoint(this.getNode("water_switch"), t) ? this.pressedName = "water_switch" : this.isStepAvailable(9) && this.containsPoint(this.getNode("lamp"), t) ? this.pressedName = "lamp" : this.isStepAvailable(10) && this.containsPoint(this.getNode("curtain"), t) ? this.swipeStart = t.clone() : this.containsPoint(this.getNode("shower_head"), t) && (this.pressedName = "shower_head");
  }
  onTouchMove(e) {
    var t;
    null != (t = this.draggedNode) && t.isValid && this.canAcceptInput() && this.moveDraggedTo(e.getUILocation());
  }
  onTouchEnd(e) {
    var t;
    const i = e.getUILocation();
    if (null != (t = this.draggedNode) && t.isValid) return void this.finishDrag(i);
    const s = this.pressedName,
      h = this.swipeStart;
    this.pressedName = "", this.swipeStart = null, this.canAcceptInput() && ("shower_head" === s && this.containsPoint(this.getNode("shower_head"), i) ? this.enterShowerFail() : "water_switch" === s && this.containsPoint(this.getNode("water_switch"), i) ? this.completeStep(4) : "lamp" === s && this.containsPoint(this.getNode("lamp"), i) ? this.completeStep(9) : h && this.isSwipeLeft(h, i) && this.completeStep(10));
  }
  onTouchCancel() {
    this.pressedName = "", this.swipeStart = null, this.clearDrag(!0);
  }
  beginDrag(e, t) {
    const s = this.itemNode(e);
    if (!s) return;
    const h = this.toParentLocal(s, t);
    this.dragOffset = new __rea_outer_i(h.x - s.position.x, h.y - s.position.y, 0), this.draggedNode = s, this.dragStep = e, this.placeBelowPrompt(s);
  }
  finishDrag(e) {
    var t;
    const i = this.draggedNode,
      s = this.dragStep;
    if (null == i || !i.isValid) return void this.clearDrag(!1);
    this.moveDraggedTo(e);
    const h = (null == (t = this.bindingFor(s)) ? void 0 : t.target) ?? "",
      o = this.canAcceptInput() && this.isCenterInside(i, this.getNode(h));
    this.draggedNode = null, this.dragStep = 0, o ? this.completeStep(s) : this.returnHome(i);
  }
  findDragStep(e) {
    let t = 0,
      i = -1;
    return S.forEach(s => {
      if (!this.isStepAvailable(s.step)) return;
      const h = this.getNode(s.item);
      if (!h || !this.containsDragItem(h, e)) return;
      const o = h.getSiblingIndex();
      o < i || (i = o, t = s.step);
    }), t;
  }
  moveDraggedTo(e) {
    const t = this.draggedNode;
    if (null == t || !t.isValid) return;
    const i = this.toParentLocal(t, e);
    t.setPosition(i.x - this.dragOffset.x, i.y - this.dragOffset.y, t.position.z);
  }
  clearDrag(e) {
    const t = this.draggedNode;
    this.draggedNode = null, this.dragStep = 0, this.pressedName = "", this.swipeStart = null, e && null != t && t.isValid && this.returnHome(t);
  }
  isSwipeLeft(e, t) {
    const i = t.x - e.x,
      s = t.y - e.y;
    return -i >= 30 && Math.abs(i) >= 1.2 * Math.abs(s);
  }
  canAcceptInput() {
    return this.isValid && 1 === this.phase && !this.isInputLocked && !this.isHeldForTimeUp && !this.winstate;
  }
  returnHome(e) {
    if (!e.isValid) return;
    this.stopTweenIfValid(e), e.setPosition(this.originOf(e));
    const t = this.siblingByNode.get(e);
    void 0 !== t && e.setSiblingIndex(t);
  }
  playDialogue(e, t) {
    this.voiceToken += 1;
    const i = this.voiceToken;
    this.showPrompt(e), __rea_outer_d.stopVoice(), __rea_outer_d.playVoice(e), this.scheduleOnce(() => {
      this.isValid && i === this.voiceToken && (this.hidePrompt(), null == t || t());
    }, this.resolveDialogueHoldSeconds(e));
  }
  resolveDialogueHoldSeconds(e) {
    var t;
    const i = (null == (t = __rea_outer_d.audioMap.get(e)) ? void 0 : t.getDuration()) ?? 0;
    return i > .05 ? i : 2.5;
  }
  showPrompt(e) {
    this.promptLabel && (this.promptLabel.string = this.resolveI18nText(e)), this.showNode(this.promptBoxNode), this.bringToFront(this.promptBoxNode);
  }
  hidePrompt() {
    this.hideNode(this.promptBoxNode);
  }
  resolveI18nText(e) {
    const t = __rea_outer_u.getInstance().getKey(e);
    return t && t !== e ? t : e;
  }
  setInputLocked(e) {
    this.isInputLocked = e;
    const t = this.backBgNode;
    null != t && t.isValid && (this.stopTweenIfValid(t), __rea_outer_m(t, 0), t.active = e);
  }
  prepareBackBg() {
    const e = this.backBgNode;
    null != e && e.isValid && (__rea_outer_m(e, 0), e.active = !1);
  }
  containsDragItem(e, t) {
    return !!this.containsPoint(e, t) || "pufferfish" === e.name && e.children.some(e => this.containsPoint(e, t));
  }
  containsPoint(e, t) {
    if (null == e || !e.isValid || !e.activeInHierarchy) return !1;
    const i = e.getComponent(__rea_outer_h);
    return !!i && i.getBoundingBoxToWorld().contains(t);
  }
  isCenterInside(e, t) {
    return __rea_outer_l.isDragNearTarget(e, t);
  }
  toParentLocal(e, t) {
    var s;
    const o = null == (s = e.parent) ? void 0 : s.getComponent(__rea_outer_h);
    return o ? o.convertToNodeSpaceAR(new __rea_outer_i(t.x, t.y, 0)) : new __rea_outer_i(t.x, t.y, 0);
  }
  originOf(e) {
    var t;
    return (null == (t = this.originByNode.get(e)) ? void 0 : t.clone()) ?? e.position.clone();
  }
  restoreOrigins() {
    this.originByNode.forEach((e, t) => {
      t.isValid && (this.stopTweenIfValid(t), t.setPosition(e));
    });
  }
  showNode(e) {
    this.setNodeActive(e, !0);
  }
  hideNode(e) {
    this.setNodeActive(e, !1);
  }
  showNodes(e) {
    e.forEach(e => this.showNode(this.getNode(e)));
  }
  hideNodes(e) {
    e.forEach(e => this.hideNode(this.getNode(e)));
  }
  setNodeActive(e, t) {
    null != e && e.isValid && (e.active = t);
  }
  bringToFront(e) {
    null != e && e.isValid && e.parent && e.setSiblingIndex(e.parent.children.length - 1);
  }
  placeBelowPrompt(e) {
    const t = this.promptBoxNode;
    e.isValid && null != t && t.isValid && e.parent === t.parent && e.setSiblingIndex(t.getSiblingIndex());
  }
  placeJustAfter(e, t) {
    const i = this.getNode(e),
      s = this.getNode(t);
    if (null == i || !i.isValid || null == s || !s.isValid || s.parent !== i.parent) return;
    const h = i.getSiblingIndex();
    s.getSiblingIndex() > h || s.setSiblingIndex(h);
  }
  liftHudAboveLamp() {
    const e = this.getNode("lamp_2"),
      t = this.getNode("failure");
    null != e && e.isValid && null != t && t.isValid && ["progress_bar", "progress_bar_1", "profile_picture"].forEach(i => {
      const s = this.getNode(i);
      null != s && s.isValid && s.parent === t.parent && (s.getSiblingIndex() > e.getSiblingIndex() || s.setSiblingIndex(t.getSiblingIndex() - 1));
    });
  }
  stopTweenIfValid(e) {
    null != e && e.isValid && __rea_outer_b(e);
  }
  getNode(e) {
    return this.nodeByName.get(e) ?? null;
  }
  itemNode(e) {
    const t = this.bindingFor(e);
    return t ? this.getNode(t.item) : null;
  }
  bindingFor(e) {
    return S.find(t => t.step === e) ?? null;
  }
  resolveReferences() {
    var e, t;
    const i = this.node.getChildByPath("UIPanel/gameNode");
    this.stageNode = i, this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.nodeByName.clear(), this.originByNode.clear(), this.siblingByNode.clear(), null == i || i.children.forEach(e => this.indexNode(e)), null == (e = this.getNode("pufferfish")) || e.children.forEach(e => this.indexNode(e)), this.promptBoxNode = this.getNode("prompt_box"), this.promptLabel = (null == (t = this.promptBoxNode) || null == (t = t.getChildByName("Label")) ? void 0 : t.getComponent(__rea_outer_a)) ?? null, this.warnIfMissing();
  }
  applyOpeningVisibility() {
    var e;
    null == (e = this.stageNode) || e.children.forEach(e => {
      "prompt_box" !== e.name ? e.active = !y.has(e.name) : e.active = !1;
    }), this.hideNode(this.node.getChildByPath("UIPanel/click_root")), this.hideNode(this.node.getChildByPath("UIPanel/demo"));
  }
  indexNode(e) {
    this.originByNode.set(e, e.position.clone()), this.siblingByNode.set(e, e.getSiblingIndex()), this.nodeByName.has(e.name) || this.nodeByName.set(e.name, e);
  }
  warnIfMissing() {
    this.stageNode || console.warn("[Level_80] missing UIPanel/gameNode"), this.backBgNode || console.warn("[Level_80] missing UIPanel/backBG"), this.promptLabel || console.warn("[Level_80] missing prompt_box/Label");
    ["wall", "washbasin", "bathtub", "bathtub_1", "cabinet", "cabinet_door", "lock", "key", "water_switch", "water_switch_1", "water", "tissue", "tissue_1", "shower_head", "shower_head_1", "man_1", "man_2", "facial_mask", "facial_mask_1", "spray", "spray_1", "spray_2", "lamp", "lamp_1", "lamp_2", "curtain", "curtain_1", "smoke", "smoke1", "smoke2", "girl", "girl_1", "girl_2", "girl_2_1", "guizhe2", "girl_breathe", "girl_breathe_1", "swimming_ring", "swimming_ring_1", "pufferfish", "pufferfish_1", "pufferfish_bubble1", "pufferfish_bubble2", "pufferfish_bubble3", "waterweed", "waterweed_1", "waterweed_bubble1", "waterweed_bubble2", "waterweed_bubble3", "progress_bar", "progress_bar_1", "profile_picture", "failure", "failure_1", "failure_2"].forEach(e => {
      this.getNode(e) || console.warn(`[Level_80] missing ${e}`);
    });
  }
  cleanupRuntime(e) {
    this.unscheduleAllCallbacks(), this.unregisterInputHandlers(), this.voiceToken += 1, this.stepToken += 1, this.breathFailToken += 1, this.draggedNode = null, this.dragStep = 0, this.pressedName = "", this.swipeStart = null, this.isPufferBubbleRunning = !1, e && __rea_outer_d.stopVoice(), this.originByNode.forEach((e, t) => {
      this.stopTweenIfValid(t);
    }), this.stopTweenIfValid(this.backBgNode);
  }
}) || _;
__rea_outer_t._RF.pop();
export { __recovered_export_0 as default };
