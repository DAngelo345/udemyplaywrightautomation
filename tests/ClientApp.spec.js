const {test, expect} = require('@playwright/test')


test('TEMP YOUTUBE VIDEO FINDER 10HR FIRE PLACE', async ({page}) =>
{
   
    await page.goto('https://www.youtube.com/watch?v=L_LUpnjgPso')
    console.log(await page.title());
    
    //await expect(page).toHaveTitle("Google");

});

test.only('Products test locator practice', async ({page}) =>
{
    const productName = 'Zara Coat 4'
    const products = page.locator(".card-body");
    await page.goto('https://rahulshettyacademy.com/client');
    await page.locator('#userEmail').fill('anshika@gmail.com');
    await page.locator('#userPassword').fill('Iamking@000');
    await page.locator('[value="Login"]').click();
    const titles = await page.locator('.card-body b').allTextContents();
    console.log(titles);
    const count = await products.count(); 
for(let i = 0; i< count; ++i) {

     if (await products.nth(i).locator('b').textContent() === ProductName){
        //add to cart
         await products.nth(i).locator('text= Add To Cart').click();
        break;

     }
    }
    await page.pause();
});




        
        