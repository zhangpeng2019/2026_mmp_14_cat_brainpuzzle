import {
    BlockInputEvents, Button, Color, Graphics, Label, Node, UITransform, isValid,
} from 'cc';
import { UIManager } from '../framework/UIManager';

const PALETTE = {
    background: new Color(16, 24, 38),
    panel: new Color(27, 39, 57),
    primary: new Color(79, 129, 232),
    secondary: new Color(44, 61, 85),
    text: new Color(237, 243, 252),
    muted: new Color(163, 181, 207),
    error: new Color(255, 178, 164),
};

interface ScreenAction { text: string; callback: () => void; }

function node(parent: Node, name: string, width: number, height: number, y = 0): Node {
    const value = new Node(name);
    value.layer = parent.layer;
    value.setParent(parent);
    value.addComponent(UITransform).setContentSize(width, height);
    value.setPosition(0, y);
    return value;
}

function paint(target: Node, color: Color, radius = 0): void {
    const size = target.getComponent(UITransform)!;
    const graphics = target.getComponent(Graphics) ?? target.addComponent(Graphics);
    graphics.clear();
    graphics.fillColor = color;
    if (radius > 0) graphics.roundRect(-size.width / 2, -size.height / 2, size.width, size.height, radius);
    else graphics.rect(-size.width / 2, -size.height / 2, size.width, size.height);
    graphics.fill();
}

function label(parent: Node, name: string, text: string, y: number, height: number,
    fontSize = 30, color = PALETTE.text, width = 752): Label {
    const target = node(parent, name, width, height, y);
    const value = target.addComponent(Label);
    value.useSystemFont = true;
    value.string = text;
    value.fontSize = fontSize;
    value.lineHeight = fontSize * 1.5;
    value.color = color;
    value.horizontalAlign = Label.HorizontalAlign.CENTER;
    value.verticalAlign = Label.VerticalAlign.CENTER;
    value.enableWrapText = true;
    value.overflow = Label.Overflow.SHRINK;
    return value;
}

function button(parent: Node, name: string, text: string, y: number,
    callback: () => void, primary = false, width = 752, height = 88): Button {
    const target = node(parent, name, width, height, y);
    paint(target, primary ? PALETTE.primary : PALETTE.secondary, 18);
    label(target, 'Caption', text, 0, height - 16, 30, PALETTE.text, width - 32);
    const value = target.addComponent(Button);
    value.transition = Button.Transition.SCALE;
    value.zoomScale = 0.97;
    target.on(Button.EventType.CLICK, callback);
    return value;
}

/** Asset-free framework shell. Replace this presentation when adding a product UI. */
export class FrameworkScreen {
    private readonly background: Node;
    private readonly root: Node;
    private readonly mode: Label;
    private readonly status: Label;
    private readonly message: Label;
    private readonly actions: Button[] = [];
    private readonly retryButton: Button;
    private retry?: () => void;
    private busy = false;
    private modal?: Node;
    private modalCard?: Node;
    private readonly panelHeight: number;

