import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    root: resolve(__dirname, 'src'),
    build: {
        target: 'esnext',
        copyPublicDir: false,
        emptyOutDir: true,
        outDir: resolve(__dirname, 'dist'),
        sourcemap: true,
        lib: {
            entry: ['index.ts'],
            formats: ['es']
        },
        rollupOptions: {}
    },
    plugins: [
        react(),
        libInjectCss(),
        tsConfigPaths(),
        dts({
            clearPureImport: false,
            rollupTypes: false,
            insertTypesEntry: true,
            tsconfigPath: resolve(__dirname, 'tsconfig.json')
        })
    ]
});
