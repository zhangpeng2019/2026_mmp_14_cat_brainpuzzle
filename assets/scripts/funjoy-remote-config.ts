// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/funjoy-remote-config.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_e } from "cc";
import { sendToNative as __rea_outer_o } from "./funjoy-bridge";
let __recovered_export_0, __recovered_export_1, __recovered_export_2, __recovered_export_3, __recovered_export_4;
(__recovered_export_0 = function () {
  return {
    ...u,
    ...i
  };
}, __recovered_export_1 = function (n) {
  return i[n] ?? u[n];
}, __recovered_export_2 = function () {
  __rea_outer_o(`${t}.getRemoteJsonConfig`, "{}");
}, __recovered_export_3 = function () {
  __rea_outer_o(`${t}.init`, "{}");
}, __recovered_export_4 = function (n, e) {
  try {
    const o = JSON.parse(n);
    e ? u = o : i = o;
  } catch (n) {
    console.error("[FunJoyRemoteConfig] updateConfig parse error", n);
  }
}), __rea_outer_e._RF.push({}, "14bebV2uJ5HELSZFN5JTGjq", "funjoy-remote-config", void 0);
const t = "FunJoyRemoteConfig";
let i = {},
  u = {};
__rea_outer_e._RF.pop();
export { __recovered_export_0 as getConfig, __recovered_export_1 as getConfigValue, __recovered_export_2 as getRemoteJsonConfig, __recovered_export_3 as init, __recovered_export_4 as updateConfig };
