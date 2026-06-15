import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Kbd } from '.';

describe('components', () => {
    describe('Kbd', () => {
        it('has correct displayName', () => {
            expect(Kbd).toHaveProperty('displayName', 'Nordstar.Kbd');
        });

        it('renders a native <kbd> element with its shortcut text', () => {
            const wrapper = render(<Kbd data-testid="nordstar-kbd">⌘K</Kbd>);
            const element = wrapper.getByTestId('nordstar-kbd');

            expect(element.tagName).toBe('KBD');
            expect(element).toHaveTextContent('⌘K');
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('defaults to the medium size', () => {
            const wrapper = render(<Kbd data-testid="nordstar-kbd">Esc</Kbd>);
            const element = wrapper.getByTestId('nordstar-kbd');

            expect(element).toHaveAttribute('data-size', 'md');
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('reflects the small size on the data attribute', () => {
            const wrapper = render(
                <Kbd data-testid="nordstar-kbd" size="sm">
                    Esc
                </Kbd>,
            );
            const element = wrapper.getByTestId('nordstar-kbd');

            expect(element).toHaveAttribute('data-size', 'sm');
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('merges a custom className onto the chip', () => {
            const wrapper = render(
                <Kbd className="custom" data-testid="nordstar-kbd">
                    ⌘K
                </Kbd>,
            );
            const element = wrapper.getByTestId('nordstar-kbd');

            expect(element).toHaveClass('custom');
            expect(element).toHaveClass('font-mono');
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('renders as another element via `as`', () => {
            const wrapper = render(
                <Kbd as="span" data-testid="nordstar-kbd">
                    ⌘K
                </Kbd>,
            );
            const element = wrapper.getByTestId('nordstar-kbd');

            expect(element.tagName).toBe('SPAN');
            expect(() => wrapper.unmount()).not.toThrow();
        });
    });
});
