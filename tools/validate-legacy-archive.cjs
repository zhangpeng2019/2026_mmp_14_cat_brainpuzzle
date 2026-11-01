/* 核对归档完整性和正式资源边界，不将归档重新导入 Creator。 */
const fs = require('node:fs'), path = require('node:path'), crypto = require('node:crypto');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..'), archive = path.join(root, 'archive/legacy-brainpuzzle');
const read = file => JSON.parse(fs.readFileSync(file, 'utf8').replace(/^\uFEFF/, ''));
const manifest = read(path.join(archive, 'manifest.json'));
assert.equal(manifest.version, 1);
assert.ok(manifest.files.length > 10000, '归档必须包含原版专属资源与脚本');
const seen = new Set(); let bytes = 0;
for (const item of manifest.snapshots ?? []) {
    const file = path.resolve(archive, item.archivedPath);
    assert.ok(file.startsWith(archive + path.sep));
    const buffer = fs.readFileSync(file); assert.equal(buffer.length, item.bytes);
    assert.equal(crypto.createHash('sha256').update(buffer).digest('hex'), item.sha256, '共享接入快照已变化：' + item.sourcePath);
}
for (const item of manifest.files) {
    assert.ok(!seen.has(item.originalPath), '重复归档路径'); seen.add(item.originalPath);
    const file = path.resolve(archive, item.archivedPath);
    assert.ok(file.startsWith(archive + path.sep), '归档路径必须位于归档目录内部');
    assert.ok(fs.existsSync(file), '缺失归档文件：' + item.originalPath);
    const buffer = fs.readFileSync(file);
    assert.equal(buffer.length, item.bytes, '归档长度变化：' + item.originalPath);
    assert.equal(crypto.createHash('sha256').update(buffer).digest('hex'), item.sha256, '归档内容变化：' + item.originalPath);
    if (item.originalPath.startsWith('assets/')) assert.ok(!fs.existsSync(path.join(root, item.originalPath)), '旧专属资源仍在正式 assets：' + item.originalPath);
    bytes += item.bytes;
}
const prefabs = manifest.files.filter(item => /^assets\/Level_\d+\/Level_\d+\.prefab$/.test(item.originalPath));
assert.equal(prefabs.length, 87, '完整归档原版87关');
for (const item of prefabs) {
    const name = path.basename(item.originalPath, '.prefab');
    assert.ok(seen.has(`assets/${name}.meta`));
    assert.ok(seen.has(`assets/scripts/${name}.ts`));
    const meta = read(path.join(archive, 'assets', name + '.meta'));
    assert.equal(meta.userData.isBundle, true); assert.equal(meta.userData.bundleName, name);
}
assert.ok(seen.has('assets/scripts/BaseData.ts'));
assert.ok(seen.has('assets/resources/configs/I18n.json'));
assert.ok(seen.has('assets/scripts/main.ts'));
assert.ok(!fs.readdirSync(path.join(root, 'assets')).some(name => /^Level_\d+/.test(name)));
for (const name of ['audio','configs','fonts','imgs','levels','prefabs','spine']) assert.ok(!fs.existsSync(path.join(root, 'assets/resources', name)));
const game = fs.readFileSync(path.join(root, 'assets/scripts/scenes/GameSceneController.ts'), 'utf8');
assert.ok(!/GameEntry|GameManager|LevelManager|['"]\.\.\/main['"]/.test(game), '正式入口不能加载原版注册器');
const net = read(path.join(root, 'assets/resources/config/network-config.json'));
assert.equal(net.gameId, 'cat_brainpuzzle');
const project = read(path.join(root, 'settings/v2/packages/project.json'));
assert.deepEqual(project.general.designResolution, { width: 640, height: 1386, fitWidth: true, fitHeight: false });
console.log(`PASS 原版87关：${manifest.files.length}个归档文件、${bytes}字节逐项SHA256一致，专属资源和注册器均在正式assets外。`);
