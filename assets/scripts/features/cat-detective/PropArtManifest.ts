export interface PropArtCell { sheet: string; index: number; }
export const PROP_ATLAS_COLUMNS = 4;
export const PROP_ATLAS_ROWS = 4;
/** 糖果色正规透明贴图的行优先格位；纹理由ResourceLoader导入。 */
export const PROP_ART: Readonly<Record<string, PropArtCell>> = {
    'paper-note': { sheet: 'sheet-01', index: 0 },
    'envelope': { sheet: 'sheet-01', index: 1 },
    'letter-open': { sheet: 'sheet-01', index: 2 },
    'paper-left': { sheet: 'sheet-01', index: 3 },
    'paper-right': { sheet: 'sheet-01', index: 4 },
    'letter-complete': { sheet: 'sheet-01', index: 5 },
    'book-blue': { sheet: 'sheet-01', index: 6 },
    'book-open': { sheet: 'sheet-01', index: 7 },
    'map-town': { sheet: 'sheet-01', index: 8 },
    'ticket': { sheet: 'sheet-01', index: 9 },
    'gold-key-a': { sheet: 'sheet-01', index: 10 },
    'gold-key-b': { sheet: 'sheet-01', index: 11 },
    'silver-key': { sheet: 'sheet-01', index: 12 },
    'paw-seal': { sheet: 'sheet-01', index: 13 },
    'receipt': { sheet: 'sheet-01', index: 14 },
    'photo-cats': { sheet: 'sheet-01', index: 15 },
    'door-closed': { sheet: 'sheet-02', index: 0 },
    'door-open': { sheet: 'sheet-02', index: 1 },
    'lock-closed': { sheet: 'sheet-02', index: 2 },
    'lock-open': { sheet: 'sheet-02', index: 3 },
    'curtain-closed': { sheet: 'sheet-02', index: 4 },
    'curtain-open': { sheet: 'sheet-02', index: 5 },
    'window': { sheet: 'sheet-02', index: 6 },
    'mirror': { sheet: 'sheet-02', index: 7 },
    'frame': { sheet: 'sheet-02', index: 8 },
    'item-box': { sheet: 'sheet-02', index: 9 },
    'box-open': { sheet: 'sheet-02', index: 10 },
    'bottle-empty': { sheet: 'sheet-02', index: 11 },
    'bowl': { sheet: 'sheet-02', index: 12 },
    'tray': { sheet: 'sheet-02', index: 13 },
    'bed': { sheet: 'sheet-02', index: 14 },
    'cushion': { sheet: 'sheet-02', index: 15 },
    'gear': { sheet: 'sheet-03', index: 0 },
    'wheel': { sheet: 'sheet-03', index: 1 },
    'valve': { sheet: 'sheet-03', index: 2 },
    'thermometer': { sheet: 'sheet-03', index: 3 },
    'magnet': { sheet: 'sheet-03', index: 4 },
    'radio': { sheet: 'sheet-03', index: 5 },
    'magnifier': { sheet: 'sheet-03', index: 6 },
    'net': { sheet: 'sheet-03', index: 7 },
    'clip': { sheet: 'sheet-03', index: 8 },
    'lamp': { sheet: 'sheet-03', index: 9 },
    'battery': { sheet: 'sheet-03', index: 10 },
    'socket': { sheet: 'sheet-03', index: 11 },
    'button-red': { sheet: 'sheet-03', index: 12 },
    'button-green': { sheet: 'sheet-03', index: 13 },
    'lever': { sheet: 'sheet-03', index: 14 },
    'fan': { sheet: 'sheet-03', index: 15 },
    'cat-paw': { sheet: 'sheet-04', index: 0 },
    'shoe-print': { sheet: 'sheet-04', index: 1 },
    'boot': { sheet: 'sheet-04', index: 2 },
    'water-drop': { sheet: 'sheet-04', index: 3 },
    'lemon': { sheet: 'sheet-04', index: 4 },
    'sun': { sheet: 'sheet-04', index: 5 },
    'moon': { sheet: 'sheet-04', index: 6 },
    'star': { sheet: 'sheet-04', index: 7 },
    'fish': { sheet: 'sheet-04', index: 8 },
    'plant': { sheet: 'sheet-04', index: 9 },
    'flower': { sheet: 'sheet-04', index: 10 },
    'leaf': { sheet: 'sheet-04', index: 11 },
    'stone': { sheet: 'sheet-04', index: 12 },
    'cloth': { sheet: 'sheet-04', index: 13 },
    'rope': { sheet: 'sheet-04', index: 14 },
    'wire': { sheet: 'sheet-04', index: 15 },
    'cat-detective': { sheet: 'sheet-05', index: 0 },
    'cat-kitten': { sheet: 'sheet-05', index: 1 },
    'cat-gray': { sheet: 'sheet-05', index: 2 },
    'cat-grandma': { sheet: 'sheet-05', index: 3 },
    'cat-orange': { sheet: 'sheet-05', index: 4 },
    'cat-sleep': { sheet: 'sheet-05', index: 5 },
    'cat-wet': { sheet: 'sheet-05', index: 6 },
    'cat-smile': { sheet: 'sheet-05', index: 7 },
    'fox-visitor': { sheet: 'sheet-05', index: 8 },
    'cat-boots': { sheet: 'sheet-05', index: 9 },
    'cat-baker': { sheet: 'sheet-05', index: 10 },
    'rabbit-postman': { sheet: 'sheet-05', index: 11 },
    'dog-courier': { sheet: 'sheet-05', index: 12 },
    'mole-worker': { sheet: 'sheet-05', index: 13 },
    'cat-scarf': { sheet: 'sheet-05', index: 14 },
    'cat-neighbor': { sheet: 'sheet-05', index: 15 },
    'sandbag': { sheet: 'sheet-06', index: 0 },
    'lifebuoy': { sheet: 'sheet-06', index: 1 },
    'balloon-basket': { sheet: 'sheet-06', index: 2 },
    'plank': { sheet: 'sheet-06', index: 3 },
    'ladder': { sheet: 'sheet-06', index: 4 },
    'umbrella': { sheet: 'sheet-06', index: 5 },
    'handbag': { sheet: 'sheet-06', index: 6 },
    'cable': { sheet: 'sheet-06', index: 7 },
    'pipe': { sheet: 'sheet-06', index: 8 },
    'wooden-rod': { sheet: 'sheet-06', index: 9 },
    'hook': { sheet: 'sheet-06', index: 10 },
    'stand': { sheet: 'sheet-06', index: 11 },
    'bell': { sheet: 'sheet-06', index: 12 },
    'food-bag': { sheet: 'sheet-06', index: 13 },
    'wrench': { sheet: 'sheet-06', index: 14 },
    'screwdriver': { sheet: 'sheet-06', index: 15 },
    'clock-1155': { sheet: 'sheet-07', index: 0 },
    'clock-midnight': { sheet: 'sheet-07', index: 1 },
    'compass': { sheet: 'sheet-07', index: 2 },
    'paper-clean': { sheet: 'sheet-07', index: 3 },
    'paper-wet': { sheet: 'sheet-07', index: 4 },
    'paper-revealed': { sheet: 'sheet-07', index: 5 },
    'mirror-turned': { sheet: 'sheet-07', index: 6 },
    'gear-fixed': { sheet: 'sheet-07', index: 7 },
    'plant-dry': { sheet: 'sheet-07', index: 8 },
    'plant-bloom': { sheet: 'sheet-07', index: 9 },
    'cat-rescued': { sheet: 'sheet-07', index: 10 },
    'stamp-complete': { sheet: 'sheet-07', index: 11 },
    'magnifier-clue': { sheet: 'sheet-07', index: 12 },
    'radio-signal': { sheet: 'sheet-07', index: 13 },
    'glass-fog': { sheet: 'sheet-07', index: 14 },
    'glass-clear': { sheet: 'sheet-07', index: 15 },
    'table': { sheet: 'sheet-08', index: 0 },
    'chair': { sheet: 'sheet-08', index: 1 },
    'drawer-closed': { sheet: 'sheet-08', index: 2 },
    'drawer-open': { sheet: 'sheet-08', index: 3 },
    'camera': { sheet: 'sheet-08', index: 4 },
    'level-tool': { sheet: 'sheet-08', index: 5 },
    'reflector': { sheet: 'sheet-08', index: 6 },
    'boat': { sheet: 'sheet-08', index: 7 },
    'cart': { sheet: 'sheet-08', index: 8 },
    'water-can': { sheet: 'sheet-08', index: 9 },
    'watering-soil': { sheet: 'sheet-08', index: 10 },
    'candle': { sheet: 'sheet-08', index: 11 },
    'spool': { sheet: 'sheet-08', index: 12 },
    'fabric-ribbon': { sheet: 'sheet-08', index: 13 },
    'safe-box': { sheet: 'sheet-08', index: 14 },
    'funnel': { sheet: 'sheet-08', index: 15 },
    'cat-black': { sheet: 'sheet-09', index: 0 },
    'cat-white': { sheet: 'sheet-09', index: 1 },
    'balloon': { sheet: 'sheet-09', index: 2 },
    'dust': { sheet: 'sheet-09', index: 3 },
    'bed-broken': { sheet: 'sheet-09', index: 4 },
    'bed-fixed': { sheet: 'sheet-09', index: 5 },
    'plant-wilted': { sheet: 'sheet-09', index: 6 },
    'bookshelf': { sheet: 'sheet-09', index: 7 },
    'broken-plank': { sheet: 'sheet-09', index: 8 },
    'fixed-plank': { sheet: 'sheet-09', index: 9 },
    'empty-basket': { sheet: 'sheet-09', index: 10 },
    'full-basket': { sheet: 'sheet-09', index: 11 },
    'cloud': { sheet: 'sheet-09', index: 12 },
    'rain-cloud': { sheet: 'sheet-09', index: 13 },
    'ice-cube': { sheet: 'sheet-09', index: 14 },
    'fire-extinguisher': { sheet: 'sheet-09', index: 15 },
    'train': { sheet: 'sheet-10', index: 0 },
    'hammer': { sheet: 'sheet-10', index: 1 },
    'mailbox': { sheet: 'sheet-10', index: 2 },
    'cover': { sheet: 'sheet-10', index: 3 },
    'bulb': { sheet: 'sheet-10', index: 4 },
    'paw-stamp': { sheet: 'sheet-10', index: 5 },
    'glue': { sheet: 'sheet-10', index: 6 },
    'brush': { sheet: 'sheet-10', index: 7 },
    'air-pump': { sheet: 'sheet-10', index: 8 },
    'bucket': { sheet: 'sheet-10', index: 9 },
    'folding-fan': { sheet: 'sheet-10', index: 10 },
    'sewing-kit': { sheet: 'sheet-10', index: 11 },
    'spoon': { sheet: 'sheet-10', index: 12 },
    'scissors': { sheet: 'sheet-10', index: 13 },
    'sponge': { sheet: 'sheet-10', index: 14 },
    'tape': { sheet: 'sheet-10', index: 15 },
};

