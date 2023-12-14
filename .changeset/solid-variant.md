feat: Add solid variant to Card component

Summary:
This changeset adds a new `solid` variant to the `<Card/>` component. The variant can be set by passing an optional `variant="solid"` prop to the component. The `solid` variant has a background color based on the `color` prop, which can be set to `default`, `primary`, or `secondary`. The styling and behavior of the existing non-solid variant remain unchanged.

Changes:
- Added `solid` variant to the `<Card/>` component
- Added support for `variant` and `color` props
- Updated the `card.module.scss` file to include styling for the `solid` variant
- Updated the `card.tsx` file to apply the `solid` variant styling based on the `variant` and `color` props
- Updated the `card.stories.tsx` file to include `argTypes` for the `variant` and `color` props

Testing:
- Created extensive unit tests to cover all combinations of variants, colors, and default values
- Tested the component with different props and verified the expected styling and behavior

Related Issues:
- [Link to the related issue, if applicable]

Co-authored-by: [Your Name] <[Your Email]>
