# 423 Foundations Design System

The design system behind **423** (FourTwoThree) — a carbon & sustainability intelligence platform that banks embed for their business customers. The system is **white-labellable**: one set of components and foundations, re-skinned per host bank by switching a single `data-brand` attribute.

> **Brand context.** 423 builds the software that lets a bank's SME customers measure, understand and reduce their carbon footprint — "Map My Business", footprint summaries, emissions by scope, reduction opportunities, and reporting/compliance (e.g. PCAF). The product ships under the bank's own brand, so the foundations are engineered around a swappable primary colour while neutrals, type, spacing and components stay constant.

## Brands in scope

| Brand | `data-brand` | Primary | Notes |
| --- | --- | --- | --- |
| **423** (house) | *(default)* | Electric blue `#1F51FF` | The 423 product brand |
| **NatWest** | `natwest` | Purple `#5E10B1` | UK bank — drop v1 host |
| **NAB** | `nab` | Red `#ED0000` | National Australia Bank |
| **BNZ** | *(logo only)* | Navy `#002F6B` | Bank of New Zealand |

Set the host brand on a root element: `<html data-brand="natwest">`. Everything else cascades. Light mode only for v1 (dark-mode tokens are a fast-follow).

## Sources

- **Figma:** "423 Foundations Toolkit.fig" — pages: Welcome, Colour, Typography, Spacing, Layout Grids, Icons-24, Logos, Universal Shell, Top-nav Shell, Sidebar Shell, Overview/Footprint Summary, Map My Business (Kanban), PCAF, plus a full shadcn-derived component library (Accordion → Wizard).
- Tokens were extracted from the file's Figma Variables (3-tier: `ref` → `sys` → `com`) and distilled into the curated token set in `tokens/`.
- Iconography: **Lucide** (open-source) — confirmed in the file's own README.

---

## CONTENT FUNDAMENTALS

**Voice.** Plain, supportive, and credible. The product turns an intimidating, technical subject (carbon accounting) into something an SME owner can act on. Copy is calm and concrete, never preachy or alarmist about climate.

- **Person.** Second person, possessive framing — the nav is **"My Business"**, **"My Footprint"**, **"My Home"**. The user owns their data; the product is a guide, not an authority lecturing them.
- **Tone.** Matter-of-fact and encouraging. States a number, gives it context, offers a next step. e.g. a hero stat reads **"1,433 tCO₂e"** with the qualifier **"Above benchmark · 70 tCO₂e"** and a clear CTA **"Add data"**.
- **Casing.** Sentence case everywhere — headings, buttons, menu items ("Add data", "Reporting and Planning", "Map my business"). No Title Case, no ALL-CAPS except the small overline/eyebrow label style.
- **Numbers & units.** Numbers are the hero. Always paired with a unit (**tCO₂e**, **%**, **kWh**) and grouped with thousands separators. Rendered in a tabular face so columns align. Deltas are signed and coloured (↑ red = more emissions/worse, ↓ green = reduction/better).
- **Buttons.** Verb-first and short: "Add data", "Get started", "View details", "Connect", "Finish". Wizards use "Back" / "Next" / "Finish".
- **Empty states.** Frame the gap as an opportunity, not an error: "Add data" rather than "No data found".
- **Emoji.** Not used in product UI. Communicate status with icons + colour.
- ```
  Abbreviations. Domain terms are used confidently (Scope 1/2/3, tCO₂e, PCAF, benchmark) — the audience is a business owner, and the product educates inline rather than dumbing the language down.
  ```

**Micro-examples**

- Stat card: `Total` · `1,433 tCO₂e` · `Above benchmark` `70 tCO₂e` ↗
- Section title: "Your footprint at a glance"
- Nav: Overview · My Business · My Footprint · Opportunities · Reporting and Planning · Settings

---

## VISUAL FOUNDATIONS

**Overall feel.** Crisp, data-forward fintech. Lots of white space, restrained colour, sharp corners on interactive elements and softer corners on containers. The brand colour is used sparingly as an accent — most of the canvas is neutral so the data and the host bank's identity lead.

- **Colour.** A single brand **primary** ramp (swappable per bank) plus a large **neutral** graphite scale that does the heavy lifting for text, borders and chrome. Supporting families: warm **secondary** (stone), **tertiary** (amber) for energy/data highlights, and full **semantic** ramps (success/warning/ destructive/info). Backgrounds are flat — **no gradients in UI** (the only gradient is inside the brand mark itself). Imagery, when present, is photographic and natural-toned (buildings, vehicles, energy) — never illustrated clip-art.
- **Type.** Four roles, four faces:
  - **Trench Rounded** (brand display) — oversized hero numerals & marketing only.
  - **Cabinet Grotesk** (heading) — section and card titles; tight tracking, bold.
  - **Figtree** (body/label) — all UI copy, labels, paragraphs.
  - **Inter** (system) — dense data, tables, tabular numerals. Headings are tightly tracked (−0.018em); display is tighter still (−0.025em).

  > **Font caveat.** **Trench Rounded** is commercial with no free web host — no file is bundled and no substitute is used, so display numerals fall back to `system-ui` until you upload the licensed web files (add an `@font-face` in `tokens/fonts.css`). Cabinet Grotesk (Fontshare), Figtree, Inter and Geist Mono (Google) are exact and load from CDN. NatWest's proprietary **RN House Sans** is likewise not bundled (falls back to Figtree).
