'use strict';

// Rebuild the editable SingInUI1 hierarchy using the installed Creator's own
// component templates. Import once, run --prepare-sprites, import again, generate
// the prefab, then perform the final build. Creator's default PNG type is texture.
// Script class identifiers come from Creator's compiled _RF registration, never
// from a guessed UUID encoding. Existing .meta files are intentionally untouched.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

const root = path.resolve(__dirname, '../..');
const moduleDir = path.join(root, 'assets/resources/sing-in-ui-1');
const creator = process.env.COCOS_CREATOR_EXE || [
    'C:/ProgramData/cocos/editors/Creator/3.8.7/CocosCreator.exe',
    'E:/CocosEditer/Creator/3.8.7/CocosCreator.exe',
].find(fs.existsSync);
if (!creator) throw new Error('Set COCOS_CREATOR_EXE to the Creator 3.8.7 executable.');
const templates = path.join(path.dirname(creator), 'resources/resources/3d/engine/editor/assets/default_prefab/ui');
const read = file => JSON.parse(fs.readFileSync(file, 'utf8').replace(/^\uFEFF/, ''));
const clone = value => value === undefined ? undefined : JSON.parse(JSON.stringify(value));
const buttonTemplate = read(path.join(templates, 'Button.prefab'));
const spriteTemplate = read(path.join(templates, 'Sprite.prefab'));
const widgetTemplate = read(path.join(templates, 'Widget.prefab'));
const labelTemplate = read(path.join(templates, 'Label.prefab'));
const template = type => clone([
    ...buttonTemplate, ...spriteTemplate, ...widgetTemplate, ...labelTemplate,
].find(item => item.__type__ === type));

function* files(directory) {
    if (!fs.existsSync(directory)) return;
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
        const filename = path.join(directory, entry.name);
        if (entry.isDirectory()) yield* files(filename);
        else yield filename;
    }
}

