import { describe, expect, it } from 'vitest';

import { render } from '@testing-library/react';
import { NordstarProvider } from './nordstar-provider';

describe('NordstarProvider', () => {
    it('renders its children', () => {
        const testText = 'Hello, world!';

        const { getByText } = render(
            <NordstarProvider>
                <div>{testText}</div>
            </NordstarProvider>
        );
        expect(getByText(testText)).toBeInTheDocument();
    });
});
