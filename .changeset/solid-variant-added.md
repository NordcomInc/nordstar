---
"@nordcom/nordstar-card": patch
---

Added solid variant to the Card component

## Summary
This changeset adds a new `solid` variant to the `<Card/>` component. The `solid` variant can be set by passing an optional `variant="solid"` prop to the component and an optional `color` prop that controls the `background-color`. The valid color values are `default`, `primary`, and `secondary`.

Styling and behavior of the default non-solid `<Card/>` component remain unchanged. The new `solid` variant has a `border-width` of `0` and a `background-color` set based on the `color` prop. The `default` color uses the css variable `--color-foreground` as the value for `background-color` and `--color-background` as its foreground color.

Example usage:
```tsx
<Card
    variant="solid" // default, or "solid".
    color="primary" // default, primary, or secondary.
>
    <p>Hello World</p>
</Card>
```

This is a patch-level change.
