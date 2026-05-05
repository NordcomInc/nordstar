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
        <div className="flex items-center justify-end px-2 py-1">
            <button
                type="button"
                onClick={copy}
                className="rounded-md px-2 py-1 text-xs text-foreground-highlight hover:bg-background-highlight hover:text-foreground transition-colors"
            >
                {copied ? 'Copied' : 'Copy'}
            </button>
        </div>
    );
}
