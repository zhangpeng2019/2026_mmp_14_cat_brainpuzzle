// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/file-manager.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { resources as __rea_outer_l } from "cc";
import { JsonAsset as __rea_outer_n } from "cc";
import { assetManager as __rea_outer_s } from "cc";
import { resolveLevelBundlePictureId as __rea_outer_i } from "./level-data";
let __recovered_export_0;
var r;
__rea_outer_t._RF.push({}, "26fe9BlEsBLc6Ij1ljd7Up0", "file-manager", void 0);
const a = [1, 2, 4, 2, 3, 5];
class o {
  constructor() {
    this.levels = [], this.dailyLevels = [], this.backgrounds = [], this.i18nConfig = null, this._isInitialized = !1;
  }
  static getInstance() {
    return o.instance;
  }
  async initialize() {
    if (this._isInitialized) return;
    const e = await this.loadJsonAsset("configs/levels");
    if (e) {
      const t = e.json.data ?? [];
      this.levels = this.normalizeLevelRows(t), console.log("[FileManager] Levels loaded", this.levels.length);
    }
    const t = await this.loadJsonAsset("configs/dare_levels");
    if (t) {
      const e = t.json.data ?? [];
      this.dailyLevels = this.normalizeLevelRows(e), console.log("[FileManager] Daily levels loaded", this.dailyLevels.length);
    }
    await this.loadBackgrounds(), await this.loadI18n(), this._isInitialized = !0, console.log("[FileManager] FileManager initialized");
  }
  static normalizeDayOfYearId(e) {
    if (!Number.isFinite(e)) return 1;
    return ((Math.floor(e) - 1) % 366 + 366) % 366 + 1;
  }
  static getDayOfYearForCalendarDate(e, t, l) {
    const n = new Date(e, 0, 1),
      s = new Date(e, t - 1, l);
    return Math.floor((s.getTime() - n.getTime()) / 864e5) + 1;
  }
  normalizeLevelRows(e) {
    return e.map(e => {
      const t = "number" == typeof e.back ? String(e.back) : String(e.back ?? ""),
        l = "0" === t ? [] : t.split("#").map(e => Number(e.trim())).filter(e => !Number.isNaN(e));
      return {
        ...e,
        back: t,
        backids: l
      };
    });
  }
  async loadBackgrounds() {
    const e = await this.loadJsonAsset("configs/backgrounds");
    if (!e) return;
    const t = e.json.data ?? [];
    this.backgrounds = t, console.log("[FileManager] Backgrounds loaded", this.backgrounds.length);
  }
  async loadI18n() {
    const e = await this.loadJsonAsset("configs/I18n");
    e && (this.i18nConfig = e.json);
  }
  getLevelConfig(e) {
    const t = this.getMaxLevelId();
    return e <= t ? this.levels.find(t => t.level === e) ?? null : this.buildProceduralLevelConfig(e);
  }
  buildProceduralLevelConfig(e) {
    if (0 === this.levels.length) return null;
    const t = a[(e % 6 + 6) % 6],
      l = this.levels.filter(e => e.label === t),
      n = l.length > 0 ? l : this.levels,
      s = o.mixProceduralSeed(e, 2654435769),
      i = o.mixProceduralSeed(e, 2246822507),
      r = o.pickDeterministicLevel(n, s),
      u = o.pickDeterministicLevel(this.levels, i);
    return r && u ? {
      ...r,
      level: e,
      picture: u.picture,
      buy: u.buy
    } : null;
  }
  static mixProceduralSeed(e, t) {
    let l = e ^ t | 0;
    return l = 0 | Math.imul(l ^ l >>> 16, 2146121005), l = 0 | Math.imul(l ^ l >>> 15, 2221713035), l >>> 0;
  }
  static pickDeterministicLevel(e, t) {
    if (0 === e.length) return;
    return e[t % e.length];
  }
  getAllLevels() {
    return this.levels;
  }
  getDailyLevelConfigByDayOfYear(e) {
    const t = o.normalizeDayOfYearId(e);
    return this.dailyLevels.find(e => e.level === t) ?? null;
  }
  getDailyLevelConfigByMonthDay(e, t, l) {
    const n = o.getDayOfYearForCalendarDate(e, t, l);
    return this.getDailyLevelConfigByDayOfYear(n);
  }
  collectDailyPictureIdsForCalendarMonth(e, t, l) {
    const n = new Date(e, t, 0).getDate(),
      s = new Set();
    for (let r = 1; r <= n; r++) {
      const n = this.getDailyLevelConfigByMonthDay(e, t, r);
      n && s.add(__rea_outer_i(n, l));
    }
    return Array.from(s);
  }
  getMaxLevelId() {
    if (0 === this.levels.length) return 1;
    let e = this.levels[0].level;
    for (const t of this.levels) t.level > e && (e = t.level);
    return e;
  }
  getI18n() {
    return this.i18nConfig;
  }
  getAllBackgrounds() {
    return this.backgrounds;
  }
  getBackgroundById(e) {
    return this.backgrounds.find(t => t.id === e) ?? null;
  }
  getBackgroundForLevel(e) {
    let t = null;
    for (const l of this.backgrounds) e >= l.level && (t = l);
    return t;
  }
  getBackgroundConfigsForLevel(e) {
    const t = [...this.backgrounds].sort((e, t) => e.level - t.level);
    let l = null,
      n = null;
    for (const s of t) {
      if (!(e >= s.level)) {
        n = s;
        break;
      }
      l = s;
    }
    return null === n && (n = l), {
      configA: l,
      configB: n
    };
  }
  loadJsonAsset(e) {
    return this.loadJsonAssetFromResources(e);
  }
  loadJsonAssetFromResources(e) {
    return new Promise(t => {
      __rea_outer_l.load(e, __rea_outer_n, (l, n) => {
        if (l) return console.error(`[FileManager] Failed to load JSON: ${e}`, l), void t(null);
        t(n);
      });
    });
  }
  async loadJsonAssetInEditor(e) {
    const t = globalThis.Editor;
    if (null == t || !t.Message) return null;
    try {
      const l = await t.Message.request("asset-db", "query-asset-info", e);
      return null != l && l.uuid ? new Promise(t => {
        __rea_outer_s.loadAny({
          uuid: l.uuid
        }, (l, n) => {
          if (l) return console.warn(`[FileManager] Editor load failed: ${e}`, l), void t(null);
          t(n);
        });
      }) : null;
    } catch (t) {
      return console.warn(`[FileManager] Editor query failed: ${e}`, t), null;
    }
  }
}
__recovered_export_0 = o, r = o, o.instance = new r(), __rea_outer_t._RF.pop();
export { __recovered_export_0 as FileManager };
