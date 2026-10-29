import { CancellationSignal, EasyServerClient, EasyServerError, HttpTransport } from '../network/EasyServerClient';
import { LoginProvider, PlayerIdentity, validatePlayerId } from '../network/PlayerLogin';
import { NetworkConfig, parseNetworkConfig } from '../network/NetworkConfig';
import { DataSnapshot, DataStore, StorageAdapter } from './DataStore';

export type CloudStatus = 'idle' | 'disabled' | 'logging-in' | 'loading' | 'synced' | 'pending' | 'saving' | 'offline' | 'error';
interface CloudCache<T extends object> { version: 1; snapshot: DataSnapshot<T>; pending: boolean; }
const asError = (error: unknown): Error => error instanceof Error ? error : new Error(String(error));

/** Portable cancellation for Cocos runtimes without AbortController. */
class SessionSignal implements CancellationSignal {
    aborted = false;
    private readonly listeners = new Set<() => void>();
    addEventListener(_type: 'abort', listener: () => void): void { this.listeners.add(listener); }
    removeEventListener(_type: 'abort', listener: () => void): void { this.listeners.delete(listener); }
    abort(): void {
        this.aborted = true;
        for (const listener of this.listeners) listener();
        this.listeners.clear();
    }
}

/** Latest-snapshot queue, scoped by environment + endpoint + app + player. No business merge rules. */
export class CloudSession<T extends object> {
    status: CloudStatus = 'idle';
    lastError: Error | null = null;
    lastLocalError: Error | null = null;
    lastSyncedAt = 0;
    private identity: PlayerIdentity | null = null;
    private client: EasyServerClient | null = null;
    private config: NetworkConfig | null = null;
    private cacheKey = '';
    private cacheReadError: Error | null = null;
    private ready = false;
    private readConfirmed = false;
    private pendingJson: string | null = null;
    private syncedJson: string | null = null;
    private initialization: Promise<void> | null = null;
    private saving: Promise<boolean> | null = null;
    private timer: ReturnType<typeof setTimeout> | undefined;
    private retryAttempt = 0;
    private disposed = false;
    private readonly signal = new SessionSignal();
    private readonly unsubscribe: () => void;

    constructor(private readonly store: DataStore<T>, private readonly storage: StorageAdapter,
        private readonly loginProvider: LoginProvider, private readonly transport?: HttpTransport) {
        this.unsubscribe = store.subscribe(snapshot => { if (this.ready) this.enqueue(snapshot); });
    }
    get playerId(): string | null { return this.identity?.playerId ?? null; }
    get pending(): boolean { return this.pendingJson !== null; }

    initialize(value: unknown): Promise<void> {
        if (this.disposed) return Promise.reject(new Error('通信会话已释放。'));
        if (this.ready) return Promise.resolve();
        if (this.initialization) return this.initialization;
        this.config = parseNetworkConfig(value);
        if (!this.config.enabled) { this.ready = true; this.status = 'disabled'; return Promise.resolve(); }
        this.initialization = this.bootstrap().finally(() => { this.initialization = null; });
        return this.initialization;
    }

    private async bootstrap(): Promise<void> {
        try {
            this.status = 'logging-in';
            const identity = await this.loginProvider.login();
            this.assertActive();
            validatePlayerId(identity.playerId);
            this.identity = { playerId: identity.playerId, headers: { ...identity.headers } };
            this.client = new EasyServerClient({ ...this.config!, transport: this.transport });
            const scope = [this.config!.profile ?? '', this.config!.baseUrl, this.config!.gameId, identity.playerId]
                .map(encodeURIComponent).join('|');
            this.cacheKey = 'cat_framework.cloud.v1.' + scope;
            const cache = this.readCache();
            this.status = 'loading';
            let remote;
            try {
                remote = await this.client.load(identity.playerId, this.requestOptions());
                this.assertActive();
                if (remote.found) this.store.validateSnapshot(remote.data);
            } catch (error) {
                this.assertActive();
                // Offline start is allowed only after a previous successful login/load for this scope.
                if (!cache || !isRetryable(error)) throw error;
                this.store.selectStorage('cat_framework.save.v1.account.' + scope, false);
                this.store.restore(cache.snapshot);
                this.ready = true;
                this.readConfirmed = false;
                this.pendingJson = JSON.stringify(this.store.snapshot());
                this.persistCache(this.pendingJson, true);
                this.lastError = asError(error);
                this.status = 'offline';
                this.scheduleRetry();
                return;
            }
            this.store.selectStorage('cat_framework.save.v1.account.' + scope, false);
            // A confirmed 404 starts a new record when configured, matching the original login policy.
            if (!remote.found && this.config!.initializeOnMissing !== false) this.store.reset();
            else if (cache?.pending) this.store.restore(cache.snapshot);
            else if (remote.found) this.store.restore(remote.data);
            else if (cache) this.store.restore(cache.snapshot);
            else this.store.reset();
            this.readConfirmed = true;
            this.ready = true;
            this.lastError = null;
            const current = JSON.stringify(this.store.snapshot());
            const needsSave = !!cache?.pending || !remote.found || current !== JSON.stringify(remote.data);
            this.syncedJson = needsSave ? null : current;
            this.pendingJson = needsSave ? current : null;
            if (!needsSave) this.lastSyncedAt = Date.now();
            this.persistCache(current, needsSave);
            this.status = needsSave ? 'pending' : 'synced';
            if (needsSave) this.schedule(this.config!.saveDebounceMs);
        } catch (error) {
            if (!this.disposed) { this.lastError = asError(error); this.status = 'error'; }
            throw error;
        }
    }

