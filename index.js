const open = require('open');
const playwright = require('playwright');
const { setIntervalAsync } = require('set-interval-async/dynamic');

const URL = 'https://store.google.de/config/pixel_5';

// Change to nth-child(2) if you are planning to buy the Sorta Sage variant
const BUTTON_SELECTOR = '#mqn-slick-gallery > div:nth-child(1) button';

async function check() {
  try {
    const browser = await playwright.chromium.launch();
    const page = await browser.newPage();

    await page.goto(URL);
    await page.waitForSelector(BUTTON_SELECTOR);
    const disabled = await page.getAttribute(BUTTON_SELECTOR, 'disabled');

    if (disabled !== 'disabled') {
      await open(URL);
      await browser.close();
      process.exit(0);
    }

    await browser.close();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

setIntervalAsync(() => check(), 15000);
