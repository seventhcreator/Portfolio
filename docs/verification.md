# Verification record

## Code checks

- TypeScript check: passed.
- ESLint: passed.
- Production build: passed, including static page and social-image generation.
- Package tree: valid, with exact dependency versions and an npm lockfile.

## Browser checks

Using the Codex in-app Chromium browser against the running local app:

- Hero: real portrait and local font loaded; identity, role, location, and work action visible.
- Responsive overflow checked at actual CSS widths 320, 390, 768, 1024, 1440, and 1920 px. A narrow personal-project grid overflow was found and fixed; all six widths passed the repeat check.
- Desktop and mobile layouts visually inspected.
- Both professional case-study dialogs opened with their correct content.
- Escape closed a project dialog, restored focus to its opening button, and restored body scrolling.
- All five personal-creation dialogs opened with substantive descriptions and appropriate outbound actions.
- Mobile menu opened, focused its first link, closed with Escape, and returned focus to its trigger.
- Mobile Contact navigation closed the menu and updated the anchor correctly.
- Copy-email action returned visible success feedback in its live region.
- Full/reduced motion switching was exercised. Reduced mode produced `scroll-behavior: auto`, removed the portrait transform, and hid the project cursor. Re-enabling full motion restores the scoped animation setup.
- Keyboard activation of the native experience summary expanded and collapsed its content.
- Modal keyboard focus stayed within the native dialog, with the close control reachable.
- The browser reported no warning/error logs during the reviewed interactions.
- Maelström and Sweetspot external destinations loaded; unavailable JobHub repository action removed.

## Limits

- No automated Playwright suite, axe audit, Lighthouse score, or field Core Web Vitals measurements are claimed.
- The system-preference subscription and reduced-motion CSS are implemented; direct OS preference changes have not been exercised.
- Browser review covers the available Chromium browser; Safari/Firefox and physical touch devices remain additional release checks.
- Clipboard denial handling is implemented, but only the success path was exercised.
- GitHub publication, Vercel deployment, custom domain, canonical URL, and sitemap are pending the user's destinations and release instruction.

## Motion refinement — November 1, 2026

- On reload, observed both name lines at different animation positions, and the portrait above its final position with rotation/scale before settling. Hero inline entrance styles were cleared after completion.
- Scrolling changed the portrait's translation and the project illustrations' translation/rotation. The violet progress indicator tracked the scroll position.
- Observed the About heading's masked lines moving into view and settling at zero translation with readable, unclipped final text.
- Exercised the primary button's magnetic zone with a real pointer drag into the control: movement reached the 16 px cap, hover background resolved to the violet accent, and moving away cleared the active state and returned the control to zero translation.
- Project dialog opening and Escape dismissal continued to work.
- Reduced motion removed all heading, illustration, and magnetic transforms, hid the progress/cursor decoration, and restored immediate anchor scrolling.
- Rechecked horizontal overflow at exact CSS widths 320, 390, 768, 1024, and 1440 px: none found. Mobile menu navigation and the mobile heading composition remained usable.

## Palette checks

Calculated sRGB contrast: ink/paper 16.68:1; muted/paper 5.44:1; inverse-muted/ink 8.66:1; white/violet 5.73:1. Violet/ink is 3.32:1, suitable for the large display text and graphical focus treatment used here, not normal-size body text.

## Information presentation refinement

- Replaced the hero image with the supplied native black-and-white photo and removed the old grayscale/multiply treatments.
- Visually reviewed expanded desktop experience: the +15 pp and 8+ results render at approximately 38 px at a 1280 px viewport; explanatory text remains at 16 px.
- Visually reviewed the glass toolkit panel and grouped skill chips.
- Verified the first case study's marked headings and specific phrases. Narrative paragraphs render at 18 px; the introductory paragraph is 20 px.
- The Chrome Web Store action renders as a filled violet button with 16 px text and a 60 px height in the desktop dialog. Back/close controls are visibly outlined or filled.
- Rechecked page overflow at exact CSS widths 320, 390, 768, 1024, 1440, 1920 px: none found. Checked the personal-project modal at 320, 390, 768, and 1440 px: no internal horizontal overflow.
- Project dialogs reset scroll position on opening so each new project starts at its heading.

## Presentation refinement verification — 2026-11-02

- Browser checked hero name/role reveal and the original JPEG loaded at its native 1376-pixel width.
- Desktop biography glass panel and experience alignment visually reviewed.
- Experience opened by mouse and closed by keyboard; mobile Chief Brand Officer entry renders sales, ATV and team metrics.
- Reduced-motion footer toggle exercised with keyboard; native experience toggle verified under reduced motion.
- No horizontal document overflow at 320, 390, 768, 1024, 1440 and 1920 CSS pixels, or with the mobile experience open.
- Console warning/error log empty during inspection.
- TypeScript, ESLint and production build passed. 21st CLI review produced informational color-token findings, no errors; no external components installed.

