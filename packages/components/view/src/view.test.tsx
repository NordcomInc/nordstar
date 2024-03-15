import { describe, expect, it } from 'vitest';

import { render } from '@testing-library/react';
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
    });
});
