import React from 'react';

import type { DetailsProps } from '@nordcom/nordstar-details';
import { Details } from '@nordcom/nordstar-details';
import type { Meta, StoryObj } from '@storybook/react';

const story: Meta<typeof Details> = {
    title: 'System/Components/Details',
    component: Details,
    argTypes: {
        open: {
            control: 'boolean',
            defaultValue: false
        }
    }
};

export default story;
type Story = StoryObj<typeof Details>;

const Template = (args: DetailsProps) => (
    <Details {...args}>
        And this is the content inside of the Details component passed through the children prop.
    </Details>
);

export const Standard: Story = {
    render: Template,
    args: {
        label: 'This is a label',
        open: false
    }
};
