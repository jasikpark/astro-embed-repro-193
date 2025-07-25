Repro for https://github.com/delucis/astro-embed/issues/193, building with `pnpm build` should throw a stacktrace.

It seems that using zod as a direct dependency is the culprit.
