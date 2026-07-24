# @nordcom/nordstar-select

## 0.2.1

### Patch Changes

- [#1224](https://github.com/NordcomInc/nordstar/pull/1224) [`e749f41`](https://github.com/NordcomInc/nordstar/commit/e749f41445b2d434e2a25ff292c5b0975c5a9f91) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/node to v25.9.4.

- [#1236](https://github.com/NordcomInc/nordstar/pull/1236) [`9acab0f`](https://github.com/NordcomInc/nordstar/commit/9acab0f7b8daf7fff211edb6596a88dab5683bef) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update radix-ui-primitives monorepo .

- [#1245](https://github.com/NordcomInc/nordstar/pull/1245) [`3a86f8e`](https://github.com/NordcomInc/nordstar/commit/3a86f8edb419428fd4ba7dedc30c0f369541a7ae) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency vite to v8.1.3.

- [#1249](https://github.com/NordcomInc/nordstar/pull/1249) [`36e7ab2`](https://github.com/NordcomInc/nordstar/commit/36e7ab2f742abbdc0dc6672b0de30e6719ba3932) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency vite-plugin-dts to v5.0.3.

- [#1254](https://github.com/NordcomInc/nordstar/pull/1254) [`5b6d8a4`](https://github.com/NordcomInc/nordstar/commit/5b6d8a4cd53a830e443b84c59d2a26c6e4de05fc) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update radix-ui-primitives monorepo .

- [#1261](https://github.com/NordcomInc/nordstar/pull/1261) [`9eca395`](https://github.com/NordcomInc/nordstar/commit/9eca39513f9d0069ba80202989b3381a7dd5549f) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update radix-ui-primitives monorepo .

- [#1263](https://github.com/NordcomInc/nordstar/pull/1263) [`8947f8f`](https://github.com/NordcomInc/nordstar/commit/8947f8fd67eb178139c7bd6ccc5b6fe9f64b7c9f) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/node to v25.9.5.

- [#1265](https://github.com/NordcomInc/nordstar/pull/1265) [`1d84585`](https://github.com/NordcomInc/nordstar/commit/1d8458535086838e84b246d6b77f729181b2a43b) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency vite to v8.1.5.

- [#1281](https://github.com/NordcomInc/nordstar/pull/1281) [`2b372e2`](https://github.com/NordcomInc/nordstar/commit/2b372e24db7871930759ba9bd99245afb0aba358) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update radix-ui-primitives monorepo .

- [#1299](https://github.com/NordcomInc/nordstar/pull/1299) [`6db10cb`](https://github.com/NordcomInc/nordstar/commit/6db10cb9e1a554630db87538fa92830ab41a7b5b) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update react monorepo to v19.2.8.

- Updated dependencies [[`e749f41`](https://github.com/NordcomInc/nordstar/commit/e749f41445b2d434e2a25ff292c5b0975c5a9f91), [`3a86f8e`](https://github.com/NordcomInc/nordstar/commit/3a86f8edb419428fd4ba7dedc30c0f369541a7ae), [`8947f8f`](https://github.com/NordcomInc/nordstar/commit/8947f8fd67eb178139c7bd6ccc5b6fe9f64b7c9f), [`1d84585`](https://github.com/NordcomInc/nordstar/commit/1d8458535086838e84b246d6b77f729181b2a43b), [`6db10cb`](https://github.com/NordcomInc/nordstar/commit/6db10cb9e1a554630db87538fa92830ab41a7b5b)]:
  - @nordcom/nordstar-system@0.2.1

## 0.2.0

### Patch Changes

- [#1233](https://github.com/NordcomInc/nordstar/pull/1233) [`97379ab`](https://github.com/NordcomInc/nordstar/commit/97379abdcde989b1862f8148e852ccd03954464d) Thanks [@filiphsps](https://github.com/filiphsps)! - Elevate the Nordstar visual language with a shared depth and motion system,
  then apply it across the components.

  - **New design tokens** shipped from `@nordcom/nordstar`'s CSS contract:
    - Elevation — `shadow-raised`, `shadow-overlay`, `shadow-floating`, a
      three-step shadow scale tuned to read on the near-black default surface.
    - Easing — `ease-out-soft` (hard deceleration for entrances) and `ease-spring`
      (a slight overshoot for toggles and presses).
    - Motion — an `overlay-in` keyframe / `animate-overlay-in` utility used by
      portalled surfaces, plus `accordion-down`/`accordion-up` for disclosure
      height transitions. The existing `prefers-reduced-motion` reset neutralises
      them for users who opt out.
  - **Overlay surfaces** (`Select`, `DropdownMenu`, `Tooltip`) now lift on the new
    `shadow-overlay`, animate in from their transform origin, and round to `md`.
    The `Select` chevron rotates while the listbox is open.
  - **`Button`** gains a resting elevation on the solid variant, a subtle hover
    lift that settles on press, and a consistent keyboard focus ring.
  - **`Card`** solid surfaces read as raised via `shadow-raised`.
  - **`Switch`** thumb slides on the springy easing with a touch of depth.
  - **`Kbd`** picks up a recessed keycap shadow.
  - **`Accordion`** sections now expand and collapse with a measured height
    animation instead of snapping open.
  - Motion timings across `Input`, `Select`, and the dropdown items were aligned
    to the shared duration/easing language.

  No public APIs changed; these are visual and motion refinements within the
  existing design identity.

- Updated dependencies []:
  - @nordcom/nordstar-system@0.2.0

## 0.1.1

### Patch Changes

- Updated dependencies []:
  - @nordcom/nordstar-system@0.1.1

## 0.1.0

### Patch Changes

- [#1229](https://github.com/NordcomInc/nordstar/pull/1229) [`0e2eae3`](https://github.com/NordcomInc/nordstar/commit/0e2eae30f71c4d6696496f65f82d9addf47fe002) Thanks [@filiphsps](https://github.com/filiphsps)! - Add `<Select/>`, a compound dropdown built on `@radix-ui/react-select`
  (`Select.Trigger`, `Select.Value`, `Select.Content`, `Select.Item`, `Select.Group`,
  `Select.Label`, `Select.Separator`). It ships full keyboard control, typeahead,
  collision-aware positioning, and native form integration, with chevron/check icons
  inlined (no icon dependency) and the surface re-fitted to the Nordstar token contract.
- Updated dependencies [[`5199c66`](https://github.com/NordcomInc/nordstar/commit/5199c6601687e89d244bce6652049f1e1d18a051), [`5cf91f1`](https://github.com/NordcomInc/nordstar/commit/5cf91f1a6fa372c9496a6535e6e9f19c4b707494), [`7e71328`](https://github.com/NordcomInc/nordstar/commit/7e713282cba8eeb499e528eb1d71ba5f48219488), [`b7154b2`](https://github.com/NordcomInc/nordstar/commit/b7154b29ee3d5b3c96cd2918a005cf803cfa8fda), [`97df330`](https://github.com/NordcomInc/nordstar/commit/97df33095a4625292ab4913a8a64d8f4902eab07), [`5e0e5a3`](https://github.com/NordcomInc/nordstar/commit/5e0e5a3233403d70beb17ac802ecb53835624bc8), [`3b67c90`](https://github.com/NordcomInc/nordstar/commit/3b67c901f8e40b047486b18da98ee07aa991e339)]:
  - @nordcom/nordstar-system@0.1.0
