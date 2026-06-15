/**
 * Shared routing helpers for the e2e suite.
 *
 * The docs export is mounted under its `basePath` (`/nordstar`), and the
 * Playwright `baseURL` is the bare origin, so every navigation goes through
 * these absolute, base-path-aware paths instead of repeating the prefix.
 */
export const BASE_PATH = '/nordstar';

export const routes = {
    components: `${BASE_PATH}/docs/components`,
    docs: `${BASE_PATH}/docs`,
    home: `${BASE_PATH}/`,
    playground: `${BASE_PATH}/playground`,
    component: (slug: string) => `${BASE_PATH}/docs/components/${slug}`,
} as const;
