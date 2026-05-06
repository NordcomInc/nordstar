import 'server-only';

import propsManifest from '@/content/props.generated.json';

type PropEntry = {
    name: string;
    required: boolean;
    description: string;
    type: string;
    defaultValue: string | null;
};

type ManifestEntry = {
    displayName: string;
    description: string;
    props: Record<string, PropEntry>;
};

const manifest = propsManifest as Record<string, ManifestEntry>;

export type PropsTableProps = {
    component: string;
};

export function PropsTable({ component }: PropsTableProps) {
    const entry = manifest[component];
    if (!entry) {
        throw new Error(`<PropsTable>: no manifest entry for "${component}"`);
    }

    const rows = Object.values(entry.props).sort((a, b) => {
        if (a.required !== b.required) return a.required ? -1 : 1;
        return a.name.localeCompare(b.name);
    });

    if (rows.length === 0) {
        return <p className="text-foreground-highlight text-sm">No documented props.</p>;
    }

    return (
        <div className="my-6 overflow-x-auto rounded-lg-2 border border-foreground-highlight">
            <table className="w-full table-auto text-left text-sm">
                <thead className="bg-background-highlight/30">
                    <tr>
                        <th className="px-3 py-2 font-medium">Prop</th>
                        <th className="px-3 py-2 font-medium">Type</th>
                        <th className="px-3 py-2 font-medium">Default</th>
                        <th className="px-3 py-2 font-medium">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((p) => (
                        <tr className="border-foreground-highlight/50 border-t" key={p.name}>
                            <td className="px-3 py-2 font-mono text-xs">
                                {p.name}
                                {p.required ? <span className="text-primary"> *</span> : null}
                            </td>
                            <td className="px-3 py-2 font-mono text-foreground-highlight text-xs">{p.type || '—'}</td>
                            <td className="px-3 py-2 font-mono text-foreground-highlight text-xs">
                                {p.defaultValue ?? '—'}
                            </td>
                            <td className="px-3 py-2 text-foreground-highlight">{p.description || '—'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
