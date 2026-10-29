// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/HashMap.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
let __recovered_export_0;
__rea_outer_t._RF.push({}, "66d75JCtD9HtY2qzzBoRPhz", "HashMap", void 0);
__recovered_export_0 = class {
  constructor() {
    this.mKeyValueList = [], this.clear();
  }
  get(e) {
    for (var t = 0; t < this.mKeyValueList.length; ++t) {
      var r = this.mKeyValueList[t];
      if (r.key === e) return r.value;
    }
    return null;
  }
  getIndexByKey(e) {
    for (var t = 0; t < this.mKeyValueList.length; ++t) if (this.mKeyValueList[t].key === e) return t;
    return -1;
  }
  getDataByIndex(e) {
    if (e < 0) throw new Error("Error:index Can not be less than 0!");
    for (var t = 0; t < this.mKeyValueList.length; ++t) if (t === e) return this.mKeyValueList[t];
    return null;
  }
  set(e, t) {
    if (null === e || null === t || void 0 === e || void 0 === t) throw new Error("Error:key or value Can not be defined as null or undefine !!!");
    var r = {
        key: e,
        value: t
      },
      i = this.getIndexByKey(e);
    -1 === i ? this.mKeyValueList.push(r) : this.mKeyValueList[i] = r;
  }
  delete(e) {
    for (var t = 0; t < this.mKeyValueList.length; ++t) if (this.mKeyValueList[t].key === e) return this.mKeyValueList.splice(t, 1), !0;
    return !1;
  }
  has(e) {
    for (var t = 0; t < this.mKeyValueList.length; ++t) if (this.mKeyValueList[t].key === e) return !0;
    return !1;
  }
  getSize() {
    return this.mKeyValueList.length;
  }
  forEach(e) {
    for (var t = 0; t < this.mKeyValueList.length; ++t) {
      var r = this.mKeyValueList[t];
      e && e(r.value, r.key, r);
    }
  }
  forEachMap(e) {
    for (var t = 0; t < this.mKeyValueList.length; ++t) {
      var r = this.mKeyValueList[t];
      e && e(r);
    }
  }
  clear() {
    this.mKeyValueList = [];
  }
}, __rea_outer_t._RF.pop();
export { __recovered_export_0 as default };
