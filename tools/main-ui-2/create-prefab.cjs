'use strict';

// Rebuild the editable MainUI2 hierarchy using the installed Creator's own
// component templates. Import once, run --prepare-sprites, import again, generate
// the prefab, then perform the final build. Creator's default PNG type is texture.
// Script class identifiers come from Creator's compiled _RF registration, never
// from a guessed UUID encoding. Existing .meta files are intentionally untouched.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

const root = path.resolve(__dirname, '../..');
const moduleDir = path.join(root, 'assets/resources/main-ui-2');
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
    const metaFile = path.join(moduleDir, 'scripts/MainUI2.ts.meta');
    if (!fs.existsSync(metaFile)) throw new Error('Import MainUI2.ts with Creator first.');
    const chunks = path.join(root, 'temp/programming/packer-driver/targets/editor/chunks');
    const ids = new Set();
    for (const file of files(chunks)) {
        if (!file.endsWith('.js')) continue;
        const source = fs.readFileSync(file, 'utf8');
        const match = source.match(/_RF\.push\(\{\},\s*["']([^"']+)["'],\s*["']MainUI2["']/);
        if (match) ids.add(match[1]);
    }
    if (ids.size !== 1) throw new Error(`Expected one Creator MainUI2 registration, found ${ids.size}. Import/build scripts first.`);
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

const objects = [Object.assign(template('cc.Prefab'), { _name: 'MainUI2', data: { __id__: 1 } })];
const nodes = new Map();
const ref = id => ({ __id__: id });
const add = value => { objects.push(value); return objects.length - 1; };
const idFor = name => crypto.createHash('sha256').update(`MainUI2:${name}`).digest('hex').slice(0, 22);
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
        _outlineColor: color(74, 42, 25), _outlineWidth: 2,
        _enableShadow: false, ...options,
    });
    return index;
}

const spec = read(path.join(root, 'deliverables/MainUI2/art-spec.json'));
const main = node('MainUI2', null, 0, 0, 640, 1386);
widget(main, 45);
component(main, 'cc.BlockInputEvents');
component(main, importedClassId(), { demoFeedback: true });
const back = node('Backdrop', main, 0, 0, 640, 1386);
sprite(back, 'shade', color(49, 40, 31));

// The entire room and its hotspots share one uniform transform on every screen.
const room = node('Room', main, 0, 78, 640, 1230);
art('Background', room, 'room', 0, 0, 640, 1230);
const header = node('Header', room, 0, 0, 640, 1230);
function roomArt(name, parent, asset, x, y, w, h) { return art(name, parent, asset, x - 320, 615 - y, w, h); }
const settings = roomArt('SettingsButton', header, 'settings', 52, 54, 80, 80);
button(settings);
const keys = roomArt('KeysButton', header, 'counter-plate', 190, 56, 170, 48);
button(keys);
art('Icon', keys, 'key', -63, 0, 44, 54);
label('Amount', keys, '0', 14, 0, 104, 42, 27, { _outlineWidth: 1 });
const signin = roomArt('SignInButton', header, 'sign-in', 54, 156, 86, 92);
button(signin);
art('Badge', signin, 'notification-dot', 30, 36, 20, 20);
label('Label', signin, '每日签到', 0, -55, 108, 32, 21, { _color: color(255, 222, 112) });

const upgrades = node('Upgrades', room, 0, 0, 640, 1230);
for (const item of spec.hotspots) {
    const hotspot = roomArt(item.id, upgrades, item.ready ? 'upgrade-ready' : 'upgrade-idle', ...item.center, 64, 64);
    button(hotspot);
}
roomArt('TutorialHand', room, 'tutorial-hand', 434, 126, 76, 96);

const footer = node('Footer', main, 0, -615, 640, 156);
art('Tray', footer, 'footer-panel', 0, 0, 640, 156);
const start = art('StartButton', footer, 'button-start', 0, 0, 300, 96);
button(start);
label('Label', start, '开始游戏', 0, 0, 272, 68, 35, { _outlineColor: color(137, 76, 25) });
const reward = art('RewardButton', footer, 'reward', -245, 12, 82, 86);
button(reward);
art('Badge', reward, 'notification-dot', 28, 31, 20, 20);
label('Label', reward, '入口有奖', 0, -55, 120, 32, 21, { _color: color(255, 224, 116) });
const shortcut = art('ShortcutButton', footer, 'shortcut', 245, 12, 82, 86);
button(shortcut);
label('Label', shortcut, '添加桌面', 0, -55, 120, 32, 21, { _color: color(255, 224, 116) });
const hint = art('Hint', footer, 'hint-plate', 0, 105, 420, 42);
label('Label', hint, '通关帮助她升级居住环境', 0, 0, 400, 36, 21, { _outlineWidth: 1 });

const popup = node('Popup', main, 0, 0, 640, 1386, false);
widget(popup, 45);
component(popup, 'cc.BlockInputEvents');
const shade = node('Shade', popup, 0, 0, 640, 1386);
sprite(shade, 'shade', color(26, 20, 14, 180));
widget(shade, 45);
const panel = art('Panel', popup, 'dialog-panel', 0, 0, 500, 420);
label('Title', panel, '温暖的小家', 0, 132, 370, 56, 30,
    { _color: color(91, 55, 31), _enableOutline: false });
label('Message', panel, '从一点改变开始。', 0, 26, 410, 138, 24,
    { _color: color(86, 65, 46), _enableOutline: false, _enableWrapText: true, _lineHeight: 37 });
const close = art('CloseButton', panel, 'button-close', 214, 174, 48, 48);
button(close);
const confirm = art('ConfirmButton', panel, 'button-confirm', 0, -68, 250, 74);
button(confirm);
label('Label', confirm, '知道了', 0, 0, 190, 50, 25, { _outlineColor: color(137, 76, 25) });
art('Sound', confirm, 'sound', -99, 0, 32, 32);
const exit = node('ExitButton', panel, 0, -130, 220, 28);
button(exit);
label('Label', exit, '返回框架主页', 0, 0, 220, 28, 20, { _color: color(91, 55, 31), _enableOutline: false });

const allowed = new Set([...files(path.join(moduleDir, 'textures'))]
    .filter(file => file.endsWith('.png.meta'))
    .flatMap(file => Object.values(read(file).subMetas || {}).map(meta => meta.uuid)));
for (const object of objects) for (const value of Object.values(object)) {
    if (value?.__uuid__ && !allowed.has(value.__uuid__)) throw new Error(`External MainUI2 asset: ${value.__uuid__}`);
}
const output = path.join(moduleDir, 'MainUI2.prefab');
fs.writeFileSync(output, `${JSON.stringify(objects, null, 2)}\n`);
console.log(`Created ${path.relative(root, output)}: ${nodes.size} editable nodes, ${objects.length} serialized objects.`);
