import { defineConfig, mergeConfig } from 'vitest/config';

import base from './vite.config';

const reporters = ['verbose'];
const extraReporters = !!process.env.GITHUB_ACTIONS ? ['github-actions'] : [];

export default mergeConfig(
    base,
    defineConfig({
        test: {
            bail: 2,
            environment: 'happy-dom',
            exclude: ['**/*.d.ts', '**/*.stories.*', '**/dist/**/*.*', '**/node_modules/**/*.*'],
            globals: true,
            maxConcurrency: 16,
            passWithNoTests: true,
            reporters: [...reporters, ...extraReporters],
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
                    '**/*.d.ts',
                    '**/*.test.*',
                    '**/*.stories.*',
                    '**/src/app/{page,layout}.*',
                    '**/packages/**/src/index.*',
                    '**/*.css',
                    '**/dist/**/*.*',
                    'packages/core/system/src/colors.ts'
                ],
                include: ['**/src/**/*.{js,ts,jsx,tsx}'],
                provider: 'v8',
                reporter: ['text', 'json-summary', 'json'],
                reportOnFailure: true
            },

            typecheck: {
                tsconfig: './tsconfig.test.json'
            }
        }
    })
);
