import { Switch } from '@nordcom/nordstar';

export default function Example() {
    return (
        <div className="flex items-center gap-3">
            <Switch aria-label="Wi-Fi" defaultChecked />
            <Switch aria-label="Bluetooth" />
        </div>
    );
}
