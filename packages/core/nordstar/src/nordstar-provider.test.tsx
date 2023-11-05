import { describe, expect, it } from 'vitest';

import { render } from '@testing-library/react';
import { NordstarProvider } from './nordstar-provider';

describe('NordstarProvider', () => {
    it('renders its children', () => {
        const { getByText } = render(
            <NordstarProvider>
                <div>Hello, world!</div>
            </NordstarProvider>
        );
        expect(getByText('Hello, world!')).toBeInTheDocument();
    });
});
