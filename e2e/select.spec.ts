import { expect, test } from '@playwright/test';
import { routes } from './helpers';

test.beforeEach(async ({ page }) => {
    await page.goto(routes.playground);
});

test.describe('Select', () => {
    test('shows its placeholder before a choice is made', async ({ page }) => {
        await expect(page.getByTestId('pg-select-trigger')).toContainText('Pick a fruit');
    });

    test('opens, selects an option, and reflects the choice', async ({ page }) => {
        const trigger = page.getByTestId('pg-select-trigger');

        await trigger.click();
        await expect(page.getByRole('option', { name: 'Apple' })).toBeVisible();
        await expect(page.getByRole('option', { name: 'Pear' })).toBeVisible();

        await page.getByRole('option', { name: 'Cherry' }).click();

        await expect(trigger).toContainText('Cherry');
        await expect(page.getByRole('option', { name: 'Cherry' })).toBeHidden();
    });

    test('closes on Escape without choosing', async ({ page }) => {
        const trigger = page.getByTestId('pg-select-trigger');

        await trigger.click();
        await expect(page.getByRole('option', { name: 'Apple' })).toBeVisible();

        await page.keyboard.press('Escape');
        await expect(page.getByRole('option', { name: 'Apple' })).toBeHidden();
        await expect(trigger).toContainText('Pick a fruit');
    });

    test('is operable entirely from the keyboard', async ({ page }) => {
        const trigger = page.getByTestId('pg-select-trigger');

        await trigger.focus();
        await page.keyboard.press('Enter');
        await expect(page.getByRole('listbox')).toBeVisible();

        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('Enter');
        await expect(trigger).not.toContainText('Pick a fruit');
    });
});
