// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/data-manager.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { GameStorage as __rea_outer_a } from "./game-storage";
import { detectRuntimePlatform as __rea_outer_s } from "./game-storage";
import { RuntimePlatform as __rea_outer_r } from "./game-storage";
import { DEFAULT_USER_DATA as __rea_outer_n } from "./user-data";
import { UserGroupType as __rea_outer_l } from "./user-data";
import { COMPETITOR_LEVEL_TEST_AD_GROUP_NAME as __rea_outer_i } from "./user-data";
import { COMPETITOR_PROMOTED_LEVEL_ID as __rea_outer_o } from "./user-data";
import { COMPETITOR_PROMOTED_LEVEL_INDEX as __rea_outer_u } from "./user-data";
import { I18nController as __rea_outer_d } from "./i18n-controller";
import { GameUtils as __rea_outer_h } from "./gameutils";
import { default as __rea_outer_c } from "./GameUtils2";
import { GameDefine as __rea_outer_v } from "./game-define";
import { setCurrentLevelId as __rea_outer_g } from "./funjoy-max";
import { default as __rea_outer_L } from "./BaseData";
import { StarRating as __rea_outer__ } from "./star-rating";
let __recovered_export_0, __recovered_export_1, __recovered_export_2;
__rea_outer_t._RF.push({}, "86c9acEXFZJjrhhBiow2C8Y", "data-manager", void 0);
let D = __recovered_export_0 = function (e) {
    return e[e.Locked = 0] = "Locked", e[e.Completed = 1] = "Completed", e[e.PlayerLevel = 2] = "PlayerLevel", e[e.Ad = 3] = "Ad", e;
  }({}),
  m = __recovered_export_1 = function (e) {
    return e.NORMAL = "normal", e.DAILY = "daily", e;
  }({});
const y = "user_data",
  f = "data_version",
  p = "level_start_counts",
  A = "max_country_code";
