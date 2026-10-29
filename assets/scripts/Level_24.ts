// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_24.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_i } from "cc";
import { Vec3 as __rea_outer_t } from "cc";
import { Node as __rea_outer_s } from "cc";
import { Button as __rea_outer_n } from "cc";
import { UITransform as __rea_outer_o } from "cc";
import { instantiate as __rea_outer_l } from "cc";
import { Tween as __rea_outer_h } from "cc";
import { tween as __rea_outer_a } from "cc";
import { Sprite as __rea_outer_r } from "cc";
import { Vec2 as __rea_outer_c } from "cc";
import { Label as __rea_outer_d } from "cc";
import { _decorator as __rea_outer_u } from "cc";
import { default as __rea_outer_g } from "./LevelBase";
import { LEVEL_SUCCESS_POPUP_DELAY as __rea_outer_p } from "./LevelBase";
import { LEVEL_OUTRO_DIALOGUE_HOLD_SECONDS as __rea_outer_N } from "./LevelBase";
import { default as __rea_outer_f } from "./clue-hit-tester";
import { default as __rea_outer_v } from "./AudioManager";
import { I18nController as __rea_outer_m } from "./i18n-controller";
import { UIManager as __rea_outer_T } from "./ui-manager";
import { UILayer as __rea_outer_C } from "./ui-layer";
import { UIHint as __rea_outer_A } from "./uihint";
import { UIFail as __rea_outer_y } from "./uifail";
import { GameController as __rea_outer_b } from "./GameController";
import { setNodeOpacity as __rea_outer_P } from "./CocosCompat";
import { getUIOpacity as __rea_outer_I } from "./CocosCompat";
import { stopAllTweens as __rea_outer_L } from "./CocosCompat";
import { default as __rea_outer_D } from "./Utils";
let __recovered_export_0;
var O;
__rea_outer_i._RF.push({}, "b4e8cKhfzVNkIxhKp4PXYSz", "Level_24", void 0);
const {
    ccclass: E
  } = __rea_outer_u,
  _ = "24_1",
  B = "24_11",
  V = "24_12",
  x = 10,
  k = __rea_outer_N,
  S = __rea_outer_N,
  M = [-2e3, -1500, -1500, -1200, -1e3, -800, -500, -500, -500, -500],
  H = ["level24_hint1", "level24_hint2", "level24_hint3", "level24_hint4", "level24_hint5", "level24_hint6", "level24_hint7", "level24_hint8", "level24_hint9", "level24_hint10"];
