import React from 'react';

import type { HeadingProps } from '@nordcom/nordstar-heading';
import { Heading } from '@nordcom/nordstar-heading';
import type { Meta, StoryObj } from '@storybook/react';

const story: Meta<typeof Heading> = {
    title: 'System/Typography/Heading',
    component: Heading,
    argTypes: {
        level: {
            options: ['h1', 'h2', 'h3', 'h4'],
            control: { type: 'inline-radio' }
        }
    }
};

export default story;
type Story = StoryObj<typeof Heading>;

const Template = (args: HeadingProps) => (
    <>
        {[
            <Heading key="h1" level="h1" {...args}>
                1. A bold expressive heading
            </Heading>,
            <Heading key="h2" level="h2" {...args}>
                2. Subheading used to provide context
            </Heading>,
            <Heading key="h3" level="h3" {...args}>
                3. Heading used for section headers
            </Heading>,
            <Heading key="h4" level="h4" {...args}>
                4. Heading used for subsection headers
            </Heading>
        ]}
    </>
);

export const Standard: Story = {
    render: Template,
    args: {}
};
