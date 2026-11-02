# Santiago Vélez — personal portfolio build plan

## Objective and execution contract

Build a distinctive, professional personal portfolio for **Santiago Vélez (Santi)**. Use Codex to implement the website, GitHub to store the code, and Vercel for deployment. The experience is one scrolling page with four main sections: **Home, About me, Projects, Contact**.

The creative direction is **Editorial Voltage**: monumental typography, carefully cropped monochrome imagery, precise editorial composition, strong light/dark contrast, and one violet accent. Motion should make the site feel responsive and alive while preserving readability and straightforward navigation.

This file is self-contained. If the following files are present, consult them for additional source detail:

- `PORTFOLIO-CREATIVE-BRIEF.md`: original visual interpretation and design rationale.
- `PORTFOLIO-CONTENT-INVENTORY.md`: detailed source inventory, project narratives, and source inconsistencies.
- `reference/Santiago-Velez-source-resume.pdf`: archived source résumé, with unresolved education labels.

Read applicable repository instructions and inspect the existing project before making changes. If implementation already exists, continue from it. Preserve unrelated user work.

Execute phases in order, checking each phase's completion criteria before continuing. Make routine implementation choices autonomously. Missing optional content should not block a working site: omit an unsupported field and record the gap. Ask only when a necessary decision cannot be resolved from this plan or the workspace. Keep a concise completion record in `BUILD-PROGRESS.md` so subsequent sessions can resume.

Default delivery is a complete, locally reviewable website with production-ready source. GitHub publishing and Vercel deployment follow when those actions are requested or already authorized and the relevant accounts/destination are available. Do not substitute another hosting platform.

## Phase 1 — Project foundation

### Technology choices

| Responsibility | Choice | Reason |
| --- | --- | --- |
| Application | Next.js App Router + React + TypeScript | Structured components, static rendering, metadata, image/font tools, Vercel integration |
| Styling | Global CSS variables + CSS Modules | One explicit design system with scoped component styles |
| Animation | GSAP + ScrollTrigger + `@gsap/react` | Coordinated entrances, scroll-linked effects, scoped React cleanup |
| Small interactions | CSS transitions | Direct hover/focus feedback without unnecessary JavaScript |
| Icons | A small consistent set of SVG icons | Clear, lightweight arrows and interface controls |
| Content | Typed local data | Easy editing and transparent source content without a CMS |
| Images | Local assets with `next/image` where appropriate | Stable assets, responsive sizing, optimized delivery |
| Fonts | Locally bundled licensed fonts, loaded with `next/font/local` | Predictable rendering and no runtime third-party font dependency |
| Source control | Git + GitHub | Reviewable history and deployment integration |
| Deployment | Vercel Git integration | Branch previews and production releases |
| Validation | TypeScript, ESLint, production build, browser checks | Catch code failures and verify the actual experience |
| Focused interaction checks | Playwright; axe where available | Navigation, dialogs, keyboard behavior, responsive and accessibility checks |

Use a current stable Next.js release and a supported Node.js LTS version, verified against official documentation when initializing. Use one package manager, defaulting to npm for a new repository, and commit its lockfile. Record the supported Node version in project configuration. Avoid canary packages.

Core runtime dependencies: `next`, `react`, `react-dom`, `gsap`, `@gsap/react`. Add TypeScript, required type packages, ESLint, and its Next.js configuration as development dependencies. Add testing packages only for the checks implemented. Do not add a second animation engine for the same effects.

No database, authentication, CMS, analytics, or contact-form backend is required for the initial portfolio. Use a visible email link for contact. Add integrations only when the owner requests a concrete feature.

### Suggested organization

```text
app/
  layout.tsx
  page.tsx
  globals.css
  icon.svg
  opengraph-image.tsx
components/
  navigation/
  home/
  about/
  projects/
  contact/
  shared/
data/
  portfolio.ts
public/
  images/
  fonts/
docs/
  design-system.md
  content-notes.md
  asset-sources.md
```

