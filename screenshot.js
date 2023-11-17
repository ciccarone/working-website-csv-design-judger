const puppeteer = require('puppeteer');
const path = require('path');
const fsPromises = require('fs').promises;


(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(process.argv[2], { waitUntil: 'networkidle0' });
    const screenshotPath = path.join(process.cwd(), './frames/site.png');
    await page.screenshot({ path: screenshotPath, fullPage: true });
    await browser.close();
})();