import React from 'react';

import '@testing-library/jest-dom/vitest';
import '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { render } from '@testing-library/react';
import { Input } from '.';

describe('components', () => {
    describe('Input', () => {
        it('has correct displayName', () => {
            expect(Input).toHaveProperty('displayName', 'Nordstar.Input');
        });

        it('renders correctly', () => {
            const wrapper = render(<Input />);

            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('renders correctly with label', () => {
            const wrapper = render(<Input data-testid="nordstar-input" label="Hello World!" />);

            const element = wrapper.getByTestId('nordstar-input').parentElement;

            expect(element).toContainElement(wrapper.getByText('Hello World!'));
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('renders correctly with value', () => {
            const wrapper = render(<Input data-testid="nordstar-input" value={'Hello World!'} />);

            const element = wrapper.getByTestId('nordstar-input');

            expect(element).toHaveValue('Hello World!');
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('renders correctly with defaultValue', () => {
            const wrapper = render(<Input data-testid="nordstar-input" defaultValue={'Hello World!'} />);

            const element = wrapper.getByTestId('nordstar-input');

            expect(element).toHaveValue('Hello World!');
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('renders correctly with defaultValue', () => {
            const wrapper = render(<Input data-testid="nordstar-input" placeholder="Hello World!" />);

            const element = wrapper.getByTestId('nordstar-input');

            expect(element).toHaveAttribute('placeholder', 'Hello World!');
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('renders correctly as another element', () => {
            const wrapper = render(
                <Input as="article" data-testid="nordstar-input">
                    Hello World!
                </Input>
            );

            const element = wrapper.getByTestId('nordstar-input');

            expect(element).toHaveTextContent('Hello World!');
            expect(element.tagName).toBe('ARTICLE');
            expect(() => wrapper.unmount()).not.toThrow();
        });
    });
});
