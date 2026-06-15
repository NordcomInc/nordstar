import { expect, test } from '@playwright/test';
import { routes } from './helpers';

test.beforeEach(async ({ page }) => {
    await page.goto(routes.playground);
});

test.describe('DropdownMenu', () => {
    test('opens from its trigger and shows the items', async ({ page }) => {
        await page.getByTestId('pg-dropdown-trigger').click();

        await expect(page.getByRole('menu')).toBeVisible();
        await expect(page.getByRole('menuitem', { name: 'Edit' })).toBeVisible();
        await expect(page.getByRole('menuitem', { name: 'Duplicate' })).toBeVisible();
        await expect(page.getByRole('menuitem', { name: 'Delete' })).toBeVisible();
    });

    test('closes after selecting an item', async ({ page }) => {
        await page.getByTestId('pg-dropdown-trigger').click();
        await page.getByRole('menuitem', { name: 'Edit' }).click();

        await expect(page.getByRole('menu')).toBeHidden();
    });

    test('closes on Escape and restores focus to the trigger', async ({ page }) => {
        const trigger = page.getByTestId('pg-dropdown-trigger');

        await trigger.click();
        await expect(page.getByRole('menu')).toBeVisible();

        await page.keyboard.press('Escape');
        await expect(page.getByRole('menu')).toBeHidden();
        await expect(trigger).toBeFocused();
    });

    test('supports keyboard navigation between items', async ({ page }) => {
        await page.getByTestId('pg-dropdown-trigger').focus();
        await page.keyboard.press('Enter');
        await expect(page.getByRole('menu')).toBeVisible();

        // Radix moves focus into the menu on open; the arrow keys roam between items.
        await page.keyboard.press('ArrowDown');
        await expect(page.locator('[role="menuitem"]:focus')).toHaveCount(1);
        await page.keyboard.press('ArrowUp');
        await expect(page.locator('[role="menuitem"]:focus')).toHaveCount(1);
    });
});
