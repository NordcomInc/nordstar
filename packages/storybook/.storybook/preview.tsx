import { NordstarProvider } from '@nordcom/nordstar';
import React from 'react';

import type { Preview } from '@storybook/react';

const decorators: Preview['decorators'] = [
    (Story, { globals: {} }) => {
        return (
            <NordstarProvider>
                <Story />
            </NordstarProvider>
        );
    }
];

const brand = {
    brandTitle: "Nordcom Group Inc.'s Nordstar",
    brandUrl: 'https://nordstar.nordcom.io/',
    brandTarget: '_self',
    appBorderRadius: 0
};

const parameters: Preview['parameters'] = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    options: {
        storySort: {
            method: 'alphabetical',
            order: ['Foundations', 'Components']
        }
    },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    },
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
        dark: {
            ...brand,
            appBg: '#262626',
            barBg: '#262626',
            background: '#262626',
            appContentBg: '#262626',
            brandImage: 'https://nordcom.io/logo-light.svg'
        }
    }
};

export default {
    decorators,
    parameters
} satisfies Preview;
