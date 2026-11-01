/* 直接验证真实PNG、元数据、图格与正式关卡映射，不依赖Python或截图。 */
const fs = require('node:fs'), path = require('node:path'), zlib = require('node:zlib'), assert = require('node:assert/strict'), ts = require('typescript');
const root = path.resolve(__dirname, '..'), source = path.join(root, 'assets/scripts/features/cat-detective');
const resources = path.join(root, 'assets/resources/cat-detective/candy'), cache = new Map();
function load(file) {
    file = path.resolve(source, file.endsWith('.ts') ? file : file + '.ts');
    assert.ok(file.startsWith(source + path.sep), '只加载案件纯逻辑模块');
    if (cache.has(file)) return cache.get(file).exports;
    const value = { exports: {} }; cache.set(file, value);
    const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.CommonJS } }).outputText;
    new Function('require', 'module', 'exports', code)(id => {
        assert.ok(id.startsWith('.'), '关卡和美术映射不得依赖引擎或外部服务');
        return load(path.resolve(path.dirname(file), id));
    }, value, value.exports); return value.exports;
}
const { PROP_ART, PROP_KIND_ART, PROP_ART_ALIASES, canonicalPropArtKey, resolvePropArt, PROP_ATLAS_COLUMNS, PROP_ATLAS_ROWS } = load('PropArtManifest');
const { CASE_DATA } = load('CaseData');
const { PROP_ART_RECTS } = load('PropArtRects');
assert.equal(PROP_ATLAS_COLUMNS, 4); assert.equal(PROP_ATLAS_ROWS, 4);
assert.ok(Object.keys(PROP_ART).length >= 144 && Object.keys(PROP_ART).length % 16 === 0, '至少九张图集、144个完整明确格位');
const expectedKinds = ['bag','battery','bed','bell','book','boot','bottle','bowl','box','button','cable','cat','clip','clock','cloth','clue','cover','curtain','cushion','door','fan','flower','footprint','frame','gap','gear','hook','key','lamp','leaf','lemon','letter','light','lock','magnet','magnifier','map','mirror','moon','net','painting','paper','paw','person','pipe','plant','radio','rod','rope','socket','stand','star','stone','sun','suspect','switch','thermometer','ticket','tray','umbrella','valve','water','wheel','window','wire'];
for (const kind of expectedKinds) assert.ok(PROP_KIND_ART[kind] && PROP_ART[PROP_KIND_ART[kind]], '缺少正式kind对应正规贴图：' + kind);
for (const [alias, target] of Object.entries(PROP_ART_ALIASES)) assert.ok(PROP_ART[target] && canonicalPropArtKey(alias) === target, '显式别名必须绑定实际格位：' + alias);
assert.equal(canonicalPropArtKey('__unknown_art__'), undefined, '未知显式art不能因fallback而假通过');
const sheetCells = new Map();
for (const [key, value] of Object.entries(PROP_ART)) {
    assert.match(value.sheet, /^sheet-\d{2}$/); assert.ok(Number.isInteger(value.index) && value.index >= 0 && value.index < 16, key);
    if (!sheetCells.has(value.sheet)) sheetCells.set(value.sheet, new Set());
    assert.ok(!sheetCells.get(value.sheet).has(value.index), '不能为不同美术重复声明同一格：' + key);
    sheetCells.get(value.sheet).add(value.index);
}
assert.ok(sheetCells.size >= 9);
for (const cells of sheetCells.values()) assert.equal(cells.size, 16);

