'use strict';

// Rebuild the editable MainUI1 hierarchy using the installed Creator's own
// component templates. Import once, run --prepare-sprites, import again, generate
// the prefab, then perform the final build. Creator's default PNG type is texture.
// Script class identifiers come from Creator's compiled _RF registration, never
// from a guessed UUID encoding. Existing .meta files are intentionally untouched.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

const root = path.resolve(__dirname, '../..');
const moduleDir = path.join(root, 'assets/resources/main-ui-1');
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
    const metaFile = path.join(moduleDir, 'scripts/MainUI1.ts.meta');
    if (!fs.existsSync(metaFile)) throw new Error('Import MainUI1.ts with Creator first.');
    const chunks = path.join(root, 'temp/programming/packer-driver/targets/editor/chunks');
    const ids = new Set();
    for (const file of files(chunks)) {
        if (!file.endsWith('.js')) continue;
        const source = fs.readFileSync(file, 'utf8');
        const match = source.match(/_RF\.push\(\{\},\s*["']([^"']+)["'],\s*["']MainUI1["']/);
        if (match) ids.add(match[1]);
    }
    if (ids.size !== 1) throw new Error(`Expected one Creator MainUI1 registration, found ${ids.size}. Import/build scripts first.`);
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

const objects = [Object.assign(template('cc.Prefab'), { _name: 'MainUI1', data: { __id__: 1 } })];
const nodes = new Map();
const ref = id => ({ __id__: id });
const add = value => { objects.push(value); return objects.length - 1; };
const idFor = name => crypto.createHash('sha256').update(`MainUI1:${name}`).digest('hex').slice(0, 22);
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

function button(target) {
    component(target, 'cc.Button', {
        clickEvents: [], _transition: 3, _zoomScale: 0.94, _duration: 0.1,
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
        _outlineColor: color(34, 115, 183), _outlineWidth: 2,
        _enableShadow: false, ...options,
    });
    return index;
}

const main = node('MainUI1', null, 0, 0, 640, 1386);
widget(main, 45);
component(main, 'cc.BlockInputEvents');
component(main, importedClassId(), { demoFeedback: true });

// The 640 x 1386 background is one original art asset. The controller applies
// cover sizing for alternate aspect ratios, preserving the turtle's proportions.
art('Background', main, 'ocean-island', 0, 0, 640, 1386);

const header = node('Header', main, 0, 623, 640, 140);
widget(header, 41);
for (const item of [
    { name: 'CoinButton', x: -210, icon: 'coin', value: '0', iconWidth: 44, iconHeight: 44 },
    { name: 'GemButton', x: -10, icon: 'token', value: '3万', iconWidth: 44, iconHeight: 44 },
    { name: 'EnergyButton', x: 190, icon: 'energy', value: '29/30', iconWidth: 38, iconHeight: 48 },
]) {
    const counter = art(item.name, header, 'counter-pill', item.x, 0, 170, 44);
    button(counter);
    art('Icon', counter, item.icon, -69, 0, item.iconWidth, item.iconHeight);
    label('Amount', counter, item.value, 0, 0, 94, 40, 25,
        { _color: color(48, 137, 206), _enableOutline: false });
    art('Plus', counter, 'plus-gold', 67, 0, 28, 28);
}
label('EnergyTimer', header, '05:09后+1', 190, -37, 170, 30, 19, { _outlineWidth: 1.5 });

const events = node('Events', main, 240, 403, 160, 320);
widget(events, 33, { _top: 130 });
for (const item of [
    { name: 'BenefitsButton', icon: 'event-gift', title: '福利中心', y: 80 },
    { name: 'IslandGiftButton', icon: 'event-island', title: '海岛礼包', y: -60 },
]) {
    const event = art(item.name, events, item.icon, 0, item.y, 88, 96);
    button(event);
    label('Label', event, item.title, 0, -60, 144, 36, 23);
}

const footer = node('Footer', main, 0, -483, 640, 420);
widget(footer, 44);
label('UnlockHint', footer, '第4关出现新元素', -22, 136, 330, 42, 26,
    { _outlineColor: color(79, 192, 223), _outlineWidth: 2.5 });
art('UnlockIcon', footer, 'element-tile', 159, 136, 44, 48);
const level = art('LevelButton', footer, 'button-play', 0, 41, 400, 136);
button(level);
label('Title', level, '第1关', 0, 0, 330, 90, 53,
    { _outlineColor: color(61, 139, 31), _outlineWidth: 3 });

const navigation = node('Navigation', footer, 0, -104, 640, 164);
for (const item of [
    { name: 'MenuButton', asset: 'nav-menu', x: -260, width: 76, height: 76 },
    { name: 'RankButton', asset: 'nav-trophy', x: -130, title: '排行榜', width: 88, height: 96 },
    { name: 'AlbumButton', asset: 'nav-collection', x: 0, title: '海岛图鉴', width: 88, height: 96 },
    { name: 'ShopButton', asset: 'nav-shop', x: 130, title: '道具屋', width: 88, height: 96 },
    { name: 'MoreButton', asset: 'nav-more', x: 260, width: 76, height: 76 },
]) {
    const nav = art(item.name, navigation, item.asset, item.x, 0, item.width, item.height);
    button(nav);
    if (item.title) label('Label', nav, item.title, 0, -61, 126, 34, 22);
}

const popup = node('Popup', main, 0, 0, 640, 1386, false);
widget(popup, 45);
component(popup, 'cc.BlockInputEvents');
const shade = art('Shade', popup, 'shade', 0, 0, 640, 1386);
objects[objects[shade]._components.find(item => objects[item.__id__].__type__ === 'cc.Sprite').__id__]._color = color(4, 30, 68, 175);
widget(shade, 45);
const panel = art('Panel', popup, 'dialog-panel', 0, 0, 520, 480);
label('Title', panel, '海岛小站', 0, 125, 350, 60, 34, { _outlineColor: color(37, 131, 177) });
label('Message', panel, '欢迎来到海岛！', 0, 15, 410, 130, 25,
    { _color: color(32, 103, 146), _enableOutline: false, _enableWrapText: true, _lineHeight: 38 });
const close = art('CloseButton', panel, 'button-close', 208, 160, 52, 52);
button(close);
const confirm = art('ConfirmButton', panel, 'button-confirm', 0, -105, 280, 80);
button(confirm);
label('Label', confirm, '知道啦', 0, 0, 236, 60, 30,
    { _outlineColor: color(61, 139, 31), _outlineWidth: 2 });
const exit = node('ExitButton', panel, 0, -170, 200, 45);
button(exit);
label('Label', exit, '返回', 0, 0, 200, 45, 23,
    { _color: color(32, 103, 146), _enableOutline: false });

// Catch accidental cross-module references before the asset is saved.
const allowed = new Set([...files(path.join(moduleDir, 'textures'))]
    .filter(file => file.endsWith('.png.meta'))
    .flatMap(file => Object.values(read(file).subMetas || {}).map(meta => meta.uuid)));
for (const object of objects) {
    for (const value of Object.values(object)) {
        if (value?.__uuid__ && !allowed.has(value.__uuid__)) {
            throw new Error(`External asset reference in ${object.__type__}: ${value.__uuid__}`);
        }
    }
}
const output = path.join(moduleDir, 'MainUI1.prefab');
fs.writeFileSync(output, `${JSON.stringify(objects, null, 2)}\n`);
console.log(`Created ${path.relative(root, output)}: ${nodes.size} editable nodes, ${objects.length} serialized objects.`);
console.log('Import/build once more in Creator to generate prefab metadata and verify actual bindings.');
