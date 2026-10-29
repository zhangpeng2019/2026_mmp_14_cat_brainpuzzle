import { EasyServerClient } from "./EasyServerClient";

export enum LoginMode { Device = 0, Local = 1, Internet = 2 }

export interface NetworkConfig {
  enabled: boolean;
  logEnabled?: boolean;
  baseUrl: string;
  externalBaseUrl?: string;
  profile?: string;
  initializeOnMissing?: boolean;
  gameId: string;
  timeoutMs: number;
  saveDebounceMs: number;
  retryBaseMs: number;
  retryMaxMs: number;
  headers: Readonly<Record<string, string>>;
}

export function parseNetworkConfig(value: unknown): NetworkConfig {
  if (!value || typeof value !== "object" || Array.isArray(value))
    throw new Error("通信配置必须为 JSON 对象。");
  const v = value as NetworkConfig;
  if (typeof v.gameId !== "string" || v.gameId.length < 1 || v.gameId.length > 100 ||
      v.gameId.trim() !== v.gameId || /[\u0000-\u001f\u007f-\u009f/\\]/.test(v.gameId))
    throw new Error("通信配置 gameId 无效。");
  if (v.externalBaseUrl !== undefined && typeof v.externalBaseUrl !== "string")
    throw new Error("通信配置 externalBaseUrl 必须为字符串。");
  if (typeof v.enabled !== "boolean") throw new Error("通信配置 enabled 必须为布尔值。");
  if (v.logEnabled !== undefined && typeof v.logEnabled !== "boolean")
    throw new Error("通信配置 logEnabled 必须为布尔值。");
  if (v.profile !== undefined && (typeof v.profile !== "string" || !v.profile))
    throw new Error("通信配置 profile 必须为非空字符串。");
  if (v.initializeOnMissing !== undefined && typeof v.initializeOnMissing !== "boolean")
    throw new Error("通信配置 initializeOnMissing 必须为布尔值。");
  for (const key of ["timeoutMs", "saveDebounceMs", "retryBaseMs", "retryMaxMs"] as const) {
    if (!Number.isSafeInteger(v[key]) || v[key] < (key === "saveDebounceMs" ? 0 : 1) || v[key] > 2147483647)
      throw new Error(`通信配置 ${key} 超出有效范围。`);
  }
  if (v.retryMaxMs < v.retryBaseMs) throw new Error("最大重试间隔不能小于初始重试间隔。");
  if (!v.headers || typeof v.headers !== "object" || Array.isArray(v.headers) ||
      !Object.entries(v.headers).every(([key, content]) => /^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/.test(key) &&
        typeof content === "string" && !/[\r\n]/.test(content)))
    throw new Error("通信配置 headers 必须包含有效的请求头。");
  // Share address/ID validation with the server's supplied client.
  if (v.enabled) new EasyServerClient(v);
  return { enabled: v.enabled, logEnabled: v.logEnabled !== false,
    baseUrl: typeof v.baseUrl === "string" ? v.baseUrl.trim().replace(/\/+$/, "") : "",
    externalBaseUrl: v.externalBaseUrl, gameId: v.gameId,
    profile: v.profile, initializeOnMissing: v.initializeOnMissing,
    timeoutMs: v.timeoutMs, saveDebounceMs: v.saveDebounceMs, retryBaseMs: v.retryBaseMs,
    retryMaxMs: v.retryMaxMs, headers: { ...v.headers } };
}

/** The entry mode chooses its endpoint, save namespace and initial-load policy. */
export function resolveNetworkConfig(value: unknown, mode: LoginMode, externalServerUrl = ""): NetworkConfig {
  if (mode !== LoginMode.Device && mode !== LoginMode.Local && mode !== LoginMode.Internet)
    throw new Error("登录模式无效，请选择单机模式、本地模式或外网模式。");
  if (!value || typeof value !== "object" || Array.isArray(value))
    throw new Error("通信配置必须为 JSON 对象。");
  const config = value as NetworkConfig;
  let baseUrl = typeof config.baseUrl === "string" ? config.baseUrl.trim() : "";
  if (mode === LoginMode.Internet) {
    baseUrl = externalServerUrl.trim() || (typeof config.externalBaseUrl === "string" ? config.externalBaseUrl.trim() : "");
    if (!baseUrl) throw new Error("外网模式尚未配置服务器地址，请填写启动组件的“外网服务器地址”。");
  }
  const resolved = parseNetworkConfig({ ...config, enabled: mode !== LoginMode.Device, baseUrl });
  return { ...resolved, profile: getEnvironmentProfile(resolved, mode), initializeOnMissing: config.initializeOnMissing !== false };
}

export function getEnvironmentProfile(config: NetworkConfig, mode: LoginMode): string {
  if (typeof config.gameId !== "string" || !config.gameId)
    throw new Error("gameId 不能为空。");
  if (mode === LoginMode.Device) return "device|" + encodeURIComponent(config.gameId);
  if (mode !== LoginMode.Local && mode !== LoginMode.Internet)
    throw new Error("登录模式无效。");
  const environment = mode === LoginMode.Local ? "local" : "internet";
  return environment + "|" +
    [config.baseUrl, config.gameId].map(encodeURIComponent).join("|");
}

export function getSaveStorageKey(config: NetworkConfig, mode: LoginMode): string {
  // Fresh namespace: no application saves or identities from the source project are imported.
  if (mode === LoginMode.Device)
    return "cat_framework.save.v1.device." + encodeURIComponent(config.gameId);
  return "cat_framework.save.v1." + getEnvironmentProfile(config, mode);
}
