// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/clue-node-resolver.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { Sprite as __rea_outer_t } from "cc";
import { cclegacy as __rea_outer_i } from "cc";
import { formatCluePath as __rea_outer_o } from "./clue-level-types";
import { ClueTriggerKind as __rea_outer_r } from "./clue-level-types";
import { ClueEffectKind as __rea_outer_s } from "./clue-level-types";
import { resolveClueNaming as __rea_outer_n } from "./clue-level-types";
let __recovered_export_0, __recovered_export_1;
__recovered_export_0 = function (e, t, i) {
  return new l(e, __rea_outer_n(t.naming), i);
}, __rea_outer_i._RF.push({}, "c519frtx35F+7bw989fa2qY", "clue-node-resolver", void 0);
class l {
  constructor(e, t, i) {
    this.levelRoot = void 0, this.naming = void 0, this.manualOverrides = void 0, this.nodeCache = new Map(), this.missingNodes = [], this.levelRoot = e, this.naming = t, this.manualOverrides = i ?? new Map();
  }
  resolveNode(e) {
    const t = this.nodeCache.get(e);
    if (void 0 !== t) return t;
    const i = this.lookupNode(e);
    return this.nodeCache.set(e, i), i;
  }
  resolveSprite(e) {
    var i;
    return (null == (i = this.resolveNode(e)) ? void 0 : i.getComponent(__rea_outer_t)) ?? null;
  }
  resolveTriggerHotspot(e, t, i) {
    const o = this.getTriggerHotspotPath(e, t, i);
    return {
      path: o,
      node: this.resolveNode(o)
    };
  }
  getTriggerHotspotPath(e, t, i) {
    if (null != e && e.hotspot) return e.hotspot;
    if (i) return __rea_outer_o(this.naming.confirmHotspot, t);
    const s = (null == e ? void 0 : e.kind) ?? __rea_outer_r.Click;
    return s === __rea_outer_r.Swipe || s === __rea_outer_r.SwipeRoundTrip ? __rea_outer_o(this.naming.swipeHotspot, t) : s === __rea_outer_r.DragToZone ? (null == e ? void 0 : e.item) ?? __rea_outer_o(this.naming.dragZone, t) : __rea_outer_o(this.naming.clickHotspot, t);
  }
  getDragZonePath(e, t) {
    return e.zone ?? __rea_outer_o(this.naming.dragZone, t);
  }
  getMissingNodes() {
    return this.missingNodes;
  }
  validate(e) {
    var t;
    this.missingNodes.length = 0, this.requireNode(null, "bubble", this.naming.bubble, !0), this.requireNode(null, "tipLabel", this.naming.tipLabel, !0), null == (t = e.breathNodes) || t.forEach(e => {
      this.requireNode(null, "breathNode", e, !0);
    }), e.clues.forEach(e => {
      this.validateClue(e);
    });
  }
  validateClue(e) {
    var t, i;
    if (e.unlock) {
      const t = e.unlock.trigger;
      this.requireNode(e.id, "unlockHotspot", this.getTriggerHotspotPath(t, e.id, !1), !1), (null == t ? void 0 : t.kind) === __rea_outer_r.DragToZone && (this.requireNode(e.id, "dragZone", this.getDragZonePath(t, e.id), !1), t.dragMove && this.requireNode(e.id, "dragMove", t.dragMove, !1)), this.validateEffects(e.id, e.unlock.effects);
    }
    null !== e.confirm && (this.requireNode(e.id, "confirmHotspot", this.getTriggerHotspotPath(null == (t = e.confirm) ? void 0 : t.trigger, e.id, !0), !0), this.validateEffects(e.id, null == (i = e.confirm) ? void 0 : i.effects));
  }
  validateEffects(e, t) {
    null == t || t.forEach(t => {
      if (this.requireNode(e, `effect:${t.kind}`, t.target, !0), t.toward) {
        const i = t.kind === __rea_outer_s.SetTexture ? "effect:set-texture:source" : `effect:${t.kind}:toward`;
        this.requireNode(e, i, t.toward, !0);
      }
    });
  }
  requireNode(e, t, i, o) {
    this.resolveNode(i) || this.missingNodes.push({
      clueId: e,
      role: t,
      path: i,
      isRecoverable: o
    });
  }
  lookupNode(e) {
    const t = this.manualOverrides.get(e);
    if (null != t && t.isValid) return t;
    const i = e.startsWith("/"),
      o = i ? e.slice(1) : e;
    if (i) return this.levelRoot.getChildByPath(o);
    const r = this.levelRoot.getChildByPath(`${this.naming.root}/${o}`);
    return r || this.levelRoot.getChildByPath(o);
  }
}
__recovered_export_1 = l, __rea_outer_i._RF.pop();
export { __recovered_export_0 as createClueNodeResolver, __recovered_export_1 as default };
