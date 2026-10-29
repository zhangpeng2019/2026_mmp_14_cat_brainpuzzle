// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/funjoy-bridge.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_n } from "cc";
import { sys as __rea_outer_r } from "cc";
import { native as __rea_outer_t } from "cc";
import { FUNJOY_ANDROID_SDK_ENABLED as __rea_outer_o } from "./funjoy-config";
let __recovered_export_0, __recovered_export_1, __recovered_export_2, __recovered_export_3, __recovered_export_4, __recovered_export_5, __recovered_export_6, __recovered_export_7, __recovered_export_8;
(__recovered_export_0 = l, __recovered_export_1 = s, __recovered_export_2 = c, __recovered_export_3 = function () {
  return __rea_outer_o;
}, __recovered_export_4 = u, __recovered_export_5 = function (e) {
  try {
    const n = JSON.parse(e),
      r = null == n ? void 0 : n.requestId;
    if (!r) return !1;
    const t = a.get(r);
    if (!t) return !1;
    a.delete(r);
    try {
      t(n.result);
    } catch (e) {
      console.error("[FunJoyBridge] resolveCallback: callback threw", e);
    }
    return !0;
  } catch (e) {
    return console.error("[FunJoyBridge] resolveCallback parse error", e), !1;
  }
}, __recovered_export_6 = d, __recovered_export_7 = function (e, n, r) {
  const t = l(),
    o = {
      ...n,
      requestId: t
    };
  u(t, r), d(e, JSON.stringify(o));
}, __recovered_export_8 = function (e) {
  if (!s()) return void console.log(`${i} setOnNativeHandler: Mock mode, handler not registered`);
  try {
    __rea_outer_t.bridge.onNative = e;
  } catch (e) {
    console.error("[FunJoyBridge] setOnNativeHandler failed", e);
  }
}), __rea_outer_n._RF.push({}, "2be080Wc8JN9Z3aclYO4lM+", "funjoy-bridge", void 0);
const i = "[FunJoyBridge Mock]";
function c() {
  return __rea_outer_r.platform === __rea_outer_r.Platform.ANDROID && __rea_outer_r.isNative;
}
!function () {
  try {
    c() && __rea_outer_o && null != __rea_outer_t && __rea_outer_t.bridge && (__rea_outer_t.bridge.onNative = (e, n) => {});
  } catch {}
}();
const a = new Map();
function s() {
  return c() && __rea_outer_o;
}
function l() {
  return `req_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
}
function u(e, n) {
  a.set(e, n);
}
function d(e, n = "{}") {
  if (s()) try {
    __rea_outer_t.bridge.sendToNative(e, n);
  } catch (n) {
    console.error(`[FunJoyBridge] sendToNative failed: ${e}`, n);
  } else console.log(`${i} sendToNative: ${e} params: ${n}`);
}
__rea_outer_n._RF.pop();
export { __recovered_export_0 as generateRequestId, __recovered_export_1 as isAndroidNative, __recovered_export_2 as isAndroidPlatform, __recovered_export_3 as isFunJoyAndroidSdkEnabled, __recovered_export_4 as registerCallback, __recovered_export_5 as resolveCallback, __recovered_export_6 as sendToNative, __recovered_export_7 as sendToNativeWithCallback, __recovered_export_8 as setOnNativeHandler };