function paeth(a, b, c) {
    const p = a + b - c, pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c);
    return pa <= pb && pa <= pc ? a : pb <= pc ? b : c;
}
function pngInfo(file, alphaRequired) {
    assert.ok(fs.existsSync(file), '美术PNG尚未生成：' + path.relative(root, file));
    const data = fs.readFileSync(file);
    assert.ok(data.subarray(0, 8).equals(Buffer.from([137,80,78,71,13,10,26,10])), '无效PNG签名：' + file);
    assert.equal(data.toString('ascii', 12, 16), 'IHDR');
    const width = data.readUInt32BE(16), height = data.readUInt32BE(20), bitDepth = data[24], colorType = data[25], interlace = data[28];
    assert.ok(width >= 512 && height >= 512, '正式美术不能是小占位图'); assert.equal(bitDepth, 8);
    assert.ok([2,6].includes(colorType), '正式资源须为RGB或RGBA PNG');
    const info = { width, height, bitDepth, colorType, bytes: data.length };
    if (!alphaRequired) return info;
    assert.equal(colorType, 6, '图集必须实际具有RGBA通道'); assert.equal(interlace, 0);
    const chunks = [];
    for (let offset = 8; offset < data.length;) {
        const length = data.readUInt32BE(offset), type = data.toString('ascii', offset + 4, offset + 8);
        assert.ok(offset + length + 12 <= data.length, 'PNG块长度越界');
        if (type === 'IDAT') chunks.push(data.subarray(offset + 8, offset + 8 + length));
        offset += length + 12;
        if (type === 'IEND') break;
    }
    const pixels = zlib.inflateSync(Buffer.concat(chunks)), rowSize = width * 4;
    assert.equal(pixels.length, (rowSize + 1) * height, 'PNG像素长度必须匹配IHDR');
    let previous = Buffer.alloc(rowSize), current = Buffer.alloc(rowSize), cursor = 0, minimum = 255, maximum = 0, transparent = 0, partial = 0;
    for (let y = 0; y < height; y++) {
        const filter = pixels[cursor++]; assert.ok(filter <= 4, '非法PNG行滤波');
        for (let x = 0; x < rowSize; x++) {
            const a = x >= 4 ? current[x - 4] : 0, b = previous[x], c = x >= 4 ? previous[x - 4] : 0;
            const predictor = filter === 0 ? 0 : filter === 1 ? a : filter === 2 ? b : filter === 3 ? Math.floor((a + b) / 2) : paeth(a,b,c);
            const value = (pixels[cursor++] + predictor) & 255; current[x] = value;
            if ((x & 3) === 3) { minimum = Math.min(minimum, value); maximum = Math.max(maximum, value); if (value === 0) transparent++; else if (value < 255) partial++; }
        }
        [previous, current] = [current, previous];
    }
    assert.equal(minimum, 0, '必须有真实透明背景'); assert.equal(maximum, 255, '必须有不透明美术主体');
    assert.ok(transparent > width * height * .1, '图集至少10%像素透明，避免把整张背景当独立道具');
    return { ...info, alphaMin: minimum, alphaMax: maximum, transparentPixels: transparent, partialAlphaPixels: partial };
}
const uuids = new Set(), images = [];
function verifyImage(relative, alphaRequired) {
    const file = path.join(resources, relative), info = pngInfo(file, alphaRequired), metaFile = file + '.meta';
    assert.ok(fs.existsSync(metaFile), '缺少美术元数据：' + relative);
    const meta = JSON.parse(fs.readFileSync(metaFile, 'utf8').replace(/^\uFEFF/, ''));
    assert.equal(meta.importer, 'image'); assert.ok(meta.uuid && !uuids.has(meta.uuid), 'PNG元数据UUID必须唯一'); uuids.add(meta.uuid);
    assert.equal(meta.userData.type, 'sprite-frame', relative);
    const frame = Object.values(meta.subMetas ?? {}).find(item => item.importer === 'sprite-frame');
    const texture = Object.values(meta.subMetas ?? {}).find(item => item.importer === 'texture');
    assert.ok(frame && texture, '需要真实纹理与SpriteFrame子资源');
    assert.equal(frame.userData.width, info.width); assert.equal(frame.userData.height, info.height);
    assert.equal(frame.userData.rawWidth, info.width); assert.equal(frame.userData.rawHeight, info.height);
    assert.equal(frame.userData.textureUuid, texture.uuid); assert.equal(texture.userData.imageUuid, meta.uuid);
    assert.equal(frame.userData.trimType, 'none', '图集不能裁去透明网格边距');
    if (alphaRequired) assert.equal(meta.userData.hasAlpha, true);
    images.push({ file: path.relative(root, file).replaceAll('\\', '/'), uuid: meta.uuid, ...info });
}
for (const sheet of Array.from(sheetCells.keys()).sort()) {
    verifyImage(`props/${sheet}.png`, true);
    const rects = PROP_ART_RECTS[sheet]; assert.equal(rects?.length, 16, '必须登记每格实际图像边界');
    for (const [x,y,w,h] of rects) assert.ok([x,y,w,h].every(Number.isInteger) && x >= 0 && y >= 0 && w > 40 && h > 40 && x+w <= 1254 && y+h <= 1254, '切片不能越界或用空白占位');
}
verifyImage('ui/panel-sheet.png', true); verifyImage('ui/button-sheet.png', true); verifyImage('ui/lobby.png', false);
const backgrounds = ['office','alley','sunroom','market','gallery','clocktower','balloon','harbor','attic','kitchen','train','workshop'];
for (const background of backgrounds) verifyImage(`scenes/${background}.png`, false);
assert.equal(CASE_DATA.length, 80);
let objects = 0; const usedArt = new Set();
for (const definition of CASE_DATA) {
    assert.ok(backgrounds.includes(definition.background), '关卡场景未绑定新美术：' + definition.id);
    for (const object of definition.objects) {
        const key = resolvePropArt(object.kind, object.id, object.label, object.art);
        assert.ok(PROP_ART[key], `案件${definition.id} ${object.id}缺少贴图`);
        if (object.art) assert.ok(canonicalPropArtKey(object.art), `案件${definition.id} ${object.id}显式art无效：${object.art}`);
        else assert.ok(PROP_KIND_ART[object.kind], `案件${definition.id} ${object.id}新kind必须显式绑定正规美术`);
        usedArt.add(key); objects++;
    }
}
const report = { passed: true, sheetCount: sheetCells.size, cellCount: Object.keys(PROP_ART).length, coveredKinds: expectedKinds.length,
    cases: CASE_DATA.length, checkedObjects: objects, usedArt: Array.from(usedArt).sort(), imageCount: images.length, images };
fs.mkdirSync(path.join(root, 'build'), { recursive: true });
fs.writeFileSync(path.join(root, 'build/candy-art-validation.json'), JSON.stringify(report, null, 2));
console.log(`PASS 糖果美术：${sheetCells.size}图集／${Object.keys(PROP_ART).length}格／65种原kind，${images.length}张PNG及元数据、80关${objects}个物件映射有效。`);
