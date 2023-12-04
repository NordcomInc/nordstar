import { describe, expect, it } from 'vitest';

import { render } from '@testing-library/react';
import React from 'react';
import { Label } from '../src';

describe('components', () => {
    describe('label', () => {
        describe('Label', () => {
            it('should render correctly', () => {
                const wrapper = render(<Label>Hello World</Label>);

                expect(() => wrapper.unmount()).not.toThrow();
            });
        });
    });
});
