// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_40.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { Vec3 as __rea_outer_i } from "cc";
import { UITransform as __rea_outer_s } from "cc";
import { tween as __rea_outer_o } from "cc";
import { Button as __rea_outer_l } from "cc";
import { Node as __rea_outer_n } from "cc";
import { Vec2 as __rea_outer_h } from "cc";
import { Label as __rea_outer_d } from "cc";
import { _decorator as __rea_outer_r } from "cc";
import { default as __rea_outer_a } from "./LevelBase";
import { default as __rea_outer_u } from "./clue-hit-tester";
import { default as __rea_outer_c } from "./AudioManager";
import { I18nController as __rea_outer_N } from "./i18n-controller";
import { UIManager as __rea_outer_g } from "./ui-manager";
import { UILayer as __rea_outer_p } from "./ui-layer";
import { UIHint as __rea_outer_y } from "./uihint";
import { UIFail as __rea_outer_b } from "./uifail";
import { GameController as __rea_outer_v } from "./GameController";
import { stopAllTweens as __rea_outer__ } from "./CocosCompat";
import { default as __rea_outer_f } from "./clue-gesture-detector";
import { SwipeDirection as __rea_outer_m } from "./clue-level-types";
let __recovered_export_0;
var T;
__rea_outer_t._RF.push({}, "b7e4cGabVJPCJw6Ho8KXSRx", "Level_40", void 0);
const {
    ccclass: C
  } = __rea_outer_r,
  k = "level40_1",
  B = new __rea_outer_i(-417.761, -94.101, 0),
  R = new __rea_outer_i(-400.396, 252.026, 0),
  w = new __rea_outer_i(850, -167.805, 0),
  I = new __rea_outer_i(210.089, -167.805, 0),
  A = {
    "40_1": "你们一个都别想跑！",
    "40_2": "糟了，有歹徒，我得通知其他人赶紧下楼!",
    "40_3": "这台老留声机今天总卡顿，我一定要调好这首古典乐曲！",
    "40_4": "今晚的食材刚好齐全，我要做招牌料理！",
    "40_5": "这局马上就要复盘完成，不能中途放弃！",
    "40_6": "妆容还差最后一步，必须完美出门！",
    "40_7": "这幅风景画马上画完了，我要坚持画完！",
    "40_8": "怎么会缺零件呢？我必须修好才能休息！",
    "40_9": "我年纪大了，不想随便走动，安静待着就好。",
    "40_10": "有免费调试老式留声机的!",
    "40_11": "楼上有危险，赶紧下楼躲避！",
    "40_12": "别摆弄机器了快逃命！",
    "40_13": "歹徒闯入公寓，立刻下楼！",
    "40_14": "做饭不重要，保命要紧！",
    "40_15": "楼下美食集会，免费品鉴西餐。",
    "40_16": "公寓有危险，快速撤离！",
    "40_17": "楼下棋友对局，高手较量。",
    "40_18": "下棋耽误时间，快逃走！",
    "40_19": "歹徒来袭，赶紧下楼避难！",
    "40_20": "别化妆了快逃命！",
    "40_21": "楼下化妆大赛，免费体验送小样。",
    "40_22": "楼下艺术画展，小朋友作品可参展。",
    "40_23": "有坏人来了，快跟我下楼！",
    "40_24": "画画没用，赶紧逃跑！",
    "40_25": "公寓遇险，立刻下楼撤离！",
    "40_26": "楼下新开了家机修店，免费送螺丝！",
    "40_27": "别修了，楼下有以旧换新活动。",
    "40_28": "有杀人犯，快跑！",
    "40_29": "你孙子在楼下等你呢！",
    "40_30": "楼下有打折商品！",
    "40_31": "是吗？那我可得赶紧下去！",
    "40_32": "有美食？等等我这就下去！",
    "40_33": "高手在哪呢？我可得跟他好好较量一下！",
    "40_34": "还有赠品吗，给我留一份，这就来！",
    "40_35": "我这就去，一等奖一定是我的！",
    "40_36": "螺丝？就是我缺的这种，我这就下去！",
    "40_37": "好久没看孙子了，这个玩具他一定喜欢。",
    "40_38": "别烦我，我还要修留声机呢。",
    "40_39": "我最烦别人打扰我做美食了，赶紧滚！",
    "40_40": "等我复盘完事再说。",
    "40_41": "还差最后一下，先让我化完妆。",
    "40_42": "妈妈说不让我相信外人。",
    "40_43": "别打扰我，让我修完再说！",
    "40_44": "以旧换新也要钱，有钱我就不修了！",
    "40_45": "你说什么？我听不清啊。",
    "40_46": "太好了，一会一定要好好教训他！",
    "40_47": "还有人没下来，不知道怎么样了。",
    "40_48": "抓到你们了，一个都别想跑！"
  },
  V = [{
    introKey: "40_3",
    introFallback: "这台老留声机今天总卡顿，我一定要调好这首古典乐曲！",
    options: [{
      optionKey: "40_10",
      labelFallback: "有免费调试老式留声机的!",
      replyKey: "40_31",
      isCorrect: !0
    }, {
      optionKey: "40_11",
      labelFallback: "楼上有危险，赶紧下楼躲避！",
      replyKey: "40_38",
      isCorrect: !1
    }, {
      optionKey: "40_12",
      labelFallback: "别摆弄机器了快逃命！",
      replyKey: "40_38",
      isCorrect: !1
    }]
  }, {
    introKey: "40_4",
    introFallback: "今晚的食材刚好齐全，我要做招牌料理！",
    options: [{
      optionKey: "40_13",
      labelFallback: "歹徒闯入公寓，立刻下楼！",
      replyKey: "40_39",
      isCorrect: !1
    }, {
      optionKey: "40_14",
      labelFallback: "做饭不重要，保命要紧！",
      replyKey: "40_39",
      isCorrect: !1
    }, {
      optionKey: "40_15",
      labelFallback: "楼下美食集会，免费品鉴西餐。",
      replyKey: "40_32",
      isCorrect: !0
    }]
  }, {
    introKey: "40_5",
    introFallback: "这局马上就要复盘完成，不能中途放弃！",
    options: [{
      optionKey: "40_16",
      labelFallback: "公寓有危险，快速撤离！",
      replyKey: "40_40",
      isCorrect: !1
    }, {
      optionKey: "40_17",
      labelFallback: "楼下棋友对局，高手较量。",
      replyKey: "40_33",
      isCorrect: !0
    }, {
      optionKey: "40_18",
      labelFallback: "下棋耽误时间，快逃走！",
      replyKey: "40_40",
      isCorrect: !1
    }]
  }, {
    introKey: "40_6",
    introFallback: "妆容还差最后一步，必须完美出门！",
    options: [{
      optionKey: "40_19",
      labelFallback: "歹徒来袭，赶紧下楼避难！",
      replyKey: "40_41",
      isCorrect: !1
    }, {
      optionKey: "40_20",
      labelFallback: "别化妆了快逃命！",
      replyKey: "40_41",
      isCorrect: !1
    }, {
      optionKey: "40_21",
      labelFallback: "楼下化妆大赛，免费体验送小样。",
      replyKey: "40_34",
      isCorrect: !0
    }]
  }, {
    introKey: "40_7",
    introFallback: "这幅风景画马上画完了，我要坚持画完！",
    options: [{
      optionKey: "40_22",
      labelFallback: "楼下艺术画展，小朋友作品可参展。",
      replyKey: "40_35",
      isCorrect: !0
    }, {
      optionKey: "40_23",
      labelFallback: "有坏人来了，快跟我下楼！",
      replyKey: "40_42",
      isCorrect: !1
    }, {
      optionKey: "40_24",
      labelFallback: "画画没用，赶紧逃跑！",
      replyKey: "40_42",
      isCorrect: !1
    }]
  }, {
    introKey: "40_8",
    introFallback: "怎么会缺零件呢？我必须修好才能休息！",
    options: [{
      optionKey: "40_25",
      labelFallback: "公寓遇险，立刻下楼撤离！",
      replyKey: "40_43",
      isCorrect: !1
    }, {
      optionKey: "40_26",
      labelFallback: "楼下新开了家机修店，免费送螺丝！",
      replyKey: "40_36",
      isCorrect: !0
    }, {
      optionKey: "40_27",
      labelFallback: "别修了，楼下有以旧换新活动。",
      replyKey: "40_44",
      isCorrect: !1
    }]
  }, {
    introKey: "40_9",
    introFallback: "我年纪大了，不想随便走动，安静待着就好。",
    options: [{
      optionKey: "40_28",
      labelFallback: "有杀人犯，快跑！",
      replyKey: "40_45",
      isCorrect: !1
    }, {
      optionKey: "40_29",
      labelFallback: "你孙子在楼下等你呢！",
      replyKey: "40_45",
      isCorrect: !1
    }, {
      optionKey: "40_30",
      labelFallback: "楼下有打折商品！",
      replyKey: "40_45",
      isCorrect: !1
    }]
  }],
  S = ["level40_hint1", "level40_hint2", "level40_hint3", "level40_hint4", "level40_hint5", "level40_hint6", "level40_hint7"],
  F = ["选择【楼下音乐厅免费调试老式留声机】", "选择【楼下美食集会，免费品鉴西餐】", "选择【楼下棋友对局，高手较量】", "选择【楼下化妆大赛，免费体验送小样】", "选择【楼下艺术画展，小朋友作品可参展】", "选择【楼下新开了家机修店，免费送螺丝！】", "右滑打开场右边柜子，拖拽柜中【玩具】给到老奶奶"],
  P = ["bg_2_ip", "bg_3_ip", "bg_4_ip", "bg_5_ip", "bg_6_ip", "bg_7_ip", "bg_8_ip_1"];
