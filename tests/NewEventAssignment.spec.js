const {test, expect} = require('@playwright/test')

test('Create Event Admin Panel', async ({ page }) => {


    const email = 'dangelo1thomas@gmail.com'
    const password = 'QAprac345!'

  await page.goto('https://eventhub.rahulshettyacademy.com/login');
  await page.getByPlaceholder('textbox', { name: 'Email' }).fill(email);
  await page.getByLabel('textbox', { name: 'Password' }).fill('QAprac345!');
  await page.locator('#login-btn').click();

   await page.locator('h1').first().waitFor();
 
  await expect(page.locator('h1')).toContainText('Discover & BookAmazing Events');

  await page.getByRole('button', { name: 'Admin' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Manage Events' }).click();
  await expect(page.getByRole('main')).toContainText('+ New Event');
  await page.getByTestId('event-title-input').click();
  await page.getByRole('textbox', { name: 'Describe the event…' }).click();
  await page.getByRole('textbox', { name: 'City*' }).click();
  await page.getByRole('textbox', { name: 'City*' }).fill('west bay');
  await page.getByRole('textbox', { name: 'Venue*' }).click();
  await page.getByRole('textbox', { name: 'Venue*' }).fill('the ritz');
  await page.getByRole('spinbutton', { name: 'Price ($)*' }).click();
  await page.getByRole('spinbutton', { name: 'Price ($)*' }).fill('100');
  await page.getByRole('textbox', { name: 'Event Date & Time*' }).click();
  await page.getByRole('textbox', { name: 'Event Date & Time*' }).click();
  await page.getByRole('textbox', { name: 'Event Date & Time*' }).click();
  await page.getByRole('spinbutton', { name: 'Total Seats*' }).click();
  await page.getByRole('spinbutton', { name: 'Total Seats*' }).fill('50');
  await page.getByTestId('add-event-btn').click();
  await page.getByRole('textbox', { name: 'Event Date & Time*' }).click();
  await page.getByRole('textbox', { name: 'Event Date & Time*' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Event Date & Time*' }).press('ArrowRight');
  await page.getByTestId('add-event-btn').click();
  await page.getByRole('textbox', { name: 'Event Date & Time*' }).click();
  await page.getByRole('textbox', { name: 'Event Date & Time*' }).click();
  await page.getByRole('textbox', { name: 'Event Date & Time*' }).click();
  await page.getByRole('textbox', { name: 'Event Date & Time*' }).click();
  await page.getByTestId('add-event-btn').click();
  await page.getByTestId('event-title-input').click();
  await page.getByTestId('event-title-input').fill('Event Assignment');
  await page.getByRole('textbox', { name: 'Describe the event…' }).click();
  await page.getByRole('textbox', { name: 'Describe the event…' }).fill('test description');
  await page.getByTestId('add-event-btn').click();
  await page.getByRole('textbox', { name: 'Event Date & Time*' }).click();
  await page.getByRole('textbox', { name: 'Event Date & Time*' }).click();
  await page.getByRole('textbox', { name: 'Event Date & Time*' }).click();
  await page.getByRole('textbox', { name: 'Event Date & Time*' }).click();
  await page.getByRole('textbox', { name: 'Event Date & Time*' }).click();
  await page.getByRole('textbox', { name: 'Event Date & Time*' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Event Date & Time*' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Event Date & Time*' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Event Date & Time*' }).fill('2026-12-09T09:00');
  await page.getByRole('textbox', { name: 'Event Date & Time*' }).click();
  await page.getByTestId('add-event-btn').click();
  await page.getByText('Event Assignment').click();
  await page.locator('section').filter({ hasText: 'All Events4' }).click();
  await page.getByRole('cell', { name: '50/' }).click();
});



   
