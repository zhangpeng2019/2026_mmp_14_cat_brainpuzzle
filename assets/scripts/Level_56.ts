// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_56.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { Node as __rea_outer_i } from "cc";
import { Button as __rea_outer_s } from "cc";
import { tween as __rea_outer_n } from "cc";
import { Vec3 as __rea_outer_o } from "cc";
import { Label as __rea_outer_l } from "cc";
import { UITransform as __rea_outer_h } from "cc";
import { Vec2 as __rea_outer_a } from "cc";
import { _decorator as __rea_outer_c } from "cc";
import { default as __rea_outer_r } from "./LevelBase";
import { default as __rea_outer_d } from "./AudioManager";
import { I18nController as __rea_outer_u } from "./i18n-controller";
import { UIManager as __rea_outer_p } from "./ui-manager";
import { UILayer as __rea_outer_g } from "./ui-layer";
import { UIHint as __rea_outer_f } from "./uihint";
import { UIFail as __rea_outer_b } from "./uifail";
import { GameController as __rea_outer_v } from "./GameController";
import { stopAllTweens as __rea_outer_N } from "./CocosCompat";
import { ensureUITransform as __rea_outer_m } from "./CocosCompat";
let __recovered_export_0;
var w;
__rea_outer_t._RF.push({}, "a56b0wRfVZOM59EVaZrAABW", "Level_56", void 0);
const {
    ccclass: y
  } = __rea_outer_c,
  I = "level56_1",
  T = "level56_2",
  B = .1,
  V = 800,
  C = ["boue", "gray", "red", "green", "orange"],
  k = [1, 2, 3, 4, 5];
