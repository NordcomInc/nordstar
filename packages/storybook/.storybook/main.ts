import { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
    stories: ['../../**/src/**/*.stories.@(ts|tsx)'],
    staticDirs: ['../public'],
    addons: ['@storybook/addon-essentials', 'storybook-dark-mode'],
    framework: '@storybook/react-vite',
    typescript: {
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            tsconfigPath: '../../core/nordstar/tsconfig.json'
        }
    },
    docs: {
        autodocs: true,
        defaultName: 'Overview'
    },
    core: {
        disableTelemetry: true,
        disableWhatsNewNotifications: true
    }
};

export default config;
