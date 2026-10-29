// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_51.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { Vec3 as __rea_outer_s } from "cc";
import { Vec2 as __rea_outer_i } from "cc";
import { Node as __rea_outer_o } from "cc";
import { Button as __rea_outer_n } from "cc";
import { tween as __rea_outer_l } from "cc";
import { instantiate as __rea_outer_h } from "cc";
import { UITransform as __rea_outer_c } from "cc";
import { Sprite as __rea_outer_d } from "cc";
import { Layout as __rea_outer_r } from "cc";
import { ScrollView as __rea_outer_a } from "cc";
import { Label as __rea_outer_u } from "cc";
import { _decorator as __rea_outer_N } from "cc";
import { default as __rea_outer_p } from "./LevelBase";
import { default as __rea_outer_C } from "./AudioManager";
import { I18nController as __rea_outer_v } from "./i18n-controller";
import { UIManager as __rea_outer_g } from "./ui-manager";
import { UILayer as __rea_outer_m } from "./ui-layer";
import { UIHint as __rea_outer_I } from "./uihint";
import { UIFail as __rea_outer_y } from "./uifail";
import { GameController as __rea_outer_f } from "./GameController";
import { stopAllTweens as __rea_outer_b } from "./CocosCompat";
import { computeContentHorizontalScrollBounds as __rea_outer_T } from "./content-horizontal-scroll";
import { applyContentHorizontalScroll as __rea_outer_S } from "./content-horizontal-scroll";
import { snapBackContentHorizontalScroll as __rea_outer_P } from "./content-horizontal-scroll";
let __recovered_export_0;
var A;
__rea_outer_t._RF.push({}, "94ea3j3z+lJ34KeB0OZBMVU", "Level_51", void 0);
const {
    ccclass: _
  } = __rea_outer_N,
  R = "51_1",
  V = "51_22",
  B = "51_23",
  k = .5,
  w = -800,
  E = 800,
  L = "showpic",
  K = "id_avatar",
  x = [{
    id: 1,
    hintKey: "level51_hint1",
    passVoiceKey: "51_24",
    rejectVoiceKey: "51_17",
    hasIdProblem: !0,
    correctIsPass: !1,
    clues: [{
      touchName: "touch1_1",
      collectNodeName: "boy_npc1_1",
      voiceKey: "51_3",
      isIdClue: !1
    }, {
      touchName: "touch1_2",
      collectNodeName: "boy_npc1_2",
      voiceKey: "51_2",
      isIdClue: !1
    }, {
      touchName: "touch1_3",
      collectNodeName: "boy_npc1_3",
      voiceKey: "51_4",
      isIdClue: !0
    }]
  }, {
    id: 2,
    hintKey: "level51_hint2",
    passVoiceKey: "51_18",
    rejectVoiceKey: "51_25",
    hasIdProblem: !1,
    correctIsPass: !0,
    clues: [{
      touchName: "touch2_1",
      collectNodeName: "boy_npc2_1",
      voiceKey: "51_6",
      isIdClue: !1
    }, {
      touchName: "touch2_2",
      collectNodeName: "boy_npc2_2",
      voiceKey: "51_5",
      isIdClue: !1
    }, {
      touchName: "touch2_3",
      collectNodeName: "boy_npc2_3",
      voiceKey: "51_7",
      isIdClue: !0
    }]
  }, {
    id: 3,
    hintKey: "level51_hint3",
    passVoiceKey: "51_26",
    rejectVoiceKey: "51_19",
    hasIdProblem: !0,
    correctIsPass: !1,
    clues: [{
      touchName: "touch3_1",
      collectNodeName: "boy_npc3_1",
      voiceKey: "51_9",
      isIdClue: !1
    }, {
      touchName: "touch3_2",
      collectNodeName: "boy_npc3_2",
      voiceKey: "51_8",
      isIdClue: !1
    }, {
      touchName: "touch3_3",
      collectNodeName: "boy_npc3_3",
      voiceKey: "51_10",
      isIdClue: !0
    }]
  }, {
    id: 4,
    hintKey: "level51_hint4",
    passVoiceKey: "51_20",
    rejectVoiceKey: "51_27",
    hasIdProblem: !1,
    correctIsPass: !0,
    clues: [{
      touchName: "touch4_1",
      collectNodeName: "boy_npc4_1",
      voiceKey: "51_12",
      isIdClue: !1
    }, {
      touchName: "touch4_2",
      collectNodeName: "boy_npc4_2",
      voiceKey: "51_11",
      isIdClue: !1
    }, {
      touchName: "touch4_3",
      collectNodeName: "boy_npc4_3",
      voiceKey: "51_13",
      isIdClue: !0
    }]
  }, {
    id: 5,
    hintKey: "level51_hint5",
    passVoiceKey: "51_28",
    rejectVoiceKey: "51_21",
    hasIdProblem: !0,
    correctIsPass: !1,
    clues: [{
      touchName: "touch5_1",
      collectNodeName: "boy_npc5_1",
      voiceKey: "51_14",
      isIdClue: !0
    }, {
      touchName: "touch5_2",
      collectNodeName: "boy_npc5_2",
      voiceKey: "51_15",
      isIdClue: !1
    }, {
      touchName: "touch5_3",
      collectNodeName: "boy_npc5_3",
      voiceKey: "51_16",
      isIdClue: !1
    }]
  }];
