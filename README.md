# ocbc-design-system

OCBC Indonesia's visual identity as a React component library: color and type tokens, the logo mark, and the small set of layout primitives used across the brand's social content (Instagram carousels, LinkedIn cards, Reels).

This package is the code counterpart to the brand guidelines skill under `brand-guidelines/` (voice, copywriting rules, layout specs). That skill documents the rules in prose; this package makes the visual rules buildable.

**What's actually deployed:** the repo root's `index.html` is a separate, self-contained static deliverable (an OCBC social performance audit report), and it's what Vercel serves. `vercel.json` is configured for a plain static deploy (no framework, no install/build step, output directory is the repo root), so it ignores the component library's build tooling entirely.

The component library and its own demo live alongside it, but aren't the deploy target right now:

- **The component library** (`src/`) is the publishable package. `npm run build:lib` (tsup) bundles it to `lib-dist/`, which is what `package.json`'s `main`/`types`/`exports` point to for anyone doing `npm install ocbc-design-system`.
- **A Vite demo of the library** (`site/`, `vite.config.ts`) renders the components live (the worked Dana Darurat carousel example). `npm run build` (Vite) builds it to `dist/`. It's not currently wired up to the Vercel deploy since the audit report occupies the `index.html` slot at repo root; if you want the demo live too, it'll need its own path or its own Vercel project.

## Provenance, read before shipping anything customer-facing

The logo mark (`<Logo />`) is a reference-quality vector traced from a public source, not OCBC's own production master (no public OCBC brand-kit exists as of this writing). The color tokens include a small, documented disagreement between the value extracted from that logo file (`#ED1C24`) and the Pantone 485 C conversion (`#DA291C`); only OCBC's internal brand book resolves which one their print process actually targets. Treat this package as a working design/dev tool, not a compliance-final brand asset, until swapped for OCBC's own files ahead of print or paid media.

## Install

```sh
npm install ocbc-design-system
```

```tsx
import { Logo, Heading, Text, Tag, Icon, Button, SlideCard } from "ocbc-design-system";
```

Styles are bundled as CSS custom properties plus per-component classes; importing the package's entry point pulls in `ocbc-design-system/styles.css` automatically in bundlers that support package `exports` + CSS side effects (Vite, Next, most modern setups). If your bundler doesn't pick it up automatically, import it explicitly:

```tsx
import "ocbc-design-system/styles.css";
```

## Components

| Component | What it's for |
|---|---|
| `Logo` | The OCBC wordmark. `variant="red" \| "white" \| "black" \| "current"` controls fill via `currentColor`, no separate light/dark asset files needed. |
| `Heading` | Type hierarchy, `level={1\|2\|3}` (hero statement / section head / subhead). |
| `Text` | Body and caption copy. `tone="default" \| "muted" \| "inverse"`. |
| `Tag` | Small bordered label, e.g. a segment marker like "NYALA · FINANCIAL FITNESS". |
| `Button` | The one CTA pill shape OCBC social content uses. `variant="primary" \| "onRed"`. |
| `Icon` | Six generic financial-concept icons (`savings`, `growth`, `protection`, `wallet`, `goal`, `partnership`) in the brand's line style. Original line-art, not from any existing icon library. |
| `SlideCard` | The layout shell behind a carousel/card slide: `tone` (background), optional corner `logo`, optional `page`/`total` indicator. Compose the above components as its children. |

## Example: a carousel slide

```tsx
import { SlideCard, Tag, Heading, Text } from "ocbc-design-system";

function CoverSlide() {
  return (
    <SlideCard tone="dark" logo="hero" page={1} total={7} carouselAspect>
      <Tag>NYALA · FINANCIAL FITNESS</Tag>
      <Heading level={1}>Dana Darurat Kamu Belum Tentu Cukup.</Heading>
      <Text tone="muted">Cara hitung targetnya yang benar, bukan angka asal-asalan.</Text>
    </SlideCard>
  );
}
```

See `examples/DanaDaruratCarousel.tsx` for all seven slides of a real worked carousel, composed entirely from these components, matching the static PNGs shipped in the brand-os skill's `examples/dana-darurat-carousel/`.

## Two segments, never blended

OCBC Indonesia's content splits into **NYALA** (individual Financial Fitness) and **Nyala Bisnis** (entrepreneur/UMKM). This package doesn't encode that split in components (it's a content decision, not a visual one), but it's the first thing to get right when composing a new slide. See the brand-os skill's `references/01_OCBC_BRAND_DNA_AND_VOICE.md` for the full definitions.

## Build

```sh
npm install
npm run dev          # Vite dev server for the demo site
npm run build        # Vite production build of the demo site → dist/
npm run build:lib    # tsup build of the component library → lib-dist/
```
