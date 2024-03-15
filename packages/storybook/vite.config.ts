import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    root: resolve(__dirname),
    build: {
        chunkSizeWarningLimit: 9999999 // We don't really care about this in storybook.
    },
    plugins: [react()]
});
