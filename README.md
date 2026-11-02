# Santiago Vélez — portfolio

A four-section editorial portfolio built with Next.js, React, TypeScript, CSS Modules, and GSAP. Real owner content, locally hosted typography and portrait, original project diagrams, native project dialogs, and accessible motion controls.

## Run locally

Use Node.js 24 LTS (see `.nvmrc`) or another supported Node version in `package.json`, then:

```sh
npm ci
npm run dev
```

Open http://localhost:3000. The dev server binds to all interfaces so it can be reviewed from the app's browser. On systems that restrict local server access, run it with the appropriate local execution permission.

## Checks and production

```sh
npm run typecheck
npm run lint
npm run build
npm start
```

Use `npm run format` to format application source and documentation. Browser verification is recorded in `docs/verification.md`; there is no automated browser-test suite yet.

## Edit the portfolio

- `data/portfolio.ts`: experience, skills, professional case studies, personal creations, and identity data.
- `components/home/Home.tsx`, `components/about/About.tsx`, `components/contact/Contact.tsx`: introductory, biographical, and contact copy.
- `app/globals.css`: shared visual tokens and base styles.
- Component `*.module.css` files: section layouts and responsive styling.
- `components/shared/Motion.tsx`: scoped GSAP entrances, portrait movement, and optional project cursor.
- `components/shared/motion-preference.ts`: system preference subscription and the visitor's session-level motion override.
- `app/layout.tsx`, `app/opengraph-image.tsx`, `app/icon.svg`: metadata, social preview, and favicon.

The site follows the system's reduced-motion preference. Visitors can also switch motion in the footer. The override lasts for the current page session and is not stored. The standard pointer remains available.

## Documentation

- `plan.md`: source build plan.
- `BUILD-PROGRESS.md`: completed work and remaining decisions.
- `docs/design-system.md`: chosen visual rules.
- `docs/content-notes.md`: facts and links requiring confirmation.
- `docs/asset-sources.md`: asset provenance and font license.
- `docs/verification.md`: checks performed and practical limits.

## GitHub and Vercel

The project is ready for a GitHub repository and Vercel's Next.js preset. No remote repository, Vercel project, or production domain has been created by this build.

Once destinations are supplied and publishing is authorized:

1. Initialize/connect the intended Git repository and push the source with `package-lock.json`.
2. Import that repository in Vercel using the Next.js preset, `npm run build`, and its default output settings. Choose a supported Node LTS runtime.
3. Set `SITE_URL` to the final HTTPS origin when known. Otherwise Vercel's deployment environment supplies the social-image origin automatically.
4. Review the preview deployment, then release through the configured production branch.
5. Add canonical, sitemap, and domain-specific robots settings after confirming the production origin. They are intentionally absent from the local draft.

No credentials, database, or contact-form service is required. Contact uses an email link and an optional clipboard action with visible feedback. Unconfirmed LinkedIn, education, dates, and the unavailable JobHub repository are excluded from public links or claims.
