const {test, expect} = require('@playwright/test')

test("Popup Validations", async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    //await page.goto("https://google.com");
   // await page.goBack();
    //await page.goForward();
//
//npx playwright test tests/MoreValidations.spec.js --headed --debug
await expect(page.locator("#displayed-text")).toBeVisible();
await page.locator("#hide-textbox").click();
await expect(page.locator("#displayeed-text")).toBeHidden();



})