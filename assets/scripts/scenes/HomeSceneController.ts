import { _decorator } from 'cc';
import { SceneFlow } from '../framework/SceneFlow';
import { FrameworkSceneController } from './FrameworkSceneController';
import { CASE_DATA } from '../features/cat-detective/CaseData';
const { ccclass } = _decorator;

@ccclass('HomeSceneController')
export class HomeSceneController extends FrameworkSceneController {
    protected start(): void {
        this.createScreen('猫咪侦探社', `${CASE_DATA.length} 份原创委托 · 观察 · 道具 · 机关 · 推理\n和小猫一起，发现藏在日常里的秘密。`, [
            { text: '开始调查', callback: () => this.enterGame() },
            { text: '保存与同步', callback: () => this.flush() },
        ]);
        void this.perform('正在读取游戏存档…', () => this.initializeRuntime());
    }
    private enterGame(): void {
        void this.perform('正在进入游戏…', async () => {
            await this.initializeRuntime();
            if (this.sceneActive) {
                await SceneFlow.enterGame();
            }
        });
    }
}
