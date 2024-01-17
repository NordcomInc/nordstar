import type { Meta } from '@storybook/react';
import React from 'react';
import type { HeaderLogoProps, HeaderMenuProps, HeaderProps } from '../src';
import { Header } from '../src';

const story: Meta<typeof Header> = {
    title: 'Components/Header',
    component: Header,
    argTypes: {}
};

const Template = ({
    headerArgs,
    logoArgs,
    menuArgs
}: {
    headerArgs: HeaderProps;
    logoArgs: HeaderLogoProps;
    menuArgs: HeaderMenuProps;
}) => (
    <Header {...headerArgs}>
        <Header.Logo {...logoArgs} />
        <Header.Menu {...menuArgs} />
    </Header>
);

export const Default = {
    render: Template,
    args: {
        headerArgs: {},
        logoArgs: {
            children: <b>hello world</b>
        },
        menuArgs: {
            children: (
                <>
                    <Header.Menu.Link>Link 1</Header.Menu.Link>
                    <Header.Menu.Link>Link 2</Header.Menu.Link>
                    <Header.Menu.Link>Link 3</Header.Menu.Link>
                </>
            )
        }
    }
};

export default story;
