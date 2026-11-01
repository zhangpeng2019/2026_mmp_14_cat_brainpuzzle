import {
    _decorator, BlockInputEvents, Button, Color, Component, EventKeyboard, EventTouch,
    Graphics, input, Input, KeyCode, Label, Mask, Node, UITransform, UIOpacity, Vec3, view, isValid, game, Game,
} from 'cc';
import { CASE_DATA, CaseDefinition, CaseObject } from './CaseData';
import { CaseSession } from './CaseSession';
import { CaseClock } from './CaseClock';
import { CaseAction, SwipeDirection } from './CaseTypes';
import { CandyArt } from './CandyArt';
import { resolveCaseObjects } from './CaseArtLayout';
import { CatDetectiveState, DetectiveSave } from './CatDetectiveState';
import { CREAM, DANGER, GREEN, INK, MUTED, ORANGE, SUCCESS, actionButton, makeNode, paper, shade, text } from './DetectiveDrawing';

const { ccclass } = _decorator;
const BOARD_W = 584, BOARD_H = 720;
const PAGE_SIZE = 6;
interface FocusItem { node: Node; activate: () => void; }

/** 侦探社的场景式关卡、案卷与弹层；模型不依赖引擎。 */
@ccclass('CatDetectiveView')
export class CatDetectiveView extends Component {
    private shell!: Node;
    private board?: Node;
    private objects?: Node;
    private effects?: Node;
    private feedbackLabel?: Label;
    private progressLabel?: Label;
    private progressBar?: Node;
    private session?: CaseSession;
    private definition?: CaseDefinition;
    private save!: DetectiveSave;
    private page = 0;
    private selected?: string;
    private hintLevel = 0;
    private modal?: Node;
    private focusItems: FocusItem[] = [];
    private focusIndex = -1;
    private focusRing?: Node;
    private focusedName?: string;
    private modalReturnFocus?: string;
    private revision = 0;
    private exit?: () => void;
    private disposed = false;
    private backgrounds = new Map<Node, string>();
    private clock?: CaseClock;
    private timerLabel?: Label;
    private artReady = false;
    private backgroundPaused = false;
    private saveTick = 0;
    private modalKind = '';
    private keyStarted = 0;
    private scrubKeyCount = 0;
    private scrubKeyObject = '';

    setup(exit: () => void): void {
        this.exit = exit; this.save = CatDetectiveState.read();
        this.shell = makeNode(this.node, 'DetectiveShell', 640, 1320);
        this.node.on(Node.EventType.SIZE_CHANGED, this.resize, this);
        view.on('canvas-resize', this.resize, this);
        input.on(Input.EventType.KEY_DOWN, this.onKey, this);
        input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
        game.on(Game.EVENT_HIDE, this.onAppHide, this); game.on(Game.EVENT_SHOW, this.onAppShow, this);
        this.showCases(); this.resize();
    }

    private resize = (): void => {
        if (!this.shell) return;
        const size = this.node.getComponent(UITransform)!;
        const scale = Math.max(0.01, Math.min(size.width / 640, size.height / 1320));
        this.shell.setScale(scale, scale, 1);
    };

    private clear(): void {
        this.revision++; this.modal = undefined; this.modalKind = ''; this.artReady = false; this.clock = undefined;
        this.timerLabel = undefined; this.focusItems = []; this.focusIndex = -1;
        this.focusRing?.destroy(); this.focusRing = undefined; this.focusedName = undefined;
        this.modalReturnFocus = undefined; this.selected = undefined; this.backgrounds.clear();
        for (const child of [...this.shell.children]) { child.removeFromParent(); child.destroy(); }
        this.board = undefined; this.objects = undefined; this.effects = undefined;
        const backdrop = makeNode(this.shell, 'CandyBackdrop', 640, 1320); void CandyArt.image(backdrop, 'ui/lobby');
        const veil = makeNode(this.shell, 'ReadingVeil', 640, 1320); shade(veil, new Color(255, 250, 238, 218));
    }

    private button(parent: Node, name: string, caption: string, x: number, y: number, w: number, h: number,
        action: () => void, primary = false): Node {
        const node = actionButton(parent, name, caption, x, y, w, h, action, primary).node;
        this.focusItems.push({ node, activate: action }); return node;
    }

