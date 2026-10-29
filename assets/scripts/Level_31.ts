// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_31.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { Vec3 as __rea_outer_i } from "cc";
import { tween as __rea_outer_s } from "cc";
import { Button as __rea_outer_l } from "cc";
import { Node as __rea_outer_o } from "cc";
import { Label as __rea_outer_n } from "cc";
import { _decorator as __rea_outer_h } from "cc";
import { default as __rea_outer_a } from "./LevelBase";
import { default as __rea_outer_d } from "./AudioManager";
import { I18nController as __rea_outer_r } from "./i18n-controller";
import { UIManager as __rea_outer_c } from "./ui-manager";
import { UILayer as __rea_outer_u } from "./ui-layer";
import { UIHint as __rea_outer_b } from "./uihint";
import { UIFail as __rea_outer_N } from "./uifail";
import { GameController as __rea_outer_g } from "./GameController";
import { setNodeOpacity as __rea_outer_p } from "./CocosCompat";
import { stopAllTweens as __rea_outer_v } from "./CocosCompat";
import { default as __rea_outer_k } from "./ActionSystem";
let __recovered_export_0;
var y;
__rea_outer_t._RF.push({}, "b21a5M03pZIso25NAUWzRfc", "Level_31", void 0);
const {
    ccclass: m
  } = __rea_outer_h,
  C = Math.round(237.15),
  B = [{
    askKey: "31_1",
    options: [{
      optionKey: "31_9",
      labelFallback: "有人，什么事",
      isSilent: !1,
      isCorrect: !1
    }, {
      optionKey: "31_10",
      labelFallback: "（沉默不答）",
      isSilent: !0,
      isCorrect: !1
    }, {
      optionKey: "31_11",
      labelFallback: "别吵，我在打游戏",
      isSilent: !1,
      isCorrect: !0
    }]
  }, {
    askKey: "31_2",
    options: [{
      optionKey: "31_12",
      labelFallback: "没往地上看",
      isSilent: !1,
      isCorrect: !1
    }, {
      optionKey: "31_13",
      labelFallback: "谁扔的卫生巾啊",
      isSilent: !1,
      isCorrect: !0
    }, {
      optionKey: "31_14",
      labelFallback: "好吓人，别说了",
      isSilent: !1,
      isCorrect: !1
    }]
  }, {
    askKey: "31_3",
    options: [{
      optionKey: "31_15",
      labelFallback: "我戴着耳机呢",
      isSilent: !1,
      isCorrect: !1
    }, {
      optionKey: "31_16",
      labelFallback: "什么都没听到",
      isSilent: !1,
      isCorrect: !1
    }, {
      optionKey: "31_17",
      labelFallback: "只听到我的五杀声",
      isSilent: !1,
      isCorrect: !0
    }]
  }, {
    askKey: "31_4",
    options: [{
      optionKey: "31_18",
      labelFallback: "好，等我一下",
      isSilent: !1,
      isCorrect: !1
    }, {
      optionKey: "31_19",
      labelFallback: "扫地阿姨一会到",
      isSilent: !1,
      isCorrect: !0
    }, {
      optionKey: "31_20",
      labelFallback: "你自己搬不动吗",
      isSilent: !1,
      isCorrect: !1
    }]
  }, {
    askKey: "31_5",
    options: [{
      optionKey: "31_21",
      labelFallback: "对啊，就我自己",
      isSilent: !1,
      isCorrect: !1
    }, {
      optionKey: "31_22",
      labelFallback: "队友还等我开团呢",
      isSilent: !1,
      isCorrect: !0
    }, {
      optionKey: "31_23",
      labelFallback: "你问这个干嘛",
      isSilent: !1,
      isCorrect: !1
    }]
  }, {
    askKey: "31_6",
    options: [{
      optionKey: "31_24",
      labelFallback: "打完这局再说",
      isSilent: !1,
      isCorrect: !0
    }, {
      optionKey: "31_25",
      labelFallback: "外面跟我没关系",
      isSilent: !1,
      isCorrect: !1
    }, {
      optionKey: "31_26",
      labelFallback: "你是不是想害我",
      isSilent: !1,
      isCorrect: !1
    }]
  }, {
    askKey: "31_7",
    options: [{
      optionKey: "31_27",
      labelFallback: "（偷偷看一眼）",
      isSilent: !0,
      isCorrect: !1
    }, {
      optionKey: "31_28",
      labelFallback: "嗯，忙着拆水晶",
      isSilent: !1,
      isCorrect: !0
    }, {
      optionKey: "31_29",
      labelFallback: "那我出去了",
      isSilent: !1,
      isCorrect: !1
    }]
  }, {
    askKey: "31_8",
    options: [{
      optionKey: "31_10",
      labelFallback: "保持沉默（什么也不说）",
      isSilent: !0,
      isCorrect: !1
    }, {
      optionKey: "31_33",
      labelFallback: "悄悄开门离开",
      isSilent: !0,
      isCorrect: !1
    }, {
      optionKey: "31_34",
      labelFallback: "打电话报警",
      isSilent: !0,
      isCorrect: !1
    }]
  }],
  f = ["level31_hint1", "level31_hint2", "level31_hint3", "level31_hint4", "level31_hint5", "level31_hint6", "level31_hint7", "level31_hint8"];
