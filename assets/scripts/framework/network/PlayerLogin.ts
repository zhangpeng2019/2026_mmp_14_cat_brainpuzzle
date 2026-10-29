import type { StorageAdapter } from "../storage/DataStore";

export interface PlayerIdentity {
  playerId: string;
  /** Tokens stay in memory and are attached to every data request. */
  headers?: Readonly<Record<string, string>>;
}

export interface LoginProvider {
  login(): Promise<PlayerIdentity>;
}

export function validatePlayerId(value: unknown): asserts value is string {
  if (typeof value !== "string" || value.length < 1 || value.length > 100 || value.trim() !== value ||
      /[\u0000-\u001f\u007f-\u009f/\\]/.test(value))
    throw new Error("登录返回了无效的 playerId。");
}

/** One persistent device identity across environments, until a platform login is supplied. */
export class GuestLoginProvider implements LoginProvider {
  constructor(private readonly storage: StorageAdapter,
    private readonly key = "cat_framework.guest.v1",
    private readonly createId: () => string = guestId) {}

  async login(): Promise<PlayerIdentity> {
    let playerId = this.storage.getItem(this.key);
    // Mini-game storage adapters can return "" (or undefined) for a missing key.
    if (playerId == null || playerId === "") {
      playerId = this.createId();
      validatePlayerId(playerId);
      this.storage.setItem(this.key, playerId);
      if (this.storage.getItem(this.key) !== playerId)
        throw new Error("无法保存游客身份，请启用本地存储后重试。");
    } else validatePlayerId(playerId);
    // Missing cloud data creates a new save; never infer ownership of a shared device save.
    return { playerId };
  }
}

function guestId(): string {
  const cryptoApi = typeof globalThis !== "undefined" ? globalThis.crypto : undefined;
  const bytes = new Uint8Array(16);
  if (cryptoApi?.getRandomValues) cryptoApi.getRandomValues(bytes);
  else for (let i = 0; i < bytes.length; i++) bytes[i] = Math.floor(Math.random() * 256);
  return "guest_" + Array.from(bytes, byte => byte.toString(16).padStart(2, "0")).join("");
}
