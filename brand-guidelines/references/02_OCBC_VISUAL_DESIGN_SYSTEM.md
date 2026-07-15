# OCBC Indonesia Visual Design System

**Module 2 of 3: OCBC Indonesia Social Media Operating System**
**Scope:** Color, typography, platform layout rules, image-generation prompting.
**Use this file to answer:** "Does this look like OCBC Indonesia?"

> **Verification note:** the primary red and typeface below are sourced from OCBC's own public brand materials (cited in Section 5), not estimated. Secondary neutrals, data accents, and exact spacing/grid figures are working values built to sit correctly alongside that verified core. Confirm those against OCBC's internal brand PDF before a print run or paid media buy, since a document like this won't track a corporate brand book's point-release updates in real time.

---

## 1. Color Palette

| Role | Name | Hex | Usage |
|---|---|---|---|
| Primary | OCBC Red | `#ED1C24` (Pantone 485 C conversions land near `#DA291C`) | Logo, primary CTAs, key stat callouts, accent bars. Never as a full-bleed background behind long body text: reserve for headlines and highlights. `#ED1C24` is extracted directly from the current logo vector file (see `assets/logo/SOURCE_AND_LICENSE.md`), which is probably closer to production reality than a generic Pantone-to-hex table. The two values disagree slightly, and only OCBC's internal brand book resolves which one their print process actually targets. |
| Primary (deep variant) | OCBC Red Deep | `#A31D13` | Gradients, pressed/active states, shadow tint under the primary red. |
| Anchor | Deep Charcoal | `#1A1A1A` | Primary text on white/light backgrounds, dark-mode carousel backgrounds. |
| Anchor | Near-Black | `#0D0D0D` | Reels/Stories backgrounds, high-contrast dark templates. |
| Neutral | Slate Gray | `#58595B` | Secondary text, captions, metadata labels. |
| Neutral | Cool Gray | `#939598` | Dividers, disabled states, chart gridlines. |
| Base | Paper White | `#FFFFFF` | Primary background, negative space, text-on-dark. |
| Base | Warm Off-White | `#F5F4F2` | Card backgrounds inside carousels, alternate panel fills. |
| Data Accent | Growth Green | `#1E7A46` | Positive figures only (returns, growth %, "up" indicators). Do not use as a decorative color. |
| Data Accent | Alert Amber | `#B8860B` | Risk flags, disclaimers, "read this before you invest" markers. |

**Color logic:** red is a signal, not a wash. It marks the one thing on a slide the eye should land on first: a number, a CTA, a logo mark. Charcoal and white carry the reading experience. Green and amber are reserved exclusively for financial data direction (gains/risk) so they retain meaning; never use them decoratively.

**Logo mark, for context when placing it:** the OCBC mark is a stylized Chinese junk ship sailing inside a bold "O," honoring the forefathers who crossed from China to Southeast Asia to build the bank's original business: the three sail lines read as purposeful forward motion. The current version dates to 3 July 2023 (sixth generation of the mark since 1932; Indonesia adopted it under the OCBC name on 14 November 2023). Never recolor the mark, never place it on a background that drops its contrast below AA, and always give it clear space equal to the height of the "O" on all sides.

## 2. Typography Hierarchy

**Official typeface:** OCBC's own brand page names **Geomanist** as the typeface used to unify all OCBC communications: a contemporary geometric sans chosen for legibility (Section 5). Use it wherever the license is available. The logo wordmark itself is a bespoke geometric cut (distinct diagonal on the "C") reserved for the lockup only. Never reset the wordmark in Geomanist or any body font.

**Fallback where Geomanist isn't licensed:** Inter, metrically close and free, with strong Indonesian diacritic and tabular-numeral support. The hierarchy and sizing rules below hold regardless of which of the two is in use: just don't mix them within a single asset.

