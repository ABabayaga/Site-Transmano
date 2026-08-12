# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page marketing site for **Transmano** (a Centro-Oeste Brazilian road freight/logistics company), built with React 19 + TypeScript + Vite + Tailwind CSS v4. All copy is in Portuguese. There is no routing, no backend, and no state management library — it's one static landing page assembled from section components.

## Commands

```bash
npm run dev       # start Vite dev server with HMR
npm run build     # tsc -b (project-references typecheck) then vite build
npm run lint      # eslint .
npm run preview   # preview the production build locally
```

There is no test suite configured.

## Architecture

`src/main.tsx` mounts `<App />`. `src/App.tsx` renders one section component per landing-page section, in page order, with no props or shared state:

```
Header → Hero → QuemSomos → Segmentos → ServicosPrestados → Frota → Grupo → Cotacao → Footer
```

Each file in `src/components/` is a self-contained, default-exported section component. To add/reorder/remove a page section, edit the component and its import/usage in `App.tsx` — there's no registry or config beyond that.

### Component conventions

- **Full-bleed sections**: content sections that need to break out of `#root`'s centered `1126px` max-width use `relative left-1/2 w-screen -translate-x-1/2` on the outer element, then re-center inner content with `mx-auto max-w-[1440px]`. Follow this pattern for any new full-width section (see `Header.tsx`, `Hero.tsx`).
- **Icons**: SVGs live in one sprite at `public/icons.svg`, referenced via `<use href="/icons.svg#<id>">`. Each component that needs icons defines its own local `Icon({ id, className })` helper rather than importing a shared one — this is a repeated pattern, not an oversight; keep following it unless asked to consolidate.
- **Styling**: Tailwind utility classes inline, almost always with arbitrary values (`text-[13px]`, `bg-[#f5c518]`) rather than Tailwind's default scale, to match exact design specs. Responsive overrides use `max-[Npx]:` variants (e.g. `max-[860px]:px-5`) instead of Tailwind's default `sm:`/`md:` breakpoints — match this convention for new responsive styles.
- **Data-driven lists**: repeated UI (nav links, stats, tabs, cards) is defined as a small const array above the component and rendered with `.map()`, not hand-duplicated JSX (see `navLinks` in `Header.tsx`, `stats` in `Hero.tsx`).
- **Brand colors** used ad hoc as arbitrary Tailwind values (not yet extracted into CSS variables/theme): `#f5c518` (yellow, primary CTA), `#e11d2e` (red, secondary accent), `#131313` (near-black, dark sections).

### CSS

- `src/index.css` defines the actual design tokens as CSS custom properties (`--text`, `--text-h`, `--bg`, `--border`, etc.) with light/dark variants via `prefers-color-scheme`, plus `@import 'tailwindcss'`. Components reference these via `var(--text-h)` etc. inside arbitrary Tailwind values.
- `src/App.css` is unmodified boilerplate left over from the Vite React template (`.counter`, `.hero .base/.framework/.vite` spinning-logo classes) — none of it is used by the current markup. Don't treat it as a source of active styling conventions.
- `#root` in `index.css` still has the template's constrained/centered layout (`width: 1126px`, `border-inline`, `text-align: center`); full-bleed sections deliberately escape this via the pattern described above.

### Integration notes

- `Hero.tsx`'s tracking widget is a **static mockup** (explicitly commented as such in the source) — the "Rastreie sua carga" form is not wired to any backend yet. It's intended to integrate with an SSW tracking API.
- Nav links and section anchors (`#quem-somos`, `#segmentos`, `#cotacao`, etc.) are derived by slugifying label text; keep section `id`s in sync with `Header.tsx`'s `navLinks` if you rename a section heading.
