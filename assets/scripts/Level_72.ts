// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_72.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { Vec2 as __rea_outer_i } from "cc";
import { assetManager as __rea_outer_s } from "cc";
import { Prefab as __rea_outer_o } from "cc";
import { PhysicsSystem2D as __rea_outer_n } from "cc";
import { Vec3 as __rea_outer_a } from "cc";
import { Node as __rea_outer_r } from "cc";
import { Sprite as __rea_outer_l } from "cc";
import { UITransform as __rea_outer_h } from "cc";
import { RigidBody2D as __rea_outer_d } from "cc";
import { instantiate as __rea_outer_c } from "cc";
import { tween as __rea_outer_p } from "cc";
import { SpriteFrame as __rea_outer_u } from "cc";
import { HingeJoint2D as __rea_outer_g } from "cc";
import { BoxCollider2D as __rea_outer_m } from "cc";
import { ERigidBody2DType as __rea_outer_N } from "cc";
import { Contact2DType as __rea_outer_v } from "cc";
import { Size as __rea_outer_f } from "cc";
import { Label as __rea_outer_y } from "cc";
import { _decorator as __rea_outer_C } from "cc";
import { default as __rea_outer_w } from "./LevelBase";
import { default as __rea_outer__ } from "./AudioManager";
import { I18nController as __rea_outer_S } from "./i18n-controller";
import { GameController as __rea_outer_T } from "./GameController";
import { UIManager as __rea_outer_x } from "./ui-manager";
import { UILayer as __rea_outer_k } from "./ui-layer";
import { UIFail as __rea_outer_L } from "./uifail";
import { UIHint as __rea_outer_b } from "./uihint";
import { getUIOpacity as __rea_outer_B } from "./CocosCompat";
import { stopAllTweens as __rea_outer_F } from "./CocosCompat";
import { RopeController as __rea_outer_A } from "./rope-controller";
let __recovered_export_0;
var P;
__rea_outer_t._RF.push({}, "a7c3ekbTShPbrWhDI4vdNaz", "Level_72", void 0);
const {
    ccclass: E
  } = __rea_outer_C,
  I = "level72_1",
  V = ["72_1", "72_2", "72_3"],
  R = "Level_72",
  M = ["Texture/prompt/prompt1/spriteFrame", "Texture/prompt/prompt2/spriteFrame", "Texture/prompt/prompt3/spriteFrame"],
  O = .12,
  W = 180 / Math.PI,
  G = new __rea_outer_i(0, -1400),
  U = [new __rea_outer_i(204, 116), new __rea_outer_i(-89.5, 190), new __rea_outer_i(-205, 25.5)],
  $ = ["rope", "scissors_1", "scissors_2", "scissors_3", "witch", "princess", "2", "3", "fight", "fight_1", "fight_2", "fight_3", "level_2", "level_3", "general_end", "end_1", "blackmask", "clicks", "drags", "swips"],
  H = [{
    rootName: "1",
    bannerName: "level_1",
    pinNames: ["roptept1", "roptept2"],
    edges: [{
      startName: "roptept1",
      endName: "1_rope2"
    }, {
      startName: "roptept2",
      endName: "1_rope3"
    }, {
      startName: "1_rope3",
      endName: "1_rope1"
    }, {
      startName: "1_rope3",
      endName: "1_rope2"
    }, {
      startName: "1_rope2",
      endName: "1_rope1"
    }],
    actors: [{
      actorName: "1_witch1",
      anchorName: "1_rope2",
      kind: "witch"
    }, {
      actorName: "1_princess1",
      anchorName: "1_rope1",
      kind: "princess"
    }, {
      actorName: "1_princess2",
      anchorName: "1_rope3",
      kind: "princess"
    }]
  }, {
    rootName: "2",
    bannerName: "level_2",
    pinNames: ["roptept1", "roptept2"],
    edges: [{
      startName: "roptept1",
      endName: "2_rope1"
    }, {
      startName: "roptept2",
      endName: "2_rope4"
    }, {
      startName: "2_rope1",
      endName: "2_rope4"
    }, {
      startName: "2_rope1",
      endName: "2_rope3"
    }, {
      startName: "2_rope1",
      endName: "2_rope2"
    }, {
      startName: "2_rope4",
      endName: "2_rope2"
    }, {
      startName: "2_rope2",
      endName: "2_rope3"
    }],
    actors: [{
      actorName: "2_witch1",
      anchorName: "2_rope1",
      kind: "witch"
    }, {
      actorName: "2_witch2",
      anchorName: "2_rope2",
      kind: "witch"
    }, {
      actorName: "2_princess1",
      anchorName: "2_rope3",
      kind: "princess"
    }, {
      actorName: "2_princess2",
      anchorName: "2_rope4",
      kind: "princess"
    }]
  }, {
    rootName: "3",
    bannerName: "level_3",
    pinNames: ["roptept1", "roptept2", "roptept3"],
    edges: [{
      startName: "roptept1",
      endName: "3_rope1"
    }, {
      startName: "roptept2",
      endName: "3_rope5"
    }, {
      startName: "roptept3",
      endName: "3_rope2"
    }, {
      startName: "3_rope1",
      endName: "3_rope4"
    }, {
      startName: "3_rope1",
      endName: "3_rope5"
    }, {
      startName: "3_rope5",
      endName: "3_rope2"
    }, {
      startName: "3_rope5",
      endName: "3_rope6"
    }, {
      startName: "3_rope2",
      endName: "3_rope3"
    }, {
      startName: "3_rope4",
      endName: "3_rope6"
    }, {
      startName: "3_rope6",
      endName: "3_rope3"
    }],
    actors: [{
      actorName: "3_witch1",
      anchorName: "3_rope1",
      kind: "witch"
    }, {
      actorName: "3_witch2",
      anchorName: "3_rope2",
      kind: "witch"
    }, {
      actorName: "3_witch3",
      anchorName: "3_rope3",
      kind: "witch"
    }, {
      actorName: "3_princess1",
      anchorName: "3_rope4",
      kind: "princess"
    }, {
      actorName: "3_princess2",
      anchorName: "3_rope5",
      kind: "princess"
    }, {
      actorName: "3_princess3",
      anchorName: "3_rope6",
      kind: "princess"
    }]
  }];
