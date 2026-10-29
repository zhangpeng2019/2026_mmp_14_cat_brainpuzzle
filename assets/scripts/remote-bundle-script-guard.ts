// @ts-nocheck
// Recovered from code-analysis/decrypted/assets/main/index.b186b.js; module chunks:///_virtual/remote-bundle-script-guard.ts
// Method bodies originate in this APK. TypeScript types and author formatting were not retained.
import { cclegacy as __rea_outer_n } from "cc";
import { assetManager as __rea_outer_t } from "cc";
let __recovered_export_0;
__recovered_export_0 = u, __rea_outer_n._RF.push({}, "c4e8aG3bS9Knowxe14NT2oY", "remote-bundle-script-guard", void 0);
const r = /^https?:\/\//,
  o = /^\w+:\/\/.*/,
  l = ["main", "internal", "resources"];
function u() {
  const e = __rea_outer_t.downloader,
    n = e.handlers.bundle;
  if (!n) return void console.error("[RemoteBundleScriptGuard] Bundle downloader is missing.");
  if (n.isRemoteBundleScriptBlocked) return;
  const u = function (u, s, c) {
    !function (e, n) {
      const t = i(e);
      if (l.indexOf(t) >= 0) return !1;
      if (r.test(e)) return !0;
      return n.indexOf(t) >= 0;
    }(u, e.remoteBundles) ? n(u, s, c) : function (e, n, r, l) {
      const u = i(e),
        s = function (e, n, t) {
          const r = function () {
            var e;
            const n = globalThis;
            return ((null == (e = n.jsb) || null == (e = e.fileUtils) || null == e.getWritablePath ? void 0 : e.getWritablePath()) ?? "").replace(/[/\\]+$/, "");
          }();
          if (o.test(e) || r.length > 0 && e.startsWith(r)) return e.replace(/\/+$/, "");
          return `${t}remote/${n}`.replace(/\/+$/, "");
        }(e, u, l.remoteServerAddress),
        c = n.version || l.bundleVers[u] || "",
        d = `${s}/cc.config.${c ? `${c}.` : ""}json`;
      n.__cacheBundleRoot__ = u, function (e) {
        const n = __rea_outer_t.cacheManager;
        if (null == n || !n.makeBundleFolder) return;
        n.makeBundleFolder(e);
      }(u);
      const a = l.handlers[".json"];
      if (!a) return void r(new Error(`[RemoteBundleScriptGuard] JSON downloader is missing for ${u}`), null);
      a(d, n, (e, n) => {
        if (e) return void r(e, null);
        const t = function (e) {
          if ("object" != typeof e || null === e) return null;
          return e;
        }(n);
        t && (t.base = `${s}/`, t.hasPreloadScript = !1), r(null, t);
      });
    }(u, s, c, e);
  };
  u.isRemoteBundleScriptBlocked = !0, e.handlers.bundle = u, console.log("[RemoteBundleScriptGuard] Remote bundle script downloads are disabled.");
}
function i(e) {
  const n = e.split("?")[0],
    t = n.split("/");
  return t[t.length - 1] || n;
}
u(), __rea_outer_n._RF.pop();
export { __recovered_export_0 as installRemoteBundleScriptGuard };
