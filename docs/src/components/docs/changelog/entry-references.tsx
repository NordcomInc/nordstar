import type { ChangelogReference } from '@/lib/changelog/parse';
import { cn } from '@/utils/cn';

const CHIP =
    'inline-flex items-center rounded-md border border-foreground-highlight/30 px-1.5 py-0.5 font-mono text-foreground-highlight transition-colors hover:border-primary hover:text-primary';

/** The PR / commit / author chips attributed to a single changelog entry. */
export function EntryReferences({ className, reference }: { className?: string; reference: ChangelogReference }) {
    const { commit, pull, thanks } = reference;
    if (!commit && !pull && !thanks) return null;

    return (
        <div className={cn('flex flex-wrap items-center gap-2 text-xs', className)}>
            {pull ? (
                <a className={CHIP} href={pull.url} rel="noreferrer noopener" target="_blank">
                    #{pull.number}
                </a>
            ) : null}
            {commit ? (
                <a className={CHIP} href={commit.url} rel="noreferrer noopener" target="_blank">
                    {commit.hash.slice(0, 7)}
                </a>
            ) : null}
            {thanks ? (
                <a
                    className="text-foreground-highlight transition-colors hover:text-primary"
                    href={thanks.url}
                    rel="noreferrer noopener"
                    target="_blank"
                >
                    @{thanks.handle}
                </a>
            ) : null}
        </div>
    );
}
