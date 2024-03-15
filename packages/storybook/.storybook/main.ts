import { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
    stories: ['../../components/**/*.stories.{ts,tsx}'],
    staticDirs: ['../public'],
    addons: ['@storybook/addon-essentials', 'storybook-dark-mode'],
    framework: {
        name: '@storybook/react-vite',
        options: {}
    },
    typescript: {
        reactDocgen: 'react-docgen-typescript'
    }
};

export default config;
