// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/LifePoolData.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { NodePool as __rea_outer_e } from "cc";
import { Prefab as __rea_outer_a } from "cc";
import { instantiate as __rea_outer_t } from "cc";
import { cclegacy as __rea_outer_l } from "cc";
import { default as __rea_outer_s } from "./FJAssetManager";
let __recovered_export_0;
__rea_outer_l._RF.push({}, "5b603HpLdZEraRl0KrGjWdO", "LifePoolData", void 0);
class i {
  constructor() {
    this.color_1_Pool = new __rea_outer_e(), this.color_2_Pool = new __rea_outer_e(), this.color_3_Pool = new __rea_outer_e(), this.sheepPool = new __rea_outer_e(), this.food_1_Pool = new __rea_outer_e(), this.smogPool = new __rea_outer_e(), this.obstacle_45 = new __rea_outer_e(), this.signLine_45 = new __rea_outer_e();
  }
  static getInstance() {
    return i._instance || (i._instance = new i()), i._instance;
  }
  initAllPool() {}
  initPoo_Level_45() {
    this.obstacle_45.clear(), this.createObsPool(), this.signLine_45.clear(), this.createLinePool();
  }
  loadPrefabPool(o, e, l, i) {
    return new Promise(n => {
      __rea_outer_s.load(o, e, __rea_outer_a, () => {}, o => {
        for (let e = 0; e < i; e++) l.put(__rea_outer_t(o));
        n();
      });
    });
  }
  async createColor_1_Pool() {
    await this.loadPrefabPool(__rea_outer_s.BundleName.PREFABS, "color_1", this.color_1_Pool, 10);
  }
  async createColor_2_Pool() {
    await this.loadPrefabPool(__rea_outer_s.BundleName.PREFABS, "color_2", this.color_2_Pool, 10);
  }
  async createColor_3_Pool() {
    await this.loadPrefabPool(__rea_outer_s.BundleName.PREFABS, "color_3", this.color_3_Pool, 10);
  }
  async createSheepPool() {
    await this.loadPrefabPool(__rea_outer_s.BundleName.PREFABS, "sheep_2", this.sheepPool, 30);
  }
  async createFood_1_Pool() {
    await this.loadPrefabPool(__rea_outer_s.BundleName.PREFABS, "food_2", this.food_1_Pool, 200);
  }
  async createSmogPool() {
    await this.loadPrefabPool(__rea_outer_s.BundleName.PREFABS, "smog", this.smogPool, 20);
  }
  async createObsPool() {
    await this.loadPrefabPool("Level_45", "Prefabs/obstacleParent", this.obstacle_45, 20);
  }
  async createLinePool() {
    await this.loadPrefabPool("Level_45", "Prefabs/signLine_1", this.signLine_45, 2);
  }
}
__recovered_export_0 = i, i._instance = null, __rea_outer_l._RF.pop();
export { __recovered_export_0 as default };
