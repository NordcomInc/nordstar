import '@/styles/globals.css';

import { Providers } from '@/components/providers';
import { Card, cn, Header, View } from '@nordcom/nordstar';
import { GeistMono } from 'geist/font/mono';
import type { Metadata, Viewport } from 'next';
import { Montserrat } from 'next/font/google';
import Link from 'next/link';

const font = Montserrat({
    weight: 'variable',
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-sans',
    preload: true
});

export const metadata: Metadata = {
    metadataBase: new URL(`https://nordstar.dev/`),
    title: {
        default: '',
        template: `%s | Nordstar Component Library`
    },
    robots: {
        follow: true,
        index: true
    },
    referrer: 'origin',
    formatDetection: {
        email: false,
        address: false,
        telephone: false
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
            <body className={cn(font.variable, GeistMono.variable)}>
                <Providers
                    fonts={{
                        heading: font.style.fontFamily,
                        body: font.style.fontFamily,
                        code: GeistMono.style.fontFamily
                    }}
                >
                    <Header>
                        <Header.Logo as={Link} href="/">
                            Nordstar
                        </Header.Logo>
                        <Header.Menu>
                            <Header.Menu.Link as={Link} href="/">
                                Home
                            </Header.Menu.Link>
                            <Header.Menu.Link as={Link} href="https://github.com/NordcomInc/nordstar" target="_blank">
                                GitHub
                            </Header.Menu.Link>
                            <Header.Menu.Link as={Link} href="/docs/" prefetch={false}>
                                Docs
                            </Header.Menu.Link>
                            <Header.Menu.Link as={Link} href="/storybook/" prefetch={false}>
                                Storybook
                            </Header.Menu.Link>
                            <Header.Menu.Link as={Link} href="https://nordcom.io/" prefetch={false}>
                                Nordcom AB
                            </Header.Menu.Link>
                        </Header.Menu>
                    </Header>

                    <View>{children}</View>

                    <Card as={View} variant="solid" color="primary" borderless={true}>
                        <footer className="flex flex-row flex-wrap items-center justify-center gap-1 md:gap-3">
                            <Link href="https://nordcom.io/" className="block text-inherit">
                                Nordcom AB
                            </Link>

                            <div>{' • '}</div>

                            <Link
                                href="https://swedish-candy-store.com/?utm_campaign=footer&utm_source=nordstar"
                                className="block text-inherit"
                            >
                                Swedish Candy Store
                            </Link>
                        </footer>
                    </Card>
                </Providers>
            </body>
        </html>
    );
}
