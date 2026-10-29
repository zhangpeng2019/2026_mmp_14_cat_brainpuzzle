// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_61.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { Size as __rea_outer_i } from "cc";
import { Vec3 as __rea_outer_s } from "cc";
import { Vec2 as __rea_outer_l } from "cc";
import { Color as __rea_outer_n } from "cc";
import { Node as __rea_outer_o } from "cc";
import { Button as __rea_outer_h } from "cc";
import { tween as __rea_outer_a } from "cc";
import { instantiate as __rea_outer_d } from "cc";
import { RigidBody2D as __rea_outer_c } from "cc";
import { PhysicsSystem2D as __rea_outer_r } from "cc";
import { ERigidBody2DType as __rea_outer_u } from "cc";
import { BoxCollider2D as __rea_outer_p } from "cc";
import { CircleCollider2D as __rea_outer_w } from "cc";
import { Sprite as __rea_outer_g } from "cc";
import { Label as __rea_outer_N } from "cc";
import { UITransform as __rea_outer_m } from "cc";
import { _decorator as __rea_outer_v } from "cc";
import { default as __rea_outer_y } from "./LevelBase";
import { default as __rea_outer_f } from "./AudioManager";
import { I18nController as __rea_outer_b } from "./i18n-controller";
import { UIManager as __rea_outer_C } from "./ui-manager";
import { UILayer as __rea_outer_S } from "./ui-layer";
import { UIHint as __rea_outer_T } from "./uihint";
import { UIFail as __rea_outer_I } from "./uifail";
import { GameController as __rea_outer_B } from "./GameController";
import { stopAllTweens as __rea_outer_P } from "./CocosCompat";
import { ensureUITransform as __rea_outer_A } from "./CocosCompat";
let __recovered_export_0;
var E;
__rea_outer_t._RF.push({}, "a61b0wRfWFOM59EVaZrAABh", "Level_61", void 0);
const {
    ccclass: V
  } = __rea_outer_v,
  x = -432.5,
  F = new __rea_outer_i(126, 121),
  k = new __rea_outer_s(0, 465, 0),
  M = .15,
  H = -841.303,
  _ = -148.665,
  L = new __rea_outer_s(87.5, 220.5, 0),
  R = new __rea_outer_s(-12.5, 88.5, 0),
  O = -292.603,
  W = new __rea_outer_l(0, -320),
  D = new __rea_outer_n(255, 230, 80, 255),
  U = new __rea_outer_n(255, 255, 255, 255),
  G = [[[2, 2, 1, 1, 3, 1, 1, 2], [2, 1, 2, 2, 1, 1, 3, 2], [3, 2, 1, 3, 1, 3, 1, 1], [1, 2, 2, 1, 3, 1, 1, 2], [2, 3, 2, 1, 1, 3, 2, 2]], [[1, 2, 3, 1, 1, 2, 2, 1], [2, 2, 3, 2, 1, 2, 1, 2], [2, 1, 3, 1, 3, 2, 2, 1], [1, 2, 2, 3, 1, 1, 2, 2], [2, 2, 1, 1, 2, 2, 1, 1]], [[1, 2, 3, 1, 1, 2, 2, 1], [3, 2, 1, 1, 2, 2, 1, 1], [3, 1, 1, 2, 2, 1, 2, 2], [2, 1, 2, 1, 1, 2, 1, 1], [2, 2, 1, 2, 1, 1, 2, 2]]];
