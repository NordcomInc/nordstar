import { describe, expect, it } from 'vitest';

import { Accented } from '../src';
import React from 'react';
import { render } from '@testing-library/react';

describe('components', () => {
    describe('accented', () => {
        describe('Accented', () => {
            it('should render correctly', () => {
                const wrapper = render(<Accented />);

                expect(() => wrapper.unmount()).not.toThrow();
            });
        });
    });
});
