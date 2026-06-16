# CLAUDE.md

<!-- cspell:ignore behaviour colour organisation cancelled analyse Nordstar Nordcom -->

## Toolchain corrections

LLM defaults that would otherwise be wrong here:

-   **Biome only** for lint + format. No ESLint, no Prettier. The config is `biome.jsonc` (`.prettierignore` / `.hintrc` are legacy and unused). `pnpm lint` lints; `pnpm format` writes; `pnpm ci` is the read-only gate (`biome ci .`).
-   **`pnpm build:packages` before working on the docs app, lint, typecheck, or test in a fresh checkout** — every consumer (`docs`, cross-package imports) resolves `@nordcom/nordstar-*` from each package's built `dist/`, not source. `pnpm dev:docs` builds packages first for this reason.
-   **Use `pnpm <script>` whenever a `package.json` script exists** — `pnpm test`, `pnpm build`, `pnpm lint`, `pnpm typecheck`, `pnpm test:e2e`, `pnpm format`, etc. Extra args forward through (`pnpm test --project …`). If a script doesn't forward args, fix the script in `package.json`, don't bypass it. Scripts run through `turbo`; there is no `dotenv` wrapper — don't add one.
-   **`pnpm create:component`** scaffolds a new component package through plop (`plop/plopfile.js`) — the `packages/components/<name>` skeleton, its test, and the umbrella re-export. Use it instead of hand-rolling a package.
-   **`pnpm generate`** (the `docs` workspace) regenerates the docs data set — component `examples`, `props` tables, and package `changelogs`. It runs automatically via `predev`/`prebuild`/`pretypecheck`, so you rarely call it directly. Its multi-MB output `docs/src/content/changelogs.generated.json` is **git-ignored** (regenerated on demand); the tiny props/examples counterparts are committed.

## Code intelligence

Prefer LSP over `Grep`/`Read` for navigation — faster, precise, no whole-file reads.

