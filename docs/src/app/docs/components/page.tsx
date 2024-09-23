import { Heading } from '@nordcom/nordstar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Components',
    alternates: {
        canonical: 'https://nordstar.dev/docs/components/'
    }
};

export default async function ComponentsDocsPage() {
    return (
        <>
            <Heading level="h1">Components</Heading>
        </>
    );
}
