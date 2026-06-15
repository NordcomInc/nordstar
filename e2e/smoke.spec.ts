import { expect, test } from '@playwright/test';
import { routes } from './helpers';

test.describe('smoke', () => {
    test('renders the landing hero, primary actions and footer', async ({ page }) => {
        await page.goto(routes.home);

        await expect(page.getByRole('heading', { level: 1 })).toContainText('Nordstar');
        await expect(page.getByRole('link', { name: 'Get Started' }).first()).toBeVisible();
        await expect(page.getByRole('link', { name: 'View on GitHub' })).toBeVisible();
        await expect(page.getByRole('contentinfo')).toContainText('Filiph Sandström');
    });

    test('exposes the global header navigation', async ({ page }) => {
        await page.goto(routes.home);

        const header = page.getByRole('banner');
        await expect(header.getByRole('link', { name: 'Home' })).toBeVisible();
        await expect(header.getByRole('link', { name: 'Docs' })).toBeVisible();
        await expect(header.getByRole('link', { name: 'GitHub' })).toBeVisible();
    });

    test('navigates from the header into the docs', async ({ page }) => {
        await page.goto(routes.home);

        await page.getByRole('banner').getByRole('link', { name: 'Docs' }).click();
        await expect(page).toHaveURL(new RegExp(`${routes.docs}/?$`));
        await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    });

    test('lists every component on the components index', async ({ page }) => {
        await page.goto(routes.components);

        const main = page.getByRole('main');
        for (const name of ['Button', 'Card', 'Input', 'Select', 'Switch', 'Tooltip']) {
            await expect(main.getByRole('link', { name, exact: true }).first()).toBeVisible();
        }
    });

    test('key pages render without uncaught exceptions', async ({ page }) => {
        const errors: string[] = [];
        page.on('pageerror', (error) => errors.push(error.message));

        for (const url of [
            routes.home,
            routes.docs,
            routes.components,
            routes.component('button'),
            routes.component('accordion'),
            routes.playground,
        ]) {
            await page.goto(url);
            await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
        }

        expect(errors, errors.join('\n')).toEqual([]);
    });
});
