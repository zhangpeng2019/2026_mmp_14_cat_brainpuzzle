// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_25.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { Node as __rea_outer_i } from "cc";
import { UITransform as __rea_outer_s } from "cc";
import { Vec2 as __rea_outer_o } from "cc";
import { Vec3 as __rea_outer_h } from "cc";
import { Label as __rea_outer_l } from "cc";
import { _decorator as __rea_outer_n } from "cc";
import { default as __rea_outer_d } from "./LevelBase";
import { LEVEL_OUTRO_DIALOGUE_HOLD_SECONDS as __rea_outer_r } from "./LevelBase";
import { LEVEL_SUCCESS_POPUP_DELAY as __rea_outer_a } from "./LevelBase";
import { default as __rea_outer_c } from "./clue-hit-tester";
import { default as __rea_outer_u } from "./AudioManager";
import { I18nController as __rea_outer_g } from "./i18n-controller";
import { UIManager as __rea_outer_p } from "./ui-manager";
import { UILayer as __rea_outer_N } from "./ui-layer";
import { UIHint as __rea_outer_v } from "./uihint";
import { UIFail as __rea_outer_f } from "./uifail";
import { GameController as __rea_outer_m } from "./GameController";
let __recovered_export_0;
var b;
__rea_outer_t._RF.push({}, "771443Zbb1B6afFcYGou0pR", "Level_25", void 0);
const {
    ccclass: y
  } = __rea_outer_n,
  A = __rea_outer_r,
  _ = __rea_outer_a,
  C = ["level25_hint1", "level25_hint2", "level25_hint3", "level25_hint4", "level25_hint5", "level25_hint6", "level25_hint7", "level25_hint8", "level25_hint9"],
  w = ["25_3", "25_4", "25_5", "25_6", "25_7", "25_8", "25_9", "25_10", "25_11"];
