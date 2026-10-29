// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_11.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { applyDecoratedDescriptor as __rea_outer_t } from "./rollupPluginModLoBabelHelpers";
import { initializerDefineProperty as __rea_outer_i } from "./rollupPluginModLoBabelHelpers";
import { cclegacy as __rea_outer_o } from "cc";
import { Vec3 as __rea_outer_s } from "cc";
import { Node as __rea_outer_n } from "cc";
import { Label as __rea_outer_r } from "cc";
import { _decorator as __rea_outer_h } from "cc";
import { Tween as __rea_outer_a } from "cc";
import { tween as __rea_outer_d } from "cc";
import { UITransform as __rea_outer_l } from "cc";
import { BlockInputEvents as __rea_outer_c } from "cc";
import { Vec2 as __rea_outer_g } from "cc";
import { default as __rea_outer_u } from "./LevelBase";
import { default as __rea_outer_p } from "./clue-hit-tester";
import { default as __rea_outer_N } from "./AudioManager";
import { I18nController as __rea_outer_m } from "./i18n-controller";
import { UIManager as __rea_outer_v } from "./ui-manager";
import { UILayer as __rea_outer_S } from "./ui-layer";
import { UIHint as __rea_outer_b } from "./uihint";
import { UIFail as __rea_outer_f } from "./uifail";
import { GameController as __rea_outer_T } from "./GameController";
import { setNodeOpacity as __rea_outer_C } from "./CocosCompat";
import { stopAllTweens as __rea_outer_A } from "./CocosCompat";
import { getUIOpacity as __rea_outer_y } from "./CocosCompat";
let __recovered_export_0;
var B, P, D, I, G, w, V, _, k, L, x, O, E, z, R;
__rea_outer_o._RF.push({}, "c7e4aGyPV9OipxrGis8TV5v", "Level_11", void 0);
const {
    ccclass: H,
    property: U
  } = __rea_outer_h,
  F = [1, 2, 3, 4, 5, 6, 7, 9, 10, 11],
  K = F.length,
  M = Math.round(153),
  W = .18,
  $ = new __rea_outer_s(143, -33, 0),
  j = new __rea_outer_s(-86, 10, 0),
  q = 500;
