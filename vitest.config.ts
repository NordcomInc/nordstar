import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [] // TODO: Handle `@/` aliases
    },
    test: {
        coverage: {
            all: true,
            include: ['src/**/*.{js,ts,jsx,tsx}'],
            exclude: ['**/*.d.ts', '**/*.test.{js,ts,jsx,tsx}', '**/*.spec.{js,ts,jsx,tsx}']
        },
        environment: 'jsdom',
        globals: true,
        setupFiles: ['./.vitest/setup.ts'],
        useAtomics: true
    }
});
