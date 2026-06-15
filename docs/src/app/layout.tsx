import '@/styles/globals.css';

import { Header, View } from '@nordcom/nordstar';
import { GeistMono } from 'geist/font/mono';
import type { Metadata, Viewport } from 'next';
import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import { Providers } from '@/components/providers';
import { cn } from '@/utils/cn';

const font = Montserrat({
    display: 'swap',
    preload: true,
    subsets: ['latin'],
    variable: '--font-sans',
    weight: 'variable',
});

export const metadata: Metadata = {
    metadataBase: new URL(`https://nordcominc.github.io/nordstar/`),
    referrer: 'origin',
    formatDetection: {
        address: false,
        email: false,
        telephone: false,
    },
    robots: {
        follow: true,
        index: true,
    },
    title: {
        default: '',
        template: `%s | Nordstar Component Library`,
    },
};

export const viewport: Viewport = {
    colorScheme: 'dark',
    initialScale: 1,
    interactiveWidget: 'resizes-visual',
    themeColor: '#000000',
    userScalable: true,
    width: 'device-width',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head />
            <body className={cn(font.variable, GeistMono.variable)}>
                <Providers
                    fonts={{
                        body: font.style.fontFamily,
                        code: GeistMono.style.fontFamily,
                        heading: font.style.fontFamily,
                    }}
                >
                    <Header>
                        <Header.Logo as={Link} href="/">
                            Nordstar
                        </Header.Logo>
                        <Header.Menu aria-label="Primary">
                            <Header.Menu.Link as={Link} href="/">
                                Home
                            </Header.Menu.Link>
                            <Header.Menu.Link as={Link} href="https://github.com/NordcomInc/nordstar" target="_blank">
                                GitHub
                            </Header.Menu.Link>
                            <Header.Menu.Link as={Link} href="/docs/">
                                Docs
                            </Header.Menu.Link>
                        </Header.Menu>
                    </Header>

                    <View>{children}</View>

                    <footer className="mt-3 w-full border-0 bg-primary text-primary-foreground shadow-raised">
                        <div className="mx-auto flex w-full max-w-(--nordstar-layout-page-width) flex-col items-center justify-between gap-2 px-4 py-4 text-center md:flex-row md:gap-3 md:text-left">
                            <Link className="block font-medium text-inherit" href="https://github.com/filiphsps">
                                A component library by Filiph Sandström
                            </Link>
                            <nav
                                aria-label="Footer"
                                className="flex flex-row flex-wrap items-center justify-center gap-4 text-sm [&>a]:underline [&>a]:decoration-transparent [&>a]:underline-offset-4 [&>a]:transition-[text-decoration-color] hover:[&>a]:decoration-current"
                            >
                                <Link className="text-inherit" href="/docs/getting-started">
                                    Docs
                                </Link>
                                <Link className="text-inherit" href="/docs/components">
                                    Components
                                </Link>
                                <Link
                                    className="text-inherit"
                                    href="https://github.com/NordcomInc/nordstar"
                                    target="_blank"
                                >
                                    GitHub
                                </Link>
                            </nav>
                        </div>
                    </footer>
                </Providers>
            </body>
        </html>
    );
}
