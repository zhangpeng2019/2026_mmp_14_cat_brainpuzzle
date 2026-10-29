// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_52.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { Vec2 as __rea_outer_i } from "cc";
import { Vec3 as __rea_outer_s } from "cc";
import { Node as __rea_outer_o } from "cc";
import { Button as __rea_outer_n } from "cc";
import { UITransform as __rea_outer_l } from "cc";
import { tween as __rea_outer_h } from "cc";
import { instantiate as __rea_outer_r } from "cc";
import { Sprite as __rea_outer_a } from "cc";
import { Layout as __rea_outer_c } from "cc";
import { ScrollView as __rea_outer_d } from "cc";
import { Label as __rea_outer_u } from "cc";
import { _decorator as __rea_outer_p } from "cc";
import { default as __rea_outer_g } from "./LevelBase";
import { default as __rea_outer_N } from "./AudioManager";
import { I18nController as __rea_outer_v } from "./i18n-controller";
import { UIManager as __rea_outer_f } from "./ui-manager";
import { UILayer as __rea_outer_m } from "./ui-layer";
import { UIHint as __rea_outer_y } from "./uihint";
import { UIFail as __rea_outer_C } from "./uifail";
import { GameController as __rea_outer_P } from "./GameController";
import { stopAllTweens as __rea_outer_A } from "./CocosCompat";
import { computeContentHorizontalScrollBounds as __rea_outer_T } from "./content-horizontal-scroll";
import { applyContentHorizontalScroll as __rea_outer_b } from "./content-horizontal-scroll";
import { snapBackContentHorizontalScroll as __rea_outer_R } from "./content-horizontal-scroll";
let __recovered_export_0;
var S;
__rea_outer_t._RF.push({}, "f52a5IAUgBAUqBSAAAAAABS", "Level_52", void 0);
const {
    ccclass: V
  } = __rea_outer_p,
  I = "52_1",
  _ = "52_18",
  B = "52_19",
  w = .5,
  E = 800,
  L = "showpic",
  M = [{
    id: 1,
    hintKey: "level52_hint1",
    passVoiceKey: "52_20",
    arrestVoiceKey: "52_14",
    correctIsPass: !1,
    arrestFaceName: "npc1_angry",
    clues: [{
      touchName: "touch1_3",
      collectNodeName: "boy_npc1_3",
      voiceKey: "52_2",
      requiresMagnifier: !1
    }, {
      touchName: "touch1_1",
      collectNodeName: "boy_npc1_1",
      voiceKey: "52_3",
      requiresMagnifier: !1
    }, {
      touchName: "touch1_2",
      collectNodeName: "boy_npc1_2",
      voiceKey: "52_4",
      requiresMagnifier: !0
    }]
  }, {
    id: 2,
    hintKey: "level52_hint2",
    passVoiceKey: "52_21",
    arrestVoiceKey: "52_15",
    correctIsPass: !1,
    arrestFaceName: "npc2_angry",
    clues: [{
      touchName: "touch2_2",
      collectNodeName: "boy_npc2_2",
      voiceKey: "52_5",
      requiresMagnifier: !1
    }, {
      touchName: "touch2_3",
      collectNodeName: "boy_npc2_3",
      voiceKey: "52_6",
      requiresMagnifier: !1
    }, {
      touchName: "touch2_1",
      collectNodeName: "boy_npc2_1",
      voiceKey: "52_7",
      requiresMagnifier: !0
    }]
  }, {
    id: 3,
    hintKey: "level52_hint3",
    passVoiceKey: "52_22",
    arrestVoiceKey: "52_16",
    correctIsPass: !1,
    arrestFaceName: "npc3_angry",
    clues: [{
      touchName: "touch3_2",
      collectNodeName: "boy_npc3_2",
      voiceKey: "52_8",
      requiresMagnifier: !1
    }, {
      touchName: "touch3_3",
      collectNodeName: "boy_npc3_3",
      voiceKey: "52_9",
      requiresMagnifier: !1
    }, {
      touchName: "touch3_1",
      collectNodeName: "boy_npc3_1",
      voiceKey: "52_10",
      requiresMagnifier: !0
    }]
  }, {
    id: 4,
    hintKey: "level52_hint4",
    passVoiceKey: "52_17",
    arrestVoiceKey: "52_23",
    correctIsPass: !0,
    arrestFaceName: "npc4_doubt",
    clues: [{
      touchName: "touch4_3",
      collectNodeName: "boy_npc4_3",
      voiceKey: "52_11",
      requiresMagnifier: !1
    }, {
      touchName: "touch4_2",
      collectNodeName: "boy_npc4_2",
      voiceKey: "52_12",
      requiresMagnifier: !1
    }, {
      touchName: "touch4_1",
      collectNodeName: "boy_npc4_1",
      voiceKey: "52_13",
      requiresMagnifier: !0
    }]
  }];
