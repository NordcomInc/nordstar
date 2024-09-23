import '@/styles/base.scss';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
    metadataBase: new URL(`https://nordstar.dev/docs/`),
    title: {
        default: 'Docs | Nordstar Component Library',
        template: `%s - Docs | Nordstar Component Library`
    }
};

export default function DocsLayout({ children }: { children: ReactNode }) {
    return <>{children}</>;
}
