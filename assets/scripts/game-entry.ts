// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/game-entry.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { Component as __rea_outer_n } from "cc";
import { game as __rea_outer_a } from "cc";
import { find as __rea_outer_o } from "cc";
import { resources as __rea_outer_i } from "cc";
import { Prefab as __rea_outer_r } from "cc";
import { instantiate as __rea_outer_s } from "cc";
import { _decorator as __rea_outer_d } from "cc";
import { GameManager as __rea_outer_c } from "./game-manager";
import { GameState as __rea_outer_l } from "./game-manager";
import { LoadingController as __rea_outer_g } from "./loading-controller";
import { getCanvasNode as __rea_outer_h } from "./CocosCompat";
import { UIManager as __rea_outer_u } from "./ui-manager";
import { notifyScriptBridgeSuspended as __rea_outer_m } from "./funjoy-lib";
import { notifyScriptBridgeReady as __rea_outer_f } from "./funjoy-lib";
import { installRemoteBundleScriptGuard as __rea_outer_p } from "./remote-bundle-script-guard";
import { ResourceLoader } from "./framework/ResourceLoader";
import { BrainPuzzleRuntime } from "./features/brainpuzzle/BrainPuzzleRuntime";
let __recovered_export_0: typeof __rea_outer_n;
var y;
__rea_outer_t._RF.push({}, "80bbaDut/dPHrEB6+TIabV0", "game-entry", void 0);
const {
  ccclass: L
} = __rea_outer_d;
__recovered_export_0 = L("GameEntry")(y = class extends __rea_outer_n {
  onLoad() {
    __rea_outer_p(), this.registerScriptBridgeLifecycle(), this.bootstrap();
  }
  onDestroy() {
    this.unregisterScriptBridgeLifecycle(), __rea_outer_m();
  }
  async bootstrap() {
    console.log("[GameEntry] Bootstrap start");
    const e = this.resolveCanvasNode();
    __rea_outer_u.getInstance().initialize(e);
    const t = await this.resolveLoadingNode(e);
    if (!t) return void console.error("[GameEntry] Failed to create Loading UI, bootstrap aborted");
    this.attachLoadingController(t);
    const n = __rea_outer_c.getInstance();
    n.isInState(__rea_outer_l.LOADING) || n.enterLoading();
  }
  registerScriptBridgeLifecycle() {
    __rea_outer_a.on(__rea_outer_a.EVENT_HIDE, this.handleGameHide, this), __rea_outer_a.on(__rea_outer_a.EVENT_SHOW, this.handleGameShow, this);
  }
  unregisterScriptBridgeLifecycle() {
    __rea_outer_a.off(__rea_outer_a.EVENT_HIDE, this.handleGameHide, this), __rea_outer_a.off(__rea_outer_a.EVENT_SHOW, this.handleGameShow, this);
  }
  resolveCanvasNode() {
    if (BrainPuzzleRuntime.root) return BrainPuzzleRuntime.root;
    return "Canvas" === this.node.name ? this.node : __rea_outer_o("Canvas", this.node) ?? __rea_outer_h();
  }
  async resolveLoadingNode(e) {
    const t = __rea_outer_o("Loading", e);
    return t ? (t.active = !0, t) : this.instantiateLoadingPrefab(e);
  }
  async instantiateLoadingPrefab(e) {
    const node = await ResourceLoader.instantiate('prefabs/Loading');
    node.name = 'Loading'; node.setParent(e); return node;
  }
  originalInstantiateLoadingPrefab(e) {
    return new Promise(t => {
      __rea_outer_i.load("prefabs/Loading", __rea_outer_r, (n, a) => {
        if (n || !a) return console.error("[GameEntry] Failed to load Loading prefab:", n), void t(null);
        const o = __rea_outer_s(a);
        o.name = "Loading", o.setParent(e), o.setSiblingIndex(e.children.length - 1), console.log("[GameEntry] Loading prefab instantiated under Canvas"), t(o);
      });
    });
  }
  attachLoadingController(e) {
    e.getComponent(__rea_outer_g) || e.addComponent(__rea_outer_g);
  }
  handleGameHide() {
    __rea_outer_m();
  }
  handleGameShow() {
    __rea_outer_f();
  }
}) || y;
__rea_outer_t._RF.pop();
export { __recovered_export_0 as GameEntry };
