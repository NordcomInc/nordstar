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
        root: resolve(__dirname),
        build: {
            rollupOptions: {
                external: [
                    /^@nordcom\/nordstar-/,
                    '@nordcom/nordstar-system',
                    'class-variance-authority',
                    'clsx',
                    'tailwind-merge'
                ],
                output: {
                    name,
                    preserveModules: true
                }
            }
        },
        css: {
            postcss: 'postcss.config.cjs',
            transformer: 'postcss',
            devSourcemap: true,
            modules: {
                scopeBehaviour: 'local',
                exportGlobals: true,
                hashPrefix: 'TEST___'
            }
        },
        plugins: [
            dts({
                clearPureImport: false,
                copyDtsFiles: true,
                entryRoot: 'src',
                insertTypesEntry: true,
                rollupTypes: false,
                tsconfigPath: `./tsconfig.json`,
                include: ['**/src']
            }),
            codecovVitePlugin({
                enableBundleAnalysis: !!process.env.CODECOV_TOKEN,
                bundleName: name,
                uploadToken: process.env.CODECOV_TOKEN
            })
        ]
    })
);