- **Spacing.** Strict **4px grid**. Component padding clusters at 8/12/16; page gutters at 24/32. Generous breathing room between cards.
- **Corner radii.** Deliberately split: **interactive controls are sharp** (buttons `4px`, inputs `6px`) while **containers are soft** (cards `12–16px`, modals `16–24px`). Chips/avatars are fully round. This contrast is a signature of the system — sharp buttons against rounded cards.
- **Borders.** Hairline neutral borders (`1px`) define most surfaces; the system leans on borders + subtle shadow rather than heavy elevation. Border colours step neutral-200 → 300 → 400 by emphasis.
- **Shadows.** Soft, neutral, low-spread — tinted with the near-black neutral (`rgba(16,16,26,…)`), never coloured. Cards rest at `sm`/`md`; popovers and dialogs at `lg`/`xl`. No glow effects.
- **Focus.** A 2px brand ring with a white offset (`--shadow-focus`) on every interactive element — accessibility is first-class.
- **Buttons.** Variants: **Primary** (near-black neutral fill), **Tertiary** (brand-colour fill), **Secondary** (white + border), **Outline** (brand border), **Ghost**, **Destructive** (strong red / muted red). Sizes: Mini, Small, Regular, Large. States: default / hover (darken) / focus (ring) / disabled (reduced-contrast, no opacity tricks).
- **Hover / press.** Hover = step one ramp darker (or an 8% dark overlay on ghost). Press = one step darker again. **No scale/bounce** on buttons; motion is reserved for entrances and disclosure.
- **Motion.** Quick and functional. `120–320ms`, standard ease `cubic-bezier(0.2,0,0,1)`. Fades and slides; no springy bounces. Respects `prefers-reduced-motion`.
- **Transparency & blur.** Used only for scrims (`rgba(0,0,0,0.5)` behind dialogs) and subtle hover overlays. No frosted-glass everywhere.
- **Layout.** App shell = dark or light left **sidebar** (workspace switcher on top, sections below) + a **top bar** with breadcrumb, global search and avatar. Content is a responsive card grid on a neutral-100 canvas.

---

## ICONOGRAPHY

- **Library:** **Lucide** (open-source, MIT) at a **24px** base grid, \~`1.75–2px` stroke, rounded caps/joins. This is confirmed by the Figma file's own README: *"currently using open-source Lucide icons"* (with NatWest-specific icons noted as a possible future fast-follow). Lucide is loaded from CDN — see `assets/icons.md`.
- **Usage.** Line icons by default; filled variants exist for status (`circle-check-filled`, `circle-alert-filled`) and emphasis. Icons inherit `currentColor` so they pick up the surrounding text/semantic colour.
- **Domain icons.** The footprint product leans heavily on Lucide's transport, building and energy glyphs — `car`, `bus`, `bike`, `truck`, `plane`, `building`, `building-2`, `factory`, `bolt`/`zap`, `battery-charging`, `chart-bar`, `trending-up/down`, `leaf`. Use these for emission categories.
- **Brand marks** (in `assets/logos/`): the 423 mark, plus host-bank wordmarks (NatWest, NAB, BNZ) and integration logos (Xero). See logo notes below.
- **Emoji / unicode:** never used as iconography in product UI.

> **Logo caveat.** The 423 brand mark in Figma is a flattened 452-fragment vector that can't be extracted as clean SVG. `assets/logos/423-icon.svg` is a faithful **recreation** (blue disc + white globe-wave) — please replace it and supply the official 423 wordmark file. NatWest/NAB/BNZ/Xero marks are the file's real SVGs.

---

## INDEX / MANIFEST

**Root**

- `styles.css` — global entry point (import manifest; link this one file).
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skills front-matter for use in Claude Code.

**`tokens/`** (each `@import`ed by `styles.css`)

- `fonts.css` — webfont loading + substitution notes.
- `colors.css` — primitive ramps (primary, neutral, secondary, tertiary, semantic, opacity).
- `brand-modes.css` — `[data-brand]` overrides of the primary ramp (NAB, NatWest).
- `semantic.css` — role aliases (`--text-*`, `--surface-*`, `--border-*`, `--icon-*`, charts).
- `typography.css` — families, sizes, weights, leading, tracking.
- `spacing.css` — 4px spacing scale + breakpoints.
- `radius.css` — radii, elevation/shadows, motion.
- `base.css` — element defaults + `.ds-*` type-style helpers.

**`guidelines/`** — foundation specimen cards (Design System tab): colours, type, spacing, radius, shadows, brand.

**`components/`** — reusable React primitives (see each `*.prompt.md`): `core/` — Button, IconButton, Badge, Tag, StatusIndicator; `forms/` — Input, Select, Checkbox, Switch; `surfaces/` — Card, StatCard, Alert; `navigation/` — Tabs, Avatar.

**`ui_kits/footprint-platform/`** — high-fidelity, click-through recreation of the 423 carbon platform (app shell, footprint overview dashboard, Map My Business kanban). `index.html` is the interactive demo.

**`assets/`** — `logos/` (423 mark, partner banks, Xero), `icons.md` (Lucide usage).
