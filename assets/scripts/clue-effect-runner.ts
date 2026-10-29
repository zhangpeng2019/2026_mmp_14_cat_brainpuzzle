// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/clue-effect-runner.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { Tween as __rea_outer_t } from "cc";
import { Sprite as __rea_outer_o } from "cc";
import { tween as __rea_outer_n } from "cc";
import { Color as __rea_outer_r } from "cc";
import { UITransform as __rea_outer_s } from "cc";
import { Vec3 as __rea_outer_i } from "cc";
import { cclegacy as __rea_outer_a } from "cc";
import { stopAllTweens as __rea_outer_l } from "./CocosCompat";
import { ClueEffectKind as __rea_outer_c } from "./clue-level-types";
import { DEFAULT_EFFECT_DURATION as __rea_outer_u } from "./clue-level-types";
import { CONFIRM_VISIBLE_ALPHA as __rea_outer_d } from "./clue-level-types";
import { DEFAULT_SWAP_DURATION as __rea_outer_h } from "./clue-level-types";
import { DEFAULT_SHAKE_AMPLITUDE as __rea_outer_v } from "./clue-level-types";
import { DEFAULT_SHAKE_HALF_DURATION as __rea_outer_p } from "./clue-level-types";
import { DEFAULT_SHAKE_CYCLES as __rea_outer_f } from "./clue-level-types";
let __recovered_export_0, __recovered_export_1;
__rea_outer_a._RF.push({}, "97921SoiOtO/bcEIUTUKky3", "clue-effect-runner", void 0);
const w = __recovered_export_0 = 700;
__recovered_export_1 = class {
  constructor(e, t) {
    this.resolver = void 0, this.customHandler = void 0, this.animatedNodes = new Set(), this.resolver = e, this.customHandler = t;
  }
  runAll(e, t) {
    e && 0 !== e.length ? this.runSequence(e, 0, t) : null == t || t();
  }
  run(e, t) {
    const o = t ?? (() => {});
    switch (e.kind) {
      case __rea_outer_c.Show:
        return this.setActive(e, !0), void o();
      case __rea_outer_c.Hide:
        return this.setActive(e, !1), void o();
      case __rea_outer_c.SetTexture:
        return this.setTexture(e), void o();
      case __rea_outer_c.FadeIn:
        return void this.fadeIn(e, o);
      case __rea_outer_c.MoveTo:
        return void this.moveTo(e, o);
      case __rea_outer_c.SwapPositions:
        return void this.swapPositions(e, o);
      case __rea_outer_c.Shake:
        return void this.shake(e, o);
      default:
        this.runCustom(e, o);
    }
  }
  stopAll() {
    __rea_outer_t.stopAllByTag(w), this.animatedNodes.forEach(e => {
      e.isValid && __rea_outer_l(e);
    }), this.animatedNodes.clear();
  }
  runSequence(e, t, o) {
    t >= e.length ? null == o || o() : this.run(e[t], () => {
      this.runSequence(e, t + 1, o);
    });
  }
  runCustom(e, t) {
    this.customHandler(e, t) || (console.warn(`[ClueEffectRunner] 未知效果类型: ${e.kind} -> ${e.target}`), t());
  }
  setActive(e, t) {
    const o = this.requireNode(e);
    o && (o.active = t);
  }
  setTexture(e) {
    const t = this.requireSprite(e);
    if (!t || !e.toward) return;
    const o = this.resolver.resolveSprite(e.toward);
    null != o && o.spriteFrame ? (t.spriteFrame = o.spriteFrame, t.node.active = !0) : console.warn(`[ClueEffectRunner] SetTexture 源节点无 SpriteFrame: ${e.toward}`);
  }
  fadeIn(e, s) {
    const i = this.requireNode(e);
    if (!i) return void s();
    i.active = !0;
    const a = i.getComponent(__rea_outer_o);
    if (!a) return void s();
    this.animatedNodes.add(i), __rea_outer_t.stopAllByTarget(a);
    const l = a.color;
    __rea_outer_n(a).tag(w).to(e.duration ?? __rea_outer_u, {
      color: new __rea_outer_r(l.r, l.g, l.b, __rea_outer_d)
    }).call(s).start();
  }
  moveTo(e, t) {
    const o = this.requireNode(e);
    if (!o || !e.toward) return void t();
    const r = this.resolver.resolveNode(e.toward),
      i = o.parent;
    if (null == r || !r.isValid || null == i || !i.isValid) return console.warn(`[ClueEffectRunner] MoveTo 目标不可用: ${e.target} -> ${e.toward}`), void t();
    const a = i.getComponent(__rea_outer_s),
      c = a ? a.convertToNodeSpaceAR(r.worldPosition.clone()) : r.position.clone();
    this.animatedNodes.add(o), __rea_outer_l(o), __rea_outer_n(o).tag(w).to(e.duration ?? __rea_outer_u, {
      position: c
    }).call(t).start();
  }
  swapPositions(e, t) {
    const o = this.requireNode(e),
      r = e.toward ? this.resolver.resolveNode(e.toward) : null;
    if (!o || null == r || !r.isValid) return console.warn(`[ClueEffectRunner] SwapPositions 节点不可用: ${e.target} <-> ${e.toward}`), void t();
    const s = o.position.clone(),
      i = r.position.clone(),
      a = e.duration ?? __rea_outer_h;
    this.animatedNodes.add(o), this.animatedNodes.add(r), __rea_outer_l(o), __rea_outer_l(r);
    let c = 0;
    const u = () => {
      c += 1, c >= 2 && t();
    };
    __rea_outer_n(o).tag(w).to(a, {
      position: i
    }).call(u).start(), __rea_outer_n(r).tag(w).to(a, {
      position: s
    }).call(u).start();
  }
  shake(e, t) {
    const o = this.requireNode(e);
    if (!o) return void t();
    const r = e.axis ?? "horizontal",
      s = e.amplitude ?? __rea_outer_v,
      a = e.duration ?? __rea_outer_p,
      c = Math.max(1, e.cycles ?? __rea_outer_f),
      u = o.position.clone();
    this.animatedNodes.add(o), __rea_outer_l(o);
    const d = __rea_outer_n(o).tag(w);
    for (let e = 0; e < c; e += 1) {
      const t = s * (e === c - 1 ? 0 : 1 - .2 * e);
      "horizontal" === r ? d.to(a, {
        position: new __rea_outer_i(u.x + t, u.y, u.z)
      }).to(a, {
        position: new __rea_outer_i(u.x - t, u.y, u.z)
      }) : d.to(a, {
        position: new __rea_outer_i(u.x, u.y + t, u.z)
      }).to(a, {
        position: new __rea_outer_i(u.x, u.y - t, u.z)
      });
    }
    d.to(a, {
      position: u
    }).call(t).start();
  }
  requireNode(e) {
    const t = this.resolver.resolveNode(e.target);
    return null != t && t.isValid ? t : (console.warn(`[ClueEffectRunner] 效果目标节点缺失，已跳过: ${e.target}`), null);
  }
  requireSprite(e) {
    const t = this.resolver.resolveSprite(e.target);
    return t || (console.warn(`[ClueEffectRunner] 效果目标缺少 Sprite 组件: ${e.target}`), null);
  }
}, __rea_outer_a._RF.pop();
export { __recovered_export_0 as CLUE_EFFECT_TWEEN_TAG, __recovered_export_1 as default };