Keep static content server-rendered where possible. Isolate browser events and animation in small client components. Ensure browser APIs run only on the client.

**Complete when:** the app runs locally; scripts exist for development, type checking, linting, and production builds; content and component boundaries are established; `.gitignore` excludes generated output, local caches, dependencies, and secrets.

## Phase 2 — Establish the visual system

### Art direction

Use these six reference lessons together:

| Reference | Translate into the portfolio |
| --- | --- |
| GAZU fashion page | Oversized lettering, portrait/type overlap, alternating light/dark bands |
| The Weeknd editorial page | Split compositions, monochrome imagery, numbered content |
| Close-cropped portrait poster | Strong image crop, quiet metadata, optional restrained texture |
| RUE STUDIO gallery | Generous whitespace and carefully curated image sequences |
| A$AP editorial page | Cropped display type and a memorable relationship between text and imagery |
| Nike ACG page | One accent-color plane, asymmetry, concise technical annotations |

The supplied reference images are inspiration for composition. Their brand names, people, product copy, and navigation are not portfolio content or assets to reuse.

### Color

Define semantic tokens centrally. Starting palette:

```css
--paper: #f1f0eb;
--ink: #101010;
--accent: #7441e8;
```

Use neutral grays for secondary text and rules. These are the only UI color families. Adjust the violet slightly if actual text/background contrast requires it, then update the single shared token.

- Make black and paper the dominant surfaces.
- Use violet for primary actions, active navigation, focus where contrast permits, and a few intentional graphic moments.
- Use scale, weight, placement, and spacing to communicate hierarchy alongside color.
- Project artifacts may retain original colors when needed to represent the work accurately; their surrounding interface remains coherent.
- Suggested section rhythm: paper Home → ink About → paper Projects → ink Contact.

### Typography and layout

- Choose a heavy grotesk sans serif for display text and a readable sans serif for body copy; optionally use one restrained monospaced style for labels. Prefer no more than two font families in total.
- Select fonts after a small browser study. Use properly licensed local font files and record their source/license. Avoid mixing unrelated type styles across sections.
- Use fluid type with bounded `clamp()` values. Display text can be enormous; body text remains comfortable at approximately 16–18 px or larger where appropriate.
- Use uppercase selectively for short navigation, metadata, section numbers, and labels. Keep paragraphs in normal sentence case.
- Set readable body measure, roughly 55–75 characters per line, and sufficient line height.
- Start with a 12-column desktop grid, 6-column tablet grid, and 4-column mobile grid. Define shared page gutters, maximum content width, and a spacing scale.
- Balance deliberate asymmetry with consistent alignment. Pair large headlines with small but legible metadata.
- Use thin rules, sharp image frames, section numbers, and a single arrow/icon treatment. Keep corners and button geometry consistent.
- Different sections may use different compositions; shared tokens and primitives maintain coherence.
- Prioritize editorial image/text arrangements over repeated generic card grids.

### Imagery and assets

- Prefer real owner portraits and work imagery. Obtain assets from supplied files or the owner's published source site, recording provenance.
- Source site: https://unreal-items-351168.framer.app/
- Existing portrait asset observed on its Projects page: https://framerusercontent.com/images/hAaCvWqOZoe4xXr0KEh4A5aE0VI.png?width=1086&height=1448
- Inspect the portrait before integrating it. Crop and use a reversible CSS monochrome treatment where it suits the composition; preserve the original asset.
- Keep facial features and essential image content visible at all breakpoints.
- Optional grain should be subtle and static, confined to art surfaces. Preserve crisp text and screenshots.
- Use local optimized assets rather than depending on production hotlinks.
- If work screenshots are missing, create honest typographic/diagrammatic project artwork. Never present invented product screens, generated portraits, or stock imagery as proof of the owner's work.
- Treat the old Framer site as a content/asset source. Its components and design system are not the default foundation. Adapt specific components later only when requested, restyling them to this system.

