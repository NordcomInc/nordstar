import '@testing-library/jest-dom/vitest';
import 'next';

import * as matchers from '@testing-library/jest-dom/matchers';

import { cleanup } from '@testing-library/react';
import { afterEach, expect, vi } from 'vitest';

expect.extend(matchers);
afterEach(() => {
    cleanup();
});

// Mock the `server-only` module as it doesn't work with vitest.
vi.mock('server-only', () => {
    return {};
});
