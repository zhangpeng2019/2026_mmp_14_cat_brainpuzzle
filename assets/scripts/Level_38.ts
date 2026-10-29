// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_38.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { Vec3 as __rea_outer_i } from "cc";
import { Node as __rea_outer_o } from "cc";
import { UITransform as __rea_outer_s } from "cc";
import { tween as __rea_outer_n } from "cc";
import { Label as __rea_outer_r } from "cc";
import { Vec2 as __rea_outer_h } from "cc";
import { _decorator as __rea_outer_l } from "cc";
import { default as __rea_outer_a } from "./LevelBase";
import { default as __rea_outer_d } from "./clue-hit-tester";
import { default as __rea_outer_c } from "./AudioManager";
import { I18nController as __rea_outer_u } from "./i18n-controller";
import { UIManager as __rea_outer_N } from "./ui-manager";
import { UILayer as __rea_outer_p } from "./ui-layer";
import { UIHint as __rea_outer_g } from "./uihint";
import { UIFail as __rea_outer_m } from "./uifail";
import { GameController as __rea_outer_v } from "./GameController";
import { stopAllTweens as __rea_outer_f } from "./CocosCompat";
import { getUIOpacity as __rea_outer_w } from "./CocosCompat";
import { setNodeOpacity as __rea_outer_y } from "./CocosCompat";
import { ensureUITransform as __rea_outer_k } from "./CocosCompat";
import { default as __rea_outer_D } from "./ActionSystem";
let __recovered_export_0;
var B;
__rea_outer_t._RF.push({}, "e4b7akcPyhNbqXBiw1H4p8W", "Level_38", void 0);
const {
    ccclass: b
  } = __rea_outer_l,
  A = .5,
  I = new __rea_outer_i(-101.434, -168.288, 0),
  T = ["level38_hint1", "level38_hint2", "level38_hint3", "level38_hint4", "level38_hint5", "level38_hint6", "level38_hint7", "level38_hint8"];
