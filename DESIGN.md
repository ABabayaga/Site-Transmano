---
name: Transmano
description: Road-freight/logistics landing page for Grupo Transmano — dispatch-panel confidence in caution yellow and alert red.
colors:
  caution-yellow: "#f5c518"
  caution-yellow-deep: "#e0b30f"
  alert-red: "#e11d2e"
  alert-red-deep: "#c8182a"
  ink: "#171717"
  panel-black: "#131313"
  panel-black-deep: "#0c0c0c"
  paper: "#fafafa"
  surface: "#fff"
  text-body: "#6b6375"
  text-heading: "#08060d"
  border: "#e5e4e7"
  amber-wash: "#fdf6e3"
  amber-ink: "#e0a000"
typography:
  display:
    fontFamily: "Anton, 'Segoe UI', sans-serif"
    fontSize: "64px"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.5px"
  headline:
    fontFamily: "system-ui, 'Segoe UI', Roboto, sans-serif"
    fontSize: "42px"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-1px"
  title:
    fontFamily: "system-ui, 'Segoe UI', Roboto, sans-serif"
    fontSize: "24px"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.5px"
  body:
    fontFamily: "system-ui, 'Segoe UI', Roboto, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "system-ui, 'Segoe UI', Roboto, sans-serif"
    fontSize: "13px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.3px"
rounded:
  pill: "9999px"
  md: "12px"
  lg: "16px"
  xl: "24px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  container: "1340px"
  full-bleed: "1440px"
components:
  button-primary:
    backgroundColor: "{colors.caution-yellow}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "{colors.caution-yellow-deep}"
  button-urgent:
    backgroundColor: "{colors.alert-red}"
    textColor: "#ffffff"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  button-urgent-hover:
    backgroundColor: "{colors.alert-red-deep}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.text-heading}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  badge:
    backgroundColor: "{colors.caution-yellow}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
  card-light:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xl}"
    padding: "24px"
  card-dark:
    backgroundColor: "rgba(255,255,255,0.05)"
    rounded: "{rounded.lg}"
    padding: "24px"
---

# Design System: Transmano

## Overview

**Creative North Star: "The Highway Control Room"**

Transmano's visual language is a public-facing dispatch panel: the confidence of a logistics command center where every truck is a tracked dot and every claim is backed by a live number. Caution yellow does the work of an operational signal — it marks the primary action, the badge that proves a stat, the icon on a monitored dashboard — while alert red is reserved for stakes and urgency: the word inside a headline that carries the risk, the button that starts a real-time trace, the icon on a warning callout. Anton in all-caps carries the one moment of physical, stenciled weight (the hero headline); everywhere else, a plain system sans stays out of the way so the numbers and operational copy read fast.

The system rejects soft marketing gloss: no illustration style, no rounded mascot iconography, no pastel palette. Panels are flat and dark where the site talks about the fleet and the operation (near-black backgrounds, hairline white borders, translucent white fills — like backlit control-room glass), and bright and light where it talks to the buyer making a decision (white/paper backgrounds, high-contrast black headlines). Cards are generously rounded (16–24px) which keeps the industrial palette from reading harsh, but every corner, badge, and CTA is a pill or a soft rectangle — never sharp, never skeuomorphic.

**Key Characteristics:**
- Caution-yellow CTAs and badges against near-black or paper-white grounds; alert-red reserved for stakes and urgent actions.
- One display moment (Anton, uppercase, hero H1 only); everything else in a fast, neutral system sans.
- Dark sections read as backlit control-room panels: flat, no shadows, depth from white-opacity fills and hairline borders.
- Light sections read as bright decision surfaces: white cards, soft ambient shadows, high-contrast black headlines.
- A recurring "kicker" glyph (three horizontal bars: solid–dashed–solid) precedes every section eyebrow label.

## Colors

Two functional accents on a black/white operational base — the palette reads as hazard-sign clarity, not brand decoration.

### Primary
- **Caution Yellow** (`#f5c518`): the "go" color. Primary CTA buttons, badges/tags, stat numbers on dark panels, section eyebrow labels on dark backgrounds, hover-underline accents on nav links, icons inside dark feature tiles.
- **Caution Yellow Deep** (`#e0b30f`): hover/active state for anything in Caution Yellow.

### Secondary
- **Alert Red** (`#e11d2e`): the "stakes" color. Emphasis words inside headlines (the risk being named), section eyebrow labels on light backgrounds, the urgent tracking-action button, warning/lock icons, alert accents.
- **Alert Red Deep** (`#c8182a`): hover/active state for anything in Alert Red.

