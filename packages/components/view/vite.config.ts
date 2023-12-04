import { resolve } from 'node:path';
import { defineConfig, mergeConfig } from 'vite';

import base from '../vite.config';

export default mergeConfig(
    base,
    defineConfig({
        root: resolve(__dirname),
        build: {
            lib: {
                entry: ['src/view.tsx']
            },
            rollupOptions: {
                output: {
                    name: 'Nordstar.Component.View'
                }
            }
        }
    })
);
