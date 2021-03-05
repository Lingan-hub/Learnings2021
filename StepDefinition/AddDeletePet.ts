import {Given,Then,When} from "cucumber";
import { Home } from "../PageObjects/Home";
import { PetTypes } from "../PageObjects/PetTypes";

let { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(50 * 1000);

let home=new Home();
let petTypes=new PetTypes();

Given('User is on Pet Types page', async ()=> {
    
    await home.navigateToPetTypesPage();

  });

  When('Verify page title', async ()=> {
   
    await petTypes.verifyTitle();

  });

  When('All the buttons in the page are enabled', async ()=> {
   
    await petTypes.isAddHomeDeleteEditEnable();

  });

  When('Click on add buttons', async ()=> {
    
    await petTypes.clickOnAdd();

  });

  When('Enter the {string} and click on Save button', async (Name:any)=> {

    await petTypes.enterName({Name});
    await petTypes.clickOnSave();

  });

  Then('Count the PetTypes and User should see all the PetTypes', async ()=> {

    await petTypes.countAndDisplay();

  });

  Then('click on first delete button page and show the deleted pet Name', async ()=> {
        
    await petTypes.deleteFirstPet();

  });