    private showCases(): void {
        this.clear(); this.session = undefined; this.definition = undefined;
        const header = makeNode(this.shell, 'CaseListHeader', 584, 184, 0, 516); paper(header, 24);
        text(header, 'Title', '猫咪侦探社', 0, 44, 536, 64, 42);
        text(header, 'Intro', '挑一份委托，和小猫一起寻找答案', 0, -10, 536, 36, 23, MUTED);
        const count = this.save.cleared.length;
        const pageCount = Math.ceil(CASE_DATA.length / PAGE_SIZE);
        text(header, 'CaseCount', `案卷 ${this.page + 1} / ${pageCount}     ·     已破获 ${count} / ${CASE_DATA.length}`, 0, -54, 536, 32, 20, GREEN);
        const entries = CASE_DATA.slice(this.page * PAGE_SIZE, (this.page + 1) * PAGE_SIZE);
        entries.forEach((definition, index) => {
            const x = (index % 3 - 1) * 196, y = 248 - Math.floor(index / 3) * 300;
            const card = makeNode(this.shell, `Case${definition.id}`, 180, 276, x, y);
            paper(card, 18);
            const thumb = makeNode(card, 'ScenePreview', 156, 116, 0, 64);
            this.background(thumb, definition.background);
            text(card, 'Number', `第 ${String(definition.id).padStart(2, '0')} 关 · ${definition.category}`, 0, -20, 160, 28, 18, MUTED);
            text(card, 'Name', definition.title, 0, -62, 160, 52, 23);
            const cleared = this.save.cleared.includes(definition.id);
            const state = makeNode(card, 'StateBadge', 132, 30, 0, -110); paper(state, 12, cleared ? new Color(227, 241, 229) : new Color(234, 241, 244));
            text(state, 'Category', cleared ? '已破获' : '开始调查', 0, 0, 120, 28, 18, cleared ? SUCCESS : GREEN);
            const action = () => this.openCase(definition.id);
            const button = card.addComponent(Button); button.transition = Button.Transition.SCALE; button.zoomScale = .97; button.duration = .1;
            card.on(Button.EventType.CLICK, action);
            this.focusItems.push({ node: card, activate: action });
        });
        this.button(this.shell, 'PreviousPage', '上一页', -202, -280, 160, 76, () => { this.page = (this.page + pageCount - 1) % pageCount; this.showCases(); });
        text(this.shell, 'Pagination', ['初识小镇', '循迹追光', '午夜来信', '奇妙工坊', '小镇回响', '信使归来', '日常发现', '邻里委托', '追风寻迹', '星夜调查', '旧物新知', '灯火相连', '归途有光', '小镇来信'][this.page] ?? `第 ${this.page + 1} 辑`, 0, -280, 190, 56, 24, GREEN);
        this.button(this.shell, 'NextPage', '下一页', 202, -280, 160, 76, () => { this.page = (this.page + 1) % pageCount; this.showCases(); });
        const guide = makeNode(this.shell, 'CaseListGuide', 584, 128, 0, -414); paper(guide, 20);
        text(guide, 'Instructions', '观察 · 拖动 · 擦拭 · 长按\n暂停或查看提示时，不消耗调查时间', 0, 0, 528, 88, 23, MUTED);
        this.button(this.shell, 'BackHome', '返回入口', 0, -560, 272, 80, () => this.exit?.());
    }

