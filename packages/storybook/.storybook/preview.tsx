import { NordstarProvider, View } from '@nordcom/nordstar';
import { addons } from '@storybook/manager-api';
import type { Preview } from '@storybook/react';
import DocTemplate from './documentation-template.mdx';
import { darkTheme, lightTheme } from './manager';

import './globals.css';

const decorators: Preview['decorators'] = [
    (Story) => {
        return (
            <NordstarProvider
                theme={{
                    accents: {
                        primary: '#ed1e79',
                        secondary: '#1e79ed',
                    },
                    fonts: {
                        body: 'Montserrat',
                        heading: 'Montserrat',
                    },
                }}
            >
                <View withoutWrapper={true}>
                    <article className="flex flex-col gap-3">
                        <Story />
                    </article>
                </View>
            </NordstarProvider>
        );
    },
];

const currentTheme = addons.getConfig().theme || darkTheme;
const parameters: Preview['parameters'] = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    layout: 'fullscreen',
    backgrounds: {
        default: 'dark',
        values: [
            {
                name: 'dark',
                value: '#000000',
            },
            {
                name: 'white',
                value: '#fefefe',
            },
        ],
    },
    controls: {
        matchers: {
            color: /(background|color|borderColor)$/i,
            date: /Date$/,
            number: /[0-9]+/,
        },
    },
    darkMode: {
        classTarget: 'html',
        current: 'dark',
        dark: darkTheme,
        darkClass: 'dark',
        light: lightTheme,
        lightClass: 'light',
        stylePreview: true,
    },
    docs: {
        inlineStories: true,
        page: DocTemplate,
        theme: currentTheme,
        story: {
            //iframeHeight: 145,
            height: '100%',
            inline: true,
            maxHeight: '300px',
        },
        toc: {
            contentSelector: '.sbdocs-content',
            disable: false,
            headingSelector: 'h1, h2, h3',
            ignoreSelector: '#primary',
            title: 'Table of Contents',
            unsafeTocbotOptions: {
                orderedList: false,
            },
        },
    },
    grid: {
        cellSize: currentTheme.gridCellSize,
    },
    options: {
        storySort: {
            method: 'alphabetical',
        },
    },
};

export default {
    tags: ['autodocs'],
    decorators,
    parameters,
} satisfies Preview;
