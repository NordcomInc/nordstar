import type { Meta } from '@storybook/react';
import React from 'react';
import type { LabelProps } from '../src';
import { Label } from '../src';

const story: Meta<typeof Label> = {
    title: 'Components/Typography/Label',
    component: Label,
    argTypes: {}
};

const Template = (args: LabelProps) => <Label {...args}>This is a label</Label>;

export const Default = {
    render: Template,
    args: {}
};

export default story;