export const PROP_ART_ALIASES: Readonly<Record<string, string>> = {
    "paper-scrap": "paper-left",
    "paper-letter": "letter-open",
    "paper-map": "map-town",
    "water": "water-drop",
    "book-closed": "book-blue",
    "glass-clean": "glass-clear",
    "plant-wilted": "plant-wilted",
    "bed-fixed": "bed-fixed",
    "box-closed": "item-box"
};

/** 显式美术标识只能是实际格位或登记过的语义别名。 */
export function canonicalPropArtKey(art: string): string | undefined {
    const key = PROP_ART_ALIASES[art] ?? art;
    return PROP_ART[key] ? key : undefined;
}

export const PROP_KIND_ART: Readonly<Record<string, string>> = {
    "bag": "handbag",
    "battery": "battery",
    "bed": "bed",
    "bell": "bell",
    "book": "book-blue",
    "boot": "boot",
    "bottle": "bottle-empty",
    "bowl": "bowl",
    "box": "item-box",
    "button": "button-red",
    "cable": "cable",
    "cat": "cat-orange",
    "clip": "clip",
    "clock": "clock-1155",
    "cloth": "cloth",
    "clue": "magnifier-clue",
    "cover": "cover",
    "curtain": "curtain-closed",
    "cushion": "cushion",
    "door": "door-closed",
    "fan": "fan",
    "flower": "flower",
    "footprint": "shoe-print",
    "frame": "frame",
    "gap": "door-closed",
    "gear": "gear",
    "hook": "hook",
    "key": "gold-key-a",
    "lamp": "lamp",
    "leaf": "leaf",
    "lemon": "lemon",
    "letter": "envelope",
    "light": "lamp",
    "lock": "lock-closed",
    "magnet": "magnet",
    "magnifier": "magnifier",
    "map": "map-town",
    "mirror": "mirror",
    "moon": "moon",
    "net": "net",
    "painting": "frame",
    "paper": "paper-note",
    "paw": "cat-paw",
    "person": "cat-neighbor",
    "pipe": "pipe",
    "plant": "plant",
    "radio": "radio",
    "rod": "wooden-rod",
    "rope": "rope",
    "socket": "socket",
    "stand": "stand",
    "star": "star",
    "stone": "stone",
    "sun": "sun",
    "suspect": "cat-neighbor",
    "switch": "lever",
    "thermometer": "thermometer",
    "ticket": "ticket",
    "tray": "tray",
    "umbrella": "umbrella",
    "valve": "valve",
    "water": "water-drop",
    "wheel": "wheel",
    "window": "window",
    "wire": "wire"
};

