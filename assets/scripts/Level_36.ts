// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_36.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { Vec3 as __rea_outer_i } from "cc";
import { tween as __rea_outer_s } from "cc";
import { Button as __rea_outer_o } from "cc";
import { Node as __rea_outer_l } from "cc";
import { Label as __rea_outer_n } from "cc";
import { _decorator as __rea_outer_h } from "cc";
import { default as __rea_outer_a } from "./LevelBase";
import { default as __rea_outer_r } from "./AudioManager";
import { I18nController as __rea_outer_d } from "./i18n-controller";
import { UIManager as __rea_outer_c } from "./ui-manager";
import { UILayer as __rea_outer_u } from "./ui-layer";
import { UIHint as __rea_outer_N } from "./uihint";
import { UIFail as __rea_outer_b } from "./uifail";
import { GameController as __rea_outer_p } from "./GameController";
import { stopAllTweens as __rea_outer_g } from "./CocosCompat";
import { setNodeOpacity as __rea_outer_v } from "./CocosCompat";
import { default as __rea_outer_y } from "./ActionSystem";
let __recovered_export_0;
var m;
__rea_outer_t._RF.push({}, "c8e419qLXtPOpseag1cTo9y", "Level_36", void 0);
const {
    ccclass: k
  } = __rea_outer_h,
  C = ["shiver1", "shiver1_1", "shiver2", "shiver2_1", "shiver3", "shiver3_1"],
  f = [{
    askKey: "36_1",
    options: [{
      optionKey: "36_9",
      labelFallback: "我刚路过，进来歇个脚",
      isCorrect: !1
    }, {
      optionKey: "36_10",
      labelFallback: "我一直独来独往",
      isCorrect: !0
    }, {
      optionKey: "36_11",
      labelFallback: "这营地你说了算吗",
      isCorrect: !1
    }]
  }, {
    askKey: "36_2",
    options: [{
      optionKey: "36_12",
      labelFallback: "我刚搬来这地方",
      isCorrect: !1
    }, {
      optionKey: "36_13",
      labelFallback: "你鼻子有问题吧",
      isCorrect: !1
    }, {
      optionKey: "36_14",
      labelFallback: "我刚刚洗了个澡",
      isCorrect: !0
    }]
  }, {
    askKey: "36_3",
    options: [{
      optionKey: "36_15",
      labelFallback: "我今天不渴",
      isCorrect: !1
    }, {
      optionKey: "36_16",
      labelFallback: "我牙疼，咬不动",
      isCorrect: !1
    }, {
      optionKey: "36_17",
      labelFallback: "我只喝O型血",
      isCorrect: !0
    }]
  }, {
    askKey: "36_4",
    options: [{
      optionKey: "36_18",
      labelFallback: "刚去血库饱餐了一顿",
      isCorrect: !0
    }, {
      optionKey: "36_19",
      labelFallback: "出门前扑了点腮红",
      isCorrect: !1
    }, {
      optionKey: "36_20",
      labelFallback: "天生的，羡慕吗",
      isCorrect: !1
    }]
  }, {
    askKey: "36_5",
    options: [{
      optionKey: "36_21",
      labelFallback: "昨晚打架被人掰断了",
      isCorrect: !0
    }, {
      optionKey: "36_22",
      labelFallback: "我本来就没有尖牙",
      isCorrect: !1
    }, {
      optionKey: "36_23",
      labelFallback: "刚换了副新的还没到",
      isCorrect: !1
    }]
  }, {
    askKey: "36_6",
    options: [{
      optionKey: "36_24",
      labelFallback: "昨晚没睡好",
      isCorrect: !1
    }, {
      optionKey: "36_25",
      labelFallback: "前几天蜕皮累着了",
      isCorrect: !1
    }, {
      optionKey: "36_26",
      labelFallback: "喝了点酒有点上头",
      isCorrect: !0
    }]
  }, {
    askKey: "36_7",
    options: [{
      optionKey: "36_27",
      labelFallback: "出门忘带了，睡地上",
      isCorrect: !0
    }, {
      optionKey: "36_28",
      labelFallback: "我不睡棺材的",
      isCorrect: !1
    }, {
      optionKey: "36_29",
      labelFallback: "还在路上运着呢",
      isCorrect: !1
    }]
  }, {
    askKey: "36_8",
    options: [{
      optionKey: "36_30",
      labelFallback: "影子而已，有什么好奇怪的",
      isCorrect: !1
    }, {
      optionKey: "36_31",
      labelFallback: "你看花眼了",
      isCorrect: !1
    }, {
      optionKey: "36_32",
      labelFallback: "我站的位置离火近",
      isCorrect: !1
    }]
  }],
  _ = ["level36_hint1", "level36_hint2", "level36_hint3", "level36_hint4", "level36_hint5", "level36_hint6", "level36_hint7", "level36_hint8"];
