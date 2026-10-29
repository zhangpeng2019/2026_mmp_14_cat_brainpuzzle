// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/GameResManager.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { _decorator as __rea_outer_n } from "cc";
import { game as __rea_outer_a } from "cc";
import { Game as __rea_outer_s } from "cc";
import { GameEntry as __rea_outer_o } from "./game-entry";
import { GameManager as __rea_outer_c } from "./game-manager";
export { ResLoadState as ResLoadState } from "./ResLoadState";
import "./ResLoadState";
import { getCanvasNode as __rea_outer_i } from "./CocosCompat";
let __recovered_export_0;
var r, m;
__rea_outer_t._RF.push({}, "c40bbpeND5FdYDBvgxugqMx", "GameResManager", void 0);
const {
  ccclass: u
} = __rea_outer_n;
__recovered_export_0 = u("GameResManager")(((m = class e extends __rea_outer_o {
  static getInstance() {
    if (null == e.m_instance) {
      const t = __rea_outer_i();
      e.m_instance = t.getComponent(e) ?? null;
    }
    if (!e.m_instance) throw new Error("GameResManager instance not found on Canvas");
    return e.m_instance;
  }
  get resLoadState() {
    return __rea_outer_c.getInstance().resLoadState;
  }
  onLoad() {
    e.m_instance = this, super.onLoad();
  }
  start() {
    __rea_outer_a.on(__rea_outer_s.EVENT_HIDE, this.handleGameHide, this), __rea_outer_a.on(__rea_outer_s.EVENT_SHOW, this.handleGameShow, this);
  }
  onDestroy() {
    __rea_outer_a.off(__rea_outer_s.EVENT_HIDE, this.handleGameHide, this), __rea_outer_a.off(__rea_outer_s.EVENT_SHOW, this.handleGameShow, this);
  }
}).m_instance = null, r = m)) || r;
__rea_outer_t._RF.pop();
export { __recovered_export_0 as default };
