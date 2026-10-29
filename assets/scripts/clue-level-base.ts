// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/clue-level-base.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { applyDecoratedDescriptor as __rea_outer_t } from "./rollupPluginModLoBabelHelpers";
import { initializerDefineProperty as __rea_outer_i } from "./rollupPluginModLoBabelHelpers";
import { cclegacy as __rea_outer_s } from "cc";
import { Color as __rea_outer_n } from "cc";
import { Node as __rea_outer_o } from "cc";
import { _decorator as __rea_outer_r } from "cc";
import { Tween as __rea_outer_l } from "cc";
import { UITransform as __rea_outer_a } from "cc";
import { Vec3 as __rea_outer_h } from "cc";
import { Sprite as __rea_outer_c } from "cc";
import { tween as __rea_outer_u } from "cc";
import { Label as __rea_outer_d } from "cc";
import { BlockInputEvents as __rea_outer_g } from "cc";
import { default as __rea_outer_f } from "./LevelBase";
import { default as __rea_outer_p } from "./AudioManager";
import { I18nController as __rea_outer_v } from "./i18n-controller";
import { UIManager as __rea_outer_b } from "./ui-manager";
import { UIHint as __rea_outer_m } from "./uihint";
import { GAME_DEBUG as __rea_outer_C } from "./game-config";
import { stopAllTweens as __rea_outer_k } from "./CocosCompat";
import { GameController as __rea_outer_I } from "./GameController";
import { default as __rea_outer_T } from "./ActionSystem";
import { resolveClueNaming as __rea_outer_S } from "./clue-level-types";
import { ClueEffectKind as __rea_outer_y } from "./clue-level-types";
import { DEFAULT_INTRO_HOLD_SECONDS as __rea_outer_P } from "./clue-level-types";
import { DEFAULT_INTRO_DELAY as __rea_outer_N } from "./clue-level-types";
import { ClueTriggerKind as __rea_outer_A } from "./clue-level-types";
import { formatCluePath as __rea_outer_w } from "./clue-level-types";
import { CONFIRM_HIDDEN_ALPHA as __rea_outer_B } from "./clue-level-types";
import { default as __rea_outer_D } from "./clue-node-resolver";
import { default as __rea_outer_L } from "./clue-progress-tracker";
import { default as __rea_outer_O } from "./clue-gesture-detector";
import { default as __rea_outer_E } from "./clue-effect-runner";
import { default as __rea_outer_H } from "./clue-hit-tester";
let __recovered_export_0, __recovered_export_1;
var V, R, M, U, K, x, _, F, G, $, W, z;
__rea_outer_s._RF.push({}, "731eaKCGcVNh5JVn/ESeV4W", "clue-level-base", void 0);
const {
    ccclass: Z,
    property: j
  } = __rea_outer_r,
  J = new __rea_outer_n(255, 0, 0, 90);
