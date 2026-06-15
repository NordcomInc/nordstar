# Nordstar

An opinionated React component library for building human-centric user interfaces, published under the `@nordcom/nordstar-*` scope. A pnpm + turbo monorepo: shared core in `packages/core/*`, one package per UI primitive in `packages/components/*`, and a single Next.js `docs` app that renders and documents the library.

## Language

### Packaging

**Umbrella package**:
`@nordcom/nordstar` (`packages/core/nordstar`) — the public entry point that re-exports every primitive and ships the design-system stylesheet/tokens. Consumers install this.
_Avoid_: main package, root package, barrel

**System package**:
`@nordcom/nordstar-system` (`packages/core/system`) — shared primitives, utilities, and types every component depends on (`cn`, `forwardRef`, `As`, `NordstarColor`). Not a UI surface itself.
_Avoid_: core, utils, shared

**Primitive**:
A single UI component shipped as its own package `@nordcom/nordstar-<name>` under `packages/components/<name>` (e.g. `button`, `accordion`, `select`). Scaffolded with `pnpm create:component`.
_Avoid_: widget, element, control

**Docs app**:
The Next.js workspace at `docs/` that renders the library as a statically-exported site behind the `/nordstar` base path. The artifact GitHub Pages ships and the one Playwright e2e drives.
_Avoid_: website, demo, storybook

### Styling

**Design token**:
A Tailwind v4 `@theme` custom property defined in `packages/core/nordstar/src/styles/tailwind.css` (e.g. `--color-primary`, `--radius-sm`, `--font-heading`). The normative source for visual values; consumed through v4 utilities, never as raw hex.
_Avoid_: variable, CSS var, theme value

**Polymorphic component**:
A component built with `forwardRef<'tag', Props>` from the system package, exposing an `as` prop so the rendered element can change while keeping typed refs and props.
_Avoid_: as-prop component, generic component
