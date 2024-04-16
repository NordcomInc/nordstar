import '@/styles/base.scss';

import { Card, Header, NordstarProvider, View } from '@nordcom/nordstar';
import type { Metadata, Viewport } from 'next';
import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import styles from './layout.module.scss';

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
                            heading: font.style.fontFamily,
                            body: font.style.fontFamily
                        }
                    }}
                >
                    <Header className={styles.header}>
                        <Header.Logo className={styles.logo}>nordstar</Header.Logo>
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
                        </Header.Menu>
                    </Header>

                    {children}

                    <Card as={View} variant="solid" color="primary" borderless={true} className={styles.footer}></Card>
                </NordstarProvider>
            </body>
        </html>
    );
}
