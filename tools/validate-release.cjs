/* 对实际 Web 产物核验，不能只依据源目录位置宣称未打包。 */
const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..'), output = path.join(root, 'build/web-desktop');
const settingsFile = path.join(output, 'src/settings.json');
assert.ok(fs.existsSync(path.join(output, 'index.html')), '需要先执行本次Creator构建');
const settingsText = fs.readFileSync(settingsFile, 'utf8'), settings = JSON.parse(settingsText);
const bundleNames = fs.readdirSync(path.join(output, 'assets'), { withFileTypes: true }).filter(item => item.isDirectory()).map(item => item.name);
assert.ok(!bundleNames.some(name => /^Level_\d+$/.test(name)), '发布目录不能含旧关卡Bundle');
assert.ok(!/Level_\d+|legacy-brainpuzzle|db:\/\/archive/.test(settingsText), '构建设置不能注册原版Bundle或归档');
const script = fs.readFileSync(path.join(output, 'assets/main/index.js'), 'utf8');
assert.ok(!/chunks:\/\/\/_virtual\/(?:Level_\d+|BaseData|game-entry|game-manager|funjoy-[\w-]+)\.ts/.test(script), '正式脚本不能含原玩法和原SDK注册');
assert.ok(script.includes('Cases61To80'), '正式脚本必须包含第61—80关');
const archive = path.join(root, 'archive/legacy-brainpuzzle');
const archived = JSON.parse(fs.readFileSync(path.join(archive, 'manifest.json'), 'utf8').replace(/^\uFEFF/, ''));
const crypto = require('node:crypto');
const oldRawHashes = new Set(archived.files.filter(item => /\.(png|jpe?g|webp|mp3|ogg|wav|fnt|atlas|plist|skel|bin)$/i.test(item.originalPath)).map(item => item.sha256));
const forbidden = new Set();
function compact(uuid, prefix) {
    const hex = uuid.replaceAll('-', ''), chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    let result = hex.slice(0, prefix);
    for (let i = prefix; i < hex.length; i += 3) { const value = parseInt(hex.slice(i, i + 3), 16); result += chars[value >> 6] + chars[value & 63]; }
    return result;
}
function gather(value) {
    if (!value || typeof value !== 'object') return;
    if (typeof value.uuid === 'string') {
        forbidden.add(value.uuid);
        const base = value.uuid.split('@')[0];
        if (/^[\da-f]{8}-[\da-f-]{27}$/i.test(base)) { forbidden.add(compact(base, 2)); forbidden.add(compact(base, 5)); }
    }
    Object.values(value).forEach(gather);
}
for (const item of archived.files.filter(item => item.originalPath.startsWith('assets/') && item.originalPath.endsWith('.meta'))) gather(JSON.parse(fs.readFileSync(path.join(archive, item.archivedPath), 'utf8')));
let references = 0, inspectedFiles = 0;
function walk(directory) {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
        const file = path.join(directory, entry.name);
        if (entry.isDirectory()) walk(file);
        else {
            const buffer = fs.readFileSync(file); inspectedFiles++;
            assert.ok(!oldRawHashes.has(crypto.createHash('sha256').update(buffer).digest('hex')), '发布目录仍夹带旧原始资源：' + file);
            if (!entry.name.endsWith('.json')) continue;
            const content = fs.readFileSync(file, 'utf8');
            for (const uuid of forbidden) assert.ok(!content.includes(uuid), '构建JSON仍引用归档UUID：' + uuid + ' in ' + file);
            references++;
        }
    }
}
walk(path.join(output, 'assets'));
const report = { passed: true, bundles: bundleNames, archivedFiles: archived.files.length, forbiddenUuids: forbidden.size, inspectedJson: references, inspectedFiles, oldRawHashes: oldRawHashes.size, engine: settings.CocosEngine };
fs.writeFileSync(path.join(root, 'build/release-isolation.json'), JSON.stringify(report, null, 2));
console.log(`PASS 发布隔离：${bundleNames.join(', ')}；${forbidden.size}种旧UUID表示未出现在${references}个构建JSON中，${oldRawHashes.size}种旧原始资源哈希未命中，无旧关卡Bundle或脚本。`);
