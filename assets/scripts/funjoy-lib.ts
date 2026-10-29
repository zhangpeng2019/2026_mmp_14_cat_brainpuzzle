// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/funjoy-lib.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { director as __rea_outer_n } from "cc";
import { Director as __rea_outer_o } from "cc";
import { native as __rea_outer_i } from "cc";
import { isAndroidPlatform as __rea_outer_r } from "./funjoy-bridge";
import { isFunJoyAndroidSdkEnabled as __rea_outer_u } from "./funjoy-bridge";
import { setOnNativeHandler as __rea_outer_s } from "./funjoy-bridge";
import { resolveCallback as __rea_outer_a } from "./funjoy-bridge";
export { FUNJOY_ANDROID_SDK_ENABLED as FUNJOY_ANDROID_SDK_ENABLED } from "./funjoy-config";
import "./funjoy-config";
import { setDebug as __rea_outer_c } from "./funjoy-firebase";
import { logEventWithParams as __rea_outer_l } from "./funjoy-firebase";
import { logEvent as __rea_outer_f } from "./funjoy-firebase";
import { setDebug as __rea_outer_g } from "./funjoy-max";
import { setLogDebug as __rea_outer_d } from "./funjoy-ta";
import { setLogDebug as __rea_outer_y } from "./funjoy-facebook";
import { setDebug as __rea_outer_F } from "./funjoy-common";
import { updateConfig as __rea_outer_p } from "./funjoy-remote-config";
import { markScriptBridgeReady as __rea_outer_D } from "./funjoy-utils";
import { markScriptBridgeSuspended as __rea_outer_A } from "./funjoy-utils";
import "./index2";
import { TAHelper as __rea_outer_b } from "./ta-helper";
let __recovered_export_0, __recovered_export_1, __recovered_export_2, __recovered_export_3, __recovered_export_4, __recovered_export_5, __recovered_export_6, __recovered_export_7, __recovered_export_8, __recovered_export_9, __recovered_export_10, __recovered_export_11, __recovered_export_12, __recovered_export_13;
(__recovered_export_6 = function (e) {
  L.indexOf(e) < 0 && L.push(e);
}, __recovered_export_7 = function (e = {}) {
  const {
    isDebug: t = !1
  } = e;
  if (__rea_outer_r() && !__rea_outer_u()) return void console.log("[FunJoyLib] Android SDK disabled (FUNJOY_ANDROID_SDK_ENABLED=false), skipping native bridge");
  S = (e, t) => {
    !function (e, t) {
      try {
        const n = t ?? "{}";
        if (h.indexOf(e) >= 0 && __rea_outer_a(n)) return;
        if ("AdsDelegate" === e) return console.log("[FunJoyLib] AdsDelegate:", n), void function (e) {
          try {
            const t = JSON.parse(e);
            L.forEach(e => e(t)), null == j || j(t);
          } catch (e) {
            console.error("[FunJoyLib] AdsDelegate parse error", e);
          }
        }(n);
        if ("RemoteConfigDelegate" === e) return console.log("[FunJoyLib] RemoteConfigDelegate:", n), void __rea_outer_p(n, !1);
        if ("RemoteConfigDefaultDelegate" === e) return console.log("[FunJoyLib] RemoteConfigDefaultDelegate:", n), void __rea_outer_p(n, !0);
        if ("AdjustAttributionDelegate" === e) return void function (e) {
          try {
            __rea_outer_b.onNativeAdjustAttributionMessage(e);
          } catch (e) {
            console.error("[FunJoyLib] AdjustAttributionDelegate error", e);
          }
        }(n);
        "GoogleAdsDelegate" === e && console.log("[FunJoyLib] GoogleAdsDelegate:", n);
      } catch (t) {
        console.error("[FunJoyLib] onNative handler error, event:", e, t);
      }
    }(e, t);
  }, __rea_outer_s(S), !N && __rea_outer_r() && __rea_outer_u() && (N = !0, __rea_outer_n.on(__rea_outer_o.EVENT_END_FRAME, _)), __rea_outer_g(t), __rea_outer_d(t), __rea_outer_y(t), __rea_outer_F(t), __rea_outer_c(t), E();
}, __recovered_export_8 = function (e, t) {
  t ? __rea_outer_l(e, t) : __rea_outer_f(e);
}, __recovered_export_9 = E, __recovered_export_10 = function () {
  v = !1, __rea_outer_A();
}, __recovered_export_11 = function (e) {
  const t = L.indexOf(e);
  t >= 0 && L.splice(t, 1);
}, __recovered_export_12 = function (t) {
  j = __recovered_export_13 = t;
}), __rea_outer_t._RF.push({}, "06bd9aZ85RItqBMG9FNMwjr", "funjoy-lib", void 0);
const J = "FJ/games/FunJoyUtils/FunJoyUtils",
  m = "pollPendingScriptMessages",
  R = "()Ljava/lang/String;";
let S = null,
  v = !1,
  N = !1,
  j = __recovered_export_13 = null;
const L = [];
function E() {
  v = !0, __rea_outer_D();
}
const h = ["FunJoyUtils.canGameDebugResult", "FunJoyUtils.canPrintLogResult", "FunJoyUtils.getAppVersionResult", "FunJoyUtils.saveImageToGalleryResult", "FunJoyUtils.requestInAppReviewResult", "FunJoyCommon.isCountrysResult", "FunJoyMax.GetAd_LoadResult", "FunJoyMax.GetCountryCodeResult", "FunJoyAdjust.getAttributionResult"];
function _() {
  if (!v || !S) return;
  const e = function () {
    try {
      const e = __rea_outer_i.reflection.callStaticMethod(J, m, R);
      return "string" == typeof e ? e : "";
    } catch (e) {
      return console.error("[FunJoyLib] pollPendingScriptMessages failed", e), "";
    }
  }();
  e && function (e) {
    (function (e) {
      try {
        const t = JSON.parse(e);
        return Array.isArray(t) ? t.filter(C) : [];
      } catch (e) {
        return console.error("[FunJoyLib] pending script payload parse error", e), [];
      }
    })(e).forEach(e => {
      null == S || S(e.funName, e.params);
    });
  }(e);
}
function C(e) {
  if (!e || "object" != typeof e) return !1;
  const t = e;
  return "string" == typeof t.funName && t.funName.length > 0 && "string" == typeof t.params;
}
__rea_outer_t._RF.pop();
export { __recovered_export_0 as FunJoyFirebase, __recovered_export_1 as FunJoyMax, __recovered_export_2 as FunJoyTA, __recovered_export_3 as FunJoyFacebook, __recovered_export_4 as FunJoyCommon, __recovered_export_5 as FunJoyRemoteConfig, __recovered_export_6 as addAdStateDelegate, __recovered_export_7 as init, __recovered_export_8 as logEvent, __recovered_export_9 as notifyScriptBridgeReady, __recovered_export_10 as notifyScriptBridgeSuspended, __recovered_export_11 as removeAdStateDelegate, __recovered_export_12 as setAdStateAction, __recovered_export_13 as adStateAction };
