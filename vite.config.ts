import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import react from '@vitejs/plugin-react-swc';
import scss from 'postcss-scss';
import { defineConfig } from 'vite';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import tsConfigPaths from 'vite-tsconfig-paths';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    root: resolve(__dirname),
    resolve: {
        alias: []
    },
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
            external: [/^@nordcom\/nordstar-/, 'react', 'react/jsx-runtime', 'react-dom'],
            treeshake: 'recommended',
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
                esModule: true,
                exports: 'named',
                format: 'esm',
                globals: { react: 'React', 'react-dom': 'ReactDOM' },
                hoistTransitiveImports: true,
                indent: false,
                interop: 'esModule',
                minifyInternalExports: true,
                noConflict: true,
                sourcemapExcludeSources: false,
                strict: true
            }
        }
    },
    esbuild: {
        jsx: 'automatic'
    },
    css: {
        postcss: {
            map: true,
            plugins: [],
            syntax: scss
        }
    },
    plugins: [
        react({
            tsDecorators: true
        }),
        libInjectCss(),
        tsConfigPaths()
    ]
});
