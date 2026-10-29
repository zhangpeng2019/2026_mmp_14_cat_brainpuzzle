// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_60.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { Vec3 as __rea_outer_i } from "cc";
import { tween as __rea_outer_o } from "cc";
import { Node as __rea_outer_s } from "cc";
import { UITransform as __rea_outer_n } from "cc";
import { Tween as __rea_outer_h } from "cc";
import { Label as __rea_outer_l } from "cc";
import { Vec2 as __rea_outer_r } from "cc";
import { _decorator as __rea_outer_d } from "cc";
import { default as __rea_outer_a } from "./LevelBase";
import { default as __rea_outer_c } from "./clue-hit-tester";
import { default as __rea_outer_u } from "./AudioManager";
import { I18nController as __rea_outer_N } from "./i18n-controller";
import { UIManager as __rea_outer_p } from "./ui-manager";
import { UILayer as __rea_outer_g } from "./ui-layer";
import { UIHint as __rea_outer_m } from "./uihint";
import { UIFail as __rea_outer_v } from "./uifail";
import { GameController as __rea_outer_y } from "./GameController";
import { stopAllTweens as __rea_outer_f } from "./CocosCompat";
import { ensureUITransform as __rea_outer_k } from "./CocosCompat";
let __recovered_export_0;
var b;
__rea_outer_t._RF.push({}, "a6c0dBOeyFPip5VPBsNYKAB", "Level_60", void 0);
const {
    ccclass: w
  } = __rea_outer_d,
  D = "level60_2",
  B = "level60_3",
  A = [17, 16, 15, 14, 13, 12, 11, 10],
  I = ["60_2", "60_3", "60_4", "60_5", "60_6", "60_7", "60_8", "60_9"],
  C = ["level60_hint1", "level60_hint2", "level60_hint3", "level60_hint4", "level60_hint5", "level60_hint6", "level60_hint7", "level60_hint8"],
  P = ["lock_1", "lock_2", "lock_3", "lock_4", null, "lock_6", "lock_7", "lock_8"];
