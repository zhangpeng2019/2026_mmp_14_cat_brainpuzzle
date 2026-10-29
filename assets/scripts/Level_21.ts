// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_21.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { applyDecoratedDescriptor as __rea_outer_t } from "./rollupPluginModLoBabelHelpers";
import { initializerDefineProperty as __rea_outer_i } from "./rollupPluginModLoBabelHelpers";
import { cclegacy as __rea_outer_s } from "cc";
import { Prefab as __rea_outer_n } from "cc";
import { _decorator as __rea_outer_o } from "cc";
import { instantiate as __rea_outer_a } from "cc";
import { Node as __rea_outer_l } from "cc";
import { UITransform as __rea_outer_h } from "cc";
import { tween as __rea_outer_r } from "cc";
import { Vec3 as __rea_outer_d } from "cc";
import { Tween as __rea_outer_c } from "cc";
import { Label as __rea_outer_u } from "cc";
import { Vec2 as __rea_outer_p } from "cc";
import { default as __rea_outer_g } from "./LevelBase";
import { default as __rea_outer_m } from "./clue-hit-tester";
import { default as __rea_outer_v } from "./AudioManager";
import { I18nController as __rea_outer_N } from "./i18n-controller";
import { UIManager as __rea_outer_f } from "./ui-manager";
import { UILayer as __rea_outer_b } from "./ui-layer";
import { UIHint as __rea_outer_I } from "./uihint";
import { UIFail as __rea_outer_y } from "./uifail";
import { GameController as __rea_outer_P } from "./GameController";
import { stopAllTweens as __rea_outer_T } from "./CocosCompat";
import { default as __rea_outer_k } from "./ActionSystem";
import { default as __rea_outer_L } from "./Level_21_man";
let __recovered_export_0;
var V, C, A, B, M;
__rea_outer_s._RF.push({}, "f21a2EAIQBAIaAhAAAAAAAh", "Level_21", void 0);
const {
    ccclass: S,
    property: x
  } = __rea_outer_o,
  _ = ["level21_hint1", "level21_hint2", "level21_hint3", "level21_hint4", "level21_hint5", "level21_hint6", "level21_hint7", "level21_hint8"],
  w = [{
    id: 1,
    kind: "drag",
    itemNodeName: "dumbbell",
    leaveCount: 2,
    voiceKey: "21_2"
  }, {
    id: 2,
    kind: "drag",
    itemNodeName: "lemon1",
    leaveCount: 2,
    voiceKey: "21_3"
  }, {
    id: 3,
    kind: "drag",
    itemNodeName: "ruler1",
    leaveCount: 2,
    voiceKey: "21_4"
  }, {
    id: 4,
    kind: "drag",
    itemNodeName: "duster",
    leaveCount: 2,
    voiceKey: "21_5"
  }, {
    id: 5,
    kind: "swipeUp",
    itemNodeName: null,
    leaveCount: 1,
    voiceKey: "21_6"
  }, {
    id: 6,
    kind: "drag",
    itemNodeName: "syringe",
    leaveCount: 1,
    voiceKey: "21_7"
  }, {
    id: 7,
    kind: "clickFace",
    itemNodeName: null,
    leaveCount: 1,
    voiceKey: "21_8"
  }, {
    id: 8,
    kind: "drag",
    itemNodeName: "lemon",
    leaveCount: 1,
    voiceKey: "21_9"
  }];
