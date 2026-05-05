import { Card } from '@nordcom/nordstar-card';
import type { Meta, StoryObj } from '@storybook/react';

const story: Meta<typeof Card> = {
    component: Card,
    title: 'System/Components/Card',
    argTypes: {
        borderless: {
            control: 'boolean',
            defaultValue: false,
        },
        children: {
            table: {
                disable: true,
            },
        },
        color: {
            control: 'inline-radio',
            defaultValue: 'default',
            options: ['default', 'primary', 'secondary'],
        },
        padding: {
            control: 'boolean',
            defaultValue: true,
        },
        variant: {
            control: 'inline-radio',
            defaultValue: 'default',
            options: ['outline', 'solid'],
        },
    },
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
        color: 'foreground',
        variant: 'outline',
    },
};

export const Solid: Story = {
    args: {
        ...Standard.args,
        variant: 'solid',
    },
};

export const WithColor: Story = {
    name: 'With color',
    args: {
        ...Standard.args,
        color: 'primary',
    },
};

export const SolidWithColor: Story = {
    name: 'Solid with color',
    args: {
        ...Standard.args,
        color: 'primary',
        variant: 'solid',
    },
};

export const Borderless: Story = {
    args: {
        ...Standard.args,
        borderless: true,
    },
};

export const NoPadding: Story = {
    args: {
        ...Standard.args,
        padding: false,
    },
};

export const BorderlessNoPadding: Story = {
    name: 'Borderless with no padding',
    args: {
        ...Standard.args,
        borderless: true,
        padding: false,
    },
};
