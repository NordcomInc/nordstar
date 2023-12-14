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
            options: ['default', 'solid']
        },
        color: {
            control: 'select',
            options: ['default', 'primary', 'secondary']
        }
    }
};

const Template = (args: CardProps) => <Card {...args}>Content inside of the card</Card>;

export const Default = Template.bind({});
Default.args = {};

export const SolidDefault = Template.bind({});
SolidDefault.args = {
    variant: 'solid',
    color: 'default'
};

export const SolidPrimary = Template.bind({});
SolidPrimary.args = {
    variant: 'solid',
    color: 'primary'
};

export const SolidSecondary = Template.bind({});
SolidSecondary.args = {
    variant: 'solid',
    color: 'secondary'
};

export default story;