__recovered_export_0 = (V = S("Level_21"), C = x({
  type: __rea_outer_n,
  tooltip: "Level_21_man 嫌疑人预制件"
}), V((M = __rea_outer_t((B = class extends __rea_outer_g {
  constructor(...e) {
    super(...e), __rea_outer_i(this, "manPrefab", M, this), this.phase = 0, this.winstate = !1, this.gameNode = null, this.backBgNode = null, this.bubbleNode = null, this.tipLabel = null, this.dialogBoxNode = null, this.mansRoot = null, this.policeNode = null, this.rulerTemplateNode = null, this.bgManNode = null, this.manComponents = [], this.leftManIndexes = [], this.donePropIds = new Set(), this.itemNodes = new Map(), this.pendingLeaveIndexes = [], this.isInteractionLocked = !0, this.voiceToken = 0, this.activeDragState = null, this.manGestureState = null, this.starBlinkMans = [], this.onTouchStart = e => {
      if (1 !== this.phase || this.isInteractionLocked || this.activeDragState) return;
      const t = this.getTouchWorldPoint(e),
        i = this.findUnusedDragPropAtPoint(t);
      if (i) {
        const t = this.itemNodes.get(i.id);
        return void (null != t && t.isValid && this.beginDrag(t, i.id, e));
      }
      const s = this.findActiveManAtPoint(t);
      if (!s) return;
      const n = this.isPointInsideNode(s.getFaceHitNode(), t);
      this.manGestureState = {
        startLocation: t.clone(),
        hitMan: s,
        hitFace: n
      };
    }, this.onTouchMove = e => {
      if (this.activeDragState && 1 === this.phase && !this.isInteractionLocked) {
        const t = this.activeDragState;
        this.setDragNodePositionFromTouch(e, t.dragNode, t.dragParent, t.touchOffset);
      }
    }, this.onTouchEnd = e => {
      if (1 !== this.phase) return this.activeDragState = null, void (this.manGestureState = null);
      if (this.activeDragState) return this.handleItemDrop(this.activeDragState, this.getTouchWorldPoint(e)), void (this.activeDragState = null);
      const t = this.manGestureState;
      if (this.manGestureState = null, !t || this.isInteractionLocked) return;
      const i = this.getTouchWorldPoint(e),
        s = i.x - t.startLocation.x,
        n = i.y - t.startLocation.y;
      !this.isUpSwipe(s, n) || this.donePropIds.has(5) ? t.hitFace && Math.abs(s) <= 20 && Math.abs(n) <= 20 && !this.donePropIds.has(7) && this.executeProp(7) : this.executeProp(5);
    }, this.onStarBlinkTick = () => {
      this.isValid && this.starBlinkMans.forEach(e => {
        null != e && e.isValid && e.tickStarAlternate();
      });
    }, this.onBubbleHide = () => {
      this.isValid && this.hideBubble();
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.setNodeActive(this.bgManNode, !1), this.allItemNum = 8, this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.enterPhase0();
  }
  onDestroy() {
    this.unscheduleAllCallbacks(), this.unregisterHandlers(), this.stopPoliceBreath(), this.stopStarBlink(), __rea_outer_v.stopLevelAudio(), this.stopTrackedTweens(), this.activeDragState = null, this.manGestureState = null;
  }
  handleTimeExpired() {
    return !!(this.phase >= 2 || this.winstate);
  }
  showHint() {
    if (1 !== this.phase) return;
    const e = this.resolveNextHintKey();
    if (!e) return;
    const t = __rea_outer_N.getInstance().getKey(e);
    __rea_outer_f.getInstance().showView(__rea_outer_I, void 0, {
      body: t
    });
  }
  getGameProgressSnapshot() {
    const e = this.hasInstallNum;
    return {
      progress: e / 8,
      label: `${e}/8`
    };
  }
  markAllTasksCompleted() {
    w.forEach(e => {
      this.donePropIds.add(e.id);
    }), this.hasInstallNum = 8, this.phase = 2, this.winstate = !0, this.isInteractionLocked = !0, this.unregisterHandlers();
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.isInteractionLocked = !0, this.hasInstallNum = 0, this.allItemNum = 8, this.donePropIds.clear(), this.leftManIndexes.length = 0, this.pendingLeaveIndexes.length = 0, this.activeDragState = null, this.manGestureState = null, this.voiceToken += 1, this.hideBubble(), this.setNodeActive(this.bgManNode, !1);
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_v.playMusic("bgm5", !0, .5), this.setNodeActive(this.backBgNode, !0), this.setNodeActive(this.policeNode, !0), this.setNodeActive(this.rulerTemplateNode, !1), this.setNodeActive(this.bgManNode, !1), this.spawnMans(), this.startPoliceBreath(), this.playVoiceEffect("21_1", () => {
      this.isValid && 0 === this.phase && this.scheduleOnce(() => {
        this.isValid && 0 === this.phase && this.enterPhase1();
      }, 1.5);
    });
  }
  skipOpeningToPlay() {
    return 0 === this.phase && (this.voiceToken += 1, this.stopOpeningDialogue(), this.enterPhase1(), !0);
  }
  enterPhase1() {
    0 === this.phase && (this.phase = 1, this.setNodeActive(this.backBgNode, !1), this.setNodeActive(this.bgManNode, !1), this.registerHandlers(), this.isInteractionLocked = !1, __rea_outer_P.getInstance().refreshGameProgress());
  }
  spawnMans() {
    if (this.manComponents.length > 0) return;
    const e = this.mansRoot,
      t = this.manPrefab;
    if (null != e && e.isValid && t) {
      this.manComponents.length = 0;
      for (let i = 1; i <= 13; i += 1) {
        const s = e.getChildByName(`man${i}`);
        if (null == s || !s.isValid) {
          console.warn(`[Level_21] missing slot man${i}`);
          continue;
        }
        s.removeAllChildren();
        const n = __rea_outer_a(t);
        n.setParent(s), n.setPosition(0, 0, 0);
        let o = n.getComponent(__rea_outer_L);
        o || (o = n.addComponent(__rea_outer_L)), o.applyNormalVisual(), this.manComponents.push(o);
      }
    } else console.error("[Level_21] mans root or manPrefab missing (assign Level_21_man in editor)");
  }
  registerHandlers() {
    this.node.on(__rea_outer_l.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(__rea_outer_l.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(__rea_outer_l.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(__rea_outer_l.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
  }
  unregisterHandlers() {
    var e;
    null != (e = this.node) && e.isValid && (this.node.off(__rea_outer_l.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(__rea_outer_l.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(__rea_outer_l.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(__rea_outer_l.EventType.TOUCH_CANCEL, this.onTouchEnd, this));
  }
  findUnusedDragPropAtPoint(e) {
    for (let t = w.length - 1; t >= 0; t -= 1) {
      const i = w[t];
      if ("drag" !== i.kind || this.donePropIds.has(i.id)) continue;
      const s = this.itemNodes.get(i.id);
      if (this.isPointInsideNode(s, e)) return i;
    }
    return null;
  }
  findActiveManAtPoint(e) {
    const t = this.findActiveManByHitNode(e, !0);
    return t || this.findActiveManByHitNode(e, !1);
  }
  findActiveManByHitNode(e, t) {
    for (let s = this.manComponents.length - 1; s >= 0; s -= 1) {
      var i;
      if (this.leftManIndexes.indexOf(s) >= 0) continue;
      const n = this.manComponents[s];
      if (null == n || !n.isValid || null == (i = n.node) || !i.activeInHierarchy) continue;
      const o = t ? n.getFaceHitNode() : n.getBodyHitNode();
      if (this.isPointInsideNode(o, e)) return n;
    }
    return null;
  }
  isUpSwipe(e, t) {
    return t >= 30 && Math.abs(t) >= 1.2 * Math.abs(e);
  }
  beginDrag(e, t, i) {
    const s = e.parent;
    if (null == s || !s.isValid) return;
    const n = e.position.clone(),
      o = e.getSiblingIndex(),
      a = e.worldPosition.clone(),
      l = this.gameNode ?? s;
    e.setParent(l);
    const r = l.getComponent(__rea_outer_h);
    if (r) {
      const t = r.convertToNodeSpaceAR(a);
      e.setPosition(t);
    }
    e.setSiblingIndex(l.children.length - 1);
    const d = this.calculateTouchOffset(i, e, l);
    this.setDragNodePositionFromTouch(i, e, l, d), this.activeDragState = {
      dragNode: e,
      propId: t,
      dragParent: l,
      touchOffset: d,
      originParent: s,
      originPosition: n,
      originSiblingIndex: o
    };
  }
  handleItemDrop(e, t) {
    this.isInteractionLocked || this.donePropIds.has(e.propId) ? this.restoreDragNode(e) : this.isDropOnCrowd(e.dragNode) ? (this.restoreDragNode(e), this.executeProp(e.propId)) : this.restoreDragNode(e);
  }
  isDropOnCrowd(e) {
    return !!this.isDragNearAnyActiveMan(e) || __rea_outer_m.isDragNearTarget(e, this.mansRoot);
  }
  isDragNearAnyActiveMan(e) {
    for (let i = this.manComponents.length - 1; i >= 0; i -= 1) {
      var t;
      if (this.leftManIndexes.indexOf(i) >= 0) continue;
      const s = this.manComponents[i];
      if (null != s && s.isValid && null != (t = s.node) && t.activeInHierarchy && (__rea_outer_m.isDragNearTarget(e, s.getFaceHitNode()) || __rea_outer_m.isDragNearTarget(e, s.getBodyHitNode()))) return !0;
    }
    return !1;
  }
  executeProp(e) {
    if (this.donePropIds.has(e) || this.isInteractionLocked || 1 !== this.phase) return;
    const t = w.find(t => t.id === e);
    if (!t) return;
    const i = this.getAvailableManIndexes();
    if (i.length <= t.leaveCount) return void console.warn(`[Level_21] not enough mans for prop ${e}`);
    this.isInteractionLocked = !0;
    const s = this.pickRandomIndexes(i, t.leaveCount);
    this.pendingLeaveIndexes.length = 0, s.forEach(e => {
      this.pendingLeaveIndexes.push(e);
    }), this.applyPropVisual(t, s, i), this.playVoiceEffect(t.voiceKey, () => {
      this.isValid && this.scheduleOnce(() => {
        this.isValid && this.playLeaveSequence(t);
      }, 2);
    });
  }
  applyPropVisual(e, t, i) {
    const s = new Set(t);
    this.stopStarBlink(), this.starBlinkMans = [], i.forEach(t => {
      const i = this.manComponents[t];
      if (!i) return;
      const n = s.has(t);
      switch (e.id) {
        case 1:
          i.showDumbbellCover(!n);
          break;
        case 2:
        case 6:
          i.showDizzyStars(n), n && this.starBlinkMans.push(i);
          break;
        case 3:
          {
            const e = this.cloneRulerTemplate();
            i.showHeightVisual(n, e);
            break;
          }
        case 4:
          i.showFeatherReaction(n), n && this.playLaughFlash(i, 0);
          break;
        case 5:
          i.showTopsRemoved(n);
          break;
        case 7:
          i.showFaceReveal(n);
          break;
        case 8:
          i.showLemonReaction(n), n && this.playLaughFlash(i, 0);
      }
    }), this.starBlinkMans.length > 0 && this.schedule(this.onStarBlinkTick, .3);
  }
  stopStarBlink() {
    this.unschedule(this.onStarBlinkTick), this.starBlinkMans.forEach(e => {
      null != e && e.isValid && e.stopStarAlternate();
    }), this.starBlinkMans = [];
  }
  playLaughFlash(e, t) {
    null == e || !e.isValid || t >= 3 || (e.setLaughVisible(!0), this.scheduleOnce(() => {
      this.isValid && e.isValid && (e.setLaughVisible(!1), this.scheduleOnce(() => {
        this.isValid && e.isValid && this.playLaughFlash(e, t + 1);
      }, .15));
    }, .15));
  }
  playLeaveSequence(e) {
    this.stopStarBlink(), __rea_outer_v.playEffect_1("level21_1");
    [...this.pendingLeaveIndexes].forEach(e => {
      this.playManLeaveAnimation(e);
    }), this.scheduleOnce(() => {
      this.isValid && (this.resetRemainingMansToNormal(), this.hidePropItem(e), this.donePropIds.add(e.id), this.hasInstallNum = this.donePropIds.size, __rea_outer_P.getInstance().refreshGameProgress(), this.pendingLeaveIndexes.length = 0, this.TryQuickWin() || (this.donePropIds.size >= 8 ? this.enterPhase2() : this.isInteractionLocked = !1));
    }, 1.5);
  }
  playManLeaveAnimation(e) {
    const t = this.manComponents[e],
      i = null == t ? void 0 : t.node;
    null != i && i.isValid && (__rea_outer_T(i), t.applyNormalVisual(), __rea_outer_r(i).by(1.5, {
      position: new __rea_outer_d(1e3, 0, 0)
    }).call(() => {
      i.isValid && (i.active = !1, this.leftManIndexes.indexOf(e) < 0 && this.leftManIndexes.push(e));
    }).start());
  }
  resetRemainingMansToNormal() {
    this.manComponents.forEach((e, t) => {
      var i;
      null != e && e.isValid && null != (i = e.node) && i.isValid && e.node.active && (this.leftManIndexes.indexOf(t) >= 0 || this.pendingLeaveIndexes.indexOf(t) >= 0 || e.applyNormalVisual());
    });
  }
  hidePropItem(e) {
    if (!e.itemNodeName) return;
    const t = this.itemNodes.get(e.id);
    this.setNodeActive(t, !1);
  }
  enterPhase2() {
    this.phase = 2, this.isInteractionLocked = !0, this.unregisterHandlers(), this.playVoiceEffect("21_10", () => {
      this.isValid && this.scheduleOnce(() => {
        this.isValid && (this.applyWinSettlementVisual(), this.playVoiceEffect("21_11", () => {
          this.isValid && (this.winstate = !0, this.showLevelSuccess(.5));
        }));
      }, 2);
    });
  }
  applyWinSettlementVisual() {
    this.stopPoliceBreath(), this.setNodeActive(this.bgManNode, !0), this.setNodeActive(this.gameNode, !1);
  }
  startPoliceBreath() {
    const e = this.policeNode;
    null != e && e.isValid && (this.stopPoliceBreath(), __rea_outer_k.RoseBreath_tag(e, 1, .02, .7, 0, 21010));
  }
  stopPoliceBreath() {
    const e = this.policeNode;
    null != e && e.isValid && __rea_outer_T(e), __rea_outer_c.stopAllByTag(21010);
  }
  beginFailSequence() {
    this.phase = 2, this.isInteractionLocked = !0, this.unregisterHandlers(), this.voiceToken += 1, __rea_outer_v.stopVoice(), this.hideBubble(), __rea_outer_P.getInstance().pauseTimer(), this.scheduleOnce(() => {
      this.isValid && __rea_outer_f.getInstance().showView(__rea_outer_y, __rea_outer_b.WIN_ANIMATION);
    }, .5);
  }
  getAvailableManIndexes() {
    const e = [];
    for (let i = 0; i < this.manComponents.length; i += 1) {
      var t;
      if (this.leftManIndexes.indexOf(i) >= 0) continue;
      const s = this.manComponents[i];
      null != s && s.isValid && null != (t = s.node) && t.isValid && s.node.active && e.push(i);
    }
    return e;
  }
  pickRandomIndexes(e, t) {
    const i = [...e],
      s = [],
      n = Math.min(t, i.length);
    for (let e = 0; e < n; e += 1) {
      const e = Math.floor(Math.random() * i.length);
      s.push(i[e]), i.splice(e, 1);
    }
    return s;
  }
  cloneRulerTemplate() {
    const e = this.rulerTemplateNode;
    if (null == e || !e.isValid) return null;
    const t = __rea_outer_a(e);
    return t.active = !0, t;
  }
  resolveNextHintKey() {
    for (let e = 0; e < w.length; e += 1) {
      const t = w[e];
      if (!this.donePropIds.has(t.id)) return _[t.id - 1] ?? null;
    }
    return null;
  }
  playVoiceEffect(e, t) {
    this.voiceToken += 1;
    const i = this.voiceToken;
    this.showVoiceBubble(e);
    let s = !1;
    const n = () => {
        !s && this.isValid && i === this.voiceToken && (s = !0, this.unschedule(o), t());
      },
      o = () => {
        n();
      };
    this.scheduleOnce(o, 2.5), __rea_outer_v.stopVoice(), __rea_outer_v.playEffect_1(e, n);
  }
  showVoiceBubble(e) {
    const t = __rea_outer_N.getInstance();
    this.tipLabel && (this.tipLabel.string = t.getKey(e), this.setNodeActive(this.tipLabel.node, !0)), this.setNodeActive(this.dialogBoxNode, !0), this.setNodeActive(this.bubbleNode, !0), this.unschedule(this.onBubbleHide), this.scheduleOnce(this.onBubbleHide, 2.5);
  }
  hideBubble() {
    var e;
    this.setNodeActive(this.bubbleNode, !1), this.setNodeActive(this.dialogBoxNode, !1), this.setNodeActive((null == (e = this.tipLabel) ? void 0 : e.node) ?? null, !1);
  }
  restoreDragNode(e) {
    const t = e.dragNode;
    t.isValid && (t.setParent(e.originParent), t.setSiblingIndex(e.originSiblingIndex), t.setPosition(e.originPosition));
  }
  resolveReferences() {
    var e, t;
    this.gameNode = this.node.getChildByPath("UIPanel/gameNode"), this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.bubbleNode = this.node.getChildByPath("UIPanel/bubble"), this.bgManNode = this.node.getChildByPath("UIPanel/bg_man"), this.dialogBoxNode = (null == (e = this.bubbleNode) ? void 0 : e.getChildByName("dialog_box")) ?? null, this.tipLabel = (null == (t = this.bubbleNode) || null == (t = t.getChildByPath("dialog_box/Label")) ? void 0 : t.getComponent(__rea_outer_u)) ?? null;
    const i = this.gameNode;
    this.mansRoot = (null == i ? void 0 : i.getChildByName("mans")) ?? null, this.policeNode = (null == i ? void 0 : i.getChildByName("police_officer")) ?? null, this.rulerTemplateNode = (null == i ? void 0 : i.getChildByName("ruler")) ?? null, this.itemNodes.clear(), w.forEach(e => {
      if (!e.itemNodeName || !i) return;
      const t = i.getChildByName(e.itemNodeName);
      t ? this.itemNodes.set(e.id, t) : console.warn(`[Level_21] missing item node ${e.itemNodeName}`);
    }), this.gameNode || console.warn("[Level_21] missing UIPanel/gameNode");
  }
  stopTrackedTweens() {
    this.manComponents.forEach(e => {
      var t;
      null != e && null != (t = e.node) && t.isValid && __rea_outer_T(e.node);
    }), this.itemNodes.forEach(e => {
      null != e && e.isValid && __rea_outer_T(e);
    });
  }
  isPointInsideNode(e, t) {
    if (null == e || !e.isValid || !e.activeInHierarchy) return !1;
    const i = e.getComponent(__rea_outer_h);
    return !!i && i.getBoundingBoxToWorld().contains(t);
  }
  getTouchWorldPoint(e) {
    const t = e.getUILocation();
    return new __rea_outer_p(t.x, t.y);
  }
  getTouchLocalPosition(e, t) {
    const i = e.getUILocation(),
      s = t.getComponent(__rea_outer_h);
    return s ? s.convertToNodeSpaceAR(new __rea_outer_d(i.x, i.y, 0)) : __rea_outer_d.ZERO.clone();
  }
  calculateTouchOffset(e, t, i) {
    const s = this.getTouchLocalPosition(e, i);
    return new __rea_outer_d(t.position.x - s.x, t.position.y - s.y, 0);
  }
  setDragNodePositionFromTouch(e, t, i, s) {
    const n = this.getTouchLocalPosition(e, i);
    t.setPosition(n.x + s.x, n.y + s.y, t.position.z);
  }
  setNodeActive(e, t) {
    null != e && e.isValid && (e.active = t);
  }
}).prototype, "manPrefab", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), A = B)) || A);
__rea_outer_s._RF.pop();
export { __recovered_export_0 as default };
