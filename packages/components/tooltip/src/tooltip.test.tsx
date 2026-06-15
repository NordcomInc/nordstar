import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Tooltip } from '.';

describe('components', () => {
    describe('Tooltip', () => {
        it('has correct displayName', () => {
            expect(Tooltip).toHaveProperty('displayName', 'Nordstar.Tooltip');
        });

        it('exposes the compound parts', () => {
            expect(Tooltip.Provider).toBeDefined();
            expect(Tooltip.Trigger).toBeDefined();
            expect(Tooltip.Content).toHaveProperty('displayName', 'Nordstar.Tooltip.Content');
        });

        it('renders the trigger', () => {
            const wrapper = render(
                <Tooltip.Provider>
                    <Tooltip>
                        <Tooltip.Trigger>Hover me</Tooltip.Trigger>
                        <Tooltip.Content>Helpful hint</Tooltip.Content>
                    </Tooltip>
                </Tooltip.Provider>,
            );

            expect(wrapper.getByRole('button', { name: 'Hover me' })).toBeInTheDocument();
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('renders the content while open', async () => {
            const wrapper = render(
                <Tooltip.Provider>
                    <Tooltip open>
                        <Tooltip.Trigger>Hover me</Tooltip.Trigger>
                        <Tooltip.Content>Helpful hint</Tooltip.Content>
                    </Tooltip>
                </Tooltip.Provider>,
            );

            // Radix mirrors the content into a visually-hidden node for screen readers, so the
            // text can legitimately appear more than once — assert on "at least one".
            const matches = await wrapper.findAllByText('Helpful hint');
            expect(matches.length).toBeGreaterThan(0);
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('hides the content while closed', () => {
            const wrapper = render(
                <Tooltip.Provider>
                    <Tooltip>
                        <Tooltip.Trigger>Hover me</Tooltip.Trigger>
                        <Tooltip.Content>Helpful hint</Tooltip.Content>
                    </Tooltip>
                </Tooltip.Provider>,
            );

            expect(wrapper.queryByText('Helpful hint')).not.toBeInTheDocument();
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('forwards a custom className onto the content', async () => {
            const wrapper = render(
                <Tooltip.Provider>
                    <Tooltip open>
                        <Tooltip.Trigger>Hover me</Tooltip.Trigger>
                        <Tooltip.Content className="custom">Helpful hint</Tooltip.Content>
                    </Tooltip>
                </Tooltip.Provider>,
            );

            const [content] = await wrapper.findAllByText('Helpful hint');
            expect(content).toHaveClass('custom');
            expect(() => wrapper.unmount()).not.toThrow();
        });
    });
});
