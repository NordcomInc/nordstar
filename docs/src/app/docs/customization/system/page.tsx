import { Heading, View } from '@nordcom/nordstar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Documentation',
    alternates: {
        canonical: 'https://nordcominc.github.io/nordstar/docs/customization/system/'
    }
};

export default async function DocsCustomizationSystemPage() {
    return (
        <View withoutWrapper={true}>
            <Heading level="h1">System</Heading>
        </View>
    );
}
