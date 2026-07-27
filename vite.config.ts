// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Render as a client-side SPA: the build prerenders a static HTML shell that
    // hydrates on the client. No SSR server is needed, so this can be hosted on
    // static hosts like GitHub Pages. Emit the shell as index.html (instead of
    // the default _shell.html) so it works as the site entry point.
    spa: {
      enabled: true,
      prerender: { outputPath: "/index" },
    },
  },
  // Skip the Nitro server bundle entirely. Without it, TanStack Start uses its
  // native Vite output layout (dist/client + dist/server), which the SPA shell
  // prerenderer needs. A postbuild step lifts dist/client up to ./dist.
  nitro: false,
});
