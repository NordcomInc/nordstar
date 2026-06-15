import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { View } from '.';

describe('components', () => {
    describe('View', () => {
        it('has correct displayName', () => {
            expect(View).toHaveProperty('displayName', 'Nordstar.Layout.View');
        });

        it('renders without crashing', () => {
            const wrapper = render(<View />);

            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('renders as another component', () => {
            const wrapper = render(<View as="aside" />);

            expect(wrapper.container.outerHTML).toContain('<aside');
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('renders with a custom outerAs', () => {
            const wrapper = render(<View outerAs="header" />);

            expect(wrapper.container.outerHTML).toContain('<header');
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('renders with custom classes', () => {
            const wrapper = render(<View className="custom-inner-class" outerClassName="hello-world" />);

            expect(wrapper.container.outerHTML).toContain('hello-world');
            expect(wrapper.container.outerHTML).toContain('custom-inner-class');
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('renders without the wrapper element when withoutWrapper is set', () => {
            const wrapper = render(<View as="section" outerAs="header" withoutWrapper={true} />);

            expect(wrapper.container.firstElementChild?.tagName).toBe('SECTION');
            expect(wrapper.container.outerHTML).not.toContain('<header');
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('reflects the wrapper state via data-without-wrapper', () => {
            const withWrapper = render(<View as="section" data-testid="view" />);
            expect(withWrapper.getByTestId('view')).toHaveAttribute('data-without-wrapper', 'false');
            withWrapper.unmount();

            const withoutWrapper = render(<View as="section" data-testid="view" withoutWrapper={true} />);
            expect(withoutWrapper.getByTestId('view')).toHaveAttribute('data-without-wrapper', 'true');
            withoutWrapper.unmount();
        });
    });
});
