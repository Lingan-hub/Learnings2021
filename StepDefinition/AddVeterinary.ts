
import { Given, Then, When } from "cucumber";
import { browser } from "protractor";
import { Home } from "../PageObjects/Home";
import { NewVeterinary } from "../PageObjects/NewVeterinary";
let home=new Home();
let newVeterinary=new NewVeterinary();


let { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(50 * 1000);


Given('user will Navigate to Petclinic Home page and Verify HomePage Title', async ()=> {

  await home.navigateToHomepage();
  await home.titleVerification();
 
});

  When('user clicks on VETERINARIANS dropdown and select Add New option', async ()=> {

    await home.navigateToVeterinaryPage();
   
  });

  When('provide {string} {string}', async (First_Name: any,Last_Name: any)=> {

    
    await newVeterinary.enterFN_LN({First_Name, Last_Name});
   
  });


  When('click on Type dropdown and select any option', async () =>{

    await newVeterinary.selectSpecialist();
    
  });


  Then('click on save button', async ()=> {
    
    await newVeterinary.saveVet();

  });

  Then('Verify the Newly added Name in Veterinary page', async ()=> {

    await newVeterinary.verifyNewVetDetails();
    
  });