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
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '0.75rem', maxWidth: '56rem' }}>
        {entries.map((args, index) => (
            <Input key={index} {...args} />
        ))}
    </div>
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
            },
            {
                label: 'Search',
                as: 'select',
                children: (
                    <>
                        <option key="option-1">Option 1</option>
                        <option key="option-2">Option 2</option>
                    </>
                )
            }
        ]
    }
};

export default story;
