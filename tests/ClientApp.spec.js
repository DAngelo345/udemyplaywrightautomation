const {test, expect} = require('@playwright/test')


test('TEMP YOUTUBE VIDEO FINDER 10HR FIRE PLACE', async ({page}) =>
{
   
    await page.goto('https://www.youtube.com/watch?v=L_LUpnjgPso')
    console.log(await page.title());
    
    //await expect(page).toHaveTitle("Google");

});

test.only('Products test locator practice', async ({ page }) => {
  const email = 'anshika@gmail.com'
  const productName = 'ZARA COAT 3';
  const products = page.locator('.card-body');

  await page.goto('https://rahulshettyacademy.com/client');

  await page.locator('#userEmail').fill(email);
  await page.locator('#userPassword').fill('Iamking@000');
  await page.locator('[value="Login"]').click();

  await page.locator('.card-body b').first().waitFor();

  const titles = await page.locator('.card-body b').allTextContents();
  console.log(titles);

  const count = await products.count();

  for (let i = 0; i < count; ++i) {
    if ((await products.nth(i).locator('b').textContent()) === productName) {
      await products.nth(i).locator('text= Add To Cart').click();
    console.log('Add to cart was clicked');
      break;
    }
  }
  await page.locator('[routerLink*="cart"]').click();

  await page.locator("div li").first().waitFor();

  const bool = await page.locator("h3:has-text('Zara Coat 3')").isVisible();
  expect(bool).toBeTruthy();

  await page.locator('text=Checkout').click();

      const cardNumber = page.locator('input[value="4542 9931 9292 2293"]');

      console.log(await cardNumber.inputValue());

      await cardNumber.fill('4111 1111 1111 1111');

      const dropDowns = page.locator('select.input.ddl');

      await dropDowns.nth(0).selectOption('04'); // Month
      await dropDowns.nth(1).selectOption('20'); // Year

      await page.locator("//div[@class='payment__cc']//div[2]//input[1]").fill('333')

      await page.locator("//div[@class='payment__info']//div[3]//div[1]//input[1]").fill("D'Angelo Thomas")

      await page.locator('[name="coupon"]').fill('PlayWright Baby')

const couponButton = page.locator('button:has-text("Apply Coupon")');

if (await couponButton.isVisible()) {
    await couponButton.click();
    console.log('coupon clicked');
} else {
    console.log('not clicked');
}

const countryInput = page.locator('[placeholder*="Select Country"]');

await countryInput.click();
await countryInput.pressSequentially('Cay', { delay: 100 });

await page.locator('.ta-results button', { hasText: ' Cayman Islands' }).click();

await expect(page.locator(".user__name [type='text']").first()).toHaveText(email);

await page.locator('a:has-text("Place Order")').click();

await expect(page.locator('td h1.hero-primary')).toHaveText('Thankyou for the order.');

const orderIdLabel = page.locator('td.em-spacer-1 label').last();
await expect(orderIdLabel).toBeVisible();
const orderIdText = await orderIdLabel.textContent();
const orderId = orderIdText.replaceAll('|', '').trim();
console.log(orderId);
await page.getByRole('button', { name: 'ORDERS' }).click();



const rows = page.locator('tbody tr');

await rows.first().waitFor();

console.log(await rows.allTextContents());

for (let i = 0; i < await rows.count(); ++i) {

    const orderIdRow = await rows.nth(i).locator('th').textContent();
    console.log(orderIdRow)

    if (orderId.includes(orderIdRow.trim())) {

        await rows.nth(i).locator('button.btn-primary').click();

        break;
    }
}

await expect(page.locator('.email-title')).toHaveText('order summary');

      //await page.pause();
});




        
        