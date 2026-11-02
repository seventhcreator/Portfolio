# Personal portfolio — creative brief

Status: proposed direction, ready to refine with the owner's role and experience.
Date: November 1, 2026.
Scope of this stage: visual direction, information architecture, motion strategy, skills research, and delivery plan. Implementation and account setup come later.

## Intent

Create an editorial, professional personal portfolio with high contrast, visual punch, one violet accent, and a responsive sense of movement. The experience should communicate identity, demonstrate work, and make contact easy.

Treat the six supplied images as visual references. Their advertising copy, navigation, products, and depicted identities are not portfolio requirements or content to reuse.

Working creative direction: **Editorial Voltage** — oversized typography and striking imagery organized by a precise, quiet grid. Expressive composition and motion should help visitors understand the person and their work.

## Reading the references

| Reference | Visual lesson | Portfolio application |
| --- | --- | --- |
| 1 — GAZU | Monumental type, figure overlapping text, light/dark bands | Strong opening composition and clear chapter rhythm |
| 2 — The Weeknd | Monochrome contrast, split layouts, numbered editorial content | About composition and consistent section numbering |
| 3 — portrait poster | Close crop, texture, sparse distributed metadata | Portrait art direction and compact role/location labels |
| 4 — RUE STUDIO | Large margins, curated image sequence, tiny utility labels | Project curation and deliberate breathing room |
| 5 — A$AP | Oversized cropped lettering, image/type overlap | A memorable hero, with the essential role statement fully readable |
| 6 — Nike ACG | Single strong accent plane, technical annotations, asymmetry | Violet emphasis, project metadata, and a common arrow treatment |

The dominant language is editorial art direction: scale contrast, image cropping, layered composition, and intentional spacing. A portrait is a possible asset, not a prerequisite; a composition built from real work can carry the opening if it better represents the owner.

## Visual system

- Starting palette: paper `#F1F0EB`, ink `#101010`, violet `#7441E8`, plus neutral grays for secondary information. These are candidates; verify every actual foreground/background pair during design.
- Use violet for primary actions, active states, focus indicators where contrast permits, and a small number of graphic accents. Establish hierarchy with scale and space as well as color.
- Use a heavy grotesk sans serif for display typography, a readable sans serif for body text, and optionally one restrained monospaced style for metadata. Limit font families and weights; select exact fonts during the visual study.
- Build on a shared responsive grid: proposed 12 columns on desktop, 6 on tablet, 4 on mobile. Keep alignment, margins, and spacing consistent across sections.
- Use sharp rectangular image frames, fine rules, short numbered labels, and one family of directional arrows. Define these as shared styles before developing individual sections.
- Use close-cropped monochrome photography when suitable. Consider a subtle static grain treatment on selected art; keep reading surfaces and project screenshots crisp.
- Keep portfolio framing within the monochrome/violet system. Where project artifacts need original colors to communicate accurately, preserve them within that consistent framing; confirm this interpretation when actual work is available.
- Recompose for mobile: reduce overlaps, preserve readable headings, stack content, and keep project actions visible.

## Information architecture

Start with one scrolling page and four anchor destinations: Home, About me, Projects, Contact. A compact persistent navigation identifies the current chapter. This is a working interpretation of “a webpage with four sections.”

| Chapter | Visitor question | Content and composition | Intended next step |
| --- | --- | --- | --- |
| 01 — Home | Who is this, and why should I explore? | Large name or identity statement, clear role/value sentence, one defining visual, selected-work action | Explore projects |
| 02 — About me | What perspective and experience do they bring? | Concise introduction, optional portrait, capabilities, selected experience highlights | Understand fit |
| 03 — Projects | What have they done, and what was their contribution? | A curated set of substantial project entries, each with image, title, context, contribution, and supported outcome | Read the work or visit a live result |
| 04 — Contact | How do I start a conversation? | Large closing invitation, visible email, relevant professional links, optional availability statement if true | Send an inquiry |

Suggested background rhythm: paper → ink → paper → ink. Common typography and alignment tie together different compositions.

Projects should receive the largest share of the page. Choose the strongest available work rather than filling an arbitrary count. Keep a project's role, contribution, and evidence visible in the page; richer case studies can later become separate routes if the content warrants them. Contact can begin with a direct email link; add a form only if there is a clear need.

## Motion and interaction

Use a small set of repeated motion behaviors, with one dominant gesture at a time.

