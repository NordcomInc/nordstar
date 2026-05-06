import Link from 'next/link';

import { type ComponentName, components } from '@/content/component-meta';

const byName = new Map(components.map((c) => [c.name, c]));

export type ComponentLinkProps = {
    children: ComponentName;
};

export function C({ children }: ComponentLinkProps) {
    const meta = byName.get(children);
    if (!meta) {
        throw new Error(`<C>: unknown component "${children}"`);
    }
    return (
        <Link
            className="font-mono text-primary underline-offset-2 hover:underline"
            href={`/docs/components/${meta.slug}` as Parameters<typeof Link>[0]['href']}
        >
            {children}
        </Link>
    );
}
