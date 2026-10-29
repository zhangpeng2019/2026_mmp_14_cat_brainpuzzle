// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_14.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_e } from "cc";
import { Vec3 as __rea_outer_t } from "cc";
import { tween as __rea_outer_s } from "cc";
import { Tween as __rea_outer_o } from "cc";
import { UITransform as __rea_outer_n } from "cc";
import { _decorator as __rea_outer_a } from "cc";
import { default as __rea_outer_l } from "./AudioManager";
import { GameController as __rea_outer_r } from "./GameController";
import { getUIOpacity as __rea_outer_d } from "./CocosCompat";
import { stopAllTweens as __rea_outer_c } from "./CocosCompat";
import { default as __rea_outer_u } from "./clue-level-base";
import { ClueTriggerKind as __rea_outer_h } from "./clue-level-types";
import { ClueEffectKind as __rea_outer_g } from "./clue-level-types";
import { SwipeDirection as __rea_outer_p } from "./clue-level-types";
let __recovered_export_0;
var f;
__rea_outer_e._RF.push({}, "58032f0lkZJYrjMsN5xg41Q", "Level_14", void 0);
const {
    ccclass: k
  } = __rea_outer_a,
  m = "14_12",
  v = "level14_1",
  S = "scene2",
  N = "ip_1",
  w = "ip_1/anger_1",
  y = "ip_1/anger",
  A = 1410,
  C = 1412,
  _ = 400;
var T = function (i) {
    return i[i.Inactive = 0] = "Inactive", i[i.SuitcaseUnlock = 1] = "SuitcaseUnlock", i[i.SuitcaseConfirm = 2] = "SuitcaseConfirm", i[i.WindowUnlock = 3] = "WindowUnlock", i[i.WindowConfirm = 4] = "WindowConfirm", i[i.ScissorsDrag = 5] = "ScissorsDrag", i[i.FreePlay = 6] = "FreePlay", i;
  }(T || {}),
  L = function (i) {
    return i[i.None = 0] = "None", i[i.Click = 1] = "Click", i[i.SwipeLeft = 2] = "SwipeLeft", i[i.DragToCircle2 = 3] = "DragToCircle2", i;
  }(L || {});
