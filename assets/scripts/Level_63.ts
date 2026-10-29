// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_63.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_e } from "cc";
import { Vec3 as __rea_outer_i } from "cc";
import { Color as __rea_outer_s } from "cc";
import { Node as __rea_outer_o } from "cc";
import { Button as __rea_outer_n } from "cc";
import { tween as __rea_outer_h } from "cc";
import { Sprite as __rea_outer_l } from "cc";
import { Label as __rea_outer_a } from "cc";
import { Vec2 as __rea_outer_d } from "cc";
import { UITransform as __rea_outer_r } from "cc";
import { _decorator as __rea_outer_c } from "cc";
import { default as __rea_outer_u } from "./LevelBase";
import { default as __rea_outer_p } from "./AudioManager";
import { I18nController as __rea_outer_N } from "./i18n-controller";
import { UIManager as __rea_outer_f } from "./ui-manager";
import { UILayer as __rea_outer_g } from "./ui-layer";
import { UIHint as __rea_outer_m } from "./uihint";
import { UIFail as __rea_outer_b } from "./uifail";
import { GameController as __rea_outer_B } from "./GameController";
import { stopAllTweens as __rea_outer_S } from "./CocosCompat";
import { ensureUITransform as __rea_outer_v } from "./CocosCompat";
let __recovered_export_0;
var I;
__rea_outer_e._RF.push({}, "c63e0oRfWNOM59EVaZrAABj", "Level_63", void 0);
const {
    ccclass: w
  } = __rea_outer_c,
  k = ["63_1", "63_2", "63_3"],
  y = "level63_1",
  P = new __rea_outer_i(122.608, -130, 0),
  V = [new __rea_outer_i(-48.226, 47.075, 0), new __rea_outer_i(27.826, 43.538, 0)],
  T = new __rea_outer_i(-10.2, 45.3065, 0),
  C = [new __rea_outer_i(354, -276.5, 0), new __rea_outer_i(383.51, -122.107, 0), new __rea_outer_i(341.21, 49.206, 0), new __rea_outer_i(427.924, 203.599, 0)],
  A = [{
    id: "S1",
    cost: 1,
    actorSibling: 4,
    plateSibling: 10
  }, {
    id: "S2",
    cost: 2,
    actorSibling: 6,
    plateSibling: 11
  }, {
    id: "S5",
    cost: 5,
    actorSibling: 8,
    plateSibling: 12
  }, {
    id: "S10",
    cost: 10,
    actorSibling: 5,
    plateSibling: 13
  }],
  F = ["17", "The wolf will arrive in", "minutes", "clicks", "drags", "swips"],
  L = new __rea_outer_s(243, 0, 0, 255),
  x = new __rea_outer_s(0, 0, 0, 255);
