// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_32.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { Vec3 as __rea_outer_i } from "cc";
import { Node as __rea_outer_s } from "cc";
import { UITransform as __rea_outer_o } from "cc";
import { tween as __rea_outer_h } from "cc";
import { Label as __rea_outer_n } from "cc";
import { Vec2 as __rea_outer_d } from "cc";
import { _decorator as __rea_outer_l } from "cc";
import { default as __rea_outer_a } from "./LevelBase";
import { default as __rea_outer_r } from "./clue-hit-tester";
import { default as __rea_outer_c } from "./AudioManager";
import { I18nController as __rea_outer_N } from "./i18n-controller";
import { UIManager as __rea_outer_u } from "./ui-manager";
import { UILayer as __rea_outer_g } from "./ui-layer";
import { UIHint as __rea_outer_v } from "./uihint";
import { UIFail as __rea_outer_m } from "./uifail";
import { GameController as __rea_outer_p } from "./GameController";
import { stopAllTweens as __rea_outer_A } from "./CocosCompat";
import { default as __rea_outer_b } from "./ActionSystem";
let __recovered_export_0;
var k;
__rea_outer_t._RF.push({}, "a7c3ejxkrRNap4Vb40sSwox", "Level_32", void 0);
const {
    ccclass: y
  } = __rea_outer_l,
  f = "32_14",
  w = "level32_4",
  B = 10,
  C = ["level32_hint1", "level32_hint2", "level32_hint3", "level32_hint4", "level32_hint5", "level32_hint6", "level32_hint7", "level32_hint8", "level32_hint9", "level32_hint10"],
  I = ["32_3", "32_4", "32_5", "32_6", "32_7", "32_8", "32_9", "32_10", "32_11", "32_12"],
  S = [{
    id: 1,
    kind: "drag",
    itemNodeName: "skipping_rope",
    growsHeight: !0
  }, {
    id: 2,
    kind: "drag",
    itemNodeName: "Ca_Tablets",
    growsHeight: !0
  }, {
    id: 3,
    kind: "swipeLeft",
    itemNodeName: "curtain",
    growsHeight: !0
  }, {
    id: 4,
    kind: "drag",
    itemNodeName: "hot_water",
    growsHeight: !0
  }, {
    id: 5,
    kind: "swipeRight",
    itemNodeName: null,
    growsHeight: !0
  }, {
    id: 6,
    kind: "drag",
    itemNodeName: "shoes",
    growsHeight: !1
  }, {
    id: 7,
    kind: "drag",
    itemNodeName: "bed_1",
    growsHeight: !0
  }, {
    id: 8,
    kind: "click",
    itemNodeName: "mobile_phone",
    growsHeight: !0
  }, {
    id: 9,
    kind: "click",
    itemNodeName: "rooster",
    growsHeight: !0
  }, {
    id: 10,
    kind: "drag",
    itemNodeName: "yoga_mat",
    growsHeight: !0
  }];
