// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_16.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { Vec3 as __rea_outer_i } from "cc";
import { Tween as __rea_outer_s } from "cc";
import { tween as __rea_outer_o } from "cc";
import { Node as __rea_outer_n } from "cc";
import { Button as __rea_outer_l } from "cc";
import { instantiate as __rea_outer_h } from "cc";
import { Sprite as __rea_outer_d } from "cc";
import { UITransform as __rea_outer_c } from "cc";
import { Vec2 as __rea_outer_u } from "cc";
import { Label as __rea_outer_a } from "cc";
import { _decorator as __rea_outer_r } from "cc";
import { default as __rea_outer_p } from "./LevelBase";
import { default as __rea_outer_N } from "./AudioManager";
import { I18nController as __rea_outer_g } from "./i18n-controller";
import { UIManager as __rea_outer_y } from "./ui-manager";
import { UILayer as __rea_outer_v } from "./ui-layer";
import { UIHint as __rea_outer_f } from "./uihint";
import { UIFail as __rea_outer_b } from "./uifail";
import { GameController as __rea_outer_C } from "./GameController";
import { stopAllTweens as __rea_outer_R } from "./CocosCompat";
import { setNodeOpacity as __rea_outer_m } from "./CocosCompat";
let __recovered_export_0;
var T;
__rea_outer_t._RF.push({}, "f16a1YAFgBAFqAWAAAAAAAW", "Level_16", void 0);
const {
    ccclass: A
  } = __rea_outer_r,
  k = .05,
  B = ["level16_hint1", "level16_hint2", "level16_hint3", "level16_hint4"],
  V = ["touch1", "touch2", "touch3"];
