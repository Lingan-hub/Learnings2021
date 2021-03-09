import {browser, by, element, ExpectedConditions} from 'protractor';
import TestData from "../TestData/Properties";
const log=require('../Logs/Log4JS').file;
const expect=require('chai').expect;
var ec=ExpectedConditions;


export class NewVeterinary
{

    private firstname=element(by.css("#firstName"));

    private lastname=element(by.css("#lastName"));

    private typeDropdown=element(by.css("#specialties"));

    private selectType=element(by.css("#specialties option:nth-child(2)"));

    private save=element(by.css("button[type='submit']"));

    private veterinariansTbl=element(by.css("table.table-striped"));


    public async enterFN_LN( {First_Name, Last_Name} : { First_Name: any; Last_Name:any}) {

        
        await this.firstname.sendKeys(First_Name);
        expect(First_Name).to.have.lengthOf.above(2);
        log.debug("FirstName length is greater than 2");


        await this.lastname.sendKeys(Last_Name);
        expect(Last_Name).to.have.lengthOf.above(2);
        log.debug("LastName length is greater than 2");

    }

    public async selectSpecialist()
    {
        await this.typeDropdown.click();
        log.debug("clicked on TypeDropdown")
        await this.selectType.click();
        log.debug("Selected a Specialist type");

        
    }

    public async saveVet()
    {
        await this.save.click();
        log.debug("Clicked on save button");
    }

    public async verifyNewVetDetails(){

        await browser.wait( ec.visibilityOf( this.veterinariansTbl ), 20000, 'Taking too long to load' );
        var veternariDetails=await this.veterinariansTbl.all( by.tagName( "tr" )).last();
        await browser.actions().mouseMove( veternariDetails ).perform();
        let vetName = await veternariDetails.getText();    
        let res= await vetName.substr(0,13);
        await log.debug( "Vet details are :- " + res );
        await expect( TestData.userData.VeterinariData.vetDetails ).to.equal( res );
       
    
    }
    

}