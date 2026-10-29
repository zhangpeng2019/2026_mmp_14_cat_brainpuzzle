// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/ActionSystem.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { tween as __rea_outer_e } from "cc";
import { Vec3 as __rea_outer_a } from "cc";
import { Sprite as __rea_outer_o } from "cc";
import { error as __rea_outer_i } from "cc";
import { cclegacy as __rea_outer_l } from "cc";
import { setNodeOpacity as __rea_outer_s } from "./CocosCompat";
import { getUIOpacity as __rea_outer_n } from "./CocosCompat";
let __recovered_export_0;
__rea_outer_l._RF.push({}, "79fbbMpFh1EDZ1tABJAAI7A", "ActionSystem", void 0);
__recovered_export_0 = class {
  constructor() {}
  static shakeRepeat(t, a, o, i) {
    __rea_outer_e(t).sequence(__rea_outer_e().by(a, {
      angle: o
    }), __rea_outer_e().by(a, {
      angle: -o
    }), __rea_outer_e().by(a, {
      angle: -o
    }), __rea_outer_e().by(a, {
      angle: o
    }), __rea_outer_e().delay(i)).repeatForever().start();
  }
  static rotateRepeat(t, a) {
    __rea_outer_e(t).by(a, {
      angle: 360
    }).repeatForever().start();
  }
  static scaleRepeat(t, o, i, l) {
    __rea_outer_e(t).sequence(__rea_outer_e().to(o, {
      scale: new __rea_outer_a(1 + i, 1 + i, 1)
    }), __rea_outer_e().to(o, {
      scale: new __rea_outer_a(1, 1, 1)
    }), __rea_outer_e().delay(l)).repeatForever().start();
  }
  static scaleRepeat_1(t, o, i, l, s) {
    t.setScale(i, i, 1), __rea_outer_e(t).sequence(__rea_outer_e().to(o, {
      scale: new __rea_outer_a(l, l, 1)
    }), __rea_outer_e().to(o, {
      scale: new __rea_outer_a(i, i, 1)
    }), __rea_outer_e().delay(s)).repeatForever().start();
  }
  static scaleBackOut(t, o, i, l) {
    __rea_outer_e(t).delay(l).to(o, {
      scale: new __rea_outer_a(i, i, 1)
    }).to(5 * o, {
      scale: new __rea_outer_a(1, 1, 1)
    }, {
      easing: "backOut"
    }).start();
  }
  static scale_Breathe(t, o, i, l, s, n) {
    __rea_outer_e(t).delay(s).to(o, {
      scale: new __rea_outer_a(l, l, 1)
    }).to(o, {
      scale: new __rea_outer_a(i, i, 1)
    }, {
      easing: "backOut"
    }).call(function () {
      n && n();
    }).start();
  }
  static scaleY(t, o, i, l, s, n) {
    t.setScale(t.scale.x, i, t.scale.z), __rea_outer_e(t).delay(s).to(o, {
      scale: new __rea_outer_a(t.scale.x, l, t.scale.z)
    }, {
      easing: "backOut"
    }).call(function () {
      n && n();
    }).start();
  }
  static scaleX_Simple(t, o, i, l, s, n, c, r) {
    t.setScale(o, t.scale.y, t.scale.z), __rea_outer_e(t).delay(c).to(s, {
      scale: new __rea_outer_a(i, t.scale.y, t.scale.z)
    }, {
      easing: "backOut"
    }).to(n, {
      scale: new __rea_outer_a(l, t.scale.y, t.scale.z)
    }, {
      easing: "backOut"
    }).call(function () {
      t.setScale(1, t.scale.y, t.scale.z), r && r();
    }).start();
  }
  static scale_Simple(t, o, i, l, s, n) {
    t.setScale(i, i, 1), __rea_outer_e(t).delay(s).to(o, {
      scale: new __rea_outer_a(l, l, 1)
    }, {
      easing: "backOut"
    }).call(function () {
      n && n();
    }).start();
  }
  static scale_Simple2(t, o, i, l, s, n, c, r) {
    t.setScale(i, l, 1), __rea_outer_e(t).delay(c).to(o, {
      scale: new __rea_outer_a(s, n, 1)
    }).call(function () {
      r && r();
    }).start();
  }
  static simple_MoveY(t, o, i, l, s, n) {
    __rea_outer_e(t).delay(s).to(o, {
      position: new __rea_outer_a(i.x, i.y + l, i.z)
    }).call(function () {
      n && n();
    }).start();
  }
  static simple_MoveToY(t, o, i, l, s, n) {
    __rea_outer_e(t).delay(s).to(o, {
      position: new __rea_outer_a(i.x, l, i.z)
    }).call(function () {
      n && n();
    }).start();
  }
  static simple_MoveToX(t, o, i, l, s, n) {
    __rea_outer_e(t).delay(s).to(o, {
      position: new __rea_outer_a(l, i.y, i.z)
    }).call(function () {
      n && n();
    }).start();
  }
  static moveFAndB(t, o, i, l, s, n, c, r, p, d, u) {
    __rea_outer_e(t).delay(r).to(o, {
      position: new __rea_outer_a(l + n, s + c, t.position.z)
    }, {
      easing: p
    }).delay(r).to(i, {
      position: new __rea_outer_a(l, s, t.position.z)
    }, {
      easing: d
    }).call(function () {
      u && u();
    }).start();
  }
  static moveInter(t, o, i, l, s, n, c, r, p, d, u) {
    __rea_outer_e(t).to(o, {
      position: new __rea_outer_a(l + n, s + c, t.position.z)
    }, {
      easing: p
    }).delay(r).to(o, {
      position: new __rea_outer_a(l + n + n, s + c, t.position.z)
    }, {
      easing: p
    }).call(function () {
      u && u(), t.setPosition(l, s, t.position.z);
    }).start();
  }
  static fadeOut(t, a, o, i, l, c) {
    __rea_outer_s(t, o);
    const r = __rea_outer_n(t);
    __rea_outer_e(r).delay(l).to(a, {
      opacity: i
    }).call(function () {
      c && c();
    }).start();
  }
  static rotate_Simple(t, a, o, i, l) {
    __rea_outer_e(t).to(a, {
      angle: o
    }).call(function () {
      l && l();
    }).start();
  }
  static rotate_Move(t, o, i, l, s, n, c) {
    __rea_outer_e(t).delay(n).parallel(__rea_outer_e().to(o, {
      angle: i
    }), __rea_outer_e().to(o, {
      position: new __rea_outer_a(s.x, s.y, t.position.z)
    })).call(function () {
      c && c();
    }).start();
  }
  static move_Simper(t, o, i, l, s, n) {
    __rea_outer_e(t).delay(s).to(o, {
      position: new __rea_outer_a(l.x, l.y, l.z)
    }).call(function () {
      n && n();
    }).start();
  }
  static fadeOut_Move(t, o, i, l, c, r, p) {
    const d = __rea_outer_n(t);
    __rea_outer_s(t, i), __rea_outer_e(t).delay(r).parallel(__rea_outer_e(d).to(o, {
      opacity: l
    }), __rea_outer_e().to(o, {
      position: new __rea_outer_a(c.x, c.y, t.position.z)
    })).call(function () {
      p && p();
    }).start();
  }
  static Scale_Move(t, o, i, l, s, n, c) {
    __rea_outer_e(t).delay(n).parallel(__rea_outer_e().to(o, {
      scale: new __rea_outer_a(i, i, 1)
    }), __rea_outer_e().to(o, {
      position: new __rea_outer_a(s.x, s.y, t.position.z)
    })).call(function () {
      c && c();
    }).start();
  }
  static ChangeFillRange(t, a, l, s, n) {
    if (void 0 === a && (a = 0), void 0 === l && (l = 1), void 0 === s && (s = 1), null != t) {
      s < 0 && (s = 0);
      var c = t.getComponent(__rea_outer_o);
      c ? (c.fillRange = a, __rea_outer_e(c).to(s, {
        fillRange: l
      }).call(function () {
        n && n();
      }).start()) : (n && n(), __rea_outer_i(t.name, "Not found sprite Component"));
    } else n && n();
  }
  static ChangeFillRange_tag(t, a, l, s, n, c, r, p) {
    if (void 0 === a && (a = 0), void 0 === l && (l = 0), void 0 === s && (s = 1), void 0 === n && (n = 1), void 0 === c && (c = 0), void 0 === p && (p = -99), null != t) {
      n < 0 && (n = 0);
      var d = t.getComponent(__rea_outer_o);
      d ? (d.fillStart = a, d.fillRange = l, __rea_outer_e(d).tag(p).delay(c).to(n, {
        fillRange: s
      }).call(function () {
        r && r();
      }).start()) : (r && r(), __rea_outer_i(t.name, "Not found sprite Component"));
    } else r && r();
  }
  static MoveSimper_tag(t, o, i, l, s, n, c, r, p) {
    void 0 === o && (o = 0), void 0 === i && (i = 0), void 0 === l && (l = 0), void 0 === s && (s = 0), void 0 === n && (n = 1), void 0 === c && (c = 0), void 0 === p && (p = -99), t.setPosition(o, i, t.position.z), __rea_outer_e(t).tag(p).delay(c).to(n, {
      position: new __rea_outer_a(l, s, t.position.z)
    }).call(function () {
      r && r();
    }).start();
  }
  static FadeOut_tag(t, a, o, i, l, c, r) {
    void 0 === l && (l = 0), void 0 === r && (r = -99);
    const p = __rea_outer_n(t);
    __rea_outer_s(t, a), __rea_outer_e(p).tag(r).delay(l).to(i, {
      opacity: o
    }).call(function () {
      c && c();
    }).start();
  }
  static RoseBreath_tag(t, o, i, l, s, n) {
    void 0 === s && (s = 0), void 0 === n && (n = -99), __rea_outer_e(t).tag(n).sequence(__rea_outer_e().to(l, {
      scale: new __rea_outer_a(t.scale.x, o, t.scale.z)
    }), __rea_outer_e().to(l, {
      scale: new __rea_outer_a(t.scale.x, o + i, t.scale.z)
    }), __rea_outer_e().delay(s)).repeatForever().start();
  }
  static Shake_tag(t, o = 1, i = -2, l = 1 / 6, s = 0, n = -99) {
    if (null == t || !t.isValid) return;
    void 0 === o && (o = 1), void 0 === i && (i = -2), void 0 === l && (l = 1 / 6), void 0 === s && (s = 0), void 0 === n && (n = -99);
    const c = t.position.clone(),
      r = t.angle;
    __rea_outer_e(t).tag(n).sequence(__rea_outer_e().to(l, {
      position: new __rea_outer_a(c.x + o, c.y, c.z),
      angle: r + i
    }), __rea_outer_e().to(l, {
      position: c.clone(),
      angle: r
    }), __rea_outer_e().delay(s)).repeatForever().start();
  }
  static Scale_Simple_tag(t, o, i, l, s, n, c, r, p) {
    void 0 === c && (c = 0), void 0 === p && (p = -99), t.setScale(o, i, 1), __rea_outer_e(t).tag(p).delay(c).to(n, {
      scale: new __rea_outer_a(l, s, 1)
    }).call(function () {
      r && r();
    }).start();
  }
  static Rotate_Simple_tag(t, a, o, i, l, s) {
    void 0 === s && (s = -99), __rea_outer_e(t).tag(s).delay(i).to(a, {
      angle: o
    }).call(function () {
      l && l();
    }).start();
  }
}, __rea_outer_l._RF.pop();
export { __recovered_export_0 as default };
