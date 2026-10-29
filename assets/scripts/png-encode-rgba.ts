// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/png-encode-rgba.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_e } from "cc";
let __recovered_export_0;
__rea_outer_e._RF.push({}, "aa699RRtNtHZ6Z9ES0RNkw9", "png-encode-rgba", void 0);
const n = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]),
  r = (() => {
    const t = new Uint32Array(256);
    for (let e = 0; e < 256; e++) {
      let n = e;
      for (let t = 0; t < 8; t++) n = 0 != (1 & n) ? 3988292384 ^ n >>> 1 : n >>> 1;
      t[e] = n >>> 0;
    }
    return t;
  })(),
  s = t => {
    const e = (t => {
        const e = [];
        let n = 0;
        for (; n < t.length;) {
          const r = Math.min(65535, t.length - n),
            s = n + r >= t.length ? 1 : 0,
            o = new Uint8Array(5);
          o[0] = s;
          const a = 65535 & ~r;
          o[1] = 255 & r, o[2] = r >> 8 & 255, o[3] = 255 & a, o[4] = a >> 8 & 255, e.push(o), e.push(t.subarray(n, n + r)), n += r;
        }
        const r = e.reduce((t, e) => t + e.length, 0),
          s = new Uint8Array(r);
        let o = 0;
        for (const t of e) s.set(t, o), o += t.length;
        return s;
      })(t),
      n = (t => {
        let e = 1,
          n = 0;
        for (let r = 0; r < t.length; r++) e = (e + t[r]) % 65521, n = (n + e) % 65521;
        return (n << 16 | e) >>> 0;
      })(t),
      r = new Uint8Array(2 + e.length + 4);
    r[0] = 120, r[1] = 1, r.set(e, 2);
    return new DataView(r.buffer, r.byteOffset + 2 + e.length).setUint32(0, n, !1), r;
  },
  o = (t, e) => {
    const n = new Uint8Array(4);
    for (let e = 0; e < 4; e++) n[e] = t.charCodeAt(e);
    const s = e.length,
      o = new Uint8Array(4 + s);
    o.set(n, 0), o.set(e, 4);
    const a = (t => {
        let e = 4294967295;
        for (let n = 0; n < t.length; n++) e = r[255 & (e ^ t[n])] ^ e >>> 8;
        return (4294967295 ^ e) >>> 0;
      })(o),
      c = new Uint8Array(8 + s + 4),
      i = new DataView(c.buffer);
    return i.setUint32(0, s, !1), c.set(n, 4), c.set(e, 8), i.setUint32(8 + s, a, !1), c;
  };
__recovered_export_0 = (t, e, r) => {
  const a = 4 * t,
    c = new Uint8Array((a + 1) * e);
  for (let t = 0; t < e; t++) {
    const e = t * (a + 1);
    c[e] = 0, c.set(r.subarray(t * a, t * a + a), e + 1);
  }
  const i = s(c),
    l = new Uint8Array(13),
    u = new DataView(l.buffer);
  u.setUint32(0, t, !1), u.setUint32(4, e, !1), l[8] = 8, l[9] = 6, l[10] = 0, l[11] = 0, l[12] = 0;
  const f = [n, o("IHDR", l), o("IDAT", i), o("IEND", new Uint8Array(0))],
    g = f.reduce((t, e) => t + e.length, 0),
    w = new Uint8Array(g);
  let h = 0;
  for (const t of f) w.set(t, h), h += t.length;
  return w;
};
__rea_outer_e._RF.pop();
export { __recovered_export_0 as encodeRgbaToPng };
