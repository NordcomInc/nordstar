import type { Meta } from '@storybook/react';
import React from 'react';
import type { InputProps } from '../src';
import { Input } from '../src';

const story: Meta<typeof Input> = {
    title: 'Components/Input',
    component: Input,
    argTypes: {}
};

const Template = ({ entries }: { entries: InputProps[] }) => (
    <>
        {entries.map((args, index) => (
            <div key={index} style={{ display: 'inline-block', padding: '0 1rem 1rem 0', float: 'left' }}>
                <Input {...args} />
            </div>
        ))}
    </>
);

export const Default = {
    render: Template,
    args: {
        entries: [
            {
                placeholder: 'Placeholder',
                type: 'text'
            },
            {
                label: 'Name',
                placeholder: 'Whats your name?',
                type: 'text'
            },
            {
                label: 'Search',
                type: 'text'
            }
        ]
    }
};

export default story;
