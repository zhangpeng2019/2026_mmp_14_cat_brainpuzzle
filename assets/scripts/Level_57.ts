// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_57.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { Node as __rea_outer_i } from "cc";
import { Vec2 as __rea_outer_s } from "cc";
import { Vec3 as __rea_outer_o } from "cc";
import { tween as __rea_outer_h } from "cc";
import { UITransform as __rea_outer_a } from "cc";
import { Label as __rea_outer_n } from "cc";
import { _decorator as __rea_outer_d } from "cc";
import { default as __rea_outer_l } from "./LevelBase";
import { default as __rea_outer_c } from "./AudioManager";
import { I18nController as __rea_outer_r } from "./i18n-controller";
import { UIManager as __rea_outer_p } from "./ui-manager";
import { UILayer as __rea_outer_N } from "./ui-layer";
import { UIHint as __rea_outer_m } from "./uihint";
import { UIFail as __rea_outer_g } from "./uifail";
import { GameController as __rea_outer_u } from "./GameController";
import { stopAllTweens as __rea_outer_v } from "./CocosCompat";
import { default as __rea_outer_S } from "./clue-gesture-detector";
import { default as __rea_outer_A } from "./clue-hit-tester";
import { SwipeDirection as __rea_outer_f } from "./clue-level-types";
let __recovered_export_0;
var k;
__rea_outer_t._RF.push({}, "fffecwL3dZB14oxxL8zNY1o", "Level_57", void 0);
const {
    ccclass: b
  } = __rea_outer_d,
  T = 1194,
  y = [300, 15, 80, 60, 120, 5, 120, 155, 100, 89, 0, 150],
  C = ["57_3", "57_4", "57_5", "57_6", "57_7", "57_8", "57_9", "57_10", "57_11", "57_12", "57_13", "57_14"],
  _ = ["level57_hint1", "level57_hint2", "level57_hint3", "level57_hint4", "level57_hint5", "level57_hint6", "level57_hint7", "level57_hint8", "level57_hint9", "level57_hint10", "level57_hint11", "level57_hint12"],
  w = ["man", "shirt", "coat", "coat_1", "key", "bracelet", "box", "box_1", "hair", "man_head1", "man_head2", "man_head1_1", "man_head2_1", "man_vomit"];
