import { Game, game, JsonAsset, resources, sys } from 'cc';
import { HttpTransport } from './network/EasyServerClient';
import { MiniGameRequest, MiniGameTransport } from './network/MiniGameTransport';
import { getSaveStorageKey, LoginMode, NetworkConfig, resolveNetworkConfig } from './network/NetworkConfig';
import { GuestLoginProvider, LoginProvider } from './network/PlayerLogin';
import { CloudSession, CloudStatus } from './storage/CloudSession';
import { DataSchema, DataStore, EMPTY_SCHEMA, StorageAdapter } from './storage/DataStore';

export interface RuntimeOptions<T extends object> {
    schema?: DataSchema<T>;
    loginProvider?: LoginProvider;
    transport?: HttpTransport;
    storage?: StorageAdapter;
    configLoader?: () => Promise<unknown>;
}

/** One runtime survives scene changes; dispose before choosing another environment/account. */
export class FrameworkRuntime {
    static loginMode: LoginMode | null = null;
    static externalServerUrl = '';
    static networkConfig: NetworkConfig | null = null;
    private static options: RuntimeOptions<Record<string, unknown>> = {};
    private static dataStore: DataStore<Record<string, unknown>> | null = null;
    private static session: CloudSession<Record<string, unknown>> | null = null;
    private static initialization: Promise<void> | null = null;
    private static ready = false;
    private static generation = 0;
    private static hideHandler: (() => void) | null = null;
    private static showHandler: (() => void) | null = null;
    private static bootstrapError: Error | null = null;

    static get initialized(): boolean { return this.ready; }
    static get status(): CloudStatus { return this.bootstrapError ? 'error' : this.session?.status ?? 'idle'; }
    static get lastError(): Error | null { return this.bootstrapError ?? this.session?.lastError ?? null; }
    static get lastLocalError(): Error | null { return this.session?.lastLocalError ?? this.dataStore?.lastError ?? null; }
    static get playerId(): string | null { return this.session?.playerId ?? null; }
    static get pending(): boolean { return this.session?.pending ?? false; }
    static get store(): DataStore<Record<string, unknown>> {
        if (!this.ready || !this.dataStore) throw new Error('请先等待 FrameworkRuntime.initialize()。');
        return this.dataStore;
    }
    static typedStore<T extends object>(): DataStore<T> { return this.store as unknown as DataStore<T>; }

    /** Register a schema/auth adapter before startup; the default schema contains only {}. */
    static configure<T extends object = Record<string, unknown>>(options: RuntimeOptions<T>): void {
        if (this.initialization || this.session || this.ready) throw new Error('运行时已启动，请先 dispose 再配置。');
        this.options = options as unknown as RuntimeOptions<Record<string, unknown>>;
    }
    static selectLoginMode(mode: LoginMode, externalServerUrl = ''): void {
        if (![LoginMode.Device, LoginMode.Local, LoginMode.Internet].includes(mode)) throw new Error('登录模式无效。');
        if (this.loginMode !== null) {
            if (this.loginMode !== mode || this.externalServerUrl !== externalServerUrl)
                throw new Error('登录模式已选择，请先 dispose 再切换。');
            return;
        }
        this.loginMode = mode;
        this.externalServerUrl = externalServerUrl;
    }
    static initialize(): Promise<void> {
        if (this.ready) return Promise.resolve();
        if (this.initialization) return this.initialization;
        const generation = this.generation;
        this.bootstrapError = null;
        this.initialization = this.bootstrap(generation).catch(error => {
            if (generation === this.generation) this.bootstrapError = error instanceof Error ? error : new Error(String(error));
            throw error;
        }).finally(() => { if (generation === this.generation) this.initialization = null; });
        return this.initialization;
    }
    private static async bootstrap(generation: number): Promise<void> {
        if (!this.session) {
            const raw = await (this.options.configLoader ?? loadConfig)();
            this.assertGeneration(generation);
            const mode = this.loginMode ?? LoginMode.Device;
            if (this.loginMode === null) this.selectLoginMode(mode);
            const config = resolveNetworkConfig(raw, mode, this.externalServerUrl);
            const platform = sys.platform === 'WECHAT_GAME' ? 'wechat' : sys.platform === 'BYTEDANCE_MINI_GAME' ? 'douyin' : sys.isNative ? 'native' : 'web';
            config.profile += '.platform.' + platform;
            const storage = this.options.storage ?? sys.localStorage;
            const store = new DataStore(storage, this.options.schema ?? EMPTY_SCHEMA);
            let transport = this.options.transport;
            if (mode !== LoginMode.Device && !transport && (platform === 'wechat' || platform === 'douyin')) {
                const sdk = (globalThis as unknown as Record<string, { request?: MiniGameRequest }>)[platform === 'wechat' ? 'wx' : 'tt'];
                if (!sdk?.request) throw new Error('当前小游戏平台没有提供网络请求接口。');
                transport = new MiniGameTransport(sdk.request.bind(sdk));
            }
            // Guest identities and save namespaces are new and app/platform-scoped.
            const login = this.options.loginProvider ?? new GuestLoginProvider(storage,
                'cat_framework.guest.v1.' + encodeURIComponent(config.gameId) + '.' + platform);
            if (mode === LoginMode.Device) store.selectStorage(getSaveStorageKey(config, mode) + '.' + platform);
            this.networkConfig = config;
            this.dataStore = store;
            this.session = new CloudSession(store, storage, login, transport);
        }
        await this.session.initialize(this.networkConfig);
        this.assertGeneration(generation);
        this.ready = true;
        // Capture this session so a delayed hide callback cannot flush a newly logged-in account.
        const session = this.session;
        this.hideHandler = () => { void Promise.resolve().then(() => session.flush()); };
        this.showHandler = () => { void session.flush(); };
        game.on(Game.EVENT_HIDE, this.hideHandler);
        game.on(Game.EVENT_SHOW, this.showHandler);
    }
    static async flush(): Promise<void> {
        const session = this.session;
        const store = this.dataStore;
        if (!this.ready || !session || !store) throw new Error('运行时尚未初始化。');
        if (!await session.flush()) throw session.lastError ?? new Error('数据仍在等待同步。');
        if (store.lastError || session.lastLocalError) throw store.lastError ?? session.lastLocalError!;
    }
    /** Call flush first when its acknowledgement matters; dispose cancels requests and retry timers. */
    static dispose(): void {
        ++this.generation;
        if (this.hideHandler) game.off(Game.EVENT_HIDE, this.hideHandler);
        if (this.showHandler) game.off(Game.EVENT_SHOW, this.showHandler);
        this.hideHandler = this.showHandler = null;
        this.session?.dispose();
        this.session = null;
        this.dataStore = null;
        this.initialization = null;
        this.bootstrapError = null;
        this.networkConfig = null;
        this.ready = false;
        this.loginMode = null;
        this.externalServerUrl = '';
        this.options = {};
    }
    private static assertGeneration(generation: number): void {
        if (generation !== this.generation) throw new Error('运行时在初始化过程中已释放。');
    }
}

function loadConfig(): Promise<unknown> {
    return new Promise((resolve, reject) => {
        resources.load('config/network-config', JsonAsset, (error, asset) => {
            if (error) reject(error);
            else resolve(asset.json);
        });
    });
}
