import '@testing-library/jest-dom';

import { describe, expect, it } from 'vitest';

import { Input } from '../src';
import React from 'react';
import { render } from '@testing-library/react';

describe('components', () => {
    describe('input', () => {
        describe('Input', () => {
            it('should render correctly', () => {
                const wrapper = render(<Input />);

                expect(() => wrapper.unmount()).not.toThrow();
            });
        });
    });
});
