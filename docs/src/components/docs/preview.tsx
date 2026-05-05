import 'server-only';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { codeToHtml } from 'shiki';

import { examples, type ExampleName } from '@/examples/registry.generated';

import { PreviewActions } from './preview-actions';

const EXAMPLES_ROOT = path.resolve(process.cwd(), 'src', 'examples');

export type PreviewProps = {
    name: ExampleName;
    /** Optional caption shown above the example. */
    caption?: string;
};

export async function Preview({ name, caption }: PreviewProps) {
    const loader = examples[name];
    if (!loader) throw new Error(`<Preview>: unknown example "${name}"`);

    const mod = (await loader()) as { default: React.ComponentType };
    const Example = mod.default;

    const sourcePath = path.join(EXAMPLES_ROOT, `${name}.tsx`);
    const source = (await fs.readFile(sourcePath, 'utf8')).trimEnd();

    const html = await codeToHtml(source, {
        lang: 'tsx',
        theme: 'github-dark-dimmed'
    });

    return (
        <figure className="my-6 overflow-hidden rounded-lg border border-background-highlight">
            {caption ? <figcaption className="px-4 py-2 text-foreground-highlight text-xs">{caption}</figcaption> : null}
            <div className="flex items-center justify-center bg-background p-8">
                <Example />
            </div>
            <div className="border-t border-background-highlight">
                <PreviewActions source={source} />
                <div
                    className="overflow-x-auto px-4 py-3 text-sm leading-relaxed [&_pre]:!bg-transparent"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
        </figure>
    );
}
