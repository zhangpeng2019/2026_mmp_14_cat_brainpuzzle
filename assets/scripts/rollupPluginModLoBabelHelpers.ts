// @ts-nocheck
// Recovered from unpacked/base/assets/src/chunks/bundle.f109b.js; module chunks:///_virtual/rollupPluginModLoBabelHelpers.js
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.

let __recovered_export_0, __recovered_export_1;
__recovered_export_0 = function (e, i, r, n, l) {
  var t = {};
  Object.keys(n).forEach(function (e) {
    t[e] = n[e];
  }), t.enumerable = !!t.enumerable, t.configurable = !!t.configurable, ("value" in t || t.initializer) && (t.writable = !0);
  t = r.slice().reverse().reduce(function (r, n) {
    return n(e, i, r) || r;
  }, t), l && void 0 !== t.initializer && (t.value = t.initializer ? t.initializer.call(l) : void 0, t.initializer = void 0);
  void 0 === t.initializer && (Object.defineProperty(e, i, t), t = null);
  return t;
}, __recovered_export_1 = function (e, i, r, n) {
  if (!r) return;
  Object.defineProperty(e, i, {
    enumerable: r.enumerable,
    configurable: r.configurable,
    writable: r.writable,
    value: r.initializer ? r.initializer.call(n) : void 0
  });
};
export { __recovered_export_0 as applyDecoratedDescriptor, __recovered_export_1 as initializerDefineProperty };
