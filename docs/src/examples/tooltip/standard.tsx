import { Button, Tooltip } from '@nordcom/nordstar';

export default function Example() {
    return (
        <Tooltip.Provider>
            <Tooltip>
                <Tooltip.Trigger asChild>
                    <Button variant="outline">Hover me</Button>
                </Tooltip.Trigger>
                <Tooltip.Content>Your changes save automatically.</Tooltip.Content>
            </Tooltip>
        </Tooltip.Provider>
    );
}
