import { expect, test } from '@playwright/test';
import { routes } from './helpers';

test.beforeEach(async ({ page }) => {
    await page.goto(routes.playground);
});

test.describe('Accordion', () => {
    test('expands and collapses its section', async ({ page }) => {
        const trigger = page.getByTestId('pg-accordion-trigger');
        const content = page.getByText('Ships in 1–2 business days.');

        await expect(content).toBeHidden();

        await trigger.click();
        await expect(content).toBeVisible();
        await expect(trigger).toHaveAttribute('aria-expanded', 'true');

        await trigger.click();
        await expect(content).toBeHidden();
        await expect(trigger).toHaveAttribute('aria-expanded', 'false');
    });

    test('toggles with the keyboard', async ({ page }) => {
        const trigger = page.getByTestId('pg-accordion-trigger');

        await trigger.focus();
        await page.keyboard.press('Enter');
        await expect(page.getByText('Ships in 1–2 business days.')).toBeVisible();
    });
});
