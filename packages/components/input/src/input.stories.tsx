import React from 'react';

import type { InputProps } from '@nordcom/nordstar-input';
import { Input } from '@nordcom/nordstar-input';
import type { Meta, StoryObj } from '@storybook/react';

const story: Meta<typeof Input> = {
    title: 'System/Components/Input',
    component: Input,
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

        type: {
            control: 'select',
            options: ['text', 'email', 'number', 'password', 'search']
        },

        as: {
            control: 'select',
            options: [null, 'textarea']
        },

        labelPosition: {
            control: 'inline-radio',
            options: ['inside', 'outside'],
            defaultValue: 'inside'
        }
    }
};

export default story;
type Story = StoryObj<typeof Input>;

const Template = (args: InputProps) => (
    <>
        {[
            <Input key="simple" defaultValue="This is a bit of text!" {...args} />,
            <Input key="placeholder" placeholder="Search for Songs, Albums and Artists..." {...args} />,
            <Input key="label" label="First Name" {...args} />,
            <Input key="label-with-placeholder" label="Company Name" placeholder="Acme Inc." {...args} />
        ]}
    </>
);

export const Standard: Story = {
    render: Template,
    args: {
        variant: 'outline',
        color: 'default',
        type: 'text',
        labelPosition: 'inside',
        value: ''
    }
};
