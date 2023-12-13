import type { Meta } from '@storybook/react';
import React from 'react';
import type { CardProps } from '../src';
import { Card } from '../src';

const story: Meta<typeof Card> = {
    title: 'Components/Card',
    component: Card,
    argTypes: {}
};

const Template = (args: CardProps) => <Card {...args}>Content inside of the card</Card>;

export const Default = {
    render: Template,
    args: {}
};

export const SolidPrimary = {
    render: Template,
    args: {
        variant: 'solid',
        color: 'primary'
    }
};

export default story;
