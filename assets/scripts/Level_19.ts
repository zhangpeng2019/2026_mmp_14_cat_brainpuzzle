// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_19.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_i } from "cc";
import { Vec3 as __rea_outer_t } from "cc";
import { Node as __rea_outer_s } from "cc";
import { Button as __rea_outer_o } from "cc";
import { instantiate as __rea_outer_n } from "cc";
import { UITransform as __rea_outer_l } from "cc";
import { Tween as __rea_outer_h } from "cc";
import { tween as __rea_outer_a } from "cc";
import { Sprite as __rea_outer_r } from "cc";
import { Vec2 as __rea_outer_d } from "cc";
import { Label as __rea_outer_c } from "cc";
import { _decorator as __rea_outer_u } from "cc";
import { default as __rea_outer_g } from "./LevelBase";
import { default as __rea_outer_p } from "./AudioManager";
import { I18nController as __rea_outer_f } from "./i18n-controller";
import { UIManager as __rea_outer_N } from "./ui-manager";
import { UILayer as __rea_outer_m } from "./ui-layer";
import { UIHint as __rea_outer_C } from "./uihint";
import { UIFail as __rea_outer_v } from "./uifail";
import { GameController as __rea_outer_y } from "./GameController";
import { setNodeOpacity as __rea_outer_b } from "./CocosCompat";
import { getUIOpacity as __rea_outer_T } from "./CocosCompat";
import { stopAllTweens as __rea_outer_P } from "./CocosCompat";
import { default as __rea_outer_I } from "./Utils";
let __recovered_export_0;
var D;
__rea_outer_i._RF.push({}, "f19a1kAGQBAGaAZAAAAAAAZ", "Level_19", void 0);
const {
    ccclass: M
  } = __rea_outer_u,
  B = "[Level_19][clue]",
  L = "19_1",
  V = 12,
  x = [-800, -600, -600, -600, -400, -400, -400, -400, -400, -200, -100, -100],
  k = ["level19_hint1", "level19_hint2", "level19_hint3", "level19_hint4", "level19_hint5", "level19_hint6", "level19_hint7", "level19_hint8", "level19_hint9", "level19_hint10", "level19_hint11", "level19_hint12"],
  A = ["camera", "palm_print", "photo", "mirror"];
