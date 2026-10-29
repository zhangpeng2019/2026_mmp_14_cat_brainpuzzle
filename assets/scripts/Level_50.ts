// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_50.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_e } from "cc";
import { Vec3 as __rea_outer_i } from "cc";
import { Vec2 as __rea_outer_o } from "cc";
import { Tween as __rea_outer_s } from "cc";
import { tween as __rea_outer_n } from "cc";
import { Node as __rea_outer_l } from "cc";
import { Button as __rea_outer_h } from "cc";
import { instantiate as __rea_outer_c } from "cc";
import { UITransform as __rea_outer_d } from "cc";
import { Sprite as __rea_outer_a } from "cc";
import { Layout as __rea_outer_u } from "cc";
import { ScrollView as __rea_outer_r } from "cc";
import { Label as __rea_outer_N } from "cc";
import { _decorator as __rea_outer_p } from "cc";
import { default as __rea_outer_g } from "./LevelBase";
import { default as __rea_outer_y } from "./AudioManager";
import { I18nController as __rea_outer_v } from "./i18n-controller";
import { UIManager as __rea_outer_C } from "./ui-manager";
import { UILayer as __rea_outer_m } from "./ui-layer";
import { UIHint as __rea_outer_b } from "./uihint";
import { UIFail as __rea_outer_f } from "./uifail";
import { GameController as __rea_outer_T } from "./GameController";
import { stopAllTweens as __rea_outer_S } from "./CocosCompat";
import { computeContentHorizontalScrollBounds as __rea_outer__ } from "./content-horizontal-scroll";
import { applyContentHorizontalScroll as __rea_outer_V } from "./content-horizontal-scroll";
import { snapBackContentHorizontalScroll as __rea_outer_A } from "./content-horizontal-scroll";
let __recovered_export_0;
var B;
__rea_outer_e._RF.push({}, "5cef3frkkRF2rXe+aJwA3J9", "Level_50", void 0);
const {
    ccclass: I
  } = __rea_outer_p,
  k = "50_11",
  w = .05,
  P = "showpic",
  O = [{
    id: 1,
    visitorVoiceKey: "50_2",
    rejectVoiceKey: "50_3",
    hintKey: "level50_hint1",
    clues: [{
      touchName: "touch1_1",
      collectNodeName: "boy_npc1_1"
    }, {
      touchName: "touch1_2",
      collectNodeName: "boy_npc1_2"
    }, {
      touchName: "touch1_3",
      collectNodeName: "boy_npc1_3"
    }]
  }, {
    id: 2,
    visitorVoiceKey: "50_4",
    rejectVoiceKey: "50_5",
    hintKey: "level50_hint2",
    clues: [{
      touchName: "touch2_1",
      collectNodeName: "boy_npc2_1"
    }, {
      touchName: "touch2_2",
      collectNodeName: "boy_npc2_2"
    }, {
      touchName: "touch2_3",
      collectNodeName: "boy_npc2_3"
    }]
  }, {
    id: 3,
    visitorVoiceKey: "50_6",
    rejectVoiceKey: "50_7",
    hintKey: "level50_hint3",
    clues: [{
      touchName: "touch3_1",
      collectNodeName: "boy_npc3_1"
    }, {
      touchName: "touch3_2",
      collectNodeName: "boy_npc3_2"
    }, {
      touchName: "touch3_3",
      collectNodeName: "boy_npc3_3"
    }]
  }, {
    id: 4,
    visitorVoiceKey: "50_8",
    rejectVoiceKey: "50_9",
    hintKey: "level50_hint4",
    clues: [{
      touchName: "touch4_1",
      collectNodeName: "boy_npc4_1"
    }, {
      touchName: "touch4_2",
      collectNodeName: "boy_npc4_2"
    }, {
      touchName: "touch4_3",
      collectNodeName: "boy_npc4_3"
    }]
  }, {
    id: 5,
    visitorVoiceKey: "50_10",
    rejectVoiceKey: k,
    hintKey: "level50_hint5",
    clues: [{
      touchName: "touch5_1",
      collectNodeName: "boy_npc5_1"
    }, {
      touchName: "touch5_2",
      collectNodeName: "boy_npc5_2"
    }, {
      touchName: "touch5_3",
      collectNodeName: "boy_npc5_3"
    }]
  }];
