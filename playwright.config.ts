import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright drives the real, statically-exported documentation site — the same
 * artifact GitHub Pages ships — served behind its `/nordstar` base path by a tiny
 * dependency-free static server. `reducedMotion: 'reduce'` opts every test into
 * the library's `prefers-reduced-motion` path, so the new entrance animations
 * resolve instantly and interactions stay deterministic.
 */
const PORT = Number(process.env.E2E_PORT ?? 4321);
const BASE_URL = `http://127.0.0.1:${PORT}`;

export default defineConfig({
    expect: { timeout: 7_500 },
    forbidOnly: !!process.env.CI,
    fullyParallel: true,
    reporter: process.env.CI
        ? [['github'], ['list'], ['html', { open: 'never' }]]
        : [['list'], ['html', { open: 'never' }]],
    retries: process.env.CI ? 2 : 0,
    testDir: './e2e',
    testMatch: '**/*.spec.ts',
    timeout: 30_000,
    workers: process.env.CI ? 2 : undefined,
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
    ],
    use: {
        baseURL: BASE_URL,
        reducedMotion: 'reduce',
        screenshot: 'only-on-failure',
        trace: 'on-first-retry',
    },
    webServer: {
        command: 'node docs/scripts/serve-export.mjs',
        env: { PORT: String(PORT) },
        reuseExistingServer: !process.env.CI,
        stderr: 'pipe',
        stdout: 'pipe',
        timeout: 120_000,
        url: `${BASE_URL}/nordstar/`,
    },
});
