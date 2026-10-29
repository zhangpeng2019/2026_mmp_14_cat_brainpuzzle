// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/i18n-controller.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_e } from "cc";
import { EventTarget as __rea_outer_n } from "cc";
import { sys as __rea_outer_i } from "cc";
import { native as __rea_outer_a } from "cc";
import { FileManager as __rea_outer_r } from "./file-manager";
let __recovered_export_0, __recovered_export_1, __recovered_export_2, __recovered_export_3;
var s;
__rea_outer_e._RF.push({}, "613503kmm1I5LTRk4zyrjVa", "i18n-controller", void 0);
const g = __recovered_export_0 = "i18n-language-changed";
let u = __recovered_export_1 = function (t) {
  return t.cn = "cn", t.zh = "cn", t.tw = "tw", t.en = "en", t.pt = "pt", t.ja = "ja", t.it = "it", t.ru = "ru", t.de = "de", t.fr = "fr", t.es = "es", t.ind = "ind", t.pl = "pl", t.tr = "tr", t.hin = "hin", t.ph = "ph", t.vi = "vi", t.kr = "kr", t.ar = "ar", t.th = "th", t.undefine = "undefine", t;
}({});
__recovered_export_2 = [u.cn, u.en, u.tw, u.pt, u.ph, u.ja, u.it, u.ru, u.de, u.fr, u.es, u.ind, u.pl, u.tr, u.hin, u.vi, u.kr, u.ar, u.th];
class h {
  constructor() {
    this.eventTarget = new __rea_outer_n(), this.config = null, this.defaultLang = u.en, this.currentLanguage = null, this.isInitialized = !1, this.initPromise = null;
  }
  static getInstance() {
    return h.instance;
  }
  async initialize(t) {
    if (this.isInitialized && null !== this.config) t && this.changeLanguage(t);else {
      if (this.isInitialized && null === this.config && (this.isInitialized = !1), null !== this.initPromise) return await this.initPromise, void (t && this.changeLanguage(t));
      this.initPromise = this.loadConfig(t), await this.initPromise, this.initPromise = null;
    }
  }
  isReady() {
    return this.isInitialized && null !== this.config;
  }
  async reload() {
    this.isInitialized = !1, this.config = null, await this.loadConfig(), this.eventTarget.emit(g);
  }
  onLanguageChanged(t, e) {
    this.eventTarget.on(g, t, e);
  }
  offLanguageChanged(t, e) {
    this.eventTarget.off(g, t, e);
  }
  async loadConfig(t) {
    await __rea_outer_r.getInstance().loadI18n(), this.config = __rea_outer_r.getInstance().getI18n(), null !== this.config && (t ? this.currentLanguage = this.parseLangOpt(t) ?? this.detectSystemLanguage() : null === this.currentLanguage && (this.currentLanguage = this.detectSystemLanguage()), this.isInitialized = !0);
  }
  getKey(t) {
    return this.getText(t);
  }
  getText(t, e) {
    if (!this.config) return "";
    const n = this.getCurrentLanguage(),
      i = this.resolveLanguageTable(n);
    let a;
    if (i && i[t]) a = i[t];else {
      const e = this.resolveLanguageTable(this.defaultLang);
      if (!e || !e[t]) return console.error(`[I18nController] key not found: ${t}`), "?";
      a = e[t];
    }
    return e && a ? this.formatText(a, e) : a || "?";
  }
  formatText(t, e) {
    let n = t;
    for (const t in e) if (e.hasOwnProperty(t)) {
      const i = new RegExp(`\\{${t}\\}`, "g");
      n = n.replace(i, String(e[t]));
    }
    return n;
  }
  changeLanguage(t) {
    const e = this.parseLangOpt(t) ?? this.defaultLang;
    this.currentLanguage !== e && (this.currentLanguage = e, this.eventTarget.emit(g));
  }
  parseLangOpt(t) {
    if (!t) return null;
    if ("zh" === t || t === u.cn) return u.cn;
    return -1 !== Object.values(u).indexOf(t) && t !== u.undefine ? t : null;
  }
  getCurrentLanguage() {
    return null !== this.currentLanguage ? this.currentLanguage : this.detectSystemLanguage();
  }
  detectSystemLanguage() {
    return this.getLang();
  }
  getLang() {
    const t = this.collectSystemLocaleCandidates();
    for (const e of t) {
      const t = this.matchLocale(e);
      if (t) return t;
    }
    return this.defaultLang;
  }
  collectSystemLocaleCandidates() {
    const t = [],
      e = __rea_outer_i;
    e.languageCode && t.push(e.languageCode), __rea_outer_i.language && t.push(String(__rea_outer_i.language));
    try {
      var n;
      const e = null == __rea_outer_a || null == (n = __rea_outer_a.bridge) || null == n.getCurrentLanguage ? void 0 : n.getCurrentLanguage();
      e && t.push(e);
    } catch (t) {}
    return t;
  }
  matchLocale(t) {
    const e = t.toLowerCase().replace(/_/g, "-");
    if (!e) return null;
    if (this.containsToken(e, ["zh-hant", "zh-tw", "zh-hk", "zh-mo"])) return u.tw;
    if ("zh" === e || "cn" === e || e.startsWith("zh-")) return u.cn;
    if (this.matchesLangPrefix(e, ["fil", "tl"]) || this.matchesLangPrefix(e, ["ph"])) return u.ph;
    const n = [[["en"], u.en], [["pt"], u.pt], [["ja"], u.ja], [["it"], u.it], [["ru"], u.ru], [["de"], u.de], [["fr"], u.fr], [["es"], u.es], [["id", "in"], u.ind], [["pl"], u.pl], [["tr"], u.tr], [["hi"], u.hin], [["vi"], u.vi], [["ko", "kr"], u.kr], [["ar"], u.ar], [["th"], u.th]];
    for (const [t, i] of n) if (this.matchesLangPrefix(e, t)) return i;
    return null;
  }
  containsToken(t, e) {
    return e.some(e => -1 !== t.indexOf(e));
  }
  matchesLangPrefix(t, e) {
    return e.some(e => t === e || t.startsWith(`${e}-`));
  }
  resolveLanguageTable(t) {
    if (this.config) return this.config[t] ? this.config[t] : t === u.cn && this.config.zh ? this.config.zh : void 0;
  }
}
__recovered_export_3 = h, s = h, h.instance = new s(), __rea_outer_e._RF.pop();
export { __recovered_export_0 as I18N_EVENT_LANGUAGE_CHANGED, __recovered_export_1 as LangOpt, __recovered_export_2 as SETTING_LANGUAGE_OPTIONS, __recovered_export_3 as I18nController };
