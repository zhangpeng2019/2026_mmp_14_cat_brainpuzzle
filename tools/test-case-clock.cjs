/* 对纯计时类验证时间边界、暂停、恢复与一次加时，不伪造引擎声明。 */
const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict'), ts = require('typescript');
const root = path.resolve(__dirname, '..'), file = path.join(root, 'assets/scripts/features/cat-detective/CaseClock.ts');
const options = { strict: true, target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.CommonJS, noEmit: true, skipLibCheck: true, types: [] };
const diagnostics = ts.getPreEmitDiagnostics(ts.createProgram([file], options));
assert.equal(diagnostics.length, 0, ts.formatDiagnosticsWithColorAndContext(diagnostics, {
    getCanonicalFileName: value => value, getCurrentDirectory: () => root, getNewLine: () => '\n',
}));
const moduleValue = { exports: {} };
new Function('module', 'exports', ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: options }).outputText)(moduleValue, moduleValue.exports);
const { CaseClock } = moduleValue.exports;
let checks = 0;
function check(name, run) { run(); checks++; console.log('PASS 计时器：' + name); }

check('实际毫秒累积与向上取整的秒显示', () => {
    const clock = new CaseClock(3);
    assert.equal(clock.seconds, 3); assert.equal(clock.expired, false);
    assert.equal(clock.tick(1), false); assert.equal(clock.seconds, 3);
    assert.equal(clock.tick(998), false); assert.equal(clock.seconds, 3);
    assert.equal(clock.tick(1), true); assert.equal(clock.seconds, 2);
    assert.deepEqual(clock.serialize(), { remainingMs: 2000, extensionUsed: false });
});
check('暂停不消耗时间，恢复后继续原毫秒位置', () => {
    const clock = new CaseClock(10); clock.tick(2500);
    const before = clock.serialize(); assert.equal(clock.tick(60000, false), false);
    assert.deepEqual(clock.serialize(), before); clock.tick(500, true);
    assert.equal(clock.seconds, 7);
});
check('到期边界只报告一次变化，额外tick不产生负时间', () => {
    const clock = new CaseClock(1); assert.equal(clock.tick(1000), true);
    assert.equal(clock.expired, true); assert.equal(clock.seconds, 0);
    assert.equal(clock.tick(1), false); assert.equal(clock.tick(1e9), false);
    assert.deepEqual(clock.serialize(), { remainingMs: 0, extensionUsed: false });
});
check('超时前不能加时，超时后只能免费加60秒一次', () => {
    const clock = new CaseClock(2); assert.equal(clock.extend(), false);
    clock.tick(2000); assert.equal(clock.canExtend, true); assert.equal(clock.extend(), true);
    assert.equal(clock.seconds, 60); assert.equal(clock.expired, false); assert.equal(clock.canExtend, false);
    assert.equal(clock.extend(), false); clock.tick(60000);
    assert.equal(clock.expired, true); assert.equal(clock.extend(), false); assert.equal(clock.seconds, 0);
});
check('重置恢复本关限制并清除加时标志', () => {
    const clock = new CaseClock(20); clock.tick(20000); clock.extend(); clock.tick(1500); clock.reset();
    assert.deepEqual(clock.serialize(), { remainingMs: 20000, extensionUsed: false });
    clock.tick(20000); assert.equal(clock.extend(), true);
});
check('序列化按值隔离且恢复精确到毫秒', () => {
    const clock = new CaseClock(180); clock.tick(12345);
    const saved = clock.serialize(), restored = new CaseClock(180, saved);
    assert.deepEqual(restored.serialize(), saved); assert.equal(restored.seconds, 168);
    saved.remainingMs = 0; saved.extensionUsed = true;
    assert.deepEqual(clock.serialize(), { remainingMs: 167655, extensionUsed: false });
    assert.deepEqual(restored.serialize(), clock.serialize());
});
check('加时中的保存恢复后不会再次领取加时', () => {
    const clock = new CaseClock(180); clock.tick(180000); clock.extend(); clock.tick(1234);
    const restored = new CaseClock(180, clock.serialize());
    assert.deepEqual(restored.serialize(), { remainingMs: 58766, extensionUsed: true });
    assert.equal(restored.canExtend, false); restored.tick(58766); assert.equal(restored.extend(), false);
});
check('零秒记录保持超时，不被重新进入案件绕过', () => {
    const restored = new CaseClock(180, { remainingMs: 0, extensionUsed: false });
    assert.equal(restored.expired, true); assert.equal(restored.tick(100), false); assert.equal(restored.extend(), true);
});
check('损坏类型和非有限保存恢复为初始限制', () => {
    for (const saved of [null, undefined, 'bad', [], 123,
        { remainingMs: NaN, extensionUsed: false }, { remainingMs: Infinity, extensionUsed: false },
        { remainingMs: -1, extensionUsed: false }, { remainingMs: '120000', extensionUsed: false },
        { remainingMs: 120000, extensionUsed: 'false' }, { remainingMs: 120000 },
        { remainingMs: 120000, extensionUsed: null }]) {
        assert.deepEqual(new CaseClock(180, saved).serialize(), { remainingMs: 180000, extensionUsed: false }, JSON.stringify(saved));
    }
});
check('不能用越界记录制造额外时间或绕过一次加时', () => {
    for (const saved of [{ remainingMs: 180001, extensionUsed: false }, { remainingMs: 240000, extensionUsed: false },
        { remainingMs: 60001, extensionUsed: true }, { remainingMs: 180000, extensionUsed: true },
        { remainingMs: 240001, extensionUsed: true }]) {
        assert.deepEqual(new CaseClock(180, saved).serialize(), { remainingMs: 180000, extensionUsed: false }, JSON.stringify(saved));
    }
    assert.deepEqual(new CaseClock(180, { remainingMs: 60000, extensionUsed: true }).serialize(), { remainingMs: 60000, extensionUsed: true });
    assert.deepEqual(new CaseClock(180, { remainingMs: 180000, extensionUsed: false }).serialize(), { remainingMs: 180000, extensionUsed: false });
});
check('非有限和非正delta不会扣时或污染状态', () => {
    const clock = new CaseClock(60), before = clock.serialize();
    for (const delta of [NaN, Infinity, -Infinity, -1, -100000, 0]) {
        assert.equal(clock.tick(delta), false); assert.deepEqual(clock.serialize(), before);
    }
    assert.equal(clock.tick(1000), true); assert.equal(clock.seconds, 59);
});
console.log(`PASS CaseClock：${checks}组时间与存档边界检查通过。`);
