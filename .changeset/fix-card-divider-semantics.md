---
"@nordcom/nordstar-card": patch
---

Fix `<Card/>` divider semantics, typing and styling consistency:

- `Card.Divider` now renders a real `<hr>` (its props were already typed as
  `<hr>`), so it carries the implicit `separator` role and is exposed to
  assistive tech instead of being an opaque `<div>`.
- `Card.Divider` and `Card.Header` apply their default `draggable={false}` before
  spreading props, so a consumer-supplied `draggable` is no longer silently
  dropped.
- Solid `primary`/`secondary` cards now pair their background with the matching
  `text-primary-foreground`/`text-secondary-foreground` token, so themed
  foreground colors are respected (consistent with `<Button/>`).
- `HeaderProps` (for `Card.Header`) is now re-exported from the package entry
  point, alongside `CardProps`/`CardDividerProps`.
- Removed dead/duplicated utility classes (`border-foreground` shadowed by
  `border-foreground-highlight`, and a duplicate `border-2 border-solid`).
