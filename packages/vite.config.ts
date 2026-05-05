import { globSync } from 'glob';
import { dirname, extname, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { createLogger, defineConfig, mergeConfig } from 'vite';

import base from '../vite.config';

const __dirname = dirname(fileURLToPath(import.meta.url));

const input = Object.fromEntries(
    globSync('./**/src/**/*.ts*', {
        ignore: ['**/*.d.ts', '**/coverage/**', '**/dist/**', '**/node_modules/**', '**/*.test.*', '**/*.stories.*'],
    }).map((file) => {
        const filenameWithoutExt = file.slice(0, file.length - extname(file).length);

        return [relative('src', filenameWithoutExt), resolve(process.cwd(), file)];
    }),
);

const logger = createLogger();
logger.info(JSON.stringify({ __dirname, ...input }, null, 4));

export default mergeConfig(
    base,
    defineConfig({
        resolve: {
            tsconfigPaths: true,
            alias: {
                '@': resolve(__dirname, '.'),
            },
        },
        root: process.cwd(),
        build: {
            lib: {
                entry: input,
                formats: ['es'],
            },
            rollupOptions: {
                external: ['react', 'react/jsx-runtime', 'react-dom', 'clsx'],
                output: {
                    globals: { react: 'React', 'react-dom': 'ReactDOM' },
                },
            },
        },
    }),
);
