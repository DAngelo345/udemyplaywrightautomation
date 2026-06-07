import {test, expect} from '@playwright/test';


test('PlayWright Special Locators', async ({ page }) =>{

await page.goto("https://rahulshettyacademy.com/angularpractice/")
await page.getByLabel("Check me out if you Love IceCreams!").click();
await page.getByLabel("Employed").check();

//select option only works when the options are within the selected tag
await page.getByLabel("Gender").selectOption("Male")

//npx playwright test --ui
await page.pause();

});