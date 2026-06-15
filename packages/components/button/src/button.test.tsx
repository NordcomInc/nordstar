import '@testing-library/jest-dom/vitest';
import '@testing-library/react';

import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Button } from '.';

describe('components', () => {
    describe('Button', () => {
        it('has correct displayName', () => {
            expect(Button).toHaveProperty('displayName', 'Nordstar.Button');
        });

        it('renders without crashing', () => {
            const wrapper = render(<Button />);

            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('renders as another component', () => {
            const wrapper = render(<Button as="aside" />);

            expect(wrapper.container.outerHTML).toContain('<aside');
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('renders with className', () => {
            const wrapper = render(<Button className="hello-world" />);

            expect(wrapper.container.outerHTML).toContain('hello-world');
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('renders when disabled', () => {
            const wrapper = render(<Button disabled />);

            expect(wrapper.getByRole('button')).toHaveProperty('disabled', true);
            expect(wrapper.getByRole('button')).toHaveAttribute('aria-disabled', 'true');
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('renders with an icon', () => {
            const wrapper = render(<Button icon={'insert-icon-here'} />);

            expect(wrapper.getByRole('button')).toHaveTextContent('insert-icon-here');
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('renders as the selected variant', () => {
            const wrapper = render(<Button variant="outline" />);

            expect(wrapper.getByRole('button')).toHaveAttribute('data-variant', 'outline');
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('renders as the selected color', () => {
            const wrapper = render(<Button color="primary" />);

            expect(wrapper.getByRole('button')).toHaveAttribute('data-color', 'primary');
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('renders with default color mapped to foreground', () => {
            const wrapper = render(<Button color="default" />);

            expect(wrapper.getByRole('button')).toHaveAttribute('data-color', 'default');
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('defaults native buttons to type="button"', () => {
            const wrapper = render(<Button data-testid="nordstar-button" />);

            expect(wrapper.getByTestId('nordstar-button')).toHaveAttribute('type', 'button');
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('does not apply a type attribute to non-button elements', () => {
            const wrapper = render(<Button as="a" data-testid="nordstar-button" />);

            const element = wrapper.getByTestId('nordstar-button');
            expect(element.tagName).toBe('A');
            expect(element).not.toHaveAttribute('type');
            expect(() => wrapper.unmount()).not.toThrow();
        });
    });
});
