import { Heading, View } from '@nordcom/nordstar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Documentation',
    alternates: {
        canonical: 'https://nordcominc.github.io/nordstar/docs/customization/'
    }
};

export default async function DocsCustomizationPage() {
    return (
        <View withoutWrapper={true}>
            <Heading level="h1">Customization</Heading>
        </View>
    );
}
