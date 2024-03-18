import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vitest/config';

import base from './vite.config';

const reporters = ['verbose'];
const extraReporters = !!process.env.GITHUB_ACTIONS ? ['github-actions'] : [];
const exclude = [
    '**/.next/**/*.*',
    '**/.turbo/**/*.*',
    '**/*.d.ts',
    '**/*.json',
    '**/*.*css',
    '**/*.stories.',
    '**/coverage/**/*.*',
    '**/dist/**/*.*',
    '**/node_modules/**/*.*',
    '**/vite.*.ts',
    '**/vitest.*.ts',
    'vitest.workspace.ts'
];

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
        exclude,
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
                enabled: true
            }
        },

        coverage: {
            all: true,
            exclude,
            provider: 'v8',
            reporter: ['json', 'json-summary'],
            reportOnFailure: true
        },

        typecheck: {
            tsconfig: './tsconfig.test.json'
        }
    }
});
