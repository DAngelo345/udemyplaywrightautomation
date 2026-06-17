const {test, expect} = require('@playwright/test')

test('Create Event Admin Panel', async ({ page }) => {


    const email = 'dangelo1thomas@gmail.com'
    const password = 'QAprac345!'

  await page.goto('https://eventhub.rahulshettyacademy.com/login');
  await page.getByPlaceholder('you@email.com').fill(email);
  await page.getByPlaceholder('••••••').fill(password);
  await page.locator('#login-btn').click();

   await page.locator('h1').first().waitFor();

  await expect(page.getByRole('link', { name: 'Browse Events →' })).toBeVisible();
 
  
  await page.getByRole('button', { name: 'Admin' }).click();

  await page.getByRole('navigation').getByRole('link', { name: 'Manage Events' }).click();


const eventTitle = `Test Event ${Date.now()}`;
  await page.getByTestId('event-title-input').fill(eventTitle);

  await page.getByRole('textbox', { name: 'Describe the event…' }).fill("test desc 1");
 await page.locator('#city').fill("West Bay");
  await page.locator('#venue').fill("the ritz");

   await page.getByRole('textbox', { name: 'Event Date & Time*' }).fill('2026-12-09T09:00');
  await page.getByRole('spinbutton', { name: 'Price ($)*' }).fill('100');
  
  await page.getByRole('spinbutton', { name: 'Total Seats*' }).fill('50');
  await page.getByTestId('add-event-btn').click();

  await expect(page.getByText('Event created!')).toBeVisible();

  //await page.pause();
  await page.locator('#nav-events').click();

  const eventCards = page.getByTestId('event-card');

await expect(eventCards.first()).toBeVisible();

const matchingCard = eventCards.filter({
    hasText: eventTitle
});

console.log(eventCards)
console.log(eventTitle)
console.log(matchingCard)

await expect(matchingCard).toBeVisible({
    timeout: 5000
});



  
 // await page.getByRole('cell', { name: '50/' }).click();
});



   
