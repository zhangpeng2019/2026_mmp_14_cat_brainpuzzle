// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/app.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { view as __rea_outer_n } from "cc";
import { PlatformService as __rea_outer_e } from "./PlatformService";
import { default as __rea_outer_a } from "./BaseData";
import { default as __rea_outer_l } from "./GameUtils2";
import { default as __rea_outer_s } from "./LevelManager";
import { DataManager as __rea_outer_o } from "./data-manager";
import { GameManager as __rea_outer_c } from "./game-manager";
import { AudioManager as __rea_outer_r } from "./audio-manager";
import { AdsController as __rea_outer_u } from "./ads-controller";
import { initializePrefabRegistry as __rea_outer_g } from "./prefab-registry-init";
import { init as __rea_outer_f } from "./funjoy-lib";
import "./index2";
import { TAHelper as __rea_outer_d } from "./ta-helper";
let __recovered_export_0;
__rea_outer_t._RF.push({}, "811dcyMOTVJfrscrBE35TnW", "app", void 0);
class p {
  static async initialize(i) {
    if (this._isInitialized) console.warn("[App] Already initialized");else try {
      console.log("[App] Starting initialization..."), null == i || i(.05, "Loading config..."), __rea_outer_g(), __rea_outer_a.InitData(), null == i || i(.1, "Initializing platform..."), __rea_outer_e.getInstance().initialize(), null == i || i(.2, "Initializing data..."), __rea_outer_o.getInstance().initialize(), null == i || i(.25, "Initializing FunJoy SDK..."), __rea_outer_f({
        isDebug: !1
      }), __rea_outer_u.getInstance().initialize(), await __rea_outer_d.getInstance().init(), null == i || i(.3, "Initializing level data...");
      const t = __rea_outer_n.getVisibleSize().height - 280;
      let p = 2 * Math.floor(t / 330);
      p = 6, __rea_outer_s.getInstance().ModeLevelData_Init(p), null == i || i(.4, "Initializing game state..."), __rea_outer_l.isStopMusic = !1, __rea_outer_l.isStopSound = !1, __rea_outer_l.isFirstInGame = !0, __rea_outer_l.currentPageNum = 0, __rea_outer_l.ComeLevelPageNum = 0, __rea_outer_r.getInstance().initialize(), __rea_outer_c.getInstance().initialize(), this._isInitialized = !0, null == i || i(.5, "Managers initialized"), console.log("[App] Initialization complete");
    } catch (i) {
      throw console.error("[App] Failed to initialize", i), i;
    }
  }
  static isInitialized() {
    return this._isInitialized;
  }
}
__recovered_export_0 = p, p._isInitialized = !1, __rea_outer_t._RF.pop();
export { __recovered_export_0 as App };
