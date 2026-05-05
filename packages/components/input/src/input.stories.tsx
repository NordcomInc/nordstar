import Input from '@nordcom/nordstar-input/input';

import type { Meta, StoryObj } from '@storybook/react';

const story: Meta<typeof Input> = {
    component: Input,
    title: 'System/Components/Input',
    argTypes: {
        as: {
            control: 'select',
            options: [undefined, 'textarea'],
        },
        color: {
            control: 'inline-radio',
            defaultValue: 'default',
            options: ['default', 'primary', 'secondary'],
        },

        label: {
            control: 'text',
        },
        placeholder: {
            control: 'text',
        },

        type: {
            control: 'select',
            options: ['text', 'email', 'number', 'password', 'search'],
        },
        value: {
            control: 'text',
        },

        variant: {
            control: 'inline-radio',
            defaultValue: 'outline',
            options: ['outline', 'solid'],
        },
    },
};

export default story;
type Story = StoryObj<typeof Input>;

export const Standard: Story = {
    args: {
        color: 'default',
        type: 'text',
        value: 'hello world!',
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

export const Placeholder: Story = {
    args: {
        ...Standard.args,
        placeholder: 'Search for Songs, Albums and Artists...',
    },
};

export const Label: Story = {
    args: {
        ...Standard.args,
        label: 'Company Name',
        value: undefined,
    },
};

export const LabelPlaceholder: Story = {
    name: 'Label with placeholder',
    args: {
        ...Standard.args,
        label: 'Company Name',
        placeholder: 'Acme Inc.',
        value: undefined,
    },
};

export const Textarea: Story = {
    args: {
        ...Standard.args,
        as: 'textarea',
        label: 'Company Name',
        placeholder: 'Acme Inc.',
        type: undefined,
        value: 'Hello World!\nSecond line.',
    },
};
