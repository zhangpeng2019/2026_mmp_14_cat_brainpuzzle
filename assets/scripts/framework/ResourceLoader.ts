import { Asset, Constructor, JsonAsset, Node, Prefab, SpriteFrame, instantiate, resources } from 'cc';

interface Demand {
    promise: Promise<Asset>;
    resolve: (asset: Asset) => void;
    reject: (error: Error) => void;
}

interface PendingLoad { demand?: Demand; }

export class ResourceLoadCancelledError extends Error {
    constructor(path: string) {
        super(`Resource request released before completion: ${path}`);
        this.name = 'ResourceLoadCancelledError';
    }
}

/**
 * Shared resources-bundle cache. Each cached asset owns exactly one addRef().
 * load() borrows that reference; callers keeping assets beyond releaseAll()
 * must hold their own addRef()/decRef() pair (UIManager does this for prefabs).
 */
export class ResourceLoader {
    private static readonly pending = new Map<string, PendingLoad>();
    private static readonly owned = new Map<string, Asset>();
    private static readonly retained = new Set<string>();
    private static readonly typeIds = new Map<Constructor<Asset>, number>();

    private static key<T extends Asset>(path: string, type: Constructor<T>): string {
        let id = this.typeIds.get(type);
        if (id === undefined) {
            id = this.typeIds.size;
            this.typeIds.set(type, id);
        }
        return `${id}:${path}`;
    }

    private static demand(): Demand {
        let resolve!: Demand['resolve'];
        let reject!: Demand['reject'];
        const promise = new Promise<Asset>((yes, no) => { resolve = yes; reject = no; });
        return { promise, resolve, reject };
    }

    /** Paths are relative to assets/resources, without extensions. Errors can be retried. */
    static load<T extends Asset>(path: string, type: Constructor<T>): Promise<T> {
        const key = this.key(path, type);
        const cached = this.owned.get(key);
        if (cached) return Promise.resolve(cached as T);
        const inFlight = this.pending.get(key);
        if (inFlight) {
            // release() cancels consumers, not Cocos' physical load. A new consumer
            // can safely join the same physical load without reviving old promises.
            inFlight.demand ??= this.demand();
            return inFlight.demand.promise as Promise<T>;
        }
        const demand = this.demand();
        const entry: PendingLoad = { demand };
        this.pending.set(key, entry);
        const complete = (error: Error | null, asset?: T): void => {
            if (this.pending.get(key) !== entry) return;
            this.pending.delete(key);
            if (error || !asset) {
                entry.demand?.reject(error ?? new Error(`Resource missing: ${path}`));
                return;
            }
            asset.addRef();
            if (entry.demand) {
                this.owned.set(key, asset);
                entry.demand.resolve(asset);
            } else {
                // No live consumers remain; never resurrect a released cache entry.
                asset.decRef();
            }
        };
        try { resources.load(path, type, complete); }
        catch (error) { complete(error instanceof Error ? error : new Error(String(error))); }
        return demand.promise as Promise<T>;
    }

    /** Load the imported SpriteFrame subasset of an image configured as sprite-frame. */
    static sprite(path: string): Promise<SpriteFrame> {
        return this.load(path.endsWith('/spriteFrame') ? path : `${path}/spriteFrame`, SpriteFrame);
    }

    static async json<T>(path: string): Promise<T> {
        return (await this.load(path, JsonAsset)).json as T;
    }

    /** The cache owns the prefab. Keep it retained while manually created nodes need it. */
    static async instantiate(path: string): Promise<Node> {
        return instantiate(await this.load(path, Prefab));
    }

    static preload<T extends Asset>(path: string, type: Constructor<T>): Promise<void> {
        return new Promise((resolve, reject) => {
            resources.preload(path, type, error => error ? reject(error) : resolve());
        });
    }

    /** Explicit release overrides retain, but leaves the retain flag for future loads. */
    static release<T extends Asset>(path: string, type: Constructor<T>): void {
        this.releaseKey(this.key(path, type), path);
    }

    private static releaseKey(key: string, path: string): void {
        const entry = this.pending.get(key);
        if (entry?.demand) {
            const demand = entry.demand;
            entry.demand = undefined;
            demand.reject(new ResourceLoadCancelledError(path));
        }
        const asset = this.owned.get(key);
        if (asset) {
            this.owned.delete(key);
            asset.decRef();
        }
    }

    /** Mark a cache entry persistent across releaseAll(); this does not start loading. */
    static retain<T extends Asset>(path: string, type: Constructor<T>): void {
        this.retained.add(this.key(path, type));
    }

    /** Remove persistence. Release occurs on release() or the next releaseAll(). */
    static unretain<T extends Asset>(path: string, type: Constructor<T>): void {
        this.retained.delete(this.key(path, type));
    }

    /** Drop cache references and reject pending requests, excluding retained entries. */
    static releaseAll(): void {
        const keys = new Set([...this.owned.keys(), ...this.pending.keys()]);
        for (const key of keys) {
            if (!this.retained.has(key)) this.releaseKey(key, key.slice(key.indexOf(':') + 1));
        }
    }
}
