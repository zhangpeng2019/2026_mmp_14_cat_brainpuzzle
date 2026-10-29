// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_49.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { Node as __rea_outer_i } from "cc";
import { Button as __rea_outer_s } from "cc";
import { instantiate as __rea_outer_o } from "cc";
import { Vec3 as __rea_outer_n } from "cc";
import { Label as __rea_outer_l } from "cc";
import { Sprite as __rea_outer_a } from "cc";
import { Graphics as __rea_outer_r } from "cc";
import { Color as __rea_outer_d } from "cc";
import { UITransform as __rea_outer_h } from "cc";
import { assetManager as __rea_outer_c } from "cc";
import { SpriteFrame as __rea_outer_u } from "cc";
import { Tween as __rea_outer_p } from "cc";
import { tween as __rea_outer_N } from "cc";
import { UIOpacity as __rea_outer_m } from "cc";
import { Vec2 as __rea_outer_v } from "cc";
import { _decorator as __rea_outer_g } from "cc";
import { default as __rea_outer_b } from "./LevelBase";
import { default as __rea_outer_y } from "./AudioManager";
import { I18nController as __rea_outer_f } from "./i18n-controller";
import { I18nItem as __rea_outer_C } from "./i18n-item";
import { UIManager as __rea_outer_P } from "./ui-manager";
import { UILayer as __rea_outer__ } from "./ui-layer";
import { UIHint as __rea_outer_I } from "./uihint";
import { UIFail as __rea_outer_B } from "./uifail";
import { GameController as __rea_outer_T } from "./GameController";
import { setNodeOpacity as __rea_outer_x } from "./CocosCompat";
import { ensureUITransform as __rea_outer_A } from "./CocosCompat";
import { getUIOpacity as __rea_outer_k } from "./CocosCompat";
import { stopAllTweens as __rea_outer_V } from "./CocosCompat";
let __recovered_export_0;
var S;
__rea_outer_t._RF.push({}, "63caeDQWO1Jyr65tcKYtNjb", "Level_49", void 0);
const {
    ccclass: w
  } = __rea_outer_g,
  O = "Level_49",
  L = ["49_1", "49_2", "49_3"],
  H = 100,
  F = "Texture/button/spriteFrame",
  E = "Texture/button_1/spriteFrame",
  M = "Texture/button_2/spriteFrame",
  R = [{
    sceneName: "1",
    boardSize: 5,
    forbiddenCellIndexes: [2, 3, 4, 6, 9, 12, 15, 18, 20, 21, 25],
    victimCellIndex: 10,
    victimNodeName: "1_Victor",
    hiddenCharacterNodeNames: ["1_Anna", "1_Boris", "1_Cara", "1_Dmitri"],
    successVoiceKey: "49_4",
    hintKeys: ["level49_hint1"],
    suspects: [{
      id: "anna",
      displayName: "Anna",
      clueKey: "level49_info1",
      barHeadPath: "Texture/1/1_avatar_frame_1/spriteFrame",
      boardHeadPath: "Texture/1_Anna/spriteFrame",
      correctCellIndex: 1
    }, {
      id: "boris",
      displayName: "Boris",
      clueKey: "level49_info2",
      barHeadPath: "Texture/1/1_avatar_frame_2/spriteFrame",
      boardHeadPath: "Texture/1_Boris/spriteFrame",
      correctCellIndex: 13
    }, {
      id: "cara",
      displayName: "Cara",
      clueKey: "level49_info3",
      barHeadPath: "Texture/1/1_avatar_frame_3/spriteFrame",
      boardHeadPath: "Texture/1_Cara/spriteFrame",
      correctCellIndex: 17
    }, {
      id: "dmitri",
      displayName: "Dmitri",
      clueKey: "level49_info4",
      barHeadPath: "Texture/1/1_avatar_frame_4/spriteFrame",
      boardHeadPath: "Texture/1_Dmitri/spriteFrame",
      correctCellIndex: 24
    }]
  }, {
    sceneName: "2",
    boardSize: 6,
    forbiddenCellIndexes: [1, 3, 4, 5, 7, 10, 12, 14, 15, 17, 18, 20, 21, 24, 25, 26, 29, 31, 32, 34, 36],
    victimCellIndex: 6,
    victimNodeName: "2_Cole",
    hiddenCharacterNodeNames: ["2_Ivan", "2_Ethan", "2_Fiona", "2_George", "2_Hannah"],
    successVoiceKey: "49_5",
    hintKeys: ["level49_hint2"],
    suspects: [{
      id: "ivan",
      displayName: "Ivan",
      clueKey: "level49_info5",
      barHeadPath: "Texture/2/2_avatar_frame_1/spriteFrame",
      boardHeadPath: "Texture/2_Fiona/spriteFrame",
      correctCellIndex: 16
    }, {
      id: "ethan",
      displayName: "Ethan",
      clueKey: "level49_info6",
      barHeadPath: "Texture/2/2_avatar_frame_2/spriteFrame",
      boardHeadPath: "Texture/2_Ethan/spriteFrame",
      correctCellIndex: 8
    }, {
      id: "fiona",
      displayName: "Fiona",
      clueKey: "level49_info7",
      barHeadPath: "Texture/2/2_avatar_frame_3/spriteFrame",
      boardHeadPath: "Texture/2_George/spriteFrame",
      correctCellIndex: 19
    }, {
      id: "george",
      displayName: "George",
      clueKey: "level49_info8",
      barHeadPath: "Texture/2/2_avatar_frame_4/spriteFrame",
      boardHeadPath: "Texture/2_Ivan/spriteFrame",
      correctCellIndex: 27
    }, {
      id: "hannah",
      displayName: "Hannah",
      clueKey: "level49_info9",
      barHeadPath: "Texture/2/2_avatar_frame_5/spriteFrame",
      boardHeadPath: "Texture/2_Hannah/spriteFrame",
      correctCellIndex: 35
    }]
  }, {
    sceneName: "3",
    boardSize: 6,
    forbiddenCellIndexes: [1, 4, 6, 9, 13, 14, 17, 24, 26, 29, 31, 33, 36],
    victimCellIndex: 35,
    victimNodeName: "3_Edgar",
    hiddenCharacterNodeNames: ["3_Noah", "3_Jake", "3_Kara", "3_Leo", "3_Mia"],
    successVoiceKey: "49_6",
    hintKeys: ["level49_hint3"],
    suspects: [{
      id: "noah",
      displayName: "Noah",
      clueKey: "level49_info10",
      barHeadPath: "Texture/3/3_avatar_frame_1/spriteFrame",
      boardHeadPath: "Texture/3_Noah/spriteFrame",
      correctCellIndex: 27
    }, {
      id: "jake",
      displayName: "Jake",
      clueKey: "level49_info11",
      barHeadPath: "Texture/3/3_avatar_frame_2/spriteFrame",
      boardHeadPath: "Texture/3_Jake/spriteFrame",
      correctCellIndex: 2
    }, {
      id: "kara",
      displayName: "Kara",
      clueKey: "level49_info12",
      barHeadPath: "Texture/3/3_avatar_frame_3/spriteFrame",
      boardHeadPath: "Texture/3_Kara/spriteFrame",
      correctCellIndex: 12
    }, {
      id: "leo",
      displayName: "Leo",
      clueKey: "level49_info13",
      barHeadPath: "Texture/3/3_avatar_frame_4/spriteFrame",
      boardHeadPath: "Texture/3_Leo/spriteFrame",
      correctCellIndex: 16
    }, {
      id: "mia",
      displayName: "Mia",
      clueKey: "level49_info14",
      barHeadPath: "Texture/3/3_avatar_frame_5/spriteFrame",
      boardHeadPath: "Texture/3_Mia/spriteFrame",
      correctCellIndex: 19
    }]
  }];
