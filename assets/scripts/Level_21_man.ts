// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Level_21_man.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_e } from "cc";
import { Component as __rea_outer_s } from "cc";
import { Vec3 as __rea_outer_i } from "cc";
import { _decorator as __rea_outer_l } from "cc";
import { stopAllTweens as __rea_outer_h } from "./CocosCompat";
import { default as __rea_outer_d } from "./ActionSystem";
let __recovered_export_0;
var o;
__rea_outer_e._RF.push({}, "f21a2EBIQFAIaAhAAAAAAEh", "Level_21_man", void 0);
const {
    ccclass: a
  } = __rea_outer_l,
  n = ["man", "man_hand", "mask1", "tops"];
__recovered_export_0 = a("Level_21_man")(o = class extends __rea_outer_s {
  constructor(...t) {
    super(...t), this.manNode = null, this.manHandNode = null, this.mask1Node = null, this.topsNode = null, this.tops1Node = null, this.ruler1Node = null, this.ruler2Node = null, this.maskNode = null, this.dusterLaughNode = null, this.dusterMask1Node = null, this.dusterMask2Node = null, this.lemonMask1Node = null, this.star1Node = null, this.star2Node = null, this.dumbbell2Node = null, this.dumbbell3Node = null, this.sideRulerNode = null, this.isStarShowingFirst = !0, this.dumbbell3OriginPosition = new __rea_outer_i(), this.dumbbell3OriginAngle = 0;
  }
  onLoad() {
    this.resolveChildNodes(), this.cacheDumbbell3Origin(), this.applyNormalVisual();
  }
  onDestroy() {
    var t;
    this.stopDumbbellShake(), this.stopStarAlternate(), this.clearSideRuler(), null != (t = this.node) && t.isValid && __rea_outer_h(this.node);
  }
  getBodyHitNode() {
    return this.manNode ?? this.node;
  }
  getFaceHitNode() {
    return this.mask1Node ?? this.manNode ?? this.node;
  }
  applyNormalVisual() {
    this.stopDumbbellShake(), this.stopStarAlternate(), this.clearSideRuler(), this.node.children.forEach(t => {
      const e = n.indexOf(t.name) >= 0;
      t.active = e;
    });
  }
  showDumbbellCover(t) {
    this.applyNormalVisual(), t && (this.setChildActive(this.manHandNode, !1), this.setChildActive(this.dumbbell2Node, !0), this.setChildActive(this.dumbbell3Node, !0), this.startDumbbellShake());
  }
  showDizzyStars(t) {
    this.applyNormalVisual(), t && (this.setChildActive(this.star1Node, !0), this.setChildActive(this.star2Node, !1), this.isStarShowingFirst = !0);
  }
  tickStarAlternate() {
    var t, e;
    (null != (t = this.star1Node) && t.isValid || null != (e = this.star2Node) && e.isValid) && (this.setChildActive(this.star1Node, this.isStarShowingFirst), this.setChildActive(this.star2Node, !this.isStarShowingFirst), this.isStarShowingFirst = !this.isStarShowingFirst);
  }
  stopStarAlternate() {
    this.setChildActive(this.star1Node, !1), this.setChildActive(this.star2Node, !1);
  }
  showHeightVisual(t, e) {
    this.applyNormalVisual(), this.setChildActive(this.ruler1Node, t), this.setChildActive(this.ruler2Node, !t), this.clearSideRuler(), null != e && e.isValid && (e.setParent(this.node), e.setPosition(-80, 0, 0), e.active = !0, this.sideRulerNode = e);
  }
  showFeatherReaction(t) {
    this.applyNormalVisual(), t && (this.setChildActive(this.dusterMask1Node, !0), this.setChildActive(this.dusterLaughNode, !0));
  }
  showTopsRemoved(t) {
    this.applyNormalVisual(), this.setChildActive(this.topsNode, !1), this.setChildActive(this.tops1Node, t);
  }
  showFaceReveal(t) {
    if (this.applyNormalVisual(), t) return this.setChildActive(this.dusterMask2Node, !1), this.setChildActive(this.maskNode, !0), void this.setChildActive(this.mask1Node, !1);
    this.setChildActive(this.dusterMask2Node, !0), this.setChildActive(this.mask1Node, !1);
  }
  showLemonReaction(t) {
    this.applyNormalVisual(), t && (this.setChildActive(this.lemonMask1Node, !0), this.setChildActive(this.dusterLaughNode, !0));
  }
  setLaughVisible(t) {
    this.setChildActive(this.dusterLaughNode, t);
  }
  startDumbbellShake() {
    const t = this.dumbbell3Node;
    null != t && t.isValid && t.active && (this.stopDumbbellShake(), t.setPosition(this.dumbbell3OriginPosition), t.angle = this.dumbbell3OriginAngle, __rea_outer_d.Shake_tag(t, 1, -2, 1 / 6, 0, 21021));
  }
  stopDumbbellShake() {
    const t = this.dumbbell3Node;
    null != t && t.isValid && (__rea_outer_h(t), t.setPosition(this.dumbbell3OriginPosition), t.angle = this.dumbbell3OriginAngle);
  }
  cacheDumbbell3Origin() {
    var t;
    null != (t = this.dumbbell3Node) && t.isValid && (this.dumbbell3OriginPosition = this.dumbbell3Node.position.clone(), this.dumbbell3OriginAngle = this.dumbbell3Node.angle);
  }
  resolveChildNodes() {
    this.manNode = this.node.getChildByName("man"), this.manHandNode = this.node.getChildByName("man_hand"), this.mask1Node = this.node.getChildByName("mask1"), this.topsNode = this.node.getChildByName("tops"), this.tops1Node = this.node.getChildByName("tops_1"), this.ruler1Node = this.node.getChildByName("ruler_1"), this.ruler2Node = this.node.getChildByName("ruler_2"), this.maskNode = this.node.getChildByName("mask"), this.dusterLaughNode = this.node.getChildByName("duster_laugh"), this.dusterMask1Node = this.node.getChildByName("duster_mask_1"), this.dusterMask2Node = this.node.getChildByName("duster_mask_2"), this.lemonMask1Node = this.node.getChildByName("lemon_mask_1"), this.star1Node = this.node.getChildByName("star1"), this.star2Node = this.node.getChildByName("star2"), this.dumbbell2Node = this.node.getChildByName("dumbbell_2"), this.dumbbell3Node = this.node.getChildByName("dumbbell_3");
  }
  clearSideRuler() {
    var t;
    null != (t = this.sideRulerNode) && t.isValid && this.sideRulerNode.destroy(), this.sideRulerNode = null;
  }
  setChildActive(t, e) {
    null != t && t.isValid && (t.active = e);
  }
}) || o;
__rea_outer_e._RF.pop();
export { __recovered_export_0 as default };
