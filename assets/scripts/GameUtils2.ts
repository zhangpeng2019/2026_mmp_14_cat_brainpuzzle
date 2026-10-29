// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/GameUtils2.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { game as __rea_outer_t } from "cc";
import { cclegacy as __rea_outer_o } from "cc";
let __recovered_export_0;
__rea_outer_o._RF.push({}, "09a5e6KjCxAp4WHSqMmU/tV", "GameUtils", void 0);
class n {
  constructor() {}
  static onHide() {
    __rea_outer_t.on(__rea_outer_t.EVENT_HIDE, function () {
      console.log("The game goes to the background.");
    }, this), __rea_outer_t.on(__rea_outer_t.EVENT_SHOW, function () {
      console.log("Return to the game.");
    }, this);
  }
}
__recovered_export_0 = n, n.isDebug = !0, n.isStopMusic = !1, n.isStopSound = !1, n.isFirstInGame = !0, n.isStopGame = !1, n.isCanRecordCountTime = !1, n.getPowerTime = 300, n.isCountIng = !1, n.selectModelIndex = 0, n.SelectLevelKey = 1, n.LockLevelKeyArr = [], n.ComeLevelPageNum = 0, n.closeLevelKey = 1, n.isSuc = !1, n.End_type = 0, n.playSound_Pre = "", n.touchGeCiIndex = -1, n.touchGeCiPosIndex = -1, n.touchGeCiEndPos = null, n.hasMatchSucArr = [], n.isCanClickPlay = !0, n.isCanInstall = !1, n.isCanTouchDrag = !0, n.isCanMoveRole_45 = !1, n.currentGrowStage = 0, n.currentPageNum = 0, n.UnLockLevel_Type = 0, __rea_outer_o._RF.pop();
export { __recovered_export_0 as default };
