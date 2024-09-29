import { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
    stories: ['../../**/src/**/*.mdx', '../../**/src/**/*.stories.@(ts|tsx)'],
    staticDirs: [],
    addons: [
        {
            name: '@storybook/addon-essentials',
            options: {
                actions: true,
                backgrounds: true,
                controls: true,
                docs: true,
                viewport: true,
                toolbars: true
            }
        },
        '@storybook/addon-controls',
        '@storybook/addon-docs',
        'storybook-addon-react-docgen',
        'storybook-addon-sass-postcss',
        'storybook-dark-mode'
    ],
    framework: '@storybook/react-vite',
    typescript: {
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true
        },
        check: false
    },
    docs: {
        defaultName: 'Documentation',
        docsMode: true
    },
    core: {
        disableTelemetry: true,
        disableWhatsNewNotifications: true,
        crossOriginIsolated: false
    }
};

export default config;
