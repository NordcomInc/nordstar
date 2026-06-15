import { Switch } from '@nordcom/nordstar';

export default function Example() {
    return (
        <div className="flex items-center gap-3">
            <Switch aria-label="Primary" color="primary" defaultChecked />
            <Switch aria-label="Secondary" color="secondary" defaultChecked />
            <Switch aria-label="Foreground" color="foreground" defaultChecked />
        </div>
    );
}
