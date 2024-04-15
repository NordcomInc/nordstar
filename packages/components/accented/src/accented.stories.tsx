import React from 'react';

import type { AccentedProps } from '@nordcom/nordstar-accented';
import { Accented } from '@nordcom/nordstar-accented';
import type { Meta, StoryObj } from '@storybook/react';

const story: Meta<typeof Accented> = {
    title: 'System/Typography/Accented',
    component: Accented,
    argTypes: {
        secondary: {
            control: { type: 'boolean' }
        }
    }
};

export default story;
type Story = StoryObj<typeof Accented>;

const Template = (args: AccentedProps) => (
    <p>
        This text is using the regular body color <Accented {...args}>while this is accented</Accented>, neat.
    </p>
);

export const Standard: Story = {
    render: Template,
    args: {
        secondary: false
    }
};
