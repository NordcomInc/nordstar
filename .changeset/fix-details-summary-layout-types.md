---
"@nordcom/nordstar-details": patch
---

Fix `<Details/>` typing, layout and accessibility:

- `forwardRef` is now typed against `'details'` instead of `typeof Card`, so the
  ref resolves to the underlying `HTMLDetailsElement` and native `<details>`
  props (`open`, `onToggle`, `name`, …) are accepted by the public type.
- The `<summary>` no longer stacks its marker above the label: the SCSS forced
  `flex-direction: column`, overriding the intended inline row. The marker and
  label now sit side by side.
- The focusable `<summary>` gains hover and `focus-visible` affordances
  (primary-colored text + a focus outline), so keyboard users get clear feedback.
- Marker spacing and the open-state padding now fall back to a sensible value
  when `--nordstar-layout-block-padding-quarter` is not provided by
  `<NordstarProvider/>`, so the component looks correct standalone.
- Removed dead CSS (an unreachable `summary .content` rule and an unused
  `--border-color` custom property) and replaced `transition: all` with targeted
  transitions.
