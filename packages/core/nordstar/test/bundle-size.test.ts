import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'vite';
import { describe, expect, it } from 'vitest';

const __dirname = dirname(fileURLToPath(import.meta.url));

type OutputChunk = { type: 'chunk'; code: string; [key: string]: unknown };
type BuildResult = { output: ReadonlyArray<OutputChunk | { type: 'asset' }> };

describe('tree-shaking', () => {
    it('importing only Button does not include other components', async () => {
        const result = (await build({
            logLevel: 'silent',
            root: __dirname,
            build: {
                minify: false,
                write: false,
                lib: {
                    entry: resolve(__dirname, 'fixtures/single-button.tsx'),
                    fileName: 'fixture',
                    formats: ['es'],
                },
                rollupOptions: {
                    external: ['react', 'react-dom', 'react/jsx-runtime'],
                },
            },
        })) as BuildResult | BuildResult[];

        const single = Array.isArray(result) ? result[0]! : result;
        const code = single.output
            .filter((chunk): chunk is OutputChunk => chunk.type === 'chunk')
            .map((chunk) => chunk.code)
            .join('\n');

        expect(code).toContain('Nordstar.Button');
        expect(code).not.toContain('Nordstar.Card');
        expect(code).not.toContain('Nordstar.Input');
        expect(code).not.toContain('Nordstar.Header');
        expect(code).not.toContain('Nordstar.Heading');
        expect(code).not.toContain('Nordstar.Details');
        expect(code).not.toContain('Nordstar.Accented');
        expect(code).not.toContain('Nordstar.View');
        expect(code).not.toContain('Nordstar.Label');
    });
});
