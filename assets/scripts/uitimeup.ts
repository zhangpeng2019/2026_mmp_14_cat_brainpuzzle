// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/uitimeup.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { applyDecoratedDescriptor as __rea_outer_e } from "./rollupPluginModLoBabelHelpers";
import { initializerDefineProperty as __rea_outer_i } from "./rollupPluginModLoBabelHelpers";
import { cclegacy as __rea_outer_n } from "cc";
import { Button as __rea_outer_o } from "cc";
import { _decorator as __rea_outer_s } from "cc";
import { AdsController as __rea_outer_a } from "./ads-controller";
import { GameDefine as __rea_outer_l } from "./game-define";
import { GameController as __rea_outer_r } from "./GameController";
import "./index2";
import { getAdLoad as __rea_outer_u } from "./funjoy-max";
import { parseRewardOrNativeReadyFromAdLoadDetail as __rea_outer_c } from "./funjoy-max";
import { AD_TYPE_REWARDED as __rea_outer_h } from "./funjoy-max";
import { UIManager as __rea_outer_d } from "./ui-manager";
import { UILayer as __rea_outer_p } from "./ui-layer";
import { UIBase as __rea_outer_m } from "./ui-base";
import { UIFail as __rea_outer__ } from "./uifail";
import { TAHelper as __rea_outer_g } from "./ta-helper";
let __recovered_export_0;
var f, B, b, C, T, y, A, I, D, R;
__rea_outer_n._RF.push({}, "bcedfh4XEZJN74n4VF/jmvH", "uitimeup", void 0);
const {
  ccclass: w,
  property: v
} = __rea_outer_s;
__recovered_export_0 = (f = w("UITimeup"), B = v(__rea_outer_o), b = v(__rea_outer_o), C = v(__rea_outer_o), f(((R = class t extends __rea_outer_m {
  constructor(...t) {
    super(...t), __rea_outer_i(this, "Button_close", A, this), __rea_outer_i(this, "Button_ObtainTime", I, this), __rea_outer_i(this, "Button_bg", D, this), this._isWatchingAd = !1;
  }
  onLoad() {
    this.preparePopupStructure(), super.onLoad(), this.resolveReferences();
  }
  show() {
    super.show(), __rea_outer_r.getInstance().pauseTimer(), __rea_outer_g.getInstance().trackAdsShow(__rea_outer_l.ADS.GAME_FAIL_ADDTIME), this.scheduleOnce(() => {
      this.node.active && this.doPopAppear();
    }, 0);
  }
  registerCallbacks() {
    this.Button_close && this.Button_close.node.on(__rea_outer_o.EventType.CLICK, this.onCloseClick, this), this.Button_ObtainTime && this.Button_ObtainTime.node.on(__rea_outer_o.EventType.CLICK, this.OnClickReward, this);
  }
  unregisterCallbacks() {
    this.Button_close && this.Button_close.node.off(__rea_outer_o.EventType.CLICK, this.onCloseClick, this), this.Button_ObtainTime && this.Button_ObtainTime.node.off(__rea_outer_o.EventType.CLICK, this.OnClickReward, this);
  }
  onCloseClick() {
    if (this._isWatchingAd) return;
    const e = t.failDelaySeconds;
    t.failDelaySeconds = 0, this.hideWithPopDisappear(() => {
      __rea_outer_d.getInstance().hideView(t), t.presentFailPopup(e);
    });
  }
  OnClickReward() {
    if (this._isWatchingAd) return;
    const e = __rea_outer_l.ADS.GAME_FAIL_ADDTIME,
      i = __rea_outer_a.getInstance();
    __rea_outer_u(__rea_outer_h, n => {
      __rea_outer_g.getInstance().trackAdsClickWithDetail(e, n);
      __rea_outer_c(n) || i.isRewardedVideoReady(e) || i.isNativeAdReady(e) ? (this._isWatchingAd = !0, i.showRewardedVideo(e, () => {
        this._isWatchingAd = !1, t.failDelaySeconds = 0, __rea_outer_r.getInstance().AddGameTime(__rea_outer_l.GAME_TIMER.REWARD_BONUS_SECONDS), this.hideWithPopDisappear(() => {
          __rea_outer_d.getInstance().hideView(t);
        });
      }, () => {
        this._isWatchingAd = !1;
      })) : i.showRewardedVideoNotReadyTip();
    });
  }
  static presentFailPopup(e) {
    null !== t.failTimer && (clearTimeout(t.failTimer), t.failTimer = null);
    const i = () => {
      t.failTimer = null, __rea_outer_d.getInstance().showView(__rea_outer__, __rea_outer_p.WIN_ANIMATION);
    };
    e <= 0 ? i() : t.failTimer = setTimeout(i, 1e3 * e);
  }
  preparePopupStructure() {
    const t = this.node.getChildByName("bg");
    t && (t.name = "eventblock");
    const e = this.node.getChildByName("general_pop_up_bg");
    e && (e.name = "n_root");
  }
  resolveReferences() {
    if (!this.Button_close) {
      const t = this.node.getChildByName("closeBtn") ?? this.node.getChildByName("Button_close");
      this.Button_close = (null == t ? void 0 : t.getComponent(__rea_outer_o)) ?? null;
    }
    if (!this.Button_ObtainTime) {
      const t = this.node.getChildByName("Button_ObtainTime");
      this.Button_ObtainTime = (null == t ? void 0 : t.getComponent(__rea_outer_o)) ?? null;
    }
    if (!this.Button_bg) {
      const t = this.node.getChildByName("eventblock") ?? this.node.getChildByName("bg");
      t && (this.Button_bg = t.getComponent(__rea_outer_o), this.Button_bg || (this.Button_bg = t.addComponent(__rea_outer_o), this.Button_bg.transition = __rea_outer_o.Transition.NONE));
    }
  }
}).failDelaySeconds = 0, R.failTimer = null, A = __rea_outer_e((y = R).prototype, "Button_close", [B], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), I = __rea_outer_e(y.prototype, "Button_ObtainTime", [b], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), D = __rea_outer_e(y.prototype, "Button_bg", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), T = y)) || T);
__rea_outer_n._RF.pop();
export { __recovered_export_0 as UITimeup };