__recovered_export_0 = C("Level_40")(T = class extends __rea_outer_a {
  constructor(...e) {
    super(...e), this.phase = 0, this.winstate = !1, this.currentRound = 0, this.completedSteps = 0, this.isInteractionLocked = !0, this.isFailSequencePlaying = !1, this.isWardrobeOpen = !1, this.isRound7Ready = !1, this.fightFrameIndex = 0, this.voiceToken = 0, this.currentDialogueKey = "", this.swipeStart = null, this.toyOrigin = new __rea_outer_i(), this.toyDragOffset = new __rea_outer_i(), this.isToyDragging = !1, this.clickRootOrigin = new __rea_outer_i(), this.evacuated = [!1, !1, !1, !1, !1, !1, !1], this.buttons = [null, null, null], this.buttonLabels = [null, null, null], this.sceneNodes = [], this.residentNodes = [], this.endPersonNodes = [], this.currentSceneNode = null, this.gameNode = null, this.clickRootNode = null, this.backBgNode = null, this.bubbleNode = null, this.bubbleLabel = null, this.dialogBoxNode = null, this.dialogBoxLeftNode = null, this.dialogBoxRightNode = null, this.girlRootNode = null, this.girlBodyNode = null, this.girlLeftNode = null, this.girlRightNode = null, this.girlLeft1Node = null, this.girlRight1Node = null, this.girlPeekNode = null, this.s9endNode = null, this.personsNode = null, this.girlEndNode = null, this.endMurdererNode = null, this.end1Node = null, this.wardrobeNode = null, this.wardrobeOpenNode = null, this.toyNode = null, this.grandmaSitNode = null, this.grandmaStandNode = null, this.failNode = null, this.failSpriteNode = null, this.failClawNode = null, this.failMurdererNode = null, this.fightNode = null, this.fightFrameNodes = [null, null, null], this.shadowNode = null, this.demoNode = null, this.s0MurdererNode = null, this.s0MurdererOrigin = new __rea_outer_i(), this.onFightFrameTick = () => {
      this.isValid && (this.fightFrameIndex += 1, this.applyFightFrame());
    }, this.onWardrobeTouchStart = e => {
      if (!this.canHandleRound7Gesture()) return void (this.swipeStart = null);
      const t = this.getTouchWorldPoint(e);
      this.isPointInsideNode(this.wardrobeNode, t) ? this.swipeStart = t : this.swipeStart = null;
    }, this.onWardrobeTouchEnd = e => {
      if (!this.canHandleRound7Gesture() || this.isWardrobeOpen || !this.swipeStart) return void (this.swipeStart = null);
      const t = this.swipeStart;
      this.swipeStart = null;
      const i = this.getTouchWorldPoint(e);
      __rea_outer_f.isSwipeMatching(t, i, __rea_outer_m.Right) && this.openWardrobe();
    }, this.onToyTouchStart = e => {
      if (!this.canHandleToyDrag() || this.isInteractionLocked) return;
      const t = this.toyNode,
        i = (null == t ? void 0 : t.parent) ?? null;
      null != t && t.isValid && null != i && i.isValid && (this.isToyDragging = !0, this.toyOrigin = t.position.clone(), this.toyDragOffset = this.calculateTouchOffset(e, t, i), this.bringNodeToFront(t));
    }, this.onToyTouchMove = e => {
      if (!this.isToyDragging) return;
      const t = this.toyNode,
        i = (null == t ? void 0 : t.parent) ?? null;
      null != t && t.isValid && null != i && i.isValid && this.setDragNodePositionFromTouch(e, t, i, this.toyDragOffset);
    }, this.onToyTouchEnd = () => {
      if (!this.isToyDragging) return;
      this.isToyDragging = !1;
      const e = this.toyNode;
      null != e && e.isValid && (this.isNodeOverlapping(e, this.grandmaSitNode) ? this.deliverToyToGrandma() : e.setPosition(this.toyOrigin));
    }, this.onButton1Click = () => {
      this.onOptionClick(0);
    }, this.onButton2Click = () => {
      this.onOptionClick(1);
    }, this.onButton3Click = () => {
      this.onOptionClick(2);
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.allItemNum = 7, this.hasInstallNum = 0, console.log("[Level_40] loaded");
  }
  start() {
    this.resetLevelState(), this.applyInitialVisibility(), this.enterPhase0();
  }
  onDestroy() {
    this.cleanupRuntime(), super.onDestroy();
  }
  showHint() {
    if (1 !== this.phase) return;
    const e = Math.min(this.currentRound, S.length - 1),
      t = this.resolveI18nText(S[e], F[e]);
    __rea_outer_g.getInstance().showView(__rea_outer_y, void 0, {
      body: t
    });
  }
  getGameProgressSnapshot() {
    const e = Math.min(this.completedSteps, 7);
    return {
      progress: e / 7,
      label: `${e}/7`
    };
  }
  handleTimeExpired() {
    return !!(this.phase >= 2 || this.winstate || this.isFailSequencePlaying);
  }
  markAllTasksCompleted() {
    this.completedSteps = 7, this.hasInstallNum = 7, this.currentRound = 6;
    for (let e = 0; e < this.evacuated.length; e += 1) this.evacuated[e] = !0;
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.currentRound = 0, this.completedSteps = 0, this.hasInstallNum = 0, this.isInteractionLocked = !0, this.isFailSequencePlaying = !1, this.isWardrobeOpen = !1, this.isRound7Ready = !1, this.fightFrameIndex = 0, this.swipeStart = null, this.isToyDragging = !1, this.voiceToken += 1, this.stopCurrentDialogueEffect();
    for (let e = 0; e < this.evacuated.length; e += 1) this.evacuated[e] = !1;
  }
  enterPhase0() {
    this.phase = 0, this.isInteractionLocked = !0, this.currentSceneNode = this.sceneNodes[0] ?? null, __rea_outer_c.playMusic("bgm5", !0, .5), this.setInputBlocked(!0), this.playDialogue("40_1", "right", () => {
      this.isValid && (this.hideBubble(), this.moveResidentOut(this.s0MurdererNode, () => {
        this.isValid && this.playDialogue("40_2", "left", () => {
          this.isValid && this.playIntroClimbAndScroll();
        });
      }));
    });
  }
  playIntroClimbAndScroll() {
    this.setGirlPose("climb"), this.resetGirlToChannel();
    const e = this.sceneNodes[1];
    this.scrollScenes(this.currentSceneNode, e, !1, () => {
      this.isValid && (this.setNodeActive(this.girlRootNode, !1), this.setNodeActive(this.girlPeekNode, !0), this.bringNodeToFront(this.girlPeekNode), this.presentRound(0));
    });
  }
  presentRound(e) {
    if (!this.isValid) return;
    this.phase = 1, this.currentRound = e, this.isInteractionLocked = !0, this.isRound7Ready = !1, this.isWardrobeOpen = !1, this.setButtonsInteractable(!1), this.hideClickRootImmediate(), this.unregisterWardrobeHandlers(), this.unregisterToyHandlers();
    const t = V[e];
    this.applyOptionLabels(t), this.playDialogue(t.introKey, "right", () => {
      this.isValid && 1 === this.phase && (this.registerButtonHandlers(), 6 === e && (this.isRound7Ready = !0, this.registerWardrobeHandlers()), this.setInputBlocked(!1), this.showClickRootAnimated(() => {
        this.isValid && 1 === this.phase && (this.isInteractionLocked = !1, this.setButtonsInteractable(!0));
      }));
    });
  }
  onOptionClick(e) {
    if (1 !== this.phase || this.isInteractionLocked || this.isFailSequencePlaying || this.winstate) return;
    const t = V[this.currentRound],
      i = null == t ? void 0 : t.options[e];
    i && (this.isInteractionLocked = !0, this.isRound7Ready = !1, this.setButtonsInteractable(!1), this.unregisterWardrobeHandlers(), this.unregisterToyHandlers(), __rea_outer_c.playEffect_1(k), this.setInputBlocked(!0), this.hideClickRootAnimated(() => {
      this.isValid && 1 === this.phase && this.playDialogue(i.optionKey, "left", () => {
        this.isValid && 1 === this.phase && this.playDialogue(i.replyKey, "right", () => {
          this.isValid && 1 === this.phase && (i.isCorrect ? this.completeHouseholdSuccess() : this.completeHouseholdFail());
        });
      });
    }));
  }
  completeHouseholdSuccess() {
    const e = this.getExitResidentNode(this.currentRound);
    this.hideBubble(), this.setNodeActive(this.girlPeekNode, !1), this.moveResidentOut(e, () => {
      this.isValid && (this.evacuated[this.currentRound] = !0, this.completedSteps += 1, this.hasInstallNum = this.completedSteps, __rea_outer_v.getInstance().refreshGameProgress(), this.TryQuickWin() || this.advanceFromCurrentHousehold());
    });
  }
  completeHouseholdFail() {
    this.evacuated[this.currentRound] = !1, this.advanceFromCurrentHousehold();
  }
  advanceFromCurrentHousehold() {
    if (this.currentRound >= 6) return void this.travelToSettlement();
    const e = this.currentRound + 1,
      t = this.sceneNodes[e + 1];
    this.beginHouseholdTravel(t, !1, () => {
      this.presentRound(e);
    });
  }
  travelToSettlement() {
    this.applyEndPersonsVisibility(), this.setNodeActive(this.end1Node, !1), this.setNodeActive(this.endMurdererNode, !1), this.beginHouseholdTravel(this.s9endNode, !0, () => {
      this.enterPhase2();
    });
  }
  beginHouseholdTravel(e, t, i) {
    this.setInputBlocked(!0), this.hideBubble(), this.hideClickRootImmediate(), this.setGirlPose("climb"), this.resetGirlToChannel(), this.setNodeActive(this.girlPeekNode, !1), this.setNodeActive(this.girlRootNode, !0), this.bringNodeToFront(this.girlRootNode), this.scrollScenes(this.currentSceneNode, e, !0, () => {
      this.isValid && (t ? this.attachGirlToEnd() : (this.resetGirlToChannel(), this.setNodeActive(this.girlRootNode, !1), this.setNodeActive(this.girlPeekNode, !0), this.bringNodeToFront(this.girlPeekNode)), i());
    });
  }
  enterPhase2() {
    this.phase = 2, this.isInteractionLocked = !0, this.unregisterButtonHandlers(), this.unregisterWardrobeHandlers(), this.unregisterToyHandlers(), this.hideClickRootImmediate(), __rea_outer_v.getInstance().pauseTimer(), this.setInputBlocked(!0);
    this.evacuated.every(e => e) ? this.playWinSequence() : this.playFailSequence();
  }
  playWinSequence() {
    this.winstate = !0, this.playDialogue("40_46", "left", () => {
      this.isValid && (this.hideBubble(), this.enterEndMurderer(() => {
        this.scheduleOnceIfValid(() => {
          this.playFightThenSuccess();
        }, .5);
      }));
    });
  }
  playFightThenSuccess() {
    this.setNodeActive(this.personsNode, !1), this.setNodeActive(this.endMurdererNode, !1), this.setNodeActive(this.girlRootNode, !1), this.hideBubble(), this.setNodeActive(this.fightNode, !0), this.bringNodeToFront(this.fightNode), this.fightFrameIndex = 0, this.applyFightFrame(), __rea_outer_c.playEffect_1("level40_2"), this.schedule(this.onFightFrameTick, .15), this.scheduleOnceIfValid(() => {
      this.unschedule(this.onFightFrameTick), this.showLevelSuccess(0);
    }, 1);
  }
  applyFightFrame() {
    const e = this.fightFrameIndex % this.fightFrameNodes.length;
    for (let t = 0; t < this.fightFrameNodes.length; t += 1) this.setNodeActive(this.fightFrameNodes[t], t === e);
  }
  playFailSequence() {
    this.isFailSequencePlaying = !0, this.winstate = !1, this.playDialogue("40_47", "left", () => {
      this.isValid && (this.hideBubble(), this.enterEndMurderer(() => {
        __rea_outer_c.playEffect_1("level40_3"), this.playFailNodeSequence();
      }));
    });
  }
  playFailNodeSequence() {
    this.setNodeActive(this.endMurdererNode, !1), this.setNodeActive(this.failClawNode, !1), this.setNodeActive(this.failMurdererNode, !1), this.setNodeActive(this.failSpriteNode, !0), this.setNodeActive(this.failNode, !0), this.bringNodeToFront(this.failNode), this.scheduleOnceIfValid(() => {
      this.setNodeActive(this.failClawNode, !0), __rea_outer_c.playEffect_1("level40_4"), this.scheduleOnceIfValid(() => {
        this.setNodeActive(this.failClawNode, !1), this.setNodeActive(this.failMurdererNode, !0), this.playDialogue("40_48", "right", () => {
          this.isValid && (this.hideBubble(), __rea_outer_g.getInstance().showView(__rea_outer_b, __rea_outer_p.WIN_ANIMATION));
        });
      }, .2);
    }, .15);
  }
  enterEndMurderer(e) {
    const t = this.endMurdererNode;
    null != t && t.isValid ? (this.stopTweenIfValid(t), t.setPosition(w), this.setNodeActive(t, !0), this.tweenNodeTo(t, I, .4, e)) : e();
  }
  beginTimeoutFail() {
    this.isFailSequencePlaying = !0, this.phase = 2, this.winstate = !1, this.isInteractionLocked = !0, this.isRound7Ready = !1, this.unregisterButtonHandlers(), this.unregisterWardrobeHandlers(), this.unregisterToyHandlers(), this.voiceToken += 1, this.stopCurrentDialogueEffect(), this.hideBubble(), this.hideClickRootImmediate(), __rea_outer_v.getInstance().pauseTimer(), __rea_outer_g.getInstance().showView(__rea_outer_b, __rea_outer_p.WIN_ANIMATION);
  }
  canHandleRound7Gesture() {
    return 1 === this.phase && 6 === this.currentRound && this.isRound7Ready && !this.isWardrobeOpen && !this.isFailSequencePlaying && !this.winstate;
  }
  canHandleToyDrag() {
    return 1 === this.phase && 6 === this.currentRound && this.isWardrobeOpen && !this.isFailSequencePlaying && !this.winstate;
  }
  openWardrobe() {
    this.isWardrobeOpen = !0, this.isRound7Ready = !1, this.isInteractionLocked = !0, this.setButtonsInteractable(!1), this.unregisterButtonHandlers(), this.unregisterWardrobeHandlers(), __rea_outer_c.playEffect_1(k), this.setNodeActive(this.wardrobeNode, !1), this.setNodeActive(this.wardrobeOpenNode, !0), this.setNodeActive(this.toyNode, !0), this.hideClickRootAnimated(() => {}), this.registerToyHandlers(), this.isInteractionLocked = !1, this.setInputBlocked(!1);
  }
  deliverToyToGrandma() {
    this.isInteractionLocked = !0, this.isRound7Ready = !1, this.unregisterToyHandlers(), this.setInputBlocked(!0), __rea_outer_c.playEffect_1(k), this.setNodeActive(this.toyNode, !1), this.setNodeActive(this.grandmaSitNode, !1), this.setNodeActive(this.grandmaStandNode, !0), this.playDialogue("40_37", "right", () => {
      this.isValid && 1 === this.phase && this.completeHouseholdSuccess();
    });
  }
  getExitResidentNode(e) {
    return 6 === e ? this.grandmaStandNode : this.residentNodes[e] ?? null;
  }
  moveResidentOut(e, t) {
    var o;
    if (null == e || !e.isValid) return void t();
    const l = e.position.clone(),
      n = (null == (o = e.getComponent(__rea_outer_s)) ? void 0 : o.width) ?? 200,
      h = new __rea_outer_i(540 + n / 2 + 80, l.y, l.z);
    this.tweenNodeTo(e, h, .5, () => {
      this.setNodeActive(e, !1), t();
    });
  }
  scrollScenes(e, t, s, o) {
    if (null == t || !t.isValid) return console.warn("[Level_40] missing next scene"), void o();
    this.setNodeActive(t, !0);
    const l = null != e && e.isValid ? e.position.clone() : new __rea_outer_i();
    t.setPosition(l.x, l.y - 1312, l.z);
    let n = 1 + (null != e && e.isValid ? 1 : 0) + (s ? 1 : 0);
    const h = () => {
      n -= 1, n > 0 || (null != e && e.isValid && (this.setNodeActive(e, !1), e.setPosition(0, 0, 0)), t.setPosition(0, 0, 0), this.currentSceneNode = t, o());
    };
    if (null != e && e.isValid && this.tweenNodeTo(e, new __rea_outer_i(l.x, l.y + 1312, l.z), .5, h), this.tweenNodeTo(t, new __rea_outer_i(l.x, l.y, l.z), .5, h), s) {
      const e = new __rea_outer_i(R.x, R.y - 200, R.z);
      this.tweenNodeTo(this.girlRootNode, e, .5, h);
    }
  }
  attachGirlToEnd() {
    const e = this.girlRootNode,
      t = this.girlEndNode;
    null != e && e.isValid && null != t && t.isValid && (this.stopTweenIfValid(e), e.setParent(t), e.setPosition(0, 0, 0), this.setGirlPose("stand"), this.setNodeActive(e, !0), this.setNodeActive(this.girlPeekNode, !1));
  }
  resetGirlToChannel() {
    const e = this.girlRootNode;
    null != e && e.isValid && (this.stopTweenIfValid(e), e.setPosition(R));
  }
  resetS0Murderer() {
    const e = this.s0MurdererNode;
    null != e && e.isValid && (this.stopTweenIfValid(e), e.setPosition(this.s0MurdererOrigin), this.setNodeActive(e, !0));
  }
  setGirlPose(e) {
    const t = "climb" === e;
    this.setNodeActive(this.girlBodyNode, !0), this.setNodeActive(this.girlLeftNode, !t), this.setNodeActive(this.girlRightNode, !t), this.setNodeActive(this.girlLeft1Node, t), this.setNodeActive(this.girlRight1Node, t);
  }
  applyEndPersonsVisibility() {
    this.setNodeActive(this.personsNode, !0);
    for (let e = 0; e < this.endPersonNodes.length; e += 1) this.setNodeActive(this.endPersonNodes[e], !0 === this.evacuated[e]);
  }
  playDialogue(e, t, i) {
    this.voiceToken += 1;
    const s = this.voiceToken;
    this.showBubble(e, t);
    let o = !1;
    const l = () => {
        !o && this.isValid && s === this.voiceToken && (o = !0, this.unschedule(n), i());
      },
      n = () => {
        l();
      };
    this.scheduleOnce(n, 8), this.stopCurrentDialogueEffect(), this.currentDialogueKey = e, __rea_outer_c.playEffect_1(e, l);
  }
  stopCurrentDialogueEffect() {
    __rea_outer_c.stopVoice(), this.currentDialogueKey && (__rea_outer_c.stopOneEffect(this.currentDialogueKey), this.currentDialogueKey = "");
  }
  showBubble(e, t) {
    this.bubbleLabel && (this.bubbleLabel.string = this.resolveI18nText(e, A[e] ?? e), this.setNodeActive(this.bubbleLabel.node, !0)), this.setNodeActive(this.bubbleNode, !0), this.setNodeActive(this.dialogBoxNode, !0), this.setNodeActive(this.dialogBoxLeftNode, "left" === t), this.setNodeActive(this.dialogBoxRightNode, "right" === t);
  }
  hideBubble() {
    this.setNodeActive(this.bubbleNode, !1);
  }
  applyOptionLabels(e) {
    for (let t = 0; t < 3; t += 1) {
      const i = this.buttonLabels[t],
        s = e.options[t];
      i && s && (i.string = this.resolveI18nText(s.optionKey, s.labelFallback));
    }
  }
  resolveI18nText(e, t) {
    const i = __rea_outer_N.getInstance().getKey(e);
    return i && "?" !== i && i !== e ? i : t;
  }
  showClickRootAnimated(e) {
    const t = this.clickRootNode;
    if (null == t || !t.isValid) return void e();
    __rea_outer__(t);
    const i = this.clickRootOrigin;
    t.setPosition(i.x, i.y - 150, i.z), this.setNodeActive(t, !0), __rea_outer_o(t).to(.5, {
      position: i.clone()
    }).call(() => {
      this.isValid && e();
    }).start();
  }
  hideClickRootAnimated(e) {
    const t = this.clickRootNode;
    if (null == t || !t.isValid) return void e();
    __rea_outer__(t);
    const s = this.clickRootOrigin,
      l = new __rea_outer_i(s.x, s.y - 150, s.z);
    __rea_outer_o(t).to(.5, {
      position: l
    }).call(() => {
      this.isValid && (this.setNodeActive(t, !1), t.setPosition(s), e());
    }).start();
  }
  hideClickRootImmediate() {
    const e = this.clickRootNode;
    null != e && e.isValid && (__rea_outer__(e), e.setPosition(this.clickRootOrigin), this.setNodeActive(e, !1));
  }
  applyInitialVisibility() {
    var e;
    for (let e = 0; e < this.sceneNodes.length; e += 1) this.setNodeActive(this.sceneNodes[e], 0 === e);
    this.setNodeActive(this.s9endNode, !1), this.setNodeActive(this.end1Node, !1), this.setNodeActive(this.endMurdererNode, !1), this.setNodeActive(this.girlPeekNode, !1), this.setNodeActive(this.girlRootNode, !0), null != (e = this.girlRootNode) && e.isValid && this.girlRootNode.setPosition(B), this.setGirlPose("climb"), this.resetS0Murderer(), this.setNodeActive(this.wardrobeNode, !0), this.setNodeActive(this.wardrobeOpenNode, !1), this.setNodeActive(this.toyNode, !1), this.setNodeActive(this.grandmaSitNode, !0), this.setNodeActive(this.grandmaStandNode, !1), this.setNodeActive(this.failNode, !1), this.setNodeActive(this.failClawNode, !1), this.setNodeActive(this.failMurdererNode, !1), this.setNodeActive(this.fightNode, !1), this.setNodeActive(this.shadowNode, !1), this.setNodeActive(this.demoNode, !1), this.setNodeActive(this.clickRootNode, !1), this.setNodeActive(this.backBgNode, !0), this.hideBubble();
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
  registerWardrobeHandlers() {
    this.unregisterWardrobeHandlers();
    const e = this.wardrobeNode;
    null != e && e.isValid ? (e.on(__rea_outer_n.EventType.TOUCH_START, this.onWardrobeTouchStart, this), e.on(__rea_outer_n.EventType.TOUCH_END, this.onWardrobeTouchEnd, this), e.on(__rea_outer_n.EventType.TOUCH_CANCEL, this.onWardrobeTouchEnd, this)) : console.warn("[Level_40] missing s7/bg_8_wardrobe");
  }
  unregisterWardrobeHandlers() {
    const e = this.wardrobeNode;
    null != e && e.isValid && (e.off(__rea_outer_n.EventType.TOUCH_START, this.onWardrobeTouchStart, this), e.off(__rea_outer_n.EventType.TOUCH_END, this.onWardrobeTouchEnd, this), e.off(__rea_outer_n.EventType.TOUCH_CANCEL, this.onWardrobeTouchEnd, this));
  }
  registerToyHandlers() {
    this.unregisterToyHandlers();
    const e = this.toyNode;
    null != e && e.isValid ? (e.on(__rea_outer_n.EventType.TOUCH_START, this.onToyTouchStart, this), e.on(__rea_outer_n.EventType.TOUCH_MOVE, this.onToyTouchMove, this), e.on(__rea_outer_n.EventType.TOUCH_END, this.onToyTouchEnd, this), e.on(__rea_outer_n.EventType.TOUCH_CANCEL, this.onToyTouchEnd, this)) : console.warn("[Level_40] missing s7/bg_8_wardrobe_2");
  }
  unregisterToyHandlers() {
    const e = this.toyNode;
    null != e && e.isValid && (e.off(__rea_outer_n.EventType.TOUCH_START, this.onToyTouchStart, this), e.off(__rea_outer_n.EventType.TOUCH_MOVE, this.onToyTouchMove, this), e.off(__rea_outer_n.EventType.TOUCH_END, this.onToyTouchEnd, this), e.off(__rea_outer_n.EventType.TOUCH_CANCEL, this.onToyTouchEnd, this));
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
  tweenNodeTo(e, t, i, s) {
    null != e && e.isValid ? (__rea_outer__(e), __rea_outer_o(e).to(i, {
      position: t.clone()
    }).call(() => {
      this.isValid && s();
    }).start()) : s();
  }
  cleanupRuntime() {
    this.unscheduleAllCallbacks(), this.unregisterButtonHandlers(), this.unregisterWardrobeHandlers(), this.unregisterToyHandlers(), this.voiceToken += 1, this.stopCurrentDialogueEffect(), this.stopTweenIfValid(this.clickRootNode), this.stopTweenIfValid(this.girlRootNode), this.stopTweenIfValid(this.endMurdererNode), this.stopTweenIfValid(this.toyNode);
    for (let e = 0; e < this.sceneNodes.length; e += 1) this.stopTweenIfValid(this.sceneNodes[e]);
    this.stopTweenIfValid(this.s9endNode);
    for (let e = 0; e < this.residentNodes.length; e += 1) this.stopTweenIfValid(this.residentNodes[e]);
    this.stopTweenIfValid(this.grandmaStandNode), this.stopTweenIfValid(this.s0MurdererNode);
  }
  stopTweenIfValid(e) {
    null != e && e.isValid && __rea_outer__(e);
  }
  scheduleOnceIfValid(e, t) {
    this.scheduleOnce(() => {
      this.isValid && e();
    }, t);
  }
  isPointInsideNode(e, t) {
    if (null == e || !e.isValid || !e.activeInHierarchy) return !1;
    const i = e.getComponent(__rea_outer_s);
    return !!i && i.getBoundingBoxToWorld().contains(t);
  }
  isNodeOverlapping(e, t) {
    return __rea_outer_u.isDragNearTarget(e, t);
  }
  getTouchWorldPoint(e) {
    const t = e.getUILocation();
    return new __rea_outer_h(t.x, t.y);
  }
  getTouchLocalPosition(e, t) {
    const o = e.getUILocation(),
      l = t.getComponent(__rea_outer_s);
    return l ? l.convertToNodeSpaceAR(new __rea_outer_i(o.x, o.y, 0)) : __rea_outer_i.ZERO.clone();
  }
  calculateTouchOffset(e, t, s) {
    const o = this.getTouchLocalPosition(e, s);
    return new __rea_outer_i(t.position.x - o.x, t.position.y - o.y, 0);
  }
  setDragNodePositionFromTouch(e, t, i, s) {
    const o = this.getTouchLocalPosition(e, i);
    t.setPosition(o.x + s.x, o.y + s.y, t.position.z);
  }
  bringNodeToFront(e) {
    var t;
    null != e && e.isValid && null != (t = e.parent) && t.isValid && e.setSiblingIndex(e.parent.children.length - 1);
  }
  resolveReferences() {
    var e, t, i, s, o, n, h, r, a, u, c, N, g, p, y, b, v, _, f, m, T, C, k, B, R, w, I, A;
    this.gameNode = this.node.getChildByPath("UIPanel/gameNode"), this.clickRootNode = this.node.getChildByPath("UIPanel/click_root"), this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.bubbleNode = this.node.getChildByPath("UIPanel/bubble"), this.demoNode = this.node.getChildByPath("UIPanel/demo"), this.dialogBoxNode = (null == (e = this.bubbleNode) ? void 0 : e.getChildByName("dialog_box")) ?? null, this.dialogBoxLeftNode = (null == (t = this.bubbleNode) ? void 0 : t.getChildByName("dialog_box_left")) ?? null, this.dialogBoxRightNode = (null == (i = this.bubbleNode) ? void 0 : i.getChildByName("dialog_box_right")) ?? null, this.bubbleLabel = (null == (s = this.dialogBoxNode) || null == (s = s.getChildByName("Label")) ? void 0 : s.getComponent(__rea_outer_d)) ?? null, null != (o = this.clickRootNode) && o.isValid && (this.clickRootOrigin = this.clickRootNode.position.clone());
    for (let e = 0; e < 3; e += 1) {
      var V, S;
      const t = (null == (V = this.clickRootNode) ? void 0 : V.getChildByName(`Button${e + 1}`)) ?? null;
      this.buttons[e] = (null == t ? void 0 : t.getComponent(__rea_outer_l)) ?? null, this.buttonLabels[e] = (null == t || null == (S = t.getChildByName("Label")) ? void 0 : S.getComponent(__rea_outer_d)) ?? null;
    }
    const F = this.gameNode;
    this.sceneNodes.length = 0;
    for (let e = 0; e < 8; e += 1) this.sceneNodes.push((null == F ? void 0 : F.getChildByName(`s${e}`)) ?? null);
    this.s9endNode = (null == F ? void 0 : F.getChildByName("s9end")) ?? null, this.girlRootNode = (null == F ? void 0 : F.getChildByName("girlnode")) ?? null, this.girlBodyNode = (null == (n = this.girlRootNode) ? void 0 : n.getChildByName("girl")) ?? null, this.girlLeftNode = (null == (h = this.girlRootNode) ? void 0 : h.getChildByName("girl_left")) ?? null, this.girlRightNode = (null == (r = this.girlRootNode) ? void 0 : r.getChildByName("girl_right")) ?? null, this.girlLeft1Node = (null == (a = this.girlRootNode) ? void 0 : a.getChildByName("girl_left_1")) ?? null, this.girlRight1Node = (null == (u = this.girlRootNode) ? void 0 : u.getChildByName("girl_right_1")) ?? null, this.girlPeekNode = (null == F ? void 0 : F.getChildByName("girl_1")) ?? null, this.shadowNode = (null == F ? void 0 : F.getChildByName("shadow")) ?? null, this.failNode = (null == F ? void 0 : F.getChildByName("failnode")) ?? null, this.failSpriteNode = (null == (c = this.failNode) ? void 0 : c.getChildByName("Sprite")) ?? null, this.failClawNode = (null == (N = this.failSpriteNode) ? void 0 : N.getChildByName("failure")) ?? null, this.failMurdererNode = (null == (g = this.failNode) ? void 0 : g.getChildByName("murderer_1")) ?? null, this.fightNode = (null == F ? void 0 : F.getChildByName("fight")) ?? null, this.fightFrameNodes[0] = (null == (p = this.fightNode) ? void 0 : p.getChildByName("fight_1")) ?? null, this.fightFrameNodes[1] = (null == (y = this.fightNode) ? void 0 : y.getChildByName("fight_2")) ?? null, this.fightFrameNodes[2] = (null == (b = this.fightNode) ? void 0 : b.getChildByName("fight_3")) ?? null, this.personsNode = (null == (v = this.s9endNode) ? void 0 : v.getChildByName("persons")) ?? null, this.girlEndNode = (null == (_ = this.personsNode) ? void 0 : _.getChildByName("girlendnode")) ?? null, this.endMurdererNode = (null == (f = this.s9endNode) ? void 0 : f.getChildByName("murderer")) ?? null, this.end1Node = (null == (m = this.s9endNode) ? void 0 : m.getChildByName("end_1")) ?? null, this.endPersonNodes.length = 0;
    for (let e = 0; e < P.length; e += 1) {
      var O;
      this.endPersonNodes.push((null == (O = this.personsNode) ? void 0 : O.getChildByName(P[e])) ?? null);
    }
    const E = this.sceneNodes[7];
    this.wardrobeNode = (null == E ? void 0 : E.getChildByName("bg_8_wardrobe")) ?? null, this.wardrobeOpenNode = (null == E ? void 0 : E.getChildByName("bg_8_wardrobe_1")) ?? null, this.toyNode = (null == E ? void 0 : E.getChildByName("bg_8_wardrobe_2")) ?? null, this.grandmaSitNode = (null == E ? void 0 : E.getChildByName("bg_8_ip")) ?? null, this.grandmaStandNode = (null == E ? void 0 : E.getChildByName("bg_8_ip_1")) ?? null, this.residentNodes.length = 0, this.residentNodes.push((null == (T = this.sceneNodes[1]) ? void 0 : T.getChildByName("bg_2_ip")) ?? null), this.residentNodes.push((null == (C = this.sceneNodes[2]) ? void 0 : C.getChildByName("bg_3_ip")) ?? null), this.residentNodes.push((null == (k = this.sceneNodes[3]) ? void 0 : k.getChildByName("bg_4_ip")) ?? null), this.residentNodes.push((null == (B = this.sceneNodes[4]) ? void 0 : B.getChildByName("bg_5_ip")) ?? null), this.residentNodes.push((null == (R = this.sceneNodes[5]) ? void 0 : R.getChildByName("bg_6_ip")) ?? null), this.residentNodes.push((null == (w = this.sceneNodes[6]) ? void 0 : w.getChildByName("bg_7_ip")) ?? null), this.residentNodes.push(this.grandmaSitNode), this.s0MurdererNode = (null == (I = this.sceneNodes[0]) ? void 0 : I.getChildByName("murderer")) ?? null, null != (A = this.s0MurdererNode) && A.isValid && (this.s0MurdererOrigin = this.s0MurdererNode.position.clone()), this.logMissingNodes();
  }
  logMissingNodes() {
    const e = [],
      t = (t, i) => {
        t || e.push(i);
      };
    t(this.clickRootNode, "UIPanel/click_root"), t(this.bubbleNode, "UIPanel/bubble"), t(this.backBgNode, "UIPanel/backBG"), t(this.girlRootNode, "gameNode/girlnode"), t(this.girlPeekNode, "gameNode/girl_1"), t(this.s0MurdererNode, "s0/murderer"), t(this.s9endNode, "gameNode/s9end"), t(this.wardrobeNode, "s7/bg_8_wardrobe"), t(this.toyNode, "s7/bg_8_wardrobe_2"), t(this.grandmaSitNode, "s7/bg_8_ip"), t(this.failNode, "gameNode/failnode"), t(this.fightNode, "gameNode/fight");
    for (let e = 0; e < 8; e += 1) t(this.sceneNodes[e], `gameNode/s${e}`);
    e.length > 0 && console.warn("[Level_40] prefab 待办清单:", e.join(", "));
  }
  setNodeActive(e, t) {
    null != e && e.isValid && (e.active = t);
  }
}) || T;
__rea_outer_t._RF.pop();
export { __recovered_export_0 as default };
