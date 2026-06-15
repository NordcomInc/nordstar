import { Switch } from '@nordcom/nordstar';

export default function Example() {
    return (
        <div className="flex items-center gap-3">
            <Switch aria-label="Small" defaultChecked size="sm" />
            <Switch aria-label="Medium" defaultChecked size="md" />
        </div>
    );
}
