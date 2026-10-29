// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_59.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { Vec2 as __rea_outer_i } from "cc";
import { Vec3 as __rea_outer_s } from "cc";
import { Node as __rea_outer_o } from "cc";
import { tween as __rea_outer_h } from "cc";
import { Sprite as __rea_outer_a } from "cc";
import { UITransform as __rea_outer_n } from "cc";
import { Label as __rea_outer_l } from "cc";
import { _decorator as __rea_outer_r } from "cc";
import { default as __rea_outer_d } from "./LevelBase";
import { default as __rea_outer_c } from "./clue-hit-tester";
import { default as __rea_outer_g } from "./AudioManager";
import { I18nController as __rea_outer_u } from "./i18n-controller";
import { UIManager as __rea_outer_p } from "./ui-manager";
import { UILayer as __rea_outer_N } from "./ui-layer";
import { UIHint as __rea_outer_m } from "./uihint";
import { UIFail as __rea_outer_v } from "./uifail";
import { GameController as __rea_outer_f } from "./GameController";
import { setNodeOpacity as __rea_outer_S } from "./CocosCompat";
import { stopSpriteTweens as __rea_outer__ } from "./CocosCompat";
import { stopAllTweens as __rea_outer_y } from "./CocosCompat";
import { default as __rea_outer_C } from "./ActionSystem";
let __recovered_export_0;
var T;
__rea_outer_t._RF.push({}, "c59a0GyjkdNP6bBfyC55NUY", "Level_59", void 0);
const {
    ccclass: I
  } = __rea_outer_r,
  A = "level59_1",
  b = "59_12",
  w = "59_9",
  O = 11,
  P = new __rea_outer_i(160, 180),
  k = new __rea_outer_s(180, 320, 0),
  V = new __rea_outer_s(-129.118, -133.5, 0),
  E = new __rea_outer_s(244.5, -133.5, 0),
  G = ["level59_hint1", "level59_hint2", "level59_hint3", "level59_hint4", "level59_hint5", "level59_hint6", "level59_hint7", "level59_hint8", "level59_hint9", "level59_hint10", "level59_hint11"],
  x = [9, 7, 8, 4, 3, 2, 1, 5, 11, 6, 10],
  D = [{
    id: 1,
    kind: "morph",
    sourceName: "pineapple",
    heldName: "pineapple_1",
    stackName: "pineapple_2",
    voiceKey: "59_2"
  }, {
    id: 2,
    kind: "direct",
    sourceName: "onion",
    heldName: null,
    stackName: "onion_1",
    voiceKey: "59_3"
  }, {
    id: 3,
    kind: "direct",
    sourceName: "lettuce",
    heldName: null,
    stackName: "lettuce_1",
    voiceKey: "59_4"
  }, {
    id: 4,
    kind: "morph",
    sourceName: "cheese",
    heldName: "cheese_1",
    stackName: "cheese_2",
    voiceKey: "59_5"
  }, {
    id: 5,
    kind: "direct",
    sourceName: "tomato",
    heldName: null,
    stackName: "tomato_1",
    voiceKey: "59_6"
  }, {
    id: 6,
    kind: "morph",
    sourceName: "french_fries",
    heldName: "french_fries_1",
    stackName: "french_fries_2",
    voiceKey: "59_7"
  }, {
    id: 7,
    kind: "morph",
    sourceName: "cucumber",
    heldName: "cucumber_1",
    stackName: "cucumber_2",
    voiceKey: "59_8"
  }, {
    id: 8,
    kind: "direct",
    sourceName: "sausage",
    heldName: null,
    stackName: "sausage_1",
    voiceKey: w
  }, {
    id: 9,
    kind: "direct",
    sourceName: "avocado",
    heldName: null,
    stackName: "avocado_1",
    voiceKey: "59_10"
  }, {
    id: 10,
    kind: "morph",
    sourceName: "bacon",
    heldName: "bacon_1",
    stackName: "bacon_2",
    voiceKey: "59_11"
  }, {
    id: 11,
    kind: "sauce",
    sourceName: "salad",
    heldName: null,
    stackName: null,
    voiceKey: b
  }];