__recovered_export_0 = I("Level_50")(B = class extends __rea_outer_g {
  constructor(...t) {
    super(...t), this.phase = 0, this.winstate = !1, this.currentRoundIndex = 0, this.gameNode = null, this.bgNode = null, this.bg1Node = null, this.soundNode = null, this.doorwayNode = null, this.angryNode = null, this.doubtNode = null, this.failnode = null, this.failureNode = null, this.boxNode = null, this.clicksRoot = null, this.clickRoot = null, this.collectionBgNode = null, this.contentNode = null, this.demoTemplateNode = null, this.contentLayout = null, this.scrollView = null, this.buttonOpen = null, this.buttonNotOpen = null, this.backBgNode = null, this.bubbleNode = null, this.tipLabel = null, this.npcNodes = [], this.closeUpNodes = [], this.circleNodes = [], this.touchNodes = new Map(), this.roundOrder = [], this.completedTouches = new Set(), this.flyNodes = [], this.isInteractionLocked = !1, this.isRoundTransitioning = !1, this.bgOriginPosition = new __rea_outer_i(), this.voiceToken = 0, this.knockToken = 0, this.currentDialogueKey = "", this.contentScrollBounds = {
      minX: 0,
      maxX: 0
    }, this.touchStartPoint = new __rea_outer_o(), this.scrollStartContentX = 0, this.isTouchStartedInList = !1, this.isContentScrolling = !1, this.onLevelTouchStart = t => {
      var e, i;
      if (1 !== this.phase) return;
      null != (e = this.contentNode) && e.isValid && __rea_outer_S(this.contentNode);
      const o = this.getTouchWorldPoint(t);
      this.touchStartPoint = o, this.scrollStartContentX = (null == (i = this.contentNode) ? void 0 : i.position.x) ?? 0, this.isTouchStartedInList = this.isPointInsideNode(this.collectionBgNode, o), this.isContentScrolling = !1;
    }, this.onLevelTouchMove = t => {
      if (1 !== this.phase || !this.isTouchStartedInList) return;
      const e = this.getTouchWorldPoint(t),
        i = e.x - this.touchStartPoint.x,
        o = e.y - this.touchStartPoint.y;
      if (!this.isContentScrolling) {
        const t = Math.abs(i),
          e = Math.abs(o);
        if (t <= 12 || t <= e) return;
        this.isContentScrolling = !0;
      }
      this.applyContentScroll(this.scrollStartContentX + i);
    }, this.onLevelTouchEnd = t => {
      const e = this.isContentScrolling;
      if (this.resetContentScrollSession(), e) return void this.snapBackContentScroll();
      if (1 !== this.phase || this.isInteractionLocked || this.isRoundTransitioning) return;
      if (this.completedTouches.size >= 3) return;
      const i = this.getTouchWorldPoint(t);
      if (this.isPointInsideNode(this.collectionBgNode, i)) return;
      const o = this.findTouchedClueIndex(i);
      o < 0 || this.handleClueTouch(o);
    }, this.onLevelTouchCancel = () => {
      const t = this.isContentScrolling;
      this.resetContentScrollSession(), t && this.snapBackContentScroll();
    }, this.onButtonOpenClick = () => {
      this.handleDecision(!0);
    }, this.onButtonNotOpenClick = () => {
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
    this.unscheduleAllCallbacks(), this.unregisterHandlers(), this.stopSoundPulse(), this.stopBgShake(), this.clearFlyNodes(), this.hideBubble(), this.stopCurrentDialogueEffect(), super.onDestroy();
  }
  handleTimeExpired() {
    return !!(this.phase >= 2 || this.winstate);
  }
  showHint() {
    if (1 !== this.phase) return;
    const t = this.getCurrentCharacter();
    if (!t) return;
    const e = __rea_outer_v.getInstance().getKey(t.hintKey);
    __rea_outer_C.getInstance().showView(__rea_outer_b, void 0, {
      body: e
    });
  }
  getGameProgressSnapshot() {
    const t = this.hasInstallNum;
    return {
      progress: t / 3,
      label: `${t}/3`
    };
  }
  markAllTasksCompleted() {
    this.hasInstallNum = 3, this.currentRoundIndex = 4, this.phase = 2, this.winstate = !0, this.isInteractionLocked = !0, this.isRoundTransitioning = !0, this.unregisterHandlers();
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.currentRoundIndex = 0, this.roundOrder = [...this.shuffleVisitorIds(), 5], this.completedTouches.clear(), this.isInteractionLocked = !1, this.isRoundTransitioning = !1, this.hasInstallNum = 0, this.allItemNum = 3, this.voiceToken = 0, this.knockToken = 0, this.currentDialogueKey = "", this.clearFlyNodes(), this.clearCollectedItems(), this.hideCircles();
  }
  shuffleVisitorIds() {
    const t = [];
    for (let e = 1; e <= 4; e += 1) t.push(e);
    for (let e = t.length - 1; e > 0; e -= 1) {
      const i = Math.floor(Math.random() * (e + 1)),
        o = t[e];
      t[e] = t[i], t[i] = o;
    }
    return t;
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_y.playMusic("bgm5", !0, .5), this.applyPhase0Visibility(), this.playKnockSequence(), this.scheduleOnce(() => {
      this.isValid && this.playVoiceEffect("50_1", () => {
        this.isValid && this.enterPhase1();
      });
    }, 1);
  }
  enterPhase1() {
    this.phase = 1, this.currentRoundIndex = 0, this.registerHandlers(), this.startRound(0);
  }
  startRound(t) {
    this.currentRoundIndex = t, this.completedTouches.clear(), this.hideCircles(), this.clearCollectedItems(), this.hasInstallNum = 0, this.allItemNum = 3, this.isRoundTransitioning = !1, this.isInteractionLocked = !0, this.hideDecisionButtons(), this.setNodeActive(this.collectionBgNode, !1), this.applyIndoorWaitingVisibility(), __rea_outer_T.getInstance().refreshGameProgress();
    const e = this.getCurrentCharacter();
    e ? (this.enterPeephole(), this.setNodeActive(this.backBgNode, !0), this.playVoiceEffect(e.visitorVoiceKey, () => {
      this.isValid && (this.setNodeActive(this.backBgNode, !1), this.isInteractionLocked = !1);
    })) : this.isInteractionLocked = !1;
  }
  applyIndoorWaitingVisibility() {
    this.setNodeActive(this.bgNode, !0), this.setNodeActive(this.doorwayNode, !1), this.setNodeActive(this.angryNode, !1), this.setNodeActive(this.doubtNode, !1), this.hideAllCharacters(), this.hideAllTouches();
  }
  enterPeephole() {
    this.applyRoundVisibility(), this.setNodeActive(this.collectionBgNode, !0), this.computeScrollBounds();
  }
  applyPhase0Visibility() {
    this.hideAllCharacters(), this.hideAllTouches(), this.hideCircles(), this.setNodeActive(this.doorwayNode, !1), this.setNodeActive(this.angryNode, !1), this.setNodeActive(this.doubtNode, !1), this.setNodeActive(this.soundNode, !1), this.setNodeActive(this.failnode, !1), this.setNodeActive(this.failureNode, !1), this.setNodeActive(this.boxNode, !1), this.setNodeActive(this.collectionBgNode, !1), this.hideDecisionButtons(), this.setNodeActive(this.backBgNode, !1), this.setNodeActive(this.bg1Node, !0), this.setNodeActive(this.bgNode, !0), this.hideBubble();
  }
  applyRoundVisibility() {
    const t = this.getCurrentCharacterId();
    this.setNodeActive(this.bgNode, !1), this.stopSoundPulse(), this.setNodeActive(this.doorwayNode, !0), this.setNodeActive(this.bg1Node, !0), this.setNodeActive(this.angryNode, !1), this.setNodeActive(this.doubtNode, !1), this.hideAllCharacters(), this.setNodeActive(this.getNpcNode(t), !0), this.setNodeActive(this.getCloseUpNode(t), !1), this.showTouchesForCharacter(t);
  }
  hideAllCharacters() {
    this.npcNodes.forEach(t => {
      this.setNodeActive(t, !1);
    }), this.closeUpNodes.forEach(t => {
      this.setNodeActive(t, !1);
    });
  }
  playKnockSequence(t) {
    this.setNodeActive(this.bgNode, !0), this.playSoundPulse(), this.playBgShake(), this.knockToken += 1;
    const e = this.knockToken;
    let i = !1;
    const o = () => {
        !i && this.isValid && e === this.knockToken && (i = !0, this.unschedule(s), this.stopSoundPulse(), null == t || t());
      },
      s = () => {
        o();
      };
    this.scheduleOnce(s, 8), __rea_outer_y.playEffect_1("level50_4", o);
  }
  playBgShake(t) {
    const e = this.bgNode;
    if (null == e || !e.isValid) return void (null == t || t());
    this.bgOriginPosition = e.position.clone(), __rea_outer_S(e), __rea_outer_s.stopAllByTag(500);
    const o = this.bgOriginPosition;
    __rea_outer_n(e).tag(500).to(w, {
      position: new __rea_outer_i(o.x + 8, o.y, o.z)
    }).to(w, {
      position: new __rea_outer_i(o.x - 8, o.y, o.z)
    }).to(w, {
      position: new __rea_outer_i(o.x + 4.8, o.y, o.z)
    }).to(w, {
      position: new __rea_outer_i(o.x, o.y, o.z)
    }).call(() => {
      null == t || t();
    }).start();
  }
  stopBgShake() {
    const t = this.bgNode;
    null != t && t.isValid && (__rea_outer_s.stopAllByTag(500), __rea_outer_S(t), t.setPosition(this.bgOriginPosition));
  }
  playSoundPulse() {
    const t = this.soundNode;
    null != t && t.isValid && (this.setNodeActive(t, !0), t.setScale(1, 1, 1), __rea_outer_S(t), __rea_outer_s.stopAllByTag(501), __rea_outer_n(t).tag(501).to(.12, {
      scale: new __rea_outer_i(1.2, 1.2, 1)
    }).to(.12, {
      scale: new __rea_outer_i(1, 1, 1)
    }).union().repeatForever().start());
  }
  stopSoundPulse() {
    const t = this.soundNode;
    null != t && t.isValid && (__rea_outer_s.stopAllByTag(501), __rea_outer_S(t), t.setScale(1, 1, 1), this.setNodeActive(t, !1));
  }
  registerHandlers() {
    var t, e;
    this.node.on(__rea_outer_l.EventType.TOUCH_START, this.onLevelTouchStart, this), this.node.on(__rea_outer_l.EventType.TOUCH_MOVE, this.onLevelTouchMove, this), this.node.on(__rea_outer_l.EventType.TOUCH_END, this.onLevelTouchEnd, this), this.node.on(__rea_outer_l.EventType.TOUCH_CANCEL, this.onLevelTouchCancel, this), null != (t = this.buttonOpen) && null != (t = t.node) && t.isValid && this.buttonOpen.node.on(__rea_outer_h.EventType.CLICK, this.onButtonOpenClick, this), null != (e = this.buttonNotOpen) && null != (e = e.node) && e.isValid && this.buttonNotOpen.node.on(__rea_outer_h.EventType.CLICK, this.onButtonNotOpenClick, this), this.disableScrollViewComponent();
  }
  unregisterHandlers() {
    var t, e, i;
    null != (t = this.node) && t.isValid && (this.node.off(__rea_outer_l.EventType.TOUCH_START, this.onLevelTouchStart, this), this.node.off(__rea_outer_l.EventType.TOUCH_MOVE, this.onLevelTouchMove, this), this.node.off(__rea_outer_l.EventType.TOUCH_END, this.onLevelTouchEnd, this), this.node.off(__rea_outer_l.EventType.TOUCH_CANCEL, this.onLevelTouchCancel, this)), null != (e = this.buttonOpen) && null != (e = e.node) && e.isValid && this.buttonOpen.node.off(__rea_outer_h.EventType.CLICK, this.onButtonOpenClick, this), null != (i = this.buttonNotOpen) && null != (i = i.node) && i.isValid && this.buttonNotOpen.node.off(__rea_outer_h.EventType.CLICK, this.onButtonNotOpenClick, this);
  }
  handleClueTouch(t) {
    var e;
    if (this.completedTouches.has(t)) return;
    const i = this.getCurrentCharacter(),
      o = this.getCurrentTouchNode(t);
    if (!i || null == o || !o.isValid) return;
    this.completedTouches.add(t), this.showCircleAtTouch(t, o), __rea_outer_y.playEffect_1("level50_1"), this.hasInstallNum = this.completedTouches.size, __rea_outer_T.getInstance().refreshGameProgress();
    const s = (null == (e = this.boxNode) ? void 0 : e.getChildByName(i.clues[t].collectNodeName)) ?? null;
    this.playCollectFly(s, o.worldPosition.clone()), this.completedTouches.size < 3 || this.TryQuickWin() || this.showDecisionButtons();
  }
  handleDecision(t) {
    if (this.isRoundTransitioning || this.completedTouches.size < 3) return;
    this.isRoundTransitioning = !0, this.isInteractionLocked = !0, this.clearRoundUi();
    const e = this.getCurrentCharacterId();
    if (5 === e) return t ? void this.playWinSequence() : void this.playFinalRejectFail();
    t ? this.playEarlyOpenFail(e) : this.playRejectSequence(e, () => {
      this.isValid && this.startRound(this.currentRoundIndex + 1);
    });
  }
  playRejectSequence(t, e) {
    this.setNodeActive(this.getNpcNode(t), !1);
    const i = this.getCloseUpNode(t);
    this.setNodeActive(i, !0), this.playEmoteAppear(this.angryNode);
    const o = this.getCharacterConfig(t);
    this.playVoiceEffect(o.rejectVoiceKey, () => {
      this.isValid && (this.setNodeActive(i, !1), this.hideEmote(this.angryNode), this.showIndoorAndHideDoorway(), this.playKnockSequence(() => {
        this.isValid && e();
      }));
    });
  }
  showIndoorAndHideDoorway() {
    this.setNodeActive(this.bgNode, !0), this.setNodeActive(this.doorwayNode, !1);
  }
  playEarlyOpenFail(t) {
    this.winstate = !1, this.beginResultPhase(), this.setNodeActive(this.doorwayNode, !1), this.setNodeActive(this.getNpcNode(t), !0), __rea_outer_y.playEffect_1("level50_2"), this.scheduleOnce(() => {
      this.isValid && (this.setNodeActive(this.failnode, !0), this.setNodeActive(this.failureNode, !1), this.scheduleOnce(() => {
        this.isValid && (this.setNodeActive(this.failureNode, !0), __rea_outer_y.playEffect_1("level50_3"), this.scheduleOnce(() => {
          this.isValid && this.beginFailSequence();
        }, 1));
      }, .1));
    }, 1);
  }
  playFinalRejectFail() {
    this.playEmoteAppear(this.doubtNode), this.raiseToTop(this.doubtNode), this.playVoiceEffect(k, () => {}), this.scheduleOnce(() => {
      this.isValid && (this.winstate = !1, this.beginFailSequence());
    }, 2);
  }
  playWinSequence() {
    this.setNodeActive(this.doorwayNode, !1), this.setNodeActive(this.getNpcNode(5), !0), __rea_outer_y.playEffect_1("level50_5"), this.scheduleOnce(() => {
      this.isValid && this.playVoiceEffect("50_12", () => {
        this.isValid && (this.winstate = !0, this.beginResultPhase(), this.showLevelSuccess(1.5));
      });
    }, 1);
  }
  beginResultPhase() {
    this.phase >= 2 || (this.phase = 2, this.unregisterHandlers(), this.clearRoundUi(), __rea_outer_T.getInstance().pauseTimer());
  }
  beginFailSequence() {
    this.beginResultPhase(), __rea_outer_C.getInstance().showView(__rea_outer_f, __rea_outer_m.WIN_ANIMATION);
  }
  clearRoundUi() {
    this.hideDecisionButtons(), this.setNodeActive(this.collectionBgNode, !1), this.clearCollectedItems(), this.hideCircles(), this.clearFlyNodes();
  }
  showCircleAtTouch(t, e) {
    const o = this.circleNodes[t];
    null != o && o.isValid && e.isValid && (o.setWorldPosition(e.worldPosition), this.setNodeActive(o, !0), o.setScale(0, 0, 1), __rea_outer_S(o), __rea_outer_n(o).to(.25, {
      scale: new __rea_outer_i(1, 1, 1)
    }, {
      easing: "backOut"
    }).start());
  }
  hideCircles() {
    this.circleNodes.forEach(t => {
      null != t && t.isValid && (__rea_outer_S(t), t.setScale(1, 1, 1), this.setNodeActive(t, !1));
    });
  }
  playEmoteAppear(t) {
    null != t && t.isValid && (this.setNodeActive(t, !0), t.setScale(0, 0, 1), __rea_outer_S(t), __rea_outer_n(t).to(.25, {
      scale: new __rea_outer_i(1, 1, 1)
    }, {
      easing: "backOut"
    }).start());
  }
  hideEmote(t) {
    null != t && t.isValid && (__rea_outer_S(t), t.setScale(1, 1, 1), this.setNodeActive(t, !1));
  }
  playCollectFly(t, e) {
    var i;
    const o = this.addCollectedItem(t),
      s = (null == o ? void 0 : o.getChildByName(P)) ?? null;
    if (null == t || !t.isValid || null == s || !s.isValid) return;
    const l = __rea_outer_c(t);
    l.active = !0, l.setParent(this.node), l.setWorldPosition(e), this.flyNodes.push(l);
    const h = null == (i = l.parent) ? void 0 : i.getComponent(__rea_outer_d);
    if (!h) return void this.destroyFlyNode(l);
    const a = h.convertToNodeSpaceAR(s.worldPosition);
    __rea_outer_S(l), __rea_outer_n(l).to(.65, {
      position: a
    }, {
      easing: "sineInOut"
    }).call(() => {
      this.destroyFlyNode(l);
    }).start();
  }
  addCollectedItem(t) {
    var e;
    const i = this.contentNode,
      o = this.demoTemplateNode;
    if (null == i || !i.isValid || null == o || !o.isValid) return null;
    const s = __rea_outer_c(o);
    return s.active = !0, s.setParent(i), s.setSiblingIndex(0), this.applyShowpicSprite(s, t), null == (e = this.contentLayout) || e.updateLayout(), this.computeScrollBounds(), this.scrollCollectionToStart(), s;
  }
  applyShowpicSprite(t, e) {
    const i = t.getChildByName(P),
      o = (null == i ? void 0 : i.getComponent(__rea_outer_a)) ?? null,
      s = (null == e ? void 0 : e.getComponent(__rea_outer_a)) ?? null;
    o && null != s && s.spriteFrame && (o.spriteFrame = s.spriteFrame);
  }
  clearCollectedItems() {
    var t;
    const e = this.contentNode,
      i = this.demoTemplateNode;
    if (null == e || !e.isValid) return;
    [...e.children].forEach(t => {
      t !== i && (__rea_outer_S(t), t.removeFromParent(), t.destroy());
    }), this.setNodeActive(i, !1), null == (t = this.contentLayout) || t.updateLayout(), this.computeScrollBounds();
  }
  destroyFlyNode(t) {
    const e = this.flyNodes.indexOf(t);
    e >= 0 && this.flyNodes.splice(e, 1), t.isValid && (__rea_outer_S(t), t.destroy());
  }
  clearFlyNodes() {
    const t = [...this.flyNodes];
    this.flyNodes.length = 0, t.forEach(t => {
      t.isValid && (__rea_outer_S(t), t.destroy());
    });
  }
  showDecisionButtons() {
    var t, e;
    this.setNodeActive((null == (t = this.buttonOpen) ? void 0 : t.node) ?? null, !0), this.setNodeActive((null == (e = this.buttonNotOpen) ? void 0 : e.node) ?? null, !0);
  }
  hideDecisionButtons() {
    var t, e;
    this.setNodeActive((null == (t = this.buttonOpen) ? void 0 : t.node) ?? null, !1), this.setNodeActive((null == (e = this.buttonNotOpen) ? void 0 : e.node) ?? null, !1);
  }
  findTouchedClueIndex(t) {
    const e = this.getCurrentCharacter();
    if (!e) return -1;
    for (let i = 0; i < e.clues.length; i += 1) {
      const e = this.getCurrentTouchNode(i);
      if (null != e && e.activeInHierarchy && this.isPointInsideNode(e, t)) return i;
    }
    return -1;
  }
  getCurrentTouchNode(t) {
    const e = this.getCurrentCharacter();
    return e ? this.touchNodes.get(e.clues[t].touchName) ?? null : null;
  }
  showTouchesForCharacter(t) {
    const e = this.getCharacterConfig(t),
      i = new Set(e.clues.map(t => t.touchName));
    this.touchNodes.forEach((t, e) => {
      this.setNodeActive(t, i.has(e));
    });
  }
  hideAllTouches() {
    this.touchNodes.forEach(t => {
      this.setNodeActive(t, !1);
    });
  }
  raiseToTop(t) {
    const e = null == t ? void 0 : t.parent;
    null != t && t.isValid && null != e && e.isValid && t.setSiblingIndex(e.children.length - 1);
  }
  playVoiceEffect(t, e) {
    this.voiceToken += 1;
    const i = this.voiceToken;
    this.showVoiceBubble(t);
    let o = !1;
    const s = () => {
        !o && this.isValid && i === this.voiceToken && (o = !0, this.unschedule(n), this.hideBubble(), e());
      },
      n = () => {
        s();
      };
    this.stopCurrentDialogueEffect(), this.currentDialogueKey = t, this.scheduleOnce(n, 12), __rea_outer_y.playEffect_1(t, s);
  }
  stopCurrentDialogueEffect() {
    this.shouldSkipStopLevelAudio() ? this.currentDialogueKey = "" : (__rea_outer_y.stopVoice(), this.currentDialogueKey && (__rea_outer_y.stopOneEffect(this.currentDialogueKey), this.currentDialogueKey = ""));
  }
  showVoiceBubble(t) {
    const e = __rea_outer_v.getInstance();
    this.tipLabel && (this.tipLabel.string = e.getKey(t), this.setNodeActive(this.tipLabel.node, !0)), this.setNodeActive(this.bubbleNode, !0);
  }
  hideBubble() {
    var t;
    this.setNodeActive(this.bubbleNode, !1), this.setNodeActive((null == (t = this.tipLabel) ? void 0 : t.node) ?? null, !1);
  }
  disableScrollViewComponent() {
    var t;
    null != (t = this.scrollView) && t.isValid && (this.scrollView.enabled = !1);
  }
  computeScrollBounds() {
    const t = this.contentNode,
      e = null == t ? void 0 : t.parent;
    if (null == t || !t.isValid || null == e || !e.isValid) return;
    const i = __rea_outer__(t, e, {
      excludedNodes: this.resolveContentScrollExcludedNodes()
    });
    i && (this.contentScrollBounds = i, this.applyContentScroll(t.position.x, !1));
  }
  resolveContentScrollExcludedNodes() {
    var t;
    const e = new Set();
    return null != (t = this.demoTemplateNode) && t.isValid && e.add(this.demoTemplateNode), e;
  }
  applyContentScroll(t, e = !0) {
    const i = this.contentNode;
    null != i && i.isValid && __rea_outer_V(i, t, this.contentScrollBounds, e, .2);
  }
  snapBackContentScroll() {
    const t = this.contentNode;
    null != t && t.isValid && __rea_outer_A(t, this.contentScrollBounds, .3);
  }
  resetContentScrollSession() {
    this.isTouchStartedInList = !1, this.isContentScrolling = !1;
  }
  scrollCollectionToStart() {
    this.computeScrollBounds(), this.applyContentScroll(this.contentScrollBounds.maxX, !1);
  }
  isPointInsideNode(t, e) {
    if (null == t || !t.isValid || !t.activeInHierarchy) return !1;
    const i = t.getComponent(__rea_outer_d);
    return !!i && i.getBoundingBoxToWorld().contains(e);
  }
  getTouchWorldPoint(t) {
    const e = t.getUILocation();
    return new __rea_outer_o(e.x, e.y);
  }
  getCurrentCharacterId() {
    return this.roundOrder[this.currentRoundIndex] ?? 0;
  }
  getCurrentCharacter() {
    const t = this.getCurrentCharacterId();
    return t <= 0 ? null : this.getCharacterConfig(t);
  }
  getCharacterConfig(t) {
    return O[t - 1];
  }
  getNpcNode(t) {
    return this.npcNodes[t - 1] ?? null;
  }
  getCloseUpNode(t) {
    return this.closeUpNodes[t - 1] ?? null;
  }
  resolveReferences() {
    var t, e, i, o, s, n, l, c, d, a;
    this.gameNode = this.node.getChildByPath("UIPanel/gameNode");
    const p = this.gameNode;
    this.bgNode = (null == p ? void 0 : p.getChildByName("bg")) ?? null, this.bg1Node = (null == p ? void 0 : p.getChildByName("bg_1")) ?? null, this.soundNode = (null == p ? void 0 : p.getChildByName("sound")) ?? null, this.doorwayNode = (null == p ? void 0 : p.getChildByName("doorway")) ?? null, this.angryNode = (null == p ? void 0 : p.getChildByName("angry")) ?? null, this.doubtNode = (null == p ? void 0 : p.getChildByName("doubt")) ?? null, this.failnode = (null == p ? void 0 : p.getChildByName("failnode")) ?? null, this.failureNode = (null == (t = this.failnode) ? void 0 : t.getChildByPath("general_bg/failure")) ?? null, this.boxNode = (null == p ? void 0 : p.getChildByName("box")) ?? null, this.clicksRoot = (null == p ? void 0 : p.getChildByName("clicks")) ?? null, this.clickRoot = this.node.getChildByPath("UIPanel/click_root"), this.collectionBgNode = (null == (e = this.clickRoot) ? void 0 : e.getChildByName("bg")) ?? null, this.contentNode = (null == (i = this.clickRoot) ? void 0 : i.getChildByPath("bg/ScrollView/view/content")) ?? null, this.demoTemplateNode = (null == (o = this.contentNode) ? void 0 : o.getChildByName("demo")) ?? null, this.contentLayout = (null == (s = this.contentNode) ? void 0 : s.getComponent(__rea_outer_u)) ?? null, this.scrollView = (null == (n = this.clickRoot) || null == (n = n.getChildByPath("bg/ScrollView")) ? void 0 : n.getComponent(__rea_outer_r)) ?? null, this.buttonOpen = (null == (l = this.clickRoot) || null == (l = l.getChildByName("ButtonOpen")) ? void 0 : l.getComponent(__rea_outer_h)) ?? null, this.buttonNotOpen = (null == (c = this.clickRoot) || null == (c = c.getChildByName("ButtonNotOpen")) ? void 0 : c.getComponent(__rea_outer_h)) ?? null, this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.bubbleNode = this.node.getChildByPath("UIPanel/bubble"), this.tipLabel = (null == (d = this.bubbleNode) || null == (d = d.getChildByPath("dialog_box/Label")) ? void 0 : d.getComponent(__rea_outer_N)) ?? null, this.resolveCharacterNodes(p), this.resolveCircleNodes(p), this.resolveTouchNodes(), null != (a = this.bgNode) && a.isValid && (this.bgOriginPosition = this.bgNode.position.clone()), this.setNodeActive(this.demoTemplateNode, !1), this.disableScrollViewComponent();
  }
  resolveCharacterNodes(t) {
    this.npcNodes.length = 0, this.closeUpNodes.length = 0;
    for (let e = 1; e <= 5; e += 1) {
      const i = (null == t ? void 0 : t.getChildByName(`npc_${e}`)) ?? null,
        o = (null == t ? void 0 : t.getChildByName(`npc_${e}_1`)) ?? null;
      this.npcNodes.push(i), this.closeUpNodes.push(o);
    }
  }
  resolveCircleNodes(t) {
    this.circleNodes.length = 0;
    for (let e = 1; e <= 3; e += 1) this.circleNodes.push((null == t ? void 0 : t.getChildByName(`circle_${e}`)) ?? null);
  }
  resolveTouchNodes() {
    this.touchNodes.clear(), O.forEach(t => {
      t.clues.forEach(t => {
        var e;
        const i = (null == (e = this.clicksRoot) ? void 0 : e.getChildByName(t.touchName)) ?? null;
        null != i && i.isValid && this.touchNodes.set(t.touchName, i);
      });
    });
  }
  setNodeActive(t, e) {
    null != t && t.isValid && (t.active = e);
  }
}) || B;
__rea_outer_e._RF.pop();
export { __recovered_export_0 as default };
