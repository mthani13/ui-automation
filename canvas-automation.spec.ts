import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://htmlcanvasstudio.com/');
  await page.getByRole('button', { name: 'Draw a line' }).click();


  const horizontalLineStart = { x: 175, y: 170 };
  const horizontalLineEnd = { x: 370, y: 170 };
  const verticalLineStart = { x: 270, y: 81 };
  const verticalLineEnd = { x: 270, y: 265 };


  await page.locator('#imageTemp').click({
    position:horizontalLineStart });
  await page.locator('body').press('Escape');
 
  await page.locator('#imageTemp').click({
    position: horizontalLineEnd });
  await page.locator('body').press('Escape');

  await page.locator('#imageTemp').click({
    position: verticalLineStart
  });
  await page.locator('body').press('Escape');

  await page.locator('#imageTemp').click({
    position: verticalLineEnd
  });
  
  await page.getByRole('button', { name: 'Draw a rectangle' }).click();
  await page.locator('#imageTemp').click({
    position: {
      x: 27,
      y: 228
    }
  });
  await page.locator('body').press('Escape');
  await page.locator('#imageTemp').click({
    position: {
      x: 197,
      y: 339
    }
  });

  await page.locator('#slider').click();
  await page.getByRole('button', { name: 'Use eraser' }).click();
 
await page.locator('#imageTemp').click({position: horizontalLineStart});

await page.mouse.down();
await page.mouse.move(horizontalLineEnd.x, horizontalLineEnd.y,{ steps:20});
await page.mouse.up();

 await page.waitForTimeout(1000);
await page.pause(); 
});