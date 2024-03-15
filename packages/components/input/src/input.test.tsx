import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';

import { render } from '@testing-library/react';
import { Input } from '../src';

describe('components', () => {
    describe('input', () => {
        describe('Input', () => {
            it('renders correctly', () => {
                const wrapper = render(<Input />);

                expect(() => wrapper.unmount()).not.toThrow();
            });
        });
    });
});
