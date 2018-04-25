require('geckodriver');
const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  try {
    let driver = await new Builder().forBrowser('firefox').usingServer('http://seleniumhub:4444/wd/hub').build();

    await driver.get('http://wordpress:80');
    var title = await driver.getTitle();
   	console.log(title);

/*    let element = await driver.findElement(By.css('.search'));
    await element.sendKeys('Hello');
    await driver.findElement(By.css('.search-button')).click();

*/    await driver.quit();

    console.log('SUCCESS');
  } catch(err) {
  	console.log('ERROR : ' + decodeURI(err));
  }
})();

// Docker Test – Just another WordPress site