// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/prefab-registry.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
let __recovered_export_0;
var i;
__rea_outer_t._RF.push({}, "4cb19cntjZJ4IETDm7mPPqN", "prefab-registry", void 0);
class s {
  constructor() {
    this._viewInfoMap = new Map(), this._typeToKeyMap = new Map(), this._isInitialized = !1;
  }
  static getInstance() {
    return s.instance;
  }
  registerView(e, t, i) {
    this._viewInfoMap.set(e, i), this._typeToKeyMap.set(t, e);
  }
  markAsInitialized() {
    this._isInitialized = !0;
  }
  isInitialized() {
    return this._isInitialized;
  }
  tryGetKeyByType(e) {
    return this._typeToKeyMap.get(e) || null;
  }
  tryGetViewInfo(e) {
    return this._viewInfoMap.get(e) || null;
  }
  isRegistered(e) {
    return this._viewInfoMap.has(e);
  }
  getAllRegisteredViews() {
    return Array.from(this._viewInfoMap.values());
  }
  clear() {
    this._viewInfoMap.clear(), this._typeToKeyMap.clear(), this._isInitialized = !1;
  }
}
__recovered_export_0 = s, i = s, s.instance = new i(), __rea_outer_t._RF.pop();
export { __recovered_export_0 as PrefabRegistry };
