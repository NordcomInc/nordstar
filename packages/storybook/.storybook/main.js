import { dirname, join } from 'node:path';
import remarkGfm from 'remark-gfm';

module.exports = {
    stories: ['./readme.stories.mdx', '../../components/**/*.stories.{ts,tsx}'],
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

function getAbsolutePath(value) {
    return dirname(require.resolve(join(value, 'package.json')));
}
