import { Button, Color, Graphics, Label, Node, UITransform } from 'cc';
import { CandyArt } from './CandyArt';

export const INK = new Color(42, 58, 79);
export const CREAM = new Color(255, 250, 238);
export const GREEN = new Color(35, 100, 119);
export const ORANGE = new Color(145, 83, 41);
export const MUTED = new Color(86, 101, 119);
export const LINE = new Color(217, 211, 194);
export const SUCCESS = new Color(39, 106, 79);
export const DANGER = new Color(167, 58, 64);
export const UI_FONT = { caption: 24, body: 24, small: 20, title: 40 } as const;

export function makeNode(parent: Node, name: string, w: number, h: number, x = 0, y = 0): Node {
    const node = new Node(name); node.layer = parent.layer; node.setParent(parent);
    node.addComponent(UITransform).setContentSize(w, h); node.setPosition(x, y); return node;
}
/** 面板和按钮使用有真实高光、边框与装饰的美术九宫格。 */
export function panel(node: Node, color = CREAM, radius = 18, _stroke?: Color): void {
    const size = node.getComponent(UITransform)!;
    if (size.height < 120) CandyArt.button(node, color === GREEN ? 0 : 4);
    else CandyArt.panel(node, radius === 26 ? 1 : 0);
}
/** 阅读区使用安静的纸色底板；装饰贴图仅留给入口与弹窗，避免图案压字。 */
export function paper(node: Node, radius = 20, fill = CREAM): void {
    const { width: w, height: h } = node.getComponent(UITransform)!;
    const g = node.getComponent(Graphics) ?? node.addComponent(Graphics);
    g.clear(); g.fillColor = new Color(42, 58, 79, 24);
    g.roundRect(-w / 2, -h / 2 - 5, w, h, radius); g.fill();
    g.fillColor = fill; g.strokeColor = LINE; g.lineWidth = 2;
    g.roundRect(-w / 2, -h / 2, w, h, radius); g.fill(); g.stroke();
}
/** 统一深色按钮文字、次级奶油底与按压反馈。 */
export function actionButton(parent: Node, name: string, caption: string, x: number, y: number,
    w: number, h: number, action: () => void, primary = false): Button {
    const node = makeNode(parent, name, w, h, x, y);
    CandyArt.button(node, primary ? 0 : 4);
    const label = text(node, 'Caption', caption, 0, 2, w - 28, h - 18, UI_FONT.caption, INK);
    label.isBold = primary;
    const button = node.addComponent(Button); button.transition = Button.Transition.SCALE;
    button.duration = .10; button.zoomScale = .96;
    node.on(Button.EventType.CLICK, action); return button;
}
/** 纯透明遮罩是输入层，不作为道具或界面美术替代。 */
export function shade(node: Node, color = new Color(50, 31, 95, 155)): void {
    const size = node.getComponent(UITransform)!, g = node.getComponent(Graphics) ?? node.addComponent(Graphics);
    g.clear(); g.fillColor = color; g.rect(-size.width/2, -size.height/2, size.width, size.height); g.fill();
}
export function text(parent: Node, name: string, value: string, x: number, y: number, w: number, h: number, size = 24, color = INK): Label {
    const node = makeNode(parent, name, w, h, x, y); const label = node.addComponent(Label);
    label.string = value; label.fontSize = size; label.lineHeight = size * 1.35; label.color = color;
    label.horizontalAlign = Label.HorizontalAlign.CENTER; label.verticalAlign = Label.VerticalAlign.CENTER;
    label.enableWrapText = true; label.overflow = Label.Overflow.SHRINK; return label;
}
/** 道具全部来自正规透明贴图图集，保留此函数作为旧调用点的轻量适配。 */
export function drawProp(node: Node, kind: string, _done = false, variant = ''): void {
    CandyArt.prop(node, kind, variant, variant);
}
