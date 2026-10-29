import { _decorator, Button, Color, Component, Graphics, Label, Node, PhysicsSystem2D, UITransform, Widget, view, isValid } from 'cc';
import '../main';
import { GameEntry } from '../game-entry';
import { GameManager } from '../game-manager';
import { GameController } from '../GameController';
import { UIManager as LegacyUI } from '../ui-manager';
import { clearCanvasNodeCache } from '../CocosCompat';
import { BrainPuzzleRuntime } from '../features/brainpuzzle/BrainPuzzleRuntime';
import { FrameworkRuntime } from '../framework/FrameworkRuntime';
import { SceneFlow } from '../framework/SceneFlow';
import { UIManager } from '../framework/UIManager';
import { LoginMode } from '../framework/network/NetworkConfig';
const { ccclass, property } = _decorator;

/** Hosts all original gameplay inside the framework Game shell. */
@ccclass('GameSceneController')
export class GameSceneController extends Component {
    @property loginMode = LoginMode.Device;
    @property externalServerUrl = '';
    private root?: Node;
    private ui?: UIManager;
    private leaving = false;
    private disposed = false;
    private cleaned = false;
    private status?: Label;

    protected start(): void { this.createNavigation(); void this.launch(); }
    private async launch(): Promise<void> {
        try {
            BrainPuzzleRuntime.configure();
            if (FrameworkRuntime.loginMode === null)
                FrameworkRuntime.selectLoginMode(this.loginMode, this.externalServerUrl);
            await FrameworkRuntime.initialize();
            if (this.disposed) return;
            const root = this.root = new Node('BrainPuzzleRoot');
            root.layer = this.node.layer; root.addComponent(UITransform); root.setParent(this.node); root.setSiblingIndex(0);
            this.resize(); view.on('canvas-resize', this.resize, this);
            this.node.on(Node.EventType.SIZE_CHANGED, this.resize, this);
            this.ui = new UIManager(root);
            // Physics levels explicitly enable simulation in their startup lifecycle.
            PhysicsSystem2D.instance.enable = false;
            BrainPuzzleRuntime.root = root; BrainPuzzleRuntime.ui = this.ui;
            clearCanvasNodeCache(); root.addComponent(GameEntry);
            if (this.status) this.status.node.active = false;
        } catch (error) {
            console.error('[BrainPuzzle]', error);
            if (this.status) this.status.string = '加载失败，点击重试';
        }
    }
    private resize = (): void => {
        if (!this.root) return;
        const size = this.node.getComponent(UITransform)!.contentSize, scale = size.width / 1080;
        this.root.setScale(scale, scale, 1);
        this.root.getComponent(UITransform)!.setContentSize(1080, size.height / scale);
    };
    private createNavigation(): void {
        const node = new Node('FrameworkHome'); node.layer = this.node.layer; node.setParent(this.node);
        node.addComponent(UITransform).setContentSize(118, 44);
        const shape = node.addComponent(Graphics); shape.fillColor = new Color(27, 39, 57, 220);
        shape.roundRect(-59, -22, 118, 44, 12); shape.fill();
        const caption = new Node('Caption'); caption.layer = node.layer; caption.setParent(node);
        caption.addComponent(UITransform).setContentSize(114, 40);
        const text = caption.addComponent(Label); text.string = '返回入口'; text.fontSize = 22; text.lineHeight = 28;
        node.addComponent(Button); node.on(Button.EventType.CLICK, () => { void this.goHome(); });
        const widget = node.addComponent(Widget);
        widget.isAlignTop = widget.isAlignRight = true;
        widget.top = 8; widget.right = 10;
        widget.alignMode = Widget.AlignMode.ALWAYS; widget.updateAlignment();
        const status = new Node('StartupStatus'); status.layer = node.layer; status.setParent(this.node);
        status.addComponent(UITransform).setContentSize(540, 100);
        this.status = status.addComponent(Label); this.status.string = '正在加载游戏…'; this.status.fontSize = 28;
        status.on(Node.EventType.TOUCH_END, () => { if (!this.root) void this.launch(); });
    }
    private async goHome(): Promise<void> {
        if (this.leaving) return;
        this.leaving = true;
        try { await FrameworkRuntime.flush(); this.cleanupGame(); await SceneFlow.goHome(); }
        catch (error) {
            this.leaving = false;
            if (this.status) { this.status.node.active = true; this.status.string = '保存失败，请重试返回入口'; }
            console.error('[BrainPuzzle] Return failed', error);
        }
    }
    private cleanupGame(): void {
        if (this.cleaned) return;
        this.cleaned = true;
        if (this.root && isValid(this.root, true)) {
            const manager = GameManager.getInstance();
            manager.onLeaveState(manager.getCurrentState()); manager._currentState = 'none';
            GameController.getInstance().unbind(); LegacyUI.getInstance().destroyAllViews();
        }
        this.ui?.destroy();
        if (BrainPuzzleRuntime.root === this.root) { BrainPuzzleRuntime.root = null; BrainPuzzleRuntime.ui = null; }
        clearCanvasNodeCache();
    }
    protected onDestroy(): void {
        this.disposed = true; view.off('canvas-resize', this.resize, this);
        this.node.off(Node.EventType.SIZE_CHANGED, this.resize, this);
        this.cleanupGame();
    }
}
