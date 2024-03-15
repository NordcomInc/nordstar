import MagicString from 'magic-string';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig, mergeConfig } from 'vite';

import base from '../vite.config';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default mergeConfig(
    base,
    defineConfig({
        root: resolve(__dirname),
        build: {
            rollupOptions: {
                output: {
                    name: 'Nordstar.Component.Input'
                }
            }
        },
        plugins: [
            {
                // TODO: Turn this into a proper plugin or figure out a better way to do this.
                name: 'nordcom:use-client',
                apply: 'build',
                enforce: 'post',
                renderChunk(code, chunk) {
                    const ms = new MagicString(code);

                    if (chunk.viteMetadata) ms.prepend(`'use client';\n\n`);

                    return {
                        code: ms.toString(),
                        map: ms.generateMap()
                    };
                }
            }
        ]
    })
);
