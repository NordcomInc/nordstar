import React from 'react';

import type { ViewProps } from '@nordcom/nordstar-view';
import { View } from '@nordcom/nordstar-view';
import type { Meta, StoryObj } from '@storybook/react';

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

export default story;
type Story = StoryObj<typeof View>;

const Template = (args: ViewProps) => <View {...args}>You view&apos;s content goes here!</View>;

export const Standard: Story = {
    render: Template,
    args: {
        withoutWrapper: true
    }
};