    private enqueue(snapshot: DataSnapshot<T>): void {
        if (!this.client || this.disposed) return;
        const json = JSON.stringify(snapshot);
        if (json === this.pendingJson || (!this.pending && json === this.syncedJson)) return;
        // Reversion during an in-flight request needs a second PUT after that request settles.
        this.pendingJson = json === this.syncedJson && !this.saving && this.readConfirmed ? null : json;
        this.persistCache(json, this.pending);
        if (!this.pending) { this.clearTimer(); this.status = 'synced'; return; }
        if (this.status !== 'offline' && this.status !== 'error' && !this.saving) this.status = 'pending';
        if (!this.saving && this.timer === undefined && this.status !== 'error') this.schedule(this.config!.saveDebounceMs);
    }

    /** false retains the queue; callers inspect lastError/status or explicitly retry. */
    flush(): Promise<boolean> {
        if (this.saving) return this.saving;
        if (!this.ready || this.disposed) return Promise.resolve(false);
        if (!this.client || !this.pending) return Promise.resolve(true);
        this.clearTimer();
        this.saving = this.drain().finally(() => {
            this.saving = null;
            // A subscriber may enqueue in the microtask gap between drain completion and finally.
            if (this.pending && !this.disposed && this.timer === undefined && this.status !== 'error' && this.status !== 'offline')
                this.schedule(this.config!.saveDebounceMs);
        });
        return this.saving;
    }
    private async drain(): Promise<boolean> {
        try {
            if (!this.readConfirmed) {
                const remote = await this.client!.load(this.identity!.playerId, this.requestOptions());
                this.assertActive();
                if (remote.found) this.store.validateSnapshot(remote.data);
                else if (this.config!.initializeOnMissing !== false)
                    throw new EasyServerError('invalid-response', '服务器记录已删除，请重新登录以初始化。', 404);
                this.readConfirmed = true;
            }
            while (this.pendingJson !== null) {
                const sent = this.pendingJson;
                this.status = 'saving';
                await this.client!.saveJson(this.identity!.playerId, sent, this.requestOptions());
                this.assertActive();
                this.syncedJson = sent;
                this.lastSyncedAt = Date.now();
                if (this.pendingJson === sent) this.pendingJson = null;
                this.persistCache(this.pendingJson ?? sent, this.pending);
            }
            this.lastError = null;
            this.retryAttempt = 0;
            this.status = 'synced';
            return true;
        } catch (error) {
            if (this.disposed) return false;
            this.lastError = asError(error);
            this.status = isRetryable(error) ? 'offline' : 'error';
            if (isRetryable(error)) { this.readConfirmed = false; this.scheduleRetry(); }
            return false;
        }
    }

    private requestOptions(): { headers: Readonly<Record<string, string>> | undefined; signal: CancellationSignal } {
        return { headers: this.identity?.headers, signal: this.signal };
    }
    private readCache(): CloudCache<T> | null {
        let raw: string | null = null;
        try {
            raw = this.storage.getItem(this.cacheKey);
            if (!raw) return null;
            const cache = JSON.parse(raw) as CloudCache<T>;
            if (!cache || cache.version !== 1 || typeof cache.pending !== 'boolean') throw new Error('本地账号缓存无效。');
            this.store.validateSnapshot(cache.snapshot);
            return cache;
        } catch (error) {
            this.cacheReadError = this.lastLocalError = asError(error);
            if (raw) {
                try { this.storage.setItem(this.cacheKey + '.broken', raw); } catch { /* Keep original. */ }
            }
            // Still require a successful GET. An invalid cache never permits offline startup.
            return null;
        }
    }
    private persistCache(json: string, pending: boolean): void {
        try {
            const serialized = JSON.stringify({ version: 1, snapshot: JSON.parse(json), pending });
            this.storage.setItem(this.cacheKey, serialized);
            if (this.storage.getItem(this.cacheKey) !== serialized) throw new Error('离线队列未成功保存。');
            this.lastLocalError = this.cacheReadError;
        } catch (error) {
            this.lastLocalError = asError(error);
            if (this.config?.logEnabled) console.warn('[Framework] Offline queue persistence failed', this.lastLocalError.message);
        }
    }
    private scheduleRetry(): void {
        const config = this.config!;
        this.schedule(Math.min(config.retryMaxMs, config.retryBaseMs * Math.pow(2, Math.min(this.retryAttempt++, 20))));
    }
    private schedule(delay: number): void {
        this.clearTimer();
        this.timer = setTimeout(() => { this.timer = undefined; void this.flush(); }, delay);
    }
    private clearTimer(): void {
        if (this.timer !== undefined) clearTimeout(this.timer);
        this.timer = undefined;
    }
    private assertActive(): void { if (this.disposed) throw new Error('通信会话已释放。'); }
    dispose(): void {
        this.disposed = true;
        this.ready = false;
        this.clearTimer();
        this.unsubscribe();
        this.signal.abort();
    }
}

/** Authentication/schema errors do not trigger a request loop. */
export function isRetryable(value: unknown): boolean {
    return value instanceof EasyServerError && (value.kind === 'network' || value.kind === 'timeout' ||
        (value.kind === 'http' && (value.statusCode === 408 || value.statusCode === 429 || value.statusCode >= 500)));
}
