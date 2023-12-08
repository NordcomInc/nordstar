import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Accented } from '../src';

describe('components', () => {
    describe('accented', () => {
        describe('Accented', () => {
            it('should render correctly', () => {
                const wrapper = render(<Accented data-testid="accented" />);

                expect(() => wrapper.unmount()).not.toThrow();
            });

            it('should render with secondary accent', () => {
                const wrapper = render(<Accented data-testid="accented" secondary />);

                expect(() => wrapper.unmount()).not.toThrow();
            });

            it('should render with className', () => {
                const wrapper = render(<Accented data-testid="accented" secondary className="hello-world" />);

                expect(wrapper.getByTestId('accented')).toHaveClass('hello-world');
                expect(() => wrapper.unmount()).not.toThrow();
            });
        });
    });
});
