---
"@nordcom/nordstar-view": patch
---

Refine `<View/>` clipping and align it with sibling conventions:

- The content container now clips only the horizontal axis (`overflow-x-clip`)
  instead of `overflow-hidden`, so vertical focus rings, shadows and `sticky`
  children are no longer cropped while horizontal overflow is still tamed.
- Switched the max-width to the Tailwind v4 theme-variable shorthand
  (`max-w-(--nordstar-layout-page-width)`), matching `<Header/>`.
- Added `draggable={false}` (overridable) and a `data-without-wrapper` state
  attribute, matching the conventions used by `<Card/>`/`<Header/>`.
- Documented that `className`/props target the inner content element while
  `outerClassName`/`outerAs` style the landmark wrapper, and that only one
  `<View/>` per page should keep the default `outerAs="main"`.
