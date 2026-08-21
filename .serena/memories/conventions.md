Full detail lives in repo-root `CLAUDE.md`; key non-obvious points:

- **Full-bleed sections**: `relative left-1/2 w-screen -translate-x-1/2` on outer element to escape `#root`'s centered 1126px max-width, then `mx-auto max-w-[1440px]` to re-center inner content (see `Header.tsx`, `Hero.tsx`). Required for any new full-width section.
- **Icons**: single sprite `public/icons.svg`, referenced `<use href="/icons.svg#<id>">`. Each component defines its own local `Icon({ id, className })` helper rather than a shared import — intentional repeated pattern, keep following unless asked to consolidate.
- **Styling**: Tailwind arbitrary values (`text-[13px]`, `bg-[#f5c518]`) over default scale, to hit exact design specs. Responsive: `max-[Npx]:` variants instead of `sm:`/`md:`.
- **Data-driven lists**: repeated UI (nav links, stats, cards) = const array above component + `.map()`, not hand-duplicated JSX (see `navLinks` in Header.tsx).
- **Brand colors** (ad hoc arbitrary values, not yet tokenized): `#f5c518` yellow/CTA, `#e11d2e` red/accent, `#131313` near-black/dark sections.
- **Design tokens**: actual CSS custom properties (`--text`, `--text-h`, `--bg`, `--border`, etc.) live in `src/index.css` with light/dark via `prefers-color-scheme`; components use `var(--text-h)` inside arbitrary Tailwind values.
- `src/App.css` is unused Vite template boilerplate — ignore as a styling reference.
- Nav links / section anchors are slugified label text; keep section `id`s in `App.tsx` components in sync with `navLinks` in `Header.tsx` when renaming headings.
- Animation: `src/hooks/useScrollReveal.ts` (GSAP+ScrollTrigger) is the reusable scroll-entrance-animation hook, used by Grupo/Frota/QuemSomos/Segmentos/ServicosPrestados — prefer it over new GSAP timelines. `Threads.tsx` (OGL/WebGL line background, used only in Hero) is a self-contained black-box effect, not a pattern to replicate.
- `Hero.tsx`'s "Rastreie sua carga" tracking widget is a static mockup, explicitly commented as such — not wired to a backend (intended SSW tracking API integration).