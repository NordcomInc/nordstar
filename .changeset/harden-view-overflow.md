---
"@nordcom/nordstar-view": patch
---

Harden `<View/>` against layout blowouts and tighten its typing:

- The content container and the landmark wrapper now set `min-w-0`, so a single
  wide child (table, code block, carousel, long URL/SKU) can no longer force a
  page-wide horizontal scrollbar when `<View/>` lives inside a flex/grid parent
  such as an app shell. `overflow-x-clip` previously hid this by truncating
  content; the flex column now shrinks to its track and lets children wrap or
  scroll within their own bounds instead.
- The wrapper gained `w-full` so it claims its track when it is itself a flex
  item, instead of shrink-wrapping and breaking the centered content (the
  scrollbar-safe replacement for the previously removed `w-screen`).
- The forwarded `ref` is now typed as the inner content element (`article`,
  matching where the ref actually lands) rather than the `main` wrapper.
