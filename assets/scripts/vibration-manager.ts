// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/vibration-manager.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_n } from "cc";
import { sys as __rea_outer_a } from "cc";
import { sendToNative as __rea_outer_e } from "./funjoy-bridge";
import { DataManager as __rea_outer_i } from "./data-manager";
let __recovered_export_0;
__rea_outer_n._RF.push({}, "bad3cw39BVMf7Rm1DhPSC7J", "vibration-manager", void 0);
class r {
  constructor() {}
  static getInstance() {
    return r._instance || (r._instance = new r()), r._instance;
  }
  vibrateOnPuzzleTap() {
    this.tryVibrate(8);
  }
  vibrateOnMerge() {
    this.tryVibrate(15);
  }
  tryVibrate(t) {
    const n = __rea_outer_i.getInstance().getUserData();
    null != n && n.vibrationon && __rea_outer_a.platform === __rea_outer_a.Platform.ANDROID && __rea_outer_a.isNative && __rea_outer_e("FunJoyUtils.vibrate", JSON.stringify({
      durationMs: t
    }));
  }
}
__recovered_export_0 = r, r._instance = null, __rea_outer_n._RF.pop();
export { __recovered_export_0 as VibrationManager };
