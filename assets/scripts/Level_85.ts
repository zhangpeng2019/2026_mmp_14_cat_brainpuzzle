// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_85.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_e } from "cc";
import { Vec3 as __rea_outer_i } from "cc";
import { Node as __rea_outer_s } from "cc";
import { macro as __rea_outer_h } from "cc";
import { tween as __rea_outer_o } from "cc";
import { UITransform as __rea_outer_a } from "cc";
import { Sprite as __rea_outer_n } from "cc";
import { Color as __rea_outer_r } from "cc";
import { Tween as __rea_outer_l } from "cc";
import { Label as __rea_outer_d } from "cc";
import { _decorator as __rea_outer_c } from "cc";
import { default as __rea_outer_g } from "./LevelBase";
import { default as __rea_outer_p } from "./clue-hit-tester";
import { default as __rea_outer_u } from "./AudioManager";
import { I18nController as __rea_outer__ } from "./i18n-controller";
import { UIManager as __rea_outer_m } from "./ui-manager";
import { UILayer as __rea_outer_N } from "./ui-layer";
import { UIHint as __rea_outer_f } from "./uihint";
import { UIFail as __rea_outer_b } from "./uifail";
import { GameController as __rea_outer_S } from "./GameController";
import { setNodeOpacity as __rea_outer_T } from "./CocosCompat";
import { stopAllTweens as __rea_outer_w } from "./CocosCompat";
let __recovered_export_0;
var v;
__rea_outer_e._RF.push({}, "a85e4whez1OGZ9gLI0VpH6F", "Level_85", void 0);
const {
    ccclass: k
  } = __rea_outer_c,
  I = "level85_4",
  y = "85_1",
  L = 16,
  P = .7 / 3,
  V = .5,
  B = "girl2",
  E = "girl2_1",
  A = "table_1_garbage",
  C = "bg_garbage",
  G = new Set(["bed_2", "bed_2_2", "bathroom_1", "cat 拷贝", "cat_1", "cat_fight", "cat_fight_1", "cat_fight_2", "girl1_cat", "rag", "ghost", "ghost_1", "washing_machine_quilt", "washing_machine_clothes", "quilt_clean", "quilt_clean_1", "quilt_dirty_1", "trash_can_1", "trash_bag", "girl1_end", "girl1_end_1", "girl1_mop1", "girl1_mop2", "girl1_trash_bag", "special_event", "girl1_hammer", "girl1_perfume", "perfume_1", "girl1_perfume2", "perfume_2", "table", "girl1_rag", "girl1_rag_1", "girl2_1", "girl2_quilt_1", "clothes", "girl3_1", "girl4_1", "hammer_fight", "hammer_fight_1", "hammer_fight_2", "principal", "principal_angry", "principal_look", "star", "progress_bar", "progress_bar_1", "profile_picture", "msg", "clicks", "drags", "swips"]),
  O = ["hammer", B, E, "paint", "girl4", "quilt_dirty", "quilt_clean", "bg_clothes", A, C, "trash_bag", "mop", "ghost", "rag", "perfume", "cat"],
  F = {
    1: "bed_2_1",
    2: "bed_1",
    3: "girl3",
    4: "bed_2",
    5: "washing_machine",
    6: "bed_1",
    7: "washing_machine",
    8: "trash_can",
    9: "trash_can_1",
    10: "girl1_start",
    11: "girl1_start",
    13: "bathroom_1",
    14: "table_1",
    15: "girl1_start",
    16: "bathroom_1"
  },
  x = {
    1: "85_3",
    2: "85_4",
    3: "85_5",
    4: "85_6",
    5: "85_7",
    6: "85_8",
    7: "85_9",
    10: "85_13",
    11: "85_10",
    13: "85_14",
    14: "85_15",
    15: "85_16"
  };
