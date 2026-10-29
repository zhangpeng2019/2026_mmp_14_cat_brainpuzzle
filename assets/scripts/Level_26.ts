// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_26.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_i } from "cc";
import { Vec2 as __rea_outer_t } from "cc";
import { Node as __rea_outer_s } from "cc";
import { UITransform as __rea_outer_o } from "cc";
import { Vec3 as __rea_outer_n } from "cc";
import { tween as __rea_outer_l } from "cc";
import { instantiate as __rea_outer_c } from "cc";
import { UIOpacity as __rea_outer_a } from "cc";
import { Sprite as __rea_outer_h } from "cc";
import { Color as __rea_outer_r } from "cc";
import { Tween as __rea_outer_d } from "cc";
import { BlockInputEvents as __rea_outer_u } from "cc";
import { Label as __rea_outer_m } from "cc";
import { _decorator as __rea_outer_g } from "cc";
import { default as __rea_outer_N } from "./LevelBase";
import { default as __rea_outer_p } from "./clue-hit-tester";
import { default as __rea_outer_f } from "./AudioManager";
import { I18nController as __rea_outer_v } from "./i18n-controller";
import { UIManager as __rea_outer_k } from "./ui-manager";
import { UIHint as __rea_outer_C } from "./uihint";
import { GameController as __rea_outer_I } from "./GameController";
import { stopAllTweens as __rea_outer_T } from "./CocosCompat";
import { default as __rea_outer_w } from "./clue-gesture-detector";
import { SwipeDirection as __rea_outer_y } from "./clue-level-types";
let __recovered_export_0;
var b;
__rea_outer_i._RF.push({}, "ebafcv+1fxLGqvPTGIiukU1", "Level_26", void 0);
const {
    ccclass: S
  } = __rea_outer_g,
  D = "level26_1",
  P = "level26_2",
  H = .15;
var A = function (e) {
    return e.Swipe = "swipe", e.Click = "click", e.Drag = "drag", e;
  }(A || {}),
  _ = function (e) {
    return e[e.None = 0] = "None", e[e.SwipeUnlock = 1] = "SwipeUnlock", e[e.ClickUnlock = 2] = "ClickUnlock", e[e.Confirm = 3] = "Confirm", e[e.DragItem = 4] = "DragItem", e;
  }(_ || {});