__recovered_export_0 = y("Level_32")(k = class extends __rea_outer_a {
  constructor(...e) {
    super(...e), this.phase = 0, this.winstate = !1, this.gameNode = null, this.backBgNode = null, this.bubbleNode = null, this.tipLabel = null, this.dialogBoxNode = null, this.girlNode = null, this.manNode = null, this.girlZone = null, this.skirtZone = null, this.waterSwipeZone = null, this.bgNode = null, this.doorNode = null, this.door1Node = null, this.curtainNode = null, this.curtain1Node = null, this.windowNode = null, this.weatherNode = null, this.weatherMaskNode = null, this.weather1Node = null, this.weather2Node = null, this.waterPipeNode = null, this.waterPipe1Node = null, this.waterNode = null, this.water1Node = null, this.skippingRope = null, this.caTablets = null, this.hotWater = null, this.shoesNode = null, this.bed1Node = null, this.bed2Node = null, this.bed3Node = null, this.bed4Node = null, this.bed5Node = null, this.bed6Node = null, this.mobilePhone = null, this.mobilePhone1 = null, this.roosterNode = null, this.rooster1Node = null, this.rooster2Node = null, this.yogaMat = null, this.skirtNode = null, this.cakeNode = null, this.vinegarNode = null, this.vinegar1Node = null, this.girlBodies = [], this.girlHead = null, this.girlExpression = null, this.girlExpression1 = null, this.girlExpression2 = null, this.girlShoes = null, this.girlShoes1 = null, this.girlSkirt = null, this.headAnchors = [], this.manBody = null, this.manHand1 = null, this.manHand2 = null, this.manHand3 = null, this.man1Node = null, this.man1Eyes = [], this.manFace = null, this.manFace1 = null, this.manFaceFire = null, this.doneStepIds = new Set(), this.itemNodes = new Map(), this.activeDragState = null, this.swipeGestureState = null, this.isInteractionLocked = !0, this.voiceToken = 0, this.effectiveHeightCount = 0, this.knockHandFrame = 0, this.weather1OriginPosition = new __rea_outer_i(), this.mobilePhone1OriginScale = new __rea_outer_i(1, 1, 1), this.onTouchStart = e => {
      if (1 !== this.phase || this.isInteractionLocked || this.activeDragState) return;
      const t = this.getTouchWorldPoint(e);
      this.tryBeginDragAtPoint(t, e) || (this.doneStepIds.has(3) || !this.isPointInsideNode(this.curtainNode, t) ? this.doneStepIds.has(5) || !this.isPointInsideNode(this.waterSwipeZone, t) ? this.doneStepIds.has(8) || !this.isPointInsideNode(this.mobilePhone, t) ? !this.doneStepIds.has(9) && this.doneStepIds.has(3) && this.isPointInsideNode(this.roosterNode, t) && this.executeClue9Rooster() : this.executeClue8Phone() : this.swipeGestureState = {
        clueId: 5,
        startLocation: t.clone()
      } : this.swipeGestureState = {
        clueId: 3,
        startLocation: t.clone()
      });
    }, this.onTouchMove = e => {
      if (this.activeDragState && 1 === this.phase && !this.isInteractionLocked) {
        const t = this.activeDragState;
        this.setDragNodePositionFromTouch(e, t.dragNode, t.dragParent, t.touchOffset);
      }
    }, this.onTouchEnd = e => {
      if (1 !== this.phase) return this.activeDragState = null, void (this.swipeGestureState = null);
      if (this.activeDragState) return this.handleItemDrop(this.activeDragState, this.getTouchWorldPoint(e)), void (this.activeDragState = null);
      const t = this.swipeGestureState;
      if (this.swipeGestureState = null, !t || this.isInteractionLocked || this.doneStepIds.has(t.clueId)) return;
      const i = this.getTouchWorldPoint(e),
        s = i.x - t.startLocation.x,
        o = i.y - t.startLocation.y;
      if (3 !== t.clueId) {
        if (5 === t.clueId) {
          if (!this.isRightSwipe(s, o)) return;
          this.executeClue5Water();
        }
      } else {
        if (!this.isLeftSwipe(s, o)) return;
        this.executeClue3Curtain();
      }
    }, this.onKnockTick = () => {
      this.isValid && 0 === this.phase ? (this.knockHandFrame = 1 - this.knockHandFrame, this.setNodeActive(this.manHand1, 0 === this.knockHandFrame), this.setNodeActive(this.manHand2, 1 === this.knockHandFrame)) : this.stopKnockLoop();
    }, this.onBubbleHide = () => {
      this.isValid && this.hideBubble();
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.allItemNum = B, this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.applyInitialVisibility(), this.enterPhase0();
  }
  onDestroy() {
    this.unscheduleAllCallbacks(), this.unregisterHandlers(), this.stopKnockLoop(), this.stopTrackedTweens(), this.activeDragState = null, this.swipeGestureState = null, super.onDestroy();
  }
  handleTimeExpired() {
    return !!(this.phase >= 2 || this.winstate);
  }
  showHint() {
    if (1 !== this.phase) return;
    const e = this.resolveNextHintKey();
    if (!e) return;
    const t = __rea_outer_N.getInstance().getKey(e);
    __rea_outer_u.getInstance().showView(__rea_outer_v, void 0, {
      body: t
    });
  }
  getGameProgressSnapshot() {
    const e = this.hasInstallNum;
    return {
      progress: e / B,
      label: `${e}/10`
    };
  }
  markAllTasksCompleted() {
    S.forEach(e => {
      this.doneStepIds.add(e.id);
    }), this.hasInstallNum = B, this.phase = 2, this.winstate = !0, this.isInteractionLocked = !0, this.unregisterHandlers();
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.isInteractionLocked = !0, this.hasInstallNum = 0, this.allItemNum = B, this.doneStepIds.clear(), this.activeDragState = null, this.swipeGestureState = null, this.voiceToken += 1, this.effectiveHeightCount = 0, this.knockHandFrame = 0, this.hideBubble();
  }
  applyInitialVisibility() {
    this.setNodeActive(this.gameNode, !0), this.setNodeActive(this.bgNode, !0), this.setNodeActive(this.windowNode, !0), this.setNodeActive(this.doorNode, !0), this.setNodeActive(this.door1Node, !1), this.setNodeActive(this.curtainNode, !0), this.setNodeActive(this.curtain1Node, !1), this.setNodeActive(this.weatherNode, !1), this.setNodeActive(this.weatherMaskNode, !1), this.setNodeActive(this.weather1Node, !1), this.setNodeActive(this.weather2Node, !1), this.setNodeActive(this.waterPipe1Node, !0), this.setNodeActive(this.waterPipeNode, !1), this.setNodeActive(this.waterNode, !1), this.setNodeActive(this.water1Node, !1), this.setNodeActive(this.skippingRope, !0), this.setNodeActive(this.caTablets, !0), this.setNodeActive(this.hotWater, !0), this.setNodeActive(this.shoesNode, !0), this.setNodeActive(this.bed1Node, !0), this.setNodeActive(this.bed2Node, !1), this.setNodeActive(this.bed3Node, !1), this.setNodeActive(this.mobilePhone, !0), this.setNodeActive(this.mobilePhone1, !1), this.setNodeActive(this.roosterNode, !0), this.setNodeActive(this.rooster1Node, !1), this.setNodeActive(this.rooster2Node, !1), this.setNodeActive(this.yogaMat, !0), this.setNodeActive(this.skirtNode, !0), this.setNodeActive(this.cakeNode, !0), this.setNodeActive(this.vinegarNode, !0), this.setNodeActive(this.vinegar1Node, !1);
    for (let e = 0; e < this.girlBodies.length; e += 1) this.setNodeActive(this.girlBodies[e], 0 === e);
    this.setNodeActive(this.girlHead, !0), this.setNodeActive(this.girlExpression, !0), this.setNodeActive(this.girlExpression1, !1), this.setNodeActive(this.girlExpression2, !1), this.setNodeActive(this.girlShoes, !0), this.setNodeActive(this.girlShoes1, !1), this.setNodeActive(this.girlSkirt, !1), this.setNodeActive(this.manBody, !0), this.setNodeActive(this.manHand1, !1), this.setNodeActive(this.manHand2, !1), this.setNodeActive(this.manHand3, !0), this.setNodeActive(this.man1Node, !1), this.setNodeActive(this.manFace, !1), this.setNodeActive(this.manFace1, !1), this.setNodeActive(this.manFaceFire, !1);
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_c.playMusic("bgm4", !0, .5), this.setNodeActive(this.backBgNode, !0), this.setNodeActive(this.manHand3, !1), this.setNodeActive(this.manHand1, !0), this.setNodeActive(this.manHand2, !1), this.startKnockLoop(), __rea_outer_c.playEffect_1("level32_2"), this.playVoiceEffect("32_1", () => {
      this.isValid && (this.stopKnockLoop(), this.setNodeActive(this.manHand1, !1), this.setNodeActive(this.manHand2, !1), this.setNodeActive(this.manHand3, !0), __rea_outer_c.playEffect_1(w), this.playVoiceEffect("32_2", () => {
        this.isValid && this.enterPhase1();
      }));
    });
  }
  enterPhase1() {
    this.phase = 1, this.setNodeActive(this.backBgNode, !1), this.registerHandlers(), this.isInteractionLocked = !1, __rea_outer_p.getInstance().refreshGameProgress();
  }
  registerHandlers() {
    this.node.on(__rea_outer_s.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(__rea_outer_s.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(__rea_outer_s.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(__rea_outer_s.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
  }
  unregisterHandlers() {
    var e;
    null != (e = this.node) && e.isValid && (this.node.off(__rea_outer_s.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(__rea_outer_s.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(__rea_outer_s.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(__rea_outer_s.EventType.TOUCH_CANCEL, this.onTouchEnd, this));
  }
  tryBeginDragAtPoint(e, t) {
    if (this.isPointInsideNode(this.skirtZone, e)) return this.beginDrag(this.skirtNode, "skirt", 0, t), !0;
    if (this.isPointInsideNode(this.cakeNode, e)) return this.beginDrag(this.cakeNode, "cake", 0, t), !0;
    if (this.isPointInsideNode(this.vinegarNode, e)) return this.beginDrag(this.vinegarNode, "vinegar", 0, t), !0;
    if (!this.doneStepIds.has(2) && this.isPointInsideNode(this.caTablets, e)) return this.beginDrag(this.caTablets, "clue", 2, t), !0;
    for (let i = S.length - 1; i >= 0; i -= 1) {
      const s = S[i];
      if ("drag" !== s.kind || this.doneStepIds.has(s.id)) continue;
      const o = this.itemNodes.get(s.id);
      if (this.isPointInsideNode(o, e)) return 7 === s.id ? (this.beginBedProxyDrag(t), !0) : (this.beginDrag(o, "clue", s.id, t), !0);
    }
    return !1;
  }
  beginDrag(e, t, i, s) {
    if (null == e || !e.isValid) return;
    const h = e.parent;
    if (null == h || !h.isValid) return;
    const n = e.position.clone(),
      d = e.getSiblingIndex(),
      l = e.worldPosition.clone(),
      a = this.gameNode ?? h;
    e.setParent(a);
    const r = a.getComponent(__rea_outer_o);
    if (r) {
      const t = r.convertToNodeSpaceAR(l);
      e.setPosition(t);
    }
    e.setSiblingIndex(a.children.length - 1);
    const c = this.calculateTouchOffset(s, e, a);
    this.setDragNodePositionFromTouch(s, e, a, c), this.activeDragState = {
      kind: t,
      clueId: i,
      dragNode: e,
      dragParent: a,
      touchOffset: c,
      originParent: h,
      originPosition: n,
      originSiblingIndex: d,
      isBedProxy: !1
    };
  }
  beginBedProxyDrag(e) {
    const t = this.bed2Node,
      i = this.bed1Node;
    if (null == t || !t.isValid || null == i || !i.isValid) return void this.beginDrag(i, "clue", 7, e);
    const s = t.parent;
    if (null == s || !s.isValid) return;
    const h = t.position.clone(),
      n = t.getSiblingIndex(),
      d = i.worldPosition.clone(),
      l = this.gameNode ?? s;
    this.setNodeActive(i, !1), t.active = !0, t.setParent(l);
    const a = l.getComponent(__rea_outer_o);
    if (a) {
      const e = a.convertToNodeSpaceAR(d);
      t.setPosition(e);
    }
    t.setSiblingIndex(l.children.length - 1);
    const r = this.calculateTouchOffset(e, t, l);
    this.setDragNodePositionFromTouch(e, t, l, r), this.activeDragState = {
      kind: "clue",
      clueId: 7,
      dragNode: t,
      dragParent: l,
      touchOffset: r,
      originParent: s,
      originPosition: h,
      originSiblingIndex: n,
      isBedProxy: !0
    };
  }
  handleItemDrop(e, t) {
    if (this.isInteractionLocked) return void this.restoreDragNode(e);
    if ("skirt" === e.kind) {
      return __rea_outer_r.isDragNearTarget(e.dragNode, this.girlZone) ? (this.setNodeActive(e.dragNode, !1), void this.handleSkirtDrop()) : void this.restoreDragNode(e);
    }
    if (__rea_outer_r.isDragNearTarget(e.dragNode, this.girlZone)) return "cake" === e.kind ? (this.setNodeActive(e.dragNode, !1), void this.beginCakeFailSequence()) : "vinegar" === e.kind ? (this.setNodeActive(e.dragNode, !1), void this.beginVinegarFailSequence()) : void (this.doneStepIds.has(e.clueId) ? this.restoreDragNode(e) : (this.setNodeActive(e.dragNode, !1), e.isBedProxy && (this.setNodeActive(this.bed1Node, !1), this.setNodeActive(this.bed2Node, !1)), 6 !== e.clueId ? 7 !== e.clueId ? this.completeClueWithHeightFeedback(e.clueId) : this.executeClue7Bed() : this.executeClue6Shoes()));
    this.restoreDragNode(e);
  }
  restoreDragNode(e) {
    const t = e.dragNode;
    t.isValid && (t.setParent(e.originParent), t.setSiblingIndex(e.originSiblingIndex), t.setPosition(e.originPosition), e.isBedProxy && (t.active = !1, this.setNodeActive(this.bed1Node, !0)));
  }
  handleSkirtDrop() {
    this.doneStepIds.size >= B ? this.enterPhase2Success() : this.beginEarlySkirtFailSequence();
  }
  executeClue3Curtain() {
    this.doneStepIds.has(3) || this.isInteractionLocked || (this.isInteractionLocked = !0, this.setNodeActive(this.backBgNode, !0), this.setNodeActive(this.curtainNode, !1), this.setNodeActive(this.curtain1Node, !0), this.setNodeActive(this.weatherNode, !0), this.setNodeActive(this.weatherMaskNode, !0), this.setNodeActive(this.weather1Node, !0), this.playMeteorPasses(0, () => {
      this.isValid && (this.setNodeActive(this.weather1Node, !1), this.setNodeActive(this.backBgNode, !1), this.isInteractionLocked = !1, this.completeClueWithHeightFeedback(3));
    }));
  }
  playMeteorPasses(e, t) {
    const s = this.weather1Node;
    if (null == s || !s.isValid) return void t();
    if (e >= 3) return void t();
    const o = this.weather1OriginPosition.clone(),
      n = new __rea_outer_i(o.x - 220, o.y - 260, o.z);
    __rea_outer_A(s), s.setPosition(o), __rea_outer_h(s).to(.6, {
      position: n
    }).call(() => {
      this.isValid && this.playMeteorPasses(e + 1, t);
    }).start();
  }
  executeClue5Water() {
    this.doneStepIds.has(5) || this.isInteractionLocked || (this.isInteractionLocked = !0, this.setNodeActive(this.backBgNode, !0), this.setNodeActive(this.waterPipe1Node, !1), this.setNodeActive(this.waterPipeNode, !0), this.setNodeActive(this.waterNode, !0), this.setNodeActive(this.water1Node, !0), __rea_outer_c.playEffect_1("level32_3"), this.scheduleOnce(() => {
      this.isValid && (this.setNodeActive(this.waterNode, !1), this.setNodeActive(this.water1Node, !1), this.setNodeActive(this.backBgNode, !1), this.isInteractionLocked = !1, this.completeClueWithHeightFeedback(5));
    }, .5));
  }
  executeClue6Shoes() {
    this.setNodeActive(this.girlShoes, !1), this.setNodeActive(this.girlShoes1, !0), this.completeClueWithHeightFeedback(6);
  }
  executeClue7Bed() {
    this.doneStepIds.has(7) || this.isInteractionLocked || (this.isInteractionLocked = !0, this.setNodeActive(this.backBgNode, !0), this.setNodeActive(this.bed1Node, !1), this.setNodeActive(this.bed2Node, !1), this.setNodeActive(this.girlExpression, !1), this.setNodeActive(this.girlExpression2, !0), this.setNodeActive(this.bed3Node, !0), this.startBedShake(), this.scheduleOnce(() => {
      this.isValid && (this.stopBedShake(), this.setNodeActive(this.bed3Node, !1), this.setNodeActive(this.girlExpression2, !1), this.setNodeActive(this.backBgNode, !1), this.isInteractionLocked = !1, this.completeClueWithHeightFeedback(7));
    }, .5));
  }
  executeClue8Phone() {
    if (this.doneStepIds.has(8) || this.isInteractionLocked) return;
    this.isInteractionLocked = !0, this.setNodeActive(this.backBgNode, !0);
    const e = this.mobilePhone1;
    if (this.setNodeActive(e, !0), null != e && e.isValid) return __rea_outer_A(e), e.setScale(.2, .2, 1), void __rea_outer_h(e).to(.5, {
      scale: this.mobilePhone1OriginScale.clone()
    }).delay(.5).call(() => {
      this.isValid && (this.setNodeActive(this.mobilePhone1, !1), this.setNodeActive(this.mobilePhone, !1), this.setNodeActive(this.backBgNode, !1), this.isInteractionLocked = !1, this.completeClueWithHeightFeedback(8));
    }).start();
    this.setNodeActive(this.mobilePhone, !1), this.setNodeActive(this.backBgNode, !1), this.isInteractionLocked = !1, this.completeClueWithHeightFeedback(8);
  }
  executeClue9Rooster() {
    this.doneStepIds.has(9) || !this.doneStepIds.has(3) || this.isInteractionLocked || (this.isInteractionLocked = !0, this.setNodeActive(this.backBgNode, !0), this.setNodeActive(this.roosterNode, !1), this.setNodeActive(this.rooster1Node, !0), this.setNodeActive(this.rooster2Node, !0), __rea_outer_c.playEffect_1("level32_5"), this.scheduleOnce(() => {
      this.isValid && (this.setNodeActive(this.weatherNode, !1), this.setNodeActive(this.weather2Node, !0), this.setNodeActive(this.rooster1Node, !1), this.setNodeActive(this.rooster2Node, !1), this.setNodeActive(this.roosterNode, !0), this.setNodeActive(this.backBgNode, !1), this.isInteractionLocked = !1, this.completeClueWithHeightFeedback(9));
    }, .5));
  }
  completeClueWithHeightFeedback(e) {
    if (this.doneStepIds.has(e) || 1 !== this.phase) return;
    const t = S.find(t => t.id === e);
    if (!t) return;
    this.setNodeActive(this.girlExpression, !1), __rea_outer_c.playEffect_1("level32_1"), t.growsHeight && (this.effectiveHeightCount += 1, this.applyGirlBodyByHeightCount(this.effectiveHeightCount), this.applyGirlHeadByHeightCount(this.effectiveHeightCount)), this.doneStepIds.add(e), this.hasInstallNum = this.doneStepIds.size, __rea_outer_p.getInstance().refreshGameProgress();
    const i = I[e - 1];
    this.playVoiceEffect(i, () => {
      this.isValid && 1 === this.phase && this.setNodeActive(this.girlExpression, !0);
    }), this.TryQuickWin();
  }
  applyGirlBodyByHeightCount(e) {
    const t = Math.min(Math.max(e, 0), 9);
    for (let e = 0; e < this.girlBodies.length; e += 1) this.setNodeActive(this.girlBodies[e], e === t);
  }
  applyGirlHeadByHeightCount(e) {
    if (e < 1) return;
    const t = Math.min(e, this.headAnchors.length) - 1,
      i = this.headAnchors[t],
      s = this.girlHead;
    null != i && i.isValid && null != s && s.isValid && s.setPosition(i.position.clone());
  }
  enterPhase2Success() {
    this.phase = 2, this.winstate = !0, this.isInteractionLocked = !0, this.unregisterHandlers(), this.setNodeActive(this.backBgNode, !0), this.voiceToken += 1, __rea_outer_c.stopVoice(), this.applySuccessGirlVisual(), this.setNodeActive(this.doorNode, !1), this.setNodeActive(this.door1Node, !0), this.applySuccessManVisual(), this.playVoiceEffect("32_13", () => {
      this.isValid && this.scheduleOnce(() => {
        this.isValid && this.showLevelSuccess(0);
      }, 1);
    });
  }
  applySuccessGirlVisual() {
    for (let e = 0; e < this.girlBodies.length; e += 1) this.setNodeActive(this.girlBodies[e], !1);
    this.setNodeActive(this.girlHead, !1), this.setNodeActive(this.girlExpression, !1), this.setNodeActive(this.girlExpression1, !1), this.setNodeActive(this.girlExpression2, !1), this.setNodeActive(this.girlShoes, !1), this.setNodeActive(this.girlShoes1, !1), this.setNodeActive(this.bed3Node, !1), this.setNodeActive(this.girlSkirt, !0), this.setNodeActive(this.skirtNode, !1);
  }
  applySuccessManVisual() {
    this.setNodeActive(this.manBody, !1), this.setNodeActive(this.manHand1, !1), this.setNodeActive(this.manHand2, !1), this.setNodeActive(this.manHand3, !1), this.stopAngryFaceAnims(), this.setNodeActive(this.manFace, !1), this.setNodeActive(this.manFace1, !1), this.setNodeActive(this.manFaceFire, !1), this.setNodeActive(this.man1Node, !0), this.man1Eyes.forEach(e => {
      this.setNodeActive(e, !0), e.isValid && (__rea_outer_A(e), __rea_outer_b.scaleRepeat(e, .35, .25, .05));
    });
  }
  beginEarlySkirtFailSequence() {
    this.beginFailCommonLock(), this.playVoiceEffect("32_18", () => {
      this.isValid && this.playAngryDoorFail(f);
    });
  }
  beginCakeFailSequence() {
    this.beginFailCommonLock(), this.setNodeActive(this.girlExpression1, !0), __rea_outer_c.playEffect_1(w), this.playVoiceEffect("32_15", () => {
      this.isValid && this.playAngryDoorFail(f);
    });
  }
  beginVinegarFailSequence() {
    this.beginFailCommonLock(), this.placeVinegarStainOnGirl(), this.setNodeActive(this.vinegar1Node, !0), this.setNodeActive(this.girlExpression, !0), this.playVoiceEffect("32_16", () => {
      this.isValid && (this.setNodeActive(this.vinegar1Node, !1), this.playAngryDoorFail("32_17"));
    });
  }
  placeVinegarStainOnGirl() {
    const e = this.vinegar1Node,
      t = this.girlHead,
      i = null == e ? void 0 : e.parent;
    if (null == e || !e.isValid || null == t || !t.isValid || null == i || !i.isValid) return;
    const s = i.getComponent(__rea_outer_o);
    if (!s) return;
    const h = s.convertToNodeSpaceAR(t.worldPosition.clone());
    e.setPosition(h.x, h.y - 150, h.z);
  }
  beginFailCommonLock() {
    this.phase = 2, this.isInteractionLocked = !0, this.unregisterHandlers(), this.setNodeActive(this.backBgNode, !0), this.voiceToken += 1, __rea_outer_c.stopVoice(), __rea_outer_p.getInstance().pauseTimer();
  }
  playAngryDoorFail(e) {
    this.setNodeActive(this.doorNode, !1), this.setNodeActive(this.door1Node, !0), this.setNodeActive(this.manBody, !1), this.setNodeActive(this.manHand1, !1), this.setNodeActive(this.manHand2, !1), this.setNodeActive(this.manHand3, !1), this.setNodeActive(this.man1Node, !0), this.man1Eyes.forEach(e => {
      this.setNodeActive(e, !1);
    }), this.setNodeActive(this.manFace, !0), this.setNodeActive(this.manFace1, !0), this.setNodeActive(this.manFaceFire, !0), this.startAngryFaceAnims(), this.playVoiceEffect(e, () => {
      this.isValid && this.scheduleOnce(() => {
        this.isValid && __rea_outer_u.getInstance().showView(__rea_outer_m, __rea_outer_g.WIN_ANIMATION);
      }, 1);
    });
  }
  startAngryFaceAnims() {
    const e = this.manFaceFire;
    if (null != e && e.isValid) {
      __rea_outer_A(e);
      const t = e.scale.x;
      e.setScale(t, .8, 1), __rea_outer_h(e).sequence(__rea_outer_h().to(.12, {
        scale: new __rea_outer_i(t, 1.1, 1)
      }), __rea_outer_h().to(.12, {
        scale: new __rea_outer_i(t, .8, 1)
      })).repeatForever().start();
    }
    const t = this.manFace1;
    null != t && t.isValid && (__rea_outer_A(t), __rea_outer_b.scaleRepeat_1(t, .2, .9, 1.1, 0));
  }
  stopAngryFaceAnims() {
    var e, t;
    null != (e = this.manFaceFire) && e.isValid && (__rea_outer_A(this.manFaceFire), this.manFaceFire.setScale(1, 1, 1)), null != (t = this.manFace1) && t.isValid && (__rea_outer_A(this.manFace1), this.manFace1.setScale(1, 1, 1));
  }
  beginTimeoutFailSequence() {
    this.phase = 2, this.isInteractionLocked = !0, this.unregisterHandlers(), this.voiceToken += 1, __rea_outer_c.stopVoice(), this.hideBubble(), __rea_outer_p.getInstance().pauseTimer(), this.scheduleOnce(() => {
      this.isValid && __rea_outer_u.getInstance().showView(__rea_outer_m, __rea_outer_g.WIN_ANIMATION);
    }, 1);
  }
  startKnockLoop() {
    this.stopKnockLoop(), this.knockHandFrame = 0, this.schedule(this.onKnockTick, .2);
  }
  stopKnockLoop() {
    this.unschedule(this.onKnockTick);
  }
  startBedShake() {
    [this.bed4Node, this.bed5Node, this.bed6Node].forEach(e => {
      null != e && e.isValid && (__rea_outer_A(e), __rea_outer_b.shakeRepeat(e, .08, 8, 0));
    });
  }
  stopBedShake() {
    [this.bed4Node, this.bed5Node, this.bed6Node].forEach(e => {
      null != e && e.isValid && (__rea_outer_A(e), e.angle = 0);
    });
  }
  resolveNextHintKey() {
    for (let e = 0; e < S.length; e += 1) {
      const t = S[e];
      if (!this.doneStepIds.has(t.id)) return C[t.id - 1] ?? null;
    }
    return null;
  }
  playVoiceEffect(e, t) {
    this.voiceToken += 1;
    const i = this.voiceToken;
    this.showVoiceBubble(e);
    let s = !1;
    const o = () => {
        !s && this.isValid && i === this.voiceToken && (s = !0, this.unschedule(h), t());
      },
      h = () => {
        o();
      };
    this.scheduleOnce(h, 2.5), __rea_outer_c.stopVoice(), __rea_outer_c.playEffect_1(e, o);
  }
  showVoiceBubble(e) {
    const t = __rea_outer_N.getInstance();
    this.tipLabel && (this.tipLabel.string = t.getKey(e), this.setNodeActive(this.tipLabel.node, !0)), this.setNodeActive(this.dialogBoxNode, !0), this.setNodeActive(this.bubbleNode, !0), this.unschedule(this.onBubbleHide), this.scheduleOnce(this.onBubbleHide, 2.5);
  }
  hideBubble() {
    var e;
    this.setNodeActive(this.bubbleNode, !1), this.setNodeActive(this.dialogBoxNode, !1), this.setNodeActive((null == (e = this.tipLabel) ? void 0 : e.node) ?? null, !1);
  }
  isLeftSwipe(e, t) {
    return e <= -30 && Math.abs(e) >= 1.2 * Math.abs(t);
  }
  isRightSwipe(e, t) {
    return e >= 30 && Math.abs(e) >= 1.2 * Math.abs(t);
  }
  resolveReferences() {
    var e, t, i, s, o, h, d, l, a, r, c, N, u, g, v, m;
    this.gameNode = this.node.getChildByPath("UIPanel/gameNode"), this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.bubbleNode = this.node.getChildByPath("UIPanel/bubble"), this.dialogBoxNode = (null == (e = this.bubbleNode) ? void 0 : e.getChildByName("dialog_box")) ?? null, this.tipLabel = (null == (t = this.bubbleNode) || null == (t = t.getChildByPath("dialog_box/Label")) ? void 0 : t.getComponent(__rea_outer_n)) ?? null;
    const p = this.gameNode;
    this.girlNode = (null == p ? void 0 : p.getChildByName("girlnode")) ?? null, this.manNode = (null == p ? void 0 : p.getChildByName("mannode")) ?? null, this.girlZone = (null == p ? void 0 : p.getChildByPath("clicks/touch")) ?? null, this.skirtZone = (null == p ? void 0 : p.getChildByPath("drags/skirttouch")) ?? null, this.waterSwipeZone = (null == p ? void 0 : p.getChildByPath("swips/waterswip")) ?? null, this.bgNode = (null == p ? void 0 : p.getChildByName("bg")) ?? null, this.doorNode = (null == p ? void 0 : p.getChildByName("door")) ?? null, this.door1Node = (null == p ? void 0 : p.getChildByName("door_1")) ?? null, this.curtainNode = (null == p ? void 0 : p.getChildByName("curtain")) ?? null, this.curtain1Node = (null == p ? void 0 : p.getChildByName("curtain_1")) ?? null, this.windowNode = (null == p ? void 0 : p.getChildByName("window")) ?? null, this.weatherNode = (null == p ? void 0 : p.getChildByName("weather")) ?? null, this.weatherMaskNode = (null == p ? void 0 : p.getChildByName("weatherMask")) ?? null, this.weather1Node = (null == (i = this.weatherMaskNode) ? void 0 : i.getChildByName("weather_1")) ?? (null == p ? void 0 : p.getChildByPath("weatherMask/weather_1")) ?? null, this.weather2Node = (null == p ? void 0 : p.getChildByName("weather2")) ?? null, this.waterPipeNode = (null == p ? void 0 : p.getChildByName("water_pipe")) ?? null, this.waterPipe1Node = (null == p ? void 0 : p.getChildByName("water_pipe_1")) ?? null, this.waterNode = (null == p ? void 0 : p.getChildByName("water")) ?? null, this.water1Node = (null == p ? void 0 : p.getChildByName("water_1")) ?? null, this.skippingRope = (null == p ? void 0 : p.getChildByName("skipping_rope")) ?? null, this.caTablets = (null == p ? void 0 : p.getChildByName("Ca_Tablets")) ?? null, this.hotWater = (null == p ? void 0 : p.getChildByName("hot_water")) ?? null, this.shoesNode = (null == p ? void 0 : p.getChildByName("shoes")) ?? null, this.bed1Node = (null == p ? void 0 : p.getChildByName("bed_1")) ?? null, this.bed2Node = (null == p ? void 0 : p.getChildByName("bed_2")) ?? null, this.mobilePhone = (null == p ? void 0 : p.getChildByName("mobile_phone")) ?? null, this.mobilePhone1 = (null == p ? void 0 : p.getChildByName("mobile_phone_1")) ?? null, this.roosterNode = (null == p ? void 0 : p.getChildByName("rooster")) ?? null, this.rooster1Node = (null == p ? void 0 : p.getChildByName("rooster_1")) ?? null, this.rooster2Node = (null == p ? void 0 : p.getChildByName("rooster_2")) ?? null, this.yogaMat = (null == p ? void 0 : p.getChildByName("yoga_mat")) ?? null, this.skirtNode = (null == p ? void 0 : p.getChildByName("skirt")) ?? null, this.cakeNode = (null == p ? void 0 : p.getChildByName("cake")) ?? null, this.vinegarNode = (null == p ? void 0 : p.getChildByName("vinegar")) ?? null, this.vinegar1Node = (null == p ? void 0 : p.getChildByName("vinegar_1")) ?? null;
    const A = this.girlNode;
    this.girlBodies = [];
    for (let e = 0; e <= 9; e += 1) this.girlBodies.push((null == A ? void 0 : A.getChildByName(`girl_${e}`)) ?? null);
    this.girlHead = (null == A ? void 0 : A.getChildByName("girl_head")) ?? null, this.girlExpression = (null == (s = this.girlHead) ? void 0 : s.getChildByName("girl_expression")) ?? null, this.girlExpression1 = (null == (o = this.girlHead) ? void 0 : o.getChildByName("girl_expression_1")) ?? null, this.girlExpression2 = (null == (h = this.girlHead) ? void 0 : h.getChildByName("girl_expression_2")) ?? null, this.bed3Node = (null == (d = this.girlHead) ? void 0 : d.getChildByName("bed_3")) ?? null, this.bed4Node = (null == (l = this.bed3Node) ? void 0 : l.getChildByName("bed_4")) ?? null, this.bed5Node = (null == (a = this.bed3Node) ? void 0 : a.getChildByName("bed_5")) ?? null, this.bed6Node = (null == (r = this.bed3Node) ? void 0 : r.getChildByName("bed_6")) ?? null, this.girlShoes = (null == A ? void 0 : A.getChildByName("girl_shoes")) ?? null, this.girlShoes1 = (null == A ? void 0 : A.getChildByName("girl_shoes_1")) ?? null, this.girlSkirt = (null == A ? void 0 : A.getChildByName("girl_skirt")) ?? null, this.headAnchors = [];
    for (let e = 1; e <= 10; e += 1) this.headAnchors.push((null == A ? void 0 : A.getChildByName(`head${e}`)) ?? null);
    const b = this.manNode;
    this.manBody = (null == b ? void 0 : b.getChildByName("man")) ?? null, this.manHand1 = (null == b ? void 0 : b.getChildByName("man_1")) ?? null, this.manHand2 = (null == b ? void 0 : b.getChildByName("man_2")) ?? null, this.manHand3 = (null == b ? void 0 : b.getChildByName("man_3")) ?? null, this.man1Node = (null == b ? void 0 : b.getChildByName("man1")) ?? null, this.manFace = (null == (c = this.man1Node) ? void 0 : c.getChildByName("man_face")) ?? null, this.manFace1 = (null == (N = this.man1Node) ? void 0 : N.getChildByName("man_face_1")) ?? null, this.manFaceFire = (null == (u = this.man1Node) ? void 0 : u.getChildByName("man_face_fire")) ?? null, this.man1Eyes = [], null == (g = this.man1Node) || g.children.forEach(e => {
      "man1_1" === e.name && this.man1Eyes.push(e);
    }), null != (v = this.weather1Node) && v.isValid && (this.weather1OriginPosition = this.weather1Node.position.clone()), null != (m = this.mobilePhone1) && m.isValid && (this.mobilePhone1OriginScale = this.mobilePhone1.scale.clone()), this.itemNodes.clear(), S.forEach(e => {
      if (!e.itemNodeName || !p) return;
      if ("drag" !== e.kind) return;
      const t = p.getChildByName(e.itemNodeName);
      t ? this.itemNodes.set(e.id, t) : console.warn(`[Level_32] missing item node ${e.itemNodeName}`);
    }), this.warnIfMissing("UIPanel/gameNode", this.gameNode), this.warnIfMissing("clicks/touch", this.girlZone), this.warnIfMissing("drags/skirttouch", this.skirtZone), this.warnIfMissing("weatherMask/weather_1", this.weather1Node), this.warnIfMissing("mannode/man1/man_face", this.manFace), this.warnIfMissing("mannode/man1/man_face_1", this.manFace1), this.warnIfMissing("mannode/man1/man_face_fire", this.manFaceFire), this.warnIfMissing("swips/waterswip", this.waterSwipeZone);
  }
  warnIfMissing(e, t) {
    t || console.warn(`[Level_32] missing ${e}`);
  }
  stopTrackedTweens() {
    [this.weather1Node, this.water1Node, this.mobilePhone1, this.bed4Node, this.bed5Node, this.bed6Node, ...this.man1Eyes, this.manFace1, this.manFaceFire].forEach(e => {
      null != e && e.isValid && __rea_outer_A(e);
    });
  }
  isPointInsideNode(e, t) {
    if (null == e || !e.isValid || !e.activeInHierarchy) return !1;
    const i = e.getComponent(__rea_outer_o);
    return !!i && i.getBoundingBoxToWorld().contains(t);
  }
  getTouchWorldPoint(e) {
    const t = e.getUILocation();
    return new __rea_outer_d(t.x, t.y);
  }
  getTouchLocalPosition(e, t) {
    const s = e.getUILocation(),
      h = t.getComponent(__rea_outer_o);
    return h ? h.convertToNodeSpaceAR(new __rea_outer_i(s.x, s.y, 0)) : __rea_outer_i.ZERO.clone();
  }
  calculateTouchOffset(e, t, s) {
    const o = this.getTouchLocalPosition(e, s);
    return new __rea_outer_i(t.position.x - o.x, t.position.y - o.y, 0);
  }
  setDragNodePositionFromTouch(e, t, i, s) {
    const o = this.getTouchLocalPosition(e, i);
    t.setPosition(o.x + s.x, o.y + s.y, t.position.z);
  }
  setNodeActive(e, t) {
    null != e && e.isValid && (e.active = t);
  }
}) || k;
__rea_outer_t._RF.pop();
export { __recovered_export_0 as default };
