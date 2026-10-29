import { _decorator } from 'cc';
import { SceneFlow } from '../framework/SceneFlow';
import { FrameworkSceneController } from './FrameworkSceneController';

const { ccclass } = _decorator;

@ccclass('BootSceneController')
export class BootSceneController extends FrameworkSceneController {
    protected start(): void {
        this.createScreen('脑洞解谜', '正在读取关卡与游戏进度，\n完成后进入主界面。', []);
        void this.perform('正在初始化框架…', async () => {
            await this.initializeRuntime();
            if (this.sceneActive) await SceneFlow.goHome();
        });
    }
}
