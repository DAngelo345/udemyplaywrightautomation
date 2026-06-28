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
//await page.pause();

// how to deal with popups that block the dom
//dialog.dissmiss() is also and option
page.on('dialog', dialog => dialog.accept() );
await page.locator('#confirmbtn').click();
// lets you hover over an item then select for the options displayed
await page.locator('#mousehover').hover();

//how to selecte frames within a webstie basically a website within a website
const framesPage = page.frameLocator("#courses-iframe");

await framesPage.locator("li a[href*='lifetime-access']:visible").click();
const textCheck = await framesPage.locator(".text h2").textConetent();

await textCheck.split(" ")[1];
})