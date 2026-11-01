/* 正式Creator构建中的真实鼠标/键盘手势、贴图、限时与80关完整解法。 */
const fs = require('node:fs'), path = require('node:path'), http = require('node:http'), assert = require('node:assert/strict');
const { chromium } = require('playwright');
const root = path.resolve(__dirname, '..'), web = path.join(root, 'build/web-desktop'), output = path.join(root, 'build/cat-detective-validation');
const checks = [], errors = [], consoleErrors = [], failures = [], solved = [], gestures = { tap: 0, drag: 0, swipe: 0, hold: 0, scrub: 0 };
const uiAudits = [];
let entry = 'Boot', currentCase = 0;
const check = (value, name) => { assert.ok(value, name); checks.push(name); console.log('PASS ' + name); };
const server = http.createServer((req, res) => {
    let file = path.resolve(web, '.' + decodeURIComponent(new URL(req.url, 'http://localhost').pathname));
    if (file !== web && !file.startsWith(web + path.sep)) return res.writeHead(403).end();
    if (file === web) file = path.join(web, 'index.html');
    if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) return res.writeHead(404).end();
    res.setHeader('Content-Type', ({ '.html': 'text/html', '.js': 'application/javascript', '.json': 'application/json', '.png': 'image/png', '.css': 'text/css', '.wasm': 'application/wasm' })[path.extname(file)] || 'application/octet-stream');
    if (file === path.join(web, 'src/settings.json')) return res.end(fs.readFileSync(file, 'utf8').replace('db://assets/scenes/Boot.scene', `db://assets/scenes/${entry}.scene`));
    if (file.endsWith('.html')) return res.end(fs.readFileSync(file, 'utf8').replace('</head>', '<style>html,body{margin:0;width:100%;height:100%;overflow:hidden}#GameDiv{width:100vw!important;height:100vh!important;margin:0;border:0}.header,.footer{display:none!important}</style></head>'));
    fs.createReadStream(file).pipe(res);
});

