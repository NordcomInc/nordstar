import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vitest/config';

const reporters = ['verbose'];
const extraReporters = !!process.env.GITHUB_ACTIONS ? ['github-actions'] : [];
const exclude = [
    '**/.next',
    '**/.turbo',
    '**/*.*css',
    '**/*.d.ts',
    '**/*.js*',
    '**/*.mjs*',
    '**/*.stories.*',
    '**/*.test.*',
    '**/coverage',
    '**/dist',
    '**/docs',
    '**/node_modules',
    '**/plop',
    '**/public',
    '**/src/index.ts',
    '**/storybook-static',
    '**/storybook',
    '**/vite.*.ts',
    '**/vitest.*.ts',
    '**/postcss.config.*',
    'tailwind.config.cjs',
    'vite.config.ts',
    'vitest.config.ts',
    'vitest.workspace.ts',
    '.prettierrc.cjs'
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
        workspace: 'vitest.workspace.ts',
        bail: 2,
        environment: 'happy-dom',
        exclude,
        maxConcurrency: 16,
        passWithNoTests: true,
        silent: false,
        reporters: [...reporters, ...extraReporters, 'github-actions'],

        pool: 'threads',

        setupFiles: [`${__dirname}/vitest.setup.ts`],

        coverage: {
            all: true,
            exclude,
            provider: 'v8',
            reporter: ['json', 'json-summary', 'text'],
            reportOnFailure: true
        },

        typecheck: {
            tsconfig: './tsconfig.test.json'
        }
    }
});
