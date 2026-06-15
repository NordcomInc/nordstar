import { render } from '@testing-library/react';
import { createRef } from 'react';
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

        it('forwards the ref to the inner content element', () => {
            const ref = createRef<HTMLElement>();
            // The custom forwardRef helper omits `ref` from its public props (see
            // system/utils.ts), so cast to attach one the way the system tests do.
            const ViewWithRef = View as any;
            const { container, unmount } = render(<ViewWithRef as="section" ref={ref} />);

            expect(ref.current).not.toBeNull();
            expect(ref.current?.tagName).toBe('SECTION');
            // The ref targets the content element, not the <main> landmark wrapper.
            expect(ref.current).toBe(container.querySelector('section'));
            expect(() => unmount()).not.toThrow();
        });

        it('spreads arbitrary props onto the inner content element', () => {
            const { getByTestId, unmount } = render(<View data-testid="view" id="page-content" title="Page" />);
            const inner = getByTestId('view');

            expect(inner.tagName).toBe('ARTICLE');
            expect(inner.getAttribute('id')).toBe('page-content');
            expect(inner.getAttribute('title')).toBe('Page');
            expect(() => unmount()).not.toThrow();
        });

        it('lets consumers override the draggable default', () => {
            const { getByTestId, unmount } = render(<View data-testid="view" draggable={true} />);

            expect(getByTestId('view').getAttribute('draggable')).toBe('true');
            expect(() => unmount()).not.toThrow();
        });

        it('tames horizontal overflow without collapsing the content column', () => {
            const { getByTestId, unmount } = render(<View data-testid="view" />);
            const inner = getByTestId('view');

            // overflow-x-clip tames horizontal overflow while keeping the vertical
            // axis visible; min-w-0 lets the flex column shrink instead of forcing
            // a page-wide horizontal scrollbar when a child is wider than its track.
            expect(inner.classList.contains('overflow-x-clip')).toBe(true);
            expect(inner.classList.contains('min-w-0')).toBe(true);
            expect(() => unmount()).not.toThrow();
        });

        it('keeps the landmark wrapper from collapsing inside flex/grid parents', () => {
            const { container, unmount } = render(<View />);
            const landmark = container.querySelector('main');

            expect(landmark).not.toBeNull();
            expect(landmark?.classList.contains('w-full')).toBe(true);
            expect(landmark?.classList.contains('min-w-0')).toBe(true);
            expect(() => unmount()).not.toThrow();
        });
    });
});
