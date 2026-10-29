// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_73.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { Vec2 as __rea_outer_s } from "cc";
import { assetManager as __rea_outer_i } from "cc";
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
import { Size as __rea_outer_v } from "cc";
import { Label as __rea_outer_f } from "cc";
import { _decorator as __rea_outer_y } from "cc";
import { default as __rea_outer__ } from "./LevelBase";
import { default as __rea_outer_C } from "./AudioManager";
import { I18nController as __rea_outer_w } from "./i18n-controller";
import { GameController as __rea_outer_S } from "./GameController";
import { UIManager as __rea_outer_k } from "./ui-manager";
import { UILayer as __rea_outer_x } from "./ui-layer";
import { UIFail as __rea_outer_T } from "./uifail";
import { UIHint as __rea_outer_L } from "./uihint";
import { getUIOpacity as __rea_outer_B } from "./CocosCompat";
import { stopAllTweens as __rea_outer_F } from "./CocosCompat";
import { RopeController as __rea_outer_b } from "./rope-controller";
let __recovered_export_0;
var A;
__rea_outer_t._RF.push({}, "fae5cUcqihE9IGhsXtTtoDT", "Level_73", void 0);
const {
    ccclass: P
  } = __rea_outer_y,
  E = "level73_1",
  I = ["73_1", "73_2", "73_3"],
  V = "Level_73",
  R = ["Texture/prompt/prompt1/spriteFrame", "Texture/prompt/prompt2/spriteFrame", "Texture/prompt/prompt3/spriteFrame"],
  M = .12,
  O = 180 / Math.PI,
  W = new __rea_outer_s(0, -1400),
  G = [new __rea_outer_s(204, 116), new __rea_outer_s(-89.5, 190), new __rea_outer_s(-205, 25.5)],
  U = ["rope", "scissors_1", "scissors_2", "scissors_3", "witch", "princess", "2", "3", "fight", "fight_1", "fight_2", "fight_3", "level_2", "level_3", "general_end", "end_1", "blackmask", "clicks", "drags", "swips"],
  H = [{
    rootName: "1",
    bannerName: "level_1",
    pinNames: ["roptept1", "roptept2", "roptept3"],
    edges: [{
      startName: "roptept1",
      endName: "1_rope1"
    }, {
      startName: "roptept2",
      endName: "1_rope6"
    }, {
      startName: "roptept3",
      endName: "1_rope2"
    }, {
      startName: "1_rope1",
      endName: "1_rope3"
    }, {
      startName: "1_rope1",
      endName: "1_rope4"
    }, {
      startName: "1_rope1",
      endName: "1_rope6"
    }, {
      startName: "1_rope6",
      endName: "1_rope2"
    }, {
      startName: "1_rope6",
      endName: "1_rope3"
    }, {
      startName: "1_rope2",
      endName: "1_rope5"
    }, {
      startName: "1_rope2",
      endName: "1_rope3"
    }, {
      startName: "1_rope4",
      endName: "1_rope3"
    }, {
      startName: "1_rope3",
      endName: "1_rope5"
    }],
    actors: [{
      actorName: "1_witch",
      anchorName: "1_rope1",
      kind: "witch"
    }, {
      actorName: "1_witch2",
      anchorName: "1_rope2",
      kind: "witch"
    }, {
      actorName: "1_witch3",
      anchorName: "1_rope3",
      kind: "witch"
    }, {
      actorName: "1_princess1",
      anchorName: "1_rope4",
      kind: "princess"
    }, {
      actorName: "1_princess2",
      anchorName: "1_rope5",
      kind: "princess"
    }, {
      actorName: "1_princess3",
      anchorName: "1_rope6",
      kind: "princess"
    }]
  }, {
    rootName: "2",
    bannerName: "level_2",
    pinNames: ["roptept1", "roptept2", "roptept3"],
    edges: [{
      startName: "roptept1",
      endName: "2_rope1"
    }, {
      startName: "roptept2",
      endName: "2_rope2"
    }, {
      startName: "roptept3",
      endName: "2_rope7"
    }, {
      startName: "2_rope1",
      endName: "2_rope2"
    }, {
      startName: "2_rope1",
      endName: "2_rope3"
    }, {
      startName: "2_rope2",
      endName: "2_rope7"
    }, {
      startName: "2_rope2",
      endName: "2_rope6"
    }, {
      startName: "2_rope7",
      endName: "2_rope5"
    }, {
      startName: "2_rope3",
      endName: "2_rope6"
    }, {
      startName: "2_rope3",
      endName: "2_rope4"
    }, {
      startName: "2_rope6",
      endName: "2_rope5"
    }, {
      startName: "2_rope6",
      endName: "2_rope4"
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
      actorName: "2_witch3",
      anchorName: "2_rope3",
      kind: "witch"
    }, {
      actorName: "2_princess1",
      anchorName: "2_rope4",
      kind: "princess"
    }, {
      actorName: "2_princess2",
      anchorName: "2_rope5",
      kind: "princess"
    }, {
      actorName: "2_princess3",
      anchorName: "2_rope6",
      kind: "princess"
    }, {
      actorName: "2_princess4",
      anchorName: "2_rope7",
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
      endName: "3_rope4"
    }, {
      startName: "3_rope1",
      endName: "3_rope5"
    }, {
      startName: "3_rope1",
      endName: "3_rope2"
    }, {
      startName: "3_rope5",
      endName: "3_rope4"
    }, {
      startName: "3_rope5",
      endName: "3_rope6"
    }, {
      startName: "3_rope4",
      endName: "3_rope7"
    }, {
      startName: "3_rope2",
      endName: "3_rope6"
    }, {
      startName: "3_rope2",
      endName: "3_rope9"
    }, {
      startName: "3_rope2",
      endName: "3_rope3"
    }, {
      startName: "3_rope6",
      endName: "3_rope7"
    }, {
      startName: "3_rope6",
      endName: "3_rope3"
    }, {
      startName: "3_rope7",
      endName: "3_rope3"
    }, {
      startName: "3_rope7",
      endName: "3_rope8"
    }, {
      startName: "3_rope9",
      endName: "3_rope3"
    }, {
      startName: "3_rope3",
      endName: "3_rope8"
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
      actorName: "3_witch4",
      anchorName: "3_rope4",
      kind: "witch"
    }, {
      actorName: "3_princess1",
      anchorName: "3_rope5",
      kind: "princess"
    }, {
      actorName: "3_princess2",
      anchorName: "3_rope6",
      kind: "princess"
    }, {
      actorName: "3_princess3",
      anchorName: "3_rope7",
      kind: "princess"
    }, {
      actorName: "3_princess4",
      anchorName: "3_rope8",
      kind: "princess"
    }, {
      actorName: "3_princess5",
      anchorName: "3_rope9",
      kind: "princess"
    }]
  }];