__recovered_export_0 = V("Level_61")(E = class extends __rea_outer_y {
  constructor(...e) {
    super(...e), this.phase = 0, this.winstate = !1, this.gameNode = null, this.backBgNode = null, this.bubbleNode = null, this.bubbleLabel = null, this.clickRootNode = null, this.infoButtonNode = null, this.infoButton = null, this.demoNode = null, this.bgNode = null, this.railNode = null, this.ipNode = null, this.ipWinFace = null, this.ipFailFace = null, this.wallNode = null, this.wall1Node = null, this.wall2Node = null, this.wall3Node = null, this.wall4Node = null, this.stone1Template = null, this.stone2Template = null, this.stoneRoot = null, this.wallY = 559, this.cells = [], this.stones = [], this.screwFrames = [null, null, null, null], this.gesture = null, this.isSettling = !1, this.hasIntroFinished = !1, this.spawnedStoneCount = 0, this.fallenStoneCount = 0, this.wallElapsed = 0, this.spawnTimer = 0, this.moveTimer = 0, this.voiceToken = 0, this.currentVoiceKey = "", this.wasPhysicsEnabled = !1, this.hasEnabledPhysics = !1, this.previousGravity = new __rea_outer_l();
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.allItemNum = 1, this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.applyInitialVisibility(), this.enterPhase0();
  }
  update(e) {
    this.isValid && (this.spawnStonesIfNeeded(e), this.tryEnterPhase1(), this.phase < 1 || this.phase >= 2 || (this.recycleFallenStones(), this.stepPressure(e), this.syncIpFaces(), this.evaluatePhase1Outcome()));
  }
  onDestroy() {
    this.unscheduleAllCallbacks(), this.unregisterHandlers(), this.stopTrackedTweens(), this.clearSpawnedStones(), this.restorePhysics(), super.onDestroy();
  }
  handleTimeExpired() {
    return !!(this.phase >= 2 || this.winstate);
  }
  showHint() {
    const e = __rea_outer_b.getInstance().getKey("level61_legend");
    __rea_outer_C.getInstance().showView(__rea_outer_T, void 0, {
      body: e
    });
  }
  getGameProgressSnapshot() {
    const e = this.hasInstallNum;
    return {
      progress: e / 1,
      label: `${e}/1`
    };
  }
  markAllTasksCompleted() {
    this.hasInstallNum = 1;
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.gesture = null, this.isSettling = !1, this.hasIntroFinished = !1, this.spawnedStoneCount = 0, this.fallenStoneCount = 0, this.wallElapsed = 0, this.spawnTimer = 0, this.moveTimer = 0, this.voiceToken = 0, this.currentVoiceKey = "", this.hasInstallNum = 0, __rea_outer_f.stopVoice();
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_f.playMusic("bgm3", !0, .5), this.enablePhysics(), this.setupStaticPhysics(), this.applyRandomLayout(), this.setInputBlocked(!0), this.setNodeActive(this.clickRootNode, !1), __rea_outer_B.getInstance().refreshGameProgress(), this.playBubbleVoice("61_1", () => {
      this.isValid && 0 === this.phase && (this.hasIntroFinished = !0, this.tryEnterPhase1());
    });
  }
  tryEnterPhase1() {
    0 === this.phase && this.hasIntroFinished && (this.countFieldStones() < 20 || !this.areStonesSettled() || (this.hideBubble(), this.enterPhase1()));
  }
  enterPhase1() {
    this.phase = 1, this.wallElapsed = 0, this.setInputBlocked(!1), this.setNodeActive(this.clickRootNode, !0), this.registerHandlers(), this.startWallDescent(), __rea_outer_B.getInstance().refreshGameProgress();
  }
  enterPhase2Success() {
    this.phase >= 2 || (this.phase = 2, this.winstate = !0, this.beginSettlement(), this.hasInstallNum = 1, __rea_outer_B.getInstance().refreshGameProgress(), this.setNodeActive(this.ipFailFace, !1), this.setNodeActive(this.ipWinFace, !0), this.playBubbleVoice("61_2", () => {
      this.isValid && (this.hideBubble(), this.showLevelSuccess(0));
    }));
  }
  enterPhase2Fail() {
    this.phase >= 2 || (this.phase = 2, this.winstate = !1, this.beginSettlement(), this.hideBubble(), this.setNodeActive(this.ipWinFace, !1), this.setNodeActive(this.ipFailFace, !0), this.scheduleOnceIfValid(() => {
      __rea_outer_C.getInstance().showView(__rea_outer_I, __rea_outer_S.WIN_ANIMATION);
    }, 1));
  }
  beginTimeoutFail() {
    this.phase = 2, this.winstate = !1, this.beginSettlement(), this.voiceToken += 1, this.stopCurrentVoice(), this.hideBubble(), __rea_outer_C.getInstance().showView(__rea_outer_I, __rea_outer_S.WIN_ANIMATION);
  }
  beginSettlement() {
    this.gesture = null, this.isSettling = !0, this.unregisterHandlers(), this.stopTrackedTweens(), this.stopWallDescent(), this.setInputBlocked(!0), this.setNodeActive(this.clickRootNode, !1), __rea_outer_B.getInstance().pauseTimer();
  }
  registerHandlers() {
    var e;
    this.node.on(__rea_outer_o.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(__rea_outer_o.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(__rea_outer_o.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(__rea_outer_o.EventType.TOUCH_CANCEL, this.onTouchEnd, this), null == (e = this.infoButton) || e.node.on(__rea_outer_h.EventType.CLICK, this.onInfoButtonClick, this);
  }
  unregisterHandlers() {
    var e;
    this.node.off(__rea_outer_o.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(__rea_outer_o.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(__rea_outer_o.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(__rea_outer_o.EventType.TOUCH_CANCEL, this.onTouchEnd, this), null != (e = this.infoButton) && null != (e = e.node) && e.isValid && this.infoButton.node.off(__rea_outer_h.EventType.CLICK, this.onInfoButtonClick, this);
  }
  onInfoButtonClick() {
    this.showHint();
  }
  onTouchStart(e) {
    if (1 !== this.phase || this.winstate || this.isSettling || this.gesture) return;
    const t = this.getTouchWorldPoint(e);
    if (this.isPointInsideNode(this.infoButtonNode, t)) return;
    const i = this.findFilledCellAt(t);
    i && (this.gesture = {
      touchId: e.getID(),
      startPoint: t.clone(),
      clickCell: i,
      dir: null,
      exchangeCell: null,
      canSwap: !1
    });
  }
  onTouchMove(e) {
    const t = this.gesture;
    if (!t || e.getID() !== t.touchId || this.isSettling) return;
    const i = this.getTouchWorldPoint(e);
    this.lockSwapDirection(t, i), this.followSwapFinger(t, e.getUIDelta());
  }
  onTouchEnd(e) {
    const t = this.gesture;
    t && e.getID() === t.touchId && (this.gesture = null, 1 !== this.phase || this.winstate || (t.dir && t.exchangeCell && t.canSwap ? this.commitSwap(t.clickCell, t.exchangeCell) : this.bounceSwap(t.clickCell, t.exchangeCell)));
  }
  lockSwapDirection(e, t) {
    if (e.dir) return;
    const i = t.x - e.startPoint.x,
      s = t.y - e.startPoint.y;
    if (Math.abs(i) < 5 && Math.abs(s) < 5) return;
    const l = this.resolveSwapDir(i, s);
    e.dir = l, e.exchangeCell = this.getNeighborCell(e.clickCell, l);
  }
  resolveSwapDir(e, t) {
    return Math.abs(e) >= Math.abs(t) ? e < 0 ? "left" : "right" : t < 0 ? "down" : "up";
  }
  followSwapFinger(e, t) {
    const i = e.exchangeCell,
      s = e.clickCell.node;
    if (!e.dir || null == i || !i.node || !s || 0 === i.color) return;
    const l = e.clickCell.home,
      n = i.home;
    if ("left" === e.dir || "right" === e.dir) {
      this.shiftPairOnAxis(s, i.node, "x", t.x, l.x, n.x);
      const o = .5 * (l.x + n.x);
      return void (e.canSwap = "right" === e.dir ? s.position.x >= o : s.position.x <= o);
    }
    this.shiftPairOnAxis(s, i.node, "y", t.y, l.y, n.y);
    const o = .5 * (l.y + n.y);
    e.canSwap = "up" === e.dir ? s.position.y >= o : s.position.y <= o;
  }
  shiftPairOnAxis(e, t, i, s, l, n) {
    const o = Math.min(l, n),
      h = Math.max(l, n),
      a = this.clamp(e.position[i] + s, o, h),
      d = this.clamp(t.position[i] - s, o, h);
    this.setAxis(e, i, a), this.setAxis(t, i, d);
  }
  bounceSwap(e, t) {
    this.isSettling = !0, this.tweenCellHome(e), this.tweenCellHome(t), this.scheduleOnceIfValid(() => {
      this.isSettling = !1;
    }, M);
  }
  commitSwap(e, t) {
    this.isSettling = !0, this.swapCellContents(e, t), this.tweenCellHome(e), this.tweenCellHome(t), this.scheduleOnceIfValid(() => {
      this.resolveMatchesOrRevert(e, t);
    }, M);
  }
  resolveMatchesOrRevert(e, t) {
    if (1 !== this.phase || !this.isValid) return;
    const i = this.collectMatches();
    if (0 === i.length) return this.swapCellContents(e, t), void this.bounceSwap(e, t);
    this.highlightAndClear(i);
  }
  highlightAndClear(e) {
    e.forEach(e => {
      this.tintScrew(e.node, D);
    }), this.scheduleOnceIfValid(() => {
      1 === this.phase && (__rea_outer_f.playEffect_1("level61_1"), __rea_outer_f.playEffect_1("level61_2"), e.forEach(e => {
        this.clearCell(e);
      }), this.wakeAllStones(), this.isSettling = !1);
    }, .2);
  }
  collectMatches() {
    const e = new Set();
    for (let t = 0; t < 5; t += 1) this.collectLineMatches(e, t, !0);
    for (let t = 0; t < 8; t += 1) this.collectLineMatches(e, t, !1);
    return Array.from(e);
  }
  collectLineMatches(e, t, i) {
    const s = i ? 8 : 5;
    let l = 0,
      n = 0;
    const o = s => {
      if (!(0 === l || s - n < 3)) for (let l = n; l < s; l += 1) {
        const s = i ? this.getCell(t, l) : this.getCell(l, t);
        s && e.add(s);
      }
    };
    for (let e = 0; e <= s; e += 1) {
      const h = e < s ? this.getLineColor(t, e, i) : 0;
      0 !== h && h === l || (o(e), l = h, n = e);
    }
  }
  getLineColor(e, t, i) {
    const s = i ? this.getCell(e, t) : this.getCell(t, e);
    return (null == s ? void 0 : s.color) ?? 0;
  }
  clearCell(e) {
    const t = e.node;
    e.node = null, e.color = 0, null != t && t.isValid && (this.tintScrew(t, U), this.disableBody(t), t.active = !1);
  }
  swapCellContents(e, t) {
    const i = e.node,
      s = e.color;
    e.node = t.node, e.color = t.color, t.node = i, t.color = s;
  }
  tweenCellHome(e) {
    const t = null == e ? void 0 : e.node;
    e && null != t && t.isValid && (__rea_outer_P(t), __rea_outer_a(t).to(M, {
      position: e.home.clone()
    }).start());
  }
  spawnStonesIfNeeded(e) {
    this.spawnedStoneCount >= 120 || (0 !== this.phase ? 1 === this.phase && (this.spawnTimer += e, this.spawnTimer < .1 || (this.spawnTimer -= .1, this.spawnStone())) : this.spawnedStoneCount < 20 && this.spawnStone());
  }
  spawnStone() {
    var e;
    const t = Math.random() < .5 ? this.stone1Template : this.stone2Template;
    if (null == t || !t.isValid || null == (e = this.stoneRoot) || !e.isValid) return;
    const i = __rea_outer_d(t);
    i.active = !0, i.setParent(this.stoneRoot), i.setPosition(k.x, k.y, 0), this.ensureStoneBody(i), this.stones.push(i), this.spawnedStoneCount += 1;
  }
  areStonesSettled() {
    return this.stones.every(e => {
      var t;
      if (null == e || !e.isValid || !e.active) return !0;
      const i = null == (t = e.getComponent(__rea_outer_c)) ? void 0 : t.linearVelocity;
      return !i || Math.abs(i.y) < 40;
    });
  }
  recycleFallenStones() {
    for (let e = this.stones.length - 1; e >= 0; e -= 1) {
      const t = this.stones[e];
      null == t || !t.isValid || !t.active || t.position.y > -720 || (this.disableBody(t), t.active = !1, this.fallenStoneCount += 1);
    }
  }
  countFieldStones() {
    let e = 0;
    return this.stones.forEach(t => {
      null == t || !t.isValid || !t.active || t.position.y <= -720 || (e += 1);
    }), e;
  }
  stepPressure(e) {
    for (this.moveTimer += e; this.moveTimer >= .1;) this.moveTimer -= .1, this.advanceWall(), this.updateIpPressure();
  }
  advanceWall() {
    const e = this.wallNode;
    if (null == e || !e.isValid) return;
    this.wallElapsed = Math.min(60, this.wallElapsed + .1);
    const t = Math.min(_, H + 11.543966666666668 * this.wallElapsed);
    e.setPosition(t, this.wallY, 0);
  }
  startWallDescent() {
    this.wallElapsed = 0, this.moveTimer = 0, this.snapWallToStart();
  }
  stopWallDescent() {
    this.wallElapsed = Math.min(this.wallElapsed, 60);
  }
  snapWallToStart() {
    var e;
    null == (e = this.wallNode) || e.setPosition(H, this.wallY, 0);
  }
  updateIpPressure() {
    const e = this.ipNode;
    if (null == e || !e.isValid) return;
    const t = Math.min(1, this.wallElapsed / 60),
      i = Math.min(1, this.countFieldStones() / 120),
      s = L.x - t * i * (L.x - O);
    e.setPosition(s, L.y, 0);
  }
  syncIpFaces() {
    var e, t;
    const i = this.ipNode;
    if (null == i || !i.isValid) return;
    const s = i.position.x + R.x,
      l = i.position.y + R.y;
    null == (e = this.ipWinFace) || e.setPosition(s, l, 0), null == (t = this.ipFailFace) || t.setPosition(s, l, 0);
  }
  evaluatePhase1Outcome() {
    1 === this.phase && (this.fallenStoneCount > 80 ? this.enterPhase2Success() : (this.hasHitSpikes() || this.wallElapsed >= 60) && this.enterPhase2Fail());
  }
  hasHitSpikes() {
    const e = this.ipNode;
    return !(null == e || !e.isValid) && e.position.x <= O;
  }
  enablePhysics() {
    const e = __rea_outer_r.instance;
    this.wasPhysicsEnabled = e.enable, this.previousGravity.set(e.gravity), e.enable = !0, e.gravity = W.clone(), this.hasEnabledPhysics = !0;
  }
  restorePhysics() {
    if (!this.hasEnabledPhysics) return;
    const e = __rea_outer_r.instance;
    e.gravity = this.previousGravity.clone(), e.enable = this.wasPhysicsEnabled, this.hasEnabledPhysics = !1;
  }
  setupStaticPhysics() {
    if (this.cells.forEach(e => {
      e.node && this.ensureBoxBody(e.node, __rea_outer_u.Animated, F, new __rea_outer_l(0, 0), !0);
    }), this.wallNode) {
      const e = this.getNodeSize(this.wallNode, 702, 192);
      this.ensureBoxBody(this.wallNode, __rea_outer_u.Animated, e, new __rea_outer_l(0, 0), !0, .1), this.snapWallToStart();
    }
    this.ipNode && this.ensureBoxBody(this.ipNode, __rea_outer_u.Animated, new __rea_outer_i(80, 280), new __rea_outer_l(70, 10), !0), this.setupGuideWall(this.wall1Node), this.setupGuideWall(this.wall2Node), this.setupGuideWall(this.wall3Node), this.setupGuideWall(this.wall4Node);
  }
  setupGuideWall(e) {
    if (null == e || !e.isValid) return;
    const t = this.getNodeSize(e, 100, 40);
    this.ensureBoxBody(e, __rea_outer_u.Static, t, new __rea_outer_l(0, 0), !0, .1), this.disableHitTest(e), e.active = !0;
  }
  ensureBoxBody(e, t, i, s, l, n = .4) {
    let o = e.getComponent(__rea_outer_c);
    o || (o = e.addComponent(__rea_outer_c)), o.type = t, o.gravityScale = t === __rea_outer_u.Dynamic ? 1 : 0, o.fixedRotation = l, o.allowSleep = t === __rea_outer_u.Dynamic, o.awakeOnLoad = !0;
    let h = e.getComponent(__rea_outer_p);
    h || (h = e.addComponent(__rea_outer_p)), h.size = i, h.offset = s, h.friction = n, h.restitution = .05, h.apply();
  }
  ensureStoneBody(e) {
    const t = e.getComponent(__rea_outer_p);
    t && (t.enabled = !1);
    let i = e.getComponent(__rea_outer_c);
    i || (i = e.addComponent(__rea_outer_c)), i.enabled = !0, i.type = __rea_outer_u.Dynamic, i.gravityScale = 1.2, i.fixedRotation = !1, i.allowSleep = !0, i.awakeOnLoad = !0, i.bullet = !0, i.linearDamping = .05, i.angularDamping = .1, i.linearVelocity = new __rea_outer_l(0, 0), i.angularVelocity = 0;
    let s = e.getComponent(__rea_outer_w);
    s || (s = e.addComponent(__rea_outer_w)), s.enabled = !0, s.radius = 30, s.offset = new __rea_outer_l(0, 0), s.friction = .1, s.restitution = .05, s.apply(), i.wakeUp();
  }
  disableBody(e) {
    const t = e.getComponent(__rea_outer_c);
    t && (t.enabled = !1, t.linearVelocity = new __rea_outer_l(0, 0), t.angularVelocity = 0);
    const i = e.getComponent(__rea_outer_p);
    i && (i.enabled = !1);
    const s = e.getComponent(__rea_outer_w);
    s && (s.enabled = !1);
  }
  wakeAllStones() {
    this.stones.forEach(e => {
      const t = e.getComponent(__rea_outer_c);
      null != t && t.enabled && e.active && t.wakeUp();
    });
  }
  applyRandomLayout() {
    const e = G[Math.floor(Math.random() * G.length)];
    for (let t = 0; t < 5; t += 1) for (let i = 0; i < 8; i += 1) {
      const s = this.getCell(t, i);
      if (null == s || !s.node) continue;
      const l = e[t][i];
      s.color = l, s.node.active = !0, this.applyScrewFrame(s.node, l), this.tintScrew(s.node, U), this.enableScrewBody(s.node);
    }
  }
  enableScrewBody(e) {
    const t = e.getComponent(__rea_outer_c);
    t && (t.enabled = !0, t.linearVelocity = new __rea_outer_l(0, 0));
    const i = e.getComponent(__rea_outer_p);
    i && (i.enabled = !0, i.apply());
  }
  applyScrewFrame(e, t) {
    const i = e.getComponent(__rea_outer_g),
      s = this.screwFrames[t];
    i && s && (i.spriteFrame = s);
  }
  tintScrew(e, t) {
    const i = null == e ? void 0 : e.getComponent(__rea_outer_g);
    i && (i.color = t);
  }
  playBubbleVoice(e, t) {
    this.voiceToken += 1;
    const i = this.voiceToken;
    this.bubbleLabel && (this.bubbleLabel.string = __rea_outer_b.getInstance().getKey(e)), this.setNodeActive(this.bubbleNode, !0);
    let s = !1;
    const l = () => {
        !s && this.isValid && i === this.voiceToken && (s = !0, this.unschedule(n), t());
      },
      n = () => {
        l();
      };
    this.scheduleOnce(n, 12), this.stopCurrentVoice(), this.currentVoiceKey = e, __rea_outer_f.playEffect_1(e, l);
  }
  stopCurrentVoice() {
    __rea_outer_f.stopVoice(), this.currentVoiceKey && (__rea_outer_f.stopOneEffect(this.currentVoiceKey), this.currentVoiceKey = "");
  }
  hideBubble() {
    this.setNodeActive(this.bubbleNode, !1);
  }
  setInputBlocked(e) {
    this.setNodeActive(this.backBgNode, e);
  }
  applyInitialVisibility() {
    var e, t, i, s;
    this.setNodeActive(this.bgNode, !0), this.setNodeActive(this.railNode, !0), this.setNodeActive(this.ipNode, !0), this.setNodeActive(this.wallNode, !0), this.setNodeActive(this.wall1Node, !0), this.setNodeActive(this.wall2Node, !0), this.setNodeActive(this.wall3Node, !0), this.setNodeActive(this.wall4Node, !0), this.setNodeActive(this.ipWinFace, !1), this.setNodeActive(this.ipFailFace, !1), this.setNodeActive(this.stone1Template, !1), this.setNodeActive(this.stone2Template, !1), this.cells.forEach(e => {
      this.setNodeActive(e.node, !0);
    }), this.setNodeActive((null == (e = this.gameNode) ? void 0 : e.getChildByName("clicks")) ?? null, !1), this.setNodeActive((null == (t = this.gameNode) ? void 0 : t.getChildByName("drags")) ?? null, !1), this.setNodeActive((null == (i = this.gameNode) ? void 0 : i.getChildByName("swips")) ?? null, !1), this.setNodeActive(this.clickRootNode, !1), this.setNodeActive(this.demoNode, !1), this.setNodeActive(this.bubbleNode, !1), this.setNodeActive((null == (s = this.bubbleNode) ? void 0 : s.getChildByName("dialog_box_1")) ?? null, !1);
  }
  resolveReferences() {
    var e, t, i, s, l;
    const n = this.node.getChildByPath("UIPanel");
    this.gameNode = this.node.getChildByPath("UIPanel/gameNode"), this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.bubbleNode = this.node.getChildByPath("UIPanel/bubble"), this.bubbleLabel = (null == (e = this.bubbleNode) || null == (e = e.getChildByPath("dialog_box/Label")) ? void 0 : e.getComponent(__rea_outer_N)) ?? null, this.clickRootNode = this.node.getChildByPath("UIPanel/click_root"), this.infoButtonNode = (null == (t = this.clickRootNode) ? void 0 : t.getChildByName("infoButton")) ?? (null == (i = this.clickRootNode) ? void 0 : i.getChildByName("Button")) ?? null, this.infoButton = (null == (s = this.infoButtonNode) ? void 0 : s.getComponent(__rea_outer_h)) ?? null, this.setNodeActive(this.infoButtonNode, !1), this.demoNode = this.node.getChildByPath("UIPanel/demo");
    const o = this.gameNode;
    o && __rea_outer_A(o, 1080, 1920);
    const a = (null == o ? void 0 : o.children) ?? [];
    this.bgNode = a[0] ?? null, this.railNode = a[1] ?? null, this.ipNode = a[2] ?? null, this.ipWinFace = a[3] ?? null, this.ipFailFace = a[4] ?? null, this.stone2Template = (null == o ? void 0 : o.getChildByName("stone2")) ?? a[45] ?? null, this.stone1Template = (null == o ? void 0 : o.getChildByName("stone1")) ?? a[46] ?? null, this.wallNode = (null == o ? void 0 : o.getChildByName("wall")) ?? a[47] ?? null, this.wall1Node = (null == o ? void 0 : o.getChildByName("wall1")) ?? null, this.wall2Node = (null == o ? void 0 : o.getChildByName("wall2")) ?? null, this.wall3Node = (null == o ? void 0 : o.getChildByName("wall3")) ?? null, this.wall4Node = (null == o ? void 0 : o.getChildByName("wall4")) ?? null, this.wallY = (null == (l = this.wallNode) ? void 0 : l.position.y) ?? this.wallY, this.buildGrid(a), this.cacheScrewFrames(), this.ensureStoneRoot(o), this.disableHitTest(this.bgNode), this.disableHitTest(this.railNode), this.disableHitTest(this.wallNode), this.disableHitTest(this.wall1Node), this.disableHitTest(this.wall2Node), this.disableHitTest(this.wall3Node), this.disableHitTest(this.wall4Node), this.disableHitTest(this.demoNode), this.warnIfMissing("UIPanel", n), this.warnIfMissing("UIPanel/gameNode", this.gameNode), this.warnIfMissing("ip", this.ipNode), this.warnIfMissing("wall", this.wallNode), this.warnIfMissing("wall1", this.wall1Node), this.warnIfMissing("wall2", this.wall2Node), this.warnIfMissing("wall3", this.wall3Node), this.warnIfMissing("wall4", this.wall4Node), this.warnIfMissing("stone1", this.stone1Template), this.warnIfMissing("infoButton", this.infoButtonNode), this.warnIfMissing("bubble", this.bubbleNode);
  }
  buildGrid(e) {
    this.cells.length = 40, e.forEach(e => {
      if (!e.name.startsWith("screw_")) return;
      const t = Math.round((e.position.x - x) / 126),
        i = Math.round((-79.5 - e.position.y) / 122);
      t < 0 || t >= 8 || i < 0 || i >= 5 || (this.cells[8 * i + t] = {
        row: i,
        col: t,
        home: new __rea_outer_s(x + 126 * t, -79.5 - 122 * i, 0),
        node: e,
        color: this.colorFromName(e.name)
      });
    });
    const t = this.cells.filter(e => !!e).length;
    40 !== t && console.warn(`[Level_61] expected 40 screws, got ${t}`);
  }
  cacheScrewFrames() {
    this.cells.forEach(e => {
      var t;
      null != e && e.node && !this.screwFrames[e.color] && (this.screwFrames[e.color] = (null == (t = e.node.getComponent(__rea_outer_g)) ? void 0 : t.spriteFrame) ?? null);
    });
  }
  ensureStoneRoot(e) {
    if (!e) return;
    const t = new __rea_outer_o("stone_root");
    e.addChild(t);
    const i = this.wallNode ? this.wallNode.getSiblingIndex() : e.children.length - 1;
    t.setSiblingIndex(Math.max(0, i)), this.stoneRoot = t;
  }
  getCell(e, t) {
    return e < 0 || e >= 5 || t < 0 || t >= 8 ? null : this.cells[8 * e + t] ?? null;
  }
  getNeighborCell(e, t) {
    return "up" === t ? this.getCell(e.row - 1, e.col) : "down" === t ? this.getCell(e.row + 1, e.col) : "left" === t ? this.getCell(e.row, e.col - 1) : this.getCell(e.row, e.col + 1);
  }
  findFilledCellAt(e) {
    for (let i = this.cells.length - 1; i >= 0; i -= 1) {
      var t;
      const s = this.cells[i];
      if (s && 0 !== s.color && null != (t = s.node) && t.activeInHierarchy && this.isPointInsideNode(s.node, e)) return s;
    }
    return null;
  }
  colorFromName(e) {
    return "screw_2" === e ? 2 : "screw_3" === e ? 3 : 1;
  }
  getNodeSize(e, t, s) {
    const l = e.getComponent(__rea_outer_m);
    return new __rea_outer_i((null == l ? void 0 : l.width) ?? t, (null == l ? void 0 : l.height) ?? s);
  }
  setAxis(e, t, i) {
    "x" !== t ? e.setPosition(e.position.x, i, 0) : e.setPosition(i, e.position.y, 0);
  }
  clamp(e, t, i) {
    return Math.min(i, Math.max(t, e));
  }
  disableHitTest(e) {
    if (null == e || !e.isValid) return;
    const t = e.getComponent(__rea_outer_m);
    t && (t.hitTest = (e, t) => !1);
  }
  getTouchWorldPoint(e) {
    const t = e.getUILocation();
    return new __rea_outer_l(t.x, t.y);
  }
  isPointInsideNode(e, t) {
    if (null == e || !e.isValid || !e.activeInHierarchy) return !1;
    const i = e.getComponent(__rea_outer_m);
    return !!i && i.getBoundingBoxToWorld().contains(t);
  }
  setNodeActive(e, t) {
    null != e && e.isValid && (e.active = t);
  }
  scheduleOnceIfValid(e, t) {
    this.scheduleOnce(() => {
      this.isValid && e();
    }, t);
  }
  stopTrackedTweens() {
    this.cells.forEach(e => {
      __rea_outer_P((null == e ? void 0 : e.node) ?? null);
    }), __rea_outer_P(this.ipNode), __rea_outer_P(this.wallNode), __rea_outer_P(this.bubbleNode);
  }
  clearSpawnedStones() {
    var e;
    this.stones.forEach(e => {
      null != e && e.isValid && e.destroy();
    }), this.stones.length = 0, null != (e = this.stoneRoot) && e.isValid && (this.stoneRoot.destroy(), this.stoneRoot = null);
  }
  warnIfMissing(e, t) {
    t || console.warn(`[Level_61] missing ${e}`);
  }
}) || E;
__rea_outer_t._RF.pop();
export { __recovered_export_0 as default };