## Original-media and interaction pass — 2026-11-02

- Reconfirmed the original source counters after their animations completed: 8+, 20+, 400+, 5+.
- Verified four creation images load from local paths and map to the correct dialogs. JobHub remains without imported media per the owner.
- Both imported videos reached readyState 4; Trai completed its 26.78-second recording, DNS Switch was observed playing with time advancing. Both original recordings have no audio streams.
- Verified image-to-player reveal, soft dialog scroll, BACK TO PREVIEW and Escape close/focus restoration.
- No document overflow at 320, 390, 768, 1024, 1440 and 1920 CSS pixels. No dialog overflow with the player open at 320, 390, 768 or 1440 pixels. Mobile experience expansion also has no document overflow.
- Rapid keyboard reversal settled all closed panel heights at zero. The rotated border is fully visible, ancestor overflow is visible, and the SVG plus is centered. Reduced mode opens the new accessible disclosure without the full-motion transition.
- Biography contains exactly the four requested marked phrases; role reveal computes to ink/black. Portrait scroll inspected at 396 pixels: frame drift approximately -30 pixels plus inner parallax, with original JPEG unchanged.
- Browser error/warning log empty. TypeScript, ESLint and production build pass. 21st review reported color-token information and the existing modal autofocus warning; modal initial close-button focus is intentional.

## Framer workflow port verification — 2026-11-02

- Read-only Framer session located Work Book and exported `HomeSignal.tsx`; original project unchanged.
- Compared original and ported phase engines over 1,730 sampled timestamps (including negative/cyclic time), exact phase boundaries and 101 ripple samples; all match. Both path orientations preserve start/end coordinates.
- Browser showed eight connection paths, travelling pulse and changing client/profile/team stages. Paused state retained the exact phase/route/pulse markup across subsequent checks; play resumed. Offscreen SVG markup remained unchanged.
- Desktop composition and phone composition visually reviewed. ResizeObserver geometry updated at widths 320, 390, 700, 768, 1024, 1440 and 1920 with all eight paths present and no document overflow. Phone profile height is 194 pixels; desktop profile height is 300 pixels.
- Reduced mode renders eight static paths, zero pulse/ripple circles and no redundant pause control.
- Browser warning/error log empty. TypeScript, ESLint and production build pass. UI review found informational color values and the pre-existing project-dialog autofocus warning; no workflow accessibility warning.

## Creation banner sizing verification — 2026-11-02

Generated Trai and DNS banner assets inspected; Maelström logo placement and original Sweetspot crop visually reviewed in dialogs. All four previews measure 150px high at 320/390px viewports, about 161px at 768px, and 250px at 1440px. No dialog overflow in all sixteen combinations. Trai SEE IN ACTION expanded the preview from 250px to 508px and its original video played (readyState 4, time advancing). BACK TO PREVIEW and close exercised. JobHub still has zero image/banner elements. Browser warning/error log empty. TypeScript, lint and production build pass; UI review reported informational existing color values only.

## Annotation pass verification — 2026-11-02

Verified all revised labels/copy in the rendered page, one full-description paragraph in each of the four creation dialogs, DNS transparency integrated with the paper surface, and Blog href in both desktop and opened mobile navigation. JobHub mark now computes to 52px on desktop, 58px on tablet and 44px on small phones; the original per-breakpoint icon slot height is retained for alignment. No document overflow at 320/390/768/1192/1440 CSS pixels. Violet biography surface visually reviewed. Browser warning/error log empty. TypeScript, ESLint and production build pass. UI review findings were existing color-token information and the intentional project-dialog initial focus warning.

## Audit fixes verification — 2026-11-02

- At 1280×720, hero CTA top/bottom 650/707px versus baseline top 744px. Full button visible. 768×720 and 1024×720 also fit; wide-short 1920×720 refined separately.
- Hero CTA targets #case-studies, focus lands on the named region and its top clears the fixed header at 128px. Tested in reduced and full motion. Navigation Projects retains #projects.
- Verified both source-backed card outcomes and the new contact heading.
- At desktop widths, all five creation-description start positions match. All three About strip caption positions match at widths ≥768px.
- No document overflow at 320,390,768,1024,1192,1440,1920px. Original baseline files preserved; after full-page captures use matching 1440×1000,1280×720,390×844 settings.