Record the chosen typefaces, tokens, spacing, image treatments, component geometry, and motion rules in `docs/design-system.md`.

**Complete when:** a representative desktop and mobile composition demonstrates the chosen typography, palette, image treatment, buttons, metadata, and spacing; all repeated styles have shared tokens or primitives.

## Phase 3 — Build the four sections

### 01 — Home (`#home`)

Goal: establish identity, role, and relevance in the opening viewport.

- Name: **Santiago Vélez**; a conversational “Santi” can appear in supporting copy.
- Role: **Client Relationship Manager**.
- Location: **Medellín, Colombia**.
- Message: connects client needs, data, and cross-functional teams to build thoughtful, resource-aware solutions.
- Use large name/identity typography, a defining portrait or real-work composition, a short readable positioning statement, and a clear **View projects** link.
- Keep role and key actions fully readable even if decorative display lettering is cropped.
- Add compact navigation linking all four sections. Show the active section with a visible indicator.
- Express personality through composition and writing; leave unconfirmed availability or employment claims out of the hero.

### 02 — About me (`#about`)

Goal: explain the person, working approach, and relevant experience.

- Introduce five years of experience across SaaS and marketing account relationships, framed as the owner's supplied background rather than recalculated tenure.
- Explain the bridge between client needs and efficient resource allocation.
- Include selected experience from VirtualSoft and bb.q Chicken, using the reference facts below.
- Show capabilities in a compact editorial arrangement, not arbitrary skill percentage meters.
- Include a brief human note about animals, writing, technology, and continued learning.
- Languages: native Spanish, C1 English, B2 Portuguese.
- Use a large statement, concise paragraphs, and structured experience details with generous spacing.
- Omit education from public copy until the institution/qualification pairings are confirmed. Employment dates can be omitted without blocking the build.

### 03 — Projects (`#projects`)

Goal: demonstrate contribution, judgment, and outcomes.

- Give this section the largest share of the page.
- Lead with **Path to El Dorado** and **Landing a Korean-giant in Medellín**.
- Each professional entry includes a title, context, personal contribution, substantive summary, and supported results where available.
- Provide a real way to read project details. Prefer accessible inline expansion or native dialog for this four-section version; add separate case-study routes if content warrants them.
- A dialog must have a visible close control, meaningful title, Escape dismissal, managed focus, and focus restoration. Inline expansion must use a real button with an accurate expanded state.
- Present bb.q Chicken as a concise project based on known experience facts; do not reuse the duplicate El Dorado narrative from its old route.
- Add a secondary **Personal creations** area for Trai, DNS Switch, Maelström, Sweetspot Desert, and JobHub. Show only working, source-backed actions.
- Use large project imagery or original editorial artwork, careful cropping, shared metadata styles, and consistent hover/focus feedback.
- For projects without public destinations, offer substantive on-page details instead of a dead link.
- Exclude the unfinished “Future Tech” entry from completed work.

### 04 — Contact (`#contact`)

Goal: make a conversation easy to start.

- Use a large closing invitation such as “Let’s build something meaningful.” Treat this as editable proposed copy.
- Display **santiagovl96@gmail.com** and provide a real `mailto:` action.
- An optional copy-email button must have success and failure feedback in an accessible live region, and preserve the visible email as a fallback.
- A LinkedIn link can be added after confirming the mismatch described below. Until then, email is a complete contact path.
- Include a back-to-top action and compact footer with name and current year.

**Complete when:** all four anchors work; all visible controls have real behavior; real content fills the page; project details and email contact work; mobile content is deliberately recomposed rather than merely reduced in size.

## Phase 4 — Add motion and responsive interaction

Build a small repeated motion vocabulary, with one dominant gesture at a time. Keep native browser scrolling.