    openCase(id: number): void {
        const original = CASE_DATA.find(item => item.id === id); if (!original) return;
        const definition = { ...original, objects: resolveCaseObjects(original) };
        this.page = Math.floor(CASE_DATA.indexOf(original) / PAGE_SIZE);
        this.clear(); this.definition = definition;
        this.session = new CaseSession(definition, this.save.sessions[String(id)]);
        this.clock = new CaseClock(definition.timeLimitSeconds ?? Math.min(360, 150 + definition.steps.length * 15), this.save.timers?.[String(id)]);
        this.hintLevel = 0; this.saveTick = 0;
        this.button(this.shell, 'CaseList', '‹ 案卷', -224, 600, 144, 72, () => { if (this.persist()) this.showCases(); });
        this.button(this.shell, 'Notes', '笔记', -60, 600, 136, 72, () => this.showNotes());
        const timer = makeNode(this.shell, 'Timer', 196, 64, 190, 600); paper(timer, 24);
        const clockIcon = makeNode(timer, 'ClockIcon', 38, 38, -62, 2); CandyArt.icon(clockIcon, 13);
        this.timerLabel = text(timer, 'TimeRemaining', '', 20, 1, 128, 48, 29, INK); this.updateTimerLabel();
        const header = makeNode(this.shell, 'CaseHeader', 600, 176, 0, 478); paper(header, 20);
        text(header, 'CaseTag', `第 ${String(id).padStart(2, '0')} 关 · ${definition.mechanism ?? definition.category}`, 0, 54, 544, 32, 20, MUTED);
        text(header, 'CaseTitle', definition.title, 0, 6, 544, 58, 38);
        text(header, 'Goal', definition.goal, 0, -52, 544, 56, 24, INK);
        const frame = makeNode(this.shell, 'BoardFrame', 600, 736, 0, 14); paper(frame, 16);
        this.board = makeNode(this.shell, 'Board', BOARD_W, BOARD_H, 0, 14);
        this.background(this.board, definition.background);
        this.effects = makeNode(this.board, 'SceneEffects', BOARD_W, BOARD_H);
        this.objects = makeNode(this.board, 'Objects', BOARD_W, BOARD_H);
        this.progressLabel = text(this.shell, 'Progress', '', 0, -368, 560, 28, 20, GREEN);
        const track = makeNode(this.shell, 'ProgressTrack', 550, 6, 0, -390);
        const trackGraphics = track.addComponent(Graphics); trackGraphics.fillColor = new Color(219, 223, 218); trackGraphics.roundRect(-275,-3,550,6,3); trackGraphics.fill();
        this.progressBar = makeNode(track, 'ProgressFill', 0, 5, -275, 0);
        const feedbackCard = makeNode(this.shell, 'DialoguePanel', 600, 128, 0, -474); paper(feedbackCard, 20);
        text(feedbackCard, 'Speaker', '调查手记', 0, 38, 544, 28, 18, GREEN);
        this.feedbackLabel = text(feedbackCard, 'Feedback', definition.story, 0, -14, 544, 76, 23);
        this.button(this.shell, 'Undo', '撤销', -224, -588, 128, 80, () => {
            if (this.session?.undo()) { this.selected = undefined; this.hintLevel = 0; this.persist(); this.refresh(); }
        });
        this.button(this.shell, 'Hint', '线索提示', -56, -588, 176, 80, () => this.showHint(), true);
        this.button(this.shell, 'Reset', '重玩', 112, -588, 128, 80, () => this.confirmReset());
        this.button(this.shell, 'Pause', '暂停', 248, -588, 96, 80, () => this.pause());
        text(this.shell, 'InputGuide', '点击观察 · 拖动使用 · 滑动 / 擦拭 / 长按', 0, -644, 590, 30, 18, MUTED);
        this.refresh(false);
    }

    private background(node: Node, name: string): void {
        this.backgrounds.set(node, name);
        node.addComponent(Mask).type = Mask.Type.GRAPHICS_RECT;
        const art = makeNode(node, 'SceneArt', node.getComponent(UITransform)!.width, node.getComponent(UITransform)!.height);
        art.setSiblingIndex(0);
        const revision = this.revision;
        void CandyArt.image(art, `scenes/${name}`, true).then(() => {
            if (this.disposed || !isValid(art, true)) return;
            if (node === this.board && revision === this.revision) {
                this.artReady = true;
                if (this.clock?.expired && !this.session?.won) this.timeout();
            }
        }).catch(error => {
            if (isValid(art, true)) text(art, 'ResourceError', '场景载入失败\n返回案卷后可重试', 0, 0, 300, 90, 20, INK);
            console.warn('[CatDetective] 场景资源加载失败', error);
        });
    }

