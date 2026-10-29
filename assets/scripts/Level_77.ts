// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_77.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_e } from "cc";
import { Vec2 as __rea_outer_i } from "cc";
import { tween as __rea_outer_s } from "cc";
import { Sprite as __rea_outer_o } from "cc";
import { instantiate as __rea_outer_n } from "cc";
import { UITransform as __rea_outer_h } from "cc";
import { Layout as __rea_outer_l } from "cc";
import { Node as __rea_outer_a } from "cc";
import { Color as __rea_outer_r } from "cc";
import { Vec3 as __rea_outer_d } from "cc";
import { assetManager as __rea_outer_c } from "cc";
import { SpriteFrame as __rea_outer_u } from "cc";
import { Tween as __rea_outer_p } from "cc";
import { ScrollView as __rea_outer_N } from "cc";
import { Label as __rea_outer_m } from "cc";
import { _decorator as __rea_outer_g } from "cc";
import { default as __rea_outer_v } from "./LevelBase";
import { default as __rea_outer_f } from "./clue-hit-tester";
import { default as __rea_outer__ } from "./AudioManager";
import { I18nController as __rea_outer_I } from "./i18n-controller";
import { UIManager as __rea_outer_y } from "./ui-manager";
import { UILayer as __rea_outer_A } from "./ui-layer";
import { UIHint as __rea_outer_T } from "./uihint";
import { UIFail as __rea_outer_w } from "./uifail";
import { GameController as __rea_outer_S } from "./GameController";
import { stopAllTweens as __rea_outer_b } from "./CocosCompat";
import { getUIOpacity as __rea_outer_C } from "./CocosCompat";
import { setNodeOpacity as __rea_outer_k } from "./CocosCompat";
import { computeContentHorizontalScrollBounds as __rea_outer_V } from "./content-horizontal-scroll";
import { applyContentHorizontalScroll as __rea_outer_P } from "./content-horizontal-scroll";
import { snapBackContentHorizontalScroll as __rea_outer_L } from "./content-horizontal-scroll";
let __recovered_export_0;
var B;
__rea_outer_e._RF.push({}, "45018eoj1RD+4YpuBu3BdTm", "Level_77", void 0);
const {
    ccclass: x
  } = __rea_outer_g,
  F = "Level_77",
  M = 13,
  E = 176,
  H = "showpic",
  D = ["hear3", "heart2", "heart1"],
  O = new Set(["bg_1", "eye_bags", "frame_1_soil", "frame_2_abrasion", "pustule", "sleep", "frame_12_eyebrows"]),
  U = ["frame_1_1", "frame_2_1", "frame_3_1", "frame_4_1", "frame_5_1", "frame_5_2", "frame_6_1", "frame_7_1", "frame_8_1", "frame_9_1", "frame_10_1", "frame_11_1", "frame_11_water", "frame_12_1", "frame_13_1"],
  R = ["heart_bg", "heart1", "heart2", "hear3", "heart_end", "star1", "star2", "star3", "star4", "end_1", "end_2", "bg"],
  G = {
    2: {
      toolName: "frame_2_1",
      centerName: "frame_2_abrasion",
      radius: 179.5,
      duration: .7
    },
    3: {
      toolName: "frame_3_1",
      centerName: "pustule",
      radius: 210.5,
      duration: .7
    },
    5: {
      toolName: "frame_5_1",
      centerName: "frame_5_pustule",
      radius: 47,
      duration: 1
    },
    7: {
      toolName: "frame_7_1",
      centerName: "frame_6_pustule",
      radius: 183.5,
      duration: .5
    },
    8: {
      toolName: "frame_8_1",
      centerName: "sleep",
      radius: 249,
      duration: .7
    },
    9: {
      toolName: "frame_9_1",
      centerName: "frame_8_glue",
      radius: 466,
      duration: .7
    }
  };
