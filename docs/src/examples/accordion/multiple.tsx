'use client';

import { Accordion } from '@nordcom/nordstar';

export default function Example() {
    return (
        <Accordion className="w-full max-w-md" defaultValue={['overview']} type="multiple">
            <Accordion.Item value="overview">
                <Accordion.Trigger>Overview</Accordion.Trigger>
                <Accordion.Content>A high-level summary that starts expanded.</Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="details">
                <Accordion.Trigger>Details</Accordion.Trigger>
                <Accordion.Content>Several sections can stay open at once.</Accordion.Content>
            </Accordion.Item>
        </Accordion>
    );
}