-   **Find a symbol by name → `lspmesh` MCP** (`find_symbol`, `find_references`). The built-in LSP tool has **no `query` param**, so its `workspaceSymbol` always returns nothing ([claude-code#30948](https://github.com/anthropics/claude-code/issues/30948)). The `lsp-symbols` server fills that gap; opt-in per machine — see `.claude/mcp/README.md`. If it isn't connected, fall back to `Grep` for the name, then point position-based LSP ops at the hit.
-   The remaining built-in LSP ops are position-based (`filePath` + `line` + `character`):
    -   **`findReferences`** for every usage across the repo.
    -   **`goToDefinition` / `goToImplementation`** to jump to source.
    -   **`hover`** for type info without opening the file.
    -   **`documentSymbol`** to list a file's symbols (works; it's file-scoped).
-   **Check LSP diagnostics after writing or editing code** and fix errors before moving on.

## Spec, plan & task paths

Applies to every spec-driven workflow — superpowers (`writing-plans`, `executing-plans`, `brainstorming`), `claude-mem:make-plan`/`do`, and any other tool that emits specs, plans, or task lists.

Group artifacts per topic under `.specs/<YYYY-MM-DD-kebab-slug>/{spec,plan,tasks}.md` — e.g. `.specs/2026-06-15-select-keyboard-nav/spec.md`, `…/plan.md`, `…/tasks.md`. Never write specs/plans/tasks to `.claude/`, the tool's default location, the project root, or the retired `docs/superpowers/` directory.

## Architecture (non-obvious only)

-   **This is a component library, not an app.** Each UI primitive is its own package `@nordcom/nordstar-<name>` under `packages/components/<name>`, and they are re-exported through the umbrella `@nordcom/nordstar` (`packages/core/nordstar`). Shared primitives, utilities, and types (`cn`, `forwardRef`, `As`, `NordstarColor`) live in `@nordcom/nordstar-system` (`packages/core/system`). The single `docs` app (Next.js) renders the library.
-   **Packages build to `dist/`; consumers import the built output, not source.** That's why `pnpm build:packages` comes first. turbo orchestrates the graph.
-   **Components are polymorphic via `forwardRef`.** Use `forwardRef<'button', Props>` from `@nordcom/nordstar-system` (gives the `as` prop and typed ref). New components follow this pattern, scaffolded by `pnpm create:component`.
-   **Styling is Tailwind v4 (CSS-first).** No `tailwind.config.*` — the token source is the `@theme` block in `packages/core/nordstar/src/styles/tailwind.css` (shipped in the umbrella package); the docs app layers `docs/src/styles/globals.css`. Variants are expressed with `cva` (`class-variance-authority`) composed through `cn`. Consume tokens via v4 utilities (`bg-primary`, `text-primary-foreground`, `rounded-sm`, `ease-out-soft`), not raw hex.
-   **The docs site is a static export** (`output: 'export'`, `trailingSlash: false`) served behind a `/nordstar` base path — it's the artifact GitHub Pages ships and the one the e2e suite drives.

## Coding conventions

-   **`noUncheckedIndexedAccess: true`** — index access is `T | undefined`. Don't paper over with `!`.
-   **Let Biome format; don't hand-format.** 4-space indent, single quotes, semicolons, trailing commas, sorted imports/keys/props are enforced — the edit hook runs `biome check --write` for you. Don't fight it.
-   **JSDoc on exported components.** Every public component carries a JSDoc block with a purpose line and a usage example — match the existing components (`packages/components/button/src/button.tsx` is the reference). Same no-fluff rule applies: describe intent and contract, not implementation.
-   **No unused variables, parameters, or imports.** `noUnusedLocals` / `noUnusedParameters` are on — delete them, don't suppress with a leading underscore, `void` casts, or `// biome-ignore`. The only exception is destructured rest patterns where named keys are genuinely discarded to build the rest (`const { skip, ...rest } = props`).
-   **Comments must earn their place.** Document the WHY — hidden constraints, workarounds, surprising behavior. If the code already says it, no comment. No section headers, no task notes, no restatements.
-   **Server Components by default in the docs app.** Add `'use client'` only when needed (hooks, event handlers, browser APIs). Next.js async APIs (`params`, `searchParams`, `cookies()`, `headers()`) are promises — `await` them.
-   **Root cause before symptom.** Don't revert versions, return empty arrays, or disable features as a first-guess fix.
-   **American English** — `color`, `behavior`, `organization`, `canceled`, `analyze` (per `CONTRIBUTING.md`).

## E2E coverage

Every new user-facing component behavior in a `packages/components/*` primitive ships with a Playwright spec under the root `e2e/` dir (`*.spec.ts`). A behavior added without e2e coverage is incomplete — treat the spec as part of the change, not a follow-up. Unit tests are vitest specs (`*.test.tsx`) colocated in the package.

-   **Drive the real exported docs site, not mocks.** Playwright (`pnpm test:e2e`) serves the statically-exported docs via `docs/scripts/serve-export.mjs` behind the `/nordstar` base path on port `4321`; `reducedMotion: 'reduce'` is forced so entrance animations resolve instantly and interactions stay deterministic.
-   **`pnpm test:e2e:build`** builds the docs first, then runs Playwright — use it after package changes so the export reflects your code. `pnpm test:e2e` alone reuses an existing export/server.
-   **`pnpm test`** runs the vitest suite with coverage across all packages.
-   Keep specs deterministic — assert on stable roles/test-ids and the reduced-motion end state, not on mid-animation timing.

## Git commits

-   **Conventional Commits with scope** — `<type>(<scope>): <subject>.`. Types: `feat`, `fix`, `chore`, `refactor`, `docs`, `test`, `perf`, `ci`, `build`. Imperative subject, lowercase, trailing period.
-   **Body explains the WHY**, not the WHAT — motivation, hidden context, trade-offs, breaking-change notes. Skip the body entirely if subject + diff are self-explanatory.
-   **Never merge — always rebase.** No merge commits on any branch. Integrate via `git rebase` (or `git pull --rebase`). If a PR can't fast-forward, rebase the branch onto the target before merging.
-   **Prefer amend over fixup commits.** When iterating on the most recent commit (review feedback, typo, missed file), `git commit --amend` rather than stacking a `fixup!` / follow-up commit. Only create a new commit when the change is logically distinct or the prior commit is already pushed and shared.

## Changesets

Touching any publishable package requires a changeset (`pnpm changeset`) — the `ignore` list in `.changeset/config.json` is empty, so every `packages/**` change counts. Pick the level per semver: `patch` for bugfix/internal-only, `minor` for additive API, `major` for breaking change. One changeset per logical change. Summary follows the same WHY-only rule as commit bodies.

## Agent skills

### Issue tracker

GitHub Issues at `NordcomInc/nordstar`, driven by the `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage labels

Canonical five — `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context — `CONTEXT.md` at the repo root (optional glossary), with historical decisions in `.specs/<YYYY-MM-DD-kebab-slug>/`. No ADRs. See `docs/agents/domain.md`.
