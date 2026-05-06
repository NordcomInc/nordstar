'use client';

import { Children, isValidElement, type ReactElement, type ReactNode, useState } from 'react';

export type TabPaneProps = {
    label: string;
    children: ReactNode;
};

export function TabPane({ children }: TabPaneProps) {
    return <>{children}</>;
}

export function Tabs({ children }: { children: ReactNode }) {
    const panes = Children.toArray(children).filter(
        (c): c is ReactElement<TabPaneProps> => isValidElement(c) && c.type === TabPane,
    );
    const [active, setActive] = useState(0);

    if (panes.length === 0) return null;

    return (
        <div className="my-6 overflow-hidden rounded-lg border-2 border-foreground-highlight">
            <div className="flex border-background-highlight border-b-2">
                {panes.map((p, i) => (
                    <button
                        className={
                            'px-3 py-1text-xs transition-colors' +
                            (active === i
                                ? 'border-primary border-b-2 text-foreground'
                                : 'text-foreground-highlight hover:text-foreground')
                        }
                        key={i}
                        onClick={() => setActive(i)}
                        type="button"
                    >
                        {p.props.label}
                    </button>
                ))}
            </div>
            <div className="px-4 py-3">{panes[active]}</div>
        </div>
    );
}
