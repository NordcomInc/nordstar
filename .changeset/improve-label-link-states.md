---
"@nordcom/nordstar-label": patch
---

Improve `<Label/>` link interaction states:

- Links inside a label now have a `focus-visible` state (not just `hover`), so
  keyboard users get a visible affordance, consistent with the rest of the
  system.
- `secondary` labels now tint their links with the secondary accent on
  hover/focus instead of always falling back to the primary accent.