const P = {
  levelId: 14,
  bgmKey: "bgm4",
  intro: {
    textKey: "14_1",
    soundKey: "14_1",
    delay: .25,
    holdSeconds: 2.5
  },
  outro: {
    textKey: m,
    soundKey: m
  },
  clueFoundSoundKey: v,
  clues: [{
    id: 1,
    voiceKey: "14_2",
    unlock: {
      trigger: {
        kind: __rea_outer_h.Click,
        hotspot: "swip/touch1"
      },
      effects: [{
        kind: __rea_outer_g.Hide,
        target: "window"
      }, {
        kind: __rea_outer_g.Show,
        target: "window_1"
      }]
    }
  }, {
    id: 2,
    voiceKey: "14_3",
    unlock: {
      trigger: {
        kind: __rea_outer_h.DragToZone,
        item: "scissors",
        zone: "drags/touch2"
      },
      effects: [{
        kind: __rea_outer_g.Hide,
        target: "bear"
      }, {
        kind: __rea_outer_g.Show,
        target: "bear_1"
      }]
    }
  }, {
    id: 3,
    voiceKey: "14_4",
    unlock: {
      trigger: {
        kind: __rea_outer_h.DragToZone,
        item: "scissors",
        zone: "drags/touch4"
      },
      effects: [{
        kind: __rea_outer_g.Hide,
        target: "sofa"
      }, {
        kind: __rea_outer_g.Show,
        target: "sofa_1"
      }]
    }
  }, {
    id: 4,
    voiceKey: "14_5",
    unlock: {
      trigger: {
        kind: __rea_outer_h.Click,
        hotspot: "swip/touch4"
      },
      effects: [{
        kind: __rea_outer_g.Show,
        target: "bedside_cabinet"
      }]
    }
  }, {
    id: 5,
    voiceKey: "14_6",
    unlock: {
      effects: [{
        kind: __rea_outer_g.Show,
        target: "door"
      }]
    }
  }, {
    id: 6,
    voiceKey: "14_7",
    unlock: {
      trigger: {
        kind: __rea_outer_h.Swipe,
        direction: __rea_outer_p.Left
      },
      effects: [{
        kind: __rea_outer_g.Show,
        target: "cabinet"
      }]
    }
  }, {
    id: 7,
    voiceKey: "14_8",
    unlock: {
      effects: [{
        kind: __rea_outer_g.Show,
        target: "mobile_phone_1"
      }]
    },
    confirm: {
      trigger: {
        hotspot: "mobile_phone_1/touch"
      },
      effects: [{
        kind: __rea_outer_g.Hide,
        target: "mobile_phone_1"
      }, {
        kind: __rea_outer_g.FadeIn,
        target: "circles/circle7"
      }]
    }
  }, {
    id: 8,
    voiceKey: "14_9",
    unlock: {
      effects: [{
        kind: __rea_outer_g.Show,
        target: "wardrobe_1"
      }]
    }
  }, {
    id: 9,
    voiceKey: "14_10",
    unlock: {
      trigger: {
        hotspot: "suitcase"
      },
      effects: [{
        kind: __rea_outer_g.Hide,
        target: "suitcase"
      }, {
        kind: __rea_outer_g.Show,
        target: "suitcase_1"
      }]
    }
  }, {
    id: 10,
    voiceKey: "14_11",
    unlock: {
      effects: [{
        kind: __rea_outer_g.Show,
        target: "desktop"
      }]
    }
  }]
};
__recovered_export_0 = k("Level_14")(f = class extends __rea_outer_u {
  constructor(...i) {
    super(...i), this.dialogBoxNodes = new Array(3).fill(null), this.guildNode = null, this.maskNode = null, this.maskBgNode = null, this.handNode = null, this.maskBgWorldPos = null, this.handOriginLocalPos = new __rea_outer_t(), this.angerFlameOriginPos = new __rea_outer_t(), this.angerMarkBaseScale = new __rea_outer_t(1, 1, 1), this.tutorialStep = T.Inactive, this.isTutorialRun = !1;
  }
  onLoad() {
    super.onLoad(), this.cacheDialogBoxPointers(), this.cacheTutorialNodes(), this.cacheRageNodes(), this.prepareSceneForPhase0();
  }
  onDestroy() {
    this.stopHandGuideAnimation(), this.stopMaskSizeAnimation(), this.stopRageAnimations(), __rea_outer_r.getInstance().setTutorialGuiding(!1), super.onDestroy();
  }
  getClueLevelConfig() {
    return P;
  }
  onPhase1Started() {
    this.isTutorialRun ? this.enterTutorialStep(T.SuitcaseUnlock) : this.setGuildActive(!1);
  }
  onClueUnlocked(i) {
    this.isTutorialRun && (this.tutorialStep !== T.SuitcaseUnlock || 9 !== i ? this.tutorialStep === T.WindowUnlock && 1 === i && (this.hideHandOnly(), this.enterTutorialStep(T.WindowConfirm)) : this.enterTutorialStep(T.SuitcaseConfirm));
  }
  onClueCompleted(i) {
    this.isTutorialRun && (this.tutorialStep !== T.SuitcaseConfirm || 9 !== i ? this.tutorialStep === T.WindowConfirm && 1 === i && this.enterTutorialStep(T.ScissorsDrag) : this.enterTutorialStep(T.WindowUnlock));
  }
  onDragItemStarted(i) {
    this.isTutorialRun && this.tutorialStep === T.ScissorsDrag && (i.indexOf(2) < 0 || this.enterTutorialStep(T.FreePlay));
  }
  isClueInteractionAllowed(i, e) {
    return !this.isTutorialRun || this.tutorialStep === T.FreePlay || (this.tutorialStep === T.SuitcaseUnlock ? 9 === i && "unlock" === e : this.tutorialStep === T.SuitcaseConfirm ? 9 === i && "confirm" === e : this.tutorialStep === T.WindowUnlock ? 1 === i && "unlock" === e : this.tutorialStep === T.WindowConfirm ? 1 === i && "confirm" === e : this.tutorialStep === T.ScissorsDrag && 2 === i && "unlock" === e);
  }
  resolveBubblePointerIndex(i, e) {
    return e === v || this.isClueFoundVoiceKey(i) ? 3 : i === m ? 2 : 1;
  }
  applyBubblePointer(i) {
    for (let e = 0; e < 3; e++) {
      const t = this.dialogBoxNodes[e];
      null != t && t.isValid && (t.active = i === e + 1);
    }
  }
  onBeforeSuccess(i) {
    this.winstate = !0, this.hideDialogue(), this.setLevelNodeActive("ip", !1), this.setLevelNodeActive(N, !0), this.startRageAnimations(), __rea_outer_l.playEffect_1("level14_2"), this.scheduleOnce(() => {
      this.isValid && this.playScene2Finale();
    }, 1);
  }
  playScene2Finale() {
    this.setLevelNodeActive(S, !0), this.playDialogue(m, m), this.scheduleOnce(() => {
      this.isValid && this.showLevelSuccess(1.5);
    }, 2);
  }
  prepareSceneForPhase0() {
    this.isTutorialRun = !1, this.tutorialStep = T.Inactive, this.setLevelNodeActive(S, !1), this.setLevelNodeActive(N, !1), this.stopRageAnimations(), this.setGuildActive(!1), __rea_outer_r.getInstance().setTutorialGuiding(!1);
  }
  cacheDialogBoxPointers() {
    const i = this.findLevelNode("bubble");
    for (let e = 0; e < 3; e++) this.dialogBoxNodes[e] = (null == i ? void 0 : i.getChildByName(`dialog_box_${e + 1}`)) ?? null;
    this.applyBubblePointer(0);
  }
  cacheTutorialNodes() {
    var i, e;
    this.guildNode = this.findLevelNode("guild"), this.maskNode = this.findLevelNode("guild/Mask"), this.maskBgNode = this.findLevelNode("guild/Mask/maskbg"), this.handNode = this.findLevelNode("guild/general_shou"), null != (i = this.maskBgNode) && i.isValid && (this.maskBgWorldPos = this.maskBgNode.worldPosition.clone()), null != (e = this.handNode) && e.isValid && (this.handOriginLocalPos = this.handNode.position.clone());
  }
  cacheRageNodes() {
    const i = this.findLevelNode(w);
    null != i && i.isValid && (this.angerFlameOriginPos = i.position.clone());
    const e = this.findLevelNode(y);
    null != e && e.isValid && (this.angerMarkBaseScale = e.scale.clone());
  }
  startRageAnimations() {
    this.stopRageAnimations(), this.startAngerScaleAnimation(), this.startFlameRiseAnimation();
  }
  startAngerScaleAnimation() {
    const i = this.findLevelNode(y);
    if (null == i || !i.isValid) return;
    const e = this.angerMarkBaseScale.clone();
    i.setScale(e);
    const o = new __rea_outer_t(1.2 * e.x, 1.2 * e.y, e.z);
    __rea_outer_s(i).tag(C).to(.35, {
      scale: o
    }).to(.35, {
      scale: e
    }).union().repeatForever().start();
  }
  startFlameRiseAnimation() {
    const i = this.findLevelNode(w);
    if (null == i || !i.isValid) return;
    const e = this.angerFlameOriginPos.clone(),
      o = new __rea_outer_t(e.x, e.y + 80, e.z),
      n = __rea_outer_d(i),
      a = () => {
        i.isValid && this.winstate && (i.setPosition(e), n.opacity = 255, __rea_outer_s(i).tag(C).parallel(__rea_outer_s().to(.7, {
          position: o
        }), __rea_outer_s(n).to(.7, {
          opacity: 0
        })).call(a).start());
      };
    a();
  }
  stopRageAnimations() {
    __rea_outer_o.stopAllByTag(C);
    const i = this.findLevelNode(y);
    null != i && i.isValid && (__rea_outer_c(i), i.setScale(this.angerMarkBaseScale));
    const e = this.findLevelNode(w);
    null != e && e.isValid && (__rea_outer_c(e), e.setPosition(this.angerFlameOriginPos), __rea_outer_d(e).opacity = 255);
  }
  enterTutorialStep(i) {
    if (this.tutorialStep = i, i === T.FreePlay) return this.stopHandGuideAnimation(), this.stopMaskSizeAnimation(), this.setGuildActive(!1), void __rea_outer_r.getInstance().setTutorialGuiding(!1);
    this.setGuildActive(!0), __rea_outer_r.getInstance().setTutorialGuiding(!0), i !== T.SuitcaseUnlock ? i !== T.SuitcaseConfirm ? i !== T.WindowUnlock ? i !== T.WindowConfirm ? i === T.ScissorsDrag && this.focusGuideOn("scissors", L.DragToCircle2) : this.focusGuideOn("circles/circle1", L.Click) : this.focusGuideOn("window", L.Click) : this.focusGuideOn("circles/circle9", L.Click) : this.focusGuideOn("suitcase", L.Click);
  }
  focusGuideOn(i, e) {
    var t;
    this.moveMaskToTarget(i), this.playMaskSizeAnimation(), this.syncHandToMask(), null != (t = this.handNode) && t.isValid && (this.handNode.active = !0), this.startHandGuideAnimation(e);
  }
  hideHandOnly() {
    var i;
    this.stopHandGuideAnimation(), null != (i = this.handNode) && i.isValid && (this.handNode.active = !1);
  }
  moveMaskToTarget(i) {
    var e;
    const t = this.maskNode,
      s = this.findLevelNode(i);
    if (null == t || !t.isValid || null == s || !s.isValid || null == (e = t.parent) || !e.isValid) return void console.warn(`[Level_14] guide focus failed: missing mask/target (${i})`);
    const o = t.parent.getComponent(__rea_outer_n);
    if (!o) return;
    const a = o.convertToNodeSpaceAR(s.worldPosition);
    t.setPosition(a.x, a.y, t.position.z), this.restoreMaskBgWorldPosition();
  }
  playMaskSizeAnimation() {
    this.stopMaskSizeAnimation();
    const i = this.maskNode;
    if (null == i || !i.isValid) return;
    const e = i.getComponent(__rea_outer_n);
    if (!e) return;
    e.setContentSize(_, _);
    const t = {
      width: _,
      height: _
    };
    __rea_outer_s(t).tag(1411).to(.35, {
      width: 220,
      height: 220
    }, {
      onUpdate: () => {
        e.isValid && e.setContentSize(t.width, t.height);
      }
    }).start();
  }
  stopMaskSizeAnimation() {
    var i;
    __rea_outer_o.stopAllByTag(1411), null != (i = this.maskNode) && i.isValid && __rea_outer_c(this.maskNode);
  }
  restoreMaskBgWorldPosition() {
    var i;
    null != (i = this.maskBgNode) && i.isValid && this.maskBgWorldPos && this.maskBgNode.setWorldPosition(this.maskBgWorldPos);
  }
  syncHandToMask() {
    var i, e;
    null != (i = this.handNode) && i.isValid && null != (e = this.maskNode) && e.isValid && (this.handNode.setPosition(this.maskNode.position.x, this.maskNode.position.y, this.handNode.position.z), this.handOriginLocalPos = this.handNode.position.clone());
  }
  startHandGuideAnimation(i) {
    this.stopHandGuideAnimation();
    const e = this.handNode;
    null != e && e.isValid && i !== L.None && (i !== L.Click ? i !== L.SwipeLeft ? i === L.DragToCircle2 && this.startHandDragToCircle2Animation(e) : this.startHandSwipeAnimation(e) : this.startHandClickAnimation(e));
  }
  startHandClickAnimation(i) {
    const e = i.scale.clone(),
      o = new __rea_outer_t(1.15 * e.x, 1.15 * e.y, e.z),
      n = () => {
        i.isValid && this.tutorialStep !== T.FreePlay && __rea_outer_s(i).tag(A).to(.35, {
          scale: o
        }).to(.35, {
          scale: e
        }).call(n).start();
      };
    n();
  }
  startHandSwipeAnimation(i) {
    const e = this.handOriginLocalPos.clone(),
      o = new __rea_outer_t(e.x + -120, e.y, e.z),
      n = () => {
        i.isValid && this.tutorialStep === T.WindowUnlock && (i.setPosition(e), __rea_outer_s(i).tag(A).to(.55, {
          position: o
        }).to(.55, {
          position: e
        }).call(n).start());
      };
    n();
  }
  startHandDragToCircle2Animation(i) {
    const e = this.handOriginLocalPos.clone(),
      t = this.resolveHandLocalPosition("circles/circle2");
    if (!t) return void console.warn("[Level_14] guide drag failed: missing circle2");
    const o = () => {
      i.isValid && this.tutorialStep === T.ScissorsDrag && (i.setPosition(e), __rea_outer_s(i).tag(A).to(.8, {
        position: t
      }).call(o).start());
    };
    o();
  }
  resolveHandLocalPosition(i) {
    var e;
    const s = this.handNode,
      o = this.findLevelNode(i);
    if (null == s || !s.isValid || null == o || !o.isValid || null == (e = s.parent) || !e.isValid) return null;
    const a = s.parent.getComponent(__rea_outer_n);
    if (!a) return null;
    const l = a.convertToNodeSpaceAR(o.worldPosition);
    return new __rea_outer_t(l.x, l.y, s.position.z);
  }
  stopHandGuideAnimation() {
    var i;
    __rea_outer_o.stopAllByTag(A), null != (i = this.handNode) && i.isValid && __rea_outer_c(this.handNode);
  }
  setGuildActive(i) {
    var e;
    null != (e = this.guildNode) && e.isValid && (this.guildNode.active = i);
  }
  isClueFoundVoiceKey(i) {
    const e = /^14_(\d+)$/.exec(i);
    if (!e) return !1;
    const t = Number.parseInt(e[1], 10);
    return t >= 2 && t <= 11;
  }
  setLevelNodeActive(i, e) {
    const t = this.findLevelNode(i);
    null != t && t.isValid ? t.active = e : console.warn(`[Level_14] missing finale node: ${i}`);
  }
}) || f;
__rea_outer_e._RF.pop();
export { __recovered_export_0 as default };
