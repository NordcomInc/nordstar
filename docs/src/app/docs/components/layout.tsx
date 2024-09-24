import type { Metadata } from 'next';

export const metadata: Metadata = {
    metadataBase: new URL(`https://nordstar.dev/docs/components/`),
    title: {
        default: 'Components | Docs | Nordstar Component Library',
        template: `%s - Components | Docs | Nordstar Component Library`
    }
};

export default async function DocsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
