import React, { Fragment } from 'react';

import type { HeaderProps } from '@nordcom/nordstar-header';
import { Header } from '@nordcom/nordstar-header';
import { Label } from '@nordcom/nordstar-label';
import type { Meta, StoryObj } from '@storybook/react';

const story: Meta<typeof Header> = {
    title: 'System/Layout/Header',
    component: Header,
    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    }
};

export default story;
type Story = StoryObj<typeof Header>;

const Template = (args: HeaderProps) => (
    <div
        style={{
            margin: '-0.75rem',
            height: '100%',
            width: '100dvw',
            maxWidth: 'calc(100% + .75rem)'
        }}
    >
        <Header {...args} style={{ width: 'calc(100% + 1.25rem)' }}>
            <Header.Logo>
                <a title="Nordstar" href="https://nordstar.dev/" target="_blank" rel="noreferrer">
                    Nordstar
                </a>
            </Header.Logo>
            <Header.Menu>
                <Header.Menu.Link>Link 1</Header.Menu.Link>
                <Header.Menu.Link>Link 2</Header.Menu.Link>
                <Header.Menu.Link>Link 3</Header.Menu.Link>
                <Header.Menu.Link>Link 4</Header.Menu.Link>
                <Header.Menu.Link>Link 5</Header.Menu.Link>
            </Header.Menu>
        </Header>

        {additionalDemoContent}
    </div>
);

export const Standard: Story = {
    render: Template,
    args: {}
};

const additionalDemoContent = (
    <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyItems: 'start',
            width: '850px',
            maxWidth: 'calc(100% + 1.25rem)',
            margin: '0 auto'
        }}
    >
        <div
            style={{
                width: '100%',
                marginTop: '-0.75rem',
                backgroundColor: 'hsl(var(--color-background-highlight))'
            }}
        >
            <img
                title="placeholder"
                src="https://picsum.photos/1920/1080"
                style={{
                    width: '100%',
                    maxHeight: '28rem',

                    objectFit: 'cover',
                    objectPosition: 'center'
                }}
            />
            <Label style={{ padding: '1rem .75rem', fontSize: '.75rem' }}>
                Images from <a href="https://picsum.photos/">Lorem Picsum</a>.
            </Label>
        </div>

        {Array.from({ length: 8 }).map((_, index) => (
            <Fragment key={index}>
                <p style={{ width: '100%' }}>
                    <div
                        style={{
                            position: 'sticky',
                            top: '5rem',
                            left: '0',
                            right: '0',
                            width: '100%',
                            backgroundColor: 'hsl(var(--color-accent-primary))'
                        }}
                    >
                        <Label
                            style={{
                                padding: '1.5rem .75rem',
                                color: 'hsl(var(--color-accent-primary-foreground))'
                            }}
                        >
                            Section {index}
                        </Label>
                    </div>
                    <div style={{ padding: '0 .75rem', marginBottom: '6rem' }}>
                        <br />
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Volutpat maximus netus varius netus integer
                        <br />
                        tincidunt phasellus. Proin eu tempor laoreet; phasellus primis praesent. Dis id phasellus mauris
                        <br />
                        <br />
                        fringilla scelerisque odio urna praesent velit. Pretium at a lacinia sodales condimentum purus
                        rhoncus
                        <br />
                        libero. Nisl nullam eget pellentesque dui fermentum at ante. Magnis maecenas eros urna
                        ridiculus; nostra
                        <br />
                        ad. Nisl viverra orci sem himenaeos, pharetra erat rutrum nascetur consequat. Purus facilisis
                        rutrum,
                        <br />
                        morbi dapibus egestas vehicula maecenas.
                    </div>
                </p>
            </Fragment>
        ))}

        <div
            style={{
                display: 'flex',
                justifyItems: 'center',
                alignItems: 'end',
                height: 'calc(100dvh - 5.75rem)',
                width: '100%',
                padding: '.75rem',
                backgroundColor: 'hsl(var(--color-background-highlight))'
            }}
        >
            <Label
                style={{
                    opacity: '.75',
                    fontSize: '.75rem',
                    lineHeight: '1.25rem',
                    textAlign: 'center',
                    textTransform: 'unset',
                    width: '100%'
                }}
            >
                Added padding to allow for demo content to be fully scrolled through.
            </Label>
        </div>
    </div>
);
