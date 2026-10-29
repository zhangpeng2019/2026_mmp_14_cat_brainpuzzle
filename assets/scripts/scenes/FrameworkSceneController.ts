import { _decorator, Component, Enum, profiler } from 'cc';
import { FrameworkRuntime } from '../framework/FrameworkRuntime';
import { LoginMode } from '../framework/network/NetworkConfig';
import { UIManager } from '../framework/UIManager';
import { FrameworkScreen } from '../ui/FrameworkScreen';
import { BrainPuzzleRuntime } from '../features/brainpuzzle/BrainPuzzleRuntime';

const { ccclass, property } = _decorator;

const MODE_NAMES: Record<LoginMode, string> = {
    [LoginMode.Device]: '单机模式',
    [LoginMode.Local]: '本地模式',
    [LoginMode.Internet]: '外网模式',
};

const SYNC_NAMES: Record<string, string> = {
    idle: '尚未初始化', disabled: '本地保存', 'logging-in': '正在登录',
    loading: '正在读取数据', synced: '已同步', pending: '等待同步',
    saving: '正在同步', offline: '离线，等待重试', error: '同步失败',
};

/** The first scene selects the session environment; later scenes reuse it. */
@ccclass('FrameworkSceneController')
export class FrameworkSceneController extends Component {
    @property({ type: Enum(LoginMode), displayName: '登录模式',
        tooltip: 'Device 单机；Local 本地服务器；Internet 外网服务器。首次进入的场景决定本次运行模式。' })
    loginMode = LoginMode.Device;

    @property({ displayName: '外网服务器地址',
        tooltip: '仅 Internet 模式使用，留空时使用 network-config.json 中的 externalBaseUrl。' })
    externalServerUrl = '';

    protected screen?: FrameworkScreen;
    private ui?: UIManager;
    protected get uiManager(): UIManager {
        if (!this.ui) throw new Error('请先创建场景界面。');
        return this.ui;
    }
    private running = false;
    private disposed = false;

    protected createScreen(title: string, description: string,
        actions: Array<{ text: string; callback: () => void }>): void {
        profiler.hideStats();
        this.ui = new UIManager(this.node);
        this.screen = new FrameworkScreen(this.node, this.ui, title, description, actions);
        this.refreshStatus();
        this.schedule(this.refreshStatus, 0.5);
    }

    protected async initializeRuntime(): Promise<void> {
        BrainPuzzleRuntime.configure();
        if (FrameworkRuntime.loginMode === null)
            FrameworkRuntime.selectLoginMode(this.loginMode, this.externalServerUrl);
        // A later scene's Inspector defaults must not overwrite the entry scene's selection.
        this.loginMode = FrameworkRuntime.loginMode!;
        this.externalServerUrl = FrameworkRuntime.externalServerUrl;
        this.refreshStatus();
        await FrameworkRuntime.initialize();
    }

    /** Every async UI entry point has a retry path and ignores completion after destruction. */
    protected async perform(message: string, action: () => Promise<void>): Promise<void> {
        if (this.running || this.disposed) return;
        this.running = true;
        this.screen?.setBusy(true, message);
        try {
            await action();
            if (!this.disposed) this.screen?.showMessage('框架已就绪');
        } catch (error) {
            console.error('[FrameworkScene]', error);
            if (!this.disposed) {
                const detail = error instanceof Error ? error.message : String(error);
                this.screen?.showError(detail, () => { void this.perform(message, action); });
            }
        } finally {
            this.running = false;
            if (!this.disposed) {
                this.screen?.setBusy(false);
                this.refreshStatus();
            }
        }
    }

    protected showModal(): void {
        this.screen?.showModal();
    }

    protected flush(): void {
        void this.perform('正在保存与同步…', async () => {
            await this.initializeRuntime();
            await FrameworkRuntime.flush();
        });
    }

    protected get sceneActive(): boolean { return !this.disposed && this.isValid; }

    protected onDestroy(): void {
        this.disposed = true;
        this.unschedule(this.refreshStatus);
        this.screen?.destroy();
        this.ui?.destroy();
        // Runtime belongs to the application, so a scene change must not dispose it.
    }

    private refreshStatus = (): void => {
        if (!this.screen || this.disposed) return;
        this.screen.setMode(`登录模式：${MODE_NAMES[FrameworkRuntime.loginMode ?? this.loginMode]}`);
        const status = FrameworkRuntime.status;
        this.screen.setStatus(`数据状态：${SYNC_NAMES[status] ?? status}`);
    };
}
