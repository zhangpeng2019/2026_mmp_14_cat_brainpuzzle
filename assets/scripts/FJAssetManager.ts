// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/FJAssetManager.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { assetManager as __rea_outer_l } from "cc";
import { cclegacy as __rea_outer_s } from "cc";
let __recovered_export_0;
__rea_outer_s._RF.push({}, "9fdd577yApMtrEMQx1b2JUR", "FJAssetManager", void 0);
class n {
  static async loadBundle(e, s) {
    return new Promise(n => {
      __rea_outer_l.loadBundle(e, s, (l, s) => {
        if (l) return console.log(l.message), void n(null);
        console.log("Loading bundle: ", e), n(s);
      });
    });
  }
  static async preLoadBundle(e, s) {
    return new Promise(n => {
      __rea_outer_l.loadBundle(e, s, (e, l) => {
        if (e) return console.log(e.message), void n(null);
        n(l);
      });
    });
  }
  static getBundle(e) {
    return __rea_outer_l.getBundle(e);
  }
  static removeBundle(e) {
    const s = this.getBundle(e);
    s ? __rea_outer_l.removeBundle(s) : console.warn("load " + e + " bundle first");
  }
  static load(e, l, s, n, t) {
    const o = this.getBundle(e);
    o ? o.load(l, s, n, (e, l) => {
      e ? console.log(e.message) : (console.log("load " + l.name + " completed"), null == t || t(l));
    }) : console.warn("load " + e + " bundle first");
  }
  static loadDir(e, l, s, n, t) {
    const o = this.getBundle(e);
    o ? o.loadDir(l, s, n, (e, s) => {
      e ? console.log(e.message) : 0 !== s.length ? null == t || t(s) : console.log("Bundle " + o.name + " doesn't contain " + l);
    }) : console.warn("load " + e + " bundle first");
  }
  static releaseBundleAsset(e, l, s) {
    const n = this.getBundle(e);
    n ? n.release(l, s) : console.warn("load " + e + " bundle first");
  }
  static releaseAllBundleAsset(e) {
    const l = this.getBundle(e);
    l ? l.releaseAll() : console.warn("load " + e + " bundle first");
  }
  static releaseAsset(e) {
    __rea_outer_l.releaseAsset(e);
  }
  static releaseAllAsset() {
    __rea_outer_l.releaseAll();
  }
}
__recovered_export_0 = n, n.BundleName = {
  UI: "ui",
  AUDIO: "audio",
  CONFIG: "config",
  PREFABS: "prefabs",
  LEVEL: "Level",
  LEVEL_SPR: "LevelSpr",
  INTERNAL: "internal",
  START_SCENE: "start-scene",
  RESOURCES: "resources",
  MAIN: "main"
}, __rea_outer_s._RF.pop();
export { __recovered_export_0 as default };
