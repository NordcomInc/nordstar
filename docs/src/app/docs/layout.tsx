import { Label } from '@nordcom/nordstar';
import type { Metadata } from 'next';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { components } from '@/content/component-meta';

export const metadata: Metadata = {
    metadataBase: new URL(`https://nordcominc.github.io/nordstar/docs/`),
    title: {
        default: 'Docs | Nordstar Component Library',
        template: `%s - Docs | Nordstar Component Library`,
    },
};

function NavBlock({ label, href, children }: { label: string; href: string; children: ReactNode }) {
    return (
        <section className="flex flex-col gap-4">
            <Label
                as={Link}
                className="block text-base text-foreground leading-none"
                href={href as Parameters<typeof Link>[0]['href']}
            >
                {label}
            </Label>

            <div className="flex flex-col gap-4 px-3 font-normal text-base text-foreground-highlight leading-none *:flex *:gap-3 *:text-inherit *:leading-none *:transition-colors *:before:block *:before:content-['•']">
                {children}
            </div>
        </section>
    );
}

export default function DocsLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col gap-6 md:grid md:grid-cols-[18rem_1fr]">
            <nav className="flex flex-col gap-6">
                <NavBlock href="/docs" label="Guide">
                    <Link className="hover:text-primary" href="/docs/getting-started">
                        Introduction
                    </Link>
                    <Link className="hover:text-primary" href="/docs/installation">
                        Installation
                    </Link>
                </NavBlock>

                <NavBlock href="/docs/customization" label="Customization">
                    <Link className="hover:text-primary" href="/docs/customization/theme">
                        Theme
                    </Link>
                    <Link className="hover:text-primary" href="/docs/customization/system">
                        System
                    </Link>
                </NavBlock>

                <NavBlock href="/docs/components" label="Components">
                    {components.map((c) => (
                        <Link
                            className="hover:text-primary"
                            href={`/docs/components/${c.slug}` as Parameters<typeof Link>[0]['href']}
                            key={c.slug}
                        >
                            {c.name}
                        </Link>
                    ))}
                </NavBlock>
            </nav>
            <section>{children}</section>
        </div>
    );
}