__recovered_export_0 = E("Level_72")(P = class extends __rea_outer_w {
  constructor(...e) {
    super(...e), this.phase = 0, this.winstate = !1, this.gameNode = null, this.backBgNode = null, this.promptBoxNode = null, this.promptLabel = null, this.groundNode = null, this.blackmaskNode = null, this.generalEndNode = null, this.endNode = null, this.fightNode = null, this.poleNode = null, this.lineTemplate = null, this.scissorsATemplate = null, this.scissorsBTemplate = null, this.witchTemplate = null, this.princessTemplate = null, this.stageRoots = [null, null, null], this.bannerNodes = [null, null, null], this.fightFrames = [null, null, null], this.ropes = [], this.actors = [], this.cutPlaybacks = [], this.previousGravity = new __rea_outer_i(), this.ropePrefab = null, this.hintFrames = [null, null, null], this.stageIndex = 0, this.isStageClearing = !1, this.isFightLooping = !1, this.hasGravityOverride = !1, this.hasActorCollision = !1, this.previousDefaultMask = 1, this.previousWitchMask = 0, this.previousPrincessMask = 0, this.voiceToken = 0, this.flowToken = 0, this.fightFrame = 0, this.fightFrameElapsed = 0, this.swipeStart = null, this.activeLine = null, this.onTouchStart = e => {
      if (!this.canCut() || this.swipeStart) return;
      const t = this.readTouchLocal(e);
      if (!t || !this.isInsideGameNode(e)) return;
      const i = this.cloneVisual(this.lineTemplate);
      i && (this.swipeStart = t, this.activeLine = i, this.placeLine(i, t, t));
    }, this.onTouchMove = e => {
      var t;
      if (!this.swipeStart || null == (t = this.activeLine) || !t.isValid) return;
      const i = this.readTouchLocal(e);
      i && this.placeLine(this.activeLine, this.swipeStart, i);
    }, this.onTouchEnd = e => {
      if (!this.swipeStart || !this.activeLine) return;
      const t = this.swipeStart,
        i = this.activeLine,
        s = this.readTouchLocal(e) ?? t;
      this.swipeStart = null, this.activeLine = null, this.placeLine(i, t, s);
      const o = this.collectHitRopes(t, s);
      0 !== o.length ? this.beginCut(i, t, s, o) : this.destroyNode(i);
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences();
  }
  start() {
    this.enterPhase0();
  }
  update(e) {
    this.isValid && (this.tickCuts(e), this.tickFight(e));
  }
  lateUpdate(e) {
    !this.isValid || this.phase >= 2 || (this.followActors(), this.advanceWitchChases(e), 1 !== this.phase || this.isStageClearing || this.collectLandings());
  }
  onDestroy() {
    this.flowToken += 1, this.voiceToken += 1, this.unscheduleAllCallbacks(), this.unregisterTouch(), this.cancelActiveSwipe(), this.cancelCutPlaybacks(), this.stopManagedTweens(), this.clearStageRopes(), this.restoreActorCollision(), this.restoreFallGravity(), super.onDestroy();
  }
  handleTimeExpired() {
    return !!(this.phase >= 2 || this.isStageClearing || this.winstate);
  }
  isGameProgressVisible() {
    return !1;
  }
  showHint() {
    if (1 !== this.phase || this.isStageClearing || this.winstate) return;
    const e = this.stageIndex;
    this.loadHintFrame(e, t => {
      this.isValid && 1 === this.phase && !this.isStageClearing && this.stageIndex === e && t && __rea_outer_x.getInstance().showView(__rea_outer_b, void 0, {
        body: "",
        spriteFrame: t
      });
    });
  }
  enterPhase0() {
    this.phase = 0, this.winstate = !1, this.stageIndex = 0, this.isStageClearing = !1, this.isFightLooping = !1, this.gameNode ? (this.applyInitialVisibility(), this.applyFallGravity(), this.setupGrounds(), this.holdStageTimer(), __rea_outer__.playMusic("bgm4", !0, .5), this.setInputBlocked(!0), this.registerTouch(), this.loadRopePrefab()) : console.error("Level_72: missing UIPanel/gameNode");
  }
  loadRopePrefab() {
    const e = __rea_outer_s.getBundle(R);
    if (!e) return console.error("Level_72: level bundle is not loaded"), void this.playIntroLine(0);
    e.load("RopeItem", __rea_outer_o, (e, t) => {
      if (this.isValid && 0 === this.phase) {
        if (e || !t) return console.error("Level_72: failed to load RopeItem", e), void this.playIntroLine(0);
        this.ropePrefab = t, this.buildCurrentStage(), this.playIntroLine(0);
      }
    });
  }
  playIntroLine(e) {
    if (!this.isValid || 0 !== this.phase) return;
    if (e >= V.length) return void this.enterPhase1();
    const t = e === V.length - 1;
    this.playDialogue(V[e], t, () => {
      this.playIntroLine(e + 1);
    });
  }
  enterPhase1() {
    this.isValid && 0 === this.phase && (this.phase = 1, this.hidePrompt(), this.setInputBlocked(!1), this.runStageTimer());
  }
  applyInitialVisibility() {
    var e, t, i;
    const s = this.node.getChildByName("UIPanel");
    this.setNodeActive((null == s ? void 0 : s.getChildByName("demo")) ?? null, !1), this.setNodeActive((null == s ? void 0 : s.getChildByName("click_root")) ?? null, !1), $.forEach(e => {
      var t;
      this.setNodeActive((null == (t = this.gameNode) ? void 0 : t.getChildByName(e)) ?? null, !1);
    }), this.setNodeActive(this.stageRoots[0], !0), this.setNodeActive(this.bannerNodes[0], !0), this.setNodeActive(this.poleNode, !0), this.setNodeActive(this.groundNode, !0), this.setNodeActive((null == (e = this.gameNode) ? void 0 : e.getChildByName("ground2")) ?? null, !0), this.setNodeActive((null == (t = this.gameNode) ? void 0 : t.getChildByName("ground3")) ?? null, !0), this.setNodeActive((null == (i = this.gameNode) ? void 0 : i.getChildByName("bg")) ?? null, !0), this.setNodeActive(this.promptBoxNode, !0);
  }
  applyFallGravity() {
    const e = __rea_outer_n.instance;
    this.hasGravityOverride || (this.previousGravity.set(e.gravity.x, e.gravity.y), this.hasGravityOverride = !0), e.enable = !0, e.gravity = G.clone();
  }
  restoreFallGravity() {
    this.hasGravityOverride && (__rea_outer_n.instance.gravity = this.previousGravity.clone(), this.hasGravityOverride = !1);
  }
  setupGrounds() {
    var e, t;
    this.configureActorCollision(), this.ensureStaticBody(this.groundNode), this.ensureStaticBody((null == (e = this.gameNode) ? void 0 : e.getChildByName("ground2")) ?? null), this.ensureStaticBody((null == (t = this.gameNode) ? void 0 : t.getChildByName("ground3")) ?? null);
  }
  buildCurrentStage() {
    const e = H[this.stageIndex],
      t = this.stageRoots[this.stageIndex];
    e && t && this.ropePrefab ? (t.active = !0, t.updateWorldTransform(), this.showStageBanner(), e.pinNames.forEach(e => {
      this.ensureStaticBody(t.getChildByName(e), !1);
    }), e.actors.forEach(e => {
      this.bindActor(t, e);
    }), e.edges.forEach(e => {
      this.spawnRope(t, e);
    })) : console.error("Level_72: cannot build stage", this.stageIndex);
  }
  bindActor(e, t) {
    const i = e.getChildByName(t.actorName),
      s = e.getChildByName(t.anchorName);
    if (!i || !s) return void console.error("Level_72: missing actor", t.actorName);
    this.ensureDynamicBody(s, t.kind);
    const o = i.worldPosition,
      n = s.worldPosition;
    this.actors.push({
      actorNode: i,
      anchorNode: s,
      kind: t.kind,
      offset: new __rea_outer_a(o.x - n.x, o.y - n.y, 0),
      isLanded: !1,
      isChasing: !1,
      landedClone: null,
      chaseElapsed: 0,
      chaseFrom: null,
      chaseTo: null
    });
  }
  spawnRope(e, t) {
    const i = e.getChildByName(t.startName),
      s = e.getChildByName(t.endName);
    if (!i || !s || !this.ropePrefab) return void console.error("Level_72: missing rope", t.startName, t.endName);
    const o = new __rea_outer_r(`Rope_${t.startName}_${t.endName}`);
    e.addChild(o), o.setSiblingIndex(0);
    const n = o.addComponent(__rea_outer_A);
    n.ropeItemPrefab = this.ropePrefab, n.startPoint = i, n.endPoint = s, n.generateOnLoad = !1, n.isStartPinned = !0, n.isEndPinned = !0, n.segmentLength = 0, n.gravityScale = .25;
    const l = this.resolveRopeSpan(i, s),
      h = n.generateRopeBetween(l.start, l.end);
    if (0 === h.length) return void o.destroy();
    const d = __rea_outer_a.distance(i.worldPosition, s.worldPosition),
      c = __rea_outer_a.distance(l.start, l.end);
    console.log(`[Level_72] 绳子 ${t.startName}->${t.endName} 中心距=${d.toFixed(0)} 绳长=${c.toFixed(0)} 节数=${h.length}`), this.ropes.push({
      controller: n,
      node: o,
      isQueued: !1
    });
  }
  resolveRopeSpan(e, t) {
    const i = e.worldPosition,
      s = t.worldPosition,
      o = s.x - i.x,
      n = s.y - i.y,
      r = Math.hypot(o, n);
    if (r <= 1) return {
      start: i.clone(),
      end: s.clone()
    };
    const l = o / r,
      h = n / r,
      d = this.limitInsets(r, this.readFacingInset(e, l, h), this.readFacingInset(t, -l, -h));
    return {
      start: new __rea_outer_a(i.x + l * d.start, i.y + h * d.start, i.z),
      end: new __rea_outer_a(s.x - l * d.end, s.y - h * d.end, s.z)
    };
  }
  readFacingInset(e, t, i) {
    const s = e.getComponent(__rea_outer_l),
      o = e.getComponent(__rea_outer_h);
    if (null == s || !s.enabled || !o) return 0;
    const n = .5 * o.contentSize.width * Math.abs(t) + .5 * o.contentSize.height * Math.abs(i);
    return Math.max(0, n - 2);
  }
  limitInsets(e, t, i) {
    const s = Math.max(0, e - 23),
      o = Math.min(t, s);
    return {
      start: o,
      end: Math.min(i, Math.max(0, s - o))
    };
  }
  followActors() {
    this.actors.forEach(e => {
      if (this.lockUpright(e.actorNode), this.lockUpright(e.anchorNode), this.lockUpright(e.landedClone), e.isLanded || !e.actorNode.isValid || !e.anchorNode.isValid) return;
      const t = e.anchorNode.worldPosition;
      e.actorNode.setWorldPosition(t.x + e.offset.x, t.y + e.offset.y, t.z);
    });
  }
  lockUpright(e) {
    null != e && e.isValid && 0 !== e.angle && !e.getComponent(__rea_outer_d) && (e.angle = 0);
  }
  collectLandings() {
    for (const e of this.actors) {
      if (1 !== this.phase || this.isStageClearing) return;
      !e.isLanded && this.hasReachedGround(e) && this.landActor(e);
    }
    this.landLinkedPrincesses();
  }
  landLinkedPrincesses() {
    if (1 !== this.phase || this.isStageClearing) return;
    this.actors.filter(e => "princess" === e.kind && !e.isLanded).forEach(e => {
      1 !== this.phase || this.isStageClearing || e.isLanded || !this.canLandWithSister(e) || (console.log(`[Level_72] ${e.actorNode.name} 与已落地公主仍连着绳子，记为落地`), this.landActor(e));
    });
  }
  canLandWithSister(e) {
    const t = this.collectLinkedNodes(e.anchorNode);
    return !this.isGroupStillHanging(t) && t.some(e => this.isLandedPrincessAnchor(e));
  }
  isGroupStillHanging(e) {
    return e.some(e => this.isPinNode(e) || this.isHangingWitchAnchor(e));
  }
  isHangingWitchAnchor(e) {
    const t = this.findActorByAnchor(e);
    return "witch" === (null == t ? void 0 : t.kind) && !t.isLanded;
  }
  isLandedPrincessAnchor(e) {
    const t = this.findActorByAnchor(e);
    return "princess" === (null == t ? void 0 : t.kind) && t.isLanded;
  }
  isPinNode(e) {
    var t;
    return ((null == (t = H[this.stageIndex]) ? void 0 : t.pinNames) ?? []).indexOf(e.name) >= 0;
  }
  findActorByAnchor(e) {
    return this.actors.find(t => t.anchorNode === e) ?? null;
  }
  collectLinkedNodes(e) {
    const t = [],
      i = [e];
    for (; i.length > 0;) {
      const e = i.pop();
      !e || t.indexOf(e) >= 0 || (t.push(e), this.pushOpenNeighbors(e, t, i));
    }
    return t;
  }
  pushOpenNeighbors(e, t, i) {
    this.ropes.forEach(s => {
      const o = this.readOpenNeighbor(s, e);
      o && t.indexOf(o) < 0 && i.push(o);
    });
  }
  readOpenNeighbor(e, t) {
    var i;
    if (e.isQueued || null == (i = e.controller) || !i.isValid) return null;
    const s = e.controller.startPoint,
      o = e.controller.endPoint;
    return null != s && s.isValid && null != o && o.isValid ? s === t ? o : o === t ? s : null : null;
  }
  landActor(e) {
    var t;
    e.isLanded = !0, this.freezeAnchor(e.anchorNode), this.lockUpright(e.anchorNode), this.lockUpright(e.actorNode), this.setNodeActive(e.actorNode, !1);
    const i = e.anchorNode.getComponent(__rea_outer_l);
    i && (i.enabled = !1), e.landedClone = this.spawnLandedClone(e), this.raiseLandedWitches(), this.lockUpright(e.landedClone);
    const s = null == (t = e.landedClone) ? void 0 : t.worldPosition;
    console.log(`[Level_72] 落地 ${e.actorNode.name} kind=${e.kind} clone=` + (e.landedClone ? "ok" : "null") + ` pos=(${(null == s ? void 0 : s.x.toFixed(1)) ?? "-"},${(null == s ? void 0 : s.y.toFixed(1)) ?? "-"})` + ` phase=${this.phase} clearing=${this.isStageClearing}`), "witch" !== e.kind ? (this.tryChaseWaitingWitches(), this.tryBeginStageClear()) : this.tryChaseWaitingWitches();
  }
  spawnLandedClone(e) {
    const t = "witch" === e.kind ? this.witchTemplate : this.princessTemplate,
      i = this.stageRoots[this.stageIndex];
    if (!t || !i) return null;
    const s = __rea_outer_c(t);
    s.active = !0, i.addChild(s), s.setSiblingIndex(i.children.length - 1);
    const o = e.actorNode.worldPosition,
      n = this.readGroundTop(),
      a = s.getComponent(__rea_outer_h),
      r = (null == a ? void 0 : a.anchorPoint.y) ?? .5,
      l = (null == a ? void 0 : a.contentSize.height) ?? 0,
      d = null === n ? o.y : n + l * r;
    return s.setWorldPosition(o.x, d, o.z), s;
  }
  raiseLandedWitches() {
    this.actors.forEach(e => {
      const t = e.landedClone;
      "witch" === e.kind && null != t && t.isValid && t.parent && t.setSiblingIndex(t.parent.children.length - 1);
    });
  }
  tryChaseWaitingWitches() {
    this.actors.forEach(e => {
      var t, i;
      if ("witch" !== e.kind || !e.isLanded || e.isChasing || null == (t = e.landedClone) || !t.isValid) return;
      const s = e.landedClone.worldPosition,
        o = this.findNearestPrincess(s.x, s.y);
      null != o && null != (i = o.landedClone) && i.isValid ? this.startWitchChase(e, o) : console.log(`[Level_72] ${e.actorNode.name} 已落地，还没有公主落地，先等待`);
    });
  }
  startWitchChase(e, t) {
    const i = e.landedClone,
      s = t.landedClone,
      o = null == i ? void 0 : i.parent;
    if (!i || !s || !o) return void console.log(`[Level_72] ${e.actorNode.name} 无法追击，clone 或父节点无效`);
    const n = s.worldPosition,
      r = new __rea_outer_a();
    o.inverseTransformPoint(r, new __rea_outer_a(n.x, n.y, n.z)), this.faceWitchToward(i, n.x), e.isChasing = !0, e.chaseElapsed = 0, e.chaseFrom = i.position.clone(), e.chaseTo = new __rea_outer_a(r.x, r.y, i.position.z), console.log(`[Level_72] ${e.actorNode.name} 开始追 ${t.actorNode.name} from=(${e.chaseFrom.x.toFixed(1)},${e.chaseFrom.y.toFixed(1)}) to=(${e.chaseTo.x.toFixed(1)},${e.chaseTo.y.toFixed(1)}) scaleX=${i.scale.x.toFixed(0)}`);
  }
  faceWitchToward(e, t) {
    const i = t < e.worldPosition.x ? -1 : 1;
    e.setScale(i, e.scale.y, e.scale.z);
  }
  advanceWitchChases(e) {
    this.actors.forEach(t => {
      var i;
      const s = t.landedClone;
      if (!(t.isChasing && t.chaseFrom && t.chaseTo && null != s && s.isValid)) return;
      t.chaseElapsed += e;
      const o = Math.min(1, t.chaseElapsed / 1);
      if (s.setPosition(t.chaseFrom.x + (t.chaseTo.x - t.chaseFrom.x) * o, t.chaseFrom.y + (t.chaseTo.y - t.chaseFrom.y) * o, t.chaseFrom.z), this.lockUpright(s), o < 1) return;
      t.isChasing = !1;
      const n = s.worldPosition,
        a = this.findNearestPrincess(n.x, n.y);
      null != a && null != (i = a.landedClone) && i.isValid ? (console.log(`[Level_72] ${t.actorNode.name} 已走到 ${a.actorNode.name}，进入失败`), this.beginWitchFight(s, a.landedClone)) : console.log(`[Level_72] ${t.actorNode.name} 已走到终点，但公主克隆无效`);
    });
  }
  findNearestPrincess(e, t) {
    let i = null,
      s = Number.POSITIVE_INFINITY;
    return this.actors.forEach(o => {
      var n;
      if ("princess" !== o.kind || null == (n = o.landedClone) || !n.isValid) return;
      const a = o.landedClone.worldPosition,
        r = (a.x - e) * (a.x - e) + (a.y - t) * (a.y - t);
      r < s && (s = r, i = o);
    }), i;
  }
  tryBeginStageClear() {
    if (1 !== this.phase || this.isStageClearing) return;
    const e = this.actors.filter(e => "princess" === e.kind),
      t = this.actors.some(e => "witch" === e.kind && e.isLanded);
    0 === e.length || t || e.some(e => !e.isLanded) ? t && e.every(e => e.isLanded) && console.log("[Level_72] 公主已全部落地，但已有女巫落地，不走通关，等待接触失败") : (console.log("[Level_72] 本关公主全部落地且女巫未落地，进入通关"), this.beginStageClear());
  }
  beginStageClear() {
    this.isStageClearing = !0, this.flowToken += 1;
    const e = this.flowToken;
    this.cancelActiveSwipe(), this.cancelCutPlaybacks(), this.setInputBlocked(!0), __rea_outer_T.getInstance().pauseTimer(), this.setNodeActive(this.generalEndNode, !0), __rea_outer__.playEffect_1("level72_2"), this.scheduleOnce(() => {
      this.isFlowCurrent(e) && (this.stageIndex >= H.length - 1 ? this.enterFinalSuccess() : this.fadeToNextStage(e));
    }, 1);
  }
  fadeToNextStage(e) {
    var t;
    const i = this.blackmaskNode;
    if (!i) return this.swapStage(), void this.finishStageEnter(e);
    i.active = !0, i.setSiblingIndex(((null == (t = i.parent) ? void 0 : t.children.length) ?? 1) - 1);
    const s = __rea_outer_B(i);
    s.opacity = 0, __rea_outer_p(s).to(.35, {
      opacity: 255
    }).call(() => {
      this.isFlowCurrent(e) && (this.swapStage(), __rea_outer_p(s).to(.15, {
        opacity: 0
      }).call(() => {
        this.isFlowCurrent(e) && (i.active = !1, this.finishStageEnter(e));
      }).start());
    }).start();
  }
  swapStage() {
    this.clearStageRopes(), this.setNodeActive(this.stageRoots[this.stageIndex], !1), this.setNodeActive(this.generalEndNode, !1), this.stageIndex += 1, this.setNodeActive(this.stageRoots[this.stageIndex], !0), this.showStageBanner(), this.buildCurrentStage();
  }
  finishStageEnter(e) {
    this.isFlowCurrent(e) && (this.isStageClearing = !1, this.runStageTimer(), this.setInputBlocked(!1));
  }
  enterFinalSuccess() {
    this.phase >= 2 || this.winstate || (this.phase = 2, this.winstate = !0, this.flowToken += 1, this.isStageClearing = !1, this.setInputBlocked(!0), __rea_outer_T.getInstance().pauseTimer(), this.showLevelSuccess(0));
  }
  beginWitchFight(e, t) {
    if (this.phase >= 2 || this.isStageClearing || this.winstate) return;
    this.enterFailPhase(), this.placeFight(e, t), this.isFightLooping = !0, this.fightFrame = 0, this.fightFrameElapsed = 0, this.showFightFrame(0), this.setNodeActive(this.fightNode, !0);
    const i = this.flowToken;
    this.scheduleOnce(() => {
      this.isFailCurrent(i) && this.presentEnd(i);
    }, .5);
  }
  beginTimeoutFail() {
    this.phase >= 2 || this.isStageClearing || this.winstate || (this.enterFailPhase(), this.presentEnd(this.flowToken));
  }
  enterFailPhase() {
    this.phase = 2, this.flowToken += 1, this.isFightLooping = !1, this.cancelActiveSwipe(), this.cancelCutPlaybacks(), this.stopWitchTweens(), this.setInputBlocked(!0), __rea_outer_T.getInstance().pauseTimer();
  }
  placeFight(e, t) {
    const i = e.worldPosition,
      s = t.worldPosition,
      o = this.toLocal(new __rea_outer_a((i.x + s.x) / 2, (i.y + s.y) / 2, 0));
    this.placeLocal(this.fightNode, o.x, o.y), this.fightFrames.forEach((e, t) => {
      const i = U[t];
      this.placeLocal(e, o.x + i.x, o.y + i.y);
    });
  }
  showFightFrame(e) {
    this.fightFrames.forEach((t, i) => {
      this.setNodeActive(t, i === e);
    });
  }
  presentEnd(e) {
    var t;
    this.isFailCurrent(e) && this.endNode && (this.endNode.active = !0, this.endNode.setSiblingIndex(((null == (t = this.endNode.parent) ? void 0 : t.children.length) ?? 1) - 1), __rea_outer__.playEffect_1("level72_3"), this.scheduleOnce(() => {
      this.isFailCurrent(e) && __rea_outer_x.getInstance().showView(__rea_outer_L, __rea_outer_k.WIN_ANIMATION);
    }, 1));
  }
  tickCuts(e) {
    if (1 === this.phase && !this.isStageClearing) for (let t = this.cutPlaybacks.length - 1; t >= 0; t -= 1) {
      const i = this.cutPlaybacks[t];
      this.advanceCut(i, e) && (this.cutPlaybacks.splice(t, 1), this.finishCut(i));
    }
  }
  advanceCut(e, t) {
    for (e.elapsed += t; e.switchElapsed + O <= e.elapsed && e.switchElapsed + O < e.duration;) e.switchElapsed += O, e.showingFirst = !e.showingFirst, e.hasSwitched = !0, this.applyScissorsVisible(e), __rea_outer__.playEffect_1(I);
    const i = Math.min(1, e.elapsed / e.duration);
    return this.placeScissors(e, i), !(e.elapsed < e.duration) && (e.hasSwitched || __rea_outer__.playEffect_1(I), !0);
  }
  finishCut(e) {
    this.destroyNode(e.lineNode), this.destroyNode(e.scissorsA), this.destroyNode(e.scissorsB), e.ropes.forEach(e => {
      this.removeRope(e);
    }), this.wakeHangingActors();
  }
  tickFight(e) {
    if (this.isFightLooping && 2 === this.phase) for (this.fightFrameElapsed += e; this.fightFrameElapsed >= .15;) this.fightFrameElapsed -= .15, this.fightFrame = (this.fightFrame + 1) % this.fightFrames.length, this.showFightFrame(this.fightFrame);
  }
  registerTouch() {
    this.node.on(__rea_outer_r.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(__rea_outer_r.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(__rea_outer_r.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(__rea_outer_r.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
  }
  unregisterTouch() {
    var e;
    null != (e = this.node) && e.isValid && (this.node.off(__rea_outer_r.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(__rea_outer_r.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(__rea_outer_r.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(__rea_outer_r.EventType.TOUCH_CANCEL, this.onTouchEnd, this));
  }
  beginCut(e, t, i, s) {
    const o = this.cloneVisual(this.scissorsATemplate),
      n = this.cloneVisual(this.scissorsBTemplate);
    if (!o || !n) return this.destroyNode(e), this.destroyNode(o), void this.destroyNode(n);
    s.forEach(e => {
      e.isQueued = !0;
    });
    const a = Math.hypot(i.x - t.x, i.y - t.y),
      r = {
        lineNode: e,
        scissorsA: o,
        scissorsB: n,
        ropes: s,
        start: t,
        end: i,
        duration: Math.max(.2, a / 1400),
        elapsed: 0,
        switchElapsed: 0,
        showingFirst: !0,
        hasSwitched: !1
      };
    this.applyScissorsVisible(r), this.placeScissors(r, 0), this.cutPlaybacks.push(r);
  }
  collectHitRopes(e, t) {
    if (Math.hypot(t.x - e.x, t.y - e.y) < 1) return [];
    const i = this.toWorld(e),
      s = this.toWorld(t);
    return this.ropes.filter(e => this.ropeHitsSegment(e, i, s));
  }
  ropeHitsSegment(e, t, s) {
    var o;
    return !(e.isQueued || null == (o = e.controller) || !o.isValid) && e.controller.getSegments().some(e => {
      var o;
      const n = null == (o = e.node) ? void 0 : o.getComponent(__rea_outer_h);
      return !!n && function (e, t, s, o, n) {
        if (n.contains(new __rea_outer_i(e, t)) || n.contains(new __rea_outer_i(s, o))) return !0;
        const a = n.x,
          r = n.x + n.width,
          l = n.y,
          h = n.y + n.height;
        return D(e, t, s, o, a, l, r, l) || D(e, t, s, o, r, l, r, h) || D(e, t, s, o, r, h, a, h) || D(e, t, s, o, a, h, a, l);
      }(t.x, t.y, s.x, s.y, n.getBoundingBoxToWorld());
    });
  }
  canCut() {
    var e;
    return 1 === this.phase && !this.isStageClearing && !this.winstate && !0 !== (null == (e = this.backBgNode) ? void 0 : e.active);
  }
  loadHintFrame(e, t) {
    const i = this.hintFrames[e];
    if (i) return void t(i);
    const o = M[e],
      n = __rea_outer_s.getBundle(R);
    if (!n || !o) return console.error("Level_72: missing hint bundle or path", e), void t(null);
    n.load(o, __rea_outer_u, (i, s) => {
      if (this.isValid) {
        if (i || !s) return console.error("Level_72: failed to load hint", o, i), void t(null);
        this.hintFrames[e] = s, t(s);
      }
    });
  }
  holdStageTimer() {
    const e = __rea_outer_T.getInstance();
    e.setRemainingTime(60), e.pauseTimer();
  }
  runStageTimer() {
    const e = __rea_outer_T.getInstance();
    e.setRemainingTime(60), e.pauseTimer(), e.resumeTimer();
  }
  playDialogue(e, t, i) {
    this.voiceToken += 1;
    const s = this.voiceToken;
    this.showPrompt(e), __rea_outer__.stopVoice(), __rea_outer__.playVoice(e), this.scheduleOnce(() => {
      this.isValid && s === this.voiceToken && (t && this.hidePrompt(), i());
    }, this.resolveDialogueHoldSeconds(e));
  }
  resolveDialogueHoldSeconds(e) {
    var t;
    const i = (null == (t = __rea_outer__.audioMap.get(e)) ? void 0 : t.getDuration()) ?? 0;
    return i > .1 ? i : 2.5;
  }
  showPrompt(e) {
    if (this.promptLabel) {
      const t = __rea_outer_S.getInstance().getKey(e);
      this.promptLabel.string = t && t !== e ? t : e;
    }
    this.setNodeActive(this.promptBoxNode, !0);
  }
  hidePrompt() {
    this.setNodeActive(this.promptBoxNode, !1);
  }
  showStageBanner() {
    this.bannerNodes.forEach((e, t) => {
      this.setNodeActive(e, t === this.stageIndex);
    });
  }
  clearStageRopes() {
    this.releaseStagePhysics(this.stageRoots[this.stageIndex]);
    this.ropes.splice(0, this.ropes.length).forEach(e => {
      this.removeRope(e);
    }), this.actors.length = 0;
  }
  removeRope(e) {
    var t;
    const i = this.ropes.indexOf(e);
    i >= 0 && this.ropes.splice(i, 1), null != (t = e.controller) && t.isValid && e.controller.clearRope(), this.destroyNode(e.node);
  }
  cancelCutPlaybacks() {
    this.cutPlaybacks.splice(0, this.cutPlaybacks.length).forEach(e => {
      e.ropes.forEach(e => {
        e.isQueued = !1;
      }), this.destroyNode(e.lineNode), this.destroyNode(e.scissorsA), this.destroyNode(e.scissorsB);
    });
  }
  releaseStagePhysics(e) {
    null != e && e.isValid && (e.getComponentsInChildren(__rea_outer_g).forEach(e => {
      e.enabled = !1;
    }), e.getComponentsInChildren(__rea_outer_m).forEach(e => {
      e.enabled = !1;
    }), e.getComponentsInChildren(__rea_outer_d).forEach(e => {
      e.enabled = !1;
    }));
  }
  cancelActiveSwipe() {
    this.swipeStart = null, this.destroyNode(this.activeLine), this.activeLine = null;
  }
  wakeHangingActors() {
    this.actors.forEach(e => {
      var t;
      !e.isLanded && e.anchorNode.isValid && (null == (t = e.anchorNode.getComponent(__rea_outer_d)) || t.wakeUp());
    });
  }
  stopWitchTweens() {
    this.actors.forEach(e => {
      __rea_outer_F(e.landedClone);
    });
  }
  stopManagedTweens() {
    __rea_outer_F(this.blackmaskNode), this.stopWitchTweens();
  }
  ensureStaticBody(e, t = !0) {
    if (!e) return;
    const i = e.getComponent(__rea_outer_d) ?? e.addComponent(__rea_outer_d);
    i.type = __rea_outer_N.Static, i.gravityScale = 0, i.fixedRotation = !0, i.allowSleep = !0, i.awakeOnLoad = !0, t && this.ensureBoxCollider(e);
  }
  ensureDynamicBody(e, t) {
    const i = e.getComponent(__rea_outer_d) ?? e.addComponent(__rea_outer_d),
      s = "witch" === t ? 2 : 4;
    i.type = __rea_outer_N.Dynamic, i.group = s, i.gravityScale = 3.25, i.fixedRotation = !0, i.allowSleep = !1, i.awakeOnLoad = !0, i.bullet = !0, i.enabledContactListener = !0, i.linearDamping = 2, i.angularDamping = 1, this.ensureBoxCollider(e, s);
  }
  configureActorCollision() {
    const e = __rea_outer_n.instance.collisionMatrix;
    this.hasActorCollision || (this.previousDefaultMask = e[1] ?? 1, this.previousWitchMask = e[2] ?? 0, this.previousPrincessMask = e[4] ?? 0, this.hasActorCollision = !0), e[2] = 1, e[4] = 1;
    const t = 6 | (e[1] ?? 1);
    e[1] = t;
  }
  restoreActorCollision() {
    if (!this.hasActorCollision) return;
    const e = __rea_outer_n.instance.collisionMatrix;
    e[1] = this.previousDefaultMask, e[2] = this.previousWitchMask, e[4] = this.previousPrincessMask, this.hasActorCollision = !1;
  }
  ensureBoxCollider(e, t = 1) {
    const s = this.readContentSize(e),
      o = e.getComponent(__rea_outer_m) ?? e.addComponent(__rea_outer_m);
    o.group = t, o.offset = new __rea_outer_i(0, 0), o.size = s, o.friction = .2, o.restitution = 0, o.sensor = !1, o.apply(), this.isActorGroup(t) && (o.off(__rea_outer_v.PRE_SOLVE, this.ignoreActorContact, this), o.on(__rea_outer_v.PRE_SOLVE, this.ignoreActorContact, this));
  }
  ignoreActorContact(e, t, i) {
    i && this.isActorGroup(t.group) && (i.disabledOnce = !0);
  }
  isActorGroup(e) {
    return 2 === e || 4 === e;
  }
  freezeAnchor(e) {
    const t = e.getComponent(__rea_outer_d);
    t && (this.disableAnchorCollider(e), t.linearVelocity = new __rea_outer_i(0, 0), t.angularVelocity = 0, t.fixedRotation = !0, t.type = __rea_outer_N.Static);
  }
  disableAnchorCollider(e) {
    const t = e.getComponent(__rea_outer_m);
    null != t && t.enabled && (t.enabled = !1);
  }
  hasReachedGround(e) {
    const t = this.readGroundBox();
    return !!t && (this.isNodeOnGround(e.actorNode, t) || this.isNodeOnGround(e.anchorNode, t));
  }
  isNodeOnGround(e, t) {
    var i;
    const s = null == (i = e.getComponent(__rea_outer_h)) ? void 0 : i.getBoundingBoxToWorld();
    if (!s) return !1;
    const o = s.x < t.x + t.width && s.x + s.width > t.x,
      n = t.y + t.height;
    return o && s.y <= n + 12;
  }
  readGroundBox() {
    var e;
    return (null == (e = this.groundNode) || null == (e = e.getComponent(__rea_outer_h)) ? void 0 : e.getBoundingBoxToWorld()) ?? null;
  }
  readGroundTop() {
    const e = this.readGroundBox();
    return e ? e.y + e.height : null;
  }
  cloneVisual(e) {
    if (!e || !this.gameNode) return null;
    const t = __rea_outer_c(e);
    return t.active = !0, this.gameNode.addChild(t), t;
  }
  placeLine(e, t, i) {
    const s = i.x - t.x,
      o = i.y - t.y;
    e.setPosition((t.x + i.x) / 2, (t.y + i.y) / 2, 0), e.angle = Math.atan2(o, s) * W, e.setScale(Math.hypot(s, o) / 50, 1, 1);
  }
  placeScissors(e, t) {
    const i = e.start.x + (e.end.x - e.start.x) * t,
      s = e.start.y + (e.end.y - e.start.y) * t,
      o = Math.atan2(e.end.y - e.start.y, e.end.x - e.start.x) * W;
    this.placeLocal(e.scissorsA, i, s), this.placeLocal(e.scissorsB, i, s), e.scissorsA.angle = o, e.scissorsB.angle = o;
  }
  applyScissorsVisible(e) {
    e.scissorsA.active = e.showingFirst, e.scissorsB.active = !e.showingFirst;
  }
  placeLocal(e, t, i) {
    null != e && e.isValid && e.setPosition(t, i, e.position.z);
  }
  readTouchLocal(e) {
    var t;
    const i = null == (t = this.gameNode) ? void 0 : t.getComponent(__rea_outer_h);
    if (!i) return null;
    const s = e.getUILocation();
    return i.convertToNodeSpaceAR(new __rea_outer_a(s.x, s.y, 0));
  }
  toWorld(e) {
    var t;
    const i = null == (t = this.gameNode) ? void 0 : t.getComponent(__rea_outer_h);
    return i ? i.convertToWorldSpaceAR(e) : e.clone();
  }
  toLocal(e) {
    var t;
    const i = null == (t = this.gameNode) ? void 0 : t.getComponent(__rea_outer_h);
    return i ? i.convertToNodeSpaceAR(e) : e.clone();
  }
  isInsideGameNode(e) {
    var t;
    const s = null == (t = this.gameNode) ? void 0 : t.getComponent(__rea_outer_h);
    if (!s) return !1;
    const o = e.getUILocation();
    return s.getBoundingBoxToWorld().contains(new __rea_outer_i(o.x, o.y));
  }
  readContentSize(e) {
    const t = e.getComponent(__rea_outer_h),
      i = t && t.contentSize.width > 0 ? t.contentSize.width : 40,
      s = t && t.contentSize.height > 0 ? t.contentSize.height : 40;
    return new __rea_outer_f(i, s);
  }
  resolveReferences() {
    var e, t, i, s, o, n, a, r, l, h, d, c, p, u, g, m;
    const N = this.node.getChildByName("UIPanel");
    this.gameNode = (null == N ? void 0 : N.getChildByName("gameNode")) ?? null, this.backBgNode = (null == N ? void 0 : N.getChildByName("backBG")) ?? null, this.promptBoxNode = (null == (e = this.gameNode) ? void 0 : e.getChildByName("prompt_box")) ?? null, this.promptLabel = (null == (t = this.promptBoxNode) || null == (t = t.getChildByName("Label")) ? void 0 : t.getComponent(__rea_outer_y)) ?? null, this.groundNode = (null == (i = this.gameNode) ? void 0 : i.getChildByName("ground")) ?? null, this.blackmaskNode = (null == (s = this.gameNode) ? void 0 : s.getChildByName("blackmask")) ?? null, this.generalEndNode = (null == (o = this.gameNode) ? void 0 : o.getChildByName("general_end")) ?? null, this.endNode = (null == (n = this.gameNode) ? void 0 : n.getChildByName("end_1")) ?? null, this.fightNode = (null == (a = this.gameNode) ? void 0 : a.getChildByName("fight")) ?? null, this.poleNode = (null == (r = this.gameNode) ? void 0 : r.getChildByName("pole")) ?? null, this.lineTemplate = (null == (l = this.gameNode) ? void 0 : l.getChildByName("scissors_3")) ?? null, this.scissorsATemplate = (null == (h = this.gameNode) ? void 0 : h.getChildByName("scissors_1")) ?? null, this.scissorsBTemplate = (null == (d = this.gameNode) ? void 0 : d.getChildByName("scissors_2")) ?? null, this.witchTemplate = (null == (c = this.gameNode) ? void 0 : c.getChildByName("witch")) ?? null, this.princessTemplate = (null == (p = this.gameNode) ? void 0 : p.getChildByName("princess")) ?? null, this.fightFrames[0] = (null == (u = this.gameNode) ? void 0 : u.getChildByName("fight_1")) ?? null, this.fightFrames[1] = (null == (g = this.gameNode) ? void 0 : g.getChildByName("fight_2")) ?? null, this.fightFrames[2] = (null == (m = this.gameNode) ? void 0 : m.getChildByName("fight_3")) ?? null, H.forEach((e, t) => {
      var i, s;
      this.stageRoots[t] = (null == (i = this.gameNode) ? void 0 : i.getChildByName(e.rootName)) ?? null, this.bannerNodes[t] = (null == (s = this.gameNode) ? void 0 : s.getChildByName(e.bannerName)) ?? null;
    });
  }
  setInputBlocked(e) {
    this.setNodeActive(this.backBgNode, e);
  }
  setNodeActive(e, t) {
    null != e && e.isValid && (e.active = t);
  }
  destroyNode(e) {
    null != e && e.isValid && e.destroy();
  }
  isFlowCurrent(e) {
    return this.isValid && this.phase < 2 && e === this.flowToken;
  }
  isFailCurrent(e) {
    return this.isValid && 2 === this.phase && e === this.flowToken && !this.winstate;
  }
}) || P;
function D(e, t, i, s, o, n, a, r) {
  const l = i - e,
    h = s - t,
    d = a - e,
    c = r - t,
    p = a - o,
    u = r - n,
    g = e - o,
    m = t - n,
    N = i - o,
    v = s - n,
    f = z(l, h, o - e, n - t),
    y = z(l, h, d, c),
    C = z(p, u, g, m),
    w = z(p, u, N, v);
  return f * y <= 0 && C * w <= 0;
}
function z(e, t, i, s) {
  return e * s - t * i;
}
__rea_outer_t._RF.pop();
export { __recovered_export_0 as default };
