import '@testing-library/jest-dom';

import { describe, expect, it } from 'vitest';

import { render } from '@testing-library/react';
import React from 'react';
import { Card } from '../src';

describe('components', () => {
    describe('card', () => {
        describe('Card', () => {
            it('renders with default styles', () => {
                const { getByTestId } = render(<Card data-testid="card" />);
                const card = getByTestId('card');

                expect(card).toHaveAttribute('data-variant', 'default');
                expect(card).toHaveAttribute('data-color', 'default');
            });

            it('renders with solid variant and primary color', () => {
                const { getByTestId } = render(<Card variant='solid' color='primary' data-testid="card" />);
                const card = getByTestId('card');

                expect(card).toHaveAttribute('data-variant', 'solid');
                expect(card).toHaveAttribute('data-color', 'primary');
            });

            it('renders with solid variant and secondary color', () => {
                const { getByTestId } = render(<Card variant='solid' color='secondary' data-testid="card" />);
                const card = getByTestId('card');

                expect(card).toHaveAttribute('data-variant', 'solid');
                expect(card).toHaveAttribute('data-color', 'secondary');
            });
        });
    });
});
