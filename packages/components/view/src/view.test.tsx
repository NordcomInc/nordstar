import { describe, expect, it } from 'vitest';

import { View } from '../src';
import React from 'react';
import { render } from '@testing-library/react';

describe('components', () => {
    describe('view', () => {
        describe('View', () => {
            it('should render correctly', () => {
                const wrapper = render(<View />);

                expect(() => wrapper.unmount()).not.toThrow();
            });
        });
    });
});
