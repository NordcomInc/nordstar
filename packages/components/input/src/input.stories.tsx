import { Input } from '@nordcom/nordstar-input';
import type { Meta, StoryObj } from '@storybook/react';

const story: Meta<typeof Input> = {
    title: 'System/Components/Input',
    component: Input,
    argTypes: {
        as: {
            control: 'select',
            options: [undefined, 'textarea']
        },

        variant: {
            control: 'inline-radio',
            options: ['outline', 'solid'],
            defaultValue: 'outline'
        },
        color: {
            control: 'inline-radio',
            options: ['default', 'primary', 'secondary'],
            defaultValue: 'default'
        },

        type: {
            control: 'select',
            options: ['text', 'email', 'number', 'password', 'search']
        },

        label: {
            control: 'text'
        },
        placeholder: {
            control: 'text'
        },
        value: {
            control: 'text'
        }
    }
};

export default story;
type Story = StoryObj<typeof Input>;

export const Standard: Story = {
    args: {
        variant: 'outline',
        color: 'default',
        type: 'text',
        value: 'hello world!'
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
        color: 'primary',
        variant: 'solid'
    }
};

export const Placeholder: Story = {
    args: {
        ...Standard.args,
        placeholder: 'Search for Songs, Albums and Artists...'
    }
};

export const Label: Story = {
    args: {
        ...Standard.args,
        value: undefined,
        label: 'Company Name'
    }
};

export const LabelPlaceholder: Story = {
    name: 'Label with placeholder',
    args: {
        ...Standard.args,
        value: undefined,
        label: 'Company Name',
        placeholder: 'Acme Inc.'
    }
};

export const Textarea: Story = {
    args: {
        ...Standard.args,
        type: undefined,
        as: 'textarea',
        value: 'Hello World!\nSecond line.',
        label: 'Company Name',
        placeholder: 'Acme Inc.'
    }
};