function importedClassId() {
    const metaFile = path.join(moduleDir, 'scripts/SingInUI1.ts.meta');
    if (!fs.existsSync(metaFile)) throw new Error('Import SingInUI1.ts with Creator first.');
    const chunks = path.join(root, 'temp/programming/packer-driver/targets/editor/chunks');
    const ids = new Set();
    for (const file of files(chunks)) {
        if (!file.endsWith('.js')) continue;
        const source = fs.readFileSync(file, 'utf8');
        const match = source.match(/_RF\.push\(\{\},\s*["']([^"']+)["'],\s*["']SingInUI1["']/);
        if (match) ids.add(match[1]);
    }
    if (ids.size !== 1) throw new Error(`Expected one Creator SingInUI1 registration, found ${ids.size}. Import/build scripts first.`);
    return [...ids][0];
}

function spriteFrame(asset) {
    const metaFile = path.join(moduleDir, 'textures', `${asset}.png.meta`);
    if (!fs.existsSync(metaFile)) throw new Error(`Import ${asset}.png with Creator first.`);
    const meta = read(metaFile);
    const frame = Object.values(meta.subMetas || {}).find(item => item.importer === 'sprite-frame');
    if (!frame?.uuid) throw new Error(`${asset}.png has no imported SpriteFrame; set its image type to sprite-frame.`);
    return { __uuid__: frame.uuid, __expectedType__: 'cc.SpriteFrame' };
}

if (process.argv.includes('--prepare-sprites')) {
    const imageFiles = [...files(path.join(moduleDir, 'textures'))].filter(file => file.endsWith('.png'));
    if (!imageFiles.length) throw new Error('Generate the module textures first.');
    // Validate all inputs before making changes; UUIDs and existing subasset IDs
    // remain entirely under Creator's ownership.
    const imports = imageFiles.map(file => {
        const metaFile = `${file}.meta`;
        if (!fs.existsSync(metaFile)) throw new Error(`Import ${path.basename(file)} in Creator first.`);
        const meta = read(metaFile);
        if (meta.importer !== 'image' || !meta.uuid) throw new Error(`Invalid Creator image metadata: ${metaFile}`);
        meta.userData = { ...meta.userData, type: 'sprite-frame' };
        for (const submeta of Object.values(meta.subMetas || {})) {
            if (submeta.importer === 'texture') {
                Object.assign(submeta.userData, {
                    wrapModeS: 'clamp-to-edge', wrapModeT: 'clamp-to-edge',
                    minfilter: 'linear', magfilter: 'linear', mipfilter: 'none',
                });
            }
        }
        return [metaFile, meta];
    });
    for (const [metaFile, meta] of imports) fs.writeFileSync(metaFile, `${JSON.stringify(meta, null, 2)}\n`);
    console.log(`Prepared ${imports.length} existing image imports for SpriteFrame use, preserving all UUIDs.`);
    console.log('Import/build in Creator again, then run this tool without --prepare-sprites.');
    process.exit(0);
}

const objects = [Object.assign(template('cc.Prefab'), { _name: 'SingInUI1', data: { __id__: 1 } })];
const nodes = new Map();
const ref = id => ({ __id__: id });
const add = value => { objects.push(value); return objects.length - 1; };
const idFor = name => crypto.createHash('sha256').update(`SingInUI1:${name}`).digest('hex').slice(0, 22);
const color = (r, g, b, a = 255) => ({ __type__: 'cc.Color', r, g, b, a });
const white = color(255, 255, 255);

function component(node, type, properties = {}) {
    const base = template(type) || { __type__: type, _name: '', _objFlags: 0, _enabled: true, _id: '' };
    const result = Object.assign(base, properties, { node: ref(node), __prefab: null, _id: '' });
    const componentIndex = add(result);
    result.__prefab = ref(add({ __type__: 'cc.CompPrefabInfo', fileId: idFor(`${nodes.get(node)}/${type}`) }));
    objects[node]._components.push(ref(componentIndex));
    return componentIndex;
}

function node(name, parent, x = 0, y = 0, width = 100, height = 100, active = true) {
    const data = Object.assign(template('cc.Node'), {
        _name: name, _parent: parent === null ? null : ref(parent), _children: [], _components: [],
        _active: active, _objFlags: 0, _prefab: null, _id: '',
        _lpos: { __type__: 'cc.Vec3', x, y, z: 0 },
    });
    const index = add(data);
    const fullPath = parent === null ? name : `${nodes.get(parent)}/${name}`;
    nodes.set(index, fullPath);
    if (parent !== null) objects[parent]._children.push(ref(index));
    data._prefab = ref(add({ __type__: 'cc.PrefabInfo', root: ref(1), asset: ref(0), fileId: idFor(fullPath) }));
    component(index, 'cc.UITransform', { _contentSize: { __type__: 'cc.Size', width, height } });
    return index;
}

function widget(target, flags, offsets = {}) {
    component(target, 'cc.Widget', { _alignFlags: flags, _target: null, _alignMode: 2,
        _left: 0, _right: 0, _top: 0, _bottom: 0,
        _horizontalCenter: 0, _verticalCenter: 0, _lockFlags: 0, ...offsets });
}

function sprite(target, asset, tint = white) {
    component(target, 'cc.Sprite', {
        _spriteFrame: spriteFrame(asset), _type: 0, _sizeMode: 0,
        _color: clone(tint), _isTrimmedMode: false, _customMaterial: null,
    });
}

function art(name, parent, asset, x, y, width, height) {
    const index = node(name, parent, x, y, width, height);
    sprite(index, asset);
    return index;
}

function button(target, transition = 3) {
    component(target, 'cc.Button', {
        clickEvents: [], _transition: transition, _zoomScale: 0.94, _duration: 0.1,
        _target: ref(target), _normalSprite: null, _hoverSprite: null,
        _pressedSprite: null, _disabledSprite: null,
    });
}

function label(name, parent, value, x, y, width, height, size = 24, options = {}) {
    const index = node(name, parent, x, y, width, height);
    component(index, 'cc.Label', {
        _string: value, _fontSize: size, _actualFontSize: size, _lineHeight: size * 1.3,
        _fontFamily: 'Arial', _overflow: 2, _enableWrapText: false,
        _isBold: true, _color: clone(white), _enableOutline: true,
        _outlineColor: color(74, 42, 25), _outlineWidth: 2,
        _enableShadow: false, ...options,
    });
    return index;
}

const spec = read(path.join(root, 'deliverables/SingInUI1/art-spec.json'));
const brown = color(137, 76, 30);
const plainBrown = { _color: brown, _enableOutline: false };
const main = node('SingInUI1', null, 0, 0, 640, 1386);
widget(main, 45);
component(main, 'cc.BlockInputEvents');
component(main, importedClassId(), { demoFeedback: true });

// Only the solid shade fills the viewport; Content and every illustrated sprite
// preserve their own aspect ratio. Width extensions are baked into the PNGs
// during export; no runtime image stretching or sliced sprites are used.
const shade = node('Shade', main, 0, 0, 640, 1386);
sprite(shade, 'shade', color(0, 0, 0, 170));
widget(shade, 45);
button(shade, 0);
const content = node('Content', main, 0, 0, ...spec.content_size);
const panel = art('Panel', content, 'panel', ...spec.panel_center, 560, 800);
component(panel, 'cc.BlockInputEvents');
const titleTab = art('TitleTab', panel, 'title-tab', 0, 390, 340, 74);
label('Title', titleTab, '每日签到', 0, 0, 300, 60, 35, plainBrown);
const close = art('CloseButton', panel, 'close', 244, 354, 48, 48);
button(close);
const days = node('Days', panel, 0, 0, 560, 800);
const dayNames = ['第一天', '第二天', '第三天', '第四天', '第五天', '第六天', '第七天'];
for (let index = 0; index < 7; index++) {
    const week = index === 6;
    const width = week ? 492 : 156;
    const height = week ? 164 : 196;
    const card = art(`Day${index + 1}`, days, week ? 'week-card' : 'day-card', ...spec.day_centers[index], width, height);
    button(card);
    const selected = art('Selected', card, week ? 'week-selected' : 'day-selected', 0, 0, width, height);
    objects[selected]._active = index === 0;
    label('DayLabel', card, dayNames[index], 0, week ? 46 : 64, width - 16, 36, week ? 22 : 25, plainBrown);
    const iconAsset = week ? 'ticket-day' : index === 2 ? 'ticket-six' : index === 4 ? 'bulb' : 'key';
    const iconSize = spec.assets.find(item => item.id === iconAsset).size;
    const icon = art('Icon', card, iconAsset, 0, week ? 2 : 0, ...iconSize);
    if (index === 2 || week) {
        label('Hours', icon, week ? '24h' : '6h', 0, 0, week ? 90 : 76, 40, week ? 28 : 25,
            { _outlineColor: color(137, 47, 61), _outlineWidth: 2 });
    }
    label('RewardLabel', card, spec.rewards[index], 0, week ? -50 : -70, width - 10, 36,
        week ? 25 : index === 2 ? 17 : 21, { _outlineColor: color(117, 69, 28), _outlineWidth: 2 });
    const claimed = art('Claimed', card, 'claimed-badge', 0, week ? -30 : -44, 116, 36);
    objects[claimed]._active = false;
    label('Label', claimed, '已领取', 0, 0, 102, 30, 20, { _outlineColor: color(49, 90, 36), _outlineWidth: 1 });
}
const triple = art('TripleButton', content, 'button-gold', -135, -388, 250, 88);
button(triple);
label('Label', triple, '三倍领取', 16, 0, 196, 60, 30, { _outlineColor: color(139, 76, 24) });
art('VideoIcon', triple, 'video', -93, 0, 32, 30);
const claim = art('ClaimButton', content, 'button-green', 135, -388, 250, 88);
button(claim);
label('Label', claim, '签到领取', 0, 0, 224, 60, 30, { _outlineColor: color(51, 98, 35) });
label('Status', content, '今日第 1 天 · 选择奖励卡查看详情', 0, -252, 536, 52, 18,
    { ...plainBrown, _enableWrapText: true, _lineHeight: 24 });
label('CloseHint', content, '点击空白处关闭', 0, -490, 500, 36, 20,
    { _color: color(239, 228, 203), _outlineColor: color(39, 32, 24), _outlineWidth: 1 });
art('TutorialHand', content, 'tutorial-hand', 211, -449, 86, 108);

const allowed = new Set([...files(path.join(moduleDir, 'textures'))]
    .filter(file => file.endsWith('.png.meta'))
    .flatMap(file => Object.values(read(file).subMetas || {}).map(meta => meta.uuid)));
for (const object of objects) for (const value of Object.values(object)) {
    if (value?.__uuid__ && !allowed.has(value.__uuid__)) throw new Error(`External SingInUI1 asset: ${value.__uuid__}`);
}
const output = path.join(moduleDir, 'SingInUI1.prefab');
fs.writeFileSync(output, `${JSON.stringify(objects, null, 2)}\n`);
console.log(`Created ${path.relative(root, output)}: ${nodes.size} editable nodes, ${objects.length} serialized objects.`);
