const {test, expect, cardTitles} = require('@playwright/test')

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
   
    await page.goto('https://google.com')
    console.log(await page.title());
    
    await expect(page).toHaveTitle("Google");

});

test('Locator method and Fill methods', async ({browser}) =>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://youtube.com')
    //css, xpath supported 

 await page.locator('.ytSearchboxComponentInput').fill('Playwright tutorial');

    await Promise.all([
    page.waitForURL('**/results?search_query=*'),
    await page.locator('button[aria-label="Search"]').first().click()
    ]);

    await expect(page).toHaveURL(/results\?search_query=Playwright\+tutorial/);
    console.log('Playwright search complete');
    await page.waitForTimeout(15000);

    await page.locator('.ytSearchboxComponentInput').clear();
    await page.locator('.ytSearchboxComponentInput').fill('Call of Duty 4 gameplay');


    await Promise.all([
        page.waitForURL('**/results?search_query=Call+of+Duty+4+gameplay*'),
        page.locator('button[aria-label="Search"]').first().click()
    ]);

    console.log('COD4 search complete');
   
});

test('Hacker News Site', async ({page}) =>
{
      await page.goto('https://news.ycombinator.com/');

    console.log(await page.title());
    

    const allTitles = await page.locator('.titleline').allTextContents();

    console.log(allTitles);
   
});

