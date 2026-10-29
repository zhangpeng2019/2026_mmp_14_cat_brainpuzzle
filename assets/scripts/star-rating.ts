// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/star-rating.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_e } from "cc";
import { resources as __rea_outer_r } from "cc";
import { SpriteAtlas as __rea_outer_s } from "cc";
import { Sprite as __rea_outer__ } from "cc";
let __recovered_export_0;
__rea_outer_e._RF.push({}, "9c629ZFl9ZCdoOb9/WB4yeR", "star-rating", void 0);
const a = new Map(),
  n = new Map();
class T {
  static resolveCount(t) {
    return t > T.THREE_STAR_REMAINING_SECONDS ? 3 : t >= T.TWO_STAR_REMAINING_SECONDS ? 2 : t > 0 ? 1 : 0;
  }
  static loadAtlas(t) {
    const e = a.get(t);
    if (e) return Promise.resolve(e);
    const _ = n.get(t);
    if (_) return _;
    const T = new Promise(e => {
      __rea_outer_r.load(t, __rea_outer_s, (r, s) => {
        if (n.delete(t), r || !s) return console.error(`Failed to load sprite atlas: ${t}`, r), void e(null);
        a.set(t, s), e(s);
      });
    });
    return n.set(t, T), T;
  }
  static applySprites(t, e, r, s) {
    for (let a = 0; a < t.length; a += 1) {
      const n = t[a].getComponent(__rea_outer__);
      n && (n.spriteFrame = a < e ? r : s);
    }
  }
}
__recovered_export_0 = T, T.COUNT_MAX = 3, T.THREE_STAR_REMAINING_SECONDS = 120, T.TWO_STAR_REMAINING_SECONDS = 60, T.GAME_ATLAS_PATH = "imgs/game", T.GENERAL_ATLAS_PATH = "imgs/general", T.GAME_STAR_SPRITE = "game_star", T.GAME_STAR_EMPTY_SPRITE = "game_star_1", T.SETTLEMENT_STAR_SPRITE = "settlement_star", T.SETTLEMENT_STAR_EMPTY_SPRITE = "settlement_star1", T.LIGHT_DURATION = .25, T.LIGHT_PAUSE = .25, T.LIGHT_SCALE = 2, __rea_outer_e._RF.pop();
export { __recovered_export_0 as StarRating };
