import '@testing-library/jest-dom';

import { describe, expect, it } from 'vitest';

import { render } from '@testing-library/react';
import React from 'react';
import { Card } from '../src';

describe('components', () => {
    describe('card', () => {
        describe('Card', () => {
            it('renders with default variant and color', () => {
                const { container } = render(<Card />);
                expect(container.firstChild).toHaveClass('container');
            });

            it('renders with solid variant and primary color', () => {
                const { container } = render(<Card variant="solid" color="primary" />);
                expect(container.firstChild).toHaveClass('container solid primary');
            });

            it('renders with solid variant and secondary color', () => {
                const { container } = render(<Card variant="solid" color="secondary" />);
                expect(container.firstChild).toHaveClass('container solid secondary');
            });

            it('renders with default variant and primary color', () => {
                const { container } = render(<Card color="primary" />);
                expect(container.firstChild).toHaveClass('container primary');
            });

            it('renders with default variant and secondary color', () => {
                const { container } = render(<Card color="secondary" />);
                expect(container.firstChild).toHaveClass('container secondary');

                expect(() => wrapper.unmount()).not.toThrow();
            });
        });
    });
});
