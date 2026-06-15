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
        // `packages/**` projects cover the published code (and feed the coverage
        // floor); the inline `docs` project runs the documentation-site tooling
        // tests — chiefly the changelog parser. It is intentionally *not* merged
        // with this base config: it wants a plain `node` environment and must
        // escape the `**/docs/**` / `**/scripts/**` excludes below. Docs files
        // stay out of the coverage report (see `coverage.exclude`).
        projects: [
            'packages/**/vitest.config.ts',
            {
                test: {
                    environment: 'node',
                    exclude: ['**/node_modules/**', '**/dist/**', '**/.next/**'],
                    include: ['src/**/*.test.ts'],
                    name: 'docs',
                    root: `${__dirname}/docs`,
                },
            },
        ],
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
            // Enforced coverage floor. The suite currently sits at ~100% lines/
            // statements/functions and ~97% branches; these gates leave headroom for
            // churn while still failing CI on a meaningful regression.
            thresholds: {
                autoUpdate: false,
                branches: 85,
                functions: 90,
                lines: 90,
                statements: 90,
            },
        },

        typecheck: {
            tsconfig: './tsconfig.test.json',
        },
    },
});
