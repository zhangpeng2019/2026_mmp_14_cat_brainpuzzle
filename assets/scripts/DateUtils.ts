// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/DateUtils.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_e } from "cc";
let __recovered_export_0;
__rea_outer_e._RF.push({}, "96cc4k/UCFGjbKIU51ttwT4", "DateUtils", void 0);
__recovered_export_0 = class {
  constructor() {}
  static getDate() {
    var t = new Date();
    t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds();
  }
  static getTime() {
    return new Date().getTime();
  }
  static checkDate(t, e) {
    return t.year == e.year && t.month == e.month && t.day == e.day;
  }
  static clock(t) {
    var e, a;
    return t = Math.floor(t), t -= 3600 * (e = Math.floor(t / 3600)), t -= 60 * (a = Math.floor(t / 60)), (e < 10 ? "0" + e : "" + e) + ":" + (a < 10 ? "0" + a : "" + a) + ":" + ((l = Math.floor(t)) < 10 ? "0" + l : "" + l);
  }
}, __rea_outer_e._RF.pop();
export { __recovered_export_0 as default };
