const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const assets = path.join(root, 'assets');
const all = [];
function walk(dir) {
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, item.name);
    if (item.isDirectory()) walk(p); else all.push(p);
  }
}
walk(assets);
const ids = new Set();
for (const p of all.filter(p => p.endsWith('.meta'))) {
  const m = JSON.parse(fs.readFileSync(p, 'utf8'));
  assert.ok(m.uuid && !ids.has(m.uuid), `Duplicate/missing asset UUID: ${p}`);
  ids.add(m.uuid);
  assert.ok(fs.existsSync(p.slice(0, -5)), `Orphan metadata: ${p}`);
}
for (const p of all.filter(p => !p.endsWith('.meta'))) {
  assert.ok(fs.existsSync(p + '.meta'), `Missing metadata: ${p}`);
  if (p.endsWith('.ts')) {
    const code = fs.readFileSync(p, 'utf8');
    for (const match of code.matchAll(/from\s+['"]([^'"]+)['"]/g)) {
      if (match[1].startsWith('.')) {
        const dependency = path.resolve(path.dirname(p), match[1]);
        assert.ok(dependency.startsWith(assets + path.sep), `External source dependency: ${p}`);
        assert.ok(fs.existsSync(dependency + '.ts') || fs.existsSync(path.join(dependency, 'index.ts')), `Unresolved import: ${match[1]}`);
      }
    }
  }
}
const compress = uuid => {
  const hex = uuid.replaceAll('-', '');
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  let value = hex.slice(0, 5);
  for (let index = 5; index < hex.length; index += 3) {
    const bits = parseInt(hex.slice(index, index + 3), 16);
    value += alphabet[bits >> 6] + alphabet[bits & 63];
  }
  return value;
};
for (const name of ['Boot', 'Home', 'Game']) {
  const scene = JSON.parse(fs.readFileSync(path.join(assets, 'scenes', name + '.scene'), 'utf8'));
  const script = JSON.parse(fs.readFileSync(path.join(assets, 'scripts/scenes', name + 'SceneController.ts.meta'), 'utf8'));
  assert.equal(scene[0]._name, name);
  assert.ok(scene.some(o => o.__type__ === compress(script.uuid)), `Unbound controller: ${name}`);
  function verify(value) {
    if (!value || typeof value !== 'object') return;
    if ('__id__' in value) assert.ok(scene[value.__id__], `Broken scene reference: ${name}`);
    if ('__uuid__' in value) assert.ok(ids.has(value.__uuid__), `Missing scene asset: ${name}`);
    Object.values(value).forEach(verify);
  }
  scene.forEach(verify);
}
const build = JSON.parse(fs.readFileSync(path.join(root, 'build-configs/web-desktop.json'), 'utf8'));
assert.equal(build.scenes.length, 3);
assert.equal(build.startScene, build.scenes[0].uuid);
assert.equal(JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8')).creator.version, '3.8.7');
console.log('PASS project structure, scene bindings, metadata and framework boundaries');