__recovered_export_0 = V("Level_52")(S = class extends __rea_outer_g {
  constructor(...e) {
    super(...e), this.phase = 0, this.winstate = !1, this.currentRoundIndex = 0, this.gameNode = null, this.artRoot = null, this.bgNode = null, this.bg1Node = null, this.principalNode = null, this.principalArm1Node = null, this.principalArm2Node = null, this.principalAngryNode = null, this.principalExpressionNode = null, this.magnifyingGlass1 = null, this.magnifyingGlassNode = null, this.lensSelfSize = new __rea_outer_i(), this.lensSelfAnchor = new __rea_outer_i(.5, .5), this.clicksRoot = null, this.clickRoot = null, this.collectionBgNode = null, this.contentNode = null, this.demoTemplateNode = null, this.placeholderDemoNode = null, this.contentLayout = null, this.scrollView = null, this.buttonPass = null, this.buttonArrest = null, this.backBgNode = null, this.bubbleNode = null, this.tipLabel = null, this.npcNodes = [], this.revealNodes = [], this.arrestFaceNodes = [], this.collectSourceNodes = new Map(), this.circleNodes = [], this.touchNodes = new Map(), this.emoteNodes = [], this.npcRestPositions = [], this.revealRestPositions = [], this.arrestFaceRestPositions = [], this.revealSiblingIndexes = [], this.principalRestPosition = new __rea_outer_s(), this.principalArm1RestPosition = new __rea_outer_s(), this.principalArm2RestPosition = new __rea_outer_s(), this.principalAngryRestPosition = new __rea_outer_s(), this.principalExpressionRestPosition = new __rea_outer_s(), this.magnifierRestPosition = new __rea_outer_s(), this.roundOrder = [], this.completedTouches = new Set(), this.flyNodes = [], this.hasWrongJudgment = !1, this.isInteractionLocked = !1, this.isRoundTransitioning = !1, this.isDraggingMagnifier = !1, this.magnifierDragDistance = 0, this.magnifierDragOffset = new __rea_outer_s(), this.lastMagnifierLocalPos = new __rea_outer_s(), this.voiceToken = 0, this.bubbleToken = 0, this.currentDialogueKey = "", this.contentScrollBounds = {
      minX: 0,
      maxX: 0
    }, this.touchStartPoint = new __rea_outer_i(), this.scrollStartContentX = 0, this.isTouchStartedInList = !1, this.isContentScrolling = !1, this.onLevelTouchStart = e => {
      var t, i;
      if (1 !== this.phase) return;
      null != (t = this.contentNode) && t.isValid && __rea_outer_A(this.contentNode);
      const s = this.getTouchWorldPoint(e);
      this.touchStartPoint = s, this.scrollStartContentX = (null == (i = this.contentNode) ? void 0 : i.position.x) ?? 0, this.isTouchStartedInList = this.isPointInsideNode(this.collectionBgNode, s), this.isContentScrolling = !1, this.isTouchStartedInList || this.isInteractionLocked || this.isRoundTransitioning || this.isMagnifierHit(s) && this.beginMagnifierDrag(e);
    }, this.onLevelTouchMove = e => {
      if (1 !== this.phase) return;
      if (this.isDraggingMagnifier) return void this.moveMagnifier(e);
      if (!this.isTouchStartedInList) return;
      const t = this.getTouchWorldPoint(e),
        i = t.x - this.touchStartPoint.x,
        s = t.y - this.touchStartPoint.y;
      if (!this.isContentScrolling) {
        const e = Math.abs(i),
          t = Math.abs(s);
        if (e <= 12 || e <= t) return;
        this.isContentScrolling = !0;
      }
      this.applyContentScroll(this.scrollStartContentX + i);
    }, this.onLevelTouchEnd = e => {
      if (this.isDraggingMagnifier) return this.endMagnifierDrag(e), void this.resetContentScrollSession();
      const t = this.isContentScrolling;
      if (this.resetContentScrollSession(), t) return void this.snapBackContentScroll();
      if (1 !== this.phase || this.isRoundTransitioning || this.isInteractionLocked) return;
      const i = this.getTouchWorldPoint(e);
      this.isPointInsideNode(this.collectionBgNode, i) || this.tryCompleteTouchedClue(i);
    }, this.onLevelTouchCancel = () => {
      this.isDraggingMagnifier && this.endMagnifierDrag(null);
      const e = this.isContentScrolling;
      this.resetContentScrollSession(), e && this.snapBackContentScroll();
    }, this.onButtonPassClick = () => {
      this.handleDecision(!0);
    }, this.onButtonArrestClick = () => {
      this.handleDecision(!1);
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.allItemNum = 3, this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.enterPhase0();
  }
  update() {
    var e;
    this.isValid && 1 === this.phase && !0 === (null == (e = this.magnifyingGlass1) ? void 0 : e.activeInHierarchy) && this.anchorRevealToRest();
  }
  onDestroy() {
    this.unscheduleAllCallbacks(), this.unregisterHandlers(), this.restoreAllReveals(), this.stopAllMoveTweens(), this.clearFlyNodes(), this.hideBubble(), this.stopCurrentDialogueEffect(), super.onDestroy();
  }
  handleTimeExpired() {
    return !!(this.phase >= 2 || this.winstate);
  }
  showHint() {
    if (1 !== this.phase) return;
    const e = this.getCurrentCharacter();
    if (!e) return;
    const t = __rea_outer_v.getInstance().getKey(e.hintKey);
    __rea_outer_f.getInstance().showView(__rea_outer_y, void 0, {
      body: t
    });
  }
  getGameProgressSnapshot() {
    const e = this.hasInstallNum;
    return {
      progress: e / 3,
      label: `${e}/3`
    };
  }
  markAllTasksCompleted() {
    this.hasInstallNum = 3, this.currentRoundIndex = 3, this.phase = 2, this.winstate = !0, this.isInteractionLocked = !0, this.isRoundTransitioning = !0, this.unregisterHandlers();
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.currentRoundIndex = 0, this.roundOrder = this.shuffleCharacterIds(), this.completedTouches.clear(), this.hasWrongJudgment = !1, this.isInteractionLocked = !1, this.isRoundTransitioning = !1, this.isDraggingMagnifier = !1, this.hasInstallNum = 0, this.allItemNum = 3, this.voiceToken = 0, this.bubbleToken = 0, this.currentDialogueKey = "", this.clearFlyNodes(), this.clearCollectedItems(), this.hideCircles(), this.hideReveals();
  }
  shuffleCharacterIds() {
    const e = [];
    for (let t = 1; t <= 4; t += 1) e.push(t);
    for (let t = e.length - 1; t > 0; t -= 1) {
      const i = Math.floor(Math.random() * (t + 1)),
        s = e[t];
      e[t] = e[i], e[i] = s;
    }
    return e;
  }
  enterPhase0() {
    this.phase = 0, this.isInteractionLocked = !0, __rea_outer_N.playMusic("bgm2", !0, .5), this.applyPhase0Visibility(), this.setNodeActive(this.backBgNode, !0), this.placePrincipalAtX(-800, "intro"), this.movePrincipalToRest("intro", () => {
      this.isValid && this.playVoiceEffect(I, () => {
        this.isValid && this.movePrincipalToX(E, "intro", () => {
          this.isValid && (this.hidePrincipal(), this.enterPhase1());
        });
      });
    });
  }
  enterPhase1() {
    this.phase = 1, this.currentRoundIndex = 0, this.registerHandlers(), this.startRound(0);
  }
  startRound(e) {
    this.currentRoundIndex = e, this.completedTouches.clear(), this.hasInstallNum = 0, this.allItemNum = 3, this.isRoundTransitioning = !1, this.isInteractionLocked = !0, this.isDraggingMagnifier = !1, this.hideCircles(), this.clearCollectedItems(), this.hideDecisionButtons(), this.setNodeActive(this.clickRoot, !1), this.setNodeActive(this.collectionBgNode, !1), this.hideAllCharacters(), this.hideAllTouches(), this.resetMagnifierToSpawn(!1), this.setNodeActive(this.backBgNode, !0), __rea_outer_P.getInstance().refreshGameProgress();
    const t = this.getCurrentCharacter(),
      i = this.getNpcNode(this.getCurrentCharacterId());
    t && null != i && i.isValid ? (this.placeNpcAtX(this.getCurrentCharacterId(), E), this.setNodeActive(i, !0), this.moveNodeToRest(i, this.npcRestPositions[this.getCurrentCharacterId() - 1], () => {
      this.isValid && this.enterRoundInteraction();
    })) : this.isInteractionLocked = !1;
  }
  enterRoundInteraction() {
    this.setNodeActive(this.clickRoot, !0), this.setNodeActive(this.collectionBgNode, !0), this.hideDecisionButtons(), this.computeScrollBounds(), this.showTouchesForCharacter(this.getCurrentCharacterId()), this.resetMagnifierToSpawn(!0), this.setNodeActive(this.backBgNode, !1), this.isInteractionLocked = !1;
  }
  applyPhase0Visibility() {
    this.setNodeActive(this.bgNode, !0), this.setNodeActive(this.bg1Node, !0), this.hidePrincipal(), this.hideAllCharacters(), this.hideAllTouches(), this.hideEmotes(), this.hideCircles(), this.resetMagnifierToSpawn(!1), this.setNodeActive(this.clickRoot, !1), this.hideDecisionButtons(), this.setNodeActive(this.collectionBgNode, !1), this.setNodeActive(this.backBgNode, !1), this.setNodeActive(this.placeholderDemoNode, !1), this.hideBubble(), this.hideCollectSources();
  }
  hideAllCharacters() {
    this.hideReveals(), this.npcNodes.forEach((e, t) => {
      this.setNodeActive(e, !1), this.restoreNpcRest(t + 1);
    }), this.arrestFaceNodes.forEach((e, t) => {
      this.setNodeActive(e, !1), this.restoreArrestFaceRest(t + 1);
    });
  }
  hideEmotes() {
    this.emoteNodes.forEach(e => {
      this.setNodeActive(e, !1);
    });
  }
  hideCollectSources() {
    this.collectSourceNodes.forEach(e => {
      this.setNodeActive(e, !1);
    });
  }
  registerHandlers() {
    var e, t;
    this.node.on(__rea_outer_o.EventType.TOUCH_START, this.onLevelTouchStart, this), this.node.on(__rea_outer_o.EventType.TOUCH_MOVE, this.onLevelTouchMove, this), this.node.on(__rea_outer_o.EventType.TOUCH_END, this.onLevelTouchEnd, this), this.node.on(__rea_outer_o.EventType.TOUCH_CANCEL, this.onLevelTouchCancel, this), null != (e = this.buttonPass) && null != (e = e.node) && e.isValid && this.buttonPass.node.on(__rea_outer_n.EventType.CLICK, this.onButtonPassClick, this), null != (t = this.buttonArrest) && null != (t = t.node) && t.isValid && this.buttonArrest.node.on(__rea_outer_n.EventType.CLICK, this.onButtonArrestClick, this), this.disableScrollViewComponent();
  }
  unregisterHandlers() {
    var e, t, i;
    null != (e = this.node) && e.isValid && (this.node.off(__rea_outer_o.EventType.TOUCH_START, this.onLevelTouchStart, this), this.node.off(__rea_outer_o.EventType.TOUCH_MOVE, this.onLevelTouchMove, this), this.node.off(__rea_outer_o.EventType.TOUCH_END, this.onLevelTouchEnd, this), this.node.off(__rea_outer_o.EventType.TOUCH_CANCEL, this.onLevelTouchCancel, this)), null != (t = this.buttonPass) && null != (t = t.node) && t.isValid && this.buttonPass.node.off(__rea_outer_n.EventType.CLICK, this.onButtonPassClick, this), null != (i = this.buttonArrest) && null != (i = i.node) && i.isValid && this.buttonArrest.node.off(__rea_outer_n.EventType.CLICK, this.onButtonArrestClick, this);
  }
  handleClueTouch(e, t) {
    if (this.completedTouches.has(e)) return;
    const i = this.getCurrentTouchNode(e),
      o = null != i && i.isValid ? i.worldPosition.clone() : new __rea_outer_s(t.x, t.y, 0);
    this.completeClue(e, o);
  }
  completeClue(e, t) {
    if (this.completedTouches.has(e)) return;
    const i = this.getCurrentCharacter();
    if (!i) return;
    this.completedTouches.add(e), this.showCircleAtWorld(e, t), __rea_outer_N.playEffect_1("level52_1"), this.hasInstallNum = this.completedTouches.size, __rea_outer_P.getInstance().refreshGameProgress();
    const s = this.collectSourceNodes.get(i.clues[e].collectNodeName) ?? null;
    if (this.playCollectFly(s, t), this.completedTouches.size >= 3) {
      if (this.TryQuickWin()) return;
      this.showDecisionButtons();
    }
    this.lockAndPlayVoice(i.clues[e].voiceKey);
  }
  handleDecision(e) {
    if (this.isRoundTransitioning || this.completedTouches.size < 3) return;
    const t = this.getCurrentCharacter();
    t && (this.isRoundTransitioning = !0, this.isInteractionLocked = !0, this.isDraggingMagnifier = !1, __rea_outer_N.playEffect_1(e ? "level52_2" : "level52_3"), this.resetMagnifierToSpawn(!1), this.clearRoundUi(), this.hideAllTouches(), e !== t.correctIsPass && (this.hasWrongJudgment = !0), e ? this.playPassSequence(t) : this.playArrestSequence(t));
  }
  playPassSequence(e) {
    this.setNodeActive(this.getArrestFaceNode(e.id), !1), this.setNodeActive(this.backBgNode, !0), this.playVoiceEffect(e.passVoiceKey, () => {
      this.isValid && this.moveNodeToX(this.getNpcNode(e.id), -800, w, () => {
        this.isValid && (this.setNodeActive(this.getNpcNode(e.id), !1), this.advanceAfterRound());
      });
    });
  }
  playArrestSequence(e) {
    const t = this.getNpcNode(e.id),
      i = this.getArrestFaceNode(e.id);
    this.restoreArrestFaceRest(e.id), this.setNodeActive(i, !0), this.setNodeActive(this.backBgNode, !0), this.playVoiceEffect(e.arrestVoiceKey, () => {
      if (!this.isValid) return;
      const s = E + this.getArrestFaceOffsetX(e.id);
      this.moveNodeToX(i, s, w), this.moveNodeToX(t, E, w, () => {
        this.isValid && (this.setNodeActive(t, !1), this.setNodeActive(i, !1), this.advanceAfterRound());
      });
    });
  }
  advanceAfterRound() {
    this.scheduleOnce(() => {
      this.isValid && (this.currentRoundIndex + 1 < 4 ? this.startRound(this.currentRoundIndex + 1) : this.playPrincipalEnding());
    }, 1);
  }
  playPrincipalEnding() {
    this.phase = 1, this.isInteractionLocked = !0, __rea_outer_P.getInstance().pauseTimer(), this.setNodeActive(this.backBgNode, !0), this.hideAllCharacters(), this.resetMagnifierToSpawn(!1), this.hasWrongJudgment ? this.playFailPrincipal() : this.playWinPrincipal();
  }
  playWinPrincipal() {
    this.placePrincipalAtX(E, "win"), this.movePrincipalToRest("win", () => {
      this.isValid && this.playVoiceEffect(_, () => {
        this.isValid && (this.winstate = !0, this.beginResultPhase(), this.showLevelSuccess(1));
      });
    });
  }
  playFailPrincipal() {
    this.placePrincipalAtX(E, "fail"), this.movePrincipalToRest("fail", () => {
      this.isValid && this.playVoiceEffect(B, () => {
        this.isValid && (this.winstate = !1, this.beginFailSequence(1));
      });
    });
  }
  beginResultPhase() {
    this.phase >= 2 || (this.phase = 2, this.unregisterHandlers(), this.resetMagnifierToSpawn(!1), this.clearRoundUi(), __rea_outer_P.getInstance().pauseTimer());
  }
  beginFailSequence(e = 0) {
    this.beginResultPhase(), this.scheduleOnce(() => {
      this.isValid && __rea_outer_f.getInstance().showView(__rea_outer_C, __rea_outer_m.WIN_ANIMATION);
    }, e);
  }
  clearRoundUi() {
    this.hideDecisionButtons(), this.setNodeActive(this.clickRoot, !1), this.setNodeActive(this.collectionBgNode, !1), this.clearCollectedItems(), this.hideCircles(), this.clearFlyNodes();
  }
  isMagnifierHit(e) {
    var t;
    return !0 === (null == (t = this.magnifyingGlass1) ? void 0 : t.activeInHierarchy) && this.isPointInsideNode(this.magnifyingGlass1, e);
  }
  beginMagnifierDrag(e) {
    const t = this.magnifyingGlass1;
    if (null == t || !t.isValid) return;
    this.isDraggingMagnifier = !0, this.magnifierDragDistance = 0, this.clampMagnifierDragPosition();
    const i = t.parent ?? this.node,
      s = this.getTouchLocalPosition(e, i);
    this.lastMagnifierLocalPos.set(s.x, s.y, s.z);
    const o = t.position;
    this.magnifierDragOffset.set(o.x - s.x, o.y - s.y, o.z - s.z), e.propagationStopped = !0;
  }
  moveMagnifier(e) {
    const t = this.magnifyingGlass1;
    if (null == t || !t.isValid) return;
    const i = t.parent ?? this.node,
      s = this.getTouchLocalPosition(e, i),
      o = s.x - this.lastMagnifierLocalPos.x,
      n = s.y - this.lastMagnifierLocalPos.y;
    this.magnifierDragDistance += Math.sqrt(o * o + n * n), this.lastMagnifierLocalPos.set(s.x, s.y, s.z);
    const l = this.clampMagnifierDragX(s.x + this.magnifierDragOffset.x),
      h = this.clampMagnifierDragY(s.y + this.magnifierDragOffset.y);
    t.setPosition(l, h, t.position.z), this.magnifierDragOffset.set(l - s.x, h - s.y, this.magnifierDragOffset.z), this.anchorRevealToRest(), e.propagationStopped = !0;
  }
  endMagnifierDrag(e) {
    const t = this.magnifierDragDistance <= 20;
    this.isDraggingMagnifier = !1, e && 1 === this.phase && !this.isInteractionLocked && !this.isRoundTransitioning && t && this.tryCompleteTouchedClue(this.getTouchWorldPoint(e));
  }
  tryCompleteTouchedClue(e) {
    const t = this.findTouchedClueIndex(e);
    t < 0 || this.handleClueTouch(t, e);
  }
  findTouchedClueIndex(e) {
    const t = this.getCurrentCharacter();
    if (!t) return -1;
    for (let i = 0; i < t.clues.length; i += 1) {
      if (this.completedTouches.has(i)) continue;
      const s = this.getCurrentTouchNode(i);
      if (null != s && s.activeInHierarchy && this.isPointInsideNode(s, e) && (!t.clues[i].requiresMagnifier || this.canClickMagnifierRequiredClue(e))) return i;
    }
    return -1;
  }
  canClickMagnifierRequiredClue(e) {
    return this.isPointInsideLensContent(e);
  }
  isPointInsideLensContent(e) {
    var t;
    const i = this.magnifyingGlassNode;
    if (!0 !== (null == (t = this.magnifyingGlass1) ? void 0 : t.activeInHierarchy) || null == i || !i.isValid || !i.activeInHierarchy) return !1;
    const o = i.getComponent(__rea_outer_l);
    if (!o || this.lensSelfSize.x <= 0 || this.lensSelfSize.y <= 0) return !1;
    const n = o.convertToNodeSpaceAR(new __rea_outer_s(e.x, e.y, 0)),
      h = -this.lensSelfAnchor.x * this.lensSelfSize.x,
      r = -this.lensSelfAnchor.y * this.lensSelfSize.y;
    return n.x >= h && n.x <= h + this.lensSelfSize.x && n.y >= r && n.y <= r + this.lensSelfSize.y;
  }
  showCurrentReveal() {
    const e = this.magnifyingGlassNode,
      t = this.getCurrentCharacterId();
    this.revealNodes.forEach((i, s) => {
      null != i && i.isValid && (null != e && e.isValid && i.parent !== e && i.setParent(e), this.setNodeActive(i, s === t - 1));
    }), this.anchorRevealToRest();
  }
  hideReveals() {
    this.revealNodes.forEach(e => {
      this.setNodeActive(e, !1);
    });
  }
  parentRevealsToLens() {
    const e = this.magnifyingGlassNode;
    null != e && e.isValid && this.revealNodes.forEach(t => {
      null != t && t.isValid && (t.parent !== e && t.setParent(e), this.setNodeActive(t, !1));
    });
  }
  anchorRevealToRest() {
    var e;
    const t = this.getCurrentCharacterId(),
      i = this.getRevealNode(t),
      s = this.artRoot,
      o = this.revealRestPositions[t - 1];
    if (null == i || !i.isValid || null == s || !s.isValid || !o) return;
    const n = (null == (e = s.getComponent(__rea_outer_l)) ? void 0 : e.convertToWorldSpaceAR(o)) ?? s.worldPosition;
    i.setWorldPosition(n);
  }
  clampMagnifierDragPosition() {
    const e = this.magnifyingGlass1;
    if (null == e || !e.isValid) return;
    const t = e.position;
    e.setPosition(this.clampMagnifierDragX(t.x), this.clampMagnifierDragY(t.y), t.z);
  }
  clampMagnifierDragX(e) {
    return Math.min(426.583, Math.max(-344.054, e));
  }
  clampMagnifierDragY(e) {
    return Math.min(435.382, Math.max(-165.018, e));
  }
  resetMagnifierToSpawn(e) {
    this.isDraggingMagnifier = !1;
    const t = this.magnifyingGlass1;
    null != t && t.isValid && (t.setPosition(this.magnifierRestPosition.clone()), this.setNodeActive(t, e)), e ? this.showCurrentReveal() : this.hideReveals();
  }
  restoreAllReveals() {
    const e = this.artRoot;
    this.revealNodes.forEach((t, i) => {
      if (null == t || !t.isValid) return;
      if (null != e && e.isValid && t.parent !== e) {
        t.setParent(e);
        const s = this.revealSiblingIndexes[i];
        s >= 0 && t.setSiblingIndex(Math.min(s, e.children.length - 1));
      }
      const s = this.revealRestPositions[i];
      s && t.setPosition(s.clone()), this.setNodeActive(t, !1);
    });
  }
  showCircleAtWorld(e, t) {
    const i = this.circleNodes[e];
    null != i && i.isValid && (i.setWorldPosition(t), this.setNodeActive(i, !0), i.setScale(0, 0, 1), __rea_outer_A(i), __rea_outer_h(i).to(.25, {
      scale: new __rea_outer_s(1, 1, 1)
    }, {
      easing: "backOut"
    }).start());
  }
  hideCircles() {
    this.circleNodes.forEach(e => {
      null != e && e.isValid && (__rea_outer_A(e), e.setScale(1, 1, 1), this.setNodeActive(e, !1));
    });
  }
  playCollectFly(e, t) {
    var i;
    const s = this.addCollectedItem(e),
      o = (null == s ? void 0 : s.getChildByName(L)) ?? null;
    if (null == e || !e.isValid || null == o || !o.isValid) return;
    const n = __rea_outer_r(e);
    n.active = !0, n.setParent(this.node), n.setWorldPosition(t), this.flyNodes.push(n);
    const a = null == (i = n.parent) ? void 0 : i.getComponent(__rea_outer_l);
    if (!a) return void this.destroyFlyNode(n);
    const c = a.convertToNodeSpaceAR(o.worldPosition);
    __rea_outer_A(n), __rea_outer_h(n).to(.65, {
      position: c
    }, {
      easing: "sineInOut"
    }).call(() => {
      this.destroyFlyNode(n);
    }).start();
  }
  addCollectedItem(e) {
    var t;
    const i = this.contentNode,
      s = this.demoTemplateNode;
    if (null == i || !i.isValid || null == s || !s.isValid) return null;
    const o = __rea_outer_r(s);
    return o.active = !0, o.setParent(i), o.setSiblingIndex(0), this.applyShowpicSprite(o, e), null == (t = this.contentLayout) || t.updateLayout(), this.computeScrollBounds(), this.scrollCollectionToStart(), o;
  }
  applyShowpicSprite(e, t) {
    const i = e.getChildByName(L),
      s = (null == i ? void 0 : i.getComponent(__rea_outer_a)) ?? null,
      o = (null == t ? void 0 : t.getComponent(__rea_outer_a)) ?? null;
    s && null != o && o.spriteFrame && (s.spriteFrame = o.spriteFrame);
  }
  clearCollectedItems() {
    var e;
    const t = this.contentNode,
      i = this.demoTemplateNode;
    if (null == t || !t.isValid) return;
    [...t.children].forEach(e => {
      e !== i && (__rea_outer_A(e), e.removeFromParent(), e.destroy());
    }), this.setNodeActive(i, !1), null == (e = this.contentLayout) || e.updateLayout(), this.computeScrollBounds();
  }
  destroyFlyNode(e) {
    const t = this.flyNodes.indexOf(e);
    t >= 0 && this.flyNodes.splice(t, 1), e.isValid && (__rea_outer_A(e), e.destroy());
  }
  clearFlyNodes() {
    const e = [...this.flyNodes];
    this.flyNodes.length = 0, e.forEach(e => {
      e.isValid && (__rea_outer_A(e), e.destroy());
    });
  }
  showDecisionButtons() {
    var e, t;
    this.setNodeActive((null == (e = this.buttonPass) ? void 0 : e.node) ?? null, !0), this.setNodeActive((null == (t = this.buttonArrest) ? void 0 : t.node) ?? null, !0);
  }
  hideDecisionButtons() {
    var e, t;
    this.setNodeActive((null == (e = this.buttonPass) ? void 0 : e.node) ?? null, !1), this.setNodeActive((null == (t = this.buttonArrest) ? void 0 : t.node) ?? null, !1);
  }
  getCurrentTouchNode(e) {
    const t = this.getCurrentCharacter();
    return t ? this.touchNodes.get(t.clues[e].touchName) ?? null : null;
  }
  showTouchesForCharacter(e) {
    const t = this.getCharacterConfig(e),
      i = new Set(t.clues.map(e => e.touchName));
    this.touchNodes.forEach((e, t) => {
      this.setNodeActive(e, i.has(t));
    });
  }
  hideAllTouches() {
    this.touchNodes.forEach(e => {
      this.setNodeActive(e, !1);
    });
  }
  lockAndPlayVoice(e, t = () => {}) {
    this.isInteractionLocked = !0, this.setNodeActive(this.backBgNode, !0), this.playVoiceEffect(e, () => {
      this.isValid && (this.setNodeActive(this.backBgNode, !1), this.isInteractionLocked = this.isRoundTransitioning, t());
    });
  }
  playVoiceEffect(e, t) {
    this.voiceToken += 1;
    const i = this.voiceToken;
    this.showVoiceBubble(e);
    let s = !1;
    const o = () => {
        !s && this.isValid && i === this.voiceToken && (s = !0, this.unschedule(n), this.shouldHoldBubbleUntilVoiceEnds(e) && this.hideBubble(), t());
      },
      n = () => {
        o();
      };
    this.stopCurrentDialogueEffect(), this.currentDialogueKey = e, this.scheduleOnce(n, 12), __rea_outer_N.playEffect_1(e, o);
  }
  stopCurrentDialogueEffect() {
    this.shouldSkipStopLevelAudio() ? this.currentDialogueKey = "" : (__rea_outer_N.stopVoice(), this.currentDialogueKey && (__rea_outer_N.stopOneEffect(this.currentDialogueKey), this.currentDialogueKey = ""));
  }
  showVoiceBubble(e) {
    this.bubbleToken += 1;
    const t = __rea_outer_v.getInstance();
    if (this.tipLabel && (this.tipLabel.string = t.getKey(e), this.setNodeActive(this.tipLabel.node, !0)), this.setNodeActive(this.bubbleNode, !0), this.shouldHoldBubbleUntilVoiceEnds(e)) return;
    const i = this.bubbleToken;
    this.scheduleOnce(() => {
      this.isValid && i === this.bubbleToken && this.hideBubble();
    }, 2);
  }
  shouldHoldBubbleUntilVoiceEnds(e) {
    return e === I || e === _ || e === B;
  }
  hideBubble() {
    var e;
    this.bubbleToken += 1, this.setNodeActive(this.bubbleNode, !1), this.setNodeActive((null == (e = this.tipLabel) ? void 0 : e.node) ?? null, !1);
  }
  getPrincipalParts(e) {
    if ("win" === e) return [{
      node: this.principalNode,
      rest: this.principalRestPosition
    }, {
      node: this.principalArm2Node,
      rest: this.principalArm2RestPosition
    }, {
      node: this.principalExpressionNode,
      rest: this.principalExpressionRestPosition
    }];
    const t = [{
      node: this.principalNode,
      rest: this.principalRestPosition
    }, {
      node: this.principalArm1Node,
      rest: this.principalArm1RestPosition
    }];
    return "fail" === e && t.push({
      node: this.principalAngryNode,
      rest: this.principalAngryRestPosition
    }), t;
  }
  hidePrincipal() {
    this.setNodeActive(this.principalNode, !1), this.setNodeActive(this.principalArm1Node, !1), this.setNodeActive(this.principalArm2Node, !1), this.setNodeActive(this.principalAngryNode, !1), this.setNodeActive(this.principalExpressionNode, !1);
  }
  placePrincipalAtX(e, t) {
    this.hidePrincipal();
    const i = this.principalRestPosition;
    this.getPrincipalParts(t).forEach(t => {
      var s;
      if (null == (s = t.node) || !s.isValid) return;
      const o = t.rest.x - i.x;
      t.node.setPosition(e + o, t.rest.y, t.rest.z), this.setNodeActive(t.node, !0);
    });
  }
  movePrincipalToRest(e, t) {
    const i = this.getPrincipalParts(e);
    i.forEach((e, s) => {
      const o = s === i.length - 1;
      this.moveNodeToRest(e.node, e.rest, o ? t : void 0);
    }), 0 === i.length && t();
  }
  movePrincipalToX(e, t, i) {
    const s = this.getPrincipalParts(t),
      o = this.principalRestPosition;
    s.forEach((t, n) => {
      const l = t.rest.x - o.x,
        h = n === s.length - 1;
      this.moveNodeToX(t.node, e + l, w, h ? i : void 0);
    }), 0 === s.length && i();
  }
  placeNpcAtX(e, t) {
    const i = this.getNpcNode(e),
      s = this.npcRestPositions[e - 1];
    null != i && i.isValid && s && i.setPosition(t, s.y, s.z);
  }
  restoreNpcRest(e) {
    const t = this.getNpcNode(e),
      i = this.npcRestPositions[e - 1];
    null != t && t.isValid && i && t.setPosition(i.clone());
  }
  restoreArrestFaceRest(e) {
    const t = this.getArrestFaceNode(e),
      i = this.arrestFaceRestPositions[e - 1];
    null != t && t.isValid && i && t.setPosition(i.clone());
  }
  getArrestFaceOffsetX(e) {
    const t = this.npcRestPositions[e - 1],
      i = this.arrestFaceRestPositions[e - 1];
    return t && i ? i.x - t.x : 0;
  }
  moveNodeToRest(e, t, i) {
    null != e && e.isValid && t ? (__rea_outer_A(e), __rea_outer_h(e).to(w, {
      position: t.clone()
    }).call(() => {
      null == i || i();
    }).start()) : null == i || i();
  }
  moveNodeToX(e, t, i, o) {
    if (null == e || !e.isValid) return void (null == o || o());
    const n = e.position;
    __rea_outer_A(e), __rea_outer_h(e).to(i, {
      position: new __rea_outer_s(t, n.y, n.z)
    }).call(() => {
      null == o || o();
    }).start();
  }
  stopAllMoveTweens() {
    this.stopNodeTweens(this.principalNode), this.stopNodeTweens(this.principalArm1Node), this.stopNodeTweens(this.principalArm2Node), this.stopNodeTweens(this.principalAngryNode), this.stopNodeTweens(this.principalExpressionNode), this.stopNodeTweens(this.magnifyingGlass1), this.npcNodes.forEach(e => {
      this.stopNodeTweens(e);
    }), this.arrestFaceNodes.forEach(e => {
      this.stopNodeTweens(e);
    }), this.revealNodes.forEach(e => {
      this.stopNodeTweens(e);
    }), this.circleNodes.forEach(e => {
      this.stopNodeTweens(e);
    });
  }
  stopNodeTweens(e) {
    null != e && e.isValid && __rea_outer_A(e);
  }
  disableScrollViewComponent() {
    var e;
    null != (e = this.scrollView) && e.isValid && (this.scrollView.enabled = !1);
  }
  computeScrollBounds() {
    const e = this.contentNode,
      t = null == e ? void 0 : e.parent;
    if (null == e || !e.isValid || null == t || !t.isValid) return;
    const i = __rea_outer_T(e, t, {
      excludedNodes: this.resolveContentScrollExcludedNodes()
    });
    i && (this.contentScrollBounds = i, this.applyContentScroll(e.position.x, !1));
  }
  resolveContentScrollExcludedNodes() {
    var e;
    const t = new Set();
    return null != (e = this.demoTemplateNode) && e.isValid && t.add(this.demoTemplateNode), t;
  }
  applyContentScroll(e, t = !0) {
    const i = this.contentNode;
    null != i && i.isValid && __rea_outer_b(i, e, this.contentScrollBounds, t, .2);
  }
  snapBackContentScroll() {
    const e = this.contentNode;
    null != e && e.isValid && __rea_outer_R(e, this.contentScrollBounds, .3);
  }
  resetContentScrollSession() {
    this.isTouchStartedInList = !1, this.isContentScrolling = !1;
  }
  scrollCollectionToStart() {
    this.computeScrollBounds(), this.applyContentScroll(this.contentScrollBounds.maxX, !1);
  }
  isPointInsideNode(e, t) {
    if (null == e || !e.isValid || !e.activeInHierarchy) return !1;
    const i = e.getComponent(__rea_outer_l);
    return !!i && i.getBoundingBoxToWorld().contains(t);
  }
  getTouchWorldPoint(e) {
    const t = e.getUILocation();
    return new __rea_outer_i(t.x, t.y);
  }
  getTouchLocalPosition(e, t) {
    const i = e.getUILocation(),
      o = t.getComponent(__rea_outer_l);
    return o ? o.convertToNodeSpaceAR(new __rea_outer_s(i.x, i.y, 0)) : __rea_outer_s.ZERO;
  }
  getCurrentCharacterId() {
    return this.roundOrder[this.currentRoundIndex] ?? 0;
  }
  getCurrentCharacter() {
    const e = this.getCurrentCharacterId();
    return e <= 0 ? null : this.getCharacterConfig(e);
  }
  getCharacterConfig(e) {
    return M[e - 1];
  }
  getNpcNode(e) {
    return this.npcNodes[e - 1] ?? null;
  }
  getRevealNode(e) {
    return this.revealNodes[e - 1] ?? null;
  }
  getArrestFaceNode(e) {
    return this.arrestFaceNodes[e - 1] ?? null;
  }
  resolveReferences() {
    var e, t, i, s, o, l, h, r, a;
    this.gameNode = this.node.getChildByPath("UIPanel/gameNode");
    const p = this.gameNode;
    this.artRoot = (null == p ? void 0 : p.getChildByName("52")) ?? null;
    const g = this.artRoot;
    this.bgNode = (null == g ? void 0 : g.getChildByName("bg")) ?? null, this.bg1Node = (null == g ? void 0 : g.getChildByName("bg_1")) ?? null, this.principalNode = (null == g ? void 0 : g.getChildByName("principal")) ?? null, this.principalArm1Node = (null == g ? void 0 : g.getChildByName("principal_arm_1")) ?? null, this.principalArm2Node = (null == g ? void 0 : g.getChildByName("principal_arm_2")) ?? null, this.principalAngryNode = (null == g ? void 0 : g.getChildByName("principal_angry")) ?? null, this.principalExpressionNode = (null == g ? void 0 : g.getChildByName("principal_expression")) ?? null, this.magnifyingGlass1 = (null == g ? void 0 : g.getChildByName("magnifying_glass_1")) ?? null, this.magnifyingGlassNode = (null == (e = this.magnifyingGlass1) ? void 0 : e.getChildByName("magnifying_glassnode")) ?? null, this.setNodeActive(null == g ? void 0 : g.getChildByName("magnifying_glass"), !1), this.clicksRoot = (null == p ? void 0 : p.getChildByName("clicks")) ?? null, this.clickRoot = this.node.getChildByPath("UIPanel/click_root"), this.collectionBgNode = (null == (t = this.clickRoot) ? void 0 : t.getChildByName("bg")) ?? null, this.contentNode = (null == (i = this.clickRoot) ? void 0 : i.getChildByPath("bg/ScrollView/view/content")) ?? null, this.demoTemplateNode = (null == (s = this.contentNode) ? void 0 : s.getChildByName("demo")) ?? null, this.placeholderDemoNode = this.node.getChildByPath("UIPanel/demo"), this.contentLayout = (null == (o = this.contentNode) ? void 0 : o.getComponent(__rea_outer_c)) ?? null, this.scrollView = (null == (l = this.clickRoot) || null == (l = l.getChildByPath("bg/ScrollView")) ? void 0 : l.getComponent(__rea_outer_d)) ?? null, this.buttonPass = (null == (h = this.clickRoot) || null == (h = h.getChildByName("ButtonPass")) ? void 0 : h.getComponent(__rea_outer_n)) ?? null, this.buttonArrest = (null == (r = this.clickRoot) || null == (r = r.getChildByName("ButtonARREST")) ? void 0 : r.getComponent(__rea_outer_n)) ?? null, this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.bubbleNode = this.node.getChildByPath("UIPanel/bubble"), this.tipLabel = (null == (a = this.bubbleNode) || null == (a = a.getChildByPath("dialog_box/Label")) ? void 0 : a.getComponent(__rea_outer_u)) ?? null, this.captureRestPosition(this.principalNode, this.principalRestPosition), this.captureRestPosition(this.principalArm1Node, this.principalArm1RestPosition), this.captureRestPosition(this.principalArm2Node, this.principalArm2RestPosition), this.captureRestPosition(this.principalAngryNode, this.principalAngryRestPosition), this.captureRestPosition(this.principalExpressionNode, this.principalExpressionRestPosition), this.captureRestPosition(this.magnifyingGlass1, this.magnifierRestPosition), this.resolveCharacterNodes(g), this.resolveCircleNodes(g), this.resolveTouchNodes(), this.resolveCollectSources(g), this.resolveEmoteNodes(g), this.captureLensSelfMetrics(), this.parentRevealsToLens(), this.setNodeActive(this.demoTemplateNode, !1), this.setNodeActive(this.placeholderDemoNode, !1), this.disableScrollViewComponent();
  }
  resolveCharacterNodes(e) {
    this.npcNodes.length = 0, this.revealNodes.length = 0, this.arrestFaceNodes.length = 0, this.npcRestPositions.length = 0, this.revealRestPositions.length = 0, this.arrestFaceRestPositions.length = 0, this.revealSiblingIndexes.length = 0, M.forEach(t => {
      const i = (null == e ? void 0 : e.getChildByName(`npc${t.id}`)) ?? null,
        s = (null == e ? void 0 : e.getChildByName(`npc${t.id}_1`)) ?? null,
        o = (null == e ? void 0 : e.getChildByName(t.arrestFaceName)) ?? null;
      this.npcNodes.push(i), this.revealNodes.push(s), this.arrestFaceNodes.push(o), this.npcRestPositions.push(this.clonePosition(i)), this.revealRestPositions.push(this.clonePosition(s)), this.arrestFaceRestPositions.push(this.clonePosition(o)), this.revealSiblingIndexes.push(null != s && s.isValid ? s.getSiblingIndex() : -1);
    });
  }
  resolveCircleNodes(e) {
    this.circleNodes.length = 0;
    for (let t = 1; t <= 3; t += 1) this.circleNodes.push((null == e ? void 0 : e.getChildByName(`circle_${t}`)) ?? null);
  }
  resolveTouchNodes() {
    this.touchNodes.clear(), M.forEach(e => {
      e.clues.forEach(e => {
        var t;
        const i = (null == (t = this.clicksRoot) ? void 0 : t.getChildByName(e.touchName)) ?? null;
        null != i && i.isValid && this.touchNodes.set(e.touchName, i);
      });
    });
  }
  resolveCollectSources(e) {
    this.collectSourceNodes.clear(), M.forEach(t => {
      t.clues.forEach(t => {
        const i = (null == e ? void 0 : e.getChildByName(t.collectNodeName)) ?? null;
        null != i && i.isValid && (this.collectSourceNodes.set(t.collectNodeName, i), this.setNodeActive(i, !1));
      });
    });
  }
  resolveEmoteNodes(e) {
    this.emoteNodes.length = 0, null != e && e.isValid && e.children.forEach(e => {
      "angry" !== e.name && "doubt" !== e.name || (this.emoteNodes.push(e), this.setNodeActive(e, !1));
    });
  }
  captureLensSelfMetrics() {
    var e;
    const t = null == (e = this.magnifyingGlassNode) ? void 0 : e.getComponent(__rea_outer_l);
    t ? (this.lensSelfSize.set(t.contentSize.width, t.contentSize.height), this.lensSelfAnchor.set(t.anchorPoint.x, t.anchorPoint.y)) : this.lensSelfSize.set(0, 0);
  }
  captureRestPosition(e, t) {
    null != e && e.isValid && t.set(e.position);
  }
  clonePosition(e) {
    return null != e && e.isValid ? e.position.clone() : new __rea_outer_s();
  }
  setNodeActive(e, t) {
    null != e && e.isValid && (e.active = t);
  }
}) || S;
__rea_outer_t._RF.pop();
export { __recovered_export_0 as default };
