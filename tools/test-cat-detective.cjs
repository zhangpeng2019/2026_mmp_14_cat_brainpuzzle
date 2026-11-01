/* 真实 TypeScript 纯状态机测试；不伪造 Cocos 引擎声明。 */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const root = path.resolve(__dirname, '..');
const source = path.join(root, 'assets/scripts/features/cat-detective');
const files = ['CaseData.ts', 'CaseSession.ts'].map(name => path.join(source, name));
const compiler = { strict: true, target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.CommonJS, types: [], noEmit: true, skipLibCheck: true };
const program = ts.createProgram(files, compiler);
const diagnostics = ts.getPreEmitDiagnostics(program);
assert.equal(diagnostics.length, 0, ts.formatDiagnosticsWithColorAndContext(diagnostics, {
  getCanonicalFileName: value => value, getCurrentDirectory: () => root, getNewLine: () => '\n',
}));
const cache = new Map();
function load(name) {
  const file = path.resolve(source, name.endsWith('.ts') ? name : name + '.ts');
  if (cache.has(file)) return cache.get(file).exports;
  const module = { exports: {} }; cache.set(file, module);
  const output = ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: compiler }).outputText;
  new Function('require', 'module', 'exports', output)(id => {
    assert.ok(id.startsWith('.'), '案件模型不依赖引擎或外部服务');
    return load(path.resolve(path.dirname(file), id));
  }, module, module.exports);
  return module.exports;
}
const { CASE_DATA } = load('CaseData');
const { CaseSession } = load('CaseSession');
const { stepAction } = load('CaseTypes');
assert.equal(CASE_DATA.length, 80);
assert.deepEqual(CASE_DATA.map(item => item.id), Array.from({ length: 80 }, (_, index) => index + 1), '原创关卡编号必须连续1—80');
assert.equal(new Set(CASE_DATA.map(item => item.id)).size, CASE_DATA.length);
let reachedStates = 0;
for (const definition of CASE_DATA) {
  assert.ok(definition.steps.length >= 4 && definition.steps.length <= 16, '每关需有完整情境步骤');
  assert.ok(definition.timeLimitSeconds >= 180 && definition.timeLimitSeconds <= 360, '每关必须有180—360秒的明确限时');
  const objectIds = new Set(definition.objects.map(object => object.id));
  const stepIds = new Set(definition.steps.map(step => step.id));
  assert.equal(objectIds.size, definition.objects.length, '物体ID不能重复');
  assert.equal(stepIds.size, definition.steps.length, '步骤ID不能重复');
  for (const object of definition.objects) {
    assert.ok(object.x >= .08 && object.x <= .92 && object.y >= .08 && object.y <= .92, object.id + '坐标');
    assert.ok(object.w >= .12 && object.h >= .12, object.id + '命中尺寸');
    assert.ok(typeof object.label === 'string' && object.label.trim().length > 0, '物件内部名称用于提示与可访问性，不绘制为场景标签');
    for (const id of [...object.visibleWhen ?? [], ...object.hiddenWhen ?? []]) assert.ok(stepIds.has(id));
  }
  for (const step of definition.steps) {
    assert.ok(objectIds.has(step.source));
    if (step.target) assert.ok(objectIds.has(step.target));
    assert.equal(step.hints.length, 3);
    assert.ok(new Set(step.hints).size === 3 && step.hints.every(hint => hint.length > 0));
    for (const id of step.requires ?? []) assert.ok(stepIds.has(id));
  }
  const session = new CaseSession(definition);
  assert.equal(session.progress, 0);
  assert.equal(session.won, false);
  assert.equal(session.undo(), false);
  assert.equal(session.act({ action: 'tap', source: '__missing' }).accepted, false);
  assert.equal(session.progress, 0, '错误操作不改变进度');
  for (const action of definition.solution) {
    const before = session.serialize();
    const result = session.act(action);
    assert.ok(result.accepted, `${definition.id} ${JSON.stringify(action)}: ${result.feedback}`);
    assert.equal(session.undo(), true, '每步都可撤销');
    assert.equal(session.serialize(), before, '撤销恢复准确步骤状态');
    assert.ok(session.act(action).accepted);
    const restored = new CaseSession(definition, session.serialize());
    assert.equal(restored.serialize(), session.serialize(), '每一步都可恢复存档');
    assert.equal(restored.won, session.won);
  }
  assert.equal(session.won, true);
  assert.equal(session.progress, 1);
  assert.ok(session.visibleObjects.some(object => object.id === 'case-solved'), '结案后显示新状态物体');
  assert.equal(session.act(definition.solution[0]).accepted, false, '结案后不重复接受操作');
  assert.match(session.hint(), /已解决/);
  session.reset(); assert.equal(session.completed.length, 0);

  // 枚举所有合法操作产生的分支，确保乱序调查没有死路；完整动作而非直接写done。
  const pending = [new CaseSession(definition)], visited = new Set();
  while (pending.length) {
    const state = pending.pop();
    const key = [...state.completed].sort().join('|');
    if (visited.has(key)) continue;
    visited.add(key); reachedStates++;
    assert.ok(state.won || state.availableSteps.length > 0, '有效操作不能造成软锁');
    for (const step of state.availableSteps) {
      for (const id of [step.source, step.target].filter(Boolean)) {
        const object = state.visibleObjects.find(item => item.id === id);
        const top = [...state.visibleObjects].reverse().find(item => !item.decorative && Math.abs(item.x-object.x) <= item.w/2 && Math.abs(item.y-object.y) <= item.h/2);
        assert.equal(top.id, id, `案件${definition.id}：${id}的可操作中心被${top.id}遮住`);
      }
    }
    if (!state.won) {
      const invalidActions = state.visibleObjects.map(object => ({ action: 'tap', source: object.id }));
      for (const object of state.visibleObjects) for (const target of state.visibleObjects)
        invalidActions.push({ action: 'drag', source: object.id, target: target.id });
      for (const action of invalidActions) {
        const available = state.availableSteps.some(step => step.action === action.action && step.source === action.source && step.target === action.target);
        if (available) continue;
        const probe = new CaseSession(definition, state.serialize());
        const before = probe.serialize();
        assert.equal(probe.act(action).accepted, false, '错误对象组合或操作顺序不应推进');
        assert.equal(probe.serialize(), before, '错误操作保持可恢复状态');
      }
    }
    for (const step of state.availableSteps) {
      const next = new CaseSession(definition, state.serialize());
      assert.ok(next.act(stepAction(step)).accepted);
      if (['hold','swipe','scrub'].includes(step.action)) {
        const valid = stepAction(step), invalid = { ...valid };
        if (step.action === 'hold') invalid.elapsedMs = (step.durationMs ?? 900) - 1;
        else invalid.distance = 0;
        const probe = new CaseSession(definition, state.serialize());
        assert.equal(probe.act(invalid).accepted, false, '手势不足不能推进');
        if (step.action === 'swipe') {
          assert.ok(['up','down','left','right'].includes(step.direction));
          assert.equal(probe.act({ ...valid, direction: step.direction === 'left' ? 'right' : 'left' }).accepted, false, '反方向滑动不能推进');
        }
      }
      pending.push(next);
    }
    for (let hint = 0; hint < 3; hint++) assert.ok(state.hint(hint).length > 0);
  }
  const invalid = [null, '{bad', [], 3, { version: 2, caseId: definition.id, completed: [] },
    { version: 1, caseId: -1, completed: [] }, { version: 1, caseId: definition.id, completed: ['__missing'] },
    { version: 1, caseId: definition.id, completed: [null] },
    { version: 1, caseId: definition.id, completed: [definition.steps[0].id, definition.steps[0].id] }];
  const last = definition.steps[definition.steps.length - 1];
  if (last.requires?.length) invalid.push({ version: 1, caseId: definition.id, completed: [last.id] });
  for (const save of invalid) assert.equal(new CaseSession(definition, save).progress, 0, '损坏存档安全重置');
  const sample = session.completed; sample.push('__injected');
  assert.equal(session.completed.length, 0, '外部不能篡改完成列表');
  console.log(`PASS 案件${definition.id}「${definition.title}」：${definition.steps.length}步解法，${visited.size}种状态，恢复/撤销/提示/重置`);
}
console.log(`PASS 猫咪侦探社：${CASE_DATA.length}关，${reachedStates}种可达状态，严格类型检查通过。`);