const B = ["shoe_1", "flowerpot", "painting", "book", "lamp", "bear", "clock", "host", "collar"],
  R = [{
    id: 1,
    voiceKey: "26_2",
    hintKey: "level26_hint1",
    unlockKind: A.Click,
    swipeDirection: null,
    swipeHotspotName: null,
    unlockClickName: "swip1",
    dragItemName: null,
    dragHotspotName: null,
    dragZoneName: null,
    revealShowNames: ["shoe_1"],
    revealHideNames: ["shoe"],
    confirmTargetName: "shoe_1",
    circleTouchName: "touch1"
  }, {
    id: 2,
    voiceKey: "26_3",
    hintKey: "level26_hint2",
    unlockKind: A.Click,
    swipeDirection: null,
    swipeHotspotName: null,
    unlockClickName: "swip2",
    dragItemName: null,
    dragHotspotName: null,
    dragZoneName: null,
    revealShowNames: ["flowerpot"],
    revealHideNames: [],
    confirmTargetName: "flowerpot",
    circleTouchName: "touch2"
  }, {
    id: 3,
    voiceKey: "26_4",
    hintKey: "level26_hint3",
    unlockKind: A.Click,
    swipeDirection: null,
    swipeHotspotName: null,
    unlockClickName: "touch3",
    dragItemName: null,
    dragHotspotName: null,
    dragZoneName: null,
    revealShowNames: ["painting"],
    revealHideNames: [],
    confirmTargetName: "painting",
    circleTouchName: "touch3"
  }, {
    id: 4,
    voiceKey: "26_5",
    hintKey: "level26_hint4",
    unlockKind: A.Swipe,
    swipeDirection: __rea_outer_y.Left,
    swipeHotspotName: "swip4",
    unlockClickName: null,
    dragItemName: null,
    dragHotspotName: null,
    dragZoneName: null,
    revealShowNames: ["book"],
    revealHideNames: [],
    confirmTargetName: "book",
    circleTouchName: "touch4"
  }, {
    id: 5,
    voiceKey: "26_6",
    hintKey: "level26_hint5",
    unlockKind: A.Click,
    swipeDirection: null,
    swipeHotspotName: null,
    unlockClickName: "floor",
    dragItemName: null,
    dragHotspotName: null,
    dragZoneName: null,
    revealShowNames: [],
    revealHideNames: ["floor"],
    confirmTargetName: "touch5",
    circleTouchName: "touch5"
  }, {
    id: 6,
    voiceKey: "26_7",
    hintKey: "level26_hint6",
    unlockKind: A.Drag,
    swipeDirection: null,
    swipeHotspotName: null,
    unlockClickName: null,
    dragItemName: "lamp_1",
    dragHotspotName: "touch11",
    dragZoneName: "lamp_touchare",
    revealShowNames: ["lamp"],
    revealHideNames: ["lamp_1"],
    confirmTargetName: "touch6",
    circleTouchName: "touch6"
  }, {
    id: 7,
    voiceKey: "26_8",
    hintKey: "level26_hint7",
    unlockKind: A.Drag,
    swipeDirection: null,
    swipeHotspotName: null,
    unlockClickName: null,
    dragItemName: "scissors",
    dragHotspotName: null,
    dragZoneName: "drag7_trigger",
    revealShowNames: ["bear"],
    revealHideNames: ["scissors"],
    confirmTargetName: "touch7",
    circleTouchName: "touch7"
  }, {
    id: 8,
    voiceKey: "26_9",
    hintKey: "level26_hint8",
    unlockKind: A.Click,
    swipeDirection: null,
    swipeHotspotName: null,
    unlockClickName: "swip8",
    dragItemName: null,
    dragHotspotName: null,
    dragZoneName: null,
    revealShowNames: ["clock"],
    revealHideNames: [],
    confirmTargetName: "clock",
    circleTouchName: "touch8"
  }, {
    id: 9,
    voiceKey: "26_10",
    hintKey: "level26_hint9",
    unlockKind: A.Click,
    swipeDirection: null,
    swipeHotspotName: null,
    unlockClickName: "swip9",
    dragItemName: null,
    dragHotspotName: null,
    dragZoneName: null,
    revealShowNames: ["host"],
    revealHideNames: [],
    confirmTargetName: "touch9",
    circleTouchName: "touch9"
  }, {
    id: 10,
    voiceKey: "26_11",
    hintKey: "level26_hint10",
    unlockKind: A.Swipe,
    swipeDirection: __rea_outer_y.Up,
    swipeHotspotName: "swip10",
    unlockClickName: null,
    dragItemName: null,
    dragHotspotName: null,
    dragZoneName: null,
    revealShowNames: ["collar"],
    revealHideNames: [],
    confirmTargetName: "gou",
    circleTouchName: "touch10"
  }];
