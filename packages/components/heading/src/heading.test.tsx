import { describe, expect, it } from 'vitest';

import { render } from '@testing-library/react';
import React from 'react';
import { Heading } from '../src';

describe('components', () => {
    describe('Heading', () => {
        it('should render correctly', () => {
            const wrapper = render(<Heading />);

            expect(() => wrapper.unmount()).not.toThrow();
        });
    });
});