| Level | Weight | Size (desktop/print equivalent) | Size (IG 1080px canvas) | Use |
|---|---|---|---|---|
| H1 / Hero number | Geomanist Bold (or Inter Bold/Black) | 48–64pt | 72–96px | Carousel cover statement, the one stat a Reel is built around |
| H2 / Section head | Geomanist Medium (or Inter SemiBold) | 28–34pt | 44–56px | Slide headers inside a carousel, LinkedIn card headline |
| H3 / Subhead | Geomanist Regular (or Inter Medium) | 18–22pt | 32–36px | Supporting claims, chart titles |
| Body | Geomanist Regular (or Inter Regular) | 14–16pt | 26–30px | Explanatory text, caption copy reproduced on-slide |
| Caption / Meta | Geomanist Regular (or Inter Regular) | 11–12pt | 20–22px | Source lines, disclaimers, slide numbers |

**Rules:**
- Never set body copy in the primary red: red text under 24px fails contrast and reads as an error state, not a brand cue.
- Line length on-slide: 32–40 characters per line for H1/H2, so text reads as a headline, not a paragraph screenshot.
- Minimum text size on any 1080px-wide canvas: 26px, to hold up on a phone screen at arm's length.
- Numerals are tabular (fixed-width) wherever a chart or comparison is shown, so multi-line figures align vertically.

## 3. Platform-Specific Layout Rules

### 3.1 Instagram Carousel: 1080 × 1350 (4:5)

- **Grid:** 12-column grid, 64px outer margin, 24px gutter. Content block sits within a 952px-wide safe area.
- **Safe zones:** keep all text and key visual elements 80px from every edge. Instagram's UI does not overlay static feed posts, but the safe margin protects against crop previews in the grid view and Explore tiles.
- **Text-to-image ratio:** aim for 40% text / 60% visual per slide on educational carousels, inverted to 60% text / 40% visual on data-heavy "myth vs. fact" slides. Never exceed 70% text coverage on any single slide: it reads as a screenshot of a document, not a designed asset.
- **Swipe indicators:** bottom-right corner, small numeral fraction ("1/7") in Slate Gray, or a thin progress bar in OCBC Red at 4px height along the bottom edge. Consistent placement across every slide in the set.
- **Cover slide (slide 1):** carries the H1 hero statement and the OCBC logo lockup, top-left, at a fixed 120px height. Every subsequent slide repeats a small logo mark bottom-left for feed-scroll attribution.

### 3.2 LinkedIn Cards: 1200 × 628

- **Grid:** 12-column grid, 60px outer margin. This is a landscape data-visualization format: treat it as a chart-plus-headline unit, not a cropped Instagram slide.
- **Framing:** the headline claim sits in the left 55% of the frame; the supporting chart, stat block, or icon sits in the right 45%. This split matches how LinkedIn crops the card in-feed on both desktop and mobile.
- **Data visualization rules:** bar and line charts only for LinkedIn, no pie charts, no 3D effects. Single data series per chart. Every chart carries an axis label and a source line in Caption size at the bottom.
- **Tone of the frame:** more restrained than Instagram, charcoal-on-white as the default field, red used only for the single most important bar, line, or number.

### 3.3 Reels / Stories: 1080 × 1920 (9:16)

- **UI exclusion zones (both TikTok and Instagram interfaces):**
  - Top 250px: reserved for the account handle/avatar overlay and, on Stories, the progress bar. Do not place headline text here.
  - Right-hand 150px strip (full height): reserved for like/comment/share/save icons on both platforms. No text or key visual elements in this column.
  - Bottom 320px: reserved for caption text, sound attribution, and the platform's own UI controls. Primary hook text must sit above this zone, never inside it.
- **Effective safe canvas:** roughly 1080 × 1350 centered in the 1920px-tall frame, coincidentally the same aspect ratio as the Instagram carousel, which lets the design team reuse chart and card components across both formats.
- **Text placement:** hero hook text sits in the upper-middle third of the safe zone, large enough to read muted with captions off. Burned-in captions (if used) sit just above the bottom exclusion zone, not inside it.
- **Background:** Near-Black or Deep Charcoal as the default Reels background for text-on-screen segments; full-bleed talent/product footage is exempt from this rule.

