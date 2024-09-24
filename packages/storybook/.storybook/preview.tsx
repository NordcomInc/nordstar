import React from 'react';

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
                        secondary: '#1e79ed'
                    },
                    fonts: {
                        heading: 'Montserrat',
                        body: 'Montserrat'
                    }
                }}
            >
                <View withoutWrapper={true}>
                    <article className="flex flex-col gap-3">
                        <Story />
                    </article>
                </View>
            </NordstarProvider>
        );
    }
];

const currentTheme = addons.getConfig().theme || darkTheme;
const parameters: Preview['parameters'] = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    options: {
        storySort: {
            method: 'alphabetical'
        }
    },
    controls: {
        matchers: {
            color: /(background|color|borderColor)$/i,
            date: /Date$/,
            number: /[0-9]+/
        }
    },
    layout: 'fullscreen',
    backgrounds: {
        default: 'dark',
        values: [
            {
                name: 'dark',
                value: '#000000'
            },
            {
                name: 'white',
                value: '#fefefe'
            }
        ]
    },
    darkMode: {
        current: 'dark',
        stylePreview: true,
        darkClass: 'dark',
        lightClass: 'light',
        classTarget: 'html',
        dark: darkTheme,
        light: lightTheme
    },
    grid: {
        cellSize: currentTheme.gridCellSize
    },
    docs: {
        page: DocTemplate,
        toc: {
            contentSelector: '.sbdocs-content',
            headingSelector: 'h1, h2, h3',
            ignoreSelector: '#primary',
            title: 'Table of Contents',
            disable: false,
            unsafeTocbotOptions: {
                orderedList: false
            }
        },
        inlineStories: true,
        theme: currentTheme,
        story: {
            inline: true,
            //iframeHeight: 145,
            height: '100%',
            maxHeight: '300px'
        }
    }
};

export default {
    tags: ['autodocs'],
    decorators,
    parameters
} satisfies Preview;