__recovered_export_0 = M("Level_19")(D = class extends __rea_outer_g {
  constructor(...e) {
    super(...e), this.phase = 0, this.winstate = !1, this.gameNode = null, this.bubbleNode = null, this.tipLabel = null, this.backBgNode = null, this.bgNode = null, this.cluesNode = null, this.magnifierNode = null, this.magnifierCheckNode = null, this.magnifierTargetNode = null, this.blackNode = null, this.magnifierTargetChildren = [], this.priceLabel = null, this.ip1Node = null, this.ip2Node = null, this.buttonDeal = null, this.circleTemplate = null, this.circlesRoot = null, this.touchNodes = new Array(13).fill(null), this.dayClueNodes = new Array(A.length).fill(null), this.currentPrice = 5e3, this.discoveryCount = 0, this.isNightMode = !1, this.isInteractionLocked = !1, this.isDraggingMagnifier = !1, this.magnifierDragDistance = 0, this.magnifierDragOffset = new __rea_outer_t(), this.lastMagnifierLocalPos = new __rea_outer_t(), this.completedClues = new Set(), this.completedNightClues = new Set(), this.onMagnifierTouchStart = e => {
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
        o = t.y - this.lastMagnifierLocalPos.y;
      this.magnifierDragDistance += Math.sqrt(s * s + o * o), this.lastMagnifierLocalPos.set(t.x, t.y, t.z), this.magnifierNode.setPosition(t.x + this.magnifierDragOffset.x, t.y + this.magnifierDragOffset.y, this.magnifierNode.position.z), this.anchorMagnifierTargetToBg(), e.propagationStopped = !0;
    }, this.onMagnifierTouchEnd = e => {
      if (e.propagationStopped = !0, !this.isDraggingMagnifier) return;
      const i = this.magnifierDragDistance <= 20;
      if (this.isDraggingMagnifier = !1, 1 !== this.phase || this.isInteractionLocked) return;
      if (!i) return void this.logClueDebug("magnifier drag end (not a tap)", {
        dragDistance: this.magnifierDragDistance
      });
      const t = this.getTouchWorldPoint(e),
        s = this.findTouchedClueIndex(t);
      this.logClueDebug("magnifier tap end", {
        clueIndex: s,
        dragDistance: this.magnifierDragDistance,
        touchPoint: {
          x: t.x,
          y: t.y
        }
      }), s < 0 || this.tryCompleteClue(s);
    }, this.onLevelTouchEnd = e => {
      if (1 !== this.phase || this.isInteractionLocked || this.isDraggingMagnifier) return void this.logClueDebug("touch ignored: gate", {
        phase: this.phase,
        isInteractionLocked: this.isInteractionLocked,
        isDraggingMagnifier: this.isDraggingMagnifier
      });
      const i = this.getTouchWorldPoint(e);
      if (this.tryHandleDayNightToggle(i)) return void this.logClueDebug("touch handled: day/night toggle", {
        isNightMode: this.isNightMode
      });
      const t = this.findTouchedClueIndex(i);
      t < 0 ? this.logClueDebug("touch missed all clue hotspots", {
        touchPoint: {
          x: i.x,
          y: i.y
        },
        touchProbe: this.describeTouchProbe(i)
      }) : (this.logClueDebug("touch hit hotspot", {
        clueIndex: t,
        touchPoint: {
          x: i.x,
          y: i.y
        }
      }), this.tryCompleteClue(t));
    }, this.onButtonDealClick = () => {
      if (1 !== this.phase || this.isInteractionLocked) return;
      this.isInteractionLocked = !0;
      const e = this.completedClues.size >= V,
        i = e ? "19_15" : "19_14";
      this.setTipText(i), __rea_outer_p.playVoice(i), this.scheduleOnce(() => {
        this.isValid && (this.winstate = e, e ? this.beginSuccessSequence() : this.beginFailSequence());
      }, 2);
    }, this.onIpReactHoldEnd = () => {
      this.isValid && this.setIpIdle();
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.allItemNum = V, this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.enterPhase0();
  }
  onDestroy() {
    this.unscheduleAllCallbacks(), this.unregisterHandlers(), __rea_outer_p.stopVoice();
  }
  update() {
    1 === this.phase && this.anchorMagnifierTargetToBg();
  }
  handleTimeExpired() {
    return !!(this.phase >= 2 || this.winstate);
  }
  showHint() {
    if (1 !== this.phase) return;
    const e = this.findFirstIncompleteClueIndex();
    if (e < 0) return;
    const i = __rea_outer_f.getInstance().getKey(k[e]);
    __rea_outer_N.getInstance().showView(__rea_outer_C, void 0, {
      body: i
    });
  }
  getGameProgressSnapshot() {
    return {
      progress: this.completedClues.size / V,
      label: `${this.completedClues.size}/12`
    };
  }
  markAllTasksCompleted() {
    for (let e = 1; e <= V; e += 1) this.completedClues.add(e), e >= 9 && this.completedNightClues.add(e);
    this.discoveryCount = V, this.currentPrice = 0, this.hasInstallNum = V, this.phase = 2, this.winstate = !0, this.isInteractionLocked = !0, this.unregisterHandlers(), this.updatePriceLabel();
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.currentPrice = 5e3, this.discoveryCount = 0, this.isNightMode = !1, this.isInteractionLocked = !1, this.isDraggingMagnifier = !1, this.magnifierDragDistance = 0, this.completedClues.clear(), this.completedNightClues.clear(), this.hasInstallNum = 0, this.allItemNum = V, __rea_outer_p.stopVoice();
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_p.playMusic("bgm4", !0, .5), this.applyPhase0Visibility(), this.setTipText(L), this.setNodeActive(this.bubbleNode, !0), __rea_outer_p.playVoice(L), this.scheduleOnce(() => {
      this.isValid && 0 === this.phase && this.enterPhase1();
    }, 2.5);
  }
  skipOpeningToPlay() {
    return 0 === this.phase && (this.stopOpeningDialogue(), this.setNodeActive(this.bubbleNode, !1), this.enterPhase1(), !0);
  }
  enterPhase1() {
    0 === this.phase && (this.phase = 1, this.applyPhase1Visibility(), this.registerHandlers(), __rea_outer_y.getInstance().refreshGameProgress());
  }
  applyPhase0Visibility() {
    this.setNodeActive(this.cluesNode, !1), this.setNodeActive(this.backBgNode, !0), this.setNodeActive(this.magnifierNode, !1), this.setMagnifierTargetChildrenActive(!1), this.setNodeActive(this.blackNode, !1), this.hideDayClueNodes(), this.updatePriceLabel(), this.setIpIdle();
  }
  applyPhase1Visibility() {
    this.setNodeActive(this.backBgNode, !1), this.setNodeActive(this.cluesNode, !0), this.hideDayClueNodes(), this.setNodeActive(this.magnifierNode, !0), this.applyDayNightVisibility(), this.anchorMagnifierTargetToBg(), this.setIpIdle();
  }
  registerHandlers() {
    var e, i;
    this.node.on(__rea_outer_s.EventType.TOUCH_END, this.onLevelTouchEnd, this), this.node.on(__rea_outer_s.EventType.TOUCH_CANCEL, this.onLevelTouchEnd, this), null != (e = this.magnifierNode) && e.isValid && (this.magnifierNode.on(__rea_outer_s.EventType.TOUCH_START, this.onMagnifierTouchStart, this), this.magnifierNode.on(__rea_outer_s.EventType.TOUCH_MOVE, this.onMagnifierTouchMove, this), this.magnifierNode.on(__rea_outer_s.EventType.TOUCH_END, this.onMagnifierTouchEnd, this), this.magnifierNode.on(__rea_outer_s.EventType.TOUCH_CANCEL, this.onMagnifierTouchEnd, this)), null != (i = this.buttonDeal) && null != (i = i.node) && i.isValid && this.buttonDeal.node.on(__rea_outer_o.EventType.CLICK, this.onButtonDealClick, this);
  }
  unregisterHandlers() {
    var e, i, t;
    null != (e = this.node) && e.isValid && (this.node.off(__rea_outer_s.EventType.TOUCH_END, this.onLevelTouchEnd, this), this.node.off(__rea_outer_s.EventType.TOUCH_CANCEL, this.onLevelTouchEnd, this)), null != (i = this.magnifierNode) && i.isValid && (this.magnifierNode.off(__rea_outer_s.EventType.TOUCH_START, this.onMagnifierTouchStart, this), this.magnifierNode.off(__rea_outer_s.EventType.TOUCH_MOVE, this.onMagnifierTouchMove, this), this.magnifierNode.off(__rea_outer_s.EventType.TOUCH_END, this.onMagnifierTouchEnd, this), this.magnifierNode.off(__rea_outer_s.EventType.TOUCH_CANCEL, this.onMagnifierTouchEnd, this)), null != (t = this.buttonDeal) && null != (t = t.node) && t.isValid && this.buttonDeal.node.off(__rea_outer_o.EventType.CLICK, this.onButtonDealClick, this);
  }
  tryHandleDayNightToggle(e) {
    const i = this.touchNodes[12];
    return !(null == i || !i.active || !this.isPointInsideNode(i, e)) && (this.isNightMode = !this.isNightMode, this.applyDayNightVisibility(), !0);
  }
  tryCompleteClue(e) {
    if (this.completedClues.has(e)) return void this.logClueDebug("complete blocked: already done", {
      clueIndex: e
    });
    if (e >= 9 && !this.isNightMode) return void this.logClueDebug("complete blocked: night-only clue in day mode", {
      clueIndex: e,
      isNightMode: this.isNightMode
    });
    const i = this.touchNodes[e - 1],
      t = this.magnifierCheckNode;
    if (null == i || !i.isValid || null == t || !t.isValid) return void this.logClueDebug("complete blocked: missing node", {
      clueIndex: e,
      hasTouchNode: Boolean(null == i ? void 0 : i.isValid),
      hasMagnifierCheck: Boolean(null == t ? void 0 : t.isValid)
    });
    __rea_outer_I.cheakCollierBox(t, i) ? (this.logClueDebug("complete accepted", {
      clueIndex: e,
      discoveryStep: this.discoveryCount + 1,
      isNightMode: this.isNightMode
    }), this.completeClue(e, i)) : this.logClueDebug("complete blocked: magnifier check not intersecting hotspot", {
      clueIndex: e,
      magnifierCheckBox: this.describeWorldBox(t),
      touchBox: this.describeWorldBox(i),
      magnifierPos: this.describeWorldPos(this.magnifierNode),
      magnifierCheckPos: this.describeWorldPos(t),
      touchPos: this.describeWorldPos(i)
    });
  }
  completeClue(e, i) {
    this.completedClues.add(e), e >= 9 && this.completedNightClues.add(e), this.discoveryCount += 1, this.currentPrice += x[e - 1], this.hasInstallNum = this.completedClues.size, this.updatePriceLabel(), this.addCircleOnTouch(i), __rea_outer_p.playEffect_1("level19_1");
    const t = `19_${this.discoveryCount + 1}`;
    this.setTipText(t), this.playVoiceEffect(t), this.applyDayNightVisibility(), __rea_outer_y.getInstance().refreshGameProgress(), this.playIpReact(), this.TryQuickWin();
  }
  addCircleOnTouch(e) {
    const i = this.circleTemplate,
      t = this.circlesRoot;
    if (null == i || !i.isValid || null == e || !e.isValid || null == t || !t.isValid) return;
    const s = __rea_outer_n(i);
    s.active = !0, s.setParent(t);
    const o = this.getNodeWorldCenter(e),
      r = t.getComponent(__rea_outer_l);
    if (r && o) {
      const e = r.convertToNodeSpaceAR(o);
      s.setPosition(e);
    } else s.setWorldPosition(e.worldPosition);
    __rea_outer_b(s, 0);
    const d = __rea_outer_T(s);
    __rea_outer_P(s), __rea_outer_h.stopAllByTarget(d), __rea_outer_a(d).to(.25, {
      opacity: 255
    }).start();
  }
  getNodeWorldCenter(e) {
    const i = e.getComponent(__rea_outer_l);
    if (!i) return e.worldPosition.clone();
    const s = new __rea_outer_t((.5 - i.anchorX) * i.contentSize.width, (.5 - i.anchorY) * i.contentSize.height, 0);
    return i.convertToWorldSpaceAR(s);
  }
  applyDayNightVisibility() {
    this.setMagnifierTargetChildrenActive(this.isNightMode), this.setNodeActive(this.blackNode, this.isNightMode), this.dayClueNodes.forEach((e, i) => {
      if (null == e || !e.isValid) return;
      const t = 9 + i,
        s = !this.isNightMode && this.completedNightClues.has(t);
      e.active = s;
    });
  }
  setMagnifierTargetChildrenActive(e) {
    this.magnifierTargetChildren.forEach(i => {
      this.setNodeActive(i, e);
    });
  }
  hideDayClueNodes() {
    this.dayClueNodes.forEach(e => {
      this.setNodeActive(e, !1);
    });
  }
  anchorMagnifierTargetToBg() {
    const e = this.bgNode,
      i = this.magnifierTargetNode;
    null != e && e.isValid && null != i && i.isValid && i.setWorldPosition(e.worldPosition);
  }
  beginSuccessSequence() {
    this.beginResultPhase(), this.showLevelSuccess();
  }
  beginFailSequence() {
    this.beginResultPhase(), __rea_outer_N.getInstance().showView(__rea_outer_v, __rea_outer_m.WIN_ANIMATION);
  }
  beginResultPhase() {
    this.phase >= 2 || (this.phase = 2, this.unregisterHandlers(), __rea_outer_y.getInstance().pauseTimer());
  }
  findTouchedClueIndex(e) {
    for (let i = 1; i <= V; i += 1) {
      const t = this.touchNodes[i - 1];
      if (null != t && t.active && !this.completedClues.has(i) && this.isPointInsideNode(t, e)) return i;
    }
    return -1;
  }
  logClueDebug(e, i) {
    i ? console.log(B, e, i) : console.log(B, e);
  }
  describeWorldBox(e) {
    const i = null == e ? void 0 : e.getComponent(__rea_outer_l);
    if (!i) return null;
    const t = i.getBoundingBoxToWorld();
    return {
      x: t.x,
      y: t.y,
      width: t.width,
      height: t.height
    };
  }
  describeWorldPos(e) {
    if (null == e || !e.isValid) return null;
    const i = e.worldPosition;
    return {
      x: i.x,
      y: i.y,
      z: i.z
    };
  }
  describeTouchProbe(e) {
    const i = [];
    for (let t = 1; t <= V; t += 1) {
      const s = this.touchNodes[t - 1];
      i.push({
        clueIndex: t,
        nodeName: (null == s ? void 0 : s.name) ?? `touch${t}`,
        exists: Boolean(null == s ? void 0 : s.isValid),
        active: Boolean(null == s ? void 0 : s.active),
        completed: this.completedClues.has(t),
        hit: !(null == s || !s.isValid) && this.isPointInsideNode(s, e),
        box: this.describeWorldBox(s)
      });
    }
    return i;
  }
  findFirstIncompleteClueIndex() {
    for (let e = 1; e <= V; e += 1) if (!this.completedClues.has(e)) return e - 1;
    return -1;
  }
  updatePriceLabel() {
    this.priceLabel && (this.priceLabel.string = `${this.currentPrice}`);
  }
  setIpIdle() {
    this.setNodeActive(this.ip1Node, !0), this.setNodeActive(this.ip2Node, !1);
  }
  setIpReact() {
    this.setNodeActive(this.ip1Node, !1), this.setNodeActive(this.ip2Node, !0);
  }
  playIpReact() {
    this.setIpReact(), this.unschedule(this.onIpReactHoldEnd), this.scheduleOnce(this.onIpReactHoldEnd, 2);
  }
  setTipText(e) {
    const i = __rea_outer_f.getInstance();
    this.tipLabel && (this.tipLabel.string = i.getKey(e), this.setNodeActive(this.tipLabel.node, !0)), this.setNodeActive(this.bubbleNode, !0);
  }
  playVoiceEffect(e) {
    __rea_outer_p.playVoice(e);
  }
  isPointInsideNode(e, i) {
    const t = e.getComponent(__rea_outer_r);
    if (t) return this.isPointInsideSprite(t, i);
    const s = e.getComponent(__rea_outer_l);
    return !!s && s.getBoundingBoxToWorld().contains(i);
  }
  isPointInsideSprite(e, i) {
    const t = e.node.getComponent(__rea_outer_l);
    return !!t && t.getBoundingBoxToWorld().contains(i);
  }
  getTouchWorldPoint(e) {
    const i = e.getUILocation();
    return new __rea_outer_d(i.x, i.y);
  }
  getTouchLocalPosition(e, i) {
    const s = e.getUILocation(),
      o = i.getComponent(__rea_outer_l);
    return o ? o.convertToNodeSpaceAR(new __rea_outer_t(s.x, s.y, 0)) : __rea_outer_t.ZERO;
  }
  resolveReferences() {
    var e, i, t, s, n, l, h;
    this.gameNode = this.node.getChildByPath("UIPanel/gameNode");
    const a = this.gameNode;
    this.bubbleNode = this.node.getChildByPath("UIPanel/bubble"), this.tipLabel = (null == (e = this.bubbleNode) || null == (e = e.getChildByPath("dialog_box/Label")) ? void 0 : e.getComponent(__rea_outer_c)) ?? null, this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.bgNode = (null == a ? void 0 : a.getChildByName("bg")) ?? null, this.cluesNode = (null == a ? void 0 : a.getChildByName("clues")) ?? null, this.circlesRoot = (null == a ? void 0 : a.getChildByName("circles")) ?? null, this.circleTemplate = (null == a ? void 0 : a.getChildByName("circle")) ?? null, this.magnifierNode = (null == a ? void 0 : a.getChildByPath("maskNode-black/Magnifier")) ?? null, this.magnifierCheckNode = (null == (i = this.magnifierNode) ? void 0 : i.getChildByName("MagnifierCheck")) ?? null, this.magnifierTargetNode = (null == (t = this.magnifierNode) ? void 0 : t.getChildByPath("maskNode/bg_1")) ?? null, this.blackNode = (null == a ? void 0 : a.getChildByName("black")) ?? null, this.magnifierTargetChildren = (null == (s = this.magnifierTargetNode) ? void 0 : s.children.slice()) ?? [], this.priceLabel = (null == a || null == (n = a.getChildByPath("ip_bg/price/Label")) ? void 0 : n.getComponent(__rea_outer_c)) ?? null, this.ip1Node = (null == a ? void 0 : a.getChildByPath("ip_bg/ip_1")) ?? null, this.ip2Node = (null == a ? void 0 : a.getChildByPath("ip_bg/ip_2")) ?? null, this.buttonDeal = (null == a || null == (l = a.getChildByName("buttonDeal")) ? void 0 : l.getComponent(__rea_outer_o)) ?? null;
    for (let e = 1; e <= V; e += 1) {
      var r;
      this.touchNodes[e - 1] = (null == (r = this.circlesRoot) ? void 0 : r.getChildByName(`touch${e}`)) ?? null;
    }
    this.touchNodes[12] = (null == (h = this.circlesRoot) ? void 0 : h.getChildByName("touch13")) ?? null, A.forEach((e, i) => {
      var t;
      this.dayClueNodes[i] = (null == (t = this.cluesNode) ? void 0 : t.getChildByName(e)) ?? null;
    }), this.logResolveReferences();
  }
  logResolveReferences() {
    var e, i, t, s, o, n, l, h;
    const a = [];
    for (let e = 1; e <= V; e += 1) {
      var r;
      null != (r = this.touchNodes[e - 1]) && r.isValid || a.push(`touch${e}`);
    }
    console.log(B, "resolveReferences", {
      hasGameNode: Boolean(null == (e = this.gameNode) ? void 0 : e.isValid),
      hasCirclesRoot: Boolean(null == (i = this.circlesRoot) ? void 0 : i.isValid),
      hasMagnifierNode: Boolean(null == (t = this.magnifierNode) ? void 0 : t.isValid),
      hasMagnifierCheck: Boolean(null == (s = this.magnifierCheckNode) ? void 0 : s.isValid),
      hasMagnifierTarget: Boolean(null == (o = this.magnifierTargetNode) ? void 0 : o.isValid),
      hasBlackNode: Boolean(null == (n = this.blackNode) ? void 0 : n.isValid),
      hasCircleTemplate: Boolean(null == (l = this.circleTemplate) ? void 0 : l.isValid),
      hasTouch13: Boolean(null == (h = this.touchNodes[12]) ? void 0 : h.isValid),
      missingTouchNodes: a,
      circlesRootPos: this.describeWorldPos(this.circlesRoot)
    });
  }
  setNodeActive(e, i) {
    null != e && e.isValid && (e.active = i);
  }
}) || D;
__rea_outer_i._RF.pop();
export { __recovered_export_0 as default };
