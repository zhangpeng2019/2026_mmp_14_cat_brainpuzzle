// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/Ani_Utils.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { applyDecoratedDescriptor as __rea_outer_e } from "./rollupPluginModLoBabelHelpers";
import { initializerDefineProperty as __rea_outer_i } from "./rollupPluginModLoBabelHelpers";
import { cclegacy as __rea_outer_n } from "cc";
import { AnimationClip as __rea_outer_s } from "cc";
import { Enum as __rea_outer_o } from "cc";
import { SpriteAtlas as __rea_outer_a } from "cc";
import { _decorator as __rea_outer_r } from "cc";
import { Component as __rea_outer_p } from "cc";
import { Animation as __rea_outer_m } from "cc";
import { Sprite as __rea_outer_l } from "cc";
import { default as __rea_outer_c } from "./GameUtils2";
let __recovered_export_0;
var _, h, u, d, A, f, g, I, C, S;
__rea_outer_n._RF.push({}, "5fc9f9IENlE+aGzqCcBkkhy", "Ani_Utils", void 0);
const {
    ccclass: N,
    property: y
  } = __rea_outer_r,
  b = __rea_outer_s.WrapMode;
var P = function (t) {
  return t[t.INIT = 0] = "INIT", t[t.WAITING = 1] = "WAITING", t[t.PLAYING = 2] = "PLAYING", t[t.PAUSED = 3] = "PAUSED", t[t.COMPLETE = 4] = "COMPLETE", t;
}(P || {});
__recovered_export_0 = (_ = N("Ani_Utils"), h = y({
  type: __rea_outer_o(b),
  displayName: "Animation Loop Mode",
  tooltip: "Animation Loop Mode"
}), u = y({
  type: __rea_outer_a,
  displayName: "animation atlas",
  tooltip: "animation atlas"
}), d = y({
  displayName: "Animation speed",
  tooltip: "Negative when reversed"
}), _(((S = class extends __rea_outer_p {
  constructor(...t) {
    super(...t), __rea_outer_i(this, "isloop", g, this), __rea_outer_i(this, "atlas", I, this), __rea_outer_i(this, "m_speed", C, this), this.m_ani_component = null, this.m_spr_component = null, this.m_ani_state = P.INIT, this.m_isplaying = !1, this.m_current_clip = null;
  }
  onEnable() {
    this.createAndAddClip(), this.m_ani_state = P.WAITING, this.m_ani_component = this.node.getComponent(__rea_outer_m), null == this.m_ani_component ? console.error(this.node.name, "No Animated Components") : this.m_ani_component.playOnLoad && (this.m_current_clip = this.m_ani_component.getClips()[0]), this.m_spr_component = this.node.getComponent(__rea_outer_l), this.m_spr_component ? (this.m_spr_component.trim = !1, this.m_spr_component.sizeMode = __rea_outer_l.SizeMode.CUSTOM, this.atlas && (this.m_spr_component.spriteFrame = this.atlas.getSpriteFrames()[0])) : console.error(this.node.name, "No sprite component");
  }
  SetSpeed(t) {
    this.m_ani_component && this.m_current_clip && (this.m_ani_component.getState(this.m_current_clip.name).speed = t);
  }
  update() {
    if (null != this.m_ani_component && (null != this.m_ani_component.currentClip && (this.m_current_clip = this.m_ani_component.getClips()[0]), null != this.m_current_clip)) switch (this.m_ani_state) {
      case P.INIT:
        break;
      case P.WAITING:
        if (this.m_ani_component.getState(this.m_current_clip.name).isPlaying) this.m_ani_component.resume();else {
          const t = this.m_ani_component.getState(this.m_current_clip.name);
          this.m_ani_component.play(this.m_current_clip.name), t.speed = this.m_speed;
        }
        this.m_ani_state = P.PLAYING;
        break;
      case P.PLAYING:
        1 === __rea_outer_c.isStopGame && (this.m_ani_component.pause(), this.m_ani_state = P.PAUSED);
        break;
      case P.PAUSED:
        0 === __rea_outer_c.isStopGame && (this.m_ani_component.resume(), this.m_ani_state = P.PLAYING);
        break;
      case P.COMPLETE:
    }
  }
  setAtlas(t) {
    t && !this.atlas && (this.atlas = t, this.createAndAddClip());
  }
  createAndAddClip() {
    if (!this.atlas) return void console.error("SpriteAtlas is not assigned.");
    const t = this.node.getComponent(__rea_outer_m);
    if (!t) return void console.error("Animation component is not found on the node.");
    if (t.defaultClip) return;
    const e = __rea_outer_s.createWithSpriteFrames(this.getFramesFromAtlas(), 60);
    e.name = "newClip", e.speed = .14, e.wrapMode = this.isloop, t.addClip(e), t.defaultClip = e;
  }
  getFramesFromAtlas() {
    const t = [],
      e = this.atlas.getSpriteFrames().map(t => t.name);
    for (let i = 0; i < e.length; i++) {
      const n = this.atlas.getSpriteFrame(e[i]);
      n && t.push(n);
    }
    return t;
  }
}).m_can_play = !1, g = __rea_outer_e((f = S).prototype, "isloop", [h], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return b.Loop;
  }
}), I = __rea_outer_e(f.prototype, "atlas", [u], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), C = __rea_outer_e(f.prototype, "m_speed", [d], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return .1;
  }
}), A = f)) || A);
__rea_outer_n._RF.pop();
export { __recovered_export_0 as default };
