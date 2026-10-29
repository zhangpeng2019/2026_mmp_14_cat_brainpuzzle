// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/gameutils.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_a } from "cc";
import { resources as __rea_outer_o } from "cc";
import { SpriteAtlas as __rea_outer_t } from "cc";
import { SpriteFrame as __rea_outer_i } from "cc";
import { assetManager as __rea_outer_s } from "cc";
import { tween as __rea_outer_n } from "cc";
import { Vec3 as __rea_outer_r } from "cc";
import { ResourceManager as __rea_outer_l } from "./resource-manager";
import { GameDefine as __rea_outer_c } from "./game-define";
let __recovered_export_0;
__rea_outer_a._RF.push({}, "9445brYfilPQrwG2NLsSxox", "gameutils", void 0);
class m {
  static normalizeLevelId(e) {
    const a = ("number" == typeof e ? e.toString() : e).replace(/^level_/i, ""),
      o = a.match(/^\d+/);
    return o ? o[0] : (console.warn(`[GameUtils] Failed to normalize levelId: ${e}, using as-is`), a);
  }
  static async GetSprites(e, a, o = !1) {
    const t = m.normalizeLevelId(e),
      i = parseInt(t),
      s = -1 !== __rea_outer_c.BUILT_IN_LEVELS.indexOf(i),
      n = o || s,
      r = `level_${t}/level_${t}`,
      l = `imgs/${r}`;
    if (console.log(`[GameUtils] Loading sprites from atlas: ${r}, levelNumber: ${i}, isBuiltIn: ${s}, useResources: ${n}`), n) {
      try {
        const e = await m.loadFromResources(l, r);
        if (e.original && e.repair) return console.log(`[GameUtils] Successfully loaded sprites from resources: ${r}`), void a(!0, e.original, e.repair);
      } catch (e) {
        console.warn(`[GameUtils] Failed to load from resources: ${r}`, e);
      }
      try {
        const e = await m.loadFromCache(l, r);
        if (e.original && e.repair) return console.log(`[GameUtils] Successfully loaded sprites from cache: ${r}`), void a(!0, e.original, e.repair);
      } catch (e) {
        console.warn(`[GameUtils] Failed to load from cache: ${r}`, e);
      }
      try {
        const e = await m.loadFromSubpackage(t);
        if (e.original && e.repair) return console.log(`[GameUtils] Successfully loaded sprites from subpackage: ${r}`), void a(!0, e.original, e.repair);
      } catch (e) {
        console.error(`[GameUtils] Failed to load from subpackage: ${r}`, e);
      }
    } else {
      try {
        const e = await m.loadFromSubpackage(t);
        if (e.original && e.repair) return console.log(`[GameUtils] Successfully loaded sprites from subpackage: ${r}`), void a(!0, e.original, e.repair);
      } catch (e) {
        console.warn(`[GameUtils] Failed to load from subpackage: ${r}`, e);
      }
      try {
        const e = await m.loadFromCache(l, r);
        if (e.original && e.repair) return console.log(`[GameUtils] Successfully loaded sprites from cache: ${r}`), void a(!0, e.original, e.repair);
      } catch (e) {
        console.warn(`[GameUtils] Failed to load from cache: ${r}`, e);
      }
      try {
        const e = await m.loadFromResources(l, r);
        if (e.original && e.repair) return console.log(`[GameUtils] Successfully loaded sprites from resources: ${r}`), void a(!0, e.original, e.repair);
      } catch (e) {
        console.warn(`[GameUtils] Failed to load from resources: ${r}`, e);
      }
    }
    console.error(`[GameUtils] Failed to load sprites for level ${t}`), a(!1, null, null);
  }
  static async loadFromResources(e, a) {
    return new Promise((a, i) => {
      __rea_outer_o.load(e, __rea_outer_t, (o, t) => {
        if (o || !t) return void m.loadSpriteFramesFromResources(e, a, i);
        const s = t.getSpriteFrame("original"),
          n = t.getSpriteFrame("repair");
        s && n ? a({
          original: s,
          repair: n
        }) : i(new Error(`Missing sprites in atlas: original=${!!s}, repair=${!!n}`));
      });
    });
  }
  static async loadSpriteFramesFromResources(e, a, t) {
    let s = !1,
      n = !1,
      r = null,
      l = null,
      c = !1;
    const m = () => {
      c || s && n && (r && l ? a({
        original: r,
        repair: l
      }) : t(new Error("Failed to load sprite frames")));
    };
    __rea_outer_o.load(`${e}/original`, __rea_outer_i, (e, a) => {
      if (e) return console.warn(`[GameUtils] Failed to load original sprite: ${e.message}`), c = !0, void t(e);
      r = a, s = !0, m();
    }), __rea_outer_o.load(`${e}/repair`, __rea_outer_i, (e, a) => {
      if (e) return console.warn(`[GameUtils] Failed to load repair sprite: ${e.message}`), c = !0, void t(e);
      l = a, n = !0, m();
    });
  }
  static async loadFromCache(e, a) {
    const o = "cache",
      n = __rea_outer_s.getBundle(o);
    if (!n) throw new Error("Cache bundle not found: cache");
    try {
      const a = await new Promise((a, o) => {
        n.load(e, __rea_outer_t, (e, t) => {
          e ? o(e) : a(t);
        });
      });
      if (a) {
        const e = a.getSpriteFrame("original"),
          o = a.getSpriteFrame("repair");
        if (e && o) return {
          original: e,
          repair: o
        };
      }
    } catch (e) {
      console.warn(`[GameUtils] Failed to load atlas from cache: ${e}`);
    }
    const r = await new Promise(a => {
        n.load(`${e}/original`, __rea_outer_i, (e, o) => {
          a(e ? null : o);
        });
      }),
      l = await new Promise(a => {
        n.load(`${e}/repair`, __rea_outer_i, (e, o) => {
          a(e ? null : o);
        });
      });
    if (r && l) return {
      original: r,
      repair: l
    };
    throw new Error("Failed to load sprites from cache");
  }
  static async loadFromSubpackage(e) {
    const a = m.normalizeLevelId(e),
      o = `level_${a}`,
      s = `level_${a}`,
      n = __rea_outer_l.getInstance();
    console.log(`[GameUtils] Loading from subpackage: ${o}, atlasPath: ${s}`);
    const r = await n.loadBundle(o);
    if (!r) throw new Error(`Failed to load subpackage bundle: ${o}`);
    try {
      const e = await new Promise((e, a) => {
        r.load(s, __rea_outer_t, (o, t) => {
          o ? a(o) : e(t);
        });
      });
      if (e) {
        const a = e.getSpriteFrame("original"),
          o = e.getSpriteFrame("repair");
        if (a && o) return {
          original: a,
          repair: o
        };
      }
    } catch (e) {
      console.warn(`[GameUtils] Failed to load atlas from subpackage: ${e}`);
    }
    const c = await new Promise(e => {
        r.load(`${s}/original`, __rea_outer_i, (a, o) => {
          e(a ? null : o);
        });
      }),
      g = await new Promise(e => {
        r.load(`${s}/repair`, __rea_outer_i, (a, o) => {
          e(a ? null : o);
        });
      });
    if (c && g) return {
      original: c,
      repair: g
    };
    throw new Error("Failed to load sprites from subpackage");
  }
  static startHeartbeatAnimation(e, a = 1, o = 1.15, t = .6) {
    if (!e || !e.isValid) return void console.warn("[GameUtils] Invalid node for heartbeat animation");
    m.stopHeartbeatAnimation(e);
    const i = .4 * t,
      s = .6 * t;
    e.setScale(a, a, 1);
    const l = () => {
      if (!e || !e.isValid) return;
      const t = __rea_outer_n(e).to(i, {
        scale: new __rea_outer_r(o, o, 1)
      }, {
        easing: "sineOut"
      }).to(s, {
        scale: new __rea_outer_r(a, a, 1)
      }, {
        easing: "sineIn"
      }).call(() => {
        l();
      }).start();
      m._heartbeatAnimations.set(e, t);
    };
    l(), console.log(`[GameUtils] Heartbeat animation started for node: ${e.name}`);
  }
  static stopHeartbeatAnimation(e) {
    if (!e) return;
    const a = m._heartbeatAnimations.get(e);
    a && (a.stop(), m._heartbeatAnimations.delete(e), console.log(`[GameUtils] Heartbeat animation stopped for node: ${e.name}`));
  }
  static playSingleHeartbeatPulse(e, a = 1, o = 1.12, t = .5) {
    if (!e || !e.isValid) return;
    m.stopHeartbeatAnimation(e);
    const i = .4 * t,
      s = .6 * t,
      l = __rea_outer_n(e).to(i, {
        scale: new __rea_outer_r(o, o, 1)
      }, {
        easing: "sineOut"
      }).to(s, {
        scale: new __rea_outer_r(a, a, 1)
      }, {
        easing: "sineIn"
      }).call(() => {
        m._heartbeatAnimations.delete(e);
      }).start();
    m._heartbeatAnimations.set(e, l);
  }
  static stopAllHeartbeatAnimations() {
    for (const [e, a] of m._heartbeatAnimations.entries()) a.stop();
    m._heartbeatAnimations.clear(), console.log("[GameUtils] All heartbeat animations stopped");
  }
  static isTTPlatform() {
    var e;
    const a = "object" == typeof (null == (e = globalThis.TTMinis) ? void 0 : e.game);
    return console.log("[DataManager] detectPlatform:  hasTT: ", a), a;
  }
  static checkShortcut() {
    const e = globalThis.TTMinis;
    if (!e || !e.game) return console.log("[GameUtils] TTMinis.game not found"), !1;
    const a = e.game.canIUse && "function" == typeof e.game.canIUse && e.game.canIUse("addShortcut");
    return console.log(`[GameUtils] checkShortcut: ${a}`), !0 === a;
  }
  static addShortcut() {
    const e = globalThis.TTMinis;
    e && e.game ? m.checkShortcut() ? e.game.addShortcut({
      success: () => {
        console.log("[GameUtils] addShortcut success");
      },
      fail: e => {
        console.log("[GameUtils] addShortcut fail", e);
      },
      complete: () => {
        console.log("[GameUtils] addShortcut complete");
      }
    }) : console.warn("[GameUtils] addShortcut API is not available") : console.log("[GameUtils] TTMinis.game not found");
  }
  static AddEntrance() {
    const e = globalThis.TTMinis;
    e && e.game ? e.game.canIUse && "function" == typeof e.game.canIUse && e.game.canIUse("startEntranceMission") ? e.game.startEntranceMission({
      success: () => {
        console.log("[GameUtils] startEntranceMission success");
      },
      fail: () => {
        console.log("[GameUtils] startEntranceMission fail");
      },
      complete: () => {
        console.log("[GameUtils] startEntranceMission complete");
      }
    }) : console.warn("[GameUtils] startEntranceMission API is not available") : console.log("[GameUtils] TTMinis.game not found");
  }
  static Login() {
    const e = globalThis.TTMinis;
    e && e.game ? e.game.login && "function" == typeof e.game.login ? e.game.login({
      success: e => {
        const a = e.code;
        console.log("[GameUtils] Login success, code:", a);
      },
      fail: e => {
        console.log("[GameUtils] Login fail", e);
      },
      complete: () => {
        console.log("[GameUtils] Login complete");
      }
    }) : console.warn("[GameUtils] login API is not available") : console.log("[GameUtils] TTMinis.game not found, skip login");
  }
  static getShortcutMissionReward() {
    const e = globalThis.TTMinis;
    e && e.game ? e.game.getShortcutMissionReward && "function" == typeof e.game.getShortcutMissionReward ? e.game.getShortcutMissionReward({
      success: ({
        canReceiveReward: e
      }) => {
        console.log("[GameUtils] getShortcutMissionReward success, canReceiveReward:", e);
      },
      fail: e => {
        console.log("[GameUtils] getShortcutMissionReward fail", e);
      },
      complete: () => {
        console.log("[GameUtils] getShortcutMissionReward complete");
      }
    }) : console.warn("[GameUtils] getShortcutMissionReward API is not available") : console.log("[GameUtils] TTMinis.game not found, skip getShortcutMissionReward");
  }
  static reportEvent(e, a) {
    const o = globalThis.TTMinis;
    if (!o || !o.game) return void console.log("[GameUtils] TTMinis.game not found, skip reportEvent");
    if (!o.game.canIUse || "function" != typeof o.game.canIUse) return void console.warn("[GameUtils] canIUse API is not available");
    o.game.canIUse("reportEvent") ? o.game.reportEvent && "function" == typeof o.game.reportEvent ? (console.log(`[GameUtils] reportEvent, eventName: ${e}, params: ${JSON.stringify(a)}`), o.game.reportEvent({
      eventName: e,
      params: a,
      success: () => {
        console.log(`[GameUtils] reportEvent success, eventName: ${e}`);
      },
      fail: a => {
        console.log(`[GameUtils] reportEvent fail, eventName: ${e}`, a);
      }
    })) : console.warn("[GameUtils] reportEvent function is not available") : console.warn("[GameUtils] reportEvent API is not available");
  }
}
__recovered_export_0 = m, m._heartbeatAnimations = new Map(), __rea_outer_a._RF.pop();
export { __recovered_export_0 as GameUtils };
