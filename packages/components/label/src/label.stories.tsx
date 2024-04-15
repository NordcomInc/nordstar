import React from 'react';

import type { LabelProps } from '@nordcom/nordstar-label';
import { Label } from '@nordcom/nordstar-label';
import type { Meta, StoryObj } from '@storybook/react';

const story: Meta<typeof Label> = {
    title: 'System/Typography/Label',
    component: Label,
    argTypes: {}
};

export default story;
type Story = StoryObj<typeof Label>;

const Template = (args: LabelProps) => <Label {...args}>This is a label</Label>;

export const Standard: Story = {
    render: Template,
    args: {}
};