    private refresh(showFeedback = true): void {
        if (!this.session || !this.definition || !this.objects) return;
        // 先移除失效对象的焦点引用，保留工具栏及导航。
        this.focusItems = this.focusItems.filter(item => item.node.parent !== this.objects);
        this.focusRing?.destroy(); this.focusRing = undefined;
        for (const child of [...this.objects.children]) { child.removeFromParent(); child.destroy(); }
        this.focusIndex = -1;
        for (const object of [...this.session.visibleObjects.filter(item => item.decorative), ...this.session.visibleObjects.filter(item => !item.decorative)]) this.createObject(object);
        if (this.focusedName) {
            const target = this.focusItems.find(item => item.node.name === this.focusedName)
                ?? this.focusItems.find(item => item.node.name.startsWith('Object_'));
            if (target) this.focusOn(target.node);
        }
        this.drawSceneEffects();
        if (showFeedback && this.feedbackLabel) this.feedbackLabel.string = this.session.feedback;
        if (this.progressLabel) this.progressLabel.string = `调查进度  ${this.session.completed.length} / ${this.definition.steps.length}`;
        if (this.progressBar) {
            const w = Math.max(1, 550 * this.session.progress);
            this.progressBar.getComponent(UITransform)!.setContentSize(w, 5);
            this.progressBar.setPosition(-275 + w / 2, 0);
            const graphics = this.progressBar.getComponent(Graphics) ?? this.progressBar.addComponent(Graphics);
            graphics.clear(); graphics.fillColor = GREEN; graphics.roundRect(-w/2,-3,w,6,Math.min(3,w/2)); graphics.fill();
        }
    }

    private drawSceneEffects(): void {
        if (!this.effects || !this.session || !this.definition) return;
        const g = this.effects.getComponent(Graphics) ?? this.effects.addComponent(Graphics); g.clear();
        const done = this.session.completed;
        const beam = (points: number[]) => {
            g.strokeColor = new Color(255, 221, 120, 150); g.lineWidth = 18;
            g.moveTo((points[0] - .5) * BOARD_W, (.5 - points[1]) * BOARD_H);
            for (let i = 2; i < points.length; i += 2) g.lineTo((points[i] - .5) * BOARD_W, (.5 - points[i + 1]) * BOARD_H);
            g.stroke();
        };
        if (this.definition.id === 3 && done.includes('open')) {
            beam([.19, .35, .48, .49]);
            if (done.includes('place')) beam(done.includes('rotate') ? [.48, .49, .79, .64] : [.48, .49, .48, .06]);
        }
        if (this.definition.id === 18 && done.includes('bulb')) {
            beam(done.includes('mirror') ? [.5, .29, .78, .35, .98, .14] : [.5, .29, .15, .29]);
            const flashes = done.filter(id => id.startsWith('flash')).length;
            for (let i = 0; i < flashes; i++) { g.fillColor = ORANGE; g.circle(-24 + 24 * i, 150, 8); g.fill(); }
        }
        if (this.definition.id === 17 && done.includes('ripple') && !done.includes('cover')) {
            g.strokeColor = new Color(141, 188, 188, 220); g.lineWidth = 3;
            for (let i = 1; i <= 3; i++) { g.ellipse(0, -BOARD_H * .22, 19 * i, 7 * i); g.stroke(); }
        }
    }

