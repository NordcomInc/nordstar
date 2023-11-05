import '@/styles/base.css';

import { NordstarProvider } from '@nordcom/nordstar';
import type { Metadata } from 'next';
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
        template: `%s | nordstar Component Library`
    },
    alternates: {
        canonical: 'https://nordstar.nordcom.io/'
    }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head />
            <body className={font.variable}>
                <NordstarProvider>{children}</NordstarProvider>
            </body>
        </html>
    );
}
