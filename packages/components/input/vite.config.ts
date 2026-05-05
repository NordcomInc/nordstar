import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { codecovVitePlugin } from '@codecov/vite-plugin';
import { defineConfig, mergeConfig } from 'vite';
import dts from 'vite-plugin-dts';

import base from '../vite.config';

const __dirname = dirname(fileURLToPath(import.meta.url));

const name = 'Nordstar.Component.Input';
export default mergeConfig(
    base,
    defineConfig({
        resolve: {
            tsconfigPaths: true,
            alias: {
                '@': resolve(__dirname, '.'),
            },
        },
        root: resolve(__dirname),
        build: {
            rollupOptions: {
                output: {
                    name,
                },
            },
        },
        plugins: [
            dts({
                clearPureImport: false,
                copyDtsFiles: true,
                entryRoot: 'src',
                insertTypesEntry: true,
                tsconfigPath: `./tsconfig.json`,
                include: ['./**/src'],
            }),
            codecovVitePlugin({
                enableBundleAnalysis: !!process.env.CODECOV_TOKEN,
                bundleName: name,
                uploadToken: process.env.CODECOV_TOKEN,
            }),
        ],
    }),
);
