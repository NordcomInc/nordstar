import { dirname, join } from 'node:path';
module.exports = {
    stories: [
        './readme.stories.mdx',
        '../../components/**/*.stories.{ts,tsx}'
    ],
    staticDirs: ['../public'],
    addons: [
        getAbsolutePath('storybook-dark-mode'),
        getAbsolutePath('@storybook/addon-a11y'),
        getAbsolutePath('@storybook/addon-essentials'),
        getAbsolutePath('@storybook/addon-links'),
        getAbsolutePath('@storybook/addon-mdx-gfm')
    ],
    framework: {
        name: getAbsolutePath('@storybook/react-vite'),
        options: {}
    },
    core: {
        disableTelemetry: true
    },
    typescript: {
        reactDocgen: false,
    },
};

function getAbsolutePath(value) {
    return dirname(require.resolve(join(value, 'package.json')));
}
