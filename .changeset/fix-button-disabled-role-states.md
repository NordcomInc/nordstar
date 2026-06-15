---
"@nordcom/nordstar-button": patch
---

Fix `<Button/>` accessibility and interaction states:

- No longer forces `role="button"` on every rendered element. Rendering as a link
  (`as="a"`) previously hid the native link role behind a button role; native
  semantics are now preserved for both `<button>` and other elements.
- `disabled` is now only applied as the native attribute on a real `<button>`.
  Polymorphic elements (`as="a"`, `as="div"`, …) previously received an invalid
  `disabled` attribute that browsers ignore, leaving them keyboard-focusable and
  clickable while only appearing dimmed. They now reflect the state via
  `aria-disabled` and are removed from the tab order so they are genuinely inert.
- The `outline` variant gains `focus-visible` and `active` feedback so keyboard
  users get a visible affordance, matching the `solid` variant.
- Replaced `transition-all` with a targeted transition so layout properties are
  no longer animated.
- `data-color`/`data-variant` and the JSDoc now reflect the real resolved
  defaults (`solid`/`primary`).
