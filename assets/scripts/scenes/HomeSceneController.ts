import { _decorator } from 'cc';
import { SceneFlow } from '../framework/SceneFlow';
import { FrameworkSceneController } from './FrameworkSceneController';
const { ccclass } = _decorator;

@ccclass('HomeSceneController')
export class HomeSceneController extends FrameworkSceneController {
    protected start(): void {
        this.createScreen('脑洞解谜', '87 个关卡 · 寻物 · 拖拽 · 剧情解谜\n进入后可继续进度或在原版大厅选择关卡。', [
            { text: '进入游戏', callback: () => this.enterGame() },
            { text: '保存与同步', callback: () => this.flush() },
        ]);
        void this.perform('正在读取游戏存档…', () => this.initializeRuntime());
    }
    private enterGame(): void {
        void this.perform('正在进入游戏…', async () => {
            await this.initializeRuntime();
            if (this.sceneActive) await SceneFlow.enterGame();
        });
    }
}
