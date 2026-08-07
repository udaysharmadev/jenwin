const { chromium } = require('playwright');
const path = require('path');

const sites = [
  { url: 'https://usbro.in', slug: 'usbro' },
  { url: 'https://beautyessence.net.in', slug: 'beautyessence' },
  { url: 'https://emaura.in', slug: 'emaura' },
  { url: 'https://plushiess.com', slug: 'plushiess' },
  { url: 'https://kixcures.com', slug: 'kixcures' },
  { url: 'http://validussentinel.com', slug: 'validussentinel' },
  { url: 'https://rajamasaleanddryfruits.com', slug: 'rajamasale' },
  { url: 'https://glassindiacompany.com', slug: 'glassindia' },
  { url: 'https://herlyy.com', slug: 'herlyy' },
  { url: 'https://visaovisa.com', slug: 'visaovisa' },
  { url: 'https://zaanji.com', slug: 'zaanji' },
];

const OUTPUT_DIR = '/Users/uday/jenwin/public/work';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  });

  for (const site of sites) {
    const page = await context.newPage();
    try {
      console.log(`📸 Capturing ${site.url}...`);
      await page.goto(site.url, { waitUntil: 'domcontentloaded', timeout: 20000 });
      
      // Wait a bit for content to render
      await page.waitForTimeout(2500);

      // Try to dismiss any popups/cookie banners
      const dismissSelectors = [
        'button[class*="close"]',
        'button[class*="dismiss"]',
        'button[class*="accept"]',
        '[class*="cookie"] button',
        '[class*="popup"] button[class*="close"]',
      ];
      for (const sel of dismissSelectors) {
        try {
          const el = page.locator(sel).first();
          if (await el.isVisible({ timeout: 500 })) {
            await el.click();
            await page.waitForTimeout(300);
          }
        } catch {}
      }

      const outPath = path.join(OUTPUT_DIR, `${site.slug}.png`);
      await page.screenshot({ path: outPath, clip: { x: 0, y: 0, width: 1440, height: 900 } });
      console.log(`  ✅ Saved to public/work/${site.slug}.png`);
    } catch (err) {
      console.log(`  ❌ Failed: ${err.message}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log('\nDone! All screenshots captured.');
})();
