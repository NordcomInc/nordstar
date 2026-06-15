---
"@nordcom/nordstar": minor
"@nordcom/nordstar-button": patch
"@nordcom/nordstar-card": patch
"@nordcom/nordstar-input": patch
"@nordcom/nordstar-kbd": patch
"@nordcom/nordstar-switch": patch
"@nordcom/nordstar-dropdown-menu": patch
"@nordcom/nordstar-select": patch
"@nordcom/nordstar-tooltip": patch
"@nordcom/nordstar-accordion": patch
---

Elevate the Nordstar visual language with a shared depth and motion system,
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
