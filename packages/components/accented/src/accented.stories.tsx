import type { Meta } from '@storybook/react';
import React from 'react';
import type { AccentedProps } from '../src';
import { Accented } from '../src';

const story: Meta<typeof Accented> = {
    title: 'Components/Typography/Accented',
    component: Accented,
    argTypes: {
        secondary: {
            control: { type: 'boolean' }
        }
    }
};

const Template = (args: AccentedProps) => (
    <p>
        This text is using the regular body color <Accented {...args}>while this is accented</Accented>, neat.
    </p>
);

export const Primary = {
    render: Template,
    args: {
        secondary: false
    }
};

export const Secondary = {
    render: Template,
    args: {
        secondary: true
    }
};

export default story;