let Q = __recovered_export_0 = (V = Z("ClueNodeOverride"), R = j({
  tooltip: "配置里写的节点路径"
}), M = j(__rea_outer_o), V((x = __rea_outer_t((K = class {
  constructor() {
    __rea_outer_i(this, "path", x, this), __rea_outer_i(this, "node", _, this);
  }
}).prototype, "path", [R], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return "";
  }
}), _ = __rea_outer_t(K.prototype, "node", [M], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), U = K)) || U);
__recovered_export_1 = (F = Z("ClueLevelBase"), G = j({
  type: [Q],
  tooltip: "按路径解析失败时的手动兜底，一般留空"
}), F((z = __rea_outer_t((W = class extends __rea_outer_f {
  constructor(...e) {
    super(...e), __rea_outer_i(this, "nodeOverrides", z, this), this.phase = 0, this.winstate = !1, this.config = null, this.naming = __rea_outer_S(), this.resolver = null, this.tracker = null, this.effectRunner = null, this.session = null, this.isInteractionLocked = !1, this.bubbleNode = null, this.tipLabel = null, this.blockNode = null, this.breathNodes = [], this.onTouchStart = e => {
      if (!this.isPlayable()) return;
      const t = __rea_outer_H.getTouchPoint(e);
      this.session = this.beginDragSession(t) ?? this.beginStageSession(t, "confirm") ?? this.beginStageSession(t, "unlock");
    }, this.onTouchMove = e => {
      var t, i;
      const s = this.session;
      if (!s || !this.isPlayable()) return;
      const n = __rea_outer_H.getTouchPoint(e);
      if (s.swipeRoundTrip) {
        const e = __rea_outer_O.updateHorizontalRoundTrip(s.swipeRoundTrip, n.x);
        if (this.onSwipeRoundTripProgress(s.clueId, __rea_outer_O.getRoundTripProgress(s.swipeRoundTrip)), e) {
          if (this.session = null, "unlock" === s.stageKind) return void this.completeUnlockStage(s.clueId);
          this.completeConfirmStage(s.clueId);
        }
      } else null != (t = s.dragItem) && t.isValid && null != (i = s.dragParent) && i.isValid && s.touchOffset && this.setDragNodePositionFromUiPoint(n, s.dragItem, s.dragParent, s.touchOffset);
    }, this.onTouchEnd = e => {
      const t = this.session;
      if (this.session = null, !t || !this.isPlayable()) return void this.restoreDragItem(t);
      const i = __rea_outer_H.getTouchPoint(e);
      t.dragItem ? this.finishDragSession(t) : this.finishStageSession(t, i);
    }, this.onTouchCancel = () => {
      this.restoreDragItem(this.session), this.session = null;
    }, this.hideClueBubble = () => {
      this.isValid && 1 === this.phase && this.hideBubble();
    };
  }
  getClueLevelConfig() {
    return null;
  }
  onLoad() {
    super.onLoad();
    const e = this.getClueLevelConfig();
    e ? (this.config = e, this.naming = __rea_outer_S(e.naming), this.resolver = new __rea_outer_D(this.node, this.naming, this.buildOverrideMap()), this.tracker = new __rea_outer_L(e.clues), this.effectRunner = new __rea_outer_E(this.resolver, (e, t) => this.onCustomEffect(e, t)), this.resolver.validate(e), this.applyDegradations(), this.reportMissingNodes(), this.cacheSharedNodes(), this.allItemNum = this.tracker.getTotalCount(), this.hasInstallNum = 0) : console.error(`[ClueLevelBase] ${this.node.name} 未提供 ClueLevelConfig，关卡不会启动`);
  }
  start() {
    this.config && (this.resetLevelState(), this.enterIntroPhase());
  }
  onDestroy() {
    var e;
    this.unscheduleAllCallbacks(), __rea_outer_p.stopLevelAudio(), this.unregisterInteractionHandlers(), this.stopBreathAnimations(), null == (e = this.effectRunner) || e.stopAll(), __rea_outer_l.stopAllByTag(710), this.session = null;
  }
  showHint() {
    if (1 !== this.phase || !this.config || !this.tracker) return;
    const e = this.tracker.resolveNextHintId();
    if (null === e) return;
    const t = this.config.hintKeyPrefix ?? `level${this.config.levelId}_hint`,
      i = __rea_outer_v.getInstance().getKey(`${t}${e}`);
    __rea_outer_b.getInstance().showView(__rea_outer_m, void 0, {
      body: i
    });
  }
  getGameProgressSnapshot() {
    var e;
    return (null == (e = this.tracker) ? void 0 : e.getSnapshot()) ?? null;
  }
  markAllTasksCompleted() {
    var e;
    super.markAllTasksCompleted(), this.phase = 2, this.winstate = !0, this.isInteractionLocked = !0, null == (e = this.tracker) || e.markAllDone(), this.unregisterInteractionHandlers(), this.stopBreathAnimations(), this.hideBubble();
  }
  onPhase1Started() {}
  onClueUnlocked(e) {}
  onClueCompleted(e) {}
  onDragItemStarted(e) {}
  isClueInteractionAllowed(e, t) {
    return !0;
  }
  onCustomEffect(e, t) {
    return !1;
  }
  onSwipeRoundTripProgress(e, t) {}
  onBeforeSuccess(e) {
    e();
  }
  findLevelNode(e) {
    var t;
    return (null == (t = this.resolver) ? void 0 : t.resolveNode(e)) ?? null;
  }
  playDialogue(e, t) {
    this.showBubble(e, t ?? e);
  }
  hideDialogue() {
    this.hideBubble();
  }
  resolveBubblePointerIndex(e, t) {
    return 0;
  }
  applyBubblePointer(e) {}
  resetLevelState() {
    var e;
    this.phase = 0, this.winstate = !1, this.isInteractionLocked = !1, this.session = null, this.hasInstallNum = 0, null == (e = this.tracker) || e.reset(), this.applyDegradations(), this.applyInitialRevealState(), this.hideBubble(), this.prepareConfirmHotspots(), this.applyHotspotDebugTint();
  }
  applyInitialRevealState() {
    this.config.clues.forEach(e => {
      var t;
      null == (t = e.unlock) || null == (t = t.effects) || t.forEach(e => {
        if (e.kind !== __rea_outer_y.Show && e.kind !== __rea_outer_y.Hide) return;
        const t = this.resolver.resolveNode(e.target);
        null != t && t.isValid && (t.active = e.kind === __rea_outer_y.Hide);
      });
    });
  }
  skipOpeningToPlay() {
    return 0 === this.phase && (this.stopOpeningDialogue(), this.hideBubble(), this.setBlockActive(!1), this.enterPlayPhase(), !0);
  }
  enterIntroPhase() {
    const e = this.config.intro;
    this.phase = 0, this.config.bgmKey && __rea_outer_p.playMusic(this.config.bgmKey, !0, .5), this.setBlockActive(!0), this.startBreathAnimations(), this.scheduleOnce(() => {
      this.isValid && 0 === this.phase && (this.showBubble(e.textKey, e.soundKey ?? e.textKey), this.scheduleOnce(() => {
        this.isValid && 0 === this.phase && (this.hideBubble(), this.setBlockActive(!1), this.enterPlayPhase());
      }, e.holdSeconds ?? __rea_outer_P));
    }, e.delay ?? __rea_outer_N);
  }
  enterPlayPhase() {
    0 === this.phase && (this.phase = 1, this.registerInteractionHandlers(), __rea_outer_I.getInstance().refreshGameProgress(), this.onPhase1Started());
  }
  enterOutroPhase() {
    if (this.phase >= 2) return;
    this.phase = 2, this.stopBreathAnimations();
    const e = this.config.outro.holdSeconds ?? __rea_outer_P;
    this.scheduleOnce(() => {
      this.isValid && this.winstate && (this.hideBubble(), this.showLevelSuccess());
    }, e);
  }
  handleAllCluesFound() {
    this.isInteractionLocked = !0, this.unregisterInteractionHandlers(), this.scheduleOnce(() => {
      this.isValid && (this.setBlockActive(!0), this.onBeforeSuccess(() => this.playOutroAndFinish()));
    }, 1);
  }
  playOutroAndFinish() {
    if (!this.isValid || !this.config) return;
    this.winstate = !0;
    const e = this.config.outro;
    this.showBubble(e.textKey, e.soundKey ?? e.textKey), this.enterOutroPhase();
  }
  registerInteractionHandlers() {
    this.node.on(__rea_outer_o.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(__rea_outer_o.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(__rea_outer_o.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(__rea_outer_o.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
  }
  unregisterInteractionHandlers() {
    var e;
    null != (e = this.node) && e.isValid && (this.node.off(__rea_outer_o.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(__rea_outer_o.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(__rea_outer_o.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(__rea_outer_o.EventType.TOUCH_CANCEL, this.onTouchCancel, this));
  }
  isPlayable() {
    return 1 === this.phase && !this.isInteractionLocked && !!this.tracker;
  }
  beginDragSession(e) {
    const t = this.collectDragCandidates();
    for (const s of t) {
      var i;
      if (!__rea_outer_H.isPointInside(s.item, e)) continue;
      const t = s.item,
        n = null == (i = this.findClue(s.clueIds[0])) || null == (i = i.unlock) ? void 0 : i.trigger,
        o = null != n && n.dragMove ? this.resolver.resolveNode(n.dragMove) : null,
        r = null != o && o.isValid ? o : t,
        l = r.parent;
      if (null == l || !l.isValid) continue;
      const a = t.active,
        h = (null == o ? void 0 : o.active) ?? !1;
      null != o && o.isValid && o !== t && (__rea_outer_O.shouldHideItemWhileDragging(n) && (t.active = !1), o.active = !0, o.setWorldPosition(t.worldPosition));
      const c = r.getSiblingIndex();
      r.setSiblingIndex(l.children.length - 1);
      const u = this.calculateTouchOffsetFromUiPoint(e, r, l);
      return this.setDragNodePositionFromUiPoint(e, r, l, u), this.onDragItemStarted(s.clueIds), {
        startPoint: e.clone(),
        stageKind: "unlock",
        clueId: -1,
        dragCandidates: s.clueIds,
        dragItem: r,
        dragGrabItem: null != o && o.isValid && o !== t ? t : null,
        dragParent: l,
        dragOrigin: r.position.clone(),
        dragSiblingIndex: c,
        dragGrabWasActive: a,
        dragMoveWasActive: h,
        touchOffset: u,
        swipeRoundTrip: null
      };
    }
    return null;
  }
  getTouchLocalPosition(e, t) {
    const i = t.getComponent(__rea_outer_a);
    return i ? i.convertToNodeSpaceAR(new __rea_outer_h(e.x, e.y, 0)) : __rea_outer_h.ZERO.clone();
  }
  calculateTouchOffsetFromUiPoint(e, t, i) {
    const s = this.getTouchLocalPosition(e, i);
    return new __rea_outer_h(t.position.x - s.x, t.position.y - s.y, 0);
  }
  setDragNodePositionFromUiPoint(e, t, i, s) {
    const n = this.getTouchLocalPosition(e, i);
    t.setPosition(n.x + s.x, n.y + s.y, t.position.z);
  }
  collectDragCandidates() {
    const e = new Map();
    return this.config.clues.forEach(t => {
      var i;
      const s = null == (i = t.unlock) ? void 0 : i.trigger;
      if ((null == s ? void 0 : s.kind) !== __rea_outer_A.DragToZone || !this.tracker.canUnlock(t.id)) return;
      if (!this.isClueInteractionAllowed(t.id, "unlock")) return;
      const n = this.resolver.getTriggerHotspotPath(s, t.id, !1),
        o = this.resolver.resolveNode(n);
      if (null == o || !o.isValid) return;
      const r = e.get(o);
      r ? r.push(t.id) : e.set(o, [t.id]);
    }), Array.from(e, ([e, t]) => ({
      item: e,
      clueIds: t
    }));
  }
  beginStageSession(e, t) {
    const i = [];
    this.config.clues.forEach(e => {
      if (!this.isStageActionable(e, t)) return;
      const s = this.getStage(e, t);
      if ("unlock" === t && __rea_outer_O.resolveKind(null == s ? void 0 : s.trigger) === __rea_outer_A.DragToZone) return;
      const n = this.resolver.getTriggerHotspotPath(null == s ? void 0 : s.trigger, e.id, "confirm" === t);
      i.push({
        value: e.id,
        node: this.resolver.resolveNode(n)
      });
    });
    const s = __rea_outer_H.pickTopmost(i, e);
    if (null === s) return null;
    const n = this.findClue(s),
      o = n ? this.getStage(n, t) : void 0,
      r = null == o ? void 0 : o.trigger,
      l = __rea_outer_O.resolveKind(r) === __rea_outer_A.SwipeRoundTrip ? __rea_outer_O.createRoundTripState(e.x, __rea_outer_O.resolveRoundTripCount(r), __rea_outer_O.resolveMinDistance(r)) : null;
    return {
      startPoint: e.clone(),
      stageKind: t,
      clueId: s,
      dragCandidates: [],
      dragItem: null,
      dragGrabItem: null,
      dragParent: null,
      dragOrigin: null,
      dragSiblingIndex: 0,
      dragGrabWasActive: !0,
      dragMoveWasActive: !1,
      touchOffset: null,
      swipeRoundTrip: l
    };
  }
  finishDragSession(e) {
    var t;
    const i = e.dragCandidates.find(t => {
        var i;
        const s = null == (i = this.findClue(t)) || null == (i = i.unlock) ? void 0 : i.trigger;
        if (!s || !this.tracker.canUnlock(t)) return !1;
        const n = this.resolver.resolveNode(this.resolver.getDragZonePath(s, t));
        return __rea_outer_H.isDragNearTarget(e.dragItem, n);
      }),
      s = void 0 === i || null == (t = this.findClue(i)) || null == (t = t.unlock) ? void 0 : t.trigger;
    var n;
    void 0 === i || __rea_outer_O.shouldReturnToOrigin(s) ? this.restoreDragItem(e) : null == (n = e.dragItem) || n.setSiblingIndex(e.dragSiblingIndex);
    void 0 !== i && this.completeUnlockStage(i);
  }
  finishStageSession(e, t) {
    const i = this.findClue(e.clueId),
      s = i ? this.getStage(i, e.stageKind) : void 0;
    if (!i || !this.isStageActionable(i, e.stageKind)) return;
    const n = null == s ? void 0 : s.trigger,
      o = __rea_outer_O.resolveKind(n);
    if (o !== __rea_outer_A.SwipeRoundTrip) {
      if (o === __rea_outer_A.Swipe) {
        const s = null == n ? void 0 : n.direction;
        if (void 0 === s) return void console.warn(`[ClueLevelBase] 线索 ${i.id} 配置为滑动但缺少 direction`);
        const o = __rea_outer_O.resolveMinDistance(n);
        if (!__rea_outer_O.isSwipeMatching(e.startPoint, t, s, o)) return;
      }
      "unlock" !== e.stageKind ? this.completeConfirmStage(i.id) : this.completeUnlockStage(i.id);
    }
  }
  restoreDragItem(e) {
    const t = null == e ? void 0 : e.dragItem;
    if (null == t || !t.isValid || null == e || !e.dragOrigin) return;
    t.setPosition(e.dragOrigin), t.setSiblingIndex(e.dragSiblingIndex);
    const i = e.dragGrabItem;
    null != i && i.isValid && (i.active = e.dragGrabWasActive, t !== i && (t.active = e.dragMoveWasActive));
  }
  completeUnlockStage(e) {
    var t;
    const i = this.findClue(e);
    if (!i || !this.tracker.canUnlock(e)) return;
    this.tracker.markUnlocked(e);
    const s = null == (t = i.unlock) ? void 0 : t.effects,
      n = () => {
        this.isValid && (this.isInteractionLocked = !1, this.onClueUnlocked(e), (null === i.confirm || this.tracker.isInstantComplete(e)) && this.completeConfirmStage(e));
      };
    null != s && s.length ? (this.isInteractionLocked = !0, this.effectRunner.runAll(s, n)) : n();
  }
  completeConfirmStage(e) {
    var t;
    const i = this.findClue(e);
    if (!i || !this.tracker.canConfirm(e)) return;
    this.tracker.markDone(e), this.hasInstallNum = this.tracker.getDoneCount();
    const s = null !== i.confirm ? null == (t = i.confirm) ? void 0 : t.effects : void 0,
      n = () => {
        this.isValid && (this.isInteractionLocked = !1, this.config.clueFoundSoundKey && __rea_outer_p.playEffect_1(this.config.clueFoundSoundKey), i.voiceKey && (this.showBubble(i.voiceKey, i.voiceKey), this.scheduleBubbleHide()), __rea_outer_I.getInstance().refreshGameProgress(), this.onClueCompleted(e), this.TryQuickWin() || this.tracker.isComplete() && this.handleAllCluesFound());
      };
    null !== i.confirm && this.revealConfirmHotspot(i), null != s && s.length ? (this.isInteractionLocked = !0, this.effectRunner.runAll(s, n)) : n();
  }
  revealConfirmHotspot(e) {
    var t, i;
    if (null != (t = e.confirm) && null != (t = t.trigger) && t.hotspot) return;
    const s = this.resolver.getTriggerHotspotPath(null == (i = e.confirm) ? void 0 : i.trigger, e.id, !0),
      o = this.resolver.resolveNode(s),
      r = null == o ? void 0 : o.getComponent(__rea_outer_c);
    if (null == o || !o.isValid || !r) return;
    o.active = !0;
    const a = o.scale.clone();
    __rea_outer_k(o), __rea_outer_u(o).tag(710).to(.125, {
      scale: new __rea_outer_h(1.1 * a.x, 1.1 * a.y, a.z)
    }).to(.125, {
      scale: a
    }).start(), __rea_outer_l.stopAllByTarget(r);
    const d = r.color;
    __rea_outer_u(r).tag(710).to(.2, {
      color: new __rea_outer_n(d.r, d.g, d.b, 255)
    }).start();
  }
  isStageActionable(e, t) {
    return !!this.isClueInteractionAllowed(e.id, t) && ("unlock" === t ? !!e.unlock && this.tracker.canUnlock(e.id) : null !== e.confirm && !this.tracker.isInstantComplete(e.id) && this.tracker.canConfirm(e.id));
  }
  getStage(e, t) {
    return "unlock" === t ? e.unlock : e.confirm;
  }
  findClue(e) {
    var t;
    return null == (t = this.config) ? void 0 : t.clues.find(t => t.id === e);
  }
  applyDegradations() {
    var e, t;
    null == (e = this.resolver) || e.getMissingNodes().forEach(e => {
      var t;
      "confirmHotspot" === e.role && null !== e.clueId && (null == (t = this.tracker) || t.markInstantComplete(e.clueId));
    }), null == (t = this.config) || t.clues.forEach(e => {
      e.unlock || null !== e.confirm || console.error(`[ClueLevelBase] 线索 ${e.id} 既无解锁段也无确认段，永远无法完成`);
    });
  }
  reportMissingNodes() {
    var e, t;
    const i = (null == (e = this.resolver) ? void 0 : e.getMissingNodes()) ?? [];
    if (0 === i.length) return;
    const s = i.map(e => {
        const t = null === e.clueId ? "关卡" : `线索 ${e.clueId}`,
          i = "confirmHotspot" === e.role ? "，已降级为解锁后直接完成" : "";
        return `  - ${t} 缺失 ${e.role}: ${e.path}${i}`;
      }),
      n = `${`[ClueLevelBase] Level ${(null == (t = this.config) ? void 0 : t.levelId) ?? "?"} prefab 待办清单:`}\n${s.join("\n")}`;
    i.some(e => !e.isRecoverable) ? console.error(n) : console.warn(n);
  }
  cacheSharedNodes() {
    var e;
    this.bubbleNode = this.resolver.resolveNode(this.naming.bubble), this.tipLabel = (null == (e = this.resolver.resolveNode(this.naming.tipLabel)) ? void 0 : e.getComponent(__rea_outer_d)) ?? null, this.blockNode = this.node.getChildByPath(this.naming.block), this.breathNodes = (this.config.breathNodes ?? []).map(e => this.resolver.resolveNode(e)).filter(e => !(null == e || !e.isValid));
  }
  prepareConfirmHotspots() {
    this.config.clues.forEach(e => {
      var t, i;
      if (null === e.confirm) return;
      const s = this.resolver.getTriggerHotspotPath(null == (t = e.confirm) ? void 0 : t.trigger, e.id, !0);
      this.prepareConfirmMarker(s);
      if (!(null == (i = e.confirm) || null == (i = i.trigger) ? void 0 : i.hotspot)) return;
      const n = __rea_outer_w(this.naming.confirmHotspot, e.id);
      n !== s && this.prepareConfirmMarker(n);
    });
  }
  prepareConfirmMarker(e) {
    const t = this.resolver.resolveNode(e),
      i = null == t ? void 0 : t.getComponent(__rea_outer_c);
    if (null == t || !t.isValid || !i) return;
    t.active = !0;
    const s = i.color;
    i.color = new __rea_outer_n(s.r, s.g, s.b, __rea_outer_B);
    const o = i;
    "number" == typeof o.alphaThreshold && (o.alphaThreshold = 0);
  }
  applyHotspotDebugTint() {
    __rea_outer_C.ShowClueHotspots && this.config.clues.forEach(e => {
      if (!e.unlock) return;
      const t = this.resolver.getTriggerHotspotPath(e.unlock.trigger, e.id, !1),
        i = this.resolver.resolveSprite(t);
      i && (i.color = J);
    });
  }
  buildOverrideMap() {
    const e = new Map();
    return this.nodeOverrides.forEach(t => {
      var i;
      t.path && null != (i = t.node) && i.isValid && e.set(t.path, t.node);
    }), e;
  }
  showBubble(e, t) {
    __rea_outer_p.stopVoice(), this.applyBubblePointer(this.resolveBubblePointerIndex(e, t)), this.tipLabel && (this.tipLabel.string = __rea_outer_v.getInstance().getKey(e), this.tipLabel.node.active = !0), this.bubbleNode && (this.bubbleNode.active = !0), __rea_outer_p.playVoice(t);
  }
  hideBubble() {
    __rea_outer_p.stopVoice(), this.applyBubblePointer(0), this.bubbleNode && (this.bubbleNode.active = !1), this.tipLabel && (this.tipLabel.node.active = !1);
  }
  scheduleBubbleHide() {
    this.unschedule(this.hideClueBubble), this.scheduleOnce(this.hideClueBubble, 2);
  }
  setBlockActive(e) {
    var t;
    if (null == (t = this.blockNode) || !t.isValid) return;
    this.blockNode.active = e;
    const i = this.blockNode.getComponent(__rea_outer_g);
    i && (i.enabled = e);
  }
  startBreathAnimations() {
    this.breathNodes.forEach((e, t) => {
      __rea_outer_T.RoseBreath_tag(e, 1, .02, .7, 0, 300 + t);
    });
  }
  stopBreathAnimations() {
    this.breathNodes.forEach((e, t) => {
      null != e && e.isValid && (__rea_outer_k(e), __rea_outer_l.stopAllByTag(300 + t));
    });
  }
}).prototype, "nodeOverrides", [G], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), $ = W)) || $);
__rea_outer_s._RF.pop();
export { __recovered_export_0 as ClueNodeOverride, __recovered_export_1 as default };
