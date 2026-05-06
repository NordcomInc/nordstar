'use client';

import { useState } from 'react';

export function PreviewActions({ source }: { source: string }) {
    const [copied, setCopied] = useState(false);

    async function copy() {
        try {
            await navigator.clipboard.writeText(source);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch {
            // clipboard might be unavailable (insecure context) — silently noop
        }
    }

    return (
        <div className="flex items-center justify-end">
            <button
                className="rounded-md p-3 text-foreground-highlight text-xs transition-colors hover:bg-background-highlight hover:text-foreground"
                onClick={copy}
                type="button"
            >
                {copied ? 'Copied' : 'Copy'}
            </button>
        </div>
    );
}
