// packages/components/card/card.stories.tsx

import { Meta } from '@storybook/react/types-6-0';
import { Card } from '../card';

export default {
  title: 'Components/Card',
  component: Card,
} as Meta;

export const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Existing args
};

export const WithSolidVariant = Template.bind({});
WithSolidVariant.args = {
  ...Default.args,
  variant: 'solid',
};

export const WithPrimaryColor = Template.bind({});
WithPrimaryColor.args = {
  ...Default.args,
  color: 'primary',
};

export const WithSecondaryColor = Template.bind({});
WithSecondaryColor.args = {
  ...Default.args,
  color: 'secondary',
};

export const WithSolidVariantAndPrimaryColor = Template.bind({});
WithSolidVariantAndPrimaryColor.args = {
  ...Default.args,
  variant: 'solid',
  color: 'primary',
};

export const WithSolidVariantAndSecondaryColor = Template.bind({});
WithSolidVariantAndSecondaryColor.args = {
  ...Default.args,
  variant: 'solid',
  color: 'secondary',
};
