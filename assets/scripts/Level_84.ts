// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_84.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { Vec3 as __rea_outer_i } from "cc";
import { tween as __rea_outer_s } from "cc";
import { UITransform as __rea_outer_o } from "cc";
import { Rect as __rea_outer_n } from "cc";
import { Vec2 as __rea_outer_h } from "cc";
import { Node as __rea_outer_r } from "cc";
import { Button as __rea_outer_a } from "cc";
import { Sprite as __rea_outer_l } from "cc";
import { Color as __rea_outer_d } from "cc";
import { Tween as __rea_outer_c } from "cc";
import { Label as __rea_outer_u } from "cc";
import { _decorator as __rea_outer_p } from "cc";
import { default as __rea_outer_g } from "./LevelBase";
import { default as __rea_outer__ } from "./clue-hit-tester";
import { DRAG_HIT_DISTANCE as __rea_outer_v } from "./clue-hit-tester";
import { default as __rea_outer_N } from "./AudioManager";
import { I18nController as __rea_outer_b } from "./i18n-controller";
import { UIManager as __rea_outer_w } from "./ui-manager";
import { UILayer as __rea_outer_m } from "./ui-layer";
import { UIHint as __rea_outer_f } from "./uihint";
import { UIFail as __rea_outer_T } from "./uifail";
import { GameController as __rea_outer_y } from "./GameController";
import { setNodeOpacity as __rea_outer_C } from "./CocosCompat";
import { stopAllTweens as __rea_outer_I } from "./CocosCompat";
let __recovered_export_0;
var A;
__rea_outer_t._RF.push({}, "fe79cN/SdpEkZfEwK5Zrulx", "Level_84", void 0);
const {
    ccclass: S
  } = __rea_outer_p,
  k = 12,
  P = 255,
  B = 178,
  x = -361.5,
  F = -205.5,
  V = ["2_scissors_1", "2_scissors_2"],
  R = ["3_screwdriver_1", "3_screwdriver_2"],
  L = {
    1: ["1_girl1", "1_girl2", "1_girl3"],
    2: ["2_girl1", "2_girl2", "2_girl3"],
    3: ["3_girl1", "3_girl2"]
  },
  O = new Set(["1_bg", "1_bg_1", "1_curtain", "1_bed", "1_wardrobe", "1_zombie_1", "1_shoes", "1_girl1"]),
  D = new Set(["2_bg", "2_bg_1", "2_girl1", "2_flowerpot", "2_painting", "2_table", "2_scissors", "2_cat", "2_zombie_1"]),
  H = new Set(["3_bg", "3_bg_1", "3_bathtub", "3_vent", "3_washbasin", "3_hammer", "3_girl1", "3_zombie_1"]),
  E = [{
    pose: "1_girl1",
    target: "curtain",
    result: "1_girl1_curtain",
    cover: "1_curtain",
    movesToCurtain: !0
  }, {
    pose: "1_girl1",
    target: "wardrobe",
    result: "1_girl3_wardrobe",
    cover: "1_wardrobe",
    movesToCurtain: !1
  }, {
    pose: "1_girl1",
    target: "bed",
    result: "1_girl2_bed",
    cover: "1_bed",
    movesToCurtain: !1
  }, {
    pose: "1_girl2",
    target: "bed",
    result: "1_girl2_bed",
    cover: "1_bed",
    movesToCurtain: !1
  }, {
    pose: "1_girl3",
    target: "curtain",
    result: "1_girl3_curtain",
    cover: "1_curtain",
    movesToCurtain: !0
  }, {
    pose: "1_girl3",
    target: "wardrobe",
    result: "1_girl3_wardrobe",
    cover: "1_wardrobe",
    movesToCurtain: !1
  }, {
    pose: "2_girl1",
    target: "door",
    result: "2_painting_2",
    cover: null,
    movesToCurtain: !1
  }, {
    pose: "2_girl1",
    target: "flowerpot",
    result: "2_girl1_flowerpot",
    cover: "2_flowerpot",
    movesToCurtain: !1
  }, {
    pose: "2_girl1",
    target: "table",
    result: "2_girl2_table",
    cover: "2_table",
    movesToCurtain: !1
  }, {
    pose: "2_girl2",
    target: "table",
    result: "2_girl2_table",
    cover: "2_table",
    movesToCurtain: !1
  }, {
    pose: "2_girl3",
    target: "flowerpot",
    result: "2_girl3_flowerpot",
    cover: "2_flowerpot",
    movesToCurtain: !1
  }, {
    pose: "2_girl3",
    target: "painting",
    result: "2_girl3_painting",
    cover: "2_painting",
    movesToCurtain: !1
  }, {
    pose: "3_girl1",
    target: "vent",
    result: "3_girl2_vent",
    cover: "3_vent",
    movesToCurtain: !1
  }, {
    pose: "3_girl1",
    target: "bathtub",
    result: "3_girl2_bathtub",
    cover: "3_bathtub",
    movesToCurtain: !1
  }, {
    pose: "3_girl1",
    target: "washbasin",
    result: "3_girl1_washbasin",
    cover: "3_washbasin",
    movesToCurtain: !1
  }, {
    pose: "3_girl2",
    target: "vent",
    result: "3_girl2_vent",
    cover: "3_vent",
    movesToCurtain: !1
  }, {
    pose: "3_girl2",
    target: "bathtub",
    result: "3_girl2_bathtub",
    cover: "3_bathtub",
    movesToCurtain: !1
  }],
  M = [{
    name: "2_scissors_1",
    seconds: .2,
    pair: V
  }, {
    name: "2_scissors_2",
    seconds: .2,
    pair: V
  }, {
    name: "2_scissors_1",
    seconds: .2,
    pair: V
  }, {
    name: "2_scissors_2",
    seconds: .1,
    pair: V
  }],
  U = [{
    name: "3_screwdriver_1",
    seconds: .2,
    pair: R,
    x: -120.5,
    y: 611
  }, {
    name: "3_screwdriver_2",
    seconds: .2,
    pair: R,
    x: 27.5,
    y: 611
  }, {
    name: "3_screwdriver_1",
    seconds: .2,
    pair: R,
    x: 27.5,
    y: 528
  }, {
    name: "3_screwdriver_2",
    seconds: .2,
    pair: R,
    x: -120.5,
    y: 528
  }, {
    name: "",
    seconds: .2,
    pair: R
  }],
  G = {
    curtain: "1_curtain",
    wardrobe: "1_wardrobe",
    bed: "touch1_bed",
    flowerpot: "touch2-2_flowerpot",
    table: "touch2-table",
    bathtub: "3_bathtub"
  };
