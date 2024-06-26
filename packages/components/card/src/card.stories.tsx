import React from 'react';

import type { CardProps } from '@nordcom/nordstar-card';
import { Card } from '@nordcom/nordstar-card';
import type { Meta, StoryObj } from '@storybook/react';

const story: Meta<typeof Card> = {
    title: 'System/Components/Card',
    component: Card,
    argTypes: {
        variant: {
            control: 'inline-radio',
            options: ['outline', 'solid'],
            defaultValue: 'default'
        },
        color: {
            control: 'inline-radio',
            options: ['default', 'primary', 'secondary'],
            defaultValue: 'default'
        },
        borderless: {
            control: 'boolean',
            defaultValue: false
        },
        padding: {
            control: 'boolean',
            defaultValue: true
        }
    }
};

export default story;
type Story = StoryObj<typeof Card>;

const Template = (args: CardProps) => (
    <>
        {[
            <Card key="simple" {...args} style={{ width: '18rem', maxWidth: '100%' }}>
                This is a simple card
            </Card>,

            <Card key="card" {...args} style={{ width: '18rem', maxWidth: '100%' }}>
                Hello World!
                <Card.Divider />
                Content inside of the card
                <br />
                Another line of content inside of the card.
                <br />
                And another one.
                <Card.Divider />
                Imaginary footer
            </Card>
        ]}
    </>
);

export const Standard: Story = {
    render: Template,
    args: {}
};

export const Solid: Story = {
    render: Template,
    args: {
        variant: 'solid',
        color: 'primary',
        borderless: false
    }
};

export const Borderless: Story = {
    render: Template,
    args: {
        variant: 'solid',
        color: 'default',
        borderless: true
    }
};

export const NoPadding: Story = {
    render: Template,
    args: {
        padding: false
    }
};
