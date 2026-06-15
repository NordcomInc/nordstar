import { expect, test } from '@playwright/test';
import { routes } from './helpers';

test.beforeEach(async ({ page }) => {
    await page.goto(routes.playground);
});

test.describe('Switch', () => {
    test('exposes the switch role and starts unchecked', async ({ page }) => {
        const control = page.getByTestId('pg-switch-control');

        await expect(control).toHaveRole('switch');
        await expect(control).toHaveAttribute('aria-checked', 'false');
    });

    test('toggles on pointer click', async ({ page }) => {
        const control = page.getByTestId('pg-switch-control');

        await control.click();
        await expect(control).toHaveAttribute('aria-checked', 'true');

        await control.click();
        await expect(control).toHaveAttribute('aria-checked', 'false');
    });

    test('toggles with the keyboard', async ({ page }) => {
        const control = page.getByTestId('pg-switch-control');

        await control.focus();
        await expect(control).toBeFocused();

        await page.keyboard.press('Space');
        await expect(control).toHaveAttribute('aria-checked', 'true');
    });
});
