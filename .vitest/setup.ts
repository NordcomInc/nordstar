import 'next';

import * as matchers from '@testing-library/jest-dom/matchers';

import { expect, vi } from 'vitest';

expect.extend(matchers);

// Mock the `server-only` module as it doesn't work with vitest.
vi.mock('server-only', () => {
    return {};
});
