import React from 'react';

import { describe, expect, it } from 'vitest';

import { render } from '@testing-library/react';
import { Label } from '.';

describe('components', () => {
    describe('Label', () => {
        it('has correct displayName', () => {
            expect(Label).toHaveProperty('displayName', 'Nordstar.Typography.Label');
        });

        it('renders correctly', () => {
            const wrapper = render(<Label>Hello World</Label>);

            expect(() => wrapper.unmount()).not.toThrow();
        });
    });
});
