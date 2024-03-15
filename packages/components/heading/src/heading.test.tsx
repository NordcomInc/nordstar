import { describe, expect, it } from 'vitest';

import { render } from '@testing-library/react';
import { Heading } from '.';

describe('components', () => {
    describe('typography', () => {
        describe('Heading', () => {
            it('has correct displayName', () => {
                expect(Heading).toHaveProperty('displayName', 'Nordstar.Typography.Heading');
            });

            it('renders correctly', () => {
                const wrapper = render(<Heading data-testid="nordstar-heading">Hello World!</Heading>);

                const element = wrapper.getByTestId('nordstar-heading');

                expect(element).toHaveTextContent('Hello World!');
                expect(() => wrapper.unmount()).not.toThrow();
            });

            it('renders correctly as another element', () => {
                const wrapper = render(
                    <Heading as="article" data-testid="nordstar-heading">
                        Hello World!
                    </Heading>
                );

                const element = wrapper.getByTestId('nordstar-heading');

                expect(element).toHaveTextContent('Hello World!');
                expect(element.tagName).toBe('ARTICLE');
                expect(() => wrapper.unmount()).not.toThrow();
            });
        });
    });
});
