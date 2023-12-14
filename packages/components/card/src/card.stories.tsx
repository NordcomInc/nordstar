import type { Meta } from '@storybook/react';
import React from 'react';
import type { CardProps } from '../src';
import { Card } from '../src';

const story: Meta<typeof Card> = {
    title: 'Components/Card',
    component: Card,
    argTypes: {
        variant: {
            control: { type: 'radio' },
            options: ['default', 'solid'],
            defaultValue: 'default',
            description: 'Variant of the card'
        },
        color: {
            control: { type: 'radio' },
            options: ['default', 'primary', 'secondary'],
            defaultValue: 'default',
            description: 'Color theme of the card'
        }
    }
};

const Template = (args: CardProps) => <Card {...args}>Content inside of the card</Card>;

export const Default = {
    render: Template,
    args: {}
};

export const SolidDefault = Template.bind({});
SolidDefault.args = { variant: 'solid', color: 'default' };

export const SolidPrimary = Template.bind({});
SolidPrimary.args = { variant: 'solid', color: 'primary' };

export const SolidSecondary = Template.bind({});
SolidSecondary.args = { variant: 'solid', color: 'secondary' };

export default story;
