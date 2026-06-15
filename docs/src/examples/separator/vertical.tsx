import { Separator } from '@nordcom/nordstar';

export default function Example() {
    return (
        <nav aria-label="Docs" className="flex h-6 items-center gap-4 text-sm">
            <span>Docs</span>
            <Separator decorative={false} orientation="vertical" />
            <span>Components</span>
            <Separator decorative={false} orientation="vertical" />
            <span>Tokens</span>
        </nav>
    );
}
