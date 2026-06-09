import {test, expect} from '@playwright/test';


test('PlayWright Special Locators', async ({ page }) =>{

await page.goto("https://rahulshettyacademy.com/angularpractice/")
await page.getByLabel("Check me out if you Love IceCreams!").click();
await page.getByLabel("Employed").check();

//select option only works when the options are within the selected tag
await page.getByLabel("Gender").selectOption("Male")
await page.getByPlaceholder("Password").fill("abc12345")
await page.getByRole("button", { name: "Submit"}).click();
await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
await page.getByRole("link", { name : "Shop"}).click();
await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();
await page.getByRole("button", { name: "Checkout"}).click();
//npx playwright test --ui
//this command give you a full test runner with screenshots crazyyy
await page.pause();

});