__recovered_export_0 = P("Level_73")(A = class extends __rea_outer__ {
  constructor(...e) {
    super(...e), this.phase = 0, this.winstate = !1, this.gameNode = null, this.backBgNode = null, this.promptBoxNode = null, this.promptLabel = null, this.groundNode = null, this.blackmaskNode = null, this.generalEndNode = null, this.endNode = null, this.fightNode = null, this.poleNode = null, this.lineTemplate = null, this.scissorsATemplate = null, this.scissorsBTemplate = null, this.witchTemplate = null, this.princessTemplate = null, this.stageRoots = [null, null, null], this.bannerNodes = [null, null, null], this.fightFrames = [null, null, null], this.ropes = [], this.actors = [], this.cutPlaybacks = [], this.previousGravity = new __rea_outer_s(), this.ropePrefab = null, this.hintFrames = [null, null, null], this.stageIndex = 0, this.isStageClearing = !1, this.isFightLooping = !1, this.hasGravityOverride = !1, this.hasActorCollision = !1, this.previousDefaultMask = 1, this.previousPrincessMask = 0, this.previousWitchMask = 0, this.voiceToken = 0, this.flowToken = 0, this.fightFrame = 0, this.fightFrameElapsed = 0, this.swipeStart = null, this.activeLine = null, this.onTouchStart = e => {
      if (!this.canCut() || this.swipeStart) return;
      const t = this.readTouchLocal(e);
      if (!t || !this.isInsideGameNode(e)) return;
      const s = this.cloneVisual(this.lineTemplate);
      s && (this.swipeStart = t, this.activeLine = s, this.placeLine(s, t, t));
    }, this.onTouchMove = e => {
      var t;
      if (!this.swipeStart || null == (t = this.activeLine) || !t.isValid) return;
      const s = this.readTouchLocal(e);
      s && this.placeLine(this.activeLine, this.swipeStart, s);
    }, this.onTouchEnd = e => {
      if (!this.swipeStart || !this.activeLine) return;
      const t = this.swipeStart,
        s = this.activeLine,
        i = this.readTouchLocal(e) ?? t;
      this.swipeStart = null, this.activeLine = null, this.placeLine(s, t, i);
      const o = this.collectHitRopes(t, i);
      0 !== o.length ? this.beginCut(s, t, i, o) : this.destroyNode(s);
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
      this.isValid && 1 === this.phase && !this.isStageClearing && this.stageIndex === e && t && __rea_outer_k.getInstance().showView(__rea_outer_L, void 0, {
        body: "",
        spriteFrame: t
      });
    });
  }
  enterPhase0() {
    this.phase = 0, this.winstate = !1, this.stageIndex = 0, this.isStageClearing = !1, this.isFightLooping = !1, this.gameNode ? (this.applyInitialVisibility(), this.applyFallGravity(), this.setupGrounds(), this.holdStageTimer(), __rea_outer_C.playMusic("bgm4", !0, .5), this.setInputBlocked(!0), this.registerTouch(), this.loadRopePrefab()) : console.error("Level_73: missing UIPanel/gameNode");
  }
  loadRopePrefab() {
    const e = __rea_outer_i.getBundle(V);
    if (!e) return console.error("Level_73: level bundle is not loaded"), void this.playIntroLine(0);
    e.load("RopeItem", __rea_outer_o, (e, t) => {
      if (this.isValid && 0 === this.phase) {
        if (e || !t) return console.error("Level_73: failed to load RopeItem", e), void this.playIntroLine(0);
        this.ropePrefab = t, this.buildCurrentStage(), this.playIntroLine(0);
      }
    });
  }
  playIntroLine(e) {
    if (!this.isValid || 0 !== this.phase) return;
    if (e >= I.length) return void this.enterPhase1();
    const t = e === I.length - 1;
    this.playDialogue(I[e], t, () => {
      this.playIntroLine(e + 1);
    });
  }
  enterPhase1() {
    this.isValid && 0 === this.phase && (this.phase = 1, this.hidePrompt(), this.setInputBlocked(!1), this.runStageTimer());
  }
  applyInitialVisibility() {
    var e, t, s;
    const i = this.node.getChildByName("UIPanel");
    this.setNodeActive((null == i ? void 0 : i.getChildByName("demo")) ?? null, !1), this.setNodeActive((null == i ? void 0 : i.getChildByName("click_root")) ?? null, !1), U.forEach(e => {
      var t;
      this.setNodeActive((null == (t = this.gameNode) ? void 0 : t.getChildByName(e)) ?? null, !1);
    }), this.setNodeActive(this.stageRoots[0], !0), this.setNodeActive(this.bannerNodes[0], !0), this.setNodeActive(this.poleNode, !0), this.setNodeActive(this.groundNode, !0), this.setNodeActive((null == (e = this.gameNode) ? void 0 : e.getChildByName("ground2")) ?? null, !0), this.setNodeActive((null == (t = this.gameNode) ? void 0 : t.getChildByName("ground3")) ?? null, !0), this.setNodeActive((null == (s = this.gameNode) ? void 0 : s.getChildByName("bg")) ?? null, !0), this.setNodeActive(this.promptBoxNode, !0);
  }
  applyFallGravity() {
    const e = __rea_outer_n.instance;
    this.hasGravityOverride || (this.previousGravity.set(e.gravity.x, e.gravity.y), this.hasGravityOverride = !0), e.enable = !0, e.gravity = W.clone();
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
    })) : console.error("Level_73: cannot build stage", this.stageIndex);
  }
  bindActor(e, t) {
    const s = e.getChildByName(t.actorName),
      i = e.getChildByName(t.anchorName);
    if (!s || !i) return void console.error("Level_73: missing actor", t.actorName);
    this.ensureDynamicBody(i, t.kind);
    const o = s.worldPosition,
      n = i.worldPosition;
    this.actors.push({
      actorNode: s,
      anchorNode: i,
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
    const s = e.getChildByName(t.startName),
      i = e.getChildByName(t.endName);
    if (!s || !i || !this.ropePrefab) return void console.error("Level_73: missing rope", t.startName, t.endName);
    const o = new __rea_outer_r(`Rope_${t.startName}_${t.endName}`);
    e.addChild(o), o.setSiblingIndex(0);
    const n = o.addComponent(__rea_outer_b);
    n.ropeItemPrefab = this.ropePrefab, n.startPoint = s, n.endPoint = i, n.generateOnLoad = !1, n.isStartPinned = !0, n.isEndPinned = !0, n.segmentLength = 0, n.gravityScale = .25;
    const l = this.resolveRopeSpan(s, i),
      h = n.generateRopeBetween(l.start, l.end);
    if (0 === h.length) return void o.destroy();
    const d = __rea_outer_a.distance(s.worldPosition, i.worldPosition),
      c = __rea_outer_a.distance(l.start, l.end);
    console.log(`[Level_73] 绳子 ${t.startName}->${t.endName} 中心距=${d.toFixed(0)} 绳长=${c.toFixed(0)} 节数=${h.length}`), this.ropes.push({
      controller: n,
      node: o,
      isQueued: !1
    });
  }
  resolveRopeSpan(e, t) {
    const s = e.worldPosition,
      i = t.worldPosition,
      o = i.x - s.x,
      n = i.y - s.y,
      r = Math.hypot(o, n);
    if (r <= 1) return {
      start: s.clone(),
      end: i.clone()
    };
    const l = o / r,
      h = n / r,
      d = this.limitInsets(r, this.readFacingInset(e, l, h), this.readFacingInset(t, -l, -h));
    return {
      start: new __rea_outer_a(s.x + l * d.start, s.y + h * d.start, s.z),
      end: new __rea_outer_a(i.x - l * d.end, i.y - h * d.end, i.z)
    };
  }
  readFacingInset(e, t, s) {
    const i = e.getComponent(__rea_outer_l),
      o = e.getComponent(__rea_outer_h);
    if (null == i || !i.enabled || !o) return 0;
    const n = .5 * o.contentSize.width * Math.abs(t) + .5 * o.contentSize.height * Math.abs(s);
    return Math.max(0, n - 2);
  }
  limitInsets(e, t, s) {
    const i = Math.max(0, e - 23),
      o = Math.min(t, i);
    return {
      start: o,
      end: Math.min(s, Math.max(0, i - o))
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
    1 !== this.phase || this.isStageClearing || (this.landActorsOnGround(), this.landLinkedPrincesses(), this.removeRopesFromLandedActors());
  }
  landActorsOnGround() {
    for (const e of this.actors) {
      if (1 !== this.phase || this.isStageClearing) return;
      !e.isLanded && this.hasReachedGround(e) && this.landActor(e);
    }
  }
  landLinkedPrincesses() {
    if (1 !== this.phase || this.isStageClearing) return;
    this.actors.filter(e => "princess" === e.kind && !e.isLanded).forEach(e => {
      1 !== this.phase || this.isStageClearing || e.isLanded || !this.canLandWithSister(e) || (console.log(`[Level_73] ${e.actorNode.name} 与已落地公主仍连着绳子，记为落地`), this.landActor(e));
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
      s = [e];
    for (; s.length > 0;) {
      const e = s.pop();
      !e || t.indexOf(e) >= 0 || (t.push(e), this.pushOpenNeighbors(e, t, s));
    }
    return t;
  }
  pushOpenNeighbors(e, t, s) {
    this.ropes.forEach(i => {
      const o = this.readOpenNeighbor(i, e);
      o && t.indexOf(o) < 0 && s.push(o);
    });
  }
  removeRopesFromLandedActors() {
    const e = this.collectLandedAnchors();
    if (0 === e.length) return;
    const t = this.ropes.filter(t => this.ropeTouchesLandedAnchor(t, e));
    t.forEach(e => {
      this.forgetCutRope(e), this.removeRope(e);
    }), t.length > 0 && this.wakeHangingActors();
  }
  collectLandedAnchors() {
    return this.actors.filter(e => e.isLanded && e.anchorNode.isValid).map(e => e.anchorNode);
  }
  ropeTouchesLandedAnchor(e, t) {
    var s;
    if (null == (s = e.controller) || !s.isValid) return !1;
    const i = e.controller.startPoint,
      o = e.controller.endPoint,
      n = !(null == i || !i.isValid) && t.indexOf(i) >= 0,
      a = !(null == o || !o.isValid) && t.indexOf(o) >= 0;
    return n || a;
  }
  forgetCutRope(e) {
    this.cutPlaybacks.forEach(t => {
      const s = t.ropes.indexOf(e);
      s < 0 || t.ropes.splice(s, 1);
    });
  }
  readOpenNeighbor(e, t) {
    var s;
    if (e.isQueued || null == (s = e.controller) || !s.isValid) return null;
    const i = e.controller.startPoint,
      o = e.controller.endPoint;
    return null != i && i.isValid && null != o && o.isValid ? i === t ? o : o === t ? i : null : null;
  }
  landActor(e) {
    var t;
    e.isLanded = !0, this.freezeAnchor(e.anchorNode), this.wakeHangingActors(), this.lockUpright(e.anchorNode), this.lockUpright(e.actorNode), this.setNodeActive(e.actorNode, !1);
    const s = e.anchorNode.getComponent(__rea_outer_l);
    s && (s.enabled = !1), e.landedClone = this.spawnLandedClone(e), this.raiseLandedWitches(), this.lockUpright(e.landedClone);
    const i = null == (t = e.landedClone) ? void 0 : t.worldPosition;
    console.log(`[Level_73] 落地 ${e.actorNode.name} kind=${e.kind} clone=` + (e.landedClone ? "ok" : "null") + ` pos=(${(null == i ? void 0 : i.x.toFixed(1)) ?? "-"},${(null == i ? void 0 : i.y.toFixed(1)) ?? "-"})` + ` phase=${this.phase} clearing=${this.isStageClearing}`), "witch" !== e.kind ? (this.tryChaseWaitingWitches(), this.tryBeginStageClear()) : this.tryChaseWaitingWitches();
  }
  spawnLandedClone(e) {
    const t = "witch" === e.kind ? this.witchTemplate : this.princessTemplate,
      s = this.stageRoots[this.stageIndex];
    if (!t || !s) return null;
    const i = __rea_outer_c(t);
    i.active = !0, s.addChild(i), i.setSiblingIndex(s.children.length - 1);
    const o = e.actorNode.worldPosition,
      n = this.readGroundTop(),
      a = i.getComponent(__rea_outer_h),
      r = (null == a ? void 0 : a.anchorPoint.y) ?? .5,
      l = (null == a ? void 0 : a.contentSize.height) ?? 0,
      d = null === n ? o.y : n + l * r;
    return i.setWorldPosition(o.x, d, o.z), i;
  }
  raiseLandedWitches() {
    this.actors.forEach(e => {
      const t = e.landedClone;
      "witch" === e.kind && null != t && t.isValid && t.parent && t.setSiblingIndex(t.parent.children.length - 1);
    });
  }
  tryChaseWaitingWitches() {
    this.actors.forEach(e => {
      var t, s;
      if ("witch" !== e.kind || !e.isLanded || e.isChasing || null == (t = e.landedClone) || !t.isValid) return;
      const i = e.landedClone.worldPosition,
        o = this.findNearestPrincess(i.x, i.y);
      null != o && null != (s = o.landedClone) && s.isValid ? this.startWitchChase(e, o) : console.log(`[Level_73] ${e.actorNode.name} 已落地，还没有公主落地，先等待`);
    });
  }
  startWitchChase(e, t) {
    const s = e.landedClone,
      i = t.landedClone,
      o = null == s ? void 0 : s.parent;
    if (!s || !i || !o) return void console.log(`[Level_73] ${e.actorNode.name} 无法追击，clone 或父节点无效`);
    const n = i.worldPosition,
      r = new __rea_outer_a();
    o.inverseTransformPoint(r, new __rea_outer_a(n.x, n.y, n.z)), this.faceWitchToward(s, n.x), e.isChasing = !0, e.chaseElapsed = 0, e.chaseFrom = s.position.clone(), e.chaseTo = new __rea_outer_a(r.x, r.y, s.position.z), console.log(`[Level_73] ${e.actorNode.name} 开始追 ${t.actorNode.name} from=(${e.chaseFrom.x.toFixed(1)},${e.chaseFrom.y.toFixed(1)}) to=(${e.chaseTo.x.toFixed(1)},${e.chaseTo.y.toFixed(1)}) scaleX=${s.scale.x.toFixed(0)}`);
  }
  faceWitchToward(e, t) {
    const s = t < e.worldPosition.x ? -1 : 1;
    e.setScale(s, e.scale.y, e.scale.z);
  }
  advanceWitchChases(e) {
    this.actors.forEach(t => {
      var s;
      const i = t.landedClone;
      if (!(t.isChasing && t.chaseFrom && t.chaseTo && null != i && i.isValid)) return;
      t.chaseElapsed += e;
      const o = Math.min(1, t.chaseElapsed / 1);
      if (i.setPosition(t.chaseFrom.x + (t.chaseTo.x - t.chaseFrom.x) * o, t.chaseFrom.y + (t.chaseTo.y - t.chaseFrom.y) * o, t.chaseFrom.z), this.lockUpright(i), o < 1) return;
      t.isChasing = !1;
      const n = i.worldPosition,
        a = this.findNearestPrincess(n.x, n.y);
      null != a && null != (s = a.landedClone) && s.isValid ? (console.log(`[Level_73] ${t.actorNode.name} 已走到 ${a.actorNode.name}，进入失败`), this.beginWitchFight(i, a.landedClone)) : console.log(`[Level_73] ${t.actorNode.name} 已走到终点，但公主克隆无效`);
    });
  }
  findNearestPrincess(e, t) {
    let s = null,
      i = Number.POSITIVE_INFINITY;
    return this.actors.forEach(o => {
      var n;
      if ("princess" !== o.kind || null == (n = o.landedClone) || !n.isValid) return;
      const a = o.landedClone.worldPosition,
        r = (a.x - e) * (a.x - e) + (a.y - t) * (a.y - t);
      r < i && (i = r, s = o);
    }), s;
  }
  tryBeginStageClear() {
    if (1 !== this.phase || this.isStageClearing) return;
    const e = this.actors.filter(e => "princess" === e.kind),
      t = this.actors.some(e => "witch" === e.kind && e.isLanded);
    0 === e.length || t || e.some(e => !e.isLanded) ? t && e.every(e => e.isLanded) && console.log("[Level_73] 公主已全部落地，但已有女巫落地，不走通关，等待接触失败") : (console.log("[Level_73] 本关公主全部落地且女巫未落地，进入通关"), this.beginStageClear());
  }
  beginStageClear() {
    this.isStageClearing = !0, this.flowToken += 1;
    const e = this.flowToken;
    this.cancelActiveSwipe(), this.cancelCutPlaybacks(), this.setInputBlocked(!0), __rea_outer_S.getInstance().pauseTimer(), this.setNodeActive(this.generalEndNode, !0), __rea_outer_C.playEffect_1("level73_2"), this.scheduleOnce(() => {
      this.isFlowCurrent(e) && (this.stageIndex >= H.length - 1 ? this.enterFinalSuccess() : this.fadeToNextStage(e));
    }, 1);
  }
  fadeToNextStage(e) {
    var t;
    const s = this.blackmaskNode;
    if (!s) return this.swapStage(), void this.finishStageEnter(e);
    s.active = !0, s.setSiblingIndex(((null == (t = s.parent) ? void 0 : t.children.length) ?? 1) - 1);
    const i = __rea_outer_B(s);
    i.opacity = 0, __rea_outer_p(i).to(.35, {
      opacity: 255
    }).call(() => {
      this.isFlowCurrent(e) && (this.swapStage(), __rea_outer_p(i).to(.15, {
        opacity: 0
      }).call(() => {
        this.isFlowCurrent(e) && (s.active = !1, this.finishStageEnter(e));
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
    this.phase >= 2 || this.winstate || (this.phase = 2, this.winstate = !0, this.flowToken += 1, this.isStageClearing = !1, this.setInputBlocked(!0), __rea_outer_S.getInstance().pauseTimer(), this.showLevelSuccess(0));
  }
  beginWitchFight(e, t) {
    if (this.phase >= 2 || this.isStageClearing || this.winstate) return;
    this.enterFailPhase(), this.placeFight(e, t), this.isFightLooping = !0, this.fightFrame = 0, this.fightFrameElapsed = 0, this.showFightFrame(0), this.setNodeActive(this.fightNode, !0);
    const s = this.flowToken;
    this.scheduleOnce(() => {
      this.isFailCurrent(s) && this.presentEnd(s);
    }, .5);
  }
  beginTimeoutFail() {
    this.phase >= 2 || this.isStageClearing || this.winstate || (this.enterFailPhase(), this.presentEnd(this.flowToken));
  }
  enterFailPhase() {
    this.phase = 2, this.flowToken += 1, this.isFightLooping = !1, this.cancelActiveSwipe(), this.cancelCutPlaybacks(), this.stopWitchTweens(), this.setInputBlocked(!0), __rea_outer_S.getInstance().pauseTimer();
  }
  placeFight(e, t) {
    const s = e.worldPosition,
      i = t.worldPosition,
      o = this.toLocal(new __rea_outer_a((s.x + i.x) / 2, (s.y + i.y) / 2, 0));
    this.placeLocal(this.fightNode, o.x, o.y), this.fightFrames.forEach((e, t) => {
      const s = G[t];
      this.placeLocal(e, o.x + s.x, o.y + s.y);
    });
  }
  showFightFrame(e) {
    this.fightFrames.forEach((t, s) => {
      this.setNodeActive(t, s === e);
    });
  }
  presentEnd(e) {
    var t;
    this.isFailCurrent(e) && this.endNode && (this.endNode.active = !0, this.endNode.setSiblingIndex(((null == (t = this.endNode.parent) ? void 0 : t.children.length) ?? 1) - 1), __rea_outer_C.playEffect_1("level73_3"), this.scheduleOnce(() => {
      this.isFailCurrent(e) && __rea_outer_k.getInstance().showView(__rea_outer_T, __rea_outer_x.WIN_ANIMATION);
    }, 1));
  }
  tickCuts(e) {
    if (1 === this.phase && !this.isStageClearing) for (let t = this.cutPlaybacks.length - 1; t >= 0; t -= 1) {
      const s = this.cutPlaybacks[t];
      this.advanceCut(s, e) && (this.cutPlaybacks.splice(t, 1), this.finishCut(s));
    }
  }
  advanceCut(e, t) {
    for (e.elapsed += t; e.switchElapsed + M <= e.elapsed && e.switchElapsed + M < e.duration;) e.switchElapsed += M, e.showingFirst = !e.showingFirst, e.hasSwitched = !0, this.applyScissorsVisible(e), __rea_outer_C.playEffect_1(E);
    const s = Math.min(1, e.elapsed / e.duration);
    return this.placeScissors(e, s), !(e.elapsed < e.duration) && (e.hasSwitched || __rea_outer_C.playEffect_1(E), !0);
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
  beginCut(e, t, s, i) {
    const o = this.cloneVisual(this.scissorsATemplate),
      n = this.cloneVisual(this.scissorsBTemplate);
    if (!o || !n) return this.destroyNode(e), this.destroyNode(o), void this.destroyNode(n);
    i.forEach(e => {
      e.isQueued = !0;
    });
    const a = Math.hypot(s.x - t.x, s.y - t.y),
      r = {
        lineNode: e,
        scissorsA: o,
        scissorsB: n,
        ropes: i,
        start: t,
        end: s,
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
    const s = this.toWorld(e),
      i = this.toWorld(t);
    return this.ropes.filter(e => this.ropeHitsSegment(e, s, i));
  }
  ropeHitsSegment(e, t, i) {
    var o;
    return !(e.isQueued || null == (o = e.controller) || !o.isValid) && e.controller.getSegments().some(e => {
      var o;
      const n = null == (o = e.node) ? void 0 : o.getComponent(__rea_outer_h);
      return !!n && function (e, t, i, o, n) {
        if (n.contains(new __rea_outer_s(e, t)) || n.contains(new __rea_outer_s(i, o))) return !0;
        const a = n.x,
          r = n.x + n.width,
          l = n.y,
          h = n.y + n.height;
        return $(e, t, i, o, a, l, r, l) || $(e, t, i, o, r, l, r, h) || $(e, t, i, o, r, h, a, h) || $(e, t, i, o, a, h, a, l);
      }(t.x, t.y, i.x, i.y, n.getBoundingBoxToWorld());
    });
  }
  canCut() {
    var e;
    return 1 === this.phase && !this.isStageClearing && !this.winstate && !0 !== (null == (e = this.backBgNode) ? void 0 : e.active);
  }
  loadHintFrame(e, t) {
    const s = this.hintFrames[e];
    if (s) return void t(s);
    const o = R[e],
      n = __rea_outer_i.getBundle(V);
    if (!n || !o) return console.error("Level_73: missing hint bundle or path", e), void t(null);
    n.load(o, __rea_outer_u, (s, i) => {
      if (this.isValid) {
        if (s || !i) return console.error("Level_73: failed to load hint", o, s), void t(null);
        this.hintFrames[e] = i, t(i);
      }
    });
  }
  holdStageTimer() {
    const e = __rea_outer_S.getInstance();
    e.setRemainingTime(60), e.pauseTimer();
  }
  runStageTimer() {
    const e = __rea_outer_S.getInstance();
    e.setRemainingTime(60), e.pauseTimer(), e.resumeTimer();
  }
  playDialogue(e, t, s) {
    this.voiceToken += 1;
    const i = this.voiceToken;
    this.showPrompt(e), __rea_outer_C.stopVoice(), __rea_outer_C.playVoice(e), this.scheduleOnce(() => {
      this.isValid && i === this.voiceToken && (t && this.hidePrompt(), s());
    }, this.resolveDialogueHoldSeconds(e));
  }
  resolveDialogueHoldSeconds(e) {
    var t;
    const s = (null == (t = __rea_outer_C.audioMap.get(e)) ? void 0 : t.getDuration()) ?? 0;
    return s > .1 ? s : 2.5;
  }
  showPrompt(e) {
    if (this.promptLabel) {
      const t = __rea_outer_w.getInstance().getKey(e);
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
    const s = this.ropes.indexOf(e);
    s >= 0 && this.ropes.splice(s, 1), null != (t = e.controller) && t.isValid && e.controller.clearRope(), this.destroyNode(e.node);
  }
  cancelCutPlaybacks() {
    this.cutPlaybacks.splice(0, this.cutPlaybacks.length).forEach(e => {
      e.ropes.forEach(e => {
        e.isQueued = !1;
      }), this.destroyNode(e.lineNode), this.destroyNode(e.scissorsA), this.destroyNode(e.scissorsB);
    });
  }
  cancelActiveSwipe() {
    this.swipeStart = null, this.destroyNode(this.activeLine), this.activeLine = null;
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
    const s = e.getComponent(__rea_outer_d) ?? e.addComponent(__rea_outer_d);
    s.type = __rea_outer_N.Static, s.gravityScale = 0, s.fixedRotation = !0, s.allowSleep = !0, s.awakeOnLoad = !0, t && this.ensureBoxCollider(e);
  }
  ensureDynamicBody(e, t) {
    const s = e.getComponent(__rea_outer_d) ?? e.addComponent(__rea_outer_d);
    s.type = __rea_outer_N.Dynamic, s.gravityScale = 3.25, s.fixedRotation = !0, s.allowSleep = !1, s.awakeOnLoad = !0, s.bullet = !0, s.linearDamping = 2, s.angularDamping = 1;
    const i = "witch" === t ? 4 : 2;
    this.ensureBoxCollider(e, i);
  }
  configureActorCollision() {
    const e = __rea_outer_n.instance.collisionMatrix;
    this.hasActorCollision || (this.previousDefaultMask = e[1] ?? 1, this.previousPrincessMask = e[2] ?? 0, this.previousWitchMask = e[4] ?? 0, this.hasActorCollision = !0), e[2] = 1, e[4] = 1, e[1] = 6 | (e[1] ?? 1);
  }
  restoreActorCollision() {
    if (!this.hasActorCollision) return;
    const e = __rea_outer_n.instance.collisionMatrix;
    e[1] = this.previousDefaultMask, e[2] = this.previousPrincessMask, e[4] = this.previousWitchMask, this.hasActorCollision = !1;
  }
  ensureBoxCollider(e, t = 1) {
    const i = this.readContentSize(e),
      o = e.getComponent(__rea_outer_m) ?? e.addComponent(__rea_outer_m);
    o.group = t, o.offset = new __rea_outer_s(0, 0), o.size = i, o.friction = .2, o.restitution = 0, o.sensor = !1, o.apply();
  }
  freezeAnchor(e) {
    const t = e.getComponent(__rea_outer_d);
    t && (this.disableAnchorCollider(e), t.linearVelocity = new __rea_outer_s(0, 0), t.angularVelocity = 0, t.fixedRotation = !0, t.type = __rea_outer_N.Static);
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
    var s;
    const i = null == (s = e.getComponent(__rea_outer_h)) ? void 0 : s.getBoundingBoxToWorld();
    if (!i) return !1;
    const o = i.x < t.x + t.width && i.x + i.width > t.x,
      n = t.y + t.height;
    return o && i.y <= n + 12;
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
  placeLine(e, t, s) {
    const i = s.x - t.x,
      o = s.y - t.y;
    e.setPosition((t.x + s.x) / 2, (t.y + s.y) / 2, 0), e.angle = Math.atan2(o, i) * O, e.setScale(Math.hypot(i, o) / 50, 1, 1);
  }
  placeScissors(e, t) {
    const s = e.start.x + (e.end.x - e.start.x) * t,
      i = e.start.y + (e.end.y - e.start.y) * t,
      o = Math.atan2(e.end.y - e.start.y, e.end.x - e.start.x) * O;
    this.placeLocal(e.scissorsA, s, i), this.placeLocal(e.scissorsB, s, i), e.scissorsA.angle = o, e.scissorsB.angle = o;
  }
  applyScissorsVisible(e) {
    e.scissorsA.active = e.showingFirst, e.scissorsB.active = !e.showingFirst;
  }
  placeLocal(e, t, s) {
    null != e && e.isValid && e.setPosition(t, s, e.position.z);
  }
  readTouchLocal(e) {
    var t;
    const s = null == (t = this.gameNode) ? void 0 : t.getComponent(__rea_outer_h);
    if (!s) return null;
    const i = e.getUILocation();
    return s.convertToNodeSpaceAR(new __rea_outer_a(i.x, i.y, 0));
  }
  toWorld(e) {
    var t;
    const s = null == (t = this.gameNode) ? void 0 : t.getComponent(__rea_outer_h);
    return s ? s.convertToWorldSpaceAR(e) : e.clone();
  }
  toLocal(e) {
    var t;
    const s = null == (t = this.gameNode) ? void 0 : t.getComponent(__rea_outer_h);
    return s ? s.convertToNodeSpaceAR(e) : e.clone();
  }
  isInsideGameNode(e) {
    var t;
    const i = null == (t = this.gameNode) ? void 0 : t.getComponent(__rea_outer_h);
    if (!i) return !1;
    const o = e.getUILocation();
    return i.getBoundingBoxToWorld().contains(new __rea_outer_s(o.x, o.y));
  }
  readContentSize(e) {
    const t = e.getComponent(__rea_outer_h),
      s = t && t.contentSize.width > 0 ? t.contentSize.width : 40,
      i = t && t.contentSize.height > 0 ? t.contentSize.height : 40;
    return new __rea_outer_v(s, i);
  }
  resolveReferences() {
    var e, t, s, i, o, n, a, r, l, h, d, c, p, u, g, m;
    const N = this.node.getChildByName("UIPanel");
    this.gameNode = (null == N ? void 0 : N.getChildByName("gameNode")) ?? null, this.backBgNode = (null == N ? void 0 : N.getChildByName("backBG")) ?? null, this.promptBoxNode = (null == (e = this.gameNode) ? void 0 : e.getChildByName("prompt_box")) ?? null, this.promptLabel = (null == (t = this.promptBoxNode) || null == (t = t.getChildByName("Label")) ? void 0 : t.getComponent(__rea_outer_f)) ?? null, this.groundNode = (null == (s = this.gameNode) ? void 0 : s.getChildByName("ground")) ?? null, this.blackmaskNode = (null == (i = this.gameNode) ? void 0 : i.getChildByName("blackmask")) ?? null, this.generalEndNode = (null == (o = this.gameNode) ? void 0 : o.getChildByName("general_end")) ?? null, this.endNode = (null == (n = this.gameNode) ? void 0 : n.getChildByName("end_1")) ?? null, this.fightNode = (null == (a = this.gameNode) ? void 0 : a.getChildByName("fight")) ?? null, this.poleNode = (null == (r = this.gameNode) ? void 0 : r.getChildByName("pole")) ?? null, this.lineTemplate = (null == (l = this.gameNode) ? void 0 : l.getChildByName("scissors_3")) ?? null, this.scissorsATemplate = (null == (h = this.gameNode) ? void 0 : h.getChildByName("scissors_1")) ?? null, this.scissorsBTemplate = (null == (d = this.gameNode) ? void 0 : d.getChildByName("scissors_2")) ?? null, this.witchTemplate = (null == (c = this.gameNode) ? void 0 : c.getChildByName("witch")) ?? null, this.princessTemplate = (null == (p = this.gameNode) ? void 0 : p.getChildByName("princess")) ?? null, this.fightFrames[0] = (null == (u = this.gameNode) ? void 0 : u.getChildByName("fight_1")) ?? null, this.fightFrames[1] = (null == (g = this.gameNode) ? void 0 : g.getChildByName("fight_2")) ?? null, this.fightFrames[2] = (null == (m = this.gameNode) ? void 0 : m.getChildByName("fight_3")) ?? null, H.forEach((e, t) => {
      var s, i;
      this.stageRoots[t] = (null == (s = this.gameNode) ? void 0 : s.getChildByName(e.rootName)) ?? null, this.bannerNodes[t] = (null == (i = this.gameNode) ? void 0 : i.getChildByName(e.bannerName)) ?? null;
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
}) || A;
function $(e, t, s, i, o, n, a, r) {
  const l = s - e,
    h = i - t,
    d = a - e,
    c = r - t,
    p = a - o,
    u = r - n,
    g = e - o,
    m = t - n,
    N = s - o,
    v = i - n,
    f = D(l, h, o - e, n - t),
    y = D(l, h, d, c),
    _ = D(p, u, g, m),
    C = D(p, u, N, v);
  return f * y <= 0 && _ * C <= 0;
}
function D(e, t, s, i) {
  return e * i - t * s;
}
__rea_outer_t._RF.pop();
export { __recovered_export_0 as default };
