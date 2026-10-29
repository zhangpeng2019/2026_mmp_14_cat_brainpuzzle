// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_4.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { applyDecoratedDescriptor as __rea_outer_t } from "./rollupPluginModLoBabelHelpers";
import { initializerDefineProperty as __rea_outer_e } from "./rollupPluginModLoBabelHelpers";
import { cclegacy as __rea_outer_n } from "cc";
import { Sprite as __rea_outer_s } from "cc";
import { Node as __rea_outer_o } from "cc";
import { Label as __rea_outer_a } from "cc";
import { Button as __rea_outer_r } from "cc";
import { Mask as __rea_outer_h } from "cc";
import { _decorator as __rea_outer_l } from "cc";
import { Vec3 as __rea_outer_d } from "cc";
import { tween as __rea_outer_u } from "cc";
import { Tween as __rea_outer_c } from "cc";
import { UITransform as __rea_outer_g } from "cc";
import { default as __rea_outer_p } from "./LevelBase";
import { default as __rea_outer_f } from "./clue-hit-tester";
import { default as __rea_outer_v } from "./AudioManager";
import { I18nController as __rea_outer_b } from "./i18n-controller";
import { UIManager as __rea_outer_C } from "./ui-manager";
import { UIHint as __rea_outer_m } from "./uihint";
import { UIFail as __rea_outer_N } from "./uifail";
import { UILayer as __rea_outer_T } from "./ui-layer";
import { stopAllTweens as __rea_outer_A } from "./CocosCompat";
import { stopSpritesTweens as __rea_outer_y } from "./CocosCompat";
import { setNodeOpacity as __rea_outer_S } from "./CocosCompat";
import { GameController as __rea_outer_k } from "./GameController";
import { default as __rea_outer_j } from "./ActionSystem";
let __recovered_export_0;
var R, w, I, B, V, M, L, D, E, P, _, H, F, x, O, z, U, G, q, K, W, J, $, Q, Z, X, Y, ii, ti, ei, ni, si, oi, ai, ri, hi, li, di, ui, ci, gi, pi, fi, vi, bi, Ci, mi, Ni, Ti, Ai, yi, Si;
__rea_outer_n._RF.push({}, "933a1UJFTJHIJ8i95ld4Iqg", "Level_4", void 0);
const {
    ccclass: ki,
    property: ji
  } = __rea_outer_l,
  Ri = ["4_1", "4_2", "4_3"],
  wi = [2.5, 1.5, 2.5];
