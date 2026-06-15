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

        it('renders without padding and as borderless', () => {
            const wrapper = render(<Card borderless={true} data-testid="nordstar-card" padding={false} />);

            const element = wrapper.getByTestId('nordstar-card');

            expect(element).toHaveAttribute('data-borderless', 'true');
            expect(element).toHaveAttribute('data-padding', 'false');
            expect(() => wrapper.unmount()).not.toThrow();
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

        it('renders as a semantic separator exposed to assistive tech', () => {
            const wrapper = render(
                <Card>
                    <Card.Divider data-testid="nordstar-card-divider" />
                </Card>,
            );

            const divider = wrapper.getByTestId('nordstar-card-divider');
            expect(divider.tagName).toBe('HR');
            expect(wrapper.getByRole('separator')).toBe(divider);
            expect(() => wrapper.unmount()).not.toThrow();
        });
    });

    describe('Card.Header', () => {
        it('has correct displayName', () => {
            expect(Card.Header).toHaveProperty('displayName', 'Nordstar.Card.Header');
        });

        it('renders correctly', () => {
            const wrapper = render(
                <Card data-testid="nordstar-card">
                    <Card.Header data-testid="nordstar-card-header">Hello World!</Card.Header>
                </Card>,
            );

            const element = wrapper.getByTestId('nordstar-card-header');
            expect(element).toHaveTextContent('Hello World!');
            expect(element.tagName).toBe('HEADER');
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('renders with className', () => {
            const wrapper = render(
                <Card data-testid="nordstar-card">
                    <Card.Header className="hello-world" data-testid="nordstar-card-header" />
                </Card>,
            );

            expect(wrapper.getByTestId('nordstar-card-header')).toHaveClass('hello-world');
            expect(() => wrapper.unmount()).not.toThrow();
        });
    });
});
