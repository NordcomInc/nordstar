import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    root: process.cwd(),
    build: {
        lib: {
            entry: [],
            formats: ['es']
        },
        rollupOptions: {
            external: ['react', 'react/jsx-runtime', 'react-dom', 'clsx'],
            output: {
                globals: { react: 'React', 'react-dom': 'ReactDOM' }
            }
        }
    },
    plugins: [tsConfigPaths(), react()]
});
