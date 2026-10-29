// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/prefab-registry-init.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_a } from "cc";
import { PrefabRegistry as __rea_outer_t } from "./prefab-registry";
import { UILayer as __rea_outer_i } from "./ui-layer";
import { UILobby as __rea_outer_r } from "./uilobby";
import { UIGame as __rea_outer_s } from "./uigame";
import { UIGameLoading as __rea_outer_n } from "./uigameloading";
import { UIHint as __rea_outer_u } from "./uihint";
import { UISetting as __rea_outer_o } from "./uisetting";
import { UIPause as __rea_outer_c } from "./uipause";
import { UISuccess as __rea_outer_f } from "./uisuccess";
import { UIFail as __rea_outer_I } from "./uifail";
import { UITimeup as __rea_outer_p } from "./uitimeup";
import { UIUnlockLevel as __rea_outer_l } from "./uiunlocklevel";
import { UIRateus as __rea_outer_m } from "./uirateus";
import { UITipMsg as __rea_outer_b } from "./uitipmsg";
import { UILoading as __rea_outer_U } from "./ui-loading";
import { default as __rea_outer_g } from "./Test";
let __recovered_export_0;
__recovered_export_0 = function () {
  const e = __rea_outer_t.getInstance();
  if (e.isInitialized()) return void console.log("[PrefabRegistry] Already initialized, skipping");
  e.registerView("UILoading", __rea_outer_U, {
    prefabPath: "prefabs/Loading",
    componentName: "UILoading",
    defaultLayer: __rea_outer_i.LOADING,
    bundleName: "resources"
  }), e.registerView("UILobby", __rea_outer_r, {
    prefabPath: "prefabs/Lobby",
    componentName: "UILobby",
    defaultLayer: __rea_outer_i.LOBBY,
    bundleName: "resources"
  }), e.registerView("UIGame", __rea_outer_s, {
    prefabPath: "prefabs/UIGame",
    componentName: "UIGame",
    defaultLayer: __rea_outer_i.GAME,
    bundleName: "resources"
  }), e.registerView("UIGameLoading", __rea_outer_n, {
    prefabPath: "prefabs/UIGameLoading",
    componentName: "UIGameLoading",
    defaultLayer: __rea_outer_i.LOADING,
    bundleName: "resources"
  }), e.registerView("UIHint", __rea_outer_u, {
    prefabPath: "prefabs/UIHint",
    componentName: "UIHint",
    defaultLayer: __rea_outer_i.POP,
    bundleName: "resources"
  }), e.registerView("UISetting", __rea_outer_o, {
    prefabPath: "prefabs/UISetting",
    componentName: "UISetting",
    defaultLayer: __rea_outer_i.POP,
    bundleName: "resources"
  }), e.registerView("UIPause", __rea_outer_c, {
    prefabPath: "prefabs/UIPause",
    componentName: "UIPause",
    defaultLayer: __rea_outer_i.POP,
    bundleName: "resources"
  }), e.registerView("UISuccess", __rea_outer_f, {
    prefabPath: "prefabs/UISuccess",
    componentName: "UISuccess",
    defaultLayer: __rea_outer_i.WIN_ANIMATION,
    bundleName: "resources"
  }), e.registerView("UIFail", __rea_outer_I, {
    prefabPath: "prefabs/UIFail",
    componentName: "UIFail",
    defaultLayer: __rea_outer_i.WIN_ANIMATION,
    bundleName: "resources"
  }), e.registerView("UITimeup", __rea_outer_p, {
    prefabPath: "prefabs/UITImeUp",
    componentName: "UITimeup",
    defaultLayer: __rea_outer_i.POP,
    bundleName: "resources"
  }), e.registerView("UIUnlockLevel", __rea_outer_l, {
    prefabPath: "prefabs/UIUnlockLevel",
    componentName: "UIUnlockLevel",
    defaultLayer: __rea_outer_i.POP,
    bundleName: "resources"
  }), e.registerView("UIRateus", __rea_outer_m, {
    prefabPath: "prefabs/UIRateus",
    componentName: "UIRateus",
    defaultLayer: __rea_outer_i.POP,
    bundleName: "resources"
  }), e.registerView("UITipMsg", __rea_outer_b, {
    prefabPath: "prefabs/UITipMsg",
    componentName: "UITipMsg",
    defaultLayer: __rea_outer_i.TOP,
    bundleName: "resources"
  }), e.registerView("Test", __rea_outer_g, {
    prefabPath: "prefabs/UITest",
    componentName: "Test",
    defaultLayer: __rea_outer_i.POP,
    bundleName: "resources"
  }), e.markAsInitialized(), console.log("[PrefabRegistry] Initialized with UI views");
}, __rea_outer_a._RF.push({}, "c53a1thAN5PDLP48oSU8Gp+", "prefab-registry-init", void 0), __rea_outer_a._RF.pop();
export { __recovered_export_0 as initializePrefabRegistry };
