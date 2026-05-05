import type { HeaderProps } from '@nordcom/nordstar-header';
import { Header } from '@nordcom/nordstar-header';
import { Label } from '@nordcom/nordstar-label';
import type { Meta, StoryObj } from '@storybook/react';
import { Fragment } from 'react';

const story: Meta<typeof Header> = {
    component: Header,
    title: 'System/Layout/Header',
    argTypes: {
        children: {
            table: {
                disable: true,
            },
        },
    },
};

export default story;
type Story = StoryObj<typeof Header>;

const Template = (args: HeaderProps) => (
    <div
        style={{
            height: '100%',
            margin: '-0.75rem',
            maxWidth: 'calc(100% + .75rem)',
            width: '100dvw',
        }}
    >
        <Header {...args} style={{ width: 'calc(100% + 1.25rem)' }}>
            <Header.Logo>
                <a href="https://nordcominc.github.io/nordstar/" rel="noreferrer" target="_blank" title="Nordstar">
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
    args: {},
    render: Template,
};

const additionalDemoContent = (
    <div
        style={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyItems: 'start',
            margin: '0 auto',
            maxWidth: 'calc(100% + 1.25rem)',
            width: '850px',
        }}
    >
        <div
            style={{
                backgroundColor: 'hsl(var(--nordstar-color-background-highlight))',
                marginTop: '-0.75rem',
                width: '100%',
            }}
        >
            <img
                alt="placeholder"
                src="https://picsum.photos/1920/1080"
                style={{
                    maxHeight: '28rem',

                    objectFit: 'cover',
                    objectPosition: 'center',
                    width: '100%',
                }}
                title="placeholder"
            />
            <Label style={{ fontSize: '.75rem', padding: '1rem .75rem' }}>
                Images from <a href="https://picsum.photos/">Lorem Picsum</a>.
            </Label>
        </div>

        {Array.from({ length: 8 }).map((_, index) => (
            <Fragment key={index}>
                <p style={{ width: '100%' }}>
                    <div
                        style={{
                            backgroundColor: 'hsl(var(--nordstar-color-primary))',
                            left: '0',
                            position: 'sticky',
                            right: '0',
                            top: '5rem',
                            width: '100%',
                        }}
                    >
                        <Label
                            style={{
                                color: 'hsl(var(--nordstar-color-primary-foreground))',
                                padding: '1.5rem .75rem',
                            }}
                        >
                            Section {index}
                        </Label>
                    </div>
                    <div style={{ marginBottom: '6rem', padding: '0 .75rem' }}>
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
                alignItems: 'end',
                backgroundColor: 'hsl(var(--nordstar-color-background-highlight))',
                display: 'flex',
                height: 'calc(100dvh - 5.75rem)',
                justifyItems: 'center',
                padding: '.75rem',
                width: '100%',
            }}
        >
            <Label
                style={{
                    fontSize: '.75rem',
                    lineHeight: '1.25rem',
                    opacity: '.75',
                    textAlign: 'center',
                    textTransform: 'unset',
                    width: '100%',
                }}
            >
                Added padding to allow for demo content to be fully scrolled through.
            </Label>
        </div>
    </div>
);
