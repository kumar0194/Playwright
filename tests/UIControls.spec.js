import { test, expect } from '@playwright/test';


test('UI Controls', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());
    await page.locator('#username').fill('rahulshetty');
    await page.locator("[type='password']").fill('learning');
    const documentLink = page. locator(" [href*='documents-request']");
    const dropdown = page.locator("select.form-control");
    await dropdown.selectOption("consult");
    await page.locator(".radiotextsty").last().click();
    await page.locator("#okayBtn").click();
    console. log (await page.locator(".radiotextsty").last().isChecked());
    await expect(page. locator(".radiotextsty").last()).toBeChecked();
    await page.locator("#terms").click();
    await expect(page. locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck();
    expect( await page.locator("#terms").isChecked()).toBeFalsy();
    await expect(documentLink).toHaveAttribute("class", "blinkingText");

});