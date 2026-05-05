'use client';

import { Children, isValidElement, useState, type ReactElement, type ReactNode } from 'react';

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
        <div className="my-6 overflow-hidden rounded-lg border border-background-highlight">
            <div className="flex border-b border-background-highlight">
                {panes.map((p, i) => (
                    <button
                        key={i}
                        type="button"
                        onClick={() => setActive(i)}
                        className={
                            'px-4 py-2 text-xs transition-colors ' +
                            (active === i
                                ? 'text-foreground border-b-2 border-primary'
                                : 'text-foreground-highlight hover:text-foreground')
                        }
                    >
                        {p.props.label}
                    </button>
                ))}
            </div>
            <div className="px-4 py-3">{panes[active]}</div>
        </div>
    );
}
