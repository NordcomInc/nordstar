import type { Meta } from '@storybook/react';
import React from 'react';
import type { CardProps } from '../src';
import { Card } from '../src';

const story: Meta<typeof Card> = {
    title: 'Components/Card',
    component: Card,
    argTypes: {
        variant: {
            control: { type: 'inline-radio', options: ['default', 'solid'] },
            description: 'The variant of the card.'
        },
        color: {
            control: { type: 'inline-radio', options: ['default', 'primary', 'secondary'] },
            description: 'The color scheme of the card.'
        }
    }
};

const Template = (args: CardProps) => <Card {...args}>Content inside of the card</Card>;

export const Default = {
    render: Template,
    args: {}
};

export const SolidDefault = {
    render: Template,
    args: {
        variant: 'solid',
        color: 'default'
    }
};

export const SolidPrimary = {
    render: Template,
    args: {
        variant: 'solid',
        color: 'primary'
    }
};

export const SolidSecondary = {
    render: Template,
    args: {
        variant: 'solid',
        color: 'secondary'
    }
};

export default story;
