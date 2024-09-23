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

export default async function ComponentDocsPage({ params: { name } }: { params: ComponentDocsPageParams }) {
    // TODO: Get component.

    return (
        <>
            <Heading level="h1">{name}</Heading>
        </>
    );
}
