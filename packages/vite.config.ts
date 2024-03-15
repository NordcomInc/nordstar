import { globSync } from 'glob';
import { dirname, extname, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import react from '@vitejs/plugin-react-swc';
import scss from 'postcss-scss';
import { createLogger, defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import tsConfigPaths from 'vite-tsconfig-paths';

const __dirname = dirname(fileURLToPath(import.meta.url));

const input = Object.fromEntries(
    globSync('./**/src/*.ts*')
        .filter((file) => ['.test', '.stories'].every((ext) => !file.includes(ext)))
        .map((file) => {
            const filenameWithoutExt = file.slice(0, file.length - extname(file).length);

            return [relative('src', filenameWithoutExt), resolve(process.cwd(), file)];
        })
);

const logger = createLogger();
logger.info(JSON.stringify(input, null, 4));

export default defineConfig({
    root: resolve(__dirname),
    build: {
        copyPublicDir: false,
        cssCodeSplit: true,
        cssMinify: false,
        emptyOutDir: true,
        lib: {
            entry: input,
            formats: ['es']
        },
        minify: false,
        outDir: 'dist',
        sourcemap: true,
        target: 'esnext',
        rollupOptions: {
            external: ['react', 'react/jsx-runtime', 'react-dom'],
            treeshake: 'recommended',
            input: input,
            output: {
                assetFileNames: ({ name }) => {
                    if (!['.css'].every((ext) => !name.includes(ext))) {
                        return 'index.css';
                    }

                    return 'assets/[name][extname]';
                },
                intro: (chunk) => {
                    if (chunk.isEntry && chunk.facadeModuleId.endsWith('.tsx')) {
                        return `import 'react';`;
                    }

                    return '';
                },
                chunkFileNames: 'chunks/[name].[hash].js',
                dir: 'dist',
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
        tsConfigPaths(),
        dts({
            clearPureImport: true,
            entryRoot: 'src',
            insertTypesEntry: true,
            rollupTypes: false,
            tsconfigPath: 'tsconfig.json',
            include: ['**/src']
        })
    ]
});
