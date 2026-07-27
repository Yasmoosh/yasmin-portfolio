// Post-build step for static hosting (GitHub Pages).
//
// `vite build` (TanStack Start, SPA mode) emits:
//   dist/client  -> the static site (index.html + hashed assets)
//   dist/server  -> a server bundle only used to prerender the shell (not deployed)
//
// This script flattens dist/client up to ./dist, drops the server bundle, and
// adds the files GitHub Pages needs:
//   - 404.html   : copy of index.html so client-side routes work on hard refresh
//   - .nojekyll  : stop GitHub from stripping files/folders that start with "_"
//   - CNAME      : carried over from the repo root for the custom domain
import { existsSync, copyFileSync, writeFileSync, renameSync, rmSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");
const client = join(dist, "client");
const tmp = join(root, ".dist-client-tmp");

if (!existsSync(client)) {
  throw new Error(`Expected build output at ${client}. Did "vite build" run first?`);
}

// Replace ./dist with the contents of ./dist/client.
rmSync(tmp, { recursive: true, force: true });
renameSync(client, tmp); // move client out from under dist
rmSync(dist, { recursive: true, force: true }); // drop dist (incl. the server bundle)
renameSync(tmp, dist); // client becomes dist

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
