import { Heading } from '@nordcom/nordstar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Documentation',
    alternates: {
        canonical: 'https://nordstar.nordcom.io/docs/'
    }
};

export default async function DocsPage() {
    return (
        <>
            <Heading level="h1">Overview</Heading>
        </>
    );
}
