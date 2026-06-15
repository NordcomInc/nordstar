import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { codecovVitePlugin } from '@codecov/vite-plugin';
import { defineConfig, mergeConfig } from 'vite';
import dts from 'vite-plugin-dts';

import base from '../vite.config';

const __dirname = dirname(fileURLToPath(import.meta.url));

const name = 'Nordstar';
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
            rolldownOptions: {
                external: [
                    'react',
                    'react-dom',
                    'react/jsx-runtime',
                    'class-variance-authority',
                    'clsx',
                    'hex-to-hsl',
                    'tailwind-merge',
                    // Radix primitives ship their own React context; bundling them would break
                    // dedup and the 'use client' boundary, so keep every @radix-ui/* package external.
                    /^@radix-ui\//,
                ],
                output: {
                    name,
                    preserveModules: true,
                },
            },
        },
        css: {
            postcss: 'postcss.config.cjs',
            transformer: 'postcss',
            devSourcemap: true,
            modules: {
                scopeBehaviour: 'local',
                exportGlobals: true,
                hashPrefix: 'TEST___',
            },
        },
        plugins: [
            dts({
                bundleTypes: true,
                insertTypesEntry: true,
                tsconfigPath: './tsconfig.json',
                include: ['src/**/*.ts', 'src/**/*.tsx'],
            }),
            codecovVitePlugin({
                enableBundleAnalysis: !!process.env.CODECOV_TOKEN,
                bundleName: name,
                uploadToken: process.env.CODECOV_TOKEN,
            }),
        ],
    }),
);
