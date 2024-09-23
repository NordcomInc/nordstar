import React from 'react';

import { Card } from '@nordcom/nordstar-card';
import type { Meta, StoryObj } from '@storybook/react';

const story: Meta<typeof Card> = {
    title: 'System/Components/Card',
    component: Card,
    argTypes: {
        children: {
            table: {
                disable: true
            }
        },
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

export const Standard: Story = {
    args: {
        children: (
            <>
                <Card.Header>Header</Card.Header>
                <Card.Divider />
                Hello World! Content inside of the card
                <br />
                Another line of content inside of the card.
                <br />
                And another one.
                <Card.Divider />
                Imaginary footer
            </>
        ),
        variant: 'outline',
        color: 'foreground'
    }
};

export const Solid: Story = {
    args: {
        ...Standard.args,
        variant: 'solid'
    }
};

export const WithColor: Story = {
    name: 'With color',
    args: {
        ...Standard.args,
        color: 'primary'
    }
};

export const SolidWithColor: Story = {
    name: 'Solid with color',
    args: {
        ...Standard.args,
        variant: 'solid',
        color: 'primary'
    }
};

export const Borderless: Story = {
    args: {
        ...Standard.args,
        borderless: true
    }
};

export const NoPadding: Story = {
    args: {
        ...Standard.args,
        padding: false
    }
};

export const BorderlessNoPadding: Story = {
    name: 'Borderless with no padding',
    args: {
        ...Standard.args,
        borderless: true,
        padding: false
    }
};
