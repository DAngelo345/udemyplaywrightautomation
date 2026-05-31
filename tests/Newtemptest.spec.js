const {test, expect} = require('@playwright/test')

test('Temp test Youtube check')

test('TEMP YOUTUBE VIDEO FINDER 10HR FIRE PLACE', async ({page}) =>
{
   
    await page.goto('https://www.youtube.com/watch?v=L_LUpnjgPso')
    console.log(await page.title());
    
    //await expect(page).toHaveTitle("Google");

});