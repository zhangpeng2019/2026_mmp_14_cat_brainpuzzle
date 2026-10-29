// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_68.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_e } from "cc";
import { Node as __rea_outer_i } from "cc";
import { Vec3 as __rea_outer_s } from "cc";
import { UITransform as __rea_outer_n } from "cc";
import { tween as __rea_outer_o } from "cc";
import { Label as __rea_outer_a } from "cc";
import { _decorator as __rea_outer_h } from "cc";
import { default as __rea_outer_r } from "./LevelBase";
import { default as __rea_outer_l } from "./AudioManager";
import { I18nController as __rea_outer_d } from "./i18n-controller";
import { UIManager as __rea_outer_c } from "./ui-manager";
import { UILayer as __rea_outer_p } from "./ui-layer";
import { UIHint as __rea_outer_u } from "./uihint";
import { UIFail as __rea_outer_m } from "./uifail";
import { GameController as __rea_outer_g } from "./GameController";
import { setNodeOpacity as __rea_outer_f } from "./CocosCompat";
import { stopAllTweens as __rea_outer_N } from "./CocosCompat";
import { default as __rea_outer_v } from "./clue-hit-tester";
let __recovered_export_0;
var C;
__rea_outer_e._RF.push({}, "23091uR4a9LIroqZNhoG0lx", "Level_68", void 0);
const {
    ccclass: T
  } = __rea_outer_h,
  _ = 12,
  w = .35,
  S = ["bg", "airplane", "parachute", "fire_extinguisher", "umbrella", "chewing_gum", "captain", "suitcase", "blanket", "mobile_phone", "bird", "fire_1", "clicks"],
  y = ["captain1", "suitcase1", "pump", "pump1", "fire_2", "fire_3", "flight_attendant1", "flight_attendant2", "flight_attendant3", "flight_attendant3_1", "flight_attendant4", "flight_attendant5", "flight_attendant6", "flight_attendant7", "mobile_phone_1", "mobile_phone_2", "general_end", "express_delivery", "balloon", "flight_attendant8", "flight_attendant9", "flight_attendant10_1", "flight_attendant10", "flight_attendant11", "drags", "swips", "prompt_box"],
  P = [{
    stepId: 1,
    itemName: "bird",
    transformName: "flight_attendant1",
    voiceKey: "68_3",
    showCaptainTrail: !1
  }, {
    stepId: 2,
    itemName: "parachute",
    transformName: "flight_attendant2",
    voiceKey: "68_11",
    showCaptainTrail: !1
  }, {
    stepId: 4,
    itemName: "captain",
    transformName: "flight_attendant4",
    voiceKey: "68_13",
    showCaptainTrail: !0
  }, {
    stepId: 5,
    itemName: "fire_extinguisher",
    transformName: "flight_attendant5",
    voiceKey: "68_2",
    showCaptainTrail: !1
  }, {
    stepId: 6,
    itemName: "blanket",
    transformName: "flight_attendant6",
    voiceKey: "68_10",
    showCaptainTrail: !1
  }, {
    stepId: 7,
    itemName: "umbrella",
    transformName: "flight_attendant7",
    voiceKey: "68_9",
    showCaptainTrail: !1
  }, {
    stepId: 10,
    itemName: "express_delivery",
    transformName: "flight_attendant8",
    voiceKey: "68_7",
    showCaptainTrail: !1
  }, {
    stepId: 11,
    itemName: "balloon",
    transformName: "flight_attendant9",
    voiceKey: "68_8",
    showCaptainTrail: !1
  }],
  A = {
    bird: "bird",
    parachute: "parachute",
    chewing_gum: "chewingGum",
    captain: "captain",
    fire_extinguisher: "fireExtinguisher",
    blanket: "blanket",
    umbrella: "umbrella",
    express_delivery: "expressDelivery",
    balloon: "balloon",
    pump: "pump"
  };