__recovered_export_0 = A("Level_16")(T = class extends __rea_outer_p {
  constructor(...e) {
    super(...e), this.phase = 0, this.winstate = !1, this.currentRound = 0, this.gameNode = null, this.bgNode = null, this.soundNode = null, this.doorwayNode = null, this.failnode = null, this.failureNode = null, this.circleTemplate = null, this.clickRoot = null, this.buttonOpen = null, this.buttonClose = null, this.backBgNode = null, this.bubbleNode = null, this.tipLabel = null, this.npcNodes = [null, null, null, null], this.completedTouches = new Set(), this.roundCircles = [], this.isInteractionLocked = !1, this.isRoundTransitioning = !1, this.bgOriginPosition = new __rea_outer_i(), this.voiceToken = 0, this.knockToken = 0, this.currentDialogueKey = "", this.onLevelTouchEnd = e => {
      if (1 !== this.phase || this.isInteractionLocked || this.isRoundTransitioning) return;
      if (this.completedTouches.size >= 3) return;
      const t = this.getTouchWorldPoint(e),
        i = this.findTouchedClueIndex(t);
      i < 0 || this.handleClueTouch(i);
    }, this.onButtonOpenClick = () => {
      this.handleDecision(!0);
    }, this.onButtonCloseClick = () => {
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
    this.unscheduleAllCallbacks(), this.unregisterHandlers(), __rea_outer_s.stopAllByTag(400), this.stopBgShake(), this.clearRoundCircles(), this.hideBubble(), this.stopCurrentDialogueEffect(), super.onDestroy();
  }
  handleTimeExpired() {
    return !!(this.phase >= 2 || this.winstate);
  }
  showHint() {
    if (1 !== this.phase || this.currentRound >= B.length) return;
    const e = __rea_outer_g.getInstance().getKey(B[this.currentRound]);
    __rea_outer_y.getInstance().showView(__rea_outer_f, void 0, {
      body: e
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
    this.hasInstallNum = 3, this.currentRound = 3, this.phase = 2, this.winstate = !0, this.isInteractionLocked = !0, this.isRoundTransitioning = !0, this.unregisterHandlers();
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.currentRound = 0, this.completedTouches.clear(), this.isInteractionLocked = !1, this.isRoundTransitioning = !1, this.hasInstallNum = 0, this.allItemNum = 3, this.voiceToken = 0, this.knockToken = 0, this.currentDialogueKey = "", this.clearRoundCircles();
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_N.playMusic("bgm5", !0, .5), this.applyPhase0Visibility(), this.scheduleOnce(() => {
      this.isValid && this.playKnockSequence(() => {
        this.isValid && this.scheduleOnce(() => {
          this.isValid && this.playVoiceEffect("16_1", () => {
            this.isValid && this.enterPhase1();
          });
        }, 2);
      });
    }, 1);
  }
  enterPhase1() {
    this.phase = 1, this.currentRound = 0, this.registerHandlers(), this.startRound(this.currentRound);
  }
  startRound(e) {
    this.currentRound = e, this.completedTouches.clear(), this.clearRoundCircles(), this.hasInstallNum = 0, this.allItemNum = 3, this.isRoundTransitioning = !1, this.isInteractionLocked = !0, this.setNodeActive(this.clickRoot, !1), this.applyIndoorWaitingVisibility(), __rea_outer_C.getInstance().refreshGameProgress(), this.playVoiceEffect(this.getVisitorVoiceKey(e), () => {
      this.isValid && this.enterPeephole(e);
    });
  }
  applyIndoorWaitingVisibility() {
    this.setNodeActive(this.bgNode, !0), this.setNodeActive(this.soundNode, !1), this.setNodeActive(this.doorwayNode, !1), this.npcNodes.forEach(e => {
      this.setNodeActive(e, !1);
    });
  }
  enterPeephole(e) {
    this.applyRoundVisibility(e), this.setNodeActive(this.backBgNode, !1), this.isInteractionLocked = !1;
  }
  applyPhase0Visibility() {
    this.npcNodes.forEach(e => {
      this.setNodeActive(e, !1);
    }), this.setNodeActive(this.doorwayNode, !1), this.setNodeActive(this.clickRoot, !1), this.setNodeActive(this.soundNode, !1), this.setNodeActive(this.failnode, !1), this.setNodeActive(this.failureNode, !1), this.setNodeActive(this.backBgNode, !1), this.setNodeActive(this.bgNode, !0), this.hideBubble(), this.hideRound4RejectNodes();
    for (let e = 0; e < 4; e += 1) this.setNodeActive(this.getFullBodyNode(e), !1);
  }
  applyRoundVisibility(e) {
    this.setNodeActive(this.bgNode, !1), this.setNodeActive(this.soundNode, !1), this.setNodeActive(this.doorwayNode, !0), this.npcNodes.forEach((t, i) => {
      this.setNodeActive(t, i === e);
    }), this.setNodeActive(this.getPortraitNode(e), !0), this.setNodeActive(this.getFullBodyNode(e), !1), 3 === e && this.hideRound4RejectNodes();
  }
  hideRound4RejectNodes() {
    const e = this.npcNodes[3],
      t = (null == e ? void 0 : e.getChildByName("npc_4")) ?? null;
    this.setNodeActive((null == t ? void 0 : t.getChildByName("npc_4_1")) ?? null, !1), this.setNodeActive((null == t ? void 0 : t.getChildByName("npc_4_doubt")) ?? null, !1);
  }
  playKnockSequence(e) {
    this.setNodeActive(this.bgNode, !0), this.setNodeActive(this.soundNode, !0), this.playBgShake(), this.knockToken += 1;
    const t = this.knockToken;
    let i = !1;
    const s = () => {
        !i && this.isValid && t === this.knockToken && (i = !0, this.unschedule(o), this.setNodeActive(this.soundNode, !1), null == e || e());
      },
      o = () => {
        s();
      };
    this.scheduleOnce(o, 8), __rea_outer_N.playEffect_1("level16_4", s);
  }
  playBgShake(e) {
    const t = this.bgNode;
    if (null == t || !t.isValid) return void (null == e || e());
    this.bgOriginPosition = t.position.clone(), __rea_outer_R(t), __rea_outer_s.stopAllByTag(400);
    const n = this.bgOriginPosition;
    __rea_outer_o(t).tag(400).to(k, {
      position: new __rea_outer_i(n.x + 8, n.y, n.z)
    }).to(k, {
      position: new __rea_outer_i(n.x - 8, n.y, n.z)
    }).to(k, {
      position: new __rea_outer_i(n.x + 4.8, n.y, n.z)
    }).to(k, {
      position: new __rea_outer_i(n.x, n.y, n.z)
    }).call(() => {
      null == e || e();
    }).start();
  }
  stopBgShake() {
    const e = this.bgNode;
    null != e && e.isValid && (__rea_outer_R(e), e.setPosition(this.bgOriginPosition));
  }
  registerHandlers() {
    var e, t;
    this.node.on(__rea_outer_n.EventType.TOUCH_END, this.onLevelTouchEnd, this), this.node.on(__rea_outer_n.EventType.TOUCH_CANCEL, this.onLevelTouchEnd, this), null != (e = this.buttonOpen) && null != (e = e.node) && e.isValid && this.buttonOpen.node.on(__rea_outer_l.EventType.CLICK, this.onButtonOpenClick, this), null != (t = this.buttonClose) && null != (t = t.node) && t.isValid && this.buttonClose.node.on(__rea_outer_l.EventType.CLICK, this.onButtonCloseClick, this);
  }
  unregisterHandlers() {
    var e, t, i;
    null != (e = this.node) && e.isValid && (this.node.off(__rea_outer_n.EventType.TOUCH_END, this.onLevelTouchEnd, this), this.node.off(__rea_outer_n.EventType.TOUCH_CANCEL, this.onLevelTouchEnd, this)), null != (t = this.buttonOpen) && null != (t = t.node) && t.isValid && this.buttonOpen.node.off(__rea_outer_l.EventType.CLICK, this.onButtonOpenClick, this), null != (i = this.buttonClose) && null != (i = i.node) && i.isValid && this.buttonClose.node.off(__rea_outer_l.EventType.CLICK, this.onButtonCloseClick, this);
  }
  handleClueTouch(e) {
    if (this.completedTouches.has(e)) return;
    const t = this.getTouchNode(this.currentRound, e);
    null != t && t.isValid && (this.completedTouches.add(e), this.addCircleOnTouch(t), __rea_outer_N.playEffect_1("level16_1"), this.hasInstallNum = this.completedTouches.size, __rea_outer_C.getInstance().refreshGameProgress(), this.completedTouches.size < 3 || (this.isInteractionLocked = !0, this.setNodeActive(this.clickRoot, !0), this.isInteractionLocked = !1));
  }
  handleDecision(e) {
    if (this.isRoundTransitioning || this.completedTouches.size < 3) return;
    this.isRoundTransitioning = !0, this.isInteractionLocked = !0, this.setNodeActive(this.clickRoot, !1), this.clearRoundCircles();
    if (3 === this.currentRound) return e ? void this.playWinSequence() : void this.playFinalRoundRejectFail();
    e ? this.playEarlyRoundOpenFail() : this.playRejectSequence(() => {
      this.isValid && this.startRound(this.currentRound + 1);
    });
  }
  playEarlyRoundOpenFail() {
    this.winstate = !1, this.beginResultPhase(), this.setNodeActive(this.doorwayNode, !1), __rea_outer_N.playEffect_1("level16_2"), this.showFullBodyHidePortrait(this.currentRound), this.scheduleOnce(() => {
      this.isValid && (this.setNodeActive(this.failnode, !0), this.setNodeActive(this.failureNode, !1), this.scheduleOnce(() => {
        this.isValid && (this.setNodeActive(this.failureNode, !0), __rea_outer_N.playEffect_1("level16_3"), this.scheduleOnce(() => {
          this.isValid && this.beginFailSequence();
        }, 1));
      }, .1));
    }, 1);
  }
  playRejectSequence(e) {
    this.playVoiceEffect(this.getRejectVoiceKey(this.currentRound), () => {
      this.isValid && (this.setNodeActive(this.doorwayNode, !1), this.clearRoundCircles(), this.setNodeActive(this.npcNodes[this.currentRound], !1), this.playKnockSequence(() => {
        this.isValid && e();
      }));
    });
  }
  playFinalRoundRejectFail() {
    this.playVoiceEffect(this.getRejectVoiceKey(this.currentRound), () => {
      this.isValid && (this.clearRoundCircles(), this.showRound4RejectNodes(), this.scheduleOnce(() => {
        this.isValid && (this.winstate = !1, this.beginFailSequence());
      }, 1.5));
    });
  }
  showRound4RejectNodes() {
    const e = this.npcNodes[3],
      t = (null == e ? void 0 : e.getChildByName("npc_4")) ?? null;
    this.setNodeActive((null == t ? void 0 : t.getChildByName("npc_4_1")) ?? null, !0), this.setNodeActive((null == t ? void 0 : t.getChildByName("npc_4_doubt")) ?? null, !0);
  }
  playWinSequence() {
    this.setNodeActive(this.doorwayNode, !1), __rea_outer_N.playEffect_1("level16_5"), this.scheduleOnce(() => {
      this.isValid && this.playVoiceEffect("16_10", () => {
        this.isValid && (this.winstate = !0, this.beginResultPhase(), this.showLevelSuccess(1.5));
      });
    }, 1);
  }
  beginResultPhase() {
    this.phase >= 2 || (this.phase = 2, this.unregisterHandlers(), this.setNodeActive(this.clickRoot, !1), __rea_outer_C.getInstance().pauseTimer());
  }
  beginFailSequence() {
    this.beginResultPhase(), __rea_outer_y.getInstance().showView(__rea_outer_b, __rea_outer_v.WIN_ANIMATION);
  }
  addCircleOnTouch(e) {
    const t = this.circleTemplate,
      i = this.gameNode;
    if (null == t || !t.isValid || null == e || !e.isValid || null == i || !i.isValid) return;
    const s = __rea_outer_h(t);
    s.active = !0, __rea_outer_m(s, 255), s.setParent(i), s.setWorldPosition(e.worldPosition), s.setSiblingIndex(i.children.length - 1), this.roundCircles.push(s);
  }
  clearRoundCircles() {
    for (; this.roundCircles.length > 0;) {
      const e = this.roundCircles.pop();
      null != e && e.isValid && e.destroy();
    }
  }
  findTouchedClueIndex(e) {
    for (let t = 0; t < V.length; t += 1) {
      const i = this.getTouchNode(this.currentRound, t);
      if (null == i || !i.active) continue;
      const s = i.getComponent(__rea_outer_d);
      if (s && this.isPointInsideSprite(s, e)) return t;
    }
    return -1;
  }
  getTouchNode(e, t) {
    const i = this.npcNodes[e];
    return null != i && i.isValid ? i.getChildByName(V[t]) ?? null : null;
  }
  showFullBodyHidePortrait(e) {
    this.setNodeActive(this.getPortraitNode(e), !1), this.setNodeActive(this.getFullBodyNode(e), !0);
  }
  getPortraitNode(e) {
    const t = this.npcNodes[e];
    return null != t && t.isValid ? 3 === e ? t.getChildByName("npc_4") ?? null : t.getChildByName(`npc_${e + 1}`) ?? null : null;
  }
  getFullBodyNode(e) {
    const t = this.npcNodes[e];
    return null != t && t.isValid ? 3 === e ? t.getChildByPath("npc_4/npc_4_1") ?? null : t.getChildByName(`npc_${e + 1}_1`) ?? null : null;
  }
  getVisitorVoiceKey(e) {
    return `16_${e + 2}`;
  }
  getRejectVoiceKey(e) {
    return `16_${e + 6}`;
  }
  playVoiceEffect(e, t) {
    this.voiceToken += 1;
    const i = this.voiceToken;
    this.showVoiceBubble(e);
    let s = !1;
    const o = () => {
        !s && this.isValid && i === this.voiceToken && (s = !0, this.unschedule(n), this.hideBubble(), t());
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
    const t = __rea_outer_g.getInstance();
    this.tipLabel && (this.tipLabel.string = t.getKey(e), this.setNodeActive(this.tipLabel.node, !0)), this.setNodeActive(this.bubbleNode, !0);
  }
  hideBubble() {
    var e;
    this.setNodeActive(this.bubbleNode, !1), this.setNodeActive((null == (e = this.tipLabel) ? void 0 : e.node) ?? null, !1);
  }
  isPointInsideSprite(e, t) {
    const i = e.node.getComponent(__rea_outer_c);
    return !!i && i.getBoundingBoxToWorld().contains(t);
  }
  getTouchWorldPoint(e) {
    const t = e.getUILocation();
    return new __rea_outer_u(t.x, t.y);
  }
  resolveReferences() {
    var e, t, i, s, o;
    this.gameNode = this.node.getChildByPath("UIPanel/gameNode");
    const n = this.gameNode;
    this.bgNode = (null == n ? void 0 : n.getChildByName("bg")) ?? null, this.soundNode = (null == n ? void 0 : n.getChildByName("sound")) ?? null, this.doorwayNode = (null == n ? void 0 : n.getChildByName("doorway")) ?? null, this.circleTemplate = (null == n ? void 0 : n.getChildByName("circle")) ?? null, this.failnode = (null == n ? void 0 : n.getChildByName("failnode")) ?? null, this.failureNode = (null == (e = this.failnode) ? void 0 : e.getChildByName("failure")) ?? null, this.clickRoot = this.node.getChildByPath("UIPanel/click_root"), this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.bubbleNode = this.node.getChildByPath("UIPanel/bubble"), this.tipLabel = (null == (t = this.bubbleNode) || null == (t = t.getChildByPath("dialog_box/Label")) ? void 0 : t.getComponent(__rea_outer_a)) ?? null, this.buttonOpen = (null == (i = this.clickRoot) || null == (i = i.getChildByName("ButtonOpen")) ? void 0 : i.getComponent(__rea_outer_l)) ?? null, this.buttonClose = (null == (s = this.clickRoot) || null == (s = s.getChildByName("ButtonClose")) ? void 0 : s.getComponent(__rea_outer_l)) ?? null;
    for (let e = 0; e < 4; e += 1) this.npcNodes[e] = (null == n ? void 0 : n.getChildByName(`npc${e + 1}`)) ?? null;
    null != (o = this.bgNode) && o.isValid && (this.bgOriginPosition = this.bgNode.position.clone());
  }
  setNodeActive(e, t) {
    null != e && e.isValid && (e.active = t);
  }
}) || T;
__rea_outer_t._RF.pop();
export { __recovered_export_0 as default };
