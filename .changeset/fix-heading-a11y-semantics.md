---
"@nordcom/nordstar-heading": patch
---

Improve `<Heading/>` accessibility:

- When rendered as a non-heading element (e.g. `as="div"`), the visual heading
  now restores heading semantics with `role="heading"` and the matching
  `aria-level`, so it is reachable via heading navigation instead of being
  invisible to assistive tech. Native `<h1>`–`<h6>` (and custom components) keep
  their own semantics, and consumer-supplied `role`/`aria-level` still win.
- The decorative trailing period on `h1`/`h2` headings now uses the CSS
  `content: '.' / ''` alt-text syntax, so screen readers no longer announce
  "Title." with a spoken period.
