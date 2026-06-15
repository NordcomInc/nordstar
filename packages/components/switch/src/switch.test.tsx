import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Switch } from '.';

describe('components', () => {
    describe('Switch', () => {
        it('has correct displayName', () => {
            expect(Switch).toHaveProperty('displayName', 'Nordstar.Switch');
        });

        it('renders with the switch role, unchecked by default', () => {
            const wrapper = render(<Switch />);
            const element = wrapper.getByRole('switch');

            expect(element).toHaveAttribute('aria-checked', 'false');
            expect(element).toHaveAttribute('data-color', 'primary');
            expect(element).toHaveAttribute('data-size', 'md');
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('toggles when uncontrolled', () => {
            const wrapper = render(<Switch />);
            const element = wrapper.getByRole('switch');

            fireEvent.click(element);
            expect(element).toHaveAttribute('aria-checked', 'true');
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('reports changes but stays controlled by the `checked` prop', () => {
            const onCheckedChange = vi.fn();
            const wrapper = render(<Switch checked={false} onCheckedChange={onCheckedChange} />);
            const element = wrapper.getByRole('switch');

            fireEvent.click(element);
            expect(onCheckedChange).toHaveBeenCalledWith(true);
            expect(element).toHaveAttribute('aria-checked', 'false');
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('does not toggle or report changes while disabled', () => {
            const onCheckedChange = vi.fn();
            const wrapper = render(<Switch disabled onCheckedChange={onCheckedChange} />);
            const element = wrapper.getByRole('switch');

            fireEvent.click(element);
            expect(onCheckedChange).not.toHaveBeenCalled();
            expect(element).toHaveAttribute('aria-checked', 'false');
            expect(element).toBeDisabled();
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('reflects the size and color on data attributes', () => {
            const wrapper = render(<Switch color="secondary" size="sm" />);
            const element = wrapper.getByRole('switch');

            expect(element).toHaveAttribute('data-color', 'secondary');
            expect(element).toHaveAttribute('data-size', 'sm');
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('merges a custom className onto the track', () => {
            const wrapper = render(<Switch className="custom" />);
            const element = wrapper.getByRole('switch');

            expect(element).toHaveClass('custom');
            expect(element).toHaveClass('rounded-full');
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('resolves the `default` color to the foreground scheme', () => {
            const wrapper = render(<Switch color="default" defaultChecked={true} />);
            const element = wrapper.getByRole('switch');

            // `default` is surfaced verbatim on the data attribute but resolves to the
            // foreground checked styling internally.
            expect(element).toHaveAttribute('data-color', 'default');
            expect(element).toHaveClass('data-[state=checked]:bg-foreground');
            expect(() => wrapper.unmount()).not.toThrow();
        });
    });
});
