# Asset sources

## Current owner portrait

- User-supplied `Primera 1920 x 1080 ByN.jpg`; actual source dimensions 1376 × 768.
- Delivery asset: `public/images/santiago-portrait.webp`, preserving the source dimensions, approximately 98 KB at WebP quality 90.
- The prepared WebP is served directly through the Image component to avoid a second lossy compression pass or an enlarged generated derivative.
- Native black-and-white tonality is retained. The previous grayscale filter and multiply blending were removed. The responsive crop and existing motion operate through CSS without altering the original photo.

## Previous portrait reference

- Source: owner's existing portfolio, Projects page.
- Original URL: https://framerusercontent.com/images/hAaCvWqOZoe4xXr0KEh4A5aE0VI.png?width=1086&height=1448
- Downloaded original retained locally as `reference/santiago-original.png`.
- Earlier delivery asset: `public/images/santiago.webp`, resized to 1000 × 1333 and compressed to approximately 106 KB. It is retained as an unused reference; the hero now uses the supplied photo above.
- The black-and-white presentation and crop are reversible CSS treatments; no identity features were generated or altered.

## Typography

- Archivo Variable from `@fontsource-variable/archivo` 5.3.0.
- Local Latin variable WOFF2: `public/fonts/archivo-latin-variable.woff2`.
- SIL Open Font License included at `public/fonts/archivo-LICENSE.txt`.
- Loaded via `next/font/local`; visitors make no remote font request.

## Original artwork

- Orbital route illustration and Seoul/Medellín globe diagram: original inline SVG and typography in `components/projects/ProjectArt.tsx`.
- These are editorial representations of project themes, not screenshots, measured geographic maps, or recreated client deliverables.
- Personal-project symbols are decorative typography rather than claimed project logos.
- Arrows and favicon are original SVG. The social preview is generated with Next.js `ImageResponse`.
- Reference brands, artists, and images from the initial moodboard are not shipped as portfolio assets.

Current hero refinement: `public/images/santiago-portrait.jpg` is a direct copy of the owner's supplied original JPEG (1376 × 768). It supersedes the derived WebP in the hero. The aspect ratio is less tightly cropped to reduce enlargement; no artificial upscaling is applied.

## Original portfolio media and content audit — 2026-11-02

Revisited the published Framer `/work` and `/about-me` pages. The project fragment supplied in chat did not resolve through the Framer CLI, so the audit used the published pages and their rendered creation dialogs. The source portfolio was not edited.

Local media copied from the original dialog assets:

| Creation         | Local image                              | Original image                                                         | Local demo                    | Original video                                                        |
| ---------------- | ---------------------------------------- | ---------------------------------------------------------------------- | ----------------------------- | --------------------------------------------------------------------- |
| Trai             | `/images/creations/trai.png`             | `https://framerusercontent.com/images/ps0rTziDUG2cmn6SbPS8tvTp6A.png`  | `/videos/trai-demo.mp4`       | `https://framerusercontent.com/assets/Rk298jcXZ7ivoJ1bO2bpMFNo.mp4`   |
| DNS Switch       | `/images/creations/dns-switch.jpg`       | `https://framerusercontent.com/images/MQyBtP4Uaws4EYo668OIO3Z1KtQ.jpg` | `/videos/dns-switch-demo.mp4` | `https://framerusercontent.com/assets/gdIJGjBGM0LX8InCYdukVR49Xs.mp4` |
| Maelström        | `/images/creations/maelstrom.png`        | `https://framerusercontent.com/images/VY8Wx1yCiEHTEOPaYermBrdPk2k.png` | —                             | No demo video in original dialog                                      |
| Sweetspot Desert | `/images/creations/sweetspot-desert.png` | `https://framerusercontent.com/images/kAlxTGj2lAEf1Fr4iF05YU4gB00.png` | —                             | No demo video in original dialog                                      |

The Maelström and Sweetspot dialog images differ from their index cards; the dialog versions were used as requested. Original files are preserved without upscaling or recompression. Trai is a 26.78-second 2560 × 1440 recording; DNS Switch is a 24.98-second 2304 × 1296 recording. Both contain only video streams, with no audio. Video files load only after the visitor chooses SEE IN ACTION.

JobHub is unchanged by the owner's explicit instruction. Future Tech remains excluded because its original description is incomplete.

## Workflow source

`HomeSignal.tsx` was exported read-only from the owner's Framer Work Book project on November 2, 2026. Archive: `reference/HomeSignal.framer.tsx.txt` (ignored local reference). Runtime clock, easing and ripple functions are retained in `components/projects/workflow/flow-engine.ts`. Source colors, profile glow, selectors and fixed coordinates were replaced with the current portfolio tokens and measured responsive geometry. No Framer runtime dependency was added.
# Medellín panorama — 2026-11-02

Owner-supplied `a2b743cb-2978-4206-a1d2-ddedc5cb45f6.webp` copied unchanged to `public/images/medellin-panorama.webp`. The hero location link opens the hosted asset in a new tab in either language. No image generation, editing or external hotlink is used.

# Eye painting — 2026-11-02

Owner-supplied `480ae7e4-a0ee-4328-ab21-227f9d24a117.webp` copied unchanged to `public/images/sharp-eye.webp`. The English KEEP A SHARP EYE label opens this hosted image in a new tab. The English 050021 label opens the existing Medellín panorama.

# Medellín night photograph — 2026-11-02

Owner-supplied `373cadcd363c9bfda626d15030eeff1c.jpg` copied unchanged to `public/images/medellin-night.jpg`. Replaces the panorama destination for both the hero location link and English contact postal-code link. The previous panorama asset is retained as an unused original.
