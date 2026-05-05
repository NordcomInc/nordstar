import { Heading, View } from '@nordcom/nordstar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Documentation',
    alternates: {
        canonical: 'https://nordcominc.github.io/nordstar/docs/getting-started/'
    }
};

export default async function DocsGettingStartedPage() {
    return (
        <View withoutWrapper={true}>
            <Heading level="h1">Getting Started</Heading>
        </View>
    );
}
