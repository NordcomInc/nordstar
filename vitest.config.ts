import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vitest/config';

const reporters = ['verbose'];
const extraReporters = process.env.GITHUB_ACTIONS ? ['github-actions'] : [];
const exclude = [
    '**/.next',
    '**/.turbo',
    '**/*.*css',
    '**/*.d.ts',
    '**/*.generated.*',
    '**/*.js*',
    '**/*.mjs*',
    '**/*.stories.*',
    '**/coverage',
    '**/dist',
    '**/docs',
    '**/docs/**',
    '**/node_modules',
    '**/plop',
    '**/public',
    '**/scripts/**',
    '**/src/index.ts',
    '**/vite.*.ts',
    '**/vitest.*.ts',
    '**/postcss.config.*',
    'vite.config.ts',
    'vitest.config.ts',
    '.prettierrc.cjs',
];

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    optimizeDeps: {
        force: true,
        esbuildOptions: {
            define: {
                global: 'globalThis',
            },
            plugins: [],
        },
    },
    test: {
        projects: ['packages/**/vitest.config.ts'],
        bail: 2,
        environment: 'happy-dom',
        exclude,
        maxConcurrency: 16,
        passWithNoTests: true,
        silent: false,
        reporters: [...reporters, ...extraReporters],

        pool: 'threads',

        setupFiles: [`${__dirname}/vitest.setup.ts`],

        coverage: {
            exclude,
            provider: 'v8',
            reporter: ['text', 'lcov', 'json', 'json-summary'],
            reportOnFailure: true,
            reportsDirectory: './coverage',
            thresholds: {
                autoUpdate: false,
                branches: 0,
                functions: 0,
                lines: 0,
                statements: 0,
            },
        },

        typecheck: {
            tsconfig: './tsconfig.test.json',
        },
    },
});