__recovered_export_0 = S("Level_84")(A = class extends __rea_outer_g {
  constructor(...e) {
    super(...e), this.phase = 0, this.winstate = !1, this.stageNode = null, this.backBgNode = null, this.bubbleNode = null, this.promptLabel = null, this.doneButton = null, this.upperGrate = null, this.groundGrate = null, this.nodeByName = new Map(), this.originByNode = new Map(), this.siblingByNode = new Map(), this.awarded = new Set(), this.scene = 1, this.pose = "1_girl1", this.hideResult = null, this.coverName = null, this.paintingCut = !1, this.catPlaced = !1, this.basinOpened = !1, this.grateDropped = !1, this.grateFixed = !1, this.pressKind = "none", this.pressNode = null, this.pressPoint = null, this.pressPosition = null, this.dragMoved = !1, this.dragOffset = new __rea_outer_i(), this.flowToken = 0, this.voiceToken = 0, this.isInputLocked = !1, this.isHeldForTimeUp = !1, this.blackFade = null;
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.prepareBackBg(), this.allItemNum = k, this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.registerInputHandlers(), this.enterPhase0();
  }
  onDestroy() {
    this.cleanupRuntime(), super.onDestroy();
  }
  handleTimeExpired() {
    return 1 !== this.phase || (this.isHeldForTimeUp = !0, this.flowToken += 1, this.voiceToken += 1, this.unscheduleAllCallbacks(), this.releasePress(!0), this.setInputLocked(!0), this.hideNode(this.bubbleNode), __rea_outer_N.stopVoice(), this.stopPerformances(), !1);
  }
  showHint() {
    if (!this.canAcceptInput()) return;
    const e = this.hintStep();
    if (null === e) return;
    const t = __rea_outer_b.getInstance().getKey(`level84_hint${e}`);
    __rea_outer_w.getInstance().showView(__rea_outer_f, void 0, {
      body: t
    });
  }
  getGameProgressSnapshot() {
    const e = Math.min(this.hasInstallNum, k);
    return {
      progress: e / k,
      label: `${e}/12`
    };
  }
  markAllTasksCompleted() {
    this.hasInstallNum = k, this.phase = 2, this.winstate = !0, this.isInputLocked = !0, this.flowToken += 1, this.voiceToken += 1;
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.scene = 1, this.pose = "1_girl1", this.hideResult = null, this.coverName = null, this.paintingCut = !1, this.catPlaced = !1, this.basinOpened = !1, this.grateDropped = !1, this.grateFixed = !1, this.awarded.clear(), this.hasInstallNum = 0, this.allItemNum = k, this.isInputLocked = !1, this.isHeldForTimeUp = !1, this.flowToken += 1, this.voiceToken += 1, this.clearPress(), this.unscheduleAllCallbacks(), __rea_outer_N.stopVoice(), this.restoreOrigins(), this.stopBlackFade();
  }
  skipOpeningToPlay() {
    return 0 === this.phase && !this.isHeldForTimeUp && (this.voiceToken += 1, this.stopOpeningDialogue(), this.hideNode(this.bubbleNode), this.phase = 1, this.setInputLocked(!1), __rea_outer_y.getInstance().resumeTimer(), !0);
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_N.playMusic("bgm2", !0, .5), __rea_outer_y.getInstance().pauseTimer(), this.setInputLocked(!0), this.hideChrome(), this.showBedroom(), __rea_outer_y.getInstance().refreshGameProgress(), this.playDialogue("84_1", () => {
      0 !== this.phase || this.isHeldForTimeUp || (this.phase = 1, this.setInputLocked(!1), __rea_outer_y.getInstance().resumeTimer());
    });
  }
  showBedroom() {
    this.scene = 1, this.pose = "1_girl1", this.hideResult = null, this.coverName = null, this.hideNode(this.getNode("2")), this.hideNode(this.getNode("3")), this.resetChildren("1"), this.applySceneVisibility("1", O), this.showNode(this.getNode("1")), this.setCoverAlpha("1_curtain", P), this.setCoverAlpha("1_bed", P), this.setCoverAlpha("1_wardrobe", P);
  }
  showStudy() {
    this.scene = 2, this.pose = "2_girl1", this.hideResult = null, this.coverName = null, this.hideNode(this.getNode("1")), this.resetChildren("2"), this.applySceneVisibility("2", D), this.showNode(this.getNode("2")), this.setCoverAlpha("2_flowerpot", P), this.setCoverAlpha("2_table", P), this.setCoverAlpha("2_painting", P), this.setCoverAlpha("2_painting_1", P);
  }
  showBathroom() {
    this.scene = 3, this.pose = "3_girl1", this.hideResult = null, this.coverName = null, this.hideNode(this.getNode("2")), this.resetChildren("3"), this.applySceneVisibility("3", H), this.showNode(this.getNode("3")), this.setCoverAlpha("3_bathtub", P), this.setCoverAlpha("3_vent", P), this.setCoverAlpha("3_washbasin", P), this.setCoverAlpha("3_washbasin_1", P);
  }
  applySceneVisibility(e, t) {
    var i;
    null == (i = this.getNode(e)) || i.children.forEach(e => {
      "3_vent_1" !== e.name ? e.active = t.has(e.name) : e.active = e === this.upperGrate;
    });
  }
  onDone() {
    this.canAcceptInput() && (this.isClearState() ? (3 === this.scene && (this.phase = 2, this.winstate = !0, this.award(12), __rea_outer_y.getInstance().pauseTimer()), this.beginClear()) : this.beginFound());
  }
  isClearState() {
    return 1 === this.scene ? "1_girl1_curtain_shoes" === this.hideResult : 2 === this.scene ? this.paintingCut && this.catPlaced && "2_painting_2" === this.hideResult : "3_girl2_vent" === this.hideResult && this.grateFixed;
  }
  beginClear() {
    const e = this.beginFlow();
    this.setInputLocked(!0), 1 === this.scene ? this.award(3) : 2 === this.scene && (this.award(7), this.hideNode(this.getNode("2_cat_1")), this.hideNode(this.getNode("2_hidden_door"))), 3 !== this.scene ? this.exitWindowZombie(e, () => {
      this.enterRoomZombie(e, () => {
        this.wait(1, e, () => {
          this.exitRoomZombie(e, () => this.afterClearSearch(e));
        });
      });
    }) : this.playFinalSuccess(e);
  }
  playFinalSuccess(e) {
    this.enterRoomZombie(e, () => {
      this.wait(1, e, () => {
        this.exitRoomZombie(e, () => this.afterClearSearch(e));
      });
    });
  }
  afterClearSearch(e) {
    this.isFlowAlive(e) && (1 !== this.scene ? 2 !== this.scene ? (this.playDialogue("84_4"), this.showLevelSuccess(1)) : this.playDialogue("84_3", () => this.fadeToScene(3, e)) : this.playDialogue("84_2", () => this.fadeToScene(2, e)));
  }
  beginFound() {
    this.phase = 2, this.winstate = !1, __rea_outer_y.getInstance().pauseTimer();
    const e = this.beginFlow();
    this.setInputLocked(!0), this.playFoundSearch(e);
  }
  playFoundSearch(e) {
    this.exitWindowZombie(e, () => {
      this.enterRoomZombie(e, () => {
        this.wait(1, e, () => this.showCaught(e));
      });
    });
  }
  showCaught(e) {
    this.hideNode(this.doneButton), this.showNode(this.getNode("end")), __rea_outer_N.playEffect_1("level84_5"), this.wait(1, e, () => {
      this.stopBlackFade();
      const t = this.getNode("black");
      this.showNode(t), this.setSpriteAlpha(t, P), this.showNode(this.getNode("failure")), __rea_outer_N.playEffect_1("level84_6"), this.wait(.5, e, () => {
        __rea_outer_w.getInstance().showView(__rea_outer_T, __rea_outer_m.WIN_ANIMATION);
      });
    });
  }
  enterHammerFail() {
    if (1 !== this.phase) return;
    this.phase = 2, this.winstate = !1, __rea_outer_y.getInstance().pauseTimer();
    const e = this.beginFlow();
    this.setInputLocked(!0), this.playAction(), this.hideNode(this.getNode("3_hammer"));
    const t = this.getNode("3_hammer_1"),
      i = this.getNode("3_hammer_2");
    t && t.setPosition(this.originOf(t)), i && i.setPosition(this.originOf(i)), this.showNode(t), this.showNode(i), __rea_outer_N.playEffect_1("level84_4"), this.dropGrate(() => {
      this.isFlowAlive(e) && this.playFoundSearch(e);
    });
  }
  fadeToScene(e, t) {
    this.hideNode(this.doneButton), this.fadeBlack(0, P, .5, t, () => {
      2 === e ? this.showStudy() : this.showBathroom(), this.wait(.5, t, () => {
        this.fadeBlack(P, 0, .5, t, () => {
          this.hideNode(this.getNode("black")), this.showNode(this.doneButton), 1 !== this.phase || this.isHeldForTimeUp || this.setInputLocked(!1);
        });
      });
    });
  }
  exitWindowZombie(e, t) {
    const i = this.getNode(this.zombiePair().outside);
    if (null == i || !i.isValid) return void t();
    const s = this.originOf(i);
    i.active = !0, this.moveTo(i, this.offscreenX(i), s.y, .5, e, () => {
      this.hideNode(i), t();
    });
  }
  enterRoomZombie(e, t) {
    const i = this.getNode(this.zombiePair().inside);
    if (null == i || !i.isValid) return void t();
    const s = this.originOf(i);
    i.setPosition(this.offscreenX(i), s.y, s.z), i.active = !0, this.moveTo(i, s.x, s.y, .5, e, t);
  }
  exitRoomZombie(e, t) {
    const i = this.getNode(this.zombiePair().inside);
    if (null == i || !i.isValid) return void t();
    const s = this.originOf(i);
    this.moveTo(i, this.offscreenX(i), s.y, .5, e, () => {
      this.hideNode(i), t();
    });
  }
  zombiePair() {
    return 1 === this.scene ? {
      outside: "1_zombie_1",
      inside: "1_zombie"
    } : 2 === this.scene ? {
      outside: "2_zombie_1",
      inside: "2_zombie"
    } : {
      outside: "3_zombie_1",
      inside: "3_zombie"
    };
  }
  cyclePose() {
    const e = L[this.scene],
      t = e.indexOf(this.pose),
      i = e[t < 0 ? 0 : (t + 1) % e.length];
    this.hideNode(this.getNode(this.pose)), this.pose = i;
    const s = this.getNode(i);
    s && (s.setPosition(this.originOf(s)), s.active = !0), this.playAction();
  }
  applyHide(e, t, i) {
    const s = this.coverFor(t);
    this.coverName && this.coverName !== s && this.setCoverAlpha(this.coverName, P), this.hideNode(e), this.restoreSibling(e);
    const o = this.getNode(t.result);
    if (this.showNode(o), "door" === t.target && (this.hideNode(this.getNode("2_painting_1")), this.placeAbove(this.getNode("2_cat_1"), this.getNode("2_hidden_door")), this.placeAbove(o, this.getNode("2_cat_1"))), "painting" === t.target && this.placeAbove(o, this.getNode("2_hidden_door")), o && t.movesToCurtain) {
      o.setPosition(i), this.bringToFront(o);
      const e = this.beginFlow();
      this.setInputLocked(!0), this.moveTo(o, -103, 219, .5, e, () => {
        this.restoreSibling(o), 1 !== this.phase || this.isHeldForTimeUp || this.setInputLocked(!1);
      });
    } else o && o.setPosition(this.originOf(o));
    s && this.setCoverAlpha(s, B), this.coverName = s, this.hideResult = t.result, this.playAction(), "1_girl1_curtain" === t.result && this.award(1), "2_painting_2" === t.result && this.award(6), "3_girl2_vent" === t.result && this.award(10);
  }
  resolveShoesDrop(e) {
    const t = this.getNode("1_girl1_curtain");
    "1_girl1_curtain" === this.hideResult && this.isCenterInside(e, t) ? this.applyShoes() : this.returnNode(e, this.originOf(e));
  }
  applyShoes() {
    this.hideNode(this.getNode("1_shoes")), this.hideNode(this.getNode("1_girl1_curtain"));
    const e = this.getNode("1_girl1_curtain_shoes");
    e && e.setPosition(this.originOf(e)), this.showNode(e), this.hideResult = "1_girl1_curtain_shoes", this.coverName = "1_curtain", this.setCoverAlpha("1_curtain", B), this.award(2), this.playAction();
  }
  applyScissors() {
    const e = this.beginFlow();
    this.setInputLocked(!0), this.hideNode(this.getNode("2_scissors")), this.paintingCut = !0, this.award(4), this.playAction(), __rea_outer_N.playEffect_1("level84_2"), this.playFrames(M, 0, e, () => {
      this.hideNode(this.getNode("2_scissors_1")), this.hideNode(this.getNode("2_scissors_2")), this.hideNode(this.getNode("2_painting")), this.showNode(this.getNode("2_painting_1")), "2_girl3_painting" === this.hideResult ? (this.coverName = "2_painting_1", this.setCoverAlpha("2_painting_1", B)) : this.setCoverAlpha("2_painting_1", P), this.isFlowAlive(e) && 1 === this.phase && this.setInputLocked(!1);
    });
  }
  applyCat() {
    this.hideNode(this.getNode("2_cat")), this.showNode(this.getNode("2_cat_1")), this.showNode(this.getNode("2_hidden_door")), this.hideNode(this.getNode("2_hidden_door_1")), this.placeAbove(this.getNode("2_cat_1"), this.getNode("2_hidden_door"));
    const e = this.getNode("2_girl3_painting");
    null != e && e.active && this.placeAbove(e, this.getNode("2_hidden_door")), this.catPlaced = !0, this.award(5), this.playAction();
  }
  openBasin() {
    this.hideNode(this.getNode("3_washbasin"));
    const e = this.getNode("3_washbasin_1"),
      t = this.getNode("3_screwdriver");
    if (this.showNode(e), this.showNode(t), t && t.setPosition(this.originOf(t)), this.basinOpened = !0, this.award(8), this.playAction(), "3_girl1_washbasin" === this.hideResult) return this.coverName = "3_washbasin_1", void this.setCoverAlpha("3_washbasin_1", B);
    this.setCoverAlpha("3_washbasin_1", P);
  }
  applyScrewdriver() {
    const e = this.beginFlow();
    this.setInputLocked(!0), this.hideNode(this.getNode("3_screwdriver")), this.grateDropped = !0, this.award(9), this.playAction(), __rea_outer_N.playEffect_1("level84_3"), this.playFrames(U, 0, e, () => {
      this.hideNode(this.getNode("3_screwdriver_1")), this.hideNode(this.getNode("3_screwdriver_2")), this.dropGrate(() => {
        this.isFlowAlive(e) && 1 === this.phase && this.setInputLocked(!1);
      });
    });
  }
  fixGrate(e) {
    this.stopTweenIfValid(e), e.setPosition(-46.5, 569.5, e.position.z), this.restoreSibling(e), this.hideNode(this.upperGrate), this.grateFixed = !0, this.award(11), this.playAction();
  }
  dropGrate(e) {
    const t = this.mountedGrate(),
      o = this.groundGrate;
    if (null == t || !t.isValid || null == o || !o.isValid) return void (null == e || e());
    this.stopTweenIfValid(t);
    const n = this.upperGrate;
    __rea_outer_s(t).to(.2, {
      position: new __rea_outer_i(x, F, t.position.z)
    }).call(() => {
      this.isValid && (null != n && n.isValid && (n.active = !1), o.active = !0, o.setPosition(x, F, o.position.z), null == e || e());
    }).start();
  }
  mountedGrate() {
    return this.isAtVent(this.upperGrate) ? this.upperGrate : this.isAtVent(this.groundGrate) ? this.groundGrate : null;
  }
  isAtVent(e) {
    return !(null == e || !e.isValid) && e.active && Math.abs(e.position.y - 569.5) < 20;
  }
  playFrames(e, t, i, s) {
    if (!this.isFlowAlive(i)) return;
    if (t >= e.length) return void s();
    const o = e[t];
    this.hideNode(this.getNode(o.pair[0])), this.hideNode(this.getNode(o.pair[1]));
    const n = o.name ? this.getNode(o.name) : null;
    n && (void 0 !== o.x && void 0 !== o.y ? n.setPosition(o.x, o.y, n.position.z) : n.setPosition(this.originOf(n)), n.active = !0), this.wait(o.seconds, i, () => this.playFrames(e, t + 1, i, s));
  }
  findRoute(e, t) {
    const i = null === this.hideResult ? e.name : this.pose,
      s = E.filter(e => e.pose === i),
      o = s.find(e => this.releaseInside(e, t));
    return o || (s.find(i => this.hitsDrop(e, this.resolveRouteTarget(i), t, i.target)) ?? null);
  }
  releaseInside(e, t) {
    var i;
    const s = this.resolveRouteTarget(e);
    if (null == s || !s.isValid) return !1;
    const o = "bathtub" === e.target ? 140 : 0;
    return (null == (i = this.dropHotspot(s, o)) ? void 0 : i.contains(t)) ?? !1;
  }
  hitsDrop(e, t, i, s) {
    if (null == t || !t.isValid) return !1;
    const n = "bathtub" === s,
      h = n ? 140 : __rea_outer_v;
    if (t.activeInHierarchy && __rea_outer__.isDragNearTarget(e, t, h)) return !0;
    const r = this.dropHotspot(t, n ? 140 : 0);
    if (!r) return !1;
    if (r.contains(i) || this.itemCenterInside(e, r)) return !0;
    const a = e.getComponent(__rea_outer_o);
    return !!a && __rea_outer__.isRectWithinDragDistance(a.getBoundingBoxToWorld(), r, h);
  }
  dropHotspot(e, t) {
    const i = this.worldRectOf(e);
    return i ? new __rea_outer_n(i.x, i.y - t, i.width, i.height + t) : null;
  }
  worldRectOf(e) {
    var t;
    const s = e.getComponent(__rea_outer_o),
      h = null == (t = this.stageNode) ? void 0 : t.getComponent(__rea_outer_o);
    if (!s || !h || !this.stageNode) return null;
    if (e.activeInHierarchy) return s.getBoundingBoxToWorld();
    const r = s.getBoundingBox();
    let a = r.x,
      l = r.y,
      d = e.parent;
    for (; d && d !== this.stageNode;) a += d.position.x, l += d.position.y, d = d.parent;
    if (d !== this.stageNode) return null;
    const c = h.convertToWorldSpaceAR(new __rea_outer_i(a, l, 0)),
      u = h.convertToWorldSpaceAR(new __rea_outer_i(a + r.width, l + r.height, 0));
    return new __rea_outer_n(Math.min(c.x, u.x), Math.min(c.y, u.y), Math.abs(u.x - c.x), Math.abs(u.y - c.y));
  }
  itemCenterInside(e, t) {
    const s = e.getComponent(__rea_outer_o);
    if (!s) return !1;
    const n = s.convertToWorldSpaceAR(new __rea_outer_i(0, 0, 0));
    return t.contains(new __rea_outer_h(n.x, n.y));
  }
  resolveRouteTarget(e) {
    return "door" === e.target ? this.paintingCut && this.catPlaced ? this.getNode("2_hidden_door") : null : "vent" === e.target ? !this.grateDropped || this.grateFixed ? null : this.getNode("3_vent") : "painting" === e.target ? this.activePainting() : "washbasin" === e.target ? this.activeBasin() : this.getNode(G[e.target] ?? "");
  }
  coverFor(e) {
    return "washbasin" === e.target ? this.basinOpened ? "3_washbasin_1" : "3_washbasin" : "painting" === e.target ? this.paintingCut ? "2_painting_1" : "2_painting" : e.cover;
  }
  activePainting() {
    const e = this.getNode("2_painting_1"),
      t = this.getNode("2_painting");
    return null != e && e.activeInHierarchy ? e : null != t && t.activeInHierarchy ? t : null;
  }
  activeBasin() {
    const e = this.getNode("3_washbasin_1"),
      t = this.getNode("3_washbasin");
    return this.basinOpened && null != e && e.activeInHierarchy ? e : null != t && t.activeInHierarchy ? t : null;
  }
  isGirlLocked() {
    return "1_girl1_curtain_shoes" === this.hideResult || "2_painting_2" === this.hideResult || this.grateFixed;
  }
  isStepSatisfied(e) {
    switch (e) {
      case 1:
        return "1_girl1_curtain" === this.hideResult || "1_girl1_curtain_shoes" === this.hideResult;
      case 2:
        return "1_girl1_curtain_shoes" === this.hideResult;
      case 3:
        return this.scene >= 2;
      case 4:
        return this.paintingCut;
      case 5:
        return this.catPlaced;
      case 6:
        return "2_painting_2" === this.hideResult || this.scene >= 3;
      case 7:
        return this.scene >= 3;
      case 8:
        return this.basinOpened;
      case 9:
        return this.grateDropped;
      case 10:
        return "3_girl2_vent" === this.hideResult;
      case 11:
        return this.grateFixed;
      case 12:
        return this.winstate;
      default:
        return !1;
    }
  }
  isStepReady(e) {
    switch (e) {
      case 1:
        return 1 === this.scene;
      case 2:
        return 1 === this.scene && this.isStepSatisfied(1);
      case 3:
        return 1 === this.scene && this.isStepSatisfied(2);
      case 4:
      case 5:
        return 2 === this.scene;
      case 6:
        return 2 === this.scene && this.paintingCut && this.catPlaced;
      case 7:
        return 2 === this.scene && "2_painting_2" === this.hideResult;
      case 8:
        return 3 === this.scene;
      case 9:
        return 3 === this.scene && this.basinOpened;
      case 10:
        return 3 === this.scene && this.grateDropped;
      case 11:
        return 3 === this.scene && "3_girl2_vent" === this.hideResult;
      case 12:
        return 3 === this.scene && this.grateFixed;
      default:
        return !1;
    }
  }
  hintStep() {
    const e = 1 === this.scene ? [1, 2, 3] : 2 === this.scene ? [4, 5, 6, 7] : [8, 9, 10, 11, 12];
    for (const t of e) if (this.isStepReady(t) && !this.isStepSatisfied(t)) return t;
    return null;
  }
  registerInputHandlers() {
    var e;
    this.node.off(__rea_outer_r.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(__rea_outer_r.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(__rea_outer_r.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(__rea_outer_r.EventType.TOUCH_CANCEL, this.onTouchCancel, this), this.node.on(__rea_outer_r.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(__rea_outer_r.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(__rea_outer_r.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(__rea_outer_r.EventType.TOUCH_CANCEL, this.onTouchCancel, this), null != (e = this.doneButton) && e.isValid && (this.doneButton.off(__rea_outer_a.EventType.CLICK, this.onDone, this), this.doneButton.on(__rea_outer_a.EventType.CLICK, this.onDone, this));
  }
  unregisterInputHandlers() {
    var e, t;
    null != (e = this.node) && e.isValid && (this.node.off(__rea_outer_r.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(__rea_outer_r.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(__rea_outer_r.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(__rea_outer_r.EventType.TOUCH_CANCEL, this.onTouchCancel, this)), null != (t = this.doneButton) && t.isValid && this.doneButton.off(__rea_outer_a.EventType.CLICK, this.onDone, this);
  }
  onTouchStart(e) {
    if (!this.canAcceptInput() || "none" !== this.pressKind) return;
    const t = e.getUILocation(),
      i = this.pickDragTarget(t);
    return i ? (this.pressKind = "drag", this.pressNode = i, this.pressPoint = t.clone(), this.pressPosition = i.position.clone(), void (this.dragMoved = !1)) : 3 === this.scene && !this.basinOpened && this.containsPoint(this.getNode("3_washbasin"), t) ? (this.pressKind = "swipe", void (this.pressPoint = t.clone())) : void (this.containsPoint(this.doneButton, t) && (this.pressKind = "button"));
  }
  onTouchMove(e) {
    var t;
    if ("drag" !== this.pressKind || null == (t = this.pressNode) || !t.isValid || !this.pressPoint) return;
    const s = e.getUILocation();
    if ((this.dragMoved || !(__rea_outer_h.distance(this.pressPoint, s) < 30)) && this.canAcceptInput()) {
      if (!this.dragMoved) {
        this.dragMoved = !0;
        const e = this.toParentLocal(this.pressNode, s);
        this.dragOffset = new __rea_outer_i(e.x - this.pressNode.position.x, e.y - this.pressNode.position.y, 0), this.bringToFront(this.pressNode);
      }
      this.moveDragged(this.pressNode, s);
    }
  }
  onTouchEnd(e) {
    var t;
    const s = e.getUILocation(),
      o = this.pressKind,
      n = this.pressNode,
      h = this.dragMoved,
      r = this.pressPoint,
      a = (null == (t = this.pressPosition) ? void 0 : t.clone()) ?? (null == n ? void 0 : n.position.clone()) ?? new __rea_outer_i();
    if (this.clearPress(), this.canAcceptInput()) return "drag" === o && null != n && n.isValid ? h ? void this.finishDrag(n, s, a) : void (null === this.hideResult && n.name === this.pose && this.containsPoint(n, s) && this.cyclePose()) : void ("swipe" === o && r && this.isSwipeRight(r, s) ? this.openBasin() : "button" === o && this.containsPoint(this.doneButton, s) && this.onDone());
    h && null != n && n.isValid && this.returnNode(n, a);
  }
  onTouchCancel() {
    var e;
    const t = this.pressNode,
      i = this.dragMoved,
      s = (null == (e = this.pressPosition) ? void 0 : e.clone()) ?? null;
    this.clearPress(), i && null != t && t.isValid && s && this.returnNode(t, s);
  }
  finishDrag(e, t, i) {
    if (this.moveDragged(e, t), "3_hammer" === e.name && this.isCenterInside(e, this.getNode("3_vent"))) return void this.enterHammerFail();
    if ("1_shoes" === e.name) return void this.resolveShoesDrop(e);
    if ("2_scissors" === e.name && this.isCenterInside(e, this.activePainting())) return void this.applyScissors();
    if ("2_cat" === e.name && this.isCenterInsideCat(e)) return void this.applyCat();
    if ("3_screwdriver" === e.name && this.isCenterInside(e, this.upperGrate)) return void this.applyScrewdriver();
    if (e === this.groundGrate && this.isCenterInside(e, this.getNode("3_vent"))) return void this.fixGrate(e);
    const s = this.findRoute(e, t);
    s && s.result !== e.name ? this.applyHide(e, s, i) : this.returnNode(e, i);
  }
  pickDragTarget(e) {
    let t = null,
      i = -1;
    return this.dragCandidates().forEach(s => {
      if (!this.containsPoint(s, e)) return;
      const o = this.renderScore(s);
      o < i || (i = o, t = s);
    }), t;
  }
  dragCandidates() {
    var e;
    const t = [],
      i = this.isGirlLocked() ? "" : this.hideResult ?? this.pose,
      s = i ? this.getNode(i) : null;
    return null != s && s.activeInHierarchy && t.push(s), this.pushActive(t, "1_shoes", 1 === this.scene), this.pushActive(t, "2_scissors", 2 === this.scene && !this.paintingCut), this.pushActive(t, "2_cat", 2 === this.scene && !this.catPlaced), this.pushActive(t, "3_screwdriver", 3 === this.scene && this.basinOpened && !this.grateDropped), null != (e = this.groundGrate) && e.activeInHierarchy && 3 === this.scene && this.grateDropped && !this.grateFixed && "3_girl2_vent" === this.hideResult && t.push(this.groundGrate), this.pushActive(t, "3_hammer", 3 === this.scene), t;
  }
  pushActive(e, t, i) {
    if (!i) return;
    const s = this.getNode(t);
    null != s && s.activeInHierarchy && e.push(s);
  }
  moveDragged(e, t) {
    if (!e.isValid) return;
    const i = this.toParentLocal(e, t);
    e.setPosition(i.x - this.dragOffset.x, i.y - this.dragOffset.y, e.position.z);
  }
  returnNode(e, t) {
    e.isValid && (this.stopTweenIfValid(e), e.setPosition(t), this.restoreSibling(e));
  }
  clearPress() {
    this.pressKind = "none", this.pressNode = null, this.pressPoint = null, this.pressPosition = null, this.dragMoved = !1;
  }
  releasePress(e) {
    var t;
    const i = this.pressNode,
      s = (null == (t = this.pressPosition) ? void 0 : t.clone()) ?? null,
      o = this.dragMoved;
    this.clearPress(), e && o && null != i && i.isValid && s && this.returnNode(i, s);
  }
  isSwipeRight(e, t) {
    const i = t.x - e.x,
      s = t.y - e.y;
    return i >= 30 && Math.abs(i) >= 1.2 * Math.abs(s);
  }
  canAcceptInput() {
    return this.isValid && 1 === this.phase && !this.isInputLocked && !this.isHeldForTimeUp && !this.winstate;
  }
  isFlowAlive(e) {
    return this.isValid && e === this.flowToken && !this.isHeldForTimeUp;
  }
  beginFlow() {
    return this.flowToken += 1, this.flowToken;
  }
  award(e) {
    this.awarded.has(e) || (this.awarded.add(e), this.hasInstallNum = this.awarded.size, __rea_outer_y.getInstance().refreshGameProgress());
  }
  playAction() {
    __rea_outer_N.playEffect_1("level84_1");
  }
  playDialogue(e, t) {
    this.voiceToken += 1;
    const i = this.voiceToken,
      s = this.flowToken;
    this.promptLabel && (this.promptLabel.string = this.resolveI18nText(e)), this.showNode(this.bubbleNode), __rea_outer_N.stopVoice(), __rea_outer_N.playVoice(e), this.scheduleOnce(() => {
      this.isValid && i === this.voiceToken && (this.hideNode(this.bubbleNode), s !== this.flowToken || this.isHeldForTimeUp || null == t || t());
    }, this.dialogueSeconds(e));
  }
  dialogueSeconds(e) {
    var t;
    const i = (null == (t = __rea_outer_N.audioMap.get(e)) ? void 0 : t.getDuration()) ?? 0;
    return i > .05 ? i : 2.5;
  }
  resolveI18nText(e) {
    const t = __rea_outer_b.getInstance().getKey(e);
    return t && t !== e ? t : e;
  }
  wait(e, t, i) {
    this.scheduleOnce(() => {
      this.isFlowAlive(t) && i();
    }, e);
  }
  moveTo(e, t, o, n, h, r) {
    e.isValid ? (this.stopTweenIfValid(e), __rea_outer_s(e).to(n, {
      position: new __rea_outer_i(t, o, e.position.z)
    }).call(() => {
      this.isFlowAlive(h) && r();
    }).start()) : r();
  }
  fadeBlack(e, t, i, o, n) {
    const h = this.getNode("black"),
      r = (null == h ? void 0 : h.getComponent(__rea_outer_l)) ?? null;
    if (null == h || !h.isValid || !r) return void n();
    this.stopBlackFade(), h.active = !0, this.setSpriteAlpha(h, e);
    const a = {
      alpha: e
    };
    this.blackFade = a, __rea_outer_s(a).to(i, {
      alpha: t
    }, {
      onUpdate: () => {
        r.isValid && this.setSpriteAlpha(h, a.alpha);
      }
    }).call(() => {
      this.blackFade === a && (this.blackFade = null), this.isFlowAlive(o) && n();
    }).start();
  }
  offscreenX(e) {
    var t;
    return 512.5 + ((null == (t = e.getComponent(__rea_outer_o)) ? void 0 : t.width) ?? 0) / 2;
  }
  setInputLocked(e) {
    this.isInputLocked = e;
    const t = this.backBgNode;
    null != t && t.isValid && (this.stopTweenIfValid(t), __rea_outer_C(t, 0), t.active = e);
  }
  prepareBackBg() {
    var e;
    null != (e = this.backBgNode) && e.isValid && (__rea_outer_C(this.backBgNode, 0), this.backBgNode.active = !1);
  }
  setCoverAlpha(e, t) {
    this.setSpriteAlpha(this.getNode(e), t);
  }
  setSpriteAlpha(e, t) {
    const i = null == e ? void 0 : e.getComponent(__rea_outer_l);
    if (null == i || !i.isValid) return;
    const s = i.color;
    i.color = new __rea_outer_d(s.r, s.g, s.b, Math.round(t));
  }
  containsPoint(e, t) {
    if (null == e || !e.isValid || !e.activeInHierarchy) return !1;
    const i = e.getComponent(__rea_outer_o);
    return !!i && i.getBoundingBoxToWorld().contains(t);
  }
  isCenterInside(e, t) {
    return __rea_outer__.isDragNearTarget(e, t);
  }
  isCenterInsideCat(e) {
    const t = this.getNode("2"),
      s = null == t ? void 0 : t.getComponent(__rea_outer_o),
      h = e.getComponent(__rea_outer_o);
    if (!(e.isValid && h && s && null != t && t.activeInHierarchy)) return !1;
    const r = s.convertToWorldSpaceAR(new __rea_outer_i(-53.5, -71, 0)),
      a = s.convertToWorldSpaceAR(new __rea_outer_i(98.5, 79, 0)),
      l = new __rea_outer_n(Math.min(r.x, a.x), Math.min(r.y, a.y), Math.abs(a.x - r.x), Math.abs(a.y - r.y));
    return __rea_outer__.isRectWithinDragDistance(h.getBoundingBoxToWorld(), l);
  }
  toParentLocal(e, t) {
    var s;
    const n = null == (s = e.parent) ? void 0 : s.getComponent(__rea_outer_o);
    return n ? n.convertToNodeSpaceAR(new __rea_outer_i(t.x, t.y, 0)) : new __rea_outer_i(t.x, t.y, 0);
  }
  renderScore(e) {
    let t = 0,
      i = 1,
      s = e;
    for (; s && s !== this.node;) t += s.getSiblingIndex() * i, i *= 50, s = s.parent;
    return t;
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
  resetChildren(e) {
    var t;
    null == (t = this.getNode(e)) || t.children.forEach(e => {
      const t = this.originByNode.get(e);
      t && e.isValid && (this.stopTweenIfValid(e), e.setPosition(t));
    });
  }
  showNode(e) {
    null != e && e.isValid && (e.active = !0);
  }
  hideNode(e) {
    null != e && e.isValid && (e.active = !1);
  }
  hideChrome() {
    this.hideNode(this.getNode("clicks")), this.hideNode(this.getNode("drags")), this.hideNode(this.getNode("swips")), this.hideNode(this.node.getChildByPath("UIPanel/demo")), this.hideNode(this.getNode("button")), this.hideNode(this.getNode("DONE")), this.hideNode(this.getNode("end")), this.hideNode(this.getNode("failure")), this.hideNode(this.getNode("black")), this.setSpriteAlpha(this.getNode("black"), 0);
  }
  bringToFront(e) {
    e.isValid && e.parent && e.setSiblingIndex(e.parent.children.length - 1);
  }
  placeAbove(e, t) {
    if (null == e || !e.isValid || null == t || !t.isValid || e.parent !== t.parent) return;
    const i = t.getSiblingIndex();
    e.getSiblingIndex() > i || e.setSiblingIndex(i);
  }
  restoreSibling(e) {
    const t = this.siblingByNode.get(e);
    void 0 !== t && e.isValid && e.setSiblingIndex(t);
  }
  stopTweenIfValid(e) {
    null != e && e.isValid && __rea_outer_I(e);
  }
  stopBlackFade() {
    this.blackFade && (__rea_outer_c.stopAllByTarget(this.blackFade), this.blackFade = null);
  }
  stopPerformances() {
    this.stopBlackFade(), this.originByNode.forEach((e, t) => this.stopTweenIfValid(t)), this.stopTweenIfValid(this.backBgNode);
  }
  getNode(e) {
    return this.nodeByName.get(e) ?? null;
  }
  resolveReferences() {
    var e;
    const t = this.node.getChildByPath("UIPanel/gameNode");
    this.stageNode = t, this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.bubbleNode = this.node.getChildByPath("UIPanel/bubble"), this.promptLabel = (null == (e = this.node.getChildByPath("UIPanel/bubble/dialog_box/Label")) ? void 0 : e.getComponent(__rea_outer_u)) ?? null, this.doneButton = this.node.getChildByPath("UIPanel/click_root/ButtonDone"), this.nodeByName.clear(), this.originByNode.clear(), this.siblingByNode.clear(), this.upperGrate = null, this.groundGrate = null, t && this.indexTree(t), this.warnIfMissing();
  }
  indexTree(e) {
    e.children.forEach(e => {
      this.indexNode(e), this.indexTree(e);
    });
  }
  indexNode(e) {
    e.name && (this.originByNode.set(e, e.position.clone()), this.siblingByNode.set(e, e.getSiblingIndex()), "3_vent_1" !== e.name ? this.nodeByName.has(e.name) || this.nodeByName.set(e.name, e) : e.position.y >= 0 ? this.upperGrate = e : this.groundGrate = e);
  }
  warnIfMissing() {
    this.stageNode || console.warn("[Level_84] missing UIPanel/gameNode"), this.backBgNode || console.warn("[Level_84] missing UIPanel/backBG"), this.promptLabel || console.warn("[Level_84] missing bubble/dialog_box/Label"), this.doneButton || console.warn("[Level_84] missing click_root/ButtonDone"), this.upperGrate && this.groundGrate || console.warn("[Level_84] missing one of the two 3_vent_1 nodes"), ["1", "2", "3", "end", "black", "failure", "1_girl1", "2_girl1", "3_girl1", "2_cat_1", "2_hidden_door", "touch1_bed", "touch2-table", "touch2-2_flowerpot"].forEach(e => {
      this.getNode(e) || console.warn(`[Level_84] missing ${e}`);
    });
  }
  cleanupRuntime() {
    this.unscheduleAllCallbacks(), this.unregisterInputHandlers(), this.flowToken += 1, this.voiceToken += 1, this.clearPress(), this.stopPerformances();
  }
}) || A;
__rea_outer_t._RF.pop();
export { __recovered_export_0 as default };