__recovered_export_0 = b("Level_38")(B = class extends __rea_outer_a {
  constructor(...e) {
    super(...e), this.phase = 0, this.winstate = !1, this.gameNode = null, this.uiPanelNode = null, this.backBgNode = null, this.bubbleNode = null, this.clickRootNode = null, this.demoNode = null, this.promptBoxNode = null, this.promptLabel = null, this.bgNode = null, this.bg1Node = null, this.girlNode = null, this.girlFlowerNode = null, this.girlFaceNode = null, this.girlAngerNode = null, this.girlHandNode = null, this.girlHand1Node = null, this.manFaceNode = null, this.manFlowerNode = null, this.manHeartNode = null, this.manHeart001Node = null, this.carpetNode = null, this.carpet1Node = null, this.carpetTouchNode = null, this.sawTouchNode = null, this.circuitBreakerTouchNode = null, this.cabinetNode = null, this.cabinet1Node = null, this.cabinet2Node = null, this.circuitBreakerNode = null, this.circuitBreaker1Node = null, this.alarmButtonNode = null, this.alarmButton1Node = null, this.keyNode = null, this.key1Node = null, this.photoNode = null, this.broomNode = null, this.hammerNode = null, this.hammer1Node = null, this.sawNode = null, this.saw1Node = null, this.doors = [], this.nodeHomes = new Map(), this.currentDoor = 1, this.isCarpetOpened = !1, this.isCabinetOpened = !1, this.isBreakerOpened = !1, this.isInteractionLocked = !0, this.activeDragState = null, this.swipeGestureState = null, this.voiceToken = 0, this.currentVoiceKey = "", this.onTouchStart = e => {
      if (1 !== this.phase || this.isInteractionLocked || this.activeDragState) return;
      const t = this.getTouchWorldPoint(e);
      if (this.tryBeginDragAtPoint(t, e)) return;
      const i = this.resolveSwipeKindAtPoint(t);
      i ? this.swipeGestureState = {
        kind: i,
        startLocation: t.clone()
      } : 6 === this.currentDoor && this.isPointInsideNode(this.alarmButtonNode, t) && this.executeDoor6Alarm();
    }, this.onTouchMove = e => {
      if (!this.activeDragState || 1 !== this.phase || this.isInteractionLocked) return;
      const t = this.activeDragState;
      this.setDragNodePositionFromTouch(e, t.dragNode, t.dragParent, t.touchOffset);
    }, this.onTouchEnd = e => {
      if (1 !== this.phase) return this.activeDragState = null, void (this.swipeGestureState = null);
      if (this.activeDragState) return this.handleItemDrop(this.activeDragState, this.getTouchWorldPoint(e)), void (this.activeDragState = null);
      const t = this.swipeGestureState;
      this.swipeGestureState = null, t && !this.isInteractionLocked && this.handleSwipeEnd(t, this.getTouchWorldPoint(e));
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.allItemNum = 8, this.hasInstallNum = 0;
  }
  start() {
    this.resetLevelState(), this.applyInitialVisibility(), this.enterPhase0();
  }
  onDestroy() {
    this.unscheduleAllCallbacks(), this.unregisterHandlers(), this.stopTrackedTweens(), this.activeDragState = null, this.swipeGestureState = null, super.onDestroy();
  }
  handleTimeExpired() {
    return !!(this.phase >= 2 || this.winstate);
  }
  showHint() {
    if (1 !== this.phase) return;
    const e = T[this.currentDoor - 1];
    if (!e) return;
    const t = __rea_outer_u.getInstance().getKey(e);
    __rea_outer_N.getInstance().showView(__rea_outer_g, void 0, {
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
    this.phase = 0, this.winstate = !1, this.isInteractionLocked = !0, this.hasInstallNum = 0, this.allItemNum = 8, this.currentDoor = 1, this.isCarpetOpened = !1, this.isCabinetOpened = !1, this.isBreakerOpened = !1, this.activeDragState = null, this.swipeGestureState = null, this.voiceToken += 1, this.hidePrompt();
  }
  applyInitialVisibility() {
    var e, t;
    this.setNodeActive(this.gameNode, !0), this.setNodeActive(this.bgNode, !0), this.setNodeActive(this.bg1Node, !1), this.setNodeActive(this.bubbleNode, !1), this.setNodeActive(this.clickRootNode, !1), this.setNodeActive(this.demoNode, !1), this.setNodeActive(this.backBgNode, !1), this.setNodeActive(this.promptBoxNode, !1), this.setNodeActive((null == (e = this.gameNode) ? void 0 : e.getChildByName("clicks")) ?? null, !0), this.setNodeActive((null == (t = this.gameNode) ? void 0 : t.getChildByPath("clicks/touch")) ?? null, !1), this.setNodeActive(this.carpetNode, !0), this.setNodeActive(this.carpet1Node, !1), this.setNodeActive(this.cabinetNode, !0), this.setNodeActive(this.cabinet2Node, !0), this.setNodeActive(this.cabinet1Node, !1), this.setNodeActive(this.circuitBreakerNode, !0), this.setNodeActive(this.circuitBreaker1Node, !1), this.setNodeActive(this.circuitBreakerTouchNode, !1), this.setNodeActive(this.alarmButtonNode, !0), this.setNodeActive(this.alarmButton1Node, !1), this.setNodeActive(this.keyNode, !1), this.setNodeActive(this.key1Node, !1), this.setNodeActive(this.photoNode, !0), this.setNodeActive(this.broomNode, !0), this.setNodeActive(this.hammerNode, !0), this.setNodeActive(this.hammer1Node, !1), this.setNodeActive(this.sawNode, !1), this.setNodeActive(this.saw1Node, !1), this.setNodeActive(this.sawTouchNode, !1), this.setNodeActive(this.girlNode, !0), this.setNodeActive(this.girlFlowerNode, !1), this.setNodeActive(this.girlFaceNode, !1), this.setNodeActive(this.girlAngerNode, !1), this.setNodeActive(this.girlHandNode, !0), this.setNodeActive(this.girlHand1Node, !1), this.setNodeActive(this.manFaceNode, !1), this.setNodeActive(this.manFlowerNode, !0), this.startHeartPulse(), this.restoreNodeHome(this.photoNode), this.restoreNodeHome(this.broomNode), this.restoreNodeHome(this.hammerNode), this.restoreNodeHome(this.hammer1Node), this.restoreNodeHome(this.keyNode), this.restoreNodeHome(this.key1Node), this.restoreNodeHome(this.sawNode), this.restoreNodeHome(this.saw1Node), this.restoreNodeHome(this.manFlowerNode), this.resetNodeOpacity(this.photoNode, 255), this.resetNodeOpacity(this.broomNode, 255), this.resetNodeOpacity(this.hammer1Node, 255), this.resetNodeOpacity(this.key1Node, 255), this.resetNodeOpacity(this.saw1Node, 255), this.resetNodeAngle(this.hammer1Node), this.resetNodeAngle(this.saw1Node), this.doors.forEach(e => {
      this.setNodeActive(e.root, !0), this.setNodeActive(e.lock, !0), this.resetNodeOpacity(e.root, 255), this.resetNodeOpacity(e.lock, 255), this.resetLeaf(e.leftLeaf, e.leftOrigin), this.resetLeaf(e.rightLeaf, e.rightOrigin);
    });
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_c.playMusic("bgm4", !0, .5), this.setInputBlocked(!0), this.playPromptVoice("38_1", () => {
      this.isValid && 0 === this.phase && (this.hidePrompt(), this.enterPhase1());
    });
  }
  skipOpeningToPlay() {
    return 0 === this.phase && (this.voiceToken += 1, this.stopOpeningDialogue(), this.hidePrompt(), this.enterPhase1(), !0);
  }
  enterPhase1() {
    0 === this.phase && (this.phase = 1, this.setInputBlocked(!1), this.registerHandlers(), this.isInteractionLocked = !1, __rea_outer_v.getInstance().refreshGameProgress());
  }
  enterPhase2Success() {
    this.phase = 2, this.winstate = !0, this.isInteractionLocked = !0, this.unregisterHandlers(), this.setInputBlocked(!0), __rea_outer_v.getInstance().pauseTimer(), this.setNodeActive(this.bg1Node, !0), this.playPromptVoice("38_4", () => {
      this.isValid && this.showLevelSuccess(1);
    });
  }
  enterPhase2Fail() {
    this.phase = 2, this.winstate = !1, this.isInteractionLocked = !0, this.unregisterHandlers(), this.setInputBlocked(!0), __rea_outer_v.getInstance().pauseTimer(), this.playPromptVoice("38_2", () => {
      this.isValid && this.scheduleOnceIfValid(() => {
        __rea_outer_N.getInstance().showView(__rea_outer_m, __rea_outer_p.WIN_ANIMATION);
      }, 1);
    });
  }
  beginTimeoutFail() {
    this.phase = 2, this.winstate = !1, this.isInteractionLocked = !0, this.unregisterHandlers(), this.setInputBlocked(!0), this.voiceToken += 1, this.stopCurrentVoice(), this.hidePrompt(), __rea_outer_v.getInstance().pauseTimer(), __rea_outer_N.getInstance().showView(__rea_outer_m, __rea_outer_p.WIN_ANIMATION);
  }
  registerHandlers() {
    this.node.on(__rea_outer_o.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(__rea_outer_o.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(__rea_outer_o.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(__rea_outer_o.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
  }
  unregisterHandlers() {
    var e;
    null != (e = this.node) && e.isValid && (this.node.off(__rea_outer_o.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(__rea_outer_o.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(__rea_outer_o.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(__rea_outer_o.EventType.TOUCH_CANCEL, this.onTouchEnd, this));
  }
  tryBeginDragAtPoint(e, t) {
    if (this.canStartSawDrag(e)) return this.beginDrag(this.sawNode, "saw", t);
    const i = [{
      kind: "key",
      node: this.keyNode
    }, {
      kind: "hammer",
      node: this.hammerNode
    }, {
      kind: "broom",
      node: this.broomNode
    }, {
      kind: "photo",
      node: this.photoNode
    }, {
      kind: "flower",
      node: this.manFlowerNode
    }];
    for (let o = 0; o < i.length; o += 1) {
      const s = i[o];
      if (this.isPointInsideNode(s.node, e)) return this.beginDrag(s.node, s.kind, t), !0;
    }
    return !1;
  }
  canStartSawDrag(e) {
    var t;
    return !(!this.isCabinetOpened || null == (t = this.sawNode) || !t.isValid) && (!!this.isPointInsideNode(this.sawTouchNode, e) || this.isPointInsideNode(this.sawNode, e));
  }
  beginDrag(e, t, i) {
    if (null == e || !e.isValid) return !1;
    const o = e.parent;
    if (null == o || !o.isValid) return !1;
    this.setNodeActive(e, !0);
    const n = e.position.clone(),
      r = e.getSiblingIndex(),
      h = e.worldPosition.clone(),
      l = this.uiPanelNode ?? o;
    e.setParent(l);
    const a = l.getComponent(__rea_outer_s);
    a && e.setPosition(a.convertToNodeSpaceAR(h)), e.setSiblingIndex(l.children.length - 1);
    const d = this.calculateTouchOffset(i, e, l);
    return this.setDragNodePositionFromTouch(i, e, l, d), this.activeDragState = {
      kind: t,
      dragNode: e,
      dragParent: l,
      touchOffset: d,
      originParent: o,
      originPosition: n,
      originSiblingIndex: r
    }, !0;
  }
  handleItemDrop(e, t) {
    if (this.isInteractionLocked) return void this.restoreDragNode(e);
    if ("flower" === e.kind) return void this.handleFlowerDrop(e, t);
    const i = e.kind,
      o = this.getExpectedDoorForItem(i);
    this.currentDoor === o && this.isDragNearCurrentDoor(e.dragNode) ? (this.playOperateSound(), "photo" === i || "broom" === i ? this.commitDragKeepWorld(e) : this.hideConsumedDrag(e), this.executeDragOnCurrentDoor(i)) : this.restoreDragNode(e);
  }
  handleFlowerDrop(e, t) {
    if (8 === this.currentDoor) return __rea_outer_d.isDragNearTarget(e.dragNode, this.girlNode) ? (this.playOperateSound(), this.hideConsumedDrag(e), void this.executeDoor8Success()) : this.isDragNearCurrentDoor(e.dragNode) ? (this.playOperateSound(), this.hideConsumedDrag(e), void this.executeDoor8Fail()) : void this.restoreDragNode(e);
    this.restoreDragNode(e);
  }
  executeDragOnCurrentDoor(e) {
    switch (e) {
      case "key":
        return void this.executeDoor1Unlock();
      case "photo":
        return void this.executeDoor2Photo();
      case "broom":
        return void this.executeDoor3Broom();
      case "hammer":
        return void this.executeDoor4Hammer();
      case "saw":
        return void this.executeDoor5Saw();
      default:
        return;
    }
  }
  resolveSwipeKindAtPoint(e) {
    return 1 === this.currentDoor && !this.isCarpetOpened && this.isPointInsideNode(this.getCarpetSwipeNode(), e) ? "carpetLeft" : 5 === this.currentDoor && !this.isCabinetOpened && this.isPointInsideNode(this.cabinetNode, e) ? "cabinetDown" : 7 === this.currentDoor && !this.isBreakerOpened && this.isPointInsideNode(this.circuitBreakerNode, e) ? "breakerLeft" : 7 === this.currentDoor && this.isBreakerOpened && this.isPointInsideNode(this.getCircuitBreakerTouchNode(), e) ? "breakerDown" : null;
  }
  handleSwipeEnd(e, t) {
    const i = t.x - e.startLocation.x,
      o = t.y - e.startLocation.y;
    "carpetLeft" === e.kind && this.isLeftSwipe(i, o) ? this.executeCarpetSwipe() : "cabinetDown" === e.kind && this.isDownSwipe(i, o) ? this.executeCabinetSwipe() : "breakerLeft" === e.kind && this.isLeftSwipe(i, o) ? this.executeBreakerLeftSwipe() : "breakerDown" === e.kind && this.isDownSwipe(i, o) && this.executeBreakerDownSwipe();
  }
  executeCarpetSwipe() {
    this.isCarpetOpened || 1 !== this.currentDoor || (this.playOperateSound(), this.isCarpetOpened = !0, this.setNodeActive(this.carpetNode, !1), this.setNodeActive(this.carpet1Node, !0), this.setNodeActive(this.keyNode, !0));
  }
  executeCabinetSwipe() {
    this.isCabinetOpened || 5 !== this.currentDoor || (this.playOperateSound(), this.isCabinetOpened = !0, this.setNodeActive(this.cabinet1Node, !0), this.setNodeActive(this.cabinet2Node, !1), this.setNodeActive(this.sawNode, !0), this.setNodeActive(this.sawTouchNode, !0));
  }
  executeBreakerLeftSwipe() {
    this.isBreakerOpened || 7 !== this.currentDoor || (this.playOperateSound(), this.isBreakerOpened = !0, this.setNodeActive(this.circuitBreakerNode, !1), this.setNodeActive(this.circuitBreaker1Node, !0), this.setNodeActive(this.circuitBreakerTouchNode, !0));
  }
  executeBreakerDownSwipe() {
    this.isBreakerOpened && 7 === this.currentDoor && !this.isInteractionLocked && (this.playOperateSound(), this.setInputBlocked(!0), this.setNodeActive(this.circuitBreakerTouchNode, !1), this.slideOpenDoor(7, () => {
      this.completeDoor(7);
    }));
  }
  executeDoor1Unlock() {
    this.setInputBlocked(!0);
    const e = this.getDoor(1);
    this.setNodeActive(this.key1Node, !0), this.placeNodeAtLocal(this.key1Node, I), this.playInsertMotion(this.key1Node, () => {
      this.scheduleOnceIfValid(() => {
        __rea_outer_c.playEffect_1("level38_2"), this.setNodeActive(this.key1Node, !1), this.setNodeActive((null == e ? void 0 : e.lock) ?? null, !1), this.slideOpenDoor(1, () => {
          this.completeDoor(1);
        });
      }, A);
    });
  }
  executeDoor2Photo() {
    this.setInputBlocked(!0);
    const e = this.getDoor(2);
    this.moveNodeToWorld(this.photoNode, this.getDoorWorldCenter(e), 0, () => {
      this.scheduleOnceIfValid(() => {
        this.setNodeActive(this.photoNode, !1), this.fadeOutNode((null == e ? void 0 : e.root) ?? null, () => {
          this.setNodeActive((null == e ? void 0 : e.root) ?? null, !1), this.resetNodeOpacity((null == e ? void 0 : e.root) ?? null, 255), this.completeDoor(2);
        });
      }, A);
    });
  }
  executeDoor3Broom() {
    this.setInputBlocked(!0);
    const e = this.getDoor(3);
    this.alignNodeToTarget(this.broomNode, (null == e ? void 0 : e.lock) ?? (null == e ? void 0 : e.root) ?? null), __rea_outer_c.playEffect_1("level38_3"), this.playSweepMotion(this.broomNode, () => {
      this.setNodeActive(this.broomNode, !1), this.setNodeActive((null == e ? void 0 : e.lock) ?? null, !1), this.slideOpenDoor(3, () => {
        this.completeDoor(3);
      });
    });
  }
  executeDoor4Hammer() {
    this.setInputBlocked(!0);
    const e = this.getDoor(4);
    this.setNodeActive(this.hammer1Node, !0), this.alignNodeToTarget(this.hammer1Node, (null == e ? void 0 : e.lock) ?? (null == e ? void 0 : e.root) ?? null), this.playSmashMotion(this.hammer1Node, () => {
      __rea_outer_c.playEffect_1("level38_4"), this.fadeOutNodes([(null == e ? void 0 : e.root) ?? null, this.hammer1Node], () => {
        this.setNodeActive((null == e ? void 0 : e.root) ?? null, !1), this.setNodeActive(this.hammer1Node, !1), this.resetNodeOpacity((null == e ? void 0 : e.root) ?? null, 255), this.resetNodeOpacity(this.hammer1Node, 255), this.resetNodeAngle(this.hammer1Node), this.completeDoor(4);
      });
    });
  }
  executeDoor5Saw() {
    this.setInputBlocked(!0), this.setNodeActive(this.sawTouchNode, !1);
    const e = this.getDoor(5);
    this.setNodeActive(this.saw1Node, !0), this.moveNodeToWorld(this.saw1Node, this.getDoorWorldCenter(e), 0, () => {
      this.playSawMotion(this.saw1Node, () => {
        __rea_outer_c.playEffect_1("level38_5"), this.setNodeActive(this.saw1Node, !1), this.resetNodeAngle(this.saw1Node), this.slideOpenDoor(5, () => {
          this.completeDoor(5);
        });
      });
    });
  }
  executeDoor6Alarm() {
    6 !== this.currentDoor || this.isInteractionLocked || (this.playOperateSound(), __rea_outer_c.playEffect_1("level38_6"), this.setInputBlocked(!0), this.playAlarmFlash(0, () => {
      this.setNodeActive(this.alarmButton1Node, !1);
      const e = this.getDoor(6);
      this.fadeOutNode((null == e ? void 0 : e.lock) ?? null, () => {
        this.setNodeActive((null == e ? void 0 : e.lock) ?? null, !1), this.resetNodeOpacity((null == e ? void 0 : e.lock) ?? null, 255), this.slideOpenDoor(6, () => {
          this.completeDoor(6);
        });
      });
    }));
  }
  executeDoor8Success() {
    this.setInputBlocked(!0), this.setNodeActive(this.manFlowerNode, !1), this.setNodeActive(this.girlFlowerNode, !0), this.setNodeActive(this.girlHandNode, !1), this.setNodeActive(this.girlHand1Node, !0), this.playPromptVoice("38_3", () => {
      if (!this.isValid) return;
      this.hidePrompt();
      const e = this.getDoor(8);
      this.fadeOutNode((null == e ? void 0 : e.lock) ?? null, () => {
        this.setNodeActive((null == e ? void 0 : e.lock) ?? null, !1), this.resetNodeOpacity((null == e ? void 0 : e.lock) ?? null, 255), this.slideOpenDoor(8, () => {
          this.completeDoor(8);
        });
      });
    });
  }
  executeDoor8Fail() {
    this.setInputBlocked(!0), this.setNodeActive(this.manFlowerNode, !1);
    const e = this.getDoor(8);
    this.setNodeActive((null == e ? void 0 : e.lock) ?? null, !1), this.enterPhase2Fail();
  }
  completeDoor(e) {
    this.hasInstallNum = e, __rea_outer_v.getInstance().refreshGameProgress(), e >= 8 ? this.enterPhase2Success() : (this.currentDoor = e + 1, this.setInputBlocked(!1));
  }
  slideOpenDoor(e, t) {
    var i;
    const o = this.getDoor(e);
    if (null == o || null == (i = o.root) || !i.isValid) return void t();
    const s = o.leftLeaf,
      n = o.rightLeaf;
    let r = 0;
    const h = () => {
      r -= 1, r > 0 || (this.setNodeActive(o.root, !1), this.resetLeaf(s, o.leftOrigin), this.resetLeaf(n, o.rightOrigin), t());
    };
    null != s && s.isValid && (r += 1, this.slideLeaf(s, -10, h)), null != n && n.isValid && (r += 1, this.slideLeaf(n, 10, h)), 0 === r && (this.setNodeActive(o.root, !1), t());
  }
  slideLeaf(e, t, o) {
    __rea_outer_f(e);
    const s = new __rea_outer_i(e.position.x + t, e.position.y, e.position.z);
    __rea_outer_n(e).to(A, {
      position: s
    }).call(() => {
      this.isValid && o();
    }).start();
  }
  playInsertMotion(e, t) {
    if (null == e || !e.isValid) return void t();
    __rea_outer_f(e);
    const o = e.position.clone(),
      s = new __rea_outer_i(o.x, o.y + -24, o.z);
    __rea_outer_n(e).to(A, {
      position: s
    }).call(() => {
      this.isValid && t();
    }).start();
  }
  playSweepMotion(e, t) {
    if (null == e || !e.isValid) return void t();
    __rea_outer_f(e);
    const o = e.position.clone();
    __rea_outer_n(e).to(.15, {
      position: new __rea_outer_i(o.x - 24, o.y, o.z)
    }).to(.2, {
      position: new __rea_outer_i(o.x + 24, o.y, o.z)
    }).to(.15, {
      position: o
    }).call(() => {
      this.isValid && t();
    }).start();
  }
  playSmashMotion(e, t) {
    null != e && e.isValid ? (__rea_outer_f(e), __rea_outer_n(e).to(.25, {
      angle: -18
    }).to(.25, {
      angle: 0
    }).call(() => {
      this.isValid && t();
    }).start()) : t();
  }
  startHeartPulse() {
    [this.manHeartNode, this.manHeart001Node].forEach(e => {
      null != e && e.isValid && (this.setNodeActive(e, !0), __rea_outer_f(e), e.setScale(1, 1, 1), __rea_outer_D.scaleRepeat(e, .25, .2, .05));
    });
  }
  playAlarmFlash(e, t) {
    var i;
    if (null != (i = this.alarmButton1Node) && i.isValid) {
      if (e >= 3) return this.setNodeActive(this.alarmButton1Node, !1), void t();
      this.setNodeActive(this.alarmButton1Node, !0), this.scheduleOnceIfValid(() => {
        this.setNodeActive(this.alarmButton1Node, !1), this.scheduleOnceIfValid(() => {
          this.playAlarmFlash(e + 1, t);
        }, .15);
      }, .15);
    } else t();
  }
  playSawMotion(e, t) {
    null != e && e.isValid ? (__rea_outer_f(e), __rea_outer_n(e).to(.25, {
      angle: 12
    }).to(.25, {
      angle: -12
    }).call(() => {
      this.isValid && (e.angle = 0, t());
    }).start()) : t();
  }
  fadeOutNode(e, t) {
    this.fadeOutNodes([e], t);
  }
  fadeOutNodes(e, t) {
    const i = e.filter(e => Boolean(null == e ? void 0 : e.isValid));
    if (0 === i.length) return void t();
    let o = i.length;
    i.forEach(e => {
      __rea_outer_f(e);
      const i = __rea_outer_w(e);
      i.opacity = 255, __rea_outer_n(i).to(A, {
        opacity: 0
      }).call(() => {
        this.isValid && (o -= 1, o <= 0 && t());
      }).start();
    });
  }
  moveNodeToWorld(e, t, i, o) {
    if (null == e || !e.isValid) return void o();
    this.reparentToGameNode(e);
    const r = e.parent,
      h = null == r ? void 0 : r.getComponent(__rea_outer_s),
      l = h ? h.convertToNodeSpaceAR(t) : t.clone();
    if (i <= 0) return e.setPosition(l), void o();
    __rea_outer_f(e), __rea_outer_n(e).to(i, {
      position: l
    }).call(() => {
      this.isValid && o();
    }).start();
  }
  playOperateSound() {
    __rea_outer_c.playEffect_1("level38_1");
  }
  playPromptVoice(e, t) {
    this.voiceToken += 1;
    const i = this.voiceToken;
    this.promptLabel && (this.promptLabel.string = __rea_outer_u.getInstance().getKey(e)), this.setNodeActive(this.promptBoxNode, !0);
    let o = !1;
    const s = () => {
        !o && this.isValid && i === this.voiceToken && (o = !0, this.unschedule(n), t());
      },
      n = () => {
        s();
      };
    this.scheduleOnce(n, 8), this.stopCurrentVoice(), this.currentVoiceKey = e, __rea_outer_c.playEffect_1(e, s);
  }
  stopCurrentVoice() {
    __rea_outer_c.stopVoice(), this.currentVoiceKey && (__rea_outer_c.stopOneEffect(this.currentVoiceKey), this.currentVoiceKey = "");
  }
  hidePrompt() {
    this.setNodeActive(this.promptBoxNode, !1);
  }
  setInputBlocked(e) {
    this.isInteractionLocked = e, this.setNodeActive(this.backBgNode, e);
  }
  getExpectedDoorForItem(e) {
    switch (e) {
      case "key":
        return 1;
      case "photo":
        return 2;
      case "broom":
        return 3;
      case "hammer":
        return 4;
      case "saw":
        return 5;
      case "flower":
        return 8;
      default:
        return 0;
    }
  }
  isDragNearCurrentDoor(e) {
    var t;
    const i = this.getDoor(this.currentDoor);
    return !(null == i || null == (t = i.root) || !t.isValid || !i.root.activeInHierarchy) && (!(!__rea_outer_d.isDragNearTarget(e, i.root) && !__rea_outer_d.isDragNearTarget(e, i.lock)) || i.root.children.some(t => __rea_outer_d.isDragNearTarget(e, t)));
  }
  getDoor(e) {
    return this.doors.find(t => t.index === e) ?? null;
  }
  getDoorWorldCenter(e) {
    const t = [null == e ? void 0 : e.leftLeaf, null == e ? void 0 : e.rightLeaf].filter(e => Boolean(null == e ? void 0 : e.isValid));
    var o;
    if (0 === t.length) return (null == e || null == (o = e.root) ? void 0 : o.worldPosition.clone()) ?? new __rea_outer_i();
    let n = 0,
      r = 0;
    return t.forEach(e => {
      var t;
      const i = null == (t = e.getComponent(__rea_outer_s)) ? void 0 : t.getBoundingBoxToWorld();
      if (i) return n += i.x + i.width / 2, void (r += i.y + i.height / 2);
      n += e.worldPosition.x, r += e.worldPosition.y;
    }), new __rea_outer_i(n / t.length, r / t.length, 0);
  }
  getCarpetSwipeNode() {
    return this.carpetTouchNode ?? this.carpetNode;
  }
  getCircuitBreakerTouchNode() {
    return this.circuitBreakerTouchNode ?? this.circuitBreaker1Node;
  }
  restoreDragNode(e) {
    const t = e.dragNode;
    t.isValid && (t.setParent(e.originParent), t.setSiblingIndex(e.originSiblingIndex), t.setPosition(e.originPosition));
  }
  hideConsumedDrag(e) {
    const t = e.dragNode;
    t.isValid && (this.restoreDragNode(e), t.active = !1);
  }
  commitDragKeepWorld(e) {
    const t = e.dragNode;
    if (!t.isValid) return;
    const i = t.worldPosition.clone();
    t.setParent(e.originParent), t.setSiblingIndex(e.originSiblingIndex);
    const o = e.originParent.getComponent(__rea_outer_s);
    o && t.setPosition(o.convertToNodeSpaceAR(i));
  }
  placeNodeAtLocal(e, t) {
    null != e && e.isValid && (this.reparentToGameNode(e), e.setPosition(t.clone()));
  }
  alignNodeToTarget(e, t) {
    if (null == e || !e.isValid || null == t || !t.isValid) return;
    this.reparentToGameNode(e);
    const i = e.parent,
      o = null == i ? void 0 : i.getComponent(__rea_outer_s);
    o ? e.setPosition(o.convertToNodeSpaceAR(t.worldPosition)) : e.setWorldPosition(t.worldPosition);
  }
  reparentToGameNode(e) {
    const t = this.gameNode;
    if (null == t || !t.isValid || e.parent === t) return;
    const i = e.worldPosition.clone();
    e.setParent(t);
    const o = t.getComponent(__rea_outer_s);
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
  resetLeaf(e, t) {
    null != e && e.isValid && (__rea_outer_f(e), e.setPosition(t), this.resetNodeOpacity(e, 255));
  }
  resetNodeOpacity(e, t) {
    null != e && e.isValid && __rea_outer_y(e, t);
  }
  resetNodeAngle(e) {
    null != e && e.isValid && (e.angle = 0);
  }
  resolveReferences() {
    var e, t, i, o, s, n, h, l;
    this.uiPanelNode = this.node.getChildByPath("UIPanel"), this.gameNode = this.node.getChildByPath("UIPanel/gameNode"), this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.bubbleNode = this.node.getChildByPath("UIPanel/bubble"), this.clickRootNode = this.node.getChildByPath("UIPanel/click_root"), this.demoNode = this.node.getChildByPath("UIPanel/demo");
    const a = this.gameNode;
    a && __rea_outer_k(a, 1080, 1920), this.promptBoxNode = (null == a ? void 0 : a.getChildByName("prompt_box")) ?? null, this.promptLabel = (null == (e = this.promptBoxNode) || null == (e = e.getChildByName("Label")) ? void 0 : e.getComponent(__rea_outer_r)) ?? null, this.bgNode = (null == a ? void 0 : a.getChildByName("bg")) ?? null, this.bg1Node = (null == a ? void 0 : a.getChildByName("bg_1")) ?? null, this.girlNode = (null == a ? void 0 : a.getChildByName("girl")) ?? null, this.girlFlowerNode = (null == (t = this.girlNode) ? void 0 : t.getChildByName("flower")) ?? null, this.girlFaceNode = (null == (i = this.girlNode) ? void 0 : i.getChildByName("girl_face")) ?? null, this.girlAngerNode = (null == (o = this.girlNode) ? void 0 : o.getChildByName("anger")) ?? null, this.girlHandNode = (null == (s = this.girlNode) ? void 0 : s.getChildByName("girl_hand")) ?? null, this.girlHand1Node = (null == (n = this.girlNode) ? void 0 : n.getChildByName("girl_hand_1")) ?? null, this.manFaceNode = (null == a ? void 0 : a.getChildByPath("man/man_face")) ?? null, this.manFlowerNode = (null == a ? void 0 : a.getChildByPath("man/flower")) ?? null, this.manHeartNode = (null == a ? void 0 : a.getChildByPath("man/man_heart")) ?? null, this.manHeart001Node = (null == a ? void 0 : a.getChildByPath("man/man_heart-001")) ?? null, this.carpetNode = (null == a ? void 0 : a.getChildByName("carpet")) ?? null, this.carpet1Node = (null == a ? void 0 : a.getChildByName("carpet_1")) ?? null, this.carpetTouchNode = (null == a ? void 0 : a.getChildByPath("clicks/carpettouch")) ?? null, this.sawTouchNode = (null == a ? void 0 : a.getChildByPath("clicks/sawtouch")) ?? null, this.circuitBreakerTouchNode = (null == a ? void 0 : a.getChildByPath("clicks/circuit_breaker_touch")) ?? null, this.cabinetNode = (null == a ? void 0 : a.getChildByName("cabinet")) ?? null, this.cabinet1Node = (null == a ? void 0 : a.getChildByName("cabinet_1")) ?? null, this.cabinet2Node = (null == (h = this.cabinet1Node) ? void 0 : h.getChildByName("cabinet_2")) ?? (null == a ? void 0 : a.getChildByName("cabinet_2")) ?? null, this.circuitBreakerNode = (null == a ? void 0 : a.getChildByName("circuit_breaker")) ?? null, this.circuitBreaker1Node = (null == a ? void 0 : a.getChildByName("circuit_breaker_1")) ?? null, this.alarmButtonNode = (null == a ? void 0 : a.getChildByName("alarm_button")) ?? null, this.alarmButton1Node = (null == a ? void 0 : a.getChildByName("alarm_button_1")) ?? null, this.keyNode = (null == a ? void 0 : a.getChildByName("key")) ?? null, this.key1Node = (null == a ? void 0 : a.getChildByName("key_1")) ?? null, this.photoNode = (null == a ? void 0 : a.getChildByName("photo")) ?? null, this.broomNode = (null == a ? void 0 : a.getChildByName("broom")) ?? null, this.hammerNode = (null == a ? void 0 : a.getChildByName("hammer")) ?? null, this.hammer1Node = (null == a ? void 0 : a.getChildByName("hammer_1")) ?? null, this.sawNode = (null == (l = this.cabinet1Node) ? void 0 : l.getChildByName("saw")) ?? (null == a ? void 0 : a.getChildByName("saw")) ?? null, this.saw1Node = (null == a ? void 0 : a.getChildByName("saw_1")) ?? null, this.buildDoors(a), [this.photoNode, this.broomNode, this.hammerNode, this.hammer1Node, this.keyNode, this.key1Node, this.sawNode, this.saw1Node, this.manFlowerNode].forEach(e => this.rememberNodeHome(e)), this.warnIfMissing("UIPanel/gameNode", this.gameNode), this.warnIfMissing("prompt_box", this.promptBoxNode), this.warnIfMissing("girl", this.girlNode), this.warnIfMissing("girl/girl_face", this.girlFaceNode), this.warnIfMissing("girl/anger", this.girlAngerNode), this.warnIfMissing("man/man_face", this.manFaceNode), this.warnIfMissing("man/flower", this.manFlowerNode), this.warnIfMissing("man/man_heart", this.manHeartNode), this.warnIfMissing("man/man_heart-001", this.manHeart001Node), this.warnIfMissing("alarm_button_1", this.alarmButton1Node), this.warnIfMissing("cabinet_1/saw", this.sawNode), this.warnIfMissing("clicks/carpettouch", this.carpetTouchNode), this.warnIfMissing("clicks/sawtouch", this.sawTouchNode), this.warnIfMissing("clicks/circuit_breaker_touch", this.circuitBreakerTouchNode), this.carpetTouchNode || console.warn("[Level_38] clicks/carpettouch missing, fallback to carpet"), this.circuitBreakerTouchNode || console.warn("[Level_38] clicks/circuit_breaker_touch missing, fallback to circuit_breaker_1");
  }
  buildDoors(e) {
    this.doors.length = 0;
    const t = (null == e ? void 0 : e.getChildByName("doors")) ?? null;
    for (let e = 1; e <= 8; e += 1) {
      const i = (null == t ? void 0 : t.getChildByName(`door${e}`)) ?? null;
      this.doors.push(this.createDoorRuntime(e, i)), this.warnIfMissing(`doors/door${e}`, i);
    }
  }
  createDoorRuntime(e, t) {
    const o = (null == t ? void 0 : t.getChildByName(`door${e}_lock`)) ?? null,
      s = this.collectDoorLeaves(t),
      n = s[0] ?? null,
      r = s[1] ?? null;
    return {
      index: e,
      root: t,
      lock: o,
      leftLeaf: n,
      rightLeaf: r,
      leftOrigin: (null == n ? void 0 : n.position.clone()) ?? new __rea_outer_i(),
      rightOrigin: (null == r ? void 0 : r.position.clone()) ?? new __rea_outer_i()
    };
  }
  collectDoorLeaves(e) {
    if (!e) return [];
    const t = e.children.filter(e => !e.name.includes("lock"));
    return t.sort((e, t) => e.position.x - t.position.x), t;
  }
  warnIfMissing(e, t) {
    t || console.warn(`[Level_38] missing ${e}`);
  }
  stopTrackedTweens() {
    const e = [this.photoNode, this.broomNode, this.hammer1Node, this.key1Node, this.saw1Node, this.manFlowerNode, this.manHeartNode, this.manHeart001Node, this.alarmButton1Node];
    this.doors.forEach(t => {
      e.push(t.root, t.lock, t.leftLeaf, t.rightLeaf);
    }), e.forEach(e => {
      null != e && e.isValid && __rea_outer_f(e);
    });
  }
  isLeftSwipe(e, t) {
    return e <= -30 && Math.abs(e) >= 1.2 * Math.abs(t);
  }
  isDownSwipe(e, t) {
    return t <= -30 && Math.abs(t) >= 1.2 * Math.abs(e);
  }
  isPointInsideNode(e, t) {
    if (null == e || !e.isValid || !e.activeInHierarchy) return !1;
    const i = e.getComponent(__rea_outer_s);
    return !!i && i.getBoundingBoxToWorld().contains(t);
  }
  getTouchWorldPoint(e) {
    const t = e.getUILocation();
    return new __rea_outer_h(t.x, t.y);
  }
  getTouchLocalPosition(e, t) {
    const o = e.getUILocation(),
      n = t.getComponent(__rea_outer_s);
    return n ? n.convertToNodeSpaceAR(new __rea_outer_i(o.x, o.y, 0)) : __rea_outer_i.ZERO.clone();
  }
  calculateTouchOffset(e, t, o) {
    const s = this.getTouchLocalPosition(e, o);
    return new __rea_outer_i(t.position.x - s.x, t.position.y - s.y, 0);
  }
  setDragNodePositionFromTouch(e, t, i, o) {
    const s = this.getTouchLocalPosition(e, i);
    t.setPosition(s.x + o.x, s.y + o.y, t.position.z);
  }
  setNodeActive(e, t) {
    null != e && e.isValid && (e.active = t);
  }
  scheduleOnceIfValid(e, t) {
    this.scheduleOnce(() => {
      this.isValid && e();
    }, t);
  }
}) || B;
__rea_outer_t._RF.pop();
export { __recovered_export_0 as default };
