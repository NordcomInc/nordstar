'use client';

import {
    Accordion,
    Button,
    Card,
    Details,
    DropdownMenu,
    Heading,
    Input,
    Kbd,
    Label,
    Select,
    Separator,
    Switch,
    Tooltip,
} from '@nordcom/nordstar';

/**
 * Deterministic component playground used exclusively by the Playwright e2e suite.
 *
 * Every interactive component is rendered once, uncontrolled, behind a stable
 * `data-testid` so specs can scope to a single instance without coupling to the
 * arrangement of the real documentation examples. Marked `'use client'` (like the
 * interactive docs examples) so the portalled/`asChild` components resolve, and
 * kept out of the search index and the navigation on purpose — it is a test
 * surface, not a docs page.
 */
export function Playground() {
    return (
        <div className="flex flex-col gap-6 pb-12">
            <Heading>Playground</Heading>

            <section className="flex flex-col gap-3" data-testid="pg-button">
                <Label>Button</Label>
                <div className="flex flex-wrap items-center gap-3">
                    <Button data-testid="pg-button-default">Primary action</Button>
                    <Button color="foreground" data-testid="pg-button-outline" variant="outline">
                        Secondary
                    </Button>
                    <Button data-testid="pg-button-disabled" disabled={true}>
                        Disabled
                    </Button>
                </div>
            </section>

            <Separator />

            <section className="flex flex-col gap-3" data-testid="pg-switch">
                <Label>Switch</Label>
                <Switch aria-label="Enable notifications" data-testid="pg-switch-control" />
            </section>

            <Separator />

            <section className="flex max-w-sm flex-col gap-3" data-testid="pg-input">
                <Label>Input</Label>
                <Input data-testid="pg-input-control" label="Email address" type="email" />
            </section>

            <Separator />

            <section className="flex max-w-sm flex-col gap-3" data-testid="pg-select">
                <Label>Select</Label>
                <Select>
                    <Select.Trigger aria-label="Favourite fruit" data-testid="pg-select-trigger">
                        <Select.Value placeholder="Pick a fruit" />
                    </Select.Trigger>
                    <Select.Content data-testid="pg-select-content">
                        <Select.Item value="apple">Apple</Select.Item>
                        <Select.Item value="pear">Pear</Select.Item>
                        <Select.Item value="cherry">Cherry</Select.Item>
                    </Select.Content>
                </Select>
            </section>

            <Separator />

            <section className="flex flex-col gap-3" data-testid="pg-dropdown">
                <Label>Dropdown menu</Label>
                <DropdownMenu>
                    <DropdownMenu.Trigger asChild={true}>
                        <Button data-testid="pg-dropdown-trigger">Open menu</Button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content data-testid="pg-dropdown-content">
                        <DropdownMenu.Label>Actions</DropdownMenu.Label>
                        <DropdownMenu.Item data-testid="pg-dropdown-item-edit">Edit</DropdownMenu.Item>
                        <DropdownMenu.Item data-testid="pg-dropdown-item-duplicate">Duplicate</DropdownMenu.Item>
                        <DropdownMenu.Separator />
                        <DropdownMenu.Item data-testid="pg-dropdown-item-delete">Delete</DropdownMenu.Item>
                    </DropdownMenu.Content>
                </DropdownMenu>
            </section>

            <Separator />

            <section className="flex flex-col gap-3" data-testid="pg-tooltip">
                <Label>Tooltip</Label>
                <Tooltip.Provider delayDuration={0}>
                    <Tooltip>
                        <Tooltip.Trigger asChild={true}>
                            <Button data-testid="pg-tooltip-trigger">Hover me</Button>
                        </Tooltip.Trigger>
                        <Tooltip.Content data-testid="pg-tooltip-content">Helpful hint</Tooltip.Content>
                    </Tooltip>
                </Tooltip.Provider>
            </section>

            <Separator />

            <section className="flex flex-col gap-3" data-testid="pg-accordion">
                <Label>Accordion</Label>
                <Accordion collapsible={true} type="single">
                    <Accordion.Item value="shipping">
                        <Accordion.Trigger data-testid="pg-accordion-trigger">Shipping</Accordion.Trigger>
                        <Accordion.Content data-testid="pg-accordion-content">
                            Ships in 1–2 business days.
                        </Accordion.Content>
                    </Accordion.Item>
                </Accordion>
            </section>

            <Separator />

            <section className="flex flex-col gap-3" data-testid="pg-details">
                <Label>Details</Label>
                <Details data-testid="pg-details-control" label="More information">
                    <p>Tucked-away supporting content.</p>
                </Details>
            </section>

            <Separator />

            <section className="flex flex-col gap-3" data-testid="pg-misc">
                <Label>Surfaces</Label>
                <Card data-testid="pg-card">Card content</Card>
                <div className="flex items-center gap-2">
                    <Kbd data-testid="pg-kbd">⌘</Kbd>
                    <Kbd>K</Kbd>
                </div>
            </section>
        </div>
    );
}
