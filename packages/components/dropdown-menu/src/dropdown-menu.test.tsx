import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { DropdownMenu } from '.';

describe('components', () => {
    describe('DropdownMenu', () => {
        it('has correct displayName', () => {
            expect(DropdownMenu).toHaveProperty('displayName', 'Nordstar.DropdownMenu');
        });

        it('exposes the compound parts', () => {
            expect(DropdownMenu.Content).toHaveProperty('displayName', 'Nordstar.DropdownMenu.Content');
            expect(DropdownMenu.Item).toHaveProperty('displayName', 'Nordstar.DropdownMenu.Item');
            expect(DropdownMenu.CheckboxItem).toHaveProperty('displayName', 'Nordstar.DropdownMenu.CheckboxItem');
            expect(DropdownMenu.RadioItem).toHaveProperty('displayName', 'Nordstar.DropdownMenu.RadioItem');
            expect(DropdownMenu.Label).toHaveProperty('displayName', 'Nordstar.DropdownMenu.Label');
            expect(DropdownMenu.Separator).toHaveProperty('displayName', 'Nordstar.DropdownMenu.Separator');
            expect(DropdownMenu.SubTrigger).toHaveProperty('displayName', 'Nordstar.DropdownMenu.SubTrigger');
            expect(DropdownMenu.SubContent).toHaveProperty('displayName', 'Nordstar.DropdownMenu.SubContent');
            expect(DropdownMenu.Trigger).toBeDefined();
            expect(DropdownMenu.Group).toBeDefined();
            expect(DropdownMenu.RadioGroup).toBeDefined();
            expect(DropdownMenu.Sub).toBeDefined();
        });

        it('renders only the trigger while closed', () => {
            const wrapper = render(
                <DropdownMenu>
                    <DropdownMenu.Trigger>Open</DropdownMenu.Trigger>
                    <DropdownMenu.Content>
                        <DropdownMenu.Item>Save</DropdownMenu.Item>
                    </DropdownMenu.Content>
                </DropdownMenu>,
            );

            expect(wrapper.getByRole('button', { name: 'Open' })).toHaveAttribute('aria-expanded', 'false');
            expect(wrapper.queryByText('Save')).not.toBeInTheDocument();
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('renders the items when open', () => {
            const wrapper = render(
                <DropdownMenu defaultOpen>
                    <DropdownMenu.Trigger>Open</DropdownMenu.Trigger>
                    <DropdownMenu.Content>
                        <DropdownMenu.Label>Actions</DropdownMenu.Label>
                        <DropdownMenu.Item>Save</DropdownMenu.Item>
                        <DropdownMenu.Separator />
                        <DropdownMenu.Item>Delete</DropdownMenu.Item>
                    </DropdownMenu.Content>
                </DropdownMenu>,
            );

            const items = wrapper.getAllByRole('menuitem');
            expect(items).toHaveLength(2);
            expect(wrapper.getByText('Actions')).toBeInTheDocument();
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('fires onSelect when an item is chosen', () => {
            const onSelect = vi.fn();
            const wrapper = render(
                <DropdownMenu defaultOpen>
                    <DropdownMenu.Trigger>Open</DropdownMenu.Trigger>
                    <DropdownMenu.Content>
                        <DropdownMenu.Item onSelect={onSelect}>Save</DropdownMenu.Item>
                    </DropdownMenu.Content>
                </DropdownMenu>,
            );

            fireEvent.click(wrapper.getByRole('menuitem', { name: 'Save' }));
            expect(onSelect).toHaveBeenCalledTimes(1);
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('merges a custom className onto the content', () => {
            const wrapper = render(
                <DropdownMenu defaultOpen>
                    <DropdownMenu.Trigger>Open</DropdownMenu.Trigger>
                    <DropdownMenu.Content className="custom">
                        <DropdownMenu.Item>Save</DropdownMenu.Item>
                    </DropdownMenu.Content>
                </DropdownMenu>,
            );

            expect(wrapper.getByRole('menu')).toHaveClass('custom');
            expect(() => wrapper.unmount()).not.toThrow();
        });
    });
});
