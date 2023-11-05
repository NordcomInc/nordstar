import type { Meta } from '@storybook/react';
import type { CardProps } from '../src';
import { Card } from '../src';

export default {
    title: 'Components/Card',
    component: Card,
    argTypes: {}
} as Meta<typeof Card>;

const Template = (args: CardProps) => <Card {...args} />;

export const Default = {
    render: Template,
    args: {}
};
