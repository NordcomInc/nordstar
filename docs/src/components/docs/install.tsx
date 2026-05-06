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
        <div className="my-6 overflow-hidden border-2 border-foreground-highlight">
            <div className="flex border-background-highlight border-b-2">
                {MANAGERS.map((m) => (
                    <button
                        className={
                            'px-4 py-2 text-xs transition-colors' +
                            (active === m.id
                                ? 'border-primary border-b-2 text-foreground'
                                : 'text-foreground-highlight hover:text-foreground')
                        }
                        key={m.id}
                        onClick={() => setActive(m.id)}
                        type="button"
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
