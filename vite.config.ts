import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import tsConfigPaths from 'vite-tsconfig-paths';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    root: resolve(__dirname),
    build: {
        copyPublicDir: false,
        cssCodeSplit: true,
        cssMinify: false,
        emptyOutDir: true,
        minify: false,
        outDir: 'dist',
        sourcemap: true,
        target: 'esnext',
        rollupOptions: {
            external: [/^@nordcom\/nordstar-/],
            treeshake: false,
            output: {
                assetFileNames: ({ name }) => {
                    if (name && !['.css'].every((ext) => !name.includes(ext))) {
                        return 'index.css';
                    }

                    return 'assets/[name][extname]';
                },
                intro: (chunk) => {
                    if (chunk.isEntry && chunk.facadeModuleId?.endsWith('.tsx')) {
                        return `import 'react';`;
                    }

                    return '';
                },
                chunkFileNames: 'chunks/[name].[hash].js',
                entryFileNames: '[name].js',
                generatedCode: {
                    arrowFunctions: true,
                    constBindings: true,
                    objectShorthand: true,
                    preset: 'es2015',
                    reservedNamesAsProps: true,
                    symbols: true
                },
                esModule: true,
                exports: 'named',
                format: 'esm',
                freeze: false,
                hoistTransitiveImports: false,
                interop: 'esModule',
                minifyInternalExports: true,
                preserveModules: false,
                sourcemapExcludeSources: false,
                strict: true,
                validate: true
            }
        }
    },
    esbuild: {
        jsx: 'automatic'
    },
    plugins: [
        react(),
        libInjectCss(),
        tsConfigPaths(),
        dts({
            clearPureImport: false,
            copyDtsFiles: true,
            entryRoot: 'src',
            include: ['**/src'],
            insertTypesEntry: true,
            logLevel: 'info',
            rollupTypes: false,
            staticImport: true,
            tsconfigPath: `${__dirname}/tsconfig.json`
        })
    ]
});
