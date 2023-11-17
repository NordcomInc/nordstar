import type { Meta } from '@storybook/react';
import React from 'react';
import type { HeadingProps } from '../src';
import { Heading } from '../src';

const story: Meta<typeof Heading> = {
    title: 'Components/Heading',
    component: Heading,
    argTypes: {}
};

const Template = (args: HeadingProps) => <Heading {...args}>A compelling page-title</Heading>;

export const Standard = {
    render: Template,
    args: {}
};

export const SubHeading = {
    render: Template,
    args: {
        subheading: true
    }
};

export default story;
