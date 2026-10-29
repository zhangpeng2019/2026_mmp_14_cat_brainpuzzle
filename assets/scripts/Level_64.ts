// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_64.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { Color as __rea_outer_i } from "cc";
import { Vec2 as __rea_outer_s } from "cc";
import { tween as __rea_outer_n } from "cc";
import { Node as __rea_outer_o } from "cc";
import { Button as __rea_outer_l } from "cc";
import { Vec3 as __rea_outer_h } from "cc";
import { UITransform as __rea_outer_a } from "cc";
import { instantiate as __rea_outer_r } from "cc";
import { Sprite as __rea_outer_d } from "cc";
import { assetManager as __rea_outer_c } from "cc";
import { SpriteFrame as __rea_outer_u } from "cc";
import { Label as __rea_outer_m } from "cc";
import { _decorator as __rea_outer_g } from "cc";
import { default as __rea_outer_y } from "./LevelBase";
import { default as __rea_outer_p } from "./AudioManager";
import { I18nController as __rea_outer_f } from "./i18n-controller";
import { UIManager as __rea_outer_N } from "./ui-manager";
import { UILayer as __rea_outer_b } from "./ui-layer";
import { UIHint as __rea_outer_v } from "./uihint";
import { UIFail as __rea_outer_B } from "./uifail";
import { GameController as __rea_outer_A } from "./GameController";
import { stopAllTweens as __rea_outer_S } from "./CocosCompat";
import { getUIOpacity as __rea_outer_I } from "./CocosCompat";
import { setNodeOpacity as __rea_outer_T } from "./CocosCompat";
let __recovered_export_0;
var R;
__rea_outer_t._RF.push({}, "35578bItBZE55wgJs+IFYew", "Level_64", void 0);
const {
    ccclass: C
  } = __rea_outer_g,
  P = "Level_64",
  w = "level64_2",
  V = "level64_3",
  k = ["clicks", "drags", "swips", "demo"],
  x = new __rea_outer_i(0, 0, 0, 255);
