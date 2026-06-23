# @nordcom/nordstar-dropdown-menu

## 0.2.1

### Patch Changes

- [#1224](https://github.com/NordcomInc/nordstar/pull/1224) [`e749f41`](https://github.com/NordcomInc/nordstar/commit/e749f41445b2d434e2a25ff292c5b0975c5a9f91) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/node to v25.9.4.

- [#1236](https://github.com/NordcomInc/nordstar/pull/1236) [`9acab0f`](https://github.com/NordcomInc/nordstar/commit/9acab0f7b8daf7fff211edb6596a88dab5683bef) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update radix-ui-primitives monorepo .

- Updated dependencies [[`e749f41`](https://github.com/NordcomInc/nordstar/commit/e749f41445b2d434e2a25ff292c5b0975c5a9f91)]:
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

- [#1229](https://github.com/NordcomInc/nordstar/pull/1229) [`2eef2a0`](https://github.com/NordcomInc/nordstar/commit/2eef2a05dfd8f510962f10c87fb75280ec0f65ee) Thanks [@filiphsps](https://github.com/filiphsps)! - Add `<DropdownMenu/>`, a compound action menu built on `@radix-ui/react-dropdown-menu`
  (`Trigger`, `Content`, `Item`, `CheckboxItem`, `RadioGroup`, `RadioItem`, `Label`,
  `Separator`, `Group`, `Sub`, `SubTrigger`, `SubContent`). It ships the full menu
  role, roving focus, typeahead, and keyboard/pointer dismissal, with check/dot/chevron
  indicators inlined (no icon dependency) and the surface re-fitted to the Nordstar
  token contract.
- Updated dependencies [[`5199c66`](https://github.com/NordcomInc/nordstar/commit/5199c6601687e89d244bce6652049f1e1d18a051), [`5cf91f1`](https://github.com/NordcomInc/nordstar/commit/5cf91f1a6fa372c9496a6535e6e9f19c4b707494), [`7e71328`](https://github.com/NordcomInc/nordstar/commit/7e713282cba8eeb499e528eb1d71ba5f48219488), [`b7154b2`](https://github.com/NordcomInc/nordstar/commit/b7154b29ee3d5b3c96cd2918a005cf803cfa8fda), [`97df330`](https://github.com/NordcomInc/nordstar/commit/97df33095a4625292ab4913a8a64d8f4902eab07), [`5e0e5a3`](https://github.com/NordcomInc/nordstar/commit/5e0e5a3233403d70beb17ac802ecb53835624bc8), [`3b67c90`](https://github.com/NordcomInc/nordstar/commit/3b67c901f8e40b047486b18da98ee07aa991e339)]:
  - @nordcom/nordstar-system@0.1.0
