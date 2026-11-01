import { CaseAction, CaseDefinition, CaseObject, CaseStep } from './CaseData';
import { stepAction } from './CaseTypes';

export interface CaseActionResult { accepted: boolean; feedback: string; stepId?: string; won: boolean; }

/** 确定性的案件状态机；仅存完成步骤，渲染和输入由界面负责。 */
export class CaseSession {
    private trail: string[] = [];
    feedback: string;

    constructor(readonly definition: CaseDefinition, saved?: unknown) {
        this.feedback = definition.story;
        this.restore(saved);
    }

    get completed(): string[] { return [...this.trail]; }
    get visibleObjects(): readonly CaseObject[] { return this.definition.objects.filter(object => this.isVisible(object)); }
    get availableSteps(): readonly CaseStep[] {
        return this.definition.steps.filter(step => !this.trail.includes(step.id)
            && (step.requires ?? []).every(id => this.trail.includes(id))
            && this.visibleObjects.some(object => object.id === step.source)
            && (!step.target || this.visibleObjects.some(object => object.id === step.target)));
    }
    get progress(): number { return this.trail.length / this.definition.steps.length; }
    get won(): boolean { return this.trail.length === this.definition.steps.length; }

    act(action: CaseAction): CaseActionResult {
        if (this.won) return { accepted: false, feedback: this.feedback = this.definition.ending, won: true };
        const step = this.availableSteps.find(item => item.action === action.action && item.source === action.source
            && item.target === action.target && (!item.direction || item.direction === action.direction)
            && (item.action !== 'hold' || (Number.isFinite(action.elapsedMs) && (action.elapsedMs ?? 0) >= (item.durationMs ?? 900)))
            && (!['scrub','swipe'].includes(item.action) || (Number.isFinite(action.distance)
                && (action.distance ?? 0) >= (item.minDistance ?? (item.action === 'swipe' ? .06 : .45)))));
        if (!step) {
            const source = this.visibleObjects.find(object => object.id === action.source);
            const target = this.visibleObjects.find(object => object.id === action.target);
            this.feedback = !source ? '这个物品当前无法操作。'
                : action.action === 'drag' && action.target && !target ? '这里暂时没有可以组合的物品。'
                : source.description ?? '这个尝试还没有带来变化。再观察一下物品之间的关系吧。';
            return { accepted: false, feedback: this.feedback, won: false };
        }
        this.trail.push(step.id);
        this.feedback = this.won ? `${step.feedback}\n${this.definition.ending}` : step.feedback;
        return { accepted: true, feedback: this.feedback, stepId: step.id, won: this.won };
    }

    hint(level: 0 | 1 | 2 = 0): string {
        if (this.won) return '案件已解决！可以重玩或前往下一个委托。';
        return this.availableSteps[0]?.hints[level] ?? '可以撤销上一步，重新检查场景中的线索。';
    }
    undo(): boolean {
        if (!this.trail.length) return false;
        this.trail.pop();
        this.feedback = '已撤销上一步，场景恢复到了操作前。';
        return true;
    }
    reset(): void { this.trail = []; this.feedback = this.definition.story; }
    serialize(): string { return JSON.stringify({ version: 1, caseId: this.definition.id, completed: this.trail }); }

    private isVisible(object: CaseObject): boolean {
        return (object.visibleWhen ?? []).every(id => this.trail.includes(id))
            && !(object.hiddenWhen ?? []).some(id => this.trail.includes(id));
    }
    private restore(saved: unknown): void {
        if (saved === undefined || saved === null) return;
        try {
            const value: unknown = typeof saved === 'string' ? JSON.parse(saved) : saved;
            if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error('存档格式错误');
            const record = value as Record<string, unknown>;
            if (record.version !== 1 || record.caseId !== this.definition.id || !Array.isArray(record.completed)
                || record.completed.length > this.definition.steps.length) throw new Error('存档版本或案件不匹配');
            for (const id of record.completed) {
                if (typeof id !== 'string') throw new Error('步骤格式错误');
                const step = this.availableSteps.find(item => item.id === id);
                if (!step) throw new Error('存档包含不可达步骤');
                const result = this.act(stepAction(step));
                if (!result.accepted) throw new Error('存档步骤无效');
            }
            if (!this.trail.length) this.feedback = this.definition.story;
            else if (!this.won) this.feedback = '已恢复调查进度。继续寻找剩余线索吧。';
        } catch {
            this.reset();
            this.feedback = '这份调查记录无法恢复，已安全重置本关；其他案件记录不受影响。';
        }
    }
}
