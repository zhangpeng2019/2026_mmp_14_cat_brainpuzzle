// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/time-utils.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_e } from "cc";
let __recovered_export_0;
__rea_outer_e._RF.push({}, "d5118xb9PhLWoGHD7odcR1k", "time-utils", void 0);
__recovered_export_0 = class {
  static formatTime(t) {
    const e = Math.floor(t / 60),
      a = Math.floor(t % 60);
    return `${e.toString().padStart(2, "0")}:${a.toString().padStart(2, "0")}`;
  }
  static formatTimeLong(t) {
    const e = Math.floor(t / 3600),
      a = Math.floor(t % 3600 / 60),
      r = Math.floor(t % 60);
    return `${e.toString().padStart(2, "0")}:${a.toString().padStart(2, "0")}:${r.toString().padStart(2, "0")}`;
  }
  static getCurrentTimestamp() {
    return Math.floor(Date.now() / 1e3);
  }
  static isToday(t) {
    const e = new Date(),
      a = new Date(1e3 * t);
    return e.getFullYear() === a.getFullYear() && e.getMonth() === a.getMonth() && e.getDate() === a.getDate();
  }
  static isYesterday(t) {
    const e = new Date();
    e.setDate(e.getDate() - 1);
    const a = new Date(1e3 * t);
    return e.getFullYear() === a.getFullYear() && e.getMonth() === a.getMonth() && e.getDate() === a.getDate();
  }
  static getDaysDifference(t, e) {
    const a = new Date(1e3 * t),
      r = new Date(1e3 * e),
      o = Math.abs(r.getTime() - a.getTime());
    return Math.floor(o / 864e5);
  }
  static getStartOfDay(t) {
    const e = new Date(1e3 * t);
    return e.setHours(0, 0, 0, 0), Math.floor(e.getTime() / 1e3);
  }
}, __rea_outer_e._RF.pop();
export { __recovered_export_0 as TimeUtils };
