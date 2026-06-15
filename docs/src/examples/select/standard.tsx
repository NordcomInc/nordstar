'use client';

import { Select } from '@nordcom/nordstar';

export default function Example() {
    return (
        <Select defaultValue="apple">
            <Select.Trigger className="w-56">
                <Select.Value placeholder="Pick a fruit" />
            </Select.Trigger>
            <Select.Content>
                <Select.Item value="apple">Apple</Select.Item>
                <Select.Item value="pear">Pear</Select.Item>
                <Select.Item value="orange">Orange</Select.Item>
            </Select.Content>
        </Select>
    );
}
