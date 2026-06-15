---
"@nordcom/nordstar-header": patch
---

Fix `<Header/>` ref forwarding, typing and keyboard accessibility:

- The root `<Header/>` now uses `forwardRef`, so a `ref` reaches the underlying
  `<header>` element (e.g. to measure height for sticky offsets). Previously the
  ref was silently dropped, making it the only component in the system that did
  not forward refs.
- `Header.Menu.Link` and the `Header.Logo` anchor gain `focus-visible:text-primary`
  states, so keyboard users get the same affordance mouse users already had,
  consistent with `<Button/>`/`<Input/>`.
- Replaced the dead `font-base` utility on `Header.Menu.Link` with `font-body`
  (there is no `--font-base` token, so links silently lost their intended font).
- `HeaderLogoProps` now describes `<section>` attributes to match the element it
  actually renders by default, instead of `<nav>`.
