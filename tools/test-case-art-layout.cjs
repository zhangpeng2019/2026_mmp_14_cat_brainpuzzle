/* 对80关陈设覆盖枚举全部状态，防止主美调整破坏真实指针入口。 */
const assert = require('node:assert/strict'), fs = require('node:fs'), path = require('node:path'), ts = require('typescript');
const root = path.resolve(__dirname, '..'), source = path.join(root, 'assets/scripts/features/cat-detective'), cache = new Map();
function load(name) {
    const file = path.resolve(source, name.endsWith('.ts') ? name : name + '.ts');
    assert.ok(file.startsWith(source + path.sep));
    if (cache.has(file)) return cache.get(file).exports;
    const module = { exports: {} }; cache.set(file, module);
    const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.CommonJS } }).outputText;
    new Function('require', 'module', 'exports', code)(id => { assert.ok(id.startsWith('.')); return load(path.resolve(path.dirname(file), id)); }, module, module.exports);
    return module.exports;
}
const { CASE_DATA } = load('CaseData'), { CaseSession } = load('CaseSession'), { stepAction } = load('CaseTypes');
const { resolveCaseObjects, isCaseLayoutReachable } = load('CaseArtLayout'), { canonicalPropArtKey } = load('PropArtManifest');
const cases = [];
for (const original of CASE_DATA) {
    const objects = resolveCaseObjects(original), definition = { ...original, objects };
    assert.equal(resolveCaseObjects(original), objects, '同关复用通过验证的陈设');
    assert.ok(isCaseLayoutReachable(definition), `第${original.id}关覆盖后布局不可达`);
    assert.deepEqual(objects.map(object => object.id), original.objects.map(object => object.id), '对象顺序与事件层级稳定');
    for (const object of objects) {
        const old = original.objects.find(value => value.id === object.id);
        assert.deepEqual(object.visibleWhen, old.visibleWhen); assert.deepEqual(object.hiddenWhen, old.hiddenWhen);
        assert.ok(canonicalPropArtKey(object.art));
        assert.ok(object.scale > 0 && object.scale <= 1, '视觉保持在命中框内');
        // 旋转后的外接框也不能越出原命中框，按最坏的矩形贴图核验。
        const radians = Math.abs(object.angle) * Math.PI / 180;
        const w = object.w * 584, h = object.h * 720;
        assert.ok(object.scale * (w * Math.cos(radians) + h * Math.sin(radians)) <= w + 1, '旋转后的物件宽度不能越界');
        assert.ok(object.scale * (h * Math.cos(radians) + w * Math.sin(radians)) <= h + 1, '旋转后的物件高度不能越界');
    }
    const pending = [new CaseSession(definition)], visited = new Set();
    while (pending.length) {
        const session = pending.pop(), key = session.completed.sort().join('|');
        if (visited.has(key)) continue; visited.add(key);
        const restored = new CaseSession(original, session.serialize());
        assert.equal(restored.serialize(), session.serialize(), '陈设覆盖仍兼容原步骤存档');
        for (const step of session.availableSteps) {
            const next = new CaseSession(definition, session.serialize());
            assert.ok(next.act(stepAction(step)).accepted); pending.push(next);
        }
    }
    cases.push({ id: original.id, title: original.title, states: visited.size,
        moved: objects.filter(object => { const old = original.objects.find(value => value.id === object.id); return object.x !== old.x || object.y !== old.y; }).map(object => object.id),
        styled: objects.filter(object => object.scale !== 1 || object.angle !== 0).length });
    console.log(`PASS 第${original.id}关「${original.title}」：${visited.size}种状态，命中中心/边界/存档兼容`);
}
const first = resolveCaseObjects(CASE_DATA[0]);
assert.equal(first.find(object => object.id === 'drawer').art, 'drawer-closed', '抽屉必须呈现抽屉贴图');
assert.equal(first.find(object => object.id === 'paw').y, .31, '桌面爪印应放在桌面');
const attic = resolveCaseObjects(CASE_DATA[12]);
assert.equal(attic.find(object => object.id === 'lamp').art, 'lamp', '空灯座不能因文案包含灯泡而绘制为灯泡');
assert.equal(attic.find(object => object.id === 'window').x, .51, '阁楼窗片应对准背景真实窗位');
const obstruction = { ...CASE_DATA[0], objects: first.map(object => object.id === 'drawer' ? { ...object, x: .55, y: .31 } : object) };
assert.equal(isCaseLayoutReachable(obstruction), false, '验证器必须能发现后置对象遮挡可操作中心');
fs.mkdirSync(path.join(root, 'build'), { recursive: true });
fs.writeFileSync(path.join(root, 'build/case-art-layout-validation.json'), JSON.stringify({ passed: true, states: cases.reduce((sum, value) => sum + value.states, 0), cases }, null, 2));
console.log(`PASS 80关陈设审查：${cases.reduce((sum, value) => sum + value.states, 0)}种可达状态；全部视觉、命中与存档检查通过。`);
