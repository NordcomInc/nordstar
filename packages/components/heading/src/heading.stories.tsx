import type { Meta } from '@storybook/react';
import type { HeadingProps } from '../src';
import { Heading } from '../src';

const story: Meta<typeof Heading> = {
    title: 'Components/Typography/Heading',
    component: Heading,
    argTypes: {
        level: {
            options: ['h1', 'h2', 'h3', 'h4'],
            control: { type: 'radio' }
        }
    }
};

const Template = (args: HeadingProps) => <Heading {...args}>A compelling page-title</Heading>;

export const h1 = {
    render: Template,
    args: {
        level: 'h1'
    }
};

export const h2 = {
    render: Template,
    args: {
        level: 'h2'
    }
};

export default story;