__recovered_export_0 = w("Level_63")(I = class extends __rea_outer_u {
  constructor(...t) {
    super(...t), this.phase = 0, this.winstate = !1, this.gameNode = null, this.backBgNode = null, this.bubbleNode = null, this.bubbleLabel = null, this.clickRootNode = null, this.infoButtonNode = null, this.infoButton = null, this.sailButtonNode = null, this.sailButton = null, this.sailButtonLabel = null, this.demoNode = null, this.bgNode = null, this.thicketNode = null, this.shipNode = null, this.wolfNode = null, this.wolfPounceNode = null, this.winQuestionNode = null, this.failMarkNode = null, this.winMarkNode = null, this.sheepScaredNode = null, this.sheepRightNode = null, this.timerBgNode = null, this.timerNode = null, this.remainLabel = null, this.unusedNodes = [], this.leftFrame = null, this.rightFrame = null, this.scaredFrame = null, this.shipLeft = new __rea_outer_i(-35, -130.5, 0), this.wolfLeftSlot = new __rea_outer_i(-376, -51.5, 0), this.sheep = [], this.shipBank = "left", this.remain = 17, this.pendingTripCost = 0, this.isBusy = !1, this.isFailed = !1, this.voiceToken = 0, this.currentVoiceKey = "";
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.allItemNum = 4, this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.applyInitialVisibility(), this.enterPhase0();
  }
  onDestroy() {
    this.unscheduleAllCallbacks(), this.unregisterHandlers(), this.stopTrackedTweens(), super.onDestroy();
  }
  handleTimeExpired() {
    return !!(this.phase >= 2 || this.winstate);
  }
  showHint() {
    const t = __rea_outer_N.getInstance().getKey("level63_legend");
    __rea_outer_f.getInstance().showView(__rea_outer_m, void 0, {
      body: t
    });
  }
  getGameProgressSnapshot() {
    const t = this.hasInstallNum;
    return {
      progress: t / 4,
      label: `${t}/4`
    };
  }
  markAllTasksCompleted() {
    this.hasInstallNum = 4;
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.isBusy = !1, this.isFailed = !1, this.shipBank = "left", this.remain = 17, this.pendingTripCost = 0, this.voiceToken = 0, this.currentVoiceKey = "", this.hasInstallNum = 0, this.sheep.forEach(t => {
      t.location = "left", t.seatIndex = -1, t.rightSlotIndex = -1;
    }), __rea_outer_p.stopVoice();
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_p.playMusic("bgm4", !0, .5), this.setInputBlocked(!0), this.setNodeActive(this.clickRootNode, !1), __rea_outer_B.getInstance().refreshGameProgress(), this.playIntroVoices(0);
  }
  playIntroVoices(t) {
    const e = k[t];
    if (!e) return this.hideBubble(), void this.enterPhase1();
    this.playBubbleVoice(e, () => {
      this.isValid && 0 === this.phase && this.playIntroVoices(t + 1);
    });
  }
  skipOpeningToPlay() {
    return 0 === this.phase && (this.voiceToken += 1, this.stopOpeningDialogue(), this.hideBubble(), this.enterPhase1(), !0);
  }
  enterPhase1() {
    0 === this.phase && (this.phase = 1, this.isBusy = !1, this.setInputBlocked(!1), this.setNodeActive(this.clickRootNode, !0), this.refreshSailButton(), this.registerHandlers(), __rea_outer_B.getInstance().refreshGameProgress());
  }
  enterPhase2Success() {
    this.phase >= 2 || (this.phase = 2, this.winstate = !0, this.isBusy = !0, this.unregisterHandlers(), this.setInputBlocked(!0), this.hideBubble(), this.setNodeActive(this.clickRootNode, !1), this.stopRemainPulse(), __rea_outer_B.getInstance().pauseTimer(), this.playPopupScale(this.winMarkNode, "level63_2", () => {
      this.showLevelSuccess(1);
    }));
  }
  enterPhase2Fail() {
    this.phase >= 2 || (this.phase = 2, this.winstate = !1, this.isBusy = !0, this.unregisterHandlers(), this.setInputBlocked(!0), this.hideBubble(), this.setNodeActive(this.clickRootNode, !1), this.stopRemainPulse(), __rea_outer_B.getInstance().pauseTimer(), this.playPopupScale(this.failMarkNode, "level63_3", () => {
      this.scheduleOnceIfValid(() => {
        __rea_outer_f.getInstance().showView(__rea_outer_b, __rea_outer_g.WIN_ANIMATION);
      }, 1);
    }));
  }
  beginTimeoutFail() {
    this.phase = 2, this.winstate = !1, this.isBusy = !0, this.isFailed = !0, this.unregisterHandlers(), this.voiceToken += 1, this.stopCurrentVoice(), this.hideBubble(), this.stopTrackedTweens(), this.setInputBlocked(!0), this.setNodeActive(this.clickRootNode, !1), this.stopRemainPulse(), __rea_outer_B.getInstance().pauseTimer(), __rea_outer_f.getInstance().showView(__rea_outer_b, __rea_outer_g.WIN_ANIMATION);
  }
  registerHandlers() {
    var t, e;
    this.node.on(__rea_outer_o.EventType.TOUCH_END, this.onTouchEnd, this), null == (t = this.infoButton) || t.node.on(__rea_outer_n.EventType.CLICK, this.onInfoButtonClick, this), null == (e = this.sailButton) || e.node.on(__rea_outer_n.EventType.CLICK, this.onSailButtonClick, this);
  }
  unregisterHandlers() {
    var t, e;
    this.node.off(__rea_outer_o.EventType.TOUCH_END, this.onTouchEnd, this), null != (t = this.infoButton) && null != (t = t.node) && t.isValid && this.infoButton.node.off(__rea_outer_n.EventType.CLICK, this.onInfoButtonClick, this), null != (e = this.sailButton) && null != (e = e.node) && e.isValid && this.sailButton.node.off(__rea_outer_n.EventType.CLICK, this.onSailButtonClick, this);
  }
  onInfoButtonClick() {
    this.showHint();
  }
  onSailButtonClick() {
    1 !== this.phase || this.isBusy || this.executeSail();
  }
  onTouchEnd(t) {
    if (1 !== this.phase || this.isBusy) return;
    const e = this.getTouchWorldPoint(t);
    if (this.isPointInsideNode(this.infoButtonNode, e)) return;
    if (this.isPointInsideNode(this.sailButtonNode, e)) return;
    const i = this.findClickableSheepAt(e);
    i && ("boat" !== i.location ? i.location === this.shipBank && this.boardSheep(i) : this.disembarkSheep(i, !1, () => {}));
  }
  boardSheep(t) {
    const e = this.findEmptySeat();
    if (e < 0) return;
    this.isBusy = !0, this.setInputBlocked(!0), this.applySheepFrame(t, this.leftFrame);
    const i = t.actorNode;
    this.reparentToGameNode(i), this.placeBehindShip(i);
    const s = this.getSeatGamePosition(e);
    t.location = "boat", t.seatIndex = e, t.rightSlotIndex = -1, this.refreshProgress(), __rea_outer_p.playEffect_1(y), __rea_outer_S(i), __rea_outer_h(i).to(.4, {
      position: s
    }).call(() => {
      this.isValid && 1 === this.phase && (this.seatSheepBehindShip(t, e), this.isBusy = !1, this.setInputBlocked(!1), this.refreshSailButton());
    }).start();
  }
  disembarkSheep(t, e, i) {
    const s = this.shipBank,
      o = t.actorNode;
    this.reparentToGameNode(o), this.placeBehindShip(o);
    const n = this.getSlot(t, s);
    e || (this.isBusy = !0, this.setInputBlocked(!0), __rea_outer_p.playEffect_1(y)), __rea_outer_S(o), __rea_outer_h(o).to(.4, {
      position: n
    }).call(() => {
      this.isValid && 1 === this.phase && (this.settleOnBank(t, s), e || (this.refreshProgress(), this.isBusy = !1, this.setInputBlocked(!1), this.refreshSailButton()), i());
    }).start();
  }
  executeSail() {
    this.countOnBoat() <= 0 || (this.isBusy = !0, this.setInputBlocked(!0), this.pendingTripCost = this.getTripCost(), this.remain - this.pendingTripCost < 0 ? this.beginVoyageFail() : this.sailToOppositeBank(!1));
  }
  beginVoyageFail() {
    this.isFailed = !0, this.applyScaredPoseToAll(), this.showWolfOnBoat(), this.sailToOppositeBank(!0);
  }
  sailToOppositeBank(t) {
    const e = this.shipNode;
    if (null == e || !e.isValid) return void this.onSailArrived(t);
    const s = "left" === this.shipBank ? "right" : "left",
      o = "left" === s ? this.shipLeft.clone() : P.clone();
    this.faceShipForDestination(s), this.snapBoatOccupants();
    const n = new __rea_outer_i(o.x - e.position.x, o.y - e.position.y, 0);
    __rea_outer_S(e), __rea_outer_h(e).to(1, {
      position: o
    }).call(() => {
      this.isValid && 1 === this.phase && (this.shipBank = s, this.onSailArrived(t));
    }).start(), this.tweenBoatFollowers(n);
  }
  tweenBoatFollowers(t) {
    var e;
    this.sheep.forEach(e => {
      "boat" === e.location && this.tweenByDelta(e.actorNode, t);
    }), this.isFailed && null != (e = this.wolfPounceNode) && e.active && this.tweenByDelta(this.wolfPounceNode, t);
  }
  tweenByDelta(t, e) {
    if (null == t || !t.isValid) return;
    const s = new __rea_outer_i(t.position.x + e.x, t.position.y + e.y, 0);
    __rea_outer_S(t), __rea_outer_h(t).to(1, {
      position: s
    }).start();
  }
  onSailArrived(t) {
    t ? this.enterPhase2Fail() : this.autoDisembarkAll();
  }
  autoDisembarkAll() {
    const t = this.sheep.filter(t => "boat" === t.location);
    if (0 === t.length) return void this.finishSafeArrival();
    let e = t.length;
    t.forEach(t => {
      this.disembarkSheep(t, !0, () => {
        e -= 1, e <= 0 && this.isValid && 1 === this.phase && this.finishSafeArrival();
      });
    });
  }
  finishSafeArrival() {
    this.remain -= this.pendingTripCost, this.pendingTripCost = 0, this.setShipScaleX("right" === this.shipBank ? -1 : 1), this.refreshRemainLabel(), this.refreshProgress(), this.countOnBank("right") >= 4 ? this.beginWinSequence() : this.countOnBank("left") > 0 && this.remain <= 0 ? this.beginShoreFail() : (this.isBusy = !1, this.setInputBlocked(!1), this.refreshSailButton());
  }
  beginWinSequence() {
    this.setNodeActive(this.wolfNode, !0), this.setNodeActive(this.winQuestionNode, !0), this.scheduleOnceIfValid(() => {
      this.isValid && 1 === this.phase && this.enterPhase2Success();
    }, .5);
  }
  beginShoreFail() {
    this.isFailed = !0, this.applyScaredPoseToAll(), this.showWolfOnLeftBank(), this.enterPhase2Fail();
  }
  showWolfOnBoat() {
    const t = this.wolfPounceNode;
    null != t && t.isValid && (t.setPosition(this.getWolfBoatPosition()), this.placeInFrontOfShip(t), this.setNodeActive(t, !0));
  }
  showWolfOnLeftBank() {
    const t = this.wolfPounceNode;
    null != t && t.isValid && (t.setPosition(this.wolfLeftSlot), this.setNodeActive(t, !0));
  }
  applyScaredPoseToAll() {
    this.sheep.forEach(t => {
      this.applySheepFrame(t, this.scaredFrame);
    });
  }
  settleOnBank(t, e) {
    t.location = e, t.seatIndex = -1;
    const i = this.getSlot(t, e);
    t.actorNode.setPosition(i), this.setNodeActive(t.actorNode, !0), "right" !== e ? this.applySheepFrame(t, this.leftFrame) : this.applySheepFrame(t, this.rightFrame);
  }
  applySheepFrame(t, e) {
    const i = t.actorNode.getComponent(__rea_outer_l);
    i && e && (i.spriteFrame = e);
  }
  faceShipForDestination(t) {
    this.setShipScaleX("right" === t ? 1 : -1);
  }
  setShipScaleX(t) {
    const e = this.shipNode;
    null != e && e.isValid && e.setScale(t, 1, 1);
  }
  snapBoatOccupants() {
    var t;
    this.sheep.forEach(t => {
      "boat" !== t.location || t.seatIndex < 0 || (t.actorNode.setPosition(this.getSeatGamePosition(t.seatIndex)), this.placeBehindShip(t.actorNode));
    }), this.isFailed && null != (t = this.wolfPounceNode) && t.active && (this.wolfPounceNode.setPosition(this.getWolfBoatPosition()), this.placeInFrontOfShip(this.wolfPounceNode));
  }
  seatSheepBehindShip(t, e) {
    const i = t.actorNode;
    null != i && i.isValid && (i.setPosition(this.getSeatGamePosition(e)), this.placeBehindShip(i));
  }
  placeBehindShip(t) {
    var e;
    const i = this.shipNode;
    if (null == (e = this.gameNode) || !e.isValid || null == i || !i.isValid || !t.isValid) return;
    t.parent !== this.gameNode && this.reparentToGameNode(t);
    const s = i.getSiblingIndex();
    t.getSiblingIndex() > s && t.setSiblingIndex(s);
  }
  placeInFrontOfShip(t) {
    var e;
    const i = this.shipNode;
    if (null == (e = this.gameNode) || !e.isValid || null == i || !i.isValid || !t.isValid) return;
    t.parent !== this.gameNode && this.reparentToGameNode(t);
    const s = i.getSiblingIndex();
    t.getSiblingIndex() < s && t.setSiblingIndex(s + 1);
  }
  reparentToGameNode(t) {
    var e;
    if (null == (e = this.gameNode) || !e.isValid || !t.isValid) return;
    const i = t.worldPosition.clone();
    t.setParent(this.gameNode), t.setWorldPosition(i);
  }
  findEmptySeat() {
    const t = new Set();
    this.sheep.forEach(e => {
      "boat" === e.location && e.seatIndex >= 0 && t.add(e.seatIndex);
    });
    for (let e = 0; e < 2; e += 1) if (!t.has(e)) return e;
    return -1;
  }
  assignRightSlot(t) {
    if (t.rightSlotIndex >= 0) return t.rightSlotIndex;
    const e = new Set();
    this.sheep.forEach(t => {
      t.rightSlotIndex >= 0 && e.add(t.rightSlotIndex);
    });
    for (let i = 0; i < C.length; i += 1) if (!e.has(i)) return t.rightSlotIndex = i, i;
    return t.rightSlotIndex = 0, 0;
  }
  countOnBank(t) {
    return this.sheep.filter(e => e.location === t).length;
  }
  countOnBoat() {
    return this.sheep.filter(t => "boat" === t.location).length;
  }
  getTripCost() {
    let t = 0;
    return this.sheep.forEach(e => {
      "boat" === e.location && e.cost > t && (t = e.cost);
    }), t;
  }
  refreshProgress() {
    this.hasInstallNum = this.countOnBank("right"), __rea_outer_B.getInstance().refreshGameProgress();
  }
  refreshSailButton() {
    const t = 1 === this.phase && !this.isBusy && this.countOnBoat() > 0;
    this.sailButton && (this.sailButton.interactable = t);
  }
  getSlot(t, e) {
    if ("left" === e) return t.leftSlot.clone();
    const i = this.assignRightSlot(t);
    return C[i].clone();
  }
  getShipScaleX() {
    var t;
    return (null == (t = this.shipNode) ? void 0 : t.scale.x) ?? 1;
  }
  getSeatGamePosition(t) {
    var e;
    const s = (null == (e = this.shipNode) ? void 0 : e.position) ?? this.shipLeft,
      o = V[t] ?? V[0],
      n = this.getShipScaleX();
    return new __rea_outer_i(s.x + o.x * n, s.y + o.y, 0);
  }
  getWolfBoatPosition() {
    var t;
    const e = (null == (t = this.shipNode) ? void 0 : t.position) ?? this.shipLeft,
      s = this.getShipScaleX();
    return new __rea_outer_i(e.x + T.x * s, e.y + T.y, 0);
  }
  findClickableSheepAt(t) {
    const e = this.sheep.filter(t => "boat" === t.location),
      i = this.sheep.filter(t => t.location === this.shipBank),
      s = e.reverse().concat(i.reverse());
    for (let e = 0; e < s.length; e += 1) {
      const i = s[e];
      if (this.isPointInsideNode(i.actorNode, t)) return i;
      if (this.isPointInsideNode(i.plateNode, t)) return i;
    }
    return null;
  }
  refreshRemainLabel() {
    this.remainLabel && (this.remainLabel.string = String(this.remain), this.remainLabel.color = this.remain <= 2 ? L : x), this.refreshRemainPulse();
  }
  refreshRemainPulse() {
    var t;
    const e = (null == (t = this.remainLabel) ? void 0 : t.node) ?? null;
    null != e && e.isValid && (__rea_outer_S(e), e.setScale(1, 1, 1), this.remain > 2 || this.phase >= 2 || __rea_outer_h(e).to(.2, {
      scale: new __rea_outer_i(1.08, 1.08, 1)
    }).to(.2, {
      scale: new __rea_outer_i(1, 1, 1)
    }).union().repeatForever().start());
  }
  stopRemainPulse() {
    var t;
    const e = (null == (t = this.remainLabel) ? void 0 : t.node) ?? null;
    null != e && e.isValid && (__rea_outer_S(e), e.setScale(1, 1, 1));
  }
  playBubbleVoice(t, e) {
    this.voiceToken += 1;
    const i = this.voiceToken;
    this.bubbleLabel && (this.bubbleLabel.string = __rea_outer_N.getInstance().getKey(t)), this.setNodeActive(this.bubbleNode, !0);
    let s = !1;
    const o = () => {
        !s && this.isValid && i === this.voiceToken && (s = !0, this.unschedule(n), e());
      },
      n = () => {
        o();
      };
    this.scheduleOnce(n, 12), this.stopCurrentVoice(), this.currentVoiceKey = t, __rea_outer_p.playEffect_1(t, o);
  }
  stopCurrentVoice() {
    __rea_outer_p.stopVoice(), this.currentVoiceKey && (__rea_outer_p.stopOneEffect(this.currentVoiceKey), this.currentVoiceKey = "");
  }
  hideBubble() {
    this.setNodeActive(this.bubbleNode, !1);
  }
  playPopupScale(t, e, s) {
    if (null == t || !t.isValid) return __rea_outer_p.playEffect_1(e), void s();
    this.bringNodeToFront(t), t.setScale(0, 0, 1), this.setNodeActive(t, !0), __rea_outer_p.playEffect_1(e), __rea_outer_S(t), __rea_outer_h(t).to(.25, {
      scale: new __rea_outer_i(1, 1, 1)
    }).call(() => {
      this.isValid && s();
    }).start();
  }
  setInputBlocked(t) {
    this.setNodeActive(this.backBgNode, t);
  }
  applyInitialVisibility() {
    var t, e, i, s;
    this.setNodeActive(this.bgNode, !0), this.setNodeActive(this.thicketNode, !0), this.setNodeActive(this.shipNode, !0), null != (t = this.shipNode) && t.isValid && (this.shipNode.setPosition(this.shipLeft), this.shipNode.setScale(1, 1, 1)), this.sheep.forEach(t => {
      this.attachPlate(t), t.actorNode.setPosition(t.leftSlot), this.setNodeActive(t.actorNode, !0), this.applySheepFrame(t, this.leftFrame);
    }), this.setNodeActive(this.wolfNode, !1), this.setNodeActive(this.wolfPounceNode, !1), this.setNodeActive(this.winQuestionNode, !1), this.setNodeActive(this.sheepScaredNode, !1), this.setNodeActive(this.sheepRightNode, !1), this.setNodeActive(this.timerBgNode, !0), this.setNodeActive(this.timerNode, !0), this.setNodeActive(this.failMarkNode, !1), this.setNodeActive(this.winMarkNode, !1), this.setNodeActive(this.clickRootNode, !1), this.setNodeActive(this.demoNode, !1), this.setNodeActive(this.bubbleNode, !1), this.setNodeActive((null == (e = this.bubbleNode) ? void 0 : e.getChildByName("dialog_box_1")) ?? null, !1), this.unusedNodes.forEach(t => {
      this.setNodeActive(t, !1);
    }), this.sailButtonLabel && (this.sailButtonLabel.string = __rea_outer_N.getInstance().getKey("game59")), this.sailButton && (this.sailButton.interactable = !1), this.refreshRemainLabel(), null != (i = this.failMarkNode) && i.isValid && this.failMarkNode.setScale(1, 1, 1), null != (s = this.winMarkNode) && s.isValid && this.winMarkNode.setScale(1, 1, 1);
  }
  attachPlate(t) {
    const e = t.plateNode,
      i = t.actorNode;
    if (null == e || !e.isValid || null == i || !i.isValid) return;
    const s = e.worldPosition.clone();
    e.setParent(i), e.setWorldPosition(s), this.setNodeActive(e, !0);
  }
  resolveReferences() {
    var t, e, i, s, o, h, d, r, c, u, p, N, f;
    const g = this.node.getChildByPath("UIPanel");
    this.gameNode = this.node.getChildByPath("UIPanel/gameNode"), this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.bubbleNode = this.node.getChildByPath("UIPanel/bubble"), this.bubbleLabel = (null == (t = this.bubbleNode) || null == (t = t.getChildByPath("dialog_box/Label")) ? void 0 : t.getComponent(__rea_outer_a)) ?? null, this.clickRootNode = this.node.getChildByPath("UIPanel/click_root"), this.infoButtonNode = (null == (e = this.clickRootNode) ? void 0 : e.getChildByName("infoButton")) ?? null, this.infoButton = (null == (i = this.infoButtonNode) ? void 0 : i.getComponent(__rea_outer_n)) ?? null, this.setNodeActive(this.infoButtonNode, !1), this.sailButtonNode = (null == (s = this.clickRootNode) ? void 0 : s.getChildByName("Button")) ?? null, this.sailButton = (null == (o = this.sailButtonNode) ? void 0 : o.getComponent(__rea_outer_n)) ?? null, this.sailButtonLabel = (null == (h = this.sailButtonNode) || null == (h = h.getChildByName("Label")) ? void 0 : h.getComponent(__rea_outer_a)) ?? null, this.demoNode = this.node.getChildByPath("UIPanel/demo");
    const m = this.gameNode;
    m && __rea_outer_v(m, 1080, 1920);
    const b = (null == m ? void 0 : m.children) ?? [];
    this.bgNode = b[0] ?? null, this.wolfNode = this.findFirstNamed(b, "wolf"), this.thicketNode = this.findFirstNamed(b, "thicket"), this.wolfPounceNode = this.findFirstNamed(b, "wolf_1"), this.shipNode = this.findFirstNamed(b, "ship"), this.sheepScaredNode = this.findFirstNamed(b, "sheep_2"), this.sheepRightNode = this.findFirstNamed(b, "sheep_1"), this.failMarkNode = this.findFirstNamed(b, "end_1"), this.winMarkNode = this.findFirstNamed(b, "general_end");
    const B = this.findNamed(b, "wolf_1_1");
    this.winQuestionNode = B[B.length - 1] ?? null;
    const S = this.findNamed(b, "time");
    this.timerNode = S.find(t => null !== t.getChildByName("Label")) ?? S[S.length - 1] ?? null;
    const I = this.findNamed(b, "bg_1");
    this.timerBgNode = I[I.length - 1] ?? null, this.remainLabel = (null == (d = this.timerNode) || null == (d = d.getChildByName("Label")) ? void 0 : d.getComponent(__rea_outer_a)) ?? null, this.leftFrame = (null == (r = b[A[0].actorSibling]) || null == (r = r.getComponent(__rea_outer_l)) ? void 0 : r.spriteFrame) ?? null, this.rightFrame = (null == (c = this.sheepRightNode) || null == (c = c.getComponent(__rea_outer_l)) ? void 0 : c.spriteFrame) ?? null, this.scaredFrame = (null == (u = this.sheepScaredNode) || null == (u = u.getComponent(__rea_outer_l)) ? void 0 : u.spriteFrame) ?? null, this.buildSheep(b), this.unusedNodes.length = 0, this.collectUnusedNodes(b, B, S, I), null != (p = this.shipNode) && p.isValid && (this.shipLeft = this.shipNode.position.clone()), null != (N = this.wolfPounceNode) && N.isValid && (this.wolfLeftSlot = this.wolfPounceNode.position.clone()), this.warnIfMissing("UIPanel", g), this.warnIfMissing("UIPanel/gameNode", this.gameNode), this.warnIfMissing("UIPanel/click_root", this.clickRootNode), this.warnIfMissing("infoButton", this.infoButtonNode), this.warnIfMissing("Button", this.sailButtonNode), this.warnIfMissing("ship", this.shipNode), this.warnIfMissing("bubble", this.bubbleNode), this.warnIfMissing("time/Label", (null == (f = this.remainLabel) ? void 0 : f.node) ?? null), this.warnIfMissing("end_1", this.failMarkNode), this.warnIfMissing("general_end", this.winMarkNode), A.forEach(t => {
      const e = this.sheep.find(e => e.id === t.id);
      this.warnIfMissing(`${t.id} actor`, (null == e ? void 0 : e.actorNode) ?? null), this.warnIfMissing(`${t.id} plate`, (null == e ? void 0 : e.plateNode) ?? null);
    });
  }
  buildSheep(t) {
    this.sheep.length = 0, A.forEach(e => {
      const i = t[e.actorSibling],
        s = t[e.plateSibling];
      i && s && this.sheep.push({
        id: e.id,
        cost: e.cost,
        actorNode: i,
        plateNode: s,
        leftSlot: i.position.clone(),
        location: "left",
        seatIndex: -1,
        rightSlotIndex: -1
      });
    });
  }
  collectUnusedNodes(t, e, i, s) {
    F.forEach(e => {
      this.findNamed(t, e).forEach(t => {
        this.unusedNodes.push(t);
      });
    }), e.forEach(t => {
      t !== this.winQuestionNode && this.unusedNodes.push(t);
    }), i.forEach(t => {
      t !== this.timerNode && this.unusedNodes.push(t);
    }), s.forEach(t => {
      t !== this.timerBgNode && this.unusedNodes.push(t);
    });
    const o = new Set(this.sheep.map(t => t.plateNode));
    this.findNamed(t, "10").forEach(t => {
      o.has(t) || this.unusedNodes.push(t);
    });
  }
  findNamed(t, e) {
    return t.filter(t => t.name === e);
  }
  findFirstNamed(t, e) {
    return this.findNamed(t, e)[0] ?? null;
  }
  getTouchWorldPoint(t) {
    const e = t.getUILocation();
    return new __rea_outer_d(e.x, e.y);
  }
  isPointInsideNode(t, e) {
    if (null == t || !t.isValid || !t.activeInHierarchy) return !1;
    const i = t.getComponent(__rea_outer_r);
    return !!i && i.getBoundingBoxToWorld().contains(e);
  }
  bringNodeToFront(t) {
    null != t && t.isValid && t.parent && t.setSiblingIndex(t.parent.children.length - 1);
  }
  setNodeActive(t, e) {
    null != t && t.isValid && (t.active = e);
  }
  scheduleOnceIfValid(t, e) {
    this.scheduleOnce(() => {
      this.isValid && t();
    }, e);
  }
  stopTrackedTweens() {
    this.sheep.forEach(t => {
      __rea_outer_S(t.actorNode), __rea_outer_S(t.plateNode);
    }), __rea_outer_S(this.shipNode), __rea_outer_S(this.wolfPounceNode), __rea_outer_S(this.failMarkNode), __rea_outer_S(this.winMarkNode), this.stopRemainPulse();
  }
  warnIfMissing(t, e) {
    e || console.warn(`[Level_63] missing ${t}`);
  }
}) || I;
__rea_outer_e._RF.pop();
export { __recovered_export_0 as default };