__recovered_export_0 = w("Level_49")(S = class extends __rea_outer_b {
  constructor(...e) {
    super(...e), this.phase = 0, this.winstate = !1, this.uiPanelNode = null, this.gameNode = null, this.backBgNode = null, this.bubbleNode = null, this.dialogBoxNode = null, this.dialogBox1Node = null, this.tipLabel = null, this.clickRootNode = null, this.demoNode = null, this.policeNode = null, this.canNode = null, this.cannotNode = null, this.can1Node = null, this.cannot1Node = null, this.end2Node = null, this.levelLabel = null, this.touchPersonsNode = null, this.personTemplateNode = null, this.submitButtonNode = null, this.resetButtonNode = null, this.infoButtonNode = null, this.submitButton = null, this.resetButton = null, this.infoButton = null, this.sceneNodes = [null, null, null], this.spriteFrameCache = new Map(), this.cells = [], this.people = [], this.currentRound = 1, this.isInteractionLocked = !0, this.activeDragState = null, this.voiceToken = 0, this.currentVoiceKey = "", this.onTouchStart = e => {
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
    const e = __rea_outer_f.getInstance().getKey("level49_legend");
    __rea_outer_P.getInstance().showView(__rea_outer_I, void 0, {
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
    this.setNodeActive(this.gameNode, !0), this.applyAllSceneCharacterVisibility(), this.setNodeActive(this.sceneNodes[0], !0), this.setNodeActive(this.sceneNodes[1], !1), this.setNodeActive(this.sceneNodes[2], !1), this.setTreeOpacity(this.sceneNodes[0], 255), this.setNodeActive(this.canNode, !1), this.setNodeActive(this.cannotNode, !1), this.setNodeActive(this.can1Node, !1), this.setNodeActive(this.cannot1Node, !1), this.setNodeActive(this.end2Node, !1), this.setNodeActive(this.personTemplateNode, !1), this.setNodeActive(this.demoNode, !1), this.setNodeActive(this.clickRootNode, !1), this.setNodeActive(this.touchPersonsNode, !1), this.setNodeActive(this.backBgNode, !0), this.setNodeActive(this.policeNode, !0), this.setPoliceBubbleVisible(!0), this.setLevelLabel(1), this.applyButtonLabels();
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_y.playMusic("bgm5", !0, .5), this.setInputBlocked(!0), this.playVoiceSequence(L, () => {
      this.isValid && (this.hidePolice(), this.setInputBlocked(!1), this.enterRound(1, !1));
    });
  }
  enterRound(e, t) {
    this.phase = 1, this.currentRound = e, this.activeDragState = null, this.destroyPeople(), this.buildBoard(e), this.createBarPeople(), this.refreshOccupyMasks(null), this.refreshButtons(), this.setNodeActive(this.end2Node, !1), this.setNodeActive(this.personTemplateNode, !1), this.setNodeActive(this.clickRootNode, !0), this.setNodeActive(this.touchPersonsNode, !0), this.setLevelLabel(e), this.registerHandlers(), this.setInputBlocked(!1), __rea_outer_T.getInstance().refreshGameProgress(), t || this.TryQuickWin();
  }
  enterPhase2Success() {
    this.phase = 2, this.winstate = !0, this.isInteractionLocked = !0, this.unregisterHandlers(), this.setInputBlocked(!0), __rea_outer_T.getInstance().pauseTimer(), this.showLevelSuccess();
  }
  enterPhase2Fail() {
    this.phase = 2, this.winstate = !1, this.isInteractionLocked = !0, this.unregisterHandlers(), this.setInputBlocked(!0), __rea_outer_T.getInstance().pauseTimer(), __rea_outer_P.getInstance().showView(__rea_outer_B, __rea_outer__.WIN_ANIMATION);
  }
  beginTimeoutFail() {
    this.phase = 2, this.winstate = !1, this.isInteractionLocked = !0, this.unregisterHandlers(), this.setInputBlocked(!0), this.voiceToken += 1, this.stopCurrentVoice(), this.hidePolice(), __rea_outer_T.getInstance().pauseTimer(), __rea_outer_P.getInstance().showView(__rea_outer_B, __rea_outer__.WIN_ANIMATION);
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
      if (null !== s.cellIndex && this.isPersonNodeHit(s.boardNode, e)) return void this.beginBoardDrag(s, t);
    }
    for (let i = this.people.length - 1; i >= 0; i -= 1) {
      const s = this.people[i];
      if (null === s.cellIndex && this.isPersonNodeHit(s.barNode, e)) return void this.beginBarDrag(s, t);
    }
  }
  beginBarDrag(e, t) {
    const i = __rea_outer_o(e.barNode),
      s = this.uiPanelNode ?? e.barNode.parent;
    if (null == s || !s.isValid) return void i.destroy();
    const n = e.barNode.worldPosition.clone();
    this.applyPersonChrome(i, "drag"), this.applyPersonPortrait(i, e.config.boardHeadPath), __rea_outer_x(i, 255), i.setParent(s), this.setWorldPositionOnParent(i, s, n), i.setSiblingIndex(s.children.length - 1), this.setNodeActive(e.barNode, !1);
    const l = this.calculateTouchOffset(t, i, s);
    this.setDragNodePositionFromTouch(t, i, s, l), this.activeDragState = {
      person: e,
      fromBoard: !1,
      dragNode: i,
      dragParent: s,
      touchOffset: l,
      originCellIndex: null
    }, this.refreshOccupyMasks(null), this.layoutBarAvatars(), this.updateDropOverlay(this.getTouchWorldPoint(t), e.config.id);
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
    if (i && this.isCellPlaceable(i, s)) return __rea_outer_y.playEffect_1("level49_1"), this.placePersonOnCell(e, i), this.refreshOccupyMasks(null), void this.refreshButtons();
    this.restoreFailedDrop(e), this.refreshOccupyMasks(null), this.refreshButtons();
  }
  placePersonOnCell(e, t) {
    const i = e.person;
    this.setNodeActive(i.barNode, !1), this.attachBoardAvatar(e.dragNode, t), this.applyPersonChrome(e.dragNode, "board"), __rea_outer_x(e.dragNode, 255), i.boardNode = e.dragNode, i.cellIndex = t.index;
    this.applyPersonPortrait(e.dragNode, i.config.boardHeadPath, () => {
      e.dragNode.isValid && (this.scaleAvatarToCell(e.dragNode, t), this.centerAvatarOnCell(e.dragNode));
    }), this.raiseCellContents(t), this.layoutBarAvatars();
  }
  restoreFailedDrop(e) {
    const t = e.person;
    if (!e.fromBoard) return e.dragNode.destroy(), this.setNodeActive(t.barNode, !0), this.applyPersonChrome(t.barNode, "bar"), this.applyPersonPortrait(t.barNode, t.config.barHeadPath), __rea_outer_x(t.barNode, 255), t.barNode.setPosition(t.barHomePosition), t.cellIndex = null, void this.layoutBarAvatars();
    const i = this.getCell(e.originCellIndex);
    i && (this.attachBoardAvatar(e.dragNode, i), this.applyPersonChrome(e.dragNode, "board"), this.scaleAvatarToCell(e.dragNode, i), this.centerAvatarOnCell(e.dragNode), t.boardNode = e.dragNode, t.cellIndex = i.index, this.raiseCellContents(i));
  }
  resetCurrentRoundPlacements() {
    this.people.forEach(e => {
      var t;
      null != (t = e.boardNode) && t.isValid && e.boardNode.destroy(), e.boardNode = null, e.cellIndex = null, this.setNodeActive(e.barNode, !0), this.applyPersonChrome(e.barNode, "bar"), this.applyPersonPortrait(e.barNode, e.config.barHeadPath), __rea_outer_x(e.barNode, 255), e.barNode.setPosition(e.barHomePosition);
    }), this.layoutBarAvatars(), this.refreshOccupyMasks(null), this.refreshButtons();
  }
  executeSubmit() {
    this.isInteractionLocked = !0, this.setSubmitButtonsLocked();
    const e = this.people.every(e => e.cellIndex === e.config.correctCellIndex);
    if (this.people.forEach(e => {
      var t;
      if (null == (t = e.boardNode) || !t.isValid) return;
      const i = e.cellIndex === e.config.correctCellIndex ? "result-ok" : "result-bad";
      this.applyPersonChrome(e.boardNode, i);
    }), e) return __rea_outer_y.playEffect_1("level49_2"), this.setNodeActive(this.end2Node, !0), this.hasInstallNum = Math.min(this.hasInstallNum + 1, 3), __rea_outer_T.getInstance().refreshGameProgress(), void this.scheduleOnceIfValid(() => {
      this.setNodeActive(this.end2Node, !1), this.continueAfterCorrectRound();
    }, 1);
    __rea_outer_y.playEffect_1("level49_3"), this.scheduleOnceIfValid(() => {
      this.hidePlayHud(), this.setInputBlocked(!0), this.setNodeActive(this.policeNode, !0), this.setPoliceBubbleVisible(!0), this.playPoliceVoice("49_7", () => {
        this.isValid && (this.hidePolice(), this.enterPhase2Fail());
      });
    }, 1);
  }
  continueAfterCorrectRound() {
    const e = this.getRoundConfig();
    this.hidePlayHud(), this.setInputBlocked(!0), this.setNodeActive(this.policeNode, !0), this.setPoliceBubbleVisible(!0), this.playPoliceVoice(e.successVoiceKey, () => {
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
    const t = R[e - 1],
      i = this.sceneNodes[e - 1];
    if (this.cells = [], null == i || !i.isValid) return void console.warn(`[Level_49] missing gameNode/${t.sceneName}`);
    this.applySceneCharacterVisibility(i, t);
    const s = i.children.filter(e => e.name.includes("floor"));
    if (0 === s.length) return void console.warn(`[Level_49] no floor cells in gameNode/${t.sceneName}`);
    const o = this.clusterToCount(s.map(e => e.position.x), t.boardSize),
      n = this.clusterToCount(s.map(e => e.position.y), t.boardSize).slice().reverse(),
      l = new Set(t.forbiddenCellIndexes);
    s.forEach(e => {
      const i = this.findNearestIndex(o, e.position.x) + 1,
        s = this.findNearestIndex(n, e.position.y) + 1,
        a = (s - 1) * t.boardSize + i;
      if (this.cells.some(e => e.index === a)) return void console.warn(`[Level_49] duplicate cell R${s}C${i} on ${e.name}`);
      const r = {
        index: a,
        row: s,
        col: i,
        node: e,
        isForbidden: l.has(a),
        isVictim: a === t.victimCellIndex,
        maskNode: e.getChildByName("_occupyMask")
      };
      this.ensureCellMask(r), this.cells.push(r);
    }), this.cells.sort((e, t) => e.index - t.index);
    const a = t.boardSize * t.boardSize;
    this.cells.length !== a && console.warn(`[Level_49] expected ${a} cells, got ${this.cells.length}`);
  }
  applyAllSceneCharacterVisibility() {
    R.forEach((e, t) => {
      const i = this.sceneNodes[t];
      null != i && i.isValid && this.applySceneCharacterVisibility(i, e);
    });
  }
  applySceneCharacterVisibility(e, t) {
    const i = new Set(t.hiddenCharacterNodeNames);
    e.children.forEach(e => {
      e.name !== t.victimNodeName ? i.has(e.name) && this.setNodeActive(e, !1) : this.setNodeActive(e, !0);
    }), this.setNodeActive(e.getChildByName(t.victimNodeName), !0);
  }
  createBarPeople() {
    const e = this.personTemplateNode,
      t = this.touchPersonsNode,
      i = this.getRoundConfig();
    null != e && e.isValid && null != t && t.isValid ? (this.people = i.suspects.map(i => {
      const s = __rea_outer_o(e);
      return s.name = `person_${i.id}`, this.applyPersonChrome(s, "bar"), this.applyPersonContent(s, i), s.setParent(t), s.active = !0, __rea_outer_x(s, 255), {
        config: i,
        barNode: s,
        boardNode: null,
        cellIndex: null,
        barHomePosition: __rea_outer_n.ZERO.clone()
      };
    }), this.setNodeActive(e, !1), this.layoutBarAvatars()) : console.warn("[Level_49] missing personnodedemo template or touchpepsons");
  }
  layoutBarAvatars() {
    var e;
    const t = this.touchPersonsNode,
      i = this.people.filter(e => null === e.cellIndex && e.barNode.isValid && e.barNode.active);
    if (null == t || !t.isValid || 0 === i.length) return;
    const s = __rea_outer_A(t).width,
      o = i.length,
      l = Math.max(0, s - o * H) / (o + 1),
      a = (null == (e = this.personTemplateNode) ? void 0 : e.position.y) ?? 0;
    i.forEach((e, t) => {
      const i = -s / 2 + l + 50 + t * (H + l);
      e.barHomePosition = new __rea_outer_n(i, a, 0), e.barNode.setPosition(e.barHomePosition);
    });
  }
  applyPersonContent(e, t) {
    var i, s;
    this.applyPersonPortrait(e, t.barHeadPath);
    const o = (null == (i = e.getChildByPath("name_box/namelable")) ? void 0 : i.getComponent(__rea_outer_l)) ?? null;
    o && (o.string = t.displayName);
    const n = e.getChildByPath("infobox_1/descptlable"),
      a = (null == n ? void 0 : n.getComponent(__rea_outer_C)) ?? (null == (s = e.getChildByName("infobox_1")) ? void 0 : s.getComponent(__rea_outer_C)) ?? null;
    a && (a.key = t.clueKey, a.refresh());
    const r = (null == n ? void 0 : n.getComponent(__rea_outer_l)) ?? null;
    r && (r.string = t.clueKey ? __rea_outer_f.getInstance().getKey(t.clueKey) : "");
  }
  applyPersonPortrait(e, t, i = null) {
    var s;
    const o = (null == (s = e.getChildByName("avatar_frame")) ? void 0 : s.getComponent(__rea_outer_a)) ?? null;
    if (!o) return;
    const n = e => {
        o.sizeMode = __rea_outer_a.SizeMode.TRIMMED, o.spriteFrame = e, null == i || i();
      },
      l = this.spriteFrameCache.get(t) ?? null;
    l ? n(l) : this.loadSpriteFrame(t, e => {
      e && o.isValid && n(e);
    });
  }
  applyPersonChrome(e, t) {
    const i = "bar" === t,
      s = "bar" === t,
      o = "result-ok" === t,
      n = "result-bad" === t;
    this.setChildActive(e, "avatar_frame", !0), this.setChildActive(e, "name_box", i), this.setChildActive(e, "infobox_1", s), this.setChildActive(e, "avatar_frame_1", o), this.setChildActive(e, "avatar_frame_2", n);
    const l = e.getChildByName("avatar_frame_1"),
      a = e.getChildByName("avatar_frame_2");
    null != l && l.isValid && l.setScale(o ? 1.12 : 1, o ? 1.12 : 1, 1), null != a && a.isValid && a.setScale(n ? 1.12 : 1, n ? 1.12 : 1, 1);
    const r = o ? l : n ? a : null;
    null != r && r.isValid && r.setSiblingIndex(e.children.length - 1);
    const d = e.getChildByName("avatar_frame");
    null != d && d.isValid && (o || n) && d.setSiblingIndex(e.children.length - 1);
  }
  attachBoardAvatar(e, t) {
    e.setParent(t.node), e.setPosition(__rea_outer_n.ZERO), e.active = !0;
  }
  scaleAvatarToCell(e, t) {
    const i = __rea_outer_A(t.node),
      s = e.getChildByName("avatar_frame"),
      o = s ? __rea_outer_A(s).width : H,
      n = .85 * Math.min(i.width, i.height),
      l = Math.min(1, n / Math.max(o, 1));
    e.setScale(l, l, 1);
  }
  centerAvatarOnCell(e) {
    const t = e.getChildByName("avatar_frame"),
      i = (null == t ? void 0 : t.position.y) ?? 0,
      s = e.scale.y;
    e.setPosition(0, -i * s, 0);
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
    const i = this.findCellAtPoint(e),
      s = this.getDropOverlayPair();
    if (!i) return void this.hideDropOverlay();
    const o = this.isCellPlaceable(i, t);
    this.showOverlayOnCell(o ? s.canNode : s.cannotNode, i), this.setNodeActive(o ? s.cannotNode : s.canNode, !1);
  }
  showOverlayOnCell(e, t) {
    if (null == e || !e.isValid) return;
    e.setParent(t.node), e.setPosition(__rea_outer_n.ZERO);
    const i = __rea_outer_A(t.node);
    __rea_outer_A(e).setContentSize(i.width, i.height);
    const s = e.getComponent(__rea_outer_a);
    s && (s.sizeMode = __rea_outer_a.SizeMode.CUSTOM), e.active = !0, e.setSiblingIndex(t.node.children.length - 1);
  }
  hideDropOverlay() {
    this.restoreOverlayHome(this.canNode), this.restoreOverlayHome(this.cannotNode), this.restoreOverlayHome(this.can1Node), this.restoreOverlayHome(this.cannot1Node);
  }
  restoreOverlayHome(e) {
    var t;
    null != e && e.isValid && (e.active = !1, null != (t = this.gameNode) && t.isValid && e.setParent(this.gameNode));
  }
  getDropOverlayPair() {
    return 1 === this.currentRound ? {
      canNode: this.canNode,
      cannotNode: this.cannotNode
    } : {
      canNode: this.can1Node,
      cannotNode: this.cannot1Node
    };
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
    const o = (null == t ? void 0 : t.getComponent(__rea_outer_a)) ?? null,
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
  hidePlayHud() {
    this.setNodeActive(this.clickRootNode, !1), this.setNodeActive(this.touchPersonsNode, !1);
  }
  hidePolice() {
    this.setNodeActive(this.policeNode, !1), this.setPoliceBubbleVisible(!1);
  }
  setPoliceBubbleVisible(e) {
    this.setNodeActive(this.bubbleNode, e), this.setNodeActive(this.dialogBoxNode, e), this.setNodeActive(this.dialogBox1Node, e);
  }
  setLevelLabel(e) {
    this.levelLabel && (this.levelLabel.string = `Level ${e}`);
  }
  applyButtonLabels() {
    this.setButtonLabel(this.submitButtonNode, "game41"), this.setButtonLabel(this.resetButtonNode, "game53");
  }
  setButtonLabel(e, t) {
    const i = (null == e ? void 0 : e.getChildByName("Label")) ?? null,
      s = (null == i ? void 0 : i.getComponent(__rea_outer_C)) ?? null;
    s && (s.key = t, s.refresh());
    const o = (null == i ? void 0 : i.getComponent(__rea_outer_l)) ?? null;
    o && (o.string = __rea_outer_f.getInstance().getKey(t));
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
    this.tipLabel && (this.tipLabel.string = __rea_outer_f.getInstance().getKey(e)), this.setPoliceBubbleVisible(!0);
    let s = !1;
    const o = () => {
        !s && this.isValid && i === this.voiceToken && (s = !0, this.unschedule(n), t());
      },
      n = () => {
        o();
      };
    this.scheduleOnce(n, 8), this.stopCurrentVoice(), this.currentVoiceKey = e, __rea_outer_y.playEffect_1(e, o);
  }
  stopCurrentVoice() {
    __rea_outer_y.stopVoice(), this.currentVoiceKey && (__rea_outer_y.stopOneEffect(this.currentVoiceKey), this.currentVoiceKey = "");
  }
  getRoundConfig() {
    return R[this.currentRound - 1];
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
  clusterToCount(e, t) {
    const i = [...e].sort((e, t) => e - t),
      s = [];
    for (i.forEach(e => {
      const t = s[s.length - 1];
      t && Math.abs(e - t[t.length - 1]) < .01 ? t.push(e) : s.push([e]);
    }); s.length > t;) {
      let e = 0,
        t = Number.POSITIVE_INFINITY;
      for (let i = 0; i < s.length - 1; i += 1) {
        const o = s[i][s[i].length - 1],
          n = s[i + 1][0] - o;
        n < t && (t = n, e = i);
      }
      s[e] = s[e].concat(s[e + 1]), s.splice(e + 1, 1);
    }
    return s.map(e => e.reduce((e, t) => e + t, 0) / e.length);
  }
  findNearestIndex(e, t) {
    let i = 0,
      s = Number.POSITIVE_INFINITY;
    return e.forEach((e, o) => {
      const n = Math.abs(e - t);
      n < s && (s = n, i = o);
    }), i;
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
    R.forEach(t => {
      t.suspects.forEach(t => {
        e.add(t.barHeadPath), e.add(t.boardHeadPath);
      });
    }), e.forEach(e => {
      this.loadSpriteFrame(e, null);
    });
  }
  loadSpriteFrame(e, t) {
    const i = this.spriteFrameCache.get(e);
    if (i) return void (null == t || t(i));
    const s = __rea_outer_c.getBundle(O);
    if (!s) return console.warn(`[Level_49] missing bundle Level_49 for ${e}`), void (null == t || t(null));
    s.load(e, __rea_outer_u, (i, s) => {
      if (this.isValid) {
        if (i || !s) return console.warn(`[Level_49] failed to load ${e}`, i), void (null == t || t(null));
        this.spriteFrameCache.set(e, s), null == t || t(s);
      }
    });
  }
  tweenTreeOpacity(e, t, i, s) {
    if (null == e || !e.isValid) return;
    this.collectRenderNodes(e).forEach(e => {
      __rea_outer_x(e, t);
      const o = __rea_outer_k(e);
      __rea_outer_V(e), __rea_outer_p.stopAllByTarget(o), __rea_outer_N(o).to(s, {
        opacity: i
      }).start();
    });
  }
  setTreeOpacity(e, t) {
    null != e && e.isValid && this.collectRenderNodes(e).forEach(e => {
      __rea_outer_x(e, t);
    });
  }
  collectRenderNodes(e) {
    const t = [e];
    return e.children.forEach(e => {
      t.push(...this.collectRenderNodes(e));
    }), t;
  }
  stopTrackedTweens() {
    const e = [...this.sceneNodes, this.canNode, this.cannotNode, this.can1Node, this.cannot1Node, this.end2Node, this.policeNode, this.bubbleNode];
    this.people.forEach(t => {
      e.push(t.barNode, t.boardNode);
    }), e.forEach(e => {
      if (null != e && e.isValid) {
        __rea_outer_V(e);
        const t = e.getComponent(__rea_outer_m);
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
    var e, t, i, o, n, a, r, d, h, c, u, p;
    this.uiPanelNode = this.node.getChildByPath("UIPanel"), this.gameNode = this.node.getChildByPath("UIPanel/gameNode"), this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.bubbleNode = this.node.getChildByPath("UIPanel/bubble"), this.dialogBoxNode = (null == (e = this.bubbleNode) ? void 0 : e.getChildByName("dialog_box")) ?? null, this.dialogBox1Node = (null == (t = this.bubbleNode) ? void 0 : t.getChildByName("dialog_box_1")) ?? null, this.tipLabel = (null == (i = this.dialogBoxNode) || null == (i = i.getChildByName("Label")) ? void 0 : i.getComponent(__rea_outer_l)) ?? null, this.clickRootNode = this.node.getChildByPath("UIPanel/click_root"), this.demoNode = this.node.getChildByPath("UIPanel/demo");
    const N = this.gameNode;
    N && __rea_outer_A(N, 1080, 1920), this.policeNode = (null == N ? void 0 : N.getChildByName("police")) ?? null, this.canNode = (null == N ? void 0 : N.getChildByName("can")) ?? null, this.cannotNode = (null == N ? void 0 : N.getChildByName("cannot")) ?? null, this.can1Node = (null == N ? void 0 : N.getChildByName("can_1")) ?? null, this.cannot1Node = (null == N ? void 0 : N.getChildByName("cannot_1")) ?? null, this.end2Node = (null == N ? void 0 : N.getChildByName("end_2")) ?? null, this.levelLabel = (null == N || null == (o = N.getChildByName("Levellable")) ? void 0 : o.getComponent(__rea_outer_l)) ?? null, this.sceneNodes[0] = (null == N ? void 0 : N.getChildByName("1")) ?? null, this.sceneNodes[1] = (null == N ? void 0 : N.getChildByName("2")) ?? null, this.sceneNodes[2] = (null == N ? void 0 : N.getChildByName("3")) ?? null, this.touchPersonsNode = (null == N ? void 0 : N.getChildByName("touchpepsons")) ?? null, this.personTemplateNode = (null == (n = this.touchPersonsNode) ? void 0 : n.getChildByName("personnodedemo")) ?? null, this.submitButtonNode = (null == (a = this.clickRootNode) ? void 0 : a.getChildByName("ButtonSubmit")) ?? null, this.resetButtonNode = (null == (r = this.clickRootNode) ? void 0 : r.getChildByName("ButtonReset")) ?? null, this.infoButtonNode = (null == (d = this.clickRootNode) ? void 0 : d.getChildByName("infoButton")) ?? null, this.setNodeActive(this.infoButtonNode, !1), this.submitButton = (null == (h = this.submitButtonNode) ? void 0 : h.getComponent(__rea_outer_s)) ?? null, this.resetButton = (null == (c = this.resetButtonNode) ? void 0 : c.getComponent(__rea_outer_s)) ?? null, this.infoButton = (null == (u = this.infoButtonNode) ? void 0 : u.getComponent(__rea_outer_s)) ?? null, this.warnMissing("UIPanel/gameNode", this.gameNode), this.warnMissing("UIPanel/click_root", this.clickRootNode), this.warnMissing("UIPanel/gameNode/police", this.policeNode), this.warnMissing("UIPanel/bubble", this.bubbleNode), this.warnMissing("personnodedemo", this.personTemplateNode), this.warnMissing("ButtonSubmit", this.submitButtonNode), this.warnMissing("ButtonReset", this.resetButtonNode), this.warnMissing("infoButton", this.infoButtonNode), this.warnMissing("end_2", this.end2Node), this.warnMissing("Levellable", (null == (p = this.levelLabel) ? void 0 : p.node) ?? null), this.warnMissing("touchpepsons", this.touchPersonsNode), this.warnMissing("can_1", this.can1Node);
  }
  warnMissing(e, t) {
    t || console.warn(`[Level_49] missing ${e}`);
  }
  isPersonNodeHit(e, t) {
    return !!this.isPointInsideNode(e, t) || !(null == e || !e.isValid) && (this.isPointInsideNode(e.getChildByName("avatar_frame"), t) || this.isPointInsideNode(e.getChildByName("name_box"), t) || this.isPointInsideNode(e.getChildByName("infobox_1"), t));
  }
  isPointInsideNode(e, t) {
    if (null == e || !e.isValid || !e.activeInHierarchy) return !1;
    const i = e.getComponent(__rea_outer_h);
    return !!i && i.getBoundingBoxToWorld().contains(t);
  }
  getTouchWorldPoint(e) {
    const t = e.getUILocation();
    return new __rea_outer_v(t.x, t.y);
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
}) || S;
__rea_outer_t._RF.pop();
export { __recovered_export_0 as default };
