// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_55.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_e } from "cc";
import { Vec3 as __rea_outer_i } from "cc";
import { Node as __rea_outer_s } from "cc";
import { Button as __rea_outer_o } from "cc";
import { tween as __rea_outer_n } from "cc";
import { instantiate as __rea_outer_h } from "cc";
import { Label as __rea_outer_l } from "cc";
import { Vec2 as __rea_outer_a } from "cc";
import { UITransform as __rea_outer_r } from "cc";
import { _decorator as __rea_outer_d } from "cc";
import { default as __rea_outer_c } from "./LevelBase";
import { default as __rea_outer_u } from "./AudioManager";
import { I18nController as __rea_outer_p } from "./i18n-controller";
import { UIManager as __rea_outer_f } from "./ui-manager";
import { UILayer as __rea_outer_N } from "./ui-layer";
import { UIHint as __rea_outer_g } from "./uihint";
import { UIFail as __rea_outer_b } from "./uifail";
import { GameController as __rea_outer_B } from "./GameController";
import { stopAllTweens as __rea_outer_v } from "./CocosCompat";
import { ensureUITransform as __rea_outer_k } from "./CocosCompat";
let __recovered_export_0;
var y;
__rea_outer_e._RF.push({}, "c55e0oRfVVOM59EVaZrAABV", "Level_55", void 0);
const {
    ccclass: I
  } = __rea_outer_d,
  P = "level55_1",
  m = new __rea_outer_i(123.688, -80.5, 0),
  S = [new __rea_outer_i(58.936, 70.885, 0), new __rea_outer_i(-3.731, 79.295, 0)],
  V = [{
    id: "P1",
    kind: "police",
    actorSibling: 1,
    rightSibling: 7
  }, {
    id: "P2",
    kind: "police",
    actorSibling: 2,
    rightSibling: 8
  }, {
    id: "P3",
    kind: "police",
    actorSibling: 3,
    rightSibling: 9
  }, {
    id: "T1",
    kind: "thief",
    actorSibling: 4,
    rightSibling: 10
  }, {
    id: "T2",
    kind: "thief",
    actorSibling: 5,
    rightSibling: 11
  }, {
    id: "T3",
    kind: "thief",
    actorSibling: 6,
    rightSibling: 12
  }],
  A = [13, 14];
