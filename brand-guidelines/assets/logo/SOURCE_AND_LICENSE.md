# Logo Asset Provenance

**Source:** [Wikimedia Commons — File:Logo-ocbc.svg](https://commons.wikimedia.org/wiki/File:Logo-ocbc.svg), downloaded 2026-07-15 from `upload.wikimedia.org/wikipedia/commons/1/1d/Logo-ocbc.svg` (2 KB).

**What this is:** a community-maintained vector trace of OCBC's current wordmark (the junk-ship-in-an-"O" mark adopted 3 July 2023, used by OCBC Indonesia since the 14 November 2023 rebrand). It is not a file issued by OCBC's own brand team — there is no public OCBC press kit or media-asset download page as of this writing. Treat this as a high-fidelity reference, not the official production master.

**License note:** Commons lists this file as available under CC BY-SA 3.0 / GFDL for the *file itself* as a graphic reproduction, while flagging that the underlying logo design is a trademark of OCBC. That combination is normal for how Commons hosts company logos: the trace is freely licensed, but the mark it depicts still belongs to OCBC as a trademark. In practice this means:

- Fine for building comps, mockups, internal decks, and social content drafts that will be reviewed before publishing.
- Not a substitute for OCBC's own brand-kit file before a print run, paid media buy, or anything customer-facing at scale — get the actual file from OCBC's brand/marketing team or your agency's asset library first, since a fan-traced SVG can carry tiny geometry or color drift versus the master (see below).
- Never alter, recolor outside the provided variants, distort, or add effects to the mark — trademark logos are typically used as-is or not at all.

**Color note:** the SVG's fill is `#ED1C24`, extracted directly from this file. That's a visibly different value from the Pantone 485 C → `#DA291C` conversion documented in [`../../references/02_OCBC_VISUAL_DESIGN_SYSTEM.md`](../../references/02_OCBC_VISUAL_DESIGN_SYSTEM.md) — both numbers show up in different public sources, and without OCBC's internal Pantone book there's no way to say which one their current print production actually uses. Where the two disagree, this file's `#ED1C24` is probably closer to what actually renders on screen (it comes straight from a logo file rather than a generic Pantone-to-hex table), but confirm before anything ships.

## Files in this folder

| File | Format | Size | Use |
|---|---|---|---|
| `ocbc-logo.svg` | Vector (infinite resolution) | 2 KB | Master file — use this whenever the design tool supports SVG/vector import. Always prefer this over a PNG. |
| `ocbc-logo-full-color.png` | Raster, transparent background | 2669×720px | Full-color red logo for light backgrounds (white, off-white, light gray). |
| `ocbc-logo-white-knockout.png` | Raster, transparent background | 2669×720px | White logo for dark/red/photo backgrounds. |
| `ocbc-logo-black-mono.png` | Raster, transparent background | 2669×720px | Single-color black version for mono contexts (e.g. printing constraints, watermarks). |

All three PNGs are rendered from the same vector source at matching resolution, so they're safe to swap for one another without a size mismatch.
