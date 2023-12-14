import '@testing-library/jest-dom';

import { describe, expect, it } from 'vitest';

import { render } from '@testing-library/react';
import React from 'react';
import { Card } from '../src';

describe('components', () => {
    describe('card', () => {
        describe('Card', () => {
            it.each([
                [{ variant: 'default', color: 'default' }],
                [{ variant: 'solid', color: 'default' }],
                [{ variant: 'default', color: 'primary' }],
                [{ variant: 'solid', color: 'primary' }],
                [{ variant: 'default', color: 'secondary' }],
                [{ variant: 'solid', color: 'secondary' }],
                [{ variant: 'default' }],
                [{ variant: 'solid' }],
                [{ color: 'default' }],
                [{ color: 'primary' }],
                [{ color: 'secondary' }],
                [{}], // Covers the case with no props
            ])('should render correctly with %o', (props) => {
                const { getByTestId } = render(<Card data-testid="test-card" {...props} />);
                const card = getByTestId('test-card');

                expect(card).toBeInTheDocument();
                expect(card).toHaveClass('container')

                if (props.variant === 'solid') {
                    expect(card).toHaveAttribute('data-variant', 'solid');
                    expect(card).not.toHaveStyle('border-width: var(--border-width)');
                }

                if (props.color) {
                    expect(card).toHaveAttribute('data-color', props.color);
                }
            });
        });
    });
});
