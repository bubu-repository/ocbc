# Asset Library

Ready-to-use design files for OCBC Indonesia content. Two different kinds of asset live here, and they carry different levels of authority — read this before dropping anything into a design tool.

## `logo/` — the actual OCBC mark (reference-quality, not official)

`ocbc-logo.svg` plus three PNG renders (full-color, white-knockout, black-mono), all at matching resolution. Sourced from a public Wikimedia Commons trace of OCBC's current (post-2023) logo, not from OCBC's own brand team — there is no public OCBC press kit as of this writing. Full provenance, license, and a color discrepancy note are in `logo/SOURCE_AND_LICENSE.md`. Read it before using the logo anywhere beyond a draft or internal comp.

## Everything else — built fresh, made up for this skill

`templates/`, `colors/`, `typography/`, and `icons/` are original files built from the specs in `references/02_OCBC_VISUAL_DESIGN_SYSTEM.md`. None of it is scraped from OCBC's actual social media, none of it copies any real OCBC campaign photography or iconography — it exists so a design can start from a correctly-dimensioned, correctly-colored file instead of a blank canvas.

| Folder | Contents | Use it for |
|---|---|---|
| `templates/` | Grid + safe-zone overlay files at the exact target canvas size for each platform: `ig-carousel-1080x1350-grid`, `linkedin-card-1200x628-grid`, `reels-stories-1080x1920-safezone` (each as `.svg` and `.png`) | Drop as a guide layer in Figma/Photoshop/Canva, place your real content on top, then hide or delete the guide layer before export. |
| `colors/` | `ocbc-color-palette.svg`/`.png` (visual swatch sheet), `palette.json`, `palette.css` | Swatch sheet for a mood board or client review; the `.json`/`.css` files for pasting hex values straight into code or a design tool's color panel. |
| `typography/` | `type-hierarchy-sample.svg`/`.png` | A sizing/hierarchy reference (H1 through Caption) rendered in a system sans-serif as a stand-in — swap in actual Geomanist or Inter when setting real copy. |
| `icons/` | Six generic financial-concept icons (`icon-savings`, `icon-growth`, `icon-protection`, `icon-wallet`, `icon-goal`, `icon-partnership`), each `.svg` + `.png` | Placeholder iconography for carousels/cards until real OCBC iconography is available. Original line-art in the brand's red/charcoal palette, not copied from any existing icon set. |

## Before anything ships

Everything here is a working draft aid, not a compliance-final asset. Before a print run, paid media buy, or anything customer-facing at scale: get OCBC's actual logo files and brand-book color/type specs from their brand team or your agency's asset library, and swap them in for the files here.
