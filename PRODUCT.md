# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary users are logistics/procurement decision-makers — operations managers, procurement leads, supply-chain leads — at companies that need to contract road freight in Brazil's Centro-Oeste and neighboring regions (Sudeste, Sul, Nordeste). The site's copy specifically targets two buyer situations in depth: food/grocery distribution (tight CD receiving-dock windows, cargo-integrity risk, cost of a stockout) and solar-panel/photovoltaic logistics (module damage that only surfaces after installation, vibration-sensitive handling). These read as the sharpest-defined audience segments; the general-freight services (FTL/LTL/regional distribution) address the same buyer type more broadly.

## Product Purpose

Grupo Transmano is a road-freight/logistics operator convincing prospective shipping customers to contract it as their carrier. The page exists to build trust in reliability and operational fit (especially for sensitive cargo categories) and to drive a quote request or tracking lookup. Success is a qualified lead (quote request, WhatsApp contact, or phone call) from a buyer evaluating carriers.

## Positioning

20 years operating in the Centro-Oeste market, with an owned fleet (not brokered/outsourced) of 40 vehicles under 5 years old, real-time satellite tracking, 24h monitoring, and segment-specific operational protocols for cargo types that punish generic handling (food/grocery, solar panels). The claim is predictability and accountability ("previsibilidade, não sorte") backed by direct operational ownership of the fleet, not a freight marketplace or broker.

## Operating Context

- Grupo Transmano is a holding of three sister companies, each with a distinct role: **Transmano** (road freight/logistics, owns the fleet), **Central Logística e Transportes** (reach/redistribution capillarity), **ALD Transportes e Locações** (operational support and complementary solutions). The Grupo section on the page exists to communicate this structure, not to sell a fourth, separate product.
- Headquartered in Campo Grande/MS, with a second base in São Paulo; states served: 12+, spanning Centro-Oeste, Sudeste, Sul, Nordeste.
- Tracking is integrated via **SSW** (a real third-party Brazilian TMS/freight-tracking system) — the Hero tracking widget is a static mockup today, intended to eventually query the live SSW system by Remetente/Destinatário/Pagador or by NF number.
- CSR/operational-culture content (Grupo section, "Responsabilidade além das estradas") covers blood-donation awareness (Junho Vermelho), driver health/rest protocols, and a stated real-partnership/communication protocol when shipments go wrong — these are factual programs the company runs, not marketing filler to be genericized away.

## Capabilities and Constraints

- **Cotacao.tsx (quote-request form)**: exists in the codebase but its import/usage is currently commented out in `App.tsx`. Confirmed status: **paused, will return** — not being removed. Do not delete it or treat its absence from the live page as final; it's expected to be re-enabled once wired to a real submission backend. The `#cotacao` anchor and CTAs referencing it should keep working toward this component, not be redirected elsewhere.
- **Hero tracking widget**: explicitly a static mockup in the source, not wired to any backend. Intended integration target is the SSW tracking API.
- No test suite is configured for this project.
- Terminology to preserve exactly: "carga fechada" (FTL), "transporte fracionado" (LTL/cross-docking), "distribuição nas bases" (regional distribution from operational bases), "ruptura de gôndola" (shelf stockout — a stated consequence of food-logistics failure).
- No formal certifications (ISO, SASSMAQ, etc.) are claimed anywhere in current copy — don't introduce certification claims without new evidence.

## Brand Commitments

- Name: Grupo Transmano (parent), with Transmano as the road-freight brand this site represents.
- Logo assets: `Logo-Transmano.png` (color, light backgrounds), `Logo-Transmano-branca.png` (white/reverse, dark backgrounds).
- Voice: institutional but assertive/confident, not corporate-dry. Short, punchy, uppercase-emphasis headlines that state a stake or consequence directly (e.g., "Chegar no horário não é diferencial. É o mínimo que a sua operação merece."), mixed with occasional colloquial register ("a gente conhece a sua"). Copy leans on real operational jargon and stakes (CD windows, vibration protection, contractual fines) aimed at buyers who know the vocabulary — not simplified consumer marketing language.
- Brand colors already established (see project CLAUDE.md): `#f5c518` (yellow, primary CTA), `#e11d2e` (red, secondary accent), `#131313` (near-black, dark sections).
- Instagram: @transmanotransportes.

## Evidence on Hand

- Real, current stats (source of truth is `Frota.tsx`'s `frotaStats`): 20 years in the sector, 40 owned vehicles, 12+ Brazilian states served, 2 base states (MS and SP). Fleet is described as new/semi-new, up to 5 years old, with vehicle types "Carretas LS, Toco, Truck, 3/4 e VUC" and body types "aberta, graneleiro, baú, container e sider."
- Real address (Footer.tsx): Av. Zilá Correa Machado, 2488, Km 8.8, Jardim Itamaracá, Campo Grande/MS, CEP 79062-000. Real CNPJ: 34.229.529/0001-01.
- **Known placeholders — not final, future work should not treat as real content:**
  - Phone number `(67) 0000-0000` / `tel:+556700000000`, reused across Header, Footer, and the WhatsApp link (`wa.me/556700000000`). A real number is pending.
  - `Frota.tsx`'s background imagery currently pulls random stock photos from `source.unsplash.com` rather than real fleet/operations photography. Real photography is pending; these should be replaced, not treated as an intentional stylistic choice.
- Segment/service photography that does appear to be real production assets (not placeholders): `quem.jpg`, `segali.jpg`, `segsol.jpg` (note: referenced without a leading slash in `Segmentos.tsx`, worth checking as a possible path bug separate from product-truth), `cargafe.jpg`, `crossd.jpg`, `distr.jpg`.
- No testimonials, case studies, press mentions, or third-party proof points exist anywhere in current copy — do not fabricate any.

## Product Principles

1. Reliability is the product, not a feature: every claim should ladder up to predictability/accountability (owned fleet, real-time tracking, 24h monitoring, dedicated operational ownership) rather than generic "fast and cheap" freight positioning.
2. Speak to buyers who already know the domain: preserve specific operational jargon and named consequences (stockouts, vibration damage, contractual fines) rather than smoothing copy into generic reassurance.
3. The three-company Grupo structure is a trust signal (scale, redundancy, complementary capabilities) — keep it legible as three distinct companies, not folded into one undifferentiated "Transmano" brand.
4. Segment-specific credibility (food, solar) is a differentiator versus a generalist carrier — don't dilute the segment pages into one-size-fits-all freight copy.
5. Don't let placeholders (phone number, stock fleet photos) read as finished — flag or visually treat them as pending rather than polishing them as if final.

## Accessibility & Inclusion

No formal accessibility requirement has been established by the user. Current implementation has a mix worth preserving/fixing rather than a required standard: decorative icons correctly use `role="presentation" aria-hidden="true"`; meaningful images generally have descriptive `alt` text; social/contact icon links have `aria-label`s. Known gaps observed in code (not yet confirmed as required to fix): `Cotacao.tsx` form fields don't associate `<label>` to input via `htmlFor`/`id`; no skip-to-content link in `Header.tsx`.