    private createObject(object: CaseObject): void {
        if (!this.objects) return;
        const w = object.w * BOARD_W, h = object.h * BOARD_H;
        const node = makeNode(this.objects, `Object_${object.id}`, w, h,
            (object.x - 0.5) * BOARD_W, (0.5 - object.y) * BOARD_H);
        const investigated = !!this.definition?.steps.some(step => step.source === object.id && this.session?.completed.includes(step.id));
        CandyArt.prop(node, object.kind, object.id, object.label, object.art);
        const artwork = node.getChildByName('Artwork');
        if (artwork) { artwork.angle = object.angle ?? 0; artwork.setScale(object.scale ?? 1, object.scale ?? 1, 1); }
        if (object.decorative) return;
        if (investigated) { const star = makeNode(node, 'Investigated', 24, 24, w / 2 - 5, h / 2 - 5); CandyArt.icon(star, 14); }
        if (this.selected === object.id) {
            const ring = makeNode(node, 'Selected', 32, 32, -w/2, h/2); CandyArt.icon(ring, 15);
        }
        let origin = new Vec3(), startX = 0, startY = 0, previousX = 0, previousY = 0, started = 0, armed = false, moved = false, travel = 0, turns = 0, sign = 0;
        node.on(Node.EventType.TOUCH_START, (event: EventTouch) => {
            armed = this.canInteract(); if (!armed) return;
            origin = node.position.clone(); const pt = event.getUILocation(); startX = previousX = pt.x; startY = previousY = pt.y;
            started = Date.now(); moved = false; travel = 0; turns = 0; sign = 0;
        });
        node.on(Node.EventType.TOUCH_MOVE, (event: EventTouch) => {
            if (!armed || !this.canInteract()) return;
            const pt = event.getUILocation();
            if (Math.abs(pt.x - startX) + Math.abs(pt.y - startY) > 8) moved = true;
            const dx = pt.x - previousX, dy = pt.y - previousY;
            travel += Math.hypot(dx, dy) / this.shell.worldScale.x / BOARD_W;
            const nextSign = Math.sign(Math.abs(dx) > Math.abs(dy) ? dx : dy);
            if (nextSign && sign && nextSign !== sign) turns++;
            if (nextSign) sign = nextSign; previousX = pt.x; previousY = pt.y;
            const gesture = this.session?.availableSteps.find(step => step.source === object.id && ['scrub','swipe'].includes(step.action));
            if (gesture?.action === 'scrub') {
                const opacity = artwork?.getComponent(UIOpacity) ?? artwork?.addComponent(UIOpacity);
                if (opacity) opacity.opacity = Math.max(95, 255 - travel * 180);
                return;
            }
            if (moved && !gesture && this.definition?.steps.some(step => step.action === 'drag' && step.source === object.id)) {
                node.setPosition(origin.x + (pt.x - startX) / this.shell.worldScale.x, origin.y + (pt.y - startY) / this.shell.worldScale.y);
                node.setSiblingIndex(this.objects!.children.length - 1);
            }
        });
        const finish = (event: EventTouch): void => {
            if (!armed) return; armed = false;
            if (!this.canInteract()) { node.setPosition(origin); return; }
            const gesture = this.session?.availableSteps.find(step => step.source === object.id && ['swipe','hold','scrub'].includes(step.action));
            if (gesture?.action === 'scrub') { this.performAction({ action: 'scrub', source: object.id, distance: turns >= 2 ? travel : 0 }); return; }
            if (gesture?.action === 'hold' && !moved) { this.performAction({ action: 'hold', source: object.id, elapsedMs: Date.now() - started }); return; }
            if (gesture?.action === 'swipe' && moved) {
                const pt = event.getUILocation(), dx = pt.x - startX, dy = pt.y - startY;
                const direction: SwipeDirection = Math.abs(dx) > Math.abs(dy) ? dx > 0 ? 'right' : 'left' : dy > 0 ? 'up' : 'down';
                this.performAction({ action: 'swipe', source: object.id, direction, distance: Math.hypot(dx,dy)/this.shell.worldScale.x/BOARD_W }); return;
            }
            if (moved) {
                const target = this.targetAt(event, object.id); node.setPosition(origin);
                this.performDrag(object.id, target?.id); return;
            }
            this.activateObject(object);
        };
        node.on(Node.EventType.TOUCH_END, finish);
        node.on(Node.EventType.TOUCH_CANCEL, (event: EventTouch) => {
            // Creator将“在原命中框外松手”也派发为节点CANCEL；原始事件码仍为END。
            // 真正的系统取消只归位，不提交任何手势。
            if (event.getEventCode() === Input.EventType.TOUCH_END) finish(event);
            else { node.setPosition(origin); moved = false; armed = false; }
        });
        this.focusItems.push({ node, activate: () => this.activateObject(object) });
    }

    private targetAt(event: EventTouch, source: string): CaseObject | undefined {
        if (!this.board || !this.session) return undefined;
        const p = event.getUILocation(); const local = this.board.getComponent(UITransform)!.convertToNodeSpaceAR(new Vec3(p.x, p.y, 0));
        const x = local.x / BOARD_W + 0.5, y = 0.5 - local.y / BOARD_H;
        return [...this.session.visibleObjects].reverse().find(o => !o.decorative && o.id !== source && Math.abs(x - o.x) <= o.w / 2 && Math.abs(y - o.y) <= o.h / 2);
    }

