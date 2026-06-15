/**
 * Walks every published workspace package (`packages/core/*`,
 * `packages/components/*`), reads its `CHANGELOG.md`, and emits
 * `src/content/changelogs.generated.json` — a presentation-ordered array of
 * parsed package changelogs consumed by the `/docs/changelog` pages.
 *
 * The umbrella `@nordcom/nordstar` leads, then `@nordcom/nordstar-system`, then
 * the component packages alphabetically. The private docs app is skipped.
 *
 * Run as a prebuild step and on `pnpm dev` start. The heavy lifting lives in the
 * pure, unit-tested parser at `src/lib/changelog/parse.ts`.
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';

import { type PackageChangelog, parseChangelog, slugFromPackageName } from '../src/lib/changelog/parse';

const ROOT = path.resolve(import.meta.dirname, '..', '..');
const PACKAGE_DIRS = [path.join(ROOT, 'packages', 'core'), path.join(ROOT, 'packages', 'components')];
const OUT = path.resolve(import.meta.dirname, '..', 'src', 'content', 'changelogs.generated.json');

/** Packages that ship a CHANGELOG but should not appear in the docs. */
const EXCLUDED = new Set(['@nordcom/nordstar-docs']);

async function readJson(file: string): Promise<{ name?: string; private?: boolean }> {
    return JSON.parse(await fs.readFile(file, 'utf8'));
}

async function collectPackages(): Promise<PackageChangelog[]> {
    const found: PackageChangelog[] = [];

    for (const dir of PACKAGE_DIRS) {
        const entries = await fs.readdir(dir, { withFileTypes: true }).catch(() => []);

        for (const entry of entries) {
            if (!entry.isDirectory()) continue;

            const changelogPath = path.join(dir, entry.name, 'CHANGELOG.md');
            const manifestPath = path.join(dir, entry.name, 'package.json');

            let markdown: string;
            let manifest: { name?: string };
            try {
                [markdown, manifest] = await Promise.all([fs.readFile(changelogPath, 'utf8'), readJson(manifestPath)]);
            } catch {
                continue;
            }

            const name = manifest.name;
            if (!name || EXCLUDED.has(name)) continue;

            found.push(parseChangelog(markdown, name));
        }
    }

    return found;
}

/** Umbrella first, then the design system, then components alphabetically. */
function rank(pkg: PackageChangelog): number {
    if (pkg.slug === 'nordstar') return 0;
    if (pkg.slug === 'nordstar-system') return 1;
    return 2;
}

async function main() {
    const packages = await collectPackages();
    packages.sort((a, b) => rank(a) - rank(b) || a.displayName.localeCompare(b.displayName));

    // Dependency bumps dominate the history but the UI only renders their
    // one-line `summary` (plus references) inside the collapsed disclosure — never
    // their parsed body. Dropping those bodies keeps the generated payload small.
    for (const pkg of packages) {
        for (const release of pkg.releases) {
            for (const group of release.groups) {
                for (const entry of group.entries) {
                    if (entry.dependency) entry.body = [];
                }
            }
        }
    }

    const slugs = new Set<string>();
    for (const pkg of packages) {
        const slug = slugFromPackageName(pkg.name);
        if (slugs.has(slug)) throw new Error(`Duplicate changelog slug: ${slug}`);
        slugs.add(slug);
    }

    await fs.mkdir(path.dirname(OUT), { recursive: true });
    await fs.writeFile(OUT, `${JSON.stringify({ packages }, null, 4)}\n`, 'utf8');

    const releaseCount = packages.reduce((total, pkg) => total + pkg.releases.length, 0);
    console.info(
        `Wrote ${packages.length} package changelogs (${releaseCount} releases) to ${path.relative(process.cwd(), OUT)}`,
    );
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
