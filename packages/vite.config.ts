import { resolve } from 'node:path';
import scss from 'postcss-scss';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    root: resolve(__dirname),
    build: {
        copyPublicDir: false,
        cssCodeSplit: false,
        cssMinify: false,
        emptyOutDir: true,
        lib: { entry: ['src/index.ts'], formats: ['es'] },
        minify: false,
        outDir: 'dist',
        sourcemap: true,
        target: 'esnext',
        rollupOptions: {
            external: [/^@nordcom\/nordstar-/],
            output: {
                esModule: true,
                freeze: true,
                sourcemapExcludeSources: true,
                strict: true
            }
        }
    },
    esbuild: {
        jsx: 'automatic'
    },
    css: {
        postcss: {
            syntax: scss,
            plugins: []
        }
    },
    plugins: [
        tsConfigPaths(),
        dts({
            clearPureImport: false,
            entryRoot: 'src',
            rollupTypes: false,
            insertTypesEntry: true,
            tsconfigPath: 'tsconfig.json'
        })
    ]
});
