import MagicString from 'magic-string';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import type { Plugin } from 'vite';
import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import preserveDirectives from 'rollup-preserve-directives';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import tsConfigPaths from 'vite-tsconfig-paths';

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * libInjectCss places it at the top of the file, this is a
 * somewhat hacky way to make sure any potential `use client`
 * directives are hoisted to the top of the file.
 */
function hoistUseClient(): Plugin {
    let resolvedConfig;

    return {
        // TODO: Turn this into a proper plugin or figure out a better way to do this.
        name: 'nordcom:use-client',
        apply: 'build',
        enforce: 'post',
        configResolved(config) {
            resolvedConfig = config;
        },
        generateBundle({ format }, bundle) {
            for (const chunk of Object.values(bundle)) {
                if (
                    chunk.type !== 'chunk' ||
                    !chunk.viteMetadata?.importedCss.size ||
                    !chunk.code.includes('use client')
                ) {
                    continue;
                }

                const ms = new MagicString(chunk.code);

                ms.replaceAll(/['"]use client['"];?\n?/g, '');
                ms.prepend(`'use client';\n`);

                chunk.code = ms.toString();
                if (resolvedConfig.build.sourcemap) {
                    chunk.map = ms.generateMap({ hires: 'boundary' });
                }
            }
        }
    };
}

export default defineConfig({
    root: resolve(__dirname),
    build: {
        copyPublicDir: false,
        cssCodeSplit: true,
        cssMinify: true,
        emptyOutDir: true,
        minify: false,
        outDir: 'dist',
        sourcemap: true,
        target: 'esnext',
        rollupOptions: {
            external: [/^@nordcom\/nordstar-/, 'clsx'],
            treeshake: 'recommended',
            output: {
                intro: (chunk) => {
                    if (chunk.isEntry && chunk.facadeModuleId?.endsWith('.tsx')) {
                        return `import 'react';`;
                    }

                    return '';
                },
                esModule: true,
                exports: 'auto',
                format: 'esm',
                hoistTransitiveImports: false,
                interop: 'esModule',
                noConflict: true,
                minifyInternalExports: false,
                preserveModules: false,
                preserveModulesRoot: 'src',
                sourcemapExcludeSources: false,
                strict: true,
                validate: true
            },
            plugins: [preserveDirectives()]
        }
    },
    esbuild: {
        jsx: 'automatic'
    },
    plugins: [
        react(),
        tsConfigPaths(),
        libInjectCss(),
        hoistUseClient(),
        dts({
            clearPureImport: false,
            copyDtsFiles: true,
            entryRoot: 'src',
            include: ['**/src', `${__dirname}/@types/declaration.d.ts`],
            bundledPackages: ['@nordcom/*'],
            insertTypesEntry: true,
            tsconfigPath: `${__dirname}/tsconfig.json`
        })
    ]
});
