import { BlockInputEvents, Button, Label, Node, UITransform, UIOpacity, isValid } from 'cc';
import { UIManager } from '../framework/UIManager';
import { CandyArt } from '../features/cat-detective/CandyArt';
import { DANGER, INK, MUTED, actionButton, makeNode, paper, text, shade } from '../features/cat-detective/DetectiveDrawing';

interface ScreenAction { text: string; callback: () => void; }

/** 正式糖果猫咪主入口，所有面板与按钮使用美术贴图。 */
export class FrameworkScreen {
    private readonly root: Node;
    private readonly status: Label;
    private readonly message: Label;
    private readonly actions: Button[] = [];
    private readonly retryButton: Button;
    private retry?: () => void;
    private busy = false;
    private modal?: Node;

    constructor(private readonly canvas: Node, private readonly ui: UIManager,
        title: string, description: string, actions: ScreenAction[]) {
        this.root = makeNode(ui.layer('content'), 'FrameworkScreen', 640, 1320);
        const backdrop = makeNode(this.root, 'HomeIllustration', 640, 1320);
        void CandyArt.image(backdrop, 'ui/lobby');
        const heading = makeNode(this.root, 'HeadingPanel', 568, 176, 0, 150); paper(heading, 24);
        text(heading, 'Title', title, 0, 37, 520, 64, 46);
        text(heading, 'Description', description, 0, -34, 516, 70, 23, MUTED);
        const card = makeNode(this.root, 'WelcomePanel', 536, 388, 0, -176); CandyArt.panel(card, 1);
        text(card, 'Welcome', actions.length ? '今天，和小猫一起出发吧！' : '小猫正在准备新的委托…', 0, 76, 428, 40, 24);
        actions.forEach((action, index) => {
            const button = this.button(this.root, `Action${index + 1}`, action.text, -176 - index * 100, action.callback, index === 0 ? 1 : 0);
            this.actions.push(button);
        });
        const statusPanel = makeNode(this.root, 'StatusPanel', 536, 112, 0, -444); paper(statusPanel, 20);
        this.status = text(statusPanel, 'SyncStatus', '', 0, 22, 480, 32, 20, MUTED);
        this.message = text(statusPanel, 'Message', '', 0, -24, 472, 48, 22, MUTED);
        this.retryButton = this.button(this.root, 'Retry', '重新试试', -548, () => this.retry?.(), 2);
        this.retryButton.node.active = false;
        text(this.root, 'Footer', '观察线索 · 动手尝试 · 发现惊喜', 0, -624, 550, 32, 20, MUTED);
        canvas.on(Node.EventType.SIZE_CHANGED, this.resize, this); this.resize();
    }

    private button(parent: Node, name: string, caption: string, y: number, action: () => void, style = 0): Button {
        return actionButton(parent, name, caption, 0, y, style === 1 ? 336 : 304, 80, action, style === 1);
    }
    setMode(_text: string): void { /* 登录环境属于配置，不挤占玩家入口。 */ }
    setStatus(value: string): void {
        this.status.string = value.replace('数据状态：', '').replace('本地保存', '进度自动保存').replace('已同步', '进度已同步');
    }
    setBusy(busy: boolean, value = ''): void {
        this.busy = busy; this.actions.forEach(button => { button.interactable = !busy; });
        this.actions.forEach(button => { const opacity = button.node.getComponent(UIOpacity) ?? button.node.addComponent(UIOpacity); opacity.opacity = busy ? 145 : 255; });
        this.retryButton.interactable = !busy;
        if (busy) { this.retry = undefined; this.retryButton.node.active = false; this.message.string = value; this.message.color = MUTED; }
    }
    showMessage(value: string): void { this.message.string = value; this.message.color = MUTED; this.retry = undefined; this.retryButton.node.active = false; }
    showError(value: string, retry: () => void): void {
        this.message.string = value; this.message.color = DANGER; this.retry = retry; this.retryButton.node.active = true;
    }
    showModal(): void {
        if (this.busy || this.modal) return;
        const overlay = this.modal = makeNode(this.root, 'FrameworkModal', 640, 1320); shade(overlay); overlay.addComponent(BlockInputEvents);
        const card = makeNode(overlay, 'Dialog', 552, 464); paper(card, 28);
        text(card, 'Title', '欢迎来到侦探社', 0, 144, 456, 64, 36, INK);
        text(card, 'Body', '在场景里观察线索，尝试拖动和清理物品。\n有困难时，小猫的提示会陪你继续调查。', 0, 16, 448, 160, 24);
        this.button(card, 'Close', '知道啦', -144, () => {
            this.ui.popModal(); this.modal = undefined;
        }, 1);
        this.ui.pushModal(overlay);
    }
    destroy(): void { this.canvas.off(Node.EventType.SIZE_CHANGED, this.resize, this); this.retry = undefined; }
    private resize = (): void => {
        if (!isValid(this.root, true)) return;
        const size = this.canvas.getComponent(UITransform)!;
        const scale = Math.max(.01, Math.min(size.width / 640, size.height / 1320)); this.root.setScale(scale, scale, 1);
    };
}
