---
"@nordcom/nordstar-accented": patch
---

Clarify `<Accented/>` color handling and expose `data-color`:

- `default` is no longer a silent alias of `primary`. The component still
  defaults to the primary accent when no `color` is given, but an explicit
  `color="default"` now inherits the surrounding text color, making the
  `default` value meaningful instead of a duplicate of `primary`.
- `<Accented/>` now renders a `data-color` attribute, matching the convention
  used by its sibling typography/layout components (and its prior behavior).
- Documented that `<Accented/>` is a `display: contents` inline wrapper, so
  box-level utilities require overriding `display`.
