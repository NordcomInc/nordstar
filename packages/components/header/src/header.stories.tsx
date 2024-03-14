import type { Meta } from '@storybook/react';
import React from 'react';
import type { HeaderProps } from '../src';
import { Header } from '../src';

const story: Meta<typeof Header> = {
    title: 'System/Layout/Header',
    component: Header,
    argTypes: {}
};

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

export const Default = {
    render: Template,
    args: {
        title: 'Nordstar'
    }
};

export default story;
