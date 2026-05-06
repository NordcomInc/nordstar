import { promises as fs } from 'node:fs';
import path from 'node:path';
import { Card } from '@nordcom/nordstar';
import { type ExampleName, examples } from '@/examples/registry.generated';
import 'server-only';
import { codeToHtml } from 'shiki';
import { PreviewActions } from './preview-actions';

const EXAMPLES_ROOT = path.resolve(process.cwd(), 'src', 'examples');

type ExampleLoader = () => Promise<{ default: React.ComponentType }>;
const registry = examples as Record<string, ExampleLoader>;

export type PreviewProps = {
    name: ExampleName;
    /** Optional caption shown above the example. */
    caption?: string;
};

export async function Preview({ name, caption }: PreviewProps) {
    const loader = registry[name];
    if (!loader) throw new Error(`<Preview>: unknown example "${name}"`);

    const mod = await loader();
    const Example = mod.default;

    const sourcePath = path.join(EXAMPLES_ROOT, `${name}.tsx`);
    const source = (await fs.readFile(sourcePath, 'utf8')).trimEnd();

    const html = await codeToHtml(source, {
        lang: 'tsx',
        theme: 'github-dark-dimmed',
    });

    return (
        <Card
            as={'figure'}
            className="overflow-hidden rounded-none border-2 border-foreground-highlight border-solid p-0"
        >
            <div className="flex min-h-16 flex-col items-stretch justify-start">
                {caption ? <figcaption className="p-5 text-foreground-highlight text-xs">{caption}</figcaption> : null}
                <div className="p-5">
                    <Example />
                </div>

                <div className="bg-background-highlight/50 p-5 pt-0">
                    <PreviewActions source={source} />
                    <div
                        className="overflow-x-auto text-sm leading-relaxed [&_pre]:bg-transparent!"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                </div>
            </div>
        </Card>
    );
}
