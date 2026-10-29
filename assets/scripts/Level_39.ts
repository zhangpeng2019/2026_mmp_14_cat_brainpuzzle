// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_39.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { Node as __rea_outer_i } from "cc";
import { Button as __rea_outer_s } from "cc";
import { instantiate as __rea_outer_o } from "cc";
import { Vec3 as __rea_outer_n } from "cc";
import { Sprite as __rea_outer_l } from "cc";
import { Label as __rea_outer_a } from "cc";
import { Graphics as __rea_outer_r } from "cc";
import { Color as __rea_outer_d } from "cc";
import { UITransform as __rea_outer_h } from "cc";
import { assetManager as __rea_outer_c } from "cc";
import { SpriteFrame as __rea_outer_u } from "cc";
import { Tween as __rea_outer_p } from "cc";
import { tween as __rea_outer_N } from "cc";
import { UIOpacity as __rea_outer_g } from "cc";
import { Vec2 as __rea_outer_m } from "cc";
import { _decorator as __rea_outer_v } from "cc";
import { default as __rea_outer_y } from "./LevelBase";
import { default as __rea_outer_f } from "./AudioManager";
import { I18nController as __rea_outer_C } from "./i18n-controller";
import { I18nItem as __rea_outer_b } from "./i18n-item";
import { UIManager as __rea_outer_P } from "./ui-manager";
import { UILayer as __rea_outer_I } from "./ui-layer";
import { UIHint as __rea_outer_B } from "./uihint";
import { UIFail as __rea_outer_T } from "./uifail";
import { GameController as __rea_outer_x } from "./GameController";
import { setNodeOpacity as __rea_outer_k } from "./CocosCompat";
import { ensureUITransform as __rea_outer_A } from "./CocosCompat";
import { getUIOpacity as __rea_outer_S } from "./CocosCompat";
import { stopAllTweens as __rea_outer_w } from "./CocosCompat";
let __recovered_export_0;
var V;
__rea_outer_t._RF.push({}, "8bb0bm1gjZGXY+AkfCdP+QL", "Level_39", void 0);
const {
    ccclass: _
  } = __rea_outer_v,
  O = "Level_39",
  L = ["39_1", "39_2", "39_3"],
  R = 100,
  F = "Texture/button/spriteFrame",
  E = "Texture/button_1/spriteFrame",
  M = "Texture/button_2/spriteFrame",
  D = [{
    sceneName: "Scene1",
    boardSize: 4,
    forbiddenCellIndexes: [6, 15],
    victimCellIndex: 12,
    successVoiceKey: "39_4",
    hintKeys: ["level39_hint1"],
    suspects: [{
      id: "tom",
      displayName: "Tom",
      clueKey: "level39_info1",
      headPath: "Texture/1/tom/spriteFrame",
      correctCellIndex: 1
    }, {
      id: "zoe",
      displayName: "Zoe",
      clueKey: "level39_info2",
      headPath: "Texture/1/zoe/spriteFrame",
      correctCellIndex: 7
    }, {
      id: "leo",
      displayName: "Leo",
      clueKey: "level39_info3",
      headPath: "Texture/1/leo/spriteFrame",
      correctCellIndex: 14
    }]
  }, {
    sceneName: "Scene2",
    boardSize: 5,
    forbiddenCellIndexes: [10, 24],
    victimCellIndex: 4,
    successVoiceKey: "39_5",
    hintKeys: ["level39_hint2"],
    suspects: [{
      id: "lucy",
      displayName: "Lucy",
      clueKey: "level39_info4",
      headPath: "Texture/2/lucy/spriteFrame",
      correctCellIndex: 6
    }, {
      id: "sara",
      displayName: "Sara",
      clueKey: "level39_info5",
      headPath: "Texture/2/sara/spriteFrame",
      correctCellIndex: 17
    }, {
      id: "jack",
      displayName: "Jack",
      clueKey: "level39_info6",
      headPath: "Texture/2/jack/spriteFrame",
      correctCellIndex: 25
    }, {
      id: "mike",
      displayName: "Mike",
      clueKey: "level39_info7",
      headPath: "Texture/2/mike/spriteFrame",
      correctCellIndex: 13
    }]
  }, {
    sceneName: "Scene3",
    boardSize: 6,
    forbiddenCellIndexes: [2, 5, 7, 9, 11, 13, 15, 19, 22, 29, 32, 35],
    victimCellIndex: 6,
    successVoiceKey: "39_6",
    hintKeys: ["level39_hint3"],
    suspects: [{
      id: "jack",
      displayName: "Jack",
      clueKey: "level39_info8",
      headPath: "Texture/3/Jack/spriteFrame",
      correctCellIndex: 33
    }, {
      id: "lucy",
      displayName: "Lucy",
      clueKey: "level39_info9",
      headPath: "Texture/3/Lucy/spriteFrame",
      correctCellIndex: 25
    }, {
      id: "mike",
      displayName: "Mike",
      clueKey: "level39_info10",
      headPath: "Texture/3/Mike/spriteFrame",
      correctCellIndex: 10
    }, {
      id: "sara",
      displayName: "Sara",
      clueKey: "level39_info11",
      headPath: "Texture/3/Sara/spriteFrame",
      correctCellIndex: 20
    }, {
      id: "owen",
      displayName: "Owen",
      clueKey: "level39_info12",
      headPath: "Texture/3/Owen/spriteFrame",
      correctCellIndex: 17
    }]
  }];
