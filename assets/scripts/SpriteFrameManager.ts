// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/SpriteFrameManager.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { releaseAsset as __rea_outer_s } from "./CocosCompat";
let __recovered_export_0;
__rea_outer_t._RF.push({}, "184b4Vipf1IZLXS4svZRUNB", "SpriteFrameManager", void 0);
class a {
  static set(e, t) {
    this.spriteFrameMap.has(e) ? console.warn("set fail: " + e + " already exsit in the textureMap") : this.spriteFrameMap.set(e, t);
  }
  static get(e) {
    if (this.spriteFrameMap.has(e)) return this.spriteFrameMap.get(e);
    console.warn("get fail: " + e + " not exsit in the textureMap");
  }
  static releaseAsset(e) {
    if (!this.spriteFrameMap.has(e)) return;
    const t = this.spriteFrameMap.get(e);
    this.spriteFrameMap.delete(e), __rea_outer_s(t), console.log("release asset with " + e);
  }
  static releaseAllAsset() {
    this.spriteFrameMap.clear(), console.log("prefabMap release all");
  }
}
__recovered_export_0 = a, a.spriteFrameMap = new Map(), __rea_outer_t._RF.pop();
export { __recovered_export_0 as default };
