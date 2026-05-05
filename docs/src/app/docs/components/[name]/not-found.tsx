import { Heading, View } from '@nordcom/nordstar';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '404: Page Not Found',
    icons: {
        icon: ['/favicon.png'],
        shortcut: ['/favicon.png'],
        apple: ['/favicon.png']
    },
    robots: {
        index: false,
        follow: false
    },
    referrer: 'origin'
};

export default function NotFound() {
    return (
        <View withoutWrapper={true}>
            <Heading>Page not found</Heading>
            <Heading level="h2">Error 404</Heading>
        </View>
    );
}
