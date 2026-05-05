import { Heading, View } from '@nordcom/nordstar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Components',
    alternates: {
        canonical: 'https://nordcominc.github.io/nordstar/docs/components/',
    },
};

export default async function DocsComponentsPage() {
    return (
        <View withoutWrapper={true}>
            <Heading level="h1">Components</Heading>
        </View>
    );
}
