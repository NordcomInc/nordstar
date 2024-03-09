import type { Meta } from '@storybook/react';
import React from 'react';
import type { ViewProps } from '../src';
import { View } from '../src';

const story: Meta<typeof View> = {
    title: 'System/Layout/View',
    component: View,
    argTypes: {
        withoutWrapper: {
            control: 'boolean',
            defaultValue: true
        }
    }
};

const Template = (args: ViewProps) => <View {...args}>You view&apos;s content goes here!</View>;

export const Default = {
    render: Template,
    args: {
        withoutWrapper: true
    }
};

export default story;
