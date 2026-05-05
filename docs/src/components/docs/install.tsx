'use client';

import { useState } from 'react';

const MANAGERS = [
    { id: 'pnpm', label: 'pnpm', cmd: (pkg: string) => `pnpm add ${pkg}` },
    { id: 'npm', label: 'npm', cmd: (pkg: string) => `npm install ${pkg}` },
    { id: 'yarn', label: 'yarn', cmd: (pkg: string) => `yarn add ${pkg}` },
] as const;

type ManagerId = (typeof MANAGERS)[number]['id'];

export function Install({ package: pkg }: { package: string }) {
    const [active, setActive] = useState<ManagerId>('pnpm');
    const cmd = MANAGERS.find((m) => m.id === active)!.cmd(pkg);

    return (
        <div className="my-6 overflow-hidden rounded-lg border border-background-highlight">
            <div className="flex border-b border-background-highlight">
                {MANAGERS.map((m) => (
                    <button
                        key={m.id}
                        type="button"
                        onClick={() => setActive(m.id)}
                        className={
                            'px-4 py-2 text-xs transition-colors ' +
                            (active === m.id
                                ? 'text-foreground border-b-2 border-primary'
                                : 'text-foreground-highlight hover:text-foreground')
                        }
                    >
                        {m.label}
                    </button>
                ))}
            </div>
            <pre className="overflow-x-auto px-4 py-3 text-sm">
                <code>{cmd}</code>
            </pre>
        </div>
    );
}