__recovered_export_0 = k("Level_85")(v = class extends __rea_outer_g {
  constructor(...t) {
    super(...t), this.phase = 0, this.winstate = !1, this.stageNode = null, this.backBgNode = null, this.promptBoxNode = null, this.promptLabel = null, this.phoneLabel = null, this.nodeByName = new Map(), this.originByNode = new Map(), this.siblingByNode = new Map(), this.stenchPairs = [], this.stenchTicks = [], this.completedSteps = new Set(), this.draggedNode = null, this.dragPartner = null, this.dragStep = 0, this.dragOffset = new __rea_outer_i(), this.dragStart = new __rea_outer_i(), this.partnerStart = new __rea_outer_i(), this.swipeStart = null, this.acceptedItem = "", this.firstGarbage = "", this.voiceToken = 0, this.stepToken = 0, this.settleToken = 0, this.isInputLocked = !1, this.isHeldForTimeUp = !1, this.isGirl2Lead = !0, this.fadeState = null, this.ghostState = null, this.onGirl2Tick = () => {
      this.swapGirl2Pose();
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.prepareBackBg(), this.allItemNum = L, this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.enterPhase0();
  }
  update() {
    this.releaseTimeUpHold();
  }
  onDestroy() {
    this.cleanupRuntime(!this.shouldSkipStopLevelAudio()), super.onDestroy();
  }
  handleTimeExpired() {
    return 1 !== this.phase || (this.isHeldForTimeUp = !0, this.stepToken += 1, this.voiceToken += 1, this.stopVisualTweens(), this.clearDrag(!1), __rea_outer_u.stopVoice(), this.hidePrompt(), !1);
  }
  showHint() {
    if (!this.canAcceptInput()) return;
    const t = this.getHintStep();
    if (null === t) return;
    const e = __rea_outer__.getInstance().getKey(`level85_hint${t}`);
    __rea_outer_m.getInstance().showView(__rea_outer_f, void 0, {
      body: e
    });
  }
  getGameProgressSnapshot() {
    const t = Math.min(this.completedSteps.size, L);
    return {
      progress: t / L,
      label: `${t}/16`
    };
  }
  markAllTasksCompleted() {
    for (let t = 1; t <= L; t += 1) this.completedSteps.add(t);
    this.hasInstallNum = L, this.phase = 2, this.winstate = !0, this.isInputLocked = !0, this.stepToken += 1, this.settleToken += 1, this.voiceToken += 1;
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.completedSteps.clear(), this.draggedNode = null, this.dragPartner = null, this.dragStep = 0, this.swipeStart = null, this.acceptedItem = "", this.firstGarbage = "", this.voiceToken += 1, this.stepToken += 1, this.settleToken += 1, this.isInputLocked = !1, this.isHeldForTimeUp = !1, this.isGirl2Lead = !0, this.hasInstallNum = 0, this.allItemNum = L, this.unscheduleAllCallbacks(), __rea_outer_u.stopVoice(), this.stopVisualTweens(), this.restoreOrigins();
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_u.playMusic("bgm4", !0, .5), __rea_outer_S.getInstance().pauseTimer(), this.applyOpeningVisibility(), this.startStenchLoops(), this.startGirl2Blink(), this.registerInputHandlers(), this.setInputLocked(!0), __rea_outer_S.getInstance().refreshGameProgress(), this.playPhoneIntro();
  }
  enterPhase1() {
    this.isValid && 0 === this.phase && (this.phase = 1, this.hidePrompt(), this.setInputLocked(!1), __rea_outer_S.getInstance().resumeTimer(), __rea_outer_S.getInstance().refreshGameProgress());
  }
  enterSuccess() {
    if (2 === this.phase) return;
    this.phase = 2, this.winstate = !0, this.stepToken += 1, this.settleToken += 1;
    const t = this.settleToken;
    this.unschedule(this.onGirl2Tick), this.clearDrag(!1), __rea_outer_S.getInstance().pauseTimer(), this.setInputLocked(!0), this.showNode(this.getNode("star")), this.hideNode(this.getNode("girl1_start")), this.showNode(this.getNode("girl1_end")), this.showNode(this.getNode("principal")), this.showNode(this.getNode("principal_look")), this.placeGirlInFront(), this.spinLook(t), this.playDialogue("85_19", () => {
      this.isValid && t === this.settleToken && this.showLevelSuccess(3);
    });
  }
  enterBedFail() {
    if (1 !== this.phase) return;
    this.phase = 2, this.winstate = !1, this.stepToken += 1, this.settleToken += 1;
    const t = this.settleToken;
    this.unschedule(this.onGirl2Tick), this.stopVisualTweens(), __rea_outer_S.getInstance().pauseTimer(), this.setInputLocked(!0), this.hideNodes(["bed_2_1", "girl4", "girl1_start"]), this.showNodes(["girl4_1", "bed_2_2", "girl1_end_1", "principal", "principal_angry"]), this.placeBelowPrompt(this.getNode("girl1_end_1")), this.placeBelowPrompt(this.getNode("principal")), this.placeBelowPrompt(this.getNode("principal_angry")), this.playDialogue("85_18"), this.scheduleOnce(() => {
      this.isValid && t === this.settleToken && __rea_outer_m.getInstance().showView(__rea_outer_b, __rea_outer_N.WIN_ANIMATION);
    }, 2);
  }
  playPhoneIntro() {
    this.voiceToken += 1;
    const t = this.voiceToken;
    this.showPhoneLine(), __rea_outer_u.stopVoice(), __rea_outer_u.playVoice(y), this.scheduleOnce(() => {
      this.isIntroLive(t) && this.scheduleOnce(() => {
        this.isIntroLive(t) && (this.hideNodes(["mobile_phone", "mask"]), this.playDialogue("85_2", () => this.enterPhase1()));
      }, 1);
    }, this.resolveDialogueHoldSeconds(y));
  }
  releaseTimeUpHold() {
    this.isHeldForTimeUp && 1 === this.phase && (__rea_outer_S.getInstance().getRemainingTime() <= 0 || (this.isHeldForTimeUp = !1, this.completedSteps.size >= L && this.enterSuccess()));
  }
  isStepAvailable(t) {
    return !(this.completedSteps.has(t) || t < 1 || t > L) && (4 === t ? this.completedSteps.has(1) : 6 === t ? this.completedSteps.has(5) : 9 === t ? this.completedSteps.has(8) : 10 === t ? this.completedSteps.has(8) && this.completedSteps.has(9) : 13 === t || 14 === t ? this.completedSteps.has(12) : 16 !== t || this.completedSteps.has(12) && this.completedSteps.has(13));
  }
  isStepLive(t) {
    return this.isValid && t === this.stepToken && 1 === this.phase && !this.isHeldForTimeUp;
  }
  isIntroLive(t) {
    return this.isValid && t === this.voiceToken && 0 === this.phase;
  }
  getHintStep() {
    for (let t = 1; t <= L; t += 1) if (this.isStepAvailable(t)) return t;
    return null;
  }
  stepIdForItem(t) {
    if (t === B || t === E) return this.completedSteps.has(2) ? null : 2;
    if (t === A || t === C) return this.completedSteps.has(8) ? this.completedSteps.has(9) || this.firstGarbage === t ? null : 9 : 8;
    const e = {
      hammer: 1,
      paint: 3,
      girl4: 4,
      quilt_dirty: 5,
      quilt_clean: 6,
      bg_clothes: 7,
      trash_bag: 10,
      mop: 11,
      ghost: 13,
      rag: 14,
      perfume: 15,
      cat: 16
    }[t];
    return !e || this.completedSteps.has(e) ? null : e;
  }
  registerInputHandlers() {
    this.node.off(__rea_outer_s.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(__rea_outer_s.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(__rea_outer_s.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(__rea_outer_s.EventType.TOUCH_CANCEL, this.onTouchCancel, this), this.node.on(__rea_outer_s.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(__rea_outer_s.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(__rea_outer_s.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(__rea_outer_s.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
  }
  unregisterInputHandlers() {
    var t;
    null != (t = this.node) && t.isValid && (this.node.off(__rea_outer_s.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(__rea_outer_s.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(__rea_outer_s.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(__rea_outer_s.EventType.TOUCH_CANCEL, this.onTouchCancel, this));
  }
  onTouchStart(t) {
    if (!this.canAcceptInput() || this.draggedNode) return;
    const e = t.getUILocation(),
      i = this.findDragStep(e);
    0 === i ? this.isStepAvailable(12) && this.containsPoint(this.getNode("bathroom"), e) && (this.swipeStart = e.clone()) : this.beginDrag(i, e);
  }
  onTouchMove(t) {
    var e;
    null != (e = this.draggedNode) && e.isValid && this.canAcceptInput() && this.moveDraggedTo(t.getUILocation());
  }
  onTouchEnd(t) {
    var e;
    const i = t.getUILocation();
    if (null != (e = this.draggedNode) && e.isValid) return void this.finishDrag(i);
    const s = this.swipeStart;
    this.swipeStart = null, this.canAcceptInput() && s && this.isStepAvailable(12) && this.isSwipeLeft(s, i) && this.completeStep(12, null);
  }
  onTouchCancel() {
    this.swipeStart = null, this.clearDrag(!0);
  }
  beginDrag(t, e) {
    var s;
    const h = this.findDragItem(e, t);
    if (!h) return;
    const o = this.toParentLocal(h, e);
    this.dragOffset = new __rea_outer_i(o.x - h.position.x, o.y - h.position.y, 0), this.dragStart = h.position.clone(), this.draggedNode = h, this.dragStep = t, this.dragPartner = this.partnerOf(h), null != (s = this.dragPartner) && s.isValid && (this.partnerStart = this.dragPartner.position.clone(), this.placeBelowPrompt(this.dragPartner)), this.placeBelowPrompt(h);
  }
  finishDrag(t) {
    const e = this.draggedNode,
      i = this.dragStep,
      s = this.dragPartner;
    if (null == e || !e.isValid) return void this.clearDrag(!1);
    if (this.moveDraggedTo(t), this.draggedNode = null, this.dragStep = 0, this.dragPartner = null, !this.canAcceptInput()) return void this.returnDragged(e, s);
    if ("girl4" === e.name && !this.completedSteps.has(1)) return this.isCenterInside(e, this.getNode("bed_2_1")) ? void this.enterBedFail() : void this.returnHome(e);
    const h = 2 === i ? this.visibleGirl2() ?? e : e,
      o = this.targetFor(i);
    (8 === i || 9 === i ? this.isOverlapping(h, o) : this.isCenterInside(h, o)) && this.isStepAvailable(i) ? this.completeStep(i, e) : this.returnDragged(e, s);
  }
  findDragStep(t) {
    let e = 0,
      i = -1;
    return O.forEach(s => {
      const h = this.stepIdForItem(s),
        o = this.getNode(s);
      if (null === h || !o || !this.containsPoint(o, t)) return;
      const a = o.getSiblingIndex();
      a < i || (i = a, e = h);
    }), e;
  }
  findDragItem(t, e) {
    let i = null,
      s = -1;
    return O.forEach(h => {
      if (this.stepIdForItem(h) !== e) return;
      const o = this.getNode(h);
      if (!o || !this.containsPoint(o, t)) return;
      const a = o.getSiblingIndex();
      a < s || (s = a, i = o);
    }), i;
  }
  moveDraggedTo(t) {
    const e = this.draggedNode;
    if (null == e || !e.isValid) return;
    const i = this.toParentLocal(e, t);
    e.setPosition(i.x - this.dragOffset.x, i.y - this.dragOffset.y, e.position.z);
    const s = this.dragPartner;
    if (null == s || !s.isValid) return;
    const h = e.position.x - this.dragStart.x,
      o = e.position.y - this.dragStart.y;
    s.setPosition(this.partnerStart.x + h, this.partnerStart.y + o, s.position.z);
  }
  clearDrag(t) {
    const e = this.draggedNode,
      i = this.dragPartner;
    this.draggedNode = null, this.dragPartner = null, this.dragStep = 0, this.swipeStart = null, t && (null != e && e.isValid && this.returnHome(e), null != i && i.isValid && this.returnHome(i));
  }
  returnDragged(t, e) {
    this.returnHome(t), null != e && e.isValid && this.returnHome(e);
  }
  partnerOf(t) {
    return t.name === B ? this.getNode(E) : t.name === E ? this.getNode(B) : null;
  }
  visibleGirl2() {
    const t = this.getNode(B);
    return null != t && t.active ? t : this.getNode(E);
  }
  isSwipeLeft(t, e) {
    const i = e.x - t.x,
      s = e.y - t.y;
    return -i >= 30 && Math.abs(i) >= 1.2 * Math.abs(s);
  }
  canAcceptInput() {
    return this.isValid && 1 === this.phase && !this.isInputLocked && !this.isHeldForTimeUp && !this.winstate;
  }
  completeStep(t, e) {
    if (!this.canAcceptInput() || !this.isStepAvailable(t)) return void (null != e && e.isValid && this.returnHome(e));
    this.acceptedItem = (null == e ? void 0 : e.name) ?? "", 8 === t && (this.firstGarbage = this.acceptedItem), this.completedSteps.add(t), this.hasInstallNum = this.completedSteps.size, this.applyStart(t), this.playStepEffects(t);
    const i = this.voiceFor(t);
    i && this.playDialogue(i), __rea_outer_S.getInstance().refreshGameProgress(), this.hasTimedPerformance(t) ? (this.setInputLocked(!0), this.stepToken += 1, this.runTimedStep(t, this.stepToken)) : this.tryEnterSuccess();
  }
  tryEnterSuccess() {
    this.completedSteps.size >= L && 1 === this.phase && this.enterSuccess();
  }
  hasTimedPerformance(t) {
    return 1 === t || 3 === t || 5 === t || 7 === t || 10 === t || 11 === t || 13 === t || 14 === t || 15 === t || 16 === t;
  }
  voiceFor(t) {
    return 8 === t || 9 === t ? this.acceptedItem === C ? "85_12" : "85_11" : 12 === t || 16 === t ? "" : x[t] ?? "";
  }
  playStepEffects(t) {
    this.playLevelEffect("level85_1"), 1 === t && this.playLevelEffect("level85_2"), 5 !== t && 7 !== t || this.playLevelEffect("level85_3"), 15 === t && this.playLevelEffect(I);
  }
  playLevelEffect(t) {
    __rea_outer_u.stopOneEffect(t), __rea_outer_u.playEffect_1(t);
  }
  applyStart(t) {
    switch (t) {
      case 1:
        this.hideNodes(["girl1_start", "hammer"]), this.showNodes(["girl1_hammer", "hammer_fight"]);
        break;
      case 2:
        this.unschedule(this.onGirl2Tick), this.hideNodes([B, E, "girl2_quilt"]), this.showNode(this.getNode("girl2_quilt_1"));
        break;
      case 3:
        this.hideNodes(["paint", "girl3"]), this.showNode(this.getNode("girl3_1")), this.startWallFade();
        break;
      case 4:
        this.hideNodes(["girl4", "girl4_quilt"]), this.showNode(this.getNode("girl4_1"));
        break;
      case 5:
        this.hideNode(this.getNode("quilt_dirty")), this.showNode(this.getNode("washing_machine_quilt")), this.startSpin(this.getNode("washing_machine_quilt"));
        break;
      case 6:
        this.hideNode(this.getNode("quilt_clean")), this.showNode(this.getNode("quilt_clean_1"));
        break;
      case 7:
        this.hideNode(this.getNode("bg_clothes")), this.showNode(this.getNode("washing_machine_clothes")), this.startSpin(this.getNode("washing_machine_clothes"));
        break;
      case 8:
        this.hideNode(this.getNode(this.acceptedItem)), this.hideNode(this.getNode("trash_can")), this.showNode(this.getNode("trash_can_1"));
        break;
      case 9:
        this.hideNode(this.getNode(this.acceptedItem)), this.hideNode(this.getNode("trash_can_1")), this.showNodes(["trash_bag", "trash_can"]);
        break;
      case 10:
        this.hideNodes(["trash_bag", "girl1_start"]), this.showNode(this.getNode("girl1_trash_bag"));
        break;
      case 11:
        this.hideNodes(["mop", "girl1_start"]), this.showNode(this.getNode("girl1_mop2"));
        break;
      case 12:
        this.hideNode(this.getNode("bathroom")), this.showNodes(["bathroom_1", "ghost", "rag"]);
        break;
      case 13:
        this.showNode(this.getNode("ghost_1")), this.startGhostSpin();
        break;
      case 14:
        this.hideNodes(["rag", "girl1_start"]);
        break;
      case 15:
        this.hideNodes(["perfume", "girl1_start"]), this.showNodes(["girl1_perfume", "perfume_1"]);
        break;
      case 16:
        this.hideNodes(["cat", "girl1_start"]), this.showNodes(["cat_fight", "girl1_cat"]);
    }
  }
  applyEnd(t) {
    switch (t) {
      case 1:
        this.hideNodes(["girl1_hammer", "hammer_fight", "hammer_fight_1", "hammer_fight_2", "bed_2_1"]), this.showNode(this.getNode("bed_2")), this.showGirl1();
        break;
      case 3:
        this.stopFadeStates(), this.hideNode(this.getNode("bg_wall"));
        break;
      case 5:
        this.finishSpin("washing_machine_quilt"), this.showNode(this.getNode("quilt_clean"));
        break;
      case 7:
        this.finishSpin("washing_machine_clothes"), this.showNode(this.getNode("clothes"));
        break;
      case 10:
        this.hideNodes(["girl1_trash_bag", "special_event"]), this.showGirl1();
        break;
      case 11:
        this.hideNodes(["girl1_mop2", "girl1_mop1", "bg_ground"]), this.showGirl1();
        break;
      case 13:
        this.stopFadeStates(), this.hideNodes(["ghost", "ghost_1"]);
        break;
      case 14:
        this.hideNodes(["girl1_rag", "girl1_rag_1", "table_1"]), this.showNode(this.getNode("table")), this.showGirl1();
        break;
      case 15:
        this.hideNodes(["girl1_perfume", "perfume_1", "girl1_perfume2", "perfume_2"]), this.stopStenchLoops(), this.hideStenchClouds(), this.showGirl1();
        break;
      case 16:
        this.hideNodes(["cat_fight", "girl1_cat", "cat_fight_1", "cat_fight_2"]), this.showGirl1(), this.showNode(this.getNode("cat_1")), this.playDialogue("85_17");
    }
  }
  runTimedStep(t, e) {
    switch (t) {
      case 1:
        this.runFight("hammer_fight", "hammer_fight_1", "hammer_fight_2", e);
        break;
      case 3:
        this.runAfter(.5, e, () => this.finishTimed(3));
        break;
      case 5:
        this.runAfter(1, e, () => this.finishTimed(5));
        break;
      case 7:
        this.runAfter(1, e, () => this.finishTimed(7));
        break;
      case 10:
        this.runTrashScare(e);
        break;
      case 11:
        this.runMop(e);
        break;
      case 13:
        this.runAfter(.7, e, () => this.finishTimed(13));
        break;
      case 14:
        this.runRag(e);
        break;
      case 15:
        this.runPerfume(e);
        break;
      case 16:
        this.runFight("cat_fight", "cat_fight_1", "cat_fight_2", e);
        break;
      default:
        this.finishTimed(t);
    }
  }
  finishTimed(t) {
    1 === this.phase && (this.applyEnd(t), this.completedSteps.size >= L ? this.enterSuccess() : this.setInputLocked(!1));
  }
  runFight(t, e, i, s) {
    const h = () => this.showFightSymbol(t, e, i),
      o = () => this.showFightSymbol(t, i, e);
    this.runFrames([.2, .2, .2, .1], [h, o, h, o], s, () => this.finishTimed("hammer_fight" === t ? 1 : 16));
  }
  runTrashScare(t) {
    this.runDelays([V, V, 0, V], [() => {
      this.hideNode(this.getNode("girl1_trash_bag")), this.showNode(this.getNode("special_event"));
    }, () => this.hideNode(this.getNode("special_event")), () => this.showNode(this.getNode("special_event")), () => this.finishTimed(10)], t, () => {});
  }
  runMop(t) {
    this.runDelays([V, V], [() => {
      this.hideNode(this.getNode("girl1_mop2")), this.showNode(this.getNode("girl1_mop1"));
    }, () => this.finishTimed(11)], t, () => {});
  }
  runRag(t) {
    const e = () => this.showPair("girl1_rag", "girl1_rag_1");
    this.runFrames([P, P, P], [e, () => this.showPair("girl1_rag_1", "girl1_rag"), e], t, () => this.finishTimed(14));
  }
  runPerfume(t) {
    this.runDelays([V, V], [() => {
      this.hideNodes(["girl1_perfume", "perfume_1"]), this.showNodes(["girl1_perfume2", "perfume_2"]), this.playLevelEffect(I);
    }, () => this.finishTimed(15)], t, () => {});
  }
  runFrames(t, e, i, s) {
    const h = o => {
      this.isStepLive(i) && (o >= e.length ? s() : (e[o](), this.scheduleOnce(() => h(o + 1), t[o] ?? 0)));
    };
    h(0);
  }
  runDelays(t, e, i, s) {
    const h = o => {
      this.isStepLive(i) && (o >= e.length ? s() : this.scheduleOnce(() => {
        this.isStepLive(i) && (e[o](), h(o + 1));
      }, t[o] ?? 0));
    };
    h(0);
  }
  runAfter(t, e, i) {
    this.scheduleOnce(() => {
      this.isStepLive(e) && i();
    }, t);
  }
  showFightSymbol(t, e, i) {
    this.hideNode(this.getNode(i)), this.showNode(this.getNode(e)), this.placeJustAfter(t, e);
  }
  showPair(t, e) {
    this.hideNode(this.getNode(e)), this.showNode(this.getNode(t));
  }
  showGirl1() {
    const t = this.getNode("girl1_start");
    null != t && t.isValid && (t.setPosition(this.originOf(t)), t.active = !0);
  }
  startStenchLoops() {
    this.stopStenchLoops();
    const t = this.stenchPairs.length;
    this.stenchPairs.forEach((e, i) => {
      e.showsLead = !0, this.applyStenchPair(e);
      const s = () => {
        this.swapStenchPair(i);
      };
      this.stenchTicks.push(s);
      const o = t > 1 ? .5 * i / t : 0;
      this.schedule(s, .5, __rea_outer_h.REPEAT_FOREVER, o);
    });
  }
  swapStenchPair(t) {
    if (!this.isValid || this.completedSteps.has(15)) return void this.stopStenchLoops();
    const e = this.stenchPairs[t];
    e && (e.showsLead = !e.showsLead, this.applyStenchPair(e));
  }
  applyStenchPair(t) {
    this.setNodeActive(t.lead, t.showsLead), this.setNodeActive(t.alternate, !t.showsLead);
  }
  stopStenchLoops() {
    this.stenchTicks.forEach(t => this.unschedule(t)), this.stenchTicks.length = 0;
  }
  bindStenchPairs() {
    [["stench_1", "stench_12"], ["stench_2", "stench_22"], ["stench_3", "stench_32"]].forEach(([t, e]) => {
      const i = this.getNode(t),
        s = this.getNode(e);
      i && s && this.stenchPairs.push({
        lead: i,
        alternate: s,
        showsLead: !0
      });
    });
  }
  hideStenchClouds() {
    var t;
    null == (t = this.stageNode) || t.children.forEach(t => {
      t.name.startsWith("stench_") && (t.active = !1);
    });
  }
  startGirl2Blink() {
    this.unschedule(this.onGirl2Tick), this.isGirl2Lead = !0, this.setNodeActive(this.getNode(B), !0), this.setNodeActive(this.getNode(E), !1), this.schedule(this.onGirl2Tick, .5);
  }
  swapGirl2Pose() {
    this.isValid && !this.completedSteps.has(2) && 2 !== this.phase ? (this.isGirl2Lead = !this.isGirl2Lead, this.setNodeActive(this.getNode(B), this.isGirl2Lead), this.setNodeActive(this.getNode(E), !this.isGirl2Lead)) : this.unschedule(this.onGirl2Tick);
  }
  startWallFade() {
    const t = this.getNode("bg_wall");
    if (null == t || !t.isValid) return;
    this.stopFadeStates(), this.setSpriteAlpha(t, 255);
    const e = {
      alpha: 255
    };
    this.fadeState = e, __rea_outer_o(e).to(.5, {
      alpha: 0
    }, {
      onUpdate: () => {
        t.isValid && this.setSpriteAlpha(t, e.alpha);
      }
    }).start();
  }
  startGhostSpin() {
    const t = this.getNode("ghost");
    if (null == t || !t.isValid) return;
    this.stopFadeStates(), t.angle = 0, t.setScale(1, 1, 1), this.setSpriteAlpha(t, 255);
    const e = {
      angle: 0,
      scale: 1,
      alpha: 255
    };
    this.ghostState = e, __rea_outer_o(e).to(.7, {
      angle: -360,
      scale: 0,
      alpha: 0
    }, {
      onUpdate: () => {
        t.isValid && (t.angle = e.angle, t.setScale(e.scale, e.scale, 1), this.setSpriteAlpha(t, e.alpha));
      }
    }).start();
  }
  startSpin(t) {
    null != t && t.isValid && (this.stopTweenIfValid(t), t.angle = 0, __rea_outer_o(t).to(1, {
      angle: -1800
    }).start());
  }
  finishSpin(t) {
    const e = this.getNode(t);
    null != e && e.isValid && (this.stopTweenIfValid(e), e.angle = 0, e.active = !1);
  }
  placeGirlInFront() {
    const t = this.getNode("girl1_end");
    null != t && t.isValid && t.setPosition(this.originOf(t)), this.placeBelowPrompt(this.getNode("principal")), this.placeBelowPrompt(this.getNode("principal_look"));
  }
  spinLook(t) {
    const e = this.getNode("principal_look");
    null != e && e.isValid && t === this.settleToken && (this.stopTweenIfValid(e), e.setPosition(this.originOf(e)), e.angle = -6, e.active = !0, __rea_outer_o(e).to(.35, {
      angle: 6
    }).to(.35, {
      angle: -6
    }).union().repeat(2).start());
  }
  playDialogue(t, e) {
    this.voiceToken += 1;
    const i = this.voiceToken;
    this.showPrompt(t), __rea_outer_u.stopVoice(), __rea_outer_u.playVoice(t), this.scheduleOnce(() => {
      this.isValid && i === this.voiceToken && (this.hidePrompt(), null == e || e());
    }, this.resolveDialogueHoldSeconds(t));
  }
  resolveDialogueHoldSeconds(t) {
    var e;
    const i = (null == (e = __rea_outer_u.audioMap.get(t)) ? void 0 : e.getDuration()) ?? 0;
    return i > .05 ? i : 2.5;
  }
  showPhoneLine() {
    this.phoneLabel && (this.phoneLabel.string = this.resolveI18nText(y)), this.showNodes(["mobile_phone", "mask"]), this.hidePrompt();
  }
  showPrompt(t) {
    this.promptLabel && (this.promptLabel.string = this.resolveI18nText(t)), this.showNode(this.promptBoxNode), this.bringToFront(this.promptBoxNode);
  }
  hidePrompt() {
    this.hideNode(this.promptBoxNode);
  }
  resolveI18nText(t) {
    const e = __rea_outer__.getInstance().getKey(t);
    return e && e !== t ? e : t;
  }
  setInputLocked(t) {
    this.isInputLocked = t;
    const e = this.backBgNode;
    null != e && e.isValid && (this.stopTweenIfValid(e), __rea_outer_T(e, 0), e.active = t);
  }
  prepareBackBg() {
    const t = this.backBgNode;
    null != t && t.isValid && (__rea_outer_T(t, 0), t.active = !1);
  }
  containsPoint(t, e) {
    if (null == t || !t.isValid || !t.activeInHierarchy) return !1;
    const i = t.getComponent(__rea_outer_a);
    return !!i && i.getBoundingBoxToWorld().contains(e);
  }
  isCenterInside(t, e) {
    return __rea_outer_p.isDragNearTarget(t, e);
  }
  isOverlapping(t, e) {
    return __rea_outer_p.isDragNearTarget(t, e);
  }
  toParentLocal(t, e) {
    var s;
    const h = null == (s = t.parent) ? void 0 : s.getComponent(__rea_outer_a);
    return h ? h.convertToNodeSpaceAR(new __rea_outer_i(e.x, e.y, 0)) : new __rea_outer_i(e.x, e.y, 0);
  }
  targetFor(t) {
    const e = F[t];
    return e ? this.getNode(e) : null;
  }
  originOf(t) {
    var e;
    return (null == (e = this.originByNode.get(t)) ? void 0 : e.clone()) ?? t.position.clone();
  }
  returnHome(t) {
    if (!t.isValid) return;
    this.stopTweenIfValid(t), t.setPosition(this.originOf(t));
    const e = this.siblingByNode.get(t);
    void 0 !== e && t.setSiblingIndex(e);
  }
  restoreOrigins() {
    this.originByNode.forEach((t, e) => {
      e.isValid && (this.stopTweenIfValid(e), e.setPosition(t), e.angle = 0, e.setScale(1, 1, 1));
    });
  }
  showNode(t) {
    this.setNodeActive(t, !0);
  }
  hideNode(t) {
    this.setNodeActive(t, !1);
  }
  showNodes(t) {
    t.forEach(t => this.showNode(this.getNode(t)));
  }
  hideNodes(t) {
    t.forEach(t => this.hideNode(this.getNode(t)));
  }
  setNodeActive(t, e) {
    null != t && t.isValid && (t.active = e);
  }
  bringToFront(t) {
    null != t && t.isValid && t.parent && t.setSiblingIndex(t.parent.children.length - 1);
  }
  placeBelowPrompt(t) {
    const e = this.promptBoxNode;
    null != t && t.isValid && null != e && e.isValid && t.parent === e.parent && t.setSiblingIndex(e.getSiblingIndex());
  }
  placeJustAfter(t, e) {
    const i = this.getNode(t),
      s = this.getNode(e);
    if (null == i || !i.isValid || null == s || !s.isValid || s.parent !== i.parent) return;
    const h = i.getSiblingIndex();
    s.getSiblingIndex() > h || s.setSiblingIndex(h);
  }
  setSpriteAlpha(t, e) {
    const i = (null == t ? void 0 : t.getComponent(__rea_outer_n)) ?? null;
    if (!i) return;
    const s = i.color;
    i.color = new __rea_outer_r(s.r, s.g, s.b, Math.round(Math.max(0, Math.min(255, e))));
  }
  stopFadeStates() {
    this.fadeState && (__rea_outer_l.stopAllByTarget(this.fadeState), this.fadeState = null), this.ghostState && (__rea_outer_l.stopAllByTarget(this.ghostState), this.ghostState = null);
  }
  stopVisualTweens() {
    this.stopFadeStates(), this.originByNode.forEach((t, e) => {
      this.stopTweenIfValid(e);
    }), this.stopTweenIfValid(this.backBgNode);
  }
  stopTweenIfValid(t) {
    null != t && t.isValid && __rea_outer_w(t);
  }
  getNode(t) {
    return this.nodeByName.get(t) ?? null;
  }
  resolveReferences() {
    var t, e;
    const i = this.node.getChildByPath("UIPanel/gameNode");
    this.stageNode = i, this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.nodeByName.clear(), this.originByNode.clear(), this.siblingByNode.clear(), this.stenchPairs.length = 0, null == i || i.children.forEach(t => {
      this.originByNode.set(t, t.position.clone()), this.siblingByNode.set(t, t.getSiblingIndex()), this.nodeByName.has(t.name) || this.nodeByName.set(t.name, t);
    }), this.bindStenchPairs(), this.promptBoxNode = this.getNode("prompt_box"), this.promptLabel = (null == (t = this.promptBoxNode) || null == (t = t.getChildByName("Label")) ? void 0 : t.getComponent(__rea_outer_d)) ?? null;
    const s = this.getNode("mobile_phone");
    this.phoneLabel = (null == s || null == (e = s.getChildByName("Labelmsg")) ? void 0 : e.getComponent(__rea_outer_d)) ?? null, this.warnIfMissing();
  }
  applyOpeningVisibility() {
    var t;
    null == (t = this.stageNode) || t.children.forEach(t => {
      "prompt_box" !== t.name ? t.active = !G.has(t.name) : t.active = !1;
    }), this.hideNode(this.node.getChildByPath("UIPanel/click_root")), this.hideNode(this.node.getChildByPath("UIPanel/demo"));
  }
  warnIfMissing() {
    this.stageNode || console.warn("[Level_85] missing UIPanel/gameNode"), this.backBgNode || console.warn("[Level_85] missing UIPanel/backBG"), this.promptLabel || console.warn("[Level_85] missing prompt_box/Label"), this.phoneLabel || console.warn("[Level_85] missing mobile_phone/Labelmsg"), 3 !== this.stenchPairs.length && console.warn(`[Level_85] expected 3 stench pairs, found ${this.stenchPairs.length}`);
    ["bg", "bg_ground", "bg_garbage", "bg_clothes", "mop", "paint", "bg_wall", "bed_2", "bed_2_1", "bed_2_2", "bed_1", "bathroom", "bathroom_1", "cat_bed", "cat", "cat 拷贝", "cat_1", "cat_fight", "cat_fight_1", "cat_fight_2", "girl1_cat", "rag", "ghost", "ghost_1", "washing_machine", "washing_machine_quilt", "washing_machine_clothes", "hammer", "quilt_clean", "quilt_clean_1", "quilt_dirty", "quilt_dirty_1", "trash_can", "trash_can_1", "trash_bag", "girl1_end", "girl1_end_1", "girl1_start", "girl1_mop2", "girl1_mop1", "girl1_trash_bag", "special_event", "girl1_hammer", "girl1_perfume", "perfume_1", "girl1_perfume2", "perfume_2", "table", "table_1", "table_1_garbage", "girl1_rag", "girl1_rag_1", "stool", "girl2_quilt", "girl2_quilt_1", "girl2", "girl2_1", "clothes", "perfume", "girl3_1", "girl3", "girl4_quilt", "girl4_1", "girl4", "hammer_fight_1", "hammer_fight_2", "hammer_fight", "principal", "principal_angry", "principal_look", "mask", "mobile_phone", "star", "prompt_box"].forEach(t => {
      this.getNode(t) || console.warn(`[Level_85] missing ${t}`);
    });
  }
  cleanupRuntime(t) {
    this.unscheduleAllCallbacks(), this.unregisterInputHandlers(), this.voiceToken += 1, this.stepToken += 1, this.settleToken += 1, this.draggedNode = null, this.dragPartner = null, this.dragStep = 0, this.swipeStart = null, t && __rea_outer_u.stopVoice(), this.stopVisualTweens(), this.stopStenchLoops();
  }
}) || v;
__rea_outer_e._RF.pop();
export { __recovered_export_0 as default };