    private activateObject(object: CaseObject): void {
        if (!this.session || !this.canInteract()) return;
        if (this.selected && this.selected !== object.id) { this.performDrag(this.selected, object.id); return; }
        if (this.selected === object.id) { this.selected = undefined; this.refresh(false); return; }
        const result = this.session.act({ action: 'tap', source: object.id });
        if (!result.accepted && this.definition?.steps.some(step => step.action === 'drag' && step.source === object.id)) {
            this.selected = object.id; this.refresh(false);
            if (this.feedbackLabel) this.feedbackLabel.string = object.description ?? '已选中。拖动它，或点击要使用的目标。';
            return;
        }
        this.afterAction(result.accepted);
    }

    private performDrag(source: string, target?: string): void {
        this.performAction({ action: 'drag', source, target });
    }

    private performAction(action: CaseAction): void {
        if (!this.session || !this.canInteract()) return;
        const result = this.session.act(action); this.selected = undefined; this.afterAction(result.accepted);
    }

    private canInteract(): boolean {
        return !!this.session && !this.modal && !this.session.won && this.artReady && !this.clock?.expired && !this.backgroundPaused;
    }

    private afterAction(accepted: boolean): void {
        let saved = true;
        if (accepted) { this.hintLevel = 0; saved = this.persist(); }
        this.refresh();
        if (accepted && saved && this.session?.won) this.victory();
    }

    private persist(): boolean {
        if (!this.definition || !this.session) return true;
        this.save.sessions[String(this.definition.id)] = this.session.serialize();
        if (this.clock) { this.save.timers ??= {}; this.save.timers[String(this.definition.id)] = this.clock.serialize(); }
        if (this.session.won && !this.save.cleared.includes(this.definition.id)) this.save.cleared.push(this.definition.id);
        try { CatDetectiveState.write(this.save); return true; }
        catch { this.popup('保存未完成', '本次调查仍可继续。请稍后返回案卷重试保存。', [
            { text: '重试保存', action: () => { this.closePopup(); if (this.persist()) { if (this.session?.won) this.victory(); else if (this.clock?.expired) this.timeout(); } } },
            { text: '继续调查', action: () => this.closePopup() },
        ]); return false; }
    }

    private showHint(): void {
        if (!this.session) return;
        if (this.clock?.expired && !this.session.won) { this.timeout(); return; }
        if (this.session.won) { this.victory(); return; }
        const tier = Math.min(this.hintLevel, 2) as 0 | 1 | 2;
        this.popup(`线索提示 · ${tier + 1} / 3`, this.session.hint(tier), [
            { text: tier < 2 ? '再明确一点' : '重新看看', action: () => { this.closePopup(); this.hintLevel = Math.min(2, tier + 1); this.showHint(); } },
            { text: '继续调查', action: () => this.closePopup() },
        ]);
    }

    private showNotes(index = 0): void {
        if (!this.session || !this.definition) return;
        const entries = this.session.completed.map(id => this.definition!.steps.find(step => step.id === id)!.feedback);
        if (!entries.length) {
            this.popup('调查笔记', '还没有记录。观察现场、尝试操作后，发现会保存在这里。', [
                { text: '继续调查', action: () => this.closePopup() },
            ]); return;
        }
        const page = index % entries.length;
        this.popup(`调查笔记 · ${page + 1} / ${entries.length}`, entries[page], [
            { text: '下一条记录', action: () => this.showNotes(page + 1) },
            { text: '继续调查', action: () => this.closePopup() },
        ]);
    }

    private confirmReset(): void {
        this.popup('重新调查？', '本关操作将回到起点。已破获的案卷记录会保留。', [
            { text: '重新开始', action: () => this.restartCase() },
            { text: '继续调查', action: () => this.closePopup() },
        ]);
    }

