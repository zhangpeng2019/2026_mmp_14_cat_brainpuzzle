// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_1.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { applyDecoratedDescriptor as __rea_outer_e } from "./rollupPluginModLoBabelHelpers";
import { initializerDefineProperty as __rea_outer_i } from "./rollupPluginModLoBabelHelpers";
import { cclegacy as __rea_outer_s } from "cc";
import { Node as __rea_outer_n } from "cc";
import { Label as __rea_outer_o } from "cc";
import { Sprite as __rea_outer_r } from "cc";
import { _decorator as __rea_outer_a } from "cc";
import { instantiate as __rea_outer_l } from "cc";
import { Vec3 as __rea_outer_h } from "cc";
import { tween as __rea_outer_d } from "cc";
import { Tween as __rea_outer_c } from "cc";
import { UITransform as __rea_outer_u } from "cc";
import { Vec2 as __rea_outer_p } from "cc";
import { default as __rea_outer_g } from "./LevelBase";
import { default as __rea_outer_b } from "./AudioManager";
import { I18nController as __rea_outer_m } from "./i18n-controller";
import { UIManager as __rea_outer_y } from "./ui-manager";
import { UIHint as __rea_outer_f } from "./uihint";
import { isSpriteRenderable as __rea_outer_v } from "./CocosCompat";
import { getNodeWidth as __rea_outer_S } from "./CocosCompat";
import { getNodeHeight as __rea_outer_N } from "./CocosCompat";
import { stopAllTweens as __rea_outer_I } from "./CocosCompat";
import { stopSpritesTweens as __rea_outer_D } from "./CocosCompat";
import { stopSpriteTweens as __rea_outer_A } from "./CocosCompat";
import { GameController as __rea_outer_w } from "./GameController";
import { default as __rea_outer_T } from "./ActionSystem";
import { legacyTouchDelta } from "./features/brainpuzzle/BrainPuzzleRuntime";
let __recovered_export_0;
var k, _, L, x, P, B, E, M, C, O, V, z, H, K, R, U, Y, G, $, F, W, Q, j, q, J, X, Z, tt, et, it, st, nt, ot;
__rea_outer_s._RF.push({}, "d82f3FtEO1MIqQYlgKt6Knw", "Level_1", void 0);
const {
    ccclass: rt,
    property: at
  } = __rea_outer_a,
  lt = 1080,
  ht = 1920,
  dt = 1400,
  ct = 100;