__recovered_export_0 = m("Level_31")(y = class extends __rea_outer_a {
  constructor(...e) {
    super(...e), this.phase = 0, this.winstate = !1, this.currentRound = 0, this.completedSteps = 0, this.isInteractionLocked = !0, this.isFailSequencePlaying = !1, this.isWatchRoundReady = !1, this.voiceToken = 0, this.currentDialogueKey = "", this.clickRootOrigin = new __rea_outer_i(), this.buttons = [null, null, null], this.buttonLabels = [null, null, null], this.buttonCracks = [null, null, null], this.clickRootNode = null, this.backBgNode = null, this.end1Node = null, this.bubbleNode = null, this.dialogBoxNode = null, this.dialogBoxLeftNode = null, this.dialogBoxRightNode = null, this.bubbleLabel = null, this.girlNode = null, this.girl1Node = null, this.murdererNode = null, this.murderer1Node = null, this.murderer2Node = null, this.tableNode = null, this.table2Node = null, this.table3Node = null, this.watchTouchNode = null, this.shiverPhase1Nodes = [], this.shiverWinNodes = [], this.onWatchTouch = e => {
      1 !== this.phase || !this.isWatchRoundReady || this.isFailSequencePlaying || this.winstate || this.isInteractionLocked || this.beginWatchSuccess();
    }, this.onButton1Click = () => {
      this.onOptionClick(0);
    }, this.onButton2Click = () => {
      this.onOptionClick(1);
    }, this.onButton3Click = () => {
      this.onOptionClick(2);
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.allItemNum = 8, this.hasInstallNum = 0, console.log("[Level_31] loaded");
  }
  start() {
    this.resetLevelState(), this.applyInitialVisibility(), this.enterPhase0();
  }
  onDestroy() {
    this.cleanupRuntime(), super.onDestroy();
  }
  showHint() {
    if (1 !== this.phase) return;
    const e = Math.min(this.completedSteps, f.length - 1),
      t = f[e],
      i = __rea_outer_r.getInstance().getKey(t);
    __rea_outer_c.getInstance().showView(__rea_outer_b, void 0, {
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
    this.phase = 0, this.winstate = !1, this.currentRound = 0, this.completedSteps = 0, this.hasInstallNum = 0, this.isInteractionLocked = !0, this.isFailSequencePlaying = !1, this.isWatchRoundReady = !1, this.voiceToken += 1, this.stopCurrentDialogueEffect();
  }
  enterPhase0() {
    var e;
    this.phase = 0, this.isInteractionLocked = !0, __rea_outer_d.playMusic("bgm5", !0, .5), this.setNodeActive(this.backBgNode, !0), null != (e = this.backBgNode) && e.isValid && __rea_outer_p(this.backBgNode, 255), this.playDialogue("31_1", "right", () => {
      this.isValid && this.enterPhase1AfterIntro();
    });
  }
  enterPhase1AfterIntro() {
    this.phase = 1, this.setNodeActive(this.backBgNode, !1), this.hideBubble(), this.startPhase1Shiver(), this.registerButtonHandlers(), __rea_outer_g.getInstance().refreshGameProgress(), this.currentRound = 0, this.applyRoundVisuals(0), this.showClickRootAnimated(() => {
      this.isValid && 1 === this.phase && (this.isInteractionLocked = !1, this.setButtonsInteractable(!0));
    });
  }
  startPhase1Shiver() {
    for (let e = 0; e < this.shiverPhase1Nodes.length; e += 1) {
      const t = this.shiverPhase1Nodes[e];
      null != t && t.isValid && (this.setNodeActive(t, !0), __rea_outer_v(t), __rea_outer_k.shakeRepeat(t, .08, 4, .02));
    }
  }
  stopPhase1Shiver() {
    for (let e = 0; e < this.shiverPhase1Nodes.length; e += 1) {
      const t = this.shiverPhase1Nodes[e];
      null != t && t.isValid && (__rea_outer_v(t), this.setNodeActive(t, !1));
    }
  }
  startWinShiver() {
    for (let e = 0; e < this.shiverWinNodes.length; e += 1) {
      const t = this.shiverWinNodes[e];
      null != t && t.isValid && (this.setNodeActive(t, !0), __rea_outer_v(t), __rea_outer_k.shakeRepeat(t, .08, 4, .02));
    }
  }
  applyRoundVisuals(e) {
    const t = B[e];
    if (!t) return;
    this.applyOptionLabels(t);
    const i = 7 === e;
    for (let e = 0; e < this.buttonCracks.length; e += 1) this.setNodeActive(this.buttonCracks[e], i);
    this.isWatchRoundReady = i, i ? this.registerWatchHandler() : this.unregisterWatchHandler();
  }
  presentRoundWithAsk(e) {
    if (!this.isValid || 1 !== this.phase) return;
    this.currentRound = e, this.isInteractionLocked = !0, this.setButtonsInteractable(!1), this.hideClickRootImmediate(), this.applyRoundVisuals(e);
    const t = B[e];
    this.playDialogue(t.askKey, "right", () => {
      this.isValid && 1 === this.phase && (this.hideBubble(), this.showClickRootAnimated(() => {
        this.isValid && 1 === this.phase && (this.isInteractionLocked = !1, this.setButtonsInteractable(!0));
      }));
    });
  }
  onOptionClick(e) {
    if (1 !== this.phase || this.isInteractionLocked || this.isFailSequencePlaying || this.winstate) return;
    const t = B[this.currentRound],
      i = null == t ? void 0 : t.options[e];
    i && (this.isInteractionLocked = !0, this.setButtonsInteractable(!1), __rea_outer_d.playEffect_1("level31_1"), this.hideClickRootAnimated(() => {
      this.isValid && 1 === this.phase && this.resolveOption(i);
    }));
  }
  resolveOption(e) {
    this.playAnswerThen(e, () => {
      this.isValid && 1 === this.phase && (e.isCorrect ? this.onRoundAnsweredCorrect() : this.beginWrongAnswerFail());
    });
  }
  playAnswerThen(e, t) {
    !e.isSilent && e.optionKey ? this.playDialogue(e.optionKey, "left", t) : t();
  }
  onRoundAnsweredCorrect() {
    if (this.completedSteps += 1, this.hasInstallNum = this.completedSteps, __rea_outer_g.getInstance().refreshGameProgress(), this.TryQuickWin()) return;
    const e = this.currentRound + 1;
    e >= 8 || (this.hideBubble(), this.presentRoundWithAsk(e));
  }
  beginWrongAnswerFail() {
    this.isFailSequencePlaying || (this.isFailSequencePlaying = !0, this.phase = 2, this.winstate = !1, this.isInteractionLocked = !0, this.isWatchRoundReady = !1, this.unregisterButtonHandlers(), this.unregisterWatchHandler(), this.hideClickRootImmediate(), this.hideBubble(), __rea_outer_g.getInstance().pauseTimer(), this.setNodeActive(this.murdererNode, !0), this.setNodeActive(this.murderer1Node, !0), this.setNodeActive(this.murderer2Node, !1), this.scheduleOnce(() => {
      this.isValid && (this.setNodeActive(this.murderer2Node, !0), this.setNodeActive(this.murderer1Node, !1), __rea_outer_d.playEffect_1("level31_3"), this.scheduleOnce(() => {
        this.isValid && this.showFailEndAndPopup();
      }, .5));
    }, .2));
  }
  showFailEndAndPopup() {
    var e;
    this.setNodeActive(this.end1Node, !0), this.setNodeActive(this.backBgNode, !0), null != (e = this.backBgNode) && e.isValid && __rea_outer_p(this.backBgNode, C), this.playDialogue("31_32", "right", () => {
      this.isValid && (this.hideBubble(), __rea_outer_d.playEffect_1("level31_4", () => {
        this.isValid && __rea_outer_c.getInstance().showView(__rea_outer_N, __rea_outer_u.WIN_ANIMATION);
      }));
    });
  }
  beginTimeoutFail() {
    this.isFailSequencePlaying = !0, this.phase = 2, this.winstate = !1, this.isInteractionLocked = !0, this.isWatchRoundReady = !1, this.unregisterButtonHandlers(), this.unregisterWatchHandler(), this.voiceToken += 1, this.stopCurrentDialogueEffect(), this.hideBubble(), this.hideClickRootImmediate(), __rea_outer_g.getInstance().pauseTimer(), this.scheduleOnce(() => {
      this.isValid && __rea_outer_c.getInstance().showView(__rea_outer_N, __rea_outer_u.WIN_ANIMATION);
    }, .5);
  }
  beginWatchSuccess() {
    this.isInteractionLocked = !0, this.isWatchRoundReady = !1, this.setButtonsInteractable(!1), this.unregisterButtonHandlers(), this.unregisterWatchHandler(), this.hideClickRootImmediate(), this.hideBubble(), this.completedSteps += 1, this.hasInstallNum = this.completedSteps, __rea_outer_g.getInstance().refreshGameProgress(), this.TryQuickWin() || (__rea_outer_d.playEffect_1("level31_2"), this.playClockAnimation(() => {
      this.isValid && this.playDialogue("31_30", "right", () => {
        this.isValid && (this.hideBubble(), this.playWinBlackoutThenSuccess());
      });
    }));
  }
  playClockAnimation(e) {
    this.setNodeActive(this.tableNode, !0);
    const t = this.table2Node,
      i = this.table3Node;
    null != t && t.isValid && (t.angle = 90), null != i && i.isValid && (i.angle = 90);
    let l = 0;
    const o = (null != t && t.isValid ? 1 : 0) + (null != i && i.isValid ? 1 : 0),
      n = () => {
        l += 1, l < o || (this.setNodeActive(this.tableNode, !1), e());
      };
    if (0 === o) return this.setNodeActive(this.tableNode, !1), void e();
    null != t && t.isValid && (__rea_outer_v(t), __rea_outer_s(t).to(2.5, {
      angle: -90
    }).call(n).start()), null != i && i.isValid && (__rea_outer_v(i), __rea_outer_s(i).by(2.5, {
      angle: -2160
    }).call(n).start());
  }
  playWinBlackoutThenSuccess() {
    var e;
    this.phase = 2, this.winstate = !0, __rea_outer_g.getInstance().pauseTimer(), this.setNodeActive(this.backBgNode, !0), null != (e = this.backBgNode) && e.isValid && __rea_outer_p(this.backBgNode, 255), this.scheduleOnce(() => {
      this.isValid && (this.setNodeActive(this.murdererNode, !1), this.setNodeActive(this.murderer1Node, !1), this.setNodeActive(this.murderer2Node, !1), this.setNodeActive(this.backBgNode, !1), this.enterWinSequence());
    }, .5);
  }
  enterWinSequence() {
    this.stopPhase1Shiver(), this.setNodeActive(this.girlNode, !1), this.setNodeActive(this.girl1Node, !0), this.startWinShiver(), this.playDialogue("31_31", "left", () => {
      this.isValid && (this.hideBubble(), this.scheduleOnce(() => {
        this.isValid && this.showLevelSuccess(0);
      }, 1));
    });
  }
  playDialogue(e, t, i) {
    this.voiceToken += 1;
    const s = this.voiceToken;
    this.showBubble(e, t);
    let l = !1;
    const o = () => {
        !l && this.isValid && s === this.voiceToken && (l = !0, this.unschedule(n), i());
      },
      n = () => {
        o();
      };
    this.scheduleOnce(n, 6), this.stopCurrentDialogueEffect(), this.currentDialogueKey = e, __rea_outer_d.playEffect_1(e, o);
  }
  stopCurrentDialogueEffect() {
    __rea_outer_d.stopVoice(), this.currentDialogueKey && (__rea_outer_d.stopOneEffect(this.currentDialogueKey), this.currentDialogueKey = "");
  }
  showBubble(e, t) {
    this.bubbleLabel && (this.bubbleLabel.string = __rea_outer_r.getInstance().getKey(e), this.setNodeActive(this.bubbleLabel.node, !0)), this.setNodeActive(this.bubbleNode, !0), this.setNodeActive(this.dialogBoxNode, !0), this.setNodeActive(this.dialogBoxLeftNode, "left" === t), this.setNodeActive(this.dialogBoxRightNode, "right" === t);
  }
  hideBubble() {
    this.setNodeActive(this.dialogBoxLeftNode, !1), this.setNodeActive(this.dialogBoxRightNode, !1), this.setNodeActive(this.bubbleNode, !1);
  }
  applyOptionLabels(e) {
    const t = __rea_outer_r.getInstance();
    for (let i = 0; i < 3; i += 1) {
      const s = this.buttonLabels[i],
        l = e.options[i];
      if (s && l) if (l.optionKey) {
        const e = t.getKey(l.optionKey);
        s.string = e && e !== l.optionKey ? e : l.labelFallback;
      } else s.string = l.labelFallback;
    }
  }
  showClickRootAnimated(e) {
    const t = this.clickRootNode;
    if (null == t || !t.isValid) return void e();
    __rea_outer_v(t);
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
    __rea_outer_v(t);
    const l = this.clickRootOrigin,
      o = new __rea_outer_i(l.x, l.y - 150, l.z);
    __rea_outer_s(t).to(.5, {
      position: o
    }).call(() => {
      this.isValid && (this.setNodeActive(t, !1), t.setPosition(l), e());
    }).start();
  }
  hideClickRootImmediate() {
    const e = this.clickRootNode;
    null != e && e.isValid && (__rea_outer_v(e), e.setPosition(this.clickRootOrigin), this.setNodeActive(e, !1));
  }
  applyInitialVisibility() {
    var e, t;
    this.setNodeActive(this.clickRootNode, !1), this.setNodeActive(this.backBgNode, !1), this.setNodeActive(this.end1Node, !1), this.setNodeActive(this.murderer1Node, !1), this.setNodeActive(this.girl1Node, !1), this.setNodeActive(this.tableNode, !1), this.setNodeActive(this.girlNode, !0), this.setNodeActive(this.murdererNode, !0), this.setNodeActive(this.murderer2Node, !0);
    for (let e = 0; e < this.shiverPhase1Nodes.length; e += 1) this.setNodeActive(this.shiverPhase1Nodes[e], !1);
    for (let e = 0; e < this.shiverWinNodes.length; e += 1) this.setNodeActive(this.shiverWinNodes[e], !1);
    for (let e = 0; e < this.buttonCracks.length; e += 1) this.setNodeActive(this.buttonCracks[e], !1);
    this.hideBubble(), null != (e = this.table2Node) && e.isValid && (this.table2Node.angle = 90), null != (t = this.table3Node) && t.isValid && (this.table3Node.angle = 90);
  }
  registerButtonHandlers() {
    this.unregisterButtonHandlers();
    const e = [this.onButton1Click, this.onButton2Click, this.onButton3Click];
    for (let i = 0; i < this.buttons.length; i += 1) {
      var t;
      const s = this.buttons[i];
      null != s && null != (t = s.node) && t.isValid && s.node.on(__rea_outer_l.EventType.CLICK, e[i], this);
    }
  }
  unregisterButtonHandlers() {
    const e = [this.onButton1Click, this.onButton2Click, this.onButton3Click];
    for (let i = 0; i < this.buttons.length; i += 1) {
      var t;
      const s = this.buttons[i];
      null != s && null != (t = s.node) && t.isValid && s.node.off(__rea_outer_l.EventType.CLICK, e[i], this);
    }
  }
  registerWatchHandler() {
    this.unregisterWatchHandler();
    const e = this.watchTouchNode;
    null != e && e.isValid ? e.on(__rea_outer_o.EventType.TOUCH_END, this.onWatchTouch, this) : console.warn("[Level_31] missing clicks/touch for watch");
  }
  unregisterWatchHandler() {
    const e = this.watchTouchNode;
    null != e && e.isValid && e.off(__rea_outer_o.EventType.TOUCH_END, this.onWatchTouch, this);
  }
  setButtonsInteractable(e) {
    for (let t = 0; t < this.buttons.length; t += 1) {
      const i = this.buttons[t];
      i && (i.interactable = e);
    }
  }
  cleanupRuntime() {
    this.unscheduleAllCallbacks(), this.unregisterButtonHandlers(), this.unregisterWatchHandler(), this.voiceToken += 1, this.stopCurrentDialogueEffect(), this.stopTweenIfValid(this.clickRootNode), this.stopTweenIfValid(this.table2Node), this.stopTweenIfValid(this.table3Node);
    for (let e = 0; e < this.shiverPhase1Nodes.length; e += 1) this.stopTweenIfValid(this.shiverPhase1Nodes[e]);
    for (let e = 0; e < this.shiverWinNodes.length; e += 1) this.stopTweenIfValid(this.shiverWinNodes[e]);
  }
  stopTweenIfValid(e) {
    null != e && e.isValid && __rea_outer_v(e);
  }
  resolveReferences() {
    var e, t, i, s;
    const o = this.node.getChildByPath("UIPanel/gameNode");
    this.clickRootNode = (null == o ? void 0 : o.getChildByName("click_root")) ?? null, this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.end1Node = this.node.getChildByPath("UIPanel/end_1"), this.bubbleNode = this.node.getChildByPath("UIPanel/bubble"), this.dialogBoxNode = this.node.getChildByPath("UIPanel/bubble/dialog_box"), this.dialogBoxLeftNode = this.node.getChildByPath("UIPanel/bubble/dialog_box_left"), this.dialogBoxRightNode = this.node.getChildByPath("UIPanel/bubble/dialog_box_right"), this.bubbleLabel = (null == (e = this.dialogBoxNode) || null == (e = e.getChildByName("Label")) ? void 0 : e.getComponent(__rea_outer_n)) ?? null, null != (t = this.clickRootNode) && t.isValid && (this.clickRootOrigin = this.clickRootNode.position.clone());
    for (let e = 0; e < 3; e += 1) {
      var h, a;
      const t = (null == (h = this.clickRootNode) ? void 0 : h.getChildByName(`Button${e + 1}`)) ?? null;
      this.buttons[e] = (null == t ? void 0 : t.getComponent(__rea_outer_l)) ?? null, this.buttonLabels[e] = (null == t || null == (a = t.getChildByName("Label")) ? void 0 : a.getComponent(__rea_outer_n)) ?? null, this.buttonCracks[e] = (null == t ? void 0 : t.getChildByName("crack")) ?? null;
    }
    this.girlNode = (null == o ? void 0 : o.getChildByName("girl")) ?? null, this.girl1Node = (null == o ? void 0 : o.getChildByName("girl_1")) ?? null, this.murdererNode = (null == o ? void 0 : o.getChildByName("murderer")) ?? null, this.murderer1Node = (null == o ? void 0 : o.getChildByName("murderer1")) ?? null, this.murderer2Node = (null == o ? void 0 : o.getChildByName("murderer2")) ?? null, this.tableNode = (null == o ? void 0 : o.getChildByName("table")) ?? null, this.table2Node = (null == (i = this.tableNode) ? void 0 : i.getChildByName("table_2")) ?? null, this.table3Node = (null == (s = this.tableNode) ? void 0 : s.getChildByName("table_3")) ?? null, this.watchTouchNode = (null == o ? void 0 : o.getChildByPath("clicks/touch")) ?? null, this.shiverPhase1Nodes = [(null == o ? void 0 : o.getChildByName("shiver1")) ?? null, (null == o ? void 0 : o.getChildByName("shiver3_1")) ?? null, (null == o ? void 0 : o.getChildByName("shiver2_1")) ?? null], this.shiverWinNodes = [(null == o ? void 0 : o.getChildByName("shiver1_1")) ?? null, (null == o ? void 0 : o.getChildByName("shiver3")) ?? null, (null == o ? void 0 : o.getChildByName("shiver2")) ?? null], this.logMissingNodes();
  }
  logMissingNodes() {
    const e = [],
      t = (t, i) => {
        t || e.push(i);
      };
    t(this.clickRootNode, "gameNode/click_root"), t(this.bubbleNode, "UIPanel/bubble"), t(this.dialogBoxNode, "UIPanel/bubble/dialog_box"), t(this.dialogBoxLeftNode, "UIPanel/bubble/dialog_box_left"), t(this.dialogBoxRightNode, "UIPanel/bubble/dialog_box_right"), t(this.girlNode, "gameNode/girl"), t(this.girl1Node, "gameNode/girl_1"), t(this.murdererNode, "gameNode/murderer"), t(this.murderer1Node, "gameNode/murderer1"), t(this.murderer2Node, "gameNode/murderer2"), t(this.tableNode, "gameNode/table"), t(this.watchTouchNode, "gameNode/clicks/touch"), t(this.backBgNode, "UIPanel/backBG"), t(this.end1Node, "UIPanel/end_1"), e.length > 0 && console.warn("[Level_31] prefab 待办清单:", e.join(", "));
  }
  setNodeActive(e, t) {
    null != e && e.isValid && (e.active = t);
  }
}) || y;
__rea_outer_t._RF.pop();
export { __recovered_export_0 as default };
