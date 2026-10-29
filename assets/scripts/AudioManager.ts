// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/AudioManager.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { Node as __rea_outer_t } from "cc";
import { director as __rea_outer_i } from "cc";
import { game as __rea_outer_s } from "cc";
import { AudioSource as __rea_outer_c } from "cc";
import { AudioClip as __rea_outer_o } from "cc";
import { resources as __rea_outer_a } from "cc";
import { cclegacy as __rea_outer_n } from "cc";
import { default as __rea_outer_u } from "./GameUtils2";
import { default as __rea_outer_l } from "./FJAssetManager";
import { bindCoreMusicStop as __rea_outer_r } from "./music-bridge";
import { stopLobbyMusic as __rea_outer_h } from "./music-bridge";
import { releaseAsset as __rea_outer_d } from "./CocosCompat";
import { DataManager as __rea_outer_f } from "./data-manager";
let __recovered_export_0;
__rea_outer_n._RF.push({}, "e144c75eddNq5O7BvSgdrq4", "AudioManager", void 0);
class p {
  static ensureInitialized() {
    if (this.isInitialized) return;
    const e = new __rea_outer_t("__AudioManager__"),
      o = __rea_outer_i.getScene();
    o && (o.addChild(e), __rea_outer_s.addPersistRootNode(e)), this.musicSource = e.addComponent(__rea_outer_c), this.musicSource.volume = this.musicVolume;
    const a = new __rea_outer_t("one_shot");
    e.addChild(a), this.oneShotSource = a.addComponent(__rea_outer_c), this.oneShotSource.volume = this.effectsVolume;
    const n = new __rea_outer_t("voice");
    e.addChild(n), this.voiceSource = n.addComponent(__rea_outer_c), this.voiceSource.volume = this.effectsVolume;
    const u = new __rea_outer_t("effects");
    e.addChild(u);
    for (let e = 0; e < 12; e++) {
      const i = new __rea_outer_t(`effect_${e}`);
      u.addChild(i);
      const s = i.addComponent(__rea_outer_c);
      s.volume = this.effectsVolume, this.effectChannels.push({
        id: -1,
        source: s,
        isStarting: !1
      });
    }
    this.isInitialized = !0, this.bindMusicBridge(), this.loadSettingsFromUserData();
  }
  static syncSettingsFromUserData() {
    this.loadSettingsFromUserData();
  }
  static loadSettingsFromUserData() {
    const e = __rea_outer_f.getInstance().getUserData();
    e && this.setMusicEnabled(e.musicon);
  }
  static setMusicEnabled(e) {
    this.isMusicEnabled = e, e || this.stopMusic();
  }
  static isMusicEnabledSetting() {
    return this.isMusicEnabled;
  }
  static getEffectiveMusicVolume(e) {
    return this.isMusicEnabled ? e ?? this.musicVolume : 0;
  }
  static bindMusicBridge() {
    this.isMusicBridgeBound || (__rea_outer_r(() => {
      this.stopMusic();
    }), this.isMusicBridgeBound = !0);
  }
  static getMusicSource() {
    return this.ensureInitialized(), this.musicSource;
  }
  static acquireEffectChannel() {
    this.ensureInitialized();
    const e = this.effectChannels.find(e => !e.isStarting && !e.source.playing),
      t = this.effectChannels.find(e => !e.isStarting),
      i = e ?? t ?? this.effectChannels[0];
    return -1 !== i.id && this.effectIdToChannel.delete(i.id), i.id = this.nextEffectId++, i.isStarting = !0, this.effectIdToChannel.set(i.id, i), i;
  }
  static releaseEffectChannelWhenStarted(e, t) {
    const i = () => {
      e.id === t && (e.isStarting = !1);
    };
    e.source.node.once(__rea_outer_c.EventType.STARTED, i), setTimeout(i, 1e3);
  }
  static playEffectInternal(e, t) {
    this.ensureInitialized();
    const i = this.acquireEffectChannel(),
      s = i.id;
    return i.source.stop(), i.source.loop = t, i.source.volume = this.effectsVolume, i.source.clip = e, i.source.play(), this.releaseEffectChannelWhenStarted(i, s), s;
  }
  static set(e, t) {
    this.audioMap.has(e) ? console.warn("set fail: " + e + " already exsit the audioMap") : this.audioMap.set(e, t);
  }
  static get(e) {
    if (this.audioMap.has(e)) return console.log("get " + e + " in the audioMap"), this.audioMap.get(e);
    console.warn("get fail: " + e + " not exsit in the audioMap");
  }
  static playMusic(e, t, i, s) {
    var n;
    if ("" === e) return;
    if (this.ensureInitialized(), __rea_outer_u.playSound_Pre === e && null != (n = this.musicSource) && n.playing) return;
    if (!this.isMusicEnabled) return;
    __rea_outer_h(), this.stopMusic(), __rea_outer_u.playSound_Pre = e;
    const r = t ?? !0,
      d = e => {
        if (!this.isMusicEnabled) return;
        const t = this.getMusicSource();
        t.stop(), t.clip = e, t.loop = r, t.volume = this.getEffectiveMusicVolume(i), t.play(), this.musicID = 0, t.node.off(__rea_outer_c.EventType.ENDED), s && !r && t.node.once(__rea_outer_c.EventType.ENDED, s);
      },
      f = this.audioMap.get(e);
    if (f) return void d(f);
    __rea_outer_l.getBundle(__rea_outer_l.BundleName.AUDIO) ? __rea_outer_l.load(__rea_outer_l.BundleName.AUDIO, e, __rea_outer_o, () => {}, t => {
      this.set(e, t), d(t);
    }) : __rea_outer_a.load(`audio/${e}`, __rea_outer_o, (t, i) => {
      !t && i ? (this.set(e, i), d(i)) : console.warn(`playMusic fail: audio/${e}`, t);
    });
  }
  static stopMusic() {
    __rea_outer_u.playSound_Pre = "", this.musicSource && this.musicSource.stop(), console.log("stop music");
  }
  static pauseMusic() {
    var e;
    null == (e = this.musicSource) || e.pause(), console.log("pause music");
  }
  static resumeMusic() {
    var e;
    null == (e = this.musicSource) || e.play(), console.log("resume music");
  }
  static setMusicVolume(e) {
    this.musicVolume = e, this.musicSource && (this.musicSource.volume = this.getEffectiveMusicVolume()), console.log("set music volume of " + e);
  }
  static getMusicVolume() {
    return this.musicVolume;
  }
  static getMusicPlayTime() {
    var e;
    return (null == (e = this.musicSource) ? void 0 : e.currentTime) ?? 0;
  }
  static setMusicPlayTime() {
    this.musicSource && (this.musicSource.currentTime = 0);
  }
  static playEffect(e, t, i) {
    const s = i ?? !1,
      c = this.audioMap.get(e);
    if (c) return this.effectID = this.playEffectInternal(c, s), void this.setEffectId(e, this.effectID);
    __rea_outer_l.load(__rea_outer_l.BundleName.AUDIO, e, __rea_outer_o, () => {}, i => {
      this.set(e, i), this.effectID = this.playEffectInternal(i, s), this.setEffectId(e, this.effectID), null == t || t();
    });
  }
  static playEffect_1(e, t, i) {
    const s = i ?? !1,
      c = this.effectPlayGeneration,
      a = this.audioMap.get(e),
      n = i => {
        if (c !== this.effectPlayGeneration) return;
        this.effectID = this.playEffectInternal(i, s), this.setEffectId(e, this.effectID);
        const o = setTimeout(() => {
          c === this.effectPlayGeneration && (null == t || t(), this.timeID.delete(e));
        }, 1e3 * i.getDuration());
        this.timeID.set(e, o);
      };
    a ? n(a) : __rea_outer_l.load(__rea_outer_l.BundleName.AUDIO, e, __rea_outer_o, () => {}, t => {
      c === this.effectPlayGeneration && (this.set(e, t), n(t));
    });
  }
  static stopVoice() {
    this.currentVoiceKey = "", this.voiceOnComplete = null, this.voiceDurationSec = 0, this.voiceAudioElapsedSec = 0, this.voiceRateAppliedAtMs = 0, this.clearVoiceCompleteTimer(), this.voiceSource && (this.voiceSource.node.off(__rea_outer_c.EventType.STARTED, this.onVoiceStarted, this), this.voiceSource.stop(), this.voiceSource.clip = null);
  }
  static setVoicePlaybackRate(e) {
    const t = e > 0 ? e : 1;
    if (this.currentVoiceKey && this.voiceRateAppliedAtMs > 0) {
      const e = (performance.now() - this.voiceRateAppliedAtMs) / 1e3;
      this.voiceAudioElapsedSec += e * this.voicePlaybackRate;
    }
    this.voicePlaybackRate = t, this.voiceRateAppliedAtMs = performance.now(), this.applyVoicePlaybackRateToSource(), this.rescheduleVoiceCompleteTimer();
  }
  static clearVoiceCompleteTimer() {
    null != this.voiceCompleteTimer && (clearTimeout(this.voiceCompleteTimer), this.voiceCompleteTimer = null);
  }
  static cancelPendingEffectCompletions() {
    this.effectPlayGeneration += 1, this.timeID.forEach(e => {
      clearTimeout(e);
    }), this.timeID.clear(), this.stopAllEffects();
  }
  static stopLevelAudio() {
    this.cancelPendingEffectCompletions(), this.stopVoice();
  }
  static playVoice(e, t) {
    if (!e) return;
    this.ensureInitialized(), this.stopVoice(), this.currentVoiceKey = e, this.voiceOnComplete = t ?? null;
    const i = t => {
        this.currentVoiceKey === e && this.voiceSource && (this.voiceSource.stop(), this.voiceSource.clip = t, this.voiceSource.loop = !1, this.voiceSource.volume = this.effectsVolume, this.voiceDurationSec = Math.max(0, t.getDuration()), this.voiceAudioElapsedSec = 0, this.voiceRateAppliedAtMs = performance.now(), this.voiceSource.node.off(__rea_outer_c.EventType.STARTED, this.onVoiceStarted, this), this.voiceSource.node.once(__rea_outer_c.EventType.STARTED, this.onVoiceStarted, this), this.voiceSource.play(), this.applyVoicePlaybackRateToSource(), this.rescheduleVoiceCompleteTimer());
      },
      s = this.audioMap.get(e);
    s ? i(s) : __rea_outer_l.load(__rea_outer_l.BundleName.AUDIO, e, __rea_outer_o, () => {}, t => {
      this.set(e, t), i(t);
    });
  }
  static onVoiceStarted() {
    this.applyVoicePlaybackRateToSource();
  }
  static rescheduleVoiceCompleteTimer() {
    if (this.clearVoiceCompleteTimer(), !this.voiceOnComplete || !this.currentVoiceKey) return;
    const e = Math.max(0, this.voiceDurationSec - this.voiceAudioElapsedSec) / this.voicePlaybackRate * 1e3,
      t = this.currentVoiceKey,
      i = this.voiceOnComplete;
    this.voiceCompleteTimer = setTimeout(() => {
      this.voiceCompleteTimer = null, this.currentVoiceKey === t && (this.voiceOnComplete = null, i());
    }, e);
  }
  static applyVoicePlaybackRateToSource() {
    if (!this.voiceSource) return;
    const e = this.voicePlaybackRate,
      t = this.voiceSource._player;
    if (!t) return;
    const i = [t];
    t._player && i.push(t._player);
    for (const t of i) {
      var s;
      null != (s = t._sourceNode) && s.playbackRate && (t._sourceNode.playbackRate.value = e), t._domAudio && (t._domAudio.playbackRate = e);
      const i = t._innerAudioContext;
      if (i && "playbackRate" in i) try {
        i.playbackRate = e;
      } catch {}
    }
  }
  static setEffectId(e, t) {
    this.effectKeyIdMap.set(e, t);
  }
  static stopSoundEffect() {
    this.timeID.forEach((e, t) => {
      clearTimeout(e), this.timeID.delete(t);
    }), this.stopAllEffects();
  }
  static stopAllEffects() {
    this.effectChannels.forEach(e => {
      e.isStarting = !1, e.source.stop(), e.source.clip = null, e.id = -1;
    }), this.effectIdToChannel.clear(), this.effectKeyIdMap.clear(), this.effectID = -1, this.oneShotSource && (this.oneShotSource.stop(), this.oneShotSource.clip = null);
  }
  static stopOneEffect(e) {
    const t = this.effectKeyIdMap.get(e),
      i = this.timeID.get(e);
    i && (clearTimeout(i), this.timeID.delete(e)), null != t && this.stopEffect(t);
  }
  static stopEffect(e) {
    if (null == e || e < 0) return;
    const t = this.effectIdToChannel.get(e);
    t && (t.isStarting = !1, t.source.stop(), t.id = -1, this.effectIdToChannel.delete(e));
  }
  static setEffectsVolume(e) {
    this.effectsVolume = e, this.oneShotSource && (this.oneShotSource.volume = e), this.voiceSource && (this.voiceSource.volume = e), this.effectChannels.forEach(t => {
      t.source.volume = e;
    }), console.log("set effect volume of " + e);
  }
  static releaseAsset(e) {
    const t = this.audioMap.get(e);
    t && (this.audioMap.delete(e), __rea_outer_d(t), console.log("release asset with " + e));
  }
  static releaseAllAsset() {
    this.audioMap.clear(), console.log("prefabMap release all");
  }
}
__recovered_export_0 = p, p.musicID = -1, p.effectID = -1, p.oppoAudioContext = null, p.timeID = new Map(), p.m_audio_clip_map_ui = new Map(), p.m_audio_clip_map_game = new Map(), p.musicName_Pre = "", p.audioMap = new Map(), p.effectKeyIdMap = new Map(), p.effectPlayGeneration = 0, p.musicSource = null, p.oneShotSource = null, p.voiceSource = null, p.currentVoiceKey = "", p.voiceCompleteTimer = null, p.voiceOnComplete = null, p.voiceDurationSec = 0, p.voiceAudioElapsedSec = 0, p.voiceRateAppliedAtMs = 0, p.voicePlaybackRate = 1, p.effectChannels = [], p.effectIdToChannel = new Map(), p.nextEffectId = 1, p.musicVolume = 1, p.effectsVolume = 1, p.isMusicEnabled = !0, p.isInitialized = !1, p.isMusicBridgeBound = !1, p.audioName = {
  MAIN: "Public/bg",
  BGM_2: "Public/BGM_2",
  BTN: "Public/btn",
  COINGOLD: "Public/coin",
  FAULTWORD: "Public/faultWord",
  INSTALLSUC: "Public/installSuc",
  SUCCESS: "Public/success",
  FAILED: "Public/failed",
  WORDBG: "Public/wordBg",
  HOUSEBG: "Public/houseBg",
  SHEEPBG: "Public/sheepBg",
  KUBG: "Public/ghostToilet",
  KunBuBGM1: "Public/KunBuBGM1",
  JingZhang: "Public/jingZhang",
  ChongSheng: "Public/chongSheng",
  DownKey: "Public/downKey",
  Reward: "Public/reward",
  RM2_TALK: "RM2_talk",
  SM_TALK: "SM_talk",
  SM2_TALK: "SM2_talk",
  RM1_TALK: "RM1_talk",
  FW2_TALK: "FW2_talk",
  SG1_TALK: "SG1_talk",
  SELECTCLO: "selectClo_",
  CG3_TALK: "CG3_talk",
  CG1_TALK: "CG1_talk",
  CG_TALK: "CG_talk",
  BIRD: "bird",
  DIANJU: "dianJu",
  DUANKAI: "duanKai",
  ZHEN_TALK: "zhen_",
  QIANGGEBG: "qiangGeBg",
  MUSICBG_70: "musicBg_70",
  MUSICBG_80: "musicBg_80",
  MUSICBG_90: "musicBg_90",
  MUSICBG_00: "musicBg_00",
  MUSICBG_10: "musicBg_10",
  YANWU: "yanWu",
  ELECLIU: "elecLiu",
  CAT: "cat",
  GRANDMARUN: "grandmaRun_",
  FIRE: "fire",
  EXPOSERICH: "exposeRich_",
  ERBINKE: "erBinKe_",
  XIAOMING: "XiaoMing_",
  WENLVHANMAI: "wenLvHanMai_",
  LAOTAI: "LaoTai_",
  TUDOUCLO: "tuDouClo_",
  POORFAMILY: "poorFamily_",
  GUONIANHUI: "guoNian_",
  POWUBIYU: "poWuBiYu_",
  HELPBABYBATH: "HelpBabyBath_",
  HELPGIRLAUNT: "runAunt_",
  Level_228: "228_",
  HELPGRANDPA: "helpGrandPa_",
  LEVEL_237: "237_"
}, __rea_outer_n._RF.pop();
export { __recovered_export_0 as default };
