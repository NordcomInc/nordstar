import type { Meta } from '@storybook/react';
import React from 'react';
import type { CardProps } from '../src';
import { Card } from '../src';

const story: Meta<typeof Card> = {
    title: 'Components/Card',
    component: Card,
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'solid'],
            defaultValue: 'default'
        },
        color: {
            control: 'select',
            options: ['default', 'primary', 'secondary'],
            defaultValue: 'default'
        }
    }
};

const Template = (args: CardProps) => <Card {...args}>Content inside of the card</Card>;

export const Default = {
    render: Template,
    args: {
        variant: 'default',
        color: 'default'
    }
};

export const DefaultSolid = {
    render: Template,
    args: {
        variant: 'solid',
        color: 'default'
    }
};
export const PrimarySolid = {
    render: Template,
    args: {
        variant: 'solid',
        color: 'primary'
    }
};
export const SecondarySolid = {
    render: Template,
    args: {
        variant: 'solid',
        color: 'secondary'
    }
};

export default story;
