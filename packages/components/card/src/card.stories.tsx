import type { Meta } from '@storybook/react';
import React from 'react';
import type { CardProps } from '../src';
import { Card } from '../src';

const story: Meta<typeof Card> = {
    title: 'Components/Card',
    component: Card,
    argTypes: {
    as: { description: 'The element to render the component as.' },
    variant: { control: { type: 'select', options: ['default', 'solid'] }, description: 'The variant of the card.' },
    color: { control: { type: 'select', options: ['default', 'primary', 'secondary'] }, description: 'The color of the card background.' },
  }
};

const Template = (args: CardProps & { variant?: 'default' | 'solid', color?: 'default' | 'primary' | 'secondary' }) => <Card {...args}>Content inside of the card</Card>

export const Default = {
    render: Template,
    args: {variant: 'solid', color: 'default'}
};

export default story;
