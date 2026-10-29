import { sys } from 'cc';
import { BrainPuzzleRuntime } from './features/brainpuzzle/BrainPuzzleRuntime';

export enum RuntimePlatform { WEB = 'web', TT = 'tt', Android = 'android', iOS = 'ios' }
export function detectRuntimePlatform(): RuntimePlatform {
    if ((globalThis as unknown as { TTMinis?: { game?: unknown } }).TTMinis?.game) return RuntimePlatform.TT;
    if (sys.platform === sys.Platform.ANDROID) return RuntimePlatform.Android;
    if (sys.platform === sys.Platform.IOS) return RuntimePlatform.iOS;
    return RuntimePlatform.WEB;
}

/** Synchronous compatibility API backed by the framework DataStore. */
export class GameStorage {
    private static readonly instance = new GameStorage();
    readonly platform = detectRuntimePlatform();
    static getInstance(): GameStorage { return this.instance; }
    getStorageSync<T = unknown>(key: string, fallback: T | null = null): T | null {
        const raw = BrainPuzzleRuntime.entries[key];
        if (raw === undefined) return fallback;
        try { return JSON.parse(raw) as T; } catch { return raw as T; }
    }
    setStorageSync(key: string, value: unknown): void {
        if (!key) return;
        if (value === null || value === undefined) { BrainPuzzleRuntime.write(key, null); return; }
        const raw = JSON.stringify(value);
        if (typeof raw !== 'string') throw new Error('存档值不能序列化');
        BrainPuzzleRuntime.write(key, raw);
    }
    clearStorageSync(): void { BrainPuzzleRuntime.clear(); }
}
