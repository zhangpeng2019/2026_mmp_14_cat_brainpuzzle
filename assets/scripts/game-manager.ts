// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/game-manager.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { EventTarget as __rea_outer_n } from "cc";
import { UIManager as __rea_outer_a } from "./ui-manager";
import { UILayer as __rea_outer_i } from "./ui-layer";
import { UILoading as __rea_outer_o } from "./ui-loading";
import { UILobby as __rea_outer_s } from "./uilobby";
import { UIGame as __rea_outer_r } from "./uigame";
import { UISuccess as __rea_outer_l } from "./uisuccess";
import { GameController as __rea_outer_c } from "./GameController";
import { LobbyController as __rea_outer_d } from "./LobbyController";
import { AudioManager as __rea_outer_g } from "./audio-manager";
import { GameDefine as __rea_outer_u } from "./game-define";
import { default as __rea_outer_L } from "./AudioManager";
import { DataManager as __rea_outer_h } from "./data-manager";
import { AdsController as __rea_outer_v } from "./ads-controller";
import "./index2";
import { default as __rea_outer_m } from "./LevelManager";
import { LevelResBundleManager as __rea_outer_S } from "./level-res-manager";
import { TAHelper as __rea_outer__ } from "./ta-helper";
let __recovered_export_0, __recovered_export_1;
let __recovered_export_2: { getInstance(): { onLeaveState(state: string): void; getCurrentState(): string; _currentState: string } };
__rea_outer_t._RF.push({}, "74783X2cQpCioKSKyyB/Y+n", "game-manager", void 0);
let I = __recovered_export_0 = function (e) {
    return e.NONE = "none", e.LOADING = "loading", e.LOBBY = "lobby", e.GAME_MODE = "game-mode", e;
  }({}),
  M = __recovered_export_1 = function (e) {
    return e.STATE_CHANGED = "game-state-changed", e.SCENE_LOADED = "scene-loaded", e.LEVEL_COMPLETE = "level-complete", e.GAME_OVER = "game-over", e;
  }({});
