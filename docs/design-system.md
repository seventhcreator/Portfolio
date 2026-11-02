# Editorial Voltage

## Visual language

Oversized grotesk type, monochrome photography, asymmetric editorial composition, fine rules, quiet metadata, and one violet accent. Paper → ink → paper → ink gives the four sections a clear rhythm.

## Tokens

| Token                   | Value                      | Role                                                   |
| ----------------------- | -------------------------- | ------------------------------------------------------ |
| Paper                   | `#f1f0eb`                  | Light surfaces and inverse text                        |
| Ink                     | `#101010`                  | Primary text and dark surfaces                         |
| Violet                  | `#7441e8`                  | Actions, emphasis, active navigation, large statements |
| Light-surface secondary | `#62615b`                  | Supporting copy                                        |
| Dark-surface secondary  | `#b0afaa`                  | Supporting inverse copy                                |
| Gutter                  | `clamp(24px, 4.4vw, 88px)` | Shared section alignment                               |

Violet on ink is reserved for large type and decorative art; normal text on a violet action uses white. Small labels remain neutral. Focus indicators use a three-pixel violet outline with clear offset. The palette is centralized in `app/globals.css`.

## Typography

Archivo Variable, locally hosted, weights 100–900. Heavy display sizes create the poster-like opening; body and interactive copy use calmer weights. System Courier New supplies short editorial metadata. Display type uses bounded fluid sizes; mobile receives its own composition and size rules.

## Layout and primitives

- One page: Home, About me, Projects, Contact.
- Shared gutters, rules, arrows, numbering, and label styles maintain consistency across changing compositions.
- Desktop hero layers the real portrait over large identity type; mobile preserves a readable name and portrait crop.
- About uses a split introduction, native details elements for experience, and a compact skills grid.
- Professional project artwork is staggered on desktop and stacked on mobile.
- Personal creations share an editorial row/grid, not fabricated product screenshots.
- Dialogs use native modal semantics, focus containment, explicit close controls, Escape, and focus restoration.

## Information presentation

- Main reading copy is at least 16 px; case-study narratives use 18 px. Editorial labels have been raised to 12 px in the main interface rather than shrinking with mobile breakpoints.
- Experience results are visible directly in the collapsed summary as large numeric figures with clear labels. Expanded narratives use a two-column headline/body arrangement on desktop and stack on mobile.
- The toolkit is a single restrained glass panel: translucent neutral layers, a fine light edge, subtle violet light, and grouped 14 px skill chips. A solid translucent surface remains as the fallback when backdrop blur is unavailable.
- Case-study section labels and selected source-backed phrases use violet marker strokes with cloned line backgrounds. Text stays dark on light surfaces and light on dark surfaces for readable contrast.
- External project destinations use filled violet buttons, while back/close/copy and preference controls have visible button boundaries. Mobile personal creations become single-column rows to preserve readable descriptions.

## Motion

The hero uses a coordinated timeline: the two name lines rise and settle with a short stagger, while the portrait drops from above with a small rotation and scale settling into place. The full entrance runs approximately 1.5 seconds. Supporting hero copy follows within the same sequence.

Section headings reveal line by line through masks, approximately 1.05 seconds with a 130 ms stagger. Section rules draw from left to right. Supporting modules rise and fade, and reveal again after scrolling away above their entry threshold. A thin violet line below the fixed navigation indicates scroll progress.

Desktop parallax moves the oversized portrait inside its frame and shifts/rotates the project illustrations independently of their text. On touch-sized layouts these parallax layers remain static. Magnetic attraction is limited to the primary work button and the contact arrow: movement is capped at 16 px, with a smooth return to the original position and a stationary interaction region. Event handlers and animations are cleaned up when motion is reduced or the component unmounts.

A contextual project cursor is restricted to desktop fine pointers and full motion; the regular pointer is preserved. Words, project titles, buttons, and selected link details use violet hover/focus treatments. Small email text retains its readable neutral color and gains a violet underline/arrow instead.

The default comes from `prefers-reduced-motion`. The footer control provides a temporary visitor override. Switching to reduced motion reverts scoped GSAP work, disables the decorative cursor, shortens transitions, and makes anchor scrolling immediate. Native scrolling is retained throughout.

## Animated workflow

Projects includes a compact explanatory workflow before the work totals. Four illustrative clients send requests through Santiago to product/backlog, support, development and commercial teams. The original Framer timing and phase logic is preserved. Desktop reads left-to-right; narrow layouts read top-to-bottom with a compact horizontal identity card. Neutral cards and typography carry the structure; violet marks the moving request, alignment ripple and active destination. Pause/play is available, motion suspends outside the viewport or in hidden tabs, and reduced motion shows static connections.
