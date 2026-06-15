import { expect, test } from '@playwright/test';
import { routes } from './helpers';

test.beforeEach(async ({ page }) => {
    await page.goto(routes.playground);
});

test.describe('Tooltip', () => {
    test('reveals its content on hover and hides it on leave', async ({ page }) => {
        const trigger = page.getByTestId('pg-tooltip-trigger');

        await trigger.hover();
        await expect(page.getByRole('tooltip')).toContainText('Helpful hint');

        // Move the pointer away from the trigger.
        await page.getByRole('heading', { level: 1 }).hover();
        await expect(page.getByRole('tooltip')).toBeHidden();
    });

    test('reveals its content on keyboard focus', async ({ page }) => {
        const trigger = page.getByTestId('pg-tooltip-trigger');

        // Radix only opens a tooltip for genuine keyboard focus (not pointer-driven
        // focus), so land on the trigger via the keyboard: focus it, step away, then
        // Tab back so the final focus is unmistakably keyboard-originated.
        await trigger.focus();
        await page.keyboard.press('Shift+Tab');
        await page.keyboard.press('Tab');

        await expect(trigger).toBeFocused();
        await expect(page.getByRole('tooltip')).toContainText('Helpful hint');
    });
});
