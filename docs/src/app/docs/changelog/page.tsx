import { Heading, Label } from '@nordcom/nordstar';
import type { Metadata } from 'next';
import { PackageCard } from '@/components/docs/changelog/package-card';
import { getPackages } from '@/lib/changelog/data';

export const metadata: Metadata = {
    description:
        'Release notes for every Nordstar package, generated from the changelog files shipped with each release.',
    title: 'Changelog',
};

export default function ChangelogIndexPage() {
    const packages = getPackages();
    const [umbrella, ...rest] = packages;

    return (
        <div className="flex animate-overlay-in flex-col gap-[calc(var(--nordstar-layout-section-spacing)/2)]">
            <header className="flex max-w-[48rem] flex-col gap-3">
                <Label className="tracking-wide" color="secondary">
                    Releases
                </Label>
                <Heading>Changelog</Heading>
                <p className="text-base text-foreground-highlight leading-relaxed">
                    Every change that ships in Nordstar, drawn straight from each package&rsquo;s changelog. Pick a
                    package to read its full release history, from the latest version back to the very first.
                </p>
            </header>

            {umbrella ? <PackageCard featured={true} pkg={umbrella} /> : null}

            <div className="grid grid-cols-1 gap-[var(--nordstar-layout-block-padding)] min-[820px]:grid-cols-2">
                {rest.map((pkg) => (
                    <PackageCard key={pkg.slug} pkg={pkg} />
                ))}
            </div>
        </div>
    );
}