class G {
  constructor() {
    this._currentState = I.NONE, this._previousState = I.NONE, this._isInitialized = !1, this._eventTarget = new __rea_outer_n(), this._currentLevelConfig = null, this._currentLevel = 1, this._pendingRewardConfigB = null, this._dailyLaunchContext = null, this._quickWin = !1, this._pendingLevelStartInType = "Home", this._isLevelLoadTimedOut = !1;
  }
  static getInstance() {
    return G._instance || (G._instance = new G()), G._instance;
  }
  getCurrentState() {
    return this._currentState;
  }
  getPreviousState() {
    return this._previousState;
  }
  setResLoadState(e) {
    console.log("[GameManager] setResLoadState: ", e);
  }
  isInitialized() {
    return this._isInitialized;
  }
  isQuickWin() {
    return this._quickWin;
  }
  setQuickWin(e) {
    this._quickWin = e;
  }
  initialize() {
    this._isInitialized ? console.warn("[GameManager] Already initialized, skipping") : (this._isInitialized = !0, this._eventTarget.on(M.LEVEL_COMPLETE, this.onLevelComplete, this), console.log("[GameManager] Game manager initialized"));
  }
  onLevelComplete() {
    __rea_outer_c.getInstance().pauseTimer(), __rea_outer_a.getInstance().showView(__rea_outer_l, __rea_outer_i.WIN_ANIMATION);
  }
  enterLoading() {
    this._currentState !== I.LOADING ? this.switchState(I.LOADING) : console.warn("[GameManager] Already in loading state");
  }
  enterLobby(e) {
    this.enterLobbyAsync(e);
  }
  async enterLobbyAsync(e) {
    if (this._currentState === I.LOBBY) return void console.warn("[GameManager] Already in lobby state");
    this._pendingRewardConfigB = e ?? null;
    const t = this._currentState;
    t !== I.LOADING && (this._previousState = t), this.onLeaveState(t), this._currentState = I.LOBBY, await this.onEnterLobby(), this._eventTarget.emit(M.STATE_CHANGED, {
      oldState: t,
      newState: I.LOBBY
    }), console.log(`[GameManager] State switched: ${t} -> ${I.LOBBY}`);
  }
  async enterGameModeForSelectedLevel(e = "Home") {
    if (this._pendingLevelStartInType = e, this._currentState === I.GAME_MODE) return await this.reloadSelectedLevelInGameMode();
    const t = this._currentState;
    t !== I.LOADING && (this._previousState = t), this.onLeaveState(t), this._currentState = I.GAME_MODE;
    let n = !1;
    try {
      n = await this.setupGameModeView();
    } catch (e) {
      console.error("[GameManager] setupGameModeView threw", e), n = !1;
    }
    return n ? (this._eventTarget.emit(M.STATE_CHANGED, {
      oldState: t,
      newState: I.GAME_MODE
    }), console.log(`[GameManager] State switched: ${t} -> ${I.GAME_MODE}`), !0) : (await this.rollbackToLobbyAfterFailedLevelLoad(), !1);
  }
  enterGameMode() {
    this.enterGameModeForSelectedLevel();
  }
  setDailyLaunchContext(e, t, n) {
    this._dailyLaunchContext = {
      year: e,
      month: t,
      day: n
    };
  }
  clearDailyLaunchContext() {
    this._dailyLaunchContext = null;
  }
  getDailyLaunchContext() {
    return this._dailyLaunchContext;
  }
  isDailyLaunch() {
    return null !== this._dailyLaunchContext;
  }
  returnToPreviousState() {
    if (this._previousState === I.LOADING) return console.warn("[GameManager] No previous state, entering lobby"), void this.enterLobby();
    this.switchState(this._previousState);
  }
  switchState(e) {
    if (e === this._currentState) return;
    const t = this._currentState;
    t !== I.LOADING && (this._previousState = t), this.onLeaveState(t), this._currentState = e, this.onEnterState(e), this._eventTarget.emit(M.STATE_CHANGED, {
      oldState: t,
      newState: e
    }), console.log(`[GameManager] State switched: ${t} -> ${e}`);
  }
  onEnterState(e) {
    switch (e) {
      case I.LOADING:
        this.onEnterLoading();
        break;
      case I.LOBBY:
        this.onEnterLobby();
        break;
      case I.GAME_MODE:
        this.onEnterGameMode();
    }
  }
  onLeaveState(e) {
    switch (e) {
      case I.LOADING:
        this.onLeaveLoading();
        break;
      case I.LOBBY:
        this.onLeaveLobby();
        break;
      case I.GAME_MODE:
        this.onLeaveGameMode();
    }
  }
  onEnterLoading() {
    console.log("[GameManager] Entering loading state");
  }
  onLeaveLoading() {
    console.log("[GameManager] Leaving loading state"), __rea_outer_a.getInstance().hideView(__rea_outer_o);
  }
  async onEnterLobby() {
    console.log("[GameManager] Entering lobby state"), __rea_outer_v.getInstance().hideBanner();
    const e = await __rea_outer_a.getInstance().showView(__rea_outer_s, __rea_outer_i.LOBBY);
    if (!e) return void console.warn("[GameManager] onEnterLobby: UILobby is null");
    await e.prepareForDisplay();
    const t = __rea_outer_d.getInstance();
    t ? t.onEnter(e) : (e.refresh(), __rea_outer_g.getInstance().playMusic(__rea_outer_u.SOUNDS.BGM1));
  }
  onLeaveLobby() {
    console.log("[GameManager] Leaving lobby state");
    const e = __rea_outer_d.getInstance();
    e ? e.onLeave() : __rea_outer_g.getInstance().stopMusic(), __rea_outer_a.getInstance().hideView(__rea_outer_s);
  }
  onEnterGameMode() {
    this.setupGameModeView();
  }
  async setupGameModeView() {
    console.log("[GameManager] Entering game mode state"), __rea_outer_a.getInstance().hideView(__rea_outer_s);
    const e = __rea_outer_h.getInstance().getSelectedLevelId(),
      t = __rea_outer_m.getInstance().needsLevelResourceDownload(e);
    await __rea_outer_c.getInstance().showLevelLoadingState(t);
    const n = await __rea_outer_a.getInstance().showView(__rea_outer_r, __rea_outer_i.GAME, void 0, !1);
    return n ? (__rea_outer_c.getInstance().bindView(n), await this.loadAndMountSelectedLevel()) : (console.warn("[GameManager] setupGameModeView: UIGame is null"), __rea_outer_c.getInstance().hideLevelLoadingState(!1), !1);
  }
  async reloadSelectedLevelInGameMode() {
    console.log("[GameManager] Reloading selected level in game mode");
    const e = await this.loadAndMountSelectedLevel();
    return e || (console.error("[GameManager] Failed to reload level in game mode"), await this.rollbackToLobbyAfterFailedLevelLoad()), e;
  }
  async loadAndMountSelectedLevel() {
    const e = __rea_outer_h.getInstance().getSelectedLevelId(),
      t = __rea_outer__.getInstance(),
      n = __rea_outer_m.getInstance().isLevelResourceWarm(e),
      a = __rea_outer_m.getInstance().needsLevelResourceDownload(e),
      i = Date.now(),
      o = () => ({
        isWarm: n,
        costMs: Date.now() - i
      });
    t.trackLevelLoad("start", e), await __rea_outer_c.getInstance().showLevelLoadingState(a);
    const s = await this.loadSelectedLevelWithTimeout(a);
    if (this._isLevelLoadTimedOut) return console.error("[GameManager] Level load timed out", e), t.trackLevelLoad("error", e, "load too long time", o()), __rea_outer_c.getInstance().showLevelResourceDownloadFailedTip(a), !1;
    if (!s) {
      const n = __rea_outer_S.getInstance().getLastLoadError() || "Failed to load level";
      return console.error("[GameManager] Failed to load level", n), t.trackLevelLoad("error", e, n, o()), __rea_outer_c.getInstance().showLevelResourceDownloadFailedTip(a), __rea_outer_c.getInstance().hideLevelLoadingState(!1), !1;
    }
    const r = o();
    return __rea_outer_c.getInstance().mountLevelOnGameLayer(), __rea_outer_c.getInstance().hideLevelLoadingState(), __rea_outer_c.getInstance().updateView(), t.trackLevelLoad("end", e, "", r), console.log(`[GameManager] Level ${e} loaded in ${r.costMs}ms (warm: ${r.isWarm})`), this.trackLevelStartAfterLoad(), !0;
  }
  loadSelectedLevelWithTimeout(e) {
    this._isLevelLoadTimedOut = !1;
    let t = null;
    const n = __rea_outer_m.getInstance().loadAloneLevel(t => {
      this._isLevelLoadTimedOut || __rea_outer_c.getInstance().setLevelLoadProgress(t, e);
    });
    n.then(e => {
      this._isLevelLoadTimedOut && e && (console.warn("[GameManager] Level load finished after timeout, discarding result"), __rea_outer_m.getInstance().hideLevel(), __rea_outer_m.getInstance().releaseCurrentLevelBundle());
    });
    const a = new Promise(e => {
      t = setTimeout(() => {
        this._isLevelLoadTimedOut = !0, e(!1);
      }, 6e4);
    });
    return Promise.race([n, a]).then(e => (null !== t && clearTimeout(t), e));
  }
  trackLevelStartAfterLoad() {
    const e = __rea_outer_h.getInstance(),
      t = e.getSelectedLevelId(),
      n = e.incrementAndGetLevelStartCount(t);
    __rea_outer__.getInstance().trackLevelStart(t, this._pendingLevelStartInType, n);
  }
  async rollbackToLobbyAfterFailedLevelLoad() {
    __rea_outer_c.getInstance().unbind(), __rea_outer_c.getInstance().hideLevelLoadingState(!1), __rea_outer_a.getInstance().hideView(__rea_outer_r), __rea_outer_m.getInstance().hideLevel(), __rea_outer_m.getInstance().releaseCurrentLevelBundle(), __rea_outer_m.getInstance().restoreBackgroundPreloadPolicy(), this._currentState = I.LOBBY, await this.onEnterLobby(), this._eventTarget.emit(M.STATE_CHANGED, {
      oldState: I.GAME_MODE,
      newState: I.LOBBY
    }), console.log("[GameManager] Level load failed, returned to lobby");
  }
  onLeaveGameMode() {
    console.log("[GameManager] Leaving game mode state"), __rea_outer_L.stopMusic(), __rea_outer_L.stopLevelAudio(), __rea_outer_c.getInstance().unbind(), __rea_outer_c.getInstance().hideLevelLoadingState(!1), __rea_outer_a.getInstance().hideView(__rea_outer_r), __rea_outer_m.getInstance().hideLevel(), __rea_outer_m.getInstance().retireCurrentLevelToCache(), __rea_outer_m.getInstance().restoreBackgroundPreloadPolicy();
  }
  isInState(e) {
    return this._currentState === e;
  }
  isInGameMode() {
    return this._currentState === I.GAME_MODE;
  }
  changeState(e) {
    switch (e) {
      case I.LOADING:
        this.enterLoading();
        break;
      case I.LOBBY:
        this.enterLobby();
        break;
      case I.GAME_MODE:
        this.enterGameMode();
        break;
      default:
        console.warn(`[GameManager] Invalid state: ${e}`);
    }
  }
  switchScene(e) {
    console.log(`[GameManager] Scene loaded: ${e}`);
  }
  getEventTarget() {
    return this._eventTarget;
  }
  getCurrentLevelConfig() {
    return this._currentLevelConfig;
  }
  getCurrentLevel() {
    return this._currentLevel;
  }
  cleanup() {
    this._eventTarget = new __rea_outer_n(), this._isInitialized = !1, this._currentLevelConfig = null, this._currentLevel = 1, this._dailyLaunchContext = null;
  }
}
__recovered_export_2 = G, G._instance = null, __rea_outer_t._RF.pop();
export { __recovered_export_0 as GameState, __recovered_export_1 as GameEvent, __recovered_export_2 as GameManager };
