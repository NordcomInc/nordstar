import '@/styles/base.scss';

import { NordstarProvider } from '@nordcom/nordstar';
import type { Metadata, Viewport } from 'next';
import { Montserrat } from 'next/font/google';

const font = Montserrat({
    weight: 'variable',
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-primary',
    preload: true
});

export const metadata: Metadata = {
    title: {
        default: '',
        template: `%s | Nordstar Component Library`
    }
};

export const viewport: Viewport = {
    initialScale: 1,
    userScalable: true,
    width: 'device-width',
    interactiveWidget: 'resizes-visual',
    themeColor: '#000000',
    colorScheme: 'dark'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head />
            <body className={`${font.variable}`}>
                <NordstarProvider
                    theme={{
                        accents: {
                            primary: '#ed1e79',
                            secondary: '#ed1e79'
                        },
                        fonts: {
                            heading: 'var(--font-primary)',
                            body: 'var(--font-primary)'
                        }
                    }}
                >
                    {children}
                </NordstarProvider>
            </body>
        </html>
    );
}
