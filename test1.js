const {Builder, Browser, By, Key, until} = require('selenium-webdriver');
const path = require('path');
const Chrome = require("selenium-webdriver/chrome");

(async function example() {
    const options = new Chrome.Options();
    options.addArguments('user-data-dir=' + path.resolve("user-data"))
    const driver = await new Builder().forBrowser(Browser.CHROME).setChromeOptions(options).build();
    await driver.manage().setTimeouts({ implicit: 10000 });
    try {
        await driver.get('https://app.clockify.me/login');
        await driver.findElement(By.xpath("//input[@type='email']")).sendKeys("session14@jffwoffjpp.com");
        await driver.findElement(By.xpath("//input[@type='password']")).sendKeys('123456');
        await driver.findElement(By.xpath("//button[@type='submit']")).click();
        await driver.wait(until.titleIs("Clockify"));
        await sleep(3000);
    } finally {
        await driver.quit();
    }
})();

var sleep= function(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

