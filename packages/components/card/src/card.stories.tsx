import { Card } from '../src';
import type { CardProps } from '../src';
import type { Meta } from '@storybook/react';

const story: Meta<typeof Card> = {
    title: 'Components/Card',
    component: Card,
    argTypes: {}
};

const Template = (args: CardProps) => (
    <Card {...args}>
        <p>Content inside of the card</p>
    </Card>
);

export const Default = {
    render: Template,
    args: {}
};

export default story;