__recovered_export_0 = _("Level_39")(V = class extends __rea_outer_y {
  constructor(...e) {
    super(...e), this.phase = 0, this.winstate = !1, this.uiPanelNode = null, this.gameNode = null, this.backBgNode = null, this.bubbleNode = null, this.dialogBoxNode = null, this.dialogBox1Node = null, this.tipLabel = null, this.clickRootNode = null, this.demoNode = null, this.policeNode = null, this.canNode = null, this.cannotNode = null, this.end2Node = null, this.avatarFrameNode = null, this.personTemplateNode = null, this.submitButtonNode = null, this.resetButtonNode = null, this.infoButtonNode = null, this.submitButton = null, this.resetButton = null, this.infoButton = null, this.sceneNodes = [null, null, null], this.spriteFrameCache = new Map(), this.cells = [], this.people = [], this.currentRound = 1, this.isInteractionLocked = !0, this.activeDragState = null, this.voiceToken = 0, this.currentVoiceKey = "", this.onTouchStart = e => {
      if (1 !== this.phase || this.isInteractionLocked || this.activeDragState) return;
      const t = this.getTouchWorldPoint(e);
      this.isPointInsideNode(this.submitButtonNode, t) || this.isPointInsideNode(this.resetButtonNode, t) || this.isPointInsideNode(this.infoButtonNode, t) || this.tryBeginDragAtPoint(t, e);
    }, this.onTouchMove = e => {
      if (!this.activeDragState || 1 !== this.phase || this.isInteractionLocked) return;
      const t = this.activeDragState;
      this.setDragNodePositionFromTouch(e, t.dragNode, t.dragParent, t.touchOffset), this.updateDropOverlay(this.getTouchWorldPoint(e), t.person.config.id);
    }, this.onTouchEnd = e => {
      if (1 !== this.phase || !this.activeDragState) return this.activeDragState = null, void this.hideDropOverlay();
      const t = this.activeDragState;
      this.activeDragState = null, this.handlePersonDrop(t, this.getTouchWorldPoint(e));
    }, this.onSubmitClick = () => {
      1 === this.phase && !this.isInteractionLocked && this.areAllSuspectsPlaced() && this.executeSubmit();
    }, this.onResetClick = () => {
      1 === this.phase && !this.isInteractionLocked && this.hasAnySuspectPlaced() && this.resetCurrentRoundPlacements();
    };
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.allItemNum = 3, this.hasInstallNum = 0, this.preloadSpriteFrames();
  }
  start() {
    this.resetLevelState(), this.applyInitialVisibility(), this.enterPhase0();
  }
  onDestroy() {
    this.unscheduleAllCallbacks(), this.unregisterHandlers(), this.stopTrackedTweens(), this.destroyPeople(), this.activeDragState = null, super.onDestroy();
  }
  handleTimeExpired() {
    return !!(this.phase >= 2 || this.winstate);
  }
  showHint() {
    const e = __rea_outer_C.getInstance().getKey("level39_legend");
    __rea_outer_P.getInstance().showView(__rea_outer_B, void 0, {
      body: e
    });
  }
  getGameProgressSnapshot() {
    const e = Math.min(this.hasInstallNum, 3);
    return {
      progress: e / 3,
      label: `${e}/3`
    };
  }
  markAllTasksCompleted() {
    this.hasInstallNum = 3, this.currentRound = 3, this.phase = 2, this.winstate = !0, this.isInteractionLocked = !0, this.unregisterHandlers();
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.isInteractionLocked = !0, this.hasInstallNum = 0, this.allItemNum = 3, this.currentRound = 1, this.activeDragState = null, this.voiceToken += 1, this.destroyPeople();
  }
  applyInitialVisibility() {
    this.setNodeActive(this.gameNode, !0), this.setNodeActive(this.sceneNodes[0], !0), this.setNodeActive(this.sceneNodes[1], !1), this.setNodeActive(this.sceneNodes[2], !1), this.setTreeOpacity(this.sceneNodes[0], 255), this.setNodeActive(this.canNode, !1), this.setNodeActive(this.cannotNode, !1), this.setNodeActive(this.end2Node, !1), this.setNodeActive(this.personTemplateNode, !1), this.setNodeActive(this.demoNode, !1), this.setNodeActive(this.clickRootNode, !1), this.setNodeActive(this.backBgNode, !0), this.setNodeActive(this.policeNode, !0), this.setPoliceBubbleVisible(!0);
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_f.playMusic("bgm5", !0, .5), this.setInputBlocked(!0), this.playVoiceSequence(L, () => {
      this.isValid && (this.hidePolice(), this.setInputBlocked(!1), this.enterRound(1, !1));
    });
  }
  enterRound(e, t) {
    this.phase = 1, this.currentRound = e, this.activeDragState = null, this.destroyPeople(), this.buildBoard(e), this.createBarPeople(), this.refreshOccupyMasks(null), this.refreshButtons(), this.setNodeActive(this.end2Node, !1), this.setNodeActive(this.clickRootNode, !0), this.registerHandlers(), this.setInputBlocked(!1), __rea_outer_x.getInstance().refreshGameProgress(), t || this.TryQuickWin();
  }
  enterPhase2Success() {
    this.phase = 2, this.winstate = !0, this.isInteractionLocked = !0, this.unregisterHandlers(), this.setInputBlocked(!0), __rea_outer_x.getInstance().pauseTimer(), this.showLevelSuccess();
  }
  enterPhase2Fail() {
    this.phase = 2, this.winstate = !1, this.isInteractionLocked = !0, this.unregisterHandlers(), this.setInputBlocked(!0), __rea_outer_x.getInstance().pauseTimer(), __rea_outer_P.getInstance().showView(__rea_outer_T, __rea_outer_I.WIN_ANIMATION);
  }
  beginTimeoutFail() {
    this.phase = 2, this.winstate = !1, this.isInteractionLocked = !0, this.unregisterHandlers(), this.setInputBlocked(!0), this.voiceToken += 1, this.stopCurrentVoice(), this.hidePolice(), __rea_outer_x.getInstance().pauseTimer(), __rea_outer_P.getInstance().showView(__rea_outer_T, __rea_outer_I.WIN_ANIMATION);
  }
  registerHandlers() {
    var e, t, o;
    this.unregisterHandlers(), this.node.on(__rea_outer_i.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(__rea_outer_i.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(__rea_outer_i.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(__rea_outer_i.EventType.TOUCH_CANCEL, this.onTouchEnd, this), null == (e = this.submitButton) || e.node.on(__rea_outer_s.EventType.CLICK, this.onSubmitClick, this), null == (t = this.resetButton) || t.node.on(__rea_outer_s.EventType.CLICK, this.onResetClick, this), null == (o = this.infoButton) || o.node.on(__rea_outer_s.EventType.CLICK, this.onInfoButtonClick, this);
  }
  unregisterHandlers() {
    var e, t, o, n;
    null != (e = this.node) && e.isValid && (this.node.off(__rea_outer_i.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(__rea_outer_i.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(__rea_outer_i.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(__rea_outer_i.EventType.TOUCH_CANCEL, this.onTouchEnd, this)), null != (t = this.submitButton) && null != (t = t.node) && t.isValid && this.submitButton.node.off(__rea_outer_s.EventType.CLICK, this.onSubmitClick, this), null != (o = this.resetButton) && null != (o = o.node) && o.isValid && this.resetButton.node.off(__rea_outer_s.EventType.CLICK, this.onResetClick, this), null != (n = this.infoButton) && null != (n = n.node) && n.isValid && this.infoButton.node.off(__rea_outer_s.EventType.CLICK, this.onInfoButtonClick, this);
  }
  onInfoButtonClick() {
    this.showHint();
  }
  tryBeginDragAtPoint(e, t) {
    for (let i = this.people.length - 1; i >= 0; i -= 1) {
      const s = this.people[i];
      if (null !== s.cellIndex && this.isPointInsideNode(s.boardNode, e)) return void this.beginBoardDrag(s, t);
    }
    for (let i = this.people.length - 1; i >= 0; i -= 1) {
      const s = this.people[i];
      if (null === s.cellIndex && this.isPointInsideNode(s.barNode, e)) return void this.beginBarDrag(s, t);
    }
  }
  beginBarDrag(e, t) {
    const i = __rea_outer_o(e.barNode),
      s = this.uiPanelNode ?? e.barNode.parent;
    if (null == s || !s.isValid) return void i.destroy();
    const n = e.barNode.worldPosition.clone();
    this.applyPersonChrome(i, "drag"), i.setParent(s), this.setWorldPositionOnParent(i, s, n), i.setSiblingIndex(s.children.length - 1), this.setNodeActive(e.barNode, !1);
    const l = this.calculateTouchOffset(t, i, s);
    this.setDragNodePositionFromTouch(t, i, s, l), this.activeDragState = {
      person: e,
      fromBoard: !1,
      dragNode: i,
      dragParent: s,
      touchOffset: l,
      originCellIndex: null
    }, this.refreshOccupyMasks(null), this.updateDropOverlay(this.getTouchWorldPoint(t), e.config.id);
  }
  beginBoardDrag(e, t) {
    const i = e.boardNode;
    if (null == i || !i.isValid) return;
    const s = e.cellIndex,
      o = this.uiPanelNode ?? i.parent;
    if (null == o || !o.isValid) return;
    const n = i.worldPosition.clone();
    this.applyPersonChrome(i, "drag"), i.setParent(o), this.setWorldPositionOnParent(i, o, n), i.setSiblingIndex(o.children.length - 1), e.cellIndex = null;
    const l = this.calculateTouchOffset(t, i, o);
    this.setDragNodePositionFromTouch(t, i, o, l), this.activeDragState = {
      person: e,
      fromBoard: !0,
      dragNode: i,
      dragParent: o,
      touchOffset: l,
      originCellIndex: s
    }, this.refreshOccupyMasks(e.config.id), this.updateDropOverlay(this.getTouchWorldPoint(t), e.config.id);
  }
  handlePersonDrop(e, t) {
    this.hideDropOverlay();
    const i = this.findCellAtPoint(t),
      s = e.fromBoard ? e.person.config.id : null;
    if (i && this.isCellPlaceable(i, s)) return __rea_outer_f.playEffect_1("level39_1"), this.placePersonOnCell(e, i), this.refreshOccupyMasks(null), void this.refreshButtons();
    this.restoreFailedDrop(e), this.refreshOccupyMasks(null), this.refreshButtons();
  }
  placePersonOnCell(e, t) {
    const i = e.person;
    this.setNodeActive(i.barNode, !1), this.attachBoardAvatar(e.dragNode, t), this.applyPersonChrome(e.dragNode, "board"), __rea_outer_k(e.dragNode, 255), i.boardNode = e.dragNode, i.cellIndex = t.index, this.scaleAvatarToCell(e.dragNode, t), this.raiseCellContents(t);
  }
  restoreFailedDrop(e) {
    const t = e.person;
    if (!e.fromBoard) return e.dragNode.destroy(), this.setNodeActive(t.barNode, !0), this.applyPersonChrome(t.barNode, "bar"), __rea_outer_k(t.barNode, 255), t.barNode.setPosition(t.barHomePosition), void (t.cellIndex = null);
    const i = this.getCell(e.originCellIndex);
    i && (this.attachBoardAvatar(e.dragNode, i), this.applyPersonChrome(e.dragNode, "board"), this.scaleAvatarToCell(e.dragNode, i), t.boardNode = e.dragNode, t.cellIndex = i.index, this.raiseCellContents(i));
  }
  resetCurrentRoundPlacements() {
    this.people.forEach(e => {
      var t;
      null != (t = e.boardNode) && t.isValid && e.boardNode.destroy(), e.boardNode = null, e.cellIndex = null, this.setNodeActive(e.barNode, !0), this.applyPersonChrome(e.barNode, "bar"), __rea_outer_k(e.barNode, 255), e.barNode.setPosition(e.barHomePosition);
    }), this.refreshOccupyMasks(null), this.refreshButtons();
  }
  executeSubmit() {
    this.isInteractionLocked = !0, this.setSubmitButtonsLocked();
    const e = this.people.every(e => e.cellIndex === e.config.correctCellIndex);
    if (this.people.forEach(e => {
      var t;
      if (null == (t = e.boardNode) || !t.isValid) return;
      const i = e.cellIndex === e.config.correctCellIndex ? "result-ok" : "result-bad";
      this.applyPersonChrome(e.boardNode, i);
    }), e) return __rea_outer_f.playEffect_1("level39_2"), this.setNodeActive(this.end2Node, !0), this.hasInstallNum = Math.min(this.hasInstallNum + 1, 3), __rea_outer_x.getInstance().refreshGameProgress(), void this.scheduleOnceIfValid(() => {
      this.setNodeActive(this.end2Node, !1), this.continueAfterCorrectRound();
    }, 1);
    __rea_outer_f.playEffect_1("level39_3"), this.scheduleOnceIfValid(() => {
      this.setNodeActive(this.clickRootNode, !1), this.setInputBlocked(!0), this.setNodeActive(this.policeNode, !0), this.setPoliceBubbleVisible(!0), this.playPoliceVoice("39_7", () => {
        this.isValid && (this.hidePolice(), this.enterPhase2Fail());
      });
    }, 1);
  }
  continueAfterCorrectRound() {
    const e = this.getRoundConfig();
    this.setNodeActive(this.clickRootNode, !1), this.setInputBlocked(!0), this.setNodeActive(this.policeNode, !0), this.setPoliceBubbleVisible(!0), this.playPoliceVoice(e.successVoiceKey, () => {
      this.isValid && (this.hidePolice(), this.currentRound >= 3 ? this.enterPhase2Success() : this.switchToNextRound());
    });
  }
  switchToNextRound() {
    const e = this.sceneNodes[this.currentRound - 1],
      t = this.currentRound + 1,
      i = this.sceneNodes[t - 1];
    this.setNodeActive(this.end2Node, !1), this.destroyPeople(), null != i && i.isValid && (this.setNodeActive(i, !0), this.setTreeOpacity(i, 0), this.tweenTreeOpacity(i, 0, 255, .2)), null != e && e.isValid && this.tweenTreeOpacity(e, 255, 0, .2), this.scheduleOnceIfValid(() => {
      this.setNodeActive(e, !1), this.setTreeOpacity(e, 255), this.setTreeOpacity(i, 255), this.enterRound(t, !0);
    }, .2);
  }
  buildBoard(e) {
    const t = D[e - 1],
      i = this.sceneNodes[e - 1],
      s = (null == i ? void 0 : i.getChildByName("Layout")) ?? null;
    if (this.cells = [], null == s || !s.isValid) return void console.warn(`[Level_39] missing ${t.sceneName}/Layout`);
    const o = new Set(t.forbiddenCellIndexes);
    s.children.forEach(e => {
      const i = Number.parseInt(e.name, 10);
      if (!Number.isFinite(i) || i <= 0) return;
      const s = {
        index: i,
        row: Math.floor((i - 1) / t.boardSize) + 1,
        col: (i - 1) % t.boardSize + 1,
        node: e,
        isForbidden: o.has(i),
        isVictim: i === t.victimCellIndex,
        maskNode: e.getChildByName("_occupyMask")
      };
      this.ensureCellMask(s), this.cells.push(s);
    }), this.cells.sort((e, t) => e.index - t.index);
  }
  createBarPeople() {
    const e = this.personTemplateNode,
      t = this.avatarFrameNode,
      i = this.getRoundConfig();
    null != e && e.isValid && null != t && t.isValid ? (this.people = i.suspects.map(i => {
      const s = __rea_outer_o(e);
      return s.name = `person_${i.id}`, this.applyPersonChrome(s, "bar"), this.applyPersonContent(s, i), s.setParent(t), s.active = !0, __rea_outer_k(s, 255), {
        config: i,
        barNode: s,
        boardNode: null,
        cellIndex: null,
        barHomePosition: __rea_outer_n.ZERO.clone()
      };
    }), this.layoutBarAvatars()) : console.warn("[Level_39] missing personnode template or frame");
  }
  layoutBarAvatars() {
    var e;
    const t = this.avatarFrameNode;
    if (null == t || !t.isValid || 0 === this.people.length) return;
    const i = __rea_outer_A(t).width,
      s = this.people.length,
      o = Math.max(0, i - s * R) / (s + 1),
      l = (null == (e = this.personTemplateNode) ? void 0 : e.position.y) ?? 0;
    this.people.forEach((e, t) => {
      const s = -i / 2 + o + 50 + t * (R + o);
      e.barHomePosition = new __rea_outer_n(s, l, 0), e.barNode.isValid && e.barNode.setPosition(e.barHomePosition);
    });
  }
  applyPersonContent(e, t) {
    var i, s, o;
    const n = (null == (i = e.getChildByName("head")) ? void 0 : i.getComponent(__rea_outer_l)) ?? null;
    if (n) {
      const e = this.spriteFrameCache.get(t.headPath) ?? null;
      e ? n.spriteFrame = e : this.loadSpriteFrame(t.headPath, e => {
        e && n.isValid && (n.spriteFrame = e);
      });
    }
    const r = (null == (s = e.getChildByPath("name_box/name")) ? void 0 : s.getComponent(__rea_outer_a)) ?? null;
    r && (r.string = t.displayName);
    const d = e.getChildByPath("infobox/name"),
      h = (null == d ? void 0 : d.getComponent(__rea_outer_b)) ?? (null == (o = e.getChildByName("infobox")) ? void 0 : o.getComponent(__rea_outer_b)) ?? null;
    h && (h.key = t.clueKey, h.refresh());
    const c = (null == d ? void 0 : d.getComponent(__rea_outer_a)) ?? null;
    c && (c.string = t.clueKey ? __rea_outer_C.getInstance().getKey(t.clueKey) : "");
  }
  applyPersonChrome(e, t) {
    const i = "bar" === t,
      s = "bar" === t,
      o = "bar" === t,
      n = "result-ok" === t,
      l = "result-bad" === t;
    this.setChildActive(e, "head", !0), this.setChildActive(e, "name_box", i), this.setChildActive(e, "infobox", s), this.setChildActive(e, "avatar_frame", o), this.setChildActive(e, "avatar_frame_1", n), this.setChildActive(e, "avatar_frame_2", l);
  }
  attachBoardAvatar(e, t) {
    e.setParent(t.node), e.setPosition(__rea_outer_n.ZERO), e.active = !0;
  }
  scaleAvatarToCell(e, t) {
    const i = __rea_outer_A(t.node),
      s = .85 * Math.min(i.width, i.height),
      o = Math.min(1, s / R);
    e.setScale(o, o, 1);
  }
  raiseCellContents(e) {
    var t;
    null != (t = e.maskNode) && t.isValid && e.maskNode.setSiblingIndex(e.node.children.length - 1), this.raiseCellAvatars(e);
  }
  raiseCellAvatars(e) {
    this.people.forEach(t => {
      var i;
      t.cellIndex === e.index && null != (i = t.boardNode) && i.isValid && t.boardNode.setSiblingIndex(e.node.children.length - 1);
    });
  }
  refreshOccupyMasks(e) {
    const t = this.collectOccupancy(e);
    this.cells.forEach(e => {
      var i;
      const s = t.cellIndexes.has(e.index),
        o = t.rows.has(e.row) || t.columns.has(e.col),
        n = !s && o;
      n && this.redrawCellMask(e), this.setNodeActive(e.maskNode, n), n && null != (i = e.maskNode) && i.isValid && e.maskNode.setSiblingIndex(e.node.children.length - 1), this.raiseCellAvatars(e);
    });
  }
  redrawCellMask(e) {
    var t;
    if (null == (t = e.maskNode) || !t.isValid) return;
    const i = e.maskNode.getComponent(__rea_outer_r);
    if (!i) return;
    const s = __rea_outer_A(e.node);
    i.clear(), i.fillColor = new __rea_outer_d(0, 0, 0, 77), i.rect(-s.width / 2, -s.height / 2, s.width, s.height), i.fill();
  }
  collectOccupancy(e) {
    const t = new Set(),
      i = new Set(),
      s = new Set(),
      o = this.getCell(this.getRoundConfig().victimCellIndex);
    return o && (t.add(o.index), i.add(o.row), s.add(o.col)), this.people.forEach(o => {
      if (o.config.id === e || null === o.cellIndex) return;
      const n = this.getCell(o.cellIndex);
      n && (t.add(n.index), i.add(n.row), s.add(n.col));
    }), {
      cellIndexes: t,
      rows: i,
      columns: s
    };
  }
  isCellPlaceable(e, t) {
    if (e.isForbidden) return !1;
    const i = this.collectOccupancy(t);
    return !i.cellIndexes.has(e.index) && !i.rows.has(e.row) && !i.columns.has(e.col);
  }
  updateDropOverlay(e, t) {
    const i = this.findCellAtPoint(e);
    if (!i) return void this.hideDropOverlay();
    const s = this.isCellPlaceable(i, t);
    this.showOverlayOnCell(s ? this.canNode : this.cannotNode, i), this.setNodeActive(s ? this.cannotNode : this.canNode, !1);
  }
  showOverlayOnCell(e, t) {
    if (null == e || !e.isValid) return;
    const i = this.gameNode ?? e.parent;
    null != i && i.isValid && e.parent !== i && e.setParent(i);
    const s = e.parent;
    null != s && s.isValid && (this.setWorldPositionOnParent(e, s, t.node.worldPosition.clone()), e.setSiblingIndex(s.children.length - 1));
    const o = __rea_outer_A(t.node);
    __rea_outer_A(e).setContentSize(o.width, o.height);
    const n = e.getComponent(__rea_outer_l);
    n && (n.sizeMode = __rea_outer_l.SizeMode.CUSTOM), e.active = !0;
  }
  hideDropOverlay() {
    this.restoreOverlayHome(this.canNode), this.restoreOverlayHome(this.cannotNode);
  }
  restoreOverlayHome(e) {
    var t;
    null != e && e.isValid && (e.active = !1, null != (t = this.gameNode) && t.isValid && e.setParent(this.gameNode));
  }
  setSubmitButtonsLocked() {
    this.submitButton && (this.submitButton.interactable = !1), this.resetButton && (this.resetButton.interactable = !1);
  }
  refreshButtons() {
    const e = this.areAllSuspectsPlaced(),
      t = this.hasAnySuspectPlaced();
    this.applyButtonState(this.submitButton, this.submitButtonNode, e ? F : E, e), this.applyButtonState(this.resetButton, this.resetButtonNode, t ? M : E, t);
  }
  applyButtonState(e, t, i, s) {
    e && (e.interactable = s);
    const o = (null == t ? void 0 : t.getComponent(__rea_outer_l)) ?? null,
      n = this.spriteFrameCache.get(i) ?? null;
    o && n ? o.spriteFrame = n : o && this.loadSpriteFrame(i, e => {
      e && o.isValid && (o.spriteFrame = e);
    });
  }
  areAllSuspectsPlaced() {
    return this.people.length > 0 && this.people.every(e => null !== e.cellIndex);
  }
  hasAnySuspectPlaced() {
    return this.people.some(e => null !== e.cellIndex);
  }
  hidePolice() {
    this.setNodeActive(this.policeNode, !1), this.setPoliceBubbleVisible(!1);
  }
  setPoliceBubbleVisible(e) {
    this.setNodeActive(this.bubbleNode, e), this.setNodeActive(this.dialogBoxNode, e), this.setNodeActive(this.dialogBox1Node, e);
  }
  playVoiceSequence(e, t) {
    const i = s => {
      s >= e.length ? t() : this.playPoliceVoice(e[s], () => {
        i(s + 1);
      });
    };
    i(0);
  }
  playPoliceVoice(e, t) {
    this.voiceToken += 1;
    const i = this.voiceToken;
    this.tipLabel && (this.tipLabel.string = __rea_outer_C.getInstance().getKey(e)), this.setPoliceBubbleVisible(!0);
    let s = !1;
    const o = () => {
        !s && this.isValid && i === this.voiceToken && (s = !0, this.unschedule(n), t());
      },
      n = () => {
        o();
      };
    this.scheduleOnce(n, 8), this.stopCurrentVoice(), this.currentVoiceKey = e, __rea_outer_f.playEffect_1(e, o);
  }
  stopCurrentVoice() {
    __rea_outer_f.stopVoice(), this.currentVoiceKey && (__rea_outer_f.stopOneEffect(this.currentVoiceKey), this.currentVoiceKey = "");
  }
  getRoundConfig() {
    return D[this.currentRound - 1];
  }
  getCell(e) {
    return null === e ? null : this.cells.find(t => t.index === e) ?? null;
  }
  findCellAtPoint(e) {
    for (let t = 0; t < this.cells.length; t += 1) {
      const i = this.cells[t];
      if (this.isPointInsideNode(i.node, e)) return i;
    }
    return null;
  }
  ensureCellMask(e) {
    var t;
    if (null != (t = e.maskNode) && t.isValid) return void (e.maskNode.active = !1);
    const s = new __rea_outer_i("_occupyMask");
    s.layer = e.node.layer;
    const o = __rea_outer_A(e.node);
    s.addComponent(__rea_outer_h).setContentSize(o.width, o.height);
    const n = s.addComponent(__rea_outer_r);
    n.fillColor = new __rea_outer_d(0, 0, 0, 77), n.rect(-o.width / 2, -o.height / 2, o.width, o.height), n.fill(), s.active = !1, e.node.addChild(s), e.maskNode = s;
  }
  destroyPeople() {
    this.people.forEach(e => {
      var t, i;
      null != (t = e.barNode) && t.isValid && e.barNode.destroy(), null != (i = e.boardNode) && i.isValid && e.boardNode.destroy();
    }), this.people = [];
  }
  preloadSpriteFrames() {
    const e = new Set([F, E, M]);
    D.forEach(t => {
      t.suspects.forEach(t => {
        e.add(t.headPath);
      });
    }), e.forEach(e => {
      this.loadSpriteFrame(e, null);
    });
  }
  loadSpriteFrame(e, t) {
    const i = this.spriteFrameCache.get(e);
    if (i) return void (null == t || t(i));
    const s = __rea_outer_c.getBundle(O);
    if (!s) return console.warn(`[Level_39] missing bundle Level_39 for ${e}`), void (null == t || t(null));
    s.load(e, __rea_outer_u, (i, s) => {
      if (this.isValid) {
        if (i || !s) return console.warn(`[Level_39] failed to load ${e}`, i), void (null == t || t(null));
        this.spriteFrameCache.set(e, s), null == t || t(s);
      }
    });
  }
  tweenTreeOpacity(e, t, i, s) {
    if (null == e || !e.isValid) return;
    this.collectRenderNodes(e).forEach(e => {
      __rea_outer_k(e, t);
      const o = __rea_outer_S(e);
      __rea_outer_w(e), __rea_outer_p.stopAllByTarget(o), __rea_outer_N(o).to(s, {
        opacity: i
      }).start();
    });
  }
  setTreeOpacity(e, t) {
    null != e && e.isValid && this.collectRenderNodes(e).forEach(e => {
      __rea_outer_k(e, t);
    });
  }
  collectRenderNodes(e) {
    const t = [e];
    return e.children.forEach(e => {
      t.push(...this.collectRenderNodes(e));
    }), t;
  }
  stopTrackedTweens() {
    const e = [...this.sceneNodes, this.canNode, this.cannotNode, this.end2Node, this.policeNode, this.bubbleNode];
    this.people.forEach(t => {
      e.push(t.barNode, t.boardNode);
    }), e.forEach(e => {
      if (null != e && e.isValid) {
        __rea_outer_w(e);
        const t = e.getComponent(__rea_outer_g);
        t && __rea_outer_p.stopAllByTarget(t);
      }
    });
  }
  setInputBlocked(e) {
    this.isInteractionLocked = e, this.setNodeActive(this.backBgNode, e);
  }
  setChildActive(e, t, i) {
    const s = (null == e ? void 0 : e.getChildByName(t)) ?? null;
    this.setNodeActive(s, i);
  }
  setWorldPositionOnParent(e, t, i) {
    const s = t.getComponent(__rea_outer_h);
    s ? e.setPosition(s.convertToNodeSpaceAR(i)) : e.setWorldPosition(i);
  }
  resolveReferences() {
    var e, t, i, o, n, l, r, d, h, c, u, p;
    this.uiPanelNode = this.node.getChildByPath("UIPanel"), this.gameNode = this.node.getChildByPath("UIPanel/gameNode"), this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.bubbleNode = this.node.getChildByPath("UIPanel/bubble"), this.dialogBoxNode = (null == (e = this.bubbleNode) ? void 0 : e.getChildByName("dialog_box")) ?? null, this.dialogBox1Node = (null == (t = this.bubbleNode) ? void 0 : t.getChildByName("dialog_box_1")) ?? null, this.tipLabel = (null == (i = this.dialogBoxNode) || null == (i = i.getChildByName("Label")) ? void 0 : i.getComponent(__rea_outer_a)) ?? null, this.clickRootNode = this.node.getChildByPath("UIPanel/click_root"), this.demoNode = this.node.getChildByPath("UIPanel/demo"), this.policeNode = this.node.getChildByPath("UIPanel/police");
    const N = this.gameNode;
    N && __rea_outer_A(N, 1080, 1920), this.canNode = (null == N ? void 0 : N.getChildByName("can")) ?? null, this.cannotNode = (null == N ? void 0 : N.getChildByName("cannot")) ?? null, this.end2Node = (null == (o = this.clickRootNode) ? void 0 : o.getChildByName("end_2")) ?? (null == N ? void 0 : N.getChildByName("end_2")) ?? null, this.sceneNodes[0] = (null == N ? void 0 : N.getChildByName("Scene1")) ?? null, this.sceneNodes[1] = (null == N ? void 0 : N.getChildByName("Scene2")) ?? null, this.sceneNodes[2] = (null == N ? void 0 : N.getChildByName("Scene3")) ?? null, this.avatarFrameNode = (null == (n = this.clickRootNode) ? void 0 : n.getChildByPath("touchpepsons/frame")) ?? null, this.personTemplateNode = (null == (l = this.avatarFrameNode) ? void 0 : l.getChildByName("personnode")) ?? null, this.submitButtonNode = (null == (r = this.clickRootNode) ? void 0 : r.getChildByName("Button_sub")) ?? null, this.resetButtonNode = (null == (d = this.clickRootNode) ? void 0 : d.getChildByName("Button_Reset")) ?? null, this.infoButtonNode = (null == (h = this.clickRootNode) ? void 0 : h.getChildByName("infoButton")) ?? null, this.setNodeActive(this.infoButtonNode, !1), this.submitButton = (null == (c = this.submitButtonNode) ? void 0 : c.getComponent(__rea_outer_s)) ?? null, this.resetButton = (null == (u = this.resetButtonNode) ? void 0 : u.getComponent(__rea_outer_s)) ?? null, this.infoButton = (null == (p = this.infoButtonNode) ? void 0 : p.getComponent(__rea_outer_s)) ?? null, this.warnMissing("UIPanel/gameNode", this.gameNode), this.warnMissing("UIPanel/click_root", this.clickRootNode), this.warnMissing("UIPanel/police", this.policeNode), this.warnMissing("UIPanel/bubble", this.bubbleNode), this.warnMissing("personnode", this.personTemplateNode), this.warnMissing("Button_sub", this.submitButtonNode), this.warnMissing("Button_Reset", this.resetButtonNode), this.warnMissing("infoButton", this.infoButtonNode), this.warnMissing("end_2", this.end2Node);
  }
  warnMissing(e, t) {
    t || console.warn(`[Level_39] missing ${e}`);
  }
  isPointInsideNode(e, t) {
    if (null == e || !e.isValid || !e.activeInHierarchy) return !1;
    const i = e.getComponent(__rea_outer_h);
    return !!i && i.getBoundingBoxToWorld().contains(t);
  }
  getTouchWorldPoint(e) {
    const t = e.getUILocation();
    return new __rea_outer_m(t.x, t.y);
  }
  getTouchLocalPosition(e, t) {
    const i = e.getUILocation(),
      s = t.getComponent(__rea_outer_h);
    return s ? s.convertToNodeSpaceAR(new __rea_outer_n(i.x, i.y, 0)) : __rea_outer_n.ZERO.clone();
  }
  calculateTouchOffset(e, t, i) {
    const s = this.getTouchLocalPosition(e, i);
    return new __rea_outer_n(t.position.x - s.x, t.position.y - s.y, 0);
  }
  setDragNodePositionFromTouch(e, t, i, s) {
    const o = this.getTouchLocalPosition(e, i);
    t.setPosition(o.x + s.x, o.y + s.y, t.position.z);
  }
  setNodeActive(e, t) {
    null != e && e.isValid && (e.active = t);
  }
  scheduleOnceIfValid(e, t) {
    this.scheduleOnce(() => {
      this.isValid && e();
    }, t);
  }
}) || V;
__rea_outer_t._RF.pop();
export { __recovered_export_0 as default };
