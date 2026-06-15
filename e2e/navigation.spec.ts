import { expect, test } from '@playwright/test';
import { routes } from './helpers';

test.describe('docs navigation', () => {
    test('marks the current component as the active sidebar link', async ({ page }) => {
        await page.goto(routes.component('button'));

        const nav = page.getByRole('navigation', { name: 'Documentation' });
        const buttonLink = nav.getByRole('link', { exact: true, name: 'Button' });
        await expect(buttonLink).toHaveAttribute('aria-current', 'page');
    });

    test('moves the active state when navigating between components', async ({ page }) => {
        await page.goto(routes.component('button'));

        const nav = page.getByRole('navigation', { name: 'Documentation' });
        await nav.getByRole('link', { exact: true, name: 'Card' }).click();

        await expect(page).toHaveURL(new RegExp(`${routes.component('card')}/?$`));
        await expect(nav.getByRole('link', { exact: true, name: 'Card' })).toHaveAttribute('aria-current', 'page');
        await expect(nav.getByRole('link', { exact: true, name: 'Button' })).not.toHaveAttribute(
            'aria-current',
            'page',
        );
    });
});
