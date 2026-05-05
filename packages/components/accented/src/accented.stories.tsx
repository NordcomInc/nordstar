import type { AccentedProps } from '@nordcom/nordstar-accented';
import { Accented } from '@nordcom/nordstar-accented';
import type { Meta, StoryObj } from '@storybook/react';

const story: Meta<typeof Accented> = {
    component: Accented,
    title: 'System/Typography/Accented',
    argTypes: {
        color: {
            control: 'inline-radio',
            defaultValue: 'default',
            options: ['default', 'primary', 'secondary', 'foreground'],
        },
    },
};

export default story;
type Story = StoryObj<typeof Accented>;

const Template = (args: AccentedProps) => (
    <p>
        This text is using the regular body color <Accented {...args}>while this is accented</Accented>, neat.
    </p>
);

export const Standard: Story = {
    args: {},
    render: Template,
};

export const Primary: Story = {
    render: Template,
    args: {
        ...Standard.args,
        color: 'primary',
    },
};
export const Secondary: Story = {
    render: Template,
    args: {
        ...Standard.args,
        color: 'secondary',
    },
};
export const Foreground: Story = {
    render: Template,
    args: {
        ...Standard.args,
        color: 'foreground',
    },
};
