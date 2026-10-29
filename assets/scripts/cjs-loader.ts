// @ts-nocheck
// Recovered from unpacked/base/assets/src/chunks/bundle.f109b.js; module chunks:///_virtual/cjs-loader.mjs
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.

let __recovered_export_0;
__recovered_export_0 = new class {
  constructor() {
    this._registry = {}, this._moduleCache = {};
  }
  define(e, r, t) {
    this._registry[e] = {
      factory: r,
      resolveMap: t
    };
  }
  require(e) {
    return this._require(e);
  }
  throwInvalidWrapper(e, r) {
    throw new Error(`Module '${e}' imported from '${r}' is expected be an ESM-wrapped CommonJS module but it doesn't.`);
  }
  _require(e, r) {
    const t = this._moduleCache[e];
    if (t) return t.exports;
    const o = {
      id: e,
      exports: {}
    };
    return this._moduleCache[e] = o, this._tryModuleLoad(o, e), o.exports;
  }
  _resolve(e, r) {
    return this._resolveFromInfos(e, r) || this._throwUnresolved(e, r);
  }
  _resolveFromInfos(e, r) {
    var t;
    return e in cjsInfos ? e : r ? (null == (t = cjsInfos[r]) ? void 0 : t.resolveCache[e]) ?? void 0 : void 0;
  }
  _tryModuleLoad(e, r) {
    let t = !0;
    try {
      this._load(e, r), t = !1;
    } finally {
      t && delete this._moduleCache[r];
    }
  }
  _load(e, r) {
    const {
        factory: t,
        resolveMap: o
      } = this._loadWrapper(r),
      i = this._createRequire(e),
      s = o ? this._createRequireWithResolveMap("function" == typeof o ? o() : o, i) : i;
    t(e.exports, s, e);
  }
  _loadWrapper(e) {
    return e in this._registry ? this._registry[e] : this._loadHostProvidedModules(e);
  }
  _loadHostProvidedModules(e) {
    return {
      factory: (r, t, o) => {
        if ("undefined" == typeof require) throw new Error(`Current environment does not provide a require() for requiring '${e}'.`);
        try {
          o.exports = require(e);
        } catch (r) {
          throw new Error(`Exception thrown when calling host defined require('${e}').`, {
            cause: r
          });
        }
      }
    };
  }
  _createRequire(e) {
    return r => this._require(r, e);
  }
  _createRequireWithResolveMap(e, r) {
    return t => {
      const o = e[t];
      if (o) return r(o);
      throw new Error("Unresolved specifier " + t);
    };
  }
  _throwUnresolved(e, r) {
    throw new Error(`Unable to resolve ${e} from ${parent}.`);
  }
}();
export { __recovered_export_0 as default };
