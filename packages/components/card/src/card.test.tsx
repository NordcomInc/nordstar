import '@testing-library/jest-dom/vitest';
import '@testing-library/react';

import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Card } from '.';

describe('components', () => {
    describe('Card', () => {
        it('has correct displayName', () => {
            expect(Card).toHaveProperty('displayName', 'Nordstar.Card');
        });

        it('renders correctly', () => {
            const wrapper = render(<Card data-testid="nordstar-card">Hello World!</Card>);

            const element = wrapper.getByTestId('nordstar-card');

            expect(element).toHaveTextContent('Hello World!');
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('renders correctly as another element', () => {
            const wrapper = render(
                <Card as="article" data-testid="nordstar-card">
                    Hello World!
                </Card>,
            );

            const element = wrapper.getByTestId('nordstar-card');

            expect(element).toHaveTextContent('Hello World!');
            expect(element.tagName).toBe('ARTICLE');
            expect(() => wrapper.unmount()).not.toThrow();
        });

        const combinations = [
            { color: 'default', variant: 'solid' },
            { color: 'primary', variant: 'solid' },
            { color: 'secondary', variant: 'solid' },
        ];

        combinations.forEach(({ variant, color }) => {
            it(`should render with ${variant} variant and ${color} color correctly`, () => {
                const wrapper = render(
                    <Card color={color as any} data-testid="nordstar-card" variant={variant as any} />,
                );

                const cardElement = wrapper.getByTestId('nordstar-card');

                expect(cardElement).toHaveAttribute('data-variant', variant);
                expect(cardElement).toHaveAttribute('data-color', color);
                expect(() => wrapper.unmount()).not.toThrow();
            });
        });
    });

    describe('Card.Divider', () => {
        it('has correct displayName', () => {
            expect(Card.Divider).toHaveProperty('displayName', 'Nordstar.Card.Divider');
        });

        it('renders correctly', () => {
            const wrapper = render(
                <Card data-testid="nordstar-card">
                    <Card.Divider data-testid="nordstar-card-divider" />
                </Card>,
            );

            const element = wrapper.getByTestId('nordstar-card');
            expect(element).toContainElement(wrapper.getByTestId('nordstar-card-divider'));
            expect(() => wrapper.unmount()).not.toThrow();
        });
    });
});