class k {
  constructor() {
    this._storage = __rea_outer_a.getInstance(), this._userData = null, this._userGroupTypeChangeAnalyticsHook = null, this._playerProgressAnalyticsHook = null, this._selectedLevelId = __rea_outer_n.Levelid, this._gameMode = m.NORMAL, this._isFirstLoginToday = !1, this._loginDay = 0, this._maxCountryCode = "", this._isTestMode = !1, this._testConfig = null, this._skipAd = !1;
  }
  static getInstance() {
    return k._instance || (k._instance = new k()), k._instance;
  }
  static detectPlatform() {
    const e = __rea_outer_s();
    return console.log("[DataManager] detectPlatform:", e), e;
  }
  getMaxCountryCode() {
    return this._maxCountryCode;
  }
  setMaxCountryCode(e) {
    const t = this.getString(A, "").trim();
    if (t.length > 0) return void (this._maxCountryCode = t);
    const a = (e ?? "").trim();
    0 !== a.length && (this._maxCountryCode = a, this.setString(A, a));
  }
  initialize() {
    this.checkDataVersion(), this._maxCountryCode = this.getString(A, ""), __rea_outer_L.applyRegionLevelOrder(this._maxCountryCode), this.loadUserData(), this.applyStoredAdGroupLevelOrder();
  }
  loadUserData() {
    const e = this._storage.getStorageSync(y);
    if (e) {
      this._userData = this.mergeUserDataWithDefaults(e);
      const t = Date.now(),
        a = this._userData.lastLoginTime || 0,
        s = Math.floor(a / 1e3),
        r = Math.floor(t / 1e3),
        n = 0 === a || !this.isSameDay(s, r);
      this._isFirstLoginToday = n, n && (this._userData.loginDay = (this._userData.loginDay || 0) + 1), this._loginDay = this._userData.loginDay, this._userData.lastLoginTime = t, this.saveUserData(), console.log("User data loaded from storage and merged with defaults");
    } else this._userData = this.createNewUserData(), this._userData.loginDay = 1, this._isFirstLoginToday = !0, this._loginDay = 1, this.saveUserData(), console.log("New user data initialized");
    var t = Date.now();
    const a = Math.floor(t / 1e3);
    this._userData.unlockendtime > 0 && a > this._userData.unlockendtime && (this._userData.unlockAllLevels = !1, this._userData.unlockAllLevelAds = 0, this._userData.unlockendtime = 0, this.saveUserData(), console.log("[DataManager] Unlock period expired, reset unlockAllLevels and unlockAllLevelAds")), this.cleanupExpiredAdUnlocks(a), this._isFirstLoginToday && !this._userData.unlockAllLevels && this._userData.unlockAllLevelAds > 0 && (this._userData.unlockAllLevelAds = 0, this.saveUserData(), console.log("[DataManager] New day, reset unlockAllLevelAds counter")), this.syncPlayerProgressFields(), this.migrateLevelStartCountsFromLegacyStorage(), this.resolveAndApplyUserLanguage(!0), this._selectedLevelId = this._userData.Levelid, __rea_outer_c.SelectLevelKey = this._selectedLevelId, this.checkEntranceMissionReward();
  }
  mergeUserDataWithDefaults(e) {
    const t = {
      ...__rea_outer_n
    };
    if (e && "object" == typeof e) {
      if (void 0 !== e.userId && null !== e.userId && "" !== e.userId && (t.userId = e.userId), void 0 !== e.level && (t.level = e.level), void 0 !== e.Levelid && "number" == typeof e.Levelid && (t.Levelid = e.Levelid), void 0 !== e.levelindex && "number" == typeof e.levelindex && (t.levelindex = e.levelindex), void 0 !== e.doneLevelid && Array.isArray(e.doneLevelid) && (t.doneLevelid = e.doneLevelid), void 0 !== e.totalGames && (t.totalGames = e.totalGames), void 0 !== e.unlockLevels && Array.isArray(e.unlockLevels) && (t.unlockLevels = e.unlockLevels), void 0 !== e.hasMigratedPlayerLevelUnlocks ? t.hasMigratedPlayerLevelUnlocks = e.hasMigratedPlayerLevelUnlocks : t.hasMigratedPlayerLevelUnlocks = !1, void 0 !== e.compeletedLevels && Array.isArray(e.compeletedLevels) && (t.compeletedLevels = e.compeletedLevels), void 0 !== e.unlockendtime && "number" == typeof e.unlockendtime && (t.unlockendtime = e.unlockendtime), void 0 !== e.unlockAllLevels && (t.unlockAllLevels = e.unlockAllLevels), void 0 !== e.unlockAllLevelAds && "number" == typeof e.unlockAllLevelAds && (t.unlockAllLevelAds = e.unlockAllLevelAds), void 0 !== e.adUnlockLevelEnds && "object" == typeof e.adUnlockLevelEnds && (t.adUnlockLevelEnds = e.adUnlockLevelEnds), void 0 !== e.createdAt && e.createdAt > 0 && (t.createdAt = e.createdAt), void 0 !== e.hasSeenLevel1HintTutorial && (t.hasSeenLevel1HintTutorial = e.hasSeenLevel1HintTutorial), void 0 !== e.hasAutoEnteredTutorialLevel && (t.hasAutoEnteredTutorialLevel = e.hasAutoEnteredTutorialLevel), void 0 !== e.hasReceivedFirstLobbyHintGift && (t.hasReceivedFirstLobbyHintGift = e.hasReceivedFirstLobbyHintGift), void 0 !== e.hasShownRateUs && (t.hasShownRateUs = e.hasShownRateUs), void 0 !== e.hintCount && (t.hintCount = e.hintCount), void 0 !== e.lastLoginTime && (t.lastLoginTime = e.lastLoginTime), void 0 !== e.entranceMissionReward && "number" == typeof e.entranceMissionReward && (t.entranceMissionReward = e.entranceMissionReward), void 0 !== e.entranceMissionDate && "number" == typeof e.entranceMissionDate && (t.entranceMissionDate = e.entranceMissionDate), void 0 !== e.musicon && (t.musicon = e.musicon), void 0 !== e.effecton && (t.effecton = e.effecton), void 0 !== e.vibrationon && (t.vibrationon = e.vibrationon), void 0 !== e.lan && "string" == typeof e.lan && (t.lan = e.lan), void 0 !== e.loginDay && "number" == typeof e.loginDay && (t.loginDay = e.loginDay), void 0 !== e.interstitialShowTimes && "number" == typeof e.interstitialShowTimes && (t.interstitialShowTimes = e.interstitialShowTimes), void 0 !== e.levelStartCounts && "object" == typeof e.levelStartCounts && (t.levelStartCounts = e.levelStartCounts), void 0 !== e.levelStars && "object" == typeof e.levelStars && (t.levelStars = this.sanitizeLevelStars(e.levelStars)), void 0 !== e.lobbyLevelPage && "number" == typeof e.lobbyLevelPage && (t.lobbyLevelPage = Math.max(0, Math.floor(e.lobbyLevelPage))), void 0 !== e.grouptype) {
        const a = e.grouptype;
        if ("number" == typeof a && Number.isFinite(a)) t.grouptype = a === __rea_outer_l.Buy ? __rea_outer_l.Buy : __rea_outer_l.Natural;else if ("string" == typeof a) {
          const e = a.trim();
          t.grouptype = "1" === e || "buy" === e.toLowerCase() ? __rea_outer_l.Buy : __rea_outer_l.Natural;
        }
      }
      void 0 !== e.ad_group_name && "string" == typeof e.ad_group_name && (t.ad_group_name = e.ad_group_name), this.mergeLegacySaveFields(t, e);
    }
    return 0 === t.createdAt && (t.createdAt = Date.now()), t;
  }
  syncPlayerProgressFields() {
    if (!this._userData) return;
    let e = !1;
    if (Array.isArray(this._userData.doneLevelid) || (this._userData.doneLevelid = [], e = !0), 0 === this._userData.doneLevelid.length && this._userData.compeletedLevels.length > 0) this._userData.doneLevelid = [...new Set(this._userData.compeletedLevels)], e = !0;else if (0 === this._userData.compeletedLevels.length && this._userData.doneLevelid.length > 0) this._userData.compeletedLevels = [...new Set(this._userData.doneLevelid)], e = !0;else if (this._userData.doneLevelid.length > 0 && this._userData.compeletedLevels.length > 0) {
      const t = [...new Set([...this._userData.doneLevelid, ...this._userData.compeletedLevels])];
      t.length === this._userData.doneLevelid.length && t.length === this._userData.compeletedLevels.length || (this._userData.doneLevelid = t, this._userData.compeletedLevels = t, e = !0);
    }
    const t = this._userData.doneLevelid.length + 1;
    this._userData.level < t && (this._userData.level = t, e = !0), (!this._userData.Levelid || this._userData.Levelid <= 0) && (this._userData.Levelid = __rea_outer_n.Levelid, e = !0), this.syncLevelIndexWithLevelId() && (e = !0), this.syncPermanentUnlockLevelsFromProgress() && (e = !0), e && this.saveUserData();
  }
  syncPermanentUnlockLevelsFromProgress() {
    if (!this._userData) return !1;
    let e = !1;
    Array.isArray(this._userData.unlockLevels) || (this._userData.unlockLevels = [], e = !0);
    const t = __rea_outer_L.allLevelId;
    if (!this._userData.hasMigratedPlayerLevelUnlocks) {
      const a = Math.max(0, Math.floor(this._userData.level));
      for (let s = 1; s <= a && s <= t.length; s++) this.addPermanentUnlockLevel(t[s - 1]) && (e = !0);
      this._userData.hasMigratedPlayerLevelUnlocks = !0, e = !0;
    }
    const a = [...new Set([...(this._userData.doneLevelid ?? []), ...(this._userData.compeletedLevels ?? [])])];
    for (const t of a) {
      const a = this.getNextLevelIdInAllLevels(t);
      null !== a && this.addPermanentUnlockLevel(a) && (e = !0);
    }
    return e;
  }
  static readAdGroupNameFromAttributionJson(e) {
    try {
      const t = JSON.parse(e);
      if ("string" == typeof t.ad_group_name && t.ad_group_name.trim().length > 0) return t.ad_group_name.trim();
      if ("string" == typeof t.adgroup) return t.adgroup.trim();
    } catch {
      return "";
    }
    return "";
  }
  captureAdGroupNameIfEmpty(e) {
    if (!this._userData) return !1;
    if ((this._userData.ad_group_name ?? "").trim().length > 0) return !1;
    const t = (e ?? "").trim();
    return 0 !== t.length && (this._userData.ad_group_name = t, this.saveUserData(), console.log(`[DataManager] ad_group_name saved=${t}`), !0);
  }
  captureAdGroupNameFromAttributionJson(e) {
    const t = k.readAdGroupNameFromAttributionJson(e);
    return this.captureAdGroupNameIfEmpty(t);
  }
  applyStoredAdGroupLevelOrder() {
    var e;
    const t = ((null == (e = this._userData) ? void 0 : e.ad_group_name) ?? "").trim();
    t === __rea_outer_i && (__rea_outer_L.moveLevelToIndex(__rea_outer_o, __rea_outer_u), this.syncLevelIndexWithCurrentOrder(), console.log(`[DataManager] ad group level order applied name=${t} tenth=${__rea_outer_L.allLevelId[__rea_outer_u]}`));
  }
  syncLevelIndexWithCurrentOrder() {
    this._userData && this.syncLevelIndexWithLevelId() && (this.saveUserData(), this.notifyPlayerProgressChangedToAnalytics());
  }
  syncLevelIndexWithLevelId() {
    if (!this._userData) return !1;
    const e = this.getLevelOrderInAllLevels(this._userData.Levelid) ?? 0;
    return this._userData.levelindex !== e && (this._userData.levelindex = e, !0);
  }
  migrateLevelStartCountsFromLegacyStorage() {
    if (!this._userData) return;
    this._userData.levelStartCounts && "object" == typeof this._userData.levelStartCounts || (this._userData.levelStartCounts = {});
    const e = this.getObject(p, {}),
      t = Object.keys(e);
    if (0 === t.length) return;
    let a = !1;
    for (const s of t) {
      const t = e[s] ?? 0;
      t > (this._userData.levelStartCounts[s] ?? 0) && (this._userData.levelStartCounts[s] = t, a = !0);
    }
    a && this.saveUserData(), this.remove(p);
  }
  sanitizeLevelStars(e) {
    const t = {};
    if (!e || "object" != typeof e) return t;
    const a = e;
    for (const e of Object.keys(a)) {
      const s = a[e];
      if ("number" != typeof s || !Number.isFinite(s)) continue;
      const r = Math.max(0, Math.min(__rea_outer__.COUNT_MAX, Math.floor(s)));
      r > 0 && (t[e] = r);
    }
    return t;
  }
  mergeLegacySaveFields(e, t) {
    "number" == typeof t.EntranceMissionReward && (e.entranceMissionReward = t.EntranceMissionReward), "number" == typeof t.EntranceMissionDate && (e.entranceMissionDate = t.EntranceMissionDate), Array.isArray(t.UnLockLevelArr) && t.UnLockLevelArr.length > 0 && (e.unlockLevels = [...new Set([...e.unlockLevels, ...t.UnLockLevelArr])]), Array.isArray(t.PlayComLevelArr) && t.PlayComLevelArr.length > 0 && (e.compeletedLevels = [...new Set([...e.compeletedLevels, ...t.PlayComLevelArr])]);
  }
  loadSelectedLevelConfig() {}
  getSelectedLevelId() {
    return this._selectedLevelId;
  }
  getLobbyLevelIds() {
    const e = [],
      t = new Set();
    for (const a of __rea_outer_L.mode_arr) for (const s of a) t.has(s) || (t.add(s), e.push(s));
    return e;
  }
  getLobbyLevelPage(e) {
    var t;
    const a = (null == (t = this._userData) ? void 0 : t.lobbyLevelPage) ?? 0,
      s = this.getLobbyLevelIds().length,
      r = Math.max(1, e ?? Math.ceil(s / k.LOBBY_LEVELS_PER_PAGE));
    return Math.min(Math.max(0, a), r - 1);
  }
  setLobbyLevelPage(e) {
    if (!this._userData) return;
    const t = Math.max(0, Math.floor(e));
    this._userData.lobbyLevelPage !== t && this.updateUserData({
      lobbyLevelPage: t
    });
  }
  setLobbyLevelPageForLevel(e) {
    const t = this.getLobbyLevelIds().indexOf(e);
    t < 0 || this.setLobbyLevelPage(Math.floor(t / k.LOBBY_LEVELS_PER_PAGE));
  }
  getHintCount() {
    var e;
    return (null == (e = this._userData) ? void 0 : e.hintCount) ?? 0;
  }
  consumeHint() {
    return !(!this._userData || this._userData.hintCount <= 0) && (this._userData.hintCount -= 1, this.saveUserData(), !0);
  }
  grantHint(e = 1) {
    !this._userData || e <= 0 || (this._userData.hintCount += e, this.saveUserData());
  }
  SetSelectedLevelId(e) {
    e <= 0 || (this._selectedLevelId = e, __rea_outer_c.SelectLevelKey = e, this._userData && this._userData.Levelid !== e && (this._userData.Levelid = e, this.syncLevelIndexWithLevelId(), this.saveUserData(), this.notifyPlayerProgressChangedToAnalytics()), this.loadSelectedLevelConfig());
  }
  getLevelOrderInAllLevels(e) {
    const t = __rea_outer_L.allLevelId.indexOf(e);
    return -1 === t ? null : t + 1;
  }
  getNextLevelIdInAllLevels(e) {
    const t = __rea_outer_L.allLevelId,
      a = t.indexOf(e);
    return -1 === a || a >= t.length - 1 ? null : t[a + 1];
  }
  addPermanentUnlockLevel(e) {
    return !(!this._userData || e <= 0) && (Array.isArray(this._userData.unlockLevels) || (this._userData.unlockLevels = []), -1 === this._userData.unlockLevels.indexOf(e) && (this._userData.unlockLevels.push(e), !0));
  }
  getLevelStars(e) {
    var t;
    return !this._userData || e <= 0 ? 0 : (null == (t = this._userData.levelStars) ? void 0 : t[String(e)]) ?? 0;
  }
  recordLevelStars(e, t) {
    var a;
    if (!this._userData || e <= 0) return;
    const s = Math.max(0, Math.min(__rea_outer__.COUNT_MAX, Math.floor(t)));
    if (s <= 0) return;
    const r = String(e);
    s <= ((null == (a = this._userData.levelStars) ? void 0 : a[r]) ?? 0) || (this._userData.levelStars = {
      ...(this._userData.levelStars ?? {}),
      [r]: s
    }, this.saveUserData());
  }
  isLevelCompleted(e) {
    return !!this._userData && -1 !== this._userData.doneLevelid.indexOf(e);
  }
  getPlayerLevel() {
    var e;
    return (null == (e = this._userData) ? void 0 : e.level) ?? 1;
  }
  isLevel14TutorialRun() {
    return 1 === this.getPlayerLevel() && !this.isLevelCompleted(14);
  }
  shouldAutoEnterTutorialLevel() {
    if (!this._userData) return !1;
    if (this._userData.hasAutoEnteredTutorialLevel) return !1;
    const e = __rea_outer_L.initalLevel[0];
    return 1 === this.getPlayerLevel() && !this.isLevelCompleted(e);
  }
  markAutoEnteredTutorialLevel() {
    this._userData && !this._userData.hasAutoEnteredTutorialLevel && (this._userData.hasAutoEnteredTutorialLevel = !0, this.saveUserData());
  }
  isLevelUnlockedByAd(e) {
    if (!this._userData) return !1;
    const t = Math.floor(Date.now() / 1e3);
    if (this._userData.unlockAllLevels && this._userData.unlockendtime > t) return !0;
    const a = this._userData.adUnlockLevelEnds[String(e)];
    return void 0 !== a && a > t;
  }
  isLevelUnlocked(e) {
    return !!this._userData && (!!this.isLevelCompleted(e) || -1 !== this._userData.unlockLevels.indexOf(e) || !!this.isLevelUnlockedByAd(e));
  }
  getLevelUnlockType(e) {
    return this._userData && this.isLevelUnlocked(e) ? this.isLevelCompleted(e) ? D.Completed : this.isLevelUnlockedByAd(e) && -1 === this._userData.unlockLevels.indexOf(e) ? D.Ad : D.PlayerLevel : D.Locked;
  }
  markLevelCompleted(e) {
    if (!this._userData || e <= 0) return;
    if (this.isLevelCompleted(e)) return;
    this._userData.doneLevelid.push(e), -1 === this._userData.compeletedLevels.indexOf(e) && this._userData.compeletedLevels.push(e);
    const t = this.getNextLevelIdInAllLevels(e);
    null !== t && this.addPermanentUnlockLevel(t), this._userData.level += 1, __rea_outer_g(this._userData.level), this.saveUserData(), this.notifyPlayerProgressChangedToAnalytics(), console.log(`[DataManager] Level ${e} marked completed, unlockedNext=${t}, player level=${this._userData.level}, done=${this._userData.doneLevelid.length}`);
  }
  getUnlockAllLevelAdsCount() {
    var e;
    return (null == (e = this._userData) ? void 0 : e.unlockAllLevelAds) ?? 0;
  }
  getUnlockAllLevelAdsRequired() {
    return 3;
  }
  unlockLevelByAdForToday(e) {
    if (!this._userData) return;
    const t = this.getEndOfTodayTimestampSeconds();
    this._userData.adUnlockLevelEnds = {
      ...this._userData.adUnlockLevelEnds,
      [String(e)]: t
    }, this.saveUserData(), console.log(`[DataManager] Level ${e} unlocked by ad until ${t}`);
  }
  incrementUnlockAllLevelAds() {
    return this._userData ? (this._userData.unlockAllLevelAds += 1, this._userData.unlockAllLevelAds >= 3 && (this._userData.unlockAllLevels = !0, this._userData.unlockendtime = this.getEndOfTodayTimestampSeconds(), console.log(`[DataManager] All levels unlocked by ad until ${this._userData.unlockendtime}`)), this.saveUserData(), this._userData.unlockAllLevelAds) : 0;
  }
  getSelectedLevelIdForUnlock() {
    return this._selectedLevelId;
  }
  getEndOfTodayTimestampSeconds(e = Date.now()) {
    const t = new Date(e);
    return t.setHours(23, 59, 59, 999), Math.floor(t.getTime() / 1e3);
  }
  cleanupExpiredAdUnlocks(e) {
    var t;
    if (null == (t = this._userData) || !t.adUnlockLevelEnds) return;
    const a = this._userData.adUnlockLevelEnds;
    let s = !1;
    for (const t of Object.keys(a)) a[t] <= e && (delete a[t], s = !0);
    s && this.saveUserData();
  }
  createNewUserData() {
    const e = Date.now();
    return {
      ...__rea_outer_n,
      userId: this.generateUserId(),
      createdAt: e,
      lastLoginTime: e
    };
  }
  resolveAndApplyUserLanguage(e) {
    if (!this._userData) return;
    const t = __rea_outer_d.getInstance(),
      a = t.parseLangOpt(this._userData.lan) ?? t.getLang(),
      s = this._userData.lan !== a;
    this._userData.lan = a, s && e && this.saveUserData(), t.changeLanguage(a);
  }
  generateUserId() {
    const e = new Date(),
      t = e.getFullYear(),
      a = e.getMonth() + 1,
      s = e.getDate();
    return `${`${t}${a < 10 ? `0${a}` : `${a}`}${s < 10 ? `0${s}` : `${s}`}`}${Math.floor(1e4 * Math.random())}`;
  }
  getUserData() {
    return this._userData;
  }
  getIsFirstLoginToday() {
    return this._isFirstLoginToday;
  }
  getLoginDay() {
    return this._loginDay;
  }
  incrementAndGetInterstitialShowTimes(e = 1) {
    if (!this._userData) return 0;
    const t = (this._userData.interstitialShowTimes ?? 0) + e;
    return this._userData.interstitialShowTimes = t, e > 0 && this.saveUserData(), t;
  }
  incrementAndGetLevelStartCount(e) {
    if (!this._userData || e <= 0) return 0;
    this._userData.levelStartCounts && "object" == typeof this._userData.levelStartCounts || (this._userData.levelStartCounts = {});
    const t = String(e),
      a = (this._userData.levelStartCounts[t] ?? 0) + 1;
    return this._userData.levelStartCounts[t] = a, this.saveUserData(), a;
  }
  getLevelStartCount(e) {
    var t;
    return !this._userData || e <= 0 ? 0 : (null == (t = this._userData.levelStartCounts) ? void 0 : t[String(e)]) ?? 0;
  }
  getUniqueEnteredLevelCount() {
    var e;
    const t = null == (e = this._userData) ? void 0 : e.levelStartCounts;
    return t ? Object.keys(t).filter(e => (t[e] ?? 0) > 0).length : 0;
  }
  saveUserData() {
    this._userData && this._storage.setStorageSync(y, this._userData);
  }
  updateUserData(e) {
    if (!this._userData) return;
    const t = void 0 !== e.grouptype ? this._userData.grouptype : void 0;
    var a;
    (Object.assign(this._userData, e), void 0 !== e.Levelid && this.syncLevelIndexWithLevelId(), void 0 !== e.lan && this.resolveAndApplyUserLanguage(!1), this.saveUserData(), void 0 !== e.level && __rea_outer_g(e.level), void 0 !== t && void 0 !== e.grouptype && e.grouptype !== t) && (null == (a = this._userGroupTypeChangeAnalyticsHook) || a.call(this, t, e.grouptype));
  }
  setUserGroupTypeChangeAnalyticsHook(e) {
    this._userGroupTypeChangeAnalyticsHook = e;
  }
  setPlayerProgressAnalyticsHook(e) {
    this._playerProgressAnalyticsHook = e;
  }
  notifyPlayerProgressChangedToAnalytics() {
    var e;
    null == (e = this._playerProgressAnalyticsHook) || e.call(this);
  }
  addClaimedBackgroundId(e) {
    this._userData && this.saveUserData();
  }
  checkDataVersion() {
    const e = this.getNumber(f, 0);
    e < 3 && (this.migrateData(e, 3), this.setNumber(f, 3));
  }
  migrateData(e, t) {
    console.log(`Migrating data from version ${e} to ${t}`);
  }
  setString(e, t) {
    try {
      this._storage.setStorageSync(e, t);
    } catch (t) {
      console.error(`Failed to save string data: ${e}`, t);
    }
  }
  getString(e, t = "") {
    try {
      const a = this._storage.getStorageSync(e, t);
      return null !== a ? a : t;
    } catch (a) {
      return console.error(`Failed to get string data: ${e}`, a), t;
    }
  }
  setNumber(e, t) {
    this.setString(e, t.toString());
  }
  getNumber(e, t = 0) {
    const a = this.getString(e),
      s = parseFloat(a);
    return isNaN(s) ? t : s;
  }
  setBoolean(e, t) {
    this.setString(e, t ? "1" : "0");
  }
  getBoolean(e, t = !1) {
    const a = this.getString(e);
    return "1" === a || "0" !== a && t;
  }
  setObject(e, t) {
    try {
      this._storage.setStorageSync(e, t);
    } catch (t) {
      console.error(`Failed to save object data: ${e}`, t);
    }
  }
  getObject(e, t) {
    try {
      const a = this._storage.getStorageSync(e, t);
      return null !== a ? a : t;
    } catch (a) {
      return console.error(`Failed to get object data: ${e}`, a), t;
    }
  }
  remove(e) {
    try {
      this._storage.setStorageSync(e, null);
    } catch (t) {
      console.error(`Failed to remove data: ${e}`, t);
    }
  }
  clear() {
    try {
      this._storage.clearStorageSync(), this._userData = null;
    } catch (e) {
      console.error("Failed to clear storage", e);
    }
  }
  hasKey(e) {
    const t = this._storage.getStorageSync(e);
    return null != t;
  }
  getGameMode() {
    return this._gameMode;
  }
  setGameMode(e) {
    this._gameMode = e, console.log(`[DataManager] Game mode set to: ${e}`);
  }
  async getLevelBaseImage(e) {
    const t = e.toString(),
      a = -1 !== __rea_outer_v.BUILT_IN_LEVELS.indexOf(e);
    return new Promise(s => {
      __rea_outer_h.GetSprites(t, (t, a, r) => {
        t && a ? (console.log(`[DataManager] Successfully loaded level base image for level ${e}`), s(a)) : (console.error(`[DataManager] Failed to load level base image for level ${e}`), s(null));
      }, a);
    });
  }
  checkEntranceMissionReward() {
    if (k.detectPlatform() !== __rea_outer_r.TT) return void console.log("[DataManager] Not TT platform, skip entrance mission reward check");
    const e = globalThis.TTMinis;
    e && e.game && "function" == typeof e.game.getEntranceMissionReward ? e.game.getEntranceMissionReward({
      success: ({
        canReceiveReward: e
      }) => {
        if (console.log("[DataManager] Entrance mission reward check success, canReceiveReward:", e), !this._userData) return;
        __rea_outer_h.reportEvent(__rea_outer_v.EVENTS.GAIN_CREDITS, {
          value: 1,
          token_type: 1,
          token_id: 0
        });
        const t = Math.floor(Date.now() / 1e3),
          a = this._userData.entranceMissionDate || 0;
        0 === a || this.isSameDay(a, t) ? this._userData.entranceMissionReward = 0 : (this._userData.entranceMissionReward = 1, this._userData.entranceMissionDate = t), this.saveUserData(), console.log(`[DataManager] Entrance mission reward updated: Reward=${this._userData.entranceMissionReward}, Date=${this._userData.entranceMissionDate}`);
      },
      fail: () => {
        console.log("[DataManager] Entrance mission reward check failed");
      },
      complete: () => {
        console.log("[DataManager] Entrance mission reward check complete");
      }
    }) : console.warn("[DataManager] TTMinis.game.getEntranceMissionReward not available");
  }
  isSameDay(e, t) {
    if (0 === e || 0 === t) return !1;
    const a = new Date(1e3 * e),
      s = new Date(1e3 * t);
    return a.getFullYear() === s.getFullYear() && a.getMonth() === s.getMonth() && a.getDate() === s.getDate();
  }
  isSkipAd() {
    return this._skipAd;
  }
  setSkipAd(e) {
    this._skipAd = e, console.log("[DataManager] skipAd:", e);
  }
  isTestMode() {
    return this._isTestMode;
  }
  getTestConfig() {
    return this._testConfig;
  }
  setTestConfig(e) {
    this._isTestMode = !0, this._testConfig = e, console.log("[DataManager] Test mode enabled, config:", {
      xAmount: e.xAmount,
      yAmount: e.yAmount
    });
  }
  clearTestConfig() {
    this._isTestMode = !1, this._testConfig = null, console.log("[DataManager] Test mode cleared");
  }
}
__recovered_export_2 = k, k._instance = null, k.LOBBY_LEVELS_PER_PAGE = 6, __rea_outer_t._RF.pop();
export { __recovered_export_0 as LevelUnlockType, __recovered_export_1 as GameMode, __recovered_export_2 as DataManager };