__recovered_export_0 = k("Level_36")(m = class extends __rea_outer_a {
  constructor(...e) {
    super(...e), this.phase = 0, this.winstate = !1, this.currentRound = 0, this.completedSteps = 0, this.isInteractionLocked = !0, this.isFailSequencePlaying = !1, this.isRoosterRoundReady = !1, this.voiceToken = 0, this.currentDialogueKey = "", this.clickRootOrigin = new __rea_outer_i(), this.buttons = [null, null, null], this.buttonLabels = [null, null, null], this.buttonCracks = [null, null, null], this.shiverNodes = [], this.gameNode = null, this.clickRootNode = null, this.backBgNode = null, this.bubbleNode = null, this.bubbleLabel = null, this.bg1Node = null, this.bg2Node = null, this.bg3Node = null, this.boyNode = null, this.boy1Node = null, this.vampireNode = null, this.vampire1Node = null, this.vampire2Node = null, this.vampire3Node = null, this.roosterNode = null, this.rooster1Node = null, this.rooster2Node = null, this.rooster21Node = null, this.shadowNode = null, this.failure1Node = null, this.failureClawNode = null, this.demoNode = null, this.onRoosterTouch = e => {
      1 !== this.phase || !this.isRoosterRoundReady || this.isFailSequencePlaying || this.winstate || this.isInteractionLocked || this.beginRoosterSuccess();
    }, this.onButton1Click = () => {
      this.onOptionClick(0);
    }, this.onButton2Click = () => {
      this.onOptionClick(1);
    }, this.onButton3Click = () => {
      this.onOptionClick(2);
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.allItemNum = 8, this.hasInstallNum = 0, console.log("[Level_36] loaded");
  }
  start() {
    this.resetLevelState(), this.applyInitialVisibility(), this.enterPhase0();
  }
  onDestroy() {
    this.cleanupRuntime(), super.onDestroy();
  }
  showHint() {
    if (1 !== this.phase) return;
    const e = Math.min(this.completedSteps, _.length - 1),
      t = _[e],
      i = __rea_outer_d.getInstance().getKey(t);
    __rea_outer_c.getInstance().showView(__rea_outer_N, void 0, {
      body: i
    });
  }
  getGameProgressSnapshot() {
    const e = Math.min(this.completedSteps, 8);
    return {
      progress: e / 8,
      label: `${e}/8`
    };
  }
  handleTimeExpired() {
    return !!(this.phase >= 2 || this.winstate || this.isFailSequencePlaying);
  }
  markAllTasksCompleted() {
    this.completedSteps = 8, this.hasInstallNum = 8, this.currentRound = 7;
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.currentRound = 0, this.completedSteps = 0, this.hasInstallNum = 0, this.isInteractionLocked = !0, this.isFailSequencePlaying = !1, this.isRoosterRoundReady = !1, this.voiceToken += 1, this.stopCurrentDialogueEffect();
  }
  enterPhase0() {
    this.phase = 0, this.isInteractionLocked = !0, __rea_outer_r.playMusic("bgm5", !0, .5), this.startBoyBreath(), this.startShiver(), this.setInputBlocked(!0), this.playDialogue("36_1", () => {
      this.isValid && this.enterPhase1AfterIntro();
    });
  }
  enterPhase1AfterIntro() {
    this.phase = 1, this.setInputBlocked(!1), this.hideBubble(), this.registerButtonHandlers(), __rea_outer_p.getInstance().refreshGameProgress(), this.currentRound = 0, this.applyRoundVisuals(0), this.showClickRootAnimated(() => {
      this.isValid && 1 === this.phase && (this.isInteractionLocked = !1, this.setButtonsInteractable(!0));
    });
  }
  applyRoundVisuals(e) {
    const t = f[e];
    if (!t) return;
    this.applyOptionLabels(t);
    const i = 7 === e;
    for (let e = 0; e < this.buttonCracks.length; e += 1) this.setNodeActive(this.buttonCracks[e], i);
    this.isRoosterRoundReady = i, i ? this.registerRoosterHandler() : this.unregisterRoosterHandler();
  }
  presentRoundWithAsk(e) {
    if (!this.isValid || 1 !== this.phase) return;
    this.currentRound = e, this.isInteractionLocked = !0, this.setButtonsInteractable(!1), this.hideClickRootImmediate(), this.applyRoundVisuals(e);
    const t = f[e];
    this.playDialogue(t.askKey, () => {
      this.isValid && 1 === this.phase && (this.hideBubble(), this.showClickRootAnimated(() => {
        if (!this.isValid || 1 !== this.phase) return;
        const t = 7 === e;
        this.setInputBlocked(!1), this.isInteractionLocked = !1, this.setButtonsInteractable(!t);
      }));
    });
  }
  onOptionClick(e) {
    if (1 !== this.phase || this.isInteractionLocked || this.isFailSequencePlaying || this.winstate) return;
    if (7 === this.currentRound) return;
    const t = f[this.currentRound],
      i = null == t ? void 0 : t.options[e];
    i && (this.isInteractionLocked = !0, this.setButtonsInteractable(!1), __rea_outer_r.playEffect_1("level36_1"), this.setInputBlocked(!0), this.hideClickRootAnimated(() => {
      this.isValid && 1 === this.phase && this.resolveOption(i);
    }));
  }
  resolveOption(e) {
    this.playDialogue(e.optionKey, () => {
      this.isValid && 1 === this.phase && (e.isCorrect ? this.onRoundAnsweredCorrect() : this.beginWrongAnswerFail());
    });
  }
  onRoundAnsweredCorrect() {
    if (this.completedSteps += 1, this.hasInstallNum = this.completedSteps, __rea_outer_p.getInstance().refreshGameProgress(), this.TryQuickWin()) return;
    const e = this.currentRound + 1;
    e >= 8 || (this.hideBubble(), this.setInputBlocked(!0), this.presentRoundWithAsk(e));
  }
  beginWrongAnswerFail() {
    this.isFailSequencePlaying || (this.isFailSequencePlaying = !0, this.phase = 2, this.winstate = !1, this.isInteractionLocked = !0, this.isRoosterRoundReady = !1, this.unregisterButtonHandlers(), this.unregisterRoosterHandler(), this.hideClickRootImmediate(), this.hideBubble(), __rea_outer_p.getInstance().pauseTimer(), this.setInputBlocked(!0), this.setNodeActive(this.vampireNode, !1), this.setNodeActive(this.vampire1Node, !0), this.playDialogue("36_35", () => {
      var e;
      this.isValid && (this.hideBubble(), this.setNodeActive(this.vampire1Node, !1), null != (e = this.vampire2Node) && e.isValid || console.warn("[Level_36] missing UIPanel/vampire_2"), this.setNodeActive(this.vampire2Node, !0), this.bringNodeToFront(this.vampire2Node), this.playFailureMaskSequence());
    }));
  }
  playFailureMaskSequence() {
    this.setNodeActive(this.failureClawNode, !1), this.setNodeActive(this.failure1Node, !0), this.scheduleOnceIfValid(() => {
      this.bringNodeToFront(this.failure1Node), this.setNodeActive(this.failureClawNode, !0), __rea_outer_r.playEffect_1("level36_3"), this.scheduleOnceIfValid(() => {
        __rea_outer_c.getInstance().showView(__rea_outer_b, __rea_outer_u.WIN_ANIMATION);
      }, 2);
    }, .5);
  }
  beginTimeoutFail() {
    this.isFailSequencePlaying = !0, this.phase = 2, this.winstate = !1, this.isInteractionLocked = !0, this.isRoosterRoundReady = !1, this.unregisterButtonHandlers(), this.unregisterRoosterHandler(), this.voiceToken += 1, this.stopCurrentDialogueEffect(), this.hideBubble(), this.hideClickRootImmediate(), __rea_outer_p.getInstance().pauseTimer(), __rea_outer_c.getInstance().showView(__rea_outer_b, __rea_outer_u.WIN_ANIMATION);
  }
  beginRoosterSuccess() {
    this.isInteractionLocked = !0, this.isRoosterRoundReady = !1, this.setButtonsInteractable(!1), this.unregisterButtonHandlers(), this.unregisterRoosterHandler(), this.setInputBlocked(!0), this.hideClickRootAnimated(() => {}), this.completedSteps += 1, this.hasInstallNum = this.completedSteps, __rea_outer_p.getInstance().refreshGameProgress(), this.TryQuickWin() || (this.phase = 2, this.winstate = !0, __rea_outer_p.getInstance().pauseTimer(), this.hideBubble(), this.setNodeActive(this.roosterNode, !1), this.setNodeActive(this.rooster1Node, !0), this.setNodeActive(this.rooster2Node, !0), this.setNodeActive(this.rooster21Node, !1), __rea_outer_r.playEffect_1("level36_2"), this.scheduleOnceIfValid(() => {
      this.setNodeActive(this.rooster2Node, !1), this.setNodeActive(this.rooster21Node, !0);
    }, 1), this.scheduleOnceIfValid(() => {
      this.playDawnSequence();
    }, 1.5));
  }
  playDawnSequence() {
    this.setNodeActive(this.bg3Node, !0), this.fadeNode(this.bg2Node, 255, 0, 2, null), this.fadeNode(this.bg3Node, 0, 255, 2, null), this.setNodeActive(this.vampireNode, !1), this.setNodeActive(this.vampire3Node, !0), this.resetNodeOpacity(this.vampire3Node, 255), this.playDialogue("36_33", () => {
      this.isValid && (this.hideBubble(), this.enterWinSequence());
    });
  }
  enterWinSequence() {
    this.setNodeActive(this.boy1Node, !0), this.fadeNode(this.vampire3Node, 255, 0, 2, () => {
      this.setNodeActive(this.vampire3Node, !1);
    }), this.playDialogue("36_34", () => {
      this.isValid && (this.hideBubble(), this.scheduleOnceIfValid(() => {
        this.showLevelSuccess(0);
      }, 1));
    });
  }
  playDialogue(e, t) {
    this.voiceToken += 1;
    const i = this.voiceToken;
    this.showBubble(e);
    let s = !1;
    const o = () => {
        !s && this.isValid && i === this.voiceToken && (s = !0, this.unschedule(l), t());
      },
      l = () => {
        o();
      };
    this.scheduleOnce(l, 6), this.stopCurrentDialogueEffect(), this.currentDialogueKey = e, __rea_outer_r.playEffect_1(e, o);
  }
  stopCurrentDialogueEffect() {
    __rea_outer_r.stopVoice(), this.currentDialogueKey && (__rea_outer_r.stopOneEffect(this.currentDialogueKey), this.currentDialogueKey = "");
  }
  showBubble(e) {
    var t;
    this.bubbleLabel && (this.bubbleLabel.string = __rea_outer_d.getInstance().getKey(e), this.setNodeActive(this.bubbleLabel.node, !0)), this.setNodeActive(this.bubbleNode, !0);
    const i = (null == (t = this.bubbleNode) ? void 0 : t.getChildByName("dialog_box")) ?? null;
    this.setNodeActive(i, !0);
  }
  hideBubble() {
    this.setNodeActive(this.bubbleNode, !1);
  }
  applyOptionLabels(e) {
    const t = __rea_outer_d.getInstance();
    for (let i = 0; i < 3; i += 1) {
      const s = this.buttonLabels[i],
        o = e.options[i];
      if (!s || !o) continue;
      const l = t.getKey(o.optionKey);
      s.string = l && l !== o.optionKey ? l : o.labelFallback;
    }
  }
  showClickRootAnimated(e) {
    const t = this.clickRootNode;
    if (null == t || !t.isValid) return void e();
    __rea_outer_g(t);
    const i = this.clickRootOrigin;
    t.setPosition(i.x, i.y - 150, i.z), this.setNodeActive(t, !0), __rea_outer_s(t).to(.5, {
      position: i.clone()
    }).call(() => {
      this.isValid && e();
    }).start();
  }
  hideClickRootAnimated(e) {
    const t = this.clickRootNode;
    if (null == t || !t.isValid) return void e();
    __rea_outer_g(t);
    const o = this.clickRootOrigin,
      l = new __rea_outer_i(o.x, o.y - 150, o.z);
    __rea_outer_s(t).to(.5, {
      position: l
    }).call(() => {
      this.isValid && (this.setNodeActive(t, !1), t.setPosition(o), e());
    }).start();
  }
  hideClickRootImmediate() {
    const e = this.clickRootNode;
    null != e && e.isValid && (__rea_outer_g(e), e.setPosition(this.clickRootOrigin), this.setNodeActive(e, !1));
  }
  applyInitialVisibility() {
    this.setNodeActive(this.bg1Node, !0), this.setNodeActive(this.bg2Node, !0), this.setNodeActive(this.bg3Node, !1), this.resetNodeOpacity(this.bg2Node, 255), this.resetNodeOpacity(this.bg3Node, 255), this.setNodeActive(this.boyNode, !0), this.setNodeActive(this.boy1Node, !1), this.setNodeActive(this.vampireNode, !0), this.setNodeActive(this.vampire1Node, !1), this.setNodeActive(this.vampire2Node, !1), this.setNodeActive(this.vampire3Node, !1), this.resetNodeOpacity(this.vampire3Node, 255), this.setNodeActive(this.roosterNode, !0), this.setNodeActive(this.rooster1Node, !1), this.setNodeActive(this.rooster2Node, !1), this.setNodeActive(this.rooster21Node, !1), this.setNodeActive(this.shadowNode, !0), this.setNodeActive(this.failureClawNode, !1), this.setNodeActive(this.failure1Node, !1), this.setNodeActive(this.clickRootNode, !1), this.setNodeActive(this.backBgNode, !1), this.setNodeActive(this.demoNode, !1);
    for (let e = 0; e < this.shiverNodes.length; e += 1) this.setNodeActive(this.shiverNodes[e], !0);
    for (let e = 0; e < this.buttonCracks.length; e += 1) this.setNodeActive(this.buttonCracks[e], !1);
    this.hideBubble();
  }
  startBoyBreath() {
    const e = this.boyNode;
    null != e && e.isValid && (__rea_outer_g(e), __rea_outer_y.RoseBreath_tag(e, 1, .02, .7, 0, 3601));
  }
  startShiver() {
    for (let e = 0; e < this.shiverNodes.length; e += 1) {
      const t = this.shiverNodes[e];
      null != t && t.isValid && (this.setNodeActive(t, !0), __rea_outer_g(t), __rea_outer_y.shakeRepeat(t, .08, 4, .02));
    }
  }
  registerButtonHandlers() {
    this.unregisterButtonHandlers();
    const e = [this.onButton1Click, this.onButton2Click, this.onButton3Click];
    for (let i = 0; i < this.buttons.length; i += 1) {
      var t;
      const s = this.buttons[i];
      null != s && null != (t = s.node) && t.isValid && s.node.on(__rea_outer_o.EventType.CLICK, e[i], this);
    }
  }
  unregisterButtonHandlers() {
    const e = [this.onButton1Click, this.onButton2Click, this.onButton3Click];
    for (let i = 0; i < this.buttons.length; i += 1) {
      var t;
      const s = this.buttons[i];
      null != s && null != (t = s.node) && t.isValid && s.node.off(__rea_outer_o.EventType.CLICK, e[i], this);
    }
  }
  registerRoosterHandler() {
    this.unregisterRoosterHandler();
    const e = this.roosterNode;
    null != e && e.isValid ? e.on(__rea_outer_l.EventType.TOUCH_END, this.onRoosterTouch, this) : console.warn("[Level_36] missing rooster");
  }
  unregisterRoosterHandler() {
    const e = this.roosterNode;
    null != e && e.isValid && e.off(__rea_outer_l.EventType.TOUCH_END, this.onRoosterTouch, this);
  }
  setButtonsInteractable(e) {
    for (let t = 0; t < this.buttons.length; t += 1) {
      const i = this.buttons[t];
      i && (i.interactable = e);
    }
  }
  setInputBlocked(e) {
    this.setNodeActive(this.backBgNode, e);
  }
  fadeNode(e, t, i, s, o) {
    null != e && e.isValid ? (__rea_outer_g(e), __rea_outer_y.fadeOut(e, s, t, i, 0, () => {
      this.isValid && (null == o || o());
    })) : null == o || o();
  }
  resetNodeOpacity(e, t) {
    null != e && e.isValid && __rea_outer_v(e, t);
  }
  cleanupRuntime() {
    this.unscheduleAllCallbacks(), this.unregisterButtonHandlers(), this.unregisterRoosterHandler(), this.voiceToken += 1, this.stopCurrentDialogueEffect(), this.stopTweenIfValid(this.clickRootNode), this.stopTweenIfValid(this.bg2Node), this.stopTweenIfValid(this.bg3Node), this.stopTweenIfValid(this.vampire3Node), this.stopTweenIfValid(this.boyNode);
    for (let e = 0; e < this.shiverNodes.length; e += 1) this.stopTweenIfValid(this.shiverNodes[e]);
  }
  stopTweenIfValid(e) {
    null != e && e.isValid && __rea_outer_g(e);
  }
  scheduleOnceIfValid(e, t) {
    this.scheduleOnce(() => {
      this.isValid && e();
    }, t);
  }
  resolveReferences() {
    var e, t, i, s;
    this.gameNode = this.node.getChildByPath("UIPanel/gameNode"), this.clickRootNode = this.node.getChildByPath("UIPanel/click_root"), this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.bubbleNode = this.node.getChildByPath("UIPanel/bubble"), this.demoNode = this.node.getChildByPath("UIPanel/demo"), this.bubbleLabel = (null == (e = this.bubbleNode) || null == (e = e.getChildByPath("dialog_box/Label")) ? void 0 : e.getComponent(__rea_outer_n)) ?? null, null != (t = this.clickRootNode) && t.isValid && (this.clickRootOrigin = this.clickRootNode.position.clone());
    for (let e = 0; e < 3; e += 1) {
      var l, h;
      const t = (null == (l = this.clickRootNode) ? void 0 : l.getChildByName(`Button${e + 1}`)) ?? null;
      this.buttons[e] = (null == t ? void 0 : t.getComponent(__rea_outer_o)) ?? null, this.buttonLabels[e] = (null == t || null == (h = t.getChildByName("Label")) ? void 0 : h.getComponent(__rea_outer_n)) ?? null, this.buttonCracks[e] = (null == t ? void 0 : t.getChildByName("crack")) ?? null;
    }
    const a = this.gameNode;
    this.bg1Node = (null == a ? void 0 : a.getChildByName("bg_1")) ?? null, this.bg2Node = (null == a ? void 0 : a.getChildByName("bg_2")) ?? null, this.bg3Node = (null == a ? void 0 : a.getChildByName("bg_3")) ?? null, this.boyNode = (null == a ? void 0 : a.getChildByName("boy")) ?? null, this.boy1Node = (null == (i = this.boyNode) ? void 0 : i.getChildByName("boy_1")) ?? null, this.vampireNode = (null == a ? void 0 : a.getChildByName("vampire")) ?? null, this.vampire1Node = (null == a ? void 0 : a.getChildByName("vampire_1")) ?? null, this.vampire2Node = this.node.getChildByPath("UIPanel/vampire_2"), this.vampire3Node = (null == a ? void 0 : a.getChildByName("vampire_3")) ?? null, this.roosterNode = (null == a ? void 0 : a.getChildByName("rooster")) ?? null, this.rooster1Node = (null == a ? void 0 : a.getChildByName("rooster_1")) ?? null, this.rooster2Node = (null == a ? void 0 : a.getChildByName("rooster_2")) ?? null, this.rooster21Node = (null == a ? void 0 : a.getChildByName("rooster_21")) ?? null, this.shadowNode = (null == a ? void 0 : a.getChildByName("shadow")) ?? null, this.failure1Node = this.node.getChildByPath("UIPanel/failure_1"), this.failureClawNode = (null == (s = this.failure1Node) ? void 0 : s.getChildByName("failure")) ?? null, this.shiverNodes.length = 0;
    for (let e = 0; e < C.length; e += 1) this.shiverNodes.push((null == a ? void 0 : a.getChildByName(C[e])) ?? null);
    this.logMissingNodes();
  }
  resolveUiOrGameNode(e) {
    var t;
    return this.node.getChildByPath(`UIPanel/${e}`) ?? (null == (t = this.gameNode) ? void 0 : t.getChildByName(e)) ?? null;
  }
  bringNodeToFront(e) {
    var t;
    null != e && e.isValid && null != (t = e.parent) && t.isValid && e.setSiblingIndex(e.parent.children.length - 1);
  }
  logMissingNodes() {
    const e = [],
      t = (t, i) => {
        t || e.push(i);
      };
    t(this.clickRootNode, "UIPanel/click_root"), t(this.bubbleNode, "UIPanel/bubble"), t(this.backBgNode, "UIPanel/backBG"), t(this.boyNode, "gameNode/boy"), t(this.boy1Node, "gameNode/boy/boy_1"), t(this.vampireNode, "gameNode/vampire"), t(this.vampire1Node, "gameNode/vampire_1"), t(this.vampire2Node, "UIPanel/vampire_2"), t(this.vampire3Node, "gameNode/vampire_3"), t(this.roosterNode, "gameNode/rooster"), t(this.rooster1Node, "gameNode/rooster_1"), t(this.failure1Node, "UIPanel/failure_1"), t(this.failureClawNode, "UIPanel/failure_1/failure"), t(this.bg2Node, "gameNode/bg_2"), t(this.bg3Node, "gameNode/bg_3"), e.length > 0 && console.warn("[Level_36] prefab 待办清单:", e.join(", "));
  }
  setNodeActive(e, t) {
    null != e && e.isValid && (e.active = t);
  }
}) || m;
__rea_outer_t._RF.pop();
export { __recovered_export_0 as default };
