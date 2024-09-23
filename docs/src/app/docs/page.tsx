import { Heading } from '@nordcom/nordstar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Documentation',
    alternates: {
        canonical: 'https://nordstar.dev/docs/'
    }
};

export default async function DocsPage() {
    return (
        <>
            <Heading level="h1">Docs</Heading>
        </>
    );
}
