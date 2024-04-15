import React from 'react';

import { NordstarProvider, View } from '@nordcom/nordstar';

import type { Preview } from '@storybook/react';

import './style.css';

const decorators: Preview['decorators'] = [
    (Story) => {
        return (
            <NordstarProvider
                theme={{
                    accents: {
                        primary: '#ed1e79',
                        secondary: '#1e79ed'
                    },
                    fonts: {
                        heading: 'Montserrat, sans-serif',
                        body: 'Montserrat, sans-serif'
                    }
                }}
            >
                <View withoutWrapper>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--layout-page-spacing)' }}>
                        <Story />
                    </div>
                </View>
            </NordstarProvider>
        );
    }
];

const brand = {
    brandImage: 'https://nordcom.io/logo-light.svg',
    brandTarget: '_self',
    brandTitle: "Nordcom Group Inc.'s Nordstar",
    brandUrl: 'https://nordstar.nordcom.io/'
};

const theme: any = {
    ...brand,
    appBg: '#262626',
    appBorderColor: '#262626',
    appBorderRadius: 0,
    appContentBg: '#000000',
    appPreviewBg: '#000000',
    barBg: '#262626',
    barHoverColor: '',
    barSelectedColor: '#ed1e79',
    barTextColor: '#fefefe',
    booleanBg: '#ed1e79',
    booleanSelectedBg: '#000000',
    buttonBg: '#ed1e79',
    buttonBorder: '#ed1e79',
    colorPrimary: '#ed1e79',
    colorSecondary: '#ed1e79',
    fontBase: `Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif`,
    gridCellSize: 5,
    inputBg: '#000000',
    inputBorder: '#fefefe',
    inputBorderRadius: 0,
    inputTextColor: '#fefefe',
    textColor: '#fefefe',
    textInverseColor: '#000000',
    textMutedColor: '#262626'
};

const parameters: Preview['parameters'] = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    options: {
        storySort: {
            method: 'alphabetical'
        }
    },
    controls: {
        matchers: {}
    },
    layout: 'fullscreen',
    backgrounds: {
        default: 'dark',
        values: [
            {
                name: 'dark',
                value: '#000000'
            }
        ]
    },
    darkMode: {
        current: 'dark',
        stylePreview: true,
        darkClass: 'dark',
        lightClass: 'light',
        classTarget: 'html',
        dark: theme
    },
    docs: {
        theme,
        toc: true,
        story: {
            inline: false
        }
    }
};

export default {
    decorators,
    parameters
} satisfies Preview;
