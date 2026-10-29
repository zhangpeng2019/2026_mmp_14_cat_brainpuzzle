import { Node, Prefab, UITransform, Widget, instantiate, isValid } from 'cc';
import { ResourceLoader } from './ResourceLoader';

export type UILayer = 'background' | 'content' | 'effect' | 'hud' | 'modal' | 'toast' | 'loading';

export interface UIOpenOptions {
    layer?: UILayer;
    modal?: boolean;
    onOpen?: (node: Node) => void | Promise<void>;
    onClose?: (node: Node) => void;
}

interface ViewRecord {
    prefab?: Prefab;
    onClose?: (node: Node) => void;
    closed: boolean;
    finalized: boolean;
}

export class UIOpenCancelledError extends Error {
    constructor() {
        super('UI was closed or its manager was destroyed before opening completed.');
        this.name = 'UIOpenCancelledError';
    }
}

/** One manager per Canvas. Destroy it in the scene controller's onDestroy(). */
export class UIManager {
    private readonly layers = new Map<UILayer, Node>();
    private readonly modals: Node[] = [];
    private readonly views = new Map<Node, ViewRecord>();
    private destroyed = false;

    constructor(readonly canvas: Node) {
        for (const name of ['background', 'content', 'effect', 'hud', 'modal', 'toast', 'loading'] as UILayer[]) {
            const node = new Node(name);
            node.layer = canvas.layer;
            node.addComponent(UITransform);
            const widget = node.addComponent(Widget);
            widget.isAlignLeft = widget.isAlignRight = widget.isAlignTop = widget.isAlignBottom = true;
            widget.left = widget.right = widget.top = widget.bottom = 0;
            node.setParent(canvas);
            widget.updateAlignment();
            this.layers.set(name, node);
        }
        canvas.once(Node.EventType.NODE_DESTROYED, this.destroy, this);
    }

    layer(name: UILayer): Node {
        const node = this.layers.get(name);
        if (this.destroyed || !node || !isValid(node, true)) throw new UIOpenCancelledError();
        return node;
    }

    /** Every open creates a distinct instance. Prefab loads are shared by ResourceLoader. */
    async open(path: string, options: UIOpenOptions = {}): Promise<Node> {
        if (this.destroyed || !isValid(this.canvas, true)) throw new UIOpenCancelledError();
        const prefab = await ResourceLoader.load(path, Prefab);
        if (this.destroyed || !isValid(this.canvas, true)) throw new UIOpenCancelledError();
        prefab.addRef();
        let node: Node;
        try { node = instantiate(prefab); }
        catch (error) { prefab.decRef(); throw error; }
        this.track(node, { prefab, onClose: options.onClose, closed: false, finalized: false });
        try {
            if (options.modal || options.layer === 'modal') this.pushModal(node);
            else node.setParent(this.layer(options.layer ?? 'content'));
            await options.onOpen?.(node);
            if (this.destroyed || !isValid(node, true) || !this.views.has(node)) throw new UIOpenCancelledError();
            return node;
        } catch (error) {
            this.close(node);
            throw error;
        }
    }

    private track(node: Node, record: ViewRecord): void {
        this.views.set(node, record);
        node.once(Node.EventType.NODE_DESTROYED, () => {
            this.notifyClose(node, record);
            if (!record.finalized) {
                record.finalized = true;
                record.prefab?.decRef();
            }
        });
    }

    private notifyClose(node: Node, record: ViewRecord): void {
        this.views.delete(node);
        const index = this.modals.indexOf(node);
        if (index >= 0) this.modals.splice(index, 1);
        if (record.closed) return;
        record.closed = true;
        try { record.onClose?.(node); }
        catch (error) { console.error('UI onClose callback failed', error); }
    }

    /** onClose runs once. The prefab reference is released when Cocos destroys the node. */
    close(node: Node): void {
        const record = this.views.get(node);
        if (!record) return;
        this.notifyClose(node, record);
        if (isValid(node, true)) {
            node.active = false;
            node.destroy();
        }
    }

    /** Adopt an existing node into this manager's modal lifetime. */
    pushModal(node: Node): void {
        if (!isValid(node, true)) throw new UIOpenCancelledError();
        node.setParent(this.layer('modal'));
        if (!this.views.has(node)) this.track(node, { closed: false, finalized: false });
        const index = this.modals.indexOf(node);
        if (index >= 0) this.modals.splice(index, 1);
        this.modals.push(node);
        node.setSiblingIndex(this.modals.length - 1);
    }

    popModal(): void {
        const node = this.modals[this.modals.length - 1];
        if (node) this.close(node);
    }

    clearModals(): void {
        for (const node of [...this.modals].reverse()) this.close(node);
    }

    destroy(): void {
        if (this.destroyed) return;
        this.destroyed = true;
        this.canvas.off(Node.EventType.NODE_DESTROYED, this.destroy, this);
        for (const node of [...this.views.keys()]) this.close(node);
        for (const node of this.layers.values()) if (isValid(node, true)) node.destroy();
        this.layers.clear();
    }
}
