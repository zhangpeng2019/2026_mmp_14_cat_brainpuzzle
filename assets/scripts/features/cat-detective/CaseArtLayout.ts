import { CaseDefinition, CaseObject, stepAction } from './CaseTypes';
import { CaseSession } from './CaseSession';
import { resolvePropArt } from './PropArtManifest';

type Placement = Partial<Pick<CaseObject, 'x' | 'y' | 'w' | 'h' | 'angle' | 'scale' | 'art'>>;

/** 仅覆盖有背景结构依据的位置；步骤、对象ID与存档格式保持一致。 */
const PLACEMENTS: Readonly<Record<number, Readonly<Record<string, Placement>>>> = {
    1: {
        paw: { x: .55, y: .31 },
        curtain: { x: .66, y: .16, scale: .88 },
        'scrap-a': { x: .67, y: .28 },
        letter: { x: .55, y: .31 },
        drawer: { x: .38, y: .365, art: 'drawer-closed', scale: .94 },
        stamp: { x: .38, y: .365 },
        cat: { x: .24, y: .79 },
    },
    2: {
        basket: { x: .26, y: .61 },
        'safe-cat': { x: .26, y: .61 },
    },
    13: {
        window: { x: .51, y: .20, scale: .94 },
        'clear-window': { x: .51, y: .20, scale: .94 },
        leak: { scale: .55 },
        lamp: { x: .86, y: .36, art: 'lamp', scale: .94 },
        'warm-lamp': { x: .86, y: .36, art: 'lamp', scale: .94 },
        puddle: { scale: .62 },
    },
};

const PAPER = /^(paper-|letter-|envelope$|receipt$|ticket$|map-town$|photo-cats$)/;
const HAND_TOOLS = /^(hammer|wrench|screwdriver|brush|wooden-rod|level-tool|spoon|scissors|cloth|sponge)$/;
const SMALL_LOOSE = /^(gold-key-|silver-key$|leaf$|fish$|stone$|lemon$|fabric-ribbon$|paw-stamp$)/;
const cache = new WeakMap<CaseDefinition, readonly CaseObject[]>();

function fitArtwork(object: CaseObject): CaseObject {
    const angle = Math.abs(object.angle ?? 0) * Math.PI / 180;
    const w = object.w * 584, h = object.h * 720;
    const limit = Math.min(w / (w * Math.cos(angle) + h * Math.sin(angle)),
        h / (h * Math.cos(angle) + w * Math.sin(angle)));
    return { ...object, scale: Math.min(object.scale ?? 1, limit) };
}

function presentation(object: CaseObject): Placement {
    const key = resolvePropArt(object.kind, object.id, object.label, object.art);
    // 方向线索、安装件、角色、遮挡层保持正向；只让可拾取小物件略有摆放感。
    if (/箭头|方向|顺序|路线|轨道|风向|标记|印槽|站位|刻度|水平仪/.test(object.label)) return { art: key, scale: .96, angle: 0 };
    if (PAPER.test(key)) return { art: key, scale: .92, angle: -5 };
    if (HAND_TOOLS.test(key)) return { art: key, scale: .94, angle: -8 };
    if (SMALL_LOOSE.test(key)) return { art: key, scale: .94, angle: 5 };
    return { art: key, scale: 1, angle: 0 };
}

/** 枚举每个可达状态，保护真实点击/拖动中心及画板边界。 */
export function isCaseLayoutReachable(definition: CaseDefinition): boolean {
    if (definition.objects.some(object => ![object.x, object.y, object.w, object.h].every(Number.isFinite)
        || object.w < .12 || object.h < .12 || object.x - object.w / 2 < 0 || object.x + object.w / 2 > 1
        || object.y - object.h / 2 < 0 || object.y + object.h / 2 > 1)) return false;
    const pending = [new CaseSession(definition)], visited = new Set<string>();
    while (pending.length) {
        const session = pending.pop()!;
        const key = session.completed.sort().join('|');
        if (visited.has(key)) continue;
        visited.add(key);
        if (!session.won && !session.availableSteps.length) return false;
        for (const step of session.availableSteps) {
            for (const id of [step.source, step.target].filter((value): value is string => !!value)) {
                const object = session.visibleObjects.find(value => value.id === id)!;
                const top = [...session.visibleObjects].reverse().find(value => !value.decorative
                    && Math.abs(value.x - object.x) <= value.w / 2 && Math.abs(value.y - object.y) <= value.h / 2);
                if (top?.id !== id) return false;
            }
            const next = new CaseSession(definition, session.serialize());
            if (!next.act(stepAction(step)).accepted) return false;
            pending.push(next);
        }
    }
    return true;
}

/** 显示层陈设与命中区分离；任何坐标覆盖导致遮挡时，整关回退到原始安全位置。 */
export function resolveCaseObjects(definition: CaseDefinition): readonly CaseObject[] {
    const existing = cache.get(definition);
    if (existing) return existing;
    const visual = definition.objects.map(object => {
        const style = presentation(object);
        return fitArtwork({ ...object, art: style.art, scale: object.scale ?? style.scale, angle: object.angle ?? style.angle });
    });
    const objects = visual.map(object => fitArtwork({ ...object, ...PLACEMENTS[definition.id]?.[object.id] }));
    const resolved = isCaseLayoutReachable({ ...definition, objects }) ? objects : visual;
    cache.set(definition, resolved);
    return resolved;
}
