import { test, expect } from '@playwright/test';

test('Browser Context Playwright test', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://facebook.com');
    console.log(await page.title());

});

test('Page Playwright test', async ({ page }) => {
    await page.goto('https://google.com');
    console.log(await page.title());
    await expect(page).toHaveTitle('Google');
});