| Surface | Default behavior | Touch / reduced-motion equivalent |
| --- | --- | --- |
| Opening | Coordinated title/image reveal, about one second or less | Immediate content or a brief fade |
| Section entrances | Restrained vertical movement and opacity with consistent stagger | Minimal fade or immediate content |
| Hero image | Subtle scroll-linked movement inside its frame | Static image |
| Navigation | Active-section indicator, animated underline | Clear selected state and accessible mobile menu |
| Project images | Small scale/crop shift, responsive arrow, optional pointer-following preview | Persistent image and explicit action |
| Cursor | Optional small violet follower or contextual “View” cue over project imagery | Disabled on touch and reduced motion |
| Contact actions | Crisp hover/focus response and copy confirmation | Equivalent keyboard and tap feedback |

- Start with 150–250 ms for direct feedback and 400–700 ms for entrances. Tune in the browser.
- Use `gsap.matchMedia()` to respond to breakpoints and `prefers-reduced-motion`, including preference changes while the page is open.
- Scope animations with `useGSAP` and refs. Clean up animations, observers, and event listeners on unmount or dependency changes.
- Animate transforms and opacity where practical. Avoid layout thrashing and unnecessary React re-renders on pointer movement.
- If a cursor enhancement is used, preserve normal pointer behavior and disable decorative overlays over dialogs or controls as needed.
- Keep essential content available if JavaScript or animation fails. Avoid an entrance state that leaves the page invisible after an error.
- Preserve keyboard navigation, focus visibility, text selection, browser back behavior, and ordinary scrolling. Avoid forced scroll snapping or extended pinning that impedes browsing.
- Mobile menus must support a named trigger, accurate expanded state, Escape dismissal, and predictable focus behavior.

**Complete when:** the opening, one full project interaction, all entrances, navigation, and contact feedback work across pointer, keyboard, touch, and reduced-motion use; scrolling stays responsive; repeated navigation does not accumulate effects or listeners.

## Phase 5 — Verify and polish

### Functional and visual checks

- Review actual rendered desktop, tablet, and mobile layouts. Include representative widths of 1440, 1024, 768, 390, and 320 px, plus a wide desktop check.
- Check long headings, accented characters, email wrapping, image crops, scroll offsets under fixed navigation, and horizontal overflow.
- Verify section links, active navigation, mobile menu, project views, external links, copy-email feedback, and back-to-top behavior.
- Test keyboard-only use and Escape/focus restoration. Essential content must never depend on hover.
- Check reduced motion, visible focus, meaningful alt text, semantic heading order, landmark structure, and accessible control names.
- Aim for WCAG 2.2 AA: verify actual color pairs, adequate touch targets, and readable zoomed content. Use 44 px touch targets where practical.
- Check both mouse hover and keyboard focus styling for visual coherence.
- Review browser errors, image/font loading, and animation cleanup.

### Build and performance

- Run TypeScript checks, lint, and the production build. Fix errors before delivery.
- Use focused behavior checks for navigation, menu/dialog lifecycle, and contact feedback; avoid tests that merely mirror static markup.
- Optimize image dimensions, formats, loading priority, and responsive `sizes`. Reserve layout space to prevent shifts.
- Keep the hero asset prioritized and below-fold assets lazy-loaded. Limit font weights and large JavaScript dependencies.
- Measure a production build with Lighthouse or equivalent when available. Use LCP ≤2.5 s, CLS ≤0.1, and INP ≤200 ms as targets, not unverified claims. Record measurement conditions and distinguish lab checks from field data.
- Add a favicon, page title/description, and an original social preview image matching the visual system. Set canonical URLs and sitemap/robots configuration only with the correct production origin.
- Report checks actually performed and any verification limits.

**Complete when:** required code checks pass; the site has been visually inspected on desktop/mobile; key interactions and reduced motion have been exercised; there are no known blocking layout, navigation, or accessibility defects.

## Phase 6 — GitHub and Vercel handoff

