exports.config={
    framework:'jasmine',
    directConnect:false,
    specs:['test/accordian.spec.js','test/tabs.spec.js',],
    SELENIUM_PROMISE_MANAGER:false,
    onPrepare:async () => {
      await browser.waitForAngularEnabled(false);
      await browser.manage().timeouts().pageLoadTimeout(10000);
      await browser.manage().timeouts().implicitlyWait(2000);
      await browser.manage().window().maximize();
      // for non-angular page
      browser.ignoreSynchronization = true;
  },
  capabilities: {
    browserName: 'chrome',
  
    chromeOptions: {
       args: [ "--headless", "--disable-gpu"]
     }
  }
  
}