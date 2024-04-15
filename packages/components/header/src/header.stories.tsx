import React from 'react';

import type { HeaderProps } from '@nordcom/nordstar-header';
import { Header } from '@nordcom/nordstar-header';
import type { Meta, StoryObj } from '@storybook/react';

const story: Meta<typeof Header> = {
    title: 'System/Layout/Header',
    component: Header,
    argTypes: {}
};

export default story;
type Story = StoryObj<typeof Header>;

const Template = ({ title, ...args }: HeaderProps & { title: string }) => (
    <>
        {[
            <Header key="standard" {...args}>
                <Header.Logo>{title}</Header.Logo>
                <Header.Menu>
                    <Header.Menu.Link>Link 1</Header.Menu.Link>
                    <Header.Menu.Link>Link 2</Header.Menu.Link>
                    <Header.Menu.Link>Link 3</Header.Menu.Link>
                </Header.Menu>
            </Header>
        ]}
    </>
);

export const Standard: Story = {
    render: Template as any,
    args: {
        title: 'Nordstar'
    }
};