__recovered_export_0 = I("Level_55")(y = class extends __rea_outer_c {
  constructor(...t) {
    super(...t), this.phase = 0, this.winstate = !1, this.gameNode = null, this.backBgNode = null, this.bubbleNode = null, this.bubbleLabel = null, this.clickRootNode = null, this.infoButtonNode = null, this.infoButton = null, this.demoNode = null, this.bgNode = null, this.shipNode = null, this.sailButtonNode = null, this.sailButtonLabel = null, this.failMarkNode = null, this.winMarkNode = null, this.thief1Template = null, this.thief2Nodes = [], this.seatLocals = [S[0].clone(), S[1].clone()], this.shipLeft = new __rea_outer_i(-34, -80.5, 0), this.people = [], this.runClones = [], this.shipBank = "left", this.isBusy = !1, this.voiceToken = 0, this.currentVoiceKey = "";
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.allItemNum = 6, this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.applyInitialVisibility(), this.enterPhase0();
  }
  onDestroy() {
    this.unscheduleAllCallbacks(), this.unregisterHandlers(), this.stopTrackedTweens(), this.destroyRunClones(), super.onDestroy();
  }
  handleTimeExpired() {
    return !!(this.phase >= 2 || this.winstate);
  }
  showHint() {
    const t = __rea_outer_p.getInstance().getKey("level55_legend");
    __rea_outer_f.getInstance().showView(__rea_outer_g, void 0, {
      body: t
    });
  }
  getGameProgressSnapshot() {
    const t = this.hasInstallNum;
    return {
      progress: t / 6,
      label: `${t}/6`
    };
  }
  markAllTasksCompleted() {
    this.hasInstallNum = 6;
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.isBusy = !1, this.shipBank = "left", this.voiceToken = 0, this.currentVoiceKey = "", this.hasInstallNum = 0, this.people.forEach(t => {
      t.location = "left", t.seatIndex = -1;
    }), __rea_outer_u.stopVoice();
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_u.playMusic("bgm4", !0, .5), this.setInputBlocked(!0), this.setNodeActive(this.clickRootNode, !1), __rea_outer_B.getInstance().refreshGameProgress(), this.playBubbleVoice("55_1", () => {
      this.isValid && 0 === this.phase && (this.hideBubble(), this.enterPhase1());
    });
  }
  skipOpeningToPlay() {
    return 0 === this.phase && (this.voiceToken += 1, this.stopOpeningDialogue(), this.hideBubble(), this.enterPhase1(), !0);
  }
  enterPhase1() {
    0 === this.phase && (this.phase = 1, this.isBusy = !1, this.setInputBlocked(!1), this.setNodeActive(this.clickRootNode, !0), this.refreshSailButton(), this.registerHandlers(), __rea_outer_B.getInstance().refreshGameProgress());
  }
  enterPhase2Success() {
    this.phase >= 2 || (this.phase = 2, this.winstate = !0, this.isBusy = !0, this.unregisterHandlers(), this.setInputBlocked(!0), this.hideBubble(), this.setNodeActive(this.clickRootNode, !1), this.setNodeActive(this.sailButtonNode, !1), __rea_outer_B.getInstance().pauseTimer(), this.playPopupScale(this.winMarkNode, "level55_2", () => {
      this.showLevelSuccess(1);
    }));
  }
  enterPhase2Fail() {
    this.phase >= 2 || (this.phase = 2, this.winstate = !1, this.isBusy = !0, this.unregisterHandlers(), this.setInputBlocked(!0), this.hideBubble(), this.setNodeActive(this.clickRootNode, !1), this.setNodeActive(this.sailButtonNode, !1), __rea_outer_B.getInstance().pauseTimer(), this.playPopupScale(this.failMarkNode, "level55_3", () => {
      this.scheduleOnceIfValid(() => {
        __rea_outer_f.getInstance().showView(__rea_outer_b, __rea_outer_N.WIN_ANIMATION);
      }, 2);
    }));
  }
  beginTimeoutFail() {
    this.phase = 2, this.winstate = !1, this.isBusy = !0, this.unregisterHandlers(), this.voiceToken += 1, this.stopCurrentVoice(), this.hideBubble(), this.stopTrackedTweens(), this.setInputBlocked(!0), this.setNodeActive(this.clickRootNode, !1), this.setNodeActive(this.sailButtonNode, !1), __rea_outer_B.getInstance().pauseTimer(), __rea_outer_f.getInstance().showView(__rea_outer_b, __rea_outer_N.WIN_ANIMATION);
  }
  registerHandlers() {
    var t;
    this.node.on(__rea_outer_s.EventType.TOUCH_END, this.onTouchEnd, this), null == (t = this.infoButton) || t.node.on(__rea_outer_o.EventType.CLICK, this.onInfoButtonClick, this);
  }
  unregisterHandlers() {
    var t;
    this.node.off(__rea_outer_s.EventType.TOUCH_END, this.onTouchEnd, this), null != (t = this.infoButton) && null != (t = t.node) && t.isValid && this.infoButton.node.off(__rea_outer_o.EventType.CLICK, this.onInfoButtonClick, this);
  }
  onInfoButtonClick() {
    this.showHint();
  }
  onTouchEnd(t) {
    if (1 !== this.phase || this.isBusy) return;
    const e = this.getTouchWorldPoint(t);
    if (this.isPointInsideNode(this.infoButtonNode, e)) return;
    if (this.isSailButtonVisible() && this.isPointInsideNode(this.sailButtonNode, e)) return void this.executeSail();
    const i = this.findClickablePersonAt(e);
    i && ("boat" !== i.location ? i.location === this.shipBank && this.boardPerson(i) : this.disembarkPerson(i, !1, () => {}));
  }
  boardPerson(t) {
    const e = this.findEmptySeat();
    if (e < 0) return;
    this.isBusy = !0, this.setInputBlocked(!0), this.prepareActorForTravel(t);
    const i = t.actorNode;
    this.reparentToGameNode(i), this.placeBehindShip(i);
    const s = this.getSeatGamePosition(e);
    t.location = "boat", t.seatIndex = e, this.refreshProgress(), __rea_outer_u.playEffect_1(P), __rea_outer_v(i), __rea_outer_n(i).to(.4, {
      position: s
    }).call(() => {
      this.isValid && 1 === this.phase && (this.seatPersonBehindShip(t, e), this.isBusy = !1, this.setInputBlocked(!1), this.refreshSailButton());
    }).start();
  }
  disembarkPerson(t, e, i) {
    const s = this.shipBank,
      o = t.actorNode;
    this.reparentToGameNode(o), this.placeBehindShip(o);
    const h = this.getSlot(t, s);
    e || (this.isBusy = !0, this.setInputBlocked(!0), __rea_outer_u.playEffect_1(P)), __rea_outer_v(o), __rea_outer_n(o).to(.4, {
      position: h
    }).call(() => {
      this.isValid && 1 === this.phase && (this.settleOnBank(t, s), e || (this.refreshProgress(), this.isBusy = !1, this.setInputBlocked(!1), this.refreshSailButton()), i());
    }).start();
  }
  executeSail() {
    if (this.countOnBoat() <= 0) return;
    if (this.isBusy = !0, this.setInputBlocked(!0), this.countOnBoatByKind("police") <= 0 && this.countOnBoatByKind("thief") > 0) return void this.beginHijackFail();
    const t = this.findUnsafeBank();
    t ? this.beginShoreFail(t) : this.sailToOppositeBank();
  }
  sailToOppositeBank() {
    const t = this.shipNode;
    if (null == t || !t.isValid) return void this.finishSafeArrival();
    const e = "left" === this.shipBank ? "right" : "left",
      s = "left" === e ? this.shipLeft.clone() : m.clone(),
      o = new __rea_outer_i(s.x - t.position.x, s.y - t.position.y, 0);
    this.faceShip(e), __rea_outer_v(t), __rea_outer_n(t).to(1, {
      position: s
    }).call(() => {
      this.isValid && 1 === this.phase && (this.shipBank = e, this.autoDisembarkAll());
    }).start(), this.people.forEach(t => {
      if ("boat" !== t.location) return;
      const e = t.actorNode;
      if (null == e || !e.isValid) return;
      const s = new __rea_outer_i(e.position.x + o.x, e.position.y + o.y, 0);
      __rea_outer_v(e), __rea_outer_n(e).to(1, {
        position: s
      }).start();
    });
  }
  autoDisembarkAll() {
    const t = this.people.filter(t => "boat" === t.location);
    if (0 === t.length) return void this.finishSafeArrival();
    __rea_outer_u.playEffect_1(P);
    let e = t.length;
    t.forEach(t => {
      this.disembarkPerson(t, !0, () => {
        e -= 1, e <= 0 && this.isValid && 1 === this.phase && this.finishSafeArrival();
      });
    });
  }
  finishSafeArrival() {
    this.refreshProgress(), this.countOnBank("right") >= 6 ? this.beginWinSequence() : (this.isBusy = !1, this.setInputBlocked(!1), this.refreshSailButton());
  }
  beginWinSequence() {
    this.people.forEach(t => {
      "thief" === t.kind && (this.setNodeActive(t.actorNode, !1), t.rightPoseNode.setPosition(t.rightSlot), this.setNodeActive(t.rightPoseNode, !0));
    }), this.playBubbleVoice("55_2", () => {
      this.isValid && 1 === this.phase && (this.hideBubble(), this.enterPhase2Success());
    });
  }
  beginHijackFail() {
    this.people.filter(t => "thief" === t.kind && "boat" === t.location).forEach((t, e) => {
      this.setNodeActive(t.actorNode, !1);
      const i = this.thief2Nodes[t.seatIndex] ?? this.thief2Nodes[e] ?? null;
      if (null == i || !i.isValid) return;
      const s = t.seatIndex >= 0 ? t.seatIndex : e;
      this.reparentToGameNode(i), i.setPosition(this.getSeatGamePosition(s)), this.placeBehindShip(i), this.setNodeActive(i, !0);
    }), this.playBubbleVoice("55_3", () => {
      this.isValid && 1 === this.phase && (this.hideBubble(), this.flyShipAway());
    });
  }
  flyShipAway() {
    const t = this.shipNode;
    if (null == t || !t.isValid) return void this.enterPhase2Fail();
    const e = new __rea_outer_i(t.position.x, -1100, 0),
      s = e.y - t.position.y;
    __rea_outer_v(t), __rea_outer_n(t).to(1.2, {
      position: e
    }).call(() => {
      this.isValid && (this.setNodeActive(t, !1), this.enterPhase2Fail());
    }).start(), this.thief2Nodes.forEach(t => {
      null != t && t.isValid && t.active && (__rea_outer_v(t), __rea_outer_n(t).to(1.2, {
        position: new __rea_outer_i(t.position.x, t.position.y + s, 0)
      }).start());
    });
  }
  beginShoreFail(t) {
    const e = this.people.filter(e => "thief" === e.kind && e.location === t),
      i = this.spawnRunners(e, t);
    this.playBubbleVoice("55_4", () => {
      this.isValid && 1 === this.phase && (this.hideBubble(), this.runOffScreen(i, t));
    });
  }
  spawnRunners(t, e) {
    const i = [];
    return t.forEach((t, s) => {
      var o, n, l, a;
      this.setNodeActive(t.actorNode, !1);
      const r = this.getSlot(t, e);
      let d = null;
      0 === s && null != (o = this.thief1Template) && o.isValid ? d = this.thief1Template : null != (n = this.thief1Template) && n.isValid && null != (l = this.gameNode) && l.isValid && (d = __rea_outer_h(this.thief1Template), this.gameNode.addChild(d), this.runClones.push(d)), null != (a = d) && a.isValid && (d.setPosition(r), this.setNodeActive(d, !0), this.placeBehindShip(d), i.push(d));
    }), i;
  }
  runOffScreen(t, e) {
    if (0 === t.length) return void this.enterPhase2Fail();
    const s = "left" === e ? -800 : 800;
    let o = t.length;
    t.forEach(t => {
      t.isValid ? (__rea_outer_v(t), __rea_outer_n(t).to(.8, {
        position: new __rea_outer_i(s, t.position.y, 0)
      }).call(() => {
        this.setNodeActive(t, !1), o -= 1, o <= 0 && this.isValid && 1 === this.phase && this.enterPhase2Fail();
      }).start()) : o -= 1;
    }), o <= 0 && this.enterPhase2Fail();
  }
  prepareActorForTravel(t) {
    const e = t.actorNode;
    "police" === t.kind && "right" === t.location && (e.setPosition(t.rightSlot), this.setNodeActive(t.rightPoseNode, !1)), this.setNodeActive(e, !0);
  }
  settleOnBank(t, e) {
    t.location = e, t.seatIndex = -1;
    const i = this.getSlot(t, e);
    if ("police" === t.kind && "right" === e) return this.setNodeActive(t.actorNode, !1), t.rightPoseNode.setPosition(i), void this.setNodeActive(t.rightPoseNode, !0);
    t.actorNode.setPosition(i), this.setNodeActive(t.actorNode, !0), this.setNodeActive(t.rightPoseNode, !1);
  }
  faceShip(t) {
    const e = this.shipNode;
    if (null == e || !e.isValid) return;
    const i = "left" === t ? -1 : 1;
    e.setScale(i, 1, 1);
  }
  seatPersonBehindShip(t, e) {
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
  reparentToGameNode(t) {
    var e;
    if (null == (e = this.gameNode) || !e.isValid || !t.isValid) return;
    const i = t.worldPosition.clone();
    t.setParent(this.gameNode), t.setWorldPosition(i);
  }
  findEmptySeat() {
    const t = new Set();
    this.people.forEach(e => {
      "boat" === e.location && e.seatIndex >= 0 && t.add(e.seatIndex);
    });
    for (let e = 0; e < 2; e += 1) if (!t.has(e)) return e;
    return -1;
  }
  findUnsafeBank() {
    return this.isBankUnsafe("left") ? "left" : this.isBankUnsafe("right") ? "right" : null;
  }
  isBankUnsafe(t) {
    return this.countOnBankByKind(t, "police") <= 0 && this.countOnBankByKind(t, "thief") > 0;
  }
  countOnBank(t) {
    return this.people.filter(e => e.location === t).length;
  }
  countOnBankByKind(t, e) {
    return this.people.filter(i => i.location === t && i.kind === e).length;
  }
  countOnBoat() {
    return this.people.filter(t => "boat" === t.location).length;
  }
  countOnBoatByKind(t) {
    return this.people.filter(e => "boat" === e.location && e.kind === t).length;
  }
  refreshProgress() {
    this.hasInstallNum = this.countOnBank("right"), __rea_outer_B.getInstance().refreshGameProgress();
  }
  refreshSailButton() {
    const t = 1 === this.phase && !this.isBusy && this.countOnBoat() > 0;
    this.setNodeActive(this.sailButtonNode, t);
  }
  isSailButtonVisible() {
    var t;
    return Boolean(null == (t = this.sailButtonNode) ? void 0 : t.activeInHierarchy);
  }
  getSlot(t, e) {
    return "left" === e ? t.leftSlot.clone() : t.rightSlot.clone();
  }
  getSeatGamePosition(t) {
    var e;
    const s = (null == (e = this.shipNode) ? void 0 : e.position) ?? this.shipLeft,
      o = this.seatLocals[t];
    return new __rea_outer_i(s.x + o.x, s.y + o.y, 0);
  }
  findClickablePersonAt(t) {
    const e = this.people.filter(t => "boat" === t.location),
      i = this.people.filter(t => t.location === this.shipBank),
      s = e.reverse().concat(i.reverse());
    for (let e = 0; e < s.length; e += 1) {
      const i = s[e];
      if (this.isPointInsideNode(this.getClickableNode(i), t)) return i;
    }
    return null;
  }
  getClickableNode(t) {
    return "police" === t.kind && "right" === t.location ? t.rightPoseNode : t.actorNode;
  }
  playBubbleVoice(t, e) {
    this.voiceToken += 1;
    const i = this.voiceToken;
    this.bubbleLabel && (this.bubbleLabel.string = __rea_outer_p.getInstance().getKey(t)), this.setNodeActive(this.bubbleNode, !0);
    let s = !1;
    const o = () => {
        !s && this.isValid && i === this.voiceToken && (s = !0, this.unschedule(n), e());
      },
      n = () => {
        o();
      };
    this.scheduleOnce(n, 12), this.stopCurrentVoice(), this.currentVoiceKey = t, __rea_outer_u.playEffect_1(t, o);
  }
  stopCurrentVoice() {
    __rea_outer_u.stopVoice(), this.currentVoiceKey && (__rea_outer_u.stopOneEffect(this.currentVoiceKey), this.currentVoiceKey = "");
  }
  hideBubble() {
    this.setNodeActive(this.bubbleNode, !1);
  }
  playPopupScale(t, e, s) {
    if (null == t || !t.isValid) return __rea_outer_u.playEffect_1(e), void s();
    this.bringNodeToFront(t), t.setScale(0, 0, 1), this.setNodeActive(t, !0), __rea_outer_u.playEffect_1(e), __rea_outer_v(t), __rea_outer_n(t).to(.25, {
      scale: new __rea_outer_i(1, 1, 1)
    }).call(() => {
      this.isValid && s();
    }).start();
  }
  setInputBlocked(t) {
    this.setNodeActive(this.backBgNode, t);
  }
  applyInitialVisibility() {
    var t, e, i, s, o, n, h;
    this.setNodeActive(this.bgNode, !0), this.setNodeActive(this.shipNode, !0), null != (t = this.shipNode) && t.isValid && (this.shipNode.setPosition(this.shipLeft), this.shipNode.setScale(1, 1, 1)), this.people.forEach(t => {
      t.actorNode.setParent(this.gameNode), t.actorNode.setPosition(t.leftSlot), this.setNodeActive(t.actorNode, !0), this.setNodeActive(t.rightPoseNode, !1);
    }), this.thief2Nodes.forEach(t => {
      this.reparentToGameNode(t), this.placeBehindShip(t), this.setNodeActive(t, !1);
    }), this.setNodeActive(this.thief1Template, !1), this.setNodeActive(this.sailButtonNode, !1), this.setNodeActive(this.failMarkNode, !1), this.setNodeActive(this.winMarkNode, !1), this.setNodeActive((null == (e = this.gameNode) ? void 0 : e.getChildByName("clicks")) ?? null, !1), this.setNodeActive((null == (i = this.gameNode) ? void 0 : i.getChildByName("drags")) ?? null, !1), this.setNodeActive((null == (s = this.gameNode) ? void 0 : s.getChildByName("swips")) ?? null, !1), this.setNodeActive(this.clickRootNode, !1), this.setNodeActive(this.demoNode, !1), this.setNodeActive(this.bubbleNode, !1), this.setNodeActive((null == (o = this.bubbleNode) ? void 0 : o.getChildByName("dialog_box_1")) ?? null, !1), this.sailButtonLabel && (this.sailButtonLabel.string = __rea_outer_p.getInstance().getKey("game59")), null != (n = this.failMarkNode) && n.isValid && this.failMarkNode.setScale(1, 1, 1), null != (h = this.winMarkNode) && h.isValid && this.winMarkNode.setScale(1, 1, 1);
  }
  resolveReferences() {
    var t, e, i, s, n;
    const h = this.node.getChildByPath("UIPanel");
    this.gameNode = this.node.getChildByPath("UIPanel/gameNode"), this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.bubbleNode = this.node.getChildByPath("UIPanel/bubble"), this.bubbleLabel = (null == (t = this.bubbleNode) || null == (t = t.getChildByPath("dialog_box/Label")) ? void 0 : t.getComponent(__rea_outer_l)) ?? null, this.clickRootNode = this.node.getChildByPath("UIPanel/click_root"), this.infoButtonNode = (null == (e = this.clickRootNode) ? void 0 : e.getChildByName("infoButton")) ?? null, this.infoButton = (null == (i = this.infoButtonNode) ? void 0 : i.getComponent(__rea_outer_o)) ?? null, this.setNodeActive(this.infoButtonNode, !1), this.demoNode = this.node.getChildByPath("UIPanel/demo");
    const a = this.gameNode;
    a && __rea_outer_k(a, 1080, 1920), this.bgNode = (null == a ? void 0 : a.getChildByName("bg")) ?? null;
    const r = (null == a ? void 0 : a.children) ?? [];
    this.shipNode = r[17] ?? null, this.sailButtonNode = r[16] ?? null, this.sailButtonLabel = (null == (s = this.sailButtonNode) || null == (s = s.getChildByName("Label")) ? void 0 : s.getComponent(__rea_outer_l)) ?? null, this.failMarkNode = r[18] ?? null, this.winMarkNode = r[19] ?? null, this.thief1Template = r[15] ?? null, this.thief2Nodes.length = 0, A.forEach(t => {
      const e = r[t];
      e && this.thief2Nodes.push(e);
    }), null != (n = this.shipNode) && n.isValid && (this.shipLeft = this.shipNode.position.clone(), this.resolveSeatLocals()), this.buildPeople(r), this.warnIfMissing("UIPanel", h), this.warnIfMissing("UIPanel/gameNode", this.gameNode), this.warnIfMissing("UIPanel/click_root", this.clickRootNode), this.warnIfMissing("infoButton", this.infoButtonNode), this.warnIfMissing("ship", this.shipNode), this.warnIfMissing("button", this.sailButtonNode), this.warnIfMissing("bubble", this.bubbleNode), V.forEach(t => {
      const e = this.people.find(e => e.id === t.id);
      this.warnIfMissing(`${t.id} actor`, (null == e ? void 0 : e.actorNode) ?? null), this.warnIfMissing(`${t.id} right`, (null == e ? void 0 : e.rightPoseNode) ?? null);
    });
  }
  resolveSeatLocals() {
    const t = this.shipNode;
    if (t) for (let e = 0; e < 2; e += 1) {
      const s = this.thief2Nodes[e];
      null != s && s.isValid ? this.seatLocals[e] = new __rea_outer_i(s.position.x - t.position.x, s.position.y - t.position.y, 0) : this.seatLocals[e] = S[e].clone();
    }
  }
  buildPeople(t) {
    this.people.length = 0, V.forEach(e => {
      const i = t[e.actorSibling],
        s = t[e.rightSibling];
      i && s && this.people.push({
        id: e.id,
        kind: e.kind,
        actorNode: i,
        rightPoseNode: s,
        leftSlot: i.position.clone(),
        rightSlot: s.position.clone(),
        location: "left",
        seatIndex: -1
      });
    });
  }
  getTouchWorldPoint(t) {
    const e = t.getUILocation();
    return new __rea_outer_a(e.x, e.y);
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
    this.people.forEach(t => {
      __rea_outer_v(t.actorNode), __rea_outer_v(t.rightPoseNode);
    }), this.thief2Nodes.forEach(t => {
      __rea_outer_v(t);
    }), this.runClones.forEach(t => {
      __rea_outer_v(t);
    }), __rea_outer_v(this.shipNode), __rea_outer_v(this.thief1Template), __rea_outer_v(this.failMarkNode), __rea_outer_v(this.winMarkNode);
  }
  destroyRunClones() {
    this.runClones.forEach(t => {
      null != t && t.isValid && t !== this.thief1Template && t.destroy();
    }), this.runClones.length = 0;
  }
  warnIfMissing(t, e) {
    e || console.warn(`[Level_55] missing ${t}`);
  }
}) || y;
__rea_outer_e._RF.pop();
export { __recovered_export_0 as default };
