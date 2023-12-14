import '@testing-library/jest-dom';

import { describe, expect, it } from 'vitest';

import { render } from '@testing-library/react';
import React from 'react';
import { Card } from '../src';

describe('components', () => {
    describe('card', () => {
        describe('Card', () => {
            it.each([
                ['default', 'default'],
                ['default', 'primary'],
                ['default', 'secondary'],
                ['solid', 'default'],
                ['solid', 'primary'],
                ['solid', 'secondary'],
            ])('should render with variant %s and color %s correctly', (variant, color) => {
                const { container } = render(<Card variant={variant} color={color} />);
                const cardElement = container.firstChild;
                expect(cardElement).toHaveAttribute('data-variant', variant);
                expect(cardElement).toHaveAttribute('data-color', color);
                // TODO: Add assertions for styles once the CLASS names or styles are known
            });
        });
    });
});