    constructor(private readonly canvas: Node, private readonly ui: UIManager,
        title: string, description: string, actions: ScreenAction[]) {
        const size = canvas.getComponent(UITransform)!;
        const extra = Math.max(0, actions.length - 5) * 82;
        this.panelHeight = 1160 + extra;
        this.background = node(ui.layer('background'), 'FrameworkBackground', size.width, size.height);
        this.root = node(ui.layer('content'), 'FrameworkScreen', 900, this.panelHeight);
        paint(this.root, PALETTE.panel, 36);
        label(this.root, 'Eyebrow', 'BRAIN PUZZLE  /  87 LEVELS', 490 + extra / 2, 52, 23, PALETTE.muted);
        label(this.root, 'Title', title, 386 + extra / 2, 112, 56);
        label(this.root, 'Description', description, 257 + extra / 2, 126, 30, PALETTE.muted);
        this.mode = label(this.root, 'LoginMode', '', 141 + extra / 2, 50, 28);
        this.status = label(this.root, 'SyncStatus', '', 80 + extra / 2, 50, 28, PALETTE.muted);
        this.message = label(this.root, 'Message', '', -12 + extra / 2, 108, 25, PALETTE.muted);
        const compact = actions.length > 4;
        actions.forEach((action, index) => {
            this.actions.push(button(this.root, `Action${index + 1}`, action.text,
                (compact ? -111 - index * 82 : actions.length > 3 ? -113 - index * 94 : -133 - index * 110) + extra / 2,
                action.callback, index === 0, 752, compact ? 72 : 88));
        });
        this.retryButton = button(this.root, 'Retry', '重试', compact ? -529 - extra / 2 : actions.length > 3 ? -510 : -463,
            () => this.retry?.(), false, 752, compact ? 72 : 88);
        this.retryButton.node.active = false;
        canvas.on(Node.EventType.SIZE_CHANGED, this.resize, this);
        this.resize();
    }

    setMode(text: string): void { this.mode.string = text; }
    setStatus(text: string): void { this.status.string = text; }

    setBusy(busy: boolean, text = ''): void {
        this.busy = busy;
        this.actions.forEach(value => { value.interactable = !busy; });
        this.retryButton.interactable = !busy;
        if (busy) {
            this.retry = undefined;
            this.retryButton.node.active = false;
            this.message.color = PALETTE.muted;
            this.message.string = text;
        }
    }

    showMessage(text: string): void {
        this.message.color = PALETTE.muted;
        this.message.string = text;
        this.retry = undefined;
        this.retryButton.node.active = false;
    }

    showError(text: string, retry: () => void): void {
        this.message.color = PALETTE.error;
        this.message.string = text;
        this.retry = retry;
        this.retryButton.node.active = true;
    }

    showModal(): void {
        if (this.busy || (this.modal && isValid(this.modal))) return;
        const size = this.canvas.getComponent(UITransform)!;
        const overlay = node(this.ui.layer('modal'), 'FrameworkModal', size.width, size.height);
        overlay.addComponent(BlockInputEvents);
        const card = node(overlay, 'Dialog', 800, 620);
        paint(card, PALETTE.panel, 32);
        label(card, 'Title', 'UI 层级与弹窗', 198, 86, 42, PALETTE.text, 688);
        label(card, 'Description',
            '弹窗由 UIManager 管理。\n关闭后恢复当前场景。\n\n业务界面可以使用同一套 UI 层与弹窗栈。',
            22, 260, 29, PALETTE.muted, 688);
        button(card, 'Close', '关闭', -201, () => {
            this.ui.popModal();
            this.modal = undefined;
            this.modalCard = undefined;
        }, true, 640);
        this.modal = overlay;
        this.modalCard = card;
        this.ui.pushModal(overlay);
        this.resize();
    }

    destroy(): void {
        this.canvas.off(Node.EventType.SIZE_CHANGED, this.resize, this);
        this.retry = undefined;
        // UIManager owns all layer nodes, including this screen and its popup.
    }

    private resize(): void {
        const size = this.canvas.getComponent(UITransform)!;
        this.background.getComponent(UITransform)!.setContentSize(size.width, size.height);
        paint(this.background, PALETTE.background);
        const scale = Math.max(0.01, Math.min((size.width - 64) / 900, (size.height - 96) / this.panelHeight, 1));
        this.root.setScale(scale, scale, 1);
        if (this.modal && isValid(this.modal)) {
            this.modal.getComponent(UITransform)!.setContentSize(size.width, size.height);
            paint(this.modal, new Color(0, 0, 0, 170));
            const modalScale = Math.max(0.01, Math.min((size.width - 64) / 800, (size.height - 96) / 620, 1));
            this.modalCard?.setScale(modalScale, modalScale, 1);
        }
    }
}
