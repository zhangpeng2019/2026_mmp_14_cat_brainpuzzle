// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/uilobby.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_i } from "cc";
import { _decorator as __rea_outer_t } from "cc";
import { default as __rea_outer_l } from "./LevelManager";
import { LobbyController as __rea_outer_r } from "./LobbyController";
import { DataManager as __rea_outer_n } from "./data-manager";
import { default as __rea_outer_s } from "./LobbyLevelItem";
import { UILevelGrid as __rea_outer_o } from "./ui-level-grid";
import { UIManager as __rea_outer_d } from "./ui-manager";
import { UIBase as __rea_outer_u } from "./ui-base";
import { UISetting as __rea_outer_a } from "./uisetting";
let __recovered_export_0;
var c;
__rea_outer_i._RF.push({}, "cbb01DKsJlProPkoy10QlNV", "uilobby", void 0);
const {
  ccclass: b
} = __rea_outer_t;
__recovered_export_0 = b("UILobby")(c = class extends __rea_outer_u {
  constructor(...e) {
    super(...e), this._levelGrid = null, this._buildGridPromise = null;
  }
  onLoad() {
    super.onLoad(), this.ensureLobbyController(), this.disableLegacyCenterNode(), this.ensureLevelGrid();
  }
  refreshView() {
    this.refresh();
  }
  refresh() {
    var e;
    null != (e = this._levelGrid) && e.isSetupDone() ? this._levelGrid.refresh() : this.buildLevelGrid();
  }
  ensureLobbyController() {
    let e = this.getComponent(__rea_outer_r);
    e || (e = this.addComponent(__rea_outer_r)), e.bindView(this);
  }
  prepareForDisplay() {
    return this.buildLevelGrid();
  }
  getLevelGrid() {
    return this.ensureLevelGrid(), this._levelGrid;
  }
  disableLegacyCenterNode() {
    const e = this.node.getChildByName("centernode");
    null != e && e.isValid && (e.active = !1);
  }
  ensureLevelGrid() {
    var e;
    if (null != (e = this._levelGrid) && null != (e = e.node) && e.isValid) return this._levelGrid;
    const i = this.node.getChildByName("LevelGridPanel");
    if (null == i || !i.isValid) return console.warn("[UILobby] LevelGridPanel is missing"), null;
    let t = i.getComponent(__rea_outer_o);
    return t || (t = i.addComponent(__rea_outer_o)), this._levelGrid = t, t;
  }
  buildLevelGrid() {
    if (this._buildGridPromise) return this._buildGridPromise;
    const e = this.doBuildLevelGrid();
    return this._buildGridPromise = e.then(e => (this._buildGridPromise = null, e), e => {
      throw this._buildGridPromise = null, e;
    }), this._buildGridPromise;
  }
  async doBuildLevelGrid() {
    var e, i;
    const t = this.ensureLevelGrid();
    if (!t) return;
    const r = __rea_outer_n.getInstance(),
      o = r.getLobbyLevelIds();
    if (await Promise.all([__rea_outer_l.getInstance().loadLevelIconAtlas(), __rea_outer_s.loadLobbyAtlas()]), null == (e = t.node) || !e.isValid) return;
    const d = r.getSelectedLevelId() || (null == (i = r.getUserData()) ? void 0 : i.Levelid) || o[0] || 1;
    await t.setup(o, d);
  }
  Click_Setting() {
    __rea_outer_d.getInstance().showView(__rea_outer_a);
  }
}) || c;
__rea_outer_i._RF.pop();
export { __recovered_export_0 as UILobby };
