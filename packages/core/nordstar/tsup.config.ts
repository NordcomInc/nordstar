import { defineConfig } from 'tsup';

export default defineConfig({
    clean: true,
    target: 'esnext',
    entry: ['src/index.ts', '!src/scripts'],
    format: ['esm']
});
