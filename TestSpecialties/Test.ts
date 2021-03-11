import { browser } from "protractor";
import {Home} from "../PageObject/Home";
import { describe, it } from 'mocha';
import testdata from "../TestData/Properties";
declare const allure: any;
const log=require('../Logs/Log4JS').file;

let home=new Home();

describe('Testing Petclic Application',function (){

    this.beforeAll('Navigate to the Petclinic URL', async()=>{

    await browser.get(testdata.appUrl);

    });

    it("Click on Home button and verify Homepage title ",async()=>{
        await home.navigateToHomepage();
        log.debug("clicked on Home button");
        await home.titleVerification();
        log.debug("Welcome to Petclinic");
    });

    it("Click on Specialist button and verify Specialist page title",async()=>{

        await home.navigateToSpecialtiesPage();
        log.debug("Clicked on Specialist button");
        await home.specialtiestitleVerification();
        log.debug("Specialties");

    });

    it("Verify all the buttons enabled",async()=>{

        await home.isAddHomeDeleteEditEnable();
        log.debug("All buttons are enabled");

    });

    it("Click on Add button",async()=>{

        await home.clickOnAdd();
        log.debug("clicked on Add  button");

    });

    it("Enter Specialist name",async()=>{

        await home.enterName();
        log.debug("Name entered");

    });

    it("Verify is save button enabled or not",async()=>{

        await home.clickSave();
        log.debug("Clicked on Save button");

    });
    afterEach(async ()=> {
        const png = await browser.takeScreenshot();
        await allure.createAttachment('Screenshot', new Buffer(png, 'base64'), 'image/png');
    })

});
