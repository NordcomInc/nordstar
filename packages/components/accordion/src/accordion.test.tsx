import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Accordion } from '.';

/**
 * Renders a two-item single/collapsible accordion for the assertions below.
 *
 * @returns The Testing Library render result.
 */
const renderAccordion = () =>
    render(
        <Accordion collapsible type="single">
            <Accordion.Item value="a">
                <Accordion.Trigger>Section A</Accordion.Trigger>
                <Accordion.Content>Body A</Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="b">
                <Accordion.Trigger>Section B</Accordion.Trigger>
                <Accordion.Content>Body B</Accordion.Content>
            </Accordion.Item>
        </Accordion>,
    );

describe('components', () => {
    describe('Accordion', () => {
        it('has correct displayName', () => {
            expect(Accordion).toHaveProperty('displayName', 'Nordstar.Accordion');
        });

        it('exposes the compound parts', () => {
            expect(Accordion.Item).toHaveProperty('displayName', 'Nordstar.Accordion.Item');
            expect(Accordion.Trigger).toHaveProperty('displayName', 'Nordstar.Accordion.Trigger');
            expect(Accordion.Content).toHaveProperty('displayName', 'Nordstar.Accordion.Content');
        });

        it('renders a collapsed trigger per item', () => {
            const wrapper = renderAccordion();

            expect(wrapper.getByRole('button', { name: 'Section A' })).toHaveAttribute('aria-expanded', 'false');
            expect(wrapper.getByRole('button', { name: 'Section B' })).toHaveAttribute('aria-expanded', 'false');
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('expands a section on click', () => {
            const wrapper = renderAccordion();
            const trigger = wrapper.getByRole('button', { name: 'Section A' });

            fireEvent.click(trigger);
            expect(trigger).toHaveAttribute('aria-expanded', 'true');
            expect(wrapper.getByText('Body A')).toBeVisible();
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('keeps only one section open for type="single"', () => {
            const wrapper = renderAccordion();

            fireEvent.click(wrapper.getByRole('button', { name: 'Section A' }));
            fireEvent.click(wrapper.getByRole('button', { name: 'Section B' }));

            expect(wrapper.getByRole('button', { name: 'Section A' })).toHaveAttribute('aria-expanded', 'false');
            expect(wrapper.getByRole('button', { name: 'Section B' })).toHaveAttribute('aria-expanded', 'true');
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('collapses the open section again when collapsible', () => {
            const wrapper = renderAccordion();
            const trigger = wrapper.getByRole('button', { name: 'Section A' });

            fireEvent.click(trigger);
            fireEvent.click(trigger);
            expect(trigger).toHaveAttribute('aria-expanded', 'false');
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('merges a custom className onto the item', () => {
            const wrapper = render(
                <Accordion collapsible type="single">
                    <Accordion.Item className="custom" data-testid="item" value="a">
                        <Accordion.Trigger>Section A</Accordion.Trigger>
                        <Accordion.Content>Body A</Accordion.Content>
                    </Accordion.Item>
                </Accordion>,
            );

            expect(wrapper.getByTestId('item')).toHaveClass('custom');
            expect(() => wrapper.unmount()).not.toThrow();
        });
    });
});
