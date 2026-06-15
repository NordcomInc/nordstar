import { expect, test } from '@playwright/test';
import { routes } from './helpers';

test.describe('changelog overview', () => {
    test('lists packages with versions and view links', async ({ page }) => {
        await page.goto(routes.changelog);

        await expect(page.getByRole('heading', { level: 1, name: /changelog/i })).toBeVisible();
        // The umbrella package is featured; component packages follow.
        await expect(page.getByText('@nordcom/nordstar', { exact: true })).toBeVisible();
        await expect(page.getByText('@nordcom/nordstar-button', { exact: true })).toBeVisible();
        // Assert a semver chip rather than a fixed version — the changelog grows on every release.
        await expect(page.getByText(/^v\d+\.\d+\.\d+/).first()).toBeVisible();
        await expect(page.getByRole('link', { name: /view changelog/i }).first()).toBeVisible();
    });

    test('navigates into a package changelog', async ({ page }) => {
        await page.goto(routes.changelog);

        await page.getByRole('link', { name: /@nordcom\/nordstar-button/ }).click();

        await expect(page).toHaveURL(new RegExp(`${routes.changelogPackage('nordstar-button')}/?$`));
        await expect(page.getByRole('heading', { level: 1, name: /button/i })).toBeVisible();
    });
});

test.describe('package changelog', () => {
    test('renders the release timeline with semver badges', async ({ page }) => {
        await page.goto(routes.changelogPackage('nordstar-button'));

        await expect(page.getByText('@nordcom/nordstar-button', { exact: true })).toBeVisible();
        await expect(page.getByRole('heading', { level: 2, name: /^\d+\.\d+\.\d+$/ }).first()).toBeVisible();
        await expect(page.getByText('Patch', { exact: true }).first()).toBeVisible();
    });

    test('collapses dependency bumps behind a disclosure that expands on demand', async ({ page }) => {
        await page.goto(routes.changelogPackage('nordstar-button'));

        // Target the disclosure structurally so the test survives changelog churn.
        const disclosure = page.locator('details').first();
        const dependencyList = disclosure.getByRole('list');
        await expect(dependencyList).toBeHidden();

        await disclosure.locator('summary').click();

        await expect(dependencyList).toBeVisible();
    });

    test('links entries to their GitHub commit and pull request', async ({ page }) => {
        await page.goto(routes.changelogPackage('nordstar-button'));

        await expect(page.getByRole('link', { name: /^[0-9a-f]{7}$/ }).first()).toHaveAttribute(
            'href',
            /\/commit\/[0-9a-f]+$/,
        );
        await expect(page.getByRole('link', { name: /^#\d+$/ }).first()).toHaveAttribute('href', /\/pull\/\d+$/);
    });
});

test.describe('changelog navigation', () => {
    test('marks the changelog link active in the sidebar on a package page', async ({ page }) => {
        await page.goto(routes.changelogPackage('nordstar-button'));

        const nav = page.getByRole('navigation', { name: 'Documentation' });
        await expect(nav.getByRole('link', { exact: true, name: 'Changelog' })).toHaveAttribute('aria-current', 'page');
    });

    test('reaches the changelog from the docs sidebar', async ({ page }) => {
        await page.goto(routes.docs);

        const nav = page.getByRole('navigation', { name: 'Documentation' });
        await nav.getByRole('link', { exact: true, name: 'Changelog' }).click();

        await expect(page).toHaveURL(new RegExp(`${routes.changelog}/?$`));
        await expect(page.getByRole('heading', { level: 1, name: /changelog/i })).toBeVisible();
    });

    test('key changelog pages render without uncaught exceptions', async ({ page }) => {
        const errors: string[] = [];
        page.on('pageerror', (error) => errors.push(error.message));

        for (const url of [
            routes.changelog,
            routes.changelogPackage('nordstar'),
            routes.changelogPackage('nordstar-button'),
        ]) {
            await page.goto(url);
            await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
        }

        expect(errors, errors.join('\n')).toEqual([]);
    });
});
