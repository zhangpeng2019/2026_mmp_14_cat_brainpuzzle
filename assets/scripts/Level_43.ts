// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_43.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { Vec3 as __rea_outer_i } from "cc";
import { UITransform as __rea_outer_o } from "cc";
import { tween as __rea_outer_s } from "cc";
import { Node as __rea_outer_h } from "cc";
import { Sprite as __rea_outer_d } from "cc";
import { Vec2 as __rea_outer_l } from "cc";
import { Label as __rea_outer_n } from "cc";
import { _decorator as __rea_outer_a } from "cc";
import { default as __rea_outer_r } from "./LevelBase";
import { default as __rea_outer_N } from "./clue-hit-tester";
import { default as __rea_outer_c } from "./AudioManager";
import { I18nController as __rea_outer_p } from "./i18n-controller";
import { UIManager as __rea_outer_g } from "./ui-manager";
import { UILayer as __rea_outer_u } from "./ui-layer";
import { UIHint as __rea_outer_b } from "./uihint";
import { UIFail as __rea_outer_m } from "./uifail";
import { GameController as __rea_outer_v } from "./GameController";
import { stopAllTweens as __rea_outer_A } from "./CocosCompat";
import { default as __rea_outer_y } from "./ActionSystem";
import { default as __rea_outer_w } from "./clue-gesture-detector";
import { SwipeDirection as __rea_outer_f } from "./clue-level-types";
let __recovered_export_0;
var _;
__rea_outer_t._RF.push({}, "ca73c8xHsBPz7JQH1NrYEsE", "Level_43", void 0);
const {
    ccclass: P
  } = __rea_outer_a,
  S = "level43_2",
  C = 10,
  T = "图层 8",
  I = {
    "43_1": "门口好多丧尸啊！",
    "43_2": "这下安全多了",
    "43_3": "换成无线电发出求援",
    "43_4": "心里踏实多了",
    "43_5": "铜墙铁壁真安全",
    "43_6": "赶紧把洞堵上",
    "43_7": "在加固一下",
    "43_8": "这下丧尸进不来了",
    "43_9": "能撑到救援来临",
    "43_10": "杰瑞，全靠你了",
    "43_11": "这里也要堵住",
    "43_12": "早就想换了",
    "43_13": "心里踏实多了",
    "43_14": "救援终于来了",
    "43_15": "救援怎么还不来，饿死我了"
  },
  D = ["level43_hint1", "level43_hint2", "level43_hint3", "level43_hint4", "level43_hint5", "level43_hint6", "level43_hint7", "level43_hint8", "level43_hint9", "level43_hint10"],
  O = ["43_2", "43_3", "43_4", "43_5", "43_6", "43_7", "43_8", "43_9", "43_10", "43_11"];