- Write a concise README covering setup, scripts, content editing, asset provenance, and deployment.
- Keep the owner's content in a clearly editable typed data file. Document unresolved fields in `docs/content-notes.md`.
- Prepare clean, reviewable commits; exclude generated output, caches, dependencies, secrets, and unnecessary reference renders from the repository.
- When repository publication is authorized, use the specified GitHub account/repository. If the destination is missing, finish the local build and request only the needed destination information.
- When deployment is authorized, connect that repository to Vercel, verify framework/build settings, and create a preview for review.
- Use a feature branch and preview deployment for subsequent design changes; release through the configured production branch.
- Configure a custom domain only when supplied. Verify the actual deployed URL and key production behavior.
- Do not claim publishing or deployment succeeded without a successful result.

**Complete when:** source and setup instructions are ready for another developer; authorized publishing/deployment is verified, or the exact remaining account/destination dependency is clearly reported.

## Reference A — Owner content

The facts below came from the owner's site and linked résumé on November 1, 2026. They are owner-published statements, not independently audited results. Use clear personal attribution and preserve the distinction between the individual's contribution and team outcomes.

### Identity and approach

- **Name:** Santiago Vélez / Santi.
- **Title:** Client Relationship Manager.
- **Location:** Medellín, Colombia.
- **Background:** Five years growing/managing accounts across SaaS and marketing; leadership of interdisciplinary teams of 5–10.
- **Approach:** Client ownership, efficient resource allocation, creative and human solutions, data-informed decisions, agile collaboration.
- **Recurring metaphor:** Gardening, fostering, and building relationships with clients, colleagues, and stakeholders.
- **Personal interests:** Animals, writing, technology, continuous learning.
- **Personal themes:** A reliable partner, a relationship botanist, a bridge, a builder, an ally, and a continuous learner.
- **Current affiliation in source:** “Currently working @Nucleo.” Role, dates, and responsibilities are missing; omit detailed current-employer claims until confirmed.

### Experience

| Organization / role | Supported content |
| --- | --- |
| **VirtualSoft — SaaS Account Manager** | Managed eight iGaming SaaS accounts within a USD 3 million portfolio; translated client requests into briefs and coordinated product owners, developers, analysts, implementation and commercial teams; participated in product/sprint backlog work; CSAT moved from 71% to 86%; collaborated on 8+ campaigns associated with a 26% DAU/MAU uplift. Portfolio value basis is unspecified, so do not label it ARR or revenue. |
| **bb.q Chicken MF Colombia — Procurement & Business Development** | Helped bring the Korean fried-chicken franchise to Medellín; developed go-to-market inputs including ideal customer profile, local insights, pricing, brand tone and localization; established supply-chain relationships for 70+ raw materials; connected 15+ local collaborators; helped secure the Provenza location and key providers. |
| **bb.q Chicken MF Colombia — Chief Brand Officer** | Directed an eight-person team overseeing identity, reputation and marketing for Colombia; transferred global guidelines and know-how to local teams; supervised the marketing calendar, content, audiovisual productions, influencer collaborations and budgets. The source groups ATV, interaction and monthly sales improvements under “up to 1.65×”; use qualitative results until the scope of that factor is clarified. |

The sources provide no employment dates. Preserve accurate roles without inventing chronology or dates.

### Skills and languages

- **Project management:** Roadmapping, A/B testing, user research, OKRs, Agile/Scrum.
- **CRM:** Salesforce, HubSpot, Optimove.
- **Tools:** Python, Jira, Slack, Figma, APIs.
- **AI literacy:** Hermes, Codex, Claude, models, harnesses, skills, MCPs.
- **Interpersonal:** Assertive communication, active listening, curiosity, empathy, teamwork.
- **Languages:** Native Spanish; C1 English; B2 Portuguese.
- The résumé claims Scrum certification but provides no credential/provider/date. Confirm details before displaying a specific certification badge.

### Portfolio-wide metrics

The source displays **8+ accounts**, **20+ campaigns**, **400+ requests**, and **5+ teams**. Requests include scoping/documentation and triage; teams include commercial, marketing, development, implementation, and support. Keep these as portfolio-level figures unless their scope is clarified. The 20+ campaigns figure is separate from the VirtualSoft role's 8+ campaigns.