__recovered_export_0 = w("Level_60")(b = class extends __rea_outer_a {
  constructor(...e) {
    super(...e), this.phase = 0, this.winstate = !1, this.gameNode = null, this.uiPanelNode = null, this.backBgNode = null, this.bubbleNode = null, this.bubbleLabel = null, this.clickRootNode = null, this.demoNode = null, this.hangerNode = null, this.woman6Node = null, this.woman61Node = null, this.woman5Node = null, this.drawerNode = null, this.penNode = null, this.manNode = null, this.bowNode = null, this.wallNode = null, this.wall1Node = null, this.door5Node = null, this.photoNode = null, this.pen1Node = null, this.beardNode = null, this.pictureNode = null, this.photoAlbumNode = null, this.photoAlbum1Node = null, this.babyNode = null, this.baby1Node = null, this.womanNode = null, this.woman1Node = null, this.woman2Node = null, this.woman3Node = null, this.woman4Node = null, this.fire1Node = null, this.fire2Node = null, this.fire3Node = null, this.keyNode = null, this.key1Node = null, this.lipstickNode = null, this.lipstick1Node = null, this.lipPrintNode = null, this.lipPrint1Node = null, this.socksNode = null, this.socksStink1Node = null, this.socksStink2Node = null, this.fireBurn1Node = null, this.fireBurn2Node = null, this.fireBurn3Node = null, this.dogNode = null, this.dogBowNode = null, this.angryNode = null, this.drawerTouchNode = null, this.lock61Node = null, this.lock71Node = null, this.progressNode = null, this.progress1Node = null, this.doors = [], this.nodeHomes = new Map(), this.circleProxy = {
      t: 0
    }, this.currentDoor = 1, this.isHangerOpened = !1, this.isDrawerOpened = !1, this.isBeardDrawn = !1, this.isDogDressed = !1, this.isInteractionLocked = !0, this.headFireIndex = 0, this.burnFireIndex = 0, this.stinkIndex = 0, this.activeDragState = null, this.voiceToken = 0, this.currentVoiceKey = "", this.onTouchStart = e => {
      if (1 !== this.phase || this.isInteractionLocked || this.activeDragState) return;
      const t = this.getTouchWorldPoint(e);
      this.tryBeginDragAtPoint(t, e) || this.tryHandleClickAtPoint(t);
    }, this.onTouchMove = e => {
      if (!this.activeDragState || 1 !== this.phase || this.isInteractionLocked) return;
      const t = this.activeDragState;
      this.setDragNodePositionFromTouch(e, t.dragNode, t.dragParent, t.touchOffset), this.syncFollowers(t);
    }, this.onTouchEnd = e => {
      if (1 !== this.phase || !this.activeDragState) return void (this.activeDragState = null);
      const t = this.activeDragState;
      this.activeDragState = null, this.isInteractionLocked ? this.restoreDragGroup(t) : this.handleItemDrop(t, this.getTouchWorldPoint(e));
    }, this.cycleHeadFire = () => {
      const e = [this.fire1Node, this.fire2Node, this.fire3Node];
      this.headFireIndex = (this.headFireIndex + 1) % e.length, this.applyHeadFireFrame();
    }, this.cycleBurnFire = () => {
      const e = [this.fireBurn1Node, this.fireBurn2Node, this.fireBurn3Node];
      this.burnFireIndex = (this.burnFireIndex + 1) % e.length, this.applyBurnFireFrame();
    }, this.cycleStink = () => {
      const e = [this.socksStink1Node, this.socksStink2Node];
      this.stinkIndex = (this.stinkIndex + 1) % e.length, this.applyStinkFrame();
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.allItemNum = 8, this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.applyInitialVisibility(), this.enterPhase0();
  }
  onDestroy() {
    this.unscheduleAllCallbacks(), this.unregisterHandlers(), this.stopTrackedTweens(), this.activeDragState = null, super.onDestroy();
  }
  handleTimeExpired() {
    return !!(this.phase >= 2 || this.winstate);
  }
  showHint() {
    if (1 !== this.phase) return;
    const e = C[this.currentDoor - 1];
    if (!e) return;
    const t = __rea_outer_N.getInstance().getKey(e);
    __rea_outer_p.getInstance().showView(__rea_outer_m, void 0, {
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
    this.hasInstallNum = 8, this.currentDoor = 8, this.phase = 2, this.winstate = !0, this.isInteractionLocked = !0, this.unregisterHandlers();
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.isInteractionLocked = !0, this.hasInstallNum = 0, this.allItemNum = 8, this.currentDoor = 1, this.isHangerOpened = !1, this.isDrawerOpened = !1, this.isBeardDrawn = !1, this.isDogDressed = !1, this.headFireIndex = 0, this.burnFireIndex = 0, this.stinkIndex = 0, this.activeDragState = null, this.voiceToken += 1, this.hideBubble();
  }
  applyInitialVisibility() {
    var e, t, i, o, s, n;
    this.setNodeActive(this.gameNode, !0), this.setNodeActive(this.uiPanelNode, !0), this.setShown([this.hangerNode, this.manNode, this.bowNode, this.wallNode, this.wall1Node, this.door5Node, this.photoNode, this.photoAlbumNode, this.babyNode, this.womanNode, this.fire1Node, this.keyNode, this.socksNode, this.dogNode, this.drawerTouchNode, this.progressNode]), this.setHidden([this.woman6Node, this.woman61Node, this.woman5Node, this.drawerNode, this.penNode, this.pen1Node, this.beardNode, this.pictureNode, this.baby1Node, this.woman1Node, this.woman2Node, this.woman3Node, this.woman4Node, this.fire2Node, this.fire3Node, this.key1Node, this.photoAlbum1Node, this.lipstickNode, this.lipstick1Node, this.lipPrintNode, this.lipPrint1Node, this.socksStink1Node, this.socksStink2Node, this.fireBurn1Node, this.fireBurn2Node, this.fireBurn3Node, this.dogBowNode, this.angryNode, this.lock61Node, this.lock71Node, this.progress1Node, this.clickRootNode, this.demoNode, (null == (e = this.gameNode) ? void 0 : e.getChildByName("drags")) ?? null, (null == (t = this.gameNode) ? void 0 : t.getChildByName("swips")) ?? null, (null == (i = this.gameNode) ? void 0 : i.children[42]) ?? null, (null == (o = this.gameNode) ? void 0 : o.children[43]) ?? null]), this.setNodeActive(this.bubbleNode, !1), this.setNodeActive((null == (s = this.bubbleNode) ? void 0 : s.getChildByName("dialog_box_1")) ?? null, !1), this.setNodeActive((null == (n = this.gameNode) ? void 0 : n.getChildByName("clicks")) ?? null, !0), this.restoreRememberedHomes(), this.doors.forEach(e => {
      this.setNodeActive(e.root, !0), this.setNodeActive(e.lock, !0), this.resetLeaf(e.leftLeaf, e.leftOrigin), this.resetLeaf(e.rightLeaf, e.rightOrigin);
    });
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_u.playMusic("bgm4", !0, .5), this.setInputBlocked(!0), this.startHeadFireLoop(), this.playBubbleVoice("60_1", () => {
      this.isValid && 0 === this.phase && (this.hideBubble(), this.enterPhase1());
    });
  }
  skipOpeningToPlay() {
    return 0 === this.phase && (this.voiceToken += 1, this.stopOpeningDialogue(), this.hideBubble(), this.enterPhase1(), !0);
  }
  enterPhase1() {
    0 === this.phase && (this.phase = 1, this.setInputBlocked(!1), this.registerHandlers(), __rea_outer_y.getInstance().refreshGameProgress());
  }
  enterPhase2Success() {
    this.phase = 2, this.winstate = !0, this.unregisterHandlers(), this.setInputBlocked(!0), this.setNodeActive(this.clickRootNode, !1), __rea_outer_y.getInstance().pauseTimer(), this.showCatchWomanThenOutro();
  }
  beginTimeoutFail() {
    this.phase = 2, this.winstate = !1, this.isInteractionLocked = !0, this.unregisterHandlers(), this.setInputBlocked(!0), this.voiceToken += 1, this.stopCurrentVoice(), this.hideBubble(), this.stopAllFrameLoops(), this.stopTrackedTweens(), __rea_outer_y.getInstance().pauseTimer(), __rea_outer_p.getInstance().showView(__rea_outer_v, __rea_outer_g.WIN_ANIMATION);
  }
  showCatchWomanThenOutro() {
    this.setNodeActive(this.womanNode, !1), this.setNodeActive(this.woman5Node, !0), this.setNodeActive(this.angryNode, !0), this.scheduleOnceIfValid(() => {
      this.playCatchOutro();
    }, .25);
  }
  playCatchOutro() {
    this.playManFlyOut(), this.playBubbleVoice("60_10", () => {
      this.isValid && (this.hideBubble(), this.showLevelSuccess(1));
    });
  }
  playManFlyOut() {
    const e = this.manNode;
    if (null == e || !e.isValid) return;
    __rea_outer_f(e);
    const t = new __rea_outer_i(-800, e.position.y, e.position.z);
    __rea_outer_o(e).to(1, {
      position: t,
      angle: -1080
    }).call(() => {
      this.isValid && this.setNodeActive(e, !1);
    }).start();
  }
  registerHandlers() {
    this.node.on(__rea_outer_s.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(__rea_outer_s.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(__rea_outer_s.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(__rea_outer_s.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
  }
  unregisterHandlers() {
    var e;
    null != (e = this.node) && e.isValid && (this.node.off(__rea_outer_s.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(__rea_outer_s.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(__rea_outer_s.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(__rea_outer_s.EventType.TOUCH_CANCEL, this.onTouchEnd, this));
  }
  tryHandleClickAtPoint(e) {
    3 !== this.currentDoor || this.isHangerOpened || !this.isPointInsideNode(this.hangerNode, e) ? 6 === this.currentDoor && !this.isDrawerOpened && this.isPointInsideNode(this.drawerTouchNode, e) && this.executeDrawerClick() : this.executeHangerClick();
  }
  tryBeginDragAtPoint(e, t) {
    const i = [{
      kind: "socks",
      nodes: [this.socksNode]
    }, {
      kind: "lipstick",
      nodes: [this.lipstickNode]
    }, {
      kind: "key",
      nodes: [this.keyNode]
    }, {
      kind: "fire",
      nodes: [this.fire1Node, this.fire2Node, this.fire3Node]
    }, {
      kind: "baby",
      nodes: [this.babyNode]
    }, {
      kind: "photoAlbum",
      nodes: [this.photoAlbumNode]
    }, {
      kind: "photoBeard",
      nodes: [this.photoNode, this.beardNode]
    }, {
      kind: "dogBow",
      nodes: [this.dogNode, this.dogBowNode]
    }, {
      kind: "bow",
      nodes: [this.bowNode]
    }, {
      kind: "pen",
      nodes: [this.penNode]
    }];
    for (let o = 0; o < i.length; o += 1) {
      const s = i[o];
      if (!this.canBeginKind(s.kind)) continue;
      if (s.nodes.some(t => this.isPointInsideNode(t, e, !1))) return this.beginGroupDrag(s.kind, s.nodes, t);
    }
    return !1;
  }
  canBeginKind(e) {
    switch (e) {
      case "key":
        return 1 === this.currentDoor;
      case "photoAlbum":
        return 2 === this.currentDoor;
      case "lipstick":
        return 3 === this.currentDoor && this.isHangerOpened;
      case "socks":
        return 4 === this.currentDoor;
      case "fire":
        return 5 === this.currentDoor;
      case "pen":
        return 6 === this.currentDoor && this.isDrawerOpened && !this.isBeardDrawn;
      case "photoBeard":
        return 6 === this.currentDoor && this.isBeardDrawn;
      case "bow":
        return 7 === this.currentDoor && !this.isDogDressed;
      case "dogBow":
        return 7 === this.currentDoor && this.isDogDressed;
      case "baby":
        return 8 === this.currentDoor;
      default:
        return !1;
    }
  }
  beginGroupDrag(e, t, i) {
    const o = t.filter(e => Boolean(null == e ? void 0 : e.isValid));
    if (0 === o.length) return !1;
    const s = this.uiPanelNode ?? o[0].parent;
    if (null == s || !s.isValid) return !1;
    const h = [];
    if (o.forEach(e => {
      const t = e.parent;
      if (null == t || !t.isValid) return;
      const i = e.position.clone(),
        o = e.getSiblingIndex(),
        l = e.worldPosition.clone();
      e.setParent(s);
      const r = s.getComponent(__rea_outer_n);
      r && e.setPosition(r.convertToNodeSpaceAR(l)), e.setSiblingIndex(s.children.length - 1), h.push({
        node: e,
        originParent: t,
        originPosition: i,
        originSiblingIndex: o,
        startLocal: e.position.clone()
      });
    }), 0 === h.length) return !1;
    const l = h[0],
      r = this.calculateTouchOffset(i, l.node, s);
    return this.setDragNodePositionFromTouch(i, l.node, s, r), this.activeDragState = {
      kind: e,
      dragNode: l.node,
      dragParent: s,
      touchOffset: r,
      startLocal: l.startLocal,
      startTouchPoint: this.getTouchWorldPoint(i),
      followers: h
    }, this.syncFollowers(this.activeDragState), !0;
  }
  syncFollowers(e) {
    const t = e.dragNode.position.x - e.startLocal.x,
      i = e.dragNode.position.y - e.startLocal.y;
    e.followers.forEach(o => {
      o.node !== e.dragNode && o.node.isValid && o.node.setPosition(o.startLocal.x + t, o.startLocal.y + i, o.startLocal.z);
    });
  }
  handleItemDrop(e, t) {
    if (this.hasDragMoved(e, t) && this.isDropAccepted(e.kind, e.dragNode)) return this.playOperateSound(), void this.executeDrop(e);
    this.restoreDragGroup(e);
  }
  hasDragMoved(e, t) {
    const i = t.x - e.startTouchPoint.x,
      o = t.y - e.startTouchPoint.y;
    return i * i + o * o >= 400;
  }
  isDropAccepted(e, t) {
    var i, o;
    switch (e) {
      case "key":
        return 1 === this.currentDoor && __rea_outer_c.isDragNearTarget(t, null == (i = this.getDoor(1)) ? void 0 : i.lock);
      case "photoAlbum":
        return 2 === this.currentDoor && __rea_outer_c.isDragNearTarget(t, null == (o = this.getDoor(2)) ? void 0 : o.lock);
      case "lipstick":
        return 3 === this.currentDoor && __rea_outer_c.isDragNearTarget(t, this.womanNode);
      case "socks":
        return 4 === this.currentDoor && __rea_outer_c.isDragNearTarget(t, this.womanNode);
      case "fire":
        return 5 === this.currentDoor && __rea_outer_c.isDragNearTarget(t, this.door5Node);
      case "pen":
        return 6 === this.currentDoor && __rea_outer_c.isDragNearTarget(t, this.photoNode);
      case "photoBeard":
        return 6 === this.currentDoor && __rea_outer_c.isDragNearTarget(t, this.womanNode);
      case "bow":
        return 7 === this.currentDoor && __rea_outer_c.isDragNearTarget(t, this.dogNode);
      case "dogBow":
        return 7 === this.currentDoor && __rea_outer_c.isDragNearTarget(t, this.womanNode);
      case "baby":
        return 8 === this.currentDoor && __rea_outer_c.isDragNearTarget(t, this.womanNode);
      default:
        return !1;
    }
  }
  executeDrop(e) {
    switch (e.kind) {
      case "key":
        return this.hideConsumedDrag(e), void this.executeDoor1Unlock();
      case "photoAlbum":
        return this.hideConsumedDrag(e), void this.executeDoor2Album();
      case "lipstick":
        return this.hideConsumedDrag(e), void this.executeDoor3Lipstick();
      case "socks":
        return this.hideConsumedDrag(e), void this.executeDoor4Socks();
      case "fire":
        return this.hideConsumedDrag(e), void this.executeDoor5Fire();
      case "pen":
        return this.hideConsumedDrag(e), void this.executeDoor6Pen();
      case "photoBeard":
        return this.hideConsumedDrag(e), void this.executeDoor6Photo();
      case "bow":
        return this.hideConsumedDrag(e), void this.executeDoor7Bow();
      case "dogBow":
        return this.hideConsumedDrag(e), void this.executeDoor7Dog();
      case "baby":
        return this.hideConsumedDrag(e), void this.executeDoor8Baby();
      default:
        this.restoreDragGroup(e);
    }
  }
  executeHangerClick() {
    this.playOperateSound(), this.isHangerOpened = !0, this.setNodeActive(this.lipstickNode, !0), this.restoreNodeHome(this.lipstickNode);
  }
  executeDrawerClick() {
    this.playOperateSound(), this.isDrawerOpened = !0, this.setNodeActive(this.drawerNode, !0), this.setNodeActive(this.penNode, !0), this.restoreNodeHome(this.penNode);
  }
  executeDoor1Unlock() {
    this.setInputBlocked(!0);
    const e = this.getDoor(1);
    this.restoreNodeHome(this.key1Node), this.setNodeActive(this.key1Node, !0), this.playInsertMotion(this.key1Node, () => {
      this.scheduleOnceIfValid(() => {
        __rea_outer_u.playEffect_1(D), this.setNodeActive(this.key1Node, !1), this.setNodeActive((null == e ? void 0 : e.lock) ?? null, !1), this.playDoorVoice(1), this.slideOpenDoor(1, () => this.completeDoor(1));
      }, .5);
    });
  }
  executeDoor2Album() {
    this.setInputBlocked(!0);
    const e = this.getDoor(2);
    this.setNodeActive(this.photoAlbum1Node, !0), this.alignNodeToTarget(this.photoAlbum1Node, (null == e ? void 0 : e.lock) ?? (null == e ? void 0 : e.root) ?? null), __rea_outer_u.playEffect_1(D), this.setNodeActive(this.photoAlbum1Node, !1), this.setNodeActive((null == e ? void 0 : e.lock) ?? null, !1), this.playDoorVoice(2), this.slideOpenDoor(2, () => this.completeDoor(2));
  }
  executeDoor3Lipstick() {
    this.setInputBlocked(!0), this.restoreNodeHome(this.lipstick1Node), this.setNodeActive(this.lipstick1Node, !0), this.playCircleMotion(this.lipstick1Node, () => {
      this.setNodeActive(this.lipstick1Node, !1), this.restoreNodeHome(this.lipstick1Node), this.setNodeActive(this.lipPrint1Node, !0), this.setNodeActive(this.lipPrintNode, !0), __rea_outer_u.playEffect_1("level60_4"), this.scheduleOnceIfValid(() => {
        const e = this.getDoor(3);
        this.setNodeActive(this.lipPrintNode, !1), this.setNodeActive(this.lipPrint1Node, !1), this.setNodeActive((null == e ? void 0 : e.lock) ?? null, !1), this.playDoorVoice(3), this.slideOpenDoor(3, () => this.completeDoor(3));
      }, .5);
    });
  }
  executeDoor4Socks() {
    this.setInputBlocked(!0), this.setNodeActive(this.socksNode, !1), this.setNodeActive(this.womanNode, !1), this.setNodeActive(this.woman1Node, !0), this.startStinkLoop(), this.setNodeActive(this.pictureNode, !0), __rea_outer_u.playEffect_1("level60_5"), this.scheduleOnceIfValid(() => {
      var e;
      this.stopStinkLoop(), this.setNodeActive(this.woman1Node, !1), this.setNodeActive(this.socksStink1Node, !1), this.setNodeActive(this.socksStink2Node, !1), this.setNodeActive(this.pictureNode, !1), this.setNodeActive((null == (e = this.getDoor(4)) ? void 0 : e.lock) ?? null, !1), this.setNodeActive(this.womanNode, !0), this.playDoorVoice(4), this.slideOpenDoor(4, () => this.completeDoor(4));
    }, .5);
  }
  executeDoor5Fire() {
    this.setInputBlocked(!0), this.stopHeadFireLoop(), this.setHidden([this.fire1Node, this.fire2Node, this.fire3Node]), this.startBurnFireLoop(), __rea_outer_u.playEffect_1("level60_6"), this.scheduleOnceIfValid(() => {
      this.stopBurnFireLoop(), this.setHidden([this.fireBurn1Node, this.fireBurn2Node, this.fireBurn3Node, this.door5Node]), this.playDoorVoice(5), this.completeDoor(5);
    }, .7);
  }
  executeDoor6Pen() {
    this.setInputBlocked(!0), this.restoreNodeHome(this.pen1Node), this.setNodeActive(this.pen1Node, !0), this.playWMotion(this.pen1Node, () => {
      this.setNodeActive(this.pen1Node, !1), this.restoreNodeHome(this.pen1Node), this.setNodeActive(this.beardNode, !0), this.isBeardDrawn = !0, this.setInputBlocked(!1);
    });
  }
  executeDoor6Photo() {
    this.setInputBlocked(!0), this.setNodeActive(this.photoNode, !1), this.setNodeActive(this.beardNode, !1), this.setNodeActive(this.womanNode, !1), this.setNodeActive(this.woman2Node, !0), this.setNodeActive(this.lock61Node, !0), __rea_outer_u.playEffect_1(B), this.scheduleOnceIfValid(() => {
      var e;
      this.setNodeActive(this.lock61Node, !1), this.setNodeActive((null == (e = this.getDoor(6)) ? void 0 : e.lock) ?? null, !1), this.setNodeActive(this.woman2Node, !1), this.setNodeActive(this.womanNode, !0), this.playDoorVoice(6), this.slideOpenDoor(6, () => this.completeDoor(6));
    }, .7);
  }
  executeDoor7Bow() {
    __rea_outer_u.playEffect_1("level60_7"), this.setNodeActive(this.bowNode, !1), this.setNodeActive(this.dogBowNode, !0), this.restoreNodeHome(this.dogBowNode), this.isDogDressed = !0;
  }
  executeDoor7Dog() {
    this.setInputBlocked(!0), this.setNodeActive(this.dogNode, !1), this.setNodeActive(this.dogBowNode, !1), this.setNodeActive(this.womanNode, !1), this.setNodeActive(this.woman3Node, !0), this.setNodeActive(this.lock71Node, !0), __rea_outer_u.playEffect_1(B), this.scheduleOnceIfValid(() => {
      var e;
      this.setNodeActive(this.lock71Node, !1), this.setNodeActive((null == (e = this.getDoor(7)) ? void 0 : e.lock) ?? null, !1), this.setNodeActive(this.woman3Node, !1), this.setNodeActive(this.womanNode, !0), this.playDoorVoice(7), this.slideOpenDoor(7, () => this.completeDoor(7));
    }, .7);
  }
  executeDoor8Baby() {
    this.setInputBlocked(!0), this.setNodeActive(this.babyNode, !1), this.setNodeActive(this.womanNode, !1), this.setNodeActive(this.woman4Node, !0), this.setNodeActive(this.progress1Node, !0), this.scheduleOnceIfValid(() => {
      var e;
      this.setNodeActive((null == (e = this.getDoor(8)) ? void 0 : e.lock) ?? null, !1), this.slideOpenDoor(8, () => {
        this.setNodeActive(this.woman4Node, !1), this.setNodeActive(this.womanNode, !0), this.setNodeActive(this.baby1Node, !0), this.playDoorVoice(8), this.completeDoor(8);
      });
    }, .5);
  }
  completeDoor(e) {
    this.hasInstallNum = e, __rea_outer_y.getInstance().refreshGameProgress(), e >= 8 ? this.enterPhase2Success() : (this.currentDoor = e + 1, this.setInputBlocked(!1));
  }
  playDoorVoice(e) {
    const t = I[e - 1];
    t && this.playBubbleVoice(t, () => {
      this.isValid && this.hideBubble();
    });
  }
  slideOpenDoor(e, t) {
    var i;
    const o = this.getDoor(e);
    if (null == o || null == (i = o.root) || !i.isValid) return void t();
    const s = o.leftLeaf,
      n = o.rightLeaf;
    let h = 0;
    const l = () => {
      h -= 1, h > 0 || (this.setNodeActive(o.root, !1), this.resetLeaf(s, o.leftOrigin), this.resetLeaf(n, o.rightOrigin), t());
    };
    null != s && s.isValid && (h += 1, this.slideLeaf(s, -10, l)), null != n && n.isValid && (h += 1, this.slideLeaf(n, 10, l)), 0 === h && (this.setNodeActive(o.root, !1), t());
  }
  slideLeaf(e, t, s) {
    __rea_outer_f(e);
    const n = new __rea_outer_i(e.position.x + t, e.position.y, e.position.z);
    __rea_outer_o(e).to(.5, {
      position: n
    }).call(() => {
      this.isValid && s();
    }).start();
  }
  playInsertMotion(e, t) {
    if (null == e || !e.isValid) return void t();
    __rea_outer_f(e);
    const s = e.position.clone(),
      n = new __rea_outer_i(s.x, s.y + -20, s.z);
    __rea_outer_o(e).to(.25, {
      position: n
    }).to(.25, {
      position: s
    }).call(() => {
      this.isValid && t();
    }).start();
  }
  playCircleMotion(e, t) {
    if (null == e || !e.isValid) return void t();
    const i = e.position.clone();
    this.circleProxy.t = 0, __rea_outer_h.stopAllByTarget(this.circleProxy), __rea_outer_o(this.circleProxy).to(.5, {
      t: 1
    }, {
      onUpdate: () => {
        if (!e.isValid) return;
        const t = this.circleProxy.t * Math.PI * 2;
        e.setPosition(i.x + 40 * Math.cos(t), i.y + 40 * Math.sin(t), i.z);
      }
    }).call(() => {
      this.isValid && (e.isValid && e.setPosition(i), t());
    }).start();
  }
  playWMotion(e, t) {
    if (null == e || !e.isValid) return void t();
    __rea_outer_f(e);
    const s = e.position.clone(),
      n = .125;
    __rea_outer_o(e).to(n, {
      position: new __rea_outer_i(s.x - 20, s.y + 20, s.z)
    }).to(n, {
      position: new __rea_outer_i(s.x, s.y - 20, s.z)
    }).to(n, {
      position: new __rea_outer_i(s.x + 20, s.y + 20, s.z)
    }).to(n, {
      position: s
    }).call(() => {
      this.isValid && t();
    }).start();
  }
  startHeadFireLoop() {
    this.stopHeadFireLoop(), this.headFireIndex = 0, this.applyHeadFireFrame(), this.schedule(this.cycleHeadFire, .1);
  }
  stopHeadFireLoop() {
    this.unschedule(this.cycleHeadFire);
  }
  applyHeadFireFrame() {
    [this.fire1Node, this.fire2Node, this.fire3Node].forEach((e, t) => {
      this.setNodeActive(e, t === this.headFireIndex);
    });
  }
  startBurnFireLoop() {
    this.stopBurnFireLoop(), this.burnFireIndex = 0, this.applyBurnFireFrame(), this.schedule(this.cycleBurnFire, .1);
  }
  stopBurnFireLoop() {
    this.unschedule(this.cycleBurnFire);
  }
  applyBurnFireFrame() {
    [this.fireBurn1Node, this.fireBurn2Node, this.fireBurn3Node].forEach((e, t) => {
      this.setNodeActive(e, t === this.burnFireIndex);
    });
  }
  startStinkLoop() {
    this.stopStinkLoop(), this.stinkIndex = 0, this.applyStinkFrame(), this.schedule(this.cycleStink, .1);
  }
  stopStinkLoop() {
    this.unschedule(this.cycleStink);
  }
  applyStinkFrame() {
    [this.socksStink1Node, this.socksStink2Node].forEach((e, t) => {
      this.setNodeActive(e, t === this.stinkIndex);
    });
  }
  stopAllFrameLoops() {
    this.stopHeadFireLoop(), this.stopBurnFireLoop(), this.stopStinkLoop();
  }
  playOperateSound() {
    __rea_outer_u.playEffect_1("level60_1");
  }
  playBubbleVoice(e, t) {
    this.voiceToken += 1;
    const i = this.voiceToken;
    this.bubbleLabel && (this.bubbleLabel.string = __rea_outer_N.getInstance().getKey(e)), this.setNodeActive(this.bubbleNode, !0);
    let o = !1;
    const s = () => {
        !o && this.isValid && i === this.voiceToken && (o = !0, this.unschedule(n), t());
      },
      n = () => {
        s();
      };
    this.scheduleOnce(n, 8), this.stopCurrentVoice(), this.currentVoiceKey = e, __rea_outer_u.playEffect_1(e, s);
  }
  stopCurrentVoice() {
    __rea_outer_u.stopVoice(), this.currentVoiceKey && (__rea_outer_u.stopOneEffect(this.currentVoiceKey), this.currentVoiceKey = "");
  }
  hideBubble() {
    this.setNodeActive(this.bubbleNode, !1);
  }
  setInputBlocked(e) {
    this.isInteractionLocked = e, this.setNodeActive(this.backBgNode, e);
  }
  isPointInsideCurrentDoor(e) {
    var t;
    const i = this.getDoor(this.currentDoor);
    return !(null == i || null == (t = i.root) || !t.isValid || !i.root.activeInHierarchy) && (!(!this.isPointInsideNode(i.root, e) && !this.isPointInsideNode(i.lock, e)) || i.root.children.some(t => this.isPointInsideNode(t, e)));
  }
  getDoor(e) {
    return this.doors.find(t => t.index === e) ?? null;
  }
  restoreDragGroup(e) {
    const t = e.followers.slice().sort((e, t) => e.originSiblingIndex - t.originSiblingIndex);
    t.forEach(e => {
      e.node.isValid && e.originParent.isValid && e.node.setParent(e.originParent);
    }), t.forEach(e => {
      e.node.isValid && (e.node.setSiblingIndex(e.originSiblingIndex), e.node.setPosition(e.originPosition));
    });
  }
  hideConsumedDrag(e) {
    this.restoreDragGroup(e), e.followers.forEach(e => {
      this.setNodeActive(e.node, !1);
    });
  }
  alignNodeToTarget(e, t) {
    if (null == e || !e.isValid || null == t || !t.isValid) return;
    this.reparentToGameNode(e);
    const i = e.parent,
      o = null == i ? void 0 : i.getComponent(__rea_outer_n);
    o ? e.setPosition(o.convertToNodeSpaceAR(t.worldPosition)) : e.setWorldPosition(t.worldPosition);
  }
  reparentToGameNode(e) {
    const t = this.gameNode;
    if (null == t || !t.isValid || e.parent === t) return;
    const i = e.worldPosition.clone();
    e.setParent(t);
    const o = t.getComponent(__rea_outer_n);
    o && e.setPosition(o.convertToNodeSpaceAR(i));
  }
  restoreNodeHome(e) {
    var t;
    if (null == e || !e.isValid) return;
    const i = this.nodeHomes.get(e);
    i && (null != (t = i.parent) && t.isValid && (e.setParent(i.parent), e.setSiblingIndex(i.siblingIndex)), e.setPosition(i.position));
  }
  rememberNodeHome(e) {
    null != e && e.isValid && this.nodeHomes.set(e, {
      parent: e.parent,
      position: e.position.clone(),
      siblingIndex: e.getSiblingIndex()
    });
  }
  restoreRememberedHomes() {
    this.nodeHomes.forEach((e, t) => {
      this.restoreNodeHome(t);
    });
  }
  resetLeaf(e, t) {
    null != e && e.isValid && (__rea_outer_f(e), e.setPosition(t));
  }
  resolveReferences() {
    var e, t, i, o, s;
    this.uiPanelNode = this.node.getChildByPath("UIPanel"), this.gameNode = this.node.getChildByPath("UIPanel/gameNode"), this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.bubbleNode = this.node.getChildByPath("UIPanel/bubble"), this.clickRootNode = this.node.getChildByPath("UIPanel/click_root"), this.demoNode = this.node.getChildByPath("UIPanel/demo");
    const n = this.gameNode;
    n && __rea_outer_k(n, 1080, 1920), this.bubbleLabel = (null == (e = this.bubbleNode) || null == (e = e.getChildByPath("dialog_box/Label")) ? void 0 : e.getComponent(__rea_outer_l)) ?? null;
    const h = (null == n ? void 0 : n.children) ?? [];
    this.hangerNode = (null == n ? void 0 : n.getChildByName("hanger")) ?? null, this.woman6Node = h[2] ?? (null == n ? void 0 : n.getChildByName("woman6")) ?? null, this.woman61Node = h[3] ?? (null == n ? void 0 : n.getChildByName("woman6_1")) ?? null, this.woman5Node = (null == n ? void 0 : n.getChildByName("woman5")) ?? null, this.drawerNode = (null == n ? void 0 : n.getChildByName("drawer")) ?? null, this.penNode = (null == n ? void 0 : n.getChildByName("pen")) ?? null, this.manNode = (null == n ? void 0 : n.getChildByName("man")) ?? null, this.bowNode = (null == n ? void 0 : n.getChildByName("bow")) ?? null, this.wallNode = (null == n ? void 0 : n.getChildByName("wall")) ?? null, this.wall1Node = (null == n ? void 0 : n.getChildByName("wall_1")) ?? null, this.door5Node = (null == n ? void 0 : n.getChildByName("door5")) ?? null, this.photoNode = (null == n ? void 0 : n.getChildByName("photo")) ?? null, this.pen1Node = (null == n ? void 0 : n.getChildByName("pen_1")) ?? null, this.beardNode = (null == n ? void 0 : n.getChildByName("beard")) ?? null, this.pictureNode = (null == n ? void 0 : n.getChildByName("picture")) ?? null, this.photoAlbumNode = (null == n ? void 0 : n.getChildByName("photo_album")) ?? null, this.photoAlbum1Node = (null == n ? void 0 : n.getChildByName("photo_album_1")) ?? null, this.babyNode = (null == n ? void 0 : n.getChildByName("baby")) ?? null, this.baby1Node = (null == n ? void 0 : n.getChildByName("baby1")) ?? null, this.womanNode = (null == n ? void 0 : n.getChildByName("woman")) ?? null, this.woman1Node = (null == n ? void 0 : n.getChildByName("woman1")) ?? null, this.woman2Node = (null == n ? void 0 : n.getChildByName("woman2")) ?? null, this.woman3Node = (null == n ? void 0 : n.getChildByName("woman3")) ?? null, this.woman4Node = (null == n ? void 0 : n.getChildByName("woman4")) ?? null, this.fire1Node = (null == n ? void 0 : n.getChildByName("fire1")) ?? null, this.fire2Node = (null == n ? void 0 : n.getChildByName("fire2")) ?? null, this.fire3Node = (null == n ? void 0 : n.getChildByName("fire3")) ?? null, this.keyNode = (null == n ? void 0 : n.getChildByName("key")) ?? null, this.key1Node = (null == n ? void 0 : n.getChildByName("key_1")) ?? null, this.lipstickNode = (null == n ? void 0 : n.getChildByName("lipstick")) ?? null, this.lipstick1Node = (null == n ? void 0 : n.getChildByName("lipstick1")) ?? null, this.lipPrintNode = (null == n ? void 0 : n.getChildByName("lip_print")) ?? null, this.lipPrint1Node = (null == n ? void 0 : n.getChildByName("lip_print_1")) ?? null, this.socksNode = (null == n ? void 0 : n.getChildByName("socks")) ?? null, this.socksStink1Node = h[44] ?? null, this.socksStink2Node = h[45] ?? null, this.fireBurn1Node = (null == n ? void 0 : n.getChildByName("fire_1")) ?? null, this.fireBurn2Node = (null == n ? void 0 : n.getChildByName("fire_2")) ?? null, this.fireBurn3Node = (null == n ? void 0 : n.getChildByName("fire_3")) ?? null, this.dogNode = (null == n ? void 0 : n.getChildByName("dog")) ?? null, this.dogBowNode = (null == n ? void 0 : n.getChildByName("dog_bow")) ?? null, this.angryNode = (null == n ? void 0 : n.getChildByName("angry")) ?? null, this.drawerTouchNode = (null == n ? void 0 : n.getChildByPath("clicks/drawertouch")) ?? null, this.buildDoors(n);
    const r = this.getDoor(6),
      d = this.getDoor(7),
      a = this.getDoor(8);
    this.lock61Node = (null == r || null == (t = r.root) ? void 0 : t.getChildByName("lock_6_1")) ?? null, this.lock71Node = (null == d || null == (i = d.root) ? void 0 : i.getChildByName("lock_7_1")) ?? null, this.progressNode = (null == a || null == (o = a.root) ? void 0 : o.getChildByName("progress")) ?? null, this.progress1Node = (null == a || null == (s = a.root) ? void 0 : s.getChildByName("progress_1")) ?? null, [this.keyNode, this.key1Node, this.photoAlbumNode, this.photoAlbum1Node, this.lipstickNode, this.lipstick1Node, this.socksNode, this.fire1Node, this.fire2Node, this.fire3Node, this.penNode, this.pen1Node, this.photoNode, this.beardNode, this.bowNode, this.dogNode, this.dogBowNode, this.babyNode, this.womanNode, this.manNode].forEach(e => this.rememberNodeHome(e)), this.warnIfMissing("UIPanel/gameNode", this.gameNode), this.warnIfMissing("bubble", this.bubbleNode), this.warnIfMissing("woman", this.womanNode), this.warnIfMissing("woman6_1", this.woman61Node), this.warnIfMissing("clicks/drawertouch", this.drawerTouchNode), this.warnIfMissing("key", this.keyNode), this.warnIfMissing("door5", this.door5Node);
  }
  buildDoors(e) {
    this.doors.length = 0;
    const t = (null == e ? void 0 : e.children) ?? [];
    for (let e = 1; e <= 8; e += 1) {
      const i = t[A[e - 1]] ?? null;
      this.doors.push(this.createDoorRuntime(e, i)), this.warnIfMissing(`door root ${e}`, i);
    }
  }
  createDoorRuntime(e, t) {
    if (5 === e) return {
      index: e,
      root: t,
      lock: null,
      leftLeaf: null,
      rightLeaf: null,
      leftOrigin: new __rea_outer_i(),
      rightOrigin: new __rea_outer_i()
    };
    const o = P[e - 1],
      s = o ? (null == t ? void 0 : t.getChildByName(o)) ?? null : null,
      n = this.collectDoorLeaves(t),
      h = n[0] ?? null,
      l = n[1] ?? null;
    return {
      index: e,
      root: t,
      lock: s,
      leftLeaf: h,
      rightLeaf: l,
      leftOrigin: (null == h ? void 0 : h.position.clone()) ?? new __rea_outer_i(),
      rightOrigin: (null == l ? void 0 : l.position.clone()) ?? new __rea_outer_i()
    };
  }
  collectDoorLeaves(e) {
    if (!e) return [];
    const t = e.children.filter(e => e.name.startsWith("door1_"));
    return t.sort((e, t) => e.position.x - t.position.x), t;
  }
  warnIfMissing(e, t) {
    t || console.warn(`[Level_60] missing ${e}`);
  }
  stopTrackedTweens() {
    __rea_outer_h.stopAllByTarget(this.circleProxy);
    const e = [this.key1Node, this.photoAlbum1Node, this.lipstick1Node, this.pen1Node, this.womanNode, this.manNode, this.photoNode, this.beardNode, this.bowNode, this.dogNode, this.dogBowNode, this.fire1Node, this.fire2Node, this.fire3Node];
    this.doors.forEach(t => {
      e.push(t.root, t.lock, t.leftLeaf, t.rightLeaf);
    }), e.forEach(e => {
      null != e && e.isValid && __rea_outer_f(e);
    });
  }
  isPointInsideNode(e, t, i = !0) {
    if (null == e || !e.isValid) return !1;
    if (i && !e.activeInHierarchy) return !1;
    const o = e.getComponent(__rea_outer_n);
    return !!o && o.getBoundingBoxToWorld().contains(t);
  }
  getTouchWorldPoint(e) {
    const t = e.getUILocation();
    return new __rea_outer_r(t.x, t.y);
  }
  getTouchLocalPosition(e, t) {
    const o = e.getUILocation(),
      s = t.getComponent(__rea_outer_n);
    return s ? s.convertToNodeSpaceAR(new __rea_outer_i(o.x, o.y, 0)) : __rea_outer_i.ZERO.clone();
  }
  calculateTouchOffset(e, t, o) {
    const s = this.getTouchLocalPosition(e, o);
    return new __rea_outer_i(t.position.x - s.x, t.position.y - s.y, 0);
  }
  setDragNodePositionFromTouch(e, t, i, o) {
    const s = this.getTouchLocalPosition(e, i);
    t.setPosition(s.x + o.x, s.y + o.y, t.position.z);
  }
  setShown(e) {
    e.forEach(e => this.setNodeActive(e, !0));
  }
  setHidden(e) {
    e.forEach(e => this.setNodeActive(e, !1));
  }
  setNodeActive(e, t) {
    null != e && e.isValid && (e.active = t);
  }
  scheduleOnceIfValid(e, t) {
    this.scheduleOnce(() => {
      this.isValid && e();
    }, t);
  }
}) || b;
__rea_outer_t._RF.pop();
export { __recovered_export_0 as default };
