---
"@nordcom/nordstar-card": patch
---

## Summary
Add a new `solid` variant to the `<Card/>` component.

## Details
- Added a new `solid` variant to the `<Card/>` component.
- The `solid` variant is set by passing an optional `variant="solid"` prop to the component.
- An optional `color` prop controls the `background-color` of the `solid` variant.
- The valid color values are the same as the `<Button/>` component: `default`, `primary`, and `secondary`.
- The default non-solid `<Card/>` component remains unchanged.
- The `solid` variant has `border-width` set to `0` and `background-color` based on the `color` prop or fallback to the default.
- The `default` color uses the css variable `--color-foreground` as the value for `background-color` and `--color-background` as its foreground color.
- Styling changes are contained in the existing `./packages/components/card/src/card.module.scss` file.
- Data attributes are used for both the `variant` and `color` styling instead of classes.
- Proper argTypes are added to the `./packages/components/card/src/card.stories.tsx` file to showcase the component on the Storybook page.

Example usage of the new component properties:
```tsx
<Card
    variant="solid" // default, or "solid".
    color="primary" // default, primary, or secondary.
>
    <p>Hello World</p>
</Card>
