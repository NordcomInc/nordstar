---
name: extract
description: Identify reusable UI patterns, components, and design tokens, then extract and consolidate them into a design system for systematic reuse. Use when the user wants to extract, consolidate, or dedupe repeated components, hard-coded values (colors, spacing, typography, shadows), or composition patterns into shared design-system components or tokens — or mentions "extract", "reusable components", "design tokens", "consolidate UI", "pull into the design system", or "stop duplicating this component".
---

# Extract Flow

Identify reusable patterns, components, and design tokens, then extract and consolidate them into the design system for systematic reuse.

## In this repo

`nordstar` **is** the design system: a React component library published under `@nordcom/nordstar-*`. Shared primitives and utilities (`cn`, `cva` re-exports, `forwardRef`, theme types) live in `packages/core/system` (`@nordcom/nordstar-system`); each UI primitive is its own package under `packages/components/<name>/src/` and is re-exported from the umbrella `@nordcom/nordstar` in `packages/core/nordstar`. Design tokens are Tailwind v4 `@theme` custom properties in `packages/core/nordstar/src/styles/tailwind.css`. New shared components belong in `packages/components/`; new tokens belong in that `@theme` block — confirm the exact target in Step 1 before extracting, and add a changeset for any package you touch.

## Step 1: Discover the Design System

Find the design system, component library, or shared UI directory. Understand its structure: component organization, naming conventions, design token structure, import/export conventions. (Here: per-primitive packages under `packages/components/`, `cva` variant APIs, tokens in the umbrella package's `@theme`.)

**CRITICAL**: If the target location is ambiguous, ask the user (use the `AskUserQuestion` tool) before creating a new package or token group. Understand the preferred location and structure first.

## Step 2: Identify Patterns

Look for extraction opportunities in the target area:

- **Repeated components**: Similar UI patterns used 3+ times (buttons, cards, inputs)
- **Hard-coded values**: Colors, spacing, typography, shadows that should be tokens
- **Inconsistent variations**: Multiple implementations of the same concept
- **Composition patterns**: Layout or interaction patterns that repeat (form rows, toolbar groups, empty states)
- **Type styles**: Repeated font-size + weight + line-height combinations
- **Animation patterns**: Repeated easing, duration, or keyframe combinations

Assess value: only extract things used 3+ times with the same intent. Premature abstraction is worse than duplication.

## Step 3: Plan Extraction

Create a systematic plan:

- **Components to extract**: Which UI elements become reusable components (and which `packages/components/<name>` package they land in)?
- **Tokens to create**: Which hard-coded values become `@theme` design tokens?
- **Variants to support**: What variations does each component need (expressed as `cva` variants)?
- **Naming conventions**: Component names, token names, prop names that match existing patterns
- **Migration path**: How to refactor existing uses to consume the new shared versions

**IMPORTANT**: Design systems grow incrementally. Extract what is clearly reusable now, not everything that might someday be reusable.

## Step 4: Extract & Enrich

Build improved, reusable versions:

- **Components**: Clear props API with sensible defaults, proper variants for different use cases, accessibility built in (ARIA, keyboard navigation, focus management), JSDoc + usage examples (match the existing components' documented style)
- **Design tokens**: Clear naming (primitive vs semantic), proper hierarchy and organization, documentation of when to use each token
- **Patterns**: When to use this pattern, code examples, variations and combinations

## Step 5: Migrate

Replace existing uses with the new shared versions:

- **Find all instances**: Search for the patterns you extracted
- **Replace systematically**: Update each use to consume the shared version
- **Test thoroughly**: Ensure visual and functional parity (unit tests + the Playwright e2e specs under `e2e/`)
- **Delete dead code**: Remove the old implementations

## Step 6: Document

Update design system documentation:

- Add new components to the docs app (`docs/`) and the umbrella export
- Document token usage and values
- Add examples and guidelines
- Add a changeset describing the change

**NEVER**:
- Extract one-off, context-specific implementations without generalization
- Create components so generic they are useless
- Extract without considering existing design system conventions
- Skip proper TypeScript types or prop documentation
- Create tokens for every single value (tokens should have semantic meaning)
- Extract things that differ in intent (two buttons that look similar but serve different purposes should stay separate)

---

Adapted from the [impeccable](https://github.com/pbakaus/impeccable) skill's `extract` command (Apache 2.0; based on Anthropic's frontend-design skill).
