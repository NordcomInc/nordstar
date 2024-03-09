import '@testing-library/jest-dom';

import { describe, expect, it } from 'vitest';

import { render } from '@testing-library/react';
import { Card } from '../src';

describe('components', () => {
    describe('card', () => {
        describe('Card', () => {
            it('renders correctly', () => {
                const wrapper = render(<Card />);

                expect(() => wrapper.unmount()).not.toThrow();
            });

            const combinations = [
                { variant: 'solid', color: 'default' },
                { variant: 'solid', color: 'primary' },
                { variant: 'solid', color: 'secondary' }
            ];

            combinations.forEach(({ variant, color }) => {
                it.fails(`should render with ${variant} variant and ${color} color correctly`, () => {
                    const wrapper = render(
                        <Card variant={variant as any} color={color as any} data-testId="nordstar-card" />
                    );

                    const cardElement = wrapper.getByTestId('nordstar-card');

                    if (variant === 'solid') {
                        expect(cardElement).toHaveStyle('border-width: 0');

                        if (color === 'default') {
                            expect(cardElement).toHaveStyle({
                                'background-color': 'var(--color-foreground)',
                                color: 'var(--color-background)',
                                'border-width': 0
                            });
                        } else if (color === 'primary') {
                            expect(cardElement).toHaveStyle({
                                'background-color': 'var(--color-accent-primary)',
                                'border-width': 0,
                                color: undefined
                            });
                        } else if (color === 'secondary') {
                            expect(cardElement).toHaveStyle({
                                'background-color': 'var(--color-accent-secondary)',
                                'border-width': 0,
                                color: undefined
                            });
                        } else {
                            throw new Error(`Unknown card color ${color}`);
                        }
                    }

                    expect(() => wrapper.unmount()).not.toThrow();
                });
            });
        });
    });
});