__recovered_export_0 = C("Level_64")(R = class extends __rea_outer_y {
  constructor(...e) {
    super(...e), this.phase = 0, this.winstate = !1, this.gameNode = null, this.backBgNode = null, this.bubbleNode = null, this.bubbleLabel = null, this.clickRootNode = null, this.infoButtonNode = null, this.infoButton = null, this.buttonNode = null, this.directionNode = null, this.bg1Node = null, this.bg2Node = null, this.bulletBgNode = null, this.end1Node = null, this.generalEndNode = null, this.panelDemoNode = null, this.rounds = [], this.activeRoundIndex = 0, this.shotsUsed = 0, this.isBusy = !1, this.isAiming = !1, this.isShotPress = !1, this.aimOrigin = new __rea_outer_s(), this.lastAimPoint = new __rea_outer_s(), this.hasLastAimPoint = !1, this.handlersRegistered = !1, this.voiceToken = 0, this.currentVoiceKey = "", this.playerHeadFrame = null, this.enemyHeadFrame = null;
  }
  onLoad() {
    super.onLoad(), this.resolveReferences(), this.allItemNum = 2, this.hasInstallNum = 0, this.loadHeadFrames();
  }
  start() {
    this.resetLevelState(), this.applyInitialVisibility(), this.enterPhase0();
  }
  onDestroy() {
    this.unscheduleAllCallbacks(), this.unregisterHandlers(), this.stopTrackedTweens(), this.destroyAllBounces(), super.onDestroy();
  }
  handleTimeExpired() {
    return !!(this.phase >= 2 || this.winstate);
  }
  showHint() {
    const e = __rea_outer_f.getInstance().getKey("level64_legend");
    __rea_outer_N.getInstance().showView(__rea_outer_v, void 0, {
      body: e
    });
  }
  getGameProgressSnapshot() {
    const e = this.hasInstallNum;
    return {
      progress: e / 2,
      label: `${e}/2`
    };
  }
  markAllTasksCompleted() {
    this.hasInstallNum = 2;
  }
  resetLevelState() {
    this.phase = 0, this.winstate = !1, this.isBusy = !1, this.clearTouchState(), this.activeRoundIndex = 0, this.shotsUsed = 0, this.voiceToken = 0, this.currentVoiceKey = "", this.hasInstallNum = 0, this.rounds.forEach(e => {
      this.resetRoundSoldiers(e);
    }), __rea_outer_p.stopVoice();
  }
  enterPhase0() {
    this.phase = 0, __rea_outer_p.playMusic("bgm4", !0, .5), this.setInputBlocked(!0), __rea_outer_A.getInstance().refreshGameProgress(), this.playBubbleVoice("64_1", () => {
      this.isValid && 0 === this.phase && (this.hideBubble(), this.enterRound1());
    });
  }
  enterRound1() {
    this.phase = 1, this.activeRoundIndex = 0, this.shotsUsed = 0, this.isBusy = !1, this.showRoundScene(0), this.resetRoundSoldiers(this.rounds[0]), this.refreshBulletUi(), this.refreshRays(), this.syncDirection(), this.setInputBlocked(!1), this.registerHandlers(), __rea_outer_A.getInstance().refreshGameProgress();
  }
  enterRound2Playable() {
    this.isValid && 1 === this.phase && (this.isBusy = !1, this.hideBubble(), this.setInputBlocked(!1), this.refreshRays());
  }
  beginRound1Clear() {
    this.hasInstallNum = 1, __rea_outer_A.getInstance().refreshGameProgress(), this.isBusy = !0, this.clearTouchState(), this.setInputBlocked(!0), this.playBubbleVoice("64_2", () => {}), this.playResultStamp(this.generalEndNode, w, () => {
      this.scheduleOnceIfValid(() => {
        this.isValid && 1 === this.phase && !this.winstate && (this.stopCurrentVoice(), this.hideBubble(), this.fadeToBlackThenSwitch());
      }, 1);
    });
  }
  fadeToBlackThenSwitch() {
    const e = this.backBgNode;
    if (null == e || !e.isValid) return this.switchToRound2(), void this.fadeFromBlackThenIntro();
    this.setNodeActive(e, !0), __rea_outer_S(e);
    const t = __rea_outer_I(e);
    t.opacity = 0, __rea_outer_n(t).to(1, {
      opacity: 255
    }).call(() => {
      this.isValid && 1 === this.phase && (this.switchToRound2(), this.fadeFromBlackThenIntro());
    }).start();
  }
  switchToRound2() {
    this.destroyRoundBounces(this.rounds[0]), this.resetResultStamp(this.generalEndNode), this.activeRoundIndex = 1, this.shotsUsed = 0, this.showRoundScene(1), this.resetRoundSoldiers(this.rounds[1]), this.refreshBulletUi(), this.syncDirection();
  }
  fadeFromBlackThenIntro() {
    const e = this.backBgNode;
    if (null == e || !e.isValid) return void this.playRound2Intro();
    __rea_outer_S(e);
    const t = __rea_outer_I(e);
    t.opacity = 255, __rea_outer_n(t).to(1, {
      opacity: 0
    }).call(() => {
      this.isValid && 1 === this.phase && this.playRound2Intro();
    }).start();
  }
  playRound2Intro() {
    this.setInputBlocked(!0), this.playBubbleVoice("64_3", () => {
      this.isValid && 1 === this.phase && this.enterRound2Playable();
    });
  }
  enterPhase2Success() {
    this.phase >= 2 || (this.phase = 2, this.winstate = !0, this.isBusy = !0, this.clearTouchState(), this.unregisterHandlers(), this.setInputBlocked(!0), __rea_outer_A.getInstance().pauseTimer(), this.playBubbleVoice("64_4", () => {}), this.playResultStamp(this.generalEndNode, w, () => {
      this.scheduleOnceIfValid(() => {
        this.isValid && (this.hideBubble(), this.showLevelSuccess(0));
      }, 1);
    }));
  }
  enterPhase2HitFail() {
    this.phase >= 2 || (this.phase = 2, this.winstate = !1, this.isBusy = !0, this.clearTouchState(), this.unregisterHandlers(), this.setInputBlocked(!0), this.hideBubble(), __rea_outer_A.getInstance().pauseTimer(), this.playResultStamp(this.end1Node, V, () => {
      this.scheduleOnceIfValid(() => {
        __rea_outer_N.getInstance().showView(__rea_outer_B, __rea_outer_b.WIN_ANIMATION);
      }, 1);
    }));
  }
  enterPhase2AmmoFail() {
    this.phase >= 2 || (this.phase = 2, this.winstate = !1, this.isBusy = !0, this.clearTouchState(), this.unregisterHandlers(), this.setInputBlocked(!0), __rea_outer_A.getInstance().pauseTimer(), this.playBubbleVoice("64_5", () => {}), this.playResultStamp(this.end1Node, V, () => {
      this.scheduleOnceIfValid(() => {
        this.isValid && (this.hideBubble(), __rea_outer_N.getInstance().showView(__rea_outer_B, __rea_outer_b.WIN_ANIMATION));
      }, 1);
    }));
  }
  beginTimeoutFail() {
    this.phase = 2, this.winstate = !1, this.isBusy = !0, this.clearTouchState(), this.unregisterHandlers(), this.voiceToken += 1, this.stopCurrentVoice(), this.hideBubble(), this.stopTrackedTweens(), this.resetResultStamp(this.end1Node), this.resetResultStamp(this.generalEndNode), this.setInputBlocked(!0), __rea_outer_A.getInstance().pauseTimer(), __rea_outer_N.getInstance().showView(__rea_outer_B, __rea_outer_b.WIN_ANIMATION);
  }
  registerHandlers() {
    var e;
    this.handlersRegistered || (this.handlersRegistered = !0, this.node.on(__rea_outer_o.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(__rea_outer_o.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(__rea_outer_o.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(__rea_outer_o.EventType.TOUCH_CANCEL, this.onTouchCancel, this), null == (e = this.infoButton) || e.node.on(__rea_outer_l.EventType.CLICK, this.onInfoButtonClick, this));
  }
  unregisterHandlers() {
    var e;
    this.handlersRegistered && (this.handlersRegistered = !1, this.node.off(__rea_outer_o.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(__rea_outer_o.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(__rea_outer_o.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(__rea_outer_o.EventType.TOUCH_CANCEL, this.onTouchCancel, this), null != (e = this.infoButton) && null != (e = e.node) && e.isValid && this.infoButton.node.off(__rea_outer_l.EventType.CLICK, this.onInfoButtonClick, this));
  }
  onInfoButtonClick() {
    this.showHint();
  }
  onTouchStart(e) {
    if (!this.canAim()) return;
    const t = this.getTouchWorldPoint(e);
    if (!this.isPointInsideNode(this.infoButtonNode, t)) {
      if (this.aimOrigin.set(t), this.hasLastAimPoint = !1, this.isPointInsideNode(this.buttonNode, t)) return this.isShotPress = !0, void (this.isAiming = !1);
      this.isShotPress = !1, this.isAiming = !0;
    }
  }
  onTouchMove(e) {
    if (!this.canAim()) return;
    const t = this.getTouchWorldPoint(e);
    this.tryPromoteShotPressToAim(t), this.isAiming && this.applyAimFromPoint(t);
  }
  onTouchEnd(e) {
    if (!this.canAim()) return void this.clearTouchState();
    const t = this.getTouchWorldPoint(e);
    if (this.tryPromoteShotPressToAim(t), this.isShotPress) return this.clearTouchState(), void this.executeShot();
    this.isAiming && (this.hasLastAimPoint || this.applyAimFromPoint(t), this.clearTouchState(), this.isPointInsideNode(this.buttonNode, t) && this.executeShot());
  }
  onTouchCancel() {
    this.clearTouchState();
  }
  canAim() {
    return 1 === this.phase && !this.isBusy && !this.winstate;
  }
  clearTouchState() {
    this.isAiming = !1, this.isShotPress = !1, this.hasLastAimPoint = !1;
  }
  tryPromoteShotPressToAim(e) {
    !this.isShotPress || this.getAimDistanceSqr(e) <= 400 || (this.isShotPress = !1, this.isAiming = !0);
  }
  applyAimFromPoint(e) {
    if (this.getAimDistanceSqr(e) <= 256) return;
    if (this.hasLastAimPoint && this.getPointDistanceSqr(this.lastAimPoint, e) <= 25) return;
    const t = e.x - this.aimOrigin.x,
      i = e.y - this.aimOrigin.y;
    this.applyPlayerAngle(180 * Math.atan2(i, t) / Math.PI), this.lastAimPoint.set(e), this.hasLastAimPoint = !0;
  }
  getPointDistanceSqr(e, t) {
    const i = t.x - e.x,
      s = t.y - e.y;
    return i * i + s * s;
  }
  getAimDistanceSqr(e) {
    return this.getPointDistanceSqr(this.aimOrigin, e);
  }
  applyPlayerAngle(e) {
    const t = this.getActiveRound();
    t && (this.setNodeAngle(t.player.launch, e), t.enemies.forEach(i => {
      this.setNodeAngle(i.launch, e + (i.prefabAngle - t.player.prefabAngle));
    }), this.syncDirection(), this.refreshRays());
  }
  executeShot() {
    const e = this.getActiveRound();
    if (!e || this.isBusy) return;
    this.isBusy = !0, this.setInputBlocked(!0), __rea_outer_p.playEffect_1("level64_1"), this.consumeBullet();
    const t = this.traceRay(e, e.player).firstSoldier,
      i = e.enemies.filter(e => e.isAlive).map(t => this.traceRay(e, t).firstSoldier),
      s = i.some(e => null == e ? void 0 : e.isPlayer);
    let n = !1;
    s ? (this.setNodeActive(e.player.parts.end2, !0), n = !0) : (t && !t.isPlayer && t.isAlive && (this.killEnemy(t), n = !0), i.forEach(e => {
      e && !e.isPlayer && e.isAlive && (this.killEnemy(e), n = !0);
    }), this.refreshRays());
    const o = this.getShotOutcome(e, s),
      l = "continue" !== o || n ? .5 : 0;
    this.scheduleShotResolve(o, l);
  }
  getShotOutcome(e, t) {
    return t ? "hitFail" : this.countLivingEnemies(e) <= 0 ? "roundClear" : this.getRemainingBullets() <= 0 ? "ammoFail" : "continue";
  }
  scheduleShotResolve(e, t) {
    t <= 0 ? this.resolveShotOutcome(e) : this.scheduleOnceIfValid(() => {
      !this.isValid || this.phase >= 2 || this.resolveShotOutcome(e);
    }, t);
  }
  resolveShotOutcome(e) {
    "hitFail" !== e ? "roundClear" !== e ? "ammoFail" !== e ? (this.isBusy = !1, this.setInputBlocked(!1)) : this.enterPhase2AmmoFail() : this.onRoundCleared() : this.enterPhase2HitFail();
  }
  onRoundCleared() {
    0 !== this.activeRoundIndex ? (this.hasInstallNum = 2, __rea_outer_A.getInstance().refreshGameProgress(), this.enterPhase2Success()) : this.beginRound1Clear();
  }
  killEnemy(e) {
    e.isAlive = !1, this.setNodeActive(e.parts.end2, !0), this.setNodeActive(e.parts.frame1, !1), this.setNodeActive(e.parts.frame2, !1), this.setNodeActive(e.launch, !1), this.destroyBounce(e);
  }
  consumeBullet() {
    const e = this.getActiveRound();
    if (!e) return;
    const t = e.bulletItems[this.shotsUsed];
    this.shotsUsed += 1, this.markBulletUsed(t, !0);
  }
  getRemainingBullets() {
    const e = this.getActiveRound();
    return e ? Math.max(e.bulletItems.length - this.shotsUsed, 0) : 0;
  }
  refreshBulletUi() {
    this.rounds.forEach((e, t) => {
      const i = t === this.activeRoundIndex;
      e.bulletItems.forEach(e => {
        this.setNodeActive(e, i), i && this.markBulletUsed(e, !1);
      });
    });
  }
  markBulletUsed(e, t) {
    null != e && e.isValid && (this.setNodeActive(e.getChildByName("bullet"), !0), this.setNodeActive(e.getChildByName("bullet_1"), t), this.setNodeActive(e.getChildByName("bullet_2"), t));
  }
  refreshRays() {
    const e = this.getActiveRound();
    e && (this.clearAimFrames(e), this.applyRay(e, e.player, !0), e.enemies.forEach(t => {
      if (!t.isAlive) return this.setNodeActive(t.launch, !1), void this.destroyBounce(t);
      this.setNodeActive(t.launch, !0), this.applyRay(e, t, !1);
    }));
  }
  applyRay(e, t, i) {
    const s = t.launch;
    if (null == s || !s.isValid) return;
    const n = this.traceRay(e, t),
      o = this.getLaunchWidth(s);
    this.applyLaunchScale(s, n.firstHit, t.prefabScaleX, o), n.bounceOrigin ? this.showBounce(t, e.sceneNode, n.bounceOrigin, n.bounceAngle, n.bounceHit, t.prefabScaleX, o) : this.destroyBounce(t), this.applyAimFrame(i, n.firstSoldier);
  }
  applyAimFrame(e, t) {
    null != t && t.isAlive && (e ? t.isPlayer || this.setNodeActive(t.parts.frame2, !0) : this.setNodeActive(t.parts.frame1, !0));
  }
  traceRay(e, t) {
    var i;
    const n = {
      firstHit: null,
      bounceOrigin: null,
      bounceAngle: 0,
      bounceHit: null,
      firstSoldier: null
    };
    if (null == (i = t.launch) || !i.isValid) return n;
    const o = t.launch.worldPosition.clone(),
      l = function (e) {
        const t = e * Math.PI / 180;
        return new __rea_outer_s(Math.cos(t), Math.sin(t));
      }(this.getNodeAngle(t.launch)),
      a = t.prefabScaleX * this.getLaunchWidth(t.launch),
      r = this.collectFirstHit(e, o, l, a, t, 0);
    if ("soldier" === (null == r ? void 0 : r.kind)) return {
      ...n,
      firstHit: r,
      firstSoldier: r.soldier
    };
    if ("dangban" !== (null == r ? void 0 : r.kind)) return {
      ...n,
      firstHit: r
    };
    const d = function (e, t) {
        const i = t.lengthSqr() > 0 ? t.clone().normalize() : new __rea_outer_s(1, 0),
          n = e.x * i.x + e.y * i.y,
          o = new __rea_outer_s(e.x - 2 * n * i.x, e.y - 2 * n * i.y);
        if (o.lengthSqr() <= 0) return new __rea_outer_s(-e.x, -e.y);
        return o.normalize(), o;
      }(l, r.normal),
      c = function (e, t, i) {
        return new __rea_outer_h(e.x + t.x * i, e.y + t.y * i, e.z);
      }(r.point, d, 2),
      u = this.collectFirstHit(e, c, d, a, null, .5),
      m = "soldier" === (null == u ? void 0 : u.kind) ? u.soldier : null;
    return {
      firstHit: r,
      bounceOrigin: c,
      bounceAngle: E(d),
      bounceHit: u,
      firstSoldier: m
    };
  }
  collectFirstHit(e, t, i, s, n, o) {
    let l = null;
    [e.player, ...e.enemies].forEach(e => {
      if (!e.isAlive || e === n) return;
      const h = this.raycastSoldier(t, i, s, e);
      !h || h.distance < o || (!l || h.distance < l.distance) && (l = h);
    });
    const h = this.raycastDangban(e, t, i, s);
    return h && h.distance >= o && (!l || h.distance < l.distance) && (l = h), l;
  }
  raycastSoldier(e, t, i, n) {
    const o = n.parts.head;
    if (null == o || !o.isValid || !o.activeInHierarchy) return null;
    const l = o.getComponent(__rea_outer_a);
    if (!l) return null;
    const r = l.getBoundingBoxToWorld(),
      d = .5 * Math.min(r.width, r.height);
    if (d <= 0) return null;
    const c = function (e, t, i, s, n, o, l, h) {
      const a = e - n,
        r = t - o,
        d = a * a + r * r - l * l;
      if (d <= 0) {
        const e = Math.sqrt(a * a + r * r);
        return {
          distance: 0,
          nx: e > 0 ? a / e : 1,
          ny: e > 0 ? r / e : 0
        };
      }
      const c = a * i + r * s,
        u = c * c - d;
      if (u < 0) return null;
      const m = -c - Math.sqrt(u);
      if (m < 0 || m > h) return null;
      let g = e + i * m - n,
        y = t + s * m - o;
      const p = Math.sqrt(g * g + y * y);
      p > 0 && (g /= p, y /= p);
      return {
        distance: m,
        nx: g,
        ny: y
      };
    }(e.x, e.y, t.x, t.y, r.x + .5 * r.width, r.y + .5 * r.height, d, i);
    return c ? {
      distance: c.distance,
      point: new __rea_outer_h(e.x + t.x * c.distance, e.y + t.y * c.distance, e.z),
      normal: new __rea_outer_s(c.nx, c.ny),
      kind: "soldier",
      soldier: n
    } : null;
  }
  raycastDangban(e, t, i, n) {
    const o = e.dangban;
    if (null == o || !o.isValid || !o.activeInHierarchy) return null;
    const l = o.getComponent(__rea_outer_a);
    if (!l) return null;
    const r = l.convertToNodeSpaceAR(t),
      d = new __rea_outer_h(t.x + i.x, t.y + i.y, t.z),
      c = l.convertToNodeSpaceAR(d),
      u = new __rea_outer_s(c.x - r.x, c.y - r.y);
    if (u.lengthSqr() <= 0) return null;
    u.normalize();
    const m = .5 * l.width,
      g = .5 * l.height,
      y = function (e, t, i, s, n, o, l, h, a) {
        if (e >= n && e <= l && t >= o && t <= h) return {
          distance: 0,
          nx: 0,
          ny: 0
        };
        let r = 0,
          d = a,
          c = 0,
          u = 0;
        if (Math.abs(i) < 1e-8) {
          if (e < n || e > l) return null;
        } else {
          const t = (n - e) / i,
            s = (l - e) / i,
            o = Math.min(t, s),
            h = Math.max(t, s);
          o > r && (r = o, c = t < s ? -1 : 1, u = 0), d = Math.min(d, h);
        }
        if (Math.abs(s) < 1e-8) {
          if (t < o || t > h) return null;
        } else {
          const e = (o - t) / s,
            i = (h - t) / s,
            n = Math.min(e, i),
            l = Math.max(e, i);
          n > r && (r = n, c = 0, u = e < i ? -1 : 1), d = Math.min(d, l);
        }
        if (r > d || r > a || r < 0) return null;
        return {
          distance: r,
          nx: c,
          ny: u
        };
      }(r.x, r.y, u.x, u.y, -m, -g, m, g, n);
    if (!y) return null;
    const p = new __rea_outer_h(r.x + u.x * y.distance, r.y + u.y * y.distance, 0),
      f = l.convertToWorldSpaceAR(p),
      N = l.convertToWorldSpaceAR(new __rea_outer_h(0, 0, 0)),
      b = l.convertToWorldSpaceAR(new __rea_outer_h(y.nx, y.ny, 0)),
      v = new __rea_outer_s(b.x - N.x, b.y - N.y);
    return v.lengthSqr() > 0 && v.normalize(), {
      distance: y.distance,
      point: f,
      normal: v,
      kind: "dangban",
      soldier: null
    };
  }
  applyLaunchScale(e, t, i, s) {
    const n = i * s,
      o = t ? t.distance : n,
      l = !t || o >= n - .5 ? i : Math.max(o / s, .01);
    e.setScale(l, 1, 1);
  }
  showBounce(e, t, i, s, n, o, l) {
    var h;
    let a = e.bounceNode;
    null != (h = a) && h.isValid || (a = __rea_outer_r(e.launch), a.name = `${e.launch.name}_bounce`, a.setParent(t), e.bounceNode = a), a.setWorldPosition(i), this.setNodeAngle(a, s), this.applyLaunchScale(a, n, o, l), this.setNodeActive(a, !0);
  }
  destroyBounce(e) {
    const t = e.bounceNode;
    e.bounceNode = null, null != t && t.isValid && t.destroy();
  }
  destroyRoundBounces(e) {
    e && (this.destroyBounce(e.player), e.enemies.forEach(e => {
      this.destroyBounce(e);
    }));
  }
  destroyAllBounces() {
    this.rounds.forEach(e => {
      this.destroyRoundBounces(e);
    });
  }
  clearAimFrames(e) {
    [e.player, ...e.enemies].forEach(e => {
      this.setNodeActive(e.parts.frame1, !1), this.setNodeActive(e.parts.frame2, !1);
    });
  }
  resetRoundSoldiers(e) {
    if (!e) return;
    [e.player, ...e.enemies].forEach(e => {
      e.isAlive = !0, this.destroyBounce(e), this.setNodeAngle(e.launch, e.prefabAngle), e.launch.setScale(e.prefabScaleX, 1, 1), this.setNodeActive(e.launch, !0), this.setNodeActive(e.parts.root, !0), this.setNodeActive(e.parts.frame, !0), this.setNodeActive(e.parts.head, !0), this.setNodeActive(e.parts.frame1, !1), this.setNodeActive(e.parts.frame2, !1), this.setNodeActive(e.parts.end2, !1);
    }), this.applyHeadFrames();
  }
  showRoundScene(e) {
    this.setNodeActive(this.bg1Node, 0 === e), this.setNodeActive(this.bg2Node, 1 === e), this.rounds.forEach((t, i) => {
      this.setNodeActive(t.sceneNode, i === e);
    }), this.setNodeActive(this.buttonNode, !0), this.setNodeActive(this.directionNode, !0), this.setNodeActive(this.bulletBgNode, !0);
  }
  countLivingEnemies(e) {
    return e.enemies.filter(e => e.isAlive).length;
  }
  getActiveRound() {
    return this.rounds[this.activeRoundIndex] ?? null;
  }
  syncDirection() {
    var e;
    const t = this.getActiveRound();
    t && null != (e = this.directionNode) && e.isValid && this.setNodeAngle(this.directionNode, this.getNodeAngle(t.player.launch));
  }
  applyInitialVisibility() {
    var e;
    this.prepareBackBg(), this.resetResultStamp(this.end1Node), this.resetResultStamp(this.generalEndNode), this.setNodeActive(this.bubbleNode, !1), this.setNodeActive((null == (e = this.bubbleNode) ? void 0 : e.getChildByName("dialog_box_1")) ?? null, !1), this.setNodeActive(this.panelDemoNode, !1), this.setNodeActive(this.clickRootNode, !0), this.setNodeActive(this.infoButtonNode, !1), k.forEach(e => {
      var t;
      this.setNodeActive((null == (t = this.gameNode) ? void 0 : t.getChildByName(e)) ?? null, !1);
    }), this.rounds.forEach(e => {
      this.resetRoundSoldiers(e);
    }), this.showRoundScene(0), this.shotsUsed = 0, this.refreshBulletUi(), this.syncDirection();
  }
  prepareBackBg() {
    const e = this.backBgNode;
    if (null == e || !e.isValid) return;
    const t = e.getComponent(__rea_outer_d);
    t && (t.color = x), __rea_outer_T(e, 0), this.setNodeActive(e, !1);
  }
  applyHeadFrames() {
    this.rounds.forEach(e => {
      this.applyHeadFrame(e.player, this.playerHeadFrame), e.enemies.forEach(e => {
        this.applyHeadFrame(e, this.enemyHeadFrame);
      });
    });
  }
  applyHeadFrame(e, t) {
    if (!t) return;
    const i = e.parts.head.getComponent(__rea_outer_d);
    i && (i.spriteFrame = t);
  }
  loadHeadFrames() {
    this.loadSpriteFrame("Texture/oneself/spriteFrame", e => {
      this.playerHeadFrame = e, this.applyHeadFrames();
    }), this.loadSpriteFrame("Texture/enemy/spriteFrame", e => {
      this.enemyHeadFrame = e, this.applyHeadFrames();
    });
  }
  loadSpriteFrame(e, t) {
    const i = __rea_outer_c.getBundle(P);
    if (!i) return console.warn(`[Level_64] missing bundle Level_64 for ${e}`), void t(null);
    i.load(e, __rea_outer_u, (i, s) => {
      if (this.isValid) return i || !s ? (console.warn(`[Level_64] failed to load ${e}`, i), void t(null)) : void t(s);
    });
  }
  playBubbleVoice(e, t) {
    this.voiceToken += 1;
    const i = this.voiceToken;
    this.bubbleLabel && (this.bubbleLabel.string = __rea_outer_f.getInstance().getKey(e)), this.setNodeActive(this.bubbleNode, !0);
    let s = !1;
    const n = () => {
        !s && this.isValid && i === this.voiceToken && (s = !0, this.unschedule(o), t());
      },
      o = () => {
        n();
      };
    this.scheduleOnce(o, 12), this.stopCurrentVoice(), this.currentVoiceKey = e, __rea_outer_p.playEffect_1(e, n);
  }
  stopCurrentVoice() {
    __rea_outer_p.stopVoice(), this.currentVoiceKey && (__rea_outer_p.stopOneEffect(this.currentVoiceKey), this.currentVoiceKey = "");
  }
  hideBubble() {
    this.setNodeActive(this.bubbleNode, !1);
  }
  playResultStamp(e, t, i) {
    __rea_outer_p.playEffect_1(t), null != e && e.isValid ? (this.bringNodeToFront(e), __rea_outer_S(e), e.setScale(0, 0, 1), this.setNodeActive(e, !0), __rea_outer_n(e).to(.8, {
      scale: new __rea_outer_h(1, 1, 1)
    }).delay(.3).call(() => {
      this.isValid && i();
    }).start()) : this.scheduleOnceIfValid(i, 1.1);
  }
  resetResultStamp(e) {
    __rea_outer_S(e), null != e && e.isValid && e.setScale(1, 1, 1), this.setNodeActive(e, !1);
  }
  bringNodeToFront(e) {
    null != e && e.isValid && e.parent && e.setSiblingIndex(e.parent.children.length - 1);
  }
  setInputBlocked(e) {
    var t;
    this.setNodeActive(this.backBgNode, e), !e && null != (t = this.backBgNode) && t.isValid && __rea_outer_T(this.backBgNode, 0);
  }
  resolveReferences() {
    var e, t, i, s, n;
    const o = this.node.getChildByPath("UIPanel");
    this.gameNode = this.node.getChildByPath("UIPanel/gameNode"), this.backBgNode = this.node.getChildByPath("UIPanel/backBG"), this.bubbleNode = this.node.getChildByPath("UIPanel/bubble"), this.bubbleLabel = (null == (e = this.bubbleNode) || null == (e = e.getChildByPath("dialog_box/Label")) ? void 0 : e.getComponent(__rea_outer_m)) ?? null, this.clickRootNode = this.node.getChildByPath("UIPanel/click_root"), this.infoButtonNode = (null == (t = this.clickRootNode) ? void 0 : t.getChildByName("infoButton")) ?? null, this.infoButton = (null == (i = this.infoButtonNode) ? void 0 : i.getComponent(__rea_outer_l)) ?? null, this.setNodeActive(this.infoButtonNode, !1), this.panelDemoNode = this.node.getChildByPath("UIPanel/demo");
    const h = this.gameNode;
    if (h) {
      var a, r, d;
      this.bg1Node = h.getChildByName("bg1"), this.bg2Node = h.getChildByName("bg2"), this.buttonNode = h.getChildByName("button"), this.directionNode = h.getChildByName("direction"), this.bulletBgNode = h.getChildByName("bullet_bg"), this.end1Node = h.getChildByName("end_1"), this.generalEndNode = h.getChildByName("general_end");
      const e = h.getChildByName("Scenc1"),
        t = h.getChildByName("Scenc2"),
        i = (null == (a = this.bulletBgNode) ? void 0 : a.getChildByName("bulletitem")) ?? null,
        s = (null == (r = this.bulletBgNode) ? void 0 : r.getChildByName("bulletitem2")) ?? null,
        n = (null == (d = this.bulletBgNode) ? void 0 : d.getChildByName("bulletitem3")) ?? null,
        o = this.buildRound(1, e, n ? [n] : []),
        l = [s, i].filter(e => !!e),
        c = this.buildRound(2, t, l);
      this.rounds = [o, c].filter(e => !!e);
    }
    this.warnIfMissing("UIPanel", o), this.warnIfMissing("UIPanel/gameNode", this.gameNode), this.warnIfMissing("button", this.buttonNode), this.warnIfMissing("infoButton", this.infoButtonNode), this.warnIfMissing("bubble", this.bubbleNode), this.warnIfMissing("end_1", this.end1Node), this.warnIfMissing("general_end", this.generalEndNode), this.warnIfMissing("Scenc1", (null == (s = this.rounds[0]) ? void 0 : s.sceneNode) ?? null), this.warnIfMissing("Scenc2", (null == (n = this.rounds[1]) ? void 0 : n.sceneNode) ?? null);
  }
  buildRound(e, t, i) {
    if (!t) return null;
    const s = this.buildSoldier(t, "man", "launch", !0);
    if (!s) return console.warn(`[Level_64] missing player in Scenc${e}`), null;
    const n = [],
      o = 1 === e ? 1 : 4;
    for (let i = 1; i <= o; i += 1) {
      const s = this.buildSoldier(t, `man${i}`, `launch${i}`, !1);
      s ? n.push(s) : this.warnIfMissing(`Scenc${e}/man${i}`, null);
    }
    return {
      id: e,
      sceneNode: t,
      dangban: t.getChildByName("dangban"),
      player: s,
      enemies: n,
      bulletItems: i
    };
  }
  buildSoldier(e, t, i, s) {
    const n = e.getChildByName(t),
      o = e.getChildByName(i),
      l = this.readSoldierParts(n);
    return n && o && l ? {
      id: `${e.name}/${t}`,
      isPlayer: s,
      parts: l,
      launch: o,
      prefabAngle: this.getNodeAngle(o),
      prefabScaleX: o.scale.x,
      bounceNode: null,
      isAlive: !0
    } : null;
  }
  readSoldierParts(e) {
    const t = null == e ? void 0 : e.getChildByName("demo"),
      i = null == t ? void 0 : t.getChildByName("frame"),
      s = null == t ? void 0 : t.getChildByName("frame1"),
      n = null == t ? void 0 : t.getChildByName("frame2"),
      o = null == t ? void 0 : t.getChildByName("head"),
      l = null == t ? void 0 : t.getChildByName("end_2");
    return e && t && i && s && n && o && l ? {
      root: e,
      frame: i,
      frame1: s,
      frame2: n,
      head: o,
      end2: l
    } : null;
  }
  getLaunchWidth(e) {
    const t = e.getComponent(__rea_outer_a);
    return t && t.width > 0 ? t.width : 183;
  }
  getNodeAngle(e) {
    return e.eulerAngles.z;
  }
  setNodeAngle(e, t) {
    e.setRotationFromEuler(0, 0, t);
  }
  getTouchWorldPoint(e) {
    const t = e.getUILocation();
    return new __rea_outer_s(t.x, t.y);
  }
  isPointInsideNode(e, t) {
    if (null == e || !e.isValid || !e.activeInHierarchy) return !1;
    const i = e.getComponent(__rea_outer_a);
    return !!i && i.getBoundingBoxToWorld().contains(t);
  }
  setNodeActive(e, t) {
    null != e && e.isValid && (e.active = t);
  }
  scheduleOnceIfValid(e, t) {
    this.scheduleOnce(() => {
      this.isValid && e();
    }, t);
  }
  stopTrackedTweens() {
    __rea_outer_S(this.backBgNode), __rea_outer_S(this.end1Node), __rea_outer_S(this.generalEndNode);
  }
  warnIfMissing(e, t) {
    t || console.warn(`[Level_64] missing ${e}`);
  }
}) || R;
function E(e) {
  return 180 * Math.atan2(e.y, e.x) / Math.PI;
}
__rea_outer_t._RF.pop();
export { __recovered_export_0 as default };
