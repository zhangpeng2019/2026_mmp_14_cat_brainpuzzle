// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_86.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_e } from "cc";
import { Node as __rea_outer_i } from "cc";
import { tween as __rea_outer_s } from "cc";
import { UITransform as __rea_outer_o } from "cc";
import { Vec3 as __rea_outer_h } from "cc";
import { Sprite as __rea_outer_n } from "cc";
import { Color as __rea_outer_l } from "cc";
import { Label as __rea_outer_a } from "cc";
import { _decorator as __rea_outer_d } from "cc";
import { default as __rea_outer_r } from "./LevelBase";
import { default as __rea_outer_c } from "./AudioManager";
import { I18nController as __rea_outer_u } from "./i18n-controller";
import { I18nItem as __rea_outer_p } from "./i18n-item";
import { UIManager as __rea_outer_v } from "./ui-manager";
import { UILayer as __rea_outer_N } from "./ui-layer";
import { UIHint as __rea_outer_g } from "./uihint";
import { UIFail as __rea_outer_y } from "./uifail";
import { GameController as __rea_outer_A } from "./GameController";
import { stopAllTweens as __rea_outer_m } from "./CocosCompat";
import { setNodeOpacity as __rea_outer_k } from "./CocosCompat";
import { getUIOpacity as __rea_outer_f } from "./CocosCompat";
let __recovered_export_0;
var w;
__rea_outer_e._RF.push({}, "2efdd5ieHBKWrR3TqurD9uR", "Level_86", void 0);
const {
    ccclass: b
  } = __rea_outer_d,
  I = "level86_2",
  T = "86_14",
  B = {
    408: T,
    531: "86_17",
    888: "86_18",
    666: "86_19"
  },
  C = [{
    digit: "1",
    x: -171,
    y: 226.5
  }, {
    digit: "2",
    x: 2,
    y: 226.5
  }, {
    digit: "3",
    x: 175,
    y: 226.5
  }, {
    digit: "4",
    x: -171,
    y: 56.5
  }, {
    digit: "5",
    x: 2,
    y: 56.5
  }, {
    digit: "6",
    x: 175,
    y: 56.5
  }, {
    digit: "7",
    x: -171,
    y: -113.5
  }, {
    digit: "8",
    x: 2,
    y: -113.5
  }, {
    digit: "9",
    x: 175,
    y: -113.5
  }, {
    digit: "0",
    x: 2,
    y: -283.5
  }],
  _ = {
    1: {
      upperKey: "86_3",
      upperAnswers: ["86_4"],
      lowerKey: "86_12",
      lowerAnswers: ["86_5"]
    },
    2: {
      upperKey: "86_3",
      upperAnswers: ["86_4"],
      lowerKey: "86_13",
      lowerAnswers: ["86_6"]
    },
    3: {
      upperKey: "86_3",
      upperAnswers: ["86_7"],
      lowerKey: "86_12",
      lowerAnswers: ["86_8"]
    },
    4: {
      upperKey: "86_11",
      upperAnswers: ["86_9"],
      lowerKey: "86_15",
      lowerAnswers: ["86_10", "86_21"]
    },
    5: {
      upperKey: "86_11",
      upperAnswers: [],
      lowerKey: "86_13",
      lowerAnswers: []
    }
  };
