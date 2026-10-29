import { director } from 'cc';

export type SceneName = 'Boot' | 'Home' | 'Game';

export interface SceneContext<T = unknown> {
    readonly scene: SceneName;
    readonly payload: T | undefined;
}

export interface SceneTransition {
    readonly from: SceneContext;
    readonly to: SceneContext;
}

export interface SceneFlowHooks {
    before?: (transition: SceneTransition) => void | Promise<void>;
    after?: (transition: SceneTransition) => void | Promise<void>;
    error?: (error: unknown, transition: SceneTransition) => void | Promise<void>;
}

export class SceneTransitionBusyError extends Error {
    constructor() {
        super('A scene transition is already in progress. Await it before starting another.');
        this.name = 'SceneTransitionBusyError';
    }
}

/** Three scene shells, with application-owned payload and loading UI hooks. */
export class SceneFlow {
    private static context: SceneContext = { scene: 'Boot', payload: undefined };
    private static hooks: SceneFlowHooks = {};
    private static changing = false;

    /** Replaces hooks; use application-lifetime callbacks, not a destroyed scene's closure. */
    static configure(hooks: SceneFlowHooks): void { this.hooks = { ...hooks }; }

    /** Available in the destination scene's onLoad(). Payload is not deep cloned. */
    static getContext<T = unknown>(): SceneContext<T> {
        if (!this.changing) this.synchronizeScene();
        return this.context as SceneContext<T>;
    }

    private static synchronizeScene(): void {
        // Creator may preview Home/Game directly without ever launching Boot.
        const scene = director.getScene()?.name;
        if ((scene === 'Boot' || scene === 'Home' || scene === 'Game') && scene !== this.context.scene) {
            this.context = { scene, payload: undefined };
        }
    }

    static get isChanging(): boolean { return this.changing; }

    /** Concurrent requests reject explicitly; callers can retry after the current promise settles. */
    static async go(scene: SceneName, payload?: unknown): Promise<void> {
        if (this.changing) throw new SceneTransitionBusyError();
        this.synchronizeScene();
        this.changing = true;
        const hooks = this.hooks;
        const transition: SceneTransition = { from: this.context, to: { scene, payload } };
        let launched = false;
        try {
            await hooks.before?.(transition);
            this.context = transition.to;
            await new Promise<void>((resolve, reject) => {
                const accepted = director.loadScene(scene, error => error ? reject(error) : resolve());
                if (!accepted) reject(new Error(`Cocos rejected scene loading: ${scene}`));
            });
            launched = true;
            await hooks.after?.(transition);
        } catch (error) {
            // Once launched, an after-hook failure cannot roll back the running scene.
            if (!launched) this.context = transition.from;
            try { await hooks.error?.(error, transition); }
            catch (hookError) { console.error('SceneFlow error hook failed', hookError); }
            throw error;
        } finally {
            this.changing = false;
        }
    }

    static enterGame(payload?: unknown): Promise<void> { return this.go('Game', payload); }
    static goHome(): Promise<void> { return this.go('Home'); }
}
