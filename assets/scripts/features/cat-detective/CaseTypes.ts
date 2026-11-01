export type CaseBackground = 'office' | 'alley' | 'sunroom' | 'market' | 'gallery' | 'clocktower' | 'balloon' | 'harbor' | 'attic' | 'kitchen' | 'train' | 'workshop';
export type CaseGesture = 'tap' | 'drag' | 'swipe' | 'hold' | 'scrub';
export type SwipeDirection = 'up' | 'down' | 'left' | 'right';
export interface CaseAction { action: CaseGesture; source: string; target?: string; direction?: SwipeDirection; elapsedMs?: number; distance?: number; }
export interface CaseObject {
    id: string; label: string; kind: string; x: number; y: number; w: number; h: number;
    visibleWhen?: readonly string[]; hiddenWhen?: readonly string[]; description?: string;
    art?: string; angle?: number; decorative?: boolean; scale?: number;
}
export interface CaseStep extends CaseAction {
    id: string; requires?: readonly string[]; feedback: string; hints: readonly [string, string, string];
    durationMs?: number; minDistance?: number;
}
export interface CaseDefinition {
    id: number; title: string; category: string; story: string; goal: string; background: CaseBackground;
    objects: readonly CaseObject[]; steps: readonly CaseStep[]; solution: readonly CaseAction[]; ending: string;
    timeLimitSeconds?: number; mechanism?: string; sceneCaption?: string; legacyInspiration?: string;
}
type ObjectOptions = Pick<CaseObject, 'visibleWhen' | 'hiddenWhen' | 'description' | 'art' | 'angle' | 'decorative' | 'scale'> & Partial<Pick<CaseObject, 'w' | 'h'>>;
const SHORT_LABELS: Readonly<Record<string, string>> = {
    '接住钥匙的报纸': '铺好的报纸', '时针停在11:55': '停摆钟面', '清晰的送货牌': '清晰送货牌',
    '困惑的小猫': '困惑小猫', '暖光中的猫': '暖光小猫',
};
export const o = (id: string, label: string, kind: string, x: number, y: number, options: ObjectOptions = {}): CaseObject =>
    ({ id, label: SHORT_LABELS[label] ?? label, kind, x, y, w: .15, h: .15, ...options });
export const s = (id: string, source: string, target: string | null, requires: readonly string[], feedback: string,
    hints: readonly [string, string, string]): CaseStep =>
    ({ id, source, action: target ? 'drag' : 'tap', ...(target ? { target } : {}), requires, feedback, hints });
export const g = (id: string, source: string, action: 'swipe' | 'hold' | 'scrub', requires: readonly string[], feedback: string,
    hints: readonly [string, string, string], options: Pick<CaseStep, 'direction' | 'durationMs' | 'minDistance'> = {}): CaseStep =>
    ({ id, source, action, requires, feedback, hints, ...options });
export const stepAction = (step: CaseStep): CaseAction => ({ action: step.action, source: step.source, ...(step.target ? { target: step.target } : {}),
    ...(step.direction ? { direction: step.direction } : {}), ...(step.action === 'hold' ? { elapsedMs: step.durationMs ?? 900 } : {}),
    ...(step.action === 'scrub' || step.action === 'swipe' ? { distance: step.minDistance ?? (step.action === 'swipe' ? .06 : .45) } : {}) });
export const make = (definition: Omit<CaseDefinition, 'solution'>): CaseDefinition => ({ ...definition,
    objects: [...definition.objects, o('case-solved', '结案印章', 'clue', .12, .12,
        { visibleWhen: definition.steps.map(step => step.id), description: definition.ending })],
    solution: definition.steps.map(stepAction) });