__recovered_export_0 = I("Level_59")(T = class extends __rea_outer_d {
  constructor(...e) {
    super(...e), this.phase = 0, this.winstate = !1, this.gameNode = null, this.backBgNode = null, this.promptBoxNode = null, this.promptLabel = null, this.bread1Node = null, this.breadNode = null, this.refrigeratorNode = null, this.tomatoNode = null, this.waterNode = null, this.water1Node = null, this.avocadoNode = null, this.waterTouchNode = null, this.salad1Node = null, this.salad2Node = null, this.salad2Sprite = null, this.starNode = null, this.girlNode = null, this.sausageNode = null, this.cucumberNode = null, this.girlHand1Node = null, this.girlHand2Node = null, this.girlExpressionNode = null, this.girlExpression1Node = null, this.decorationNode = null, this.decoration1Node = null, this.nodeByName = new Map(), this.nodeOrigins = new Map(), this.siblingOrigins = new Map(), this.homeParents = new Map(), this.completedSteps = new Set(), this.flyingStepIds = new Set(), this.activeDragState = null, this.pendingClick = null, this.isFridgeOpen = !1, this.hasOpenedFaucet = !1, this.isSausageVoicePlaying = !1, this.isShivering = !1, this.voiceToken = 0, this.onTouchStart = e => {
      if (!this.canAcceptTouch()) return;
      this.pendingClick = null;
      const t = this.getTouchWorldPoint(e),
        i = this.findDragStepAtPoint(t);
      if (i) {
        if (this.isSausageVoicePlaying) return;
        this.beginDrag(i, e);
      } else this.hasOpenedFaucet || !this.isPointInsideNode(this.waterTouchNode, t) ? this.isPointInsideNode(this.refrigeratorNode, t) && (this.pendingClick = "fridge") : this.pendingClick = "faucet";
    }, this.onTouchMove = e => {
      if (!this.activeDragState || !this.canAcceptTouch()) return;
      const t = this.activeDragState;
      this.setDragNodePositionFromTouch(e, t.dragNode, t.touchOffset);
    }, this.onTouchEnd = e => {
      if (1 !== this.phase) return this.activeDragState = null, void (this.pendingClick = null);
      if (this.activeDragState) return this.handleItemDrop(this.activeDragState), this.activeDragState = null, void (this.pendingClick = null);
      const t = this.pendingClick;
      this.pendingClick = null, this.canAcceptTouch() && ("faucet" !== t ? "fridge" === t && this.toggleFridge() : this.openFaucet());
    }, this.hideStar = () => {
      this.isValid && this.setNodeActive(this.starNode, !1);
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.allItemNum = O, this.hasInstallNum = 0;
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
    const t = __rea_outer_u.getInstance().getKey(e);
    __rea_outer_p.getInstance().showView(__rea_outer_m, void 0, {
      body: t
    });
  }
  getGameProgressSnapshot() {
    const e = this.hasInstallNum;
    return {
      progress: e / O,
      label: `${e}/11`
    };
  }
  markAllTasksCompleted() {
    for (let e = 1; e <= O; e += 1) this.completedSteps.add(e);
    this.hasInstallNum = O;
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.activeDragState = null, this.pendingClick = null, this.isFridgeOpen = !1, this.hasOpenedFaucet = !1, this.isSausageVoicePlaying = !1, this.isShivering = !1, this.voiceToken = 0, this.completedSteps.clear(), this.flyingStepIds.clear(), this.hasInstallNum = 0, this.allItemNum = O, __rea_outer_g.stopVoice();
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_g.playMusic("bgm4", !0, .5), this.applyInitialVisibility(), this.startShiver(), this.setInputBlocked(!0), __rea_outer_f.getInstance().refreshGameProgress(), this.playDialogue("59_1", !0, () => {
      this.isValid && 0 === this.phase && this.enterPhase1();
    });
  }
  skipOpeningToPlay() {
    return 0 === this.phase && (this.voiceToken += 1, this.stopOpeningDialogue(), this.enterPhase1(), !0);
  }
  enterPhase1() {
    0 === this.phase && (this.phase = 1, this.hidePrompt(), this.setInputBlocked(!1), this.registerInteractionHandlers(), __rea_outer_f.getInstance().refreshGameProgress());
  }
  enterPhase2Success() {
    this.phase >= 2 || this.winstate || (this.phase = 2, this.winstate = !0, this.activeDragState = null, this.unregisterInteractionHandlers(), this.setInputBlocked(!0), this.stopShiver(), this.setNodeActive(this.girlExpressionNode, !1), this.setNodeActive(this.girlExpression1Node, !0), this.setNodeActive(this.girlHand1Node, !1), this.setNodeActive(this.girlHand2Node, !0), this.playDialogue("59_13", !0, () => {
      this.isValid && 2 === this.phase && this.showLevelSuccess(1);
    }));
  }
  beginTimeoutFail() {
    this.phase = 2, this.winstate = !1, this.cleanupRuntime(!0), __rea_outer_f.getInstance().pauseTimer(), __rea_outer_p.getInstance().showView(__rea_outer_v, __rea_outer_N.WIN_ANIMATION);
  }
  applyInitialVisibility() {
    this.restoreCachedNodes(), this.setNodeActive(this.gameNode, !0), this.setNodeActive(this.getGameChild("bg"), !0), this.setNodeActive(this.girlNode, !0), this.setNodeActive(this.girlHand1Node, !0), this.setNodeActive(this.girlHand2Node, !1), this.setNodeActive(this.girlExpressionNode, !1), this.setNodeActive(this.girlExpression1Node, !1), this.setNodeActive(this.getGameChild("table"), !0), this.setNodeActive(this.getGameChild("bacon"), !0), this.setNodeActive(this.bread1Node, !0), this.setNodeActive(this.breadNode, !0), this.setNodeActive(this.getGameChild("french_fries"), !0), this.setNodeActive(this.getGameChild("salad"), !0), this.setNodeActive(this.getGameChild("pineapple"), !0), this.setNodeActive(this.getGameChild("onion"), !0), this.setNodeActive(this.getGameChild("lettuce"), !0), this.setNodeActive(this.getGameChild("cheese"), !0), this.setNodeActive(this.sausageNode, !0), this.setNodeActive(this.cucumberNode, !0), this.setNodeActive(this.decorationNode, !0), this.setNodeActive(this.decoration1Node, !0);
    ["lettuce_1", "tomato_1", "bacon_2", "cheese_2", "cucumber_2", "sausage_1", "onion_1", "pineapple_2", "avocado_1", "french_fries_2", "pineapple_1", "cheese_1", "french_fries_1", "cucumber_1", "bacon_1", "salad_1", "salad_2", "star", "water", "water_1", "avocado"].forEach(e => {
      this.setNodeActive(this.getGameChild(e), !1);
    }), this.closeFridge(!0), this.setNodeActive(this.getChildByPath("clicks/touch"), !1), this.setNodeActive(this.getGameChild("drags"), !1), this.setNodeActive(this.getGameChild("swips"), !1), this.setNodeActive(this.node.getChildByPath("UIPanel/click_root"), !1), this.setNodeActive(this.node.getChildByPath("UIPanel/demo"), !1), this.setNodeActive(this.waterTouchNode, !0), this.prepareSaladFill(0);
  }
  closeFridge(e) {
    var t;
    this.isFridgeOpen = !1, null != (t = this.refrigeratorNode) && t.isValid && (this.refrigeratorNode.active = !0, __rea_outer_S(this.refrigeratorNode, 0), !e && this.completedSteps.has(5) || this.setNodeActive(this.tomatoNode, !1));
  }
  openFridge() {
    var e;
    this.isFridgeOpen = !0, null != (e = this.refrigeratorNode) && e.isValid && (this.refrigeratorNode.active = !0, __rea_outer_S(this.refrigeratorNode, 255), this.completedSteps.has(5) || this.setNodeActive(this.tomatoNode, !0));
  }
  toggleFridge() {
    1 === this.phase && !this.winstate && this.completedSteps.has(4) && (this.isFridgeOpen ? this.closeFridge(!1) : this.openFridge());
  }
  openFaucet() {
    1 !== this.phase || this.winstate || this.hasOpenedFaucet || (this.hasOpenedFaucet = !0, this.setNodeActive(this.waterTouchNode, !1), this.setNodeActive(this.waterNode, !0), this.scheduleOnceIfValid(() => {
      1 === this.phase && (this.setNodeActive(this.waterNode, !1), this.setNodeActive(this.water1Node, !0), this.setNodeActive(this.avocadoNode, !0));
    }, .5));
  }
  registerInteractionHandlers() {
    this.node.on(__rea_outer_o.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(__rea_outer_o.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(__rea_outer_o.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(__rea_outer_o.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
  }
  unregisterInteractionHandlers() {
    var e;
    null != (e = this.node) && e.isValid && (this.node.off(__rea_outer_o.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(__rea_outer_o.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(__rea_outer_o.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(__rea_outer_o.EventType.TOUCH_CANCEL, this.onTouchEnd, this));
  }
  canAcceptTouch() {
    var e;
    return 1 === this.phase && !this.winstate && !0 !== (null == (e = this.backBgNode) ? void 0 : e.active);
  }
  findDragStepAtPoint(e) {
    for (let t = 0; t < x.length; t += 1) {
      const i = x[t],
        s = this.getStepDefinition(i);
      if (!s || !this.canStartStep(i)) continue;
      const o = this.getGameChild(s.sourceName);
      if (this.isPointInsideNode(o, e)) return s;
    }
    return null;
  }
  canStartStep(e) {
    return !this.completedSteps.has(e) && !this.flyingStepIds.has(e) && (5 === e ? this.completedSteps.has(4) && this.isFridgeOpen && Boolean(null == (t = this.tomatoNode) ? void 0 : t.active) : 9 === e ? this.hasOpenedFaucet : 11 !== e || this.hasInstallNum >= 10);
    var t;
  }
  beginDrag(e, t) {
    var i;
    const s = this.getGameChild(e.sourceName);
    if (null == s || !s.isValid || null == (i = this.gameNode) || !i.isValid) return;
    let o = s;
    if ("morph" === e.kind && e.heldName) {
      const t = this.getGameChild(e.heldName);
      if (null == t || !t.isValid) return;
      this.placeNodeAtWorld(t, s.worldPosition), this.setNodeActive(s, !1), this.setNodeActive(t, !0), o = t;
    }
    this.detachToGameNode(o), this.bringNodeToFront(o);
    const h = this.calculateTouchOffset(t, o);
    this.setDragNodePositionFromTouch(t, o, h), this.activeDragState = {
      stepId: e.id,
      definition: e,
      dragNode: o,
      originSiblingIndex: this.siblingOrigins.get(o) ?? o.getSiblingIndex(),
      touchOffset: h
    };
  }
  handleItemDrop(e) {
    const t = e.definition;
    this.canAcceptTouch() && !this.completedSteps.has(t.id) ? 11 === t.id && this.hasInstallNum < 10 ? this.restoreDrag(e) : this.isNodeCenterInside(e.dragNode, this.bread1Node) ? "sauce" !== t.kind ? this.beginFlyIn(e) : this.beginSauceSequence(e) : this.restoreDrag(e) : this.restoreDrag(e);
  }
  restoreDrag(e) {
    const t = e.definition;
    if ("morph" === t.kind && t.heldName) {
      const i = e.dragNode;
      this.setNodeActive(i, !1), this.restoreOrigin(i), this.restoreSibling(i);
      const s = this.getGameChild(t.sourceName);
      return this.attachNodeHome(s), this.setNodeActive(s, !0), void this.restoreOrigin(s);
    }
    this.attachNodeHome(e.dragNode), this.restoreOrigin(e.dragNode), this.restoreSibling(e.dragNode);
  }
  beginFlyIn(e) {
    const t = e.definition,
      i = t.stackName ? this.getGameChild(t.stackName) : null;
    if (null == i || !i.isValid) return void this.restoreDrag(e);
    this.flyingStepIds.add(t.id), __rea_outer_g.playEffect_1(A);
    const s = e.dragNode;
    this.bringNodeToFront(s), this.stopTweenIfValid(s);
    const o = i.position.clone();
    __rea_outer_h(s).to(.5, {
      position: o
    }).call(() => {
      this.isValid && 1 === this.phase && this.finishFlyIn(t, s, i);
    }).start();
  }
  finishFlyIn(e, t, i) {
    this.flyingStepIds.delete(e.id), this.setNodeActive(t, !1), this.attachNodeHome(t), this.restoreOrigin(t), this.restoreSibling(t);
    const s = this.getGameChild(e.sourceName);
    s && s !== t && (this.setNodeActive(s, !1), this.attachNodeHome(s), this.restoreOrigin(s)), this.setNodeActive(i, !0), this.restoreOrigin(i), this.completeStep(e.id), this.playStepVoice(e), this.flashStar(), 8 === e.id && this.showSausageExpression();
  }
  beginSauceSequence(e) {
    var t;
    __rea_outer_g.playEffect_1(A), this.setNodeActive(e.dragNode, !1), this.restoreOrigin(e.dragNode), this.restoreSibling(e.dragNode), this.completeStep(11), this.setInputBlocked(!0), __rea_outer_f.getInstance().pauseTimer(), null != (t = this.salad1Node) && t.isValid ? (this.salad1Node.setPosition(V), this.setNodeActive(this.salad1Node, !0), this.prepareSaladFill(0), this.setNodeActive(this.salad2Node, !0), this.stopTweenIfValid(this.salad1Node), __rea_outer__(this.salad2Sprite), __rea_outer_h(this.salad1Node).to(.7, {
      position: E
    }).call(() => {
      this.isValid && 1 === this.phase && this.finishSauceSequence();
    }).start(), this.salad2Sprite && __rea_outer_h(this.salad2Sprite).to(.7, {
      fillRange: 1
    }).start()) : this.playDialogue(b, !0, () => {
      this.isValid && 1 === this.phase && this.enterPhase2Success();
    });
  }
  finishSauceSequence() {
    this.prepareSaladFill(1), this.playDialogue(b, !0, () => {
      this.isValid && 1 === this.phase && this.enterPhase2Success();
    });
  }
  completeStep(e) {
    this.completedSteps.has(e) || (this.completedSteps.add(e), this.hasInstallNum = this.completedSteps.size, __rea_outer_f.getInstance().refreshGameProgress());
  }
  playStepVoice(e) {
    this.playDialogue(e.voiceKey, !0, () => {
      8 === e.id && this.hideSausageExpression();
    });
  }
  showSausageExpression() {
    this.isSausageVoicePlaying = !0, this.setNodeActive(this.girlExpressionNode, !0);
  }
  hideSausageExpression() {
    this.isSausageVoicePlaying = !1, this.setNodeActive(this.girlExpressionNode, !1);
  }
  startShiver() {
    this.isShivering = !0, this.startShiverOn(this.girlNode), this.startShiverOn(this.girlHand1Node), this.startShiverOn(this.decorationNode), this.startShiverOn(this.decoration1Node);
  }
  startShiverOn(e) {
    null != e && e.isValid && (this.stopTweenIfValid(e), e.angle = 0, __rea_outer_C.shakeRepeat(e, .08, 1.2, .02));
  }
  stopShiver() {
    this.isShivering = !1, this.stopShiverOn(this.girlNode), this.stopShiverOn(this.girlHand1Node), this.stopShiverOn(this.decorationNode), this.stopShiverOn(this.decoration1Node);
  }
  stopShiverOn(e) {
    null != e && e.isValid && (__rea_outer_y(e), e.angle = 0, this.restoreOrigin(e));
  }
  flashStar() {
    this.unschedule(this.hideStar), this.setNodeActive(this.starNode, !0), this.scheduleOnce(this.hideStar, .4);
  }
  playDialogue(e, t, i) {
    this.voiceToken += 1;
    const s = this.voiceToken;
    e !== w && this.hideSausageExpression(), this.showPrompt(e), __rea_outer_g.stopVoice(), __rea_outer_g.playVoice(e);
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
    const i = (null == (t = __rea_outer_g.audioMap.get(e)) ? void 0 : t.getDuration()) ?? 0;
    return i > .1 ? i : 2.5;
  }
  showPrompt(e) {
    this.promptLabel && (this.promptLabel.string = this.resolveI18nText(e)), this.setNodeActive(this.promptBoxNode, !0);
  }
  hidePrompt() {
    this.setNodeActive(this.promptBoxNode, !1);
  }
  resolveI18nText(e) {
    const t = __rea_outer_u.getInstance().getKey(e);
    return t && t !== e ? t : e;
  }
  resolveHintKey() {
    for (let e = 1; e <= O; e += 1) if (!this.completedSteps.has(e)) return G[e - 1];
    return null;
  }
  getStepDefinition(e) {
    return D.find(t => t.id === e) ?? null;
  }
  prepareSaladFill(e) {
    const t = this.salad2Sprite;
    null != t && t.isValid && (t.type = __rea_outer_a.Type.FILLED, t.fillType = __rea_outer_a.FillType.HORIZONTAL, t.fillStart = 0, t.fillRange = e);
  }
  cleanupRuntime(e) {
    this.unscheduleAllCallbacks(), this.unregisterInteractionHandlers(), this.voiceToken += 1, this.activeDragState = null, this.pendingClick = null, this.isSausageVoicePlaying = !1, e && __rea_outer_g.stopVoice(), this.stopShiver(), this.stopAllGameplayTweens();
  }
  stopAllGameplayTweens() {
    this.nodeByName.forEach(e => {
      this.stopTweenIfValid(e);
    }), __rea_outer__(this.salad2Sprite);
  }
  stopTweenIfValid(e) {
    null != e && e.isValid && __rea_outer_y(e);
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
  placeNodeAtWorld(e, t) {
    const i = this.gameNode ?? e.parent;
    if (null == i || !i.isValid) return;
    const s = i.getComponent(__rea_outer_n);
    if (!s) return;
    const o = s.convertToNodeSpaceAR(t);
    e.setPosition(o);
  }
  isNodeCenterInside(e, t) {
    return __rea_outer_c.isDragNearTarget(e, t);
  }
  isPointInsideNode(e, t) {
    if (null == e || !e.isValid || !e.activeInHierarchy) return !1;
    const i = e.getComponent(__rea_outer_n);
    return !!i && i.getBoundingBoxToWorld().contains(t);
  }
  getTouchWorldPoint(e) {
    const t = e.getUILocation();
    return new __rea_outer_i(t.x, t.y);
  }
  getTouchLocalPosition(e, t) {
    const i = e.getUILocation(),
      o = t.getComponent(__rea_outer_n);
    return o ? o.convertToNodeSpaceAR(new __rea_outer_s(i.x, i.y, 0)) : __rea_outer_s.ZERO.clone();
  }
  calculateTouchOffset(e, t) {
    const i = this.gameNode ?? t.parent;
    if (null == i || !i.isValid) return __rea_outer_s.ZERO.clone();
    const o = this.getTouchLocalPosition(e, i);
    return new __rea_outer_s(t.position.x - o.x, t.position.y - o.y, 0);
  }
  setDragNodePositionFromTouch(e, t, i) {
    const s = this.gameNode ?? t.parent;
    if (null == s || !s.isValid) return;
    const o = this.getTouchLocalPosition(e, s);
    t.setPosition(o.x + i.x, o.y + i.y, t.position.z);
  }
  cacheGirlChild(e) {
    var t;
    null != e && e.isValid && null != (t = this.girlNode) && t.isValid && (this.cacheNode(e), "sausage" !== e.name && "cucumber" !== e.name || this.homeParents.set(e, this.girlNode));
  }
  attachNodeHome(e) {
    if (null == e || !e.isValid) return;
    const t = this.homeParents.get(e);
    null != t && t.isValid && (e.setParent(t), e.angle = 0, this.restoreOrigin(e), this.restoreSibling(e));
  }
  detachToGameNode(e) {
    var t;
    null != (t = this.gameNode) && t.isValid && e.parent !== this.gameNode && (e.setParent(this.gameNode, !0), e.angle = 0);
  }
  restoreCachedNodes() {
    this.homeParents.forEach((e, t) => {
      this.attachNodeHome(t);
    }), this.nodeOrigins.forEach((e, t) => {
      t.isValid && (this.stopTweenIfValid(t), t.angle = 0, t.setPosition(e));
    }), this.siblingOrigins.forEach((e, t) => {
      t.isValid && t.parent && t.setSiblingIndex(e);
    });
  }
  restoreOrigin(e) {
    if (null == e || !e.isValid) return;
    const t = this.nodeOrigins.get(e);
    t && e.setPosition(t);
  }
  restoreSibling(e) {
    if (null == e || !e.isValid || !e.parent) return;
    const t = this.siblingOrigins.get(e);
    void 0 !== t && e.setSiblingIndex(t);
  }
  setNodeActive(e, t) {
    null != e && e.isValid && (e.active = t);
  }
  getGameChild(e) {
    var t, i;
    return this.nodeByName.get(e) ?? (null == (t = this.gameNode) ? void 0 : t.getChildByName(e)) ?? (null == (i = this.girlNode) ? void 0 : i.getChildByName(e)) ?? null;
  }
  getChildByPath(e) {
    var t;
    return (null == (t = this.gameNode) ? void 0 : t.getChildByPath(e)) ?? null;
  }
  cacheNode(e) {
    null != e && e.isValid && (this.nodeByName.set(e.name, e), this.nodeOrigins.set(e, e.position.clone()), this.siblingOrigins.set(e, e.getSiblingIndex()));
  }
  ensureWaterTouch() {
    const e = this.getChildByPath("clicks/watertouch");
    if (null != e && e.isValid) return e;
    const t = this.getGameChild("clicks");
    if (null == t || !t.isValid) return console.warn("[Level_59] missing clicks/watertouch"), null;
    const i = new __rea_outer_o("watertouch");
    return i.addComponent(__rea_outer_n).setContentSize(P.x, P.y), i.setPosition(k), t.addChild(i), console.warn("[Level_59] created runtime clicks/watertouch; replace with prefab hotspot when ready"), i;
  }
  resolveReferences() {
    var e, t, i, s;
    this.gameNode = this.node.getChildByPath("UIPanel/gameNode"), this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.nodeByName.clear(), this.nodeOrigins.clear(), this.siblingOrigins.clear(), this.homeParents.clear(), null == (e = this.gameNode) || e.children.forEach(e => {
      this.cacheNode(e);
    }), this.promptBoxNode = this.getGameChild("prompt_box"), this.promptLabel = (null == (t = this.promptBoxNode) || null == (t = t.getChildByName("Label")) ? void 0 : t.getComponent(__rea_outer_l)) ?? null, this.bread1Node = this.getGameChild("bread_1"), this.breadNode = this.getGameChild("bread"), this.refrigeratorNode = this.getGameChild("refrigerator"), this.tomatoNode = this.getGameChild("tomato"), this.waterNode = this.getGameChild("water"), this.water1Node = this.getGameChild("water_1"), this.avocadoNode = this.getGameChild("avocado"), this.salad1Node = this.getGameChild("salad_1"), this.salad2Node = this.getGameChild("salad_2"), this.salad2Sprite = (null == (i = this.salad2Node) ? void 0 : i.getComponent(__rea_outer_a)) ?? null, this.starNode = this.getGameChild("star"), this.girlNode = this.getGameChild("girl"), null == (s = this.girlNode) || s.children.forEach(e => {
      this.cacheGirlChild(e);
    }), this.sausageNode = this.getChildByPath("girl/sausage"), this.cucumberNode = this.getChildByPath("girl/cucumber"), this.girlHand1Node = this.getGameChild("girl_hand_1"), this.girlHand2Node = this.getGameChild("girl_hand_2"), this.girlExpressionNode = this.getChildByPath("girl/girl_expression"), this.girlExpression1Node = this.getChildByPath("girl/girl_expression_1"), this.decorationNode = this.getGameChild("decoration"), this.decoration1Node = this.getGameChild("decoration1"), this.waterTouchNode = this.ensureWaterTouch(), this.cacheNode(this.waterTouchNode), this.warnIfMissing();
  }
  warnIfMissing() {
    [["gameNode", this.gameNode], ["bread_1", this.bread1Node], ["prompt_box", this.promptBoxNode], ["refrigerator", this.refrigeratorNode], ["watertouch", this.waterTouchNode], ["girl/sausage", this.sausageNode], ["girl/cucumber", this.cucumberNode], ["girl/girl_expression", this.girlExpressionNode], ["girl/girl_expression_1", this.girlExpression1Node]].forEach(([e, t]) => {
      t || console.warn(`[Level_59] missing ${e}`);
    });
  }
}) || T;
__rea_outer_t._RF.pop();
export { __recovered_export_0 as default };
