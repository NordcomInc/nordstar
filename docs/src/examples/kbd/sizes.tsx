import { Kbd } from '@nordcom/nordstar';

export default function Example() {
    return (
        <div className="flex items-center gap-3">
            <Kbd size="sm">Esc</Kbd>
            <Kbd size="md">Enter</Kbd>
        </div>
    );
}
