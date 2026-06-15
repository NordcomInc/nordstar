import { expect, test } from '@playwright/test';
import { routes } from './helpers';

test.beforeEach(async ({ page }) => {
    await page.goto(routes.playground);
});

test.describe('Button', () => {
    test('renders an enabled, clickable button', async ({ page }) => {
        const button = page.getByTestId('pg-button-default');

        await expect(button).toBeVisible();
        await expect(button).toBeEnabled();
        await expect(button).toHaveAttribute('type', 'button');
        await button.click();
    });

    test('solid button carries the resting elevation', async ({ page }) => {
        // The elevated design language gives solid buttons a shadow-raised box-shadow.
        const button = page.getByTestId('pg-button-default');
        await expect(button).not.toHaveCSS('box-shadow', 'none');
    });

    test('disabled button is inert and announced to assistive tech', async ({ page }) => {
        const button = page.getByTestId('pg-button-disabled');

        await expect(button).toBeDisabled();
        await expect(button).toHaveAttribute('aria-disabled', 'true');
    });

    test('is reachable and operable with the keyboard', async ({ page }) => {
        const button = page.getByTestId('pg-button-default');

        await button.focus();
        await expect(button).toBeFocused();
        await page.keyboard.press('Enter');
        await expect(button).toBeVisible();
    });
});
