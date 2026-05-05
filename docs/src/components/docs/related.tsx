import Link from 'next/link';

import { components, getComponent, type ComponentSlug } from '@/content/component-meta';

const bySlug = new Map(components.map((c) => [c.slug, c]));

export type RelatedProps = {
    of: ComponentSlug;
};

export function Related({ of }: RelatedProps) {
    const source = getComponent(of);
    const items = source.related
        .map((slug) => bySlug.get(slug))
        .filter((c): c is NonNullable<typeof c> => Boolean(c));

    if (items.length === 0) return null;

    return (
        <section className="mt-12 border-t border-background-highlight pt-6">
            <h2 className="text-foreground-highlight text-xs uppercase tracking-wide">Related</h2>
            <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                {items.map((c) => (
                    <li key={c.slug}>
                        <Link
                            href={`/docs/components/${c.slug}` as Parameters<typeof Link>[0]['href']}
                            className="block rounded-lg border border-background-highlight px-4 py-3 transition-colors hover:border-primary"
                        >
                            <div className="font-medium">{c.name}</div>
                            <div className="text-foreground-highlight text-sm">{c.tagline}</div>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}
