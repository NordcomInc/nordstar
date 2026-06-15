import { Label, View } from '@nordcom/nordstar';
import type { Metadata } from 'next';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { NavLink } from '@/components/docs/nav-link';
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

            <div className="flex flex-col gap-4 px-3 font-normal text-base text-foreground-highlight leading-none">
                {children}
            </div>
        </section>
    );
}

export default function DocsLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col gap-6 md:grid md:grid-cols-[18rem_1fr]">
            <nav aria-label="Documentation" className="flex flex-col gap-6">
                <NavBlock href="/docs" label="Guide">
                    <NavLink href="/docs/getting-started">Introduction</NavLink>
                    <NavLink href="/docs/installation">Installation</NavLink>
                </NavBlock>

                <NavBlock href="/docs/customization" label="Customization">
                    <NavLink href="/docs/customization/theme">Theme</NavLink>
                    <NavLink href="/docs/customization/system">System</NavLink>
                </NavBlock>

                <NavBlock href="/docs/components" label="Components">
                    {components.map((c) => (
                        <NavLink href={`/docs/components/${c.slug}`} key={c.slug}>
                            {c.name}
                        </NavLink>
                    ))}
                </NavBlock>
            </nav>

            <View withoutWrapper={true}>{children}</View>
        </div>
    );
}