async function main() {
    fs.mkdirSync(output, { recursive: true }); await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
    const browser = await chromium.launch({ channel: process.env.FRAMEWORK_BROWSER || 'chrome', headless: true, args: ['--enable-unsafe-swiftshader'] }).catch(async error => { await new Promise(resolve => server.close(resolve)); throw error; });
    const context = await browser.newContext({ viewport: { width: 640, height: 1386 } }), page = await context.newPage();
    page.on('pageerror', e => errors.push({ currentCase, detail: e.stack || e.message }));
    page.on('console', m => { if (m.type() === 'error') consoleErrors.push({ currentCase, detail: m.text() }); });
    page.on('requestfailed', r => failures.push(r.url()));
    const url = `http://127.0.0.1:${server.address().port}`;
    async function connect() {
        await page.goto(url); await page.waitForFunction(() => typeof System !== 'undefined');
        await page.evaluate(async () => { window.cc = await System.import('cc'); });
        await page.waitForFunction(() => {
            const canvas = cc.director.getScene()?.getChildByName('Canvas');
            return cc.director.getScene()?.name === 'Home' && canvas?.getChildByName('content')?.getChildByName('FrameworkScreen')?.getChildByName('Action1')?.activeInHierarchy && !canvas.getComponent('HomeSceneController').running;
        }, {}, { timeout: 60000 });
    }
    async function geometry(name) {
        const value = await page.evaluate(name => {
            const canvas = cc.director.getScene().getChildByName('Canvas');
            function find(node) { if (node.name === name && node.activeInHierarchy) return node; for (const child of node.children) { const found = find(child); if (found) return found; } }
            const node = find(canvas); if (!node) throw new Error('Missing pointer target ' + name);
            const box = node.getComponent(cc.UITransform).getBoundingBoxToWorld(), bounds = canvas.getComponent(cc.UITransform).getBoundingBoxToWorld();
            return { x: (box.center.x - bounds.x)/bounds.width, y: (bounds.y + bounds.height - box.center.y)/bounds.height, w: box.width/bounds.width, h: box.height/bounds.height };
        }, name);
        const rect = await page.locator('canvas').boundingBox();
        return { x: rect.x + value.x*rect.width, y: rect.y + value.y*rect.height, w: value.w*rect.width, h: value.h*rect.height };
    }
    async function click(name) { const p = await geometry(name); await page.mouse.click(p.x,p.y); await page.waitForTimeout(75); }
    async function auditUI(screen) {
        await page.waitForTimeout(90);
        const audit = await page.evaluate(() => {
            const canvas = cc.director.getScene().getChildByName('Canvas');
            const labels = canvas.getComponentsInChildren(cc.Label).filter(label => label.node.activeInHierarchy && label.string);
            const smallText = labels.filter(label => (label.actualFontSize || label.fontSize) < 17.5)
                .map(label => ({ name: label.node.name, text: label.string, size: label.actualFontSize }));
            const buttons = canvas.getComponentsInChildren(cc.Button).filter(button => button.node.activeInHierarchy);
            const squeezed = [], paleCaptions = [];
            for (const button of buttons) {
                const artwork = button.node.getChildByName('ButtonArtwork'), sprite = artwork?.getComponent(cc.Sprite);
                if (sprite?.spriteFrame) {
                    const transform = artwork.getComponent(cc.UITransform), frame = sprite.spriteFrame;
                    if (transform.height < frame.originalSize.height - .01 || transform.width < frame.insetLeft + frame.insetRight)
                        squeezed.push(button.node.name);
                }
                const caption = button.node.getChildByName('Caption')?.getComponent(cc.Label);
                if (caption?.string && (caption.color.r > 100 || caption.color.g > 120 || caption.color.b > 140)) paleCaptions.push(button.node.name);
            }
            return { smallText, squeezed, paleCaptions, labelCount: labels.length, buttonCount: buttons.length };
        });
        uiAudits.push({ screen, ...audit });
        check(audit.smallText.length === 0 && audit.squeezed.length === 0 && audit.paleCaptions.length === 0,
            `${screen}: readable text, dark captions and uncompressed button corners ${JSON.stringify(audit.smallText)}`);
    }
    async function state() { return page.evaluate(() => { const v = cc.director.getScene().getChildByName('Canvas').getComponent('CatDetectiveView'); return { completed: v.session?.completed, won: v.session?.won, modal: !!v.modal, modalKind: v.modalKind, clock: v.clock?.serialize(), seconds: v.clock?.seconds, feedback: v.session?.feedback, lastAction: window.lastPointerAction, available: v.session?.availableSteps.map(s=>({id:s.id,source:s.source,action:s.action,direction:s.direction})) }; }); }
    async function enter() {
        await click('Action1'); await page.waitForFunction(() => cc.director.getScene()?.getChildByName('Canvas')?.getComponent('CatDetectiveView')?.shell, {}, { timeout: 60000 });
        await page.evaluate(async () => { window.cases = (await System.import('chunks:///_virtual/CaseData.ts')).CASE_DATA; });
    }
    async function readyCase() {
        await page.waitForFunction(() => {
            const v = cc.director.getScene().getChildByName('Canvas').getComponent('CatDetectiveView');
            return v.artReady && v.objects?.children.every(node => node.getChildByName('Artwork')?.getComponent(cc.Sprite)?.spriteFrame);
        }, {}, { timeout: 30000 });
        await page.evaluate(() => {
            const v=cc.director.getScene().getChildByName('Canvas').getComponent('CatDetectiveView');
            if (!v.__traceWrapped) { const original=v.performAction;v.performAction=function(action){window.lastPointerAction=action;return original.call(this,action);};v.__traceWrapped=true; }
        });
    }
    async function perform(action) {
        const from = await geometry('Object_' + action.source);
        if (action.action === 'tap') await click('Object_' + action.source);
        else {
            await page.mouse.move(from.x,from.y); await page.mouse.down();
            if (action.action === 'drag') {
                const to = await geometry('Object_' + action.target); await page.mouse.move(to.x,to.y,{steps:14});
            } else if (action.action === 'hold') await page.waitForTimeout((action.elapsedMs ?? 900) + 150);
            else if (action.action === 'swipe') {
                const board = await geometry('Board'), distance = Math.max(45, board.w * Math.max(action.distance ?? .06,.11));
                const move = { up:[0,-distance], down:[0,distance], left:[-distance,0], right:[distance,0] }[action.direction];
                await page.mouse.move(Math.max(9,Math.min(631,from.x+move[0])),Math.max(9,Math.min(1377,from.y+move[1])),{steps:12});
            } else if (action.action === 'scrub') {
                const span = Math.max(14, Math.min(45,from.w*.29));
                const board = await geometry('Board'), turns = Math.max(8,Math.ceil((action.distance ?? .45)*board.w/(span*2))+3);
                for(let i=0;i<turns;i++) await page.mouse.move(from.x+(i%2 ? span : -span),from.y+(i%3-1)*2,{steps:3});
            }
            await page.mouse.up();
        }
        await page.waitForTimeout(90);
    }
    try {
        await connect(); await auditUI('home'); await page.screenshot({path:path.join(output,'home.png')}); await enter(); await page.waitForTimeout(500);
        await auditUI('case-list');
        await page.screenshot({path:path.join(output,'case-list.png')});
        check(await page.evaluate(() => cases.length===80),'80 redesigned cases exist in the actual build');
        await click('PreviousPage'); await geometry('Case80'); await page.screenshot({path:path.join(output,'case-list-last-page.png')}); await click('NextPage');
        check(await page.evaluate(() => cc.director.getScene().getChildByName('Canvas').getComponent('CatDetectiveView').page===0),'14-page case list wraps in both directions');
        const definitions = await page.evaluate(() => cases.map(c=>({id:c.id,title:c.title,solution:c.solution,steps:c.steps.length,timeLimitSeconds:c.timeLimitSeconds})));
        for(const definition of definitions) {
            currentCase=definition.id;
            if(definition.id>1&&(definition.id-1)%6===0) { await click('NextPage'); await auditUI(`case-list-page-${Math.ceil(definition.id/6)}`); }
            await click('Case'+definition.id); await readyCase();
            check(await page.evaluate(()=>{
                const v=cc.director.getScene().getChildByName('Canvas').getComponent('CatDetectiveView');
                return v.objects.children.every(n=>n.getComponentsInChildren(cc.Label).length===0&&!!n.getChildByName('Artwork')?.getComponent(cc.Sprite)?.spriteFrame);
            }),`case ${definition.id}: all objects use actual art sprites and have no name labels`);
            await auditUI(`case-${definition.id}`);
            await page.screenshot({path:path.join(output,`case-${definition.id}-start.png`)});
            if(definition.id===1) {
                check((await state()).seconds>0&&(await state()).seconds<=definition.timeLimitSeconds,'visible case countdown starts with its configured limit');
                await click('Pause');const before=(await state()).clock.remainingMs;await page.waitForTimeout(600);check((await state()).clock.remainingMs===before,'pause modal does not consume countdown time');await page.keyboard.press('Escape');await page.waitForTimeout(70);
                await click('Hint');check((await state()).modal,'stage-aware hint opens');await auditUI('hint-dialog');await page.screenshot({path:path.join(output,'hint-dialog.png')});await click('ModalAction0');await click('ModalAction1');
                await click('Notes');await click('ModalAction0');
                await page.evaluate(()=>cc.game.emit(cc.Game.EVENT_HIDE));const hidden=(await state()).clock.remainingMs;await page.waitForTimeout(300);check((await state()).clock.remainingMs===hidden,'backgrounded application pauses and saves the timer');await page.evaluate(()=>cc.game.emit(cc.Game.EVENT_SHOW));
                // 用一秒测试时钟触发真实update/超时界面，不宣称等待了整段默认限时。
                await page.evaluate(async()=>{const v=cc.director.getScene().getChildByName('Canvas').getComponent('CatDetectiveView');window.savedClock=v.clock;v.clock=new (await System.import('chunks:///_virtual/CaseClock.ts')).CaseClock(1);});
                await page.waitForTimeout(1250);check((await state()).modalKind==='timeout','one-second test clock triggers the real timeout dialog');await auditUI('timeout-dialog');await page.screenshot({path:path.join(output,'timeout-dialog.png')});
                await page.keyboard.press('Escape');check((await state()).modalKind==='timeout','timeout cannot be dismissed to bypass the time limit');
                await click('ModalAction0');check(!(await state()).modal&&(await state()).seconds<=60&&(await state()).seconds>58,'timeout grants a single free 60-second extension');
                await page.evaluate(()=>cc.director.getScene().getChildByName('Canvas').getComponent('CatDetectiveView').clock.tick(61000));await page.waitForTimeout(100);
                check((await state()).modalKind==='timeout','second expiry requires retry rather than unlimited extension');await click('ModalAction0');check((await state()).completed.length===0,'timeout retry resets the puzzle');
                await page.evaluate(()=>{const v=cc.director.getScene().getChildByName('Canvas').getComponent('CatDetectiveView');v.clock=savedClock;v.clock.reset();v.persist();v.updateTimerLabel();});
            }
            for(let index=0;index<definition.solution.length;index++) {
                const action=definition.solution[index],before=(await state()).completed.length;
                await perform(action);const after=await state();check(after.completed.length===before+1,`case ${definition.id}: real ${action.action} solves step ${index+1}: ${after.completed.length===before+1?"":JSON.stringify(after)}`);gestures[action.action]++;
                if(definition.id===2&&index===0) {await click('Undo');check((await state()).completed.length===0,'undo restores the previous puzzle state');await perform(action);}
            }
            check((await state()).won,`case ${definition.id}: complete solution reaches victory`);
            check(await page.evaluate(async id=>(await System.import('chunks:///_virtual/CatDetectiveState.ts')).CatDetectiveState.read().cleared.includes(id),definition.id),`case ${definition.id}: saved completion reads back correctly`);
            if(definition.id<=6||[13,18,36,60,80].includes(definition.id)){await page.keyboard.press('Escape');await page.waitForTimeout(100);await page.screenshot({path:path.join(output,`case-${definition.id}-solved.png`)});await click('Hint');}
            solved.push(definition.id);await click('ModalAction1');
        }
        check(solved.length===80,'all 80 cases solved with real pointer gestures');
        check(Object.values(gestures).every(n=>n>0),'tap, drag, swipe, hold and scrub each occur in actual cases');
        await click('BackHome');await page.waitForFunction(()=>cc.director.getScene()?.name==='Home');await connect();await enter();
        check(await page.evaluate(()=>cc.director.getScene().getChildByName('Canvas').getComponent('CatDetectiveView').save.cleared.length===80),'reload restores all 80 completed cases');
        await click('Case1');await readyCase();await click('Reset');await click('ModalAction0');
        async function focusObject(id){for(let i=0;i<80;i++){if(await page.evaluate(id=>cc.director.getScene().getChildByName('Canvas').getComponent('CatDetectiveView').focusedName==='Object_'+id,id))return;await page.keyboard.press('ArrowRight');await page.waitForTimeout(30);}throw new Error('Cannot focus '+id);}
        for(const action of definitions[0].solution){await focusObject(action.source);
            if(action.action==='hold'){await page.keyboard.down('Space');await page.waitForTimeout((action.elapsedMs??900)+150);await page.keyboard.up('Space');}
            else if(action.action==='swipe')await page.keyboard.press({up:'w',down:'s',left:'a',right:'d'}[action.direction]);
            else if(action.action==='scrub')for(let i=0;i<6;i++){await page.keyboard.press('Space');await page.waitForTimeout(35);}
            else {await page.keyboard.press('Enter');await page.waitForTimeout(60);if(action.action==='drag'){await focusObject(action.target);await page.keyboard.press('Enter');}}
            await page.waitForTimeout(90);
        }
        check((await state()).won,'keyboard controls solve an entire case with equivalent gestures');
        await page.keyboard.press('Escape');await page.waitForTimeout(80);await click('Reset');await click('ModalAction0');
        await page.evaluate(async()=>{const c=(await System.import('chunks:///_virtual/CatDetectiveState.ts')).CatDetectiveState;window.originalWrite=c.write;c.write=()=>{throw new Error('intentional persistence failure');};});
        await perform(definitions[0].solution[0]);check((await state()).modal,'persistence failure has an explicit retry dialog');await click('ModalAction1');await click('CaseList');check((await state()).modal&&(await state()).completed.length===1,'leaving retries unsaved progress and retains the live session');
        await page.evaluate(async()=>{(await System.import('chunks:///_virtual/CatDetectiveState.ts')).CatDetectiveState.write=originalWrite;});await click('ModalAction0');check(!(await state()).modal,'storage recovery saves pending progress');
        for(const viewport of [{width:320,height:568},{width:390,height:844},{width:960,height:540}]){await page.setViewportSize(viewport);await page.evaluate(()=>{cc.screen.windowSize=new cc.Size(innerWidth,innerHeight);});await page.waitForTimeout(200);check(await page.evaluate(()=>{const c=cc.director.getScene().getChildByName('Canvas'),v=c.getComponent('CatDetectiveView'),b=v.shell.getComponent(cc.UITransform).getBoundingBoxToWorld(),a=c.getComponent(cc.UITransform).getBoundingBoxToWorld();return b.width<=a.width+1&&b.height<=a.height+1;}),`art UI fits ${viewport.width}×${viewport.height}`);await click('Pause');check((await state()).modal,`pause entry works at ${viewport.width}×${viewport.height}`);await click('ModalAction0');await click('Hint');check((await state()).modal,`hint entry works at ${viewport.width}×${viewport.height}`);await click('ModalAction1');await page.screenshot({path:path.join(output,`viewport-${viewport.width}.png`)});await click('CaseList');await page.screenshot({path:path.join(output,`case-list-${viewport.width}.png`)});await click('Case1');await readyCase();}
        await page.setViewportSize({width:640,height:1386});entry='Home';await connect();await enter();check(true,'direct Home preview initializes the art UI');
        entry='Game';await page.goto(url);await page.waitForFunction(()=>typeof System!=='undefined');await page.evaluate(async()=>{window.cc=await System.import('cc');});await page.waitForFunction(()=>cc.director.getScene()?.getChildByName('Canvas')?.getComponent('CatDetectiveView')?.shell,{}, {timeout:60000});check(true,'direct Game preview initializes the same 80-case runtime');
        // 从本次真实画面生成逐关陈设检视页，每页8关；不修改游戏贴图。
        const review = await context.newPage(); await review.setViewportSize({width:1248,height:896});
        const escape = value => value.replace(/[&<>\"]/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[character]));
        for (let offset=0;offset<definitions.length;offset+=8) {
            const items=definitions.slice(offset,offset+8).map(definition=>`<section><h2>${String(definition.id).padStart(2,'0')} · ${escape(definition.title)}</h2><div class="crop"><img src="data:image/png;base64,${fs.readFileSync(path.join(output,`case-${definition.id}-start.png`)).toString('base64')}"></div></section>`).join('');
            await review.setContent(`<html lang="zh-CN"><meta charset="utf-8"><style>*{box-sizing:border-box}body{margin:0;padding:16px;background:#fffaf0;color:#2a3a4f;font:16px Arial,sans-serif}h1{font-size:24px;margin:0 0 16px}main{display:grid;grid-template-columns:repeat(4,292px);gap:16px}section{margin:0}h2{font-size:18px;height:28px;margin:0 0 8px;font-weight:400}.crop{width:292px;height:360px;overflow:hidden;position:relative;border-radius:8px}img{position:absolute;width:320px;height:693px;left:-14px;top:-159.5px}</style><h1>猫咪侦探社 · 第${offset+1}—${Math.min(offset+8,80)}关实际陈设</h1><main>${items}</main></html>`);
            await review.locator('img').evaluateAll(images=>Promise.all(images.map(image=>image.decode())));
            await review.screenshot({path:path.join(output,`review-${String(offset/8+1).padStart(2,'0')}.png`),fullPage:true});
        }
        await review.close();
        check(errors.length===0,'no uncaught browser errors: '+JSON.stringify(errors));check(consoleErrors.length===0,'no console errors: '+JSON.stringify(consoleErrors));check(failures.length===0,'all art and engine resource requests succeed');
        fs.writeFileSync(path.join(output,'result.json'),JSON.stringify({passed:true,checks,solved,gestures,uiAudits,errors,consoleErrors,failures},null,2));
    }catch(error){await page.screenshot({path:path.join(output,'failure.png')}).catch(()=>{});fs.writeFileSync(path.join(output,'result.json'),JSON.stringify({passed:false,currentCase,checks,solved,gestures,errors,consoleErrors,failures,error:String(error)},null,2));throw error;}
    finally{await browser.close();await new Promise(resolve=>server.close(resolve));}
}
main().catch(error=>{console.error(error);process.exitCode=1;});
