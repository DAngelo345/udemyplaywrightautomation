const {test, expect} = require('@playwright/test')

test('First Playwright test', async ({browser}) =>
{
//my first test learning from scratch 
// await lets your js code know to wait until the line above has completed 
// playwright does these two lines of code -- used for adding in explicit cookies / plugins 
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://github.com/DAngelo345/udemyplaywrightautomation')

    // get title - assertion
    console.log(await page.title());
   
});


test('Browser Context PlayWright', async ({page}) =>
{
   
    // playwright does these two lines of code -- used for adding in explicit cookies / plugins 
    // const context = await browser.newContext();
    //const page = await context.newPage();
    await page.goto('https://google.com')
    console.log(await page.title());

     await expect(page).toHaveTitle("Google");
});