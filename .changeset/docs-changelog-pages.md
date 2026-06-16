---
"@nordcom/nordstar-docs": patch
---

Add a Changelog section to the documentation site, generated from each
package's `CHANGELOG.md` at build time.

- A `/docs/changelog` overview lists every published package with its latest
  version and most recent human-authored highlight; the umbrella
  `@nordcom/nordstar` is featured at the top.
- Per-package pages (`/docs/changelog/<package>`) render the full release
  history as a vertical timeline with semver-level badges, PR / commit / author
  references, and rich entry bodies.
- Automated dependency bumps (renovate `Deps:` entries and changesets'
  `Updated dependencies` rollups) are collapsed behind a per-release
  "N dependency updates" disclosure so human-authored changes stay prominent.

A pure, unit-tested parser (`src/lib/changelog/parse.ts`) turns the changesets
markdown into a typed block/inline structure; `scripts/generate-changelogs.ts`
emits the data alongside the existing props/examples generators. Covered by unit
tests for the parser and Playwright end-to-end tests for the pages.
