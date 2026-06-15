import { Heading, Label } from '@nordcom/nordstar';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Release } from '@/components/docs/changelog/release';
import { getPackage, getPackages } from '@/lib/changelog/data';
import { latestVersion } from '@/lib/changelog/parse';

type PageParams = { params: Promise<{ package: string }> };

export function generateStaticParams() {
    return getPackages().map((pkg) => ({ package: pkg.slug }));
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
    const { package: slug } = await params;
    const pkg = getPackage(slug);
    if (!pkg) return { title: 'Changelog' };

    return {
        description: `Release history for ${pkg.name}, generated from its changelog.`,
        title: `${pkg.displayName} Changelog`,
    };
}

export default async function PackageChangelogPage({ params }: PageParams) {
    const { package: slug } = await params;
    const pkg = getPackage(slug);
    if (!pkg) notFound();

    const version = latestVersion(pkg);

    return (
        <article className="flex animate-overlay-in flex-col gap-[calc(var(--nordstar-layout-section-spacing)/2)]">
            <header className="flex flex-col gap-3">
                <Label
                    as={Link}
                    className="w-fit text-foreground-highlight transition-colors hover:text-primary"
                    href={'/docs/changelog' as Parameters<typeof Link>[0]['href']}
                >
                    &larr; Changelog
                </Label>
                <Heading>{pkg.displayName}</Heading>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <code className="rounded-md bg-background-highlight/40 px-2 py-1 font-mono text-foreground-highlight text-sm">
                        {pkg.name}
                    </code>
                    {version ? (
                        <span className="rounded-full border border-foreground-highlight/30 px-2 py-0.5 font-mono text-foreground-highlight text-sm">
                            v{version}
                        </span>
                    ) : null}
                    <span className="text-foreground-highlight text-sm">
                        {pkg.releases.length} release{pkg.releases.length === 1 ? '' : 's'}
                    </span>
                </div>
            </header>

            {pkg.releases.length > 0 ? (
                <ol className="ml-1.5 flex flex-col gap-12 border-foreground-highlight/20 border-l pt-1 pl-2">
                    {pkg.releases.map((release) => (
                        <Release key={release.version} release={release} />
                    ))}
                </ol>
            ) : (
                <p className="text-foreground-highlight">No releases have been published yet.</p>
            )}
        </article>
    );
}
