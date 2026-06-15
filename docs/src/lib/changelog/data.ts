import generated from '@/content/changelogs.generated.json';
import type { PackageChangelog } from './parse';

/**
 * Typed accessors over the build-time `changelogs.generated.json`. The JSON is
 * produced by `scripts/generate-changelogs.ts` from the pure parser, so the cast
 * is the one trusted boundary between the generated data and the typed app.
 */
const packages = (generated as unknown as { packages: PackageChangelog[] }).packages;

export function getPackages(): PackageChangelog[] {
    return packages;
}

export function getPackage(slug: string): PackageChangelog | undefined {
    return packages.find((pkg) => pkg.slug === slug);
}