/** 没有物件文字标签时仍依靠轮廓、状态和角色服饰辨认。 */
export function resolvePropArt(kind: string, id = '', label = '', art?: string): string {
    if (art) {
        const explicit = canonicalPropArtKey(art);
        if (explicit) return explicit;
    }
    const name = id + ' ' + label;
    const physical = !/^(paper|letter|book|map|ticket)$/.test(kind);
    if (physical) {
    if (/sandbag|沙袋/.test(name)) return 'sandbag';
    if (/lifebuoy|救生圈/.test(name)) return 'lifebuoy';
    if (/balloon|热气球/.test(name) && !/basket|篮/.test(name)) return 'balloon';
    if (/ladder|梯子/.test(name)) return 'ladder';
    if (/dust|积灰|灰尘/.test(name) && !/paper|letter/.test(kind)) return 'dust';
    if (/camera|相机/.test(name)) return 'camera';
    if (/reflector|反光板/.test(name)) return 'reflector';
    if (/level-tool|水平仪/.test(name)) return 'level-tool';
    if (/screwdriver|螺丝刀/.test(name)) return 'screwdriver';
    if (/wrench|扳手/.test(name)) return 'wrench';
    if (/hammer|木锤|锤子/.test(name)) return 'hammer';
    if (/mailbox|信箱|邮筒/.test(name)) return 'mailbox';
    if (/train|列车|火车/.test(name)) return 'train';
    if (/bulb|灯泡/.test(name)) return 'bulb';
    if (/spoon|勺/.test(name)) return 'spoon';
    if (/brush|刷子/.test(name)) return 'brush';
    if (/glue|胶水/.test(name)) return 'glue';
    if (/bookshelf|书架/.test(name)) return 'bookshelf';
    if (/drawer/.test(name)) return /open|打开/.test(name) ? 'drawer-open' : 'drawer-closed';
    if (/candle|蜡烛/.test(name)) return 'candle';
    if (/watering|水壶|浇水壶/.test(name)) return 'water-can';
    if (/funnel|漏斗/.test(name)) return 'funnel';
    if (/boat|小船/.test(name)) return 'boat';
    if (/cart|小车/.test(name)) return 'cart';
    }
    if (/paw|footprint/.test(kind)) return /prints|shoe|脚印|鞋底|横纹/.test(name) && !/猫爪|猫脚/.test(name) ? 'shoe-print' : 'cat-paw';
    if (/book/.test(kind) && /open|展开|翻开/.test(name)) return 'book-open';
    if (/case-solved|结案印章/.test(name)) return 'stamp-complete';
    if (/scrap-a|纸角|左半/.test(name)) return 'paper-left';
    if (/scrap-b|半张信|右半/.test(name)) return 'paper-right';
    if (/完整委托|拼好|完整信/.test(name)) return 'letter-complete';
    if (/photo|合照|照片/.test(name) && /paper|frame|painting|clue/.test(kind)) return 'photo-cats';
    if (/receipt|收据|取货单|出库单/.test(name) && /paper|letter/.test(kind)) return 'receipt';
    if (/map|地图|路线|轨道图/.test(name) && /paper|letter|map/.test(kind)) return 'map-town';
    if (/envelope|信封/.test(name)) return 'envelope';
    if (/key/.test(kind)) return /key-b|钥匙乙|双缺口/.test(name) ? 'gold-key-b' : /silver|银/.test(name) ? 'silver-key' : 'gold-key-a';
    if (/mirror/.test(kind) && /right|turned|朝右|转向|就位/.test(name)) return 'mirror-turned';
    if (/clock/.test(kind)) return /compass|指南针/.test(name) ? 'compass' : /midnight|午夜|正午|归零/.test(name) ? 'clock-midnight' : 'clock-1155';
    if (/window|glass/.test(kind)) return /fog|雾/.test(name) ? 'glass-fog' : /clear|clean|清晰|擦净/.test(name) ? 'glass-clear' : 'window';
    if (/door|lock|curtain/.test(kind) && /open|打开|敞开|拉开/.test(name)) return kind === 'lock' ? 'lock-open' : kind === 'curtain' ? 'curtain-open' : 'door-open';
    if (/bed/.test(kind)) return /broken|破|坏/.test(name) ? 'bed-broken' : /fixed|修好|暖/.test(name) ? 'bed-fixed' : 'bed';
    if (/plant|flower/.test(kind)) return /dry|wilt|枯|干/.test(name) ? 'plant-wilted' : /bloom|flower|开花|盛开/.test(name) ? 'plant-bloom' : 'plant';
    if (/cat|person|suspect/.test(kind)) {
        if (/black|黑猫/.test(name)) return 'cat-black';
        if (/white|白猫/.test(name)) return 'cat-white';
        if (/gray|grey|灰猫/.test(name)) return 'cat-gray';
        if (/grandma|奶奶/.test(name)) return 'cat-grandma';
        if (/kitten|幼猫|小访客/.test(name)) return 'cat-kitten';
        if (/sleep|睡/.test(name)) return 'cat-sleep';
        if (/rescue|获救|获救小猫/.test(name)) return 'cat-rescued';
        if (/baker|面包师/.test(name)) return 'cat-baker';
        if (/boots|雨靴/.test(name)) return 'cat-boots';
        if (/fox|阿狸/.test(name)) return 'fox-visitor';
        if (/rabbit|兔子/.test(name)) return 'rabbit-postman';
        if (/dog|小狗/.test(name)) return 'dog-courier';
        if (/mole|鼹鼠/.test(name)) return 'mole-worker';
        if (/scarf|围巾/.test(name)) return 'cat-scarf';
        if (/assistant|detective|助手|侦探/.test(name)) return 'cat-detective';
    }
    return PROP_KIND_ART[kind] ?? 'item-box';
}

