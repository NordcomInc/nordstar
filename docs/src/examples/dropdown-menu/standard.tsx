import { Button, DropdownMenu } from '@nordcom/nordstar';

export default function Example() {
    return (
        <DropdownMenu>
            <DropdownMenu.Trigger asChild>
                <Button variant="outline">Actions</Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
                <DropdownMenu.Label>Manage</DropdownMenu.Label>
                <DropdownMenu.Item>Edit</DropdownMenu.Item>
                <DropdownMenu.Item>Duplicate</DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item>Delete</DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu>
    );
}
