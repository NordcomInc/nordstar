import { Heading, View } from '@nordcom/nordstar';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    referrer: 'origin',
    title: '404: Page Not Found',
    icons: {
        apple: ['/favicon.png'],
        icon: ['/favicon.png'],
        shortcut: ['/favicon.png'],
    },
    robots: {
        follow: false,
        index: false,
    },
};

export default function NotFound() {
    return (
        <View withoutWrapper={true}>
            <Heading>Page not found</Heading>
            <Heading level="h2">Error 404</Heading>
        </View>
    );
}