__recovered_export_0 = y("Level_56")(w = class extends __rea_outer_r {
  constructor(...e) {
    super(...e), this.phase = 0, this.winstate = !1, this.gameNode = null, this.backBgNode = null, this.bubbleNode = null, this.bubbleLabel = null, this.clickRootNode = null, this.infoButtonNode = null, this.infoButton = null, this.demoNode = null, this.bgNode = null, this.prohibitNode = null, this.winMarkNode = null, this.ambulanceNode = null, this.vehicles = [], this.occupancy = [], this.swipeState = null, this.voiceToken = 0, this.currentVoiceKey = "", this.hasTriggeredWin = !1;
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.allItemNum = 1, this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.applyInitialVisibility(), this.enterPhase0();
  }
  onDestroy() {
    this.unscheduleAllCallbacks(), this.unregisterHandlers(), this.stopTrackedTweens(), super.onDestroy();
  }
  handleTimeExpired() {
    return !!(this.phase >= 2 || this.winstate);
  }
  showHint() {
    const e = __rea_outer_u.getInstance().getKey("level56_legend");
    __rea_outer_p.getInstance().showView(__rea_outer_f, void 0, {
      body: e
    });
  }
  getGameProgressSnapshot() {
    const e = this.hasInstallNum;
    return {
      progress: e / 1,
      label: `${e}/1`
    };
  }
  markAllTasksCompleted() {
    this.hasInstallNum = 1;
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.hasTriggeredWin = !1, this.swipeState = null, this.voiceToken = 0, this.currentVoiceKey = "", this.hasInstallNum = 0, this.vehicles.forEach(e => {
      e.isMoving = !1, e.isExited = !1;
    }), this.rebuildOccupancyFromVehicles(), __rea_outer_d.stopVoice();
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_d.playMusic("bgm4", !0, .5), this.setInputBlocked(!0), this.setNodeActive(this.clickRootNode, !1), __rea_outer_v.getInstance().refreshGameProgress(), this.playAmbulanceBlink(), this.playBubbleVoice("56_1", () => {
      this.isValid && 0 === this.phase && (this.hideBubble(), this.enterPhase1());
    });
  }
  skipOpeningToPlay() {
    return 0 === this.phase && (this.voiceToken += 1, this.stopOpeningDialogue(), this.hideBubble(), this.enterPhase1(), !0);
  }
  enterPhase1() {
    0 === this.phase && (this.phase = 1, this.setInputBlocked(!1), this.setNodeActive(this.clickRootNode, !0), this.registerHandlers(), __rea_outer_v.getInstance().refreshGameProgress());
  }
  enterPhase2Success() {
    this.phase >= 2 || (this.phase = 2, this.winstate = !0, this.hasTriggeredWin = !0, this.swipeState = null, this.unregisterHandlers(), this.setInputBlocked(!0), this.hideBubble(), this.setNodeActive(this.clickRootNode, !1), this.hasInstallNum = 1, __rea_outer_v.getInstance().refreshGameProgress(), __rea_outer_v.getInstance().pauseTimer(), this.playPopupScale(this.winMarkNode, "level56_3", () => {
      this.showLevelSuccess(1);
    }));
  }
  beginTimeoutFail() {
    this.phase = 2, this.winstate = !1, this.swipeState = null, this.unregisterHandlers(), this.voiceToken += 1, this.stopCurrentVoice(), this.hideBubble(), this.stopTrackedTweens(), this.setInputBlocked(!0), this.setNodeActive(this.clickRootNode, !1), __rea_outer_v.getInstance().pauseTimer(), __rea_outer_p.getInstance().showView(__rea_outer_b, __rea_outer_g.WIN_ANIMATION);
  }
  registerHandlers() {
    var e;
    this.node.on(__rea_outer_i.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(__rea_outer_i.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(__rea_outer_i.EventType.TOUCH_CANCEL, this.onTouchEnd, this), null == (e = this.infoButton) || e.node.on(__rea_outer_s.EventType.CLICK, this.onInfoButtonClick, this);
  }
  unregisterHandlers() {
    var e;
    this.node.off(__rea_outer_i.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(__rea_outer_i.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(__rea_outer_i.EventType.TOUCH_CANCEL, this.onTouchEnd, this), null != (e = this.infoButton) && null != (e = e.node) && e.isValid && this.infoButton.node.off(__rea_outer_s.EventType.CLICK, this.onInfoButtonClick, this);
  }
  onInfoButtonClick() {
    this.showHint();
  }
  onTouchStart(e) {
    if (1 !== this.phase || this.winstate) return;
    const t = this.getTouchWorldPoint(e);
    if (this.isPointInsideNode(this.infoButtonNode, t)) return;
    const i = this.findVehicleAt(t);
    !i || i.isMoving || i.isExited || (this.swipeState = {
      vehicleId: i.id,
      touchId: e.getID(),
      startPoint: t.clone()
    });
  }
  onTouchEnd(e) {
    if (!this.swipeState || e.getID() !== this.swipeState.touchId) return;
    const t = this.swipeState;
    if (this.swipeState = null, 1 !== this.phase || this.winstate) return;
    const i = this.getVehicleById(t.vehicleId);
    if (!i || i.isMoving || i.isExited) return;
    const s = this.getTouchWorldPoint(e),
      n = s.x - t.startPoint.x,
      o = s.y - t.startPoint.y;
    Math.sqrt(n * n + o * o) < 20 ? this.handleTap(i) : this.handleSwipe(i, n, o);
  }
  handleTap(e) {
    e.isAmbulance && (this.canAmbulanceExitUp(e) ? this.beginExit(e, "up") : this.playInvalidShake(e, !1));
  }
  handleSwipe(e, t, i) {
    const s = Math.abs(t) >= Math.abs(i);
    if (s !== ("horizontal" === e.axis)) return void this.playInvalidShake(e, s);
    const n = this.resolveSlideDir(e.axis, t, i),
      o = this.computeSlideEnd(e, n);
    o.didMove || o.isExit ? o.isExit ? this.beginExit(e, n) : this.beginSlide(e, o.minCol, o.minRow, !0) : this.playInvalidShake(e, s);
  }
  resolveSlideDir(e, t, i) {
    return "horizontal" === e ? t >= 0 ? "right" : "left" : i >= 0 ? "up" : "down";
  }
  computeSlideEnd(e, t) {
    let i = e.minCol,
      s = e.minRow,
      n = !1;
    for (;;) {
      const o = this.stepMin(i, s, t),
        l = this.classifyNextStep(e, o.col, o.row, t);
      if ("blocked" === l) return {
        minCol: i,
        minRow: s,
        isExit: !1,
        didMove: n
      };
      if ("exit" === l) return {
        minCol: i,
        minRow: s,
        isExit: !0,
        didMove: !0
      };
      i = o.col, s = o.row, n = !0;
    }
  }
  classifyNextStep(e, t, i, s) {
    const n = this.getCells(t, i, e.axis, e.length);
    return n.some(e => !this.isOnBoard(e.col, e.row)) ? this.canExit(e, s) ? "exit" : "blocked" : this.isBlockedByOther(e.id, n) ? "blocked" : "free";
  }
  canExit(e, t) {
    return "up" === t ? this.isTopGap(e.minCol) : "down" === t ? this.isBottomGap(e.minCol) : "left" === t ? this.isLeftGap(e.minRow) : this.isRightGap(e.minRow);
  }
  canAmbulanceExitUp(e) {
    if ("vertical" !== e.axis || !this.isTopGap(e.minCol)) return !1;
    for (let t = e.minRow - 1; t >= 1; t -= 1) if (this.isBlockedByOther(e.id, [{
      col: e.minCol,
      row: t
    }])) return !1;
    return !0;
  }
  beginSlide(e, t, i, s) {
    const o = e.node;
    if (null == o || !o.isValid) return;
    const l = this.positionAfterShift(o.position, e.minCol, e.minRow, t, i);
    this.clearVehicleOccupancy(e), e.minCol = t, e.minRow = i, this.occupyVehicle(e), e.isMoving = !0, __rea_outer_d.playEffect_1(I);
    const h = this.durationForDistance(o.position, l);
    __rea_outer_N(o), __rea_outer_n(o).to(h, {
      position: l
    }).call(() => {
      this.isValid && o.isValid && (e.isMoving = !1, s && 1 === this.phase && !this.winstate && __rea_outer_d.playEffect_1(T));
    }).start();
  }
  beginExit(e, t) {
    const i = e.node;
    if (null == i || !i.isValid) return;
    this.clearVehicleOccupancy(e), e.isExited = !0, e.isMoving = !0, __rea_outer_d.playEffect_1(I);
    const s = this.getOffscreenPosition(i.position, t),
      o = this.durationForDistance(i.position, s);
    __rea_outer_N(i), __rea_outer_n(i).to(o, {
      position: s
    }, {
      onUpdate: () => {
        this.tryTriggerAmbulanceWin(e, i, t);
      }
    }).call(() => {
      this.isValid && i.isValid && (this.tryTriggerAmbulanceWin(e, i, t), this.setNodeActive(i, !1), e.isMoving = !1);
    }).start();
  }
  tryTriggerAmbulanceWin(e, t, i) {
    !e.isAmbulance || "up" !== i || this.hasTriggeredWin || this.phase >= 2 || t.position.y < 540 || this.enterPhase2Success();
  }
  playInvalidShake(e, t) {
    const i = e.node;
    if (null == i || !i.isValid) return;
    const s = i.position.clone(),
      l = t ? 10 : 0,
      h = t ? 0 : 10;
    e.isMoving = !0, __rea_outer_d.playEffect_1(T), __rea_outer_N(i), __rea_outer_n(i).to(B, {
      position: new __rea_outer_o(s.x + l, s.y + h, 0)
    }).to(B, {
      position: new __rea_outer_o(s.x - l, s.y - h, 0)
    }).to(B, {
      position: new __rea_outer_o(s.x + l, s.y + h, 0)
    }).to(B, {
      position: new __rea_outer_o(s.x, s.y, 0)
    }).call(() => {
      this.isValid && (e.isMoving = !1);
    }).start();
  }
  playAmbulanceBlink() {
    const e = this.ambulanceNode;
    if (null == e || !e.isValid) return;
    let t = 5;
    const i = () => {
      !this.isValid || t <= 0 || !e.isValid ? this.setNodeActive(e, !0) : (this.setNodeActive(e, !1), this.scheduleOnceIfValid(() => {
        this.setNodeActive(e, !0), t -= 1, t > 0 && this.scheduleOnceIfValid(i, .1);
      }, .1));
    };
    i();
  }
  playBubbleVoice(e, t) {
    this.voiceToken += 1;
    const i = this.voiceToken;
    this.bubbleLabel && (this.bubbleLabel.string = __rea_outer_u.getInstance().getKey(e)), this.setNodeActive(this.bubbleNode, !0);
    let s = !1;
    const n = () => {
        !s && this.isValid && i === this.voiceToken && (s = !0, this.unschedule(o), t());
      },
      o = () => {
        n();
      };
    this.scheduleOnce(o, 12), this.stopCurrentVoice(), this.currentVoiceKey = e, __rea_outer_d.playEffect_1(e, n);
  }
  stopCurrentVoice() {
    __rea_outer_d.stopVoice(), this.currentVoiceKey && (__rea_outer_d.stopOneEffect(this.currentVoiceKey), this.currentVoiceKey = "");
  }
  hideBubble() {
    this.setNodeActive(this.bubbleNode, !1);
  }
  playPopupScale(e, t, i) {
    if (null == e || !e.isValid) return __rea_outer_d.playEffect_1(t), void i();
    this.bringNodeToFront(e), e.setScale(0, 0, 1), this.setNodeActive(e, !0), __rea_outer_d.playEffect_1(t), __rea_outer_N(e), __rea_outer_n(e).to(.25, {
      scale: new __rea_outer_o(1, 1, 1)
    }).call(() => {
      this.isValid && i();
    }).start();
  }
  setInputBlocked(e) {
    this.setNodeActive(this.backBgNode, e);
  }
  applyInitialVisibility() {
    var e, t, i, s, n;
    this.setNodeActive(this.bgNode, !0), this.setNodeActive(this.prohibitNode, !0), this.vehicles.forEach(e => {
      this.setNodeActive(e.node, !0);
    }), this.setNodeActive(this.winMarkNode, !1), null != (e = this.winMarkNode) && e.isValid && this.winMarkNode.setScale(1, 1, 1), this.setNodeActive((null == (t = this.gameNode) ? void 0 : t.getChildByName("clicks")) ?? null, !1), this.setNodeActive((null == (i = this.gameNode) ? void 0 : i.getChildByName("drags")) ?? null, !1), this.setNodeActive((null == (s = this.gameNode) ? void 0 : s.getChildByName("swips")) ?? null, !1), this.setNodeActive(this.clickRootNode, !1), this.setNodeActive(this.demoNode, !1), this.setNodeActive(this.bubbleNode, !1), this.setNodeActive((null == (n = this.bubbleNode) ? void 0 : n.getChildByName("dialog_box_1")) ?? null, !1);
  }
  resolveReferences() {
    var e, t, i;
    const n = this.node.getChildByPath("UIPanel");
    this.gameNode = this.node.getChildByPath("UIPanel/gameNode"), this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.bubbleNode = this.node.getChildByPath("UIPanel/bubble"), this.bubbleLabel = (null == (e = this.bubbleNode) || null == (e = e.getChildByPath("dialog_box/Label")) ? void 0 : e.getComponent(__rea_outer_l)) ?? null, this.clickRootNode = this.node.getChildByPath("UIPanel/click_root"), this.infoButtonNode = (null == (t = this.clickRootNode) ? void 0 : t.getChildByName("infoButton")) ?? null, this.infoButton = (null == (i = this.infoButtonNode) ? void 0 : i.getComponent(__rea_outer_s)) ?? null, this.setNodeActive(this.infoButtonNode, !1), this.demoNode = this.node.getChildByPath("UIPanel/demo");
    const o = this.gameNode;
    o && (__rea_outer_m(o, 1080, 1920), this.disableHitTest(o));
    const h = (null == o ? void 0 : o.children) ?? [];
    this.bgNode = h[0] ?? null, this.ambulanceNode = h[6] ?? null, this.prohibitNode = h[7] ?? null, this.winMarkNode = h[8] ?? null, this.disableHitTest(this.prohibitNode), this.disableHitTest(this.winMarkNode), this.disableHitTest(this.clickRootNode), this.disableHitTest(this.demoNode), this.disableHitTest(this.bgNode), k.forEach(e => {
      this.disableHitTest(h[e] ?? null);
    }), this.buildVehicles(h), this.warnIfMissing("UIPanel", n), this.warnIfMissing("UIPanel/gameNode", this.gameNode), this.warnIfMissing("UIPanel/click_root", this.clickRootNode), this.warnIfMissing("infoButton", this.infoButtonNode), this.warnIfMissing("car_ambulance_on", this.ambulanceNode), this.warnIfMissing("prohibit", this.prohibitNode), this.warnIfMissing("general_end", this.winMarkNode), this.warnIfMissing("bubble", this.bubbleNode), 77 !== this.vehicles.length && console.warn(`[Level_56] expected 77 vehicles, got ${this.vehicles.length}`);
  }
  buildVehicles(e) {
    this.vehicles.length = 0, k.forEach((t, i) => {
      const s = e[t];
      s ? s.children.forEach(e => {
        this.pushVehicleFromNode(e, !1);
      }) : this.warnIfMissing(C[i], null);
    }), this.ambulanceNode && this.pushVehicleFromNode(this.ambulanceNode, !0), this.rebuildOccupancyFromVehicles();
  }
  pushVehicleFromNode(e, t) {
    const i = e.getComponent(__rea_outer_h),
      s = this.parseAxis(e.name, t),
      n = this.parseLength(i, s),
      o = this.localToMinCell(e.position, i, s, n);
    this.vehicles.push({
      id: this.vehicles.length + 1,
      node: e,
      isAmbulance: t,
      axis: s,
      length: n,
      minCol: o.col,
      minRow: o.row,
      isMoving: !1,
      isExited: !1
    });
  }
  parseAxis(e, t) {
    return t ? "vertical" : e.includes("_left") || e.includes("_right") ? "horizontal" : "vertical";
  }
  parseLength(e, t) {
    if (!e) return 2;
    const i = "horizontal" === t ? e.width : e.height;
    return Math.max(2, Math.round(i / 64));
  }
  localToMinCell(e, t, i, s) {
    const n = (null == t ? void 0 : t.width) ?? ("horizontal" === i ? 64 * s : 61),
      o = (null == t ? void 0 : t.height) ?? ("vertical" === i ? 64 * s : 61),
      l = e.x + 512.5 - n / 2,
      h = 656 - e.y - o / 2,
      a = Math.round((l - 165) / 63) + 1,
      c = Math.round((h - 116) / 63) + 1;
    return {
      col: Math.min(11, Math.max(1, a)),
      row: Math.min(17, Math.max(1, c))
    };
  }
  rebuildOccupancyFromVehicles() {
    this.occupancy.length = 187, this.occupancy.fill(0), this.vehicles.forEach(e => {
      e.isExited || this.occupyVehicle(e);
    });
  }
  occupyVehicle(e) {
    this.getCells(e.minCol, e.minRow, e.axis, e.length).forEach(t => {
      this.isOnBoard(t.col, t.row) && (this.occupancy[this.cellIndex(t.col, t.row)] = e.id);
    });
  }
  clearVehicleOccupancy(e) {
    this.getCells(e.minCol, e.minRow, e.axis, e.length).forEach(t => {
      if (!this.isOnBoard(t.col, t.row)) return;
      const i = this.cellIndex(t.col, t.row);
      this.occupancy[i] === e.id && (this.occupancy[i] = 0);
    });
  }
  getCells(e, t, i, s) {
    const n = [];
    for (let o = 0; o < s; o += 1) "horizontal" === i ? n.push({
      col: e + o,
      row: t
    }) : n.push({
      col: e,
      row: t + o
    });
    return n;
  }
  isBlockedByOther(e, t) {
    return t.some(t => {
      if (!this.isOnBoard(t.col, t.row)) return !1;
      const i = this.occupancy[this.cellIndex(t.col, t.row)];
      return 0 !== i && i !== e;
    });
  }
  isOnBoard(e, t) {
    return e >= 1 && e <= 11 && t >= 1 && t <= 17;
  }
  cellIndex(e, t) {
    return 11 * (t - 1) + (e - 1);
  }
  stepMin(e, t, i) {
    return "up" === i ? {
      col: e,
      row: t - 1
    } : "down" === i ? {
      col: e,
      row: t + 1
    } : "left" === i ? {
      col: e - 1,
      row: t
    } : {
      col: e + 1,
      row: t
    };
  }
  isTopGap(e) {
    return e >= 1 && e <= 3 || 7 === e || 8 === e;
  }
  isBottomGap(e) {
    return e >= 4 && e <= 6 || e >= 9 && e <= 11;
  }
  isLeftGap(e) {
    return e >= 3 && e <= 4 || e >= 7 && e <= 8 || 10 === e || e >= 13 && e <= 14;
  }
  isRightGap(e) {
    return e >= 1 && e <= 2 || e >= 5 && e <= 6 || 9 === e || e >= 11 && e <= 12 || e >= 15 && e <= 17;
  }
  positionAfterShift(e, t, i, s, n) {
    const l = 63 * (s - t),
      h = 63 * (i - n);
    return new __rea_outer_o(e.x + l, e.y + h, 0);
  }
  getOffscreenPosition(e, t) {
    return "up" === t ? new __rea_outer_o(e.x, V, 0) : "down" === t ? new __rea_outer_o(e.x, -800, 0) : new __rea_outer_o("left" === t ? -800 : V, e.y, 0);
  }
  durationForDistance(e, t) {
    const i = t.x - e.x,
      s = t.y - e.y,
      n = Math.sqrt(i * i + s * s);
    return Math.max(n / 800, .01);
  }
  findVehicleAt(e) {
    for (let t = this.vehicles.length - 1; t >= 0; t -= 1) {
      const i = this.vehicles[t];
      if (!i.isExited && i.node.activeInHierarchy && this.isPointInsideNode(i.node, e)) return i;
    }
    return null;
  }
  getVehicleById(e) {
    return this.vehicles.find(t => t.id === e) ?? null;
  }
  disableHitTest(e) {
    if (null == e || !e.isValid) return;
    const t = e.getComponent(__rea_outer_h);
    t && (t.hitTest = (e, t) => !1);
  }
  getTouchWorldPoint(e) {
    const t = e.getUILocation();
    return new __rea_outer_a(t.x, t.y);
  }
  isPointInsideNode(e, t) {
    if (null == e || !e.isValid || !e.activeInHierarchy) return !1;
    const i = e.getComponent(__rea_outer_h);
    return !!i && i.getBoundingBoxToWorld().contains(t);
  }
  bringNodeToFront(e) {
    null != e && e.isValid && e.parent && e.setSiblingIndex(e.parent.children.length - 1);
  }
  setNodeActive(e, t) {
    null != e && e.isValid && (e.active = t);
  }
  scheduleOnceIfValid(e, t) {
    this.scheduleOnce(() => {
      this.isValid && e();
    }, t);
  }
  stopTrackedTweens() {
    this.vehicles.forEach(e => {
      __rea_outer_N(e.node), e.isMoving = !1;
    }), __rea_outer_N(this.winMarkNode);
  }
  warnIfMissing(e, t) {
    t || console.warn(`[Level_56] missing ${e}`);
  }
}) || w;
__rea_outer_t._RF.pop();
export { __recovered_export_0 as default };
