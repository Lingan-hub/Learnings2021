import { browser } from "protractor";
exports.config = {

    directConnect: true,
    framework: 'mocha',

    SELENIUM_PROMISE_MANAGER: false,
    capabilities:
    {
        browserName: 'firefox',
        //  'args': ['--safe-mode'],
         'moz:firefoxOptions': {
          args: [ "--headless" ]
      },

    },


    suites: {
        mochaTest: '../JSFiles/TestSpecialties/*.js'
    },
    onPrepare: async function () {
        await browser.driver.manage().window().maximize();
    },

    mochaOpts: {
        reporter: 'mocha-allure-reporter',
        timeout: 100000
    },
}