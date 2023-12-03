import type { Meta } from '@storybook/react';
import React from 'react';
import type { ViewProps } from '../src';
import { View } from '../src';

const story: Meta<typeof View> = {
    title: 'Components/Layout/View',
    component: View,
    argTypes: {}
};

const Template = (args: ViewProps) => <View {...args}>You view&apos;s content goes here!</View>;

export const Default = {
    render: Template,
    args: {}
};

export default story;
