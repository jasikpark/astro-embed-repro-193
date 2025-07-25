Repro for https://github.com/delucis/astro-embed/issues/193, building with `pnpm build` should throw a stacktrace.

It seems that using zod as a direct dependency is the culprit.

```
❯ pnpm build

> @ build astro-embed-repro-193
> astro build

12:33:03 [content] Syncing content
12:33:03 [content] Synced content
12:33:03 [types] Generated 22ms
12:33:03 [build] output: "static"
12:33:03 [build] mode: "static"
12:33:03 [build] directory: astro-embed-repro-193/dist/
12:33:03 [build] Collecting build info...
12:33:03 [build] ✓ Completed in 35ms.
12:33:03 [build] Building static entrypoints...
12:33:04 [vite] ✓ built in 1.38s
12:33:04 [build] ✓ Completed in 1.40s.

 building client (vite)
12:33:04 [vite] ✓ 3 modules transformed.
12:33:04 [vite] ✓ built in 18ms

 generating static routes
Cannot read properties of undefined (reading 'object')
  Location:
    astro-embed-repro-193/node_modules/.pnpm/astro@5.12.3_@types+node@24.1.0_rollup@4.45.1_typescript@5.8.3/node_modules/astro/dist/core/build/pipeline.js:221:15
  Stack trace:
    at file:///astro-embed-repro-193/dist/pages/index.astro.mjs?time=1753464784447:13126:8
    at file:///astro-embed-repro-193/dist/pages/index.astro.mjs?time=1753464784447:29877:16
    at file:///astro-embed-repro-193/dist/pages/index.astro.mjs?time=1753464784447:58867:21
    at file:///astro-embed-repro-193/dist/pages/index.astro.mjs?time=1753464784447:58914:19
    at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:665:26)
 ELIFECYCLE  Command failed with exit code 1.
```
