import { GameStorage } from '../../game-storage';
import { CASE_DATA } from './CaseData';
import { CaseClockSave } from './CaseClock';

/** 入口选择仅存于本次会话，关卡进度经现有隔离存档保存。 */
export class CatDetectiveState {
    static readonly key = 'catDetective.v1';

    static read(): DetectiveSave {
        const value = GameStorage.getInstance().getStorageSync<unknown>(this.key);
        if (!value || typeof value !== 'object') return { version: 1, cleared: [], sessions: {}, timers: {} };
        const saved = value as Partial<DetectiveSave>;
        return {
            version: 1,
            cleared: Array.isArray(saved.cleared) ? Array.from(new Set(saved.cleared.filter(id => Number.isInteger(id) && CASE_DATA.some(item => item.id === id)))) : [],
            sessions: saved.sessions && typeof saved.sessions === 'object' && !Array.isArray(saved.sessions) ? saved.sessions : {},
            timers: saved.timers && typeof saved.timers === 'object' && !Array.isArray(saved.timers) ? saved.timers : {},
        };
    }

    static write(value: DetectiveSave): void { GameStorage.getInstance().setStorageSync(this.key, value); }
}

export interface DetectiveSave {
    version: 1;
    cleared: number[];
    sessions: Record<string, string>;
    timers?: Record<string, CaseClockSave>;
}
