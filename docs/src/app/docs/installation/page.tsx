import { Heading, View } from '@nordcom/nordstar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Documentation',
    alternates: {
        canonical: 'https://nordcominc.github.io/nordstar/docs/installation/'
    }
};

export default async function DocsInstallationPage() {
    return (
        <View withoutWrapper={true}>
            <Heading level="h1">Installation</Heading>
        </View>
    );
}
