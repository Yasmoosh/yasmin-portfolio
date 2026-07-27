// Post-build step for static hosting (GitHub Pages).
//
// `vite build` (TanStack Start, SPA mode) emits:
//   dist/client  -> the static site (index.html + hashed assets)
//   dist/server  -> a server bundle only used to prerender the shell (not deployed)
//
// This script flattens dist/client up into ./dist, drops the server bundle, and
// adds the files GitHub Pages needs:
//   - 404.html   : copy of index.html so client-side routes work on hard refresh
//   - .nojekyll  : stop GitHub from stripping files/folders that start with "_"
//   - CNAME      : carried over from the repo root for the custom domain
//
// It deliberately never deletes the ./dist directory itself (only its contents),
// because on Windows an editor/file-watcher can hold a handle on the folder and
// make removing the root fail with EPERM.
import { existsSync, copyFileSync, writeFileSync, renameSync, rmSync, readdirSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");
const client = join(dist, "client");
const server = join(dist, "server");

if (!existsSync(client)) {
  throw new Error(`Expected build output at ${client}. Did "vite build" run first?`);
}

// Retry helper: Windows file locks (editor/indexer) can make fs ops fail
// transiently with EPERM/EBUSY. A couple of short synchronous retries clears it.
function withRetry(fn) {
  for (let attempt = 0; ; attempt++) {
    try {
      return fn();
    } catch (err) {
      if (attempt >= 5 || !["EPERM", "EBUSY", "ENOTEMPTY"].includes(err.code)) throw err;
      const until = Date.now() + 100;
      while (Date.now() < until) {} // brief synchronous back-off
    }
  }
}

// Move each top-level entry of dist/client up into dist/, replacing any existing.
for (const name of readdirSync(client)) {
  const to = join(dist, name);
  withRetry(() => rmSync(to, { recursive: true, force: true }));
  withRetry(() => renameSync(join(client, name), to));
}

// Drop the now-empty client dir and the (undeployed) server bundle.
withRetry(() => rmSync(client, { recursive: true, force: true }));
withRetry(() => rmSync(server, { recursive: true, force: true }));

const indexHtml = join(dist, "index.html");
if (!existsSync(indexHtml)) {
  throw new Error(`Missing ${indexHtml} after build — SPA shell was not prerendered.`);
}

// SPA fallback: unknown paths (e.g. /about on refresh) get index.html and let
// the client router take over.
copyFileSync(indexHtml, join(dist, "404.html"));

writeFileSync(join(dist, ".nojekyll"), "");

const cname = join(root, "CNAME");
if (existsSync(cname)) {
  copyFileSync(cname, join(dist, "CNAME"));
}

console.log("postbuild: dist/ is ready for GitHub Pages");
