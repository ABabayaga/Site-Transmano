Transmano marketing site: single-page React 19 + TS + Vite + Tailwind v4 landing page for a Centro-Oeste Brazilian road-freight company. All copy is Portuguese. No routing/backend/state lib.

Project has a thorough `CLAUDE.md` at repo root — read it directly for architecture, conventions, and integration notes; do not duplicate its content here.

`src/main.tsx` → `src/App.tsx` renders sections in order: Header → Hero → QuemSomos → Segmentos → ServicosPrestados → Frota → Grupo → Footer. Each `src/components/*.tsx` is a self-contained default-exported section; no registry beyond `App.tsx` imports.

`Cotacao.tsx` exists but is commented out in `App.tsx` (mid-removal/paused) — confirm with user before touching.

Further memories: `mem:tech_stack`, `mem:suggested_commands`, `mem:conventions`, `mem:task_completion`.