__recovered_export_0 = b("Level_86")(w = class extends __rea_outer_r {
  constructor(...t) {
    super(...t), this.winstate = !1, this.phase = 0, this.isSettled = !1, this.isInputLocked = !1, this.visitorReady = !1, this.buttonsVisible = !1, this.talkOpen = !1, this.phoneOpen = !1, this.phoneResultLocked = !1, this.drawerOpen = !1, this.paperUnfolded = !1, this.pendingWinAfterTimeUp = !1, this.currentId = 0, this.cursor = 0, this.flowToken = 0, this.voiceToken = 0, this.dialed = "", this.pressedKey = null, this.roundOrder = [], this.resolved = new Set(), this.homes = new Map(), this.phoneKeys = [], this.motionNodes = [], this.gameNode = null, this.promptNode = null, this.promptLabelNode = null, this.answerNode = null, this.answerLabelNode = null, this.blackNode = null, this.gunNode = null, this.bulletNode = null, this.backBgNode = null, this.talkNode = null, this.upperOptionNode = null, this.lowerOptionNode = null, this.cancelNode = null, this.phoneRoot = null, this.mobilePhoneNode = null, this.connectNode = null, this.connectPressedNode = null, this.dialLabel = null, this.callNode = null, this.callLabelNode = null, this.drawerNode = null, this.paperNode = null, this.paperOpenNode = null, this.guardNode = null, this.guardEndNode = null, this.attackButton = null, this.talkButton = null, this.callButton = null, this.passButton = null, this.attackCaption = null, this.talkCaption = null, this.callCaption = null, this.passCaption = null, this.womanDoor = null, this.womanScared = null, this.motherDoor = null, this.courierDoor = null, this.loversDoor = null, this.loversScared = null, this.ghostNode = null;
  }
  onLoad() {
    super.onLoad(), this.bindNodes(), this.rememberHomes(), this.buildMissingLabels(), this.allItemNum = 5, this.hasInstallNum = 0;
  }
  start() {
    this.bindInput(), this.beginOpening();
  }
  onDestroy() {
    this.flowToken += 1, this.voiceToken += 1, this.unscheduleAllCallbacks(), this.stopMotion(), this.unbindInput(), super.onDestroy();
  }
  update(t) {
    this.pendingWinAfterTimeUp && !this.isSettled && this.isValid && (__rea_outer_A.getInstance().getRemainingTime() <= 0 || (this.pendingWinAfterTimeUp = !1, this.beginSuccess()));
  }
  showHint() {
    if (!this.canShowHint()) return;
    const t = __rea_outer_u.getInstance().getKey(`level86_hint${this.currentId}`);
    __rea_outer_v.getInstance().showView(__rea_outer_g, void 0, {
      body: t
    });
  }
  getGameProgressSnapshot() {
    const t = Math.min(this.hasInstallNum, 5);
    return {
      progress: t / 5,
      label: `${t}/5`
    };
  }
  handleTimeExpired() {
    return !(1 === this.phase && !this.isSettled) || (this.flowToken += 1, this.voiceToken += 1, this.unscheduleAllCallbacks(), this.stopMotion(), __rea_outer_c.stopVoice(), this.hidePrompt(), this.hideInteraction(), this.hideShootVisuals(), this.setInputLocked(!1), this.resolved.has(5) || this.hasInstallNum >= 5 ? (this.pendingWinAfterTimeUp = !0, this.setInputLocked(!0), this.hideAllVisitors(), this.setActive(this.guardNode, !1), !1) : this.resolved.has(this.currentId) ? (this.advanceCursor(), !1) : (this.snapCurrentVisitor(), this.visitorReady = !0, this.showButtons(), !1));
  }
  markAllTasksCompleted() {
    this.hasInstallNum = 5, this.phase = 2, this.winstate = !0, this.isSettled = !0, this.flowToken += 1, this.voiceToken += 1, this.unscheduleAllCallbacks(), __rea_outer_c.stopVoice();
  }
  skipOpeningToPlay() {
    return 0 === this.phase && !this.isSettled && (this.voiceToken += 1, this.stopOpeningDialogue(), this.hidePrompt(), this.phase = 1, __rea_outer_A.getInstance().resumeTimer(), this.enterVisitor(this.roundOrder[0]), !0);
  }
  beginOpening() {
    this.phase = 0, this.isSettled = !1, this.winstate = !1, this.pendingWinAfterTimeUp = !1, this.resolved.clear(), this.hasInstallNum = 0, this.roundOrder.length = 0, this.roundOrder.push(...this.shuffleVisitors(), 5), this.cursor = 0, this.currentId = 0, __rea_outer_c.playMusic("bgm2", !0, .5), __rea_outer_A.getInstance().pauseTimer(), __rea_outer_A.getInstance().refreshGameProgress(), this.applyInitialVisibility(), this.setInputLocked(!0), this.playDialogue("86_1", () => {
      0 !== this.phase || this.isSettled || this.playDialogue("86_2", () => {
        0 !== this.phase || this.isSettled || (this.phase = 1, __rea_outer_A.getInstance().resumeTimer(), this.enterVisitor(this.roundOrder[0]));
      });
    });
  }
  enterVisitor(t) {
    this.flowToken += 1;
    const e = this.flowToken;
    this.currentId = t, this.visitorReady = !1, this.hideInteraction(), this.hideAllVisitors(), this.setInputLocked(!0);
    const i = this.doorNode(t);
    if (null == i || !i.isValid) return void this.onVisitorArrived(e);
    const s = this.homeOf(i);
    i.setPosition(this.edgePosition(i, -1)), i.active = !0, this.moveNode(i, s, e, () => this.onVisitorArrived(e));
  }
  onVisitorArrived(t) {
    this.isFlowAlive(t) && 1 === this.phase && !this.isSettled && (this.visitorReady = !0, this.setInputLocked(!1), this.applyTalkKeys(), this.showButtons());
  }
  beginCorrectAttack() {
    this.flowToken += 1;
    const t = this.flowToken;
    this.stopVoice(), this.addProgress(), this.resolved.add(this.currentId), this.hideInteraction(), this.setInputLocked(!0);
    const e = this.doorNode(this.currentId),
      i = this.scaredNode(this.currentId);
    this.setActive(e, !1), null != i && i.isValid && (i.setPosition(this.homeOf(i)), i.active = !0), this.scheduleOnce(() => {
      this.isFlowAlive(t) && (this.fadeTo(this.blackNode, 255, t, () => {
        this.setActive(e, !1), this.setActive(i, !1);
      }), this.fadeTo(this.gunNode, 255, t), this.scheduleOnce(() => {
        if (!this.isFlowAlive(t)) return;
        this.showBullet(), __rea_outer_c.playEffect_1(I);
        const e = 1 === this.currentId ? "86_16" : "86_23";
        this.playDialogue(e, () => {
          this.isFlowAlive(t) && this.fadeOutGroup([this.blackNode, this.gunNode, this.bulletNode], t, () => {
            this.advanceAfterCorrect(t);
          });
        });
      }, .5));
    }, .7);
  }
  beginIneffectiveGhostAttack() {
    this.flowToken += 1;
    const t = this.flowToken;
    this.stopVoice(), this.hideInteraction(), this.setInputLocked(!0);
    const e = this.ghostNode;
    this.scheduleOnce(() => {
      this.isFlowAlive(t) && (this.fadeTo(this.blackNode, 255, t), this.fadeTo(this.gunNode, 255, t), this.scheduleOnce(() => {
        this.isFlowAlive(t) && (this.showBullet(), __rea_outer_c.playEffect_1(I), this.keepGhostVisible(e), this.scheduleOnce(() => {
          this.isFlowAlive(t) && 1 === this.phase && this.fadeOutGroup([this.blackNode, this.gunNode, this.bulletNode], t, () => {
            this.keepGhostVisible(e), this.setInputLocked(!1), this.visitorReady = !0, this.showButtons();
          });
        }, .7));
      }, .5));
    }, .7);
  }
  keepGhostVisible(t) {
    null != t && t.isValid && (this.placeHome(t), t.active = !0);
  }
  beginCorrectPass() {
    this.flowToken += 1;
    const t = this.flowToken;
    this.stopVoice(), this.addProgress(), this.resolved.add(this.currentId), this.hideInteraction(), this.setInputLocked(!0);
    const e = 2 === this.currentId ? "86_20" : "86_22";
    this.playDialogue(e);
    const i = this.doorNode(this.currentId);
    null != i && i.isValid ? this.moveNode(i, this.edgePosition(i, 1), t, () => {
      this.setActive(i, !1), this.scheduleOnce(() => {
        this.isFlowAlive(t) && this.advanceAfterCorrect(t);
      }, .7);
    }) : this.scheduleOnce(() => this.advanceAfterCorrect(t), .7);
  }
  advanceAfterCorrect(t) {
    this.isFlowAlive(t) && 1 === this.phase && !this.isSettled && (this.hideAllVisitors(), this.advanceCursor());
  }
  advanceCursor() {
    const t = this.cursor + 1;
    t >= this.roundOrder.length || (this.cursor = t, this.enterVisitor(this.roundOrder[this.cursor]));
  }
  beginEscort() {
    if (this.isSettled || 1 !== this.phase) return;
    this.flowToken += 1;
    const t = this.flowToken;
    this.addProgress(), this.resolved.add(5), this.hideInteraction(), this.hideAllVisitors(), this.setActive(this.ghostNode, !0), this.placeHome(this.ghostNode), this.setInputLocked(!0);
    const e = this.guardNode,
      i = this.ghostNode;
    null != e && e.isValid && null != i && i.isValid ? (e.setPosition(this.edgePosition(e, -1)), e.active = !0, this.moveNode(e, this.homeOf(e), t, () => {
      this.isFlowAlive(t) && this.movePairOffLeft(e, i, t, () => {
        this.isFlowAlive(t) && (this.setActive(e, !1), this.setActive(i, !1), this.beginSuccess());
      });
    })) : this.beginSuccess();
  }
  beginSuccess() {
    if (this.isSettled) return;
    this.isSettled = !0, this.phase = 2, this.winstate = !0, this.pendingWinAfterTimeUp = !1, __rea_outer_A.getInstance().pauseTimer(), this.flowToken += 1;
    const t = this.flowToken;
    this.unscheduleAllCallbacks(), this.stopMotion(), this.stopVoice(), this.hideInteraction(), this.hideAllVisitors(), this.setActive(this.guardNode, !1), this.setInputLocked(!0), this.fadeTo(this.blackNode, 255, t, () => {
      this.hideAllVisitors(), this.setActive(this.guardNode, !1), this.placeHome(this.guardEndNode), this.setActive(this.guardEndNode, !0), this.fadeTo(this.blackNode, 0, t, () => {
        this.playDialogue("86_28"), this.showLevelSuccess(1);
      });
    });
  }
  fail(t) {
    if (this.isSettled || 2 === this.phase) return;
    this.isSettled = !0, this.phase = 2, this.winstate = !1, __rea_outer_A.getInstance().pauseTimer(), this.flowToken += 1;
    const e = this.flowToken;
    this.unscheduleAllCallbacks(), this.stopMotion(), this.stopVoice(), this.hideInteraction(), this.hideShootVisuals(), this.setInputLocked(!0), this.fadeTo(this.blackNode, 255, e, () => {
      this.hideAllVisitors(), this.setActive(this.guardEndNode, !1), this.placeHome(this.guardNode), this.setActive(this.guardNode, !0), this.fadeTo(this.blackNode, 0, e, () => {
        this.playDialogue(t), this.scheduleOnce(() => {
          this.isValid && this.isSettled && !this.winstate && __rea_outer_v.getInstance().showView(__rea_outer_y, __rea_outer_N.WIN_ANIMATION);
        }, 1);
      });
    });
  }
  onAttack() {
    this.canPressMainButtons() && (this.playAction(), 1 !== this.currentId && 4 !== this.currentId ? 5 !== this.currentId ? this.fail("86_27") : this.beginIneffectiveGhostAttack() : this.beginCorrectAttack());
  }
  onPass() {
    this.canPressMainButtons() && (this.playAction(), 2 !== this.currentId && 3 !== this.currentId ? this.fail("86_26") : this.beginCorrectPass());
  }
  openTalk() {
    this.canPressMainButtons() && (this.playAction(), this.applyTalkKeys(), this.talkOpen = !0, this.hideButtonNodes(), this.setActive(this.talkNode, !0));
  }
  closeTalk(t) {
    this.talkOpen = !1, this.setActive(this.talkNode, !1), t && this.canRestoreButtons() && this.showButtons();
  }
  onTalkOption(t, e) {
    this.talkOpen && 1 === this.phase && !this.isSettled && (this.playAction(), this.closeTalk(!0), this.playDialogue(e, () => this.playAnswerQueue(t, 0)));
  }
  openPhone() {
    this.canPressMainButtons() && (this.playAction(), this.stopVoice(), this.closeTalk(!1), this.phoneOpen = !0, this.phoneResultLocked = !1, this.dialed = "", this.dialLabel && (this.dialLabel.string = ""), this.resetKeys(), this.setActive(this.connectNode, !0), this.setActive(this.connectPressedNode, !1), this.setActive(this.callNode, !1), this.hideButtonNodes(), this.setActive(this.phoneRoot, !0));
  }
  closePhone(t) {
    this.phoneOpen = !1, this.phoneResultLocked = !1, this.dialed = "", this.pressedKey = null, this.dialLabel && (this.dialLabel.string = ""), this.resetKeys(), this.setActive(this.connectNode, !0), this.setActive(this.connectPressedNode, !1), this.setActive(this.phoneRoot, !1), this.setActive(this.callNode, !1), t && this.canRestoreButtons() && this.showButtons();
  }
  onDigit(t) {
    !this.phoneOpen || this.phoneResultLocked || 1 !== this.phase || this.isSettled || (this.playAction(), this.dialed.length >= 3 || (this.dialed += t, this.dialLabel && (this.dialLabel.string = this.dialed)));
  }
  onConnect() {
    if (!this.phoneOpen || this.phoneResultLocked || 1 !== this.phase || this.isSettled) return;
    if (this.playAction(), this.phoneResultLocked = !0, this.setActive(this.connectNode, !1), this.setActive(this.connectPressedNode, !0), "999" === this.dialed) return void this.playNineNine();
    const t = B[this.dialed] ?? T;
    this.playDialogue(t, () => {
      1 !== this.phase || this.isSettled || this.closePhone(!0);
    });
  }
  playNineNine() {
    this.playDialogue("86_24", () => {
      1 !== this.phase || this.isSettled || this.pendingWinAfterTimeUp || this.playCallLine("86_25", () => {
        if (1 !== this.phase || this.isSettled || this.pendingWinAfterTimeUp) return;
        const t = 5 === this.currentId;
        this.closePhone(!1), t ? this.beginEscort() : this.canRestoreButtons() && this.showButtons();
      });
    });
  }
  openDrawer() {
    this.canUseDrawer() && !this.drawerOpen && (this.playAction(), this.drawerOpen = !0, this.setActive(this.drawerNode, !0), this.setActive(this.paperNode, !0));
  }
  unfoldPaper() {
    this.drawerOpen && !this.paperUnfolded && this.canUseDrawer() && (this.playAction(), this.paperUnfolded = !0, this.setActive(this.paperNode, !1), this.setActive(this.paperOpenNode, !0), this.raisePaper());
  }
  foldPaper() {
    this.paperUnfolded = !1, this.setActive(this.paperOpenNode, !1), this.drawerOpen && this.setActive(this.paperNode, !0);
  }
  playAnswerQueue(t, e) {
    if (1 !== this.phase || this.isSettled) return;
    if (e >= t.length) return void this.hideAnswer();
    const i = e + 1 < t.length;
    this.playAnswer(t[e], () => this.playAnswerQueue(t, e + 1), i);
  }
  playDialogue(t, e, i = !1) {
    this.voiceToken += 1;
    const s = this.voiceToken;
    __rea_outer_c.stopVoice(), this.hideAnswer(), this.showPrompt(t), __rea_outer_c.playVoice(t), this.scheduleOnce(() => {
      this.isValid && s === this.voiceToken && (i || this.hidePrompt(), null == e || e());
    }, this.dialogueSeconds(t));
  }
  playAnswer(t, e, i = !1) {
    this.voiceToken += 1;
    const s = this.voiceToken;
    __rea_outer_c.stopVoice(), this.showAnswer(t), __rea_outer_c.playVoice(t), this.scheduleOnce(() => {
      this.isValid && s === this.voiceToken && (i || this.hideAnswer(), null == e || e());
    }, this.dialogueSeconds(t));
  }
  playCallLine(t, e) {
    this.voiceToken += 1;
    const i = this.voiceToken;
    __rea_outer_c.stopVoice(), this.hidePrompt(), this.hideAnswer(), this.setActive(this.callNode, !0), this.callLabelNode && this.bindI18n(this.callLabelNode, t), __rea_outer_c.playVoice(t), this.scheduleOnce(() => {
      this.isValid && i === this.voiceToken && e();
    }, this.dialogueSeconds(t));
  }
  stopVoice() {
    this.voiceToken += 1, __rea_outer_c.stopVoice(), this.hidePrompt(), this.hideAnswer();
  }
  showPrompt(t) {
    this.setActive(this.promptNode, !0), this.promptLabelNode && this.bindI18n(this.promptLabelNode, t);
  }
  hidePrompt() {
    this.setActive(this.promptNode, !1);
  }
  showAnswer(t) {
    this.hidePrompt(), this.setActive(this.answerNode, !0), this.answerLabelNode && this.bindI18n(this.answerLabelNode, t);
  }
  hideAnswer() {
    this.setActive(this.answerNode, !1);
  }
  dialogueSeconds(t) {
    var e;
    const i = (null == (e = __rea_outer_c.audioMap.get(t)) ? void 0 : e.getDuration()) ?? 0;
    return i > .05 ? i : 2.5;
  }
  playAction() {
    __rea_outer_c.playEffect_1("level86_1");
  }
  addProgress() {
    this.hasInstallNum >= 5 || (this.hasInstallNum += 1, __rea_outer_A.getInstance().refreshGameProgress());
  }
  bindInput() {
    this.node.on(__rea_outer_i.EventType.TOUCH_START, this.onTouchStart, this, !0), this.node.on(__rea_outer_i.EventType.TOUCH_END, this.onTouchEnd, this, !0), this.node.on(__rea_outer_i.EventType.TOUCH_CANCEL, this.onTouchCancel, this, !0);
  }
  unbindInput() {
    var t;
    null != (t = this.node) && t.isValid && (this.node.off(__rea_outer_i.EventType.TOUCH_START, this.onTouchStart, this, !0), this.node.off(__rea_outer_i.EventType.TOUCH_END, this.onTouchEnd, this, !0), this.node.off(__rea_outer_i.EventType.TOUCH_CANCEL, this.onTouchCancel, this, !0));
  }
  onTouchStart(t) {
    if (this.pressedKey = null, !this.phoneOpen || this.phoneResultLocked || 1 !== this.phase || this.isSettled) return;
    const e = this.keyAt(t.getUILocation());
    e && (this.pressedKey = e, this.setKeyDown(e, !0));
  }
  onTouchEnd(t) {
    const e = t.getUILocation(),
      i = this.pressedKey;
    this.releasePressedKey(), i && this.phoneOpen && this.containsNode(i.white, e, !0) ? this.onDigit(i.digit) : this.handleTap(e);
  }
  onTouchCancel() {
    this.releasePressedKey();
  }
  handleTap(t) {
    1 !== this.phase || this.isSettled || this.pendingWinAfterTimeUp || (this.phoneOpen ? this.handlePhoneTap(t) : this.isInputLocked || (this.paperUnfolded ? this.containsNode(this.paperOpenNode, t, !1) || this.foldPaper() : this.talkOpen ? this.handleTalkTap(t) : this.visitorReady && (this.containsNode(this.paperNode, t, !1) ? this.unfoldPaper() : this.containsNode(this.drawerNode, t, !0) ? this.openDrawer() : this.hitsButton(this.attackButton, this.attackCaption, t) ? this.onAttack() : this.hitsButton(this.talkButton, this.talkCaption, t) ? this.openTalk() : this.hitsButton(this.callButton, this.callCaption, t) ? this.openPhone() : this.hitsButton(this.passButton, this.passCaption, t) && this.onPass())));
  }
  handlePhoneTap(t) {
    if (this.phoneResultLocked) return;
    const e = this.keyAt(t);
    e ? this.onDigit(e.digit) : this.containsNode(this.connectNode, t, !1) ? this.onConnect() : this.containsNode(this.mobilePhoneNode, t, !1) || this.closePhone(!0);
  }
  handleTalkTap(t) {
    const e = _[this.currentId];
    e && (this.containsNode(this.upperOptionNode, t, !1) ? this.onTalkOption(e.upperAnswers, e.upperKey) : this.containsNode(this.lowerOptionNode, t, !1) ? this.onTalkOption(e.lowerAnswers, e.lowerKey) : this.containsNode(this.cancelNode, t, !1) && (this.playAction(), this.closeTalk(!0)));
  }
  hitsButton(t, e, i) {
    return this.containsNode(t, i, !1) || this.containsNode(e, i, !1);
  }
  keyAt(t) {
    for (const e of this.phoneKeys) if (this.containsNode(e.white, t, !0)) return e;
    return null;
  }
  setKeyDown(t, e) {
    t.white.active = !e, t.gray.active = e;
  }
  releasePressedKey() {
    this.pressedKey && this.setKeyDown(this.pressedKey, !1), this.pressedKey = null;
  }
  resetKeys() {
    for (const t of this.phoneKeys) this.setKeyDown(t, !1);
  }
  canPressMainButtons() {
    return 1 === this.phase && this.visitorReady && this.buttonsVisible && !this.isInputLocked && !this.isSettled && !this.talkOpen && !this.phoneOpen && !this.paperUnfolded && !this.pendingWinAfterTimeUp;
  }
  canRestoreButtons() {
    return 1 === this.phase && this.visitorReady && !this.isSettled && !this.isInputLocked && !this.pendingWinAfterTimeUp;
  }
  canUseDrawer() {
    return 5 === this.currentId && this.canPressMainButtons();
  }
  canShowHint() {
    return 1 === this.phase && this.visitorReady && this.currentId > 0 && !this.isInputLocked && !this.isSettled && !this.talkOpen && !this.phoneOpen && !this.paperUnfolded;
  }
  showButtons() {
    this.buttonsVisible = !0, this.setActive(this.attackButton, !0), this.setActive(this.talkButton, !0), this.setActive(this.callButton, !0), this.setActive(this.passButton, !0), this.setActive(this.attackCaption, !0), this.setActive(this.talkCaption, !0), this.setActive(this.callCaption, !0), this.setActive(this.passCaption, !0);
  }
  hideButtonNodes() {
    this.buttonsVisible = !1, this.setActive(this.attackButton, !1), this.setActive(this.talkButton, !1), this.setActive(this.callButton, !1), this.setActive(this.passButton, !1), this.setActive(this.attackCaption, !1), this.setActive(this.talkCaption, !1), this.setActive(this.callCaption, !1), this.setActive(this.passCaption, !1);
  }
  hideInteraction() {
    this.hideButtonNodes(), this.talkOpen = !1, this.phoneOpen = !1, this.phoneResultLocked = !1, this.drawerOpen = !1, this.paperUnfolded = !1, this.pressedKey = null, this.setActive(this.talkNode, !1), this.setActive(this.phoneRoot, !1), this.setActive(this.callNode, !1), this.setActive(this.drawerNode, !1), this.setActive(this.paperNode, !1), this.setActive(this.paperOpenNode, !1), this.hideAnswer();
  }
  hideAllVisitors() {
    this.setActive(this.womanDoor, !1), this.setActive(this.womanScared, !1), this.setActive(this.motherDoor, !1), this.setActive(this.nodeBy("mother_son"), !1), this.setActive(this.courierDoor, !1), this.setActive(this.nodeBy("courier"), !1), this.setActive(this.loversDoor, !1), this.setActive(this.loversScared, !1), this.setActive(this.ghostNode, !1);
  }
  snapCurrentVisitor() {
    this.hideAllVisitors();
    const t = this.doorNode(this.currentId);
    this.placeHome(t), this.setActive(t, !0);
  }
  hideShootVisuals() {
    for (const t of [this.blackNode, this.gunNode, this.bulletNode]) null != t && t.isValid && (__rea_outer_m(t), __rea_outer_k(t, 0), t.active = !1);
  }
  showBullet() {
    var t;
    null != (t = this.bulletNode) && t.isValid && (this.bulletNode.active = !0, __rea_outer_k(this.bulletNode, 255));
  }
  applyInitialVisibility() {
    this.hideAllVisitors(), this.hideInteraction(), this.hideShootVisuals(), this.hidePrompt(), this.setActive(this.guardNode, !1), this.setActive(this.guardEndNode, !1), this.setActive(this.nodeBy("security_guard_end_1"), !1), this.setActive(this.nodeBy("gun_1"), !1), this.setActive(this.nodeBy("gun_bg"), !1), this.setActive(this.nodeBy("failure"), !1), this.setActive(this.nodeBy("mask"), !1), this.setActive(this.nodeBy("answer"), !1), this.setActive(this.nodeBy("She said no."), !1), this.setActive(this.node.getChildByPath("UIPanel/gameNode/clicks"), !1), this.setActive(this.node.getChildByPath("UIPanel/gameNode/drags"), !1), this.setActive(this.node.getChildByPath("UIPanel/gameNode/swips"), !1), this.setActive(this.node.getChildByPath("UIPanel/demo"), !1), this.setActive(this.node.getChildByPath("UIPanel/click_root"), !1), this.setActive(this.nodeBy("bg"), !0), this.setActive(this.nodeBy("room"), !0);
  }
  applyTalkKeys() {
    var t, e;
    const i = _[this.currentId];
    if (!i) return;
    const s = (null == (t = this.upperOptionNode) ? void 0 : t.getChildByName("Label")) ?? null,
      o = (null == (e = this.lowerOptionNode) ? void 0 : e.getChildByName("Label")) ?? null;
    s && this.bindI18n(s, i.upperKey), o && this.bindI18n(o, i.lowerKey);
  }
  raisePaper() {
    const t = this.paperOpenNode,
      e = this.promptNode;
    if (null == t || !t.isValid || !t.parent) return;
    const i = t.parent;
    null != e && e.isValid && e.parent === i && (e.setSiblingIndex(i.children.length - 1), t.setSiblingIndex(Math.max(0, i.children.length - 2)));
  }
  setInputLocked(t) {
    this.isInputLocked = t;
    const e = this.backBgNode;
    if (null == e || !e.isValid) return;
    __rea_outer_m(e), __rea_outer_k(e, 0), e.active = t;
    const i = e.parent;
    t && i && e.setSiblingIndex(i.children.length - 1);
  }
  fadeTo(t, e, i, o) {
    if (null == t || !t.isValid) return void (this.isFlowAlive(i) && (null == o || o()));
    __rea_outer_m(t), t.active = !0;
    const h = __rea_outer_f(t);
    e > 0 && (h.opacity = 0), __rea_outer_s(h).to(.5, {
      opacity: e
    }).call(() => {
      t.isValid && (e <= 0 && (t.active = !1), this.isFlowAlive(i) && (null == o || o()));
    }).start();
  }
  fadeOutGroup(t, e, i) {
    const s = t.filter(t => !0 === (null == t ? void 0 : t.isValid));
    if (0 === s.length) return void i();
    let o = s.length;
    for (const t of s) this.fadeTo(t, 0, e, () => {
      o -= 1, o <= 0 && i();
    });
  }
  moveNode(t, e, i, o) {
    __rea_outer_m(t), __rea_outer_s(t).to(.5, {
      position: e
    }).call(() => {
      t.isValid && this.isFlowAlive(i) && (null == o || o());
    }).start();
  }
  movePairOffLeft(t, e, i, s) {
    let o = 2;
    const h = () => {
      o -= 1, o <= 0 && s();
    };
    this.moveNode(t, this.edgePosition(t, -1), i, h), this.moveNode(e, this.edgePosition(e, -1), i, h);
  }
  stopMotion() {
    for (const t of this.motionNodes) __rea_outer_m(t);
  }
  edgePosition(t, e) {
    var i, s;
    const n = this.homeOf(t),
      l = (null == (i = this.gameNode) || null == (i = i.getComponent(__rea_outer_o)) ? void 0 : i.width) ?? 1025,
      a = (null == (s = t.getComponent(__rea_outer_o)) ? void 0 : s.width) ?? 0;
    return new __rea_outer_h(e < 0 ? -(l / 2 + a / 2 + 2) : l / 2 + a / 2 + 2, n.y, n.z);
  }
  homeOf(t) {
    var e;
    return (null == (e = this.homes.get(t)) ? void 0 : e.clone()) ?? t.position.clone();
  }
  placeHome(t) {
    if (null == t || !t.isValid) return;
    const e = this.homes.get(t);
    e && t.setPosition(e);
  }
  rememberHomes() {
    const t = [this.womanDoor, this.womanScared, this.motherDoor, this.courierDoor, this.loversDoor, this.loversScared, this.ghostNode, this.guardNode, this.guardEndNode];
    for (const e of t) null != e && e.isValid && (this.homes.set(e, e.position.clone()), this.motionNodes.push(e));
    for (const t of [this.blackNode, this.gunNode, this.bulletNode]) null != t && t.isValid && this.motionNodes.push(t);
  }
  doorNode(t) {
    switch (t) {
      case 1:
        return this.womanDoor;
      case 2:
        return this.motherDoor;
      case 3:
        return this.courierDoor;
      case 4:
        return this.loversDoor;
      case 5:
        return this.ghostNode;
      default:
        return null;
    }
  }
  scaredNode(t) {
    return 1 === t ? this.womanScared : 4 === t ? this.loversScared : null;
  }
  shuffleVisitors() {
    const t = [1, 2, 3, 4];
    for (let e = t.length - 1; e > 0; e -= 1) {
      const i = Math.floor(Math.random() * (e + 1)),
        s = t[e];
      t[e] = t[i], t[i] = s;
    }
    return t;
  }
  isFlowAlive(t) {
    return this.isValid && t === this.flowToken;
  }
  containsNode(t, e, i) {
    return !(null == t || !t.isValid) && (t.activeInHierarchy ? (null == (s = t.getComponent(__rea_outer_o)) ? void 0 : s.getBoundingBoxToWorld().contains(e)) ?? !1 : !!i && this.containsInactiveNode(t, e));
    var s;
  }
  containsInactiveNode(t, e) {
    const i = t.getComponent(__rea_outer_o),
      s = t.parent,
      h = (null == s ? void 0 : s.getComponent(__rea_outer_o)) ?? null;
    if (!i || null == s || !s.isValid || !h) return !1;
    const n = h.convertToWorldSpaceAR(t.position),
      l = s.worldScale,
      a = i.contentSize.width * Math.abs(l.x) * Math.abs(t.scale.x),
      d = i.contentSize.height * Math.abs(l.y) * Math.abs(t.scale.y),
      r = n.x - i.anchorPoint.x * a,
      c = n.y - i.anchorPoint.y * d;
    return e.x >= r && e.x <= r + a && e.y >= c && e.y <= c + d;
  }
  bindNodes() {
    var t, e, i, s, o, h, n, l;
    this.gameNode = this.node.getChildByPath("UIPanel/gameNode"), this.gameNode || console.error("[Level_86] UIPanel/gameNode is missing."), this.promptNode = this.nodeBy("prompt_box"), this.promptLabelNode = (null == (t = this.promptNode) ? void 0 : t.getChildByName("Label")) ?? null, this.answerNode = this.nodeBy("answer"), this.answerLabelNode = (null == (e = this.answerNode) ? void 0 : e.getChildByName("Label")) ?? null, this.blackNode = this.nodeBy("black"), this.gunNode = this.nodeBy("gun"), this.bulletNode = this.nodeBy("bullet_hole"), this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.talkNode = this.nodeBy("talk_bg"), this.upperOptionNode = (null == (i = this.talkNode) ? void 0 : i.getChildByName("talk_bg_1")) ?? null, this.lowerOptionNode = (null == (s = this.talkNode) ? void 0 : s.getChildByName("talk_bg_2")) ?? null, this.phoneRoot = this.nodeBy("手机"), this.mobilePhoneNode = (null == (o = this.phoneRoot) ? void 0 : o.getChildByName("mobile_phone")) ?? null, this.connectNode = (null == (h = this.phoneRoot) ? void 0 : h.getChildByName("connect")) ?? null, this.connectPressedNode = (null == (n = this.phoneRoot) ? void 0 : n.getChildByName("connect_1")) ?? null, this.callNode = this.nodeBy("mobile_phone_call"), this.callLabelNode = (null == (l = this.callNode) ? void 0 : l.getChildByName("Label")) ?? null, this.drawerNode = this.nodeBy("room_drawer"), this.paperNode = this.nodeBy("paper_ball"), this.paperOpenNode = this.nodeBy("paper_ball_1"), this.guardNode = this.nodeBy("security_guard"), this.guardEndNode = this.nodeBy("security_guard_end"), this.attackButton = this.nodeBy("button_attack"), this.talkButton = this.nodeBy("button_talk"), this.callButton = this.nodeBy("button_call"), this.passButton = this.nodeBy("button_Pass"), this.attackCaption = this.nodeBy("attack"), this.talkCaption = this.nodeBy("talk"), this.callCaption = this.nodeBy("call"), this.passCaption = this.nodeBy("pass"), this.womanDoor = this.nodeBy("woman_1"), this.womanScared = this.nodeBy("woman"), this.motherDoor = this.nodeBy("mother_son_1"), this.courierDoor = this.nodeBy("courier_1"), this.loversDoor = this.nodeBy("lovers_1"), this.loversScared = this.nodeBy("lovers"), this.ghostNode = this.nodeBy("ghost"), this.bindPhoneKeys();
  }
  bindPhoneKeys() {
    const t = this.phoneRoot;
    if (!t) return;
    const e = [],
      i = [];
    for (const s of t.children) "mobile_phone_1" === s.name ? e.push(s) : "mobile_phone_2" === s.name && i.push(s);
    for (const t of C) {
      const s = this.takeNearest(e, t.x, t.y),
        o = this.takeNearest(i, t.x, t.y);
      s && o && this.phoneKeys.push({
        digit: t.digit,
        white: s,
        gray: o
      });
    }
  }
  takeNearest(t, e, i) {
    let s = -1,
      o = Number.POSITIVE_INFINITY;
    for (let h = 0; h < t.length; h += 1) {
      const n = t[h],
        l = n.position.x - e,
        a = n.position.y - i,
        d = l * l + a * a;
      d < o && (o = d, s = h);
    }
    return s < 0 ? null : t.splice(s, 1)[0] ?? null;
  }
  buildMissingLabels() {
    this.bindCaption(this.attackCaption, "86_30"), this.bindCaption(this.talkCaption, "86_32"), this.bindCaption(this.callCaption, "86_34"), this.bindCaption(this.passCaption, "86_31"), this.prepareDialLabel(), this.cancelNode = this.createTalkControl("talk_cancel", "86_33", -185, 36), this.createTalkControl("talk_title", "86_29", 175, 40);
  }
  bindCaption(t, e) {
    if (null == t || !t.isValid) return;
    const i = t.getComponent(__rea_outer_n);
    i && (i.enabled = !1);
    const s = t.getComponent(__rea_outer_o);
    null == s || s.setContentSize(180, 56);
    const h = this.ensureLabel(t);
    this.styleLabel(h, 32, __rea_outer_l.BLACK), this.bindI18n(t, e);
  }
  prepareDialLabel() {
    var t;
    const e = (null == (t = this.phoneRoot) ? void 0 : t.getChildByName("233")) ?? null;
    if (!e) return;
    const i = e.getComponent(__rea_outer_n);
    i && (i.enabled = !1), this.dialLabel = this.ensureLabel(e), this.styleLabel(this.dialLabel, 48, __rea_outer_l.BLACK), this.dialLabel.string = "";
  }
  createTalkControl(t, e, s, h) {
    const n = this.talkNode;
    if (null == n || !n.isValid) return null;
    const d = n.getChildByName(t);
    if (null != d && d.isValid) return this.bindI18n(d, e), d;
    const r = new __rea_outer_i(t);
    r.layer = n.layer, n.addChild(r), r.setPosition(0, s, 0);
    r.addComponent(__rea_outer_o).setContentSize("talk_title" === t ? 400 : 320, 64);
    const c = r.addComponent(__rea_outer_a);
    return this.styleLabel(c, h, __rea_outer_l.BLACK), this.bindI18n(r, e), r;
  }
  ensureLabel(t) {
    return t.getComponent(__rea_outer_a) ?? t.addComponent(__rea_outer_a);
  }
  styleLabel(t, e, i) {
    t.fontSize = e, t.lineHeight = e + 8, t.isBold = !0, t.useSystemFont = !0, t.fontFamily = "Arial", t.overflow = __rea_outer_a.Overflow.SHRINK, t.horizontalAlign = __rea_outer_a.HorizontalAlign.CENTER, t.verticalAlign = __rea_outer_a.VerticalAlign.CENTER, t.color = i;
  }
  bindI18n(t, e) {
    const i = t.getComponent(__rea_outer_p) ?? t.addComponent(__rea_outer_p);
    i.key = e, i.refresh();
  }
  nodeBy(t) {
    return this.node.getChildByPath(`UIPanel/gameNode/${t}`);
  }
  setActive(t, e) {
    null != t && t.isValid && (t.active = e);
  }
}) || w;
__rea_outer_e._RF.pop();
export { __recovered_export_0 as default };
