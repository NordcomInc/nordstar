import Link from 'next/link';

import { type ComponentSlug, components, getComponent } from '@/content/component-meta';

const bySlug = new Map(components.map((c) => [c.slug, c]));

export type RelatedProps = {
    of: ComponentSlug;
};

export function Related({ of }: RelatedProps) {
    const source = getComponent(of);
    const items = source.related
        .map((slug) => bySlug.get(slug as ComponentSlug))
        .filter((c): c is NonNullable<typeof c> => Boolean(c));

    if (items.length === 0) return null;

    return (
        <section className="mt-12 border-background-highlight border-t-2 pt-6">
            <h2 className="text-foreground-highlight text-xs uppercase tracking-wide">Related</h2>
            <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                {items.map((c) => (
                    <li key={c.slug}>
                        <Link
                            className="block rounded-lg border border-background-highlight px-4 py-3 transition-colors hover:border-primary"
                            href={`/docs/components/${c.slug}` as Parameters<typeof Link>[0]['href']}
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
