import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vitest/config';

import base from './vite.config';

const reporters = ['verbose'];
const extraReporters = !!process.env.GITHUB_ACTIONS ? ['github-actions'] : [];

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    root: resolve(__dirname),
    optimizeDeps: {
        force: true,
        esbuildOptions: {
            define: {
                global: 'globalThis'
            },
            plugins: []
        }
    },
    test: {
        bail: 2,
        environment: 'happy-dom',
        exclude: ['**/*.d.ts', '**/*.stories.*', '**/dist/**/*.*', '**/node_modules/**/*.*'],
        globals: true,
        maxConcurrency: 16,
        passWithNoTests: true,
        silent: false,
        reporters: [...reporters, ...extraReporters],

        pool: 'vmThreads',
        poolOptions: {
            vmThreads: {
                useAtomics: true
            }
        },

        setupFiles: ['./.vitest/setup.ts'],

        browser: {
            name: 'edge',
            provider: 'playwright',
            providerOptions: {
                enabled: false
            }
        },

        coverage: {
            all: true,
            exclude: [
                '**/*.css',
                '**/*.d.ts',
                '**/*.stories.*',
                '**/*.test.*',
                '**/dist/**/*.*',
                '**/node_modules/**/*.*',
                '**/packages/**/src/index.*',
                '**/src/app/{page,layout}.*',
                'packages/core/system/src/colors.ts'
            ],
            include: ['**/src/**/*.{js,ts,jsx,tsx}'],
            provider: 'v8',
            reporter: ['json-summary'],
            reportOnFailure: true
        },

        typecheck: {
            tsconfig: './tsconfig.test.json'
        }
    }
});
