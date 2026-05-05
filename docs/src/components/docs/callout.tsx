import type { ReactNode } from 'react';

const VARIANTS = {
    info: 'border-primary/40 bg-primary/5',
    warning: 'border-yellow-500/40 bg-yellow-500/5',
    tip: 'border-emerald-500/40 bg-emerald-500/5'
} as const;

const LABELS = {
    info: 'Info',
    warning: 'Warning',
    tip: 'Tip'
} as const;

export type CalloutProps = {
    type?: keyof typeof VARIANTS;
    title?: string;
    children: ReactNode;
};

export function Callout({ type = 'info', title, children }: CalloutProps) {
    return (
        <aside className={`my-6 rounded-lg border px-4 py-3 ${VARIANTS[type]}`}>
            <div className="text-foreground text-xs font-medium uppercase tracking-wide">
                {title ?? LABELS[type]}
            </div>
            <div className="mt-1 text-foreground-highlight text-sm leading-relaxed">{children}</div>
        </aside>
    );
}
