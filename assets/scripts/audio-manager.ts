// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/audio-manager.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_i } from "cc";
import { director as __rea_outer_o } from "cc";
import { Node as __rea_outer_s } from "cc";
import { AudioSource as __rea_outer_t } from "cc";
import { resources as __rea_outer_a } from "cc";
import { AudioClip as __rea_outer_u } from "cc";
import { assetManager as __rea_outer_c } from "cc";
import { bindLobbyMusicStop as __rea_outer_n } from "./music-bridge";
import { stopCoreMusic as __rea_outer_l } from "./music-bridge";
import { default as __rea_outer_r } from "./AudioManager";
import { ResourceManager as __rea_outer_d } from "./resource-manager";
import { DataManager as __rea_outer_f } from "./data-manager";
let __recovered_export_0;
__rea_outer_i._RF.push({}, "5fcc4WJW/5GgL+AbY849QYu", "audio-manager", void 0);
class h {
  constructor() {
    this._musicVolume = 1, this._effectVolume = 1, this._isMusicEnabled = !0, this._isEffectEnabled = !0, this._musicSource = null, this._effectSources = [], this.MAX_EFFECT_SOURCES = 8, this._audioClipCache = new Map(), this._playingEffects = new Map(), this._audioRootNode = null, this._currentMusicName = "", this._isMusicBridgeBound = !1, this._dataManager = __rea_outer_f.getInstance();
  }
  static getInstance() {
    return h._instance || (h._instance = new h()), h._instance;
  }
  initialize() {
    this._musicSource?.isValid || (this._effectSources = [], this.createAudioSources(), this.bindMusicBridge(), this.loadSettingsFromUserData(), console.log("[AudioManager] Initialized"));
  }
  bindMusicBridge() {
    this._isMusicBridgeBound || (__rea_outer_n(() => {
      this.stopMusic();
    }), this._isMusicBridgeBound = !0);
  }
  ensureInitialized() {
    this._musicSource?.isValid || this.initialize();
  }
  loadSettingsFromUserData() {
    const e = this._dataManager.getUserData();
    e ? (this.setMusicEnabled(e.musicon), this.setEffectEnabled(e.effecton), console.log(`[AudioManager] Loaded settings from userData: musicon=${e.musicon}, effecton=${e.effecton}`)) : console.warn("[AudioManager] UserData not available, using default settings");
  }
  syncSettingsFromUserData() {
    this.loadSettingsFromUserData(), __rea_outer_r.syncSettingsFromUserData();
  }
  createAudioSources() {
    const e = __rea_outer_o.getScene();
    if (!e) return void console.error("[AudioManager] Scene not available");
    this._audioRootNode = e.getChildByName("AudioRoot"), this._audioRootNode || (this._audioRootNode = new __rea_outer_s("AudioRoot"), e.addChild(this._audioRootNode));
    const i = new __rea_outer_s("MusicSource");
    i.setParent(this._audioRootNode), this._musicSource = i.addComponent(__rea_outer_t), this._musicSource.volume = this._musicVolume;
    for (let e = 0; e < this.MAX_EFFECT_SOURCES; e++) {
      const i = new __rea_outer_s(`EffectSource_${e}`);
      i.setParent(this._audioRootNode);
      const o = i.addComponent(__rea_outer_t);
      o.volume = this._effectVolume, this._effectSources.push(o);
    }
    console.log(`[AudioManager] Created ${this.MAX_EFFECT_SOURCES} effect sources and 1 music source`);
  }
  async loadAudioClip(e, i = "resources") {
    const o = `${i}:${e}`;
    if (this._audioClipCache.has(o)) return this._audioClipCache.get(o);
    try {
      let s = null;
      if ("resources" === i) s = await new Promise((i, o) => {
        __rea_outer_a.load(`audio/${e}`, __rea_outer_u, (e, s) => {
          e ? o(e) : i(s);
        });
      });else {
        const o = __rea_outer_d.getInstance();
        if (!o.isBundleLoaded(i)) {
          console.log(`[AudioManager] Bundle ${i} not loaded, loading now...`);
          if (!(await o.loadBundle(i))) return console.error(`[AudioManager] Failed to load bundle: ${i}`), null;
        }
        const t = __rea_outer_c.getBundle(i);
        if (!t) return console.error(`[AudioManager] Bundle not found: ${i}`), null;
        s = await new Promise((i, o) => {
          t.load(e, __rea_outer_u, (e, s) => {
            e ? o(e) : i(s);
          });
        });
      }
      return s && (this._audioClipCache.set(o, s), console.log(`[AudioManager] Loaded audio clip: ${i}/${e}`)), s;
    } catch (o) {
      return console.error(`[AudioManager] Failed to load audio clip: ${i}/${e}`, o), null;
    }
  }
  findAvailableEffectSource() {
    for (const e of this._effectSources) if (!e.playing) return e;
    return null;
  }
  getEffectiveMusicVolume() {
    return this._isMusicEnabled ? this._musicVolume : 0;
  }
  applyMusicVolume() {
    this._musicSource && (this._musicSource.volume = this.getEffectiveMusicVolume());
  }
  async playMusic(e, i = !0) {
    var o;
    if (e && (this._currentMusicName !== e || null == (o = this._musicSource) || !o.playing)) if (this.ensureInitialized(), this._musicSource) {
      __rea_outer_l();
      try {
        const o = await this.loadAudioClip(e, "resources");
        if (!o) return void console.warn(`[AudioManager] Music clip not found: ${e}`);
        this._musicSource.stop(), this._musicSource.clip = o, this._musicSource.loop = i, this.applyMusicVolume(), this._musicSource.play(), this._currentMusicName = e, console.log(`[AudioManager] Playing music: ${e}, loop: ${i}, volume: ${this._musicSource.volume}`);
      } catch (i) {
        console.error(`[AudioManager] Error playing music: ${e}`, i);
      }
    } else console.warn("[AudioManager] Music source not initialized");
  }
  stopMusic() {
    this._currentMusicName = "", this._musicSource && this._musicSource.playing && (this._musicSource.stop(), console.log("[AudioManager] Music stopped"));
  }
  async playEffect(e, i = 1) {
    if (!this._isEffectEnabled || !e) return null;
    this.ensureInitialized();
    try {
      const o = await this.loadAudioClip(e, "resources");
      if (!o) return console.warn(`[AudioManager] Effect clip not found: ${e}`), null;
      const s = this.findAvailableEffectSource();
      return s ? (s.stop(), s.clip = o, s.loop = !1, s.volume = this._effectVolume * Math.max(0, Math.min(1, i)), s.play(), this._playingEffects.set(e, s), s.node.once(__rea_outer_t.EventType.ENDED, () => {
        this._playingEffects.delete(e);
      }), console.log(`[AudioManager] Playing effect: ${e}, volume: ${s.volume}`), s) : (console.warn(`[AudioManager] All effect sources are busy, cannot play: ${e}`), null);
    } catch (i) {
      return console.error(`[AudioManager] Error playing effect: ${e}`, i), null;
    }
  }
  stopEffect(e) {
    const i = this._playingEffects.get(e);
    i && i.playing && (i.stop(), this._playingEffects.delete(e), console.log(`[AudioManager] Stopped effect: ${e}`));
  }
  stopAllEffects() {
    for (const e of this._effectSources) e.playing && e.stop();
    this._playingEffects.clear(), console.log("[AudioManager] Stopped all effects");
  }
  setMusicVolume(e) {
    this._musicVolume = Math.max(0, Math.min(1, e)), this.applyMusicVolume(), console.log(`[AudioManager] Music volume set to: ${this._musicVolume}`);
  }
  setEffectVolume(e) {
    this._effectVolume = Math.max(0, Math.min(1, e));
    for (const e of this._effectSources) e.volume = this._effectVolume;
    console.log(`[AudioManager] Effect volume set to: ${this._effectVolume}`);
  }
  setMusicEnabled(e) {
    this._isMusicEnabled = e, this.applyMusicVolume(), console.log(`[AudioManager] Music enabled: ${this._isMusicEnabled}`);
  }
  setEffectEnabled(e) {
    this._isEffectEnabled = e, e || this.stopAllEffects(), console.log(`[AudioManager] Effects enabled: ${this._isEffectEnabled}`);
  }
  getMusicVolume() {
    return this._musicVolume;
  }
  getEffectVolume() {
    return this._effectVolume;
  }
  isMusicEnabled() {
    return this._isMusicEnabled;
  }
  isEffectEnabled() {
    return this._isEffectEnabled;
  }
  async preloadAudioClips(e, i = "resources") {
    const o = e.map(e => this.loadAudioClip(e, i));
    await Promise.all(o), console.log(`[AudioManager] Preloaded ${e.length} audio clips from ${i}`);
  }
  clearCache() {
    this._audioClipCache.clear(), console.log("[AudioManager] Audio clip cache cleared");
  }
}
__recovered_export_0 = h, h._instance = null, __rea_outer_i._RF.pop();
export { __recovered_export_0 as AudioManager };