Use precise outcome wording: CSAT 71% → 86% is **+15 percentage points**. Customer retention 20% → 55% is **+35 percentage points**, not a relative 35% increase.

### Professional project: Path to El Dorado

- **Context:** VirtualSoft / Doradobet; iGaming engagement and retention.
- **Challenge:** Newly acquired players often churned within two months.
- **Duration:** Eight months; dates not supplied.
- **Santi's contribution:** Translated the account owner's concern into a brief; brought marketing and commercial teams together; facilitated brainstorming; managed the request pipeline; coordinated backlog follow-through; presented the joint proposal to the client.
- **Concept:** An eight-month leaderboard tournament, structured as a thematic journey through Ecuador.
- **Route:** Otavalo, Quito, Cotopaxi, Quilotoa Loop, Baños de Agua Santa, Cuenca & Cajas, Guayaquil, Galápagos Islands.
- **Mechanics:** Points from eligible casino/sportsbook engagement, referrals, winning streaks, and top-ups; monthly rewards for five leaderboard leaders.
- **Rewards:** Monthly credit, shirts, coupons, loyalty points and gift cards. Final prizes: a three-day/two-night Galápagos trip, iPhone 14 Plus, PlayStation 5, USD 300 cash, USD 200 platform credit.
- **Reported outcomes:** Retention 20% → 55%; approximately 26% average DAU/MAU uplift after an initial increase above 35%; GGR +6% during campaign months.
- **Learning:** Aligning the right teams around a shared client problem and turning it into an actionable proposal.
- **Source:** https://unreal-items-351168.framer.app/case-study-01

Measurement methodology is absent from the source. Attribute reported results to the campaign; avoid asserting that Santi alone caused them.

### Professional project: Landing a Korean-giant in Medellín

- **Context:** bb.q Chicken local market entry.
- **Published subtitle:** Market Research & Procurement for the most renowned K-chicken franchise.
- **Available content:** Use the procurement/business-development facts above to build a concise, substantive summary.
- **Source gap:** `/case-study-02` currently duplicates El Dorado. Its story and retention/revenue metrics do not belong to this project.

### Personal creations

| Project | Content | Destination |
| --- | --- | --- |
| **Trai / TRAI** | System-tray companion for Codex and Claude; refreshes every minute and displays remaining five-hour/weekly usage. Source card calls it a token-measuring buddy, while its detail describes usage remaining; use the latter precise description. | No verified public destination supplied; use on-page details. |
| **DNS Switch** | Script for switching among Cloudflare, Google, Quad9, or ISP DNS providers. | No verified public destination supplied; use on-page details. |
| **Maelström** | Chrome new-tab replacement with an editable launchpad and a 25/5/15 focus timer. | https://chromewebstore.google.com/detail/maelstr%C3%B6m-%E2%80%94-focus-new-tab/jpmfgjobljmbplmifddfhinpegiladde?hl=es-419 |
| **Sweetspot Desert** | Curated ReShade visual tweaks for Crimson Desert. | https://www.nexusmods.com/crimsondesert/mods/532?tab=description |
| **JobHub** | Job-hunting hub that fetches/scores positions and includes a manual launchpad. | https://github.com/svnthcrtr/strider-jobhunting-ui |

“Future Tech” is an incomplete source entry with “Project description coming soon”; exclude it from finished projects. Verify external project destinations before presenting them as live actions.

### Contact

- **Email:** santiagovl96@gmail.com.
- **LinkedIn printed text:** `linkedin.com/in/santiagovelez`.
- **Actual embedded résumé link:** https://www.linkedin.com/in/santiago-velez-lotero-igwt777/
- Confirm the intended LinkedIn URL before adding it to final public copy. No phone number is supplied.

### Education — unresolved source associations

The résumé visibly associates EAFIT University with “School & Highschool Degree,” Albright Institute with “Conversational English: C1 Certified,” Australian Institute of Professional Education with “IT & Marketing Diploma,” and San Jose de las Vegas with “International Negotiator - Bachelor.” Locations are Medellín for EAFIT/San Jose and Sydney for Albright/AIPE.

