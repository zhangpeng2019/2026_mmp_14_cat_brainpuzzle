export interface StorageAdapter {
    getItem(key: string): string | null;
    setItem(key: string, value: string): void;
    removeItem(key: string): void;
}

/** Applications own their data shape and validation. The framework owns no business fields. */
export interface DataSchema<T extends object> {
    readonly version: number;
    defaults(): T;
    validate(value: unknown): value is T;
}

export interface DataSnapshot<T extends object> { version: number; data: T; }
export const EMPTY_SCHEMA: DataSchema<Record<string, unknown>> = {
    version: 1,
    defaults: () => ({}),
    validate: (value: unknown): value is Record<string, unknown> =>
        !!value && typeof value === 'object' && !Array.isArray(value),
};

/** Reject values that JSON would silently lose or change, before any write or upload. */
function assertJson(value: unknown, parents = new Set<object>()): void {
    if (value === null || typeof value === 'string' || typeof value === 'boolean') return;
    if (typeof value === 'number' && Number.isFinite(value)) return;
    if (!value || typeof value !== 'object') throw new Error('数据必须仅包含有效的 JSON 值。');
    if (parents.has(value)) throw new Error('数据不能包含循环引用。');
    const prototype = Object.getPrototypeOf(value);
    if (!Array.isArray(value) && prototype !== Object.prototype && prototype !== null)
        throw new Error('数据必须使用普通对象，不能包含类实例。');
    if (Object.getOwnPropertySymbols(value).length) throw new Error('数据不能包含 Symbol 字段。');
    parents.add(value);
    if (Array.isArray(value)) {
        for (let index = 0; index < value.length; index++) assertJson(value[index], parents);
    } else for (const child of Object.values(value)) assertJson(child, parents);
    parents.delete(value);
}

export const cloneJson = <T>(value: T): T => JSON.parse(JSON.stringify(value)) as T;
const asError = (error: unknown): Error => error instanceof Error ? error : new Error(String(error));

/** Copy-on-read, schema-checked storage with a last-good backup and observable changes. */
export class DataStore<T extends object> {
    private data: DataSnapshot<T>;
    private key: string | null = null;
    private readonly listeners = new Set<(snapshot: DataSnapshot<T>) => void>();
    lastError: Error | null = null;

    constructor(private readonly storage: StorageAdapter, readonly schema: DataSchema<T>) {
        if (!Number.isSafeInteger(schema.version) || schema.version < 1)
            throw new Error('数据 schema.version 必须是正整数。');
        this.data = this.defaults();
    }
    get storageKey(): string | null { return this.key; }
    read(): T { return cloneJson(this.data.data); }
    snapshot(): DataSnapshot<T> { return cloneJson(this.data); }

    private defaults(): DataSnapshot<T> {
        const result = { version: this.schema.version, data: this.schema.defaults() };
        this.validateSnapshot(result);
        return cloneJson(result);
    }

    /** The online caller selects a player-scoped key only after authentication. */
    selectStorage(key: string, readLocal = true): void {
        if (!key) throw new Error('存储空间不能为空。');
        if (this.key === key) return;
        if (this.key !== null) throw new Error('存储空间已选择，请释放会话后重新选择。');
        this.key = key;
        this.data = this.defaults();
        if (!readLocal) return;
        try {
            const raw = this.storage.getItem(key);
            if (!raw) return;
            try { this.validateSnapshot(JSON.parse(raw)); this.data = cloneJson(JSON.parse(raw)); }
            catch (error) {
                this.lastError = asError(error);
                try { this.storage.setItem(key + '.broken', raw); } catch { /* Preserve original data. */ }
                const backup = this.storage.getItem(key + '.bak');
                if (backup) { this.validateSnapshot(JSON.parse(backup)); this.data = cloneJson(JSON.parse(backup)); }
            }
        } catch (error) { this.lastError = asError(error); }
    }

    validateSnapshot(value: unknown): asserts value is DataSnapshot<T> {
        assertJson(value);
        const snapshot = value as Partial<DataSnapshot<T>> | null;
        if (!snapshot || Array.isArray(snapshot) || snapshot.version !== this.schema.version ||
            !snapshot.data || typeof snapshot.data !== 'object' || !this.schema.validate(snapshot.data))
            throw new Error('数据版本或内容不符合 schema，未覆盖当前数据。');
    }

    replace(value: T): boolean { return this.restore({ version: this.schema.version, data: value }); }
    update(mutator: (draft: T) => void): boolean {
        const draft = this.read();
        mutator(draft);
        return this.replace(draft);
    }
    restore(value: unknown): boolean {
        this.requireStorage();
        this.validateSnapshot(value);
        this.data = cloneJson(value);
        return this.save();
    }
    reset(): boolean { return this.restore(this.defaults()); }
    subscribe(listener: (snapshot: DataSnapshot<T>) => void): () => void {
        this.listeners.add(listener);
        return () => this.listeners.delete(listener);
    }

    /** false means local durability failed; the memory change still reaches cloud subscribers. */
    private save(): boolean {
        try {
            const key = this.requireStorage();
            const previous = this.storage.getItem(key);
            if (previous) {
                try {
                    this.validateSnapshot(JSON.parse(previous));
                    this.storage.setItem(key + '.bak', previous);
                } catch { /* Never replace the valid backup with corrupted data. */ }
            }
            const serialized = JSON.stringify(this.data);
            this.storage.setItem(key, serialized);
            if (this.storage.getItem(key) !== serialized) throw new Error('本地存储未确认写入。');
            this.lastError = null;
        } catch (error) { this.lastError = asError(error); }
        for (const listener of this.listeners) {
            try { listener(this.snapshot()); }
            catch (error) { console.warn('[Framework] Data subscriber failed', error); }
        }
        return this.lastError === null;
    }
    private requireStorage(): string {
        if (this.key === null) throw new Error('数据存储尚未初始化。');
        return this.key;
    }
}
