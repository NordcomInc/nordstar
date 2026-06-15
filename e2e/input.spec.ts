import { expect, test } from '@playwright/test';
import { routes } from './helpers';

test.beforeEach(async ({ page }) => {
    await page.goto(routes.playground);
});

test.describe('Input', () => {
    test('accepts typed text and associates its floating label', async ({ page }) => {
        const input = page.getByTestId('pg-input-control');
        const section = page.getByTestId('pg-input');

        await expect(section.getByText('Email address')).toBeVisible();
        // Empty + no placeholder → the wrapper does not advertise a value yet.
        await expect(section.locator('[data-value="true"]')).toHaveCount(0);

        await input.fill('hello@example.com');
        await expect(input).toHaveValue('hello@example.com');
        // Once it holds a value the wrapper flips data-value, which floats the label.
        await expect(section.locator('[data-value="true"]')).toHaveCount(1);
    });

    test('clears back to an empty value', async ({ page }) => {
        const input = page.getByTestId('pg-input-control');

        await input.fill('temporary');
        await expect(input).toHaveValue('temporary');

        await input.fill('');
        await expect(input).toHaveValue('');
    });
});
