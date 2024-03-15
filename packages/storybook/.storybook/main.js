import { dirname, join } from 'node:path';
import remarkGfm from 'remark-gfm';

/** @type { import('@storybook/react').Preview } */
const preview = {
    stories: ['../../components/**/*.stories.{ts,tsx}'],
    staticDirs: ['../public'],
    addons: [
        getAbsolutePath('storybook-dark-mode'),
        {
            name: '@storybook/addon-docs',
            options: {
                mdxPluginOptions: {
                    mdxCompileOptions: {
                        remarkPlugins: [remarkGfm]
                    }
                }
            }
        },
        getAbsolutePath('@storybook/addon-a11y'),
        getAbsolutePath('@storybook/addon-essentials'),
        getAbsolutePath('@storybook/addon-links')
    ],
    framework: {
        name: getAbsolutePath('@storybook/react-vite'),
        options: {}
    },
    core: {
        disableTelemetry: true
    },
    typescript: {
        reactDocgen: true
    }
};

export default preview;

function getAbsolutePath(value) {
    return dirname(require.resolve(join(value, 'package.json')));
}
