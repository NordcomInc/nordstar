import type { Meta } from '@storybook/react';
import React from 'react';
import type { CardProps } from '../src';
import { Card } from '../src';

const story: Meta<typeof Card> = {
    title: 'Components/Card',
    component: Card,
    argTypes: {variant: {control: 'radio', options: ['solid', 'default']}, color: {control: 'select', options: ['default', 'primary', 'secondary']}}
};

const Template = (args: CardProps & { variant?: 'solid' | 'default', color?: 'default' | 'primary' | 'secondary' }) => <Card {...args}>Content inside of the card</Card>;

export const Default = {
    render: Template,
    args: {variant: 'default', color: 'default'}
};

export default story;
