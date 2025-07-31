import { test, expect } from '@playwright/test';


test('Web Client App login', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/client/auth/login');
    console.log(await page.title());
    await page.locator('#userEmail').fill('kumarnagar.mufc@gmail.com');
    await page.locator('#userPassword').fill('Test@123');
    await page.locator('#login').click();
    //await page.waitForLoadState('networkidle');
    await page.locator('.card-body b').first().waitFor();
    console.log(await page.locator('.card-body b').allTextContents());
});