    private pause(): void {
        if (this.clock?.expired) { this.timeout(); return; }
        this.popup('歇一会儿', '小猫会替你守好现场。', [
            { text: '继续调查', action: () => this.closePopup() },
            { text: '返回案卷', action: () => { if (this.persist()) this.showCases(); } },
        ]);
    }

    private victory(): void {
        if (!this.definition) return;
        const id = this.definition.id;
        this.popup('案件已破获', this.definition.ending, [
            { text: id < CASE_DATA.length ? '下一份委托' : '回顾全部案卷', action: () => { if (id < CASE_DATA.length) this.openCase(id + 1); else this.showCases(); } },
            { text: '返回案卷', action: () => this.showCases() },
        ]);
    }

    private restartCase(): void {
        this.closePopup(); this.session?.reset(); this.clock?.reset(); this.saveTick = 0;
        this.selected = undefined; this.hintLevel = 0; this.persist(); this.refresh(); this.updateTimerLabel();
    }

    private timeout(): void {
        if (!this.session || this.session.won || this.modalKind === 'timeout') return;
        this.popup('时间到啦', this.clock?.canExtend ? '再给你一分钟，把刚才发现的线索串起来吧！每次调查可免费加时一次。' : '已经很接近答案了。带着刚才的发现，再试一次吧！', [
            { text: this.clock?.canExtend ? '免费加时 60 秒' : '再试一次', action: () => {
                if (this.clock?.canExtend && this.clock.extend()) { this.closePopup(); this.persist(); this.updateTimerLabel(); }
                else this.restartCase();
            } },
            { text: '返回案卷', action: () => { if (this.persist()) this.showCases(); } },
        ], 'timeout');
    }

    protected update(deltaTime: number): void {
        if (this.session && !this.session.won && this.clock?.expired && !this.modal && this.artReady) { this.timeout(); return; }
        if (!this.canInteract() || !this.clock) return;
        const changed = this.clock.tick(deltaTime * 1000);
        this.saveTick += deltaTime;
        if (changed) this.updateTimerLabel();
        if (this.clock.expired) { if (this.persist()) this.timeout(); }
        else if (this.saveTick >= 5) { this.saveTick = 0; this.persist(); }
    }

