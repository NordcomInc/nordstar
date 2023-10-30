import React from 'react';

import type { Preview } from '@storybook/react';

const decorators: Preview['decorators'] = [
    (Story, { globals: {} }) => {
        return (
            <div>
                <Story />
            </div>
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
    darkMode: {
        current: 'dark',
        stylePreview: true,
        darkClass: 'dark',
        lightClass: 'light',
        classTarget: 'html',
        dark: {
            ...brand,
            appBg: '#000000',
            barBg: '#000000',
            background: '#000000',
            appContentBg: '#000000',
            brandImage: 'https://nordcom.io/logo-light.svg'
        },
        light: {
            ...brand,
            appBg: '#e6e6e6',
            barBg: '#e6e6e6',
            background: '#e6e6e6',
            appContentBg: '#e6e6e6',
            brandImage: 'https://nordcom.io/logo.svg'
        }
    }
};

export default {
    decorators,
    parameters
} satisfies Preview;
