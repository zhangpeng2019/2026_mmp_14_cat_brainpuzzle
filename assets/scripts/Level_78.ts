// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_78.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_e } from "cc";
import { Vec3 as __rea_outer_i } from "cc";
import { Vec2 as __rea_outer_s } from "cc";
import { tween as __rea_outer_o } from "cc";
import { Sprite as __rea_outer_n } from "cc";
import { instantiate as __rea_outer_h } from "cc";
import { UITransform as __rea_outer_l } from "cc";
import { Layout as __rea_outer_a } from "cc";
import { Node as __rea_outer_r } from "cc";
import { Color as __rea_outer_d } from "cc";
import { assetManager as __rea_outer_c } from "cc";
import { SpriteFrame as __rea_outer_p } from "cc";
import { Tween as __rea_outer_u } from "cc";
import { ScrollView as __rea_outer_g } from "cc";
import { Label as __rea_outer_m } from "cc";
import { _decorator as __rea_outer_f } from "cc";
import { default as __rea_outer_N } from "./LevelBase";
import { default as __rea_outer_v } from "./clue-hit-tester";
import { default as __rea_outer_S } from "./AudioManager";
import { I18nController as __rea_outer__ } from "./i18n-controller";
import { UIManager as __rea_outer_y } from "./ui-manager";
import { UILayer as __rea_outer_w } from "./ui-layer";
import { UIHint as __rea_outer_T } from "./uihint";
import { UIFail as __rea_outer_A } from "./uifail";
import { GameController as __rea_outer_I } from "./GameController";
import { stopAllTweens as __rea_outer_b } from "./CocosCompat";
import { getUIOpacity as __rea_outer_k } from "./CocosCompat";
import { setNodeOpacity as __rea_outer_V } from "./CocosCompat";
import { computeContentHorizontalScrollBounds as __rea_outer_C } from "./content-horizontal-scroll";
import { applyContentHorizontalScroll as __rea_outer_L } from "./content-horizontal-scroll";
import { snapBackContentHorizontalScroll as __rea_outer_P } from "./content-horizontal-scroll";
let __recovered_export_0;
var B;
__rea_outer_e._RF.push({}, "3bedbceRshHBKhSG72JqcWF", "Level_78", void 0);
const {
    ccclass: x
  } = __rea_outer_f,
  H = "Level_78",
  E = "78_1",
  O = "level78_3",
  R = "level78_6",
  M = "level78_9",
  F = 11,
  U = -383.5,
  z = 176,
  D = "showpic",
  X = new __rea_outer_i(.5, 29.5, 0),
  G = new __rea_outer_i(-383.5, 445, 0),
  W = new __rea_outer_i(384.5, -386, 0),
  $ = ["heart3", "heart2", "heart1"],
  K = ["leg_2", "leg_3", "leg_4", "leg_5"],
  Y = ["leg_2", "leg_3", "leg_4", "leg_5", "leg_6"],
  Z = ["bg_1", "leg", "leg_1", "leg_2", "leg_3", "leg_4", "leg_5", "leg_6"],
  q = ["hoof_2", "hoof_3", "hoof_4", "hoof_5", "hoof_6", "hoof_7", "hoof_8"],
  J = ["frame_7_pliers2", "frame_7_pliers1"],
  j = ["frame_8_tweezers1", "frame_8_tweezers2"],
  Q = ["stone_1", "stone_2"],
  tt = ["frame_10_ointment1", "frame_10_ointment2", "frame_10_ointment3", "frame_10_ointment4", "frame_10_ointment5"],
  et = ["bandage1", "bandage2", "bandage3", "bandage4", "bandage5"],
  it = [new __rea_outer_s(0, 20), new __rea_outer_s(20, 0), new __rea_outer_s(0, -20), new __rea_outer_s(-20, 0)];