    private updateTimerLabel(): void {
        if (!this.timerLabel || !this.clock) return;
        const seconds = this.clock.seconds;
        this.timerLabel.string = `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
        this.timerLabel.color = seconds <= 30 ? DANGER : INK;
    }

    private onAppHide = (): void => { this.backgroundPaused = true; this.persist(); };
    private onAppShow = (): void => { this.backgroundPaused = false; };

    private popup(title: string, body: string, actions: Array<{ text: string; action: () => void }>, kind = 'dialog'): void {
        if (this.modal) this.closePopup();
        this.modalKind = kind;
        this.modalReturnFocus = this.focusedName;
        this.focusRing?.destroy(); this.focusRing = undefined;
        this.selected = undefined;
        const overlay = this.modal = makeNode(this.shell, 'DetectiveModal', 640, 1320);
        shade(overlay); overlay.addComponent(BlockInputEvents);
        const card = makeNode(overlay, 'Card', 552, 520); paper(card, 28);
        text(card, 'Title', title, 0, 180, 456, 64, 36, kind === 'timeout' ? DANGER : INK);
        text(card, 'Body', body, 0, 60, 448, 152, 25);
        actions.forEach((a, i) => this.button(card, `ModalAction${i}`, a.text, 0, -84 - i * 96, i === 0 ? 344 : 312, 80, a.action, i === 0));
        this.focusIndex = -1;
        const first = this.focusItems.find(item => item.node.name === 'ModalAction0');
        if (first) this.focusOn(first.node);
    }

    private closePopup(): void {
        if (!this.modal) return;
        this.focusItems = this.focusItems.filter(item => !this.isDescendant(item.node, this.modal!));
        this.focusRing?.destroy(); this.focusRing = undefined;
        this.modal.destroy(); this.modal = undefined; this.modalKind = ''; this.focusIndex = -1;
        this.focusedName = this.modalReturnFocus; this.modalReturnFocus = undefined;
        const previous = this.focusItems.find(item => item.node.name === this.focusedName);
        if (previous) this.focusOn(previous.node);
    }

    private isDescendant(node: Node, parent: Node): boolean {
        let current: Node | null = node;
        while (current) { if (current === parent) return true; current = current.parent; } return false;
    }

    private onKey(event: EventKeyboard): void {
        if (event.keyCode === KeyCode.ESCAPE) {
            if (this.modal) { if (this.modalKind !== 'timeout') this.closePopup(); } else if (this.session) this.pause(); else this.exit?.(); return;
        }
        const items = this.focusItems.filter(item => isValid(item.node, true) && item.node.activeInHierarchy && (!this.modal || this.isDescendant(item.node, this.modal)));
        if (!items.length) return;
        this.focusIndex = items.findIndex(item => item.node.name === this.focusedName);
        const focused = items[Math.max(0, this.focusIndex)]?.node;
        const source = focused?.name.startsWith('Object_') ? focused.name.slice(7) : undefined;
        const gesture = source ? this.session?.availableSteps.find(step => step.source === source && ['hold','swipe','scrub'].includes(step.action)) : undefined;
        const directions: Partial<Record<KeyCode, SwipeDirection>> = { [KeyCode.KEY_W]: 'up', [KeyCode.KEY_S]: 'down', [KeyCode.KEY_A]: 'left', [KeyCode.KEY_D]: 'right' };
        if (gesture?.action === 'swipe' && directions[event.keyCode]) { this.performAction({ action: 'swipe', source: source!, direction: directions[event.keyCode], distance: gesture.minDistance ?? .06 }); return; }
        if ([KeyCode.ENTER, KeyCode.SPACE].includes(event.keyCode) && gesture?.action === 'hold') {
            if (!this.keyStarted) this.keyStarted = Date.now(); return;
        }
        if ([KeyCode.ENTER, KeyCode.SPACE].includes(event.keyCode) && gesture?.action === 'scrub') {
            if (this.scrubKeyObject !== source) { this.scrubKeyObject = source!; this.scrubKeyCount = 0; }
            this.scrubKeyCount++;
            if (this.scrubKeyCount >= 6) { this.scrubKeyCount = 0; this.performAction({ action: 'scrub', source: source!, distance: gesture.minDistance ?? .45 }); }
            else if (this.feedbackLabel) this.feedbackLabel.string = `继续按空格擦拭 ${this.scrubKeyCount} / 6`;
            return;
        }
        const forward = [KeyCode.TAB, KeyCode.ARROW_RIGHT, KeyCode.ARROW_DOWN].includes(event.keyCode);
        const back = [KeyCode.ARROW_LEFT, KeyCode.ARROW_UP].includes(event.keyCode);
        if (forward || back) {
            this.focusIndex = (this.focusIndex + (back ? -1 : 1) + items.length) % items.length;
            this.focusOn(items[this.focusIndex].node);
        } else if ([KeyCode.ENTER, KeyCode.SPACE].includes(event.keyCode)) {
            items[Math.max(0, this.focusIndex) % items.length].activate();
        }
    }

    private onKeyUp(event: EventKeyboard): void {
        if (![KeyCode.ENTER, KeyCode.SPACE].includes(event.keyCode) || !this.keyStarted) return;
        const elapsedMs = Date.now() - this.keyStarted; this.keyStarted = 0;
        if (this.focusedName?.startsWith('Object_')) this.performAction({ action: 'hold', source: this.focusedName.slice(7), elapsedMs });
    }

    private focusOn(target: Node): void {
        this.focusRing?.destroy(); this.focusedName = target.name;
        const size = target.getComponent(UITransform)!;
        this.focusRing = makeNode(target, 'KeyboardFocus', 26, 26, -size.width/2 + 5, size.height/2 - 5);
        CandyArt.icon(this.focusRing, 14);
    }

    protected onDestroy(): void {
        this.disposed = true;
        input.off(Input.EventType.KEY_DOWN, this.onKey, this);
        input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
        game.off(Game.EVENT_HIDE, this.onAppHide, this); game.off(Game.EVENT_SHOW, this.onAppShow, this);
        view.off('canvas-resize', this.resize, this);
        this.node.off(Node.EventType.SIZE_CHANGED, this.resize, this);
    }
}
