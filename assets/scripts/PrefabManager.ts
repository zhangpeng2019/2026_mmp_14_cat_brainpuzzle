// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/PrefabManager.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_a } from "cc";
import { releaseAsset as __rea_outer_t } from "./CocosCompat";
let __recovered_export_0;
__rea_outer_a._RF.push({}, "bb96bqyNKxLFac7l5HsjrD8", "PrefabManager", void 0);
class s {
  static set(e, a) {
    this.prefabMap.has(e) ? console.warn("set fail: " + e + " already exsit in the prefabMap") : this.prefabMap.set(e, a);
  }
  static get(e) {
    if (this.prefabMap.has(e)) return console.log("get " + e + " in the prefabMap"), this.prefabMap.get(e);
    console.warn("get fail: " + e + " not exsit in the prefabMap");
  }
  static releaseAsset(e) {
    if (!this.prefabMap.has(e)) return;
    const a = this.prefabMap.get(e);
    this.prefabMap.delete(e), __rea_outer_t(a), console.log("release asset with " + e);
  }
  static releaseAllAsset() {
    this.prefabMap.clear(), console.log("prefabMap release all");
  }
}
__recovered_export_0 = s, s.prefabMap = new Map(), s.audioName = {
  DEFAULT: "default"
}, __rea_outer_a._RF.pop();
export { __recovered_export_0 as default };
