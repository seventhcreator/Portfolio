# English and Spanish

The header EN / ES switch changes all authored visitor copy without a route change or reload. English remains the server-rendered default. The visitor's explicit choice is saved in `portfolio-language` in local storage; storage being unavailable does not prevent switching. The document language and title follow the choice.

`data/es.ts` contains editorial Spanish translations keyed by the English source copy. Proper names, technical brands, numerical results, URLs and original recorded demos remain unchanged. Embedded text in original project screenshots is part of those assets; captions, image descriptions and player labels are translated.

`components/shared/Language.tsx` provides context, the accessible switch and render-time localization. Each copy-owning section uses `localize()` on its returned React elements. Only explicit copy props are traversed: children, aria-label, alt, title, text, phrases, lines and summary. IDs, keys, URLs, refs, handlers and technical data remain untouched. This does not replace text in the DOM and does not remount sections on a language change. `Children.map` retains stable React keys.

English and Spanish are edited independently. `data/en.ts` contains English-only revisions keyed by the stable source strings; `data/es.ts` retains the separately approved Spanish wording. Do not synchronize either language automatically. English-only removals and different content structures use explicit locale branches in their owning components. `elDoradoSteps` contains the expanded English case-study sections from the owner's original portfolio.

When adding a new component with internal copy, call `useLanguage()` and localize its returned tree or use `t()` for individual strings. HighlightedText requires each language's highlighted phrases to occur in that language's rendered sentence. Dynamic case-study/read-about/video accessible names have explicit templates in `translate()`.

Language changes notify the motion and workflow measurements after rendering, so line wrapping updates scroll triggers and connection paths. Existing disclosures, dialogs and playback state are not reset.

This is a single-page language preference, not separate language URLs or server-localized search metadata. No translation API or additional dependency is used.
