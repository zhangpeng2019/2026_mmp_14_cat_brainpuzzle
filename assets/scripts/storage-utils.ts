// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/storage-utils.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_e } from "cc";
import { sys as __rea_outer_r } from "cc";
import { BrainPuzzleRuntime } from "./features/brainpuzzle/BrainPuzzleRuntime";
let __recovered_export_0;
__rea_outer_e._RF.push({}, "cc7094dDUZG2rvlZLf+POxt", "storage-utils", void 0);
__recovered_export_0 = class {
  static encrypt(t) {
    try {
      return "undefined" != typeof btoa ? btoa(encodeURIComponent(t)) : Buffer.from(t, "utf8").toString("base64");
    } catch (t) {
      return console.error("Failed to encrypt data", t), "";
    }
  }
  static decrypt(t) {
    try {
      return "undefined" != typeof atob ? decodeURIComponent(atob(t)) : Buffer.from(t, "base64").toString("utf8");
    } catch (t) {
      return console.error("Failed to decrypt data", t), "";
    }
  }
  static saveEncrypted(t, e) {
    try {
      const o = this.encrypt(e);
      BrainPuzzleRuntime.write(t, o);
    } catch (e) {
      console.error(`Failed to save encrypted data: ${t}`, e);
    }
  }
  static loadEncrypted(t, e = "") {
    try {
      const o = BrainPuzzleRuntime.entries[t];
      return o ? this.decrypt(o) : e;
    } catch (r) {
      return console.error(`Failed to load encrypted data: ${t}`, r), e;
    }
  }
  static isStorageAvailable() {
    try {
      const t = "__storage_test__";
      return BrainPuzzleRuntime.write(t, t), BrainPuzzleRuntime.write(t, null), !0;
    } catch {
      return !1;
    }
  }
  static getStorageSize() {
    let t = 0;
    try {
      for (const o of Object.keys(BrainPuzzleRuntime.entries)) {
        if (o) {
          const e = BrainPuzzleRuntime.entries[o];
          e && (t += o.length + e.length);
        }
      }
    } catch (t) {
      console.error("Failed to calculate storage size", t);
    }
    return t;
  }
}, __rea_outer_e._RF.pop();
export { __recovered_export_0 as StorageUtils };
