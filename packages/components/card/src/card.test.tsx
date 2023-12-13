import '@testing-library/jest-dom';

import { describe, expect, it } from 'vitest';

import { render } from '@testing-library/react';
import React from 'react';
import { Card } from '../src';

describe('components', () => {
    describe('card', () => {
        describe('Card', () => {
            it('should render correctly with default variant and color', () => {
                const wrapper = render(<Card />);
                const card = wrapper.getByRole('region');

                expect(card).toHaveAttribute('data-variant', 'default');
                expect(card).not.toHaveAttribute('data-color');
                expect(() => wrapper.unmount()).not.toThrow();
            });

            it('should render correctly with solid variant and primary color', () => {
                const wrapper = render(<Card variant="solid" color="primary" />);
                const card = wrapper.getByRole('region');

                expect(card).toHaveAttribute('data-variant', 'solid');
                expect(card).toHaveAttribute('data-color', 'primary');
                expect(() => wrapper.unmount()).not.toThrow();
            });

            it('should render correctly with solid variant and secondary color', () => {
                const wrapper = render(<Card variant="solid" color="secondary" />);
                const card = wrapper.getByRole('region');

                expect(card).toHaveAttribute('data-variant', 'solid');
                expect(card).toHaveAttribute('data-color', 'secondary');
                expect(() => wrapper.unmount()).not.toThrow();
            });
        });
    });
});