__recovered_export_0 = P("Level_43")(_ = class extends __rea_outer_r {
  constructor(...e) {
    super(...e), this.phase = 0, this.winstate = !1, this.gameNode = null, this.artRoot = null, this.backBgNode = null, this.bubbleNode = null, this.bubbleLabel = null, this.demoNode = null, this.clickRootNode = null, this.dialogBox1Node = null, this.bgRightWallNode = null, this.bgRightWall1Node = null, this.bgRightWall2Node = null, this.bgRightWallZombieNode = null, this.bgRightLandNode = null, this.bgRightLand1Node = null, this.bgRightLand2Node = null, this.bgRightLandZombieNode = null, this.bgLeftNode = null, this.zombieNode = null, this.wallGateNode = null, this.wallGate1Node = null, this.wallGate2Node = null, this.wallGate3Node = null, this.doorNode = null, this.door1Node = null, this.door2Node = null, this.door3Node = null, this.hammerNode = null, this.hammer1Node = null, this.holeNode = null, this.holeZombieNode = null, this.hole1Node = null, this.cabinetNode = null, this.cabinet1Node = null, this.cabinet2Node = null, this.mouseHoleNode = null, this.holeTouchNode = null, this.mouseNode = null, this.mouse1Node = null, this.mouse2Node = null, this.poolNode = null, this.pool1Node = null, this.poolOpenNode = null, this.poolOpen1Node = null, this.poolOpenZombieNode = null, this.pool11Node = null, this.pool1ZombieNode = null, this.windowNode = null, this.window1Node = null, this.window2Node = null, this.windowZombieNode = null, this.radioNode = null, this.radio1Node = null, this.boyNode = null, this.boyHungryNode = null, this.boyHungry1Node = null, this.boyArmorNode = null, this.boyArmor1Node = null, this.shiverNode = null, this.tableNode = null, this.foodNode = null, this.food1Node = null, this.food2Node = null, this.moneyRootNode = null, this.bgEndNode = null, this.bgEndLadderNode = null, this.failureRootNode = null, this.failureBlackNode = null, this.failureClawNode = null, this.playableMoneyNodes = [], this.isInteractionLocked = !1, this.hasWrongPool = !1, this.hasBoyArmor = !1, this.hasPoolOpened = !1, this.hasCheesePlaced = !1, this.hasCabinetSmashed = !1, this.voiceToken = 0, this.currentDialogueKey = "", this.swipeStartPoint = null, this.activeDragState = null, this.hammerOrigin = new __rea_outer_i(-14, -129, 0), this.hammerSmashPos = new __rea_outer_i(254.5, 125, 0), this.cabinet1Origin = new __rea_outer_i(423.5, 2, 0), this.radioOrigin = new __rea_outer_i(439.5, 307.5, 0), this.radioFallPos = new __rea_outer_i(410, 43.5, 0), this.food2Origin = new __rea_outer_i(98.5, -27, 0), this.ladderRestPos = new __rea_outer_i(91.5, 335.5, 0), this.zombieOrigin = new __rea_outer_i(-282, 3, 0), this.completedSteps = new Set(), this.onTouchStart = e => {
      if (1 !== this.phase || this.winstate || this.isInteractionLocked) return;
      const t = this.getTouchWorldPoint(e),
        i = this.hitTestPointer(t);
      if (i) return this.beginDrag(i.node, i.kind, e), void (e.propagationStopped = !0);
      this.canSwipePool() && this.isTouchOnPool(t) && (this.swipeStartPoint = t, e.propagationStopped = !0);
    }, this.onTouchMove = e => {
      if (this.activeDragState && 1 === this.phase && !this.isInteractionLocked) {
        const t = this.activeDragState;
        this.setDragNodePositionFromTouch(e, t.dragNode, t.dragParent, t.touchOffset), this.trackPoolSwipeDuringMoneyDrag(e, t.dragKind), e.propagationStopped = !0;
      }
    }, this.onTouchEnd = e => {
      if (1 !== this.phase || this.winstate) return this.resetActiveDrag(), void (this.swipeStartPoint = null);
      if (this.activeDragState && !this.isInteractionLocked) {
        const t = this.activeDragState;
        return this.activeDragState = null, this.tryOpenPoolCabinetFromSwipe(e) ? (this.restoreDragNode(t), void (e.propagationStopped = !0)) : (this.handleDragDrop(t), void (e.propagationStopped = !0));
      }
      this.resetActiveDrag(), this.tryOpenPoolCabinetFromSwipe(e);
    }, this.hideBubble = () => {
      this.isValid && this.setNodeActive(this.bubbleNode, !1);
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.allItemNum = C, this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.enterPhase0();
  }
  onDestroy() {
    this.cleanupRuntime(), super.onDestroy();
  }
  handleTimeExpired() {
    return !!(this.phase >= 2 || this.winstate);
  }
  showHint() {
    if (1 !== this.phase) return;
    const e = this.resolveHintKey();
    if (!e) return;
    const t = __rea_outer_p.getInstance().getKey(e);
    __rea_outer_g.getInstance().showView(__rea_outer_b, void 0, {
      body: t
    });
  }
  getGameProgressSnapshot() {
    const e = this.completedSteps.size;
    return {
      progress: e / C,
      label: `${e}/10`
    };
  }
  markAllTasksCompleted() {
    for (let e = 1; e <= C; e += 1) this.completedSteps.add(e);
    this.hasInstallNum = C;
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.isInteractionLocked = !1, this.hasWrongPool = !1, this.hasBoyArmor = !1, this.hasPoolOpened = !1, this.hasCheesePlaced = !1, this.hasCabinetSmashed = !1, this.voiceToken = 0, this.currentDialogueKey = "", this.swipeStartPoint = null, this.activeDragState = null, this.completedSteps.clear(), this.hasInstallNum = 0, __rea_outer_c.stopVoice();
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_c.playMusic("bgm5", !0, .5), this.applyInitialVisibility(), this.startShiver(), this.setInputBlocked(!0), __rea_outer_v.getInstance().refreshGameProgress(), this.playDialogue("43_1", () => {
      this.isValid && 0 === this.phase && (this.setInputBlocked(!1), this.enterPhase1());
    });
  }
  skipOpeningToPlay() {
    return 0 === this.phase && (this.voiceToken += 1, this.stopOpeningDialogue(), this.setInputBlocked(!1), this.enterPhase1(), !0);
  }
  enterPhase1() {
    0 === this.phase && (this.phase = 1, this.registerInteractionHandlers(), this.startZombieSlamLoop(), __rea_outer_v.getInstance().refreshGameProgress());
  }
  enterPhase2Success() {
    this.phase >= 2 || (this.phase = 2, this.winstate = !0, this.isInteractionLocked = !0, this.unregisterInteractionHandlers(), this.resetActiveDrag(), this.stopShiver(), this.stopZombieSlamLoop(), this.setInputBlocked(!0), __rea_outer_v.getInstance().pauseTimer(), this.playRescueOutro());
  }
  enterPhase2MoneyFail() {
    this.phase >= 2 || (this.phase = 2, this.winstate = !1, this.isInteractionLocked = !0, this.unregisterInteractionHandlers(), this.resetActiveDrag(), this.stopZombieSlamLoop(), this.setInputBlocked(!0), __rea_outer_v.getInstance().pauseTimer(), this.playUnreinforcedFailThenClaw());
  }
  beginTimeoutFail() {
    this.phase = 2, this.winstate = !1, this.isInteractionLocked = !0, this.cleanupRuntime(), __rea_outer_v.getInstance().pauseTimer(), __rea_outer_g.getInstance().showView(__rea_outer_m, __rea_outer_u.WIN_ANIMATION);
  }
  playRescueOutro() {
    const e = this.bgEndLadderNode;
    if (null != e && e.isValid) {
      var t;
      const i = (null == (t = e.getComponent(__rea_outer_o)) ? void 0 : t.height) ?? 641;
      e.setPosition(this.ladderRestPos.x, this.ladderRestPos.y + i, this.ladderRestPos.z), this.setNodeActive(e, !0), this.stopTweenIfValid(e), __rea_outer_s(e).to(.5, {
        position: this.ladderRestPos.clone()
      }).start();
    }
    __rea_outer_c.playEffect_1("level43_3"), this.playDialogue("43_14", () => {
      this.isValid && 2 === this.phase && (this.setNodeActive(this.bubbleNode, !1), this.setNodeActive(this.bgEndNode, !0), this.showLevelSuccess(1));
    });
  }
  playUnreinforcedFailThenClaw() {
    const e = this.findLowestIncompleteStep();
    this.playFailVisual(e, () => {
      this.isValid && 2 === this.phase && this.scheduleOnceIfValid(() => {
        this.showFailBlackScreen(), this.scheduleOnceIfValid(() => {
          this.showFailClaw(), this.scheduleOnceIfValid(() => {
            __rea_outer_g.getInstance().showView(__rea_outer_m, __rea_outer_u.WIN_ANIMATION);
          }, 1);
        }, .5);
      }, .5);
    });
  }
  findLowestIncompleteStep() {
    for (let e = 1; e <= C; e += 1) if (!this.completedSteps.has(e)) return e;
    return 1;
  }
  playFailVisual(e, t) {
    switch (e) {
      case 1:
        return this.setNodeActive(this.windowNode, !1), this.setNodeActive(this.window2Node, !0), this.setNodeActive(this.windowZombieNode, !0), void this.playSfxThen(S, t);
      case 2:
        return void this.playStarveFail(t);
      case 3:
        return this.setNodeActive(this.bgRightLand2Node, !0), this.setNodeActive(this.bgRightLandZombieNode, !0), void this.playSfxThen(S, t);
      case 4:
        return this.setNodeActive(this.bgRightWall2Node, !0), this.setNodeActive(this.bgRightWallZombieNode, !0), void this.playSfxThen(S, t);
      case 5:
        return this.setNodeActive(this.holeZombieNode, !0), void this.playSfxThen(S, t);
      case 6:
        return this.setNodeActive(this.cabinet2Node, !1), this.setNodeActive(this.holeZombieNode, !0), void this.playSfxThen(S, t);
      case 7:
        return void this.playDoorBreakFail(!1, t);
      case 8:
      case 9:
        return void this.playDoorBreakFail(this.completedSteps.has(7), t);
      case 10:
        return void this.playPoolFail(t);
      default:
        this.playSfxThen(S, t);
    }
  }
  playStarveFail(e) {
    this.stopShiver(), this.setNodeActive(this.boyNode, !1), this.setNodeActive(this.boyArmorNode, !1), this.setNodeActive(this.shiverNode, !1), this.hasBoyArmor ? this.setNodeActive(this.boyArmor1Node, !0) : this.setNodeActive(this.boyHungryNode, !0), this.setNodeActive(this.boyHungry1Node, !0), this.playDialogue("43_15", e);
  }
  playDoorBreakFail(e, t) {
    this.stopZombieSlamLoop(), e ? (this.alignNodeTo(this.wallGateNode, this.wallGate3Node), this.alignNodeTo(this.doorNode, this.door3Node), this.setNodeActive(this.door1Node, !1), this.setNodeActive(this.wallGate1Node, !1), this.setNodeActive(this.wallGate3Node, !0), this.setNodeActive(this.door3Node, !0), this.moveZombieToward(this.door3Node)) : (this.alignNodeTo(this.wallGateNode, this.wallGate2Node), this.alignNodeTo(this.doorNode, this.door2Node), this.setNodeActive(this.doorNode, !1), this.setNodeActive(this.wallGateNode, !1), this.setNodeActive(this.wallGate2Node, !0), this.setNodeActive(this.door2Node, !0), this.moveZombieToward(this.door2Node)), this.playSfxThen(S, t);
  }
  playPoolFail(e) {
    this.hasPoolOpened ? this.setNodeActive(this.poolOpenZombieNode, !0) : (this.setNodeActive(this.pool11Node, !0), this.setNodeActive(this.pool1ZombieNode, !0)), this.playSfxThen(S, e);
  }
  moveZombieToward(e) {
    const t = this.zombieNode;
    if (null == t || !t.isValid) return;
    const o = null != e && e.isValid ? e.position.x : t.position.x + 120;
    this.stopZombieSlamLoop(), __rea_outer_s(t).to(.5, {
      position: new __rea_outer_i(o, t.position.y, t.position.z)
    }).start();
  }
  startZombieSlamLoop() {
    const e = this.zombieNode;
    if (null == e || !e.isValid) return;
    this.stopZombieSlamLoop(), e.setPosition(this.zombieOrigin);
    const t = new __rea_outer_i(this.zombieOrigin.x + 56, this.zombieOrigin.y, this.zombieOrigin.z);
    __rea_outer_s(e).repeatForever(__rea_outer_s().to(.28, {
      position: t
    }).to(.28, {
      position: this.zombieOrigin.clone()
    })).start();
  }
  stopZombieSlamLoop() {
    this.stopTweenIfValid(this.zombieNode);
  }
  raiseFailOverlay() {
    const e = this.failureRootNode,
      t = this.node.getChildByName("UIPanel");
    if (null == e || !e.isValid || null == t || !t.isValid) return;
    const i = e.worldPosition.clone();
    e.setParent(t);
    const s = t.getComponent(__rea_outer_o);
    s && e.setPosition(s.convertToNodeSpaceAR(i)), e.setSiblingIndex(t.children.length - 1);
  }
  alignNodeTo(e, t) {
    null != e && e.isValid && null != t && t.isValid && t.setPosition(e.position);
  }
  showFailBlackScreen() {
    this.setNodeActive(this.failureClawNode, !1), this.setNodeActive(this.failureBlackNode, !0), this.setNodeActive(this.failureRootNode, !0), this.raiseFailOverlay();
  }
  showFailClaw() {
    this.setNodeActive(this.failureClawNode, !0), __rea_outer_c.playEffect_1("level43_4");
  }
  applyInitialVisibility() {
    this.setNodeActive(this.clickRootNode, !1), this.setNodeActive(this.demoNode, !1), this.setNodeActive(this.dialogBox1Node, !1), this.setNodeActive(this.bgRightWallNode, !0), this.setNodeActive(this.bgRightWall1Node, !1), this.setNodeActive(this.bgRightWall2Node, !1), this.setNodeActive(this.bgRightWallZombieNode, !1), this.setNodeActive(this.bgRightLandNode, !0), this.setNodeActive(this.bgRightLand1Node, !1), this.setNodeActive(this.bgRightLand2Node, !1), this.setNodeActive(this.bgRightLandZombieNode, !1), this.setNodeActive(this.bgLeftNode, !0), this.setNodeActive(this.zombieNode, !0), this.restoreZombieOrigin(), this.setNodeActive(this.wallGateNode, !0), this.setNodeActive(this.wallGate1Node, !1), this.setNodeActive(this.wallGate2Node, !1), this.setNodeActive(this.wallGate3Node, !1), this.setNodeActive(this.doorNode, !0), this.setNodeActive(this.door1Node, !1), this.setNodeActive(this.door2Node, !1), this.setNodeActive(this.door3Node, !1), this.setNodeActive(this.hammerNode, !0), this.restoreHammerOrigin(), this.resetHammerSmashPose(), this.setNodeActive(this.hammer1Node, !1), this.setNodeActive(this.holeNode, !0), this.setNodeActive(this.holeZombieNode, !1), this.setNodeActive(this.hole1Node, !1), this.setNodeActive(this.cabinetNode, !0), this.setNodeActive(this.cabinet1Node, !1), this.setNodeActive(this.cabinet2Node, !1), this.setNodeActive(this.mouseHoleNode, !0), this.setNodeActive(this.mouseNode, !1), this.setNodeActive(this.mouse1Node, !1), this.setNodeActive(this.mouse2Node, !1), this.setNodeActive(this.poolNode, !0), this.setNodeActive(this.pool1Node, !1), this.setNodeActive(this.poolOpenNode, !1), this.setNodeActive(this.poolOpen1Node, !1), this.alignCoverToBase(this.poolOpen1Node, this.poolOpenNode), this.setNodeActive(this.poolOpenZombieNode, !1), this.setNodeActive(this.pool11Node, !1), this.setNodeActive(this.pool1ZombieNode, !1), this.setNodeActive(this.windowNode, !0), this.setNodeActive(this.window1Node, !1), this.setNodeActive(this.window2Node, !1), this.setNodeActive(this.windowZombieNode, !1), this.setNodeActive(this.radioNode, !0), this.restoreRadioOrigin(), this.setNodeActive(this.radio1Node, !1), this.setNodeActive(this.boyNode, !0), this.setNodeActive(this.boyHungryNode, !1), this.setNodeActive(this.boyHungry1Node, !1), this.setNodeActive(this.boyArmorNode, !1), this.setNodeActive(this.boyArmor1Node, !1), this.setNodeActive(this.shiverNode, !0), this.setNodeActive(this.tableNode, !0), this.setNodeActive(this.food1Node, !0), this.setNodeActive(this.foodNode, !1), this.setNodeActive(this.food2Node, !1), this.applyMoneyInitialVisibility(), this.setNodeActive(this.bgEndNode, !1), this.setNodeActive(this.bgEndLadderNode, !1), this.setNodeActive(this.failureRootNode, !1), this.setNodeActive(this.failureClawNode, !1), this.setNodeActive(this.bubbleNode, !1);
  }
  applyMoneyInitialVisibility() {
    var e;
    for (let e = 0; e < this.playableMoneyNodes.length; e += 1) this.setNodeActive(this.playableMoneyNodes[e], !0);
    const t = (null == (e = this.moneyRootNode) ? void 0 : e.children[9]) ?? null;
    this.setNodeActive(t, !1);
  }
  registerInteractionHandlers() {
    this.node.on(__rea_outer_h.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(__rea_outer_h.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(__rea_outer_h.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(__rea_outer_h.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
  }
  unregisterInteractionHandlers() {
    var e;
    null != (e = this.node) && e.isValid && (this.node.off(__rea_outer_h.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(__rea_outer_h.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(__rea_outer_h.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(__rea_outer_h.EventType.TOUCH_CANCEL, this.onTouchEnd, this));
  }
  trackPoolSwipeDuringMoneyDrag(e, t) {
    if ("money" !== t || !this.canSwipePool()) return;
    const i = this.getTouchWorldPoint(e);
    this.isTouchOnPool(i) ? this.swipeStartPoint || (this.swipeStartPoint = i) : this.swipeStartPoint = null;
  }
  tryOpenPoolCabinetFromSwipe(e) {
    const t = this.swipeStartPoint;
    if (this.swipeStartPoint = null, !t || this.isInteractionLocked || !this.canSwipePool()) return !1;
    const i = this.getTouchWorldPoint(e),
      o = __rea_outer_w.isSwipeMatching(t, i, __rea_outer_f.Left),
      s = __rea_outer_w.isSwipeMatching(t, i, __rea_outer_f.Right);
    return !(!o && !s) && (this.openPoolCabinet(), !0);
  }
  openPoolCabinet() {
    this.hasPoolOpened = !0, this.setNodeActive(this.poolOpenNode, !0);
  }
  hitTestPointer(e) {
    const t = [];
    for (let i = this.playableMoneyNodes.length - 1; i >= 0; i -= 1) this.pushDragHit(t, this.playableMoneyNodes[i], "money", e, !0);
    return this.pushDragHit(t, this.hammerNode, "hammer", e, !this.hasCabinetSmashed), this.pushDragHit(t, this.cabinet1Node, "cabinetBoard", e, this.hasCabinetSmashed && !this.completedSteps.has(5)), this.pushDragHit(t, this.food2Node, "cheese", e, this.completedSteps.has(8) && !this.hasCheesePlaced), 0 === t.length ? null : (t.sort((e, t) => "money" === e.kind && "money" !== t.kind ? -1 : "money" !== e.kind && "money" === t.kind ? 1 : e.area - t.area), t[0]);
  }
  pushDragHit(e, t, i, o, s) {
    s && null != t && t.active && this.isPointInsideNode(t, o) && e.push({
      node: t,
      area: this.getNodeArea(t),
      kind: i
    });
  }
  beginDrag(e, t, i) {
    const o = e.parent;
    if (null == o || !o.isValid) return;
    const s = e.position.clone(),
      h = e.worldPosition.clone(),
      d = e.getSiblingIndex(),
      l = this.artRoot ?? o;
    e.setParent(l), this.placeNodeAtWorld(e, l, h), e.setSiblingIndex(l.children.length - 1);
    const n = this.calculateTouchOffset(i, e, l);
    this.setDragNodePositionFromTouch(i, e, l, n), this.activeDragState = {
      dragNode: e,
      dragKind: t,
      dragParent: l,
      touchOffset: n,
      originParent: o,
      originPosition: s,
      originWorldPosition: h,
      originSiblingIndex: d
    };
  }
  handleDragDrop(e) {
    __rea_outer_i.distance(e.dragNode.worldPosition, e.originWorldPosition) < 60 ? this.restoreDragNode(e) : "money" !== e.dragKind ? "hammer" !== e.dragKind ? "cabinetBoard" !== e.dragKind ? this.handleCheeseDrop(e) : this.handleCabinetBoardDrop(e) : this.handleHammerDrop(e) : this.handleMoneyDrop(e);
  }
  handleMoneyDrop(e) {
    const t = this.resolveMoneyDrop(e.dragNode);
    t ? (this.consumeMoney(e), "wrongPool" !== t.type ? "wrongBoy" !== t.type ? this.completeMoneyStep(t.step) : this.completeWrongBoy() : this.completeWrongPool()) : this.restoreDragNode(e);
  }
  resolveMoneyDrop(e) {
    if (this.hasPoolOpened && this.isStepAvailable(10) && this.isNodeCenterInside(e, this.poolOpenNode)) return {
      type: "step",
      step: 10
    };
    const t = [];
    return this.pushMoneyDrop(t, this.windowNode, e, {
      type: "step",
      step: 1
    }, this.isStepAvailable(1)), this.pushMoneyDrop(t, this.radioNode, e, {
      type: "step",
      step: 2
    }, this.isStepAvailable(2)), this.pushMoneyDrop(t, this.bgRightLandNode, e, {
      type: "step",
      step: 3
    }, this.isStepAvailable(3)), this.pushMoneyDrop(t, this.bgRightWallNode, e, {
      type: "step",
      step: 4
    }, this.isStepAvailable(4)), this.pushMoneyDrop(t, this.cabinet2Node, e, {
      type: "step",
      step: 6
    }, this.completedSteps.has(5) && this.isStepAvailable(6)), this.pushMoneyDrop(t, this.doorNode, e, {
      type: "step",
      step: 7
    }, this.isStepAvailable(7)), this.pushMoneyDrop(t, this.wallGateNode, e, {
      type: "step",
      step: 7
    }, this.isStepAvailable(7)), this.pushMoneyDrop(t, this.food1Node, e, {
      type: "step",
      step: 8
    }, this.isStepAvailable(8)), this.pushMoneyDrop(t, this.holeTouchNode, e, {
      type: "step",
      step: 9
    }, this.hasCheesePlaced && this.isStepAvailable(9)), this.pushMoneyDrop(t, this.poolNode, e, {
      type: "wrongPool"
    }, !this.hasWrongPool && !this.hasPoolOpened), this.pushMoneyDrop(t, this.boyNode, e, {
      type: "wrongBoy"
    }, !this.hasBoyArmor), 0 === t.length ? null : (t.sort((e, t) => e.area - t.area), t[0].drop);
  }
  pushMoneyDrop(e, t, i, o, s) {
    s && this.isNodeCenterInside(i, t) && t && e.push({
      node: t,
      area: this.getNodeArea(t),
      drop: o
    });
  }
  completeMoneyStep(e) {
    this.playActionSound(), this.applyStepVisual(e), this.markStepDone(e), this.lockInteraction(), this.playDialogue(O[e - 1], () => {
      this.isValid && 1 === this.phase && (9 === e && (this.setNodeActive(this.mouse1Node, !1), this.setNodeActive(this.mouse2Node, !0)), this.finishLockedAction());
    });
  }
  applyStepVisual(e) {
    switch (e) {
      case 1:
        return this.setNodeActive(this.windowNode, !1), void this.setNodeActive(this.window1Node, !0);
      case 2:
        return this.setNodeActive(this.radioNode, !1), void this.setNodeActive(this.radio1Node, !0);
      case 3:
        return this.setNodeActive(this.bgRightLandNode, !1), void this.setNodeActive(this.bgRightLand1Node, !0);
      case 4:
        return this.setNodeActive(this.bgRightWallNode, !1), void this.setNodeActive(this.bgRightWall1Node, !0);
      case 6:
        return this.setNodeActive(this.cabinet2Node, !1), void this.setNodeActive(this.hole1Node, !0);
      case 7:
        return this.alignNodeTo(this.wallGateNode, this.wallGate1Node), this.alignNodeTo(this.doorNode, this.door1Node), this.setNodeActive(this.doorNode, !1), this.setNodeActive(this.wallGateNode, !1), this.setNodeActive(this.door1Node, !0), void this.setNodeActive(this.wallGate1Node, !0);
      case 8:
        return this.setNodeActive(this.food1Node, !1), this.setNodeActive(this.foodNode, !0), void this.setNodeActive(this.food2Node, !0);
      case 9:
        return this.setNodeActive(this.mouseNode, !1), void this.setNodeActive(this.mouse1Node, !0);
      case 10:
        return void this.showPoolPipeCover();
      default:
        return;
    }
  }
  completeWrongPool() {
    this.hasWrongPool = !0, this.playActionSound(), this.setNodeActive(this.poolNode, !1), this.setNodeActive(this.pool1Node, !0), this.pool1Node || this.setNodeActive(this.poolNode, !0), this.lockInteraction(), this.playDialogue("43_12", () => {
      this.isValid && 1 === this.phase && this.finishLockedAction();
    });
  }
  completeWrongBoy() {
    this.hasBoyArmor = !0, this.playActionSound(), this.setNodeActive(this.boyArmorNode, !0), this.lockInteraction(), this.playDialogue("43_13", () => {
      this.isValid && 1 === this.phase && this.finishLockedAction();
    });
  }
  handleHammerDrop(e) {
    this.isNodeCenterInside(e.dragNode, this.cabinetNode) ? (this.setNodeActive(e.dragNode, !1), this.restoreNodeTransform(e.dragNode, e), this.playHammerSmash()) : this.restoreDragNode(e);
  }
  playHammerSmash() {
    this.hasCabinetSmashed = !0, this.playRadioFallIfWallUnreinforced();
    const e = this.hammer1Node;
    null != e && e.isValid ? (this.lockInteraction(), this.stopTweenIfValid(e), e.setPosition(this.hammerSmashPos), e.angle = -19, this.setNodeActive(e, !0), __rea_outer_s(e).to(.35, {
      angle: 25
    }, {
      easing: "cubicIn"
    }).call(() => {
      this.isValid && 1 === this.phase && this.finishHammerSmash();
    }).start()) : this.finishHammerSmash();
  }
  playRadioFallIfWallUnreinforced() {
    var e;
    const t = null != (e = this.radio1Node) && e.active ? this.radio1Node : this.radioNode;
    null != t && t.isValid && t.active && (this.stopTweenIfValid(t), __rea_outer_s(t).to(.45, {
      position: this.radioFallPos.clone()
    }, {
      easing: "cubicIn"
    }).start());
  }
  finishHammerSmash() {
    var e;
    this.resetHammerSmashPose(), this.setNodeActive(this.hammer1Node, !1), this.setNodeActive(this.cabinetNode, !1), this.setNodeActive(this.cabinet1Node, !0), null != (e = this.cabinet1Node) && e.isValid && this.cabinet1Node.setPosition(this.cabinet1Origin), this.isInteractionLocked = !1, this.setInputBlocked(!1);
  }
  resetHammerSmashPose() {
    var e;
    this.stopTweenIfValid(this.hammer1Node), null != (e = this.hammer1Node) && e.isValid && (this.hammer1Node.angle = 0, this.hammer1Node.setPosition(this.hammerSmashPos));
  }
  handleCabinetBoardDrop(e) {
    this.isNodeCenterInside(e.dragNode, this.holeNode) ? (this.setNodeActive(e.dragNode, !1), this.restoreNodeTransform(e.dragNode, e), this.playActionSound(), this.setNodeActive(this.cabinet2Node, !0), this.markStepDone(5), this.lockInteraction(), this.playDialogue(O[4], () => {
      this.isValid && 1 === this.phase && this.finishLockedAction();
    })) : this.restoreDragNode(e);
  }
  handleCheeseDrop(e) {
    this.isNodeCenterInside(e.dragNode, this.holeTouchNode) ? (this.hasCheesePlaced = !0, this.setNodeActive(e.dragNode, !1), this.restoreNodeTransform(e.dragNode, e), this.setNodeActive(this.mouseNode, !0)) : this.restoreDragNode(e);
  }
  consumeMoney(e) {
    this.restoreNodeTransform(e.dragNode, e), this.setNodeActive(e.dragNode, !1);
  }
  finishLockedAction() {
    this.completedSteps.size >= C ? this.enterPhase2Success() : this.countRemainingMoney() <= 0 ? this.enterPhase2MoneyFail() : (this.isInteractionLocked = !1, this.setInputBlocked(!1));
  }
  countRemainingMoney() {
    let e = 0;
    for (let t = 0; t < this.playableMoneyNodes.length; t += 1) {
      const i = this.playableMoneyNodes[t];
      i.isValid && i.active && (e += 1);
    }
    return e;
  }
  markStepDone(e) {
    this.completedSteps.has(e) || (this.completedSteps.add(e), this.hasInstallNum = this.completedSteps.size, __rea_outer_v.getInstance().refreshGameProgress());
  }
  isStepAvailable(e) {
    return !this.completedSteps.has(e);
  }
  canSwipePool() {
    return !this.hasPoolOpened && !this.completedSteps.has(10);
  }
  isTouchOnPool(e) {
    return !this.hasPoolOpened && (this.hasWrongPool ? this.isPointInsideNode(this.pool1Node, e) : this.isPointInsideNode(this.poolNode, e));
  }
  showPoolPipeCover() {
    this.alignCoverToBase(this.poolOpen1Node, this.poolOpenNode), this.setNodeActive(this.poolOpen1Node, !0);
  }
  alignCoverToBase(e, t) {
    var i;
    if (null == e || !e.isValid || null == t || !t.isValid) return;
    const o = null == (i = e.getComponent(__rea_outer_d)) || null == (i = i.spriteFrame) ? void 0 : i.offset;
    o ? e.setPosition(t.position.x + o.x, t.position.y + o.y, t.position.z) : e.setPosition(t.position);
  }
  startShiver() {
    this.playShiverOnNode(this.boyNode), this.playShiverOnNode(this.shiverNode);
  }
  stopShiver() {
    var e, t;
    this.stopTweenIfValid(this.boyNode), this.stopTweenIfValid(this.shiverNode), null != (e = this.boyNode) && e.isValid && (this.boyNode.angle = 0), null != (t = this.shiverNode) && t.isValid && (this.shiverNode.angle = 0);
  }
  playShiverOnNode(e) {
    null != e && e.isValid && (__rea_outer_A(e), e.angle = 0, __rea_outer_y.shakeRepeat(e, .08, 2, .02));
  }
  lockInteraction() {
    this.isInteractionLocked = !0, this.setInputBlocked(!0);
  }
  playActionSound() {
    __rea_outer_c.playEffect_1("level43_1");
  }
  playDialogue(e, t) {
    this.voiceToken += 1;
    const i = this.voiceToken;
    this.showBubble(e);
    let o = !1;
    const s = () => {
        !o && this.isValid && i === this.voiceToken && (o = !0, this.unschedule(h), t());
      },
      h = () => {
        s();
      };
    this.scheduleOnce(h, 8), this.stopCurrentDialogueEffect(), this.currentDialogueKey = e, __rea_outer_c.playEffect_1(e, s);
  }
  playSfxThen(e, t) {
    this.voiceToken += 1;
    const i = this.voiceToken;
    let o = !1;
    const s = () => {
        !o && this.isValid && i === this.voiceToken && (o = !0, this.unschedule(h), t());
      },
      h = () => {
        s();
      };
    this.scheduleOnce(h, 8), this.stopCurrentDialogueEffect(), this.currentDialogueKey = e, __rea_outer_c.playEffect_1(e, s);
  }
  stopCurrentDialogueEffect() {
    __rea_outer_c.stopVoice(), this.currentDialogueKey && (__rea_outer_c.stopOneEffect(this.currentDialogueKey), this.currentDialogueKey = "");
  }
  showBubble(e) {
    this.unschedule(this.hideBubble), this.bubbleLabel && (this.bubbleLabel.string = this.resolveI18nText(e, I[e] ?? e), this.setNodeActive(this.bubbleLabel.node, !0)), this.setNodeActive(this.bubbleNode, !0), this.scheduleOnce(this.hideBubble, 3);
  }
  resolveI18nText(e, t) {
    const i = __rea_outer_p.getInstance().getKey(e);
    return i && i !== e ? i : t;
  }
  resolveHintKey() {
    for (let e = 1; e <= C; e += 1) if (!this.completedSteps.has(e)) return D[e - 1];
    return null;
  }
  resetActiveDrag() {
    this.activeDragState && (this.restoreDragNode(this.activeDragState), this.activeDragState = null);
  }
  restoreDragNode(e) {
    this.restoreNodeTransform(e.dragNode, e);
  }
  restoreNodeTransform(e, t) {
    e.isValid && (e.setParent(t.originParent), e.setSiblingIndex(t.originSiblingIndex), e.setPosition(t.originPosition));
  }
  restoreHammerOrigin() {
    var e;
    null != (e = this.hammerNode) && e.isValid && this.hammerNode.setPosition(this.hammerOrigin);
  }
  restoreRadioOrigin() {
    var e;
    this.stopTweenIfValid(this.radioNode), null != (e = this.radioNode) && e.isValid && this.radioNode.setPosition(this.radioOrigin);
  }
  restoreZombieOrigin() {
    var e;
    null != (e = this.zombieNode) && e.isValid && this.zombieNode.setPosition(this.zombieOrigin);
  }
  cleanupRuntime() {
    this.unscheduleAllCallbacks(), this.unregisterInteractionHandlers(), this.voiceToken += 1, this.stopCurrentDialogueEffect(), this.resetActiveDrag(), this.stopShiver(), this.stopTweenIfValid(this.hammer1Node), this.stopTweenIfValid(this.radioNode), this.stopTweenIfValid(this.zombieNode), this.stopTweenIfValid(this.bgEndLadderNode);
  }
  stopTweenIfValid(e) {
    null != e && e.isValid && __rea_outer_A(e);
  }
  setInputBlocked(e) {
    this.setNodeActive(this.backBgNode, e);
  }
  scheduleOnceIfValid(e, t) {
    this.scheduleOnce(() => {
      this.isValid && e();
    }, t);
  }
  isPointInsideNode(e, t) {
    if (null == e || !e.isValid || !e.activeInHierarchy) return !1;
    const i = e.getComponent(__rea_outer_o);
    return !!i && i.getBoundingBoxToWorld().contains(t);
  }
  isNodeCenterInside(e, t) {
    return __rea_outer_N.isDragNearTarget(e, t);
  }
  getNodeArea(e) {
    const t = e.getComponent(__rea_outer_o);
    return t ? Math.max(1, t.width * t.height) : Number.MAX_SAFE_INTEGER;
  }
  getTouchWorldPoint(e) {
    const t = e.getUILocation();
    return new __rea_outer_l(t.x, t.y);
  }
  getTouchLocalPosition(e, t) {
    const s = e.getUILocation(),
      h = t.getComponent(__rea_outer_o);
    return h ? h.convertToNodeSpaceAR(new __rea_outer_i(s.x, s.y, 0)) : __rea_outer_i.ZERO.clone();
  }
  calculateTouchOffset(e, t, o) {
    const s = this.getTouchLocalPosition(e, o);
    return new __rea_outer_i(t.position.x - s.x, t.position.y - s.y, 0);
  }
  setDragNodePositionFromTouch(e, t, i, o) {
    const s = this.getTouchLocalPosition(e, i);
    t.setPosition(s.x + o.x, s.y + o.y, t.position.z);
  }
  placeNodeAtWorld(e, t, i) {
    const s = t.getComponent(__rea_outer_o);
    s && e.setPosition(s.convertToNodeSpaceAR(i));
  }
  setNodeActive(e, t) {
    null != e && e.isValid && (e.active = t);
  }
  getArtChild(e) {
    var t;
    return (null == (t = this.artRoot) ? void 0 : t.getChildByName(e)) ?? null;
  }
  copyNodePosition(e, t) {
    null != e && e.isValid && t.set(e.position);
  }
  resolveReferences() {
    var e, t, i, o, s;
    this.gameNode = this.node.getChildByPath("UIPanel/gameNode"), this.artRoot = this.node.getChildByPath("UIPanel/gameNode/43"), this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.bubbleNode = this.node.getChildByPath("UIPanel/bubble"), this.demoNode = this.node.getChildByPath("UIPanel/demo"), this.clickRootNode = this.node.getChildByPath("UIPanel/click_root"), this.holeTouchNode = this.node.getChildByPath("UIPanel/gameNode/clicks/holetouch"), this.dialogBox1Node = (null == (e = this.bubbleNode) ? void 0 : e.getChildByName("dialog_box_1")) ?? null, this.bubbleLabel = (null == (t = this.bubbleNode) || null == (t = t.getChildByPath("dialog_box/Label")) ? void 0 : t.getComponent(__rea_outer_n)) ?? null, this.bgRightWallNode = this.getArtChild("bg_right_wall"), this.bgRightWall1Node = this.getArtChild("bg_right_wall_1"), this.bgRightWall2Node = this.getArtChild("bg_right_wall_2"), this.bgRightWallZombieNode = this.getArtChild("bg_right_wall_zombie"), this.bgRightLandNode = this.getArtChild("bg_right_land"), this.bgRightLand1Node = this.getArtChild("bg_right_land_1"), this.bgRightLand2Node = this.getArtChild("bg_right_land_2"), this.bgRightLandZombieNode = this.getArtChild("bg_right_land_zombie"), this.bgLeftNode = this.getArtChild("bg_left"), this.zombieNode = this.getArtChild("zombie"), this.wallGateNode = this.getArtChild("wall_gate"), this.wallGate1Node = this.getArtChild("wall_gate_1"), this.wallGate2Node = this.getArtChild("wall_gate_2"), this.wallGate3Node = this.getArtChild("wall_gate_3"), this.doorNode = this.getArtChild("door"), this.door1Node = this.getArtChild("door_1"), this.door2Node = this.getArtChild("door_2"), this.door3Node = this.getArtChild("door_3"), this.hammerNode = this.getArtChild("hammer"), this.hammer1Node = this.getArtChild("hammer_1"), this.holeNode = this.getArtChild("hole"), this.holeZombieNode = this.getArtChild("hole_zombie"), this.hole1Node = this.getArtChild("hole_1"), this.cabinetNode = this.getArtChild("cabinet"), this.cabinet1Node = this.getArtChild("cabinet_1"), this.cabinet2Node = this.getArtChild("cabinet_2"), this.mouseHoleNode = this.getArtChild(T), this.mouseNode = this.getArtChild("mouse"), this.mouse1Node = this.getArtChild("mouse_1"), this.mouse2Node = this.getArtChild("mouse_2"), this.poolNode = this.getArtChild("pool"), this.pool1Node = this.getArtChild("pool_1"), this.poolOpenNode = this.getArtChild("pool_open"), this.poolOpen1Node = this.getArtChild("pool_open_1"), this.poolOpenZombieNode = this.getArtChild("pool_open_zombie"), this.pool11Node = this.getArtChild("pool_1_1"), this.pool1ZombieNode = this.getArtChild("pool_1_zombie"), this.windowNode = this.getArtChild("window"), this.window1Node = this.getArtChild("window_1"), this.window2Node = this.getArtChild("window_2"), this.windowZombieNode = this.getArtChild("window_zombie"), this.radioNode = this.getArtChild("radio"), this.radio1Node = this.getArtChild("radio_1"), this.boyNode = this.getArtChild("boy"), this.boyHungryNode = this.getArtChild("boy_hungry"), this.boyHungry1Node = this.getArtChild("boy_hungry_1"), this.boyArmorNode = (null == (i = this.artRoot) ? void 0 : i.getChildByPath("boy/boy_armor")) ?? null, this.boyArmor1Node = this.getArtChild("boy_armor_1"), this.shiverNode = this.getArtChild("shiver"), this.tableNode = this.getArtChild("table"), this.foodNode = this.getArtChild("food"), this.food1Node = this.getArtChild("food1"), this.food2Node = this.getArtChild("food_2"), this.moneyRootNode = this.getArtChild("钱"), this.bgEndNode = this.getArtChild("bg_end"), this.bgEndLadderNode = this.getArtChild("bg_end_ladder"), this.failureRootNode = this.getArtChild("failurenode"), this.failureBlackNode = (null == (o = this.failureRootNode) ? void 0 : o.getChildByName("general_bg")) ?? null, this.failureClawNode = (null == (s = this.failureBlackNode) ? void 0 : s.getChildByName("failure")) ?? null, this.resolveMoneyNodes(), this.copyNodePosition(this.hammerNode, this.hammerOrigin), this.copyNodePosition(this.hammer1Node, this.hammerSmashPos), this.copyNodePosition(this.cabinet1Node, this.cabinet1Origin), this.copyNodePosition(this.radioNode, this.radioOrigin), this.copyNodePosition(this.food2Node, this.food2Origin), this.copyNodePosition(this.bgEndLadderNode, this.ladderRestPos), this.copyNodePosition(this.zombieNode, this.zombieOrigin), this.logMissingNodes();
  }
  resolveMoneyNodes() {
    var e;
    const t = (null == (e = this.moneyRootNode) ? void 0 : e.children) ?? [];
    this.playableMoneyNodes = [];
    const i = Math.min(9, t.length);
    for (let e = 0; e < i; e += 1) this.playableMoneyNodes.push(t[e]);
  }
  logMissingNodes() {
    const e = [],
      t = (t, i) => {
        t || e.push(i);
      };
    t(this.gameNode, "UIPanel/gameNode"), t(this.artRoot, "UIPanel/gameNode/43"), t(this.backBgNode, "UIPanel/backBG"), t(this.bubbleNode, "UIPanel/bubble"), t(this.windowNode, "43/window"), t(this.window1Node, "43/window_1"), t(this.window2Node, "43/window_2"), t(this.radioNode, "43/radio"), t(this.bgRightLandNode, "43/bg_right_land"), t(this.bgRightLand1Node, "43/bg_right_land_1"), t(this.bgRightWallNode, "43/bg_right_wall"), t(this.bgRightWall1Node, "43/bg_right_wall_1"), t(this.doorNode, "43/door"), t(this.wallGate1Node, "43/wall_gate_1"), t(this.wallGate2Node, "43/wall_gate_2"), t(this.wallGate3Node, "43/wall_gate_3"), t(this.food1Node, "43/food1"), t(this.pool1Node, "43/pool_1"), t(this.poolOpenNode, "43/pool_open"), t(this.poolOpen1Node, "43/pool_open_1"), t(this.poolOpenZombieNode, "43/pool_open_zombie"), t(this.pool11Node, "43/pool_1_1"), t(this.pool1ZombieNode, "43/pool_1_zombie"), t(this.boyArmorNode, "43/boy/boy_armor"), t(this.boyArmor1Node, "43/boy_armor_1"), t(this.moneyRootNode, "43/钱"), t(this.mouseHoleNode, "43/图层 8"), t(this.holeTouchNode, "UIPanel/gameNode/clicks/holetouch"), t(this.failureRootNode, "43/failurenode"), t(this.failureBlackNode, "43/failurenode/general_bg"), t(this.failureClawNode, "43/failurenode/general_bg/failure"), this.playableMoneyNodes.length < 9 && e.push("43/钱 money x9"), e.length > 0 && console.warn("[Level_43] prefab 待办清单:", e.join(", "));
  }
}) || _;
__rea_outer_t._RF.pop();
export { __recovered_export_0 as default };
