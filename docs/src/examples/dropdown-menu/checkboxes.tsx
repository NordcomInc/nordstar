'use client';

import { Button, DropdownMenu } from '@nordcom/nordstar';
import { useState } from 'react';

export default function Example() {
    const [bookmarks, setBookmarks] = useState(true);
    const [history, setHistory] = useState(false);

    return (
        <DropdownMenu>
            <DropdownMenu.Trigger asChild>
                <Button variant="outline">View</Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
                <DropdownMenu.Label>Panels</DropdownMenu.Label>
                <DropdownMenu.CheckboxItem checked={bookmarks} onCheckedChange={setBookmarks}>
                    Bookmarks
                </DropdownMenu.CheckboxItem>
                <DropdownMenu.CheckboxItem checked={history} onCheckedChange={setHistory}>
                    History
                </DropdownMenu.CheckboxItem>
            </DropdownMenu.Content>
        </DropdownMenu>
    );
}
