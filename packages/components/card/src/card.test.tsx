import { describe, expect, it } from 'vitest';

import { Card } from '../src';
import { render } from '@testing-library/react';

describe('components', () => {
    describe('Card', () => {
        it('should render correctly', () => {
            const wrapper = render(<Card />);

            expect(() => wrapper.unmount()).not.toThrow();
        });
    });
});
