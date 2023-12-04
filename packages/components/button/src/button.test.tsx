import { describe, expect, it } from 'vitest';

import { Button } from '../src';
import React from 'react';
import { render } from '@testing-library/react';

describe('components', () => {
    describe('button', () => {
        describe('Button', () => {
            it('should render correctly', () => {
                const wrapper = render(<Button />);

                expect(() => wrapper.unmount()).not.toThrow();
            });
        });
    });
});
