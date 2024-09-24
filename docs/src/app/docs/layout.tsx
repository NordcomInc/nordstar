import * as Nordstar from '@nordcom/nordstar';
import { Label } from '@nordcom/nordstar';

import type { Metadata } from 'next';
import Link from 'next/link';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
    metadataBase: new URL(`https://nordstar.dev/docs/`),
    title: {
        default: 'Docs | Nordstar Component Library',
        template: `%s - Docs | Nordstar Component Library`
    }
};

function NavBlock({ label, href, children }: { label: string; href: string; children: ReactNode }) {
    return (
        <section className="flex flex-col gap-4">
            <Label as={Link} href={href} className="block text-base leading-none text-foreground">
                {label}
            </Label>

            <div className="flex flex-col gap-4 px-3 text-base font-normal leading-none text-foreground-highlight *:flex *:gap-3 *:text-inherit *:leading-none *:transition-colors *:before:block *:before:content-['•']">
                {children}
            </div>
        </section>
    );
}

export default function DocsLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col gap-6 md:grid md:grid-cols-[18rem_1fr]">
            <nav className="flex flex-col gap-6">
                <NavBlock label="Guide" href="/docs/">
                    <Link href="/docs/getting-started/" className="hover:text-primary">
                        Introduction
                    </Link>
                    <Link href="/docs/installation/" className="hover:text-primary">
                        Installation
                    </Link>
                </NavBlock>

                <NavBlock label="Customization" href="/docs/customization/">
                    <Link href="/docs/customization/theme/" className="hover:text-primary">
                        Theme
                    </Link>
                    <Link href="/docs/customization/system/" className="hover:text-primary">
                        System
                    </Link>
                </NavBlock>

                <NavBlock label="Components" href="/docs/components/">
                    {Object.keys(Nordstar)
                        .filter((key) => (Nordstar as any)[key].displayName)
                        .map((key) => (
                            <Link key={key} href={`/docs/components/${key}/`} className="hover:text-primary">
                                {key}
                            </Link>
                        ))}
                </NavBlock>
            </nav>
            <section>{children}</section>
        </div>
    );
}