__recovered_export_0 = (k = rt("Level_1"), _ = at(__rea_outer_n), L = at(__rea_outer_n), x = at(__rea_outer_o), P = at(__rea_outer_o), B = at(__rea_outer_n), E = at(__rea_outer_n), M = at(__rea_outer_n), C = at(__rea_outer_n), O = at(__rea_outer_r), V = at(__rea_outer_r), z = at(__rea_outer_r), H = at(__rea_outer_r), K = at(__rea_outer_n), R = at(__rea_outer_n), U = at(__rea_outer_n), k(($ = __rea_outer_e((G = class extends __rea_outer_g {
  constructor(...t) {
    super(...t), __rea_outer_i(this, "bubbleNode1", $, this), __rea_outer_i(this, "bubbleNode2", F, this), __rea_outer_i(this, "tip1Label", W, this), __rea_outer_i(this, "tip2Label", Q, this), __rea_outer_i(this, "cloudeNode", j, this), __rea_outer_i(this, "clouds", q, this), __rea_outer_i(this, "rainNode", J, this), __rea_outer_i(this, "rains", X, this), __rea_outer_i(this, "dragSprites", Z, this), __rea_outer_i(this, "clickSprites", tt, this), __rea_outer_i(this, "shakeSprite", et, this), __rea_outer_i(this, "animationSprites", it, this), __rea_outer_i(this, "touchOutArearNode", st, this), __rea_outer_i(this, "boysmileNode", nt, this), __rea_outer_i(this, "girlsmileNode", ot, this), this.phase = 0, this.winstate = !1, this.doneItems = [], this.hint_arr = ["level1_hint1", "level1_hint2", "level1_hint3", "level1_hint4", "level1_hint5", "level1_hint6", "level1_hint7", "level1_hint8", "level1_hint9", "level1_hint10"], this.config_arr = [{
      ID: 0,
      soundkey: "1_2",
      showtype: 1,
      textStrKey: "1_2"
    }, {
      ID: 1,
      soundkey: "1_3",
      showtype: 2,
      textStrKey: "1_3"
    }, {
      ID: 2,
      soundkey: "1_4",
      showtype: 1,
      textStrKey: "1_4"
    }, {
      ID: 3,
      soundkey: "1_5",
      showtype: 2,
      textStrKey: "1_5"
    }, {
      ID: 4,
      soundkey: "1_6",
      showtype: 1,
      textStrKey: "1_6"
    }, {
      ID: 5,
      soundkey: "1_7",
      showtype: 1,
      textStrKey: "1_7"
    }, {
      ID: 6,
      soundkey: "1_8",
      showtype: 2,
      textStrKey: "1_8"
    }, {
      ID: 7,
      soundkey: "1_9",
      showtype: 2,
      textStrKey: "1_9"
    }, {
      ID: 8,
      soundkey: "1_10",
      showtype: 1,
      textStrKey: "1_10"
    }, {
      ID: 9,
      soundkey: "1_11",
      showtype: 1,
      textStrKey: "1_11"
    }], this.rainDropNodes = [], this.activeDragState = null, this.isInteractionLocked = !1, this.cloudYMin = 0, this.cloudYMax = 0, this.hotAirBalloon1Node = null, this.onClickSpriteTouched = t => {
      if (1 !== this.phase || this.isInteractionLocked) return;
      const e = t.target,
        i = this.clickSprites.find(t => (null == t ? void 0 : t.node) === e);
      i && !this.isItemDone(i.node) && (this.isInteractionLocked = !0, this.playItemExitAnimation(i.node, () => {
        this.markItemDone(i.node), this.showBoyBubble("1_7", !0), this.scheduleOnce(() => {
          this.isValid && (this.hideBoyBubble(), this.isInteractionLocked = !1, this.checkPhase1Complete());
        }, 2);
      }));
    }, this.onDragTouchStart = t => {
      if (1 !== this.phase || this.isInteractionLocked) return;
      const e = this.resolveDragSpriteFromNode(t.target);
      e && e.node.active && !this.isItemDone(e.node) && (this.activeDragState = {
        sprite: e,
        originParent: e.node.parent,
        originPosition: e.node.position.clone(),
        originSiblingIndex: e.node.getSiblingIndex()
      }, this.elevateDragNodeAboveBalloon(e));
    }, this.onDragTouchMove = t => {
      if (!this.activeDragState || 1 !== this.phase) return;
      const e = legacyTouchDelta(t),
        i = this.activeDragState.sprite.node,
        s = i.position;
      i.setPosition(s.x + e.x, s.y + e.y, s.z);
    }, this.onDragTouchEnd = t => {
      if (!this.activeDragState || 1 !== this.phase || this.isInteractionLocked) return this.resetActiveDragPosition(), void (this.activeDragState = null);
      const e = this.activeDragState;
      if (this.activeDragState = null, !this.isNodeOutsideTouchArea(e.sprite.node)) return void this.restoreDragNodeTransform(e);
      const i = this.dragSprites.indexOf(e.sprite);
      i < 0 || (this.isInteractionLocked = !0, this.playItemExitAnimation(e.sprite.node, () => {
        this.completeDragItem(i, e.sprite.node);
      }));
    };
  }
  onLoad() {
    super.onLoad(), this.hotAirBalloon1Node = this.findNodeByName(this.node, "hot_air_balloon_1"), this.allItemNum = this.clickSprites.length + this.dragSprites.length, this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.enterPhase0();
  }
  onDestroy() {
    this.unscheduleAllCallbacks(), this.unregisterInteractionHandlers(), this.stopAmbientAnimations(), this.stopAllLevelSpriteTweens(), __rea_outer_b.stopVoice();
  }
  showHint() {
    if (1 !== this.phase) return;
    const t = this.resolveNextHintKey();
    if (!t) return;
    const e = __rea_outer_m.getInstance().getKey(t);
    __rea_outer_y.getInstance().showView(__rea_outer_f, void 0, {
      body: e
    });
  }
  resolveNextHintKey() {
    for (let t = 0; t < this.dragSprites.length; t += 1) if (this.isPendingHintSprite(this.dragSprites[t])) return this.hint_arr[t] ?? null;
    return this.clickSprites.some(t => this.isPendingHintSprite(t)) ? "level1_hint6" : null;
  }
  isPendingHintSprite(t) {
    var e;
    return !(null == t || null == (e = t.node) || !e.isValid || !t.node.active) && !this.isItemDone(t.node);
  }
  getGameProgressSnapshot() {
    const t = this.clickSprites.length + this.dragSprites.length,
      e = this.doneItems.length;
    return {
      progress: t > 0 ? e / t : 0,
      label: `${e}/${t}`
    };
  }
  resetLevelState() {
    var t, e;
    this.phase = 0, this.winstate = !1, this.doneItems = [], this.activeDragState = null, this.isInteractionLocked = !1, this.hasInstallNum = 0, this.setNodeActive(this.boysmileNode, !1), this.setNodeActive(this.girlsmileNode, !1), this.setNodeActive(this.bubbleNode1, !1), this.setNodeActive(this.bubbleNode2, !1), this.setNodeActive((null == (t = this.tip1Label) ? void 0 : t.node) ?? null, !1), this.setNodeActive((null == (e = this.tip2Label) ? void 0 : e.node) ?? null, !1), __rea_outer_b.stopVoice();
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_b.playMusic("bgm3", !0, .5), this.startCloudAnimations(), this.startRainAnimations(), this.startDecorationAnimations(), this.showPhase0Intro();
  }
  skipOpeningToPlay() {
    return 0 === this.phase && (this.stopOpeningDialogue(), this.hideBoyBubble(), this.enterPhase1(), !0);
  }
  enterPhase1() {
    0 === this.phase && (this.phase = 1, this.setupPhase1Sprites(), this.registerInteractionHandlers(), __rea_outer_w.getInstance().refreshGameProgress());
  }
  enterPhase2() {
    this.phase >= 2 || (this.phase = 2, this.winstate = !0, __rea_outer_w.getInstance().pauseTimer(), this.unregisterInteractionHandlers(), this.stopAmbientAnimations(), this.playPhase2Ending());
  }
  setupPhase1Sprites() {
    const t = this.dragSprites[2];
    __rea_outer_v(t) && (t.node.active = !0);
  }
  showPhase0Intro() {
    var t;
    this.setNodeActive(this.bubbleNode2, !1), this.setNodeActive((null == (t = this.tip2Label) ? void 0 : t.node) ?? null, !1), this.showBoyBubble("1_1", !0, "1_1"), this.scheduleOnce(() => {
      this.isValid && 0 === this.phase && (this.hideBoyBubble(), this.enterPhase1());
    }, 5);
  }
  startCloudAnimations() {
    const t = this.clouds.filter(t => null !== t).map(t => t.position.y);
    t.length > 0 && (this.cloudYMin = Math.min(...t) - 40, this.cloudYMax = Math.max(...t) + 40), this.clouds.forEach((t, e) => {
      if (!t) return;
      const i = __rea_outer_S(t) * Math.abs(t.scale.x),
        s = -540 - i,
        n = 540 + .5 * i,
        o = n - s,
        r = this.getCloudLoopDuration(e),
        a = () => {
          if (this.phase >= 2 || !t.isValid) return;
          const i = t.position.x,
            l = Math.max(i - s, 1),
            c = r * (l / o);
          __rea_outer_d(t).tag(ct + e).to(c, {
            position: new __rea_outer_h(s, t.position.y, t.position.z)
          }).call(() => {
            const i = this.getRandomCloudY(t.position.y);
            t.setPosition(n, i, t.position.z), __rea_outer_d(t).tag(ct + e).to(r, {
              position: new __rea_outer_h(s, i, t.position.z)
            }).call(a).start();
          }).start();
        };
      a();
    });
  }
  getCloudLoopDuration(t) {
    const e = 180 / Math.pow(1.65, t);
    return Math.max(35, e);
  }
  getRandomCloudY(t) {
    return this.cloudYMax <= this.cloudYMin ? t + 80 * (Math.random() - .5) : this.cloudYMin + Math.random() * (this.cloudYMax - this.cloudYMin);
  }
  startRainAnimations() {
    if (!this.rainNode) return;
    const t = this.rains.filter(t => null !== t);
    if (0 !== t.length) {
      t.forEach(t => {
        t.active = !1;
      });
      for (let e = 0; e < 20; e += 1) {
        const i = t[e % t.length],
          s = __rea_outer_l(i);
        s.active = !0, s.setParent(this.rainNode), this.rainDropNodes.push(s);
        const n = 4.5 * Math.random();
        this.scheduleOnce(() => {
          this.isValid && s.isValid && this.startRainDropLoop(s, e);
        }, n);
      }
    }
  }
  startRainDropLoop(t, e) {
    const i = Math.max(__rea_outer_S(t), 1),
      s = Math.max(__rea_outer_N(t), 1),
      n = Math.atan(s / i),
      o = () => {
        if (this.phase >= 2 || !t.isValid) return;
        this.resetRainDropPosition(t);
        const i = t.position.clone(),
          s = -Math.cos(n) * dt,
          r = -Math.sin(n) * dt,
          a = new __rea_outer_h(i.x + s, i.y + r, i.z),
          l = 520 + 380 * Math.random(),
          c = dt / l;
        __rea_outer_d(t).tag(200 + e).to(c, {
          position: a
        }).call(o).start();
      };
    o();
  }
  resetRainDropPosition(t) {
    const e = 86.4 + Math.random() * lt * .42,
      i = 230.39999999999998 + Math.random() * ht * .28;
    t.setPosition(e, i, t.position.z);
  }
  startDecorationAnimations() {
    this.animationSprites.forEach((t, e) => {
      t && __rea_outer_T.RoseBreath_tag(t.node, 1, .02, .7, 0, 300 + e);
    }), this.shakeSprite && this.startStormSwayEffect(this.shakeSprite.node);
  }
  startStormSwayEffect(t) {
    const e = t.position.clone(),
      i = t.angle,
      s = () => {
        if (this.phase >= 2 || !t.isValid) return;
        const n = (Math.random() > .5 ? 1 : -1) * (.8 + 1.2 * Math.random()),
          o = e.x + 5 * (Math.random() - .5),
          r = e.y + 3 * (Math.random() - .5),
          a = .45 + .35 * Math.random();
        __rea_outer_d(t).tag(400).to(a, {
          angle: i + n,
          position: new __rea_outer_h(o, r, e.z)
        }, {
          easing: "sineInOut"
        }).to(a, {
          angle: i,
          position: e
        }, {
          easing: "sineInOut"
        }).call(s).start();
      };
    s();
  }
  registerInteractionHandlers() {
    this.clickSprites.forEach(t => {
      null != t && t.node && t.node.on(__rea_outer_n.EventType.TOUCH_END, this.onClickSpriteTouched, this);
    }), this.dragSprites.forEach(t => {
      null != t && t.node && (t.node.on(__rea_outer_n.EventType.TOUCH_START, this.onDragTouchStart, this), t.node.on(__rea_outer_n.EventType.TOUCH_MOVE, this.onDragTouchMove, this), t.node.on(__rea_outer_n.EventType.TOUCH_END, this.onDragTouchEnd, this), t.node.on(__rea_outer_n.EventType.TOUCH_CANCEL, this.onDragTouchEnd, this));
    });
  }
  unregisterInteractionHandlers() {
    this.clickSprites.forEach(t => {
      var e;
      null == t || null == (e = t.node) || e.off(__rea_outer_n.EventType.TOUCH_END, this.onClickSpriteTouched, this);
    }), this.dragSprites.forEach(t => {
      var e, i, s, o;
      null == t || null == (e = t.node) || e.off(__rea_outer_n.EventType.TOUCH_START, this.onDragTouchStart, this), null == t || null == (i = t.node) || i.off(__rea_outer_n.EventType.TOUCH_MOVE, this.onDragTouchMove, this), null == t || null == (s = t.node) || s.off(__rea_outer_n.EventType.TOUCH_END, this.onDragTouchEnd, this), null == t || null == (o = t.node) || o.off(__rea_outer_n.EventType.TOUCH_CANCEL, this.onDragTouchEnd, this);
    });
  }
  completeDragItem(t, e) {
    this.markItemDone(e);
    const i = this.findConfigByIndex(t);
    if (!i) return this.isInteractionLocked = !1, void this.checkPhase1Complete();
    if (2 === i.showtype) return this.showGirlBubble(i.textStrKey, i.soundkey), void this.scheduleOnce(() => {
      this.isValid && (this.hideGirlBubble(), this.isInteractionLocked = !1, this.checkPhase1Complete());
    }, 1);
    this.showBoyBubble(i.textStrKey, !0, i.soundkey), this.scheduleOnce(() => {
      this.isValid && (this.hideBoyBubble(), this.isInteractionLocked = !1, this.checkPhase1Complete());
    }, 1);
  }
  playItemExitAnimation(t, e) {
    __rea_outer_I(t);
    const i = t.position.clone(),
      s = new __rea_outer_h(i.x, i.y - ht, i.z);
    __rea_outer_d(t).parallel(__rea_outer_d().to(.8, {
      angle: t.angle - 45
    }), __rea_outer_d().to(.8, {
      position: s
    })).call(() => {
      t.isValid && (t.active = !1, this.isValid && e());
    }).start();
  }
  playPhase2Ending() {
    const t = this.cloudeNode;
    if (!t) return void this.schedulePhase2Smiles();
    __rea_outer_d(t).to(2, {
      position: new __rea_outer_h(t.position.x, t.position.y - 1920, t.position.z)
    }).call(() => {
      this.clouds.forEach(t => {
        null != t && t.isValid && (__rea_outer_I(t), t.removeFromParent(), t.destroy());
      }), this.clouds.length = 0;
    }).start(), this.schedulePhase2Smiles();
  }
  schedulePhase2Smiles() {
    this.scheduleOnce(() => {
      this.isValid && (this.setNodeActive(this.boysmileNode, !0), this.setNodeActive(this.girlsmileNode, !0), this.scheduleOnce(() => {
        this.isValid && this.showLevelSuccess();
      }, 1.5));
    }, 2);
  }
  stopAllLevelSpriteTweens() {
    __rea_outer_D(this.dragSprites), __rea_outer_D(this.clickSprites), __rea_outer_D(this.animationSprites), __rea_outer_A(this.shakeSprite);
  }
  stopAmbientAnimations() {
    var t, e;
    __rea_outer_c.stopAllByTag(ct), __rea_outer_c.stopAllByTag(200), __rea_outer_c.stopAllByTag(400), this.clouds.forEach((t, e) => {
      null != t && t.isValid && (__rea_outer_I(t), __rea_outer_c.stopAllByTag(ct + e));
    }), this.rainDropNodes.forEach((t, e) => {
      null != t && t.isValid && (__rea_outer_I(t), __rea_outer_c.stopAllByTag(200 + e), t.removeFromParent(), t.destroy());
    }), this.rainDropNodes.length = 0, this.animationSprites.forEach((t, e) => {
      const i = null == t ? void 0 : t.node;
      null != i && i.isValid && (__rea_outer_I(i), __rea_outer_c.stopAllByTag(300 + e));
    });
    const i = null == (t = this.shakeSprite) ? void 0 : t.node;
    null != i && i.isValid && __rea_outer_I(i), null != (e = this.cloudeNode) && e.isValid && __rea_outer_c.stopAllByTarget(this.cloudeNode);
  }
  checkPhase1Complete() {
    const t = this.clickSprites.length + this.dragSprites.length;
    this.doneItems.length < t || this.enterPhase2();
  }
  markItemDone(t) {
    this.isItemDone(t) || (this.doneItems.push(t), this.hasInstallNum = this.doneItems.length, __rea_outer_w.getInstance().refreshGameProgress(), this.TryQuickWin());
  }
  markAllTasksCompleted() {
    super.markAllTasksCompleted(), this.phase = 2, this.winstate = !0, this.isInteractionLocked = !0, this.unregisterInteractionHandlers(), this.stopAmbientAnimations();
  }
  isItemDone(t) {
    return this.doneItems.indexOf(t) >= 0;
  }
  findConfigByIndex(t) {
    return this.config_arr.find(e => e.ID === t);
  }
  resolveDragSpriteFromNode(t) {
    let e = t;
    for (; e;) {
      const t = this.dragSprites.find(t => (null == t ? void 0 : t.node) === e);
      if (t) return t;
      e = e.parent;
    }
  }
  isNodeOutsideTouchArea(t) {
    if (!this.touchOutArearNode) return !0;
    const e = this.touchOutArearNode.getComponent(__rea_outer_u),
      i = t.getComponent(__rea_outer_u);
    if (!e || !i) return !0;
    const s = e.getBoundingBoxToWorld(),
      n = i.getBoundingBoxToWorld(),
      o = new __rea_outer_p(n.x + .5 * n.width, n.y + .5 * n.height);
    return !s.contains(o);
  }
  elevateDragNodeAboveBalloon(t) {
    const e = t.node,
      i = this.hotAirBalloon1Node;
    if (null == i || !i.parent) return;
    const s = i.parent;
    if (e.parent !== s) {
      const t = e.worldPosition.clone();
      e.setParent(s), e.setWorldPosition(t);
    }
    const n = Math.min(i.getSiblingIndex() + 1, s.children.length - 1);
    e.setSiblingIndex(n);
  }
  restoreDragNodeTransform(t) {
    var e;
    const i = t.sprite.node;
    null != (e = t.originParent) && e.isValid && (i.setParent(t.originParent), i.setPosition(t.originPosition), i.setSiblingIndex(t.originSiblingIndex));
  }
  findNodeByName(t, e) {
    if (t.name === e) return t;
    for (const i of t.children) {
      const t = this.findNodeByName(i, e);
      if (t) return t;
    }
    return null;
  }
  resetActiveDragPosition() {
    this.activeDragState && this.restoreDragNodeTransform(this.activeDragState);
  }
  showBoyBubble(t, e, i) {
    var s;
    const n = __rea_outer_m.getInstance(),
      o = n.getKey(t);
    console.log(`[Level_1] showBoyBubble textKey=${t}, value=${o}, i18nReady=${n.isReady()}, tip1Label=${this.tip1Label ? "ok" : "null"}`), this.tip1Label && (this.tip1Label.string = o), this.setNodeActive(this.bubbleNode1, !0), this.setNodeActive((null == (s = this.tip1Label) ? void 0 : s.node) ?? null, !0), e && __rea_outer_b.playVoice(i ?? t);
  }
  hideBoyBubble() {
    var t;
    this.setNodeActive(this.bubbleNode1, !1), this.setNodeActive((null == (t = this.tip1Label) ? void 0 : t.node) ?? null, !1);
  }
  showGirlBubble(t, e) {
    var i;
    const s = __rea_outer_m.getInstance(),
      n = s.getKey(t);
    console.log(`[Level_1] showGirlBubble textKey=${t}, value=${n}, i18nReady=${s.isReady()}, tip2Label=${this.tip2Label ? "ok" : "null"}`), this.tip2Label && (this.tip2Label.string = n), this.setNodeActive(this.bubbleNode2, !0), this.setNodeActive((null == (i = this.tip2Label) ? void 0 : i.node) ?? null, !0), __rea_outer_b.playVoice(e);
  }
  hideGirlBubble() {
    var t;
    this.setNodeActive(this.bubbleNode2, !1), this.setNodeActive((null == (t = this.tip2Label) ? void 0 : t.node) ?? null, !1);
  }
  setNodeActive(t, e) {
    t && (t.active = e);
  }
}).prototype, "bubbleNode1", [_], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), F = __rea_outer_e(G.prototype, "bubbleNode2", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), W = __rea_outer_e(G.prototype, "tip1Label", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Q = __rea_outer_e(G.prototype, "tip2Label", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), j = __rea_outer_e(G.prototype, "cloudeNode", [B], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), q = __rea_outer_e(G.prototype, "clouds", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), J = __rea_outer_e(G.prototype, "rainNode", [M], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), X = __rea_outer_e(G.prototype, "rains", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), Z = __rea_outer_e(G.prototype, "dragSprites", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), tt = __rea_outer_e(G.prototype, "clickSprites", [V], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), et = __rea_outer_e(G.prototype, "shakeSprite", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), it = __rea_outer_e(G.prototype, "animationSprites", [H], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), st = __rea_outer_e(G.prototype, "touchOutArearNode", [K], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), nt = __rea_outer_e(G.prototype, "boysmileNode", [R], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ot = __rea_outer_e(G.prototype, "girlsmileNode", [U], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Y = G)) || Y);
__rea_outer_s._RF.pop();
export { __recovered_export_0 as default };
