import '@testing-library/jest-dom';

import { describe, expect, it } from 'vitest';

import { render } from '@testing-library/react';
import React from 'react';
import { Button } from '../src';

describe('components', () => {
    describe('button', () => {
        describe('Button', () => {
            it('should render correctly', () => {
                const wrapper = render(<Button />);

                expect(() => wrapper.unmount()).not.toThrow();
            });

            it('should render with disabled correctly', () => {
                const wrapper = render(<Button disabled />);

                expect(wrapper.getByRole('button')).toHaveProperty('disabled', true);
                expect(wrapper.getByRole('button')).toHaveAttribute('aria-disabled', 'true');
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
        });
    });
});