| Surface | Proposed behavior | Mobile / reduced-motion behavior |
| --- | --- | --- |
| Opening | Short coordinated reveal of title and defining image | Immediate presentation or brief opacity transition |
| Navigation | Active-section indicator and responsive link underline | Accessible compact menu and equally clear active state |
| Section entrances | Small vertical movement with opacity; consistent stagger | Minimal fade or immediate presentation |
| Hero visual | Subtle scroll-linked movement inside its frame | Static image |
| Project entries | Restrained image scale, moving arrow, optional pointer-following preview | Persistent thumbnail and explicit tap target |
| Cursor | Optional small violet follower or “View” cue over project imagery, alongside the normal pointer | Disabled for touch and reduced-motion use |
| Contact | Clear hover/focus response; copy-email action may show confirmation | Equivalent tap and keyboard feedback |

Initial timing ranges to test: 150–250 ms for direct interface feedback, 400–700 ms for entrances, and an opening sequence around one second or less. Tune after observing the prototype.

Preserve native scrolling. Keep content available if animation fails. Use real links and controls, visible keyboard focus, meaningful image descriptions, and touch-friendly actions. Avoid making hover the only way to discover information. Respect the operating system's reduced-motion preference by disabling nonessential movement and parallax.

## Codex skills and tools

Skills provide repeatable instructions; animation libraries produce the actual browser effects. Neither guarantees quality without visual inspection and iteration. Official Codex skill guidance: https://learn.chatgpt.com/docs/build-skills

### Already available in this environment

| Skill | Planned use |
| --- | --- |
| `21st-ui-explore` | Compare visual directions in the next design stage if useful |
| `21st-ui-build` | Implement the selected direction using shared project styles and components |
| `21st-cli-use` | Find relevant component patterns where reuse helps |
| `21st-ui-review` | Check coherence, responsive behavior, accessibility, and interactions |
| `computer-use` | Inspect and exercise the running website in a browser |
| `imagegen` | Optional original supporting artwork after the content and visual needs are clear |

Use 21st results selectively so individual components fit the portfolio's common art direction. Hosted 21st generation is conditional on account access; the plan does not depend on it.

### Useful additional skills, researched but not installed

The official GSAP skills collection supports Codex and includes `gsap-core`, `gsap-timeline`, `gsap-scrolltrigger`, `gsap-react`, and `gsap-performance`. Those are the relevant subset for coordinated openings, scroll effects, React lifecycle handling, and animation performance.

Source: https://github.com/greensock/gsap-skills

### Proposed implementation stack

Use Next.js with TypeScript for the site, shared CSS variables and reusable components for consistency, and GSAP with ScrollTrigger for the signature motion. Use CSS for straightforward hover/focus feedback. This is a recommendation, not a prerequisite for the design.

ScrollTrigger supports viewport-triggered and scroll-linked animation. GSAP's matchMedia can adapt effects to viewport and reduced-motion preferences. Motion for React is a credible alternative if the prototype calls for simpler component transitions; select the engine after the motion study rather than introducing overlapping responsibilities.

- Next.js: https://nextjs.org/docs/app/getting-started
- ScrollTrigger: https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- Responsive and reduced-motion GSAP: https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/
- Motion accessibility: https://motion.dev/docs/react-accessibility
- W3C guidance on interaction animation: https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html

## Collaboration and delivery plan

1. **Direction — this brief.** Establish the shared composition, palette, four-section narrative, and motion principles. All remain proposals until refined together.
2. **Content and positioning.** Use the owner's role, intended audience, experience, projects, and assets to establish the main message and choose the evidence. Do not invent credentials, results, or availability.
3. **Visual study.** Compare a small set of meaningful hero/project compositions in desktop and mobile views, then choose one coherent direction.
4. **Motion study.** Prototype the opening, one project interaction, and a section transition. Judge feel and usability in the browser before repeating them across the site.
5. **Complete build.** Implement all four sections with actual content, shared components, responsive layouts, metadata, optimized assets, and finished contact behavior.
6. **Review and release.** Check keyboard/touch use, reduced motion, contrast, links, image loading, overflow, and performance on representative screen sizes. Run the production build. Store code in GitHub and connect the repository to Vercel for preview review and production deployment.

Vercel's Git integration can create previews from branch changes and production deployments from the configured production branch. Use previews for review before merging a release: https://vercel.com/docs/git

## Information to supply in the next stage

Role and intended opportunities; intended audience; short professional story; selected experience; strongest projects with personal contribution and supported outcomes; available portrait/work assets; preferred language; contact and professional links.

The next creative decision should be driven by those facts: what a visitor should understand about this person within the first few seconds.