__recovered_export_0 = E("Level_24")(O = class extends __rea_outer_g {
  constructor(...e) {
    super(...e), this.phase = 0, this.winstate = !1, this.gameNode = null, this.topNode = null, this.bubbleNode = null, this.bubble2Node = null, this.tipLabel = null, this.failTipLabel = null, this.bgNode = null, this.magnifierRootNode = null, this.magnifierNode = null, this.magnifierCheckNode = null, this.magnifierTargetNode = null, this.priceLabel = null, this.clickRootNode = null, this.submitButton = null, this.circleTemplate = null, this.clicksRoot = null, this.auctioneerNode = null, this.auctioneerIp1Node = null, this.auctioneerIp2Node = null, this.auctioneerExpressionNode = null, this.auctioneerStageNode = null, this.dropZoneNode = null, this.failendNode = null, this.failendBgNode = null, this.failendIp5Node = null, this.failnodeRoot = null, this.failure1Node = null, this.failureNode = null, this.touchNodes = new Array(9).fill(null), this.currentPrice = 1e4, this.isInteractionLocked = !1, this.isDraggingMagnifier = !1, this.isDraggingAuctioneer = !1, this.isAuctioneerDraggable = !1, this.isGavelBrokenVisible = !1, this.magnifierDragDistance = 0, this.auctioneerDragDistance = 0, this.magnifierDragOffset = new __rea_outer_t(), this.auctioneerDragOffset = new __rea_outer_t(), this.lastMagnifierLocalPos = new __rea_outer_t(), this.lastAuctioneerLocalPos = new __rea_outer_t(), this.auctioneerOriginParent = null, this.auctioneerOriginPosition = new __rea_outer_t(), this.auctioneerOriginSiblingIndex = -1, this.expressionHideToken = 0, this.isFailSequencePlaying = !1, this.completedClues = new Set(), this.onMagnifierTouchStart = e => {
      var i;
      if (1 !== this.phase || this.isInteractionLocked || null == (i = this.magnifierNode) || !i.isValid) return;
      this.isDraggingMagnifier = !0, this.magnifierDragDistance = 0;
      const t = this.getTouchLocalPosition(e, this.magnifierNode.parent ?? this.node);
      this.lastMagnifierLocalPos.set(t.x, t.y, t.z);
      const s = this.magnifierNode.position;
      this.magnifierDragOffset.set(s.x - t.x, s.y - t.y, s.z - t.z), e.propagationStopped = !0;
    }, this.onMagnifierTouchMove = e => {
      var i;
      if (!this.isDraggingMagnifier || 1 !== this.phase || null == (i = this.magnifierNode) || !i.isValid) return;
      const t = this.getTouchLocalPosition(e, this.magnifierNode.parent ?? this.node),
        s = t.x - this.lastMagnifierLocalPos.x,
        n = t.y - this.lastMagnifierLocalPos.y;
      this.magnifierDragDistance += Math.sqrt(s * s + n * n), this.lastMagnifierLocalPos.set(t.x, t.y, t.z), this.magnifierNode.setPosition(t.x + this.magnifierDragOffset.x, t.y + this.magnifierDragOffset.y, this.magnifierNode.position.z), this.anchorMagnifierTargetToBg(), e.propagationStopped = !0;
    }, this.onMagnifierTouchEnd = e => {
      if (e.propagationStopped = !0, !this.isDraggingMagnifier) return;
      const i = this.magnifierDragDistance <= 20;
      if (this.isDraggingMagnifier = !1, this.updateGavelVisibility(), 1 !== this.phase || this.isInteractionLocked) return;
      if (!i) return;
      const t = this.getTouchWorldPoint(e),
        s = this.findTouchedClueIndex(t);
      s < 0 || this.tryCompleteClue(s);
    }, this.onLevelTouchEnd = e => {
      if (1 !== this.phase || this.isInteractionLocked || this.isDraggingMagnifier || this.isDraggingAuctioneer) return;
      const i = this.getTouchWorldPoint(e),
        t = this.findTouchedClueIndex(i);
      t < 0 || this.tryCompleteClue(t);
    }, this.onSubmitClick = () => {
      1 !== this.phase || this.isInteractionLocked || this.isAuctioneerDraggable || (__rea_outer_v.playEffect_1("level24_2"), this.winstate = !1, this.beginFailSequence());
    }, this.onAuctioneerTouchStart = e => {
      var i;
      1 === this.phase && !this.isInteractionLocked && this.isAuctioneerDraggable && null != (i = this.auctioneerNode) && i.isValid && (this.beginAuctioneerDrag(e), e.propagationStopped = !0);
    }, this.onAuctioneerTouchMove = e => {
      var i;
      if (!this.isDraggingAuctioneer || 1 !== this.phase || null == (i = this.auctioneerNode) || !i.isValid) return;
      const t = this.auctioneerNode.parent ?? this.node,
        s = this.getTouchLocalPosition(e, t),
        n = s.x - this.lastAuctioneerLocalPos.x,
        o = s.y - this.lastAuctioneerLocalPos.y;
      this.auctioneerDragDistance += Math.sqrt(n * n + o * o), this.lastAuctioneerLocalPos.set(s.x, s.y, s.z), this.auctioneerNode.setPosition(s.x + this.auctioneerDragOffset.x, s.y + this.auctioneerDragOffset.y, this.auctioneerNode.position.z), e.propagationStopped = !0;
    }, this.onAuctioneerTouchEnd = e => {
      if (e.propagationStopped = !0, !this.isDraggingAuctioneer) return;
      const i = this.auctioneerDragDistance <= 20;
      if (this.isDraggingAuctioneer = !1, 1 !== this.phase || this.isInteractionLocked || i) return void this.restoreAuctioneerToOrigin();
      this.tryCompleteAuctioneerDrop() || this.restoreAuctioneerToOrigin();
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.allItemNum = x, this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.enterPhase0();
  }
  onDestroy() {
    this.unscheduleAllCallbacks(), this.unregisterHandlers(), this.unregisterAuctioneerHandlers(), __rea_outer_v.stopVoice();
  }
  update() {
    1 === this.phase && this.anchorMagnifierTargetToBg();
  }
  handleTimeExpired() {
    return !!(this.phase >= 2 || this.winstate);
  }
  showHint() {
    if (1 !== this.phase) return;
    const e = this.findFirstIncompleteStepIndex();
    if (e < 0) return;
    const i = __rea_outer_m.getInstance().getKey(H[e]);
    __rea_outer_T.getInstance().showView(__rea_outer_A, void 0, {
      body: i
    });
  }
  getGameProgressSnapshot() {
    return {
      progress: this.completedClues.size / x,
      label: `${this.completedClues.size}/10`
    };
  }
  markAllTasksCompleted() {
    for (let e = 1; e <= x; e += 1) this.completedClues.add(e);
    this.currentPrice = 0, this.hasInstallNum = x, this.phase = 2, this.winstate = !0, this.isInteractionLocked = !0, this.unregisterHandlers(), this.unregisterAuctioneerHandlers(), this.updatePriceLabel(), this.setNodeActive(this.auctioneerNode, !1), this.setNodeActive(this.auctioneerStageNode, !0), this.setNodeActive(this.clickRootNode, !1);
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.currentPrice = 1e4, this.isInteractionLocked = !1, this.isDraggingMagnifier = !1, this.isDraggingAuctioneer = !1, this.isAuctioneerDraggable = !1, this.isGavelBrokenVisible = !1, this.magnifierDragDistance = 0, this.auctioneerDragDistance = 0, this.auctioneerOriginParent = null, this.auctioneerOriginPosition.set(0, 0, 0), this.auctioneerOriginSiblingIndex = -1, this.expressionHideToken = 0, this.isFailSequencePlaying = !1, this.completedClues.clear(), this.hasInstallNum = 0, this.allItemNum = x, __rea_outer_v.stopVoice();
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_v.playMusic("bgm2", !0, .5), this.applyPhase0Visibility(), this.setNodeActive(this.bubbleNode, !1), this.scheduleOnce(() => {
      this.isValid && 0 === this.phase && (this.setTipText(_), __rea_outer_v.playVoice(_), this.scheduleOnce(() => {
        this.isValid && 0 === this.phase && this.enterPhase1();
      }, k));
    }, 2);
  }
  skipOpeningToPlay() {
    return 0 === this.phase && (this.stopOpeningDialogue(), this.enterPhase1(), !0);
  }
  enterPhase1() {
    0 === this.phase && (this.phase = 1, this.applyPhase1Visibility(), this.registerHandlers(), this.anchorMagnifierTargetToBg(), __rea_outer_b.getInstance().refreshGameProgress());
  }
  applyPhase0Visibility() {
    var e, i, t;
    this.setNodeActive(this.failendNode, !1), this.setNodeActive(this.failnodeRoot, !1), this.setNodeActive(this.bubble2Node, !1), this.setNodeActive(this.magnifierRootNode, !1), this.setNodeActive(this.auctioneerExpressionNode, !1), this.setNodeActive(this.auctioneerIp2Node, !1), this.setNodeActive(this.auctioneerIp1Node, !0), this.setNodeActive(this.auctioneerNode, !0), this.setNodeActive(this.auctioneerStageNode, !1), this.setNodeActive(this.circleTemplate, !1), this.setNodeActive((null == (e = this.gameNode) ? void 0 : e.getChildByName("smoke_1")) ?? null, !1), this.setNodeActive((null == (i = this.gameNode) ? void 0 : i.getChildByName("smoke_2")) ?? null, !1), this.setNodeActive((null == (t = this.gameNode) ? void 0 : t.getChildByName("Magnifier1")) ?? null, !1), this.setNodeActive(this.node.getChildByPath("UIPanel/demo"), !1), this.setNodeActive(this.clickRootNode, !0), this.setGavelBroken(!1), this.updatePriceLabel();
  }
  applyPhase1Visibility() {
    this.setNodeActive(this.magnifierRootNode, !0), this.setNodeActive(this.failendNode, !1), this.setNodeActive(this.failnodeRoot, !1), this.anchorMagnifierTargetToBg();
  }
  registerHandlers() {
    var e, i;
    this.node.on(__rea_outer_s.EventType.TOUCH_END, this.onLevelTouchEnd, this), this.node.on(__rea_outer_s.EventType.TOUCH_CANCEL, this.onLevelTouchEnd, this), null != (e = this.magnifierNode) && e.isValid && (this.magnifierNode.on(__rea_outer_s.EventType.TOUCH_START, this.onMagnifierTouchStart, this), this.magnifierNode.on(__rea_outer_s.EventType.TOUCH_MOVE, this.onMagnifierTouchMove, this), this.magnifierNode.on(__rea_outer_s.EventType.TOUCH_END, this.onMagnifierTouchEnd, this), this.magnifierNode.on(__rea_outer_s.EventType.TOUCH_CANCEL, this.onMagnifierTouchEnd, this)), null != (i = this.submitButton) && null != (i = i.node) && i.isValid && this.submitButton.node.on(__rea_outer_n.EventType.CLICK, this.onSubmitClick, this);
  }
  unregisterHandlers() {
    var e, i, t;
    null != (e = this.node) && e.isValid && (this.node.off(__rea_outer_s.EventType.TOUCH_END, this.onLevelTouchEnd, this), this.node.off(__rea_outer_s.EventType.TOUCH_CANCEL, this.onLevelTouchEnd, this)), null != (i = this.magnifierNode) && i.isValid && (this.magnifierNode.off(__rea_outer_s.EventType.TOUCH_START, this.onMagnifierTouchStart, this), this.magnifierNode.off(__rea_outer_s.EventType.TOUCH_MOVE, this.onMagnifierTouchMove, this), this.magnifierNode.off(__rea_outer_s.EventType.TOUCH_END, this.onMagnifierTouchEnd, this), this.magnifierNode.off(__rea_outer_s.EventType.TOUCH_CANCEL, this.onMagnifierTouchEnd, this)), null != (t = this.submitButton) && null != (t = t.node) && t.isValid && this.submitButton.node.off(__rea_outer_n.EventType.CLICK, this.onSubmitClick, this);
  }
  registerAuctioneerHandlers() {
    var e;
    null != (e = this.auctioneerNode) && e.isValid && (this.auctioneerNode.on(__rea_outer_s.EventType.TOUCH_START, this.onAuctioneerTouchStart, this), this.auctioneerNode.on(__rea_outer_s.EventType.TOUCH_MOVE, this.onAuctioneerTouchMove, this), this.auctioneerNode.on(__rea_outer_s.EventType.TOUCH_END, this.onAuctioneerTouchEnd, this), this.auctioneerNode.on(__rea_outer_s.EventType.TOUCH_CANCEL, this.onAuctioneerTouchEnd, this));
  }
  unregisterAuctioneerHandlers() {
    var e;
    null != (e = this.auctioneerNode) && e.isValid && (this.auctioneerNode.off(__rea_outer_s.EventType.TOUCH_START, this.onAuctioneerTouchStart, this), this.auctioneerNode.off(__rea_outer_s.EventType.TOUCH_MOVE, this.onAuctioneerTouchMove, this), this.auctioneerNode.off(__rea_outer_s.EventType.TOUCH_END, this.onAuctioneerTouchEnd, this), this.auctioneerNode.off(__rea_outer_s.EventType.TOUCH_CANCEL, this.onAuctioneerTouchEnd, this));
  }
  beginAuctioneerDrag(e) {
    const i = this.auctioneerNode,
      t = null == i ? void 0 : i.parent;
    if (null == i || !i.isValid || null == t || !t.isValid) return;
    this.isDraggingAuctioneer = !0, this.auctioneerDragDistance = 0, this.auctioneerOriginParent = t, this.auctioneerOriginPosition.set(i.position.x, i.position.y, i.position.z), this.auctioneerOriginSiblingIndex = i.getSiblingIndex();
    const s = i.worldPosition.clone(),
      n = this.gameNode ?? t;
    if (i.parent !== n) {
      i.setParent(n);
      const e = n.getComponent(__rea_outer_o);
      if (e) {
        const t = e.convertToNodeSpaceAR(s);
        i.setPosition(t);
      }
    }
    i.setSiblingIndex(n.children.length - 1);
    const l = this.getTouchLocalPosition(e, n);
    this.lastAuctioneerLocalPos.set(l.x, l.y, l.z);
    const h = i.position;
    this.auctioneerDragOffset.set(h.x - l.x, h.y - l.y, h.z - l.z);
  }
  restoreAuctioneerToOrigin() {
    const e = this.auctioneerNode,
      i = this.auctioneerOriginParent;
    if (null == e || !e.isValid || null == i || !i.isValid) return void this.clearAuctioneerDragOrigin();
    e.setParent(i);
    const t = Math.max(0, i.children.length - 1);
    this.auctioneerOriginSiblingIndex >= 0 && e.setSiblingIndex(Math.min(this.auctioneerOriginSiblingIndex, t)), e.setPosition(this.auctioneerOriginPosition), this.clearAuctioneerDragOrigin();
  }
  clearAuctioneerDragOrigin() {
    this.auctioneerOriginParent = null, this.auctioneerOriginSiblingIndex = -1;
  }
  tryCompleteClue(e) {
    if (e < 1 || e > 9) return;
    if (this.completedClues.has(e)) return;
    const i = this.touchNodes[e - 1],
      t = this.magnifierCheckNode;
    null != i && i.isValid && null != t && t.isValid && __rea_outer_D.cheakCollierBox(t, i) && this.completeClue(e, i);
  }
  completeClue(e, i) {
    this.completedClues.add(e), this.currentPrice += M[e - 1], this.hasInstallNum = this.completedClues.size, this.updatePriceLabel(), this.addCircleOnTouch(i), __rea_outer_v.playEffect_1("level24_1");
    const t = `24_${e + 1}`;
    this.setTipText(t), this.showAuctioneerExpressionDuringVoice(), __rea_outer_v.playVoice(t), __rea_outer_b.getInstance().refreshGameProgress(), this.TryQuickWin() || this.getCompletedMagnifierClueCount() >= 9 && this.enableAuctioneerDrag();
  }
  enableAuctioneerDrag() {
    this.isAuctioneerDraggable || (this.isAuctioneerDraggable = !0, this.setNodeActive(this.clickRootNode, !1), this.registerAuctioneerHandlers());
  }
  tryCompleteAuctioneerDrop() {
    if (this.completedClues.has(x)) return !1;
    const e = this.auctioneerNode,
      i = this.dropZoneNode;
    return !(null == e || !e.isValid || null == i || !i.isValid) && !!__rea_outer_f.isDragNearTarget(e, i) && (this.completeAuctioneerDrop(), !0);
  }
  completeAuctioneerDrop() {
    this.clearAuctioneerDragOrigin(), this.completedClues.add(x), this.currentPrice += M[9], this.hasInstallNum = this.completedClues.size, this.updatePriceLabel(), this.isInteractionLocked = !0, this.unregisterHandlers(), this.unregisterAuctioneerHandlers(), this.setNodeActive(this.clickRootNode, !1), this.setNodeActive(this.auctioneerNode, !1), this.setNodeActive(this.auctioneerStageNode, !0), this.setTipText(B), __rea_outer_v.playVoice(B), __rea_outer_b.getInstance().refreshGameProgress(), this.TryQuickWin() || (this.winstate = !0, this.phase = 2, __rea_outer_b.getInstance().pauseTimer(), this.scheduleOnce(() => {
      this.isValid && this.showLevelSuccess(__rea_outer_p);
    }, S));
  }
  beginFailSequence() {
    this.isFailSequencePlaying || (this.isFailSequencePlaying = !0, this.phase = 2, this.winstate = !1, this.isInteractionLocked = !0, this.unregisterHandlers(), this.unregisterAuctioneerHandlers(), this.setNodeActive(this.clickRootNode, !1), __rea_outer_b.getInstance().pauseTimer(), this.setNodeActive(this.failendIp5Node, !1), this.setNodeActive(this.failendBgNode, !0), this.setNodeActive(this.failendNode, !0), this.scheduleOnce(() => {
      this.isValid && (this.setNodeActive(this.failendIp5Node, !0), this.setFailTipText(V), __rea_outer_v.playVoice(V), this.scheduleOnce(() => {
        this.isValid && this.playFailClawThenPopup();
      }, S));
    }, .1));
  }
  playFailClawThenPopup() {
    this.setNodeActive(this.failnodeRoot, !0), this.setNodeActive(this.failure1Node, !0), this.setNodeActive(this.failureNode, !0), __rea_outer_v.playEffect_1("level24_3"), this.scheduleOnce(() => {
      this.isValid && __rea_outer_T.getInstance().showView(__rea_outer_y, __rea_outer_C.WIN_ANIMATION);
    }, .8);
  }
  updateGavelVisibility() {
    var e;
    if (1 !== this.phase || null == (e = this.magnifierCheckNode) || !e.isValid) return;
    const i = this.isGavelBrokenVisible ? this.auctioneerIp2Node : this.auctioneerIp1Node;
    if (null == i || !i.isValid) return;
    const t = __rea_outer_D.cheakCollierBox(this.magnifierCheckNode, i);
    t !== this.isGavelBrokenVisible && this.setGavelBroken(t);
  }
  setGavelBroken(e) {
    this.isGavelBrokenVisible = e, this.setNodeActive(this.auctioneerIp1Node, !e), this.setNodeActive(this.auctioneerIp2Node, e);
  }
  showAuctioneerExpressionDuringVoice() {
    this.expressionHideToken += 1;
    const e = this.expressionHideToken;
    this.setNodeActive(this.auctioneerExpressionNode, !0), this.scheduleOnce(() => {
      this.isValid && e === this.expressionHideToken && this.setNodeActive(this.auctioneerExpressionNode, !1);
    }, S);
  }
  addCircleOnTouch(e) {
    const i = this.circleTemplate,
      t = this.gameNode;
    if (null == i || !i.isValid || null == e || !e.isValid || null == t || !t.isValid) return;
    const s = __rea_outer_l(i);
    s.active = !0, s.setParent(t);
    const n = this.getNodeWorldCenter(e),
      r = t.getComponent(__rea_outer_o);
    if (r && n) {
      const e = r.convertToNodeSpaceAR(n);
      s.setPosition(e);
    } else s.setWorldPosition(e.worldPosition);
    __rea_outer_P(s, 0);
    const c = __rea_outer_I(s);
    __rea_outer_L(s), c && (__rea_outer_h.stopAllByTarget(c), __rea_outer_a(c).to(.35, {
      opacity: 255
    }).start());
  }
  getNodeWorldCenter(e) {
    const i = e.getComponent(__rea_outer_o);
    if (!i) return e.worldPosition.clone();
    const s = new __rea_outer_t((.5 - i.anchorX) * i.contentSize.width, (.5 - i.anchorY) * i.contentSize.height, 0);
    return i.convertToWorldSpaceAR(s);
  }
  anchorMagnifierTargetToBg() {
    const e = this.bgNode,
      i = this.magnifierTargetNode;
    null != e && e.isValid && null != i && i.isValid && i.setWorldPosition(e.worldPosition);
  }
  findTouchedClueIndex(e) {
    for (let i = 1; i <= 9; i += 1) {
      const t = this.touchNodes[i - 1];
      if (null != t && t.active && !this.completedClues.has(i) && this.isPointInsideNode(t, e)) return i;
    }
    return -1;
  }
  findFirstIncompleteStepIndex() {
    for (let e = 1; e <= x; e += 1) if (!this.completedClues.has(e)) return e - 1;
    return -1;
  }
  getCompletedMagnifierClueCount() {
    let e = 0;
    for (let i = 1; i <= 9; i += 1) this.completedClues.has(i) && (e += 1);
    return e;
  }
  updatePriceLabel() {
    this.priceLabel && (this.priceLabel.string = `${this.currentPrice}`);
  }
  setTipText(e) {
    const i = __rea_outer_m.getInstance();
    this.tipLabel && (this.tipLabel.string = i.getKey(e), this.setNodeActive(this.tipLabel.node, !0)), this.setNodeActive(this.bubbleNode, !0);
  }
  setFailTipText(e) {
    const i = __rea_outer_m.getInstance();
    this.failTipLabel && (this.failTipLabel.string = i.getKey(e), this.setNodeActive(this.failTipLabel.node, !0)), this.setNodeActive(this.bubbleNode, !1), this.setNodeActive(this.bubble2Node, !0);
  }
  isPointInsideNode(e, i) {
    const t = e.getComponent(__rea_outer_r);
    if (t) {
      const e = t.node.getComponent(__rea_outer_o);
      return !!e && e.getBoundingBoxToWorld().contains(i);
    }
    const s = e.getComponent(__rea_outer_o);
    return !!s && s.getBoundingBoxToWorld().contains(i);
  }
  getTouchWorldPoint(e) {
    const i = e.getUILocation();
    return new __rea_outer_c(i.x, i.y);
  }
  getTouchLocalPosition(e, i) {
    const s = e.getUILocation(),
      n = i.getComponent(__rea_outer_o);
    return n ? n.convertToNodeSpaceAR(new __rea_outer_t(s.x, s.y, 0)) : __rea_outer_t.ZERO;
  }
  resolveReferences() {
    var e, i, t, s, o, l, h, a, r, c, u, g, p, N, f, v, m;
    this.gameNode = this.node.getChildByPath("UIPanel/gameNode");
    const T = this.gameNode;
    this.topNode = (null == T ? void 0 : T.getChildByName("top")) ?? null, this.bubbleNode = (null == (e = this.topNode) ? void 0 : e.getChildByName("bubble")) ?? null, this.tipLabel = (null == (i = this.bubbleNode) || null == (i = i.getChildByPath("dialog_box/Label")) ? void 0 : i.getComponent(__rea_outer_d)) ?? null, this.bubble2Node = this.node.getChildByPath("UIPanel/bubble2"), this.failTipLabel = (null == (t = this.bubble2Node) || null == (t = t.getChildByPath("dialog_box/Label")) ? void 0 : t.getComponent(__rea_outer_d)) ?? null, this.bgNode = (null == T ? void 0 : T.getChildByName("bg")) ?? null, this.clicksRoot = (null == T ? void 0 : T.getChildByName("clicks")) ?? null, this.circleTemplate = (null == T ? void 0 : T.getChildByName("circle")) ?? null, this.magnifierRootNode = (null == T ? void 0 : T.getChildByName("Magnifiernode")) ?? null, this.magnifierNode = (null == (s = this.magnifierRootNode) ? void 0 : s.getChildByName("Magnifier")) ?? null, this.magnifierCheckNode = (null == (o = this.magnifierNode) ? void 0 : o.getChildByName("MagnifierCheck")) ?? null, this.magnifierTargetNode = (null == (l = this.magnifierNode) ? void 0 : l.getChildByPath("Mask/bg_1")) ?? null, this.priceLabel = (null == (h = this.topNode) || null == (h = h.getChildByPath("price/Label")) ? void 0 : h.getComponent(__rea_outer_d)) ?? null, this.auctioneerNode = (null == (a = this.topNode) ? void 0 : a.getChildByName("ip")) ?? null, this.auctioneerIp1Node = (null == (r = this.auctioneerNode) ? void 0 : r.getChildByName("ip_1")) ?? null, this.auctioneerIp2Node = (null == (c = this.auctioneerNode) ? void 0 : c.getChildByName("ip_2")) ?? null, this.auctioneerExpressionNode = (null == (u = this.auctioneerNode) ? void 0 : u.getChildByName("ip_expression")) ?? null, this.auctioneerStageNode = (null == T ? void 0 : T.getChildByName("ip_4")) ?? null, this.dropZoneNode = (null == (g = this.clicksRoot) ? void 0 : g.getChildByName("touch10")) ?? null, this.clickRootNode = this.node.getChildByPath("UIPanel/click_root"), this.submitButton = (null == (p = this.clickRootNode) || null == (p = p.getChildByName("Button")) ? void 0 : p.getComponent(__rea_outer_n)) ?? null, this.failendNode = this.node.getChildByPath("UIPanel/failend"), this.failendBgNode = (null == (N = this.failendNode) ? void 0 : N.getChildByName("failendbg")) ?? null, this.failendIp5Node = (null == (f = this.failendNode) ? void 0 : f.getChildByName("ip_5")) ?? null, this.failnodeRoot = this.node.getChildByPath("UIPanel/failnode"), this.failure1Node = (null == (v = this.failnodeRoot) ? void 0 : v.getChildByName("failure_1")) ?? null, this.failureNode = (null == (m = this.failure1Node) ? void 0 : m.getChildByName("failure")) ?? null;
    for (let e = 1; e <= 9; e += 1) {
      var C;
      this.touchNodes[e - 1] = (null == (C = this.clicksRoot) ? void 0 : C.getChildByName(`touch${e}`)) ?? null;
    }
  }
  setNodeActive(e, i) {
    null != e && e.isValid && (e.active = i);
  }
}) || O;
__rea_outer_i._RF.pop();
export { __recovered_export_0 as default };
