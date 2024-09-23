import { Card, Label } from '@nordcom/nordstar';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    metadataBase: new URL(`https://nordstar.dev/docs/components/`),
    title: {
        default: 'Components | Docs | Nordstar Component Library',
        template: `%s - Components | Docs | Nordstar Component Library`
    }
};

export default async function DocsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col-reverse gap-3 md:grid md:grid-cols-[18rem_1fr]">
            <Card className="[&>a]:transition-color font-extrabold [&>a]:block [&>a]:text-inherit [&>a]:hover:text-primary [&>a]:active:text-primary">
                <Link href="/docs/">Overview</Link>

                <Label className="pt-3">Components</Label>
                <Link href="/docs/button/">Button</Link>
                <Link href="/docs/card/">Card</Link>
                <Link href="/docs/details/">Details</Link>
                <Link href="/docs/input/">Input</Link>

                <Label className="pt-3">Layout</Label>
                <Link href="/docs/header/">Header</Link>
                <Link href="/docs/view/">View</Link>

                <Label className="pt-3">Typography</Label>
                <Link href="/docs/accented/">Accented</Link>
                <Link href="/docs/heading/">Heading</Link>
                <Link href="/docs/label/">label</Link>
            </Card>

            <Card>{children}</Card>
        </div>
    );
}
