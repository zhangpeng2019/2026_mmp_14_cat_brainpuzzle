import { EasyServerError, HttpRequest, HttpResponse, HttpTransport } from './EasyServerClient';

/** wx.request 等平台接口的最小结构，避免依赖特定小游戏的类型包。 */
export interface MiniGameRequestOptions {
    url: string;
    method: 'GET' | 'PUT' | 'DELETE' | 'POST';
    header: Readonly<Record<string, string>>;
    data?: string;
    timeout: number;
    dataType: string;
    responseType: 'text';
    success(response: { statusCode: number; data: unknown }): void;
    fail(error: { errMsg?: string }): void;
}

export type MiniGameRequest = (options: MiniGameRequestOptions) => { abort(): void };

/** 传入绑定的平台方法，例如 wx.request.bind(wx)。 */
export class MiniGameTransport implements HttpTransport {
    constructor(private readonly requestApi: MiniGameRequest) { }

    send(request: HttpRequest): Promise<HttpResponse> {
        return new Promise((resolve, reject) => {
            if (request.signal?.aborted) { reject(new EasyServerError('cancelled', '请求已取消。')); return; }
            let settled = false;
            let task: { abort(): void } | undefined;
            let timer: ReturnType<typeof setTimeout> | undefined;
            const finish = (response?: HttpResponse, error?: EasyServerError): void => {
                if (settled) return;
                settled = true;
                if (timer !== undefined) clearTimeout(timer);
                request.signal?.removeEventListener('abort', cancel);
                if (error) reject(error); else resolve(response!);
            };
            const cancel = (): void => { finish(undefined, new EasyServerError('cancelled', '请求已取消。')); task?.abort(); };
            try {
                request.signal?.addEventListener('abort', cancel);
                timer = setTimeout(() => {
                    finish(undefined, new EasyServerError('timeout', '请求超时。'));
                    task?.abort();
                }, request.timeoutMs);
                task = this.requestApi({
                    url: request.url, method: request.method, header: request.headers, data: request.body,
                    timeout: request.timeoutMs, dataType: 'text', responseType: 'text',
                    success: response => {
                        if (response.statusCode <= 0) { finish(undefined, new EasyServerError('network', '网络请求失败。')); return; }
                        try {
                            const body = typeof response.data === 'string' ? response.data : JSON.stringify(response.data);
                            finish({ status: response.statusCode, body: body === undefined ? '' : body });
                        } catch (error) { finish(undefined, new EasyServerError('invalid-response', '平台返回了无法读取的响应。')); }
                    },
                    fail: error => {
                        const message = error.errMsg || '网络请求失败。';
                        finish(undefined, new EasyServerError(/timeout/i.test(message) ? 'timeout' : 'network', message));
                    },
                });
                // 平台在返回 RequestTask 前同步触发取消时，补上实际网络任务的终止。
                if (settled && request.signal?.aborted) task.abort();
            } catch (error) {
                finish(undefined, new EasyServerError('network', error instanceof Error ? error.message : '发送请求失败。'));
            }
        });
    }
}
