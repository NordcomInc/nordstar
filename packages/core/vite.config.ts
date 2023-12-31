import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig, mergeConfig } from 'vite';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

import base from '../vite.config';

export default mergeConfig(
    base,
    defineConfig({
        root: resolve(__dirname),
        build: {
            rollupOptions: {
                external: ['react', 'react/jsx-runtime', 'react-dom'],
                output: {
                    globals: {
                        react: 'React',
                        'react-dom': 'ReactDOM'
                    }
                }
            }
        },
        plugins: [react(), libInjectCss()]
    })
);
