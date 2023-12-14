import '@testing-library/jest-dom';

import { describe, expect, it } from '@vitest';

import { render } from '@testing-library/react';
import React from 'react';
import { Card } from '../src';

describe('components', () => {
    describe('card', () => {
        describe('Card', () => {
            it('should render correctly', () => {
                const wrapper = render(<Card />);

                expect(() => wrapper.unmount()).not.toThrow();
            });
    it('should render correctly with solid variant and primary color', () => {
        const wrapper = render(<Card variant='solid' color='primary' />);
        expect(() => wrapper.unmount()).not.toThrow();
    });
        });
    });
});
