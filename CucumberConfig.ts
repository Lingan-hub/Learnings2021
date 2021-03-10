import {Config} from 'protractor';
let reporter = require('cucumber-html-reporter');
export let config: Config = {

   //seleniumAddress: 'http://localhost:4444/wd/hub',
   directConnect: true,
   SELENIUM_PROMISE_MANAGER: false,
    framework: 'custom',
  
   
    frameworkPath: require.resolve('protractor-cucumber-framework'),
  
    
    
   capabilities: {
     browserName: 'firefox',
       'moz:firefoxOptions': {
      args: [ "--headless" ]
  },
   },
 

    
    specs: [
       '../Features/AddOwner.feature',
       '../Features/AddVeterinary.feature',
       '../Features/AddDeletePet.feature'

    ],
  
    cucumberOpts: {
      
      strict: true,
      // tags:"@Ownervalidation",
      format:'json:./cucumberReports.json',
      
      require: [
          '../JSFiles/StepDefinition/*.js',
      ]
    },
    onComplete: () =>
    {
      var options = {
        theme: 'bootstrap',
        jsonFile: './cucumberReports.json',
        output: './cucumber_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "STAGING",
           "Browser": "Chrome  79.0.3945.88",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };

    reporter.generate(options);
    }
  };
