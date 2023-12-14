---
---

## Summary
This changeset adds a new `solid` variant to the `<Card/>` component.

## Changes
- Added a new `solid` variant to the `<Card/>` component.
- The `solid` variant has a `border-width` of 0 and a `background-color` based on the `color` prop.
- The `color` prop accepts the values `default`, `primary`, and `secondary`.
- The `default` color uses the css variable `--color-foreground` as the value for `background-color` and `--color-background` as its foreground color.

## Level
patch

---
---