__recovered_export_0 = _("Level_51")(A = class extends __rea_outer_p {
  constructor(...e) {
    super(...e), this.phase = 0, this.winstate = !1, this.currentRoundIndex = 0, this.gameNode = null, this.bgNode = null, this.bg1Node = null, this.supervisorNode = null, this.supervisorFaceNode = null, this.idNode = null, this.clicksRoot = null, this.clickRoot = null, this.collectionBgNode = null, this.contentNode = null, this.demoTemplateNode = null, this.contentLayout = null, this.scrollView = null, this.buttonPass = null, this.buttonRefuse = null, this.backBgNode = null, this.bubbleNode = null, this.tipLabel = null, this.npcNodes = [], this.closeUpNodes = [], this.idCardNodes = [], this.idAvatarNodes = [], this.collectSourceNodes = new Map(), this.circleNodes = [], this.touchNodes = new Map(), this.emoteNodes = [], this.npcRestPositions = [], this.closeUpRestPositions = [], this.supervisorRestPosition = new __rea_outer_s(), this.supervisorFaceRestPosition = new __rea_outer_s(), this.idRestPosition = new __rea_outer_s(), this.roundOrder = [], this.completedTouches = new Set(), this.flyNodes = [], this.hasWrongJudgment = !1, this.isIdCardOpen = !1, this.raisedIdCardNode = null, this.raisedIdCardSiblingIndex = -1, this.isInteractionLocked = !1, this.isRoundTransitioning = !1, this.voiceToken = 0, this.bubbleToken = 0, this.currentDialogueKey = "", this.contentScrollBounds = {
      minX: 0,
      maxX: 0
    }, this.touchStartPoint = new __rea_outer_i(), this.scrollStartContentX = 0, this.isTouchStartedInList = !1, this.isContentScrolling = !1, this.onLevelTouchStart = e => {
      var t, s;
      if (1 !== this.phase) return;
      null != (t = this.contentNode) && t.isValid && __rea_outer_b(this.contentNode);
      const i = this.getTouchWorldPoint(e);
      this.touchStartPoint = i, this.scrollStartContentX = (null == (s = this.contentNode) ? void 0 : s.position.x) ?? 0, this.isTouchStartedInList = this.isPointInsideNode(this.collectionBgNode, i), this.isContentScrolling = !1;
    }, this.onLevelTouchMove = e => {
      if (1 !== this.phase || !this.isTouchStartedInList) return;
      const t = this.getTouchWorldPoint(e),
        s = t.x - this.touchStartPoint.x,
        i = t.y - this.touchStartPoint.y;
      if (!this.isContentScrolling) {
        const e = Math.abs(s),
          t = Math.abs(i);
        if (e <= 12 || e <= t) return;
        this.isContentScrolling = !0;
      }
      this.applyContentScroll(this.scrollStartContentX + s);
    }, this.onLevelTouchEnd = e => {
      const t = this.isContentScrolling;
      if (this.resetContentScrollSession(), t) return void this.snapBackContentScroll();
      if (1 !== this.phase || this.isRoundTransitioning) return;
      const s = this.getTouchWorldPoint(e);
      if (this.isIdCardOpen) return void this.handleIdOverlayTouch(s);
      if (this.isInteractionLocked) return;
      if (this.isPointInsideNode(this.collectionBgNode, s)) return;
      const i = this.findTouchedClueIndex(s);
      i < 0 || this.completedTouches.size >= 3 && i !== this.getCurrentIdClueIndex() || this.handleClueTouch(i);
    }, this.onLevelTouchCancel = () => {
      const e = this.isContentScrolling;
      this.resetContentScrollSession(), e && this.snapBackContentScroll();
    }, this.onButtonPassClick = () => {
      this.handleDecision(!0);
    }, this.onButtonRefuseClick = () => {
      this.handleDecision(!1);
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.allItemNum = 3, this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.enterPhase0();
  }
  onDestroy() {
    this.unscheduleAllCallbacks(), this.unregisterHandlers(), this.stopAllMoveTweens(), this.clearFlyNodes(), this.hideBubble(), this.stopCurrentDialogueEffect(), super.onDestroy();
  }
  handleTimeExpired() {
    return !!(this.phase >= 2 || this.winstate);
  }
  showHint() {
    if (1 !== this.phase) return;
    const e = this.getCurrentCharacter();
    if (!e) return;
    const t = __rea_outer_v.getInstance().getKey(e.hintKey);
    __rea_outer_g.getInstance().showView(__rea_outer_I, void 0, {
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
    this.hasInstallNum = 3, this.currentRoundIndex = 4, this.phase = 2, this.winstate = !0, this.isInteractionLocked = !0, this.isRoundTransitioning = !0, this.unregisterHandlers();
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.currentRoundIndex = 0, this.roundOrder = this.shuffleCharacterIds(), this.completedTouches.clear(), this.hasWrongJudgment = !1, this.isIdCardOpen = !1, this.isInteractionLocked = !1, this.isRoundTransitioning = !1, this.hasInstallNum = 0, this.allItemNum = 3, this.voiceToken = 0, this.bubbleToken = 0, this.currentDialogueKey = "", this.clearFlyNodes(), this.clearCollectedItems(), this.hideCircles(), this.closeIdCard(!0);
  }
  shuffleCharacterIds() {
    const e = [];
    for (let t = 1; t <= 5; t += 1) e.push(t);
    for (let t = e.length - 1; t > 0; t -= 1) {
      const s = Math.floor(Math.random() * (t + 1)),
        i = e[t];
      e[t] = e[s], e[s] = i;
    }
    return e;
  }
  enterPhase0() {
    this.phase = 0, this.isInteractionLocked = !0, __rea_outer_C.playMusic("bgm2", !0, .5), this.applyPhase0Visibility(), this.setNodeActive(this.backBgNode, !0), this.placeSupervisorAtX(w, !1), this.setNodeActive(this.supervisorNode, !0), this.moveSupervisorToRest(() => {
      this.isValid && this.playVoiceEffect(R, () => {
        this.isValid && this.moveNodeToX(this.supervisorNode, E, k, () => {
          this.isValid && (this.setNodeActive(this.supervisorNode, !1), this.enterPhase1());
        });
      });
    });
  }
  enterPhase1() {
    this.phase = 1, this.currentRoundIndex = 0, this.registerHandlers(), this.startRound(0);
  }
  startRound(e) {
    this.currentRoundIndex = e, this.completedTouches.clear(), this.hasInstallNum = 0, this.allItemNum = 3, this.isRoundTransitioning = !1, this.isInteractionLocked = !0, this.closeIdCard(!0), this.hideCircles(), this.clearCollectedItems(), this.hideDecisionButtons(), this.setNodeActive(this.clickRoot, !1), this.setNodeActive(this.collectionBgNode, !1), this.hideAllCharacters(), this.hideAllIdCards(), this.hideAllTouches(), this.setNodeActive(this.idNode, !1), this.setNodeActive(this.backBgNode, !0), __rea_outer_f.getInstance().refreshGameProgress();
    const t = this.getCurrentCharacter(),
      s = this.getNpcNode(this.getCurrentCharacterId());
    if (!t || null == s || !s.isValid) return void (this.isInteractionLocked = !1);
    this.placeNpcAtX(this.getCurrentCharacterId(), -800), this.setNodeActive(s, !0), this.moveNodeToRest(s, this.npcRestPositions[this.getCurrentCharacterId() - 1], () => {
      this.isValid && this.slideIdIntoWindow(() => {
        this.isValid && this.enterRoundInteraction();
      });
    });
  }
  enterRoundInteraction() {
    this.setNodeActive(this.clickRoot, !0), this.setNodeActive(this.collectionBgNode, !0), this.hideDecisionButtons(), this.computeScrollBounds(), this.showTouchesForCharacter(this.getCurrentCharacterId()), this.setNodeActive(this.backBgNode, !1), this.isInteractionLocked = !1;
  }
  applyPhase0Visibility() {
    this.setNodeActive(this.bgNode, !0), this.setNodeActive(this.bg1Node, !0), this.setNodeActive(this.supervisorNode, !1), this.setNodeActive(this.supervisorFaceNode, !1), this.hideAllCharacters(), this.hideAllIdCards(), this.hideAllTouches(), this.hideEmotes(), this.hideCircles(), this.setNodeActive(this.idNode, !1), this.setNodeActive(this.clickRoot, !1), this.hideDecisionButtons(), this.setNodeActive(this.collectionBgNode, !1), this.setNodeActive(this.backBgNode, !1), this.hideBubble(), this.hideCollectSources();
  }
  hideAllCharacters() {
    this.npcNodes.forEach((e, t) => {
      this.setNodeActive(e, !1), this.restoreNpcRest(t + 1);
    }), this.closeUpNodes.forEach((e, t) => {
      this.setNodeActive(e, !1), this.restoreCloseUpRest(t + 1);
    });
  }
  hideAllIdCards() {
    this.idCardNodes.forEach(e => {
      this.setNodeActive(e, !1);
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
    this.node.on(__rea_outer_o.EventType.TOUCH_START, this.onLevelTouchStart, this), this.node.on(__rea_outer_o.EventType.TOUCH_MOVE, this.onLevelTouchMove, this), this.node.on(__rea_outer_o.EventType.TOUCH_END, this.onLevelTouchEnd, this), this.node.on(__rea_outer_o.EventType.TOUCH_CANCEL, this.onLevelTouchCancel, this), null != (e = this.buttonPass) && null != (e = e.node) && e.isValid && this.buttonPass.node.on(__rea_outer_n.EventType.CLICK, this.onButtonPassClick, this), null != (t = this.buttonRefuse) && null != (t = t.node) && t.isValid && this.buttonRefuse.node.on(__rea_outer_n.EventType.CLICK, this.onButtonRefuseClick, this), this.disableScrollViewComponent();
  }
  unregisterHandlers() {
    var e, t, s;
    null != (e = this.node) && e.isValid && (this.node.off(__rea_outer_o.EventType.TOUCH_START, this.onLevelTouchStart, this), this.node.off(__rea_outer_o.EventType.TOUCH_MOVE, this.onLevelTouchMove, this), this.node.off(__rea_outer_o.EventType.TOUCH_END, this.onLevelTouchEnd, this), this.node.off(__rea_outer_o.EventType.TOUCH_CANCEL, this.onLevelTouchCancel, this)), null != (t = this.buttonPass) && null != (t = t.node) && t.isValid && this.buttonPass.node.off(__rea_outer_n.EventType.CLICK, this.onButtonPassClick, this), null != (s = this.buttonRefuse) && null != (s = s.node) && s.isValid && this.buttonRefuse.node.off(__rea_outer_n.EventType.CLICK, this.onButtonRefuseClick, this);
  }
  handleIdOverlayTouch(e) {
    if (this.isInteractionLocked) return;
    if (this.isPointInsideNode(this.collectionBgNode, e)) return;
    const t = this.getCurrentIdCardNode();
    this.isPointInsideNode(t, e) ? this.handleIdCardClick(e) : this.closeIdCard(!1);
  }
  handleClueTouch(e) {
    const t = this.getCurrentCharacter();
    if (!t) return;
    if (t.clues[e].isIdClue) return void this.openIdCard();
    if (this.completedTouches.has(e)) return;
    const s = this.getCurrentTouchNode(e);
    null != s && s.isValid && this.completeClue(e, !0, s.worldPosition.clone());
  }
  openIdCard() {
    const e = this.getCurrentCharacter(),
      t = this.getCurrentIdCardNode();
    e && null != t && t.isValid && (this.isIdCardOpen = !0, this.hideAllTouches(), this.setNodeActive(t, !0), this.raiseIdCard(t));
  }
  handleIdCardClick(e) {
    const t = this.getCurrentCharacter(),
      i = this.getCurrentIdClueIndex();
    !t || i < 0 || this.completedTouches.has(i) || (t.hasIdProblem || this.isPointInsideNode(this.getCurrentIdAvatarNode(), e)) && this.completeClue(i, !1, new __rea_outer_s(e.x, e.y, 0));
  }
  closeIdCard(e) {
    const t = this.raisedIdCardNode ?? this.getCurrentIdCardNode();
    null != t && t.isValid && this.raisedIdCardSiblingIndex >= 0 && t.setSiblingIndex(this.raisedIdCardSiblingIndex), this.raisedIdCardNode = null, this.raisedIdCardSiblingIndex = -1, this.isIdCardOpen = !1, e ? this.hideAllIdCards() : (this.setNodeActive(t, !1), 1 !== this.phase || this.isRoundTransitioning || (this.restoreIncompleteTouches(), this.showIdClueCircleOnSmallBadge()));
  }
  showIdClueCircleOnSmallBadge() {
    var e;
    const t = this.getCurrentCharacter(),
      s = this.getCurrentIdClueIndex();
    null != t && t.hasIdProblem && !(s < 0) && this.completedTouches.has(s) && null != (e = this.idNode) && e.isValid && this.showCircleAtWorld(s, this.idNode.worldPosition.clone());
  }
  raiseIdCard(e) {
    const t = e.parent;
    null != t && t.isValid && (this.raisedIdCardNode = e, this.raisedIdCardSiblingIndex = e.getSiblingIndex(), e.setSiblingIndex(t.children.length - 1));
  }
  completeClue(e, t, s) {
    if (this.completedTouches.has(e)) return;
    const i = this.getCurrentCharacter();
    if (!i) return;
    this.completedTouches.add(e), t && this.showCircleAtWorld(e, s), __rea_outer_C.playEffect_1("level51_1"), this.hasInstallNum = this.completedTouches.size, __rea_outer_f.getInstance().refreshGameProgress();
    const o = this.collectSourceNodes.get(i.clues[e].collectNodeName) ?? null;
    if (this.playCollectFly(o, s), this.completedTouches.size >= 3) {
      if (this.TryQuickWin()) return;
      this.showDecisionButtons();
    }
    this.lockAndPlayVoice(i.clues[e].voiceKey);
  }
  handleDecision(e) {
    if (this.isRoundTransitioning || this.completedTouches.size < 3) return;
    const t = this.getCurrentCharacter();
    t && (this.isRoundTransitioning = !0, this.isInteractionLocked = !0, __rea_outer_C.playEffect_1(e ? "level51_2" : "level51_3"), this.closeIdCard(!0), this.clearRoundUi(), this.hideAllTouches(), this.setNodeActive(this.idNode, !1), e !== t.correctIsPass && (this.hasWrongJudgment = !0), e ? this.playPassSequence(t) : this.playRefuseSequence(t));
  }
  playPassSequence(e) {
    this.setNodeActive(this.getCloseUpNode(e.id), !1), this.setNodeActive(this.backBgNode, !0), this.playVoiceEffect(e.passVoiceKey, () => {
      this.isValid && this.moveNodeToX(this.getNpcNode(e.id), E, k, () => {
        this.isValid && (this.setNodeActive(this.getNpcNode(e.id), !1), this.advanceAfterRound());
      });
    });
  }
  playRefuseSequence(e) {
    const t = this.getNpcNode(e.id),
      s = this.getCloseUpNode(e.id);
    this.restoreCloseUpRest(e.id), this.setNodeActive(s, !0), this.setNodeActive(this.backBgNode, !0), this.playVoiceEffect(e.rejectVoiceKey, () => {
      if (!this.isValid) return;
      const i = w + this.getCloseUpOffsetX(e.id);
      this.moveNodeToX(s, i, k), this.moveNodeToX(t, w, k, () => {
        this.isValid && (this.setNodeActive(t, !1), this.setNodeActive(s, !1), this.advanceAfterRound());
      });
    });
  }
  advanceAfterRound() {
    this.scheduleOnce(() => {
      this.isValid && (this.currentRoundIndex + 1 < 5 ? this.startRound(this.currentRoundIndex + 1) : this.playSupervisorEnding());
    }, 1);
  }
  playSupervisorEnding() {
    this.phase = 1, this.isInteractionLocked = !0, __rea_outer_f.getInstance().pauseTimer(), this.setNodeActive(this.backBgNode, !0), this.hideAllCharacters(), this.hideAllIdCards(), this.setNodeActive(this.idNode, !1), this.hasWrongJudgment ? this.playFailSupervisor() : this.playWinSupervisor();
  }
  playWinSupervisor() {
    this.placeSupervisorAtX(E, !1), this.setNodeActive(this.supervisorNode, !0), this.setNodeActive(this.supervisorFaceNode, !1), this.moveSupervisorToRest(() => {
      this.isValid && this.playVoiceEffect(V, () => {
        this.isValid && (this.winstate = !0, this.beginResultPhase(), this.showLevelSuccess(1));
      });
    });
  }
  playFailSupervisor() {
    this.placeSupervisorAtX(E, !0), this.setNodeActive(this.supervisorNode, !0), this.setNodeActive(this.supervisorFaceNode, !0), this.moveSupervisorToRest(() => {
      this.isValid && this.playVoiceEffect(B, () => {
        this.isValid && (this.winstate = !1, this.beginFailSequence(1));
      });
    });
  }
  beginResultPhase() {
    this.phase >= 2 || (this.phase = 2, this.unregisterHandlers(), this.closeIdCard(!0), this.clearRoundUi(), __rea_outer_f.getInstance().pauseTimer());
  }
  beginFailSequence(e = 0) {
    this.beginResultPhase(), this.scheduleOnce(() => {
      this.isValid && __rea_outer_g.getInstance().showView(__rea_outer_y, __rea_outer_m.WIN_ANIMATION);
    }, e);
  }
  clearRoundUi() {
    this.hideDecisionButtons(), this.setNodeActive(this.clickRoot, !1), this.setNodeActive(this.collectionBgNode, !1), this.clearCollectedItems(), this.hideCircles(), this.clearFlyNodes();
  }
  showCircleAtWorld(e, t) {
    const i = this.circleNodes[e];
    null != i && i.isValid && (i.setWorldPosition(t), this.setNodeActive(i, !0), i.setScale(0, 0, 1), __rea_outer_b(i), __rea_outer_l(i).to(.25, {
      scale: new __rea_outer_s(1, 1, 1)
    }, {
      easing: "backOut"
    }).start());
  }
  hideCircles() {
    this.circleNodes.forEach(e => {
      null != e && e.isValid && (__rea_outer_b(e), e.setScale(1, 1, 1), this.setNodeActive(e, !1));
    });
  }
  playCollectFly(e, t) {
    var s;
    const i = this.addCollectedItem(e),
      o = (null == i ? void 0 : i.getChildByName(L)) ?? null;
    if (null == e || !e.isValid || null == o || !o.isValid) return;
    const n = __rea_outer_h(e);
    n.active = !0, n.setParent(this.node), n.setWorldPosition(t), this.flyNodes.push(n);
    const d = null == (s = n.parent) ? void 0 : s.getComponent(__rea_outer_c);
    if (!d) return void this.destroyFlyNode(n);
    const r = d.convertToNodeSpaceAR(o.worldPosition);
    __rea_outer_b(n), __rea_outer_l(n).to(.65, {
      position: r
    }, {
      easing: "sineInOut"
    }).call(() => {
      this.destroyFlyNode(n);
    }).start();
  }
  addCollectedItem(e) {
    var t;
    const s = this.contentNode,
      i = this.demoTemplateNode;
    if (null == s || !s.isValid || null == i || !i.isValid) return null;
    const o = __rea_outer_h(i);
    return o.active = !0, o.setParent(s), o.setSiblingIndex(0), this.applyShowpicSprite(o, e), null == (t = this.contentLayout) || t.updateLayout(), this.computeScrollBounds(), this.scrollCollectionToStart(), o;
  }
  applyShowpicSprite(e, t) {
    const s = e.getChildByName(L),
      i = (null == s ? void 0 : s.getComponent(__rea_outer_d)) ?? null,
      o = (null == t ? void 0 : t.getComponent(__rea_outer_d)) ?? null;
    i && null != o && o.spriteFrame && (i.spriteFrame = o.spriteFrame);
  }
  clearCollectedItems() {
    var e;
    const t = this.contentNode,
      s = this.demoTemplateNode;
    if (null == t || !t.isValid) return;
    [...t.children].forEach(e => {
      e !== s && (__rea_outer_b(e), e.removeFromParent(), e.destroy());
    }), this.setNodeActive(s, !1), null == (e = this.contentLayout) || e.updateLayout(), this.computeScrollBounds();
  }
  destroyFlyNode(e) {
    const t = this.flyNodes.indexOf(e);
    t >= 0 && this.flyNodes.splice(t, 1), e.isValid && (__rea_outer_b(e), e.destroy());
  }
  clearFlyNodes() {
    const e = [...this.flyNodes];
    this.flyNodes.length = 0, e.forEach(e => {
      e.isValid && (__rea_outer_b(e), e.destroy());
    });
  }
  showDecisionButtons() {
    var e, t;
    this.setNodeActive((null == (e = this.buttonPass) ? void 0 : e.node) ?? null, !0), this.setNodeActive((null == (t = this.buttonRefuse) ? void 0 : t.node) ?? null, !0);
  }
  hideDecisionButtons() {
    var e, t;
    this.setNodeActive((null == (e = this.buttonPass) ? void 0 : e.node) ?? null, !1), this.setNodeActive((null == (t = this.buttonRefuse) ? void 0 : t.node) ?? null, !1);
  }
  findTouchedClueIndex(e) {
    const t = this.getCurrentCharacter();
    if (!t) return -1;
    for (let s = 0; s < t.clues.length; s += 1) {
      const t = this.getCurrentTouchNode(s);
      if (null != t && t.activeInHierarchy && this.isPointInsideNode(t, e)) return s;
    }
    return -1;
  }
  getCurrentTouchNode(e) {
    const t = this.getCurrentCharacter();
    return t ? this.touchNodes.get(t.clues[e].touchName) ?? null : null;
  }
  showTouchesForCharacter(e) {
    const t = this.getCharacterConfig(e),
      s = new Set(t.clues.map(e => e.touchName));
    this.touchNodes.forEach((e, t) => {
      this.setNodeActive(e, s.has(t));
    });
  }
  restoreIncompleteTouches() {
    const e = this.getCurrentCharacter();
    e && e.clues.forEach((e, t) => {
      const s = this.touchNodes.get(e.touchName) ?? null,
        i = e.isIdClue || !this.completedTouches.has(t);
      this.setNodeActive(s, i);
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
    const s = this.voiceToken;
    this.showVoiceBubble(e);
    let i = !1;
    const o = () => {
        !i && this.isValid && s === this.voiceToken && (i = !0, this.unschedule(n), t());
      },
      n = () => {
        o();
      };
    this.stopCurrentDialogueEffect(), this.currentDialogueKey = e, this.scheduleOnce(n, 12), __rea_outer_C.playEffect_1(e, o);
  }
  stopCurrentDialogueEffect() {
    this.shouldSkipStopLevelAudio() ? this.currentDialogueKey = "" : (__rea_outer_C.stopVoice(), this.currentDialogueKey && (__rea_outer_C.stopOneEffect(this.currentDialogueKey), this.currentDialogueKey = ""));
  }
  showVoiceBubble(e) {
    this.bubbleToken += 1;
    const t = this.bubbleToken,
      s = __rea_outer_v.getInstance();
    this.tipLabel && (this.tipLabel.string = s.getKey(e), this.setNodeActive(this.tipLabel.node, !0)), this.setNodeActive(this.bubbleNode, !0), this.scheduleOnce(() => {
      this.isValid && t === this.bubbleToken && this.hideBubble();
    }, this.getBubbleHoldSeconds(e));
  }
  getBubbleHoldSeconds(e) {
    return e === R ? 4.5 : e === V || e === B ? 4 : 2;
  }
  hideBubble() {
    var e;
    this.bubbleToken += 1, this.setNodeActive(this.bubbleNode, !1), this.setNodeActive((null == (e = this.tipLabel) ? void 0 : e.node) ?? null, !1);
  }
  slideIdIntoWindow(e) {
    const t = this.idNode;
    if (null == t || !t.isValid) return void e();
    const s = this.idRestPosition;
    t.setPosition(s.x, s.y - 100, s.z), this.setNodeActive(t, !0), __rea_outer_b(t), __rea_outer_l(t).to(.3, {
      position: s.clone()
    }, {
      easing: "sineOut"
    }).call(() => {
      e();
    }).start();
  }
  placeNpcAtX(e, t) {
    const s = this.getNpcNode(e),
      i = this.npcRestPositions[e - 1];
    null != s && s.isValid && i && s.setPosition(t, i.y, i.z);
  }
  restoreNpcRest(e) {
    const t = this.getNpcNode(e),
      s = this.npcRestPositions[e - 1];
    null != t && t.isValid && s && t.setPosition(s.clone());
  }
  restoreCloseUpRest(e) {
    const t = this.getCloseUpNode(e),
      s = this.closeUpRestPositions[e - 1];
    null != t && t.isValid && s && t.setPosition(s.clone());
  }
  getCloseUpOffsetX(e) {
    const t = this.npcRestPositions[e - 1],
      s = this.closeUpRestPositions[e - 1];
    return t && s ? s.x - t.x : 0;
  }
  placeSupervisorAtX(e, t) {
    const s = this.supervisorNode,
      i = this.supervisorFaceNode,
      o = this.supervisorRestPosition,
      n = this.supervisorFaceRestPosition;
    if (null != s && s.isValid && s.setPosition(e, o.y, o.z), null != i && i.isValid) {
      const s = n.x - o.x;
      i.setPosition(e + s, n.y, n.z), this.setNodeActive(i, t);
    }
  }
  moveSupervisorToRest(e) {
    this.moveNodeToRest(this.supervisorFaceNode, this.supervisorFaceRestPosition), this.moveNodeToRest(this.supervisorNode, this.supervisorRestPosition, e);
  }
  moveNodeToRest(e, t, s) {
    null != e && e.isValid && t ? (__rea_outer_b(e), __rea_outer_l(e).to(k, {
      position: t.clone()
    }).call(() => {
      null == s || s();
    }).start()) : null == s || s();
  }
  moveNodeToX(e, t, i, o) {
    if (null == e || !e.isValid) return void (null == o || o());
    const n = e.position;
    __rea_outer_b(e), __rea_outer_l(e).to(i, {
      position: new __rea_outer_s(t, n.y, n.z)
    }).call(() => {
      null == o || o();
    }).start();
  }
  stopAllMoveTweens() {
    this.stopNodeTweens(this.supervisorNode), this.stopNodeTweens(this.supervisorFaceNode), this.stopNodeTweens(this.idNode), this.npcNodes.forEach(e => {
      this.stopNodeTweens(e);
    }), this.closeUpNodes.forEach(e => {
      this.stopNodeTweens(e);
    }), this.circleNodes.forEach(e => {
      this.stopNodeTweens(e);
    });
  }
  stopNodeTweens(e) {
    null != e && e.isValid && __rea_outer_b(e);
  }
  disableScrollViewComponent() {
    var e;
    null != (e = this.scrollView) && e.isValid && (this.scrollView.enabled = !1);
  }
  computeScrollBounds() {
    const e = this.contentNode,
      t = null == e ? void 0 : e.parent;
    if (null == e || !e.isValid || null == t || !t.isValid) return;
    const s = __rea_outer_T(e, t, {
      excludedNodes: this.resolveContentScrollExcludedNodes()
    });
    s && (this.contentScrollBounds = s, this.applyContentScroll(e.position.x, !1));
  }
  resolveContentScrollExcludedNodes() {
    var e;
    const t = new Set();
    return null != (e = this.demoTemplateNode) && e.isValid && t.add(this.demoTemplateNode), t;
  }
  applyContentScroll(e, t = !0) {
    const s = this.contentNode;
    null != s && s.isValid && __rea_outer_S(s, e, this.contentScrollBounds, t, .2);
  }
  snapBackContentScroll() {
    const e = this.contentNode;
    null != e && e.isValid && __rea_outer_P(e, this.contentScrollBounds, .3);
  }
  resetContentScrollSession() {
    this.isTouchStartedInList = !1, this.isContentScrolling = !1;
  }
  scrollCollectionToStart() {
    this.computeScrollBounds(), this.applyContentScroll(this.contentScrollBounds.maxX, !1);
  }
  isPointInsideNode(e, t) {
    if (null == e || !e.isValid || !e.activeInHierarchy) return !1;
    const s = e.getComponent(__rea_outer_c);
    return !!s && s.getBoundingBoxToWorld().contains(t);
  }
  getTouchWorldPoint(e) {
    const t = e.getUILocation();
    return new __rea_outer_i(t.x, t.y);
  }
  getCurrentCharacterId() {
    return this.roundOrder[this.currentRoundIndex] ?? 0;
  }
  getCurrentCharacter() {
    const e = this.getCurrentCharacterId();
    return e <= 0 ? null : this.getCharacterConfig(e);
  }
  getCurrentIdClueIndex() {
    const e = this.getCurrentCharacter();
    return e ? e.clues.findIndex(e => e.isIdClue) : -1;
  }
  getCharacterConfig(e) {
    return x[e - 1];
  }
  getNpcNode(e) {
    return this.npcNodes[e - 1] ?? null;
  }
  getCloseUpNode(e) {
    return this.closeUpNodes[e - 1] ?? null;
  }
  getCurrentIdCardNode() {
    const e = this.getCurrentCharacterId();
    return this.idCardNodes[e - 1] ?? null;
  }
  getCurrentIdAvatarNode() {
    const e = this.getCurrentCharacterId();
    return this.idAvatarNodes[e - 1] ?? null;
  }
  resolveReferences() {
    var e, t, s, i, o, l, h, c;
    this.gameNode = this.node.getChildByPath("UIPanel/gameNode");
    const d = this.gameNode;
    this.bgNode = (null == d ? void 0 : d.getChildByName("bg")) ?? null, this.bg1Node = (null == d ? void 0 : d.getChildByName("bg_1")) ?? null, this.supervisorNode = (null == d ? void 0 : d.getChildByName("supervisor")) ?? null, this.supervisorFaceNode = (null == d ? void 0 : d.getChildByName("supervisor_1")) ?? null, this.idNode = (null == d ? void 0 : d.getChildByName("id")) ?? null, this.clicksRoot = (null == d ? void 0 : d.getChildByName("clicks")) ?? null, this.clickRoot = this.node.getChildByPath("UIPanel/click_root"), this.collectionBgNode = (null == (e = this.clickRoot) ? void 0 : e.getChildByName("bg")) ?? null, this.contentNode = (null == (t = this.clickRoot) ? void 0 : t.getChildByPath("bg/ScrollView/view/content")) ?? null, this.demoTemplateNode = (null == (s = this.contentNode) ? void 0 : s.getChildByName("demo")) ?? null, this.contentLayout = (null == (i = this.contentNode) ? void 0 : i.getComponent(__rea_outer_r)) ?? null, this.scrollView = (null == (o = this.clickRoot) || null == (o = o.getChildByPath("bg/ScrollView")) ? void 0 : o.getComponent(__rea_outer_a)) ?? null, this.buttonPass = (null == (l = this.clickRoot) || null == (l = l.getChildByName("ButtonPass")) ? void 0 : l.getComponent(__rea_outer_n)) ?? null, this.buttonRefuse = (null == (h = this.clickRoot) || null == (h = h.getChildByName("ButtonPassRefuse")) ? void 0 : h.getComponent(__rea_outer_n)) ?? null, this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.bubbleNode = this.node.getChildByPath("UIPanel/bubble"), this.tipLabel = (null == (c = this.bubbleNode) || null == (c = c.getChildByPath("dialog_box/Label")) ? void 0 : c.getComponent(__rea_outer_u)) ?? null, this.captureRestPosition(this.supervisorNode, this.supervisorRestPosition), this.captureRestPosition(this.supervisorFaceNode, this.supervisorFaceRestPosition), this.captureRestPosition(this.idNode, this.idRestPosition), this.resolveCharacterNodes(d), this.resolveCircleNodes(d), this.resolveTouchNodes(), this.resolveCollectSources(d), this.resolveEmoteNodes(d), this.setNodeActive(this.demoTemplateNode, !1), this.disableScrollViewComponent();
  }
  resolveCharacterNodes(e) {
    this.npcNodes.length = 0, this.closeUpNodes.length = 0, this.idCardNodes.length = 0, this.idAvatarNodes.length = 0, this.npcRestPositions.length = 0, this.closeUpRestPositions.length = 0;
    for (let t = 1; t <= 5; t += 1) {
      const s = (null == e ? void 0 : e.getChildByName(`npc_${t}`)) ?? null,
        i = (null == e ? void 0 : e.getChildByName(`npc_${t}_1`)) ?? null,
        o = (null == e ? void 0 : e.getChildByName(`npc_${t}_id`)) ?? null;
      this.npcNodes.push(s), this.closeUpNodes.push(i), this.idCardNodes.push(o), this.idAvatarNodes.push(this.resolveIdAvatarHitNode(t, o)), this.npcRestPositions.push(this.clonePosition(s)), this.closeUpRestPositions.push(this.clonePosition(i));
    }
  }
  resolveIdAvatarHitNode(e, t) {
    if (this.getCharacterConfig(e).hasIdProblem || null == t || !t.isValid) return null;
    const s = t.getChildByName(K);
    if (null != s && s.isValid) return s;
    const i = new __rea_outer_o(K);
    return i.addComponent(__rea_outer_c).setContentSize(220, 250), i.setPosition(-165, 8, 0), i.setParent(t), i;
  }
  resolveCircleNodes(e) {
    this.circleNodes.length = 0;
    for (let t = 1; t <= 3; t += 1) this.circleNodes.push((null == e ? void 0 : e.getChildByName(`circle_${t}`)) ?? null);
  }
  resolveTouchNodes() {
    this.touchNodes.clear(), x.forEach(e => {
      e.clues.forEach(e => {
        var t;
        const s = (null == (t = this.clicksRoot) ? void 0 : t.getChildByName(e.touchName)) ?? null;
        null != s && s.isValid && this.touchNodes.set(e.touchName, s);
      });
    });
  }
  resolveCollectSources(e) {
    this.collectSourceNodes.clear(), x.forEach(t => {
      t.clues.forEach(t => {
        const s = (null == e ? void 0 : e.getChildByName(t.collectNodeName)) ?? null;
        null != s && s.isValid && (this.collectSourceNodes.set(t.collectNodeName, s), this.setNodeActive(s, !1));
      });
    });
  }
  resolveEmoteNodes(e) {
    this.emoteNodes.length = 0, null != e && e.isValid && e.children.forEach(e => {
      "angry" !== e.name && "doubt" !== e.name || (this.emoteNodes.push(e), this.setNodeActive(e, !1));
    });
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
}) || A;
__rea_outer_t._RF.pop();
export { __recovered_export_0 as default };
