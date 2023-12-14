import type { Meta } from '@storybook/react';
import React from 'react';
import type { CardProps } from '../src';
import { Card } from '../src';

const story: Meta<typeof Card> = {
    title: 'Components/Card',
    component: Card,
    argTypes: {
  variant: {
    options: ['default', 'solid'],
    control: { type: 'select' },
  },
  color: {
    options: ['default', 'primary', 'secondary'],
    control: { type: 'select' },
  },
}
};

const Template = (args: CardProps) => <Card {...args}>Content inside of the card</Card>;

export const Default = {
    render: Template,
    args: {}
};

export default story;
