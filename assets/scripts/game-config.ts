// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/game-config.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer__ } from "cc";
let __recovered_export_0, __recovered_export_1;
__rea_outer__._RF.push({}, "ce6c34f/f1Pg72Ik12m09sd", "game-config", void 0);
__recovered_export_0 = {
  DESIGN: {
    WIDTH: 1080,
    HEIGHT: 1920,
    FIT_HEIGHT: !1,
    FIT_WIDTH: !0,
    BANNER_SAFE_BOTTOM: 150
  },
  LEVEL: {
    MAX_LEVEL: 100,
    DIFFERENCES_PER_LEVEL: {
      MIN: 3,
      MAX: 10
    },
    TIME_LIMIT: {
      EASY: 300,
      NORMAL: 180,
      HARD: 120
    }
  },
  SCORE: {
    BASE_SCORE_PER_DIFFERENCE: 100,
    TIME_BONUS_MULTIPLIER: 10,
    PERFECT_BONUS: 500
  },
  DAILY_CHALLENGE: {
    MAX_ATTEMPTS: 3,
    RESET_HOUR: 0
  },
  PK_MODE: {
    MATCH_TIMEOUT: 30,
    GAME_DURATION: 180
  }
}, __recovered_export_1 = {
  QuickWinDebug: !1,
  ShowClueHotspots: !1
};
__rea_outer__._RF.pop();
export { __recovered_export_0 as GAME_CONFIG, __recovered_export_1 as GAME_DEBUG };
