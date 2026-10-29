// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_76.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { Node as __rea_outer_i } from "cc";
import { Button as __rea_outer_s } from "cc";
import { Vec2 as __rea_outer_o } from "cc";
import { Vec3 as __rea_outer_n } from "cc";
import { tween as __rea_outer_h } from "cc";
import { UITransform as __rea_outer_a } from "cc";
import { Rect as __rea_outer_r } from "cc";
import { Label as __rea_outer_c } from "cc";
import { _decorator as __rea_outer_l } from "cc";
import { default as __rea_outer_d } from "./LevelBase";
import { default as __rea_outer_p } from "./clue-hit-tester";
import { default as __rea_outer_u } from "./AudioManager";
import { I18nController as __rea_outer_g } from "./i18n-controller";
import { UIManager as __rea_outer_f } from "./ui-manager";
import { UILayer as __rea_outer_m } from "./ui-layer";
import { UIHint as __rea_outer_N } from "./uihint";
import { UIFail as __rea_outer_v } from "./uifail";
import { GameController as __rea_outer_w } from "./GameController";
import { setNodeOpacity as __rea_outer__ } from "./CocosCompat";
import { stopAllTweens as __rea_outer_y } from "./CocosCompat";
import { default as __rea_outer_T } from "./ActionSystem";
let __recovered_export_0;
var S;
__rea_outer_t._RF.push({}, "82f6fm+UUpHabAgXPPcRsyj", "Level_76", void 0);
const {
    ccclass: k
  } = __rea_outer_l,
  I = "level76_2",
  B = 15,
  A = {
    2: 1,
    3: 1,
    5: 1,
    10: 9,
    11: 10,
    12: 11,
    13: 12,
    14: 13
  },
  C = ["bg", "mother", "mother_expression", "mother_overcoat", "mother_hair", "mother_hand", "wife", "wife_bag", "wife_skirt", "wife_ear_stud", "man", "man1", "man2"],
  P = ["bg1", "bg_end", "bg_end_1", "mother_expression1", "mother_money", "mother_photo", "mother_necklace", "mother_dentures", "mother_skirt", "mother_watermelon", "mother_belly", "wife_awkward", "wife_wife3", "wife_wife2", "wife_wife1", "wife_wife", "wife_shoes", "wife_bag1", "man_1", "man_angry", "man_expression", "man_shocked", "spinach", "Lightning", "Lightning1", "prompt_box"],
  L = [{
    stepId: 1,
    nodeName: "mother_overcoat",
    direction: "down",
    phase: "complete"
  }, {
    stepId: 2,
    nodeName: "mother_money",
    direction: "down",
    phase: "complete"
  }, {
    stepId: 3,
    nodeName: "mother_belly",
    direction: "down",
    phase: "complete"
  }, {
    stepId: 4,
    nodeName: "mother_necklace",
    direction: "down",
    phase: "finish-reveal"
  }, {
    stepId: 5,
    nodeName: "mother_skirt",
    direction: "up",
    phase: "start-reveal"
  }, {
    stepId: 5,
    nodeName: "mother_photo",
    direction: "down",
    phase: "finish-reveal"
  }, {
    stepId: 6,
    nodeName: "mother_hair",
    direction: "down",
    phase: "complete"
  }, {
    stepId: 7,
    nodeName: "mother_dentures",
    direction: "down",
    phase: "complete"
  }, {
    stepId: 8,
    nodeName: "wife_bag",
    direction: "down",
    phase: "complete"
  }, {
    stepId: 9,
    nodeName: "wife_skirt",
    direction: "down",
    phase: "complete"
  }, {
    stepId: 10,
    nodeName: "wife_shoes",
    direction: "down",
    phase: "complete"
  }, {
    stepId: 11,
    nodeName: "wife_wife",
    direction: "down",
    phase: "complete"
  }, {
    stepId: 12,
    nodeName: "wife_wife1",
    direction: "down",
    phase: "complete"
  }, {
    stepId: 13,
    nodeName: "wife_wife2",
    direction: "down",
    phase: "complete"
  }, {
    stepId: 14,
    nodeName: "wife_wife3",
    direction: "down",
    phase: "complete"
  }, {
    stepId: 15,
    nodeName: "touch-ear",
    direction: "down",
    phase: "complete"
  }],
  b = {
    1: {
      hide: [],
      show: ["mother_skirt", "mother_belly", "mother_money"],
      fall: ["mother_overcoat"],
      face: "mother",
      voiceKey: "76_2"
    },
    2: {
      hide: [],
      show: [],
      fall: ["mother_money"],
      face: "mother",
      voiceKey: "76_3"
    },
    3: {
      hide: ["mother_belly"],
      show: ["mother_watermelon"],
      fall: ["mother_watermelon"],
      face: "mother",
      voiceKey: "76_4"
    },
    4: {
      hide: [],
      show: [],
      fall: ["mother_necklace"],
      face: "mother",
      voiceKey: "76_5"
    },
    5: {
      hide: [],
      show: [],
      fall: ["mother_photo"],
      face: "mother",
      voiceKey: "76_6"
    },
    6: {
      hide: [],
      show: [],
      fall: ["mother_hair"],
      face: "mother",
      voiceKey: "76_7"
    },
    7: {
      hide: [],
      show: ["mother_dentures"],
      fall: ["mother_dentures"],
      face: "mother",
      voiceKey: "76_8"
    },
    8: {
      hide: ["wife_bag"],
      show: ["wife_bag1"],
      fall: ["wife_bag1"],
      face: "wife",
      voiceKey: "76_9"
    },
    9: {
      hide: [],
      show: ["wife_shoes", "wife_wife"],
      fall: ["wife_skirt"],
      face: "wife",
      voiceKey: "76_10"
    },
    10: {
      hide: [],
      show: [],
      fall: ["wife_shoes"],
      face: "wife",
      voiceKey: "76_11"
    },
    11: {
      hide: [],
      show: ["wife_wife1"],
      fall: ["wife_wife"],
      face: "wife",
      voiceKey: "76_12"
    },
    12: {
      hide: [],
      show: ["wife_wife2"],
      fall: ["wife_wife1"],
      face: "wife",
      voiceKey: "76_13"
    },
    13: {
      hide: [],
      show: ["wife_wife3"],
      fall: ["wife_wife2"],
      face: "wife",
      voiceKey: "76_14"
    },
    14: {
      hide: [],
      show: [],
      fall: ["wife_wife3"],
      face: "wife",
      voiceKey: "76_15"
    },
    15: {
      hide: [],
      show: [],
      fall: ["wife_ear_stud"],
      face: "wife",
      voiceKey: ""
    }
  };