__recovered_export_0 = (B = H("Level_11"), P = U(__rea_outer_n), D = U(__rea_outer_n), I = U(__rea_outer_r), G = U(__rea_outer_n), w = U(__rea_outer_n), V = U(__rea_outer_n), B((L = __rea_outer_t((k = class extends __rea_outer_u {
  constructor(...e) {
    super(...e), __rea_outer_i(this, "gameNode", L, this), __rea_outer_i(this, "bubbleNode", x, this), __rea_outer_i(this, "tipLabel", O, this), __rea_outer_i(this, "backBgNode", E, this), __rea_outer_i(this, "demoNode", z, this), __rea_outer_i(this, "photoNode", R, this), this.phase = 0, this.winstate = !1, this.isInteractionLocked = !1, this.completedSteps = new Set(), this.activeDragState = null, this.step11DragState = null, this.originPositions = new Map(), this.onClueBubbleHide = () => {
      this.isValid && this.hideBubble();
    }, this.onTouchStart = e => {
      if (1 !== this.phase || this.isInteractionLocked) return;
      const t = this.getTouchWorldPoint(e);
      if (this.tryHandleClick(t)) return void (e.propagationStopped = !0);
      const i = this.hitTestDraggable(t);
      if (i) return this.beginDrag(i.node, i.kind, e), void (e.propagationStopped = !0);
      this.tryBeginStep11Drag(t) && (e.propagationStopped = !0);
    }, this.onTouchMove = e => {
      if (this.activeDragState && 1 === this.phase && !this.isInteractionLocked) {
        const t = this.activeDragState;
        return this.setDragNodePositionFromTouch(e, t.dragNode, t.dragParent, t.touchOffset), void (e.propagationStopped = !0);
      }
      this.step11DragState && (e.propagationStopped = !0);
    }, this.onTouchEnd = e => {
      if (this.step11DragState) {
        const t = this.step11DragState;
        this.step11DragState = null;
        const i = this.getTouchWorldPoint(e);
        return this.isPointInsideNode(t.targetTouch, i) && this.executeStep11Swap(), void (e.propagationStopped = !0);
      }
      if (!this.activeDragState || 1 !== this.phase || this.isInteractionLocked) return void this.resetActiveDrag();
      const t = this.activeDragState;
      this.activeDragState = null;
      const i = this.getTouchWorldPoint(e);
      this.handleDragDrop(t, i), e.propagationStopped = !0;
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.allItemNum = K, this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.enterPhase0();
  }
  onDestroy() {
    var e;
    this.unscheduleAllCallbacks(), null != (e = this.node) && e.isValid && this.unregisterInteractionHandlers(), __rea_outer_a.stopAllByTag(q), __rea_outer_a.stopAllByTag(501), __rea_outer_a.stopAllByTag(502), __rea_outer_N.stopVoice(), this.activeDragState = null, this.step11DragState = null;
  }
  handleTimeExpired() {
    return !!(this.phase >= 2 || this.winstate);
  }
  showHint() {
    if (1 !== this.phase) return;
    const e = this.resolveHintKey();
    if (!e) return;
    const t = __rea_outer_m.getInstance().getKey(e);
    __rea_outer_v.getInstance().showView(__rea_outer_b, void 0, {
      body: t
    });
  }
  getGameProgressSnapshot() {
    const e = this.completedSteps.size;
    return {
      progress: K > 0 ? e / K : 0,
      label: `${e}/${K}`
    };
  }
  markAllTasksCompleted() {
    F.forEach(e => {
      this.completedSteps.add(e);
    }), this.hasInstallNum = K;
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.isInteractionLocked = !1, this.activeDragState = null, this.step11DragState = null, this.originPositions.clear(), this.completedSteps.clear(), this.hasInstallNum = 0, __rea_outer_N.stopVoice();
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_N.playMusic("bgm4", !0, .5), this.applyInitialVisibility(), this.cacheOriginPositions(), this.setInputBlocked(!0), this.scheduleOnce(() => {
      this.isValid && 0 === this.phase && (this.playIntroLine(), this.scheduleOnce(() => {
        this.isValid && 0 === this.phase && (this.hideBubble(), this.setInputBlocked(!1), this.enterPhase1());
      }, 2.5));
    }, .25);
  }
  skipOpeningToPlay() {
    return 0 === this.phase && (this.stopOpeningDialogue(), this.hideBubble(), this.setInputBlocked(!1), this.enterPhase1(), !0);
  }
  enterPhase1() {
    0 === this.phase && (this.phase = 1, this.registerInteractionHandlers(), __rea_outer_T.getInstance().refreshGameProgress());
  }
  enterPhase2Success(e) {
    this.phase >= 2 || (this.phase = 2, this.winstate = !0, this.unregisterInteractionHandlers(), __rea_outer_T.getInstance().pauseTimer(), this.showStepTipText(e), this.playVoiceEffect(e, () => {
      this.isValid && (this.hideBubble(), this.playPhotoEffect(() => {
        this.isValid && this.showLevelSuccess(1.5);
      }));
    }));
  }
  playVoiceEffect(e, t) {
    let i = !1;
    const o = () => {
        !i && this.isValid && (i = !0, this.unschedule(s), null == t || t());
      },
      s = () => {
        o();
      };
    t && this.scheduleOnce(s, 4), __rea_outer_N.stopVoice(), __rea_outer_N.playEffect_1(e, t ? o : void 0);
  }
  beginFailSequence() {
    this.phase >= 2 || (this.phase = 2, this.winstate = !1, this.unregisterInteractionHandlers(), __rea_outer_T.getInstance().pauseTimer(), __rea_outer_v.getInstance().showView(__rea_outer_f, __rea_outer_S.WIN_ANIMATION));
  }
  applyInitialVisibility() {
    var e;
    this.setNodeActive(this.photoNode, !1), null != (e = this.photoNode) && e.isValid && __rea_outer_C(this.photoNode, 0), this.setNodeActive(this.demoNode, !1), this.setNodeActive(this.backBgNode, !1), this.setNodeActive(this.bubbleNode, !1), this.setNodeActive(this.getGroomsmanNode("groomsman_3"), !1), this.setNodeActive(this.getGroomsmanNode("groomsman_2"), !1), this.setNodeActive(this.getGroomsmanNode("groomsman_4"), !0), this.setNodeActive(this.getGroomsmanNode("groomsman_1"), !0), this.setNodeActive(this.getGroomsman5Node(), !0), this.setNodeActive(this.getBridesmaidNode("bridesmaid_3"), !1), this.setNodeActive(this.getBridesmaidNode("bridesmaid_2"), !0), this.setNodeActive(this.getBrideNode("bride_2"), !0), this.setNodeActive(this.getGroomNode("groom_2"), !0), this.setNodeActive(this.getGroomNode("groom_3"), !0), this.setNodeActive(this.getRazorNode(), !0), this.setNodeActive(this.getGroomWigNode(), !0), this.setNodeActive(this.getGroomNode("groom_4"), !1), this.setNodeActive(this.getFlowerNode(), !0), this.setNodeActive(this.getBrideFlowerNode(), !1), this.setNodeActive(this.getVeilNode(), !0), this.setNodeActive(this.getBrideVeil2Node(), !1), this.setNodeActive(this.getCorsage1Node(), !0), this.setNodeActive(this.getCorsage2Node(), !0), this.setNodeActive(this.getCorsage3Node(), !0), this.setNodeActive(this.getCorsage4Node(), !0), this.setNodeActive(this.getGroomContainerNode(), !0), this.setNodeActive(this.getBrideContainerNode(), !0), this.updateStep11TouchAreasVisibility();
  }
  cacheOriginPositions() {
    [this.getRazorNode(), this.getGroomContainerNode(), this.getBrideContainerNode(), this.getFlowerNode(), this.getVeilNode(), this.getGroomWigNode()].forEach(e => {
      null != e && e.isValid && this.originPositions.set(e, e.position.clone());
    });
  }
  playIntroLine() {
    this.showStepTipText("11_0"), __rea_outer_N.playVoice("11_0");
  }
  showStepTipText(e) {
    const t = __rea_outer_m.getInstance();
    this.tipLabel && (this.tipLabel.string = t.getKey(e), this.setNodeActive(this.tipLabel.node, !0)), this.setNodeActive(this.bubbleNode, !0);
  }
  showStepCompletionTip(e) {
    this.unschedule(this.onClueBubbleHide), this.showStepTipText(e), __rea_outer_N.playVoice(e), this.scheduleOnce(this.onClueBubbleHide, 2);
  }
  hideBubble() {
    var e;
    this.unschedule(this.onClueBubbleHide), this.setNodeActive(this.bubbleNode, !1), this.setNodeActive((null == (e = this.tipLabel) ? void 0 : e.node) ?? null, !1);
  }
  registerInteractionHandlers() {
    this.node.on(__rea_outer_n.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(__rea_outer_n.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(__rea_outer_n.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(__rea_outer_n.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
  }
  unregisterInteractionHandlers() {
    this.node.off(__rea_outer_n.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(__rea_outer_n.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(__rea_outer_n.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(__rea_outer_n.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
  }
  tryHandleClick(e) {
    if (this.isStepAvailable(1)) {
      const t = this.getBrideTouchNode("touch1");
      if (null != t && t.active && this.isPointInsideNode(t, e)) return this.handleStep1Click(), !0;
    }
    if (this.isStepAvailable(2)) {
      const t = this.getGroomsmanTouchNode("touch2");
      if (null != t && t.active && this.isPointInsideNode(t, e)) return this.handleStep2Click(), !0;
    }
    if (this.isStepAvailable(4)) {
      const t = this.getGroomTouchNode("touch4");
      if (null != t && t.active && this.isPointInsideNode(t, e)) return this.handleStep4Click(), !0;
    }
    if (this.isStepAvailable(5)) {
      const t = this.getBridesmaidTouchNode("touch5");
      if (null != t && t.active && this.isPointInsideNode(t, e)) return this.handleStep5Click(), !0;
    }
    return !1;
  }
  handleStep1Click() {
    this.setNodeActive(this.getGroomsmanNode("groomsman_4"), !1), this.setNodeActive(this.getGroomsman5Node(), !1), this.setNodeActive(this.getGroomsmanNode("groomsman_3"), !0), this.completeStep(1);
  }
  handleStep2Click() {
    this.setNodeActive(this.getGroomsmanNode("groomsman_1"), !1), this.setNodeActive(this.getGroomsmanNode("groomsman_2"), !0), this.completeStep(2);
  }
  handleStep4Click() {
    this.setNodeActive(this.getGroomNode("groom_2"), !1), this.completeStep(4);
  }
  handleStep5Click() {
    this.setNodeActive(this.getBridesmaidNode("bridesmaid_2"), !1), this.setNodeActive(this.getBridesmaidNode("bridesmaid_3"), !0), this.completeStep(5);
  }
  handleDragDrop(e, t) {
    if ("razor" === e.dragKind) {
      const i = this.getBrideTouchNode("touch3"),
        o = this.getGroomTouchNode("touch6");
      return this.isStepAvailable(3) && i && __rea_outer_p.isDragNearTarget(e.dragNode, i) ? void this.handleStep3Drop(e, t) : this.isStepAvailable(6) && o && __rea_outer_p.isDragNearTarget(e.dragNode, o) ? void this.handleStep6Drop(e, t) : void this.restoreDragNode(e);
    }
    "wig" === e.dragKind && this.isStepAvailable(7) ? this.handleStep7Drop(e, t) : "flower" === e.dragKind && this.isStepAvailable(9) ? this.handleStep9Drop(e, t) : "veil" === e.dragKind && this.isStepAvailable(10) ? this.handleStep10Drop(e, t) : this.restoreDragNode(e);
  }
  tryBeginStep11Drag(e) {
    if (!this.isStepAvailable(11)) return !1;
    const t = this.getGroomTouchNode("touch11"),
      i = this.getBrideTouchNode("touch11");
    return !(null == t || !t.isValid || null == i || !i.isValid) && (t.active && this.isPointInsideNode(t, e) ? (this.step11DragState = {
      sourceTouch: t,
      targetTouch: i
    }, !0) : !(!i.active || !this.isPointInsideNode(i, e)) && (this.step11DragState = {
      sourceTouch: i,
      targetTouch: t
    }, !0));
  }
  executeStep11Swap() {
    if (!this.isStepAvailable(11)) return;
    const e = this.getGroomContainerNode(),
      t = this.getBrideContainerNode();
    null != e && e.isValid && null != t && t.isValid && (this.isInteractionLocked = !0, this.moveNodesToTargetPositions(t, $, e, j, () => {
      this.isValid && (this.isInteractionLocked = !1, this.completeStep(11));
    }, .35));
  }
  handleStep3Drop(e, t) {
    if ("razor" !== e.dragKind) return void this.restoreDragNode(e);
    const i = this.getBrideTouchNode("touch3");
    if (!__rea_outer_p.isDragNearTarget(e.dragNode, i)) return void this.restoreDragNode(e);
    this.isInteractionLocked = !0;
    const o = e.dragNode;
    this.snapNodeToTouch(o, e.dragParent, t), this.playRazorVerticalShake(o, () => {
      this.isValid && (this.setNodeActive(this.getBrideNode("bride_2"), !1), this.completeStep(3), this.handleRazorAfterStep(o, e));
    });
  }
  handleStep6Drop(e, t) {
    if ("razor" !== e.dragKind) return void this.restoreDragNode(e);
    const i = this.getGroomTouchNode("touch6");
    if (!__rea_outer_p.isDragNearTarget(e.dragNode, i)) return void this.restoreDragNode(e);
    this.isInteractionLocked = !0;
    const o = e.dragNode;
    this.playRazorStep6Shake(o, i, e.dragParent, () => {
      this.isValid && (this.setNodeActive(this.getGroomNode("groom_3"), !1), this.completeStep(6), this.handleRazorAfterStep(o, e));
    });
  }
  handleRazorAfterStep(e, t) {
    if (this.isStepCompleted(3) && this.isStepCompleted(6)) return this.setNodeActive(e, !1), void (this.isInteractionLocked = !1);
    this.returnRazorToOrigin(e, t, () => {
      this.isValid && (this.isInteractionLocked = !1);
    });
  }
  handleStep7Drop(e, t) {
    if ("wig" !== e.dragKind) return void this.restoreDragNode(e);
    const i = this.getGroomTouchNode("touch7");
    if (!__rea_outer_p.isDragNearTarget(e.dragNode, i)) return void this.restoreDragNode(e);
    const o = e.dragNode;
    this.setNodeActive(o, !1), this.setNodeActive(this.getGroomNode("groom_4"), !0), this.completeStep(7);
  }
  handleStep9Drop(e, t) {
    if ("flower" !== e.dragKind) return void this.restoreDragNode(e);
    const i = this.getBrideFlowerNode();
    if (!__rea_outer_p.isDragNearTarget(e.dragNode, i)) return void this.restoreDragNode(e);
    const o = e.dragNode;
    this.setNodeActive(o, !1), this.setNodeActive(i, !0), this.completeStep(9);
  }
  handleStep10Drop(e, t) {
    if ("veil" !== e.dragKind) return void this.restoreDragNode(e);
    const i = this.getBrideVeil2Node();
    if (!__rea_outer_p.isDragNearTarget(e.dragNode, i)) return void this.restoreDragNode(e);
    const o = e.dragNode;
    this.setNodeActive(o, !1), this.setNodeActive(this.getBrideVeil2Node(), !0), this.completeStep(10);
  }
  completeStep(e) {
    if (!this.isStepAvailable(e)) return;
    if (this.TryQuickWin()) return;
    this.completedSteps.add(e), __rea_outer_N.playEffect_1("level11_1"), this.hasInstallNum = this.completedSteps.size, 1 !== e && 11 !== e || this.updateStep11TouchAreasVisibility(), __rea_outer_T.getInstance().refreshGameProgress();
    const t = `11_${e}`;
    this.completedSteps.size >= K ? this.enterPhase2Success(t) : this.showStepCompletionTip(t);
  }
  updateStep11TouchAreasVisibility() {
    const e = this.isStepCompleted(1) && !this.isStepCompleted(11);
    this.setNodeActive(this.getGroomTouchNode("touch11"), e), this.setNodeActive(this.getBrideTouchNode("touch11"), e);
  }
  isStepCompleted(e) {
    return this.completedSteps.has(e);
  }
  isStepAvailable(e) {
    return !(this.isStepCompleted(e) || !F.includes(e)) && (11 !== e || this.isStepCompleted(1));
  }
  playPhotoEffect(e) {
    const t = this.photoNode;
    if (null == t || !t.isValid) return void e();
    __rea_outer_N.playEffect_1("level11_2"), __rea_outer_A(t), this.setNodeActive(t, !0);
    const i = __rea_outer_y(t);
    i.opacity = M, __rea_outer_d(i).tag(502).delay(.15).to(.15, {
      opacity: 0
    }).call(() => {
      this.isValid && (this.setNodeActive(t, !1), __rea_outer_C(t, 0), e());
    }).start();
  }
  playRazorVerticalShake(e, t) {
    const i = e.position.clone();
    __rea_outer_d(e).tag(q).to(W, {
      position: new __rea_outer_s(i.x, i.y + 10, 0)
    }).to(W, {
      position: new __rea_outer_s(i.x, i.y - 10, 0)
    }).to(W, {
      position: new __rea_outer_s(i.x, i.y + 6, 0)
    }).to(W, {
      position: i
    }).call(() => {
      this.isValid && t();
    }).start();
  }
  playRazorStep6Shake(e, t, i, o) {
    this.snapNodeToTargetCenter(e, i, t);
    const n = e.position.clone();
    __rea_outer_d(e).tag(q).to(W, {
      position: new __rea_outer_s(n.x + 25, n.y, 0)
    }).to(W, {
      position: new __rea_outer_s(n.x - 25, n.y, 0)
    }).to(W, {
      position: new __rea_outer_s(n.x + 15, n.y, 0)
    }).to(W, {
      position: n
    }).call(() => {
      this.isValid && o();
    }).start();
  }
  returnRazorToOrigin(e, t, i) {
    const o = this.originPositions.get(e) ?? t.originPosition;
    e.setParent(t.originParent), e.setSiblingIndex(t.originSiblingIndex), __rea_outer_d(e).tag(q).to(.3, {
      position: o.clone()
    }).call(() => {
      this.isValid && i();
    }).start();
  }
  moveNodesToTargetPositions(e, t, i, o, s, n = .35) {
    let r = 0;
    const h = () => {
      r += 1, r < 2 || !this.isValid || s();
    };
    __rea_outer_d(e).tag(501).to(n, {
      position: t.clone()
    }).call(h).start(), __rea_outer_d(i).tag(501).to(n, {
      position: o.clone()
    }).call(h).start();
  }
  snapNodeToTargetCenter(e, t, i) {
    const o = t.getComponent(__rea_outer_l);
    if (!o) return;
    const s = i.worldPosition.clone();
    e.setPosition(o.convertToNodeSpaceAR(s));
  }
  snapNodeToTouch(e, t, i) {
    const o = t.getComponent(__rea_outer_l);
    if (!o) return;
    const n = o.convertToNodeSpaceAR(new __rea_outer_s(i.x, i.y, 0));
    e.setPosition(n);
  }
  hitTestDraggable(e) {
    const t = [];
    if (this.isStepAvailable(3) || this.isStepAvailable(6)) {
      const e = this.getRazorNode();
      null != e && e.active && t.push({
        node: e,
        kind: "razor"
      });
    }
    if (this.isStepAvailable(7)) {
      const e = this.getGroomWigNode();
      null != e && e.active && t.push({
        node: e,
        kind: "wig"
      });
    }
    if (this.isStepAvailable(9)) {
      const e = this.getFlowerNode();
      null != e && e.active && t.push({
        node: e,
        kind: "flower"
      });
    }
    if (this.isStepAvailable(10)) {
      const e = this.getVeilNode();
      null != e && e.active && t.push({
        node: e,
        kind: "veil"
      });
    }
    t.sort((e, t) => this.getNodeRenderOrder(t.node) - this.getNodeRenderOrder(e.node));
    for (let i = 0; i < t.length; i += 1) {
      const o = t[i];
      if (this.isPointInsideNode(o.node, e)) return o;
    }
    return null;
  }
  beginDrag(e, t, i) {
    const o = e.parent,
      s = e.position.clone(),
      n = e.getSiblingIndex(),
      r = e.worldPosition.clone(),
      h = this.gameNode ?? o,
      a = r.clone();
    e.setParent(h);
    const d = h.getComponent(__rea_outer_l);
    if (d) {
      const t = d.convertToNodeSpaceAR(a);
      e.setPosition(t);
    }
    e.setSiblingIndex(h.children.length - 1);
    const c = this.calculateTouchOffset(i, e, h);
    this.setDragNodePositionFromTouch(i, e, h, c), this.activeDragState = {
      dragNode: e,
      dragKind: t,
      dragParent: h,
      touchOffset: c,
      originParent: o,
      originPosition: s,
      originSiblingIndex: n
    };
  }
  resetActiveDrag() {
    this.activeDragState && (this.restoreDragNode(this.activeDragState), this.activeDragState = null);
  }
  restoreDragNode(e) {
    const t = e.dragNode;
    t.isValid && (t.setParent(e.originParent), t.setSiblingIndex(e.originSiblingIndex), t.setPosition(e.originPosition));
  }
  resolveHintKey() {
    for (let e = 0; e < F.length; e += 1) {
      const t = F[e];
      if (this.isStepAvailable(t)) return `level11_hint${t}`;
    }
    return null;
  }
  resolveReferences() {
    var e, t;
    (this.gameNode = this.gameNode ?? this.node.getChildByPath("UIPanel/gameNode"), this.bubbleNode = this.bubbleNode ?? this.node.getChildByPath("UIPanel/bubble"), this.backBgNode = this.backBgNode ?? this.node.getChildByPath("UIPanel/backBG"), this.demoNode = this.demoNode ?? this.node.getChildByPath("UIPanel/demo"), this.photoNode = this.photoNode ?? (null == (e = this.gameNode) ? void 0 : e.getChildByName("photo")) ?? null, this.tipLabel) || (this.tipLabel = (null == (t = this.bubbleNode) || null == (t = t.getChildByPath("dialog_box/Label")) ? void 0 : t.getComponent(__rea_outer_r)) ?? null);
    this.gameNode || console.warn("[Level_11] 缺少 gameNode 节点"), this.bubbleNode || console.warn("[Level_11] 缺少 bubble 节点");
  }
  getChildNode(e, t) {
    return null != e && e.isValid ? e.getChildByName(t) ?? null : null;
  }
  getGameNodeChild(e) {
    return this.getChildNode(this.gameNode, e);
  }
  getGroomsmanContainer() {
    return this.getGameNodeChild("groomsman");
  }
  getGroomsmanNode(e) {
    return this.getChildNode(this.getGroomsmanContainer(), e);
  }
  getGroomsman5Node() {
    return this.getBrideNode("groomsman_5");
  }
  getBridesmaidContainer() {
    return this.getGameNodeChild("bridesmaid");
  }
  getBridesmaidNode(e) {
    return this.getChildNode(this.getBridesmaidContainer(), e);
  }
  getFlowerNode() {
    return this.getChildNode(this.getBridesmaidContainer(), "flower");
  }
  getGroomContainerNode() {
    return this.getGameNodeChild("groom");
  }
  getGroomBodyNode() {
    return this.getChildNode(this.getGroomContainerNode(), "groom");
  }
  getGroomNode(e) {
    const t = this.getGroomContainerNode();
    return null != t && t.isValid ? "groom_2_1" === e || "groom_2_2" === e ? t.getChildByPath(`groom/${e}`) : t.getChildByName(e) ?? null : null;
  }
  getBrideContainerNode() {
    return this.getGameNodeChild("bride");
  }
  getBrideBodyNode() {
    return this.getChildNode(this.getBrideContainerNode(), "bride");
  }
  getBrideNode(e) {
    return this.getChildNode(this.getBrideContainerNode(), e);
  }
  getBrideTouchNode(e) {
    return this.getChildNode(this.getBrideContainerNode(), e);
  }
  getGroomTouchNode(e) {
    return this.getChildNode(this.getGroomContainerNode(), e);
  }
  getGroomsmanTouchNode(e) {
    return this.getChildNode(this.getGroomsmanContainer(), e);
  }
  getBridesmaidTouchNode(e) {
    return this.getChildNode(this.getBridesmaidContainer(), e);
  }
  getBrideFlowerNode() {
    return this.getBrideTouchNode("flower");
  }
  getBrideVeil2Node() {
    return this.getBrideTouchNode("veil2");
  }
  getGameNodePath(e) {
    const t = this.gameNode;
    return null != t && t.isValid ? t.getChildByPath(e) ?? null : null;
  }
  getGroomWigNode() {
    return this.getGameNodeChild("groom_1");
  }
  getRazorNode() {
    return this.getGameNodePath("groom/razor") ?? this.getGameNodeChild("razor");
  }
  getVeilNode() {
    return this.getGameNodeChild("veil");
  }
  getCorsage1Node() {
    return this.getGameNodeChild("corsage_1");
  }
  getCorsage2Node() {
    return this.getGameNodePath("bride/corsage_2") ?? this.getGameNodeChild("corsage_2");
  }
  getCorsage3Node() {
    return this.getGameNodeChild("corsage_3");
  }
  getCorsage4Node() {
    return this.getGameNodeChild("corsage_4");
  }
  setInputBlocked(e) {
    const t = this.backBgNode;
    if (null == t || !t.isValid) return;
    t.active = e, e && __rea_outer_C(t, 0);
    const i = t.getComponent(__rea_outer_c);
    i && (i.enabled = e);
  }
  setNodeActive(e, t) {
    null != e && e.isValid && (e.active = t);
  }
  getNodeRenderOrder(e) {
    let t = 0,
      i = 1,
      o = e;
    for (; o;) t += o.getSiblingIndex() * i, i *= 128, o = o.parent;
    return t;
  }
  isPointInsideNode(e, t) {
    const i = null == e ? void 0 : e.getComponent(__rea_outer_l);
    return !!i && i.getBoundingBoxToWorld().contains(t);
  }
  getTouchWorldPoint(e) {
    const t = e.getUILocation();
    return new __rea_outer_g(t.x, t.y);
  }
  getTouchLocalPosition(e, t) {
    const i = e.getUILocation(),
      o = t.getComponent(__rea_outer_l);
    return o ? o.convertToNodeSpaceAR(new __rea_outer_s(i.x, i.y, 0)) : __rea_outer_s.ZERO.clone();
  }
  calculateTouchOffset(e, t, i) {
    const o = this.getTouchLocalPosition(e, i);
    return new __rea_outer_s(t.position.x - o.x, t.position.y - o.y, 0);
  }
  setDragNodePositionFromTouch(e, t, i, o) {
    const s = this.getTouchLocalPosition(e, i);
    t.setPosition(s.x + o.x, s.y + o.y, t.position.z);
  }
}).prototype, "gameNode", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), x = __rea_outer_t(k.prototype, "bubbleNode", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), O = __rea_outer_t(k.prototype, "tipLabel", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), E = __rea_outer_t(k.prototype, "backBgNode", [G], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), z = __rea_outer_t(k.prototype, "demoNode", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), R = __rea_outer_t(k.prototype, "photoNode", [V], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), _ = k)) || _);
__rea_outer_o._RF.pop();
export { __recovered_export_0 as default };
