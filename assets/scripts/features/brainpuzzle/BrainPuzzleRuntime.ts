import { EventTouch, Node } from 'cc';
import { FrameworkRuntime } from '../../framework/FrameworkRuntime';
import { UIManager } from '../../framework/UIManager';
import { DataSchema } from '../../framework/storage/DataStore';

export interface BrainPuzzleSave { entries: Record<string, string>; }
export const BRAIN_PUZZLE_SCHEMA: DataSchema<BrainPuzzleSave> = {
    version: 1,
    defaults: () => ({ entries: {} }),
    validate: (value: unknown): value is BrainPuzzleSave => {
        if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
        const entries = (value as Partial<BrainPuzzleSave>).entries;
        return !!entries && typeof entries === 'object' && !Array.isArray(entries)
            && Object.values(entries).every(item => typeof item === 'string');
    },
};

/** Application integration; gameplay values use the framework's isolated save namespace. */
export class BrainPuzzleRuntime {
    private static configured = false;
    static ui: UIManager | null = null;
    static root: Node | null = null;
    static configure(): void {
        if (this.configured || FrameworkRuntime.initialized) return;
        FrameworkRuntime.configure({ schema: BRAIN_PUZZLE_SCHEMA });
        this.configured = true;
    }
    static get entries(): Record<string, string> {
        return FrameworkRuntime.typedStore<BrainPuzzleSave>().read().entries;
    }
    static write(key: string, value: string | null): void {
        const store = FrameworkRuntime.typedStore<BrainPuzzleSave>();
        const durable = store.update(draft => {
            if (value === null) delete draft.entries[key];
            else Object.defineProperty(draft.entries, key, { value, enumerable: true, writable: true, configurable: true });
        });
        if (!durable) throw store.lastError ?? new Error('游戏存档保存失败');
    }
    static clear(): void {
        const store = FrameworkRuntime.typedStore<BrainPuzzleSave>();
        if (!store.reset()) throw store.lastError ?? new Error('游戏存档保存失败');
    }
}

/** Convert movement to the original 1080-wide prefab coordinates. */
export function legacyTouchDelta(event: EventTouch) {
    const delta = event.getUIDelta();
    const scale = BrainPuzzleRuntime.root?.worldScale.x ?? 1;
    return { x: delta.x / scale, y: delta.y / scale };
}
