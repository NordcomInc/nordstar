import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [] // TODO: Handle `@/` aliases
    },
    test: {
        coverage: {
            all: true,
            exclude: [
                '**/*.d.ts',
                '**/*.test.{js,ts,jsx,tsx}',
                '**/*.stories.{js,ts,jsx,tsx}',
                '**/src/app/{page,layout}.{js,ts,jsx,tsx}',
                '**/packages/**/src/index.{js,ts,jsx,tsx}'
            ],
            include: ['**/src/**/*.{js,ts,jsx,tsx}'],
            provider: 'v8'
        },
        environment: 'jsdom',
        globals: true,
        setupFiles: ['./.vitest/setup.ts'],
        useAtomics: true
    }
});
