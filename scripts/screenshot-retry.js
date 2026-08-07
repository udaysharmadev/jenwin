const { chromium } = require('playwright');
const path = require('path');

const sites = [
  { url: 'http://glassindiacompany.com', slug: 'glassindia' },
  { url: 'https://herlyy.com', slug: 'herlyy', ignoreSSL: true },
];

const OUTPUT_DIR = '/Users/uday/jenwin/public/work';

(async () => {
  const browser = await chromium.launch({ headless: true });

  for (const site of sites) {
    const context = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      ignoreHTTPSErrors: true,
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    });
    const page = await context.newPage();
    try {
      console.log(`📸 Capturing ${site.url}...`);
      await page.goto(site.url, { waitUntil: 'domcontentloaded', timeout: 20000 });
      await page.waitForTimeout(2500);
      const outPath = path.join(OUTPUT_DIR, `${site.slug}.png`);
      await page.screenshot({ path: outPath, clip: { x: 0, y: 0, width: 1440, height: 900 } });
      console.log(`  ✅ Saved public/work/${site.slug}.png`);
    } catch (err) {
      console.log(`  ❌ Failed: ${err.message.split('\n')[0]}`);
    } finally {
      await page.close();
      await context.close();
    }
  }

  await browser.close();
  console.log('Done.');
})();
