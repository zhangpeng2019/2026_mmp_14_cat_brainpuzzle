// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/funjoy-common.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_o } from "cc";
import { sendToNative as __rea_outer_i } from "./funjoy-bridge";
import { isAndroidNative as __rea_outer_t } from "./funjoy-bridge";
import { sendToNativeWithCallback as __rea_outer_u } from "./funjoy-bridge";
let __recovered_export_0, __recovered_export_1, __recovered_export_2;
(__recovered_export_0 = function () {
  __rea_outer_i("FunJoyCommon.init", "{}");
}, __recovered_export_1 = function (n, o) {
  if (!__rea_outer_t()) return void o(!1);
  __rea_outer_u("FunJoyCommon.isCountrys", {
    countries: n.countries,
    languages: n.languages
  }, o);
}, __recovered_export_2 = function (n) {
  __rea_outer_i("FunJoyCommon.setDebug", JSON.stringify({
    isDebug: n
  }));
}), __rea_outer_o._RF.push({}, "d27443EENpOY718vTwCbZFi", "funjoy-common", void 0);
__rea_outer_o._RF.pop();
export { __recovered_export_0 as init, __recovered_export_1 as isCountrys, __recovered_export_2 as setDebug };
