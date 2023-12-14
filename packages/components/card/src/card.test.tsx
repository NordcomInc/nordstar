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
                ['solid', 'default'],
                ['solid', 'primary'],
                ['solid', 'secondary'],
            ])('should apply correct styles for variant %s and color %s', (variant, color) => {
                const { getByTestId } = render(
                    <Card variant={variant} color={color} data-testid='card'>Content</Card>
                );
                const card = getByTestId('card');

                expect(card).toHaveAttribute('data-variant', variant);
                expect(card).toHaveAttribute('data-color', color);

                if (variant === 'solid' && color === 'default') {
                    expect(card).toHaveStyle({
                        'background-color': 'var(--color-foreground)',
                        'color': 'var(--color-background)'
                    });
                } else if (variant === 'solid' && color === 'primary') {
                    expect(card).toHaveStyle({
                        'background-color': 'var(--color-accent-primary)'
                    });
                    expect(card).not.toHaveStyle({
                        'color': ''
                    });
                } else if (variant === 'solid' && color === 'secondary') {
                    expect(card).toHaveStyle({
                        'background-color': 'var(--color-accent-secondary)'
                    });
                    expect(card).not.toHaveStyle({
                        'color': ''
                    });
                }
            });
        });
    });
});
