// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_27.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_e } from "cc";
import { Vec3 as __rea_outer_i } from "cc";
import { tween as __rea_outer_s } from "cc";
import { Mask as __rea_outer_l } from "cc";
import { Button as __rea_outer_o } from "cc";
import { Node as __rea_outer_n } from "cc";
import { Label as __rea_outer_h } from "cc";
import { UITransform as __rea_outer_a } from "cc";
import { Vec2 as __rea_outer_d } from "cc";
import { _decorator as __rea_outer_u } from "cc";
import { default as __rea_outer_c } from "./LevelBase";
import { default as __rea_outer_r } from "./AudioManager";
import { I18nController as __rea_outer_g } from "./i18n-controller";
import { UIManager as __rea_outer_p } from "./ui-manager";
import { UILayer as __rea_outer_N } from "./ui-layer";
import { UIHint as __rea_outer_y } from "./uihint";
import { UIFail as __rea_outer_b } from "./uifail";
import { GameController as __rea_outer_f } from "./GameController";
import { stopAllTweens as __rea_outer_m } from "./CocosCompat";
import { default as __rea_outer_v } from "./clue-gesture-detector";
import { SwipeDirection as __rea_outer_k } from "./clue-level-types";
let __recovered_export_0;
var C;
__rea_outer_e._RF.push({}, "6e123WQwtJDDI+3utudT8Zn", "Level_27", void 0);
const {
    ccclass: R
  } = __rea_outer_u,
  w = "level27_1",
  _ = .45,
  L = [{
    leftAskKey: "27_2",
    rightAskKey: "27_3",
    options: [{
      optionKey: "27_36",
      resultKeys: ["27_14"],
      isCorrect: !1,
      failSide: "right"
    }, {
      optionKey: "27_37",
      resultKeys: ["27_15"],
      isCorrect: !0,
      failSide: null
    }, {
      optionKey: "27_38",
      resultKeys: ["27_16"],
      isCorrect: !1,
      failSide: "left"
    }]
  }, {
    leftAskKey: "27_4",
    rightAskKey: "27_5",
    options: [{
      optionKey: "27_39",
      resultKeys: ["27_17", "27_18"],
      isCorrect: !0,
      failSide: null
    }, {
      optionKey: "27_40",
      resultKeys: ["27_19"],
      isCorrect: !1,
      failSide: "right"
    }, {
      optionKey: "27_41",
      resultKeys: ["27_20"],
      isCorrect: !1,
      failSide: "left"
    }]
  }, {
    leftAskKey: "27_6",
    rightAskKey: "27_7",
    options: [{
      optionKey: "27_42",
      resultKeys: ["27_21"],
      isCorrect: !1,
      failSide: "left"
    }, {
      optionKey: "27_43",
      resultKeys: ["27_22", "27_23"],
      isCorrect: !0,
      failSide: null
    }, {
      optionKey: "27_44",
      resultKeys: ["27_24"],
      isCorrect: !1,
      failSide: "right"
    }]
  }, {
    leftAskKey: "27_8",
    rightAskKey: "27_9",
    options: [{
      optionKey: "27_45",
      resultKeys: ["27_25"],
      isCorrect: !1,
      failSide: "left"
    }, {
      optionKey: "27_46",
      resultKeys: ["27_26"],
      isCorrect: !1,
      failSide: "right"
    }, {
      optionKey: "27_47",
      resultKeys: ["27_27", "27_28"],
      isCorrect: !0,
      failSide: null
    }]
  }, {
    leftAskKey: "27_10",
    rightAskKey: "27_11",
    options: [{
      optionKey: "27_48",
      resultKeys: ["27_29", "27_30"],
      isCorrect: !0,
      failSide: null
    }, {
      optionKey: "27_49",
      resultKeys: ["27_31"],
      isCorrect: !1,
      failSide: "left"
    }, {
      optionKey: "27_50",
      resultKeys: ["27_32"],
      isCorrect: !1,
      failSide: "right"
    }]
  }, {
    leftAskKey: "27_12",
    rightAskKey: "27_13",
    options: [{
      optionKey: "27_51",
      resultKeys: ["27_33"],
      isCorrect: !1,
      failSide: "both"
    }, {
      optionKey: "27_52",
      resultKeys: ["27_34"],
      isCorrect: !1,
      failSide: "both"
    }, {
      optionKey: "27_53",
      resultKeys: ["27_35"],
      isCorrect: !1,
      failSide: "both"
    }]
  }],
  A = ["level27_hint1", "level27_hint2", "level27_hint3", "level27_hint4", "level27_hint5", "level27_hint6"];
