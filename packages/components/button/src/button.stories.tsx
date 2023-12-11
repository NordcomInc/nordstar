import type { Meta } from '@storybook/react';
import React from 'react';
import type { ButtonProps } from '../src';
import { Button } from '../src';

const story: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        variant: {
            options: ['solid', 'outline'],
            control: { type: 'radio' }
        },
        color: {
            options: ['default', 'secondary', 'primary'],
            control: { type: 'radio' }
        }
    }
};

const Template = (args: ButtonProps) => <Button {...args}>Actionable button</Button>;
const IconTemplate = (args: ButtonProps) => (
    <Button icon={<>i</>} {...args}>
        Icon button
    </Button>
);

export const SolidDefault = {
    render: Template,
    args: {
        variant: 'solid',
        color: 'default'
    }
};

export const SolidPrimary = {
    render: Template,
    args: {
        variant: 'solid',
        color: 'primary'
    }
};
export const SolidSecondary = {
    render: Template,
    args: {
        variant: 'solid',
        color: 'secondary'
    }
};

export const OutlineDefault = {
    render: Template,
    args: {
        variant: 'outline',
        color: 'default'
    }
};

export const OutlinePrimary = {
    render: Template,
    args: {
        variant: 'outline',
        color: 'primary'
    }
};
export const OutlineSecondary = {
    render: Template,
    args: {
        variant: 'outline',
        color: 'secondary'
    }
};

export const Icon = {
    render: IconTemplate,
    args: {
        variant: 'outline',
        color: 'primary'
    }
};

export default story;