__recovered_export_0 = k("Level_76")(S = class extends __rea_outer_d {
  constructor(...e) {
    super(...e), this.phase = 0, this.winstate = !1, this.gameNode = null, this.backBgNode = null, this.promptBoxNode = null, this.promptLabel = null, this.wifeButtonNode = null, this.motherButtonNode = null, this.spinachCarry = null, this.nodeByName = new Map(), this.originByName = new Map(), this.completedSteps = new Set(), this.dragState = null, this.pointerStart = null, this.voiceToken = 0, this.motherFaceToken = 0, this.wifeFaceToken = 0, this.fallGeneration = 0, this.lightningToken = 0, this.thunderToken = 0, this.isInputBlocked = !1, this.isNecklaceRevealed = !1, this.isPhotoRevealed = !1, this.isRainStarted = !1, this.onChoiceButtonClick = () => {
      this.canAcceptInput() && this.isRainStarted && this.enterFail();
    }, this.onLightningTick = () => {
      !this.isValid || this.phase >= 2 || !this.isRainStarted || this.flashLightning();
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.allItemNum = B, this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.enterPhase0();
  }
  onDestroy() {
    this.cleanupRuntime(!this.shouldSkipStopLevelAudio()), super.onDestroy();
  }
  handleTimeExpired() {
    return !1;
  }
  showHint() {
    if (1 !== this.phase || this.isInputBlocked) return;
    const e = this.getLowestUnfinishedStep() ?? 16,
      t = __rea_outer_g.getInstance().getKey(`level76_hint${e}`);
    __rea_outer_f.getInstance().showView(__rea_outer_N, void 0, {
      body: t
    });
  }
  getGameProgressSnapshot() {
    const e = Math.min(this.hasInstallNum, B);
    return {
      progress: e / B,
      label: `${e}/15`
    };
  }
  markAllTasksCompleted() {
    this.hasInstallNum = B;
    for (let e = 1; e <= B; e += 1) this.completedSteps.add(e);
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.completedSteps.clear(), this.dragState = null, this.pointerStart = null, this.voiceToken += 1, this.motherFaceToken += 1, this.wifeFaceToken += 1, this.fallGeneration += 1, this.isInputBlocked = !1, this.isNecklaceRevealed = !1, this.isPhotoRevealed = !1, this.isRainStarted = !1, this.hasInstallNum = 0, this.allItemNum = B, this.unscheduleAllCallbacks(), this.stopThunder(), this.stopLightning(), this.stopShake(), __rea_outer_u.stopVoice(), this.returnSpinach(), this.restoreOrigins();
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_u.playMusic("bgm3", !0, .5), __rea_outer_w.getInstance().pauseTimer(), this.applyInitialVisibility(), this.registerInputHandlers(), this.startShake(), this.setInputBlocked(!0), __rea_outer_w.getInstance().refreshGameProgress(), this.playDialogue("76_1", () => {
      this.isValid && 0 === this.phase && this.enterPhase1();
    });
  }
  skipOpeningToPlay() {
    return 0 === this.phase && (this.voiceToken += 1, this.stopOpeningDialogue(), this.enterPhase1(), !0);
  }
  enterPhase1() {
    0 === this.phase && (this.phase = 1, this.hidePrompt(), this.setInputBlocked(!1), __rea_outer_w.getInstance().resumeTimer(), __rea_outer_w.getInstance().refreshGameProgress());
  }
  applyInitialVisibility() {
    this.setNodeActive(this.gameNode, !0), C.forEach(e => {
      this.setNodeActive(this.getNode(e), !0);
    }), P.forEach(e => {
      this.setNodeActive(this.getNode(e), !1);
    }), this.setNodeActive(this.getNode("clicks"), !1), this.setNodeActive(this.getNode("drags"), !1), this.setNodeActive(this.getNode("swips"), !1), this.setNodeActive(this.node.getChildByPath("UIPanel/demo"), !1), this.setNodeActive(this.wifeButtonNode, !1), this.setNodeActive(this.motherButtonNode, !1), this.setNodeActive(this.backBgNode, !1);
  }
  registerInputHandlers() {
    this.node.off(__rea_outer_i.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(__rea_outer_i.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(__rea_outer_i.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(__rea_outer_i.EventType.TOUCH_CANCEL, this.onTouchCancel, this), this.node.on(__rea_outer_i.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(__rea_outer_i.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(__rea_outer_i.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(__rea_outer_i.EventType.TOUCH_CANCEL, this.onTouchCancel, this), this.bindChoiceButton(this.wifeButtonNode), this.bindChoiceButton(this.motherButtonNode);
  }
  unregisterInputHandlers() {
    var e;
    null != (e = this.node) && e.isValid && (this.node.off(__rea_outer_i.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(__rea_outer_i.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(__rea_outer_i.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(__rea_outer_i.EventType.TOUCH_CANCEL, this.onTouchCancel, this)), this.unbindChoiceButton(this.wifeButtonNode), this.unbindChoiceButton(this.motherButtonNode);
  }
  bindChoiceButton(e) {
    null != e && e.isValid && (e.off(__rea_outer_s.EventType.CLICK, this.onChoiceButtonClick, this), e.on(__rea_outer_s.EventType.CLICK, this.onChoiceButtonClick, this));
  }
  unbindChoiceButton(e) {
    null != e && e.isValid && e.off(__rea_outer_s.EventType.CLICK, this.onChoiceButtonClick, this);
  }
  onTouchStart(e) {
    if (!this.canAcceptInput() || this.dragState) return;
    const t = e.getUILocation();
    this.isPointOnChoiceButton(t) || this.tryBeginSpinachDrag(t, e) ? this.pointerStart = null : this.pointerStart = new __rea_outer_o(t.x, t.y);
  }
  onTouchMove(e) {
    var t;
    this.dragState && null != (t = this.spinachCarry) && t.node.isValid && this.setDragPosition(e, this.spinachCarry.node, this.dragState.touchOffset);
  }
  onTouchEnd(e) {
    if (this.dragState) return void this.finishSpinachDrag(e.getUILocation());
    if (!this.pointerStart || !this.canAcceptInput()) return void (this.pointerStart = null);
    const t = this.pointerStart;
    this.pointerStart = null, this.resolvePointer(t, e.getUILocation());
  }
  onTouchCancel() {
    this.dragState && (this.dragState = null, this.returnSpinach()), this.pointerStart = null;
  }
  tryBeginSpinachDrag(e, t) {
    const i = this.spinachCarry;
    return !!(this.isRainStarted && null != i && i.node.isValid && i.node.activeInHierarchy) && !!this.containsPoint(i.node, e, !1) && (this.liftSpinach(), this.dragState = {
      touchOffset: this.calculateTouchOffset(t, i.node),
      startPoint: new __rea_outer_o(e.x, e.y)
    }, !0);
  }
  finishSpinachDrag(e) {
    var t;
    const i = this.dragState;
    if (this.dragState = null, !i || null == (t = this.spinachCarry) || !t.node.isValid) return void this.returnSpinach();
    const s = __rea_outer_o.distance(i.startPoint, e) >= 30,
      n = this.isCenterInside(this.spinachCarry.node, this.getNode("man"));
    s && n && this.canAcceptInput() && this.isRainStarted ? this.enterSuccess() : this.returnSpinach();
  }
  resolvePointer(e, t) {
    __rea_outer_o.distance(e, t) >= 30 ? this.resolveSwipe(e, t) : this.tryClickNecklace(e);
  }
  resolveSwipe(e, t) {
    const i = this.getSwipeDirection(e, t);
    if (!i) return;
    const s = this.pickSwipeHotspot(e, i);
    s && ("start-reveal" !== s.phase ? this.finishStep(s.stepId) : this.revealPhoto());
  }
  tryClickNecklace(e) {
    this.isNecklaceRevealed || this.completedSteps.has(4) || !this.isPrerequisiteMet(4) || this.containsPoint(this.getNode("mother_necklace"), e, !0) && this.revealNecklace();
  }
  revealNecklace() {
    !this.canAcceptInput() || this.isNecklaceRevealed || this.completedSteps.has(4) || (this.isNecklaceRevealed = !0, this.playActionSound(), this.setNodeActive(this.getNode("mother_necklace"), !0));
  }
  revealPhoto() {
    !this.canAcceptInput() || this.isPhotoRevealed || this.completedSteps.has(5) || this.isPrerequisiteMet(5) && (this.isPhotoRevealed = !0, this.playActionSound(), this.setNodeActive(this.getNode("mother_skirt"), !1), this.setNodeActive(this.getNode("mother_photo"), !0));
  }
  finishStep(e) {
    if (!this.canAcceptInput() || this.completedSteps.has(e) || !this.isPrerequisiteMet(e)) return;
    const t = b[e];
    t && (this.completedSteps.add(e), this.playActionSound(), this.applyPresentation(t), this.hasInstallNum = this.completedSteps.size, __rea_outer_w.getInstance().refreshGameProgress(), this.completedSteps.size >= B ? this.scheduleOnce(() => {
      this.isValid && 1 === this.phase && !this.isRainStarted && this.enterRain();
    }, 1) : t.voiceKey ? this.playDialogue(t.voiceKey) : this.cancelDialogue());
  }
  applyPresentation(e) {
    e.hide.forEach(e => {
      this.setNodeActive(this.getNode(e), !1);
    }), e.show.forEach(e => {
      this.setNodeActive(this.getNode(e), !0);
    }), e.fall.forEach(e => {
      this.fallNode(e);
    }), "mother" !== e.face ? this.showWifeFace() : this.showMotherFace();
  }
  fallNode(e) {
    const t = this.getNode(e);
    if (null == t || !t.isValid) return;
    this.setNodeActive(t, !0);
    const i = this.fallGeneration,
      s = new __rea_outer_n(t.position.x, t.position.y - 500, t.position.z);
    __rea_outer_h(t).to(.5, {
      position: s
    }).call(() => {
      t.isValid && i === this.fallGeneration && (t.active = !1);
    }).start();
  }
  showMotherFace() {
    this.motherFaceToken += 1;
    const e = this.motherFaceToken;
    this.setNodeActive(this.getNode("mother_expression"), !1), this.setNodeActive(this.getNode("mother_expression1"), !0), this.scheduleOnce(() => {
      this.isValid && e === this.motherFaceToken && (this.setNodeActive(this.getNode("mother_expression1"), !1), this.setNodeActive(this.getNode("mother_expression"), !0));
    }, 1);
  }
  showWifeFace() {
    this.wifeFaceToken += 1;
    const e = this.wifeFaceToken;
    this.setNodeActive(this.getNode("wife_awkward"), !0), this.scheduleOnce(() => {
      this.isValid && e === this.wifeFaceToken && this.setNodeActive(this.getNode("wife_awkward"), !1);
    }, 1);
  }
  enterRain() {
    1 !== this.phase || this.isRainStarted || (this.isRainStarted = !0, this.setNodeActive(this.getNode("bg"), !1), this.setNodeActive(this.getNode("bg1"), !0), this.setNodeActive(this.getNode("spinach"), !0), this.setNodeActive(this.getNode("man_expression"), !0), this.setNodeActive(this.getNode("man_shocked"), !0), this.setNodeActive(this.wifeButtonNode, !0), this.setNodeActive(this.motherButtonNode, !0), this.startLightning(), this.playThunderLoop(), this.playDialogue("76_16"));
  }
  enterSuccess() {
    this.phase >= 2 || (this.phase = 2, this.winstate = !0, this.setInputBlocked(!0), this.setNodeActive(this.wifeButtonNode, !1), this.setNodeActive(this.motherButtonNode, !1), __rea_outer_w.getInstance().pauseTimer(), this.stopThunder(), this.stopLightning(), this.stopShake(), this.setNodeActive(this.getNode("man1"), !1), this.setNodeActive(this.getNode("man2"), !1), this.setNodeActive(this.getNode("man"), !1), this.setNodeActive(this.getNode("man_expression"), !1), this.setNodeActive(this.getNode("man_shocked"), !1), this.setNodeActive(this.getNode("man_1"), !0), this.setNodeActive(this.getNode("spinach"), !1), this.playActionSound(), __rea_outer_u.playEffect_1("level76_3"), this.scheduleOnce(() => {
      this.isValid && 2 === this.phase && this.winstate && this.playWinLines();
    }, .5));
  }
  playWinLines() {
    this.playDialogue("76_18", () => {
      this.scheduleOnce(() => {
        this.isValid && 2 === this.phase && this.winstate && (this.setNodeActive(this.getNode("spinach"), !1), this.setNodeActive(this.getNode("bg_end"), !0), this.playDialogue("76_19", () => {
          this.scheduleOnce(() => {
            this.isValid && 2 === this.phase && this.winstate && this.showLevelSuccess(0);
          }, 1);
        }));
      }, 1);
    });
  }
  enterFail() {
    this.phase >= 2 || (this.phase = 2, this.setInputBlocked(!0), this.setNodeActive(this.wifeButtonNode, !1), this.setNodeActive(this.motherButtonNode, !1), __rea_outer_w.getInstance().pauseTimer(), this.stopThunder(), this.stopLightning(), this.stopShake(), __rea_outer_u.playEffect_1("level76_4"), this.scheduleOnce(() => {
      this.isValid && 2 === this.phase && !this.winstate && (this.setNodeActive(this.getNode("spinach"), !1), this.setNodeActive(this.getNode("bg_end_1"), !0), this.playDialogue("76_17", () => {
        this.isValid && 2 === this.phase && !this.winstate && __rea_outer_f.getInstance().showView(__rea_outer_v, __rea_outer_m.WIN_ANIMATION);
      }));
    }, .5));
  }
  startLightning() {
    this.stopLightning(), this.flashLightning(), this.schedule(this.onLightningTick, 10);
  }
  flashLightning() {
    this.lightningToken += 1;
    const e = this.lightningToken,
      t = this.pickLightningSides();
    this.setNodeActive(this.getNode("Lightning"), t.showLeft), this.setNodeActive(this.getNode("Lightning1"), t.showRight), this.scheduleOnce(() => {
      this.isValid && e === this.lightningToken && (this.setNodeActive(this.getNode("Lightning"), !1), this.setNodeActive(this.getNode("Lightning1"), !1));
    }, .2);
  }
  pickLightningSides() {
    if (Math.random() < .5) return {
      showLeft: !0,
      showRight: !0
    };
    const e = Math.random() < .5;
    return {
      showLeft: e,
      showRight: !e
    };
  }
  stopLightning() {
    this.lightningToken += 1, this.unschedule(this.onLightningTick), this.setNodeActive(this.getNode("Lightning"), !1), this.setNodeActive(this.getNode("Lightning1"), !1);
  }
  playThunderLoop() {
    this.thunderToken += 1, this.playThunderOnce(this.thunderToken);
  }
  playThunderOnce(e) {
    !this.isValid || e !== this.thunderToken || this.phase >= 2 || __rea_outer_u.playEffect_1(I, () => {
      !this.isValid || e !== this.thunderToken || this.phase >= 2 || this.scheduleOnce(() => {
        this.playThunderOnce(e);
      }, 2);
    });
  }
  stopThunder() {
    this.thunderToken += 1, __rea_outer_u.stopOneEffect(I);
  }
  startShake() {
    this.stopShake(), this.shakeNode(this.getNode("man1")), this.shakeNode(this.getNode("man2"));
  }
  shakeNode(e) {
    null != e && e.isValid && (e.angle = 0, __rea_outer_T.shakeRepeat(e, .08, 1, .02));
  }
  stopShake() {
    this.resetShakeNode(this.getNode("man1")), this.resetShakeNode(this.getNode("man2"));
  }
  resetShakeNode(e) {
    null != e && e.isValid && (this.stopTweenIfValid(e), e.angle = 0);
  }
  pickSwipeHotspot(e, t) {
    let i = null,
      s = Number.POSITIVE_INFINITY;
    for (let o = 0; o < L.length; o += 1) {
      const n = L[o];
      if (n.direction !== t || !this.isSwipeHotspotOpen(n)) continue;
      const h = this.getNode(n.nodeName);
      if (!this.containsPoint(h, e, !0)) continue;
      const a = this.getNodeArea(h);
      a < s && (i = n, s = a);
    }
    return i;
  }
  isSwipeHotspotOpen(e) {
    return !(this.isRainStarted || this.completedSteps.has(e.stepId) || !this.isPrerequisiteMet(e.stepId)) && ("start-reveal" === e.phase ? !this.isPhotoRevealed : "finish-reveal" === e.phase && 4 === e.stepId ? this.isNecklaceRevealed : "finish-reveal" === e.phase && 5 === e.stepId ? this.isPhotoRevealed : "complete" === e.phase);
  }
  isPrerequisiteMet(e) {
    const t = A[e];
    return !t || this.completedSteps.has(t);
  }
  getSwipeDirection(e, t) {
    const i = t.x - e.x,
      s = t.y - e.y;
    return s >= 30 && Math.abs(s) >= 1.2 * Math.abs(i) ? "up" : -s >= 30 && Math.abs(s) >= 1.2 * Math.abs(i) ? "down" : null;
  }
  isPointOnChoiceButton(e) {
    return !!this.isRainStarted && (this.containsPoint(this.wifeButtonNode, e, !1) || this.containsPoint(this.motherButtonNode, e, !1));
  }
  canAcceptInput() {
    return this.isValid && 1 === this.phase && !this.isInputBlocked && !this.winstate;
  }
  playActionSound() {
    __rea_outer_u.playEffect_1("level76_1");
  }
  playDialogue(e, t) {
    this.voiceToken += 1;
    const i = this.voiceToken;
    this.showPrompt(e), __rea_outer_u.stopVoice(), __rea_outer_u.playVoice(e), this.scheduleOnce(() => {
      this.isValid && i === this.voiceToken && (this.hidePrompt(), null == t || t());
    }, this.resolveDialogueHoldSeconds(e));
  }
  cancelDialogue() {
    this.voiceToken += 1, __rea_outer_u.stopVoice(), this.hidePrompt();
  }
  resolveDialogueHoldSeconds(e) {
    var t;
    const i = (null == (t = __rea_outer_u.audioMap.get(e)) ? void 0 : t.getDuration()) ?? 0;
    return i > .05 ? i : 2.5;
  }
  showPrompt(e) {
    this.promptLabel && (this.promptLabel.string = this.resolveI18nText(e)), this.setNodeActive(this.promptBoxNode, !0), this.bringToFront(this.promptBoxNode);
  }
  hidePrompt() {
    this.setNodeActive(this.promptBoxNode, !1);
  }
  resolveI18nText(e) {
    const t = __rea_outer_g.getInstance().getKey(e);
    return t && t !== e ? t : e;
  }
  setInputBlocked(e) {
    var t;
    this.isInputBlocked = e, this.setNodeActive(this.backBgNode, e), e && null != (t = this.backBgNode) && t.isValid && __rea_outer__(this.backBgNode, 0);
  }
  getLowestUnfinishedStep() {
    for (let e = 1; e <= B; e += 1) if (!this.completedSteps.has(e)) return e;
    return null;
  }
  liftSpinach() {
    var e, t;
    const i = this.spinachCarry,
      s = null == i ? void 0 : i.node;
    if (null == s || !s.isValid || null == (e = this.gameNode) || !e.isValid) return;
    const o = s.worldPosition.clone();
    s.setParent(this.gameNode), s.setWorldPosition(o), null != (t = this.promptBoxNode) && t.isValid && this.promptBoxNode.parent === this.gameNode && s.setSiblingIndex(this.promptBoxNode.getSiblingIndex());
  }
  returnSpinach() {
    const e = this.spinachCarry;
    if (null == e || !e.node.isValid || !e.homeParent.isValid) return;
    this.stopTweenIfValid(e.node), e.node.setParent(e.homeParent), e.node.setPosition(e.origin);
    const t = Math.max(e.homeParent.children.length - 1, 0);
    e.node.setSiblingIndex(Math.min(e.siblingIndex, t));
  }
  containsPoint(e, t, i) {
    return !(null == e || !e.isValid) && !(!i && !e.activeInHierarchy) && this.getNodeWorldBox(e).contains(t);
  }
  isCenterInside(e, t) {
    return !!(e.isValid && null != t && t.isValid && t.activeInHierarchy) && !(!e.getComponent(__rea_outer_a) || !t.getComponent(__rea_outer_a)) && __rea_outer_p.isRectWithinDragDistance(this.getNodeWorldBox(e), this.getNodeWorldBox(t));
  }
  getNodeArea(e) {
    const t = null == e ? void 0 : e.getComponent(__rea_outer_a);
    return t ? t.contentSize.width * t.contentSize.height : Number.POSITIVE_INFINITY;
  }
  getNodeWorldBox(e) {
    var t;
    const i = e.getComponent(__rea_outer_a);
    if (!i) return new __rea_outer_r();
    if (e.activeInHierarchy) return i.getBoundingBoxToWorld();
    const s = null != (t = this.gameNode) && t.isValid ? this.gameNode : this.findActiveSpaceNode(e),
      o = null == s ? void 0 : s.getComponent(__rea_outer_a);
    if (!o || !s) return new __rea_outer_r();
    const n = this.getLocalPositionIn(e, s),
      h = o.convertToWorldSpaceAR(n);
    return new __rea_outer_r(h.x - i.contentSize.width * i.anchorPoint.x, h.y - i.contentSize.height * i.anchorPoint.y, i.contentSize.width, i.contentSize.height);
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
  calculateTouchOffset(e, t) {
    const i = t.parent;
    if (null == i || !i.isValid) return __rea_outer_n.ZERO.clone();
    const s = this.getTouchLocalPosition(e, i);
    return new __rea_outer_n(t.position.x - s.x, t.position.y - s.y, 0);
  }
  setDragPosition(e, t, i) {
    const s = t.parent;
    if (null == s || !s.isValid || !t.isValid) return;
    const o = this.getTouchLocalPosition(e, s);
    t.setPosition(o.x + i.x, o.y + i.y, t.position.z);
  }
  getTouchLocalPosition(e, t) {
    const i = e.getUILocation(),
      s = t.getComponent(__rea_outer_a);
    return s ? s.convertToNodeSpaceAR(new __rea_outer_n(i.x, i.y, 0)) : __rea_outer_n.ZERO.clone();
  }
  bringToFront(e) {
    null != e && e.isValid && e.parent && e.setSiblingIndex(e.parent.children.length - 1);
  }
  setNodeActive(e, t) {
    null != e && e.isValid && (e.active = t);
  }
  stopTweenIfValid(e) {
    null != e && e.isValid && __rea_outer_y(e);
  }
  restoreOrigins() {
    this.originByName.forEach((e, t) => {
      const i = this.getNode(t);
      null != i && i.isValid && (this.stopTweenIfValid(i), i.setPosition(e), i.angle = 0);
    });
  }
  cleanupRuntime(e) {
    this.unscheduleAllCallbacks(), this.unregisterInputHandlers(), this.voiceToken += 1, this.motherFaceToken += 1, this.wifeFaceToken += 1, this.fallGeneration += 1, this.lightningToken += 1, this.thunderToken += 1, this.pointerStart = null, this.dragState = null, e && (__rea_outer_u.stopVoice(), __rea_outer_u.stopOneEffect(I)), this.nodeByName.forEach(e => {
      this.stopTweenIfValid(e);
    }), this.stopTweenIfValid(this.backBgNode);
  }
  getNode(e) {
    return this.nodeByName.get(e) ?? null;
  }
  cacheNode(e) {
    null != e && e.isValid && !this.nodeByName.has(e.name) && (this.nodeByName.set(e.name, e), this.originByName.set(e.name, e.position.clone()));
  }
  resolveReferences() {
    var e, t, i;
    this.gameNode = this.node.getChildByPath("UIPanel/gameNode"), this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.wifeButtonNode = this.node.getChildByPath("UIPanel/click_root/Button_Wife"), this.motherButtonNode = this.node.getChildByPath("UIPanel/click_root/Button_Mother"), this.nodeByName.clear(), this.originByName.clear(), this.spinachCarry = null, null == (e = this.gameNode) || e.children.forEach(e => {
      this.cacheNode(e);
    }), this.promptBoxNode = this.getNode("prompt_box"), this.promptLabel = (null == (t = this.promptBoxNode) || null == (t = t.getChildByName("Label")) ? void 0 : t.getComponent(__rea_outer_c)) ?? null, this.cacheNode((null == (i = this.gameNode) ? void 0 : i.getChildByPath("clicks/touch-ear")) ?? null), this.spinachCarry = this.createSpinachCarry(this.getNode("spinach")), this.warnIfMissing();
  }
  createSpinachCarry(e) {
    return null != e && e.isValid && e.parent ? {
      node: e,
      homeParent: e.parent,
      origin: e.position.clone(),
      siblingIndex: e.getSiblingIndex()
    } : null;
  }
  warnIfMissing() {
    this.gameNode || console.warn("[Level_76] missing gameNode");
    [...C, ...P].forEach(e => {
      this.getNode(e) || console.warn(`[Level_76] missing ${e}`);
    }), this.spinachCarry || console.warn("[Level_76] missing spinach"), this.getNode("touch-ear") || console.warn("[Level_76] missing clicks/touch-ear"), this.promptLabel || console.warn("[Level_76] missing prompt_box/Label"), this.backBgNode || console.warn("[Level_76] missing backBG"), this.wifeButtonNode || console.warn("[Level_76] missing click_root/Button_Wife"), this.motherButtonNode || console.warn("[Level_76] missing click_root/Button_Mother");
  }
}) || S;
__rea_outer_t._RF.pop();
export { __recovered_export_0 as default };
