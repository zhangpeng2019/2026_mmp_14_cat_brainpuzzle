export type ErrorKind = 'http' | 'network' | 'timeout' | 'cancelled' | 'invalid-response';

export class EasyServerError extends Error {
    constructor(
        public readonly kind: ErrorKind,
        message: string,
        public readonly statusCode = 0,
        public readonly responseBody = '',
    ) {
        super(message);
        this.name = 'EasyServerError';
        Object.setPrototypeOf(this, EasyServerError.prototype);
    }
}

/** 不依赖平台是否提供 AbortController；可直接使用浏览器 AbortSignal。 */
export interface CancellationSignal {
    readonly aborted: boolean;
    addEventListener(type: 'abort', listener: () => void): void;
    removeEventListener(type: 'abort', listener: () => void): void;
}

export interface RequestOptions {
    signal?: CancellationSignal;
    headers?: Readonly<Record<string, string>>;
}

export interface HttpRequest {
    method: 'GET' | 'PUT' | 'DELETE' | 'POST';
    url: string;
    body?: string;
    headers: Readonly<Record<string, string>>;
    timeoutMs: number;
    signal?: CancellationSignal;
}

export interface HttpResponse { status: number; body: string; }
export interface HttpTransport { send(request: HttpRequest): Promise<HttpResponse>; }

export interface ClientOptions {
    baseUrl: string;
    gameId: string;
    timeoutMs?: number;
    headers?: Readonly<Record<string, string>>;
    transport?: HttpTransport;
}

export interface SaveResult<T> { id: number; gameId: string; playerId: string; data: T; }
export type LoadResult<T> = { found: true; data: T; rawJson: string } | { found: false };

/** Cocos Creator 2.4/3.x 客户端，不依赖 cc 或第三方 JSON/HTTP 库。 */
export class EasyServerClient {
    private readonly baseUrl: string;
    private readonly gameId: string;
    private readonly timeoutMs: number;
    private readonly headers: Readonly<Record<string, string>>;
    private readonly transport: HttpTransport;

    constructor(options: ClientOptions) {
        const baseUrl = options.baseUrl;
        if (typeof baseUrl !== 'string' || !/^https?:\/\/[^/?#\s]+(?:\/[^?#\s]*)?$/i.test(baseUrl)) {
            throw new TypeError('baseUrl 必须为不带查询参数或片段的 HTTP/HTTPS 地址。');
        }
        validateId(options.gameId, 'gameId');
        const timeoutMs = options.timeoutMs === undefined ? 20000 : options.timeoutMs;
        if (!Number.isFinite(timeoutMs) || timeoutMs < 1 || timeoutMs > 2147483647) {
            throw new RangeError('timeoutMs 必须为 1~2147483647 毫秒。');
        }
        this.baseUrl = baseUrl.replace(/\/+$/, '');
        this.gameId = options.gameId;
        this.timeoutMs = timeoutMs;
        this.headers = { ...options.headers };
        this.transport = options.transport || new XmlHttpTransport();
    }

    async save<T>(playerId: string, data: T, options: RequestOptions = {}): Promise<SaveResult<T>> {
        const json = JSON.stringify(data);
        if (json === undefined) throw new TypeError('data 必须为可序列化的 JSON 值。');
        return this.saveJson<T>(playerId, json, options);
    }

    /** 原样发送 JSON 文本，避免把存档二次序列化为字符串。 */
    async saveJson<T = unknown>(playerId: string, json: string, options: RequestOptions = {}): Promise<SaveResult<T>> {
        JSON.parse(json);
        const response = await this.request('PUT', playerId, json, options);
        ensureSuccess(response);
        const saved = parseJson<SaveResult<T>>(response);
        if (!saved || !Number.isInteger(saved.id) || saved.id < 1 || saved.gameId !== this.gameId ||
            saved.playerId !== playerId || !Object.prototype.hasOwnProperty.call(saved, 'data')) {
            throw new EasyServerError('invalid-response', '保存响应缺少有效的存档记录。', response.status, response.body);
        }
        return saved;
    }

    async load<T = unknown>(playerId: string, options: RequestOptions = {}): Promise<LoadResult<T>> {
        const response = await this.request('GET', playerId, undefined, options);
        if (response.status === 404) return { found: false };
        ensureSuccess(response);
        return { found: true, data: parseJson<T>(response), rawJson: response.body };
    }

    /** 已删除返回 true，原本不存在返回 false。 */
    async delete(playerId: string, options: RequestOptions = {}): Promise<boolean> {
        const response = await this.request('DELETE', playerId, undefined, options);
        if (response.status === 404) return false;
        ensureSuccess(response);
        return true;
    }

    private request(method: HttpRequest['method'], playerId: string, body: string | undefined,
        options: RequestOptions): Promise<HttpResponse> {
        validateId(playerId, 'playerId');
        const headers: Record<string, string> = { ...this.headers, ...options.headers, Accept: 'application/json' };
        if (body !== undefined) headers['Content-Type'] = 'application/json; charset=utf-8';
        return this.transport.send({
            method, body, headers, timeoutMs: this.timeoutMs, signal: options.signal,
            url: this.baseUrl + '/api/gamedata/game/' + encodeSegment(this.gameId) + '/player/' + encodeSegment(playerId),
        });
    }
}

/** 浏览器、Cocos 原生及提供 XMLHttpRequest 适配器的小游戏平台。 */
export class XmlHttpTransport implements HttpTransport {
    constructor(private readonly factory: () => XMLHttpRequest = () => new XMLHttpRequest()) { }

