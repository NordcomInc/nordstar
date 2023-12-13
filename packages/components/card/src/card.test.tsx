import '@testing-library/jest-dom';

import { describe, expect, it } from 'vitest';

import { render } from '@testing-library/react';
import React from 'react';
import { Card } from '../src';

describe('components', () => {
    describe('card', () => {
        describe('Solid variant', () => {
            it('should render solid variant correctly', () => {
                const wrapper = render(<Card variant="solid" color="primary" />);

                expect(wrapper.getByTestId('card')).toHaveAttribute('data-variant', 'solid');
                expect(wrapper.getByTestId('card')).toHaveAttribute('data-color', 'primary');
            });
        });
        describe('Card', () => {
            it('should render correctly', () => {
                const wrapper = render(<Card />);

                expect(() => wrapper.unmount()).not.toThrow();
            });
        });
    });
});