__recovered_export_0 = S("Level_26")(b = class extends __rea_outer_N {
  constructor(...e) {
    super(...e), this.phase = 0, this.winstate = !1, this.gameNode = null, this.bubbleNode = null, this.dialogBoxNode = null, this.tipLabel = null, this.backBgNode = null, this.end1Node = null, this.circleTemplate = null, this.circlesRoot = null, this.clicksRoot = null, this.swipsRoot = null, this.dragsRoot = null, this.scissors1Node = null, this.scissors2Node = null, this.bearNode = null, this.gouNode = null, this.clueRuntimes = [], this.spawnedCircles = [], this.nodeCache = new Map(), this.isInteractionLocked = !0, this.voiceToken = 0, this.currentVoiceEffectKey = "", this.touchSessionKind = _.None, this.touchStartPoint = new __rea_outer_t(), this.activeClueId = -1, this.activeDragState = null, this.scissorsFrameToken = 0, this.onTouchStart = e => {
      if (1 !== this.phase || this.isInteractionLocked) return;
      const i = this.getTouchWorldPoint(e);
      this.touchStartPoint = i.clone(), this.touchSessionKind = _.None, this.activeClueId = -1;
      const t = this.findDragRuntimeAtPoint(i);
      if (null != t && t.dragItem) return this.touchSessionKind = _.DragItem, this.activeClueId = t.definition.id, void this.beginDrag(t, e);
      const s = this.findConfirmRuntimeAtPoint(i);
      if (s) return this.touchSessionKind = _.Confirm, void (this.activeClueId = s.definition.id);
      const o = this.findSwipeUnlockRuntimeAtPoint(i);
      if (o) return this.touchSessionKind = _.SwipeUnlock, void (this.activeClueId = o.definition.id);
      const n = this.findClickUnlockRuntimeAtPoint(i);
      n && (this.touchSessionKind = _.ClickUnlock, this.activeClueId = n.definition.id);
    }, this.onTouchMove = e => {
      1 !== this.phase || this.isInteractionLocked || this.touchSessionKind === _.DragItem && this.activeDragState && this.setDragNodePositionFromTouch(e, this.activeDragState.dragNode, this.activeDragState.dragParent, this.activeDragState.touchOffset);
    }, this.onTouchEnd = e => {
      if (1 !== this.phase || this.isInteractionLocked) return void this.resetTouchSession();
      const i = this.touchSessionKind,
        t = this.activeClueId,
        s = this.touchStartPoint.clone(),
        o = this.getTouchWorldPoint(e);
      if (i === _.DragItem) return this.handleDragEnd(t), void this.resetTouchSession();
      this.resetTouchSession();
      const n = this.findRuntimeById(t);
      if (n && !n.isDone) if (i !== _.SwipeUnlock) {
        if (i !== _.ClickUnlock) {
          if (i === _.Confirm) {
            if (!n.isUnlocked) return;
            (this.isPointInsideNode(n.confirmTarget, o) || this.isPointInsideNode(n.confirmTarget, s)) && this.completeClue(n);
          }
        } else (this.isPointInsideNode(n.unlockClickNode, o) || this.isPointInsideNode(n.unlockClickNode, s)) && this.unlockClueImmediate(n);
      } else this.handleSwipeUnlock(n, s, o);
    }, this.onTouchCancel = () => {
      this.touchSessionKind === _.DragItem && this.resetActiveDrag(), this.resetTouchSession();
    }, this.onBubbleHide = () => {
      this.isValid && this.hideBubble();
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.buildClueRuntimes(), this.allItemNum = 10, this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.enterPhase0();
  }
  onDestroy() {
    this.unscheduleAllCallbacks(), this.unregisterHandlers(), this.stopCurrentVoiceEffect(), __rea_outer_f.stopOneEffect(D), __rea_outer_f.stopOneEffect(P), this.stopTrackedTweens(), this.activeDragState = null, this.clearSpawnedCircles();
  }
  handleTimeExpired() {
    return !!(this.phase >= 2 || this.winstate);
  }
  showHint() {
    if (1 !== this.phase) return;
    const e = this.findFirstIncompleteRuntime();
    if (!e) return;
    const i = __rea_outer_v.getInstance().getKey(e.definition.hintKey);
    __rea_outer_k.getInstance().showView(__rea_outer_C, void 0, {
      body: i
    });
  }
  getGameProgressSnapshot() {
    const e = this.clueRuntimes.filter(e => e.isDone).length;
    return {
      progress: e / 10,
      label: `${e}/10`
    };
  }
  markAllTasksCompleted() {
    this.clueRuntimes.forEach(e => {
      e.isUnlocked = !0, e.isDone = !0;
    }), this.hasInstallNum = 10, this.phase = 2, this.winstate = !0, this.isInteractionLocked = !0, this.unregisterHandlers(), this.hideBubble();
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.isInteractionLocked = !0, this.voiceToken = 0, this.currentVoiceEffectKey = "", this.touchSessionKind = _.None, this.activeClueId = -1, this.activeDragState = null, this.scissorsFrameToken += 1, this.hasInstallNum = 0, this.clueRuntimes.forEach(e => {
      e.isUnlocked = !1, e.isDone = !1;
    }), this.hideBubble(), this.clearSpawnedCircles(), this.applyPhase0Visibility();
  }
  enterPhase0() {
    this.phase = 0, this.isInteractionLocked = !0, __rea_outer_f.playMusic("bgm4", !0, .5), this.applyPhase0Visibility(), this.setInputBlocked(!0), this.scheduleOnce(() => {
      this.isValid && 0 === this.phase && this.playVoiceEffect("26_1", () => {
        this.isValid && 0 === this.phase && (this.hideBubble(), this.setInputBlocked(!1), this.enterPhase1());
      });
    }, .25);
  }
  skipOpeningToPlay() {
    return 0 === this.phase && (this.voiceToken += 1, this.stopOpeningDialogue(), this.hideBubble(), this.setInputBlocked(!1), this.enterPhase1(), !0);
  }
  enterPhase1() {
    0 === this.phase && (this.phase = 1, this.isInteractionLocked = !1, this.registerHandlers(), __rea_outer_I.getInstance().refreshGameProgress());
  }
  beginAllFoundSequence() {
    if (this.phase >= 2) return;
    this.isInteractionLocked = !0, this.unregisterHandlers(), this.resetActiveDrag(), this.voiceToken += 1, this.stopCurrentVoiceEffect(), this.hideBubble(), __rea_outer_I.getInstance().pauseTimer();
    const e = () => {
      !this.isValid || this.phase >= 2 || this.enterPhase2Success();
    };
    __rea_outer_f.playEffect_1(D, () => {
      !this.isValid || this.phase >= 2 || __rea_outer_f.playEffect_1(P, e);
    }), this.scheduleOnce(e, 8);
  }
  enterPhase2Success() {
    this.phase >= 2 || (this.phase = 2, this.winstate = !0, this.isInteractionLocked = !0, this.setNodeActive(this.end1Node, !0), this.playVoiceEffect("26_12", () => {
      this.isValid && (this.hideBubble(), this.showLevelSuccess(0));
    }));
  }
  applyPhase0Visibility() {
    B.forEach(e => {
      this.setNodeActive(this.getGameChild(e), !1);
    }), this.setNodeActive(this.scissors1Node, !1), this.setNodeActive(this.scissors2Node, !1), this.setNodeActive(this.end1Node, !1), this.setNodeActive(this.circleTemplate, !1), this.setNodeActive(this.getGameChild("shoe"), !0), this.setNodeActive(this.getGameChild("floor"), !0), this.setNodeActive(this.getGameChild("scissors"), !0), this.setNodeActive(this.getGameChild("lamp_1"), !0), this.setNodeActive(this.getGameChild("man"), !0), this.setNodeActive(this.getGameChild("girl"), !0), this.setNodeActive(this.gouNode, !0), this.setNodeActive(this.getGameChild("bg"), !0), this.setNodeActive(this.circlesRoot, !0);
  }
  registerHandlers() {
    var e;
    null != (e = this.node) && e.isValid && (this.node.on(__rea_outer_s.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(__rea_outer_s.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(__rea_outer_s.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(__rea_outer_s.EventType.TOUCH_CANCEL, this.onTouchCancel, this));
  }
  unregisterHandlers() {
    var e;
    null != (e = this.node) && e.isValid && (this.node.off(__rea_outer_s.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(__rea_outer_s.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(__rea_outer_s.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(__rea_outer_s.EventType.TOUCH_CANCEL, this.onTouchCancel, this));
  }
  resetTouchSession() {
    this.touchSessionKind = _.None, this.activeClueId = -1;
  }
  handleSwipeUnlock(e, i, t) {
    e.isUnlocked || null === e.definition.swipeDirection || __rea_outer_w.isSwipeMatching(i, t, e.definition.swipeDirection) && this.unlockClueImmediate(e);
  }
  handleDragEnd(e) {
    const i = this.findRuntimeById(e),
      t = this.activeDragState;
    if (!i || !t || i.isUnlocked) return void this.resetActiveDrag();
    this.isNodeOverlapping(t.dragNode, i.dragZone) ? (this.activeDragState = null, 6 !== i.definition.id ? 7 !== i.definition.id ? (this.hideDragItem(t), this.unlockClueImmediate(i)) : this.playScissorsCutUnlock(i, t) : this.playBroomSweepUnlock(i, t)) : this.resetActiveDrag();
  }
  unlockClueImmediate(e) {
    e.isUnlocked || e.isDone || (e.isUnlocked = !0, e.definition.revealHideNames.forEach(e => {
      this.setNodeActive(this.getGameChild(e), !1);
    }), e.definition.revealShowNames.forEach(e => {
      this.setNodeActive(this.getGameChild(e), !0);
    }));
  }
  playBroomSweepUnlock(e, i) {
    this.isInteractionLocked = !0;
    const t = i.dragNode,
      s = e.dragZone;
    if (null == t || !t.isValid || null == s || !s.isValid) return this.hideDragItem(i), this.unlockClueImmediate(e), void (this.isInteractionLocked = !1);
    const c = t.parent,
      a = null == c ? void 0 : c.getComponent(__rea_outer_o);
    if (null == c || !c.isValid || !a) return this.hideDragItem(i), this.unlockClueImmediate(e), void (this.isInteractionLocked = !1);
    const h = a.convertToNodeSpaceAR(s.worldPosition);
    t.setPosition(h), __rea_outer_T(t);
    const r = new __rea_outer_n(h.x - 40, h.y, h.z),
      d = new __rea_outer_n(h.x + 40, h.y, h.z);
    __rea_outer_l(t).to(H, {
      position: r
    }).to(H, {
      position: d
    }).to(H, {
      position: r
    }).to(H, {
      position: d
    }).call(() => {
      this.isValid && (this.hideDragItem(i), this.unlockClueImmediate(e), this.isInteractionLocked = !1);
    }).start();
  }
  playScissorsCutUnlock(e, i) {
    this.isInteractionLocked = !0, this.hideDragItem(i);
    const t = this.scissors1Node,
      s = this.scissors2Node,
      o = this.bearNode,
      c = this.gameNode;
    if (!(null != t && t.isValid && null != s && s.isValid && null != o && o.isValid && null != c && c.isValid)) return this.unlockClueImmediate(e), void (this.isInteractionLocked = !1);
    const a = new __rea_outer_n(o.position.x, o.position.y + -80, 0),
      h = new __rea_outer_n(o.position.x, o.position.y + 60, 0);
    t.setPosition(a), s.setPosition(a), this.setNodeActive(t, !0), this.setNodeActive(s, !1), this.scissorsFrameToken += 1;
    const r = this.scissorsFrameToken;
    this.startScissorsFrameLoop(r), __rea_outer_T(t), __rea_outer_T(s);
    const d = e => {
      __rea_outer_l(e).to(.6, {
        position: h
      }).start();
    };
    d(t), d(s), this.scheduleOnce(() => {
      this.isValid && r === this.scissorsFrameToken && (this.scissorsFrameToken += 1, __rea_outer_T(t), __rea_outer_T(s), this.setNodeActive(t, !1), this.setNodeActive(s, !1), this.unlockClueImmediate(e), this.isInteractionLocked = !1);
    }, .6);
  }
  startScissorsFrameLoop(e) {
    let i = !0;
    const t = () => {
      this.isValid && e === this.scissorsFrameToken && (this.setNodeActive(this.scissors1Node, i), this.setNodeActive(this.scissors2Node, !i), i = !i, this.scheduleOnce(t, .08));
    };
    this.scheduleOnce(t, .08);
  }
  completeClue(e) {
    !e.isUnlocked || e.isDone || this.isInteractionLocked || (e.isDone = !0, this.hasInstallNum = this.clueRuntimes.filter(e => e.isDone).length, __rea_outer_I.getInstance().refreshGameProgress(), this.spawnCircleAt(e.circleTouch), this.hasInstallNum >= 10 ? this.beginAllFoundSequence() : (__rea_outer_f.playEffect_1(D), this.playVoiceEffect(e.definition.voiceKey, () => {})));
  }
  spawnCircleAt(e) {
    const i = this.circleTemplate,
      t = this.circlesRoot;
    if (null == i || !i.isValid || null == t || !t.isValid || null == e || !e.isValid) return;
    const s = __rea_outer_c(i);
    s.active = !0, s.setParent(t), s.setWorldPosition(e.worldPosition), this.spawnedCircles.push(s);
    const o = s.getComponent(__rea_outer_a) ?? s.addComponent(__rea_outer_a);
    o.opacity = 0;
    const n = s.getComponent(__rea_outer_h);
    if (n) {
      const e = n.color;
      n.color = new __rea_outer_r(e.r, e.g, e.b, 0), __rea_outer_d.stopAllByTarget(n), __rea_outer_l(n).to(.35, {
        color: new __rea_outer_r(e.r, e.g, e.b, 255)
      }).start();
    }
    __rea_outer_T(s), __rea_outer_l(o).to(.35, {
      opacity: 255
    }).start();
  }
  beginDrag(e, i) {
    const t = e.dragItem;
    if (null == t || !t.isValid || !t.activeInHierarchy) return;
    const s = t.parent;
    if (!s) return;
    const n = t.position.clone(),
      l = t.getSiblingIndex(),
      c = t.worldPosition.clone(),
      a = this.gameNode ?? s;
    t.setParent(a);
    const h = a.getComponent(__rea_outer_o);
    if (h) {
      const e = h.convertToNodeSpaceAR(c);
      t.setPosition(e);
    }
    t.setSiblingIndex(a.children.length - 1);
    const r = this.calculateTouchOffset(i, t, a);
    this.setDragNodePositionFromTouch(i, t, a, r), this.activeDragState = {
      clueId: e.definition.id,
      dragNode: t,
      dragParent: a,
      touchOffset: r,
      originParent: s,
      originPosition: n,
      originSiblingIndex: l
    };
  }
  resetActiveDrag() {
    this.activeDragState && (this.restoreDragNode(this.activeDragState), this.activeDragState = null);
  }
  restoreDragNode(e) {
    const i = e.dragNode;
    i.isValid && (i.setParent(e.originParent), i.setSiblingIndex(e.originSiblingIndex), i.setPosition(e.originPosition));
  }
  hideDragItem(e) {
    const i = e.dragNode;
    i.isValid && (this.restoreDragNode(e), this.setNodeActive(i, !1));
  }
  findDragRuntimeAtPoint(e) {
    for (let i = this.clueRuntimes.length - 1; i >= 0; i -= 1) {
      const t = this.clueRuntimes[i];
      if (!t.isDone && !t.isUnlocked && t.definition.unlockKind === A.Drag && this.isPointInsideNode(t.dragHotspot ?? t.dragItem, e)) return t;
    }
    return null;
  }
  findConfirmRuntimeAtPoint(e) {
    for (let i = this.clueRuntimes.length - 1; i >= 0; i -= 1) {
      const t = this.clueRuntimes[i];
      if (!t.isDone && t.isUnlocked && this.isPointInsideNode(t.confirmTarget, e)) return t;
    }
    return null;
  }
  findSwipeUnlockRuntimeAtPoint(e) {
    for (const i of this.clueRuntimes) if (!i.isDone && !i.isUnlocked && i.definition.unlockKind === A.Swipe) {
      if (this.isPointInsideNode(i.swipeHotspot, e)) return i;
      if (10 === i.definition.id && this.isPointInsideNode(this.gouNode, e)) return i;
    }
    return null;
  }
  findClickUnlockRuntimeAtPoint(e) {
    for (const i of this.clueRuntimes) if (!i.isDone && !i.isUnlocked && i.definition.unlockKind === A.Click && this.isPointInsideNode(i.unlockClickNode, e)) return i;
    return null;
  }
  findRuntimeById(e) {
    return this.clueRuntimes.find(i => i.definition.id === e) ?? null;
  }
  findFirstIncompleteRuntime() {
    return this.clueRuntimes.find(e => !e.isDone) ?? null;
  }
  playVoiceEffect(e, i) {
    this.stopCurrentVoiceEffect(), this.voiceToken += 1;
    const t = this.voiceToken;
    this.showVoiceBubble(e);
    let s = !1;
    const o = () => {
        !s && this.isValid && t === this.voiceToken && (s = !0, this.unschedule(n), this.currentVoiceEffectKey === e && (this.currentVoiceEffectKey = ""), i());
      },
      n = () => {
        o();
      };
    this.scheduleOnce(n, 2.5), this.currentVoiceEffectKey = e, __rea_outer_f.playEffect_1(e, o);
  }
  stopCurrentVoiceEffect() {
    __rea_outer_f.stopVoice(), this.currentVoiceEffectKey && (__rea_outer_f.stopOneEffect(this.currentVoiceEffectKey), this.currentVoiceEffectKey = "");
  }
  showVoiceBubble(e) {
    const i = __rea_outer_v.getInstance();
    this.tipLabel && (this.tipLabel.string = i.getKey(e), this.setNodeActive(this.tipLabel.node, !0)), this.setNodeActive(this.dialogBoxNode, !0), this.setNodeActive(this.bubbleNode, !0), this.unschedule(this.onBubbleHide), this.scheduleOnce(this.onBubbleHide, 2.5);
  }
  hideBubble() {
    var e;
    this.unschedule(this.onBubbleHide), this.setNodeActive(this.bubbleNode, !1), this.setNodeActive(this.dialogBoxNode, !1), this.setNodeActive((null == (e = this.tipLabel) ? void 0 : e.node) ?? null, !1);
  }
  setInputBlocked(e) {
    const i = this.backBgNode;
    if (null == i || !i.isValid) return;
    i.active = e;
    const t = i.getComponent(__rea_outer_u);
    t && (t.enabled = e);
  }
  clearSpawnedCircles() {
    this.spawnedCircles.forEach(e => {
      null != e && e.isValid && (__rea_outer_T(e), e.destroy());
    }), this.spawnedCircles.length = 0;
  }
  stopTrackedTweens() {
    [this.getGameChild("lamp_1"), this.getGameChild("scissors"), this.scissors1Node, this.scissors2Node, ...this.spawnedCircles].forEach(e => {
      null != e && e.isValid && __rea_outer_T(e);
    });
  }
  setNodeActive(e, i) {
    null != e && e.isValid && (e.active = i);
  }
  isPointInsideNode(e, i) {
    if (null == e || !e.isValid || !e.activeInHierarchy) return !1;
    const t = e.getComponent(__rea_outer_o);
    return !!t && t.getBoundingBoxToWorld().contains(i);
  }
  isNodeOverlapping(e, i) {
    return __rea_outer_p.isDragNearTarget(e, i);
  }
  getTouchWorldPoint(e) {
    const i = e.getUILocation();
    return new __rea_outer_t(i.x, i.y);
  }
  getTouchLocalPosition(e, i) {
    const t = e.getUILocation(),
      s = i.getComponent(__rea_outer_o);
    return s ? s.convertToNodeSpaceAR(new __rea_outer_n(t.x, t.y, 0)) : __rea_outer_n.ZERO.clone();
  }
  calculateTouchOffset(e, i, t) {
    const s = this.getTouchLocalPosition(e, t);
    return new __rea_outer_n(i.position.x - s.x, i.position.y - s.y, 0);
  }
  setDragNodePositionFromTouch(e, i, t, s) {
    const o = this.getTouchLocalPosition(e, t);
    i.setPosition(o.x + s.x, o.y + s.y, i.position.z);
  }
  getGameChild(e) {
    var i;
    if (this.nodeCache.has(e)) return this.nodeCache.get(e) ?? null;
    const t = (null == (i = this.gameNode) ? void 0 : i.getChildByName(e)) ?? null;
    return this.nodeCache.set(e, t), t;
  }
  buildClueRuntimes() {
    this.clueRuntimes.length = 0, R.forEach(e => {
      var i, t, s, o, n, l, c;
      const a = e.swipeHotspotName ? (null == (i = this.swipsRoot) ? void 0 : i.getChildByName(e.swipeHotspotName)) ?? null : null,
        h = e.unlockClickName ? (null == (t = this.clicksRoot) ? void 0 : t.getChildByName(e.unlockClickName)) ?? (null == (s = this.swipsRoot) ? void 0 : s.getChildByName(e.unlockClickName)) ?? this.getGameChild(e.unlockClickName) : null,
        r = e.dragItemName ? this.getGameChild(e.dragItemName) : null,
        d = e.dragHotspotName ? (null == (o = this.clicksRoot) ? void 0 : o.getChildByName(e.dragHotspotName)) ?? this.getGameChild(e.dragHotspotName) : null,
        u = e.dragZoneName ? (null == (n = this.dragsRoot) ? void 0 : n.getChildByName(e.dragZoneName)) ?? this.getGameChild(e.dragZoneName) : null,
        m = (null == (l = this.clicksRoot) ? void 0 : l.getChildByName(e.confirmTargetName)) ?? this.getGameChild(e.confirmTargetName),
        g = (null == (c = this.clicksRoot) ? void 0 : c.getChildByName(e.circleTouchName)) ?? null;
      g || console.warn(`[Level_26] missing circle align touch ${e.circleTouchName}`), m || console.warn(`[Level_26] missing confirm target ${e.confirmTargetName}`), this.clueRuntimes.push({
        definition: e,
        swipeHotspot: a,
        unlockClickNode: h,
        dragItem: r,
        dragHotspot: d,
        dragZone: u,
        confirmTarget: m,
        circleTouch: g,
        isUnlocked: !1,
        isDone: !1
      });
    });
  }
  resolveReferences() {
    var e, i, t, s, o, n, l, c, a, h, r;
    this.gameNode = this.node.getChildByPath("UIPanel/gameNode"), this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.bubbleNode = this.node.getChildByPath("UIPanel/bubble"), this.dialogBoxNode = (null == (e = this.bubbleNode) ? void 0 : e.getChildByName("dialog_box")) ?? null, this.tipLabel = (null == (i = this.bubbleNode) || null == (i = i.getChildByPath("dialog_box/Label")) ? void 0 : i.getComponent(__rea_outer_m)) ?? null, this.end1Node = this.node.getChildByPath("UIPanel/end_1"), this.circleTemplate = (null == (t = this.gameNode) ? void 0 : t.getChildByName("circle")) ?? null, this.circlesRoot = (null == (s = this.gameNode) ? void 0 : s.getChildByName("circles")) ?? null, this.clicksRoot = (null == (o = this.gameNode) ? void 0 : o.getChildByName("clicks")) ?? null, this.swipsRoot = (null == (n = this.gameNode) ? void 0 : n.getChildByName("swips")) ?? null, this.dragsRoot = (null == (l = this.gameNode) ? void 0 : l.getChildByName("drags")) ?? null, this.scissors1Node = (null == (c = this.gameNode) ? void 0 : c.getChildByName("scissors_1")) ?? null, this.scissors2Node = (null == (a = this.gameNode) ? void 0 : a.getChildByName("scissors_2")) ?? null, this.bearNode = (null == (h = this.gameNode) ? void 0 : h.getChildByName("bear")) ?? null, this.gouNode = (null == (r = this.gameNode) ? void 0 : r.getChildByName("gou")) ?? null, this.gameNode || console.warn("[Level_26] missing UIPanel/gameNode");
  }
}) || b;
__rea_outer_i._RF.pop();
export { __recovered_export_0 as default };
