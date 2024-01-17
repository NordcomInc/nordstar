import '@testing-library/jest-dom';

import { describe, expect, it } from 'vitest';

import { Header } from '../src';
import React from 'react';
import { render } from '@testing-library/react';

describe('components', () => {
    describe('header', () => {
        describe('Header', () => {
            it('should render correctly', () => {
                const wrapper = render(<Header />);

                expect(() => wrapper.unmount()).not.toThrow();
            });
        });
    });
});
