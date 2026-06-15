import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Separator } from '.';

describe('components', () => {
    describe('Separator', () => {
        it('has correct displayName', () => {
            expect(Separator).toHaveProperty('displayName', 'Nordstar.Separator');
        });

        it('renders a decorative rule hidden from assistive tech by default', () => {
            const wrapper = render(<Separator data-testid="nordstar-separator" />);
            const element = wrapper.getByTestId('nordstar-separator');

            expect(element).toHaveAttribute('role', 'none');
            expect(element).toHaveAttribute('data-orientation', 'horizontal');
            expect(element).not.toHaveAttribute('aria-orientation');
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('exposes separator semantics when not decorative', () => {
            const wrapper = render(<Separator data-testid="nordstar-separator" decorative={false} />);
            const element = wrapper.getByTestId('nordstar-separator');

            expect(element).toHaveAttribute('role', 'separator');
            expect(element).toHaveAttribute('aria-orientation', 'horizontal');
            expect(wrapper.getByRole('separator')).toBe(element);
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('reflects a vertical orientation on the role and data attribute', () => {
            const wrapper = render(
                <Separator data-testid="nordstar-separator" decorative={false} orientation="vertical" />,
            );
            const element = wrapper.getByTestId('nordstar-separator');

            expect(element).toHaveAttribute('aria-orientation', 'vertical');
            expect(element).toHaveAttribute('data-orientation', 'vertical');
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('merges a custom className onto the rule', () => {
            const wrapper = render(<Separator className="custom" data-testid="nordstar-separator" />);
            const element = wrapper.getByTestId('nordstar-separator');

            expect(element).toHaveClass('custom');
            expect(element).toHaveClass('bg-foreground-highlight');
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('renders as another element via `as`', () => {
            const wrapper = render(<Separator as="li" data-testid="nordstar-separator" />);
            const element = wrapper.getByTestId('nordstar-separator');

            expect(element.tagName).toBe('LI');
            expect(() => wrapper.unmount()).not.toThrow();
        });
    });
});
