---
name: ocbc-indonesia-brand-os
description: Complete brand system for producing OCBC Indonesia social media content (Instagram carousels, LinkedIn posts/cards, Reels/Stories scripts, captions), covering tone of voice, copywriting rules, banned language, exact color/typography/layout specs, and a content workflow that turns one financial topic into multiple distinct formats. Use this skill whenever the user is writing, drafting, reviewing, designing, or checking any OCBC Indonesia social content, or asks whether copy or a visual "sounds/looks like OCBC," even if they don't name the skill directly, e.g. requests to write an Instagram caption about SBN Ritel, draft a LinkedIn post for OCBC, script a Reels hook, pick colors for an OCBC carousel, or review a draft against OCBC's brand voice.
---

# OCBC Indonesia Brand OS

This skill makes any content produced for OCBC Indonesia's social channels sound and look like it came from OCBC, not from a generic bank or a generic AI. It covers the two things that make content on-brand: the **words** (voice, copywriting rules, banned language) and the **visuals** (color, type, platform layout). It also gives a repeatable workflow for turning one financial topic into several genuinely different pieces of content instead of one message reformatted three times.

Read this file first. Load a reference file only when the task actually needs that level of detail: don't load all three for a quick caption check.

## Reference Files

| File | Load it when... |
|---|---|
| [references/01_OCBC_BRAND_DNA_AND_VOICE.md](references/01_OCBC_BRAND_DNA_AND_VOICE.md) | Writing or reviewing any copy: captions, LinkedIn posts, Reels scripts. Contains the NYALA vs. Nyala Bisnis segment split, the tone-of-voice matrix, format-specific copywriting rules (LinkedIn / IG / Reels), and the banned-language list. |
| [references/02_OCBC_VISUAL_DESIGN_SYSTEM.md](references/02_OCBC_VISUAL_DESIGN_SYSTEM.md) | Producing or reviewing any visual: picking colors, setting type, laying out a carousel/card/Reel, or writing an image-generation prompt. Contains verified color hex/Pantone values, the official typeface (Geomanist), platform-specific layout rules for IG Carousel / LinkedIn Card / Reels-Stories, and a visual prompting template with worked examples. Includes a sources section: check it before treating any spec as compliance-final. |
| [references/03_OCBC_CONTENT_PIPELINE_ENGINE.md](references/03_OCBC_CONTENT_PIPELINE_ENGINE.md) | Turning one topic into a full content set across formats. Contains the execution workflow, a fully worked example (SBN Ritel → LinkedIn post + IG carousel + Reels script), and the exact 3-step prompt formula for invoking this skill on a new topic. |

## Asset Library

`assets/` has ready-to-use design files: logo, color swatches, typography reference, per-platform grid/safe-zone templates, and placeholder iconography. Read [assets/README.md](assets/README.md) first: the logo folder is a reference-quality trace from a public source (not OCBC's own brand-kit file), while everything else was built fresh for this skill. Both categories carry usage caveats worth reading before anything ships beyond a draft.

## Quick Start

For most requests you don't need to open every reference file: these two checks cover the common case.

### The 3-step prompt formula (for generating new content)

1. **Topic + segment.** Name the financial topic and which segment it belongs to: **NYALA** (individual Financial Fitness, Gen Z/Millennial personal finance) or **Nyala Bisnis** (entrepreneur/UMKM business banking). These are not interchangeable; mixing them dilutes both. Full definitions in reference 01.
2. **Angle + format.** State the angle (contrarian/myth-correction, step-by-step, fast-paced hook, or data visualization) or ask for all three standard formats (LinkedIn post, IG carousel, Reels script). Full angle-to-platform mapping and a worked example in reference 03.
3. **Constraint, if any.** Anything the output must include or respect (a data source, an audience, a length cap, a specific objection to address).

Example: *"Topic: dana darurat (emergency fund). Segment: NYALA. Give me the Contrarian LinkedIn post, the Step-by-Step IG Carousel, and the Fast-Paced Reels script. Constraint: must cite a specific multiple of monthly expenses as the target."*

### The 4-question voice check (for reviewing existing copy)

Before calling any copy final, check it against these four questions (full detail in reference 01, Section 5):

1. Would the sentence survive if every banned-list word were deleted? (If not, replace the adjective with a fact.)
2. Does the first line work with the rest of the post hidden behind a "see more" cut?
3. Is there one number, one source, and one concrete action in the piece?
4. Could a competitor's logo replace OCBC's without the copy reading strangely? If yes, it isn't specific enough to OCBC's Financial Fitness thesis. Rewrite.

### Fast facts worth holding in working memory

- **Brand promise:** "For now, and beyond": every closing line or CTA should help the reader now *and* point at a benefit that compounds later.
- **Segments:** NYALA (individual) vs. Nyala Bisnis (entrepreneur/UMKM); always name one, never blend them in a single piece.
- **Primary color:** OCBC Red, Pantone 485 C (`#DA291C`), a signal color for the one thing on a slide that should draw the eye first, never a background wash behind body text.
- **Typeface:** Geomanist (official), Inter as the free fallback.
- **Voice:** confident senior-advisor tone, bilingual by design (Indonesian for warmth, English for financial precision), one number/one source/one action per piece, no banned AI-isms, no em-dash-driven contrast frames, no recap endings.

When something in this quick-start conflicts with a more detailed rule in the reference files, the reference file wins. This section is a shortcut, not an override.
