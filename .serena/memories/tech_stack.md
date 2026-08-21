React 19.2, TypeScript ~6.0, Vite 8, Tailwind CSS v4 (via `@tailwindcss/vite`, `@import 'tailwindcss'` in `src/index.css` — no tailwind.config.js). ESLint 10 flat config (`eslint.config.js`) with typescript-eslint, react-hooks, react-refresh plugins. No test suite/runner configured.

Extra libs beyond the Vite React template: `gsap` (+ ScrollTrigger, used only via `useScrollReveal` hook) and `ogl` (WebGL, used only by `Threads.tsx` background effect in Hero).

`tsc -b` uses TS project references (`tsconfig.app.json` / `tsconfig.node.json`), invoked as part of `npm run build`.