// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/loading-controller.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { Component as __rea_outer_a } from "cc";
import { assetManager as __rea_outer_o } from "cc";
import { _decorator as __rea_outer_n } from "cc";
import { App as __rea_outer_r } from "./app";
import { GameManager as __rea_outer_i } from "./game-manager";
import { GameState as __rea_outer_s } from "./game-manager";
import { default as __rea_outer_d } from "./BaseData";
import { DataManager as __rea_outer_l } from "./data-manager";
import { ResLoadState as __rea_outer_u } from "./ResLoadState";
import { default as __rea_outer_g } from "./PlatForm";
import { default as __rea_outer_c } from "./PlatFormData";
import { default as __rea_outer_m } from "./LevelManager";
import { ResourceManager as __rea_outer_p } from "./resource-manager";
import { I18nController as __rea_outer_L } from "./i18n-controller";
import { UILoading as __rea_outer_h } from "./ui-loading";
import { UIManager as __rea_outer_f } from "./ui-manager";
import { UIUnlockLevel as __rea_outer_y } from "./uiunlocklevel";
import { waitForMaxCountryCode as __rea_outer_v } from "./funjoy-max";
import { startNativeAdPreload as __rea_outer__ } from "./funjoy-max";
import { getAttributionJson as __rea_outer_b } from "./funjoy-adjust";
import { isAndroidNative as __rea_outer_w } from "./funjoy-bridge";
import { logLoading as __rea_outer_I } from "./funjoy-utils";
import "./index2";
import { TAHelper as __rea_outer_C } from "./ta-helper";
let __recovered_export_0;
var A;
__rea_outer_t._RF.push({}, "548d7VOrshAu5pr0tEyTtNw", "loading-controller", void 0);
const P = "resources",
  {
    ccclass: M
  } = __rea_outer_n;
