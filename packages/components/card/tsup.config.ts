import { defineConfig } from 'tsup';

export default defineConfig({
    cjsInterop: true,
    clean: true,
    entry: ['src/index.ts', 'src/**/*.ts(x)?', '!src/**/*.(stories|test).ts(x)?'],
    format: ['esm'],
    keepNames: true,
    skipNodeModulesBundle: true,
    sourcemap: true,
    target: 'esnext',
    tsconfig: 'tsconfig.json',
    loader: {
        '.css': 'local-css',
        '.scss': 'local-css'
    }
});
