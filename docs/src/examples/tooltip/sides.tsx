'use client';

import { Button, Tooltip } from '@nordcom/nordstar';

export default function Example() {
    return (
        <Tooltip.Provider>
            <div className="flex gap-4">
                <Tooltip>
                    <Tooltip.Trigger asChild>
                        <Button variant="outline">Top</Button>
                    </Tooltip.Trigger>
                    <Tooltip.Content side="top">Above the trigger</Tooltip.Content>
                </Tooltip>
                <Tooltip>
                    <Tooltip.Trigger asChild>
                        <Button variant="outline">Right</Button>
                    </Tooltip.Trigger>
                    <Tooltip.Content side="right">Beside the trigger</Tooltip.Content>
                </Tooltip>
            </div>
        </Tooltip.Provider>
    );
}
