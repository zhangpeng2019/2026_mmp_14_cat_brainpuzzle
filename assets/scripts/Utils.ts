// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Utils.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { UITransform as __rea_outer_e } from "cc";
import { Vec3 as __rea_outer_o } from "cc";
import { Vec2 as __rea_outer_n } from "cc";
import { resources as __rea_outer_r } from "cc";
import { Animation as __rea_outer_i } from "cc";
import { cclegacy as __rea_outer_c } from "cc";
let __recovered_export_0;
__rea_outer_c._RF.push({}, "8a2a5tUXf1Hp5bK0j0+01gC", "Utils", void 0);
class l {
  static cheakCollierBox(t, o) {
    const n = t.getComponent(__rea_outer_e),
      r = o.getComponent(__rea_outer_e);
    return !(!n || !r) && n.getBoundingBoxToWorld().intersects(r.getBoundingBoxToWorld());
  }
  static cheakCollierPoint(t, r) {
    const i = r.getComponent(__rea_outer_e),
      c = t.getComponent(__rea_outer_e);
    if (!i || !c) return !1;
    const l = c.convertToWorldSpaceAR(__rea_outer_o.ZERO);
    return i.getBoundingBoxToWorld().contains(new __rea_outer_n(l.x, l.y));
  }
  static isNodeInsideSpriteArea(t, e) {
    return l.isNodeCenterInsideNodeArea(t, e.node);
  }
  static isNodeCenterInsideNodeArea(t, o) {
    const r = o.getComponent(__rea_outer_e),
      i = t.getComponent(__rea_outer_e);
    if (!r || !i) return !1;
    const c = r.getBoundingBoxToWorld(),
      l = i.getBoundingBoxToWorld(),
      s = new __rea_outer_n(l.x + .5 * l.width, l.y + .5 * l.height);
    return c.contains(s);
  }
  static clock(t) {
    let e = Math.floor(t);
    const o = Math.floor(e / 3600);
    e -= 3600 * o;
    const n = Math.floor(e / 60);
    e -= 60 * n;
    const r = Math.floor(e),
      i = t => t < 10 ? `0${t}` : `${t}`;
    return `${i(o)}:${i(n)}:${i(r)}`;
  }
  static getDistance(t, e) {
    return __rea_outer_o.distance(t.position, e.position);
  }
  static loadRes(t, e) {
    __rea_outer_r.load(t, (t, o) => {
      if (t) return console.log(`Loading failed${t}`), void e(null);
      e(o);
    });
  }
  static getMinValIndex(t, e) {
    let o = 0,
      n = 0,
      r = !1;
    for (let i = 0; i < t.length; i++) if (console.log(`Sorting${i}`), -1 === e.indexOf(i)) {
      if (console.log(`Sorting++${i}`), r || (n = t[i], o = i, r = !0), n > t[i] && (n = t[i], o = i), i === t.length - 1) return console.log(`Minimum value${n}Subscript${o}`), o;
    } else if (i === t.length - 1) return console.log(`Minimum--${n}Subscript${o}`), o;
    return o;
  }
  static getTouchName(t) {
    for (let e = 0; e < t.length; e++) if ("_" === t[e]) return t.substring(0, e);
    return t;
  }
  static getTouchNum(t) {
    for (let e = 0; e < t.length; e++) if ("_" === t[e]) return parseInt(t.substring(e + 1), 10);
    return NaN;
  }
  static getTouchName_1(t) {
    for (let e = 0; e < t.length; e++) if ("_" === t[e]) return t.substring(e + 1);
    return t;
  }
  static SetNodeChildActive(t, e = !1, o) {
    if (t) {
      for (let o = 0; o < t.children.length; o++) t.children[o].active !== e && (t.children[o].active = e);
      if (o) for (let n = 0; n < o.length; n++) {
        const r = o[n];
        if ("number" == typeof r) {
          const o = t.children[r];
          o && (o.active = !e);
        } else r && (r.active = !e);
      }
    }
  }
  static QuickSort(t, e, o) {
    if (t.length <= 1) return;
    const n = l.partition(t, e, o);
    e < n - 1 && l.QuickSort(t, e, n - 1), n < o && l.QuickSort(t, n, o);
  }
  static partition(t, e, o) {
    const n = t[Math.floor((o + e) / 2)];
    let r = e,
      i = o;
    for (; r <= i;) {
      for (; t[r] < n;) r++;
      for (; t[i] > n;) i--;
      if (r <= i) {
        const e = t[r];
        t[r] = t[i], t[i] = e, r++, i--;
      }
    }
    return r;
  }
  static PlayAni(t, e, o, n) {
    var r;
    const c = t.getComponent(__rea_outer_i);
    if (!c) return console.error(t.name, "No animated components"), void (null == e || e());
    c.play(o);
    const l = c.getState(o),
      s = (null == l ? void 0 : l.duration) ?? (null == (r = c.defaultClip) ? void 0 : r.duration) ?? 0;
    setTimeout(() => {
      null == e || e();
    }, 1e3 * s);
  }
  static ShuffleArray(t) {
    for (let e = t.length - 1; e > 0; e--) {
      const o = Math.floor(Math.random() * (e + 1)),
        n = t[e];
      t[e] = t[o], t[o] = n;
    }
    return t;
  }
}
__recovered_export_0 = l, __rea_outer_c._RF.pop();
export { __recovered_export_0 as default };