The EAFIT/San Jose pairings appear inconsistent. Record these facts in content notes; publish education only after the owner confirms the correct associations. No education dates are available.

### Content boundaries

The old site's Acme Corp., Dunder Mifflin, Monsters, Inc., and Pizza Planet names are explicitly fictional workflow examples. Do not present them as clients, employers, endorsements, or completed work. Ground all credentials, roles, results, links, and availability statements in supplied facts.

## Reference B — Skills and tooling for Codex

Skills guide the workflow; libraries implement the website. Use relevant skills when available, inspect their instructions, and adapt to the actual project. A missing optional skill should not block work that can be completed with normal coding tools and official documentation.

| Skill | Application |
| --- | --- |
| **21st-ui-build** | Primary implementation workflow: project design context, shared components, responsive/accessibility requirements |
| **21st-cli-use** | Search useful component patterns before implementing; retrieve/adapt only results that fit the art direction |
| **21st-ui-review** | Review design-system consistency, responsive risks, accessibility, and interactions |
| **21st-ui-explore** | Optional meaningful composition comparisons if the visual direction needs refinement |
| **computer-use / browser tooling** | Inspect the rendered site, test controls, and review desktop/mobile states |
| **imagegen** | Optional supporting artwork only when a concrete bitmap need exists; use real portraits for identity |
| **GSAP official skills** | `gsap-core`, `gsap-timeline`, `gsap-scrolltrigger`, `gsap-react`, `gsap-performance` for motion implementation |
| **Writing for Agents** | Keep project instructions and resumable progress notes clear |

The 21st skills were available in the planning environment. The GSAP collection was researched but not installed. Verify availability in the target Codex session rather than assuming installation.

For 21st, initialize design context as its skill directs and search for specific editorial navigation/project/motion needs. Use the results selectively; existing references and shared project tokens govern the visual direction. Hosted 21st generation is optional and requires explicitly enabled account access. Ordinary implementation must remain possible without paid generation.

Official GSAP skills: https://github.com/greensock/gsap-skills. Install through an available skill installer or the repository's documented instructions if useful and permitted. A skill is not a runtime dependency and should not be shipped to the browser.

### Primary documentation

- Next.js: https://nextjs.org/docs/app/getting-started
- GSAP React integration: https://gsap.com/resources/React/
- ScrollTrigger: https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- Responsive/reduced-motion GSAP: https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/
- Animation accessibility: https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html
- Codex skills: https://learn.chatgpt.com/docs/build-skills
- Vercel Git integration: https://vercel.com/docs/git

## Final delivery checklist

- [ ] Four complete sections with coherent desktop and mobile compositions.
- [ ] One violet accent within a disciplined monochrome editorial system.
- [ ] Owner-backed content and real project details, with unresolved claims omitted or recorded.
- [ ] Working navigation, accessible project views, and direct email contact.
- [ ] Consistent opening, scroll, hover, focus, and optional cursor interactions.
- [ ] Touch and reduced-motion versions verified.
- [ ] Type checking, linting, production build, and focused behavior checks passed.
- [ ] Actual browser review completed; remaining verification limits documented.
- [ ] Metadata, favicon, social image, optimized assets, README, and editing instructions included.
- [ ] Reviewable local preview provided.
- [ ] GitHub/Vercel actions completed when authorized, with verified destinations and status.

## Suggested kickoff instruction

> Read `plan.md` and the applicable repository instructions, inspect the workspace, and implement the portfolio through the local review stage. Follow the phases and completion criteria, use the supplied owner content, preserve the editorial monochrome/violet system, and verify the actual desktop/mobile experience. Record progress and unresolved content in the indicated files. Continue through routine decisions without asking for repeated confirmation. Prepare the code for GitHub and Vercel; report any missing destination/account information when publication is requested.