__recovered_export_0 = b("Level_57")(k = class extends __rea_outer_l {
  constructor(...e) {
    super(...e), this.phase = 0, this.winstate = !1, this.gameNode = null, this.backBgNode = null, this.demoNode = null, this.clickRootNode = null, this.clicksNode = null, this.clicksTouchNode = null, this.manTouchNode = null, this.weightLabelNode = null, this.weightLabel = null, this.promptBoxNode = null, this.promptLabel = null, this.bgNode = null, this.manNode = null, this.shirtNode = null, this.coatNode = null, this.coat1Node = null, this.keyNode = null, this.braceletNode = null, this.manHead1Node = null, this.hairNode = null, this.manVomitNode = null, this.manHead11Node = null, this.manHead21Node = null, this.manHead2Node = null, this.girl1Node = null, this.girlNode = null, this.girlAem2Node = null, this.girlAem1Node = null, this.girlAemNode = null, this.girlAemAngryNode = null, this.cloudNode = null, this.boxNode = null, this.box1Node = null, this.angryNode = null, this.packageNode = null, this.packageCosmeticsNode = null, this.packageMedicineNode = null, this.girlExpressionNode = null, this.currentWeight = 1314, this.reducedWeight = 0, this.hasCosmeticsShown = !1, this.hasMedicineShown = !1, this.voiceToken = 0, this.vomitToken = 0, this.pointerSession = null, this.medicineDrag = null, this.completedSteps = new Set(), this.nodeOrigins = new Map(), this.onTouchStart = e => {
      if (1 !== this.phase || this.winstate) return;
      const t = __rea_outer_A.getTouchPoint(e),
        i = this.resolveHitTarget(t);
      if (i) {
        if ("medicine" === i) return this.beginMedicineDrag(e), void (e.propagationStopped = !0);
        this.pointerSession = {
          target: i,
          startPoint: t.clone()
        }, e.propagationStopped = !0;
      }
    }, this.onTouchMove = e => {
      this.pointerSession ? e.propagationStopped = !0 : this.medicineDrag && 1 === this.phase && (this.setDragNodePositionFromTouch(e, this.medicineDrag.node, this.medicineDrag.parent, this.medicineDrag.touchOffset), e.propagationStopped = !0);
    }, this.onTouchEnd = e => {
      if (1 !== this.phase || this.winstate) return this.pointerSession = null, void this.resetMedicineDrag(!0);
      if (this.medicineDrag) return this.handleMedicineDrop(), void (e.propagationStopped = !0);
      if (!this.pointerSession) return;
      const t = this.pointerSession;
      this.pointerSession = null, this.handlePointerEnd(t, __rea_outer_A.getTouchPoint(e)), e.propagationStopped = !0;
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.allItemNum = 12, this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.enterPhase0();
  }
  onDestroy() {
    this.cleanupRuntime(!this.shouldSkipStopLevelAudio()), super.onDestroy();
  }
  handleTimeExpired() {
    return !!(this.phase >= 2 || this.winstate);
  }
  showHint() {
    if (1 !== this.phase) return;
    const e = this.resolveHintKey();
    if (!e) return;
    const t = __rea_outer_r.getInstance().getKey(e);
    __rea_outer_p.getInstance().showView(__rea_outer_m, void 0, {
      body: t
    });
  }
  getGameProgressSnapshot() {
    const e = Math.min(this.reducedWeight, T);
    return {
      progress: e / T,
      label: `${e}/1194`
    };
  }
  markAllTasksCompleted() {
    for (let e = 1; e <= 12; e += 1) this.completedSteps.add(e);
    this.hasInstallNum = 12, this.currentWeight = 120, this.reducedWeight = T, this.refreshWeightLabel();
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.hasCosmeticsShown = !1, this.hasMedicineShown = !1, this.voiceToken = 0, this.vomitToken = 0, this.pointerSession = null, this.medicineDrag = null, this.completedSteps.clear(), this.hasInstallNum = 0, this.currentWeight = 1314, this.reducedWeight = 0, __rea_outer_c.stopVoice();
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_c.playMusic("bgm3", !0, .5), this.applyInitialVisibility(), this.setInputBlocked(!0), this.refreshWeightLabel(), __rea_outer_u.getInstance().refreshGameProgress(), this.playDialogue("57_1", !1, () => {
      this.isValid && 0 === this.phase && this.playDialogue("57_2", !0, () => {
        this.isValid && 0 === this.phase && this.enterPhase1();
      });
    });
  }
  skipOpeningToPlay() {
    return 0 === this.phase && (this.voiceToken += 1, this.stopOpeningDialogue(), this.enterPhase1(), !0);
  }
  enterPhase1() {
    0 === this.phase && (this.phase = 1, this.hidePrompt(), this.setInputBlocked(!1), this.registerInteractionHandlers(), __rea_outer_u.getInstance().refreshGameProgress());
  }
  enterPhase2Success() {
    this.phase >= 2 || this.winstate || (this.phase = 2, this.winstate = !0, this.pointerSession = null, this.resetMedicineDrag(!0), this.unregisterInteractionHandlers(), this.setInputBlocked(!0), this.hidePrompt(), __rea_outer_u.getInstance().pauseTimer(), this.setNodeActive(this.girlExpressionNode, !0), this.setNodeActive(this.angryNode, !0), this.setNodeActive(this.girlAem1Node, !1), this.setNodeActive(this.girlAemNode, !1), this.setNodeActive(this.girlAem2Node, !0), this.setNodeActive(this.girlAemAngryNode, !0), this.vomitToken += 1, this.moveManGroupOffscreen(), this.showLevelSuccess(1));
  }
  beginTimeoutFail() {
    this.phase = 2, this.winstate = !1, this.cleanupRuntime(), __rea_outer_u.getInstance().pauseTimer(), __rea_outer_p.getInstance().showView(__rea_outer_g, __rea_outer_N.WIN_ANIMATION);
  }
  applyInitialVisibility() {
    this.restoreAllOrigins(), this.setNodeActive(this.bgNode, !0), this.setNodeActive(this.manNode, !0), this.setNodeActive(this.shirtNode, !0), this.setNodeActive(this.coatNode, !0), this.setNodeActive(this.coat1Node, !1), this.setNodeActive(this.keyNode, !0), this.setNodeActive(this.braceletNode, !0), this.setNodeActive(this.manHead2Node, !0), this.setNodeActive(this.manHead1Node, !1), this.setNodeActive(this.hairNode, !1), this.setNodeActive(this.manVomitNode, !1), this.setNodeActive(this.manHead11Node, !1), this.setNodeActive(this.manHead21Node, !1), this.setNodeActive(this.girl1Node, !0), this.setNodeActive(this.girlNode, !0), this.setNodeActive(this.girlAem2Node, !0), this.setNodeActive(this.girlAem1Node, !1), this.setNodeActive(this.girlAemNode, !0), this.setNodeActive(this.girlAemAngryNode, !1), this.setNodeActive(this.cloudNode, !0), this.setNodeActive(this.boxNode, !0), this.setNodeActive(this.box1Node, !1), this.setNodeActive(this.angryNode, !1), this.setNodeActive(this.packageNode, !0), this.setNodeActive(this.packageCosmeticsNode, !1), this.setNodeActive(this.packageMedicineNode, !1), this.setNodeActive(this.girlExpressionNode, !1), this.setNodeActive(this.weightLabelNode, !1), this.setNodeActive(this.promptBoxNode, !1), this.setNodeActive(this.clicksNode, !0), this.setNodeActive(this.manTouchNode, !0), this.setNodeActive(this.clicksTouchNode, !1), this.setNodeActive(this.demoNode, !1), this.setNodeActive(this.clickRootNode, !1), this.setNodeActive(this.getGameChild("drags"), !1), this.setNodeActive(this.getGameChild("swips"), !1);
  }
  registerInteractionHandlers() {
    this.node.on(__rea_outer_i.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(__rea_outer_i.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(__rea_outer_i.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(__rea_outer_i.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
  }
  unregisterInteractionHandlers() {
    var e;
    null != (e = this.node) && e.isValid && (this.node.off(__rea_outer_i.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(__rea_outer_i.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(__rea_outer_i.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(__rea_outer_i.EventType.TOUCH_CANCEL, this.onTouchEnd, this));
  }
  handlePointerEnd(e, t) {
    __rea_outer_s.distance(e.startPoint, t) < 20 ? this.handleTap(e.target) : this.handleSwipe(e.target, e.startPoint, t);
  }
  handleTap(e) {
    "package" !== e ? "arm" === e && this.completeArmStep() : this.handlePackageTap();
  }
  handleSwipe(e, t, i) {
    "manHead2" !== e ? __rea_outer_S.isSwipeMatching(t, i, __rea_outer_f.Down) && ("box" !== e ? "key" !== e ? "coat" !== e ? "shirt" !== e ? "bracelet" !== e ? "cosmetics" !== e ? "package" !== e ? "cloud" !== e ? "girl1" === e && this.completeSelfFallStep(12, this.girl1Node, 150) : this.completeCloudStep() : this.completedSteps.has(8) && this.completeSelfFallStep(9, this.packageNode, 100) : this.completeSelfFallStep(7, this.packageCosmeticsNode, 120) : this.completeSelfFallStep(5, this.braceletNode, 120) : this.completeSelfFallStep(4, this.shirtNode, 60) : this.completeSwapFallStep(3, this.coatNode, this.coat1Node, 80) : this.completeSelfFallStep(2, this.keyNode, 15) : this.completeSwapFallStep(1, this.boxNode, this.box1Node, 300)) : __rea_outer_S.isSwipeMatching(t, i, __rea_outer_f.Up) && this.completeHairStep();
  }
  handlePackageTap() {
    if (!this.completedSteps.has(7) && !this.hasCosmeticsShown) return this.hasCosmeticsShown = !0, this.restoreOrigin(this.packageCosmeticsNode), void this.setNodeActive(this.packageCosmeticsNode, !0);
    !this.completedSteps.has(7) || this.completedSteps.has(8) || this.hasMedicineShown || (this.hasMedicineShown = !0, this.restoreOrigin(this.packageMedicineNode), this.setNodeActive(this.packageMedicineNode, !0));
  }
  completeSwapFallStep(e, t, i, s) {
    this.completedSteps.has(e) || (this.setNodeActive(t, !1), this.restoreOrigin(i), this.setNodeActive(i, !0), this.playStepFeedback(e), this.completeStep(e), this.flyNodeDown(i, s));
  }
  completeSelfFallStep(e, t, i) {
    this.completedSteps.has(e) || (this.playStepFeedback(e), this.completeStep(e), this.flyNodeDown(t, i));
  }
  completeHairStep() {
    this.completedSteps.has(6) || (this.setNodeActive(this.manHead2Node, !1), this.setNodeActive(this.manHead1Node, !0), this.restoreOrigin(this.hairNode), this.setNodeActive(this.hairNode, !0), this.playStepFeedback(6), this.completeStep(6), this.flyNodeRight(this.hairNode, 5));
  }
  completeCloudStep() {
    this.completedSteps.has(11) || (this.setNodeActive(this.cloudNode, !1), this.playStepFeedback(11), this.completeStep(11));
  }
  completeArmStep() {
    this.completedSteps.has(9) && !this.completedSteps.has(10) && (this.setNodeActive(this.girlAem2Node, !1), this.setNodeActive(this.girlAem1Node, !0), this.playStepFeedback(10), this.subtractWeight(89), this.completeStep(10));
  }
  beginMedicineDrag(e) {
    var t;
    const i = this.packageMedicineNode,
      s = null == i ? void 0 : i.parent;
    null != i && i.isValid && null != s && s.isValid && (this.bringNodeToFront(i), this.medicineDrag = {
      node: i,
      parent: s,
      touchOffset: this.calculateTouchOffset(e, i, s),
      originPosition: (null == (t = this.nodeOrigins.get(i)) ? void 0 : t.clone()) ?? i.position.clone()
    });
  }
  handleMedicineDrop() {
    const e = this.medicineDrag;
    if (this.medicineDrag = null, null == e || !e.node.isValid) return;
    const t = this.manTouchNode ?? this.manNode;
    this.isNodeCenterInside(e.node, t) && !this.completedSteps.has(8) ? (this.setNodeActive(e.node, !1), this.restoreOrigin(e.node), this.playVomitReaction(), this.playStepFeedback(8), this.subtractWeight(155), this.completeStep(8)) : this.restoreMedicine(e);
  }
  restoreMedicine(e) {
    e.node.isValid && (e.node.setPosition(e.originPosition), this.setNodeActive(e.node, !0));
  }
  resetMedicineDrag(e) {
    const t = this.medicineDrag;
    this.medicineDrag = null, e && t && this.restoreMedicine(t);
  }
  playVomitReaction() {
    this.vomitToken += 1;
    const e = this.vomitToken,
      t = this.completedSteps.has(6);
    t ? (this.setNodeActive(this.manHead1Node, !1), this.setNodeActive(this.manHead11Node, !0)) : (this.setNodeActive(this.manHead2Node, !1), this.setNodeActive(this.manHead21Node, !0)), this.setNodeActive(this.manVomitNode, !0), this.scheduleOnceIfValid(() => {
      e === this.vomitToken && 1 === this.phase && (this.setNodeActive(this.manVomitNode, !1), this.setNodeActive(this.manHead11Node, !1), this.setNodeActive(this.manHead21Node, !1), t ? this.setNodeActive(this.manHead1Node, !0) : this.setNodeActive(this.manHead2Node, !0));
    }, 1);
  }
  flyNodeDown(e, t) {
    this.flyNodeOffscreen(e, e => new __rea_outer_o(e.x, -800, e.z), t);
  }
  flyNodeRight(e, t) {
    this.flyNodeOffscreen(e, e => new __rea_outer_o(800, e.y, e.z), t);
  }
  flyNodeOffscreen(e, t, i) {
    if (null == e || !e.isValid) return void this.subtractWeight(i);
    this.stopTweenIfValid(e);
    const s = e.position.clone();
    __rea_outer_h(e).to(.5, {
      position: t(s)
    }).call(() => {
      this.isValid && e.isValid && (this.setNodeActive(e, !1), this.subtractWeight(i));
    }).start();
  }
  moveManGroupOffscreen() {
    const e = this.manNode;
    if (null == e || !e.isValid) return;
    const t = 800 - e.position.x;
    this.collectManGroupNodes().forEach(e => {
      this.stopTweenIfValid(e);
      const i = e.position.clone();
      __rea_outer_h(e).to(.8, {
        position: new __rea_outer_o(i.x + t, i.y, i.z)
      }).call(() => {
        this.setNodeActive(e, !1);
      }).start();
    });
  }
  collectManGroupNodes() {
    return w.map(e => this.getGameChild(e)).filter(e => Boolean((null == e ? void 0 : e.isValid) && e.active));
  }
  completeStep(e) {
    this.completedSteps.has(e) || (this.completedSteps.add(e), this.hasInstallNum = this.completedSteps.size, this.reducedWeight = Math.min(T, this.reducedWeight + (y[e - 1] ?? 0)), __rea_outer_u.getInstance().refreshGameProgress(), this.completedSteps.size < 12 || this.scheduleOnceIfValid(() => {
      1 !== this.phase || this.winstate || this.enterPhase2Success();
    }, 1));
  }
  playStepFeedback(e) {
    __rea_outer_c.playEffect_1("level57_1");
    const t = C[e - 1];
    t && this.playDialogue(t, !0);
  }
  playDialogue(e, t, i) {
    this.voiceToken += 1;
    const s = this.voiceToken;
    this.showPrompt(e), __rea_outer_c.stopVoice(), __rea_outer_c.playVoice(e);
    let o = !1;
    const h = () => {
        !o && this.isValid && s === this.voiceToken && (o = !0, this.unschedule(a), t && this.hidePrompt(), null == i || i());
      },
      a = () => {
        h();
      },
      n = this.resolveDialogueHoldSeconds(e);
    this.scheduleOnce(h, n), this.scheduleOnce(a, Math.max(8, n + .5));
  }
  resolveDialogueHoldSeconds(e) {
    var t;
    const i = (null == (t = __rea_outer_c.audioMap.get(e)) ? void 0 : t.getDuration()) ?? 0;
    return i > .1 ? i : 2.5;
  }
  showPrompt(e) {
    this.promptLabel && (this.promptLabel.string = this.resolveI18nText(e)), this.setNodeActive(this.promptBoxNode, !0);
  }
  hidePrompt() {
    this.setNodeActive(this.promptBoxNode, !1);
  }
  resolveI18nText(e) {
    const t = __rea_outer_r.getInstance().getKey(e);
    return t && t !== e ? t : e;
  }
  resolveHintKey() {
    for (let e = 1; e <= 12; e += 1) if (!this.completedSteps.has(e)) return _[e - 1];
    return null;
  }
  subtractWeight(e) {
    0 !== e && (this.currentWeight -= e, this.refreshWeightLabel());
  }
  refreshWeightLabel() {
    this.weightLabel && (this.weightLabel.string = String(this.currentWeight));
  }
  resolveHitTarget(e) {
    const t = [];
    return this.pushHit(t, "box", this.boxNode, this.canStartStep(1)), this.pushHit(t, "key", this.keyNode, this.canStartStep(2)), this.pushHit(t, "coat", this.coatNode, this.canStartStep(3)), this.pushHit(t, "shirt", this.shirtNode, this.completedSteps.has(3) && this.canStartStep(4)), this.pushHit(t, "bracelet", this.braceletNode, this.canStartStep(5)), this.pushHit(t, "manHead2", this.manHead2Node, this.canStartStep(6)), this.pushHit(t, "cosmetics", this.packageCosmeticsNode, this.hasCosmeticsShown && this.canStartStep(7)), this.pushHit(t, "medicine", this.packageMedicineNode, this.hasMedicineShown && this.canStartStep(8)), this.pushHit(t, "package", this.packageNode, this.canHitPackage()), this.pushHit(t, "arm", this.girlAem2Node, this.completedSteps.has(9) && this.canStartStep(10)), this.pushHit(t, "cloud", this.cloudNode, this.completedSteps.has(10) && this.canStartStep(11)), this.pushHit(t, "girl1", this.girl1Node, this.completedSteps.has(11) && this.canStartStep(12)), __rea_outer_A.pickTopmost(t, e);
  }
  canStartStep(e) {
    return !this.completedSteps.has(e);
  }
  canHitPackage() {
    var e;
    return !(null == (e = this.packageNode) || !e.active) && (!this.completedSteps.has(7) && !this.hasCosmeticsShown || !(!this.completedSteps.has(7) || this.completedSteps.has(8) || this.hasMedicineShown) || this.completedSteps.has(8) && this.canStartStep(9));
  }
  pushHit(e, t, i, s) {
    s && null != i && i.active && e.push({
      value: t,
      node: i
    });
  }
  cleanupRuntime(e = !0) {
    this.unscheduleAllCallbacks(), this.unregisterInteractionHandlers(), this.voiceToken += 1, this.vomitToken += 1, this.pointerSession = null, this.resetMedicineDrag(!1), e && __rea_outer_c.stopVoice(), this.stopAllGameplayTweens();
  }
  stopAllGameplayTweens() {
    [this.boxNode, this.box1Node, this.keyNode, this.coatNode, this.coat1Node, this.shirtNode, this.braceletNode, this.hairNode, this.packageNode, this.packageCosmeticsNode, this.packageMedicineNode, this.girl1Node, this.manNode, this.manHead1Node, this.manHead2Node, this.manHead11Node, this.manHead21Node, this.manVomitNode].forEach(e => {
      this.stopTweenIfValid(e);
    });
  }
  stopTweenIfValid(e) {
    null != e && e.isValid && __rea_outer_v(e);
  }
  setInputBlocked(e) {
    this.setNodeActive(this.backBgNode, e);
  }
  scheduleOnceIfValid(e, t) {
    this.scheduleOnce(() => {
      this.isValid && e();
    }, t);
  }
  bringNodeToFront(e) {
    null != e && e.isValid && e.parent && e.setSiblingIndex(e.parent.children.length - 1);
  }
  isNodeCenterInside(e, t) {
    return __rea_outer_A.isDragNearTarget(e, t);
  }
  calculateTouchOffset(e, t, i) {
    const s = this.getTouchLocalPosition(e, i);
    return new __rea_outer_o(t.position.x - s.x, t.position.y - s.y, 0);
  }
  setDragNodePositionFromTouch(e, t, i, s) {
    const o = this.getTouchLocalPosition(e, i);
    t.setPosition(o.x + s.x, o.y + s.y, t.position.z);
  }
  getTouchLocalPosition(e, t) {
    const i = e.getUILocation(),
      s = t.getComponent(__rea_outer_a);
    return s ? s.convertToNodeSpaceAR(new __rea_outer_o(i.x, i.y, 0)) : __rea_outer_o.ZERO.clone();
  }
  restoreAllOrigins() {
    this.nodeOrigins.forEach((e, t) => {
      t.isValid && (this.stopTweenIfValid(t), t.setPosition(e));
    });
  }
  restoreOrigin(e) {
    if (null == e || !e.isValid) return;
    const t = this.nodeOrigins.get(e);
    t && (this.stopTweenIfValid(e), e.setPosition(t));
  }
  cacheOrigin(e) {
    null != e && e.isValid && this.nodeOrigins.set(e, e.position.clone());
  }
  setNodeActive(e, t) {
    null != e && e.isValid && (e.active = t);
  }
  getGameChild(e) {
    var t;
    return (null == (t = this.gameNode) ? void 0 : t.getChildByName(e)) ?? null;
  }
  resolveReferences() {
    var e, t, i;
    this.gameNode = this.node.getChildByPath("UIPanel/gameNode"), this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.demoNode = this.node.getChildByPath("UIPanel/demo"), this.clickRootNode = this.node.getChildByPath("UIPanel/click_root"), this.clicksNode = this.node.getChildByPath("UIPanel/gameNode/clicks"), this.clicksTouchNode = this.node.getChildByPath("UIPanel/gameNode/clicks/touch"), this.manTouchNode = this.node.getChildByPath("UIPanel/gameNode/clicks/mantouch"), this.promptBoxNode = this.getGameChild("prompt_box"), this.promptLabel = (null == (e = this.promptBoxNode) || null == (e = e.getChildByName("Label")) ? void 0 : e.getComponent(__rea_outer_n)) ?? null, this.bgNode = this.getGameChild("bg"), this.manNode = this.getGameChild("man"), this.weightLabelNode = this.node.getChildByPath("UIPanel/gameNode/man/weightLabel"), this.weightLabel = (null == (t = this.weightLabelNode) ? void 0 : t.getComponent(__rea_outer_n)) ?? (null == (i = this.weightLabelNode) || null == (i = i.getChildByName("Label")) ? void 0 : i.getComponent(__rea_outer_n)) ?? null, this.shirtNode = this.getGameChild("shirt"), this.coatNode = this.getGameChild("coat"), this.coat1Node = this.getGameChild("coat_1"), this.keyNode = this.getGameChild("key"), this.braceletNode = this.getGameChild("bracelet"), this.manHead1Node = this.getGameChild("man_head1"), this.hairNode = this.getGameChild("hair"), this.manVomitNode = this.getGameChild("man_vomit"), this.manHead11Node = this.getGameChild("man_head1_1"), this.manHead21Node = this.getGameChild("man_head2_1"), this.manHead2Node = this.getGameChild("man_head2"), this.girl1Node = this.getGameChild("girl1"), this.girlNode = this.getGameChild("girl"), this.girlAem2Node = this.getGameChild("girl_aem_2"), this.girlAem1Node = this.getGameChild("girl_aem_1"), this.girlAemNode = this.getGameChild("girl_aem"), this.girlAemAngryNode = this.getGameChild("girl_aem_angry"), this.cloudNode = this.getGameChild("cloud"), this.boxNode = this.getGameChild("box"), this.box1Node = this.getGameChild("box_1"), this.angryNode = this.getGameChild("angry"), this.packageNode = this.getGameChild("package"), this.packageCosmeticsNode = this.getGameChild("package_cosmetics"), this.packageMedicineNode = this.getGameChild("package_medicine"), this.girlExpressionNode = this.getGameChild("girl_expression"), this.nodeOrigins.clear(), [this.boxNode, this.box1Node, this.keyNode, this.coatNode, this.coat1Node, this.shirtNode, this.braceletNode, this.hairNode, this.packageNode, this.packageCosmeticsNode, this.packageMedicineNode, this.girl1Node, this.manNode, this.manHead1Node, this.manHead2Node, this.manHead11Node, this.manHead21Node, this.manVomitNode].forEach(e => {
      this.cacheOrigin(e);
    }), this.logMissingNodes();
  }
  logMissingNodes() {
    var e;
    const t = [],
      i = (e, i) => {
        e || t.push(i);
      };
    i(this.gameNode, "UIPanel/gameNode"), i(this.backBgNode, "UIPanel/backBG"), i(this.promptBoxNode, "prompt_box"), i((null == (e = this.promptLabel) ? void 0 : e.node) ?? null, "prompt_box/Label"), i(this.weightLabelNode, "man/weightLabel"), i(this.manTouchNode, "clicks/mantouch"), i(this.manNode, "man"), i(this.boxNode, "box"), i(this.coatNode, "coat"), i(this.packageNode, "package"), i(this.cloudNode, "cloud"), i(this.girl1Node, "girl1"), i(this.girlAem2Node, "girl_aem_2"), t.length > 0 && console.warn("[Level_57] prefab 待办清单:", t.join(", "));
  }
}) || k;
__rea_outer_t._RF.pop();
export { __recovered_export_0 as default };
