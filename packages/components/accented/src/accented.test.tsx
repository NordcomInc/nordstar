import React from 'react';

import '@testing-library/jest-dom/vitest';
import '@testing-library/react';

import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Accented } from '.';

describe('components', () => {
    describe('Accented', () => {
        it('has correct displayName', () => {
            expect(Accented).toHaveProperty('displayName', 'Nordstar.Typography.Accented');
        });

        it('renders correctly', () => {
            const wrapper = render(<Accented data-testid="accented" />);

            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('renders with secondary accent', () => {
            const wrapper = render(<Accented data-testid="accented" color="secondary" />);

            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('renders with className', () => {
            const wrapper = render(<Accented data-testid="accented" className="hello-world" />);

            expect(wrapper.getByTestId('accented')).toHaveClass('hello-world');
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('renders as secondary with className', () => {
            const wrapper = render(<Accented data-testid="accented" color="secondary" className="hello-world" />);

            expect(wrapper.getByTestId('accented')).toHaveClass('hello-world');
            expect(() => wrapper.unmount()).not.toThrow();
        });
    });
});
