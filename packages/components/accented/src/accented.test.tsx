import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { Accented } from '../src';

describe('components', () => {
    describe('accented', () => {
        describe('Accented', () => {
            it('renders correctly', () => {
                const wrapper = render(<Accented data-testid="accented" />);

                expect(() => wrapper.unmount()).not.toThrow();
            });

            it('renders with secondary accent', () => {
                const wrapper = render(<Accented data-testid="accented" secondary />);

                expect(() => wrapper.unmount()).not.toThrow();
            });

            it('renders with className', () => {
                const wrapper = render(<Accented data-testid="accented" className="hello-world" />);

                expect(wrapper.getByTestId('accented')).toHaveClass('hello-world');
                expect(() => wrapper.unmount()).not.toThrow();
            });

            it('renders as secondary with className', () => {
                const wrapper = render(<Accented data-testid="accented" secondary className="hello-world" />);

                expect(wrapper.getByTestId('accented')).toHaveClass('hello-world');
                expect(() => wrapper.unmount()).not.toThrow();
            });
        });
    });
});