### Neutral
- **Ink** (`#171717`): text color sitting on top of Caution Yellow surfaces (badges, primary buttons) — never white-on-yellow.
- **Panel Black** (`#131313`): dark section backgrounds (Header topbar, Footer, first Frota panel).
- **Panel Black Deep** (`#0c0c0c`): the darkest panel (Frota's fleet/monitoring section), paired with a low-opacity background photo.
- **Paper** (`#fafafa`): Hero section background.
- **Surface** (`#ffffff`): default page background and light card fill.
- **Text Body** (`#6b6375` light / `#9ca3af` dark-mode): body copy color, via `var(--text)`.
- **Text Heading** (`#08060d` light / `#f3f4f6` dark-mode): headline and label color, via `var(--text-h)`.
- **Border** (`#e5e4e7` light / `#2e303a` dark-mode): hairline dividers and input/button borders on light surfaces, via `var(--border)`.
- **Amber Wash** (`#fdf6e3`) / **Amber Ink** (`#e0a000`): the soft-alert callout background and icon color used inside segment cards — a quieter register than Alert Red, for cautionary context rather than a hard stop.

### Named Rules
**The Ink-on-Yellow Rule.** Caution Yellow surfaces always carry `#171717` text, never white — yellow is a light color and needs dark text to stay legible and on-brand.

**The One Red Word Rule.** Alert Red is used sparingly inside headlines — typically one phrase per H1/H2 that names the actual stake or risk — not as a general accent color splashed across a section.

## Typography

**Display Font:** Anton (with Segoe UI, sans-serif fallback) — loaded via Google Fonts, used exactly once in the current implementation: the Hero H1.
**Body Font:** system-ui (with Segoe UI, Roboto, sans-serif fallback) — every other heading, label, and paragraph in the site.

**Character:** A single condensed, industrial display face for the one moment that needs physical weight, paired with a fast, neutral system sans everywhere else so operational copy (stats, requirements lists, addresses) stays scannable rather than stylized.

### Hierarchy
- **Display** (Anton, 400, 64px / 38px mobile, line-height 0.98, tracking −0.5px, uppercase): Hero H1 only.
- **Headline** (system sans, 800/extrabold, 42px / 30px mobile, line-height 1.08, tracking −1px, uppercase): section H2s (Segmentos, Frota's two panels).
- **Title** (system sans, 800/extrabold, 24px, tracking −0.5px, uppercase): card-level H3s (segment card titles).
- **Body** (system sans, 400, 15–17px, line-height 145–150%): descriptive paragraphs; `var(--text)` color throughout.
- **Label** (system sans, 700/bold, 11–13.5px, tracking 0.2–0.3px, uppercase): nav links, eyebrow kickers, badges, button text, stat captions, footer column headers.

### Named Rules
**The One Display Moment Rule.** Anton is reserved for the Hero H1. Every other heading — however large — stays in the system sans at extrabold weight. Introducing Anton elsewhere would dilute its impact as the page's single dramatic beat.

## Layout

Two container widths coexist by design: `1440px` for the header/nav and hero (the widest full-bleed moments) and `1340px` for standard content sections (Segmentos, Frota, Footer). Every section is full-bleed at the outer element (`relative left-1/2 w-screen -translate-x-1/2`) and re-centers its content with `mx-auto max-w-[...]` — see CLAUDE.md's documented convention. The legacy `#root` container (`1126px`, centered, from the original Vite scaffold) is superseded by this pattern and no longer constrains real content.

Section padding is consistently `px-8 py-8–24` on desktop, collapsing to `px-5` under `860px` — this project's one custom breakpoint used throughout instead of Tailwind's default scale (`max-[1080px]`, `max-[900px]`, `max-[860px]`, `max-[640px]`). Two-column layouts (Hero's copy/widget split, Frota's features/stats split) collapse to a single column at `1080px`.

## Elevation & Depth

Flat with tonal layering, not drop shadows. Dark panels convey depth through white-opacity fills (`bg-white/5`) over hairline white-opacity borders (`border-white/10`), like backlit glass rather than stacked cards — no shadow is used inside dark sections. Light sections use soft, real drop shadows sparingly, only for elements that visually float above the page (the Hero tracking-widget card, the WhatsApp FAB) — never for ordinary content cards, which sit flat with a border instead.

### Shadow Vocabulary
- **Float** (`box-shadow: 0 20px 50px -12px rgba(0,0,0,0.25)`, `0.35` in the darker variant): the Hero tracking-widget card lifting off the paper background.
- **Lift-small** (`box-shadow: 0 4px 10px rgba(0,0,0,0.08)`): the active tab pill inside the tracking widget.
- **FAB** (`box-shadow: 0 8px 24px rgba(0,0,0,0.3)`): the fixed WhatsApp button.

### Named Rules
**The Flat-Panel Rule.** Dark sections never use drop shadows. Depth comes only from `white/5`–`white/10` fills and hairline borders.

## Shapes

Everything is soft and rounded — never sharp corners, never skeuomorphic bevels. Pills (`rounded-full`) dominate anything interactive or tag-like: buttons, badges, tab switches, the status dot, the WhatsApp FAB. Content containers use a generous 16–24px radius (`rounded-2xl` / `rounded-3xl`): segment images, stat tiles, the tracking-widget card, segment cards. Inputs and small icon tiles sit in between at 12px (`rounded-xl`).

## Components

### Buttons
- **Shape:** pill (`border-radius: 9999px`) for every button and link-styled CTA in the system; no exceptions.
- **Primary:** `background: #f5c518; color: #171717;` — bold, uppercase, tracked label text, `padding: 14px 24px` (varies slightly by context, e.g. `24px 22px` in Hero). Used for the main conversion action ("Solicitar cotação", "Cotação" nav CTA).
- **Urgent:** `background: #e11d2e; color: #fff;` — same shape/type treatment, reserved for the tracking widget's "Rastrear agora" action, i.e. an in-context action rather than the primary page CTA.
- **Ghost/Secondary:** transparent background, `border: 1px solid var(--border)`, `color: var(--text-h)`. Used for secondary actions ("Ver segmentos", "Área do cliente").
- **Hover:** Primary darkens to `#e0b30f`; Urgent darkens to `#c8182a`; Ghost's border darkens to `var(--text-h)`. All transitions are `transition-colors`, no scale/transform except the WhatsApp FAB (`hover:scale-105`).

### Badges / Chips
- **Style:** pill, `background: #f5c518`, `color: #171717`, bold uppercase label text, `padding: 8px 16px`. Used for the Hero "20 anos" badge and segment-card category tags overlaid on images.

### Cards / Containers
- **Light card** (segment cards): `border-radius: 24px` (`rounded-3xl`), `border: 1px solid var(--border)`, `background: #fff`, `padding: 24px`. No shadow — border-only depth.
- **Dark stat tile** (Frota stats): `border-radius: 16px` (`rounded-2xl`), `border: 1px solid rgba(255,255,255,0.1)`, `background: rgba(255,255,255,0.05)`, `backdrop-filter: blur(4px)`, `padding: 24px`.
- **Alert callout** (segment card "alerta" box): `border-radius: 16px`, `background: #fdf6e3`, no border, `padding: 16px 20px`, paired with a `#e0a000` warning icon — the system's one soft-cautionary surface, distinct from Alert Red.

### Inputs / Fields
- **Style:** `border-radius: 12px`, `border: 1px solid var(--border)`, `padding: 10px 14px`, text at 13.5px. Used only in the Hero tracking-widget mockup today.
- **Focus:** currently `focus:outline-none` with no replacement focus treatment defined — an observed gap, not a deliberate style choice; flag before shipping any new form.

### Navigation
- **Style:** uppercase, bold, 13.5px, tracked labels in `var(--text-h)`; hover fades to `#e0b30f` and reveals a 2px Caution Yellow underline that scales in from the left (`scale-x-0` → `scale-x-100`, 200ms). The topbar strip above the main nav is dark (`#131313`) with `white/85` text and `white/55` icons, giving a two-tier header: status/utility strip, then logo/nav/CTA row.

### Section Eyebrow ("Kicker")
- A small three-bar glyph (solid line, dashed line, solid line stacked vertically, 6px tall each) immediately precedes every section's uppercase label — Alert Red on light sections, Caution Yellow on dark sections. This is the system's signature repeating motif; reuse it verbatim for any new section rather than inventing a new eyebrow style.

## Do's and Don'ts

### Do:
- **Do** pair every Caution Yellow surface with `#171717` ink text, never white (The Ink-on-Yellow Rule).
- **Do** reuse the three-bar kicker glyph before any new section's eyebrow label.
- **Do** keep dark-section depth to opacity fills and hairline borders — no drop shadows on `#131313`/`#0c0c0c` backgrounds.
- **Do** keep every button and badge a pill; reserve smaller radii (12–24px) for containers only.
- **Do** limit Anton to the Hero H1; use extrabold system sans for every other heading, however large.

### Don't:
- **Don't** introduce a third accent color — the system's entire expressive range is Caution Yellow (go) and Alert Red (stakes) against black/white.
- **Don't** add drop shadows to ordinary light-section content cards; they're border-only by design (Flat-Panel spirit extends to light cards too — only genuinely floating elements like the tracking widget get a shadow).
- **Don't** treat the `source.unsplash.com` background photography in `Frota.tsx` as a real asset to imitate stylistically — per PRODUCT.md, it's a placeholder pending real fleet photography, not a confirmed "stock photo" visual direction.
- **Don't** ship a new form input without a real focus treatment; the current `focus:outline-none` with nothing replacing it is a known gap, not the intended pattern.
