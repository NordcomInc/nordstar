import { Heading, View } from '@nordcom/nordstar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Documentation',
    alternates: {
        canonical: 'https://nordcominc.github.io/nordstar/docs/customization/theme/'
    }
};

export default async function DocsCustomizationThemePage() {
    return (
        <View withoutWrapper={true}>
            <Heading level="h1">Theme</Heading>
        </View>
    );
}
