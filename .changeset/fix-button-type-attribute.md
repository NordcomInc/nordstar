---
"@nordcom/nordstar-button": patch
---

Fix `<Button/>` applying `type="button"` to non-button elements. Rendering with a
custom `as` (e.g. `as="a"` for a link styled as a button) produced an invalid
`type` attribute such as `<a type="button">`. The `type` attribute is now only
set when the button renders as a native `<button>`.
