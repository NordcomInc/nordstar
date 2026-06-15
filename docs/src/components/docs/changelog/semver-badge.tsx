import type { SemverLevel } from '@/lib/changelog/parse';
import { cn } from '@/utils/cn';

const LABELS: Record<SemverLevel, string> = {
    major: 'Major',
    minor: 'Minor',
    patch: 'Patch',
};

const STYLES: Record<SemverLevel, string> = {
    major: 'border-transparent bg-primary text-primary-foreground',
    minor: 'border-primary/60 text-primary',
    patch: 'border-foreground-highlight/30 text-foreground-highlight',
};

/** A semver-level pill (Major / Minor / Patch) shown beside a release version. */
export function SemverBadge({ level }: { level: SemverLevel }) {
    return (
        <span
            className={cn(
                'inline-flex items-center rounded-full border px-2 py-0.5 font-mono text-xs uppercase leading-none tracking-wide',
                STYLES[level],
            )}
        >
            {LABELS[level]}
        </span>
    );
}
