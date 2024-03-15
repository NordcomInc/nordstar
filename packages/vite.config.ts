import { globSync } from 'glob';
import { dirname, extname, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { createLogger, defineConfig, mergeConfig } from 'vite';
import dts from 'vite-plugin-dts';

import base from '../vite.config';

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

export default mergeConfig(
    base,
    defineConfig({
        root: resolve(__dirname),
        build: {
            lib: {
                entry: input,
                formats: ['es']
            },
            rollupOptions: {
                input: input
            }
        },
        plugins: [
            dts({
                clearPureImport: true,
                entryRoot: 'src',
                insertTypesEntry: true,
                rollupTypes: false,
                tsconfigPath: 'tsconfig.json',
                include: ['**/src']
            })
        ]
    })
);
