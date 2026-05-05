import type { LabelProps } from '@nordcom/nordstar-label';
import { Label } from '@nordcom/nordstar-label';
import type { Meta, StoryObj } from '@storybook/react';

const story: Meta<typeof Label> = {
    argTypes: {},
    component: Label,
    title: 'System/Typography/Label',
};

export default story;
type Story = StoryObj<typeof Label>;

const Template = (args: LabelProps) => <Label {...args}>This is a label</Label>;

export const Standard: Story = {
    args: {},
    render: Template,
};

export const WithColor: Story = {
    name: 'With color',
    render: Template,
    args: {
        color: 'primary',
    },
};
