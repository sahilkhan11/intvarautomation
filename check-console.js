const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    page.on('console', msg => {
      console.log(`PAGE LOG [${msg.type()}]:`, msg.text());
    });
    
    page.on('pageerror', err => {
      console.error('PAGE ERROR:', err.toString());
    });
    
    console.log('Navigating to http://localhost:3000...');
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
    
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log('Done checking.');
    
    await browser.close();
  } catch (error) {
    console.error('Script Error:', error);
  }
})();
