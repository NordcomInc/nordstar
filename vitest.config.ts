import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [] // TODO: Handle `@/` aliases
    },
    test: {
        bail: 2,
        environment: 'jsdom',
        maxConcurrency: 16,
        passWithNoTests: true,

        typecheck: {
            tsconfig: './tsconfig.test.json'
        },

        pool: 'vmThreads',
        poolOptions: {
            vmThreads: {
                useAtomics: true
            }
        },

        setupFiles: ['./.vitest/setup.ts'],
        reporters: ['verbose'],
        exclude: ['**/*.d.ts', '**/*.stories.*', '**/dist/**/*.*', '**/node_modules/**/*.*'],

        globals: true,
        deps: {
            web: {
                transformCss: true,
                transformAssets: true
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
            provider: 'v8'
        }
    }
});
