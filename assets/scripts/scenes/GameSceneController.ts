import { _decorator, BlockInputEvents, Component, Label, Node, UITransform } from 'cc';
import { BrainPuzzleRuntime } from '../features/brainpuzzle/BrainPuzzleRuntime';
import { CatDetectiveView } from '../features/cat-detective/CatDetectiveView';
import { CandyArt } from '../features/cat-detective/CandyArt';
import { FrameworkRuntime } from '../framework/FrameworkRuntime';
import { SceneFlow } from '../framework/SceneFlow';
import { LoginMode } from '../framework/network/NetworkConfig';
const { ccclass, property } = _decorator;

/** 正式 Game 仅启动猫咪侦探社；旧版脚本和资源位于 assets 外的归档。 */
@ccclass('GameSceneController')
export class GameSceneController extends Component {
    @property loginMode = LoginMode.Device;
    @property externalServerUrl = '';
    private status?: Label;
    private disposed = false;
    private launching = false;
    private leaving = false;
    private retryHome = false;

    protected start(): void {
        const node = new Node('StartupStatus'); node.layer = this.node.layer; node.setParent(this.node);
        node.addComponent(UITransform).setContentSize(540, 120); node.addComponent(BlockInputEvents);
        this.status = node.addComponent(Label); this.status.fontSize = 27; this.status.lineHeight = 38;
        this.status.horizontalAlign = Label.HorizontalAlign.CENTER; this.status.enableWrapText = true;
        this.status.string = '正在整理案卷…';
        node.on(Node.EventType.TOUCH_END, () => { void (this.retryHome ? this.goHome() : this.launch()); });
        void this.launch();
    }

    private async launch(): Promise<void> {
        if (this.launching || this.disposed || this.node.getComponent(CatDetectiveView)) return;
        this.launching = true;
        try {
            BrainPuzzleRuntime.configure();
            if (FrameworkRuntime.loginMode === null) FrameworkRuntime.selectLoginMode(this.loginMode, this.externalServerUrl);
            await FrameworkRuntime.initialize();
            await CandyArt.preload();
            if (this.disposed) return;
            this.node.addComponent(CatDetectiveView).setup(() => { void this.goHome(); });
            if (this.status) this.status.node.active = false;
        } catch (error) {
            console.error('[CatDetective] 无法打开案卷', error);
            if (this.status && !this.disposed) this.status.string = '案卷加载失败，点击重试';
        } finally { this.launching = false; }
    }

    private async goHome(): Promise<void> {
        if (this.leaving || this.disposed) return;
        this.leaving = true;
        try { await FrameworkRuntime.flush(); if (!this.disposed) await SceneFlow.goHome(); }
        catch (error) {
            this.retryHome = true;
            if (this.status && !this.disposed) {
                this.status.node.active = true; this.status.node.setSiblingIndex(this.node.children.length - 1);
                this.status.string = '保存未完成，点击重试返回入口';
            }
            console.warn('[CatDetective] 返回入口失败', error);
        } finally { this.leaving = false; }
    }

    protected onDestroy(): void { this.disposed = true; }
}
