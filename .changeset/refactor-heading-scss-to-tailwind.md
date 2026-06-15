---
"@nordcom/nordstar-heading": patch
---

Drop `<Heading/>`'s SCSS module in favour of Tailwind utilities. The decorative
trailing period on non-empty `h1`/`h2` headings is now expressed with a Tailwind
`after:` pseudo-element, preserving the `content: '.' / ''` alt-text so screen
readers still ignore it. No visual or behavioural change.
