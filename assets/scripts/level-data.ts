// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/level-data.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { UserGroupType as __rea_outer_u } from "./user-data";
let __recovered_export_0, __recovered_export_1, __recovered_export_2, __recovered_export_3;
(__recovered_export_0 = function (e) {
  return e.map((e, t) => ({
    id: t + 1,
    cellids: e.split("#").map(e => Number(e.trim())).filter(e => !Number.isNaN(e)),
    doneStatus: !1
  }));
}, __recovered_export_1 = function (e, t) {
  if (t === __rea_outer_u.Buy) return e >= 301 && e <= 305;
  return e >= 1 && e <= 5;
}, __recovered_export_2 = function (e) {
  if (!Number.isFinite(e) || e < 1) return 1;
  return Math.floor((e - 1) / 60) + 1;
}, __recovered_export_3 = function (e, t) {
  return t === __rea_outer_u.Buy ? e.buy : e.picture;
}), __rea_outer_t._RF.push({}, "134e6FFnapDnZfFwkk0ck3y", "level-data", void 0);
__rea_outer_t._RF.pop();
export { __recovered_export_0 as convertPtsToCellInfos, __recovered_export_1 as isBuiltInLevelBundlePictureId, __recovered_export_2 as resolveAlbumThumbBundleIndex, __recovered_export_3 as resolveLevelBundlePictureId };
