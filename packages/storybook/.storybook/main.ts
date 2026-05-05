import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
    framework: '@storybook/react-vite',
    staticDirs: [],
    stories: ['../../**/src/**/*.mdx', '../../**/src/**/*.stories.@(ts|tsx)'],
    addons: [
        {
            name: '@storybook/addon-essentials',
            options: {
                actions: true,
                backgrounds: true,
                controls: true,
                docs: true,
                toolbars: true,
                viewport: true,
            },
        },
        '@storybook/addon-controls',
        '@storybook/addon-docs',
        'storybook-addon-react-docgen',
        'storybook-addon-sass-postcss',
        'storybook-dark-mode',
    ],
    core: {
        crossOriginIsolated: false,
        disableTelemetry: true,
        disableWhatsNewNotifications: true,
    },
    docs: {
        defaultName: 'Documentation',
        docsMode: true,
    },
    typescript: {
        check: false,
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
        },
    },
};

export default config;