__recovered_export_0 = T("Level_68")(C = class extends __rea_outer_r {
  constructor(...t) {
    super(...t), this.phase = 0, this.winstate = !1, this.gameNode = null, this.backBgNode = null, this.promptBoxNode = null, this.promptLabel = null, this.attendantZone = null, this.attendantPool = [null, null, null], this.slotOrigins = [], this.slotNodes = [null, null, null], this.fireNodes = [null, null, null], this.nodeByName = new Map(), this.nodeOrigins = new Map(), this.siblingOrigins = new Map(), this.homeParents = new Map(), this.completedSteps = new Set(), this.remainingAttendants = 10, this.isSuitcaseOpen = !1, this.isPhoneUiOpen = !1, this.allowCheckout = !1, this.fireFrame = 0, this.activeDrag = null, this.pointerSession = null, this.swapFrameA = null, this.swapFrameB = null, this.voiceToken = 0, this.performanceToken = 0, this.onTouchStart = t => {
      if (1 !== this.phase || this.winstate) return;
      const e = __rea_outer_v.getTouchPoint(t);
      if (this.allowCheckout || this.isPhoneUiOpen) return void (this.isPointOnCheckout(e) && (this.pointerSession = {
        kind: "checkout",
        startPoint: e.clone()
      }, t.propagationStopped = !0));
      if (!this.canAcceptGameplayTouch()) return;
      const i = this.resolveDragKind(e);
      return i ? (this.beginDrag(i, t), void (t.propagationStopped = !0)) : this.canClickPhone() && __rea_outer_v.isPointInside(this.getGameChild("mobile_phone"), e) ? (this.pointerSession = {
        kind: "phone",
        startPoint: e.clone()
      }, void (t.propagationStopped = !0)) : void (this.canSwipeSuitcase() && __rea_outer_v.isPointInside(this.getGameChild("suitcase"), e) && (this.pointerSession = {
        kind: "suitcase",
        startPoint: e.clone()
      }, t.propagationStopped = !0));
    }, this.onTouchMove = t => {
      this.activeDrag && this.canAcceptGameplayTouch() && (this.setDragNodePositionFromTouch(t, this.activeDrag.dragNode, this.activeDrag.touchOffset), this.tryMorphHeldSprite(this.activeDrag, t), t.propagationStopped = !0);
    }, this.onTouchEnd = t => {
      var e;
      if (1 !== this.phase || this.winstate) return this.cancelDrag(), void (this.pointerSession = null);
      if (this.activeDrag) return this.handleDrop(this.activeDrag), this.activeDrag = null, void (t.propagationStopped = !0);
      const i = __rea_outer_v.getTouchPoint(t);
      if (this.allowCheckout && ("checkout" === (null == (e = this.pointerSession) ? void 0 : e.kind) || this.isPointOnCheckout(i))) return this.pointerSession = null, this.handleCheckoutClick(), void (t.propagationStopped = !0);
      const s = this.pointerSession;
      return this.pointerSession = null, s && this.canAcceptGameplayTouch() ? "phone" === s.kind ? (this.handlePhoneClick(), void (t.propagationStopped = !0)) : void ("checkout" !== s.kind && (this.handleSuitcaseSwipe(s.startPoint, i), t.propagationStopped = !0)) : void 0;
    }, this.onCheckoutButton = () => {
      this.handleCheckoutClick();
    }, this.onFireTick = () => {
      this.fireFrame = (this.fireFrame + 1) % this.fireNodes.length, this.applyFireFrame();
    }, this.onSwapTick = () => {
      var t;
      const e = !0 !== (null == (t = this.swapFrameA) ? void 0 : t.active);
      this.applySwapFrame(e);
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.allItemNum = _, this.hasInstallNum = 0;
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
    const t = this.getLowestUnfinishedStep();
    if (null === t) return;
    const e = __rea_outer_d.getInstance().getKey(`level68_hint${t}`);
    __rea_outer_c.getInstance().showView(__rea_outer_u, void 0, {
      body: e
    });
  }
  getGameProgressSnapshot() {
    const t = Math.min(this.hasInstallNum, _);
    return {
      progress: t / _,
      label: `${t}/12`
    };
  }
  markAllTasksCompleted() {
    this.hasInstallNum = _;
    for (let t = 1; t <= _; t += 1) this.completedSteps.add(t);
    this.remainingAttendants = 0, this.isSuitcaseOpen = !0, this.allowCheckout = !1;
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.completedSteps.clear(), this.remainingAttendants = 10, this.isSuitcaseOpen = !1, this.isPhoneUiOpen = !1, this.allowCheckout = !1, this.fireFrame = 0, this.activeDrag = null, this.pointerSession = null, this.voiceToken = 0, this.performanceToken = 0, this.hasInstallNum = 0, this.allItemNum = _, __rea_outer_l.stopVoice();
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_l.playMusic("bgm3", !0, .5), this.applyInitialVisibility(), this.resetQueueSlots(), this.startFireLoop(), this.setInputBlocked(!0), __rea_outer_g.getInstance().refreshGameProgress(), this.playDialogue("68_1", !0, () => {
      this.isValid && 0 === this.phase && this.enterPhase1();
    });
  }
  skipOpeningToPlay() {
    return 0 === this.phase && (this.voiceToken += 1, this.stopOpeningDialogue(), this.enterPhase1(), !0);
  }
  enterPhase1() {
    0 === this.phase && (this.phase = 1, this.hidePrompt(), this.setInputBlocked(!1), this.registerInteractionHandlers(), __rea_outer_g.getInstance().refreshGameProgress());
  }
  enterPhase2Success() {
    this.phase >= 2 || this.winstate || (this.phase = 2, this.winstate = !0, this.cancelDrag(), this.unregisterInteractionHandlers(), this.isPhoneUiOpen = !1, this.allowCheckout = !1, this.setInputBlocked(!0), __rea_outer_g.getInstance().pauseTimer(), this.scheduleOnceIfValid(() => {
      this.isValid && this.showLevelSuccess(0);
    }, 1));
  }
  beginTimeoutFail() {
    this.phase = 2, this.winstate = !1, this.cleanupRuntime(!0), __rea_outer_g.getInstance().pauseTimer(), __rea_outer_c.getInstance().showView(__rea_outer_m, __rea_outer_p.WIN_ANIMATION);
  }
  applyInitialVisibility() {
    var t;
    this.restoreCachedNodes(), this.setNodeActive(this.gameNode, !0), S.forEach(t => {
      this.setNodeActive(this.getGameChild(t), !0);
    }), y.forEach(t => {
      this.setNodeActive(this.getGameChild(t), !1);
    }), this.attendantPool.forEach(t => {
      this.setNodeActive(t, !0);
    }), this.setNodeActive(this.attendantZone, !0), null != (t = this.attendantZone) && t.isValid && __rea_outer_f(this.attendantZone, 0), this.setNodeActive(this.node.getChildByPath("UIPanel/click_root"), !1), this.setNodeActive(this.node.getChildByPath("UIPanel/demo"), !1), this.resetBackBgOpacity();
  }
  resetQueueSlots() {
    this.attendantPool.forEach((t, e) => {
      null != t && t.isValid ? (t.setPosition(this.slotOrigins[e].clone()), this.setNodeActive(t, !0), this.slotNodes[e] = t) : this.slotNodes[e] = null;
    });
  }
  registerInteractionHandlers() {
    this.node.on(__rea_outer_i.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(__rea_outer_i.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(__rea_outer_i.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(__rea_outer_i.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
  }
  unregisterInteractionHandlers() {
    var t;
    null != (t = this.node) && t.isValid && (this.node.off(__rea_outer_i.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(__rea_outer_i.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(__rea_outer_i.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(__rea_outer_i.EventType.TOUCH_CANCEL, this.onTouchEnd, this));
  }
  canAcceptGameplayTouch() {
    var t;
    return 1 === this.phase && !this.winstate && !this.isPhoneUiOpen && !0 !== (null == (t = this.backBgNode) ? void 0 : t.active);
  }
  resolveDragKind(t) {
    const e = [];
    return P.forEach(t => {
      this.pushHit(e, A[t.itemName], this.getGameChild(t.itemName), this.canStartEscape(t.stepId));
    }), this.pushHit(e, "chewingGum", this.getGameChild("chewing_gum"), this.canStartEscape(3)), this.pushHit(e, "pump", this.getGameChild("pump"), this.canDragPump()), __rea_outer_v.pickTopmost(e, t);
  }
  pushHit(t, e, i, s) {
    e && s && null != i && i.isValid && i.activeInHierarchy && t.push({
      value: e,
      node: i
    });
  }
  canStartEscape(t) {
    return !(this.completedSteps.has(t) || this.remainingAttendants <= 0) && !!(10 !== t && 11 !== t || this.completedSteps.has(9));
  }
  canClickPhone() {
    return !this.completedSteps.has(8);
  }
  canSwipeSuitcase() {
    return !this.isSuitcaseOpen && !this.completedSteps.has(12);
  }
  canDragPump() {
    return this.isSuitcaseOpen && !this.completedSteps.has(12) && this.remainingAttendants > 0;
  }
  beginDrag(t, e) {
    var i;
    const s = this.getDragSourceNode(t);
    if (null == s || !s.isValid || null == (i = this.gameNode) || !i.isValid) return;
    this.bringNodeToFront(s);
    const n = this.calculateTouchOffset(e, s);
    this.setDragNodePositionFromTouch(e, s, n), this.activeDrag = {
      kind: t,
      dragNode: s,
      sourceNode: s,
      touchOffset: n,
      originWorldPosition: s.worldPosition.clone(),
      hasMorphed: !1
    };
  }
  getDragSourceNode(t) {
    switch (t) {
      case "bird":
        return this.getGameChild("bird");
      case "parachute":
        return this.getGameChild("parachute");
      case "chewingGum":
        return this.getGameChild("chewing_gum");
      case "captain":
        return this.getGameChild("captain");
      case "fireExtinguisher":
        return this.getGameChild("fire_extinguisher");
      case "blanket":
        return this.getGameChild("blanket");
      case "umbrella":
        return this.getGameChild("umbrella");
      case "expressDelivery":
        return this.getGameChild("express_delivery");
      case "balloon":
        return this.getGameChild("balloon");
      case "pump":
        return this.getGameChild("pump");
      default:
        return null;
    }
  }
  tryMorphHeldSprite(t, e) {
    if (t.hasMorphed || "pump" !== t.kind) return;
    if (__rea_outer_s.distance(t.dragNode.worldPosition, t.originWorldPosition) < 20) return;
    const i = this.getGameChild("pump1");
    if (null == i || !i.isValid) return;
    const n = t.dragNode.worldPosition.clone();
    this.setNodeActive(t.sourceNode, !1), this.restoreOrigin(t.sourceNode), this.placeNodeAtWorld(i, n), this.setNodeActive(i, !0), this.bringNodeToFront(i), t.dragNode = i, t.hasMorphed = !0, t.touchOffset = this.calculateTouchOffset(e, i), this.setDragNodePositionFromTouch(e, i, t.touchOffset);
  }
  handleDrop(t) {
    if (!this.canAcceptGameplayTouch() || !this.isDroppedOnAttendantZone(t.dragNode)) return void this.restoreDrag(t);
    if ("pump" === t.kind && !this.canDragPump()) return void this.restoreDrag(t);
    if (this.playActionSound(), this.setNodeActive(t.dragNode, !1), this.restoreHome(t.sourceNode), this.setNodeActive(t.sourceNode, !1), "pump" === t.kind) return this.setNodeActive(this.getGameChild("pump1"), !1), this.restoreHome(this.getGameChild("pump1")), void this.beginPumpEscape();
    if ("chewingGum" === t.kind) return void this.beginGumEscape();
    const e = P.find(e => A[e.itemName] === t.kind);
    e && this.beginStandardEscape(e);
  }
  isDroppedOnAttendantZone(t) {
    return __rea_outer_v.isDragNearTarget(t, this.attendantZone);
  }
  handlePhoneClick() {
    if (!this.canClickPhone()) return;
    this.playActionSound(), this.isPhoneUiOpen = !0, this.allowCheckout = !0;
    const t = this.getGameChild("mobile_phone_1"),
      e = this.getGameChild("mobile_phone_2");
    this.setNodeActive(t, !0), this.setNodeActive(e, !0), this.bringNodeToFront(t), this.bringNodeToFront(e), this.bindCheckoutButton(), this.completeStep(8), this.playDialogue("68_5", !0), this.bringNodeToFront(e);
  }
  handleCheckoutClick() {
    if (!this.allowCheckout || this.completedSteps.has(9)) return;
    this.unbindCheckoutButton(), this.playActionSound(), this.allowCheckout = !1, this.isPhoneUiOpen = !1;
    const t = this.beginPerformance();
    this.setNodeActive(this.getGameChild("mobile_phone_2"), !1), this.setNodeActive(this.getGameChild("general_end"), !0), this.bringNodeToFront(this.getGameChild("general_end")), this.wait(t, .5, () => {
      this.setNodeActive(this.getGameChild("mobile_phone_1"), !1), this.setNodeActive(this.getGameChild("general_end"), !1), this.restoreHome(this.getGameChild("mobile_phone_1")), this.restoreHome(this.getGameChild("mobile_phone_2")), this.restoreHome(this.getGameChild("general_end")), this.startAirdropFall(t);
    });
  }
  bindCheckoutButton() {
    const t = this.getGameChild("mobile_phone_2");
    null != t && t.isValid && (t.off(__rea_outer_i.EventType.TOUCH_END, this.onCheckoutButton, this), t.on(__rea_outer_i.EventType.TOUCH_END, this.onCheckoutButton, this));
  }
  unbindCheckoutButton() {
    const t = this.getGameChild("mobile_phone_2");
    null != t && t.isValid && t.off(__rea_outer_i.EventType.TOUCH_END, this.onCheckoutButton, this);
  }
  isPointOnCheckout(t) {
    return __rea_outer_v.isPointInside(this.getGameChild("mobile_phone_2"), t);
  }
  startAirdropFall(t) {
    var e, i;
    const s = this.getGameChild("balloon"),
      n = this.getGameChild("express_delivery");
    if (null == s || !s.isValid || null == n || !n.isValid) return this.completeStep(9), void this.endPerformance(t);
    const o = (null == (e = this.nodeOrigins.get(s)) ? void 0 : e.clone()) ?? s.position.clone(),
      a = (null == (i = this.nodeOrigins.get(n)) ? void 0 : i.clone()) ?? n.position.clone(),
      h = 1060 + this.getNodeHalfHeight(s) - o.y;
    s.setPosition(o.x, o.y + h, o.z), n.setPosition(a.x, a.y + h, a.z), this.setNodeActive(s, !0), this.setNodeActive(n, !0), this.playDialogue("68_6", !0);
    let r = 2;
    const l = () => {
      r -= 1, r > 0 || !this.isPerformanceCurrent(t) || (this.completeStep(9), this.endPerformance(t));
    };
    this.moveNodeTo(s, o, .8, l), this.moveNodeTo(n, a, .8, l);
  }
  handleSuitcaseSwipe(t, e) {
    if (!this.canSwipeSuitcase()) return;
    const i = e.x - t.x,
      s = e.y - t.y;
    s >= 30 && Math.abs(s) >= 1.2 * Math.abs(i) && (this.playActionSound(), this.isSuitcaseOpen = !0, this.setNodeActive(this.getGameChild("suitcase"), !1), this.setNodeActive(this.getGameChild("suitcase1"), !0), this.restoreHome(this.getGameChild("pump")), this.restoreHome(this.getGameChild("pump1")), this.setNodeActive(this.getGameChild("pump"), !0), this.setNodeActive(this.getGameChild("pump1"), !1));
  }
  beginStandardEscape(t) {
    const e = this.beginPerformance();
    this.setNodeActive(this.getGameChild(t.itemName), !1), this.hideFrontAttendant();
    const i = this.getGameChild(t.transformName);
    this.restoreOrigin(i), this.setNodeActive(i, !0), this.playDialogue(t.voiceKey, !0, () => {
      this.isPerformanceCurrent(e) && this.flyTransformAway(i, t.showCaptainTrail, () => {
        this.isPerformanceCurrent(e) && this.finishEscapeStep(e, t.stepId);
      });
    });
  }
  beginGumEscape() {
    const t = this.beginPerformance();
    this.setNodeActive(this.getGameChild("chewing_gum"), !1);
    const e = this.getGameChild("flight_attendant3_1");
    this.restoreOrigin(e), this.setNodeActive(e, !0), this.playDialogue("68_4", !0, () => {
      if (!this.isPerformanceCurrent(t)) return;
      this.hideFrontAttendant(), this.setNodeActive(e, !1);
      const i = this.getGameChild("flight_attendant3");
      this.restoreOrigin(i), this.setNodeActive(i, !0), this.flyTransformAway(i, !1, () => {
        this.isPerformanceCurrent(t) && this.finishEscapeStep(t, 3);
      });
    });
  }
  beginPumpEscape() {
    const t = this.beginPerformance();
    this.setNodeActive(this.getGameChild("pump"), !1), this.setNodeActive(this.getGameChild("pump1"), !1), this.hideFrontAttendant(), this.startFrameSwap(this.getGameChild("flight_attendant10"), this.getGameChild("flight_attendant10_1")), this.wait(t, 1.5, () => {
      this.stopFrameSwap(!1);
      const e = this.getGameChild("flight_attendant11");
      this.restoreOrigin(e), this.setNodeActive(e, !0), this.playDialogue("68_12", !0, () => {
        this.isPerformanceCurrent(t) && this.flyTransformAway(e, !1, () => {
          this.isPerformanceCurrent(t) && this.finishEscapeStep(t, 12);
        });
      });
    });
  }
  flyTransformAway(t, e, i) {
    if (e && this.setNodeActive(this.getGameChild("captain1"), !1), null == t || !t.isValid) return void i();
    const s = this.getFlyAwayTarget(t);
    this.moveNodeTo(t, s, 1, () => {
      this.setNodeActive(t, !1), this.restoreOrigin(t), e && this.setNodeActive(this.getGameChild("captain1"), !1), i();
    });
  }
  getFlyAwayTarget(t) {
    const e = this.getNodeHalfHeight(t),
      i = t.position,
      n = 1060 + e,
      o = i.x - (n - i.y);
    return new __rea_outer_s(o, n, i.z);
  }
  getNodeHalfHeight(t) {
    const e = t.getComponent(__rea_outer_n);
    return e ? e.height * (1 - e.anchorY) : 0;
  }
  hideFrontAttendant() {
    this.setNodeActive(this.slotNodes[0], !1);
  }
  finishEscapeStep(t, e) {
    if (this.remainingAttendants = Math.max(0, this.remainingAttendants - 1), this.remainingAttendants <= 0) return this.completeStep(e), void this.endPerformance(t);
    this.shiftQueue(t, () => {
      this.completeStep(e), this.endPerformance(t);
    });
  }
  shiftQueue(t, e) {
    const i = this.slotNodes[0],
      s = this.slotNodes[1],
      n = this.slotNodes[2];
    this.slotNodes[0] = s, this.slotNodes[1] = n, this.slotNodes[2] = null, null != s && s.isValid && this.moveNodeTo(s, this.slotOrigins[0].clone(), w), null != n && n.isValid && this.moveNodeTo(n, this.slotOrigins[1].clone(), w), this.remainingAttendants >= 3 && null != i && i.isValid && (i.setPosition(this.getQueueEnterStart()), this.setNodeActive(i, !0), this.moveNodeTo(i, this.slotOrigins[2].clone(), w), this.slotNodes[2] = i), this.wait(t, w, e);
  }
  completeStep(t) {
    this.completedSteps.has(t) || (this.completedSteps.add(t), this.hasInstallNum = this.completedSteps.size, __rea_outer_g.getInstance().refreshGameProgress(), this.hasInstallNum >= _ && this.enterPhase2Success());
  }
  getLowestUnfinishedStep() {
    for (let t = 1; t <= _; t += 1) if (!this.completedSteps.has(t)) return t;
    return null;
  }
  startFireLoop() {
    this.fireFrame = 0, this.applyFireFrame(), this.schedule(this.onFireTick, .1);
  }
  applyFireFrame() {
    this.fireNodes.forEach((t, e) => {
      this.setNodeActive(t, e === this.fireFrame);
    });
  }
  startFrameSwap(t, e) {
    this.stopFrameSwap(!1), this.swapFrameA = t, this.swapFrameB = e, this.applySwapFrame(!0), this.schedule(this.onSwapTick, .3);
  }
  stopFrameSwap(t) {
    this.unschedule(this.onSwapTick), t || (this.setNodeActive(this.swapFrameA, !1), this.setNodeActive(this.swapFrameB, !1)), this.swapFrameA = null, this.swapFrameB = null;
  }
  applySwapFrame(t) {
    this.setNodeActive(this.swapFrameA, t), this.setNodeActive(this.swapFrameB, !t);
  }
  beginPerformance() {
    return this.performanceToken += 1, this.allowCheckout = !1, this.setInputBlocked(!0), this.performanceToken;
  }
  isPerformanceCurrent(t) {
    return this.isValid && 1 === this.phase && t === this.performanceToken && !this.winstate;
  }
  endPerformance(t) {
    t === this.performanceToken && this.isValid && 1 === this.phase && !this.winstate && (this.allowCheckout = !1, this.setInputBlocked(!1));
  }
  wait(t, e, i) {
    this.scheduleOnceIfValid(() => {
      this.isPerformanceCurrent(t) && i();
    }, e);
  }
  playActionSound() {
    __rea_outer_l.playEffect_1("level68_1");
  }
  playDialogue(t, e, i) {
    this.voiceToken += 1;
    const s = this.voiceToken;
    this.showPrompt(t), __rea_outer_l.stopVoice(), __rea_outer_l.playVoice(t);
    let n = !1;
    const o = () => {
        !n && this.isValid && s === this.voiceToken && (n = !0, this.unschedule(a), e && this.hidePrompt(), null == i || i());
      },
      a = () => {
        o();
      },
      h = this.resolveDialogueHoldSeconds(t);
    this.scheduleOnce(o, h), this.scheduleOnce(a, Math.max(8, h + .5));
  }
  resolveDialogueHoldSeconds(t) {
    var e;
    const i = (null == (e = __rea_outer_l.audioMap.get(t)) ? void 0 : e.getDuration()) ?? 0;
    return i > .1 ? i : 2.5;
  }
  showPrompt(t) {
    this.promptLabel && (this.promptLabel.string = this.resolveI18nText(t)), this.setNodeActive(this.promptBoxNode, !0), this.bringNodeToFront(this.promptBoxNode);
  }
  hidePrompt() {
    this.setNodeActive(this.promptBoxNode, !1);
  }
  resolveI18nText(t) {
    const e = __rea_outer_d.getInstance().getKey(t);
    return e && e !== t ? e : t;
  }
  restoreDrag(t) {
    if ("pump" === t.kind) return this.setNodeActive(this.getGameChild("pump1"), !1), this.restoreHome(this.getGameChild("pump1")), this.restoreHome(t.sourceNode), void this.setNodeActive(t.sourceNode, !0);
    this.restoreHome(t.sourceNode), this.setNodeActive(t.sourceNode, !0);
  }
  cancelDrag() {
    this.activeDrag && (this.restoreDrag(this.activeDrag), this.activeDrag = null);
  }
  getQueueEnterStart() {
    const t = this.slotOrigins[1],
      e = this.slotOrigins[2];
    return new __rea_outer_s(2 * e.x - t.x, 2 * e.y - t.y, e.z);
  }
  moveNodeTo(t, e, i, s) {
    null != t && t.isValid ? (this.stopTweenIfValid(t), __rea_outer_o(t).to(i, {
      position: e.clone()
    }).call(() => null == s ? void 0 : s()).start()) : null == s || s();
  }
  placeNodeAtWorld(t, e) {
    const i = this.gameNode ?? t.parent;
    if (null == i || !i.isValid) return;
    const s = i.getComponent(__rea_outer_n);
    s && t.setPosition(s.convertToNodeSpaceAR(e));
  }
  calculateTouchOffset(t, e) {
    const i = this.gameNode ?? e.parent;
    if (null == i || !i.isValid) return __rea_outer_s.ZERO.clone();
    const n = this.getTouchLocalPosition(t, i);
    return new __rea_outer_s(e.position.x - n.x, e.position.y - n.y, 0);
  }
  setDragNodePositionFromTouch(t, e, i) {
    const s = this.gameNode ?? e.parent;
    if (null == s || !s.isValid) return;
    const n = this.getTouchLocalPosition(t, s);
    e.setPosition(n.x + i.x, n.y + i.y, e.position.z);
  }
  getTouchLocalPosition(t, e) {
    const i = t.getUILocation(),
      o = e.getComponent(__rea_outer_n);
    return o ? o.convertToNodeSpaceAR(new __rea_outer_s(i.x, i.y, 0)) : __rea_outer_s.ZERO.clone();
  }
  restoreCachedNodes() {
    this.homeParents.forEach((t, e) => {
      e.isValid && t.isValid && e.parent !== t && e.setParent(t);
    }), this.nodeOrigins.forEach((t, e) => {
      e.isValid && (this.stopTweenIfValid(e), e.setPosition(t));
    }), this.siblingOrigins.forEach((t, e) => {
      e.isValid && e.parent && e.setSiblingIndex(t);
    });
  }
  restoreOrigin(t) {
    if (null == t || !t.isValid) return;
    const e = this.nodeOrigins.get(t);
    e && (this.stopTweenIfValid(t), t.setPosition(e));
  }
  restoreHome(t) {
    if (null == t || !t.isValid) return;
    this.stopTweenIfValid(t);
    const e = this.homeParents.get(t);
    null != e && e.isValid && t.parent !== e && t.setParent(e), this.restoreOrigin(t), this.restoreSibling(t);
  }
  restoreSibling(t) {
    if (null == t || !t.isValid || !t.parent) return;
    const e = this.siblingOrigins.get(t);
    void 0 !== e && t.setSiblingIndex(e);
  }
  bringNodeToFront(t) {
    null != t && t.isValid && t.parent && t.setSiblingIndex(t.parent.children.length - 1);
  }
  setInputBlocked(t) {
    this.setNodeActive(this.backBgNode, t), t && this.resetBackBgOpacity();
  }
  resetBackBgOpacity() {
    var t;
    null != (t = this.backBgNode) && t.isValid && __rea_outer_f(this.backBgNode, 0);
  }
  scheduleOnceIfValid(t, e) {
    this.scheduleOnce(() => {
      this.isValid && t();
    }, e);
  }
  cleanupRuntime(t) {
    this.unscheduleAllCallbacks(), this.unregisterInteractionHandlers(), this.voiceToken += 1, this.performanceToken += 1, this.pointerSession = null, this.allowCheckout = !1, this.isPhoneUiOpen = !1, this.unbindCheckoutButton(), this.cancelDrag(), this.stopFrameSwap(!1), t && __rea_outer_l.stopVoice(), this.stopAllGameplayTweens();
  }
  stopAllGameplayTweens() {
    this.nodeByName.forEach(t => {
      this.stopTweenIfValid(t);
    }), this.attendantPool.forEach(t => {
      this.stopTweenIfValid(t);
    }), this.stopTweenIfValid(this.attendantZone), this.stopTweenIfValid(this.backBgNode);
  }
  stopTweenIfValid(t) {
    null != t && t.isValid && __rea_outer_N(t);
  }
  setNodeActive(t, e) {
    null != t && t.isValid && (t.active = e);
  }
  getGameChild(t) {
    var e;
    return this.nodeByName.get(t) ?? (null == (e = this.gameNode) ? void 0 : e.getChildByName(t)) ?? null;
  }
  cacheNode(t) {
    null != t && t.isValid && ("flight_attendant" === t.name || this.nodeByName.has(t.name) || this.nodeByName.set(t.name, t), this.nodeOrigins.set(t, t.position.clone()), this.siblingOrigins.set(t, t.getSiblingIndex()), t.parent && this.homeParents.set(t, t.parent));
  }
  resolveAttendantNodes() {
    var t;
    const e = (null == (t = this.gameNode) ? void 0 : t.children) ?? [];
    [11, 12, 13].forEach((t, i) => {
      var n;
      const o = e[t] ?? null;
      this.attendantPool[i] = "flight_attendant" === (null == o ? void 0 : o.name) ? o : null, this.cacheNode(this.attendantPool[i]), this.slotOrigins[i] = (null == (n = this.attendantPool[i]) ? void 0 : n.position.clone()) ?? new __rea_outer_s(), this.slotNodes[i] = this.attendantPool[i];
    });
  }
  resolveReferences() {
    var t, e;
    this.gameNode = this.node.getChildByPath("UIPanel/gameNode"), this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.nodeByName.clear(), this.nodeOrigins.clear(), this.siblingOrigins.clear(), this.homeParents.clear(), null == (t = this.gameNode) || t.children.forEach(t => {
      this.cacheNode(t);
    }), this.resolveAttendantNodes(), this.attendantZone = this.node.getChildByPath("UIPanel/gameNode/clicks/touchflight_attendant"), this.cacheNode(this.attendantZone), this.fireNodes[0] = this.getGameChild("fire_1"), this.fireNodes[1] = this.getGameChild("fire_2"), this.fireNodes[2] = this.getGameChild("fire_3"), this.promptBoxNode = this.getGameChild("prompt_box"), this.promptLabel = (null == (e = this.promptBoxNode) || null == (e = e.getChildByName("Label")) ? void 0 : e.getComponent(__rea_outer_a)) ?? null, this.warnIfMissing();
  }
  warnIfMissing() {
    const t = [...S, ...y];
    this.gameNode || console.warn("[Level_68] missing gameNode"), t.forEach(t => {
      this.getGameChild(t) || console.warn(`[Level_68] missing ${t}`);
    }), this.attendantPool.forEach((t, e) => {
      t || console.warn(`[Level_68] missing flight_attendant sibling ${11 + e}`);
    }), this.attendantZone || console.warn("[Level_68] missing clicks/touchflight_attendant"), this.promptLabel || console.warn("[Level_68] missing prompt_box/Label"), this.backBgNode || console.warn("[Level_68] missing backBG");
  }
}) || C;
__rea_outer_e._RF.pop();
export { __recovered_export_0 as default };
