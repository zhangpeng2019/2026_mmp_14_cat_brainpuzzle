// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_53.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { Color as __rea_outer_i } from "cc";
import { Node as __rea_outer_n } from "cc";
import { Button as __rea_outer_s } from "cc";
import { Vec3 as __rea_outer_o } from "cc";
import { tween as __rea_outer_l } from "cc";
import { Label as __rea_outer_a } from "cc";
import { UITransform as __rea_outer_h } from "cc";
import { instantiate as __rea_outer_d } from "cc";
import { Sprite as __rea_outer_r } from "cc";
import { Vec2 as __rea_outer_c } from "cc";
import { _decorator as __rea_outer_u } from "cc";
import { default as __rea_outer_p } from "./LevelBase";
import { default as __rea_outer_m } from "./clue-hit-tester";
import { default as __rea_outer_g } from "./AudioManager";
import { I18nController as __rea_outer_N } from "./i18n-controller";
import { UIManager as __rea_outer_v } from "./ui-manager";
import { UILayer as __rea_outer_f } from "./ui-layer";
import { UIHint as __rea_outer_I } from "./uihint";
import { UIFail as __rea_outer_y } from "./uifail";
import { GameController as __rea_outer_S } from "./GameController";
import { stopAllTweens as __rea_outer_T } from "./CocosCompat";
import { ensureUITransform as __rea_outer_C } from "./CocosCompat";
let __recovered_export_0;
var A;
__rea_outer_t._RF.push({}, "a53b0wRfVNOM59EVaZrAABT", "Level_53", void 0);
const {
    ccclass: x
  } = __rea_outer_u,
  w = [1, 2, 3, 4],
  L = {
    1: new __rea_outer_i(255, 193, 7, 255),
    2: new __rea_outer_i(255, 122, 24, 255),
    3: new __rea_outer_i(181, 107, 255, 255),
    4: new __rea_outer_i(255, 138, 196, 255)
  },
  k = {
    1: 0,
    2: 0,
    3: 0,
    4: 180
  },
  B = {
    1: 17,
    2: 16,
    3: 19,
    4: 18
  };
