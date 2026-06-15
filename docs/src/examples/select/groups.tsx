'use client';

import { Select } from '@nordcom/nordstar';

export default function Example() {
    return (
        <Select>
            <Select.Trigger className="w-56">
                <Select.Value placeholder="Pick a food" />
            </Select.Trigger>
            <Select.Content>
                <Select.Group>
                    <Select.Label>Fruit</Select.Label>
                    <Select.Item value="apple">Apple</Select.Item>
                    <Select.Item value="pear">Pear</Select.Item>
                </Select.Group>
                <Select.Separator />
                <Select.Group>
                    <Select.Label>Vegetables</Select.Label>
                    <Select.Item value="carrot">Carrot</Select.Item>
                    <Select.Item value="pea">Pea</Select.Item>
                </Select.Group>
            </Select.Content>
        </Select>
    );
}
