// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/clue-progress-tracker.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_e } from "cc";
import { ClueState as __rea_outer_s } from "./clue-level-types";
let __recovered_export_0;
__rea_outer_e._RF.push({}, "482a2nFc8xIM6lBNxnlJPxP", "clue-progress-tracker", void 0);
__recovered_export_0 = class {
  constructor(t) {
    this.clues = void 0, this.states = new Map(), this.instantCompleteIds = new Set(), this.clues = t, this.reset();
  }
  reset() {
    this.states.clear(), this.clues.forEach(t => {
      var e;
      const n = ((null == (e = t.requires) ? void 0 : e.length) ?? 0) > 0;
      this.states.set(t.id, n ? __rea_outer_s.Locked : __rea_outer_s.Sealed);
    });
  }
  markInstantComplete(t) {
    this.instantCompleteIds.add(t);
  }
  isInstantComplete(t) {
    return this.instantCompleteIds.has(t);
  }
  getState(t) {
    return this.states.get(t) ?? __rea_outer_s.Locked;
  }
  canUnlock(t) {
    return this.getState(t) === __rea_outer_s.Sealed;
  }
  canConfirm(t) {
    return this.getState(t) === __rea_outer_s.Unlocked;
  }
  markUnlocked(t) {
    this.canUnlock(t) && this.states.set(t, __rea_outer_s.Unlocked);
  }
  markDone(t) {
    this.getState(t) !== __rea_outer_s.Done && (this.states.set(t, __rea_outer_s.Done), this.releaseDependents(t));
  }
  markAllDone() {
    this.clues.forEach(t => {
      this.states.set(t.id, __rea_outer_s.Done);
    });
  }
  getDoneCount() {
    let t = 0;
    return this.states.forEach(e => {
      e === __rea_outer_s.Done && (t += 1);
    }), t;
  }
  getTotalCount() {
    return this.clues.length;
  }
  isComplete() {
    return this.getDoneCount() >= this.getTotalCount();
  }
  getSnapshot() {
    const t = this.getTotalCount(),
      e = this.getDoneCount();
    return {
      progress: t > 0 ? e / t : 0,
      label: `${e}/${t}`
    };
  }
  resolveNextHintId() {
    for (const t of this.clues) if (this.getState(t.id) !== __rea_outer_s.Done) return t.id;
    return null;
  }
  releaseDependents(t) {
    var e;
    const n = this.findClue(t);
    null == n || null == (e = n.unlocks) || e.forEach(t => {
      this.getState(t) === __rea_outer_s.Locked && this.states.set(t, __rea_outer_s.Sealed);
    }), this.clues.forEach(t => {
      this.getState(t.id) === __rea_outer_s.Locked && this.areRequirementsMet(t) && this.states.set(t.id, __rea_outer_s.Sealed);
    });
  }
  areRequirementsMet(t) {
    const e = t.requires;
    return !e || 0 === e.length || e.every(t => this.getState(t) === __rea_outer_s.Done);
  }
  findClue(t) {
    return this.clues.find(e => e.id === t);
  }
}, __rea_outer_e._RF.pop();
export { __recovered_export_0 as default };
