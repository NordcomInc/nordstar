import { expect, test } from '@playwright/test';
import { routes } from './helpers';

test.beforeEach(async ({ page }) => {
    await page.goto(routes.playground);
});

test.describe('Details', () => {
    test('reveals and hides its content when the summary is toggled', async ({ page }) => {
        const details = page.getByTestId('pg-details-control');
        const summary = details.getByText('More information');
        const content = details.getByText('Tucked-away supporting content.');

        await expect(details).not.toHaveAttribute('open', '');
        await expect(content).toBeHidden();

        await summary.click();
        await expect(details).toHaveAttribute('open', '');
        await expect(content).toBeVisible();

        await summary.click();
        await expect(content).toBeHidden();
    });
});
