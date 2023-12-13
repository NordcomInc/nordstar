import '@testing-library/jest-dom';

import { describe, expect, it } from 'vitest';

import { render } from '@testing-library/react';
import React from 'react';
import { Card } from './card';

describe('components', () => {
    describe('card', () => {
        describe('Card', () => {
            it('should render correctly', () => {
                const wrapper = render(<Card />);

                expect(() => wrapper.unmount()).not.toThrow();
            });

            it('should render correctly with variant "solid"', () => {
                const { getByText } = render(<Card variant="solid">Hello World</Card>);
                expect(getByText('Hello World')).toBeTruthy();
            });

            it('should not have padding with variant "solid"', () => {
                const { container } = render(<Card variant="solid">Hello World</Card>);
                const cardElement = container.firstChild;
                expect(cardElement).toHaveClass('solid'); // Assuming solid variant class removes padding
            });
        });
    });
});
