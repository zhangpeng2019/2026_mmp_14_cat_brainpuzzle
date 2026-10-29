// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_66.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { Vec3 as __rea_outer_i } from "cc";
import { Vec2 as __rea_outer_s } from "cc";
import { Node as __rea_outer_h } from "cc";
import { tween as __rea_outer_o } from "cc";
import { UITransform as __rea_outer_a } from "cc";
import { Rect as __rea_outer_n } from "cc";
import { Tween as __rea_outer_d } from "cc";
import { Label as __rea_outer_r } from "cc";
import { _decorator as __rea_outer_l } from "cc";
import { default as __rea_outer_c } from "./LevelBase";
import { default as __rea_outer_p } from "./AudioManager";
import { I18nController as __rea_outer_u } from "./i18n-controller";
import { UIManager as __rea_outer_g } from "./ui-manager";
import { UILayer as __rea_outer_m } from "./ui-layer";
import { UIHint as __rea_outer_N } from "./uihint";
import { UIFail as __rea_outer_v } from "./uifail";
import { GameController as __rea_outer__ } from "./GameController";
import { setNodeOpacity as __rea_outer_T } from "./CocosCompat";
import { getUIOpacity as __rea_outer_C } from "./CocosCompat";
import { stopAllTweens as __rea_outer_f } from "./CocosCompat";
import { default as __rea_outer_S } from "./clue-hit-tester";
let __recovered_export_0;
var w;
__rea_outer_t._RF.push({}, "b60f5cQ7iFDuokkxuB7riCP", "Level_66", void 0);
const {
    ccclass: y
  } = __rea_outer_l,
  A = "level66_2",
  P = new __rea_outer_i(-165.5, -336.5, 0),
  b = ["level66_hint4", "level66_hint8", "level66_hint5", "level66_hint6", "level66_hint1", "level66_hint3", "level66_hint7", "level66_hint2"],
  G = ["student4_normal", "student4_hand", "student4_front", "student4_shocked", "student4_body1", "student4_body2", "student4_turn_around"],
  I = ["bg_1", "bg_2", "bg", "schoolbag", "lamp", "window", "trash_can", "stool", "teacher1", "teacher1_head_1", "telescope", "student_1", "student_2", "tabel", "mobile_phone", "student_3", "student4_table", "student4_normal", "mouse_hole", "cheese", "bottle", "test_paper", "prompt_box", "clicks"],
  k = ["bg_girl", "bg_girl_1", "schoolbag1", "headphones", "headphones_1", "headphones_2", "window_1", "window_man", "teacher2_1", "teacher2", "teacher4", "teacher4_1", "teacher3", "teacher3_1", "teacher1_head_2", "student_2_1", "student_3_1", "student4_front", "student4_hand", "student4_shocked", "student4_shocked_1", "student4_student4", "student4_body1", "student4_body2", "student4_turn_around", "test_paper_1", "test_paper_2", "mouse", "mouse1", "frame", "frame_chaos", "telescope_1", "lamp_1", "bottle1", "fight1", "fight2", "fight_1", "fight_2", "end"];
