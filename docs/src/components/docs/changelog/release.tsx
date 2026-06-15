import { Details } from '@nordcom/nordstar';
import type { ChangelogEntry, ChangelogRelease, SemverLevel } from '@/lib/changelog/parse';
import { ChangelogBody } from './changelog-body';
import { EntryReferences } from './entry-references';
import { SemverBadge } from './semver-badge';

const LEVEL_ORDER: SemverLevel[] = ['major', 'minor', 'patch'];

function AuthoredEntry({ entry }: { entry: ChangelogEntry }) {
    return (
        <div className="flex flex-col gap-2 border-foreground-highlight/15 border-l-2 pl-4">
            <ChangelogBody blocks={entry.body} />
            <EntryReferences reference={entry.reference} />
        </div>
    );
}

/** A single release rendered as a node on the package's vertical timeline. */
export function Release({ release }: { release: ChangelogRelease }) {
    const authored = release.groups
        .map((group) => ({ entries: group.entries.filter((entry) => !entry.dependency), level: group.level }))
        .filter((group) => group.entries.length > 0)
        .sort((a, b) => LEVEL_ORDER.indexOf(a.level) - LEVEL_ORDER.indexOf(b.level));

    const dependencies = release.groups.flatMap((group) => group.entries.filter((entry) => entry.dependency));
    const badges = authored.map((group) => group.level);

    return (
        <li className="relative pl-9">
            <span
                aria-hidden="true"
                className="absolute top-2 -left-px size-3.5 -translate-x-1/2 rounded-full border-2 border-primary bg-background"
            />

            <div className="flex flex-col gap-5">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <h2 className="font-mono font-semibold text-2xl text-foreground tracking-tight">
                        {release.version}
                    </h2>
                    {badges.length > 0 ? (
                        <div className="flex flex-wrap items-center gap-1.5">
                            {badges.map((level) => (
                                <SemverBadge key={level} level={level} />
                            ))}
                        </div>
                    ) : (
                        <span className="font-medium text-foreground-highlight text-xs uppercase tracking-wide">
                            Maintenance
                        </span>
                    )}
                </div>

                {authored.length > 0 ? (
                    <div className="flex flex-col gap-5">
                        {authored.flatMap((group) =>
                            group.entries.map((entry, index) => (
                                <AuthoredEntry entry={entry} key={`${group.level}-${index}`} />
                            )),
                        )}
                    </div>
                ) : null}

                {dependencies.length > 0 ? (
                    <Details
                        className="border-foreground-highlight/20"
                        label={`${dependencies.length} dependency update${dependencies.length === 1 ? '' : 's'}`}
                    >
                        <ul className="flex w-full flex-col gap-2 pt-1">
                            {dependencies.map((entry, index) => (
                                <li
                                    className="flex flex-col gap-1 text-foreground-highlight text-sm sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                                    key={index}
                                >
                                    <span className="min-w-0">{entry.summary}</span>
                                    <EntryReferences className="shrink-0" reference={entry.reference} />
                                </li>
                            ))}
                        </ul>
                    </Details>
                ) : null}
            </div>
        </li>
    );
}