let Ii = (R = ki("FakeRealConfig"), w = ji(__rea_outer_s), I = ji(__rea_outer_s), B = ji(__rea_outer_s), V = ji(__rea_outer_o), R((D = __rea_outer_t((L = class {
  constructor() {
    __rea_outer_e(this, "fakeSprite", D, this), __rea_outer_e(this, "realSprite", E, this), __rea_outer_e(this, "fangdajingSprite", P, this), __rea_outer_e(this, "rootNode", _, this), __rea_outer_e(this, "index", H, this), __rea_outer_e(this, "isReal", F, this), this.basePos = new __rea_outer_d(), this.fakePos = new __rea_outer_d();
  }
  updateBasePos() {
    var i, t;
    if (null == (i = this.rootNode) || !i.isValid) return;
    this.basePos = this.rootNode.position.clone();
    const e = null == (t = this.fangdajingSprite) ? void 0 : t.node;
    this.fakePos = null != e && e.isValid ? e.worldPosition.clone() : new __rea_outer_d();
  }
}).prototype, "fakeSprite", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), E = __rea_outer_t(L.prototype, "realSprite", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), P = __rea_outer_t(L.prototype, "fangdajingSprite", [B], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), _ = __rea_outer_t(L.prototype, "rootNode", [V], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), H = __rea_outer_t(L.prototype, "index", [ji], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), F = __rea_outer_t(L.prototype, "isReal", [ji], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), M = L)) || M);
__recovered_export_0 = (x = ki("Level_4"), O = ji(__rea_outer_o), z = ji(__rea_outer_o), U = ji(__rea_outer_s), G = ji(__rea_outer_s), q = ji(__rea_outer_a), K = ji(__rea_outer_s), W = ji({
  type: [Ii]
}), J = ji(__rea_outer_s), $ = ji(__rea_outer_r), Q = ji(__rea_outer_r), Z = ji(__rea_outer_o), X = ji(__rea_outer_s), Y = ji(__rea_outer_h), ii = ji(__rea_outer_o), ti = ji(__rea_outer_s), ei = ji(__rea_outer_s), ni = ji(__rea_outer_s), si = ji(__rea_outer_o), x((ri = __rea_outer_t((ai = class extends __rea_outer_p {
  constructor(...i) {
    super(...i), __rea_outer_e(this, "bubbleNode1", ri, this), __rea_outer_e(this, "manNode", hi, this), __rea_outer_e(this, "fangdajing", li, this), __rea_outer_e(this, "handSprite", di, this), __rea_outer_e(this, "TipLabel", ui, this), __rea_outer_e(this, "showFakeSprites", ci, this), __rea_outer_e(this, "fakeRealConfig", gi, this), __rea_outer_e(this, "showRealSprites", pi, this), __rea_outer_e(this, "AccectpBtn", fi, this), __rea_outer_e(this, "RejectBtn", vi, this), __rea_outer_e(this, "dragfdjNode", bi, this), __rea_outer_e(this, "dragFdjSprite", Ci, this), __rea_outer_e(this, "maskNode", mi, this), __rea_outer_e(this, "naskObjects", Ni, this), __rea_outer_e(this, "tongjingCer", Ti, this), __rea_outer_e(this, "tongjingClickCer", Ai, this), __rea_outer_e(this, "animationSprites", yi, this), __rea_outer_e(this, "touchBlockNode", Si, this), this.manPos = new __rea_outer_d(), this.phase = 0, this.winstate = !1, this.randomindexs = [], this.roundindex = 0, this.hint_arr = ["level4_hint1", "level4_hint2", "level4_hint3", "level4_hint4", "level4_hint5", "level4_hint6", "level4_hint7", "level4_hint8", "level4_hint9", "level4_hint10"], this.currentConfig = null, this.curNode = null, this.isInteractionLocked = !1, this.hasRoundChosen = !1, this.isDraggingMagnifier = !1, this.handOriginPos = new __rea_outer_d(), this.hideTouchBlockDelayed = () => {
      this.isValid && this.setNodeActive(this.touchBlockNode, !1);
    }, this.onFangdajingTouchStart = i => {
      1 !== this.phase || this.isInteractionLocked || this.hasRoundChosen || (i.propagationStopped = !0, this.hideHandSprite(), this.hideFangdajingIcon(), this.isDraggingMagnifier = !0, this.showDragMagnifierAtTouch(i), this.anchorCurNodeToFakePos(), this.registerMagnifierDragHostListeners());
    }, this.onMagnifierTouchMove = i => {
      this.isDraggingMagnifier && 1 === this.phase && (this.moveDragMagnifierToTouch(i), this.anchorCurNodeToFakePos());
    }, this.onMagnifierTouchEnd = i => {
      this.isDraggingMagnifier && (this.hideDragMagnifier(), this.showFangdajingIcon());
    }, this.onAcceptButtonClick = () => {
      this.handleRoundChoice(!0);
    }, this.onRejectButtonClick = () => {
      this.handleRoundChoice(!1);
    }, this.onTongjingClickCerTouch = i => {
      !this.isTongjingRoundActive() || this.isInteractionLocked || this.hasRoundChosen || (i.propagationStopped = !0, this.showTongjingCer());
    }, this.onTongjingCerTouch = i => {
      var t;
      this.isTongjingRoundActive() && null != (t = this.tongjingCer) && null != (t = t.node) && t.active && (i.propagationStopped = !0, this.hideTongjingCer());
    };
  }
  onLoad() {
    super.onLoad(), this.resolveNodeReferences(), this.allItemNum = this.fakeRealConfig.length, this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.enterPhase0();
  }
  onDestroy() {
    this.unschedule(this.hideTouchBlockDelayed), this.unscheduleAllCallbacks(), this.unregisterInteractionHandlers(), this.stopDecorationAnimations(), this.stopHandGuideAnimation(), this.stopAllLevelSpriteTweens();
  }
  showHint() {
    if (1 !== this.phase) return;
    const i = this.randomindexs[this.roundindex];
    if (void 0 === i) return;
    const t = this.hint_arr[i];
    if (!t) return;
    const e = __rea_outer_b.getInstance().getKey(t);
    __rea_outer_C.getInstance().showView(__rea_outer_m, void 0, {
      body: e
    });
  }
  getGameProgressSnapshot() {
    const i = this.fakeRealConfig.length,
      t = Math.min(this.roundindex, i);
    return {
      progress: i > 0 ? t / i : 0,
      label: `${t}/${i}`
    };
  }
  resetLevelState() {
    var i, t, e;
    this.phase = 0, this.winstate = !1, this.roundindex = 0, this.randomindexs = [], this.currentConfig = null, this.curNode = null, this.isInteractionLocked = !1, this.hasRoundChosen = !1, this.isDraggingMagnifier = !1, this.hasInstallNum = 0, this.setNodeActive(this.bubbleNode1, !1), this.setNodeActive((null == (i = this.TipLabel) ? void 0 : i.node) ?? null, !1), this.setNodeActive((null == (t = this.handSprite) ? void 0 : t.node) ?? null, !1), this.setNodeActive((null == (e = this.fangdajing) ? void 0 : e.node) ?? null, !1), this.hideDragMagnifier(), this.hideTongjingCer(), this.setButtonsVisible(!1), this.setButtonsInteractable(!1), this.setNodeActive(this.touchBlockNode, !0), this.prepareConfigsForPhase0();
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_v.playMusic("bgm4", !0, .5), this.generateRandomIndexes(), this.startDecorationAnimations(), this.setNodeActive(this.bubbleNode1, !0), this.playPhase0Intro();
  }
  enterPhase1() {
    this.phase = 1, this.showFangdajingIcon(), this.registerInteractionHandlers(), this.startRound(), __rea_outer_k.getInstance().refreshGameProgress();
  }
  enterPhase2() {
    this.phase >= 2 || (this.phase = 2, this.winstate = !0, this.unregisterInteractionHandlers(), this.stopDecorationAnimations(), this.stopHandGuideAnimation(), this.hideDragMagnifier(), this.hideTongjingCer(), this.setButtonsVisible(!1), this.hasInstallNum = this.fakeRealConfig.length, __rea_outer_k.getInstance().refreshGameProgress(), this.playVictoryEndingSequence());
  }
  prepareConfigsForPhase0() {
    this.fakeRealConfig.forEach(i => {
      i.updateBasePos(), this.setNodeActive(i.rootNode, !1), this.setSpriteActive(i.fakeSprite, !1), this.setSpriteActive(i.realSprite, !1);
    }), this.naskObjects.forEach(i => {
      this.setNodeActive(i, !1);
    });
  }
  generateRandomIndexes() {
    const i = this.fakeRealConfig.length;
    if (i <= 0) return void (this.randomindexs = []);
    const t = i - 1,
      e = [];
    for (let i = 0; i < t; i += 1) e.push(i);
    for (let i = e.length - 1; i > 0; i -= 1) {
      const t = Math.floor(Math.random() * (i + 1)),
        n = e[i];
      e[i] = e[t], e[t] = n;
    }
    e.push(t), this.randomindexs = e;
  }
  playPhase0Intro() {
    this.playIntroSequence(0);
  }
  playIntroSequence(i) {
    this.isValid && (i >= Ri.length ? this.finishPhase0Intro() : (this.playIntroLine(Ri[i]), this.scheduleOnce(() => {
      this.playIntroSequence(i + 1);
    }, wi[i])));
  }
  finishPhase0Intro() {
    var i;
    this.setNodeActive(this.bubbleNode1, !1), this.setNodeActive((null == (i = this.TipLabel) ? void 0 : i.node) ?? null, !1), this.playManExitAnimation(() => {
      this.isValid && this.enterPhase1();
    });
  }
  playIntroLine(i) {
    var t;
    const e = __rea_outer_b.getInstance();
    this.TipLabel && (this.TipLabel.string = e.getKey(i)), this.setNodeActive(this.bubbleNode1, !0), this.setNodeActive((null == (t = this.TipLabel) ? void 0 : t.node) ?? null, !0), __rea_outer_v.playEffect_1(i);
  }
  playManExitAnimation(i) {
    var t;
    if (null == (t = this.manNode) || !t.isValid) return void (null == i || i());
    this.manPos = this.manNode.position.clone();
    const e = this.manPos.x + 1080,
      n = new __rea_outer_d(e, this.manPos.y, this.manPos.z);
    __rea_outer_A(this.manNode), __rea_outer_u(this.manNode).to(1, {
      position: n
    }).call(() => {
      this.setNodeActive(this.manNode, !1), null == i || i();
    }).start();
  }
  startRound() {
    var i;
    if (this.roundindex >= this.randomindexs.length) return void this.enterPhase2();
    const t = this.randomindexs[this.roundindex],
      e = this.fakeRealConfig[t];
    if (null == e || null == (i = e.rootNode) || !i.isValid) return;
    this.currentConfig = e, this.hasRoundChosen = !1, this.isInteractionLocked = !1, this.setButtonsInteractable(!1), this.setButtonsVisible(!1), this.showTouchBlockWithDelay(), this.hideAllRoundConfigs(), this.showRoundConfig(e), this.prepareMagnifierMaskForRound(e), this.prepareTongjingForRound(e), 0 === this.roundindex ? this.startHandGuideAnimation() : this.hideHandSprite();
    const n = e.basePos;
    e.rootNode.setPosition(n.x - 600, n.y, n.z), __rea_outer_A(e.rootNode), __rea_outer_u(e.rootNode).to(.5, {
      position: n
    }).call(() => {
      this.onRoundEnterAnimationComplete();
    }).start(), __rea_outer_k.getInstance().refreshGameProgress();
  }
  onRoundEnterAnimationComplete() {
    this.isValid && 1 === this.phase && (this.setButtonsVisible(!0), this.setButtonsInteractable(!0));
  }
  showTouchBlockWithDelay() {
    this.unschedule(this.hideTouchBlockDelayed), this.setNodeActive(this.touchBlockNode, !0), this.scheduleOnce(this.hideTouchBlockDelayed, 1);
  }
  hideAllRoundConfigs() {
    this.fakeRealConfig.forEach(i => {
      this.setNodeActive(i.rootNode, !1), this.setSpriteActive(i.fakeSprite, !1), this.setSpriteActive(i.realSprite, !1);
    });
  }
  showRoundConfig(i) {
    if (this.setNodeActive(i.rootNode, !0), this.isLastRoundConfig(i)) return this.setSpriteActive(i.realSprite, !1), void this.setSpriteActive(i.fakeSprite, !0);
    this.setSpriteActive(i.fakeSprite, i.isReal), this.setSpriteActive(i.realSprite, !i.isReal);
  }
  isLastRoundConfig(i) {
    return i.index === this.fakeRealConfig.length - 1;
  }
  prepareTongjingForRound(i) {
    this.hideTongjingCer(), this.isLastRoundConfig(i) && this.setSpriteActive(this.tongjingClickCer, !0);
  }
  hideTongjingCer() {
    this.setSpriteActive(this.tongjingCer, !1);
  }
  showTongjingCer() {
    this.setSpriteActive(this.tongjingCer, !0);
  }
  isTongjingRoundActive() {
    return 1 === this.phase && !!this.currentConfig && this.isLastRoundConfig(this.currentConfig);
  }
  prepareMagnifierMaskForRound(i) {
    var t;
    const e = i.index;
    this.curNode = this.naskObjects[e] ?? null, this.naskObjects.forEach((i, t) => {
      this.setNodeActive(i, t === e);
    }), this.setNodeActive((null == (t = this.maskNode) ? void 0 : t.node) ?? null, !1);
  }
  startHandGuideAnimation() {
    var i;
    const t = null == (i = this.handSprite) ? void 0 : i.node;
    if (null == t || !t.isValid) return;
    this.handOriginPos = t.position.clone();
    const e = new __rea_outer_d(0, 0, this.handOriginPos.z);
    t.active = !0, this.stopHandGuideAnimation();
    const n = () => {
      1 === this.phase && 0 === this.roundindex && t.isValid && !this.isDraggingMagnifier && __rea_outer_u(t).tag(410).to(.5, {
        position: e
      }).to(.5, {
        position: this.handOriginPos
      }).call(n).start();
    };
    n();
  }
  stopHandGuideAnimation() {
    var i;
    __rea_outer_c.stopAllByTag(410);
    const t = null == (i = this.handSprite) ? void 0 : i.node;
    null != t && t.isValid && __rea_outer_A(t);
  }
  hideHandSprite() {
    var i;
    this.stopHandGuideAnimation(), this.setNodeActive((null == (i = this.handSprite) ? void 0 : i.node) ?? null, !1);
  }
  startDecorationAnimations() {
    this.animationSprites.forEach((i, t) => {
      const e = null == i ? void 0 : i.node;
      null != e && e.isValid && __rea_outer_j.RoseBreath_tag(e, 1, .02, .7, 0, 300 + t);
    });
  }
  stopDecorationAnimations() {
    this.animationSprites.forEach((i, t) => {
      const e = null == i ? void 0 : i.node;
      null != e && e.isValid && (__rea_outer_A(e), __rea_outer_c.stopAllByTag(300 + t));
    });
  }
  stopAllLevelSpriteTweens() {
    var i;
    __rea_outer_y(this.showFakeSprites), __rea_outer_y(this.showRealSprites), __rea_outer_y(this.animationSprites), __rea_outer_y([this.fangdajing, this.handSprite, this.dragFdjSprite, this.tongjingCer, this.tongjingClickCer]), this.fakeRealConfig.forEach(i => {
      var t;
      __rea_outer_y([i.fakeSprite, i.realSprite, i.fangdajingSprite]), null != (t = i.rootNode) && t.isValid && __rea_outer_A(i.rootNode);
    }), null != (i = this.manNode) && i.isValid && __rea_outer_A(this.manNode);
    const t = this.getDragFdjRoot();
    null != t && t.isValid && __rea_outer_A(t);
  }
  registerInteractionHandlers() {
    var i, t, e, n, s;
    const a = null == (i = this.fangdajing) ? void 0 : i.node;
    null != a && a.isValid && a.on(__rea_outer_o.EventType.TOUCH_START, this.onFangdajingTouchStart, this);
    const h = null == (t = this.AccectpBtn) ? void 0 : t.node;
    null != h && h.isValid && h.on(__rea_outer_r.EventType.CLICK, this.onAcceptButtonClick, this);
    const l = null == (e = this.RejectBtn) ? void 0 : e.node;
    null != l && l.isValid && l.on(__rea_outer_r.EventType.CLICK, this.onRejectButtonClick, this);
    const d = null == (n = this.tongjingClickCer) ? void 0 : n.node;
    null != d && d.isValid && d.on(__rea_outer_o.EventType.TOUCH_END, this.onTongjingClickCerTouch, this);
    const u = null == (s = this.tongjingCer) ? void 0 : s.node;
    null != u && u.isValid && u.on(__rea_outer_o.EventType.TOUCH_END, this.onTongjingCerTouch, this);
  }
  unregisterInteractionHandlers() {
    var i, t, e, n, s;
    this.unregisterMagnifierDragHostListeners();
    const a = null == (i = this.fangdajing) ? void 0 : i.node;
    null != a && a.isValid && a.off(__rea_outer_o.EventType.TOUCH_START, this.onFangdajingTouchStart, this);
    const h = null == (t = this.AccectpBtn) ? void 0 : t.node;
    null != h && h.isValid && h.off(__rea_outer_r.EventType.CLICK, this.onAcceptButtonClick, this);
    const l = null == (e = this.RejectBtn) ? void 0 : e.node;
    null != l && l.isValid && l.off(__rea_outer_r.EventType.CLICK, this.onRejectButtonClick, this);
    const d = null == (n = this.tongjingClickCer) ? void 0 : n.node;
    null != d && d.isValid && d.off(__rea_outer_o.EventType.TOUCH_END, this.onTongjingClickCerTouch, this);
    const u = null == (s = this.tongjingCer) ? void 0 : s.node;
    null != u && u.isValid && u.off(__rea_outer_o.EventType.TOUCH_END, this.onTongjingCerTouch, this);
  }
  handleRoundChoice(i) {
    if (1 !== this.phase || this.isInteractionLocked || this.hasRoundChosen || !this.currentConfig) return;
    this.hasRoundChosen = !0, this.isInteractionLocked = !0, this.hideHandSprite(), this.hideDragMagnifier(), this.hideTongjingCer(), this.setButtonsInteractable(!1);
    const t = this.isConfigReal(this.currentConfig);
    if (i ? t : !t) {
      if (__rea_outer_v.playEffect_1("level4_1"), this.TryQuickWin()) return;
      this.playCorrectResultSequence(this.currentConfig, () => {
        this.isValid && 1 === this.phase && this.advanceToNextRound();
      });
    } else this.playFailEndingSequence();
  }
  advanceToNextRound() {
    this.roundindex += 1, this.hasInstallNum = Math.min(this.roundindex, this.fakeRealConfig.length), this.roundindex >= this.randomindexs.length ? this.enterPhase2() : this.scheduleOnce(() => {
      this.isValid && 1 === this.phase && this.startRound();
    }, 1);
  }
  playCorrectResultSequence(i, t) {
    i.isReal && (this.setSpriteActive(i.fakeSprite, !1), this.setSpriteActive(i.realSprite, !0)), this.scheduleOnce(() => {
      this.isValid && t();
    }, 1);
  }
  playFailEndingSequence() {
    this.phase = 2, this.winstate = !1, this.unregisterInteractionHandlers(), this.stopDecorationAnimations(), this.stopHandGuideAnimation(), this.hideDragMagnifier(), this.hideTongjingCer(), this.setButtonsVisible(!1), this.playManEnterAnimation(() => {
      this.isValid && this.scheduleOnce(() => {
        this.isValid && (this.playCuratorBubbleLine("4_14"), this.scheduleOnce(() => {
          this.isValid && __rea_outer_C.getInstance().showView(__rea_outer_N, __rea_outer_T.WIN_ANIMATION);
        }, 2));
      }, 1);
    });
  }
  playVictoryEndingSequence() {
    __rea_outer_k.getInstance().pauseTimer(), this.playManEnterAnimation(() => {
      this.isValid && this.scheduleOnce(() => {
        this.isValid && (this.playCuratorBubbleLine("4_16"), this.showLevelSuccessAfterDialogue(2));
      }, 1);
    });
  }
  playManEnterAnimation(i) {
    var t;
    null != (t = this.manNode) && t.isValid ? (this.setNodeActive(this.manNode, !0), __rea_outer_A(this.manNode), __rea_outer_u(this.manNode).to(1, {
      position: this.manPos
    }).call(() => {
      null == i || i();
    }).start()) : null == i || i();
  }
  playCuratorBubbleLine(i) {
    var t;
    const e = __rea_outer_b.getInstance();
    this.TipLabel && (this.TipLabel.string = e.getKey(i)), this.setNodeActive(this.bubbleNode1, !0), this.setNodeActive((null == (t = this.TipLabel) ? void 0 : t.node) ?? null, !0), __rea_outer_v.playEffect_1(i);
  }
  markAllTasksCompleted() {
    super.markAllTasksCompleted(), this.phase = 2, this.winstate = !0, this.roundindex = this.fakeRealConfig.length, this.isInteractionLocked = !0, this.hasRoundChosen = !0, this.unregisterInteractionHandlers(), this.stopDecorationAnimations(), this.stopHandGuideAnimation(), this.hideDragMagnifier(), this.hideTongjingCer(), this.setButtonsVisible(!1);
  }
  isConfigReal(i) {
    return !!i.isReal || !(!i.fakeSprite || !i.realSprite) && i.fakeSprite === i.realSprite;
  }
  showDragMagnifierAtTouch(i) {
    var t;
    const e = this.getDragFdjRoot();
    null != e && e.isValid && (e.active = !0, this.setNodeActive(this.dragfdjNode, !0), this.setNodeActive((null == (t = this.maskNode) ? void 0 : t.node) ?? null, !0), this.moveDragMagnifierToTouch(i));
  }
  moveDragMagnifierToTouch(i) {
    const t = this.getDragFdjRoot();
    if (null == t || !t.isValid) return;
    const e = this.getTouchLocalPosition(i, t.parent ?? this.node);
    t.setPosition(e);
  }
  hideDragMagnifier() {
    var i;
    this.unregisterMagnifierDragHostListeners(), this.isDraggingMagnifier = !1;
    const t = this.getDragFdjRoot();
    this.setNodeActive(t, !1), this.setNodeActive(this.dragfdjNode, !1), this.setNodeActive((null == (i = this.maskNode) ? void 0 : i.node) ?? null, !1);
  }
  hideFangdajingIcon() {
    var i;
    const t = null == (i = this.fangdajing) ? void 0 : i.node;
    null != t && t.isValid && __rea_outer_S(t, 0);
  }
  showFangdajingIcon() {
    var i;
    const t = null == (i = this.fangdajing) ? void 0 : i.node;
    null != t && t.isValid && (this.setNodeActive(t, !0), __rea_outer_S(t, 255));
  }
  registerMagnifierDragHostListeners() {
    const i = this.node;
    null != i && i.isValid && (i.on(__rea_outer_o.EventType.TOUCH_MOVE, this.onMagnifierTouchMove, this), i.on(__rea_outer_o.EventType.TOUCH_END, this.onMagnifierTouchEnd, this), i.on(__rea_outer_o.EventType.TOUCH_CANCEL, this.onMagnifierTouchEnd, this));
  }
  unregisterMagnifierDragHostListeners() {
    const i = this.node;
    null != i && i.isValid && (i.off(__rea_outer_o.EventType.TOUCH_MOVE, this.onMagnifierTouchMove, this), i.off(__rea_outer_o.EventType.TOUCH_END, this.onMagnifierTouchEnd, this), i.off(__rea_outer_o.EventType.TOUCH_CANCEL, this.onMagnifierTouchEnd, this));
  }
  anchorCurNodeToFakePos() {
    const i = this.currentConfig,
      t = this.curNode;
    i && null != t && t.isValid && t.setWorldPosition(i.fakePos);
  }
  tryRevealMagnifiedFake() {
    var i, t;
    const e = this.currentConfig;
    if (!e) return;
    const n = (null == (i = this.dragFdjSprite) ? void 0 : i.node) ?? this.dragfdjNode,
      s = e.rootNode ?? (null == (t = this.tongjingCer) ? void 0 : t.node);
    null != n && n.isValid && null != s && s.isValid && __rea_outer_f.isDragNearTarget(n, s) && (this.setSpriteActive(e.fakeSprite, !0), this.setSpriteActive(e.realSprite, !1));
  }
  getDragFdjRoot() {
    var i;
    return (null == (i = this.dragfdjNode) ? void 0 : i.parent) ?? this.dragfdjNode;
  }
  getTouchLocalPosition(i, t) {
    const e = i.getUILocation(),
      n = t.getComponent(__rea_outer_g);
    return n ? n.convertToNodeSpaceAR(new __rea_outer_d(e.x, e.y, 0)) : __rea_outer_d.ZERO;
  }
  setButtonsVisible(i) {
    var t, e;
    this.setNodeActive((null == (t = this.AccectpBtn) ? void 0 : t.node) ?? null, i), this.setNodeActive((null == (e = this.RejectBtn) ? void 0 : e.node) ?? null, i);
  }
  setButtonsInteractable(i) {
    this.AccectpBtn && (this.AccectpBtn.interactable = i), this.RejectBtn && (this.RejectBtn.interactable = i);
  }
  setSpriteActive(i, t) {
    null != i && i.node && (i.node.active = t);
  }
  setNodeActive(i, t) {
    i && (i.active = t);
  }
  resolveNodeReferences() {
    this.touchBlockNode || (this.touchBlockNode = this.findNodeByName(this.node, "touchBlock"));
  }
  findNodeByName(i, t) {
    if (i.name === t) return i;
    for (const e of i.children) {
      const i = this.findNodeByName(e, t);
      if (i) return i;
    }
    return null;
  }
}).prototype, "bubbleNode1", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), hi = __rea_outer_t(ai.prototype, "manNode", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), li = __rea_outer_t(ai.prototype, "fangdajing", [U], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), di = __rea_outer_t(ai.prototype, "handSprite", [G], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ui = __rea_outer_t(ai.prototype, "TipLabel", [q], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ci = __rea_outer_t(ai.prototype, "showFakeSprites", [K], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), gi = __rea_outer_t(ai.prototype, "fakeRealConfig", [W], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), pi = __rea_outer_t(ai.prototype, "showRealSprites", [J], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), fi = __rea_outer_t(ai.prototype, "AccectpBtn", [$], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), vi = __rea_outer_t(ai.prototype, "RejectBtn", [Q], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), bi = __rea_outer_t(ai.prototype, "dragfdjNode", [Z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Ci = __rea_outer_t(ai.prototype, "dragFdjSprite", [X], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), mi = __rea_outer_t(ai.prototype, "maskNode", [Y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Ni = __rea_outer_t(ai.prototype, "naskObjects", [ii], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), Ti = __rea_outer_t(ai.prototype, "tongjingCer", [ti], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Ai = __rea_outer_t(ai.prototype, "tongjingClickCer", [ei], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), yi = __rea_outer_t(ai.prototype, "animationSprites", [ni], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), Si = __rea_outer_t(ai.prototype, "touchBlockNode", [si], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), oi = ai)) || oi);
__rea_outer_n._RF.pop();
export { __recovered_export_0 as default };