__recovered_export_0 = y("Level_66")(w = class extends __rea_outer_c {
  constructor(...e) {
    super(...e), this.phase = 0, this.winstate = !1, this.gameNode = null, this.backBgNode = null, this.promptBoxNode = null, this.promptLabel = null, this.nodeByName = new Map(), this.nodeOrigins = new Map(), this.siblingOrigins = new Map(), this.homeParents = new Map(), this.completedSteps = new Set(), this.telescopeTouchNode = null, this.studentTouchNode = null, this.mouseHoleTouchNode = null, this.activeDrag = null, this.pointerSession = null, this.hasPlacedCheese = !1, this.hasOpenedBag = !1, this.hasOpenedWindow = !1, this.isTeacherHeadShowingFirst = !0, this.isTeacherHeadSwapPaused = !0, this.voiceToken = 0, this.performanceToken = 0, this.parabolaProxy = null, this.onTouchStart = e => {
      if (!this.canAcceptTouch()) return;
      const t = __rea_outer_S.getTouchPoint(e),
        i = this.resolveDragKind(t);
      if (i) return this.beginDrag(i, e), void (e.propagationStopped = !0);
      const s = this.resolveClickKind(t);
      s && (this.pointerSession = {
        kind: s,
        startPoint: t.clone()
      }, e.propagationStopped = !0);
    }, this.onTouchMove = e => {
      this.activeDrag && this.canAcceptTouch() && (this.setDragNodePositionFromTouch(e, this.activeDrag.dragNode, this.activeDrag.touchOffset), this.tryMorphHeldSprite(this.activeDrag, e), e.propagationStopped = !0);
    }, this.onTouchEnd = e => {
      if (1 !== this.phase || this.winstate) return this.cancelDrag(), void (this.pointerSession = null);
      if (this.activeDrag) return this.handleDrop(this.activeDrag), this.activeDrag = null, void (e.propagationStopped = !0);
      const t = this.pointerSession;
      if (this.pointerSession = null, !t || !this.canAcceptTouch()) return;
      const i = __rea_outer_S.getTouchPoint(e);
      if ("student3" === t.kind) return this.handleStudent3Swipe(t.startPoint, i), void (e.propagationStopped = !0);
      __rea_outer_s.distance(t.startPoint, i) >= 20 || (this.handleClick(t.kind), e.propagationStopped = !0);
    }, this.onFightTick = () => {
      var e;
      const t = !0 !== (null == (e = this.getGameChild("fight1")) ? void 0 : e.active);
      this.setFightFrame(t);
    }, this.onTeacherHeadTick = () => {
      var e;
      this.isTeacherHeadSwapPaused || !0 !== (null == (e = this.getGameChild("teacher1")) ? void 0 : e.active) || (this.isTeacherHeadShowingFirst = !this.isTeacherHeadShowingFirst, this.setNodeActive(this.getGameChild("teacher1_head_1"), this.isTeacherHeadShowingFirst), this.setNodeActive(this.getGameChild("teacher1_head_2"), !this.isTeacherHeadShowingFirst));
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.allItemNum = 8, this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.enterPhase0();
  }
  onDestroy() {
    this.cleanupRuntime(!this.shouldSkipStopLevelAudio()), super.onDestroy();
  }
  handleTimeExpired() {
    return !!(this.phase >= 2 || this.winstate);
  }
  showHint() {
    if (1 !== this.phase) return;
    const e = this.resolveHintKey();
    if (!e) return;
    const t = __rea_outer_u.getInstance().getKey(e);
    __rea_outer_g.getInstance().showView(__rea_outer_N, void 0, {
      body: t
    });
  }
  getGameProgressSnapshot() {
    const e = Math.min(this.hasInstallNum, 8);
    return {
      progress: e / 8,
      label: `${e}/8`
    };
  }
  markAllTasksCompleted() {
    for (let e = 1; e <= 8; e += 1) this.completedSteps.add(e);
    this.hasInstallNum = 8, this.hasPlacedCheese = !0, this.hasOpenedBag = !0, this.hasOpenedWindow = !0;
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.activeDrag = null, this.pointerSession = null, this.hasPlacedCheese = !1, this.hasOpenedBag = !1, this.hasOpenedWindow = !1, this.isTeacherHeadShowingFirst = !0, this.isTeacherHeadSwapPaused = !0, this.voiceToken = 0, this.performanceToken = 0, this.completedSteps.clear(), this.hasInstallNum = 0, this.allItemNum = 8, __rea_outer_p.stopVoice();
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_p.playMusic("bgm4", !0, .5), this.applyInitialVisibility(), this.startTeacherHeadSwap(), this.setInputBlocked(!0), __rea_outer__.getInstance().refreshGameProgress(), this.playDialogue("66_1", !0, () => {
      this.isValid && 0 === this.phase && this.enterPhase1();
    });
  }
  skipOpeningToPlay() {
    return 0 === this.phase && (this.voiceToken += 1, this.stopOpeningDialogue(), this.enterPhase1(), !0);
  }
  enterPhase1() {
    0 === this.phase && (this.phase = 1, this.hidePrompt(), this.setInputBlocked(!1), this.registerInteractionHandlers(), __rea_outer__.getInstance().refreshGameProgress());
  }
  enterPhase2Success() {
    this.phase >= 2 || this.winstate || (this.phase = 2, this.winstate = !0, this.cancelDrag(), this.unregisterInteractionHandlers(), this.pauseTeacherHeadSwap(), this.setInputBlocked(!0), __rea_outer__.getInstance().pauseTimer(), this.playSuccessFade());
  }
  beginTimeoutFail() {
    this.phase = 2, this.winstate = !1, this.cleanupRuntime(!0), __rea_outer__.getInstance().pauseTimer(), __rea_outer_g.getInstance().showView(__rea_outer_v, __rea_outer_m.WIN_ANIMATION);
  }
  applyInitialVisibility() {
    this.restoreCachedNodes(), this.setNodeActive(this.gameNode, !0), I.forEach(e => {
      this.setNodeActive(this.getGameChild(e), !0);
    }), k.forEach(e => {
      this.setNodeActive(this.getGameChild(e), !1);
    }), this.setNodeActive(this.node.getChildByPath("UIPanel/click_root"), !1), this.setNodeActive(this.node.getChildByPath("UIPanel/demo"), !1), this.setNodeActive(this.node.getChildByPath("UIPanel/bubble"), !1), this.prepareClickHotspots(), this.setNodeActive(this.getGameChild("drags"), !1), this.setNodeActive(this.getGameChild("swips"), !1), this.resetBackBgOpacity();
  }
  registerInteractionHandlers() {
    this.node.on(__rea_outer_h.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(__rea_outer_h.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(__rea_outer_h.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(__rea_outer_h.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
  }
  unregisterInteractionHandlers() {
    var e;
    null != (e = this.node) && e.isValid && (this.node.off(__rea_outer_h.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(__rea_outer_h.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(__rea_outer_h.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(__rea_outer_h.EventType.TOUCH_CANCEL, this.onTouchEnd, this));
  }
  canAcceptTouch() {
    var e;
    return 1 === this.phase && !this.winstate && !0 !== (null == (e = this.backBgNode) ? void 0 : e.active);
  }
  resolveDragKind(e) {
    const t = [];
    return this.pushHit(t, "bottle", this.getGameChild("bottle"), this.canStartStep(1)), this.pushHit(t, "cheese", this.getGameChild("cheese"), this.canStartStep(2) && !this.hasPlacedCheese), this.pushHit(t, "mouse", this.getGameChild("mouse"), this.canStartStep(2) && this.hasPlacedCheese), this.pushHit(t, "phone", this.getGameChild("mobile_phone"), this.canStartStep(5)), this.pushHit(t, "headphones", this.getGameChild("headphones"), this.canStartStep(6) && this.hasOpenedBag), this.pushHit(t, "telescope", this.telescopeTouchNode ?? this.getGameChild("telescope"), this.canDragTelescope()), this.pushHit(t, "paper", this.getGameChild("test_paper"), this.canStartStep(8)), __rea_outer_S.pickTopmost(t, e);
  }
  resolveClickKind(e) {
    const t = [];
    return this.pushHit(t, "lamp", this.getGameChild("lamp"), this.canStartStep(3)), this.pushHit(t, "schoolbag", this.getGameChild("schoolbag"), this.canStartStep(6) && !this.hasOpenedBag), this.pushHit(t, "window", this.getGameChild("window"), this.canStartStep(7) && !this.hasOpenedWindow), this.pushHit(t, "student3", this.getGameChild("student_3"), this.canStartStep(4)), __rea_outer_S.pickTopmost(t, e);
  }
  pushHit(e, t, i, s) {
    s && null != i && i.isValid && i.activeInHierarchy && e.push({
      value: t,
      node: i
    });
  }
  canStartStep(e) {
    return !this.completedSteps.has(e);
  }
  canDragTelescope() {
    const e = this.getGameChild("telescope");
    return this.canStartStep(7) && this.hasOpenedWindow && !0 === (null == e ? void 0 : e.activeInHierarchy);
  }
  beginDrag(e, t) {
    var i, s;
    const h = this.getDragSourceNode(e);
    if (null == h || !h.isValid || null == (i = this.gameNode) || !i.isValid) return;
    this.liftNodeToGameNode(h), this.bringNodeToFront(h);
    const o = this.calculateTouchOffset(t, h);
    this.setDragNodePositionFromTouch(t, h, o), this.activeDrag = {
      kind: e,
      dragNode: h,
      sourceNode: h,
      originPosition: (null == (s = this.nodeOrigins.get(h)) ? void 0 : s.clone()) ?? h.position.clone(),
      touchOffset: o,
      originWorldPosition: h.worldPosition.clone(),
      hasMorphed: !1
    };
  }
  getDragSourceNode(e) {
    switch (e) {
      case "bottle":
        return this.getGameChild("bottle");
      case "cheese":
        return this.getGameChild("cheese");
      case "mouse":
        return this.getGameChild("mouse");
      case "phone":
        return this.getGameChild("mobile_phone");
      case "headphones":
        return this.getGameChild("headphones");
      case "telescope":
        return this.getGameChild("telescope") ?? this.node.getChildByPath("UIPanel/gameNode/teacher1/telescope");
      case "paper":
        return this.getGameChild("test_paper");
      default:
        return null;
    }
  }
  tryMorphHeldSprite(e, t) {
    if (e.hasMorphed) return;
    const s = "headphones" === e.kind ? "headphones_1" : "telescope" === e.kind ? "telescope_1" : null;
    if (!s) return;
    if (__rea_outer_i.distance(e.dragNode.worldPosition, e.originWorldPosition) < 20) return;
    const h = this.getGameChild(s);
    if (null == h || !h.isValid) return;
    const o = e.dragNode.worldPosition.clone();
    this.setNodeActive(e.sourceNode, !1), this.restoreOrigin(e.sourceNode), this.placeNodeAtWorld(h, o), this.setNodeActive(h, !0), this.bringNodeToFront(h), e.dragNode = h, e.hasMorphed = !0, e.touchOffset = this.calculateTouchOffset(t, h), this.setDragNodePositionFromTouch(t, h, e.touchOffset);
  }
  handleDrop(e) {
    if (this.canAcceptTouch()) switch (e.kind) {
      case "bottle":
        return void this.handleBottleDrop(e);
      case "cheese":
        return void this.handleCheeseDrop(e);
      case "mouse":
        return void this.handleMouseDrop(e);
      case "phone":
        return void this.handlePhoneDrop(e);
      case "headphones":
        return void this.handleHeadphonesDrop(e);
      case "telescope":
        return void this.handleTelescopeDrop(e);
      case "paper":
        return void this.handlePaperDrop(e);
      default:
        this.restoreDrag(e);
    } else this.restoreDrag(e);
  }
  handleBottleDrop(e) {
    this.isNodeCenterInside(e.dragNode, this.getGameChild("trash_can")) ? (this.playActionSound(), this.setNodeActive(e.sourceNode, !1), this.beginBottlePerformance()) : this.restoreDrag(e);
  }
  handleCheeseDrop(e) {
    this.isNodeCenterInside(e.dragNode, this.mouseHoleTouchNode) ? (this.playActionSound(), this.setNodeActive(e.sourceNode, !1), this.restoreOrigin(this.getGameChild("mouse")), this.setNodeActive(this.getGameChild("mouse"), !0), this.hasPlacedCheese = !0) : this.restoreDrag(e);
  }
  handleMouseDrop(e) {
    this.isNodeCenterInside(e.dragNode, this.studentTouchNode) ? (this.playActionSound(), this.setNodeActive(e.sourceNode, !1), this.beginMousePerformance()) : this.restoreDrag(e);
  }
  handlePhoneDrop(e) {
    this.isNodeCenterInside(e.dragNode, this.getGameChild("student4_normal"), !1) ? (this.playActionSound(), this.setNodeActive(e.sourceNode, !1), this.beginPhonePerformance()) : this.restoreDrag(e);
  }
  handleHeadphonesDrop(e) {
    this.isNodeCenterInside(e.dragNode, this.getGameChild("student4_normal"), !1) ? (this.playActionSound(), this.setNodeActive(this.getGameChild("headphones_1"), !1), this.setNodeActive(this.getGameChild("headphones"), !1), this.beginHeadphonesPerformance()) : this.restoreDrag(e);
  }
  handleTelescopeDrop(e) {
    this.isNodeCenterInside(e.dragNode, this.getGameChild("student4_normal"), !1) ? (this.playActionSound(), this.setNodeActive(this.getGameChild("telescope_1"), !1), this.restoreHome(this.getGameChild("telescope_1")), this.setNodeActive(this.getGameChild("telescope"), !1), this.restoreHome(this.getGameChild("telescope")), this.setNodeActive(this.telescopeTouchNode, !1), this.beginTelescopePerformance()) : this.restoreDrag(e);
  }
  handlePaperDrop(e) {
    this.isNodeCenterInside(e.dragNode, this.getGameChild("student4_normal"), !1) ? (this.playActionSound(), this.setNodeActive(e.sourceNode, !1), this.beginPaperPerformance()) : this.restoreDrag(e);
  }
  handleClick(e) {
    return "lamp" === e ? (this.playActionSound(), void this.beginLampPerformance()) : "schoolbag" === e ? (this.playActionSound(), this.setNodeActive(this.getGameChild("schoolbag"), !1), this.setNodeActive(this.getGameChild("schoolbag1"), !0), this.restoreOrigin(this.getGameChild("headphones")), this.setNodeActive(this.getGameChild("headphones"), !0), void (this.hasOpenedBag = !0)) : (this.playActionSound(), this.setNodeActive(this.getGameChild("window"), !1), this.setNodeActive(this.getGameChild("window_1"), !0), this.setNodeActive(this.getGameChild("window_man"), !0), this.hasOpenedWindow = !0, void this.playDialogue("66_8", !0));
  }
  handleStudent3Swipe(e, t) {
    const i = t.x - e.x,
      s = t.y - e.y;
    s <= -30 && Math.abs(s) >= 1.2 * Math.abs(i) && (this.playActionSound(), this.beginSwipePerformance());
  }
  beginBottlePerformance() {
    const e = this.beginPerformance(),
      t = this.getGameChild("bottle1");
    this.hideStudent4Overlays(), this.showStudent4Body("student4_body1"), this.restoreOrigin(t), this.setNodeActive(t, !0), this.wait(e, .5, () => {
      this.showStudent4Body("student4_body2"), this.setNodeActive(this.getGameChild("student4_body1"), !1), this.flyBottleToTrash(e, t), this.wait(e, .3, () => {
        this.showStudent4Body("student4_front");
      });
    });
  }
  flyBottleToTrash(e, t) {
    const i = this.getGameChild("trash_can");
    null != t && t.isValid && null != i && i.isValid && this.moveNodeTo(t, i.position.clone(), .4, () => {
      this.isPerformanceCurrent(e) && t.isValid && (this.setNodeActive(t, !1), __rea_outer_p.playEffect_1(A), this.pauseTeacherHeadSwap(), this.hideTeacherIdle(), this.setNodeActive(this.getGameChild("teacher2"), !0), this.playDialogue("66_5", !0), this.wait(e, 1, () => {
        this.setNodeActive(this.getGameChild("teacher2"), !1), this.showTeacherIdle(), this.resumeTeacherHeadSwap(), this.wait(e, .5, () => {
          this.restoreStudent4Idle(), this.finishStep(1, e);
        });
      }));
    });
  }
  beginMousePerformance() {
    const e = this.beginPerformance();
    this.hideStudent4Overlays(), this.showStudent4Body("student4_shocked"), this.setNodeActive(this.getGameChild("student4_shocked_1"), !0), this.setNodeActive(this.getGameChild("mouse1"), !0), this.playDialogue("66_9", !0), this.wait(e, 1, () => {
      this.setNodeActive(this.getGameChild("student4_shocked_1"), !1), this.setNodeActive(this.getGameChild("mouse1"), !1), this.restoreStudent4Idle(), this.playTeacherScan(e, () => {
        this.finishStep(2, e);
      });
    });
  }
  beginLampPerformance() {
    const e = this.beginPerformance(),
      t = this.getGameChild("lamp_1"),
      s = this.getGameChild("teacher4"),
      h = this.getGameChild("teacher4_1");
    this.setNodeActive(t, !0), this.hideStudent4Overlays(), this.showStudent4Body("student4_front"), this.pauseTeacherHeadSwap(), this.hideTeacherIdle(), this.restoreOrigin(s), this.restoreOrigin(h), this.setNodeActive(s, !0), this.setNodeActive(h, !1), this.bringNodeToFront(t), this.bringNodeToFront(s), this.playDialogue("66_7", !0), this.moveNodeTo(s, new __rea_outer_i(-88, 283, 0), .7, () => {
      this.isPerformanceCurrent(e) && (this.placeTeacher41AtHand(), this.setNodeActive(h, !0), this.bringNodeToFront(h), this.wait(e, .5, () => {
        this.setNodeActive(s, !1), this.setNodeActive(h, !1), this.setNodeActive(t, !1), this.restoreOrigin(s), this.restoreOrigin(h), this.restoreSibling(s), this.restoreSibling(h), this.restoreSibling(t), this.showTeacherIdle(), this.resumeTeacherHeadSwap(), this.wait(e, .5, () => {
          this.restoreStudent4Idle(), this.finishStep(3, e);
        });
      }));
    }), this.tweenTeacher41Follow(s, h, .7);
  }
  beginSwipePerformance() {
    const e = this.beginPerformance();
    this.setNodeActive(this.getGameChild("student_3"), !1), this.setNodeActive(this.getGameChild("student_3_1"), !0), this.showCheatPapers(!1), this.setNodeActive(this.getGameChild("student4_student4"), !0), this.playDialogue("66_6", !0), this.wait(e, 1, () => {
      this.setNodeActive(this.getGameChild("student_3_1"), !1), this.setNodeActive(this.getGameChild("student4_student4"), !1), this.setNodeActive(this.getGameChild("student_3"), !0), this.restoreStudent4Idle(), this.playTeacherScan(e, () => {
        this.finishStep(4, e);
      });
    });
  }
  beginPhonePerformance() {
    const e = this.beginPerformance();
    this.hideStudent4Overlays(), this.showStudent4Body("student4_hand"), this.playDialogue("66_2", !0), this.wait(e, 1, () => {
      this.restoreStudent4Idle(), this.playTeacherScan(e, () => {
        this.finishStep(5, e);
      });
    });
  }
  beginHeadphonesPerformance() {
    const e = this.beginPerformance();
    this.showCheatPapers(!1), this.setNodeActive(this.getGameChild("headphones_2"), !0), this.setNodeActive(this.getGameChild("student4_student4"), !0), this.setNodeActive(this.getGameChild("bg_girl"), !0), this.setNodeActive(this.getGameChild("bg_girl_1"), !0), this.playDialogue("66_4", !0), this.wait(e, 1, () => {
      this.setNodeActive(this.getGameChild("headphones_2"), !1), this.setNodeActive(this.getGameChild("student4_student4"), !1), this.setNodeActive(this.getGameChild("bg_girl"), !1), this.setNodeActive(this.getGameChild("bg_girl_1"), !1), this.restoreStudent4Idle(), this.playTeacherScan(e, () => {
        this.finishStep(6, e);
      });
    });
  }
  beginTelescopePerformance() {
    const e = this.beginPerformance();
    this.hideStudent4Overlays(), this.showStudent4Body("student4_turn_around"), this.wait(e, 1, () => {
      this.setNodeActive(this.getGameChild("window_man"), !1), this.restoreStudent4Idle(), this.playTeacherScan(e, () => {
        this.finishStep(7, e);
      });
    });
  }
  beginPaperPerformance() {
    const e = this.beginPerformance();
    this.setNodeActive(this.getGameChild("student_2"), !1), this.setNodeActive(this.getGameChild("student_2_1"), !0), this.startFightSwap(), this.playDialogue("66_3", !0), this.wait(e, .5, () => {
      this.stopFightSwap(), this.setNodeActive(this.getGameChild("student_2_1"), !1), this.setNodeActive(this.getGameChild("student_2"), !0), this.flyAnswerPaper(e);
    });
  }
  flyAnswerPaper(e) {
    const t = this.getGameChild("test_paper_2"),
      s = this.getOrigin(this.getGameChild("test_paper")),
      h = (null == s ? void 0 : s.clone()) ?? new __rea_outer_i(-175.5, -44.5, 0);
    if (null == t || !t.isValid) return void this.finishPaperAfterLand(e);
    t.setPosition(h), this.setNodeActive(t, !0), this.bringNodeToFront(t), __rea_outer_p.playEffect_1(A);
    const o = new __rea_outer_i(.5 * (h.x + P.x), .5 * (h.y + P.y), 0);
    this.tweenQuadratic(t, h, o, P, .5, () => {
      this.isPerformanceCurrent(e) && (this.setNodeActive(t, !1), this.finishPaperAfterLand(e));
    });
  }
  finishPaperAfterLand(e) {
    this.restoreOrigin(this.getGameChild("test_paper_1")), this.setNodeActive(this.getGameChild("test_paper_1"), !0), this.setNodeActive(this.getGameChild("student4_student4"), !0), this.wait(e, 1, () => {
      this.setNodeActive(this.getGameChild("test_paper_1"), !1), this.setNodeActive(this.getGameChild("student4_student4"), !1), this.restoreStudent4Idle(), this.playTeacherScan(e, () => {
        this.finishStep(8, e);
      });
    });
  }
  startFightSwap() {
    this.setFightFrame(!0), this.schedule(this.onFightTick, .1);
  }
  stopFightSwap() {
    this.unschedule(this.onFightTick), this.setNodeActive(this.getGameChild("fight1"), !1), this.setNodeActive(this.getGameChild("fight2"), !1), this.setNodeActive(this.getGameChild("fight_1"), !1), this.setNodeActive(this.getGameChild("fight_2"), !1);
  }
  setFightFrame(e) {
    this.setNodeActive(this.getGameChild("fight1"), e), this.setNodeActive(this.getGameChild("fight2"), !e), this.setNodeActive(this.getGameChild("fight_1"), e), this.setNodeActive(this.getGameChild("fight_2"), !e);
  }
  playTeacherScan(e, t) {
    const i = this.getGameChild("teacher3_1");
    this.pauseTeacherHeadSwap(), this.hideTeacherIdle(), this.setNodeActive(this.getGameChild("teacher3"), !0), this.setNodeActive(i, !0), this.playTeacher3Scan(i, () => {
      this.isPerformanceCurrent(e) && (this.setNodeActive(this.getGameChild("teacher3"), !1), this.setNodeActive(i, !1), this.resetTeacher3Scan(i), this.showTeacherIdle(), this.resumeTeacherHeadSwap(), t());
    });
  }
  playTeacher3Scan(e, t) {
    if (null == e || !e.isValid) return void t();
    this.resetTeacher3Scan(e);
    this.stopTweenIfValid(e), __rea_outer_o(e).to(.5, {
      angle: 30
    }).to(.5, {
      angle: 0
    }).call(() => {
      t();
    }).start();
  }
  resetTeacher3Scan(e) {
    null != e && e.isValid && (this.stopTweenIfValid(e), e.angle = 0, this.restoreOrigin(e));
  }
  showStudent4Body(e) {
    G.forEach(t => {
      this.setNodeActive(this.getGameChild(t), t === e);
    });
  }
  restoreStudent4Idle() {
    this.showStudent4Body("student4_normal"), this.showCheatPapers(!1);
  }
  hideStudent4Overlays() {
    this.showCheatPapers(!1), this.setNodeActive(this.getGameChild("student4_student4"), !1), this.setNodeActive(this.getGameChild("student4_shocked_1"), !1), this.setNodeActive(this.getGameChild("headphones_2"), !1), this.setNodeActive(this.getGameChild("mouse1"), !1), this.setNodeActive(this.getGameChild("bottle1"), !1);
  }
  showCheatPapers(e) {
    this.setNodeActive(this.getGameChild("frame"), e), this.setNodeActive(this.getGameChild("frame_chaos"), e);
  }
  hideTeacherIdle() {
    this.setNodeActive(this.getGameChild("teacher1"), !1), this.setNodeActive(this.getGameChild("teacher1_head_1"), !1), this.setNodeActive(this.getGameChild("teacher1_head_2"), !1);
  }
  showTeacherIdle() {
    this.setNodeActive(this.getGameChild("teacher1"), !0), this.setNodeActive(this.getGameChild("teacher1_head_1"), !0), this.setNodeActive(this.getGameChild("teacher1_head_2"), !1), this.isTeacherHeadShowingFirst = !0;
  }
  startTeacherHeadSwap() {
    this.isTeacherHeadSwapPaused = !1, this.showTeacherIdle(), this.unschedule(this.onTeacherHeadTick), this.schedule(this.onTeacherHeadTick, 2);
  }
  pauseTeacherHeadSwap() {
    this.isTeacherHeadSwapPaused = !0, this.unschedule(this.onTeacherHeadTick);
  }
  resumeTeacherHeadSwap() {
    1 !== this.phase || this.winstate || this.startTeacherHeadSwap();
  }
  placeTeacher41AtHand() {
    const e = this.getGameChild("teacher4"),
      t = this.getGameChild("teacher4_1"),
      i = this.getOrigin(e),
      s = this.getOrigin(t);
    if (!(null != e && e.isValid && null != t && t.isValid && i && s)) return;
    const h = e.position.x - i.x;
    t.setPosition(s.x + h, s.y, s.z);
  }
  tweenTeacher41Follow(e, t, s) {
    const h = this.getOrigin(e),
      o = this.getOrigin(t);
    if (!(null != e && e.isValid && null != t && t.isValid && h && o)) return;
    const a = new __rea_outer_i(o.x + (-88 - h.x), o.y, o.z);
    this.moveNodeTo(t, a, s);
  }
  playSuccessFade() {
    const e = this.backBgNode;
    if (null == e || !e.isValid) return void this.presentEndCard();
    this.setNodeActive(e, !0), __rea_outer_T(e, 0);
    const t = __rea_outer_C(e);
    this.stopTweenIfValid(e), __rea_outer_f(e), __rea_outer_o(t).to(.35, {
      opacity: 255
    }).to(.45, {
      opacity: 0
    }).call(() => {
      this.isValid && 2 === this.phase && this.winstate && this.presentEndCard();
    }).start();
  }
  presentEndCard() {
    const e = this.getGameChild("end");
    this.setNodeActive(e, !0), this.bringNodeToFront(e), this.playDialogue("66_10", !1, () => {
      this.isValid && 2 === this.phase && this.winstate && this.scheduleOnceIfValid(() => {
        this.isValid && 2 === this.phase && this.winstate && this.showLevelSuccess(0);
      }, 1);
    });
  }
  completeStep(e) {
    return this.completedSteps.has(e) || (this.completedSteps.add(e), this.hasInstallNum = this.completedSteps.size, __rea_outer__.getInstance().refreshGameProgress()), this.completedSteps.size >= 8;
  }
  finishStep(e, t) {
    if (!this.isValid || t !== this.performanceToken || this.winstate || 1 !== this.phase) return;
    this.completeStep(e) ? this.enterPhase2Success() : this.endPerformance(t);
  }
  beginPerformance() {
    return this.performanceToken += 1, this.setInputBlocked(!0), this.performanceToken;
  }
  isPerformanceCurrent(e) {
    return this.isValid && 1 === this.phase && e === this.performanceToken && !this.winstate;
  }
  endPerformance(e) {
    e === this.performanceToken && this.isValid && 1 === this.phase && !this.winstate && this.setInputBlocked(!1);
  }
  wait(e, t, i) {
    this.scheduleOnceIfValid(() => {
      this.isPerformanceCurrent(e) && i();
    }, t);
  }
  playActionSound() {
    __rea_outer_p.playEffect_1("level66_1");
  }
  playDialogue(e, t, i) {
    this.voiceToken += 1;
    const s = this.voiceToken;
    this.showPrompt(e), __rea_outer_p.stopVoice(), __rea_outer_p.playVoice(e);
    let h = !1;
    const o = () => {
        !h && this.isValid && s === this.voiceToken && (h = !0, this.unschedule(a), t && this.hidePrompt(), null == i || i());
      },
      a = () => {
        o();
      },
      n = this.resolveDialogueHoldSeconds(e);
    this.scheduleOnce(o, n), this.scheduleOnce(a, Math.max(8, n + .5));
  }
  resolveDialogueHoldSeconds(e) {
    var t;
    const i = (null == (t = __rea_outer_p.audioMap.get(e)) ? void 0 : t.getDuration()) ?? 0;
    return i > .1 ? i : 2.5;
  }
  showPrompt(e) {
    this.promptLabel && (this.promptLabel.string = this.resolveI18nText(e)), this.setNodeActive(this.promptBoxNode, !0), this.bringNodeToFront(this.promptBoxNode);
  }
  hidePrompt() {
    this.setNodeActive(this.promptBoxNode, !1);
  }
  resolveI18nText(e) {
    const t = __rea_outer_u.getInstance().getKey(e);
    return t && t !== e ? t : e;
  }
  resolveHintKey() {
    for (let e = 1; e <= 8; e += 1) if (!this.completedSteps.has(e)) return b[e - 1];
    return null;
  }
  restoreDrag(e) {
    if ("headphones" === e.kind || "telescope" === e.kind) {
      const t = "headphones" === e.kind ? "headphones_1" : "telescope_1";
      return this.setNodeActive(this.getGameChild(t), !1), this.restoreHome(this.getGameChild(t)), this.restoreHome(e.sourceNode), void this.setNodeActive(e.sourceNode, !0);
    }
    this.stopTweenIfValid(e.sourceNode), this.restoreHome(e.sourceNode), this.setNodeActive(e.sourceNode, !0);
  }
  cancelDrag() {
    this.activeDrag && (this.restoreDrag(this.activeDrag), this.activeDrag = null);
  }
  isNodeCenterInside(e, t, i = !0) {
    if (null == e || !e.isValid || null == t || !t.isValid) return !1;
    if (i && !t.activeInHierarchy) return !1;
    const s = this.getLayoutWorldRect(e),
      h = this.getLayoutWorldRect(t);
    return !(!s || !h) && __rea_outer_S.isRectWithinDragDistance(s, h);
  }
  getLayoutWorldRect(e) {
    const t = e.getComponent(__rea_outer_a),
      s = e.parent,
      h = null == s ? void 0 : s.getComponent(__rea_outer_a);
    if (!t || null == s || !s.isValid || !h) return null;
    const o = t.width,
      d = t.height,
      r = e.position.x - t.anchorX * o,
      l = e.position.y - t.anchorY * d,
      c = h.convertToWorldSpaceAR(new __rea_outer_i(r, l, 0)),
      p = h.convertToWorldSpaceAR(new __rea_outer_i(r + o, l + d, 0));
    return new __rea_outer_n(Math.min(c.x, p.x), Math.min(c.y, p.y), Math.abs(p.x - c.x), Math.abs(p.y - c.y));
  }
  tweenQuadratic(e, t, i, s, h, a) {
    this.stopParabolaTween(), this.stopTweenIfValid(e);
    const n = {
      t: 0
    };
    this.parabolaProxy = n, __rea_outer_o(n).to(h, {
      t: 1
    }, {
      onUpdate: () => {
        if (!e.isValid || this.parabolaProxy !== n) return;
        const h = n.t,
          o = 1 - h;
        e.setPosition(o * o * t.x + 2 * o * h * i.x + h * h * s.x, o * o * t.y + 2 * o * h * i.y + h * h * s.y, t.z);
      }
    }).call(() => {
      this.parabolaProxy === n && (this.parabolaProxy = null, a());
    }).start();
  }
  stopParabolaTween() {
    this.parabolaProxy && (__rea_outer_d.stopAllByTarget(this.parabolaProxy), this.parabolaProxy = null);
  }
  moveNodeTo(e, t, i, s) {
    null != e && e.isValid ? (this.stopTweenIfValid(e), __rea_outer_o(e).to(i, {
      position: t.clone()
    }).call(() => null == s ? void 0 : s()).start()) : null == s || s();
  }
  placeNodeAtWorld(e, t) {
    const i = this.gameNode ?? e.parent;
    if (null == i || !i.isValid) return;
    const s = i.getComponent(__rea_outer_a);
    s && e.setPosition(s.convertToNodeSpaceAR(t));
  }
  calculateTouchOffset(e, t) {
    const s = this.gameNode ?? t.parent;
    if (null == s || !s.isValid) return __rea_outer_i.ZERO.clone();
    const h = this.getTouchLocalPosition(e, s);
    return new __rea_outer_i(t.position.x - h.x, t.position.y - h.y, 0);
  }
  setDragNodePositionFromTouch(e, t, i) {
    const s = this.gameNode ?? t.parent;
    if (null == s || !s.isValid) return;
    const h = this.getTouchLocalPosition(e, s);
    t.setPosition(h.x + i.x, h.y + i.y, t.position.z);
  }
  getTouchLocalPosition(e, t) {
    const s = e.getUILocation(),
      h = t.getComponent(__rea_outer_a);
    return h ? h.convertToNodeSpaceAR(new __rea_outer_i(s.x, s.y, 0)) : __rea_outer_i.ZERO.clone();
  }
  restoreCachedNodes() {
    this.homeParents.forEach((e, t) => {
      t.isValid && e.isValid && t.parent !== e && t.setParent(e);
    }), this.nodeOrigins.forEach((e, t) => {
      t.isValid && (this.stopTweenIfValid(t), t.setPosition(e), t.angle = 0);
    }), this.siblingOrigins.forEach((e, t) => {
      t.isValid && t.parent && t.setSiblingIndex(e);
    });
  }
  getOrigin(e) {
    return e ? this.nodeOrigins.get(e) : void 0;
  }
  restoreOrigin(e) {
    if (null == e || !e.isValid) return;
    const t = this.nodeOrigins.get(e);
    t && (this.stopTweenIfValid(e), e.setPosition(t));
  }
  restoreHome(e) {
    if (null == e || !e.isValid) return;
    this.stopTweenIfValid(e);
    const t = this.homeParents.get(e);
    null != t && t.isValid && e.parent !== t && e.setParent(t), this.restoreOrigin(e), this.restoreSibling(e);
  }
  liftNodeToGameNode(e) {
    var t;
    if (null == (t = this.gameNode) || !t.isValid || e.parent === this.gameNode) return;
    const i = e.worldPosition.clone();
    e.setParent(this.gameNode), this.placeNodeAtWorld(e, i);
  }
  prepareClickHotspots() {
    const e = this.getGameChild("clicks") ?? this.node.getChildByPath("UIPanel/gameNode/clicks");
    this.setNodeActive(e, !0), this.prepareClickHotspot(this.telescopeTouchNode), this.prepareClickHotspot(this.studentTouchNode), this.prepareClickHotspot(this.mouseHoleTouchNode);
  }
  prepareClickHotspot(e) {
    null != e && e.isValid && (e.active = !0, __rea_outer_T(e, 0));
  }
  restoreSibling(e) {
    if (null == e || !e.isValid || !e.parent) return;
    const t = this.siblingOrigins.get(e);
    void 0 !== t && e.setSiblingIndex(t);
  }
  bringNodeToFront(e) {
    null != e && e.isValid && e.parent && e.setSiblingIndex(e.parent.children.length - 1);
  }
  setInputBlocked(e) {
    this.setNodeActive(this.backBgNode, e), e && this.resetBackBgOpacity();
  }
  resetBackBgOpacity() {
    var e;
    null != (e = this.backBgNode) && e.isValid && __rea_outer_T(this.backBgNode, 0);
  }
  scheduleOnceIfValid(e, t) {
    this.scheduleOnce(() => {
      this.isValid && e();
    }, t);
  }
  cleanupRuntime(e) {
    this.unscheduleAllCallbacks(), this.unregisterInteractionHandlers(), this.voiceToken += 1, this.performanceToken += 1, this.pointerSession = null, this.cancelDrag(), this.pauseTeacherHeadSwap(), this.stopFightSwap(), this.stopParabolaTween(), e && __rea_outer_p.stopVoice(), this.stopAllGameplayTweens();
  }
  stopAllGameplayTweens() {
    this.nodeByName.forEach(e => {
      this.stopTweenIfValid(e);
    }), this.stopTweenIfValid(this.backBgNode);
  }
  stopTweenIfValid(e) {
    null != e && e.isValid && __rea_outer_f(e);
  }
  setNodeActive(e, t) {
    null != e && e.isValid && (e.active = t);
  }
  getGameChild(e) {
    var t;
    return this.nodeByName.get(e) ?? (null == (t = this.gameNode) ? void 0 : t.getChildByName(e)) ?? null;
  }
  cacheNode(e) {
    null != e && e.isValid && (this.nodeByName.set(e.name, e), this.nodeOrigins.set(e, e.position.clone()), this.siblingOrigins.set(e, e.getSiblingIndex()), e.parent && this.homeParents.set(e, e.parent));
  }
  resolveReferences() {
    var e, t;
    this.gameNode = this.node.getChildByPath("UIPanel/gameNode"), this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.nodeByName.clear(), this.nodeOrigins.clear(), this.siblingOrigins.clear(), this.homeParents.clear(), null == (e = this.gameNode) || e.children.forEach(e => {
      this.cacheNode(e);
    }), this.cacheNode(this.node.getChildByPath("UIPanel/gameNode/teacher1/telescope")), this.telescopeTouchNode = this.node.getChildByPath("UIPanel/gameNode/clicks/touchtelescope"), this.studentTouchNode = this.node.getChildByPath("UIPanel/gameNode/clicks/touchstudent"), this.mouseHoleTouchNode = this.node.getChildByPath("UIPanel/gameNode/clicks/touchmouse_hole"), this.promptBoxNode = this.getGameChild("prompt_box"), this.promptLabel = (null == (t = this.promptBoxNode) || null == (t = t.getChildByName("Label")) ? void 0 : t.getComponent(__rea_outer_r)) ?? null, this.warnIfMissing();
  }
  warnIfMissing() {
    ["gameNode", "prompt_box", "bottle", "trash_can", "cheese", "mouse_hole", "mouse", "lamp", "student_3", "mobile_phone", "schoolbag", "headphones", "window", "telescope", "test_paper", "student4_normal", "teacher1", "end"].forEach(e => {
      ("gameNode" === e ? this.gameNode : this.getGameChild(e)) || console.warn(`[Level_66] missing ${e}`);
    }), this.promptLabel || console.warn("[Level_66] missing prompt_box/Label"), this.backBgNode || console.warn("[Level_66] missing backBG"), this.telescopeTouchNode || console.warn("[Level_66] missing clicks/touchtelescope"), this.studentTouchNode || console.warn("[Level_66] missing clicks/touchstudent"), this.mouseHoleTouchNode || console.warn("[Level_66] missing clicks/touchmouse_hole");
  }
}) || w;
__rea_outer_t._RF.pop();
export { __recovered_export_0 as default };
