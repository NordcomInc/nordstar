import { readdirSync } from 'node:fs';
import { join } from 'node:path';

import { Heading } from '@nordcom/nordstar';
import type { Metadata } from 'next';

export type ComponentDocsPageParams = {
    name: string;
};

export async function generateMetadata({ params: { name } }: { params: ComponentDocsPageParams }): Promise<Metadata> {
    // TODO: Get component.

    return {
        title: name,
        alternates: {
            canonical: `https://nordstar.dev/docs/components/${name}/`
        }
    };
}

export function generateStaticParams(): ComponentDocsPageParams[] {
    const componentsDir = join(process.cwd(), '..', 'packages', 'components');
    return readdirSync(componentsDir, { withFileTypes: true })
        .filter((entry) => entry.isDirectory())
        .map((entry) => ({ name: entry.name }));
}

export default async function ComponentDocsPage({ params: { name } }: { params: ComponentDocsPageParams }) {
    // TODO: Get component.

    return (
        <>
            <Heading level="h1" className="capitalize">
                {name}
            </Heading>
        </>
    );
}
