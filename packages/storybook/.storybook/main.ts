import { StorybookConfig } from '@storybook/react-vite';
import path from 'node:path';

const config: StorybookConfig = {
    stories: ['../../**/src/**/*.mdx', '../../**/src/**/*.stories.@(ts|tsx)'],
    staticDirs: ['../public'],
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
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
            tsconfigPath: path.resolve(path.join(process.cwd().split('/packages')[0], 'tsconfig.json'))
        }
    },
    docs: {
        defaultName: 'Overview',
        docsMode: false
    },
    core: {
        disableTelemetry: true,
        disableWhatsNewNotifications: true,
        crossOriginIsolated: false
    }
};

export default config;
