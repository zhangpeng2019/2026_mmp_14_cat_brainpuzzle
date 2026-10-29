// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/FontClip.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { applyDecoratedDescriptor as __rea_outer_t } from "./rollupPluginModLoBabelHelpers";
import { initializerDefineProperty as __rea_outer_i } from "./rollupPluginModLoBabelHelpers";
import { cclegacy as __rea_outer_r } from "cc";
import { SpriteFrame as __rea_outer_s } from "cc";
import { CCInteger as __rea_outer_n } from "cc";
import { _decorator as __rea_outer_o } from "cc";
import { Component as __rea_outer_a } from "cc";
import { Node as __rea_outer_h } from "cc";
import { Sprite as __rea_outer_p } from "cc";
import { default as __rea_outer_l } from "./CutImgTool";
import { setNodePositionXY as __rea_outer_c } from "./CocosCompat";
let __recovered_export_0;
var u, f, d, m, g, C, F, v, b, y, w, z, S;
__rea_outer_r._RF.push({}, "635d3r/jyJO97CwXAphnYYC", "FontClip", void 0);
const {
  ccclass: H,
  property: W
} = __rea_outer_o;
__recovered_export_0 = (u = H("FontClip"), f = W(__rea_outer_s), d = W(__rea_outer_n), m = W(__rea_outer_n), g = W(__rea_outer_n), u((v = __rea_outer_t((F = class extends __rea_outer_a {
  constructor(...e) {
    super(...e), __rea_outer_i(this, "spriteFrame", v, this), __rea_outer_i(this, "sheet", b, this), __rea_outer_i(this, "value", y, this), __rea_outer_i(this, "fontW", w, this), __rea_outer_i(this, "fontH", z, this), __rea_outer_i(this, "spaceX", S, this), this.spriteCaches = [], this.spriteFrameCaches = {};
  }
  onLoad() {
    this.spriteFrame && this.makeFontSpriteFrame(this.spriteFrame, this.sheet, this.fontW, this.fontH), "" != this.value && (this.string = this.value);
  }
  makeFontSpriteFrame(e, t, i, r) {
    void 0 === i && (i = 0), void 0 === r && (r = 0), this.sheet = t;
    var s = this.sheet.length,
      n = this.sheet.length;
    this.fontW = 0 != i ? i : Math.round(e.getTexture().width / s), this.fontH = 0 != r ? r : Math.round(e.getTexture().height / 1);
    var o = __rea_outer_l.cutImg(e, 1, s, this.fontW, this.fontH, n);
    for (var a in this.spriteFrameCaches) delete this.spriteFrameCaches[a];
    for (var h = 0; h < n; h++) this.spriteFrameCaches[this.sheet.charAt(h)] = o[h];
  }
  getSprite() {
    return this.spriteCaches.length > 0 ? this.spriteCaches.pop() : new __rea_outer_h().addComponent(__rea_outer_p);
  }
  set string(e) {
    var t,
      i = this.node.children.length,
      r = e.length;
    if (this.value = e, i > r) for (var s, n = i - 1; n >= r; n--) (s = this.node.children[n].getComponent(__rea_outer_p)).node.removeFromParent(), s.spriteFrame = null, this.spriteCaches.push(s);
    var o = 0;
    for (n = 0; n < r; n++) n >= i && (t = this.getSprite(), this.node.addChild(t.node)), (t = this.node.children[n].getComponent(__rea_outer_p)).spriteFrame = this.spriteFrameCaches[e.charAt(n)], __rea_outer_c(t.node, o, t.node.position.y), o = t.node.position.x + this.fontW + this.spaceX;
  }
  onDestroy() {
    for (var e in this.spriteFrame = null, this.spriteCaches.length = 0, this.spriteFrameCaches) delete this.spriteFrameCaches[e];
  }
}).prototype, "spriteFrame", [f], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), b = __rea_outer_t(F.prototype, "sheet", [W], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return "";
  }
}), y = __rea_outer_t(F.prototype, "value", [W], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return "";
  }
}), w = __rea_outer_t(F.prototype, "fontW", [d], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), z = __rea_outer_t(F.prototype, "fontH", [m], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), S = __rea_outer_t(F.prototype, "spaceX", [g], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), C = F)) || C);
__rea_outer_r._RF.pop();
export { __recovered_export_0 as default };
