// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/TikTokMinisSdk.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_o } from "cc";
import { game as __rea_outer_i } from "cc";
let __recovered_export_0;
__rea_outer_o._RF.push({}, "b4b1cP+tQ1D1J6LFEGKc2ni", "TikTokMinisSdk", void 0);
class n {
  constructor() {}
  static getInstance() {
    return this.m_Instance || (this.m_Instance = new n()), this.m_Instance;
  }
  getGame() {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : null;
    return e ? e.TTMinis && e.TTMinis.game && "object" == typeof e.TTMinis.game ? e.TTMinis.game : e.tt && "object" == typeof e.tt ? e.tt : null : null;
  }
  isAvailable() {
    return !!this.getGame();
  }
  canIUse(e) {
    var o = this.getGame();
    return !!(o && o.canIUse && "function" == typeof o.canIUse && o.canIUse(e));
  }
  executeBootstrap() {
    this.isAvailable() ? this.executeLogin() : console.log("[TikTokMinisSdk] TTMinis.game not found, skip bootstrap");
  }
  checkAddShortcutAvailable() {
    return this.canIUse("addShortcut");
  }
  executeAddShortcut(e) {
    void 0 === e && (e = {});
    var o = this.getGame();
    return o ? this.checkAddShortcutAvailable() ? void o.addShortcut({
      success: function () {
        console.log("[TikTokMinisSdk] addShortcut success"), e.success && e.success();
      },
      fail: function (o) {
        console.log("[TikTokMinisSdk] addShortcut fail", o), e.fail && e.fail(o);
      },
      complete: function () {
        e.complete && e.complete();
      }
    }) : (console.warn("[TikTokMinisSdk] addShortcut not supported"), e.fail && e.fail({
      errMsg: "not_supported"
    }), void (e.complete && e.complete())) : (console.log("[TikTokMinisSdk] addShortcut: no TTMinis.game"), e.fail && e.fail({
      errMsg: "no_sdk"
    }), void (e.complete && e.complete()));
  }
  executeStartEntranceMission(e) {
    void 0 === e && (e = {});
    var o = this.getGame();
    return o ? this.canIUse("startEntranceMission") ? void o.startEntranceMission({
      success: function () {
        console.log("[TikTokMinisSdk] startEntranceMission success"), e.success && e.success();
      },
      fail: function (o) {
        console.log("[TikTokMinisSdk] startEntranceMission fail", o), e.fail && e.fail(o);
      },
      complete: function () {
        e.complete && e.complete();
      }
    }) : (console.warn("[TikTokMinisSdk] startEntranceMission not supported"), e.fail && e.fail({
      errMsg: "not_supported"
    }), void (e.complete && e.complete())) : (console.log("[TikTokMinisSdk] startEntranceMission: no TTMinis.game"), e.fail && e.fail({
      errMsg: "no_sdk"
    }), void (e.complete && e.complete()));
  }
  executeGetShortcutMissionReward(e) {
    void 0 === e && (e = {});
    var o = this.getGame();
    if (!o || "function" != typeof o.getShortcutMissionReward) return console.warn("[TikTokMinisSdk] getShortcutMissionReward not available"), e.fail && e.fail({
      errMsg: "not_available"
    }), void (e.complete && e.complete());
    o.getShortcutMissionReward({
      success: function (o) {
        e.success && e.success(o);
      },
      fail: function (o) {
        e.fail && e.fail(o);
      },
      complete: function () {
        e.complete && e.complete();
      }
    });
  }
  executeGetEntranceMissionReward(e) {
    void 0 === e && (e = {});
    var o = this.getGame();
    if (!o || "function" != typeof o.getEntranceMissionReward) return console.warn("[TikTokMinisSdk] getEntranceMissionReward not available"), e.fail && e.fail({
      errMsg: "not_available"
    }), void (e.complete && e.complete());
    o.getEntranceMissionReward({
      success: function (o) {
        e.success && e.success(o);
      },
      fail: function (o) {
        e.fail && e.fail(o);
      },
      complete: function () {
        e.complete && e.complete();
      }
    });
  }
  executeLogin(e) {
    void 0 === e && (e = {});
    var o = this.getGame();
    if (!o || "function" != typeof o.login) return console.warn("[TikTokMinisSdk] login not available"), e.fail && e.fail({
      errMsg: "not_available"
    }), void (e.complete && e.complete());
    o.login({
      success: function (o) {
        console.log("[TikTokMinisSdk] login success", o && o.code ? "code_ok" : "no_code"), e.success && e.success(o);
      },
      fail: function (o) {
        console.log("[TikTokMinisSdk] login fail", o), e.fail && e.fail(o);
      },
      complete: function () {
        e.complete && e.complete();
      }
    });
  }
  reportGameEvent(e, o, i) {
    void 0 === o && (o = {}), void 0 === i && (i = {});
    var n = this.getGame();
    n ? this.canIUse("reportEvent") ? "function" == typeof n.reportEvent ? (console.log("[TikTokMinisSdk] reportEvent", e, JSON.stringify(o)), n.reportEvent({
      eventName: e,
      params: o,
      success: function () {
        i.success && i.success();
      },
      fail: function (e) {
        i.fail && i.fail(e);
      }
    })) : console.warn("[TikTokMinisSdk] reportEvent missing") : console.warn("[TikTokMinisSdk] reportEvent not supported") : console.log("[TikTokMinisSdk] reportEvent: no TTMinis.game");
  }
  getAdHost() {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : null;
    return e ? e.TTMinis && e.TTMinis.game && "function" == typeof e.TTMinis.game.createRewardedVideoAd ? e.TTMinis.game : e.TTMinis && "function" == typeof e.TTMinis.createRewardedVideoAd ? e.TTMinis : e.tt && "function" == typeof e.tt.createRewardedVideoAd ? e.tt : null : null;
  }
  createRewardedVideoAd(e) {
    var o = this.getAdHost();
    if (!o) return console.warn("[TikTokMinisSdk] createRewardedVideoAd not available"), null;
    if (!e) return console.warn("[TikTokMinisSdk] createRewardedVideoAd: empty adUnitId"), null;
    try {
      return o.createRewardedVideoAd({
        adUnitId: e
      });
    } catch (e) {
      return console.error("[TikTokMinisSdk] createRewardedVideoAd error", e), null;
    }
  }
  createInterstitialAd(e) {
    var o = this.getAdHost() || this.getGame();
    if (!o || "function" != typeof o.createInterstitialAd || !e) return console.warn("[TikTokMinisSdk] createInterstitialAd not available"), null;
    try {
      return o.createInterstitialAd({
        adUnitId: e
      });
    } catch (e) {
      return console.error("[TikTokMinisSdk] createInterstitialAd error", e), null;
    }
  }
  executeShowInterstitial(e) {
    var o = this.createInterstitialAd(e);
    o && o.show && o.show().then(function () {
      console.log("[TikTokMinisSdk] interstitial show ok");
    }).catch(function (e) {
      console.warn("[TikTokMinisSdk] interstitial show fail", e);
    });
  }
  executeShowRewardedVideo(e, o, n, t) {
    void 0 === t && (t = {}), console.log("[TikTokMinisSdk] executeShowRewardedVideo adUnitId=", e), this.canIUse("createRewardedVideoAd") || console.warn("[TikTokMinisSdk] canIUse(createRewardedVideoAd)=false, TikTok app may be < 44.2.0");
    var s = this.createRewardedVideoAd(e);
    if (!s) return console.warn("[TikTokMinisSdk] executeShowRewardedVideo: no ad instance"), void (t.onMissing && t.onMissing());
    console.log("[TikTokMinisSdk] rewarded ad api:", {
      show: !!s.show,
      load: !!s.load,
      onClose: !!s.onClose,
      onError: !!s.onError
    });
    var r = !1,
      a = function () {
        r || (r = !0, s.offClose && s.offClose(l), s.offError && s.offError(c));
      },
      c = function (e) {
        console.log("[TikTokMinisSdk] rewarded onError", e), a(), __rea_outer_i.resume(), n && n();
      },
      l = function (e) {
        a(), __rea_outer_i.resume(), e && e.isEnded ? o && o() : n && n();
      };
    s.onError && s.onError(c), s.onClose && s.onClose(l), function () {
      if (!s.show) return console.warn("[TikTokMinisSdk] rewarded show() missing"), a(), void (n && n());
      console.log("[TikTokMinisSdk] rewarded show"), __rea_outer_i.pause();
      var e = s.show();
      e && "function" == typeof e.then ? e.then(function () {
        console.log("[TikTokMinisSdk] rewarded show ok");
      }).catch(function (e) {
        if (console.warn("[TikTokMinisSdk] rewarded show fail, retry load+show", e), s.load && "function" == typeof s.load) {
          var o = s.load();
          if (o && "function" == typeof o.then) return void o.then(function () {
            return s.show();
          }).then(function () {
            console.log("[TikTokMinisSdk] rewarded load+show ok");
          }).catch(function (e) {
            console.warn("[TikTokMinisSdk] rewarded load+show fail", e), a(), __rea_outer_i.resume(), n && n();
          });
        }
        a(), __rea_outer_i.resume(), n && n();
      }) : console.log("[TikTokMinisSdk] rewarded show (sync)");
    }();
  }
}
__recovered_export_0 = n, n.m_Instance = null, __rea_outer_o._RF.pop();
export { __recovered_export_0 as default };