__recovered_export_0 = R("Level_27")(C = class extends __rea_outer_c {
  constructor(...t) {
    super(...t), this.phase = 0, this.winstate = !1, this.currentRound = 0, this.completedSteps = 0, this.isInteractionLocked = !0, this.isFailSequencePlaying = !1, this.isRound6Ready = !1, this.runFrameToggle = !1, this.voiceToken = 0, this.currentDialogueKey = "", this.clickRootOrigin = new __rea_outer_i(), this.swipeStart = null, this.buttons = [null, null, null], this.buttonLabels = [null, null, null], this.clickRootNode = null, this.backBgNode = null, this.failnodeRoot = null, this.bubbleMiddle = null, this.bubbleLeft = null, this.bubbleRight = null, this.middleLabel = null, this.leftLabel = null, this.rightLabel = null, this.clown1Node = null, this.clownFaceNode = null, this.clown2Node = null, this.clown3Node = null, this.clown4Node = null, this.clown5Node = null, this.man1Node = null, this.manFaceNode = null, this.man2Node = null, this.man3Node = null, this.man4Node = null, this.man5Node = null, this.girlLeft1 = null, this.girlRight1 = null, this.girlLeft = null, this.girlRight = null, this.hatLeftNode = null, this.hatRightNode = null, this.girlNode = null, this.maskLeftNode = null, this.maskRightNode = null, this.girlFaceNode = null, this.askNode = null, this.bgLeftNode = null, this.treeNode = null, this.swip2Node = null, this.onTouchStart = t => {
      1 !== this.phase || !this.isRound6Ready || this.isFailSequencePlaying || this.winstate || this.isInteractionLocked || (this.swipeStart = this.getTouchWorldPoint(t));
    }, this.onTouchEnd = t => {
      if (1 !== this.phase || !this.isRound6Ready || this.isFailSequencePlaying || this.winstate) return void (this.swipeStart = null);
      if (this.isInteractionLocked || !this.swipeStart) return void (this.swipeStart = null);
      const e = this.getTouchWorldPoint(t),
        i = this.swipeStart;
      this.swipeStart = null, this.tryHandleGirlSwipe(i, e);
    }, this.onRunFrameTick = () => {
      this.isValid && (this.runFrameToggle = !this.runFrameToggle, this.applyRunFrame(this.runFrameToggle));
    }, this.onButton1Click = () => {
      this.onOptionClick(0);
    }, this.onButton2Click = () => {
      this.onOptionClick(1);
    }, this.onButton3Click = () => {
      this.onOptionClick(2);
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.allItemNum = 6, this.hasInstallNum = 0, console.log("[Level_27] loaded");
  }
  start() {
    this.resetLevelState(), this.applyInitialVisibility(), this.enterPhase0();
  }
  onDestroy() {
    this.cleanupRuntime(), super.onDestroy();
  }
  showHint() {
    if (1 !== this.phase || this.currentRound < 0 || this.currentRound >= 6) return;
    const t = A[this.currentRound],
      e = __rea_outer_g.getInstance().getKey(t);
    __rea_outer_p.getInstance().showView(__rea_outer_y, void 0, {
      body: e
    });
  }
  getGameProgressSnapshot() {
    const t = Math.min(this.completedSteps, 6);
    return {
      progress: t / 6,
      label: `${t}/6`
    };
  }
  handleTimeExpired() {
    return !!(this.phase >= 2 || this.winstate || this.isFailSequencePlaying);
  }
  markAllTasksCompleted() {
    this.completedSteps = 6, this.hasInstallNum = 6, this.currentRound = 5;
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.currentRound = 0, this.completedSteps = 0, this.hasInstallNum = 0, this.isInteractionLocked = !0, this.isFailSequencePlaying = !1, this.isRound6Ready = !1, this.runFrameToggle = !1, this.voiceToken += 1, this.stopCurrentDialogueEffect(), this.swipeStart = null;
  }
  enterPhase0() {
    this.phase = 0, this.isInteractionLocked = !0, __rea_outer_r.playMusic("bgm3", !0, .5), this.setNodeActive(this.backBgNode, !0), this.startLoopAnimations(), this.playDialogue(this.bubbleMiddle, this.middleLabel, "27_1", () => {
      this.isValid && 0 === this.phase && this.enterPhase1();
    });
  }
  skipOpeningToPlay() {
    return 0 === this.phase && (this.voiceToken += 1, this.stopOpeningDialogue(), this.enterPhase1(), !0);
  }
  enterPhase1() {
    0 === this.phase && (this.phase = 1, this.setNodeActive(this.backBgNode, !1), this.hideAllBubbles(), this.registerButtonHandlers(), this.registerSwipeHandlers(), __rea_outer_f.getInstance().refreshGameProgress(), this.startRound(0));
  }
  startRound(t) {
    if (!this.isValid || 1 !== this.phase) return;
    this.currentRound = t, this.isInteractionLocked = !0, this.isRound6Ready = !1, this.setButtonsInteractable(!1), this.hideClickRootImmediate();
    const e = L[t];
    this.applyOptionLabels(e), this.playDialogue(this.bubbleLeft, this.leftLabel, e.leftAskKey, () => {
      this.isValid && 1 === this.phase && this.scheduleOnce(() => {
        this.isValid && 1 === this.phase && this.playDialogue(this.bubbleRight, this.rightLabel, e.rightAskKey, () => {
          this.isValid && 1 === this.phase && this.onRoundQuestionsFinished(t);
        });
      }, _);
    });
  }
  onRoundQuestionsFinished(t) {
    this.hideAllBubbles(), 5 === t && (this.isRound6Ready = !0), this.showClickRootAnimated(() => {
      this.isValid && 1 === this.phase && (this.isInteractionLocked = !1, this.setButtonsInteractable(!0));
    });
  }
  onOptionClick(t) {
    if (1 !== this.phase || this.isInteractionLocked || this.isFailSequencePlaying) return;
    const e = L[this.currentRound],
      i = null == e ? void 0 : e.options[t];
    i && (this.isInteractionLocked = !0, this.setButtonsInteractable(!1), __rea_outer_r.playEffect_1(w), this.hideClickRootAnimated(() => {
      this.isValid && 1 === this.phase && this.resolveOption(i);
    }));
  }
  resolveOption(t) {
    t.isCorrect ? this.playAcceptVoices(t.resultKeys, () => {
      this.isValid && 1 === this.phase && this.onRoundAnsweredCorrect();
    }) : this.beginWrongAnswerFail(t);
  }
  onRoundAnsweredCorrect() {
    if (this.completedSteps += 1, this.hasInstallNum = this.completedSteps, __rea_outer_f.getInstance().refreshGameProgress(), this.TryQuickWin()) return;
    const t = this.currentRound + 1;
    t >= 6 || (this.hideAllBubbles(), this.isInteractionLocked = !0, this.scheduleOnce(() => {
      this.isValid && 1 === this.phase && this.startRound(t);
    }, 2));
  }
  beginWrongAnswerFail(t) {
    this.isFailSequencePlaying || (this.showFailFaces(t.failSide), this.playFailResultVoices(t, () => {
      this.isValid && this.playFailScaleThenClaw();
    }));
  }
  playFailResultVoices(t, e) {
    const i = t.resultKeys;
    if (0 === i.length) return void e();
    const s = t.failSide;
    "right" !== s ? ("both" === s && i.length, this.playDialogue(this.bubbleLeft, this.leftLabel, i[0], e)) : this.playDialogue(this.bubbleRight, this.rightLabel, i[0], e);
  }
  playAcceptVoices(t, e) {
    0 !== t.length ? 1 !== t.length ? this.playDialogue(this.bubbleLeft, this.leftLabel, t[0], () => {
      this.isValid && this.scheduleOnce(() => {
        this.isValid && this.playDialogue(this.bubbleRight, this.rightLabel, t[1], e);
      }, _);
    }) : this.playDialogue(this.bubbleLeft, this.leftLabel, t[0], e) : e();
  }
  showFailFaces(t) {
    "left" !== t && "both" !== t || this.setNodeActive(this.clownFaceNode, !0), "right" !== t && "both" !== t || this.setNodeActive(this.manFaceNode, !0);
  }
  playFailScaleThenClaw() {
    if (this.isFailSequencePlaying) return;
    this.isFailSequencePlaying = !0, this.phase = 2, this.winstate = !1, this.isInteractionLocked = !0, this.isRound6Ready = !1, this.unregisterButtonHandlers(), this.unregisterSwipeHandlers(), this.hideClickRootImmediate(), this.hideAllBubbles(), __rea_outer_f.getInstance().pauseTimer(), __rea_outer_r.playEffect_1("level27_2");
    const t = this.clown1Node;
    if (null != t && t.isValid) return __rea_outer_m(t), void __rea_outer_s(t).to(.5, {
      scale: new __rea_outer_i(1.2, 1.2, 1)
    }).call(() => {
      this.isValid && this.showFailClawAndPopup();
    }).start();
    this.showFailClawAndPopup();
  }
  showFailClawAndPopup() {
    this.setNodeActive(this.backBgNode, !0), this.setNodeActive(this.failnodeRoot, !0), __rea_outer_r.playEffect_1("level27_3"), this.scheduleOnce(() => {
      this.isValid && __rea_outer_p.getInstance().showView(__rea_outer_b, __rea_outer_N.WIN_ANIMATION);
    }, .8);
  }
  beginTimeoutFail() {
    this.isFailSequencePlaying = !0, this.phase = 2, this.winstate = !1, this.isInteractionLocked = !0, this.isRound6Ready = !1, this.unregisterButtonHandlers(), this.unregisterSwipeHandlers(), this.voiceToken += 1, this.stopCurrentDialogueEffect(), this.hideAllBubbles(), this.hideClickRootImmediate(), __rea_outer_f.getInstance().pauseTimer(), this.scheduleOnce(() => {
      this.isValid && __rea_outer_p.getInstance().showView(__rea_outer_b, __rea_outer_N.WIN_ANIMATION);
    }, .5);
  }
  enterWinSequence() {
    this.phase = 2, this.winstate = !0, this.isInteractionLocked = !0, this.isRound6Ready = !1, this.unregisterButtonHandlers(), this.unregisterSwipeHandlers(), this.hideClickRootImmediate(), this.hideAllBubbles(), this.setNodeActive(this.girlFaceNode, !0), this.setNodeActive(this.askNode, !0), __rea_outer_f.getInstance().pauseTimer(), this.playDialogue(this.bubbleMiddle, this.middleLabel, "27_54", () => {
      this.isValid && this.scheduleOnce(() => {
        this.isValid && this.playDialogue(this.bubbleRight, this.rightLabel, "27_55", () => {
          this.isValid && this.showLevelSuccess();
        });
      }, _);
    });
  }
  tryHandleGirlSwipe(t, e) {
    this.isGirlSwipeStartValid(t) && __rea_outer_v.isSwipeMatching(t, e, __rea_outer_k.Right) && this.executeGirlSwipeSuccess();
  }
  isGirlSwipeStartValid(t) {
    return this.isPointInsideNode(this.girlNode, t) || this.isPointInsideNode(this.swip2Node, t);
  }
  executeGirlSwipeSuccess() {
    var t;
    this.isInteractionLocked = !0, this.isRound6Ready = !1, this.setButtonsInteractable(!1), this.unregisterButtonHandlers(), this.unregisterSwipeHandlers(), __rea_outer_r.playEffect_1(w), this.hideClickRootImmediate(), this.setNodeActive(this.hatLeftNode, !1), this.setNodeActive(this.hatRightNode, !1), this.setNodeActive(this.maskLeftNode, !1);
    const e = (null == (t = this.maskRightNode) ? void 0 : t.getComponent(__rea_outer_l)) ?? null;
    e && (e.enabled = !1);
    const o = this.maskRightNode,
      n = () => {
        this.isValid && (this.completedSteps += 1, this.hasInstallNum = this.completedSteps, __rea_outer_f.getInstance().refreshGameProgress(), this.TryQuickWin() || this.enterWinSequence());
      };
    if (null == o || !o.isValid) return void n();
    __rea_outer_m(o);
    const h = o.position.clone();
    __rea_outer_s(o).to(.35, {
      position: new __rea_outer_i(h.x + 110, h.y, h.z)
    }).call(n).start();
  }
  playDialogue(t, e, i, s) {
    this.voiceToken += 1;
    const l = this.voiceToken;
    this.showBubble(t, e, i);
    let o = !1;
    const n = () => {
        !o && this.isValid && l === this.voiceToken && (o = !0, this.unschedule(h), this.setNodeActive(t, !1), s());
      },
      h = () => {
        n();
      };
    this.scheduleOnce(h, 6), this.stopCurrentDialogueEffect(), this.currentDialogueKey = i, __rea_outer_r.playEffect_1(i, n);
  }
  stopCurrentDialogueEffect() {
    __rea_outer_r.stopVoice(), this.currentDialogueKey && (__rea_outer_r.stopOneEffect(this.currentDialogueKey), this.currentDialogueKey = "");
  }
  showBubble(t, e, i) {
    this.hideAllBubbles(), e && (e.string = __rea_outer_g.getInstance().getKey(i), this.setNodeActive(e.node, !0)), this.setNodeActive(t, !0);
    const s = (null == t ? void 0 : t.getChildByName("dialog_box")) ?? null;
    this.setNodeActive(s, !0);
  }
  hideAllBubbles() {
    this.setNodeActive(this.bubbleMiddle, !1), this.setNodeActive(this.bubbleLeft, !1), this.setNodeActive(this.bubbleRight, !1);
  }
  applyOptionLabels(t) {
    const e = __rea_outer_g.getInstance();
    for (let i = 0; i < 3; i += 1) {
      const s = this.buttonLabels[i],
        l = t.options[i];
      s && l && (s.string = e.getKey(l.optionKey));
    }
  }
  showClickRootAnimated(t) {
    const e = this.clickRootNode;
    if (null == e || !e.isValid) return void t();
    __rea_outer_m(e);
    const i = this.clickRootOrigin;
    e.setPosition(i.x, i.y - 150, i.z), this.setNodeActive(e, !0), __rea_outer_s(e).to(.5, {
      position: i.clone()
    }).call(() => {
      this.isValid && t();
    }).start();
  }
  hideClickRootAnimated(t) {
    const e = this.clickRootNode;
    if (null == e || !e.isValid) return void t();
    __rea_outer_m(e);
    const l = this.clickRootOrigin,
      o = new __rea_outer_i(l.x, l.y - 150, l.z);
    __rea_outer_s(e).to(.5, {
      position: o
    }).call(() => {
      this.isValid && (this.setNodeActive(e, !1), e.setPosition(l), t());
    }).start();
  }
  hideClickRootImmediate() {
    const t = this.clickRootNode;
    null != t && t.isValid && (__rea_outer_m(t), t.setPosition(this.clickRootOrigin), this.setNodeActive(t, !1));
  }
  startLoopAnimations() {
    this.applyRunFrame(!1), this.unschedule(this.onRunFrameTick), this.schedule(this.onRunFrameTick, .25), this.startScaleLoop(this.bgLeftNode, 6, .6341161928306551, .6475814412635735), this.startScaleLoop(this.treeNode, 12, .1, .1);
  }
  applyRunFrame(t) {
    var e;
    this.setNodeActive(this.clown2Node, !t), this.setNodeActive(this.clown3Node, t), this.setNodeActive(this.clown4Node, t), this.setNodeActive(this.clown5Node, !t), this.setNodeActive(this.man2Node, !t), this.setNodeActive(this.man3Node, t), this.setNodeActive(this.man4Node, t), this.setNodeActive(this.man5Node, !t), null != (e = this.maskLeftNode) && e.active && (this.setNodeActive(this.girlLeft1, !t), this.setNodeActive(this.girlRight1, t)), this.setNodeActive(this.girlLeft, !t), this.setNodeActive(this.girlRight, t);
  }
  startScaleLoop(t, e, l, o) {
    if (null == t || !t.isValid) return;
    __rea_outer_m(t), t.setScale(1, 1, 1);
    const n = () => {
      t.isValid && (t.setScale(1, 1, 1), __rea_outer_s(t).to(e, {
        scale: new __rea_outer_i(l, o, 1)
      }).call(() => {
        t.isValid && (t.setScale(1, 1, 1), n());
      }).start());
    };
    n();
  }
  applyInitialVisibility() {
    var t, e;
    this.setNodeActive(this.clickRootNode, !1), this.setNodeActive(this.backBgNode, !1), this.setNodeActive(this.failnodeRoot, !1), this.setNodeActive(this.clownFaceNode, !1), this.setNodeActive(this.manFaceNode, !1), this.setNodeActive(this.girlFaceNode, !1), this.setNodeActive(this.askNode, !1), this.setNodeActive(this.hatLeftNode, !0), this.setNodeActive(this.hatRightNode, !0), this.setNodeActive(this.maskLeftNode, !0), this.setNodeActive(this.maskRightNode, !0), this.hideAllBubbles(), this.setNodeActive(this.bubbleMiddle, !1), null != (t = this.clown1Node) && t.isValid && this.clown1Node.setScale(1, 1, 1);
    const i = (null == (e = this.maskRightNode) ? void 0 : e.getComponent(__rea_outer_l)) ?? null;
    i && (i.enabled = !0);
  }
  registerButtonHandlers() {
    this.unregisterButtonHandlers();
    const t = [this.onButton1Click, this.onButton2Click, this.onButton3Click];
    for (let i = 0; i < this.buttons.length; i += 1) {
      var e;
      const s = this.buttons[i];
      null != s && null != (e = s.node) && e.isValid && s.node.on(__rea_outer_o.EventType.CLICK, t[i], this);
    }
  }
  unregisterButtonHandlers() {
    const t = [this.onButton1Click, this.onButton2Click, this.onButton3Click];
    for (let i = 0; i < this.buttons.length; i += 1) {
      var e;
      const s = this.buttons[i];
      null != s && null != (e = s.node) && e.isValid && s.node.off(__rea_outer_o.EventType.CLICK, t[i], this);
    }
  }
  registerSwipeHandlers() {
    this.unregisterSwipeHandlers();
    const t = [this.girlNode, this.maskLeftNode, this.maskRightNode, this.swip2Node];
    for (let e = 0; e < t.length; e += 1) {
      const i = t[e];
      null != i && i.isValid && (i.on(__rea_outer_n.EventType.TOUCH_START, this.onTouchStart, this), i.on(__rea_outer_n.EventType.TOUCH_END, this.onTouchEnd, this), i.on(__rea_outer_n.EventType.TOUCH_CANCEL, this.onTouchEnd, this));
    }
  }
  unregisterSwipeHandlers() {
    const t = [this.girlNode, this.maskLeftNode, this.maskRightNode, this.swip2Node];
    for (let e = 0; e < t.length; e += 1) {
      const i = t[e];
      null != i && i.isValid && (i.off(__rea_outer_n.EventType.TOUCH_START, this.onTouchStart, this), i.off(__rea_outer_n.EventType.TOUCH_END, this.onTouchEnd, this), i.off(__rea_outer_n.EventType.TOUCH_CANCEL, this.onTouchEnd, this));
    }
  }
  setButtonsInteractable(t) {
    for (let e = 0; e < this.buttons.length; e += 1) {
      const i = this.buttons[e];
      i && (i.interactable = t);
    }
  }
  cleanupRuntime() {
    this.unschedule(this.onRunFrameTick), this.unscheduleAllCallbacks(), this.unregisterButtonHandlers(), this.unregisterSwipeHandlers(), this.voiceToken += 1, this.stopCurrentDialogueEffect(), this.stopTweenIfValid(this.clickRootNode), this.stopTweenIfValid(this.bgLeftNode), this.stopTweenIfValid(this.treeNode), this.stopTweenIfValid(this.clown1Node), this.stopTweenIfValid(this.maskRightNode);
  }
  stopTweenIfValid(t) {
    null != t && t.isValid && __rea_outer_m(t);
  }
  resolveReferences() {
    var t, e, i, s, l, n, a, d, u, c, r, g, p, N, y, b, f, m, v, k;
    this.clickRootNode = this.node.getChildByPath("UIPanel/click_root"), this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.failnodeRoot = this.node.getChildByPath("UIPanel/failnode"), this.bubbleMiddle = this.node.getChildByPath("UIPanel/bubbleMiddle"), this.bubbleLeft = this.node.getChildByPath("UIPanel/bubbleLeft"), this.bubbleRight = this.node.getChildByPath("UIPanel/bubbleRight"), this.middleLabel = (null == (t = this.bubbleMiddle) || null == (t = t.getChildByPath("dialog_box/Label")) ? void 0 : t.getComponent(__rea_outer_h)) ?? null, this.leftLabel = (null == (e = this.bubbleLeft) || null == (e = e.getChildByPath("dialog_box/Label")) ? void 0 : e.getComponent(__rea_outer_h)) ?? null, this.rightLabel = (null == (i = this.bubbleRight) || null == (i = i.getChildByPath("dialog_box/Label")) ? void 0 : i.getComponent(__rea_outer_h)) ?? null, null != (s = this.clickRootNode) && s.isValid && (this.clickRootOrigin = this.clickRootNode.position.clone());
    for (let t = 0; t < 3; t += 1) {
      var C, R;
      const e = (null == (C = this.clickRootNode) ? void 0 : C.getChildByName(`Button${t + 1}`)) ?? null;
      this.buttons[t] = (null == e ? void 0 : e.getComponent(__rea_outer_o)) ?? null, this.buttonLabels[t] = (null == e || null == (R = e.getChildByName("Label")) ? void 0 : R.getComponent(__rea_outer_h)) ?? null;
    }
    const w = this.node.getChildByPath("UIPanel/gameNode");
    this.clown1Node = (null == w ? void 0 : w.getChildByPath("leftnode/clown_1")) ?? null, this.clownFaceNode = (null == (l = this.clown1Node) ? void 0 : l.getChildByName("clown")) ?? null, this.clown2Node = (null == (n = this.clown1Node) ? void 0 : n.getChildByName("clown_2")) ?? null, this.clown3Node = (null == (a = this.clown1Node) ? void 0 : a.getChildByName("clown_3")) ?? null, this.clown4Node = (null == (d = this.clown1Node) ? void 0 : d.getChildByName("clown_4")) ?? null, this.clown5Node = (null == (u = this.clown1Node) ? void 0 : u.getChildByName("clown_5")) ?? null, this.man1Node = (null == w ? void 0 : w.getChildByPath("rightnode/man_1")) ?? null, this.manFaceNode = (null == (c = this.man1Node) ? void 0 : c.getChildByName("man")) ?? null, this.man2Node = (null == (r = this.man1Node) ? void 0 : r.getChildByName("man_2")) ?? null, this.man3Node = (null == (g = this.man1Node) ? void 0 : g.getChildByName("man_3")) ?? null, this.man4Node = (null == (p = this.man1Node) ? void 0 : p.getChildByName("man_4")) ?? null, this.man5Node = (null == (N = this.man1Node) ? void 0 : N.getChildByName("man_5")) ?? null, this.maskLeftNode = (null == w ? void 0 : w.getChildByPath("girlnode/MaskLeft")) ?? null, this.maskRightNode = (null == w ? void 0 : w.getChildByPath("girlnode/MaskRight")) ?? null, this.girlNode = (null == w ? void 0 : w.getChildByName("girlnode")) ?? null, this.girlLeft1 = (null == (y = this.maskLeftNode) ? void 0 : y.getChildByName("Girl_Left_1")) ?? null, this.girlRight1 = (null == (b = this.maskLeftNode) ? void 0 : b.getChildByName("Girl_right_1")) ?? null, this.hatLeftNode = (null == (f = this.girlLeft1) ? void 0 : f.getChildByName("hat-001")) ?? null, this.hatRightNode = (null == (m = this.girlRight1) ? void 0 : m.getChildByName("hat")) ?? null, this.girlLeft = (null == (v = this.maskRightNode) ? void 0 : v.getChildByName("Girl_Left")) ?? null, this.girlRight = (null == (k = this.maskRightNode) ? void 0 : k.getChildByName("Girl_right")) ?? null, this.girlFaceNode = (null == w ? void 0 : w.getChildByPath("girlnode/girl")) ?? null, this.askNode = (null == w ? void 0 : w.getChildByName("ask")) ?? null, this.bgLeftNode = (null == w ? void 0 : w.getChildByPath("leftnode/Maskbg/bg_left")) ?? null, this.treeNode = (null == w ? void 0 : w.getChildByPath("rightnode/Mask/tree")) ?? null, this.swip2Node = (null == w ? void 0 : w.getChildByPath("swips/swip2")) ?? null;
  }
  isPointInsideNode(t, e) {
    if (null == t || !t.isValid || !t.activeInHierarchy) return !1;
    const i = t.getComponent(__rea_outer_a);
    return !!i && i.getBoundingBoxToWorld().contains(e);
  }
  getTouchWorldPoint(t) {
    const e = t.getUILocation();
    return new __rea_outer_d(e.x, e.y);
  }
  setNodeActive(t, e) {
    null != t && t.isValid && (t.active = e);
  }
}) || C;
__rea_outer_e._RF.pop();
export { __recovered_export_0 as default };
