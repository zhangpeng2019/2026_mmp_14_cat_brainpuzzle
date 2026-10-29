// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/funjoy-firebase.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_n } from "cc";
import { sendToNative as __rea_outer_i } from "./funjoy-bridge";
let __recovered_export_0, __recovered_export_1, __recovered_export_2, __recovered_export_3, __recovered_export_4;
(__recovered_export_0 = function () {
  __rea_outer_i("FunJoyFirebase.init", "{}");
}, __recovered_export_1 = function (e) {
  __rea_outer_i("FunJoyFirebase.logEvent", JSON.stringify({
    eventName: e
  }));
}, __recovered_export_2 = function (e, n) {
  __rea_outer_i("FunJoyFirebase.logEvent", JSON.stringify({
    eventName: e,
    params: n
  }));
}, __recovered_export_3 = function (e, n) {
  __rea_outer_i("FunJoyFirebase.logException", JSON.stringify({
    userId: e,
    stackTrace: n
  }));
}, __recovered_export_4 = function (e) {
  __rea_outer_i("FunJoyFirebase.setDebug", JSON.stringify({
    isDebug: e
  }));
}), __rea_outer_n._RF.push({}, "f2b5fTIdPZEYbdZT/qmVFAi", "funjoy-firebase", void 0);
__rea_outer_n._RF.pop();
export { __recovered_export_0 as init, __recovered_export_1 as logEvent, __recovered_export_2 as logEventWithParams, __recovered_export_3 as logException, __recovered_export_4 as setDebug };
