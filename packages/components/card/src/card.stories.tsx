import type { Meta } from '@storybook/react';
import React from 'react';
import type { CardProps } from '../src';
import { Card } from '../src';

const story: Meta<typeof Card> = {
    title: 'Components/Card',
    component: Card,
    argTypes: {
        variant: {
            control: 'radio',
            options: ['default', 'solid']
        },
        color: {
            control: 'radio',
            options: ['default', 'primary', 'secondary']
        }
    }
};

const Template = (args: CardProps) => <Card {...args} />;

export const Default = {
    render: Template,
    args: {
        variant: 'default',
        color: 'default'
    }
};

export default story;