__recovered_export_0 = y("Level_25")(b = class extends __rea_outer_d {
  constructor(...e) {
    super(...e), this.phase = 0, this.winstate = !1, this.gameNode = null, this.leftRoot = null, this.rightRoot = null, this.medicineNode = null, this.medicineTouchNode = null, this.bubbleNode = null, this.dialogBoxNode = null, this.tipLabel = null, this.generalEndNode = null, this.backBgNode = null, this.riceNode = null, this.rice1Node = null, this.posterNode = null, this.poster1Node = null, this.hairDyeNode = null, this.hairDye1Node = null, this.dumbbellNode = null, this.dumbbell1Node = null, this.personLeft = null, this.personLeftWater = null, this.personLeftWater1 = null, this.personLeftClothes = null, this.roomLeft = null, this.roomLeft1 = null, this.windowLeft = null, this.windowLeft1 = null, this.windowLeft2 = null, this.carNode = null, this.car1Node = null, this.dogNode = null, this.dog1Node = null, this.personRight = null, this.personRightWater = null, this.personRightWater1 = null, this.personLeftClothes1 = null, this.roomRight = null, this.roomRight1 = null, this.windowRight = null, this.dog1Right = null, this.poster1Right = null, this.hairDye1Right = null, this.car1Right = null, this.dumbbell1Right = null, this.medicineNodes = new Array(9).fill(null), this.completedSteps = new Set(), this.stepDropTargets = new Array(10).fill(null), this.stepAppliers = new Array(10).fill(null), this.isInteractionLocked = !0, this.usedDumbbell = !1, this.isWindowOpen = !1, this.isDumbbell1Removed = !1, this.voiceToken = 0, this.activeDragState = null, this.remainingMedicineCount = 9, this.onTouchStart = e => {
      if (1 !== this.phase || this.isInteractionLocked || this.activeDragState) return;
      const t = this.getTouchWorldPoint(e);
      if (this.tryOpenWindow(t)) return void (e.propagationStopped = !0);
      if (!this.isPointInsideNode(this.medicineTouchNode, t)) return;
      const i = this.findHighestActiveMedicine();
      i && (this.beginDrag(i, e), e.propagationStopped = !0);
    }, this.onTouchMove = e => {
      if (!this.activeDragState || 1 !== this.phase || this.isInteractionLocked) return;
      const t = this.activeDragState;
      this.setDragNodePositionFromTouch(e, t.dragNode, t.dragParent, t.touchOffset), e.propagationStopped = !0;
    }, this.onTouchEnd = e => {
      if (!this.activeDragState || 1 !== this.phase) return;
      e.propagationStopped = !0;
      const t = this.activeDragState;
      this.activeDragState = null, this.isInteractionLocked ? this.restoreDragNode(t) : this.resolveMedicineDrop(t);
    }, this.onBubbleHide = () => {
      this.isValid && this.hideBubble();
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.bindStepDefinitions(), this.allItemNum = 9, this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.enterPhase0();
  }
  onDestroy() {
    this.unscheduleAllCallbacks(), this.unregisterHandlers(), __rea_outer_u.stopVoice(), this.activeDragState = null;
  }
  handleTimeExpired() {
    return !!(this.phase >= 2 || this.winstate);
  }
  showHint() {
    if (1 !== this.phase) return;
    const e = this.findFirstIncompleteStep();
    if (e < 0) return;
    const t = __rea_outer_g.getInstance().getKey(C[e - 1]);
    __rea_outer_p.getInstance().showView(__rea_outer_v, void 0, {
      body: t
    });
  }
  getGameProgressSnapshot() {
    return {
      progress: this.completedSteps.size / 9,
      label: `${this.completedSteps.size}/9`
    };
  }
  markAllTasksCompleted() {
    for (let e = 1; e <= 9; e += 1) this.completedSteps.add(e);
    this.hasInstallNum = 9, this.usedDumbbell = !1, this.phase = 2, this.winstate = !0, this.isInteractionLocked = !0, this.unregisterHandlers();
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.isInteractionLocked = !0, this.usedDumbbell = !1, this.isWindowOpen = !1, this.isDumbbell1Removed = !1, this.voiceToken = 0, this.activeDragState = null, this.remainingMedicineCount = 9, this.completedSteps.clear(), this.hasInstallNum = 0, this.hideBubble(), this.applyPhase0Visibility();
  }
  enterPhase0() {
    this.phase = 0, this.isInteractionLocked = !0, __rea_outer_u.playMusic("bgm4", !0, .5), this.applyPhase0Visibility(), this.playVoiceEffect("25_1", () => {
      this.isValid && 0 === this.phase && this.playVoiceEffect("25_2", () => {
        this.isValid && 0 === this.phase && this.enterPhase1();
      });
    });
  }
  skipOpeningToPlay() {
    return 0 === this.phase && (this.voiceToken += 1, this.stopOpeningDialogue(), this.enterPhase1(), !0);
  }
  enterPhase1() {
    0 === this.phase && (this.phase = 1, this.isInteractionLocked = !1, this.applyPhase1PlayableVisibility(), this.showAllMedicines(), this.registerHandlers(), __rea_outer_m.getInstance().refreshGameProgress());
  }
  applyPhase0Visibility() {
    this.setChildrenActiveExcept(this.leftRoot, new Set(["room_left", "person_left", "person_left_water"])), this.setChildrenActiveExcept(this.rightRoot, new Set(["room_right", "person_right", "person_right_water", "car_1", "dumbbell_1"])), this.setNodeActive(this.roomLeft1, !1), this.setNodeActive(this.roomRight1, !1), this.setNodeActive(this.riceNode, !0), this.setNodeActive(this.rice1Node, !1), this.setNodeActive(this.posterNode, !0), this.setNodeActive(this.poster1Node, !1), this.setNodeActive(this.hairDyeNode, !0), this.setNodeActive(this.hairDye1Node, !1), this.setNodeActive(this.dumbbellNode, !0), this.setNodeActive(this.dumbbell1Node, !1), this.hideAllMedicines(), this.setNodeActive(this.generalEndNode, !1), this.setNodeActive(this.backBgNode, !1);
  }
  applyPhase1PlayableVisibility() {
    this.setNodeActive(this.windowLeft, !0), this.setNodeActive(this.windowLeft1, !1), this.setNodeActive(this.windowLeft2, !1), this.setNodeActive(this.carNode, !1), this.setNodeActive(this.car1Node, !1), this.setNodeActive(this.dogNode, !1), this.setNodeActive(this.dog1Node, !1);
  }
  bindStepDefinitions() {
    this.stepDropTargets[1] = this.personLeftWater, this.stepDropTargets[2] = this.riceNode, this.stepDropTargets[3] = this.personLeft, this.stepDropTargets[4] = this.roomLeft, this.stepDropTargets[5] = this.posterNode, this.stepDropTargets[6] = this.hairDyeNode, this.stepDropTargets[7] = this.windowLeft, this.stepDropTargets[8] = this.carNode, this.stepDropTargets[9] = this.dogNode, this.stepAppliers[1] = () => {
      this.setNodeActive(this.personLeftWater, !1), this.setNodeActive(this.personLeftWater1, !0), this.setNodeActive(this.personRightWater, !1), this.setNodeActive(this.personRightWater1, !0);
    }, this.stepAppliers[2] = () => {
      this.setNodeActive(this.riceNode, !1), this.setNodeActive(this.rice1Node, !0);
    }, this.stepAppliers[3] = () => {
      this.setNodeActive(this.personLeft, !1), this.setNodeActive(this.personLeftClothes, !0), this.setNodeActive(this.personRight, !1), this.setNodeActive(this.personLeftClothes1, !0);
    }, this.stepAppliers[4] = () => {
      this.setNodeActive(this.roomLeft, !1), this.setNodeActive(this.roomLeft1, !0), this.setNodeActive(this.roomRight, !1), this.setNodeActive(this.roomRight1, !0);
    }, this.stepAppliers[5] = () => {
      this.setNodeActive(this.posterNode, !1), this.setNodeActive(this.poster1Node, !0), this.setNodeActive(this.poster1Right, !0);
    }, this.stepAppliers[6] = () => {
      this.setNodeActive(this.hairDyeNode, !1), this.setNodeActive(this.hairDye1Node, !0), this.setNodeActive(this.hairDye1Right, !0);
    }, this.stepAppliers[7] = () => {
      this.setNodeActive(this.windowLeft, !1), this.setNodeActive(this.windowLeft1, !0), this.setNodeActive(this.windowRight, !0);
    }, this.stepAppliers[8] = () => {
      this.setNodeActive(this.carNode, !1), this.setNodeActive(this.car1Node, !0), this.setNodeActive(this.car1Right, !1), this.setNodeActive(this.dumbbell1Right, !1), this.isDumbbell1Removed = !0;
    }, this.stepAppliers[9] = () => {
      this.setNodeActive(this.dogNode, !1), this.setNodeActive(this.dog1Node, !0), this.setNodeActive(this.dog1Right, !0);
    };
  }
  registerHandlers() {
    this.node.on(__rea_outer_i.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(__rea_outer_i.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(__rea_outer_i.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(__rea_outer_i.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
  }
  unregisterHandlers() {
    var e;
    null != (e = this.node) && e.isValid && (this.node.off(__rea_outer_i.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(__rea_outer_i.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(__rea_outer_i.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(__rea_outer_i.EventType.TOUCH_CANCEL, this.onTouchEnd, this));
  }
  tryOpenWindow(e) {
    return !(!this.completedSteps.has(7) || this.isWindowOpen) && !!this.isPointInsideNode(this.windowLeft1, e) && (this.isWindowOpen = !0, this.setNodeActive(this.windowLeft1, !1), this.setNodeActive(this.windowLeft2, !0), this.setNodeActive(this.carNode, !0), this.setNodeActive(this.dogNode, !0), !0);
  }
  resolveMedicineDrop(e) {
    var t;
    const i = this.findHitStep(e.dragNode);
    i > 0 ? this.resolveCorrectStep(e, i) : this.isNodeOverlapping(e.dragNode, this.dumbbellNode) && null != (t = this.dumbbellNode) && t.active ? this.resolveDumbbellError(e) : this.restoreDragNode(e);
  }
  findHitStep(e) {
    for (let t = 1; t <= 9; t += 1) {
      if (this.completedSteps.has(t)) continue;
      if (!this.isStepDropEnabled(t)) continue;
      const i = this.stepDropTargets[t];
      if (this.isNodeOverlapping(e, i)) return t;
    }
    return 0;
  }
  isStepDropEnabled(e) {
    return 8 === e || 9 === e ? this.completedSteps.has(7) && this.isWindowOpen : 7 !== e || !0 === (null == (t = this.windowLeft) ? void 0 : t.active);
    var t;
  }
  resolveCorrectStep(e, t) {
    this.consumeMedicine(e), this.completedSteps.add(t), this.hasInstallNum = this.completedSteps.size;
    const i = this.stepAppliers[t];
    i && i(), __rea_outer_u.playEffect_1("level25_1"), 9 === t && __rea_outer_u.playEffect_1("level25_3"), __rea_outer_m.getInstance().refreshGameProgress();
    const s = w[t - 1];
    this.playVoiceEffect(s, () => {
      this.isValid && this.evaluateEndAfterVoice();
    });
  }
  resolveDumbbellError(e) {
    this.consumeMedicine(e), this.usedDumbbell = !0, this.setNodeActive(this.dumbbellNode, !1), this.setNodeActive(this.dumbbell1Node, !0), this.isDumbbell1Removed && this.setNodeActive(this.dumbbell1Right, !0), __rea_outer_u.playEffect_1("level25_2"), this.playVoiceEffect("25_12", () => {
      this.isValid && this.evaluateEndAfterVoice();
    });
  }
  consumeMedicine(e) {
    this.hideDragItem(e), this.remainingMedicineCount = Math.max(0, this.remainingMedicineCount - 1);
  }
  evaluateEndAfterVoice() {
    if (this.phase >= 2) return;
    this.completedSteps.size >= 9 && !this.usedDumbbell ? this.beginSuccessSequence() : this.remainingMedicineCount <= 0 && this.beginFailSequence();
  }
  beginSuccessSequence() {
    this.beginResultPhase(!0), this.playVoiceEffect("25_14", () => {
      this.isValid && (this.setNodeActive(this.generalEndNode, !0), this.scheduleOnce(() => {
        this.isValid && this.showLevelSuccess(0);
      }, 1.5));
    });
  }
  beginFailSequence() {
    this.beginResultPhase(!1), this.playVoiceEffect("25_13", () => {
      this.isValid && this.scheduleOnce(() => {
        this.isValid && __rea_outer_p.getInstance().showView(__rea_outer_f, __rea_outer_N.WIN_ANIMATION);
      }, _);
    });
  }
  beginResultPhase(e) {
    this.phase >= 2 || (this.phase = 2, this.winstate = e, this.isInteractionLocked = !0, this.unregisterHandlers(), this.resetActiveDrag(), __rea_outer_m.getInstance().pauseTimer());
  }
  beginDrag(e, t) {
    const i = e.parent;
    if (!i) return;
    const o = e.position.clone(),
      h = e.getSiblingIndex(),
      l = e.worldPosition.clone(),
      n = this.gameNode ?? i;
    e.setParent(n);
    const d = n.getComponent(__rea_outer_s);
    if (d) {
      const t = d.convertToNodeSpaceAR(l);
      e.setPosition(t);
    }
    e.setSiblingIndex(n.children.length - 1);
    const r = this.calculateTouchOffset(t, e, n);
    this.setDragNodePositionFromTouch(t, e, n, r), this.activeDragState = {
      dragNode: e,
      dragParent: n,
      touchOffset: r,
      originParent: i,
      originPosition: o,
      originSiblingIndex: h
    };
  }
  resetActiveDrag() {
    this.activeDragState && (this.restoreDragNode(this.activeDragState), this.activeDragState = null);
  }
  restoreDragNode(e) {
    const t = e.dragNode;
    t.isValid && (t.setParent(e.originParent), t.setSiblingIndex(e.originSiblingIndex), t.setPosition(e.originPosition));
  }
  hideDragItem(e) {
    const t = e.dragNode;
    t.isValid && (this.restoreDragNode(e), this.setNodeActive(t, !1));
  }
  findHighestActiveMedicine() {
    for (let e = 9; e >= 1; e -= 1) {
      const t = this.medicineNodes[e - 1];
      if (null != t && t.isValid && t.active) return t;
    }
    return null;
  }
  hideAllMedicines() {
    for (let e = 0; e < 9; e += 1) this.setNodeActive(this.medicineNodes[e], !1);
  }
  showAllMedicines() {
    for (let e = 0; e < 9; e += 1) this.setNodeActive(this.medicineNodes[e], !0);
    this.remainingMedicineCount = 9;
  }
  findFirstIncompleteStep() {
    for (let e = 1; e <= 9; e += 1) if (!this.completedSteps.has(e)) return e;
    return -1;
  }
  playVoiceEffect(e, t) {
    this.voiceToken += 1;
    const i = this.voiceToken;
    this.showVoiceBubble(e);
    let s = !1;
    const o = () => {
        !s && this.isValid && i === this.voiceToken && (s = !0, this.unschedule(h), t());
      },
      h = () => {
        o();
      };
    this.scheduleOnce(h, 2.5), __rea_outer_u.stopVoice(), __rea_outer_u.playEffect_1(e, o);
  }
  showVoiceBubble(e) {
    const t = __rea_outer_g.getInstance();
    this.tipLabel && (this.tipLabel.string = t.getKey(e), this.setNodeActive(this.tipLabel.node, !0)), this.setNodeActive(this.dialogBoxNode, !0), this.setNodeActive(this.bubbleNode, !0), this.unschedule(this.onBubbleHide), this.scheduleOnce(this.onBubbleHide, A);
  }
  hideBubble() {
    var e;
    this.setNodeActive(this.bubbleNode, !1), this.setNodeActive(this.dialogBoxNode, !1), this.setNodeActive((null == (e = this.tipLabel) ? void 0 : e.node) ?? null, !1);
  }
  setChildrenActiveExcept(e, t) {
    if (null != e && e.isValid) for (const i of e.children) i.active = t.has(i.name);
  }
  setNodeActive(e, t) {
    null != e && e.isValid && (e.active = t);
  }
  isPointInsideNode(e, t) {
    if (null == e || !e.isValid || !e.activeInHierarchy) return !1;
    const i = e.getComponent(__rea_outer_s);
    return !!i && i.getBoundingBoxToWorld().contains(t);
  }
  isNodeOverlapping(e, t) {
    return __rea_outer_c.isDragNearTarget(e, t);
  }
  getTouchWorldPoint(e) {
    const t = e.getUILocation();
    return new __rea_outer_o(t.x, t.y);
  }
  getTouchLocalPosition(e, t) {
    const i = e.getUILocation(),
      o = t.getComponent(__rea_outer_s);
    return o ? o.convertToNodeSpaceAR(new __rea_outer_h(i.x, i.y, 0)) : __rea_outer_h.ZERO.clone();
  }
  calculateTouchOffset(e, t, i) {
    const s = this.getTouchLocalPosition(e, i);
    return new __rea_outer_h(t.position.x - s.x, t.position.y - s.y, 0);
  }
  setDragNodePositionFromTouch(e, t, i, s) {
    const o = this.getTouchLocalPosition(e, i);
    t.setPosition(o.x + s.x, o.y + s.y, t.position.z);
  }
  resolveReferences() {
    var e, t, i, s, o, h, n, d, r, a, c, u, g, p, N, v, f, m, b, y, A, _, C, w, R, L, D, T;
    this.gameNode = this.node.getChildByPath("UIPanel/gameNode"), this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.bubbleNode = this.node.getChildByPath("UIPanel/bubble"), this.dialogBoxNode = (null == (e = this.bubbleNode) ? void 0 : e.getChildByName("dialog_box")) ?? null, this.tipLabel = (null == (t = this.bubbleNode) || null == (t = t.getChildByPath("dialog_box/Label")) ? void 0 : t.getComponent(__rea_outer_l)) ?? null, this.generalEndNode = this.node.getChildByPath("UIPanel/gameNode/general_end");
    const S = this.gameNode;
    this.leftRoot = (null == S ? void 0 : S.getChildByName("left")) ?? null, this.rightRoot = (null == S ? void 0 : S.getChildByName("right")) ?? null, this.medicineNode = (null == S ? void 0 : S.getChildByName("medicineNode")) ?? null, this.medicineTouchNode = (null == (i = this.medicineNode) ? void 0 : i.getChildByName("medicinetouch")) ?? null, this.riceNode = (null == S ? void 0 : S.getChildByName("rice")) ?? null, this.rice1Node = (null == S ? void 0 : S.getChildByName("rice_1")) ?? null, this.posterNode = (null == S ? void 0 : S.getChildByName("poster")) ?? null, this.poster1Node = (null == S ? void 0 : S.getChildByName("poster1")) ?? null, this.hairDyeNode = (null == S ? void 0 : S.getChildByName("hair_dye")) ?? null, this.hairDye1Node = (null == S ? void 0 : S.getChildByName("hair_dye1")) ?? null, this.dumbbellNode = (null == S ? void 0 : S.getChildByName("dumbbell")) ?? null, this.dumbbell1Node = (null == S ? void 0 : S.getChildByName("dumbbell1")) ?? null, this.personLeft = (null == (s = this.leftRoot) ? void 0 : s.getChildByName("person_left")) ?? null, this.personLeftWater = (null == (o = this.leftRoot) ? void 0 : o.getChildByName("person_left_water")) ?? null, this.personLeftWater1 = (null == (h = this.leftRoot) ? void 0 : h.getChildByName("person_left_water_1")) ?? null, this.personLeftClothes = (null == (n = this.leftRoot) ? void 0 : n.getChildByName("person_left_clothes")) ?? null, this.roomLeft = (null == (d = this.leftRoot) ? void 0 : d.getChildByName("room_left")) ?? null, this.roomLeft1 = (null == (r = this.leftRoot) ? void 0 : r.getChildByName("room_left_1")) ?? null, this.windowLeft = (null == (a = this.leftRoot) ? void 0 : a.getChildByName("window_left")) ?? null, this.windowLeft1 = (null == (c = this.leftRoot) ? void 0 : c.getChildByName("window_left_1")) ?? null, this.windowLeft2 = (null == (u = this.leftRoot) ? void 0 : u.getChildByName("window_left_2")) ?? null, this.carNode = (null == (g = this.leftRoot) ? void 0 : g.getChildByName("car")) ?? null, this.car1Node = (null == (p = this.leftRoot) ? void 0 : p.getChildByName("car1")) ?? null, this.dogNode = (null == (N = this.leftRoot) ? void 0 : N.getChildByName("dog")) ?? null, this.dog1Node = (null == (v = this.leftRoot) ? void 0 : v.getChildByName("dog1")) ?? null, this.personRight = (null == (f = this.rightRoot) ? void 0 : f.getChildByName("person_right")) ?? null, this.personRightWater = (null == (m = this.rightRoot) ? void 0 : m.getChildByName("person_right_water")) ?? null, this.personRightWater1 = (null == (b = this.rightRoot) ? void 0 : b.getChildByName("person_right_water_1")) ?? null, this.personLeftClothes1 = (null == (y = this.rightRoot) ? void 0 : y.getChildByName("person_left_clothes_1")) ?? null, this.roomRight = (null == (A = this.rightRoot) ? void 0 : A.getChildByName("room_right")) ?? null, this.roomRight1 = (null == (_ = this.rightRoot) ? void 0 : _.getChildByName("room_right_1")) ?? null, this.windowRight = (null == (C = this.rightRoot) ? void 0 : C.getChildByName("window_right")) ?? null, this.dog1Right = (null == (w = this.rightRoot) ? void 0 : w.getChildByName("dog_1")) ?? null, this.poster1Right = (null == (R = this.rightRoot) ? void 0 : R.getChildByName("poster_1")) ?? null, this.hairDye1Right = (null == (L = this.rightRoot) ? void 0 : L.getChildByName("hair_dye_1")) ?? null, this.car1Right = (null == (D = this.rightRoot) ? void 0 : D.getChildByName("car_1")) ?? null, this.dumbbell1Right = (null == (T = this.rightRoot) ? void 0 : T.getChildByName("dumbbell_1")) ?? null;
    for (let e = 1; e <= 9; e += 1) {
      var B;
      this.medicineNodes[e - 1] = (null == (B = this.medicineNode) ? void 0 : B.getChildByName(`medicine${e}`)) ?? null;
    }
  }
}) || b;
__rea_outer_t._RF.pop();
export { __recovered_export_0 as default };
