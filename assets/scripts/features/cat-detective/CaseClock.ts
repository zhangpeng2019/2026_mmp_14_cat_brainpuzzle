export interface CaseClockSave { remainingMs: number; extensionUsed: boolean; }

/** 只计实际游玩时间；界面负责暂停条件，不把打开弹层当成失败。 */
export class CaseClock {
    private remaining: number;
    private extended: boolean;
    constructor(readonly limitSeconds: number, saved?: unknown) {
        this.remaining = Math.max(1, limitSeconds) * 1000; this.extended = false;
        if (!saved || typeof saved !== 'object') return;
        const record = saved as Partial<CaseClockSave>;
        if (typeof record.remainingMs === 'number' && Number.isFinite(record.remainingMs)
            && typeof record.extensionUsed === 'boolean' && record.remainingMs >= 0
            && record.remainingMs <= (record.extensionUsed ? 60000 : this.remaining)) {
            this.remaining = record.remainingMs; this.extended = record.extensionUsed === true;
        }
    }
    get seconds(): number { return Math.ceil(this.remaining / 1000); }
    get expired(): boolean { return this.remaining <= 0; }
    get canExtend(): boolean { return !this.extended; }
    tick(milliseconds: number, active = true): boolean {
        if (!active || !Number.isFinite(milliseconds) || milliseconds <= 0 || this.expired) return false;
        const before = this.seconds; this.remaining = Math.max(0, this.remaining - milliseconds); return before !== this.seconds;
    }
    extend(): boolean {
        if (!this.expired || this.extended) return false;
        this.extended = true; this.remaining = 60000; return true;
    }
    reset(): void { this.remaining = Math.max(1, this.limitSeconds) * 1000; this.extended = false; }
    serialize(): CaseClockSave { return { remainingMs: this.remaining, extensionUsed: this.extended }; }
}
