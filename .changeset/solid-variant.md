The contents of the new file, `.changeset/solid-variant.md`:

---
---
---

feat: Add solid variant to Card component

**Packages affected**: `@nordcom/nordstar-card`

Description of changes:
- Added a new variant, `solid`, to the `<Card/>` component.
- Created a new SCSS file, `card-solid.module.scss`, to define the styles for the solid variant.
- Updated the `<Card/>` component to accept a `variant` prop with options of `'default'` or `'solid'`.
- Updated the `<Card/>` component to apply the appropriate class based on the `variant` prop.
- Added a new `solid` class to the default variant styles in `card.module.scss`.
- Added a new `container[data-variant="solid"]` selector in `card.module.scss` to define the styles for the solid variant.
- Updated the `<Card/>` component's storybook file to include the `variant` prop in the argTypes.
- Added unit tests to ensure the solid variant is rendered correctly.

---
