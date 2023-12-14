---
"@nordcom/nordstar-card": patch
---

Added a solid variant to the `<Card/>` component.

- Introduced a new `variant` prop with options for 'default' and 'solid'.
- Added a `color` prop with options for 'default', 'primary', and 'secondary'.
- Updated the `card.module.scss` file to handle the new variant and color.
- Modified the `card.tsx` file to accept the new props and apply the appropriate styling.
- Updated the `card.stories.tsx` file to include the new props in the storybook controls.
