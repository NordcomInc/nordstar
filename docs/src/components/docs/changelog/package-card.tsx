import { Card, Heading, Label } from '@nordcom/nordstar';
import Link from 'next/link';
import { latestVersion, notableHighlight, type PackageChangelog } from '@/lib/changelog/parse';
import { cn } from '@/utils/cn';

type PackageCardProps = {
    featured?: boolean;
    pkg: PackageChangelog;
};

/** An overview tile linking to a single package's full changelog. */
export function PackageCard({ featured = false, pkg }: PackageCardProps) {
    const version = latestVersion(pkg);
    const highlight = notableHighlight(pkg) ?? 'Dependency maintenance and internal upkeep.';
    const href = `/docs/changelog/${pkg.slug}`;

    return (
        <Card
            as={Link}
            className={cn(
                'group flex flex-col gap-3 transition-[transform,box-shadow,border-color] duration-200 ease-out-soft hover:-translate-y-1 hover:border-foreground-highlight hover:shadow-floating',
                featured && 'border-primary/40',
            )}
            href={href as Parameters<typeof Link>[0]['href']}
        >
            <Card.Header>
                <div className="flex w-full flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <Heading className="leading-none" level={featured ? 'h2' : 'h3'}>
                        {pkg.displayName}
                    </Heading>
                    {version ? (
                        <span className="rounded-full border border-foreground-highlight/30 px-2 py-0.5 font-mono text-foreground-highlight text-sm">
                            v{version}
                        </span>
                    ) : null}
                </div>
                <Label className="font-mono lowercase" color="secondary">
                    {pkg.name}
                </Label>
            </Card.Header>

            <p className="line-clamp-3 text-[0.95em] text-foreground-highlight leading-relaxed">{highlight}</p>

            <Card.Divider />

            <div className="flex items-center justify-between text-foreground-highlight text-sm">
                <span>
                    {pkg.releases.length} release{pkg.releases.length === 1 ? '' : 's'}
                </span>
                <span className="font-medium text-foreground transition-colors group-hover:text-primary">
                    View changelog &rarr;
                </span>
            </div>
        </Card>
    );
}
