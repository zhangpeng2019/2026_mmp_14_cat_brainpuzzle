/* 从正式关卡数据生成中文目录，设计文档与游戏保持同一编号。 */
const fs = require('node:fs'), path = require('node:path'), ts = require('typescript');
const root = path.resolve(__dirname, '..'), source = path.join(root, 'assets/scripts/features/cat-detective'), cache = new Map();
function load(file) {
    file = path.resolve(source, file.endsWith('.ts') ? file : file + '.ts');
    if (cache.has(file)) return cache.get(file).exports;
    const module = { exports: {} }; cache.set(file, module);
    const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.CommonJS } }).outputText;
    new Function('require', 'module', 'exports', code)(id => {
        if (!id.startsWith('.')) throw new Error('目录生成只允许关卡纯逻辑依赖');
        return load(path.resolve(path.dirname(file), id));
    }, module, module.exports); return module.exports;
}
const { CASE_DATA } = load('CaseData');
const backgrounds = { office: '侦探办公室', alley: '雨后小巷', sunroom: '玻璃阳光房', market: '小镇集市', gallery: '奇妙画廊', clocktower: '午夜钟楼', balloon:'热气球营地', harbor:'海边港口', attic:'猫咪阁楼', kitchen:'甜点厨房', train:'庆典车站', workshop:'维修工坊' };
const totalSteps = CASE_DATA.reduce((sum, item) => sum + item.steps.length, 0);
const totalObjects = CASE_DATA.reduce((sum, item) => sum + item.objects.length, 0);
const kinds = Array.from(new Set(CASE_DATA.flatMap(item => item.objects.map(object => object.kind)))).sort();
const escape = value => String(value).replaceAll('|', '\\|').replaceAll('\n', ' ');
const lines = ['# 猫咪侦探社：80关目录与资源复用', '',
    `当前正式数据共 **${CASE_DATA.length} 个可玩案件、${totalSteps} 个有效步骤、${totalObjects} 个场景对象定义**。对象定义包含前后状态和结案印章，不等同于独立贴图数量。`, '',
    '原版87关位于 `archive/legacy-brainpuzzle/`，未计入本目录，也不参与正式构建。糖果卡通版使用12张场景、10张160格透明道具图集和3张UI美术图；提供点击、拖动、滑动、长按和擦拭，按关卡安排180—360秒限时。场景不绘制道具姓名标签。', '',
    '## 分段详细设计', '',
    '- [糖果版全80关详细设计、每步三级提示和旧版机制借鉴](09-旧版借鉴与80关玩法重制.md)',
    '- [场景与UI实际提示词](糖果美术-场景与UI提示词.md)',
    '- [道具图集实际提示词](糖果美术-道具提示词.md)', '',
    '## 关卡目录', '', '| 编号 | 案件 | 主要机制 | 复用场景 | 有效步骤 | 限时 | 目标 |', '| --- | --- | --- | --- | --- | --- | --- |'];
for (const item of CASE_DATA) lines.push(`| ${item.id} | ${escape(item.title)} | ${escape(item.mechanism ?? item.category)} | ${backgrounds[item.background]} | ${item.steps.length} | ${item.timeLimitSeconds}秒 | ${escape(item.goal)} |`);
lines.push('', '## 正式场景与道具图集', '', '| 背景资源 | 场景 | 使用关卡数 |', '| --- | --- | --- |');
for (const [name, title] of Object.entries(backgrounds)) lines.push(`| assets/resources/cat-detective/candy/scenes/${name}.png | ${title} | ${CASE_DATA.filter(item => item.background === name).length} |`);
lines.push('', `当前${kinds.length}种内部道具标识通过PropArtManifest映射到160格真实透明贴图。内部标识用于资源和逻辑复用，名称仅用于提示、反馈和可访问性，不在场景中常驻绘制。程序绘图负责遮罩、光线和进度线。`, '',
    '## 验收证据', '', '模型检查、80关真实指针解法、存档恢复、多视口及最终产物隔离分别验证。当前结果见 [实现与验收](04-实现与验收.md)，机器记录位于 `build/cat-detective-validation/result.json` 与 `build/release-isolation.json`。目录由 `node tools/export-case-catalog.cjs` 从正式数据生成，不用目录行数代替实际运行验证。', '');
const destination = path.join(root, 'docs/猫咪侦探社/08-80关目录与资源复用.md');
fs.writeFileSync(destination, lines.join('\n'));
console.log(`已生成${CASE_DATA.length}关目录：${totalSteps}步、${totalObjects}对象、${kinds.length}种绘图标识。`);