var z = function (t) {
  return t[t.None = 0] = "None", t[t.Toolbar = 1] = "Toolbar", t;
}(z || {});
__recovered_export_0 = x("Level_77")(B = class extends __rea_outer_v {
  constructor(...t) {
    super(...t), this.phase = 0, this.winstate = !1, this.gameNode = null, this.faceGroup = null, this.clickRootNode = null, this.backBgNode = null, this.promptBoxNode = null, this.promptLabel = null, this.contentNode = null, this.viewNode = null, this.demoTemplateNode = null, this.scrollView = null, this.contentLayout = null, this.touchZone = null, this.touch10Node = null, this.touch12Node = null, this.touch13Node = null, this.nodeByName = new Map(), this.originByName = new Map(), this.toolItems = [], this.completedSteps = new Set(), this.heartNodes = [], this.heartFullFrame = null, this.heartBrokenFrame = null, this.brokenHeartCount = 0, this.isInputLocked = !1, this.voiceToken = 0, this.actionToken = 0, this.motionDriver = null, this.contentScrollBounds = {
      minX: 0,
      maxX: 0
    }, this.touchSessionKind = z.None, this.touchStartPoint = new __rea_outer_i(), this.scrollStartContentX = 0, this.isContentScrolling = !1, this.draggedItem = null, this.followerNode = null, this.liftedLayer = null, this.isHandlersBound = !1, this.onLevelTouchStart = t => {
      var e, i;
      if (1 !== this.phase || this.isInputLocked) return;
      null != (e = this.contentNode) && e.isValid && __rea_outer_b(this.contentNode);
      const s = this.getTouchWorldPoint(t);
      this.touchStartPoint = s, this.scrollStartContentX = (null == (i = this.contentNode) ? void 0 : i.position.x) ?? 0, this.isContentScrolling = !1, this.draggedItem = null, this.isPointInsideNode(this.viewNode, s) ? (this.touchSessionKind = z.Toolbar, this.draggedItem = this.findToolAtPoint(s)) : this.touchSessionKind = z.None;
    }, this.onLevelTouchMove = t => {
      if (1 !== this.phase || this.isInputLocked) return;
      if (this.touchSessionKind !== z.Toolbar) return;
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
      this.getTouchWorldPoint(t);
      if (this.touchSessionKind = z.None, this.isContentScrolling = !1, 1 === this.phase && !this.isInputLocked) return e ? (this.snapBackContentScroll(), void this.returnDraggedItem()) : void (i && this.isDragLifted() ? __rea_outer_f.isDragNearTarget(this.followerNode, this.touchZone) ? this.handleToolDropped(i) : this.returnDraggedItem() : this.draggedItem = null);
      this.returnDraggedItem();
    }, this.onLevelTouchCancel = () => {
      const t = this.isContentScrolling;
      this.touchSessionKind = z.None, this.isContentScrolling = !1, t && this.snapBackContentScroll(), this.returnDraggedItem();
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.allItemNum = M, this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.applyPhase0Visibility(), this.enterPhase0();
  }
  onDestroy() {
    this.cleanupRuntime(), super.onDestroy();
  }
  handleTimeExpired() {
    return 1 !== this.phase;
  }
  showHint() {
    if (1 !== this.phase || this.isInputLocked) return;
    const t = this.getHintStep();
    if (!t) return;
    const e = __rea_outer_I.getInstance().getKey(`level77_hint${t}`);
    __rea_outer_y.getInstance().showView(__rea_outer_T, void 0, {
      body: e
    });
  }
  getGameProgressSnapshot() {
    const t = Math.min(this.hasInstallNum, M);
    return {
      progress: t / M,
      label: `${t}/13`
    };
  }
  markAllTasksCompleted() {
    this.hasInstallNum = M, this.phase = 2, this.winstate = !0, this.isInputLocked = !0;
    for (let t = 1; t <= M; t += 1) this.completedSteps.add(t);
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.isInputLocked = !1, this.completedSteps.clear(), this.brokenHeartCount = 0, this.hasInstallNum = 0, this.allItemNum = M, this.voiceToken += 1, this.actionToken += 1, this.draggedItem = null, this.unscheduleAllCallbacks(), this.stopMotion(), this.stopCachedTweens(), this.clearToolItems(), __rea_outer__.stopVoice();
  }
  enterPhase0() {
    this.phase = 0, __rea_outer__.playMusic("bgm4", !0, .5), __rea_outer_S.getInstance().pauseTimer(), this.setInputLocked(!0), this.loadHeartFrames(), this.playDialogue("77_1", () => {
      this.hidePrompt(), this.scheduleOnce(() => {
        this.isValid && 0 === this.phase && this.beginIntroFade();
      }, .5);
    });
  }
  beginIntroFade() {
    this.showPhase1Face(), this.raiseBgAboveFace();
    const t = this.getNode("bg");
    if (null == t || !t.isValid) return void this.enterPhase1();
    const e = __rea_outer_C(t);
    e.opacity = 255, __rea_outer_s(e).to(.25, {
      opacity: 0
    }).call(() => {
      this.isValid && 0 === this.phase && (this.setNodeActive(t, !1), this.enterPhase1());
    }).start();
  }
  enterPhase1() {
    this.isValid && 0 === this.phase && (this.phase = 1, this.setInputLocked(!1), this.setNodeActive(this.clickRootNode, !0), this.showHearts(), this.populateToolbar(), this.bindInputHandlers(), __rea_outer_S.getInstance().resumeTimer(), __rea_outer_S.getInstance().refreshGameProgress(), this.scheduleOnce(() => {
      this.isValid && 1 === this.phase && this.refreshToolbarLayout();
    }, 0));
  }
  enterPhase2Success() {
    this.phase >= 2 || (this.phase = 2, this.winstate = !0, this.actionToken += 1, this.isInputLocked = !0, __rea_outer_S.getInstance().pauseTimer(), this.playBlackTransition(() => {
      this.isValid && 2 === this.phase && this.winstate && (this.hidePlayfield(), this.showInFront("end_2"), this.showInFront("star1"), this.showInFront("star2"), this.showInFront("star3"), this.showInFront("star4"), this.setNodeActive(this.getNode("heart_end"), !1));
    }, () => {
      this.isValid && 2 === this.phase && this.winstate && this.playDialogue("77_15", () => {
        this.isValid && this.winstate && this.showLevelSuccess(0);
      });
    }));
  }
  enterPhase2Fail() {
    this.phase >= 2 || (this.phase = 2, this.winstate = !1, this.actionToken += 1, this.isInputLocked = !0, __rea_outer_S.getInstance().pauseTimer(), this.playBlackTransition(() => {
      this.isValid && 2 === this.phase && !this.winstate && (this.hidePlayfield(), this.setNodeActive(this.getNode("end_1"), !0));
    }, () => {
      this.isValid && 2 === this.phase && !this.winstate && this.playDialogue("77_16", () => {
        this.isValid && !this.winstate && __rea_outer_y.getInstance().showView(__rea_outer_w, __rea_outer_A.WIN_ANIMATION);
      });
    }));
  }
  applyPhase0Visibility() {
    this.setNodeActive(this.gameNode, !0), this.setNodeActive(this.getNode("bg"), !0), this.setNodeActive(this.promptBoxNode, !0), this.setNodeActive(this.faceGroup, !1), this.setNodeActive(this.clickRootNode, !1), this.setNodeActive(this.node.getChildByPath("UIPanel/demo"), !1), this.setNodeActive(this.demoTemplateNode, !1), U.forEach(t => {
      this.setNodeActive(this.getNode(t), !1);
    });
    for (let t = 1; t <= 13; t += 1) this.setNodeActive(this.getNode(`frame_${t}`), !1);
    R.forEach(t => {
      "bg" !== t && this.setNodeActive(this.getNode(t), !1);
    });
    const t = this.getNode("bg");
    null != t && t.isValid && (__rea_outer_C(t).opacity = 255);
  }
  showPhase1Face() {
    var t;
    this.setNodeActive(this.faceGroup, !0), null == (t = this.faceGroup) || t.children.forEach(t => {
      t.active = O.has(t.name);
    });
  }
  raiseBgAboveFace() {
    var t;
    const e = this.getNode("bg");
    null != e && e.isValid && null != (t = e.parent) && t.isValid && e.setSiblingIndex(e.parent.children.length - 1);
  }
  hidePlayfield() {
    this.setNodeActive(this.faceGroup, !1), this.setNodeActive(this.clickRootNode, !1), U.forEach(t => {
      this.setNodeActive(this.getNode(t), !1);
    }), this.setNodeActive(this.getNode("heart_bg"), !1), this.setNodeActive(this.getNode("heart1"), !1), this.setNodeActive(this.getNode("heart2"), !1), this.setNodeActive(this.getNode("hear3"), !1), this.setNodeActive(this.getNode("end_1"), !1), this.setNodeActive(this.getNode("end_2"), !1), this.setNodeActive(this.getNode("star1"), !1), this.setNodeActive(this.getNode("star2"), !1), this.setNodeActive(this.getNode("star3"), !1), this.setNodeActive(this.getNode("star4"), !1), this.setNodeActive(this.getNode("heart_end"), !1);
  }
  showHearts() {
    this.setNodeActive(this.getNode("heart_bg"), !0), this.heartNodes.forEach(t => {
      this.setNodeActive(t, !0);
    }), this.applyHeartSprites();
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
      const i = null != t && t.isValid ? t.getComponent(__rea_outer_o) : null;
      if (!i) return;
      const s = e < this.brokenHeartCount ? this.heartBrokenFrame : this.heartFullFrame;
      s && (i.spriteFrame = s);
    });
  }
  breakNextHeart() {
    this.brokenHeartCount >= 3 || (this.brokenHeartCount += 1, this.applyHeartSprites());
  }
  populateToolbar() {
    this.clearToolItems(), this.setNodeActive(this.demoTemplateNode, !1);
    this.createShuffledToolIds().forEach(t => {
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
    const s = __rea_outer_n(i);
    s.name = `tool_${t}`, s.active = !0, s.setScale(1, 1, 1);
    const o = s.getComponent(__rea_outer_h);
    o && o.setContentSize(E, E), s.setParent(e);
    const l = {
      toolId: t,
      itemNode: s
    };
    return this.toolItems.push(l), l;
  }
  applyShowpicFrame(t, e) {
    var i;
    const s = null != t && t.isValid ? (null == (i = t.getChildByName(H)) ? void 0 : i.getComponent(__rea_outer_o)) ?? null : null;
    if (!s || !e) return;
    s.sizeMode = __rea_outer_o.SizeMode.CUSTOM, s.spriteFrame = e;
    const n = s.node.getComponent(__rea_outer_h);
    n && n.setContentSize(e.originalSize.width, e.originalSize.height);
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
      i = (null == t ? void 0 : t.getComponent(__rea_outer_h)) ?? null;
    if (this.toolItems.forEach(e => {
      var i;
      if (null == (i = e.itemNode) || !i.isValid || e.itemNode.parent !== t) return;
      e.itemNode.setScale(1, 1, 1);
      const s = e.itemNode.getComponent(__rea_outer_h);
      s && s.setContentSize(E, E);
    }), e && (e.resizeMode = __rea_outer_l.ResizeMode.CONTAINER, e.updateLayout()), i) {
      const t = this.toolItems.length,
        s = (null == e ? void 0 : e.paddingLeft) ?? 0,
        o = (null == e ? void 0 : e.paddingRight) ?? 0,
        n = (null == e ? void 0 : e.spacingX) ?? 16,
        h = s + o + E * t + n * Math.max(0, t - 1);
      i.setContentSize(Math.max(h, 0), i.height);
    }
    this.computeScrollBounds();
  }
  bindInputHandlers() {
    var t;
    null != (t = this.scrollView) && t.isValid && (this.scrollView.enabled = !1), this.isHandlersBound || (this.isHandlersBound = !0, this.node.on(__rea_outer_a.EventType.TOUCH_START, this.onLevelTouchStart, this), this.node.on(__rea_outer_a.EventType.TOUCH_MOVE, this.onLevelTouchMove, this), this.node.on(__rea_outer_a.EventType.TOUCH_END, this.onLevelTouchEnd, this), this.node.on(__rea_outer_a.EventType.TOUCH_CANCEL, this.onLevelTouchCancel, this));
  }
  unbindInputHandlers() {
    var t;
    this.isHandlersBound && null != (t = this.node) && t.isValid ? (this.node.off(__rea_outer_a.EventType.TOUCH_START, this.onLevelTouchStart, this), this.node.off(__rea_outer_a.EventType.TOUCH_MOVE, this.onLevelTouchMove, this), this.node.off(__rea_outer_a.EventType.TOUCH_END, this.onLevelTouchEnd, this), this.node.off(__rea_outer_a.EventType.TOUCH_CANCEL, this.onLevelTouchCancel, this), this.isHandlersBound = !1) : this.isHandlersBound = !1;
  }
  handleToolDropped(t) {
    this.isStepAllowed(t.toolId) ? (this.parkFollower(), this.removeToolItem(t), this.beginStep(t.toolId)) : this.handleWrongTool(t);
  }
  handleWrongTool(t) {
    this.setInputLocked(!0), __rea_outer__.playEffect_1("level77_1"), this.breakNextHeart(), this.returnDraggedItem();
    const e = this.brokenHeartCount >= 3;
    this.flashHeartEnd(() => {
      !this.isValid || this.phase >= 2 || (e ? this.enterPhase2Fail() : this.setInputLocked(!1));
    });
  }
  flashHeartEnd(t) {
    this.showInFront("heart_end"), this.scheduleOnce(() => {
      this.isValid && (this.setNodeActive(this.getNode("heart_end"), !1), t());
    }, .5);
  }
  beginStep(t) {
    this.actionToken += 1;
    const e = this.actionToken;
    this.setInputLocked(!0), __rea_outer__.playEffect_1("level77_5"), this.playStepAnimation(t, e, () => {
      this.finishStep(t, e);
    });
  }
  finishStep(t, e) {
    if (!this.isActionLive(e) || this.phase >= 2) return;
    this.applyStepResult(t), this.completedSteps.add(t), this.hasInstallNum = this.completedSteps.size, __rea_outer_S.getInstance().refreshGameProgress();
    const i = `77_${t + 1}`;
    if (this.completedSteps.size >= M) return this.playDialogue(i), void this.scheduleOnce(() => {
      !this.isValid || this.phase >= 2 || this.enterPhase2Success();
    }, 1);
    this.playDialogue(i, () => {
      this.hidePrompt();
    }), this.setInputLocked(!1);
  }
  playStepAnimation(t, e, i) {
    const s = G[t];
    if (s) this.playOrbit(s, e, () => {
      if (5 !== t) return void i();
      const s = this.showAtOrigin("frame_5_2");
      this.wait(e, .5, () => {
        this.setNodeActive(s, !1), i();
      });
    });else switch (t) {
      case 1:
        return void this.playShower(e, i);
      case 4:
        return void this.playPliers(e, i);
      case 6:
        return void this.playStill("frame_6_1", .7, e, i);
      case 10:
        return void this.playLens(e, i);
      case 11:
        return void this.playEyeDrops(e, i);
      case 12:
        return void this.playEdgeMove("frame_12_1", this.touch12Node, .7, e, i);
      case 13:
        return void this.playEyeCream(e, i);
      default:
        i();
    }
  }
  playShower(t, e) {
    this.showAtOrigin("frame_1_1"), __rea_outer__.playEffect_1("level77_3"), this.wait(t, .7, () => {
      this.setNodeActive(this.getNode("frame_1_1"), !1), e();
    });
  }
  playPliers(t, e) {
    const i = this.showAtOrigin("frame_4_1"),
      o = this.getNode("frame_3_pustule");
    if (!i || !o) return void e();
    const n = i.getComponent(__rea_outer_h);
    n && (n.anchorX = .5, n.anchorY = 1);
    const l = this.getTopCenterInGame(o);
    i.setPosition(l), __rea_outer__.playEffect_1("level77_4");
    const a = {
      value: 0
    };
    this.motionDriver = a;
    const r = .7 / 3,
      d = () => {
        i.isValid && i.setRotationFromEuler(0, 0, a.value);
      };
    __rea_outer_s(a).to(r, {
      value: 20
    }, {
      onUpdate: d
    }).to(r, {
      value: -20
    }, {
      onUpdate: d
    }).to(r, {
      value: 0
    }, {
      onUpdate: d
    }).call(() => {
      this.motionDriver === a && (this.motionDriver = null), this.isActionLive(t) && (this.restoreAnimNode(i, "frame_4_1"), this.setNodeActive(i, !1), e());
    }).start();
  }
  playStill(t, e, i, s) {
    const o = this.showAtOrigin(t);
    this.wait(i, e, () => {
      this.setNodeActive(o, !1), s();
    });
  }
  playLens(t, e) {
    const i = this.showAtOrigin("frame_10_1"),
      s = this.touch10Node ? this.getNodeCenterInGame(this.touch10Node) : null;
    i && s ? this.moveNode(i, s.x, s.y, .5, t, () => {
      this.setNodeActive(i, !1), this.setNodeActive(this.getNode("eyeball_1"), !1), this.setNodeActive(this.getNode("eyeball"), !0);
      const s = this.showAtOrigin("frame_10_eyeball");
      s ? this.moveNode(s, 865, 38.5, .5, t, () => {
        this.setNodeActive(s, !1), e();
      }) : e();
    }) : e();
  }
  playEyeDrops(t, e) {
    this.showAtOrigin("frame_11_1");
    const i = this.showAtOrigin("frame_11_water");
    if (!i) return void e();
    const o = __rea_outer_C(i);
    o.opacity = 255, __rea_outer_s(o).to(.5, {
      opacity: 0
    }).call(() => {
      this.isActionLive(t) && (this.setNodeActive(i, !1), e());
    }).start();
  }
  playEdgeMove(t, e, i, s, o) {
    const n = this.showAtOrigin(t),
      h = e ? this.getEdgeMidpoints(e) : null;
    n && h ? (n.setPosition(h.left), this.moveNode(n, h.right.x, h.right.y, i, s, () => {
      this.setNodeActive(n, !1), o();
    })) : o();
  }
  playEyeCream(t, e) {
    const i = this.showAtOrigin("frame_13_1"),
      o = this.showAtOrigin("frame_13_eye_cream"),
      n = this.touch13Node ? this.getEdgeMidpoints(this.touch13Node) : null;
    if (!i || !o || !n) return void e();
    i.setPosition(n.left);
    const h = __rea_outer_C(o);
    h.opacity = 0, __rea_outer_s(h).to(.7, {
      opacity: 255
    }).start(), this.moveNode(i, n.right.x, n.right.y, .7, t, () => {
      this.stopTweenIfValid(o), this.setNodeActive(i, !1), this.setNodeActive(o, !1), e();
    });
  }
  playOrbit(t, e, i) {
    const o = this.showAtOrigin(t.toolName),
      n = this.getNode(t.centerName);
    if (!o || !n) return void i();
    const h = this.getNodeCenterInGame(n),
      l = {
        value: 0
      };
    this.motionDriver = l;
    const a = () => {
      if (!o.isValid) return;
      const e = l.value;
      o.setPosition(h.x + t.radius * Math.cos(e), h.y + t.radius * Math.sin(e), 0);
    };
    a(), __rea_outer_s(l).to(t.duration, {
      value: 2 * -Math.PI * 2
    }, {
      onUpdate: a
    }).call(() => {
      this.motionDriver === l && (this.motionDriver = null), this.isActionLive(e) && (this.setNodeActive(o, !1), i());
    }).start();
  }
  applyStepResult(t) {
    switch (t) {
      case 1:
        return void this.setNodeActive(this.getNode("frame_1_soil"), !1);
      case 2:
        return void this.setNodeActive(this.getNode("frame_2_abrasion"), !1);
      case 3:
        return this.setNodeActive(this.getNode("pustule"), !1), void this.setNodeActive(this.getNode("frame_3_pustule"), !0);
      case 4:
        return this.setNodeActive(this.getNode("frame_3_pustule"), !1), this.setNodeActive(this.getNode("frame_4_1"), !1), this.setNodeActive(this.getNode("frame_5_pustule"), !0), void this.setNodeActive(this.getNode("frame_4_thick"), !0);
      case 5:
        return this.setNodeActive(this.getNode("frame_5_1"), !1), this.setNodeActive(this.getNode("frame_5_2"), !1), this.setNodeActive(this.getNode("frame_5_pustule"), !1), this.setNodeActive(this.getNode("frame_4_thick"), !1), void this.setNodeActive(this.getNode("frame_6_pustule"), !0);
      case 6:
        return void this.setNodeActive(this.getNode("frame_6_1"), !1);
      case 7:
        return this.setNodeActive(this.getNode("frame_7_1"), !1), this.setNodeActive(this.getNode("frame_6_pustule"), !1), void this.setNodeActive(this.getNode("frame_7_gauze"), !0);
      case 8:
        return this.setNodeActive(this.getNode("frame_8_1"), !1), this.setNodeActive(this.getNode("sleep"), !1), void this.setNodeActive(this.getNode("frame_8_glue"), !0);
      case 9:
        return this.setNodeActive(this.getNode("frame_9_1"), !1), this.setNodeActive(this.getNode("frame_8_glue"), !1), this.setNodeActive(this.getNode("eyeball_1"), !0), void this.setNodeActive(this.getNode("frame_11_redness"), !0);
      case 10:
        return this.setNodeActive(this.getNode("frame_10_1"), !1), this.setNodeActive(this.getNode("frame_10_eyeball"), !1), this.setNodeActive(this.getNode("eyeball_1"), !1), void this.setNodeActive(this.getNode("eyeball"), !0);
      case 11:
        return this.setNodeActive(this.getNode("frame_11_water"), !1), this.setNodeActive(this.getNode("frame_11_1"), !1), this.setNodeActive(this.getNode("frame_11_redness"), !1), void this.setNodeActive(this.getNode("eyeball"), !1);
      case 12:
        return this.setNodeActive(this.getNode("frame_12_1"), !1), void this.setNodeActive(this.getNode("frame_12_eyebrows"), !1);
      case 13:
        return this.setNodeActive(this.getNode("frame_13_1"), !1), this.setNodeActive(this.getNode("frame_13_eye_cream"), !1), void this.setNodeActive(this.getNode("eye_bags"), !1);
      default:
        return;
    }
  }
  isStepAllowed(t) {
    return this.getAllowedSteps().includes(t);
  }
  getAllowedSteps() {
    if (!this.completedSteps.has(1)) return [1];
    if (!this.completedSteps.has(2)) return [2];
    const t = [];
    for (let e = 3; e <= 11; e += 1) if (!this.completedSteps.has(e)) {
      t.push(e);
      break;
    }
    return this.completedSteps.has(12) || t.push(12), this.completedSteps.has(13) || t.push(13), t;
  }
  getHintStep() {
    for (let t = 1; t <= 11; t += 1) if (!this.completedSteps.has(t)) return t;
    return this.completedSteps.has(12) ? this.completedSteps.has(13) ? null : 13 : 12;
  }
  playDialogue(t, e) {
    this.voiceToken += 1;
    const i = this.voiceToken;
    this.showPrompt(t), __rea_outer__.stopVoice(), __rea_outer__.playVoice(t), this.scheduleOnce(() => {
      this.isValid && i === this.voiceToken && (null == e || e());
    }, this.resolveDialogueSeconds(t));
  }
  resolveDialogueSeconds(t) {
    var e;
    const i = (null == (e = __rea_outer__.audioMap.get(t)) ? void 0 : e.getDuration()) ?? 0;
    return i > .05 ? i : 2.5;
  }
  showPrompt(t) {
    var e;
    this.promptLabel && (this.promptLabel.string = this.resolveI18nText(t)), this.setNodeActive(this.promptBoxNode, !0), this.setNodeActive(null == (e = this.promptLabel) ? void 0 : e.node, !0), this.raisePromptAboveToolbar();
  }
  raisePromptAboveToolbar() {
    const t = this.promptBoxNode,
      e = this.node.getChildByPath("UIPanel"),
      i = this.backBgNode;
    if (null != t && t.isValid && null != e && e.isValid) {
      if (t.parent !== e) {
        const i = t.worldPosition.clone();
        t.setParent(e), t.setWorldPosition(i);
      }
      null != i && i.isValid && i.parent === e ? t.getSiblingIndex() !== i.getSiblingIndex() - 1 && t.setSiblingIndex(i.getSiblingIndex()) : t.setSiblingIndex(e.children.length - 1);
    }
  }
  hidePrompt() {
    this.setNodeActive(this.promptBoxNode, !1);
  }
  resolveI18nText(t) {
    const e = __rea_outer_I.getInstance().getKey(t);
    return e && e !== t ? e : t;
  }
  setInputLocked(t) {
    this.isInputLocked = t;
    const e = this.backBgNode;
    if (null == e || !e.isValid) return;
    if (e.active = t, !t) return;
    const i = e.getComponent(__rea_outer_o);
    i && (i.color = new __rea_outer_r(0, 0, 0, 0)), __rea_outer_k(e, 0);
  }
  playBlackTransition(t, e) {
    const i = this.backBgNode;
    if (null == i || !i.isValid) return t(), void e();
    this.stopTweenIfValid(i), i.active = !0, this.bringToFront(i);
    const n = i.getComponent(__rea_outer_o);
    n && (n.color = new __rea_outer_r(0, 0, 0, 255));
    const h = __rea_outer_C(i);
    h.opacity = 0, __rea_outer_s(h).to(.5, {
      opacity: 255
    }).call(() => {
      this.isValid && i.isValid && (t(), __rea_outer_s(h).to(.5, {
        opacity: 0
      }).call(() => {
        i.isValid && (this.clearBlackMask(i, n), e());
      }).start());
    }).start();
  }
  clearBlackMask(t, e) {
    __rea_outer_k(t, 0), null != e && e.isValid && (e.color = new __rea_outer_r(0, 0, 0, 0)), t.active = !1;
  }
  showAtOrigin(t) {
    const e = this.getNode(t);
    return null != e && e.isValid ? (this.stopTweenIfValid(e), this.restoreAnimNode(e, t), __rea_outer_k(e, 255), e.active = !0, e) : null;
  }
  restoreAnimNode(t, e) {
    const i = this.originByName.get(e);
    i && t.setPosition(i), t.setRotationFromEuler(0, 0, 0);
    const s = t.getComponent(__rea_outer_h);
    s && (s.anchorX = .5, s.anchorY = .5);
  }
  moveNode(t, e, i, o, n, h) {
    __rea_outer_s(t).to(o, {
      position: new __rea_outer_d(e, i, t.position.z)
    }).call(() => {
      this.isActionLive(n) && h();
    }).start();
  }
  wait(t, e, i) {
    this.scheduleOnce(() => {
      this.isActionLive(t) && i();
    }, e);
  }
  isActionLive(t) {
    return this.isValid && t === this.actionToken && this.phase < 2;
  }
  getNodeCenterInGame(t) {
    var e;
    const i = t.getComponent(__rea_outer_h),
      s = (null == (e = this.gameNode) ? void 0 : e.getComponent(__rea_outer_h)) ?? null;
    if (!i || !s) return t.position.clone();
    const o = i.convertToWorldSpaceAR(new __rea_outer_d(0, 0, 0));
    return s.convertToNodeSpaceAR(o);
  }
  getTopCenterInGame(t) {
    var e;
    const i = t.getComponent(__rea_outer_h),
      s = (null == (e = this.gameNode) ? void 0 : e.getComponent(__rea_outer_h)) ?? null;
    if (!i || !s) return t.position.clone();
    const o = (.5 - i.anchorX) * i.width,
      n = (1 - i.anchorY) * i.height,
      l = i.convertToWorldSpaceAR(new __rea_outer_d(o, n, 0));
    return s.convertToNodeSpaceAR(l);
  }
  getEdgeMidpoints(t) {
    var e;
    const i = t.getComponent(__rea_outer_h),
      s = (null == (e = this.gameNode) ? void 0 : e.getComponent(__rea_outer_h)) ?? null;
    if (!i || !s) return null;
    const o = (.5 - i.anchorY) * i.height,
      n = -i.anchorX * i.width,
      l = (1 - i.anchorX) * i.width,
      a = i.convertToWorldSpaceAR(new __rea_outer_d(n, o, 0)),
      r = i.convertToWorldSpaceAR(new __rea_outer_d(l, o, 0));
    return {
      left: s.convertToNodeSpaceAR(a),
      right: s.convertToNodeSpaceAR(r)
    };
  }
  liftDraggedItem(t) {
    var e;
    const i = this.draggedItem,
      s = i ? this.getFollowerNode(i.toolId) : null;
    null != i && null != (e = i.itemNode) && e.isValid && null != s && s.isValid && (this.followerNode !== s && (this.parkFollower(), this.hideSlotIcon(i), this.followerNode = s, this.stopTweenIfValid(s), this.restoreAnimNode(s, s.name), __rea_outer_k(s, 255), s.active = !0, this.liftNodeToTop(s)), this.setNodeToTouch(s, t));
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
    return this.getNode(`frame_${t}_1`);
  }
  hideSlotIcon(t) {
    this.setNodeActive(this.getSlotIcon(t), !1);
  }
  showSlotIcon(t) {
    this.setNodeActive(this.getSlotIcon(t), !0);
  }
  getSlotIcon(t) {
    var e;
    return null != t && null != (e = t.itemNode) && e.isValid ? t.itemNode.getChildByName(H) : null;
  }
  parkFollower() {
    const t = this.followerNode;
    this.followerNode = null, this.restoreLiftedNode(t), null != t && t.isValid && (this.stopTweenIfValid(t), this.restoreAnimNode(t, t.name), t.active = !1);
  }
  setNodeToTouch(t, e) {
    if (null == t || !t.isValid) return;
    const i = t.parent,
      s = (null == i ? void 0 : i.getComponent(__rea_outer_h)) ?? null,
      o = new __rea_outer_d(e.x, e.y, 0);
    null != i && i.isValid && s ? t.setPosition(s.convertToNodeSpaceAR(o)) : t.setWorldPosition(o);
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
  findToolAtPoint(t) {
    for (let e = this.toolItems.length - 1; e >= 0; e -= 1) {
      const i = this.toolItems[e];
      if (this.isPointInsideNode(i.itemNode, t)) return i;
    }
    return null;
  }
  createShuffledToolIds() {
    const t = [];
    for (let e = 1; e <= 13; e += 1) t.push(e);
    for (let e = t.length - 1; e > 0; e -= 1) {
      const i = Math.floor(Math.random() * (e + 1)),
        s = t[e];
      t[e] = t[i], t[i] = s;
    }
    return t;
  }
  loadSpriteFrame(t, e) {
    const i = __rea_outer_c.getBundle(F);
    if (!i) return console.warn("[Level_77] missing bundle Level_77"), void e(null);
    i.load(`${t}/spriteFrame`, __rea_outer_u, (i, s) => {
      if (this.isValid) return i || !s ? (console.warn(`[Level_77] failed to load ${t}`, i), void e(null)) : void e(s);
    });
  }
  computeScrollBounds() {
    var t;
    const e = this.contentNode,
      i = this.viewNode;
    if (null == e || !e.isValid || null == i || !i.isValid) return;
    const s = new Set();
    null != (t = this.demoTemplateNode) && t.isValid && s.add(this.demoTemplateNode);
    const o = __rea_outer_V(e, i, {
      excludedNodes: s
    });
    o && (this.contentScrollBounds = o, this.applyContentScroll(e.position.x, !1));
  }
  applyContentScroll(t, e = !0) {
    const i = this.contentNode;
    null != i && i.isValid && __rea_outer_P(i, t, this.contentScrollBounds, e, .2);
  }
  snapBackContentScroll() {
    const t = this.contentNode;
    null != t && t.isValid && __rea_outer_L(t, this.contentScrollBounds, .3);
  }
  isPointInsideNode(t, e) {
    if (null == t || !t.isValid || !t.activeInHierarchy) return !1;
    const i = t.getComponent(__rea_outer_h);
    return !!i && i.getBoundingBoxToWorld().contains(e);
  }
  getTouchWorldPoint(t) {
    const e = t.getUILocation();
    return new __rea_outer_i(e.x, e.y);
  }
  showInFront(t) {
    const e = this.getNode(t);
    this.setNodeActive(e, !0), this.bringToFront(e);
  }
  bringToFront(t) {
    null != t && t.isValid && t.parent && t.setSiblingIndex(t.parent.children.length - 1);
  }
  setNodeActive(t, e) {
    null != t && t.isValid && (t.active = e);
  }
  stopTweenIfValid(t) {
    null != t && t.isValid && __rea_outer_b(t);
  }
  stopMotion() {
    this.motionDriver && (__rea_outer_p.stopAllByTarget(this.motionDriver), this.motionDriver = null);
  }
  stopCachedTweens() {
    this.nodeByName.forEach(t => {
      this.stopTweenIfValid(t);
    }), this.stopTweenIfValid(this.backBgNode), this.stopTweenIfValid(this.contentNode);
  }
  getNode(t) {
    return this.nodeByName.get(t) ?? null;
  }
  cacheNode(t) {
    null != t && t.isValid && !this.nodeByName.has(t.name) && (this.nodeByName.set(t.name, t), this.originByName.set(t.name, t.position.clone()));
  }
  resolveReferences() {
    var t, e, i, s, o, n, h, a, r, d, c, u;
    this.gameNode = this.node.getChildByPath("UIPanel/gameNode"), this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.clickRootNode = this.node.getChildByPath("UIPanel/click_root"), this.contentNode = (null == (t = this.clickRootNode) ? void 0 : t.getChildByPath("bg/ScrollView/view/content")) ?? null, this.viewNode = (null == (e = this.contentNode) ? void 0 : e.parent) ?? null, this.demoTemplateNode = (null == (i = this.contentNode) ? void 0 : i.getChildByName("demo")) ?? null, this.scrollView = (null == (s = this.clickRootNode) || null == (s = s.getChildByPath("bg/ScrollView")) ? void 0 : s.getComponent(__rea_outer_N)) ?? null, this.contentLayout = (null == (o = this.contentNode) ? void 0 : o.getComponent(__rea_outer_l)) ?? null, this.touchZone = (null == (n = this.gameNode) ? void 0 : n.getChildByPath("clicks/touch")) ?? null, this.touch10Node = (null == (h = this.gameNode) ? void 0 : h.getChildByPath("clicks/touch-10")) ?? null, this.touch12Node = (null == (a = this.gameNode) ? void 0 : a.getChildByPath("clicks/touch-12")) ?? null, this.touch13Node = (null == (r = this.gameNode) ? void 0 : r.getChildByPath("clicks/touch-13")) ?? null, this.nodeByName.clear(), this.originByName.clear(), null == (d = this.gameNode) || d.children.forEach(t => {
      this.cacheNode(t);
    }), this.faceGroup = this.getNode("组 1"), null == (c = this.faceGroup) || c.children.forEach(t => {
      this.cacheNode(t);
    }), this.promptBoxNode = this.node.getChildByPath("UIPanel/prompt_box"), this.cacheNode(this.promptBoxNode), this.promptLabel = (null == (u = this.promptBoxNode) || null == (u = u.getChildByName("Label")) ? void 0 : u.getComponent(__rea_outer_m)) ?? null, this.heartNodes.length = 0, D.forEach(t => {
      this.heartNodes.push(this.getNode(t));
    }), this.warnIfMissing("UIPanel/gameNode", this.gameNode), this.warnIfMissing("UIPanel/gameNode/组 1", this.faceGroup), this.warnIfMissing("UIPanel/gameNode/clicks/touch", this.touchZone), this.warnIfMissing("UIPanel/gameNode/clicks/touch-10", this.touch10Node), this.warnIfMissing("UIPanel/gameNode/clicks/touch-12", this.touch12Node), this.warnIfMissing("UIPanel/gameNode/clicks/touch-13", this.touch13Node), this.warnIfMissing("UIPanel/click_root", this.clickRootNode), this.warnIfMissing("content/demo", this.demoTemplateNode), this.warnIfMissing("UIPanel/prompt_box", this.promptBoxNode);
  }
  warnIfMissing(t, e) {
    e || console.warn(`[Level_77] missing ${t}`);
  }
  cleanupRuntime() {
    this.unscheduleAllCallbacks(), this.unbindInputHandlers(), this.voiceToken += 1, this.actionToken += 1, this.stopMotion(), this.stopCachedTweens(), this.clearToolItems();
  }
}) || B;
__rea_outer_e._RF.pop();
export { __recovered_export_0 as default };