__recovered_export_0 = M("LoadingController")(A = class extends __rea_outer_a {
  constructor(...e) {
    super(...e), this._uiLoading = null, this._gameManager = __rea_outer_i.getInstance(), this._backgroundNode = null;
  }
  onLoad() {
    this._uiLoading = this.node.getComponent(__rea_outer_h) ?? this.node.addComponent(__rea_outer_h), this._backgroundNode = this.node.getChildByName("general_bg"), this._gameManager.isInState(__rea_outer_s.LOADING) || this._gameManager.enterLoading();
  }
  start() {
    this.startLoading();
  }
  async startLoading() {
    try {
      __rea_outer_I("start"), this.updateProgress(0, "Initializing..."), await this.loadManagers(), __rea_outer_I("managers done"), this.updateProgress(.55, "Preloading..."), await this.loadInitResources(), __rea_outer_I("init resources done"), this.updateProgress(.75, "Entering game..."), await this.onInitLoadComplete(), __rea_outer_I("init load complete"), this.updateProgress(.85, "Loading extras..."), this.loadBaseResourcesInBackground(), this.updateProgress(1, "Complete!"), __rea_outer_I("progress 100, enter complete"), await this.onLoadingComplete();
    } catch (e) {
      __rea_outer_I(`failed ${e instanceof Error ? e.message : String(e)}`), console.error("[LoadingController] Loading failed", e), this.onLoadingError(e);
    }
  }
  async loadManagers() {
    this.updateProgress(.02, "Loading i18n..."), await __rea_outer_L.getInstance().initialize();
    await __rea_outer_r.initialize((e, t) => {
      this.updateProgress(e, t);
    });
  }
  async loadInitResources() {
    console.time("[LoadingController] lobby preload");
    const e = __rea_outer_p.getInstance();
    e.isBundleLoaded(P) || (await e.loadBundle(P)), await Promise.all([e.loadPrefab(P, "prefabs/Lobby"), e.loadPrefab(P, "prefabs/LobbyLevelItem"), __rea_outer_f.getInstance().preloadView(__rea_outer_y), __rea_outer_m.getInstance().loadLevelIconAtlas()]), console.timeEnd("[LoadingController] lobby preload");
  }
  async onInitLoadComplete() {
    this._gameManager.setResLoadState(__rea_outer_u.LoadingInit);
  }
  async loadBaseResourcesInBackground() {
    this._gameManager.setResLoadState(__rea_outer_u.LoadingBaseRes);
    try {
      var e;
      console.time("[LoadingController] base bundles"), await __rea_outer_m.getInstance().preloadBuiltinStartupLevels(), __rea_outer_m.getInstance().preloadNearbyLevelBundles(), console.timeEnd("[LoadingController] base bundles"), this._gameManager.setResLoadState(__rea_outer_u.BaseResLoadCompleted), null != (e = this._backgroundNode) && e.isValid && this._backgroundNode.destroy();
    } catch (e) {
      console.error("[LoadingController] Background base resource load failed", e);
    }
  }
  loadPagesAndDialogs(e) {
    return new Promise(t => {
      null != e || t();
    });
  }
  loadBundle(e) {
    return new Promise(t => {
      __rea_outer_o.loadBundle(e, (a, o) => {
        if (a) return console.error("[LoadingController] loadBundle failed:", e, a.message), void t(null);
        t(o);
      });
    });
  }
  updateProgress(e, t) {
    if (__rea_outer_I(`progress ${Math.round(100 * e)} ${t ?? ""}`), this._uiLoading && (this._uiLoading.setProgress(e), t)) {
      const a = (100 * e).toFixed(0);
      this._uiLoading.setTips(`${t} (${a}%)`);
    }
  }
  async onLoadingComplete() {
    __rea_outer_I("onLoadingComplete enter"), __rea_outer_g.getInstance().ReportAnalytics("enter_window", {
      window_name: "Entering the game for the first time"
    }), __rea_outer_g.getInstance().ReportAnalytics("enter_window_id", {
      window_id: __rea_outer_c.PlatData_MaiDian.第一次进入游戏界面
    });
    const e = await __rea_outer_v();
    __rea_outer_I(`country ready code=${e || "empty"}`);
    const t = __rea_outer_l.getInstance();
    __rea_outer_d.applyRegionLevelOrder(t.getMaxCountryCode()), await this.waitForAdGroupName(t), t.applyStoredAdGroupLevelOrder(), t.syncLevelIndexWithCurrentOrder(), __rea_outer_C.getInstance().trackStartLogin();
    const a = t.shouldAutoEnterTutorialLevel();
    if (__rea_outer_I(`enter scene tutorial=${a}`), a) {
      t.markAutoEnteredTutorialLevel(), t.SetSelectedLevelId(__rea_outer_d.initalLevel[0]);
      const e = await this._gameManager.enterGameModeForSelectedLevel("Home");
      __rea_outer_I(`tutorial entered=${e}`), e || (await this._gameManager.enterLobbyAsync(), __rea_outer_I("lobby entered after tutorial miss"));
    } else await this._gameManager.enterLobbyAsync(), __rea_outer_I("lobby entered");
    this.node.isValid && (this.node.active = !1), __rea_outer_I("loading hidden, start native preload"), __rea_outer__();
  }
  waitForAdGroupName(e) {
    var t;
    const a = ((null == (t = e.getUserData()) ? void 0 : t.ad_group_name) ?? "").trim();
    return __rea_outer_I(`waitAdGroup cached=${a || "empty"} native=${__rea_outer_w()}`), a.length > 0 || !__rea_outer_w() ? Promise.resolve() : new Promise(t => {
      let a = !1;
      const o = Date.now(),
        n = n => {
          var r;
          if (a) return;
          a = !0;
          const i = ((null == (r = e.getUserData()) ? void 0 : r.ad_group_name) ?? "").trim();
          __rea_outer_I(`waitAdGroup done reason=${n} name=${i || "empty"} elapsed=${Date.now() - o}`), t();
        };
      setTimeout(() => n("timeout"), 3e3);
      const r = () => {
        var t;
        a || (((null == (t = e.getUserData()) ? void 0 : t.ad_group_name) ?? "").trim().length > 0 ? n("saved") : Date.now() - o >= 3e3 ? n("timeout-poll") : setTimeout(r, 200));
      };
      __rea_outer_b(t => {
        if (a) return e.captureAdGroupNameFromAttributionJson(t), void e.applyStoredAdGroupLevelOrder();
        e.captureAdGroupNameFromAttributionJson(t) && n("native");
      }), r();
    });
  }
  onLoadingError(e) {
    console.error("[LoadingController] Loading error:", e), this._uiLoading && this._uiLoading.setTips("Loading failed. Please retry.");
  }
}) || A;
__rea_outer_t._RF.pop();
export { __recovered_export_0 as LoadingController };