    send(request: HttpRequest): Promise<HttpResponse> {
        return new Promise((resolve, reject) => {
            if (request.signal?.aborted) { reject(new EasyServerError('cancelled', '请求已取消。')); return; }
            let xhr: XMLHttpRequest;
            try { xhr = this.factory(); }
            catch (error) { reject(new EasyServerError('network', '当前平台没有 XMLHttpRequest，请配置 transport。')); return; }
            let settled = false;
            let timer: ReturnType<typeof setTimeout> | undefined;
            const finish = (response?: HttpResponse, error?: EasyServerError): void => {
                if (settled) return;
                settled = true;
                if (timer !== undefined) clearTimeout(timer);
                request.signal?.removeEventListener('abort', cancel);
                xhr.onload = xhr.onerror = xhr.ontimeout = xhr.onabort = null;
                if (error) reject(error); else resolve(response!);
            };
            const cancel = (): void => { finish(undefined, new EasyServerError('cancelled', '请求已取消。')); xhr.abort(); };
            try {
                xhr.open(request.method, request.url, true);
                xhr.timeout = request.timeoutMs;
                Object.keys(request.headers).forEach(key => xhr.setRequestHeader(key, request.headers[key]));
                xhr.onload = () => {
                    if (xhr.status === 0) finish(undefined, new EasyServerError('network', '网络请求失败。'));
                    else finish({ status: xhr.status, body: xhr.responseText || '' });
                };
                xhr.onerror = () => finish(undefined, new EasyServerError('network', '网络请求失败。'));
                xhr.ontimeout = () => finish(undefined, new EasyServerError('timeout', '请求超时。'));
                xhr.onabort = () => finish(undefined, new EasyServerError('cancelled', '请求已取消。'));
                request.signal?.addEventListener('abort', cancel);
                // 原生或小游戏适配器未触发 ontimeout 时仍能结束请求。
                timer = setTimeout(() => {
                    finish(undefined, new EasyServerError('timeout', '请求超时。'));
                    xhr.abort();
                }, request.timeoutMs);
                xhr.send(request.body);
            } catch (error) {
                finish(undefined, new EasyServerError('network', error instanceof Error ? error.message : '发送请求失败。'));
            }
        });
    }
}

function validateId(value: string, name: string): void {
    if (typeof value !== 'string' || value.length < 1 || value.length > 100 || value.trim() !== value ||
        /[\u0000-\u001f\u007f-\u009f/\\]/.test(value)) {
        throw new TypeError(name + ' 必须为 1~100 个字符，不允许首尾空白、控制字符或斜杠。');
    }
}

function encodeSegment(value: string): string {
    return encodeURIComponent(value).replace(/[!'()*]/g, character => '%' + character.charCodeAt(0).toString(16).toUpperCase());
}

function parseJson<T>(response: HttpResponse): T {
    try { return JSON.parse(response.body) as T; }
    catch (error) { throw new EasyServerError('invalid-response', '服务器返回了无效 JSON。', response.status, response.body); }
}

function ensureSuccess(response: HttpResponse): void {
    if (response.status >= 200 && response.status < 300) return;
    let message = 'HTTP ' + response.status;
    try {
        const problem = JSON.parse(response.body) as { title?: unknown };
        if (typeof problem?.title === 'string') message = problem.title;
    } catch (error) { }
    throw new EasyServerError('http', message, response.status, response.body);
}
