import React from 'react';

import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';

import { render } from '@testing-library/react';
import { Header } from '../src';

describe('components', () => {
    describe('header', () => {
        describe('Header', () => {
            it('renders correctly', () => {
                const wrapper = render(<Header />);

                expect(() => wrapper.unmount()).not.toThrow();
            });
        });
    });
});
