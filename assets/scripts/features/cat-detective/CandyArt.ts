import { Color, Graphics, Node, Rect, Size, Sprite, SpriteFrame, UITransform, UIOpacity, Vec2, isValid } from 'cc';
import { ResourceLoader } from '../../framework/ResourceLoader';
import { PROP_ART, resolvePropArt } from './PropArtManifest';
import { PROP_ART_RECTS } from './PropArtRects';

const ROOT = 'cat-detective/candy';
const PANEL_RECTS = [[24,159,603,441],[643,144,595,454],[26,659,595,402],[640,656,594,405]];
const BUTTON_RECTS = [[19,99,295,151],[327,99,293,151],[634,99,293,151],[941,98,295,152],[19,408,295,150],[352,356,242,231],[660,356,243,231],[969,356,245,232],[39,676,251,212],[368,672,214,220],[657,659,263,238],[962,632,258,279],[25,941,289,262],[354,940,240,268],[638,940,274,251],[962,944,255,258]];
/** 正规贴图与图集切片。网格切片只建立SpriteFrame，不改写生成的PNG。 */
export class CandyArt {
    private static readonly frames = new Map<string, Promise<SpriteFrame>>();
    private static ready?: Promise<void>;
    static async preloadUI(): Promise<void> {
        await Promise.all(['ui/lobby', 'ui/panel-sheet', 'ui/button-sheet'].map(path => ResourceLoader.sprite(`${ROOT}/${path}`)));
    }
    static preload(): Promise<void> {
        this.ready ??= Promise.all([this.preloadUI(), ...Array.from(new Set(Object.values(PROP_ART).map(item => item.sheet)))
            .map(sheet => ResourceLoader.sprite(`${ROOT}/props/${sheet}`))]).then(() => undefined).catch(error => { this.ready = undefined; throw error; });
        return this.ready;
    }
    static async image(node: Node, path: string, cover = false): Promise<void> {
        // 装饰图沿用可恢复的assign错误处理；主场景cover请求由调用者显示错误与返回入口。
        if (!cover) return this.assign(node, ResourceLoader.sprite(`${ROOT}/${path}`), false);
        const frame = await ResourceLoader.sprite(`${ROOT}/${path}`);
        if (!isValid(node, true)) return;
        if (cover) {
            const size = node.getComponent(UITransform)!, ratio = frame.originalSize.width / frame.originalSize.height;
            const w = Math.max(size.width, size.height * ratio); size.setContentSize(w, w / ratio);
        }
        await this.assign(node, Promise.resolve(frame), false);
    }
    static panel(node: Node, index = 0): void { this.slicedArtwork(node, this.cell('ui/panel-sheet', index, 2, 2, 'panel')); }
    static button(node: Node, index = 0): void {
        if (index < 5) this.slicedArtwork(node, this.cell('ui/button-sheet', index, 4, 4, 'button'), true);
        else void this.assign(node, this.cell('ui/button-sheet', index, 4, 4, 'icon'), false);
    }
    static icon(node: Node, index: number): void { void this.assign(node, this.cell('ui/button-sheet', index, 4, 4, 'icon'), false); }
    static prop(node: Node, kind: string, id: string, label: string, art?: string): void {
        const key = resolvePropArt(kind, id, label, art), item = PROP_ART[key];
        if (!item) throw new Error(`缺少道具美术映射：${key}`);
        const grounded = ['cat','box','cushion','bowl','boot','plant','tray','bed','person','suspect','stone','lamp','book','bottle','stand','battery','bell','radio','gear'];
        const shadow = grounded.includes(kind) ? new Node('ContactShadow') : undefined;
        if (shadow) { shadow.layer = node.layer; shadow.setParent(node); shadow.addComponent(UITransform); }
        const artNode = new Node('Artwork'); artNode.layer = node.layer; artNode.setParent(node);
        const size = node.getComponent(UITransform)!; artNode.addComponent(UITransform).setContentSize(size.width, size.height);
        void this.assign(artNode, this.cell(`props/${item.sheet}`, item.index, 4, 4, 'prop'), false, true).then(() => {
            if (!isValid(artNode, true)) return;
            const visual = artNode.getComponent(UITransform)!;
            if (shadow && isValid(shadow, true)) {
                const g = shadow.addComponent(Graphics), scale = artNode.scale.x;
                const w = visual.width * scale, h = visual.height * scale;
                shadow.getComponent(UITransform)!.setContentSize(w, h * .12);
                shadow.setPosition(0, -h * .42);
                g.fillColor = new Color(58, 48, 39, 28); g.ellipse(0, 0, w * .35, h * .055); g.fill();
            }
            if (id === 'puddle') {
                // 地面积水是贴地的环境效果，不能把竖直水滴悬在地面上。
                visual.setContentSize(size.width * .9, size.height * .22);
                artNode.addComponent(UIOpacity).opacity = 105;
                const water = new Node('WaterSurface'); water.layer = node.layer; water.setParent(node); water.setSiblingIndex(0);
                water.addComponent(UITransform).setContentSize(size.width, size.height * .25);
                const g = water.addComponent(Graphics);
                g.fillColor = new Color(115, 190, 207, 105); g.ellipse(0, 0, size.width * .46, size.height * .11); g.fill();
                g.strokeColor = new Color(241, 253, 255, 210); g.lineWidth = 2;
                g.moveTo(-size.width * .24, size.height * .025); g.lineTo(size.width * .18, size.height * .025); g.stroke();
            }
        });
    }
    /** 先按显示高度缩放原图坐标，再延展中心；原图九宫格边距不能直接挤进小按钮。 */
    private static slicedArtwork(node: Node, request: Promise<SpriteFrame>, button = false): void {
        const artwork = new Node(button ? 'ButtonArtwork' : 'PanelArtwork');
        artwork.layer = node.layer; artwork.setParent(node); artwork.setSiblingIndex(0);
        const transform = artwork.addComponent(UITransform);
        void request.then(frame => {
            if (!isValid(node, true) || !isValid(artwork, true)) return;
            const size = node.getComponent(UITransform)!;
            const scale = button ? size.height / frame.originalSize.height
                : Math.min(size.width / frame.originalSize.width, size.height / frame.originalSize.height);
            transform.setContentSize(size.width / scale, size.height / scale);
            artwork.setScale(scale, scale, 1);
            return this.assign(artwork, Promise.resolve(frame), true);
        }).catch(error => { if (isValid(node, true)) console.error('[CandyArt] 九宫格资源加载失败', error); });
    }
    private static cell(path: string, index: number, columns: number, rows: number, type: string): Promise<SpriteFrame> {
        const key = `${path}:${index}:${type}`;
        let frame = this.frames.get(key);
        if (!frame) {
            frame = ResourceLoader.sprite(`${ROOT}/${path}`).then(source => {
                const width = source.originalSize.width / columns, height = source.originalSize.height / rows;
                let x = index % columns * width, y = Math.floor(index / columns) * height, w = width, h = height;
                const rect = path === 'ui/panel-sheet' ? PANEL_RECTS[index] : path === 'ui/button-sheet' ? BUTTON_RECTS[index] : PROP_ART_RECTS[path.split('/').pop()!]?.[index];
                if (rect) [x, y, w, h] = rect;
                const result = new SpriteFrame(); result.texture = source.texture; result.packable = false;
                result.rect = new Rect(x, y, w, h); result.originalSize = new Size(w, h); result.offset = new Vec2();
                if (type === 'panel' || type === 'button') {
                    result.insetLeft = result.insetRight = Math.floor(w * (type === 'button' ? .26 : .30));
                    result.insetTop = result.insetBottom = Math.floor(h * (type === 'button' ? .38 : .30));
                }
                result.addRef(); return result;
            }).catch(error => { this.frames.delete(key); throw error; });
            this.frames.set(key, frame);
        }
        return frame;
    }
    private static async assign(node: Node, request: Promise<SpriteFrame>, sliced: boolean, preserveAspect = false): Promise<void> {
        const sprite = node.getComponent(Sprite) ?? node.addComponent(Sprite);
        sprite.sizeMode = Sprite.SizeMode.CUSTOM; sprite.type = sliced ? Sprite.Type.SLICED : Sprite.Type.SIMPLE;
        try {
            const frame = await request; if (!isValid(node, true)) return;
            sprite.spriteFrame = frame;
            if (preserveAspect) {
                const t = node.getComponent(UITransform)!, ratio = frame.originalSize.width / frame.originalSize.height;
                const w = Math.min(t.width, t.height * ratio), h = w / ratio; t.setContentSize(w, h);
            }
        } catch (error) { if (isValid(node, true)) console.error('[CandyArt] 美术资源加载失败', error); }
    }
}