var st = function (t) {
  return t[t.None = 0] = "None", t[t.Toolbar = 1] = "Toolbar", t;
}(st || {});
__recovered_export_0 = x("Level_78")(B = class extends __rea_outer_N {
  constructor(...t) {
    super(...t), this.phase = 0, this.winstate = !1, this.gameNode = null, this.clickRootNode = null, this.backBgNode = null, this.promptBoxNode = null, this.promptLabel = null, this.contentNode = null, this.viewNode = null, this.demoTemplateNode = null, this.scrollView = null, this.contentLayout = null, this.touchZone = null, this.nodeByName = new Map(), this.originByName = new Map(), this.toolItems = [], this.completedSteps = new Set(), this.heartNodes = [], this.raisedSiblings = new Map(), this.heartFullFrame = null, this.heartBrokenFrame = null, this.brokenHeartCount = 0, this.isInputLocked = !1, this.isHeldForTimeUp = !1, this.pendingStep = 0, this.voiceToken = 0, this.actionToken = 0, this.shakeToken = 0, this.settlementToken = 0, this.motionDriver = null, this.contentScrollBounds = {
      minX: 0,
      maxX: 0
    }, this.touchSessionKind = st.None, this.touchStartPoint = new __rea_outer_s(), this.scrollStartContentX = 0, this.isContentScrolling = !1, this.draggedItem = null, this.followerNode = null, this.liftedLayer = null, this.isHandlersBound = !1, this.onLevelTouchStart = t => {
      var e, i;
      if (1 !== this.phase || this.isInputLocked) return;
      null != (e = this.contentNode) && e.isValid && __rea_outer_b(this.contentNode);
      const s = this.getTouchWorldPoint(t);
      this.touchStartPoint = s, this.scrollStartContentX = (null == (i = this.contentNode) ? void 0 : i.position.x) ?? 0, this.isContentScrolling = !1, this.draggedItem = null, this.isPointInsideNode(this.viewNode, s) ? (this.touchSessionKind = st.Toolbar, this.draggedItem = this.findToolAtPoint(s)) : this.touchSessionKind = st.None;
    }, this.onLevelTouchMove = t => {
      if (1 !== this.phase || this.isInputLocked) return;
      if (this.touchSessionKind !== st.Toolbar) return;
      const e = this.getTouchWorldPoint(t);
      if (this.isContentScrolling) return void this.applyContentScroll(this.scrollStartContentX + (e.x - this.touchStartPoint.x));
      if (this.isDragLifted()) return void this.moveDraggedItem(e);
      const i = e.x - this.touchStartPoint.x,
        s = e.y - this.touchStartPoint.y;
      if (Math.abs(i) > 12 && Math.abs(i) > Math.abs(s)) return this.isContentScrolling = !0, void this.applyContentScroll(this.scrollStartContentX + i);
      (Math.abs(s) > 12 || !this.isPointInsideNode(this.viewNode, e)) && this.liftDraggedItem(e);
    }, this.onLevelTouchEnd = t => {
      const e = this.isContentScrolling,
        i = this.draggedItem;
      if (this.touchSessionKind = st.None, this.isContentScrolling = !1, 1 === this.phase && !this.isInputLocked) return e ? (this.snapBackContentScroll(), void this.returnDraggedItem()) : void (i && this.isDragLifted() ? this.isFollowerCenterInsideZone() ? this.handleToolDropped(i) : this.returnDraggedItem() : this.draggedItem = null);
      this.returnDraggedItem();
    }, this.onLevelTouchCancel = () => {
      const t = this.isContentScrolling;
      this.touchSessionKind = st.None, this.isContentScrolling = !1, t && this.snapBackContentScroll(), this.returnDraggedItem();
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.allItemNum = F, this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.applyPhase0Visibility(), this.enterPhase0();
  }
  update() {
    this.isHeldForTimeUp && 1 === this.phase && (__rea_outer_I.getInstance().getRemainingTime() <= 0 || this.resumeAfterTimeUp());
  }
  onDestroy() {
    this.cleanupRuntime(), super.onDestroy();
  }
  handleTimeExpired() {
    return 1 !== this.phase || (this.holdForTimeUp(), !1);
  }
  showHint() {
    if (1 !== this.phase || this.isInputLocked) return;
    const t = this.getHintStep();
    if (!t) return;
    const e = __rea_outer__.getInstance().getKey(`level78_hint${t}`);
    __rea_outer_y.getInstance().showView(__rea_outer_T, void 0, {
      body: e
    });
  }
  getGameProgressSnapshot() {
    const t = Math.min(this.hasInstallNum, F);
    return {
      progress: t / F,
      label: `${t}/11`
    };
  }
  markAllTasksCompleted() {
    this.hasInstallNum = F, this.phase = 2, this.winstate = !0, this.isInputLocked = !0;
    for (let t = 1; t <= F; t += 1) this.completedSteps.add(t);
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.isInputLocked = !1, this.isHeldForTimeUp = !1, this.pendingStep = 0, this.completedSteps.clear(), this.brokenHeartCount = 0, this.hasInstallNum = 0, this.allItemNum = F, this.voiceToken += 1, this.actionToken += 1, this.shakeToken += 1, this.settlementToken += 1, this.draggedItem = null, this.unscheduleAllCallbacks(), this.stopMotion(), this.stopCachedTweens(), this.clearToolItems(), __rea_outer_S.stopVoice(), __rea_outer_S.stopAllEffects();
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_S.playMusic("bgm4", !0, .5), __rea_outer_I.getInstance().pauseTimer(), this.setInputLocked(!0), this.loadHeartFrames(), this.showIntroPrompt(), __rea_outer_S.playVoice(E, () => {
      this.isValid && 0 === this.phase && this.scheduleOnce(() => {
        this.isValid && 0 === this.phase && this.beginIntroFade();
      }, .5);
    }), __rea_outer_S.playEffect_1("level78_2");
  }
  beginIntroFade() {
    this.setNodeActive(this.promptBoxNode, !1);
    const t = this.getNode("start");
    if (null == t || !t.isValid) return void this.enterPhase1();
    const e = __rea_outer_k(t);
    e.opacity = 255, __rea_outer_o(e).to(.5, {
      opacity: 0
    }).call(() => {
      this.isValid && 0 === this.phase && (this.setNodeActive(t, !1), this.enterPhase1());
    }).start();
  }
  enterPhase1() {
    this.isValid && 0 === this.phase && (this.phase = 1, this.setNodeActive(this.getNode("start"), !1), this.setNodeActive(this.getNode("bg_1"), !0), this.showAtOrigin("leg"), this.setNodeActive(this.getNode("组 2"), !0), this.hideFollowerIcons(), this.setNodeActive(this.getNode("组 1"), !0), this.showHearts(), this.setNodeActive(this.getNode("clicks"), !0), this.setNodeActive(this.clickRootNode, !0), this.setInputLocked(!1), this.populateToolbar(), this.bindInputHandlers(), __rea_outer_I.getInstance().resumeTimer(), __rea_outer_I.getInstance().refreshGameProgress(), this.scheduleOnce(() => {
      this.isValid && 1 === this.phase && this.refreshToolbarLayout();
    }, 0));
  }
  enterPhase2Success() {
    this.phase >= 2 || (this.phase = 2, this.winstate = !0, this.pendingStep = 0, this.isHeldForTimeUp = !1, this.actionToken += 1, this.shakeToken += 1, this.isInputLocked = !0, __rea_outer_I.getInstance().pauseTimer(), this.stopPresentation(), this.playBlackTransition(() => {
      this.isValid && 2 === this.phase && this.winstate && (this.hidePlayfield(), this.setNodeActive(this.getNode("end_1"), !0), this.setNodeActive(this.getNode("heart_end"), !1));
    }, () => {
      this.isValid && 2 === this.phase && this.winstate && this.playSettlementSound("level78_13", () => {
        this.isValid && this.winstate && this.showLevelSuccess(0);
      });
    }));
  }
  enterPhase2Fail() {
    this.phase >= 2 || (this.phase = 2, this.winstate = !1, this.pendingStep = 0, this.isHeldForTimeUp = !1, this.actionToken += 1, this.shakeToken += 1, this.isInputLocked = !0, __rea_outer_I.getInstance().pauseTimer(), this.stopPresentation(), this.playBlackTransition(() => {
      this.isValid && 2 === this.phase && !this.winstate && (this.hidePlayfield(), this.setNodeActive(this.getNode("end_2"), !0), this.setNodeActive(this.getNode("heart_end"), !1));
    }, () => {
      this.isValid && 2 === this.phase && !this.winstate && this.playSettlementSound("level78_12", () => {
        this.isValid && !this.winstate && __rea_outer_y.getInstance().showView(__rea_outer_A, __rea_outer_w.WIN_ANIMATION);
      });
    }));
  }
  holdForTimeUp() {
    const t = this.pendingStep;
    this.pendingStep = 0, this.actionToken += 1, this.returnDraggedItem(), this.stopPresentation(), t > 0 && !this.completedSteps.has(t) && (this.applyStepResult(t), this.completedSteps.add(t), this.hasInstallNum = this.completedSteps.size, __rea_outer_I.getInstance().refreshGameProgress(), this.stopHoofShake(), __rea_outer_S.stopAllEffects()), this.isHeldForTimeUp = !0, this.setInputLocked(!0);
  }
  resumeAfterTimeUp() {
    this.isHeldForTimeUp = !1, this.completedSteps.size >= F ? this.enterPhase2Success() : (this.setInputLocked(!1), this.completedSteps.has(3) && !this.completedSteps.has(4) && this.startHoofShake());
  }
  applyPhase0Visibility() {
    var t;
    this.setNodeActive(this.gameNode, !0), null == (t = this.gameNode) || t.children.forEach(t => {
      t.active = "start" === t.name || "prompt_box" === t.name;
    });
    const e = this.getNode("start");
    null != e && e.isValid && (__rea_outer_k(e).opacity = 255, e.active = !0), this.setNodeActive(this.promptBoxNode, !0), this.setNodeActive(this.node.getChildByPath("UIPanel/demo"), !1), this.setNodeActive(this.demoTemplateNode, !1), this.hideFollowerIcons(), this.setNodeActive(this.backBgNode, !1);
  }
  hidePlayfield() {
    this.setNodeActive(this.clickRootNode, !1), this.setNodeActive(this.getNode("组 1"), !1), this.setNodeActive(this.getNode("heart_end"), !1), this.setNodeActive(this.getNode("end_1"), !1), this.setNodeActive(this.getNode("end_2"), !1), this.setNodeActive(this.promptBoxNode, !1), this.stopHoofShake();
  }
  showHearts() {
    this.setNodeActive(this.getNode("heart_bg"), !0), this.heartNodes.forEach(t => {
      this.setNodeActive(t, !0);
    }), this.setNodeActive(this.getNode("heart_end"), !1), this.applyHeartSprites();
  }
  loadHeartFrames() {
    this.loadSpriteFrame("Texture/heart", t => {
      this.heartFullFrame = t, this.applyHeartSprites();
    }), this.loadSpriteFrame("Texture/heart_1", t => {
      this.heartBrokenFrame = t, this.applyHeartSprites();
    });
  }
  applyHeartSprites() {
    this.heartNodes.forEach((t, e) => {
      const i = null != t && t.isValid ? t.getComponent(__rea_outer_n) : null;
      if (!i) return;
      const s = e < this.brokenHeartCount ? this.heartBrokenFrame : this.heartFullFrame;
      s && (i.spriteFrame = s);
    });
  }
  breakNextHeart() {
    this.brokenHeartCount >= 3 || (this.brokenHeartCount += 1, this.applyHeartSprites());
  }
  populateToolbar() {
    this.clearToolItems(), this.setNodeActive(this.demoTemplateNode, !1), this.createShuffledToolIds().forEach(t => {
      const e = this.createToolItem(t);
      e && this.loadSpriteFrame(`Texture/frame_${t}`, t => {
        this.applyShowpicFrame(e.itemNode, t);
      });
    }), this.refreshToolbarLayout();
  }
  createToolItem(t) {
    const e = this.contentNode,
      i = this.demoTemplateNode;
    if (null == e || !e.isValid || null == i || !i.isValid) return null;
    const s = __rea_outer_h(i);
    s.name = `tool_${t}`, s.active = !0, s.setScale(1, 1, 1);
    const o = s.getComponent(__rea_outer_l);
    o && o.setContentSize(z, z), s.setParent(e);
    const n = s.getChildByName(D);
    null != n && n.isValid && (n.active = !0);
    const a = {
      toolId: t,
      itemNode: s
    };
    return this.toolItems.push(a), a;
  }
  applyShowpicFrame(t, e) {
    var i;
    const s = null != t && t.isValid ? (null == (i = t.getChildByName(D)) ? void 0 : i.getComponent(__rea_outer_n)) ?? null : null;
    if (!s || !e) return;
    s.sizeMode = __rea_outer_n.SizeMode.CUSTOM, s.spriteFrame = e;
    const o = s.node.getComponent(__rea_outer_l);
    o && o.setContentSize(e.originalSize.width, e.originalSize.height);
  }
  clearToolItems() {
    this.parkFollower(), this.returnDraggedItem(), this.toolItems.forEach(t => {
      var e;
      null != (e = t.itemNode) && e.isValid && (__rea_outer_b(t.itemNode), t.itemNode.removeFromParent(), t.itemNode.destroy());
    }), this.toolItems.length = 0;
  }
  removeToolItem(t) {
    var e;
    const i = this.toolItems.indexOf(t);
    i >= 0 && this.toolItems.splice(i, 1), this.draggedItem === t && (this.draggedItem = null), null != (e = t.itemNode) && e.isValid && (__rea_outer_b(t.itemNode), t.itemNode.removeFromParent(), t.itemNode.destroy()), this.refreshToolbarLayout();
  }
  refreshToolbarLayout() {
    const t = this.contentNode,
      e = this.contentLayout,
      i = (null == t ? void 0 : t.getComponent(__rea_outer_l)) ?? null;
    if (this.toolItems.forEach(e => {
      var i;
      if (null == (i = e.itemNode) || !i.isValid || e.itemNode.parent !== t) return;
      e.itemNode.setScale(1, 1, 1);
      const s = e.itemNode.getComponent(__rea_outer_l);
      s && s.setContentSize(z, z);
    }), null != e && e.isValid && (e.resizeMode = __rea_outer_a.ResizeMode.CONTAINER, e.updateLayout()), i) {
      const t = this.toolItems.length,
        s = (null == e ? void 0 : e.paddingLeft) ?? 0,
        o = (null == e ? void 0 : e.paddingRight) ?? 0,
        n = (null == e ? void 0 : e.spacingX) ?? 16,
        h = s + o + z * t + n * Math.max(0, t - 1);
      i.setContentSize(Math.max(h, 0), i.height);
    }
    this.computeScrollBounds();
  }
  bindInputHandlers() {
    var t;
    null != (t = this.scrollView) && t.isValid && (this.scrollView.enabled = !1), this.isHandlersBound || (this.isHandlersBound = !0, this.node.on(__rea_outer_r.EventType.TOUCH_START, this.onLevelTouchStart, this), this.node.on(__rea_outer_r.EventType.TOUCH_MOVE, this.onLevelTouchMove, this), this.node.on(__rea_outer_r.EventType.TOUCH_END, this.onLevelTouchEnd, this), this.node.on(__rea_outer_r.EventType.TOUCH_CANCEL, this.onLevelTouchCancel, this));
  }
  unbindInputHandlers() {
    var t;
    this.isHandlersBound && null != (t = this.node) && t.isValid ? (this.node.off(__rea_outer_r.EventType.TOUCH_START, this.onLevelTouchStart, this), this.node.off(__rea_outer_r.EventType.TOUCH_MOVE, this.onLevelTouchMove, this), this.node.off(__rea_outer_r.EventType.TOUCH_END, this.onLevelTouchEnd, this), this.node.off(__rea_outer_r.EventType.TOUCH_CANCEL, this.onLevelTouchCancel, this), this.isHandlersBound = !1) : this.isHandlersBound = !1;
  }
  handleToolDropped(t) {
    this.isStepAllowed(t.toolId) ? (this.parkFollower(), this.removeToolItem(t), this.beginStep(t.toolId)) : this.handleWrongTool(t);
  }
  handleWrongTool(t) {
    this.setInputLocked(!0), __rea_outer_S.playEffect_1("level78_1"), this.breakNextHeart(), this.returnDraggedItem();
    const e = this.brokenHeartCount >= 3;
    this.flashHeartEnd(() => {
      !this.isValid || this.phase >= 2 || this.isHeldForTimeUp || (e ? this.enterPhase2Fail() : this.setInputLocked(!1));
    });
  }
  flashHeartEnd(t) {
    const e = this.getNode("heart_end");
    this.setNodeActive(e, !0), this.bringToFront(e), this.scheduleOnce(() => {
      this.isValid && (this.setNodeActive(this.getNode("heart_end"), !1), t());
    }, .5);
  }
  beginStep(t) {
    this.pendingStep = t, this.actionToken += 1;
    const e = this.actionToken;
    this.setInputLocked(!0), __rea_outer_S.playEffect_1("level78_11"), this.playStepAnimation(t, e, () => {
      this.finishStep(t, e);
    });
  }
  finishStep(t, e) {
    !this.isActionLive(e) || this.phase >= 2 || (this.pendingStep = 0, this.applyStepResult(t), this.completedSteps.add(t), this.hasInstallNum = this.completedSteps.size, __rea_outer_I.getInstance().refreshGameProgress(), this.completedSteps.size >= F ? this.enterPhase2Success() : this.setInputLocked(!1));
  }
  playStepAnimation(t, e, i) {
    switch (t) {
      case 1:
        return void this.playShower(e, i);
      case 2:
        return void this.playShovel(e, i);
      case 3:
        return __rea_outer_S.playEffect_1(O), void this.playClockwiseOrbit(["frame_3_water"], e, i, !0);
      case 4:
        return void this.playHand(i);
      case 5:
        return void this.playSaw(e, i);
      case 6:
        return void this.playPolish(e, i);
      case 7:
        return void this.playPinch(J, Q, Q, "bottom-center", e, i);
      case 8:
        return void this.playPinch(j, this.getSmallStoneNames(), [], "top-left", e, i);
      case 9:
        return __rea_outer_S.playEffect_1("level78_8"), void this.playClockwiseOrbit(["frame_9_potion"], e, i);
      case 10:
        return void this.playOintment(0, e, i);
      case 11:
        return void this.playBandage(e, i);
      default:
        return void i();
    }
  }
  playShower(t, e) {
    this.showAtOrigin("frame_1_shower"), __rea_outer_S.playEffect_1(O), this.wait(t, .7, () => {
      this.hideAndRestore("frame_1_shower"), e();
    });
  }
  playShovel(t, e) {
    this.playShovelStab(0, t, () => {
      this.hideAndRestore("frame_2_shovel"), this.setNodeActive(this.getNode("leg_1"), !1), Y.forEach(t => {
        this.showAtOrigin(t);
      }), this.fadeOutNames(K, .5, t, () => {
        this.wait(t, .5, () => {
          this.isActionLive(t) && this.playBlackTransition(() => {
            this.isActionLive(t) && this.applyStepResult(2);
          }, () => {
            this.isActionLive(t) && e();
          });
        });
      });
    });
  }
  playShovelStab(t, e, i) {
    if (!this.isActionLive(e)) return;
    if (t >= 4) return void i();
    const s = this.showAtOrigin("frame_2_shovel"),
      n = this.getShovelStab(t);
    if (null == s || !s.isValid || !n) return void this.playShovelStab(t + 1, e, i);
    const h = n.bottom,
      l = n.top,
      a = .0875;
    s.setPosition(l), __rea_outer_o(s).to(a, {
      position: h
    }).call(() => {
      this.isActionLive(e) && __rea_outer_S.playEffect_1(O);
    }).to(a, {
      position: l
    }).call(() => {
      this.isActionLive(e) && this.playShovelStab(t + 1, e, i);
    }).start();
  }
  getShovelStab(t) {
    var e;
    const s = (null == (e = this.gameNode) ? void 0 : e.getChildByPath("clicks/touch-2")) ?? null,
      o = s ? this.getNodeRectInGame(s) : null;
    if (!o) {
      const e = this.originByName.get(K[t]);
      return e ? {
        bottom: e.clone(),
        top: new __rea_outer_i(e.x, e.y + 80, e.z)
      } : null;
    }
    const n = (o.maxY - o.minY) / 4,
      h = .5 * (o.minX + o.maxX),
      l = o.maxY - n * t;
    return {
      top: new __rea_outer_i(h, l, 0),
      bottom: new __rea_outer_i(h, l - n, 0)
    };
  }
  playHand(t) {
    this.stopHoofShake();
    const e = this.showAtOrigin("frame_4_hand");
    null != e && e.isValid && (this.rememberSibling("frame_4_hand"), this.raiseAbove(e, ["hoof_1"]), e.active = !1, this.restoreRememberedSiblings(["frame_4_hand"])), t();
  }
  playSaw(t, e) {
    const s = this.showAtOrigin("frame_5_saw");
    null != s && s.isValid ? (s.setPosition(G), __rea_outer_S.playEffect_1("level78_4"), __rea_outer_S.playEffect_1("level78_5"), __rea_outer_o(s).to(.5, {
      position: new __rea_outer_i(W.x, W.y, s.position.z)
    }).call(() => {
      this.isActionLive(t) && (this.hideAndRestore("frame_5_saw"), this.setNodeActive(this.getNode("hoof_1"), !1), this.playSplinterSpread(t, e));
    }).start()) : this.playSplinterSpread(t, e);
  }
  playSplinterSpread(t, e) {
    this.showAtOrigin("hoof_9");
    let s = q.length;
    const n = () => {
      s -= 1, s <= 0 && this.isActionLive(t) && e();
    };
    q.forEach(t => {
      const e = this.showAtOrigin(t),
        s = this.originByName.get(t);
      if (null == e || !e.isValid || !s) return void n();
      const h = s.x - X.x,
        l = s.y - X.y,
        a = Math.hypot(h, l) || 1,
        r = new __rea_outer_i(s.x + h / a * 80, s.y + l / a * 80, s.z),
        d = __rea_outer_k(e);
      d.opacity = 255, __rea_outer_o(e).to(.5, {
        position: r
      }).start(), __rea_outer_o(d).to(.5, {
        opacity: 0
      }).call(() => {
        this.hideAndRestore(t), n();
      }).start();
    });
  }
  playPolish(t, e) {
    const s = this.showAtOrigin("frame_6_polish"),
      n = this.showAtOrigin("frame_6_polish_1");
    null != s && s.isValid ? (s.setPosition(G), s.angle = 0, this.placePolishSpark(s, n), __rea_outer_S.playEffect_1(R, void 0, !0), __rea_outer_o(s).to(.5, {
      position: new __rea_outer_i(W.x, W.y, s.position.z)
    }, {
      onUpdate: () => {
        this.placePolishSpark(s, n);
      }
    }).call(() => {
      this.isActionLive(t) && (__rea_outer_S.stopOneEffect(R), this.hideAndRestore("frame_6_polish"), this.hideAndRestore("frame_6_polish_1"), e());
    }).start()) : e();
  }
  placePolishSpark(t, e) {
    null != e && e.isValid && t.isValid && (e.angle = 0, e.setPosition(t.position.x + 98.5, t.position.y + -265, t.position.z));
  }
  playPinch(t, e, i, s, o, n) {
    t.forEach(t => {
      this.rememberSibling(t);
    }), this.playPinchAt(t, e, i, s, 0, 0, o, n);
  }
  playPinchAt(t, e, i, s, o, n, h, l) {
    if (!this.isActionLive(h)) return;
    if (o >= e.length) return t.forEach(t => {
      this.hideAndRestore(t);
    }), this.restoreRememberedSiblings(t), void l();
    if (n >= t.length) return this.setNodeActive(this.getNode(e[o]), !1), void this.playPinchAt(t, e, i, s, o + 1, 0, h, l);
    const a = t[n],
      r = this.showAtOrigin(a),
      d = this.getNode(e[o]);
    if (null != r && r.isValid && null != d && d.isValid) {
      const t = this.getNodeCenterInGame(d);
      this.placeToolAt(r, t, s), this.rememberSibling(a), i.length > 0 && this.raiseAbove(r, i), __rea_outer_S.playEffect_1("level78_7");
    }
    this.wait(h, .5, () => {
      this.setNodeActive(r, !1), this.playPinchAt(t, e, i, s, o, n + 1, h, l);
    });
  }
  playOintment(t, e, s) {
    if (!this.isActionLive(e)) return;
    if (t >= tt.length) return this.hideAndRestore("frame_10_ointment"), void s();
    const n = tt[t],
      h = this.getNode(n),
      l = this.showAtOrigin("frame_10_ointment");
    if (null == l || !l.isValid || null == h || !h.isValid) return this.showAtOrigin(n), __rea_outer_S.playEffect_1(M), void this.playOintment(t + 1, e, s);
    const a = h.position.clone();
    l.setPosition(a);
    const r = new __rea_outer_i(a.x + 40, a.y, a.z);
    __rea_outer_o(l).to(.5, {
      position: r
    }).call(() => {
      this.isActionLive(e) && (this.hideAndRestore("frame_10_ointment"), this.showAtOrigin(n), __rea_outer_S.playEffect_1(M), this.playOintment(t + 1, e, s));
    }).start();
  }
  playBandage(t, e) {
    const i = this.showAtOrigin("frame_11_bandage");
    null != i && i.isValid ? (i.setPosition(U, -386, i.position.z), this.playBandagePass(0, t, e)) : e();
  }
  playBandagePass(t, e, s) {
    if (!this.isActionLive(e)) return;
    const n = this.getNode("frame_11_bandage");
    if (null == n || !n.isValid) return void s();
    const h = t % 2 == 0 ? 384.5 : U;
    __rea_outer_o(n).to(.5, {
      position: new __rea_outer_i(h, -386, n.position.z)
    }).call(() => {
      if (this.isActionLive(e)) {
        if (this.showAtOrigin(et[t]), __rea_outer_S.playEffect_1("level78_10"), t >= et.length - 1) return this.hideAndRestore("frame_11_bandage"), void s();
        this.playBandagePass(t + 1, e, s);
      }
    }).start();
  }
  playClockwiseOrbit(t, e, s, n = !1) {
    const h = [],
      l = [];
    if (t.forEach(t => {
      const e = this.showAtOrigin(t),
        s = this.originByName.get(t);
      null != e && e.isValid && s && (h.push(e), l.push(new __rea_outer_i(s.x - X.x, s.y - X.y, 0)));
    }), 0 === h.length) return void s();
    this.stopMotion();
    const a = {
      value: 0
    };
    this.motionDriver = a, __rea_outer_o(a).to(.7, {
      value: 1
    }, {
      onUpdate: () => {
        this.isActionLive(e) && this.placeOrbitNodes(h, l, a.value, n);
      }
    }).call(() => {
      this.motionDriver === a && (this.motionDriver = null), this.isActionLive(e) && (t.forEach(t => {
        this.hideAndRestore(t);
      }), s());
    }).start();
  }
  placeOrbitNodes(t, e, i, s) {
    const o = i * Math.PI * 2,
      n = Math.cos(o),
      h = Math.sin(o);
    t.forEach((t, i) => {
      if (null == t || !t.isValid) return;
      const o = e[i],
        l = o.x * n + o.y * h,
        a = -o.x * h + o.y * n;
      t.setPosition(X.x + l, X.y + a, t.position.z), s && (t.angle = 0);
    });
  }
  applyStepResult(t) {
    switch (t) {
      case 1:
        return this.hideAndRestore("frame_1_shower"), this.setNodeActive(this.getNode("leg"), !1), void this.showAtOrigin("leg_1");
      case 2:
        return this.hideAndRestore("frame_2_shovel"), this.hideNodes(Z), this.showAtOrigin("bg_2"), void this.showAtOrigin("hoof");
      case 3:
        return this.hideAndRestore("frame_3_water"), this.setNodeActive(this.getNode("hoof"), !1), this.showAtOrigin("hoof_1"), void this.startHoofShake();
      case 4:
        return this.hideAndRestore("frame_4_hand"), this.restoreRememberedSiblings(["frame_4_hand"]), void this.stopHoofShake();
      case 5:
        return this.stopHoofShake(), this.hideAndRestore("frame_5_saw"), this.setNodeActive(this.getNode("hoof_1"), !1), q.forEach(t => {
          this.hideAndRestore(t);
        }), void this.showAtOrigin("hoof_9");
      case 6:
        return __rea_outer_S.stopOneEffect(R), this.hideAndRestore("frame_6_polish"), this.hideAndRestore("frame_6_polish_1"), this.setNodeActive(this.getNode("hoof_9"), !1), this.showAtOrigin("hoof_10"), this.showAtOrigin("stone_1"), this.showAtOrigin("stone_2"), void this.showSmallStones();
      case 7:
        return this.restoreRememberedSiblings(J), J.forEach(t => {
          this.hideAndRestore(t);
        }), void this.hideNodes(Q);
      case 8:
        return j.forEach(t => {
          this.hideAndRestore(t);
        }), void this.getSmallStoneNames().forEach(t => {
          this.setNodeActive(this.getNode(t), !1);
        });
      case 9:
        return this.hideAndRestore("frame_9_potion"), this.setNodeActive(this.getNode("hoof_10"), !1), void this.showAtOrigin("hoof_11");
      case 10:
        return this.hideAndRestore("frame_10_ointment"), void tt.forEach(t => {
          this.showAtOrigin(t);
        });
      case 11:
        return this.hideAndRestore("frame_11_bandage"), void et.forEach(t => {
          this.showAtOrigin(t);
        });
      default:
        return;
    }
  }
  showSmallStones() {
    this.setNodeActive(this.getNode("石头"), !0), this.getSmallStoneNames().forEach(t => {
      this.showAtOrigin(t);
    });
  }
  getSmallStoneNames() {
    const t = [];
    for (let e = 1; e <= 16; e += 1) t.push(`stone${e}`);
    return t;
  }
  isStepAllowed(t) {
    return this.getAllowedSteps().includes(t);
  }
  getAllowedSteps() {
    for (let t = 1; t <= 6; t += 1) if (!this.completedSteps.has(t)) return [t];
    const t = [];
    if (this.completedSteps.has(7) || t.push(7), this.completedSteps.has(8) || t.push(8), t.length > 0) return t;
    for (let t = 9; t <= F; t += 1) if (!this.completedSteps.has(t)) return [t];
    return [];
  }
  getHintStep() {
    const t = this.getAllowedSteps();
    return 0 === t.length ? null : Math.min(...t);
  }
  showIntroPrompt() {
    this.promptLabel && (this.promptLabel.string = this.resolveI18nText(E)), this.setNodeActive(this.promptBoxNode, !0);
  }
  resolveI18nText(t) {
    const e = __rea_outer__.getInstance().getKey(t);
    return e && e !== t ? e : t;
  }
  playSettlementSound(t, e) {
    this.settlementToken += 1;
    const i = this.settlementToken;
    __rea_outer_S.playEffect_1(t, () => {
      this.isValid && i === this.settlementToken && 2 === this.phase && this.scheduleOnce(() => {
        this.isValid && i === this.settlementToken && 2 === this.phase && e();
      }, 1);
    });
  }
  setInputLocked(t) {
    if (this.isInputLocked = t, !t) return void this.hideBlackMask();
    const e = this.backBgNode;
    if (null == e || !e.isValid) return;
    e.active = !0;
    const i = e.getComponent(__rea_outer_n);
    i && (i.color = new __rea_outer_d(0, 0, 0, 0)), __rea_outer_V(e, 0);
  }
  playBlackTransition(t, e) {
    const i = this.backBgNode;
    if (null == i || !i.isValid) return t(), void e();
    this.stopTweenIfValid(i), i.active = !0, this.bringToFront(i);
    const s = i.getComponent(__rea_outer_n);
    s && (s.color = new __rea_outer_d(0, 0, 0, 255));
    const h = __rea_outer_k(i);
    h.opacity = 0, __rea_outer_o(h).to(.5, {
      opacity: 255
    }).call(() => {
      this.isValid && i.isValid && (t(), __rea_outer_o(h).to(.5, {
        opacity: 0
      }).call(() => {
        i.isValid && (__rea_outer_V(i, 0), null != s && s.isValid && (s.color = new __rea_outer_d(0, 0, 0, 0)), i.active = !1, e());
      }).start());
    }).start();
  }
  hideBlackMask() {
    const t = this.backBgNode;
    if (null == t || !t.isValid || !t.active) return;
    this.stopTweenIfValid(t), __rea_outer_V(t, 0);
    const e = t.getComponent(__rea_outer_n);
    e && (e.color = new __rea_outer_d(0, 0, 0, 0)), t.active = !1;
  }
  showAtOrigin(t) {
    const e = this.getNode(t);
    return null != e && e.isValid ? (this.stopTweenIfValid(e), this.restoreAnimNode(e, t), __rea_outer_V(e, 255), e.active = !0, e) : null;
  }
  hideAndRestore(t) {
    const e = this.getNode(t);
    null != e && e.isValid && (this.stopTweenIfValid(e), this.restoreAnimNode(e, t), __rea_outer_V(e, 255), e.active = !1);
  }
  hideNodes(t) {
    t.forEach(t => {
      this.setNodeActive(this.getNode(t), !1);
    });
  }
  hideFollowerIcons() {
    for (let t = 1; t <= 11; t += 1) this.setNodeActive(this.getNode(`frame_${t}`), !1);
  }
  restoreAnimNode(t, e) {
    const i = this.originByName.get(e);
    i && t.setPosition(i), t.angle = 0;
  }
  fadeOutNames(t, e, i, s) {
    let n = t.length;
    if (0 === n) return void s();
    const h = () => {
      n -= 1, n <= 0 && this.isActionLive(i) && s();
    };
    t.forEach(t => {
      const i = this.getNode(t);
      if (null == i || !i.isValid || !i.active) return void h();
      const s = __rea_outer_k(i);
      s.opacity = 255, __rea_outer_o(s).to(e, {
        opacity: 0
      }).call(() => {
        this.setNodeActive(i, !1), h();
      }).start();
    });
  }
  wait(t, e, i) {
    this.scheduleOnce(() => {
      this.isActionLive(t) && i();
    }, e);
  }
  isActionLive(t) {
    return this.isValid && t === this.actionToken && this.phase < 2;
  }
  startHoofShake() {
    this.stopHoofShake(), this.shakeToken += 1, this.playHoofShakeStep(this.shakeToken, 0);
  }
  stopHoofShake() {
    this.shakeToken += 1;
    const t = this.getNode("hoof_1");
    this.stopTweenIfValid(t);
    const e = this.originByName.get("hoof_1");
    null != t && t.isValid && e && t.setPosition(e);
  }
  playHoofShakeStep(t, e) {
    if (t !== this.shakeToken || !this.isValid || this.phase >= 2) return;
    const s = this.getNode("hoof_1"),
      n = this.originByName.get("hoof_1");
    if (null == s || !s.isValid || !n || !s.active) return;
    const h = it[e % it.length],
      l = new __rea_outer_i(n.x + h.x, n.y + h.y, n.z);
    __rea_outer_o(s).to(.5, {
      position: l
    }).call(() => {
      this.playHoofShakeStep(t, e + 1);
    }).start();
  }
  placeToolAt(t, e, i) {
    "top-left" !== i ? "bottom-center" !== i ? t.setPosition(e) : this.placeBottomCenterAt(t, e) : this.placeTopLeftAt(t, e);
  }
  placeBottomCenterAt(t, e) {
    const i = t.getComponent(__rea_outer_l);
    if (!i) return void t.setPosition(e);
    const s = (.5 - i.anchorX) * i.width,
      o = -i.anchorY * i.height;
    t.setPosition(e.x - s, e.y - o, e.z);
  }
  placeTopLeftAt(t, e) {
    const i = t.getComponent(__rea_outer_l);
    if (!i) return void t.setPosition(e);
    const s = -i.anchorX * i.width,
      o = (1 - i.anchorY) * i.height;
    t.setPosition(e.x - s, e.y - o, e.z);
  }
  getNodeRectInGame(t) {
    var e;
    const s = t.getComponent(__rea_outer_l),
      o = (null == (e = this.gameNode) ? void 0 : e.getComponent(__rea_outer_l)) ?? null;
    if (!s || !o) return null;
    const n = s.getBoundingBoxToWorld(),
      h = o.convertToNodeSpaceAR(new __rea_outer_i(n.x, n.y, 0)),
      a = o.convertToNodeSpaceAR(new __rea_outer_i(n.x + n.width, n.y + n.height, 0));
    return {
      minX: Math.min(h.x, a.x),
      maxX: Math.max(h.x, a.x),
      minY: Math.min(h.y, a.y),
      maxY: Math.max(h.y, a.y)
    };
  }
  getNodeCenterInGame(t) {
    var e;
    const s = t.getComponent(__rea_outer_l),
      o = (null == (e = this.gameNode) ? void 0 : e.getComponent(__rea_outer_l)) ?? null;
    if (!s || !o) return t.position.clone();
    const n = s.convertToWorldSpaceAR(new __rea_outer_i(0, 0, 0));
    return o.convertToNodeSpaceAR(n);
  }
  liftDraggedItem(t) {
    var e;
    const i = this.draggedItem,
      s = i ? this.getFollowerNode(i.toolId) : null;
    null != i && null != (e = i.itemNode) && e.isValid && null != s && s.isValid && (this.followerNode !== s && (this.parkFollower(), this.hideSlotIcon(i), this.followerNode = s, this.stopTweenIfValid(s), this.restoreAnimNode(s, s.name), __rea_outer_V(s, 255), s.active = !0, this.liftNodeToTop(s)), this.setNodeToTouch(s, t));
  }
  moveDraggedItem(t) {
    this.setNodeToTouch(this.followerNode, t);
  }
  isDragLifted() {
    var t;
    return !(null == (t = this.followerNode) || !t.isValid) && this.followerNode.active;
  }
  returnDraggedItem() {
    const t = this.draggedItem;
    this.draggedItem = null, this.parkFollower(), this.showSlotIcon(t);
  }
  getFollowerNode(t) {
    return this.getNode(`frame_${t}`);
  }
  hideSlotIcon(t) {
    this.setNodeActive(this.getSlotIcon(t), !1);
  }
  showSlotIcon(t) {
    this.setNodeActive(this.getSlotIcon(t), !0);
  }
  getSlotIcon(t) {
    var e;
    return null != t && null != (e = t.itemNode) && e.isValid ? t.itemNode.getChildByName(D) : null;
  }
  parkFollower() {
    const t = this.followerNode;
    this.followerNode = null, this.restoreLiftedNode(t), null != t && t.isValid && (this.stopTweenIfValid(t), this.restoreAnimNode(t, t.name), t.active = !1);
  }
  setNodeToTouch(t, e) {
    if (null == t || !t.isValid) return;
    const s = t.parent,
      o = (null == s ? void 0 : s.getComponent(__rea_outer_l)) ?? null,
      n = new __rea_outer_i(e.x, e.y, 0);
    null != s && s.isValid && o ? t.setPosition(o.convertToNodeSpaceAR(n)) : t.setWorldPosition(n);
  }
  liftNodeToTop(t) {
    if (this.liftedLayer && this.followerNode === t && t.parent === this.node) return void t.setSiblingIndex(this.node.children.length - 1);
    this.restoreLiftedNode(t);
    const e = t.parent;
    null != e && e.isValid && (this.liftedLayer = {
      parent: e,
      siblingIndex: t.getSiblingIndex()
    }, t.setParent(this.node), t.setSiblingIndex(this.node.children.length - 1));
  }
  restoreLiftedNode(t) {
    var e;
    const i = this.liftedLayer;
    if (this.liftedLayer = null, null == t || !t.isValid || null == i || null == (e = i.parent) || !e.isValid) return;
    t.setParent(i.parent);
    const s = Math.max(0, i.parent.children.length - 1);
    t.setSiblingIndex(Math.min(i.siblingIndex, s));
  }
  isFollowerCenterInsideZone() {
    return __rea_outer_v.isDragNearTarget(this.followerNode, this.touchZone);
  }
  findToolAtPoint(t) {
    for (let e = this.toolItems.length - 1; e >= 0; e -= 1) {
      const i = this.toolItems[e];
      if (this.isPointInsideNode(i.itemNode, t)) return i;
    }
    return null;
  }
  createShuffledToolIds() {
    const t = [];
    for (let e = 1; e <= 11; e += 1) t.push(e);
    for (let e = t.length - 1; e > 0; e -= 1) {
      const i = Math.floor(Math.random() * (e + 1)),
        s = t[e];
      t[e] = t[i], t[i] = s;
    }
    return t;
  }
  loadSpriteFrame(t, e) {
    const i = __rea_outer_c.getBundle(H);
    if (!i) return console.warn("[Level_78] missing bundle Level_78"), void e(null);
    i.load(`${t}/spriteFrame`, __rea_outer_p, (i, s) => {
      if (this.isValid) return i || !s ? (console.warn(`[Level_78] failed to load ${t}`, i), void e(null)) : void e(s);
    });
  }
  computeScrollBounds() {
    var t;
    const e = this.contentNode,
      i = this.viewNode;
    if (null == e || !e.isValid || null == i || !i.isValid) return;
    const s = new Set();
    null != (t = this.demoTemplateNode) && t.isValid && s.add(this.demoTemplateNode);
    const o = __rea_outer_C(e, i, {
      excludedNodes: s
    });
    o && (this.contentScrollBounds = o, this.applyContentScroll(e.position.x, !1));
  }
  applyContentScroll(t, e = !0) {
    const i = this.contentNode;
    null != i && i.isValid && __rea_outer_L(i, t, this.contentScrollBounds, e, .2);
  }
  snapBackContentScroll() {
    const t = this.contentNode;
    null != t && t.isValid && __rea_outer_P(t, this.contentScrollBounds, .3);
  }
  isPointInsideNode(t, e) {
    if (null == t || !t.isValid || !t.activeInHierarchy) return !1;
    const i = t.getComponent(__rea_outer_l);
    return !!i && i.getBoundingBoxToWorld().contains(e);
  }
  getTouchWorldPoint(t) {
    const e = t.getUILocation();
    return new __rea_outer_s(e.x, e.y);
  }
  rememberSibling(t) {
    if (this.raisedSiblings.has(t)) return;
    const e = this.getNode(t);
    null != e && e.isValid && this.raisedSiblings.set(t, e.getSiblingIndex());
  }
  restoreRememberedSiblings(t) {
    t.forEach(t => {
      const e = this.raisedSiblings.get(t);
      this.restoreSibling(this.getNode(t), e), this.raisedSiblings.delete(t);
    });
  }
  raiseAbove(t, e) {
    const i = t.parent;
    if (null == i || !i.isValid) return;
    let s = -1;
    e.forEach(t => {
      const e = this.getNode(t);
      null != e && e.isValid && e.parent === i && (s = Math.max(s, e.getSiblingIndex()));
    }), s >= 0 && t.getSiblingIndex() < s && t.setSiblingIndex(s);
  }
  restoreSibling(t, e) {
    var i;
    if (null == t || !t.isValid || void 0 === e || null == (i = t.parent) || !i.isValid) return;
    const s = Math.max(0, t.parent.children.length - 1);
    t.setSiblingIndex(Math.min(e, s));
  }
  bringToFront(t) {
    var e;
    null != t && t.isValid && null != (e = t.parent) && e.isValid && t.setSiblingIndex(t.parent.children.length - 1);
  }
  setNodeActive(t, e) {
    null != t && t.isValid && (t.active = e);
  }
  stopTweenIfValid(t) {
    null != t && t.isValid && __rea_outer_b(t);
  }
  stopMotion() {
    this.motionDriver && (__rea_outer_u.stopAllByTarget(this.motionDriver), this.motionDriver = null);
  }
  stopPresentation() {
    this.stopMotion(), this.stopHoofShake(), this.stopCachedTweens(), __rea_outer_S.stopAllEffects();
  }
  stopCachedTweens() {
    this.nodeByName.forEach(t => {
      this.stopTweenIfValid(t);
    }), this.stopTweenIfValid(this.backBgNode), this.stopTweenIfValid(this.contentNode), this.stopTweenIfValid(this.followerNode);
  }
  getNode(t) {
    return this.nodeByName.get(t) ?? null;
  }
  cacheNode(t) {
    if (null == t || !t.isValid) return;
    const e = this.nodeByName.get(t.name);
    e && e !== t ? console.warn(`[Level_78] duplicate node name ${t.name}`) : e || (this.nodeByName.set(t.name, t), this.originByName.set(t.name, t.position.clone()));
  }
  cacheTree(t) {
    null == t || t.children.forEach(t => {
      this.cacheNode(t), this.cacheTree(t);
    });
  }
  resolveReferences() {
    var t, e, i, s, o, n, h, l, r;
    this.gameNode = this.node.getChildByPath("UIPanel/gameNode"), this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.nodeByName.clear(), this.originByName.clear(), this.cacheTree(this.gameNode), this.clickRootNode = (null == (t = this.gameNode) ? void 0 : t.getChildByPath("click_root")) ?? null, this.contentNode = (null == (e = this.clickRootNode) ? void 0 : e.getChildByPath("bg/ScrollView/view/content")) ?? null, this.viewNode = (null == (i = this.contentNode) ? void 0 : i.parent) ?? null, this.demoTemplateNode = (null == (s = this.contentNode) ? void 0 : s.getChildByName("demo")) ?? null, this.scrollView = (null == (o = this.clickRootNode) || null == (o = o.getChildByPath("bg/ScrollView")) ? void 0 : o.getComponent(__rea_outer_g)) ?? null, this.contentLayout = (null == (n = this.contentNode) ? void 0 : n.getComponent(__rea_outer_a)) ?? null, this.touchZone = (null == (h = this.gameNode) ? void 0 : h.getChildByPath("clicks/touch")) ?? null, this.promptBoxNode = this.getNode("prompt_box"), this.promptLabel = (null == (l = this.promptBoxNode) || null == (l = l.getChildByName("Label")) ? void 0 : l.getComponent(__rea_outer_m)) ?? null, this.heartNodes.length = 0, $.forEach(t => {
      this.heartNodes.push(this.getNode(t));
    }), this.warnIfMissing("UIPanel/gameNode", this.gameNode), this.warnIfMissing("UIPanel/gameNode/click_root", this.clickRootNode), this.warnIfMissing("content/demo", this.demoTemplateNode), this.warnIfMissing("UIPanel/gameNode/clicks/touch", this.touchZone), this.warnIfMissing("UIPanel/gameNode/clicks/touch-2", (null == (r = this.gameNode) ? void 0 : r.getChildByPath("clicks/touch-2")) ?? null), this.warnIfMissing("prompt_box", this.promptBoxNode), this.warnIfMissing("组 1/heart3", this.getNode("heart3")), this.warnIfMissing("组 2/frame_1", this.getNode("frame_1"));
  }
  warnIfMissing(t, e) {
    e || console.warn(`[Level_78] missing ${t}`);
  }
  cleanupRuntime() {
    this.unscheduleAllCallbacks(), this.unbindInputHandlers(), this.voiceToken += 1, this.actionToken += 1, this.shakeToken += 1, this.settlementToken += 1, this.stopMotion(), this.stopCachedTweens(), this.clearToolItems();
  }
}) || B;
__rea_outer_e._RF.pop();
export { __recovered_export_0 as default };
