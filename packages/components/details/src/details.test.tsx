import React from 'react';

import '@testing-library/jest-dom/vitest';
import '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Details } from '.';
import { render } from '@testing-library/react';

describe('components', () => {
    describe('Details', () => {
        it('renders correctly', () => {
            const wrapper = render(<Details />);

            expect(() => wrapper.unmount()).not.toThrow();
        });
    });
});
