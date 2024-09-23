import React from 'react';

import '@testing-library/jest-dom/vitest';
import '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { render } from '@testing-library/react';
import { Details } from '.';

describe('components', () => {
    describe('Details', () => {
        it('renders correctly', () => {
            const wrapper = render(<Details label="Hello World" />);

            expect(() => wrapper.unmount()).not.toThrow();
        });
    });
});
