// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/ui-base.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_t } from "cc";
import { _decorator as __rea_outer_i } from "cc";
import { Component as __rea_outer_o } from "cc";
import { Vec3 as __rea_outer_n } from "cc";
import { Node as __rea_outer_s } from "cc";
import { UITransform as __rea_outer_l } from "cc";
import { Sprite as __rea_outer_a } from "cc";
import { Color as __rea_outer_c } from "cc";
import { tween as __rea_outer_h } from "cc";
import { Vec2 as __rea_outer_r } from "cc";
import { view as __rea_outer_u } from "cc";
import { I18nController as __rea_outer_d } from "./i18n-controller";
import { isValid as isNodeValid } from "cc";
let __recovered_export_0;
var p, _;
__rea_outer_t._RF.push({}, "0b5beC9nC9EdpFnB4K+IgSY", "ui-base", void 0);
const {
  ccclass: T
} = __rea_outer_i;
__recovered_export_0 = T("UIBase")(((_ = class e extends __rea_outer_o {
  constructor(...e) {
    super(...e), this._uiRoot = null, this._uiRootTransform = null, this._eventBlockSprite = null, this._eventBlockNode = null, this._currentScaleTween = null, this._currentFadeTween = null, this._currentSlideTween = null, this._cachedSlideRestPosition = null, this._uiRootInitialScale = new __rea_outer_n(1, 1, 1), this._uiRootTargetScale = new __rea_outer_n(1, 1, 1), this._hasCachedRootScale = !1, this._originalBlockAlpha = 255, this.windowName = "", this.isMain = !1, this._blockAlpha = 0, this._enableBlockVisual = !1, this._enableBlockInput = !0;
  }
  onLoad() {
    this.initializeUIElements();
    const e = this.constructor.name;
    this.windowName = e.replace("UI", "");
  }
  onEnable() {
    __rea_outer_d.getInstance().onLanguageChanged(this.onI18nLanguageChanged, this), this.registerCallbacks(), this.refreshView();
  }
  onDisable() {
    __rea_outer_d.getInstance().offLanguageChanged(this.onI18nLanguageChanged, this), this.unregisterCallbacks(), this.killTweens();
  }
  onDestroy() {
    __rea_outer_d.getInstance().offLanguageChanged(this.onI18nLanguageChanged, this), this.killTweens(), this.removeBlockTouchListeners();
  }
  removeBlockTouchListeners() {
    isNodeValid(this._eventBlockNode, true) && (this._eventBlockNode.off(__rea_outer_s.EventType.TOUCH_START, this.onBlockTouchStart, this), this._eventBlockNode.off(__rea_outer_s.EventType.TOUCH_END, this.onBlockTouchEnd, this), this._eventBlockNode.off(__rea_outer_s.EventType.TOUCH_MOVE, this.onBlockTouchMove, this));
  }
  initializeUIElements() {
    if (null === this._uiRoot) {
      const t = this.node.getChildByName(e.ROOT_NODE_NAME);
      t && (this._uiRoot = t, this._uiRootTransform = t.getComponent(__rea_outer_l));
    }
    if (null !== this._uiRoot) {
      if (null === this._eventBlockSprite) {
        const t = this.node.getChildByName(e.EVENT_BLOCK_NAME);
        t && (this._eventBlockNode = t, this._eventBlockSprite = t.getComponent(__rea_outer_a), this._eventBlockSprite || console.warn(`[UIBase] '${e.EVENT_BLOCK_NAME}' node missing Sprite component`));
      }
      this._eventBlockSprite && this._eventBlockNode && (this._eventBlockSprite.node.setSiblingIndex(0), this._originalBlockAlpha = this._eventBlockSprite.color.a, this.updateBlockTouchListeners(), this._eventBlockNode.active = this._enableBlockInput);
    }
    this.cacheUIRootScaleIfNeeded(), this.updatePopupAdaptiveScale();
  }
  registerCallbacks() {}
  unregisterCallbacks() {}
  refreshView() {}
  onI18nLanguageChanged() {
    var e;
    null != (e = this.node) && e.isValid && this.node.activeInHierarchy && this.refreshView();
  }
  show() {
    this.isMain, this.node.active = !0, this.resetEventBlockColor();
  }
  resetEventBlockColor() {
    if (this._eventBlockSprite && this._eventBlockNode) {
      const e = new __rea_outer_c(7, 7, 7, 215);
      this._eventBlockSprite.color = e, console.log(`[UIBase] Reset eventblock color to #070707D7 for ${this.node.name}`);
    }
  }
  onShowWithParam(e) {
    this.show();
  }
  hide() {
    this.isMain, this.node.active = !1;
  }
  hideWithPopDisappear(e) {
    this.doPopDisappear(e);
  }
  doPopAppear(e) {
    this.doPopAppearInternal(e);
  }
  doPopAppear2(t) {
    this.initializeUIElements(), this._uiRoot && this._uiRootTransform ? (this.killTweens(), this.updatePopupAdaptiveScale(), this._uiRootTransform.node.setScale(0, 0, 0), this._currentScaleTween = __rea_outer_h(this._uiRootTransform.node).to(e.ANIMATION_DURATION, {
      scale: this._uiRootTargetScale
    }, {
      easing: this.popupAppearScaleEasing
    }).call(() => {
      null == t || t();
    }).start()) : null == t || t();
  }
  doPopAppearBlack(e) {
    this.doPopAppearInternal(e);
  }
  doPopAppearInternal(t) {
    if (this.initializeUIElements(), this._uiRoot && this._uiRootTransform) {
      if (this.killTweens(), this.updatePopupAdaptiveScale(), this._eventBlockSprite) {
        const t = this._originalBlockAlpha,
          i = this._eventBlockSprite,
          o = i.color.clone();
        o.a = 0, i.color = o, this._currentFadeTween = __rea_outer_h({
          factor: 0
        }).to(e.FADE_DURATION, {
          factor: 1
        }, {
          onUpdate: e => {
            if (i) {
              const o = i.color.clone();
              o.a = t * e.factor, i.color = o;
            }
          }
        }).start();
      }
      this._uiRootTransform.node.setScale(0, 0, 0), this._currentScaleTween = __rea_outer_h(this._uiRootTransform.node).to(e.ANIMATION_DURATION, {
        scale: this._uiRootTargetScale
      }, {
        easing: this.popupAppearScaleEasing
      }).call(() => {
        null == t || t();
      }).start();
    } else null == t || t();
  }
  doPopDisappear(t) {
    if (this.initializeUIElements(), !this._uiRoot || !this._uiRootTransform) return this.node.active = !1, void (null == t || t());
    if (this.killTweens(), this._eventBlockSprite) {
      const t = this._originalBlockAlpha,
        i = this._eventBlockSprite;
      this._currentFadeTween = __rea_outer_h({
        factor: 1
      }).to(e.FADE_DURATION, {
        factor: 0
      }, {
        onUpdate: e => {
          if (i) {
            const o = i.color.clone();
            o.a = t * e.factor, i.color = o;
          }
        }
      }).start();
    }
    this._currentScaleTween = __rea_outer_h(this._uiRootTransform.node).to(e.ANIMATION_DURATION, {
      scale: __rea_outer_n.ZERO
    }, {
      easing: this.popupDisappearScaleEasing
    }).call(() => {
      this.node.active = !1, null == t || t();
    }).start();
  }
  getSlideAnimationTargetNode() {
    const t = this.node.getChildByName(e.ROOT_NODE_NAME);
    return null !== t ? t : this.node;
  }
  getSlideDistance() {
    const e = this.getSlideAnimationTargetNode().getComponent(__rea_outer_l);
    return e && e.contentSize.width > 0 ? e.contentSize.width : this.getDesignResolution().x;
  }
  get slideAnimationDuration() {
    return e.SLIDE_ANIMATION_DURATION;
  }
  get slideAppearEasing() {
    return "quadOut";
  }
  get slideDisappearEasing() {
    return "quadIn";
  }
  clearSlideRestPositionCache() {
    this._cachedSlideRestPosition = null;
  }
  doSlideAppearRightToLeft(e) {
    const t = this.getSlideAnimationTargetNode();
    if (!t || !t.isValid) return void (null == e || e());
    this._cachedSlideRestPosition || (this._cachedSlideRestPosition = t.position.clone());
    const i = this._cachedSlideRestPosition,
      o = this.getSlideDistance();
    t.setPosition(i.x + o, i.y, i.z), this._currentSlideTween && (this._currentSlideTween.stop(), this._currentSlideTween = null), this._currentSlideTween = __rea_outer_h(t).to(this.slideAnimationDuration, {
      position: i.clone()
    }, {
      easing: this.slideAppearEasing
    }).call(() => {
      this._currentSlideTween = null, null == e || e();
    }).start();
  }
  doSlideAppearLeftToRight(e) {
    const t = this.getSlideAnimationTargetNode();
    if (!t || !t.isValid) return void (null == e || e());
    this._cachedSlideRestPosition || (this._cachedSlideRestPosition = t.position.clone());
    const i = this._cachedSlideRestPosition,
      o = this.getSlideDistance();
    t.setPosition(i.x - o, i.y, i.z), this._currentSlideTween && (this._currentSlideTween.stop(), this._currentSlideTween = null), this._currentSlideTween = __rea_outer_h(t).to(this.slideAnimationDuration, {
      position: i.clone()
    }, {
      easing: this.slideAppearEasing
    }).call(() => {
      this._currentSlideTween = null, null == e || e();
    }).start();
  }
  doSlideDisappearRightToLeft(e) {
    const t = this.getSlideAnimationTargetNode();
    if (!t || !t.isValid) return void (null == e || e());
    const i = this._cachedSlideRestPosition ? this._cachedSlideRestPosition.clone() : t.position.clone(),
      o = this.getSlideDistance(),
      s = new __rea_outer_n(i.x - o, i.y, i.z);
    this._currentSlideTween && (this._currentSlideTween.stop(), this._currentSlideTween = null), this._currentSlideTween = __rea_outer_h(t).to(this.slideAnimationDuration, {
      position: s
    }, {
      easing: this.slideDisappearEasing
    }).call(() => {
      this._currentSlideTween = null, null == e || e();
    }).start();
  }
  doSlideDisappearLeftToRight(e) {
    const t = this.getSlideAnimationTargetNode();
    if (!t || !t.isValid) return void (null == e || e());
    const i = this._cachedSlideRestPosition ? this._cachedSlideRestPosition.clone() : t.position.clone(),
      o = this.getSlideDistance(),
      s = new __rea_outer_n(i.x + o, i.y, i.z);
    this._currentSlideTween && (this._currentSlideTween.stop(), this._currentSlideTween = null), this._currentSlideTween = __rea_outer_h(t).to(this.slideAnimationDuration, {
      position: s
    }, {
      easing: this.slideDisappearEasing
    }).call(() => {
      this._currentSlideTween = null, null == e || e();
    }).start();
  }
  killTweens() {
    this._currentScaleTween && (this._currentScaleTween.stop(), this._currentScaleTween = null), this._currentFadeTween && (this._currentFadeTween.stop(), this._currentFadeTween = null), this._currentSlideTween && (this._currentSlideTween.stop(), this._currentSlideTween = null);
  }
  setBlockAlpha(e) {
    if (this._blockAlpha = Math.max(0, Math.min(1, e)), this._eventBlockSprite) {
      const e = this._eventBlockSprite.color.clone();
      e.a = this._enableBlockVisual ? this._blockAlpha : 0, this._eventBlockSprite.color = e;
    }
  }
  setBlockVisualEnabled(e) {
    if (this._enableBlockVisual = e, this._eventBlockSprite) {
      const t = this._eventBlockSprite.color.clone();
      t.a = e ? this._blockAlpha : 0, this._eventBlockSprite.color = t;
    }
  }
  enableBlockInput(e) {
    this._enableBlockInput = e, this._eventBlockNode && (this._eventBlockNode.active = e, this.updateBlockTouchListeners());
  }
  updateBlockTouchListeners() {
    isNodeValid(this._eventBlockNode, true) && (this._eventBlockNode.off(__rea_outer_s.EventType.TOUCH_START, this.onBlockTouchStart, this), this._eventBlockNode.off(__rea_outer_s.EventType.TOUCH_END, this.onBlockTouchEnd, this), this._eventBlockNode.off(__rea_outer_s.EventType.TOUCH_MOVE, this.onBlockTouchMove, this), this._enableBlockInput && (this._eventBlockNode.on(__rea_outer_s.EventType.TOUCH_START, this.onBlockTouchStart, this), this._eventBlockNode.on(__rea_outer_s.EventType.TOUCH_END, this.onBlockTouchEnd, this), this._eventBlockNode.on(__rea_outer_s.EventType.TOUCH_MOVE, this.onBlockTouchMove, this)));
  }
  onBlockTouchStart(e) {
    e.propagationStopped = !0;
  }
  onBlockTouchEnd(e) {
    e.propagationStopped = !0;
  }
  onBlockTouchMove(e) {
    e.propagationStopped = !0;
  }
  get enablePopupAutoScale() {
    return !0;
  }
  get popupAppearScaleEasing() {
    return "backOut";
  }
  get popupDisappearScaleEasing() {
    return "backIn";
  }
  getDesignResolution() {
    return new __rea_outer_r(e.DESIGN_WIDTH, e.DESIGN_HEIGHT);
  }
  cacheUIRootScaleIfNeeded() {
    if (!this._uiRootTransform || this._hasCachedRootScale) return;
    const e = this._uiRootTransform.node.scale.clone();
    e.equals(__rea_outer_n.ZERO) && e.set(1, 1, 1), this._uiRootInitialScale = e.clone(), this._uiRootTargetScale = e.clone(), this._hasCachedRootScale = !0;
  }
  updatePopupAdaptiveScale() {
    if (!this._uiRootTransform) return;
    if (this.cacheUIRootScaleIfNeeded(), !this.enablePopupAutoScale) return void (this._uiRootTargetScale = this._uiRootInitialScale.clone());
    const e = this.calculateAdaptiveScaleFactor();
    this._uiRootTargetScale = this._uiRootInitialScale.clone().multiplyScalar(e), this._uiRootTransform.node.setScale(this._uiRootTargetScale);
  }
  calculateAdaptiveScaleFactor() {
    const e = this.getDesignResolution(),
      t = Math.max(1, e.x),
      i = Math.max(1, e.y),
      o = __rea_outer_u.getVisibleSize(),
      n = o.width / t,
      s = o.height / i;
    let l = Math.min(n, s, 1);
    return (l <= 0 || isNaN(l)) && (l = 1), l;
  }
}).ANIMATION_DURATION = .3, _.FADE_DURATION = .2, _.ROOT_NODE_NAME = "n_root", _.EVENT_BLOCK_NAME = "eventblock", _.DESIGN_WIDTH = 1080, _.DESIGN_HEIGHT = 1920, _.SLIDE_ANIMATION_DURATION = .35, p = _)) || p;
__rea_outer_t._RF.pop();
export { __recovered_export_0 as UIBase };