__recovered_export_0 = x("Level_53")(A = class extends __rea_outer_p {
  constructor(...e) {
    super(...e), this.phase = 0, this.winstate = !1, this.gameNode = null, this.backBgNode = null, this.bubbleNode = null, this.clickRootNode = null, this.infoButtonNode = null, this.infoButton = null, this.demoNode = null, this.promptBoxNode = null, this.promptLabel = null, this.bgNode = null, this.lineStripTemplate = null, this.lineCapStartTemplate = null, this.lineCapEndTemplate = null, this.greatNode = null, this.failMarkNode = null, this.lineLayerNode = null, this.lineStripWidth = 100, this.animals = new Map(), this.drawingState = null, this.isRunning = !1, this.isSettling = !1, this.voiceToken = 0, this.currentVoiceKey = "";
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.allItemNum = 4, this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.applyInitialVisibility(), this.enterPhase0();
  }
  update(e) {
    this.isValid && 1 === this.phase && this.isRunning && !this.isSettling && (this.advanceAnimals(e), this.isSettling || this.checkCollisions());
  }
  onDestroy() {
    this.unscheduleAllCallbacks(), this.unregisterHandlers(), this.stopTrackedTweens(), this.destroyAllLines(), this.drawingState = null, super.onDestroy();
  }
  handleTimeExpired() {
    return !!(this.phase >= 2 || this.winstate);
  }
  showHint() {
    const e = __rea_outer_N.getInstance().getKey("level53_legend");
    __rea_outer_v.getInstance().showView(__rea_outer_I, void 0, {
      body: e
    });
  }
  getGameProgressSnapshot() {
    const e = this.hasInstallNum;
    return {
      progress: e / 4,
      label: `${e}/4`
    };
  }
  markAllTasksCompleted() {
    this.hasInstallNum = 4;
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.drawingState = null, this.isRunning = !1, this.isSettling = !1, this.voiceToken = 0, this.currentVoiceKey = "", this.hasInstallNum = 0, this.animals.forEach(e => {
      e.isLocked = !1, e.connectedRoomId = 0, e.line = null, e.isMoving = !1, e.isSnapping = !1, e.hasArrivedHome = !1, e.segmentIndex = 0, e.segmentTraveled = 0;
    }), __rea_outer_g.stopVoice();
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_g.playMusic("bgm4", !0, .5), this.setInputBlocked(!0), __rea_outer_S.getInstance().refreshGameProgress(), this.playPromptVoice("53_1", () => {
      this.isValid && 0 === this.phase && this.playPromptVoice("53_2", () => {
        this.isValid && 0 === this.phase && (this.hidePrompt(), this.enterPhase1());
      });
    });
  }
  skipOpeningToPlay() {
    return 0 === this.phase && (this.voiceToken += 1, this.stopOpeningDialogue(), this.hidePrompt(), this.enterPhase1(), !0);
  }
  enterPhase1() {
    0 === this.phase && (this.phase = 1, this.setInputBlocked(!1), this.setNodeActive(this.clickRootNode, !0), this.registerHandlers(), __rea_outer_S.getInstance().refreshGameProgress());
  }
  startRunning() {
    this.isRunning = !0, this.drawingState = null, this.unregisterHandlers(), this.setInputBlocked(!0), this.animals.forEach(e => {
      var t;
      e.isMoving = !0, e.segmentIndex = 0, e.segmentTraveled = 0;
      const i = null == (t = e.line) ? void 0 : t.points[0];
      i && e.animalNode.setPosition(i);
    });
  }
  enterPhase2Success() {
    this.phase >= 2 || (this.phase = 2, this.winstate = !0, this.isSettling = !0, this.isRunning = !1, this.stopAllAnimals(), this.setInputBlocked(!0), __rea_outer_S.getInstance().pauseTimer(), this.playPopupScale(this.greatNode, "level53_3", () => {
      this.showLevelSuccess(1);
    }));
  }
  enterPhase2Fail(e) {
    this.phase >= 2 || (this.logFailDump(e), this.phase = 2, this.winstate = !1, this.isSettling = !0, this.isRunning = !1, this.stopAllAnimals(), this.setInputBlocked(!0), __rea_outer_S.getInstance().pauseTimer(), this.playPopupScale(this.failMarkNode, "level53_2", () => {
      this.scheduleOnceIfValid(() => {
        __rea_outer_v.getInstance().showView(__rea_outer_y, __rea_outer_f.WIN_ANIMATION);
      }, 1);
    }));
  }
  beginTimeoutFail() {
    this.phase = 2, this.winstate = !1, this.isSettling = !0, this.isRunning = !1, this.unregisterHandlers(), this.stopAllAnimals(), this.voiceToken += 1, this.stopCurrentVoice(), this.hidePrompt(), this.setInputBlocked(!0), __rea_outer_S.getInstance().pauseTimer(), __rea_outer_v.getInstance().showView(__rea_outer_y, __rea_outer_f.WIN_ANIMATION);
  }
  registerHandlers() {
    var e;
    this.node.on(__rea_outer_n.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(__rea_outer_n.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(__rea_outer_n.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(__rea_outer_n.EventType.TOUCH_CANCEL, this.onTouchEnd, this), null == (e = this.infoButton) || e.node.on(__rea_outer_s.EventType.CLICK, this.onInfoButtonClick, this);
  }
  unregisterHandlers() {
    var e;
    this.node.off(__rea_outer_n.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(__rea_outer_n.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(__rea_outer_n.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(__rea_outer_n.EventType.TOUCH_CANCEL, this.onTouchEnd, this), null != (e = this.infoButton) && null != (e = e.node) && e.isValid && this.infoButton.node.off(__rea_outer_s.EventType.CLICK, this.onInfoButtonClick, this);
  }
  onInfoButtonClick() {
    this.showHint();
  }
  onTouchStart(e) {
    if (1 !== this.phase || this.isRunning || this.drawingState) return;
    const t = this.getTouchWorldPoint(e);
    if (this.isPointInsideNode(this.infoButtonNode, t)) return;
    const i = this.findUnlockedAnimalAt(t);
    i && (this.drawingState = {
      animalId: i.id,
      touchId: e.getID()
    }, this.beginLine(i));
  }
  onTouchMove(e) {
    if (!this.drawingState || e.getID() !== this.drawingState.touchId) return;
    const t = this.animals.get(this.drawingState.animalId);
    null != t && t.line && this.extendLine(t, this.getClampedGameLocal(e));
  }
  onTouchEnd(e) {
    if (!this.drawingState || e.getID() !== this.drawingState.touchId) return;
    const t = this.animals.get(this.drawingState.animalId);
    if (this.drawingState = null, !t) return;
    this.extendLine(t, this.getClampedGameLocal(e));
    const i = this.findOpenRoomIdAt(this.getTouchWorldPoint(e));
    i <= 0 ? this.cancelLine(t) : this.lockLine(t, i);
  }
  beginLine(e) {
    var t;
    this.destroyLine(e);
    const i = new __rea_outer_n(`line_${e.id}`);
    null == (t = this.lineLayerNode) || t.addChild(i);
    const s = this.cloneTemplate(this.lineCapStartTemplate, i, e.color),
      o = this.cloneTemplate(this.lineCapEndTemplate, i, e.color),
      l = e.animalNode.position.clone();
    null == s || s.setPosition(l), null == o || o.setPosition(l), e.line = {
      root: i,
      startCap: s ?? i,
      endCap: o ?? i,
      segments: [],
      points: [l]
    };
  }
  extendLine(e, t) {
    const i = e.line;
    if (!i) return;
    if (1 === i.points.length) return i.points.push(t.clone()), this.appendSegment(i, e.color), void this.layoutCaps(i);
    const n = i.points[i.points.length - 2];
    __rea_outer_o.distance(n, t) >= 10 ? (i.points.push(t.clone()), this.appendSegment(i, e.color)) : (i.points[i.points.length - 1].set(t), this.layoutLastSegment(i)), this.layoutCaps(i);
  }
  lockLine(e, t) {
    e.isLocked = !0, e.connectedRoomId = t, this.countLockedAnimals() >= 4 && this.startRunning();
  }
  cancelLine(e) {
    this.destroyLine(e), e.isLocked = !1, e.connectedRoomId = 0;
  }
  countLockedAnimals() {
    let e = 0;
    return this.animals.forEach(t => {
      t.isLocked && (e += 1);
    }), e;
  }
  advanceAnimals(e) {
    this.animals.forEach(t => {
      this.isSettling || !t.isMoving || t.isSnapping || t.hasArrivedHome || (this.advanceAnimalAlongPath(t, 400 * e), !this.isSettling && this.shouldSnapToRoom(t) && this.beginSnapToRoom(t));
    });
  }
  advanceAnimalAlongPath(e, t) {
    var i;
    const n = null == (i = e.line) ? void 0 : i.points;
    if (!n || n.length < 2) return void this.beginSnapToRoom(e);
    let s = t;
    for (; s > 0 && e.segmentIndex < n.length - 1;) {
      const t = n[e.segmentIndex],
        i = n[e.segmentIndex + 1],
        l = __rea_outer_o.distance(t, i);
      if (l <= .001) {
        e.segmentIndex += 1, e.segmentTraveled = 0;
        continue;
      }
      const a = l - e.segmentTraveled;
      if (s < a) return e.segmentTraveled += s, s = 0, void this.placeAnimalOnSegment(e, t, i, e.segmentTraveled / l);
      s -= a, e.segmentIndex += 1, e.segmentTraveled = 0;
    }
    const l = n[n.length - 1];
    e.animalNode.setPosition(l), this.beginSnapToRoom(e);
  }
  placeAnimalOnSegment(e, t, i, n) {
    const s = new __rea_outer_o(t.x + (i.x - t.x) * n, t.y + (i.y - t.y) * n, 0);
    e.animalNode.setPosition(s), this.faceDirection(e, i.x - t.x, i.y - t.y);
  }
  shouldSnapToRoom(e) {
    var t;
    const i = null == (t = this.animals.get(e.connectedRoomId)) ? void 0 : t.openRoomNode;
    return this.doNodesOverlap(e.animalNode, i);
  }
  beginSnapToRoom(e) {
    var t;
    if (e.isSnapping || e.hasArrivedHome || this.isSettling) return;
    const i = null == (t = this.animals.get(e.connectedRoomId)) ? void 0 : t.openRoomNode;
    null != i && i.isValid ? (e.isMoving = !1, e.isSnapping = !0, this.faceDirection(e, i.position.x - e.animalNode.position.x, i.position.y - e.animalNode.position.y), __rea_outer_T(e.animalNode), __rea_outer_l(e.animalNode).to(.2, {
      position: i.position.clone()
    }).call(() => {
      this.isValid && !this.isSettling && this.onSnapFinished(e);
    }).start()) : this.enterPhase2Fail(`missing-room animal${e.id} connected=${e.connectedRoomId}`);
  }
  onSnapFinished(e) {
    e.isSnapping = !1, this.isSettling || this.phase >= 2 || (e.connectedRoomId !== e.id ? this.enterPhase2Fail(`wrong-room animal${e.id} connected=${e.connectedRoomId}`) : this.handleArriveHome(e));
  }
  handleArriveHome(e) {
    e.hasArrivedHome = !0, e.isMoving = !1, __rea_outer_T(e.animalNode), this.setNodeActive(e.animalNode, !1), this.setNodeActive(e.openRoomNode, !1), this.setNodeActive(e.closedRoomNode, !0), this.setNodeActive(e.checkNode, !0), __rea_outer_g.playEffect_1("level53_1"), this.hasInstallNum = Math.min(4, this.hasInstallNum + 1), __rea_outer_S.getInstance().refreshGameProgress(), this.hasInstallNum >= 4 && this.enterPhase2Success();
  }
  checkCollisions() {
    if (this.isSettling) return;
    const e = [];
    this.animals.forEach(t => {
      !t.hasArrivedHome && t.animalNode.activeInHierarchy && e.push(t);
    });
    for (let t = 0; t < e.length; t += 1) for (let i = t + 1; i < e.length; i += 1) {
      const n = this.getCircleCollision(e[t].animalNode, e[i].animalNode);
      if (n && n.distance < n.radiusSum) return void this.enterPhase2Fail(`collision animal${e[t].id} vs animal${e[i].id} dist=${n.distance.toFixed(1)} r=${n.radiusA.toFixed(1)}+${n.radiusB.toFixed(1)}=${n.radiusSum.toFixed(1)}`);
    }
  }
  stopAllAnimals() {
    this.animals.forEach(e => {
      var t;
      e.isMoving = !1, e.isSnapping = !1, null != (t = e.animalNode) && t.isValid && __rea_outer_T(e.animalNode);
    });
  }
  playPopupScale(e, t, i) {
    if (null == e || !e.isValid) return __rea_outer_g.playEffect_1(t), void i();
    this.bringNodeToFront(e), e.setScale(0, 0, 1), this.setNodeActive(e, !0), __rea_outer_g.playEffect_1(t), __rea_outer_T(e), __rea_outer_l(e).to(.25, {
      scale: new __rea_outer_o(1, 1, 1)
    }).call(() => {
      this.isValid && i();
    }).start();
  }
  playPromptVoice(e, t) {
    this.voiceToken += 1;
    const i = this.voiceToken;
    this.promptLabel && (this.promptLabel.string = __rea_outer_N.getInstance().getKey(e)), this.setNodeActive(this.promptBoxNode, !0);
    let n = !1;
    const s = () => {
        !n && this.isValid && i === this.voiceToken && (n = !0, this.unschedule(o), t());
      },
      o = () => {
        s();
      };
    this.scheduleOnce(o, 8), this.stopCurrentVoice(), this.currentVoiceKey = e, __rea_outer_g.playEffect_1(e, s);
  }
  stopCurrentVoice() {
    __rea_outer_g.stopVoice(), this.currentVoiceKey && (__rea_outer_g.stopOneEffect(this.currentVoiceKey), this.currentVoiceKey = "");
  }
  hidePrompt() {
    this.setNodeActive(this.promptBoxNode, !1);
  }
  setInputBlocked(e) {
    this.setNodeActive(this.backBgNode, e);
  }
  applyInitialVisibility() {
    var e, t, i;
    this.setNodeActive(this.bgNode, !0), this.setNodeActive(this.lineStripTemplate, !1), this.setNodeActive(this.lineCapStartTemplate, !1), this.setNodeActive(this.lineCapEndTemplate, !1), this.animals.forEach(e => {
      this.setNodeActive(e.animalNode, !0), this.setNodeActive(e.openRoomNode, !0), this.setNodeActive(e.closedRoomNode, !1), this.setNodeActive(e.checkNode, !1);
    }), this.setNodeActive(this.greatNode, !1), this.setNodeActive(this.failMarkNode, !1), this.setNodeActive(this.promptBoxNode, !1), this.setNodeActive((null == (e = this.gameNode) ? void 0 : e.getChildByName("clicks")) ?? null, !1), this.setNodeActive((null == (t = this.gameNode) ? void 0 : t.getChildByName("drags")) ?? null, !1), this.setNodeActive((null == (i = this.gameNode) ? void 0 : i.getChildByName("swips")) ?? null, !1), this.setNodeActive(this.clickRootNode, !1), this.setNodeActive(this.demoNode, !1), this.setNodeActive(this.bubbleNode, !1);
  }
  resolveReferences() {
    var e, t, i, n;
    const o = this.node.getChildByPath("UIPanel");
    this.gameNode = this.node.getChildByPath("UIPanel/gameNode"), this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.bubbleNode = this.node.getChildByPath("UIPanel/bubble"), this.clickRootNode = this.node.getChildByPath("UIPanel/click_root"), this.infoButtonNode = (null == (e = this.clickRootNode) ? void 0 : e.getChildByName("infoButton")) ?? null, this.infoButton = (null == (t = this.infoButtonNode) ? void 0 : t.getComponent(__rea_outer_s)) ?? null, this.setNodeActive(this.infoButtonNode, !1), this.demoNode = this.node.getChildByPath("UIPanel/demo");
    const l = this.gameNode;
    l && __rea_outer_C(l, 1080, 1920), this.promptBoxNode = (null == l ? void 0 : l.getChildByName("prompt_box")) ?? null, this.promptLabel = (null == (i = this.promptBoxNode) || null == (i = i.getChildByName("Label")) ? void 0 : i.getComponent(__rea_outer_a)) ?? null, this.bgNode = (null == l ? void 0 : l.getChildByName("bg")) ?? null, this.lineStripTemplate = (null == l ? void 0 : l.getChildByName("line_strip")) ?? null, this.lineCapStartTemplate = (null == l ? void 0 : l.getChildByName("line_cap_start")) ?? null, this.lineCapEndTemplate = (null == l ? void 0 : l.getChildByName("line_cap_end")) ?? null, this.greatNode = (null == l ? void 0 : l.getChildByName("great")) ?? null, this.failMarkNode = (null == l ? void 0 : l.getChildByName("end_1")) ?? null;
    const d = null == (n = this.lineStripTemplate) ? void 0 : n.getComponent(__rea_outer_h);
    d && d.width > 0 && (this.lineStripWidth = d.width), this.buildAnimals(l), this.ensureLineLayer(l), this.warnIfMissing("UIPanel", o), this.warnIfMissing("UIPanel/gameNode", this.gameNode), this.warnIfMissing("UIPanel/click_root", this.clickRootNode), this.warnIfMissing("infoButton", this.infoButtonNode), this.warnIfMissing("bg", this.bgNode), this.warnIfMissing("prompt_box", this.promptBoxNode), this.warnIfMissing("line_strip", this.lineStripTemplate), w.forEach(e => {
      const t = this.animals.get(e);
      this.warnIfMissing(`animal${e}`, (null == t ? void 0 : t.animalNode) ?? null), this.warnIfMissing(`animal${e}_1`, (null == t ? void 0 : t.openRoomNode) ?? null);
    });
  }
  buildAnimals(e) {
    if (this.animals.clear(), !e) return;
    const t = e.children;
    w.forEach(i => {
      const n = t[B[i]] ?? null,
        s = e.getChildByName(`animal${i}`),
        o = e.getChildByName(`animal${i}_1`),
        l = e.getChildByName(`animal${i}_2`);
      s && o && l && n && this.animals.set(i, {
        id: i,
        color: L[i],
        facingOffset: k[i],
        animalNode: s,
        openRoomNode: o,
        closedRoomNode: l,
        checkNode: n,
        isLocked: !1,
        connectedRoomId: 0,
        line: null,
        isMoving: !1,
        isSnapping: !1,
        hasArrivedHome: !1,
        segmentIndex: 0,
        segmentTraveled: 0
      });
    });
  }
  ensureLineLayer(e) {
    var t, i;
    if (!e || null != (t = this.lineLayerNode) && t.isValid) return;
    const s = new __rea_outer_n("lineLayer");
    e.addChild(s);
    const o = (null == (i = this.bgNode) ? void 0 : i.getSiblingIndex()) ?? 0;
    s.setSiblingIndex(o + 1), this.lineLayerNode = s;
  }
  cloneTemplate(e, t, i) {
    if (null == e || !e.isValid) return null;
    const n = __rea_outer_d(e);
    return n.active = !0, t.addChild(n), this.tintNode(n, i), n;
  }
  appendSegment(e, t) {
    const i = e.points[e.points.length - 2],
      n = e.points[e.points.length - 1],
      s = this.cloneTemplate(this.lineStripTemplate, e.root, t);
    s && (e.segments.push(s), this.layoutSegment(s, i, n), e.startCap.setSiblingIndex(e.root.children.length - 1), e.endCap.setSiblingIndex(e.root.children.length - 1));
  }
  layoutLastSegment(e) {
    if (0 === e.segments.length || e.points.length < 2) return;
    const t = e.points[e.points.length - 2],
      i = e.points[e.points.length - 1];
    this.layoutSegment(e.segments[e.segments.length - 1], t, i);
  }
  layoutSegment(e, t, i) {
    const n = i.x - t.x,
      s = i.y - t.y,
      o = Math.sqrt(n * n + s * s);
    e.setPosition(.5 * (t.x + i.x), .5 * (t.y + i.y), 0), e.angle = 180 * Math.atan2(s, n) / Math.PI;
    const l = Math.max(this.lineStripWidth, 1);
    e.setScale(o / l, 1, 1);
  }
  layoutCaps(e) {
    const t = e.points[0],
      i = e.points[e.points.length - 1];
    if (e.startCap.setPosition(t), e.endCap.setPosition(i), e.points.length < 2) return;
    const n = e.points[1],
      s = e.points[e.points.length - 2];
    e.startCap.angle = 180 * Math.atan2(n.y - t.y, n.x - t.x) / Math.PI, e.endCap.angle = 180 * Math.atan2(i.y - s.y, i.x - s.x) / Math.PI;
  }
  tintNode(e, t) {
    const i = e.getComponent(__rea_outer_r);
    i && (i.color = t.clone());
  }
  destroyLine(e) {
    var t;
    const i = e.line;
    e.line = null, null != i && null != (t = i.root) && t.isValid && i.root.destroy();
  }
  destroyAllLines() {
    this.animals.forEach(e => {
      this.destroyLine(e);
    });
  }
  findUnlockedAnimalAt(e) {
    let t = null;
    return this.animals.forEach(i => {
      t || i.isLocked || this.isPointInsideNode(i.animalNode, e) && (t = i);
    }), t;
  }
  findOpenRoomIdAt(e) {
    let t = 0;
    return this.animals.forEach(i => {
      t > 0 || this.isPointInsideNode(i.openRoomNode, e) && (t = i.id);
    }), t;
  }
  faceDirection(e, t, i) {
    Math.abs(t) < .001 && Math.abs(i) < .001 || (e.animalNode.angle = 180 * Math.atan2(i, t) / Math.PI + e.facingOffset);
  }
  getTouchWorldPoint(e) {
    const t = e.getUILocation();
    return new __rea_outer_c(t.x, t.y);
  }
  getClampedGameLocal(e) {
    const t = this.gameNode,
      i = this.bgNode,
      n = null == t ? void 0 : t.getComponent(__rea_outer_h),
      s = null == i ? void 0 : i.getComponent(__rea_outer_h);
    if (!n || !s) return new __rea_outer_o();
    const l = e.getUILocation(),
      a = new __rea_outer_o(l.x, l.y, 0),
      d = s.convertToNodeSpaceAR(a),
      r = -s.width * s.anchorX,
      c = s.width * (1 - s.anchorX),
      u = -s.height * s.anchorY,
      p = s.height * (1 - s.anchorY),
      m = new __rea_outer_o(Math.min(c, Math.max(r, d.x)), Math.min(p, Math.max(u, d.y)), 0),
      g = s.convertToWorldSpaceAR(m);
    return n.convertToNodeSpaceAR(g);
  }
  isPointInsideNode(e, t) {
    if (null == e || !e.isValid || !e.activeInHierarchy) return !1;
    const i = e.getComponent(__rea_outer_h);
    return !!i && i.getBoundingBoxToWorld().contains(t);
  }
  doNodesOverlap(e, t) {
    return !(null == e || !e.activeInHierarchy) && __rea_outer_m.isDragNearTarget(e, t);
  }
  getCircleCollision(e, t) {
    if (!e.isValid || !t.isValid) return null;
    const i = this.getCollisionRadius(e),
      n = this.getCollisionRadius(t),
      s = e.position.x - t.position.x,
      o = e.position.y - t.position.y;
    return {
      distance: Math.sqrt(s * s + o * o),
      radiusA: i,
      radiusB: n,
      radiusSum: i + n
    };
  }
  getCollisionRadius(e) {
    const t = e.getComponent(__rea_outer_h);
    if (!t) return 0;
    const i = Math.max(Math.abs(e.worldScale.x), Math.abs(e.worldScale.y));
    return .5 * Math.min(t.width, t.height) * i;
  }
  logFailDump(e) {
    console.log(`[Level_53] fail: ${e}`);
    const t = [];
    this.animals.forEach(e => {
      var i;
      const n = e.animalNode.position,
        s = this.getCollisionRadius(e.animalNode),
        o = (null == (i = e.line) ? void 0 : i.points) ?? [],
        l = o.map(e => `${e.x.toFixed(1)},${e.y.toFixed(1)}`).join(" | ");
      console.log(`[Level_53] animal${e.id} pos=(${n.x.toFixed(1)},${n.y.toFixed(1)}) angle=${e.animalNode.angle.toFixed(1)} r=${s.toFixed(1)} connected=${e.connectedRoomId} locked=${e.isLocked} moving=${e.isMoving} snap=${e.isSnapping} home=${e.hasArrivedHome}`), console.log(`[Level_53] animal${e.id} line n=${o.length} ${l}`), !e.hasArrivedHome && e.animalNode.activeInHierarchy && t.push(e);
    });
    for (let e = 0; e < t.length; e += 1) for (let i = e + 1; i < t.length; i += 1) {
      const n = this.getCircleCollision(t[e].animalNode, t[i].animalNode);
      n && console.log(`[Level_53] pair animal${t[e].id} vs animal${t[i].id} dist=${n.distance.toFixed(1)} rSum=${n.radiusSum.toFixed(1)} gap=${(n.distance - n.radiusSum).toFixed(1)}`);
    }
  }
  bringNodeToFront(e) {
    null != e && e.isValid && e.parent && e.setSiblingIndex(e.parent.children.length - 1);
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
    var e, t;
    this.animals.forEach(e => {
      var t;
      null != (t = e.animalNode) && t.isValid && __rea_outer_T(e.animalNode);
    }), null != (e = this.greatNode) && e.isValid && __rea_outer_T(this.greatNode), null != (t = this.failMarkNode) && t.isValid && __rea_outer_T(this.failMarkNode);
  }
  warnIfMissing(e, t) {
    t || console.warn(`[Level_53] missing ${e}`);
  }
}) || A;
__rea_outer_t._RF.pop();
export { __recovered_export_0 as default };