## 4. Visual Prompting Guide (Midjourney / Higgsfield / Similar)

Use this structure for every image-generation prompt. Four blocks, in order: **subject → setting → lighting/lens → brand constraint.**

**Template:**
```
[Specific subject and action], [specific Indonesian setting/context],
shot on [lens/format], [lighting description], cinematic corporate
photography, high trust financial brand aesthetic, shallow depth of
field, color grade toward deep charcoal and warm neutrals with a single
red accent, no text overlay, photorealistic, 4K
```

**Worked example: Financial Fitness, individual segment:**
```
A woman in her early 30s reviewing a budgeting app on her phone at a
sunlit kitchen counter in a modern Jakarta apartment, shot on 50mm lens,
soft morning window light with gentle shadow falloff, cinematic
corporate photography, high trust financial brand aesthetic, shallow
depth of field, color grade toward deep charcoal and warm neutrals with
a single red accent object in frame (e.g. a red mug), no text overlay,
photorealistic, 4K
```

**Worked example: Nyala Bisnis, entrepreneur segment:**
```
A UMKM owner in their late 20s handing a packaged order to a courier
outside a small storefront in a Bandung shopping strip, shot on 35mm
lens, late-afternoon golden hour light, cinematic corporate
photography, high trust financial brand aesthetic, natural motion blur
on hands, color grade toward deep charcoal and warm neutrals with a
single red accent, no text overlay, photorealistic, 4K
```

**Constraints to hold across every generated image:**
- Talent looks like real Indonesian professionals and entrepreneurs, not stock-photo "generic Asian business person" composites: specify age range, setting, and a concrete action every time.
- No exaggerated luxury signaling (no private jets, yacht decks, or stacks of cash): Financial Fitness content should look aspirational at the scale of a real reader's next five years, not lottery-winner fantasy.
- No on-model logo generation: the OCBC lockup, wordmark, and any typography are added in post via the design template, never requested from the image model.
- Lighting stays warm-neutral to charcoal; avoid saturated blue "fintech" lighting, which reads as a different (younger, less trust-coded) category of brand.

## 5. Verified Sources

Facts marked "verified" above were checked against these public sources at the time this file was written (July 2026). Re-check before a compliance-critical use, since brand assets update on their own release cycle:

- OCBC Group brand page: red color meaning, Geomanist typeface, logo symbolism, "For now, and beyond" tagline: [ocbc.com/group/about-us/our-brand](https://www.ocbc.com/group/about-us/our-brand.page)
- Pantone 485 C to hex conversion (`#DA291C`): [Pantone Connect: 485 C](https://www.pantone.com/connect/485-C), cross-checked via [icolorpalette.com](https://icolorpalette.com/color/pantone-485-c/) and [colorcodeslab.com](https://www.colorcodeslab.com/en/pantone-color/485-c/)
- OCBC NISP → OCBC rebrand, 14 November 2023: [The Jakarta Post](https://www.thejakartapost.com/front-row/2023/11/15/ocbc-nisp-rebrands-to-ocbc.html), [OCBC press release](https://www.ocbc.id/en/tentang-ocbc/informasi/siaran-pers/2023/11/15/rebranding-ocbc)
- Logo redesign history and wordmark detail: [1000logos.net](https://1000logos.net/ocbc-bank-logo/)
- NYALA / Ruang meNYALA / Financial Fitness program structure: [OCBC Nyala product page](https://www.ocbc.id/en/individu/nyala), [OCBC Financial Fitness launch release](https://www.ocbc.id/en/tentang-ocbc/informasi/siaran-pers/2021/03/15/financially-fit), [OCBC FFI 2024 release](https://www.ocbc.id/en/tentang-ocbc/informasi/siaran-pers/2024/08/16/ocbc-ffi-2024)
- Nyala Bisnis and SME suite (OCBC Business, Ruang Kreasi): [Nyala Bisnis page](https://www.ocbc.id/en/sme/nyala-bisnis), [OCBC SME hub](https://www.ocbc.id/en/sme)
